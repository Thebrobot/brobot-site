import { motion } from "framer-motion";
import { 
  Star, 
  MapPin, 
  Search, 
  LayoutDashboard, 
  ArrowUpRight 
} from "lucide-react";

const products = [
  {
    icon: Star,
    name: "RevuBro",
    description: "Automate review collection and boost your reputation effortlessly.",
  },
  {
    icon: MapPin,
    name: "iMapsPro",
    description: "Dominant local visibility on Apple Maps and Google Search.",
  },
  {
    icon: Search,
    name: "Yext",
    description: "Ensures your business listings are accurate across 100+ platforms.",
  },
  {
    icon: LayoutDashboard,
    name: "The Brobot CRM",
    description: "The ultimate command center for lead tracking and automated follow-ups.",
  }
];

export default function GrowthStack() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Agent Broski is the front door. <br />
            <span className="text-neutral-400">This is what happens after.</span>
          </h2>
          <p className="text-lg text-neutral-500">
            Most clients start with Agent Broski and add these high-impact tools as they scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl border border-neutral-100 bg-neutral-50 transition-all hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-colors group-hover:bg-amber-600">
                <product.icon className="h-6 w-6 text-amber-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {product.name}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
