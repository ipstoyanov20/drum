const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
	if (req.method === "POST") {
		const { locale } = req.body;
		// Check if locale is present in the request body
		if (!locale) {
			return res.status(400).json({ error: "Locale is required" });
		}
		try {
			const priceId =
				locale == "en" ? process.env.PRICE_ID_EN! : process.env.PRICE_ID_BG!;
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: priceId,
						quantity: 1,
					},
				],
				mode: "payment",
				success_url: `${req.headers.origin}/?success=true`,
				cancel_url: `${req.headers.origin}/`,
				locale: locale,
			});
			res.redirect(303, session.url);
		} catch (err: any) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
