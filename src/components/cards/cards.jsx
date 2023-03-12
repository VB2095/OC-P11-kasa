
import data from '../../data/logements.json';
import { Link } from 'react-router-dom';
import './cards.scss';
function Cards () {
    return (
        <div className="cards" >
            {data.map((location) => (
                <Link to={`/location/${location.id}`} key={location.id} >
                <div key={location.id} className="card" style={{backgroundImage: `url(${location.cover})`}}>
                    <h2>{location.title}</h2>
                </div>
                </Link>
            ))}
        </div>
    );
}
export default Cards;

