var chroma = require('chroma-js');

module.exports = function() {
    let colors = []

    for (let hue=0; hue<360; hue += 10){
        let color = chroma.lch(50, 90, hue);
        colors.push({
           hex: color.hex(),
           name: color.name(),
           text: color.luminance() > 0.5 ? "#000" : "#fff"
        })
    }
    return colors
};