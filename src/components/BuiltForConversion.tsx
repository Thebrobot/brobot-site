import { motion } from "framer-motion";
import { Clock, Zap, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "24/7 AVAILABILITY",
    description: "The digital office that never sleeps. While you rest, Agent Broski qualifies and books.",
    stat: "99.9% SYSTEM_UPTIME",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)]"
  },
  {
    icon: Zap,
    title: "INSTANT SYNC",
    description: "Lead data streams instantly into your existing workflows. Zero latency. Total efficiency.",
    stat: "SYNC_ACTIVE_50+_INT",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]"
  },
  {
    icon: TrendingUp,
    title: "SCALABLE GROWTH",
    description: "Handle 10x the lead volume without adding a single employee. Our engine processes, qualifies, and schedules at infinite scale.",
    stat: "10X CAPACITY_INCREASE",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)]"
  }
];

export default function BuiltForConversion() {
  return (
    <section id="conversion" className="py-24 md:py-40 bg-[#020617] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[9px] font-black uppercase tracking-[0.5em] text-amber-500 mb-6"
          >
            Performance_Metrics
          </motion.p>
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter text-white">
            BUILT FOR <span className="text-amber-500 italic">ROI.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group cyber-glass p-8 md:p-12 rounded-[32px] md:rounded-[48px] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center ${pillar.glow}`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform">
                <pillar.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-white mb-4 tracking-widest font-display italic">{pillar.title}</h3>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-10 md:mb-12">
                {pillar.description}
              </p>
              <div className="mt-auto py-3 md:py-4 px-6 bg-white/[0.02] border border-white/[0.05] rounded-xl md:rounded-2xl w-full">
                <span className="text-[10px] font-mono font-bold text-amber-400 tracking-wider">
                  &gt; {pillar.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
