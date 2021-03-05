import { Lightning } from '@lightningjs/sdk'
import Headline from './components/headline'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Headlines: {
        x: 600,
        y: 400,
        type: Headline,
        items: [
          { label: 'HEADLINE 7', action: 'view' },
          { label: 'HEADLINE 3', action: 'view' },
          { label: 'HEADLINE 9', action: 'view' },
          { label: 'HEADLINE 50', action: 'view' },
        ],
      },
    }
  }

  _getFocused() {
    return this.tag('Headlines')
  }

  _handleEnter() {
    this.signal('select', { item: this.tag('Headlines').activeItem })
  }
}
