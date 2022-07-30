import React from "react";
import ContactsAndFooter from "src/components/hero_page/contacts_and_footer/ContactsAndFooter";
import Navbar from "src/components/hero_page/navbar/Navbar";
import PricingPage from "src/components/hero_page/pricing/PricingPage";

function Pricing() {
  return (
    <>
      <Navbar />
      <PricingPage />
      <ContactsAndFooter />
    </>
  );
}

export default Pricing;
