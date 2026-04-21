"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    try {
      const res = await fetch("/send.php", { method: "POST", body: new FormData(form) });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        alert(data.message || "送信に失敗しました。");
        setPending(false);
      }
    } catch {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
      setPending(false);
    }
  }

  if (success) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ fontSize: "3rem", color: "var(--sage)", marginBottom: 16 }}>✓</div>
        <h3 style={{ fontSize: "1.4rem", marginBottom: 12 }}>送信が完了しました</h3>
        <p style={{ color: "var(--gray-medium)", lineHeight: 1.8 }}>
          3営業日以内にご連絡いたします。<br />
          お急ぎの場合はお電話でもお気軽にどうぞ。
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {/* お問い合わせの種類 */}
      <div className="form-group">
        <label className="form-label">お問い合わせの種類 <span className="required">＊</span></label>
        <p className="form-help">該当する事業を1つお選びください。担当者が振り分けられます。</p>
        <div className="form-radio-grid">
          {[
            { value: "kit", icon: "⚙️", title: "製造業DX：LINABLE Kit I", desc: "AI画像検査システムについて" },
            { value: "jig", icon: "🛠️", title: "製造業DX：3Dプリンタ治具DX", desc: "治具設計・製作・3DCAD研修・あったらいいな会" },
            { value: "csd", icon: "🤝", title: "CSD伴走型コンサル", desc: "採用・定着・人材育成について" },
            { value: "chiiki", icon: "🌿", title: "地域環境整備", desc: "草刈り・清掃・伐採などのご依頼" },
            { value: "cases", icon: "📊", title: "導入事例について", desc: "事例の詳細・取材・問い合わせ" },
            { value: "other", icon: "💬", title: "その他・全般", desc: "取材・採用・パートナーシップなど" },
          ].map((item) => (
            <label key={item.value} className="form-radio-card">
              <input type="radio" name="category" value={item.value} required />
              <div className="radio-card-content">
                <div className="radio-card-icon">{item.icon}</div>
                <div>
                  <div className="radio-card-title">{item.title}</div>
                  <div className="radio-card-desc">{item.desc}</div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* ご相談の段階 */}
      <div className="form-group">
        <label className="form-label">ご相談の段階 <span className="optional">（任意）</span></label>
        <p className="form-help">現在のご状況を教えてください。最適な担当者・資料をお送りします。</p>
        <div className="form-stage-row">
          {[
            { value: "research", label: "まずは情報収集" },
            { value: "considering", label: "具体的に検討中" },
            { value: "quote", label: "見積もりが欲しい" },
            { value: "urgent", label: "すぐに相談したい" },
          ].map((item) => (
            <label key={item.value} className="form-stage-pill">
              <input type="radio" name="stage" value={item.value} />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* お名前・会社名 */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="form-name">お名前 <span className="required">＊</span></label>
          <input type="text" id="form-name" name="name" className="form-input" placeholder="山田 太郎" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="form-company">会社名・団体名 <span className="optional">（任意）</span></label>
          <input type="text" id="form-company" name="company" className="form-input" placeholder="株式会社○○" />
        </div>
      </div>

      {/* メール・電話 */}
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="form-email">メールアドレス <span className="required">＊</span></label>
          <input type="email" id="form-email" name="email" className="form-input" placeholder="example@example.com" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="form-tel">電話番号 <span className="optional">（任意）</span></label>
          <input type="tel" id="form-tel" name="tel" className="form-input" placeholder="0566-00-0000" />
        </div>
      </div>

      {/* お問い合わせ内容 */}
      <div className="form-group">
        <label className="form-label" htmlFor="form-message">お問い合わせ内容 <span className="required">＊</span></label>
        <p className="form-help">具体的なご相談内容、現場の状況、ご質問などをご記入ください。</p>
        <textarea
          id="form-message"
          name="message"
          className="form-textarea"
          rows={7}
          placeholder={"例：\n・現在、検査工程に○名が常駐しており、自動化を検討しています\n・若手社員の定着率が悪く、何か改善策はないか\n・工場敷地の年2回の草刈りをお願いしたい  など"}
          required
        />
      </div>

      {/* どこで知ったか */}
      <div className="form-group">
        <label className="form-label">当社をどこでお知りになりましたか？ <span className="optional">（任意）</span></label>
        <div className="form-stage-row">
          {[
            { value: "search", label: "検索エンジン" },
            { value: "referral", label: "知人の紹介" },
            { value: "event", label: "イベント・展示会" },
            { value: "sns", label: "SNS・記事" },
            { value: "other", label: "その他" },
          ].map((item) => (
            <label key={item.value} className="form-stage-pill">
              <input type="radio" name="source" value={item.value} />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* プライバシー同意 */}
      <div className="form-group form-consent">
        <label className="form-checkbox">
          <input type="checkbox" name="consent" required />
          <span className="checkbox-mark" />
          <span className="checkbox-label">
            <Link href="/privacy" style={{ color: "var(--sage)", textDecoration: "underline" }}>プライバシーポリシー</Link>に同意します <span className="required">＊</span>
          </span>
        </label>
      </div>

      {/* 送信ボタン */}
      <div className="form-submit-wrap">
        <button type="submit" className="btn-primary form-submit" disabled={pending}>
          <span>{pending ? "送信中..." : "この内容で送信する"}</span>
          {!pending && <span className="arrow-icon">→</span>}
        </button>
        <p className="form-submit-note">
          送信後、3営業日以内にご返信いたします。<br />
          お急ぎの場合は、お電話でもお気軽にどうぞ。
        </p>
      </div>
    </form>
  );
}
