import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Beranda", href: "/" },
  {
    name: "Tentang PANJI",
    href: "/tentang",
    children: [
      { name: "Sejarah Gerakan", href: "/tentang/sejarah" },
      { name: "Visi dan Misi", href: "/tentang/visi-misi" },
      { name: "Legalitas", href: "/tentang/legalitas" },
      { name: "Komite Partai Kerja", href: "/tentang/komite" },
      { name: "Badan Usaha", href: "/tentang/badan-usaha" },
      { name: "Lingkar Studi", href: "/tentang/lingkar-studi" },
      { name: "Afiliasi & Kolaborasi", href: "/tentang/afiliasi" },
      { name: "Kontak", href: "/tentang/kontak" },
    ],
  },
  {
    name: "Psikoanalisis",
    href: "/psikoanalisis",
    children: [
      { name: "Apa itu Psikoanalisis?", href: "/psikoanalisis/pengenalan" },
      { name: "Landasan Ilmiah", href: "/psikoanalisis/landasan-ilmiah" },
      { name: "Khasiat Psikoanalisis", href: "/psikoanalisis/khasiat" },
      { name: "Ragam Terapan", href: "/psikoanalisis/ragam-terapan" },
      { name: "Referensi", href: "/psikoanalisis/referensi" },
    ],
  },
  { name: "Anggota", href: "/anggota" },
  {
    name: "Pengetahuan",
    href: "/pengetahuan",
    children: [
      { name: "Artikel", href: "/pengetahuan/artikel" },
      { name: "Unduhan", href: "/pengetahuan/unduhan" },
    ],
  },
  { name: "Proyek", href: "/proyek" },
  {
    name: "Publikasi",
    href: "/publikasi",
    children: [
      { name: "Buku", href: "/publikasi/buku" },
      { name: "Jurnal", href: "/publikasi/jurnal" },
      { name: "Majalah", href: "/publikasi/majalah" },
    ],
  },
  { name: "Jadwal", href: "/jadwal" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <span className="font-serif text-xl font-bold text-primary-foreground">P</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-xl font-bold text-primary">PANJI</h1>
            <p className="text-xs text-muted-foreground">Pamong Jiwa Indonesia</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        isActive(item.href) && "text-primary"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[280px] gap-1 p-3">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={child.href}
                                className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {child.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                        isActive(item.href) && "text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border lg:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <MobileDropdown item={item} onClose={() => setMobileMenuOpen(false)} />
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent",
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function MobileDropdown({
  item,
  onClose,
}: {
  item: { name: string; href: string; children?: { name: string; href: string }[] };
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent"
      >
        {item.name}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && item.children && (
        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
          {item.children.map((child) => (
            <Link
              key={child.name}
              to={child.href}
              onClick={onClose}
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
