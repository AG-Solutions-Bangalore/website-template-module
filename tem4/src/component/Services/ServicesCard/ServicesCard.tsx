import { useEffect, useState } from "react";
import SingleService from "../../../Pages/Services/SingleService";
import SkeletonCard from "../../Skeleton/SkeletonCard/SkeletonCard";
import { ServicesData } from "../../../data/route";

const ServicesCard = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setServices(ServicesData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="dark:bg-darkmode bg-[url('/images/plan/price-plan-background-icons.svg')] bg-auto bg-center bg-no-repeat">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="mb-17">
          <h3 className="font-semibold lg:text-6xl sm:text-5xl text-3xl text-black dark:text-white text-center">
            Innovative Apps for <br /> Your Business Needs
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : services.map((item, index) => (
                <SingleService key={index} service={item} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
