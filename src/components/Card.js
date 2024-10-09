export default function Card({ children, className }) {
  return (
    <div
      className={
        "shadow shadow-slate-300 rounded px-4 py-2 min-h-[3rem] min-w-[30%] " +
        className
      }
    >
      {children}
    </div>
  );
}
