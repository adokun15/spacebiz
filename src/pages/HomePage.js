import BestSellerSection from "../components/BestSellerSection";
import BlogSection from "../components/BlogSection";
import ChooseUsSection from "../components/ChooseUsSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import NewsLetterSection from "../components/NewsletterSection";

export default function HomePage() {
  return (
    <div className="bg-slate-200">
      <HeroSection />
      <ChooseUsSection />
      <BestSellerSection />
      {/* <ReviewsSection />*/}
      <BlogSection />
      <NewsLetterSection />
      <FooterSection />
    </div>
  );
}
