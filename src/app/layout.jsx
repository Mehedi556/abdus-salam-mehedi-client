import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import Providers from "@/lib/Providers";

export const metadata = {
  title: "Abdus Salam Mehedi",
  description: "Portfolio of Abdus Salam Mehedi",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
      <body className={`antialiased`}>
        <>
          {children}
        </>
        <Toaster richColors/>
        </body>
    </html>
    </Providers>
    
  );
}
