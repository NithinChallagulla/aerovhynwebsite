import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "Amaravathi Drone Summit",
      award: "2nd Runner-Up",
      image: "/images/amaravathi-drone-summit.jpg",
      description:
        "Aerovhyn secured the 2nd Runner-Up position at the Amaravathi Drone Summit, demonstrating excellence in UAV innovation and aerospace technology among leading teams and industry participants.",
    },
    {
      title: "HackAP Hackathon",
      award: "3rd Position",
      image: "/images/hackap.jpg",
      description:
        "Achieved 3rd Position in the HackAP Hackathon conducted by COEET, showcasing technical expertise, innovation, and problem-solving capabilities.",
    },
    {
      title: "SRM AP Texpo",
      award: "Runner-Up",
      image: "/images/texpo.jpg",
      description:
        "Secured Runner-Up position at SRM AP Texpo for presenting innovative UAV and aerospace technologies, highlighting Aerovhyn's commitment to real-world innovation.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Achievements - AEROVHYN Technologies</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/videos/aerovhyn-bg.mp4"
          autoPlay
          muted
          loop
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Achievements
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Celebrating milestones that showcase Aerovhyn's innovation,
            technical excellence, and commitment to aerospace advancement.
          </motion.p>
        </div>
      </section>

      {/* Achievement Showcase */}
      <section className="bg-[#020B1D] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-cyan-400 mb-4">
              Major Achievements
            </h2>

            <p className="text-gray-400 text-lg">
              Milestones that define Aerovhyn's journey of innovation and excellence.
            </p>
          </div>

          <div className="space-y-16">

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-[#0B1F38] rounded-3xl border border-cyan-500/10
                p-8 lg:p-12 shadow-xl
                grid lg:grid-cols-2 gap-14 items-center
                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="bg-[#162338] rounded-3xl p-4 border border-cyan-500/10">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">

                  <span className="inline-flex w-fit items-center px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold text-sm tracking-wide mb-6">
                    {achievement.award}
                  </span>

                  <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-9">
                    {achievement.description}
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