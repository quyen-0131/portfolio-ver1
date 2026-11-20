/**
 * Single source of truth for the case studies shown on the home and work pages.
 * Edit a project here and both pages update.
 */
export type CaseStudyTone = "teal" | "tomato" | "cobalt" | "mustard";

export type CaseStudy = {
  slug: string;
  title: string;
  category: "professional" | "personal";
  /** Status line, e.g. "Independent product prototype · In iteration". */
  label: string;
  /** One-sentence version for the home page cards. */
  teaser: string;
  /** Longer version for the work page. */
  summary: string;
  people: string;
  contribution: string;
  learning: string;
  themes: string[];
  featured?: boolean;
  panel?: "ink" | "paper";
  href: string;
  /** Colour used for this project's card on the home page. */
  tone: CaseStudyTone;
  /** The broad question people start with: shown first in the home page hero. */
  messyQuestion: string;
  /** The sharper question the project actually worked on. */
  focusedQuestion: string;
  /** Short tab label in the home page hero. */
  shortTitle: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "career-experiment",
    category: "personal",
    title: "The Career Experiment",
    shortTitle: "Careers",
    label: "Independent product prototype · In iteration",
    teaser:
      "A product prototype that helps students explore the day-to-day work behind potential careers before committing to a path.",
    summary:
      "A career-exploration prototype for students who are considering multiple paths but have limited opportunity to experience the day-to-day work behind them.",
    people: "Third- and fourth-year students approaching their first career decisions.",
    contribution:
      "I framed the product problem, built the prototype, gathered formative feedback, and am refining the role-preview experience.",
    learning:
      "The first version showed that reflection alone was not enough: users needed plain language, more specific prompts, and a concrete next experiment.",
    themes: ["Product discovery", "Prototyping", "User feedback", "Iteration"],
    featured: true,
    panel: "ink",
    href: "/work/career-experiment",
    tone: "teal",
    messyQuestion: "What should I do with my life?",
    focusedQuestion: "Which day-to-day work would I actually enjoy trying for a week?",
  },
  {
    slug: "french-conversations",
    category: "personal",
    title: "French Conversations",
    shortTitle: "French",
    label: "Independent product prototype · In iteration",
    teaser:
      "A French practice prototype that helps learners rehearse one conversation at a time and respond in their own words.",
    summary:
      "A French practice prototype for busy adults who want to rehearse one everyday conversation at a time and answer in their own words.",
    people: "Working adults learning French with real intent and very little time.",
    contribution:
      "I defined the product and its principles, wrote the conversations, built the prototype, and tested it to refine the format.",
    learning:
      "Testing showed that learners need a clear scene before any French, and that scores creep back in unless the product's boundaries are written down.",
    themes: ["Product definition", "Prototyping", "Learning design", "Responsible AI"],
    href: "/work/french-conversations",
    tone: "tomato",
    messyQuestion: "How do I finally become fluent in French?",
    focusedQuestion: "Can I get through one real conversation this weekend, in my own words?",
  },
  {
    slug: "style-dna",
    category: "personal",
    panel: "ink",
    title: "Style DNA",
    shortTitle: "Style",
    label: "Independent product prototype · In iteration",
    teaser:
      "A wardrobe-reflection prototype that starts with clothes you already wear and explores what could keep a piece useful to you.",
    summary:
      "A fashion prototype connecting the clothes people reach for, the reasons other pieces go unworn, and the lasting functions behind garment design.",
    people: "People who want to understand their style and make more considered wardrobe choices.",
    contribution:
      "I framed the problem, built the prototype independently after a Culture × Tech makeathon, and connected curated garment research to a personal wardrobe reflection.",
    learning:
      "The design shifted from judging a garment as timeless to asking what it does for the person wearing it. That is a product hypothesis; user validation is still ahead.",
    themes: ["Product framing", "Prototyping", "Cultural context", "Scope decisions"],
    href: "/work/style-dna",
    tone: "mustard",
    messyQuestion: "What should I buy next?",
    focusedQuestion: "Will this piece keep earning a place in how I already dress?",
  },
  {
    slug: "decision-lab",
    category: "professional",
    title: "Decision Lab",
    shortTitle: "Decisions",
    label: "Behavioural research and strategy · Confidential",
    teaser:
      "Research and strategy work focused on how context, behaviour, and evidence shape practical decisions.",
    summary:
      "Education-focused research and consulting work that uses qualitative and quantitative evidence to understand decision-making and inform practical interventions.",
    people: "Target groups and education partners navigating context-specific behavioural and programme challenges.",
    contribution:
      "I design research instruments, analyse findings with stakeholders, and turn evidence into strategic reports and intervention recommendations.",
    learning:
      "This work has strengthened how I move from behavioural insight to a clear, usable recommendation—without losing the complexity of people’s context.",
    themes: ["Research design", "Behavioural insight", "Strategic synthesis"],
    href: "/work/decision-lab",
    tone: "cobalt",
    messyQuestion: "Why don’t people just follow the programme?",
    focusedQuestion: "What in their context makes the next step hard to take?",
  },
];
