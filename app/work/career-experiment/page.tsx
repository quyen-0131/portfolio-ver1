import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Career Experiment",
  description:
    "A product prototype that helps students explore the day-to-day work behind potential careers before committing to a path.",
};

const rolePatterns = [
  {
    role: "Product manager",
    patterns: [
      "Understand and frame a user problem",
      "Choose what matters most when there are trade-offs",
      "Move work forward with design and engineering partners",
    ],
  },
  {
    role: "Management consultant",
    patterns: [
      "Bring structure to a broad business question",
      "Analyse and connect different sources of evidence",
      "Communicate a recommendation and build alignment",
    ],
  },
];

const prototypeScreens = [
  {
    image: "/images/career-experiment/guided-demo-intro.svg",
    alt: "The Career Experiment introduction showing its three-stage decision journey.",
    label: "01 · Start with evidence",
    description: "The guided demo sets expectations: this is a tool for exploration, not a quiz or a career verdict.",
  },
  {
    image: "/images/career-experiment/guided-demo-activities.svg",
    alt: "The Career Experiment guided-demo screen for reviewing activity groups.",
    label: "02 · Confirm the detail",
    description: "Experience is broken into editable activities, so the evidence stays grounded in work a person has actually done.",
  },
  {
    image: "/images/career-experiment/guided-demo-overview.svg",
    alt: "A concept screen for The Career Experiment's post-evaluation exploration overview.",
    label: "03 · Review the overview",
    description: "A working summary turns small signals from the review into a next experiment—not a final verdict about someone’s fit.",
  },
];

