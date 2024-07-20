"use client";
import chooseImg from "../public/choose.png";
import sendImg from "../public/send.png";
import payImg from "../public/pay.png";
import receiveImg from "../public/receive.png";
import blobImg from "../public/blob.png";
import Image from "next/image";
import Spline from '@splinetool/react-spline';


import { useRef, useState } from "react";


export default function Home() {
	const [selectedItem, setSelectedItem] = useState<number | null>(0);
	const [positionLeft, setPositionLeft] = useState<number>(150); 

	const handleSubmit = (event :any) => {

		event.preventDefault(); // Prevent default form submission behavior
	
		// Create a FormData object, passing the form event target
		const formData = new FormData(event.target);
	
		// You can now use formData.get('name') to get the value of a field
		const email = formData.get('email');
		const phone = formData.get('phone');
		const additionalInfo = formData.get('additionalInfo');
	
		// For demonstration, log the values to the console
		console.log({ email, phone, additionalInfo });
		event.target.reset();
		// Here, you can also send the data to a server using fetch or axios
	  };

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
		<main className="flex min-h-screen flex-col items-center overflow-x-hidden">
			<div className="hero grid place-items-start place-content-center bg-background min-h-screen mt-[-30%] sm:mt-0">
				<div className="flex-col lg:flex-row-reverse">
					<div className="top-[12%] left-[5%] absolute lg:block hidden">
						<div className="border-2 absolute top-[95%] left-[-10%] rounded-lg bg-white border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
							<p>See on tiktok</p>
						</div>
						<img
							src="darbuka.jpeg"
							className="z-0 max-w-sm border-2 border-black shadow-bottom rounded-lg"
						/>
					</div>
					<div className="top-[55%] left-[75%] absolute lg:block hidden">
						<div className="border-2 absolute z-10 translate-x-[120%] -translate-y-[40%] bg-white rounded-lg border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
							<p>See on tiktok</p>
						</div>
						<img
							src="darbuka2.jpeg"
							className="z-0 max-w-sm rounded-lg border-2 border-black shadow-bottom absolute"
						/>
					</div>

					<div className="grid place-items-center place-content-start w-full">
						<p className="font-bold text-[#B59861] text-xl hidden sm:block">
							Unchanged. It was popularised in the 1960s with the release
						</p>
						<h1 className="z-[10] from-ex:max-to-ex:text-5xl text-7xl font-bold sm:font-bold text-left font-grotesk m-5 sm:text-center sm:text-9xl">
							MY RITHM <br /> YOUR FAVOURITE SONG
						</h1>
						<p className="m-5 grid place-content-center text-left sm:text-center from-ex:max-to-ex:text-sm text-lg text-[#B59861] sm:text-base">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							<br />
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
						</p>
						<div className="grid grid-col-1 grid-rows-2 sm:grid-cols-2 gap-0">
							<button className="ml-0 relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-96 sm:w-36  h-10 shadow-inner-top grid place-content-center shadow-white rounded-sm px-4 py-3 mb-0 sm:m-3 bg-[#B59861] text-[#f3ecdd] font-bold font-grotesk ">
								ORDER
							</button>
							<button className="ml-0 whitespace-nowrap  relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-96  sm:w-36 h-10 shadow-inner-top grid place-content-center shadow-white border border-[#B59861] rounded-sm px-4 py-3 mt-3 sm:m-3 bg-transparent text-[#B59861] font-bold font-grotesk ">
								SEE INTERVIEWS
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="hero bg-background min-h-screen">
				<div className="w-screen h-screen px-10 py-0 flex-col lg:flex-row mt-[-50%] sm:mt-0">
					<h1 className="font-grotesk font-bold from-ex:max-to-ex:text-5xl text-7xl sm:text-9xl text-center">
						<span className="text-[#B59861] m-0">GENRES</span> <br /> I PLAY
					</h1>
					<section className="from-ex:max-to-ex:mt-[-100%] mt-[-90%] sm:mt-0 grid place-items-center place-content-center md:max-lg:grid-cols-2 grid-cols-1 sm:grid-cols-6 gap-3 gap-y-5 ml-2 sm:-ml-4 translate-y-[30%]">
						<div className="shadow-bottom col-span-2 shadow-black border-2 border-black rounded-lg">
							<h1 className="md-max-lg:text-xl text-3xl sm:text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
								BG FOLK
								<img
									src="bg-flag.jpg"
									className="mr-5 rounded-full w-16 h-16"
									alt=""
								/>
							</h1>
							<p className="py-6 p-4">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div className="shadow-bottom col-span-2 shadow-black border-2 border-black rounded-lg">
							<h1 className="whitespace-nowrap md-max-lg:text-xl text-3xl sm:text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
								POP FOLK
								<img
									src="planeta.jpg"
									className="mr-5 rounded-full w-16 h-16"
									alt=""
								/>
							</h1>
							<p className="py-6 p-4">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div className="shadow-bottom col-span-2 shadow-black border-2 border-black rounded-lg">
							<h1 className="md-max-lg:text-xl text-3xl sm:text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
								ORIENTAL
								<img src="arabic.png" className="mr-5 w-16 h-16" alt="" />
							</h1>
							<p className="py-6 p-4">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div className="shadow-bottom md:max-lg:col-span-2 col-span-2 sm:col-span-3 shadow-black border-2 border-black rounded-lg">
							<h1 className="md-max-lg:text-xl text-3xl sm:text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
								REGGAETON
								<img src="reggaeton.png" className="mr-5 w-16 h-16" alt="" />
							</h1>
							<p className="py-6 p-4">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div className="shadow-bottom shadow-black border-2 md:max-lg:col-span-2 col-span-2 sm:col-span-3 border-black rounded-lg">
							<h1 className="md-max-lg:text-xl text-3xl sm:text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
								RAP
								<img src="rapper.png" className="mr-5 w-16 h-16" alt="" />
							</h1>
							<p className="py-6 p-4">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
					</section>
				</div>
			</div>

			<div className="w-screen h-screen p-10 from-ex:max-to-ex:mt-[160%] mt-[130%] sm:mt-0 from-ex:max-to-ex:mb-[0%] sm:mb-[25%]">
				<h1 className="font-grotesk font-bold from-ex:max-to-ex:text-5xl text-7xl mb-5 sm:text-9xl text-center">
					HOW IT <br /> WORKS?
				</h1>
				<div className="grid place-content-center place-items-center from-ex:max-to-ex:translate-y-[0%] translate-y-[30%]">
					<ul className="grid place-items-center place-content-center relative grid-cols-2 gap-x-48">
						<img
							src={blobImg.src}
							className="absolute from-ex:max-to-ex:translate-x-[-40%] from-ex:max-to-ex:translate-y-[-100%] translate-x-[-40%] translate-y-[-50%] sm:translate-x-[-130%] sm:translate-y-[-70%] scale-50"
							alt=""
						/>
						<img
							src={blobImg.src}
							className="absolute from-ex:max-to-ex:translate-x-[40%] from-ex:max-to-ex:translate-y-[-20%] translate-x-[40%] translate-y-[-160%] sm:translate-x-[-20%] sm:translate-y-[70%] scale-50"
							alt=""
						/>
						<div className="ml-[350%] mt-[-600%] from-ex:max-to-ex:ml-[400%] from-ex:max-to-ex:mt-[-400%]  from-ex:max-to-ex:scale-[40%] sm:ml-0 sm:mt-0 scale-50 sm:scale-100 z-0 shadow-bottom w-[600px] h-[500px] relative rounded-t-[5%] rounded-b-[5%] border-2 overflow-hidden border-black ">
							<span
								style={{
									transform: `translateX(${positionLeft}%)`,
								}}
								className="bg-transparent absolute w-full h-full bg-black grid grid-cols-[repeat(4,_600px)] justify-center items-center transition-all duration-500 ease-slider-cubic"
							>
								{items.map((item, index) => (
									<div
										className="w-[600px] h-[500px] flex justify-center items-center"
										key={index}
									>
										<Image
											src={item.imgSrc.src}
											className="object-contain max-w-full max-h-full"
											alt=""
											width={600}
											height={500}
										/>
									</div>
								))}
							</span>
						</div>
						<div className="grid grid-cols-2 grid-rows-2 sm:grid-rows-4 sm:grid-cols-1 ml-[-450%] from-ex:max-to-ex:gap-x-52 from-ex:max-to-ex:ml-[-620%] sm:ml-0 from-ex:max-to-ex:translate-y-[40%]  translate-y-[25%] sm:translate-y-0 scale-[60%] sm:scale-100 gap-x-48 sm:gap-y-5 sm:gap-x-0">
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
										<p className="p-0 translate-y-[-50%] w-64 sm:w-96">
											{item.description}
										</p>
									</div>
								</li>
							))}
						</div>
					</ul>
				</div>
			</div>
			<h1 className="font-grotesk font-bold from-ex:max-to-ex:text-5xl from-ex:max-to-ex:mt-[-10%] text-7xl md:mt-10 mb-5 sm:text-9xl text-center">
				ORDER
			</h1>
			<div className="w-full h-full flex justify-between items-start p-10 sm:flex-row flex-col">
				<div className="p-5 bg-[#B59861] shadow-md from-ex:max-to-ex:scale-[50%] w-96 h-[27rem] sm:h-1/2 sm:w-1/3 scale-75 sm:scale-100 from-ex:max-to-ex:ml-[-10%] from-ex:max-to-ex:mt-[-30%] mt-[-10%] sm:mt-0 ml-[-5%] sm:ml-[10%] animate-blob transition-all ease-in-out">
					<Spline
						className=" cursor-pointer w-full h-full"
						scene="https://prod.spline.design/7c944-ndpVCUK5gj/scene.splinecode"
					/>
				</div>
				<form
					onSubmit={handleSubmit}
					className="w-full sm:w-1/2 h-full p-5 sm:p-10 from-ex:max-to-ex:mt-[-20%] mt-[0%] sm:mt-0 from-ex:max-to-ex:mb-[20%]"
				>
					<div className="flex  flex-col sm:flex-row  gap-0 sm:gap-5">
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-sm font-grotesk text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								className="mt-1 block w-full px-4 py-3 bg-transparent shadow-bottom rounded-md border-black border-2"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="phone"
								className="block text-sm font-grotesk text-gray-700"
							>
								Phone Number
							</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								required
								className="mt-1 block w-full px-4 py-3 bg-transparent  rounded-md border-black border-2 shadow-bottom"
							/>
						</div>
					</div>
					<div className="mb-4 flex-1">
						<label
							htmlFor="YTlink"
							className="block text-sm font-grotesk text-gray-700"
						>
							Youtube link for a song
						</label>
						<input
							type="text"
							name="YTlink"
							id="phone"
							required
							className="mt-1 block w-full px-4 py-3 bg-transparent  rounded-md border-black border-2 shadow-bottom"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="additionalInfo"
							className="block text-sm font-grotesk text-gray-700"
						>
							Additional Information
						</label>
						<textarea
							name="additionalInfo"
							id="additionalInfo"
							rows={4}
							className="mt-1 block w-full px-4 py-3 bg-transparent rounded-md border-black border-2 shadow-bottom"
						></textarea>
					</div>
					<button
						type="submit"
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#B59861] hover:bg-[#B59861]/90 transition-all duration-100"
					>
						SUBMIT
					</button>
				</form>
			</div>
		</main>
	);
}
