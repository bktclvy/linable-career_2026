import type { Metadata } from "next";
import Link from "next/link";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "有限会社LINABLEキャリア | 環境を、人に合わせる。",
  description: "10年以上、「働くこと」に悩む若者と向き合ってきた会社です。製造業DX・CSD伴走型コンサル・地域環境整備の3事業で、はたらく場を創ります。",
};

export default function TopPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-inner">
          <div className="hero-eyebrow">Environment-Person Fit</div>
          <h1 className="hero-title">
            <span className="block-line">環境を、</span>
            <span className="block-line"><span className="accent">人に合わせる。</span></span>
          </h1>
          <p className="hero-sub">
            10年以上、「働くこと」に悩む若者と向き合ってきた会社です。<br />
            一人ひとりの得意を活かし、最新のデジタル技術で環境を整え、<br />
            すべての人が働きやすい社会を創ります。
          </p>
          <div className="hero-buttons">
            <Link href="/about" className="btn-primary">
              <span>3つの事業を見る</span>
              <span className="arrow-icon">→</span>
            </Link>
            <Link href="/contact" className="btn-secondary">
              <span>お問い合わせ</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item reveal">
            <CountUp target={10} plus unit="年" />
            <div className="stat-label">SINCE 2016</div>
            <div className="stat-desc">若者と企業に向き合ってきた歳月</div>
          </div>
          <div className="stat-item reveal reveal-delay-1">
            <CountUp target={3} unit="名" />
            <div className="stat-label">CSD EXPERTS</div>
            <div className="stat-desc">現役で稼働する専門家</div>
          </div>
          <div className="stat-item reveal reveal-delay-2">
            <CountUp target={3} unit="事業" />
            <div className="stat-label">BUSINESS AREAS</div>
            <div className="stat-desc">製造業DX／CSD伴走／環境整備</div>
          </div>
          <div className="stat-item reveal reveal-delay-3">
            <span className="stat-number">
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500 }}>No.1</span>
            </span>
            <div className="stat-label">OUR BELIEF</div>
            <div className="stat-desc">環境が変われば、誰もが働ける</div>
          </div>
        </div>
      </section>

      {/* Business Cards */}
      <section className="biz-section">
        <div className="container">
          <div className="biz-intro reveal">
            <div className="section-label center">Our Business</div>
            <h2 className="section-title center">3つの事業で、<br />「はたらく」と「地域」をつなぐ。</h2>
            <p className="section-lead">
              一見まったく違う3つの事業ですが、<br />
              どれも「環境を、人に合わせる」というひとつの思想から生まれています。
            </p>
          </div>
          <div className="biz-cards">
            <Link href="/kit" className="biz-card type-navy reveal">
              <div className="biz-card-icon">⚙️</div>
              <div className="biz-card-num">BUSINESS 01</div>
              <h3 className="biz-card-title">製造業DX</h3>
              <p className="biz-card-copy">現場の「最適」を、<br />AI・IoTと3DCADで。</p>
              <div className="biz-card-tags">
                LINABLE Kit I（AI検査機）<br />
                3Dプリンタ治具DX<br />
                3DCAD導入・基礎研修
              </div>
              <div className="biz-card-arrow"><span>詳しく見る</span><span>→</span></div>
            </Link>
            <Link href="/csd" className="biz-card type-sage reveal reveal-delay-1">
              <div className="biz-card-icon">🤝</div>
              <div className="biz-card-num">BUSINESS 02</div>
              <h3 className="biz-card-title">CSD伴走型コンサル</h3>
              <p className="biz-card-copy">採用から定着まで、<br />貴社に合った人を育てる。</p>
              <div className="biz-card-tags">
                無料相談＋現場ウォッチング<br />
                定着伴走（月3万円／人）<br />
                組織伴走（応相談）
              </div>
              <div className="biz-card-arrow"><span>詳しく見る</span><span>→</span></div>
            </Link>
            <Link href="/chiiki" className="biz-card type-forest reveal reveal-delay-2">
              <div className="biz-card-icon">🌿</div>
              <div className="biz-card-num">BUSINESS 03</div>
              <h3 className="biz-card-title">地域環境整備</h3>
              <p className="biz-card-copy">地域の「困りごと」を、<br />若者の「働く喜び」へ。</p>
              <div className="biz-card-tags">
                草刈り・清掃・伐採<br />
                スポット〜定期管理まで<br />
                CSR活動との連動も可能
              </div>
              <div className="biz-card-arrow"><span>詳しく見る</span><span>→</span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="method-section">
        <div className="container">
          <div className="method-block reveal">
            <div className="method-text">
              <div className="section-label">Our Method</div>
              <h3>私たちの事業を支える<br />専門性「CSD」</h3>
              <p>
                CSD（キャリアソーシャルデザイナー）は、<strong>「個人に働きかける力」と「環境に働きかける力」を統合し、人と組織が共に成長する道筋をデザインする</strong>専門家、およびその育成メソッドです。
                <br /><br />
                このメソッドに基づき、人と企業をつなぎ、多様な人材の力を引き出し、地域企業の課題解決に貢献します。
              </p>
              <div className="method-badge">
                <span className="dot" />
                <span>現在、3名のCSDが稼働中</span>
              </div>
            </div>
            <div className="method-visual">
              <div className="method-visual-bg" />
              <div className="method-visual-content">
                <div className="method-visual-title">個人<span className="plus">×</span>環境</div>
                <div className="method-visual-divider" />
                <div className="method-visual-body">両方に働きかける専門家が、<br />人と組織の成長を<br />同時にデザインする</div>
                <div className="method-visual-divider" />
                <div className="method-visual-sub">Career Social Designer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling */}
      <section className="sibling-section">
        <div className="container">
          <div className="sibling-block reveal">
            <div className="section-label center">Sibling Organization</div>
            <h2 className="section-title center">姉妹団体のご紹介</h2>
            <p className="section-lead">
              代表・荒川陽子が2016年に立ち上げたNPO法人リネーブルの姉妹団体として、<br />
              LINABLEキャリアは営利事業を通じた「はたらく場づくり」を担っています。
            </p>
            <div className="sibling-diagram">
              <div className="sibling-box">
                <div className="sibling-role">Non-Profit</div>
                <div className="sibling-name">NPO法人<br />リネーブル・若者セーフティネット</div>
                <div className="sibling-desc">居場所 ／ 仕事体験 ／ アセスメント<br />「出会う・育てる」</div>
              </div>
              <div className="sibling-arrow">↔</div>
              <div className="sibling-box self">
                <div className="sibling-role">For-Profit</div>
                <div className="sibling-name">有限会社<br />LINABLEキャリア</div>
                <div className="sibling-desc">製造業DX ／ CSDコンサル ／ 地域環境整備<br />「はたらく場を創る」</div>
              </div>
            </div>
            <a href="https://linable.or.jp/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: "var(--navy)", marginTop: 16 }}>
              <span>NPO法人リネーブルのHPへ</span>
              <span className="arrow-icon">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section">
        <div className="quote-inner">
          <div className="quote-mark">&quot;</div>
          <div className="quote-lines">
            <div className="quote-line big reveal">1日8時間、週5日に、捉われない。</div>
            <div className="quote-line reveal reveal-delay-1">
              その人に合った環境があれば、<br />
              だれもが働くことができる。<br />
              <strong style={{ color: "var(--sage-light)" }}>それを私たちは、この会社で証明していきます。</strong>
            </div>
          </div>
          <div className="quote-author reveal reveal-delay-3">
            <div className="quote-author-name">荒川 陽子</div>
            <div className="quote-author-role">
              有限会社LINABLEキャリア 代表取締役<br />
              NPO法人リネーブル・若者セーフティネット 代表理事
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section-outer">
        <div className="container">
          <div className="cta-block reveal">
            <h2 className="cta-title">まずは、ご相談から。</h2>
            <p className="cta-sub">どんな粒度のご相談でも、お気軽にお寄せください。</p>
            <div className="cta-voices">
              <span className="cta-voice">「ウチの現場にAI検査機は使えるか？」</span>
              <span className="cta-voice">「若手の定着を何とかしたい」</span>
              <span className="cta-voice">「地域の草刈り、頼めるか？」</span>
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
          </div>
        </div>
      </section>
    </>
  );
}
