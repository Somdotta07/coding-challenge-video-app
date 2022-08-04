import React, { useState } from "react";
import Comments from "./Comments";

function Toggle() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button className="btn btn-link"onClick={() => setDisplay(!display)}>
       <i className="fa fa-toggle-on"></i>
      </button>
      {display ? <Comments /> : null}
    </div>
  );
}

export default Toggle;
