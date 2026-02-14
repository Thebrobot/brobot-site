import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { ChevronDown, Zap, MapPin, Star, LayoutDashboard, Command, ArrowRight, Phone } from "lucide-react";

interface NavbarProps {
  pathname?: string;
}

export default function Navbar({ pathname = "/" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHubOpen, setIsHubOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const systems = [
    { name: "Brobot", href: "/", icon: LayoutDashboard, image: "/images/favicon.png", desc: "MAIN ECOSYSTEM", color: "bg-neutral-950", iconColor: "text-white" },
    { name: "Brobot One", href: "/ai-phone-crm", icon: Phone, desc: "AI desk phone + CRM", color: "bg-emerald-500", iconColor: "text-white" },
    { name: "Brobot CRM", href: "/crm", icon: LayoutDashboard, desc: "COMMAND CENTER", color: "bg-indigo-600", iconColor: "text-white" },
    { name: "Agent Broski", href: "/conversational-ai", icon: Zap, image: "/images/agent-broski-logo.png", desc: "AI SALES AGENT", color: "bg-cyan-500", iconColor: "text-white" },
    { name: "iMapsPro", href: "/local-seo", icon: MapPin, desc: "LOCAL SEO MAPS", color: "bg-emerald-500", iconColor: "text-white" },
    { name: "RevuBro", href: "/reputation", icon: Star, desc: "REVIEW AUTOMATION", color: "bg-emerald-500", iconColor: "text-white" },
  ];

  // Find the current system based on pathname, default to Brobot CRM for home
  const currentSystem = systems.find(sys => sys.href === pathname) || systems[0];

  // Dynamic menu links based on current page
  const getMenuLinks = () => {
    // Check if we're on an industry page
    if (pathname?.startsWith("/industries/")) {
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
      default: // Home page or fallback
        return [
          { name: "The Engine", href: "#automation" },
          { name: "Live Voice", href: "#voice" },
          { name: "ROI", href: "#conversion" },
        ];
    }
  };

  const menuLinks = getMenuLinks();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-8 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "cyber-glass px-3 md:px-8 py-2 md:py-3 rounded-full flex items-center justify-between gap-3 md:gap-8 pointer-events-auto transition-all duration-500",
          "shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_1px_rgba(255,255,255,0.1)_inset]",
          "border border-white/20",
          pathname === "/ai-phone-crm" ? (isScrolled ? "bg-[#020617] translate-y-2" : "bg-[#020617]") : isScrolled ? "bg-[#020617]/95 backdrop-blur-2xl translate-y-2" : "bg-[#020617]/80 backdrop-blur-xl"
        )}
      >
        {/* Hub / Logo Area */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHubOpen(true)}
          onMouseLeave={() => setIsHubOpen(false)}
          onClick={() => setIsHubOpen(!isHubOpen)}
        >
          <div className="flex items-center gap-2 md:gap-3 group px-3 md:px-5 py-2 md:py-3 cursor-pointer bg-white/10 rounded-full border border-white/5 backdrop-blur-md transition-all hover:bg-white/20">
            <motion.div 
              animate={{ 
                scale: [1, 1.03, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className={cn(
                "w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 relative flex-shrink-0",
                currentSystem.image ? "" : currentSystem.color
              )}
            >
              {currentSystem.image ? (
                <img 
                  src={currentSystem.image} 
                  alt={currentSystem.name} 
                  className="w-full h-full object-contain"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <currentSystem.icon className={cn("w-4 h-4 md:w-5 md:h-5", currentSystem.iconColor)} />
              )}
            </motion.div>
            <div className="flex flex-col justify-center">
              <div className="text-xs md:text-sm font-black text-white tracking-wider leading-none">
                {currentSystem.name}
              </div>
              <div className="text-[8px] md:text-[9px] text-white font-bold uppercase tracking-tight leading-none mt-1">
                {currentSystem.desc}
              </div>
            </div>
            <ChevronDown className={cn("w-3 h-3 md:w-4 md:h-4 text-white transition-transform duration-300 ml-1", isHubOpen && "rotate-180")} />
          </div>

          <AnimatePresence>
            {isHubOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  className="absolute top-full left-0 mt-1 w-64 md:w-72 bg-white rounded-[24px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-neutral-200 z-50 overflow-hidden"
                >
                  <div className="flex flex-col text-left">
                    <div className="px-3 py-2 mb-2">
                      <div className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">
                        Switch Product
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {systems.map((sys) => {
                        const isActive = pathname === sys.href;
                        return (
                          <a 
                            key={sys.name} 
                            href={sys.href}
                            className={cn(
                              "flex items-center gap-3 p-3 rounded-2xl transition-all group relative overflow-hidden",
                              isActive ? "bg-neutral-50" : "hover:bg-neutral-50"
                            )}
                          >
                            <div className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm relative overflow-hidden",
                              sys.image ? "" : sys.color
                            )}>
                              {sys.image ? (
                                <img 
                                  src={sys.image} 
                                  alt={sys.name} 
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <sys.icon className={cn("w-5 h-5", sys.iconColor)} />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-black text-neutral-900 tracking-wider truncate">
                                {sys.name}
                              </div>
                              <div className="text-[10px] text-neutral-900 font-bold uppercase tracking-tight truncate">
                                {isActive ? "Currently Viewing" : sys.desc}
                              </div>
                            </div>
                            {isActive && (
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                            )}
                          </a>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-neutral-100 px-1">
                      <a 
                        href="/blog"
                        className="flex items-center gap-3 p-3 rounded-2xl hover:bg-neutral-50 transition-all group mb-2"
                      >
                        <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center transition-all shadow-sm">
                          <span className="text-lg">📰</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] font-black text-neutral-900 tracking-wider truncate">
                            Blog & Insights
                          </div>
                          <div className="text-[10px] text-neutral-900 font-bold uppercase tracking-tight truncate">
                            Latest Updates
                          </div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                      </a>

                      <a 
                        href="/industries"
                        className="flex items-center justify-between p-3 rounded-2xl bg-amber-600 text-white hover:bg-amber-500 transition-all shadow-lg shadow-amber-600/20 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                            <Command className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-[12px] font-black uppercase tracking-wider">
                            Industry Solutions
                          </div>
                        </div>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-white">
          {menuLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors group"
              title={link.href.startsWith('#') ? `Jump to ${link.name} section` : undefined}
            >
              {link.name}
              {link.href.startsWith('#') && (
                <ChevronDown className="w-2.5 h-2.5 opacity-60 group-hover:translate-y-0.5 transition-transform duration-300" />
              )}
            </a>
          ))}
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <a 
            href="https://app.thebrobot.com" 
            className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-white hover:text-white transition-colors px-2"
          >
            Log In
          </a>
          <a 
            href="/contact" 
            className="bg-amber-600 hover:bg-amber-500 transition-all text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)]"
          >
            <span className="hidden sm:inline">Book Demo</span>
            <span className="sm:hidden">Book</span>
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