export default function CareerExperimentPage() {
  return (
    <div className="project-theme-ink">
      <section className="case-hero" aria-labelledby="case-title">
        <Link className="case-back" href="/personal-projects">
          Personal projects
        </Link>
        <p className="eyebrow">Independent product prototype · In iteration</p>
        <h1 id="case-title">Career choices need more than information.</h1>
        <p>
          I built The Career Experiment for students nearing graduation who are weighing different career paths but have
          limited time, money, or access to experience the work before committing to it.
        </p>
        <div className="case-hero-actions">
          <a
            className="button button-prototype"
            href="https://the-career-experiment.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Try the 5-minute guided demo <span aria-hidden="true">↗</span>
          </a>
          <p>In-progress prototype · fictional sample data · no sign-in</p>
        </div>
      </section>

      <section className="case-at-a-glance" aria-label="Career Experiment at a glance">
        <div>
          <p>People</p>
          <strong>Third- and fourth-year university students preparing for work</strong>
        </div>
        <div>
          <p>My role</p>
          <strong>Problem framing, prototype design, building, and formative research</strong>
        </div>
        <div>
          <p>Current focus</p>
          <strong>A guided product manager and management consultant comparison</strong>
        </div>
      </section>

      <section className="case-section case-problem" aria-labelledby="problem-title">
        <p className="eyebrow">The problem</p>
        <div className="case-problem-layout">
          <h2 id="problem-title">How might we help someone explore the work behind a career before they commit to it?</h2>
          <div>
            <p>
              Career advice often asks people to identify what they are good at or interested in. That can be difficult
              when they have only seen job titles, polished profiles, and other people’s choices—not the everyday work
              itself.
            </p>
            <p>
              I wanted to make exploration more practical: help someone look back at work they have done, notice the
              kinds of activity they want more or less of, then try a small role-shaped problem before deciding what to
              explore next.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="hypothesis-title">
        <div className="case-section-heading">
          <p className="eyebrow">Initial hypothesis</p>
          <h2 id="hypothesis-title">A short experience can create a better question than a career quiz.</h2>
        </div>
        <p className="case-lede">
          If users could connect past experiences to the activities involved in two roles, reflect on the type of work
          they want more of, and try a small realistic scenario, they would be better able to choose what to explore
          next. The goal is direction—not a career verdict or an assessment of ability.
        </p>
      </section>

      <section className="case-section" aria-labelledby="flow-title">
        <div className="case-section-heading">
          <p className="eyebrow">The prototype</p>
          <h2 id="flow-title">From past experience to a next experiment.</h2>
        </div>
        <ol className="case-flow">
          <li>
            <span>01</span>
            <div>
              <h3>Choose two roles</h3>
              <p>Start with a concrete comparison instead of an overwhelming list of careers.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Review past activities</h3>
              <p>Use a resume or sample experience to identify what the person has actually done.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Reflect on the work</h3>
              <p>Mark each group of activities as work they would like to do more of, about the same, or less of.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Try a role-shaped problem</h3>
              <p>Experience how each role approaches the same scenario, then reflect on what felt engaging or unclear.</p>
            </div>
          </li>
          <li>
            <span>05</span>
            <div>
              <h3>Choose a next low-risk test</h3>
              <p>Leave with an exposure activity that can answer the next question, rather than a score that ends it.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="case-section prototype-showcase" aria-labelledby="prototype-showcase-title">
        <div className="case-section-heading">
          <p className="eyebrow">Guided demo walkthrough</p>
          <h2 id="prototype-showcase-title">The app makes the exploration process visible.</h2>
        </div>
        <p className="case-lede">
          The first two screens show the current guided-demo flow. The final screen shows the post-evaluation overview
          I am developing: smaller, reviewable signals and a practical next test. It uses fictional sample data, so
          visitors can explore without sharing a CV or receiving a definitive career recommendation.
        </p>
        <div className="prototype-showcase-action">
          <div>
            <p>Explore the current build</p>
            <span>The live prototype is the best way to experience the interactions and decision prompts.</span>
          </div>
          <a
            className="text-link"
            href="https://the-career-experiment.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Open the prototype <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="prototype-gallery">
          {prototypeScreens.map((screen) => (
            <figure className="prototype-screen" key={screen.image}>
              <div className="prototype-screen-browser" aria-hidden="true">
                <span />
                <span />
                <span />
                <p>the-career-experiment.vercel.app</p>
              </div>
              <Image alt={screen.alt} height={760} src={screen.image} width={1200} />
              <figcaption>
                <p>{screen.label}</p>
                <span>{screen.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-section case-role-patterns" aria-labelledby="patterns-title">
        <div className="case-section-heading">
          <p className="eyebrow">A technical choice in this iteration</p>
          <h2 id="patterns-title">The first comparison stays deliberately small while the role system matures.</h2>
        </div>
        <p className="case-lede">
          The current app only has a limited set of role paths. Expanding the catalogue before the role data and
          matching logic are reliable could create confusing or inconsistent comparisons. I am starting with product
          manager and management consultant so I can make the evaluation clearer, review model outputs more closely,
          and build from evidence rather than apparent breadth.
        </p>
        <div className="role-pattern-grid">
          {rolePatterns.map((item) => (
            <article key={item.role}>
              <h3>{item.role}</h3>
              <ul>
                {item.patterns.map((pattern) => <li key={pattern}>{pattern}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" aria-labelledby="evidence-title">
        <div className="case-section-heading">
          <p className="eyebrow">What I heard</p>
          <h2 id="evidence-title">One early conversation changed the next version.</h2>
        </div>
        <div className="feedback-grid">
          <article>
            <h3>What resonated</h3>
            <p>
              The tester found the concept new and useful. They especially liked using “more / about the same / less”
              prompts to reflect on their previous experience.
            </p>
          </article>
          <article>
            <h3>Technical constraints to address</h3>
            <p>
              The current role library is deliberately limited, and the flow relies on model responses within a finite
              token budget. Before offering a broader set of comparisons, I need a more reliable way to review
              responses and keep each step consistent.
            </p>
          </article>
          <article>
            <h3>What I am improving next</h3>
            <p>
              I am adding role coverage carefully, improving how the model reviews a person’s input, and breaking the
              evaluation into smaller signals that lead to a practical next test.
            </p>
          </article>
        </div>
        <p className="case-note">
          This is early input from one person, combined with my own technical reflection—not validation of the product.
        </p>
      </section>

      <section className="case-next" aria-labelledby="next-title">
        <p className="eyebrow">What I would validate next</p>
        <h2 id="next-title">Can the revised experience turn reflection into a next step someone can take now?</h2>
        <ul>
          <li>Can they explain the difference in day-to-day work between the two roles?</li>
          <li>Does the model’s review break their responses into small, understandable signals rather than a broad conclusion?</li>
          <li>Can the review and role-shaped test surface an immediate, tentative sense of where their strengths and interests may lie?</li>
          <li>Is the recommended next step realistic enough for them to take action on soon?</li>
          <li>Where do token limits, model response quality, or instructions make the experience inconsistent or unclear?</li>
        </ul>
        <p>
          This project is ongoing. I am deliberately adding role coverage, improving how the model reviews responses,
          and breaking the evaluation into smaller checks that point to a credible next experiment. The aim is to help
          someone understand what they might enjoy or want less of, then give them a brief environment in which to test it.
        </p>
      </section>
    </div>
  );
}
