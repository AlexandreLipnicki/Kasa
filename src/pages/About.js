import banner from "../img/banner_about.png"
import Dropdown from "../components/Dropdown/Dropdown";

function About() {

  return (
    <main>
      <div className="banner">
        <img src={banner} alt="photo d'un magnifique paysage" />
      </div>
      <div className="dropdown_container">
        <Dropdown title="test" content="test description" />
       </div>
    </main>
  );
}

export default About;