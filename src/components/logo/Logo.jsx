import React from "react";

import { CgCodeSlash } from "react-icons/cg";

const Logo = () => {
  return (
    <>
      <div className="logoPersonal">
        <CgCodeSlash className="icon-logo" />

        <h4 className="nomLogoPersonal">CM <span className="dev">Developer</span>  </h4>
      </div>
    </>
  );
};

export default Logo;
