import { Building, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const businessUnits = [
  {
    icon: GraduationCap,
    name: "Institut Pelatihan PANJI",
    description: "Unit yang menyelenggarakan program pendidikan dan pelatihan psikoanalisis untuk calon psikoanalis dan profesional kesehatan mental.",
    services: ["Pelatihan Dasar Psikoanalisis", "Pelatihan Lanjutan", "Supervisi Klinis", "Workshop Tematik"],
  },
  {
    icon: BookOpen,
    name: "PANJI Publishing",
    description: "Unit penerbitan yang memproduksi dan mendistribusikan buku, jurnal, dan publikasi psikoanalisis.",
    services: ["Buku Psikoanalisis", "Jurnal Akademis", "Majalah Berkala", "E-book & Digital Content"],
  },
  {
    icon: Briefcase,
    name: "PANJI Consulting",
    description: "Unit konsultasi yang menyediakan layanan psikoanalisis organisasi untuk perusahaan dan institusi.",
    services: ["Konsultasi Organisasi", "Asesmen Psikologis", "Pengembangan SDM", "Coaching Eksekutif"],
  },
  {
    icon: Building,
    name: "Klinik PANJI",
    description: "Unit layanan klinis yang menyediakan terapi psikoanalisis langsung kepada masyarakat.",
    services: ["Psikoterapi Individual", "Terapi Kelompok", "Psikoanalisis Anak & Remaja", "Konsultasi Keluarga"],
  },
];

export default function BadanUsahaPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <a href="/tentang" className="hover:text-primary-foreground">Tentang</a>
              <span className="mx-2">/</span>
              <span>Badan Usaha</span>
            </nav>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Badan Usaha
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Unit-unit bisnis PANJI yang mendukung keberlanjutan organisasi dan pengembangan profesi.
            </p>
          </div>
        </div>
      </section>

      {/* Business Units */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {businessUnits.map((unit, index) => (
              <Card key={index} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <unit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{unit.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{unit.description}</p>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">Layanan:</h4>
                    <ul className="grid gap-1 text-sm text-muted-foreground">
                      {unit.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-muted-foreground">
              Untuk informasi lebih lanjut mengenai layanan badan usaha PANJI atau kerjasama bisnis, 
              silakan hubungi kami melalui halaman <a href="/tentang/kontak" className="text-primary hover:underline">Kontak</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
