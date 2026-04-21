import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3Dプリンタ治具DX | 有限会社LINABLEキャリア",
  description: "現場の「あったらいいな」をカタチにする。高価で納期の長かった治具を、3DCADと3Dプリンタで低コスト・短納期で。設計・製作サービス、3DCAD研修、あったらいいな会。",
};

export default function JigPage() {
  return (
    <>
      <PageHeader
        label="3D Jig DX"
        title="3Dプリンタ治具DX"
        sub={<>〜 現場の「あったらいいな」を、カタチにする 〜<br />高価で納期の長かった治具を、3DCADと3Dプリンタで低コスト・短納期で。</>}
        theme="default"
      />

      <section>
        <div className="container reveal">
          <div className="section-label">3 Approaches</div>
          <h2 className="section-title">お客様の状況に合わせた、<br />3つのアプローチ</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-number">Approach 01</div>
              <h4 className="approach-title">設計・製作サービス</h4>
              <div className="approach-lead">「まずは、目の前の課題を解決したい」という企業様へ。</div>
              <p className="approach-body">貴社の業務にフィットしたオーダーメイドの治具をご提供。現場のヒアリングから設計、3Dプリンタでの試作・製作まで一貫して対応します。</p>
            </div>
            <div className="approach-card">
              <div className="approach-number">Approach 02</div>
              <h4 className="approach-title">人材育成：3DCAD研修</h4>
              <div className="approach-lead">「従業員のスキルアップを図りたい」という企業様へ。</div>
              <p className="approach-body">治具設計のスキルを貴社内に育成し、自社の力で解決できる「内製化」を実現します。導入編・基礎編の2コースをご用意。</p>
            </div>
            <div className="approach-card">
              <div className="approach-number">Approach 03</div>
              <h4 className="approach-title">コミュニティ：あったらいいな会</h4>
              <div className="approach-lead">「他社の事例から学びたい」という企業様へ。</div>
              <p className="approach-body">3ヶ月に1回開催。Fusion未導入・他CAD利用の方もOK。「見るだけ」「話すだけ」の参加も歓迎しています。</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gray-bg)" }}>
        <div className="container reveal">
          <div className="section-label">Training</div>
          <h2 className="section-title">3DCAD導入・基礎研修</h2>
          <p className="section-lead">人材開発支援助成金の活用で、手ごろな費用での受講が可能です。</p>
          <div className="two-col">
            <div className="two-col-card">
              <h4>導入編</h4>
              <p>3DCADが初めての方向け。<br />Fusion（Autodesk社）の基本操作から学びます。</p>
            </div>
            <div className="two-col-card highlight">
              <h4>基礎編</h4>
              <p>導入編修了者向け。<br />実際の治具設計に必要な応用スキルを習得します。</p>
            </div>
          </div>
          <p style={{ marginTop: 32, fontSize: 13.5, color: "var(--gray-medium)", textAlign: "center" }}>
            ※ 使用ソフトはAutodesk社の<strong style={{ color: "var(--navy)" }}>Fusion</strong>。商用利用でなければ最大1年間の無償利用が可能です。
          </p>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <div className="section-label">Community</div>
          <h2 className="section-title">「あったらいいな」持ち寄り会</h2>
          <p className="section-lead">
            会社の不便や工夫をヒントに、自社で使える治具や補助具を3DCADで設計・試作する——<br />
            そのヒントを、業種の垣根を越えて交換する場です。
          </p>

          <div className="community-purposes">
            <div className="community-purpose">
              <div className="icon">🖥️</div>
              <h5>3DCADの社内展開<br />のきっかけをつくる</h5>
            </div>
            <div className="community-purpose">
              <div className="icon">⚙️</div>
              <h5>現場の課題を<br />&quot;設計の力&quot;で解決する</h5>
            </div>
            <div className="community-purpose">
              <div className="icon">↗️</div>
              <h5>企業間での知見共有・<br />横展開を促す</h5>
            </div>
          </div>

          <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--sage-deep) 100%)", color: "var(--white)", padding: "48px 40px", borderRadius: 20, marginTop: 48, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -60, right: -50, width: 260, height: 260, background: "var(--sage)", opacity: 0.2, borderRadius: "50%", filter: "blur(60px)" }} />
            <h3 style={{ fontSize: 22, marginBottom: 20, position: "relative", color: "var(--white)" }}>参加のしかた</h3>
            <ul className="feature-list" style={{ position: "relative" }}>
              <li style={{ color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}><strong style={{ color: "var(--sage-light)" }}>Fusion未導入でもOK。</strong>他の3DCADをお使いでもOK。</li>
              <li style={{ color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}><strong style={{ color: "var(--sage-light)" }}>「見るだけ」「話すだけ」の参加も歓迎</strong>。</li>
              <li style={{ color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>作ったものを3Dプリントしたい場合は、リネーブルでの3Dプリントや外部連携もご相談可能です。</li>
            </ul>
          </div>

          <div style={{ background: "var(--cream)", borderRadius: 14, padding: "28px 32px", marginTop: 28 }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 14, fontSize: 16 }}>主催・協力</h4>
            <p style={{ fontSize: 13.5, lineHeight: 2 }}>
              <strong>運営</strong>：有限会社LINABLEキャリア ／ NPO法人リネーブル・若者セーフティネット<br />
              <strong>企画協力</strong>：有限会社ハチスカテクノ<br />
              <strong>技術協力</strong>：株式会社モビテック　兼子崇文 氏
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section-outer" style={{ background: "var(--gray-bg)" }}>
        <div className="container">
          <div className="cta-block reveal">
            <h2 className="cta-title">3Dプリンタ治具DXのご相談は、お気軽に。</h2>
            <p className="cta-sub">まずは無料相談から承ります。</p>
            <div className="cta-voices">
              <span className="cta-voice">「ウチで使える治具ができるか？」</span>
              <span className="cta-voice">「社内に3DCAD人材を育てたい」</span>
              <span className="cta-voice">「次回の"あったらいいな会"に参加したい」</span>
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
