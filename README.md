# CanvasIndicator
**NOTE:** I wrote this code back in 2011 and it was writen just for fun. I don't think you'll find this helpful so if you look for widget like this — check out [NETEYE Activity Indicator](http://neteye.github.io/activity-indicator.html).

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
