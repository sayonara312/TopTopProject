import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ContentItem.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function ContentItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/82fb438001804eaaf71b8a121cceae5f~c5_100x100.jpeg?x-expires=1654995600&x-signature=jvo9Zgi5NLOdAOJ%2BGNKIGEjullM%3D"
        alt="anh"
      />
      <div className={cx('info')}>
        <div className={cx('info-name')}>
          <p className={cx('user-name')}>
            <Link to="/" className={cx('username-link')}>
              <span>khaby.lame</span>
            </Link>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            <span className={cx('name')}>Tèo</span>
          </p>
        </div>
        <div className={cx('title')}>
          He doesn’t want to be my friend 😢🥺 (I never give up) see you soon in 🇮🇩!!……to be continued.
          <Link to="/" className={cx('tag')}>
            <span>#learnfromkhaby</span>
          </Link>
          <Link to="/" className={cx('tag')}>
            <span>#tiktok</span>
          </Link>
          <Link to="/" className={cx('tag')}>
            <span> #learnontiktok</span>
          </Link>
        </div>

        <div className={cx('music')}>
          <FontAwesomeIcon icon={faMusic} />
          <Link to="/" className={cx('tag')}>
            <span className={cx('music-name')}>suono originale - Khabane lame</span>
          </Link>
        </div>

        <div className={cx('main-content')}>
          <video
            controls
            src="https://v16-webapp.tiktok.com/a4931bfe03d9b8ca9b1d676923e74a02/62a2ff56/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/49a21c68917448818994ce5c31ac0906/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3266&bt=1633&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZTEeawe2N1Rjml7Gb&mime_type=video_mp4&qs=0&rc=OTRmNmdlM2Q1PDM8OWU8Z0BpMzNlZGc6ZnE2PDMzZjczM0A1Nl5iMjQ0NS4xYDJjMmFgYSMybG5qcjRfbmRgLS1kMWNzcw%3D%3D&l=202206100221480102451551102268D1A0"
          ></video>
          <div className={cx('action')}>
            <div className={cx('follow')}>
              <Button className={cx('btn-follow')}>
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <span className={cx('number')}>904k</span>
            </div>
            <div className={cx('comment')}>
              <Button className={cx('btn-comment')}>
                <FontAwesomeIcon icon={faComment} />
              </Button>
              <span className={cx('number')}>10k</span>
            </div>
            <div className={cx('share')}>
              <Button className={cx('btn-share')}>
                <FontAwesomeIcon icon={faShare} />
              </Button>
              <span className={cx('number')}>1214</span>
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
