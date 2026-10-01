import { SITE } from "@/lib/site";

/** Nút Zalo nổi — cố định góc phải dưới, luôn đi theo khi kéo lên/xuống trang. */
export default function ZaloFloat() {
  const href = SITE.contact.zalo;
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nhắn Zalo tư vấn miễn phí"
      className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full bg-[#0068FF] py-3 pl-3.5 pr-4 text-sm font-bold text-white shadow-xl shadow-[#0068FF]/40 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#0068FF]/40 [animation-duration:2.4s]" aria-hidden />
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
        <path d="M12 2C6.2 2 1.5 6.1 1.5 11.2c0 2.9 1.5 5.4 3.9 7.1-.1.9-.5 2.2-1.4 3.2-.2.2 0 .6.3.5 1.9-.4 3.4-1.2 4.3-1.8 1.1.3 2.2.5 3.4.5 5.8 0 10.5-4.1 10.5-9.2S17.8 2 12 2z" />
      </svg>
      <span>Nhắn Zalo</span>
    </a>
  );
}
