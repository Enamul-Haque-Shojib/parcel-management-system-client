import React from "react";
import facebook from "../../../assets/facebook.png";
import youtube from "../../../assets/youtube.png";
import twitter from "../../../assets/twitter.png";
import instagram from "../../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
      <section className="lg:w-[80%] w-[95%] mx-auto grid lg:grid-cols-3 gap-12">
        {/* Brand Info */}
        <article className="flex flex-col gap-y-6">
          <h3 className="font-extrabold text-3xl">Parcel Warehouse</h3>
          <div className="text-gray-400 leading-loose">
            <p>Location: Av. Washington 165, NYCA</p>
            <p>54003</p>
            <p>Phone: +31859644725</p>
            <p>Email: info@yourdomain.com</p>
            <p>Opening Hours: 9:00 AM - 5:00 PM</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={facebook} alt="Facebook" className="w-8" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={youtube} alt="YouTube" className="w-8" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={twitter} alt="Twitter" className="w-8" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img src={instagram} alt="Instagram" className="w-8" />
            </a>
          </div>
        </article>

        {/* Legal Info */}
        <article className="flex flex-col gap-y-6 lg:text-start text-center">
          <h3 className="font-bold text-xl">Legal</h3>
          <div className="space-y-2 text-gray-400">
            <p className="hover:text-yellow-400 transition duration-200">
              Terms of Use
            </p>
            <p className="hover:text-yellow-400 transition duration-200">
              Privacy Policy
            </p>
            <p className="hover:text-yellow-400 transition duration-200">
              Cookie Policy
            </p>
          </div>
        </article>

        {/* Newsletter */}
        <article className="flex flex-col gap-y-6 lg:text-start text-center">
          <h3 className="font-bold text-xl">Drop a Message</h3>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 placeholder-gray-400 text-white py-2 px-4 w-[240px] lg:w-[300px] rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </article>
      </section>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Parcel Warehouse. All rights reserved.</p>
        <p className="mt-2">
          Developed with 💖 by{" "}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 transition"
          >
            YourCompany
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
