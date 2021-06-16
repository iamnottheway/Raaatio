import { Hero } from "../landing-page-components/hero";
import { Section2 } from "../landing-page-components/secton2";
import { Section3 } from "../landing-page-components/section3";
import { Pricing } from "../landing-page-components/pricing";
import { Footer } from "../landing-page-components/footer";

export default function Index() {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Pricing />
      <Footer />
    </>
  );
}
