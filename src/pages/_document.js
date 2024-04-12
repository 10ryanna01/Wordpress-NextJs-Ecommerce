import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const secret = process.env.NEXT_PUBLIC_SNIPCART;
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/3.7.0/default/snipcart.css"
        />

        <div
          hidden
          // data-config-modal-style="side"
          data-templates-url="/snipcart-templates.html"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          id="snipcart"
          src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"
          data-api-key={secret}
        />
      </body>
    </Html>
  );
}
