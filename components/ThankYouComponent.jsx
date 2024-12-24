import Image from "next/image";
import Link from "next/link";

export const ThankYouComponent = () => {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-Merri text-default bg-primary space-y-6 h-[450px] md:h-[550px] lg:h-screen">
      <h3 className="text-3xl md:text-6xl font-semibold font-Lora text-center">
        <div className="relative h-14 w-14 md:h-28 md:w-28 mx-auto text-warning">
          <Image
            src={"/thumbs-up.gif"}
            fill
            title="thumbs up"
            alt="thumbs up"
            className="-mt-2 object-contain"
          />
        </div>
        Thank You !
      </h3>
      <p className="text-lg md:text-2xl text-center w-full">
        We&apos;ve received your submission.
      </p>
      <Link
        title="back to home"
          href={"/"}
          className="flex justify-center items-center"
        >
          <h4
              className={`w-max text-base md:text-lg text-default bg-danger  px-8 py-2 md:py-4 rounded-md hover:bg-danger/75`}
            >
              Go Back To Home
            </h4>
          
        </Link>
    </section>
  );
};
