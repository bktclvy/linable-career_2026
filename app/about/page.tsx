import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "私たちについて | 有限会社LINABLEキャリア",
  description: "10年以上、「働くこと」に悩む若者と向き合ってきた会社です。経営理念・代表メッセージ・会社概要をご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="私たちについて"
        sub={<>10年以上、「働くこと」に悩む若者と向き合ってきた会社です。<br />一人ひとりの得意を活かし、最新のデジタル技術で環境を整え、<br />すべての人が働きやすい社会を創ります。</>}
        theme="default"
      />

      {/* Timeline */}
      <section>
        <div className="container-narrow">
          <div className="reveal">
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">これまでの歩み</h2>
            <p className="section-lead">
              若者の「はたらく」を支える活動から始まり、<br />
              現在の3事業体制にたどり着くまでの道のりです。
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2016</div>
                <h4 className="timeline-title">NPO法人リネーブル・若者セーフティネット設立</h4>
                <p className="timeline-desc">代表・荒川陽子が愛知県西三河地方にて、若者の自立支援を目的としたNPO法人を設立。居場所づくりから活動をスタート。</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2017</div>
                <h4 className="timeline-title">有限会社LINABLEキャリア設立／キャリア面談・リーダーシップ研修を開始</h4>
                <p className="timeline-desc">NPOの姉妹団体として、営利事業を通じた「はたらく場づくり」を担う会社を設立。働きたい若者と若者を雇用したい企業との橋渡しを開始するとともに、同年よりキャリア面談とリーダーシップ研修の提供を開始。</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <h4 className="timeline-title">製造業向けキャリア支援へ展開</h4>
                <p className="timeline-desc">地域の製造業企業と連携し、CSD（キャリアソーシャルデザイナー）による人材育成・キャリア相談サービスを本格化。</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <h4 className="timeline-title">製造業DX事業の開始</h4>
                <p className="timeline-desc">AI画像検査システム「LINABLE Kit I」の開発に着手。3Dプリンタ治具DX・3DCAD研修と合わせ、デジタル技術による現場支援を開始。</p>
              </div>
              <div className="timeline-item current">
                <div className="timeline-year">2026</div>
                <h4 className="timeline-title">3事業体制の確立</h4>
                <p className="timeline-desc">製造業DX、CSD伴走型コンサル、地域環境整備の3つの柱を確立。CSD3名が稼働し、採用から定着、現場改善、地域整備までを一貫して支援する体制へ。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVV */}
      <section style={{ background: "var(--cream)" }}>
        <div className="container-narrow">
          <div className="reveal">
            <div className="section-label">Our Philosophy</div>
            <h2 className="section-title">経営理念</h2>
            <div className="mvv-grid">
              <div className="mvv-card">
                <div className="mvv-label">Mission ― 私たちの使命</div>
                <h3 className="mvv-title">一人ひとりの得意を活かし、<br />すべての人が働きやすい社会を創る。</h3>
                <p className="mvv-body">最新のデジタル技術で環境を整え、<strong>一人ひとりの得意を活かしながら、多様な働き方を実現する社会</strong>をめざします。</p>
              </div>
              <div className="mvv-card vision">
                <div className="mvv-label">Vision ― 5年後のビジョン</div>
                <h3 className="mvv-title">あなたの『得意』は、他の誰かの『助け』になり、<br />仲間の『得意』は、あなたを支える『力』になる。</h3>
                <p className="mvv-body">
                  1日8時間・週5日にとらわれず、一人ひとりが自分の得意と自分に合った時間の使い方をして、希望する年収を手にする。事業で生まれた利益を、きちんと社員に還元し、<strong>賃金が上がり続ける会社</strong>を目指します。<br /><br />
                  DX、CSD、地域環境整備——3つの柱を通じて、今の自分にちょうど良い働き方を求める若者と、若者を迎えたい企業と、私たちが暮らす地域を、ゆるやかにつなぎます。
                </p>
              </div>
              <div className="mvv-card values">
                <div className="mvv-label">Values ― 行動指針</div>
                <ol className="mvv-list">
                  <li>互いの個性を尊重し、その違いを力に変える知恵を持つ</li>
                  <li>一人で抱え込まず、心から頼り合える信頼関係を築く</li>
                  <li>失敗を恐れることなく、次の挑戦を讃え合う文化を創る</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section>
        <div className="container">
          <div style={{ textAlign: "center" }} className="reveal">
            <div className="section-label center">CEO Message</div>
            <h2 className="section-title center">代表メッセージ</h2>
          </div>
          <div className="ceo-block reveal">
            <div className="ceo-name">
              <div className="ceo-name-main">荒川 陽子（あらかわ ようこ）</div>
              <div className="ceo-name-role">
                有限会社LINABLEキャリア 代表取締役<br />
                NPO法人リネーブル・若者セーフティネット 代表理事
              </div>
            </div>
            <div className="ceo-message-lines">
              <div className="ceo-line">1日8時間、週5日に、捉われない。</div>
              <div className="ceo-line highlight">
                その人に合った環境があれば、<br />
                だれもが働くことができる。<br />
                それを私たちは、この会社で証明していきます。
              </div>
            </div>
            <div className="ceo-outro">
              10年以上、働くことに悩む若者と向き合ってきた私たちが、<br />
              たどり着いた場所です。<br /><br />
              どうぞ、お気軽にお声かけください。
            </div>
            <div className="ceo-signature">つながりが、人を動かす。</div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section style={{ background: "var(--gray-bg)" }}>
        <div className="container-narrow">
          <div className="reveal">
            <div className="section-label">Company</div>
            <h2 className="section-title">会社概要</h2>
            <table className="info-table">
              <tbody>
                <tr><th>商号</th><td>有限会社LINABLEキャリア</td></tr>
                <tr><th>設立</th><td>2017年</td></tr>
                <tr><th>資本金</th><td>900万円</td></tr>
                <tr><th>代表取締役</th><td>荒川 陽子</td></tr>
                <tr><th>本社所在地</th><td>〒446-0072 愛知県安城市住吉町荒曽根1-245 アワーズビル2F</td></tr>
                <tr><th>TEL</th><td>0566-93-1733</td></tr>
                <tr><th>Email</th><td>info@linable-career.co.jp</td></tr>
                <tr><th>事業内容</th><td>
                  ・製造業DX支援事業（LINABLE Kit I／3Dプリンタ治具DX／3DCAD研修）<br />
                  ・CSD伴走型コンサル事業<br />
                  ・地域環境整備事業
                </td></tr>
                <tr><th>関連団体</th><td>NPO法人リネーブル・若者セーフティネット（姉妹団体）</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="まずは、ご相談から。"
        sub="どんな粒度のご相談でも、お気軽にお寄せください。"
        voices={["「製造業DXについて聞きたい」", "「若手の定着を何とかしたい」", "「地域の草刈り、頼めるか？」"]}
      />
    </>
  );
}
