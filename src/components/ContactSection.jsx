import { useState } from 'react';
import { contactDetails } from '../data/siteContent';
import SectionHeader from './SectionHeader';

const initialForm = {
  name: '',
  phone: '',
  message: '',
};

const WHATSAPP_NUMBER = '40756577878';

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Te rugam sa completezi numele.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Te rugam sa completezi telefonul.';
  } else if (!/^[0-9+\s()-]{8,}$/.test(values.phone.trim())) {
    errors.phone = 'Numarul de telefon pare invalid.';
  }

  if (!values.message.trim()) {
    errors.message = 'Scrie cateva detalii despre proiect.';
  }

  return errors;
}

function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const whatsappMessage = `Buna ziua!
As dori mai multe informatii despre lucrarile de constructii.

Nume: ${formData.name.trim()}
Telefon: ${formData.phone.trim()}
Mesaj: ${formData.message.trim()}`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setFormData(initialForm);
    }
  }

  return (
    <section id="contact" className="section pattern-bg architect-grid">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionHeader
            eyebrow="Contact"
            title="Spune-ne ce lucrare ai in plan si revenim cu o discutie clara, aplicata pe serviciile de care ai nevoie."
            description="Oferim consultanta gratuita pentru lucrari de constructii, renovari si amenajari. Contacteaza-ne pentru a discuta proiectul tau si pentru a intelege mai clar etapele potrivite."
          />

          <div className="contact-cards">
            <article className="contact-card">
              <span>Telefon</span>
              <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}>{contactDetails.phone}</a>
            </article>
            <article className="contact-card">
              <span>Email</span>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </article>
            <article className="contact-card">
              <span>Facebook</span>
              <a href={contactDetails.facebook.url} target="_blank" rel="noreferrer">
                {contactDetails.facebook.label}
              </a>
            </article>
            <article className="contact-card">
              <span>Disponibilitate</span>
              <p>{contactDetails.schedule}</p>
            </article>
          </div>

          <p className="contact-note">{contactDetails.location}</p>
        </div>

        <form className="contact-form premium-card" noValidate onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nume</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Numele tau"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name ? <small>{errors.name}</small> : null}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+40 7xx xxx xxx"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone ? <small>{errors.phone}</small> : null}
          </div>

          <div className="form-field">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Descrie pe scurt lucrarea: de exemplu casa la rosu, instalatii, rigips, gresie, fatada sau pavaje."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message ? <small>{errors.message}</small> : null}
          </div>

          <button type="submit" className="button button--accent button--full">
            Trimite mesaj
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
