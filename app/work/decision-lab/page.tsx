import type { Metadata } from "next";
import Link from "next/link";
import { CaseIllustration } from "@/components/illustrations/Illustrations";
import { ValueProposition } from "@/components/work/ValueProposition";
import { getCaseStudy } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Decision Lab",
  description:
    "Anonymised behavioural research and strategy work for an education organisation, from a live decision to a practical recommendation.",
};

const projects = [
  {
    number: "01",
    label: "Completed research project",
    visual: "message",
    title: "Message testing before campaign investment",
    question: "Which way of explaining an education offer gives prospective families enough clarity to take a next step?",
    stages: [
      ["Decision context", "Understand what families are weighing and what makes the decision difficult."],
      ["Message comparison", "Test distinct ways of explaining the offer with people making the decision."],
      ["Decision signals", "Look for clarity, credibility, relevance, and willingness to learn more."],
      ["Campaign direction", "Turn the evidence into guidance for messaging and the next action."],
    ],
    recommendation:
      "I recommended that the marketing team reshape the proposition around the practical uncertainty parents faced when considering study abroad, and give every message a clear next step.",
  },
  {
    number: "02",
    label: "Completed research project",
    visual: "tracker",
    title: "A monthly tracker for an evolving decision",
    question: "How are external conditions changing the way families think about education, cost, and risk?",
    stages: [
      ["A timely question", "Choose one business decision that needs a current view, rather than a generic survey."],
      ["Relevant audience", "Speak with people actively considering the choice, not a broad convenience sample."],
      ["Patterns and differences", "Compare the factors that matter across decision stages and parent contexts."],
      ["A practical response", "Use the findings to shape recruitment timing, messages, and follow-up questions."],
    ],
    recommendation:
      "I recommended reaching parents earlier in their decision journey and addressing the proof they needed before committing.",
  },
  {
    number: "03",
    label: "Completed research project",
    visual: "value",
    title: "Testing what makes a premium offer feel worthwhile",
    question: "What makes families feel confident paying for education, and what role do recognition and added value play?",
    stages: [
      ["The trade-off", "Frame the decision around the value people need to see before they commit."],
      ["Options to test", "Explore how people respond to different forms of financial support, recognition, and added experience."],
      ["Meaning behind the choice", "Go beyond appeal to understand what each option signals to different people."],
      ["Offer design", "Recommend which proof points and packages deserve more development."],
    ],
    recommendation:
      "I recommended that the team position recognition and added benefits as credible signs of future opportunity, then run a follow-up study to test which forms mattered to different parent groups.",
  },
  {
    number: "04",
    label: "Research proposal",
    visual: "pathway",
    title: "Employer validation for future programmes",
    question: "Will employers see proposed academic programmes as credible, relevant, and connected to real entry-level work?",
    stages: [
      ["Programme question", "Identify which programme ideas need stronger evidence before the university launches them."],
      ["Employer perspective", "Design interviews and surveys around hiring expectations, capabilities, and role fit."],
      ["Market evidence", "Pair employer views with desk research on alternatives and demand signals."],
      ["Programme choices", "Use the evidence to refine how each programme is described and how it prepares graduates for real work."],
    ],
    recommendation:
      "I proposed a study to understand what employers expect from graduates before asking them to hire one, so the university could explain how each programme prepares students for real work.",
  },
];

