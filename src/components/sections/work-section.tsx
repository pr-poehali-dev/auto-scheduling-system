import { useReveal } from "@/hooks/use-reveal"
import { type Lang, translations } from "@/lib/i18n"
import { useState } from "react"

const PAINTINGS = [
  "https://cdn.poehali.dev/projects/9cf8c316-b6b1-4fb7-be06-33d03150d88d/files/e5044bb9-d45d-46eb-8f1c-871298d8c46a.jpg",
  "https://cdn.poehali.dev/projects/9cf8c316-b6b1-4fb7-be06-33d03150d88d/files/37e9153a-3a4e-4790-b489-f45a2d975df3.jpg",
  "https://cdn.poehali.dev/projects/9cf8c316-b6b1-4fb7-be06-33d03150d88d/files/4dd6e8fb-9c81-412f-be0c-761f331d7858.jpg",
  "https://cdn.poehali.dev/projects/9cf8c316-b6b1-4fb7-be06-33d03150d88d/files/898616aa-7c51-43a7-974b-93baf6fe02d6.jpg",
  "https://cdn.poehali.dev/projects/9cf8c316-b6b1-4fb7-be06-33d03150d88d/files/2a8b72a8-631f-4910-9c3e-92c97004ca4b.jpg",
  "https://cdn.poehali.dev/projects/9cf8c316-b6b1-4fb7-be06-33d03150d88d/files/d2830d67-7e30-4edd-a67f-66cfffcabbda.jpg",
]

export function WorkSection({ lang }: { lang: Lang }) {
  const { ref, isVisible } = useReveal(0.3)
  const t = translations[lang].works
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t.title}
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">{t.subtitle}</p>
        </div>

        <div className="max-h-[60vh] space-y-4 overflow-y-auto pr-2 md:max-h-[65vh] md:space-y-6">
          {t.items.map((project, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : i % 2 === 0
                    ? "-translate-x-16 opacity-0"
                    : "translate-x-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
                marginLeft: i % 2 === 0 ? "0" : "auto",
                maxWidth: i % 2 === 0 ? "90%" : "95%",
              }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full border-b border-foreground/10 pb-4 text-left transition-all hover:border-foreground/20 md:pb-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-sm text-foreground/30 group-hover:text-foreground/50 md:text-base">
                      {project.number}
                    </span>
                    <div>
                      <h3 className="mb-0.5 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-foreground/50 md:text-sm">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-foreground/30 md:text-sm">{project.year}</span>
                    <span
                      className="font-mono text-lg text-foreground/40 transition-transform duration-300"
                      style={{ transform: expanded === i ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}
                    >
                      +
                    </span>
                  </div>
                </div>

                {expanded === i && (
                  <div className="mt-4 grid gap-4 md:grid-cols-[1fr_2fr] md:gap-8">
                    <img
                      src={PAINTINGS[i]}
                      alt={project.title}
                      className="h-40 w-full rounded-xl object-cover opacity-90 md:h-48"
                    />
                    <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                      {project.description}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}