import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseIllustration } from "@/components/illustrations/Illustrations";
import { ValueProposition } from "@/components/work/ValueProposition";
import { getCaseStudy } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Style DNA",
  description:
    "A wardrobe prototype for people who buy clothes that end up unworn: it starts with what you already reach for, so you can tell whether the next piece will get worn.",
};

const prototypeUrl = "https://style-dna-wardrobe.vercel.app/";

const walkthrough = [
  {
    image: "/images/style-dna/denim-jacket.svg",
    alt: "An illustration of a denim jacket from the Style DNA prototype.",
    title: "Start with what gets worn",
    description:
      "Pick pieces you reach for often and reflect on what they do for you. Then choose rarely-worn pieces and the reasons they stay in the wardrobe.",
  },
  {
    image: "/images/style-dna/silk-skirt.svg",
    alt: "An illustration of a bias-cut silk skirt from the Style DNA prototype.",
    title: "Build a personal reference",
    description:
      "A Style DNA card brings those answers together. The suggested style name can be changed, and the profile stays in the browser for a later visit.",
  },
  {
    image: "/images/style-dna/ao-dai.svg",
    alt: "An illustration of an áo dài from the Style DNA prototype.",
    title: "Explore what a piece does",
    description:
      "Explore garment origins, what a version is associated with, and what still lasts. A personal note draws on the saved answers, and pairing suggestions connect two pieces.",
  },
];

