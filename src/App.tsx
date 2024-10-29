import { IkaSection, Header, Footer, BackgroundSection } from './components';
import IkaData from './assets/data/IkaData';

const App = () => {
  return (
    <>
      <Header />
      <IkaSection ikaData={IkaData} />
      <BackgroundSection />
      <Footer />
    </>
  );
};

export default App;
