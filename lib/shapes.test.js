const { Circle, Triangle, Square } = require('./shapes.js');

describe('Shapes', () => {
    describe('circle', () => {
        it('should take three inputs, and return an <svg> tag with the inputs included in the shapes appearance', () => {
            const shapeColor = "orange";
            const text = "cir";
            const textColor = "yellow"
            const string = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="250" r="150" fill="${shapeColor}"/><text x="250" y="270" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
            const circle = new Circle(shapeColor, text, textColor); 
            expect(circle.render()).toEqual(string);
        });
    });
    describe('triangle', () => {
        it('should take three inputs, and return an <svg> tag with the inputs included in the shapes appearance', () => {
            const shapeColor = "green";
            const text = "tri";
            const textColor = "black"
            const string = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><polygon points="250,70 450,400 50,400" fill="${shapeColor}"/><text x="250" y="270" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
            const triangle = new Triangle(shapeColor, text, textColor); 
            expect(triangle.render()).toEqual(string);
        });
    });
    describe('square', () => {
        it('should take three inputs, and return an <svg> tag with the inputs included in the shapes appearance', () => {
            const shapeColor = "blue";
            const text = "rec";
            const textColor = "brown"
            const string =`<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="100" width="300" height="300" fill="${shapeColor}"/><text x="250" y="270" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
            const square = new Square(shapeColor, text, textColor); 
            expect(square.render()).toEqual(string);
        });
    });
});