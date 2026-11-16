"use client";

import Link from "next/link";
import { useId, useState } from "react";
import type { CaseStudy } from "@/content/case-studies";

type Props = {
  studies: Pick<CaseStudy, "slug" | "shortTitle" | "title" | "href" | "messyQuestion" | "focusedQuestion">[];
};

/**
 * The home page's signature moment: pick a project, then "sharpen" the broad
 * question people start with into the focused one the project worked on.
 */
export function QuestionSharpener({ studies }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sharpened, setSharpened] = useState(false);
  const resultId = useId();
  const active = studies[activeIndex];

  function choose(index: number) {
    setActiveIndex(index);
    setSharpened(false);
  }

  return (
    <figure className="field-note" aria-label="From a messy question to a focused one">
      <div className="field-note-binding" aria-hidden="true" />
      <header className="field-note-header">
        <p>Field note Nº 0{activeIndex + 1}</p>
        <p className="field-note-stamp">Ambiguity → Focus</p>
      </header>

      <div className="field-note-tabs" role="group" aria-label="Choose a project">
        {studies.map((study, index) => (
          <button
            key={study.slug}
            type="button"
            className="field-note-tab"
            aria-pressed={index === activeIndex}
            onClick={() => choose(index)}
          >
            <span aria-hidden="true">0{index + 1}</span> {study.shortTitle}
          </button>
        ))}
      </div>

      <div className="field-note-body" data-sharpened={sharpened}>
        <p className="field-note-kicker">People usually ask</p>
        <p className="field-note-messy" key={`messy-${active.slug}`}>
          <span>{active.messyQuestion}</span>
        </p>

        <button
          type="button"
          className="field-note-sharpen"
          aria-controls={resultId}
          aria-expanded={sharpened}
          onClick={() => setSharpened((value) => !value)}
        >
          {sharpened ? "Start again" : "Sharpen the question"}
          <span aria-hidden="true">{sharpened ? "↺" : "✎"}</span>
        </button>

        <div className="field-note-result" id={resultId} aria-live="polite">
          {sharpened ? (
            <>
              <p className="field-note-kicker">So I asked</p>
              <p className="field-note-focused" key={`focused-${active.slug}`}>
                {active.focusedQuestion}
              </p>
              <Link className="field-note-link" href={active.href}>
                See how in {active.title} <span aria-hidden="true">↗</span>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </figure>
  );
}
