
import data from '../../data/logements.json';
function Cards () {
    return (
        <div className="cards">
            {data.map((location) => (
                <div className="card" style={{backgroundImage: `url(${location.cover})`}}>
                    <h2>{location.title}</h2>
                </div>
            ))}
        </div>
    );
}
export default Cards;

