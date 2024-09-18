"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import SplitType from "split-type";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import trustpilot from "@/public/trustpilot.png";
import useIntersectionObserver from "./useIntersectionObserver"; // Import the hook

function Hero() {
	const locale = useLocale();
	const [isPlayingDesktop, setIsPlayingDesktop] = useState(false);
    const [isPlayingMobile, setIsPlayingMobile] = useState(false);
	const isBg = locale === "bg";
	const t = useTranslations("Hero");
	const titleRef = useRef(null);
	const titleBrRef = useRef(null);

	const baseRef = useRef<HTMLVideoElement>(null);
	const strokeRef = useRef<HTMLVideoElement>(null);

	const baseMobileRef = useRef<HTMLVideoElement>(null);
	const strokeMobileRef = useRef<HTMLVideoElement>(null);

	const isBaseVisible = useIntersectionObserver(baseRef, { threshold: 0.5 });
	const isStrokeVisible = useIntersectionObserver(strokeRef, {
		threshold: 0.5,
	});
	const isBaseMobileVisible = useIntersectionObserver(baseMobileRef, {
		threshold: 0.5,
	});
	const isStrokeMobileVisible = useIntersectionObserver(strokeMobileRef, {
		threshold: 0.5,
	});

	const handlePlayPauseToggle = (isPlaying: boolean, setPlaying: React.Dispatch<React.SetStateAction<boolean>>, base: React.RefObject<HTMLVideoElement>, stroke: React.RefObject<HTMLVideoElement>, playVideos: () => void) => {
        if (isPlaying) {
            base.current?.pause();
            stroke.current?.pause();
        } else {
			//if blur on base is "blur(1px)" then just .play()
			base.current?.muted ? playVideos() : (base.current?.play(), stroke.current?.play());
        }
        setPlaying(!isPlaying);
    };
	
    const handlePlayVideos = (base: React.RefObject<HTMLVideoElement>, stroke: React.RefObject<HTMLVideoElement>, isPlaying: boolean, setPlaying: React.Dispatch<React.SetStateAction<boolean>>) => {
        if (base.current && stroke.current) {
            base.current.loop = false;
            stroke.current.loop = false;
            base.current.muted = false;
            stroke.current.muted = false;
            base.current.currentTime = 0;
            stroke.current.currentTime = 0;

            gsap.to(base.current, { filter: "blur(1px)", duration: 1 });
            gsap.to(stroke.current, { filter: "blur(1px)", duration: 1 });

            const handleVideoEnd = () => {
                gsap.to(base.current, { filter: "blur(4px)", duration: 1 });
                gsap.to(stroke.current, { filter: "blur(4px)", duration: 1 });

                base.current!.loop = true;
                stroke.current!.loop = true;
                base.current!.muted = true;
                stroke.current!.muted = true;
                base.current!.currentTime = 0;
                stroke.current!.currentTime = 0;
                base.current!.play();
                stroke.current!.play();
				setPlaying(false);
            };


            stroke.current.addEventListener("ended", handleVideoEnd);

            base.current.play();
            stroke.current.play();
        }
    };

    const togglePlayPauseDesktop = () => {
        handlePlayPauseToggle(isPlayingDesktop, setIsPlayingDesktop, baseRef, strokeRef, () =>
            handlePlayVideos(baseRef, strokeRef,isPlayingDesktop, setIsPlayingDesktop)
        );
    };

    const togglePlayPauseMobile = () => {
        handlePlayPauseToggle(isPlayingMobile, setIsPlayingMobile, baseMobileRef, strokeMobileRef, () =>
            handlePlayVideos(baseMobileRef, strokeMobileRef,isPlayingMobile, setIsPlayingMobile)
        );
    };
	useEffect(() => {
		if (isBaseVisible && baseRef.current) {
			baseRef.current.play();
		} else if (baseRef.current) {
			baseRef.current.pause();
		}

		if (isStrokeVisible && strokeRef.current) {
			strokeRef.current.play();
		} else if (strokeRef.current) {
			strokeRef.current.pause();
		}
	}, [isBaseVisible, isStrokeVisible]);

	useEffect(() => {
		if (isBaseMobileVisible && baseMobileRef.current) {
			baseMobileRef.current.play();
		} else if (baseMobileRef.current) {
			baseMobileRef.current.pause();
		}

		if (isStrokeMobileVisible && strokeMobileRef.current) {
			strokeMobileRef.current.play();
		} else if (strokeMobileRef.current) {
			strokeMobileRef.current.pause();
		}
	}, [isBaseMobileVisible, isStrokeMobileVisible]);

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
				<div className="w-screen absolute flex-col top-28 left-0 z-0 h-auto justify-center items-center lg:flex hidden">
					<p className="uppercase mb-2 text-[#B59861]">{t("play-button")}</p>
					<button
						onClick={togglePlayPauseDesktop}
						className="mb-4 px-4 py-2 bg-[#B59861] text-white btn-circle shadow-inner "
					>
						<FontAwesomeIcon icon={isPlayingDesktop ? faPause : faPlay} className="ml-0.5" />
					</button>
				</div>
				<div className="top-[15%] left-[5%] lg:max-xl:-left-[5%] absolute lg:max-xl:scale-[50%] xl:max-2xl:top-[10%] xl:max-2xl:scale-[60%] lg:block hidden opacity-80">
					<button className="pointer-events-none z-10 btn-circle p-10 border-2 absolute top-[90%] left-[-10%] bg-white border-black shadow-bottom font-grotesk font-bold grid place-content-center place-items-center">
						<FontAwesomeIcon
							className="text-[#B59861]"
							icon={faInstagram}
							size="2x"
						/>
					</button>
					<video
						ref={baseRef}
						className="max-w-sm border-2 border-black shadow-bottom rounded-lg blur-sm"
						muted
						loop
						preload="none"
						// poster
						data-loading={true}
						playsInline={true}
						
					>
						<source
							src="https://zb4mb18vwff1cg95.public.blob.vercel-storage.com/base-mIjP015TexQCEXrMYUVyCyRiecOikr.mp4"
							type="video/mp4"
						/>
						<source
							src="https://zb4mb18vwff1cg95.public.blob.vercel-storage.com/base-imDPcGDsZHLeyHLwRocchBk0TkLK7y.webm"
							type="video/webm"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="top-[15%] left-[75%] absolute xl:max-2xl:top-[25%] lg:max-xl:scale-[60%] xl:max-2xl:scale-[60%] lg:block hidden opacity-80">
					<button className="pointer-events-none btn-circle p-10 border-2 absolute z-10 translate-x-[380%] -translate-y-[40%] bg-white  border-black shadow-bottom font-grotesk font-bold grid place-content-center place-items-center">
						<FontAwesomeIcon
							className="text-[#B59861]"
							icon={faTiktok}
							size="2x"
						/>
					</button>
					<video
						ref={strokeRef}
						className="z-0 max-w-sm rounded-lg border-2 border-black shadow-bottom absolute blur-sm"
						muted
						loop
						preload="none"
						// poster
						data-loading={true}
						playsInline={true}
						
					>
						<source
							src="https://zb4mb18vwff1cg95.public.blob.vercel-storage.com/stroke-N167oTO8mOQK3vw4Ibg7Un4AQF1E7L.mp4"
							type="video/mp4"
						/>
						<source
							src="https://zb4mb18vwff1cg95.public.blob.vercel-storage.com/stroke-aZRYWFQGRGfQbKglMR9CmAk40nuWPN.webm"
							type="video/webm"
						/>
						Your browser does not support the video tag.
					</video>
				</div>

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
					<div className="m-5 grid px-[min(50px,10rem)] w-full place-content-center text-left sm:text-center from-ex:max-to-ex:text-sm text-lg text-[#B59861] sm:text-base">
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
					</div>
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
					{/*  */}
					<div className="grid-cols-3 relative place-content-center place-items-center gap-5 sm:gap-0 grid mt-[8rem] w-[80%] h-[100px]">
						<div className="scale-[30%] min-[450px]:scale-[40%]  lg:hidden block opacity-80">
							<button className="pointer-events-none z-10 btn-circle p-10 border-2 absolute top-[90%] left-[-10%] bg-white border-black shadow-bottom font-grotesk font-bold grid place-content-center place-items-center">
								<FontAwesomeIcon
									className="text-[#B59861]"
									icon={faInstagram}
									size="2x"
								/>
							</button>
							<video
								ref={baseMobileRef}
								className="max-w-sm border-2 border-black shadow-bottom rounded-lg blur-sm"
								muted
								loop
								preload="none"
								// poster
								data-loading={true}
								playsInline={true}
								
							>
								<source
									src="https://zb4mb18vwff1cg95.public.blob.vercel-storage.com/base-mIjP015TexQCEXrMYUVyCyRiecOikr.mp4"
									type="video/mp4"
								/>
								<source
									src="https://zb4mb18vwff1cg95.public.blob.vercel-storage.com/base-imDPcGDsZHLeyHLwRocchBk0TkLK7y.webm"
									type="video/webm"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
						<div className="scale-[60%] sm:scale-[75%]  w-screen flex-col z-0 h-auto justify-center items-center lg:hidden flex">
							<p className="uppercase mb-2 text-[#B59861]">
								{t("play-button")}
							</p>
							<button
								onClick={togglePlayPauseMobile}
								className="mb-4 px-4 py-2 bg-[#B59861] text-white btn-circle shadow-inner"
							>
								<FontAwesomeIcon icon={isPlayingMobile ? faPause : faPlay} className="ml-0.5" />
							</button>
						</div>
						<div className="scale-[30%] min-[450px]:scale-[40%] lg:hidden block opacity-80">
							<button className="pointer-events-none btn-circle p-10 border-2 absolute z-10 translate-x-[380%] -translate-y-[40%] bg-white  border-black shadow-bottom font-grotesk font-bold grid place-content-center place-items-center">
								<FontAwesomeIcon
									className="text-[#B59861]"
									icon={faTiktok}
									size="2x"
								/>
							</button>
							<video
								ref={strokeMobileRef}
								className="z-0 max-w-sm rounded-lg border-2 border-black shadow-bottom blur-sm"
								muted
								loop
								preload="none"
								// poster
								data-loading={true}
								playsInline={true}
								
							>
								<source
									src="https://zb4mb18vwff1cg95.public.blob.vercel-storage.com/stroke-N167oTO8mOQK3vw4Ibg7Un4AQF1E7L.mp4"
									type="video/mp4"
								/>
								<source
									src="https://zb4mb18vwff1cg95.public.blob.vercel-storage.com/stroke-aZRYWFQGRGfQbKglMR9CmAk40nuWPN.webm"
									type="video/webm"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
					{/*  */}
				</div>
			</div>
		</div>
	);
}

export default Hero;
