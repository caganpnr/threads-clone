import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

//For SEO optimization, Next.js allows us to use metadatas to optimize SEO.
export const metadata = {
  title: "Threads",
  description: "Threads clone made by me.",
};

//Subsets have to be an array so that it can take multiple fonts.
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
