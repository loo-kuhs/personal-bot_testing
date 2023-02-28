class GuessingGame {
  constructor() {
    this.secretNumber = Math.floor(Math.random() * 10)
  }

  guess(number) {
    if (number === this.secretNumber) return 'Adivinaste el número.'
    else if (number > this.secretNumber) return 'El número es más pequeño.'
    else return 'El número es más grande.'
  }
}

module.exports = GuessingGame
