class Shape {

  setColor(color) {
    this.color = color;
  }

  // The purpose of this method is to return the correct SVG string
  // for the specific shape we need (subclass).

  render() {
    // the specific shape classes will override this method
    throw new Exception("cannot render a generic shape");
  }
}


class Triangle extends Shape {
  render() {
    return `<polygon points=\"150, 18 244, 182 56, 182\" fill=\"${this.color}\" />`;
  }
}



class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="120" r="80" fill="${this.color}" />`;
  }
}


class Square extends Shape {
  render() {
    return `<rect x="70" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

module.exports = {Triangle, Circle, Square};

