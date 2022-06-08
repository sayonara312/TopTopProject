import { faHome, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('sidebarmain')}>
        <ul>
          <li className={cx('active')}>
            <FontAwesomeIcon icon={faHome} />
            <span>Dành cho bạn</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Đang Follow</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} />
            <span>LIVE</span>
          </li>
        </ul>
      </div>

      <div className={cx('sidebarsignin')}>
        <p>
          <span>Đăng nhập để follow các tác giả, thích video và xem bình luận.</span>
        </p>
        <button className={cx('sidebarsigninbtn')}>Đăng nhập</button>
      </div>
      <div className={cx('sidebaraccrecommend')}>
        <p>
          <span>Tài khoản được đề xuất</span>
        </p>
        <ul>
          <li>Thế anh</li>
          <li>Thế anh</li>
          <li>Thế anh</li>
          <li>Thế anh</li>
          <li>Thế anh</li>
          <li>Thế anh</li>
        </ul>
      </div>
      <div></div>
    </aside>
  );
}

export default Sidebar;
