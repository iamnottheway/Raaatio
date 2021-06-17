import { Hero } from "../landing-page-components/hero";
import { Section2 } from "../landing-page-components/secton2";
import { Section3 } from "../landing-page-components/section3";
import { Pricing } from "../landing-page-components/pricing";
import { Layout } from "../landing-page-components/layout";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Section2 />
      <Section3 />
      <Pricing />
    </Layout>
  );
}

export const config = {
  unstable_runtimeJS: false,
};
