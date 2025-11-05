import { ArrowRight, Mail, Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:gap-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs text-indigo-700 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Content Writer × Frontend Developer</span>
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              <span className="text-indigo-600">[Nama Anda]</span>, saya menulis kata yang berdampak dan membangun antarmuka yang nyaman dipakai.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Fokus pada <span className="font-medium text-slate-800">[Fokus penulisan]</span> dan pengembangan web modern
              dengan HTML, CSS, JavaScript, serta framework seperti <span className="font-medium text-slate-800">[Framework Anda]</span>.
              Narasi yang jelas dan UI yang intuitif adalah kunci pengalaman pengguna yang berkesan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-800">
                <Mail className="h-4 w-4" />
                <span>Kolaborasi Yuk</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 transition hover:border-slate-400">
                <Rocket className="h-4 w-4" />
                <span>Lihat Proyek</span>
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Tagline: "Menulis yang memandu. Desain yang memudahkan. Produk yang memajukan."
            </p>
          </div>
          <div className="relative ml-auto w-full max-w-sm md:max-w-md">
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-[1px] shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                <div className="p-8 text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-indigo-100" />
                  <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">Personal Branding</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Tulis. Rancang. Uji. Ulangi.</h3>
                  <p className="mt-2 text-sm text-slate-600">Kata dan kode yang bekerja bersama untuk mencapai tujuan bisnis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
