"use client";
import React, { useRef } from "react";
import {
  FaSpotify,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
  FaTwitter,
} from "react-icons/fa";
const navLinks = [
  {
    title: "Twitter",
    url: "https://www.twitter.com",
    className: "hover:text-cyan-700",
    icon: FaTwitter,
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com",
    className: "hover:text-red-700",
    icon: FaYoutube,
  },
  {
    title: "Spotify",
    url: "https://www.spotify.com",
    className: "hover:text-green-700",
    icon: FaSpotify,
  },
  {
    title: "Instagram",
    url: "https://instagram.com",
    className: "hover:text-pink-700",
    icon: FaInstagram,
  },

  {
    title: "Soundcloud",
    url: "https://www.soundcloud.com",
    className: "hover:text-orange-700",
    icon: FaSoundcloud,
  },
];

export default function Home() {
  return (
    <main
      className={`bg-[url('/bg.png')]  bg-cover bg-center flex min-h-screen flex-col items-center justify-between py-20   text-white bg-black`}
    >
      <div></div>
      <div className="mt-8">
        <img
          src="title.svg"
          alt="Vercel Logo"
          className="hidden md:block invert"
          width={560}
          draggable={false}
          height={32}
        />
        <img
          src="title_mobile.svg"
          alt="Vercel Logo"
          className="block md:hidden invert"
          width={200}
          draggable={false}
          height={32}
        />
        <div className="flex items-center justify-center flex gap-3 md:gap-12 mt-20 md:mt-8">
          {navLinks.map((link) => (
            <a
              href={link.url}
              className={`text-neutral-50 select-none transition p-1 uppercase font-semibold ${link.className}`}
              target="_blank"
              draggable={false}
              key={link.title}
            >
              <link.icon className="h-7 w-7"></link.icon>
            </a>
          ))}
        </div>
      </div>
      <a
        href=""
        className={`group flex items-center hover:text-neutral-400 select-none transition mb-8 md:mb-0 uppercase font-semibold mx-16 text-center`}
        style={{ fontSize: "1.25rem", letterSpacing: "0.2em" }}
        target="_blank"
      >
        <span className="font-black contents">OUT NOW</span> — NO EXPECTATIONS
        Ft. AILSA SMITH
      </a>
    </main>
  );
}
