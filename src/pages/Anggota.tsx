import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const members = [
  { name: "Dr. [Nama Anggota 1]", category: "Guru Pamong", specialty: "Psikoanalisis Klinis", location: "Jakarta" },
  { name: "[Nama Anggota 2], M.Psi.", category: "Pamong Jiwa", specialty: "Psikoterapi Anak", location: "Bandung" },
  { name: "[Nama Anggota 3], S.Psi.", category: "Penuntun Jiwa", specialty: "Konseling", location: "Surabaya" },
  { name: "Dr. [Nama Anggota 4]", category: "Guru Pamong", specialty: "Psikoanalisis Organisasi", location: "Jakarta" },
  { name: "[Nama Anggota 5], M.Psi.", category: "Pamong Jiwa", specialty: "Trauma & PTSD", location: "Yogyakarta" },
  { name: "[Nama Anggota 6], S.Psi.", category: "Penuntun Jiwa", specialty: "Kesehatan Mental", location: "Semarang" },
];

const categoryColors: Record<string, string> = {
  "Guru Pamong": "bg-accent text-accent-foreground",
  "Pamong Jiwa": "bg-primary text-primary-foreground",
  "Penuntun Jiwa": "bg-secondary text-secondary-foreground",
};

export default function AnggotaPage() {
  return (
    <Layout>
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Direktori Anggota</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
            Temukan psikoanalis profesional PANJI di seluruh Indonesia.
          </p>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari anggota..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              {["Guru Pamong", "Pamong Jiwa", "Penuntun Jiwa"].map((cat) => (
                <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-accent">{cat}</Badge>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((m, i) => (
              <Card key={i} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <span className="font-serif text-xl font-bold text-primary">{m.name.charAt(0)}</span>
                  </div>
                  <Badge className={categoryColors[m.category]}>{m.category}</Badge>
                  <CardTitle className="mt-2 font-serif text-lg">{m.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{m.specialty}</p>
                  <p className="text-sm text-muted-foreground">📍 {m.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
