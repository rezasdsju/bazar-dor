import AllProducts from "@/components/homepage/AllProducts";
import Banner from "@/components/homepage/Banner";
import PriceDecreasedProducts from "@/components/homepage/PriceDecreasedProducts";
import PriceIncreasedProducts from "@/components/homepage/PriceIncreasedProducts";
import { Suspense } from "react";
// import { Suspense } from "react";

export default function Home() {
  return (
    <div>

      <Suspense
        fallback={
          <div className="w-full h-1 bg-gray-200 overflow-hidden">
            <div className="h-full w-1/3 bg-blue-400 animate-loading-bar" />
          </div>
        }>
        <Banner></Banner>
      </Suspense>
      <PriceIncreasedProducts></PriceIncreasedProducts>
      <PriceDecreasedProducts></PriceDecreasedProducts>
      <AllProducts></AllProducts>
    </div>
  );
}
