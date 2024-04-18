import React, { useState } from "react";
import ToggleTheme from "../ToggleTheme";
import ScreenFilter from "../ScreenFilter";

import styles from "@styles/page.module.scss";
import gstyles from "@styles/index.scss";
import Header from "../Header";

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div>
      <div className="FSC">
        <div className="FSC__theme" data-theme={isDark ? "dark" : "light"}>
          <ScreenFilter />
          <Header />
          <ToggleTheme
            handleChange={() => setIsDark(!isDark)}
            isChecked={isDark}
          />

          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
