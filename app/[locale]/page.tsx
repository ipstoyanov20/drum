import React from "react";
import Order from "@/components/order";
import Works from "@/components/how-it-works";
import Genres from "@/components/genres";
import Hero from "@/components/hero";
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/translations-provider';
const i18nNamespaces = ['home'];



export default async function Home({ params: { locale } }: { params: { locale: any } }) {
	const { resources } = await initTranslations(locale, i18nNamespaces);

	return (
		<TranslationsProvider
		namespaces={i18nNamespaces}
		locale={locale}
		resources={resources}>
			<main className="flex min-h-screen flex-col items-center overflow-x-hidden">
				<Hero/>
				<Genres/>
				<Works/>
				<Order/>
			</main>
		</TranslationsProvider>
	);
}
