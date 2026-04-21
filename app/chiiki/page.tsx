import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "地域環境整備 | 有限会社LINABLEキャリア",
  description: "地域の『困りごと』を、若者の『働く喜び』へ。草刈り・清掃・伐採——AIや自動化では代替できない「現場の力」を、育ってきた若者たちのチームが担います。",
};

export default function ChiikiPage() {
  return (
    <div className="forest-theme">
      <PageHeader
        label="Community Grounds Service"
        title={<>地域の『困りごと』を、<br />若者の『働く喜び』へ。</>}
        sub={<>草刈り・清掃・伐採——AIや自動化では代替できない「現場の力」を、<br />育ってきた若者たちのチームが担います。</>}
        theme="forest"
      />

      <section>
        <div className="container-narrow reveal">
          <div className="section-label">Your Concerns</div>
          <h2 className="section-title">こんなお悩み、ありませんか？</h2>
          <ul className="feature-list">
            <li>工場敷地の草刈り、毎年外注しているが担い手が見つかりにくい</li>
            <li>アパート・駐車場の周辺清掃に、定期的な手が必要</li>
            <li>伐採が必要な樹木があるが、小規模すぎて大手業者が受けてくれない</li>
            <li>空き地・遊休地の管理を、誰かに任せたい</li>
            <li>年に数回のスポット作業を、気軽に頼める相手がほしい</li>
            <li>地域貢献・CSR活動も兼ねた発注先を探している</li>
          </ul>
        </div>
      </section>

      <section style={{ background: "var(--sage-mist)" }}>
        <div className="container reveal">
          <div className="section-label">Our Value</div>
          <h2 className="section-title">ご提供できる価値</h2>
          <div className="approach-grid">
            <div className="approach-card" style={{ borderTopColor: "var(--forest)" }}>
              <div className="approach-number" style={{ color: "var(--forest)" }}>Value 01</div>
              <h4 className="approach-title">人手不足の解消と<br />コストの最適化</h4>
              <p className="approach-body">「年に数回の除草作業だけ」「この区画の清掃だけ」といったスポット依頼から年間契約まで柔軟に対応。必要な時に必要な分だけ委託でき、コスト最適化に繋がります。</p>
            </div>
            <div className="approach-card" style={{ borderTopColor: "var(--forest)" }}>
              <div className="approach-number" style={{ color: "var(--forest)" }}>Value 02</div>
              <h4 className="approach-title">遊休資産・<br />管理地の価値維持</h4>
              <p className="approach-body">担い手不足で管理が難しい工場敷地、駐車場、アパート周辺などを整備し、景観と資産価値を保全。定期管理でトラブルを未然に防ぎます。</p>
            </div>
            <div className="approach-card" style={{ borderTopColor: "var(--forest)" }}>
              <div className="approach-number" style={{ color: "var(--forest)" }}>Value 03</div>
              <h4 className="approach-title">地域貢献（CSR）と<br />企業イメージの向上</h4>
              <p className="approach-body">ご依頼は「若者の就労・自立支援」そのもの。貴社のCSR活動として当社サイト・SNS等で発信することで、企業イメージの向上にも寄与します。</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-narrow reveal">
          <div className="section-label">Services</div>
          <h2 className="section-title">対応業務</h2>
          <ul className="feature-list">
            <li>🌿 <strong>草刈り・除草</strong>　— 工場敷地、駐車場、空き地、アパート周辺など</li>
            <li>🧹 <strong>清掃</strong>　— 外構・共用部・駐車場・ゴミ置き場など</li>
            <li>🌳 <strong>伐採・剪定</strong>　— 小規模樹木、枝打ち、落ち葉処理</li>
            <li>🗑️ <strong>片付け・撤去</strong>　— 不要物整理、倉庫片付けなど</li>
            <li>🏗️ <strong>定期管理</strong>　— 年間契約で、巡回・清掃・整備を継続</li>
          </ul>
          <p style={{ marginTop: 24, fontSize: 13, color: "var(--gray-medium)" }}>
            ※ 大掛かりな重機作業、高所作業、専門資格が必要な作業はお受けできない場合があります。現地確認のうえ、ご相談させてください。
          </p>

          <div className="area-info">
            <div className="area-info-icon">🗾</div>
            <div className="area-info-content">
              <div className="area-info-label">Service Area</div>
              <div className="area-info-main">対応エリア：愛知県内</div>
              <div className="area-info-sub">愛知県内であれば、地域を問わずお伺いいたします。<br />遠方の場合は、別途交通費をお見積もりに含めさせていただきます。</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--sage-mist)" }}>
        <div className="container-narrow reveal">
          <div className="section-label">Why Trustworthy</div>
          <h2 className="section-title">なぜ、私たちの若者チームは<br />頼りになるのか</h2>
          <div className="trust-block">
            <h3>「働く人を育てる」ことを本業としてきた会社が、<br />送り出すチームだから。</h3>
            <p>
              私たちは、10年以上にわたって若者の「はたらく」を支えてきました。<br /><br />
              姉妹団体NPO法人リネーブルでの居場所づくりから始まり、仕事体験、実践型のOJT、そしてCSDによる一人ひとりへの伴走——<strong>「人を育てる」ことに、これだけの時間とノウハウを投資してきた会社は多くありません。</strong><br /><br />
              地域環境整備を担う若者たちは、その育成を経て、<strong>自分の力で現場を回せる</strong>ところまで成長しています。
            </p>
          </div>
          <h3 style={{ color: "var(--forest)", marginTop: 40, marginBottom: 20, fontSize: 22 }}>💪 だから、頼りになる。</h3>
          <ul className="feature-list">
            <li><strong>きちんと挨拶する</strong>。作業前後に必ず、現場の方に声をかけます。</li>
            <li><strong>時間を守る</strong>。集合時刻、作業予定、報告のタイミング。</li>
            <li><strong>丁寧に仕上げる</strong>。「早く終わらせる」より「きちんと仕上げる」ことを大事にするチームです。</li>
            <li><strong>きちんと報告する</strong>。作業完了時には、写真付きで何をどう整えたかをお伝えします。</li>
            <li><strong>困ったら相談する</strong>。現場で判断に迷ったら、勝手に進めず確認します。</li>
          </ul>
          <div className="trust-summary">
            これらは、当たり前のようでいて、<strong>人手不足の時代に最も失われやすい、「仕事の基本」</strong>です。<br />
            私たちは、若者と一緒にこの「仕事の基本」を大切に、一つひとつの現場に向き合います。
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <div className="section-label">Flow</div>
          <h2 className="section-title">ご依頼の流れ</h2>
          <div className="step-flow">
            <div className="step-card">
              <div className="step-num" style={{ background: "var(--forest)" }}>STEP 1</div>
              <div className="step-title">無料相談</div>
              <div className="step-desc">作業内容・頻度・<br />規模をお聞かせください</div>
            </div>
            <div className="step-card">
              <div className="step-num" style={{ background: "var(--forest)" }}>STEP 2</div>
              <div className="step-title">現地確認・見積</div>
              <div className="step-desc">現地を拝見し、<br />お見積もりをご提示</div>
            </div>
            <div className="step-card">
              <div className="step-num" style={{ background: "var(--forest)" }}>STEP 3</div>
              <div className="step-title">作業日調整</div>
              <div className="step-desc">作業日を調整し、<br />トレーナー同行で準備</div>
            </div>
            <div className="step-card">
              <div className="step-num" style={{ background: "var(--forest)" }}>STEP 4</div>
              <div className="step-title">作業実施・完了</div>
              <div className="step-desc">作業完了後、貴社に<br />ご確認をいただきます</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section-outer" style={{ background: "var(--sage-mist)" }}>
        <div className="container">
          <div className="cta-block reveal" style={{ background: "linear-gradient(135deg, rgba(45, 74, 50, 0.1) 0%, transparent 50%), linear-gradient(-135deg, rgba(168, 197, 176, 0.3) 0%, transparent 50%), var(--white)" }}>
            <h2 className="cta-title">「人手が足りない」<br />その困りごとを、ぜひお聞かせください。</h2>
            <p className="cta-sub">どんな粒度のご相談でも構いません。</p>
            <div className="cta-voices">
              <span className="cta-voice">「工場の敷地、年2回の草刈りを」</span>
              <span className="cta-voice">「アパート周辺を定期的に清掃」</span>
              <span className="cta-voice">「庭木の伐採を気軽に」</span>
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
