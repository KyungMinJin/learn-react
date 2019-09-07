import React, { Component } from "react";
import styles from "./Button.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

const Button = ({ children, ...rest }) => {
  return (
    <div className={cx("button")} {...rest}>
      {children}
    </div>
  );
}; //css module 형식

export default Button;
