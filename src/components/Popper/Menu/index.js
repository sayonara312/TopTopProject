import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, hideOnClick = false }) {
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-detail')} {...attrs}>
          <PopperWrapper>
            <MenuItem menuItem>
              <FontAwesomeIcon icon={faEarthAsia} style={{ marginRight: 10 }} />
              <span>Tiếng Việt</span>
            </MenuItem>
            <MenuItem menuItem>
              <FontAwesomeIcon icon={faCircleQuestion} style={{ marginRight: 10 }} />
              <span>Phản hồi và trợ giúp</span>
            </MenuItem>
            <MenuItem menuItem>
              <FontAwesomeIcon icon={faKeyboard} style={{ marginRight: 10 }} />
              <span>Phím tắt trên bàn phím</span>
            </MenuItem>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
