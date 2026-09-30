/**
 * Đồng bộ ảnh CẢM NHẬN khách hàng.
 *
 * Cách chạy:  node scripts/sync-feedback.mjs  [đường-dẫn-thư-mục-nguồn]
 * Mặc định nguồn: C:/Users/SsS/Desktop/M/Feedback
 *
 * Việc script làm:
 *  1) Xoá sạch ảnh fb-*.jpg cũ trong public/feedback (để ảnh bị gỡ cũng biến mất)
 *  2) Đọc mọi ảnh .jpg/.jpeg/.png/.webp trong thư mục nguồn (sắp theo tên)
 *  3) Tối ưu: xoay đúng chiều, cao 760px, nén JPEG q78 -> fb-01.jpg, fb-02.jpg…
 *  4) Ghi lại danh sách vào lib/feedback.ts
 *
 * Sau khi chạy: build + commit + push là ảnh mới lên web.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = process.argv[2] || "C:/Users/SsS/Desktop/M/Feedback";
const OUT = path.join(ROOT, "public", "feedback");
const LIST = path.join(ROOT, "lib", "feedback.ts");

const isImg = (f) => /\.(jpe?g|png|webp)$/i.test(f);

if (!fs.existsSync(SRC)) {
  console.error("❌ Không thấy thư mục nguồn:", SRC);
  process.exit(1);
}
fs.mkdirSync(OUT, { recursive: true });

// 1) Xoá ảnh fb-*.jpg cũ
for (const f of fs.readdirSync(OUT)) {
  if (/^fb-\d+\.jpg$/i.test(f)) fs.rmSync(path.join(OUT, f));
}

// 2+3) Tối ưu & chép
const files = fs.readdirSync(SRC).filter(isImg).sort();
if (files.length === 0) {
  console.error("⚠️  Thư mục nguồn không có ảnh nào:", SRC);
}
const names = [];
let total = 0;
for (let i = 0; i < files.length; i++) {
  const name = "fb-" + String(i + 1).padStart(2, "0") + ".jpg";
  await sharp(path.join(SRC, files[i]))
    .rotate()
    .resize({ height: 760, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(path.join(OUT, name));
  total += fs.statSync(path.join(OUT, name)).size;
  names.push(name);
}

// 4) Ghi lib/feedback.ts
const rows = [];
for (let i = 0; i < names.length; i += 5) {
  rows.push("  " + names.slice(i, i + 5).map((n) => `"${n}"`).join(", ") + ",");
}
const content = `/**
 * Ảnh CẢM NHẬN khách hàng để chạy băng chuyền ngang.
 * ⚠️ File này do scripts/sync-feedback.mjs TỰ SINH — đừng sửa tay.
 * Muốn đổi ảnh: thay ảnh trong thư mục nguồn rồi chạy \`npm run sync-feedback\`.
 */
export const FEEDBACK_IMAGES: string[] = [
${rows.join("\n")}
];
`;
fs.writeFileSync(LIST, content);

console.log(`✅ Đồng bộ ${names.length} ảnh · tổng ${(total / 1024 / 1024).toFixed(2)} MB`);
console.log("→ Đã cập nhật lib/feedback.ts. Giờ build + commit + push là lên web.");
