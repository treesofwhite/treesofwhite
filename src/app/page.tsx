"use client";
import React, { useRef } from "react";

const navLinks = [
  {
    title: "Instagram",
    url: "https://instagram.com",
    className: "hover:text-pink-700",
  },
  {
    title: "Spotify",
    url: "https://www.spotify.com",
    className: "hover:text-green-700",
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com",
    className: "hover:text-red-700",
  },
];

export default function Home() {
  return (
    <main
      className={`bg-[url('/bg.png')]  bg-cover bg-center flex min-h-screen flex-col items-center justify-between py-20   text-white bg-black`}
    >
      <div></div>
      <div>
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
        <div className="flex items-center justify-center flex-col md:flex-row gap-3 md:gap-9 mt-20 md:mt-8">
          {navLinks.map((link) => (
            <a
              href={link.url}
              className={`text-neutral-50 select-none transition p-1 uppercase font-semibold ${link.className}`}
              style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
              target="_blank"
              draggable={false}
              key={link.title}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <a
        href=""
        className={`hover:bg-green-600 hover:text-white hover:border-green-600 backdrop-blur rounded-lg border border-neutral-700 px-5 py-2 hover:text-neutral-400 select-none transition p-1 uppercase font-semibold mx-16 text-center`}
        style={{ fontSize: "1.25rem", letterSpacing: "0.2em" }}
        target="_blank"
      >
        <span className="font-black">OUT NOW</span> — NO EXPECTATIONS Ft. AILSA
        SMITH 🡕
      </a>
    </main>
  );
}
