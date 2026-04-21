import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "LINABLE Kit I 製造業向け | 有限会社LINABLEキャリア",
  description: "中小製造業専用 効率化・不良防止 AI検査機「現場の相棒AI」。今のラインを止めない、変えない。ポンと置くだけの脱・目視AI検査機。100万円〜（税抜）",
};

export default function KitMfgPage() {
  return (
    <>
      <PageHeader
        label="Kit I — For Manufacturing"
        title={<>今のラインを止めない、変えない。<br />ポンと置くだけの『脱・目視 AI検査機』</>}
        sub="中小製造業専用 効率化・不良防止 AI検査機「現場の相棒AI」／ 100万円〜（税抜）"
        theme="kit"
      />

      <section>
        <div className="container reveal">
          <div className="section-label">Comparison</div>
          <h2 className="section-title">中小製造業に、ちょうどいい。</h2>
          <p className="section-lead">LINABLE Kit I は、高機能な汎用型検査システムの対抗馬ではありません。<br />中小製造業の現場に「ちょうどいい」を追求した、まったく別の選択肢です。</p>
          <div className="compare-rich">
            <div className="compare-row compare-head">
              <div className="cmp-cat">観点</div>
              <div className="cmp-other">汎用・多機能型の画像検査システム</div>
              <div className="cmp-self">LINABLE Kit I<span className="badge-best">OUR CHOICE</span></div>
            </div>
            <div className="compare-row">
              <div className="cmp-cat">対象とする現場</div>
              <div className="cmp-other">
                <div className="cmp-title">幅広い業界・規模</div>
                <div className="cmp-desc">大量生産・高速ラインにも対応する汎用性が強み。</div>
              </div>
              <div className="cmp-self">
                <div className="cmp-title">中小製造業の多品種少量生産に特化</div>
                <div className="cmp-desc">現場の「困った」を解決することだけに全力を注いでいます。</div>
              </div>
            </div>
            <div className="compare-row">
              <div className="cmp-cat">提供の形</div>
              <div className="cmp-other">
                <div className="cmp-title">機器＋ソフトウェア</div>
                <div className="cmp-desc">用途によってはSIer連携で構築。現場固有の治具は別途設計が必要な場合も。</div>
              </div>
              <div className="cmp-self">
                <div className="cmp-title">現場ヒアリング〜運用まで一式</div>
                <div className="cmp-desc">現場を拝見してのご提案、治具製作、運用設計、スタッフ教育まで、ひとつのパッケージで。</div>
              </div>
            </div>
            <div className="compare-row">
              <div className="cmp-cat">価格帯の目安</div>
              <div className="cmp-other">
                <div className="cmp-title">数百万〜数千万円</div>
                <div className="cmp-desc">機器費に加え、SI費・治具設計費・導入教育費などが別途発生することも。</div>
              </div>
              <div className="cmp-self">
                <div className="cmp-title">100万円〜（パッケージ一式・税抜）</div>
                <div className="cmp-desc"><strong style={{ color: "var(--orange)" }}>治具・初期セットアップ・スタッフ教育までパッケージ価格に込み</strong>。追加費用の心配が少ない一式提供です。</div>
              </div>
            </div>
            <div className="compare-row">
              <div className="cmp-cat">現場サポート</div>
              <div className="cmp-other">
                <div className="cmp-title">営業所・サービスセンター中心</div>
                <div className="cmp-desc">全国対応の手厚いサポート網。電話・オンラインでの迅速な対応が可能。</div>
              </div>
              <div className="cmp-self">
                <div className="cmp-title">愛知県内が主な対象エリア</div>
                <div className="cmp-desc"><strong>顔の見える担当者が、直接現場を訪問します。</strong>地域に根ざしたお付き合いを大切にしています。</div>
              </div>
            </div>
            <div className="compare-row">
              <div className="cmp-cat">運用のしかた</div>
              <div className="cmp-other">
                <div className="cmp-title">設備担当者を中心に運用</div>
                <div className="cmp-desc">近年は操作の簡便化が進み、現場でも扱いやすくなってきている。</div>
              </div>
              <div className="cmp-self">
                <div className="cmp-title">現場スタッフが主役</div>
                <div className="cmp-desc">プログラミング不要。「良品・不良品」の追加学習も現場スタッフが自分で対応できます。</div>
              </div>
            </div>
            <div className="compare-row">
              <div className="cmp-cat">アフターの距離感</div>
              <div className="cmp-other">
                <div className="cmp-title">電話・オンライン中心の遠隔サポート</div>
                <div className="cmp-desc">必要に応じて現場訪問もあるが、基本は遠隔対応。</div>
              </div>
              <div className="cmp-self">
                <div className="cmp-title">継続的な現場訪問による伴走型</div>
                <div className="cmp-desc">困ったときはもちろん、困っていないときも。現場の変化に、私たちも一緒に付き添います。</div>
              </div>
            </div>
          </div>
          <p style={{ marginTop: 24, fontSize: 12.5, color: "var(--gray-medium)", lineHeight: 1.85 }}>
            ※ 本表は、一般的な汎用・多機能型の画像検査システム全般との比較を示したものです。特定のメーカー・製品を指すものではありません。機能・価格は各メーカー・機種により異なります。
          </p>
        </div>
      </section>

      <section style={{ background: "var(--gray-bg)" }}>
        <div className="container-narrow reveal">
          <div className="section-label">Safe Operation</div>
          <h2 className="section-title">現場を止めない、安心の運用設計</h2>
          <p className="section-lead">既存設備をそのまま活かし、ラインを止めない「ノンストップ運用」</p>
          <ul className="feature-list">
            <li><strong>後付けOK</strong>：空きスペースに設置可能、大掛かりな工事不要</li>
            <li><strong>ノンストップ運用（赤箱運用）</strong>：不良品検知時もシステムは止まらず、隔離を指示</li>
            <li><strong>複数箇所の同時検査</strong>：1サイクル内で複数項目を一括チェック</li>
            <li><strong>自分たちで育てられる</strong>：専門知識ゼロで現場スタッフが追加学習可能</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <div className="section-label">Case Study</div>
          <h2 className="section-title">導入事例：部品の袋詰め・員数検査</h2>
          <p className="section-lead">置くだけでカウントと良品判定を同時実行。員数ミスがゼロに。</p>
          <div className="before-after">
            <div className="ba-card ba-before">
              <div className="ba-label">Before（課題）</div>
              <ul className="ba-list">
                <li>出荷時の員数不足クレーム</li>
                <li>数え間違いによる戻し作業・ムダ時間</li>
                <li>新人への技術継承の難しさ</li>
              </ul>
            </div>
            <div className="ba-arrow">→</div>
            <div className="ba-card ba-after">
              <div className="ba-label">After（効果）</div>
              <ul className="ba-list">
                <li>「置くだけ」でカウント＋良品判定を同時実行</li>
                <li>専用治具により誰が置いても正しい位置で検査完了</li>
                <li><strong style={{ color: "var(--orange)" }}>不良率 1.31% → 実質 0% を達成</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gray-bg)" }}>
        <div className="container reveal">
          <div className="section-label">How to Start</div>
          <h2 className="section-title">導入の流れ</h2>
          <p className="section-lead">現場診断から治具製作、AI学習サポートまで一貫して伴走します。</p>
          <div className="step-flow">
            <div className="step-card">
              <div className="step-num">STEP 1</div>
              <div className="step-title">お問い合わせ・<br />無料相談</div>
              <div className="step-desc">「ウチに使えるか？」<br />から大歓迎</div>
            </div>
            <div className="step-card">
              <div className="step-num">STEP 2</div>
              <div className="step-title">現場診断・<br />ボトルネック特定</div>
              <div className="step-desc">自動化の最適ポイントを<br />特定</div>
            </div>
            <div className="step-card">
              <div className="step-num">STEP 3</div>
              <div className="step-title">最適プランの<br />ご提案</div>
              <div className="step-desc">レイアウト変更等を<br />含むお見積もり</div>
            </div>
            <div className="step-card">
              <div className="step-num">STEP 4</div>
              <div className="step-title">制作・導入・<br />サポート</div>
              <div className="step-desc">治具製作〜初期学習〜<br />レクチャーまで</div>
            </div>
          </div>
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
