import { ParticleSection } from '..';
import Hero from '../../assets/images/hero.png';

const BackgroundSection = () => {
  return (
    <section className="background">
      <img src={Hero} alt="" className="background_image" />
      <ParticleSection />
    </section>
  );
};

export default BackgroundSection;
