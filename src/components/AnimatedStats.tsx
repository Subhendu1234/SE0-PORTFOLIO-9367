import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedStatsProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedStats({ value, label, suffix = '', duration = 2 }: AnimatedStatsProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [count, value, duration, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div className="text-5xl md:text-6xl font-bold text-[#F9EC31] mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
      <div className="text-white/80 text-lg">{label}</div>
    </motion.div>
  );
}
