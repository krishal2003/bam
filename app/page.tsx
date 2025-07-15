import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import WelcomeMessage from "@/components/welcome-message";
import NewsAnnouncements from "@/components/news-announcements";
import QuickLinks from "@/components/quick-links";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WelcomeMessage />
        <NewsAnnouncements />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
