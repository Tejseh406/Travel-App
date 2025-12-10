import { StaticImageData } from "next/image";

type CardProps = {
    background: StaticImageData;
    title: string;
    subtitle: string;
}

const Card = ({background, title, subtitle}: CardProps) => {
  return (
    <div className="w-full relative h-full bg-cover bg-center flex flex-col items-center justify-end  p-4 rounded-[20px]"
      style={{
        backgroundImage: `url(${background.src})`,
      }}>
        <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
        <div className="z-10 text-white text-center">
            <p className="text-[40px] font-bold">{title}</p>
            <p className="text-base">{subtitle}</p>
            {/* button code */}
        </div>
    </div>
  )
}

export default Card