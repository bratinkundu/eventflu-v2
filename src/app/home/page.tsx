import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-black">
            EventFlu
          </Link>
          <button className="md:hidden">☰</button>
          <ul className="hidden md:flex space-x-6 text-black">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/auth/login" className="bg-primary text-white px-4 py-2 rounded">Login</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-black">Sell Tickets on EventFlu</h1>
            <p className="text-gray-600 mt-4">
              The fully featured ticketing platform to sell, manage, and promote your event online.
            </p>
            <Link href="/auth" className="bg-primary text-white px-6 py-3 mt-6 inline-block rounded">
              Create an Event →
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image src="/hero2.svg" alt="Hero Image" width={400} height={400} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold">The Complete Event Ticketing Platform</h3>
          <p className="text-gray-600 mt-2">Successfully sell tickets online and run your event seamlessly.</p>
        </div>
        <div className="container mx-auto flex flex-wrap justify-center gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
              <i className={`fa ${feature.icon} text-4xl text-blue-500`}></i>
              <h3 className="text-lg font-bold mt-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <Link href={feature.link} className="text-primary mt-2 inline-block">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 EventFlu. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const features = [
  { title: "Sell Tickets Online", icon: "fa-check", description: "All the tools you need to sell tickets effortlessly.", link: "#" },
  { title: "Instant Payments", icon: "fa-clock-o", description: "Get funds directly to your payment gateway.", link: "#" },
  { title: "Customizable Design", icon: "fa-pencil", description: "Make your event pages unique.", link: "#" },
  { title: "Sell Everywhere", icon: "fa-globe", description: "Integrate with websites and platforms.", link: "#" },
];
