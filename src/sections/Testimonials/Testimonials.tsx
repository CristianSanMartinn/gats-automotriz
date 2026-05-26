import { useState } from 'react';
import styles from './Testimonials.module.css';
import { FaStar } from 'react-icons/fa';

const TESTIMONIALS = [
  { name: "Carlos Mendoza",  vehicle: "Toyota Hilux 2020",     rating: 5, text: "Excelente atención. Llevé mi camioneta por un problema eléctrico que en otro taller no encontraban y en Taller GATS lo solucionaron en el día. Muy profesionales.", role: "Cliente frecuente" },
  { name: "María González",  vehicle: "Chevrolet Spark 2018",  rating: 5, text: "Siempre vengo acá para el mantenimiento de mi auto. Los precios son justos, el trabajo es limpio y nunca me han cobrado de más. 100% recomendados.", role: "Cliente frecuente" },
  { name: "Roberto Fuentes", vehicle: "Hyundai Tucson 2019",   rating: 5, text: "Cambié los frenos completos. El trabajo quedó perfecto, me explicaron todo lo que hicieron y el precio fue exactamente el cotizado. Sin sorpresas.", role: "Nuevo cliente" },
  { name: "Ana Pérez",       vehicle: "Kia Rio 2021",          rating: 5, text: "Rapidísimos y muy atentos. Me recibieron sin cita previa por una urgencia y me solucionaron el problema en menos de 2 horas. Los mejores del sector.", role: "Cliente frecuente" },
  { name: "Luis Castillo",   vehicle: "Ford Ranger 2017",      rating: 5, text: "Llevo 4 años trayendo mis vehículos acá. La confianza que me dan es incomparable. Saben lo que hacen y siempre dan garantía por su trabajo.", role: "Cliente VIP" },
  { name: "Sofía Morales",   vehicle: "Nissan Qashqai 2022",   rating: 5, text: "El diagnóstico computarizado fue muy preciso. Detectaron un problema que el concesionario oficial no encontró. Servicio de primer nivel.", role: "Nuevo cliente" },
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const pages   = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(current * perPage, (current + 1) * perPage);

  return (
    <section id="testimonios" className={styles.section}>
      <div className={styles.bgGrid} aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.bgLine} />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Lo que dicen</span>
          <h2 className={styles.title}>CLIENTES <span>SATISFECHOS</span></h2>
          <div className={styles.rule} />
          <p className={styles.subtitle}>
            Más de 3.200 vehículos atendidos y miles de clientes que confían en nosotros.
          </p>
        </div>

        {/* Rating summary */}
        <div className={styles.ratingBar}>
          <div className={styles.ratingScore}>5.0</div>
          <div>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
            </div>
            <div className={styles.ratingLabel}>Basado en +200 reseñas · Google Maps</div>
          </div>
        </div>

        {/* Cards */}
        {/* BUG CORREGIDO: "grind" → "grid" */}
        <div className={styles.grid}>
          {visible.map((t) => (
            <article key={t.name} className={styles.card}>
              <div className={styles.cardTop} />
              <div className={styles.cardStars}>
                {Array.from({ length: t.rating }).map((_, i) => <FaStar key={i} />)}
              </div>
              {/* BUG CORREGIDO: "Text" → "cardText" (clase que existe en el CSS) */}
              <p className={styles.cardText}>"{t.text}"</p>
              <div className={styles.cardFooter}>
                <div className={styles.avatar}>{t.name[0]}</div>
                <div>
                  {/* BUG CORREGIDO: "cadrName" → "cardName" y "cardName" → "cardVehicle" */}
                  <div className={styles.cardName}>{t.name}</div>
                  <div className={styles.cardVehicle}>{t.vehicle}</div>
                </div>
                <span className={styles.roleBadge}>{t.role}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Paginación */}
        {/* BUG CORREGIDO: template literals con comillas simples → backticks */}
        {pages > 1 && (
          <div className={styles.pagination}>
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${current === i ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;