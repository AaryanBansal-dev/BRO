import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export const metadata = {
  title: "BRO - Borewell Rescue Operation",
  description: "A robot that can help rescuing kids from Borewells.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className="flex-row">{children}</main>
        
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2025/01/01/16/20250101161839-TX09GKSE.js"></script> 
        <Footer></Footer>
      </body>
    </html>
  );
}
