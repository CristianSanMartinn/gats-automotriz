import React from "react";
import styles from "./Services.module.css"
import { FaCar, FaTools, FaOilCan, FaBatteryFull } from "react-icons/fa";


const SERVICES = [
    {
        icon: <FaCar />,
        title: "Mecánica General",
        description: "Diagnóstico, reparación y mantención de motor, transmisión y sistema de escape",
        tags: ["motor", "transmisión", "Escape"],
    },
    {
        icon: <FaTools />,
        title: "Frenos & Suspensión",
        description: "Cambio de pastillas, discos, amortiguadores y alineación de dirección.",
        tags: ["Frenos", "Discos", "Amortiguadores"],
    },
    {
        icon: <FaOilCan />,
        title: "Sistema Eléctrico",
        description: "Diagnóstico computarizado, batería, alternador, partida y cableado.",
        tags: ["Batería", "Alternador", "Diagnóstico"],
    },
    {
        icon: <FaBatteryFull />,
        title: "Diagnóstico Computarizado",
        description: "Scanner OBD2 para lectura de códigos de falla y análisis técnico preciso.",
        tags: ["OBD2", "Scanner", "Fallas"],
    },
    {
        icon: <FaTools />,
        title: "Mantención Preventiva",
        description: "Cambio de aceite, filtros, bujías y revisión completa de fluidos.",
        tags: ["Aceite", "Filtros", "Bujías"],
    },
    {
        icon: <FaCar />,
        title: "Aire Acondicionado",
        description: "Carga de gas, reparación de compresor y revisión del sistema de climatización.",
        tags: ["Gas", "Compresor", "Climatización"],
    },
];

export const Services: React.FC = () => {
    return (
        <section id="servicios" className={styles.section}>
            {/**Lineas de fondo */}
            <div className={styles.bgGrid} aria-hidden>
                {Array.from({ length:8 }).map((_, i) => (
                    <div key={i} className={styles.bgLine}></div>
                ))}
            </div>

            <div className={styles.container}>
                {/**Titulo de servicios */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Lo que hacemos</span>

                    <h2 className={styles.title}> NUESTROS <span>SERVICIOS</span></h2>
                    <div className={styles.rule} />
                    
                    <p className={styles.subtitle}>
                      Técnicos certificados, repuestos de primera calidad y garantía en cada trabajo.
                      Tu vehículo en las mejores manos.
                    </p>
                </div>

                <div className={styles.grid}>
                    {SERVICES.map((srv) => (
                        <article key={srv.title} className={styles.card}>
                            <div className={styles.cardAccent}></div>

                            <div className={styles.cardIcon}>{srv.icon}</div>
                            <h3 className={styles.cardTitle}>{srv.title}</h3>

                            <p className={styles.cardDesc}>{srv.description}</p>

                            <div className={styles.cardTags}>
                                {srv.tags.map((t) => (
                                <   span key={t} className={styles.tag}>{t}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};