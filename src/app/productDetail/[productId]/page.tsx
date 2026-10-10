import ProductDetail from "@/components/productDetails/ProductDetail";
import { Suspense } from "react";


const ProductDetailPage = async ({ params }: { params: { productId: string } }) => {

    return (
        <div>
            <Suspense
                fallback={
                    <div className="w-full h-1 bg-gray-200 overflow-hidden">
                        <div className="h-full w-1/3 bg-blue-400 animate-loading-bar" />
                    </div>
                }
            >
                <ProductDetail params={params}></ProductDetail>
            </Suspense>
        </div>
    );
};

export default ProductDetailPage;