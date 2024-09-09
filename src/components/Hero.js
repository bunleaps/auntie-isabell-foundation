// components/Hero.js
import Image from "next/image";

const Hero = ({ title, paragraph, backgroundImage }) => {
  return (
    <section className="relative w-full h-[400px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full text-white">
        {/* Title Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-end md:justify-center px-4 md:pt-0 h-1/4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-200">
            {title}
          </h1>
        </div>

        {/* Paragraph Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:pb-0 h-3/4 text-center md:text-left">
          <p className="text-base md:text-lg">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
