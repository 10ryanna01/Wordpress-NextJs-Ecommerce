import React from "react";

export default function ToggleTheme({ handleChange, isChecked }) {
  return (
    <div>
      <input
        type="checkbox"
        id="checkForDarkMode"
        className="FSC__toggle__darkmode"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="checkForDarkMode"> darkmode</label>
    </div>
  );
}
