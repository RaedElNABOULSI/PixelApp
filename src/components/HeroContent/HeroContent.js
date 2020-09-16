import React from "react";
import "./HeroContent.scss";
import Header from "../../components/Header/Header";
import HeroText from "../../components/HeroText/HeroText";
import HeroInput from "../../components/HeroInput/HeroInput";

export default function HeroContent() {
  return (
    <div className="heroContent">
      <Header />
      <HeroText />
      <HeroInput />
    </div>
  );
}
