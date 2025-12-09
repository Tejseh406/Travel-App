import NewsLetterIcon from "@/public/svg/news-letter-icon.svg";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="max-w-[1250px] mx-auto">
      <div className="bg-(--green-cyan) h-auto  flex items-center rounded-lg px-4 pt-4 gap-6">
        
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-[44px] font-bold mb-2">
            Subscribe to our Newsletter
          </h2>

          <p className="text-sm md:text-xl opacity-80">The travel</p>
          <p className="text-xs md:text-base opacity-70">
            Get inspired! Receive travel discounts, tips and behind-the-scenes stories.
          </p>

          {/* Input + Button */}
          <div className="flex gap-3 flex-col md:flex-row mb-4 mt-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 md:p-4 outline-none bg-white text-base placeholder:text-base rounded w-full text-[#1C1B1F]"
            />
            <button className="bg-black px-6 py-3 max-w-[150px] text-white rounded cursor-pointer w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 justify-end flex">
          <Image
            src={NewsLetterIcon}
            alt="news letter icon"
            className="object-contain"
            loading="lazy"
          />    
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
