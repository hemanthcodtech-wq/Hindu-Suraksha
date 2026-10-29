import { useState } from "react"
import { Heart, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { donationTiers, membershipProgram } from "../data/content"
import Logo from "./Common/Logo"
import FadeIn from "./Common/FadeIn"

export default function SupportMission() {
  const [selected, setSelected] = useState(donationTiers[0].id)

  return (
    <section id="support" className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px] space-y-12">
        
        {/* Section 5: Membership Program — ₹50 Highlight */}
        <FadeIn className="relative overflow-hidden rounded-3xl border-2 border-[#ffb74d]/50 bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#9a3412] p-6 text-white shadow-2xl sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#f97316]/20 blur-3xl" />
          
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e65100] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-widest text-white shadow">
                <ShieldCheck className="size-3.5" />
                MEMBERSHIP PROGRAM — JUST ₹50
              </span>
              
              <h2 className="mt-4 font-heading text-2xl font-extrabold text-white sm:text-4xl lg:text-[40px]">
                {membershipProgram.title}
              </h2>
              
              <p className="mt-3 text-xs leading-relaxed text-white/90 sm:text-base sm:leading-7">
                {membershipProgram.description}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm">
                {membershipProgram.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/95">
                    <CheckCircle2 className="size-4 shrink-0 text-[#ffb74d]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <NavLink
                  to="/donate"
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff9800] via-[#f57c00] to-[#e65100] px-7 py-3 text-sm font-extrabold text-white shadow-xl shadow-orange-950/40 transition hover:brightness-110 active:scale-95"
                >
                  Register Now — ₹50
                  <ArrowRight className="size-4" />
                </NavLink>
                <span className="text-xs font-semibold text-[#ffcc80]">
                  {membershipProgram.tagline}
                </span>
              </div>
            </div>

            {/* Visual Card / ID Preview */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[360px] rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-2xl text-center">
                <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[#ff9800] to-[#e65100] text-white shadow-lg">
                  <span className="font-heading text-2xl font-black">₹50</span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">Digital Membership Card</h3>
                <p className="mt-1 text-xs text-white/80">Instant Unique Membership ID &bull; Digital Card Download &bull; Official Updates</p>
                <div className="mt-4 rounded-xl border border-white/15 bg-black/20 p-3 text-left text-[11px] text-white/90 space-y-1">
                  <div><strong className="text-[#ffcc80]">Validity:</strong> Active Community Member</div>
                  <div><strong className="text-[#ffcc80]">Programs:</strong> Welfare, Seva &amp; Community Drives</div>
                  <div><strong className="text-[#ffcc80]">Dignity:</strong> One Community. One Mission.</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Section 9: Donate — Your Contribution Can Change Lives */}
        <FadeIn className="relative overflow-hidden rounded-3xl bg-[#081e3d] p-6 text-white shadow-xl sm:p-10 lg:p-12">
          <Logo variant="light" className="pointer-events-none absolute right-4 top-4 w-20 opacity-10 sm:right-7 sm:top-7 sm:w-32" aria-hidden="true" />
          
          <div className="relative max-w-3xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ffcc80]">
              Together, We Can Support More Families
            </span>
            <h2 className="mt-2 font-heading text-2xl font-bold sm:text-4xl lg:text-[40px]">
              Donate — Your Contribution Can Change Lives
            </h2>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/85 sm:text-sm">
              Hindu Suraksha welcomes voluntary contributions from individuals, businesses, institutions, and philanthropic supporters to fund education, medical assistance, food distribution, and family emergency relief.
            </p>

            {/* Donation Options Strip */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
              {donationTiers.map((tier) => {
                const active = selected === tier.id
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelected(tier.id)}
                    aria-pressed={active}
                    className={`min-h-[88px] rounded-2xl border p-3.5 text-center transition active:scale-[.98] sm:min-h-24 ${active ? "border-[#ff9800] bg-[#ff9800]/25 shadow-lg shadow-orange-950/20" : "border-white/20 bg-white/5 hover:bg-white/10"}`}
                  >
                    <span className="block text-base font-extrabold text-white sm:text-lg">{tier.amount}</span>
                    <span className="mt-1 block text-[11px] font-semibold text-[#ffcc80] leading-snug">{tier.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <NavLink
                to="/donate"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e65100] to-[#ff9800] px-7 text-sm font-extrabold text-white shadow-lg transition hover:brightness-110 active:scale-95"
              >
                <Heart className="size-4 fill-current" /> Donate Now
              </NavLink>

              <NavLink
                to="/donate"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 text-xs font-bold text-white transition hover:bg-white hover:text-[#0d2040]"
              >
                Sponsor a Child
              </NavLink>

              <NavLink
                to="/donate"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 text-xs font-bold text-white transition hover:bg-white hover:text-[#0d2040]"
              >
                Support a Family
              </NavLink>
            </div>

            <p className="mt-4 text-[11px] text-white/60">
              Every contribution must be handled responsibly and used for its disclosed purpose. Donation receipts provided in accordance with organizational policies and applicable laws.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
