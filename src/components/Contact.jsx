import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Mail className="h-4 w-4" />
              Kontak & Kolaborasi
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Punya ide atau proyek? Saya siap membantu.</h2>
            <p className="mt-2 text-slate-600">Kirim email singkat tentang kebutuhan Anda, target pengguna, dan timeline. Saya akan membalas dengan rencana singkat dan langkah berikutnya.</p>
            <div className="mt-6 space-y-2 text-slate-700">
              <p><span className="font-medium">Email:</span> [email@anda.com]</p>
              <p><span className="font-medium">LinkedIn:</span> [linkedin.com/in/username]</p>
              <p><span className="font-medium">GitHub/Portfolio Code:</span> [github.com/username]</p>
            </div>
          </div>
          <form className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nama</label>
              <input type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" placeholder="email@anda.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Pesan</label>
              <textarea className="mt-1 h-28 w-full resize-none rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none" placeholder="Ceritakan singkat kebutuhan proyek Anda" />
            </div>
            <button type="button" className="w-full rounded-lg bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-800">Kirim Pesan</button>
            <p className="text-xs text-slate-500">Form demo (non-aktif). Gunakan email untuk respon cepat.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
