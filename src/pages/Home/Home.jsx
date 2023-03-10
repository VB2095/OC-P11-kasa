import Banner from "../../components/banner/banner"
import "./home.scss"
import Cards from "../../components/cards/cards"

function Home() {
  return (
  <section className="main-container">
      <Banner backgroundImage={require('../../assets/bg_banner_home.jpg')} 
      titleBannerHome="Chez vous, partout et ailleurs"/>
      
      <div className="container-card">
        <Cards />
      </div>
  </section>
)


          
}

export default Home
