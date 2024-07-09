import NewsletterImg from "../assets/newsletter/newsleter-img.png";
export default function NewsLetterSection() {
  return (
    <section className="w-full mt-5">
      <header className="text-center text-5xl font-sans_serif my-5">
        <h1>Newsletter</h1>
      </header>
      <div className="flex bg-white rounded">
        <div className="w-1/2 p-[5%]">
          <h2 className="text-3xl font-sans_serif">
            Sign Up for a Newsletter Today
          </h2>
          <p className="my-2">Some description about this newsletter!</p>
          <form>
            <input
              className="border mr-5 bg-white shadow py-1 border-slate-300 border-solid px-3"
              placeholder="Enter email"
              disabled
            />
            <button className="bg-primary_color text-white px-3 py-2 rounded">
              send
            </button>
          </form>
        </div>

        <div className="w-1/2">
          <img src={NewsletterImg} className="h-full" alt="some pic" />
        </div>
      </div>
    </section>
  );
}
