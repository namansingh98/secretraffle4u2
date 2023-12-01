import { Saira_Semi_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "./components/Hero/Navbar/Navbar";
import Footer from "./components/Hero/Footer/Footer";
import "@/app/Utils/global/utils.css"

const saira = Saira_Semi_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata = {
  title: "Secret Raffle 4U",
  description: "this is an site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
