import { FEEDBACK_IMAGES } from "@/lib/feedback";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SITE } from "@/lib/site";
import Copy from "@/components/Copy";

/**
 * Khu "Cảm nhận khách hàng" — băng chuyền CHẠY NGANG tự động.
 * - Có ảnh trong lib/feedback.ts -> chạy băng ảnh feedback thật (bấm mở TikTok).
 * - Chưa có ảnh -> chạy băng các trích dẫn (chữ) để khu vẫn sống động.
 * Rê chuột để tạm dừng. Danh sách được render 2 lần để vòng lặp mượt (translateX -50%).
 */
export default function FeedbackGallery({
  title = "Cảm nhận khách hàng",
  subtitle = "Những phản hồi thật từ khách đã được Song Sát Tử Vi đồng hành.",
  className = "py-16",
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const hasImages = FEEDBACK_IMAGES.length > 0;
  const tiktok = SITE.feedbackUrl;

  const renderCards = (copy: string) =>
    hasImages
      ? FEEDBACK_IMAGES.map((src, i) => (
          <a
            key={`${copy}-img-${i}`}
            href={tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/feedback/${src}`}
              alt={`Cảm nhận khách hàng ${i + 1}`}
              draggable={false}
              className="logo-protected h-64 w-auto rounded-2xl border border-ss-purple/12 object-cover shadow-md sm:h-80"
            />
          </a>
        ))
      : TESTIMONIALS.map((t, i) => (
          <figure
            key={`${copy}-txt-${i}`}
            className="flex w-[290px] shrink-0 flex-col rounded-2xl border border-ss-purple/12 bg-white p-5 shadow-sm"
          >
            <div className="text-ss-gold">
              {"★".repeat(t.stars)}
              <span className="text-ss-purple/20">{"★".repeat(5 - t.stars)}</span>
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ss-plum/80">
              “<Copy text={t.quote} />”
            </blockquote>
            <figcaption className="mt-4 border-t border-ss-purple/10 pt-3">
              <div className="font-display text-sm font-bold text-ss-plum">{t.name}</div>
              <div className="text-xs text-ss-magenta">{t.service}</div>
            </figcaption>
          </figure>
        ));

  return (
    <section className={`overflow-hidden ${className}`}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-ss-plum sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 text-ss-plum/60">
          <Copy text={subtitle} />
        </p>
      </div>

      <div className="marquee mt-6 sm:mt-10">
        <div className="marquee-track">
          {renderCards("a")}
          {renderCards("b")}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href={tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ss-purple/30 px-6 py-2.5 text-sm font-semibold text-ss-purple transition-colors hover:bg-ss-purple/5"
        >
          Xem tất cả cảm nhận trên TikTok →
        </a>
      </div>
    </section>
  );
}
