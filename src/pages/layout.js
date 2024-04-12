import "../app/styles/index.scss";
import MyApp from "./_app";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <MyApp />
      </body>
    </html>
  );
}
