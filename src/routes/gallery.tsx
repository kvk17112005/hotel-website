import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageFrame, PageHero, Reveal } from "@/components/sv-grand";
import { images } from "@/lib/sv-grand-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — AUREVIA" },
      { name: "description", content: "A glimpse into the AUREVIA restaurant, kitchen and table." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const gallery = [
    { image: images.feastImage, alt: "AUREVIA dining table" },
    { image: images.chefImage, alt: "AUREVIA chef at work" },
    { image: images.interiorImage, alt: "AUREVIA restaurant interior" },
    { image: images.vegImage, alt: "AUREVIA vegetarian fine dining" },
    { image: images.nonVegImage, alt: "AUREVIA non-vegetarian fine dining" },
  ];
  return (
    <PageFrame>
      <PageHero eyebrow="Gallery" title={<>A glimpse<br /><span className="text-gold-soft">of the table.</span></>} copy="The atmosphere, the hands and the dishes that make an evening at AUREVIA." image={images.feastImage} />
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto max-w-[1280px]"><Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{gallery.map(({ image, alt }, index) => <figure key={alt} className={index === 0 ? "sm:col-span-2 lg:row-span-2" : ""}><img src={image} alt={alt} loading="lazy" width={1600} height={1067} className="h-full min-h-64 w-full object-cover transition duration-700 hover:scale-[1.02]" /></figure>)}</Reveal><div className="mt-16 text-center"><Eyebrow>At AUREVIA</Eyebrow></div></div></section>
    </PageFrame>
  );
}
