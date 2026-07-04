import type { Metadata } from "next";
import { SiteHeader } from "@/presentation/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Play eSailing Results Portal",
  description: "Public-first results platform for Play eSailing races.",
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