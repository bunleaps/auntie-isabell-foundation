import { Work_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Home — Auntie Isabelle Foundation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={work_sans.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCZVGL5K"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
