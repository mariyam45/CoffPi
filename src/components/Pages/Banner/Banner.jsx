import React from "react";
// import BannerImg from "../../../assets/bg-e1.jpg";
// import BannerImg2 from "../../../assets/bg2.jpg";
import BannerImg3 from "../../../assets/bg-gc.jpg";
// import BannerImg4 from "../../../assets/bg-flr.jpg";

const Banner = () => {
  return (
    <div>
      <div className="banner ">
        <div className="hero   place-items-stretch">
          <img className="b_img" src={BannerImg3} alt="" />

          <div className="hero-content px-0 max-w-screen-2xl  text-neutral-content  bg-gradient-to-r from-slate-950  ">
            <div className=" grid grid-cols-2 ms-10   2xl:ms-48 md:ms-20">
              <div className="text_left   ">
                <h1 className="mb-5 text-3xl md:text-7xl 2xl:text-8xl font-bold text-lime-200">
                  Great Coffee here...
                </h1>
                <p className="mb-5 2xl:text-xl text-amber-200">
                  Start your day with a cup of coffee.. <br /> The most
                  delicious coffee recipes here for you__
                </p>
                <button className="btn bg-yellow-950 text-white">
                  Let's Visit
                </button>
              </div>
              <div className="tr col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
