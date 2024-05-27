"use client";

import { InstaPost } from "./InstaPost";
import { Get_InstaPosts } from "../graphql/queries";
import { useQuery } from "@apollo/client";

const SocialMedia = () => {
  const { data } = useQuery(Get_InstaPosts);

  if (data === undefined) {
    return <div></div>;
  }

  return (
    <section className="padding-variable p-6 md:p-10 lg:p-[60px] bg-primary">
      <div className="mx-auto pb-14">
        <h1 className="font-Montserrat font-medium text-5xl md:text-7xl text-center text-white capitalize">
          social media
        </h1>
        <hr className="w-12 md:w-56 mt-4 mx-auto p-0.5 bg-default border-t-0 rounded-md" />
      </div>

      <div className="flex items-center gap-5 flex-wrap pb-10">
        <InstaPost posts={data?.insta_Posts} />
      </div>
    </section>
  );
};

export default SocialMedia;
