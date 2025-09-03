import ContactLocation from "../../component/Contact/ContactLocation/ContactLocation";
import ContactForm from "../../component/Contact/ContactForm/ContactForm";
import ContactInfo from "../../component/Contact/ContactInfo/ContactInfo";
import HeroSub from "../../component/SharedComponent/HeroSub/HeroSub";
import PageMeta from "../../component/common/PageMeta/PageMeta";

const Contact = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <PageMeta
        title="Contact | SassCandy"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title="Contact Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <ContactLocation />
    </>
  );
};

export default Contact;
