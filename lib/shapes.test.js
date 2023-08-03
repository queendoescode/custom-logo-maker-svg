const {Triangle, Circle, Square} = require('./shapes');

describe('Shapes', () => {

  describe('Triangle', () => {

    it('can be rendered', () => {
      const shape = new Triangle();
      shape.setColor("blue");

      expect(shape.render())
        .toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

  });

  describe('Circle', () => {

    it('can be rendered', () => {
      const shape = new Circle();
      shape.setColor("blue");

      expect(shape.render())
        .toEqual('<circle cx="150" cy="120" r="80" fill="blue" />');
    });

  });

  describe('Square', () => {

    it('can be rendered', () => {
      const shape = new Square();
      shape.setColor("blue");

      expect(shape.render())
        .toEqual('<rect x=\"70\" y=\"40\" width=\"160\" height=\"160\" fill=\"blue\" />');
    });

  });

});
