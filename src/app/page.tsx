import Banner from "@/components/Banner";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
<Suspense fallback='loading'>
  <Banner></Banner>
</Suspense>
    </div>
  );
}
