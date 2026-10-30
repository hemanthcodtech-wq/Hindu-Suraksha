import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const SITE_URL = "https://www.hindusuraksha.in"
const DEFAULT_TITLE = "Hindu Suraksha | Protect Hindu Dharma. Support Hindu Families. Serve Humanity."
const DEFAULT_DESC = "Hindu Suraksha is a community-driven initiative dedicated to protecting Hindu Dharma, supporting underprivileged Hindu families, educating orphaned children, providing free meals and healthcare assistance."
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-community.png`

const ROUTE_SEO = {
  "/": {
    title: "Hindu Suraksha | A Strong Support System for Every Hindu Family",
    description: "United for Hindu Protection. Committed to Hindu Welfare. Join our ₹50 membership program, support underprivileged families, and protect Hindu Dharma.",
    keywords: "Hindu Suraksha, Hindu Welfare, ₹50 Membership, Protect Hindu Dharma, Orphan Education, Annadanam, Free Meals, Hindu Community Support India",
  },
  "/about": {
    title: "About Us | Hindu Suraksha - Mission, Vision & Dharma Protection",
    description: "Learn about Hindu Suraksha's purpose, vision, transparent governance, lawful cultural protection, and grassroots community support network.",
    keywords: "About Hindu Suraksha, Hindu Dharma Protection, Hindu NGO India, Hindu Charitable Trust, Cultural Preservation",
  },
  "/programs": {
    title: "Our Welfare Programs | Education, Healthcare & Food Support - Hindu Suraksha",
    description: "Explore our 4 major welfare initiatives: Child Education Assistance, Healthcare & Emergency Medical Aid, Food & Nutrition Drives, and Family Financial Support.",
    keywords: "Hindu Welfare Programs, Orphan Education Sponsorship, Free Medical Camp, Annadanam Food Drives, Hindu Family Financial Assistance",
  },
  "/campaigns": {
    title: "Active Campaigns & Seva Drives | Hindu Suraksha",
    description: "Participate in grassroots campaigns, child sponsorship drives, Annadanam, and cultural preservation initiatives across India.",
    keywords: "Hindu Suraksha Campaigns, Donate for Children, Seva Campaigns, Hindu Charity Drives",
  },
  "/donate": {
    title: "Donate & Membership Registration (₹50) | Hindu Suraksha",
    description: "Join Hindu Suraksha with an affordable ₹50 membership or donate to sponsor a child's education, healthcare, and family food kits.",
    keywords: "Donate Hindu Suraksha, ₹50 Hindu Membership, Sponsor a Child, Support Poor Hindu Family, Seva Contribution Online",
  },
  "/volunteer": {
    title: "Become a Volunteer Sevak | Join Hindu Suraksha Movement",
    description: "Dedicate your skills, time, and heart to community welfare, food distribution drives, education mentoring, and cultural awareness.",
    keywords: "Hindu Suraksha Volunteer, Sevak Registration, Volunteer in India, Community Seva, Volunteer with Hindu Trust",
  },
  "/teams": {
    title: "Our People & Leadership | Hindu Suraksha",
    description: "Meet the trustees, coordinators, active members, and volunteers driving Hindu Suraksha across India.",
    keywords: "Hindu Suraksha Team, Leadership, Trustees, Volunteers, Community Members",
  },
  "/events": {
    title: "Events & News | Hindu Suraksha",
    description: "Stay updated on upcoming Hindu unity gatherings, spiritual and cultural events, medical camps, and community relief activities.",
    keywords: "Hindu Suraksha Events, Community Programs, Hindu Unity Gatherings, Welfare Camps",
  },
  "/support-us": {
    title: "Support Us | Ways to Contribute to Hindu Suraksha",
    description: "Discover ways you can stand with Hindu Suraksha: ₹50 membership, child sponsorships, volunteer seva, and institutional CSR partnerships.",
    keywords: "Support Hindu Suraksha, Ways to Help, CSR Partnership, Hindu Dharma Seva",
  },
  "/contact": {
    title: "Contact Us & Grievance Redressal | Hindu Suraksha",
    description: "Get in touch with Hindu Suraksha headquarters, partnership desk, volunteer helpdesk, or grievance redressal.",
    keywords: "Contact Hindu Suraksha, Office Address, Phone Number, WhatsApp Support, Grievance Contact",
  },
  "/about/terms": {
    title: "Terms & Conditions | Hindu Suraksha",
    description: "Terms and conditions, statutory framework, and operational policies governing Hindu Suraksha membership and contributions.",
  },
  "/about/privacy": {
    title: "Privacy Policy | Hindu Suraksha",
    description: "Privacy policy, data protection, and confidentiality commitments for members and donors of Hindu Suraksha.",
  },
  "/about/refund": {
    title: "Refund Policy | Hindu Suraksha",
    description: "Official donation, membership, and transaction cancellation and refund policies of Hindu Suraksha.",
  },
  "/about/disclaimer": {
    title: "Disclaimer & Statutory Notice | Hindu Suraksha",
    description: "Statutory disclaimers, legal representations, and operational notices of Hindu Suraksha.",
  },
}

function updateMeta(name, attrName, value) {
  let el = document.querySelector(`meta[${attrName}="${name}"]`)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attrName, name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", value)
}

function updateLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export default function SEOUpdater() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Exact or matched path
    const meta = ROUTE_SEO[pathname] || {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESC,
      keywords: "Hindu Suraksha, Hindu Welfare, Protect Hindu Dharma, Seva, India",
    }

    const pageUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`

    // 1. Title
    document.title = meta.title

    // 2. Standard Meta Tags
    updateMeta("description", "name", meta.description)
    if (meta.keywords) {
      updateMeta("keywords", "name", meta.keywords)
    }

    // 3. Canonical Link
    updateLink("canonical", pageUrl)

    // 4. Open Graph Tags
    updateMeta("og:title", "property", meta.title)
    updateMeta("og:description", "property", meta.description)
    updateMeta("og:url", "property", pageUrl)
    updateMeta("og:type", "property", "website")
    updateMeta("og:image", "property", DEFAULT_IMAGE)
    updateMeta("og:site_name", "property", "Hindu Suraksha")
    updateMeta("og:locale", "property", "en_IN")

    // 5. Twitter Card Tags
    updateMeta("twitter:card", "property", "summary_large_image")
    updateMeta("twitter:title", "property", meta.title)
    updateMeta("twitter:description", "property", meta.description)
    updateMeta("twitter:url", "property", pageUrl)
    updateMeta("twitter:image", "property", DEFAULT_IMAGE)
  }, [pathname])

  return null
}

