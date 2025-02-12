"use client";

import styles from "./index.module.css";

export default function LinearGradientBtn({
  children,
  style,
}: Readonly<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}>) {
  return (
    <div className={styles.LinearGradientBtn} style={{ ...style }}>
      <div className={styles.subBox}>{children}</div>
    </div>
  );
}
