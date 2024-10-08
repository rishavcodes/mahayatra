import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MahaYatra",
  description: "Journey Beyond Boundaries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <Navbar />
        {children}


        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
