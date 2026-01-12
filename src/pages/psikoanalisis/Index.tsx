import { Brain, BookOpen, Heart, Lightbulb, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const sections = [
  { icon: Brain, name: "Apa itu Psikoanalisis?", href: "/psikoanalisis/pengenalan", desc: "Pengenalan dasar" },
  { icon: BookOpen, name: "Landasan Ilmiah", href: "/psikoanalisis/landasan-ilmiah", desc: "Basis teori dan riset" },
  { icon: Heart, name: "Khasiat Psikoanalisis", href: "/psikoanalisis/khasiat", desc: "Manfaat berbasis bukti" },
  { icon: Lightbulb, name: "Ragam Terapan", href: "/psikoanalisis/ragam-terapan", desc: "Berbagai aplikasi" },
  { icon: FileText, name: "Referensi", href: "/psikoanalisis/referensi", desc: "Daftar pustaka" },
];

export default function PsikoanalisisPage() {
  return (
    <Layout>
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Psikoanalisis</h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
            Memahami jiwa manusia melalui pendekatan psikoanalisis yang telah teruji lebih dari satu abad.
          </p>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Psikoanalisis adalah metode investigasi pikiran, teori kepribadian, dan pendekatan psikoterapi 
              yang dikembangkan oleh Sigmund Freud dan dikembangkan oleh banyak ahli setelahnya.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((s) => (
                <Link key={s.name} to={s.href} className="group">
                  <Card className="h-full border-border/50 transition-all hover:border-primary/30 hover:shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <s.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-serif text-lg group-hover:text-primary">{s.name}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="text-sm text-muted-foreground">{s.desc}</p></CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
