import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';
import { Header } from "ui/shared/Header/header";

import './_app.css';
import { HeaderLower } from 'ui/shared/Header lower/header_lower';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeaderLower />
      <Component {...pageProps} />
    </>
  );
}
