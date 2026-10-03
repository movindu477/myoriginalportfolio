import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, User, AtSign, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import { InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr';
import bgImage from '../assets/contact.avif';
import meImage from '../assets/me3.jpg';

const EMAIL = 'movinduweerabahu314@gmail.com';
const WHATSAPP_NUMBER = '94743090367';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/movindu477' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/movindu-weerabahu-75a6b6320/' },
  { icon: InstagramLogoIcon, label: 'Instagram', href: 'https://www.instagram.com/itz.movi_jr/' },
];

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Jane Smith', autoComplete: 'name', icon: User },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@example.com', autoComplete: 'email', icon: AtSign },
];

const inputClass = (hasError) =>
  `w-full rounded-md bg-[#f2f2f2] px-4 py-3 text-base sm:text-sm text-neutral-900 font-medium outline-none transition-all
   placeholder:text-neutral-400 border focus:bg-white focus:ring-2 focus:ring-[#FF5400]/25
   ${hasError ? 'border-red-500' : 'border-transparent focus:border-[#FF5400]'}`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const whatsappMessage = `Hello! I'm ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email}`;
    // Opened straight from the submit gesture so popup blockers allow it
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative w-full min-h-svh overflow-hidden bg-black text-white flex flex-col">

      {/* ── Background: blurred portrait, colour-graded orange → teal ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[50%_35%] scale-125 blur-[3px] saturate-150"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(140,30,0,0.88) 0%, rgba(230,67,12,0.5) 38%, rgba(0,105,105,0.5) 72%, rgba(0,40,45,0.9) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 85% 75% at 60% 50%, transparent 30%, rgba(0,0,0,0.65) 100%)' }}
        />
        {/* Blend into the dark section above and the footer below */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0d0d0d] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex items-center w-full max-w-[1400px] mx-auto px-5 sm:px-12 lg:px-20 pt-28 pb-12 sm:pt-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── Heading + direct contact (first on mobile, right on desktop) ── */}
          <div className="lg:col-span-7 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-sm bg-white px-2.5 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-neutral-900">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400]" />
              Get in Touch
            </span>
            <h2 className="mt-5 font-black uppercase leading-[0.95] tracking-tight text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] [text-shadow:0_4px_30px_rgba(0,0,0,0.35)]">
              Let&apos;s Create<br />Together
            </h2>
            <p className="mt-6 max-w-md text-sm sm:text-base text-white/75 leading-relaxed">
              Have a project in mind or an opportunity to share? I&apos;m always open to new collaborations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-x-6 sm:gap-y-3">
              <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white/90 hover:text-white break-all">
                <span className="w-9 h-9 shrink-0 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
                  <Mail className="w-4 h-4" />
                </span>
                {EMAIL}
              </a>
              <a href="tel:+94743090367" className="group inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white/90 hover:text-white">
                <span className="w-9 h-9 shrink-0 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
                  <Phone className="w-4 h-4" />
                </span>
                +94 74 309 0367
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="w-9 h-9 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center text-white/90
                               transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Form card ── */}
          <div className="lg:col-span-5 xl:col-span-4 lg:order-1 w-full max-w-md mx-auto lg:mx-0">
            <div className="overflow-hidden rounded-lg bg-white text-neutral-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              {/* Header band */}
              <div className="relative h-32 sm:h-36 flex items-center justify-center overflow-hidden bg-[#E6430C]">
                <img
                  src={meImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_38%]"
                />
                {/* Darkens the photo just enough for the name to read clearly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
                <span className="relative text-lg sm:text-xl font-black text-white tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
                  Movindu<sup className="ml-0.5 text-[10px] align-super">®</sup>
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <h3 className="text-center text-base sm:text-lg font-black tracking-tight">Reach Out to Me</h3>

                <form onSubmit={handleSubmit} noValidate className="mt-5 sm:mt-6 flex flex-col gap-4">
                  {fields.map((f) => {
                    const Icon = f.icon;
                    return (
                      <div key={f.name}>
                        <label htmlFor={`contact-${f.name}`} className="block mb-1.5 text-[11px] font-black">
                          {f.label}
                        </label>
                        <div className="relative">
                          <input
                            id={`contact-${f.name}`}
                            type={f.type}
                            name={f.name}
                            autoComplete={f.autoComplete}
                            value={formData[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            aria-invalid={!!errors[f.name]}
                            aria-describedby={errors[f.name] ? `contact-${f.name}-error` : undefined}
                            className={`${inputClass(errors[f.name])} pr-10`}
                          />
                          <Icon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                        </div>
                        {errors[f.name] && (
                          <p id={`contact-${f.name}-error`} className="mt-1 text-[11px] font-medium text-red-600">{errors[f.name]}</p>
                        )}
                      </div>
                    );
                  })}

                  <div>
                    <label htmlFor="contact-message" className="block mb-1.5 text-[11px] font-black">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1 text-[11px] font-medium text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-md bg-neutral-950 px-6 py-3.5 text-xs sm:text-[13px] font-black uppercase tracking-wider text-white
                               transition-colors hover:bg-[#FF5400] active:scale-[0.99] disabled:bg-green-600 disabled:cursor-default"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        WhatsApp Opened
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-neutral-400">Opens WhatsApp with your message ready to send.</p>
                  <p className="sr-only" role="status">{isSubmitted ? 'WhatsApp opened with your message.' : ''}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-12 lg:px-20 pb-6">
        <div className="pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs text-white/60 font-medium">
            © 2026 Movindu Weerabahu. Made with <span className="text-[#FF5400]">Creativity</span>.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors"
          >
            Say hello <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
