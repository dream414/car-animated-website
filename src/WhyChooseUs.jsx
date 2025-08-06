import React from "react";
import { FaCheckCircle, FaStar, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCheckCircle className="text-5xl text-orange-500 mb-4 transition-transform duration-300 group-hover:rotate-12" />,
    title: "Trusted Quality",
    desc: "Top-quality vehicles with verified performance and durability.",
  },
  {
    icon: <FaStar className="text-5xl text-yellow-400 mb-4 transition-transform duration-300 group-hover:rotate-12" />,
    title: "Customer Satisfaction",
    desc: "We prioritize your experience with 5-star rated service and support.",
  },
  {
    icon: <FaShieldAlt className="text-5xl text-blue-400 mb-4 transition-transform duration-300 group-hover:rotate-12" />,
    title: "Secure Transactions",
    desc: "All payments and purchases are protected with end-to-end security.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateY: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-4 overflow-hidden">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Why Choose Us
      </motion.h1>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.07 }}
            className="relative bg-black rounded-2xl p-8 text-center border border-transparent group transition-all duration-500 hover:border-red-500 shadow-xl"
          >
            {/* Blurred red glow border on hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_30px_5px_rgba(255,0,0,0.5)]" />

            {item.icon}
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.desc}</p>

            <button className="mt-4 inline-flex items-center gap-2 bg-transparent text-white border border-white rounded-full px-5 py-2 text-sm font-semibold transition duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white">
              Explore More <FaArrowRight className="text-xs mt-[1px]" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
