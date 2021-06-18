import Layout from "../components/layout";
import AnimationComponent from "../components/animationHandler";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Raaatio - Generative noise pattern generator </title>
      </Head>
      <AnimationComponent />
    </Layout>
  );
}
