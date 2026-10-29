import { ArrowRight, ShieldCheck, Heart, Users, Sparkles } from "lucide-react"
import { NavLink } from "react-router-dom"
import { mission } from "../data/content"
import FadeIn from "./Common/FadeIn"

export default function Mission() {
  return (
    <section id="mission" className="w-full px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn className="relative overflow-hidden rounded-3xl border border-[#fed7aa]/70 bg-gradient-to-br from-[#fffdfa] via-white to-[#fff8f0] p-6 shadow-[0_12px_40px_rgba(230,81,0,0.06)] sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#fff3e0] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#e65100]">
                <span className="size-2 rounded-full bg-[#e65100]" />
                {mission.eyebrow}
              </span>
              
              <h2 className="mt-3.5 font-heading text-2xl font-extrabold leading-[1.15] text-[#0d2040] sm:text-4xl lg:text-[40px]">
                {mission.title}
              </h2>
              
              <p className="mt-4 text-sm leading-relaxed text-[#475467] sm:text-base sm:leading-8">
                {mission.body}
              </p>

              {/* Highlight Banner with Goal */}
              <div className="mt-5 rounded-2xl border border-[#fed7aa]/80 bg-[#fff3e0]/60 p-4 sm:p-5">
                <p className="font-heading text-sm font-extrabold text-[#9a3412] sm:text-base">
                  {mission.goal}
                </p>
                <p className="mt-1.5 text-xs text-[#7c2d12] sm:text-sm">
                  Our mission ensures orphaned and underprivileged Hindu children have access to education, healthcare, and nutritious food, while economically disadvantaged Hindu families receive support, dignity, and hope during difficult times.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3.5 sm:mt-8">
                <NavLink
                  to="/donate"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-[#e65100] to-[#ff9800] px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-[#e65100]/20 transition hover:brightness-105 active:scale-95 sm:text-sm"
                >
                  Join as a Member — ₹50
                  <ArrowRight className="size-4" />
                </NavLink>
                <NavLink
                  to="/programs"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#fed7aa] bg-white px-5 py-2.5 text-xs font-bold text-[#e65100] transition hover:bg-[#fff3e0] sm:text-sm"
                >
                  Explore Our Initiatives
                </NavLink>
                <NavLink
                  to="/about"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-transparent px-4 py-2.5 text-xs font-semibold text-[#0d2040] transition hover:underline sm:text-sm"
                >
                  About Our Organization
                </NavLink>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/80 shadow-xl ring-1 ring-[#fed7aa]/50 sm:rounded-3xl">
                <img
                  src="/images/mission-seva.png"
                  alt="Hindu Suraksha Seva & Community Support"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  decoding="async"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2040]/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e65100]/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    <ShieldCheck className="size-3" /> Community Driven
                  </span>
                  <p className="mt-1.5 text-xs font-extrabold sm:text-sm text-white">United for Protection &bull; Committed to Welfare</p>
                  <p className="text-[11px] text-white/80">Service, Compassion &amp; Collective Responsibility</p>
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
