import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import "animate.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jayne Wangai",
  description: "LOML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.className}  antialiased  flex  bg-pink-200 `}
      >
        {children}
      </body>
    </html>
  );
}
