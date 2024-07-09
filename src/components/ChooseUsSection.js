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

      <article className="md:flex block py-[5rem] gap-[5%] ">
        <div className="relative md:w-[50%]">
          <SquaredImg
            className="  h-[200px] w-[200px]"
            imgSrc={firstImgBehind}
          />
        </div>

        <div className="md:w-[50%]">
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
      <article className="md:flex block gap-[5%] max-h-40vh">
        <div className="relative md:w-[50%] md:hidden">
          <SquaredImg className="  h-[200px] w-[200px]" imgSrc={firstImg} />
        </div>

        <div className="md:w-[50%]">
          <TitleBarHeading>Title Heading</TitleBarHeading>
          <p>Some Description</p>
        </div>
        <div className="relative hidden md:block w-[50%]">
          <SquaredImg className="  h-[200px] w-[200px]" imgSrc={firstImg} />
        </div>
      </article>

      <div className="text-center my-10">
        <p>Some Other Descripption</p>
      </div>
    </section>
  );
}
