import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyEntries({ studies, label }: { studies: CaseStudy[]; label: string }) {
  return (
    <section className="work-list" aria-label={label}>
      {studies.map((item, index) => (
        <article className={`work-entry${item.featured ? " work-entry-featured" : ""}${item.panel === "ink" ? " work-entry-ink" : ""}`} key={item.slug}>
          <div className="work-entry-index" aria-hidden="true">0{index + 1}</div>
          <div className="work-entry-content">
            <p className="work-card-eyebrow">{item.label}</p>
            <h2>{item.title}</h2>
            <p className="work-entry-summary">{item.summary}</p>
            <dl className="work-evidence">
              <div><dt>People</dt><dd>{item.people}</dd></div>
              <div><dt>My contribution</dt><dd>{item.contribution}</dd></div>
              <div><dt>What I&apos;m learning</dt><dd>{item.learning}</dd></div>
            </dl>
            <ul className="theme-list" aria-label={`${item.title} themes`}>
              {item.themes.map((theme) => <li key={theme}>{theme}</li>)}
            </ul>
            <Link className="work-entry-link" href={item.href}>Read the case study</Link>
          </div>
        </article>
      ))}
    </section>
  );
}
