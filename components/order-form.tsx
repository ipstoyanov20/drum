"use client";
import React, { useState } from "react";
import { db } from "@/app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
function OrderForm() {
	async function AddData(data: any) {
		try {
			const docRef = await addDoc(collection(db, "orders"), {
				email: data.email,
				phone: data.phone,
				ytlink: data.ytlink,
				additionalInfo: data.additionalInfo,
			});
			console.log("Document written with ID: ", docRef.id);
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
	const handleSubmit = (event: any) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		const email = formData.get("email");
		const phone = formData.get("phone");
		const ytlink = formData.get("YTlink");
		const additionalInfo = formData.get("additionalInfo");
		const added = AddData({ email, phone, ytlink, additionalInfo });
		event.target.reset();
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="w-full sm:w-1/2 h-full p-5 sm:p-10 from-ex:max-to-ex:mt-[-20%] mt-[0%] sm:mt-0 from-ex:max-to-ex:mb-[20%]"
		>
			<div className="flex  flex-col sm:flex-row gap-0 sm:gap-5">
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
					className="mt-1 block w-full px-4 py-3 bg-transparent rounded-md border-black border-2 shadow-bottom"
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
	);
}

export default OrderForm;
