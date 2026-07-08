import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Collector Office Innovation Expo",
      location: "NTR District Collectorate, Vijayawada",
      image: "/images/collector-expo.jpg",
      description:
        "Demonstrated UAV, AI-powered surveillance, crowd intelligence, and aerospace solutions to the District Collector of NTR District.",
    },
    {
      title: "RTIH Amaravati Inauguration",
      location: "RTIH Amaravati",
      image: "/images/rtih-inauguration.jpg",
      description:
        "Presented Aerovhyn's advanced UAV technologies and intelligent monitoring systems during the RTIH Amaravati inauguration event.",
    },
    {
      title: "National Technology Day Expo",
      location: "Techrix Expo - RTIH Enikepadu",
      image: "/images/techrix-expo.jpg",
      description:
        "Showcased aerospace innovations, drone technologies, and AI-powered solutions on the occasion of National Technology Day.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Events - AEROVHYN Technologies</title>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/videos/aerovhyn-bg.mp4"
          autoPlay
          muted
          loop
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Events
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing Aerovhyn's participation in innovation expos,
            startup ecosystems, and aerospace technology events.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-[#020B1D] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Major Events
            </h2>

            <p className="text-gray-400 text-lg">
              Key events where Aerovhyn showcased innovation and technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#0B1F38] rounded-3xl overflow-hidden border border-cyan-500/10 hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">

                  <div className="flex items-center gap-2 text-cyan-400 text-sm mb-4">
                    <MapPin size={16} />
                    {event.location}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {event.title}
                  </h3>

                  <p className="text-gray-400 leading-8">
                    {event.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}