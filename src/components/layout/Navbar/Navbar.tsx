"use client";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#inicio",    label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#el-taller",  label: "El Taller" },
  { href: "#galeria",   label: "Galería" },
  { href: "#reservas",  label: "Reservas" },
  { href: "#contacto",  label: "Contacto" },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* Franja superior */}
      <div className={styles.topBar}>
        <span>
          ⚡ Servicio de urgencias disponible ·{" "}
          <a href="tel:+56912345678" className={styles.topBarLink}>
            <strong>+56 9 1234 5678</strong>
          </a>
        </span>
      </div>

      <nav className={styles.nav}>
        {/* LOGO */}
        <a href="#inicio" className={styles.logo} aria-label="Taller GATS inicio">
          <div className={styles.logoMark}>G</div>
          <div className={styles.logoTexts}>
            <span className={styles.logoName}>TALLER GATS</span>
            <span className={styles.logoTagline}>Mecánica de Confianza</span>
          </div>
        </a>

        {/* LINKS DESKTOP */}
        <ul className={styles.navLinks} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.navLink}>{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA + HAMBURGUESA */}
        <div className={styles.navRight}>
          <a href="#reservas" className={styles.ctaBtn}>Agendar Hora</a>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={styles.mobileLink}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reservas"
              onClick={() => setMenuOpen(false)}
              className={styles.mobileCta}
            >
              Agendar Hora →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;