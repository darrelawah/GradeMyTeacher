import "./globals.css";

//components
import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";

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
        </div>
        <div>
        </div>
      {children}
      </body>
      <FooterBar/>
    </html>
  );
}
