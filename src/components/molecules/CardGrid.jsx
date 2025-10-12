export default function CardGrid() {
  return (
    <ul className="w-full max-w-4xl grid lg:grid-cols-2 grid-cols-1 px-2 gap-8 mt-16">
      <li className="w-full rounded-xl overflow-hidden shadow-gray-300 shadow-md ">
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/artist/12oFpz1Oe0yk3rVfKPuYoh?utm_source=generator&theme=0"
          width="100%"
          height="600"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </li>
      <li className="w-full rounded-xl overflow-hidden shadow-gray-300 shadow-md ">
        <iframe
          width="100%"
          height="600"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2175586167%3Fsecret_token%3Ds-20blDg4KgLl&color=%232e8b57&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </li>
    </ul>
  );
}
