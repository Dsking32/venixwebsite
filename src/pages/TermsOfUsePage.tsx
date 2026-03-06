// ─── TermsOfUsePage.tsx ───────────────────────────────────────────────────────
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';

function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('_vis', e.isIntersecting)),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('._r').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  ._r { opacity:0; transform:translateY(20px); transition:opacity .65s ease,transform .65s ease; }
  ._r._vis { opacity:1; transform:none; }
  ._d1{transition-delay:.05s} ._d2{transition-delay:.1s}
`;
const serif = { fontFamily:"'DM Serif Display',Georgia,serif" } as const;
const sans  = { fontFamily:"'DM Sans',sans-serif" } as const;

const sections = [
  { id:'acceptance',    label:'Acceptance of Terms' },
  { id:'services',      label:'Description of Services' },
  { id:'eligibility',   label:'Eligibility' },
  { id:'access',        label:'Platform Access' },
  { id:'conduct',       label:'Acceptable Use' },
  { id:'ip',            label:'Intellectual Property' },
  { id:'liability',     label:'Limitation of Liability' },
  { id:'indemnity',     label:'Indemnification' },
  { id:'termination',   label:'Termination' },
  { id:'governing',     label:'Governing Law' },
  { id:'disputes',      label:'Dispute Resolution' },
  { id:'misc',          label:'Miscellaneous' },
  { id:'contact',       label:'Contact' },
];

function SideNav({ active }: { active: string }) {
  return (
    <nav className="sticky top-28 hidden xl:block w-56 shrink-0">
      <p style={{ ...sans, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 16 }}>On This Page</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`} style={{ ...sans, fontSize: 13, fontWeight: active === s.id ? 600 : 400, color: active === s.id ? '#1E3A8A' : '#6B7280', padding: '6px 12px', borderRadius: 8, borderLeft: `2px solid ${active === s.id ? '#FBBF24' : 'transparent'}`, textDecoration: 'none', transition: 'all 0.15s', background: active === s.id ? 'rgba(251,191,36,0.08)' : 'transparent' }}>
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref as any);
  return (
    <div ref={ref} id={id} style={{ marginBottom: 56, scrollMarginTop: 100 }}>
      <div className="_r" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <span style={{ display: 'block', height: 2, width: 24, background: '#FBBF24', flexShrink: 0 }} />
        <h2 style={{ ...serif, fontSize: '1.5rem', color: '#1E3A8A', lineHeight: 1.2 }}>{title}</h2>
      </div>
      <div className="_r _d1">{children}</div>
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ ...sans, fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: '#374151', marginBottom: 16 }}>{children}</p>;
}
function UL({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: '0 0 16px', padding: 0, listStyle: 'none' }}>
      {items.map(item => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
          <span style={{ marginTop: 8, height: 6, width: 6, borderRadius: '50%', background: '#FBBF24', flexShrink: 0 }} />
          <span style={{ ...sans, fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: '#374151' }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
      <p style={{ ...sans, fontSize: 14, fontWeight: 400, lineHeight: 1.75, color: '#1E3A8A' }}>{children}</p>
    </div>
  );
}
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'rgba(30,58,138,0.04)', border: '1px solid rgba(30,58,138,0.1)', borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
      <p style={{ ...sans, fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: '#1E3A8A' }}>{children}</p>
    </div>
  );
}

