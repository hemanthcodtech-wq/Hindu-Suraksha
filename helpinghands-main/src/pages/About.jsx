import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Target, Users, Zap, ShieldCheck, FileText, Award, Scale, CheckCircle2, ArrowRight, BookOpen, Stethoscope, Utensils, Sparkles, Building2 } from "lucide-react"
import { team, impact, vision, missionPoints, dharmaProtection, transparencyPoints, ourPromise, welfareInitiatives } from "../data/content"
import FadeIn from "../components/Common/FadeIn"
import SectionHeading from "../components/Common/SectionHeading"
import Partners from "../components/Partners"
import Testimonials from "../components/Testimonials"
import { useApp } from "../context/AppContext"
import { NavLink } from "react-router-dom"

const CORE_PILLARS = [
  { icon: BookOpen, title: "Education for Children", desc: "School and college fee assistance, uniforms, books, and scholarships for orphaned & needy children.", color: "primary" },
  { icon: Stethoscope, title: "Healthcare & Medical Aid", desc: "Emergency medical assistance, diagnostic tests, consultations, and medicine support.", color: "accent" },
  { icon: Utensils, title: "Food & Nutrition Support", desc: "Food distribution drives, grocery kits, and nutritious meals for eligible children and poor families.", color: "primary" },
  { icon: ShieldCheck, title: "Family Financial Assistance", desc: "Community assistance fund providing emergency aid and essential household support during hardships.", color: "accent" },
]

