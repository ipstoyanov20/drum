"use client";
import chooseImg from "../public/choose.png";
import sendImg from "../public/send.png";
import payImg from "../public/pay.png";
import receiveImg from "../public/receive.png";
import blobImg from "../public/blob.png";
import Image from "next/image";
import React from 'react'
import { useRef, useState } from "react";

function Works() {
    const [selectedItem, setSelectedItem] = useState<number | null>(0);
	const [positionLeft, setPositionLeft] = useState<number>(150); 

	

	const radioRefs = useRef<(HTMLInputElement | null)[]>([]);
	// Function to handle click event
	const handleClick = (index: number) => {
		// Set the selected item
		setSelectedItem(index);
		setPositionLeft(150 - index * 100);
		// Check the clicked radio button
		const radio = radioRefs.current[index];
		if (radio) {
			radio.checked = true;
		}
	};

	const items = [
		{
			id: 1,
			title: "01",
			description:
				"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
			subtitle: "CHOOSE",
			imgSrc: chooseImg,
		},
		{
			id: 2,
			title: "02",
			description:
			"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
			subtitle: "SEND & ORDER",
			imgSrc: sendImg,
		},
		{
			id: 3,
			title: "03",
			description:
			"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
			subtitle: "PAY",
			imgSrc: payImg,
		},
		{
			id: 4,
			title: "04",
			description:
			"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
			subtitle: "RECEIVE",
			imgSrc: receiveImg,
		},
	];
  return (
		<>
			<div className="w-screen h-auto p-10">
				<h1 className="font-grotesk font-bold from-ex:max-to-ex:text-5xl text-7xl mb-5 md:text-9xl text-center">
					HOW IT <br /> WORKS?
				</h1>
				<div className="grid place-content-center place-items-center">
					<ul className="grid relative h-[80vh] place-items-center place-content-center grid-rows-[250px,450px] grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 gap-x-48 sm:max-md:gap-x-[90%] sm:max-md:scale-[55%] md:max-lg:gap-x-[60%] md:max-lg:scale-[65%] ">
						<div className="relative sm:max-md:scale-[85%] md:max-lg:scale-[90%] sm:ml-0 sm:mt-0 scale-[40%] z-0 shadow-bottom w-[600px] h-[500px] rounded-t-[5%] rounded-b-[5%] border-2 border-black ">
							<img
								src={blobImg.src}
								className="absolute -top-[30%] -left-[38%] scale-50 opacity-90"
								alt=""
							/>
							<img
								src={blobImg.src}
								className="absolute top-80 left-[55%] scale-50 opacity-90"
								alt=""
							/>
							<div className="absolute w-full h-full overflow-hidden">
								<span
									style={{
										transform: `translateX(${positionLeft}%)`,
									}}
									className="bg-transparent absolute w-full h-full bg-black grid grid-cols-[repeat(4,_600px)] justify-center items-start transition-all duration-500 ease-slider-cubic "
								>
									{items.map((item, index) => (
										<div
											className="w-[600px] h-[500px] flex justify-center items-center"
											key={index}
										>
											<Image
												src={item.imgSrc.src}
												className="object-contain"
												alt=""
												width={600}
												height={500}
												style={{ width: "auto", height: "auto" }}
											/>
										</div>
									))}
								</span>
							</div>
						</div>
						<div className="my-10 grid place-items-center place-content-center grid-cols-2 sm:grid-cols-1 grid-rows-2 sm:grid-rows-4 from-ex:max-to-ex:gap-x-52 scale-[60%] sm:scale-100 gap-x-48 sm:gap-y-5 sm:gap-x-0">
							{items.map((item, index) => (
								<li
									key={item.id}
									className="flex flex-row gap-5 cursor-pointer"
									onClick={() => {
										handleClick(index);
									}}
								>
									<input
										ref={(el) => {
											if (el) {
												radioRefs.current[index] = el;
											}
										}}
										type="radio"
										name="radio-6"
										className="translate-y-[-85%] radio radio-warning"
										checked={selectedItem === index}
										onChange={() => {}} // Add an onChange to suppress React warning about uncontrolled components turning into controlled
									/>
									<div
										className={`flex flex-col mb-[-20px] ${
											selectedItem !== null && selectedItem !== index
												? "opacity-50"
												: "opacity-100"
										}`}
									>
										<h1 className="font-grotesk font-bold translate-y-[-80%] text-4xl">
											{item.title}
										</h1>
										<h2 className="font-grotesk font-bold text-xl translate-y-[-80%] py-2 mb-10 sm:mb-5">
											{item.subtitle}
										</h2>
										<p className="p-0 translate-y-[-50%] w-[min(200px,24rem)] sm:w-96">
											{item.description}
										</p>
									</div>
								</li>
							))}
						</div>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Works