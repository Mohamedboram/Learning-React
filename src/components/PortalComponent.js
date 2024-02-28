import React from "react";
import ReactDOM from "react-dom";

function PortalComponent() {
  return ReactDOM.createPortal(
    <h2>hello world</h2>,
    document.getElementById("root-portal")
  );
}

export default PortalComponent;
