import Banner from "@/components/shared/Banner"
import HotelBannerImg from  "@/public/images/hotel-banner.png";


const HotelBanner = () => {
  return (
    <Banner bgImage={HotelBannerImg} title="We Take Care of Your Holidays" subtitle="Book your stay at the lowest prices" />
  )
}

export default HotelBanner