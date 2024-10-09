export default function DashboardAnalytics() {
  return (
    <main className="shadow fira-sans-semibold md:overflow-auto overflow-x-scroll px-3 py-2 flex gap-x-4 items-center md:justify-between">
      <div className="md:text-xl text-[16px] md:text-wrap text-nowrap text-teal-800">
        <p>Number of Products</p>
        <p className="fira-sans-regular  text-center">9</p>
      </div>

      <div className="text-xl text-[16px] text-teal-800 md:text-wrap text-nowrap">
        <p>Customers</p>
        <p className="fira-sans-regular text-center">19</p>
      </div>
      <div className="md:text-wrap text-xl text-[16px] text-teal-800 text-nowrap">
        <p>Total Orders Completed</p>
        <p className="fira-sans-regular  text-center">349</p>
      </div>
    </main>
  );
}
