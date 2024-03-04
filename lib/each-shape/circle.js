class Circle {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor,
        this.text = text,
        this.textColor= textColor
    }
    render(){
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="250" r="150" fill="${this.shapeColor}"/><text x="250" y="270" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Circle }