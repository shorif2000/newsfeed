import { Lightning } from '@lightningjs/sdk'
import Menu from './menu/Menu.js'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Menu: {
        x: 600,
        y: 400,
        type: Menu,
        // @TODO load headlines dynamically
        items: [
          { label: 'HEADLINE 1', action: 'view', value: 1 },
          { label: 'HEADLINE 2', action: 'view', value: 2 },
          { label: 'HEADLINE 3', action: 'view', value: 3 },
          { label: 'HEADLINE 4', action: 'view', value: 4 },
        ],
      },
    }
  }

  _getFocused(){
    return this.tag('Menu');
  }

  _handleEnter() {
    this.signal('select', { item: this.tag('Menu').activeItem })
  }
}
