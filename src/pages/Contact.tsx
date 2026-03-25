import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Kitchen Remodeling',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', projectType: 'Kitchen Remodeling', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary-lightgray min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-green mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="font-sans text-lg md:text-xl text-secondary-mediumgray max-w-3xl mx-auto"
          >
            Ready to start your remodeling journey? Reach out to us for a free consultation and estimate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="bg-secondary-white rounded-xl p-8 shadow-[0_4px_16px_rgba(27,77,62,0.08)]">
              <h2 className="font-display font-semibold text-2xl text-primary-charcoal mb-8">Get In Touch</h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-lightgreen flex items-center justify-center shrink-0">
                    <Phone className="text-primary-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-primary-charcoal mb-1">Phone</h3>
                    <p className="font-sans text-secondary-mediumgray">(561) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-lightgreen flex items-center justify-center shrink-0">
                    <Mail className="text-primary-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-primary-charcoal mb-1">Email</h3>
                    <p className="font-sans text-secondary-mediumgray">info@versianipro.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-lightgreen flex items-center justify-center shrink-0">
                    <MapPin className="text-primary-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-primary-charcoal mb-1">Location</h3>
                    <p className="font-sans text-secondary-mediumgray">Boynton Beach, FL<br />Serving Palm Beach County</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-lightgreen flex items-center justify-center shrink-0">
                    <Clock className="text-primary-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-primary-charcoal mb-1">Business Hours</h3>
                    <p className="font-sans text-secondary-mediumgray">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-secondary-white rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(27,77,62,0.08)] aspect-video w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d113943.46879858711!2d-80.1788647087029!3d26.52534571731631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5c2e0b1c0b3%3A0x6d2b38f8a1e8a0a!2sBoynton%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="bg-secondary-white rounded-xl p-8 shadow-[0_8px_32px_rgba(27,77,62,0.16)]"
          >
            <h2 className="font-display font-semibold text-2xl text-primary-charcoal mb-2">Request a Free Estimate</h2>
            <p className="font-sans text-sm text-secondary-mediumgray mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-sm font-medium text-primary-charcoal">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-secondary-lightgray rounded-md px-4 py-3 font-sans text-sm text-primary-charcoal focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sans text-sm font-medium text-primary-charcoal">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border border-secondary-lightgray rounded-md px-4 py-3 font-sans text-sm text-primary-charcoal focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sans text-sm font-medium text-primary-charcoal">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-secondary-lightgray rounded-md px-4 py-3 font-sans text-sm text-primary-charcoal focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="font-sans text-sm font-medium text-primary-charcoal">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  value={formData.projectType}
                  onChange={handleChange}
                  className="border border-secondary-lightgray rounded-md px-4 py-3 font-sans text-sm text-primary-charcoal focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors bg-white"
                >
                  <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                  <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                  <option value="Basement Finishing">Basement Finishing</option>
                  <option value="Room Addition">Room Addition</option>
                  <option value="Exterior Renovation">Exterior Renovation</option>
                  <option value="Full Home Remodel">Full Home Remodel</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-sm font-medium text-primary-charcoal">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border border-secondary-lightgray rounded-md px-4 py-3 font-sans text-sm text-primary-charcoal focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green transition-colors resize-none"
                  placeholder="Tell us a bit about your project goals, timeline, and budget..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary-gold text-secondary-white px-8 py-4 rounded-md font-sans text-base font-semibold uppercase tracking-wide hover:bg-primary-green transition-all duration-300 shadow-[0_4px_16px_rgba(212,165,116,0.3)] hover:shadow-[0_8px_32px_rgba(27,77,62,0.2)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-secondary-lightgreen text-primary-green rounded-md font-sans text-sm font-medium text-center">
                  Thank you! Your request has been sent successfully. We will contact you soon.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
