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
            description="Oferim consultanta gratuita pentru lucrari de constructii, renovari si amenajari in Suceava, Botosani si in localitati apropiate. Contacteaza-ne pentru a discuta proiectul tau si pentru a intelege mai clar etapele potrivite."
          />

          <div className="contact-cards">
            {contactDetails.cards.map((card) => (
              <article key={card.title} className="contact-card">
                <span>{card.title}</span>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noreferrer' : undefined}
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="contact-card__value">{card.value}</p>
                )}
                <p className="contact-card__meta">{card.helper}</p>
              </article>
            ))}
          </div>

          <div className="contact-note">
            <strong>Informatii utile</strong>
            <ul className="contact-info-list">
              {contactDetails.infoItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <form className="contact-form premium-card" noValidate onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nume</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Numele tau"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name ? <small>{errors.name}</small> : null}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+40 7xx xxx xxx"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={errors.phone ? 'true' : 'false'}
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
              aria-invalid={errors.message ? 'true' : 'false'}
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
