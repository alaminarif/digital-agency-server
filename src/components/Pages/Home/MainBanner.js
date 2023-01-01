import React from "react";
import BannerPhoto from "../../../Images/logos/Frame.png";

const MainBanner = () => {
  return (
    <div className="hero min-h-screen bg-primary  absolute top-0">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <img src={BannerPhoto} className="w-6/12 rounded-lg " />
        <div className="w-6/12">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
