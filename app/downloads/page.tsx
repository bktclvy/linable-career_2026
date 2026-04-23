import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ダウンロード資料 | 有限会社LINABLEキャリア",
  description: "事業ごとのサービス案内資料をPDFでダウンロードいただけます。社内検討・上司への共有などにご活用ください。",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        label="Downloads"
        title="ダウンロード資料"
        sub={<>事業ごとのサービス案内資料を、PDFでダウンロードいただけます。<br />社内検討・上司への共有などに、ご活用ください。</>}
        theme="default"
      />

      <section>
        <div className="container reveal">
          <div className="downloads-grid">
            <div className="dl-card">
              <div className="dl-card-icon">📄</div>
              <div className="dl-card-tag">Kit I</div>
              <h3 className="dl-card-title">LINABLE Kit I<br />製造業向け 提案書</h3>
              <p className="dl-card-desc">中小製造業のための「脱・目視 AI検査機」。導入効果と費用対効果がわかる詳細資料です。</p>
              <div className="dl-card-meta">
                <span>PDF</span>
                <span>6.8MB</span>
              </div>
              <a href="/linable-kit1-mfg.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary dl-card-btn"><span>資料を見る</span><span className="arrow-icon">→</span></a>
            </div>

            <div className="dl-card">
              <div className="dl-card-icon">📄</div>
              <div className="dl-card-tag" style={{ background: "var(--terracotta)" }}>Kit I</div>
              <h3 className="dl-card-title">LINABLE Kit I<br />福祉事業所向け 提案書</h3>
              <p className="dl-card-desc">就労継続支援A型・B型事業所のための「現場の相棒AI」。工賃アップにつながる導入提案です。</p>
              <div className="dl-card-meta">
                <span>PDF</span>
                <span>2.5MB</span>
              </div>
              <a href="/linable-kit1-welfare.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary dl-card-btn" style={{ background: "var(--terracotta)" }}><span>資料を見る</span><span className="arrow-icon">→</span></a>
            </div>

            <div className="dl-card dl-card-soon">
              <div className="dl-card-icon">📄</div>
              <div className="dl-card-tag" style={{ background: "var(--teal)" }}>CSDコンサル</div>
              <h3 className="dl-card-title">CSD伴走型コンサル<br />サービス案内</h3>
              <p className="dl-card-desc">採用から定着まで、CSDが貴社の現場に入り込む支援サービスの全体像と価格体系。</p>
              <div className="dl-card-soon-badge">Coming Soon</div>
            </div>

            <div className="dl-card dl-card-soon">
              <div className="dl-card-icon">📄</div>
              <div className="dl-card-tag" style={{ background: "var(--forest)" }}>地域環境整備</div>
              <h3 className="dl-card-title">地域環境整備<br />サービス案内</h3>
              <p className="dl-card-desc">草刈り・清掃・伐採など、対応業務とご依頼の流れがわかる資料です。</p>
              <div className="dl-card-soon-badge">Coming Soon</div>
            </div>

            <div className="dl-card dl-card-soon">
              <div className="dl-card-icon">📄</div>
              <div className="dl-card-tag" style={{ background: "var(--gold-deep)" }}>3D治具DX</div>
              <h3 className="dl-card-title">3DCAD研修<br />導入編</h3>
              <p className="dl-card-desc">3DCADの基礎を学び、現場で使える形に落とし込む「導入編」のご案内資料です。</p>
              <div className="dl-card-soon-badge">Coming Soon</div>
            </div>

            <div className="dl-card dl-card-soon">
              <div className="dl-card-icon">📄</div>
              <div className="dl-card-tag" style={{ background: "var(--gold-deep)" }}>3D治具DX</div>
              <h3 className="dl-card-title">3DCAD研修<br />基礎編</h3>
              <p className="dl-card-desc">実践的に手を動かしながら、自社の治具設計までつなげていく「基礎編」のご案内資料です。</p>
              <div className="dl-card-soon-badge">Coming Soon</div>
            </div>

            <div className="dl-card dl-card-soon">
              <div className="dl-card-icon">📄</div>
              <div className="dl-card-tag" style={{ background: "var(--gold-deep)" }}>3D治具DX</div>
              <h3 className="dl-card-title">あったらいいな<br />勉強会のご案内</h3>
              <p className="dl-card-desc">現場の「あったらいいな」を持ち寄り、一緒に考える地域コミュニティ活動のご案内資料です。</p>
              <div className="dl-card-soon-badge">Coming Soon</div>
            </div>

            <div className="dl-card dl-card-soon">
              <div className="dl-card-icon">📄</div>
              <div className="dl-card-tag" style={{ background: "var(--navy)" }}>会社案内</div>
              <h3 className="dl-card-title">有限会社LINABLEキャリア<br />会社案内</h3>
              <p className="dl-card-desc">経営理念、3事業の概要、CSDメソッドなど、会社全体をご紹介する総合資料です。</p>
              <div className="dl-card-soon-badge">Coming Soon</div>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: 40, fontSize: 13, color: "var(--gray-medium)" }}>
            ※ 資料は順次公開予定です。お急ぎの方は<Link href="/contact" style={{ color: "var(--sage)", textDecoration: "underline" }}>お問い合わせ</Link>より直接お送りいたします。
          </p>
        </div>
      </section>
    </>
  );
}
