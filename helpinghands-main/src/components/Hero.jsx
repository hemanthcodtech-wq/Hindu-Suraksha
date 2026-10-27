import { motion } from "framer-motion"
import { HandHeart, Heart, ShieldCheck, Sparkles, ArrowRight, Sun, Flame, Users, Landmark } from "lucide-react"
import { NavLink } from "react-router-dom"
import { hero } from "../data/content"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden home-hero pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20">
      {/* Background Decorative Ambient Glows with Thick Saturated Blue and Orange */}
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

      <div className="page-shell relative z-10 flex flex-col-reverse gap-8 px-4 sm:grid sm:grid-cols-[1.1fr_0.9fr] sm:gap-10 sm:px-6 lg:gap-14 lg:px-8 xl:gap-16 sm:items-center">
        
        {/* Text & Content Column (appears second on mobile, first on desktop) */}
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
              Orphan Welfare &bull; Education &bull; Annadanam
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-4 font-heading text-[clamp(2.1rem,6vw,4.25rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
            Nurturing Orphans, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#ffcc80] via-[#ffa726] to-[#ff7043] bg-clip-text text-transparent">
              Free Education, Meals
            </span> <br />
            &amp; Loving Adoption
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-3.5 max-w-[540px] text-xs leading-[1.7] text-white/90 sm:mx-0 sm:mt-5 sm:text-base lg:text-[16px] lg:leading-[1.75]">
            {hero.subtitle}
          </p>

          {/* Feature Highlights Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:justify-start sm:gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm sm:text-[11px]">
              <Heart className="size-3 text-[#ff7043] sm:size-3.5" /> Orphan Care &amp; Shelter
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm sm:text-[11px]">
              <Users className="size-3 text-[#ffcc80] sm:size-3.5" /> Adoption &amp; Foster
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm sm:text-[11px]">
              <Sun className="size-3 text-[#ffcc80] sm:size-3.5" /> 100% Free Education
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/95 backdrop-blur-sm sm:text-[11px]">
              <Flame className="size-3 text-[#ff9800] sm:size-3.5" /> Daily Free Annadanam
            </span>
          </div>

          {/* Action Buttons: strictly 1 row on mobile (grid grid-cols-2) */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:justify-start sm:gap-4 lg:mt-8">
            <NavLink
              to="/donate"
              className="group flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#e65100] via-[#f57c00] to-[#ff9800] px-3 py-2.5 text-xs font-extrabold text-white shadow-xl shadow-orange-950/40 transition hover:brightness-110 active:scale-95 sm:min-h-12 sm:px-7 sm:py-3 sm:text-sm whitespace-nowrap"
            >
              <span>Support a Child</span>
              <Heart className="size-3.5 fill-current transition group-hover:scale-110 sm:size-4" />
            </NavLink>

            <NavLink
              to="/volunteer"
              className="group flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-white/35 bg-white/10 px-3 py-2.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#0d2040] active:scale-95 shadow-md sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm whitespace-nowrap"
            >
              <span>Join as Sevak</span>
              <ArrowRight className="size-3.5 transition group-hover:translate-x-1 sm:size-4" />
            </NavLink>
          </div>

          {/* Trust Stat Micro-strip */}
          <div className="mt-7 flex items-center justify-center gap-4 border-t border-white/15 pt-4 text-white/80 sm:justify-start sm:gap-8 sm:pt-5">
            <div>
              <div className="font-heading text-lg font-extrabold text-white sm:text-2xl">3,500+</div>
              <div className="text-[9px] font-medium uppercase tracking-wider text-white/70 sm:text-[10px]">Orphans Sheltered</div>
            </div>
            <div className="h-6 w-px bg-white/20 sm:h-7" />
            <div>
              <div className="font-heading text-lg font-extrabold text-white sm:text-2xl">8,200+</div>
              <div className="text-[9px] font-medium uppercase tracking-wider text-white/70 sm:text-[10px]">Free Schooling</div>
            </div>
            <div className="h-6 w-px bg-white/20 sm:h-7" />
            <div>
              <div className="font-heading text-lg font-extrabold text-white sm:text-2xl">1,50,000+</div>
              <div className="text-[9px] font-medium uppercase tracking-wider text-white/70 sm:text-[10px]">Free Meals Served</div>
            </div>
          </div>
        </motion.div>

        {/* Visual Column (appears FIRST on mobile, second on desktop) */}
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
                alt="Hindu Suraksha Seva & Community"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                decoding="async"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2040]/80 via-transparent to-black/20" />
            </div>

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#0d2040]/85 px-3 py-1 text-[11px] font-bold text-white shadow-xl backdrop-blur-md sm:top-5 sm:left-5 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs">
              <Flame className="size-3 text-[#ff9800] sm:size-3.5" />
              <span>Sacred Mission on the Ground</span>
            </div>

            {/* Floating Bottom Card: Real-time Impact */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/95 p-3 text-[#0d2040] shadow-2xl backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="grid size-9 place-items-center rounded-xl bg-[#fff3e0] text-[#e65100] sm:size-10">
                    <ShieldCheck className="size-5 sm:size-6" />
                  </div>
                  <div>
                    <h2 className="text-[11px] font-extrabold sm:text-sm">100% Free Child Sponsorship</h2>
                    <p className="text-[9px] text-muted-foreground sm:text-xs">Education, meals &amp; shelter &bull; 80G tax benefit</p>
                  </div>
                </div>
                <NavLink
                  to="/about#certificates"
                  className="rounded-lg bg-[#0d2040] px-2.5 py-1 text-[9px] font-bold text-white transition hover:bg-[#e65100] sm:px-3 sm:py-1.5 sm:text-[10px]"
                >
                  Verify &rarr;
                </NavLink>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
