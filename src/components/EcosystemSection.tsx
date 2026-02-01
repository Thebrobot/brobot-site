import { motion } from "framer-motion";
import { Phone, Database, Star, MapPin, ArrowRight } from "lucide-react";

const ecosystemSteps = [
  {
    id: "broski",
    title: "The Front Door",
    product: "Agent Broski",
    description: "The phone rings. Agent Broski answers instantly, qualifies the lead, and books the appointment.",
    icon: Phone,
    color: "bg-amber-500",
    href: "/conversational-ai"
  },
  {
    id: "brobot",
    title: "The Brain",
    product: "The Brobot",
    description: "The lead is instantly synced to your CRM. No manual entry. No lost data. Just total organization.",
    icon: Database,
    color: "bg-indigo-600",
    href: "/crm"
  },
  {
    id: "revubro",
    title: "The Social Proof",
    product: "RevuBro",
    description: "Job finished? RevuBro automatically asks for a review, boosting your reputation on autopilot.",
    icon: Star,
    color: "bg-amber-400",
    href: "/reputation"
  },
  {
    id: "imapspro",
    title: "The Visibility",
    product: "iMapsPro",
    description: "More reviews mean higher rankings. iMapsPro ensures you stay at the top of local search results.",
    icon: MapPin,
    color: "bg-emerald-500",
    href: "/local-seo"
  }
];

export default function EcosystemSection() {
  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6">
            The Growth Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed px-4">
            One automated loop. Four elite tools. <br />
            <span className="text-neutral-900">Total business transformation.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative">
          {/* Connecting Line Animation */}
          <div className="hidden lg:block absolute top-[15%] left-[10%] right-[10%] h-[2px] bg-neutral-100 -z-0">
            <motion.div 
              initial={{ left: "-100%" }}
              whileInView={{ left: "100%" }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute top-0 h-full w-[20%] bg-gradient-to-r from-transparent via-amber-500 to-transparent"
            />
          </div>

          {ecosystemSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <a href={step.href} className="group block">
                <div className="mb-6 md:mb-8 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-neutral-50 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-white border border-neutral-100">
                  <step.icon className={cn("h-7 w-7 md:h-8 md:w-8 text-white p-1.5 rounded-lg", step.color)} />
                </div>
                
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-2">{step.title}</p>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2 group-hover:text-amber-600 transition-colors">
                  {step.product}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                </h3>
                <p className="text-neutral-500 leading-relaxed text-sm font-medium">
                  {step.description}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper for conditional classes
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
