import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header></Header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
