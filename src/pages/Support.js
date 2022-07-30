import React from "react";
import ContactsAndFooter from "src/components/hero_page/contacts_and_footer/ContactsAndFooter";
import FaqQuery from "src/components/hero_page/contacts_and_footer/FAQquery";
import Navbar from "src/components/hero_page/navbar/Navbar";
import SuportPage from "src/components/hero_page/SupportPage/SuportPage";

function Support() {
  return (
    <>
      <Navbar />
      <SuportPage />
      <FaqQuery />
      <ContactsAndFooter />
    </>
  );
}

export default Support;
