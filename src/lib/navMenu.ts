export type NavMenuLink = { name: string; href: string };

/** In-page nav links shown on md+ (mirrors legacy React Navbar). */
export function getMenuLinksForPath(pathname: string): NavMenuLink[] {
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return [
      { name: "All posts", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ];
  }
  if (pathname.startsWith("/industries/")) {
    return [
      { name: "The Problem", href: "#workflow" },
      { name: "Solution", href: "#playbook" },
      { name: "Live Demo", href: "#demo" },
    ];
  }
  switch (pathname) {
    case "/industries":
      return [
        { name: "Browse Agents", href: "#directory" },
        { name: "Build Custom", href: "#custom" },
      ];
    case "/conversational-ai":
      return [
        { name: "Simulation", href: "#voice" },
        { name: "Features", href: "#features" },
        { name: "System", href: "#automation" },
      ];
    case "/local-seo":
      return [
        { name: "Importance", href: "#importance" },
        { name: "Management", href: "#management" },
        { name: "Analytics", href: "#analytics" },
      ];
    case "/reputation":
      return [
        { name: "Reviews", href: "#reviews" },
        { name: "Calculator", href: "#calculator" },
        { name: "Trust", href: "#differentiation" },
      ];
    case "/crm":
      return [
        { name: "Features", href: "#platform" },
        { name: "Why CRM", href: "#value" },
        { name: "ROI Impact", href: "#savings" },
      ];
    case "/ai-phone-crm":
      return [
        { name: "What You Get", href: "#what-you-get" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Bring Your Number", href: "#byon" },
      ];
    case "/contact":
      return [{ name: "Form", href: "#contact-form" }];
    case "/privacy":
    case "/terms":
      return [{ name: "Home", href: "/" }];
    default:
      return [
        { name: "The Engine", href: "#automation" },
        { name: "Live Voice", href: "#voice" },
        { name: "ROI", href: "#conversion" },
      ];
  }
}

export type NavSystemIcon = "layout" | "phone" | "zap" | "map" | "star";

export type NavSystem = {
  name: string;
  href: string;
  desc: string;
  color: string;
  iconColor: string;
  image?: string;
  icon?: NavSystemIcon;
};

export const NAV_SYSTEMS: NavSystem[] = [
  {
    name: "Brobot",
    href: "/",
    desc: "HOME",
    color: "bg-neutral-950",
    iconColor: "text-white",
    image: "/images/favicon-nav.webp",
  },
  {
    name: "Brobot One",
    href: "/ai-phone-crm",
    desc: "Desk phone & VoIP",
    color: "bg-cyan-500",
    iconColor: "text-white",
    icon: "phone",
  },
  {
    name: "Brobot CRM",
    href: "/crm",
    desc: "COMMAND CENTER",
    color: "bg-indigo-600",
    iconColor: "text-white",
    icon: "layout",
  },
  {
    name: "Agent Broski",
    href: "/conversational-ai",
    desc: "AI SALES AGENT",
    color: "bg-cyan-500",
    iconColor: "text-white",
    image: "/images/agent-broski-logo.webp",
  },
  {
    name: "iMapsPro",
    href: "/local-seo",
    desc: "LOCAL SEO MAPS",
    color: "bg-emerald-500",
    iconColor: "text-white",
    icon: "map",
  },
  {
    name: "RevuBro",
    href: "/reputation",
    desc: "REVIEW AUTOMATION",
    color: "bg-emerald-500",
    iconColor: "text-white",
    icon: "star",
  },
];
