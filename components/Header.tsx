"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";
import Brand from "@/components/Brand";

const NAV = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/goi-dich-vu", label: "Gói dịch vụ" },
  { href: "/dat-lich", label: "Đặt lịch" },
  { href: "/hoc-huyen-hoc", label: "Học Huyền Học" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkCls = (href: string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `text-sm font-medium transition-colors ${
      active ? "text-ss-magenta" : "text-ss-plum/80 hover:text-ss-purple"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ss-purple/10 bg-ss-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo-ss.jpg"
            alt="Song Sát Tử Vi"
            width={44}
            height={44}
            priority
            draggable={false}
            className="logo-protected h-11 w-11 rounded-full object-cover ring-1 ring-ss-gold/40"
          />
          <Brand onLight className="font-display text-lg font-bold leading-tight" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={linkCls(n.href)}>
              {n.label}
            </Link>
          ))}
          <a
            href={SITE.feedbackUrl}
            target={SITE.feedbackUrl.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-sm font-medium text-ss-plum/80 transition-colors hover:text-ss-purple"
          >
            Feedback
          </a>
          <Link
            href="/dat-lich"
            className="rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            Đặt lịch ngay
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ss-plum md:hidden"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-ss-purple/10 bg-ss-cream px-4 py-3 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 ${linkCls(n.href)}`}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={SITE.feedbackUrl}
            target={SITE.feedbackUrl.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-ss-plum/80"
          >
            Feedback
          </a>
          <Link
            href="/dat-lich"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Đặt lịch ngay
          </Link>
        </nav>
      )}
    </header>
  );
}
