import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import Brand from "@/components/Brand";
import Copy from "@/components/Copy";

export default function Footer() {
  const c = SITE.contact;
  const social = [
    { href: c.facebook, label: "Facebook", show: !!c.facebook },
    { href: c.zalo, label: "Zalo", show: !!c.zalo },
  ].filter((s) => s.show);

  return (
    <footer className="bg-mystic mt-20 text-ss-cream/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-ss.jpg"
              alt="Song Sát Tử Vi"
              width={44}
              height={44}
              draggable={false}
              className="logo-protected h-11 w-11 rounded-full object-cover ring-1 ring-ss-gold/40"
            />
            <Brand className="font-display text-lg font-bold" />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ss-cream/70">
            {SITE.tagline.split("·").flatMap((part, i) =>
              i === 0
                ? [
                    <span key={i} className="whitespace-nowrap">
                      {part.trim()}
                    </span>,
                  ]
                : [
                    <span key={`sep-${i}`} className="text-ss-gold/50">
                      {" · "}
                    </span>,
                    <span key={i} className="whitespace-nowrap">
                      {part.trim()}
                    </span>,
                  ]
            )}
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ss-gold">
            Khám phá
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/gioi-thieu" className="hover:text-ss-gold">Giới thiệu</Link></li>
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

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-ss-cream/50">
        <Copy text={`© ${new Date().getFullYear()} Song Sát Tử Vi · Hiểu mình — Nắm vận — Chủ động thay đổi cuộc sống`} />
      </div>
    </footer>
  );
}
