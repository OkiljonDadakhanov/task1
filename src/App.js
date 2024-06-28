import Swiper  from "./components/Swiper.tsx";
import Header from "./components/Header";
import Product from "./components/Product";
import CaseStudies from "./components/CaseStudies.jsx";
import Companies from "./components/Companies";
import Customers from "./components/Customers";
import RecentCaseStudies from "./components/RecentCaseStudies";
import BuildingSoftwareCard from "./components/BuildingSoftwareCard";
import DevelopmentApproach from "./components/DevelopmentApproach";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
