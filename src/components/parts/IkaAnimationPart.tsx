import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../../assets/css/ikaAnimation.css';

type Props = {
  title: string;
  image: string;
  ikaNumber: string;
  text: string;
};

const IkaAnimationPart = (props: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={`horizonta${props.ikaNumber} ika ika${props.ikaNumber}`}>
        <div className={`vertical${props.ikaNumber} ika_imgBackground`}>
          <img
            src={props.image}
            alt=""
            className={`rotate${props.ikaNumber}`}
            onClick={() => {
              setVisible(!visible);
            }}
          />
        </div>
      </div>
      <div className={`fade ${visible ? 'show' : ''} ikaAnimationDesc`}>
        <div className="ikaAnimationDesc_imageBox">
          <img
            src={props.image}
            className="ikaAnimationDesc_imageBox_image"
            alt={props.title}
          />
        </div>
        <h2 className="ikaAnimationDesc_title">{props.title}</h2>

        <p className="ikaAnimationDesc_text">{props.text}</p>

        <a
          href="https://store.line.me/stickershop/product/23534290/ja"
          className="ikaAnimationDesc_lineLink"
        >
          Line Stamp販売中
        </a>

        <button
          onClick={() => setVisible(false)}
          className="ikaAnimationDesc_closeButton"
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
};

export default IkaAnimationPart;
