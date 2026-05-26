import React, { useState } from "react";
import styles from "./Contact.module.css";
//iconos para info de contacto
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

type Form = { 
    nombre: string; 
    email: string; 
    asunto: string; 
    mensaje: string 
};
const INIT: Form = { 
    nombre: "", 
    email: "", 
    asunto: "", 
    mensaje: "" 
};

export const Contact: React.FC = () => {
    const [form, setForm] = useState<Form>(INIT);
    const [sent, setSent] = useState(false);

    const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm(p => ({ ...p, [k]: e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => { setSent(false); setForm(INIT); }, 4000);
    };

    return (
        <section  id="contacto" className={styles.section}>
            <div className={styles.bgGrid} aria-hidden>
                {Array.from({ length: 8 }).map((_, i) => <div key={i} className={styles.bgLine} />)}
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Contáctanos</span>
                    <h2 className={styles.title}>¿TIENES <span>PREGUNTAS?</span></h2>
                    <div className={styles.rule}></div>
                    <p className={styles.subtitle}>E
                        scríbenos y te respondemos en menos de 24 horas hábiles.
                    </p>
                </div>

                <div className={styles.layout}>
                    {/* Formulario */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.group}>
                                <label className={styles.label}>Nombre</label>
                                <input className={styles.input} type="text" placeholder="Tu nombre" value={form.nombre} onChange={set("nombre")} required />
                            </div>
                            <div className={styles.group}>
                                <label className={styles.label}>Correo</label>
                                <input className={styles.input} type="email" placeholder="tu@email.com" value={form.email} onChange={set("email")} required />
                            </div>
                        </div>
                        <div className={styles.group}>
                            <label className={styles.label}>Asunto</label>
                            <select className={styles.input} value={form.asunto} onChange={set("asunto")} required>
                                <option value="">Selecciona un asunto…</option>
                                <option>Consulta de servicio</option>
                                <option>Solicitar cotización</option>
                                <option>Reclamo o garantía</option>
                                <option>Otro</option>
                            </select>
                        </div>

                        <div className={styles.group}>
                            <label className={styles.label}>Mensaje</label>
                            <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Cuéntanos en qué podemos ayudarte…" value={form.mensaje} onChange={set("mensaje")} required />
                        </div>

                        <button className={styles.btn} type="submit" disabled={sent}>
                            {sent ? "✓ Mensaje enviado — Te contactamos pronto" : "ENVIAR MENSAJE →"}
                        </button>
                    </form>

                    {/* Mapa + info */}
                    <div className={styles.side}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoCardTop} />
                            {[
                                { icon: <FaMapMarkerAlt />, label: "Dirección", val: "Av. Principal 123, Melipilla" },
                                { icon: <FaPhoneAlt />, label: "Teléfono", val: "+56 9 1234 5678" },
                                { icon: <FaEnvelope />, label: "Email", val: "contacto@tallergats.cl" },
                                { icon: <FaClock />, label: "Horario", val: "Lun–Vie 08:00–18:00 · Sáb 09:00–14:00" },
                            ].map(item => (
                                <div key={item.label} className={styles.infoRow}>
                                    <span className={styles.infoIcon}>{item.icon}</span>
                                    <div>
                                        <div className={styles.infoLabel}>{item.label}</div>
                                        <div className={styles.infoVal}>{item.val}</div>
                                  </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Mapa placeholder — reemplaza con <iframe> de Google Maps */}
                        <div className={styles.mapPlaceholder}>
                            <span className={styles.mapIcon}><FaMapMarkerAlt /></span>
                            <span className={styles.mapLabel}>Av. Principal 123, Melipilla</span>
                            <span className={styles.mapSub}>Reemplaza con iframe de Google Maps</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Contact;