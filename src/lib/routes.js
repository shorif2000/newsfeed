import { getToken, doSearch } from './api'

// we import all the pages that we want to add to our app
import { Home, NotFound, Error, Detail } from '../pages'
import { Splash } from '../components'

export default {
  boot: params => {
    console.log(params)
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      getToken().then(token => {
        console.log(token)
        resolve()
      })
    })
    // boot request will always fire
    // on root and deeplink
  },
  bootComponent: Splash,
  // First we define a root, this is the hash were the browser will point to
  // at the moment that you boot your app
  root: () => {
    return new Promise(resolve => {
      resolve('splash')
    })
  },
  // Next we can define the rest of our routes
  routes: [
    {
      // this is a one level deep route.
      path: 'home',
      // define the attached Component that the Router will show
      // on this route. If configured the Router will create an instance
      component: Home,
      cache: 60,
    },
    {
      path: 'headline/details/:headlineId{/[0-9]{0,10}/}',
      component: Detail,
      widgets: ['Notification'],
      hook(page, { headlineId }) {
        console.log('You can use:', page)
        console.log('or do something with: ', headlineId)
      },
      cache: 60,
    },
    {
      path: '*',
      component: NotFound,
    },
    {
      path: '!',
      component: Error,
    },
  ],
  beforeEachRoute: async (from, to) => {
    return true
  },
}
