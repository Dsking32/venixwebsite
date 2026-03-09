// ─── PlatformsPage.tsx ────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';

function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('_vis', e.isIntersecting)),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('._r,._rl,._rr').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  ._r  { opacity:0; transform:translateY(32px);  transition:opacity .75s ease,transform .75s ease; }
  ._rl { opacity:0; transform:translateX(-52px); transition:opacity .8s  ease,transform .8s  ease; }
  ._rr { opacity:0; transform:translateX( 52px); transition:opacity .8s  ease,transform .8s  ease; }
  ._r._vis,._rl._vis,._rr._vis { opacity:1; transform:none; }
  ._d1{transition-delay:.1s} ._d2{transition-delay:.2s} ._d3{transition-delay:.3s}
  ._d4{transition-delay:.4s} ._d5{transition-delay:.5s} ._d6{transition-delay:.6s}
  @keyframes _float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  ._float { animation:_float 5s ease-in-out infinite; }
  @keyframes _shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
`;

const serif = { fontFamily: "'DM Serif Display',Georgia,serif" } as const;

function Eyebrow({ light, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <p className={`_r mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] ${light ? 'text-yellow-400' : 'text-yellow-500'}`}>
      <span className={`block h-[2px] w-6 ${light ? 'bg-yellow-400' : 'bg-yellow-500'}`} />
      {children}
    </p>
  );
}

// ── S1: HERO ─────────────────────────────────────────────────────────────────
function S1Hero() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const pillars = [
    { label: 'Regulated Telecom Connectivity' },
    { label: 'Enterprise Grade Infrastructure' },
    { label: 'Diversified Vertical Deployment' },
    { label: 'Controlled Risk Isolation' },
    { label: 'Scalable Transaction Routing' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-blue-950 px-6 pb-24 pt-32">
      <style>{CSS}</style>

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dvpfdgnkw/image/upload/v1758640721/create_a_dark_background_like_paper_e0rbyv.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/97 via-blue-950/85 to-blue-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-blue-950/20" />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(251,191,36,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.03) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'linear-gradient(to right, black 0%, transparent 65%)',
        WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 65%)',
      }} />
      <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="_r inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-yellow-400 mb-5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />
              Platform Ecosystem
            </span>
            <h1 className="_r _d1 mb-6 text-5xl leading-[1.07] text-white lg:text-6xl" style={serif}>
              Structured Digital<br /><em style={{ color: '#fde68a' }}>Infrastructure</em>
            </h1>
            <p className="_r _d2 mb-8 max-w-lg text-lg font-light leading-relaxed text-white/65">
              Venix Partners Limited operates a diversified portfolio of telecom integrated digital platforms built on a layered infrastructure architecture designed to combine regulated connectivity with enterprise grade execution.
            </p>
            <div className="_r _d3 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-lg bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 shadow-lg shadow-yellow-400/25 transition-all hover:-translate-y-0.5 hover:bg-yellow-300">
                Discuss an Integration
              </Link>
              <Link to="/services" className="rounded-lg border border-white/20 px-6 py-3 text-sm font-bold text-white/80 transition-all hover:border-white/40 hover:text-white">
                Our Services
              </Link>
            </div>
          </div>

          {/* Right: ecosystem pillars */}
          <div className="hidden lg:flex flex-col gap-3 items-end">
            <div className="_float rounded-2xl bg-white/8 backdrop-blur-md border border-white/10 p-5 w-64 shadow-xl mb-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/70 mb-2">Ecosystem Design</p>
              <p className="text-base text-white/90" style={serif}>Infrastructure → Telecom → Verticals</p>
            </div>
            <div className="flex flex-col gap-2 w-64">
              {pillars.map((p, i) => (
                <div key={p.label} className={`_r _d${i + 1} flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5`}>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                  <p className="text-[12px] font-medium text-white/70">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform count bar */}
        <div className="_r _d4 mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-10">
          {[
            { n: '7', l: 'Active Platforms' },
            { n: '4', l: 'Telecom Networks' },
            { n: 'NCC', l: 'Licensed VAS' },
            { n: '3', l: 'Ecosystem Layers' },
          ].map(s => (
            <div key={s.l}>
              <p className="text-2xl text-yellow-400" style={serif}>{s.n}</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/35">{s.l}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── S2: CORE INFRASTRUCTURE ──────────────────────────────────────────────────
function S2CoreInfra() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const capabilities = [
    'Airtime vending across MTN, Airtel, Glo, and 9mobile',
    'Data bundle provisioning',
    'Secure REST API integrations',
    'Enterprise dashboard management',
    'Transaction monitoring and analytics',
    'Vendor API & IP whitelisting protocols',
    'Firewall protected deployment',
    'High uptime infrastructure architecture',
  ];

  return (
    <section ref={ref} className="overflow-hidden bg-white px-6 py-24">
      <Container>
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-full bg-blue-900/8 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-900/40">Core Infrastructure</span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <div>
            <Eyebrow>Infrastructure Backbone</Eyebrow>
            <h2 className="_r _d1 mb-4 text-4xl leading-[1.1] text-blue-900 lg:text-5xl" style={serif}>
              Venix Cloud
            </h2>
            <p className="_r _d2 mb-2 text-sm font-semibold italic text-blue-900/40">Enterprise E-Top-Up & Telecom Integration Infrastructure</p>
            <a href="https://venix.cloud" target="_blank" rel="noopener noreferrer" className="_r _d2 mb-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-yellow-600 hover:text-yellow-700 transition-colors">
              venix.cloud ↗
            </a>
            <p className="_r _d3 mb-6 text-[15px] font-light leading-relaxed text-blue-900/70">
              Venix Cloud is the foundational infrastructure layer powering high volume airtime and data distribution across Nigerian telecom networks. Designed as a B2B enterprise platform, it enables financial institutions, fintech operators, aggregators, and enterprise clients to integrate directly into regulated telecom frameworks through secure API architecture.
            </p>
            <div className="_r _d4 inline-flex items-center gap-2 rounded-xl border border-blue-900/10 bg-blue-900/4 px-4 py-3 mb-6">
              <span className="text-lg">🏗️</span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-900/50">Platform Type</p>
                <p className="text-[13px] font-semibold text-blue-900">Enterprise Infrastructure — Not a Consumer Product</p>
              </div>
            </div>
          </div>

          {/* Capabilities grid */}
          <div className="_rr grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <div key={cap} className={`_r _d${Math.min(i + 1, 6)} flex items-start gap-3 rounded-xl border border-blue-900/8 bg-blue-900/3 p-4 transition-all hover:border-yellow-400/40 hover:bg-yellow-400/5`}>
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                <p className="text-[13px] font-light leading-snug text-blue-900/70">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S3: ALL PLATFORMS GRID ───────────────────────────────────────────────────
function S3Platforms() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const [expanded, setExpanded] = useState<number | null>(null);

  const platforms = [
    {
      category: 'Fintech & Payment Distribution',
      emoji: '💳',
      name: 'BillMagic',
      tagline: 'Digital Utility & Airtime Distribution Platform',
      url: 'https://billmagic.xyz',
      urlLabel: 'billmagic.xyz',
      color: 'from-emerald-900 to-emerald-950',
      accent: '#34d399',
      desc: "BillMagic is Venix's digital utility and airtime distribution platform structured for retail, reseller, and institutional use. The platform simplifies digital payments and provides structured vending workflows for individuals and businesses.",
      capabilities: [
        'Airtime & data vending',
        'Electricity token payments',
        'Utility bill automation',
        'Structured digital wallet workflows',
        'Reseller distribution framework',
        'API-based integrations',
      ],
    },
    {
      category: 'Enterprise Messaging Infrastructure',
      emoji: '📡',
      name: 'Mesaj',
      tagline: 'Transactional & Promotional Messaging Platform',
      url: 'https://mesaj.cloud',
      urlLabel: 'mesaj.cloud',
      color: 'from-blue-900 to-blue-950',
      accent: '#60a5fa',
      desc: 'Mesaj provides enterprise grade messaging infrastructure designed for regulated, high reliability communication environments. The platform supports institutions requiring stable, cost efficient, and compliant communication channels.',
      capabilities: [
        'Bulk SMS aggregation',
        'Transactional messaging',
        'Promotional campaigns',
        'Enterprise API integrations',
        'Delivery reporting & analytics',
        'Carrier route management',
      ],
    },
    {
      category: 'Telecom Monetisation Services',
      emoji: '🎵',
      name: 'CRBT',
      tagline: 'Telecom-Based Content Monetisation Service',
      url: null,
      urlLabel: null,
      color: 'from-purple-900 to-purple-950',
      accent: '#c084fc',
      desc: 'Venix operates regulated Caller Ring Back Tune (CRBT) services integrated with Nigerian telecom networks through structured VAS aggregator partnerships. CRBT represents Venix\'s legacy strength in telecom-integrated service monetization.',
      capabilities: [
        'Subscriber-based caller personalization',
        'Music content distribution',
        'Corporate brand tones',
        'Audio marketing integrations',
        'Artist monetisation partnerships',
        'NCC VAS regulatory compliance',
      ],
    },
    {
      category: 'Media & Digital Content',
      emoji: '🎬',
      name: 'BingeBay',
      tagline: 'Mobile First Streaming & Live Media Platform',
      url: 'https://bingebay.tv',
      urlLabel: 'bingebay.tv',
      color: 'from-rose-900 to-rose-950',
      accent: '#fb7185',
      desc: 'BingeBay is a digital streaming platform focused on African content distribution and mobile first consumption models expanding the Venix ecosystem into digital media distribution while leveraging telecom integrated transaction capabilities.',
      capabilities: [
        'Video-on-demand streaming',
        'Live event broadcasting',
        'Creator monetisation',
        'Content licensing',
        'Advertising integrations',
        'Mobile first delivery',
      ],
    },
    {
      category: 'Gaming & Interactive Platforms',
      emoji: '🏆',
      name: 'Turnaj',
      tagline: 'Fantasy Sports & Interactive Competition Platform',
      url: 'https://turnaj.mobi',
      urlLabel: 'turnaj.mobi',
      color: 'from-orange-900 to-orange-950',
      accent: '#fb923c',
      desc: 'Turnaj is a skill based interactive gaming platform focused on community engagement and structured competition. Built with regulatory awareness and localized engagement strategies tailored to African markets.',
      capabilities: [
        'Fantasy sports tournaments',
        'Skill based competitions',
        'Structured prize mechanisms',
        'Digital payment integration',
        'Community driven engagement',
        'African market localization',
      ],
    },
    {
      category: 'Data & Intelligence',
      emoji: '📊',
      name: 'FinSight',
      tagline: 'Financial Intelligence & Sector Analytics Platform',
      url: 'https://finsightngr.online',
      urlLabel: 'finsightngr.online',
      color: 'from-cyan-900 to-cyan-950',
      accent: '#22d3ee',
      desc: 'FinSight provides structured financial and fintech sector insights designed for entrepreneurs, investors, and industry participants expanding the Venix ecosystem into financial information services and market intelligence.',
      capabilities: [
        'Real-time fintech updates',
        'Sector news and intelligence',
        'Simplified financial analytics',
        'Subscription-based access',
        'Mobile first content delivery',
        'Market intelligence reports',
      ],
    },
  ];

  return (
    <section ref={ref} className="overflow-hidden bg-blue-950 px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0" style={{
        backgroundImage: 'linear-gradient(rgba(251,191,36,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.03) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
        height: '100%',
      }} />
      <Container className="relative z-10">
        <div className="mb-14 text-center">
          <Eyebrow light>Platform Portfolio</Eyebrow>
          <h2 className="_r _d1 mb-5 text-4xl leading-[1.1] text-yellow-50 lg:text-[2.75rem]" style={serif}>
            Six Vertical Market Platforms
          </h2>
          <p className="_r _d2 mx-auto max-w-xl text-[15px] font-light leading-relaxed text-white/55">
            Each platform operates within a defined vertical market while sharing infrastructure, telecom connectivity, and compliance frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className={`_r _d${Math.min(i + 1, 6)} group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color} transition-all duration-300 hover:border-white/20 hover:shadow-2xl`}
            >
              {/* Top accent line */}
              <div className="h-[2px] w-full" style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }} />

              <div className="p-6">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: p.accent + 'aa' }}>{p.category}</p>
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{p.emoji}</span>
                      <h3 className="text-2xl text-white" style={serif}>{p.name}</h3>
                    </div>
                    <p className="mt-1 text-[12px] font-light italic text-white/40">{p.tagline}</p>
                  </div>
                </div>

                {/* URL */}
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all hover:opacity-80"
                    style={{ borderColor: p.accent + '40', color: p.accent }}
                  >
                    {p.urlLabel} ↗
                  </a>
                )}
                {!p.url && (
                  <span className="mb-4 inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/30">
                    NCC VAS Service
                  </span>
                )}

                {/* Description */}
                <p className="mb-4 text-[13px] font-light leading-relaxed text-white/60">{p.desc}</p>

                {/* Toggle */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors"
                  style={{ color: p.accent }}
                >
                  {expanded === i ? 'Hide Capabilities ↑' : 'View Capabilities ↓'}
                </button>

                {/* Capabilities */}
                {expanded === i && (
                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {p.capabilities.map(cap => (
                      <li key={cap} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accent }} />
                        <span className="text-[13px] font-light text-white/65">{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── S4: ARCHITECTURE ─────────────────────────────────────────────────────────
function S4Architecture() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const layers = [
    {
      num: '01',
      label: 'Infrastructure Backbone',
      color: '#FBBF24',
      platforms: ['Venix Cloud'],
      desc: 'The programmable infrastructure core upon which all other platforms and external partners operate.',
    },
    {
      num: '02',
      label: 'Regulated Telecom Services',
      color: '#60a5fa',
      platforms: ['CRBT', 'Mesaj'],
      desc: 'NCC VAS licensed services operating within structured aggregator agreements and telecom compliance protocols.',
    },
    {
      num: '03',
      label: 'Vertical Market Platforms',
      color: '#34d399',
      platforms: ['BillMagic', 'BingeBay', 'Turnaj', 'FinSight'],
      desc: 'Distinct vertical platforms with operational risk isolation, clear regulatory classification, and targeted market positioning.',
    },
  ];

  const advantages = [
    'Transaction routing efficiency',
    'Telecom integration stability',
    'Centralized API governance',
    'Scalable transaction capacity',
    'Shared security protocols',
    'Reduced vendor fragmentation',
  ];

  return (
    <section ref={ref} className="overflow-hidden px-6 py-24" style={{ background: 'linear-gradient(135deg,#FBBF24 0%,#FEF3C7 100%)' }}>
      <Container>
        <div className="mb-14 text-center">
          <Eyebrow>Platform Architecture</Eyebrow>
          <h2 className="_r _d1 mb-5 text-4xl leading-[1.1] text-blue-900 lg:text-[2.75rem]" style={serif}>
            Three-Layer Ecosystem Design
          </h2>
          <p className="_r _d2 mx-auto max-w-xl text-[15px] font-light leading-relaxed text-blue-900/65">
            Structural separation enables operational risk isolation, clear regulatory classification, and flexible capital deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-14">
          {layers.map((layer, i) => (
            <div key={layer.num} className={`_r _d${i + 1} rounded-2xl border border-blue-900/10 bg-white/70 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/20`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-900/30">{layer.num}</span>
                <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${layer.color}, transparent)` }} />
              </div>
              <h3 className="mb-3 text-xl text-blue-900" style={serif}>{layer.label}</h3>
              <p className="mb-4 text-[13px] font-light leading-relaxed text-blue-900/65">{layer.desc}</p>
              <div className="flex flex-wrap gap-2">
                {layer.platforms.map(name => (
                  <span key={name} className="rounded-full px-3 py-1 text-[11px] font-bold" style={{ background: layer.color + '20', color: layer.color === '#FBBF24' ? '#92400e' : layer.color }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integrated advantage */}
        <div className="_r rounded-3xl border border-blue-900/10 bg-blue-900 p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-yellow-400">Integrated Ecosystem Advantage</p>
              <h3 className="mb-4 text-3xl text-white" style={serif}>Shared Infrastructure. Independent Verticals.</h3>
              <p className="text-[15px] font-light leading-relaxed text-white/60">
                While each platform operates within a defined vertical market, shared infrastructure coordination ensures efficiency across the entire ecosystem positioning Venix as a long-term infrastructure participant rather than a single product operator.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {advantages.map((a, i) => (
                <div key={a} className={`_r _d${Math.min(i + 1, 6)} flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3`}>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold text-blue-900">✓</span>
                  <p className="text-[12px] font-light text-white/70">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S5: COMPLIANCE ───────────────────────────────────────────────────────────
function S5Compliance() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const items = [
    { icon: '🏛️', label: 'NCC VAS Licensing', desc: 'All telecom-integrated platforms operate within NCC VAS licensing frameworks.' },
    { icon: '🤝', label: 'Aggregator Agreements', desc: 'Structured aggregator agreements with MTN, Airtel, Glo, and 9mobile.' },
    { icon: '📋', label: 'Telecom Compliance', desc: 'Full telecom compliance protocols and vendor whitelisting standards.' },
    { icon: '🛡️', label: 'Information Security', desc: 'Firewall protection, IP whitelisting, and information security safeguards across all platforms.' },
  ];

  return (
    <section ref={ref} className="overflow-hidden bg-blue-900 px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0" style={{
        backgroundImage: 'linear-gradient(rgba(251,191,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.04) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
        height: '100%',
      }} />
      <Container className="relative z-10">
        <div className="mb-14 text-center">
          <Eyebrow light>Platform Governance</Eyebrow>
          <h2 className="_r _d1 mb-5 text-4xl leading-[1.1] text-yellow-50 lg:text-[2.75rem]" style={serif}>
            Compliance First Platform Operations
          </h2>
          <p className="_r _d2 mx-auto max-w-xl text-[15px] font-light leading-relaxed text-white/55">
            Infrastructure reliability and regulatory alignment remain foundational across all platform operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mb-14">
          {items.map((item, i) => (
            <div key={item.label} className={`_r _d${i + 1} rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-yellow-400/25 hover:bg-white/8`}>
              <span className="mb-3 block text-2xl">{item.icon}</span>
              <h3 className="mb-2 text-[15px] font-semibold text-yellow-100" style={serif}>{item.label}</h3>
              <p className="text-[13px] font-light leading-relaxed text-white/55">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="_r rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-12 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-yellow-400">Ready to Integrate?</p>
          <h3 className="mb-4 text-3xl text-white" style={serif}>Access the Venix Platform Ecosystem</h3>
          <p className="mx-auto mb-8 max-w-lg text-[15px] font-light leading-relaxed text-white/55">
            Whether you're a financial institution, fintech operator, or enterprise client Venix has the regulated infrastructure and network integrations to support your deployment.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-lg bg-yellow-400 px-8 py-3 text-sm font-bold text-blue-950 transition-all hover:bg-yellow-300 hover:-translate-y-0.5">
              Start an Integration
            </Link>
            <Link to="/services" className="rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-yellow-400/40 hover:text-yellow-400">
              View Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function PlatformsPage() {
  return (
    <>
      <S1Hero />
      <S2CoreInfra />
      <S3Platforms />
      <S4Architecture />
      <S5Compliance />
    </>
  );
}