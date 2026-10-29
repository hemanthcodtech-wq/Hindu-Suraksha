import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Heart, Users, Award, Megaphone, ShieldCheck, HandHeart, Building2, Calendar, FileText } from "lucide-react"
import FadeIn from "../components/Common/FadeIn"
import SectionHeading from "../components/Common/SectionHeading"
import { partnerships } from "../data/content"

const SUPPORT_OPTIONS = [
  { title: "Membership Program — ₹50", description: "Join our common community platform with an affordable ₹50 membership fee and receive a digital membership ID card.", to: "/donate", icon: ShieldCheck, action: "Join for ₹50" },
  { title: "Donate to Our Mission", description: "Support education for orphans, emergency healthcare, nutrition, and financial assistance for Hindu families.", to: "/donate", icon: Heart, action: "Donate Now" },
  { title: "Register as a Volunteer", description: "Contribute your time, skills, and professional expertise to on-ground welfare programs and awareness drives.", to: "/volunteer", icon: Users, action: "Become a Volunteer" },
  { title: "Apply for Assistance", description: "Deserving Hindu families facing medical emergencies, child education costs, or food hardship can apply for verified aid.", to: "/contact", icon: HandHeart, action: "Request Support" },
  { title: "Events & Campaigns", description: "Participate in upcoming Hindu unity programs, education sponsorship drives, medical camps, and annual conventions.", to: "/events", icon: Calendar, action: "View Events" },
  { title: "Partner With Us", description: "Businesses, CSR entities, and community organizations are invited to collaborate on transparent welfare initiatives.", to: "/contact", icon: Building2, action: "Partner With Us" },
]

export default function SupportUs() {
  return (
    <main className="bg-background pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#e65100] py-14 text-white sm:py-20">
        <div className="page-shell px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#ffcc80] backdrop-blur-sm">
              Collective Responsibility
            </span>
            <h1 className="mt-3 font-heading text-3xl font-extrabold sm:text-5xl lg:text-[54px]">
              Support Hindu Suraksha
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-white/90 sm:text-base sm:leading-7">
              One Community. One Mission. A Stronger Future. Choose how you would like to participate — whether through an affordable ₹50 membership, voluntary donations, volunteering, or organizational partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="page-shell px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <FadeIn><SectionHeading>Ways You Can Stand With Us</SectionHeading></FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_OPTIONS.map((item, i) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <Link
                  to={item.to}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-[#fed7aa]/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:border-[#f97316]"
                >
                  <div>
                    <span className="grid size-12 place-items-center rounded-2xl bg-[#fff3e0] text-[#e65100] border border-[#fed7aa]/50">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="mt-4 font-heading text-lg font-extrabold text-[#0d2040]">{item.title}</h2>
                    <p className="mt-2 text-xs leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="mt-6 inline-flex self-start rounded-xl bg-gradient-to-r from-[#e65100] to-[#ff9800] px-4 py-2 text-xs font-bold text-white transition group-hover:brightness-105">
                    {item.action} &rarr;
                  </span>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </section>

      {/* 13. Partner With Hindu Suraksha */}
      <section className="page-shell px-4 pb-12 sm:px-6 lg:px-8">
        <FadeIn className="rounded-3xl border border-[#fed7aa]/50 bg-[#fffdfa] p-6 sm:p-10 lg:p-12">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e65100]">
            INSTITUTIONAL &amp; CSR ENGAGEMENT
          </span>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-[#0d2040] sm:text-3xl">
            Partner With Hindu Suraksha
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-[#475467] sm:text-sm">
            We invite businesses, philanthropists, professionals, institutions, and community organizations to explore partnerships that support our mission. Together, we can reach more deserving families.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm">
            {partnerships.map((p) => (
              <div key={p} className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white p-3 shadow-xs">
                <span className="size-2 rounded-full bg-[#e65100]" />
                <span className="text-[#374151] font-medium">{p}</span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[11px] text-[#6b7280]">
            All partnerships will be subject to applicable legal requirements, eligibility, and agreed terms.
          </p>

          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0d2040] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#e65100]"
            >
              Contact Our Partnerships Desk &rarr;
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  )
}
