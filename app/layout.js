import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SessionWrapper from "@/Components/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fund Raiser - a site to raise fund",
  description: "Created by ❤️ with Aslam Coding to raise funds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[90.6vh]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
