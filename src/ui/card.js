export default function Card({ children, cls }) {
  return (
    <div className={`bg-white shadow px-5 py-3 font-roboto ${cls}`}>
      {children}
    </div>
  );
}
