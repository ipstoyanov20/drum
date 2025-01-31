"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

function OrderForm() {
	const t = useTranslations("Order");

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [locale, setLocale] = useState("bg");

	useEffect(() => {
		const pathLocale = window.location.pathname.split("/").pop();
		if (pathLocale) {
			setLocale(pathLocale);
		}
		const query = new URLSearchParams(window.location.search);
		if (query.get("success")) {
			console.log("Order placed! You will receive an email confirmation.");
		}

		if (query.get("canceled")) {
			console.log(
				"Order canceled -- continue to shop around and checkout when you’re ready.",
			);
		}
	}, []);

	async function AddData(data: any) {
		try {
			const docRef = await addDoc(collection(db, "orders"), {
				email: data.email,
				phone: data.phone,
				ytlink: data.ytlink,
				additionalInfo: data.additionalInfo,
				timestamp: serverTimestamp(),
			});
			console.log("Document written with ID: ", docRef.id);
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		if (!isSubmitting) {
			const formData = new FormData(event.target);

			const email = formData.get("email");
			const phone = formData.get("phone");
			const ytlink = formData.get("YTlink");
			const additionalInfo = formData.get("additionalInfo");
			const timestamp = serverTimestamp();

			const added = await AddData({ email, phone, ytlink, additionalInfo, timestamp});
			if (added) {
				setIsSubmitting(true);
				event.target.submit();
			}
		}
	};

	return (
		<form
			data-aos="fade-left"
			action="/api/checkout_sessions"
			method="POST"
			onSubmit={handleSubmit}
			className="w-full h-full p-5 sm:p-10 from-ex:max-to-ex:mt-[-20%] mt-[0%] sm:mt-0 from-ex:max-to-ex:mb-[20%]"
		>
			<div className="flex flex-col sm:flex-row gap-0 sm:gap-5 w-full">
				<div className="mb-4 flex-1">
					<label
						htmlFor="email"
						className="block text-sm font-grotesk font-bold text-gray-700"
					>
						{t("email")}
					</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						className="mt-1 block w-full px-4 py-3 bg-transparent shadow-bottom rounded-md border-black border-2 focus:border-2 focus:border-black focus:outline-none"
					/>
				</div>
				<div className="mb-4 flex-1">
					<label
						htmlFor="phone"
						className="block text-sm font-grotesk font-bold text-gray-700"
					>
						{t("phone")}
					</label>
					<PhoneInput
						country={"bg"}
						value={``}
						inputProps={{
							required: true,
							name: "phone",
						}}
						inputStyle={{
							marginTop: "0.25rem",
							display: "block",
							width: "100%",
							height: "3.5rem",
							padding: "1rem 3rem",
							backgroundColor: "transparent",
							borderRadius: "0.375rem",
							borderColor: "black",
							borderWidth: "2px",
							boxShadow: "3px 5px 0 0px black",
						}}
						inputClass="focus:border-2 focus:border-black focus:outline-none"
					/>
				</div>
			</div>
			<div className="mb-4 flex-1">
				<label
					htmlFor="YTlink"
					className="block text-sm font-grotesk font-bold text-gray-700"
				>
					{t("ytlink")}
				</label>
				<input
					type="text"
					name="YTlink"
					id="YTlink"
					required
					placeholder={`https://www.youtube.com/watch?v=VIDEO_ID`}
					className="mt-1 block w-full px-4 py-3 bg-transparent rounded-md border-black border-2 shadow-bottom focus:border-2 focus:border-black focus:outline-none"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="additionalInfo"
					className="block text-sm font-grotesk font-bold text-gray-700"
				>
					{t("instructions")}
				</label>
				<textarea
					name="additionalInfo"
					id="additionalInfo"
					rows={7}
					placeholder={t("instructions-placeholder")}
					className="mt-1 block w-full px-4 py-3 bg-transparent rounded-md border-black border-2 shadow-bottom focus:border-2 focus:border-black focus:outline-none"
				></textarea>
			</div>
			<input type="hidden" name="locale" value={locale} />
			<button
				type="submit"
				role="link"
				disabled={isSubmitting}
				className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-grotesk font-medium rounded-md text-white bg-[#B59861] hover:bg-[#B59861]/90 transition-all duration-100"
			>
				{isSubmitting ? "Loading..." : t("button")}
			</button>
		</form>
	);
}

export default OrderForm;
function serverTimestamp() {
	throw new Error("Function not implemented.");
}

