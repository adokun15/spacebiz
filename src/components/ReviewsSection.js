import FirstReview from "../assets/Review/african-woman-posing-studio_23-2151463120 1.png";
export default function ReviewsSection() {
  return (
    <section className="my-[2rem]">
      <header className="my-[3rem]">
        <h2 className="text-center">Reviews</h2>
      </header>

      <article className="m-auto w-[60%] gap-[20px] justify-center flex relative">
        <div className="bg-white my-4  px-12 relative shadow-lg min-h-[140px] p-8">
          <div className="absolute mx-4 mb-5 left-0 h-[40%] -top-[50px]">
            <img
              height={150}
              width={150}
              className="rounded-[50%]"
              src={FirstReview}
              alt="Some pic"
            />

            <h2> ade ola</h2>
            <p>title</p>
            <p>Comment</p>
            <p>ratings</p>
          </div>
        </div>
        <div className="bg-white my-4  shadow-lg min-h-[140px] p-8">
          <div>
            <img
              height={150}
              width={150}
              className="rounded-[50%]"
              src={FirstReview}
              alt="Some pic"
            />
          </div>
          <h2> ade ola</h2>
          <p>title</p>
          <p>Comment</p>
          <p>ratings</p>
        </div>
        <div className="bg-white my-4  shadow-lg min-h-[140px] p-8">
          <div>
            <img
              height={150}
              width={150}
              className="rounded-[50%]"
              src={FirstReview}
              alt="Some pic"
            />
          </div>
          <h2> ade ola</h2>
          <p>title</p>
          <p>Comment</p>
          <p>ratings</p>
        </div>
      </article>
    </section>
  );
}
