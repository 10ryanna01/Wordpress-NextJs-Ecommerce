import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  const secret = process.env.NEXT_PUBLIC_SNIPCART;
  return (
    <>
      <Component {...pageProps} />

      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/3.7.0/default/snipcart.css"
      />
      <Script
        async
        id="snipcart"
        src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
        data-api-key={secret}
      />
      <div
        hidden
        // data-config-modal-style="side"
        data-templates-url="/snipcart-templates.html"
      />
    </>
  );
}
