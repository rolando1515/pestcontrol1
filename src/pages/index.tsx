import Head from "next/head";
import { PageLayout } from "ui/layouts/pageLayouts";
import { Hero,FeaturedService } from "ui/containers";








export default function Home() {
  return (
    <>
      <Head>
        <title>Pest Control</title>
        <meta name="Pest Control" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Hero />
        <FeaturedService />
       
       

        
      </PageLayout>
    </>
  );
}
