import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
 
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Darbuk",
  description: "Generated by Ivaylo",
};

// export function generateStaticParams() {
//   return i18nConfig.locales.map(locale => ({ locale }));
// }

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode,
  params: { locale: string },
}>) {

  // Providing all messages to the client
  // side is the easiest way to get started
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