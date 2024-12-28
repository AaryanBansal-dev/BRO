import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "BRO - Borewell Rescue Operation",
  description: "A robot that can help rescuing kids from Borewells.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
