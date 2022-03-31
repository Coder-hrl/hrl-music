import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
// Discover下面的子页面
// 我的页面
const HyMine = lazy((_) => import('../pages/mine'))
const HyFriends = lazy((_) => import('../pages/friends'))
const HySongs = lazy((_) => import('../pages/discover/children-pages/songs'))
const HyRecommend = lazy((_) =>
  import('../pages/discover/children-pages/recommend')
)
const HyDjRadio = lazy((_) =>
  import('../pages/discover/children-pages/djradio')
)
const HyArtists = lazy((_) =>
  import('../pages/discover/children-pages/artists')
)
const HyAlbum = lazy((_) => import('../pages/discover/children-pages/album'))
const HyRanking = lazy((_) =>
  import('../pages/discover/children-pages/ranking')
)
const HyDiscover = lazy((_) => import('../pages/discover'))

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
