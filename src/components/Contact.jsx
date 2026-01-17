import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Show success animation
    setIsSubmitted(true);
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Hello! I'm ${formData.name}.\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}\n\nEmail: ${formData.email}`;
    const whatsappNumber = '94743090367'; // Sri Lanka country code +94
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Wait for animation to show, then open WhatsApp after 1.5 seconds
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 1500);
    
    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'movinduweerabahu314@gmail.com',
      href: 'mailto:movinduweerabahu314@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 74 309 0367',
      href: 'tel:+94 74 309 0367'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/movindu477',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/movindu-weerabahu-75a6b6320/',
      color: 'hover:text-blue-400'
    },
    {
      icon: InstagramLogoIcon,
      label: '',
      href: 'https://www.instagram.com/itz.movi_jr/?utm_source=qr&igsh=MXhiMms0M2kwa3c5cg%3D%3D#',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-black text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-1000 opacity-20"></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float animation-delay-2000 opacity-25"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-white/70">GET IN TOUCH</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 md:mb-6">
            <span className="text-white">
              Let's Work
            </span>
            <br />
            <span className="text-purple-400">
              Together
            </span>
          </h2>

          <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-4 sm:mb-6 md:mb-8"></div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-light">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together. 
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 md:mb-6 text-white">
                Let's Connect
              </h3>
              <p className="text-white/60 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 border border-purple-500/30 flex items-center justify-center rounded-lg">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/60 text-xs sm:text-sm font-medium">{item.label}</p>
                    <p className="text-white text-sm sm:text-base md:text-lg font-semibold truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 sm:pt-6">
              <p className="text-white/60 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Follow me on</p>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 sm:w-12 sm:h-12 border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 rounded-lg"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-purple-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Success Message Overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center z-20 animate-fadeIn">
                  <div className="text-center p-6 sm:p-8 animate-slideUp">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center animate-scaleIn">
                        <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-white animate-checkMark" />
                      </div>
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 animate-fadeInUp">Message Sent!</h3>
                    <p className="text-white/70 text-sm sm:text-base md:text-lg mb-1 sm:mb-2 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                      Your message is being sent to WhatsApp
                    </p>
                    <p className="text-white/50 text-xs sm:text-sm animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                      Opening WhatsApp...
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-white/70 mb-1.5 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border bg-white/5 backdrop-blur-sm text-white text-sm sm:text-base placeholder-white/40 transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white/10 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white/70 mb-1.5 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border bg-white/5 backdrop-blur-sm text-white text-sm sm:text-base placeholder-white/40 transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white/10 focus:border-purple-500'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-white/70 mb-1.5 sm:mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border bg-white/5 backdrop-blur-sm text-white text-sm sm:text-base placeholder-white/40 transition-all duration-300 ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-white/10 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-white/70 mb-1.5 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 rounded-lg border bg-white/5 backdrop-blur-sm text-white text-sm sm:text-base placeholder-white/40 transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-white/10 focus:border-purple-500'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full bg-white text-black hover:bg-white/90 font-medium text-sm sm:text-base py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg"
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-white/10 mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 pb-4 sm:pb-6">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            © 2024 Movindu Weerabahu. All rights reserved.
          </p>
        </div>
      </div>

      {/* Success Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes checkMark {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(-45deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-checkMark {
          animation: checkMark 0.6s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Contact;