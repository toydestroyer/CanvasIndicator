# CanvasIndicator
A simple Javascript widget to create loading animation using a Canvas element.

* Works over varied backgrounds such as gradients and patterns.
* Control the look, size and speed of the loading animation.
* Framework independent, use plain Javascript.

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
