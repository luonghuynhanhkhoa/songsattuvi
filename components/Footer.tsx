import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  const c = SITE.contact;
  const social = [
    { href: c.zalo, label: "Zalo", show: c.zalo && c.zalo !== "#" },
    { href: c.messenger, label: "Messenger", show: c.messenger && c.messenger !== "#" },
    { href: c.fanpage, label: "Fanpage", show: c.fanpage && c.fanpage !== "#" },
  ].filter((s) => s.show);

  return (
    <footer className="bg-mystic mt-20 text-ss-cream/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-ss-purple to-ss-magenta text-lg">
              🐰
            </span>
            <span className="font-display text-lg font-bold text-ss-cream">
              Song Sát Tử Vi
            </span>
          </div>
          <p className="mt-3 text-sm text-ss-cream/70">{SITE.tagline}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ss-gold">
            Khám phá
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/goi-dich-vu" className="hover:text-ss-gold">Gói dịch vụ</Link></li>
            <li><Link href="/dat-lich" className="hover:text-ss-gold">Đặt lịch xem</Link></li>
            <li><Link href="/hoc-huyen-hoc" className="hover:text-ss-gold">Học Huyền Học</Link></li>
            <li>
              <a href={SITE.feedbackUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ss-gold">
                Feedback khách hàng
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ss-gold">
            Kết nối
          </h4>
          {social.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ss-gold">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-ss-cream/50">
              (Đang cập nhật kênh liên hệ)
            </p>
          )}
          {c.hotline && (
            <p className="mt-3 text-sm">
              Hotline: <span className="font-semibold text-ss-gold">{c.hotline}</span>
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-ss-cream/50">
        © {new Date().getFullYear()} Song Sát Tử Vi · Hiểu mình — Nắm vận — Chủ động thay đổi cuộc sống
      </div>
    </footer>
  );
}
