const { Square } = require('./square.js')

describe('square', () => {
    it('should take three inputs, and return an <svg> tag with the inputs included in the shapes appearance', () => {
        const string =`<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="100" width="300" height="300" fill="blue"/><text x="250" y="270" font-size="80" text-anchor="middle" fill="brown">rec</text></svg>`
        const square = new Square("blue", "rec", "brown"); 
        expect(square.render()).toEqual(string);
    });
});