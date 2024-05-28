import type { Metadata } from "next";
import "../styles/globals.scss";


export const metadata: Metadata = {
  title: "Wipster || Proof of concept",
  description: "Wipster.io proof of concept",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
