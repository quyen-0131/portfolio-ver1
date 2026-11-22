import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  BehaviourIcon,
  DeliveryIcon,
  DoorIllustration,
  IllustrationPlate,
  JourneyIllustration,
  PaperPlaneIllustration,
  PrincipleBadge,
  ResearchIcon,
} from "@/components/illustrations/Illustrations";

function CardIcon({ children }: { children: ReactNode }) {
  return <div className="about-card-icon">{children}</div>;
}

export const metadata: Metadata = {
  title: "About",
  description:
    "How Quyen Nguyen moved from research and strategy into product management, and the approach behind the work.",
};

const principles = [
  {
    title: "Start with real context",
    description: "Understand people’s constraints, needs, and environment—not just the solution they ask for.",
  },
  {
    title: "Make ambiguity workable",
    description: "Turn a broad uncertainty into a focused question that can be explored with evidence.",
  },
  {
    title: "Learn from the market",
    description: "Look at existing alternatives and the wider system around a problem before deciding what to build.",
  },
  {
    title: "Test, then iterate",
    description: "Use small experiments to learn what changes a decision before committing to a larger solution.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero about-split" aria-labelledby="about-title">
        {/* First in the DOM so the hero's `p:last-child` styles still apply; CSS places it. */}
        <IllustrationPlate tone="mustard" className="about-split-illo">
          <JourneyIllustration />
        </IllustrationPlate>
        <p className="eyebrow">About</p>
        <h1 id="about-title">From research and strategy to user-facing product work.</h1>
        <p>
          I&apos;m Quyen Nguyen, a research and strategy professional transitioning into product management. I&apos;m most
          interested in products that help people make clearer decisions when time, money, and access are limited.
        </p>
      </section>

      <section className="about-story" aria-labelledby="story-title">
        <div className="about-story-aside">
          <p className="eyebrow">Why this work matters to me</p>
          <IllustrationPlate tone="teal" className="about-story-illo">
            <DoorIllustration />
          </IllustrationPlate>
        </div>
        <div>
          <h2 id="story-title">Opportunity can open doors. It does not always tell us where to walk next.</h2>
          <div className="about-story-copy">
            <p>
              Growing up in Vietnam, I saw education as a route to opportunity. Pursuing it took me to the University
              of British Columbia on a full-ride scholarship and into research, learning, and social-impact work.
            </p>
            <p>
              Along the way, I learned that credentials and external signals can open doors, but they did not resolve my
              uncertainty about which day-to-day work would be meaningful, effective, and aligned with my values.
            </p>
            <p>
              That experience is why I am moving into product management: to pair behavioural insight with practical
              tools that help people explore their options before committing to a path, despite limited time, money, or
              access.
            </p>
          </div>
        </div>
      </section>

      <section className="about-background" aria-labelledby="background-title">
        <p className="eyebrow">Foundation</p>
        <h2 id="background-title">What I bring to product work.</h2>
        <div className="background-grid">
          <article>
            <CardIcon><ResearchIcon /></CardIcon>
            <h3>Research and analysis</h3>
            <p>
              An Economics and Commerce foundation, plus experience designing research, analysing evidence, and turning
              findings into recommendations.
            </p>
          </article>
          <article>
            <CardIcon><BehaviourIcon /></CardIcon>
            <h3>Behaviour and learning</h3>
            <p>
              Work across behavioural research, learning programmes, and engagement has made me attentive to the gap
              between what people say, do, and feel able to do.
            </p>
          </article>
          <article>
            <CardIcon><DeliveryIcon /></CardIcon>
            <h3>Delivery with people</h3>
            <p>
              I have led programmes, worked with stakeholders, and improved practical delivery—experience I now bring
              into more deliberate product practice.
            </p>
          </article>
        </div>
      </section>

      <section className="about-principles" aria-labelledby="about-principles-title">
        <div className="section-heading">
          <p className="eyebrow">How I work</p>
          <h2 id="about-principles-title">How I approach a problem.</h2>
          <p>
            I believe the best way to solve a problem for people is to speak with them, ask useful questions, and test
            ideas that get to what is really getting in their way.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <PrincipleBadge index={index} className="about-principle-badge" />
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="side-quests" aria-labelledby="side-quests-title">
        <div className="section-heading">
          <p className="eyebrow">Side quests</p>
          <h2 id="side-quests-title">Questions I follow beyond my day-to-day work.</h2>
          <p>
            These are personal explorations, not product case studies. They help me stay curious about how people make
            sense of uncertainty.
          </p>
        </div>
        <div className="side-quest-grid">
          <article className="side-quest-card">
            <p>Essay · Substack · 2024</p>
            <h3>Why can superstition feel compelling when life feels uncertain?</h3>
            <p>
              A personal and research-based exploration of the cognitive and cultural forces that can shape paranormal
              and superstitious beliefs.
            </p>
            <a
              href="https://quyennguyen0131.substack.com/p/exploring-how-cognitive-psychological"
              rel="noreferrer"
              target="_blank"
            >
              Read the full essay <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="side-quest-card">
            <p>Personal essay · The Ubyssey · 2023</p>
            <h3>Where the Heart Is: Quang Binh</h3>
            <p>
              A personal reflection on returning home and learning to recognise the quiet warmth of Quang Binh in a
              changing relationship with place.
            </p>
            <a href="https://ubyssey.ca/features/where-the-heart-is-quang-binh/" rel="noreferrer" target="_blank">
              Read the full essay <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="side-quest-card">
            <p>Article · AEPD · 2025</p>
            <h3>Building climate resilience in vulnerable rural communities.</h3>
            <p>
              Lessons from Quang Binh on climate-smart livelihoods, disaster preparation, and building community
              capacity in the face of extreme weather.
            </p>
            <a href="https://aepd-vn.org/News.aspx?id=6337" rel="noreferrer" target="_blank">
              Read the article <span aria-hidden="true">↗</span>
            </a>
          </article>
          <aside className="side-quest-more" aria-labelledby="more-essays-title">
            <p>Essays · LinkedIn · Ongoing</p>
            <h3 id="more-essays-title">Notes from the ongoing work of becoming.</h3>
            <p>
              I also share shorter essays about emotion, learning to navigate myself, and making sense of the world
              around me. They are a record of the questions I am still living with.
            </p>
            <a href="https://www.linkedin.com/in/qn131/" rel="noreferrer" target="_blank">
              Find more essays on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="about-cta about-split" aria-labelledby="about-cta-title">
        <p className="eyebrow">Now</p>
        <h2 id="about-cta-title">I&apos;m building toward a career in user-facing product.</h2>
        <p>
          I&apos;m especially interested in education and entertainment. I want to work on products that make everyday
          choices feel clearer and less overwhelming.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/work">
            Explore selected work <span aria-hidden="true">→</span>
          </Link>
        </div>
        <PaperPlaneIllustration className="about-split-illo about-cta-plane" />
      </section>
    </>
  );
}
