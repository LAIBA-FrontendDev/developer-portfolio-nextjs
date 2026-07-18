import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laiba Israil | Frontend Developer Portfolio",
  description: "17-Year-Old Self-Taught Frontend Developer building shiny production-ready web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* React Hot Toast setup for success notifications */}
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}

