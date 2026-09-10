import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Leaf,
  Flame,
  ShieldCheck,
  Truck,
  Send,
  ChevronUp,
} from 'lucide-react';

// Animation wrapper component
function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Leaf className="w-8 h-8 text-primary-green transition-transform group-hover:rotate-12" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-primary-red">Agapy</span>
              <span className={`text-text-dark ml-1 ${isScrolled ? 'text-text-dark' : 'text-white'}`}>
                Energies
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-primary-red ${
                  isScrolled ? 'text-text-dark' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+256790357777"
              className="bg-primary-red text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary-red-dark transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-text-dark' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white shadow-xl overflow-hidden"
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-4 text-text-dark font-medium hover:text-primary-red hover:bg-bg-light rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+256790357777"
            className="block text-center bg-primary-red text-white px-5 py-3 rounded-full font-semibold hover:bg-primary-red-dark transition-all"
          >
            <Phone className="w-4 h-4 inline mr-2" />
            Call Now
          </a>
        </div>
      </motion.div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/3f204b2f-c9b8-4ce5-83e7-f0cdd2dfba92/_result.png"
          alt="Clean modern kitchen with LPG gas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Flame className="w-4 h-4 text-primary-red" />
              <span className="text-white/90 text-sm font-medium">Clean Energy for Uganda</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Powering Uganda with{' '}
            <span className="text-primary-green">Safe, Reliable</span>{' '}
            Energy.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl"
          >
            Agapy Energies Ltd is your trusted partner for premium LPG distribution across Kampala and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="tel:+256790357777"
              className="bg-primary-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-green-dark transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <Flame className="w-5 h-5" />
              Order Gas Now
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-text-dark transition-all hover:scale-105"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image/Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-green/10 to-primary-red/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Leaf className="w-12 h-12 text-primary-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark mb-2">Clean Energy</h3>
                    <p className="text-text-gray">For a Better Tomorrow</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-green/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-red/20 rounded-full blur-xl" />
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-green/10 rounded-full px-4 py-2 mb-4">
                <Leaf className="w-4 h-4 text-primary-green" />
                <span className="text-primary-green font-medium text-sm">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">
                Who We Are
              </h2>
              <p className="text-text-gray text-lg leading-relaxed mb-6">
                Agapy Energies Ltd is a premier LPG retail and distribution company headquartered in Mutungo, Central Kampala. We are dedicated to transforming how Uganda accesses clean cooking energy.
              </p>
              <p className="text-text-gray text-lg leading-relaxed mb-8">
                Our team ensures timely delivery, safety compliance, and affordable pricing for households and businesses alike.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-bg-light rounded-xl">
                  <div className="text-2xl font-bold text-primary-red">5+</div>
                  <div className="text-sm text-text-gray">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-bg-light rounded-xl">
                  <div className="text-2xl font-bold text-primary-green">1000+</div>
                  <div className="text-sm text-text-gray">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-bg-light rounded-xl">
                  <div className="text-2xl font-bold text-primary-red">24/7</div>
                  <div className="text-sm text-text-gray">Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Mission Section
function MissionSection() {
  const cards = [
    {
      icon: <Leaf className="w-8 h-8 text-primary-green" />,
      title: 'Clean Energy Transition',
      description: 'Promoting eco-friendly LPG solutions to reduce deforestation and protect Uganda\'s natural environment for future generations.',
      bgColor: 'bg-primary-green/10',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-red" />,
      title: 'Safety First',
      description: 'Ensuring the highest standards of cylinder handling, storage, and delivery safety across all our operations.',
      bgColor: 'bg-primary-red/10',
    },
    {
      icon: <Truck className="w-8 h-8 text-primary-green" />,
      title: 'Accessibility',
      description: 'Making reliable gas available to every corner of Kampala through our efficient logistics network and dedicated delivery team.',
      bgColor: 'bg-primary-green/10',
    },
  ];

  return (
    <section id="mission" className="py-20 lg:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-red/10 rounded-full px-4 py-2 mb-4">
            <Flame className="w-4 h-4 text-primary-red" />
            <span className="text-primary-red font-medium text-sm">Our Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Purpose & Objectives
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Driven by our commitment to clean energy, safety, and accessibility for all Ugandans.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full"
              >
                <div className={`w-16 h-16 rounded-xl ${card.bgColor} flex items-center justify-center mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{card.title}</h3>
                <p className="text-text-gray leading-relaxed">{card.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp message
    const message = `Hello Agapy Energies!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AOrder Details: ${formData.message}`;
    window.open(`https://wa.me/256790357777?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-green/10 rounded-full px-4 py-2 mb-4">
            <Phone className="w-4 h-4 text-primary-green" />
            <span className="text-primary-green font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Contact Us
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Ready to order? Have questions? Reach out to us and we'll get back to you promptly.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Details */}
            <div className="space-y-8">
              <div className="bg-bg-light rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-text-dark mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark mb-1">Location</h4>
                      <p className="text-text-gray">Zone 1A, Mutungo, Central - Kampala, Uganda</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark mb-1">Phone</h4>
                      <p className="text-text-gray">
                        <a href="tel:+256790357777" className="hover:text-primary-red transition-colors">
                          +256 790 357 777
                        </a>
                        <br />
                        <a href="tel:+256752461038" className="hover:text-primary-red transition-colors">
                          +256 752 461 038
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark mb-1">Email</h4>
                      <p className="text-text-gray">
                        <a href="mailto:agapyenergies@gmail.com" className="hover:text-primary-green transition-colors">
                          agapyenergies@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-r from-primary-red to-primary-red-dark rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/80">Monday - Saturday</span>
                    <span className="font-medium">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Sunday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    <Flame className="w-4 h-4 inline mr-1" />
                    Emergency deliveries available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-bg-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text-dark mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+256 7XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Order Details / Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need (e.g., 6kg cylinder refill, new cylinder purchase, etc.)"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-green text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-green-dark transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-primary-green" />
              <span className="text-2xl font-bold">
                <span className="text-primary-red">Agapy</span>{' '}
                <span className="text-white">Energies</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for premium LPG distribution across Kampala. Safe, reliable, and affordable clean cooking energy for every home.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green transition-colors">
                <i className="fab fa-facebook-f text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green transition-colors">
                <i className="fab fa-twitter text-sm" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green transition-colors">
                <i className="fab fa-instagram text-sm" />
              </a>
              <a href="https://wa.me/256790357777" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-green transition-colors">
                <i className="fab fa-whatsapp text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary-green transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary-green transition-colors">About Us</a></li>
              <li><a href="#mission" className="text-gray-400 hover:text-primary-green transition-colors">Our Mission</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary-green" />
                <span className="text-sm">Zone 1A, Mutungo, Central Kampala</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary-green" />
                <a href="tel:+256790357777" className="text-sm hover:text-primary-green transition-colors">+256 790 357 777</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary-green" />
                <a href="mailto:agapyenergies@gmail.com" className="text-sm hover:text-primary-green transition-colors">agapyenergies@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Agapy Energies Ltd. All rights reserved.
          </p>
          <a
            href="#home"
            className="w-10 h-10 bg-primary-green/20 rounded-full flex items-center justify-center hover:bg-primary-green transition-colors group"
          >
            <ChevronUp className="w-5 h-5 text-primary-green group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Floating Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256790357777?text=Hello%20Agapy%20Energies!%20I'd%20like%20to%20order%20gas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all animate-pulse-green"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-2xl" />
    </a>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
