import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ContentItem from './components/ContentItem';
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx('wrapper')}>
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
    </div>
  );
}

export default Home;
