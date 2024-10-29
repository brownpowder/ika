import { IkaDataItem } from '../../types';
import IkaAnimationSection from './IkaAnimationSection';

const IkaSection = (props: any) => {
  return (
    <main id="main">
      <section className="hero"></section>
      <IkaAnimationSection />
      <section className="gridSection ikaSection">
        {props.ikaData.map((value: IkaDataItem, index: number) => {
          // return <Card value={value} key={index.toString()}></Card>;
        })}
      </section>
    </main>
  );
};

export default IkaSection;
