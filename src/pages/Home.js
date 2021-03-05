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
        items: [],
      },
    }
  }

  set persist(args) {
    this.tag('Headlines').items = [
      { label: 'HEADLINE 7', action: 'view', value: 7, details: '7 info' },
      { label: 'HEADLINE 3', action: 'view', value: 3, details: '3 info' },
      { label: 'HEADLINE 9', action: 'view', value: 9, details: '9 info' },
      { label: 'HEADLINE 50', action: 'view', value: 50, details: '50 info' },
    ]
    //console.log('we received data:', args)
  }

  _getFocused() {
    return this.tag('Headlines')
  }

  _handleEnter() {
    Router.navigate(`headline/details/${this.tag('Headlines').activeItem.value}`, {
      details: this.tag('Headlines').activeItem.details,
      from: this,
    })
  }
}
