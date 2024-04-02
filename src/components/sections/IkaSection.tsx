import ika1 from '../../assets/images/1.png';
import ika2 from '../../assets/images/2.png';
import ika3 from '../../assets/images/3.png';
import ika4 from '../../assets/images/4.png';
import ika5 from '../../assets/images/5.png';
import ika6 from '../../assets/images/6.png';
import ika7 from '../../assets/images/7.png';
import ika8 from '../../assets/images/8.png';
import ika9 from '../../assets/images/9.png';
import line from '../../assets/images/line.png';
import SectionTitle from '../modules/SectionTitle';

const lineUrl = {
  first: 'https://store.line.me/stickershop/product/4321302/ja',
  second: 'https://store.line.me/stickershop/product/4949418/ja',
  polite: 'https://store.line.me/stickershop/product/23127289/ja',
  onomatopoeia: 'https://store.line.me/stickershop/product/23534290/ja',
};

const Data = () => {
  const sectionData = [
    {
      subTitle: 'イヌ',
      img: ika1,
      url: lineUrl.onomatopoeia,
    },
    {
      subTitle: 'うっとり',
      img: ika2,
      url: lineUrl.onomatopoeia,
    },
    {
      subTitle: '花',
      img: ika3,
      url: lineUrl.polite,
    },
    {
      subTitle: 'まる',
      img: ika4,
      url: lineUrl.polite,
    },
    {
      subTitle: 'ひよこ',
      img: ika5,
      url: lineUrl.onomatopoeia,
    },
    {
      subTitle: '愛',
      img: ika6,
      url: lineUrl.second,
    },
    {
      subTitle: '怖っ',
      img: ika7,
      url: lineUrl.second,
    },
    {
      subTitle: 'ひま〜',
      img: ika8,
      url: lineUrl.second,
    },
    {
      subTitle: 'ぶー',
      img: ika9,
      url: lineUrl.first,
    },
  ];
  return sectionData;
};

const IkaSection = () => {
  return (
    <>
      {Data().map((item, index) => {
        return (
          <section className="section" key={index.toString()}>
            <SectionTitle title="イカ" subTitle={item.subTitle} />
            <img src={item.img} alt="" className="section_mainImg" />
            <a
              href={item.url}
              target="_blank"
              className="section_line"
              rel="noreferrer"
            >
              <p className="section_line_text">Line Stamp</p>
              <img src={line} alt="" className="section_line_icon" />
            </a>
            <div>test</div>
          </section>
        );
      })}
    </>
  );
};

export default IkaSection;
