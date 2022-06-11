import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { faHome, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWraper } from '~/components/Popper';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const accountrmd = [
  {
    id: 1,
    first_name: '💃 Nightlife',
    last_name: 'Girl 💃',
    full_name: '💃 Nightlife Girl 💃',
    nickname: 'nightlifegirl',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/1/6273950c4889b.jpg',
    bio: 'Quẩy lên :)',
    tick: false,
    followings_count: 0,
    followers_count: 0,
    likes_count: 0,
    website_url: 'https://fullstack.edu.vn/',
    facebook_url: '',
    youtube_url: '',
    twitter_url: '',
    instagram_url: '',
    created_at: '2022-05-05 15:34:44',
    updated_at: '2022-05-05 16:12:44',
  },
  {
    id: 3,
    first_name: 'Đinh',
    last_name: 'Trang Thảo',
    full_name: 'Đinh Trang Thảo',
    nickname: 'dinhtrangthao03',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/3/6273956f53b19.jpg',
    bio: 'IB FOR JOB ✉ IG: trangthao_2003\nFb: Đinh Trang Thảo',
    tick: false,
    followings_count: 0,
    followers_count: 0,
    likes_count: 0,
    website_url: 'https://fullstack.edu.vn/',
    facebook_url: '',
    youtube_url: '',
    twitter_url: '',
    instagram_url: '',
    created_at: '2022-05-05 16:13:28',
    updated_at: '2022-05-05 16:14:23',
  },
  {
    id: 5,
    first_name: 'CiiN',
    last_name: 'NN',
    full_name: 'CiiN NN',
    nickname: 'cciinnn',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/5/62739690f19f3.jpg',
    bio: 'KOLs/Dancer - BNdanceteam\nFB: Bùi Thảo Ly (Sịn) - IG: l.ciin\n👇🏻MONEY COVER👇🏻',
    tick: false,
    followings_count: 0,
    followers_count: 0,
    likes_count: 0,
    website_url: 'https://fullstack.edu.vn/',
    facebook_url: '',
    youtube_url: '',
    twitter_url: '',
    instagram_url: '',
    created_at: '2022-05-05 16:17:39',
    updated_at: '2022-05-05 16:19:13',
  },
  {
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    bio: '✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !',
    created_at: '2022-05-05 16:10:05',
    facebook_url: '',
    first_name: 'Đào Lê',
    followers_count: 0,
    followings_count: 0,
    full_name: 'Đào Lê Phương Hoa',
    id: 2,
    instagram_url: '',
    last_name: 'Phương Hoa',
    likes_count: 0,
    nickname: 'hoaahanassii',
    tick: true,
    twitter_url: '',
    updated_at: '2022-05-05 16:11:39',
    website_url: 'https://fullstack.edu.vn/',
    youtube_url: '',
  },
  {
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    bio: '“Cùng lan toả năng lượng tích cực nhé”\n💓\n✨duboshop✨\n📩lebongofficial@gmail.com',
    created_at: '2022-05-05 16:14:57',
    facebook_url: '',
    first_name: 'Le',
    followers_count: 0,
    followings_count: 0,
    full_name: 'Le Bong',
    id: 4,
    instagram_url: '',
    last_name: 'Bong',
    likes_count: 0,
    nickname: 'lebong95',
    tick: false,
    twitter_url: '',
    updated_at: '2022-05-05 16:15:53',
    website_url: 'https://fullstack.edu.vn/',
    youtube_url: '',
  },
  {
    id: 6,
    first_name: '☘️Trà',
    last_name: 'Đặng☘️',
    full_name: '☘️Trà Đặng☘️',
    nickname: 'tra.dang.904',
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/a5e13442506a51d1744827a17cc829ac~c5_100x100.jpeg?x-expires=1654945200&x-signature=o0x0g7pWNoZXWp54ht%2BxiYu%2BJao%3D',
    bio: 'Quẩy lên :)',
    tick: false,
    followings_count: 0,
    followers_count: 0,
    likes_count: 0,
    website_url: 'https://fullstack.edu.vn/',
    facebook_url: '',
    youtube_url: '',
    twitter_url: '',
    instagram_url: '',
    created_at: '2022-05-05 15:34:44',
    updated_at: '2022-05-05 16:12:44',
  },
];
const types = [
  {
    tab: 'home',
    url: '/TopTopProject/',
    title: 'Dành cho bạn',
    icon: faHome,
  },
  {
    tab: 'following',
    url: '/TopTopProject/following',
    title: 'Đang follow',
    icon: faUserGroup,
  },
  {
    tab: 'live',
    url: '/TopTopProject/live',
    title: 'Live',
    icon: faVideo,
  },
];
function Sidebar() {
  const [showall, setShowAll] = useState(false);
  const [typesidebar, setTypesidebar] = useState('home');
  const handleShowall = () => {
    setShowAll(!showall);
  };

  return (
    <aside className={cx('wrapper')}>
      <div className={cx('sidebarmain')}>
        <PopperWraper>
          {types.map((type) => (
            <Link to={type.url} key={type.tab} onClick={(e) => setTypesidebar(type.tab)}>
              <MenuItem active={type.tab === typesidebar}>
                <FontAwesomeIcon icon={type.icon} style={{ marginRight: 10 }} />
                <span>
                  <h3>{type.title}</h3>
                </span>
              </MenuItem>
            </Link>
          ))}
        </PopperWraper>
      </div>

      <div className={cx('sidebarsignin')}>
        <p>
          <span className={cx('title')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</span>
        </p>
        <Button outline large>
          Đăng nhập
        </Button>
      </div>
      <div className={cx('sidebaraccrecommend')}>
        <h4 className={cx('sidebar-title')}>Tài khoản được đề xuất</h4>
        {
          // eslint-disable-next-line
          accountrmd.map((account, index) => {
            if (index < 5) {
              return <AccountItem key={account.id} data={account}></AccountItem>;
            } else {
              if (showall) {
                return <AccountItem key={account.id} data={account}></AccountItem>;
              }
            }
          })
        }
        <button className={cx('showall')} onClick={handleShowall}>
          {showall ? 'Ẩn bớt' : 'Xem tất cả'}
        </button>
      </div>

      <div className={cx('sidebarpreview')}>
        <p className={cx('sidebar-title')}>Giới thiệu Bảng tinLiên hệ Sự nghiệp</p>
        <p className={cx('sidebar-title')}>ByteDance TikTok for GoodQuảng cáoDevelopersTransparencyTikTok Rewards</p>
        <p className={cx('sidebar-title')}>Trợ giúp An toànĐiều khoảnQuyền riêng tưCreator Portal</p>
        <p className={cx('sidebar-title')}>Hướng dẫn Cộng đồng Thêm © 2022 TikTok</p>
      </div>
    </aside>
  );
}

export default Sidebar;
