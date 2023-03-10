import "./banner.scss";

function Banner (props) {
    return (
       <div className="banner" style={{backgroundImage: `url(${props.backgroundImage})`}}>
        {<h1 className="banner_title">{props.titleBanner}</h1>}
       </div>
    )
}

export default Banner