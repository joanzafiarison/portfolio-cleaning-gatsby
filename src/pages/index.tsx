import * as React from "react"
import {
  Sparkles,
  ShieldCheck,
  Clock3,
  Building2,
  Home,
  Warehouse,
  Phone,
  Mail,
} from "lucide-react";
import { FaStar, FaBeer } from "react-icons/fa";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";


import './../styles/styles.scss';
import bg_image from "./../images/aspirateur_maison.png";
import icon from "./../images/icon.png";

const GreetPage: React.FC<PageProps> = () => {
  return (
    <main className="">
      <Header />
      {/* HERO */}

      <section >
        <div id="hero" style={{ backgroundImage: `url(${bg_image})` }}>

          <div className="hero-text-block">

            <h1 className="hero-title">
              Un nettoyage impeccable
              <br />
              pour votre maison ou votre entreprise.
            </h1>

            <p className="">
              Nettoyage régulier, fin de chantier, bureaux, copropriétés,
              vitreries et désinfection. Intervention rapide avec devis gratuit.
            </p>

            <div className="">
              <a
                href="#contact"
                className=""
              >
                <button className="button-cta">
                  Demander un devis
                </button>
              </a>

              <button className="">
                Nos services
              </button>
            </div>
          </div>
          <div className="hero-testimonials">
              <div className="hero-testimonial-block">
                <div className="hero-testimonial-images">
                  <div className="hero-testimonial-image">
                    <img src={icon} alt="Testimonial" />
                  </div>
                  <div className="hero-testimonial-image">
                    <img src={icon} alt="Testimonial" />
                  </div>
                  <div className="hero-testimonial-image">
                    <img src={icon} alt="Testimonial" />
                  </div>
                </div>
                <div className="hero-testimonial-rating">
                  <p className="hero-testimonial-note">
                    4.9/5 
                  </p>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            <div className="hero-testimonial-block">
              <p className="hero-testimonial-text">basé sur 100 avis</p>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="">

        <h2 className="text-center text-4xl font-bold">
          Nos prestations
        </h2>

        <div className="container">

          <ServiceCard
            icon={<Home size={42} />}
            title="Nettoyage résidentiel"
            description="Maisons, appartements, locations saisonnières."
          />

          <ServiceCard
            icon={<Building2 size={42} />}
            title="Bureaux"
            description="Entretien quotidien ou hebdomadaire de vos locaux."
          />


        </div>

      </section>

      {/* AVANTAGES */}

      <section className="">

        <div className="container">

          <Feature
            icon={<Sparkles />}
            title="Résultat impeccable"
            text="Des équipes expérimentées et du matériel professionnel."
          />

          <Feature
            icon={<ShieldCheck />}
            title="Entreprise assurée"
            text="Interventions sécurisées avec assurance professionnelle."
          />

          <Feature
            icon={<Clock3 />}
            title="Intervention rapide"
            text="Devis sous 24h et intervention selon vos disponibilités."
          />

        </div>

      </section>

      {/* CHIFFRES */}

      <section className="">

        <div className="container">

          <Stat value="2500+" label="Clients satisfaits" />
          <Stat value="98%" label="Clients fidèles" />
          <Stat value="12" label="Années d'expérience" />
          <Stat value="24h" label="Réponse moyenne" />

        </div>

      </section>

      {/* AVIS */}

      <section className="">

        <h2 className="">
            Ils nous font confiance
          </h2>

        <div className="container">

          

          <div className="">

            <Testimonial
              name="Marie D."
              text="Entreprise très sérieuse, travail impeccable."
            />

            <Testimonial
              name="Entreprise Nova"
              text="Nos bureaux sont entretenus chaque semaine avec beaucoup de professionnalisme."
            />

            <Testimonial
              name="Julien R."
              text="Très réactifs après notre chantier. Je recommande."
            />

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className=""
      >

        <div className="">

          <h2 className="">
            Demandez votre devis gratuit
          </h2>

          <p className="">
            Nous vous répondons généralement en moins de 24 heures.
          </p>

          <form className="">

            <input
              className=""
              placeholder="Nom"
            />

            <input
              className=""
              placeholder="Entreprise (optionnel)"
            />

            <input
              className=""
              placeholder="Téléphone"
            />

            <input
              type="email"
              className=""
              placeholder="Adresse email"
            />

            <select className="">
              <option>Type de prestation</option>
              <option>Maison</option>
              <option>Bureau</option>
              <option>Fin de chantier</option>
              <option>Vitres</option>
            </select>

            <textarea
              rows={5}
              className=""
              placeholder="Décrivez votre besoin..."
            />

            <button
              className=""
            >
              Envoyer ma demande
            </button>

          </form>

          <div className="">

            <div className="">
              <Phone size={18} />
              01 23 45 67 89
            </div>

            <div className="">
              <Mail size={18} />
              contact@entreprise.fr
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ServiceCard({ icon, title, description }: CardProps) {
  return (
    <div className="">
      <div className="">{icon}</div>
      <h3 className="">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="">
      <div className="">{icon}</div>
      <h3 className="">{title}</h3>
      <p className="">{text}</p>
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="">{value}</div>
      <div className="">{label}</div>
    </div>
  );
}

function Testimonial({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <div className="">
      <div className="">★★★★★</div>
      <p className="italic">"{text}"</p>
      <div className="">{name}</div>
    </div>
  );
}


export default GreetPage

export const Head: HeadFC = () => <title>Home Page</title>
