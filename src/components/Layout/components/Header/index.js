import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '~/assets/images/logo/TikTok_logo.svg';
import Searchicon from '~/assets/images/icon/Search_icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faAdd, faCircleXmark, faEarthAsia, faEllipsisVertical, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={Logo} alt="TikTok" />
        </div>
        <div className={cx('search')}>
          <input placeholder="Tìm kiếm tài khoản và video" />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />

          <span className={cx('spanspliter')}></span>
          <button className={cx('search-btn')}>
            <img src={Searchicon} alt="Search-icon" />
          </button>
        </div>
        <div className={cx('action')}>
          <button className={cx('upload')}>
            <FontAwesomeIcon icon={faAdd} />
            <span>Tải lên</span>
          </button>
          <button className={cx('signin')}>Đăng nhập</button>
          <span className={cx('menu')}>
            <FontAwesomeIcon className={cx('menu-icon')} icon={faEllipsisVertical} />

            <ul className={cx('menu-detail')}>
              <li>
                <FontAwesomeIcon icon={faEarthAsia} />
                <span>Tiếng Việt</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleQuestion} />
                <span>Phản hồi và trợ giúp</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faKeyboard} />
                <span>Phím tắt trên bàn phím</span>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
