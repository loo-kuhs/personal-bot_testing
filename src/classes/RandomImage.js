const { fetch } = require("undici");

class RandomImageFromAPI {
  constructor() {
    this.url = "http://localhost:3000/images/";
  }

  async #fetchImages() {
    const body = await fetch(this.url, { method: "GET" }).then((res) =>
      res.json()
    );
    return body;
  }

  async getImages() {
    const body = await this.#fetchImages();
    const imgURLs = [];

    body.forEach((image) => {
      return imgURLs.push(image.url);
    });
    return imgURLs;
  }

  async getRandomImage() {
    const images = await this.getImages();
    const randomImage = images[Math.floor(Math.random() * images.length)];
    console.log(`Random from getRandomImage(): ${randomImage}`);
    return randomImage;
  }

  async getImageById(id) {
    const body = await this.#fetchImages();
    let result = ""
    body.forEach((image) => {
      if (image.id === Number(id)) {
        result = image.url;
        console.log(`Image found by ID: ${result}`);
      }
    });
    return result;
  }
}

module.exports = new RandomImageFromAPI();