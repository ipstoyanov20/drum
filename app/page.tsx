import logo from "../public/vercel.svg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center overflow-hidden">
			<Navbar />

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
							className="z-0 max-w-sm  rounded-lg border-2 border-black shadow-bottom absolute"
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
					<h1 className="font-grotesk font-bold text-9xl text-center mb-10">GENRE</h1>
					<section className="grid place-items-center place-content-center grid-cols-3 translate-y-[100%]">
						<div>
							<h1 className="text-5xl font-bold font-grotesk text-center">BULGARIAN FOLK</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div>
							<h1 className="text-5xl font-bold font-grotesk text-center">POP FOLK</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
						<div>
							<h1 className="text-5xl font-bold font-grotesk text-center">ARABIAN</h1>
							<p className="py-6">
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
						</div>
					</section>
				</div>
			</div>

			<div className="hero bg-background min-h-screen">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	);
}
