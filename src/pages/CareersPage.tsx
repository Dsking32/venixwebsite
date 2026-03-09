// CareersPage.tsx — Venix Partners Limited

export default function CareersPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes cp-fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cp-blob {
          0%,100% { transform: translateY(0) scale(1); }
          50%     { transform: translateY(-20px) scale(1.04); }
        }
        @keyframes cp-pulse {
          0%,100% { opacity: 1; }
          50%     { opacity: 0.4; }
        }

        .cp-serif { font-family: 'DM Serif Display', Georgia, serif; }
        .cp-sans  { font-family: 'DM Sans', sans-serif; }

        .cp-hero {
          background: #0f172a;
          min-height: 62vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 140px 40px 80px;
        }

        .cp-hero-bg-img {
          position: absolute; inset: 0;
          object-fit: cover; width: 100%; height: 100%;
        }
        .cp-hero-overlay-r {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(15,23,42,0.96) 0%, rgba(15,23,42,0.82) 50%, rgba(15,23,42,0.5) 100%);
        }
        .cp-hero-overlay-t {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 60%);
        }

        .cp-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: cp-blob ease-in-out infinite;
        }

        .cp-dot-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(251,191,36,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,.03) 1px,transparent 1px);
          background-size: 56px 56px;
          -webkit-mask-image: linear-gradient(to right, black 0%, transparent 60%);
          mask-image: linear-gradient(to right, black 0%, transparent 60%);
        }

        .cp-fade-1 { animation: cp-fadeUp 0.7s 0.1s ease both; }
        .cp-fade-2 { animation: cp-fadeUp 0.7s 0.2s ease both; }
        .cp-fade-3 { animation: cp-fadeUp 0.7s 0.3s ease both; }
        .cp-fade-4 { animation: cp-fadeUp 0.7s 0.4s ease both; }
        .cp-fade-5 { animation: cp-fadeUp 0.7s 0.5s ease both; }
        .cp-fade-6 { animation: cp-fadeUp 0.7s 0.6s ease both; }

        .cp-notice-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(251,191,36,0.1);
          border: 1.5px solid rgba(251,191,36,0.3);
          border-radius: 100px;
          padding: 7px 18px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FBBF24;
          margin-bottom: 28px;
        }

        .cp-notice-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #FBBF24;
          animation: cp-pulse 2s infinite;
        }

        .cp-status-card {
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid rgba(30,58,138,0.1);
          padding: 40px 44px;
          box-shadow: 0 20px 60px rgba(30,58,138,0.1);
          max-width: 680px;
          margin: 0 auto;
        }

        .cp-status-icon {
          width: 64px; height: 64px; border-radius: 16px;
          background: linear-gradient(135deg, #FEF3C7, #FBBF24);
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
          margin-bottom: 24px;
          box-shadow: 0 8px 24px rgba(251,191,36,0.3);
        }

        .cp-perks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-top: 48px;
        }

        .cp-perk-card {
          background: #fff;
          border: 1.5px solid rgba(30,58,138,0.08);
          border-radius: 16px;
          padding: 28px 28px;
          transition: all 0.2s ease;
        }
        .cp-perk-card:hover {
          border-color: rgba(251,191,36,0.5);
          box-shadow: 0 8px 32px rgba(251,191,36,0.12);
          transform: translateY(-3px);
        }

        .cp-perk-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(135deg, #FEF3C7, #FDE68A);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; margin-bottom: 16px;
        }

        .cp-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(30,58,138,0.1) 30%, rgba(30,58,138,0.1) 70%, transparent);
          margin: 56px 0;
        }

        .cp-notify-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1E3A8A;
          color: #fff;
          padding: 14px 28px;
          border-radius: 10px;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .cp-notify-btn:hover {
          background: #163070;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30,58,138,0.3);
        }

        .cp-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .cp-value-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px 20px;
          background: #FAFAFA;
          border-radius: 12px;
          border: 1px solid rgba(30,58,138,0.06);
        }

        .cp-value-bullet {
          width: 8px; height: 8px; border-radius: 50%;
          background: #FBBF24;
          flex-shrink: 0;
          margin-top: 6px;
        }

        @media (max-width: 640px) {
          .cp-hero { padding: 120px 24px 64px; }
          .cp-status-card { padding: 28px 24px; }
          .cp-hero-title { font-size: clamp(2.4rem, 8vw, 3rem) !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="cp-hero">
        <img className="cp-hero-bg-img" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <div className="cp-hero-overlay-r" />
        <div className="cp-hero-overlay-t" />
        <div className="cp-dot-grid" />
        <div style={{ left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(to bottom, transparent, rgba(251,191,36,.6) 30%, rgba(251,191,36,.6) 70%, transparent)", position: "absolute" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div className="cp-notice-badge cp-fade-1">
            <span className="cp-notice-dot" />
            Careers at Venix
          </div>

          <h1
            className="cp-serif cp-hero-title cp-fade-2"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 1.06, color: "#fff", marginBottom: 20, maxWidth: 640 }}
          >
            Build the future of<br />
            <em style={{ color: "#fde68a" }}>digital Africa</em><br />
            with us.
          </h1>

          <p
            className="cp-sans cp-fade-3"
            style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.65)", maxWidth: 520, marginBottom: 0 }}
          >
            We are a team of engineers, strategists, and builders working at the intersection of telecom, fintech, and digital infrastructure — shaping Africa's transaction economy.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px 100px" }}>

        {/* Status card — not accepting applications */}
        <div className="cp-fade-4" style={{ display: "flex", justifyContent: "center", marginBottom: 72 }}>
          <div className="cp-status-card">
            <div className="cp-status-icon">📋</div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(239,68,68,0.08)", border: "1.5px solid rgba(239,68,68,0.2)", borderRadius: 100, padding: "4px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#DC2626" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#DC2626", animation: "cp-pulse 2s infinite" }} />
                Applications Closed
              </span>
            </div>

            <h2 className="cp-serif" style={{ fontSize: "1.9rem", color: "#1E3A8A", marginBottom: 14, lineHeight: 1.2 }}>
              We're not currently accepting applications.
            </h2>

            <p className="cp-sans" style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: "#374151", marginBottom: 28 }}>
              Thank you for your interest in joining Venix Partners Limited. We are not actively hiring at this time, but we are always growing  when new roles open up, we will post them here first.
            </p>

            <p className="cp-sans" style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: "#6B7280", marginBottom: 32 }}>
              If you're passionate about building digital infrastructure for Africa and would like us to keep your profile on file, feel free to reach out to us at{" "}
              <a href="mailto:hr@venixpartners.com" style={{ color: "#1E3A8A", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(30,58,138,0.3)" }}>
                hr@venixpartners.com
              </a>
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a href="mailto:hr@venixpartners.com" className="cp-notify-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Send Your Profile
              </a>
              <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(30,58,138,0.06)", color: "#1E3A8A", padding: "14px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}>
                Contact Us
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="cp-divider" />

        {/* Why Venix */}
        <div className="cp-fade-5">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FBBF24", marginBottom: 12 }}>Why Venix</p>
            <h2 className="cp-serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1E3A8A", lineHeight: 1.15 }}>
              A place where your work<br /><em>actually matters.</em>
            </h2>
          </div>

          <div className="cp-perks-grid">
            {[
              { icon: "🌍", title: "Continental Impact",    desc: "Your work reaches millions of Nigerians and shapes the digital infrastructure of an entire continent."                },
              { icon: "⚡", title: "Six Platform Verticals", desc: "Work across telecom, fintech, media, gaming, and AI a rare breadth of technology in a single company."          },
              { icon: "🏛️", title: "NCC Regulated",         desc: "We operate within Nigeria's regulatory framework, giving you stability, compliance, and long term career security." },
              { icon: "🤝", title: "Enterprise Networks",   desc: "Direct access to Nigeria's four major telecom operators  MTN, Airtel, Glo, and 9mobile."                          },
              { icon: "📈", title: "Growth Focused",        desc: "We invest in our people. Every team member has a clear path to leadership as Venix expands across Africa."         },
              { icon: "🔒", title: "Purposeful Work",       desc: "We're not building apps for fun  we're building the financial and digital rails that power everyday life."         },
            ].map((perk) => (
              <div key={perk.title} className="cp-perk-card">
                <div className="cp-perk-icon">{perk.icon}</div>
                <h3 className="cp-sans" style={{ fontSize: 15, fontWeight: 700, color: "#1E3A8A", marginBottom: 8 }}>{perk.title}</h3>
                <p className="cp-sans"   style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: "#6B7280" }}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-divider" />

        {/* Values */}
        <div className="cp-fade-6">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FBBF24", marginBottom: 12 }}>Our Values</p>
            <h2 className="cp-serif" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#1E3A8A", lineHeight: 1.2 }}>
              What we stand for
            </h2>
          </div>

          <div className="cp-values-grid">
            {[
              { title: "Integrity First",       desc: "We do the right thing, always  with clients, partners, and each other."            },
              { title: "Enterprise Excellence", desc: "We hold ourselves to the highest standards of quality, compliance, and delivery."    },
              { title: "African Ambition",      desc: "We think continent scale. Every decision we make is in service of a bigger vision."  },
              { title: "Collaborative Spirit",  desc: "We win together. The best ideas come from diverse minds working toward one goal."    },
              { title: "Builder Mentality",     desc: "We don't wait for permission. We identify problems, own solutions, and execute."     },
              { title: "Long-Term Thinking",    desc: "We build for decades, not quarters. Sustainability and discipline guide our growth." },
            ].map((v) => (
              <div key={v.title} className="cp-value-item">
                <div className="cp-value-bullet" style={{ marginTop: 7 }} />
                <div>
                  <p className="cp-sans" style={{ fontSize: 13.5, fontWeight: 700, color: "#1E3A8A", marginBottom: 4 }}>{v.title}</p>
                  <p className="cp-sans" style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: "#6B7280" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cp-divider" />

        {/* Bottom CTA */}
        <div style={{ textAlign: "center" }}>
          <p className="cp-sans" style={{ fontSize: 13, fontWeight: 400, color: "#9CA3AF", marginBottom: 8 }}>
            Check back regularly — opportunities will be posted here when available.
          </p>
          <p className="cp-sans" style={{ fontSize: 13, fontWeight: 300, color: "#9CA3AF" }}>
            Venix Partners Limited · Lagos, Nigeria ·{" "}
            <a href="mailto:hr@venixpartners.com" style={{ color: "#1E3A8A", fontWeight: 500, textDecoration: "none" }}>hr@venixpartners.com</a>
          </p>
        </div>

      </div>
    </div>
  );
}