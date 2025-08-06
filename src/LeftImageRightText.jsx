import React from "react";
import { motion } from "framer-motion";

const SlowScrollImageText = () => {
  return (
    <div className="w-full py-20 px-4 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Image Side - Left */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} // Scroll trigger
          transition={{ duration: 3, ease: "easeOut" }} // 🐌 Extra slow scroll effect
        >
          <img
            src="/rotatedcar.png"
            alt="Car"
            className="rounded-xl shadow-2xl w-full object-cover"
          />
        </motion.div>

        {/* Text Side - Right */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Elevate Your Drive
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Premium cars, unbeatable offers, and full transparency. Drive with style and confidence.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300">
            View Collection
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default SlowScrollImageText;
