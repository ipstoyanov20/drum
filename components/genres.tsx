import React from 'react'

function Genres() {
  return (
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
  )
}

export default Genres