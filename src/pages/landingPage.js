import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main>
      <nav className="flex justify-between p-10 items-center">
        <h1 className="text-4xl">SpaceBiz</h1>
        <article className="flex text-2xl items-center gap-10">
          <Link className="hover:text-teal-900 transition-colors hover:bg-slate-200 px-3 rounded py-2">
            Pricing
          </Link>
          <div className="space-x-7">
            <button className="hover:text-teal-900 transition-colors hover:bg-slate-200 px-3 rounded py-2">
              <Link>Login</Link>
            </button>
            <button className="bg-teal-800 text-white px-3 transition-opacity rounded py-2 hover:opacity-90">
              <Link className="space-x-5">Create Your Store</Link>
            </button>
          </div>
        </article>
      </nav>
      <section>
        <h1 className="text-[6rem]">Increase Your Whatapps Sale </h1>
        <h1 className="text-[6rem]">List your product and Inventory </h1>
        <h1 className="text-[6rem]">Integrate your Payment and Order</h1>
      </section>
    </main>
  );
}
