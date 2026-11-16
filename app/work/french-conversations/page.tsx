import Image from "next/image";
import Link from "next/link";

const repoUrl = "https://github.com/quyen-0131/aws-vibe-coding";

/** Paste a 60–90 second walkthrough link (Loom, YouTube…) here and a "Watch" button appears in the hero. */
const demoVideoUrl: string | null = null;

const boundaries = [
  {
    role: "Not a gamified app",
    patterns: [
      "No streaks, XP, levels, or scores standing in for ability",
      "No guilt notifications or counts of missed sessions",
      "A removed “7 of 8 lines” summary became the learner’s own sentences instead",
    ],
  },
  {
    role: "Not a chatbot",
    patterns: [
      "No open-ended exchange that generates replies",
      "Every French sentence a learner sees was written by a person",
      "The model judges an answer and coaches in English; it never speaks French",
    ],
  },
];

const prototypeScreens = [
  {
    image: "/images/french-conversations/choose-weekend.svg",
    alt: "The French Conversations scene screen, where Alex asks about the weekend and the learner picks one of three versions.",
    label: "01 · Start inside a scene",
    description: "Before any French, the learner knows where they are, who they are talking to, and what counts as done.",
  },
  {
    image: "/images/french-conversations/build-it.svg",
    alt: "The French Conversations build step, with shuffled chunks of a sentence and a hint about where the order went wrong.",
    label: "02 · Rebuild the line",
    description: "Recognition before recall: the learner orders pieces of their own line, with decoys taken from another conversation.",
  },
  {
    image: "/images/french-conversations/say-it.svg",
    alt: "The French Conversations say step, showing the learner's own answer, coaching feedback, and a reference line.",
    label: "03 · Answer as yourself",
    description: "Answers are judged on whether they keep the conversation going, not on whether they match a script.",
  },
];

