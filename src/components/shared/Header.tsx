


import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import AuthButtons from "./AuthButtons";


const Header = async () => {
    await connection()

    const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' });

    return (

        <div>
            <div className="flex items-center justify-between max-w-7xl mx-auto py-2 px-2">
                <Link href='/' className="flex items-center gap-2">

                    <button className="btn bg-green-700 rounded-2xl py-6"><Image src={'/logo-icon.png'} alt="বাজার দর" width={20} height={20} className="brightness-0 invert"></Image></button>
                    <div>
                        <h2 className="font-bold text-2xl">বাজার দর</h2>
                        <p className="text-sm min-[400px]:text-base text-neutral-700">{date}</p>
                    </div>

                </Link>
                <AuthButtons></AuthButtons>
            </div>
        </div>

    );
};

export default Header;