import * as React from "react";

const FORM_NAME = "devis";

const SERVICE_TYPES = ["Maison", "Bureau", "Fin de chantier", "Vitres"];

type FormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const encode = (data: Record<string, string>) =>
  new URLSearchParams(data).toString();

const ContactForm: React.FC = () => {
  const [values, setValues] = React.useState<FormValues>(initialValues);
  const [botField, setBotField] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": FORM_NAME,
          "bot-field": botField,
          ...values,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form
      id="devis"
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

      <p className="form-honeypot">
        <label htmlFor="bot-field">
          Ne pas remplir ce champ
          <input
            id="bot-field"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
          />
        </label>
      </p>

      <div className="formgroup">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-input"
          placeholder="Nom"
          autoComplete="name"
          required
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div className="formgroup">
        <label htmlFor="company" className="form-label">
          Entreprise (optionnel)
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="form-input"
          placeholder="Entreprise (optionnel)"
          autoComplete="organization"
          value={values.company}
          onChange={handleChange}
        />
      </div>

      <div className="formgroup">
        <label htmlFor="phone" className="form-label">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="form-input"
          placeholder="Téléphone"
          autoComplete="tel"
          required
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <div className="formgroup">
        <label htmlFor="email" className="form-label">
          Adresse email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="Adresse email"
          autoComplete="email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div className="formgroup">
        <label htmlFor="service" className="form-label">
          Type de prestation
        </label>
        <select
          id="service"
          name="service"
          className="form-input"
          required
          value={values.service}
          onChange={handleChange}
        >
          <option value="" disabled>
            Choisissez une prestation
          </option>
          {SERVICE_TYPES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="formgroup">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          className="form-input"
          placeholder="Décrivez votre besoin..."
          required
          value={values.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="button-cta" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="form-message form-message--success">
            Merci ! Votre demande de devis a bien été envoyée. Nous vous
            répondons sous 24 heures.
          </p>
        )}
        {status === "error" && (
          <p className="form-message form-message--error" role="alert">
            Une erreur est survenue lors de l'envoi. Veuillez réessayer ou
            nous contacter par téléphone.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
