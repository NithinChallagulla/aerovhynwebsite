import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
  {
    title: "Centralized Drone Command System",
    image: "/images/projects/central-drone-command.jpg",
    category: "Public Safety & Surveillance",
    description:
      "A centralized drone monitoring and command platform developed for Vijayawada Police. The system enables operators to monitor and manage multiple drone video streams through a single interface, providing real-time situational awareness, operational intelligence, and enhanced surveillance capabilities across the city.",
    capabilities: [
      "Multi-Drone Live Streaming",
      "Centralized Command Dashboard",
      "Real-Time Telemetry Monitoring",
      "Mission Coordination & Control",
      "Operational Intelligence",
      "Multi-Operator Access",
    ],
  },

  {
    title: "Drone-Assisted Emergency Response System",
    image: "/images/projects/drone-sos-system.jpg",
    category: "Women Safety & Emergency Response",
    description:
      "Integrated with the SHAKTHI mobile application in collaboration with Vijayawada Police, this system enables rapid drone deployment when an SOS alert is triggered. The nearest available drone is dispatched to the victim's location, providing real-time aerial visibility and situational awareness before response teams arrive.",
    capabilities: [
      "SOS-Based Drone Deployment",
      "Real-Time Location Tracking",
      "Rapid Incident Assessment",
      "Live Video Streaming",
      "Command Center Integration",
      "Emergency Response Coordination",
    ],
  },

  {
    title: "AI Helmet Detection & Compliance Monitoring",
    image: "/images/projects/helmet-detection.jpg",
    category: "Road Safety & Traffic Monitoring",
    description:
      "An AI-powered helmet detection and compliance monitoring system developed with Vijayawada Police. The solution automatically analyzes traffic camera feeds, identifies helmet usage, calculates compliance percentages, and displays live statistics on public digital display boards to improve road safety awareness and encourage safer riding practices.",
    capabilities: [
      "Real-Time Helmet Detection",
      "AI-Based Rider Analysis",
      "Compliance Percentage Calculation",
      "Digital Display Integration",
      "Traffic Safety Analytics",
      "Computer Vision Processing",
    ],
  },

  {
    title: "AI Crowd Intelligence & Human Counting System",
    image: "/images/projects/crowd-intelligence-main.jpg",
    category: "Crowd Analytics & Public Safety",
    description:
      "An AI-powered crowd intelligence platform developed for large-scale public gatherings, festivals, and religious events. The system performs real-time human counting, crowd density estimation, movement analysis, congestion detection, and operational intelligence generation to assist authorities in crowd management and public safety operations.",
    capabilities: [
      "Real-Time Human Counting",
      "Crowd Density Analysis",
      "Movement Pattern Tracking",
      "Heatmap Generation",
      "Congestion Detection",
      "Event Intelligence Dashboard",
    ],
  },

  {
    title: "Drone-Based Power Line Health Monitoring System",
    image: "/images/projects/power-line-monitoring.jpg",
    category: "Infrastructure Inspection & Predictive Maintenance",
    description:
      "An intelligent drone-powered inspection solution designed for monitoring transmission and distribution power lines. Using high-resolution visual sensors and thermal imaging technology, the system identifies overheating components, damaged insulators, conductor abnormalities, vegetation encroachment, and potential fault locations before failures occur. The platform enables utility providers to improve grid reliability, reduce maintenance costs, and ensure uninterrupted power delivery through predictive maintenance.",
    capabilities: [
      "Thermal Imaging Inspection",
      "Hotspot Detection",
      "Insulator Health Assessment",
      "Conductor Defect Detection",
      "Vegetation Encroachment Analysis",
      "AI-Based Fault Prediction",
      "Power Grid Monitoring",
      "Preventive Maintenance Analytics",
    ],
  },
  {
  title: "AI-Powered DPR Summary Generation Platform",
  image: "/images/projects/dpr-summary-generator.png",
  category: "Government Intelligence & Report Automation",
  description:
    "An AI-powered Daily Police Report (DPR) Summary Generation Platform developed for the Andhra Pradesh Police Department. The system automatically analyzes large volumes of police reports, incident records, and operational data to generate concise, actionable summaries for senior officers. This significantly reduces manual effort, accelerates decision-making, and improves operational visibility across departments.",
  capabilities: [
    "Automated DPR Generation",
    "AI-Based Report Summarization",
    "Incident Intelligence Extraction",
    "Multi-Document Processing",
    "Operational Insights Dashboard",
    "Decision Support System",
    "Secure Government Deployment",
    "Natural Language Processing",
  ],
 } 
];

  return (
    <>
      <Helmet>
        <title>Projects | AEROVHYN Technologies</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl text-gray-300"
          >
            Real-world AI, Drone, Surveillance, and Public Safety solutions
            deployed in collaboration with government agencies and law
            enforcement organizations.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-32 ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-2xl border border-cyan-500/20 shadow-2xl"
                />
              </div>

              {/* Content */}
              <div>
                <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm mb-5">
                  {project.category}
                </span>

                <h2 className="text-4xl font-bold mb-6">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Event Deployments */}
                {project.title ===
                  "AI Crowd Intelligence & Human Counting System" && (
                  <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
                      Deployments Across Major Events
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        {
                          image:
                            "/images/projects/maha-shivaratri.jpg",
                          title: "Maha Shivaratri",
                        },
                        {
                          image:
                            "/images/projects/gunadala-marimatha.jpg",
                          title: "Gunadala Marimatha Thirunala",
                        },
                        {
                          image:
                            "/images/projects/sri-rama-navami.jpg",
                          title: "Sri Rama Navami",
                        },
                      ].map((event) => (
                        <div
                          key={event.title}
                          className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
                        >
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-36 object-cover"
                          />

                          <div className="p-3 text-center text-sm text-gray-300">
                            {event.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Key Capabilities
                </h3>
                {/* Power Line Monitoring Workflow */}
{project.title ===
  "Drone-Based Power Line Health Monitoring System" && (
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
      Inspection Workflow
    </h3>

    <div className="grid md:grid-cols-4 gap-4">
      {[
        "Drone Deployment",
        "Thermal Data Collection",
        "AI Fault Detection",
        "Maintenance Recommendations",
      ].map((step) => (
        <div
          key={step}
          className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center text-gray-300"
        >
          {step}
        </div>
      ))}
    </div>
  </div>
)}

                <div className="grid md:grid-cols-2 gap-3">
                  {project.capabilities.map((item) => (
                    <div
                      key={item}
                      className="bg-gray-900 border border-gray-800 rounded-lg p-3 text-gray-300"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
    </>
  );
}