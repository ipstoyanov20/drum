"use client";
import React from 'react'

function OrderForm() {
    const handleSubmit = (event: any) => {
			event.preventDefault(); // Prevent default form submission behavior

			// Create a FormData object, passing the form event target
			const formData = new FormData(event.target);

			// You can now use formData.get('name') to get the value of a field
			const email = formData.get("email");
			const phone = formData.get("phone");
			const additionalInfo = formData.get("additionalInfo");

			// For demonstration, log the values to the console
			console.log({ email, phone, additionalInfo });
			event.target.reset();
			// Here, you can also send the data to a server using fetch or axios
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
  )
}

export default OrderForm