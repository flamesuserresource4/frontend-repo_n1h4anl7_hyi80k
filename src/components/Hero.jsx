import { ArrowRight, Mail, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <header className="relative overflow-hidden" id="home">
      {/* Soft background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:gap-16">
          {/* Left: Copy + CTAs */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-white/5 px-3 py-1 text-xs text-indigo-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span className="text-indigo-200">Content Writer × Frontend Developer</span>
            </div>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
              <span className="bg-gradient-to-r from-indigo-300 via-white to-indigo-300 bg-clip-text text-transparent">[Nama Anda]</span>, saya menulis kata yang berdampak dan membangun antarmuka yang nyaman dipakai.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-indigo-100/90">
              Fokus pada <span className="font-medium text-white">[Fokus penulisan]</span> dan pengembangan web modern
              dengan HTML, CSS, JavaScript, serta framework seperti <span className="font-medium text-white">[Framework Anda]</span>.
              Narasi yang jelas dan UI yang intuitif adalah kunci pengalaman pengguna yang berkesan.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white shadow-sm ring-1 ring-white/20 transition hover:bg-white/20">
                <Mail className="h-4 w-4" />
                <span>Kolaborasi Yuk</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-indigo-100 transition hover:border-white/30 hover:bg-white/10">
                <Rocket className="h-4 w-4" />
                <span>Lihat Proyek</span>
              </a>
            </div>
            <p className="mt-6 text-sm text-indigo-200/80">
              Tagline: "Menulis yang memandu. Desain yang memudahkan. Produk yang memajukan."
            </p>
          </motion.div>

          {/* Right: 3D Spline scene */}
          <motion.div
            className="relative ml-auto w-full max-w-sm md:max-w-md"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="h-72 w-full md:h-[520px]">
                <Spline
                  scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              {/* subtle highlight overlay that doesn't block interaction */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient glow gradients that don't block Spline interaction */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-8 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl" />
    </header>
  );
}
