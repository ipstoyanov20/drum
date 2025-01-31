"use client";
import React, { useEffect, useState } from "react";
import OrderForm from "./order-form";
import darbuka3D from "../public/3d-darbuka.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function Order() {
	const locale = useLocale();
	const isBg = locale === "bg";
	const t = useTranslations("Order");
	return (
		<span id="order" className="pt-24 w-screen">
			<h1
				data-aos="fade-up"
				className={`font-grotesk mb-10 font-bold from-ex:max-to-ex:text-4xl ${
					isBg ? "text-5xl" : "text-6xl"
				} md:text-9xl text-center`}
			>
				{t("title")}
			</h1>
			<div
				data-aos="fade-right"
				className="w-full h-full grid place-items-center place-content-center grid-cols-1 sm:grid-cols-[50%,50%]"
			>
				<div className="p-5 bg-[#B59861] shadow-md scale-[50%] sm:max-md:scale-[85%] md:max-lg:scale-[90%]  w-96 h-[27rem] sm:h-[27rem] sm:w-[27rem] sm:scale-100 animate-blob transition-all ease-in-out">
					<Image
						src={darbuka3D}
						alt="darbuka-3d"
						className="block absolute scale-150 top-[25%] left-[0%] w-full h-full"
						style={{ width: "auto", height: "auto" }}
					/>
				</div>
				<OrderForm />
			</div>
		</span>
	);
}

export default Order;
