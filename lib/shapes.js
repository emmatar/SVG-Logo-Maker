class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor,
        this.text = text,
        this.textColor= textColor
    }
    render(){
        return `<svg version="1.1" width="1000" height="600" xmlns="http://www.w3.org/2000/svg"><rect x="550" y="125" width="400" height="400" fill="${this.shapeColor}"/><text x="750" y="325" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}


module.exports = { Shape }