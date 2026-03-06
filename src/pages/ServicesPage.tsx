// ─── ServicesPage.tsx ─────────────────────────────────────────────────────────
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
  const industries = ['Telecommunications','Financial Services & Fintech','Digital Payment Operators','Enterprise Technology','Media & Content','Gaming & Interactive','Public Sector','High-Volume Transaction'];
  return (
    <section ref={ref} className="relative overflow-hidden px-6 pb-24 pt-32 bg-blue-950">
      <style>{CSS}</style>

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-blue-950/20" />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(251,191,36,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.03) 1px,transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
        WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
      }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="_r inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-yellow-400 mb-5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />Enterprise Infrastructure Services
            </span>
            <h1 className="_r _d1 mb-6 text-5xl leading-[1.07] text-white lg:text-6xl" style={serif}>
              Enterprise<br /><em style={{color:'#fde68a'}}>Technology Services</em>
            </h1>
            <p className="_r _d2 mb-8 max-w-lg text-lg font-light leading-relaxed text-white/65">
              Venix Partners Limited delivers structured infrastructure and technology services designed to support enterprise digital transformation, telecom integration, and high-volume transaction environments — from strategy through deployment.
            </p>
            <div className="_r _d3 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-lg bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 shadow-lg shadow-yellow-400/25 transition-all hover:-translate-y-0.5 hover:bg-yellow-300">Discuss an Engagement</Link>
              <Link to="/about" className="rounded-lg border border-white/20 px-6 py-3 text-sm font-bold text-white/80 transition-all hover:border-white/40 hover:text-white">About Venix</Link>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="relative hidden lg:flex flex-col gap-4 items-end">
            <div className="_float rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 w-56 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/70 mb-2">Service Model</p>
              <p className="text-xl text-white" style={serif}>Advisory → Build → Operate</p>
            </div>
            <div className="rounded-2xl bg-blue-900/80 backdrop-blur-md border border-yellow-400/20 px-5 py-4 w-48 shadow-xl">
              <p className="text-[9px] font-bold uppercase tracking-widest text-yellow-400 mb-1">Delivery</p>
              <p className="text-base text-white" style={serif}>5 Service Lines</p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 w-56 shadow-xl">
              <div className="flex gap-4">
                {[{n:'4',l:'Networks'},{n:'NCC',l:'Licensed'}].map(s => (
                  <div key={s.l}>
                    <p className="text-2xl text-yellow-400" style={serif}>{s.n}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industry tags */}
        <div className="_r _d4 mt-14 flex flex-wrap gap-2">
          <p className="mr-2 text-[11px] font-bold uppercase tracking-widest text-white/35 self-center">Industries Served:</p>
          {industries.map(ind => (
            <span key={ind} className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[12px] font-medium text-white/70">{ind}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── S2: CORE SERVICES ─────────────────────────────────────────────────────────
function S2CoreServices() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const services = [
    { num:'01', icon:'🗂️', title:'Technical Project Management', sub:'Structured Oversight for Complex Digital Deployments', desc:'End-to-end technical project management for telecom integrations, fintech platform deployments, digital infrastructure rollouts, and enterprise system implementations.', scope:['Project feasibility analysis','Requirements gathering & documentation','Solution architecture coordination','Integration planning & validation','Vendor selection & management','Deployment supervision & go-live','Post-implementation monitoring'], img:'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { num:'02', icon:'🧠', title:'IT Consultancy', sub:'Strategic Advisory for Infrastructure Modernization', desc:'Strategic and operational IT consultancy to institutions seeking to modernize infrastructure, improve digital efficiency, or deploy scalable transaction frameworks grounded in practical deployment experience.', scope:['Digital transformation strategy','Telecom integration advisory','Enterprise systems architecture','Fintech infrastructure planning','API framework development','Cloud deployment advisory','Information security assessment'], img:'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { num:'03', icon:'⚙️', title:'IT Managed Services', sub:'Ongoing Infrastructure Operations & Stability', desc:'Structured IT managed services for organizations requiring reliable operational oversight — tailored to ensure system stability, transaction reliability, and infrastructure resilience.', scope:['Infrastructure monitoring & performance','API uptime tracking','Server & cloud administration','Security patch management','Firewall oversight','Incident response coordination','Transaction reporting & analytics'], img:'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { num:'04', icon:'📡', title:'Telecom Infrastructure Deployment', sub:'Enterprise E-Top-Up & Transaction Systems', desc:'Through Venix Cloud and associated infrastructure layers, we support enterprise clients requiring airtime distribution, data provisioning, secure transaction routing, and API-based vending architecture.', scope:['Airtime distribution infrastructure','Data bundle provisioning','Secure transaction routing','Enterprise dashboard integration','API-based vending architecture','Telecom vendor whitelisting','Firewall-protected architecture'], img:'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { num:'05', icon:'💬', title:'Messaging & Communication Infrastructure', sub:'Enterprise-Grade Communication Systems', desc:'Transactional and promotional messaging infrastructure designed for reliability and cost efficiency — suitable for financial institutions, e-commerce platforms, public sector entities, and enterprise clients.', scope:['Bulk SMS aggregation','Transactional messaging systems','Enterprise API integrations','Carrier route management','Delivery analytics & reporting','Telecom compliance alignment'], img:'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section ref={ref} className="overflow-hidden bg-white px-6 py-24">
      <Container>
        <div className="mb-14 text-center">
          <Eyebrow>Core Services</Eyebrow>
          <H2>Five Enterprise Service Lines</H2>
          <p className="_r _d2 mx-auto max-w-lg text-[15px] font-light leading-relaxed text-blue-900/65">All services are delivered within regulated telecom frameworks and aligned with NCC VAS licensing requirements where applicable.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.num} className={`_r _d${Math.min(i+1,6)} group overflow-hidden rounded-2xl border border-blue-900/8 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-400/10 ${i === 4 ? 'lg:col-span-2 xl:col-span-1' : ''}`}>
              <img src={s.img} alt={s.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3"><span className="text-2xl">{s.icon}</span><span className="text-[11px] font-bold uppercase tracking-widest text-yellow-500">{s.num}</span></div>
                <h3 className="mb-1 text-xl font-semibold text-blue-900" style={serif}>{s.title}</h3>
                <p className="mb-3 text-[12px] font-medium italic text-blue-900/50">{s.sub}</p>
                <p className="mb-4 text-[13px] font-light leading-relaxed text-blue-900/70">{s.desc}</p>
                <button onClick={() => setOpen(open === i ? null : i)} className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-yellow-600 transition-colors hover:text-blue-900">{open === i ? 'Hide Scope ↑' : 'View Scope →'}</button>
                {open === i && (<ul className="mt-4 space-y-1.5 border-t border-blue-900/8 pt-4">{s.scope.map(item => (<li key={item} className="flex items-start gap-2 text-[13px] text-blue-900/65"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />{item}</li>))}</ul>)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── S3: INTEGRATED ADVANTAGE ──────────────────────────────────────────────────
function S3Advantage() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const advantages = [
    { icon:'🏛️', title:'Regulatory Licensing', desc:'NCC VAS licensed — enabling compliant telecom-integrated service delivery from day one.' },
    { icon:'🔗', title:'Telecom Network Access', desc:'Active integrations with MTN, Airtel, Glo, and 9mobile via accredited VAS aggregator channels.' },
    { icon:'🏗️', title:'Infrastructure Ownership', desc:'Proprietary platform infrastructure eliminates vendor dependency and accelerates deployment.' },
    { icon:'🚀', title:'Implementation Oversight', desc:'End-to-end delivery oversight from architecture through go-live across complex programmes.' },
    { icon:'🔄', title:'Ongoing Operations', desc:'Long-term managed services ensuring sustained system stability beyond initial deployment.' },
  ];
  const outcomes = ['Continuity from advisory to execution','Reduced vendor fragmentation','Faster deployment cycles','Improved operational stability','Enhanced regulatory alignment'];
  return (
    <section ref={ref} className="relative overflow-hidden bg-blue-900 px-6 py-24">
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(251,191,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.04) 1px,transparent 1px)', backgroundSize:'56px 56px' }} />
      <Container className="relative z-10">
        <div className="mb-14 text-center">
          <Eyebrow light>Integrated Service Advantage</Eyebrow>
          <H2 light>Unlike Advisory-Only Firms, Venix Combines:</H2>
          <p className="_r _d2 mx-auto max-w-xl text-[15px] font-light leading-relaxed text-white/55">Our model is designed to support institutions operating within high-volume, regulated digital environments.</p>
        </div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 content-start">
            {advantages.map((a, i) => (<div key={a.title} className={`_r _d${i+1} rounded-2xl border border-white/10 bg-white/4 p-5 transition-all hover:border-yellow-400/30 hover:bg-white/7 ${i===4 ? 'sm:col-span-2' : ''}`}><span className="mb-3 block text-2xl">{a.icon}</span><p className="mb-2 text-[13px] font-semibold text-yellow-100">{a.title}</p><p className="text-[12px] font-light leading-relaxed text-white/55">{a.desc}</p></div>))}
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="_r text-2xl text-yellow-100 mb-6" style={serif}>This Integrated Approach Ensures:</h3>
            <ul className="_r _d1 space-y-4 mb-10">{outcomes.map(o => (<li key={o} className="flex items-center gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-blue-900">✓</span><span className="text-[15px] font-light text-white/75">{o}</span></li>))}</ul>
            <div className="_r _d2 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-100 p-6">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-blue-900/55">Engagement Model</p>
              <div className="grid grid-cols-2 gap-2">{['Fixed-scope contracts','Retainer advisory','Infrastructure deployment','Managed service frameworks','Strategic partnerships'].map(e => (<div key={e} className="flex items-center gap-2 text-[12px] font-medium text-blue-900"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900/40" />{e}</div>))}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S4: DELIVERY COMMITMENT ───────────────────────────────────────────────────
function S4Commitment() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const commitments = [
    { icon:'🏗️', title:'Infrastructure Reliability', desc:'Systems engineered for high-uptime, resilience, and sustained performance under transaction load.' },
    { icon:'⚖️', title:'Regulatory Compliance', desc:'All services aligned with NCC licensing conditions and applicable digital infrastructure regulations.' },
    { icon:'🛡️', title:'Structured Risk Management', desc:'Proactive identification and mitigation of operational, technological, and market risk vectors.' },
    { icon:'📊', title:'Transparent Reporting', desc:'Defined reporting frameworks delivering visibility across system performance and service metrics.' },
    { icon:'⭐', title:'Technical Excellence', desc:'Deployment practices governed by structured governance frameworks and engineering standards.' },
    { icon:'🌱', title:'Sustainable Operational Growth', desc:'Long-term partnership focus over short-term deployments — built for institutional longevity.' },
  ];
  return (
    <section ref={ref} className="overflow-hidden px-6 py-24" style={{ background:'linear-gradient(135deg,#FBBF24 0%,#FEF3C7 100%)' }}>
      <Container>
        <div className="mb-14 text-center">
          <Eyebrow>Delivery Commitment</Eyebrow>
          <H2>Our Services Are Built for Long-Term Institutional Partnerships</H2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c, i) => (<div key={c.title} className={`_r _d${Math.min(i+1,6)} rounded-2xl border border-blue-900/10 bg-white/70 p-6 transition-all hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10`}><span className="mb-4 block text-3xl">{c.icon}</span><p className="mb-2 text-[15px] font-semibold text-blue-900" style={serif}>{c.title}</p><p className="text-[13px] font-light leading-relaxed text-blue-900/65">{c.desc}</p></div>))}
        </div>
      </Container>
    </section>
  );
}

// ── S5: CTA ───────────────────────────────────────────────────────────────────
function S5CTA() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="relative overflow-hidden bg-blue-900 px-6 py-24">
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(251,191,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.04) 1px,transparent 1px)', backgroundSize:'56px 56px' }} />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow light>Start an Engagement</Eyebrow>
            <h2 className="_r _d1 mb-5 text-4xl leading-[1.1] text-yellow-100 lg:text-5xl" style={serif}>Ready to Deploy Enterprise-Grade Digital Infrastructure?</h2>
            <p className="_r _d2 text-[15px] font-light leading-relaxed text-white/60">Whether you're a financial institution, fintech operator, telecom partner, or enterprise technology firm — Venix has the regulated infrastructure, technical depth, and network integrations to support your deployment.</p>
          </div>
          <div className="_r _d3 rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-widest text-yellow-400">For Enterprise Engagements, Include:</p>
            <ul className="mb-8 space-y-2.5">{['Organization name & nature of business','Proposed scope of engagement','Expected transaction volume (if applicable)','Technical contact details','Regulatory considerations (if applicable)'].map(item => (<li key={item} className="flex items-start gap-2.5 text-[13px] text-white/65"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />{item}</li>))}</ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-lg bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-900 transition-all hover:bg-yellow-300 hover:-translate-y-0.5">Send Enterprise Inquiry</Link>
              <a href="mailto:hello@venixpartners.com" className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-yellow-400/40 hover:text-yellow-400">hello@venixpartners.com</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ServicesPage() {
  return <><S1Hero /><S2CoreServices /><S3Advantage /><S4Commitment /><S5CTA /></>;
}