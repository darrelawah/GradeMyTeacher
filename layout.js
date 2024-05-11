//import { Inter } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grade My Teacher",
  description: "Placing teachers and students on more equal ground since 2024.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        <div>
          <h1>
            GradeMyTeacher
          </h1>
        </div>
        <div>
        </div>
      {children}
      <FooterBar/>
      </body>
    </html>
  );
}
