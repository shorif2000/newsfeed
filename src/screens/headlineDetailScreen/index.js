import { Lightning } from '@lightningjs/sdk'

export default class HeadlineDetailScreen extends Lightning.Component {
  static _template() {
    return {
      HeadlineDetailScreen: {
        Headline: { x: 100, y: 170, text: { text: 'headline', fontSize: 29, fontFace: 'Pixel' } },
      },
    }
  }

  static _states() {
    return []
  }
}
