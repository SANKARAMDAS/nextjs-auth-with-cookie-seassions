import {getSession} from "@/actions";
import {redirect} from "next/navigation";
import Link from "next/link";

const PremiumPage =async () => {

    const session = await getSession()

    if(!session.isLoggedIn){
        redirect('/')
    }

    if(!session.isPro){
        return (
            <div className='notPremium'>
                <h1>Only Premium users can see this content!</h1>
                <Link href='/profile'>Go to the profile page to upgrade to premium</Link>
            </div>
        )
    }
    return (
        <div className='premium'>
            <h1>Welcome to the PremiumPage</h1>
            <ul>
                <li>Apple</li>
                <li>Google</li>
                <li>Amazon</li>
            </ul>
        </div>
    );
}

export default PremiumPage
