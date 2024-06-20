// import type { Metadata } from "next";
"use client";
import { Inter } from "next/font/google";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import {
  RainbowKitProvider,
  darkTheme,
  type Locale,
} from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";
import { config } from "./wagmi";
import { coinbaseWallet } from "@rainbow-me/rainbowkit/wallets";
// Enable Coinbase Smart Wallet for testing

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Assuming the locale is the first part of the pathname
  const locale = pathname.split("/")[1] as Locale;

  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider locale={locale}>{children}</RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
