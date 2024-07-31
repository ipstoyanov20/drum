const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req:any, res:any) {

  if (req.method === 'POST') {
    const { locale } = req.body;
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1PKO6KGxk2cGh1NfC5YlTe4W',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/`,
        locale: locale,
      });
      res.redirect(303, session.url);
    } catch (err:any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}