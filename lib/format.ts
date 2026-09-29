/** Định dạng tiền Việt: 688000 -> "688.000đ". */
export function formatVND(n: number): string {
  return n.toLocaleString("vi-VN") + "đ";
}
