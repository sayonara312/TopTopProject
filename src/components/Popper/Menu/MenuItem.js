import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ children, active = false, menuItem, ...props }) {
  const classes = cx('wrapper', {
    active,
    menuItem,
  });
  return <div className={classes}>{children}</div>;
}

export default MenuItem;
