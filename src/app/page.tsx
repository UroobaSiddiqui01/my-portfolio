import HeroSection from './components/HeroSection';
import AboutSection from '@/app/components/about';
import Services from '@/app/components/service';
import Contact from '@/app/components/contact';
import Portfolio from '@/app/components/Portfolio';
import Footer from './components/footer'; 


const Home = () => {

return(
    <main >
      <HeroSection/>
      <AboutSection/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  
  );
};

export default Home;