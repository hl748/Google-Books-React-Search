import React from "react";

function Header (props) {
  return <div className="container" style={props.style}>{props.children}</div>;
}

export default Header;