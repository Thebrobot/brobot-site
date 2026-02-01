import { motion } from "framer-motion";
import { ShieldCheck, Zap, LayoutDashboard, Star, MapPin, Globe, Activity } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-20 md:pt-32 border-t border-white/5 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-600/5 blur-[120px] pointer-events-none -z-10" />
      
      {/* Receding Grid Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] [transform:perspective(1000px)_rotateX(60deg)_translateY(50px)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Pill Stop Marker */}
        <div className="flex justify-center mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">End_Transmission_Station</span>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-24">
          {/* Column 1: Brand & Status */}
          <div className="space-y-8">
            <a href="/" className="block">
              <div className="relative h-10 md:h-12 w-40 md:w-48">
                <img 
                  src="/images/Brobot Lanscape Trans  (1).png" 
                  alt="Brobot" 
                  className="h-full w-full object-contain object-left"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
              The proprietary intelligence layer for autonomous business growth. Deploying high-bandwidth AI agents at scale.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-xl w-fit">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  System_Status: <span className="text-green-500">Optimal</span>
                </span>
              </div>
              <div className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest ml-1">
                Uptime: 99.99% | Latency: &lt; 250ms
              </div>
            </div>
          </div>

          {/* Column 2: Ecosystem */}
          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-[0.3em] mb-8 md:mb-10 flex items-center gap-2">
              <Zap className="w-3 h-3 text-amber-500" />
              Ecosystem_Nodes
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Brobot CRM", href: "/crm", icon: LayoutDashboard },
                { name: "Agent Broski (Voice)", href: "/conversational-ai", icon: Activity },
                { name: "iMapsPro (SEO)", href: "/local-seo", icon: MapPin },
                { name: "RevuBro (Trust)", href: "/reputation", icon: Star },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-amber-400 text-xs font-bold transition-all flex items-center gap-3 group">
                    <link.icon className="w-3.5 h-3.5 text-slate-700 group-hover:text-amber-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-[0.3em] mb-8 md:mb-10 flex items-center gap-2">
              <Globe className="w-3 h-3 text-amber-500" />
              Industry_Solutions
            </h4>
            <ul className="space-y-4">
              {[
                "Real Estate",
                "HVAC & Plumbing",
                "General Contractor",
                "Dentistry",
                "Legal & Finance",
              ].map((item) => (
                <li key={item}>
                  <a href="/industries" className="text-slate-500 hover:text-amber-400 text-xs font-bold transition-all block">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="/industries" className="text-amber-500 hover:text-amber-400 text-[10px] font-black uppercase tracking-widest pt-2 block">
                  View_All_Networks →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-[0.3em] mb-8 md:mb-10 flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-amber-500" />
              Core_Protocol
            </h4>
            <ul className="space-y-4">
              {[
                { name: "The Blog", href: "/blog" },
                { name: "System_Support", href: "#" },
                { name: "Log In", href: "https://app.thebrobot.com" },
                { name: "Privacy_Protocol", href: "#" },
                { name: "Terms_of_Service", href: "#" },
                { name: "Contact_Sales", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-500 hover:text-amber-400 text-xs font-bold transition-all block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Footer Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-600 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-center md:text-left">
            © {currentYear} BROBOT MEDIA. <span className="text-slate-800 mx-2 hidden md:inline">|</span> <br className="md:hidden" /> COORDINATES: 34.0522° N, 118.2437° W
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-amber-500" />
              <span className="text-slate-500 text-[9px] font-black uppercase tracking-[0.3em]">[Global_Release_v2.0.4]</span>
            </div>
            <div className="text-slate-700 text-[9px] font-mono">
              ENCRYPTION_LEVEL: AES-256
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
