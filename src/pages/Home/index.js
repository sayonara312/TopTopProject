import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ContentItem from './components/ContentItem';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
function Home() {
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '71fc7976bbmshdcd4632c1a5c86ep1a5d80jsna1b4a8f8fcf8',
        'X-RapidAPI-Host': 'tiktok82.p.rapidapi.com',
      },
    };

    fetch('https://tiktok82.p.rapidapi.com/getChallengeVideos?challenge_id=229207', options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);
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
