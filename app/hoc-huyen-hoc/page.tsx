import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Học Huyền Học",
  description:
    "Đăng ký học huyền học bài bản cùng Song Sát Tử Vi — tử vi, kinh dịch, bói bài từ nền tảng đến thực chiến.",
};

const PERKS = [
  { icon: "📚", t: "Lộ trình bài bản", d: "Đi từ nền tảng đến ứng dụng thực chiến, dễ theo cho người mới." },
  { icon: "🧑‍🏫", t: "Học cùng Song Sát Tử Vi", d: "Được hướng dẫn trực tiếp, giải đáp theo từng trường hợp thật." },
  { icon: "♾️", t: "Học lại trọn đời", d: "Ôn tập bất cứ lúc nào trên ứng dụng học huyền học." },
];

export default function LearnPage() {
  return (
    <>
      <section className="bg-mystic text-ss-cream">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <div className="text-5xl">🎓</div>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Học <span className="text-gold-gradient">Huyền Học</span> cùng Song Sát Tử Vi
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-ss-cream">
            Không chỉ đi xem — bạn hoàn toàn có thể tự mình luận giải.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-ss-cream/75">
            Chương trình học huyền học của Song Sát Tử Vi giúp bạn nắm vững tử
            vi, kinh dịch, bói bài từ gốc rễ đến khi ứng dụng được cho chính
            mình và người thân.
          </p>
          <a
            href={SITE.huyenHocUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-gradient-to-r from-ss-gold to-ss-gold-deep px-8 py-3.5 text-sm font-bold text-ss-plum shadow-lg transition-transform hover:scale-105"
          >
            Bắt đầu học ngay →
          </a>
          <p className="mt-3 text-xs text-ss-cream/50">
            Mở ứng dụng học Huyền Học cùng Song Sát Tử Vi
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {PERKS.map((p) => (
            <div key={p.t} className="rounded-2xl border border-ss-purple/12 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-3 font-display text-lg font-bold text-ss-plum">{p.t}</h3>
              <p className="mt-1.5 text-sm text-ss-plum/70">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-ss-gold/30 bg-gradient-to-br from-ss-cream to-white p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-ss-plum">
            Bạn đã sẵn sàng khám phá Huyền Học cùng Song Sát Tử Vi?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-ss-plum/70">
            Bấm nút bên dưới để mở ứng dụng học và bắt đầu hành trình của bạn.
          </p>
          <a
            href={SITE.huyenHocUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-8 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Vào lớp học Huyền Học →
          </a>
        </div>
      </section>
    </>
  );
}
