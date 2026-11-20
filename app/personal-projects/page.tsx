import type { Metadata } from "next";
import { CaseStudyEntries } from "@/components/work/CaseStudyEntries";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = { title: "Personal projects" };

export default function PersonalProjectsPage() {
  return (
    <>
      <section className="collection-intro" aria-labelledby="projects-title">
        <h1 id="projects-title">Personal projects</h1>
        <p>Independent prototypes exploring career choices, learning French, and personal style.</p>
      </section>
      <CaseStudyEntries studies={caseStudies.filter((study) => study.category === "personal")} label="Personal projects" />
    </>
  );
}
