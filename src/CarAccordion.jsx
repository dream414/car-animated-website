import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const carData = [
  {
    title: "Sports Car",
    content: "High-performance sports car with turbo engine and sleek design.",
  },
  {
    title: "Luxury Sedan",
    content: "Comfortable interior, silent cabin, and executive ride feel.",
  },
  {
    title: "SUV",
    content: "Perfect for family trips, with off-road capabilities.",
  },
  {
    title: "Electric Car",
    content: "Eco-friendly electric vehicle with long-range battery.",
  },
  {
    title: "Convertible",
    content: "Stylish open-roof car for city driving and scenic routes.",
  },
  {
    title: "Pickup Truck",
    content: "Ideal for heavy loads, off-road adventures, and work sites.",
  },
];

export default function CarAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        🚗 Explore Car Categories
      </h1>

      <div className="space-y-4">
        {carData.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg shadow-xl border overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-white text-lg 
                transition duration-300 
                ${activeIndex === index ? "bg-red-700" : "bg-red-500 hover:bg-red-400"}`}
            >
              <span>{car.title}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-gray-50 text-gray-800"
                >
                  <p className="text-base">{car.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
