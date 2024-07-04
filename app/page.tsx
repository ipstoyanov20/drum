import logo from "../public/vercel.svg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center ">
			<Navbar />

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

			<div className="hero bg-background min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
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
