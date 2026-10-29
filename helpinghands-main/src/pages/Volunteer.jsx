import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { LogIn, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react"
import { volunteerRoles, volunteer } from "../data/content"
import Icon from "../components/Common/Icon"
import FadeIn from "../components/Common/FadeIn"
import SectionHeading from "../components/Common/SectionHeading"

const STEPS = [
  { step: "01", title: "Register Online", desc: "Submit the volunteer application form with your skills and preferred areas." },
  { step: "02", title: "Verification", desc: "Our coordination team verifies details and contacts you within 48 hours." },
  { step: "03", title: "Orientation & Briefing", desc: "Understand guidelines, code of conduct, and local community needs." },
  { step: "04", title: "Start Seva Service", desc: "Participate in education, food, medical, and community awareness drives." },
]

export default function Volunteer() {
  const navigate = useNavigate()

  return (
    <main className="bg-background pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#e65100] py-14 text-white sm:py-20">
        <div className="page-shell px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#ffcc80] backdrop-blur-sm">
              <HeartHandshake className="size-3.5" />
              Volunteer With Us
            </span>
            <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight sm:text-5xl lg:text-[54px]">
              Be the Reason Someone Finds Hope
            </h1>
            <p className="mt-3 text-xs leading-relaxed text-white/90 sm:text-base sm:leading-7">
              Join Hindu Suraksha as a volunteer and contribute your time, knowledge, skills, or professional expertise. Your Time Can Help. Your Skills Can Serve. Your Participation Can Make a Difference.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("/volunteer/register")}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff9800] to-[#e65100] px-6 py-3 text-xs font-bold text-white shadow-lg transition hover:brightness-110 active:scale-95 sm:text-sm"
              >
                Register as a Volunteer <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => navigate("/volunteer/login")}
                className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20 sm:text-sm"
              >
                <LogIn className="size-4" /> Volunteer Sign In
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Opportunities List */}
      <section className="page-shell px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e65100]">
            Seva Opportunities
          </span>
          <h2 className="mt-1 font-heading text-2xl font-extrabold text-[#0d2040] sm:text-3xl">
            Where You Can Contribute
          </h2>
          <p className="mt-2 text-xs text-[#475467] sm:text-sm">
            Whether you can spare a few hours over weekends or lead local initiatives, every contribution matters.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {volunteer.items.map((item) => (
            <FadeIn key={item} className="flex items-center gap-3 rounded-2xl border border-[#fed7aa]/50 bg-white p-4 shadow-sm">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#fff3e0] text-[#e65100]">
                <CheckCircle2 className="size-5" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#0d2040]">{item}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="page-shell px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <FadeIn><SectionHeading>How Volunteer Enrollment Works</SectionHeading></FadeIn>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-5 h-full flex flex-col">
                <span className="font-heading text-2xl font-extrabold text-[#e65100] sm:text-3xl">{s.step}</span>
                <h3 className="mt-2 text-sm font-bold text-primary">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="page-shell px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <FadeIn><SectionHeading>Open Volunteer Roles</SectionHeading></FadeIn>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {volunteerRoles.map((role, i) => (
            <FadeIn key={role.id} delay={i * 0.08}>
              <div className="rounded-2xl border border-[#fed7aa]/60 bg-white p-5 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <span className="grid size-11 place-items-center rounded-xl bg-[#fff3e0] text-[#e65100]">
                    <Icon name={role.icon} className="size-5" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-primary">{role.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{role.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#e65100]" />
                  <span className="text-[11px] font-semibold text-[#e65100]">{role.slots} positions active</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  )
}
