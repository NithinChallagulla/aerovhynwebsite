import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Vijayawada, Andhra Pradesh', 'India'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 99080 41738'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [ 'contact@aerovhyn.in'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
    },
  ];

  const onSubmit = async (data: ContactForm) => {
    setSubmitStatus('loading');
    
    try {
      // Create email content
      const emailContent = `
        New Contact Form Submission from AEROVHYN Website
        
        Name: ${data.name}
        Email: ${data.email}
        Subject: ${data.subject}
        
        Message:
        ${data.message}
        
        ---
        Sent from AEROVHYN Technologies website contact form
      `;

      // Create mailto link
      const mailtoLink = `mailto:nithin04ch@gmail.com?subject=Website Contact: ${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailContent)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      reset();
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - AEROVHYN Technologies</title>
        <meta 
          name="description" 
          content="Get in touch with AEROVHYN Technologies. Contact us for UAV solutions, partnerships, or general inquiries. Located in Vijayawada, AP."
        />
        <meta name="keywords" content="contact AEROVHYN, UAV company contact, drone technology support, aerospace solutions inquiry" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/aerovhyn-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 drop-shadow-lg"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg"
            >
              Ready to innovate together? Get in touch and let's discuss your next aerospace project
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="relative text-center p-6 bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  variants={itemVariants}
                  style={{ perspective: 600 }}
                  onMouseMove={(e) => {
                    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                    // Set glow position based on cursor
                    e.currentTarget.style.setProperty('--x', `${e.clientX - left}px`);
                    e.currentTarget.style.setProperty('--y', `${e.clientY - top}px`);
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 20px rgba(79, 70, 229, 0.4)",
                    rotateX: (e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const y = e.clientY - rect.top;
                      const midY = rect.height / 2;
                      return (y - midY) / midY * 5;
                    },
                    rotateY: (e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const midX = rect.width / 2;
                      return (midX - x) / midX * 5;
                    },
                    transition: { duration: 0.2 },
                  }}
                  onMouseLeave={{ rotateX: 0, rotateY: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                >
                  <div 
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at var(--x) var(--y), rgba(79, 70, 229, 0.2) 0%, transparent 70%)`
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-highlight" />
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-white mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400 text-sm md:text-base">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center mb-6">
                <MessageCircle className="h-8 w-8 text-highlight mr-3" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                  Send us a Message
                </h2>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 rounded-lg transition-colors text-white focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 rounded-lg transition-colors text-white focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 rounded-lg transition-colors text-white focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 rounded-lg transition-colors text-white focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-4 rounded-lg transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'loading' ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <div className="bg-green-900 border border-green-700 rounded-lg p-4 text-green-200 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                    Your email client should open with the message. If not, please email us directly at nithin04ch@gmail.com
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900 border border-red-700 rounded-lg p-4 text-red-200 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-400" />
                    There was an error. Please email us directly at nithin04ch@gmail.com
                  </div>
                )}
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg h-full text-white">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">
                  Visit Our Office
                </h3>
                
                {/* Map Placeholder */}
                <div className="w-full h-64 bg-gray-700 rounded-lg mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-primary font-medium">Vijayawada, AP</p>
                      <p className="text-gray-400 text-sm">Interactive map coming soon</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Why Choose AEROVHYN?</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-highlight mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Industry-leading UAV technology solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-highlight mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Expert team with aerospace engineering background</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-highlight mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Custom solutions tailored to your needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-highlight mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Comprehensive support and maintenance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="font-semibold text-white mb-3">Quick Response</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We understand the importance of your time. Our team typically responds to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how AEROVHYN can help bring your aerospace vision to life with our cutting-edge UAV solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+919908041738"
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-highlight text-white font-semibold rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </motion.a>
              <motion.a
                href="mailto:nithin04ch@gmail.com"
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#4f46e5" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}