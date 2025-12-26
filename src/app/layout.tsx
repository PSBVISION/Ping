import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "./globals.css";

const victorMono  = Victor_Mono({
  variable: "--font-victor-mono",
  subsets: ["latin"],
  weight: ["700"],
})

export const metadata: Metadata = {
  title: "Ping",
  description: "BlinkChat is a real-time chat application built using Next.js App Router, TypeScript, Tailwind CSS, and Redis for fast message delivery. The app supports instant message broadcasting, server-driven events, and a minimal UI focused on usability and performance. It demonstrates modern full-stack development practices including real-time communication, scalable backend design, and clean component architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <body
        className={`${victorMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
