import useContent from "../hooks/usecontent.js";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import AboutProject from "../components/about.jsx";
import Amenities from "../components/amenities.jsx";
import FloorPlans from "../components/floorplans.jsx";
import NearbyConnect from "../components/nearbyconnect.jsx";
import AboutDeveloper from "../components/aboutdev.jsx";
import ConstructionUpdates from "../components/consturctions.jsx";
import FAQ from "../components/faq.jsx";
import Footer from "../components/footer.jsx";


export default function Home() {
  const content = useContent();

  return (
    <div>
      <Navbar brandName={content?.hero?.projectName || "LIME"} />
      <Hero data={content?.hero} />
      <AboutProject data={content?.projectOverview} />
      <Amenities data={content?.amenities} />
      <FloorPlans data={content?.floorPlans} />
      <NearbyConnect data={content?.nearbyConnectivity} />
      <AboutDeveloper data={content?.aboutDeveloper} />
      <ConstructionUpdates data={content?.constructionUpdates} />
      <FAQ data={content?.faq} />
      <Footer
        projectName={content?.hero?.projectName}
        address={content?.hero?.address}
      />
    </div>
  );
}
