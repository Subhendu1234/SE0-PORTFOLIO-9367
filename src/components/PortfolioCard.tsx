import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  delay?: number;
}

export function PortfolioCard({ title, description, image, category, delay = 0 }: PortfolioCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative h-[400px] perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#6DD5D5] bg-[#6DD5D5]/10 rounded-full mb-3">
                {category}
              </span>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">{title}</h3>
              <p className="text-gray-600 line-clamp-2">{description}</p>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#6DD5D5] to-[#F9EC31] p-8 flex flex-col justify-center items-center text-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/90 mb-6 text-lg">{description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-[#2D2D2D] rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-shadow"
          >
            View Project <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
