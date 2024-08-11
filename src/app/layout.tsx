import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vasin Suksuchit",
  description: "A showcase of my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>

    </html>
  );
}