/**
 * ============================================================
 *  PORTFOLIO CONFIG — Edit everything here.
 *  No need to touch index.html at all.
 * ============================================================
 */
window.PORTFOLIO_CONFIG = {

  /* ── PROFILE ─────────────────────────────────────── */
  profile: {
    name: "Divyangna Singh",
    firstName: "Divyangna",
    tagline: "Brand Identity & Visual Storytelling Designer",
    bio: "Hi! I am a Graphic Designer and Visual Artist with a love for clean aesthetics, expressive artwork, and meaningful design. I enjoy exploring branding, illustration, and creative concepts that bring ideas to life.\n\nMy goal is to create visual experiences that feel warm, thoughtful, and visually engaging — whether for a growing brand, a corporate team, or a personal project.",
    photo: "profile.jpg",          // Place your photo in the portfolio folder
    resumeFile: "resume.pdf",       // Place resume.pdf in the portfolio folder
    email: "divyangna.singh23@gmail.com",
    phone: "+91 8368589210",
    location: "India",
    availability: {
      fullTime: true,
      freelance: true,
      statusLabel: "Open to Full-time · Available for Freelance"
    }
  },

  /* ── SOCIAL LINKS ─────────────────────────────────── */
  socials: {
    behance:   "#",          // e.g. "https://www.behance.net/yourprofile"
    linkedin:  "https://www.linkedin.com/in/divyangna-singh14/",          // e.g. "https://www.linkedin.com/in/yourprofile"
    instagram: "#"           // e.g. "https://www.instagram.com/yourhandle"
  },

  /* ── STATS (count-up animation) ──────────────────── */
  stats: [
    { value: 10,  suffix: "+", label: "Projects Completed" },
    { value: 3,   suffix: "",  label: "Brands Built"       },
    { value: 1,   suffix: "",  label: "Internship"         },
    { value: 100, suffix: "%", label: "Passion Driven"     }
  ],

  /* ── MARQUEE ITEMS ───────────────────────────────── */
  marqueeItems: [
    "BRANDING", "ILLUSTRATION", "SOCIAL MEDIA",
    "VIDEO EDITING", "LOGO DESIGN", "VISUAL ART",
    "TYPOGRAPHY", "MOTION GRAPHICS"
  ],

  /* ── SERVICES ────────────────────────────────────── */
  services: [
    {
      icon: "✦",
      title: "Brand Identity",
      description: "Logo design, brand guidelines, colour systems, and visual language that give your brand a consistent, memorable presence."
    },
    {
      icon: "◈",
      title: "Illustration & Art",
      description: "Expressive illustrations, book covers, and original paintings that bring imagination and storytelling into every frame."
    },
    {
      icon: "◎",
      title: "Social Media Design",
      description: "Scroll-stopping posts, reels covers, and campaign assets tailored for Instagram, LinkedIn, and beyond."
    },
    {
      icon: "▶",
      title: "Video Editing",
      description: "Polished promotional videos, brand reels, and motion content — from raw footage to a cinematic final cut."
    }
  ],

  /* ── PROJECTS ────────────────────────────────────── */
  projects: [
    {
      id: "forevermarks",
      title: "Forevermarks",
      subtitle: "Brand Identity",
      category: "branding",
      image: "images/forevermarks.jpg",
      tags: ["Logo Design", "Brand Guidelines"],
      featured: true,
      process: {
        problem:  "Forevermarks needed a timeless identity that communicated permanence and elegance without feeling dated.",
        approach: "Explored typographic lockups and minimalist mark design. Iterated through three distinct directions before landing on a refined serif-meets-geometric solution.",
        outcome:  "Delivered complete brand identity including logo, colour palette, typography system, and brand usage guidelines."
      }
    },
    {
      id: "orangemonk",
      title: "Orangemonk",
      subtitle: "Brand Identity",
      category: "branding",
      image: "images/orangemonk.jpg",
      tags: ["Logo Design", "Visual Identity"],
      featured: true,
      process: {
        problem:  "Orangemonk required a bold, energetic identity that stood out in a crowded lifestyle market.",
        approach: "Developed playful yet professional visual language combining warm orange tones with clean modern typography.",
        outcome:  "A distinctive brand mark and supporting visual system ready for digital and print applications."
      }
    },
    {
      id: "pawzy",
      title: "Pawzy",
      subtitle: "Brand Identity",
      category: "branding",
      image: "images/pawzy.jpg",
      tags: ["Logo Design", "Illustration", "Branding"],
      featured: false,
      process: null
    },
    {
      id: "zesty",
      title: "Zesty",
      subtitle: "Personal Project",
      category: "illustration",
      image: "images/zesty.jpg",
      tags: ["Illustration", "Personal Project"],
      featured: false,
      process: null
    },
    {
      id: "posters",
      title: "Practice Posters",
      subtitle: "Personal Work",
      category: "illustration",
      image: "images/posters.jpg",
      tags: ["Poster Design", "Typography"],
      featured: false,
      process: null
    },
    {
      id: "internship-social",
      title: "Social Media Campaign",
      subtitle: "Internship Project",
      category: "social",
      image: "images/social-campaign.jpg",
      tags: ["Social Media", "Campaign", "Internship"],
      featured: true,
      process: {
        problem:  "The client needed a cohesive social media presence with consistent visuals across multiple platforms.",
        approach: "Designed a modular template system for Instagram posts and stories using brand colours, ensuring visual consistency and fast content production.",
        outcome:  "Delivered 20+ ready-to-use templates and a social media style guide adopted throughout the internship period."
      }
    },
    {
      id: "luxury-car-video",
      title: "Luxury Car Rental Promo",
      subtitle: "Video Editing",
      category: "video",
      image: "images/car-promo.jpg",
      tags: ["Video Editing", "Motion", "Advertising"],
      featured: false,
      process: null
    },
    {
      id: "illustrations",
      title: "Illustrations & Paintings",
      subtitle: "Visual Art",
      category: "illustration",
      image: "images/illustrations.jpg",
      tags: ["Illustration", "Painting", "Book Cover"],
      featured: false,
      process: null
    }
  ],

  /* ── EXPERIENCE & EDUCATION TIMELINE ─────────────── */
  timeline: [
    // type: "experience" | "education"
    {
        type: "experience",
        title: "Creative Designer",
        organisation: "IUS Digital Solutions",
        period: "Mar 2026 - Present",
        description: "Design high-quality social media creatives, static posts, and short-form video reels aligned with client brand identity and campaign objectives.\n\nDevelop UI/UX wireframes and prototypes to support client digital product initiatives, applying user-centered design principles.\n\nUtilize AI-assisted tools to accelerate ideation, content generation, and creative production workflows.\n\nCollaborate with clients to define visual direction and ensure consistency across all digital touchpoints.",
        tags: ["Social Media Design", "UI/UX", "Video Reels", "AI Tools", "Brand Identity"]
    },
    {
      type: "experience",
      title: "Graphic Design Intern",
      organisation: "Visco International Pvt. Ltd.",
      period: "Aug 2025 - Dec 2025",
      description: "Designed 20+ marketing creatives and visuals aligned with company guidelines and campaign objectives.\n\nFollowed brand guidelines for campaign assets, assisted with content ideas and market research, and used AI tools for concept generation.\n\nSupported onboarding of 3–4 client businesses through design deliverables and brand assets.",
      tags: ["Marketing Design", "Brand Guidelines", "AI Tools", "Content Strategy"]
    },
    {
      type: "education",
      title: "Korean Language Course",
      organisation: "Korean Cultural Centre India, New Delhi",
      period: "Feb 2023 – Apr 2025",
      description: "Focused on communication, reading and writing skills in the Korean language.",
      tags: ["Korean Language", "Communication"]
    },
    {
      type: "education",
      title: "Bachelor of Technology in Electrical and Electronics",
      organisation: "Lovely Professional University, Jalandhar, Punjab",
      period: "Jul 2015 – May 2019",
      description: "Applied analytical thinking and problem-solving skills to electrical and electronics design workflows and structured processes.",
      tags: ["Electrical Engineering", "Electronics", "Problem Solving"]
    }
    // Add more entries here — same structure ↑
  ],

  /* ── HERO TOOL LOGOS ─────────────────────────────── */
  heroTools: [
    { name: "Illustrator" },
    { name: "Photoshop" },
    { name: "Figma" },
    { name: "Canva" },
    { name: "After Effects" },
    { name: "Premiere Pro" },
    { name: "ChatGPT" },
    { name: "Gemini" },
    { name: "Claude" }
  ],

  /* ── SKILLS ──────────────────────────────────────── */
  skills: [
    { category: "Design Tools",         items: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva"] },
    { category: "Design Expertise",     items: ["Branding", "Typography", "Logo Design", "Color Theory", "Menu Design", "Visual Identity"] },
    { category: "UX & Digital",         items: ["Wireframing", "Prototyping", "User-Centered Design (in progress)"] },
    { category: "Marketing & Research", items: ["Social Media Design", "Marketing Research", "Content Design"] },
    { category: "AI & Productivity",    items: ["ChatGPT", "Gemini", "Claude"] },
    { category: "Languages",            items: ["English", "Hindi", "Korean (TOPIK 4)"] }
  ],

  /* ── TESTIMONIALS ─────────────────────────────────── */
  testimonials: [
    {
      quote: "Divyangna brought our brand vision to life with incredible precision and creativity. The final identity system exceeded every expectation.",
      name: "Client Name",           // ← Fill in
      role: "Founder",               // ← Fill in
      company: "Company Name"        // ← Fill in
    },
    {
      quote: "Working with Divyangna was seamless — she understood the brief instantly, communicated clearly throughout, and delivered stunning work on time.",
      name: "Client Name",           // ← Fill in
      role: "Marketing Manager",     // ← Fill in
      company: "Company Name"        // ← Fill in
    },
    {
      quote: "Her illustrations gave our publication a personality we didn't know it was missing. Truly gifted visual storyteller.",
      name: "Client Name",           // ← Fill in
      role: "Editor",                // ← Fill in
      company: "Publication Name"    // ← Fill in
    }
  ]

};
