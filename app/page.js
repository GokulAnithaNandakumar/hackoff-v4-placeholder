import styles from "./page.module.css";
import Hero from './_Components/Hero/Hero'
import Tagline from './_Components/Tagline/Tagline'
import Footer from "./_Components/Footer/Footer";
import About from "./_Components/About/About";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero/>
      <Tagline/>
      <Footer/>
      <About/>
    </div>
  );
}