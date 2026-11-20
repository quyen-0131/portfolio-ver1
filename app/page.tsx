import Link from "next/link";
import { QuestionSharpener } from "@/components/home/QuestionSharpener";
import { caseStudies } from "@/content/case-studies";

const principles = [
  { tag: "People", text: "Understand people’s real context, constraints, and needs." },
  { tag: "Focus", text: "Turn ambiguity into a focused question." },
  { tag: "Market", text: "Study the market and existing alternatives." },
  { tag: "Iterate", text: "Learn through small experiments and iteration." },
];

const tickerWords = ["Human insight", "Strategy", "Product", "Small experiments", "Clearer choices"];

export default function HomePage() {
  return (
    <>
      <section className="hp-band hp-hero" aria-labelledby="home-title">
        <div className="hp-inner hp-hero-grid">
          <div className="hp-hero-copy">
            <p className="hp-sticker hp-sticker-tilt">Research &amp; strategy → product</p>
            <h1 id="home-title">
              Helping people make <mark>clearer</mark> choices.
            </h1>
            <p className="hp-hero-lede">
              Hello! My name is Quyen, a research and strategy professional moving into product management. I want to
              dive deeper into human behaviour to build user-facing products that help people understand their choices
              and take an informed next step.
            </p>
            <div className="hp-hero-actions">
              <Link className="hp-button" href="/personal-projects">
                Explore personal projects
              </Link>
              <Link className="hp-link" href="/about">
                About my path <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <QuestionSharpener
            studies={caseStudies.map(({ slug, shortTitle, title, href, messyQuestion, focusedQuestion }) => ({
              slug,
              shortTitle,
              title,
              href,
              messyQuestion,
              focusedQuestion,
            }))}
          />
        </div>
      </section>

      <div className="hp-band hp-ticker" aria-hidden="true">
        <div className="hp-ticker-track">
          {[0, 1].map((copy) => (
            <p key={copy}>
              {tickerWords.map((word) => (
                <span key={word}>
                  {word} <b>✦</b>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section className="hp-band hp-work" aria-labelledby="selected-work-title">
        <div className="hp-inner">
          <div className="hp-heading">
            <p className="hp-kicker">Work &amp; personal projects</p>
            <h2 id="selected-work-title">Four case studies, grounded in real decisions.</h2>
            <p>They show how I frame a problem, listen to people, and use evidence to decide what to test next.</p>
          </div>

          <ol className="hp-cards">
            {caseStudies.map((study, index) => (
              <li className="hp-card" data-tone={study.tone} key={study.slug}>
                <div className="hp-card-top">
                  <span className="hp-card-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <p className="hp-card-label">{study.label}</p>
                </div>
                <div className="hp-card-body">
                  <h3>
                    <Link href={study.href}>{study.title}</Link>
                  </h3>
                  <p>{study.teaser}</p>
                  <ul className="hp-chips" aria-label={`${study.title} themes`}>
                    {study.themes.slice(0, 3).map((theme) => (
                      <li key={theme}>{theme}</li>
                    ))}
                  </ul>
                  <span className="hp-card-cta" aria-hidden="true">
                    Read the case study <span>↗</span>
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <div className="collection-links" aria-label="Explore the portfolio">
            <Link className="hp-link" href="/work">Professional work</Link>
            <Link className="hp-link" href="/personal-projects">Personal projects</Link>
            <Link className="hp-link" href="/class-work">Class work</Link>
          </div>
        </div>
      </section>

      <section className="hp-band hp-method" aria-labelledby="principles-title">
        <div className="hp-inner hp-method-grid">
          <div className="hp-heading">
            <p className="hp-kicker">How I work</p>
            <h2 id="principles-title">Start with people, then learn what changes the decision.</h2>
            <p className="hp-aside">(It rarely works the first time. That’s what the second experiment is for.)</p>
          </div>
          <ol className="hp-steps">
            {principles.map((principle, index) => (
              <li key={principle.tag}>
                <span className="hp-step-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="hp-step-tag">{principle.tag}</span>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
