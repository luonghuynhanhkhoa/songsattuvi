"use client";

import { useEffect } from "react";

/**
 * Chặn copy "dễ dãi" cho các ảnh có class `logo-protected`:
 * - Chuột phải (context menu) trên logo -> bị chặn
 * - Kéo-thả ảnh ra ngoài -> bị chặn
 * ⚠️ KHÔNG chặn được chụp màn hình / DevTools / mở thẳng URL ảnh (bất khả thi
 * với web công khai). Chỉ ngăn người dùng thông thường lưu nhanh.
 */
export default function ImageGuard() {
  useEffect(() => {
    const block = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && typeof t.closest === "function" && t.closest(".logo-protected")) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
}
