import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // 👈 Framer Motion
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const sliderContent = [
    {
      type: "image",
      src: "/hero.jpg",
    },
    {
      type: "video",
      src: "/hero-video.mp4",
    },
    {
      type: "image",
      src: "/car2.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      <Slider {...settings} className="h-screen">
        {sliderContent.map((item, index) => (
          <div key={index} className="relative h-screen w-full">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Left-Aligned Text + Button with animation */}
            <div className="absolute z-20 inset-0 flex items-center justify-start px-6 md:px-16 lg:px-24">
              <motion.div
                className="text-left max-w-2xl"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Drive into what <br /> you love
                </motion.h1>

                <motion.button
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm md:text-base font-medium py-2 px-5 md:px-6 rounded-full transition duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Get Started <FaArrowRight />
                </motion.button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
