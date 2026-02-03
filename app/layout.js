import "./globals.css";
import { Analytics } from "@vercel/analytics/react";


export const metadata = {
  title: "Jason Seh's Portfolio",
  description: "Personal portfolio of Jason Seh, a software engineer specializing in modern web technologies and AI/ML integration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
