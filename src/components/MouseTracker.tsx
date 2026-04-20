import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function MouseTracker() {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Only activate on devices with a fine pointer (mouse/trackpad), not touch screens
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mq.matches);

    if (!mq.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isPointerDevice) return null;

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
      }}
      className="fixed pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full"
    />
  );
}
