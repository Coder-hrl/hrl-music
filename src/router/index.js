import HyDiscover from '../pages/discover'
import HyRecommend from '../pages/discover/children-pages/recommend'
import HySongs from '../pages/discover/children-pages/songs'
import HyDjRadio from '../pages/discover/children-pages/djradio'
import HyArtists from '../pages/discover/children-pages/artists'
import HyAlbum from '../pages/discover/children-pages/album'
import HyRanking from '../pages/discover/children-pages/ranking'
// Discover下面的子页面
// 我的页面
import HyMine from '../pages/mine'
import HyFriends from '../pages/friends'

import { Redirect } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: HyDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: HyRecommend,
      },
      {
        path: '/discover/songs',
        component: HySongs,
      },
      {
        path: '/discover/djradio',
        component: HyDjRadio,
      },
      {
        path: '/discover/artists',
        component: HyArtists,
      },
      {
        path: '/discover/album',
        component: HyAlbum,
      },
      {
        path: '/discover/ranking',
        component: HyRanking,
      },
    ],
  },
  {
    path: '/mine',
    exact: true,
    component: HyMine,
  },
  {
    path: '/friends',
    exact: true,
    component: HyFriends,
  },
]

export default routes
