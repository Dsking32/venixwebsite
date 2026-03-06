import Container from '../ui/Container';

const partners = [
  { name: 'MTN',          logo: 'https://images.seeklogo.com/logo-png/43/1/mtn-logo-png_seeklogo-431589.png',            href: '#' },
  { name: 'Glo',          logo: 'https://images.seeklogo.com/logo-png/49/1/glo-limited-logo-png_seeklogo-491131.png',    href: '#' },
  { name: 'T2 / 9mobile', logo: 'https://images.seeklogo.com/logo-png/13/1/t2-logo-png_seeklogo-135160.png',            href: '#' },
  { name: 'Airtel',       logo: 'https://images.seeklogo.com/logo-png/16/1/airtel-logo-png_seeklogo-168290.png',         href: '#' },
  { name: 'Finsight',     logo: 'https://res.cloudinary.com/dvpfdgnkw/image/upload/v1761904799/finsight_logo_khxepz.jpg', href: 'https://finsightngr.online/' },
  { name: 'Mesaj',        logo: 'https://res.cloudinary.com/dvpfdgnkw/image/upload/v1757590580/card3_k2g3bl.png',       href: 'https://mesaj.cloud' },
  { name: 'Turnaj',       logo: 'https://res.cloudinary.com/dvpfdgnkw/image/upload/v1757590378/card5_ra9d00.png',       href: 'https://turnaj.mobi' },
  { name: 'BillMagic',    logo: 'https://res.cloudinary.com/dvpfdgnkw/image/upload/v1757590029/BillMagic_Logo_dykhny.png', href: 'https://billmagic.xyz' },
];

const track = [...partners, ...partners, ...partners];

export default function PartnersMarquee() {
  return (
    // Gradient: white → blue-950 to flow into the dark footer
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #1E3A8A 100%)' }}
    >
      {/* ── Header (white zone) ── */}
      <div className="relative z-10 pb-14 pt-20">
        <Container className="text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-500">
            Our Partners & Platforms
          </p>
          <h2
            className="text-3xl font-normal text-blue-900 md:text-4xl"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Integrated Across Every Major Network
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-blue-900/55">
            Accredited VAS operator with live integrations across Nigeria's four major telecom
            networks — and a growing suite of proprietary platforms.
          </p>
        </Container>

        {/* Thin yellow rule */}
        <div className="mx-auto mt-10 h-px max-w-[100px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      </div>

      {/* ── Marquee ── */}
      <div className="relative z-10 w-full overflow-hidden pb-20">
        {/* Fade edges — blend with the mid-gradient colour */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32"
          style={{ background: 'linear-gradient(to right, #7a9fd4, transparent)' }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32"
          style={{ background: 'linear-gradient(to left, #2a5298, transparent)' }}
        />

        <div
          className="marquee-track flex items-center gap-12"
          style={{ width: 'max-content', animation: 'marquee 36s linear infinite' }}
        >
          {track.map((partner, i) => (
            <a
              key={i}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={partner.name}
              className="group flex h-16 w-36 flex-shrink-0 items-center justify-center"
            >
              {/* White pill keeps logos readable as background transitions to blue */}
              <div className="flex h-14 w-full items-center justify-center rounded-xl bg-white px-5 shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-yellow-400/20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 max-w-full object-contain"
                  draggable={false}
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}