export default function FrenchConversationsPage() {
  return (
    <>
      <section className="case-hero" aria-labelledby="case-title">
        <Link className="case-back" href="/work">
          <span aria-hidden="true">←</span> Selected work
        </Link>
        <p className="eyebrow">Independent product prototype · In iteration</p>
        <h1 id="case-title">Practise one conversation until you can make it your own.</h1>
        <p>
          I built French Conversations to help learners rehearse everyday situations in French, one conversation at a
          time. The goal is to put the script away, answer in your own words, and handle a follow-up you haven’t seen.
        </p>
        <p>
          It started as a first build at an AWS workshop. I kept going afterwards: testing it, cutting what didn’t
          help learners, and writing down the boundaries the product shouldn’t cross.
        </p>
        <div className="case-hero-actions">
          {demoVideoUrl ? (
            <a className="button button-prototype" href={demoVideoUrl} rel="noreferrer" target="_blank">
              Watch the 90-second walkthrough <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <a
            className={demoVideoUrl ? "text-link" : "button button-prototype"}
            href={repoUrl}
            rel="noreferrer"
            target="_blank"
          >
            View the prototype on GitHub <span aria-hidden="true">↗</span>
          </a>
          <p>Runs locally · no account · optional Gemini key for answer feedback</p>
        </div>
      </section>

      <section className="case-at-a-glance" aria-label="French Conversations at a glance">
        <div>
          <p>People</p>
          <strong>Busy adult learners with real intent and very little time</strong>
        </div>
        <div>
          <p>My role</p>
          <strong>Product definition, writing the conversations, building, and prototype testing</strong>
        </div>
        <div>
          <p>Evidence so far</p>
          <strong>Tried by one or two testers, plus my own review of the build. Not yet validated with learners.</strong>
        </div>
      </section>

      <section className="case-section case-problem" aria-labelledby="problem-title">
        <p className="eyebrow">The problem</p>
        <div className="case-problem-layout">
          <h2 id="problem-title">What happens when a conversation goes off script?</h2>
          <div>
            <p>
              Learning French gave me words and sentence patterns I could recognise. In conversation, I wanted to be
              able to use them when someone asked me a question I hadn’t prepared for.
            </p>
            <p>
              Talking about the weekend gave me a specific place to start. A learner might know how to say they went
              hiking. The next challenge is to answer who they went with or how it went, using details from their own
              life.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-role-patterns" aria-labelledby="patterns-title">
        <div className="case-section-heading">
          <p className="eyebrow">The key product decision</p>
          <h2 id="patterns-title">The model judges answers. It never writes the French.</h2>
        </div>
        <p className="case-lede">
          A beginner cannot tell when generated French is wrong, so every line in the product is written by a person.
          Gemini is used only to decide whether an answer responds to what was asked and gives the other person
          something to react to, then to coach in English. Without an API key the app still works; answers are simply
          marked as not checked. Writing these boundaries down kept the build from drifting toward the two things it
          exists to avoid.
        </p>
        <div className="role-pattern-grid">
          {boundaries.map((item) => (
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
          <p className="eyebrow">What testing changed</p>
          <h2 id="evidence-title">Three things I got wrong, and what each one changed.</h2>
        </div>
        <div className="feedback-grid">
          <article>
            <h3>People need a scene first</h3>
            <p>
              In an early version, a tester read the server’s opening line, assumed they were the server, and offered
              milk instead of ordering. Every conversation now opens by saying where you are, who you are, and what
              counts as done.
            </p>
          </article>
          <article>
            <h3>Easy choices taught nothing</h3>
            <p>
              The first practice step offered whole sentences from other conversations. The right one could be spotted
              by topic without reading any French. Rebuilding your own line from pieces tests word order instead.
            </p>
          </article>
          <article>
            <h3>Scores crept back in</h3>
            <p>
              An end screen showing “7 of 8 lines answered” shipped before I noticed it was a score by another name. It
              now shows what the learner said next to how a French speaker put it.
            </p>
          </article>
        </div>
        <p className="case-note">
          These came from one or two testers and my own review of the build. That was enough to change the format, but
          it isn’t validation of the product. The study below is how I’d get that.
        </p>
      </section>

      <section className="case-section prototype-showcase" aria-labelledby="prototype-showcase-title">
        <div className="case-section-heading">
          <p className="eyebrow">Prototype walkthrough</p>
          <h2 id="prototype-showcase-title">Each step asks a little more of the learner.</h2>
        </div>
        <p className="case-lede">
          The bet: rehearsing one everyday situation in stages makes it easier to improvise within it. The current
          build covers one conversation about your weekend, in three versions, at A2 level. A session runs: pick the
          weekend you actually had → read the conversation → rebuild your own line → answer as yourself → keep the
          sentences you said, not a score. Learners can also paste French they’ve read and practise it the same way.
        </p>
        <div className="prototype-showcase-action">
          <div>
            <p>Explore the current build</p>
            <span>The repository includes the app, the product requirements, and instructions for running it locally.</span>
          </div>
          <a className="text-link" href={repoUrl} rel="noreferrer" target="_blank">
            Open the repository <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="prototype-gallery">
          {prototypeScreens.map((screen) => (
            <figure className="prototype-screen" key={screen.image}>
              <div className="prototype-screen-browser" aria-hidden="true">
                <span />
                <span />
                <span />
                <p>localhost:8777</p>
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

      <section className="case-next" aria-labelledby="next-title">
        <p className="eyebrow">What I would validate next</p>
        <h2 id="next-title">Can learners handle a follow-up they haven’t rehearsed?</h2>
        <p>
          The prototype gives learners feedback on replies to prepared prompts. To see whether the practice carries
          over, I’d ask five learners to rehearse the weekend dialogue, put the script away, and talk for five minutes
          with a French speaker. Could they answer “What did you do on Sunday?” in their own words, then respond to a
          follow-up like “Who did you go with?” without looking anything up?
        </p>
        <ul>
          <li>
            <strong>Keep going</strong> if at least three of five answer the unrehearsed follow-up in their own words.
          </li>
          <li>
            <strong>Change the format</strong> if they handle the rehearsed questions but freeze on the follow-up. The
            practice isn’t carrying over yet.
          </li>
          <li>
            <strong>Stop</strong> if they can’t get through even the rehearsed lines. A phrasebook would do the job
            better.
          </li>
        </ul>
        <p>Setting these thresholds before the test means the result can’t quietly move the goalposts.</p>
      </section>
    </>
  );
}
