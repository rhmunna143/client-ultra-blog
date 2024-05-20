import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ultra Blog - The best blog in the world!",
  description: "Powerful blog engine for the modern web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        RootLayout
        
        {children}

      </body>
    </html>
  );
}
