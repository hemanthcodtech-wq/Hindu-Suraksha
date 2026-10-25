import { Link } from "react-router-dom"
import { ArrowLeft, Shield, CheckCircle2, Lock, Mail, Phone, MapPin, Sparkles } from "lucide-react"

export default function PrivacyPolicy() {
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
            <Shield className="size-8" />
          </div>

          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffcc80]">
            Legal &amp; Data Security
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs text-white/80 sm:text-sm">
            Last updated: October 2026 &bull; Compliant with Information Technology Act &amp; 80G Statutory Standards
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-shell relative -mt-8 z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#fed7aa]/60 bg-white p-6 shadow-xl shadow-orange-950/5 sm:p-10 lg:p-14">
          
          {/* Key Security Highlights */}
          <div className="mb-10 grid gap-4 rounded-2xl border border-[#fed7aa]/50 bg-[#fff8f0] p-5 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-[#e65100]" />
              <div>
                <h2 className="text-xs font-bold text-[#0d2040]">Zero Data Commercialization</h2>
                <p className="mt-1 text-[11px] text-[#475467]">We never sell, rent, or lease donor records to third-party telemarketers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="size-5 shrink-0 text-[#e65100]" />
              <div>
                <h2 className="text-xs font-bold text-[#0d2040]">Encrypted Seva Transactions</h2>
                <p className="mt-1 text-[11px] text-[#475467]">Payments processed via RBI-authorized 256-bit encrypted banking rails.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="size-5 shrink-0 text-[#e65100]" />
              <div>
                <h2 className="text-xs font-bold text-[#0d2040]">Audited 80G Receipts</h2>
                <p className="mt-1 text-[11px] text-[#475467]">PAN and donor identity stored solely for tax exemption and annual audits.</p>
              </div>
            </div>
          </div>

          {/* Policy Text Clauses */}
          <div className="space-y-8 text-sm leading-relaxed text-[#374151]">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                1. Introduction
              </h2>
              <p className="mt-2.5">
                <strong>Hindu Suraksha</strong> is committed to upholding the highest standards of data security, privacy, and integrity. This Privacy Policy sets forth our practices regarding the collection, handling, and protection of information submitted across our digital platforms, seva drives, and volunteer programs.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                2. Information We Collect
              </h2>
              <p className="mt-2.5">
                Depending on your interaction with Hindu Suraksha, we may collect the following categories of information:
              </p>
              <ul className="mt-3 space-y-2 pl-4 list-disc marker:text-[#e65100]">
                <li><strong>Personal Identity:</strong> Full name, telephone number, email address, residential city, and preferred language.</li>
                <li><strong>Statutory &amp; Donation Data:</strong> Permanent Account Number (PAN) required under Indian Tax Law to issue valid Section 80G deduction certificates and formal transaction references.</li>
                <li><strong>Volunteer &amp; Sevak Onboarding:</strong> Identity documentation, skills, and emergency contact details submitted during voluntary enrollment.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                3. Purpose of Utilization
              </h2>
              <p className="mt-2.5">
                All collected information is utilized strictly to further the non-profit objectives of Hindu Suraksha:
              </p>
              <ul className="mt-3 space-y-2 pl-4 list-disc marker:text-[#e65100]">
                <li>Issuing verifiable digital receipts and 80G tax exemption certificates.</li>
                <li>Mobilizing volunteer coordination for Gaushalas, temple restoration, and Annadanam drives.</li>
                <li>Sharing periodic transparent impact updates, annual balance sheet summaries, and newsletter dispatches.</li>
                <li>Fulfilling legal and audit filings with the Income Tax Department and NITI Aayog NGO Darpan.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                4. Data Security &amp; Retention
              </h2>
              <p className="mt-2.5">
                We implement industry-standard technical safeguards, access control permissions, and encrypted backups to protect your records from unauthorized disclosure, loss, or alteration. Financial credentials such as UPI PINs, CVVs, and net-banking passwords are never captured or saved on our servers.
              </p>
            </div>

            {/* Official Contact Card */}
            <div className="mt-10 rounded-2xl border border-[#fed7aa] bg-gradient-to-br from-[#fffaf4] to-[#fff3e0] p-6 text-[#0d2040]">
              <h2 className="font-heading text-base font-bold sm:text-lg">
                Official Grievance &amp; Privacy Desk
              </h2>
              <p className="mt-1 text-xs text-[#6b7280]">
                For any data correction requests, deletion queries, or regulatory concerns, please contact our trust secretariat:
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
