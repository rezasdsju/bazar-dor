'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";




interface INav {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}
const NavItem = ({ nav }: { nav: INav }) => {
    const pathName = usePathname()
    console.log('pathname: ', pathName)
    const isActive = pathName === `/navItemDetail/${nav.slug}`
    return (


        <div className={isActive ? 'bg-green-600 rounded-xl px-3 py-2' : ''}>

            <Link href={`/navItemDetail/${nav.slug}`} className="flex gap-1">
                <span>{nav.icon}</span>
                <p>{nav.nameBn}</p>
            </Link>
        </div>

    );
};

export default NavItem;