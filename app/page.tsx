import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

const STEPS = [
  { n: "1", t: "Chọn gói", d: "Xem trước các gói và chọn gói phù hợp với điều bạn đang quan tâm." },
  { n: "2", t: "Chọn khung giờ", d: "Chọn ngày & khung giờ còn trống thuận tiện cho bạn." },
  { n: "3", t: "Xác nhận", d: "Gửi yêu cầu — Thỏ xác nhận lịch và đồng hành cùng bạn." },
];

export default function HomePage() {
  const featured = SERVICES.filter((s) => s.featured);

  return (
    <>
      {/* HERO */}
      <section className="bg-mystic relative overflow-hidden text-ss-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <Image
            src="/logo-ss.jpg"
            alt="Song Sát Tử Vi"
            width={200}
            height={200}
            priority
            className="mx-auto mb-6 h-40 w-40 rounded-full object-cover shadow-2xl ring-2 ring-ss-gold/40 sm:h-48 sm:w-48"
          />
          <h1 className="sr-only">Song Sát Tử Vi</h1>
          <span className="inline-flex items-center gap-2 rounded-full border border-ss-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-ss-gold">
            ✦ {SITE.subTagline} ✦
          </span>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ss-cream/80 sm:text-lg">
            {SITE.tagline}. Luận giải tử vi · kinh dịch · bói bài · chỉ tay nhân
            tướng — giúp bạn hiểu mình, nắm vận và chủ động thay đổi cuộc sống.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dat-lich"
              className="rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              Đặt lịch ngay
            </Link>
            <Link
              href="/goi-dich-vu"
              className="rounded-full border border-ss-gold/50 px-7 py-3 text-sm font-semibold text-ss-gold transition-colors hover:bg-white/5"
            >
              Xem các gói
            </Link>
          </div>

          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {SITE.values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
              >
                <div className="text-2xl">{v.icon}</div>
                <div className="mt-1.5 text-sm font-semibold text-ss-cream">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GÓI NỔI BẬT */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
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
      </section>

      {/* QUY TRÌNH */}
      <section className="bg-gradient-to-b from-ss-cream to-white py-16">
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
        </div>
      </section>

      {/* HỌC HUYỀN HỌC */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="bg-mystic relative overflow-hidden rounded-3xl px-6 py-12 text-center text-ss-cream sm:px-12">
          <div className="text-4xl">🎓</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Muốn tự mình <span className="text-gold-gradient">luận giải</span>?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ss-cream/80">
            Không chỉ xem — bạn có thể học huyền học bài bản cùng Thỏ, đi từ nền
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
