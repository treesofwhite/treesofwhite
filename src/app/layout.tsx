import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trees of White",
  description: "Trees of White Artist Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          className="js-site-favicon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
