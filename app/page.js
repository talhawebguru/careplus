import Hero from "./components/home/Hero";
import Manufacturing from "./components/home/Manufacturing";
import OurClients from "./components/home/OurClients";
import OurHistory from "./components/home/OurHistory";
import OurMission from "./components/home/OurMission";
import ProductCategories from "./components/home/ProductCategories";
import WhoWeAre from "./components/home/WhoWeAre";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhoWeAre />
        <OurMission />
        <OurHistory />
        <ProductCategories />
        <OurClients />
        <Manufacturing />
      </main>
    </>
  );
}
