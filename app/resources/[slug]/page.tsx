import { notFound } from "next/navigation";
import { PageShell, ResourceArticleDetail } from "../../components";
import { resourceArticles } from "../../site-data";

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = resourceArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <PageShell>
      <main>
        <ResourceArticleDetail article={article} />
      </main>
    </PageShell>
  );
}
