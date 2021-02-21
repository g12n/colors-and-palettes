# A small site of colors

A Demo Project demonstrating automated open graph image generation in 11ty usind svg and the 11ty image plugin.


## setup

```
npm install @11ty/eleventy @11ty/eleventy-img chroma-js
```

### We just installed 3 Components: 

1. [Eleventy][11yt] is a simple yet powerful static site generator
2. [11ty Image][11tyimg] is a low level utility to perform build-time image transformations for both vector and raster images. Uses the [sharp][sharp] image processor.
3. We`ll use [chroma-js][chroma-js] to generate a list of colors for out little experiment
   
Now we add two build scripts to our `package.json` to make live easiern down the way.

```json
  "scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy"
  },
```




[11ty]: https://www.11ty.dev/
[11tyimg]: https://www.11ty.dev/docs/plugins/image/
[sharp]: https://sharp.pixelplumbing.com/
[chroma-js]: https://gka.github.io/chroma.js/