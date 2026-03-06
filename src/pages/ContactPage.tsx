// ─── ContactPage.tsx ──────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

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

// ── S1: HERO + CONTACT DETAILS ────────────────────────────────────────────────
function S1Hero() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="relative overflow-hidden px-6 pb-24 pt-32 bg-blue-950">
      <style>{CSS}</style>

      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-blue-950/20" />
      </div>

      {/* Grid overlay */}
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
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />Structured Engagement · By Appointment
            </span>
            <h1 className="_r _d1 mb-6 text-5xl leading-[1.07] text-white lg:text-6xl" style={serif}>
              Let's Build<br /><em style={{ color: '#fde68a' }}>Something Together</em>
            </h1>
            <p className="_r _d2 mb-10 max-w-lg text-lg font-light leading-relaxed text-white/65">
              Venix Partners Limited welcomes structured enquiries from telecom operators, financial institutions, fintech platforms, enterprise organizations, and strategic partners.
            </p>

            {/* Contact details */}
            <div className="_r _d3 space-y-4">
              <a href="mailto:hello@venixpartners.com" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 transition-all group-hover:bg-yellow-400/25"><Mail size={16} /></div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/35">Email</p>
                  <p className="text-[15px] font-semibold text-white group-hover:text-yellow-300">hello@venixpartners.com</p>
                </div>
              </a>
              <a href="tel:+2348025934298" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 transition-all group-hover:bg-yellow-400/25"><Phone size={16} /></div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/35">Telephone</p>
                  <p className="text-[15px] font-semibold text-white group-hover:text-yellow-300">+234 802 593 4298</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-400"><Clock size={16} /></div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/35">Business Hours</p>
                  <p className="text-[15px] font-semibold text-white">Mon – Fri, 9:00 AM – 5:00 PM WAT</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/15 border border-yellow-400/30 text-yellow-400"><MapPin size={16} /></div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/35">Office</p>
                  <p className="text-[14px] font-medium text-white/80">35, Yesufu Sanusi Street, Off Adeniran Ogunsanya,<br />Surulere, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: floating info cards */}
          <div className="relative hidden lg:flex flex-col gap-4 items-end">
            <div className="_float rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 w-64 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/80">Open by Appointment</p>
              </div>
              <p className="text-xl text-white" style={serif}>Venix Partners Limited</p>
              <p className="text-[12px] text-white/45 mt-1">Surulere, Lagos · Nigeria</p>
            </div>

            <div className="rounded-2xl bg-blue-900/80 backdrop-blur-md border border-yellow-400/20 px-5 py-4 w-52 shadow-xl">
              <p className="text-[9px] font-bold uppercase tracking-widest text-yellow-400 mb-1">Response Time</p>
              <p className="text-base text-white" style={serif}>Within 1 Business Day</p>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 w-64 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/70 mb-3">Enquiry Channels</p>
              <div className="space-y-2">
                {['Enterprise & Institutional','Platform Partnerships','Media & PR','Compliance & Governance'].map(ch => (
                  <div key={ch} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-[12px] text-white/60">{ch}</span>
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

// ── S2: ENQUIRY TYPES ─────────────────────────────────────────────────────────
function S2EnquiryTypes() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const enquiries = [
    { icon:'🏢', title:'Enterprise & Institutional', subject:'Enterprise Infrastructure Inquiry', desc:'For telecom operators, financial institutions, fintech platforms, and enterprise organizations.', fields:['Organization name','Nature of business','Proposed scope of engagement','Expected transaction volume (if applicable)','Technical contact details','Regulatory considerations'] },
    { icon:'☁️', title:'Venix Cloud & API Integration', subject:'Venix Cloud Integration Request', desc:'For organizations seeking integration with Venix Cloud enterprise e-top-up and digital vending infrastructure.', fields:['Organization name','Integration objective','API use case','Estimated monthly transaction volume','Technical contact person','Deployment timeline'] },
    { icon:'💬', title:'Messaging & Communication', subject:'Enterprise Messaging Enquiry', desc:'For Mesaj platform enquiries relating to bulk SMS, transactional messaging, route stability, and messaging partnerships.', fields:['Expected message volume','Integration requirements','Technical contact details','Timeline'] },
    { icon:'🤝', title:'Platform Partnerships', subject:'Platform Partnership Request', desc:'For BingeBay content distribution, Turnaj gaming partnerships, FinSight collaboration, and CRBT deployments.', fields:['Partnership objectives','Relevant background','Platform of interest','Proposed collaboration model'] },
    { icon:'📰', title:'Media & Public Relations', subject:'Media Enquiry', desc:'For media interviews, industry commentary, or corporate statements.', fields:['Media organization','Nature of inquiry','Deadline (if applicable)','Contact details'] },
    { icon:'⚖️', title:'Compliance & Governance', subject:'Regulatory Communication', desc:'For regulatory or formal compliance-related correspondence reviewed in accordance with internal governance procedures.', fields:['Regulatory body or authority','Nature of correspondence','Reference numbers (if applicable)'] },
  ];
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section ref={ref} className="overflow-hidden bg-white px-6 py-24">
      <Container>
        <div className="mb-14 text-center">
          <Eyebrow>Enquiry Types</Eyebrow>
          <h2 className="_r _d1 mb-5 text-4xl leading-[1.1] text-blue-900 lg:text-[2.75rem]" style={serif}>Structured Engagement for Every Need</h2>
          <p className="_r _d2 mx-auto max-w-lg text-[15px] font-light leading-relaxed text-blue-900/65">All correspondence should be directed to <strong>hello@venixpartners.com</strong> with the relevant subject line indicated below.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {enquiries.map((e, i) => (
            <div key={e.title} className={`_r _d${Math.min(i+1,6)} rounded-2xl border border-blue-900/10 transition-all duration-200 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/8`}>
              <button className="flex w-full items-start gap-4 p-6 text-left" onClick={() => setExpanded(expanded === i ? null : i)}>
                <span className="text-2xl mt-0.5 shrink-0">{e.icon}</span>
                <div className="flex-1">
                  <p className="text-[15px] font-semibold text-blue-900 mb-1" style={serif}>{e.title}</p>
                  <p className="text-[13px] font-light text-blue-900/60">{e.desc}</p>
                </div>
                <span className={`shrink-0 text-blue-900/30 transition-transform duration-200 text-lg ${expanded === i ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              {expanded === i && (
                <div className="border-t border-blue-900/8 px-6 pb-6 pt-4">
                  <div className="mb-4 flex items-center gap-2 rounded-lg bg-yellow-400/10 border border-yellow-400/20 px-3 py-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-600">Subject Line:</span>
                    <span className="text-[12px] font-semibold text-blue-900">{e.subject}</span>
                  </div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-blue-900/40">Please Include:</p>
                  <ul className="space-y-1.5">{e.fields.map(f => (<li key={f} className="flex items-start gap-2 text-[13px] text-blue-900/65"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />{f}</li>))}</ul>
                  <a href={`mailto:hello@venixpartners.com?subject=${encodeURIComponent(e.subject)}`} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2.5 text-[12px] font-bold text-white transition-all hover:bg-blue-950">
                    Send This Enquiry <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ── S3: CONTACT FORM ──────────────────────────────────────────────────────────
function S3Form() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const [form, setForm] = useState({ name:'', org:'', email:'', type:'Enterprise Infrastructure Inquiry', message:'' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    const subject = encodeURIComponent(form.type);
    const body = encodeURIComponent(`Name: ${form.name}\nOrganization: ${form.org}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@venixpartners.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const types = ['Enterprise Infrastructure Inquiry','Venix Cloud Integration Request','Enterprise Messaging Enquiry','Platform Partnership Request','Media Enquiry','Regulatory Communication','General Enquiry'];

  const inputClass = (field: string) =>
    `w-full rounded-xl border px-4 py-3 text-[14px] text-blue-900 placeholder-blue-900/40 outline-none transition-all bg-white/90 focus:bg-white ${errors[field] ? 'border-red-400/60 focus:border-red-400' : 'border-white/40 focus:border-yellow-400'}`;

  return (
    <section ref={ref} className="relative overflow-hidden bg-blue-900 px-6 py-24">
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(251,191,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.04) 1px,transparent 1px)', backgroundSize:'56px 56px' }} />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Eyebrow light>Get in Touch</Eyebrow>
            <h2 className="_r _d1 mb-6 text-4xl leading-[1.1] text-yellow-100 lg:text-5xl" style={serif}>Start a Structured Conversation</h2>
            <p className="_r _d2 mb-8 text-[15px] font-light leading-relaxed text-white/60">Venix Partners Limited prioritizes disciplined, structured engagement with all stakeholders. As a regulated NCC VAS license holder, we maintain defined engagement procedures to ensure compliance, operational clarity, and responsible collaboration.</p>
            <div className="_r _d3 space-y-4">
              {[{ icon:'📅', text:'All meetings are by scheduled appointment only.' },{ icon:'🏢', text:'Physical visits to our Surulere office require prior confirmation via email.' },{ icon:'⏱️', text:'We review all enquiries and respond through the appropriate technical or commercial channel.' }].map(n => (
                <div key={n.text} className="flex items-start gap-3"><span className="text-lg mt-0.5">{n.icon}</span><span className="text-[14px] font-light text-white/65">{n.text}</span></div>
              ))}
            </div>
            <div className="_r _d4 mt-8 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-100 p-6">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-blue-900/55">General Enquiries</p>
              <a href="mailto:hello@venixpartners.com" className="flex items-center gap-2 text-lg font-semibold text-blue-900 hover:underline" style={serif}>hello@venixpartners.com <ExternalLink size={16} /></a>
              <p className="mt-1 text-[12px] text-blue-900/55">Subject line: <em>General Enquiry</em></p>
            </div>
          </div>
          <div className="_r _d2">
            {sent ? (
              <div className="flex h-full items-center justify-center rounded-3xl border border-yellow-400/20 bg-white/5 p-10 text-center">
                <div>
                  <span className="text-5xl block mb-4">✅</span>
                  <h3 className="text-2xl text-yellow-100 mb-3" style={serif}>Enquiry Initiated</h3>
                  <p className="text-[14px] text-white/60">Your email client should have opened. Please send the email to complete your enquiry.</p>
                  <button onClick={() => { setSent(false); setForm({ name:'', org:'', email:'', type:'Enterprise Infrastructure Inquiry', message:'' }); }} className="mt-6 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-blue-900 hover:bg-yellow-300">Send Another</button>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="mb-6 text-xl text-yellow-100" style={serif}>Send an Enquiry</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-white/40">Full Name *</label>
                      <input value={form.name} onChange={e => handleChange('name', e.target.value)} placeholder="Your name" autoComplete="name" className={inputClass('name')} />
                      {errors.name && <p className="mt-1 text-[11px] text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-white/40">Organization</label>
                      <input value={form.org} onChange={e => handleChange('org', e.target.value)} placeholder="Company name" autoComplete="organization" className={inputClass('org')} />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-white/40">Email Address *</label>
                    <input type="email" value={form.email} onChange={e => handleChange('email', e.target.value)} placeholder="you@company.com" autoComplete="email" className={inputClass('email')} />
                    {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-white/40">Enquiry Type</label>
                    <select value={form.type} onChange={e => handleChange('type', e.target.value)} className="w-full rounded-xl border border-white/40 bg-white/90 px-4 py-3 text-[14px] text-blue-900 outline-none transition-all focus:border-yellow-400 focus:bg-white">
                      {types.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-white/40">Message *</label>
                    <textarea value={form.message} onChange={e => handleChange('message', e.target.value)} rows={4} placeholder="Describe your engagement objectives, scope, and any relevant technical or regulatory context..." className={`${inputClass('message')} resize-none`} />
                    {errors.message && <p className="mt-1 text-[11px] text-red-400">{errors.message}</p>}
                  </div>
                  <button onClick={handleSubmit} className="w-full rounded-xl bg-yellow-400 py-3.5 text-[14px] font-bold text-blue-900 transition-all hover:bg-yellow-300 hover:-translate-y-0.5">Send Enquiry →</button>
                  <p className="text-center text-[11px] text-white/30">This will open your email client with the enquiry pre-filled.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S4: OFFICE + MAP ──────────────────────────────────────────────────────────
function S4Office() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="overflow-hidden px-6 py-24" style={{ background:'linear-gradient(135deg,#FBBF24 0%,#FEF3C7 100%)' }}>
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <Eyebrow>Our Office</Eyebrow>
            <h2 className="_r _d1 mb-5 text-4xl leading-[1.1] text-blue-900 lg:text-[2.75rem]" style={serif}>Visit Us in Surulere, Lagos</h2>
            <p className="_r _d2 mb-8 text-[15px] font-light leading-relaxed text-blue-900/70">All physical visits to our Surulere office location are strictly by prior appointment confirmation. Visitors are advised to confirm scheduling via email before arrival.</p>
            <div className="_r _d3 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-blue-900/10 bg-white/60 p-5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-yellow-500" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blue-900/45 mb-1">Registered Office</p>
                  <p className="text-[14px] font-medium leading-relaxed text-blue-900">35, Yesufu Sanusi Street<br />Off Adeniran Ogunsanya<br />Surulere, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a href="tel:+2348025934298" className="group flex items-center gap-3 rounded-xl border border-blue-900/10 bg-white/60 p-4 transition-all hover:border-yellow-400/40">
                  <Phone size={16} className="text-yellow-500 shrink-0" />
                  <div><p className="text-[10px] font-bold uppercase tracking-widest text-blue-900/40">Call</p><p className="text-[13px] font-semibold text-blue-900 group-hover:text-blue-700">+234 802 593 4298</p></div>
                </a>
                <a href="mailto:hello@venixpartners.com" className="group flex items-center gap-3 rounded-xl border border-blue-900/10 bg-white/60 p-4 transition-all hover:border-yellow-400/40">
                  <Mail size={16} className="text-yellow-500 shrink-0" />
                  <div><p className="text-[10px] font-bold uppercase tracking-widest text-blue-900/40">Email</p><p className="text-[13px] font-semibold text-blue-900 group-hover:text-blue-700 truncate">hello@venixpartners.com</p></div>
                </a>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-blue-900/10 bg-white/60 p-5">
                <Clock size={18} className="shrink-0 text-yellow-500" />
                <div>
                  <div className="flex items-center gap-2 mb-1"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span><p className="text-[11px] font-bold uppercase tracking-widest text-blue-900/45">Open Today</p></div>
                  <p className="text-[14px] font-medium text-blue-900">Monday – Friday · 9:00 AM – 5:00 PM WAT</p>
                  <p className="text-[12px] text-blue-900/50 mt-1">Meetings by scheduled appointment only</p>
                </div>
              </div>
            </div>
          </div>
          <div className="_rr relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/20">
            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Lagos Nigeria" className="h-[480px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-2xl text-white mb-1" style={serif}>Surulere, Lagos</p>
              <p className="text-[13px] font-light text-white/65 mb-4">Nigeria's Commercial Capital</p>
              <a href="https://maps.google.com/?q=Yesufu+Sanusi+Street+Surulere+Lagos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-[12px] font-bold text-blue-900 transition-all hover:bg-yellow-300">
                Open in Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ── S5: ENGAGEMENT PHILOSOPHY + CTA ──────────────────────────────────────────
function S5Philosophy() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  return (
    <section ref={ref} className="relative overflow-hidden bg-blue-900 px-6 py-24">
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(251,191,36,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.04) 1px,transparent 1px)', backgroundSize:'56px 56px' }} />
      <Container className="relative z-10 text-center">
        <Eyebrow light>Engagement Philosophy</Eyebrow>
        <h2 className="_r _d1 mx-auto mb-6 max-w-3xl text-4xl leading-[1.1] text-yellow-100 lg:text-5xl" style={serif}>Disciplined, Structured Engagement With All Stakeholders</h2>
        <p className="_r _d2 mx-auto mb-10 max-w-2xl text-[15px] font-light leading-relaxed text-white/60">As a regulated NCC VAS license holder operating within telecom-integrated infrastructure environments, we maintain defined engagement procedures to ensure compliance, operational clarity, and responsible collaboration.</p>
        <div className="_r _d3 flex flex-wrap justify-center gap-3 mb-12">
          {['Regulatory compliance','Operational clarity','Responsible collaboration','Structured documentation','Performance accountability'].map(p => (
            <span key={p} className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-[12px] font-semibold text-yellow-400">{p}</span>
          ))}
        </div>
        <div className="_r _d4 flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@venixpartners.com" className="rounded-xl bg-yellow-400 px-8 py-3.5 text-[15px] font-bold text-blue-900 shadow-lg shadow-yellow-400/20 transition-all hover:bg-yellow-300 hover:-translate-y-0.5">hello@venixpartners.com</a>
          <Link to="/services" className="rounded-xl border-2 border-white/20 px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:border-yellow-400/40 hover:text-yellow-400">View Our Services</Link>
        </div>
      </Container>
    </section>
  );
}

export default function ContactPage() {
  return <><S1Hero /><S2EnquiryTypes /><S3Form /><S4Office /><S5Philosophy /></>;
}