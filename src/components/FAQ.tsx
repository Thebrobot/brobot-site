import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Does it sound like a robot?",
    answer: "No. Brobot uses advanced neural voice technology that captures human-like inflection and emotion. Most people can't tell they are talking to an AI."
  },
  {
    question: "Can Agent Broski use my own voice?",
    answer: "Yes. Our optional voice cloning enhancement lets Agent Broski speak in your exact voice. This creates an incredibly personal experience for your callers—they hear the familiar voice they trust, backed by 24/7 AI intelligence. It's a premium add-on that integrates seamlessly with our system."
  },
  {
    question: "How long does setup take?",
    answer: "Our team can have your custom industry model live and connected to your phone line in under 15 minutes. It's truly plug-and-play."
  },
  {
    question: "Can it book appointments in my calendar?",
    answer: "Yes. Brobot integrates directly with tools like Google Calendar, Outlook, and most major CRMs to book jobs and appointments in real-time."
  },
  {
    question: "Are the calls recorded and transcribed?",
    answer: "Yes. Every single conversation is recorded and transcribed in real-time with 99% accuracy. You can review the full audio and text of any call directly from your dashboard to ensure quality and track customer details."
  },
  {
    question: "Can it trigger actions based on what happens in the call?",
    answer: "Absolutely. Brobot can trigger 'Smart Workflows' based on specific keywords or conversation outcomes. For example, it can instantly send a follow-up text after a call, notify your sales team of a high-priority lead, or update your CRM automatically."
  },
  {
    question: "What happens if the AI gets stuck?",
    answer: "If the AI encounters a complex situation it can't handle, it can instantly transfer the call to a human team member or take a detailed message for you."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group gap-4"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-amber-500' : 'text-white group-hover:text-amber-400'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? 'bg-amber-600 text-white rotate-0' : 'bg-white/5 text-slate-500 rotate-180'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 md:pb-8 text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 px-6 bg-[#020617]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.4em] font-black text-amber-400 mb-8">
            <HelpCircle className="w-3 h-3" />
            <span>Support_Faq</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white">
            COMMON <span className="text-amber-500 italic">QUESTIONS.</span>
          </h2>
        </div>

        <div className="cyber-glass border border-white/5 bg-white/[0.02] rounded-3xl md:rounded-[40px] p-6 md:p-12 shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
