import { Link } from "react-router-dom"
import { ArrowLeft, Scale, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from "lucide-react"

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-[#faf8f5] pb-24">
      {/* Premium Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#e65100] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-[#ff9800]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 size-96 rounded-full bg-[#e65100]/25 blur-3xl" />
        
        <div className="page-shell relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-[#ffcc80] backdrop-blur-md transition hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="size-3.5" /> Return to Home
          </Link>

          <div className="mx-auto mb-5 grid size-16 place-items-center rounded-2xl border border-white/30 bg-gradient-to-br from-[#ff9800] to-[#e65100] text-white shadow-xl shadow-orange-950/40">
            <Scale className="size-8" />
          </div>

          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffcc80]">
            Statutory &amp; Operational Governance
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-xs text-white/80 sm:text-sm">
            Last updated: October 2026 &bull; Public Charitable Trust Governance Framework
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-shell relative -mt-8 z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#fed7aa]/60 bg-white p-6 shadow-xl shadow-orange-950/5 sm:p-10 lg:p-14">
          
          {/* Highlights */}
          <div className="mb-10 grid gap-4 rounded-2xl border border-[#fed7aa]/50 bg-[#fff8f0] p-5 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <ShieldCheck className="size-5 shrink-0 text-[#e65100]" />
              <div>
                <h2 className="text-xs font-bold text-[#0d2040]">Public Charitable Trust</h2>
                <p className="mt-1 text-[11px] text-[#475467]">Governed strictly by registered trust deed, 12A exemption, and annual independent statutory audits.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-[#e65100]" />
              <div>
                <h2 className="text-xs font-bold text-[#0d2040]">Voluntary Sevak Pledges</h2>
                <p className="mt-1 text-[11px] text-[#475467]">Seva contributions and volunteer participation are grounded in mutual respect, humility, and cultural preservation.</p>
              </div>
            </div>
          </div>

          {/* Terms Clauses */}
          <div className="space-y-8 text-sm leading-relaxed text-[#374151]">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                1. Acceptance of Terms
              </h2>
              <p className="mt-2.5">
                By browsing, registering, donating, or participating as a volunteer with <strong>Hindu Suraksha</strong>, you unconditionally accept and agree to comply with the terms, conditions, and operational policies detailed herein.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                2. Voluntary Donations &amp; Tax Deductions (Section 80G)
              </h2>
              <p className="mt-2.5">
                All donations made to Hindu Suraksha are voluntary contributions allocated directly toward Gaushalas, Annadanam, Vedic education, and temple renovation initiatives. Donors are entitled to tax deductions under Section 80G of the Income Tax Act upon providing valid PAN details. Digital 80G receipts are automatically generated and dispatched via email.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                3. Intellectual Property &amp; Media Rights
              </h2>
              <p className="mt-2.5">
                All cultural archives, emblems, photographic recordings, documentation, and digital assets published on this portal are the intellectual property of Hindu Suraksha. Content may not be duplicated or republished for commercial intent without express written authorization.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                4. Code of Conduct for Volunteers &amp; Sevaks
              </h2>
              <p className="mt-2.5">
                Every volunteer and coordinator associated with Hindu Suraksha agrees to conduct their duties with cultural reverence, transparency, and communal harmony. Misrepresentation, unauthorized solicitations, or breach of fiduciary trust will result in immediate termination of membership and revocation of credentials.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                5. Jurisdiction &amp; Dispute Resolution
              </h2>
              <p className="mt-2.5">
                These terms shall be interpreted in accordance with the laws of the Republic of India. In the event of any legal dispute, courts having competent jurisdiction in Telangana shall possess sole and exclusive authority.
              </p>
            </div>

            {/* Official Contact Card */}
            <div className="mt-10 rounded-2xl border border-[#fed7aa] bg-gradient-to-br from-[#fffaf4] to-[#fff3e0] p-6 text-[#0d2040]">
              <h2 className="font-heading text-base font-bold sm:text-lg">
                Statutory Inquiries
              </h2>
              <p className="mt-1 text-xs text-[#6b7280]">
                If you have questions regarding legal governance or institutional alliances:
              </p>
              <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-[#e65100]" />
                  <span><strong>Head Office:</strong> Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-[#e65100]" />
                  <span><strong>Email:</strong> contact@hindusuraksha.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-[#e65100]" />
                  <span><strong>Calling:</strong> +91 79899 38718</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-[#e65100]" />
                  <span><strong>WhatsApp:</strong> +91 79899 38718</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
