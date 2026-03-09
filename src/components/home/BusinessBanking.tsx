// RegulatoryFoundation.tsx
import { useEffect, useRef } from 'react';

const networks = [
  { abbr:'MTN', name:'MTN Nigeria',     status:'Active integration' },
  { abbr:'AIR', name:'Airtel Nigeria',  status:'Active integration' },
  { abbr:'GLO', name:'Globacom (Glo)',  status:'Active integration' },
  { abbr:'9MB', name:'9mobile (T2)',    status:'Active integration' },
];

const capabilities = [
  { icon:'📶', title:'Airtime Distribution',  desc:'Programmatic airtime vending across all major Nigerian networks at enterprise scale.', img:'https://images.pexels.com/photos/4482896/pexels-photo-4482896.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon:'📦', title:'Data Provisioning',      desc:'Automated data bundle provisioning for B2B clients and downstream distributors.',       img:'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon:'✉️', title:'Enterprise Messaging',   desc:'High volume transactional and promotional messaging via direct telecom channels.',       img:'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon:'💰', title:'Content Monetization',   desc:'Telecom integrated content billing and subscription management frameworks.',             img:'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon:'🔄', title:'Transaction Routing',    desc:'Secure, real time transaction routing within regulated telecom environments.',           img:'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { icon:'🛡️', title:'Compliance Assurance',   desc:'Full NCC regulatory alignment across all integration and operational touchpoints.',      img:'https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export default function RegulatoryFoundation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white px-6 py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .reveal       { opacity:0; transform:translateY(32px);  transition:opacity .7s ease,transform .7s ease; }
        .reveal-left  { opacity:0; transform:translateX(-48px); transition:opacity .8s ease,transform .8s ease; }
        .reveal-right { opacity:0; transform:translateX(48px);  transition:opacity .8s ease,transform .8s ease; }
        .reveal.visible,.reveal-left.visible,.reveal-right.visible { opacity:1; transform:none; }
        .d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}.d5{transition-delay:.5s}.d6{transition-delay:.6s}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        .pill-float { animation: float 5s ease-in-out infinite; }
      `}</style>

      <div className="mx-auto max-w-7xl">

        {/* Top: image stack + text */}
        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Image stack */}
          <div className="reveal-left relative h-[480px]">
            <img
              src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Telecom towers"
              className="absolute right-0 top-0 h-[400px] w-4/5 rounded-3xl object-cover"
            />
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=700"
              alt="Network operations centre"
              className="absolute bottom-0 left-0 h-[280px] w-3/5 rounded-2xl border-[6px] border-white object-cover shadow-2xl shadow-blue-900/15"
            />
            <div className="pill-float absolute left-0 top-6 rounded-2xl bg-blue-900 p-4 shadow-xl shadow-blue-900/30">
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">Networks</p>
              <p className="font-['DM_Serif_Display',Georgia,serif] text-base text-white">4 Integrations</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="reveal mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-yellow-400 before:block before:h-[2px] before:w-7 before:bg-yellow-400 before:content-['']">
              Regulatory Foundation
            </p>
            <h2 className="reveal d1 mb-5 font-['DM_Serif_Display',Georgia,serif] text-4xl leading-[1.12] text-blue-900">
              NCC Licensed. Telecom Integrated. Fully Compliant.
            </h2>
            <p className="reveal d2 mb-6 text-[15px] font-light leading-relaxed text-blue-900/70">
              Venix Partners Limited holds a Value Added Service (VAS) License issued by the Nigerian Communications Commission enabling structured and compliant deployment of telecom-based digital platforms across Nigeria.
            </p>

            {/* NCC block */}
            <div className="reveal d3 mb-7 flex items-center gap-4 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-950 p-6 shadow-lg shadow-blue-900/20">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-100 text-2xl">🏛️</div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">License Authority</p>
                <p className="font-['DM_Serif_Display',Georgia,serif] text-base text-white">NCC — Value Added Service (VAS) Operator</p>
              </div>
            </div>

            {/* Network grid */}
            <div className="reveal d4">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-blue-900/40">Accredited Network Partners</p>
              <div className="grid grid-cols-2 gap-3">
                {networks.map(n => (
                  <div key={n.abbr} className="flex items-center gap-3 rounded-xl border-[1.5px] border-blue-900/10 p-4 transition-all duration-200 hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-400/10">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-100 text-[10px] font-extrabold tracking-wide text-blue-900">{n.abbr}</div>
                    <div>
                      <p className="text-[13px] font-semibold text-blue-900">{n.name}</p>
                      <p className="text-[11px] text-blue-900/45">{n.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-14 h-px bg-blue-900/8" />

        <h3 className="reveal mb-10 text-center font-['DM_Serif_Display',Georgia,serif] text-3xl text-blue-900">What Our Telecom Integration Enables</h3>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <div key={c.title} className={`reveal d${i + 1} overflow-hidden rounded-2xl border-[1.5px] border-blue-900/8 transition-all duration-250 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/10`}>
              <img src={c.img} alt={c.title} className="h-36 w-full object-cover" />
              <div className="p-5">
                <span className="mb-2 block text-2xl">{c.icon}</span>
                <p className="mb-2 text-[14px] font-semibold text-blue-900">{c.title}</p>
                <p className="text-[12px] font-light leading-relaxed text-blue-900/60">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}