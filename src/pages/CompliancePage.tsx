// ─── CompliancePage.tsx ───────────────────────────────────────────────────────
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
  ._d1{transition-delay:.05s} ._d2{transition-delay:.1s} ._d3{transition-delay:.15s}
  @keyframes _float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  ._float { animation:_float 4s ease-in-out infinite; }
`;
const serif = { fontFamily:"'DM Serif Display',Georgia,serif" } as const;
const sans  = { fontFamily:"'DM Sans',sans-serif" } as const;

const sections = [
  { id:'framework',   label:'Compliance Framework' },
  { id:'ncc',         label:'NCC Licensing' },
  { id:'data',        label:'Data Protection' },
  { id:'aml',         label:'AML & Financial' },
  { id:'governance',  label:'Corporate Governance' },
  { id:'vendor',      label:'Vendor Due Diligence' },
  { id:'security',    label:'Information Security' },
  { id:'reporting',   label:'Reporting & Whistleblowing' },
  { id:'contact',     label:'Compliance Contact' },
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

function Section({ id, title, badge, children }: { id: string; title: string; badge?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref as any);
  return (
    <div ref={ref} id={id} style={{ marginBottom: 56, scrollMarginTop: 100 }}>
      <div className="_r" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <span style={{ display: 'block', height: 2, width: 24, background: '#FBBF24', flexShrink: 0 }} />
        <h2 style={{ ...serif, fontSize: '1.5rem', color: '#1E3A8A', lineHeight: 1.2 }}>{title}</h2>
        {badge && <span style={{ ...sans, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)', color: '#1E3A8A', borderRadius: 100, padding: '3px 10px' }}>{badge}</span>}
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
function InfoBox({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: 'rgba(30,58,138,0.03)', border: '1px solid rgba(30,58,138,0.1)', borderRadius: 14, padding: '20px 24px', marginBottom: 20, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{icon}</span>
      <div>
        <p style={{ ...sans, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1E3A8A', marginBottom: 6 }}>{title}</p>
        <p style={{ ...sans, fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: '#374151' }}>{children}</p>
      </div>
    </div>
  );
}

export default function CompliancePage() {
  const [active, setActive] = useState('framework');

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

  const pillars = [
    { icon: '🏛️', title: 'NCC Licensed', sub: 'VAS Operator' },
    { icon: '🔐', title: 'NDPR/NDPA', sub: 'Data Protection' },
    { icon: '⚖️', title: 'CAMA 2020', sub: 'Corporate Law' },
    { icon: '🛡️', title: 'AML/CFT', sub: 'Financial Crime' },
  ];

  return (
    <div style={{ ...sans, minHeight: '100vh', background: '#fff' }}>
      <style>{CSS}</style>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-blue-950" style={{ paddingTop: 128, paddingBottom: 72, paddingLeft: 24, paddingRight: 24 }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,58,138,0.6) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(251,191,36,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.03) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(to bottom, transparent, rgba(251,191,36,.6) 30%, rgba(251,191,36,.6) 70%, transparent)' }} />
        <Container className="relative z-10">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(251,191,36,0.1)', border: '1.5px solid rgba(251,191,36,0.3)', borderRadius: 100, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 24 }}>
            ⚖️ Legal · Compliance
          </span>
          <h1 style={{ ...serif, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fff', lineHeight: 1.06, marginBottom: 16, maxWidth: 640 }}>
            Compliance &<br /><em style={{ color: '#fde68a' }}>Regulatory Framework</em>
          </h1>
          <p style={{ ...sans, fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
            Venix Partners Limited operates within a structured compliance and governance framework anchored in Nigerian telecommunications law, data protection regulation, corporate governance standards, and responsible enterprise infrastructure practices.
          </p>

          {/* Compliance pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, maxWidth: 700 }}>
            {pillars.map((p, i) => (
              <div key={p.title} className="_float" style={{ animationDelay: `${i * 0.4}s`, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '16px 18px' }}>
                <span style={{ fontSize: 22, display: 'block', marginBottom: 8 }}>{p.icon}</span>
                <p style={{ ...serif, fontSize: '0.95rem', color: '#fff', marginBottom: 2 }}>{p.title}</p>
                <p style={{ ...sans, fontSize: 11, fontWeight: 500, color: 'rgba(251,191,36,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── BODY ── */}
      <Container>
        <div style={{ display: 'flex', gap: 64, paddingTop: 64, paddingBottom: 100, alignItems: 'flex-start' }}>
          <SideNav active={active} />
          <div style={{ flex: 1, minWidth: 0 }}>

            <Section id="framework" title="Compliance Framework Overview">
              <P>Venix Partners Limited is committed to operating with the highest standards of regulatory compliance, corporate governance, and institutional accountability. Our compliance framework is embedded across all business units, platform operations, and third-party engagement processes.</P>
              <P>Our compliance posture is designed to meet and exceed the requirements of the Nigerian Communications Commission (NCC), the Nigeria Data Protection Commission (NDPC), and other applicable regulatory bodies — ensuring that our infrastructure, partnerships, and enterprise services are delivered responsibly and within the law.</P>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 20 }}>
                {[
                  { icon: '📋', t: 'Policy-Driven', d: 'All operations governed by documented internal policies and procedures' },
                  { icon: '🔄', t: 'Continuously Reviewed', d: 'Compliance posture reviewed against regulatory updates and operational changes' },
                  { icon: '👥', t: 'Board Oversight', d: 'Governance and compliance matters reported at executive and board level' },
                  { icon: '📊', t: 'Audit-Ready', d: 'Documentation and records maintained for regulatory review at all times' },
                ].map(card => (
                  <div key={card.t} style={{ background: 'rgba(30,58,138,0.03)', border: '1px solid rgba(30,58,138,0.08)', borderRadius: 12, padding: '16px 18px' }}>
                    <span style={{ fontSize: 20, display: 'block', marginBottom: 8 }}>{card.icon}</span>
                    <p style={{ ...sans, fontSize: 13, fontWeight: 600, color: '#1E3A8A', marginBottom: 4 }}>{card.t}</p>
                    <p style={{ ...sans, fontSize: 12, fontWeight: 300, color: '#6B7280', lineHeight: 1.6 }}>{card.d}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="ncc" title="NCC Licensing & Telecom Regulatory Compliance" badge="Active">
              <InfoBox icon="🏛️" title="NCC VAS License">
                Venix Partners Limited holds a Value Added Service (VAS) License issued by the Nigerian Communications Commission (NCC), enabling the company to legally deploy telecom-integrated digital platforms and maintain structured connectivity with licensed network operators in Nigeria.
              </InfoBox>
              <P>Our telecom compliance obligations include:</P>
              <UL items={[
                'Adherence to all conditions attached to our NCC VAS operating licence',
                'Maintenance of approved technical interconnection standards with MTN, Airtel, Glo, and 9mobile through accredited VAS aggregator channels',
                'Compliance with NCC Consumer Code of Practice, Service Level Agreements, and approved rate structures',
                'Timely submission of regulatory reports, usage data, and compliance certifications as required by the NCC',
                'Immediate response to NCC directives, investigations, or enforcement notices',
                'Prohibition of any service that violates NCC content standards or applicable broadcasting guidelines',
              ]} />
              <P>Venix does not operate any telecom infrastructure outside the scope of its NCC licensing. All network integrations are conducted through properly accredited intermediary channels in compliance with applicable interconnection frameworks.</P>
            </Section>

            <Section id="data" title="Data Protection Compliance" badge="NDPA / NDPR">
              <InfoBox icon="🔐" title="Nigeria Data Protection Act (NDPA) 2023">
                Venix is committed to full compliance with the Nigeria Data Protection Act 2023 and the Nigeria Data Protection Regulation (NDPR) administered by the Nigeria Data Protection Commission (NDPC). All personal data processing activities are conducted on a lawful basis with appropriate safeguards in place.
              </InfoBox>
              <P>Our data protection compliance programme includes:</P>
              <UL items={[
                'Maintenance of a comprehensive data inventory and processing register',
                'Data Protection Impact Assessments (DPIAs) for high-risk processing activities',
                'Appointment of a Data Protection Officer (DPO) with responsibility for compliance oversight',
                'Data subject rights procedures including access, rectification, erasure, and portability',
                'Documented data processor agreements with all third-party vendors',
                'Personal data breach response procedures with regulatory notification obligations',
                'Staff training on data protection responsibilities and handling requirements',
                'Regular internal audits of data processing activities and security controls',
              ]} />
              <P>For data protection enquiries or to exercise your rights under the NDPA, please contact our Data Protection Officer at <strong>hello@venixpartners.com</strong> with the subject line "Data Subject Request".</P>
            </Section>

            <Section id="aml" title="Anti-Money Laundering & Financial Crime Compliance">
              <P>Where Venix services involve financial transaction processing, payment facilitation, or utility distribution, we implement Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) measures consistent with applicable Nigerian financial regulations and FATF recommendations.</P>
              <UL items={[
                'Customer Due Diligence (CDD) and Know Your Customer (KYC) procedures for enterprise onboarding',
                'Enhanced Due Diligence (EDD) for higher-risk clients, jurisdictions, or transaction profiles',
                'Transaction monitoring protocols for detection of suspicious patterns or anomalies',
                'Screening against applicable sanctions lists and PEP databases',
                'Prohibition of services to sanctioned individuals, entities, or jurisdictions',
                'Internal escalation and Suspicious Activity Reporting (SAR) procedures',
                'Staff training on AML/CFT obligations and red flag indicators',
              ]} />
              <P>Venix does not facilitate transactions that it knows or suspects to be proceeds of crime, and cooperates fully with competent authorities in any lawful investigation or regulatory enquiry.</P>
            </Section>

            <Section id="governance" title="Corporate Governance">
              <P>Venix Partners Limited is incorporated under the Companies and Allied Matters Act (CAMA) 2020 and operates under structured corporate governance principles designed to ensure accountability, transparency, and long-term institutional integrity.</P>
              <UL items={[
                'Board-level oversight of strategic, operational, and compliance decisions',
                'Defined delegation of authority and management accountability structures',
                'Regular board and management reporting on financial performance, risk, and compliance',
                'Documented conflict of interest policies applicable to all directors and key personnel',
                'Annual accounts prepared and filed in compliance with Nigerian corporate law',
                'Related-party transaction policies to ensure arm\'s-length dealing',
                'Whistleblower and ethics reporting mechanisms (see Reporting section)',
              ]} />
            </Section>

            <Section id="vendor" title="Vendor & Partner Due Diligence">
              <P>All third-party vendors, technology partners, payment processors, and network aggregators engaged by Venix are subject to a structured due diligence process prior to onboarding and on an ongoing basis.</P>
              <UL items={[
                'Verification of legal incorporation, licensing, and regulatory standing',
                'Assessment of data protection and information security practices',
                'Review of financial stability and operational track record',
                'Anti-bribery and anti-corruption declarations',
                'Execution of data processing agreements where personal data is involved',
                'Contractual compliance obligations including audit rights',
                'Periodic review and re-certification of active vendor relationships',
              ]} />
              <P>Venix does not maintain business relationships with entities that are sanctioned, unlicensed for their relevant activities, or known to be involved in fraudulent or criminal conduct.</P>
            </Section>

            <Section id="security" title="Information Security Compliance">
              <P>Our information security programme is designed to protect the confidentiality, integrity, and availability of all data and systems. Key security controls include:</P>
              <UL items={[
                'Firewall protections and IP whitelisting for all API and enterprise system access',
                'TLS/SSL encryption for all data in transit',
                'Role-based access control (RBAC) with minimum-necessary access principles',
                'Regular vulnerability assessments and penetration testing',
                'Incident detection, response, and recovery procedures',
                'Secure SDLC (Software Development Life Cycle) practices for platform development',
                'Business continuity and disaster recovery planning',
                'Employee security awareness training and acceptable use policies',
              ]} />
              <P>Security incidents are managed through our internal incident response team. Where a breach involves personal data, we follow statutory notification obligations under the NDPA to inform the NDPC and affected data subjects within required timescales.</P>
            </Section>

            <Section id="reporting" title="Compliance Reporting & Whistleblowing">
              <P>Venix Partners Limited maintains a speak-up culture that encourages the reporting of compliance concerns, suspected misconduct, and regulatory breaches without fear of retaliation.</P>
              <InfoBox icon="📢" title="How to Report">
                Compliance concerns, suspected regulatory violations, data breaches, fraud, or other misconduct may be reported to our compliance team at hello@venixpartners.com with the subject line "Compliance Report". Reports may be made confidentially and will be reviewed by senior management with appropriate discretion.
              </InfoBox>
              <P>Our whistleblowing process includes:</P>
              <UL items={[
                'Confidential intake of concerns by designated compliance personnel',
                'Impartial investigation of all substantive reports',
                'Non-retaliation protection for good-faith reporters',
                'Escalation to board level for material compliance issues',
                'Regulatory disclosure where legally required',
                'Feedback to reporters on investigation outcomes where permissible',
              ]} />
            </Section>

            <Section id="contact" title="Compliance Contact">
              <P>For compliance-related enquiries, regulatory correspondence, or to report a concern, please contact us at:</P>
              <div style={{ background: 'linear-gradient(135deg, #1E3A8A, #1e3a8a)', borderRadius: 16, padding: '28px 32px', marginTop: 8 }}>
                <p style={{ ...serif, fontSize: '1.2rem', color: '#fde68a', marginBottom: 12 }}>Venix Partners Limited</p>
                <p style={{ ...sans, fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Compliance & Regulatory Affairs<br />
                  35, Yesufu Sanusi Street, Off Adeniran Ogunsanya<br />
                  Surulere, Lagos, Nigeria<br /><br />
                  <a href="mailto:hello@venixpartners.com" style={{ color: '#FBBF24', fontWeight: 500 }}>hello@venixpartners.com</a><br />
                  Subject line: <em style={{ color: 'rgba(255,255,255,0.5)' }}>Regulatory Communication / Compliance Enquiry</em>
                </p>
              </div>

              {/* Quick links to other legal pages */}
              <div style={{ marginTop: 32, padding: '24px 28px', background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: 14 }}>
                <p style={{ ...sans, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#1E3A8A', marginBottom: 16 }}>Related Legal Documents</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {[
                    { label: 'Privacy Policy', path: '/privacy' },
                    { label: 'Terms of Use', path: '/terms' },
                    { label: 'Contact Us', path: '/contact' },
                  ].map(l => (
                    <Link key={l.path} to={l.path} style={{ ...sans, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#1E3A8A', textDecoration: 'none', background: '#fff', border: '1px solid rgba(30,58,138,0.15)', borderRadius: 8, padding: '8px 16px', transition: 'all 0.15s' }}>
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </Section>

          </div>
        </div>
      </Container>
    </div>
  );
}