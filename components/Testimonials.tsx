import { TESTIMONIALS } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-ss-plum sm:text-4xl">
          Cảm nhận khách hàng
        </h2>
        <p className="mt-2 text-ss-plum/60">
          Điều khách hàng nói sau khi được Thỏ đồng hành.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-2xl border border-ss-purple/12 bg-white p-5 shadow-sm"
          >
            <div className="text-ss-gold" aria-label={`${t.stars} sao`}>
              {"★".repeat(t.stars)}
              <span className="text-ss-purple/20">{"★".repeat(5 - t.stars)}</span>
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ss-plum/80">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 border-t border-ss-purple/10 pt-3">
              <div className="font-display text-sm font-bold text-ss-plum">{t.name}</div>
              <div className="text-xs text-ss-magenta">{t.service}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
