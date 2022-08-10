import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <div className="default-layout-root">
      <div className="default-layout-wrapper">{children}</div>
    </div>
  );
}
