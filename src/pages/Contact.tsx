import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // ✅ EmailJS import

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
      details: ['contact@aerovhyn.in'],
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
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        'service_uhopj1z',        // ✅ Your Service ID
        'template_l2tyf8v',       // ✅ Your Template ID
        templateParams,
        'z3aQ6mV-XAkGXpD4I'       // ✅ Your Public Key
      );

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
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
      transition: { staggerChildren: 0.15 },
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
        <meta name="description" content="Get in touch with AEROVHYN Technologies. Contact us for UAV solutions, partnerships, or general inquiries. Located in Vijayawada, AP." />
        <meta name="keywords" content="contact AEROVHYN, UAV company contact, drone technology support, aerospace solutions inquiry" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/aerovhyn-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center text-white">
            <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
              Contact Us
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg">
              Ready to innovate together? Get in touch and let's discuss your next aerospace project
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div key={info.title} className="relative text-center p-6 bg-gray-800 rounded-xl shadow-lg overflow-hidden" variants={itemVariants}>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-highlight" />
                    </div>
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-white mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400 text-sm md:text-base">{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center mb-6">
                <MessageCircle className="h-8 w-8 text-highlight mr-3" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">Send us a Message</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input type="text" {...register('name', { required: 'Name is required' })} className="w-full px-4 py-3 border border-gray-600 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-highlight" placeholder="Enter your full name" />
                    {errors.name && <p className="text-red-400 text-sm mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} className="w-full px-4 py-3 border border-gray-600 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-highlight" placeholder="Enter your email" />
                    {errors.email && <p className="text-red-400 text-sm mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <input type="text" {...register('subject', { required: 'Subject is required' })} className="w-full px-4 py-3 border border-gray-600 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-highlight" placeholder="What is this regarding?" />
                  {errors.subject && <p className="text-red-400 text-sm mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea {...register('message', { required: 'Message is required' })} rows={6} className="w-full px-4 py-3 border border-gray-600 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-highlight resize-none" placeholder="Tell us about your project or inquiry..." />
                  {errors.message && <p className="text-red-400 text-sm mt-1 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.message.message}</p>}
                </div>

                <motion.button type="submit" disabled={submitStatus === 'loading'} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-primary text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50">
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
                    Message sent successfully! We’ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900 border border-red-700 rounded-lg p-4 text-red-200 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-400" />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Optional: Visit office map placeholder */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
              <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg h-full text-white">
                <h3 className="text-2xl font-heading font-bold text-white mb-6">Visit Our Office</h3>
               <div className="w-full h-64 rounded-lg mb-6 overflow-hidden">
  <iframe
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15294.129267266358!2d80.689444!3d16.517778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMxJzA0IiBOIDgwwrA0MScyMiJF!5e0!3m2!1sen!2sin!4v1691464443896!5m2!1sen!2sin">
  </iframe>
</div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
