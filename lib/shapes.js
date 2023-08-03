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
    
  }

}


class Square {
  
  constructor () {
  }

  setColor(color) {
  }
}

module.exports = {Triangle, Circle, Square};

