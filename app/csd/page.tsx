import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "CSD伴走型コンサル | 有限会社LINABLEキャリア",
  description: "社員一人ひとりのキャリア面談から始まる組織開発。CSDが社員の声を丁寧に聴き、組織の課題を経営者へフィードバック。採用から定着まで伴走します。",
};

export default function CsdPage() {
  return (
    <>
      <PageHeader
        label="CSD Consulting"
        title="CSD伴走型コンサル"
        sub={<>〜 社員のキャリア面談から、組織の課題を見出す 〜<br /><br />社員一人ひとりのキャリア面談から始まる、組織開発。<br />CSDが社員の声を丁寧に聴き、そこから見えた組織の課題を経営者へフィードバック。<br />必要に応じて、伴走コンサルへとつなげます。</>}
        theme="teal"
      />

      <section>
        <div className="container-narrow reveal">
          <div className="section-label">Your Concerns</div>
          <h2 className="section-title">こんなお悩みに</h2>
          <ul className="feature-list">
            <li>採用してもすぐ辞めてしまう。</li>
            <li>辞めそうな社員がいる。本音を聞き出せない。</li>
            <li>若手社員に、どう声をかければいいか分からない。</li>
            <li>いつもの様子と違う社員がいる。話を聞いてもよくわからず、対応方法もわからない。</li>
            <li>現場リーダーが、言ったとおりに育たない。本人にやる気が見えない。</li>
            <li>障害者雇用や、多様な背景を持つ人材の受け入れに踏み切りたい。</li>
          </ul>

          <div style={{ background: "var(--teal-mist)", borderLeft: "4px solid var(--teal)", borderRadius: "0 16px 16px 0", padding: "28px 32px", marginTop: 28 }}>
            <div style={{ display: "inline-block", background: "var(--teal)", color: "var(--white)", padding: "4px 14px", borderRadius: 14, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 14 }}>OUR EXPERTISE</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 2, color: "var(--charcoal)" }}>
              <strong style={{ color: "var(--navy)", display: "block", marginBottom: 10, fontSize: 16 }}>障害者雇用や、多様な人材の受け入れは、私たちの専門分野です。</strong>
              現場の準備、配属後の伴走、評価のしかた——どこから手をつけるべきか分からない場合も、お任せください。<br />
              10年以上、若者と企業の橋渡しを続けてきた経験から、貴社に合った進め方をご提案します。
            </p>
          </div>

          <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--teal) 100%)", color: "var(--white)", padding: "48px 40px", borderRadius: 20, marginTop: 48, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, background: "var(--sage)", opacity: 0.2, borderRadius: "50%", filter: "blur(40px)" }} />
            <p style={{ fontSize: 16, lineHeight: 2, position: "relative", color: "var(--white)", margin: 0 }}>
              <strong style={{ background: "linear-gradient(transparent 62%, rgba(168, 197, 176, 0.4) 62%)", padding: "0 2px", fontSize: 18, display: "inline-block", marginBottom: 12 }}>「社員一人ひとりが、何を想い、何に悩んでいるか」が、経営者からは見えづらくなっている。</strong><br /><br />
              私たちは、キャリア面談を通してそれを丁寧に聴き取り、<strong style={{ background: "linear-gradient(transparent 62%, rgba(168, 197, 176, 0.4) 62%)", padding: "0 2px" }}>「何を、どう進めればよいか」を経営者と共に考え、共に動く伴走者になります。</strong>
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center" }} className="reveal">
            <div className="section-label center">Service Menu</div>
            <h2 className="section-title center">サービスメニュー</h2>
            <p className="section-lead">
              無料相談から始まり、キャリア面談・伴走コンサルへと段階的にお付き合いいただけます。
            </p>
          </div>

          <div className="steps-container">
            <div className="steps-stage free reveal">
              <div className="steps-stage-label">入口</div>
              <h3 className="steps-stage-title">まずは、お話を伺うところから。</h3>
              <div className="step-row">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>無料相談（1時間）</h4>
                  <p>電話またはオンライン（Zoom等）で、CSDが経営者・人事担当者のお話を伺います。「人」にまつわる、どんな漠然とした悩みでも構いません。</p>
                  <div className="step-meta">費用：無料 ／ 時間：1時間 ／ 形式：電話・オンライン</div>
                </div>
              </div>
            </div>

            <div className="steps-stage paid reveal">
              <div className="steps-stage-label">有償サービス</div>
              <h3 className="steps-stage-title">社員のキャリア面談から、組織課題を見出す。</h3>
              <div className="step-row">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>キャリア面談</h4>
                  <p>CSDが社員お一人おひとりと面談。現在のキャリアや仕事への想い、悩みを丁寧に聴き取ります。</p>
                  <div className="price-box">
                    <div>
                      <div className="price-label">1名あたり</div>
                      <div className="price-main">12,000<span className="unit">円（税別）</span></div>
                    </div>
                    <div className="price-note">1名から依頼OK ／ 複数名での実施がおすすめ</div>
                  </div>
                  <div style={{ background: "var(--white)", border: "1px solid var(--teal-light)", borderRadius: 12, padding: "20px 24px", marginTop: 20 }}>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.95, color: "var(--gray-text)" }}>
                      <strong style={{ color: "var(--navy)", display: "block", marginBottom: 8 }}>1名から、組織全体まで。柔軟に承ります。</strong>
                      <span style={{ fontSize: 13.5 }}>
                        <strong>【1名からの単発依頼でも、お気軽に】</strong>「離職の可能性がある」「最近、様子が気になる」など、経営者が個別に心配されている社員1名からの依頼でも、もちろん承ります。<br /><br />
                        <strong>【組織として効果を出すには、複数名・幹部層も】</strong>ただ、組織全体の課題を見出し、点と点をつなげていくには、複数名の社員と幹部層を含めたキャリア面談が、本当の効果を生みます。CSDが「個人の声」を「組織の構造」へとつなぎ、経営者へお戻しします。
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>報告書＋フィードバック面談</h4>
                  <p>キャリア面談から見えた組織の課題を整理し、報告書としてまとめます。経営者・幹部層の方々と面談し、「何を、どう進めればよいか」を共に考えます。</p>
                  <div className="step-meta">費用：応相談 ／ 成果物：組織課題整理レポート（書面）</div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4>定着伴走（3ヶ月〜）</h4>
                  <p>対象社員1〜2名に対して、月2回の現場訪問、月1回の本人面談、月1回の経営者／上司面談、ポテンシャル・レポート作成をセットでご提供します。</p>
                  <div className="price-box">
                    <div>
                      <div className="price-label">対象社員1〜2名まで</div>
                      <div className="price-main">月 5<span className="unit">万円（税別）</span></div>
                    </div>
                    <div className="price-note">3名以上の場合は応相談 ／ 最低3ヶ月〜</div>
                  </div>
                </div>
              </div>
              <div className="step-row">
                <div className="step-number">05</div>
                <div className="step-content">
                  <h4>組織伴走（応相談）</h4>
                  <p>複数名の定着伴走に加え、経営者・管理職との継続的な面談、採用面接への同席、現場リーダー育成、必要に応じた研修まで——貴社の「人」に関する仕組み全体にCSDが伴走します。</p>
                  <div className="step-meta">月額制（ご相談のうえ見積もり）／ 期間目安：6ヶ月〜1年</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 900, margin: "60px auto 0" }} className="reveal">
            <div style={{ background: "var(--white)", border: "2px dashed var(--teal-light)", borderRadius: 20, padding: "36px 40px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ background: "var(--teal-mist)", color: "var(--teal)", padding: "6px 16px", borderRadius: 20, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em" }}>INDEPENDENT MENU</div>
                </div>
                <div style={{ flex: 1, minWidth: 280 }}>
                  <h4 style={{ fontSize: 20, color: "var(--navy)", marginBottom: 12 }}>リーダーシップ研修</h4>
                  <p style={{ fontSize: 14.5, lineHeight: 1.95, color: "var(--gray-text)", margin: 0 }}>
                    研修単独のご提供は行っておりません。<br />
                    <strong style={{ color: "var(--navy)" }}>CSD伴走コンサルを進める上で必要な場面で、個別にご提案いたします。</strong>費用・内容はご相談のうえ、貴社の状況に合わせて設計します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ textAlign: "center" }} className="reveal">
            <div className="section-label center">Our Uniqueness</div>
            <h2 className="section-title center">私たちの独自性</h2>
          </div>
          <div className="two-col">
            <div className="two-col-card reveal">
              <h4>CSD（キャリアソーシャルデザイナー）</h4>
              <p>
                一般的な人材コンサルタントは「採用する個人を選ぶ」ことが中心、組織開発コンサルタントは「仕組みを設計する」ことが中心。<br /><br />
                <strong>CSDはその両方を、同じ一人の専門家が見ます。</strong>個人の特性を深く理解したうえで、その人が輝ける環境まで設計する——これが、LINABLEキャリア独自のメソッドです。<br /><br />
                現在、3名のCSDが稼働。NPOでの10年以上の実績を土台に、多様な若者と企業の橋渡しを重ねてきました。
              </p>
            </div>
            <div className="two-col-card highlight reveal reveal-delay-1">
              <h4>ポテンシャル・レポート</h4>
              <p>
                <strong>「できない理由」ではなく、「働ける条件」を可視化した人材分析レポート。</strong><br /><br />
                どんな環境で集中できるのか。どんな声かけがあると安心して動けるのか。どの作業が「得意」で、どこに力を発揮するのか。体力・集中力のリズム、得意な時間帯——<br /><br />
                履歴書や適性検査からは見えない、<strong>現場で使える実用情報</strong>として納品します。配属後の声かけ・環境整備にそのまま活用できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section-outer">
        <div className="container">
          <div className="cta-block reveal">
            <h2 className="cta-title">まずは、貴社の「人」のお悩みをお聞かせください。</h2>
            <p className="cta-sub">1時間の無料相談から承ります。電話でもオンラインでも。</p>
            <div className="cta-voices">
              <span className="cta-voice">「うちの若手、続くか不安」</span>
              <span className="cta-voice">「気になる社員の面談をお願いしたい」</span>
              <span className="cta-voice">「管理職のマネジメントに課題がある」</span>
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
