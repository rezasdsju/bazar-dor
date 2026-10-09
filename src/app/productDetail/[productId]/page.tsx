import ProductDetail from "@/components/productDetails/ProductDetail";
import { Suspense } from "react";


const ProductDetailPage = async({params}:{params:{productId:string}}) => {

    return (
        <div>
            <Suspense fallback={<div className="mx-auto text-2xl text-blue-300 pt-10">Loading...</div>}>
                <ProductDetail params={params}></ProductDetail>
            </Suspense>
        </div>
    );
};

export default ProductDetailPage;