import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import { ServicesData } from "../../data/route";
import UsedTech from "../Services/Technologies/UsedTech";
import HeroSub from "../SharedComponent/HeroSub/HeroSub";
import ServiceDetailSkeleton from "../Skeleton/ServiceDetailSkeleton/ServiceDetailSkeleton";
import PageMeta from "../../component/common/PageMeta/PageMeta";

const ServiceDetail = () => {
  const { slug } = useParams();
  const item = ServicesData.find((item) => item.slug === slug);
  const breadcrumbLinks = [
    { href: "/services", text: "Service" },
    { href: "/services", text: "Services Detail" },
  ];

  if (!item) {
    return <ServiceDetailSkeleton />;
  }

  return (
    <>
      <PageMeta
        title="Service Details | SassCandy"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <HeroSub
        title={item.title}
        description={item.description}
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="mx-auto">
              <img src={item.image} alt={item.title} width={480} height={480} />
            </div>
            <div>
              <h3 className="font-semibold md:text-5xl text-32 text-black dark:text-white lg:text-start text-center mb-4">
                What It <span className="text-primary">Does</span>
              </h3>
              <p className="text-xl text-black/50 dark:text-white/50">
                {item.detail}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey dark:bg-darklight">
        <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
          <h4 className="font-semibold md:text-40 text-32 text-black dark:text-white lg:text-start text-center">
            Features
          </h4>
          <ul className="mt-4 text-xl">
            {item.features.map((feature: any, index: any) => (
              <li key={index} className="my-3">
                <div className="flex items-start sm:gap-5 gap-3">
                  <div>
                    <Icon
                      icon="solar:check-circle-linear"
                      width="18"
                      height="18"
                      className="font-semibold text-primary mt-2 w-4 h-4"
                    />
                  </div>
                  <p className="text-xl text-black/50 dark:text-white/50">
                    <span className="font-medium text-black dark:text-white">
                      {feature.title}:
                    </span>{" "}
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <UsedTech />
    </>
  );
};

export default ServiceDetail;
