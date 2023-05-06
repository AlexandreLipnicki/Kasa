import banner from "../img/IMG.jpg"

function Home() {

  return (
    <main>
      <div className="banner">
        <img src={banner} alt="photo d'un magnifique paysage" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </main>
  );
}

export default Home;