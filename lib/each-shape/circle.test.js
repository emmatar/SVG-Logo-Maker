const { Circle } = require('./circle.js')

describe('circle', () => {
    it('should take three inputs, and return an <svg> tag with the inputs included in the shapes appearance', () => {
        const string = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="250" r="150" fill="orange"/><text x="250" y="270" font-size="80" text-anchor="middle" fill="yellow">cir</text></svg>`
        const circle = new Circle("orange", "cir", "yellow"); 
        expect(circle.render()).toEqual(string);
    });
});