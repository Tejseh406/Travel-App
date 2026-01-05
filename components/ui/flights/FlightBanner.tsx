import Banner from "@/components/shared/Banner";
import FlightBannerImg from "@/public/images/flight-banner.png";

const FlightBanner = () => {
  return (
    <Banner
      bgImage={FlightBannerImg}
      title="Make your travel whishlist, we’ll do the rest"
      subtitle="Special offers to suit your plan"
    />
  );
};

export default FlightBanner;
