import HyDiscover from '../pages/discover'
import HyMine from '../pages/mine'
import HyFriends from '../pages/friends'

const routes = [
  {
    path: '/',
    exact: true,
    component: HyDiscover,
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
