import { Link } from 'react-router-dom'

function Card({ logement }) {
    return (
        <Link to={`/logement/${logement.id}`}>
            <div className="card" key={logement.id}>
                <img src={logement.cover} alt={logement.title} />
                <div className="bg_card">
                    <h3>{logement.title}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;