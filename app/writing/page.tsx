import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays by Quyen Nguyen on how people make decisions under uncertainty, pressure, or limited options.",
};

const articles = [
  {
    title:
      "Beyond Resource Distribution: Addressing Cognitive Biases to Empower People with Disabilities and Changemakers in Disaster Preparedness and Livelihood",
    date: "September 2025",
    description:
      "A reflection on why resources and training alone can fall short, and why programmes need to start with people’s real conditions, assumptions, and decisions.",
    takeaway:
      "The question I kept returning to: what is getting in people’s way, beyond what a programme can provide?",
    href: "https://www.linkedin.com/pulse/beyond-resource-distribution-addressing-cognitive-biases-quyen-nguyen-dbrkc",
  },
];

export default function WritingPage() {
  return (
    <>
      <section className="writing-hero" aria-labelledby="writing-title">
        <p className="eyebrow">Writing</p>
        <h1 id="writing-title">Questions I keep thinking about.</h1>
        <p>
          I use writing to explore how people make decisions, especially when their choices are shaped by uncertainty,
          pressure, or limited options.
        </p>
      </section>

      <section className="writing-list" aria-labelledby="writing-list-title">
        <div className="section-heading">
          <p className="eyebrow">Selected pieces</p>
          <h2 id="writing-list-title">Writing that connects behaviour to practical decisions.</h2>
          <p>These are not product case studies. They show the questions I want products to answer.</p>
        </div>

        <div className="article-list">
          {articles.map((article, index) => (
            <article className="article-card" key={article.title}>
              <div className="article-card-meta">
                <span aria-hidden="true">0{index + 1}</span>
                <p>{article.date}</p>
              </div>
              <div className="article-card-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p className="article-takeaway">{article.takeaway}</p>
                <a href={article.href} rel="noreferrer" target="_blank">
                  Read on LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
