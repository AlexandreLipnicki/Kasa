import { useState } from 'react';

import "./carrousel.scss";

export default function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index === pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevImage = () => {
    if (index === 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  if (pictures.length === 1) {
    return (
      <div className="carrousel">
        <div className="carrousel_pictures">
          <img src={pictures[0]} alt={`Image ${index + 1}`} />
        </div>
      </div>
    );
  }

  return (
    <div className="carrousel">
      <div className="carrousel_pictures">
        <img src={pictures[index]} alt={`Image ${index + 1}`} />
      </div>
      <div className="carrousel_btn">
        <svg onClick={prevImage} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
        </svg>
        <span>{`${index + 1}/${pictures.length}`}</span>
        <svg onClick={nextImage} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}
