"use client";

import { InstaPost } from "./InstaPost";
import { Get_InstaPosts } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { SpinnerUI } from "./Spinner";

const SocialMedia = () => {
  const { data } = useQuery(Get_InstaPosts);

  // if (data === undefined) {
  //   return <SpinnerUI />;
  // }

  return (
    <section className="padding-variable p-6 md:p-10 lg:p-[60px] bg-primary">
      <div className="mx-auto pb-14">
        <h1 className="text-5xl font-medium text-center text-white capitalize font-Gothic md:text-7xl">
          social media
        </h1>
        <hr className="w-12 md:w-56 mt-4 mx-auto p-0.5 bg-default border-t-0 rounded-md" />
      </div>

      <div className="flex flex-wrap items-center gap-5 pb-10">
        <InstaPost posts={data?.insta_Posts} />
      </div>
    </section>
  );
};

export default SocialMedia;
