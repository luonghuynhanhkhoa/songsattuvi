/**
 * Danh sách GÓI DỊCH VỤ của kênh Song Sát Tử Vi.
 * Nguồn: bộ poster bảng giá chính thức của kênh (anh Thỏ cung cấp 30/09/2026).
 * ⚠️ Sửa tên/giá/mô tả trực tiếp ở file này (Giai đoạn 2 có thể chuyển sang Supabase).
 */
export type Service = {
  slug: string;
  name: string;
  price: number;
  tagline: string;
  bullets: string[];
  icon: string;
  /** Dòng ghi chú nhỏ (thời lượng / quà tặng). */
  note?: string;
  badge?: "BEST" | "MỚI" | "";
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "tu-vi-toan-dien",
    name: "Tử Vi Toàn Diện",
    price: 688000,
    tagline: "Luận giải toàn diện — Rõ hướng đi",
    icon: "🔮",
    badge: "BEST",
    featured: true,
    note: "Trong 60 phút · Tặng nhắc nhở vận hạn năm nay",
    bullets: [
      "Luận giải toàn diện lá số: bản mệnh, công việc, tài lộc, tình cảm, gia đạo, sức khỏe, con cái, nhà cửa",
      "Phân tích tính cách & nghiệp tính — điểm mạnh, điểm cần hóa giải",
      "Định hướng sự nghiệp – tài chính",
      "Luận tình duyên – hôn nhân & gia đạo",
      "Luận đại vận 10 năm & lời khuyên thực tế",
    ],
  },
  {
    slug: "chi-tay-nhan-tuong",
    name: "Chỉ Tay – Nhân Tướng – Bài Tây",
    price: 600000,
    tagline: "Ba phương pháp — Một buổi xem",
    icon: "✋",
    featured: true,
    note: "Tặng Bài Tây trao đổi 1:1 trong 30 phút",
    bullets: [
      "Chỉ tay – hé lộ bức tranh nền của cuộc đời bạn",
      "Nhân tướng – soi rõ con người thật phía sau vẻ ngoài",
      "Bài Tây – đi thẳng vào vấn đề bạn đang băn khoăn nhất",
      "Không xem cho biết — mà xem để hiểu & tháo gỡ",
    ],
  },
  {
    slug: "do-gio-sinh",
    name: "Dò Giờ Sinh (2 khung giờ)",
    price: 400000,
    tagline: "Mở lối số mệnh — Hiểu rõ chính mình",
    icon: "⏳",
    bullets: [
      "Xác định giờ sinh chính xác từ 2 khung giờ bạn đang phân vân",
      "Đối chiếu sự kiện đời thực với lá số",
      "Nền tảng để mọi luận giải về sau chuẩn xác",
      "Cam kết bảo mật tuyệt đối thông tin của bạn",
    ],
  },
  {
    slug: "kinh-dich",
    name: "Kinh Dịch",
    price: 350000,
    tagline: "Gieo quẻ để biết rõ hướng — Giải 1 việc quan trọng",
    icon: "☯",
    note: "30 phút chat trực tiếp · 1 quẻ = 1 vấn đề",
    bullets: [
      "Phân tích thẳng bản chất – nguyên nhân – xu hướng sắp tới",
      "Cho định hướng rõ ràng để bạn quyết định dứt khoát",
      "Hợp: công việc, tình cảm, kiện tụng, mất mát, lựa chọn lớn",
      "Không xem cho vui — xem để chốt quyết định",
    ],
  },
  {
    slug: "dinh-vi-cuoc-doi",
    name: "Định Vị Cuộc Đời",
    price: 349000,
    tagline: "Định hướng đúng — Đi xa vững bước",
    icon: "🧭",
    featured: true,
    note: "Tặng nhắc nhở vận hạn tài chính, công việc năm nay",
    bullets: [
      "Tính cách, khí chất — điểm mạnh yếu & cách người khác nhìn bạn",
      "Nghề nghiệp hợp mệnh — nên làm chủ hay làm công?",
      "Nhà cửa, đất đai · Xuất ngoại, cơ hội đi xa",
      "Hậu vận & đại vận 10 năm — nắm bắt cơ hội, tránh rủi ro",
    ],
  },
  {
    slug: "gia-dao",
    name: "Gia Đạo – Hôn Nhân – Con Cái",
    price: 349000,
    tagline: "Vun đắp tổ ấm — Hóa giải muộn phiền",
    icon: "🏠",
    bullets: [
      "Cách đối đãi của người hôn phối & gia đình chồng",
      "Hôn nhân bền lâu hay tiềm ẩn nguy cơ rạn nứt",
      "Số lượng con cái & thời điểm sinh phù hợp",
      "Vận hạn gia đạo trong năm & cách phòng tránh",
    ],
  },
  {
    slug: "boi-bai-tong-hop",
    name: "Bói Bài Tổng Hợp",
    price: 300000,
    tagline: "Nhiều vấn đề — 1 buổi xem",
    icon: "🌙",
    featured: true,
    note: "50 phút · Chat trực tiếp 1:1 với reader",
    bullets: [
      "Giải đáp nhiều vấn đề trong 12 tháng tới",
      "Tình duyên · Công việc · Tài chính · Gia đình",
      "Nhìn rõ xu hướng & điều đang cản trở bạn",
      "Bài Tây hoặc Tarot — luận thẳng, nhanh, rõ vấn đề",
    ],
  },
  {
    slug: "van-han-12-thang",
    name: "Vận Hạn 12 Tháng",
    price: 300000,
    tagline: "Dự báo chuẩn — Phòng tránh rủi ro — Nắm bắt cơ hội",
    icon: "📅",
    bullets: [
      "Tổng quan vận trình 12 tháng: tháng nào thuận, tháng nào cẩn trọng",
      "Công việc – tài chính: nên đầu tư, tiết kiệm hay giữ tiền?",
      "Tình cảm – gia đạo trong năm",
      "Sức khỏe & lời khuyên hóa giải vận xấu",
    ],
  },
  {
    slug: "boi-bai-tarot-tay",
    name: "Bói Bài Tarot / Tây",
    price: 200000,
    tagline: "1 vấn đề — 30 phút — Giải 1 việc quan trọng",
    icon: "🃏",
    note: "Nhắn tin trực tiếp 1:1 với người luận giải",
    bullets: [
      "Giải đáp sâu 1 vấn đề trong 12 tháng",
      "Tình duyên · Công việc · Tài chính · Gia đình",
      "Bài Tarot hoặc Bài Tây — hỏi gì giải đó, không vòng vo",
      "Một vấn đề – Một lần xem – Rõ hướng đi hơn",
    ],
  },
  {
    slug: "tu-vi-le",
    name: "Tử Vi Lẻ – 1 Vấn Đề",
    price: 209000,
    tagline: "Chọn đúng 1 chủ đề bạn quan tâm nhất",
    icon: "✨",
    badge: "MỚI",
    note: "Chọn 1 chủ đề để giải đáp chuyên sâu · Tặng nhắc nhở vận hạn năm nay",
    bullets: [
      "Tình yêu & Hôn nhân",
      "Sự nghiệp – Tài chính",
      "Học tập & Phát triển",
      "Sinh sản – Con cái",
      "Nhà cửa – Đất đai · Xuất ngoại",
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
