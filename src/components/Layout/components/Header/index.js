import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '~/assets/images/logo/TikTok_logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAdd, faEllipsisVertical, faMessage, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import { useState } from 'react';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function Header() {
  const [account, setAccount] = useState(false);
  const handleSignIn = () => {
    setAccount(true);
  };
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

          {!account && (
            <Button primary onClick={handleSignIn}>
              Đăng nhập
            </Button>
          )}
          {!account && (
            <Menu>
              <button className={cx('menu')}>
                <FontAwesomeIcon className={cx('menu-icon')} icon={faEllipsisVertical} />
              </button>
            </Menu>
          )}
          {account && (
            <Tippy arrow placement="bottom" role="Tin Nhắn">
              <Button>
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </Tippy>
          )}
          {account && (
            <Tippy arrow placement="bottom" role="Tin Nhắn">
              <Button>
                <FontAwesomeIcon icon={faMessage} />
              </Button>
            </Tippy>
          )}
          {account && (
            <Tippy arrow placement="bottom" role="Tin Nhắn">
              <Button>
                <FontAwesomeIcon icon={faUser} />
              </Button>
            </Tippy>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
