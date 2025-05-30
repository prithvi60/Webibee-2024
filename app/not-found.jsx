import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="p-10 sm:px-20 xl:px-64 sm:py-16 xl:py-28 font-SourceCodePro bg-primary text-default mb-10 space-y-6 mx-auto h-full w-full text-center">
      {/* <div className='relative h-56 w-56 -mt-5'> */}
      <Image
        src={
          "https://cdn.webibee.com/Webibee/404.png"
        }
        title="404 page not found"
        height={350}
        width={350}
        alt="404 page not found"
        className="object-contain mx-auto"
      />
      {/* </div> */}
      <h2 className="text-3xl md:text-5xl capitalize">
        Looking for something <span className="animate-pulse">?</span>
      </h2>
      <p className="text-base md:text-lg">
        We&apos;re sorry. The web address you entered can&apos;t be found on our
        site. Your page may have moved or may no longer be available.{" "}
        <em>Please try one of the options below:</em>
      </p>
      <p className="text-base md:text-lg">
        Try to access the page using the navigation above.
      </p>
      <p className="text-base md:text-lg">
        If you typed the page address in the address bar, make sure that
        it&apos;s spelled correctly.
      </p>
      <div className="w-full flex justify-center items-center">
        <Link title="back to home" href={"/"}>
          <h4
            className={`text-lg text-white bg-info px-8 py-4 rounded-md hover:bg-danger/75`}
          >
            Go Back To Home
          </h4>
        </Link>
      </div>
    </section>
  );
}
