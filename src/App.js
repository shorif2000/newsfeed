import { Lightning, Utils } from '@lightningjs/sdk'
import Splash from './Splash.js'
import Main from './Main.js'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
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
        signals: { loaded: false },
        alpha: 0,
      },
    }
  }

  _setup() {
    this._setState('Splash')
  }

  static _states() {
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
        // change focus path to main
        // component which handles the remotecontrol
        _getFocused() {
          return this.tag('Main')
        }
      },
    ]
  }
}
