
interface INav {
    id:string,
    slug:string,
    nameBn:string,
    icon: string
}
const NavLinks = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const navs:INav[] = await res.json()
    return (
<div className="border-t border-b  border-gray-100 py-4 px-2">
            <div className="flex flex-wrap gap-5 max-w-7xl" >
            {
                navs.map((nav:INav) => <div key={nav.id} >
                    <div className="flex gap-1">
                        <span>{nav.icon}</span>
                        <p>{nav.nameBn}</p>
                    </div>
                </div>)
            }
        </div>
</div>
    );
};

export default NavLinks;