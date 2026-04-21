import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ページが見つかりません | 有限会社LINABLEキャリア",
  description: "お探しのページは見つかりませんでした。お手数ですが、主要ページからお探しください。",
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        label="404 Not Found"
        title="ページが見つかりません"
        sub="お探しのページは、移動または削除された可能性があります。"
        theme="default"
      />

      <section>
        <div className="container-narrow" style={{ textAlign: "center", padding: "40px 20px" }}>
          <p style={{ lineHeight: 1.9, marginBottom: 40, color: "var(--gray-medium)" }}>
            2026年にウェブサイトをリニューアルしたため、<br />
            以前のURLが変更されている場合があります。<br />
            お手数ですが、下記より目的のページをお探しください。
          </p>

          <div style={{ marginBottom: 56 }}>
            <Link href="/" className="btn-primary">
              <span>TOPへ戻る</span>
              <span className="arrow-icon">→</span>
            </Link>
          </div>

          <div style={{ textAlign: "left", borderTop: "1px solid var(--gray-border)", paddingTop: 32 }}>
            <h4 style={{ marginBottom: 20, textAlign: "center" }}>主なページ</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              <li><Link href="/about/" style={{ display: "block", padding: "12px 16px", borderRadius: 8, background: "var(--cream)" }}>私たちについて</Link></li>
              <li><Link href="/csd/" style={{ display: "block", padding: "12px 16px", borderRadius: 8, background: "var(--cream)" }}>CSD伴走型コンサル</Link></li>
              <li><Link href="/kit/" style={{ display: "block", padding: "12px 16px", borderRadius: 8, background: "var(--cream)" }}>LINABLE Kit I</Link></li>
              <li><Link href="/jig/" style={{ display: "block", padding: "12px 16px", borderRadius: 8, background: "var(--cream)" }}>3Dプリンタ治具DX</Link></li>
              <li><Link href="/chiiki/" style={{ display: "block", padding: "12px 16px", borderRadius: 8, background: "var(--cream)" }}>地域環境整備</Link></li>
              <li><Link href="/cases/" style={{ display: "block", padding: "12px 16px", borderRadius: 8, background: "var(--cream)" }}>導入事例</Link></li>
              <li><Link href="/downloads/" style={{ display: "block", padding: "12px 16px", borderRadius: 8, background: "var(--cream)" }}>ダウンロード資料</Link></li>
              <li><Link href="/contact/" style={{ display: "block", padding: "12px 16px", borderRadius: 8, background: "var(--cream)" }}>お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
