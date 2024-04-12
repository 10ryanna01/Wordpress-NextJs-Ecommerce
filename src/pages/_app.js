import { SnipcartProvider } from "@hooks/use-snipcart";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <SnipcartProvider>
        <Component {...pageProps} />
      </SnipcartProvider>
    </>
  );
}
