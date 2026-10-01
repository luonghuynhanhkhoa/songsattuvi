import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import FeedbackGallery from "@/components/FeedbackGallery";

const STEPS = [
  { n: "1", t: "Chọn gói", d: "Xem trước các gói và chọn gói phù hợp với điều bạn đang quan tâm." },
  { n: "2", t: "Nhắn Facebook / Zalo", d: "Bạn nhắn cho Song Sát Tử Vi để được tư vấn kỹ và chọn gói phù hợp." },
  { n: "3", t: "Xác nhận & xem", d: "Song Sát Tử Vi phản hồi, xác nhận lịch và đồng hành cùng bạn." },
];

/** Những câu hỏi "đập vào nhu cầu" — mỗi thẻ dẫn thẳng tới gói phù hợp. */
const WORRIES = [
  { icon: "🧭", q: "Vì sao người khác đi thuận, còn mình mãi loay hoay?", tag: "Định vị cuộc đời", slug: "dinh-vi-cuoc-doi" },
  { icon: "💖", q: "Tình duyên của mình khi nào gặp đúng người?", tag: "Tình yêu & hôn nhân", slug: "tu-vi-le" },
  { icon: "💼", q: "Công việc, tiền bạc có đang đi sai hướng?", tag: "Sự nghiệp & tài chính", slug: "tu-vi-le" },
  { icon: "📅", q: "Năm nay vận hạn của mình ra sao?", tag: "Vận hạn 12 tháng", slug: "van-han-12-thang" },
  { icon: "🏠", q: "Nhà cửa, gia đạo có đang cản vận?", tag: "Gia đạo", slug: "gia-dao" },
  { icon: "🔮", q: "Rối nhiều mặt, không biết bắt đầu từ đâu?", tag: "Tử Vi Toàn Diện", slug: "tu-vi-toan-dien" },
];

const TRUST = [
  { icon: "🔒", t: "Bảo mật tuyệt đối" },
  { icon: "💬", t: "Tư vấn chọn gói miễn phí" },
  { icon: "✨", t: "Xem 1 lần — đỡ sai nhiều lần" },
];

