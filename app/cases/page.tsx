import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "導入事例 | 有限会社LINABLEキャリア",
  description: "実際にLINABLEキャリアの製品・サービスをご導入いただいたお客様の事例をご紹介します。",
};

export default function CasesPage() {
  return (
    <>
      <PageHeader
        label="Case Studies"
        title="導入事例"
        sub={<>実際にLINABLEキャリアの製品・サービスをご導入いただいた<br />お客様の事例をご紹介します。</>}
        theme="default"
      />

      <section>
        <div className="container-narrow reveal">
          <div style={{ textAlign: "center", padding: "100px 20px" }}>
            <div style={{ fontSize: 56, marginBottom: 24 }}>📋</div>
            <h2 style={{ fontSize: "1.8rem", color: "var(--navy)", marginBottom: 16 }}>
              Coming Soon
            </h2>
            <p style={{ fontSize: 15, color: "var(--gray-medium)", lineHeight: 2 }}>
              事例ページを準備中です。しばらくお待ちください。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
