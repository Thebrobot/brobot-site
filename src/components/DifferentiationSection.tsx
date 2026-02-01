import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, ShieldCheck } from "lucide-react";

export default function DifferentiationSection() {
  return (
    <section id="differentiation" className="py-24 md:py-40 bg-[#020617] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center">
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter text-white mb-6 md:mb-10">
                NOT JUST <br />
                <span className="text-amber-500 italic">ANOTHER BOT.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-medium mb-8 md:mb-12 leading-relaxed px-4 md:px-0">
                Most bots are static scripts. Agent Broski is a high-bandwidth intelligence layer that understands intent, manages friction, and closes loops.
              </p>
              
              <div className="p-8 md:p-10 rounded-3xl md:rounded-[40px] cyber-glass border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-amber-500" />
                </div>
                <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.5em] mb-6">
                  Elite_Deployment
                </h4>
                <p className="text-slate-200 text-base md:text-lg font-bold leading-relaxed italic relative z-10">
                  "We don't sell software. We deploy revenue-driving systems that perform better than your top employee. That is the Brobot standard."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-3xl md:rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xs font-black mb-8 md:mb-10 text-slate-600 uppercase tracking-[0.4em]">Legacy_Systems:</h3>
              <ul className="space-y-6">
                {[
                  "Static Voicemail",
                  "Expensive Call Centers",
                  "Basic Rules-Based Bots",
                  "Manual CRM Entry"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-500 font-bold text-sm">
                    <ShieldAlert className="h-5 w-5 text-red-500/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-3xl md:rounded-[40px] bg-amber-600 text-white shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)] border border-amber-400/20"
            >
              <h3 className="text-xs font-black mb-8 md:mb-10 text-amber-200 uppercase tracking-[0.4em]">Brobot_Engine:</h3>
              <ul className="space-y-6">
                {[
                  "Natural Intelligence",
                  "Custom Knowledge Base",
                  "Instant Data Sync",
                  "Proprietary Growth Loop"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-black text-sm italic">
                    <CheckCircle2 className="h-5 w-5 text-amber-200" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
