import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';
import { Header } from "ui/shared/Header/header";

import './_app.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
