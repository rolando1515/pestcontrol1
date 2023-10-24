import Head from "next/head";
import { PageLayout } from "ui/layouts/pageLayouts";
import { Hero } from "ui/containers/Hero/hero";







export default function Home() {
  return 
  <>
  <Head>
    <title>Termitek landing page</title>
    <meta name="description" content="Termitek landing page" /> 
 

  </Head> 
  <PageLayout>
  <Hero />


  </PageLayout>  
  
  
  
  
  
  
  
  
  </>;
}
