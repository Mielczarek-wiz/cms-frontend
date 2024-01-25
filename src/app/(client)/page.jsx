import BestOffersSection from "@/components/clientSide/sections/bestOffers/BestOffersSection";
import CategoriesSection from "@/components/clientSide/sections/categories/CategoriesSection";
import ContactSection from "@/components/clientSide/sections/contact/ContactSection";
import InfoboxesSection from "@/components/clientSide/sections/infoboxes/InfoboxesSection";
import MainSliderSection from "@/components/clientSide/sections/mainSlider/MainSliderSection";
import OurTeamSection from "@/components/clientSide/sections/ourTeam/OurTeamSection";
import PopularPropertiesSection from "@/components/clientSide/sections/popularProperties/PopularPropertiesSection";
import TestimonialsSection from "@/components/clientSide/sections/testimonials/TestimonialsSection";
import WhoWeAreSection from "@/components/clientSide/sections/whoWeAre/WhoWeAreSection";
import WhyPeopleChooseUsSection from "@/components/clientSide/sections/whyPeopleChooseUs/WhyPeopleChooseUsSection";

export default function Page({ params }) {
  return (
    <section className="w-full h-screen">
      <OurTeamSection />
    </section>
  );
}
