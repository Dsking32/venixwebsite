// WhoWeAre.tsx
import { useEffect, useRef } from 'react';

const pillars = [
  { icon: '📡', label: 'Enterprise E-Top-Up' },
  { icon: '💳', label: 'Fintech & Payments' },
  { icon: '💬', label: 'Messaging Systems' },
  { icon: '🎬', label: 'Media & Content' },
  { icon: '🎮', label: 'Gaming Ecosystems' },
  { icon: '📊', label: 'Financial Intelligence' },
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-24 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .reveal      { opacity:0; transform:translateY(36px);  transition:opacity .7s ease,transform .7s ease; }
        .reveal-left { opacity:0; transform:translateX(-48px); transition:opacity .8s ease,transform .8s ease; }
        .reveal.visible, .reveal-left.visible { opacity:1; transform:none; }
        .d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}.d5{transition-delay:.5s}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        .float-card { animation: float 5s ease-in-out infinite; }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Image column */}
        <div className="reveal-left relative">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Venix team at work"
            className="h-[520px] w-full rounded-3xl object-cover"
          />

          {/* Floating stat card */}
          <div className="float-card absolute -bottom-7 -right-7 flex w-52 items-center gap-3 rounded-2xl bg-white p-5 shadow-2xl shadow-blue-900/15">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-100 text-xl">🚀</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-900/50">Platforms Live</p>
              <p className="font-['DM_Serif_Display',Georgia,serif] text-lg text-blue-900">6+ Products</p>
            </div>
          </div>

          {/* NCC badge */}
          <div className="absolute -left-5 top-7 rounded-2xl bg-blue-900 p-4 shadow-xl shadow-blue-900/30">
            <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400">NCC Licensed</p>
            <p className="font-['DM_Serif_Display',Georgia,serif] text-base text-white">VAS Operator</p>
          </div>
        </div>

        {/* Text column */}
        <div>
          <p className="reveal d1 mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-yellow-400 before:block before:h-[2px] before:w-7 before:bg-yellow-400 before:content-['']">
            Who We Are
          </p>
          <h2 className="reveal d2 mb-5 font-['DM_Serif_Display',Georgia,serif] text-4xl leading-[1.12] text-blue-900 lg:text-5xl">
            A Structured Digital Infrastructure Holding Company
          </h2>
          <p className="reveal d3 mb-4 text-[15px] font-light leading-relaxed text-blue-900/70">
            Founded to build secure telecom-integrated digital systems, Venix Partners Limited has evolved from a mobile VAS provider into a broader infrastructure enterprise — structured for regulatory clarity, platform-level risk isolation, and scalable expansion across Africa.
          </p>
          <p className="reveal d4 mb-8 text-[15px] font-light leading-relaxed text-blue-900/70">
            Our operations span six verticals, each engineered to deliver enterprise-grade reliability and compliance within Nigeria's rapidly growing digital economy.
          </p>

          <div className="reveal d5 grid grid-cols-2 gap-3">
            {pillars.map(p => (
              <div
                key={p.label}
                className="flex cursor-default items-center gap-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-100 p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/30"
              >
                <span className="text-xl">{p.icon}</span>
                <span className="text-[13px] font-semibold text-blue-900">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}