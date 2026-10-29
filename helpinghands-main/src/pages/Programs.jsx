import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { NavLink } from "react-router-dom"
import { welfareInitiatives, dharmaProtection } from "../data/content"
import Icon from "../components/Common/Icon"
import FadeIn from "../components/Common/FadeIn"
import SectionHeading from "../components/Common/SectionHeading"

export default function Programs() {
  return (
    <main className="bg-background pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#e65100] py-14 text-white sm:py-20">
        <div className="page-shell px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffcc80] sm:text-xs">
              Direct Community Impact
            </p>
            <h1 className="font-heading text-3xl font-extrabold sm:text-5xl lg:text-[54px]">
              Our Welfare Programs &amp; Initiatives
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-white/90 sm:text-base sm:leading-7">
              Hindu Suraksha focuses on 4 major welfare initiatives — ensuring orphaned and underprivileged children receive education, families receive medical &amp; food aid, and economically distressed households are supported with dignity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welfare Initiatives Detailed */}
      <section className="page-shell px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-10">
          {welfareInitiatives.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="rounded-3xl border border-[#fed7aa]/60 bg-gradient-to-br from-[#fffdfa] via-white to-[#fff8f0] p-6 shadow-sm transition hover:shadow-md sm:p-10 lg:p-12">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-8">
                    <span className="inline-block rounded-full bg-[#ffedd5] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#9a3412]">
                      Initiative {item.key}
                    </span>
                    <h2 className="mt-3 font-heading text-xl font-extrabold text-[#0d2040] sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-xs font-semibold italic text-[#e65100] sm:text-sm">
                      {item.subtitle}
                    </p>

                    <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#475467]">
                      {item.items.map((pt) => (
                        <div key={pt} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 shrink-0 text-[#e65100] mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 text-xs text-[#6b7280] italic">
                      {item.closing}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <NavLink
                        to="/donate"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e65100] to-[#ff9800] px-5 py-2.5 text-xs font-bold text-white shadow transition hover:brightness-105"
                      >
                        Support This Initiative &rarr;
                      </NavLink>
                      <NavLink
                        to="/support-us"
                        className="inline-flex items-center gap-2 rounded-xl border border-[#fed7aa] bg-white px-5 py-2.5 text-xs font-bold text-[#e65100] transition hover:bg-[#fff3e0]"
                      >
                        Apply for Assistance
                      </NavLink>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-center">
                    <div className="grid size-28 place-items-center rounded-3xl bg-[#fff3e0] text-[#e65100] border-2 border-[#fed7aa] shadow-inner sm:size-36">
                      <Icon name={item.icon} className="size-14 sm:size-18" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Cultural Protection Section */}
      <section className="page-shell px-4 pb-12 sm:px-6 lg:px-8">
        <FadeIn className="rounded-3xl border border-[#fed7aa]/50 bg-[#0d2040] p-6 text-white sm:p-10 lg:p-12">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ffcc80]">
            HERITAGE &amp; VALUES
          </span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">
            {dharmaProtection.title}
          </h2>
          <p className="mt-2 text-xs text-white/80 sm:text-sm">
            {dharmaProtection.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
            {dharmaProtection.points.map((p) => (
              <div key={p} className="flex items-start gap-2 text-white/90">
                <span className="size-1.5 rounded-full bg-[#ff9800] mt-1.5 shrink-0" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
