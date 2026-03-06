// EnterpriseServices.tsx
import { useEffect, useRef } from 'react';

const services = [
  { num:'01', icon:'🗂️', title:'Technical Project Management', desc:'End-to-end oversight of telecom integrations, fintech deployments, and multi-stakeholder technology initiatives — from scoping through delivery.', img:'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { num:'02', icon:'🧠', title:'IT Consultancy',               desc:'Strategic advisory on digital transformation, infrastructure modernization, telecom integration planning, and cloud architecture for enterprise clients.',  img:'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { num:'03', icon:'⚙️', title:'IT Managed Services',          desc:'Ongoing system monitoring, API performance management, server administration, security management, and infrastructure optimization.',                    img:'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const differentiators = ['Infrastructure ownership','Implementation expertise','Operational oversight','Long-term platform management'];

export default function EnterpriseServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-blue-900 px-6 py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .reveal { opacity:0; transform:translateY(32px); transition:opacity .7s ease,transform .7s ease; }
        .reveal.visible { opacity:1; transform:none; }
        .d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}
        .es-card-img { transition: opacity .3s; }
        .es-card:hover .es-card-img { opacity:.75 !important; }
        .es-card::before { content:''; position:absolute; inset-x:0; top:0; height:2px; background:linear-gradient(90deg,#FBBF24,transparent); opacity:0; transition:opacity .25s; }
        .es-card:hover::before { opacity:1; }
      `}</style>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(251,191,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.04) 1px,transparent 1px)',backgroundSize:'56px 56px'}} />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="reveal mb-3 text-[11px] font-bold uppercase tracking-[.12em] text-yellow-400">Enterprise & Professional Services</p>
          <h2 className="reveal d1 font-['DM_Serif_Display',Georgia,serif] text-4xl text-yellow-100 lg:text-5xl">Beyond Platform Ownership</h2>
          <p className="reveal d2 mx-auto mt-4 max-w-xl text-[15px] font-light leading-relaxed text-yellow-100/60">
            Venix delivers structured enterprise technology services designed to support institutional digital transformation — combining ownership, expertise, and operations under one roof.
          </p>
        </div>

        {/* Cards */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.num} className={`es-card reveal d${i + 1} relative overflow-hidden rounded-2xl border border-yellow-400/12 bg-white/3 transition-all duration-250 hover:-translate-y-1.5 hover:border-yellow-400/30 hover:bg-white/7`}>
              <img className="es-card-img h-48 w-full object-cover opacity-55" src={s.img} alt={s.title} />
              <div className="p-7">
                <p className="mb-3 font-['DM_Serif_Display',Georgia,serif] text-[13px] text-yellow-400/65">{s.num}</p>
                <span className="mb-3 block text-3xl">{s.icon}</span>
                <h3 className="mb-3 text-[17px] font-semibold leading-snug text-yellow-100">{s.title}</h3>
                <p className="text-[14px] font-light leading-relaxed text-yellow-100/60">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiator strip */}
        <div className="reveal flex flex-wrap items-center gap-8 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-100 p-8 lg:p-10">
          <p className="font-['DM_Serif_Display',Georgia,serif] text-lg leading-snug text-blue-900 lg:max-w-[180px]">Unlike advisory-only firms, Venix combines:</p>
          <div className="flex flex-1 flex-wrap gap-3">
            {differentiators.map(d => (
              <span key={d} className="flex items-center gap-1.5 rounded-full border border-blue-900/15 bg-blue-900/10 px-4 py-2 text-[13px] font-semibold text-blue-900 before:content-['✓']">{d}</span>
            ))}
          </div>
          <button className="rounded-xl bg-blue-900 px-7 py-3 text-[14px] font-semibold text-yellow-100 shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-0.5 hover:bg-blue-950 whitespace-nowrap">
            Work With Us →
          </button>
        </div>

      </div>
    </section>
  );
}