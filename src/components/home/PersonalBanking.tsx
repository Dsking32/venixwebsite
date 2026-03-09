// InfrastructureEcosystem.tsx
import { useState, useEffect, useRef } from 'react';

const layers = [
  { num:'01', icon:'📡', subtitle:'Venix Cloud',          title:'Core Telecom Infrastructure',    desc:'Enterprise E-top up and digital service aggregation via Venix Cloud built for high-volume airtime and data distribution across all major Nigerian networks.', tags:['Airtime Vending','Data Provisioning','REST API','IP Whitelisting'], img:'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num:'02', icon:'💳', subtitle:'Billmagic',            title:'Fintech & Payment Distribution',  desc:'Structured utility vending and digital payment workflows built for financial institutions, fintech operators, and enterprise clients.',                           tags:['Utility Vending','Transaction Routing','Enterprise API','Compliance'],  img:'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num:'03', icon:'💬', subtitle:'Mesaj',                title:'Enterprise Messaging',            desc:'Transactional and promotional communication infrastructure at telecom scale powering high-volume bulk messaging and enterprise notification systems.',           tags:['Bulk SMS','Transactional','Promotional','Multi-Network'],                img:'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num:'04', icon:'🎬', subtitle:'Bingebay',             title:'Media & Content Platforms',       desc:'Mobile-first streaming and content monetization systems designed for Africa\'s growing digital media consumption landscape.',                                    tags:['Streaming','Content Delivery','Monetization','Mobile-First'],           img:'https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num:'05', icon:'🎮', subtitle:'Turnaj',               title:'Gaming & Interactive Platforms',  desc:'Skill based digital competitions and engagement platforms powering interactive gaming ecosystems across Nigerian and African markets.',                          tags:['Skill Gaming','Tournaments','Digital Competitions','Engagement'],       img:'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { num:'06', icon:'📊', subtitle:'Finsight',             title:'Data & Intelligence Services',    desc:'Financial insights and digital sector analytics enabling data driven decision-making for enterprise clients in Nigeria\'s dynamic economy.',                    tags:['Financial Data','Analytics','Market Intelligence','Reporting'],         img:'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

export default function InfrastructureEcosystem() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cur = layers[active];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-100 px-6 py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
        .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease,transform .7s ease; }
        .reveal.visible { opacity:1; transform:none; }
        .d1{transition-delay:.1s}.d2{transition-delay:.2s}
        .ie-panel-img { transition: opacity .4s ease; }
      `}</style>

      {/* Grid texture */}
      

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="reveal mb-3 text-[11px] font-bold uppercase tracking-[.12em] text-blue-900/60">Our Infrastructure Ecosystem</p>
          <h2 className="reveal d1 font-['DM_Serif_Display',Georgia,serif] text-4xl text-blue-900 lg:text-5xl">Six Integrated Platform Layers</h2>
          <p className="reveal d2 mx-auto mt-4 max-w-lg text-[15px] font-light leading-relaxed text-blue-900/65">A diversified architecture built for resilience, regulatory clarity, and Africa wide scalability.</p>
        </div>

        {/* Interactive panel */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">

          {/* Tab list */}
          <div className="flex flex-col gap-1">
            {layers.map((layer, i) => (
              <button
                key={layer.num}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-200 border-none cursor-pointer ${active === i ? 'bg-blue-900' : 'bg-transparent hover:bg-blue-900/8'}`}
              >
                <span className={`font-['DM_Serif_Display',Georgia,serif] text-xl ${active === i ? 'text-yellow-400' : 'text-blue-900/30'}`}>{layer.num}</span>
                <div>
                  <p className={`text-[13px] font-semibold ${active === i ? 'text-yellow-100' : 'text-blue-900'}`}>{layer.title}</p>
                  <p className={`text-[11px] mt-0.5 ${active === i ? 'text-yellow-400' : 'text-blue-900/45'}`}>{layer.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-900">
            <img
              key={active}
              src={cur.img}
              alt={cur.title}
              className="ie-panel-img h-56 w-full object-cover opacity-40"
            />
            <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-transparent to-blue-900/80" />

            <div className="relative p-8">
              {/* Big bg number */}
              <span className="pointer-events-none absolute right-6 top-0 font-['DM_Serif_Display',Georgia,serif] text-8xl leading-none text-yellow-400/10">{cur.num}</span>

              <span className="mb-3 block text-4xl">{cur.icon}</span>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-yellow-400">{cur.subtitle}</p>
              <h3 className="mb-3 font-['DM_Serif_Display',Georgia,serif] text-2xl leading-snug text-yellow-100">{cur.title}</h3>
              <p className="mb-6 text-[14px] font-light leading-relaxed text-white/65">{cur.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cur.tags.map(t => (
                  <span key={t} className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-yellow-400">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}