import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../components/assets/css/style.css';
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import ContactComponent from "../components/ContactComponent";
import AboutComponent from "../components/AboutComponent";
import FooterComponent from "../components/FooterComponent";
import CampaignsComponent from "../components/CampaignsComponent";
import GalleryComponent from "../components/GalleryComponent";
import TeamComponent from "../components/TeamComponent";
import CallToActionComponent from "../components/CallToActionComponent";
import MidiaComponent from "../components/MidiaComponent";



class Home extends Component {
  render() {

    return (
      <div>
          <HeaderComponent />
          <HeroComponent />
          <AboutComponent />
          <CampaignsComponent />
          <CallToActionComponent />
          <GalleryComponent />
          <TeamComponent />
          <MidiaComponent />
          <ContactComponent />
          <FooterComponent />
      </div>
    );
  }
}

export default Home;
