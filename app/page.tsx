import Card from "@/components/shared/Card";
import FlightsView from "@/public/images/flight-view.png";
import HotelsView from "@/public/images/hotels-view.png";

const CardsData = [
  {
    background: FlightsView,
    title: "Flights",
    subtitle: "Find the best deals on flights to your favorite destinations."
  },
  {
    background: HotelsView,
    title: "Hotels",
    subtitle: "Discover and book hotels at unbeatable prices."
  }
];

export default function Home() {
  return <section className="max-w-[1240px] mx-auto">
    <div className="flex flex-col gap-3 sm:flex-row">
        {CardsData.map((card, index) => (
          <div key={index} className="w-full h-[400px] sm:w-1/2 mb-3">
            <Card 
              background={card.background} 
              title={card.title} 
              subtitle={card.subtitle} 
            />
          </div>
        ))}
    </div>
  </section>
}
