import { Nunito, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Swap the playwrite variable with the fraunces variable */}
      <body className={`${nunito.variable} ${fraunces.variable} font-nunito antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}