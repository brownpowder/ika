import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import BlueSkyIcon from '../../assets/images/Bluesky_Icon.svg';
import YoutubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import TikTokIcon from '../accessories/TikTokIcon';

const MenuSection = () => {
  const menu = () => {
    const menuData = [
      {
        url: 'google.com',
        icon: <HomeIcon />,
      },
    ];
    return menuData;
  };

  const snsmenu = () => {
    const menuData = [
      {
        url: '',
        icon: <YoutubeIcon />,
      },
      {
        url: 'https://twitter.com/ikahaikaga2',
        icon: <XIcon />,
      },
      {
        url: 'https://www.instagram.com/ika_1903/',
        icon: <InstagramIcon />,
      },
      {
        url: 'https://www.tiktok.com/@ika.ika557?_t=8pUVwmlJzVw&_r=1',
        icon: <TikTokIcon />,
      },
      {
        url: '',
        icon: <img src={BlueSkyIcon} alt="" id="blueskyIcon" />,
      },
    ];
    return menuData;
  };

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="menuSection">
      <div className="menuSection_home">
        {menu().map((item, index) => {
          return (
            <span
              onClick={() => {
                returnTop();
              }}
              className="menuSection_icon"
              key={index.toString()}
            >
              {item.icon}
            </span>
          );
        })}
      </div>

      <div className="menuSection_sns">
        {snsmenu().map((item, index) => {
          return (
            <a
              href={item.url}
              className="menuSection_icon"
              key={index.toString()}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default MenuSection;
