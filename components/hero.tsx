import Image from 'next/image'
import React from 'react'
import darbuka1 from '@/public/darbuka.jpeg';
import darbuka2 from '@/public/darbuka2.jpeg';

function Hero() {
  return (
    <div className="hero grid place-items-start place-content-center bg-background min-h-screen mt-[-30%] sm:mt-0">
				<div className="flex-col lg:flex-row-reverse">
					<div className="top-[12%] left-[5%] absolute lg:block hidden">
						<div className="border-2 absolute top-[95%] left-[-10%] rounded-lg bg-white border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
							<p>See on tiktok</p>
						</div>
						<Image
							src={darbuka1}
							alt='darbuk1'
							style={{ width: 'auto', height: 'auto' }}
							className="z-0 max-w-sm border-2 border-black shadow-bottom rounded-lg"
						/>
					</div>
					<div className="top-[55%] left-[75%] absolute lg:block hidden">
						<div className="border-2 absolute z-10 translate-x-[120%] -translate-y-[40%] bg-white rounded-lg border-black shadow-bottom w-48 h-10 font-grotesk font-bold grid place-content-center place-items-center">
							<p>See on tiktok</p>
						</div>
						<Image
							src={darbuka2}
							alt='darbuka2'
							style={{ width: 'auto', height: 'auto' }}
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
							<button className="ml-0 relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-96 sm:w-36  h-10 shadow-inner-top grid place-content-center shadow-[#D9D9D9] rounded-sm px-4 py-3 mb-0 sm:m-3 bg-[#B59861] text-[#f3ecdd] font-bold font-grotesk ">
								ORDER
							</button>
							<button className="ml-0 whitespace-nowrap  relative after:content-[''] after:top-0 after:left-0 after:absolute after:w-full after:h-full after:shadow-lg w-96  sm:w-36 h-10 shadow-inner-top grid place-content-center shadow-[#D9D9D9] border border-[#B59861] rounded-sm px-4 py-3 mt-3 sm:m-3 bg-transparent text-[#B59861] font-bold font-grotesk ">
								SEE REVIEWS
							</button>
						</div>
					</div>
				</div>
			</div>
  )
}

export default Hero