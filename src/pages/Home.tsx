import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Plane,
  Shield,
  Cpu,
  Target,
  Users,
  Award,
} from "lucide-react";

import Logo from "./logo.png";

export default function Home() {
  const services = [
  {
    icon: Plane,
    title: "UAV Design",
    description:
      "Custom drone solutions for everything from surveillance to delivery.",
  },
  {
    icon: Shield,
    title: "Surveillance Systems",
    description:
      "Advanced monitoring and security platforms powered by aerial tech.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Cutting-edge embedded solutions driving next-gen aerospace hardware.",
  },
  {
    icon: Plane,
    title: "Custom Drone Solutions",
    description:
      "Tailor-made drone technologies designed for specific industry needs and applications.",
  },
  {
    icon: Cpu,
    title: "Curated AI Solutions",
    description:
      "AI-driven systems customized to optimize performance, automation, and decision-making.",
  },
  {
    icon: Shield,
    title: "Smart Monitoring Systems",
    description:
      "Intelligent monitoring solutions with real-time analytics and enhanced security capabilities.",
  },
];

  const stats = [
    { icon: Target, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "25+", label: "Happy Clients" },
    { icon: Award, value: "4+", label: "Years Experience" },
  ];

  return (
    <>
      <Helmet>
        <title>AEROVHYN TECHNOLOGIES – Smart Tech, Smarter World</title>
        <meta
          name="description"
          content="Leading UAV & aerospace innovator. Specialising in drone tech, surveillance systems and embedded intelligence."
        />
      </Helmet>

      {/* ─────────── Hero Section ─────────── */}
<section className="relative min-h-screen overflow-hidden bg-gray-900">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover brightness-50"
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(41,182,246,0.2),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(81,45,168,0.3),transparent_50%)] pointer-events-none" />

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8">

    {/* Logo & Company Name */}
    <div className="pt-40 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
      <div
        className="opacity-0 animate-slide-in-left"
        style={{
          animationDelay: "0.2s",
          animationFillMode: "forwards",
        }}
      >
        <img
          src={Logo}
          alt="AEROVHYN TECHNOLOGIES"
          className="h-28 sm:h-32 w-auto drop-shadow-xl"
        />
      </div>

      <h2
        className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-wide opacity-0 animate-slide-in-right"
        style={{
          animationDelay: "0.8s",
          animationFillMode: "forwards",
        }}
      >
        AEROVHYN TECHNOLOGIES
      </h2>
    </div>

    {/* Main Heading - Moved Lower */}
    <div className="mt-56 text-center max-w-4xl">
      

      <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Pioneering the future of aerospace technology with innovative UAV
        solutions and intelligent embedded systems.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/about"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold text-white bg-highlight shadow-lg transition-all duration-300 hover:scale-105 hover:bg-highlight/80"
        >
          Learn More
          <ArrowRight className="ml-3 h-5 w-5" />
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold text-white border-2 border-white bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="h-10 w-6 rounded-full border-2 border-white flex justify-center">
      <div className="h-3 w-1 mt-2 rounded-full bg-white animate-pulse" />
    </div>
  </div>
</section>

      {/* ─────────── Services Section ─────────── */}
      <section className="py-24 bg-gray-900 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge aerospace solutions that transform industries and
              drive innovation.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="relative p-10 rounded-3xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 shadow-xl animate-slide-up transform transition-all duration-500 hover:rotate-1 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,200,255,0.5)] group"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Magic Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />
                <div className="absolute inset-px rounded-[inherit] bg-gray-900 pointer-events-none" />
                <div className="relative flex flex-col items-center text-center space-y-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-highlight/15 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-highlight" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-white group-hover:text-highlight transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Stats Section ─────────── */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  {/* Changed icon color to white */}
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl font-heading font-bold text-white mb-2">
                  {value}
                </div>
                <div className="text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA Section ─────────── */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Innovate with Us?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Join us in shaping the future of aerospace technology. Let’s
              discuss your next project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 rounded-lg font-semibold bg-highlight text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
