import FirstBlog from "../assets/Blog/Frame 31.png";
import SecondBlog from "../assets/Blog/apple-blog.png";
export default function BlogSection() {
  return (
    <section className="md:mx-[10%]">
      <header>
        <h1 className="text-center text-5xl font-sans_serif my-5">Blogs</h1>
      </header>
      <article className="md:flex block *:my-6 *:m-auto md:w-[80%] w-[90%] m-auto justify-center gap-[10%]">
        <div className="flex w-full gap-3 bg-white shadow">
          <div className=" w-[40%] h-full">
            <img src={FirstBlog} alt="some pic" />
          </div>

          <div className="w-[60%]  text-wrap">
            <h4 className="font-[800] text-2xl">
              Cooking tools you must have.
            </h4>
            <p>Some title</p>
            <p className="max-w-fit w-full">Some text about first blog</p>
          </div>
        </div>
        <div className="flex bg-white shadow">
          <div className=" w-[40%] h-full">
            <img src={SecondBlog} alt="some pic" />
          </div>
          <div>
            <h4 className="font-[800] text-2xl">Some header title.</h4>
            <p>Some title</p>
            <p className="max-w-fit w-full">Some text about first blog</p>
          </div>
        </div>
      </article>
    </section>
  );
}
