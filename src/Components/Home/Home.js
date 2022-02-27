import React from "react";
import CarouselSlide0 from "../CarouselSlide0/CarouselSlide0.js";
import CarouselSlide1 from "../CarouselSlide1/CarouselSlide1.js";
import CarouselSlide2 from "../CarouselSlider2/CarouselSlider2.js";
import EasyBoard from "../EasyBoard/EasyBoard.js";
import Frequently from "../Frequently/Frequently.js";
import Header from "../Header/Header.js";
import LatestNews from "../LatestNews/LatestNews.js";
import Mobile from "../Mobile/Mobile.js";
import Partner from "../Platform/Partner.js";
import RealTimer from '../RealTimer/RealTimer';
import RoadMap from "../RoadMap/RoadMap.js";
import TokenMics from "../TokenMics/TokenMics.js";


const Home = () => {
  return (
    <div>
      <Header />
      <CarouselSlide2 />
      <EasyBoard />
      <RealTimer/>
      <Partner />
      <CarouselSlide1 />
      <TokenMics />
      <RoadMap />
      <CarouselSlide0 />
      <Frequently />
      <Mobile />
      <LatestNews />
    </div>
  );
   
};

export default Home;
