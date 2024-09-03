import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Script from 'next/script';

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "BG Drummer",
  description: "Custom Greetings from the MASTER",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
		<html lang={locale}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<Navbar />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
