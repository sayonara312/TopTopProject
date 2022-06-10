import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ContentItem from './components/ContentItem';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Home() {
  const [getvideo, setGetVideo] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/sayonara312/apitiktok/data')
      .then((response) => response.json())
      .then((response) => setGetVideo(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className={cx('wrapper')}>
      {getvideo.map((video) => (
        <ContentItem key={video.id} data={video} />
      ))}
    </div>
  );
}

export default Home;
