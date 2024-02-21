import React from "react";
import ImageSlider from "../components/homePageComponent/ImageSlider";
import FestGenres from "../components/homePageComponent/FestGenres";
import RecommendedEvents from "../components/homePageComponent/RecommendedEvents";
import OutdoorEvents from "../components/homePageComponent/OutdoorEvents";
import FeaturesEvents from "../components/homePageComponent/FeaturesEvents";
import EventYouJoin from "../components/homePageComponent/EventYouJoin";
import Blog from "../components/homePageComponent/Blog";
import Artists from "../components/homePageComponent/Artists";
import SubscribeToOurNewsLetter from "../components/homePageComponent/SubscribeToOurNewsLetter";

const HomePage = () => {
  return (
    <div className="bg-black">
      <ImageSlider />
      <FestGenres />
      <RecommendedEvents/>
      <OutdoorEvents/>
      <div className="h-20 flex items-center p-12">
      <h1 className="text-2xl ml-14 text-white">Features Events</h1>
      </div>
      <FeaturesEvents/>
      <EventYouJoin/>
      <Blog/>
      <Artists/>
      <SubscribeToOurNewsLetter/>
    </div>
  );
};

export default HomePage;
