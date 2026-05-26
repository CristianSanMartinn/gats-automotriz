import React from "react";
import styles from "./SectionTitle.module.css";

interface Props {
  eyebrow?: string;
  title:    string;
  accent?:  string;   // palabra dentro del título que va en amarillo
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<Props> = ({
  eyebrow,
  title,
  accent,
  subtitle,
  centered = false,
  className = "",
}) => {
  // Si se pasa accent, resalta esa palabra dentro del título
  const renderTitle = () => {
    if (!accent) return title;
    const parts = title.split(accent);
    return (
      <>
        {parts[0]}
        <span className={styles.accent}>{accent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`${styles.wrap} ${centered ? styles.centered : ""} ${className}`}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>{eyebrow}</span>
      )}
      <h2 className={styles.title}>{renderTitle()}</h2>
      <div className={`${styles.rule} ${centered ? styles.ruleCenter : ""}`} />
      {subtitle && (
        <p className={styles.subtitle}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;