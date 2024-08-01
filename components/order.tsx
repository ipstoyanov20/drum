"use server";
import React from 'react'
import Spline from '@splinetool/react-spline/next';
import OrderForm from './order-form';
import darbuka3D from '../public/3d-darbuka.png';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
function Order() {
    const t = useTranslations('Order');
  return (
		<>
			<h1 className="font-grotesk mb-10 font-bold from-ex:max-to-ex:text-5xl text-7xl md:text-9xl text-center">
				{t('title')}
			</h1>
			<div className="w-full h-full grid place-items-center place-content-center grid-cols-1 sm:grid-cols-[50%,50%]">
				<div className="p-5 bg-[#B59861] shadow-md scale-[50%] sm:max-md:scale-[85%] md:max-lg:scale-[90%]  w-96 h-[27rem] sm:h-[27rem] sm:w-[27rem] sm:scale-100 animate-blob transition-all ease-in-out">
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