import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function Genres() {
	const locale = useLocale();
	const isBg = locale === "bg";
	const t = useTranslations("Genres");
	return (
		<div className="bg-background h-auto w-screen mt-[10rem]">
			<div className="grid place-items-center place-content-start w-screen h-full px-10 py-0 flex-col lg:flex-row md:mt-0">
				<h1 data-aos="fade-up" className={`font-grotesk font-bold from-ex:max-to-ex:text-4xl ${isBg ? 'text-5xl' : 'text-6xl'} md:text-9xl text-center`}>
					<span className="text-[#B59861] m-0">{t("title")}</span> <br />{" "}
					{t("title-br")}
				</h1>
				<section className="grid place-items-center place-content-start md:max-lg:grid-cols-2 grid-cols-1 md:grid-cols-6 gap-3 gap-y-5 mt-28">
					<div data-aos="fade-up" className="shadow-bottom col-span-2 h-[380px] md:h-[300px] lg:h-[450px] shadow-black border-2 border-black rounded-lg">
						<h1 className="md-max-lg:text-xl text-2xl md:text-4xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
							{t("bg-folk").toUpperCase()}
							<img
								src="bg-flag.jpg"
								className="mr-5 rounded-full w-16 h-16 scale-75 md:scale-100"
								alt=""
							/>
						</h1>
						<p className="text-sm md:text-xl py-6 p-4">{t("bg-description")}</p>
					</div>
					<div data-aos="fade-up" className="shadow-bottom col-span-2 h-[380px] md:h-[300px] lg:h-[450px] shadow-black border-2 border-black rounded-lg">
						<h1 className="whitespace-nowrap md-max-lg:text-xl text-2xl md:text-4xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
							{t("pop-folk").toUpperCase()}
							<img
								src="planeta.jpg"
								className="mr-5 rounded-full w-16 h-16 scale-75 md:scale-100"
								alt=""
							/>
						</h1>
						<p className="text-sm md:text-xl py-6 p-4">
							{t("pop-description")}
						</p>
					</div>
					<div data-aos="fade-up" className="shadow-bottom col-span-2 h-[380px] md:h-[300px] lg:h-[450px] shadow-black border-2 border-black rounded-lg">
						<h1 className="md-max-lg:text-xl text-2xl md:text-4xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
							{t("ori").toUpperCase()}
							<img src="arabic.png" className="mr-5 w-16 h-16 scale-75 md:scale-100" alt="" />
						</h1>
						<p className="text-sm md:text-xl py-6 p-4">
							{t("ori-description")}
						</p>
					</div>
					<div data-aos="fade-up" className="shadow-bottom h-[380px] md:h-[300px] lg:h-[400px] md:max-lg:col-span-2 col-span-2 md:col-span-3 shadow-black border-2 border-black rounded-lg">
						<h1 className="md-max-lg:text-xl text-2xl md:text-4xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
							{t("rege").toUpperCase()}
							<img src="reggaeton.png" className="mr-5 w-16 h-16 scale-75 md:scale-100" alt="" />
						</h1>
						<p className="text-sm md:text-xl py-6 p-4">
							{t("rege-description")}
						</p>
					</div>
					<div data-aos="fade-up" className="shadow-bottom h-[380px] md:h-[300px] lg:h-[400px] shadow-black border-2 md:max-lg:col-span-2 col-span-2 md:col-span-3 border-black rounded-lg">
						<h1 className="md-max-lg:text-xl text-2xl md:text-4xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
							{t("rap").toUpperCase()}
							<img src="rapper.png" className="mr-5 w-16 h-16 scale-75 md:scale-100" alt="" />
						</h1>
						<p className="text-sm md:text-xl py-6 p-4">
							{t("rap-description")}
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Genres;
