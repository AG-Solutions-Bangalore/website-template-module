import React from "react";
import Hero from "@/components/Home/Hero";
import Payment from "@/components/Home/Payment";
import Benefit  from "@/components/Home/Benefit";
import Spend from "@/components/Home/Spend";
import Method from "@/components/Home/Method";
import Mobile from "@/components/Home/Mobile";
import Search from "@/components/Home/Search";
import Pricing from "@/components/Home/Pricing";
import Solution from "@/components/Home/Solution";

export default function Home() {
  return (
    <>
      <Hero />
      <Payment />
      <Benefit />
      <Spend />
      <Method />
      <Mobile />
      <Search />
      <Pricing />
      <Solution />
    </>
  );
}