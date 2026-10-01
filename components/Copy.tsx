import { Fragment } from "react";

/**
 * Chống ngắt dòng giữa chừng làm mất nghĩa.
 * - Câu được chia thành các CỤM; mỗi cụm là `inline-block`: còn vừa dòng thì
 *   nguyên cụm đi cùng nhau, không vừa thì cả cụm xuống dòng (chỉ cụm dài hơn
 *   khung mới bị bẻ bên trong).
 * - Mặc định tự chia sau dấu , ; : . ? ! — – · (dấu luôn nằm cuối dòng trước).
 *   Muốn tự quyết ranh giới cụm thì đặt dấu `|` trong chuỗi (khi có `|` thì
 *   KHÔNG tự chia theo dấu câu nữa).
 * - Dính liền bằng khoảng trắng không ngắt: tên "Song Sát Tử Vi" và "số + đơn vị"
 *   (vd "30 phút", "1 vấn đề") để không tách đôi.
 * Dùng: <Copy text="..." />
 */
const TERMS = /(tử vi|kinh dịch|bói bài|bài tây|huyền học|chỉ tay|nhân tướng|lá số|đại vận|vận hạn|vận mệnh|gia đạo|hôn nhân|tình duyên|sự nghiệp|tài chính|giờ sinh)/gi;

export function glue(s: string) {
  return s
    .replace(TERMS, (m) => m.replace(/ /g, " "))
    .replace(/Song Sát Tử Vi/g, "Song Sát Tử Vi")
    .replace(/(\d)\s+(?=\S)/g, "$1 ");
}

/** Gộp cụm quá ngắn (< 16 ký tự) vào cụm kế tiếp để dòng không bị bỏ trống lẻ loi. */
function mergeShort(parts: string[]) {
  const out: string[] = [];
  let acc = "";
  for (const p of parts) {
    acc = acc ? acc + " " + p : p;
    if (acc.length >= 16) {
      out.push(acc);
      acc = "";
    }
  }
  if (acc) {
    if (out.length) out[out.length - 1] += " " + acc;
    else out.push(acc);
  }
  return out;
}

export default function Copy({ text }: { text: string }) {
  const g = glue(text);
  const parts = g.includes("|")
    ? g.split(/s*|s*/).filter(Boolean)
    : mergeShort(g.split(/(?<=[,;:.?!…—–·])s+/).filter(Boolean));
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="inline-block">{p}</span>
        </Fragment>
      ))}
    </>
  );
}
