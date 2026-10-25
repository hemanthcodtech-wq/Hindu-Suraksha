import { ArrowRight, Calendar } from "lucide-react"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { news as defaultNews } from "../data/content"
import FadeIn from "./Common/FadeIn"
import AutoSlider from "./Common/AutoSlider"
import API_BASE from "../lib/api"

export default function News() {
  const [newsList, setNewsList] = useState(defaultNews)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/events`)
        const data = await res.json()
        if (data.success && data.events && data.events.length > 0) {
          setNewsList(
            data.events.map((e) => ({
              id: e.id,
              title: e.title,
              date: e.event_date ? new Date(e.event_date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "Recent",
              excerpt: e.excerpt,
              image: e.image_url || "/images/hero-community.png",
              tag: e.tag || "Seva",
            }))
          )
        }
      } catch (err) {
        // Fallback already populated
      }
    }
    fetchNews()
  }, [])

  return (
    <section id="news" className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px]">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#e65100]">Updates &amp; Announcements</span>
              <h2 className="mt-1 font-heading text-2xl font-extrabold text-[#0d2040] sm:text-3xl">Latest News &amp; Seva Events</h2>
            </div>
            <NavLink to="/events" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e65100] transition hover:gap-2.5 sm:text-sm">
              View All Events <ArrowRight className="size-4" />
            </NavLink>
          </div>
        </FadeIn>
        <div className="mt-7 sm:mt-9">
          <AutoSlider duration={30} gap="gap-5 sm:gap-6">
            {newsList.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.08} className="w-[86vw] max-w-[380px] shrink-0 sm:w-[340px] lg:w-[365px]">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#fed7aa]/50 bg-card shadow-[0_8px_25px_rgba(13,32,64,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" decoding="async" loading="lazy" />
                    {item.tag && <span className="absolute left-3.5 top-3.5 rounded-full bg-gradient-to-r from-[#e65100] to-[#ff9800] px-3 py-1 text-[10px] font-extrabold text-white shadow-md">{item.tag}</span>}
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base font-bold leading-snug text-[#0d2040] sm:text-lg">{item.title}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground"><Calendar className="size-3.5 text-[#e65100]" />{item.date}</p>
                    <p className="mt-3 line-clamp-3 flex-1 text-xs leading-relaxed text-[#475467] sm:text-[13px]">{item.excerpt}</p>
                    <NavLink to="/events" className="mt-4 inline-flex min-h-9 items-center gap-1.5 text-xs font-bold text-[#e65100] transition hover:gap-2.5">Read More <ArrowRight className="size-3.5" /></NavLink>
                  </div>
                </article>
              </FadeIn>
            ))}
          </AutoSlider>
        </div>
      </div>
    </section>
  )
}