export default function About() {
  const { bankAccounts, globalSettings } = useApp()
  const s = globalSettings || {}

  return (
    <main className="bg-background pb-16">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#e65100] py-16 text-white sm:py-24">
        <div className="page-shell px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffcc80] backdrop-blur-sm">
              <span className="size-2 rounded-full bg-[#ff9800]" />
              About Hindu Suraksha
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[54px]">
              United for Hindu Protection. <br />
              <span className="bg-gradient-to-r from-[#ffcc80] via-[#ffa726] to-[#ff7043] bg-clip-text text-transparent">
                Committed to Hindu Welfare.
              </span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base sm:leading-8">
              Hindu Suraksha is founded on the principles of unity, service, Dharma, compassion, and social responsibility. We believe that a united community can make a meaningful difference in the lives of children, families, and individuals facing economic hardship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. About Organization & Practical Action */}
      <section className="page-shell px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FadeIn className="rounded-3xl border border-[#fed7aa]/60 bg-gradient-to-br from-[#fffdfa] via-white to-[#fff8f0] p-6 shadow-sm sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e65100]">
              Our Foundation &amp; Ethos
            </span>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-[#0d2040] sm:text-3xl">
              A Trusted Support System for Hindu Families
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475467] sm:text-base sm:leading-8">
              Our organization aims to bring people together, mobilize resources through lawful fundraising, organize impactful community events, and deliver assistance to eligible beneficiaries through transparent and accountable programs. We aspire to become a trusted support system for Hindu families by connecting donors, volunteers, members, and people in need.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#475467] sm:text-base sm:leading-8">
              Our work focuses on practical action, responsible financial management, and measurable social impact.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 3. Vision & 4. Mission */}
      <section className="page-shell px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <FadeIn className="rounded-3xl border border-[#fed7aa]/60 bg-gradient-to-br from-white to-[#fff8f0] p-6 shadow-sm sm:p-8 flex flex-col">
            <span className="inline-block self-start rounded-full bg-[#fff3e0] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#e65100]">
              {vision.title}
            </span>
            <h3 className="mt-4 font-heading text-xl font-extrabold text-[#0d2040] sm:text-2xl">
              An Empowered &amp; Secure Hindu Community
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#475467] sm:text-sm sm:leading-7">
              {vision.statement}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl border border-[#fed7aa]/60 bg-gradient-to-br from-white to-[#fff8f0] p-6 shadow-sm sm:p-8 flex flex-col">
            <span className="inline-block self-start rounded-full bg-[#fff3e0] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#e65100]">
              OUR MISSION
            </span>
            <h3 className="mt-4 font-heading text-xl font-extrabold text-[#0d2040] sm:text-2xl">
              Committed to Practical Seva &amp; Dharma
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#475467] sm:text-sm sm:leading-7">
              To protect Hindu Dharma, provide educational and healthcare assistance to eligible children, extend financial relief to struggling families, conduct community events, and promote unity, social welfare, dignity, and collective responsibility.
            </p>
          </FadeIn>
        </div>

        {/* Full Mission Points Checklist */}
        <div className="mt-8 rounded-3xl border border-[#fed7aa]/50 bg-white p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold text-[#0d2040] sm:text-xl">
            Our Mission Pillars &amp; Commitments
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-[#374151]">
            {missionPoints.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 shrink-0 text-[#e65100] mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Hindu Dharma & Cultural Protection */}
      <section className="page-shell px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <FadeIn className="rounded-3xl border-2 border-[#ffb74d]/50 bg-gradient-to-br from-[#0d2040] to-[#163668] p-6 sm:p-10 lg:p-12 text-white shadow-xl">
          <span className="inline-block rounded-full bg-[#e65100] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white">
            HERITAGE &amp; VALUES
          </span>
          <h2 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            {dharmaProtection.title}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#ffcc80] sm:text-base">
            {dharmaProtection.tagline}
          </p>
          <p className="mt-3 max-w-3xl text-xs leading-relaxed text-white/85 sm:text-sm sm:leading-7">
            {dharmaProtection.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 text-xs sm:text-sm">
            {dharmaProtection.points.map((pt) => (
              <div key={pt} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                <ShieldCheck className="size-4 shrink-0 text-[#ffb74d] mt-0.5" />
                <span className="text-white/95">{pt}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs sm:text-sm font-bold text-[#ffcc80] italic">
            {dharmaProtection.commitment}
          </p>
        </FadeIn>
      </section>

      {/* 11. Transparency & Accountability */}
      <section className="page-shell px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <FadeIn className="rounded-3xl border border-[#fed7aa]/70 bg-[#fffdfa] p-6 sm:p-10 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e65100]">
            TRANSPARENCY &amp; ACCOUNTABILITY
          </span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-[#0d2040] sm:text-3xl">
            Trust Is the Foundation of Our Mission
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#475467] sm:text-base">
            We understand that public trust is essential when collecting membership fees and donations. Hindu Suraksha aims to maintain transparent and accountable practices through:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm text-[#374151]">
            {transparencyPoints.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 shrink-0 text-[#e65100] mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 16. Legal & Organizational Setup Placeholders */}
      <section className="page-shell px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <FadeIn className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0d2040]">
            LEGAL &amp; STATUTORY COMPLIANCE
          </span>
          <h2 className="mt-2 font-heading text-xl font-bold text-[#0d2040]">
            Organizational &amp; Statutory Disclosures
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Hindu Suraksha operates in strict compliance with applicable charitable and voluntary laws. All official records, registrations, and authorized details are maintained transparently.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3 text-xs">
            <div className="rounded-xl border border-border p-3.5 bg-muted/20">
              <strong className="block text-[#0d2040]">Official Legal Name:</strong>
              <span className="text-muted-foreground">Hindu Suraksha Initiative / Trust (Registration in process/active)</span>
            </div>
            <div className="rounded-xl border border-border p-3.5 bg-muted/20">
              <strong className="block text-[#0d2040]">Registered Office:</strong>
              <span className="text-muted-foreground">{s.contactHeadOffice || "Hyderabad, Telangana, India"}</span>
            </div>
            <div className="rounded-xl border border-border p-3.5 bg-muted/20">
              <strong className="block text-[#0d2040]">Grievance Redressal:</strong>
              <span className="text-muted-foreground">{s.contactEmail || "contact@hindusuraksha.org"} &bull; {s.contactPhonePrimary || "+91 79899 38718"}</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 17. Our Promise */}
      <section className="page-shell px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
        <FadeIn className="rounded-3xl border-2 border-[#e65100] bg-gradient-to-r from-[#fff3e0] via-white to-[#fff3e0] p-6 text-center sm:p-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#e65100]">
            {ourPromise.title}
          </span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-[#0d2040] sm:text-3xl">
            {ourPromise.headline}
          </h2>
          <p className="mt-1 text-sm font-bold text-[#e65100] sm:text-base">
            {ourPromise.subheadline}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-[#475467] sm:text-sm">
            {ourPromise.body}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <NavLink
              to="/donate"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e65100] to-[#ff9800] px-6 py-2.5 text-xs font-bold text-white shadow transition hover:brightness-105"
            >
              Join for ₹50
            </NavLink>
            <NavLink
              to="/donate"
              className="inline-flex items-center gap-2 rounded-xl border border-[#e65100] bg-white px-6 py-2.5 text-xs font-bold text-[#e65100] transition hover:bg-[#fff3e0]"
            >
              Donate Now
            </NavLink>
            <NavLink
              to="/volunteer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-2.5 text-xs font-semibold text-[#0d2040] transition hover:bg-gray-50"
            >
              Become a Volunteer
            </NavLink>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
