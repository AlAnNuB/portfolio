import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutSection } from "@/pages/landing/about";
import { ContactSection } from "@/pages/landing/contact";
import { ExperienceSection } from "@/pages/landing/experience";
import { HeroSection } from "@/pages/landing/hero";
import { ServicesSection } from "@/pages/landing/services";
import { WorksSection } from "@/pages/landing/works";
import { useEffect } from "react";
import { Page } from "./styles";

export const Landing = () => {
  useEffect(() => {
    document.title = "Alan Miranda — Desenvolvedor Full Stack";
    const hash = window.location.hash;
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, []);

  return (
    <Page>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </Page>
  );
};
