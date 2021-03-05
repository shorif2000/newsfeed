import { Router, Utils } from '@lightningjs/sdk'
// import all the configured routes
import routes from './lib/routes'
import Splash from './components/splash'
import Main from './Main.js'
import HeadlineDetailScreen from './screens/headlineDetailScreen'
import { Menu, Notification } from './widgets'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  /**
   * Start the Router and provide with:
   * - routes configuration
   * - App instance (optional)
   */
  _setup() {
    Router.startRouter(routes, this)
  }

  static _template() {
    return {
      ...super._template(),
      Widgets: {
        // this hosts all the widgets
        Menu: {
          type: Menu,
        },
        Notification: {
          type: Notification,
        },
      },
      Splash: {
        type: Splash,
        signals: { loaded: true },
        alpha: 0,
      },
      /*
      rect: true,
      color: 0xff000000,
      w: 1920,
      h: 1080,
      Splash: {
        type: Splash,
        signals: { loaded: true },
        alpha: 0,
      },
      Main: {
        type: Main,
        alpha: 0,
        signals: { select: 'headlineSelect' },
      },
      HeadlineDetailScreen: {
        type: HeadlineDetailScreen,
        alpha: 0,
      },

       */
    }
  }

  /*_setup() {
    this._setState('Splash')
  }*/

  static _states() {
    const states = super._states()
    states.push(
      class ExampleState extends this {
        $enter() {
          this.tag('Splash').setSmooth('alpha', 1)
        }
        $exit() {
          this.tag('Splash').setSmooth('alpha', 0)
        }
        // because we have defined 'loaded'
        loaded() {
          this._setState('Home')
        }
      }
    )
    return states
    /*
    return [
      class Splash extends this {
        $enter() {
          this.tag('Splash').setSmooth('alpha', 1)
        }
        $exit() {
          this.tag('Splash').setSmooth('alpha', 0)
        }
        // because we have defined 'loaded'
        loaded() {
          this._setState('Main')
        }
      },

      class Main extends this {
        $enter() {
          this.tag('Main').patch({
            smooth: { alpha: 1, y: 0 },
          })
        }
        $exit() {
          this.tag('Main').patch({
            smooth: { alpha: 0, y: 100 },
          })
        }
        headlineSelect({ item }) {
          if (this._hasMethod(item.action)) {
            return this[item.action]()
          }
        }
        view() {
          this._setState('HeadlineDetailScreen')
        }
        // change focus path to main
        // component which handles the remotecontrol
        _getFocused() {
          return this.tag('Main')
        }
      },

      class HeadlineDetailScreen extends this {
        $enter() {
          this.tag('HeadlineDetailScreen').patch({
            smooth: { alpha: 1 },
          })
        }

        $exit() {
          this.tag('HeadlineDetailScreen').patch({
            smooth: { alpha: 0 },
          })
        }

        _getFocused() {
          return this.tag('HeadlineDetailScreen')
        }
      },
    ]

     */
  }

  _handleAppClose() {
    console.log('Show exit dialogue')
  }
}
