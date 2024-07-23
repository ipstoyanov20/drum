import Image from "next/image";
import React from "react";
import darbuka1 from "@/public/darbuka.jpeg";
import darbuka2 from "@/public/darbuka2.jpeg";
import { useTranslations } from "next-intl";

function Hero() {
	const t = useTranslations("Hero");
	return (
		<div className="hero grid place-items-start place-content-center bg-background min-h-screen mb-[10%] mt-[-10%] sm:mt-0">
			<div className="flex-col lg:flex-row-reverse">
				<div className="top-[40%] left-[5%] absolute lg:block hidden opacity-80">
					<div className="border-2 absolute top-[95%] left-[-10%] rounded-lg bg-white border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
						<p>{t("see-on-tiktok")}</p>
					</div>
					<Image
						src={darbuka1}
						alt="darbuk1"
						style={{ width: "auto", height: "auto" }}
						className="z-0 max-w-sm border-2 border-black shadow-bottom rounded-lg"
					/>
				</div>
				<div className="top-[15%] left-[75%] absolute lg:block hidden opacity-80">
					<div className="border-2 absolute z-10 translate-x-[120%] -translate-y-[40%] bg-white rounded-lg border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
						<p>{t("see-on-tiktok")}</p>
					</div>
					<Image
						src={darbuka2}
						alt="darbuka2"
						style={{ width: "auto", height: "auto" }}
						className="z-0 max-w-sm rounded-lg border-2 border-black shadow-bottom absolute"
					/>
				</div>

				<div className="grid place-items-center place-content-start w-full">
					<p className="font-bold text-[#B59861] text-xl hidden sm:block">
						{t("upper-p").toUpperCase()}
					</p>
					<h1 className="z-[10] from-ex:max-to-ex:text-5xl text-7xl font-bold sm:font-bold text-left font-grotesk m-5 sm:text-center sm:text-9xl">
						{t("h1-title")} <br /> {t("h1-br-title")}
					</h1>
					<p className="m-5 grid place-content-center text-left sm:text-center from-ex:max-to-ex:text-sm text-lg text-[#B59861] sm:text-base">
						{t("lower-p")}
						<br />
						{t("lower-br-p")}
					</p>
					<div className="grid grid-col-1 grid-rows-2 sm:grid-cols-2 gap-0">
						<button className="ml-0 relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-96 sm:w-36  h-10 shadow-inner-top grid place-content-center shadow-[#D9D9D9] rounded-sm px-4 py-3 mb-0 sm:m-3 bg-[#B59861] text-[#f3ecdd] font-bold font-grotesk ">
							{t("left-button")}
						</button>
						<button className="ml-0 whitespace-nowrap  relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-96  sm:w-36 h-10 shadow-inner-top grid place-content-center shadow-[#D9D9D9] border border-[#B59861] rounded-sm px-4 py-3 mt-3 sm:m-3 bg-transparent text-[#B59861] font-bold font-grotesk ">
							{t("right-button")}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
