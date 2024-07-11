import logo from "../public/vercel.svg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center ">
			<Navbar />


			<div className="hero grid place-items-start place-content-center bg-background min-h-screen">
				<div className=" flex-col lg:flex-row-reverse">
					{/* <img
						src="darbuka.png"
						className="max-w-sm rounded-lg shadow-2xl"
					/> */}
					<div className="grid place-items-center place-content-start">
						<p className="font-bold text-[#B59861] text-xl">
						Unchanged. It was popularised in the 1960s with the release 	
						</p>
						<h1 className="text-9xl font-grotesk m-5 text-center"> My Rythm <br /> Your favourite song</h1>
						<p className="m-5 grid place-content-center text-center text-lg text-[#B59861]">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda<br /> 
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
						</p>
						<button className="rounded-sm px-4 py-3 m-10 bg-[#B59861] text-[#3d2d0e] font-bold font-grotesk">Get Started</button>
					</div>
				</div>
			</div>

			<div className="hero bg-background min-h-screen">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="darbuka.png"
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
