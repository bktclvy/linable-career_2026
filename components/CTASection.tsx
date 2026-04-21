import Link from "next/link";

interface CTASectionProps {
  title: string;
  sub: string;
  voices: string[];
  outerStyle?: React.CSSProperties;
  blockStyle?: React.CSSProperties;
}

export default function CTASection({ title, sub, voices, outerStyle, blockStyle }: CTASectionProps) {
  return (
    <section className="cta-section-outer" style={outerStyle}>
      <div className="container">
        <div className="cta-block reveal" style={blockStyle}>
          <h2 className="cta-title">{title}</h2>
          <p className="cta-sub">{sub}</p>
          <div className="cta-voices">
            {voices.map((v, i) => (
              <span key={i} className="cta-voice">{v}</span>
            ))}
          </div>
          <div className="cta-contact">
            <div className="cta-contact-grid">
              <div className="cta-contact-info">
                <strong>有限会社 LINABLEキャリア</strong>
                〒446-0072<br />
                愛知県安城市住吉町荒曽根1-245<br />
                アワーズビル2F
              </div>
              <div className="cta-contact-phone">
                <div className="label">TEL</div>
                <div className="tel">0566-93-1733</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 28, position: "relative" }}>
            <Link href="/contact" className="btn-primary">
              <span>お問い合わせフォームへ</span>
              <span className="arrow-icon">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
