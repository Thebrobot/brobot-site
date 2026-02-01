import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, User, Bot, Activity, ArrowUpRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { industries } from "@/data/industries";
import DemoModal from "./DemoModal";

const demos = [
  {
    industry: "HVAC & PLUMBING",
    audio: "/demos/hvac.mp3",
    transcript: [
      { sender: "bot", text: "SYSTEM_ONLINE: Welcome to Elite Plumbing. How can I assist your dispatch today?" },
      { sender: "user", text: "My water heater just burst, I have water everywhere!" },
      { sender: "bot", text: "Understood. Priority status engaged. I have a senior tech available at 2 PM today. Should I secure this slot?" },
      { sender: "user", text: "Yes, please. Right away." },
      { sender: "bot", text: "CONFIRMED. Dispatching confirmation to your device now. Help is on the way." },
    ]
  },
  {
    industry: "REAL ESTATE",
    audio: "/demos/real-estate.mp3",
    transcript: [
      { sender: "bot", text: "BROBOT_VOICE: You're calling about the Oak Ave listing. Correct?" },
      { sender: "user", text: "Yes, I'd like to see it tomorrow morning." },
      { sender: "bot", text: "Verifying calendar... I have a 10 AM opening. Does this align with your schedule?" },
      { sender: "user", text: "Perfect, book it." },
      { sender: "bot", text: "SYNC_COMPLETE. Showing scheduled. Electronic invite sent to your primary email." },
    ]
  }
];

export default function VoicePreview() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);
  const [industryIndex, setIndustryIndex] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlaying) {
      if (currentLine < demos[activeDemo].transcript.length - 1) {
        timeout = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
        }, 2000);
      } else {
        setTimeout(() => {
          setIsPlaying(false);
          setCurrentLine(-1);
        }, 3000);
      }
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, currentLine, activeDemo]);

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentLine(0);
  };

  const stopDemo = () => {
    setIsPlaying(false);
    setCurrentLine(-1);
  };

  return (
    <section id="voice" className="py-24 md:py-40 bg-[#020617] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center">
          <div className="flex-1 max-w-xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8 text-amber-500">
                <Activity className="w-4 h-4 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Live_Transmission</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter text-white mb-6 md:mb-10 leading-[0.95]">
                AI THAT SOUNDS <br />
                <span className="text-amber-500 italic text-5xl md:text-8xl">LIKE A HUMAN.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-medium mb-8 md:mb-12 leading-relaxed">
                No robot voices. No delays. Brobot talks to your customers and books your appointments while you focus on your business.
              </p>

              <div className="mb-8 md:mb-12 min-h-20 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500/50">
                    System Versatility_
                  </span>
                  <a href="/industries" className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-amber-500 transition-colors flex items-center gap-1">
                    View All <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xl md:text-3xl font-display font-black tracking-tight text-white">
                  <span className="text-slate-500 uppercase italic">Ready For:</span>
                  <div className="h-10 overflow-hidden relative flex-1 min-w-[200px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={industryIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="absolute inset-0"
                      >
                        <a 
                          href={`/industries/${industries[industryIndex].slug}`}
                          className="text-amber-500 uppercase italic hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                        >
                          {industries[industryIndex].name}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                        </a>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-12 opacity-60 hover:opacity-100 transition-opacity">
                <span className="w-full text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Select Demo Case:</span>
                {demos.map((demo, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveDemo(i); stopDemo(); }}
                    className={cn(
                      "px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all border",
                      activeDemo === i 
                        ? "bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-600/30" 
                        : "bg-white/[0.02] text-slate-500 border-white/5 hover:border-white/10"
                    )}
                  >
                    {demo.industry}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.button
                  onClick={isPlaying ? stopDemo : startDemo}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-6 bg-white text-[#020617] w-full sm:flex-1 px-10 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-[24px] font-black text-sm shadow-[0_0_40px_-5px_rgba(255,255,255,0.2)] overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-4">
                    {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6 fill-current" /> : <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />}
                    <span className="uppercase tracking-[0.2em]">Initiate_Simulation</span>
                  </div>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={isPlaying ? { x: "100%" } : { x: "-100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-amber-500/10"
                  />
                </motion.button>

                <motion.button
                  onClick={() => setIsDemoModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white w-full sm:flex-1 px-10 md:px-12 py-5 md:py-6 rounded-2xl md:rounded-[24px] font-black text-sm shadow-[0_0_40px_-5px_rgba(245,158,11,0.3)] transition-all overflow-hidden"
                >
                  <Zap className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="uppercase tracking-[0.2em]">Get Started</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-2xl relative mt-12 lg:mt-0">
            {/* Ambient Pulse Glow */}
            <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full scale-110" />
            
            <div className="relative rounded-[32px] md:rounded-[56px] cyber-glass border border-white/10 p-1 bg-gradient-to-br from-white/[0.05] to-transparent overflow-hidden">
              {/* Terminal Header */}
              <div className="px-6 md:px-10 py-6 md:py-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className={cn("w-2.5 h-2.5 md:w-3 md:h-3 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]", isPlaying ? "bg-red-500 animate-pulse" : "bg-slate-700")} />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    {isPlaying ? "Stream_Active" : "Protocol_Idle"}
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[9px] md:text-[10px] font-bold text-amber-500/50">
                  <div className="h-1 w-1 rounded-full bg-amber-500 hidden sm:block" />
                  BIT_RATE: 128KBPS
                </div>
              </div>

              {/* Chat Area */}
              <div className="p-6 md:p-10 min-h-[400px] md:min-h-[500px] flex flex-col justify-end">
                <div className="space-y-8 md:space-y-10">
                  <AnimatePresence mode="popLayout">
                    {currentLine >= 0 && demos[activeDemo].transcript.slice(0, currentLine + 1).map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        className={cn(
                          "flex gap-4 md:gap-6 max-w-[95%] md:max-w-[90%]",
                          line.sender === "user" ? "ml-auto flex-row-reverse" : ""
                        )}
                      >
                        <div className={cn(
                          "w-10 h-10 md:w-12 md:h-12 rounded-[14px] md:rounded-[18px] flex items-center justify-center flex-shrink-0 border transition-all",
                          line.sender === "bot" 
                            ? "bg-amber-600 text-white border-amber-400 shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]" 
                            : "bg-white/5 text-slate-400 border-white/10"
                        )}>
                          {line.sender === "bot" ? <Bot className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} /> : <User className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />}
                        </div>
                        <div className={cn(
                          "p-4 md:p-6 rounded-2xl md:rounded-[32px] text-sm md:text-base font-medium leading-relaxed",
                          line.sender === "bot" 
                            ? "bg-white/[0.03] text-white border border-white/5 rounded-tl-none" 
                            : "bg-amber-600 text-white rounded-tr-none shadow-xl shadow-amber-600/20"
                        )}>
                          {line.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Status Bar */}
                <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-white/5">
                  <div className="flex items-center justify-center gap-1 md:gap-2 h-10 md:h-12 mb-8 md:mb-10 overflow-hidden">
                    {[...Array(24)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={isPlaying ? { 
                          height: [4, Math.random() * 40 + 10, 4],
                          backgroundColor: ["#f59e0b", "#fbbf24", "#f59e0b"]
                        } : { height: 2, backgroundColor: "#334155" }}
                        transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.03 }}
                        className="w-1 rounded-full"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 md:px-8 md:py-5 bg-white/[0.02] rounded-2xl md:rounded-3xl border border-white/5 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Secure_Encryption_AES_256</span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-amber-500">VOICE_SYNC_ENABLED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
}
