import API_BASE from "../../lib/api"
import { useMemo, useState, useEffect } from "react"
import { Award, Download, IdCard, Loader2, Mail, Printer, Search, Send, Users } from "lucide-react"
import FadeIn from "../../components/Common/FadeIn"
import { useApp } from "../../context/AppContext"

const MEMBER_DATA = [
  { id: "MEM-001", name: "Ananya Rao", email: "ananya@example.org", role: "Community Member", city: "Tirupati" },
  { id: "MEM-002", name: "Ravi Kumar", email: "ravi@example.org", role: "Life Member", city: "Chennai" },
  { id: "MEM-003", name: "Meena Devi", email: "meena@example.org", role: "Community Member", city: "Bengaluru" },
]

const makeId = (type, id) => `${type === "certificate" ? "HH-CERT" : "HH-ID"}-${new Date().getFullYear()}-${String(id).padStart(4, "0")}`

// Same design as VolunteerIDCard.jsx
function VolunteerIDPreview({ selected, recipientType, globalSettings }) {
  const photoUrl = selected?.profile_pic_url
  const name = selected?.name || "Select a recipient"
  const role = selected?.role || "Volunteer"
  const volId = selected?.id ? `VOL-${String(selected.id).padStart(4, "0")}` : "VOL-0000"

  return (
    <div className="mx-auto mt-6 w-full max-w-[420px] overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
      {/* Header */}
      <div className="bg-[#4a8a2a] px-6 pt-5 pb-12 text-white text-center flex flex-col items-center">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-10 w-auto mb-2"
          crossOrigin="anonymous"
        />
        <h2 className="text-sm font-bold uppercase tracking-wider text-white">
          {globalSettings?.siteTitle || "HINDU SURAKSHA"}
        </h2>
        <p className="text-[10px] font-medium text-white/90">
          Official {recipientType === "volunteer" ? "Volunteer" : recipientType === "donor" ? "Donor" : "Member"} Identity Card
        </p>
      </div>

      {/* Photo overlapping header */}
      <div className="flex justify-center -mt-10 relative z-10">
        <div className="size-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-[#e3e9e3] flex items-center justify-center">
          {photoUrl ? (
            <img src={photoUrl} alt={name} className="size-full object-cover" crossOrigin="anonymous" />
          ) : (
            <span className="text-3xl font-black text-[#266326]">
              {name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pt-3 pb-5 text-center">
        <p className="text-base font-black text-[#13448a] leading-tight">{name}</p>
        <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{volId}</p>

        <div className="mt-4 grid grid-cols-2 gap-y-3 border-t border-slate-200 pt-4 text-left">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Role</p>
            <p className="text-xs font-bold text-[#13448a] mt-0.5">{role}</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Blood Group</p>
            <p className="text-xs font-bold text-[#13448a] mt-0.5">{selected?.blood_group || "O+"}</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Phone</p>
            <p className="text-xs font-bold text-[#13448a] mt-0.5">{selected?.phone || "N/A"}</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Valid Till</p>
            <p className="text-xs font-bold text-[#13448a] mt-0.5">Dec 2025</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#f4f5f7] p-2 text-center border-t border-slate-100">
        <p className="text-[9px] font-medium text-slate-500">
          If found, please return to: {globalSettings?.contactEmail || "contact@hindusuraksha.org"}
        </p>
      </div>
    </div>
  )
}

export default function AdminDocuments() {
  const { globalSettings } = useApp()
  const [volunteers, setVolunteers] = useState([])
  const [donors, setDonors] = useState([])
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState(false)

  const [type, setType] = useState("certificate")
  const [recipientType, setRecipientType] = useState("volunteer")
  const [selectedId, setSelectedId] = useState("")
  const [sent, setSent] = useState({})
  const [query, setQuery] = useState("")
  const [manualName, setManualName] = useState("")
  const [manualRole, setManualRole] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [donorsRes, volunteersRes, membersRes] = await Promise.all([
          fetch(`${API_BASE}/api/donations/all`),
          fetch(`${API_BASE}/api/volunteers/all`),
          fetch(`${API_BASE}/api/members`)
        ])
        const donorsData = await donorsRes.json()
        const volunteersData = await volunteersRes.json()
        const membersData = await membersRes.json()
        if (donorsData.success) setDonors(donorsData.donations)
        if (volunteersData.success) setVolunteers(volunteersData.volunteers)
      } catch (error) {
        console.error("Error fetching documents data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const recipients = useMemo(() => {
    if (recipientType === "volunteer") return volunteers.map(v => ({ id: v.id, name: v.name, email: v.email, role: v.role || "Volunteer", city: v.city || "", profile_pic_url: v.profile_pic_url, phone: v.phone, blood_group: v.blood_group }))
    if (recipientType === "donor") return donors.filter(d => d.status === "success").map(d => ({ id: d.id, name: d.name, email: d.email, role: "Donor", city: "", profile_pic_url: d.profile_pic_url }))
    return MEMBER_DATA
  }, [recipientType, volunteers, donors])

  const filtered = recipients.filter(r => `${r.name} ${r.email} ${r.role}`.toLowerCase().includes(query.toLowerCase()))
  const rawSelected = recipients.find(r => String(r.id) === String(selectedId)) || filtered[0] || { id: "0001", name: "Recipient Name", role: "Volunteer", email: "info@hindusuraksha.org", blood_group: "O+", phone: "+91 79899 38718" }
  
  const selected = useMemo(() => ({
    ...rawSelected,
    name: manualName.trim() ? manualName.trim() : rawSelected.name,
    role: manualRole.trim() ? manualRole.trim() : rawSelected.role,
  }), [rawSelected, manualName, manualRole])

  const documentId = rawSelected ? makeId(type, rawSelected.id) : "HH-DOCUMENT-0000"

  const sendDocument = () => {
    if (!selected) return
    setSent(prev => ({ ...prev, [documentId]: true }))
  }

  const printDocument = () => {
    if (!selected) return

    const orgName = globalSettings?.siteTitle?.toUpperCase() || "HINDU SURAKSHA"
    const contactEmail = globalSettings?.contactEmail || "contact@hindusuraksha.org"
    const photoUrl = selected.profile_pic_url || ""
    const name = selected.name || "Volunteer"
    const role = selected.role || "Volunteer"
    const volId = `VOL-${String(selected.id).padStart(4, "0")}`
    const phone = selected.phone || "N/A"
    const bloodGroup = selected.blood_group || "O+"
    const logoUrl = "/images/logo.png"
    const recipientLabel = recipientType === "volunteer" ? "Volunteer" : recipientType === "donor" ? "Donor" : "Member"

    const idCardHtml = type === "certificate" ? `
      <div style="width:840px;aspect-ratio:1.414/1;border:6px solid #d4af37;background:#fffdf9;padding:40px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center;position:relative;font-family:Georgia,serif;box-shadow:0 10px 30px rgba(0,0,0,0.1);">
        <div style="position:absolute;inset:8px;border:2px solid #0d2040;pointer-events:none;"></div>
        <div style="position:absolute;inset:14px;border:1px solid rgba(230,81,0,0.5);pointer-events:none;"></div>
        <div style="position:absolute;top:8px;left:8px;width:36px;height:36px;border-top:4px solid #d4af37;border-left:4px solid #d4af37;"></div>
        <div style="position:absolute;top:8px;right:8px;width:36px;height:36px;border-top:4px solid #d4af37;border-right:4px solid #d4af37;"></div>
        <div style="position:absolute;bottom:8px;left:8px;width:36px;height:36px;border-bottom:4px solid #d4af37;border-left:4px solid #d4af37;"></div>
        <div style="position:absolute;bottom:8px;right:8px;width:36px;height:36px;border-bottom:4px solid #d4af37;border-right:4px solid #d4af37;"></div>

        <div style="position:relative;z-index:2;margin-top:10px;">
          <img src="${logoUrl}" style="height:64px;width:auto;margin-bottom:8px;" crossorigin="anonymous" />
          <p style="margin:0;font-size:12px;font-weight:900;letter-spacing:3px;color:#e65100;text-transform:uppercase;font-family:sans-serif;">HINDU SURAKSHA TRUST</p>
          <p style="margin:2px 0 0;font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-family:sans-serif;">Registered Public Charitable Trust &bull; NITI Aayog NGO Darpan &bull; Sec 80G</p>
        </div>

        <div style="position:relative;z-index:2;margin:15px 0;">
          <h1 style="margin:0;font-size:36px;font-weight:900;color:#0d2040;font-style:italic;">Certificate of Appreciation</h1>
          <p style="margin:10px 0 0;font-size:12px;font-weight:bold;color:#78350f;text-transform:uppercase;letter-spacing:2px;font-family:sans-serif;">This is proudly presented to</p>
          <div style="margin:12px auto;display:inline-block;border-bottom:2px solid #d4af37;padding:0 30px 4px;">
            <p style="margin:0;font-size:32px;font-weight:900;color:#e65100;">${name}</p>
          </div>
          <p style="margin:8px auto 0;max-width:540px;font-size:12px;color:#374151;line-height:1.6;font-style:italic;">In recognition and heartfelt gratitude for exemplary dedication, voluntary seva, and selfless contribution toward our community empowerment, temple preservation, and cultural protection initiatives.</p>
        </div>

        <div style="position:relative;z-index:2;width:100%;display:flex;justify-content:space-between;align-items:flex-end;padding:0 20px;font-family:sans-serif;">
          <div style="text-align:left;">
            <p style="margin:0;font-size:11px;font-weight:bold;color:#1f2937;">${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
            <div style="width:100px;height:1px;background:#0d2040;opacity:0.4;margin:4px 0;"></div>
            <p style="margin:0;font-size:9px;font-weight:bold;text-transform:uppercase;color:#6b7280;">Date of Issue</p>
            <p style="margin:2px 0 0;font-size:8px;font-family:monospace;color:#9ca3af;">ID: ${documentId}</p>
          </div>

          <div style="text-align:center;">
            <div style="width:48px;height:48px;border-radius:50%;border:2px solid #d4af37;background:linear-gradient(135deg,#ffd54f,#ff8f00);margin:0 auto;display:flex;align-items:center;justify-content:center;font-size:20px;">🏅</div>
            <p style="margin:4px 0 0;font-size:8px;font-weight:900;color:#d4af37;letter-spacing:1px;">OFFICIAL SEAL</p>
          </div>

          <div style="text-align:right;">
            <p style="margin:0;font-size:14px;font-weight:bold;font-style:italic;color:#0d2040;font-family:Georgia,serif;">Shri Rajeshwar Sharma</p>
            <div style="width:120px;height:1px;background:#0d2040;opacity:0.4;margin:4px 0 4px auto;"></div>
            <p style="margin:0;font-size:9px;font-weight:bold;text-transform:uppercase;color:#6b7280;">Authorized Signatory</p>
            <p style="margin:2px 0 0;font-size:8px;color:#9ca3af;">National President &bull; Trustee</p>
          </div>
        </div>
      </div>
    ` : `
      <div style="width:420px;border-radius:20px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.15);background:#fff;font-family:sans-serif;">
        <div style="background:#4a8a2a;padding:24px 24px 56px;text-align:center;">
          <img src="${logoUrl}" style="height:48px;width:auto;margin-bottom:10px;" crossorigin="anonymous" />
          <div style="font-size:16px;font-weight:800;color:#fff;letter-spacing:1px;text-transform:uppercase;">${orgName}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.85);margin-top:4px;">Official ${recipientLabel} Identity Card</div>
        </div>
        <div style="display:flex;justify-content:center;margin-top:-48px;position:relative;z-index:1;">
          <div style="width:96px;height:96px;border-radius:50%;border:4px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,0.2);overflow:hidden;background:#e3e9e3;display:flex;align-items:center;justify-content:center;">
            ${photoUrl
              ? `<img src="${photoUrl}" style="width:100%;height:100%;object-fit:cover;" crossorigin="anonymous" />`
              : `<span style="font-size:40px;font-weight:900;color:#266326;">${name.charAt(0).toUpperCase()}</span>`
            }
          </div>
        </div>
        <div style="padding:12px 24px 24px;text-align:center;">
          <div style="font-size:22px;font-weight:900;color:#13448a;">${name}</div>
          <div style="font-size:12px;font-weight:600;color:#64748b;margin-top:4px;">${volId}</div>
          <div style="margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:16px 8px;border-top:1px solid #e2e8f0;padding-top:16px;text-align:left;">
            <div><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">Role</div><div style="font-size:13px;font-weight:700;color:#13448a;margin-top:2px;">${role}</div></div>
            <div><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">Blood Group</div><div style="font-size:13px;font-weight:700;color:#13448a;margin-top:2px;">${bloodGroup}</div></div>
            <div><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">Phone</div><div style="font-size:13px;font-weight:700;color:#13448a;margin-top:2px;">${phone}</div></div>
            <div><div style="font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">Valid Till</div><div style="font-size:13px;font-weight:700;color:#13448a;margin-top:2px;">Dec 2025</div></div>
          </div>
        </div>
        <div style="background:#f4f5f7;padding:10px;text-align:center;border-top:1px solid #e8eaed;">
          <div style="font-size:10px;color:#94a3b8;">If found, please return to: ${contactEmail}</div>
        </div>
      </div>
    `

    const printWindow = window.open("", "_blank", "width=700,height=900")
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${type === "certificate" ? "Certificate" : "ID Card"} — ${name}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { background: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; }
            @media print {
              body { padding: 0; }
              @page { margin: 0.5cm; size: A5 portrait; }
            }
          </style>
        </head>
        <body>
          ${idCardHtml}
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() { window.close(); };
            };
          </script>
        </body>
      </html>
    `)
    printWindow.document.close()
  }


  const loadImage = (src) =>
    new Promise((resolve) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => resolve(img)
      img.onerror = () => resolve(null)
      img.src = src
    })

  const handleDownloadCard = async () => {
    if (!selected) return
    setDownloading(true)
    try {
      const W = 700, H = 960
      const canvas = document.createElement("canvas")
      canvas.width = W
      canvas.height = H
      const ctx = canvas.getContext("2d")

      // White background
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, W, H)

      // Green header with rounded top corners
      ctx.fillStyle = "#4a8a2a"
      ctx.beginPath()
      ctx.roundRect(0, 0, W, 260, [24, 24, 0, 0])
      ctx.fill()

      // Logo
      const logoImg = await loadImage("/images/logo.png")
      if (logoImg) ctx.drawImage(logoImg, (W - 80) / 2, 24, 80, 80)

      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 26px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(globalSettings?.siteTitle?.toUpperCase() || "HINDU SURAKSHA", W / 2, 140)
      ctx.font = "16px sans-serif"
      ctx.fillStyle = "rgba(255,255,255,0.85)"
      ctx.fillText("Official Volunteer Identity Card", W / 2, 168)

      // White border circle for photo
      ctx.beginPath()
      ctx.arc(W / 2, 216, 70, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()

      // Profile photo or initial
      const profileImg = selected.profile_pic_url ? await loadImage(selected.profile_pic_url) : null
      ctx.save()
      ctx.beginPath()
      ctx.arc(W / 2, 216, 64, 0, Math.PI * 2)
      ctx.clip()
      if (profileImg) {
        ctx.drawImage(profileImg, W / 2 - 64, 216 - 64, 128, 128)
      } else {
        ctx.fillStyle = "#e3e9e3"
        ctx.fill()
        ctx.fillStyle = "#266326"
        ctx.font = "bold 64px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(selected.name?.charAt(0)?.toUpperCase() || "V", W / 2, 216)
      }
      ctx.restore()
      ctx.textBaseline = "alphabetic"

      ctx.fillStyle = "#13448a"
      ctx.font = "bold 34px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(selected.name || "Volunteer", W / 2, 322)
      ctx.font = "17px sans-serif"
      ctx.fillStyle = "#64748b"
      ctx.fillText(`VOL-${String(selected.id).padStart(4, "0")}`, W / 2, 352)

      ctx.strokeStyle = "#e2e8f0"
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(50, 384)
      ctx.lineTo(W - 50, 384)
      ctx.stroke()

      const fields = [
        ["ROLE", selected.role || "Volunteer"],
        ["BLOOD GROUP", selected.blood_group || "O+"],
        ["PHONE", selected.phone || "N/A"],
        ["VALID TILL", "Dec 2025"],
      ]
      fields.forEach(([label, value], i) => {
        const x = i % 2 === 0 ? 70 : W / 2 + 20
        const y = 428 + Math.floor(i / 2) * 110
        ctx.fillStyle = "#94a3b8"
        ctx.font = "bold 14px sans-serif"
        ctx.textAlign = "left"
        ctx.fillText(label, x, y)
        ctx.fillStyle = "#13448a"
        ctx.font = "bold 22px sans-serif"
        ctx.fillText(value, x, y + 32)
      })

      // Footer
      ctx.fillStyle = "#f4f5f7"
      ctx.fillRect(0, H - 60, W, 60)
      ctx.strokeStyle = "#e2e8f0"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, H - 60)
      ctx.lineTo(W, H - 60)
      ctx.stroke()
      ctx.fillStyle = "#94a3b8"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(`If found, please return to: ${globalSettings?.contactEmail || "contact@hindusuraksha.org"}`, W / 2, H - 22)

      const link = document.createElement("a")
      link.download = `${(selected.name || "volunteer").replace(/\s+/g, "-")}-id-card.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    } catch (err) {
      console.error("Download failed:", err)
      alert("Could not generate ID card image.")
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h2 className="text-[15px] font-extrabold text-primary sm:text-xl">Certificates &amp; ID Cards</h2>
        <p className="mt-1 text-[9px] text-muted-foreground sm:text-sm">Super Admin can generate, print and mark documents as sent to volunteers, donors and members.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
        <FadeIn className="rounded-2xl border border-border bg-card p-4 sm:rounded-3xl sm:p-5">
          <div className="flex gap-2">
            <button onClick={() => setType("certificate")} className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold ${type === "certificate" ? "bg-teal text-white" : "bg-muted text-primary"}`}><Award className="size-4" /> Certificate</button>
            <button onClick={() => setType("idcard")} className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold ${type === "idcard" ? "bg-teal text-white" : "bg-muted text-primary"}`}><IdCard className="size-4" /> ID Card</button>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {["volunteer", "donor", "member"].map(kind => (
              <button key={kind} onClick={() => { setRecipientType(kind); setSelectedId("") }} className={`rounded-xl border px-2 py-2 text-[10px] font-bold capitalize ${recipientType === kind ? "border-teal bg-primary-soft text-teal" : "border-border text-primary"}`}>{kind}s</button>
            ))}
          </div>
          {/* Manual Entry Options for Certificate & ID Card */}
          <div className="mt-4 rounded-xl border border-[#fed7aa] bg-[#fffaf4] p-3 text-left space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold text-[#e65100]">
                ✍️ Customize Recipient Details Manually
              </label>
              {(manualName || manualRole) && (
                <button
                  type="button"
                  onClick={() => { setManualName(""); setManualRole(""); }}
                  className="text-[10px] font-bold text-muted-foreground hover:text-[#e65100]"
                >
                  ✕ Reset All
                </button>
              )}
            </div>
            <div>
              <span className="text-[9px] font-semibold text-muted-foreground uppercase">Recipient Name</span>
              <input
                type="text"
                value={manualName}
                onChange={e => setManualName(e.target.value)}
                placeholder={rawSelected?.name || "Enter recipient name manually"}
                className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-semibold text-primary focus:border-[#e65100] focus:outline-none"
              />
            </div>
            <div>
              <span className="text-[9px] font-semibold text-muted-foreground uppercase">Designation / Role / Title (Optional)</span>
              <input
                type="text"
                value={manualRole}
                onChange={e => setManualRole(e.target.value)}
                placeholder={rawSelected?.role || (recipientType === "volunteer" ? "Volunteer" : recipientType === "donor" ? "Donor" : "Member")}
                className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-semibold text-primary focus:border-[#e65100] focus:outline-none"
              />
            </div>
          </div>

          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search recipient from list" className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-xs focus:border-teal focus:outline-none" />
          </div>
          <div className="mt-3 max-h-64 space-y-2 overflow-y-auto">
            {loading ? (
              <p className="p-3 text-xs text-muted-foreground text-center">Loading...</p>
            ) : filtered.length === 0 ? (
              <p className="p-3 text-xs text-muted-foreground text-center">No {recipientType}s found.</p>
            ) : (
              filtered.map(r => (
                <button key={r.id} onClick={() => setSelectedId(r.id)} className={`w-full rounded-xl border p-3 text-left ${String(selected?.id) === String(r.id) ? "border-teal bg-primary-soft" : "border-border bg-background"}`}>
                  <p className="text-xs font-bold text-primary">{r.name}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">{r.email} · {r.role}</p>
                </button>
              ))
            )}
          </div>
        </FadeIn>

        <FadeIn className="rounded-2xl border border-border bg-card p-4 sm:rounded-3xl sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-teal">Live Preview</p>
              <h3 className="mt-1 text-sm font-extrabold text-primary">{type === "certificate" ? "Certificate of Appreciation" : "Volunteer / Donor / Member ID Card"}</h3>
            </div>
            <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-mono text-muted-foreground">{documentId}</span>
          </div>

          {type === "certificate" ? (
            <div className="relative mx-auto mt-6 aspect-[1.414/1] w-full max-w-[840px] overflow-hidden rounded-xl border-4 border-[#d4af37] bg-[#fffdf9] p-7 sm:p-11 shadow-2xl text-center font-serif flex flex-col justify-between">
              {/* Double Ornate Border & Corner Filigrees */}
              <div className="pointer-events-none absolute inset-3 border-2 border-[#0d2040]" />
              <div className="pointer-events-none absolute inset-5 border border-[#e65100]/60" />
              <div className="pointer-events-none absolute top-3 left-3 size-10 sm:size-12 border-t-4 border-l-4 border-[#d4af37]" />
              <div className="pointer-events-none absolute top-3 right-3 size-10 sm:size-12 border-t-4 border-r-4 border-[#d4af37]" />
              <div className="pointer-events-none absolute bottom-3 left-3 size-10 sm:size-12 border-b-4 border-l-4 border-[#d4af37]" />
              <div className="pointer-events-none absolute bottom-3 right-3 size-10 sm:size-12 border-b-4 border-r-4 border-[#d4af37]" />

              {/* Watermark Background Emblem */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.035]">
                <img src="/images/logo.png" alt="Watermark" className="size-80 sm:size-96 object-contain" />
              </div>

              {/* Certificate Inner Content with proper flex containment */}
              <div className="relative z-10 flex h-full flex-col justify-between py-1">
                
                {/* Header with Emblem */}
                <div>
                  <div className="mx-auto flex size-12 sm:size-16 items-center justify-center drop-shadow-md">
                    <img src="/images/logo.png" alt="Hindu Suraksha Emblem" className="size-full object-contain" />
                  </div>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#e65100] sm:text-xs font-sans">
                    HINDU SURAKSHA TRUST
                  </p>
                  <p className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#6b7280] font-sans">
                    Registered Public Charitable Trust &bull; NITI Aayog NGO Darpan &bull; Sec 80G
                  </p>
                </div>

                {/* Title and Recipient */}
                <div className="my-auto py-1">
                  <h4 className="font-heading text-xl font-extrabold tracking-tight text-[#0d2040] sm:text-3xl lg:text-[36px] italic drop-shadow-sm">
                    Certificate of Appreciation
                  </h4>
                  <p className="mt-1.5 text-[10px] uppercase tracking-widest text-[#78350f] font-sans font-bold sm:text-xs">
                    This is proudly presented to
                  </p>
                  
                  {/* Recipient Name */}
                  <div className="mx-auto my-2 inline-block border-b-2 border-[#d4af37] px-6 pb-1">
                    <p className="font-heading text-xl font-black text-[#e65100] sm:text-3xl drop-shadow-sm">
                      {selected?.name || "Manoj V"}
                    </p>
                  </div>

                  <p className="mx-auto max-w-lg text-[10px] leading-relaxed text-[#374151] sm:text-xs italic">
                    In recognition and heartfelt gratitude for exemplary dedication, voluntary seva, and selfless contribution toward our community empowerment, temple preservation, and cultural protection initiatives.
                  </p>
                </div>

                {/* Signatures, Official Gold Seal & Details Footer - elevated well above bottom border */}
                <div className="mb-2 grid grid-cols-3 items-end gap-2 px-3 pt-2 text-[#0d2040] font-sans">
                  {/* Date & Issue Ref */}
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-[#1f2937] sm:text-xs">
                      {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                    <div className="my-1 h-px w-20 sm:w-24 bg-[#0d2040]/40" />
                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#6b7280]">Date of Issue</p>
                    <p className="text-[7px] sm:text-[8px] font-mono text-[#9ca3af]">ID: {documentId}</p>
                  </div>

                  {/* Gold Ribbon Medal Badge */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative grid size-10 place-items-center rounded-full border-2 border-[#d4af37] bg-gradient-to-br from-[#ffd54f] via-[#ffb300] to-[#ff8f00] text-[#0d2040] shadow-md sm:size-12">
                      <Award className="size-5 text-[#0d2040] sm:size-6 drop-shadow-sm" />
                    </div>
                    <span className="mt-1 text-[7px] sm:text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#d4af37]">OFFICIAL SEAL</span>
                  </div>

                  {/* Authorized Signatory */}
                  <div className="text-right">
                    <p className="text-xs sm:text-sm font-serif italic font-bold text-[#0d2040]">
                      Shri Rajeshwar Sharma
                    </p>
                    <div className="my-1 ml-auto h-px w-24 sm:w-28 bg-[#0d2040]/40" />
                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#6b7280]">Authorized Signatory</p>
                    <p className="text-[7px] sm:text-[8px] text-[#9ca3af]">National President &bull; Trustee</p>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <VolunteerIDPreview selected={selected} recipientType={recipientType} globalSettings={globalSettings} />
          )}

          <div className="mt-5 flex flex-wrap gap-2 print:hidden">
            <button onClick={printDocument} disabled={!selected} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-bold text-primary disabled:opacity-40">
              <Printer className="size-4" /> Print / Save PDF
            </button>
            {type === "idcard" && (
              <button onClick={handleDownloadCard} disabled={!selected || downloading} className="inline-flex items-center gap-2 rounded-xl bg-[#4a8a2a] px-4 py-2.5 text-xs font-bold text-white disabled:opacity-40">
                {downloading ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}
                {downloading ? "Generating..." : "Download PNG"}
              </button>
            )}
            <button onClick={sendDocument} disabled={!selected} className="inline-flex items-center gap-2 rounded-xl bg-teal px-4 py-2.5 text-xs font-bold text-white disabled:opacity-40">
              <Send className="size-4" /> {sent[documentId] ? "Sent" : "Send to Recipient"}
            </button>
            {selected?.email && (
              <a href={`mailto:${selected.email}?subject=${encodeURIComponent(type === "certificate" ? "Your Hindu Suraksha Certificate" : "Your Hindu Suraksha ID Card")}&body=${encodeURIComponent(`Your document ${documentId} is ready. Please contact Hindu Suraksha if you need assistance.`)}`} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-bold text-primary">
                <Mail className="size-4" /> Email
              </a>
            )}
          </div>
        </FadeIn>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 print:hidden">
        {[
          { icon: Users, label: "Volunteers", value: volunteers.length },
          { icon: Award, label: "Successful Donors", value: donors.filter(d => d.status === "success").length },
          { icon: IdCard, label: "Members", value: MEMBER_DATA.length }
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-4">
            <Icon className="size-5 text-teal" />
            <p className="mt-3 text-xl font-extrabold text-primary">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
