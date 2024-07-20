import Order from "@/components/order";
import Works from "@/components/how-it-works";
import Genres from "@/components/genres";
import Hero from "@/components/hero";



export default function Home() {
	
	return (
		<main className="flex min-h-screen flex-col items-center overflow-x-hidden">
			<Hero/>
			<Genres/>
			<Works/>
			<Order/>
		</main>
	);
}
