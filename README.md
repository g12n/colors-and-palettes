# A small site of colors

An experiment demonstrating automated open graph image generation in [11ty][11ty] usind svg and the [11ty Image plugin][11tyimg].

## Step 1: 

Generate your svg code as a string in any way you like. 

``` javascript
let svg = `
<svg width="128" height="128" viewBox="-64 -64 128 128" xmlns="http://www.w3.org/2000/svg">
    <circle r="58" fill="#ff6600" />
</svg>
`
```

## Step 2:

Create a new [Buffer][buffer] from your code:

``` javascript
var buff = Buffer.from(svg);
```

## Step 3

Pass the Buffer into [11ty Image plugin][11tyimg] as a source. 

``` javascript
 let stats = await Image(buffer, {
    widths: [300]
  });
```
 

[11ty]: https://www.11ty.dev/
[11tyimg]: https://www.11ty.dev/docs/plugins/image/
[sharp]: https://sharp.pixelplumbing.com/
[chroma-js]: https://gka.github.io/chroma.js/
[lch]:https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/
[buffer]:ttps://nodejs.org/api/buffer.html#buffer_class_buffer