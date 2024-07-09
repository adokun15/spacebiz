import FirstBlog from "../assets/Blog/Frame 31.png";
import SecondBlog from "../assets/Blog/apple-blog.png";
export default function BlogSection() {
  return (
    <section className="mx-[10%]">
      <header>
        <h1 className="text-center text-5xl font-sans_serif my-5">Blogs</h1>
      </header>
      <article className="flex w-[80%] justify-center gap-[10%]">
        <div className="flex gap-3 bg-white shadow">
          <div className=" w-[40%] h-full">
            <img src={FirstBlog} alt="some pic" />
          </div>

          <div className="w-[60%] text-wrap">
            <h4>Cooking tools you must have.</h4>
            <p>Some title</p>
            <p className="max-w-fit w-full">
              x Mo ddddddddddddddc dddddddddddddd d ddddddddddddddd d dddd
              dddddddddre desc
            </p>
          </div>
        </div>
        <div className="flex bg-white shadow">
          <div>
            <img src={SecondBlog} alt="some pic" />
          </div>
          <div>
            <h4>Cooking tools you must have.</h4>
            <p>Some title</p>
            <p className="max-w-fit w-full">
              x Mo ddddddddddddddc dddddddddddddd d ddddddddddddddd d dddd
              dddddddddre desc
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
