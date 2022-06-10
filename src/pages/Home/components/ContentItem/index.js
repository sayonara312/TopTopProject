import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ContentItem.module.scss';
import { Link } from 'react-router-dom';
import ConvertNumber from '~/ConvertNumber';

const cx = classNames.bind(styles);
function ContentItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <Link to={`/@${data.nickname}`}>
        <img className={cx('avatar')} src={data.avatar} alt="anh" />
      </Link>
      <div className={cx('info')}>
        <div className={cx('info-name')}>
          <p className={cx('user-name')}>
            <Link to={`/@${data.nickname}`} className={cx('username-link')}>
              <span>{data.nickname}</span>
            </Link>
            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            <span className={cx('name')}>{data.full_name}</span>
          </p>
        </div>
        <div className={cx('title')}>
          {data.title}
          {/* <Link to="/" className={cx('tag')}>
            <span></span>
          </Link> */}
        </div>

        <div className={cx('music')}>
          <FontAwesomeIcon icon={faMusic} />
          <Link to="/" className={cx('tag')}>
            <span className={cx('music-name')}>{data.music_name}</span>
          </Link>
        </div>

        <div className={cx('main-content')}>
          <video controls src={data.url_video}></video>
          <div className={cx('action')}>
            <div className={cx('follow')}>
              <Button className={cx('btn-follow')}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <span className={cx('number')}>{ConvertNumber(data.likes_video_count)}</span>
            </div>
            <div className={cx('comment')}>
              <Button className={cx('btn-comment')}>
                <FontAwesomeIcon icon={faComment} />
              </Button>
              <span className={cx('number')}>{ConvertNumber(data.comment_count)}</span>
            </div>
            <div className={cx('share')}>
              <Button className={cx('btn-share')}>
                <FontAwesomeIcon icon={faShare} />
              </Button>
              <span className={cx('number')}>{ConvertNumber(data.share_count)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('followBtn')}>
        <Button outline small>
          Follow
        </Button>
      </div>
    </div>
  );
}

export default ContentItem;
