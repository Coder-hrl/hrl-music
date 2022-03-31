import { Navigate } from 'react-router-dom'

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

const routes = [
  {
    path: '/',
    exact: true,
    element: () => <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <HyDiscover />,
    children: [
      {
        path: '/discover',
        exact: true,
        element: () => <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <HyRecommend />,
      },
      {
        path: '/discover/songs',
        element: <HySongs />,
      },
      {
        path: '/discover/djradio',
        element: <HyDjRadio />,
      },
      {
        path: '/discover/artists',
        element: <HyArtists />,
      },
      {
        path: '/discover/album',
        element: <HyAlbum />,
      },
      {
        path: '/discover/ranking',
        element: <HyRanking />,
      },
    ],
  },
  {
    path: '/mine',
    exact: true,
    element: <HyMine />,
  },
  {
    path: '/friends',
    exact: true,
    element: <HyFriends />,
  },
]

export default routes
