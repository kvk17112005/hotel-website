import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { type Dish, navItems } from "@/lib/sv-grand-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-3" aria-label="AUREVIA home">
          <span className="flex size-9 items-center justify-center border border-primary/60 font-display text-lg text-primary transition-transform duration-500 group-hover:rotate-45">A</span>
          <span><strong className="block font-display text-lg font-normal text-ivory">AUREVIA</strong><small className="block text-[0.48rem] uppercase tracking-[0.26em] text-muted-foreground">Luxury restaurant · Bengaluru</small></span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} className="nav-link text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="luxuryOutline" size="luxury" asChild className="hidden sm:inline-flex"><Link to="/reserve">Reserve a Table</Link></Button>
          <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} className="text-ivory lg:hidden" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {open && <nav className="border-t border-border bg-background px-6 py-6 lg:hidden" aria-label="Mobile navigation">{navItems.map((item) => <Link key={item.to} to={item.to} className="block border-b border-border py-4 font-display text-2xl text-ivory">{item.label}</Link>)}<Button variant="luxury" asChild className="mt-6 w-full"><Link to="/reserve">Reserve a Table</Link></Button></nav>}
    </header>
  );
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-card px-6 py-12 sm:px-10 lg:px-16"><div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[1.2fr_1fr_1fr]"><div><p className="font-display text-3xl text-ivory">AUREVIA</p><p className="mt-3 max-w-sm text-xs leading-6 text-muted-foreground">A standalone fine-dining restaurant where Indian kitchens meet a modern point of view.</p></div><div><p className="eyebrow">Visit</p><p className="mt-4 text-xs leading-6 text-muted-foreground">12, Museum Road · Bengaluru<br/>+91 80 4123 8800<br/>hello@aurevia.in</p></div><div><p className="eyebrow">Explore</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">{navItems.slice(1).map((item) => <Link key={item.to} to={item.to} className="text-[0.58rem] uppercase tracking-[0.15em] text-muted-foreground hover:text-primary">{item.label}</Link>)}</div></div></div><div className="mx-auto mt-10 flex max-w-[1280px] justify-between border-t border-border pt-6 text-[0.52rem] uppercase tracking-[0.15em] text-muted-foreground"><span>© 2026 AUREVIA</span><span>Fine dining, considered</span></div></footer>;
}

export function PageFrame({ children }: { children: ReactNode }) { return <div className="page-enter min-h-screen bg-background pt-20 text-foreground"><SiteHeader />{children}<SiteFooter /></div>; }

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { element.classList.add("is-visible"); observer.disconnect(); } }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -4;
    const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
    ref.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className={`tilt ${className}`}>{children}</div>;
}

export function DishCard({ dish, index }: { dish: Dish; index?: number }) {
  return <Reveal><Tilt><Link to="/menu/$slug" params={{ slug: dish.slug }} aria-label={`View details for ${dish.name}`} className="group block scroll-mt-36 border-t border-border pt-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">  <div className="overflow-hidden rounded-sm bg-[#120f0d]"><img src={dish.image} alt={dish.name} loading="lazy" width={1600} height={1067} className="aspect-[4/3] w-full object-contain p-2 transition duration-700 group-hover:scale-[1.03] group-hover:saturate-110" /></div><div className="flex items-start justify-between gap-5 py-6"><div>{typeof index === "number" && <p className="mb-2 text-[0.55rem] uppercase tracking-[0.2em] text-primary">{String(index + 1).padStart(2, "0")} · {dish.course}</p>}<h3 className="font-display text-2xl text-ivory transition-colors group-hover:text-primary">{dish.name}</h3><p className="mt-2 text-xs leading-6 text-muted-foreground">{dish.note}</p><span className="mt-4 inline-flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.16em] text-primary">View details <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" /></span></div><div className="flex shrink-0 flex-col items-end gap-4"><span className={`size-2 rounded-full ${dish.kind === "Vegetarian" ? "bg-veg" : "bg-nonveg"}`} aria-label={dish.kind} /><span className="text-xs text-gold-soft">{dish.price}</span></div></div></Link></Tilt></Reveal>;}

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: ReactNode; copy: string; image: string }) {
  return <section className="relative min-h-[76svh] overflow-hidden"><img src={image} alt="" width={1600} height={1067} className="parallax-image absolute inset-0 h-full w-full object-contain p-4 opacity-60"/><div className="cinematic-vignette absolute inset-0"/><div className="relative mx-auto flex min-h-[76svh] max-w-[1440px] flex-col justify-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24"><Eyebrow>{eyebrow}</Eyebrow><h1 className="mt-6 max-w-5xl font-display text-[clamp(3.2rem,8vw,7.8rem)] leading-[0.98] text-ivory">{title}</h1><p className="mt-7 max-w-xl text-sm font-light leading-7 text-ivory/70">{copy}</p></div></section>;
}