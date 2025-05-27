import Image from "next/image";
import Link from "next/link";

export const ThankYouComponent = () => {
  return (
    <section className="flex flex-col justify-center items-center p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 mb-10 font-EbGaramond text-default bg-primary space-y-6 h-[450px] md:h-[550px] lg:h-[60vh]">
      <h3 className="text-3xl md:text-6xl font-semibold text-center">
        <div className="relative h-14 w-14 md:h-28 md:w-28 mx-auto text-warning">
          <Image
            src={"https://cdn.webibee.com/Webibee/thumbs-up.gif"}
            fill
            title="thumbs up"
            alt="thumbs up"
            className="-mt-2 object-contain"
          />
        </div>
        Thank You !
      </h3>
      <p className="text-lg md:text-2xl text-center w-full font-SourceCodePro">
        We&apos;ve received your submission.
      </p>
      <Link
        title="back to home"
        href={"/"}
        className="w-max mx-auto"
      >
        <h4
          className={`text-base md:text-lg text-white font-SourceCodePro bg-info px-8 py-2 md:py-4 rounded-md hover:bg-danger/75`}
        >
          Go Back To Home
        </h4>

      </Link>
    </section>
  );
};
