import { Eye, Target, CheckCircle, Scale, Building, Users, BookOpen, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const missions = [
  {
    icon: Target,
    title: "Kurikulum Terstandar",
    description: "Mengembangkan kurikulum psikoanalisis berbasis kompetensi yang terstandar, kontekstual, dan berkelanjutan.",
  },
  {
    icon: Users,
    title: "Layanan Aman & Etis",
    description: "Menyediakan dan memajukan layanan psikoanalisis yang aman, etis, dan peka terhadap budaya Indonesia bagi masyarakat pengguna jasa.",
  },
  {
    icon: BookOpen,
    title: "Penelitian Kritis",
    description: "Mendorong, memfasilitasi, dan mempublikasikan penelitian psikoanalisis yang kritis dan relevan bagi pengembangan ilmu serta praktik profesional.",
  },
  {
    icon: Building,
    title: "Penyebaran Pengetahuan",
    description: "Menyebarluaskan pengetahuan dan wacana psikoanalisis melalui penerbitan buku, jurnal, dan terbitan berkala bagi anggota dan masyarakat luas.",
  },
  {
    icon: Scale,
    title: "Kode Etik Profesi",
    description: "Menegakkan kode etik profesi serta melakukan pengawasan dan pembinaan anggota guna menjaga mutu, tanggung jawab, dan kepercayaan publik.",
  },
  {
    icon: Globe,
    title: "Kerja Sama Internasional",
    description: "Membangun kerja sama internasional yang setara, saling mendukung, dan berbasis pertukaran keilmuan dalam bidang psikoanalisis dan kesehatan mental global.",
  },
];

export default function VisiMisiPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <a href="/tentang" className="hover:text-primary-foreground">Tentang</a>
              <span className="mx-2">/</span>
              <span>Visi dan Misi</span>
            </nav>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Visi dan Misi
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Arah dan tujuan PANJI dalam mengembangkan psikoanalisis di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <Eye className="h-7 w-7 text-accent-foreground" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Visi</h2>
              </div>
              <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                Menjadi organisasi profesi psikoanalis Indonesia yang{" "}
                <span className="font-semibold text-primary">kompeten</span>,{" "}
                <span className="font-semibold text-primary">cendekia</span>,{" "}
                <span className="font-semibold text-primary">berbudaya</span>, dan diakui secara 
                nasional maupun internasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <CheckCircle className="h-7 w-7 text-primary-foreground" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Misi</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission, index) => (
              <Card key={index} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <mission.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">{mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
              Nilai-Nilai Kami
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {["Kompeten", "Cendekia", "Berbudaya", "Beretika"].map((value, index) => (
                <div key={index} className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <span className="font-serif text-lg font-semibold text-primary">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
