export default function Authentication() {
  //Auth;

  return (
    <div className="bg-teal-800 h-[100vh] box-border pt-10">
      <form className="bg-white px-5 py-4 rounded shadow shadow-slate-400 space-y-4 min-h-[10vh] lg:w-[35%] w-4/5 mx-auto ">
        <h1 className="text-3xl">Login to your account</h1>

        <label className="*:block  block">
          <span className="text-2xl">Email</span>
          <input
            required
            className="border-2 border-teal-700 px-3 py-1 rounded w-full "
            placeholder="Enter Email Address"
          />
        </label>

        <label className="*:block  block">
          <span className="text-2xl">Password</span>
          <input
            className="border-2 border-teal-700 px-3 py-1 rounded w-full "
            placeholder="Enter password"
            type="password"
          />
        </label>

        <button className="block bg-teal-900 text-white px-3 py-1 rounded shadow">
          Submit
        </button>
      </form>
    </div>
  );
}
