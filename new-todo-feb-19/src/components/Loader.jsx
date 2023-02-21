import React from "react";

const Loader = () => {
  return (
    <div className="Loadme">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
