import { Lightning } from '@lightningjs/sdk'
import Headline from './components/headlines/Headline.js'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Headline: {
        x: 600,
        y: 400,
        type: Headline,
        items: [
          { label: 'HEADLINE 7', action: 'view' },
          { label: 'HEADLINE 3', action: 'view1' },
          { label: 'HEADLINE 9', action: 'view2' },
          { label: 'HEADLINE 50', action: 'view3' },
        ],
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
