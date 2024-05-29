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
      <head>
        <link rel="shortcut icon" href="https://www.wipster.io/hubfs/favicon-1.png"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
