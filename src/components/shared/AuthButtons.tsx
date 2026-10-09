'use client'
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
const AuthButtons = () => {
    // console.log('useSession: ', useSession())
    const { data: session } = useSession()
    // console.log('session: ', session)

    const handleSignOut = async()=>{
        const {data:resData, error} = await signOut()
        if (resData){
            toast.success('সফলভাবে সাইন আউট সম্পন্ন হয়েছে!')
            redirect('/')
        }
        if (error){
            toast.error('দুঃখিত সাইন আউট সম্পন্ন হয় নি!')
        }
    }

    return (
        <div>
            {session?.user ? 
            <div className="flex items-center gap-2">
                <p>{session.user.name}</p>
               <button onClick={handleSignOut} className="btn bg-green-600 font-bold text-white">সাইন আউট</button>
            </div> :
                <div className="flex items-center gap-2 ">
                    <Link href={`/sign-in`}><button className="font-bold cursor-pointer">সাইন ইন</button></Link>
                    <Link href={`/sign-up`}><button className="btn bg-green-600 font-bold text-white">সাইন আপ</button></Link>
                </div>}
        </div>

    );
};

export default AuthButtons;