import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LINABLE Kit I | 有限会社LINABLEキャリア",
  description: "今のラインを止めない、変えない。ポンと置くだけの『脱・目視 AI検査機』LINABLE Kit I（リネーブル キット ワン）。製造業・福祉事業所向けAI搭載IoT検査システム。100万円〜（税抜）",
};

export default function KitPage() {
  return (
    <>
      <section className="kit-hero">
        <div className="hero-grid" style={{ zIndex: 1 }} />
        <div className="hero-orb" style={{ top: "10%", right: "5%", width: 400, height: 400, background: "var(--turquoise)", opacity: 0.35 }} />
        <div className="hero-orb" style={{ bottom: "20%", left: "8%", width: 350, height: 350, background: "var(--sage)", opacity: 0.25, animationDelay: "-5s" }} />
        <div className="kit-hero-inner">
          <div className="kit-hero-sub">現場の&quot;あたりまえ&quot;を、変える。</div>
          <h1>
            今のラインを止めない、変えない。<br />
            <span className="accent">ポンと置くだけの『脱・目視 AI検査機』</span>
          </h1>
          <div className="product-name">
            LINABLE Kit I（リネーブル キット ワン）<br />
            ── AI搭載 IoT検査システム
          </div>
          <div className="kit-hero-price">
            <span className="number">100</span><span className="unit">万円〜（税抜）</span>
          </div>
          <div className="two-gates">
            <Link href="/kit/mfg" className="gate-card manufacturing">
              <div className="gate-icon">🏭</div>
              <div className="gate-title">製造業の皆さまへ</div>
              <div className="gate-copy">脱・目視、脱・属人化。<br />見落としゼロと利益率改善を、最小投資で。</div>
              <div className="gate-link">製造業向け詳細を見る <span>→</span></div>
            </Link>
            <Link href="/kit/welfare" className="gate-card welfare">
              <div className="gate-icon">🤝</div>
              <div className="gate-title">就労継続支援A型・B型の皆さまへ</div>
              <div className="gate-copy">利用者さんの「できた！」を増やし、<br />高単価な仕事でしっかり稼ぐ。</div>
              <div className="gate-link">福祉事業所向け詳細を見る <span>→</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <div className="section-label">Your Challenges</div>
          <h2 className="section-title">検査工程の「当たり前」が、<br />利益を圧迫していませんか？</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">👁️</div>
              <div className="problem-title">見落としへの恐怖</div>
              <div className="problem-desc">長時間作業による集中力低下とヒューマンエラー。</div>
              <div className="problem-voice">「いつクレームになるか不安…」</div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🧠</div>
              <div className="problem-title">属人化と技術継承の壁</div>
              <div className="problem-desc">良否判定がベテランの「勘」に依存。</div>
              <div className="problem-voice">「新人に教えられない…」</div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💰</div>
              <div className="problem-title">自動化への「予算の壁」</div>
              <div className="problem-desc">大手メーカー製は高額で費用対効果が合わない。</div>
              <div className="problem-voice">「大手製は高すぎる…」</div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📉</div>
              <div className="problem-title">利益が出にくい現場</div>
              <div className="problem-desc">検査ラインの重い人件費。</div>
              <div className="problem-voice">「頑張っているのに儲からない…」</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gray-bg)" }}>
        <div className="container reveal">
          <div style={{ textAlign: "center" }}>
            <div className="section-label center">Concept</div>
            <h2 className="section-title center">「過剰」を捨てて、「最適」を。</h2>
            <p className="section-lead">
              現場が本当に必要とする機能だけに絞り込んだ<br />「身の丈に合ったDX」
            </p>
          </div>
          <div className="before-after">
            <div className="ba-card ba-before">
              <div className="ba-label">従来</div>
              <p style={{ fontSize: 16, lineHeight: 1.8, fontWeight: 700, color: "var(--gray-medium)" }}>多機能でハイスペックな、<br />「高額な汎用検査機」は、<br />私たちの選択肢ではない。</p>
            </div>
            <div className="ba-arrow">→</div>
            <div className="ba-card ba-after">
              <div className="ba-label">LINABLE KIT I</div>
              <p style={{ fontSize: 17, lineHeight: 1.7, fontWeight: 700, color: "var(--navy)" }}>ベテランの「目」を、<br />AIに継がせる。</p>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: 40, fontFamily: "'Kaisei Decol', serif", fontSize: 20, color: "var(--sage-deep)", fontWeight: 700 }}>
            「今までのやり方を変えなくていい。AIをそこに置くだけでいい。」
          </p>
        </div>
      </section>

      <section className="cta-section-outer">
        <div className="container">
          <div className="cta-block reveal">
            <h2 className="cta-title">まずは、ご相談から。</h2>
            <p className="cta-sub">各種補助金・助成金の活用相談も承ります。</p>
            <div className="cta-voices">
              <span className="cta-voice">「ウチの製品の検査にAIが使えるのか？」</span>
              <span className="cta-voice">「費用対効果の高い自動化ポイントは？」</span>
            </div>
            <div className="cta-contact">
              <div className="cta-contact-grid">
                <div className="cta-contact-info">
                  <strong>有限会社 LINABLEキャリア</strong>
                  〒446-0072 愛知県安城市住吉町荒曽根1-245 アワーズビル2F
                </div>
                <div className="cta-contact-phone">
                  <div className="label">TEL</div>
                  <div className="tel">0566-93-1733</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
