import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Users, Heart, Zap, Trophy, Upload, Send } from 'lucide-react';

interface JobApplication {
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  resume: FileList;
  message: string;
}

export default function Careers() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<JobApplication>();

  const positions = [
    {
      id: 1,
      title: 'Senior Aerospace Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Vijayawada, AP',
      experience: '5+ years',
      description: 'Lead the design and development of next-generation UAV systems with focus on aerodynamics and structural engineering.',
      requirements: [
        'Masters in Aerospace Engineering',
        '5+ years UAV development experience',
        'Proficiency in CAD software (SolidWorks, CATIA)',
        'Knowledge of composite materials',
        'Experience with flight testing protocols',
      ],
    },
    {
      id: 2,
      title: 'Embedded Systems Developer',
      department: 'Technology',
      type: 'Full-time',
      location: 'Vijayawada, AP',
      experience: '3+ years',
      description: 'Develop embedded software for flight controllers, sensor integration, and communication systems.',
      requirements: [
        'B.Tech in Electronics/Computer Science',
        '3+ years embedded systems experience',
        'Proficiency in C/C++ and Python',
        'Experience with ARM microcontrollers',
        'Knowledge of real-time operating systems',
      ],
    },
    {
      id: 3,
      title: 'Flight Test Engineer',
      department: 'Operations',
      type: 'Full-time',
      location: 'Vijayawada, AP',
      experience: '2+ years',
      description: 'Plan, execute, and analyze flight tests to ensure safety and performance standards.',
      requirements: [
        'B.Tech in Aerospace/Mechanical Engineering',
        '2+ years flight testing experience',
        'Drone pilot certification (DGCA)',
        'Data analysis and reporting skills',
        'Strong attention to detail',
      ],
    },
    {
      id: 4,
      title: 'Business Development Intern',
      department: 'Business',
      type: 'Internship',
      location: 'Vijayawada, AP',
      experience: 'Entry Level',
      description: 'Support business development activities, market research, and client relationship management.',
      requirements: [
        'MBA/B.Tech student (final year)',
        'Strong communication skills',
        'Interest in aerospace industry',
        'Analytical and research capabilities',
        'Proficiency in MS Office',
      ],
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with passionate professionals in a supportive, innovative environment.',
    },
    {
      icon: Zap,
      title: 'Cutting-edge Projects',
      description: 'Be part of groundbreaking projects that shape the future of aerospace technology.',
    },
    {
      icon: Trophy,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement in a fast-growing company.',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and comprehensive wellness programs.',
    },
  ];

  const onSubmit = async (data: JobApplication) => {
    setSubmitStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Application submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Careers - AEROVHYN Technologies</title>
        <meta 
          name="description" 
          content="Join AEROVHYN Technologies and be part of the future of aerospace innovation. Explore career opportunities and internships in UAV technology."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Shape the future of aerospace technology with passionate innovators and cutting-edge projects
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Why AEROVHYN?
            </h2>
            <p className="text-xl text-accent max-w-3xl mx-auto">
              Join a company that values innovation, collaboration, and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-highlight/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-highlight" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-accent leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-accent max-w-3xl mx-auto">
              Discover exciting career opportunities and internships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div
                key={position.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-highlight/10 text-highlight text-sm rounded-full">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                        {position.experience}
                      </span>
                    </div>
                    <p className="text-accent mb-1">📍 {position.location}</p>
                  </div>
                </div>

                <p className="text-accent mb-4 leading-relaxed">
                  {position.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-accent text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-highlight rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Apply Now
            </h2>
            <p className="text-xl text-accent max-w-2xl mx-auto">
              Ready to join our team? Submit your application and let's discuss how you can contribute to our mission.
            </p>
          </div>

          <div className="bg-light rounded-2xl p-8 animate-slide-up">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Position Applied For *
                  </label>
                  <select
                    {...register('role', { required: 'Please select a position' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {positions.map((position) => (
                      <option key={position.id} value={position.title}>
                        {position.title}
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Years of Experience
                </label>
                <select
                  {...register('experience')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level (0-1 years)</option>
                  <option value="junior">Junior (1-3 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior (5+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-highlight transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <input
                    type="file"
                    {...register('resume', { required: 'Resume is required' })}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <span className="text-primary font-medium">Click to upload</span>
                    <span className="text-accent"> or drag and drop</span>
                  </label>
                  <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                </div>
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Cover Letter / Additional Message
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-highlight focus:border-transparent resize-none"
                  placeholder="Tell us why you'd be a great fit for this role..."
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {submitStatus === 'loading' ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  Thank you for your application! We'll review it and get back to you within 1-2 business days.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                  There was an error submitting your application. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}