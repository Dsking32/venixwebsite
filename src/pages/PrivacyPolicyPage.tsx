// ─── PrivacyPolicyPage.tsx ────────────────────────────────────────────────────
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
  ._d1{transition-delay:.05s} ._d2{transition-delay:.1s} ._d3{transition-delay:.15s} ._d4{transition-delay:.2s}
`;
const serif = { fontFamily:"'DM Serif Display',Georgia,serif" } as const;
const sans  = { fontFamily:"'DM Sans',sans-serif" } as const;

const sections = [
  { id:'overview',      label:'Overview' },
  { id:'collection',    label:'Data We Collect' },
  { id:'use',           label:'How We Use Data' },
  { id:'sharing',       label:'Data Sharing' },
  { id:'retention',     label:'Data Retention' },
  { id:'security',      label:'Security' },
  { id:'rights',        label:'Your Rights' },
  { id:'cookies',       label:'Cookies' },
  { id:'children',      label:'Children' },
  { id:'changes',       label:'Policy Changes' },
  { id:'contact',       label:'Contact Us' },
];

function SideNav({ active }: { active: string }) {
  return (
    <nav className="sticky top-28 hidden xl:block w-56 shrink-0">
      <p style={{ ...sans, fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 16 }}>On This Page</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            style={{
              ...sans,
              fontSize: 13,
              fontWeight: active === s.id ? 600 : 400,
              color: active === s.id ? '#1E3A8A' : '#6B7280',
              padding: '6px 12px',
              borderRadius: 8,
              borderLeft: `2px solid ${active === s.id ? '#FBBF24' : 'transparent'}`,
              textDecoration: 'none',
              transition: 'all 0.15s',
              background: active === s.id ? 'rgba(251,191,36,0.08)' : 'transparent',
            }}
          >
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
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'rgba(30,58,138,0.04)', border: '1px solid rgba(30,58,138,0.1)', borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
      <p style={{ ...sans, fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: '#1E3A8A' }}>{children}</p>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const [active, setActive] = useState('overview');

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
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,58,138,0.6) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(251,191,36,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.03) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(to bottom, transparent, rgba(251,191,36,.6) 30%, rgba(251,191,36,.6) 70%, transparent)' }} />
        <Container className="relative z-10">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(251,191,36,0.1)', border: '1.5px solid rgba(251,191,36,0.3)', borderRadius: 100, padding: '6px 16px', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FBBF24', marginBottom: 24 }}>
            🔒 Legal · Privacy
          </span>
          <h1 style={{ ...serif, fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#fff', lineHeight: 1.06, marginBottom: 16, maxWidth: 640 }}>
            Privacy Policy
          </h1>
          <p style={{ ...sans, fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 520, lineHeight: 1.8, marginBottom: 24 }}>
            This Privacy Policy explains how Venix Partners Limited collects, uses, stores, and protects personal information obtained through our platforms, services, and digital interactions.
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <span style={{ ...sans, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)' }}>Effective Date: January 1, 2025</span>
            <span style={{ ...sans, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)' }}>Last Updated: March 2025</span>
            <span style={{ ...sans, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)' }}>Version 1.0</span>
          </div>
        </Container>
      </div>

      {/* ── BODY ── */}
      <Container>
        <div style={{ display: 'flex', gap: 64, paddingTop: 64, paddingBottom: 100, alignItems: 'flex-start' }}>
          <SideNav active={active} />

          <div style={{ flex: 1, minWidth: 0 }}>

            <Section id="overview" title="Overview">
              <InfoBox>
                Venix Partners Limited ("Venix", "we", "our", or "us") is incorporated and operates within Nigeria under applicable regulatory frameworks including those administered by the Nigerian Communications Commission (NCC). We are committed to protecting your privacy and processing personal data responsibly, transparently, and in compliance with applicable Nigerian data protection laws including the Nigeria Data Protection Regulation (NDPR) and the Nigeria Data Protection Act (NDPA).
              </InfoBox>
              <P>This policy applies to all individuals who interact with our platforms, services, websites, APIs, or enterprise systems — including clients, partners, platform users, job applicants, and website visitors.</P>
              <P>By accessing or using any Venix service, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of our services and contact us at <strong>hello@venixpartners.com</strong>.</P>
            </Section>

            <Section id="collection" title="Data We Collect">
              <P>We collect personal data only where it is necessary for a legitimate purpose related to our services. The categories of data we may collect include:</P>
              <p style={{ ...sans, fontSize: 13, fontWeight: 700, color: '#1E3A8A', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Identity & Contact Information</p>
              <UL items={['Full name, business name, and role/title','Email address, telephone number, and physical address','Government-issued ID details (where required for compliance verification)','NIN, BVN, or other regulatory identifiers (where applicable and legally required)']} />
              <p style={{ ...sans, fontSize: 13, fontWeight: 700, color: '#1E3A8A', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Technical & Usage Data</p>
              <UL items={['IP addresses and device identifiers','Browser type, operating system, and access timestamps','API usage logs, transaction reference numbers, and system interaction data','Cookies and similar tracking technologies (see Cookies section)']} />
              <p style={{ ...sans, fontSize: 13, fontWeight: 700, color: '#1E3A8A', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Transaction & Financial Data</p>
              <UL items={['Transactional records for airtime, data, utilities, and digital services','Payment references and billing data processed through authorized channels','Account and subscription details where applicable']} />
              <p style={{ ...sans, fontSize: 13, fontWeight: 700, color: '#1E3A8A', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Employment & Application Data</p>
              <UL items={['CV/resume, cover letters, and employment history (for job applicants)','References and professional background information','Communications exchanged during recruitment processes']} />
            </Section>

            <Section id="use" title="How We Use Your Data">
              <P>We process personal data only for specific, legitimate, and disclosed purposes. We do not use personal data for purposes incompatible with those stated at the time of collection.</P>
              <UL items={[
                'To deliver, manage, and improve our digital platforms and enterprise services',
                'To process and fulfill transactions and service requests',
                'To comply with NCC licensing conditions and other applicable regulatory obligations',
                'To communicate with clients, partners, and users regarding service matters',
                'To conduct identity verification and anti-fraud checks where legally required',
                'To evaluate and process employment applications',
                'To send service-related notices, updates, and technical alerts',
                'To maintain records for audit, compliance, and governance purposes',
                'To analyse service performance and improve system reliability and security',
              ]} />
              <InfoBox>We do not sell personal data to third parties. We do not use personal data for unsolicited marketing without explicit consent. Venix products and services are ad-free and we do not engage in targeted advertising.</InfoBox>
            </Section>

            <Section id="sharing" title="Data Sharing & Disclosure">
              <P>We may share personal data with third parties only under the following circumstances:</P>
              <UL items={[
                'Telecom network partners (MTN, Airtel, Glo, 9mobile) — solely for the purpose of fulfilling telecom-integrated transactions and maintaining compliant network access',
                'Regulated payment processors and financial institutions — where required for transaction completion or compliance reporting',
                'Technology infrastructure providers — cloud hosting, API gateway providers, and system management partners operating under data processing agreements',
                'Regulatory authorities and law enforcement — where required under applicable Nigerian law, court order, or NCC directive',
                'Professional advisors — legal, audit, and compliance professionals bound by confidentiality obligations',
                'Successor entities — in the event of a corporate restructuring, merger, or acquisition',
              ]} />
              <P>All third-party processors engaged by Venix are required to maintain data protection standards consistent with applicable Nigerian data protection law. We do not share data with international parties unless adequate protection mechanisms are in place.</P>
            </Section>

            <Section id="retention" title="Data Retention">
              <P>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law or regulatory obligation.</P>
              <UL items={[
                'Transactional records: minimum 7 years (in compliance with Nigerian financial recordkeeping requirements)',
                'Client and partner data: duration of the commercial relationship plus 5 years',
                'Job applicant data: 6 months following the conclusion of the recruitment process (or longer with explicit consent)',
                'System logs and API access records: 12 months, unless extended for security or compliance investigation purposes',
                'Marketing communications consent records: duration of consent plus 2 years',
              ]} />
              <P>Upon expiry of the applicable retention period, personal data is securely deleted or anonymised in accordance with our internal data lifecycle procedures.</P>
            </Section>

            <Section id="security" title="Security Measures">
              <P>Venix implements technical and organisational measures to protect personal data against unauthorised access, loss, alteration, or disclosure. Our security practices include:</P>
              <UL items={[
                'Firewall protections and IP whitelisting for API and system access',
                'Encryption of data in transit using industry-standard TLS protocols',
                'Access controls with role-based permissions and authentication requirements',
                'Regular internal security reviews and infrastructure audits',
                'Incident response procedures for data breach detection and notification',
                'Secure server environments with managed hosting infrastructure',
              ]} />
              <InfoBox>While we implement robust security practices, no system is entirely immune to risk. We encourage users to report any suspected security concerns to us immediately at hello@venixpartners.com.</InfoBox>
            </Section>

            <Section id="rights" title="Your Rights">
              <P>Under the Nigeria Data Protection Act (NDPA) and the NDPR, individuals whose personal data we process have the following rights:</P>
              <UL items={[
                'Right of Access — to request a copy of personal data we hold about you',
                'Right to Rectification — to request correction of inaccurate or incomplete data',
                'Right to Erasure — to request deletion of personal data, subject to legal retention obligations',
                'Right to Restriction — to request that we limit the processing of your data in certain circumstances',
                'Right to Data Portability — to receive your data in a structured, commonly used format',
                'Right to Object — to object to processing based on legitimate interest or for direct marketing',
                'Right to Withdraw Consent — where processing is based on consent, you may withdraw it at any time',
              ]} />
              <P>To exercise any of these rights, please contact our Data Protection Officer at <strong>hello@venixpartners.com</strong> with the subject line "Data Subject Request". We will respond within 30 days in accordance with applicable law.</P>
            </Section>

            <Section id="cookies" title="Cookies & Tracking Technologies">
              <P>Our digital platforms and websites may use cookies and similar technologies to enhance user experience, analyse traffic, and maintain session state. Categories of cookies we use include:</P>
              <UL items={[
                'Strictly Necessary Cookies — required for platform functionality and security',
                'Analytical/Performance Cookies — used to understand how users interact with our platforms (anonymised)',
                'Functional Cookies — to remember user preferences and session settings',
              ]} />
              <P>We do not use third-party advertising or tracking cookies. You may configure your browser to refuse or delete cookies, though this may affect platform functionality. Where required by law, we obtain consent before placing non-essential cookies.</P>
            </Section>

            <Section id="children" title="Children's Privacy">
              <P>Our services are designed exclusively for business and enterprise use. We do not knowingly collect personal data from individuals under the age of 18. If we become aware that personal data has been collected from a minor, we will take immediate steps to delete it. If you believe we have inadvertently collected data from a minor, please contact us immediately.</P>
            </Section>

            <Section id="changes" title="Changes to This Policy">
              <P>We may update this Privacy Policy from time to time to reflect changes in our services, regulatory requirements, or operational practices. When material changes are made, we will:</P>
              <UL items={[
                'Update the "Last Updated" date at the top of this policy',
                'Post the revised policy on our website with a version number',
                'Notify active enterprise clients and platform users where practically feasible',
              ]} />
              <P>Your continued use of our services following notification of changes constitutes acceptance of the revised policy. We recommend reviewing this policy periodically.</P>
            </Section>

            <Section id="contact" title="Contact Us">
              <P>For any privacy-related queries, data subject requests, or to report a concern, please contact:</P>
              <div style={{ background: 'linear-gradient(135deg, #1E3A8A, #1e3a8a)', borderRadius: 16, padding: '28px 32px', marginTop: 8 }}>
                <p style={{ ...serif, fontSize: '1.2rem', color: '#fde68a', marginBottom: 12 }}>Venix Partners Limited</p>
                <p style={{ ...sans, fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                  Data Protection Officer<br />
                  35, Yesufu Sanusi Street, Off Adeniran Ogunsanya<br />
                  Surulere, Lagos, Nigeria<br /><br />
                  <a href="mailto:hello@venixpartners.com" style={{ color: '#FBBF24', fontWeight: 500 }}>hello@venixpartners.com</a><br />
                  Subject line: <em style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Enquiry / Data Subject Request</em>
                </p>
              </div>
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(30,58,138,0.1)', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link to="/terms" style={{ ...sans, fontSize: 13, fontWeight: 600, color: '#1E3A8A', textDecoration: 'none' }}>Terms of Use →</Link>
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