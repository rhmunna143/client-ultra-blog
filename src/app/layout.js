// this is the root layout for the entire application
import { Inter } from "next/font/google";
import "./globals.css";
import AllContextProvider from "@/context/AllContext";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ultra Blog - The best blog in the world!",
  description: "Powerful blog engine for the modern web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AllContextProvider>

          <NavBar />

          <main className="min-h-screen">

            {children}

          </main>

          <Footer />

        </AllContextProvider>

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
