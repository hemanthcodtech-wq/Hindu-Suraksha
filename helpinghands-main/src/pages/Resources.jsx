import API_BASE from "../lib/api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { 
  Image as ImageIcon, 
  Video, 
  Trophy, 
  Newspaper, 
  FolderOpen, 
  Sparkles,
  ExternalLink,
  Play
} from "lucide-react"

const TABS = [
  { id: "all", label: "All Media", icon: Sparkles },
  { id: "photos", label: "Photos", icon: ImageIcon },
  { id: "videos", label: "Videos", icon: Video },
  { id: "achievements", label: "Achievements & Awards", icon: Trophy },
  { id: "press", label: "Press & Stories", icon: Newspaper },
]

const getEmbedUrl = (url) => {
  if (!url) return ""
  const lower = url.toLowerCase()
  if (lower.includes("youtube.com/watch?v=")) {
    try { return `https://www.youtube.com/embed/${new URL(url).searchParams.get("v")}` } catch (e) {}
  }
  if (lower.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0]
    if (id) return `https://www.youtube.com/embed/${id}`
  }
  if (lower.includes("youtube.com/shorts/")) {
    const id = url.split("shorts/")[1]?.split("?")[0]
    if (id) return `https://www.youtube.com/embed/${id}`
  }
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i)
  if (match && match[1]) return `https://www.youtube.com/embed/${match[1]}`
  return url
}

export default function Resources() {
  const [activeTab, setActiveTab] = useState("all")
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${API_BASE}/api/resources`)
        const data = await res.json()
        if (data.success) {
          setResources(data.resources || [])
        }
      } catch (err) {
        console.error("Failed to load resources:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchResources()
  }, [])

  const filteredResources = activeTab === "all" 
    ? resources 
    : resources.filter(r => r.category === activeTab)

  return (
    <main className="min-h-screen bg-background">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2040] via-[#163668] to-[#e65100] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#ffcc80] backdrop-blur-sm">
            <span className="size-2 rounded-full bg-[#ff9800]" />
            Hindu Suraksha Media Center
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[52px]">
            Resources, Media &amp; Stories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base sm:leading-7">
            Browse our photo documentation, video coverage, media features, and organizational recognitions all in one consolidated place.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {TABS.map(tab => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition sm:text-sm ${
                    isActive 
                      ? "bg-[#e65100] text-white shadow-lg shadow-orange-500/30 scale-105" 
                      : "bg-white/10 text-white/90 hover:bg-white/20"
                  }`}
                >
                  <Icon className="size-4" />
                  {tab.label}
                  {tab.id !== "all" && (
                    <span className="ml-1 rounded-full bg-black/20 px-1.5 py-0.5 text-[10px]">
                      {resources.filter(r => r.category === tab.id).length}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {loading ? (
            <div className="py-20 text-center text-sm font-semibold text-muted-foreground">
              Loading resources...
            </div>
          ) : filteredResources.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <p className="text-sm font-semibold text-muted-foreground">No media items found in this section.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((item) => {
                const isVideo = item.category === "videos"
                const embedUrl = isVideo ? getEmbedUrl(item.file_url) : ""

                return (
                  <article 
                    key={item.id} 
                    className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Media Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      {isVideo && embedUrl ? (
                        <iframe
                          src={embedUrl}
                          title={item.title}
                          className="h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={item.file_url || "/images/hero-community.png"}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.src = "/images/hero-community.png" }}
                        />
                      )}
                      
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 rounded-full bg-[#0d2040]/80 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                        {item.category === "press" ? "Press Story" : item.category}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-heading text-base font-bold text-[#0d2040] sm:text-lg">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="mt-2 flex-1 text-xs leading-relaxed text-[#475467] sm:text-sm">
                          {item.description}
                        </p>
                      )}
                      
                      {item.file_url && (
                        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-bold text-[#e65100]">
                          <span className="inline-flex items-center gap-1">
                            {isVideo ? <Play className="size-3.5" /> : <ImageIcon className="size-3.5" />}
                            {isVideo ? "Watch Stream" : "View Resource"}
                          </span>
                          <a 
                            href={item.file_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            Open <ExternalLink className="size-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          {/* Quick link to Documents & Certificates on the unified About page */}
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0d2040] to-[#163668] p-6 text-white shadow-xl sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center sm:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-[#ffcc80]">
                <FolderOpen className="size-3.5" /> Statutory Information
              </span>
              <h2 className="mt-3 font-heading text-xl font-bold sm:text-2xl">
                Need Registration &amp; 12A/80G Certifications?
              </h2>
              <p className="mt-2 text-xs text-white/80 sm:text-sm leading-relaxed">
                All statutory filings, NGO Darpan IDs, 12A exemption orders, and trust documents are available on our unified About Us page.
              </p>
            </div>
            <Link 
              to="/about#certificates" 
              className="shrink-0 rounded-full bg-[#e65100] px-6 py-3 text-xs font-extrabold text-white shadow-lg transition hover:bg-[#d84315] sm:text-sm"
            >
              View Statutory Certificates →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
