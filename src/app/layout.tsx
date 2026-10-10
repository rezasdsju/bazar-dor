import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
// import { Suspense } from "react";
import NavLinks from "@/components/shared/NavLinks";
import Marquee from "@/components/shared/Marquee";
import { Suspense } from "react";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
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
      <body className="min-h-full flex flex-col ">

        <Suspense
          fallback={
            <div className="w-full h-1 bg-gray-200 overflow-hidden">
              <div className="h-full w-1/3 bg-blue-400 animate-loading-bar" />
            </div>
          }>
          <Header></Header>
        </Suspense>
        <NavLinks></NavLinks>
        <div className="bg-gray-50">

          <Marquee></Marquee>
          <main>
            {children}
          </main>
          <Footer></Footer>
        </div>
        <ToastContainer />

      </body>
    </html>
  );
}