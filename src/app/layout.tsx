import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { Suspense } from "react";
import NavLinks from "@/components/shared/NavLinks";
import Marquee from "@/components/shared/Marquee";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin","bengali"],
});



export const metadata: Metadata = {
  title: "Bazar-Dor",
  description: "A web application that provides the latest prices and detailed information about everyday essential products.",

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${notoSerifBengali.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback='Loading'>
          <Header></Header>
          <NavLinks></NavLinks>
          <Marquee></Marquee>
        </Suspense>
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
