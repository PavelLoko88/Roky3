import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
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
      <body className={roboto.className}>
        
        {children}
        </body>
    </html>
  );
}
