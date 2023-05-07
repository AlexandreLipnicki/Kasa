import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";

function Logement() {
  const { id } = useParams(); // Récupération de l'ID du logement depuis l'URL
  const logement = logements.find((logement) => logement.id === id); // Recherche du logement correspondant dans le fichier JSON
  
  if (!logement) {
    return <Navigate to="/NotFound" />;
  }

  

  return (
    <main>
      <div className="carrousel">
        <div>

        </div>
      </div>
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <p>{logement.rating} étoiles</p>
    </main>
  );
}

export default Logement;
