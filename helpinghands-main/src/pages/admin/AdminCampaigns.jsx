import API_BASE from "../../lib/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Pencil, Trash2, Plus, X, Upload } from "lucide-react"
import FadeIn from "../../components/Common/FadeIn"

export default function AdminCampaigns() {
  const [campaigns, setCampaigns] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  
  // Form State
  const [form, setForm] = useState({ name: "", text: "", target_amount: "", image: "" })
  const [imageFile, setImageFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const fetchCampaigns = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/campaigns`)
      const data = await res.json()
      if (data.success) {
        setCampaigns(data.campaigns)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCampaigns()
  }, [])

  const handleEdit = (c) => {
    setEditingId(c.id)
    setForm({ name: c.name, text: c.text, target_amount: c.target_amount || "", image: c.image || "" })
    setImageFile(null)
    setError("")
  }

  const handleCancel = () => {
    setEditingId(null)
    setForm({ name: "", text: "", target_amount: "", image: "" })
    setImageFile(null)
    setError("")
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this campaign?")) return
    try {
      const res = await fetch(`${API_BASE}/api/campaigns/${id}`, { method: "DELETE" })
      const data = await res.json()
      if (data.success) fetchCampaigns()
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append("name", form.name)
      formData.append("text", form.text)
      formData.append("target_amount", form.target_amount)
      if (form.image && !imageFile) formData.append("image", form.image)
      if (imageFile) formData.append("image", imageFile) // file overrides url

      const url = editingId ? `${API_BASE}/api/campaigns/${editingId}` : `${API_BASE}/api/campaigns`
      const method = editingId ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        handleCancel()
        fetchCampaigns()
      } else {
        setError(data.message || "Failed to save campaign")
      }
    } catch (err) {
      setError("Network error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputCls = "w-full rounded-xl border border-border bg-background px-3 py-2 text-[10px] text-primary focus:border-teal focus:outline-none sm:rounded-2xl sm:text-sm"
  const labelCls = "mb-1 block text-[8px] font-semibold text-muted-foreground sm:text-xs"

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-extrabold text-primary sm:text-xl">Campaigns</h2>
          <p className="mt-0.5 text-[9px] text-muted-foreground sm:text-sm">{loading ? "Loading..." : `${campaigns.length} campaigns`}</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Form Panel */}
        <FadeIn className="lg:col-span-1">
          <div className="rounded-2xl border border-border bg-card shadow-sm sm:rounded-3xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5 sm:py-4">
              <h3 className="text-[11px] font-bold text-primary sm:text-sm">
                {editingId ? "Edit Campaign" : "Add New Campaign"}
              </h3>
              {editingId && (
                <button onClick={handleCancel} className="text-muted-foreground hover:text-primary">
                  <X className="size-4" />
                </button>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3">
              <div>
                <label className={labelCls}>Name *</label>
                <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputCls} placeholder="e.g. Every Child Deserves Education" />
              </div>
              
              <div>
                <label className={labelCls}>Target Amount (₹) *</label>
                <input
                  required
                  type="number"
                  min="1"
                  value={form.target_amount}
                  onChange={e => setForm({...form, target_amount: e.target.value})}
                  className={inputCls}
                  placeholder="e.g. 500000"
                />
              </div>

              <div>
                <label className={labelCls}>Description *</label>
                <textarea required rows={3} value={form.text} onChange={e => setForm({...form, text: e.target.value})} className={`${inputCls} resize-none`} placeholder="Short description of the campaign" />
              </div>

              <div>
                <label className={labelCls}>Image</label>
                {!imageFile && form.image && (
                  <div className="mb-2 relative inline-block">
                    <img src={form.image} alt="Current" className="h-16 w-16 object-cover rounded-lg border border-border" />
                  </div>
                )}
                <div className="relative overflow-hidden rounded-xl border border-border bg-background transition-colors hover:bg-muted sm:rounded-2xl">
                  <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="absolute inset-0 cursor-pointer opacity-0" />
                  <div className="flex items-center justify-center gap-2 py-2.5 text-center text-[9px] font-semibold text-muted-foreground sm:text-xs">
                    <Upload className="size-3.5" />
                    <span>{imageFile ? imageFile.name : "Choose an image..."}</span>
                  </div>
                </div>
              </div>

              {error && <p className="text-[10px] font-medium text-red-500">{error}</p>}

              <button type="submit" disabled={isSubmitting} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-teal py-2 text-[10px] font-bold text-white transition hover:bg-teal-dark disabled:opacity-70 sm:rounded-2xl sm:text-sm sm:py-2.5">
                {isSubmitting ? "Saving..." : editingId ? "Update Campaign" : "Create Campaign"}
              </button>
            </form>
          </div>
        </FadeIn>

        {/* List Panel */}
        <FadeIn className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:rounded-3xl">
            {/* Mobile View: Clean Campaign Cards */}
            <div className="divide-y divide-border md:hidden">
              {loading ? (
                <p className="p-6 text-center text-xs text-muted-foreground">Loading campaigns...</p>
              ) : campaigns.length === 0 ? (
                <p className="p-6 text-center text-xs text-muted-foreground">No campaigns found.</p>
              ) : campaigns.map((c) => (
                <div key={c.id} className="p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    {c.image ? (
                      <img src={c.image} alt="" className="size-14 rounded-xl object-cover shrink-0" />
                    ) : (
                      <div className="grid size-14 place-items-center rounded-xl bg-teal/10 text-teal text-[10px] shrink-0 font-bold">No Img</div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-primary truncate">{c.name}</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">{c.text}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="rounded-xl bg-muted/40 p-2.5">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-teal">{c.raised}% raised</span>
                      <span className="text-muted-foreground">Goal: {c.goal}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-primary-soft">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#04458F] to-[#5E922C]" style={{ width: `${c.raised}%` }} />
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <Link to={`/admin/campaigns/${c.id}`} className="inline-flex h-8 items-center justify-center rounded-xl bg-indigo-50 px-3 text-[11px] font-bold text-indigo-600 transition hover:bg-indigo-500 hover:text-white">
                      View Revenue
                    </Link>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleEdit(c)} className="grid size-8 place-items-center rounded-xl border border-border bg-background text-muted-foreground transition hover:bg-teal hover:text-white">
                        <Pencil className="size-3.5" />
                      </button>
                      <button onClick={() => handleDelete(c.id)} className="grid size-8 place-items-center rounded-xl border border-red-200 bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View: Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[620px] text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Campaign</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Progress</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {loading ? (
                    <tr><td colSpan={3} className="p-6 text-center text-sm text-muted-foreground">Loading...</td></tr>
                  ) : campaigns.length === 0 ? (
                    <tr><td colSpan={3} className="p-6 text-center text-sm text-muted-foreground">No campaigns found.</td></tr>
                  ) : campaigns.map((c) => (
                    <tr key={c.id} className="transition hover:bg-muted/30">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          {c.image ? (
                            <img src={c.image} alt="" className="size-12 rounded-lg object-cover" />
                          ) : (
                            <div className="grid size-12 place-items-center rounded-lg bg-teal/10 text-teal text-xs">No Img</div>
                          )}
                          <div className="max-w-[240px]">
                            <p className="text-sm font-bold text-primary truncate">{c.name}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{c.text}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 align-middle">
                        <div className="w-full max-w-[160px]">
                          <div className="flex justify-between text-xs font-bold">
                            <span className="text-teal">{c.raised}%</span>
                            <span className="text-muted-foreground">{c.goal}</span>
                          </div>
                          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-primary-soft">
                            <div className="h-full rounded-full bg-gradient-to-r from-[#04458F] to-[#5E922C]" style={{ width: `${c.raised}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 align-middle">
                        <div className="flex gap-2">
                          <Link to={`/admin/campaigns/${c.id}`} className="grid h-8 place-items-center rounded-lg bg-indigo-50 px-3 text-xs font-bold text-indigo-600 transition hover:bg-indigo-500 hover:text-white">
                            View Revenue
                          </Link>
                          <button onClick={() => handleEdit(c)} className="grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground transition hover:bg-teal hover:text-white">
                            <Pencil className="size-4" />
                          </button>
                          <button onClick={() => handleDelete(c.id)} className="grid size-8 place-items-center rounded-lg bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
