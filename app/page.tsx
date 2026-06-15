import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductsSection } from "@/components/products-section";
import { DeliverySection } from "@/components/delivery-section";
import { ContactsSection } from "@/components/contacts-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url('/images/giphy1.gif')",
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <DeliverySection />
      <ContactsSection />
      <SiteFooter />
    </main>
  );
}
