const videos = [
  {
    title: "Track 1",
    url: "https://www.youtube.com",
    img_url: "/track_1.png",
  },
  {
    title: "Track 2",
    url: "https://www.youtube.com",
    img_url: "/track_2.png",
  },
  {
    title: "Track 3",
    url: "https://www.youtube.com",
    img_url: "/track_4.png",
  },
  {
    title: "Track 1",
    url: "https://www.youtube.com",
    img_url: "/track_1.png",
  },
  {
    title: "Track 2",
    url: "https://www.youtube.com",
    img_url: "/track_2.png",
  },
  {
    title: "Track 3",
    url: "https://www.youtube.com",
    img_url: "/track_4.png",
  },
  {
    title: "Track 1",
    url: "https://www.youtube.com",
    img_url: "/track_1.png",
  },
  {
    title: "Track 2",
    url: "https://www.youtube.com",
    img_url: "/track_2.png",
  },
  {
    title: "Track 3",
    url: "https://www.youtube.com",
    img_url: "/track_4.png",
  },
];

const navLinks = [
  {
    title: "Instagram",
    url: "https://instagram.com",
    img_url: "instagram_link.svg",
    className: "mx-2",
  },
  {
    title: "Spotify",
    url: "https://www.spotify.com",
    img_url: "spotify_link.svg",
  },
  {
    title: "Youtube",
    url: "https://www.youtube.com",
    img_url: "youtube_link.svg",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-3 md:p-12 pb-16 md:pb-32 bg-white dark:bg-black">
      <div className="flex flex-col items-center justify-center mt-20 mb-16 md:mb-20">
        <img
          src="title.svg"
          alt="Vercel Logo"
          className="hidden md:block"
          width={600}
          draggable={false}
          height={50}
        />
        <img
          src="title_mobile.svg"
          alt="Vercel Logo"
          className="block md:hidden"
          width={200}
          draggable={false}
          height={50}
        />
        <div className="flex items-center flex-col md:flex-row gap-3 mt-20 md:mt-8">
          {navLinks.map((link) => (
            <a
              href={link.url}
              className={`hover:opacity-50 select-none transition p-1 ${link.className}`}
              target="_blank"
              draggable={false}
              key={link.title}
            >
              <img
                src={link.img_url}
                alt={link.title}
                draggable={false}
                width={110}
                height={90}
              />
            </a>
          ))}
        </div>
      </div>

      <section
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto"
        style={{ maxWidth: "64rem" }}
      >
        {videos.map((v) => {
          return (
            <a
              href={v.url}
              className="select-none transition p-1 border-4 border-transparent hover:border-gray-400 rounded-xl overflow-hidden"
              key={v.title}
              draggable={false}
              target="_blank"
            >
              <img
                aria-label={v.title}
                src={v.img_url}
                alt={v.title}
                draggable={false}
                className="rounded-lg"
                width={500}
                height={300}
              />
            </a>
          );
        })}
      </section>
      <img
        src="about_section_title.svg"
        alt="Vercel Logo"
        className="mt-28 select-none"
        width={200}
        draggable={false}
        height={50}
      />
      <p
        className="text-gray-500 tracking-widest  uppercase font-medium md:w-3/5 px-6 text-center mt-10 md:mt-12 leading-6"
        style={{ letterSpacing: "0.3em", fontSize: "0.7rem" }}
      >
        Trees of White is a Scottish house music producer living in London.
        Often incorporating orchestral and classical instruments, he aims to
        provide a heartfelt yet energetic sound.
      </p>
    </main>
  );
}
