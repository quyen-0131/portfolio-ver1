import Image from "next/image";

const projects = [
  {
    id: "spotify",
    course: "IS630 · Group project",
    title: "What can the sound of a song tell us?",
    subtitle: "Inferring song popularity on Spotify using audio characteristics",
    image: "/class-work/spotify-audio-popularity-poster.png",
    width: 1684,
    height: 2384,
    alt: "Research poster summarising the Spotify group project: regression results, differences across release eras, and limitations for catalog acquisition.",
    summary:
      "We used hypothesis tests, multiple regression, and Bayesian estimation to examine how audio features relate to Spotify popularity, and what that can tell a catalog acquisition team.",
    contribution:
      "My part was AQ2: regression modelling, diagnostics, and sensitivity checks. The other analytical questions and the report were a group effort.",
    takeaway:
      "Audio features added 1.5 percentage points of in-sample R² beyond release decade, explicit content, and duration. A statistically significant effect can still be small in practice.",
    tags: ["Statistical inference", "Regression", "Business interpretation"],
    pdf: "/class-work/spotify-audio-popularity-poster.pdf",
  },
  {
    id: "fleet-maintenance",
    course: "ISSS602 · Data Analytics Lab · Group project",
    title: "Which vehicle should be inspected first?",
    subtitle: "Prioritizing fleet maintenance with predictive analytics",
    image: "/class-work/fleet-maintenance-poster.jpg",
    width: 1808,
    height: 2560,
    alt: "Fleet-maintenance research poster by Nguyen Phuong Thao Quyen and Nguyen Phuong Ha, comparing ten model types and inspection cutoffs.",
    summary:
      "A group analysis of routine vehicle records to prioritise maintenance inspections. We compared ten model types and examined the cost of missing a case against the extra inspections a lower cutoff creates.",
    contribution:
      "Co-authored with Nguyen Phuong Ha at Singapore Management University. The poster presents our shared analysis and recommendations.",
    takeaway:
      "At the 0.4 cutoff, XGBoost reached F1 = 0.795. Compared with 0.5, it found 481 additional maintenance cases and added 733 false positives on the test set.",
    tags: ["Predictive modelling", "Model comparison", "Decision thresholds"],
    pdf: null,
  },
];

export function ClassWork() {
  return (
    <section className="class-work" id="class-work" aria-labelledby="class-work-title">
      <div className="collection-intro">
        <p className="eyebrow">Singapore Management University</p>
        <h1 id="class-work-title">Class work</h1>
        <p className="class-work-intro">
          Group projects where I practised working with data, questioning a result, and explaining what someone
          could actually do with it.
        </p>
      </div>
      <div className="class-work-grid">
        {projects.map((project) => (
          <article className="class-work-card" key={project.id}>
            <a className="class-work-poster" href={project.image} target="_blank" rel="noreferrer" aria-label={`View the full ${project.subtitle} poster (opens in a new tab)`}>
              <Image src={project.image} alt={project.alt} width={project.width} height={project.height} sizes="(max-width: 928px) 100vw, 45vw" />
              <span>View full poster</span>
            </a>
            <div className="class-work-copy">
              <p className="eyebrow">{project.course}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <p className="class-work-takeaway"><strong>The takeaway</strong>{project.takeaway}</p>
              <p className="class-work-credit">{project.contribution}</p>
              <ul className="theme-list" aria-label={`${project.subtitle} methods`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              {project.pdf ? <a className="class-work-download" href={project.pdf} download>Download the Spotify poster (PDF)</a> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
