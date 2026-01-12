import { Heart, Building2, Baby, GraduationCap, Palette, Brain, Sparkles, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const studyCircles = [
  {
    id: "lpkmi",
    icon: Heart,
    abbr: "LPKMI",
    name: "Lingkar Psikoanalisis Kesehatan Mental Indonesia",
    description: "Fokus pada pengembangan dan penerapan psikoanalisis dalam bidang kesehatan mental, termasuk penanganan gangguan jiwa dan promosi kesehatan mental masyarakat.",
    focus: ["Psikoterapi klinis", "Kesehatan mental komunitas", "Pencegahan gangguan jiwa", "Rehabilitasi psikososial"],
    color: "bg-blue-500",
  },
  {
    id: "lpoi",
    icon: Building2,
    abbr: "LPOI",
    name: "Lingkar Psikoanalisis Organisasi Indonesia",
    description: "Menerapkan pendekatan psikoanalisis dalam konteks organisasi dan dunia kerja untuk memahami dinamika kelompok dan pengembangan kepemimpinan.",
    focus: ["Konsultasi organisasi", "Pengembangan kepemimpinan", "Dinamika kelompok", "Budaya organisasi"],
    color: "bg-emerald-500",
  },
  {
    id: "lpppi",
    icon: Baby,
    abbr: "LPPPI",
    name: "Lingkar Psikoanalisis Perkembangan dan Pengasuhan Indonesia",
    description: "Mengkaji perkembangan psikis manusia dari perspektif psikoanalisis dan menerapkannya dalam praktik pengasuhan yang sehat.",
    focus: ["Perkembangan anak", "Pola asuh", "Attachment theory", "Intervensi dini"],
    color: "bg-amber-500",
  },
  {
    id: "lppsi",
    icon: GraduationCap,
    abbr: "LPPSI",
    name: "Lingkar Psikoanalisis Pendidikan dan Sekolah Indonesia",
    description: "Menerapkan wawasan psikoanalisis dalam dunia pendidikan untuk memahami proses belajar dan dinamika relasi guru-murid.",
    focus: ["Psikologi pendidikan", "Konseling sekolah", "Pengembangan kurikulum", "Manajemen kelas"],
    color: "bg-purple-500",
  },
  {
    id: "lpssi",
    icon: Palette,
    abbr: "LPSSI",
    name: "Lingkar Psikoanalisis Seni dan Sastra Indonesia",
    description: "Mengeksplorasi hubungan antara psikoanalisis dengan ekspresi artistik dan karya sastra dalam konteks budaya Indonesia.",
    focus: ["Kritik seni", "Analisis sastra", "Art therapy", "Kreativitas dan unconscious"],
    color: "bg-rose-500",
  },
  {
    id: "lpmpi",
    icon: Brain,
    abbr: "LPMPI",
    name: "Lingkar Psikoanalisis dan Metode Proyektif Indonesia",
    description: "Fokus pada pengembangan dan penerapan metode asesmen proyektif dalam praktik psikoanalisis dan psikologi klinis.",
    focus: ["Tes Rorschach", "TAT", "Asesmen kepribadian", "Penelitian proyektif"],
    color: "bg-cyan-500",
  },
  {
    id: "lpsi",
    icon: Sparkles,
    abbr: "LPSI",
    name: "Lingkar Psikoanalisis Spiritual Indonesia",
    description: "Mengkaji dimensi spiritual dalam psikoanalisis dan dialognya dengan tradisi kebijaksanaan Indonesia dan Asia.",
    focus: ["Spiritualitas dan psike", "Dialog lintas tradisi", "Meditasi dan analisis", "Meaning-making"],
    color: "bg-indigo-500",
  },
  {
    id: "lse",
    icon: Zap,
    abbr: "LSE",
    name: "Lingkar Studi Ericksonian",
    description: "Mempelajari dan mengembangkan pendekatan hipnoterapi Ericksonian dan integrasinya dengan psikoanalisis.",
    focus: ["Hipnoterapi", "Terapi singkat", "Pendekatan Ericksonian", "Teknik utilization"],
    color: "bg-orange-500",
  },
];

export default function LingkarStudiPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <a href="/tentang" className="hover:text-primary-foreground">Tentang</a>
              <span className="mx-2">/</span>
              <span>Lingkar Studi</span>
            </nav>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Lingkar Studi
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Komunitas pembelajaran khusus untuk berbagai bidang terapan psikoanalisis di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Study Circles Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {studyCircles.map((circle) => (
              <Card
                key={circle.id}
                id={circle.id}
                className="border-border/50 transition-shadow hover:shadow-lg scroll-mt-24"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${circle.color}`}>
                      <circle.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <span className="mb-1 inline-block rounded-full bg-muted px-2 py-0.5 text-xs font-semibold">
                        {circle.abbr}
                      </span>
                      <CardTitle className="font-serif text-lg leading-tight">{circle.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{circle.description}</p>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">Area Fokus:</h4>
                    <div className="flex flex-wrap gap-2">
                      {circle.focus.map((item, idx) => (
                        <span
                          key={idx}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Bergabung dengan Lingkar Studi
            </h2>
            <p className="mb-6 text-muted-foreground">
              Anggota PANJI dapat bergabung dengan satu atau lebih lingkar studi sesuai minat dan keahlian. 
              Hubungi sekretariat untuk informasi lebih lanjut.
            </p>
            <a
              href="/tentang/kontak"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
