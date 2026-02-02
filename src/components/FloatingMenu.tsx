import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Home, Zap, MapPin, Star, LayoutDashboard, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect, useMemo } from "react";
import DemoModal from "./DemoModal";

interface FloatingMenuProps {
  pathname?: string;
}

const menuItems = [
  { id: "home", icon: Home, label: "Home", href: "/", home: true },
  { id: "crm", icon: LayoutDashboard, label: "Brobot_CRM", href: "/crm" },
  { id: "broski", icon: Zap, label: "Agent_Broski", href: "/conversational-ai" },
  { id: "ai-hub", icon: Bot, label: "TALK TO AI", href: "#", main: true },
  { id: "imapspro", icon: MapPin, label: "iMapsPro", href: "/local-seo" },
  { id: "revubro", icon: Star, label: "RevuBro", href: "/reputation" },
];

function MagneticIcon({ children, isActive, main, home }: { children: React.ReactNode, isActive?: boolean, main?: boolean, home?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.5);
    y.set((clientY - centerY) * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(
        "relative flex items-center justify-center rounded-xl md:rounded-2xl transition-all duration-500",
        main 
          ? "h-12 w-12 md:h-14 md:w-14 bg-amber-600 text-white shadow-[0_0_40px_-5px_rgba(245,158,11,0.6)]" 
          : home
          ? "h-10 w-10 md:h-11 md:w-11 bg-white/[0.08] border border-white/10 text-white hover:bg-white/[0.12] hover:border-white/20"
          : "h-10 w-10 md:h-11 md:w-11 text-slate-500 hover:text-white hover:bg-white/[0.05]"
      )}
    >
      {children}
      
      {/* Pulsing "Live" Indicator for Main Button */}
      {main && (
        <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4">
          <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
          <div className="absolute inset-0 bg-emerald-500 rounded-full" />
        </div>
      )}
    </motion.div>
  );
}

export default function FloatingMenu({ pathname = "/" }: FloatingMenuProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [showCallout, setShowCallout] = useState(false);

  const calloutText = useMemo(() => {
    const options = [
      "Ready to scale? Let's talk. 🚀",
      "Your business, on autopilot. Sound good? ✈️",
      "I'm online! How can I help today? 🤖"
    ];
    return options[Math.floor(Math.random() * options.length)];
  }, []);

  useEffect(() => {
    // Show callout after 2 seconds
    const timer = setTimeout(() => {
      setShowCallout(true);
    }, 2000);

    // Hide callout after 10 seconds total (8 seconds of being visible)
    const hideTimer = setTimeout(() => {
      setShowCallout(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Effect to hide the GHL bubble inside Shadow DOM
  useEffect(() => {
    const hideGHLBubble = () => {
      const chatWidget = document.querySelector('chat-widget');
      if (chatWidget && chatWidget.shadowRoot) {
        const bubble = chatWidget.shadowRoot.querySelector('#lc_text-widget--btn') as HTMLElement;
        if (bubble) {
          bubble.style.display = 'none';
        }
      }
    };
    // Run periodically to catch it when it loads
    const interval = setInterval(hideGHLBubble, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAction = (e: React.MouseEvent, item: typeof menuItems[0]) => {
    if (item.main) {
      e.preventDefault();
      setIsDemoModalOpen(true);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 md:bottom-12 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-fit">
        {/* Ambient Glow Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full"
          />
        </motion.div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative flex items-center gap-2 md:gap-4 rounded-[24px] md:rounded-[32px] bg-[#020617]/90 p-2 md:p-3 shadow-[0_8px_32px_rgba(245,158,11,0.15),0_0_80px_rgba(245,158,11,0.1)] backdrop-blur-3xl border border-white/20"
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <a 
                key={item.id} 
                href={item.href} 
                className="relative group"
                onClick={(e) => handleAction(e, item)}
              >
                <AnimatePresence>
                  {item.main && showCallout && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10, x: "-50%" }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, scale: 0.8, y: 10, x: "-50%" }}
                      className="absolute -top-16 left-1/2 px-4 py-2 bg-amber-600 text-white text-[12px] font-bold rounded-2xl shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)] whitespace-nowrap pointer-events-none z-50 border border-white/20"
                    >
                      {calloutText}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-600 rotate-45 border-r border-b border-white/20" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <MagneticIcon isActive={isActive} main={item.main} home={item.home}>
                  <item.icon 
                    className={cn(
                      "relative z-10 transition-all duration-500", 
                      item.main ? "h-6 w-6 md:h-7 md:w-7" : "h-4 w-4 md:h-5 md:w-5",
                      isActive && !item.main && !item.home ? "text-amber-400" : "",
                      isActive && item.home ? "text-white" : ""
                    )} 
                    strokeWidth={item.main ? 2.5 : item.home ? 2.5 : 2} 
                  />
                </MagneticIcon>

                {/* Tooltip - Hidden on Mobile */}
                <div className="hidden md:block absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#020617] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/10 shadow-2xl">
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#020617] border-r border-b border-white/10 rotate-45" />
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}
