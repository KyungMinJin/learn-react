import React from "react";
import styles from "./CSSMODULE.module.css";

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요 저는 <span className="something">CSS module!</span>
    </div>
  );
};

export default CSSModule;
