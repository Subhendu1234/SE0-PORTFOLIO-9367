import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin, Sparkles, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PortfolioCard } from "@/components/PortfolioCard";
import { ContactForm } from "@/components/ContactForm";
import { BackToTop } from "@/components/BackToTop";
import { AnimatedStats } from "@/components/AnimatedStats";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F9EC31]/95 backdrop-blur-md border-b border-foreground/10 shadow-lg"
      >
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground hover:scale-105 transition-transform">
            CraftWords
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home', id: 'hero' },
              { label: 'About Us', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Work', id: 'work' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-[#6DD5D5] transition-all relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6DD5D5] transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
        </nav>
      </motion.header>

      <section id="hero" className="bg-[#F9EC31] pt-32 pb-20 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#6DD5D5] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#2D2D2D] rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We are working to create a{' '}
                <span className="text-gradient inline-block">ripple of change</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-foreground/80 font-medium"
              >
                Understand the emotion of choosing the right words
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <MagneticButton
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-[#2D2D2D] text-white rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-[#6DD5D5]/50 transition-all animate-pulse-glow"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.img
                src="/hero-illustration-J-IR0.png"
                alt="Copywriting hero"
                className="w-full max-w-md rounded-lg animate-float"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#6DD5D5] py-20 relative overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-[#F9EC31] rounded-full blur-3xl opacity-20"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="glass-effect bg-[#2D2D2D]/95 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Understanding Emotion Through{' '}
                    <span className="text-[#F9EC31]">Words</span>
                  </h2>
                  <p className="text-white/90 leading-relaxed text-lg">
                    It's hard for customers to get you, when your message is muddled. When your presentation is pedestrian. When your website sits buried beneath a snowstorm of overloaded copy.
                  </p>
                  <p className="text-white/90 leading-relaxed text-lg">
                    To get customers, your positioning and messaging must engage your audience, show them what you do, how you can help and why anyone should care.
                  </p>
                  <p className="text-white/90 leading-relaxed text-lg">
                    We're a brand messaging studio. And we get brands like yours, more famous through bold stories and clear brand messaging that cuts through noise.
                  </p>
                  <p className="text-white/90 leading-relaxed text-lg">
                    We unearth your unique positioning and value. So we can position you distinctively to clearly communicate who you are and why customers can't live without you.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <motion.img
                    src="/emotional-understanding-2ohl9.png"
                    alt="Understanding emotion"
                    className="w-full max-w-sm rounded-lg shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="services" className="bg-[#6DD5D5] py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Transform your brand with our comprehensive copywriting and messaging solutions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Brand Copywriting',
                description: 'Craft compelling brand stories that resonate with your audience and drive engagement.',
                delay: 0,
              },
              {
                icon: Target,
                title: 'Messaging Strategy',
                description: 'Develop clear, focused messaging that cuts through the noise and converts.',
                delay: 0.2,
              },
              {
                icon: TrendingUp,
                title: 'UX Copywriting',
                description: 'Create user-centric copy that guides, delights, and enhances the user experience.',
                delay: 0.4,
              },
            ].map((service) => (
              <AnimatedSection key={service.title} delay={service.delay}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#6DD5D5] to-[#F9EC31] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center gap-2 text-[#6DD5D5] font-semibold group-hover:gap-4 transition-all"
                    onClick={() => scrollToSection('contact')}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2D2D2D] py-20 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#6DD5D5] to-[#F9EC31] rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Results That Speak Volumes
            </h2>
            <p className="text-white/70 text-lg">
              Numbers that showcase our commitment to excellence
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-4 gap-12">
            <AnimatedStats value={500} label="Projects Completed" suffix="+" />
            <AnimatedStats value={98} label="Client Satisfaction" suffix="%" />
            <AnimatedStats value={150} label="Happy Clients" suffix="+" />
            <AnimatedStats value={10} label="Years Experience" suffix="+" />
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#6DD5D5] py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              See some <span className="text-gradient">work</span>
            </h2>
            <p className="text-foreground/80 text-lg">
              Explore our portfolio of transformative copywriting projects
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <PortfolioCard
              title="Translating metabolic health"
              description="Brand copywriting and messaging strategy for health tech startup that increased conversion by 150%"
              image="/copywriting-abstract-BVWdF.png"
              category="Healthcare"
              delay={0}
            />
            <PortfolioCard
              title="Communicating the complex"
              description="Technical copywriting for enterprise software solutions that simplified user onboarding"
              image="/copywriting-abstract-BVWdF.png"
              category="Technology"
              delay={0.2}
            />
            <PortfolioCard
              title="Bringing a consistent tone"
              description="Voice and tone guidelines for consumer brand reaching 2M+ customers globally"
              image="/copywriting-abstract-BVWdF.png"
              category="Consumer Goods"
              delay={0.4}
            />
          </div>
          
          <AnimatedSection delay={0.6}>
            <div className="flex justify-start">
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-[#2D2D2D] text-white rounded-full font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-[#F9EC31]/50 transition-all"
              >
                See All Work
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#6DD5D5] py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              We've collaborated with
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center">
              {['Microsoft', 'Apple', 'HP', 'T-Mobile', 'Nike'].map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-3xl font-bold text-foreground/70 hover:text-foreground transition-all cursor-pointer"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Some lovely words from our{' '}
                <span className="text-gradient">clients</span>
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-effect bg-white rounded-3xl p-10 md:p-12 shadow-2xl relative"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#6DD5D5] to-[#F9EC31] rounded-full blur-xl opacity-30"
                />
                <motion.div className="text-6xl text-[#6DD5D5] mb-6">"</motion.div>
                <p className="text-foreground/80 leading-relaxed text-lg mb-8">
                  Very professional and knowledgeable. I had a great experience working with Craft Words organizing communications training for the Digital Impact Alliance. They customized each workshop to our specific needs and industry, and were adaptable as new things came up. Our team had a lot of fun during the sessions and learned new strategies and techniques for writing and presenting.
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-xl font-bold text-[#2D2D2D]">Arielle Diamond</div>
                  <div className="text-foreground/60">Senior Communications Manager, Digital Impact Alliance</div>
                </div>
                <div className="flex justify-center gap-3 mt-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ scale: 1.3 }}
                      className={`h-3 rounded-full cursor-pointer transition-all ${
                        i === 3 ? 'w-10 bg-[#6DD5D5]' : 'w-3 bg-foreground/20 hover:bg-[#6DD5D5]/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="contact" className="bg-[#F9EC31] py-20 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#6DD5D5] rounded-full blur-3xl opacity-20"
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="glass-effect bg-[#2D2D2D]/95 rounded-3xl p-12 md:p-16 text-white max-w-5xl mx-auto shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  Let's{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block bg-[#F9EC31] text-[#2D2D2D] px-4 py-2 rounded-2xl cursor-pointer"
                  >
                    chat
                  </motion.span>
                </h2>
                <p className="text-white/90 text-xl max-w-2xl mx-auto">
                  All our projects start with a conversation. Maybe you're not entirely sure what you need, that's fine, we're happy to explore it with you.
                </p>
              </motion.div>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="bg-[#2D2D2D] border-t border-foreground/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">CraftWords</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Professional copywriting services that create impact through the right words.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-bold text-white mb-4">Info</h4>
              <div className="space-y-3 text-white/70 text-sm">
                {['Our Work', 'Our Blog', 'Workshops', 'Membership'].map((item) => (
                  <motion.p
                    key={item}
                    whileHover={{ x: 5, color: '#6DD5D5' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-bold text-white mb-4">Services</h4>
              <div className="space-y-3 text-white/70 text-sm">
                {['Copywriting', 'Brand positioning', 'Voice of value', 'Brand messaging', 'UX copywriting'].map((item) => (
                  <motion.p
                    key={item}
                    whileHover={{ x: 5, color: '#6DD5D5' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-bold text-white mb-4">More</h4>
              <div className="space-y-3 text-white/70 text-sm">
                {['Content and thought leadership', 'Website copy and strategy', 'Presentation copy', 'Craft To Go'].map((item) => (
                  <motion.p
                    key={item}
                    whileHover={{ x: 5, color: '#6DD5D5' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
          >
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © 2025 {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#6DD5D5] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:hello@craftwords.com"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#6DD5D5] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
