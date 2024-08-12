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
					<a className="rounded-t-md rounded-b-none" onClick={() => handleChange("en")}>English</a>
				</li>
				<li className="p-0">
					<a className="rounded-b-md rounded-t-none" onClick={() => handleChange("bg")}>Български</a>
				</li>
			</ul>
		</details>
		// <Menu as="div" className="dropdown mr-10 relative">
		// 	<div>
		// 		<MenuButton className="dropdown-button">
		// 			{localeActive.toUpperCase()} <span className="plus-icon">+</span>
		// 		</MenuButton>
		// 	</div>

		// 	<MenuItems
		// 		transition
		// 		className="absolute right-0 z-10 mt-2 w-36 rounded-md bg-white shadow-lg transition data-[closed]:scale-75 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
		// 	>
		// 		<div className="py-1">
		// 			<MenuItem>
		// 				<a
		// 					onClick={() => handleChange("en")}
		// 					className="cursor-pointer flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
		// 				>
		// 					English
		// 				</a>
		// 			</MenuItem>
		// 			<MenuItem>
		// 				<a
		// 					onClick={() => handleChange("bg")}
		// 					className="cursor-pointer flex px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
		// 				>
		// 					Български
		// 				</a>
		// 			</MenuItem>
		// 		</div>
		// 	</MenuItems>
		// </Menu>
		// <div className="dropdown mr-10 relative">
		// 	<button
		// 		onClick={() => setIsOpen(!isOpen)}
		// 		className="dropdown-button"
		// 		aria-haspopup="true"
		// 		aria-expanded={isOpen}
		// 	>
		// 		{localeActive.toUpperCase()} <span className="plus-icon">+</span>
		// 	</button>
		// 	<div
		// 		className={`dropdown-content transition-all duration-300`}
		// 		style={{opacity:  isOpen ? '1' : '0'}}
		// 		role="menu"
		// 	>
		// 		<button
		// 			onClick={() => handleChange("en")}
		// 			className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
		// 			role="menuitem"
		// 		>
		// 			English
		// 		</button>
		// 		<button
		// 			onClick={() => handleChange("bg")}
		// 			className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
		// 			role="menuitem"
		// 		>
		// 			Български
		// 		</button>
		// 	</div>
		// </div>
	);
}
