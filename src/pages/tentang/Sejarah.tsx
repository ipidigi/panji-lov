import Layout from "@/components/layout/Layout";

const timelineEvents = [
  {
    year: "2020",
    title: "Inisiasi Gerakan",
    description: "Sekelompok psikoanalis Indonesia memulai diskusi tentang perlunya wadah profesi yang terorganisir dan berorientasi pada konteks lokal.",
  },
  {
    year: "2021",
    title: "Pembentukan Kelompok Studi",
    description: "Terbentuknya kelompok studi psikoanalisis pertama yang menjadi cikal bakal lingkar studi PANJI.",
  },
  {
    year: "2022",
    title: "Deklarasi PANJI",
    description: "Secara resmi dideklarasikan Perkumpulan Pamong Jiwa Indonesia (PANJI) sebagai organisasi profesi psikoanalis.",
  },
  {
    year: "2023",
    title: "Pengembangan Kurikulum",
    description: "Mulai menyusun kurikulum pelatihan psikoanalisis berbasis kompetensi yang terstandar.",
  },
  {
    year: "2024",
    title: "Kolaborasi Internasional",
    description: "Membangun kerja sama dengan organisasi psikoanalisis internasional dan berpartisipasi dalam forum global.",
  },
  {
    year: "2025",
    title: "Peluncuran Lingkar Studi",
    description: "Peluncuran resmi 8 Lingkar Studi yang mencakup berbagai bidang terapan psikoanalisis.",
  },
];

export default function SejarahPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <a href="/tentang" className="hover:text-primary-foreground">Tentang</a>
              <span className="mx-2">/</span>
              <span>Sejarah Gerakan</span>
            </nav>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Sejarah Gerakan
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Perjalanan dan perkembangan PANJI dari masa ke masa.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-0.5" />
              
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative mb-12 flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year badge */}
                  <div className="mb-4 flex items-center gap-4 md:mb-0 md:w-1/2 md:justify-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg">
                      <span className="font-serif text-lg font-bold">{event.year}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                      <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="font-serif text-2xl italic text-foreground md:text-3xl">
              "Perjalanan seribu mil dimulai dengan satu langkah. PANJI adalah langkah besar 
              untuk psikoanalisis Indonesia."
            </blockquote>
            <p className="mt-6 text-muted-foreground">— Pendiri PANJI</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
