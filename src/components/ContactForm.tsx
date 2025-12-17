import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl mx-auto"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
          Your Name
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          id="name"
          {...register('name')}
          className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6DD5D5] transition-all"
          placeholder="John Doe"
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-300 text-sm mt-1"
          >
            {errors.name.message}
          </motion.p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
          Email Address
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          id="email"
          {...register('email')}
          className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6DD5D5] transition-all"
          placeholder="john@example.com"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-300 text-sm mt-1"
          >
            {errors.email.message}
          </motion.p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Your Message
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          id="message"
          {...register('message')}
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6DD5D5] transition-all resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-300 text-sm mt-1"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-8 py-4 bg-white text-[#2D2D2D] rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitted ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Message Sent!
          </>
        ) : isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-[#2D2D2D] border-t-transparent rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            Send Message <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
