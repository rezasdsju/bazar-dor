import Banner from "@/components/homepage/Banner";
import PriceIncreasedProducts from "@/components/homepage/PriceIncreasedProducts";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
<Suspense fallback={<div className="mx-auto text-2xl text-blue-300 pt-10">Loading...</div>}>
  <Banner></Banner>
  
</Suspense>
<PriceIncreasedProducts></PriceIncreasedProducts>
    </div>
  );
}