export default function TermsOfUsePage() {
  const [active, setActive] = useState('acceptance');

  useEffect(() => {
    const handler = () => {
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) { setActive(s.id); break; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div style={{ ...sans, minHeight: '100vh', background: '#fff' }}>
      <style>{CSS}</style>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-blue-950" style={{ paddingTop: 128, paddingBottom: 64, paddingLeft: 24, paddingRight: 24 }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,58,138,0.6) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(251,191,36,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.03) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(to bottom, transparent, rgba(251,191,36,.6) 30%, rgba(251,191,36,.6) 70%, transparent)' }} />
        <Container className="relative z-10">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(251,191,36,0.1)', border: '1.5px solid rgba(251,191,36,0.3)', borderRadius: 100, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 24 }}>
            📄 Legal · Terms
          </span>
          <h1 style={{ ...serif, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fff', lineHeight: 1.06, marginBottom: 16, maxWidth: 640 }}>
            Terms of Use
          </h1>
          <p style={{ ...sans, fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 560, lineHeight: 1.8, marginBottom: 24 }}>
            These Terms of Use govern your access to and use of all platforms, services, APIs, and digital products operated by Venix Partners Limited. Please read these terms carefully before using any of our services.
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span style={{ ...sans, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)' }}>Effective Date: January 1, 2025</span>
            <span style={{ ...sans, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)' }}>Last Updated: March 2025</span>
          </div>
        </Container>
      </div>

      {/* ── BODY ── */}
      <Container>
        <div style={{ display: 'flex', gap: 64, paddingTop: 64, paddingBottom: 100, alignItems: 'flex-start' }}>
          <SideNav active={active} />
          <div style={{ flex: 1, minWidth: 0 }}>

            <Section id="acceptance" title="Acceptance of Terms">
              <WarningBox>By accessing or using any platform, service, API, or system operated by Venix Partners Limited, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, you must immediately discontinue use of all Venix services.</WarningBox>
              <P>These Terms constitute a legally binding agreement between you (or your organisation) and Venix Partners Limited ("Venix", "we", "us"). These Terms apply to all users including enterprise clients, platform integrators, API consumers, and website visitors.</P>
              <P>We reserve the right to update these Terms at any time. Continued use of our services following notification of changes constitutes acceptance of the revised Terms.</P>
            </Section>

            <Section id="services" title="Description of Services">
              <P>Venix Partners Limited is a Nigerian telecom-integrated digital infrastructure company operating as an NCC-licensed Value Added Service (VAS) operator. Our services include but are not limited to:</P>
              <UL items={[
                'Venix Cloud — enterprise e-top-up, airtime distribution, and digital service aggregation',
                'Mesaj — enterprise bulk SMS and transactional messaging infrastructure',
                'BingeBay — mobile-first media streaming and content distribution',
                'Turnaj — skill-based digital gaming and interactive competition platforms',
                'FinSight — financial intelligence and digital analytics services',
                'Technical Project Management, IT Consultancy, and Managed IT Services',
                'API integrations and enterprise infrastructure solutions',
              ]} />
              <P>All services are subject to applicable NCC regulations, licensing conditions, and the operational framework of the relevant platform. Service availability may vary and is subject to change without prior notice.</P>
            </Section>

            <Section id="eligibility" title="Eligibility & Access">
              <P>Use of Venix services is restricted to:</P>
              <UL items={[
                'Registered businesses and corporate entities operating lawfully within Nigeria or other jurisdictions we serve',
                'Individuals who are at least 18 years of age and legally capable of entering binding agreements',
                'Authorized representatives acting on behalf of eligible organisations',
              ]} />
              <P>Venix reserves the right to verify eligibility, request documentation, and deny or revoke access at its sole discretion. Services designed for business use are not available to individual consumers except where explicitly stated.</P>
            </Section>

            <Section id="access" title="Platform Access & Account Security">
              <P>Where access credentials (API keys, account logins, or integration tokens) are issued to you or your organisation:</P>
              <UL items={[
                'You are solely responsible for maintaining the confidentiality and security of your credentials',
                'You must immediately notify us of any unauthorised access, suspected breach, or credential compromise',
                'You may not share, transfer, or sublicense access credentials without our prior written consent',
                'All activity conducted through your credentials is your responsibility',
                'We reserve the right to suspend access immediately upon suspicion of misuse or security breach',
              ]} />
              <InfoBox>API access is governed by additional technical documentation and usage agreements provided at the time of integration. Usage limits, rate limits, and SLA terms are specified in your enterprise agreement.</InfoBox>
            </Section>

            <Section id="conduct" title="Acceptable Use Policy">
              <P>By using our services, you agree that you will not:</P>
              <UL items={[
                'Use our platforms for any unlawful, fraudulent, or deceptive purpose',
                'Attempt to gain unauthorised access to any system, network, or data',
                'Transmit spam, unsolicited messages, or communications that violate applicable laws',
                'Reverse engineer, decompile, disassemble, or attempt to derive source code from our systems',
                'Use our infrastructure to distribute malware, phishing content, or harmful code',
                'Violate NCC regulations or any applicable telecommunications law',
                'Use services in a manner that disproportionately burdens our infrastructure',
                'Impersonate Venix, our staff, or any other person or entity',
                'Facilitate, enable, or assist in any of the above activities',
              ]} />
              <P>Violation of this Acceptable Use Policy may result in immediate suspension or termination of access without liability to Venix, and may be reported to relevant authorities where applicable.</P>
            </Section>

            <Section id="ip" title="Intellectual Property">
              <P>All intellectual property rights in and relating to Venix platforms, systems, software, APIs, documentation, branding, and content are and remain the exclusive property of Venix Partners Limited or its licensors.</P>
              <UL items={[
                'You are granted a limited, non-exclusive, non-transferable licence to access and use our services for your authorised business purposes',
                'You may not copy, reproduce, modify, distribute, or exploit any part of our systems or content without express written consent',
                'The Venix name, logo, platform names (Venix Cloud, Mesaj, BingeBay, Turnaj, FinSight), and associated marks are trademarks of Venix Partners Limited',
                'Any feedback, suggestions, or ideas you provide to us may be used by us without restriction or compensation',
              ]} />
            </Section>

            <Section id="liability" title="Limitation of Liability">
              <WarningBox>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE NIGERIAN LAW, VENIX PARTNERS LIMITED SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE OUR SERVICES.</WarningBox>
              <P>Our total aggregate liability to you for any claim arising from these Terms or our services shall not exceed the amounts paid by you to Venix in the three (3) months immediately preceding the event giving rise to the claim.</P>
              <P>We do not warrant that our services will be uninterrupted, error-free, or free from security vulnerabilities. Services are provided on an "as available" basis subject to our published SLA commitments where applicable.</P>
            </Section>

            <Section id="indemnity" title="Indemnification">
              <P>You agree to indemnify, defend, and hold harmless Venix Partners Limited, its directors, officers, employees, agents, and partners from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising from:</P>
              <UL items={[
                'Your use of our services in violation of these Terms',
                'Your violation of any applicable law or third-party rights',
                'Your breach of any representations or warranties made under these Terms',
                'Any content or data you transmit through our platforms',
              ]} />
            </Section>

            <Section id="termination" title="Termination">
              <P>Either party may terminate access to Venix services by providing written notice. Venix reserves the right to immediately suspend or terminate access without notice where:</P>
              <UL items={[
                'There is a material breach of these Terms',
                'Continued access poses a security or compliance risk',
                'Required by regulatory authority or court order',
                'There is non-payment of agreed fees',
                'There is evidence of fraudulent or unlawful activity',
              ]} />
              <P>Upon termination, all licences granted under these Terms cease immediately. Provisions relating to intellectual property, limitation of liability, indemnification, and governing law survive termination.</P>
            </Section>

            <Section id="governing" title="Governing Law">
              <P>These Terms of Use are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. By using our services, you submit to the jurisdiction of Nigerian courts for any dispute arising from these Terms.</P>
              <P>Where our services are accessed from outside Nigeria, you remain responsible for compliance with all applicable local laws and regulations in your jurisdiction.</P>
            </Section>

            <Section id="disputes" title="Dispute Resolution">
              <P>In the event of a dispute arising from or in connection with these Terms, the parties agree to first attempt resolution through good-faith negotiation within 30 days of written notice of the dispute.</P>
              <P>If the dispute cannot be resolved through negotiation, the parties agree to submit to binding arbitration in Lagos, Nigeria under rules mutually agreed upon, or in the absence of agreement, under the Arbitration and Conciliation Act (Cap A18, Laws of the Federation of Nigeria). Nothing in this clause prevents either party from seeking urgent injunctive relief from a competent court.</P>
            </Section>

            <Section id="misc" title="Miscellaneous">
              <UL items={[
                'Entire Agreement — These Terms, together with any applicable enterprise agreement, constitute the entire agreement between you and Venix regarding your use of our services.',
                'Severability — If any provision of these Terms is found unenforceable, the remaining provisions continue in full force.',
                'Waiver — Failure to enforce any right under these Terms shall not constitute a waiver of that right.',
                'Assignment — You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights freely.',
                'Force Majeure — Venix shall not be liable for delays or failures in performance resulting from events outside our reasonable control including natural disasters, regulatory action, or telecommunications outages.',
              ]} />
            </Section>

            <Section id="contact" title="Contact">
              <P>For queries relating to these Terms of Use, please contact:</P>
              <div style={{ background: 'linear-gradient(135deg, #1E3A8A, #1e3a8a)', borderRadius: 16, padding: '28px 32px', marginTop: 8 }}>
                <p style={{ ...serif, fontSize: '1.2rem', color: '#fde68a', marginBottom: 12 }}>Venix Partners Limited</p>
                <p style={{ ...sans, fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Legal & Compliance<br />
                  35, Yesufu Sanusi Street, Off Adeniran Ogunsanya<br />
                  Surulere, Lagos, Nigeria<br /><br />
                  <a href="mailto:hello@venixpartners.com" style={{ color: '#FBBF24', fontWeight: 500 }}>hello@venixpartners.com</a><br />
                  Subject line: <em style={{ color: 'rgba(255,255,255,0.5)' }}>Terms of Use Enquiry</em>
                </p>
              </div>
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(30,58,138,0.1)', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/privacy" style={{ ...sans, fontSize: 13, fontWeight: 600, color: '#1E3A8A', textDecoration: 'none' }}>Privacy Policy →</Link>
                <Link to="/compliance" style={{ ...sans, fontSize: 13, fontWeight: 600, color: '#1E3A8A', textDecoration: 'none' }}>Compliance →</Link>
                <Link to="/contact" style={{ ...sans, fontSize: 13, fontWeight: 600, color: '#1E3A8A', textDecoration: 'none' }}>Contact Us →</Link>
              </div>
            </Section>

          </div>
        </div>
      </Container>
    </div>
  );
}