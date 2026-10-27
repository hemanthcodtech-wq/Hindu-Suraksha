import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Target, Users, Zap, ShieldCheck, FileText, Award, Scale, QrCode, ArrowLeft, RotateCw } from "lucide-react"
import { team, impact } from "../data/content"
import FadeIn from "../components/Common/FadeIn"
import SectionHeading from "../components/Common/SectionHeading"
import Partners from "../components/Partners"
import Testimonials from "../components/Testimonials"
import { useApp } from "../context/AppContext"

const VALUES = [
  { icon: Heart, title: "Orphan Care & Shelter", desc: "Providing loving homes, safe ashrams, and emotional guidance to parentless children.", color: "accent" },
  { icon: Target, title: "100% Free Education", desc: "Full schooling, textbooks, uniforms, and mentorship from primary to college level.", color: "primary" },
  { icon: Users, title: "Adoption & Foster Care", desc: "Facilitating legal, ethical, and loving foster and adoption homes for Hindu orphans.", color: "accent" },
  { icon: Zap, title: "Nitya Annadanam", desc: "Serving wholesome, nutritious, and satvik daily meals so no child goes hungry.", color: "primary" },
]

const LEADERSHIP = [
  { name: "Shri Rajeshwar Sharma", role: "National President & Trustee", bio: "Guiding the national vision, temple preservation projects, and grassroots seva chapters.", exp: "20+ years of dedicated community service" },
  { name: "Acharya Devratan", role: "Director of Cultural Affairs", bio: "Leading Vedic educational drives, cultural workshops, and ancient scripture preservation.", exp: "15+ years in heritage scholarship" },
  { name: "Smt. Gayatri Devi", role: "Chief Seva & Volunteer Lead", bio: "Coordinating Annadanam drives, youth volunteer groups, and Gaushala support initiatives.", exp: "12+ years in social welfare" }
]

const CERTIFICATES = [
  { title: "Trust Registration Certificate", regNo: "Reg: HS/TRUST/2026/089", desc: "Formally registered public charitable trust under the Indian Trusts Act." },
  { title: "Section 12A Recognition", regNo: "Order: 12A/HS/2026-27", desc: "Official income tax exemption registration for non-profit charitable activities." },
  { title: "Section 80G Certification", regNo: "PAN: AAATH9821K", desc: "Eligible donors can avail tax benefits on voluntary seva contributions under Section 80G." },
  { title: "NGO Darpan NITI Aayog", regNo: "DARPAN ID: DL/2026/039482", desc: "Accredited voluntary social organization registered on NITI Aayog NGO Darpan portal." }
]

const GOVERNANCE = [
  { title: "Ethical Standards", desc: "Hindu Suraksha functions with complete adherence to democratic governance, statutory compliance, and transparent annual audits." },
  { title: "Zero Administrative Overhead from Seva", desc: "Individual seva donations go entirely toward programs, Annadanam, and temple restoration." },
  { title: "Voluntary Sevak Ethics", desc: "Every Sevak pledges to maintain cultural reverence, mutual respect, humility, and dedication to the society." }
]

