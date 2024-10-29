import IkaAnimationPart from '../parts/IkaAnimationPart';
import Ika1 from '../../assets/images/1@0.5x.png';
import Ika2 from '../../assets/images/2@0.5x.png';
import Ika3 from '../../assets/images/3@0.5x.png';
import Ika4 from '../../assets/images/4@0.5x.png';

type IkaDataItem = {
  title: string;
  image: string;
  text: string;
};

const IkaAnimationSection = () => {
  const ikas: IkaDataItem[] = [
    {
      title: '犬みたいなイカ',
      image: Ika1,
      text: 'イカには擬態能力があります。自身の体の色を変え、周囲の環境に溶け込み、存在をできる限り無へと近づけます。もし周りが危険な犬だらけだったら、イカはこんなふうに擬態するかもしれません。',
    },
    {
      title: 'うっとりしているイカ',
      image: Ika2,
      text: '素敵なイカを見つけたのでしょうか？あるいはあなたに見惚れてうっとりしているのかもしれません。',
    },
    {
      title: '花を持っているイカ',
      image: Ika3,
      text: 'お祝いや、ちょっとしたプレゼントにお花を添えて持っていくと、プレゼント本体の格が上がり「かましてやった」感が出ていいですね。',
    },
    {
      title: 'まるっと同意するイカ',
      image: Ika4,
      text: '同意をするときには腕で大きく丸を作ると、より同意をしているという印象を相手に与えられますね。',
    },
    {
      title: 'スミを吐くイカ',
      image: Ika4,
      text: 'イカはスミを口から吐いていると思っていましたか？そうではありません。イカは',
    },
  ];

  return (
    <section>
      {ikas.map((value: IkaDataItem, index: number) => {
        return (
          <IkaAnimationPart
            title={value.title}
            image={value.image}
            text={value.text}
            ikaNumber={(index + 1).toString()}
          />
        );
      })}
    </section>
  );
};

export default IkaAnimationSection;
