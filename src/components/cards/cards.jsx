
import data from '../../data/logements.json';
import './cards.scss';
function Cards () {
    return (
        <div className="cards" >
            {data.map((location) => (
                <div key={location.id} className="card" style={{backgroundImage: `url(${location.cover})`}}>
                    <h2>{location.title}</h2>
                </div>
            ))}
        </div>
    );
}
export default Cards;

