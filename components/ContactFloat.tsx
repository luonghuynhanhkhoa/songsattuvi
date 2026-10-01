import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Cụm nút liên hệ nổi — cố định góc phải dưới, luôn đi theo khi kéo lên/xuống trang:
 * "Đặt lịch ngay" (trang đặt lịch) + Facebook + Zalo.
 */
export default function ContactFloat() {
  const { facebook, zalo } = SITE.contact;
  const pill =
    "flex items-center gap-2 rounded-full py-2.5 pl-3 pr-4 text-sm font-bold text-white shadow-xl transition-transform hover:scale-105";

  return (
    <div className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <Link
        href="/dat-lich"
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-ss-magenta/40 ring-2 ring-white/70 transition-transform hover:scale-105"
      >
        <span aria-hidden>📅</span>
        Đặt lịch ngay
      </Link>

      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn Facebook"
          className={`${pill} bg-[#1877F2] shadow-[#1877F2]/40`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
            <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
          </svg>
          Facebook
        </a>
      )}

      {zalo && (
        <a
          href={zalo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nhắn Zalo"
          className={`${pill} bg-[#0068FF] shadow-[#0068FF]/40`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
            <path d="M12 2C6.2 2 1.5 6.1 1.5 11.2c0 2.9 1.5 5.4 3.9 7.1-.1.9-.5 2.2-1.4 3.2-.2.2 0 .6.3.5 1.9-.4 3.4-1.2 4.3-1.8 1.1.3 2.2.5 3.4.5 5.8 0 10.5-4.1 10.5-9.2S17.8 2 12 2z" />
          </svg>
          Zalo
        </a>
      )}
    </div>
  );
}
