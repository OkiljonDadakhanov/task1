import Swiper  from "./components/Services/Swiper.tsx";
import Header from "./components/Navbar/Header";
import Product from "./components/Hero/Product";
import CaseStudies from "./components/AboutUs/CaseStudies.tsx";
import Companies from "./components/Companies/Companies";
import Customers from "./components/CustomerFeedbacks/Customers";
import RecentCaseStudies from "./components/RecentCaseStudies/RecentCaseStudies";
import BuildingSoftwareCard from "./components/BuildingSoftware/BuildingSoftwareCard";
import DevelopmentApproach from "./components/DevelopmentApproach/DevelopmentApproach";
import TechStack from "./components/TechStack/TechStack";
import AlcalineWorks from "./components/HowItWorks/AlcalineWorks";
import FeaturedResources from "./components/Featured/FeaturedResources";
import HireUs from "./components/Hire/HireUs";
import Footer from './components/Footer/Footer.tsx'
import './styles.css'


function App() {
  return (
    <div>
    <Header />

    <Product />

    <Swiper />
    <CaseStudies /> 

    <Companies />
    <Customers />
    <RecentCaseStudies />
    <BuildingSoftwareCard />
    <DevelopmentApproach />
    <TechStack />
    <AlcalineWorks />
    <FeaturedResources />
    <HireUs />
    <Footer />
    </div>
  );
}

export default App;
