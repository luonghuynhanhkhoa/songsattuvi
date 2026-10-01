# HANDOFF — Website Song Sát Tử Vi (khách hàng)

> Dự án RIÊNG, tách khỏi app Thor. Next.js 16 + React 19 + Tailwind v4 (App Router). Live: **https://songsattuvi.vercel.app** (push `main` là tự deploy). GitHub: `luonghuynhanhkhoa/songsattuvi`.
> ⚠️ Next ở bản này khác kiến thức cũ — đọc `node_modules/next/dist/docs/` trước khi viết code Next (xem AGENTS.md).
> Dev: `npm run dev -- -p 3200`. Kiểm tra: `npx tsc --noEmit`, `npm run build`, `npx eslint .`.

## Cấu hình & dữ liệu (anh Thỏ chỉ cần sửa các file này)
- `lib/site.ts` — tên, tagline, link Facebook/Zalo/TikTok, link app Học Huyền Học.
- `lib/services.ts` — **15 gói** (tên, giá, mô tả, bullets). Thứ tự trong mảng = thứ tự hiện ở trang Gói dịch vụ. Cờ `featured` hiện **không còn dùng** (trang chủ giờ tự chọn 2 gói đầu qua `HERO_PACKS`).
- `lib/feedback.ts` — ảnh cảm nhận, **TỰ SINH**: đổi ảnh ở `Desktop\M\Feedback` rồi chạy `npm run sync-feedback` → build → commit → push.

## Bố cục trang chủ (`app/page.tsx`) — thứ tự đã chốt 01/10/2026
1. Hero hồng pastel: câu hỏi gợi tò mò + 2 nút + **băng chuyền feedback** (đưa lên đầu theo yêu cầu).
2. "Bạn đang băn khoăn điều gì?": **2 gói nên xem đứng đầu** (`HERO_PACKS`: Tử Vi Toàn Diện = 👑 GÓI NÊN XEM NHẤT, Chỉ Tay–Nhân Tướng = 🔥 HOT, lấy giá/ghi chú từ `getService`) + 12 thẻ câu hỏi (`WORRIES`, mỗi thẻ dẫn `/dat-lich?goi=<slug>`).
3. 3 thẻ cam kết uy tín (`TRUST`) + nút Đặt lịch ngay.
4. Đặt lịch 3 bước (nút Zalo + Facebook).
5. Banner Học Huyền Học.
- Thêm gói mới ở `lib/services.ts` → muốn lên trang chủ thì thêm 1 dòng vào `WORRIES` (slug phải khớp).

## Bảng màu (poster hồng pastel V3)
`app/globals.css` — giữ NGUYÊN tên token cũ (`ss-purple`, `ss-magenta`…) nhưng đã đổi giá trị: `ss-purple` = hồng mâm xôi (nút chính), `ss-plum` = burgundy (chữ), vàng kim = điểm nhấn. `.bg-blush` (hero), `.bg-mystic` (khung burgundy: footer/banner/tiêu đề trang con).

## Ngắt dòng không mất nghĩa — `components/Copy.tsx`
- `<Copy text="…" />`: chia câu thành cụm `inline-block` (sau , ; : . ? ! — – ·), cụm < 16 ký tự gộp vào cụm kế; câu > 70 ký tự thì xuống dòng tự nhiên.
- Dấu `|` trong chuỗi = tự quyết ranh giới cụm (khi có `|` thì KHÔNG tự chia theo dấu câu).
- `glue()` dính liền (NBSP) tên "Song Sát Tử Vi", các thuật ngữ (tử vi, kinh dịch, vận hạn…) và "số + đơn vị".
- ⚠️ Khi sửa file này bằng shell/heredoc dễ MẤT dấu `\` trong regex (đã dính 1 lần) — sửa bằng công cụ Edit/Write rồi kiểm tra lại dòng `.split(...)`.
- Ví dụ riêng: tiêu đề/câu hỏi dạng thẻ dùng `text-balance` thay vì `Copy`.

## Nút liên hệ nổi — `components/ContactFloat.tsx`
Cụm 3 nút cố định góc phải dưới (đi theo khi cuộn): **Đặt lịch ngay** (→ `/dat-lich`) + Facebook + Zalo. Đặt 1 lần ở `app/layout.tsx`.

## Quyết định đừng đổi lại
- Đặt lịch = chỉ 2 nút Facebook + Zalo (không form). Giai đoạn 2 (Supabase + `/admin` + khung giờ) CHƯA làm.
- 6 gói theo vấn đề (Tình Yêu & Hôn Nhân, Sự Nghiệp – Tài Chính, Học Tập & Phát Triển, Sinh Sản – Con Cái, Nhà Cửa – Đất Đai, Xuất Ngoại) giá **209.000đ** (anh chốt 01/10, poster cũ ghi 150K); thay hẳn gói "Tử Vi Lẻ – 1 Vấn Đề". Nội dung từng gói lấy từ poster `Desktop\M\SS\2026\V2\`.
- Chưa thêm gói "Vận Trình 1 năm 200K" (poster có, web chưa) — anh xác nhận không cần.
- Băng chuyền feedback `64s/vòng` (chậm hơn 30% so với 45s ban đầu) — `.marquee-track` trong globals.css.
- Chống copy ảnh: `ImageGuard` + class `logo-protected` (chặn chuột phải/kéo-thả; không chặn được chụp màn hình).
