"use client";
import "@styles/index.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>this is the shared layout</header>
        {children}

        <h1>this is the shared layout</h1>
      </body>
    </html>
  );
}
