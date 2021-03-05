import { Lightning } from '@lightningjs/sdk'
import Headlines from './components/headlines'
import * as headlineData from './data/headline.json'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Headline: {
        x: 600,
        y: 400,
        type: Headlines,
        items: headlineData,
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
