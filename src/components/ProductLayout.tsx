import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FloatingMenu from "@/components/FloatingMenu";
import Footer from "@/components/Footer";

interface ProductLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  badge: string;
  backgroundImage: string;
  accentColor?: string;
  pathname?: string;
}

export default function ProductLayout({
  children,
  title,
  subtitle,
  badge,
  backgroundImage,
  accentColor = "amber-600",
  pathname = "/"
}: ProductLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar pathname={pathname} />
      
      {/* Product Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200/50 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md`}>
              <span className={`text-[10px] font-bold uppercase tracking-widest text-${accentColor}`}>{badge}</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-neutral-950 mb-6 px-4">
              {title}
            </h1>
            <p className="text-lg md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto px-4">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        {children}
      </div>

      <FloatingMenu pathname={pathname} />

      <Footer />
    </main>
  );
}
