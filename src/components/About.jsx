import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-start gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <User className="h-4 w-4" />
              Tentang Saya
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Tentang Saya</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-700 leading-relaxed">
              Saya adalah <span className="font-medium">Content Writer</span> dan <span className="font-medium">Frontend Web Developer</span> yang percaya bahwa
              kata-kata yang tepat dan antarmuka yang jelas dapat mempercepat pemahaman pengguna dan mendorong tindakan.
              Saya terbiasa menyusun artikel, microcopy, dan UX writing yang ringkas; sekaligus membangun UI yang cepat,
              responsif, dan mudah dipelajari.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Saat ini, saya fokus pada <span className="font-medium">[Fokus penulisan]</span> dan memperdalam <span className="font-medium">[Framework/Stack]</span>.
              Di luar pekerjaan, saya senang membaca, menulis ide singkat, dan menguji prototipe kecil untuk mengasah sensitivitas desain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
