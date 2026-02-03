import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, User, Bot, Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface IndustryVoiceDemoProps {
  industryName: string;
  example: {
    title: string;
    channel: "Call" | "SMS";
    lines: string[];
    note?: string;
  };
}

export default function IndustryVoiceDemo({ industryName, example }: IndustryVoiceDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);

  // Parse lines into sender/text format
  const transcript = example.lines.map(line => {
    if (line.startsWith("Agent:")) {
      return { sender: "bot" as const, text: line.replace("Agent:", "").trim() };
    } else if (line.startsWith("Caller:") || line.startsWith("Customer:")) {
      return { sender: "user" as const, text: line.replace(/^(Caller|Customer):/, "").trim() };
    }
    return { sender: "user" as const, text: line };
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPlaying) {
      if (currentLine < transcript.length - 1) {
        timeout = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
        }, 2500);
      } else {
        timeout = setTimeout(() => {
          setIsPlaying(false);
          setCurrentLine(-1);
        }, 3000);
      }
    }
    return () => clearTimeout(timeout);
  }, [isPlaying, currentLine, transcript.length]);

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentLine(0);
  };

  const stopDemo = () => {
    setIsPlaying(false);
    setCurrentLine(-1);
  };

  return (
    <div className="w-full">
      {/* Terminal Card */}
      <div className="relative rounded-2xl md:rounded-[40px] cyber-glass border border-white/10 p-1 bg-gradient-to-br from-white/[0.05] to-transparent overflow-hidden">
        {/* Terminal Header */}
        <div className="px-5 md:px-8 py-4 md:py-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <div className={cn(
                "w-2 h-2 md:w-2.5 md:h-2.5 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]", 
                isPlaying ? "bg-amber-500 animate-pulse" : "bg-slate-700"
              )} />
            </div>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white">
              {isPlaying ? "Live_Call" : "Demo_Ready"}
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 font-mono text-[8px] md:text-[10px] font-bold text-amber-400/50">
            <div className="h-1 w-1 rounded-full bg-amber-500 hidden sm:block" />
            {example.channel === "Call" ? "VOICE_STREAM" : "SMS_THREAD"}
          </div>
        </div>

        {/* Chat Area */}
        <div className="p-5 md:p-8 min-h-[280px] md:min-h-[350px] flex flex-col justify-end">
          <div className="space-y-4 md:space-y-6">
            <AnimatePresence mode="popLayout">
              {currentLine >= 0 && transcript.slice(0, currentLine + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  className={cn(
                    "flex gap-3 md:gap-4 max-w-[95%] md:max-w-[90%]",
                    line.sender === "user" ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 border transition-all",
                    line.sender === "bot" 
                      ? "bg-amber-500 text-white border-amber-400 shadow-[0_0_15px_-5px_rgba(245,158,11,0.5)]" 
                      : "bg-white/5 text-white border-white/10"
                  )}>
                    {line.sender === "bot" ? <Bot className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} /> : <User className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />}
                  </div>
                  <div className={cn(
                    "p-3 md:p-5 rounded-xl md:rounded-2xl text-sm md:text-base font-medium leading-relaxed",
                    line.sender === "bot" 
                      ? "bg-white/[0.03] text-white border border-white/5 rounded-tl-none" 
                      : "bg-amber-500 text-white rounded-tr-none shadow-lg shadow-amber-500/20"
                  )}>
                    {line.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Idle State */}
            {currentLine < 0 && (
              <div className="flex flex-col items-center justify-center py-8 md:py-12 text-center">
                <Activity className="w-8 h-8 md:w-10 md:h-10 text-amber-500/30 mb-4" />
                <p className="text-white text-sm md:text-base font-medium">
                  Press play to hear how Brobot handles a {industryName} call
                </p>
              </div>
            )}
          </div>

          {/* Audio Waveform */}
          <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/5">
            <div className="flex items-center justify-center gap-0.5 md:gap-1 h-8 md:h-10 mb-5 md:mb-6 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={isPlaying ? { 
                    height: [3, Math.random() * 28 + 8, 3],
                    backgroundColor: ["#f59e0b", "#fbbf24", "#f59e0b"]
                  } : { height: 2, backgroundColor: "#334155" }}
                  transition={{ repeat: Infinity, duration: 0.4, delay: i * 0.03 }}
                  className="w-1 rounded-full"
                />
              ))}
            </div>

            {/* Play Button */}
            <motion.button
              onClick={isPlaying ? stopDemo : startDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group relative flex items-center justify-center gap-4 bg-amber-500 hover:bg-amber-400 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm shadow-lg shadow-amber-500/20 overflow-hidden transition-colors"
            >
              <div className="relative z-10 flex items-center gap-3">
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                <span className="uppercase tracking-[0.15em] text-xs md:text-sm">
                  {isPlaying ? "Stop Demo" : "Play Demo Call"}
                </span>
              </div>
              {isPlaying && (
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/10"
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {example.note && (
        <p className="mt-4 text-center text-xs text-white font-medium italic">
          {example.note}
        </p>
      )}
    </div>
  );
}
