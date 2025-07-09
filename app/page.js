import Hero from "./components/home/Hero";
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
    </main>
    </>
  );
}
