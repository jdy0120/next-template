import type { Metadata } from "next";
import localFont from "next/font/local";
import ReactQueryProvider from "../../lib/providers/ReactQueryProvider";
import StoreProvider from "../../lib/providers/ReduxStoreProvider";
import StitchesProvider from "../../lib/providers/StitchesProvider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <StitchesProvider>
          <ReactQueryProvider>
            <StoreProvider>{children}</StoreProvider>
          </ReactQueryProvider>
        </StitchesProvider>
      </body>
    </html>
  );
}
