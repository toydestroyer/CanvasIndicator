# CanvasIndicator
**NOTE:** I wrote this code back in 2011 and it was writen just for fun. I don't think you'll find this helpful so if you look for widget like this — check out [alternatives below](#alternatives).

A simple JavaScript widget to create loading animation using a Canvas element.<br>
Inspired by http://starkravingcoder.blogspot.com/2007/09/canvas-loading-indicator.html

* Works over varied backgrounds such as gradients and patterns.
* Control the look, size and speed of the loading animation.
* Framework independent, use plain JavaScript.

## Usage:
```javascript
new CanvasIndicator(el, {
    bars: 11,
    innerRadius: 4,
    size: [2, 5],
    rgb: [0, 0, 0],
    fps: 10
});
```
### Options
* `bars` — number of bars
* `innerRadius` — inner radius (px)
* `size` — array(width,height)
* `rgb` — array(red,green,blue)
* `fps` — approximate frames per second of the pulsing

## Alternatives
I consider that rotating PNG or SVG image with CSS is best solution. But if you still looking for JavaScript widget, here is some of them:

* [spin.js](http://fgnass.github.io/spin.js/)
* [NETEYE Activity Indicator](http://neteye.github.io/activity-indicator.html)
* [Canvas Loader JS](http://jamund.com/canvas-loader/no.jquery.html)
* [busy.js](http://www.netzgesta.de/busy/)



## License
The MIT License (MIT)

Copyright (c) 2011, 2014 Sergey Toy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

