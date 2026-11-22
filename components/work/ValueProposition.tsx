import type { CaseStudy } from "@/content/case-studies";

/** The problem-led pitch near the top of a case study: problem, what it does, why it's different. */
export function ValueProposition({ study }: { study: CaseStudy }) {
  const { statement, problem, solution, difference, labels, note } = study.valueProposition;
  const titleId = `${study.slug}-value-title`;
  const columns = [
    { key: "problem", label: labels?.problem ?? "The problem", text: problem },
    { key: "solution", label: labels?.solution ?? "What it does", text: solution },
    { key: "difference", label: labels?.difference ?? "Why it’s different", text: difference },
  ];

  return (
    <section className="case-section value-prop" aria-labelledby={titleId}>
      <div className="case-section-heading">
        <p className="eyebrow">In one line</p>
        <h2 id={titleId}>{statement}</h2>
      </div>
      <ol className="value-prop-grid">
        {columns.map((column, index) => (
          <li className="value-prop-item" data-kind={column.key} key={column.key}>
            <p className="value-prop-label">
              <span aria-hidden="true">0{index + 1}</span> {column.label}
            </p>
            <p>{column.text}</p>
          </li>
        ))}
      </ol>
      {note ? <p className="case-note">{note}</p> : null}
    </section>
  );
}
