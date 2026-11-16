import Link from "next/link";
import { caseStudies } from "@/content/case-studies";

const supportingExperience = [
  {
    title: "UBC student programme",
    description:
      "As Senior Collegia Advisor, I led a team of seven advisors supporting commuting students. It gave me practical experience of student context, team leadership, and programme delivery.",
  },
  {
    title: "Trulioo",
    description: "Learning and development work spanning learner needs, training content, adoption, and performance analysis.",
  },
  {
    title: "Association for Empowerment of Persons with Disabilities",
    description: "Programme development and behavioural research connected to disability inclusion, livelihoods, and disaster preparedness.",
  },
  {
    title: "University Canada West",
    description: "Process improvement, case communication, and workflow design in academic-integrity operations.",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="work-intro" aria-labelledby="work-title">
        <p className="eyebrow">Selected work</p>
        <h1 id="work-title">Building product judgment through research, delivery, and iteration.</h1>
        <p>
          I am transitioning into product management, not rewriting my past roles. This is a working portfolio of the
          evidence, decisions, and learning that I bring forward.
        </p>
      </section>

      <section className="work-list" aria-label="Selected projects">
        {caseStudies.map((item, index) => (
          <article className={item.featured ? "work-entry work-entry-featured" : "work-entry"} key={item.title}>
            <div className="work-entry-index" aria-hidden="true">0{index + 1}</div>
            <div className="work-entry-content">
              <p className="work-card-eyebrow">{item.label}</p>
              <h2>{item.title}</h2>
              <p className="work-entry-summary">{item.summary}</p>
              <dl className="work-evidence">
                <div>
                  <dt>People</dt>
                  <dd>{item.people}</dd>
                </div>
                <div>
                  <dt>My contribution</dt>
                  <dd>{item.contribution}</dd>
                </div>
                <div>
                  <dt>What I&apos;m learning</dt>
                  <dd>{item.learning}</dd>
                </div>
              </dl>
              <ul className="theme-list" aria-label={`${item.title} themes`}>
                {item.themes.map((theme) => <li key={theme}>{theme}</li>)}
              </ul>
              {item.href ? (
                <Link className="work-entry-link" href={item.href}>
                  Read the case study <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="work-note" aria-labelledby="confidentiality-title">
        <p className="eyebrow">A note on evidence</p>
        <h2 id="confidentiality-title">I only turn work into a case study when I can show the process responsibly.</h2>
        <p>
          Some details are intentionally anonymised. The supporting roles below belong in my portfolio because they
          shaped how I work, but I will not turn them into reconstructed case studies without enough evidence to do so.
        </p>
      </section>

      <section className="supporting-experience" aria-labelledby="supporting-title">
        <div className="section-heading">
          <p className="eyebrow">Supporting experience</p>
          <h2 id="supporting-title">More of the work behind the portfolio.</h2>
        </div>
        <div className="supporting-grid">
          {supportingExperience.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
