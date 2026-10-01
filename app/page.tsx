import Link from "next/link";
import { SITE } from "@/lib/site";
import { getService } from "@/lib/services";
import { formatVND } from "@/lib/format";
import FeedbackGallery from "@/components/FeedbackGallery";
import Copy, { glue } from "@/components/Copy";

const STEPS = [
  { n: "1", t: "Chọn gói", d: "Xem trước các gói và chọn gói phù hợp với điều bạn đang quan tâm." },
  { n: "2", t: "Nhắn Facebook / Zalo", d: "Bạn nhắn cho Song Sát Tử Vi để được tư vấn kỹ và chọn gói phù hợp." },
  { n: "3", t: "Xác nhận & xem", d: "Song Sát Tử Vi phản hồi, xác nhận lịch và đồng hành cùng bạn." },
];

/** 2 gói nên xem nhất — đứng đầu, trình bày đầy đủ + đánh vào tâm lý. */
const HERO_PACKS = [
  {
    slug: "tu-vi-toan-dien",
    badge: "👑 GÓI NÊN XEM NHẤT",
    q: "Rối nhiều chuyện cùng lúc, không biết bắt đầu từ đâu?",
    d: "Xem 1 lần — thấy rõ cả bản mệnh, công việc, tiền bạc, tình cảm, gia đạo và đại vận 10 năm. Đỡ sai nhiều năm.",
    bullets: [
      "Bản mệnh gốc — vì sao bạn hay gặp những chuyện này",
      "Đại vận 10 năm — | lúc nên tiến, lúc nên giữ",
      "Hướng đi phù hợp để đỡ sai nhất",
    ],
    cta: "Đặt lịch Tử Vi Toàn Diện",
  },
  {
    slug: "chi-tay-nhan-tuong",
    badge: "🔥 HOT",
    q: "Bạn đã thật sự hiểu con người mình chưa?",
    d: "Chỉ tay, nhân tướng và bài Tây trong một buổi — nhìn ra tính cách, vận mệnh, cơ hội và cả thách thức đang chờ bạn.",
    bullets: [
      "Chỉ tay — hé lộ bức tranh nền của cuộc đời",
      "Nhân tướng — soi rõ con người thật phía sau vẻ ngoài",
      "Bài Tây — đi thẳng vào điều bạn đang băn khoăn nhất",
    ],
    cta: "Đặt lịch Chỉ Tay – Nhân Tướng",
  },
];

/** Các gói còn lại — mỗi thẻ là một câu hỏi đánh vào nỗi băn khoăn thật, dẫn thẳng tới gói. */
const WORRIES = [
  { icon: "🧭", q: "Vì sao người khác đi thuận, còn mình mãi loay hoay?", tag: "Định Vị Cuộc Đời", slug: "dinh-vi-cuoc-doi" },
  { icon: "💖", q: "Tình duyên của mình khi nào gặp đúng người?", tag: "Tình Yêu & Hôn Nhân", slug: "tinh-yeu-hon-nhan" },
  { icon: "💼", q: "Công việc, tiền bạc có đang đi sai hướng?", tag: "Sự Nghiệp – Tài Chính", slug: "su-nghiep-tai-chinh" },
  { icon: "📅", q: "12 tháng tới, tháng nào thuận, tháng nào nên dè chừng?", tag: "Vận Hạn 12 Tháng", slug: "van-han-12-thang" },
  { icon: "🏠", q: "Gia đạo, hôn nhân có đang bền hay tiềm ẩn rạn nứt?", tag: "Gia Đạo – Hôn Nhân", slug: "gia-dao" },
  { icon: "☯", q: "Đang phân vân một quyết định lớn, chọn bên nào mới đúng?", tag: "Kinh Dịch", slug: "kinh-dich" },
  { icon: "🌙", q: "Nhiều điều muốn hỏi cùng lúc, hỏi một lần được không?", tag: "Bói Bài Tổng Hợp", slug: "boi-bai-tong-hop" },
  { icon: "⏳", q: "Chưa chắc giờ sinh của mình, lá số lệch thì sao?", tag: "Dò Giờ Sinh", slug: "do-gio-sinh" },
  { icon: "🏡", q: "Muốn mua nhà, mua đất — khi nào, hướng nào mới hợp?", tag: "Nhà Cửa – Đất Đai", slug: "nha-cua-dat-dai" },
  { icon: "✈️", q: "Có duyên đi xa không, hay chỉ hợp ở lại?", tag: "Xuất Ngoại", slug: "xuat-ngoai" },
  { icon: "📚", q: "Con đường học nào thật sự hợp với năng lực của mình?", tag: "Học Tập & Phát Triển", slug: "hoc-tap-phat-trien" },
  { icon: "👶", q: "Duyên con cái của mình ra sao, năm nào nên lên kế hoạch?", tag: "Sinh Sản – Con Cái", slug: "sinh-san-con-cai" },
];

