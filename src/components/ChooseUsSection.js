import firstImgBehind from "../assets/productSection/first-img-behind.png";
import firstImg from "../assets/productSection/first-img.png";
import firstAArrowImg from "../assets/ArrowImg/first-arrow-Frame.png";
import { SquaredImg } from "../ui/Images";
import { TitleBarHeading } from "../ui/TitlebarHeading";

export default function ChooseUsSection() {
  return (
    <section className="md:w-4/5 w-[90%] mt-[10rem]  m-auto my-[2rem]">
      <header className="text-center my-[3rem">
        <TitleBarHeading cls="text-4xl font-700 ">
          Why Choose Us
        </TitleBarHeading>
        <p className="text-descriptive_color">
          At Acookware, we believe that cooking should be an experience that not
          only delight the senses but also nurture our planet. Our Journey began
          with a simple yet powerful idea to create cookware that embodies both
          sustainability and aesthestic appeal
        </p>
      </header>

      <article className="flex py-[5rem] gap-[5%] ">
        <div className=" relative max-h-[40vh]">
          <SquaredImg
            className="absolute top-0 h-[200px] w-[200px]"
            imgSrc={firstImgBehind}
          />
          <SquaredImg className="absolute bottom-0" imgSrc={firstImg} />
        </div>
        <div>
          <TitleBarHeading>Our Commitment to sustainability</TitleBarHeading>
          <p>
            We are committed to sustainability in every aspect of our business.
            From sourcing eco-Friendly materials to reducing our carbon
            footprint, we strive to make a positive impact on the environment.
            Our cookware is crafted from recycled stainless steel, non-toxic
            steel.
          </p>
        </div>
      </article>
      <article className="flex gap-[5%] max-h-40vh">
        <div>
          <TitleBarHeading>HII</TitleBarHeading>
          <p>fsjfnsjf</p>
        </div>

        <div>
          <SquaredImg imgSrc={firstImgBehind} />
          <SquaredImg imgSrc={firstImg} />
        </div>
      </article>

      <div>
        <p>afsf f</p>
      </div>
    </section>
  );
}
