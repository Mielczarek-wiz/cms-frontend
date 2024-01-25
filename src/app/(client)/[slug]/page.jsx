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
  console.log(sections);
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
  return (
    <section className="w-full h-screen">
      <OurTeamSection />
    </section>
  );
}
