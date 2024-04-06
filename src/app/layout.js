import { Inter } from "next/font/google";
import "./styles/index.scss";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const secret = process.env.NEXT_PUBLIC_SNIPCART_API_KEY;

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/*  start snipcart snippet */}
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/3.7.0/default/snipcart.css"
        />

        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
        <div
          hidden
          id="snipcart"
          data-api-key={secret}
          // data-config-modal-style="side"
          data-templates-url="/snipcart-templates.html"
        />
        {/* end snipcart snippet */}
      </body>
    </html>
  );
}
