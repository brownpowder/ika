import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import BlueSkyIcon from '../../assets/images/Bluesky_Icon.svg';

const Header = () => {
  const menus = [
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@Ikatomape/shorts',
      icon: <YouTubeIcon fontSize="small" />,
    },
    { name: 'X', url: 'google.com', icon: <XIcon fontSize="small" /> },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ika_1903/profilecard/?igsh=MW9qajdrM2Ftbjhjeg==',
      icon: <InstagramIcon fontSize="small" />,
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/ikahaikaga.bsky.social',
      icon: <img src={BlueSkyIcon} id="blueskyIcon" alt="" />,
    },
  ];
  return (
    <header className="header">
      {menus.map((value: any, index: number) => {
        return (
          <div>
            <a href={value.url} className="header_menu" key={index.toString()}>
              {value.icon}
              <span className="header_menu_name hd">{value.name}</span>
            </a>
          </div>
        );
      })}
    </header>
  );
};

export default Header;
