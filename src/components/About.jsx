import { User } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-start gap-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <User className="h-4 w-4" />
              Tentang Saya
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Tentang Saya</h2>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="leading-relaxed text-slate-700">
              Saya adalah <span className="font-medium">Content Writer</span> dan <span className="font-medium">Frontend Web Developer</span> yang percaya bahwa
              kata-kata yang tepat dan antarmuka yang jelas dapat mempercepat pemahaman pengguna dan mendorong tindakan.
              Saya terbiasa menyusun artikel, microcopy, dan UX writing yang ringkas; sekaligus membangun UI yang cepat,
              responsif, dan mudah dipelajari.
            </p>
            <p className="mt-4 leading-relaxed text-slate-700">
              Saat ini, saya fokus pada <span className="font-medium">[Fokus penulisan]</span> dan memperdalam <span className="font-medium">[Framework/Stack]</span>.
              Di luar pekerjaan, saya senang membaca, menulis ide singkat, dan menguji prototipe kecil untuk mengasah sensitivitas desain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
