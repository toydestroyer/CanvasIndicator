/**
 * Canvas Indicator 0.1.2
 *
 * Creates an alternative to ajax loader images with the canvas element.
 *
 * By Sergey Toy http://toydestroyer.com/
 * Concept by http://starkravingcoder.blogspot.com/2007/09/canvas-loading-indicator.html
 *
 *
 * Usage:
 *
 *      new CanvasIndicator(el, {
 *          bars:11,
 *          innerRadius:4,
 *          size:[2,5],
 *          color: 'white',
 *          fps:10
 *      });
 *
 * Options:
 *
 *        bars - number of bars
 *        innerRadius - inner radius (px)
 *        size - array(width,height)
 *        color - color string #fff, #ffffff, white
 *        fps - approximate frames per second of the pulsing
 *
 **/

;(function(global) {

  'use strict';

  function CanvasIndicator(el, opt) {

    if (typeof el === "string") {
      el = document.getElementById(el);
    }

      this.ctx = el.getContext("2d");
      this.currentOffset = 0;
      var defaults = {
          bars: 11,
          innerRadius: 4,
          size: [2, 5],
          color: '#fff',
          fps: 10
      }
      if (typeof(opt) == 'object') {
        for (var key in opt) {
          if (opt.hasOwnProperty(key)) {
            defaults[key] = opt[key];
          }
        }
      }
      this.opt = defaults;
      this.w = this.opt.size[1] + this.opt.innerRadius;
      el.setAttribute("width", this.w * 2);
      el.setAttribute("height", this.w * 2);
      (function nextAnimation(obj) {
          obj.currentOffset = (obj.currentOffset + 1) % obj.opt.bars;
          obj.draw(obj.currentOffset);
          setTimeout(function() {
              nextAnimation(obj);
          }, 1000 / obj.opt.fps);
      })(this);
  }

  CanvasIndicator.prototype.drawBlock = function(barNo) {
      this.ctx.fillStyle = this.opt.color;
      this.ctx.globalAlpha = (this.opt.bars + 1 - barNo) / (this.opt.bars + 1);
      this.ctx.fillRect(-this.opt.size[0] / 2, 0, this.opt.size[0], this.opt.size[1]);
  }

  CanvasIndicator.prototype.calculatePosition = function(barNo) {
      var angle = 2 * barNo * Math.PI / this.opt.bars;
      return {
          y: (this.opt.innerRadius * Math.cos(-angle)),
          x: (this.opt.innerRadius * Math.sin(-angle)),
          angle: angle
      };
  }

  CanvasIndicator.prototype.draw = function(offset) {
      this.clearFrame();
      this.ctx.save();
      this.ctx.translate(this.w, this.w);
      for (var i = 0; i < this.opt.bars; i++) {
          var curbar = (offset + i) % this.opt.bars,
              pos = this.calculatePosition(curbar);
          this.ctx.save();
          this.ctx.translate(pos.x, pos.y);
          this.ctx.rotate(pos.angle);
          this.drawBlock(i);
          this.ctx.restore();
      }
      this.ctx.restore();
  }

  CanvasIndicator.prototype.clearFrame = function() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
  }

  global.CanvasIndicator = CanvasIndicator;

})(window);
