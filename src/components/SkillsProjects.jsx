import { Code, Pencil, ExternalLink } from "lucide-react";

const skills = {
  writing: [
    { name: "Artikel Panjang", desc: "Riset, struktur, dan narasi yang mudah diikuti." },
    { name: "Copywriting & Microcopy", desc: "CTA, onboarding, empty state, dan pesan kesalahan yang jelas." },
    { name: "UX Writing", desc: "Bahasa yang memandu pengguna di setiap langkah." },
    { name: "Storytelling", desc: "Menyampaikan nilai produk melalui cerita yang relevan." },
  ],
  dev: [
    { name: "HTML / Semantik", desc: "Struktur bersih dan aksesibel." },
    { name: "CSS / Tailwind", desc: "UI konsisten, responsif, dan dapat di-scale." },
    { name: "JavaScript / React", desc: "Interaksi modern dan komponen reusable." },
    { name: "Performance", desc: "Fokus pada kecepatan dan pengalaman nyata pengguna." },
  ],
};

const projects = [
  {
    name: "Guided Onboarding UI",
    role: "UX Writer & Frontend Dev",
    goal: "Mengurangi kebingungan pengguna baru dan meningkatkan aktivasi.",
    tools: "React, Tailwind, Framer Motion",
    impact: "Waktu penyelesaian onboarding turun 32%, tingkat aktivasi naik 18%.",
    link: "#",
  },
  {
    name: "Blog Tech Minimalis",
    role: "Content Strategist & Web Dev",
    goal: "Menyajikan artikel edukasi dengan navigasi yang simpel dan cepat.",
    tools: "Vite, React, MDX, Tailwind",
    impact: "Durasi baca rata-rata naik 27%, bounce rate turun 15%.",
    link: "#",
  },
  {
    name: "Landing Page Kampanye",
    role: "Copywriter & UI Dev",
    goal: "Menyampaikan pesan utama kampanye dan mendorong pendaftaran.",
    tools: "Next.js, Tailwind, A/B Testing",
    impact: "CTR tombol utama naik 22%, cost per lead turun 11%.",
    link: "#",
  },
];

export default function SkillsProjects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Skills */}
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Pencil className="h-4 w-4" />
              Keterampilan Menulis
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Menulis yang membantu pengguna membuat keputusan</h3>
            <ul className="mt-4 space-y-3">
              {skills.writing.map((s) => (
                <li key={s.name} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-medium text-slate-900">{s.name}</p>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Code className="h-4 w-4" />
              Keterampilan Frontend
            </div>
            <h3 className="text-xl font-semibold text-slate-900">UI cepat, bersih, dan ramah pengguna</h3>
            <ul className="mt-4 space-y-3">
              {skills.dev.map((s) => (
                <li key={s.name} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-medium text-slate-900">{s.name}</p>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            Proyek Terpilih
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Menggabungkan kata dan kode untuk mencapai tujuan</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-slate-100 to-slate-50" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="text-sm text-slate-600">Peran: {p.role}</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="font-medium text-slate-800">Tujuan</dt>
                    <dd className="text-slate-600">{p.goal}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-800">Alat/Tech</dt>
                    <dd className="text-slate-600">{p.tools}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-800">Hasil/Dampak</dt>
                    <dd className="text-slate-600">{p.impact}</dd>
                  </div>
                </dl>
                <a href={p.link} className="mt-4 inline-flex items-center gap-2 text-indigo-700 hover:underline">
                  Lihat detail
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
