import { Link } from "react-router-dom";
import { ArrowRight, Calendar, BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

// Hero Section
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-pattern py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Indonesian Solutions for Global Mental Health
            </span>
          </div>
          
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Perkumpulan{" "}
            <span className="text-primary">Pamong Jiwa</span>{" "}
            Indonesia
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Organisasi profesi yang berfokus pada pengembangan, penerapan, dan diseminasi 
            psikoanalisis dalam konteks Indonesia serta dalam dialog setara dengan komunitas global.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/tentang">
                Tentang Kami
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/psikoanalisis">Pelajari Psikoanalisis</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

// President Welcome Section
function PresidentWelcome() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop"
                alt="Presiden PANJI"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-border bg-card p-6 shadow-lg lg:block">
              <p className="font-serif text-lg font-semibold text-primary">Dr. [Nama Presiden]</p>
              <p className="text-sm text-muted-foreground">Presiden PANJI</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <span className="text-sm font-medium text-accent-foreground">Sambutan Presiden</span>
            </div>
            
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Membangun Kesehatan Mental Indonesia
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Selamat datang di PANJI – Perkumpulan Pamong Jiwa Indonesia. Sebagai organisasi profesi 
                psikoanalis, kami berkomitmen untuk mengembangkan dan menerapkan praktik psikoanalisis 
                yang berkualitas, etis, dan peka terhadap budaya Indonesia.
              </p>
              <p>
                Kami percaya bahwa kesehatan mental adalah hak setiap individu. Melalui PANJI, kami 
                berupaya menyediakan layanan psikoanalisis yang aman dan dapat diakses oleh masyarakat 
                Indonesia, sekaligus berkontribusi dalam dialog kesehatan mental global.
              </p>
              <p className="font-medium text-foreground">
                Bersama, mari kita wujudkan Indonesia yang lebih sehat secara jiwa.
              </p>
            </div>
            
            <Button asChild variant="outline" className="gap-2">
              <Link to="/tentang/visi-misi">
                Visi & Misi Kami
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mission Highlights
function MissionHighlights() {
  const highlights = [
    {
      icon: BookOpen,
      title: "Kurikulum Terstandar",
      description: "Mengembangkan kurikulum psikoanalisis berbasis kompetensi yang kontekstual dan berkelanjutan.",
    },
    {
      icon: Users,
      title: "Layanan Etis",
      description: "Menyediakan layanan psikoanalisis yang aman, etis, dan peka terhadap budaya Indonesia.",
    },
    {
      icon: Award,
      title: "Penelitian Kritis",
      description: "Mendorong dan mempublikasikan penelitian psikoanalisis yang relevan bagi pengembangan ilmu.",
    },
  ];

  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Misi Kami
          </h2>
          <p className="text-muted-foreground">
            Kami berkomitmen untuk mengembangkan psikoanalisis yang kompeten dan berbudaya Indonesia.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Card key={index} className="border-border/50 bg-card transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="default" className="gap-2">
            <Link to="/tentang/visi-misi">
              Lihat Semua Misi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Study Circles Preview
function StudyCirclesPreview() {
  const circles = [
    { name: "LPKMI", full: "Lingkar Psikoanalisis Kesehatan Mental Indonesia", color: "bg-blue-500" },
    { name: "LPOI", full: "Lingkar Psikoanalisis Organisasi Indonesia", color: "bg-emerald-500" },
    { name: "LPPPI", full: "Lingkar Psikoanalisis Perkembangan dan Pengasuhan Indonesia", color: "bg-amber-500" },
    { name: "LPPSI", full: "Lingkar Psikoanalisis Pendidikan dan Sekolah Indonesia", color: "bg-purple-500" },
    { name: "LPSSI", full: "Lingkar Psikoanalisis Seni dan Sastra Indonesia", color: "bg-rose-500" },
    { name: "LPMPI", full: "Lingkar Psikoanalisis dan Metode Proyektif Indonesia", color: "bg-cyan-500" },
    { name: "LPSI", full: "Lingkar Psikoanalisis Spiritual Indonesia", color: "bg-indigo-500" },
    { name: "LSE", full: "Lingkar Studi Ericksonian", color: "bg-orange-500" },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Lingkar Studi
          </h2>
          <p className="text-muted-foreground">
            Komunitas pembelajaran khusus untuk berbagai bidang terapan psikoanalisis.
          </p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {circles.map((circle, index) => (
            <Link
              key={index}
              to={`/tentang/lingkar-studi#${circle.name.toLowerCase()}`}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className={`mb-4 h-2 w-12 rounded-full ${circle.color}`} />
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                {circle.name}
              </h3>
              <p className="text-sm text-muted-foreground">{circle.full}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/tentang/lingkar-studi">
              Pelajari Lebih Lanjut
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Upcoming Events
function UpcomingEvents() {
  const events = [
    {
      date: "15",
      month: "Feb",
      year: "2026",
      title: "Seminar Psikoanalisis dan Budaya Indonesia",
      location: "Jakarta",
      type: "Seminar",
    },
    {
      date: "22",
      month: "Feb",
      year: "2026",
      title: "Workshop Metode Proyektif",
      location: "Online",
      type: "Workshop",
    },
    {
      date: "08",
      month: "Mar",
      year: "2026",
      title: "Konferensi Tahunan PANJI 2026",
      location: "Yogyakarta",
      type: "Konferensi",
    },
  ];

  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold md:text-4xl">Jadwal Terdekat</h2>
            <p className="text-primary-foreground/80">Acara dan kegiatan yang akan datang.</p>
          </div>
          <Button asChild variant="secondary" className="gap-2">
            <Link to="/jadwal">
              Lihat Semua Jadwal
              <Calendar className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="group rounded-xl bg-primary-foreground/10 p-6 backdrop-blur transition-all hover:bg-primary-foreground/15"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex flex-col items-center rounded-lg bg-accent px-3 py-2 text-accent-foreground">
                  <span className="text-2xl font-bold">{event.date}</span>
                  <span className="text-xs uppercase">{event.month}</span>
                </div>
                <div>
                  <span className="mb-1 inline-block rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs">
                    {event.type}
                  </span>
                  <h3 className="font-serif text-lg font-semibold">{event.title}</h3>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/70">📍 {event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Latest Articles Preview
function LatestArticles() {
  const articles = [
    {
      title: "Memahami Psikoanalisis dalam Konteks Budaya Nusantara",
      excerpt: "Bagaimana pendekatan psikoanalisis dapat diadaptasi untuk memahami dinamika psikis masyarakat Indonesia...",
      date: "10 Januari 2026",
      category: "Artikel",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=250&fit=crop",
    },
    {
      title: "Peran Psikoanalisis dalam Pengasuhan Anak",
      excerpt: "Menerapkan prinsip-prinsip psikoanalisis untuk memahami perkembangan emosional anak...",
      date: "5 Januari 2026",
      category: "Edukasi",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop",
    },
    {
      title: "Studi Kasus: Terapi Psikoanalisis untuk Kecemasan",
      excerpt: "Menelaah efektivitas pendekatan psikoanalisis dalam menangani gangguan kecemasan...",
      date: "28 Desember 2025",
      category: "Riset",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Artikel Terbaru
            </h2>
            <p className="text-muted-foreground">
              Wawasan dan pengetahuan seputar psikoanalisis.
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2">
            <Link to="/pengetahuan/artikel">
              Semua Artikel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-primary-foreground shadow-xl md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Bergabung dengan PANJI
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/90">
            Jadilah bagian dari komunitas profesional psikoanalis Indonesia. 
            Bersama kita membangun ekosistem kesehatan mental yang lebih baik.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/anggota">
                Direktori Anggota
                <Users className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/tentang/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Index Page
const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PresidentWelcome />
      <MissionHighlights />
      <StudyCirclesPreview />
      <UpcomingEvents />
      <LatestArticles />
      <CTASection />
    </Layout>
  );
};

export default Index;
