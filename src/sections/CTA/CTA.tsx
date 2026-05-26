import React from "react";
import styles from "./CTA.module.css";
import { FaWhatsapp, FaArrowRight  } from "react-icons/fa";

export const CTA: React.FC = () => {
    return (
        <section className={styles.section} id="cta">

            <div className={styles.glow} aria-hidden />
            <div className={styles.container}>

                {/* BUG CORREGIDO: signos de interrogación al revés y <samp> → <span> */}
                <span className={styles.eyebrow}>¿Listo para empezar?</span>

                <h2 className={styles.title}>
                    TU VEHÍCULO MERECE <br />
                    LO <span>MEJOR</span>
                </h2>

                <p className={styles.desc}>
                    Agenda tu hora hoy y descubre por qué somos el taller de confianza
                    de Melipilla. Diagnóstico gratuito en tu primera visita.
                </p>

                <div className={styles.actions}>
                    <a href="#reservas" className={styles.btnPrimary}>
                      AGENDAR HORA <FaArrowRight />
                    </a>
                    <a
                      href="https://wa.me/56912345678"
                      className={styles.btnGhost}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp /> ESCRIBIR POR WHATSAPP
                    </a>
                </div>

                <div className={styles.badges}>
                    <div className={styles.badge}><span className={styles.badgeDot} />Garantía en cada trabajo</div>
                    <div className={styles.badge}><span className={styles.badgeDot} />Cotización gratuita</div>
                    <div className={styles.badge}><span className={styles.badgeDot} />Urgencias 24/7</div>
                </div>

            </div>
        </section>
    );
};

export default CTA;