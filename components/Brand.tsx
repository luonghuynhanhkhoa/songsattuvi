/**
 * Tên thương hiệu "Song Sát Tử Vi" tô màu theo LOGO:
 * "Song Sát" = hồng, "Tử Vi" = vàng kim.
 * - Nền TỐI: dùng mặc định (hồng nhạt như logo).
 * - Nền SÁNG (header): dùng prop `onLight` để lấy sắc hồng đậm hơn cho dễ đọc.
 */
export default function Brand({
  className = "",
  onLight = false,
}: {
  className?: string;
  onLight?: boolean;
}) {
  return (
    <span className={className}>
      <span className={onLight ? "text-ss-logo-pink-deep" : "text-ss-logo-pink"}>
        Song Sát
      </span>{" "}
      <span className={onLight ? "text-ss-gold-deep" : "text-ss-gold"}>Tử Vi</span>
    </span>
  );
}
