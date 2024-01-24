"use client";
import { team } from "@/libs/data";
import { Card, CardFooter, Image, Button, Tooltip } from "@nextui-org/react";
import { FaRegThumbsUp  } from "react-icons/fa6";
import confetti from "canvas-confetti";

export default function Team() {
  const handleConfetti = () => {
    let end = Date.now() + 3 * 1000;
    // go Buckeyes!
    let colors = ["#904BF6", "#ffffff"];
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };
  return (
    <section className="padding-variable" id="Testimonial">
      <div className="mx-auto">
        <h2 className="font-Montserrat text-5xl md:text-7xl text-center text-gradient capitalize">
          Meet the Team
        </h2>
        <hr className="w-56 mt-4 mx-auto p-0.5 border-t-0 rounded-md bg-gradient" />
      </div>
      <div className="w-full h-full overflow-hidden flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10 lg:gap-24 md:gap-20 my-10 py-10">
        {team.map((person, idx) => (
          <div className="w-full sm:w-[40%] lg:w-[20%] space-y-5 flex justify-center items-center md:block" key={idx}>
            <Card
              isFooterBlurred
              className="w-[280px] h-[320px] col-span-12 sm:col-span-5">
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full -translate-y-6 object-contain"
                src={person.img}
              />
              <CardFooter className="absolute bg-primary bg-opacity-20 bottom-0 border-t-1 border-primary z-10 justify-between">
                <div>
                  <p className="text-white  font-extrabold font-Montserrat text-2xl md:text-4xl">
                    {person.name}
                  </p>
                  <p className="text-black text-sm md:text-base font-medium uppercase">
                    {person.designation}
                  </p>
                </div>
                <Tooltip content="Hit Me" className="bg-secondary text-white">
                  <Button
                    disableRipple
                    size="lg"
                    onPress={handleConfetti}
                    radius="full"
                    isIconOnly
                    color="danger"
                    aria-label="Like"
                  >
                    <FaRegThumbsUp  className="w-5 h-5 text-white" />
                  </Button>
                </Tooltip>
              </CardFooter>
            </Card>
            {/* <p className="hidden lg:block text-white text-base font-Lato text-center tracking-normal leading-snug">
              {person.passion}
            </p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
