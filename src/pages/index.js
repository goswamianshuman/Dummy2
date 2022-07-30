import React from "react";
import ContactsAndFooter from "src/components/hero_page/contacts_and_footer/ContactsAndFooter";
import Query from "src/components/hero_page/contacts_and_footer/Query";
import Hero from "src/components/hero_page/hero_section/Hero";
import Navbar from "src/components/hero_page/navbar/Navbar";
import Services from "src/components/hero_page/services/Services";
import Workflow from "src/components/hero_page/workflow/Workflow";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* hero_section */}
      <Hero />
      {/* workflow */}
      <Workflow />
      {/* services */}
      <Services /> 
      {/* query */}
      <Query />
      {/* contacts and footer */}
      <ContactsAndFooter />
    </>
  );
}
