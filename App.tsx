import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Video, 
  Smartphone, 
  Zap, 
  Users, 
  Search, 
  Map, 
  PenTool, 
  BarChart, 
  Rocket, 
  Activity, 
  Target, 
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter text-brand-charcoal">
              Client<span className="align-super text-sm">+</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-sm font-medium text-brand-midgray hover:text-brand-charcoal transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-brand-midgray hover:text-brand-charcoal transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium text-brand-midgray hover:text-brand-charcoal transition-colors">Process</a>
            <a href="#case-studies" className="text-sm font-medium text-brand-midgray hover:text-brand-charcoal transition-colors">Case Studies</a>
            <a href="#contact" className="bg-brand-charcoal text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Get a free audit
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-midgray hover:text-brand-charcoal">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-midgray hover:text-brand-charcoal hover:bg-gray-50 rounded-md">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-midgray hover:text-brand-charcoal hover:bg-gray-50 rounded-md">Services</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-midgray hover:text-brand-charcoal hover:bg-gray-50 rounded-md">Process</a>
            <a href="#case-studies" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-midgray hover:text-brand-charcoal hover:bg-gray-50 rounded-md">Case Studies</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-electric-blue hover:bg-gray-50 rounded-md">Get a free audit</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg className="absolute w-full h-full max-w-5xl" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0A84FF" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0A84FF" stopOpacity="0" />
            </linearGradient>
            <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="60" />
            </filter>
          </defs>
          <motion.circle
            cx="300"
            cy="300"
            r="250"
            fill="url(#grad1)"
            filter="url(#blur1)"
            animate={{
              cx: [300, 400, 300],
              cy: [300, 200, 300],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx="700"
            cy="600"
            r="300"
            fill="url(#grad1)"
            filter="url(#blur1)"
            animate={{
              cx: [700, 600, 700],
              cy: [600, 700, 600],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-brand-white/60 backdrop-blur-md text-brand-charcoal text-sm font-medium mb-8 border border-gray-200 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-electric-blue mr-2 animate-pulse"></span>
          Growth for startups.
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-brand-charcoal mb-6 max-w-4xl leading-[1.1]"
        >
          Social growth that turns into <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-400">customers.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-midgray mb-10 max-w-2xl"
        >
          Book a free audit — 15 minutes. We'll show you how to grow your brand, attract followers, and convert attention into real customers.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-brand-charcoal text-white font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-lg">
            Get a free audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-brand-white/80 backdrop-blur-sm text-brand-charcoal font-medium text-lg border border-brand-charcoal hover:bg-gray-50 transition-all hover:scale-105">
            Book a strategy call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-6">
              About Client+
            </h2>
            <p className="text-lg text-brand-midgray mb-6 leading-relaxed">
              Client+ is a modern social media growth agency focused on helping startups and small businesses scale their presence online.
            </p>
            <p className="text-lg text-brand-midgray mb-8 leading-relaxed">
              We combine <strong className="text-brand-charcoal font-semibold">data-driven strategy, viral content frameworks, and modern social media tactics</strong> to help brands stand out and generate real business results.
            </p>
            <div className="bg-brand-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-electric-blue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <p className="text-xl font-medium text-brand-charcoal relative z-10">
                Our goal is simple: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-blue-500">More visibility. More engagement. More customers.</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center items-center"
          >
            {/* Animated SVG Graphic */}
            <div className="w-full max-w-md aspect-square relative">
              <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
                <defs>
                  <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.05" />
                  </filter>
                </defs>
                
                {/* Background floating elements */}
                <motion.circle 
                  cx="300" cy="100" r="40" fill="#0A84FF" opacity="0.1"
                  animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect 
                  x="50" y="250" width="60" height="60" rx="16" fill="#0A84FF" opacity="0.05"
                  animate={{ rotate: [0, 45, 0], y: [0, 20, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Main Dashboard UI Mockup */}
                <motion.g 
                  filter="url(#shadow)"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <rect x="40" y="60" width="320" height="280" rx="24" fill="url(#cardGrad)" stroke="#e2e8f0" strokeWidth="1" />
                  
                  {/* Header */}
                  <rect x="60" y="80" width="120" height="20" rx="10" fill="#f1f5f9" />
                  <circle cx="330" cy="90" r="12" fill="#0A84FF" opacity="0.2" />
                  
                  {/* Chart Area */}
                  <rect x="60" y="120" width="280" height="140" rx="16" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="1" />
                  
                  {/* Animated Chart Line */}
                  <motion.path 
                    d="M 80 230 C 120 230, 140 160, 180 180 C 220 200, 260 130, 320 140" 
                    fill="none" 
                    stroke="#0A84FF" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                  
                  {/* Chart Data Points */}
                  <motion.circle cx="180" cy="180" r="6" fill="#0A84FF" stroke="#fff" strokeWidth="2" 
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} />
                  <motion.circle cx="320" cy="140" r="6" fill="#0A84FF" stroke="#fff" strokeWidth="2" 
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.8 }} />

                  {/* Bottom Stats */}
                  <rect x="60" y="280" width="80" height="30" rx="8" fill="#eff6ff" />
                  <rect x="70" y="290" width="40" height="10" rx="5" fill="#0A84FF" opacity="0.5" />
                  
                  <rect x="160" y="280" width="80" height="30" rx="8" fill="#f1f5f9" />
                  <rect x="170" y="290" width="40" height="10" rx="5" fill="#94a3b8" opacity="0.5" />
                  
                  <rect x="260" y="280" width="80" height="30" rx="8" fill="#f1f5f9" />
                  <rect x="270" y="290" width="40" height="10" rx="5" fill="#94a3b8" opacity="0.5" />
                </motion.g>
                
                {/* Floating Notification Card */}
                <motion.g 
                  filter="url(#shadow)"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <rect x="220" y="100" width="160" height="60" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                  <circle cx="245" cy="130" r="12" fill="#22c55e" opacity="0.2" />
                  <path d="M 240 130 L 244 134 L 250 126" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="265" y="120" width="80" height="8" rx="4" fill="#334155" />
                  <rect x="265" y="134" width="50" height="6" rx="3" fill="#94a3b8" />
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Map className="w-6 h-6 text-electric-blue" />,
      title: "Social Media Strategy",
      description: "We create a growth roadmap tailored for your business and target audience."
    },
    {
      icon: <Video className="w-6 h-6 text-electric-blue" />,
      title: "Content Creation",
      description: "Short-form videos designed to perform on Instagram, TikTok, and YouTube Shorts."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-electric-blue" />,
      title: "Social Media Management",
      description: "We manage posting, engagement, and optimization for consistent growth."
    },
    {
      icon: <Zap className="w-6 h-6 text-electric-blue" />,
      title: "Viral Content Strategy",
      description: "We analyze trends and design content engineered to reach wider audiences."
    },
    {
      icon: <Users className="w-6 h-6 text-electric-blue" />,
      title: "Lead Generation",
      description: "Turn views and followers into real inquiries and customers."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-4">
            Core Services
          </h2>
          <p className="text-lg text-brand-midgray">
            Everything you need to scale your brand's presence and acquire customers through social media.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-3">{service.title}</h3>
              <p className="text-brand-midgray leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Audit",
      description: "We analyze your current social media presence.",
      icon: <Search className="w-5 h-5 text-gray-400" />
    },
    {
      number: "02",
      title: "Strategy",
      description: "We build a custom growth strategy tailored to your business.",
      icon: <Map className="w-5 h-5 text-gray-400" />
    },
    {
      number: "03",
      title: "Content Execution",
      description: "We create and optimize content designed for reach and engagement.",
      icon: <PenTool className="w-5 h-5 text-gray-400" />
    },
    {
      number: "04",
      title: "Growth & Results",
      description: "Your brand grows while leads and customers increase.",
      icon: <TrendingUp className="w-5 h-5 text-gray-400" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-6">
              Our Process
            </h2>
            <p className="text-lg text-brand-midgray mb-8">
              A proven framework designed to take you from zero to viral, and from views to paying customers.
            </p>
            <a href="#contact" className="inline-flex items-center font-medium text-electric-blue hover:text-blue-700 transition-colors">
              Start your journey today <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-200 hover:border-blue-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <span className="text-3xl font-bold text-gray-300">{step.number}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-brand-charcoal">{step.title}</h3>
                  </div>
                  <p className="text-brand-midgray">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const stats = [
    { value: "+300%", label: "Follower Growth", icon: <Users className="w-5 h-5" /> },
    { value: "2M+", label: "Viral Video Reach", icon: <Zap className="w-5 h-5" /> },
    { value: "40+", label: "Leads in 30 Days", icon: <Target className="w-5 h-5" /> }
  ];

  return (
    <section id="case-studies" className="py-24 bg-brand-charcoal text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Real Results.
          </h2>
          <p className="text-lg text-gray-400">
            We don't just chase vanity metrics. We build systems that generate tangible business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 p-8 rounded-3xl text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-electric-blue mb-6">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-2 tracking-tight">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Startup-focused growth strategies",
    "Viral content expertise",
    "Data-driven marketing",
    "Modern social media approach",
    "Results-focused execution"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="aspect-square rounded-3xl bg-brand-white border border-gray-200 shadow-sm p-8 flex flex-col justify-center">
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-electric-blue" />
                    </div>
                    <span className="text-lg font-medium text-brand-charcoal">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-charcoal mb-6">
              Why Choose Client+
            </h2>
            <p className="text-lg text-brand-midgray mb-8">
              We understand the unique challenges startups face. You need to move fast, stand out, and see a return on your investment.
            </p>
            <p className="text-lg text-brand-midgray">
              Unlike traditional agencies, we don't just post for the sake of posting. Every piece of content is engineered with a specific goal: to grow your audience and acquire customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-charcoal rounded-3xl p-10 md:p-16 text-center text-brand-white shadow-xl relative overflow-hidden"
        >
          {/* Subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's turn your social media into a powerful customer acquisition channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-brand-white text-brand-charcoal font-semibold text-lg hover:bg-gray-100 transition-colors shadow-sm">
                Book Free Strategy Call
              </button>
              <button className="px-8 py-4 rounded-full bg-transparent text-brand-white font-semibold text-lg border border-gray-600 hover:bg-gray-800 transition-colors">
                Get a Free Social Media Audit
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter text-brand-white mb-4 block">
              Client<span className="text-electric-blue align-super text-sm">+</span>
            </a>
            <p className="max-w-xs mb-6">
              A modern social media growth agency helping startups scale their presence online.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-brand-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-brand-white transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-brand-white transition-colors">Process</a></li>
              <li><a href="#case-studies" className="hover:text-brand-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hello@clientplus.agency" className="hover:text-brand-white transition-colors">hello@clientplus.agency</a></li>
              <li>Global / Remote Agency</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Client+ Agency. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white selection:bg-electric-blue selection:text-brand-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <CaseStudies />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
