import { ArrowRight, Check, HeartHandshake } from "lucide-react"
import { NavLink } from "react-router-dom"
import { volunteer } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function VolunteerCTA() {
  return (
    <section id="volunteer" className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn className="relative min-h-[340px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#04458F] text-white shadow-xl sm:min-h-[380px]">
          <img
            src={volunteer.image}
            alt="Hindu Suraksha Volunteers"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            decoding="async"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2040] via-[#0d2040]/90 to-transparent" />
          
          <div className="relative z-10 flex min-h-[340px] items-center px-6 py-8 sm:min-h-[380px] sm:px-12 sm:py-12 lg:px-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e65100]/30 border border-[#f97316]/50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#ffcc80]">
                <HeartHandshake className="size-3.5 text-[#ff9800]" />
                Volunteer With Us
              </span>
              
              <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight sm:text-4xl lg:text-[42px] text-white">
                {volunteer.title}
              </h2>
              
              <p className="mt-2.5 text-xs leading-relaxed text-white/85 sm:text-sm">
                {volunteer.subtitle}
              </p>

              <p className="mt-2 text-xs font-semibold text-[#ffcc80] italic">
                {volunteer.quote}
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 sm:gap-2.5 sm:text-sm">
                {volunteer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/90">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#e65100] text-white">
                      <Check className="size-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <NavLink
                  to="/volunteer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff9800] to-[#e65100] px-6 py-2.5 text-xs font-bold text-white shadow-lg transition hover:brightness-110 active:scale-95 sm:text-sm"
                >
                  Register as a Volunteer <ArrowRight className="size-4" />
                </NavLink>

                <NavLink
                  to="/contact"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white hover:text-[#0d2040] sm:text-sm"
                >
                  Partner With Us
                </NavLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
