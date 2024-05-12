import { Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";

// const headerFontLB = Libre_Baskerville({ 
//   subsets: ["latin"],
//   weight: ['400'],
//   variable: '--font-libBask',
// });

// const bodyFontM = Montserrat({
//   subsets: ["latin"],
//   weight: ['400'],
//   variable: '--font-M',
// });

export const metadata = {
  title: "Grade My Teacher",
  description: "Placing teachers and students on more equal ground since 2024.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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

//className={`${bodyFontM.className} ${headerFontLB.className}`}
