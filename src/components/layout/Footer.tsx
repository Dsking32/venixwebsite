import {
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Logo from '../ui/Logo';

// ─── Data ─────────────────────────────────────────────────────────────────────

const socialLinks = [
  { href: 'https://www.instagram.com/venixpartners?igsh=MTk1cWdva3loN3Fpdw==', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/venix-partners-limited/',           icon: Linkedin,  label: 'LinkedIn'  },
];

const platforms = [
  { title: 'Mesaj',       href: 'https://mesaj.cloud'          },
  { title: 'Turnaj',      href: 'https://turnaj.mobi'          },
  { title: 'Billmagic',   href: 'https://billmagic.xyz'        },
  { title: 'Bingebay',    href: 'https://bingebay.tv/'         },
  { title: 'Finsight',    href: 'https://finsightngr.online/'  },
  { title: 'Venix Cloud', href: 'https://www.venix.cloud/'     },
];

const quickLinks = [
  { title: 'Home',     to: '/'        },
  { title: 'About Us', to: '/about'   },
  { title: 'Services', to: '/services'},
  { title: 'Careers',  to: '/careers' },
  { title: 'Contact',  to: '/contact' },
];

const phoneNumbers = [
  '+234 812 445 7343',
  '+234 909 999 1491',
  '+234 813 283 1347',
  '+234 905 587 0986',
];

// Legal links now use React Router paths matching your routes exactly
const legalLinks = [
  { title: 'Privacy Policy', to: '/privacy'    },
  { title: 'Terms of Use',   to: '/terms'      },
  { title: 'Compliance',     to: '/compliance' },
];

// ─── Sub-component ────────────────────────────────────────────────────────────

function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400">
        {children}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-yellow-400/30 to-transparent" />
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white" style={{ background: '#1E3A8A' }}>

      {/* Subtle dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251,191,36,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251,191,36,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Yellow top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent" />

      {/* ── Main grid ── */}
      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-12 xl:gap-14">

          {/* Brand — col-span-3 */}
          <div className="lg:col-span-3">
            <div className="mb-5">
              <Logo />
            </div>
            <p className="mb-6 max-w-[220px] text-sm leading-relaxed text-white/55">
              Telecom-integrated digital infrastructure — building secure, scalable, and
              enterprise-grade platforms across Africa.
            </p>

            {/* NCC badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-lg border border-yellow-400/25 bg-yellow-400/8 px-3 py-2">
              <span className="text-sm">🏛️</span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-yellow-400">NCC Licensed</p>
                <p className="text-[11px] text-white/50">VAS Operator · Nigeria</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-blue-950"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company — col-span-2 */}
          <div className="lg:col-span-2">
            <ColLabel>Company</ColLabel>
            <ul className="space-y-2.5">
              {quickLinks.map(({ title, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-white/55 transition-colors duration-150 hover:text-yellow-400"
                  >
                    <span className="h-px w-0 bg-yellow-400 transition-all duration-200 group-hover:w-3" />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms — col-span-2 */}
          <div className="lg:col-span-2">
            <ColLabel>Platforms</ColLabel>
            <ul className="space-y-2.5">
              {platforms.map(({ title, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[13px] text-white/55 transition-colors duration-150 hover:text-yellow-400"
                  >
                    {title}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone — col-span-2 */}
          <div className="lg:col-span-2">
            <ColLabel>Phone</ColLabel>
            <div className="flex items-start gap-3">
              <Phone size={13} className="mt-0.5 flex-shrink-0 text-yellow-400" />
              <div className="flex flex-col gap-2">
                {phoneNumbers.map((n) => (
                  <a
                    key={n}
                    href={`tel:${n.replace(/\s/g, '')}`}
                    className="text-[13px] text-white/55 transition-colors hover:text-yellow-400"
                  >
                    {n}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Address — col-span-3 */}
          <div className="lg:col-span-3">
            <ColLabel>Contact</ColLabel>

            <div className="mb-5 flex items-center gap-3">
              <Mail size={13} className="flex-shrink-0 text-yellow-400" />
              <a
                href="mailto:hello@venixpartners.com"
                className="text-[13px] text-white/55 transition-colors hover:text-yellow-400"
              >
                hello@venixpartners.com
              </a>
            </div>

            {/* Hours card */}
            <div className="mb-5 border border-white/10 bg-white/5 p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-yellow-400">
                Business Hours
              </p>
              <div className="mb-1 flex items-center gap-2 text-[13px] text-white">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open Today
              </div>
              <p className="text-[12px] text-white/45">Mon – Fri &nbsp;·&nbsp; 9:00 AM – 5:00 PM</p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={13} className="mt-0.5 flex-shrink-0 text-yellow-400" />
              <address className="not-italic text-[13px] leading-relaxed text-white/55">
                35, Yesufu Sanusi Street<br />
                Off Adeniran Ogunsanya<br />
                Surulere, Lagos, Nigeria
              </address>
            </div>
          </div>

        </div>
      </Container>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── Bottom bar ── */}
      <Container>
        <div className="relative z-10 flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-[12px] text-white/30">
            © {year} Venix Partners Limited. All rights reserved.
          </p>

          {/* Legal links — now using React Router <Link> so they work as SPA routes */}
          <div className="flex items-center gap-5">
            {legalLinks.map(({ title, to }) => (
              <Link
                key={to}
                to={to}
                className="group relative text-[12px] text-white/30 transition-colors duration-200 hover:text-yellow-400"
              >
                {title}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-yellow-400 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </Container>

    </footer>
  );
}