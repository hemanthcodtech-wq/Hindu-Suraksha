import { ArrowRight, CheckCircle2 } from "lucide-react"
import { NavLink } from "react-router-dom"
import { welfareInitiatives } from "../data/content"
import Icon from "./Common/Icon"
import FadeIn from "./Common/FadeIn"
import SectionHeading from "./Common/SectionHeading"

export default function Causes() {
  return (
    <section id="causes" className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 bg-gradient-to-b from-transparent via-[#fffaf5] to-transparent">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#e65100]">
            Core Pillar Programs
          </span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-[#0d2040] sm:text-4xl">
            Our Four Major Welfare Initiatives
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#475467] sm:text-base">
            Every initiative is designed to deliver practical, verified, and impactful assistance to deserving Hindu families and children facing economic hardship.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {welfareInitiatives.map((cause, i) => (
            <FadeIn key={cause.id} delay={i * 0.08} className="flex flex-col">
              <article className="group relative flex h-full flex-col rounded-3xl border border-[#fed7aa]/60 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#f97316]">
                <div className="flex items-center justify-between">
                  <span className={`grid size-12 place-items-center rounded-2xl ${cause.color === "accent" ? "bg-[#fff3e0] text-[#e65100]" : "bg-[#0d2040] text-white"}`}>
                    <Icon name={cause.icon} className="size-6" />
                  </span>
                  <span className="font-heading text-xs font-black tracking-wider text-[#9a3412] bg-[#ffedd5] px-2.5 py-1 rounded-full">
                    INITIATIVE {cause.key}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-extrabold text-[#0d2040] sm:text-lg leading-snug">
                  {cause.title}
                </h3>
                
                <p className="mt-2 text-xs italic text-[#7c2d12] font-medium">
                  {cause.subtitle}
                </p>

                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-[#475467] flex-1">
                  {cause.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 shrink-0 text-[#e65100] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-[#6b7280]">
                  {cause.closing}
                </p>

                <div className="mt-5 pt-3 border-t border-[#fed7aa]/40">
                  <NavLink
                    to="/donate"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e65100] transition group-hover:gap-2.5"
                  >
                    Support This Initiative <ArrowRight className="size-3.5" />
                  </NavLink>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
