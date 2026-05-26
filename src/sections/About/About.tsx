import React from "react";
import styles from "./About.module.css";
import { FaTools, FaHandshake, FaDollarSign, FaBolt } from "react-icons/fa";

const STATS = [
  { num: "15+",    label: "Años de experiencia" },
  { num: "3.200+", label: "Vehículos atendidos" },
  { num: "98%",    label: "Clientes satisfechos" },
  { num: "12",     label: "Técnicos certificados" },
];

const VALUES = [

    {
      icon: <FaTools />,
      title: "Técnicos certificados",
      desc: "Todo nuestro equipo tiene formación técnica acreditada y capacitación continua.",
    },
    {
      icon: <FaHandshake />,
      title: "Garantía en cada trabajo",
      desc: "Garantizamos todos nuestros servicios. Si algo falla, vuelve sin costo.",
    },
    {
      icon: <FaDollarSign />,
      title: "Precios transparentes",
      desc: "Cotización gratuita antes de cualquier trabajo. Sin sorpresas en la cuenta final.",
    },
    {
      icon: <FaBolt />,
      title: "Urgencias disponibles",
      desc: "Servicio de urgencias para que no te quedes varado en ningún momento.",
    },
];

export const About: React.FC = () => {
    return (
        <section id="el-taller" className={styles.section}>
            <div className={styles.container}>

                {/* ── Columna texto ── */}
                <div className={styles.textCol}>
                    <span className={styles.eyebrow}>Sobre GATS Taller Automotriz</span>

                    <h2 className={styles.title}>
                      MECÁNICA DE <span>CONFIANZA</span><br />
                      DESDE 2009
                    </h2>
                    <div className={styles.rule} />

                    {/* Presentación personal */}
                    <div className={styles.founderBox}>
                        <div className={styles.founderAvatar}>G</div>
                        <div>
                            <div className={styles.founderName}>Gonzalo Andrés Tapia Salazar</div>
                            <div className={styles.founderRole}>Fundador · GATS Taller Automotriz</div>
                        </div>
                    </div>

                    <p className={styles.desc}>
                      Hola, soy <strong>Gonzalo Andrés Tapia Salazar</strong>, fundador de GATS Taller
                      Automotriz. Cuento con más de 15 años de experiencia en mantenimiento, diagnóstico
                      y reparación automotriz, trabajando con compromiso, responsabilidad y atención
                      personalizada para cada cliente.
                    </p>
                    <p className={styles.desc}>
                      GATS nació del esfuerzo, la dedicación y el trabajo constante, construyendo este
                      taller desde cero con el objetivo de entregar un servicio confiable, transparente
                      y de calidad.
                    </p>
                    <p className={styles.desc}>
                      Nos especializamos en mecánica general, diagnóstico electrónico, frenos,
                      suspensión, mantenciones preventivas y reparación de vehículos, siempre
                      utilizando herramientas y procedimientos profesionales.{" "}
                      <strong>
                        Nuestro compromiso es que cada cliente pueda sentirse seguro y tranquilo
                        al confiar su vehículo en nuestras manos.
                      </strong>
                    </p>

                    {/* Valores */}
                    <div className={styles.valuesList}>
                      {VALUES.map((v) => (
                        <div key={v.title} className={styles.valueItem}>
                          <div className={styles.valueIcon}>{v.icon}</div>
                          <div>
                            <div className={styles.valueTitle}>{v.title}</div>
                            <div className={styles.valueDesc}>{v.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
                  
                {/* ── Columna visual ── */}
                <div className={styles.visualCol}>
                  <div className={styles.statsCard}>
                    <div className={styles.statsCardTop} />
                  
                    {/* HUD header */}
                    <div className={styles.hudRow}>
                      <div className={styles.hudDotYellow} />
                      <div className={styles.hudDot} />
                      <div className={styles.hudDot} />
                      <span className={styles.hudLabel}>GATS TALLER — DATOS</span>
                    </div>
                  
                    {/* Stats grid */}
                    <div className={styles.statsGrid}>
                      {STATS.map((st) => (
                        <div key={st.label} className={styles.statBox}>
                          <div className={styles.statNum}>{st.num}</div>
                          <div className={styles.statLabel}>{st.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Separador */}
                    <div className={styles.cardDivider} />
                    
                    {/* Especialidades */}
                    <div className={styles.specTitle}>Especialidades</div>
                    <div className={styles.specList}>
                      {[
                        "Mecánica General",
                        "Diagnóstico Electrónico",
                        "Frenos y Suspensión",
                        "Mantención Preventiva",
                        "Reparación de Motor",
                        "Urgencias",
                      ].map((s) => (
                        <span key={s} className={styles.specTag}>{s}</span>
                      ))}
                    </div>
                    
                    {/* Badge certificado */}
                    <div className={styles.certBadge}>
                      <span className={styles.certDot} />
                      TALLER CERTIFICADO · MELIPILLA
                    </div>
                  </div>
                </div>
                  
            </div>
        </section>
    );
};

export default About;