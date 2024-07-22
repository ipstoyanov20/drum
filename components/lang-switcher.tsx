"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const localeActive = useLocale();

	const handleChange = (newLocale: string) => {
		startTransition(() => {
			router.replace(`/${newLocale}`);
			document.cookie = `NEXT_LOCALE=${newLocale}`;
		});
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
				{localeActive} <span className="plus-icon">+</span>
			</button>
			<div className="dropdown-content">
				<button
					disabled={isPending}
					onClick={() => handleChange("en")}
				>
					English
				</button>
				<button
					disabled={isPending}
					onClick={() => handleChange("bg")}
				>
					Български
				</button>
			</div>
		</div>
	);
}
