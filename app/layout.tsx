import Script from "next/script";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextJS 14.2.10",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          dangerouslySetInnerHTML={{
            __html: `jdgm = window.jdgm || {};jdgm.SHOP_DOMAIN = 'your-daily-widget.myshopify.com';jdgm.PLATFORM = 'shopify';jdgm.PUBLIC_TOKEN = 'R0MI75j5Yn871ukChgfoyMHDTiI';`,
          }}
        />
        <Script
          data-cfasync="false"
          type="text/javascript"
          async
          src="https://cdn.judge.me/widget_preloader.js"
        />
        <Script
          data-cfasync="false"
          type="text/javascript"
          async
          src="https://cdn1.judge.me/assets/installed.js"
        />
        {children}
      </body>
    </html>
  );
}
