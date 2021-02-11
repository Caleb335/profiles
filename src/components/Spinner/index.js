import React from "react";
import style from "./style/loader.module.css";

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <div className={style.cube1}></div>
      <div class={style.cube2}></div>
    </div>
  );
};

export default Spinner;
