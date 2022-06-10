import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/@:nickname',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/live',
    component: Live,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
