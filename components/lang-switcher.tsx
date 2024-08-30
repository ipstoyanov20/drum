"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
	const router = useRouter();
	const [, startTransition] = useTransition();
	const localeActive = useLocale();

	const handleChange = (newLocale: string) => {
		startTransition(() => {
			router.replace(`/${newLocale}`);
		});
	};

	return (
		<details className="dropdown relative w-28">
			<summary className="dropdown-button ml-5 lg:-translate-x-5 translate-x-0 mt-2 lg:mt-0 select-none">
				{localeActive.toUpperCase()} <span className="plus-icon">+</span>
			</summary>
			<ul className="mt-5 dropdown-content absolute right-0 bg-white text-black rounded-box z-[1] w-52 p-0 shadow">
				<li className="p-0 mt-1">
					<a className="rounded-t-md cursor-pointer rounded-b-none" onClick={() => handleChange("en")}>English</a>
				</li>
				<li className="p-0">
					<a className="rounded-b-md cursor-pointer rounded-t-none" onClick={() => handleChange("bg")}>Български</a>
				</li>
			</ul>
		</details>
	);
}
