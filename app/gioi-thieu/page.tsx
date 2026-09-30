import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import FeedbackGallery from "@/components/FeedbackGallery";
import Brand from "@/components/Brand";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Về Song Sát Tử Vi — luận giải huyền học tận tâm, chính xác, đồng hành cùng bạn trên hành trình hiểu mình và nắm vận.",
};

const WHY = [
  { icon: "🎯", t: "Luận giải có chiều sâu", d: "Không phán chung chung — đi vào bản chất, nguyên nhân và hướng đi cụ thể cho bạn." },
  { icon: "🗣️", t: "Trao đổi 1:1 riêng tư", d: "Nhắn tin / trò chuyện trực tiếp với người luận giải, thoải mái hỏi điều bạn đang vướng." },
  { icon: "🔒", t: "Bảo mật tuyệt đối", d: "Mọi thông tin bạn cung cấp được giữ kín, chỉ phục vụ cho buổi xem của bạn." },
  { icon: "🤝", t: "Đồng hành lâu dài", d: "Song Sát Tử Vi ở đây để cùng bạn hiểu mình, nắm vận và chủ động thay đổi cuộc sống." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-mystic text-ss-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <Image
            src="/logo-ss.jpg"
            alt="Song Sát Tử Vi"
            width={140}
            height={140}
            draggable={false}
            className="logo-protected mx-auto mb-5 h-28 w-28 rounded-full object-cover ring-2 ring-ss-gold/40"
          />
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Về <Brand />
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base font-medium text-ss-cream sm:text-lg">
            {SITE.tagline}.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-balance text-ss-cream/75">
            Song Sát Tử Vi kết hợp tử vi, kinh dịch, bói bài và nhân tướng học để
            giúp bạn nhìn rõ chính mình và con đường phía trước — <em>không xem
            cho biết, mà xem để hiểu, tháo gỡ và định hướng.</em>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="prose-ss space-y-4 text-center text-ss-plum/80">
          <p className="text-balance text-lg">
            Mỗi người sinh ra đều mang một “lá số” riêng. Hiểu được nó, bạn sẽ
            biết đâu là điểm mạnh để phát huy, đâu là điều cần hóa giải, và thời
            điểm nào nên tiến — nên lùi.
          </p>
          <p className="text-balance">
            Song Sát Tử Vi ra đời với mong muốn đưa huyền học đến gần hơn một
            cách <strong className="text-ss-purple">tử tế, chính xác và dễ áp dụng</strong>.
            Không hù dọa, không mê tín — chỉ là những góc nhìn giúp bạn vững tâm
            hơn trước mỗi quyết định của đời mình.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SITE.values.map((v) => (
            <span
              key={v.title}
              className="inline-flex items-center gap-2 rounded-full border border-ss-purple/15 bg-ss-cream px-4 py-2 text-sm font-medium text-ss-plum"
            >
              <span>{v.icon}</span> {v.title}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-ss-cream to-white py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-ss-plum">
            Vì sao chọn Song Sát Tử Vi?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {WHY.map((w) => (
              <div key={w.t} className="flex gap-4 rounded-2xl border border-ss-purple/12 bg-white p-5 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-ss-purple/10 to-ss-magenta/10 text-2xl">
                  {w.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ss-plum">{w.t}</h3>
                  <p className="mt-1 text-sm text-ss-plum/70">{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeedbackGallery />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="bg-mystic rounded-3xl px-6 py-12 text-center text-ss-cream sm:px-12">
          <h2 className="font-display text-3xl font-bold">Sẵn sàng hiểu rõ vận mệnh của bạn?</h2>
          <Link
            href="/dat-lich"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-ss-purple to-ss-magenta px-8 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Đặt lịch ngay →
          </Link>
        </div>
      </section>
    </>
  );
}
