import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, CheckCircle2, User, ArrowRight } from 'lucide-react';

interface VoiceCloningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoiceCloningModal({ isOpen, onClose }: VoiceCloningModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#020617]/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-5xl bg-[#020617] border border-cyan-500/20 rounded-[32px] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(6,182,212,0.4)] pointer-events-auto relative my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-500/10 blur-[100px] pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10"
              >
                {/* Header */}
                <div className="mb-8 md:mb-10">
                  <div className="flex items-center gap-3 mb-6 text-cyan-400">
                    <Mic className="w-5 h-5 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                      Voice_Identity_Protocol
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white mb-4 leading-tight">
                    YOUR VOICE. <br />
                    <span className="text-cyan-400 italic">YOUR BRAND.</span>
                  </h2>
                  <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                    Make your AI agent sound exactly like you with our custom voice cloning enhancement.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-10">
                  {[
                    {
                      icon: User,
                      title: "Ultimate Personalization",
                      desc: "Your customers hear the familiar voice they trust on every single call, 24/7."
                    },
                    {
                      icon: CheckCircle2,
                      title: "Seamless Integration",
                      desc: "Works instantly with Agent Broski's AI call handling and scheduling system."
                    },
                    {
                      icon: Mic,
                      title: "Professional Quality",
                      desc: "Studio-grade voice cloning that captures your natural tone and cadence."
                    },
                    {
                      icon: CheckCircle2,
                      title: "Total Brand Consistency",
                      desc: "Every interaction feels authentic and reinforces your personal brand."
                    }
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition-all">
                        <benefit.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-white font-bold text-base md:text-lg mb-2">{benefit.title}</h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* How It Works */}
                <div className="mb-8 md:mb-10 p-6 md:p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 mb-4">
                    How_It_Works
                  </h3>
                  <div className="space-y-3">
                    {[
                      "We schedule a brief recording session with you",
                      "Our team creates a professional voice profile",
                      "Your cloned voice is integrated with Agent Broski",
                      "Callers hear YOUR voice with 24/7 AI intelligence"
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-cyan-400 text-xs font-black">{i + 1}</span>
                        </div>
                        <p className="text-white text-sm md:text-base font-medium leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-black uppercase tracking-[0.2em] py-5 px-6 rounded-2xl transition-all shadow-xl shadow-cyan-600/20 flex items-center justify-center gap-2 group text-sm"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={onClose}
                    className="px-6 py-5 rounded-2xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all text-sm"
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Footer Note */}
                <p className="text-center text-white text-xs md:text-sm font-bold uppercase tracking-widest mt-6">
                  Optional Premium Enhancement • No Commitment Required
                </p>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
