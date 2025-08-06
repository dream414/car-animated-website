import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AutoScrollingImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // trigger when 30% in view

  return (
    <div
      ref={ref}
      className="w-full h-[460px] bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/bgcar.jpg')" }}
    >
      {isInView && (
        <motion.img
          src="/movingcar.png"
          alt="Moving Car"
          className="w-150 h-90 bottom-3 absolute top-translate-y-1/2"
          animate={{
            x: ["150%", "-150%"], // Smooth loop from right outside to left outside
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 3,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
};

export default AutoScrollingImage;
