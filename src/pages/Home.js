import banner from "../img/banner_home.jpg";
import Card from "../components/Card";
import logements from "../data/logements.json";

function Home() {

  return (
    <main>
      <div className="banner">
        <img src={banner} alt="photo d'un magnifique paysage" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div id="gallery">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </main>
  );
}

export default Home;