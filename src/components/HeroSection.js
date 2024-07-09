import firstIcon from "../assets/Icon/ph_plant.svg";
import { Square } from "lucide-react";
import Card from "../ui/card";
import { SquaredImg } from "../ui/Images";

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden md:min-h-[80vh] h-[160vh]  mb-[4rem]">
      <section className={`bg-hero-bg relative object-cover h-[70vh]`}>
        <div className="absolute w-full bg-[rgba(0,0,0,0.5)] inset-y-0"></div>
        <div className="text-white leading-10 absolute text-center py-14 z-10 w-full m-auto ">
          <div className="relative">
            <h1 className="lg:text-[5rem] text-4xl font-sans_serif">
              A header Text
            </h1>
            <p className="lg:text-[5rem] text-4xl font-sans_serif">
              A descriptive Text
            </p>
          </div>
        </div>
      </section>
      <div className="h-[20vh] relative -top-[5rem] z-50 px-[10%]">
        <ul className="grid md:flex justify-center grid-cols-2 gap-[2rem]">
          <Card cls=" shadow py-10">
            <SquaredImg cls="block m-auto" imgSrc={firstIcon} />
            <h3 className="text-xl my-4 text-center font-[800]">
              Aesthestic Cooking Pot
            </h3>
            <p className="opacity-80 text-center">
              Eco-Friendly and Beautiful designs to spice up your Kitchen
            </p>
          </Card>
          <Card cls=" shadow py-10">
            <SquaredImg cls="block m-auto" imgSrc={firstIcon} />
            <h3 className="text-xl my-4 text-center font-[800]">
              Aesthestic Cooking Pot
            </h3>
            <p className="opacity-80 text-center">
              Eco-Friendly and Beautiful designs to spice up your Kitchen
            </p>
          </Card>
          <Card cls=" shadow py-10">
            <SquaredImg cls="block m-auto" imgSrc={firstIcon} />
            <h3 className="text-xl my-4 text-center font-[800]">
              Aesthestic Cooking Pot
            </h3>
            <p className="opacity-80 text-center">
              Eco-Friendly and Beautiful designs to spice up your Kitchen
            </p>
          </Card>
          <Card cls=" shadow py-10">
            <SquaredImg cls="block m-auto" imgSrc={firstIcon} />
            <h3 className="text-xl my-4 text-center font-[800]">
              Aesthestic Cooking Pot
            </h3>
            <p className="opacity-80 text-center">
              Eco-Friendly and Beautiful designs to spice up your Kitchen
            </p>
          </Card>
        </ul>
      </div>
    </main>
  );
}
