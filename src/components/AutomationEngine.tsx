import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Star, MapPin, Cpu, Zap, Activity, ArrowRight } from "lucide-react";

// Left column tiles (2)
const leftTiles = [
  {
    id: "broski",
    title: "AGENT BROSKI",
    desc: "Talks & texts like a human. Qualifies inquiries 24/7. Books meetings for you.",
    href: "/conversational-ai",
    icon: "broski" as const,
    color: "cyan" as const,
    stats: [{ label: "Latency", value: "< 250ms" }, { label: "Uptime", value: "100%" }],
  },
  {
    id: "revubro",
    title: "REVUBRO",
    desc: "Automate Google reviews. Convert satisfied customers. Build 5-star authority.",
    href: "/reputation",
    icon: "star" as const,
    color: "emerald" as const,
    stats: [{ label: "Trust Index", value: "88% ALPHA" }],
  },
];

// Brobot One - positioned above brain in center
const brobotOneTile = {
  id: "brobot-one",
  title: "BROBOT ONE",
  desc: "AI-powered desk phone system that transforms your business number into a smart communication hub.",
  href: "/ai-phone-crm",
  icon: "phone" as const,
  color: "emerald" as const,
  stats: [{ label: "Go Live", value: "~7 days" }, { label: "Mobile App", value: "Yes" }],
};

// Right column tiles (2)
const rightTiles = [
  {
    id: "crm",
    title: "BROBOT CRM",
    desc: "Smart CRM scheduling. Sync appointments. Automate follow-up sequences.",
    href: "/crm",
    icon: "crm" as const,
    color: "indigo" as const,
    stats: [] as { label: string; value: string }[],
  },
  {
    id: "imapspro",
    title: "IMAPSPRO",
    desc: "Apple Maps dominance. Untapped premium traffic. Own the local market.",
    href: "/local-seo",
    icon: "map" as const,
    color: "emerald" as const,
    stats: [{ label: "Rank", value: "#1 SPOT" }, { label: "Visibility", value: "+140%" }],
  },
];

const allTiles = [...leftTiles, brobotOneTile, ...rightTiles];

const VIEW_W = 900;
const VIEW_H = 600;

function getCurvedArms(
  brainX: number,
  brainY: number,
  tiles: { x: number; y: number }[]
): string[] {
  const curveOffset = 50;
  return tiles.map((t, i) => {
    const tx = t.x;
    const ty = t.y;
    const dx = tx - brainX;
    const dy = ty - brainY;
    const c1x = brainX + dx * 0.3 + (i === 0 ? -curveOffset : i === 3 ? curveOffset : 0);
    const c1y = brainY + dy * 0.3;
    const c2x = brainX + dx * 0.7 + (i === 0 ? -curveOffset * 0.6 : i === 3 ? curveOffset * 0.6 : 0);
    const c2y = brainY + dy * 0.7;
    return `M ${brainX} ${brainY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${tx} ${ty}`;
  });
}

