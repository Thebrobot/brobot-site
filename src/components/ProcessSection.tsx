import { motion } from "framer-motion";
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  UserPlus, 
  CalendarCheck,
  Zap
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Inbound arrives",
    description: "A call or chat comes in 24/7.",
  },
  {
    icon: Zap,
    title: "Instant response",
    description: "Agent Broski answers instantly, no wait times.",
  },
  {
    icon: MessageCircle,
    title: "Qualifies leads",
    description: "Asks smart questions to find the right intent.",
  },
  {
    icon: UserPlus,
    title: "Understands intent",
    description: "Categorizes exactly what the customer needs.",
  },
  {
    icon: CalendarCheck,
    title: "Routes or Books",
    description: "Seamlessly routes the call or books the lead.",
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How it works</h2>
          <p className="text-base md:text-lg text-neutral-500">Agent Broski handles the front line so you can focus on the work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-neutral-100 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-neutral-50 shadow-sm border border-neutral-100">
                <step.icon className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-[150px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
