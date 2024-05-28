import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className=''>
        <p>About me</p>
        <p>Pricing</p>
        <p>Pay</p>
      </nav>
      <div className=''>
        <p>About me</p>
      </div>
      <div className=''>
        <p>Pricing</p>
      </div>
      <div className=''>
        <p>Pay</p>
      </div>
      <footer className=''>
        <div className=''>
        <p>About me</p>
        <p>Pricing</p>
        <p>Pay</p>
        </div>
      </footer>
    </main>
  );
}
