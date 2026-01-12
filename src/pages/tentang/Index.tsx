import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, CheckCircle, Scale, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    icon: Eye,
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
    icon: CheckCircle,
    title: "Kerja Sama Internasional",
    description: "Membangun kerja sama internasional yang setara, saling mendukung, dan berbasis pertukaran keilmuan dalam bidang psikoanalisis dan kesehatan mental global.",
  },
];

const subPages = [
  { name: "Sejarah Gerakan", href: "/tentang/sejarah", description: "Perjalanan dan perkembangan PANJI" },
  { name: "Visi dan Misi", href: "/tentang/visi-misi", description: "Arah dan tujuan organisasi" },
  { name: "Legalitas", href: "/tentang/legalitas", description: "Status hukum dan legalitas" },
  { name: "Komite Partai Kerja", href: "/tentang/komite", description: "Struktur organisasi" },
  { name: "Badan Usaha", href: "/tentang/badan-usaha", description: "Unit bisnis PANJI" },
  { name: "Lingkar Studi", href: "/tentang/lingkar-studi", description: "Komunitas pembelajaran" },
  { name: "Afiliasi & Kolaborasi", href: "/tentang/afiliasi", description: "Mitra dan kerjasama" },
  { name: "Kontak", href: "/tentang/kontak", description: "Hubungi kami" },
];

export default function TentangPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Tentang PANJI
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Perkumpulan Pamong Jiwa Indonesia adalah organisasi profesi yang berfokus pada 
              pengembangan, penerapan, dan diseminasi psikoanalisis dalam konteks Indonesia 
              serta dalam dialog setara dengan komunitas global.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-2xl border border-accent/30 bg-accent/5 p-8 md:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
                <Eye className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm font-semibold text-accent-foreground">Visi</span>
              </div>
              <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                Menjadi organisasi profesi psikoanalis Indonesia yang <strong>kompeten</strong>, 
                <strong> cendekia</strong>, <strong>berbudaya</strong>, dan diakui secara 
                nasional maupun internasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">Misi</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Enam pilar misi yang menjadi landasan kerja PANJI dalam mengembangkan psikoanalisis di Indonesia.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission, index) => (
              <Card key={index} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <mission.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">{mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Pages Navigation */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Jelajahi Lebih Lanjut
            </h2>
            <p className="text-muted-foreground">
              Pelajari lebih dalam tentang berbagai aspek organisasi PANJI.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subPages.map((page) => (
              <Link
                key={page.name}
                to={page.href}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                  {page.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">{page.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Pelajari
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
