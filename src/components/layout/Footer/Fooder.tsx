import React from "react";
import styles from "./Fooder.module.css";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const NAV_LINKS = [
  { href: "#inicio",     label: "Inicio" },
  { href: "#servicios",  label: "Servicios" },
  { href: "#el-taller",  label: "El Taller" },
  { href: "#galeria",    label: "Galería" },
  { href: "#reservas",   label: "Reservas" },
  { href: "#testimonios",label: "Testimonios" },
  { href: "#contacto",   label: "Contacto" },
];

const SERVICES_LIST = [
  "Mecánica General",
  "Frenos y Suspensión",
  "Sistema Eléctrico",
  "Diagnóstico Computarizado",
  "Mantención Preventiva",
  "Aire Acondicionado",
];

const SCHEDULE = [
  { day: "Lunes – Viernes", hours: "08:00 – 18:00", open: true  },
  { day: "Sábado",          hours: "09:00 – 14:00", open: true  },
  { day: "Domingo",         hours: "Cerrado",        open: false },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Línea superior */}
      <div className={styles.topRule} aria-hidden />

      <div className={styles.container}>

        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <div className={styles.logoMark}>G</div>
            <div>
              <div className={styles.logoName}>TALLER GATS</div>
              <div className={styles.logoSub}>Mecánica de Confianza</div>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Taller mecánico familiar con más de 15 años en Melipilla.
            Técnicos certificados, repuestos originales y garantía en cada trabajo.
          </p>
          {/* Redes sociales */}
          <div className={styles.socials}>
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer"
               className={styles.socialBtn} aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className={styles.socialBtn} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className={styles.socialBtn} aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>
            <span className={styles.colTitleLine} />Navegación
          </h4>
          <ul className={styles.linkList}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={styles.navLink}>
                  <span className={styles.linkArrow} aria-hidden>›</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>
            <span className={styles.colTitleLine} />Servicios
          </h4>
          <ul className={styles.linkList}>
            {SERVICES_LIST.map((s) => (
              <li key={s}>
                <a href="#servicios" className={styles.navLink}>
                  <span className={styles.linkArrow} aria-hidden>›</span>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto + Horario */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>
            <span className={styles.colTitleLine} />Contacto
          </h4>

          <div className={styles.contactList}>
            <div className={styles.contactRow}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>Av. Principal 123, Melipilla</span>
            </div>
            <div className={styles.contactRow}>
              <FaPhoneAlt className={styles.contactIcon} />
              <a href="tel:+56912345678" className={styles.contactLink}>+56 9 1234 5678</a>
            </div>
            <div className={styles.contactRow}>
              <FaEnvelope className={styles.contactIcon} />
              <a href="mailto:contacto@tallergats.cl" className={styles.contactLink}>
                contacto@tallergats.cl
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className={styles.schedule}>
            <div className={styles.scheduleTitle}>⏰ Horario</div>
            {SCHEDULE.map(({ day, hours, open }) => (
              <div key={day} className={styles.scheduleRow}>
                <span className={styles.scheduleDay}>{day}</span>
                <span className={open ? styles.scheduleHours : styles.scheduleClosed}>
                  {hours}
                </span>
              </div>
            ))}
          </div>

          {/* Urgencias */}
          <div className={styles.urgency}>
            <span className={styles.urgencyDot} />
            <div>
              <div className={styles.urgencyTitle}>Urgencias 24/7</div>
              <div className={styles.urgencyDesc}>Disponible por WhatsApp</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Taller GATS — Todos los derechos reservados.</p>
        <p className={styles.bottomRight}>Melipilla, Región Metropolitana</p>
      </div>
    </footer>
  );
};

export default Footer;