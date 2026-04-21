import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <img src="/logo-white.svg" alt="有限会社LINABLEキャリア" height={40} style={{ display: "block", marginBottom: 16 }} />
          <p className="footer-brand-desc">
            一人ひとりの得意を活かし、最新のデジタル技術で環境を整え、すべての人が働きやすい社会を創ります。
          </p>
          <p className="footer-brand-tagline">つながりが、人を動かす。</p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link href="/kit">LINABLE Kit I</Link></li>
            <li><Link href="/jig">3Dプリンタ治具DX</Link></li>
            <li><Link href="/csd">CSD伴走型コンサル</Link></li>
            <li><Link href="/chiiki">地域環境整備</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link href="/about">私たちについて</Link></li>
            <li><Link href="/cases">導入事例</Link></li>
            <li><Link href="/downloads">ダウンロード資料</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
            <li><a href="https://linable.or.jp/" target="_blank" rel="noopener noreferrer">NPO法人リネーブル</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <ul>
            <li><Link href="/privacy">プライバシーポリシー</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 有限会社LINABLEキャリア All Rights Reserved.
      </div>
    </footer>
  );
}
