import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import 'next-logger'
import "../global.css";
import { verifyUserLoggedIn } from "../auth/withAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syfo Janitor",
  description: "App for doing janitor-stuff for the allmighty syfo teams",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await verifyUserLoggedIn();

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
