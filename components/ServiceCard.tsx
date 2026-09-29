import Link from "next/link";
import { formatVND } from "@/lib/format";
import type { Service } from "@/lib/services";

const BADGE_CLS: Record<string, string> = {
  BEST: "bg-ss-gold text-ss-plum",
  "MỚI": "bg-ss-magenta text-white",
};

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-ss-purple/12 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-ss-magenta/40 hover:shadow-xl">
      {s.badge && (
        <span
          className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide ${
            BADGE_CLS[s.badge] ?? "bg-ss-purple text-white"
          }`}
        >
          {s.badge}
        </span>
      )}

      <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-ss-purple/10 to-ss-magenta/10 text-2xl">
        {s.icon}
      </div>

      <h3 className="font-display text-xl font-bold text-ss-plum">{s.name}</h3>
      <p className="mt-1 text-sm text-ss-plum/60">{s.tagline}</p>

      <ul className="mt-4 flex-1 space-y-1.5 text-sm text-ss-plum/80">
        {s.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-0.5 text-ss-magenta">✦</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-ss-purple/10 pt-4">
        <span className="text-gold-gradient font-display text-2xl font-extrabold">
          {formatVND(s.price)}
        </span>
        <Link
          href={`/dat-lich?goi=${s.slug}`}
          className="rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-4 py-2 text-sm font-semibold text-white shadow transition-transform group-hover:scale-105"
        >
          Đặt lịch
        </Link>
      </div>
    </div>
  );
}
