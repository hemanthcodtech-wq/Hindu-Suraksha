import { motion } from "framer-motion"
import { HandHeart, Heart, ShieldCheck, Sparkles, ArrowRight, Sun, Flame, Users, BookOpen, Stethoscope, Utensils, CheckCircle } from "lucide-react"
import { NavLink } from "react-router-dom"
import { hero } from "../data/content"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden home-hero pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20">
      {/* Background Decorative Ambient Glows with Thick Saturated Deep Blue and Saffron */}
      <div className="pointer-events-none absolute -top-10 -left-10 size-[500px] rounded-full bg-[#0a3578]/80 blur-[90px]" />
      <div className="pointer-events-none absolute top-1/4 -left-20 size-[450px] rounded-full bg-[#07214a]/90 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 size-[550px] rounded-full bg-[#ff5100]/65 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 size-[400px] rounded-full bg-[#e65100]/60 blur-[80px]" />
      <div className="pointer-events-none absolute top-10 right-0 size-[400px] rounded-full bg-[#ff6d00]/55 blur-[80px]" />
      
      {/* Subtle Sacred Geometry Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="page-shell relative z-10 flex flex-col-reverse gap-8 px-4 sm:grid sm:grid-cols-[1.15fr_0.85fr] sm:gap-10 sm:px-6 lg:gap-14 lg:px-8 xl:gap-16 sm:items-center">
        
        {/* Text & Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center sm:text-left"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffb74d]/30 bg-gradient-to-r from-[#e65100]/40 to-[#0d2040]/60 px-3.5 py-1.5 backdrop-blur-md shadow-inner">
            <span className="flex size-2 rounded-full bg-[#ff9800] animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#ffcc80] sm:text-xs">
              A Strong Support System for Every Hindu Family
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-4 font-heading text-[clamp(2rem,5.5vw,3.9rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white">
            Protect Hindu Dharma. <br />
            <span className="bg-gradient-to-r from-[#ffcc80] via-[#ffa726] to-[#ff7043] bg-clip-text text-transparent">
              Support Hindu Families.
            </span> <br />
            Serve Humanity.
          </h1>

          {/* Purpose & Subtitle */}
          <p className="mx-auto mt-3.5 max-w-[560px] text-xs leading-[1.75] text-white/90 sm:mx-0 sm:mt-5 sm:text-base lg:text-[15px] lg:leading-[1.75]">
            <strong className="text-[#ffcc80]">United for Hindu Protection. Committed to Hindu Welfare.</strong><br />
            A community-driven initiative dedicated to creating a sustainable support network across towns and cities — so no deserving Hindu family feels alone in times of need.
          </p>

          {/* Feature Highlights Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:justify-start sm:gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm sm:text-[11px]">
              <BookOpen className="size-3 text-[#ffcc80] sm:size-3.5" /> Education for Orphaned Children
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm sm:text-[11px]">
              <Stethoscope className="size-3 text-[#ff7043] sm:size-3.5" /> Medical &amp; Healthcare Aid
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm sm:text-[11px]">
              <Utensils className="size-3 text-[#ffcc80] sm:size-3.5" /> Food &amp; Nutrition Support
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm sm:text-[11px]">
              <ShieldCheck className="size-3 text-[#ff9800] sm:size-3.5" /> Family Financial Assistance
            </span>
          </div>

          {/* Action Buttons: 3 prominent call-to-actions */}
          <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:justify-start sm:gap-3 lg:mt-8">
            <NavLink
              to="/donate"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e65100] via-[#f57c00] to-[#ff9800] px-5 py-2.5 text-xs font-extrabold text-white shadow-xl shadow-orange-950/40 transition hover:brightness-110 active:scale-95 sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm whitespace-nowrap"
            >
              <span>Join as a Member — ₹50</span>
              <ArrowRight className="size-3.5 transition group-hover:translate-x-1 sm:size-4" />
            </NavLink>

            <NavLink
              to="/donate"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#0d2040] active:scale-95 shadow-md sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm whitespace-nowrap"
            >
              <Heart className="size-3.5 text-[#ff7043] fill-current sm:size-4" />
              <span>Donate to Our Mission</span>
            </NavLink>

            <NavLink
              to="/programs"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/20 px-4 py-2.5 text-xs font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/20 active:scale-95 sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm whitespace-nowrap"
            >
              <span>Explore Our Initiatives</span>
            </NavLink>
          </div>

          {/* Goal Statement & Trust Stat Micro-strip */}
          <div className="mt-7 border-t border-white/15 pt-4 text-white/85 sm:pt-5">
            <p className="text-xs font-bold italic tracking-wide text-[#ffcc80] sm:text-sm">
              &ldquo;Our Goal: No Deserving Hindu Family Should Feel Alone in Times of Need.&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-white/80 sm:justify-start sm:gap-8">
              <div>
                <div className="font-heading text-lg font-extrabold text-white sm:text-2xl">₹50</div>
                <div className="text-[9px] font-medium uppercase tracking-wider text-white/70 sm:text-[10px]">Accessible Membership</div>
              </div>
              <div className="h-6 w-px bg-white/20 sm:h-7" />
              <div>
                <div className="font-heading text-lg font-extrabold text-white sm:text-2xl">4 Major</div>
                <div className="text-[9px] font-medium uppercase tracking-wider text-white/70 sm:text-[10px]">Welfare Initiatives</div>
              </div>
              <div className="h-6 w-px bg-white/20 sm:h-7" />
              <div>
                <div className="font-heading text-lg font-extrabold text-white sm:text-2xl">100%</div>
                <div className="text-[9px] font-medium uppercase tracking-wider text-white/70 sm:text-[10px]">Lawful &amp; Accountable</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[440px] sm:mx-0 sm:max-w-none"
        >
          {/* Main Visual Card */}
          <div className="group relative overflow-hidden rounded-3xl border-2 border-white/25 bg-gradient-to-b from-white/20 to-white/5 p-2 shadow-2xl backdrop-blur-md">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-[5/4]">
              <img
                src={hero.image}
                alt="Hindu Suraksha Seva & Community Support"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                decoding="async"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2040]/85 via-transparent to-black/20" />
            </div>

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#0d2040]/85 px-3 py-1 text-[11px] font-bold text-white shadow-xl backdrop-blur-md sm:top-5 sm:left-5 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
              <Flame className="size-3 text-[#ff9800] sm:size-3.5" />
              <span>Dharma &bull; Unity &bull; Seva</span>
            </div>

            {/* Floating Bottom Card: Membership Badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/95 p-3 text-[#0d2040] shadow-2xl backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="grid size-9 place-items-center rounded-xl bg-[#fff3e0] text-[#e65100] sm:size-10">
                    <ShieldCheck className="size-5 sm:size-6" />
                  </div>
                  <div>
                    <h2 className="text-[11px] font-extrabold sm:text-sm">Membership Program — ₹50</h2>
                    <p className="text-[9px] text-muted-foreground sm:text-xs">Digital ID card &bull; Community welfare &bull; Updates</p>
                  </div>
                </div>
                <NavLink
                  to="/donate"
                  className="rounded-lg bg-gradient-to-r from-[#e65100] to-[#ff9800] px-3 py-1.5 text-[9px] font-bold text-white shadow transition hover:brightness-110 sm:px-3.5 sm:py-1.5 sm:text-[10px]"
                >
                  Join ₹50 &rarr;
                </NavLink>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
