import { useState } from 'react';
import styles from './Reservation.module.css';
//iconos
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const SERVICES = [
    "Diagnóstico computarizado",
    "Cambio de aceite y filtros",
    "Frenos y suspensión",
    "Sistema eléctrico",
    "Mecánica general",
    "Aire acondicionado",
    "Transmisión",
    "Otro (especificar en comentarios)",
];

type FormState = {
    nombre: string;
    telefono: string;
    email: string;
    servicio: string;
    fecha: string;
    hora: string;
    patente: string;
    comentarios: string;
};

const INITIAL: FormState = {
    nombre: "", telefono: "", email: "",
    servicio: "", fecha: "", hora: "",
    patente: "", comentarios: "",
};

export const Reservation: React.FC = () => {
    const [ form, setForm ] = useState<FormState>(INITIAL);
    const [ sent, setSent ] = useState(false);

    const set = (key: keyof FormState) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    )  => setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí conectas con tu backend / emailJS / WhatsApp API
        setSent(true);
        setTimeout(() => { setSent(false); setForm(INITIAL); }, 4000);
    };

    return (
        <section id="reservas" className={styles.section}>
            <div className={styles.bgGrid} aria-hidden>
                {Array.from({ length: 8 }).map((_, i) => <div key={i} className={styles.bgLine} />)}
            </div>


            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Agenda tu hora</span>
                    <h2 className={styles.title}>RESERVA TU <span>VISITA</span></h2>
                    <div className={styles.rule} />
                    <p className={styles.subtitle}>Cuéntanos qué necesita tu vehículo y te confirmamos disponibilidad en menos de 2 horas.</p>
                </div>

                <div className={styles.layout}>
                    {/* Formulario */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Nombre completo</label>
                                <input className={styles.input} type="text" placeholder="Juan Pérez" value={form.nombre} onChange={set("nombre")} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Teléfono</label>
                                <input className={styles.input} type="tel" placeholder="+56 9 1234 5678" value={form.telefono} onChange={set("telefono")} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Correo electrónico</label>
                                <input className={styles.input} type="email" placeholder="tu@email.com" value={form.email} onChange={set("email")} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Patente del vehículo</label>
                                <input className={styles.input} type="text" placeholder="ABCD12" value={form.patente} onChange={set("patente")} required />
                            </div>
                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Servicio requerido</label>
                                <select className={styles.input} value={form.servicio} onChange={set("servicio")} required>
                                    <option value="">Selecciona un servicio…</option>
                                    {SERVICES.map((sv) => <option key={sv} value={sv}>{sv}</option>)}
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Fecha preferida</label>
                                <input className={styles.input} type="date" value={form.fecha} onChange={set("fecha")} required />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Hora preferida</label>
                                <select className={styles.input} value={form.hora} onChange={set("hora")} required>
                                    <option value="">Selecciona hora…</option>
                                    {["08:00","09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"].map(h => (
                                        <option key={h} value={h}>{h} hrs</option>
                                    ))}
                                </select>
                            </div>
                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label className={styles.label}>Comentarios adicionales</label>
                                <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Describe el problema o síntoma de tu vehículo…" value={form.comentarios} onChange={set("comentarios")} />
                            </div>
                        </div>
                            
                        <button className={styles.submitBtn} type="submit" disabled={sent}>
                            {sent ? "✓ Reserva enviada — Te contactamos pronto" : "AGENDAR HORA →"}
                        </button>
                    </form>
                      
                    {/* Info lateral */}
                    <aside className={styles.info}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoCardTop} />
                            <div className={styles.infoTitle}>Información del taller</div>
                            {[
                                { icon: <FaMapMarkerAlt />, label: "Dirección", val: "Av. Principal 123, Melipilla" },
                                { icon: <FaPhoneAlt />, label: "Teléfono", val: "+56 9 1234 5678" },
                                { icon: <FaEnvelope />, label: "Email", val: "contacto@tallergats.cl" },
                            ].map((item) => (
                                <div key={item.label} className={styles.infoRow}>
                                    <span className={styles.infoIcon}>{item.icon}</span>
                                    <div>
                                        <div className={styles.infoLabel}>{item.label}</div>
                                        <div className={styles.infoVal}>{item.val}</div>
                                    </div>
                                </div>
                            ))}

                            <div className={styles.hours}>
                                <div className={styles.hoursTitle}>⏰ Horario de atención</div>
                                <div className={styles.hoursRow}><span>Lunes – Viernes</span><span>08:00 – 18:00</span></div>
                                <div className={styles.hoursRow}><span>Sábado</span><span>09:00 – 14:00</span></div>
                                <div className={styles.hoursRow}><span>Domingo</span><span className={styles.closed}>Cerrado</span></div>
                            </div>
                          
                            <div className={styles.urgency}>
                                <span className={styles.urgencyDot} />
                                <div>
                                    <div className={styles.urgencyTitle}>Servicio de urgencias</div>
                                    <div className={styles.urgencyDesc}>Disponible las 24 hrs vía WhatsApp</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Reservation;