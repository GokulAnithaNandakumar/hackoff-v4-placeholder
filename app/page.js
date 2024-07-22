import styles from "./page.module.css";
import Hero from './_Components/Hero/Hero'
import Tagline from './_Components/Tagline/Tagline'
import Footer from "./_Components/Footer/Footer";
import About from "./_Components/About/About";
import Faq from "./_Components/Faq/Faq";
import Banner from "./_Components/Banner/Banner";
import Contact from "./_Components/Contact/Contact";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero/>
      <Tagline/>
      <About/>
      <Faq/>
      <Banner/>
      <Contact/>
      <Footer/>
    </div>
  );
}