function EcosystemTile({
  tile,
  index,
  side,
}: {
  tile: (typeof allTiles)[0];
  index: number;
  side: "left" | "right" | "above";
}) {
  const colorClasses: Record<string, string> = {
    cyan: "cyber-glass hover:border-cyan-500/30 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.4)]",
    emerald: "cyber-glass hover:border-emerald-500/30 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)]",
    indigo: "cyber-glass hover:border-indigo-500/30 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)]",
  };
  const hoverGlowClasses: Record<string, string> = {
    cyan: "group-hover:bg-cyan-500/5",
    emerald: "group-hover:bg-emerald-500/5",
    indigo: "group-hover:bg-indigo-500/5",
  };
  const iconBgClasses: Record<string, string> = {
    cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40",
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40",
    indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40",
  };
  const learnMoreClasses: Record<string, string> = {
    cyan: "text-cyan-500",
    emerald: "text-emerald-500",
    indigo: "text-indigo-400",
  };

  return (
    <motion.a
      href={tile.href}
      initial={{ opacity: 0, x: side === "left" ? -20 : side === "right" ? 20 : 0, y: side === "above" ? -20 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, x: side === "left" ? 8 : side === "right" ? -8 : 0, y: side === "above" ? 4 : 0 }}
      className={`block cyber-glass p-6 md:p-8 rounded-3xl md:rounded-[32px] neon-border group relative transition-all cursor-pointer overflow-hidden ${colorClasses[tile.color]}`}
    >
      <div className={`absolute inset-0 bg-transparent transition-all duration-300 pointer-events-none rounded-3xl md:rounded-[32px] ${hoverGlowClasses[tile.color]}`} />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl border flex items-center justify-center transition-all ${iconBgClasses[tile.color]}`}>
            {tile.icon === "broski" && <img src="/images/agent-broski-logo.png" alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain" />}
            {tile.icon === "phone" && <Phone className="w-6 h-6 md:w-7 md:h-7" />}
            {tile.icon === "star" && <Star className="w-6 h-6 md:w-7 md:h-7" />}
            {tile.icon === "crm" && <img src="/images/favicon.png" alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain" />}
            {tile.icon === "map" && <MapPin className="w-6 h-6 md:w-7 md:h-7" />}
          </div>
          <div className="flex items-center gap-1.5 text-green-400 font-mono text-[9px] font-bold">
            <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
            LIVE
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight font-display italic">{tile.title}</h3>
        <p className="text-white text-sm font-medium leading-relaxed mb-6">{tile.desc}</p>
        {tile.stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mb-4">
            {tile.stats.map((s) => (
              <div key={s.label}>
                <div className="text-[9px] font-black text-slate-600 uppercase mb-1">{s.label}</div>
                <div className="text-base md:text-lg font-bold text-white font-mono">{s.value}</div>
              </div>
            ))}
          </div>
        )}
        {tile.id === "crm" && (
          <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-wider mb-4">
            <Activity className="w-4 h-4 animate-bounce" />
            DATA_SYNC_ACTIVE_SYNCING...
          </div>
        )}
        <div className={`flex items-center gap-2 ${learnMoreClasses[tile.color]} text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all`}>
          <span>Learn More</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}

export default function AutomationEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);
  const tileRefs = [
    useRef<HTMLDivElement>(null), // Agent Broski
    useRef<HTMLDivElement>(null), // RevuBro
    useRef<HTMLDivElement>(null), // Brobot One
    useRef<HTMLDivElement>(null), // Brobot CRM
    useRef<HTMLDivElement>(null), // iMapsPro
  ];
  const [brainOrigin, setBrainOrigin] = useState({ x: 450, y: 300 });
  const [tilePositions, setTilePositions] = useState<{ x: number; y: number }[]>([
    { x: 300, y: 140 },
    { x: 300, y: 460 },
    { x: 450, y: 80 },
    { x: 600, y: 180 },
    { x: 600, y: 460 },
  ]);

  useEffect(() => {
    const updatePositions = () => {
      const container = containerRef.current;
      const brain = brainRef.current;
      if (!container) return;
      const cr = container.getBoundingClientRect();
      const positions: { x: number; y: number }[] = [];
      if (brain) {
        const br = brain.getBoundingClientRect();
        const brainCenterX = br.left + br.width / 2 - cr.left;
        const brainCenterY = br.top + br.height / 2 - cr.top;
        setBrainOrigin({
          x: (brainCenterX / cr.width) * VIEW_W,
          y: (brainCenterY / cr.height) * VIEW_H,
        });
      }
      tileRefs.forEach((ref) => {
        const el = ref.current;
        if (!el) {
          positions.push({ x: 0, y: 0 });
          return;
        }
        const tr = el.getBoundingClientRect();
        const centerX = tr.left + tr.width / 2 - cr.left;
        const centerY = tr.top + tr.height / 2 - cr.top;
        positions.push({
          x: (centerX / cr.width) * VIEW_W,
          y: (centerY / cr.height) * VIEW_H,
        });
      });
      if (positions.length === 5) setTilePositions(positions);
    };
    updatePositions();
    const ro = new ResizeObserver(updatePositions);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updatePositions);
    const t1 = setTimeout(updatePositions, 100);
    const t2 = setTimeout(updatePositions, 500);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePositions);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const curvedArms = getCurvedArms(brainOrigin.x, brainOrigin.y, tilePositions);

  return (
    <section id="automation" className="relative py-24 md:py-40 px-4 bg-[#020617] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-amber-500 font-black text-[10px] uppercase tracking-[0.5em]"
          >
            System Architecture
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter text-white">
            THE <span className="text-amber-500 italic">AUTOMATION</span> ENGINE
          </h2>
          <p className="max-w-2xl mx-auto text-white text-xl md:text-2xl font-medium leading-relaxed px-4">
            A proprietary central intelligence layer that handles the complexity of growth while you focus on the vision.
          </p>
        </div>

        {/* Original 3-column layout: Left | Brain (center) | Right */}
        <div ref={containerRef} className="relative min-h-[600px]">
          {/* Overlay SVG: arms originate from measured brain center */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="none">
            {curvedArms.map((path, i) => (
              <g key={i}>
                <path d={path} fill="none" stroke="white" strokeWidth="1" className="opacity-[0.15]" />
                <path d={path} fill="none" stroke="#f59e0b" strokeWidth="2" className="animate-beam" style={{ animationDelay: `${-i * 0.6}s` }} />
              </g>
            ))}
          </svg>
          <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24 z-10">
          {/* Left Column */}
          <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
            {leftTiles.map((tile, i) => (
              <div key={tile.id} ref={tileRefs[i]}>
                <EcosystemTile tile={tile} index={i} side="left" />
              </div>
            ))}
          </div>

          {/* Center - Brobot One above brain, curved arms (receiving info from tiles) */}
          <div className="relative flex flex-col items-center justify-center order-1 lg:order-2 py-8 md:py-16 lg:py-0 gap-6 lg:gap-8">
            {/* Brobot One - directly above brain */}
            <div ref={tileRefs[2]} className="w-full max-w-md">
              <EcosystemTile tile={brobotOneTile} index={0} side="above" />
            </div>
            <div className="relative w-full h-80 md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[450px] flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <radialGradient id="center-glow">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>

                {/* Center core - brain as centerpiece (arms are in overlay SVG above) */}
                <g transform="translate(300, 300)">
                  <circle r="100" fill="url(#center-glow)" className="opacity-90" />
                  <circle fill="none" stroke="#f59e0b" strokeWidth="1.5">
                    <animate attributeName="r" from="20" to="85" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle fill="none" stroke="#f59e0b" strokeWidth="1.5">
                    <animate attributeName="r" from="20" to="85" dur="3s" begin="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  <circle r="55" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="10 20" className="animate-spin-slow" style={{ transformOrigin: "center" }} />
                  <circle r="10" fill="#0A0A0A" stroke="#f59e0b" strokeWidth="2.5" />
                  <circle r="5" fill="#f59e0b" className="animate-pulse-fast" />
                </g>
              </svg>

              {/* Brain icon - centerpiece (ref for arm origin alignment) */}
              <div ref={brainRef} className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                <motion.div
                  className="flex items-center justify-center"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    className="text-amber-400 w-16 h-16 md:w-24 md:h-24"
                    style={{ strokeWidth: "1.5", fillOpacity: 0.6, filter: "drop-shadow(0 0 50px rgba(245,158,11,0.9))" }}
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 md:space-y-12 order-3">
            {rightTiles.map((tile, i) => (
              <div key={tile.id} ref={tileRefs[3 + i]}>
                <EcosystemTile tile={tile} index={i} side="right" />
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Mobile stacked layout */}
        <div className="lg:hidden mt-12 space-y-6">
          {allTiles.map((tile, i) => (
            <motion.a
              key={tile.id}
              href={tile.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="block cyber-glass p-6 rounded-2xl neon-border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  {tile.icon === "broski" && <img src="/images/agent-broski-logo.png" alt="" className="w-6 h-6 object-contain" />}
                  {tile.icon === "phone" && <Phone className="w-6 h-6" />}
                  {tile.icon === "star" && <Star className="w-6 h-6" />}
                  {tile.icon === "crm" && <img src="/images/favicon.png" alt="" className="w-6 h-6 object-contain" />}
                  {tile.icon === "map" && <MapPin className="w-6 h-6" />}
                </div>
                <ArrowRight className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-lg font-black text-white mb-2 font-display italic">{tile.title}</h3>
              <p className="text-white text-sm font-medium leading-relaxed">{tile.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Bundle Advantage */}
        <div className="mt-16 md:mt-24">
          <div className="cyber-glass border border-white/5 bg-white/[0.02] rounded-[32px] md:rounded-[48px] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-600/10 blur-[120px] rounded-full" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 text-amber-500">
                <Cpu className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Front_Office_Suite</span>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-12 items-start">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white leading-[0.95]">
                    BUY THE <span className="text-amber-500 italic">LOOP</span>,<br />
                    NOT PIECES.
                  </h3>
                  <p className="mt-4 text-white text-base md:text-xl font-medium leading-relaxed max-w-xl">
                    Agent Broski is the entry point, but the compounding ROI comes from connecting the whole system: capture the lead, book the job, follow up, earn reviews, and win the map.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">One Setup</div>
                    <div className="text-lg md:text-xl text-white font-black tracking-tight">Single install</div>
                    <div className="mt-2 text-white text-base font-medium leading-relaxed">
                      Phone + calendar + CRM + reputation + maps, wired together.
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">One Loop</div>
                    <div className="text-lg md:text-xl text-white font-black tracking-tight">No leaks</div>
                    <div className="mt-2 text-white text-base font-medium leading-relaxed">
                      Every call becomes a booked outcome and a trackable record.
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">Compounds</div>
                    <div className="text-lg md:text-xl text-white font-black tracking-tight">Gets stronger</div>
                    <div className="mt-2 text-white text-base font-medium leading-relaxed">
                      More reviews increase conversion and improve local visibility.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <a
                  href="/contact"
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 transition-all text-white px-10 md:px-12 py-5 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm md:text-base shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)] hover:scale-105 text-center"
                >
                  Book Your Demo
                </a>
                <a
                  href="#voice"
                  className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm md:text-base border border-white/10 hover:bg-white/5 transition-all text-center text-white"
                >
                  Hear The AI
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
