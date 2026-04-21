"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "TOP", href: "/" },
  { label: "私たちについて", href: "/about" },
  { label: "CSD伴走型コンサル", href: "/csd" },
  { label: "LINABLE Kit I", href: "/kit" },
  { label: "3Dプリンタ治具DX", href: "/jig" },
  { label: "地域環境整備", href: "/chiiki" },
  { label: "導入事例", href: "/cases" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header>
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.svg" alt="有限会社LINABLEキャリア" height={44} style={{ display: "block" }} />
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="メニュー"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}
