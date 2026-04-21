import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "LINABLE Kit I 福祉事業所向け | 有限会社LINABLEキャリア",
  description: "就労継続支援A型・B型事業所向け。利用者さんの「できた！」を増やし、高単価な仕事でしっかり稼ぐ。AIカメラ検査機「現場の相棒AI」LINABLE Kit I。100万円〜（税抜）",
};

export default function KitWelfarePage() {
  return (
    <div className="welfare-bg">
      <PageHeader
        label="Kit I — For Welfare Sites"
        title={<>現場の相棒AI<br /><span style={{ fontSize: "0.68em" }}>利用者さんの「できた！」を増やし、</span><br /><span style={{ fontSize: "0.68em" }}>高単価な仕事でしっかり稼ぐ。</span></>}
        sub="AIカメラ検査機「現場の相棒AI」／ 型番：LINABLE Kit I"
        theme="welfare"
      />

      <section>
        <div className="container reveal">
          <div className="section-label">Your Challenges</div>
          <h2 className="section-title">福祉現場ならではの<br />「当たり前」の板挟みによる4つの課題</h2>
          <div className="problem-grid">
            <div className="problem-card" style={{ background: "var(--cream)" }}>
              <div className="problem-icon" style={{ background: "#F5D9CD" }}>💰</div>
              <div className="problem-title">工賃が上がらない</div>
              <div className="problem-desc">簡単な作業しか受けられず、利益の出る「高単価な仕事」に挑戦できない。</div>
              <div className="problem-voice" style={{ background: "#F5D9CD", borderColor: "var(--terracotta-light)", color: "var(--terracotta)" }}>「単価の安い仕事ばかり…」</div>
            </div>
            <div className="problem-card" style={{ background: "var(--cream)" }}>
              <div className="problem-icon" style={{ background: "#F5D9CD" }}>⏰</div>
              <div className="problem-title">支援員の検品負担</div>
              <div className="problem-desc">支援員がつきっきりで「全数検品・数え直し」をしており、本来の個別支援に手が回らない。</div>
              <div className="problem-voice" style={{ background: "#F5D9CD", borderColor: "var(--terracotta-light)", color: "var(--terracotta)" }}>「つきっきりで他の業務が…」</div>
            </div>
            <div className="problem-card" style={{ background: "var(--cream)" }}>
              <div className="problem-icon" style={{ background: "#F5D9CD" }}>😔</div>
              <div className="problem-title">対人ストレスによる萎縮</div>
              <div className="problem-desc">人（支援員）からミスを指摘されると自信をなくしてしまう。</div>
              <div className="problem-voice" style={{ background: "#F5D9CD", borderColor: "var(--terracotta-light)", color: "var(--terracotta)" }}>「また怒られちゃった…」</div>
            </div>
            <div className="problem-card" style={{ background: "var(--cream)" }}>
              <div className="problem-icon" style={{ background: "#F5D9CD" }}>🧩</div>
              <div className="problem-title">技術継承の難しさ</div>
              <div className="problem-desc">複雑な工程を教えるのが難しく、特定の「できる利用者さん」だけに仕事が偏ってしまう。</div>
              <div className="problem-voice" style={{ background: "#F5D9CD", borderColor: "var(--terracotta-light)", color: "var(--terracotta)" }}>「○○さんしかできない…」</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }}>
        <div className="container-narrow reveal">
          <div className="section-label">Our Approach</div>
          <h2 className="section-title">AIは、やさしいサポーター。</h2>
          <p className="section-lead">人を監視するのではなく、「環境を人に合わせる」デジタル構築</p>
          <div className="before-after">
            <div className="ba-card ba-before" style={{ textAlign: "center", background: "#F0F3F5" }}>
              <div className="ba-label">Before ✕</div>
              <div style={{ fontSize: 72, margin: "20px 0" }}>😣</div>
              <p style={{ fontWeight: 700, color: "var(--gray-medium)" }}>人を機械に合わせる</p>
            </div>
            <div className="ba-arrow">→</div>
            <div className="ba-card ba-after" style={{ textAlign: "center", background: "var(--sage-bg)" }}>
              <div className="ba-label" style={{ background: "var(--sage)" }}>After ⭕</div>
              <div style={{ fontSize: 72, margin: "20px 0" }}>🙂</div>
              <p style={{ fontWeight: 700, color: "var(--navy)" }}>環境を人に合わせる</p>
              <p style={{ fontSize: 12, color: "var(--sage)", marginTop: 6, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>Environment-Person Fit</p>
            </div>
          </div>
          <div style={{ background: "var(--white)", padding: 32, borderRadius: 14, marginTop: 40, textAlign: "center", border: "1px solid var(--sage-light)" }}>
            <p style={{ fontFamily: "'Kaisei Decol', serif", fontSize: 16, lineHeight: 2 }}>
              私たちが提供するのは、人を監視する機械ではありません。<br />
              <strong style={{ background: "linear-gradient(transparent 62%, var(--sage-bg) 62%)", padding: "0 2px" }}>誰でも安心して働ける環境を、デジタルで構築します。</strong>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <div className="section-label">Win-Win-Win</div>
          <h2 className="section-title">現場の3つの課題を同時に解決します</h2>
          <p className="section-lead">「経営」「利用者」「支援員」のすべてに、ポジティブな変化をもたらします。</p>
          <div className="three-stakeholder">
            <div className="sh-card">
              <div className="sh-icon">🏢</div>
              <div className="sh-label">経営・施設長</div>
              <div className="sh-before">Before：低単価な仕事中心</div>
              <div className="sh-arrow">↓</div>
              <div className="sh-after">高単価案件の受注拡大と工賃アップ！</div>
            </div>
            <div className="sh-card">
              <div className="sh-icon">🙂</div>
              <div className="sh-label">利用者</div>
              <div className="sh-before">Before：人からの指摘で萎縮</div>
              <div className="sh-arrow">↓</div>
              <div className="sh-after">AIが教えてくれるから自信がつく！</div>
            </div>
            <div className="sh-card">
              <div className="sh-icon">🤲</div>
              <div className="sh-label">支援員</div>
              <div className="sh-before">Before：検品で手一杯</div>
              <div className="sh-arrow">↓</div>
              <div className="sh-after">検品から解放され、個別支援に専念！</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }}>
        <div className="container-narrow reveal">
          <div className="section-label">Features</div>
          <h2 className="section-title">品質保証を武器に、<br />利益の出る仕事を</h2>
          <p className="section-lead">正確な証拠とカンタン運用で、単価交渉を有利に進める</p>
          <div className="price-box" style={{ background: "linear-gradient(135deg, var(--terracotta) 0%, #A05E42 100%)" }}>
            <div>
              <div className="price-label">パッケージ価格</div>
              <div className="price-main">100<span className="unit">万円〜（税抜）</span></div>
            </div>
            <div className="price-note">各種補助金・助成金の活用相談も承ります</div>
          </div>
          <ul className="feature-list">
            <li><strong>高単価案件への挑戦</strong>：自動車部品や電子部品など、これまで受けられなかった仕事を自信を持って受注できます</li>
            <li><strong>信頼の画像ログ</strong>：AIが「いつ、何を検査したか」を全数デジタル記録。納品先への強力な信頼となり、単価交渉の武器になります</li>
            <li><strong>後付け・カンタン運用</strong>：プログラミング不要で、スタッフが「良品・不良品」を追加学習させることができます</li>
            <li><strong>大掛かりな工事不要</strong>：今の作業台に置くだけで導入完了</li>
          </ul>
        </div>
      </section>

      <section className="cta-section-outer" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="cta-block reveal" style={{ background: "linear-gradient(135deg, rgba(200, 120, 86, 0.15) 0%, transparent 50%), linear-gradient(-135deg, rgba(232, 184, 157, 0.3) 0%, transparent 50%), var(--white)", borderColor: "var(--terracotta-light)" }}>
            <h2 className="cta-title">まずは、ご相談から。</h2>
            <p className="cta-sub">実際の作業・支援内容を拝見させてください。</p>
            <div className="cta-voices">
              <span className="cta-voice" style={{ borderColor: "var(--terracotta-light)" }}>「うちの作業にAIって使えるの？」</span>
              <span className="cta-voice" style={{ borderColor: "var(--terracotta-light)" }}>「利用者さんに合った使い方を知りたい」</span>
              <span className="cta-voice" style={{ borderColor: "var(--terracotta-light)" }}>「工賃を上げる具体策が知りたい！」</span>
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
    </div>
  );
}
