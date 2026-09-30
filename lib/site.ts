/**
 * Cấu hình trung tâm cho website Song Sát Tử Vi.
 * ⚠️ Anh Thỏ chỉ cần sửa các giá trị trong file này để đổi liên hệ / link.
 * Chỗ nào để "#" hoặc ghi (placeholder) là ĐANG CHỜ anh cung cấp link thật.
 */
export const SITE = {
  name: "Song Sát Tử Vi",
  tagline: "Hiểu đúng vận mệnh · Đi đúng hướng · Sống đúng thời",
  subTagline: "Chọn gói phù hợp — Hiểu rõ vận mệnh",
  description:
    "Song Sát Tử Vi — luận giải tử vi, kinh dịch, bói bài, chỉ tay nhân tướng. Đặt lịch xem, chọn gói phù hợp và đăng ký học huyền học cùng Thỏ.",

  // Giá trị cốt lõi (hiện ở trang chủ + footer)
  values: [
    { icon: "🎯", title: "Tận tâm – Chính xác" },
    { icon: "🔒", title: "Uy tín – Bảo mật" },
    { icon: "🤝", title: "Đồng hành cùng bạn" },
  ],

  // Liên hệ
  contact: {
    zalo: "https://zalo.me/0373608640",
    facebook: "https://www.facebook.com/profile.php?id=61578761863277",
    messenger: "", // để trống thì ẩn
    fanpage: "", // để trống thì ẩn
    hotline: "", // vd 09xx xxx xxx (để trống thì ẩn)
    email: "", // tuỳ chọn
  },

  // Link ngoài
  huyenHocUrl: "https://huyenhoccungthor.vercel.app", // App học Huyền Học
  feedbackUrl: "#", // ⚠️ anh gửi link feedback sau, thay vào đây
} as const;
