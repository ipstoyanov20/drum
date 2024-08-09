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
		<div className="dropdown mr-10 relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="dropdown-button"
				aria-haspopup="true"
				aria-expanded={isOpen}
			>
				{localeActive.toUpperCase()} <span className="plus-icon">+</span>
			</button>
			<div
				className={`dropdown-content ${isOpen ? 'block' : 'hidden'}`}
				role="menu"
			>
				<button
					disabled={isPending}
					onClick={() => handleChange("en")}
					className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
					role="menuitem"
				>
					English
				</button>
				<button
					disabled={isPending}
					onClick={() => handleChange("bg")}
					className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
					role="menuitem"
				>
					Български
				</button>
			</div>
		</div>
	);
}
