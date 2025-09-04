// src/types/react-slick.d.ts
declare module "react-slick" {
  import { ComponentType } from "react";

  interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    className?: string;
    cssEase?: string;
    dots?: boolean;
    draggable?: boolean;
    fade?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: "ondemand" | "progressive";
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    vertical?: boolean;
    verticalSwiping?: boolean;
    // Add any other props you need
  }

  const Slider: ComponentType<{ children?: React.ReactNode } & Settings>;
  export default Slider;
}
