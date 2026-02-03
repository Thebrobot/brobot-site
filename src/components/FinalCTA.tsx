import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 bg-[#020617]">
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-[32px] md:rounded-[64px] py-20 md:py-32 px-8 text-center overflow-hidden border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl">
          {/* Energy Core Glow Behind CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.4em] font-black text-amber-400 mb-8 md:mb-10">
              <Zap className="w-3 h-3 fill-current" />
              <span>Initiate Protocol</span>
            </div>
            
            <h2 className="text-4xl md:text-8xl font-display font-black tracking-tighter text-white mb-8 md:mb-10 leading-[0.9]">
              READY TO <span className="text-amber-500 italic">SCALE?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white mb-12 md:mb-16 leading-relaxed font-medium max-w-2xl mx-auto px-4">
              Deployment takes minutes. Results last for years. Connect your front office to the engine today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 px-4">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-16 md:h-20 w-full sm:w-auto px-10 md:px-12 rounded-xl md:rounded-[24px] bg-amber-600 text-white font-black text-base md:text-lg transition-all shadow-[0_0_50px_-5px_rgba(245,158,11,0.6)] hover:bg-amber-500 overflow-hidden"
              >
                <span className="relative z-10 uppercase tracking-widest">Activate_Brobot</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="group h-16 md:h-20 w-full sm:w-auto px-10 md:px-12 rounded-xl md:rounded-[24px] border border-white/10 bg-white/[0.02] backdrop-blur-md text-white font-black text-base md:text-lg transition-all flex items-center justify-center gap-3"
              >
                <span className="uppercase tracking-widest">Book_Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-amber-500" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
