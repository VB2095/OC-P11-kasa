import Banner from "../components/banner/banner"

function About() {
    return (
        <section className="main-container">
            <Banner backgroundImage={require('../assets/bg_banner_about.jpg')}   
      />
        </section>
    );
}

export default About;