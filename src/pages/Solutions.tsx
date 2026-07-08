import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plane, Shield, Package, Zap, Download, Eye } from 'lucide-react';


export default function Solutions() {
  

  const products = [
  {
    id: 1,
    name: 'Aerial Intelligence Systems',
    category: 'aerial',
    image:'/images/solutions/aerial-intelligence.jpg',
    description:
      'Advanced drone-powered intelligence solutions delivering real-time aerial awareness, monitoring, and operational insights.',
    features: [
      'Real-Time Aerial Surveillance',
      'Multi-Drone Operations',
      'Live Telemetry Monitoring',
      'Mission Planning & Control',
    ],
    specs: {
      Application: 'Surveillance',
      Coverage: 'Large Areas',
      Platform: 'UAV Based',
      Operations: 'Real-Time',
    },
    reportUrl: '/contact',
  },

  {
    id: 2,
    name: 'Crowd Intelligence & Event Management',
    category: 'public-safety',
    image: '/images/solutions/crowd-intelligence.jpg',
    description:
      'AI-powered crowd monitoring and analytics platform designed for festivals, public events, and large-scale gatherings.',
    features: [
      'Crowd Density Analysis',
      'Heatmap Generation',
      'Movement Tracking',
      'Congestion Alerts',
    ],
    specs: {
      Application: 'Events',
      Monitoring: 'Live',
      Analytics: 'AI Powered',
      Alerts: 'Real-Time',
    },
    reportUrl: '/contact',
  },

  {
    id: 3,
    name: 'Government & Public Safety Solutions',
    category: 'public-safety',
    image: '/images/solutions/public-safety.jpg',
    description:
      'Integrated technology solutions supporting law enforcement, public safety agencies, and smart governance initiatives.',
    features: [
      'Public Safety Monitoring',
      'Law Enforcement Support',
      'Smart Governance',
      'Operational Intelligence',
    ],
    specs: {
      Sector: 'Government',
      Monitoring: '24/7',
      Platform: 'Integrated',
      Support: 'Multi-Agency',
    },
    reportUrl: '/contact',
  },

  {
    id: 4,
    name: 'Emergency & Rapid Response Systems',
    category: 'public-safety',
    image: '/images/solutions/emergency-response.jpg',
    description:
      'Rapid-response technology platforms designed to assist emergency services, disaster management, and rescue operations.',
    features: [
      'Emergency Alerts',
      'Rapid Deployment',
      'Incident Monitoring',
      'Response Coordination',
    ],
    specs: {
      Response: 'Immediate',
      Coverage: 'Wide Area',
      Platform: 'AI Assisted',
      Deployment: 'Rapid',
    },
    reportUrl: '/contact',
  },

  {
    id: 5,
    name: 'AI Vision & Automation',
    category: 'aerial',
    image: '/images/solutions/ai-vision.jpg',
    description:
      'Computer vision and AI automation solutions enabling intelligent monitoring, detection, and decision-making.',
    features: [
      'Object Detection',
      'Computer Vision',
      'Automated Monitoring',
      'Predictive Analytics',
    ],
    specs: {
      Technology: 'AI/ML',
      Detection: 'Real-Time',
      Analytics: 'Advanced',
      Integration: 'Flexible',
    },
    reportUrl: '/contact',
  },

  {
    id: 6,
    name: 'Command & Control Platforms',
    category: 'aerial',
    image:  '/images/solutions/command-control.jpg',
    description:
      'Centralized operational dashboards providing command, monitoring, analytics, and mission management capabilities.',
    features: [
      'Centralized Dashboard',
      'Fleet Management',
      'Live Analytics',
      'Operational Control',
    ],
    specs: {
      Access: 'Web Based',
      Monitoring: 'Real-Time',
      Control: 'Centralized',
      Scale: 'Multi-System',
    },
    reportUrl: '/contact',
  },
];

  return (
    <>
      <Helmet>
        <title>Solutions & Products – AEROVHYN Technologies</title>
        <meta
          name="description"
          content="Explore our surveillance and delivery UAV solutions engineered for performance and reliability."
        />
      </Helmet>

      {/* ───────── Hero with Video ───────── */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/aerovhyn-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in-down">
            Our Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Advanced AI, Drone, and Public Safety Solutions engineered to enhance intelligence, monitoring, and operational efficiency.
          </p>
        </div>
      </section>

      

      {/* ───────── Products Grid ───────── */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div
                key={p.id}
                className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-primary/50 transition-transform transform hover:-translate-y-2 hover:scale-[1.02] duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <figure className="relative h-96 bg-gray-950 flex items-center justify-center overflow-hidden">
  <img
    src={p.image}
    alt={p.name}
    className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
  />

  <figcaption className="absolute top-4 left-4">
    <span className="px-3 py-1 bg-primary text-white text-xs rounded-full capitalize shadow-md">
      {p.category}
    </span>
  </figcaption>
</figure>

                <div className="p-6 text-gray-300">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{p.name}</h3>
                  <p className="text-gray-400 mb-4">{p.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <Zap className="h-3 w-3 text-highlight mr-2" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <h4 className="font-semibold text-primary mb-2">Specifications</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(p.specs).map(([k, v]) => (
                        <div key={k}>
                          <span className="font-medium text-gray-400">{k}</span>
                          <br />
                          <span className="text-white">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/grid.svg')] animate-pulse" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Looking for a Mission-Critical Solution?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Aerovhyn Technologies delivers customized AI, drone, and operational intelligence solutions tailored to your mission requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-highlight text-white font-semibold rounded-lg hover:bg-highlight/90 transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <Plane className="mr-2 h-5 w-5" />
            Request Custom Solution
          </Link>
        </div>
      </section>
    </>
  );
}
