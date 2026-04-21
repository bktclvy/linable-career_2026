import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "有限会社LINABLEキャリア",
  description: "環境を、人に合わせる。製造業DX・CSD伴走型コンサル・地域環境整備の3事業で、はたらく場を創ります。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Zen+Kaku+Gothic+New:wght@500;700;900&family=Kaisei+Decol:wght@500;700&family=Cormorant+Garamond:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-3ZCETH7GPS" />
    </html>
  );
}
