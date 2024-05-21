import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Footers from "./footer/Footers";
import Navbar from "./components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
const Quicksands = Quicksand({ subsets: ["latin"], weight: ["300", "600"] });
// export const metadata: Metadata = {
//   title: "ELASTIC",
//   description: "tulip",
//   icons: {
//     icon: "../../public/favicon.ico",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Quicksands.className}`}>
        <Navbar />
        {children}
        <Footers />
      </body>
    </html>
  );
}
