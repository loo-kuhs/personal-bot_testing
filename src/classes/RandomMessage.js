class RandomMessage {
  constructor() {
    this.messages = [
      "Hola!",
      "Que bueno verte por acá!",
      "Búscate una vida.",
      "Perdón",
    ];
  }

  getRandomMessage() {
    return this.messages[Math.floor(Math.random() * this.messages.length)];
  }
}

module.exports = new RandomMessage().getRandomMessage();