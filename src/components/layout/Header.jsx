import Link from "next/link";
import Image from "next/image";
import logoIcon from "@/public/smsreceiver.png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <Image
              src={logoIcon}
              alt="SMS Receiver Logo"
              width={36}
              height={36}
              priority
            />
            <span className="text-2xl font-bold text-gray-900">
              SMS Receiver
            </span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/country" className="text-gray-600 hover:text-blue-600 transition">
              Countries
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
