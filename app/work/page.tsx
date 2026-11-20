import type { Metadata } from "next";
import { caseStudies } from "@/content/case-studies";
import { CaseStudyEntries } from "@/components/work/CaseStudyEntries";

export const metadata: Metadata = { title: "Work" };

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
      <section className="collection-intro" aria-labelledby="work-title">
        <h1 id="work-title">Work</h1>
        <p>
          Research and strategy at Decision Lab, and the professional experience behind my move into product.
        </p>
      </section>

      <CaseStudyEntries studies={caseStudies.filter((study) => study.category === "professional")} label="Professional work" />
      <p className="collection-note">Client details are anonymised to respect confidentiality.</p>

      <section className="supporting-experience" aria-labelledby="supporting-title">
        <div className="section-heading">
          <p className="eyebrow">Supporting experience</p>
          <h2 id="supporting-title">Earlier experience</h2>
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
