/*!
  * PhotoSwipe 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */
function f(r, t, i) {
  const e = document.createElement(t);
  return r && (e.className = r), i && i.appendChild(e), e;
}
function p(r, t) {
  return r.x = t.x, r.y = t.y, t.id !== void 0 && (r.id = t.id), r;
}
function M(r) {
  r.x = Math.round(r.x), r.y = Math.round(r.y);
}
function A(r, t) {
  const i = Math.abs(r.x - t.x), e = Math.abs(r.y - t.y);
  return Math.sqrt(i * i + e * e);
}
function x(r, t) {
  return r.x === t.x && r.y === t.y;
}
function b(r, t, i) {
  return Math.min(Math.max(r, t), i);
}
function I(r, t, i) {
  let e = `translate3d(${r}px,${t || 0}px,0)`;
  return i !== void 0 && (e += ` scale3d(${i},${i},1)`), e;
}
function y(r, t, i, e) {
  r.style.transform = I(t, i, e);
}
const $ = "cubic-bezier(.4,0,.22,1)";
function R(r, t, i, e) {
  r.style.transition = t ? `${t} ${i}ms ${e || $}` : "none";
}
function L(r, t, i) {
  r.style.width = typeof t == "number" ? `${t}px` : t, r.style.height = typeof i == "number" ? `${i}px` : i;
}
function U(r) {
  R(r);
}
function q(r) {
  return "decode" in r ? r.decode().catch(() => {
  }) : r.complete ? Promise.resolve(r) : new Promise((t, i) => {
    r.onload = () => t(r), r.onerror = i;
  });
}
const _ = {
  IDLE: "idle",
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error"
};
function G(r) {
  return "button" in r && r.button === 1 || r.ctrlKey || r.metaKey || r.altKey || r.shiftKey;
}
function K(r, t, i = document) {
  let e = [];
  if (r instanceof Element)
    e = [r];
  else if (r instanceof NodeList || Array.isArray(r))
    e = Array.from(r);
  else {
    const s = typeof r == "string" ? r : t;
    s && (e = Array.from(i.querySelectorAll(s)));
  }
  return e;
}
function C() {
  return !!(navigator.vendor && navigator.vendor.match(/apple/i));
}
let F = !1;
try {
  window.addEventListener("test", null, Object.defineProperty({}, "passive", {
    get: () => {
      F = !0;
    }
  }));
} catch {
}
class X {
  constructor() {
    this._pool = [];
  }
  /**
   * Adds event listeners
   *
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type Can be multiple, separated by space.
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   */
  add(t, i, e, s) {
    this._toggleListener(t, i, e, s);
  }
  /**
   * Removes event listeners
   *
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   */
  remove(t, i, e, s) {
    this._toggleListener(t, i, e, s, !0);
  }
  /**
   * Removes all bound events
   */
  removeAll() {
    this._pool.forEach((t) => {
      this._toggleListener(t.target, t.type, t.listener, t.passive, !0, !0);
    }), this._pool = [];
  }
  /**
   * Adds or removes event
   *
   * @private
   * @param {PoolItem['target']} target
   * @param {PoolItem['type']} type
   * @param {PoolItem['listener']} listener
   * @param {PoolItem['passive']} [passive]
   * @param {boolean} [unbind] Whether the event should be added or removed
   * @param {boolean} [skipPool] Whether events pool should be skipped
   */
  _toggleListener(t, i, e, s, n, o) {
    if (!t)
      return;
    const a = n ? "removeEventListener" : "addEventListener";
    i.split(" ").forEach((l) => {
      if (l) {
        o || (n ? this._pool = this._pool.filter((d) => d.type !== l || d.listener !== e || d.target !== t) : this._pool.push({
          target: t,
          type: l,
          listener: e,
          passive: s
        }));
        const c = F ? {
          passive: s || !1
        } : !1;
        t[a](l, e, c);
      }
    });
  }
}
function B(r, t) {
  if (r.getViewportSizeFn) {
    const i = r.getViewportSizeFn(r, t);
    if (i)
      return i;
  }
  return {
    x: document.documentElement.clientWidth,
    // TODO: height on mobile is very incosistent due to toolbar
    // find a way to improve this
    //
    // document.documentElement.clientHeight - doesn't seem to work well
    y: window.innerHeight
  };
}
function S(r, t, i, e, s) {
  let n = 0;
  if (t.paddingFn)
    n = t.paddingFn(i, e, s)[r];
  else if (t.padding)
    n = t.padding[r];
  else {
    const o = "padding" + r[0].toUpperCase() + r.slice(1);
    t[o] && (n = t[o]);
  }
  return Number(n) || 0;
}
function N(r, t, i, e) {
  return {
    x: t.x - S("left", r, t, i, e) - S("right", r, t, i, e),
    y: t.y - S("top", r, t, i, e) - S("bottom", r, t, i, e)
  };
}
class Y {
  /**
   * @param {Slide} slide
   */
  constructor(t) {
    this.slide = t, this.currZoomLevel = 1, this.center = /** @type {Point} */
    {
      x: 0,
      y: 0
    }, this.max = /** @type {Point} */
    {
      x: 0,
      y: 0
    }, this.min = /** @type {Point} */
    {
      x: 0,
      y: 0
    };
  }
  /**
   * _getItemBounds
   *
   * @param {number} currZoomLevel
   */
  update(t) {
    this.currZoomLevel = t, this.slide.width ? (this._updateAxis("x"), this._updateAxis("y"), this.slide.pswp.dispatch("calcBounds", {
      slide: this.slide
    })) : this.reset();
  }
  /**
   * _calculateItemBoundsForAxis
   *
   * @param {Axis} axis
   */
  _updateAxis(t) {
    const {
      pswp: i
    } = this.slide, e = this.slide[t === "x" ? "width" : "height"] * this.currZoomLevel, n = S(t === "x" ? "left" : "top", i.options, i.viewportSize, this.slide.data, this.slide.index), o = this.slide.panAreaSize[t];
    this.center[t] = Math.round((o - e) / 2) + n, this.max[t] = e > o ? Math.round(o - e) + n : this.center[t], this.min[t] = e > o ? n : this.center[t];
  }
  // _getZeroBounds
  reset() {
    this.center.x = 0, this.center.y = 0, this.max.x = 0, this.max.y = 0, this.min.x = 0, this.min.y = 0;
  }
  /**
   * Correct pan position if it's beyond the bounds
   *
   * @param {Axis} axis x or y
   * @param {number} panOffset
   * @returns {number}
   */
  correctPan(t, i) {
    return b(i, this.max[t], this.min[t]);
  }
}
const T = 4e3;
class k {
  /**
   * @param {PhotoSwipeOptions} options PhotoSwipe options
   * @param {SlideData} itemData Slide data
   * @param {number} index Slide index
   * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
   */
  constructor(t, i, e, s) {
    this.pswp = s, this.options = t, this.itemData = i, this.index = e, this.panAreaSize = null, this.elementSize = null, this.fit = 1, this.fill = 1, this.vFill = 1, this.initial = 1, this.secondary = 1, this.max = 1, this.min = 1;
  }
  /**
   * Calculate initial, secondary and maximum zoom level for the specified slide.
   *
   * It should be called when either image or viewport size changes.
   *
   * @param {number} maxWidth
   * @param {number} maxHeight
   * @param {Point} panAreaSize
   */
  update(t, i, e) {
    const s = {
      x: t,
      y: i
    };
    this.elementSize = s, this.panAreaSize = e;
    const n = e.x / s.x, o = e.y / s.y;
    this.fit = Math.min(1, n < o ? n : o), this.fill = Math.min(1, n > o ? n : o), this.vFill = Math.min(1, o), this.initial = this._getInitial(), this.secondary = this._getSecondary(), this.max = Math.max(this.initial, this.secondary, this._getMax()), this.min = Math.min(this.fit, this.initial, this.secondary), this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
      zoomLevels: this,
      slideData: this.itemData
    });
  }
  /**
   * Parses user-defined zoom option.
   *
   * @private
   * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
   * @returns { number | undefined }
   */
  _parseZoomLevelOption(t) {
    const i = (
      /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
      t + "ZoomLevel"
    ), e = this.options[i];
    if (e)
      return typeof e == "function" ? e(this) : e === "fill" ? this.fill : e === "fit" ? this.fit : Number(e);
  }
  /**
   * Get zoom level to which image will be zoomed after double-tap gesture,
   * or when user clicks on zoom icon,
   * or mouse-click on image itself.
   * If you return 1 image will be zoomed to its original size.
   *
   * @private
   * @return {number}
   */
  _getSecondary() {
    let t = this._parseZoomLevelOption("secondary");
    return t || (t = Math.min(1, this.fit * 3), this.elementSize && t * this.elementSize.x > T && (t = T / this.elementSize.x), t);
  }
  /**
   * Get initial image zoom level.
   *
   * @private
   * @return {number}
   */
  _getInitial() {
    return this._parseZoomLevelOption("initial") || this.fit;
  }
  /**
   * Maximum zoom level when user zooms
   * via zoom/pinch gesture,
   * via cmd/ctrl-wheel or via trackpad.
   *
   * @private
   * @return {number}
   */
  _getMax() {
    return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
  }
}
class j {
  /**
   * @param {SlideData} data
   * @param {number} index
   * @param {PhotoSwipe} pswp
   */
  constructor(t, i, e) {
    this.data = t, this.index = i, this.pswp = e, this.isActive = i === e.currIndex, this.currentResolution = 0, this.panAreaSize = {
      x: 0,
      y: 0
    }, this.pan = {
      x: 0,
      y: 0
    }, this.isFirstSlide = this.isActive && !e.opener.isOpen, this.zoomLevels = new k(e.options, t, i, e), this.pswp.dispatch("gettingData", {
      slide: this,
      data: this.data,
      index: i
    }), this.content = this.pswp.contentLoader.getContentBySlide(this), this.container = f("pswp__zoom-wrap", "div"), this.holderElement = null, this.currZoomLevel = 1, this.width = this.content.width, this.height = this.content.height, this.heavyAppended = !1, this.bounds = new Y(this), this.prevDisplayedWidth = -1, this.prevDisplayedHeight = -1, this.pswp.dispatch("slideInit", {
      slide: this
    });
  }
  /**
   * If this slide is active/current/visible
   *
   * @param {boolean} isActive
   */
  setIsActive(t) {
    t && !this.isActive ? this.activate() : !t && this.isActive && this.deactivate();
  }
  /**
   * Appends slide content to DOM
   *
   * @param {HTMLElement} holderElement
   */
  append(t) {
    this.holderElement = t, this.container.style.transformOrigin = "0 0", this.data && (this.calculateSize(), this.load(), this.updateContentSize(), this.appendHeavy(), this.holderElement.appendChild(this.container), this.zoomAndPanToInitial(), this.pswp.dispatch("firstZoomPan", {
      slide: this
    }), this.applyCurrentZoomPan(), this.pswp.dispatch("afterSetContent", {
      slide: this
    }), this.isActive && this.activate());
  }
  load() {
    this.content.load(!1), this.pswp.dispatch("slideLoad", {
      slide: this
    });
  }
  /**
   * Append "heavy" DOM elements
   *
   * This may depend on a type of slide,
   * but generally these are large images.
   */
  appendHeavy() {
    const {
      pswp: t
    } = this;
    this.heavyAppended || !t.opener.isOpen || t.mainScroll.isShifted() || !this.isActive && !1 || this.pswp.dispatch("appendHeavy", {
      slide: this
    }).defaultPrevented || (this.heavyAppended = !0, this.content.append(), this.pswp.dispatch("appendHeavyContent", {
      slide: this
    }));
  }
  /**
   * Triggered when this slide is active (selected).
   *
   * If it's part of opening/closing transition -
   * activate() will trigger after the transition is ended.
   */
  activate() {
    this.isActive = !0, this.appendHeavy(), this.content.activate(), this.pswp.dispatch("slideActivate", {
      slide: this
    });
  }
  /**
   * Triggered when this slide becomes inactive.
   *
   * Slide can become inactive only after it was active.
   */
  deactivate() {
    this.isActive = !1, this.content.deactivate(), this.currZoomLevel !== this.zoomLevels.initial && this.calculateSize(), this.currentResolution = 0, this.zoomAndPanToInitial(), this.applyCurrentZoomPan(), this.updateContentSize(), this.pswp.dispatch("slideDeactivate", {
      slide: this
    });
  }
  /**
   * The slide should destroy itself, it will never be used again.
   * (unbind all events and destroy internal components)
   */
  destroy() {
    this.content.hasSlide = !1, this.content.remove(), this.container.remove(), this.pswp.dispatch("slideDestroy", {
      slide: this
    });
  }
  resize() {
    this.currZoomLevel === this.zoomLevels.initial || !this.isActive ? (this.calculateSize(), this.currentResolution = 0, this.zoomAndPanToInitial(), this.applyCurrentZoomPan(), this.updateContentSize()) : (this.calculateSize(), this.bounds.update(this.currZoomLevel), this.panTo(this.pan.x, this.pan.y));
  }
  /**
   * Apply size to current slide content,
   * based on the current resolution and scale.
   *
   * @param {boolean} [force] if size should be updated even if dimensions weren't changed
   */
  updateContentSize(t) {
    const i = this.currentResolution || this.zoomLevels.initial;
    if (!i)
      return;
    const e = Math.round(this.width * i) || this.pswp.viewportSize.x, s = Math.round(this.height * i) || this.pswp.viewportSize.y;
    !this.sizeChanged(e, s) && !t || this.content.setDisplayedSize(e, s);
  }
  /**
   * @param {number} width
   * @param {number} height
   */
  sizeChanged(t, i) {
    return t !== this.prevDisplayedWidth || i !== this.prevDisplayedHeight ? (this.prevDisplayedWidth = t, this.prevDisplayedHeight = i, !0) : !1;
  }
  /** @returns {HTMLImageElement | HTMLDivElement | null | undefined} */
  getPlaceholderElement() {
    var t;
    return (t = this.content.placeholder) === null || t === void 0 ? void 0 : t.element;
  }
  /**
   * Zoom current slide image to...
   *
   * @param {number} destZoomLevel Destination zoom level.
   * @param {Point} [centerPoint]
   * Transform origin center point, or false if viewport center should be used.
   * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
   * @param {boolean} [ignoreBounds] Minimum and maximum zoom levels will be ignored.
   */
  zoomTo(t, i, e, s) {
    const {
      pswp: n
    } = this;
    if (!this.isZoomable() || n.mainScroll.isShifted())
      return;
    n.dispatch("beforeZoomTo", {
      destZoomLevel: t,
      centerPoint: i,
      transitionDuration: e
    }), n.animations.stopAllPan();
    const o = this.currZoomLevel;
    s || (t = b(t, this.zoomLevels.min, this.zoomLevels.max)), this.setZoomLevel(t), this.pan.x = this.calculateZoomToPanOffset("x", i, o), this.pan.y = this.calculateZoomToPanOffset("y", i, o), M(this.pan);
    const a = () => {
      this._setResolution(t), this.applyCurrentZoomPan();
    };
    e ? n.animations.startTransition({
      isPan: !0,
      name: "zoomTo",
      target: this.container,
      transform: this.getCurrentTransform(),
      onComplete: a,
      duration: e,
      easing: n.options.easing
    }) : a();
  }
  /**
   * @param {Point} [centerPoint]
   */
  toggleZoom(t) {
    this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, t, this.pswp.options.zoomAnimationDuration);
  }
  /**
   * Updates zoom level property and recalculates new pan bounds,
   * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
   *
   * @param {number} currZoomLevel
   */
  setZoomLevel(t) {
    this.currZoomLevel = t, this.bounds.update(this.currZoomLevel);
  }
  /**
   * Get pan position after zoom at a given `point`.
   *
   * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
   * pan bounds according to the new zoom level.
   *
   * @param {'x' | 'y'} axis
   * @param {Point} [point]
   * point based on which zoom is performed, usually refers to the current mouse position,
   * if false - viewport center will be used.
   * @param {number} [prevZoomLevel] Zoom level before new zoom was applied.
   * @returns {number}
   */
  calculateZoomToPanOffset(t, i, e) {
    if (this.bounds.max[t] - this.bounds.min[t] === 0)
      return this.bounds.center[t];
    i || (i = this.pswp.getViewportCenterPoint()), e || (e = this.zoomLevels.initial);
    const n = this.currZoomLevel / e;
    return this.bounds.correctPan(t, (this.pan[t] - i[t]) * n + i[t]);
  }
  /**
   * Apply pan and keep it within bounds.
   *
   * @param {number} panX
   * @param {number} panY
   */
  panTo(t, i) {
    this.pan.x = this.bounds.correctPan("x", t), this.pan.y = this.bounds.correctPan("y", i), this.applyCurrentZoomPan();
  }
  /**
   * If the slide in the current state can be panned by the user
   * @returns {boolean}
   */
  isPannable() {
    return !!this.width && this.currZoomLevel > this.zoomLevels.fit;
  }
  /**
   * If the slide can be zoomed
   * @returns {boolean}
   */
  isZoomable() {
    return !!this.width && this.content.isZoomable();
  }
  /**
   * Apply transform and scale based on
   * the current pan position (this.pan) and zoom level (this.currZoomLevel)
   */
  applyCurrentZoomPan() {
    this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel), this === this.pswp.currSlide && this.pswp.dispatch("zoomPanUpdate", {
      slide: this
    });
  }
  zoomAndPanToInitial() {
    this.currZoomLevel = this.zoomLevels.initial, this.bounds.update(this.currZoomLevel), p(this.pan, this.bounds.center), this.pswp.dispatch("initialZoomPan", {
      slide: this
    });
  }
  /**
   * Set translate and scale based on current resolution
   *
   * @param {number} x
   * @param {number} y
   * @param {number} zoom
   * @private
   */
  _applyZoomTransform(t, i, e) {
    e /= this.currentResolution || this.zoomLevels.initial, y(this.container, t, i, e);
  }
  calculateSize() {
    const {
      pswp: t
    } = this;
    p(this.panAreaSize, N(t.options, t.viewportSize, this.data, this.index)), this.zoomLevels.update(this.width, this.height, this.panAreaSize), t.dispatch("calcSlideSize", {
      slide: this
    });
  }
  /** @returns {string} */
  getCurrentTransform() {
    const t = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
    return I(this.pan.x, this.pan.y, t);
  }
  /**
   * Set resolution and re-render the image.
   *
   * For example, if the real image size is 2000x1500,
   * and resolution is 0.5 - it will be rendered as 1000x750.
   *
   * Image with zoom level 2 and resolution 0.5 is
   * the same as image with zoom level 1 and resolution 1.
   *
   * Used to optimize animations and make
   * sure that browser renders image in the highest quality.
   * Also used by responsive images to load the correct one.
   *
   * @param {number} newResolution
   */
  _setResolution(t) {
    t !== this.currentResolution && (this.currentResolution = t, this.updateContentSize(), this.pswp.dispatch("resolutionChanged"));
  }
}
const Q = 0.35, J = 0.6, z = 0.4, E = 0.5;
function tt(r, t) {
  return r * t / (1 - t);
}
class it {
  /**
   * @param {Gestures} gestures
   */
  constructor(t) {
    this.gestures = t, this.pswp = t.pswp, this.startPan = {
      x: 0,
      y: 0
    };
  }
  start() {
    this.pswp.currSlide && p(this.startPan, this.pswp.currSlide.pan), this.pswp.animations.stopAll();
  }
  change() {
    const {
      p1: t,
      prevP1: i,
      dragAxis: e
    } = this.gestures, {
      currSlide: s
    } = this.pswp;
    if (e === "y" && this.pswp.options.closeOnVerticalDrag && s && s.currZoomLevel <= s.zoomLevels.fit && !this.gestures.isMultitouch) {
      const n = s.pan.y + (t.y - i.y);
      if (!this.pswp.dispatch("verticalDrag", {
        panY: n
      }).defaultPrevented) {
        this._setPanWithFriction("y", n, J);
        const o = 1 - Math.abs(this._getVerticalDragRatio(s.pan.y));
        this.pswp.applyBgOpacity(o), s.applyCurrentZoomPan();
      }
    } else
      this._panOrMoveMainScroll("x") || (this._panOrMoveMainScroll("y"), s && (M(s.pan), s.applyCurrentZoomPan()));
  }
  end() {
    const {
      velocity: t
    } = this.gestures, {
      mainScroll: i,
      currSlide: e
    } = this.pswp;
    let s = 0;
    if (this.pswp.animations.stopAll(), i.isShifted()) {
      const o = (i.x - i.getCurrSlideX()) / this.pswp.viewportSize.x;
      t.x < -E && o < 0 || t.x < 0.1 && o < -0.5 ? (s = 1, t.x = Math.min(t.x, 0)) : (t.x > E && o > 0 || t.x > -0.1 && o > 0.5) && (s = -1, t.x = Math.max(t.x, 0)), i.moveIndexBy(s, !0, t.x);
    }
    e && e.currZoomLevel > e.zoomLevels.max || this.gestures.isMultitouch ? this.gestures.zoomLevels.correctZoomPan(!0) : (this._finishPanGestureForAxis("x"), this._finishPanGestureForAxis("y"));
  }
  /**
   * @private
   * @param {'x' | 'y'} axis
   */
  _finishPanGestureForAxis(t) {
    const {
      velocity: i
    } = this.gestures, {
      currSlide: e
    } = this.pswp;
    if (!e)
      return;
    const {
      pan: s,
      bounds: n
    } = e, o = s[t], a = this.pswp.bgOpacity < 1 && t === "y", l = o + tt(i[t], 0.995);
    if (a) {
      const v = this._getVerticalDragRatio(o), w = this._getVerticalDragRatio(l);
      if (v < 0 && w < -z || v > 0 && w > z) {
        this.pswp.close();
        return;
      }
    }
    const c = n.correctPan(t, l);
    if (o === c)
      return;
    const d = c === l ? 1 : 0.82, u = this.pswp.bgOpacity, m = c - o;
    this.pswp.animations.startSpring({
      name: "panGesture" + t,
      isPan: !0,
      start: o,
      end: c,
      velocity: i[t],
      dampingRatio: d,
      onUpdate: (v) => {
        if (a && this.pswp.bgOpacity < 1) {
          const w = 1 - (c - v) / m;
          this.pswp.applyBgOpacity(b(u + (1 - u) * w, 0, 1));
        }
        s[t] = Math.floor(v), e.applyCurrentZoomPan();
      }
    });
  }
  /**
   * Update position of the main scroll,
   * or/and update pan position of the current slide.
   *
   * Should return true if it changes (or can change) main scroll.
   *
   * @private
   * @param {'x' | 'y'} axis
   * @returns {boolean}
   */
  _panOrMoveMainScroll(t) {
    const {
      p1: i,
      dragAxis: e,
      prevP1: s,
      isMultitouch: n
    } = this.gestures, {
      currSlide: o,
      mainScroll: a
    } = this.pswp, h = i[t] - s[t], l = a.x + h;
    if (!h || !o)
      return !1;
    if (t === "x" && !o.isPannable() && !n)
      return a.moveTo(l, !0), !0;
    const {
      bounds: c
    } = o, d = o.pan[t] + h;
    if (this.pswp.options.allowPanToNext && e === "x" && t === "x" && !n) {
      const u = a.getCurrSlideX(), m = a.x - u, v = h > 0, w = !v;
      if (d > c.min[t] && v) {
        if (c.min[t] <= this.startPan[t])
          return a.moveTo(l, !0), !0;
        this._setPanWithFriction(t, d);
      } else if (d < c.max[t] && w) {
        if (this.startPan[t] <= c.max[t])
          return a.moveTo(l, !0), !0;
        this._setPanWithFriction(t, d);
      } else if (m !== 0) {
        if (m > 0)
          return a.moveTo(Math.max(l, u), !0), !0;
        if (m < 0)
          return a.moveTo(Math.min(l, u), !0), !0;
      } else
        this._setPanWithFriction(t, d);
    } else
      t === "y" ? !a.isShifted() && c.min.y !== c.max.y && this._setPanWithFriction(t, d) : this._setPanWithFriction(t, d);
    return !1;
  }
  // If we move above - the ratio is negative
  // If we move below the ratio is positive
  /**
   * Relation between pan Y position and third of viewport height.
   *
   * When we are at initial position (center bounds) - the ratio is 0,
   * if position is shifted upwards - the ratio is negative,
   * if position is shifted downwards - the ratio is positive.
   *
   * @private
   * @param {number} panY The current pan Y position.
   * @returns {number}
   */
  _getVerticalDragRatio(t) {
    var i, e;
    return (t - ((i = (e = this.pswp.currSlide) === null || e === void 0 ? void 0 : e.bounds.center.y) !== null && i !== void 0 ? i : 0)) / (this.pswp.viewportSize.y / 3);
  }
  /**
   * Set pan position of the current slide.
   * Apply friction if the position is beyond the pan bounds,
   * or if custom friction is defined.
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} potentialPan
   * @param {number} [customFriction] (0.1 - 1)
   */
  _setPanWithFriction(t, i, e) {
    const {
      currSlide: s
    } = this.pswp;
    if (!s)
      return;
    const {
      pan: n,
      bounds: o
    } = s;
    if (o.correctPan(t, i) !== i || e) {
      const h = Math.round(i - n[t]);
      n[t] += h * (e || Q);
    } else
      n[t] = i;
  }
}
const et = 0.05, st = 0.15;
function O(r, t, i) {
  return r.x = (t.x + i.x) / 2, r.y = (t.y + i.y) / 2, r;
}
class nt {
  /**
   * @param {Gestures} gestures
   */
  constructor(t) {
    this.gestures = t, this._startPan = {
      x: 0,
      y: 0
    }, this._startZoomPoint = {
      x: 0,
      y: 0
    }, this._zoomPoint = {
      x: 0,
      y: 0
    }, this._wasOverFitZoomLevel = !1, this._startZoomLevel = 1;
  }
  start() {
    const {
      currSlide: t
    } = this.gestures.pswp;
    t && (this._startZoomLevel = t.currZoomLevel, p(this._startPan, t.pan)), this.gestures.pswp.animations.stopAllPan(), this._wasOverFitZoomLevel = !1;
  }
  change() {
    const {
      p1: t,
      startP1: i,
      p2: e,
      startP2: s,
      pswp: n
    } = this.gestures, {
      currSlide: o
    } = n;
    if (!o)
      return;
    const a = o.zoomLevels.min, h = o.zoomLevels.max;
    if (!o.isZoomable() || n.mainScroll.isShifted())
      return;
    O(this._startZoomPoint, i, s), O(this._zoomPoint, t, e);
    let l = 1 / A(i, s) * A(t, e) * this._startZoomLevel;
    if (l > o.zoomLevels.initial + o.zoomLevels.initial / 15 && (this._wasOverFitZoomLevel = !0), l < a)
      if (n.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= o.zoomLevels.initial) {
        const c = 1 - (a - l) / (a / 1.2);
        n.dispatch("pinchClose", {
          bgOpacity: c
        }).defaultPrevented || n.applyBgOpacity(c);
      } else
        l = a - (a - l) * st;
    else l > h && (l = h + (l - h) * et);
    o.pan.x = this._calculatePanForZoomLevel("x", l), o.pan.y = this._calculatePanForZoomLevel("y", l), o.setZoomLevel(l), o.applyCurrentZoomPan();
  }
  end() {
    const {
      pswp: t
    } = this.gestures, {
      currSlide: i
    } = t;
    (!i || i.currZoomLevel < i.zoomLevels.initial) && !this._wasOverFitZoomLevel && t.options.pinchToClose ? t.close() : this.correctZoomPan();
  }
  /**
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} currZoomLevel
   * @returns {number}
   */
  _calculatePanForZoomLevel(t, i) {
    const e = i / this._startZoomLevel;
    return this._zoomPoint[t] - (this._startZoomPoint[t] - this._startPan[t]) * e;
  }
  /**
   * Correct currZoomLevel and pan if they are
   * beyond minimum or maximum values.
   * With animation.
   *
   * @param {boolean} [ignoreGesture]
   * Wether gesture coordinates should be ignored when calculating destination pan position.
   */
  correctZoomPan(t) {
    const {
      pswp: i
    } = this.gestures, {
      currSlide: e
    } = i;
    if (!(e != null && e.isZoomable()))
      return;
    this._zoomPoint.x === 0 && (t = !0);
    const s = e.currZoomLevel;
    let n, o = !0;
    s < e.zoomLevels.initial ? n = e.zoomLevels.initial : s > e.zoomLevels.max ? n = e.zoomLevels.max : (o = !1, n = s);
    const a = i.bgOpacity, h = i.bgOpacity < 1, l = p({
      x: 0,
      y: 0
    }, e.pan);
    let c = p({
      x: 0,
      y: 0
    }, l);
    t && (this._zoomPoint.x = 0, this._zoomPoint.y = 0, this._startZoomPoint.x = 0, this._startZoomPoint.y = 0, this._startZoomLevel = s, p(this._startPan, l)), o && (c = {
      x: this._calculatePanForZoomLevel("x", n),
      y: this._calculatePanForZoomLevel("y", n)
    }), e.setZoomLevel(n), c = {
      x: e.bounds.correctPan("x", c.x),
      y: e.bounds.correctPan("y", c.y)
    }, e.setZoomLevel(s);
    const d = !x(c, l);
    if (!d && !o && !h) {
      e._setResolution(n), e.applyCurrentZoomPan();
      return;
    }
    i.animations.stopAllPan(), i.animations.startSpring({
      isPan: !0,
      start: 0,
      end: 1e3,
      velocity: 0,
      dampingRatio: 1,
      naturalFrequency: 40,
      onUpdate: (u) => {
        if (u /= 1e3, d || o) {
          if (d && (e.pan.x = l.x + (c.x - l.x) * u, e.pan.y = l.y + (c.y - l.y) * u), o) {
            const m = s + (n - s) * u;
            e.setZoomLevel(m);
          }
          e.applyCurrentZoomPan();
        }
        h && i.bgOpacity < 1 && i.applyBgOpacity(b(a + (1 - a) * u, 0, 1));
      },
      onComplete: () => {
        e._setResolution(n), e.applyCurrentZoomPan();
      }
    });
  }
}
function Z(r) {
  return !!/** @type {HTMLElement} */
  r.target.closest(".pswp__container");
}
class ot {
  /**
   * @param {Gestures} gestures
   */
  constructor(t) {
    this.gestures = t;
  }
  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  click(t, i) {
    const e = (
      /** @type {HTMLElement} */
      i.target.classList
    ), s = e.contains("pswp__img"), n = e.contains("pswp__item") || e.contains("pswp__zoom-wrap");
    s ? this._doClickOrTapAction("imageClick", t, i) : n && this._doClickOrTapAction("bgClick", t, i);
  }
  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  tap(t, i) {
    Z(i) && this._doClickOrTapAction("tap", t, i);
  }
  /**
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  doubleTap(t, i) {
    Z(i) && this._doClickOrTapAction("doubleTap", t, i);
  }
  /**
   * @private
   * @param {Actions} actionName
   * @param {Point} point
   * @param {PointerEvent} originalEvent
   */
  _doClickOrTapAction(t, i, e) {
    var s;
    const {
      pswp: n
    } = this.gestures, {
      currSlide: o
    } = n, a = (
      /** @type {AddPostfix<Actions, 'Action'>} */
      t + "Action"
    ), h = n.options[a];
    if (!n.dispatch(a, {
      point: i,
      originalEvent: e
    }).defaultPrevented) {
      if (typeof h == "function") {
        h.call(n, i, e);
        return;
      }
      switch (h) {
        case "close":
        case "next":
          n[h]();
          break;
        case "zoom":
          o == null || o.toggleZoom(i);
          break;
        case "zoom-or-close":
          o != null && o.isZoomable() && o.zoomLevels.secondary !== o.zoomLevels.initial ? o.toggleZoom(i) : n.options.clickToCloseNonZoomable && n.close();
          break;
        case "toggle-controls":
          (s = this.gestures.pswp.element) === null || s === void 0 || s.classList.toggle("pswp--ui-visible");
          break;
      }
    }
  }
}
const rt = 10, at = 300, ht = 25;
class lt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.dragAxis = null, this.p1 = {
      x: 0,
      y: 0
    }, this.p2 = {
      x: 0,
      y: 0
    }, this.prevP1 = {
      x: 0,
      y: 0
    }, this.prevP2 = {
      x: 0,
      y: 0
    }, this.startP1 = {
      x: 0,
      y: 0
    }, this.startP2 = {
      x: 0,
      y: 0
    }, this.velocity = {
      x: 0,
      y: 0
    }, this._lastStartP1 = {
      x: 0,
      y: 0
    }, this._intervalP1 = {
      x: 0,
      y: 0
    }, this._numActivePoints = 0, this._ongoingPointers = [], this._touchEventEnabled = "ontouchstart" in window, this._pointerEventEnabled = !!window.PointerEvent, this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1, this._numActivePoints = 0, this._intervalTime = 0, this._velocityCalculated = !1, this.isMultitouch = !1, this.isDragging = !1, this.isZooming = !1, this.raf = null, this._tapTimer = null, this.supportsTouch || (t.options.allowPanToNext = !1), this.drag = new it(this), this.zoomLevels = new nt(this), this.tapHandler = new ot(this), t.on("bindEvents", () => {
      t.events.add(
        t.scrollWrap,
        "click",
        /** @type EventListener */
        this._onClick.bind(this)
      ), this._pointerEventEnabled ? this._bindEvents("pointer", "down", "up", "cancel") : this._touchEventEnabled ? (this._bindEvents("touch", "start", "end", "cancel"), t.scrollWrap && (t.scrollWrap.ontouchmove = () => {
      }, t.scrollWrap.ontouchend = () => {
      })) : this._bindEvents("mouse", "down", "up");
    });
  }
  /**
   * @private
   * @param {'mouse' | 'touch' | 'pointer'} pref
   * @param {'down' | 'start'} down
   * @param {'up' | 'end'} up
   * @param {'cancel'} [cancel]
   */
  _bindEvents(t, i, e, s) {
    const {
      pswp: n
    } = this, {
      events: o
    } = n, a = s ? t + s : "";
    o.add(
      n.scrollWrap,
      t + i,
      /** @type EventListener */
      this.onPointerDown.bind(this)
    ), o.add(
      window,
      t + "move",
      /** @type EventListener */
      this.onPointerMove.bind(this)
    ), o.add(
      window,
      t + e,
      /** @type EventListener */
      this.onPointerUp.bind(this)
    ), a && o.add(
      n.scrollWrap,
      a,
      /** @type EventListener */
      this.onPointerUp.bind(this)
    );
  }
  /**
   * @param {PointerEvent} e
   */
  onPointerDown(t) {
    const i = t.type === "mousedown" || t.pointerType === "mouse";
    if (i && t.button > 0)
      return;
    const {
      pswp: e
    } = this;
    if (!e.opener.isOpen) {
      t.preventDefault();
      return;
    }
    e.dispatch("pointerDown", {
      originalEvent: t
    }).defaultPrevented || (i && (e.mouseDetected(), this._preventPointerEventBehaviour(t, "down")), e.animations.stopAll(), this._updatePoints(t, "down"), this._numActivePoints === 1 && (this.dragAxis = null, p(this.startP1, this.p1)), this._numActivePoints > 1 ? (this._clearTapTimer(), this.isMultitouch = !0) : this.isMultitouch = !1);
  }
  /**
   * @param {PointerEvent} e
   */
  onPointerMove(t) {
    this._preventPointerEventBehaviour(t, "move"), this._numActivePoints && (this._updatePoints(t, "move"), !this.pswp.dispatch("pointerMove", {
      originalEvent: t
    }).defaultPrevented && (this._numActivePoints === 1 && !this.isDragging ? (this.dragAxis || this._calculateDragDirection(), this.dragAxis && !this.isDragging && (this.isZooming && (this.isZooming = !1, this.zoomLevels.end()), this.isDragging = !0, this._clearTapTimer(), this._updateStartPoints(), this._intervalTime = Date.now(), this._velocityCalculated = !1, p(this._intervalP1, this.p1), this.velocity.x = 0, this.velocity.y = 0, this.drag.start(), this._rafStopLoop(), this._rafRenderLoop())) : this._numActivePoints > 1 && !this.isZooming && (this._finishDrag(), this.isZooming = !0, this._updateStartPoints(), this.zoomLevels.start(), this._rafStopLoop(), this._rafRenderLoop())));
  }
  /**
   * @private
   */
  _finishDrag() {
    this.isDragging && (this.isDragging = !1, this._velocityCalculated || this._updateVelocity(!0), this.drag.end(), this.dragAxis = null);
  }
  /**
   * @param {PointerEvent} e
   */
  onPointerUp(t) {
    this._numActivePoints && (this._updatePoints(t, "up"), !this.pswp.dispatch("pointerUp", {
      originalEvent: t
    }).defaultPrevented && (this._numActivePoints === 0 && (this._rafStopLoop(), this.isDragging ? this._finishDrag() : !this.isZooming && !this.isMultitouch && this._finishTap(t)), this._numActivePoints < 2 && this.isZooming && (this.isZooming = !1, this.zoomLevels.end(), this._numActivePoints === 1 && (this.dragAxis = null, this._updateStartPoints()))));
  }
  /**
   * @private
   */
  _rafRenderLoop() {
    (this.isDragging || this.isZooming) && (this._updateVelocity(), this.isDragging ? x(this.p1, this.prevP1) || this.drag.change() : (!x(this.p1, this.prevP1) || !x(this.p2, this.prevP2)) && this.zoomLevels.change(), this._updatePrevPoints(), this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this)));
  }
  /**
   * Update velocity at 50ms interval
   *
   * @private
   * @param {boolean} [force]
   */
  _updateVelocity(t) {
    const i = Date.now(), e = i - this._intervalTime;
    e < 50 && !t || (this.velocity.x = this._getVelocity("x", e), this.velocity.y = this._getVelocity("y", e), this._intervalTime = i, p(this._intervalP1, this.p1), this._velocityCalculated = !0);
  }
  /**
   * @private
   * @param {PointerEvent} e
   */
  _finishTap(t) {
    const {
      mainScroll: i
    } = this.pswp;
    if (i.isShifted()) {
      i.moveIndexBy(0, !0);
      return;
    }
    if (t.type.indexOf("cancel") > 0)
      return;
    if (t.type === "mouseup" || t.pointerType === "mouse") {
      this.tapHandler.click(this.startP1, t);
      return;
    }
    const e = this.pswp.options.doubleTapAction ? at : 0;
    this._tapTimer ? (this._clearTapTimer(), A(this._lastStartP1, this.startP1) < ht && this.tapHandler.doubleTap(this.startP1, t)) : (p(this._lastStartP1, this.startP1), this._tapTimer = setTimeout(() => {
      this.tapHandler.tap(this.startP1, t), this._clearTapTimer();
    }, e));
  }
  /**
   * @private
   */
  _clearTapTimer() {
    this._tapTimer && (clearTimeout(this._tapTimer), this._tapTimer = null);
  }
  /**
   * Get velocity for axis
   *
   * @private
   * @param {'x' | 'y'} axis
   * @param {number} duration
   * @returns {number}
   */
  _getVelocity(t, i) {
    const e = this.p1[t] - this._intervalP1[t];
    return Math.abs(e) > 1 && i > 5 ? e / i : 0;
  }
  /**
   * @private
   */
  _rafStopLoop() {
    this.raf && (cancelAnimationFrame(this.raf), this.raf = null);
  }
  /**
   * @private
   * @param {PointerEvent} e
   * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
   */
  _preventPointerEventBehaviour(t, i) {
    this.pswp.applyFilters("preventPointerEvent", !0, t, i) && t.preventDefault();
  }
  /**
   * Parses and normalizes points from the touch, mouse or pointer event.
   * Updates p1 and p2.
   *
   * @private
   * @param {PointerEvent | TouchEvent} e
   * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
   */
  _updatePoints(t, i) {
    if (this._pointerEventEnabled) {
      const e = (
        /** @type {PointerEvent} */
        t
      ), s = this._ongoingPointers.findIndex((n) => n.id === e.pointerId);
      i === "up" && s > -1 ? this._ongoingPointers.splice(s, 1) : i === "down" && s === -1 ? this._ongoingPointers.push(this._convertEventPosToPoint(e, {
        x: 0,
        y: 0
      })) : s > -1 && this._convertEventPosToPoint(e, this._ongoingPointers[s]), this._numActivePoints = this._ongoingPointers.length, this._numActivePoints > 0 && p(this.p1, this._ongoingPointers[0]), this._numActivePoints > 1 && p(this.p2, this._ongoingPointers[1]);
    } else {
      const e = (
        /** @type {TouchEvent} */
        t
      );
      this._numActivePoints = 0, e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (this._convertEventPosToPoint(e.touches[0], this.p1), this._numActivePoints++, e.touches.length > 1 && (this._convertEventPosToPoint(e.touches[1], this.p2), this._numActivePoints++)) : (this._convertEventPosToPoint(
        /** @type {PointerEvent} */
        t,
        this.p1
      ), i === "up" ? this._numActivePoints = 0 : this._numActivePoints++);
    }
  }
  /** update points that were used during previous rAF tick
   * @private
   */
  _updatePrevPoints() {
    p(this.prevP1, this.p1), p(this.prevP2, this.p2);
  }
  /** update points at the start of gesture
   * @private
   */
  _updateStartPoints() {
    p(this.startP1, this.p1), p(this.startP2, this.p2), this._updatePrevPoints();
  }
  /** @private */
  _calculateDragDirection() {
    if (this.pswp.mainScroll.isShifted())
      this.dragAxis = "x";
    else {
      const t = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
      if (t !== 0) {
        const i = t > 0 ? "x" : "y";
        Math.abs(this.p1[i] - this.startP1[i]) >= rt && (this.dragAxis = i);
      }
    }
  }
  /**
   * Converts touch, pointer or mouse event
   * to PhotoSwipe point.
   *
   * @private
   * @param {Touch | PointerEvent} e
   * @param {Point} p
   * @returns {Point}
   */
  _convertEventPosToPoint(t, i) {
    return i.x = t.pageX - this.pswp.offset.x, i.y = t.pageY - this.pswp.offset.y, "pointerId" in t ? i.id = t.pointerId : t.identifier !== void 0 && (i.id = t.identifier), i;
  }
  /**
   * @private
   * @param {PointerEvent} e
   */
  _onClick(t) {
    this.pswp.mainScroll.isShifted() && (t.preventDefault(), t.stopPropagation());
  }
}
const ct = 0.35;
class dt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.x = 0, this.slideWidth = 0, this._currPositionIndex = 0, this._prevPositionIndex = 0, this._containerShiftIndex = -1, this.itemHolders = [];
  }
  /**
   * Position the scroller and slide containers
   * according to viewport size.
   *
   * @param {boolean} [resizeSlides] Whether slides content should resized
   */
  resize(t) {
    const {
      pswp: i
    } = this, e = Math.round(i.viewportSize.x + i.viewportSize.x * i.options.spacing), s = e !== this.slideWidth;
    s && (this.slideWidth = e, this.moveTo(this.getCurrSlideX())), this.itemHolders.forEach((n, o) => {
      s && y(n.el, (o + this._containerShiftIndex) * this.slideWidth), t && n.slide && n.slide.resize();
    });
  }
  /**
   * Reset X position of the main scroller to zero
   */
  resetPosition() {
    this._currPositionIndex = 0, this._prevPositionIndex = 0, this.slideWidth = 0, this._containerShiftIndex = -1;
  }
  /**
   * Create and append array of three items
   * that hold data about slides in DOM
   */
  appendHolders() {
    this.itemHolders = [];
    for (let t = 0; t < 3; t++) {
      const i = f("pswp__item", "div", this.pswp.container);
      i.setAttribute("role", "group"), i.setAttribute("aria-roledescription", "slide"), i.setAttribute("aria-hidden", "true"), i.style.display = t === 1 ? "block" : "none", this.itemHolders.push({
        el: i
        //index: -1
      });
    }
  }
  /**
   * Whether the main scroll can be horizontally swiped to the next or previous slide.
   * @returns {boolean}
   */
  canBeSwiped() {
    return this.pswp.getNumItems() > 1;
  }
  /**
   * Move main scroll by X amount of slides.
   * For example:
   *   `-1` will move to the previous slide,
   *    `0` will reset the scroll position of the current slide,
   *    `3` will move three slides forward
   *
   * If loop option is enabled - index will be automatically looped too,
   * (for example `-1` will move to the last slide of the gallery).
   *
   * @param {number} diff
   * @param {boolean} [animate]
   * @param {number} [velocityX]
   * @returns {boolean} whether index was changed or not
   */
  moveIndexBy(t, i, e) {
    const {
      pswp: s
    } = this;
    let n = s.potentialIndex + t;
    const o = s.getNumItems();
    if (s.canLoop()) {
      n = s.getLoopedIndex(n);
      const h = (t + o) % o;
      h <= o / 2 ? t = h : t = h - o;
    } else
      n < 0 ? n = 0 : n >= o && (n = o - 1), t = n - s.potentialIndex;
    s.potentialIndex = n, this._currPositionIndex -= t, s.animations.stopMainScroll();
    const a = this.getCurrSlideX();
    if (!i)
      this.moveTo(a), this.updateCurrItem();
    else {
      s.animations.startSpring({
        isMainScroll: !0,
        start: this.x,
        end: a,
        velocity: e || 0,
        naturalFrequency: 30,
        dampingRatio: 1,
        //0.7,
        onUpdate: (l) => {
          this.moveTo(l);
        },
        onComplete: () => {
          this.updateCurrItem(), s.appendHeavy();
        }
      });
      let h = s.potentialIndex - s.currIndex;
      if (s.canLoop()) {
        const l = (h + o) % o;
        l <= o / 2 ? h = l : h = l - o;
      }
      Math.abs(h) > 1 && this.updateCurrItem();
    }
    return !!t;
  }
  /**
   * X position of the main scroll for the current slide
   * (ignores position during dragging)
   * @returns {number}
   */
  getCurrSlideX() {
    return this.slideWidth * this._currPositionIndex;
  }
  /**
   * Whether scroll position is shifted.
   * For example, it will return true if the scroll is being dragged or animated.
   * @returns {boolean}
   */
  isShifted() {
    return this.x !== this.getCurrSlideX();
  }
  /**
   * Update slides X positions and set their content
   */
  updateCurrItem() {
    var t;
    const {
      pswp: i
    } = this, e = this._prevPositionIndex - this._currPositionIndex;
    if (!e)
      return;
    this._prevPositionIndex = this._currPositionIndex, i.currIndex = i.potentialIndex;
    let s = Math.abs(e), n;
    s >= 3 && (this._containerShiftIndex += e + (e > 0 ? -3 : 3), s = 3, this.itemHolders.forEach((o) => {
      var a;
      (a = o.slide) === null || a === void 0 || a.destroy(), o.slide = void 0;
    }));
    for (let o = 0; o < s; o++)
      e > 0 ? (n = this.itemHolders.shift(), n && (this.itemHolders[2] = n, this._containerShiftIndex++, y(n.el, (this._containerShiftIndex + 2) * this.slideWidth), i.setContent(n, i.currIndex - s + o + 2))) : (n = this.itemHolders.pop(), n && (this.itemHolders.unshift(n), this._containerShiftIndex--, y(n.el, this._containerShiftIndex * this.slideWidth), i.setContent(n, i.currIndex + s - o - 2)));
    Math.abs(this._containerShiftIndex) > 50 && !this.isShifted() && (this.resetPosition(), this.resize()), i.animations.stopAllPan(), this.itemHolders.forEach((o, a) => {
      o.slide && o.slide.setIsActive(a === 1);
    }), i.currSlide = (t = this.itemHolders[1]) === null || t === void 0 ? void 0 : t.slide, i.contentLoader.updateLazy(e), i.currSlide && i.currSlide.applyCurrentZoomPan(), i.dispatch("change");
  }
  /**
   * Move the X position of the main scroll container
   *
   * @param {number} x
   * @param {boolean} [dragging]
   */
  moveTo(t, i) {
    if (!this.pswp.canLoop() && i) {
      let e = (this.slideWidth * this._currPositionIndex - t) / this.slideWidth;
      e += this.pswp.currIndex;
      const s = Math.round(t - this.x);
      (e < 0 && s > 0 || e >= this.pswp.getNumItems() - 1 && s < 0) && (t = this.x + s * ct);
    }
    this.x = t, this.pswp.container && y(this.pswp.container, t), this.pswp.dispatch("moveMainScroll", {
      x: t,
      dragging: i ?? !1
    });
  }
}
const pt = {
  Escape: 27,
  z: 90,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Tab: 9
}, g = (r, t) => t ? r : pt[r];
class ut {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this._wasFocused = !1, t.on("bindEvents", () => {
      t.options.trapFocus && (t.options.initialPointerPos || this._focusRoot(), t.events.add(
        document,
        "focusin",
        /** @type EventListener */
        this._onFocusIn.bind(this)
      )), t.events.add(
        document,
        "keydown",
        /** @type EventListener */
        this._onKeyDown.bind(this)
      );
    });
    const i = (
      /** @type {HTMLElement} */
      document.activeElement
    );
    t.on("destroy", () => {
      t.options.returnFocus && i && this._wasFocused && i.focus();
    });
  }
  /** @private */
  _focusRoot() {
    !this._wasFocused && this.pswp.element && (this.pswp.element.focus(), this._wasFocused = !0);
  }
  /**
   * @private
   * @param {KeyboardEvent} e
   */
  _onKeyDown(t) {
    const {
      pswp: i
    } = this;
    if (i.dispatch("keydown", {
      originalEvent: t
    }).defaultPrevented || G(t))
      return;
    let e, s, n = !1;
    const o = "key" in t;
    switch (o ? t.key : t.keyCode) {
      case g("Escape", o):
        i.options.escKey && (e = "close");
        break;
      case g("z", o):
        e = "toggleZoom";
        break;
      case g("ArrowLeft", o):
        s = "x";
        break;
      case g("ArrowUp", o):
        s = "y";
        break;
      case g("ArrowRight", o):
        s = "x", n = !0;
        break;
      case g("ArrowDown", o):
        n = !0, s = "y";
        break;
      case g("Tab", o):
        this._focusRoot();
        break;
    }
    if (s) {
      t.preventDefault();
      const {
        currSlide: a
      } = i;
      i.options.arrowKeys && s === "x" && i.getNumItems() > 1 ? e = n ? "next" : "prev" : a && a.currZoomLevel > a.zoomLevels.fit && (a.pan[s] += n ? -80 : 80, a.panTo(a.pan.x, a.pan.y));
    }
    e && (t.preventDefault(), i[e]());
  }
  /**
   * Trap focus inside photoswipe
   *
   * @private
   * @param {FocusEvent} e
   */
  _onFocusIn(t) {
    const {
      template: i
    } = this.pswp;
    i && document !== t.target && i !== t.target && !i.contains(
      /** @type {Node} */
      t.target
    ) && i.focus();
  }
}
const mt = "cubic-bezier(.4,0,.22,1)";
class ft {
  /**
   * onComplete can be unpredictable, be careful about current state
   *
   * @param {CssAnimationProps} props
   */
  constructor(t) {
    var i;
    this.props = t;
    const {
      target: e,
      onComplete: s,
      transform: n,
      onFinish: o = () => {
      },
      duration: a = 333,
      easing: h = mt
    } = t;
    this.onFinish = o;
    const l = n ? "transform" : "opacity", c = (i = t[l]) !== null && i !== void 0 ? i : "";
    this._target = e, this._onComplete = s, this._finished = !1, this._onTransitionEnd = this._onTransitionEnd.bind(this), this._helperTimeout = setTimeout(() => {
      R(e, l, a, h), this._helperTimeout = setTimeout(() => {
        e.addEventListener("transitionend", this._onTransitionEnd, !1), e.addEventListener("transitioncancel", this._onTransitionEnd, !1), this._helperTimeout = setTimeout(() => {
          this._finalizeAnimation();
        }, a + 500), e.style[l] = c;
      }, 30);
    }, 0);
  }
  /**
   * @private
   * @param {TransitionEvent} e
   */
  _onTransitionEnd(t) {
    t.target === this._target && this._finalizeAnimation();
  }
  /**
   * @private
   */
  _finalizeAnimation() {
    this._finished || (this._finished = !0, this.onFinish(), this._onComplete && this._onComplete());
  }
  // Destroy is called automatically onFinish
  destroy() {
    this._helperTimeout && clearTimeout(this._helperTimeout), U(this._target), this._target.removeEventListener("transitionend", this._onTransitionEnd, !1), this._target.removeEventListener("transitioncancel", this._onTransitionEnd, !1), this._finished || this._finalizeAnimation();
  }
}
const _t = 12, vt = 0.75;
class gt {
  /**
   * @param {number} initialVelocity Initial velocity, px per ms.
   *
   * @param {number} [dampingRatio]
   * Determines how bouncy animation will be.
   * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
   * "overshoot" refers to part of animation that
   * goes beyond the final value.
   *
   * @param {number} [naturalFrequency]
   * Determines how fast animation will slow down.
   * The higher value - the stiffer the transition will be,
   * and the faster it will slow down.
   * Recommended value from 10 to 50
   */
  constructor(t, i, e) {
    this.velocity = t * 1e3, this._dampingRatio = i || vt, this._naturalFrequency = e || _t, this._dampedFrequency = this._naturalFrequency, this._dampingRatio < 1 && (this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio));
  }
  /**
   * @param {number} deltaPosition Difference between current and end position of the animation
   * @param {number} deltaTime Frame duration in milliseconds
   *
   * @returns {number} Displacement, relative to the end position.
   */
  easeFrame(t, i) {
    let e = 0, s;
    i /= 1e3;
    const n = Math.E ** (-this._dampingRatio * this._naturalFrequency * i);
    if (this._dampingRatio === 1)
      s = this.velocity + this._naturalFrequency * t, e = (t + s * i) * n, this.velocity = e * -this._naturalFrequency + s * n;
    else if (this._dampingRatio < 1) {
      s = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * t + this.velocity);
      const o = Math.cos(this._dampedFrequency * i), a = Math.sin(this._dampedFrequency * i);
      e = n * (t * o + s * a), this.velocity = e * -this._naturalFrequency * this._dampingRatio + n * (-this._dampedFrequency * t * a + this._dampedFrequency * s * o);
    }
    return e;
  }
}
class yt {
  /**
   * @param {SpringAnimationProps} props
   */
  constructor(t) {
    this.props = t, this._raf = 0;
    const {
      start: i,
      end: e,
      velocity: s,
      onUpdate: n,
      onComplete: o,
      onFinish: a = () => {
      },
      dampingRatio: h,
      naturalFrequency: l
    } = t;
    this.onFinish = a;
    const c = new gt(s, h, l);
    let d = Date.now(), u = i - e;
    const m = () => {
      this._raf && (u = c.easeFrame(u, Date.now() - d), Math.abs(u) < 1 && Math.abs(c.velocity) < 50 ? (n(e), o && o(), this.onFinish()) : (d = Date.now(), n(u + e), this._raf = requestAnimationFrame(m)));
    };
    this._raf = requestAnimationFrame(m);
  }
  // Destroy is called automatically onFinish
  destroy() {
    this._raf >= 0 && cancelAnimationFrame(this._raf), this._raf = 0;
  }
}
class wt {
  constructor() {
    this.activeAnimations = [];
  }
  /**
   * @param {SpringAnimationProps} props
   */
  startSpring(t) {
    this._start(t, !0);
  }
  /**
   * @param {CssAnimationProps} props
   */
  startTransition(t) {
    this._start(t);
  }
  /**
   * @private
   * @param {AnimationProps} props
   * @param {boolean} [isSpring]
   * @returns {Animation}
   */
  _start(t, i) {
    const e = i ? new yt(
      /** @type SpringAnimationProps */
      t
    ) : new ft(
      /** @type CssAnimationProps */
      t
    );
    return this.activeAnimations.push(e), e.onFinish = () => this.stop(e), e;
  }
  /**
   * @param {Animation} animation
   */
  stop(t) {
    t.destroy();
    const i = this.activeAnimations.indexOf(t);
    i > -1 && this.activeAnimations.splice(i, 1);
  }
  stopAll() {
    this.activeAnimations.forEach((t) => {
      t.destroy();
    }), this.activeAnimations = [];
  }
  /**
   * Stop all pan or zoom transitions
   */
  stopAllPan() {
    this.activeAnimations = this.activeAnimations.filter((t) => t.props.isPan ? (t.destroy(), !1) : !0);
  }
  stopMainScroll() {
    this.activeAnimations = this.activeAnimations.filter((t) => t.props.isMainScroll ? (t.destroy(), !1) : !0);
  }
  /**
   * Returns true if main scroll transition is running
   */
  // isMainScrollRunning() {
  //   return this.activeAnimations.some((animation) => {
  //     return animation.props.isMainScroll;
  //   });
  // }
  /**
   * Returns true if any pan or zoom transition is running
   */
  isPanRunning() {
    return this.activeAnimations.some((t) => t.props.isPan);
  }
}
class Pt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, t.events.add(
      t.element,
      "wheel",
      /** @type EventListener */
      this._onWheel.bind(this)
    );
  }
  /**
   * @private
   * @param {WheelEvent} e
   */
  _onWheel(t) {
    t.preventDefault();
    const {
      currSlide: i
    } = this.pswp;
    let {
      deltaX: e,
      deltaY: s
    } = t;
    if (i && !this.pswp.dispatch("wheel", {
      originalEvent: t
    }).defaultPrevented)
      if (t.ctrlKey || this.pswp.options.wheelToZoom) {
        if (i.isZoomable()) {
          let n = -s;
          t.deltaMode === 1 ? n *= 0.05 : n *= t.deltaMode ? 1 : 2e-3, n = 2 ** n;
          const o = i.currZoomLevel * n;
          i.zoomTo(o, {
            x: t.clientX,
            y: t.clientY
          });
        }
      } else
        i.isPannable() && (t.deltaMode === 1 && (e *= 18, s *= 18), i.panTo(i.pan.x - e, i.pan.y - s));
  }
}
function St(r) {
  if (typeof r == "string")
    return r;
  if (!r || !r.isCustomSVG)
    return "";
  const t = r;
  let i = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
  return i = i.split("%d").join(
    /** @type {string} */
    t.size || 32
  ), t.outlineID && (i += '<use class="pswp__icn-shadow" xlink:href="#' + t.outlineID + '"/>'), i += t.inner, i += "</svg>", i;
}
class xt {
  /**
   * @param {PhotoSwipe} pswp
   * @param {UIElementData} data
   */
  constructor(t, i) {
    var e;
    const s = i.name || i.className;
    let n = i.html;
    if (t.options[s] === !1)
      return;
    typeof t.options[s + "SVG"] == "string" && (n = t.options[s + "SVG"]), t.dispatch("uiElementCreate", {
      data: i
    });
    let o = "";
    i.isButton ? (o += "pswp__button ", o += i.className || `pswp__button--${i.name}`) : o += i.className || `pswp__${i.name}`;
    let a = i.isButton ? i.tagName || "button" : i.tagName || "div";
    a = /** @type {keyof HTMLElementTagNameMap} */
    a.toLowerCase();
    const h = f(o, a);
    if (i.isButton) {
      a === "button" && (h.type = "button");
      let {
        title: d
      } = i;
      const {
        ariaLabel: u
      } = i;
      typeof t.options[s + "Title"] == "string" && (d = t.options[s + "Title"]), d && (h.title = d);
      const m = u || d;
      m && h.setAttribute("aria-label", m);
    }
    h.innerHTML = St(n), i.onInit && i.onInit(h, t), i.onClick && (h.onclick = (d) => {
      typeof i.onClick == "string" ? t[i.onClick]() : typeof i.onClick == "function" && i.onClick(d, h, t);
    });
    const l = i.appendTo || "bar";
    let c = t.element;
    l === "bar" ? (t.topBar || (t.topBar = f("pswp__top-bar pswp__hide-on-close", "div", t.scrollWrap)), c = t.topBar) : (h.classList.add("pswp__hide-on-close"), l === "wrapper" && (c = t.scrollWrap)), (e = c) === null || e === void 0 || e.appendChild(t.applyFilters("uiElement", h, i));
  }
}
function H(r, t, i) {
  r.classList.add("pswp__button--arrow"), r.setAttribute("aria-controls", "pswp__items"), t.on("change", () => {
    t.options.loop || (i ? r.disabled = !(t.currIndex < t.getNumItems() - 1) : r.disabled = !(t.currIndex > 0));
  });
}
const It = {
  name: "arrowPrev",
  className: "pswp__button--arrow--prev",
  title: "Previous",
  order: 10,
  isButton: !0,
  appendTo: "wrapper",
  html: {
    isCustomSVG: !0,
    size: 60,
    inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
    outlineID: "pswp__icn-arrow"
  },
  onClick: "prev",
  onInit: H
}, bt = {
  name: "arrowNext",
  className: "pswp__button--arrow--next",
  title: "Next",
  order: 11,
  isButton: !0,
  appendTo: "wrapper",
  html: {
    isCustomSVG: !0,
    size: 60,
    inner: '<use xlink:href="#pswp__icn-arrow"/>',
    outlineID: "pswp__icn-arrow"
  },
  onClick: "next",
  onInit: (r, t) => {
    H(r, t, !0);
  }
}, At = {
  name: "close",
  title: "Close",
  order: 20,
  isButton: !0,
  html: {
    isCustomSVG: !0,
    inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
    outlineID: "pswp__icn-close"
  },
  onClick: "close"
}, Lt = {
  name: "zoom",
  title: "Zoom",
  order: 10,
  isButton: !0,
  html: {
    isCustomSVG: !0,
    // eslint-disable-next-line max-len
    inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
    outlineID: "pswp__icn-zoom"
  },
  onClick: "toggleZoom"
}, Ct = {
  name: "preloader",
  appendTo: "bar",
  order: 7,
  html: {
    isCustomSVG: !0,
    // eslint-disable-next-line max-len
    inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
    outlineID: "pswp__icn-loading"
  },
  onInit: (r, t) => {
    let i, e = null;
    const s = (a, h) => {
      r.classList.toggle("pswp__preloader--" + a, h);
    }, n = (a) => {
      i !== a && (i = a, s("active", a));
    }, o = () => {
      var a;
      if (!((a = t.currSlide) !== null && a !== void 0 && a.content.isLoading())) {
        n(!1), e && (clearTimeout(e), e = null);
        return;
      }
      e || (e = setTimeout(() => {
        var h;
        n(!!(!((h = t.currSlide) === null || h === void 0) && h.content.isLoading())), e = null;
      }, t.options.preloaderDelay));
    };
    t.on("change", o), t.on("loadComplete", (a) => {
      t.currSlide === a.slide && o();
    }), t.ui && (t.ui.updatePreloaderVisibility = o);
  }
}, Tt = {
  name: "counter",
  order: 5,
  onInit: (r, t) => {
    t.on("change", () => {
      r.innerText = t.currIndex + 1 + t.options.indexIndicatorSep + t.getNumItems();
    });
  }
};
function D(r, t) {
  r.classList.toggle("pswp--zoomed-in", t);
}
class zt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.isRegistered = !1, this.uiElementsData = [], this.items = [], this.updatePreloaderVisibility = () => {
    }, this._lastUpdatedZoomLevel = void 0;
  }
  init() {
    const {
      pswp: t
    } = this;
    this.isRegistered = !1, this.uiElementsData = [At, It, bt, Lt, Ct, Tt], t.dispatch("uiRegister"), this.uiElementsData.sort((i, e) => (i.order || 0) - (e.order || 0)), this.items = [], this.isRegistered = !0, this.uiElementsData.forEach((i) => {
      this.registerElement(i);
    }), t.on("change", () => {
      var i;
      (i = t.element) === null || i === void 0 || i.classList.toggle("pswp--one-slide", t.getNumItems() === 1);
    }), t.on("zoomPanUpdate", () => this._onZoomPanUpdate());
  }
  /**
   * @param {UIElementData} elementData
   */
  registerElement(t) {
    this.isRegistered ? this.items.push(new xt(this.pswp, t)) : this.uiElementsData.push(t);
  }
  /**
   * Fired each time zoom or pan position is changed.
   * Update classes that control visibility of zoom button and cursor icon.
   *
   * @private
   */
  _onZoomPanUpdate() {
    const {
      template: t,
      currSlide: i,
      options: e
    } = this.pswp;
    if (this.pswp.opener.isClosing || !t || !i)
      return;
    let {
      currZoomLevel: s
    } = i;
    if (this.pswp.opener.isOpen || (s = i.zoomLevels.initial), s === this._lastUpdatedZoomLevel)
      return;
    this._lastUpdatedZoomLevel = s;
    const n = i.zoomLevels.initial - i.zoomLevels.secondary;
    if (Math.abs(n) < 0.01 || !i.isZoomable()) {
      D(t, !1), t.classList.remove("pswp--zoom-allowed");
      return;
    }
    t.classList.add("pswp--zoom-allowed");
    const o = s === i.zoomLevels.initial ? i.zoomLevels.secondary : i.zoomLevels.initial;
    D(t, o <= s), (e.imageClickAction === "zoom" || e.imageClickAction === "zoom-or-close") && t.classList.add("pswp--click-to-zoom");
  }
}
function Et(r) {
  const t = r.getBoundingClientRect();
  return {
    x: t.left,
    y: t.top,
    w: t.width
  };
}
function Ot(r, t, i) {
  const e = r.getBoundingClientRect(), s = e.width / t, n = e.height / i, o = s > n ? s : n, a = (e.width - t * o) / 2, h = (e.height - i * o) / 2, l = {
    x: e.left + a,
    y: e.top + h,
    w: t * o
  };
  return l.innerRect = {
    w: e.width,
    h: e.height,
    x: a,
    y: h
  }, l;
}
function Zt(r, t, i) {
  const e = i.dispatch("thumbBounds", {
    index: r,
    itemData: t,
    instance: i
  });
  if (e.thumbBounds)
    return e.thumbBounds;
  const {
    element: s
  } = t;
  let n, o;
  if (s && i.options.thumbSelector !== !1) {
    const a = i.options.thumbSelector || "img";
    o = s.matches(a) ? s : (
      /** @type {HTMLElement | null} */
      s.querySelector(a)
    );
  }
  return o = i.applyFilters("thumbEl", o, t, r), o && (t.thumbCropped ? n = Ot(o, t.width || t.w || 0, t.height || t.h || 0) : n = Et(o)), i.applyFilters("thumbBounds", n, t, r);
}
class Dt {
  /**
   * @param {T} type
   * @param {PhotoSwipeEventsMap[T]} [details]
   */
  constructor(t, i) {
    this.type = t, this.defaultPrevented = !1, i && Object.assign(this, i);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
}
class Mt {
  constructor() {
    this._listeners = {}, this._filters = {}, this.pswp = void 0, this.options = void 0;
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   * @param {number} priority
   */
  addFilter(t, i, e = 100) {
    var s, n, o;
    this._filters[t] || (this._filters[t] = []), (s = this._filters[t]) === null || s === void 0 || s.push({
      fn: i,
      priority: e
    }), (n = this._filters[t]) === null || n === void 0 || n.sort((a, h) => a.priority - h.priority), (o = this.pswp) === null || o === void 0 || o.addFilter(t, i, e);
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {PhotoSwipeFiltersMap[T]} fn
   */
  removeFilter(t, i) {
    this._filters[t] && (this._filters[t] = this._filters[t].filter((e) => e.fn !== i)), this.pswp && this.pswp.removeFilter(t, i);
  }
  /**
   * @template {keyof PhotoSwipeFiltersMap} T
   * @param {T} name
   * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
   * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
   */
  applyFilters(t, ...i) {
    var e;
    return (e = this._filters[t]) === null || e === void 0 || e.forEach((s) => {
      i[0] = s.fn.apply(this, i);
    }), i[0];
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */
  on(t, i) {
    var e, s;
    this._listeners[t] || (this._listeners[t] = []), (e = this._listeners[t]) === null || e === void 0 || e.push(i), (s = this.pswp) === null || s === void 0 || s.on(t, i);
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {EventCallback<T>} fn
   */
  off(t, i) {
    var e;
    this._listeners[t] && (this._listeners[t] = this._listeners[t].filter((s) => i !== s)), (e = this.pswp) === null || e === void 0 || e.off(t, i);
  }
  /**
   * @template {keyof PhotoSwipeEventsMap} T
   * @param {T} name
   * @param {PhotoSwipeEventsMap[T]} [details]
   * @returns {AugmentedEvent<T>}
   */
  dispatch(t, i) {
    var e;
    if (this.pswp)
      return this.pswp.dispatch(t, i);
    const s = (
      /** @type {AugmentedEvent<T>} */
      new Dt(t, i)
    );
    return (e = this._listeners[t]) === null || e === void 0 || e.forEach((n) => {
      n.call(this, s);
    }), s;
  }
}
class Rt {
  /**
   * @param {string | false} imageSrc
   * @param {HTMLElement} container
   */
  constructor(t, i) {
    if (this.element = f("pswp__img pswp__img--placeholder", t ? "img" : "div", i), t) {
      const e = (
        /** @type {HTMLImageElement} */
        this.element
      );
      e.decoding = "async", e.alt = "", e.src = t, e.setAttribute("role", "presentation");
    }
    this.element.setAttribute("aria-hidden", "true");
  }
  /**
   * @param {number} width
   * @param {number} height
   */
  setDisplayedSize(t, i) {
    this.element && (this.element.tagName === "IMG" ? (L(this.element, 250, "auto"), this.element.style.transformOrigin = "0 0", this.element.style.transform = I(0, 0, t / 250)) : L(this.element, t, i));
  }
  destroy() {
    var t;
    (t = this.element) !== null && t !== void 0 && t.parentNode && this.element.remove(), this.element = null;
  }
}
class Ft {
  /**
   * @param {SlideData} itemData Slide data
   * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
   * @param {number} index
   */
  constructor(t, i, e) {
    this.instance = i, this.data = t, this.index = e, this.element = void 0, this.placeholder = void 0, this.slide = void 0, this.displayedImageWidth = 0, this.displayedImageHeight = 0, this.width = Number(this.data.w) || Number(this.data.width) || 0, this.height = Number(this.data.h) || Number(this.data.height) || 0, this.isAttached = !1, this.hasSlide = !1, this.isDecoding = !1, this.state = _.IDLE, this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html", this.instance.dispatch("contentInit", {
      content: this
    });
  }
  removePlaceholder() {
    this.placeholder && !this.keepPlaceholder() && setTimeout(() => {
      this.placeholder && (this.placeholder.destroy(), this.placeholder = void 0);
    }, 1e3);
  }
  /**
   * Preload content
   *
   * @param {boolean} isLazy
   * @param {boolean} [reload]
   */
  load(t, i) {
    if (this.slide && this.usePlaceholder())
      if (this.placeholder) {
        const e = this.placeholder.element;
        e && !e.parentElement && this.slide.container.prepend(e);
      } else {
        const e = this.instance.applyFilters(
          "placeholderSrc",
          // use  image-based placeholder only for the first slide,
          // as rendering (even small stretched thumbnail) is an expensive operation
          this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : !1,
          this
        );
        this.placeholder = new Rt(e, this.slide.container);
      }
    this.element && !i || this.instance.dispatch("contentLoad", {
      content: this,
      isLazy: t
    }).defaultPrevented || (this.isImageContent() ? (this.element = f("pswp__img", "img"), this.displayedImageWidth && this.loadImage(t)) : (this.element = f("pswp__content", "div"), this.element.innerHTML = this.data.html || ""), i && this.slide && this.slide.updateContentSize(!0));
  }
  /**
   * Preload image
   *
   * @param {boolean} isLazy
   */
  loadImage(t) {
    var i, e;
    if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
      content: this,
      isLazy: t
    }).defaultPrevented)
      return;
    const s = (
      /** @type HTMLImageElement */
      this.element
    );
    this.updateSrcsetSizes(), this.data.srcset && (s.srcset = this.data.srcset), s.src = (i = this.data.src) !== null && i !== void 0 ? i : "", s.alt = (e = this.data.alt) !== null && e !== void 0 ? e : "", this.state = _.LOADING, s.complete ? this.onLoaded() : (s.onload = () => {
      this.onLoaded();
    }, s.onerror = () => {
      this.onError();
    });
  }
  /**
   * Assign slide to content
   *
   * @param {Slide} slide
   */
  setSlide(t) {
    this.slide = t, this.hasSlide = !0, this.instance = t.pswp;
  }
  /**
   * Content load success handler
   */
  onLoaded() {
    this.state = _.LOADED, this.slide && this.element && (this.instance.dispatch("loadComplete", {
      slide: this.slide,
      content: this
    }), this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(), this.slide.updateContentSize(!0)), (this.state === _.LOADED || this.state === _.ERROR) && this.removePlaceholder());
  }
  /**
   * Content load error handler
   */
  onError() {
    this.state = _.ERROR, this.slide && (this.displayError(), this.instance.dispatch("loadComplete", {
      slide: this.slide,
      isError: !0,
      content: this
    }), this.instance.dispatch("loadError", {
      slide: this.slide,
      content: this
    }));
  }
  /**
   * @returns {Boolean} If the content is currently loading
   */
  isLoading() {
    return this.instance.applyFilters("isContentLoading", this.state === _.LOADING, this);
  }
  /**
   * @returns {Boolean} If the content is in error state
   */
  isError() {
    return this.state === _.ERROR;
  }
  /**
   * @returns {boolean} If the content is image
   */
  isImageContent() {
    return this.type === "image";
  }
  /**
   * Update content size
   *
   * @param {Number} width
   * @param {Number} height
   */
  setDisplayedSize(t, i) {
    if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, i), !this.instance.dispatch("contentResize", {
      content: this,
      width: t,
      height: i
    }).defaultPrevented && (L(this.element, t, i), this.isImageContent() && !this.isError()))) {
      const e = !this.displayedImageWidth && t;
      this.displayedImageWidth = t, this.displayedImageHeight = i, e ? this.loadImage(!1) : this.updateSrcsetSizes(), this.slide && this.instance.dispatch("imageSizeChange", {
        slide: this.slide,
        width: t,
        height: i,
        content: this
      });
    }
  }
  /**
   * @returns {boolean} If the content can be zoomed
   */
  isZoomable() {
    return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== _.ERROR, this);
  }
  /**
   * Update image srcset sizes attribute based on width and height
   */
  updateSrcsetSizes() {
    if (!this.isImageContent() || !this.element || !this.data.srcset)
      return;
    const t = (
      /** @type HTMLImageElement */
      this.element
    ), i = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
    (!t.dataset.largestUsedSize || i > parseInt(t.dataset.largestUsedSize, 10)) && (t.sizes = i + "px", t.dataset.largestUsedSize = String(i));
  }
  /**
   * @returns {boolean} If content should use a placeholder (from msrc by default)
   */
  usePlaceholder() {
    return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
  }
  /**
   * Preload content with lazy-loading param
   */
  lazyLoad() {
    this.instance.dispatch("contentLazyLoad", {
      content: this
    }).defaultPrevented || this.load(!0);
  }
  /**
   * @returns {boolean} If placeholder should be kept after content is loaded
   */
  keepPlaceholder() {
    return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
  }
  /**
   * Destroy the content
   */
  destroy() {
    this.hasSlide = !1, this.slide = void 0, !this.instance.dispatch("contentDestroy", {
      content: this
    }).defaultPrevented && (this.remove(), this.placeholder && (this.placeholder.destroy(), this.placeholder = void 0), this.isImageContent() && this.element && (this.element.onload = null, this.element.onerror = null, this.element = void 0));
  }
  /**
   * Display error message
   */
  displayError() {
    if (this.slide) {
      var t, i;
      let e = f("pswp__error-msg", "div");
      e.innerText = (t = (i = this.instance.options) === null || i === void 0 ? void 0 : i.errorMsg) !== null && t !== void 0 ? t : "", e = /** @type {HTMLDivElement} */
      this.instance.applyFilters("contentErrorElement", e, this), this.element = f("pswp__content pswp__error-msg-container", "div"), this.element.appendChild(e), this.slide.container.innerText = "", this.slide.container.appendChild(this.element), this.slide.updateContentSize(!0), this.removePlaceholder();
    }
  }
  /**
   * Append the content
   */
  append() {
    if (this.isAttached || !this.element)
      return;
    if (this.isAttached = !0, this.state === _.ERROR) {
      this.displayError();
      return;
    }
    if (this.instance.dispatch("contentAppend", {
      content: this
    }).defaultPrevented)
      return;
    const t = "decode" in this.element;
    this.isImageContent() ? t && this.slide && (!this.slide.isActive || C()) ? (this.isDecoding = !0, this.element.decode().catch(() => {
    }).finally(() => {
      this.isDecoding = !1, this.appendImage();
    })) : this.appendImage() : this.slide && !this.element.parentNode && this.slide.container.appendChild(this.element);
  }
  /**
   * Activate the slide,
   * active slide is generally the current one,
   * meaning the user can see it.
   */
  activate() {
    this.instance.dispatch("contentActivate", {
      content: this
    }).defaultPrevented || !this.slide || (this.isImageContent() && this.isDecoding && !C() ? this.appendImage() : this.isError() && this.load(!1, !0), this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"));
  }
  /**
   * Deactivate the content
   */
  deactivate() {
    this.instance.dispatch("contentDeactivate", {
      content: this
    }), this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true");
  }
  /**
   * Remove the content from DOM
   */
  remove() {
    this.isAttached = !1, !this.instance.dispatch("contentRemove", {
      content: this
    }).defaultPrevented && (this.element && this.element.parentNode && this.element.remove(), this.placeholder && this.placeholder.element && this.placeholder.element.remove());
  }
  /**
   * Append the image content to slide container
   */
  appendImage() {
    this.isAttached && (this.instance.dispatch("contentAppendImage", {
      content: this
    }).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element), (this.state === _.LOADED || this.state === _.ERROR) && this.removePlaceholder()));
  }
}
const Bt = 5;
function W(r, t, i) {
  const e = t.createContentFromData(r, i);
  let s;
  const {
    options: n
  } = t;
  if (n) {
    s = new k(n, r, -1);
    let o;
    t.pswp ? o = t.pswp.viewportSize : o = B(n, t);
    const a = N(n, o, r, i);
    s.update(e.width, e.height, a);
  }
  return e.lazyLoad(), s && e.setDisplayedSize(Math.ceil(e.width * s.initial), Math.ceil(e.height * s.initial)), e;
}
function Nt(r, t) {
  const i = t.getItemData(r);
  if (!t.dispatch("lazyLoadSlide", {
    index: r,
    itemData: i
  }).defaultPrevented)
    return W(i, t, r);
}
class kt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.limit = Math.max(t.options.preload[0] + t.options.preload[1] + 1, Bt), this._cachedItems = [];
  }
  /**
   * Lazy load nearby slides based on `preload` option.
   *
   * @param {number} [diff] Difference between slide indexes that was changed recently, or 0.
   */
  updateLazy(t) {
    const {
      pswp: i
    } = this;
    if (i.dispatch("lazyLoad").defaultPrevented)
      return;
    const {
      preload: e
    } = i.options, s = t === void 0 ? !0 : t >= 0;
    let n;
    for (n = 0; n <= e[1]; n++)
      this.loadSlideByIndex(i.currIndex + (s ? n : -n));
    for (n = 1; n <= e[0]; n++)
      this.loadSlideByIndex(i.currIndex + (s ? -n : n));
  }
  /**
   * @param {number} initialIndex
   */
  loadSlideByIndex(t) {
    const i = this.pswp.getLoopedIndex(t);
    let e = this.getContentByIndex(i);
    e || (e = Nt(i, this.pswp), e && this.addToCache(e));
  }
  /**
   * @param {Slide} slide
   * @returns {Content}
   */
  getContentBySlide(t) {
    let i = this.getContentByIndex(t.index);
    return i || (i = this.pswp.createContentFromData(t.data, t.index), this.addToCache(i)), i.setSlide(t), i;
  }
  /**
   * @param {Content} content
   */
  addToCache(t) {
    if (this.removeByIndex(t.index), this._cachedItems.push(t), this._cachedItems.length > this.limit) {
      const i = this._cachedItems.findIndex((e) => !e.isAttached && !e.hasSlide);
      i !== -1 && this._cachedItems.splice(i, 1)[0].destroy();
    }
  }
  /**
   * Removes an image from cache, does not destroy() it, just removes.
   *
   * @param {number} index
   */
  removeByIndex(t) {
    const i = this._cachedItems.findIndex((e) => e.index === t);
    i !== -1 && this._cachedItems.splice(i, 1);
  }
  /**
   * @param {number} index
   * @returns {Content | undefined}
   */
  getContentByIndex(t) {
    return this._cachedItems.find((i) => i.index === t);
  }
  destroy() {
    this._cachedItems.forEach((t) => t.destroy()), this._cachedItems = [];
  }
}
class Ht extends Mt {
  /**
   * Get total number of slides
   *
   * @returns {number}
   */
  getNumItems() {
    var t;
    let i = 0;
    const e = (t = this.options) === null || t === void 0 ? void 0 : t.dataSource;
    e && "length" in e ? i = e.length : e && "gallery" in e && (e.items || (e.items = this._getGalleryDOMElements(e.gallery)), e.items && (i = e.items.length));
    const s = this.dispatch("numItems", {
      dataSource: e,
      numItems: i
    });
    return this.applyFilters("numItems", s.numItems, e);
  }
  /**
   * @param {SlideData} slideData
   * @param {number} index
   * @returns {Content}
   */
  createContentFromData(t, i) {
    return new Ft(t, this, i);
  }
  /**
   * Get item data by index.
   *
   * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
   * For example, it may contain properties like
   * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
   *
   * @param {number} index
   * @returns {SlideData}
   */
  getItemData(t) {
    var i;
    const e = (i = this.options) === null || i === void 0 ? void 0 : i.dataSource;
    let s = {};
    Array.isArray(e) ? s = e[t] : e && "gallery" in e && (e.items || (e.items = this._getGalleryDOMElements(e.gallery)), s = e.items[t]);
    let n = s;
    n instanceof Element && (n = this._domElementToItemData(n));
    const o = this.dispatch("itemData", {
      itemData: n || {},
      index: t
    });
    return this.applyFilters("itemData", o.itemData, t);
  }
  /**
   * Get array of gallery DOM elements,
   * based on childSelector and gallery element.
   *
   * @param {HTMLElement} galleryElement
   * @returns {HTMLElement[]}
   */
  _getGalleryDOMElements(t) {
    var i, e;
    return (i = this.options) !== null && i !== void 0 && i.children || (e = this.options) !== null && e !== void 0 && e.childSelector ? K(this.options.children, this.options.childSelector, t) || [] : [t];
  }
  /**
   * Converts DOM element to item data object.
   *
   * @param {HTMLElement} element DOM element
   * @returns {SlideData}
   */
  _domElementToItemData(t) {
    const i = {
      element: t
    }, e = (
      /** @type {HTMLAnchorElement} */
      t.tagName === "A" ? t : t.querySelector("a")
    );
    if (e) {
      i.src = e.dataset.pswpSrc || e.href, e.dataset.pswpSrcset && (i.srcset = e.dataset.pswpSrcset), i.width = e.dataset.pswpWidth ? parseInt(e.dataset.pswpWidth, 10) : 0, i.height = e.dataset.pswpHeight ? parseInt(e.dataset.pswpHeight, 10) : 0, i.w = i.width, i.h = i.height, e.dataset.pswpType && (i.type = e.dataset.pswpType);
      const n = t.querySelector("img");
      if (n) {
        var s;
        i.msrc = n.currentSrc || n.src, i.alt = (s = n.getAttribute("alt")) !== null && s !== void 0 ? s : "";
      }
      (e.dataset.pswpCropped || e.dataset.cropped) && (i.thumbCropped = !0);
    }
    return this.applyFilters("domItemData", i, t, e);
  }
  /**
   * Lazy-load by slide data
   *
   * @param {SlideData} itemData Data about the slide
   * @param {number} index
   * @returns {Content} Image that is being decoded or false.
   */
  lazyLoadData(t, i) {
    return W(t, this, i);
  }
}
const P = 3e-3;
class Wt {
  /**
   * @param {PhotoSwipe} pswp
   */
  constructor(t) {
    this.pswp = t, this.isClosed = !0, this.isOpen = !1, this.isClosing = !1, this.isOpening = !1, this._duration = void 0, this._useAnimation = !1, this._croppedZoom = !1, this._animateRootOpacity = !1, this._animateBgOpacity = !1, this._placeholder = void 0, this._opacityElement = void 0, this._cropContainer1 = void 0, this._cropContainer2 = void 0, this._thumbBounds = void 0, this._prepareOpen = this._prepareOpen.bind(this), t.on("firstZoomPan", this._prepareOpen);
  }
  open() {
    this._prepareOpen(), this._start();
  }
  close() {
    if (this.isClosed || this.isClosing || this.isOpening)
      return;
    const t = this.pswp.currSlide;
    this.isOpen = !1, this.isOpening = !1, this.isClosing = !0, this._duration = this.pswp.options.hideAnimationDuration, t && t.currZoomLevel * t.width >= this.pswp.options.maxWidthToAnimate && (this._duration = 0), this._applyStartProps(), setTimeout(() => {
      this._start();
    }, this._croppedZoom ? 30 : 0);
  }
  /** @private */
  _prepareOpen() {
    if (this.pswp.off("firstZoomPan", this._prepareOpen), !this.isOpening) {
      const t = this.pswp.currSlide;
      this.isOpening = !0, this.isClosing = !1, this._duration = this.pswp.options.showAnimationDuration, t && t.zoomLevels.initial * t.width >= this.pswp.options.maxWidthToAnimate && (this._duration = 0), this._applyStartProps();
    }
  }
  /** @private */
  _applyStartProps() {
    const {
      pswp: t
    } = this, i = this.pswp.currSlide, {
      options: e
    } = t;
    if (e.showHideAnimationType === "fade" ? (e.showHideOpacity = !0, this._thumbBounds = void 0) : e.showHideAnimationType === "none" ? (e.showHideOpacity = !1, this._duration = 0, this._thumbBounds = void 0) : this.isOpening && t._initialThumbBounds ? this._thumbBounds = t._initialThumbBounds : this._thumbBounds = this.pswp.getThumbBounds(), this._placeholder = i == null ? void 0 : i.getPlaceholderElement(), t.animations.stopAll(), this._useAnimation = !!(this._duration && this._duration > 50), this._animateZoom = !!this._thumbBounds && (i == null ? void 0 : i.content.usePlaceholder()) && (!this.isClosing || !t.mainScroll.isShifted()), !this._animateZoom)
      this._animateRootOpacity = !0, this.isOpening && i && (i.zoomAndPanToInitial(), i.applyCurrentZoomPan());
    else {
      var s;
      this._animateRootOpacity = (s = e.showHideOpacity) !== null && s !== void 0 ? s : !1;
    }
    if (this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > P, this._opacityElement = this._animateRootOpacity ? t.element : t.bg, !this._useAnimation) {
      this._duration = 0, this._animateZoom = !1, this._animateBgOpacity = !1, this._animateRootOpacity = !0, this.isOpening && (t.element && (t.element.style.opacity = String(P)), t.applyBgOpacity(1));
      return;
    }
    if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
      var n;
      this._croppedZoom = !0, this._cropContainer1 = this.pswp.container, this._cropContainer2 = (n = this.pswp.currSlide) === null || n === void 0 ? void 0 : n.holderElement, t.container && (t.container.style.overflow = "hidden", t.container.style.width = t.viewportSize.x + "px");
    } else
      this._croppedZoom = !1;
    this.isOpening ? (this._animateRootOpacity ? (t.element && (t.element.style.opacity = String(P)), t.applyBgOpacity(1)) : (this._animateBgOpacity && t.bg && (t.bg.style.opacity = String(P)), t.element && (t.element.style.opacity = "1")), this._animateZoom && (this._setClosedStateZoomPan(), this._placeholder && (this._placeholder.style.willChange = "transform", this._placeholder.style.opacity = String(P)))) : this.isClosing && (t.mainScroll.itemHolders[0] && (t.mainScroll.itemHolders[0].el.style.display = "none"), t.mainScroll.itemHolders[2] && (t.mainScroll.itemHolders[2].el.style.display = "none"), this._croppedZoom && t.mainScroll.x !== 0 && (t.mainScroll.resetPosition(), t.mainScroll.resize()));
  }
  /** @private */
  _start() {
    this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG" ? new Promise((t) => {
      let i = !1, e = !0;
      q(
        /** @type {HTMLImageElement} */
        this._placeholder
      ).finally(() => {
        i = !0, e || t(!0);
      }), setTimeout(() => {
        e = !1, i && t(!0);
      }, 50), setTimeout(t, 250);
    }).finally(() => this._initiate()) : this._initiate();
  }
  /** @private */
  _initiate() {
    var t, i;
    (t = this.pswp.element) === null || t === void 0 || t.style.setProperty("--pswp-transition-duration", this._duration + "ms"), this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart"), this.pswp.dispatch(
      /** @type {'initialZoomIn' | 'initialZoomOut'} */
      "initialZoom" + (this.isOpening ? "In" : "Out")
    ), (i = this.pswp.element) === null || i === void 0 || i.classList.toggle("pswp--ui-visible", this.isOpening), this.isOpening ? (this._placeholder && (this._placeholder.style.opacity = "1"), this._animateToOpenState()) : this.isClosing && this._animateToClosedState(), this._useAnimation || this._onAnimationComplete();
  }
  /** @private */
  _onAnimationComplete() {
    const {
      pswp: t
    } = this;
    if (this.isOpen = this.isOpening, this.isClosed = this.isClosing, this.isOpening = !1, this.isClosing = !1, t.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd"), t.dispatch(
      /** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
      "initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")
    ), this.isClosed)
      t.destroy();
    else if (this.isOpen) {
      var i;
      this._animateZoom && t.container && (t.container.style.overflow = "visible", t.container.style.width = "100%"), (i = t.currSlide) === null || i === void 0 || i.applyCurrentZoomPan();
    }
  }
  /** @private */
  _animateToOpenState() {
    const {
      pswp: t
    } = this;
    this._animateZoom && (this._croppedZoom && this._cropContainer1 && this._cropContainer2 && (this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)"), this._animateTo(this._cropContainer2, "transform", "none")), t.currSlide && (t.currSlide.zoomAndPanToInitial(), this._animateTo(t.currSlide.container, "transform", t.currSlide.getCurrentTransform()))), this._animateBgOpacity && t.bg && this._animateTo(t.bg, "opacity", String(t.options.bgOpacity)), this._animateRootOpacity && t.element && this._animateTo(t.element, "opacity", "1");
  }
  /** @private */
  _animateToClosedState() {
    const {
      pswp: t
    } = this;
    this._animateZoom && this._setClosedStateZoomPan(!0), this._animateBgOpacity && t.bgOpacity > 0.01 && t.bg && this._animateTo(t.bg, "opacity", "0"), this._animateRootOpacity && t.element && this._animateTo(t.element, "opacity", "0");
  }
  /**
   * @private
   * @param {boolean} [animate]
   */
  _setClosedStateZoomPan(t) {
    if (!this._thumbBounds) return;
    const {
      pswp: i
    } = this, {
      innerRect: e
    } = this._thumbBounds, {
      currSlide: s,
      viewportSize: n
    } = i;
    if (this._croppedZoom && e && this._cropContainer1 && this._cropContainer2) {
      const o = -n.x + (this._thumbBounds.x - e.x) + e.w, a = -n.y + (this._thumbBounds.y - e.y) + e.h, h = n.x - e.w, l = n.y - e.h;
      t ? (this._animateTo(this._cropContainer1, "transform", I(o, a)), this._animateTo(this._cropContainer2, "transform", I(h, l))) : (y(this._cropContainer1, o, a), y(this._cropContainer2, h, l));
    }
    s && (p(s.pan, e || this._thumbBounds), s.currZoomLevel = this._thumbBounds.w / s.width, t ? this._animateTo(s.container, "transform", s.getCurrentTransform()) : s.applyCurrentZoomPan());
  }
  /**
   * @private
   * @param {HTMLElement} target
   * @param {'transform' | 'opacity'} prop
   * @param {string} propValue
   */
  _animateTo(t, i, e) {
    if (!this._duration) {
      t.style[i] = e;
      return;
    }
    const {
      animations: s
    } = this.pswp, n = {
      duration: this._duration,
      easing: this.pswp.options.easing,
      onComplete: () => {
        s.activeAnimations.length || this._onAnimationComplete();
      },
      target: t
    };
    n[i] = e, s.startTransition(n);
  }
}
const Vt = {
  allowPanToNext: !0,
  spacing: 0.1,
  loop: !0,
  pinchToClose: !0,
  closeOnVerticalDrag: !0,
  hideAnimationDuration: 333,
  showAnimationDuration: 333,
  zoomAnimationDuration: 333,
  escKey: !0,
  arrowKeys: !0,
  trapFocus: !0,
  returnFocus: !0,
  maxWidthToAnimate: 4e3,
  clickToCloseNonZoomable: !0,
  imageClickAction: "zoom-or-close",
  bgClickAction: "close",
  tapAction: "toggle-controls",
  doubleTapAction: "zoom",
  indexIndicatorSep: " / ",
  preloaderDelay: 2e3,
  bgOpacity: 0.8,
  index: 0,
  errorMsg: "The image cannot be loaded",
  preload: [1, 2],
  easing: "cubic-bezier(.4,0,.22,1)"
};
class $t extends Ht {
  /**
   * @param {PhotoSwipeOptions} [options]
   */
  constructor(t) {
    super(), this.options = this._prepareOptions(t || {}), this.offset = {
      x: 0,
      y: 0
    }, this._prevViewportSize = {
      x: 0,
      y: 0
    }, this.viewportSize = {
      x: 0,
      y: 0
    }, this.bgOpacity = 1, this.currIndex = 0, this.potentialIndex = 0, this.isOpen = !1, this.isDestroying = !1, this.hasMouse = !1, this._initialItemData = {}, this._initialThumbBounds = void 0, this.topBar = void 0, this.element = void 0, this.template = void 0, this.container = void 0, this.scrollWrap = void 0, this.currSlide = void 0, this.events = new X(), this.animations = new wt(), this.mainScroll = new dt(this), this.gestures = new lt(this), this.opener = new Wt(this), this.keyboard = new ut(this), this.contentLoader = new kt(this);
  }
  /** @returns {boolean} */
  init() {
    if (this.isOpen || this.isDestroying)
      return !1;
    this.isOpen = !0, this.dispatch("init"), this.dispatch("beforeOpen"), this._createMainStructure();
    let t = "pswp--open";
    return this.gestures.supportsTouch && (t += " pswp--touch"), this.options.mainClass && (t += " " + this.options.mainClass), this.element && (this.element.className += " " + t), this.currIndex = this.options.index || 0, this.potentialIndex = this.currIndex, this.dispatch("firstUpdate"), this.scrollWheel = new Pt(this), (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) && (this.currIndex = 0), this.gestures.supportsTouch || this.mouseDetected(), this.updateSize(), this.offset.y = window.pageYOffset, this._initialItemData = this.getItemData(this.currIndex), this.dispatch("gettingData", {
      index: this.currIndex,
      data: this._initialItemData,
      slide: void 0
    }), this._initialThumbBounds = this.getThumbBounds(), this.dispatch("initialLayout"), this.on("openingAnimationEnd", () => {
      const {
        itemHolders: i
      } = this.mainScroll;
      i[0] && (i[0].el.style.display = "block", this.setContent(i[0], this.currIndex - 1)), i[2] && (i[2].el.style.display = "block", this.setContent(i[2], this.currIndex + 1)), this.appendHeavy(), this.contentLoader.updateLazy(), this.events.add(window, "resize", this._handlePageResize.bind(this)), this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this)), this.dispatch("bindEvents");
    }), this.mainScroll.itemHolders[1] && this.setContent(this.mainScroll.itemHolders[1], this.currIndex), this.dispatch("change"), this.opener.open(), this.dispatch("afterInit"), !0;
  }
  /**
   * Get looped slide index
   * (for example, -1 will return the last slide)
   *
   * @param {number} index
   * @returns {number}
   */
  getLoopedIndex(t) {
    const i = this.getNumItems();
    return this.options.loop && (t > i - 1 && (t -= i), t < 0 && (t += i)), b(t, 0, i - 1);
  }
  appendHeavy() {
    this.mainScroll.itemHolders.forEach((t) => {
      var i;
      (i = t.slide) === null || i === void 0 || i.appendHeavy();
    });
  }
  /**
   * Change the slide
   * @param {number} index New index
   */
  goTo(t) {
    this.mainScroll.moveIndexBy(this.getLoopedIndex(t) - this.potentialIndex);
  }
  /**
   * Go to the next slide.
   */
  next() {
    this.goTo(this.potentialIndex + 1);
  }
  /**
   * Go to the previous slide.
   */
  prev() {
    this.goTo(this.potentialIndex - 1);
  }
  /**
   * @see slide/slide.js zoomTo
   *
   * @param {Parameters<Slide['zoomTo']>} args
   */
  zoomTo(...t) {
    var i;
    (i = this.currSlide) === null || i === void 0 || i.zoomTo(...t);
  }
  /**
   * @see slide/slide.js toggleZoom
   */
  toggleZoom() {
    var t;
    (t = this.currSlide) === null || t === void 0 || t.toggleZoom();
  }
  /**
   * Close the gallery.
   * After closing transition ends - destroy it
   */
  close() {
    !this.opener.isOpen || this.isDestroying || (this.isDestroying = !0, this.dispatch("close"), this.events.removeAll(), this.opener.close());
  }
  /**
   * Destroys the gallery:
   * - instantly closes the gallery
   * - unbinds events,
   * - cleans intervals and timeouts
   * - removes elements from DOM
   */
  destroy() {
    var t;
    if (!this.isDestroying) {
      this.options.showHideAnimationType = "none", this.close();
      return;
    }
    this.dispatch("destroy"), this._listeners = {}, this.scrollWrap && (this.scrollWrap.ontouchmove = null, this.scrollWrap.ontouchend = null), (t = this.element) === null || t === void 0 || t.remove(), this.mainScroll.itemHolders.forEach((i) => {
      var e;
      (e = i.slide) === null || e === void 0 || e.destroy();
    }), this.contentLoader.destroy(), this.events.removeAll();
  }
  /**
   * Refresh/reload content of a slide by its index
   *
   * @param {number} slideIndex
   */
  refreshSlideContent(t) {
    this.contentLoader.removeByIndex(t), this.mainScroll.itemHolders.forEach((i, e) => {
      var s, n;
      let o = ((s = (n = this.currSlide) === null || n === void 0 ? void 0 : n.index) !== null && s !== void 0 ? s : 0) - 1 + e;
      if (this.canLoop() && (o = this.getLoopedIndex(o)), o === t && (this.setContent(i, t, !0), e === 1)) {
        var a;
        this.currSlide = i.slide, (a = i.slide) === null || a === void 0 || a.setIsActive(!0);
      }
    }), this.dispatch("change");
  }
  /**
   * Set slide content
   *
   * @param {ItemHolder} holder mainScroll.itemHolders array item
   * @param {number} index Slide index
   * @param {boolean} [force] If content should be set even if index wasn't changed
   */
  setContent(t, i, e) {
    if (this.canLoop() && (i = this.getLoopedIndex(i)), t.slide) {
      if (t.slide.index === i && !e)
        return;
      t.slide.destroy(), t.slide = void 0;
    }
    if (!this.canLoop() && (i < 0 || i >= this.getNumItems()))
      return;
    const s = this.getItemData(i);
    t.slide = new j(s, i, this), i === this.currIndex && (this.currSlide = t.slide), t.slide.append(t.el);
  }
  /** @returns {Point} */
  getViewportCenterPoint() {
    return {
      x: this.viewportSize.x / 2,
      y: this.viewportSize.y / 2
    };
  }
  /**
   * Update size of all elements.
   * Executed on init and on page resize.
   *
   * @param {boolean} [force] Update size even if size of viewport was not changed.
   */
  updateSize(t) {
    if (this.isDestroying)
      return;
    const i = B(this.options, this);
    !t && x(i, this._prevViewportSize) || (p(this._prevViewportSize, i), this.dispatch("beforeResize"), p(this.viewportSize, this._prevViewportSize), this._updatePageScrollOffset(), this.dispatch("viewportSize"), this.mainScroll.resize(this.opener.isOpen), !this.hasMouse && window.matchMedia("(any-hover: hover)").matches && this.mouseDetected(), this.dispatch("resize"));
  }
  /**
   * @param {number} opacity
   */
  applyBgOpacity(t) {
    this.bgOpacity = Math.max(t, 0), this.bg && (this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity));
  }
  /**
   * Whether mouse is detected
   */
  mouseDetected() {
    if (!this.hasMouse) {
      var t;
      this.hasMouse = !0, (t = this.element) === null || t === void 0 || t.classList.add("pswp--has_mouse");
    }
  }
  /**
   * Page resize event handler
   *
   * @private
   */
  _handlePageResize() {
    this.updateSize(), /iPhone|iPad|iPod/i.test(window.navigator.userAgent) && setTimeout(() => {
      this.updateSize();
    }, 500);
  }
  /**
   * Page scroll offset is used
   * to get correct coordinates
   * relative to PhotoSwipe viewport.
   *
   * @private
   */
  _updatePageScrollOffset() {
    this.setScrollOffset(0, window.pageYOffset);
  }
  /**
   * @param {number} x
   * @param {number} y
   */
  setScrollOffset(t, i) {
    this.offset.x = t, this.offset.y = i, this.dispatch("updateScrollOffset");
  }
  /**
   * Create main HTML structure of PhotoSwipe,
   * and add it to DOM
   *
   * @private
   */
  _createMainStructure() {
    this.element = f("pswp", "div"), this.element.setAttribute("tabindex", "-1"), this.element.setAttribute("role", "dialog"), this.template = this.element, this.bg = f("pswp__bg", "div", this.element), this.scrollWrap = f("pswp__scroll-wrap", "section", this.element), this.container = f("pswp__container", "div", this.scrollWrap), this.scrollWrap.setAttribute("aria-roledescription", "carousel"), this.container.setAttribute("aria-live", "off"), this.container.setAttribute("id", "pswp__items"), this.mainScroll.appendHolders(), this.ui = new zt(this), this.ui.init(), (this.options.appendToEl || document.body).appendChild(this.element);
  }
  /**
   * Get position and dimensions of small thumbnail
   *   {x:,y:,w:}
   *
   * Height is optional (calculated based on the large image)
   *
   * @returns {Bounds | undefined}
   */
  getThumbBounds() {
    return Zt(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
  }
  /**
   * If the PhotoSwipe can have continuous loop
   * @returns Boolean
   */
  canLoop() {
    return this.options.loop && this.getNumItems() > 2;
  }
  /**
   * @private
   * @param {PhotoSwipeOptions} options
   * @returns {PreparedPhotoSwipeOptions}
   */
  _prepareOptions(t) {
    return window.matchMedia("(prefers-reduced-motion), (update: slow)").matches && (t.showHideAnimationType = "none", t.zoomAnimationDuration = 0), {
      ...Vt,
      ...t
    };
  }
}
export {
  $t as default
};
