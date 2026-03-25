import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-6xl lg:text-7xl">
                Meet
                <br />
                the artist
                <br />
                <span className="text-foreground/40">behind</span>
              </h2>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Chempszze is a monkey with a paintbrush and zero interest in following the rules. Born in the jungle, trained by chaos, inspired by bananas.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-lg">
                Every painting is a window into a wild mind — unfiltered, honest, and surprisingly beautiful.
              </p>
              <div className="pt-4">
                <img
                  src="https://cdn.poehali.dev/projects/9cf8c316-b6b1-4fb7-be06-33d03150d88d/files/b683e616-ce84-4d1d-abe9-898681b064cb.jpg"
                  alt="Chempszze the monkey artist"
                  className="h-48 w-48 rounded-2xl object-cover opacity-90"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 md:space-y-12">
            {[
              { value: "∞", label: "Paintings", sublabel: "Each one weirder than the last", direction: "right" },
              { value: "1", label: "Monkey", sublabel: "Fully dedicated to the craft", direction: "left" },
              { value: "0", label: "Rules", sublabel: "Who needs them anyway?", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground md:text-6xl lg:text-7xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-xl">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-16 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Get in Touch
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
            See the Works
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
