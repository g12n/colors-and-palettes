var chroma = require('chroma-js');
const Image = require("@11ty/eleventy-img");

let svg =(hex, textcolor="#fff")=>`
<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="600" fill="${hex}"/> 
<text x="600" y="340" text-anchor="middle" font-size="80pt" font-family="monospace" fill="${textcolor}">${hex} </text>
</svg>
`

let favicon = (hex) => `
<svg width="128" height="128" viewBox="-64 -64 128 128" xmlns="http://www.w3.org/2000/svg">
<circle r="58" fill="${hex}" />
</svg>
`

module.exports = async function() {
    let colors = []
    for (let hue=0; hue<360; hue += 20){
        let color = chroma.lch(80, 120, hue);
        let hex = color.hex();
        let name = color.name();
        let text = color.luminance() > 0.5 ? "#000" : "#fff";

        var buffer = Buffer.from(svg(hex, text));
        var favbuff = Buffer.from(favicon(hex));
        
        let options = {
            widths: [1200],
            formats:["jpg", "svg"],
            outputDir: "./_site/img/",
        }
        let favoptions = {
            widths: [128],
            formats:["png", "svg"],
            outputDir: "./_site/img/",
        }

       let stats = await Image(buffer, options);
       let fav = await Image(favbuff, favoptions);
       
        colors.push({
           hex,
           name,
           text,
           og: stats.jpeg[0].url,
           svg: stats.svg[0].url,
           fav
        })
    }
    return colors
};