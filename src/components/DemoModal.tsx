import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, MessageSquare, MessageCircle, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [step, setStep] = useState<'choice' | 'form' | 'success'>('choice');
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAction, setSelectedAction] = useState<'call' | 'text' | null>(null);

  const handleActionSelect = (action: 'call' | 'text') => {
    setSelectedAction(action);
    setStep('form');
  };

  const handleChatNow = () => {
    // Open the GHL chat widget immediately
    const chatWidget = document.querySelector('chat-widget');
    if (chatWidget && chatWidget.shadowRoot) {
      const shadowButton = chatWidget.shadowRoot.querySelector('#lc_text-widget--btn') as HTMLElement;
      if (shadowButton) {
        shadowButton.click();
      }
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // NOTE: Connect this to your GoHighLevel Webhook
    // const response = await fetch('YOUR_GHL_WEBHOOK_URL', {
    //   method: 'POST',
    //   body: JSON.stringify({ ...formData, action: selectedAction })
    // });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setStep('success');
  };

  const resetModal = () => {
    setStep('choice');
    setFormData({ name: '', phone: '' });
    setSelectedAction(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            className="fixed inset-0 z-[100] bg-[#020617]/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-md bg-[#020617] border border-white/10 rounded-[32px] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] pointer-events-auto relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-amber-500/10 blur-[100px] pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={resetModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* STEP 1: CHOICE */}
              {step === 'choice' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative z-10"
                >
                  <div className="mb-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-4 relative">
                      <Sparkles className="w-8 h-8 text-white" />
                      <div className="absolute -top-1 -right-1 w-4 h-4">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
                        <div className="absolute inset-0 bg-emerald-500 rounded-full" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Hey, I'm Brobot</h2>
                    <p className="text-slate-400 text-lg">
                      How would you like to connect with me?
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => handleActionSelect('call')}
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all group flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                        <Phone className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-bold text-lg">Call Me Now</div>
                        <div className="text-slate-500 text-sm">Get a live voice demo in 10 seconds</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </button>

                    <button
                      onClick={() => handleActionSelect('text')}
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all group flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                        <MessageSquare className="w-6 h-6 text-blue-500" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-bold text-lg">Text Me</div>
                        <div className="text-slate-500 text-sm">Start a conversation via SMS</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </button>

                    <button
                      onClick={handleChatNow}
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all group flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                        <MessageCircle className="w-6 h-6 text-amber-500" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-white font-bold text-lg">Chat Here</div>
                        <div className="text-slate-500 text-sm">Continue in the browser</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: FORM */}
              {step === 'form' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative z-10"
                >
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-4">
                      {selectedAction === 'call' ? (
                        <Phone className="w-6 h-6 text-emerald-500" />
                      ) : (
                        <MessageSquare className="w-6 h-6 text-blue-500" />
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {selectedAction === 'call' ? 'Call Me Setup' : 'Text Me Setup'}
                    </h2>
                    <p className="text-slate-400">
                      Just need your name and number to {selectedAction === 'call' ? 'call you' : 'text you'}.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                        Full Name
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
                        Phone Number
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
                        <input
                          required
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className={cn(
                        "w-full bg-amber-600 hover:bg-amber-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-xl shadow-amber-600/20 flex items-center justify-center gap-2 group",
                        isSubmitting && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* STEP 3: SUCCESS */}
              {step === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedAction === 'call' ? "Calling You Now!" : "Message Sent!"}
                  </h2>
                  <p className="text-slate-400 mb-8">
                    {selectedAction === 'call' 
                      ? "Keep your phone close. Agent Broski is dialing you right now."
                      : "Check your messages. Brobot just sent you a text to get started."}
                  </p>
                  <button
                    onClick={resetModal}
                    className="px-8 py-3 rounded-xl bg-white/5 text-white font-bold hover:bg-white/10 transition-all"
                  >
                    Got it
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
