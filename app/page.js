import  "./page.module.css";
import Hero from './_Components/Hero/Hero'
import Tagline from './_Components/Tagline/Tagline'

export default function Home() {
  return (
    <div className="main">
      <Hero/>
      <Tagline/>
    </div>
  );
}