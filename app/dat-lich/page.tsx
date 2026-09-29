import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Đặt lịch",
  description: "Đặt lịch xem cùng Song Sát Tử Vi — chọn gói và khung giờ phù hợp.",
};

export default function BookingPage() {
  return (
    <>
      <section className="bg-mystic text-ss-cream">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Đặt lịch <span className="text-gold-gradient">xem</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-ss-cream/80">
            Chọn gói và khung giờ mong muốn — Thỏ sẽ xác nhận lịch với bạn sớm nhất.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <div className="mb-6 rounded-xl border border-ss-gold/40 bg-ss-cream px-4 py-3 text-center text-sm text-ss-plum/80">
          🗓️ Xem <b>khung giờ trống theo lịch thật</b> sẽ có ở bản kế tiếp. Hiện
          tại bạn gửi yêu cầu, Thỏ xác nhận giờ cụ thể với bạn.
        </div>
        <Suspense fallback={<div className="py-10 text-center text-ss-plum/50">Đang tải…</div>}>
          <BookingForm />
        </Suspense>
      </section>
    </>
  );
}
