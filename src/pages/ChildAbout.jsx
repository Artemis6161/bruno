import React from "react";
import { useNavigate } from "react-router-dom";

function ChildAbout() {
  const nav = useNavigate();
  function gotoHome() {
    nav("/");
  }
  return (
    <>
      <div>ChildAbout</div>
      <p>
        go to <button onClick={gotoHome}>home</button>
      </p>
    </>
  );
}

export default ChildAbout;
