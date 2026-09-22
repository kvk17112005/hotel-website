import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, PageFrame, PageHero, Reveal } from "@/components/sv-grand";
import { images } from "@/lib/sv-grand-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AUREVIA — Luxury Restaurant Bengaluru" },
      { name: "description", content: "Discover the story, philosophy and table at AUREVIA." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame>
      <PageHero
        eyebrow="About AUREVIA"
        title={<>A table shaped<br /><span className="text-gold-soft">by India.</span></>}
        copy="AUREVIA is a standalone fine-dining restaurant where regional memory, live fire and modern technique meet."
        image={images.interiorImage}
      />
      <section className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <Reveal className="mx-auto grid max-w-[1180px] gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div><Eyebrow>Our point of view</Eyebrow><p className="mt-6 font-display text-3xl leading-snug text-ivory">Fine dining with warmth, curiosity and a sense of place.</p></div>
          <div><p className="font-display text-3xl leading-relaxed text-ivory sm:text-5xl">Every plate begins with a story worth sharing.</p><p className="mt-9 max-w-2xl text-sm font-light leading-8 text-muted-foreground">From the first ember to the last pour, AUREVIA celebrates India’s extraordinary produce and culinary traditions without standing still. Come for the menu, linger for the conversation at the table.</p><Button variant="luxury" asChild className="mt-9"><Link to="/menu">Explore the menu <ArrowRight /></Link></Button></div>
        </Reveal>
      </section>
    </PageFrame>
  );
}
