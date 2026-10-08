import Banner from "@/components/homepage/Banner";
import PriceIncreasedProducts from "@/components/homepage/PriceIncreasedProducts";
import { Suspense } from "react";
// import { Suspense } from "react";

export default function Home() {
  return (
    <div>

<Suspense><Banner></Banner></Suspense>
<PriceIncreasedProducts></PriceIncreasedProducts>
    </div>
  );
}
