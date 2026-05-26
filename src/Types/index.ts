/* ================================================
   TALLER GATS — Tipos globales
   src/types/index.ts
================================================ */

/* ── Servicios ── */
export interface Service {
  id: number;
  icon: string;           // emoji o ruta a ícono SVG
  title: string;
  description: string;
  features: string[];     // lista de características incluidas
  highlighted?: boolean;  // resaltar la card
}

/* ── Reserva / Agendamiento ── */
export type FuelType    = 'gasolina' | 'diesel' | 'electrico' | 'hibrido';
export type VehicleType = 'auto' | 'camioneta' | 'furgon' | 'moto' | 'otro';
export type TimeSlot    = '08:00' | '09:00' | '10:00' | '11:00' | '12:00'
                        | '14:00' | '15:00' | '16:00' | '17:00' | '18:00';

export interface ReservationForm {
  /* Vehículo */
  vehicleType:  VehicleType;
  brand:        string;
  model:        string;
  year:         string;
  fuelType:     FuelType;
  mileage:      string;
  /* Problema */
  issueType:    string;   // categoría del problema
  description:  string;
  /* Cita */
  date:         string;   // YYYY-MM-DD
  timeSlot:     TimeSlot;
  /* Contacto */
  name:         string;
  phone:        string;
  email:        string;
  notes:        string;
}

export interface ReservationFormErrors
  extends Partial<Record<keyof ReservationForm, string>> {}

/* ── Testimonio ── */
export interface Testimonial {
  id:      number;
  name:    string;
  role:    string;        // ej. "Toyota Corolla 2019"
  avatar:  string;        // iniciales o URL
  rating:  1 | 2 | 3 | 4 | 5;
  text:    string;
  date:    string;
}

/* ── Galería ── */
export type GalleryCategory = 'motor' | 'frenos' | 'suspension' | 'electrico' | 'carroceria' | 'todos';

export interface GalleryItem {
  id:          number;
  src:         string;
  thumb:       string;
  alt:         string;
  category:    GalleryCategory;
  title:       string;
  description?: string;
}

/* ── Sucursal / Contacto ── */
export interface ContactInfo {
  address:    string;
  phone:      string;
  whatsapp:   string;    // número sin formato para wa.me
  email:      string;
  schedule:   ScheduleItem[];
  mapEmbed:   string;    // URL del iframe de Google Maps
}

export interface ScheduleItem {
  days:  string;         // ej. "Lunes – Viernes"
  hours: string;         // ej. "08:00 – 19:00"
  open:  boolean;
}

/* ── Stats del taller ── */
export interface StatItem {
  number: string;
  label:  string;
}

/* ── CTA Banner ── */
export interface CtaData {
  heading:    string;
  subheading: string;
  primaryBtn: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
}