export default function About() {
  const [flipped, setFlipped] = useState(null)
  const { bankAccounts, globalSettings } = useApp()
  const s = globalSettings || {}
  const primaryBank = (bankAccounts || []).find(b => b.is_active) || null

  return (
    <main className="bg-background">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#e65100] py-16 text-white sm:py-24">
        <div className="page-shell px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffcc80] backdrop-blur-sm">
              <span className="size-2 rounded-full bg-[#ff9800]" />
              About Hindu Suraksha
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[56px]">
              Orphan Care, Education &amp; Free Meals
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base sm:leading-8">
              Hindu Suraksha is dedicated to providing loving shelter, full-term free education, and nutritional food support to orphaned Hindu children, while guiding prospective parents through legal, ethical adoptions and preserving our timeless cultural values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="page-shell px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <FadeIn className="rounded-3xl border border-[#fed7aa]/60 bg-gradient-to-br from-white to-[#fff8f0] p-6 shadow-sm sm:p-8">
            <span className="inline-block rounded-full bg-[#fff3e0] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#e65100]">
              Our Mission
            </span>
            <h2 className="mt-4 font-heading text-xl font-extrabold text-[#0d2040] sm:text-2xl">
              Nurture, Educate &amp; Find Loving Homes
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-[#475467] sm:text-sm sm:leading-7">
              To rescue and nurture every parentless child, provide 100% free quality education with Samskaras, ensure three nutritious meals daily, and facilitate smooth, transparent adoptions into supportive Hindu families.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-3xl border border-[#fed7aa]/60 bg-gradient-to-br from-white to-[#fff8f0] p-6 shadow-sm sm:p-8">
            <span className="inline-block rounded-full bg-[#fff3e0] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#e65100]">
              Our Vision
            </span>
            <h2 className="mt-4 font-heading text-xl font-extrabold text-[#0d2040] sm:text-2xl">
              No Orphan Left Uncared or Uneducated
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-[#475467] sm:text-sm sm:leading-7">
              A compassionate society where every child enjoys a family's warmth, receives higher education and career opportunities, and grows up rooted in cultural dignity and moral values.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="page-shell px-4 pb-12 sm:px-6 lg:px-8">
        <FadeIn><SectionHeading>Our Core Pillars &amp; Values</SectionHeading></FadeIn>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className={`grid size-11 place-items-center rounded-2xl ${v.color === "accent" ? "bg-[#fff3e0] text-[#e65100]" : "bg-[#0d2040] text-white"}`}>
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#0d2040] sm:text-base">{v.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[#475467]">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="page-shell px-4 pb-12 sm:px-6 lg:px-8">
        <FadeIn className="rounded-3xl bg-[#0d2040] px-6 py-8 text-white shadow-xl sm:px-10 sm:py-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {impact.stats.map((stat, i) => (
              <FadeIn key={stat.id} delay={i * 0.08} className="text-center">
                <span className="font-heading text-2xl font-extrabold text-[#ffb74d] sm:text-3xl lg:text-4xl">{stat.value}</span>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Leadership Desk */}
      <section id="leadership" className="page-shell px-4 pb-12 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3">
            <Users className="size-6 text-[#e65100]" />
            <SectionHeading>Leadership Desk</SectionHeading>
          </div>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">The trustees and senior directors guiding Hindu Suraksha across national and regional seva initiatives.</p>
        </FadeIn>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {LEADERSHIP.map((leader, i) => (
            <FadeIn key={leader.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="grid size-14 place-items-center rounded-2xl bg-[#fff3e0] font-heading text-xl font-bold text-[#e65100]">
                  {leader.name.split(" ")[1]?.charAt(0) || "H"}
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0d2040] sm:text-lg">{leader.name}</h3>
                <p className="text-xs font-semibold text-[#e65100]">{leader.role}</p>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-[#475467]">{leader.bio}</p>
                <div className="mt-4 border-t border-border pt-3 text-[11px] font-medium text-muted-foreground">
                  {leader.exp}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Certifications & Registrations */}
      <section id="certificates" className="page-shell px-4 pb-12 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3">
            <Award className="size-6 text-[#e65100]" />
            <SectionHeading>Accreditations &amp; Registrations</SectionHeading>
          </div>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">Official government certifications, compliance recognitions, and registered public charitable trust filings.</p>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATES.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-[#fed7aa]/70 bg-gradient-to-br from-[#fffdfa] to-white p-5 shadow-sm">
                <span className="grid size-10 place-items-center rounded-xl bg-[#e65100] text-white">
                  <ShieldCheck className="size-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#0d2040] sm:text-base">{cert.title}</h3>
                <span className="mt-1 inline-block rounded-md bg-[#fff3e0] px-2 py-0.5 text-[10px] font-extrabold text-[#e65100]">
                  {cert.regNo}
                </span>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[#475467]">{cert.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Governance & Transparency */}
      <section id="governance" className="page-shell px-4 pb-12 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-3">
            <Scale className="size-6 text-[#e65100]" />
            <SectionHeading>Governance &amp; Accountability</SectionHeading>
          </div>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {GOVERNANCE.map((gov, i) => (
            <FadeIn key={gov.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
                <FileText className="size-5 text-[#e65100]" />
                <h3 className="mt-3 text-sm font-bold text-[#0d2040]">{gov.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#475467]">{gov.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Team Flipping Cards */}
      <section className="page-shell px-4 pb-12 sm:px-6 lg:px-8">
        <FadeIn><SectionHeading>Our Seva Representatives</SectionHeading></FadeIn>
        <p className="mt-2 text-xs text-muted-foreground sm:text-sm">Click any profile card to flip for details.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {team.map((member, i) => {
            const isFlipped = flipped === member.id
            return (
              <FadeIn key={member.id} delay={i * 0.1}>
                <button
                  type="button"
                  onClick={() => setFlipped(isFlipped ? null : member.id)}
                  className="group h-[260px] w-full [perspective:1100px] text-left"
                >
                  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]" style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-5 text-center shadow-sm [backface-visibility:hidden]">
                      <img src={member.avatar || "/images/ramesh.png"} alt={member.name} className="size-20 rounded-full border-2 border-[#fff3e0] object-cover" />
                      <h3 className="mt-4 text-sm font-bold text-[#0d2040]">{member.name}</h3>
                      <p className="mt-1 text-xs text-[#e65100]">{member.role}</p>
                      <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#fff3e0] px-3 py-1 text-[10px] font-bold text-[#e65100]">
                        <RotateCw className="size-3" /> Flip for details
                      </span>
                    </div>
                    <div className="absolute inset-0 flex flex-col rounded-3xl border border-[#fed7aa] bg-[#0d2040] p-5 text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#ffcc80]">Profile Info</span>
                      <h3 className="mt-2 text-base font-extrabold">{member.name}</h3>
                      <p className="mt-3 flex-1 text-xs leading-relaxed text-white/85">Dedicated trustee ensuring all seva initiatives uphold the sanctity and mission of Hindu Suraksha.</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-[#ffcc80]">
                        <ArrowLeft className="size-3" /> Flip back
                      </span>
                    </div>
                  </div>
                </button>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <Partners />
      <Testimonials />

      {/* Support / Quick QR Seva Section */}
      <section id="seva-qr" className="page-shell px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md rounded-3xl border border-[#fed7aa]/70 bg-gradient-to-br from-white to-[#fff8f0] p-6 text-center shadow-lg sm:p-8">
          <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#fff3e0] text-[#e65100]">
            <QrCode className="size-6" />
          </div>
          <h2 className="mt-4 font-heading text-xl font-extrabold text-[#0d2040]">Contribute to Hindu Suraksha Seva</h2>
          <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
            Scan below to contribute directly toward temple renovation, Gau Seva, and Annadanam.
          </p>
          <div className="mx-auto mt-5 grid size-48 place-items-center rounded-2xl border-4 border-[#e65100] bg-white p-2">
            {primaryBank && primaryBank.qr_code_url ? (
              <img src={primaryBank.qr_code_url} alt="QR Code" className="size-full object-contain" />
            ) : (
              <div className="grid size-full place-items-center border-2 border-dashed border-[#e65100] text-center text-xs font-extrabold text-[#0d2040]">
                HINDU SURAKSHA<br />SEVA QR
              </div>
            )}
          </div>
          <p className="mt-4 text-xs font-medium text-muted-foreground">All contributions are acknowledged with digital receipt.</p>
        </div>
      </section>
    </main>
  )
}
