import Collapse from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner'
import marketdata from "../../data/aboutData";
import imageBanner from "../../assets/aboutbanner.png"
import './about.scss'

function About() {

    const content = (title) => {
        switch (title) {
          case "fiability":
            return marketdata.fiability;
          case "respect":
            return marketdata.respect;
          case "service":
            return marketdata.service;
          case "sécurity":
            return marketdata.security;
          default:
            console.log("default");
            break;
        }
      };


    return (
        <div className='about'>
            <Banner image={imageBanner} />
            <div className='drop-container'>
                <Collapse title="Fiablilité" content={content("fiability")} />
                <Collapse title="Respect" content={content("respect")} />
                <Collapse title="Service" content={content("service")} />
                <Collapse title="Sécurité" content={content("sécurity")} />
            </div>
        </div>
    )
}

export default About;