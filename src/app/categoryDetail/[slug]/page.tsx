

import Details from "@/components/categoryDetails/Details";
import { Suspense } from "react";
const NavItemDetailPage = async ({ params }: { params: { slug: string } }) => {
    return (
        <Suspense
            fallback={
                <div className="w-full h-1 bg-gray-200 overflow-hidden">
                    <div className="h-full w-1/3 bg-blue-400 animate-loading-bar" />
                </div>
            }>
            <Details params={params}></Details>
        </Suspense>
    )
};

export default NavItemDetailPage;