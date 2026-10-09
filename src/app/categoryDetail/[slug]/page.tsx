

import Details from "@/components/categoryDetails/Details";
import { Suspense } from "react";
const NavItemDetailPage = async ({ params }: { params: { slug: string } }) => {
    return (
        <Suspense fallback={<div className="mx-auto text-2xl text-blue-300 pt-10">Loading...</div>}>
            <Details params={params}></Details>
        </Suspense>
    )
};

export default NavItemDetailPage;