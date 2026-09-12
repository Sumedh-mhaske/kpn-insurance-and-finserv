import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import QuoteModal from "./components/QuoteModal";

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />
      <Hero onOpenQuote={() => setQuoteOpen(true)} />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