const TRUST = [
  { icon: "🔒", t: "Bảo mật tuyệt đối", d: "Thông tin của bạn được giữ kín 100%, chỉ dùng cho buổi xem." },
  { icon: "💬", t: "Tư vấn chọn gói miễn phí", d: "Inbox ngay để được tư vấn gói phù hợp, không mất phí." },
  { icon: "✨", t: "Xem 1 lần — đỡ sai nhiều lần", d: "Hiểu tổng thể cuộc đời thay vì xem lẻ từng phần." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — câu hỏi gợi tò mò + ảnh feedback ngay màn hình đầu */}
      <section className="bg-blush relative overflow-hidden">
        <span className="sparkle left-[6%] top-12 text-2xl" aria-hidden>✦</span>
        <span className="sparkle right-[8%] top-24 text-xl [animation-delay:1.2s]" aria-hidden>✦</span>
        <span className="sparkle left-[14%] top-[44%] hidden text-lg [animation-delay:2s] sm:block" aria-hidden>✦</span>
        <span className="sparkle right-[16%] top-[38%] hidden text-2xl [animation-delay:0.6s] sm:block" aria-hidden>✦</span>

        <div className="relative mx-auto max-w-4xl px-4 pb-2 pt-6 text-center sm:px-6 sm:pt-14">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ss-gold-deep/30 bg-white/70 px-3 py-1.5 text-[11px] font-semibold sm:px-4 sm:text-xs tracking-wide text-ss-gold-deep shadow-sm">
            ✦ Tử Vi · Kinh Dịch · Bói Bài · Chỉ Tay ✦
          </span>

          <h1 className="mt-4 font-display text-[1.65rem] font-extrabold leading-[1.2] text-ss-plum text-balance sm:text-5xl">
            <span className="sr-only">Song Sát Tử Vi — </span>
            <Copy text="Bạn có bao giờ tự hỏi:" />{" "}
            <span className="inline-block text-balance">
              vì sao mình cứ{" "}
              <span className="text-rose-gradient">lặp lại những chuyện giống nhau?</span>
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-ss-plum/75 text-balance sm:mt-4 sm:text-lg">
            <Copy text="Câu trả lời nằm ngay trong lá số của bạn." />{" "}
            <Copy text="Song Sát Tử Vi giúp bạn hiểu mình đến tận gốc," />{" "}
            <b className="inline-block font-semibold text-ss-plum">không phán đoán chung chung.</b>
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-7 sm:gap-3">
            <Link
              href="/dat-lich"
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-5 py-3 text-sm font-bold text-white shadow-lg shadow-ss-magenta/30 sm:px-8 sm:py-3.5 sm:text-base transition-transform hover:scale-105"
            >
              Đặt lịch xem ngay
            </Link>
            <Link
              href="/goi-dich-vu"
              className="whitespace-nowrap rounded-full border-2 border-ss-purple/30 bg-white/60 px-5 py-2.5 text-sm font-semibold sm:px-7 sm:py-3.5 sm:text-base text-ss-purple transition-colors hover:bg-white"
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

      </section>

      {/* BẠN ĐANG BĂN KHOĂN ĐIỀU GÌ — 2 gói nên xem đứng đầu */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ss-plum text-balance sm:text-4xl">
            Bạn đang băn khoăn điều gì?
          </h2>
          <p className="mt-2 text-ss-plum/60">
            <Copy text="Chạm vào câu hỏi của bạn — Song Sát Tử Vi sẽ chỉ gói xem phù hợp nhất." />
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {HERO_PACKS.map((h) => {
            const s = getService(h.slug);
            if (!s) return null;
            return (
              <div
                key={h.slug}
                className="bg-mystic relative flex flex-col overflow-hidden rounded-3xl p-6 text-ss-cream shadow-2xl shadow-ss-plum/30 ring-2 ring-ss-gold/70 sm:p-8"
              >
                <span className="mb-4 self-start rounded-full sm:absolute sm:right-5 sm:top-5 sm:mb-0 bg-gradient-to-r from-ss-gold to-ss-gold-deep px-3 py-1 text-[11px] font-extrabold tracking-wide text-ss-plum shadow">
                  {h.badge}
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ss-gold to-ss-gold-deep text-xl shadow-md">
                    {s.icon}
                  </span>
                  <span className="text-xs sm:pr-28 font-bold uppercase tracking-wider text-ss-gold">
                    {s.name}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold leading-snug text-balance sm:text-3xl">
                  {h.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ss-cream/85 sm:text-base">
                  {glue(h.d)}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-ss-cream/90">
                  {h.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-0.5 text-ss-gold">✦</span>
                      <span>
                        <Copy text={b} />
                      </span>
                    </li>
                  ))}
                </ul>
                {s.note && (
                  <p className="mt-4 rounded-2xl bg-white/10 px-3 py-2 text-xs text-ss-gold">
                    🎁 <Copy text={s.note} />
                  </p>
                )}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5">
                  <span className="text-gold-gradient font-display text-3xl font-extrabold">
                    {formatVND(s.price)}
                  </span>
                  <Link
                    href={`/dat-lich?goi=${s.slug}`}
                    className="whitespace-nowrap rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
                  >
                    {h.cta} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center font-display text-lg font-bold text-ss-plum text-balance sm:text-xl">
          Hoặc chọn theo điều bạn đang muốn tỏ tường
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <span className="block font-display text-lg font-bold leading-snug text-ss-plum text-balance">
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
        <div className="mt-8 text-center">
          <Link
            href="/goi-dich-vu"
            className="inline-block rounded-full border border-ss-purple/30 px-6 py-2.5 text-sm font-semibold text-ss-purple transition-colors hover:bg-ss-purple/5"
          >
            Xem tất cả gói →
          </Link>
        </div>
      </section>

      {/* 3 CAM KẾT UY TÍN */}
      <section className="pt-2">
        <div className="relative mx-auto max-w-5xl px-4 pb-12 sm:px-6">
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {TRUST.map((t) => (
              <li
                key={t.t}
                className="bg-mystic relative flex items-start gap-3.5 overflow-hidden rounded-2xl p-4 shadow-xl shadow-ss-plum/25 ring-1 ring-ss-gold/60 sm:flex-col sm:items-center sm:p-5 sm:text-center"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-ss-gold to-ss-gold-deep text-2xl shadow-md ring-2 ring-white/30">
                  {t.icon}
                </span>
                <span className="block">
                  <span className="text-gold-gradient block font-display text-lg font-extrabold leading-snug text-balance">
                    {t.t}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ss-cream/85">
                    <Copy text={t.d} />
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-7 text-center">
            <Link
              href="/dat-lich"
              className="inline-block whitespace-nowrap rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-ss-magenta/30 transition-transform hover:scale-105"
            >
              Đặt lịch ngay — tư vấn miễn phí
            </Link>
          </div>
        </div>
      </section>

      {/* QUY TRÌNH */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-ss-plum text-balance sm:text-4xl">
            Đặt lịch trong 3 bước
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-2xl border border-ss-purple/12 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-ss-purple to-ss-magenta font-display text-xl font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ss-plum">{s.t}</h3>
                <p className="mt-1.5 text-sm text-ss-plum/70"><Copy text={s.d} /></p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.contact.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              💬 Nhắn Zalo tư vấn miễn phí
            </a>
            <a
              href={SITE.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              📘 Nhắn Facebook tư vấn miễn phí
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
            <Copy text="Không chỉ xem — bạn có thể học huyền học bài bản cùng Song Sát Tử Vi, đi từ nền tảng đến ứng dụng thực chiến." />
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
