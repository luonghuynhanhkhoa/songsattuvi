import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Copy from "@/components/Copy";

export const metadata: Metadata = {
  title: "Đặt lịch",
  description: "Đặt lịch xem cùng Song Sát Tử Vi — nhắn qua Facebook hoặc Zalo.",
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
      <path d="M12 2C6.2 2 1.5 6.1 1.5 11.2c0 2.9 1.5 5.4 3.9 7.1-.1.9-.5 2.2-1.4 3.2-.2.2 0 .6.3.5 1.9-.4 3.4-1.2 4.3-1.8 1.1.3 2.2.5 3.4.5 5.8 0 10.5-4.1 10.5-9.2S17.8 2 12 2z" />
    </svg>
  );
}

export default function BookingPage() {
  const { facebook, zalo } = SITE.contact;

  return (
    <>
      <section className="bg-mystic text-ss-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Đặt lịch <span className="text-gold-gradient">xem</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-ss-cream/80">
            <Copy text="Hãy nhắn tin trực tiếp cho Song Sát Tử Vi qua" />{" "}
            <b className="inline-block">Facebook</b> <Copy text="hoặc" /> <b className="inline-block">Zalo</b>{" "}
            <Copy text="và chia sẻ vấn đề | mà bạn đang gặp khó khăn." />
            <br />
            <Copy text="Song Sát Tử Vi sẽ tư vấn kỹ | và hỗ trợ gói phù hợp cho bạn." />
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-4 py-14 sm:px-6">
        <div className="grid gap-4">
          <a
            href={facebook || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#1877F2] px-6 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            <FacebookIcon />
            Nhắn qua Facebook
          </a>
          <a
            href={zalo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#0068FF] px-6 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
          >
            <ZaloIcon />
            Nhắn qua Zalo
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-ss-purple/15 bg-white p-5 text-center shadow-sm">
          <p className="text-sm font-semibold text-ss-plum">
            <Copy text="💡 Khi nhắn, bạn gửi giúp Song Sát Tử Vi:" />
          </p>
          <p className="mt-2 text-sm leading-relaxed text-balance text-ss-plum/70">
            <Copy text="Chia sẻ vấn đề đang gặp khó khăn hoặc điều mà bạn đang quan tâm nhất." />
          </p>
          <p className="mt-1 text-sm leading-relaxed text-balance text-ss-plum/70">
            <Copy text="Song Sát sẽ hỗ trợ và tư vấn gói đúng và phù hợp với vấn đề của bạn." />
          </p>
        </div>
      </section>
    </>
  );
}
