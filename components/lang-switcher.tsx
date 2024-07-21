"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { i18nConfig } from "@/i18nConfig";

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const currentPathname = usePathname();

	const handleChange = (newLocale: string) => {
		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = date.toUTCString();
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

		// redirect to the new locale path
		if (currentLocale === i18nConfig.defaultLocale) {
			router.push("/" + newLocale + currentPathname);
		} else {
			router.push(
				currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
			);
		}

		router.refresh();
	};
	const isLocaleAlreadyTheSame = (lang: string) => {
		return (
			document.cookie
				.split("; ")
				.find((row) => row.startsWith("NEXT_LOCALE="))
				?.split("=")[1] === lang
		);
	};

	return (
		<div className="dropdown scale-75 sm:scale-100">
			<button className="dropdown-button">
				Language <span className="plus-icon">+</span>
			</button>
			<div className="dropdown-content">
				<button
					disabled={isLocaleAlreadyTheSame("en")}
					onClick={() => handleChange("en")}
				>
					English
				</button>
				<button
					disabled={isLocaleAlreadyTheSame("bg")}
					onClick={() => handleChange("bg")}
				>
					Български
				</button>
			</div>
		</div>
	);
}