export default function HomePage() {
  const featured = SERVICES.filter((s) => s.featured);

  return (
    <>
      {/* HERO — câu hỏi gợi tò mò + ảnh feedback ngay màn hình đầu */}
      <section className="bg-blush relative overflow-hidden">
        <span className="sparkle left-[6%] top-12 text-2xl" aria-hidden>✦</span>
        <span className="sparkle right-[8%] top-24 text-xl [animation-delay:1.2s]" aria-hidden>✦</span>
        <span className="sparkle left-[14%] top-[44%] hidden text-lg [animation-delay:2s] sm:block" aria-hidden>✦</span>
        <span className="sparkle right-[16%] top-[38%] hidden text-2xl [animation-delay:0.6s] sm:block" aria-hidden>✦</span>

        <div className="relative mx-auto max-w-4xl px-4 pb-2 pt-6 text-center sm:px-6 sm:pt-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-ss-gold-deep/30 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-ss-gold-deep shadow-sm">
            ✦ Tử Vi · Kinh Dịch · Bói Bài · Chỉ Tay ✦
          </span>

          <h1 className="mt-4 font-display text-[1.65rem] font-extrabold leading-[1.2] text-ss-plum text-balance sm:text-5xl">
            <span className="sr-only">Song Sát Tử Vi — </span>
            Bạn có bao giờ tự hỏi: vì sao mình cứ{" "}
            <span className="text-rose-gradient">lặp lại những chuyện giống nhau?</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-ss-plum/75 text-balance sm:mt-4 sm:text-lg">
            Câu trả lời nằm ngay trong lá số của bạn. Song Sát Tử Vi giúp bạn
            hiểu mình đến tận gốc — <b className="font-semibold text-ss-plum">không phán đoán chung chung</b>.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2.5 sm:mt-7 sm:gap-3">
            <Link
              href="/dat-lich"
              className="rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-5 py-3 text-sm font-bold text-white shadow-lg shadow-ss-magenta/30 sm:px-8 sm:py-3.5 sm:text-base transition-transform hover:scale-105"
            >
              Đặt lịch xem ngay
            </Link>
            <Link
              href="/goi-dich-vu"
              className="rounded-full border-2 border-ss-purple/30 bg-white/60 px-5 py-2.5 text-sm font-semibold sm:px-7 sm:py-3.5 sm:text-base text-ss-purple transition-colors hover:bg-white"
            >
              Xem bảng giá
            </Link>
          </div>

        </div>

        {/* Ảnh cảm nhận khách — đặt ngay trong màn hình đầu */}
        <FeedbackGallery
          className="pb-8 pt-5"
          title="Khách nói gì sau buổi xem?"
          subtitle="Phản hồi thật — bấm vào ảnh để xem thêm trên TikTok."
        />

        <div className="relative mx-auto max-w-4xl px-4 pb-10 text-center sm:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-ss-plum/75">
            {TRUST.map((t) => (
              <li key={t.t} className="flex items-center gap-1.5">
                <span aria-hidden>{t.icon}</span>
                {t.t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BẠN ĐANG BĂN KHOĂN ĐIỀU GÌ */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ss-plum text-balance sm:text-4xl">
            Bạn đang băn khoăn điều gì?
          </h2>
          <p className="mt-2 text-ss-plum/60">
            Chạm vào câu hỏi của bạn — Song Sát Tử Vi sẽ chỉ gói xem phù hợp nhất.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORRIES.map((w) => (
            <Link
              key={w.q}
              href={`/dat-lich?goi=${w.slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-ss-purple/12 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-ss-magenta/40 hover:shadow-xl"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ss-blush text-2xl">
                {w.icon}
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-bold leading-snug text-ss-plum">
                  {w.q}
                </span>
                <span className="mt-1.5 block text-xs font-semibold uppercase tracking-wide text-ss-magenta">
                  {w.tag}
                </span>
                <span className="mt-2 inline-block text-sm font-semibold text-ss-purple transition-transform group-hover:translate-x-1">
                  Xem ngay →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* GÓI NỔI BẬT */}
      <section className="bg-gradient-to-b from-ss-blush/60 to-transparent py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-ss-plum sm:text-4xl">
              Gói được chọn nhiều nhất
            </h2>
            <p className="mt-2 text-ss-plum/60">
              Chọn gói phù hợp với điều bạn đang muốn tỏ tường.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/goi-dich-vu"
              className="inline-block rounded-full border border-ss-purple/30 px-6 py-2.5 text-sm font-semibold text-ss-purple transition-colors hover:bg-ss-purple/5"
            >
              Xem tất cả gói →
            </Link>
          </div>
        </div>
      </section>

      {/* QUY TRÌNH */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-ss-plum sm:text-4xl">
            Đặt lịch trong 3 bước
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-2xl border border-ss-purple/12 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-ss-purple to-ss-magenta font-display text-xl font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ss-plum">{s.t}</h3>
                <p className="mt-1.5 text-sm text-ss-plum/70">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={SITE.contact.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              💬 Nhắn Zalo tư vấn miễn phí
            </a>
          </div>
        </div>
      </section>

      {/* HỌC HUYỀN HỌC */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="bg-mystic relative overflow-hidden rounded-3xl px-6 py-12 text-center text-ss-cream sm:px-12">
          <div className="text-4xl">🎓</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Muốn tự mình <span className="text-gold-gradient">luận giải</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ss-cream/80">
            Không chỉ xem — bạn có thể học huyền học bài bản cùng Song Sát Tử Vi, đi từ nền
            tảng đến ứng dụng thực chiến.
          </p>
          <Link
            href="/hoc-huyen-hoc"
            className="mt-7 inline-block rounded-full bg-gradient-to-r from-ss-gold to-ss-gold-deep px-7 py-3 text-sm font-bold text-ss-plum shadow-lg transition-transform hover:scale-105"
          >
            Khám phá khoá học →
          </Link>
        </div>
      </section>
    </>
  );
}
