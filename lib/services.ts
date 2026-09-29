/**
 * Danh sách GÓI DỊCH VỤ của kênh Song Sát Tử Vi (dữ liệu tĩnh cho Giai đoạn 1).
 * Nguồn: bộ poster bảng giá của kênh. ⚠️ Anh Thỏ soát lại tên/giá/mô tả rồi
 * chỉnh trực tiếp ở file này là xong (Giai đoạn 2 sẽ chuyển sang Supabase để
 * sửa ngay trên web nếu anh muốn).
 */
export type Service = {
  slug: string;
  name: string;
  price: number;
  tagline: string;
  bullets: string[];
  icon: string;
  /** "BEST" | "MỚI" | "" — nhãn góc thẻ. */
  badge?: "BEST" | "MỚI" | "";
  /** Hiện ở khu "Gói nổi bật" trang chủ. */
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "tu-vi-toan-dien",
    name: "Tử Vi Toàn Diện",
    price: 688000,
    tagline: "Hiểu toàn diện — Nắm trọn cuộc đời",
    icon: "🔮",
    badge: "BEST",
    featured: true,
    bullets: [
      "Luận giải tổng thể cuộc đời",
      "Vận hạn, cung danh, sự nghiệp",
      "Tài chính, tình duyên, sức khỏe",
      "Gia đạo, con cái, điền trạch",
      "Định hướng tương lai, hóa giải vận xui",
    ],
  },
  {
    slug: "chi-tay-nhan-tuong",
    name: "Chỉ Tay Nhân Tướng",
    price: 600000,
    tagline: "Đọc vận mệnh qua chỉ tay & tướng diện",
    icon: "✋",
    featured: true,
    bullets: [
      "Phân tích chỉ tay & nhân tướng học",
      "Đoán tính cách, vận mệnh",
      "Cơ hội & thách thức trong đời",
    ],
  },
  {
    slug: "kinh-dich",
    name: "Kinh Dịch",
    price: 350000,
    tagline: "Luận quẻ sâu sắc, đoán thời điểm tốt xấu",
    icon: "☯",
    featured: true,
    bullets: [
      "Luận giải sâu sắc theo Kinh Dịch",
      "Đoán thời điểm tốt xấu",
      "Đưa ra lời khuyên chính xác",
    ],
  },
  {
    slug: "boi-bai-tong-hop",
    name: "Bói Bài Tổng Hợp",
    price: 300000,
    tagline: "Xem một lúc nhiều vấn đề trong 1 lần",
    icon: "🌙",
    featured: true,
    bullets: [
      "Giải đáp toàn diện trong 1 lần xem",
      "Nhiều vấn đề: tình cảm, công việc, tài chính…",
      "Lời khuyên cụ thể theo từng lá bài",
    ],
  },
  {
    slug: "dinh-vi-cuoc-doi",
    name: "Định Vị Cuộc Đời",
    price: 349000,
    tagline: "Tìm ra con đường đúng của chính mình",
    icon: "🧭",
    bullets: [
      "Sứ mệnh, mục tiêu cuộc đời",
      "Hướng đi phù hợp",
      "Cơ hội & thách thức",
    ],
  },
  {
    slug: "gia-dao",
    name: "Gia Đạo",
    price: 349000,
    tagline: "Hòa khí & vận khí trong gia đình",
    icon: "🏠",
    bullets: [
      "Quan hệ gia đình",
      "Hòa khí, mâu thuẫn & cách hóa giải",
      "Vận khí gia đạo, gắn kết hạnh phúc",
    ],
  },
  {
    slug: "boi-bai-tarot",
    name: "Bói Bài Tarot / Tây",
    price: 200000,
    tagline: "Giải đáp nhanh điều đang băn khoăn",
    icon: "🃏",
    bullets: [
      "Tình cảm, công việc, tài chính",
      "Giải đáp nhanh chóng",
      "Các vấn đề đang phân vân",
    ],
  },
  {
    slug: "tinh-yeu-hon-nhan",
    name: "Tình Yêu & Hôn Nhân",
    price: 209000,
    tagline: "Giải mã tình duyên — Đón nhận hạnh phúc",
    icon: "💗",
    bullets: [
      "Tổng quan tình duyên",
      "Xu hướng tình cảm & mối quan hệ",
      "Hôn nhân, gia đình & lời khuyên",
    ],
  },
  {
    slug: "tu-vi-le",
    name: "Tử Vi Lẻ — 1 Vấn Đề",
    price: 150000,
    tagline: "Chọn đúng 1 chủ đề bạn quan tâm nhất",
    icon: "✨",
    badge: "MỚI",
    bullets: [
      "Chọn 1 chủ đề: Tình duyên / Công việc",
      "Tài chính / Con cái",
      "Học tập / Xuất ngoại",
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
