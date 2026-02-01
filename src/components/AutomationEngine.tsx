import { motion } from "framer-motion";
import { Phone, Star, Calendar, MapPin, Cpu, Zap, Activity, ArrowRight } from "lucide-react";

export default function AutomationEngine() {
  return (
    <section id="automation" className="relative py-24 md:py-40 px-4 bg-[#020617] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 md:mb-32 space-y-6">
          {/* Animated Brain Icon - Mobile only, above System Architecture */}
          <motion.div
            className="lg:hidden flex justify-center mb-6"
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.85, 1, 0.85]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              className="text-amber-400"
              style={{ 
                width: '48px',
                height: '48px',
                strokeWidth: '1.5',
                filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.6))',
              }}
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
          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed px-4">
            A proprietary central intelligence layer that handles the complexity of growth while you focus on the vision.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center gap-8 md:gap-12 lg:gap-24">
          {/* Left Column - Input Devices */}
          <div className="space-y-8 md:space-y-12">
            {/* Agent Broski Glass Slab */}
            <motion.a
              href="/conversational-ai"
              whileHover={{ scale: 1.05, x: 10, y: -5 }}
              className="block cyber-glass p-6 md:p-8 rounded-3xl md:rounded-[32px] neon-border group relative transition-all cursor-pointer hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.4)] hover:border-amber-500/30"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 rounded-3xl md:rounded-[32px] transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all">
                    <Phone className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-amber-500/50 uppercase tracking-widest mb-1">Status</div>
                    <div className="flex items-center gap-2 text-green-400 font-mono text-[10px] font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      LIVE_ACTIVE
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight font-display italic group-hover:text-amber-400 transition-colors">AGENT BROSKI</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Talks & texts like a human. Qualifies inquiries 24/7. Books meetings for you.</p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mb-4">
                  <div>
                    <div className="text-[9px] font-black text-slate-600 uppercase mb-1">Latency</div>
                    <div className="text-base md:text-lg font-bold text-white font-mono">&lt; 250ms</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-slate-600 uppercase mb-1">Uptime</div>
                    <div className="text-base md:text-lg font-bold text-white font-mono">100%</div>
                  </div>
                </div>
                
                {/* Learn More Indicator */}
                <div className="flex items-center gap-2 text-amber-500 text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* RevuBro Glass Slab */}
            <motion.a
              href="/reputation"
              whileHover={{ scale: 1.05, x: 10, y: -5 }}
              className="block cyber-glass p-6 md:p-8 rounded-3xl md:rounded-[32px] neon-border group relative transition-all cursor-pointer hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.4)] hover:border-amber-500/30"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 rounded-3xl md:rounded-[32px] transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all">
                    <Star className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-[10px] font-black text-amber-500/50 uppercase tracking-widest">Growth_Engine</div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight font-display italic group-hover:text-amber-400 transition-colors">REVUBRO</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Automate Google reviews. Convert satisfied customers. Build 5-star authority.</p>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-[9px] font-black text-slate-600 uppercase">Trust Index</span>
                  <span className="text-[10px] font-bold text-amber-400">88% ALPHA</span>
                </div>
                
                {/* Learn More Indicator */}
                <div className="flex items-center gap-2 text-amber-500 text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* Center Column - THE ENERGY CORE (Desktop/Tablet only) */}
          <div className="hidden lg:flex relative items-center justify-center py-8 md:py-20 lg:py-0">
            <div className="relative w-full h-96 md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] flex items-center justify-center">
              
              {/* Advanced Technical SVG - Behind the core */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 600 600" style={{ transform: 'translateZ(0)' }}>
                <defs>
                  <radialGradient id="center-glow">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>

                {/* Connecting Beams - ONLY VISIBLE ON DESKTOP */}
                <g className="hidden lg:block">
                  <g>
                    <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.15]" />
                    <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="#f59e0b" strokeWidth="2" className="animate-beam" />
                  </g>
                  <g>
                    <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.15]" />
                    <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="#f59e0b" strokeWidth="2" className="animate-beam" style={{ animationDelay: '-1s' }} />
                  </g>
                  <g>
                    <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.15]" />
                    <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="#f59e0b" strokeWidth="2" className="animate-beam" style={{ animationDelay: '-2s' }} />
                  </g>
                  <g>
                    <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.15]" />
                    <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="#f59e0b" strokeWidth="2" className="animate-beam" style={{ animationDelay: '-1.5s' }} />
                  </g>
                </g>

                {/* CENTRAL NODE DETAIL */}
                <g transform="translate(300, 300)" style={{ transformOrigin: 'center' }}>
                  {/* Ambient Glow */}
                  <circle r="120" fill="url(#center-glow)" className="animate-pulse" />

                  {/* Sonar Waves - Using SVG animate */}
                  <circle fill="none" stroke="#f59e0b" strokeWidth="1.5">
                    <animate attributeName="r" from="20" to="90" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle fill="none" stroke="#f59e0b" strokeWidth="1.5">
                    <animate attributeName="r" from="20" to="90" dur="3s" begin="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  <circle fill="none" stroke="#f59e0b" strokeWidth="1.5">
                    <animate attributeName="r" from="20" to="90" dur="3s" begin="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="3s" begin="2s" repeatCount="indefinite" />
                  </circle>

                  {/* Technical Rings */}
                  <circle r="65" fill="none" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="10 20" className="animate-spin-slow" style={{ transformOrigin: 'center' }} />
                  <circle r="45" fill="none" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 6" className="animate-spin-slow-reverse" style={{ transformOrigin: 'center' }} />

                  {/* Crosshair Markers */}
                  <g className="animate-spin-slow" style={{ animationDuration: '20s', transformOrigin: 'center' }}>
                    <path d="M -80 0 L -70 0" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
                    <path d="M 80 0 L 70 0" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
                    <path d="M 0 -80 L 0 -70" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
                    <path d="M 0 80 L 0 70" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
                  </g>

                  {/* Core */}
                  <circle r="10" fill="#0A0A0A" stroke="#f59e0b" strokeWidth="2.5" />
                  <circle r="5" fill="#f59e0b" className="animate-pulse-fast" />
                </g>
              </svg>

              {/* Pulsing Brain Icon - Centered at SVG intersection */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                <motion.div
                  className="flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.08, 1],
                    opacity: [0.85, 1, 0.85]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                    className="text-amber-400"
                    style={{ 
                      width: '80px',
                      height: '80px',
                      strokeWidth: '1.5',
                      filter: 'drop-shadow(0 0 40px rgba(245, 158, 11, 1)) drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))',
                    }}
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

          {/* Right Column - Output Devices */}
          <div className="space-y-8 md:space-y-12 order-3">
            {/* Brobot CRM Glass Slab */}
            <motion.a
              href="/crm"
              whileHover={{ scale: 1.05, x: -10, y: -5 }}
              className="block cyber-glass p-6 md:p-8 rounded-3xl md:rounded-[32px] neon-border group relative transition-all cursor-pointer hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)] hover:border-indigo-500/30"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 rounded-3xl md:rounded-[32px] transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all">
                    <Calendar className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-[10px] font-black text-indigo-500/50 uppercase tracking-widest">Output_Node</div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight font-display italic group-hover:text-indigo-400 transition-colors">BROBOT CRM</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Smart CRM scheduling. Sync appointments. Automate follow-up sequences.</p>
                <div className="flex items-center gap-4 text-[10px] font-black text-indigo-400 mb-4">
                  <Activity className="w-4 h-4 animate-bounce" />
                  DATA_SYNC_ACTIVE_SYNCING...
                </div>
                
                {/* Learn More Indicator */}
                <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* iMapsPro Glass Slab */}
            <motion.a
              href="/local-seo"
              whileHover={{ scale: 1.05, x: -10, y: -5 }}
              className="block cyber-glass p-6 md:p-8 rounded-3xl md:rounded-[32px] neon-border group relative transition-all cursor-pointer hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.4)] hover:border-emerald-500/30"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-3xl md:rounded-[32px] transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-[10px] font-black text-emerald-500/50 uppercase tracking-widest">Local_SEO</div>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight font-display italic group-hover:text-emerald-400 transition-colors">IMAPSPRO</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Apple Maps dominance. Untapped premium traffic. Own the local market.</p>
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mb-4">
                  <div>
                    <div className="text-[9px] font-black text-slate-600 uppercase mb-1">Rank</div>
                    <div className="text-base md:text-lg font-bold text-white font-mono">#1 SPOT</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-slate-600 uppercase mb-1">Visibilty</div>
                    <div className="text-base md:text-lg font-bold text-emerald-400 font-mono">+140%</div>
                  </div>
                </div>
                
                {/* Learn More Indicator */}
                <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          </div>
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-black tracking-tighter text-white leading-[0.95]">
                    BUY THE <span className="text-amber-500 italic">LOOP</span>,<br />
                    NOT PIECES.
                  </h3>
                  <p className="mt-4 text-slate-500 text-sm md:text-lg font-medium leading-relaxed max-w-xl">
                    Agent Broski is the entry point, but the compounding ROI comes from connecting the whole system: capture the lead, book the job, follow up, earn reviews, and win the map.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2">One Setup</div>
                    <div className="text-white font-black tracking-tight">Single install</div>
                    <div className="mt-2 text-slate-500 text-sm font-medium leading-relaxed">
                      Phone + calendar + CRM + reputation + maps, wired together.
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2">One Loop</div>
                    <div className="text-white font-black tracking-tight">No leaks</div>
                    <div className="mt-2 text-slate-500 text-sm font-medium leading-relaxed">
                      Every call becomes a booked outcome and a trackable record.
                    </div>
                  </div>

                  <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-2">Compounds</div>
                    <div className="text-white font-black tracking-tight">Gets stronger</div>
                    <div className="mt-2 text-slate-500 text-sm font-medium leading-relaxed">
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
