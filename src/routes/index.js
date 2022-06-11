import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Live from '../pages/Live';
import { HeaderOnly } from '../components/Layout';

const publicRoutes = [
  {
    path: '/TopTopProject/',
    component: Home,
  },
  {
    path: '/TopTopProject/following',
    component: Following,
  },
  {
    path: '/TopTopProject/@:nickname',
    component: Profile,
  },
  {
    path: '/TopTopProject/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/TopTopProject/live',
    component: Live,
  },
  {
    path: '/TopTopProject/search',
    component: Search,
    layout: null,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
