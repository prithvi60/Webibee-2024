import { Spinner } from "@nextui-org/spinner";
export const SpinnerUI = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner
        size="lg"
        color="default"
      >
        <h4 className="text-center text-lg sm:text-xl !text-white font-Montserrat font-semibold">Retrieving social media data. Please allow a few moments for processing.</h4>
      </Spinner>
    </div>
  );
};
