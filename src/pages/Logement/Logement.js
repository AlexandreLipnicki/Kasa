import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Dropdown from '../../components/Dropdown/Dropdown'

import "./logement.scss"

export default function Logement() {
  const { id } = useParams(); // Récupération de l'ID du logement depuis l'URL
  const logement = logements.find((logement) => logement.id === id); // Recherche du logement correspondant dans le fichier JSON
  
  const fullName = logement.host.name;
  const [prenom, nom] = fullName.split(' ');

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < logement.rating) {
      stars.push()
    } else {
      stars.push()
    }}

  if (!logement) {
    return <Navigate to="/NotFound" />;
  }

  return (
    <main>
      <div className="logement">

        {/* élément carrousel */}

        <div className="logement_info">

          <div>
            <h1>{logement.title}</h1>
            <p className="logement_location">{logement.location}</p>
            <div className="logement_tags">
              {logement.tags.map((tag, index) => (
                <p key={index} className="logement_tag">{tag}</p>
              ))}
            </div>
          </div>

          <div className="logement_hostRating">
            <div className="rating">
            {[...Array(5)].map((_, index) => (
              <svg key={index} className={`logement_star ${index < logement.rating ? "filled" : ""}`}  viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.43233 0.45698C7.29777 0.177714 7.01344 0 6.70117 0C6.38891 0 6.10711 0.177714 5.97001 0.45698L4.3376 3.81578L0.691971 4.354C0.387322 4.3997 0.133448 4.61296 0.0395141 4.90492C-0.0544193 5.19688 0.0217428 5.5193 0.240075 5.7351L2.88544 8.35258L2.26091 12.0516C2.21014 12.3562 2.33707 12.666 2.58841 12.8462C2.83975 13.0265 3.17232 13.0493 3.4465 12.9046L6.70371 11.1655L9.96091 12.9046C10.2351 13.0493 10.5677 13.029 10.819 12.8462C11.0703 12.6634 11.1973 12.3562 11.1465 12.0516L10.5194 8.35258L13.1648 5.7351C13.3831 5.5193 13.4618 5.19688 13.3654 4.90492C13.2689 4.61296 13.0176 4.3997 12.7129 4.354L9.06474 3.81578L7.43233 0.45698Z" fill="#E3E3E3"/>
              </svg>
            ))}
            </div>
            <div className="logement_host">
              <p>{prenom}<br/>{nom}</p>
              <img src={logement.host.picture} alt="photo de profil du vendeur" />
            </div>
          </div>
        </div>

        <div className="logement_dropdown">
          <Dropdown title="Description" content={logement.description} />
          <Dropdown title="Équipements" content={logement.equipments} />
        </div>
      </div>
    </main>
  );
}
