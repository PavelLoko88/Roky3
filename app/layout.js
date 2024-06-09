import {Montserrat } from "next/font/google";
import "./globals.css";

const mostserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export const metadata = {
  title: "Search news",
  description: "Search news",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mostserrat.className}>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
