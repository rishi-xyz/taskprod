import Footer from "@/components/section/marketingpage/Footer";
import HeaderSection from "@/components/section/marketingpage/Header";
import HeroSection from "@/components/section/marketingpage/Hero";
import ProductShowcase from "@/components/section/marketingpage/ProductShowcase";

export default function Home() {
  return (
    <main>
      <HeaderSection/>
      <HeroSection/>
      <ProductShowcase/>
      <Footer/>
    </main>
  );
}
