"use client";
import logo from "../public/vercel.svg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRef } from "react";


export default function Home() {
	const radioRefs = useRef<(HTMLInputElement | null)[]>([]);  
  // Function to handle click event
  const handleClick = (index: number) => {
    // Check the radio button at the given index
    if (radioRefs.current[index]) {
	  (radioRefs.current[index] as HTMLInputElement).click();
    }
  };

	  const items = [
		{ id: 1, title: '01', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.' },
		{ id: 2, title: '02', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.' },
		{ id: 3, title: '03', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.' },
		{ id: 4, title: '04', description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.' },
	  ];
	return (
		<main className="flex min-h-screen flex-col items-center overflow-hidden">
			<div className="hero grid place-items-start place-content-center bg-background min-h-screen">
				<div className="flex-col lg:flex-row-reverse">
					<div className="top-[20%] left-[5%] absolute">
						<div className="border-2 absolute top-[95%] left-[-10%] rounded-lg bg-white border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
							<p>See on tiktok</p>
						</div>
						<img
							src="darbuka.jpeg"
							className="z-0 max-w-sm  border-2 border-black shadow-bottom rounded-lg"
						/>
					</div>
					<div className="top-[45%] left-[75%] absolute">
						<div className="border-2 absolute z-10 translate-x-[120%] -translate-y-[40%] bg-white rounded-lg border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
							<p>See on tiktok</p>
						</div>
						<img
							src="darbuka2.jpeg"
							className="z-0 max-w-sm rounded-lg border-2 border-black shadow-bottom absolute"
						/>
					</div>

					<div className="grid place-items-center place-content-start">
						<p className="font-bold text-[#B59861] text-xl">
							Unchanged. It was popularised in the 1960s with the release
						</p>
						<h1 className="z-[10] text-9xl font-grotesk m-5 text-center">
							{" "}
							My Rythm <br /> Your favourite song
						</h1>
						<p className="m-5 grid place-content-center text-center text-lg text-[#B59861]">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							<br />
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
						</p>
						<div className="grid place-content-center place-items-center grid-cols-2 gap-0">
							<button className="mr-0 relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-36 h-10 shadow-inner-top grid place-content-center shadow-white rounded-sm px-4 py-3 m-10 bg-[#B59861] text-[#f3ecdd] font-bold font-grotesk ">
								Order
							</button>
							<button className="mr-0 relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-36 h-10 shadow-inner-top grid place-content-center shadow-white border border-[#B59861] rounded-sm px-4 py-3 m-10 bg-transparent text-[#B59861] font-bold font-grotesk ">
								See reviews
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="hero bg-background min-h-screen">
				<div className="w-screen h-screen px-10 py-0 flex-col lg:flex-row">
					<h1 className="font-grotesk font-bold text-9xl text-center">
						<span className="text-[#B59861] m-0">GENRES</span> <br /> I PLAY
					</h1>
					<section className="grid place-items-center place-content-center grid-cols-6 gap-3 gap-y-5 -ml-4 translate-y-[30%]">
						<div className="shadow-bottom col-span-2 shadow-black border-2 border-black rounded-lg">
							<h1 className="text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
								BULGARIAN FOLK
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
							<h1 className="text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
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
							<h1 className="text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
								ORIENTAL
								<img src="arabic.png" className="mr-5 w-16 h-16" alt="" />
							</h1>
							<p className="py-6 p-4">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div className="shadow-bottom col-span-3 shadow-black border-2 border-black rounded-lg">
							<h1 className="text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
								REGGAETON
								<img src="reggaeton.png" className="mr-5 w-16 h-16" alt="" />
							</h1>
							<p className="py-6 p-4">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div className="shadow-bottom shadow-black border-2 col-span-3 border-black rounded-lg">
							<h1 className="text-5xl font-bold font-grotesk text-left p-3 flex flex-row justify-between items-center">
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

			<div className="w-screen h-screen p-10 mb-[30%]">
				<h1 className="font-grotesk font-bold text-9xl text-center">
					HOW IT WORKS?
				</h1>
				<div className="grid place-content-center place-items-center translate-y-[30%]">
					<ul className="grid place-items-center place-content-center grid-cols-2 gap-x-10">
						<img src="iphone.jpg" alt="" />
						<div className="grid grid-rows-4 gap-y-2">
							{items.map((item, index) => (
								<li
									key={item.id}
									className="flex flex-row gap-5"
									onClick={() => handleClick(index)}
								>
									<input
									  ref={(el) => {
									    if (el) {
									      radioRefs.current[index] = el
									    }
									  }}
									  type="radio"
									  name="radio-6"
									  className="mt-2 radio radio-warning"
									/>
									<div className="grid grid-rows-2">
										<h1 className="font-grotesk font-bold text-4xl">
											{item.title}
										</h1>
										<p className="p-0 translate-y-[-50%] w-96">
											{item.description}
										</p>
									</div>
								</li>
							))}
						</div>
					</ul>
				</div>
			</div>
		</main>
	);
}
