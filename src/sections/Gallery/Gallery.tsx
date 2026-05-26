import React, { useState } from "react";
import styles from "./Gallery.module.css";
//iconos
import { FaCamera } from "react-icons/fa";


/* 
  Reemplaza los src con tus imágenes reales.
  Por ahora usamos placeholders con colores para visualizar el layout.
*/
const PHOTOS = [
    { id: 1, label: "Diagnóstico computarizado", category: "Diagnóstico", color: "#1a1b1e" },
    { id: 2, label: "Cambio de frenos", category: "Frenos", color: "#161618" },
    { id: 3, label: "Motor en reparación", category: "Motor", color: "#1e1f22" },
    { id: 4, label: "Área de trabajo", category: "Taller", color: "#1a1b1e" },
    { id: 5, label: "Sistema eléctrico", category: "Eléctrico", color: "#161618" },
    { id: 6, label: "Alineación y balanceo", category: "Suspensión", color: "#1e1f22" },
    { id: 7, label: "Cambio de aceite", category: "Mantención", color: "#1a1b1e" },
    { id: 8, label: "Equipo técnico", category: "Equipo", color: "#161618" },
];

const CATS  = [
    "Todos", "Diagnóstico", "Frenos", 
    "Motor", "Taller", "Eléctrico", 
    "Suspensión", "Mantención"
];

export const Gallery: React.FC = () => {
    const [active, setActive] = useState("Todos");
    const [lightbox, setLightbox] = useState<number | null>(null);

    const filtered = active === "todos" ? PHOTOS : PHOTOS.filter((p) => p.category === active);

    return (
        <section id="galeria" className={styles.section}>
            <div className={styles.bgGrid} aria-hidden>
                {Array.from({ length: 8 }).map((_, i) => <div key={i} className={styles.bgLine} />)}
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Galería</span>
                    <h2 className={styles.title}>NUESTRO <span>TRABAJO</span></h2>
                    <div className={styles.rule} />
                    <p className={styles.subtitle}>
                        Conoce las instalaciones y el tipo de trabajo que realizamos día a día.
                    </p>
                </div>

                {/* Filtros */}
                <div className={styles.filters}>
                    {CATS.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ""}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {filtered.map((photo) => (
                      <button
                        key={photo.id}
                        className={styles.photoCard}
                        onClick={() => setLightbox(photo.id)}
                        aria-label={`Ver foto: ${photo.label}`}
                    >
                        {/* Placeholder — reemplaza con <img src={photo.src} alt={photo.label} /> */}
                        <div className={styles.photoPlaceholder} style={{ background: photo.color }}>
                          {/* Icono de cámara para indicar que es una foto, reemplaza con la imagen real */}
                          <span className={styles.photoIcon}><FaCamera /></span>
                        </div>
                        <div className={styles.photoOverlay}>
                          <span className={styles.photoLabel}>{photo.label}</span>
                          <span className={styles.photoCat}>{photo.category}</span>
                        </div>
                      </button>
                    ))}
                </div>


                {/* Lightbox simplificado */}
                {lightbox !== null && (
                    <div className={styles.lightbox} onClick={() => setLightbox(null)}>
                        <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
                            {(() => {
                                const photo = PHOTOS.find((p) => p.id === lightbox)!;
                                return (
                                    <>
                                        <div className={styles.lightboxPhoto} style={{ background: photo.color }}>
                                            <span className={styles.lightboxIcon}><FaCamera /></span>
                                        </div>
                                        <div className={styles.lightboxCaption}>
                                            <span className={styles.lightboxLabel}>{photo.label}</span>
                                            <span className={styles.lightboxCat}>{photo.category}</span>
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;