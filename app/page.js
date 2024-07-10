import styles from "./page.module.css";
import Hero from './_Components/Hero/Hero'
import Tagline from './_Components/Tagline/Tagline'
import Footer from "./_Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Tagline/>
      <Footer/>
    </>
  );
}