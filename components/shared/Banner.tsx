import { StaticImageData } from "next/image";

type BannerProps = {
  bgImage: StaticImageData;
  title: string;
  subtitle?: string;
};

const Banner = ({ bgImage, title, subtitle }: BannerProps) => {
  return (
    <section
      className="
        relative w-full h-[300px] 
        sm:h-[400px] 
        md:h-[500px] 
        flex items-center bg-cover bg-center
      "
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="w-full z-10 max-w-[1440px] px-10">
        <div className="w-[75%] sm:w-[60%] md:w-[50%] xl:w-[40%] text-white">
          <p className="text-2xl sm:text-[35px] md:text-[45px] font-semibold leading-tight">
            {title}
          </p>
          {subtitle && (
            <p className="mt-3 text-sm md:text-base font-normal opacity-90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
