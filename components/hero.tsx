"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import darbuka1 from "@/public/darbuka.jpeg";
import darbuka2 from "@/public/darbuka2.jpeg";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import SplitType from "split-type";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import trustpilot from "@/public/trustpilot.png";
function Hero() {
	const locale = useLocale();
	const isBg = locale === "bg";
	const t = useTranslations("Hero");
	const titleRef = useRef(null);
	const titleBrRef = useRef(null);

	const video1Ref = useRef<HTMLVideoElement>(null);
	const video2Ref = useRef<HTMLVideoElement>(null);

	const handlePlayVideos = () => {
		if (video1Ref.current) {
			video1Ref.current.play();
			  setTimeout(() => {
				if (video2Ref.current) {
				  video2Ref.current.play();
				  video2Ref.current.onended = () => {
					  if (video1Ref.current) {
						  video1Ref.current.currentTime = 0;
						  video1Ref.current.pause();
					  }
				  };
				}
			  }, 1000); // 1 second delay
			
		  }
	};

	useEffect(() => {
		AOS.init();
		titleRef.current ? new SplitType(titleRef.current) : null;
		titleBrRef.current ? new SplitType(titleBrRef.current) : null;
		let chars = document.querySelectorAll(".char");

		for (let i = 0; i < chars.length; i++) {
			chars[i].classList.add("translate-y-[300%]");
		}

		gsap.to(".char", {
			y: 0,
			stagger: 0.05,
			duration: 0.5,
			opacity: 1,
			delay: 0.5,
		});
	}, []);
	return (
		<div className="grid place-items-start place-content-start sm:place-content-center bg-background h-auto w-screen mt-28">
			<div className="flex-col">
				<button
					onClick={handlePlayVideos}
					className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
				>
					Play Videos
				</button>
				<div className="top-[40%] left-[5%] lg:max-xl:-left-[5%] absolute lg:max-xl:scale-[60%] xl:max-2xl:scale-75 lg:block hidden opacity-80">
					<div className="border-2 absolute top-[95%] left-[-10%] rounded-lg bg-white border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
						<p>{t("see-on-tiktok")}</p>
					</div>
					<video
						ref={video1Ref}
						src="/video1.mp4"
						className="z-0 max-w-sm border-2 border-black shadow-bottom rounded-lg"
						loop
					/>
				</div>
				<div className="top-[15%] left-[75%] absolute lg:max-xl:scale-[60%] xl:max-2xl:scale-75 lg:block hidden opacity-80">
					<div className="border-2 absolute z-10 translate-x-[120%] -translate-y-[40%] bg-white rounded-lg border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
						<p>{t("see-on-tiktok")}</p>
					</div>
					<video
						ref={video2Ref}
						src="/video2.mp4"
						className="z-0 max-w-sm rounded-lg border-2 border-black shadow-bottom absolute"
					/>
				</div>
				{/* <div className="top-[40%] left-[5%] lg:max-xl:-left-[5%] absolute lg:max-xl:scale-[60%] xl:max-2xl:scale-75 lg:block hidden opacity-80">
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
				<div className="top-[15%] left-[75%] absolute lg:max-xl:scale-[60%] xl:max-2xl:scale-75 lg:block hidden opacity-80">
					<div className="border-2 absolute z-10 translate-x-[120%] -translate-y-[40%] bg-white rounded-lg border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
						<p>{t("see-on-tiktok")}</p>
					</div>
					<Image
						src={darbuka2}
						alt="darbuka2"
						style={{ width: "auto", height: "auto" }}
						className="z-0 max-w-sm rounded-lg border-2 border-black shadow-bottom absolute"
					/>
				</div> */}

				<div
					data-aos="fade-up"
					className="grid place-items-center place-content-end w-full h-full mt-0 sm:mt-28"
				>
					<p className="font-bold text-[#B59861] text-xl hidden sm:block">
						{t("upper-p").toUpperCase()}
					</p>
					<h1
						ref={titleRef}
						className={`z-[10] overflow-hidden px-[min(50px,10rem)] m-0 w-full sm:max-[705px]:text-8xl from-ex:max-to-ex:text-4xl ${
							isBg ? "text-5xl from-ex:max-[272px]:text-3xl" : "text-5xl"
						} font-bold sm:font-bold text-left font-grotesk sm:text-center sm:text-9xl`}
					>
						{t("h1-title")}
					</h1>
					<h1
						ref={titleBrRef}
						className={`z-[10] overflow-hidden px-[min(50px,10rem)] m-0 w-full sm:max-[705px]:text-8xl from-ex:max-to-ex:text-4xl ${
							isBg ? "text-5xl from-ex:max-[272px]:text-3xl" : "text-5xl"
						} font-bold sm:font-bold text-left font-grotesk sm:text-center sm:text-9xl`}
					>
						{t("h1-br-title")}
					</h1>
					<p className="m-5 grid px-[min(50px,10rem)] w-full place-content-center text-left sm:text-center from-ex:max-to-ex:text-sm text-lg text-[#B59861] sm:text-base">
						{t("lower-p")}
						<br className="lg:block hidden " />
						{t("lower-br-p")}
						<span className="grid-col-1 relative grid-rows-3 place-content-center grid sm:hidden sm:grid-cols-2 gap-0 w-full mt-[min(20px,5rem)]">
							<i
								data-aos="fade-up"
								data-aos-delay="1000"
								className="grid absolute sm:hidden grid-flow-col pb-10 left-0 gap-2 w-auto"
							>
								<a
									href="https://www.tiktok.com/@stoyanoviv"
									target="_blank"
									className="social text-black"
								>
									<FontAwesomeIcon icon={faTiktok} size="2x" />
								</a>
								<a
									href="https://www.instagram.com"
									target="_blank"
									className="social text-black"
								>
									<FontAwesomeIcon icon={faInstagram} size="2x" />
								</a>
							</i>
							<a
								href="#order"
								className="ml-0 mt-14 after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg absolute w-full h-10 shadow-inner-top grid place-content-center shadow-[#D9D9D9] rounded-sm px-4 py-3 mb-0 sm:m-3 bg-[#B59861] text-[#f3ecdd] font-bold font-grotesk "
							>
								{t("left-button")}
							</a>
							<a
								className="nav-link hover:text-white  ml-0 mt-14 overflow-hidden whitespace-nowrap after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg absolute top-12 w-full h-10 shadow-inner-top grid place-content-center shadow-[#D9D9D9] border-2 border-[#03B57B] rounded-sm px-4 py-3 sm:m-3 bg-transparent text-[#03B57B] font-bold font-grotesk "
								href="https://www.trustpilot.com/review/bgdrummer.com"
								target="_blank"
								rel="noopener"
							>
								{t("right-button")}
							</a>
							<Image
								src={trustpilot}
								className="scale-125 translate-y-40"
								alt="Excellent performance"
							/>
						</span>
					</p>
					<div
						data-aos="fade-up"
						data-aos-delay="1000"
						className="hidden sm:grid grid-flow-col gap-0"
					>
						<a
							href="https://www.tiktok.com/@stoyanoviv"
							target="_blank"
							className="social"
						>
							<FontAwesomeIcon icon={faTiktok} size="2x" />
						</a>
						<a
							href="https://www.instagram.com"
							target="_blank"
							className="social"
						>
							<FontAwesomeIcon icon={faInstagram} size="2x" />
						</a>
					</div>
					<div className="grid-col-1 grid-rows-2 hidden sm:grid sm:grid-cols-2 gap-0 mt-[min(20px,5rem)]">
						<a href="#order">
							<button className="ml-0 relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-96 sm:w-36  h-10 shadow-inner-top grid place-content-center shadow-[#D9D9D9] rounded-sm px-4 py-3 mb-0 sm:m-3 bg-[#B59861] text-[#f3ecdd] font-bold font-grotesk ">
								{t("left-button")}
							</button>
						</a>
						<a
							href="https://www.trustpilot.com/review/bgdrummer.com"
							target="_blank"
							rel="noopener"
						>
							<button className="nav-link hover:text-white ml-0 whitespace-nowrap overflow-hidden  relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-96 sm:w-36 h-10 shadow-inner-top transition-all duration-300 grid place-content-center shadow-[#D9D9D9] border-2 border-[#03B57B] rounded-sm px-4 py-3 mt-3 sm:m-3 bg-transparent text-[#03B57B] font-bold font-grotesk">
								{t("right-button")}
							</button>
						</a>
					</div>
					<Image
						src={trustpilot}
						className="-translate-y-20 sm:block hidden"
						alt="Excellent performance"
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
