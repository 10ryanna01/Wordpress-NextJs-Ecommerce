import React from "react";

export default function ToggleTheme({ handleChange, isChecked }) {
  return (
    <>
      <div className="FSC__toggle__switch">
        <input
          value="private"
          name="switch"
          id="switch"
          type="checkbox"
          className="switch"
          onChange={handleChange}
          checked={isChecked}
        />
        <label htmlFor="switch">
          <span className="switch-x-text">Darkmode </span>
          <span className="switch-x-toggletext">
            <span className="switch-x-unchecked">
              <span className="switch-x-hiddenlabel">Unchecked: </span>
              Deactivated
            </span>
            <span className="switch-x-checked">
              <span className="switch-x-hiddenlabel">Checked: </span>Activated
            </span>
          </span>
        </label>
      </div>
    </>
  );
}
