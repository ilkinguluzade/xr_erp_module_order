import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

export const Button = ({ buttonText, link, type }) => {
  return (
    <Link href={link}>
      <button className={styles[type]}>{buttonText}</button>
    </Link>
  );
};
