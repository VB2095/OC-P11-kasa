import Banner from "../../components/banner/banner"

function Home() {
  return (
  <section className="main-container">
      <Banner backgroundImage={require('../../assets/bg_banner_home.jpg')} 
      titleBannerHome="Chez vous, partout et ailleurs"
      />
  </section>
)


          
}

export default Home
