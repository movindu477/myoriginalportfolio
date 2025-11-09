import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const backgroundRef = useRef(null);

  // Mouse move effect for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      
      backgroundRef.current.style.background = `
        radial-gradient(
          circle at ${x}% ${y}%,
          rgba(59, 130, 246, 0.1) 0%,
          rgba(139, 92, 246, 0.08) 15%,
          rgba(236, 72, 153, 0.05) 30%,
          transparent 60%
        ),
        linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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
      href: 'https://twitter.com/movindu',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section
      id="contact"
      ref={backgroundRef}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-500 rounded-full animate-float animation-delay-1000 opacity-40"></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-pink-500 rounded-full animate-float animation-delay-2000 opacity-50"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base font-medium text-gray-300">GET IN TOUCH</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Let's Work
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8 sm:mb-12"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed sm:leading-loose font-light">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together. 
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] animate-slideIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                    <p className="text-white text-lg font-semibold group-hover:text-blue-300 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-400 text-lg mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:border-white/20 ${social.color} animate-slideIn`}
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="relative p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Success Message */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10 animate-fadeIn">
                  <div className="text-center p-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="animate-slideIn" style={{ animationDelay: '400ms' }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white/10 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div className="animate-slideIn" style={{ animationDelay: '500ms' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white/10 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="animate-slideIn" style={{ animationDelay: '600ms' }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 transition-all duration-300 ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-white/10 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div className="animate-slideIn" style={{ animationDelay: '700ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-white/10 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <div className="animate-slideIn" style={{ animationDelay: '800ms' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-white/10 mt-20 pt-8 pb-6">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Movindu Weerabahu. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;