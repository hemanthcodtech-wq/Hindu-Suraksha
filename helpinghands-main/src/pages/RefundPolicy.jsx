import { Link } from "react-router-dom"
import { ArrowLeft, RefreshCcw, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from "lucide-react"

export default function RefundPolicy() {
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
            <RefreshCcw className="size-8" />
          </div>

          <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ffcc80]">
            Financial Transparency &amp; Seva Contributions
          </span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl">
            Donation &amp; Refund Policy
          </h1>
          <p className="mt-3 text-xs text-white/80 sm:text-sm">
            Last updated: October 2026 &bull; Clear guidelines on voluntary contributions &amp; corrections
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="page-shell relative -mt-8 z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#fed7aa]/60 bg-white p-6 shadow-xl shadow-orange-950/5 sm:p-10 lg:p-14">
          
          {/* Quick Notice Card */}
          <div className="mb-10 rounded-2xl border border-[#fed7aa]/70 bg-[#fff8f0] p-5 sm:p-6">
            <div className="flex items-start gap-3.5">
              <AlertCircle className="size-5 shrink-0 text-[#e65100] mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-[#0d2040]">Charitable Contribution Notice</h2>
                <p className="mt-1 text-xs leading-relaxed text-[#475467]">
                  As a registered non-profit trust, all contributions to Hindu Suraksha are voluntary seva donations. In cases of accidental double-debits, incorrect amounts, or unauthorized technical payment glitches, we provide a prompt resolution process within 15 days.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Steps & Details */}
          <div className="space-y-8 text-sm leading-relaxed text-[#374151]">
            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                1. Eligibility for Refund Review
              </h2>
              <p className="mt-2.5">
                Refunds are considered under the following legitimate circumstances:
              </p>
              <ul className="mt-3 space-y-2 pl-4 list-disc marker:text-[#e65100]">
                <li><strong>Duplicate Transactions:</strong> Due to internet latency or banking glitches, your bank account was debited more than once for the same transaction.</li>
                <li><strong>Erroneous Amount:</strong> An unintended numeric value was entered during donation payment processing.</li>
                <li><strong>Unauthorized Fraudulent Payment:</strong> Proof of compromised credentials provided prior to fund allocation.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                2. How to Submit a Refund Request
              </h2>
              <p className="mt-2.5">
                Kindly submit your written request to our finance team within <strong>15 calendar days</strong> from the date of contribution. Please email <strong>contact@hindusuraksha.org</strong> with:
              </p>
              <div className="mt-3 grid gap-2 rounded-xl bg-gray-50 p-4 font-mono text-xs text-[#1f2937] border border-border">
                <div>&bull; Donor Full Name (as per Bank Account)</div>
                <div>&bull; Transaction ID / Gateway Payment Reference Number</div>
                <div>&bull; Exact Date and Time of Donation</div>
                <div>&bull; Contribution Amount (INR)</div>
                <div>&bull; Screenshot / Proof of Bank Debit</div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                3. Processing Time &amp; Method
              </h2>
              <p className="mt-2.5">
                Upon verification by the trust treasurer, approved refunds will be credited directly to the original bank account, debit card, or UPI VPA used during payment. Banking settlement typically takes <strong>5 to 7 working days</strong> depending on your issuing bank.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-extrabold text-[#0d2040] sm:text-xl">
                4. Non-Refundable Scenarios
              </h2>
              <p className="mt-2.5">
                Refunds cannot be processed once an official <strong>Section 80G Tax Exemption Certificate</strong> has been utilized, or after funds have already been deployed directly to emergency disaster relief and Annadanam on the ground.
              </p>
            </div>

            {/* Support Desk Card */}
            <div className="mt-10 rounded-2xl border border-[#fed7aa] bg-gradient-to-br from-[#fffaf4] to-[#fff3e0] p-6 text-[#0d2040]">
              <h2 className="font-heading text-base font-bold sm:text-lg">
                Seva Finance Helpdesk
              </h2>
              <p className="mt-1 text-xs text-[#6b7280]">
                Reach out directly to our accounts desk for immediate assistance:
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
