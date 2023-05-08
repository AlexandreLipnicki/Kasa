import { Link } from 'react-router-dom'

import "./error404.scss"

function Error404() {

  return (
    <main>
      <div className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to={`/`}>
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  );
}

export default Error404;