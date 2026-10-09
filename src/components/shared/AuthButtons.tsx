'use client'
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

const AuthButtons = () => {
    // console.log('useSession: ', useSession())
    const { data: session } = useSession()
    // console.log('session: ', session)

    const handleSignOut = async () => {
        const { data: resData, error } = await signOut()
        if (resData) {
            toast.success('সফলভাবে সাইন আউট সম্পন্ন হয়েছে!')
            redirect('/')
        }
        if (error) {
            toast.error('দুঃখিত সাইন আউট সম্পন্ন হয় নি!')
        }
    }

    return (
        <div>
            {session?.user ?
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100  rounded-full ring-2 ring-offset-2">
                            <Image src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_WmjM7XQYNtJvHwROBTGZ_mGtUMtHhJgl5Gr3uKCmA&s`} alt='profileImage' width={20} height={20} />
                        </div>
                    </div>
                    <p>{session.user.name}</p>
                  
                    <div className="flex items-center gap-1">
                        <span><FaUser /></span>
                    <Link href={`/my-profile`}><span>আমার প্রোফাইল</span></Link>
                    </div>
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