import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '~/assets/images/logo/TikTok_logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAdd, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={`/`} className={cx('logo')}>
          <img src={Logo} alt="TikTok" />
        </Link>

        {/* Search */}
        <Search />
        {/* End Search */}

        <div className={cx('action')}>
          <Button outlineText>
            <FontAwesomeIcon icon={faAdd} />
            <span>Tải lên</span>
          </Button>
          <Button primary>Đăng nhập</Button>
          <Menu>
            <button className={cx('menu')}>
              <FontAwesomeIcon className={cx('menu-icon')} icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
