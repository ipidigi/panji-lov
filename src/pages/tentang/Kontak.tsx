import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    details: ["Jl. [Nama Jalan] No. XX", "Jakarta, Indonesia 12XXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@panji.or.id", "sekretariat@panji.or.id"],
  },
  {
    icon: Phone,
    title: "Telepon",
    details: ["+62 21 XXXX XXXX", "+62 8XX XXXX XXXX (WhatsApp)"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 09:00 - 17:00 WIB", "Sabtu: 09:00 - 13:00 WIB"],
  },
];

export default function KontakPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <nav className="mb-4 text-sm text-primary-foreground/70">
              <a href="/tentang" className="hover:text-primary-foreground">Tentang</a>
              <span className="mx-2">/</span>
              <span>Kontak</span>
            </nav>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Hubungi Kami
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Kami siap membantu Anda. Hubungi kami melalui berbagai kanal yang tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Informasi Kontak
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-border/50">
                    <CardHeader className="pb-2">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video overflow-hidden rounded-xl bg-muted">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Peta Lokasi</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Kirim Pesan
              </h2>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nama Lengkap
                    </label>
                    <Input id="name" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="email@contoh.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Nomor Telepon
                  </label>
                  <Input id="phone" placeholder="+62 8XX XXXX XXXX" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subjek
                  </label>
                  <Input id="subject" placeholder="Perihal pesan Anda" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tuliskan pesan Anda di sini..."
                    rows={6}
                  />
                </div>
                
                <Button type="submit" className="w-full gap-2 sm:w-auto">
                  <Send className="h-4 w-4" />
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
