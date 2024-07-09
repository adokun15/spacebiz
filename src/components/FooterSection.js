export default function FooterSection() {
  return (
    <footer className="text-white min-h-[30vh] bg-text_heading_color">
      <div className="grid gap-5 grid-cols-2 md:grid-cols-4 justify-around">
        <article className="row-end-2  md:row-auto">
          <h1>Acookwares</h1>
          <p>We are dedicated to helpinh impro</p>
        </article>
        <article>
          <h2>Navigation</h2>
        </article>
        <article>
          <h2>Contact Us</h2>
        </article>
        <article>
          <h2>Opening Hours</h2>
        </article>
        <article>
          <h2>Our Socials</h2>
        </article>
      </div>
      <p class="my-5 text-center opacity-75">Copyright&copy;2024</p>
    </footer>
  );
}
