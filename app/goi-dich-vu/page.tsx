import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import Copy from "@/components/Copy";

export const metadata: Metadata = {
  title: "Gói dịch vụ",
  description: "Bảng giá & mô tả các gói luận giải của Song Sát Tử Vi.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-mystic text-ss-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Các gói <span className="text-gold-gradient">dịch vụ</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-ss-cream/80">
            <Copy text="Mỗi gói là một cách để bạn hiểu rõ hơn về bản thân và con đường phía trước." />{" "}
            <Copy text="Chọn gói phù hợp rồi đặt lịch — Song Sát Tử Vi sẽ đồng hành cùng bạn." />
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-ss-plum/50">
          <Copy text="Giá có thể thay đổi theo chương trình." />{" "}
          <Copy text="Cần tư vấn chọn gói?" /> <Copy text="Bấm" />{" "}
          <span className="inline-block font-semibold text-ss-purple">Đặt lịch</span>{" "}
          <Copy text="để được hỗ trợ." />
        </p>
      </section>
    </>
  );
}
