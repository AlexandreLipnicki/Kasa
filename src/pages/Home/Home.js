import banner from "../../img/banner_home.jpg";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json";

import "./home.scss";

function Home() {

  return (
    <main>
      <div className="banner">
        <img src={banner} alt="Magnifique paysage" />
        <p>Chez vous, <br className="wrap"/>partout et ailleurs</p>
      </div>
      <div className="gallery">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </main>
  );
}

export default Home;