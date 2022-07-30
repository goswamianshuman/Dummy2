import React from "react";
import DocsContent from "src/components/hero_page/docs/DocsContent";
import ContactsAndFooter from "../components/hero_page/contacts_and_footer/ContactsAndFooter";
import Navbar from "../components/hero_page/navbar/Navbar";


function Docs() {
  return (
    <>
      <Navbar />
      <DocsContent />
      {/* <ContactsAndFooter /> */}
    </>
  );
}

export default Docs;
