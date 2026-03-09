// ─── AboutPage.tsx ────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';

function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('_vis', e.isIntersecting)),
      { threshold: 0.1 }
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
  @keyframes _float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
  ._float { animation:_float 5s ease-in-out infinite; }
`;

const serif = { fontFamily:"'DM Serif Display',Georgia,serif" } as const;

function Eyebrow({ light, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <p className={`_r mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.14em] ${light ? 'text-yellow-400' : 'text-yellow-500'}`}>
      <span className={`block h-[2px] w-6 ${light ? 'bg-yellow-400' : 'bg-yellow-500'}`} />
      {children}
    </p>
  );
}
function H2({ light, delay = '_d1', children }: { light?: boolean; delay?: string; children: React.ReactNode }) {
  return <h2 className={`_r ${delay} mb-5 text-4xl leading-[1.1] lg:text-[2.75rem] ${light ? 'text-yellow-50' : 'text-blue-900'}`} style={serif}>{children}</h2>;
}

// ── S1: HERO ──────────────────────────────────────────────────────────────────
function S1Hero() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="relative overflow-hidden px-6 pb-24 pt-32 bg-blue-950">
      <style>{CSS}</style>

      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-blue-950/20" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(251,191,36,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.03) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
        WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
      }} />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="_r inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-yellow-400 mb-5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />NCC Licensed · VAS Operator
            </span>
            <h1 className="_r _d1 mb-6 text-5xl leading-[1.07] text-white lg:text-6xl" style={serif}>
              Building Africa's<br /><em style={{color:'#fde68a'}}>Digital Infrastructure</em>
            </h1>
            <p className="_r _d2 mb-8 max-w-lg text-lg font-light leading-relaxed text-white/65">
              Venix Partners Limited is a Nigerian telecom integrated digital infrastructure company operating within regulated VAS frameworks incorporated to build structured, enterprise grade digital systems for Nigeria's expanding transaction economy.
            </p>
            <div className="_r _d3 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-lg bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 shadow-lg shadow-yellow-400/25 transition-all hover:-translate-y-0.5 hover:bg-yellow-300">Partner With Us</Link>
              <Link to="/services" className="rounded-lg border border-white/20 px-6 py-3 text-sm font-bold text-white/80 transition-all hover:border-white/40 hover:text-white">Our Services →</Link>
            </div>
          </div>

          {/* Right: floating stat cards replacing the image (image is now bg) */}
          <div className="relative hidden lg:flex flex-col gap-4 items-end">
            <div className="_float rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 w-56 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/70 mb-1">Operational Since</p>
              <p className="text-2xl text-white" style={serif}>Lagos, Nigeria</p>
              <p className="text-[12px] text-white/45 mt-1">Surulere · HQ</p>
            </div>
            <div className="rounded-2xl bg-blue-900/80 backdrop-blur-md border border-yellow-400/20 px-5 py-4 w-48 shadow-xl">
              <p className="text-[9px] font-bold uppercase tracking-widest text-yellow-400 mb-1">NCC Licensed</p>
              <p className="text-base text-white" style={serif}>VAS Operator</p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 w-56 shadow-xl">
              <div className="flex gap-4">
                {[{n:'4',l:'Networks'},{n:'6+',l:'Platforms'}].map(s => (
                  <div key={s.l}>
                    <p className="text-2xl text-yellow-400" style={serif}>{s.n}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S2: OVERVIEW + EVOLUTION ──────────────────────────────────────────────────
function S2Overview() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const stats = [{ num:'4', label:'Telecom Networks' },{ num:'6+', label:'Platform Verticals' },{ num:'NCC', label:'Regulatory License' },{ num:'B2B', label:'Enterprise-Grade' }];
  const evolution = ['High-frequency telecom-integrated transactions','Enterprise API deployments','Payment & utility distribution frameworks','Content monetization models','Institutional messaging systems','Financial data services'];
  return (
    <section ref={ref} className="overflow-hidden bg-white px-6 py-24">
      <Container>
        <div className="mb-20 grid grid-cols-2 gap-5 rounded-3xl bg-gradient-to-br from-blue-900 to-blue-950 p-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`_r _d${i+1} text-center`}>
              <p className="text-4xl text-yellow-400" style={serif}>{s.num}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/45">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Corporate Overview</Eyebrow>
            <H2>Infrastructure Led. Compliance Driven. Engineered for Scale.</H2>
            <p className="_r _d2 mb-4 text-[15px] font-light leading-relaxed text-blue-900/70">Incorporated to build structured, enterprise grade digital systems, Venix operates as a holding entity overseeing a diversified portfolio of infrastructure and platform businesses serving Nigeria's expanding transaction economy.</p>
            <p className="_r _d3 mb-6 text-[15px] font-light leading-relaxed text-blue-900/70">Through structured partnerships with MTN, Airtel, Globacom (Glo), and 9mobile (T2) via accredited VAS aggregator channels, the Company maintains compliant operational connectivity across multiple Nigerian telecom networks.</p>
            <div className="_r _d4 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-100 p-6">
              <p className="text-lg italic text-blue-900" style={serif}>"Our operational model is infrastructure-led, compliance-driven, and engineered for scale."</p>
              <p className="mt-3 text-[13px] font-semibold text-blue-900/55">— Paul Omugbe, MD / CEO</p>
            </div>
          </div>
          <div>
            <Eyebrow>Our Evolution</Eyebrow>
            <H2>From VAS Operator to Digital Infrastructure Enterprise</H2>
            <p className="_r _d2 mb-7 text-[15px] font-light leading-relaxed text-blue-900/70">As Nigeria's digital economy matured increased mobile penetration, broadband expansion, fintech growth, rising transaction volumes Venix strategically evolved beyond traditional VAS deployment into a broader infrastructure enterprise.</p>
            <ul className="_r _d3 space-y-3">
              {evolution.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold text-blue-900">✓</span>
                  <span className="text-[14px] text-blue-900/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S3: ARCHITECTURE (interactive tabs) ───────────────────────────────────────
function S3Architecture() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const [active, setActive] = useState(0);
  const layers = [
    { num:'01', icon:'📡', title:'Core Telecom Infrastructure',   desc:'Enterprise E-top up and digital service aggregation via Venix Cloud built for high volume airtime and data distribution across all major Nigerian networks.',              img:'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=900' },
    { num:'02', icon:'💳', title:'Fintech & Payment Distribution', desc:'Structured utility vending and digital payment workflows built for financial institutions, fintech operators, and enterprise clients requiring compliant transaction routing.',  img:'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=900' },
    { num:'03', icon:'💬', title:'Enterprise Messaging',           desc:"Transactional and promotional communication infrastructure at telecom scale powering high volume bulk messaging and enterprise notification systems via Mesaj.",            img:'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=900' },
    { num:'04', icon:'🎬', title:'Media & Content Platforms',      desc:"Mobile first streaming and content monetization systems designed for Africa's growing digital media consumption landscape via Bingebay.",                                       img:'https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&w=900' },
    { num:'05', icon:'🎮', title:'Gaming & Interactive Platforms', desc:"Skill based digital competitions and engagement platforms powering interactive gaming ecosystems across Nigerian and African markets via Turnaj.",                              img:'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=900' },
    { num:'06', icon:'📊', title:'Data & Intelligence Services',   desc:"Financial insights and digital sector analytics enabling data driven decision-making for enterprise clients in Nigeria's dynamic economy via Finsight.",                          img:'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=900' },
  ];
  const benefits = ['Platform-level risk isolation','Regulatory clarity','Diversified revenue','Centralized IP governance','Shared infrastructure','Flexible capital allocation'];
  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-24" style={{ background:'linear-gradient(135deg,#FBBF24 0%,#FEF3C7 100%)' }}>
      <Container className="relative z-10">
        <div className="mb-14 text-center">
          <Eyebrow>Corporate Architecture</Eyebrow>
          <H2>Six Integrated Platform Layers</H2>
          <p className="_r _d2 mx-auto max-w-lg text-[15px] font-light leading-relaxed text-blue-900/65">Venix operates as a holding company overseeing a layered digital infrastructure ecosystem each layer within a defined operational framework, benefiting from centralized infrastructure oversight.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.45fr]">
          <div className="flex flex-col gap-1">
            {layers.map((l, i) => (
              <button key={l.num} onClick={() => setActive(i)} className={`flex items-center gap-4 rounded-2xl border-none px-5 py-4 text-left transition-all duration-200 cursor-pointer ${active===i ? 'bg-blue-900' : 'bg-blue-900/6 hover:bg-blue-900/12'}`}>
                <span className={`min-w-[28px] text-xl ${active===i ? 'text-yellow-400' : 'text-blue-900/30'}`} style={serif}>{l.num}</span>
                <div>
                  <p className={`text-[13px] font-semibold ${active===i ? 'text-yellow-100' : 'text-blue-900'}`}>{l.title}</p>
                  <p className={`mt-0.5 text-[11px] ${active===i ? 'text-yellow-400/80' : 'text-blue-900/45'}`}>{l.icon} Platform Layer</p>
                </div>
              </button>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-blue-900">
            <img key={active} src={layers[active].img} alt={layers[active].title} className="h-52 w-full object-cover opacity-40" style={{transition:'opacity .4s'}} />
            <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-transparent to-blue-900/85" />
            <div className="relative p-8">
              <span className="pointer-events-none absolute right-6 top-0 leading-none text-yellow-400/10 text-8xl" style={serif}>{layers[active].num}</span>
              <span className="mb-3 block text-4xl">{layers[active].icon}</span>
              <h3 className="mb-3 text-2xl text-yellow-100" style={serif}>{layers[active].title}</h3>
              <p className="mb-6 text-[14px] font-light leading-relaxed text-white/65">{layers[active].desc}</p>
              <div className="grid grid-cols-2 gap-2">
                {benefits.map(b => (<div key={b} className="flex items-center gap-2 text-[12px] text-white/50"><span className="h-1 w-1 shrink-0 rounded-full bg-yellow-400" />{b}</div>))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S4: GOVERNANCE + REGULATORY ───────────────────────────────────────────────
function S4Governance() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const governance = [
    { icon:'⚖️', title:'Regulatory Compliance',  desc:'Strict adherence to NCC licensing conditions and telecom operating standards across all platform operations.' },
    { icon:'🛡️', title:'Risk Management',         desc:'Identification, assessment, and mitigation of operational, technological, and market risks.' },
    { icon:'🔐', title:'Information Security',     desc:'Secure infrastructure protocols including firewall protections, IP whitelisting, and controlled API access.' },
    { icon:'🔍', title:'Vendor Due Diligence',     desc:'Structured partner evaluation processes and compliance verification prior to integration.' },
    { icon:'📊', title:'Financial Oversight',      desc:'Structured financial reporting, internal monitoring, and operational discipline across all entities.' },
    { icon:'📋', title:'Operational Transparency', desc:'Clear documentation of system architecture, integration frameworks, and stakeholder engagement processes.' },
  ];
  const networks = [{ abbr:'MTN', name:'MTN Nigeria' },{ abbr:'AIR', name:'Airtel Nigeria' },{ abbr:'GLO', name:'Globacom (Glo)' },{ abbr:'9MB', name:'9mobile (T2)' }];
  return (
    <section ref={ref} className="relative overflow-hidden bg-blue-900 px-6 py-24">
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(251,191,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.04) 1px,transparent 1px)', backgroundSize:'56px 56px' }} />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div>
            <Eyebrow light>Governance Framework</Eyebrow>
            <H2 light>Structured for Long Term Institutional Credibility</H2>
            <p className="_r _d2 mb-10 text-[15px] font-light leading-relaxed text-white/60">Venix Partners Limited operates under structured corporate governance principles embedded within both infrastructure operations and enterprise service delivery.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {governance.map((g, i) => (
                <div key={g.title} className={`_r _d${i+1} rounded-2xl border border-white/10 bg-white/4 p-5 transition-all hover:border-yellow-400/30 hover:bg-white/7`}>
                  <span className="mb-3 block text-2xl">{g.icon}</span>
                  <p className="mb-2 text-[13px] font-semibold text-yellow-100">{g.title}</p>
                  <p className="text-[12px] font-light leading-relaxed text-white/55">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow light>Regulatory & Licensing</Eyebrow>
            <H2 light>NCC Licensed. Fully Compliant.</H2>
            <p className="_r _d2 mb-8 text-[15px] font-light leading-relaxed text-white/60">Venix holds a Value Added Service (VAS) License issued by the Nigerian Communications Commission (NCC) enabling structured and compliant deployment of telecom-based digital platforms.</p>
            <div className="_r _d3 mb-8 flex items-center gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-200 text-2xl">🏛️</div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">License Authority</p>
                <p className="text-base text-white" style={serif}>Nigerian Communications Commission — VAS Operator</p>
              </div>
            </div>
            <p className="_r _d4 mb-4 text-[11px] font-bold uppercase tracking-widest text-white/35">Accredited Network Partners</p>
            <div className="_r _d5 grid grid-cols-2 gap-3 mb-8">
              {networks.map(n => (
                <div key={n.abbr} className="flex items-center gap-3 rounded-xl border border-white/10 p-4 transition-all hover:border-yellow-400/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-200 text-[10px] font-extrabold text-blue-900">{n.abbr}</div>
                  <div><p className="text-[13px] font-semibold text-white">{n.name}</p><p className="text-[11px] text-white/40">Active integration</p></div>
                </div>
              ))}
            </div>
            <div className="_r _d6 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-100 p-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-900/55">Infrastructure Philosophy</p>
              <p className="text-lg italic text-blue-900" style={serif}>"Infrastructure must be reliable, secure, scalable, and compliant."</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S5: MISSION + LEADERSHIP ──────────────────────────────────────────────────
function S5Mission() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const positions = ['Telecommunications','Digital payments','Enterprise messaging','Media distribution','Interactive gaming','Financial intelligence'];
  return (
    <section ref={ref} className="overflow-hidden px-6 py-24" style={{ background:'linear-gradient(135deg,#FBBF24 0%,#FEF3C7 100%)' }}>
      <Container>
        <div className="mb-20 text-center">
          <Eyebrow>Our Mission</Eyebrow>
          <p className="_r _d1 mx-auto max-w-4xl text-4xl italic leading-snug text-blue-900 lg:text-5xl" style={serif}>
            {'\u201C'}To become a leading African mobile digital infrastructure company powering secure transactions, digital access, and connected services across emerging markets.{'\u201D'}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Strategic Position</Eyebrow>
            <H2>At the Intersection of Africa's Digital Economy</H2>
            <p className="_r _d2 mb-8 text-[15px] font-light leading-relaxed text-blue-900/70">By integrating regulated telecom frameworks with enterprise-grade API infrastructure, Venix enables secure digital participation across multiple sectors simultaneously.</p>
            <div className="_r _d3 grid grid-cols-2 gap-3">
              {positions.map(p => (
                <div key={p} className="flex items-center gap-2.5 rounded-xl border border-blue-900/12 bg-blue-900/6 px-4 py-3 transition-all hover:border-yellow-400/50 hover:bg-blue-900/10">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                  <span className="text-[13px] font-medium text-blue-900">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <H2>Disciplined Operational Management</H2>
            <p className="_r _d2 mb-6 text-[15px] font-light leading-relaxed text-blue-900/70">Venix is guided by executive leadership with experience spanning telecom integration, financial services, infrastructure deployment, digital transformation, regulatory engagement, and enterprise technology management.</p>
            <div className="_r _d3 mb-5 flex items-center gap-5 rounded-2xl border border-blue-900/12 bg-white/60 p-5 backdrop-blur-sm">
              <img src="" alt="Leadership" className="h-16 w-16 shrink-0 rounded-full object-cover" />
              <div>
                <p className="text-xl text-blue-900" style={serif}>Paul Omugbe</p>
                <p className="text-[13px] text-blue-900/55">MD / CEO, Venix Partners Limited</p>
                <p className="mt-1 text-[12px] italic text-blue-900/40">Telecom · Finance · Infrastructure · Digital Transformation</p>
              </div>
            </div>
            <div className="_r _d4 rounded-2xl bg-blue-900 p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-yellow-400">Registered Office</p>
              <p className="text-base text-white" style={serif}>Venix Partners Limited</p>
              <p className="mt-2 text-[13px] font-light leading-relaxed text-white/55">35, Yesufu Sanusi Street, Off Adeniran Ogunsanya<br />Surulere, Lagos, Nigeria</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-lg bg-yellow-400 px-5 py-2.5 text-[13px] font-bold text-blue-900 transition-all hover:bg-yellow-300">Get in Touch</Link>
                <Link to="/services" className="rounded-lg border border-white/20 px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:border-yellow-400/50 hover:text-yellow-400">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return <><S1Hero /><S2Overview /><S3Architecture /><S4Governance /><S5Mission /></>;
}