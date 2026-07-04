import type { Metadata } from "next";
import SiteHeader from "@/presentation/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Play eSailing Results Portal",
  description: "Race results, rankings, and administration in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}