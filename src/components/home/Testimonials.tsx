// ContactPreview.jsx — Venix Partners Limited
// Mission statement + Contact CTA section

export default function ContactPreview() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #FBBF24 0%, #FEF3C7 100%)",
      padding: "100px 40px",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .cp-blob {
          position: absolute; border-radius: 50%;
          background: rgba(30,58,138,0.06);
          filter: blur(80px); pointer-events: none;
        }
        .cp-wrap { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

        /* Mission strip */
        .cp-mission {
          text-align: center; padding-bottom: 80px; margin-bottom: 80px;
          border-bottom: 1px solid rgba(30,58,138,0.12);
        }
        .cp-mission-eyebrow {
          font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em;
          color: #1E3A8A; opacity: 0.55; margin-bottom: 24px;
        }
        .cp-mission-quote {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.5rem, 4vw, 2.8rem); color: #1E3A8A;
          line-height: 1.3; max-width: 800px; margin: 0 auto 32px;
          font-style: italic;
        }
        .cp-mission-quote::before { content: '\u201C'; }
        .cp-mission-quote::after  { content: '\u201D'; }

        .cp-verticals {
          display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;
          margin-bottom: 0;
        }
        .cp-vertical {
          background: rgba(30,58,138,0.08); border: 1px solid rgba(30,58,138,0.15);
          border-radius: 100px; padding: 7px 18px;
          font-size: 13px; font-weight: 500; color: #1E3A8A;
        }

        /* Contact grid */
        .cp-contact { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: center; }
        @media (max-width: 900px) { .cp-contact { grid-template-columns: 1fr; gap: 40px; } }

        .cp-contact-heading {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem); color: #1E3A8A; margin: 0 0 16px;
        }
        .cp-contact-sub { font-size: 16px; color: #1E3A8A; opacity: 0.7; line-height: 1.75; margin: 0 0 36px; font-weight: 300; }

        .cp-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .cp-btn-primary {
          background: #1E3A8A; color: #fff;
          padding: 15px 32px; border-radius: 10px; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(30,58,138,0.25);
        }
        .cp-btn-primary:hover { background: #163070; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(30,58,138,0.35); }
        .cp-btn-ghost {
          background: transparent; color: #1E3A8A;
          padding: 15px 32px; border-radius: 10px; border: 2px solid rgba(30,58,138,0.3);
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.2s;
        }
        .cp-btn-ghost:hover { border-color: #1E3A8A; background: rgba(30,58,138,0.05); transform: translateY(-2px); }

        /* Contact card */
        .cp-card {
          background: #1E3A8A; border-radius: 20px; padding: 36px;
          color: #FEF3C7;
        }
        .cp-card-label {
          font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          color: #FBBF24; margin-bottom: 20px;
        }
        .cp-card-company {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 20px; margin-bottom: 20px; color: #FEF3C7;
        }
        .cp-divider { height: 1px; background: rgba(254,243,199,0.1); margin-bottom: 20px; }
        .cp-detail {
          display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px;
        }
        .cp-detail-icon { font-size: 16px; flex-shrink: 0; margin-top: 2px; }
        .cp-detail-text { font-size: 14px; color: rgba(254,243,199,0.8); line-height: 1.6; font-weight: 300; }
        .cp-detail-text a { color: #FBBF24; text-decoration: none; font-weight: 500; }
        .cp-detail-text a:hover { text-decoration: underline; }
      `}</style>

      <div className="cp-blob" style={{ width: 600, height: 600, top: -200, left: -200 }} />
      <div className="cp-blob" style={{ width: 400, height: 400, bottom: -100, right: -100 }} />

      <div className="cp-wrap">
        {/* Mission */}
        <div className="cp-mission">
          <p className="cp-mission-eyebrow">Our Mission</p>
          <p className="cp-mission-quote">
            To become a leading African mobile digital infrastructure company powering
            secure transactions, digital access, and connected services across emerging markets.
          </p>
          <div className="cp-verticals">
            {["Telecommunications", "Digital Payments", "Enterprise Messaging", "Media Distribution", "Interactive Gaming", "Financial Intelligence"].map((v) => (
              <span className="cp-vertical" key={v}>{v}</span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="cp-contact">
          <div>
            <h2 className="cp-contact-heading">Ready to Build on Africa's Digital Infrastructure?</h2>
            <p className="cp-contact-sub">
              Whether you're a financial institution, fintech operator, enterprise client, or
              strategic partner — Venix has the regulated infrastructure, technical depth, and
              network integrations to power your growth.
            </p>
            <div className="cp-actions">
              <button className="cp-btn-primary">Partner With Venix</button>
              <button className="cp-btn-ghost">hello@venixpartners.com</button>
            </div>
          </div>

          {/* Contact card */}
          <div className="cp-card">
            <p className="cp-card-label">Get In Touch</p>
            <p className="cp-card-company">Venix Partners Limited</p>
            <div className="cp-divider" />
            <div className="cp-detail">
              <span className="cp-detail-icon">📍</span>
              <p className="cp-detail-text">
                35, Yesufu Sanusi Street<br />
                Off Adeniran Ogunsanya<br />
                Surulere, Lagos, Nigeria
              </p>
            </div>
            <div className="cp-detail">
              <span className="cp-detail-icon">✉️</span>
              <p className="cp-detail-text">
                <a href="mailto:hello@venixpartners.com">hello@venixpartners.com</a>
              </p>
            </div>
            <div className="cp-detail">
              <span className="cp-detail-icon">📞</span>
              <p className="cp-detail-text">
                <a href="tel:+2348025934298">+234 802 593 4298</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}