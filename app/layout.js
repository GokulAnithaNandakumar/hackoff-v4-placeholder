import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HackOff V4.0",
  description: "India's biggest hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<script defer async src="https://apply.devfolio.co/v2/sdk.js"></script></body>
    </html>
  );
}
