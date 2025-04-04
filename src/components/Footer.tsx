import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-14">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">ArtAsset.ai</h2>
          <p className="mt-2 text-sm text-gray-400">
          Make your <b>MasterPiece</b> <br />
          a valuable <b>OnlineDigitalAsset</b>.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><Facebook className="w-6 h-6 hover:text-blue-500 pt-1" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-6 h-6 hover:text-pink-500 pt-1" /></a>
            <a href="#" aria-label="YouTube Channel"><Youtube className="w-7 h-8 hover:text-red-500 pb-1" /></a>
            <a href="#" aria-label="X (formerly Twitter)"><span className="text-xl font-bold hover:text-sky-400">X</span></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ArtAsset.ai All rights reserved.
      </div>
    </footer>
  );
}