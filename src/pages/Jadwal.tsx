import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

const events = [
  { date: "15", month: "Feb", year: "2026", title: "Seminar Psikoanalisis dan Budaya Indonesia", location: "Jakarta", time: "09:00-16:00", type: "Seminar" },
  { date: "22", month: "Feb", year: "2026", title: "Workshop Metode Proyektif", location: "Online", time: "13:00-17:00", type: "Workshop" },
  { date: "08", month: "Mar", year: "2026", title: "Konferensi Tahunan PANJI 2026", location: "Yogyakarta", time: "08:00-17:00", type: "Konferensi" },
  { date: "15", month: "Mar", year: "2026", title: "Pelatihan Dasar Psikoanalisis", location: "Jakarta", time: "09:00-16:00", type: "Pelatihan" },
  { date: "22", month: "Apr", year: "2026", title: "Diskusi Lingkar Studi LPKMI", location: "Online", time: "19:00-21:00", type: "Diskusi" },
];

export default function JadwalPage() {
  return (
    <Layout>
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Jadwal Acara</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">Kegiatan dan acara PANJI yang akan datang.</p>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            {events.map((e, i) => (
              <Card key={i} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="flex flex-col items-center rounded-lg bg-accent px-4 py-2 text-accent-foreground">
                    <span className="text-2xl font-bold">{e.date}</span>
                    <span className="text-xs uppercase">{e.month}</span>
                    <span className="text-xs">{e.year}</span>
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">{e.type}</Badge>
                    <CardTitle className="font-serif text-xl">{e.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {e.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {e.time} WIB</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
