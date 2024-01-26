"use client";
import { useCall } from "@/api/apiCalls";
import { getRoute } from "@/api/apiRoutes";
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
import { useCallback, useEffect, useState } from "react";

export default function Page({ params }) {
  const { call } = useCall();
  const [sections, setSections] = useState([]);

  const fetchPage = useCallback(async () => {
    const page = await call(
      "get",
      getRoute("page") + "/" + params.slug,
      {},
      false,
      false
    );
    setSections(page.sections);
  }, [call, params.slug]);
  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  const renderSection = (section) => {
    switch (section.type.toLowerCase()) {
      case "mainslider":
        return <MainSliderSection section={section} />;
      case "whoweare":
        return <WhoWeAreSection section={section} />;
      case "whyus":
        return <WhyPeopleChooseUsSection section={section} />;
      case "categories":
        return <CategoriesSection section={section} />;
      case "infoboxes":
        return <InfoboxesSection section={section} />;
      case "bestoffers":
        return <BestOffersSection section={section} />;
      case "popularproperties":
        return <PopularPropertiesSection section={section} />;
      case "testimonials":
        return <TestimonialsSection section={section} />;
      case "ourteam":
        return <OurTeamSection section={section} />;
      case "contact":
        return <ContactSection section={section} />;
      default:
        return null;
    }
  };
  console.log(sections);
  return (
    <div className="w-full h-fit">
      {sections.map((section, index) => (
        <div key={index}>{renderSection(section)}</div>
      ))}
    </div>
  );
}
