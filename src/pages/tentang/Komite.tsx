import { User, Users, BookOpen, Shield, Heart, Megaphone, Lightbulb, Wallet, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const executives = [
  {
    role: "Presiden",
    name: "Dr. [Nama Presiden]",
    description: "Memimpin dan mengkoordinasikan seluruh kegiatan organisasi.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
  },
  {
    role: "Sekretaris",
    name: "[Nama Sekretaris]",
    description: "Mengelola administrasi dan korespondensi organisasi.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
  },
  {
    role: "Bendahara",
    name: "[Nama Bendahara]",
    description: "Mengelola keuangan dan aset organisasi.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
];

const committees = [
  {
    icon: BookOpen,
    name: "Komite Pelatihan",
    description: "Mengembangkan dan menyelenggarakan program pelatihan dan pendidikan psikoanalisis.",
  },
  {
    icon: Users,
    name: "Komite Keanggotaan",
    description: "Mengelola proses pendaftaran, kualifikasi, dan pengembangan anggota.",
  },
  {
    icon: Shield,
    name: "Komite Etika",
    description: "Menegakkan kode etik profesi dan menangani permasalahan etika anggota.",
  },
  {
    icon: Heart,
    name: "Komite Layanan",
    description: "Mengkoordinasikan dan mengawasi kualitas layanan psikoanalisis kepada masyarakat.",
  },
  {
    icon: Megaphone,
    name: "Komite Hubungan Masyarakat",
    description: "Mengelola komunikasi publik, media, dan hubungan dengan pemangku kepentingan.",
  },
  {
    icon: Lightbulb,
    name: "Komite Tradisi dan Inovasi",
    description: "Menjaga tradisi psikoanalisis sekaligus mendorong inovasi dan pengembangan baru.",
  },
];

export default function KomitePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <a href="/tentang" className="hover:text-primary-foreground">Tentang</a>
              <span className="mx-2">/</span>
              <span>Komite Partai Kerja</span>
            </nav>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Komite Partai Kerja
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Struktur organisasi dan pengurus PANJI yang menjalankan roda organisasi.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">Dewan Pengurus</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Pimpinan utama yang mengkoordinasikan seluruh kegiatan organisasi.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {executives.map((exec, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
                  <img
                    src={exec.image}
                    alt={exec.role}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">{exec.role}</h3>
                <p className="mb-2 font-medium text-primary">{exec.name}</p>
                <p className="text-sm text-muted-foreground">{exec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">Komite-Komite</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Unit kerja yang menjalankan fungsi-fungsi spesifik organisasi.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {committees.map((committee, index) => (
              <Card key={index} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <committee.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">{committee.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{committee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
