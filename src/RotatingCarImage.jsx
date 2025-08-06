import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ✅ Image List
const carImages = [
  "/front.png",
  "/bak.png",
  "/rotatedcar.png",
  "/right.png",
  "/bot.png",
  "/toy.png",
];

const CarGallery = () => {
  const [selectedImage, setSelectedImage] = useState(carImages[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="max-w-4xl mx-auto p-4" ref={ref}>
      {/* 🔝 Large Image Display */}
      <motion.div
        className="w-full h-80 mb-6 rounded-xl overflow-hidden shadow-lg bg-[url('/bg2.jpg')] bg-cover bg-center flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={selectedImage}
          alt="Selected Car"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* 🔻 Thumbnails with Zoom & Staggered Animation */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {carImages.map((img, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="cursor-pointer rounded-lg overflow-hidden border-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.1, borderColor: "#f97316" }} // orange-500 hover
          >
            <img
              src={img}
              alt={`Car ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
