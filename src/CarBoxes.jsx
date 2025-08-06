import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import carImage from "/carImage.png";

const carData = [
  { id: 1, title: "Toyota Supra", desc: "Powerful and sporty design." },
  { id: 2, title: "Toyota Supra", desc: "Powerful and sporty design." },
  { id: 3, title: "Toyota Supra", desc: "Powerful and sporty design." },
  { id: 4, title: "Toyota Supra", desc: "Powerful and sporty design." },
];

export default function CarBoxes() {
  const [clickedId, setClickedId] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 }); // 30% visible

  const handleImageClick = (id) => {
    setClickedId(id);
    setTimeout(() => setClickedId(null), 300);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
    >
      {carData.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-lg overflow-hidden text-center p-4 transition duration-300 border border-gray-200 hover:shadow-[0_0_12px_silver]"
        >
          <img
            src={carImage}
            alt={car.title}
            onClick={() => handleImageClick(car.id)}
            className={`w-full h-60 object-contain mb-4 cursor-pointer transition-transform duration-300 ${
              clickedId === car.id ? "translate-y-2" : "translate-y-0"
            }`}
          />
          <h2 className="text-xl font-semibold text-gray-800">{car.title}</h2>
          <p className="text-sm text-gray-600">{car.desc}</p>
        </div>
      ))}
    </motion.div>
  );
}
