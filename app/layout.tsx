import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Groene Vingers - AI Tuinadvies voor Jouw Perfecte Tuin",
  description: "Stel al je tuinvragen en krijg direct slim, persoonlijk en begrijpelijk advies. Van plantenverzorging tot seizoentips, van groenten tot bloemen - wij helpen je tuin floreren met AI-powered tuinadvies.",
  keywords: "tuinadvies, AI tuin, plantenverzorging, tuintips, seizoensadvies, groene vingers, tuinieren, planten, bloemen, groenten",
  authors: [{ name: "Groene Vingers" }],
  creator: "Groene Vingers",
  openGraph: {
    title: "Groene Vingers - AI Tuinadvies",
    description: "Krijg slim tuinadvies voor een bloeiende tuin",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
