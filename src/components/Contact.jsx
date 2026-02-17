import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, ArrowRight } from 'lucide-react';
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

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
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

    setIsSubmitted(true);

    const whatsappMessage = `Hello! I'm ${formData.name}.\n\nSubject: ${formData.subject}\n\nMessage: ${formData.message}\n\nEmail: ${formData.email}`;
    const whatsappNumber = '94743090367';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 1500);

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'movinduweerabahu314@gmail.com', href: 'mailto:movinduweerabahu314@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+94 74 309 0367', href: 'tel:+94 74 309 0367' },
    { icon: MapPin, label: 'Location', value: 'Kandana, Sri Lanka', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/movindu477' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/movindu-weerabahu-75a6b6320/' },
    { icon: InstagramLogoIcon, label: 'Instagram', href: 'https://www.instagram.com/itz.movi_jr/' }
  ];

  return (
    <section id="contact" className="w-full bg-black text-white py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5400] rounded-full filter blur-[150px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF5400] animate-pulse"></span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Get in Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 uppercase text-white">
            Let's Work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5400] to-orange-600">Together.</span>
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            Ready to bring your ideas to life? I'm always open to new opportunities and collaborations.
          </p>

          <div className="space-y-8 mb-12">
            {contactInfo.map((item, index) => (
              <a key={index} href={item.href} className="flex items-center gap-4 sm:gap-6 group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-[#FF5400] transition-all duration-300 shadow-sm border border-white/5 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm sm:text-lg font-bold text-white group-hover:text-[#FF5400] transition-colors break-all">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg bg-white/5"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Modern Form */}
        <div className="order-1 lg:order-2">
          <div className="bg-[#111] p-8 md:p-10 rounded-[30px] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-lg">

            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5400]/10 rounded-bl-[100px] -z-0"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3 text-white">
                Send a Message
                <ArrowRight className="w-5 h-5 text-[#FF5400]" />
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-[#1a1a1a] border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#FF5400]'} rounded-xl px-4 py-3.5 text-white outline-none transition-all placeholder:text-gray-600 font-medium`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs ml-1 font-medium">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[#1a1a1a] border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#FF5400]'} rounded-xl px-4 py-3.5 text-white outline-none transition-all placeholder:text-gray-600 font-medium`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs ml-1 font-medium">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border ${errors.subject ? 'border-red-500' : 'border-white/10 focus:border-[#FF5400]'} rounded-xl px-4 py-3.5 text-white outline-none transition-all placeholder:text-gray-600 font-medium`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-xs ml-1 font-medium">{errors.subject}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-[#1a1a1a] border ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#FF5400]'} rounded-xl px-4 py-3.5 text-white outline-none transition-all placeholder:text-gray-600 font-medium resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-xs ml-1 font-medium">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-[#FF5400] text-white font-bold text-base uppercase tracking-wider py-4 rounded-xl hover:bg-[#ff6a22] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group shadow-xl shadow-orange-500/10"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 animate-bounce" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Trust badge or extra info */}
            <div className="mt-8 flex justify-center lg:justify-start gap-2 text-gray-500 text-xs font-medium uppercase tracking-widest pl-4">
              <span>• Fast Response</span>
              <span>• Secure</span>
            </div>
          </div>
        </div>

      </div>

      {/* Modern Footer */}
      <div className="mt-24 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-400 text-sm font-medium">
          © 2026 Movindu Weerabahu. Made with <span className="text-[#FF5400]">Creativity</span>.
        </p>
      </div>
    </section>
  );
};

export default Contact;