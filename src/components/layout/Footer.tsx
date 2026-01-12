import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "Tentang PANJI", href: "/tentang" },
  { name: "Psikoanalisis", href: "/psikoanalisis" },
  { name: "Direktori Anggota", href: "/anggota" },
  { name: "Publikasi", href: "/publikasi" },
  { name: "Jadwal Acara", href: "/jadwal" },
];

const studyCircles = [
  { name: "Kesehatan Mental (LPKMI)", href: "/tentang/lingkar-studi#lpkmi" },
  { name: "Organisasi (LPOI)", href: "/tentang/lingkar-studi#lpoi" },
  { name: "Perkembangan & Pengasuhan (LPPPI)", href: "/tentang/lingkar-studi#lpppi" },
  { name: "Pendidikan & Sekolah (LPPSI)", href: "/tentang/lingkar-studi#lppsi" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <span className="font-serif text-xl font-bold text-accent-foreground">P</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">PANJI</h3>
                <p className="text-sm text-primary-foreground/80">Pamong Jiwa Indonesia</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Indonesian Solutions for Global Mental Health. Organisasi profesi psikoanalis Indonesia
              yang kompeten, cendekia, dan berbudaya.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold">Tautan Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Circles */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold">Lingkar Studi</h4>
            <ul className="space-y-2">
              {studyCircles.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@panji.or.id" className="hover:text-accent">
                  info@panji.or.id
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+6221xxxxxxxx" className="hover:text-accent">
                  +62 21 XXXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} PANJI - Perkumpulan Pamong Jiwa Indonesia. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link to="/kebijakan-privasi" className="hover:text-accent">
              Kebijakan Privasi
            </Link>
            <Link to="/syarat-ketentuan" className="hover:text-accent">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
