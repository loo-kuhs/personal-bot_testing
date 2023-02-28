const cowsay = require('cowsay')

class Cow {
  constructor() {}

  talk(text) {
    return cowsay.think({
      text: text,
      w: false,
      e: 'uU',
      r: true,
    })
  }
}

module.exports = new Cow()