export default function DecisionLabPage() {
  return (
    <>
      <section className="case-hero decision-lab-hero" aria-labelledby="decision-lab-title">
        <div className="decision-lab-hero-copy">
          <Link className="case-back" href="/work">
            Work
          </Link>
          <p className="eyebrow">Behavioural research and strategy · Confidential</p>
          <h1 id="decision-lab-title">Research that helps people make a better next decision.</h1>
          <p>
            At Decision Lab, I led research projects for an education organisation making decisions about messaging,
            recruitment, pricing, and future programmes. The work began with the decision at hand, then built the right
            evidence to support it.
          </p>
        </div>
        <figure className="decision-map" aria-labelledby="decision-map-caption">
          <figcaption id="decision-map-caption">
            <span>Confidential project lens</span>
            <strong>From a live choice to a next action</strong>
          </figcaption>
          <div className="decision-map-grid">
            <div className="decision-map-node decision-map-node--decision">
              <span>01</span>
              <p>Decision</p>
              <strong>Name the choice a team needs to make.</strong>
            </div>
            <div className="decision-map-node decision-map-node--context">
              <span>02</span>
              <p>Context</p>
              <strong>Understand the people and trade-offs around it.</strong>
            </div>
            <div className="decision-map-node decision-map-node--evidence">
              <span>03</span>
              <p>Evidence</p>
              <strong>Gather the signals needed for that choice.</strong>
            </div>
            <div className="decision-map-node decision-map-node--action">
              <span>04</span>
              <p>Action</p>
              <strong>Turn what is learned into a practical next move.</strong>
            </div>
          </div>
          <small>Illustrative framework · no client materials, data, or findings shown</small>
        </figure>
      </section>

      <section className="case-at-a-glance" aria-label="Decision Lab work at a glance">
        <div>
          <p>People</p>
          <strong>Prospective students, parents, and employers in the education ecosystem</strong>
        </div>
        <div>
          <p>My role</p>
          <strong>Project ownership across framing, research design, analysis, reporting, and client communication</strong>
        </div>
        <div>
          <p>Confidentiality</p>
          <strong>All project details are anonymised and reconstructed from my own process</strong>
        </div>
      </section>

      <ValueProposition study={getCaseStudy("decision-lab")} />

      <section className="case-section case-problem" aria-labelledby="decision-lab-approach-title">
        <p className="eyebrow">My approach</p>
        <div className="case-problem-layout">
          <div className="case-problem-heading">
            <h2 id="decision-lab-approach-title">A research report only helps when it makes the next decision clearer.</h2>
            <CaseIllustration slug="decision-lab" tone="cobalt" className="case-problem-illo" />
          </div>
          <div>
            <p>
              The work was not about collecting opinions for their own sake. Each project started with a live decision:
              which message to lead with, what to learn next, how to explain value, or whether a future offer would be
              credible in the market.
            </p>
            <p>
              I translated those broad questions into research people could answer, looked for the context behind their
              choices, and connected the evidence back to a practical recommendation.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section decision-lab-principles" aria-labelledby="decision-lab-principles-title">
        <div className="case-section-heading">
          <p className="eyebrow">What carried across the projects</p>
          <h2 id="decision-lab-principles-title">Four principles that now shape how I think about product work.</h2>
        </div>
        <ol className="case-flow">
          <li>
            <span>01</span>
            <div>
              <h3>Begin with a real choice</h3>
              <p>Define the decision the team needs to make before deciding what research to run.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Talk to the people living the decision</h3>
              <p>Focus on the people whose constraints and trade-offs will determine whether an idea works.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Look for the reason behind the answer</h3>
              <p>Pair what people say with the context, concern, or belief shaping that answer.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Make the next action concrete</h3>
              <p>End with a decision, a recommendation, or the next question worth testing.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="case-section" aria-labelledby="project-visuals-title">
        <div className="case-section-heading">
          <p className="eyebrow">Four anonymised research cases</p>
          <h2 id="project-visuals-title">The decision process behind the confidential work.</h2>
        </div>
        <p className="case-lede">
          The diagrams show how I approached each project, rather than the confidential research itself. They remove
          organisation names, materials, participant data, and findings.
        </p>

        <div className="research-project-list">
          {projects.map((project) => (
            <article className="research-project" key={project.number}>
              <header>
                <div>
                  <span aria-hidden="true">{project.number}</span>
                  <p>{project.label}</p>
                </div>
                <div className="research-project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.question}</p>
                </div>
                <div className={`research-project-visual research-project-visual--${project.visual}`} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </header>
              <ol className="research-process" aria-label={`${project.title} process`}>
                {project.stages.map(([title, description], index) => (
                  <li key={title}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="research-project-recommendation">
                <span>My recommendation</span>
                {project.recommendation}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-next" aria-labelledby="decision-lab-learning-title">
        <p className="eyebrow">What I am bringing into product</p>
        <h2 id="decision-lab-learning-title">Good research helps a team act with more care and less guesswork.</h2>
        <p>
          This work gave me practice in understanding users, framing unclear problems, working with evidence, and
          communicating a recommendation to stakeholders. I am now applying the same discipline to user-facing product
          work, where research should inform what gets built, tested, and improved.
        </p>
      </section>
    </>
  );
}
