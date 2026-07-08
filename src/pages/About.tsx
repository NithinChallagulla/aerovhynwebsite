import { Helmet } from 'react-helmet-async';
import { Target, Eye, Users, Award, Lightbulb } from 'lucide-react';
import './About.css';

export default function About() {
  const founders = [
    {
      name: 'Nithin Challagulla',
      role: 'Founder & Director',
      bio: 'Seasoned UAV hardware expert with deep knowledge in system design, prototyping, and deployment.',
      expertise: ['Aerospace Engineering', 'UAV Systems', 'Business Strategy'],
      image: '/founders/nithin.jpg',
    },
    {
      name: 'Ambati Harshini',
      role: 'Director',
      bio: 'AI specialist with a strong focus on intelligent drone systems and autonomy.',
      expertise: ['Embedded Systems', 'Drone Technology', 'Software Development'],
      image: '/founders/harshini.jpg',
    },
    {
      name: 'Gullapalli Venkat',
      role: 'Co-Founder & COO',
      bio: 'Expert in AI and drone technology operations, managing projects, meetings, and partnerships to ensure smooth execution.',
      expertise: ['Operations Management', 'Project Delivery', 'Process Optimisation'],
      image: '/founders/venkat.jpg',
    },
    {
      name: 'M. Yatish Datta',
      role: 'CTO',
      bio: 'Expert in Web development and cybersecurity expert, building secure, high-performance platforms for tech-driven innovations.',
      expertise: ['Marketing Strategy', 'Partnerships', 'Brand Development'],
      image: '/founders/yatish.jpg',
    },
  ];

  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Continuously pushing the boundaries of aerospace technology.' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest-quality solutions.' },
    { icon: Users, title: 'Collaboration', description: 'Working together to achieve extraordinary results.' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us – AEROVHYN Technologies</title>
        <meta
          name="description"
          content="Learn about AEROVHYN Technologies, our mission, vision, and the innovative team driving the future of aerospace technology."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-dark">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/aerovhyn-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About AEROVHYN</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of aerospace technology with innovation, precision, and unwavering commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="animate-slide-in-left hover-card">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-highlight mr-3" />
                <h2 className="text-3xl font-heading font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                 To engineer innovative UAV, Artificial Intelligence, Embedded Systems, and Smart Surveillance solutions that empower industries with enhanced efficiency, security, and operational intelligence.              </p>
              <p className="text-gray-400 leading-relaxed">
                 We are committed to transforming complex challenges into reliable, scalable, and future-ready technologies that create measurable value for businesses, governments, and communities worldwide.              </p>
            </div>

            {/* Vision */}
            <div className="animate-slide-in-right hover-card">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-highlight mr-3" />
                <h2 className="text-3xl font-heading font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To become a globally recognized aerospace and technology company, pioneering intelligent aerial systems and advanced monitoring solutions that shape the future of automation, security, and connectivity.              </p>
              <p className="text-gray-400 leading-relaxed">
                We envision a world where smart technologies seamlessly integrate into everyday operations, creating safer, more efficient, and sustainable environments for generations to com              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-darker text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="value-card bg-dark-card p-8 rounded-xl shadow-lg text-center animate-slide-up"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <div className="icon-wrapper w-16 h-16 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-highlight" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">{v.title}</h3>
                  <p className="text-gray-300">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-dark text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visionary leaders driving innovation in aerospace technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {founders.map((f) => (
              <div key={f.name} className="card-flip w-full h-80 founder-card">
                <div className="card-inner">
                  <div className="card-front bg-dark-card rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-highlight"
                    />
                    <h3 className="text-2xl font-heading font-bold text-white">{f.name}</h3>
                    <p className="text-highlight font-semibold">{f.role}</p>
                  </div>
                  <div className="card-back bg-dark-card rounded-xl shadow-xl p-6 flex flex-col items-center justify-center text-center vibrant-back">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-highlight"
                    />
                    <p className="text-gray-300 text-sm leading-relaxed">{f.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
