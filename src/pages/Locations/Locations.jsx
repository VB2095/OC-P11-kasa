import { useParams } from "react-router-dom";
import Collapsible from "../../components/collapsible/collapsbile";
import data from "../../data/logements.json";
import "./locations.scss";
import Error from "../../components/404/404";
import Carousel from "../../components/carousel/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Locations() {
  const { id } = useParams(); // récupère l'ID de la location à partir de l'URL
  const location = data.find((loc) => loc.id === id); // récupère la location correspondante à partir du fichier JSON

  if (!location) {
    return <Error />;
  }
  const maxRating = 5; // nombre d'étoiles maximum
  const rating = location.rating; // stocke le rating récupéré depuis le JSON
  const stars = Math.round(rating); // arrondit le rating au nombre entier le plus proche
  const coloredStars = (
    <>
      {Array.from({ length: stars }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="$primary-color" />
      ))}
    </>
  );

  const emptyStars = (
    <>
      {Array.from({ length: maxRating - stars }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="#E3E3E3" />
      ))}
    </>
  );

  const allStars = (
    <>
      {coloredStars}
      {emptyStars}
    </>
  );

  return (
    <div className="location main-container">
        <Carousel images={location.pictures} />
      <div className="info-container">
        <div className="info-left">
          <div>
            <h2>{location.title}</h2>
            <p>{location.location}</p>
          </div>
          <div className="tags-container">
            <div className="tags">
              {location.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="info-right">
          <div>
            <p>{location.host.name}</p>
            <img src={location.host.picture} alt={location.host.name} />
          </div>
          <div className="rating">
            {allStars}
          </div>
        </div>
      </div>

      <div className="location-collapsible_container">
        <Collapsible title="Description" content={location.description} />
        <Collapsible
          title="Équipements"
          content={location.equipments.join(", ")}
        />
      </div>
    </div>
  );
}

export default Locations;
