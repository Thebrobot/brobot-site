import { motion } from "framer-motion";
import { MousePointer2, Settings2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Pick Your Industry",
    desc: "Choose from 20+ custom-built AI models ready for your specific business.",
    icon: MousePointer2,
    color: "from-amber-600/20 to-amber-600/20"
  },
  {
    id: "02",
    title: "Quick Setup",
    desc: "We connect the bot to your phone line and your calendar in under 15 minutes.",
    icon: Settings2,
    color: "from-purple-600/20 to-amber-600/20"
  },
  {
    id: "03",
    title: "Start Scaling",
    desc: "Your bot starts answering calls, booking appointments, and making you money.",
    icon: Rocket,
    color: "from-amber-600/20 to-amber-600/20"
  }
];

export default function HowItWorks() {
  return (
    <section id="workflow" className="py-24 md:py-40 px-6 bg-[#020617] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.4em] font-black text-amber-400 mb-8"
          >
            <span>The Setup Process_</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tighter text-white mb-6">
            THREE STEPS TO <br /> <span className="text-amber-500 italic">TOTAL AUTOMATION.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium px-4">
            We've made it incredibly easy to get started. No coding required, no complex software to learn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-24" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative z-10 p-8 md:p-10 rounded-3xl md:rounded-[40px] cyber-glass border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all h-full">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <span className="text-4xl md:text-5xl font-display font-black text-white/5 group-hover:text-amber-500 transition-colors">
                    {step.id}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <a 
            href="/contact" 
            className="bg-amber-600 hover:bg-amber-500 text-white px-10 md:px-12 py-5 md:py-6 rounded-full font-black uppercase tracking-[0.2em] shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)] transition-all hover:scale-105 text-center text-sm md:text-base"
          >
            Book Your 15-Min Setup
          </a>
        </motion.div>
      </div>
    </section>
  );
}
