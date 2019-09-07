import React from "react";
import styles from "./PageTemplate.scss";
import classNames from "classnames/bind";
import Header from "../Header";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const PageTemplate = ({ children }) => {
  // eslint-disable-next-line no-unused-expressions
  return (
    <div className={cx("page-template")}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
