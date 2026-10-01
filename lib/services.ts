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
    slug: "tinh-yeu-hon-nhan",
    name: "Tình Yêu & Hôn Nhân",
    price: 150000,
    tagline: "Hiểu mình trong tình cảm — Gắn bó đúng người",
    icon: "💖",
    bullets: [
      "Tính cách của bạn trong tình cảm & những bài học tình duyên thường gặp",
      "Chân dung người phù hợp để gắn bó: tính cách, ưu – nhược, nhóm ngành công việc",
      "Xu hướng đời sống tình cảm / hôn nhân & lời khuyên giữ sự hòa hợp",
      "Ảnh hưởng của gia đình hai bên đến mối quan hệ",
      "Thời điểm thuận lợi – nên tránh cho cưới hỏi hoặc xác lập mối quan hệ lâu dài",
      "Người đang độc thân: giai đoạn dễ gặp đối tượng phù hợp",
      "Vận trình tình cảm năm nay & điều cần lưu ý để tránh sóng gió",
    ],
  },
  {
    slug: "su-nghiep-tai-chinh",
    name: "Sự Nghiệp – Tài Chính",
    price: 150000,
    tagline: "Chọn đúng hướng đi — Giữ vững đường tiền",
    icon: "💼",
    bullets: [
      "Phân tích tính cách trong công việc: điểm mạnh – điểm yếu",
      "Định hướng nghề nghiệp: làm công, làm chủ hay kinh doanh",
      "Quý nhân & mối quan hệ hỗ trợ: nên kết hợp với ai để dễ thành công",
      "Con đường công danh: cơ hội thăng tiến & trở ngại cần tránh",
      "Đồng nghiệp – đối tác: cách ứng xử để giữ quan hệ hài hòa",
      "Cấp trên – lãnh đạo: xu hướng & cách tạo ấn tượng tốt",
      "Tài chính & công việc năm nay: điều cần lưu ý để tránh rủi ro",
    ],
  },
  {
    slug: "hoc-tap-phat-trien",
    name: "Học Tập & Phát Triển",
    price: 150000,
    tagline: "Đúng năng lực — Đúng con đường",
    icon: "📚",
    bullets: [
      "Xác định bạn thuộc nhóm năng lực nào: tư duy, ghi nhớ, thực hành hay sáng tạo",
      "Gợi ý ngành học hợp mệnh – hợp tính – hợp tương lai",
      "Nên theo hướng chuyên môn ổn định hay đường kinh doanh linh hoạt?",
      "Có phù hợp để đi du học hay không?",
      "Môi trường nào giúp bạn phát triển nhanh và bền?",
      "Tính cách ảnh hưởng thế nào đến kết quả học tập và thành tích?",
      "Xem vận thi cử trong năm để biết thời điểm thuận lợi",
    ],
  },
  {
    slug: "sinh-san-con-cai",
    name: "Sinh Sản – Con Cái",
    price: 150000,
    tagline: "Hiểu duyên con cái — Lên kế hoạch đúng thời",
    icon: "👶",
    bullets: [
      "Tổng quan cung Tử Tức",
      "Ảnh hưởng tính cách cha mẹ tới con & cách nuôi dạy phù hợp",
      "Số lượng con (ít hay nhiều)",
      "Tính cách, năng lực & xu hướng phát triển của con trên góc nhìn từ lá số cha mẹ",
      "Lưu ý gì trong quá trình nuôi dạy và sinh sản",
      "Hậu vận có nhờ con không & lời khuyên giữ hòa khí gia đình",
      "Vận hạn sức khỏe sinh sản của năm nay",
      "Năm thuận lợi để lên kế hoạch sinh con",
    ],
  },
  {
    slug: "nha-cua-dat-dai",
    name: "Nhà Cửa – Đất Đai",
    price: 150000,
    tagline: "An cư lạc nghiệp — Biết khi nào nên mua",
    icon: "🏠",
    bullets: [
      "Tổng quan cung Điền Trạch của bạn tốt hay xấu?",
      "Xu hướng nhà cửa, chỗ ở và đất đai trong tương lai ra sao?",
      "Đại vận nào dễ mua được nhà?",
      "Hợp mua nhà, đất theo hướng nào để dễ an cư – tụ tài?",
      "Có hợp đầu tư hoặc kinh doanh bất động sản không?",
      "Cần lưu ý điều gì về pháp lý, tranh chấp hoặc phong thủy nhà đất?",
      "Vận hạn đất đai trong năm nay có gì cần tránh?",
    ],
  },
  {
    slug: "xuat-ngoai",
    name: "Xuất Ngoại",
    price: 150000,
    tagline: "Đi xa đúng thời — Ít trắc trở",
    icon: "✈️",
    bullets: [
      "Lá số có duyên đi xa – xuất ngoại – định cư hay chỉ hợp đổi môi trường ngắn hạn?",
      "Nên đi theo con đường nào dễ thành: du học, lao động, công tác hay định cư lâu dài?",
      "Thời điểm vàng trong 1–2 năm tới để đi thuận lợi, ít trắc trở, dễ đậu giấy tờ",
      "Ra nước ngoài công việc – tài chính có khá hơn hiện tại không, có đáng đánh đổi?",
      "Cảnh báo sớm rủi ro giấy tờ, sức khỏe, thị phi cần tránh khi đi xa",
      "Vận hạn năm nay có mở cửa xuất ngoại không & lời khuyên then chốt trước khi quyết định",
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
