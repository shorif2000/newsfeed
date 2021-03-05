import { Lightning } from '@lightningjs/sdk'
import Headline from './components/headlines/Headline.js'
import * as headlineData from './data/headline.json'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Headline: {
        x: 600,
        y: 400,
        type: Headline,
        items: headlineData,
      },
    }
  }

  _getFocused() {
    return this.tag('Headline')
  }

  _handleEnter() {
    this.signal('select', { item: this.tag('Headline').activeItem })
  }
}
