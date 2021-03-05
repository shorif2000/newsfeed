import { Lightning } from '@lightningjs/sdk'

export default class HeadlineDetailScreen extends Lightning.Component {
  static _template() {
    return {
      text: { text: 'help', fontFace: 'pixel', fontSize: 50 },
    }
  }

  static _states() {
    return [
      class HeadlineDetailScreen extends this {
        $enter() {
          this.tag('HeadlineDetailScreen').setSmooth('alpha', 1)
        }
        $exit() {
          this.tag('HeadlineDetailScreen').setSmooth('alpha', 0)
        }
        // because we have defined 'loaded'
        loaded() {
          this._setState('HeadlineDetailScreen')
        }
      },
    ]
  }
}
