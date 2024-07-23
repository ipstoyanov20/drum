"use server";
import React from 'react'
import Spline from '@splinetool/react-spline/next';
import OrderForm from './order-form';
import darbuka3D from '../public/3d-darbuka.png';
import Image from 'next/image';
function Order() {
    
  return (
		<>
			<h1 className="font-grotesk font-bold from-ex:max-to-ex:text-5xl from-ex:max-to-ex:mt-[10%] text-7xl md:mt-10 mb-5 sm:text-9xl text-center">
				ORDER
			</h1>
			<div className="w-full h-full flex justify-between items-start p-10 sm:flex-row flex-col">
				<div className="p-5 bg-[#B59861] shadow-md from-ex:max-to-ex:scale-[50%] w-96 h-[27rem] sm:h-[27rem] sm:w-[27rem] scale-75 sm:scale-100 from-ex:max-to-ex:ml-[-10%] from-ex:max-to-ex:mt-[-30%] mt-[-10%] sm:mt-0 ml-[-5%] sm:ml-[10%] animate-blob transition-all ease-in-out">
					<Image
					 src={darbuka3D}
					 alt="darbuka-3d"
					 className='lg:hidden block absolute scale-150 top-[25%] left-[0%] w-full h-full'
					 style={{ width: 'auto', height: 'auto' }}
					 />
					<Spline
						className="cursor-pointer lg:block hidden w-full h-full"
						scene="https://prod.spline.design/7c944-ndpVCUK5gj/scene.splinecode"
					/>
				</div>
                <OrderForm />
			</div>
		</>
	);
}

export default Order