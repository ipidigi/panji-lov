import { Globe, Handshake, Building2, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const internationalPartners = [
  {
    name: "International Psychoanalytical Association",
    abbr: "IPA",
    description: "Organisasi psikoanalisis internasional tertua dan terbesar di dunia.",
    type: "Afiliasi",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    name: "Asian Federation of Psychoanalysis",
    abbr: "AFP",
    description: "Federasi organisasi psikoanalisis di kawasan Asia.",
    type: "Afiliasi",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
  {
    name: "World Association for Psychoanalysis",
    abbr: "WAP",
    description: "Asosiasi dunia untuk psikoanalisis Lacanian.",
    type: "Kolaborasi",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
  },
];

const nationalPartners = [
  {
    name: "Ikatan Psikolog Klinis Indonesia",
    abbr: "IPK Indonesia",
    description: "Organisasi profesi psikolog klinis di Indonesia.",
    type: "Mitra",
  },
  {
    name: "Perhimpunan Dokter Spesialis Kedokteran Jiwa Indonesia",
    abbr: "PDSKJI",
    description: "Organisasi profesi psikiater di Indonesia.",
    type: "Mitra",
  },
  {
    name: "Himpunan Psikologi Indonesia",
    abbr: "HIMPSI",
    description: "Organisasi profesi psikologi tertua di Indonesia.",
    type: "Mitra",
  },
  {
    name: "Kementerian Kesehatan RI",
    abbr: "Kemenkes",
    description: "Kerjasama dalam pengembangan kesehatan mental nasional.",
    type: "Pemerintah",
  },
];

const academicPartners = [
  "Universitas Indonesia",
  "Universitas Gadjah Mada",
  "Universitas Airlangga",
  "Universitas Padjadjaran",
  "Universitas Sanata Dharma",
  "Atma Jaya Catholic University",
];

export default function AfiliasiPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <a href="/tentang" className="hover:text-primary-foreground">Tentang</a>
              <span className="mx-2">/</span>
              <span>Afiliasi & Kolaborasi</span>
            </nav>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Afiliasi & Kolaborasi
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Jaringan kerjasama nasional dan internasional untuk pengembangan psikoanalisis.
            </p>
          </div>
        </div>
      </section>

      {/* International Partners */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Mitra Internasional
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {internationalPartners.map((partner, index) => (
              <Card key={index} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-lg bg-muted">
                      <img src={partner.logo} alt={partner.name} className="h-full w-full object-cover" />
                    </div>
                    <span className="rounded-full bg-accent/20 px-2 py-1 text-xs font-semibold text-accent-foreground">
                      {partner.type}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-lg">{partner.abbr}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 font-medium text-foreground">{partner.name}</p>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* National Partners */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Handshake className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Mitra Nasional
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {nationalPartners.map((partner, index) => (
              <Card key={index} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-serif text-lg">{partner.abbr}</CardTitle>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                      {partner.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 font-medium text-foreground">{partner.name}</p>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Mitra Akademik
            </h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {academicPartners.map((uni, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
              >
                <Building2 className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-medium text-foreground">{uni}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
