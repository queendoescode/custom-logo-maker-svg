class Triangle {

  constructor () {
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points=\"150, 18 244, 182 56, 182\" fill=\"${this.color}\" />`;
  }

}



class Circle {

  constructor () {
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="120" r="80" fill="${this.color}" />`;
  }

}


class Square {
  
  constructor () {
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="70" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

module.exports = {Triangle, Circle, Square};

