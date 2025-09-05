import ContactForm from "../../component/Contact/ContactForm/ContactForm";
import ContactInfo from "../../component/Contact/ContactInfo/ContactInfo";
import ContactLocation from "../../component/Contact/ContactLocation/ContactLocation";
import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import PageMeta from "../../component/common/PageMeta/PageMeta";

const Contact = () => {

  return (
    <>
      <PageMeta
        title="Contact | Sustainable"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title="Contact Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
      />
      <ContactInfo />
      <ContactForm />
      <ContactLocation />
    </>
  );
};

export default Contact;
