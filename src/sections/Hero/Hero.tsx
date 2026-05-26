import React from "react";
import styles from "./Hero.module.css";

const STATS = [
  { number: "15+",    label: "Años de experiencia" },
  { number: "3.000+", label: "Vehículos reparados" },
  { number: "100%",   label: "Garantía en trabajos" },
  { number: "24h",    label: "Respuesta urgencias" },
];

const BADGES = ["Frenos", "Motor", "Suspensión", "Diagnóstico", "Transmisión", "Eléctrico"];

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="inicio" aria-label="Portada Taller GATS">
      {/* Textura líneas industriales */}
      <div className={styles.bgTexture} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.bgLine} />
        ))}
      </div>

      {/* Acento diagonal */}
      <div className={styles.diagonalAccent} aria-hidden="true" />

      <div className={styles.container}>
        {/* Columna texto */}
        <div className={styles.textCol}>
          <div className={styles.tagRow}>
            <span className={styles.tag}>
              <span className={styles.tagDot} />
              Taller certificado — Melipilla
            </span>
          </div>

          <h1 className={styles.heading}>
            <span className={styles.headingTop}>MECÁNICA</span>
            <span className={styles.headingAccent}>PROFESIONAL</span>
            <span className={styles.headingBottom}>QUE FUNCIONA</span>
          </h1>

          <p className={styles.desc}>
            En Taller GATS diagnosticamos, reparamos y mantenemos tu vehículo
            con técnicos certificados y repuestos de primera calidad.
            <strong> Tu tranquilidad en la ruta es nuestra prioridad.</strong>
          </p>

          <div className={styles.badgeRow} aria-label="Especialidades">
            {BADGES.map((b) => (
              <span key={b} className={styles.serviceBadge}>{b}</span>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <a href="#reservas" className={styles.ctaPrimary}>
              Agendar Hora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#servicios" className={styles.ctaSecondary}>
              Ver Servicios
            </a>
          </div>
        </div>

        {/* Columna visual HUD */}
        <div className={styles.visualCol} aria-hidden="true">
          <div className={styles.visualCard}>
            <div className={styles.hudHeader}>
              <div className={styles.hudDot} />
              <div className={styles.hudDot} />
              <div className={styles.hudDot} />
              <span className={styles.hudLabel}>SISTEMA DE DIAGNÓSTICO</span>
            </div>

            <div className={styles.gaugeWrap}>
              <svg className={styles.gaugeSvg} viewBox="0 0 220 200">
                <path d="M 30 155 A 80 80 0 1 1 190 155"
                  fill="none" stroke="#222" strokeWidth="14" strokeLinecap="round"/>
                <path d="M 30 155 A 80 80 0 1 1 190 155"
                  fill="none" stroke="#f5c518" strokeWidth="14" strokeLinecap="round"
                  strokeDasharray="340" strokeDashoffset="95"
                  className={styles.gaugeArc}/>
                <line x1="110" y1="105" x2="110" y2="48"
                  stroke="#f5c518" strokeWidth="3" strokeLinecap="round"
                  className={styles.gaugeNeedle}/>
                <circle cx="110" cy="105" r="9" fill="#f5c518"/>
                <circle cx="110" cy="105" r="4.5" fill="#111"/>
                <text x="110" y="145" textAnchor="middle"
                  fill="#f5c518" fontSize="20" fontFamily="Oswald,Impact,sans-serif"
                  fontWeight="700" letterSpacing="3">GATS</text>
                <text x="110" y="162" textAnchor="middle"
                  fill="#444" fontSize="9" fontFamily="sans-serif" letterSpacing="3">DIAGNÓSTICO</text>
              </svg>
            </div>

            <div className={styles.chipRow}>
              {[
                { label: "Motor",      ok: true  },
                { label: "Frenos",     ok: true  },
                { label: "Batería",    ok: true  },
                { label: "Suspensión", ok: false },
              ].map(({ label, ok }) => (
                <div key={label} className={`${styles.chip} ${ok ? styles.chipOk : styles.chipWarn}`}>
                  <span className={styles.chipDot} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barra de stats */}
      <div className={styles.statsBar}>
        {STATS.map(({ number, label }) => (
          <div key={label} className={styles.statItem}>
            <span className={styles.statNumber}>{number}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;