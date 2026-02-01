import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import { useEffect } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const perspectiveY = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    // Initialize Unicorn Studio after component mounts
    const initUnicorn = () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.init();
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initUnicorn, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden min-h-[90vh] md:min-h-screen">
      {/* Base Background Color */}
      <div className="absolute inset-0 bg-[#020617] -z-20" />
      
      {/* Unicorn Studio Background */}
      <div data-us-project="X0ErZR3QhPzMHfKgBbJJ" className="absolute inset-0 z-0"></div>
      
      {/* 3D Perspective Grid - Lowered Opacity to see Unicorn background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full z-10">
        <motion.div 
          style={{ y: perspectiveY }}
          className="grid-perspective absolute -bottom-1/2 left-[-50%] right-[-50%] h-full opacity-20"
        />
      </div>
      
      {/* Cinematic Ambient Lighting - Adjusted Z-index */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-amber-600/20 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-amber-600/10 blur-[150px] rounded-full" 
        />
      </div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Tech Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 md:mb-12 inline-flex items-center space-x-3 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] px-4 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-amber-400 shadow-2xl"
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Cpu className="w-3 md:w-3.5 h-3 md:h-3.5" />
          </motion.div>
          <span>Neural Engine Active</span>
        </motion.div>

        <h1 className="mb-8 md:mb-10 text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-display font-black tracking-tighter leading-[0.9] md:leading-[0.85] bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
          EVERY MISSED <br />
          <span className="relative drop-shadow-[0_0_30px_rgba(245,158,11,0.3)] text-amber-500">
            CALL IS MONEY
            <div className="absolute -inset-x-4 h-full bg-amber-500/5 blur-3xl -z-10 rounded-full" />
          </span>
        </h1>

        <p className="mx-auto mb-12 md:mb-16 max-w-2xl text-lg md:text-2xl text-white font-medium leading-relaxed tracking-tight drop-shadow-md px-4 md:px-0">
          The only system you need to grow. Calls → booked appointments → CRM follow-up → more 5-star reviews → higher map visibility.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8 sm:flex-row px-4">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 30px rgba(245, 158, 11, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="h-16 md:h-18 w-full sm:w-auto px-10 md:px-12 rounded-2xl bg-amber-500 text-black font-black text-base md:text-lg transition-all hover:bg-amber-400 flex items-center justify-center"
          >
            <span className="uppercase tracking-widest">BOOK 15-MIN DEMO</span>
          </motion.a>
          
          <motion.a
            href="#voice"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="group h-16 md:h-18 w-full sm:w-auto px-10 md:px-12 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md text-white font-bold text-base md:text-lg transition-all flex items-center justify-center gap-3 active:scale-95 hover:text-amber-500"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-amber-500 transition-colors" />
            </div>
            HEAR AGENT BROSKI
          </motion.a>
        </div>

        <div className="mt-8 md:mt-10 text-center">
          <a
            href="/industries"
            className="inline-flex items-center justify-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] text-slate-500 hover:text-amber-400 transition-colors"
          >
            Explore Industry Models
          </a>
        </div>
      </motion.div>

      {/* Hero Footnote */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <div className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">Secure AI Protocol v2.0</div>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