export default function StyleDnaPage() {
  return (
    <div className="project-theme-ink">
      <section className="case-hero case-hero--illustrated" aria-labelledby="case-title">
        <Link className="case-back" href="/personal-projects">Personal projects</Link>
        <p className="eyebrow">Style DNA · Independent product prototype · In iteration</p>
        <h1 id="case-title">A full wardrobe, and still nothing to wear.</h1>
        <p>
          Many of us buy clothes that end up unworn. Style DNA is a prototype that starts with the clothes you
          already reach for, so you can tell whether the next piece will actually get worn.
        </p>
        <p>
          The idea came out of COMMON GROUND, a Culture × Tech makeathon in Singapore. I built the app afterwards
          as an independent prototype.
        </p>
        <div className="case-hero-actions">
          <a className="button button-prototype" href={prototypeUrl} rel="noreferrer" target="_blank">
            Try the live prototype <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#walkthrough">Explore the walkthrough</a>
          <p>Working prototype · User validation still ahead</p>
        </div>
        <CaseIllustration slug="style-dna" tone="mustard" />
      </section>

      <section className="case-at-a-glance" aria-label="Style DNA at a glance">
        <div><p>People</p><strong>People who buy clothes that go unworn, or often feel they have nothing to wear</strong></div>
        <div><p>My role</p><strong>Problem framing, product scope, research synthesis, and building the prototype</strong></div>
        <div><p>Evidence so far</p><strong>Curated garment research and design iteration. No user-validation findings yet.</strong></div>
      </section>

      <ValueProposition study={getCaseStudy("style-dna")} />

      <section className="case-section case-problem" aria-labelledby="problem-title">
        <p className="eyebrow">The problem</p>
        <div className="case-problem-layout">
          <h2 id="problem-title">Clothes that looked right in the shop, then stayed in the wardrobe.</h2>
          <div>
            <p>
              It is easy to buy a piece because it looks good on the rail or on a screen, then find it doesn’t go
              with anything you own, or doesn’t suit the way you actually dress. It stays in the wardrobe, unworn,
              and the next time you get dressed you still feel you have nothing to wear.
            </p>
            <p>
              Most help points the same way: shopping apps recommend more, and advice about timeless wardrobes
              answers with a list of pieces to own. Both are reasons to buy something else.
            </p>
            <p>
              I wanted to start from the other side: the clothes someone already reaches for, and what those pieces
              do for them. Garment history is part of that. Most of us wear clothes without knowing where they began
              or what they were first made to do, which makes them easy to take for granted. Knowing a piece’s
              original function, and how it has changed in modern wardrobes, can help someone appreciate what they
              already own.
            </p>
            <p>
              My hypothesis is that this makes it easier to tell whether a new piece will earn its place and, over
              time, to buy less. That is still a hypothesis, not a demonstrated outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section" aria-labelledby="hypothesis-title">
        <div className="case-section-heading">
          <p className="eyebrow">Initial hypothesis</p>
          <h2 id="hypothesis-title">Understanding a piece might come before wanting another one.</h2>
        </div>
        <p className="case-lede">
          If people can name what their frequently worn clothes do for them, and what gets in the way of wearing
          other pieces, they may have a more useful reference than a generic style label. The prototype makes
          that reflection concrete, then offers garment context and styling ideas to explore against it.
        </p>
      </section>

      <section className="case-section prototype-showcase" id="walkthrough" aria-labelledby="walkthrough-title">
        <div className="case-section-heading">
          <p className="eyebrow">The current prototype</p>
          <h2 id="walkthrough-title">Two ways in: reflect on your wardrobe, or explore a piece.</h2>
        </div>
        <p className="case-lede">
          The Style DNA flow moves from often-worn pieces to their purpose, rarely-worn pieces, the barriers to
          wearing them, and a personal card. Explore is also available on its own; a visitor does not have to
          finish the reflection first.
        </p>
        <div className="prototype-gallery">
          {walkthrough.map((step) => (
            <figure className="prototype-screen" key={step.image}>
              <Image src={step.image} alt={step.alt} width={400} height={500} />
              <figcaption><p>{step.title}</p><span>{step.description}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="case-note">
          An illustrated walkthrough using artwork from the prototype. You can also{" "}
          <a href={prototypeUrl} rel="noreferrer" target="_blank">try the live prototype</a>.
        </p>
      </section>

      <section className="case-section case-role-patterns" aria-labelledby="decision-title">
        <div className="case-section-heading">
          <p className="eyebrow">A decision in this iteration</p>
          <h2 id="decision-title">From judging a garment to understanding its purpose.</h2>
        </div>
        <p className="case-lede">
          My first prototype started with scanning a garment and assigning a timelessness verdict. That framing
          gave the product too much authority over a personal choice. The current version starts with what the
          person wears and explains the lasting physical or social need a garment can serve.
        </p>
        <div className="role-pattern-grid">
          <article>
            <h3>Describe the job, rather than assign a grade</h3>
            <p>
              “Built for” and “Daily use” tags replace the earlier verdict. An occasion piece has a different
              purpose from an everyday piece; wearing it less often does not make it a failure.
            </p>
          </article>
          <article>
            <h3>Curate the history</h3>
            <p>
              The current experience uses written garment histories and linked sources, with structured answers
              selecting personal notes. Live AI generation is unnecessary for the core reflection and Explore flows.
            </p>
          </article>
        </div>
        <p className="case-note">These are design decisions from building and reviewing the prototype, not findings from user testing.</p>
      </section>

      <section className="case-section" aria-labelledby="evidence-title">
        <div className="case-section-heading">
          <p className="eyebrow">What I know so far</p>
          <h2 id="evidence-title">The product story is clearer. Its usefulness still needs evidence.</h2>
        </div>
        <div className="feedback-grid">
          <article>
            <h3>Research informs the content</h3>
            <p>Curated garment research supports the historical explanations. It does not establish demand for this app or prove that it changes consumption.</p>
          </article>
          <article>
            <h3>Problem research is pending</h3>
            <p>The next evidence source is a themed review of saved community discussions, including views that challenge the idea. There are no findings to report yet.</p>
          </article>
          <article>
            <h3>Personal use is a starting point</h3>
            <p>I plan to keep two weeks of self-use notes and ask a few people where they first get confused. Personal observations will be labelled separately from other people’s feedback.</p>
          </article>
        </div>
      </section>

      <section className="case-next" aria-labelledby="next-title">
        <p className="eyebrow">What I would validate next</p>
        <h2 id="next-title">Does the reflection help with one real wardrobe decision?</h2>
        <p>
          The next step is to test whether the answers are useful outside the app. These are proposed checks;
          none has been completed yet.
        </p>
        <ul>
          <li><strong>A usable personal reference.</strong> After making a card, can someone explain one thing they would look for or avoid in their next piece, in their own words?</li>
          <li><strong>Context that changes a choice.</strong> Does a garment explanation help someone name a use or pairing for a piece they already own? Record concrete examples, including when it adds nothing.</li>
          <li><strong>Occasion pieces treated fairly.</strong> Does the often/rarely distinction misrepresent clothing kept for ceremonies or special occasions? Use that feedback to decide how to add an occasion option.</li>
        </ul>
        <p>
          <strong>What I left out and why.</strong> A shopping feed, sustainability scores, and generated cultural
          history would add complexity before the core reflection has evidence behind it. The prototype does not
          yet demonstrate less buying or greater sustainability.
        </p>
        <p>
          <strong>The next build.</strong> Use the research and self-use notes to revise the questions, account for
          occasion wear, and make the card useful to revisit. A shareable card needs redesigning before unprompted
          sharing can serve as a meaningful signal.
        </p>
      </section>
    </div>
  );
}
