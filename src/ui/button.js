export default function Button({ children, cls }) {
  return (
    <button className={`bg-primary_color px-10 py-3 font-roboto ${cls}`}>
      {children}
    </button>
  );
}
