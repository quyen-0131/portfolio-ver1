/**
 * Single source of truth for the case studies shown on the home and work pages.
 * Edit a project here and both pages update.
 */
export type CaseStudyTone = "teal" | "tomato" | "cobalt" | "mustard";

/**
 * The problem-led pitch at the top of each case study: what goes wrong for people
 * today, what the work does about it, and why that differs from what already exists.
 */
export type ValueProposition = {
  /** One line a stranger could repeat. */
  statement: string;
  problem: string;
  solution: string;
  difference: string;
  /** Column headings, when the defaults (problem / what it does / why it's different) don't fit. */
  labels?: { problem?: string; solution?: string; difference?: string };
  /** An honesty note shown under the columns, e.g. when the outcome is still a hypothesis. */
  note?: string;
};

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
  valueProposition: ValueProposition;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "career-experiment",
    category: "personal",
    title: "The Career Experiment",
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
    valueProposition: {
      statement: "Try the work behind a career before you commit to it.",
      problem:
        "Students nearing graduation choose between careers they have mostly seen as job titles and polished profiles. Internships and shadowing are hard to get, so many commit without knowing what the everyday work feels like.",
      solution:
        "It connects what a student has already done to the activities behind two roles, asks which kinds of work they want more or less of, and lets them try a small role-shaped problem. They leave with a low-risk next experiment.",
      difference:
        "Career quizzes and personality tests hand back a verdict based on preferences. This starts from work the student has actually done and ends with something to try next, so the answer comes from experience rather than a score.",
    },
  },
  {
    slug: "french-conversations",
    category: "personal",
    title: "French Conversations",
    label: "Independent product prototype · In iteration",
    teaser:
      "A French practice prototype that teaches in context, not streaks: learners rehearse one conversation at a time and respond in their own words.",
    summary:
      "A French practice prototype for busy adults who want more than short lessons and streaks: every phrase is learned in context, one everyday conversation at a time, until they can answer in their own words.",
    people: "Working adults learning French with real intent and very little time.",
    contribution:
      "I defined the product and its principles, wrote the conversations, built the prototype, and tested it to refine the format.",
    learning:
      "Testing showed that learners need a clear scene before any French, and that scores creep back in unless the product's boundaries are written down.",
    themes: ["Product definition", "Prototyping", "Learning design", "Responsible AI"],
    href: "/work/french-conversations",
    tone: "tomato",
    valueProposition: {
      statement: "Hold one real conversation in French, in your own words.",
      problem:
        "Busy adults can keep a language-app streak going for months and still freeze when someone asks them a real question. Words arrive one at a time, with no situation to recall them from.",
      solution:
        "Every phrase is learned inside one everyday situation, such as talking about your weekend. Learners rebuild their own lines, then answer as themselves and get coaching on whether the answer keeps the conversation going.",
      difference:
        "Streak-based apps reward showing up, and chatbots produce French a beginner cannot check. Here every French line is written by a person, there are no streaks or scores, and the AI only judges answers and coaches in English.",
    },
  },
  {
    slug: "style-dna",
    category: "personal",
    panel: "ink",
    title: "Style DNA",
    label: "Independent product prototype · In iteration",
    teaser:
      "A wardrobe prototype for anyone who buys clothes that end up unworn: it starts with what you already reach for, so you can tell whether the next piece will get worn.",
    summary:
      "A wardrobe prototype for people who buy pieces that end up unworn. It starts with the clothes they reach for and the reasons others stay in the wardrobe, to help them judge whether a new piece will fit how they really dress.",
    people: "People who buy clothes that go unworn, or often feel they have nothing to wear.",
    contribution:
      "I framed the problem, built the prototype independently after a Culture × Tech makeathon, and connected curated garment research to a personal wardrobe reflection.",
    learning:
      "The design shifted from judging a garment as timeless to asking what it does for the person wearing it. That is a product hypothesis; user validation is still ahead.",
    themes: ["Product framing", "Prototyping", "Cultural context", "Scope decisions"],
    href: "/work/style-dna",
    tone: "mustard",
    valueProposition: {
      statement: "Know whether a new piece will actually get worn, before you buy it.",
      problem:
        "Many of us have a full wardrobe and still feel we have nothing to wear. A piece looks good in the shop, then doesn't go with anything or doesn't suit how we really dress, and it stays unworn.",
      solution:
        "Style DNA starts with the clothes you already reach for. It asks what those pieces do for you and what stops you wearing the rest, then turns your answers into a personal reference to check before the next purchase.",
      difference:
        "Shopping apps and trend lists suggest what to buy next. Style DNA starts with what you already own, and helps you decide whether you need something new at all. Garment history appears only to explain what a piece was made to do.",
      note: "This is the problem the prototype is built around. Whether it changes what people buy has not been tested yet.",
    },
  },
  {
    slug: "decision-lab",
    category: "professional",
    title: "Decision Lab",
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
    valueProposition: {
      statement: "Evidence an education team can act on, not just a report to file.",
      problem:
        "An education organisation had live decisions to make about messaging, recruitment, pricing, and future programmes, without a clear view of how families and employers actually weigh those choices.",
      solution:
        "I turned each decision into questions people could answer, spoke with the families and employers living the choice, and connected what I found to a concrete recommendation.",
      difference:
        "Rather than a broad survey or a general report, each project started from the decision on the table and ended with a next action the team could take.",
      labels: { solution: "What I did", difference: "What made it useful" },
    },
  },
];

/** Look up a case study by slug; throws so a typo fails the build instead of rendering nothing. */
export function getCaseStudy(slug: string): CaseStudy {
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}
