import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLocalLayout } from "@/components/SeoLocalLayout";
import { getSeoPage, SEO_PAGES } from "@/lib/seo-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function SeoStubPage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  return (
    <SeoLocalLayout
      eyebrow={page.eyebrow}
      title={page.h1}
      lead={page.lead}
      sections={page.sections}
      related={page.related}
    />
  );
}
