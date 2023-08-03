const {Triangle} = require('./shapes');

describe('Shapes', () => {

  describe('Triangle', () => {

    it('can be rendered', () => {
      const shape = new Triangle();
      shape.setColor("blue");

      expect(shape.render())
        .toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

  });

});
