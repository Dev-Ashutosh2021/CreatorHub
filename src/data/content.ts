import type { ContentItem, Creator } from "../types";

export const creator: Creator = {
  name: "Ashutosh Uniyal",
  role: "Creator educator for indie makers",
  bio: "I help creators turn everyday expertise into polished digital products, practical launch systems, and calm content workflows.",
  location: "Dehradun, India",
  profileImage:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=480&q=80",
  bannerImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "LinkedIn", href: "https://linkedin.com" }
  ]
};

export const contentItems: ContentItem[] = [
  {
    id: 1,
    title: "Creator Launch Blueprint",
    description:
      "A focused 14-day plan for validating, packaging, and launching your first paid digital product.",
    fullDescription:
      "Creator Launch Blueprint gives you the exact steps to pick an offer, validate it with a small audience, build a clean sales page, and run a simple launch without drowning in busywork. It includes checklists, swipe files, launch calendar templates, and examples you can adapt immediately.",
    price: 49,
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    category: "Course",
    tags: ["Launch", "Digital Products", "Strategy"],
    level: "Beginner"
  },
  {
    id: 2,
    title: "Notion Creator OS",
    description:
      "A complete workspace for planning content, tracking products, and managing creator operations.",
    fullDescription:
      "Notion Creator OS combines a content calendar, product roadmap, sponsorship tracker, analytics dashboard, and idea vault into one clean operating system. It is designed for creators who want one command center instead of scattered notes and spreadsheets.",
    price: 29,
    thumbnail:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    category: "Template",
    tags: ["Notion", "Planning", "Productivity"],
    level: "All levels"
  },
  {
    id: 3,
    title: "Short-Form Storytelling Lab",
    description:
      "Hands-on lessons for turning expertise into short videos that feel useful, natural, and memorable.",
    fullDescription:
      "Short-Form Storytelling Lab breaks down hooks, pacing, editing notes, and repeatable story formats for Reels, Shorts, and TikTok. You will learn how to create stronger educational videos without copying trends that do not fit your voice.",
    price: 79,
    thumbnail:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    category: "Workshop",
    tags: ["Video", "Storytelling", "Content"],
    level: "Intermediate"
  },
  {
    id: 4,
    title: "Pricing Digital Products",
    description:
      "A tactical guide to packaging value, testing prices, and improving offer clarity before launch.",
    fullDescription:
      "Pricing Digital Products helps you stop guessing and start making better offer decisions. It covers pricing psychology, tiers, bonuses, competitor research, and lightweight experiments that protect your time while improving conversion.",
    price: 19,
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    category: "Guide",
    tags: ["Pricing", "Offers", "Sales"],
    level: "Beginner"
  },
  {
    id: 5,
    title: "Email Funnel Starter Kit",
    description:
      "Ready-to-customize email sequences for welcoming subscribers and selling your first offer.",
    fullDescription:
      "Email Funnel Starter Kit includes welcome emails, launch sequences, cart close reminders, and segmentation prompts for small creator businesses. Each template comes with notes that explain when to send it and how to make it sound like you.",
    price: 39,
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    category: "Template",
    tags: ["Email", "Funnels", "Copywriting"],
    level: "Beginner"
  },
  {
    id: 6,
    title: "Brand Voice Sprint",
    description:
      "A guided workshop for defining your creator voice, messaging pillars, and content tone.",
    fullDescription:
      "Brand Voice Sprint helps creators clarify what they sound like online before they scale content output. You will define audience language, message pillars, proof points, and a repeatable tone guide for captions, newsletters, videos, and landing pages.",
    price: 69,
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    category: "Workshop",
    tags: ["Branding", "Messaging", "Content"],
    level: "Intermediate"
  },
  {
    id: 7,
    title: "Sponsorship Pitch Vault",
    description:
      "Pitch scripts, media kit prompts, and negotiation notes for landing better creator deals.",
    fullDescription:
      "Sponsorship Pitch Vault gives you clear outreach emails, follow-up templates, rate card guidance, and campaign recap formats. It is built for creators who want to approach brands with confidence and protect the value of their audience.",
    price: 35,
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    category: "Template",
    tags: ["Sponsorships", "Outreach", "Monetization"],
    level: "All levels"
  },
  {
    id: 8,
    title: "Audience Research Playbook",
    description:
      "Simple interview, survey, and analytics methods for understanding what your audience will buy.",
    fullDescription:
      "Audience Research Playbook shows you how to run lightweight audience interviews, write useful survey questions, read content signals, and turn messy notes into stronger offers. It is practical research for creators without a large team.",
    price: 25,
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    category: "Guide",
    tags: ["Research", "Audience", "Validation"],
    level: "Beginner"
  },
  {
    id: 9,
    title: "YouTube Channel Systems",
    description:
      "A practical course for planning episodes, improving retention, and building a repeatable workflow.",
    fullDescription:
      "YouTube Channel Systems covers topic selection, episode outlines, title testing, thumbnail planning, retention reviews, and production checklists. It is designed to help educational creators publish better videos with less weekly chaos.",
    price: 89,
    thumbnail:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    category: "Course",
    tags: ["YouTube", "Workflow", "Video"],
    level: "Intermediate"
  },
  {
    id: 10,
    title: "Community Launch Mini Course",
    description:
      "Learn how to plan, seed, and grow a small paid or free community with stronger member rituals.",
    fullDescription:
      "Community Launch Mini Course walks through positioning, member onboarding, weekly rituals, content prompts, moderation habits, and retention signals. It focuses on creating a community that feels useful before it becomes large.",
    price: 59,
    thumbnail:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    category: "Course",
    tags: ["Community", "Membership", "Retention"],
    level: "Intermediate"
  },
  {
    id: 11,
    title: "Analytics Dashboard Pack",
    description:
      "Spreadsheet dashboards for tracking content growth, revenue, experiments, and product launches.",
    fullDescription:
      "Analytics Dashboard Pack includes clean spreadsheets for weekly content metrics, funnel tracking, product revenue, sponsor pipeline, and experiment reviews. It helps creators see what is working without building a complex analytics stack.",
    price: 22,
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    category: "Template",
    tags: ["Analytics", "Spreadsheets", "Growth"],
    level: "All levels"
  },
  {
    id: 12,
    title: "Live Workshop Facilitation",
    description:
      "A concise guide for running workshops that keep people engaged and lead naturally to your offer.",
    fullDescription:
      "Live Workshop Facilitation teaches structure, pacing, interaction design, Q&A management, and closing techniques for creator-led sessions. It includes agenda templates, chat prompts, and post-workshop follow-up examples.",
    price: 45,
    thumbnail:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    previewImage:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    category: "Guide",
    tags: ["Workshops", "Teaching", "Sales"],
    level: "Advanced"
  }
];
