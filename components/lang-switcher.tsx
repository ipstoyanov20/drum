"use client";
import React, { useEffect, useState } from "react";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const localeActive = useLocale();
	const [isOpen, setIsOpen] = useState(false);

	const handleChange = (newLocale: string) => {
		startTransition(() => {
			router.replace(`/${newLocale}`);
		});
	};
		
	return (
		<div className="dropdown mr-10">
			<button onClick={()=>{setIsOpen(!isOpen)}} className="dropdown-button">
				{localeActive.toUpperCase()} <span className="plus-icon">+</span>
			</button>
			<div className={`dropdown-content transition-all duration-100 ${isOpen ? `opacity-100 visible`:`opacity-0 invisible`}`}>
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
