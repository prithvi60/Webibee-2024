
import { InstaPost } from "./InstaPost";
import { LinkedInPosts } from "./LinkedInPosts";

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
      <InstaPost />
      <LinkedInPosts />
    </section>
  );
};

export default SocialMedia;
