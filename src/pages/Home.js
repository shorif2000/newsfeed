import { Lightning, Router } from '@lightningjs/sdk'
import Headline from '../components/headline'

export default class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff000000,
      Headlines: {
        x: 600,
        y: 400,
        type: Headline,
        items: [
          { label: 'HEADLINE 7', action: 'view', value: 7 },
          { label: 'HEADLINE 3', action: 'view', value: 7 },
          { label: 'HEADLINE 9', action: 'view', value: 7 },
          { label: 'HEADLINE 50', action: 'view', value: 7 },
        ],
      },
    }
  }

  static _states() {
    return [
      class Home extends this {
        $enter() {
          this.tag('Home').patch({
            smooth: { alpha: 1, y: 0 },
          })
        }
        $exit() {
          this.tag('Home').patch({
            smooth: { alpha: 0, y: 100 },
          })
        }
        headlineSelect({ item }) {
          console.log('press')
          if (this._hasMethod(item.action)) {
            return this[item.action]()
          }
        }
        view() {
          console.log('route to ')
          //this._setState('HeadlineDetailScreen')
          Router.navigate('headline/details/1')
        }
        // change focus path to main
        // component which handles the remotecontrol
        _getFocused() {
          return this.tag('Home')
        }
      },
    ]
  }

  set persist(args) {
    console.log('we received data:', args)
  }

  _getFocused() {
    return this.tag('Headlines')
  }

  _handleEnter() {
    console.log('enter')
    console.log(this.tag('Headlines').activeItem.value)
    Router.navigate(`headline/details/${this.tag('Headlines').activeItem.value}`)
  }
}
