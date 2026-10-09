
import { Suspense } from "react";
import NavItem from "./NavItem";
interface INav {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}
const NavLinks = async () => {
    'use cache'
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const navs: INav[] = await res.json()
    return (
        <div className="border-t border-b  border-gray-100 py-4 px-2 ">
            <div className="flex flex-wrap items-center gap-5 max-w-7xl mx-auto px-3" >
                {
                    navs.map((nav: INav) => <Suspense key={nav.id}><NavItem  nav={nav}/></Suspense> )
                }
            </div>
        </div>
    );
};

export default NavLinks;