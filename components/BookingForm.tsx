"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { SERVICES } from "@/lib/services";
import { formatVND } from "@/lib/format";
import { SITE } from "@/lib/site";

const TIMES = [
  "Sáng (8h–11h)",
  "Trưa (11h–14h)",
  "Chiều (14h–18h)",
  "Tối (18h–22h)",
  "Linh hoạt",
];

const inputCls =
  "w-full rounded-xl border border-ss-purple/20 bg-white px-4 py-2.5 text-ss-plum outline-none focus:border-ss-magenta focus:ring-2 focus:ring-ss-magenta/20";
const labelCls = "mb-1.5 block text-sm font-semibold text-ss-plum";

export default function BookingForm() {
  const preset = useSearchParams().get("goi") ?? "";
  const [slug, setSlug] = useState(preset);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIMES[0]);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const service = SERVICES.find((s) => s.slug === slug);
  const today = new Date().toISOString().slice(0, 10);

  const message = useMemo(() => {
    const lines = [
      "Xin chào Song Sát Tử Vi, mình muốn ĐẶT LỊCH:",
      `• Gói: ${service ? `${service.name} (${formatVND(service.price)})` : "(chưa chọn)"}`,
      `• Họ tên: ${name || "(chưa điền)"}`,
      `• SĐT/Zalo: ${phone || "(chưa điền)"}`,
      `• Ngày mong muốn: ${date || "(linh hoạt)"}`,
      `• Khung giờ: ${time}`,
    ];
    if (note.trim()) lines.push(`• Ghi chú: ${note.trim()}`);
    return lines.join("\n");
  }, [service, name, phone, date, time, note]);

  const contact = SITE.contact;
  const channels = [
    { href: contact.zalo, label: "Gửi qua Zalo", show: contact.zalo && contact.zalo !== "#" },
    { href: contact.messenger, label: "Gửi qua Messenger", show: contact.messenger && contact.messenger !== "#" },
    { href: contact.fanpage, label: "Nhắn Fanpage", show: contact.fanpage && contact.fanpage !== "#" },
  ].filter((c) => c.show);

  const canSubmit = slug && name.trim() && phone.trim();

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-ss-purple/15 bg-white p-6 shadow-sm">
        <div className="text-center">
          <div className="text-4xl">📨</div>
          <h2 className="mt-2 font-display text-2xl font-bold text-ss-plum">
            Gần xong rồi!
          </h2>
          <p className="mt-1 text-sm text-ss-plum/70">
            Sao chép nội dung dưới đây rồi gửi cho Thỏ để chốt lịch nhé.
          </p>
        </div>

        <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-ss-cream p-4 text-sm text-ss-plum">
          {message}
        </pre>

        <button
          onClick={copy}
          className="mt-3 w-full rounded-xl border border-ss-purple/25 py-2.5 text-sm font-semibold text-ss-purple transition-colors hover:bg-ss-purple/5"
        >
          {copied ? "✓ Đã sao chép" : "Sao chép nội dung"}
        </button>

        {channels.length > 0 ? (
          <div className="mt-3 grid gap-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-ss-purple to-ss-magenta py-2.5 text-center text-sm font-semibold text-white shadow"
              >
                {c.label} →
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-3 rounded-xl bg-amber-50 px-4 py-3 text-center text-sm text-amber-700">
            (Kênh liên hệ đang được cập nhật — vui lòng gửi nội dung đã sao chép
            qua Fanpage/Zalo của Thỏ.)
          </p>
        )}

        <button
          onClick={() => setSent(false)}
          className="mt-3 w-full text-sm text-ss-plum/50 hover:text-ss-plum"
        >
          ← Sửa lại thông tin
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSubmit) setSent(true);
      }}
      className="rounded-2xl border border-ss-purple/15 bg-white p-6 shadow-sm"
    >
      <div className="space-y-4">
        <div>
          <label className={labelCls}>Chọn gói *</label>
          <select value={slug} onChange={(e) => setSlug(e.target.value)} className={inputCls} required>
            <option value="" disabled>-- Chọn gói dịch vụ --</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} — {formatVND(s.price)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Họ tên *</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="Nguyễn Văn A" required />
          </div>
          <div>
            <label className={labelCls}>SĐT / Zalo *</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} placeholder="09xx xxx xxx" required />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Ngày mong muốn</label>
            <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Khung giờ</label>
            <select value={time} onChange={(e) => setTime(e.target.value)} className={inputCls}>
              {TIMES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelCls}>Ghi chú (điều bạn muốn hỏi)</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className={inputCls} placeholder="Ví dụ: muốn hỏi về công việc & tình duyên nửa cuối năm…" />
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-xl bg-gradient-to-r from-ss-purple to-ss-magenta py-3 text-sm font-semibold text-white shadow-lg transition-transform enabled:hover:scale-[1.02] disabled:opacity-50"
        >
          Tạo yêu cầu đặt lịch
        </button>
        <p className="text-center text-xs text-ss-plum/50">
          * bắt buộc. Thỏ sẽ xác nhận khung giờ với bạn sau khi nhận yêu cầu.
        </p>
      </div>
    </form>
  );
}
