"use client";
import React, { useState } from "react";
import LanguageSwitcher from "./lang-switcher";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function Navbar() {
	const t = useTranslations("Navbar");
	const [isOpen, setIsOpen] = useState(false);
	const localeActive = useLocale();

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="navbar fixed flex flex-row justify-between bg-background z-[120]">
			<div className="flex-1">
				<Link href={`/${localeActive}`} className="btn btn-ghost text-xl">
					<Image src={logo} width={50} height={50} alt={`Logo`} />
				</Link>
			</div>
			<div
				className={`sm:hidden fixed block inset-0 bg-white backdrop-blur-sm bg-opacity-80 z-50 pt-10 transition-transform duration-1000 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="bg-transparent rounded-lg p-5 flex">
					<ul className="menu menu-vertical">
						<li>
							<a className="font-grotesk font-bold text-5xl" href="#">
								{t("genres")}
							</a>
						</li>
						<li>
							<a className="font-grotesk font-bold text-5xl" href="#">
								{t("how")}
							</a>
						</li>
						<li>
							<a className="font-grotesk font-bold text-5xl" href="#">
								{t("order")}
							</a>
						</li>
						<li>
							<LanguageSwitcher />{" "}
						</li>
					</ul>
				</div>
				<button
					className="btn absolute -top-2 right-2 btn-square btn-ghost bg-[#B59861] mt-4"
					onClick={handleToggleMenu}
				>
					X
				</button>
			</div>
			<div className="flex-none">
				<button
					className="btn btn-square btn-ghost bg-[#B59861] lg:hidden"
					onClick={handleToggleMenu}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 transition-transform duration-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
				<ul className="menu menu-horizontal px-1 hidden lg:flex">
					<li>
						<a className="font-grotesk font-bold text-xl" href="#">
							{t("genres")}
						</a>
					</li>
					<li>
						<a className="font-grotesk font-bold text-xl" href="#">
							{t("how")}
						</a>
					</li>
					<li>
						<a className="font-grotesk font-bold text-xl" href="#">
							{t("order")}
						</a>
					</li>
				</ul>
				<span className="hidden lg:flex">
					<LanguageSwitcher />
				</span>
			</div>
		</div>
	);
}

export default Navbar;
