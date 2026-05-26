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
    // {
    //   id: "preview-dummy",
    //   title: "Aurora Brand System",
    //   subtitle: "Full Brand Identity · UI Design",
    //   category: "branding",
    //   image: "https://picsum.photos/seed/aurora-hero/900/600",
    //   tags: ["Brand Identity", "Logo Design", "UI Design", "Typography"],
    //   featured: true,
    //   description: "Aurora is a conceptual wellness brand built around the science of light and circadian rhythm. The brief called for a system that felt premium yet approachable — something that could live on packaging, digital surfaces, and motion without losing coherence. The challenge was translating an abstract concept (the aurora borealis) into a design language grounded in warmth and clarity.",
    //   colors: [
    //     { hex: "#0D0D1A", name: "Deep Night"   },
    //     { hex: "#3B2F8F", name: "Indigo Core"  },
    //     { hex: "#7B5EA7", name: "Dusk Violet"  },
    //     { hex: "#E8A87C", name: "Amber Glow"   },
    //     { hex: "#F4EFE6", name: "Warm Ivory"   }
    //   ],
    //   figmaUrl: "https://www.figma.com/community/file/768989692441075977",
    //   gallery: [
    //     "https://picsum.photos/seed/aurora-g1/700/525",
    //     "https://picsum.photos/seed/aurora-g2/700/525",
    //     "https://picsum.photos/seed/aurora-g3/700/525",
    //     "https://picsum.photos/seed/aurora-g4/700/525",
    //     "https://picsum.photos/seed/aurora-g5/700/525",
    //     "https://picsum.photos/seed/aurora-g6/700/525"
    //   ],
    //   process: {
    //     problem:  "The client needed a brand that felt simultaneously scientific and emotionally resonant — credible in the wellness space without defaulting to cold clinical aesthetics.",
    //     approach: "Started with a deep colour exploration rooted in the actual spectral data of aurora phenomena. Typography was chosen to balance editorial elegance with functional legibility across packaging and app UI. Three logo directions were prototyped in Figma, tested at multiple scales.",
    //     outcome:  "A fully documented brand system: logo suite, colour tokens, type hierarchy, iconography, and a component library with 40+ UI elements ready for handoff to developers."
    //   }
    // },
    {
      id: "forevermarks",
      title: "Forevermarks",
      subtitle: "Brand Identity",
      category: "branding",
      image: "assets/forevermarks/fm logo1.png",
      tags: ["Logo Design", "Brand Guidelines"],
      featured: true,
      description: "A complete brand identity for Forevermarks — built around the idea that great design, like great memories, lasts forever. The goal was timeless elegance without feeling dated.",
      colors: [
        { hex: "#1A1A1A", name: "Obsidian" },
        { hex: "#C9A96E", name: "Gold Dust" },
        { hex: "#F5F0E8", name: "Ivory" },
        { hex: "#6B5C4E", name: "Warm Brown" }
      ],
      figmaUrl: "",   // paste Figma share URL here to embed designs
      gallery: [
        "assets/forevermarks/fm logo1.png",
        "assets/forevermarks/fm logo2.png",
        "assets/forevermarks/fm logo 3 circle.png"
      ],
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
      image: "assets/orangemonk/THEORANGEMONK- logotype 2 color white bg.png",
      tags: ["Logo Design", "Visual Identity"],
      featured: true,
      description: "A bold, energetic brand identity for Orangemonk — a lifestyle brand that needed to stand out in a crowded market with personality and warmth.",
      colors: [
        { hex: "#FF6B1A", name: "Monk Orange" },
        { hex: "#1A1A1A", name: "Deep Black" },
        { hex: "#FFF8F2", name: "Warm White" },
        { hex: "#FFD4B0", name: "Peach Glow" }
      ],
      figmaUrl: "",
      gallery: [
        "assets/orangemonk/THEORANGEMONKicon color .png",
        "assets/orangemonk/THEORANGEMONK- logotype 2 color white bg.png",
        "assets/orangemonk/THEORANGEMONK- logotype b&w white bg.png",
        "assets/orangemonk/THEORANGEMONKlogo vertical color.png"
      ],
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
      image: "assets/pawzy/pawzy mockup.png",
      tags: ["Logo Design", "Illustration", "Branding"],
      featured: false,
      description: "A friendly, playful brand identity for a pet-care brand — designed to feel warm, trustworthy, and full of personality.",
      colors: [
        { hex: "#F4845F", name: "Playful Coral" },
        { hex: "#FDEBD0", name: "Soft Peach" },
        { hex: "#2C3E50", name: "Midnight" },
        { hex: "#A8D8A8", name: "Sage Green" }
      ],
      figmaUrl: "",
      gallery: [
        "assets/pawzy/pawzypawzy.png",
        "assets/pawzy/pawzy mockup.png",
        "assets/pawzy/pawzy mockup2.png",
        "assets/pawzy/pawzy packaging mockup.png",
        "assets/pawzy/pawzy ui mobile.png",
        "assets/pawzy/tote bag pawzy 1.png",
        "assets/pawzy/tote bag pawzy 2.png"
      ],
      process: null
    },
    {
      id: "zesty",
      title: "Zesty",
      subtitle: "Personal Project",
      category: "illustration",
      image: "assets/zesty/1.png",
      tags: ["Illustration", "Personal Project"],
      featured: false,
      description: "A personal illustration project exploring vibrant, citrus-inspired artwork with a focus on expressive colour and bold compositions.",
      colors: [
        { hex: "#FFD700", name: "Zest Yellow" },
        { hex: "#FF6347", name: "Tomato" },
        { hex: "#32CD32", name: "Lime" },
        { hex: "#FFFFFF", name: "Clean White" }
      ],
      figmaUrl: "",
      gallery: [
        "assets/zesty/1.png",
        "assets/zesty/2.png",
        "assets/zesty/3.png",
        "assets/zesty/5.png"
      ],
      process: null
    },
    {
      id: "posters",
      title: "Practice Posters",
      subtitle: "Personal Work",
      category: "illustration",
      image: "assets/posters/poster2.jpg",
      tags: ["Poster Design", "Typography"],
      featured: false,
      description: "A collection of typographic and conceptual poster designs created to sharpen layout, hierarchy, and visual communication skills.",
      colors: [],
      figmaUrl: "",
      gallery: [
        "assets/posters/Poster.jpg",
        "assets/posters/poster2.jpg",
        "assets/posters/poster.png",
        "assets/posters/Kpop Poster.png",
        "assets/posters/Double Exposure(movie poster).jpg",
        "assets/posters/MOMO AD POSTER.png"
      ],
      process: null
    },
    {
      id: "internship-social",
      title: "Social Media Campaign",
      subtitle: "Internship Project",
      category: "social",
      image: "assets/internship-social/AAGRBT0C7xk_1761744445968.png",
      tags: ["Social Media", "Campaign", "Internship"],
      featured: true,
      description: "A modular social media campaign system designed during my internship at Visco International — enabling fast, consistent content production across platforms.",
      colors: [
        { hex: "#0F3460", name: "Brand Navy" },
        { hex: "#E94560", name: "Accent Red" },
        { hex: "#FFFFFF", name: "White" },
        { hex: "#F5F5F5", name: "Light Grey" }
      ],
      figmaUrl: "",
      gallery: [
        "assets/internship-social/AAGRBT0C7xk_1761744445968.png"
      ],
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
      image: "assets/PromoVideo.mp4",
      tags: ["Video Editing", "Motion", "Advertising"],
      featured: false,
      description: "A cinematic promotional video for a luxury car rental brand — edited to convey speed, elegance, and premium feel.",
      colors: [
        { hex: "#0D0D0D", name: "Pitch Black" },
        { hex: "#C0A060", name: "Gold" },
        { hex: "#FFFFFF", name: "White" }
      ],
      figmaUrl: "",
      gallery: [],
      process: null
    },
    {
      id: "illustrations",
      title: "Illustrations & Paintings",
      subtitle: "Visual Art",
      category: "illustration",
      image: "assets/illustrations/Whale novel poster or book cover.png",
      tags: ["Illustration", "Painting", "Book Cover"],
      featured: false,
      description: "A collection of original illustrations and paintings spanning book covers, character concepts, and expressive visual art created in Procreate and Photoshop.",
      colors: [],
      figmaUrl: "",
      gallery: [
        "assets/illustrations/Whale novel poster or book cover.png",
        "assets/illustrations/Artboard 1.png",
        "assets/illustrations/kiransid.png",
        "assets/illustrations/WhatsApp Image 2025-11-07 at 00.05.27_b99c1239.jpg",
        "assets/illustrations/WhatsApp Image 2025-11-07 at 00.05.27_c8e61629.jpg",
        "assets/illustrations/WhatsApp Image 2025-11-07 at 00.05.27_31f4bc4e.jpg",
        "assets/illustrations/WhatsApp Image 2025-11-07 at 00.05.29_b529b430.jpg",
        "assets/illustrations/WhatsApp Image 2025-11-07 at 00.07.56_c6213cd0.jpg",
        "assets/illustrations/WhatsApp Image 2025-11-07 at 00.07.56_cf47cb1d.jpg"
      ],
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
    // {
    //   quote: "Divyangna brought our brand vision to life with incredible precision and creativity. The final identity system exceeded every expectation.",
    //   name: "Client Name",           // ← Fill in
    //   role: "Founder",               // ← Fill in
    //   company: "Company Name"        // ← Fill in
    // }
  ]

};
