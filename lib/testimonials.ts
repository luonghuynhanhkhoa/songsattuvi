/**
 * Cảm nhận khách hàng (hiển thị ở trang chủ + Giới thiệu).
 * ⚠️ Đây là nội dung MẪU — anh Thỏ thay bằng feedback thật của khách (giữ nguyên
 * cấu trúc). Có thể để tên viết tắt / ẩn danh để tôn trọng riêng tư khách.
 */
export type Testimonial = {
  name: string;
  service: string;
  quote: string;
  stars: number; // 1..5
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Chị Lan · Hà Nội",
    service: "Tử Vi Toàn Diện",
    quote:
      "Buổi xem giúp mình gỡ được nhiều khúc mắc về công việc và gia đạo. Lời khuyên rất thực tế, dễ áp dụng.",
    stars: 5,
  },
  {
    name: "Anh Minh · TP.HCM",
    service: "Kinh Dịch",
    quote:
      "Đang phân vân một quyết định lớn, gieo một quẻ mà sáng ra hướng đi. Luận thẳng vấn đề, không vòng vo.",
    stars: 5,
  },
  {
    name: "Bạn Thảo",
    service: "Bói Bài Tarot",
    quote:
      "Reader nhẹ nhàng, luận đúng tâm trạng mình đang trải qua. Nhắn tin 1:1 nên thoải mái hỏi.",
    stars: 5,
  },
  {
    name: "Chị Hà",
    service: "Tình Yêu & Hôn Nhân",
    quote:
      "Hiểu hơn về mối quan hệ hiện tại và biết mình nên làm gì tiếp theo. Cảm ơn Song Sát Tử Vi đã đồng hành.",
    stars: 5,
  },
];
