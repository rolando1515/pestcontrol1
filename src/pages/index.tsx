import Head from "next/head";
import { PageLayout } from "ui/layouts/pageLayouts";
import { Hero } from "ui/containers/Hero/hero";







export default function Home() {
  return (
    <>
      <Head>
        <title>Roland's Portfolio</title>
        <meta name="Welcome to Roland Labrador's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Hero />
       
       

        
      </PageLayout>
    </>
  );
}
