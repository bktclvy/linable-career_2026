import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | 有限会社LINABLEキャリア",
  description: "どんな粒度のご相談でも、お気軽にお寄せください。事業ごとに最適な担当者がご対応いたします。お電話・メール・フォームからどうぞ。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="お問い合わせ"
        sub={<>どんな粒度のご相談でも、お気軽にお寄せください。<br />事業ごとに最適な担当者がご対応いたします。</>}
        theme="default"
      />

      <section>
        <div className="container reveal">
          <div className="contact-methods">
            <div className="contact-method-card">
              <div className="contact-method-icon">📞</div>
              <div className="contact-method-label">お電話で</div>
              <div className="contact-method-value tel">0566-93-1733</div>
              <div className="contact-method-note">受付時間：平日 10:00〜17:00</div>
            </div>
            <div className="contact-method-card">
              <div className="contact-method-icon">✉️</div>
              <div className="contact-method-label">メールで</div>
              <div className="contact-method-value email">info@linable-career.co.jp</div>
              <div className="contact-method-note">3営業日以内にご返信いたします</div>
            </div>
            <div className="contact-method-card highlight">
              <div className="contact-method-icon">📝</div>
              <div className="contact-method-label">フォームから</div>
              <div className="contact-method-value">下記フォームより</div>
              <div className="contact-method-note">事業別に最適な担当者がご返信</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--gray-bg)" }}>
        <div className="container-narrow reveal">
          <div className="section-label">Inquiry Form</div>
          <h2 className="section-title">お問い合わせフォーム</h2>
          <p className="section-lead">
            <span style={{ color: "var(--terracotta)", fontWeight: 700 }}>＊</span> は必須項目です。<br />
            内容を確認のうえ、3営業日以内にご返信いたします。
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
