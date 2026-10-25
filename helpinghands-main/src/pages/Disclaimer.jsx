import { Link } from "react-router-dom"
import { ArrowLeft, AlertTriangle, ShieldCheck, Mail, Phone, MapPin } from "lucide-react"

export default function Disclaimer() {
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
            <AlertTriangle className="size-8" />
          </div>

          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffcc80]">
            Legal Transparency &amp; Non-Profit Notice
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl">
            Legal Disclaimer
          </h1>
          <p className="mt-3 text-xs text-white/80 sm:text-sm">
            Last updated: October 2026 &bull; Scope of representations and public communications
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-shell relative -mt-8 z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#fed7aa]/60 bg-white p-6 shadow-xl shadow-orange-950/5 sm:p-10 lg:p-14">
          
          <div className="space-y-8 text-sm leading-relaxed text-[#374151]">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                1. General Information &amp; Public Good
              </h2>
              <p className="mt-2.5">
                The information provided by <strong>Hindu Suraksha</strong> across this portal is published solely for charitable, informational, and community empowerment purposes. While every effort is made to maintain accuracy, completeness, and timeliness, the organization makes no warranties concerning third-party linkages or external representations.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                2. Charitable Deductions (Section 80G) &amp; Financial Advice
              </h2>
              <p className="mt-2.5">
                Donations made to Hindu Suraksha qualify for income tax relief under Section 80G in India. However, materials published on this website do not constitute individual legal, financial, or tax advisory services. Donors are encouraged to consult their certified chartered accountant regarding personal tax consequences.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                3. Deployment of Voluntary Seva Contributions
              </h2>
              <p className="mt-2.5">
                Hindu Suraksha channels donations to specific campaigns (Gaushalas, Annadanam, Mandir Renovation, or Vedic Literacy) in accordance with donor preferences. If a specific relief program reaches full funding or immediate logistical needs demand urgent intervention, the trustees reserve the right to deploy surplus contributions to adjoining high-priority seva activities.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                4. Third-Party Web Links &amp; Payment Gateways
              </h2>
              <p className="mt-2.5">
                Our site incorporates verified external linkages to official statutory portals, banking interfaces, and payment gateways. Hindu Suraksha exerts no ownership or operational liability over external content, service interruptions, or independent privacy standards maintained by third-party processors.
              </p>
            </div>

            {/* Official Contact Card */}
            <div className="mt-10 rounded-2xl border border-[#fed7aa] bg-gradient-to-br from-[#fffaf4] to-[#fff3e0] p-6 text-[#0d2040]">
              <h2 className="font-heading text-base font-bold sm:text-lg">
                Official Inquiries &amp; Secretariat
              </h2>
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
