import "../app/styles/index.scss";
import Script from "next/script";
import MyApp from "./_app";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <MyApp />
    </html>
  );
}
