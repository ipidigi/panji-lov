import { FileText, Building2, Scale, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const legalDocuments = [
  {
    icon: FileText,
    title: "Akta Pendirian",
    description: "Akta Notaris pendirian Perkumpulan Pamong Jiwa Indonesia yang disahkan sesuai dengan hukum yang berlaku di Indonesia.",
    number: "No. XX Tahun 2022",
  },
  {
    icon: Building2,
    title: "SK Kemenkumham",
    description: "Surat Keputusan Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia tentang pengesahan badan hukum perkumpulan.",
    number: "AHU-XXXXXXXXXX.XX.XX.XXXX",
  },
  {
    icon: Scale,
    title: "NPWP Organisasi",
    description: "Nomor Pokok Wajib Pajak organisasi yang terdaftar di Direktorat Jenderal Pajak.",
    number: "XX.XXX.XXX.X-XXX.XXX",
  },
  {
    icon: CheckCircle,
    title: "Surat Keterangan Domisili",
    description: "Surat Keterangan Domisili Usaha dari pemerintah daerah setempat.",
    number: "No. XXX/XXX/XXXX",
  },
];

export default function LegalitasPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <a href="/tentang" className="hover:text-primary-foreground">Tentang</a>
              <span className="mx-2">/</span>
              <span>Legalitas</span>
            </nav>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Legalitas
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Status hukum dan dokumen legalitas PANJI sebagai organisasi profesi yang sah.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 rounded-2xl border border-accent/30 bg-accent/5 p-8 md:p-12">
              <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
                Status Badan Hukum
              </h2>
              <p className="text-lg text-muted-foreground">
                PANJI – Perkumpulan Pamong Jiwa Indonesia adalah organisasi berbadan hukum yang 
                didirikan berdasarkan hukum Indonesia. Organisasi ini terdaftar secara resmi dan 
                memiliki status legal yang diakui oleh pemerintah Republik Indonesia.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {legalDocuments.map((doc, index) => (
                <Card key={index} className="border-border/50 transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <doc.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-lg">{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                    <p className="font-mono text-sm font-medium text-primary">{doc.number}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-muted-foreground">
              Untuk informasi lebih lanjut mengenai dokumen legalitas atau verifikasi status organisasi, 
              silakan hubungi sekretariat PANJI melalui halaman <a href="/tentang/kontak" className="text-primary hover:underline">Kontak</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
