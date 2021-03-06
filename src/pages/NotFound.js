import { Lightning, Router } from '@lightningjs/sdk'

export default class NotFound extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0x858585,
      Label: {
        x: 960,
        y: 540,
        mount: 0.5,
        text: {
          text: ' - Page not found - ',
        },
      },
      Details: {
        x: 960,
        y: 650,
        mount: 0.5,
        alpha: 0.5,
        text: {
          fontSize: 27,
          textAlign: 'center',
          lineHeight: 40,
          text:
            'hit back to navigate to Home page'
        },
      },
    }
  }

  _handleBack() {
    Router.navigate('home')
  }
}
