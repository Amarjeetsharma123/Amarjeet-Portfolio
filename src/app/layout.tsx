import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LenisProvider } from "@/components/LenisProvider";
import { Preloader } from "@/components/Preloader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SWRegistration } from "@/components/SWRegistration";
import { InstallButton } from "@/components/InstallButton";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Amarjeet Sharma | Portfolio",
  description: "Full Stack Engineer specializing in premium web experiences.",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`}>
      <body className="antialiased bg-bg text-white">
        <LenisProvider>
          <Preloader />
          <ScrollProgress />
          <CustomCursor />
          <SWRegistration />
          <InstallButton />
          {children}
        </LenisProvider>

      </body>
    </html>
  );
}
