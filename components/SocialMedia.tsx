"use client";

import { InstaPost } from "./InstaPost";

const SocialMedia = () => {
  return (
    <section className="padding-variable bg-primary">
      <div className="mx-auto pb-14">
        <h1 className="font-Montserrat font-medium text-5xl md:text-7xl text-center text-white capitalize">
          {/* <span className="hidden md:block">social</span> media */}
          social media
        </h1>
        <hr className="w-12 md:w-56 mt-4 mx-auto p-0.5 bg-default border-t-0 rounded-md" />
      </div>
      
        {/* <div className="flex items-center gap-5 flex-wrap pb-10"> */}
          {/* <SwiperSlide className="!w-[280px] !h-[350px] md:!w-[470px] md:!h-[500px] bg-contain bg-center relative group !my-6"> */}
            <InstaPost />
            {/* <LinkedInPosts /> */}
          {/* </SwiperSlide> */}
        {/* </div> */}
    </section>
  );
};

export default SocialMedia;
