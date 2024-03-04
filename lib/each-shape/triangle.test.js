const { Triangle } = require('./triangle.js')

describe('triangle', () => {
    it('should take three inputs, and return an <svg> tag with the inputs included in the shapes appearance', () => {
        const string = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><polygon points="250,70 450,400 50,400" fill="green"/><text x="250" y="270" font-size="80" text-anchor="middle" fill="black">tri</text></svg>`
        const triangle = new Triangle("green", "tri", "black"); 
        expect(triangle.render()).toEqual(string);
    });
});