import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-[#F9EC31] border-b border-foreground/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground">
            CraftWords
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link to="#about" className="text-foreground hover:opacity-70 transition-opacity">
              About Us
            </Link>
            <Link to="#services" className="text-foreground hover:opacity-70 transition-opacity">
              Copy Writing
            </Link>
            <Link to="#work" className="text-foreground hover:opacity-70 transition-opacity">
              My Vision
            </Link>
            <Link to="#contact" className="text-foreground hover:opacity-70 transition-opacity">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      <section className="bg-[#F9EC31] py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                We are working to create a ripple of change
              </h1>
              <p className="text-lg text-foreground/80">
                Understand the emotion of choosing the right words
              </p>
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/hero-illustration-J-IR0.png" 
                alt="Copywriting hero" 
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#6DD5D5] py-20 relative">
        <div className="container mx-auto px-6">
          <div className="bg-[#2D2D2D] rounded-2xl p-12 md:p-16 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Understanding Emotion Through Words
                </h2>
                <p className="text-white/90 leading-relaxed">
                  It's hard for customers to get you, when your message is muddled. When your presentation is pedestrian. When your website sits buried beneath a snowstorm of overloaded copy.
                </p>
                <p className="text-white/90 leading-relaxed">
                  To get customers, your positioning and messaging must engage your audience, show them what you do, how you can help and why anyone should care.
                </p>
                <p className="text-white/90 leading-relaxed">
                  We're a brand messaging studio. And we get brands like yours, more famous through bold stories and clear brand messaging that cuts through noise.
                </p>
                <p className="text-white/90 leading-relaxed">
                  We unearth your unique positioning and value. So we can position you distinctively to clearly communicate who you are and why customers can't live without you.
                </p>
                <div className="flex flex-col gap-4 pt-4">
                  <button className="flex items-center gap-2 text-[#6DD5D5] hover:underline">
                    <ArrowRight className="h-4 w-4" />
                    <span>See Our Services</span>
                  </button>
                  <button className="flex items-center gap-2 text-[#6DD5D5] hover:underline">
                    <ArrowRight className="h-4 w-4" />
                    <span>Get In Touch</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/emotional-understanding-2ohl9.png" 
                  alt="Understanding emotion" 
                  className="w-full max-w-sm rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#6DD5D5] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            See some work
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <img 
                  src="/copywriting-abstract-BVWdF.png" 
                  alt="Copywriting project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Translating metabolic health
                </h3>
                <p className="text-foreground/70">
                  Brand copywriting and messaging strategy for health tech startup
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <img 
                  src="/copywriting-abstract-BVWdF.png" 
                  alt="Complex communication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Communicating the complex
                </h3>
                <p className="text-foreground/70">
                  Technical copywriting for enterprise software solutions
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <img 
                  src="/copywriting-abstract-BVWdF.png" 
                  alt="Brand voice" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Bringing a consistent tone
                </h3>
                <p className="text-foreground/70">
                  Voice and tone guidelines for consumer brand
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              See All Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#6DD5D5] py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            We've collaborated with
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            <div className="text-2xl font-bold text-foreground">Microsoft</div>
            <div className="text-2xl font-bold text-foreground">Apple</div>
            <div className="text-2xl font-bold text-foreground">HP</div>
            <div className="text-2xl font-bold text-foreground">T-Mobile</div>
            <div className="text-2xl font-bold text-foreground">Nike</div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9EC31] py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Some lovely words from our clients...
            </h3>
            <div className="bg-white rounded-lg p-8 shadow-lg mb-4">
              <p className="text-foreground/80 leading-relaxed mb-4">
                "Very professional and knowledgeable. I had a great experience working with Craft Words organizing communications training for the Digital Impact Alliance. They customized each workshop to our specific needs and industry, and were adaptable as new things came up. Our team had a lot of fun during the sessions and learned new strategies and techniques for writing and presenting."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-[#6DD5D5] font-bold">Arielle Diamond</div>
                <div className="text-foreground/60">Senior Communications Manager, Digital Impact Alliance</div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full ${i === 3 ? 'w-8 bg-foreground' : 'w-2 bg-foreground/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F9EC31] py-20">
        <div className="container mx-auto px-6">
          <div className="bg-[#2D2D2D] rounded-2xl p-12 md:p-16 text-white max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="bg-[#F9EC31] text-foreground px-2">chat</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              All our projects start with a conversation. Maybe you're not entirely sure what you need, that's fine, we're happy to explore it with you.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#6DD5D5] text-foreground hover:bg-[#6DD5D5]/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#F9EC31] border-t border-foreground/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">CraftWords</h3>
              <p className="text-foreground/70 text-sm">
                Professional copywriting services that create impact through the right words.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Info</h4>
              <div className="space-y-2 text-foreground/70 text-sm">
                <p>Our Work</p>
                <p>Our Blog</p>
                <p>Workshops</p>
                <p>Memership</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Services</h4>
              <div className="space-y-2 text-foreground/70 text-sm">
                <p>Copywriting</p>
                <p>Brand positioning</p>
                <p>Voice of value</p>
                <p>Brand messaging</p>
                <p>UX copywriting</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Writing for email</h4>
              <div className="space-y-2 text-foreground/70 text-sm">
                <p>Content and thought leadership</p>
                <p>Website copy and strategy</p>
                <p>Presentation copy</p>
                <p>Craft To Go</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/10">
            <p className="text-foreground/70 text-sm mb-4 md:mb-0">
              © 2025 {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:opacity-70 transition-opacity"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
