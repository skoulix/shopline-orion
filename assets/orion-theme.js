var tl = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qe(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const fe = tl.NODE_ENV !== "production" ? Object.freeze({}) : {}, gs = tl.NODE_ENV !== "production" ? Object.freeze([]) : [], Oe = () => {
}, zs = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zo = (e) => e.startsWith("onUpdate:"), de = Object.assign, nl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rf = Object.prototype.hasOwnProperty, ge = (e, t) => Rf.call(e, t), q = Array.isArray, Yn = (e) => Rs(e) === "[object Map]", ls = (e) => Rs(e) === "[object Set]", ia = (e) => Rs(e) === "[object Date]", Lf = (e) => Rs(e) === "[object RegExp]", se = (e) => typeof e == "function", re = (e) => typeof e == "string", Et = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", ki = (e) => (me(e) || se(e)) && se(e.then) && se(e.catch), Oc = Object.prototype.toString, Rs = (e) => Oc.call(e), sl = (e) => Rs(e).slice(8, -1), Oi = (e) => Rs(e) === "[object Object]", ol = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vn = /* @__PURE__ */ qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tc = /* @__PURE__ */ qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ti = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ff = /-(\w)/g, Se = Ti(
  (e) => e.replace(Ff, (t, n) => n ? n.toUpperCase() : "")
), Bf = /\B([A-Z])/g, Ze = Ti(
  (e) => e.replace(Bf, "-$1").toLowerCase()
), on = Ti((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qt = Ti(
  (e) => e ? `on${on(e)}` : ""
), lt = (e, t) => !Object.is(e, t), On = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ns = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ei = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ti = (e) => {
  const t = re(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ra;
const No = () => ra || (ra = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Hf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const Xs = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "CACHED",
  [-2]: "BAIL"
}, jf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Uf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", qf = /* @__PURE__ */ qe(Uf), la = 2;
function zf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const o = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let i = 0;
  const r = [];
  for (let l = 0; l < s.length; l++)
    if (i += s[l].length + (o[l] && o[l].length || 0), i >= t) {
      for (let a = l - la; a <= l + la || n > i; a++) {
        if (a < 0 || a >= s.length) continue;
        const c = a + 1;
        r.push(
          `${c}${" ".repeat(Math.max(3 - String(c).length, 0))}|  ${s[a]}`
        );
        const d = s[a].length, u = o[a] && o[a].length || 0;
        if (a === l) {
          const p = t - (i - (d + u)), m = Math.max(
            1,
            n > i ? d - p : n - t
          );
          r.push("   |  " + " ".repeat(p) + "^".repeat(m));
        } else if (a > l) {
          if (n > i) {
            const p = Math.max(Math.min(n - i, d), 1);
            r.push("   |  " + "^".repeat(p));
          }
          i += d + u;
        }
      }
      break;
    }
  return r.join(`
`);
}
function _t(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = re(s) ? Dc(s) : _t(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (re(e) || me(e))
    return e;
}
const Kf = /;(?![^(]*\))/g, Wf = /:([^]+)/, Gf = /\/\*[^]*?\*\//g;
function Dc(e) {
  const t = {};
  return e.replace(Gf, "").split(Kf).forEach((n) => {
    if (n) {
      const s = n.split(Wf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Yf(e) {
  if (!e) return "";
  if (re(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (re(s) || typeof s == "number") {
      const o = n.startsWith("--") ? n : Ze(n);
      t += `${o}:${s};`;
    }
  }
  return t;
}
function Ge(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ge(e[n]);
      s && (t += s + " ");
    }
  else if (me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Jf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !re(t) && (e.class = Ge(t)), n && (e.style = _t(n)), e;
}
const Xf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Qf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Zf = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ep = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Vc = /* @__PURE__ */ qe(Xf), $c = /* @__PURE__ */ qe(Qf), Ac = /* @__PURE__ */ qe(Zf), tp = /* @__PURE__ */ qe(ep), Ic = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", np = /* @__PURE__ */ qe(Ic), aa = /* @__PURE__ */ qe(
  Ic + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function il(e) {
  return !!e || e === "";
}
const sp = /* @__PURE__ */ qe(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), op = /* @__PURE__ */ qe(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function ip(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const rp = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function lp(e, t) {
  return e.replace(
    rp,
    (n) => `\\${n}`
  );
}
function ap(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Pn(e[s], t[s]);
  return n;
}
function Pn(e, t) {
  if (e === t) return !0;
  let n = ia(e), s = ia(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Et(e), s = Et(t), n || s)
    return e === t;
  if (n = q(e), s = q(t), n || s)
    return n && s ? ap(e, t) : !1;
  if (n = me(e), s = me(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Pn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Di(e, t) {
  return e.findIndex((n) => Pn(n, t));
}
const Mc = (e) => !!(e && e.__v_isRef === !0), X = (e) => re(e) ? e : e == null ? "" : q(e) || me(e) && (e.toString === Oc || !se(e.toString)) ? Mc(e) ? X(e.value) : JSON.stringify(e, Pc, 2) : String(e), Pc = (e, t) => Mc(t) ? Pc(e, t.value) : Yn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[nr(s, i) + " =>"] = o, n),
    {}
  )
} : ls(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => nr(n))
} : Et(t) ? nr(t) : me(t) && !q(t) && !Oi(t) ? String(t) : t, nr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Rc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && tl.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var be = {};
function Vt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Xe;
class rl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Xe, !t && Xe && (this.index = (Xe.scopes || (Xe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Xe;
      try {
        return Xe = this, t();
      } finally {
        Xe = n;
      }
    } else be.NODE_ENV !== "production" && Vt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Xe, Xe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Xe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function cp(e) {
  return new rl(e);
}
function ll() {
  return Xe;
}
function Lc(e, t = !1) {
  Xe ? Xe.cleanups.push(e) : be.NODE_ENV !== "production" && !t && Vt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let _e;
const sr = /* @__PURE__ */ new WeakSet();
class lo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Xe && Xe.active && Xe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sr.has(this) && (sr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ca(this), Hc(this);
    const t = _e, n = Ht;
    _e = this, Ht = !0;
    try {
      return this.fn();
    } finally {
      be.NODE_ENV !== "production" && _e !== this && Vt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), jc(this), _e = t, Ht = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ul(t);
      this.deps = this.depsTail = void 0, ca(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _r(this) && this.run();
  }
  get dirty() {
    return _r(this);
  }
}
let Fc = 0, Qs, Zs;
function Bc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Zs, Zs = e;
    return;
  }
  e.next = Qs, Qs = e;
}
function al() {
  Fc++;
}
function cl() {
  if (--Fc > 0)
    return;
  if (Zs) {
    let t = Zs;
    for (Zs = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Qs; ) {
    let t = Qs;
    for (Qs = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Hc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function jc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), ul(s), up(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function _r(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Uc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Uc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ao) || (e.globalVersion = ao, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_r(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = _e, s = Ht;
  _e = e, Ht = !0;
  try {
    Hc(e);
    const o = e.fn(e._value);
    (t.version === 0 || lt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    _e = n, Ht = s, jc(e), e.flags &= -3;
  }
}
function ul(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), be.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ul(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function up(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function dp(e, t) {
  e.effect instanceof lo && (e = e.effect.fn);
  const n = new lo(e);
  t && de(n, t);
  try {
    n.run();
  } catch (o) {
    throw n.stop(), o;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function fp(e) {
  e.effect.stop();
}
let Ht = !0;
const qc = [];
function Ut() {
  qc.push(Ht), Ht = !1;
}
function qt() {
  const e = qc.pop();
  Ht = e === void 0 ? !0 : e;
}
function ca(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = _e;
    _e = void 0;
    try {
      t();
    } finally {
      _e = n;
    }
  }
}
let ao = 0;
class pp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Vi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, be.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!_e || !Ht || _e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      n = this.activeLink = new pp(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, zc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = _e.depsTail, n.nextDep = void 0, _e.depsTail.nextDep = n, _e.depsTail = n, _e.deps === n && (_e.deps = s);
    }
    return be.NODE_ENV !== "production" && _e.onTrack && _e.onTrack(
      de(
        {
          effect: _e
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ao++, this.notify(t);
  }
  notify(t) {
    al();
    try {
      if (be.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            de(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      cl();
    }
  }
}
function zc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        zc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), be.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ni = /* @__PURE__ */ new WeakMap(), Jn = Symbol(
  be.NODE_ENV !== "production" ? "Object iterate" : ""
), Er = Symbol(
  be.NODE_ENV !== "production" ? "Map keys iterate" : ""
), co = Symbol(
  be.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Be(e, t, n) {
  if (Ht && _e) {
    let s = ni.get(e);
    s || ni.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Vi()), o.map = s, o.key = n), be.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Zt(e, t, n, s, o, i) {
  const r = ni.get(e);
  if (!r) {
    ao++;
    return;
  }
  const l = (a) => {
    a && (be.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: i
    }) : a.trigger());
  };
  if (al(), t === "clear")
    r.forEach(l);
  else {
    const a = q(e), c = a && ol(n);
    if (a && n === "length") {
      const d = Number(s);
      r.forEach((u, p) => {
        (p === "length" || p === co || !Et(p) && p >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), c && l(r.get(co)), t) {
        case "add":
          a ? c && l(r.get("length")) : (l(r.get(Jn)), Yn(e) && l(r.get(Er)));
          break;
        case "delete":
          a || (l(r.get(Jn)), Yn(e) && l(r.get(Er)));
          break;
        case "set":
          Yn(e) && l(r.get(Jn));
          break;
      }
  }
  cl();
}
function hp(e, t) {
  const n = ni.get(e);
  return n && n.get(t);
}
function fs(e) {
  const t = ae(e);
  return t === e ? t : (Be(t, "iterate", co), tt(e) ? t : t.map(We));
}
function $i(e) {
  return Be(e = ae(e), "iterate", co), e;
}
const mp = {
  __proto__: null,
  [Symbol.iterator]() {
    return or(this, Symbol.iterator, We);
  },
  concat(...e) {
    return fs(this).concat(
      ...e.map((t) => q(t) ? fs(t) : t)
    );
  },
  entries() {
    return or(this, "entries", (e) => (e[1] = We(e[1]), e));
  },
  every(e, t) {
    return ln(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ln(this, "filter", e, t, (n) => n.map(We), arguments);
  },
  find(e, t) {
    return ln(this, "find", e, t, We, arguments);
  },
  findIndex(e, t) {
    return ln(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ln(this, "findLast", e, t, We, arguments);
  },
  findLastIndex(e, t) {
    return ln(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ln(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ir(this, "includes", e);
  },
  indexOf(...e) {
    return ir(this, "indexOf", e);
  },
  join(e) {
    return fs(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ir(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ln(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Hs(this, "pop");
  },
  push(...e) {
    return Hs(this, "push", e);
  },
  reduce(e, ...t) {
    return ua(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ua(this, "reduceRight", e, t);
  },
  shift() {
    return Hs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ln(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Hs(this, "splice", e);
  },
  toReversed() {
    return fs(this).toReversed();
  },
  toSorted(e) {
    return fs(this).toSorted(e);
  },
  toSpliced(...e) {
    return fs(this).toSpliced(...e);
  },
  unshift(...e) {
    return Hs(this, "unshift", e);
  },
  values() {
    return or(this, "values", We);
  }
};
function or(e, t, n) {
  const s = $i(e), o = s[t]();
  return s !== e && !tt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const gp = Array.prototype;
function ln(e, t, n, s, o, i) {
  const r = $i(e), l = r !== e && !tt(e), a = r[t];
  if (a !== gp[t]) {
    const u = a.apply(e, i);
    return l ? We(u) : u;
  }
  let c = n;
  r !== e && (l ? c = function(u, p) {
    return n.call(this, We(u), p, e);
  } : n.length > 2 && (c = function(u, p) {
    return n.call(this, u, p, e);
  }));
  const d = a.call(r, c, s);
  return l && o ? o(d) : d;
}
function ua(e, t, n, s) {
  const o = $i(e);
  let i = n;
  return o !== e && (tt(e) ? n.length > 3 && (i = function(r, l, a) {
    return n.call(this, r, l, a, e);
  }) : i = function(r, l, a) {
    return n.call(this, r, We(l), a, e);
  }), o[t](i, ...s);
}
function ir(e, t, n) {
  const s = ae(e);
  Be(s, "iterate", co);
  const o = s[t](...n);
  return (o === -1 || o === !1) && xs(n[0]) ? (n[0] = ae(n[0]), s[t](...n)) : o;
}
function Hs(e, t, n = []) {
  Ut(), al();
  const s = ae(e)[t].apply(e, n);
  return cl(), qt(), s;
}
const vp = /* @__PURE__ */ qe("__proto__,__v_isRef,__isVue"), Kc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Et)
);
function yp(e) {
  Et(e) || (e = String(e));
  const t = ae(this);
  return Be(t, "has", e), t.hasOwnProperty(e);
}
class Wc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? Zc : Qc : i ? Xc : Jc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = q(t);
    if (!o) {
      let a;
      if (r && (a = mp[n]))
        return a;
      if (n === "hasOwnProperty")
        return yp;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ve(t) ? t : s
    );
    return (Et(n) ? Kc.has(n) : vp(n)) || (o || Be(t, "get", n), i) ? l : Ve(l) ? r && ol(n) ? l : l.value : me(l) ? o ? Ii(l) : ws(l) : l;
  }
}
class Gc extends Wc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const a = zt(i);
      if (!tt(s) && !zt(s) && (i = ae(i), s = ae(s)), !q(t) && Ve(i) && !Ve(s))
        return a ? !1 : (i.value = s, !0);
    }
    const r = q(t) && ol(n) ? Number(n) < t.length : ge(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ve(t) ? t : o
    );
    return t === ae(o) && (r ? lt(s, i) && Zt(t, "set", n, s, i) : Zt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ge(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && Zt(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Et(n) || !Kc.has(n)) && Be(t, "has", n), s;
  }
  ownKeys(t) {
    return Be(
      t,
      "iterate",
      q(t) ? "length" : Jn
    ), Reflect.ownKeys(t);
  }
}
class Yc extends Wc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return be.NODE_ENV !== "production" && Vt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return be.NODE_ENV !== "production" && Vt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const bp = /* @__PURE__ */ new Gc(), _p = /* @__PURE__ */ new Yc(), Ep = /* @__PURE__ */ new Gc(!0), Np = /* @__PURE__ */ new Yc(!0), Nr = (e) => e, $o = (e) => Reflect.getPrototypeOf(e);
function wp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = ae(o), r = Yn(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, c = o[e](...s), d = n ? Nr : t ? si : We;
    return !t && Be(
      i,
      "iterate",
      a ? Er : Jn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = c.next();
        return p ? { value: u, done: p } : {
          value: l ? [d(u[0]), d(u[1])] : d(u),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ao(e) {
  return function(...t) {
    if (be.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Vt(
        `${on(e)} operation ${n}failed: target is readonly.`,
        ae(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xp(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = ae(i), l = ae(o);
      e || (lt(o, l) && Be(r, "get", o), Be(r, "get", l));
      const { has: a } = $o(r), c = t ? Nr : e ? si : We;
      if (a.call(r, o))
        return c(i.get(o));
      if (a.call(r, l))
        return c(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Be(ae(o), "iterate", Jn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, r = ae(i), l = ae(o);
      return e || (lt(o, l) && Be(r, "has", o), Be(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = ae(l), c = t ? Nr : e ? si : We;
      return !e && Be(a, "iterate", Jn), l.forEach((d, u) => o.call(i, c(d), c(u), r));
    }
  };
  return de(
    n,
    e ? {
      add: Ao("add"),
      set: Ao("set"),
      delete: Ao("delete"),
      clear: Ao("clear")
    } : {
      add(o) {
        !t && !tt(o) && !zt(o) && (o = ae(o));
        const i = ae(this);
        return $o(i).has.call(i, o) || (i.add(o), Zt(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !tt(i) && !zt(i) && (i = ae(i));
        const r = ae(this), { has: l, get: a } = $o(r);
        let c = l.call(r, o);
        c ? be.NODE_ENV !== "production" && da(r, l, o) : (o = ae(o), c = l.call(r, o));
        const d = a.call(r, o);
        return r.set(o, i), c ? lt(i, d) && Zt(r, "set", o, i, d) : Zt(r, "add", o, i), this;
      },
      delete(o) {
        const i = ae(this), { has: r, get: l } = $o(i);
        let a = r.call(i, o);
        a ? be.NODE_ENV !== "production" && da(i, r, o) : (o = ae(o), a = r.call(i, o));
        const c = l ? l.call(i, o) : void 0, d = i.delete(o);
        return a && Zt(i, "delete", o, void 0, c), d;
      },
      clear() {
        const o = ae(this), i = o.size !== 0, r = be.NODE_ENV !== "production" ? Yn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && Zt(
          o,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = wp(o, e, t);
  }), n;
}
function Ai(e, t) {
  const n = xp(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Sp = {
  get: /* @__PURE__ */ Ai(!1, !1)
}, Cp = {
  get: /* @__PURE__ */ Ai(!1, !0)
}, kp = {
  get: /* @__PURE__ */ Ai(!0, !1)
}, Op = {
  get: /* @__PURE__ */ Ai(!0, !0)
};
function da(e, t, n) {
  const s = ae(n);
  if (s !== n && t.call(e, s)) {
    const o = sl(e);
    Vt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Jc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap();
function Tp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Dp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Tp(sl(e));
}
function ws(e) {
  return zt(e) ? e : Mi(
    e,
    !1,
    bp,
    Sp,
    Jc
  );
}
function eu(e) {
  return Mi(
    e,
    !1,
    Ep,
    Cp,
    Xc
  );
}
function Ii(e) {
  return Mi(
    e,
    !0,
    _p,
    kp,
    Qc
  );
}
function Lt(e) {
  return Mi(
    e,
    !0,
    Np,
    Op,
    Zc
  );
}
function Mi(e, t, n, s, o) {
  if (!me(e))
    return be.NODE_ENV !== "production" && Vt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Dp(e);
  if (i === 0)
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function hn(e) {
  return zt(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function zt(e) {
  return !!(e && e.__v_isReadonly);
}
function tt(e) {
  return !!(e && e.__v_isShallow);
}
function xs(e) {
  return e ? !!e.__v_raw : !1;
}
function ae(e) {
  const t = e && e.__v_raw;
  return t ? ae(t) : e;
}
function tu(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && ns(e, "__v_skip", !0), e;
}
const We = (e) => me(e) ? ws(e) : e, si = (e) => me(e) ? Ii(e) : e;
function Ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function z(e) {
  return su(e, !1);
}
function nu(e) {
  return su(e, !0);
}
function su(e, t) {
  return Ve(e) ? e : new Vp(e, t);
}
class Vp {
  constructor(t, n) {
    this.dep = new Vi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ae(t), this._value = n ? t : We(t), this.__v_isShallow = n;
  }
  get value() {
    return be.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || tt(t) || zt(t);
    t = s ? t : ae(t), lt(t, n) && (this._rawValue = t, this._value = s ? t : We(t), be.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function $p(e) {
  e.dep && (be.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function wo(e) {
  return Ve(e) ? e.value : e;
}
function Ap(e) {
  return se(e) ? e() : wo(e);
}
const Ip = {
  get: (e, t, n) => t === "__v_raw" ? e : wo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ve(o) && !Ve(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function dl(e) {
  return hn(e) ? e : new Proxy(e, Ip);
}
class Mp {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Vi(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ou(e) {
  return new Mp(e);
}
function Pp(e) {
  be.NODE_ENV !== "production" && !xs(e) && Vt("toRefs() expects a reactive object but received a plain one.");
  const t = q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = iu(e, n);
  return t;
}
class Rp {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return hp(ae(this._object), this._key);
  }
}
class Lp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Fp(e, t, n) {
  return Ve(e) ? e : se(e) ? new Lp(e) : me(e) && arguments.length > 1 ? iu(e, t, n) : z(e);
}
function iu(e, t, n) {
  const s = e[t];
  return Ve(s) ? s : new Rp(e, t, n);
}
class Bp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Vi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ao - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _e !== this)
      return Bc(this, !0), !0;
  }
  get value() {
    const t = be.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Uc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : be.NODE_ENV !== "production" && Vt("Write operation failed: computed value is readonly");
  }
}
function Hp(e, t, n = !1) {
  let s, o;
  se(e) ? s = e : (s = e.get, o = e.set);
  const i = new Bp(s, o, n);
  return be.NODE_ENV !== "production" && t && !n && (i.onTrack = t.onTrack, i.onTrigger = t.onTrigger), i;
}
const jp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Up = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Io = {}, oi = /* @__PURE__ */ new WeakMap();
let wn;
function qp() {
  return wn;
}
function ru(e, t = !1, n = wn) {
  if (n) {
    let s = oi.get(n);
    s || oi.set(n, s = []), s.push(e);
  } else be.NODE_ENV !== "production" && !t && Vt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function zp(e, t, n = fe) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, c = (b) => {
    (n.onWarn || Vt)(
      "Invalid watch source: ",
      b,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (b) => o ? b : tt(b) || o === !1 || o === 0 ? fn(b, 1) : fn(b);
  let u, p, m, E, y = !1, T = !1;
  if (Ve(e) ? (p = () => e.value, y = tt(e)) : hn(e) ? (p = () => d(e), y = !0) : q(e) ? (T = !0, y = e.some((b) => hn(b) || tt(b)), p = () => e.map((b) => {
    if (Ve(b))
      return b.value;
    if (hn(b))
      return d(b);
    if (se(b))
      return a ? a(b, 2) : b();
    be.NODE_ENV !== "production" && c(b);
  })) : se(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      Ut();
      try {
        m();
      } finally {
        qt();
      }
    }
    const b = wn;
    wn = u;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      wn = b;
    }
  } : (p = Oe, be.NODE_ENV !== "production" && c(e)), t && o) {
    const b = p, V = o === !0 ? 1 / 0 : o;
    p = () => fn(b(), V);
  }
  const C = ll(), v = () => {
    u.stop(), C && C.active && nl(C.effects, u);
  };
  if (i && t) {
    const b = t;
    t = (...V) => {
      b(...V), v();
    };
  }
  let f = T ? new Array(e.length).fill(Io) : Io;
  const w = (b) => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (t) {
        const V = u.run();
        if (o || y || (T ? V.some((P, S) => lt(P, f[S])) : lt(V, f))) {
          m && m();
          const P = wn;
          wn = u;
          try {
            const S = [
              V,
              // pass undefined as the old value when it's changed for the first time
              f === Io ? void 0 : T && f[0] === Io ? [] : f,
              E
            ];
            f = V, a ? a(t, 3, S) : (
              // @ts-expect-error
              t(...S)
            );
          } finally {
            wn = P;
          }
        }
      } else
        u.run();
  };
  return l && l(w), u = new lo(p), u.scheduler = r ? () => r(w, !1) : w, E = (b) => ru(b, !1, u), m = u.onStop = () => {
    const b = oi.get(u);
    if (b) {
      if (a)
        a(b, 4);
      else
        for (const V of b) V();
      oi.delete(u);
    }
  }, be.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? w(!0) : f = u.run() : r ? r(w.bind(null, !0), !0) : u.run(), v.pause = u.pause.bind(u), v.resume = u.resume.bind(u), v.stop = v, v;
}
function fn(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ve(e))
    fn(e.value, t, n);
  else if (q(e))
    for (let s = 0; s < e.length; s++)
      fn(e[s], t, n);
  else if (ls(e) || Yn(e))
    e.forEach((s) => {
      fn(s, t, n);
    });
  else if (Oi(e)) {
    for (const s in e)
      fn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && fn(e[s], t, n);
  }
  return e;
}
var N = {};
const Xn = [];
function vs(e) {
  Xn.push(e);
}
function ys() {
  Xn.pop();
}
let rr = !1;
function M(e, ...t) {
  if (rr) return;
  rr = !0, Ut();
  const n = Xn.length ? Xn[Xn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Kp();
  if (s)
    as(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var r, l;
          return (l = (r = i.toString) == null ? void 0 : r.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${Ki(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...Wp(o)), console.warn(...i);
  }
  qt(), rr = !1;
}
function Kp() {
  let e = Xn[Xn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Wp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Gp(n));
  }), t;
}
function Gp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Ki(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...Yp(e.props), i] : [o + i];
}
function Yp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...lu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function lu(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ve(t) ? (t = lu(e, ae(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : se(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ae(t), n ? t : [`${e}=`, t]);
}
function fl(e, t) {
  N.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? M(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && M(`${t} is NaN - the duration expression might be incorrect.`));
}
const Jp = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE",
  APP_UNMOUNT_CLEANUP: 16,
  16: "APP_UNMOUNT_CLEANUP"
}, Pi = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function as(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Fn(o, t, n);
  }
}
function $t(e, t, n, s) {
  if (se(e)) {
    const o = as(e, t, n, s);
    return o && ki(o) && o.catch((i) => {
      Fn(i, t, n);
    }), o;
  }
  if (q(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push($t(e[i], t, n, s));
    return o;
  } else N.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Fn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = N.NODE_ENV !== "production" ? Pi[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ut(), as(i, null, 10, [
        e,
        a,
        c
      ]), qt();
      return;
    }
  }
  Xp(e, n, o, s, r);
}
function Xp(e, t, n, s = !0, o = !1) {
  if (N.NODE_ENV !== "production") {
    const i = Pi[t];
    if (n && vs(n), M(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ys(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const at = [];
let Gt = -1;
const bs = [];
let xn = null, ms = 0;
const au = /* @__PURE__ */ Promise.resolve();
let ii = null;
const Qp = 100;
function xo(e) {
  const t = ii || au;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zp(e) {
  let t = Gt + 1, n = at.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = at[s], i = uo(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ri(e) {
  if (!(e.flags & 1)) {
    const t = uo(e), n = at[at.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= uo(n) ? at.push(e) : at.splice(Zp(t), 0, e), e.flags |= 1, cu();
  }
}
function cu() {
  ii || (ii = au.then(uu));
}
function Ss(e) {
  q(e) ? bs.push(...e) : xn && e.id === -1 ? xn.splice(ms + 1, 0, e) : e.flags & 1 || (bs.push(e), e.flags |= 1), cu();
}
function fa(e, t, n = Gt + 1) {
  for (N.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < at.length; n++) {
    const s = at[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || N.NODE_ENV !== "production" && pl(t, s))
        continue;
      at.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ri(e) {
  if (bs.length) {
    const t = [...new Set(bs)].sort(
      (n, s) => uo(n) - uo(s)
    );
    if (bs.length = 0, xn) {
      xn.push(...t);
      return;
    }
    for (xn = t, N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ms = 0; ms < xn.length; ms++) {
      const n = xn[ms];
      N.NODE_ENV !== "production" && pl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xn = null, ms = 0;
  }
}
const uo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uu(e) {
  N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = N.NODE_ENV !== "production" ? (n) => pl(e, n) : Oe;
  try {
    for (Gt = 0; Gt < at.length; Gt++) {
      const n = at[Gt];
      if (n && !(n.flags & 8)) {
        if (N.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), as(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Gt < at.length; Gt++) {
      const n = at[Gt];
      n && (n.flags &= -2);
    }
    Gt = -1, at.length = 0, ri(e), ii = null, (at.length || bs.length) && uu(e);
  }
}
function pl(e, t) {
  const n = e.get(t) || 0;
  if (n > Qp) {
    const s = t.i, o = s && Ts(s.type);
    return Fn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ft = !1;
const qo = /* @__PURE__ */ new Map();
N.NODE_ENV !== "production" && (No().__VUE_HMR_RUNTIME__ = {
  createRecord: lr(du),
  rerender: lr(nh),
  reload: lr(sh)
});
const ss = /* @__PURE__ */ new Map();
function eh(e) {
  const t = e.type.__hmrId;
  let n = ss.get(t);
  n || (du(t, e.type), n = ss.get(t)), n.instances.add(e);
}
function th(e) {
  ss.get(e.type.__hmrId).instances.delete(e);
}
function du(e, t) {
  return ss.has(e) ? !1 : (ss.set(e, {
    initialDef: li(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function li(e) {
  return bd(e) ? e.__vccOpts : e;
}
function nh(e, t) {
  const n = ss.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, li(s.type).render = t), s.renderCache = [], Ft = !0, s.update(), Ft = !1;
  }));
}
function sh(e, t) {
  const n = ss.get(e);
  if (!n) return;
  t = li(t), pa(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = li(i.type);
    let l = qo.get(r);
    l || (r !== n.initialDef && pa(r, t), qo.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Ri(() => {
      Ft = !0, i.parent.update(), Ft = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  Ss(() => {
    qo.clear();
  });
}
function pa(e, t) {
  de(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function lr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Pt, Ks = [], wr = !1;
function So(e, ...t) {
  Pt ? Pt.emit(e, ...t) : wr || Ks.push({ event: e, args: t });
}
function hl(e, t) {
  var n, s;
  Pt = e, Pt ? (Pt.enabled = !0, Ks.forEach(({ event: o, args: i }) => Pt.emit(o, ...i)), Ks = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    hl(i, t);
  }), setTimeout(() => {
    Pt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, wr = !0, Ks = []);
  }, 3e3)) : (wr = !0, Ks = []);
}
function oh(e, t) {
  So("app:init", e, t, {
    Fragment: ue,
    Text: nn,
    Comment: Te,
    Static: An
  });
}
function ih(e) {
  So("app:unmount", e);
}
const xr = /* @__PURE__ */ ml(
  "component:added"
  /* COMPONENT_ADDED */
), fu = /* @__PURE__ */ ml(
  "component:updated"
  /* COMPONENT_UPDATED */
), rh = /* @__PURE__ */ ml(
  "component:removed"
  /* COMPONENT_REMOVED */
), lh = (e) => {
  Pt && typeof Pt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Pt.cleanupBuffer(e) && rh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ml(e) {
  return (t) => {
    So(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ah = /* @__PURE__ */ pu(
  "perf:start"
  /* PERFORMANCE_START */
), ch = /* @__PURE__ */ pu(
  "perf:end"
  /* PERFORMANCE_END */
);
function pu(e) {
  return (t, n, s) => {
    So(e, t.appContext.app, t.uid, t, n, s);
  };
}
function uh(e, t, n) {
  So(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Re = null, Li = null;
function fo(e) {
  const t = Re;
  return Re = e, Li = e && e.type.__scopeId || null, t;
}
function dh(e) {
  Li = e;
}
function fh() {
  Li = null;
}
const ph = (e) => He;
function He(e, t = Re, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ar(-1);
    const i = fo(t);
    let r;
    try {
      r = e(...o);
    } finally {
      fo(i), s._d && Ar(1);
    }
    return N.NODE_ENV !== "production" && fu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function hu(e) {
  Tc(e) && M("Do not use built-in directive ids as custom directive id: " + e);
}
function vt(e, t) {
  if (Re === null)
    return N.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), e;
  const n = ko(Re), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = fe] = t[o];
    i && (se(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && fn(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Jt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (Ut(), $t(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), qt());
  }
}
const mu = Symbol("_vte"), gu = (e) => e.__isTeleport, Qn = (e) => e && (e.disabled || e.disabled === ""), ha = (e) => e && (e.defer || e.defer === ""), ma = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ga = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Sr = (e, t) => {
  const n = e && e.to;
  if (re(n))
    if (t) {
      const s = t(n);
      return N.NODE_ENV !== "production" && !s && !Qn(e) && M(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return N.NODE_ENV !== "production" && M(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return N.NODE_ENV !== "production" && !n && !Qn(e) && M(`Invalid Teleport target: ${n}`), n;
}, vu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    const {
      mc: d,
      pc: u,
      pbc: p,
      o: { insert: m, querySelector: E, createText: y, createComment: T }
    } = c, C = Qn(t.props);
    let { shapeFlag: v, children: f, dynamicChildren: w } = t;
    if (N.NODE_ENV !== "production" && Ft && (a = !1, w = null), e == null) {
      const b = t.el = N.NODE_ENV !== "production" ? T("teleport start") : y(""), V = t.anchor = N.NODE_ENV !== "production" ? T("teleport end") : y("");
      m(b, n, s), m(V, n, s);
      const P = (_, O) => {
        v & 16 && (o && o.isCE && (o.ce._teleportTarget = _), d(
          f,
          _,
          O,
          o,
          i,
          r,
          l,
          a
        ));
      }, S = () => {
        const _ = t.target = Sr(t.props, E), O = yu(_, t, y, m);
        _ ? (r !== "svg" && ma(_) ? r = "svg" : r !== "mathml" && ga(_) && (r = "mathml"), C || (P(_, O), zo(t, !1))) : N.NODE_ENV !== "production" && !C && M(
          "Invalid Teleport target on mount:",
          _,
          `(${typeof _})`
        );
      };
      C && (P(n, V), zo(t, !0)), ha(t.props) ? (t.el.__isMounted = !1, Fe(() => {
        S(), delete t.el.__isMounted;
      }, i)) : S();
    } else {
      if (ha(t.props) && e.el.__isMounted === !1) {
        Fe(() => {
          vu.process(
            e,
            t,
            n,
            s,
            o,
            i,
            r,
            l,
            a,
            c
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const b = t.anchor = e.anchor, V = t.target = e.target, P = t.targetAnchor = e.targetAnchor, S = Qn(e.props), _ = S ? n : V, O = S ? b : P;
      if (r === "svg" || ma(V) ? r = "svg" : (r === "mathml" || ga(V)) && (r = "mathml"), w ? (p(
        e.dynamicChildren,
        w,
        _,
        o,
        i,
        r,
        l
      ), no(e, t, N.NODE_ENV === "production")) : a || u(
        e,
        t,
        _,
        O,
        o,
        i,
        r,
        l,
        !1
      ), C)
        S ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Mo(
          t,
          n,
          b,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const I = t.target = Sr(
          t.props,
          E
        );
        I ? Mo(
          t,
          I,
          null,
          c,
          0
        ) : N.NODE_ENV !== "production" && M(
          "Invalid Teleport target on update:",
          V,
          `(${typeof V})`
        );
      } else S && Mo(
        t,
        V,
        P,
        c,
        1
      );
      zo(t, C);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: d,
      target: u,
      props: p
    } = e;
    if (u && (o(c), o(d)), i && o(a), r & 16) {
      const m = i || !Qn(p);
      for (let E = 0; E < l.length; E++) {
        const y = l[E];
        s(
          y,
          t,
          n,
          m,
          !!y.dynamicChildren
        );
      }
    }
  },
  move: Mo,
  hydrate: hh
};
function Mo(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: c, props: d } = e, u = i === 2;
  if (u && s(r, t, n), (!u || Qn(d)) && a & 16)
    for (let p = 0; p < c.length; p++)
      o(
        c[p],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function hh(e, t, n, s, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: c, createText: d }
}, u) {
  const p = t.target = Sr(
    t.props,
    a
  );
  if (p) {
    const m = Qn(t.props), E = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = u(
          r(e),
          t,
          l(e),
          n,
          s,
          o,
          i
        ), t.targetStart = E, t.targetAnchor = E && r(E);
      else {
        t.anchor = r(e);
        let y = E;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor")
              t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, p._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          y = r(y);
        }
        t.targetAnchor || yu(p, t, d, c), u(
          E && r(E),
          t,
          p,
          n,
          s,
          o,
          i
        );
      }
    zo(t, m);
  }
  return t.anchor && r(t.anchor);
}
const cs = vu;
function zo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function yu(e, t, n, s) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[mu] = i, e && (s(o, e), s(i, e)), i;
}
const Sn = Symbol("_leaveCb"), Po = Symbol("_enterCb");
function gl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ye(() => {
    e.isMounted = !0;
  }), ji(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ot = [Function, Array], vl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ot,
  onEnter: Ot,
  onAfterEnter: Ot,
  onEnterCancelled: Ot,
  // leave
  onBeforeLeave: Ot,
  onLeave: Ot,
  onAfterLeave: Ot,
  onLeaveCancelled: Ot,
  // appear
  onBeforeAppear: Ot,
  onAppear: Ot,
  onAfterAppear: Ot,
  onAppearCancelled: Ot
}, bu = (e) => {
  const t = e.subTree;
  return t.component ? bu(t.component) : t;
}, mh = {
  name: "BaseTransition",
  props: vl,
  setup(e, { slots: t }) {
    const n = dt(), s = gl();
    return () => {
      const o = t.default && Fi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = _u(o), r = ae(e), { mode: l } = r;
      if (N.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && M(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ar(i);
      const a = va(i);
      if (!a)
        return ar(i);
      let c = Cs(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      a.type !== Te && vn(a, c);
      let d = n.subTree && va(n.subTree);
      if (d && d.type !== Te && !Rt(a, d) && bu(n).type !== Te) {
        let u = Cs(
          d,
          r,
          s,
          n
        );
        if (vn(d, u), l === "out-in" && a.type !== Te)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, d = void 0;
          }, ar(i);
        l === "in-out" && a.type !== Te ? u.delayLeave = (p, m, E) => {
          const y = Nu(
            s,
            d
          );
          y[String(d.key)] = d, p[Sn] = () => {
            m(), p[Sn] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            E(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function _u(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== Te) {
        if (N.NODE_ENV !== "production" && n) {
          M(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, N.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Eu = mh;
function Nu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Cs(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: E,
    onLeaveCancelled: y,
    onBeforeAppear: T,
    onAppear: C,
    onAfterAppear: v,
    onAppearCancelled: f
  } = t, w = String(e.key), b = Nu(n, e), V = (_, O) => {
    _ && $t(
      _,
      s,
      9,
      O
    );
  }, P = (_, O) => {
    const I = O[1];
    V(_, O), q(_) ? _.every(($) => $.length <= 1) && I() : _.length <= 1 && I();
  }, S = {
    mode: r,
    persisted: l,
    beforeEnter(_) {
      let O = a;
      if (!n.isMounted)
        if (i)
          O = T || a;
        else
          return;
      _[Sn] && _[Sn](
        !0
        /* cancelled */
      );
      const I = b[w];
      I && Rt(e, I) && I.el[Sn] && I.el[Sn](), V(O, [_]);
    },
    enter(_) {
      let O = c, I = d, $ = u;
      if (!n.isMounted)
        if (i)
          O = C || c, I = v || d, $ = f || u;
        else
          return;
      let L = !1;
      const J = _[Po] = (ee) => {
        L || (L = !0, ee ? V($, [_]) : V(I, [_]), S.delayedLeave && S.delayedLeave(), _[Po] = void 0);
      };
      O ? P(O, [_, J]) : J();
    },
    leave(_, O) {
      const I = String(e.key);
      if (_[Po] && _[Po](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      V(p, [_]);
      let $ = !1;
      const L = _[Sn] = (J) => {
        $ || ($ = !0, O(), J ? V(y, [_]) : V(E, [_]), _[Sn] = void 0, b[I] === e && delete b[I]);
      };
      b[I] = e, m ? P(m, [_, L]) : L();
    },
    clone(_) {
      const O = Cs(
        _,
        t,
        n,
        s,
        o
      );
      return o && o(O), O;
    }
  };
  return S;
}
function ar(e) {
  if (Ls(e))
    return e = At(e), e.children = null, e;
}
function va(e) {
  if (!Ls(e))
    return gu(e.type) && e.children ? _u(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && se(n.default))
      return n.default();
  }
}
function vn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Fi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === ue ? (r.patchFlag & 128 && o++, s = s.concat(
      Fi(r.children, t, l)
    )) : (t || r.type !== Te) && s.push(l != null ? At(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function yl(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function gh() {
  const e = dt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (N.NODE_ENV !== "production" && M(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function bl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const wu = /* @__PURE__ */ new WeakSet();
function vh(e) {
  const t = dt(), n = nu(null);
  if (t) {
    const o = t.refs === fe ? t.refs = {} : t.refs;
    let i;
    N.NODE_ENV !== "production" && (i = Object.getOwnPropertyDescriptor(o, e)) && !i.configurable ? M(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  } else N.NODE_ENV !== "production" && M(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = N.NODE_ENV !== "production" ? Ii(n) : n;
  return N.NODE_ENV !== "production" && wu.add(s), s;
}
function _s(e, t, n, s, o = !1) {
  if (q(e)) {
    e.forEach(
      (E, y) => _s(
        E,
        t && (q(t) ? t[y] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if ($n(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && _s(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? ko(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e;
  if (N.NODE_ENV !== "production" && !l) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = l.refs === fe ? l.refs = {} : l.refs, u = l.setupState, p = ae(u), m = u === fe ? () => !1 : (E) => N.NODE_ENV !== "production" && (ge(p, E) && !Ve(p[E]) && M(
    `Template ref "${E}" used on a non-ref value. It will not work in the production build.`
  ), wu.has(p[E])) ? !1 : ge(p, E);
  if (c != null && c !== a && (re(c) ? (d[c] = null, m(c) && (u[c] = null)) : Ve(c) && (c.value = null)), se(a))
    as(a, l, 12, [r, d]);
  else {
    const E = re(a), y = Ve(a);
    if (E || y) {
      const T = () => {
        if (e.f) {
          const C = E ? m(a) ? u[a] : d[a] : a.value;
          o ? q(C) && nl(C, i) : q(C) ? C.includes(i) || C.push(i) : E ? (d[a] = [i], m(a) && (u[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else E ? (d[a] = r, m(a) && (u[a] = r)) : y ? (a.value = r, e.k && (d[e.k] = r)) : N.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? (T.id = -1, Fe(T, n)) : T();
    } else N.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ya = !1;
const Hn = () => {
  ya || (console.error("Hydration completed but contains mismatches."), ya = !0);
}, yh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", bh = (e) => e.namespaceURI.includes("MathML"), Ro = (e) => {
  if (e.nodeType === 1) {
    if (yh(e)) return "svg";
    if (bh(e)) return "mathml";
  }
}, Kn = (e) => e.nodeType === 8;
function _h(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: o,
      nextSibling: i,
      parentNode: r,
      remove: l,
      insert: a,
      createComment: c
    }
  } = e, d = (f, w) => {
    if (!w.hasChildNodes()) {
      N.NODE_ENV !== "production" && M(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, f, w), ri(), w._vnode = f;
      return;
    }
    u(w.firstChild, f, null, null, null), ri(), w._vnode = f;
  }, u = (f, w, b, V, P, S = !1) => {
    S = S || !!w.dynamicChildren;
    const _ = Kn(f) && f.data === "[", O = () => y(
      f,
      w,
      b,
      V,
      P,
      _
    ), { type: I, ref: $, shapeFlag: L, patchFlag: J } = w;
    let ee = f.nodeType;
    w.el = f, N.NODE_ENV !== "production" && (ns(f, "__vnode", w, !0), ns(f, "__vueParentComponent", b, !0)), J === -2 && (S = !1, w.dynamicChildren = null);
    let Z = null;
    switch (I) {
      case nn:
        ee !== 3 ? w.children === "" ? (a(w.el = o(""), r(f), f), Z = f) : Z = O() : (f.data !== w.children && (N.NODE_ENV !== "production" && M(
          "Hydration text mismatch in",
          f.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            f.data
          )}
  - expected on client: ${JSON.stringify(w.children)}`
        ), Hn(), f.data = w.children), Z = i(f));
        break;
      case Te:
        v(f) ? (Z = i(f), C(
          w.el = f.content.firstChild,
          f,
          b
        )) : ee !== 8 || _ ? Z = O() : Z = i(f);
        break;
      case An:
        if (_ && (f = i(f), ee = f.nodeType), ee === 1 || ee === 3) {
          Z = f;
          const ne = !w.children.length;
          for (let Q = 0; Q < w.staticCount; Q++)
            ne && (w.children += Z.nodeType === 1 ? Z.outerHTML : Z.data), Q === w.staticCount - 1 && (w.anchor = Z), Z = i(Z);
          return _ ? i(Z) : Z;
        } else
          O();
        break;
      case ue:
        _ ? Z = E(
          f,
          w,
          b,
          V,
          P,
          S
        ) : Z = O();
        break;
      default:
        if (L & 1)
          (ee !== 1 || w.type.toLowerCase() !== f.tagName.toLowerCase()) && !v(f) ? Z = O() : Z = p(
            f,
            w,
            b,
            V,
            P,
            S
          );
        else if (L & 6) {
          w.slotScopeIds = P;
          const ne = r(f);
          if (_ ? Z = T(f) : Kn(f) && f.data === "teleport start" ? Z = T(f, f.data, "teleport end") : Z = i(f), t(
            w,
            ne,
            null,
            b,
            V,
            Ro(ne),
            S
          ), $n(w) && !w.type.__asyncResolved) {
            let Q;
            _ ? (Q = pe(ue), Q.anchor = Z ? Z.previousSibling : ne.lastChild) : Q = f.nodeType === 3 ? Me("") : pe("div"), Q.el = f, w.component.subTree = Q;
          }
        } else L & 64 ? ee !== 8 ? Z = O() : Z = w.type.hydrate(
          f,
          w,
          b,
          V,
          P,
          S,
          e,
          m
        ) : L & 128 ? Z = w.type.hydrate(
          f,
          w,
          b,
          V,
          Ro(r(f)),
          P,
          S,
          e,
          u
        ) : N.NODE_ENV !== "production" && M("Invalid HostVNode type:", I, `(${typeof I})`);
    }
    return $ != null && _s($, null, V, w), Z;
  }, p = (f, w, b, V, P, S) => {
    S = S || !!w.dynamicChildren;
    const { type: _, props: O, patchFlag: I, shapeFlag: $, dirs: L, transition: J } = w, ee = _ === "input" || _ === "option";
    if (N.NODE_ENV !== "production" || ee || I !== -1) {
      L && Jt(w, null, b, "created");
      let Z = !1;
      if (v(f)) {
        Z = Yu(
          null,
          // no need check parentSuspense in hydration
          J
        ) && b && b.vnode.props && b.vnode.props.appear;
        const Q = f.content.firstChild;
        if (Z) {
          const Ee = Q.getAttribute("class");
          Ee && (Q.$cls = Ee), J.beforeEnter(Q);
        }
        C(Q, f, b), w.el = f = Q;
      }
      if ($ & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let Q = m(
          f.firstChild,
          w,
          f,
          b,
          V,
          P,
          S
        ), Ee = !1;
        for (; Q; ) {
          Ws(
            f,
            1
            /* CHILDREN */
          ) || (N.NODE_ENV !== "production" && !Ee && (M(
            "Hydration children mismatch on",
            f,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Ee = !0), Hn());
          const ft = Q;
          Q = Q.nextSibling, l(ft);
        }
      } else if ($ & 8) {
        let Q = w.children;
        Q[0] === `
` && (f.tagName === "PRE" || f.tagName === "TEXTAREA") && (Q = Q.slice(1)), f.textContent !== Q && (Ws(
          f,
          0
          /* TEXT */
        ) || (N.NODE_ENV !== "production" && M(
          "Hydration text content mismatch on",
          f,
          `
  - rendered on server: ${f.textContent}
  - expected on client: ${w.children}`
        ), Hn()), f.textContent = w.children);
      }
      if (O) {
        if (N.NODE_ENV !== "production" || ee || !S || I & 48) {
          const Q = f.tagName.includes("-");
          for (const Ee in O)
            N.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(L && L.some((ft) => ft.dir.created)) && Eh(f, Ee, O[Ee], w, b) && Hn(), (ee && (Ee.endsWith("value") || Ee === "indeterminate") || gn(Ee) && !Vn(Ee) || // force hydrate v-bind with .prop modifiers
            Ee[0] === "." || Q) && s(f, Ee, null, O[Ee], void 0, b);
        } else if (O.onClick)
          s(
            f,
            "onClick",
            null,
            O.onClick,
            void 0,
            b
          );
        else if (I & 4 && hn(O.style))
          for (const Q in O.style) O.style[Q];
      }
      let ne;
      (ne = O && O.onVnodeBeforeMount) && gt(ne, b, w), L && Jt(w, null, b, "beforeMount"), ((ne = O && O.onVnodeMounted) || L || Z) && id(() => {
        ne && gt(ne, b, w), Z && J.enter(f), L && Jt(w, null, b, "mounted");
      }, V);
    }
    return f.nextSibling;
  }, m = (f, w, b, V, P, S, _) => {
    _ = _ || !!w.dynamicChildren;
    const O = w.children, I = O.length;
    let $ = !1;
    for (let L = 0; L < I; L++) {
      const J = _ ? O[L] : O[L] = ct(O[L]), ee = J.type === nn;
      f ? (ee && !_ && L + 1 < I && ct(O[L + 1]).type === nn && (a(
        o(
          f.data.slice(J.children.length)
        ),
        b,
        i(f)
      ), f.data = J.children), f = u(
        f,
        J,
        V,
        P,
        S,
        _
      )) : ee && !J.children ? a(J.el = o(""), b) : (Ws(
        b,
        1
        /* CHILDREN */
      ) || (N.NODE_ENV !== "production" && !$ && (M(
        "Hydration children mismatch on",
        b,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), $ = !0), Hn()), n(
        null,
        J,
        b,
        null,
        V,
        P,
        Ro(b),
        S
      ));
    }
    return f;
  }, E = (f, w, b, V, P, S) => {
    const { slotScopeIds: _ } = w;
    _ && (P = P ? P.concat(_) : _);
    const O = r(f), I = m(
      i(f),
      w,
      O,
      b,
      V,
      P,
      S
    );
    return I && Kn(I) && I.data === "]" ? i(w.anchor = I) : (Hn(), a(w.anchor = c("]"), O, I), I);
  }, y = (f, w, b, V, P, S) => {
    if (Ws(
      f.parentElement,
      1
      /* CHILDREN */
    ) || (N.NODE_ENV !== "production" && M(
      `Hydration node mismatch:
- rendered on server:`,
      f,
      f.nodeType === 3 ? "(text)" : Kn(f) && f.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      w.type
    ), Hn()), w.el = null, S) {
      const I = T(f);
      for (; ; ) {
        const $ = i(f);
        if ($ && $ !== I)
          l($);
        else
          break;
      }
    }
    const _ = i(f), O = r(f);
    return l(f), n(
      null,
      w,
      O,
      _,
      b,
      V,
      Ro(O),
      P
    ), b && (b.vnode.el = w.el, zi(b, w.el)), _;
  }, T = (f, w = "[", b = "]") => {
    let V = 0;
    for (; f; )
      if (f = i(f), f && Kn(f) && (f.data === w && V++, f.data === b)) {
        if (V === 0)
          return i(f);
        V--;
      }
    return f;
  }, C = (f, w, b) => {
    const V = w.parentNode;
    V && V.replaceChild(f, w);
    let P = b;
    for (; P; )
      P.vnode.el === w && (P.vnode.el = P.subTree.el = f), P = P.parent;
  }, v = (f) => f.nodeType === 1 && f.tagName === "TEMPLATE";
  return [d, u];
}
function Eh(e, t, n, s, o) {
  let i, r, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Ge(n), Nh(ba(l || ""), ba(a)) || (i = 2, r = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = re(n) ? n : Yf(_t(n));
    const c = _a(l), d = _a(a);
    if (s.dirs)
      for (const { dir: u, value: p } of s.dirs)
        u.name === "show" && !p && d.set("display", "none");
    o && xu(o, s, d), wh(c, d) || (i = 3, r = "style");
  } else (e instanceof SVGElement && op(t) || e instanceof HTMLElement && (aa(t) || sp(t))) && (aa(t) ? (l = e.hasAttribute(t), a = il(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = ip(n) ? String(n) : !1), l !== a && (i = 4, r = t));
  if (i != null && !Ws(e, i)) {
    const c = (p) => p === !1 ? "(not rendered)" : `${r}="${p}"`, d = `Hydration ${Su[i]} mismatch on`, u = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return M(d, e, u), !0;
  }
  return !1;
}
function ba(e) {
  return new Set(e.trim().split(/\s+/));
}
function Nh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function _a(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [s, o] = n.split(":");
    s = s.trim(), o = o && o.trim(), s && o && t.set(s, o);
  }
  return t;
}
function wh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function xu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ue && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const i in o) {
      const r = Rc(o[i]);
      n.set(`--${lp(i)}`, r);
    }
  }
  t === s && e.parent && xu(e.parent, e.vnode, n);
}
const Ea = "data-allow-mismatch", Su = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Ws(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Ea); )
      e = e.parentElement;
  const n = e && e.getAttribute(Ea);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(Su[t]);
  }
}
const xh = No().requestIdleCallback || ((e) => setTimeout(e, 1)), Sh = No().cancelIdleCallback || ((e) => clearTimeout(e)), Ch = (e = 1e4) => (t) => {
  const n = xh(t, { timeout: e });
  return () => Sh(n);
};
function kh(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: i, innerWidth: r } = window;
  return (t > 0 && t < i || s > 0 && s < i) && (n > 0 && n < r || o > 0 && o < r);
}
const Oh = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const i of o)
      if (i.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (kh(o))
        return t(), s.disconnect(), !1;
      s.observe(o);
    }
  }), () => s.disconnect();
}, Th = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Dh = (e = []) => (t, n) => {
  re(e) && (e = [e]);
  let s = !1;
  const o = (r) => {
    s || (s = !0, i(), t(), r.target.dispatchEvent(new r.constructor(r.type, r)));
  }, i = () => {
    n((r) => {
      for (const l of e)
        r.removeEventListener(l, o);
    });
  };
  return n((r) => {
    for (const l of e)
      r.addEventListener(l, o, { once: !0 });
  }), i;
};
function Vh(e, t) {
  if (Kn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (Kn(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const $n = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $h(e) {
  se(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    hydrate: i,
    timeout: r,
    // undefined = never times out
    suspensible: l = !0,
    onError: a
  } = e;
  let c = null, d, u = 0;
  const p = () => (u++, c = null, m()), m = () => {
    let E;
    return c || (E = c = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), a)
        return new Promise((T, C) => {
          a(y, () => T(p()), () => C(y), u + 1);
        });
      throw y;
    }).then((y) => {
      if (E !== c && c)
        return c;
      if (N.NODE_ENV !== "production" && !y && M(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), N.NODE_ENV !== "production" && y && !me(y) && !se(y))
        throw new Error(`Invalid async component load result: ${y}`);
      return d = y, y;
    }));
  };
  return /* @__PURE__ */ yl({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(E, y, T) {
      let C = !1;
      (y.bu || (y.bu = [])).push(() => C = !0);
      const v = () => {
        if (C) {
          N.NODE_ENV !== "production" && M(
            `Skipping lazy hydration for component '${Ts(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        T();
      }, f = i ? () => {
        const w = i(
          v,
          (b) => Vh(E, b)
        );
        w && (y.bum || (y.bum = [])).push(w);
      } : v;
      d ? f() : m().then(() => !y.isUnmounted && f());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const E = Ue;
      if (bl(E), d)
        return () => cr(d, E);
      const y = (f) => {
        c = null, Fn(
          f,
          E,
          13,
          !s
        );
      };
      if (l && E.suspense || Os)
        return m().then((f) => () => cr(f, E)).catch((f) => (y(f), () => s ? pe(s, {
          error: f
        }) : null));
      const T = z(!1), C = z(), v = z(!!o);
      return o && setTimeout(() => {
        v.value = !1;
      }, o), r != null && setTimeout(() => {
        if (!T.value && !C.value) {
          const f = new Error(
            `Async component timed out after ${r}ms.`
          );
          y(f), C.value = f;
        }
      }, r), m().then(() => {
        T.value = !0, E.parent && Ls(E.parent.vnode) && E.parent.update();
      }).catch((f) => {
        y(f), C.value = f;
      }), () => {
        if (T.value && d)
          return cr(d, E);
        if (C.value && s)
          return pe(s, {
            error: C.value
          });
        if (n && !v.value)
          return pe(n);
      };
    }
  });
}
function cr(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, r = pe(e, s, o);
  return r.ref = n, r.ce = i, delete t.vnode.ce, r;
}
const Ls = (e) => e.type.__isKeepAlive, Ah = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = dt(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const v = t.default && t.default();
        return v && v.length === 1 ? v[0] : v;
      };
    const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    let r = null;
    N.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: d,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (v, f, w, b, V) => {
      const P = v.component;
      c(v, f, w, 0, l), a(
        P.vnode,
        v,
        f,
        w,
        P,
        l,
        b,
        v.slotScopeIds,
        V
      ), Fe(() => {
        P.isDeactivated = !1, P.a && On(P.a);
        const S = v.props && v.props.onVnodeMounted;
        S && gt(S, P.parent, v);
      }, l), N.NODE_ENV !== "production" && xr(P);
    }, s.deactivate = (v) => {
      const f = v.component;
      di(f.m), di(f.a), c(v, p, null, 1, l), Fe(() => {
        f.da && On(f.da);
        const w = v.props && v.props.onVnodeUnmounted;
        w && gt(w, f.parent, v), f.isDeactivated = !0;
      }, l), N.NODE_ENV !== "production" && xr(f), N.NODE_ENV !== "production" && (f.__keepAliveStorageContainer = p);
    };
    function m(v) {
      ur(v), d(v, n, l, !0);
    }
    function E(v) {
      o.forEach((f, w) => {
        const b = Ts(f.type);
        b && !v(b) && y(w);
      });
    }
    function y(v) {
      const f = o.get(v);
      f && (!r || !Rt(f, r)) ? m(f) : r && ur(r), o.delete(v), i.delete(v);
    }
    tn(
      () => [e.include, e.exclude],
      ([v, f]) => {
        v && E((w) => Gs(v, w)), f && E((w) => !Gs(f, w));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let T = null;
    const C = () => {
      T != null && (pi(n.subTree.type) ? Fe(() => {
        o.set(T, Lo(n.subTree));
      }, n.subTree.suspense) : o.set(T, Lo(n.subTree)));
    };
    return Ye(C), Hi(C), ji(() => {
      o.forEach((v) => {
        const { subTree: f, suspense: w } = n, b = Lo(f);
        if (v.type === b.type && v.key === b.key) {
          ur(b);
          const V = b.component.da;
          V && Fe(V, w);
          return;
        }
        m(v);
      });
    }), () => {
      if (T = null, !t.default)
        return r = null;
      const v = t.default(), f = v[0];
      if (v.length > 1)
        return N.NODE_ENV !== "production" && M("KeepAlive should contain exactly one component child."), r = null, v;
      if (!rn(f) || !(f.shapeFlag & 4) && !(f.shapeFlag & 128))
        return r = null, f;
      let w = Lo(f);
      if (w.type === Te)
        return r = null, w;
      const b = w.type, V = Ts(
        $n(w) ? w.type.__asyncResolved || {} : b
      ), { include: P, exclude: S, max: _ } = e;
      if (P && (!V || !Gs(P, V)) || S && V && Gs(S, V))
        return w.shapeFlag &= -257, r = w, f;
      const O = w.key == null ? b : w.key, I = o.get(O);
      return w.el && (w = At(w), f.shapeFlag & 128 && (f.ssContent = w)), T = O, I ? (w.el = I.el, w.component = I.component, w.transition && vn(w, w.transition), w.shapeFlag |= 512, i.delete(O), i.add(O)) : (i.add(O), _ && i.size > parseInt(_, 10) && y(i.values().next().value)), w.shapeFlag |= 256, r = w, pi(f.type) ? f : w;
    };
  }
}, Ih = Ah;
function Gs(e, t) {
  return q(e) ? e.some((n) => Gs(n, t)) : re(e) ? e.split(",").includes(t) : Lf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Cu(e, t) {
  Ou(e, "a", t);
}
function ku(e, t) {
  Ou(e, "da", t);
}
function Ou(e, t, n = Ue) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Bi(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ls(o.parent.vnode) && Mh(s, t, n, o), o = o.parent;
  }
}
function Mh(e, t, n, s) {
  const o = Bi(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  It(() => {
    nl(s[t], o);
  }, n);
}
function ur(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Lo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Bi(e, t, n = Ue, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Ut();
      const l = is(n), a = $t(t, n, e, r);
      return l(), qt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (N.NODE_ENV !== "production") {
    const o = Qt(Pi[e].replace(/ hook$/, ""));
    M(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const yn = (e) => (t, n = Ue) => {
  (!Os || e === "sp") && Bi(e, (...s) => t(...s), n);
}, Tu = yn("bm"), Ye = yn("m"), _l = yn(
  "bu"
), Hi = yn("u"), ji = yn(
  "bum"
), It = yn("um"), Du = yn(
  "sp"
), Vu = yn("rtg"), $u = yn("rtc");
function Au(e, t = Ue) {
  Bi("ec", e, t);
}
const ai = "components", Ph = "directives";
function Rh(e, t) {
  return wl(ai, e, !0, t) || e;
}
const El = Symbol.for("v-ndc");
function Nl(e) {
  return re(e) ? wl(ai, e, !1) || e : e || El;
}
function Lh(e) {
  return wl(Ph, e);
}
function wl(e, t, n = !0, s = !1) {
  const o = Re || Ue;
  if (o) {
    const i = o.type;
    if (e === ai) {
      const l = Ts(
        i,
        !1
      );
      if (l && (l === t || l === Se(t) || l === on(Se(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      Na(o[e] || i[e], t) || // global registration
      Na(o.appContext[e], t)
    );
    if (!r && s)
      return i;
    if (N.NODE_ENV !== "production" && n && !r) {
      const l = e === ai ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      M(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else N.NODE_ENV !== "production" && M(
    `resolve${on(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Na(e, t) {
  return e && (e[t] || e[Se(t)] || e[on(Se(t))]);
}
function Ae(e, t, n, s) {
  let o;
  const i = n && n[s], r = q(e);
  if (r || re(e)) {
    const l = r && hn(e);
    let a = !1, c = !1;
    l && (a = !tt(e), c = zt(e), e = $i(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? c ? si(We(e[d])) : We(e[d]) : e[d],
        d,
        void 0,
        i && i[d]
      );
  } else if (typeof e == "number") {
    N.NODE_ENV !== "production" && !Number.isInteger(e) && M(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i && i[l]);
  } else if (me(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, i && i[a])
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, i && i[a]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
function Fh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (q(s))
      for (let o = 0; o < s.length; o++)
        e[s[o].name] = s[o].fn;
    else s && (e[s.name] = s.key ? (...o) => {
      const i = s.fn(...o);
      return i && (i.key = s.key), i;
    } : s.fn);
  }
  return e;
}
function Bn(e, t, n = {}, s, o) {
  if (Re.ce || Re.parent && $n(Re.parent) && Re.parent.ce)
    return t !== "default" && (n.name = t), k(), ut(
      ue,
      null,
      [pe("slot", n, s && s())],
      64
    );
  let i = e[t];
  N.NODE_ENV !== "production" && i && i.length > 1 && (M(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), k();
  const r = i && xl(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, a = ut(
    ue,
    {
      key: (l && !Et(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && s ? "_fb" : "")
    },
    r || (s ? s() : []),
    r && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function xl(e) {
  return e.some((t) => rn(t) ? !(t.type === Te || t.type === ue && !xl(t.children)) : !0) ? e : null;
}
function Bh(e, t) {
  const n = {};
  if (N.NODE_ENV !== "production" && !me(e))
    return M("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Qt(s)] = e[s];
  return n;
}
const Cr = (e) => e ? hd(e) ? ko(e) : Cr(e.parent) : null, Zn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => N.NODE_ENV !== "production" ? Lt(e.props) : e.props,
    $attrs: (e) => N.NODE_ENV !== "production" ? Lt(e.attrs) : e.attrs,
    $slots: (e) => N.NODE_ENV !== "production" ? Lt(e.slots) : e.slots,
    $refs: (e) => N.NODE_ENV !== "production" ? Lt(e.refs) : e.refs,
    $parent: (e) => Cr(e.parent),
    $root: (e) => Cr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ri(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xo.bind(e.proxy)),
    $watch: (e) => Dm.bind(e)
  })
), Sl = (e) => e === "_" || e === "$", dr = (e, t) => e !== fe && !e.__isScriptSetup && ge(e, t), eo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (N.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const m = r[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (dr(s, t))
          return r[t] = 1, s[t];
        if (o !== fe && ge(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && ge(c, t)
        )
          return r[t] = 3, i[t];
        if (n !== fe && ge(n, t))
          return r[t] = 4, n[t];
        kr && (r[t] = 0);
      }
    }
    const d = Zn[t];
    let u, p;
    if (d)
      return t === "$attrs" ? (Be(e.attrs, "get", ""), N.NODE_ENV !== "production" && fi()) : N.NODE_ENV !== "production" && t === "$slots" && Be(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== fe && ge(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, ge(p, t)
    )
      return p[t];
    N.NODE_ENV !== "production" && Re && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== fe && Sl(t[0]) && ge(o, t) ? M(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Re && M(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return dr(o, t) ? (o[t] = n, !0) : N.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (M(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== fe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (N.NODE_ENV !== "production" && M(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (N.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (N.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i }
  }, r) {
    let l;
    return !!n[r] || e !== fe && ge(e, r) || dr(t, r) || (l = i[0]) && ge(l, r) || ge(s, r) || ge(Zn, r) || ge(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
N.NODE_ENV !== "production" && (eo.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Hh = /* @__PURE__ */ de({}, eo, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return eo.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !qf(t);
    return N.NODE_ENV !== "production" && !n && eo.has(e, t) && M(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function jh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Zn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Zn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Oe
    });
  }), t;
}
function Uh(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Oe
    });
  });
}
function qh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ae(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Sl(s[0])) {
        M(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: Oe
      });
    }
  });
}
const us = (e) => M(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function zh() {
  return N.NODE_ENV !== "production" && us("defineProps"), null;
}
function Kh() {
  return N.NODE_ENV !== "production" && us("defineEmits"), null;
}
function Wh(e) {
  N.NODE_ENV !== "production" && us("defineExpose");
}
function Gh(e) {
  N.NODE_ENV !== "production" && us("defineOptions");
}
function Yh() {
  return N.NODE_ENV !== "production" && us("defineSlots"), null;
}
function Jh() {
  N.NODE_ENV !== "production" && us("defineModel");
}
function Xh(e, t) {
  return N.NODE_ENV !== "production" && us("withDefaults"), null;
}
function Qh() {
  return Iu("useSlots").slots;
}
function Zh() {
  return Iu("useAttrs").attrs;
}
function Iu(e) {
  const t = dt();
  return N.NODE_ENV !== "production" && !t && M(`${e}() called without active instance.`), t.setupContext || (t.setupContext = yd(t));
}
function po(e) {
  return q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function em(e, t) {
  const n = po(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? q(o) || se(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : N.NODE_ENV !== "production" && M(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function tm(e, t) {
  return !e || !t ? e || t : q(e) && q(t) ? e.concat(t) : de({}, po(e), po(t));
}
function nm(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function sm(e) {
  const t = dt();
  N.NODE_ENV !== "production" && !t && M(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Pr(), ki(n) && (n = n.catch((s) => {
    throw is(t), s;
  })), [n, () => is(t)];
}
function om() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? M(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let kr = !0;
function im(e) {
  const t = Cl(e), n = e.proxy, s = e.ctx;
  kr = !1, t.beforeCreate && wa(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: p,
    beforeUpdate: m,
    updated: E,
    activated: y,
    deactivated: T,
    beforeDestroy: C,
    beforeUnmount: v,
    destroyed: f,
    unmounted: w,
    render: b,
    renderTracked: V,
    renderTriggered: P,
    errorCaptured: S,
    serverPrefetch: _,
    // public API
    expose: O,
    inheritAttrs: I,
    // assets
    components: $,
    directives: L,
    filters: J
  } = t, ee = N.NODE_ENV !== "production" ? om() : null;
  if (N.NODE_ENV !== "production") {
    const [ne] = e.propsOptions;
    if (ne)
      for (const Q in ne)
        ee("Props", Q);
  }
  if (c && rm(c, s, ee), r)
    for (const ne in r) {
      const Q = r[ne];
      se(Q) ? (N.NODE_ENV !== "production" ? Object.defineProperty(s, ne, {
        value: Q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ne] = Q.bind(n), N.NODE_ENV !== "production" && ee("Methods", ne)) : N.NODE_ENV !== "production" && M(
        `Method "${ne}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    N.NODE_ENV !== "production" && !se(o) && M(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ne = o.call(n, n);
    if (N.NODE_ENV !== "production" && ki(ne) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(ne))
      N.NODE_ENV !== "production" && M("data() should return an object.");
    else if (e.data = ws(ne), N.NODE_ENV !== "production")
      for (const Q in ne)
        ee("Data", Q), Sl(Q[0]) || Object.defineProperty(s, Q, {
          configurable: !0,
          enumerable: !0,
          get: () => ne[Q],
          set: Oe
        });
  }
  if (kr = !0, i)
    for (const ne in i) {
      const Q = i[ne], Ee = se(Q) ? Q.bind(n, n) : se(Q.get) ? Q.get.bind(n, n) : Oe;
      N.NODE_ENV !== "production" && Ee === Oe && M(`Computed property "${ne}" has no getter.`);
      const ft = !se(Q) && se(Q.set) ? Q.set.bind(n) : N.NODE_ENV !== "production" ? () => {
        M(
          `Write operation failed: computed property "${ne}" is readonly.`
        );
      } : Oe, Ct = oe({
        get: Ee,
        set: ft
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (kt) => Ct.value = kt
      }), N.NODE_ENV !== "production" && ee("Computed", ne);
    }
  if (l)
    for (const ne in l)
      Mu(l[ne], s, n, ne);
  if (a) {
    const ne = se(a) ? a.call(n) : a;
    Reflect.ownKeys(ne).forEach((Q) => {
      Ru(Q, ne[Q]);
    });
  }
  d && wa(d, e, "c");
  function Z(ne, Q) {
    q(Q) ? Q.forEach((Ee) => ne(Ee.bind(n))) : Q && ne(Q.bind(n));
  }
  if (Z(Tu, u), Z(Ye, p), Z(_l, m), Z(Hi, E), Z(Cu, y), Z(ku, T), Z(Au, S), Z($u, V), Z(Vu, P), Z(ji, v), Z(It, w), Z(Du, _), q(O))
    if (O.length) {
      const ne = e.exposed || (e.exposed = {});
      O.forEach((Q) => {
        Object.defineProperty(ne, Q, {
          get: () => n[Q],
          set: (Ee) => n[Q] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  b && e.render === Oe && (e.render = b), I != null && (e.inheritAttrs = I), $ && (e.components = $), L && (e.directives = L), _ && bl(e);
}
function rm(e, t, n = Oe) {
  q(e) && (e = Or(e));
  for (const s in e) {
    const o = e[s];
    let i;
    me(o) ? "default" in o ? i = to(
      o.from || s,
      o.default,
      !0
    ) : i = to(o.from || s) : i = to(o), Ve(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i, N.NODE_ENV !== "production" && n("Inject", s);
  }
}
function wa(e, t, n) {
  $t(
    q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Mu(e, t, n, s) {
  let o = s.includes(".") ? ed(n, s) : () => n[s];
  if (re(e)) {
    const i = t[e];
    se(i) ? tn(o, i) : N.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e}"`, i);
  } else if (se(e))
    tn(o, e.bind(n));
  else if (me(e))
    if (q(e))
      e.forEach((i) => Mu(i, t, n, s));
    else {
      const i = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(i) ? tn(o, i, e) : N.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else N.NODE_ENV !== "production" && M(`Invalid watch option: "${s}"`, e);
}
function Cl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => ci(a, c, r, !0)
  ), ci(a, t, r)), me(t) && i.set(t, a), a;
}
function ci(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && ci(e, i, n, !0), o && o.forEach(
    (r) => ci(e, r, n, !0)
  );
  for (const r in t)
    if (s && r === "expose")
      N.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = lm[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const lm = {
  data: xa,
  props: Sa,
  emits: Sa,
  // objects
  methods: Ys,
  computed: Ys,
  // lifecycle
  beforeCreate: rt,
  created: rt,
  beforeMount: rt,
  mounted: rt,
  beforeUpdate: rt,
  updated: rt,
  beforeDestroy: rt,
  beforeUnmount: rt,
  destroyed: rt,
  unmounted: rt,
  activated: rt,
  deactivated: rt,
  errorCaptured: rt,
  serverPrefetch: rt,
  // assets
  components: Ys,
  directives: Ys,
  // watch
  watch: cm,
  // provide / inject
  provide: xa,
  inject: am
};
function xa(e, t) {
  return t ? e ? function() {
    return de(
      se(e) ? e.call(this, this) : e,
      se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function am(e, t) {
  return Ys(Or(e), Or(t));
}
function Or(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ys(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sa(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    po(e),
    po(t ?? {})
  ) : t;
}
function cm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = rt(e[s], t[s]);
  return n;
}
function Pu() {
  return {
    app: null,
    config: {
      isNativeTag: zs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let um = 0;
function dm(e, t) {
  return function(s, o = null) {
    se(s) || (s = de({}, s)), o != null && !me(o) && (N.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), o = null);
    const i = Pu(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: um++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Br,
      get config() {
        return i.config;
      },
      set config(d) {
        N.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return r.has(d) ? N.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : d && se(d.install) ? (r.add(d), d.install(c, ...u)) : se(d) ? (r.add(d), d(c, ...u)) : N.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(d) {
        return i.mixins.includes(d) ? N.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), c;
      },
      component(d, u) {
        return N.NODE_ENV !== "production" && Rr(d, i.config), u ? (N.NODE_ENV !== "production" && i.components[d] && M(`Component "${d}" has already been registered in target app.`), i.components[d] = u, c) : i.components[d];
      },
      directive(d, u) {
        return N.NODE_ENV !== "production" && hu(d), u ? (N.NODE_ENV !== "production" && i.directives[d] && M(`Directive "${d}" has already been registered in target app.`), i.directives[d] = u, c) : i.directives[d];
      },
      mount(d, u, p) {
        if (a)
          N.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          N.NODE_ENV !== "production" && d.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || pe(s, o);
          return m.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), N.NODE_ENV !== "production" && (i.reload = () => {
            const E = At(m);
            E.el = null, e(E, d, p);
          }), u && t ? t(m, d) : e(m, d, p), a = !0, c._container = d, d.__vue_app__ = c, N.NODE_ENV !== "production" && (c._instance = m.component, oh(c, Br)), ko(m.component);
        }
      },
      onUnmount(d) {
        N.NODE_ENV !== "production" && typeof d != "function" && M(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? ($t(
          l,
          c._instance,
          16
        ), e(null, c._container), N.NODE_ENV !== "production" && (c._instance = null, ih(c)), delete c._container.__vue_app__) : N.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return N.NODE_ENV !== "production" && d in i.provides && (ge(i.provides, d) ? M(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : M(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = es;
        es = c;
        try {
          return d();
        } finally {
          es = u;
        }
      }
    };
    return c;
  };
}
let es = null;
function Ru(e, t) {
  if (!Ue)
    N.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = Ue.provides;
    const s = Ue.parent && Ue.parent.provides;
    s === n && (n = Ue.provides = Object.create(s)), n[e] = t;
  }
}
function to(e, t, n = !1) {
  const s = dt();
  if (s || es) {
    let o = es ? es._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
    N.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else N.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
function fm() {
  return !!(dt() || es);
}
const Lu = {}, Fu = () => Object.create(Lu), Bu = (e) => Object.getPrototypeOf(e) === Lu;
function pm(e, t, n, s = !1) {
  const o = {}, i = Fu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hu(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  N.NODE_ENV !== "production" && Uu(t || {}, o, e), n ? e.props = s ? o : eu(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function hm(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function mm(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = ae(o), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(N.NODE_ENV !== "production" && hm(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let p = d[u];
        if (Ui(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (ge(i, p))
            m !== i[p] && (i[p] = m, c = !0);
          else {
            const E = Se(p);
            o[E] = Tr(
              a,
              l,
              E,
              m,
              e,
              !1
            );
          }
        else
          m !== i[p] && (i[p] = m, c = !0);
      }
    }
  } else {
    Hu(e, t, o, i) && (c = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !ge(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ze(u)) === u || !ge(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = Tr(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (i !== l)
      for (const u in i)
        (!t || !ge(t, u)) && (delete i[u], c = !0);
  }
  c && Zt(e.attrs, "set", ""), N.NODE_ENV !== "production" && Uu(t || {}, o, e);
}
function Hu(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Vn(a))
        continue;
      const c = t[a];
      let d;
      o && ge(o, d = Se(a)) ? !i || !i.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : Ui(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, r = !0);
    }
  if (i) {
    const a = ae(n), c = l || fe;
    for (let d = 0; d < i.length; d++) {
      const u = i[d];
      n[u] = Tr(
        o,
        a,
        u,
        c[u],
        e,
        !ge(c, u)
      );
    }
  }
  return r;
}
function Tr(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = ge(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && se(a)) {
        const { propsDefaults: c } = o;
        if (n in c)
          s = c[n];
        else {
          const d = is(o);
          s = c[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ze(n)) && (s = !0));
  }
  return s;
}
const gm = /* @__PURE__ */ new WeakMap();
function ju(e, t, n = !1) {
  const s = n ? gm : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!se(e)) {
    const d = (u) => {
      a = !0;
      const [p, m] = ju(u, t, !0);
      de(r, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return me(e) && s.set(e, gs), gs;
  if (q(i))
    for (let d = 0; d < i.length; d++) {
      N.NODE_ENV !== "production" && !re(i[d]) && M("props must be strings when using array syntax.", i[d]);
      const u = Se(i[d]);
      Ca(u) && (r[u] = fe);
    }
  else if (i) {
    N.NODE_ENV !== "production" && !me(i) && M("invalid props options", i);
    for (const d in i) {
      const u = Se(d);
      if (Ca(u)) {
        const p = i[d], m = r[u] = q(p) || se(p) ? { type: p } : de({}, p), E = m.type;
        let y = !1, T = !0;
        if (q(E))
          for (let C = 0; C < E.length; ++C) {
            const v = E[C], f = se(v) && v.name;
            if (f === "Boolean") {
              y = !0;
              break;
            } else f === "String" && (T = !1);
          }
        else
          y = se(E) && E.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = T, (y || ge(m, "default")) && l.push(u);
      }
    }
  }
  const c = [r, l];
  return me(e) && s.set(e, c), c;
}
function Ca(e) {
  return e[0] !== "$" && !Vn(e) ? !0 : (N.NODE_ENV !== "production" && M(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function vm(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Uu(e, t, n) {
  const s = ae(t), o = n.propsOptions[0], i = Object.keys(e).map((r) => Se(r));
  for (const r in o) {
    let l = o[r];
    l != null && ym(
      r,
      s[r],
      l,
      N.NODE_ENV !== "production" ? Lt(s) : s,
      !i.includes(r)
    );
  }
}
function ym(e, t, n, s, o) {
  const { type: i, required: r, validator: l, skipCheck: a } = n;
  if (r && o) {
    M('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !a) {
      let c = !1;
      const d = q(i) ? i : [i], u = [];
      for (let p = 0; p < d.length && !c; p++) {
        const { valid: m, expectedType: E } = _m(t, d[p]);
        u.push(E || ""), c = m;
      }
      if (!c) {
        M(Em(e, t, u));
        return;
      }
    }
    l && !l(t, s) && M('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const bm = /* @__PURE__ */ qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function _m(e, t) {
  let n;
  const s = vm(t);
  if (s === "null")
    n = e === null;
  else if (bm(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = me(e) : s === "Array" ? n = q(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Em(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(on).join(" | ")}`;
  const o = n[0], i = sl(t), r = ka(t, o), l = ka(t, i);
  return n.length === 1 && Oa(o) && !Nm(o, i) && (s += ` with value ${r}`), s += `, got ${i} `, Oa(i) && (s += `with value ${l}.`), s;
}
function ka(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Oa(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Nm(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const kl = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Ol = (e) => q(e) ? e.map(ct) : [ct(e)], wm = (e, t, n) => {
  if (t._n)
    return t;
  const s = He((...o) => (N.NODE_ENV !== "production" && Ue && !(n === null && Re) && !(n && n.root !== Ue.root) && M(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ol(t(...o))), n);
  return s._c = !1, s;
}, qu = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (kl(o)) continue;
    const i = e[o];
    if (se(i))
      t[o] = wm(o, i, s);
    else if (i != null) {
      N.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = Ol(i);
      t[o] = () => r;
    }
  }
}, zu = (e, t) => {
  N.NODE_ENV !== "production" && !Ls(e.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ol(t);
  e.slots.default = () => n;
}, Dr = (e, t, n) => {
  for (const s in t)
    (n || !kl(s)) && (e[s] = t[s]);
}, xm = (e, t, n) => {
  const s = e.slots = Fu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && ns(s, "__", o, !0);
    const i = t._;
    i ? (Dr(s, t, n), n && ns(s, "_", i, !0)) : qu(t, s);
  } else t && zu(e, t);
}, Sm = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = fe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? N.NODE_ENV !== "production" && Ft ? (Dr(o, t, n), Zt(e, "set", "$slots")) : n && l === 1 ? i = !1 : Dr(o, t, n) : (i = !t.$stable, qu(t, o)), r = t;
  } else t && (zu(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !kl(l) && r[l] == null && delete o[l];
};
let js, Tn;
function an(e, t) {
  e.appContext.config.performance && ui() && Tn.mark(`vue-${t}-${e.uid}`), N.NODE_ENV !== "production" && ah(e, t, ui() ? Tn.now() : Date.now());
}
function cn(e, t) {
  if (e.appContext.config.performance && ui()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Tn.mark(s), Tn.measure(
      `<${Ki(e, e.type)}> ${t}`,
      n,
      s
    ), Tn.clearMarks(n), Tn.clearMarks(s);
  }
  N.NODE_ENV !== "production" && ch(e, t, ui() ? Tn.now() : Date.now());
}
function ui() {
  return js !== void 0 || (typeof window < "u" && window.performance ? (js = !0, Tn = window.performance) : js = !1), js;
}
function Cm() {
  const e = [];
  if (N.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Fe = id;
function Ku(e) {
  return Gu(e);
}
function Wu(e) {
  return Gu(e, _h);
}
function Gu(e, t) {
  Cm();
  const n = No();
  n.__VUE__ = !0, N.NODE_ENV !== "production" && hl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: p,
    setScopeId: m = Oe,
    insertStaticContent: E
  } = e, y = (g, x, A, B = null, R = null, F = null, W = void 0, U = null, j = N.NODE_ENV !== "production" && Ft ? !1 : !!x.dynamicChildren) => {
    if (g === x)
      return;
    g && !Rt(g, x) && (B = Vo(g), bn(g, R, F, !0), g = null), x.patchFlag === -2 && (j = !1, x.dynamicChildren = null);
    const { type: H, ref: ie, shapeFlag: G } = x;
    switch (H) {
      case nn:
        T(g, x, A, B);
        break;
      case Te:
        C(g, x, A, B);
        break;
      case An:
        g == null ? v(x, A, B, W) : N.NODE_ENV !== "production" && f(g, x, A, W);
        break;
      case ue:
        L(
          g,
          x,
          A,
          B,
          R,
          F,
          W,
          U,
          j
        );
        break;
      default:
        G & 1 ? V(
          g,
          x,
          A,
          B,
          R,
          F,
          W,
          U,
          j
        ) : G & 6 ? J(
          g,
          x,
          A,
          B,
          R,
          F,
          W,
          U,
          j
        ) : G & 64 || G & 128 ? H.process(
          g,
          x,
          A,
          B,
          R,
          F,
          W,
          U,
          j,
          ds
        ) : N.NODE_ENV !== "production" && M("Invalid VNode type:", H, `(${typeof H})`);
    }
    ie != null && R ? _s(ie, g && g.ref, F, x || g, !x) : ie == null && g && g.ref != null && _s(g.ref, null, F, g, !0);
  }, T = (g, x, A, B) => {
    if (g == null)
      s(
        x.el = l(x.children),
        A,
        B
      );
    else {
      const R = x.el = g.el;
      x.children !== g.children && c(R, x.children);
    }
  }, C = (g, x, A, B) => {
    g == null ? s(
      x.el = a(x.children || ""),
      A,
      B
    ) : x.el = g.el;
  }, v = (g, x, A, B) => {
    [g.el, g.anchor] = E(
      g.children,
      x,
      A,
      B,
      g.el,
      g.anchor
    );
  }, f = (g, x, A, B) => {
    if (x.children !== g.children) {
      const R = p(g.anchor);
      b(g), [x.el, x.anchor] = E(
        x.children,
        A,
        R,
        B
      );
    } else
      x.el = g.el, x.anchor = g.anchor;
  }, w = ({ el: g, anchor: x }, A, B) => {
    let R;
    for (; g && g !== x; )
      R = p(g), s(g, A, B), g = R;
    s(x, A, B);
  }, b = ({ el: g, anchor: x }) => {
    let A;
    for (; g && g !== x; )
      A = p(g), o(g), g = A;
    o(x);
  }, V = (g, x, A, B, R, F, W, U, j) => {
    x.type === "svg" ? W = "svg" : x.type === "math" && (W = "mathml"), g == null ? P(
      x,
      A,
      B,
      R,
      F,
      W,
      U,
      j
    ) : O(
      g,
      x,
      R,
      F,
      W,
      U,
      j
    );
  }, P = (g, x, A, B, R, F, W, U) => {
    let j, H;
    const { props: ie, shapeFlag: G, transition: te, dirs: le } = g;
    if (j = g.el = r(
      g.type,
      F,
      ie && ie.is,
      ie
    ), G & 8 ? d(j, g.children) : G & 16 && _(
      g.children,
      j,
      null,
      B,
      R,
      fr(g, F),
      W,
      U
    ), le && Jt(g, null, B, "created"), S(j, g, g.scopeId, W, B), ie) {
      for (const Ce in ie)
        Ce !== "value" && !Vn(Ce) && i(j, Ce, null, ie[Ce], F, B);
      "value" in ie && i(j, "value", null, ie.value, F), (H = ie.onVnodeBeforeMount) && gt(H, B, g);
    }
    N.NODE_ENV !== "production" && (ns(j, "__vnode", g, !0), ns(j, "__vueParentComponent", B, !0)), le && Jt(g, null, B, "beforeMount");
    const ye = Yu(R, te);
    ye && te.beforeEnter(j), s(j, x, A), ((H = ie && ie.onVnodeMounted) || ye || le) && Fe(() => {
      H && gt(H, B, g), ye && te.enter(j), le && Jt(g, null, B, "mounted");
    }, R);
  }, S = (g, x, A, B, R) => {
    if (A && m(g, A), B)
      for (let F = 0; F < B.length; F++)
        m(g, B[F]);
    if (R) {
      let F = R.subTree;
      if (N.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = qi(F.children) || F), x === F || pi(F.type) && (F.ssContent === x || F.ssFallback === x)) {
        const W = R.vnode;
        S(
          g,
          W,
          W.scopeId,
          W.slotScopeIds,
          R.parent
        );
      }
    }
  }, _ = (g, x, A, B, R, F, W, U, j = 0) => {
    for (let H = j; H < g.length; H++) {
      const ie = g[H] = U ? Cn(g[H]) : ct(g[H]);
      y(
        null,
        ie,
        x,
        A,
        B,
        R,
        F,
        W,
        U
      );
    }
  }, O = (g, x, A, B, R, F, W) => {
    const U = x.el = g.el;
    N.NODE_ENV !== "production" && (U.__vnode = x);
    let { patchFlag: j, dynamicChildren: H, dirs: ie } = x;
    j |= g.patchFlag & 16;
    const G = g.props || fe, te = x.props || fe;
    let le;
    if (A && jn(A, !1), (le = te.onVnodeBeforeUpdate) && gt(le, A, x, g), ie && Jt(x, g, A, "beforeUpdate"), A && jn(A, !0), N.NODE_ENV !== "production" && Ft && (j = 0, W = !1, H = null), (G.innerHTML && te.innerHTML == null || G.textContent && te.textContent == null) && d(U, ""), H ? (I(
      g.dynamicChildren,
      H,
      U,
      A,
      B,
      fr(x, R),
      F
    ), N.NODE_ENV !== "production" && no(g, x)) : W || Ee(
      g,
      x,
      U,
      null,
      A,
      B,
      fr(x, R),
      F,
      !1
    ), j > 0) {
      if (j & 16)
        $(U, G, te, A, R);
      else if (j & 2 && G.class !== te.class && i(U, "class", null, te.class, R), j & 4 && i(U, "style", G.style, te.style, R), j & 8) {
        const ye = x.dynamicProps;
        for (let Ce = 0; Ce < ye.length; Ce++) {
          const Ne = ye[Ce], pt = G[Ne], Je = te[Ne];
          (Je !== pt || Ne === "value") && i(U, Ne, pt, Je, R, A);
        }
      }
      j & 1 && g.children !== x.children && d(U, x.children);
    } else !W && H == null && $(U, G, te, A, R);
    ((le = te.onVnodeUpdated) || ie) && Fe(() => {
      le && gt(le, A, x, g), ie && Jt(x, g, A, "updated");
    }, B);
  }, I = (g, x, A, B, R, F, W) => {
    for (let U = 0; U < x.length; U++) {
      const j = g[U], H = x[U], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        j.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (j.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rt(j, H) || // - In the case of a component, it could contain anything.
        j.shapeFlag & 198) ? u(j.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      y(
        j,
        H,
        ie,
        null,
        B,
        R,
        F,
        W,
        !0
      );
    }
  }, $ = (g, x, A, B, R) => {
    if (x !== A) {
      if (x !== fe)
        for (const F in x)
          !Vn(F) && !(F in A) && i(
            g,
            F,
            x[F],
            null,
            R,
            B
          );
      for (const F in A) {
        if (Vn(F)) continue;
        const W = A[F], U = x[F];
        W !== U && F !== "value" && i(g, F, U, W, R, B);
      }
      "value" in A && i(g, "value", x.value, A.value, R);
    }
  }, L = (g, x, A, B, R, F, W, U, j) => {
    const H = x.el = g ? g.el : l(""), ie = x.anchor = g ? g.anchor : l("");
    let { patchFlag: G, dynamicChildren: te, slotScopeIds: le } = x;
    N.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ft || G & 2048) && (G = 0, j = !1, te = null), le && (U = U ? U.concat(le) : le), g == null ? (s(H, A, B), s(ie, A, B), _(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      A,
      ie,
      R,
      F,
      W,
      U,
      j
    )) : G > 0 && G & 64 && te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (I(
      g.dynamicChildren,
      te,
      A,
      R,
      F,
      W,
      U
    ), N.NODE_ENV !== "production" ? no(g, x) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (x.key != null || R && x === R.subTree) && no(
        g,
        x,
        !0
        /* shallow */
      )
    )) : Ee(
      g,
      x,
      A,
      ie,
      R,
      F,
      W,
      U,
      j
    );
  }, J = (g, x, A, B, R, F, W, U, j) => {
    x.slotScopeIds = U, g == null ? x.shapeFlag & 512 ? R.ctx.activate(
      x,
      A,
      B,
      W,
      j
    ) : ee(
      x,
      A,
      B,
      R,
      F,
      W,
      j
    ) : Z(g, x, j);
  }, ee = (g, x, A, B, R, F, W) => {
    const U = g.component = pd(
      g,
      B,
      R
    );
    if (N.NODE_ENV !== "production" && U.type.__hmrId && eh(U), N.NODE_ENV !== "production" && (vs(g), an(U, "mount")), Ls(g) && (U.ctx.renderer = ds), N.NODE_ENV !== "production" && an(U, "init"), md(U, !1, W), N.NODE_ENV !== "production" && cn(U, "init"), N.NODE_ENV !== "production" && Ft && (g.el = null), U.asyncDep) {
      if (R && R.registerDep(U, ne, W), !g.el) {
        const j = U.subTree = pe(Te);
        C(null, j, x, A), g.placeholder = j.el;
      }
    } else
      ne(
        U,
        g,
        x,
        A,
        R,
        F,
        W
      );
    N.NODE_ENV !== "production" && (ys(), cn(U, "mount"));
  }, Z = (g, x, A) => {
    const B = x.component = g.component;
    if (Mm(g, x, A))
      if (B.asyncDep && !B.asyncResolved) {
        N.NODE_ENV !== "production" && vs(x), Q(B, x, A), N.NODE_ENV !== "production" && ys();
        return;
      } else
        B.next = x, B.update();
    else
      x.el = g.el, B.vnode = x;
  }, ne = (g, x, A, B, R, F, W) => {
    const U = () => {
      if (g.isMounted) {
        let { next: G, bu: te, u: le, parent: ye, vnode: Ce } = g;
        {
          const Nt = Ju(g);
          if (Nt) {
            G && (G.el = Ce.el, Q(g, G, W)), Nt.asyncDep.then(() => {
              g.isUnmounted || U();
            });
            return;
          }
        }
        let Ne = G, pt;
        N.NODE_ENV !== "production" && vs(G || g.vnode), jn(g, !1), G ? (G.el = Ce.el, Q(g, G, W)) : G = Ce, te && On(te), (pt = G.props && G.props.onVnodeBeforeUpdate) && gt(pt, ye, G, Ce), jn(g, !0), N.NODE_ENV !== "production" && an(g, "render");
        const Je = Ko(g);
        N.NODE_ENV !== "production" && cn(g, "render");
        const Mt = g.subTree;
        g.subTree = Je, N.NODE_ENV !== "production" && an(g, "patch"), y(
          Mt,
          Je,
          // parent may have changed if it's in a teleport
          u(Mt.el),
          // anchor may have changed if it's in a fragment
          Vo(Mt),
          g,
          R,
          F
        ), N.NODE_ENV !== "production" && cn(g, "patch"), G.el = Je.el, Ne === null && zi(g, Je.el), le && Fe(le, R), (pt = G.props && G.props.onVnodeUpdated) && Fe(
          () => gt(pt, ye, G, Ce),
          R
        ), N.NODE_ENV !== "production" && fu(g), N.NODE_ENV !== "production" && ys();
      } else {
        let G;
        const { el: te, props: le } = x, { bm: ye, m: Ce, parent: Ne, root: pt, type: Je } = g, Mt = $n(x);
        if (jn(g, !1), ye && On(ye), !Mt && (G = le && le.onVnodeBeforeMount) && gt(G, Ne, x), jn(g, !0), te && tr) {
          const Nt = () => {
            N.NODE_ENV !== "production" && an(g, "render"), g.subTree = Ko(g), N.NODE_ENV !== "production" && cn(g, "render"), N.NODE_ENV !== "production" && an(g, "hydrate"), tr(
              te,
              g.subTree,
              g,
              R,
              null
            ), N.NODE_ENV !== "production" && cn(g, "hydrate");
          };
          Mt && Je.__asyncHydrate ? Je.__asyncHydrate(
            te,
            g,
            Nt
          ) : Nt();
        } else {
          pt.ce && // @ts-expect-error _def is private
          pt.ce._def.shadowRoot !== !1 && pt.ce._injectChildStyle(Je), N.NODE_ENV !== "production" && an(g, "render");
          const Nt = g.subTree = Ko(g);
          N.NODE_ENV !== "production" && cn(g, "render"), N.NODE_ENV !== "production" && an(g, "patch"), y(
            null,
            Nt,
            A,
            B,
            g,
            R,
            F
          ), N.NODE_ENV !== "production" && cn(g, "patch"), x.el = Nt.el;
        }
        if (Ce && Fe(Ce, R), !Mt && (G = le && le.onVnodeMounted)) {
          const Nt = x;
          Fe(
            () => gt(G, Ne, Nt),
            R
          );
        }
        (x.shapeFlag & 256 || Ne && $n(Ne.vnode) && Ne.vnode.shapeFlag & 256) && g.a && Fe(g.a, R), g.isMounted = !0, N.NODE_ENV !== "production" && xr(g), x = A = B = null;
      }
    };
    g.scope.on();
    const j = g.effect = new lo(U);
    g.scope.off();
    const H = g.update = j.run.bind(j), ie = g.job = j.runIfDirty.bind(j);
    ie.i = g, ie.id = g.uid, j.scheduler = () => Ri(ie), jn(g, !0), N.NODE_ENV !== "production" && (j.onTrack = g.rtc ? (G) => On(g.rtc, G) : void 0, j.onTrigger = g.rtg ? (G) => On(g.rtg, G) : void 0), H();
  }, Q = (g, x, A) => {
    x.component = g;
    const B = g.vnode.props;
    g.vnode = x, g.next = null, mm(g, x.props, B, A), Sm(g, x.children, A), Ut(), fa(g), qt();
  }, Ee = (g, x, A, B, R, F, W, U, j = !1) => {
    const H = g && g.children, ie = g ? g.shapeFlag : 0, G = x.children, { patchFlag: te, shapeFlag: le } = x;
    if (te > 0) {
      if (te & 128) {
        Ct(
          H,
          G,
          A,
          B,
          R,
          F,
          W,
          U,
          j
        );
        return;
      } else if (te & 256) {
        ft(
          H,
          G,
          A,
          B,
          R,
          F,
          W,
          U,
          j
        );
        return;
      }
    }
    le & 8 ? (ie & 16 && Fs(H, R, F), G !== H && d(A, G)) : ie & 16 ? le & 16 ? Ct(
      H,
      G,
      A,
      B,
      R,
      F,
      W,
      U,
      j
    ) : Fs(H, R, F, !0) : (ie & 8 && d(A, ""), le & 16 && _(
      G,
      A,
      B,
      R,
      F,
      W,
      U,
      j
    ));
  }, ft = (g, x, A, B, R, F, W, U, j) => {
    g = g || gs, x = x || gs;
    const H = g.length, ie = x.length, G = Math.min(H, ie);
    let te;
    for (te = 0; te < G; te++) {
      const le = x[te] = j ? Cn(x[te]) : ct(x[te]);
      y(
        g[te],
        le,
        A,
        null,
        R,
        F,
        W,
        U,
        j
      );
    }
    H > ie ? Fs(
      g,
      R,
      F,
      !0,
      !1,
      G
    ) : _(
      x,
      A,
      B,
      R,
      F,
      W,
      U,
      j,
      G
    );
  }, Ct = (g, x, A, B, R, F, W, U, j) => {
    let H = 0;
    const ie = x.length;
    let G = g.length - 1, te = ie - 1;
    for (; H <= G && H <= te; ) {
      const le = g[H], ye = x[H] = j ? Cn(x[H]) : ct(x[H]);
      if (Rt(le, ye))
        y(
          le,
          ye,
          A,
          null,
          R,
          F,
          W,
          U,
          j
        );
      else
        break;
      H++;
    }
    for (; H <= G && H <= te; ) {
      const le = g[G], ye = x[te] = j ? Cn(x[te]) : ct(x[te]);
      if (Rt(le, ye))
        y(
          le,
          ye,
          A,
          null,
          R,
          F,
          W,
          U,
          j
        );
      else
        break;
      G--, te--;
    }
    if (H > G) {
      if (H <= te) {
        const le = te + 1, ye = le < ie ? x[le].el : B;
        for (; H <= te; )
          y(
            null,
            x[H] = j ? Cn(x[H]) : ct(x[H]),
            A,
            ye,
            R,
            F,
            W,
            U,
            j
          ), H++;
      }
    } else if (H > te)
      for (; H <= G; )
        bn(g[H], R, F, !0), H++;
    else {
      const le = H, ye = H, Ce = /* @__PURE__ */ new Map();
      for (H = ye; H <= te; H++) {
        const it = x[H] = j ? Cn(x[H]) : ct(x[H]);
        it.key != null && (N.NODE_ENV !== "production" && Ce.has(it.key) && M(
          "Duplicate keys found during update:",
          JSON.stringify(it.key),
          "Make sure keys are unique."
        ), Ce.set(it.key, H));
      }
      let Ne, pt = 0;
      const Je = te - ye + 1;
      let Mt = !1, Nt = 0;
      const Bs = new Array(Je);
      for (H = 0; H < Je; H++) Bs[H] = 0;
      for (H = le; H <= G; H++) {
        const it = g[H];
        if (pt >= Je) {
          bn(it, R, F, !0);
          continue;
        }
        let Kt;
        if (it.key != null)
          Kt = Ce.get(it.key);
        else
          for (Ne = ye; Ne <= te; Ne++)
            if (Bs[Ne - ye] === 0 && Rt(it, x[Ne])) {
              Kt = Ne;
              break;
            }
        Kt === void 0 ? bn(it, R, F, !0) : (Bs[Kt - ye] = H + 1, Kt >= Nt ? Nt = Kt : Mt = !0, y(
          it,
          x[Kt],
          A,
          null,
          R,
          F,
          W,
          U,
          j
        ), pt++);
      }
      const na = Mt ? km(Bs) : gs;
      for (Ne = na.length - 1, H = Je - 1; H >= 0; H--) {
        const it = ye + H, Kt = x[it], sa = x[it + 1], oa = it + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          sa.el || sa.placeholder
        ) : B;
        Bs[H] === 0 ? y(
          null,
          Kt,
          A,
          oa,
          R,
          F,
          W,
          U,
          j
        ) : Mt && (Ne < 0 || H !== na[Ne] ? kt(Kt, A, oa, 2) : Ne--);
      }
    }
  }, kt = (g, x, A, B, R = null) => {
    const { el: F, type: W, transition: U, children: j, shapeFlag: H } = g;
    if (H & 6) {
      kt(g.component.subTree, x, A, B);
      return;
    }
    if (H & 128) {
      g.suspense.move(x, A, B);
      return;
    }
    if (H & 64) {
      W.move(g, x, A, ds);
      return;
    }
    if (W === ue) {
      s(F, x, A);
      for (let G = 0; G < j.length; G++)
        kt(j[G], x, A, B);
      s(g.anchor, x, A);
      return;
    }
    if (W === An) {
      w(g, x, A);
      return;
    }
    if (B !== 2 && H & 1 && U)
      if (B === 0)
        U.beforeEnter(F), s(F, x, A), Fe(() => U.enter(F), R);
      else {
        const { leave: G, delayLeave: te, afterLeave: le } = U, ye = () => {
          g.ctx.isUnmounted ? o(F) : s(F, x, A);
        }, Ce = () => {
          G(F, () => {
            ye(), le && le();
          });
        };
        te ? te(F, ye, Ce) : Ce();
      }
    else
      s(F, x, A);
  }, bn = (g, x, A, B = !1, R = !1) => {
    const {
      type: F,
      props: W,
      ref: U,
      children: j,
      dynamicChildren: H,
      shapeFlag: ie,
      patchFlag: G,
      dirs: te,
      cacheIndex: le
    } = g;
    if (G === -2 && (R = !1), U != null && (Ut(), _s(U, null, A, g, !0), qt()), le != null && (x.renderCache[le] = void 0), ie & 256) {
      x.ctx.deactivate(g);
      return;
    }
    const ye = ie & 1 && te, Ce = !$n(g);
    let Ne;
    if (Ce && (Ne = W && W.onVnodeBeforeUnmount) && gt(Ne, x, g), ie & 6)
      Pf(g.component, A, B);
    else {
      if (ie & 128) {
        g.suspense.unmount(A, B);
        return;
      }
      ye && Jt(g, null, x, "beforeUnmount"), ie & 64 ? g.type.remove(
        g,
        x,
        A,
        ds,
        B
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ue || G > 0 && G & 64) ? Fs(
        H,
        x,
        A,
        !1,
        !0
      ) : (F === ue && G & 384 || !R && ie & 16) && Fs(j, x, A), B && Qi(g);
    }
    (Ce && (Ne = W && W.onVnodeUnmounted) || ye) && Fe(() => {
      Ne && gt(Ne, x, g), ye && Jt(g, null, x, "unmounted");
    }, A);
  }, Qi = (g) => {
    const { type: x, el: A, anchor: B, transition: R } = g;
    if (x === ue) {
      N.NODE_ENV !== "production" && g.patchFlag > 0 && g.patchFlag & 2048 && R && !R.persisted ? g.children.forEach((W) => {
        W.type === Te ? o(W.el) : Qi(W);
      }) : Mf(A, B);
      return;
    }
    if (x === An) {
      b(g);
      return;
    }
    const F = () => {
      o(A), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (g.shapeFlag & 1 && R && !R.persisted) {
      const { leave: W, delayLeave: U } = R, j = () => W(A, F);
      U ? U(g.el, F, j) : j();
    } else
      F();
  }, Mf = (g, x) => {
    let A;
    for (; g !== x; )
      A = p(g), o(g), g = A;
    o(x);
  }, Pf = (g, x, A) => {
    N.NODE_ENV !== "production" && g.type.__hmrId && th(g);
    const {
      bum: B,
      scope: R,
      job: F,
      subTree: W,
      um: U,
      m: j,
      a: H,
      parent: ie,
      slots: { __: G }
    } = g;
    di(j), di(H), B && On(B), ie && q(G) && G.forEach((te) => {
      ie.renderCache[te] = void 0;
    }), R.stop(), F && (F.flags |= 8, bn(W, g, x, A)), U && Fe(U, x), Fe(() => {
      g.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve()), N.NODE_ENV !== "production" && lh(g);
  }, Fs = (g, x, A, B = !1, R = !1, F = 0) => {
    for (let W = F; W < g.length; W++)
      bn(g[W], x, A, B, R);
  }, Vo = (g) => {
    if (g.shapeFlag & 6)
      return Vo(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const x = p(g.anchor || g.el), A = x && x[mu];
    return A ? p(A) : x;
  };
  let Zi = !1;
  const ta = (g, x, A) => {
    g == null ? x._vnode && bn(x._vnode, null, null, !0) : y(
      x._vnode || null,
      g,
      x,
      null,
      null,
      null,
      A
    ), x._vnode = g, Zi || (Zi = !0, fa(), ri(), Zi = !1);
  }, ds = {
    p: y,
    um: bn,
    m: kt,
    r: Qi,
    mt: ee,
    mc: _,
    pc: Ee,
    pbc: I,
    n: Vo,
    o: e
  };
  let er, tr;
  return t && ([er, tr] = t(
    ds
  )), {
    render: ta,
    hydrate: er,
    createApp: dm(ta, er)
  };
}
function fr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function jn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function no(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (q(s) && q(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Cn(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && no(r, l)), l.type === nn && (l.el = r.el), l.type === Te && !l.el && (l.el = r.el), N.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function km(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < c ? i = l + 1 : r = l;
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Ju(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ju(t);
}
function di(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Xu = Symbol.for("v-scx"), Qu = () => {
  {
    const e = to(Xu);
    return e || N.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Om(e, t) {
  return Co(e, null, t);
}
function Tm(e, t) {
  return Co(
    e,
    null,
    N.NODE_ENV !== "production" ? de({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function Zu(e, t) {
  return Co(
    e,
    null,
    N.NODE_ENV !== "production" ? de({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function tn(e, t, n) {
  return N.NODE_ENV !== "production" && !se(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Co(e, t, n);
}
function Co(e, t, n = fe) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  N.NODE_ENV !== "production" && !t && (s !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  N.NODE_ENV !== "production" && (l.onWarn = M);
  const a = t && s || !t && i !== "post";
  let c;
  if (Os) {
    if (i === "sync") {
      const m = Qu();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Oe, m.resume = Oe, m.pause = Oe, m;
    }
  }
  const d = Ue;
  l.call = (m, E, y) => $t(m, d, E, y);
  let u = !1;
  i === "post" ? l.scheduler = (m) => {
    Fe(m, d && d.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (m, E) => {
    E ? m() : Ri(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const p = zp(e, t, l);
  return Os && (c ? c.push(p) : a && p()), p;
}
function Dm(e, t, n) {
  const s = this.proxy, o = re(e) ? e.includes(".") ? ed(s, e) : () => s[e] : e.bind(s, s);
  let i;
  se(t) ? i = t : (i = t.handler, n = t);
  const r = is(this), l = Co(o, i.bind(s), n);
  return r(), l;
}
function ed(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Vm(e, t, n = fe) {
  const s = dt();
  if (N.NODE_ENV !== "production" && !s)
    return M("useModel() called without active instance."), z();
  const o = Se(t);
  if (N.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return M(`useModel() called with prop "${t}" which is not declared.`), z();
  const i = Ze(t), r = td(e, o), l = ou((a, c) => {
    let d, u = fe, p;
    return Zu(() => {
      const m = e[o];
      lt(d, m) && (d = m, c());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const E = n.set ? n.set(m) : m;
        if (!lt(E, d) && !(u !== fe && lt(m, u)))
          return;
        const y = s.vnode.props;
        y && // check if parent has passed v-model
        (t in y || o in y || i in y) && (`onUpdate:${t}` in y || `onUpdate:${o}` in y || `onUpdate:${i}` in y) || (d = m, c()), s.emit(`update:${t}`, E), lt(m, E) && lt(m, u) && !lt(E, p) && c(), u = m, p = E;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? { value: a++ ? r || fe : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const td = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Se(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function $m(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || fe;
  if (N.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(Qt(Se(t)) in u)) && M(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qt(Se(t))}" prop.`
        );
      else {
        const p = d[t];
        se(p) && (p(...n) || M(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), r = i && td(s, t.slice(7));
  if (r && (r.trim && (o = n.map((d) => re(d) ? d.trim() : d)), r.number && (o = n.map(ei))), N.NODE_ENV !== "production" && uh(e, t, o), N.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[Qt(d)] && M(
      `Event "${d}" is emitted in component ${Ki(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ze(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Qt(t)] || // also try camelCase event handler (#2249)
  s[l = Qt(Se(t))];
  !a && i && (a = s[l = Qt(Ze(t))]), a && $t(
    a,
    e,
    6,
    o
  );
  const c = s[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, $t(
      c,
      e,
      6,
      o
    );
  }
}
function nd(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!se(e)) {
    const a = (c) => {
      const d = nd(c, t, !0);
      d && (l = !0, de(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (me(e) && s.set(e, null), null) : (q(i) ? i.forEach((a) => r[a] = null) : de(r, i), me(e) && s.set(e, r), r);
}
function Ui(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Ze(t)) || ge(e, t));
}
let Vr = !1;
function fi() {
  Vr = !0;
}
function Ko(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: c,
    renderCache: d,
    props: u,
    data: p,
    setupState: m,
    ctx: E,
    inheritAttrs: y
  } = e, T = fo(e);
  let C, v;
  N.NODE_ENV !== "production" && (Vr = !1);
  try {
    if (n.shapeFlag & 4) {
      const b = o || s, V = N.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(b, {
        get(P, S, _) {
          return M(
            `Property '${String(
              S
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, S, _);
        }
      }) : b;
      C = ct(
        c.call(
          V,
          b,
          d,
          N.NODE_ENV !== "production" ? Lt(u) : u,
          m,
          p,
          E
        )
      ), v = l;
    } else {
      const b = t;
      N.NODE_ENV !== "production" && l === u && fi(), C = ct(
        b.length > 1 ? b(
          N.NODE_ENV !== "production" ? Lt(u) : u,
          N.NODE_ENV !== "production" ? {
            get attrs() {
              return fi(), Lt(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : b(
          N.NODE_ENV !== "production" ? Lt(u) : u,
          null
        )
      ), v = t.props ? l : Am(l);
    }
  } catch (b) {
    so.length = 0, Fn(b, e, 1), C = pe(Te);
  }
  let f = C, w;
  if (N.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([f, w] = sd(C)), v && y !== !1) {
    const b = Object.keys(v), { shapeFlag: V } = f;
    if (b.length) {
      if (V & 7)
        i && b.some(Zo) && (v = Im(
          v,
          i
        )), f = At(f, v, !1, !0);
      else if (N.NODE_ENV !== "production" && !Vr && f.type !== Te) {
        const P = Object.keys(l), S = [], _ = [];
        for (let O = 0, I = P.length; O < I; O++) {
          const $ = P[O];
          gn($) ? Zo($) || S.push($[2].toLowerCase() + $.slice(3)) : _.push($);
        }
        _.length && M(
          `Extraneous non-props attributes (${_.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), S.length && M(
          `Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (N.NODE_ENV !== "production" && !Ta(f) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), f = At(f, null, !1, !0), f.dirs = f.dirs ? f.dirs.concat(n.dirs) : n.dirs), n.transition && (N.NODE_ENV !== "production" && !Ta(f) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), vn(f, n.transition)), N.NODE_ENV !== "production" && w ? w(f) : C = f, fo(T), C;
}
const sd = (e) => {
  const t = e.children, n = e.dynamicChildren, s = qi(t, !1);
  if (s) {
    if (N.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return sd(s);
  } else return [e, void 0];
  const o = t.indexOf(s), i = n ? n.indexOf(s) : -1, r = (l) => {
    t[o] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ct(s), r];
};
function qi(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (rn(o)) {
      if (o.type !== Te || o.children === "v-if") {
        if (n)
          return;
        if (n = o, N.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return qi(n.children);
      }
    } else
      return;
  }
  return n;
}
const Am = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Im = (e, t) => {
  const n = {};
  for (const s in e)
    (!Zo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Ta = (e) => e.shapeFlag & 7 || e.type === Te;
function Mm(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (N.NODE_ENV !== "production" && (o || l) && Ft || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Da(s, r, c) : !!r;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const p = d[u];
        if (r[p] !== s[p] && !Ui(c, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Da(s, r, c) : !0 : !!r;
  return !1;
}
function Da(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !Ui(n, i))
      return !0;
  }
  return !1;
}
function zi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const pi = (e) => e.__isSuspense;
let $r = 0;
const Pm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    if (e == null)
      Lm(
        t,
        n,
        s,
        o,
        i,
        r,
        l,
        a,
        c
      );
    else {
      if (i && i.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Fm(
        e,
        t,
        n,
        s,
        o,
        r,
        l,
        a,
        c
      );
    }
  },
  hydrate: Bm,
  normalize: Hm
}, Rm = Pm;
function ho(e, t) {
  const n = e.props && e.props[t];
  se(n) && n();
}
function Lm(e, t, n, s, o, i, r, l, a) {
  const {
    p: c,
    o: { createElement: d }
  } = a, u = d("div"), p = e.suspense = od(
    e,
    o,
    s,
    t,
    u,
    n,
    i,
    r,
    l,
    a
  );
  c(
    null,
    p.pendingBranch = e.ssContent,
    u,
    null,
    s,
    p,
    i,
    r
  ), p.deps > 0 ? (ho(e, "onPending"), ho(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    i,
    r
  ), Es(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Fm(e, t, n, s, o, i, r, l, { p: a, um: c, o: { createElement: d } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, m = t.ssFallback, { activeBranch: E, pendingBranch: y, isInFallback: T, isHydrating: C } = u;
  if (y)
    u.pendingBranch = p, Rt(p, y) ? (a(
      y,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 ? u.resolve() : T && (C || (a(
      E,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), Es(u, m)))) : (u.pendingId = $r++, C ? (u.isHydrating = !1, u.activeBranch = y) : c(y, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = d("div"), T ? (a(
      null,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 ? u.resolve() : (a(
      E,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), Es(u, m))) : E && Rt(p, E) ? (a(
      E,
      p,
      n,
      s,
      o,
      u,
      i,
      r,
      l
    ), u.resolve(!0)) : (a(
      null,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (E && Rt(p, E))
    a(
      E,
      p,
      n,
      s,
      o,
      u,
      i,
      r,
      l
    ), Es(u, p);
  else if (ho(t, "onPending"), u.pendingBranch = p, p.shapeFlag & 512 ? u.pendingId = p.component.suspenseId : u.pendingId = $r++, a(
    null,
    p,
    u.hiddenContainer,
    null,
    o,
    u,
    i,
    r,
    l
  ), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: v, pendingId: f } = u;
    v > 0 ? setTimeout(() => {
      u.pendingId === f && u.fallback(m);
    }, v) : v === 0 && u.fallback(m);
  }
}
let Va = !1;
function od(e, t, n, s, o, i, r, l, a, c, d = !1) {
  N.NODE_ENV !== "production" && !Va && (Va = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: m,
    n: E,
    o: { parentNode: y, remove: T }
  } = c;
  let C;
  const v = jm(e);
  v && t && t.pendingBranch && (C = t.pendingId, t.deps++);
  const f = e.props ? ti(e.props.timeout) : void 0;
  N.NODE_ENV !== "production" && fl(f, "Suspense timeout");
  const w = i, b = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: r,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: $r++,
    timeout: typeof f == "number" ? f : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(V = !1, P = !1) {
      if (N.NODE_ENV !== "production") {
        if (!V && !b.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (b.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: S,
        activeBranch: _,
        pendingBranch: O,
        pendingId: I,
        effects: $,
        parentComponent: L,
        container: J
      } = b;
      let ee = !1;
      b.isHydrating ? b.isHydrating = !1 : V || (ee = _ && O.transition && O.transition.mode === "out-in", ee && (_.transition.afterLeave = () => {
        I === b.pendingId && (p(
          O,
          J,
          i === w ? E(_) : i,
          0
        ), Ss($));
      }), _ && (y(_.el) === J && (i = E(_)), m(_, L, b, !0)), ee || p(O, J, i, 0)), Es(b, O), b.pendingBranch = null, b.isInFallback = !1;
      let Z = b.parent, ne = !1;
      for (; Z; ) {
        if (Z.pendingBranch) {
          Z.effects.push(...$), ne = !0;
          break;
        }
        Z = Z.parent;
      }
      !ne && !ee && Ss($), b.effects = [], v && t && t.pendingBranch && C === t.pendingId && (t.deps--, t.deps === 0 && !P && t.resolve()), ho(S, "onResolve");
    },
    fallback(V) {
      if (!b.pendingBranch)
        return;
      const { vnode: P, activeBranch: S, parentComponent: _, container: O, namespace: I } = b;
      ho(P, "onFallback");
      const $ = E(S), L = () => {
        b.isInFallback && (u(
          null,
          V,
          O,
          $,
          _,
          null,
          // fallback tree will not have suspense context
          I,
          l,
          a
        ), Es(b, V));
      }, J = V.transition && V.transition.mode === "out-in";
      J && (S.transition.afterLeave = L), b.isInFallback = !0, m(
        S,
        _,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), J || L();
    },
    move(V, P, S) {
      b.activeBranch && p(b.activeBranch, V, P, S), b.container = V;
    },
    next() {
      return b.activeBranch && E(b.activeBranch);
    },
    registerDep(V, P, S) {
      const _ = !!b.pendingBranch;
      _ && b.deps++;
      const O = V.vnode.el;
      V.asyncDep.catch((I) => {
        Fn(I, V, 0);
      }).then((I) => {
        if (V.isUnmounted || b.isUnmounted || b.pendingId !== V.suspenseId)
          return;
        V.asyncResolved = !0;
        const { vnode: $ } = V;
        N.NODE_ENV !== "production" && vs($), Lr(V, I, !1), O && ($.el = O);
        const L = !O && V.subTree.el;
        P(
          V,
          $,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          y(O || V.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          O ? null : E(V.subTree),
          b,
          r,
          S
        ), L && T(L), zi(V, $.el), N.NODE_ENV !== "production" && ys(), _ && --b.deps === 0 && b.resolve();
      });
    },
    unmount(V, P) {
      b.isUnmounted = !0, b.activeBranch && m(
        b.activeBranch,
        n,
        V,
        P
      ), b.pendingBranch && m(
        b.pendingBranch,
        n,
        V,
        P
      );
    }
  };
  return b;
}
function Bm(e, t, n, s, o, i, r, l, a) {
  const c = t.suspense = od(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    o,
    i,
    r,
    l,
    !0
  ), d = a(
    e,
    c.pendingBranch = t.ssContent,
    n,
    c,
    i,
    r
  );
  return c.deps === 0 && c.resolve(!1, !0), d;
}
function Hm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = $a(
    s ? n.default : n
  ), e.ssFallback = s ? $a(n.fallback) : pe(Te);
}
function $a(e) {
  let t;
  if (se(e)) {
    const n = os && e._c;
    n && (e._d = !1, k()), e = e(), n && (e._d = !0, t = et, rd());
  }
  if (q(e)) {
    const n = qi(e);
    N.NODE_ENV !== "production" && !n && e.filter((s) => s !== El).length > 0 && M("<Suspense> slots expect a single root node."), e = n;
  }
  return e = ct(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function id(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : Ss(e);
}
function Es(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, zi(s, o));
}
function jm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ue = Symbol.for("v-fgt"), nn = Symbol.for("v-txt"), Te = Symbol.for("v-cmt"), An = Symbol.for("v-stc"), so = [];
let et = null;
function k(e = !1) {
  so.push(et = e ? null : []);
}
function rd() {
  so.pop(), et = so[so.length - 1] || null;
}
let os = 1;
function Ar(e, t = !1) {
  os += e, e < 0 && et && t && (et.hasOnce = !0);
}
function ld(e) {
  return e.dynamicChildren = os > 0 ? et || gs : null, rd(), os > 0 && et && et.push(e), e;
}
function D(e, t, n, s, o, i) {
  return ld(
    h(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function ut(e, t, n, s, o) {
  return ld(
    pe(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function rn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rt(e, t) {
  if (N.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = qo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Ir;
function Um(e) {
  Ir = e;
}
const qm = (...e) => cd(
  ...Ir ? Ir(e, Re) : e
), ad = ({ key: e }) => e ?? null, Wo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || Ve(e) || se(e) ? { i: Re, r: e, k: t, f: !!n } : e : null);
function h(e, t = null, n = null, s = 0, o = null, i = e === ue ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ad(t),
    ref: t && Wo(t),
    scopeId: Li,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Re
  };
  return l ? (Tl(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= re(n) ? 8 : 16), N.NODE_ENV !== "production" && a.key !== a.key && M("VNode created with invalid key (NaN). VNode type:", a.type), os > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  et && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && et.push(a), a;
}
const pe = N.NODE_ENV !== "production" ? qm : cd;
function cd(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === El) && (N.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Te), rn(e)) {
    const l = At(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tl(l, n), os > 0 && !i && et && (l.shapeFlag & 6 ? et[et.indexOf(e)] = l : et.push(l)), l.patchFlag = -2, l;
  }
  if (bd(e) && (e = e.__vccOpts), t) {
    t = ud(t);
    let { class: l, style: a } = t;
    l && !re(l) && (t.class = Ge(l)), me(a) && (xs(a) && !q(a) && (a = de({}, a)), t.style = _t(a));
  }
  const r = re(e) ? 1 : pi(e) ? 128 : gu(e) ? 64 : me(e) ? 4 : se(e) ? 2 : 0;
  return N.NODE_ENV !== "production" && r & 4 && xs(e) && (e = ae(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), h(
    e,
    t,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function ud(e) {
  return e ? xs(e) || Bu(e) ? de({}, e) : e : null;
}
function At(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, c = t ? fd(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ad(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? q(i) ? i.concat(Wo(t)) : [i, Wo(t)] : Wo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: N.NODE_ENV !== "production" && r === -1 && q(l) ? l.map(dd) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ue ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && At(e.ssContent),
    ssFallback: e.ssFallback && At(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && vn(
    d,
    a.clone(d)
  ), d;
}
function dd(e) {
  const t = At(e);
  return q(e.children) && (t.children = e.children.map(dd)), t;
}
function Me(e = " ", t = 0) {
  return pe(nn, null, e, t);
}
function ks(e, t) {
  const n = pe(An, null, e);
  return n.staticCount = t, n;
}
function Y(e = "", t = !1) {
  return t ? (k(), ut(Te, null, e)) : pe(Te, null, e);
}
function ct(e) {
  return e == null || typeof e == "boolean" ? pe(Te) : q(e) ? pe(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rn(e) ? Cn(e) : pe(nn, null, String(e));
}
function Cn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : At(e);
}
function Tl(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Tl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Bu(t) ? t._ctx = Re : o === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else se(t) ? (t = { default: t, _ctx: Re }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Me(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function fd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Ge([t.class, s.class]));
      else if (o === "style")
        t.style = _t([t.style, s.style]);
      else if (gn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(q(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function gt(e, t, n, s = null) {
  $t(e, t, 7, [
    n,
    s
  ]);
}
const zm = Pu();
let Km = 0;
function pd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || zm, i = {
    uid: Km++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new rl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ju(s, o),
    emitsOptions: nd(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return N.NODE_ENV !== "production" ? i.ctx = jh(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = $m.bind(null, i), e.ce && e.ce(i), i;
}
let Ue = null;
const dt = () => Ue || Re;
let hi, Mr;
{
  const e = No(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  hi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ue = n
  ), Mr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Os = n
  );
}
const is = (e) => {
  const t = Ue;
  return hi(e), e.scope.on(), () => {
    e.scope.off(), hi(t);
  };
}, Pr = () => {
  Ue && Ue.scope.off(), hi(null);
}, Wm = /* @__PURE__ */ qe("slot,component");
function Rr(e, { isNativeTag: t }) {
  (Wm(e) || t(e)) && M(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function hd(e) {
  return e.vnode.shapeFlag & 4;
}
let Os = !1;
function md(e, t = !1, n = !1) {
  t && Mr(t);
  const { props: s, children: o } = e.vnode, i = hd(e);
  pm(e, s, i, t), xm(e, o, n || t);
  const r = i ? Gm(e, t) : void 0;
  return t && Mr(!1), r;
}
function Gm(e, t) {
  var n;
  const s = e.type;
  if (N.NODE_ENV !== "production") {
    if (s.name && Rr(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let r = 0; r < i.length; r++)
        Rr(i[r], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let r = 0; r < i.length; r++)
        hu(i[r]);
    }
    s.compilerOptions && Dl() && M(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, eo), N.NODE_ENV !== "production" && Uh(e);
  const { setup: o } = s;
  if (o) {
    Ut();
    const i = e.setupContext = o.length > 1 ? yd(e) : null, r = is(e), l = as(
      o,
      e,
      0,
      [
        N.NODE_ENV !== "production" ? Lt(e.props) : e.props,
        i
      ]
    ), a = ki(l);
    if (qt(), r(), (a || e.sp) && !$n(e) && bl(e), a) {
      if (l.then(Pr, Pr), t)
        return l.then((c) => {
          Lr(e, c, t);
        }).catch((c) => {
          Fn(c, e, 0);
        });
      if (e.asyncDep = l, N.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        M(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Lr(e, l, t);
  } else
    vd(e, t);
}
function Lr(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (N.NODE_ENV !== "production" && rn(t) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), N.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = dl(t), N.NODE_ENV !== "production" && qh(e)) : N.NODE_ENV !== "production" && t !== void 0 && M(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), vd(e, n);
}
let oo, Fr;
function gd(e) {
  oo = e, Fr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Hh));
  };
}
const Dl = () => !oo;
function vd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && oo && !s.render) {
      const o = s.template || Cl(e).template;
      if (o) {
        N.NODE_ENV !== "production" && an(e, "compile");
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, c = de(
          de(
            {
              isCustomElement: i,
              delimiters: l
            },
            r
          ),
          a
        );
        s.render = oo(o, c), N.NODE_ENV !== "production" && cn(e, "compile");
      }
    }
    e.render = s.render || Oe, Fr && Fr(e);
  }
  {
    const o = is(e);
    Ut();
    try {
      im(e);
    } finally {
      qt(), o();
    }
  }
  N.NODE_ENV !== "production" && !s.render && e.render === Oe && !t && (!oo && s.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", s));
}
const Aa = N.NODE_ENV !== "production" ? {
  get(e, t) {
    return fi(), Be(e, "get", ""), e[t];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Be(e, "get", ""), e[t];
  }
};
function Ym(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Be(e, "get", "$slots"), t[n];
    }
  });
}
function yd(e) {
  const t = (n) => {
    if (N.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (q(n) ? s = "array" : Ve(n) && (s = "ref")), s !== "object" && M(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (N.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Aa));
      },
      get slots() {
        return s || (s = Ym(e));
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Aa),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function ko(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dl(tu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Zn)
        return Zn[n](e);
    },
    has(t, n) {
      return n in t || n in Zn;
    }
  })) : e.proxy;
}
const Jm = /(?:^|[-_])(\w)/g, Xm = (e) => e.replace(Jm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ts(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ki(e, t, n = !1) {
  let s = Ts(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? Xm(s) : n ? "App" : "Anonymous";
}
function bd(e) {
  return se(e) && "__vccOpts" in e;
}
const oe = (e, t) => {
  const n = Hp(e, t, Os);
  if (N.NODE_ENV !== "production") {
    const s = dt();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Yt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? me(t) && !q(t) ? rn(t) ? pe(e, null, [t]) : pe(e, t) : pe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && rn(n) && (n = [n]), pe(e, t, n));
}
function _d() {
  if (N.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!me(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Ve(u)) {
        Ut();
        const p = u.value;
        return qt(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (hn(u))
          return [
            "div",
            {},
            ["span", e, tt(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${zt(u) ? " (readonly)" : ""}`
          ];
        if (zt(u))
          return [
            "div",
            {},
            ["span", e, tt(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...i(u.$)
        ];
    }
  };
  function i(u) {
    const p = [];
    u.type.props && u.props && p.push(r("props", ae(u.props))), u.setupState !== fe && p.push(r("setup", u.setupState)), u.data !== fe && p.push(r("data", ae(u.data)));
    const m = a(u, "computed");
    m && p.push(r("computed", m));
    const E = a(u, "inject");
    return E && p.push(r("injected", E)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), p;
  }
  function r(u, p) {
    return p = de({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          l(p[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, p = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : me(u) ? ["object", { object: p ? ae(u) : u }] : ["span", n, String(u)];
  }
  function a(u, p) {
    const m = u.type;
    if (se(m))
      return;
    const E = {};
    for (const y in u.ctx)
      c(m, y, p) && (E[y] = u.ctx[y]);
    return E;
  }
  function c(u, p, m) {
    const E = u[m];
    if (q(E) && E.includes(p) || me(E) && p in E || u.extends && c(u.extends, p, m) || u.mixins && u.mixins.some((y) => c(y, p, m)))
      return !0;
  }
  function d(u) {
    return tt(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function Qm(e, t, n, s) {
  const o = n[s];
  if (o && Ed(o, e))
    return o;
  const i = t();
  return i.memo = e.slice(), i.cacheIndex = s, n[s] = i;
}
function Ed(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (lt(n[s], t[s]))
      return !1;
  return os > 0 && et && et.push(e), !0;
}
const Br = "3.5.18", $e = N.NODE_ENV !== "production" ? M : Oe, Zm = Pi, eg = Pt, tg = hl, ng = {
  createComponentInstance: pd,
  setupComponent: md,
  renderComponentRoot: Ko,
  setCurrentRenderingInstance: fo,
  isVNode: rn,
  normalizeVNode: ct,
  getComponentPublicInstance: ko,
  ensureValidVNode: xl,
  pushWarningContext: vs,
  popWarningContext: ys
}, sg = ng, og = null, ig = null, rg = null;
var xe = {};
let Hr;
const Ia = typeof window < "u" && window.trustedTypes;
if (Ia)
  try {
    Hr = /* @__PURE__ */ Ia.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    xe.NODE_ENV !== "production" && $e(`Error creating trusted types policy: ${e}`);
  }
const Nd = Hr ? (e) => Hr.createHTML(e) : (e) => e, lg = "http://www.w3.org/2000/svg", ag = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Ma = dn && /* @__PURE__ */ dn.createElement("template"), cg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? dn.createElementNS(lg, e) : t === "mathml" ? dn.createElementNS(ag, e) : n ? dn.createElement(e, { is: n }) : dn.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => dn.createTextNode(e),
  createComment: (e) => dn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => dn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Ma.innerHTML = Nd(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ma.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, _n = "transition", Us = "animation", Ds = Symbol("_vtc"), wd = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, xd = /* @__PURE__ */ de(
  {},
  vl,
  wd
), ug = (e) => (e.displayName = "Transition", e.props = xd, e), en = /* @__PURE__ */ ug(
  (e, { slots: t }) => Yt(Eu, Sd(e), t)
), Un = (e, t = []) => {
  q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Pa = (e) => e ? q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Sd(e) {
  const t = {};
  for (const $ in e)
    $ in wd || (t[$] = e[$]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: c = r,
    appearToClass: d = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, E = dg(o), y = E && E[0], T = E && E[1], {
    onBeforeEnter: C,
    onEnter: v,
    onEnterCancelled: f,
    onLeave: w,
    onLeaveCancelled: b,
    onBeforeAppear: V = C,
    onAppear: P = v,
    onAppearCancelled: S = f
  } = t, _ = ($, L, J, ee) => {
    $._enterCancelled = ee, Nn($, L ? d : l), Nn($, L ? c : r), J && J();
  }, O = ($, L) => {
    $._isLeaving = !1, Nn($, u), Nn($, m), Nn($, p), L && L();
  }, I = ($) => (L, J) => {
    const ee = $ ? P : v, Z = () => _(L, $, J);
    Un(ee, [L, Z]), Ra(() => {
      Nn(L, $ ? a : i), Wt(L, $ ? d : l), Pa(ee) || La(L, s, y, Z);
    });
  };
  return de(t, {
    onBeforeEnter($) {
      Un(C, [$]), Wt($, i), Wt($, r);
    },
    onBeforeAppear($) {
      Un(V, [$]), Wt($, a), Wt($, c);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave($, L) {
      $._isLeaving = !0;
      const J = () => O($, L);
      Wt($, u), $._enterCancelled ? (Wt($, p), jr()) : (jr(), Wt($, p)), Ra(() => {
        $._isLeaving && (Nn($, u), Wt($, m), Pa(w) || La($, s, T, J));
      }), Un(w, [$, J]);
    },
    onEnterCancelled($) {
      _($, !1, void 0, !0), Un(f, [$]);
    },
    onAppearCancelled($) {
      _($, !0, void 0, !0), Un(S, [$]);
    },
    onLeaveCancelled($) {
      O($), Un(b, [$]);
    }
  });
}
function dg(e) {
  if (e == null)
    return null;
  if (me(e))
    return [pr(e.enter), pr(e.leave)];
  {
    const t = pr(e);
    return [t, t];
  }
}
function pr(e) {
  const t = ti(e);
  return xe.NODE_ENV !== "production" && fl(t, "<transition> explicit duration"), t;
}
function Wt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ds] || (e[Ds] = /* @__PURE__ */ new Set())).add(t);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ds];
  n && (n.delete(t), n.size || (e[Ds] = void 0));
}
function Ra(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let fg = 0;
function La(e, t, n, s) {
  const o = e._endId = ++fg, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: a } = Cd(e, t);
  if (!r)
    return s();
  const c = r + "end";
  let d = 0;
  const u = () => {
    e.removeEventListener(c, p), i();
  }, p = (m) => {
    m.target === e && ++d >= a && u();
  };
  setTimeout(() => {
    d < a && u();
  }, l + 1), e.addEventListener(c, p);
}
function Cd(e, t) {
  const n = window.getComputedStyle(e), s = (E) => (n[E] || "").split(", "), o = s(`${_n}Delay`), i = s(`${_n}Duration`), r = Fa(o, i), l = s(`${Us}Delay`), a = s(`${Us}Duration`), c = Fa(l, a);
  let d = null, u = 0, p = 0;
  t === _n ? r > 0 && (d = _n, u = r, p = i.length) : t === Us ? c > 0 && (d = Us, u = c, p = a.length) : (u = Math.max(r, c), d = u > 0 ? r > c ? _n : Us : null, p = d ? d === _n ? i.length : a.length : 0);
  const m = d === _n && /\b(transform|all)(,|$)/.test(
    s(`${_n}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: p,
    hasTransform: m
  };
}
function Fa(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Ba(n) + Ba(e[s])));
}
function Ba(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function jr() {
  return document.body.offsetHeight;
}
function pg(e, t, n) {
  const s = e[Ds];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mi = Symbol("_vod"), kd = Symbol("_vsh"), Vl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[mi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : qs(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), qs(e, !0), s.enter(e)) : s.leave(e, () => {
      qs(e, !1);
    }) : qs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    qs(e, t);
  }
};
xe.NODE_ENV !== "production" && (Vl.name = "show");
function qs(e, t) {
  e.style.display = t ? e[mi] : "none", e[kd] = !t;
}
function hg() {
  Vl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Od = Symbol(xe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function mg(e) {
  const t = dt();
  if (!t) {
    xe.NODE_ENV !== "production" && $e("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => gi(i, o));
  };
  xe.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const o = e(t.proxy);
    t.ce ? gi(t.ce, o) : Ur(t.subTree, o), n(o);
  };
  _l(() => {
    Ss(s);
  }), Ye(() => {
    tn(s, Oe, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), It(() => o.disconnect());
  });
}
function Ur(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ur(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    gi(e.el, t);
  else if (e.type === ue)
    e.children.forEach((n) => Ur(n, t));
  else if (e.type === An) {
    let { el: n, anchor: s } = e;
    for (; n && (gi(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function gi(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const o in t) {
      const i = Rc(t[o]);
      n.setProperty(`--${o}`, i), s += `--${o}: ${i};`;
    }
    n[Od] = s;
  }
}
const gg = /(^|;)\s*display\s*:/;
function vg(e, t, n) {
  const s = e.style, o = re(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (re(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && Go(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && Go(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), Go(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[Od];
      r && (n += ";" + r), s.cssText = n, i = gg.test(n);
    }
  } else t && e.removeAttribute("style");
  mi in e && (e[mi] = i ? s.display : "", e[kd] && (s.display = "none"));
}
const yg = /[^\\];\s*$/, Ha = /\s*!important$/;
function Go(e, t, n) {
  if (q(n))
    n.forEach((s) => Go(e, t, s));
  else if (n == null && (n = ""), xe.NODE_ENV !== "production" && yg.test(n) && $e(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = bg(e, t);
    Ha.test(n) ? e.setProperty(
      Ze(s),
      n.replace(Ha, ""),
      "important"
    ) : e[s] = n;
  }
}
const ja = ["Webkit", "Moz", "ms"], hr = {};
function bg(e, t) {
  const n = hr[t];
  if (n)
    return n;
  let s = Se(t);
  if (s !== "filter" && s in e)
    return hr[t] = s;
  s = on(s);
  for (let o = 0; o < ja.length; o++) {
    const i = ja[o] + s;
    if (i in e)
      return hr[t] = i;
  }
  return t;
}
const Ua = "http://www.w3.org/1999/xlink";
function qa(e, t, n, s, o, i = np(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ua, t.slice(6, t.length)) : e.setAttributeNS(Ua, t, n) : n == null || i && !il(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Et(n) ? String(n) : n
  );
}
function za(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Nd(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = il(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    xe.NODE_ENV !== "production" && !r && $e(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(o || t);
}
function pn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function _g(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ka = Symbol("_vei");
function Eg(e, t, n, s, o = null) {
  const i = e[Ka] || (e[Ka] = {}), r = i[t];
  if (s && r)
    r.value = xe.NODE_ENV !== "production" ? Ga(s, t) : s;
  else {
    const [l, a] = Ng(t);
    if (s) {
      const c = i[t] = Sg(
        xe.NODE_ENV !== "production" ? Ga(s, t) : s,
        o
      );
      pn(e, l, c, a);
    } else r && (_g(e, l, r, a), i[t] = void 0);
  }
}
const Wa = /(?:Once|Passive|Capture)$/;
function Ng(e) {
  let t;
  if (Wa.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Wa); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let mr = 0;
const wg = /* @__PURE__ */ Promise.resolve(), xg = () => mr || (wg.then(() => mr = 0), mr = Date.now());
function Sg(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    $t(
      Cg(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = xg(), n;
}
function Ga(e, t) {
  return se(e) || q(e) ? e : ($e(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Oe);
}
function Cg(e, t) {
  if (q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Ya = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kg = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? pg(e, s, r) : t === "style" ? vg(e, n, s) : gn(t) ? Zo(t) || Eg(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Og(e, t, s, r)) ? (za(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qa(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? za(e, Se(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), qa(e, t, s, r));
};
function Og(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ya(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ya(t) && re(n) ? !1 : t in e;
}
const Ja = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Le(e, t, n) {
  const s = /* @__PURE__ */ yl(e, t);
  Oi(s) && de(s, t);
  class o extends Wi {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const Tg = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Le(e, t, Fd), Dg = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Wi extends Dg {
  constructor(t, n = {}, s = Ns) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Ns ? this._root = this.shadowRoot : (xe.NODE_ENV !== "production" && this.shadowRoot && $e(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Wi) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, xo(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const o of s)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: r } = s;
      let l;
      if (i && !q(i))
        for (const a in i) {
          const c = i[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = ti(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Se(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(r) : xe.NODE_ENV !== "production" && r && $e(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    xe.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        ge(this, s) ? xe.NODE_ENV !== "production" && $e(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => wo(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = q(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(Se))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Ja;
    const o = Se(t);
    n && this._numberProps && this._numberProps[o] && (s = ti(s)), this._setProp(o, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, o = !1) {
    if (n !== this._props[t] && (n === Ja ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && i.disconnect(), n === !0 ? this.setAttribute(Ze(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ze(t), n + "") : n || this.removeAttribute(Ze(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Ld(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = pe(this._def, de(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, xe.NODE_ENV !== "production" && (s.ceReload = (i) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Oi(r[0]) ? de({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), Ze(i) !== i && o(Ze(i), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const i = document.createElement("style");
      if (s && i.setAttribute("nonce", s), i.textContent = t[o], this.shadowRoot.prepend(i), xe.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let r = this._childStyles.get(n.__hmrId);
            r || this._childStyles.set(n.__hmrId, r = []), r.push(i);
          }
        } else
          (this._styles || (this._styles = [])).push(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const o = t[s], i = o.getAttribute("name") || "default", r = this._slots[i], l = o.parentNode;
      if (r)
        for (const a of r) {
          if (n && a.nodeType === 1) {
            const c = n + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(c, "");
          }
          l.insertBefore(a, o);
        }
      else
        for (; o.firstChild; ) l.insertBefore(o.firstChild, o);
      l.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (xe.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
function qr(e) {
  const t = dt(), n = t && t.ce;
  return n || (xe.NODE_ENV !== "production" && $e(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function Vg() {
  const e = xe.NODE_ENV !== "production" ? qr("useShadowRoot") : qr();
  return e && e.shadowRoot;
}
function $g(e = "$style") {
  {
    const t = dt();
    if (!t)
      return xe.NODE_ENV !== "production" && $e("useCssModule must be called inside setup()"), fe;
    const n = t.type.__cssModules;
    if (!n)
      return xe.NODE_ENV !== "production" && $e("Current instance does not have CSS modules injected."), fe;
    const s = n[e];
    return s || (xe.NODE_ENV !== "production" && $e(`Current instance does not have CSS module named "${e}".`), fe);
  }
}
const Td = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap(), vi = Symbol("_moveCb"), Xa = Symbol("_enterCb"), Ag = (e) => (delete e.props.mode, e), Ig = /* @__PURE__ */ Ag({
  name: "TransitionGroup",
  props: /* @__PURE__ */ de({}, xd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = dt(), s = gl();
    let o, i;
    return Hi(() => {
      if (!o.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!Fg(
        o[0].el,
        n.vnode.el,
        r
      )) {
        o = [];
        return;
      }
      o.forEach(Pg), o.forEach(Rg);
      const l = o.filter(Lg);
      jr(), l.forEach((a) => {
        const c = a.el, d = c.style;
        Wt(c, r), d.transform = d.webkitTransform = d.transitionDuration = "";
        const u = c[vi] = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", u), c[vi] = null, Nn(c, r));
        };
        c.addEventListener("transitionend", u);
      }), o = [];
    }), () => {
      const r = ae(e), l = Sd(r);
      let a = r.tag || ue;
      if (o = [], i)
        for (let c = 0; c < i.length; c++) {
          const d = i[c];
          d.el && d.el instanceof Element && (o.push(d), vn(
            d,
            Cs(
              d,
              l,
              s,
              n
            )
          ), Td.set(
            d,
            d.el.getBoundingClientRect()
          ));
        }
      i = t.default ? Fi(t.default()) : [];
      for (let c = 0; c < i.length; c++) {
        const d = i[c];
        d.key != null ? vn(
          d,
          Cs(d, l, s, n)
        ) : xe.NODE_ENV !== "production" && d.type !== nn && $e("<TransitionGroup> children must be keyed.");
      }
      return pe(a, null, i);
    };
  }
}), Mg = Ig;
function Pg(e) {
  const t = e.el;
  t[vi] && t[vi](), t[Xa] && t[Xa]();
}
function Rg(e) {
  Dd.set(e, e.el.getBoundingClientRect());
}
function Lg(e) {
  const t = Td.get(e), n = Dd.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${s}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function Fg(e, t, n) {
  const s = e.cloneNode(), o = e[Ds];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: r } = Cd(s);
  return i.removeChild(s), r;
}
const Rn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return q(t) ? (n) => On(t, n) : t;
};
function Bg(e) {
  e.target.composing = !0;
}
function Qa(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Dt = Symbol("_assign"), Ln = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Dt] = Rn(o);
    const i = s || o.props && o.props.type === "number";
    pn(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = ei(l)), e[Dt](l);
    }), n && pn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (pn(e, "compositionstart", Bg), pn(e, "compositionend", Qa), pn(e, "change", Qa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (e[Dt] = Rn(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ei(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Xt = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Dt] = Rn(n), pn(e, "change", () => {
      const s = e._modelValue, o = Vs(e), i = e.checked, r = e[Dt];
      if (q(s)) {
        const l = Di(s, o), a = l !== -1;
        if (i && !a)
          r(s.concat(o));
        else if (!i && a) {
          const c = [...s];
          c.splice(l, 1), r(c);
        }
      } else if (ls(s)) {
        const l = new Set(s);
        i ? l.add(o) : l.delete(o), r(l);
      } else
        r(Vd(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Za,
  beforeUpdate(e, t, n) {
    e[Dt] = Rn(n), Za(e, t, n);
  }
};
function Za(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (q(t))
    o = Di(t, s.props.value) > -1;
  else if (ls(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Pn(t, Vd(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const $l = {
  created(e, { value: t }, n) {
    e.checked = Pn(t, n.props.value), e[Dt] = Rn(n), pn(e, "change", () => {
      e[Dt](Vs(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Dt] = Rn(s), t !== n && (e.checked = Pn(t, s.props.value));
  }
}, Gi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = ls(t);
    pn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => n ? ei(Vs(r)) : Vs(r)
      );
      e[Dt](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, xo(() => {
        e._assigning = !1;
      });
    }), e[Dt] = Rn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ec(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Dt] = Rn(n);
  },
  updated(e, { value: t }) {
    e._assigning || ec(e, t);
  }
};
function ec(e, t) {
  const n = e.multiple, s = q(t);
  if (n && !s && !ls(t)) {
    xe.NODE_ENV !== "production" && $e(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, i = e.options.length; o < i; o++) {
    const r = e.options[o], l = Vs(r);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? r.selected = t.some((c) => String(c) === String(l)) : r.selected = Di(t, l) > -1;
      } else
        r.selected = t.has(l);
    else if (Pn(Vs(r), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Vs(e) {
  return "_value" in e ? e._value : e.value;
}
function Vd(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const $d = {
  created(e, t, n) {
    Fo(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Fo(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Fo(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Fo(e, t, n, s, "updated");
  }
};
function Ad(e, t) {
  switch (e) {
    case "SELECT":
      return Gi;
    case "TEXTAREA":
      return Ln;
    default:
      switch (t) {
        case "checkbox":
          return Xt;
        case "radio":
          return $l;
        default:
          return Ln;
      }
  }
}
function Fo(e, t, n, s, o) {
  const r = Ad(
    e.tagName,
    n.props && n.props.type
  )[o];
  r && r(e, t, n, s);
}
function Hg() {
  Ln.getSSRProps = ({ value: e }) => ({ value: e }), $l.getSSRProps = ({ value: e }, t) => {
    if (t.props && Pn(t.props.value, e))
      return { checked: !0 };
  }, Xt.getSSRProps = ({ value: e }, t) => {
    if (q(e)) {
      if (t.props && Di(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (ls(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, $d.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Ad(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const jg = ["ctrl", "shift", "alt", "meta"], Ug = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => jg.some((n) => e[`${n}Key`] && !t.includes(n))
}, sn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = Ug[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, qg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Id = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Ze(o.key);
    if (t.some(
      (r) => r === i || qg[r] === i
    ))
      return e(o);
  });
}, Md = /* @__PURE__ */ de({ patchProp: kg }, cg);
let io, tc = !1;
function Pd() {
  return io || (io = Ku(Md));
}
function Rd() {
  return io = tc ? io : Wu(Md), tc = !0, io;
}
const Ld = (...e) => {
  Pd().render(...e);
}, zg = (...e) => {
  Rd().hydrate(...e);
}, Ns = (...e) => {
  const t = Pd().createApp(...e);
  xe.NODE_ENV !== "production" && (Hd(t), jd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Ud(s);
    if (!o) return;
    const i = t._component;
    !se(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Bd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
}, Fd = (...e) => {
  const t = Rd().createApp(...e);
  xe.NODE_ENV !== "production" && (Hd(t), jd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Ud(s);
    if (o)
      return n(o, !0, Bd(o));
  }, t;
};
function Bd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Vc(t) || $c(t) || Ac(t),
    writable: !1
  });
}
function jd(e) {
  if (Dl()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        $e(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return $e(s), n;
      },
      set() {
        $e(s);
      }
    });
  }
}
function Ud(e) {
  if (re(e)) {
    const t = document.querySelector(e);
    return xe.NODE_ENV !== "production" && !t && $e(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return xe.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && $e(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let nc = !1;
const Kg = () => {
  nc || (nc = !0, Hg(), hg());
}, Wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Eu,
  BaseTransitionPropsValidators: vl,
  Comment: Te,
  DeprecationTypes: rg,
  EffectScope: rl,
  ErrorCodes: Jp,
  ErrorTypeStrings: Zm,
  Fragment: ue,
  KeepAlive: Ih,
  ReactiveEffect: lo,
  Static: An,
  Suspense: Rm,
  Teleport: cs,
  Text: nn,
  TrackOpTypes: jp,
  Transition: en,
  TransitionGroup: Mg,
  TriggerOpTypes: Up,
  VueElement: Wi,
  assertNumber: fl,
  callWithAsyncErrorHandling: $t,
  callWithErrorHandling: as,
  camelize: Se,
  capitalize: on,
  cloneVNode: At,
  compatUtils: ig,
  computed: oe,
  createApp: Ns,
  createBlock: ut,
  createCommentVNode: Y,
  createElementBlock: D,
  createElementVNode: h,
  createHydrationRenderer: Wu,
  createPropsRestProxy: nm,
  createRenderer: Ku,
  createSSRApp: Fd,
  createSlots: Fh,
  createStaticVNode: ks,
  createTextVNode: Me,
  createVNode: pe,
  customRef: ou,
  defineAsyncComponent: $h,
  defineComponent: yl,
  defineCustomElement: Le,
  defineEmits: Kh,
  defineExpose: Wh,
  defineModel: Jh,
  defineOptions: Gh,
  defineProps: zh,
  defineSSRCustomElement: Tg,
  defineSlots: Yh,
  devtools: eg,
  effect: dp,
  effectScope: cp,
  getCurrentInstance: dt,
  getCurrentScope: ll,
  getCurrentWatcher: qp,
  getTransitionRawChildren: Fi,
  guardReactiveProps: ud,
  h: Yt,
  handleError: Fn,
  hasInjectionContext: fm,
  hydrate: zg,
  hydrateOnIdle: Ch,
  hydrateOnInteraction: Dh,
  hydrateOnMediaQuery: Th,
  hydrateOnVisible: Oh,
  initCustomFormatter: _d,
  initDirectivesForSSR: Kg,
  inject: to,
  isMemoSame: Ed,
  isProxy: xs,
  isReactive: hn,
  isReadonly: zt,
  isRef: Ve,
  isRuntimeOnly: Dl,
  isShallow: tt,
  isVNode: rn,
  markRaw: tu,
  mergeDefaults: em,
  mergeModels: tm,
  mergeProps: fd,
  nextTick: xo,
  normalizeClass: Ge,
  normalizeProps: Jf,
  normalizeStyle: _t,
  onActivated: Cu,
  onBeforeMount: Tu,
  onBeforeUnmount: ji,
  onBeforeUpdate: _l,
  onDeactivated: ku,
  onErrorCaptured: Au,
  onMounted: Ye,
  onRenderTracked: $u,
  onRenderTriggered: Vu,
  onScopeDispose: Lc,
  onServerPrefetch: Du,
  onUnmounted: It,
  onUpdated: Hi,
  onWatcherCleanup: ru,
  openBlock: k,
  popScopeId: fh,
  provide: Ru,
  proxyRefs: dl,
  pushScopeId: dh,
  queuePostFlushCb: Ss,
  reactive: ws,
  readonly: Ii,
  ref: z,
  registerRuntimeCompiler: gd,
  render: Ld,
  renderList: Ae,
  renderSlot: Bn,
  resolveComponent: Rh,
  resolveDirective: Lh,
  resolveDynamicComponent: Nl,
  resolveFilter: og,
  resolveTransitionHooks: Cs,
  setBlockTracking: Ar,
  setDevtoolsHook: tg,
  setTransitionHooks: vn,
  shallowReactive: eu,
  shallowReadonly: Lt,
  shallowRef: nu,
  ssrContextKey: Xu,
  ssrUtils: sg,
  stop: fp,
  toDisplayString: X,
  toHandlerKey: Qt,
  toHandlers: Bh,
  toRaw: ae,
  toRef: Fp,
  toRefs: Pp,
  toValue: Ap,
  transformVNodeArgs: Um,
  triggerRef: $p,
  unref: wo,
  useAttrs: Zh,
  useCssModule: $g,
  useCssVars: mg,
  useHost: qr,
  useId: gh,
  useModel: Vm,
  useSSRContext: Qu,
  useShadowRoot: Vg,
  useSlots: Qh,
  useTemplateRef: vh,
  useTransitionState: gl,
  vModelCheckbox: Xt,
  vModelDynamic: $d,
  vModelRadio: $l,
  vModelSelect: Gi,
  vModelText: Ln,
  vShow: Vl,
  version: Br,
  warn: $e,
  watch: tn,
  watchEffect: Om,
  watchPostEffect: Tm,
  watchSyncEffect: Zu,
  withAsyncContext: sm,
  withCtx: He,
  withDefaults: Xh,
  withDirectives: vt,
  withKeys: Id,
  withMemo: Qm,
  withModifiers: sn,
  withScopeId: ph
}, Symbol.toStringTag, { value: "Module" }));
var K = {};
const mo = Symbol(K.NODE_ENV !== "production" ? "Fragment" : ""), ro = Symbol(K.NODE_ENV !== "production" ? "Teleport" : ""), Al = Symbol(K.NODE_ENV !== "production" ? "Suspense" : ""), yi = Symbol(K.NODE_ENV !== "production" ? "KeepAlive" : ""), qd = Symbol(
  K.NODE_ENV !== "production" ? "BaseTransition" : ""
), rs = Symbol(K.NODE_ENV !== "production" ? "openBlock" : ""), zd = Symbol(K.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  K.NODE_ENV !== "production" ? "createElementBlock" : ""
), Il = Symbol(K.NODE_ENV !== "production" ? "createVNode" : ""), Ml = Symbol(
  K.NODE_ENV !== "production" ? "createElementVNode" : ""
), Oo = Symbol(
  K.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Pl = Symbol(
  K.NODE_ENV !== "production" ? "createTextVNode" : ""
), Wd = Symbol(
  K.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Rl = Symbol(
  K.NODE_ENV !== "production" ? "resolveComponent" : ""
), Ll = Symbol(
  K.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Fl = Symbol(
  K.NODE_ENV !== "production" ? "resolveDirective" : ""
), Bl = Symbol(
  K.NODE_ENV !== "production" ? "resolveFilter" : ""
), Hl = Symbol(
  K.NODE_ENV !== "production" ? "withDirectives" : ""
), jl = Symbol(K.NODE_ENV !== "production" ? "renderList" : ""), Gd = Symbol(K.NODE_ENV !== "production" ? "renderSlot" : ""), Yd = Symbol(K.NODE_ENV !== "production" ? "createSlots" : ""), Yi = Symbol(
  K.NODE_ENV !== "production" ? "toDisplayString" : ""
), bi = Symbol(K.NODE_ENV !== "production" ? "mergeProps" : ""), Ul = Symbol(
  K.NODE_ENV !== "production" ? "normalizeClass" : ""
), ql = Symbol(
  K.NODE_ENV !== "production" ? "normalizeStyle" : ""
), go = Symbol(
  K.NODE_ENV !== "production" ? "normalizeProps" : ""
), To = Symbol(
  K.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), zl = Symbol(K.NODE_ENV !== "production" ? "toHandlers" : ""), zr = Symbol(K.NODE_ENV !== "production" ? "camelize" : ""), Gg = Symbol(K.NODE_ENV !== "production" ? "capitalize" : ""), Kr = Symbol(
  K.NODE_ENV !== "production" ? "toHandlerKey" : ""
), _i = Symbol(
  K.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Yg = Symbol(K.NODE_ENV !== "production" ? "pushScopeId" : ""), Jg = Symbol(K.NODE_ENV !== "production" ? "popScopeId" : ""), Kl = Symbol(K.NODE_ENV !== "production" ? "withCtx" : ""), Xg = Symbol(K.NODE_ENV !== "production" ? "unref" : ""), Qg = Symbol(K.NODE_ENV !== "production" ? "isRef" : ""), Wl = Symbol(K.NODE_ENV !== "production" ? "withMemo" : ""), Jd = Symbol(K.NODE_ENV !== "production" ? "isMemoSame" : ""), $s = {
  [mo]: "Fragment",
  [ro]: "Teleport",
  [Al]: "Suspense",
  [yi]: "KeepAlive",
  [qd]: "BaseTransition",
  [rs]: "openBlock",
  [zd]: "createBlock",
  [Kd]: "createElementBlock",
  [Il]: "createVNode",
  [Ml]: "createElementVNode",
  [Oo]: "createCommentVNode",
  [Pl]: "createTextVNode",
  [Wd]: "createStaticVNode",
  [Rl]: "resolveComponent",
  [Ll]: "resolveDynamicComponent",
  [Fl]: "resolveDirective",
  [Bl]: "resolveFilter",
  [Hl]: "withDirectives",
  [jl]: "renderList",
  [Gd]: "renderSlot",
  [Yd]: "createSlots",
  [Yi]: "toDisplayString",
  [bi]: "mergeProps",
  [Ul]: "normalizeClass",
  [ql]: "normalizeStyle",
  [go]: "normalizeProps",
  [To]: "guardReactiveProps",
  [zl]: "toHandlers",
  [zr]: "camelize",
  [Gg]: "capitalize",
  [Kr]: "toHandlerKey",
  [_i]: "setBlockTracking",
  [Yg]: "pushScopeId",
  [Jg]: "popScopeId",
  [Kl]: "withCtx",
  [Xg]: "unref",
  [Qg]: "isRef",
  [Wl]: "withMemo",
  [Jd]: "isMemoSame"
};
function Zg(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    $s[t] = e[t];
  });
}
const St = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function e0(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: St
  };
}
function vo(e, t, n, s, o, i, r, l = !1, a = !1, c = !1, d = St) {
  return e && (l ? (e.helper(rs), e.helper(Ms(e.inSSR, c))) : e.helper(Is(e.inSSR, c)), r && e.helper(Hl)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: o,
    dynamicProps: i,
    directives: r,
    isBlock: l,
    disableTracking: a,
    isComponent: c,
    loc: d
  };
}
function ts(e, t = St) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Tt(e, t = St) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Ie(e, t) {
  return {
    type: 16,
    loc: St,
    key: re(e) ? ce(e, !0) : e,
    value: t
  };
}
function ce(e, t = !1, n = St, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function jt(e, t = St) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function je(e, t = [], n = St) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function As(e, t = void 0, n = !1, s = !1, o = St) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: o
  };
}
function Wr(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: St
  };
}
function t0(e, t, n = !1, s = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: s,
    needArraySpread: !1,
    loc: St
  };
}
function n0(e) {
  return {
    type: 21,
    body: e,
    loc: St
  };
}
function Is(e, t) {
  return e || t ? Il : Ml;
}
function Ms(e, t) {
  return e || t ? zd : Kd;
}
function Gl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Is(s, e.isComponent)), t(rs), t(Ms(s, e.isComponent)));
}
const sc = new Uint8Array([123, 123]), oc = new Uint8Array([125, 125]);
function ic(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function wt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function En(e) {
  return e === 47 || e === 62 || wt(e);
}
function Ei(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const ze = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class s0 {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = sc, this.delimiterClose = oc, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = sc, this.delimiterClose = oc;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, s = t + 1;
    for (let o = this.newlines.length - 1; o >= 0; o--) {
      const i = this.newlines[o];
      if (t > i) {
        n = o + 2, s = t - i;
        break;
      }
    }
    return {
      column: s,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      En(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || wt(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const s = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = s;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === ze.TitleEnd || this.currentSequence === ze.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === ze.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === ze.Cdata.length && (this.state = 28, this.currentSequence = ze.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === ze.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : ic(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    En(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (En(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Ei("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    wt(t) || (t === 62 ? (K.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = ic(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || wt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, K.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : wt(t) || (K.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : wt(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || En(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : K.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || En(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || En(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || En(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), K.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || En(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : wt(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : wt(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    wt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (K.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = ze.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === ze.ScriptEnd[3] ? this.startSpecial(ze.ScriptEnd, 4) : t === ze.StyleEnd[3] ? this.startSpecial(ze.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === ze.TitleEnd[3] ? this.startSpecial(ze.TitleEnd, 4) : t === ze.TextareaEnd[3] ? this.startSpecial(ze.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.state !== 33 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === ze.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const o0 = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function Gr(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function In(e, t) {
  const n = Gr("MODE", t), s = Gr(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Ps(e, t, n, ...s) {
  const o = In(e, t);
  return K.NODE_ENV !== "production" && o && Ni(e, t, n, ...s), o;
}
function Ni(e, t, n, ...s) {
  if (Gr(e, t) === "suppress-warning")
    return;
  const { message: i, link: r } = o0[e], l = `(deprecation ${e}) ${typeof i == "function" ? i(...s) : i}${r ? `
  Details: ${r}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Yl(e) {
  throw e;
}
function Xd(e) {
  K.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function we(e, t, n, s) {
  const o = K.NODE_ENV !== "production" ? (n || i0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, i = new SyntaxError(String(o));
  return i.code = e, i.loc = t, i;
}
const i0 = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
}, bt = (e) => e.type === 4 && e.isStatic;
function Qd(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return ro;
    case "Suspense":
    case "suspense":
      return Al;
    case "KeepAlive":
    case "keep-alive":
      return yi;
    case "BaseTransition":
    case "base-transition":
      return qd;
  }
}
const r0 = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Jl = (e) => !r0.test(e), l0 = /[A-Za-z_$\xA0-\uFFFF]/, a0 = /[\.\?\w$\xA0-\uFFFF]/, c0 = /\s+[.[]\s*|\s*[.[]\s+/g, Zd = (e) => e.type === 4 ? e.content : e.loc.source, u0 = (e) => {
  const t = Zd(e).trim().replace(c0, (l) => l.trim());
  let n = 0, s = [], o = 0, i = 0, r = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, i++;
        else if (!(l === 0 ? l0 : a0).test(a))
          return !1;
        break;
      case 1:
        a === "'" || a === '"' || a === "`" ? (s.push(n), n = 3, r = a) : a === "[" ? o++ : a === "]" && (--o || (n = s.pop()));
        break;
      case 2:
        if (a === "'" || a === '"' || a === "`")
          s.push(n), n = 3, r = a;
        else if (a === "(")
          i++;
        else if (a === ")") {
          if (l === t.length - 1)
            return !1;
          --i || (n = s.pop());
        }
        break;
      case 3:
        a === r && (n = s.pop(), r = null);
        break;
    }
  }
  return !o && !i;
}, ef = u0, d0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, f0 = (e) => d0.test(Zd(e)), p0 = f0;
function rc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function yt(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 7 && (n || o.exp) && (re(t) ? o.name === t : t.test(o.name)))
      return o;
  }
}
function yo(e, t, n = !1, s = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const i = e.props[o];
    if (i.type === 6) {
      if (n) continue;
      if (i.name === t && (i.value || s))
        return i;
    } else if (i.name === "bind" && (i.exp || s) && Dn(i.arg, t))
      return i;
  }
}
function Dn(e, t) {
  return !!(e && bt(e) && e.content === t);
}
function h0(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function gr(e) {
  return e.type === 5 || e.type === 2;
}
function lc(e) {
  return e.type === 7 && e.name === "pre";
}
function m0(e) {
  return e.type === 7 && e.name === "slot";
}
function wi(e) {
  return e.type === 1 && e.tagType === 3;
}
function xi(e) {
  return e.type === 1 && e.tagType === 2;
}
const g0 = /* @__PURE__ */ new Set([go, To]);
function tf(e, t = []) {
  if (e && !re(e) && e.type === 14) {
    const n = e.callee;
    if (!re(n) && g0.has(n))
      return tf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Si(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], i = [], r;
  if (o && !re(o) && o.type === 14) {
    const l = tf(o);
    o = l[0], i = l[1], r = i[i.length - 1];
  }
  if (o == null || re(o))
    s = Tt([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !re(l) && l.type === 15 ? ac(t, l) || l.properties.unshift(t) : o.callee === zl ? s = je(n.helper(bi), [
      Tt([t]),
      o
    ]) : o.arguments.unshift(Tt([t])), !s && (s = o);
  } else o.type === 15 ? (ac(t, o) || o.properties.unshift(t), s = o) : (s = je(n.helper(bi), [
    Tt([t]),
    o
  ]), r && r.callee === To && (r = i[i.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = s : e.props = s : r ? r.arguments[0] = s : e.arguments[2] = s;
}
function ac(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (o) => o.key.type === 4 && o.key.content === s
    );
  }
  return n;
}
function bo(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function v0(e) {
  return e.type === 14 && e.callee === Wl ? e.arguments[1].returns : e;
}
const y0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, nf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: zs,
  isPreTag: zs,
  isIgnoreNewlineTag: zs,
  isCustomElement: zs,
  onError: Yl,
  onWarn: Xd,
  comments: K.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ve = nf, _o = null, mn = "", Qe = null, he = null, mt = "", un = -1, qn = -1, Xl = 0, kn = !1, Yr = null;
const De = [], ke = new s0(De, {
  onerr: ht,
  ontext(e, t) {
    Bo(Ke(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Bo(e, t, n);
  },
  oninterpolation(e, t) {
    if (kn)
      return Bo(Ke(e, t), e, t);
    let n = e + ke.delimiterOpen.length, s = t - ke.delimiterClose.length;
    for (; wt(mn.charCodeAt(n)); )
      n++;
    for (; wt(mn.charCodeAt(s - 1)); )
      s--;
    let o = Ke(n, s);
    o.includes("&") && (o = ve.decodeEntities(o, !1)), Jr({
      type: 5,
      content: Jo(o, !1, Pe(n, s)),
      loc: Pe(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Ke(e, t);
    Qe = {
      type: 1,
      tag: n,
      ns: ve.getNamespace(n, De[0], ve.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Pe(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    uc(e);
  },
  onclosetag(e, t) {
    const n = Ke(e, t);
    if (!ve.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < De.length; o++)
        if (De[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && ht(24, De[0].loc.start.offset);
          for (let r = 0; r <= o; r++) {
            const l = De.shift();
            Yo(l, t, r < o);
          }
          break;
        }
      s || ht(23, sf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Qe.tag;
    Qe.isSelfClosing = !0, uc(e), De[0] && De[0].tag === t && Yo(De.shift(), e);
  },
  onattribname(e, t) {
    he = {
      type: 6,
      name: Ke(e, t),
      nameLoc: Pe(e, t),
      value: void 0,
      loc: Pe(e)
    };
  },
  ondirname(e, t) {
    const n = Ke(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!kn && s === "" && ht(26, e), kn || s === "")
      he = {
        type: 6,
        name: n,
        nameLoc: Pe(e, t),
        value: void 0,
        loc: Pe(e)
      };
    else if (he = {
      type: 7,
      name: s,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [ce("prop")] : [],
      loc: Pe(e)
    }, s === "pre") {
      kn = ke.inVPre = !0, Yr = Qe;
      const o = Qe.props;
      for (let i = 0; i < o.length; i++)
        o[i].type === 7 && (o[i] = T0(o[i]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Ke(e, t);
    if (kn && !lc(he))
      he.name += n, Wn(he.nameLoc, t);
    else {
      const s = n[0] !== "[";
      he.arg = Jo(
        s ? n : n.slice(1, -1),
        s,
        Pe(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Ke(e, t);
    if (kn && !lc(he))
      he.name += "." + n, Wn(he.nameLoc, t);
    else if (he.name === "slot") {
      const s = he.arg;
      s && (s.content += "." + n, Wn(s.loc, t));
    } else {
      const s = ce(n, !0, Pe(e, t));
      he.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    mt += Ke(e, t), un < 0 && (un = e), qn = t;
  },
  onattribentity(e, t, n) {
    mt += e, un < 0 && (un = t), qn = n;
  },
  onattribnameend(e) {
    const t = he.loc.start.offset, n = Ke(t, e);
    he.type === 7 && (he.rawName = n), Qe.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && ht(2, t);
  },
  onattribend(e, t) {
    if (Qe && he) {
      if (Wn(he.loc, t), e !== 0)
        if (mt.includes("&") && (mt = ve.decodeEntities(
          mt,
          !0
        )), he.type === 6)
          he.name === "class" && (mt = rf(mt).trim()), e === 1 && !mt && ht(13, t), he.value = {
            type: 2,
            content: mt,
            loc: e === 1 ? Pe(un, qn) : Pe(un - 1, qn + 1)
          }, ke.inSFCRoot && Qe.tag === "template" && he.name === "lang" && mt && mt !== "html" && ke.enterRCDATA(Ei("</template"), 0);
        else {
          let n = 0;
          he.exp = Jo(
            mt,
            !1,
            Pe(un, qn),
            0,
            n
          ), he.name === "for" && (he.forParseResult = _0(he.exp));
          let s = -1;
          he.name === "bind" && (s = he.modifiers.findIndex(
            (o) => o.content === "sync"
          )) > -1 && Ps(
            "COMPILER_V_BIND_SYNC",
            ve,
            he.loc,
            he.arg.loc.source
          ) && (he.name = "model", he.modifiers.splice(s, 1));
        }
      (he.type !== 7 || he.name !== "pre") && Qe.props.push(he);
    }
    mt = "", un = qn = -1;
  },
  oncomment(e, t) {
    ve.comments && Jr({
      type: 3,
      content: Ke(e, t),
      loc: Pe(e - 4, t + 3)
    });
  },
  onend() {
    const e = mn.length;
    if (K.NODE_ENV !== "production" && ke.state !== 1)
      switch (ke.state) {
        case 5:
        case 8:
          ht(5, e);
          break;
        case 3:
        case 4:
          ht(
            25,
            ke.sectionStart
          );
          break;
        case 28:
          ke.currentSequence === ze.CdataEnd ? ht(6, e) : ht(7, e);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          ht(9, e);
          break;
      }
    for (let t = 0; t < De.length; t++)
      Yo(De[t], e - 1), ht(24, De[t].loc.start.offset);
  },
  oncdata(e, t) {
    De[0].ns !== 0 ? Bo(Ke(e, t), e, t) : ht(1, e - 9);
  },
  onprocessinginstruction(e) {
    (De[0] ? De[0].ns : ve.ns) === 0 && ht(
      21,
      e - 1
    );
  }
}), cc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, b0 = /^\(|\)$/g;
function _0(e) {
  const t = e.loc, n = e.content, s = n.match(y0);
  if (!s) return;
  const [, o, i] = s, r = (u, p, m = !1) => {
    const E = t.start.offset + p, y = E + u.length;
    return Jo(
      u,
      !1,
      Pe(E, y),
      0,
      m ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: r(i.trim(), n.indexOf(i, o.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let a = o.trim().replace(b0, "").trim();
  const c = o.indexOf(a), d = a.match(cc);
  if (d) {
    a = a.replace(cc, "").trim();
    const u = d[1].trim();
    let p;
    if (u && (p = n.indexOf(u, c + a.length), l.key = r(u, p, !0)), d[2]) {
      const m = d[2].trim();
      m && (l.index = r(
        m,
        n.indexOf(
          m,
          l.key ? p + u.length : c + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = r(a, c, !0)), l;
}
function Ke(e, t) {
  return mn.slice(e, t);
}
function uc(e) {
  ke.inSFCRoot && (Qe.innerLoc = Pe(e + 1, e + 1)), Jr(Qe);
  const { tag: t, ns: n } = Qe;
  n === 0 && ve.isPreTag(t) && Xl++, ve.isVoidTag(t) ? Yo(Qe, e) : (De.unshift(Qe), (n === 1 || n === 2) && (ke.inXML = !0)), Qe = null;
}
function Bo(e, t, n) {
  {
    const i = De[0] && De[0].tag;
    i !== "script" && i !== "style" && e.includes("&") && (e = ve.decodeEntities(e, !1));
  }
  const s = De[0] || _o, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Wn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Pe(t, n)
  });
}
function Yo(e, t, n = !1) {
  n ? Wn(e.loc, sf(t, 60)) : Wn(e.loc, E0(t, 62) + 1), ke.inSFCRoot && (e.children.length ? e.innerLoc.end = de({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = de({}, e.innerLoc.start), e.innerLoc.source = Ke(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: i } = e;
  if (kn || (s === "slot" ? e.tagType = 2 : dc(e) ? e.tagType = 3 : w0(e) && (e.tagType = 1)), ke.inRCDATA || (e.children = of(i)), o === 0 && ve.isIgnoreNewlineTag(s)) {
    const r = i[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ve.isPreTag(s) && Xl--, Yr === e && (kn = ke.inVPre = !1, Yr = null), ke.inXML && (De[0] ? De[0].ns : ve.ns) === 0 && (ke.inXML = !1);
  {
    const r = e.props;
    if (K.NODE_ENV !== "production" && In(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ve
    )) {
      let a = !1, c = !1;
      for (let d = 0; d < r.length; d++) {
        const u = r[d];
        if (u.type === 7 && (u.name === "if" ? a = !0 : u.name === "for" && (c = !0)), a && c) {
          Ni(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ve,
            e.loc
          );
          break;
        }
      }
    }
    if (!ke.inSFCRoot && In(
      "COMPILER_NATIVE_TEMPLATE",
      ve
    ) && e.tag === "template" && !dc(e)) {
      K.NODE_ENV !== "production" && Ni(
        "COMPILER_NATIVE_TEMPLATE",
        ve,
        e.loc
      );
      const a = De[0] || _o, c = a.children.indexOf(e);
      a.children.splice(c, 1, ...e.children);
    }
    const l = r.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Ps(
      "COMPILER_INLINE_TEMPLATE",
      ve,
      l.loc
    ) && e.children.length && (l.value = {
      type: 2,
      content: Ke(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function E0(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n < mn.length - 1; ) n++;
  return n;
}
function sf(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const N0 = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function dc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && N0.has(t[n].name))
        return !0;
  }
  return !1;
}
function w0({ tag: e, props: t }) {
  if (ve.isCustomElement(e))
    return !1;
  if (e === "component" || x0(e.charCodeAt(0)) || Qd(e) || ve.isBuiltInComponent && ve.isBuiltInComponent(e) || ve.isNativeTag && !ve.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (Ps(
          "COMPILER_IS_ON_ELEMENT",
          ve,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Dn(s.arg, "is") && Ps(
        "COMPILER_IS_ON_ELEMENT",
        ve,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function x0(e) {
  return e > 64 && e < 91;
}
const S0 = /\r\n/g;
function of(e) {
  const t = ve.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (Xl)
        o.content = o.content.replace(S0, `
`);
      else if (C0(o.content)) {
        const i = e[s - 1] && e[s - 1].type, r = e[s + 1] && e[s + 1].type;
        !i || !r || t && (i === 3 && (r === 3 || r === 1) || i === 1 && (r === 3 || r === 1 && k0(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = rf(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function C0(e) {
  for (let t = 0; t < e.length; t++)
    if (!wt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function k0(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function rf(e) {
  let t = "", n = !1;
  for (let s = 0; s < e.length; s++)
    wt(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Jr(e) {
  (De[0] || _o).children.push(e);
}
function Pe(e, t) {
  return {
    start: ke.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : ke.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Ke(e, t)
  };
}
function O0(e) {
  return Pe(e.start.offset, e.end.offset);
}
function Wn(e, t) {
  e.end = ke.getPos(t), e.source = Ke(e.start.offset, t);
}
function T0(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Pe(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function Jo(e, t = !1, n, s = 0, o = 0) {
  return ce(e, t, n, s);
}
function ht(e, t, n) {
  ve.onError(
    we(e, Pe(t, t), void 0, n)
  );
}
function D0() {
  ke.reset(), Qe = null, he = null, mt = "", un = -1, qn = -1, De.length = 0;
}
function V0(e, t) {
  if (D0(), mn = e, ve = de({}, nf), t) {
    let o;
    for (o in t)
      t[o] != null && (ve[o] = t[o]);
  }
  if (K.NODE_ENV !== "production" && !ve.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  ke.mode = ve.parseMode === "html" ? 1 : ve.parseMode === "sfc" ? 2 : 0, ke.inXML = ve.ns === 1 || ve.ns === 2;
  const n = t && t.delimiters;
  n && (ke.delimiterOpen = Ei(n[0]), ke.delimiterClose = Ei(n[1]));
  const s = _o = e0([], e);
  return ke.parse(mn), s.loc = Pe(0, e.length), s.children = of(s.children), _o = null, s;
}
function $0(e, t) {
  Xo(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!lf(e)
  );
}
function lf(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !xi(t[0]) ? t[0] : null;
}
function Xo(e, t, n, s = !1, o = !1) {
  const { children: i } = e, r = [];
  for (let u = 0; u < i.length; u++) {
    const p = i[u];
    if (p.type === 1 && p.tagType === 0) {
      const m = s ? 0 : xt(p, n);
      if (m > 0) {
        if (m >= 2) {
          p.codegenNode.patchFlag = -1, r.push(p);
          continue;
        }
      } else {
        const E = p.codegenNode;
        if (E.type === 13) {
          const y = E.patchFlag;
          if ((y === void 0 || y === 512 || y === 1) && cf(p, n) >= 2) {
            const T = uf(p);
            T && (E.props = n.hoist(T));
          }
          E.dynamicProps && (E.dynamicProps = n.hoist(E.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : xt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (K.NODE_ENV !== "production" ? ` /* ${Xs[-1]} */` : "")
      ), r.push(p);
      continue;
    }
    if (p.type === 1) {
      const m = p.tagType === 1;
      m && n.scopes.vSlot++, Xo(p, e, n, !1, o), m && n.scopes.vSlot--;
    } else if (p.type === 11)
      Xo(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let m = 0; m < p.branches.length; m++)
        Xo(
          p.branches[m],
          e,
          n,
          p.branches[m].children.length === 1,
          o
        );
  }
  let l = !1;
  const a = [];
  if (r.length === i.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && q(e.codegenNode.children))
      e.codegenNode.children = c(
        ts(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !q(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = d(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = c(
        ts(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !q(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = yt(e, "slot", !0), p = u && u.arg && d(t.codegenNode, u.arg);
      p && (a.push(n.cached.length), p.returns = c(
        ts(p.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const u of r)
      a.push(n.cached.length), u.codegenNode = n.cache(u.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !q(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Ie(
      "__",
      ce(JSON.stringify(a), !1)
    )
  );
  function c(u) {
    const p = n.cache(u);
    return o && n.hmr && (p.needArraySpread = !0), p;
  }
  function d(u, p) {
    if (u.children && !q(u.children) && u.children.type === 15) {
      const m = u.children.properties.find(
        (E) => E.key === p || E.key.content === p
      );
      return m && m.value;
    }
  }
  r.length && n.transformHoist && n.transformHoist(i, n, e);
}
function xt(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const s = n.get(e);
      if (s !== void 0)
        return s;
      const o = e.codegenNode;
      if (o.type !== 13 || o.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (o.patchFlag === void 0) {
        let r = 3;
        const l = cf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < r && (r = l);
        for (let a = 0; a < e.children.length; a++) {
          const c = xt(e.children[a], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < r && (r = c);
        }
        if (r > 1)
          for (let a = 0; a < e.props.length; a++) {
            const c = e.props[a];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const d = xt(c.exp, t);
              if (d === 0)
                return n.set(e, 0), 0;
              d < r && (r = d);
            }
          }
        if (o.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(rs), t.removeHelper(
            Ms(t.inSSR, o.isComponent)
          ), o.isBlock = !1, t.helper(Is(t.inSSR, o.isComponent));
        }
        return n.set(e, r), r;
      } else
        return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return xt(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let i = 3;
      for (let r = 0; r < e.children.length; r++) {
        const l = e.children[r];
        if (re(l) || Et(l))
          continue;
        const a = xt(l, t);
        if (a === 0)
          return 0;
        a < i && (i = a);
      }
      return i;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const A0 = /* @__PURE__ */ new Set([
  Ul,
  ql,
  go,
  To
]);
function af(e, t) {
  if (e.type === 14 && !re(e.callee) && A0.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return xt(n, t);
    if (n.type === 14)
      return af(n, t);
  }
  return 0;
}
function cf(e, t) {
  let n = 3;
  const s = uf(e);
  if (s && s.type === 15) {
    const { properties: o } = s;
    for (let i = 0; i < o.length; i++) {
      const { key: r, value: l } = o[i], a = xt(r, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let c;
      if (l.type === 4 ? c = xt(l, t) : l.type === 14 ? c = af(l, t) : c = 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function uf(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function I0(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: i = !1,
  nodeTransforms: r = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: c = Oe,
  isCustomElement: d = Oe,
  expressionPlugins: u = [],
  scopeId: p = null,
  slotted: m = !0,
  ssr: E = !1,
  inSSR: y = !1,
  ssrCssVars: T = "",
  bindingMetadata: C = fe,
  inline: v = !1,
  isTS: f = !1,
  onError: w = Yl,
  onWarn: b = Xd,
  compatConfig: V
}) {
  const P = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), S = {
    // options
    filename: t,
    selfName: P && on(Se(P[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: o,
    cacheHandlers: i,
    nodeTransforms: r,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: c,
    isCustomElement: d,
    expressionPlugins: u,
    scopeId: p,
    slotted: m,
    ssr: E,
    inSSR: y,
    ssrCssVars: T,
    bindingMetadata: C,
    inline: v,
    isTS: f,
    onError: w,
    onWarn: b,
    compatConfig: V,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(_) {
      const O = S.helpers.get(_) || 0;
      return S.helpers.set(_, O + 1), _;
    },
    removeHelper(_) {
      const O = S.helpers.get(_);
      if (O) {
        const I = O - 1;
        I ? S.helpers.set(_, I) : S.helpers.delete(_);
      }
    },
    helperString(_) {
      return `_${$s[S.helper(_)]}`;
    },
    replaceNode(_) {
      if (K.NODE_ENV !== "production") {
        if (!S.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!S.parent)
          throw new Error("Cannot replace root node.");
      }
      S.parent.children[S.childIndex] = S.currentNode = _;
    },
    removeNode(_) {
      if (K.NODE_ENV !== "production" && !S.parent)
        throw new Error("Cannot remove root node.");
      const O = S.parent.children, I = _ ? O.indexOf(_) : S.currentNode ? S.childIndex : -1;
      if (K.NODE_ENV !== "production" && I < 0)
        throw new Error("node being removed is not a child of current parent");
      !_ || _ === S.currentNode ? (S.currentNode = null, S.onNodeRemoved()) : S.childIndex > I && (S.childIndex--, S.onNodeRemoved()), S.parent.children.splice(I, 1);
    },
    onNodeRemoved: Oe,
    addIdentifiers(_) {
    },
    removeIdentifiers(_) {
    },
    hoist(_) {
      re(_) && (_ = ce(_)), S.hoists.push(_);
      const O = ce(
        `_hoisted_${S.hoists.length}`,
        !1,
        _.loc,
        2
      );
      return O.hoisted = _, O;
    },
    cache(_, O = !1, I = !1) {
      const $ = t0(
        S.cached.length,
        _,
        O,
        I
      );
      return S.cached.push($), $;
    }
  };
  return S.filters = /* @__PURE__ */ new Set(), S;
}
function M0(e, t) {
  const n = I0(e, t);
  Ji(e, n), t.hoistStatic && $0(e, n), t.ssr || P0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function P0(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const o = lf(e);
    if (o && o.codegenNode) {
      const i = o.codegenNode;
      i.type === 13 && Gl(i, t), e.codegenNode = i;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let o = 64;
    K.NODE_ENV !== "production" && s.filter((i) => i.type !== 3).length === 1 && (o |= 2048), e.codegenNode = vo(
      t,
      n(mo),
      void 0,
      e.children,
      o,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function R0(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const o = e.children[n];
    re(o) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Ji(o, t));
  }
}
function Ji(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let i = 0; i < n.length; i++) {
    const r = n[i](e, t);
    if (r && (q(r) ? s.push(...r) : s.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Oo);
      break;
    case 5:
      t.ssr || t.helper(Yi);
      break;
    case 9:
      for (let i = 0; i < e.branches.length; i++)
        Ji(e.branches[i], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      R0(e, t);
      break;
  }
  t.currentNode = e;
  let o = s.length;
  for (; o--; )
    s[o]();
}
function df(e, t) {
  const n = re(e) ? (s) => s === e : (s) => e.test(s);
  return (s, o) => {
    if (s.type === 1) {
      const { props: i } = s;
      if (s.tagType === 3 && i.some(m0))
        return;
      const r = [];
      for (let l = 0; l < i.length; l++) {
        const a = i[l];
        if (a.type === 7 && n(a.name)) {
          i.splice(l, 1), l--;
          const c = t(s, a, o);
          c && r.push(c);
        }
      }
      return r;
    }
  };
}
const Xi = "/*@__PURE__*/", ff = (e) => `${$s[e]}: _${$s[e]}`;
function L0(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: o = "template.vue.html",
  scopeId: i = null,
  optimizeImports: r = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: c = "vue/server-renderer",
  ssr: d = !1,
  isTS: u = !1,
  inSSR: p = !1
}) {
  const m = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: s,
    filename: o,
    scopeId: i,
    optimizeImports: r,
    runtimeGlobalName: l,
    runtimeModuleName: a,
    ssrRuntimeModuleName: c,
    ssr: d,
    isTS: u,
    inSSR: p,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(y) {
      return `_${$s[y]}`;
    },
    push(y, T = -2, C) {
      m.code += y;
    },
    indent() {
      E(++m.indentLevel);
    },
    deindent(y = !1) {
      y ? --m.indentLevel : E(--m.indentLevel);
    },
    newline() {
      E(m.indentLevel);
    }
  };
  function E(y) {
    m.push(
      `
` + "  ".repeat(y),
      0
      /* Start */
    );
  }
  return m;
}
function F0(e, t = {}) {
  const n = L0(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: o,
    prefixIdentifiers: i,
    indent: r,
    deindent: l,
    newline: a,
    scopeId: c,
    ssr: d
  } = n, u = Array.from(e.helpers), p = u.length > 0, m = !i && s !== "module";
  B0(e, n);
  const y = d ? "ssrRender" : "render", C = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${y}(${C}) {`), r(), m && (o("with (_ctx) {"), r(), p && (o(
    `const { ${u.map(ff).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (vr(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (vr(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), vr(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let v = 0; v < e.temps; v++)
      o(`${v > 0 ? ", " : ""}_temp${v}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), d || o("return "), e.codegenNode ? nt(e.codegenNode, n) : o("null"), m && (l(), o("}")), l(), o("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function B0(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: o,
    newline: i,
    runtimeModuleName: r,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, c = l, d = Array.from(e.helpers);
  if (d.length > 0 && (o(
    `const _Vue = ${c}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const u = [
      Il,
      Ml,
      Oo,
      Pl,
      Wd
    ].filter((p) => d.includes(p)).map(ff).join(", ");
    o(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  H0(e.hoists, t), i(), o("return ");
}
function vr(e, t, { helper: n, push: s, newline: o, isTS: i }) {
  const r = n(
    t === "filter" ? Bl : t === "component" ? Rl : Fl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const c = a.endsWith("__self");
    c && (a = a.slice(0, -6)), s(
      `const ${bo(a, t)} = ${r}(${JSON.stringify(a)}${c ? ", true" : ""})${i ? "!" : ""}`
    ), l < e.length - 1 && o();
  }
}
function H0(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: s } = t;
  s();
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i && (n(`const _hoisted_${o + 1} = `), nt(i, t), s());
  }
  t.pure = !1;
}
function j0(e) {
  return re(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Ql(e, t) {
  const n = e.length > 3 || K.NODE_ENV !== "production" && e.some((s) => q(s) || !j0(s));
  t.push("["), n && t.indent(), Do(e, t, n), n && t.deindent(), t.push("]");
}
function Do(e, t, n = !1, s = !0) {
  const { push: o, newline: i } = t;
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    re(l) ? o(
      l,
      -3
      /* Unknown */
    ) : q(l) ? Ql(l, t) : nt(l, t), r < e.length - 1 && (n ? (s && o(","), i()) : s && o(", "));
  }
}
function nt(e, t) {
  if (re(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (Et(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      K.NODE_ENV !== "production" && rc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), nt(e.codegenNode, t);
      break;
    case 2:
      U0(e, t);
      break;
    case 4:
      pf(e, t);
      break;
    case 5:
      q0(e, t);
      break;
    case 12:
      nt(e.codegenNode, t);
      break;
    case 8:
      hf(e, t);
      break;
    case 3:
      K0(e, t);
      break;
    case 13:
      W0(e, t);
      break;
    case 14:
      Y0(e, t);
      break;
    case 15:
      J0(e, t);
      break;
    case 17:
      X0(e, t);
      break;
    case 18:
      Q0(e, t);
      break;
    case 19:
      Z0(e, t);
      break;
    case 20:
      ev(e, t);
      break;
    case 21:
      Do(e.body, t, !0, !1);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (K.NODE_ENV !== "production")
        return rc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function U0(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function pf(e, t) {
  const { content: n, isStatic: s } = e;
  t.push(
    s ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function q0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Xi), n(`${s(Yi)}(`), nt(e.content, t), n(")");
}
function hf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    re(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : nt(s, t);
  }
}
function z0(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), hf(e, t), n("]");
  else if (e.isStatic) {
    const s = Jl(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function K0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Xi), n(
    `${s(Oo)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function W0(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: i,
    props: r,
    children: l,
    patchFlag: a,
    dynamicProps: c,
    directives: d,
    isBlock: u,
    disableTracking: p,
    isComponent: m
  } = e;
  let E;
  if (a)
    if (K.NODE_ENV !== "production")
      if (a < 0)
        E = a + ` /* ${Xs[a]} */`;
      else {
        const T = Object.keys(Xs).map(Number).filter((C) => C > 0 && a & C).map((C) => Xs[C]).join(", ");
        E = a + ` /* ${T} */`;
      }
    else
      E = String(a);
  d && n(s(Hl) + "("), u && n(`(${s(rs)}(${p ? "true" : ""}), `), o && n(Xi);
  const y = u ? Ms(t.inSSR, m) : Is(t.inSSR, m);
  n(s(y) + "(", -2, e), Do(
    G0([i, r, l, E, c]),
    t
  ), n(")"), u && n(")"), d && (n(", "), nt(d, t), n(")"));
}
function G0(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Y0(e, t) {
  const { push: n, helper: s, pure: o } = t, i = re(e.callee) ? e.callee : s(e.callee);
  o && n(Xi), n(i + "(", -2, e), Do(e.arguments, t), n(")");
}
function J0(e, t) {
  const { push: n, indent: s, deindent: o, newline: i } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const l = r.length > 1 || K.NODE_ENV !== "production" && r.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < r.length; a++) {
    const { key: c, value: d } = r[a];
    z0(c, t), n(": "), nt(d, t), a < r.length - 1 && (n(","), i());
  }
  l && o(), n(l ? "}" : " }");
}
function X0(e, t) {
  Ql(e.elements, t);
}
function Q0(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: i, returns: r, body: l, newline: a, isSlot: c } = e;
  c && n(`_${$s[Kl]}(`), n("(", -2, e), q(i) ? Do(i, t) : i && nt(i, t), n(") => "), (a || l) && (n("{"), s()), r ? (a && n("return "), q(r) ? Ql(r, t) : nt(r, t)) : l && nt(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Z0(e, t) {
  const { test: n, consequent: s, alternate: o, newline: i } = e, { push: r, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const u = !Jl(n.content);
    u && r("("), pf(n, t), u && r(")");
  } else
    r("("), nt(n, t), r(")");
  i && l(), t.indentLevel++, i || r(" "), r("? "), nt(s, t), t.indentLevel--, i && c(), i || r(" "), r(": ");
  const d = o.type === 19;
  d || t.indentLevel++, nt(o, t), d || t.indentLevel--, i && a(
    !0
    /* without newline */
  );
}
function ev(e, t) {
  const { push: n, helper: s, indent: o, deindent: i, newline: r } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(_i)}(-1`), e.inVOnce && n(", true"), n("),"), r(), n("(")), n(`_cache[${e.index}] = `), nt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), r(), n(`${s(_i)}(1),`), r(), n(`_cache[${e.index}]`), i()), n(")"), a && n(")]");
}
const tv = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), nv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Gn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (i) {
      let r = i.message;
      const l = o.replace(nv, "").match(tv);
      l && (r = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        we(
          45,
          e.loc,
          void 0,
          r
        )
      );
    }
}
const sv = (e, t) => {
  if (e.type === 5)
    e.content = yr(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = yt(e, "memo");
    for (let s = 0; s < e.props.length; s++) {
      const o = e.props[s];
      if (o.type === 7 && o.name !== "for") {
        const i = o.exp, r = o.arg;
        i && i.type === 4 && !(o.name === "on" && r) && // key has been processed in transformFor(vMemo + vFor)
        !(n && r && r.type === 4 && r.content === "key") && (o.exp = yr(
          i,
          t,
          // slot args must be processed as function params
          o.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (o.arg = yr(r, t));
      }
    }
  }
};
function yr(e, t, n = !1, s = !1, o = Object.create(t.identifiers)) {
  return K.NODE_ENV !== "production" && Gn(e, t, n, s), e;
}
const ov = df(
  /^(if|else|else-if)$/,
  (e, t, n) => iv(e, t, n, (s, o, i) => {
    const r = n.parent.children;
    let l = r.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const c = r[l];
      c && c.type === 9 && (a += c.branches.length);
    }
    return () => {
      if (i)
        s.codegenNode = pc(
          o,
          a,
          n
        );
      else {
        const c = lv(s.codegenNode);
        c.alternate = pc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function iv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      we(28, t.loc)
    ), t.exp = ce("true", !1, o);
  }
  if (K.NODE_ENV !== "production" && t.exp && Gn(t.exp, n), t.name === "if") {
    const o = fc(e, t), i = {
      type: 9,
      loc: O0(e.loc),
      branches: [o]
    };
    if (n.replaceNode(i), s)
      return s(i, o, !0);
  } else {
    const o = n.parent.children, i = [];
    let r = o.indexOf(e);
    for (; r-- >= -1; ) {
      const l = o[r];
      if (l && l.type === 3) {
        n.removeNode(l), K.NODE_ENV !== "production" && i.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          we(30, e.loc)
        ), n.removeNode();
        const a = fc(e, t);
        if (K.NODE_ENV !== "production" && i.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...i, ...a.children]), K.NODE_ENV !== "production") {
          const d = a.userKey;
          d && l.branches.forEach(({ userKey: u }) => {
            rv(u, d) && n.onError(
              we(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const c = s && s(l, a, !1);
        Ji(a, n), c && c(), n.currentNode = null;
      } else
        n.onError(
          we(30, e.loc)
        );
      break;
    }
  }
}
function fc(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !yt(e, "for") ? e.children : [e],
    userKey: yo(e, "key"),
    isTemplateIf: n
  };
}
function pc(e, t, n) {
  return e.condition ? Wr(
    e.condition,
    hc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    je(n.helper(Oo), [
      K.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : hc(e, t, n);
}
function hc(e, t, n) {
  const { helper: s } = n, o = Ie(
    "key",
    ce(
      `${t}`,
      !1,
      St,
      2
    )
  ), { children: i } = e, r = i[0];
  if (i.length !== 1 || r.type !== 1)
    if (i.length === 1 && r.type === 11) {
      const a = r.codegenNode;
      return Si(a, o, n), a;
    } else {
      let a = 64;
      return K.NODE_ENV !== "production" && !e.isTemplateIf && i.filter((c) => c.type !== 3).length === 1 && (a |= 2048), vo(
        n,
        s(mo),
        Tt([o]),
        i,
        a,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
    }
  else {
    const a = r.codegenNode, c = v0(a);
    return c.type === 13 && Gl(c, n), Si(c, o, n), a;
  }
}
function rv(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, s = t.exp;
    if (n.type !== s.type || n.type !== 4 || n.isStatic !== s.isStatic || n.content !== s.content)
      return !1;
  }
  return !0;
}
function lv(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const av = (e, t, n) => {
  const { modifiers: s, loc: o } = e, i = e.arg;
  let { exp: r } = e;
  if (r && r.type === 4 && !r.content.trim() && (r = void 0), !r) {
    if (i.type !== 4 || !i.isStatic)
      return n.onError(
        we(
          52,
          i.loc
        )
      ), {
        props: [
          Ie(i, ce("", !0, o))
        ]
      };
    mf(e), r = e.exp;
  }
  return i.type !== 4 ? (i.children.unshift("("), i.children.push(') || ""')) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : '""'), s.some((l) => l.content === "camel") && (i.type === 4 ? i.isStatic ? i.content = Se(i.content) : i.content = `${n.helperString(zr)}(${i.content})` : (i.children.unshift(`${n.helperString(zr)}(`), i.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && mc(i, "."), s.some((l) => l.content === "attr") && mc(i, "^")), {
    props: [Ie(i, r)]
  };
}, mf = (e, t) => {
  const n = e.arg, s = Se(n.content);
  e.exp = ce(s, !1, n.loc);
}, mc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, cv = df(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return uv(e, t, n, (i) => {
      const r = je(s(jl), [
        i.source
      ]), l = wi(e), a = yt(e, "memo"), c = yo(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && mf(c);
      let u = c && (c.type === 6 ? c.value ? ce(c.value.content, !0) : void 0 : c.exp);
      const p = c && u ? Ie("key", u) : null, m = i.source.type === 4 && i.source.constType > 0, E = m ? 64 : c ? 128 : 256;
      return i.codegenNode = vo(
        n,
        s(mo),
        void 0,
        r,
        E,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let y;
        const { children: T } = i;
        K.NODE_ENV !== "production" && l && e.children.some((f) => {
          if (f.type === 1) {
            const w = yo(f, "key");
            if (w)
              return n.onError(
                we(
                  33,
                  w.loc
                )
              ), !0;
          }
        });
        const C = T.length !== 1 || T[0].type !== 1, v = xi(e) ? e : l && e.children.length === 1 && xi(e.children[0]) ? e.children[0] : null;
        if (v ? (y = v.codegenNode, l && p && Si(y, p, n)) : C ? y = vo(
          n,
          s(mo),
          p ? Tt([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (y = T[0].codegenNode, l && p && Si(y, p, n), y.isBlock !== !m && (y.isBlock ? (o(rs), o(
          Ms(n.inSSR, y.isComponent)
        )) : o(
          Is(n.inSSR, y.isComponent)
        )), y.isBlock = !m, y.isBlock ? (s(rs), s(Ms(n.inSSR, y.isComponent))) : s(Is(n.inSSR, y.isComponent))), a) {
          const f = As(
            Xr(i.parseResult, [
              ce("_cached")
            ])
          );
          f.body = n0([
            jt(["const _memo = (", a.exp, ")"]),
            jt([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Jd
              )}(_cached, _memo)) return _cached`
            ]),
            jt(["const _item = ", y]),
            ce("_item.memo = _memo"),
            ce("return _item")
          ]), r.arguments.push(
            f,
            ce("_cache"),
            ce(String(n.cached.length))
          ), n.cached.push(null);
        } else
          r.arguments.push(
            As(
              Xr(i.parseResult),
              y,
              !0
            )
          );
      };
    });
  }
);
function uv(e, t, n, s) {
  if (!t.exp) {
    n.onError(
      we(31, t.loc)
    );
    return;
  }
  const o = t.forParseResult;
  if (!o) {
    n.onError(
      we(32, t.loc)
    );
    return;
  }
  gf(o, n);
  const { addIdentifiers: i, removeIdentifiers: r, scopes: l } = n, { source: a, value: c, key: d, index: u } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: d,
    objectIndexAlias: u,
    parseResult: o,
    children: wi(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const m = s && s(p);
  return () => {
    l.vFor--, m && m();
  };
}
function gf(e, t) {
  e.finalized || (K.NODE_ENV !== "production" && (Gn(e.source, t), e.key && Gn(
    e.key,
    t,
    !0
  ), e.index && Gn(
    e.index,
    t,
    !0
  ), e.value && Gn(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function Xr({ value: e, key: t, index: n }, s = []) {
  return dv([e, t, n, ...s]);
}
function dv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || ce("_".repeat(s + 1), !1));
}
const gc = ce("undefined", !1), fv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = yt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, pv = (e, t, n, s) => As(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function hv(e, t, n = pv) {
  t.helper(Kl);
  const { children: s, loc: o } = e, i = [], r = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = yt(e, "slot", !0);
  if (a) {
    const { arg: T, exp: C } = a;
    T && !bt(T) && (l = !0), i.push(
      Ie(
        T || ce("default", !0),
        n(C, void 0, s, o)
      )
    );
  }
  let c = !1, d = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let T = 0; T < s.length; T++) {
    const C = s[T];
    let v;
    if (!wi(C) || !(v = yt(C, "slot", !0))) {
      C.type !== 3 && u.push(C);
      continue;
    }
    if (a) {
      t.onError(
        we(37, v.loc)
      );
      break;
    }
    c = !0;
    const { children: f, loc: w } = C, {
      arg: b = ce("default", !0),
      exp: V,
      loc: P
    } = v;
    let S;
    bt(b) ? S = b ? b.content : "default" : l = !0;
    const _ = yt(C, "for"), O = n(V, _, f, w);
    let I, $;
    if (I = yt(C, "if"))
      l = !0, r.push(
        Wr(
          I.exp,
          Ho(b, O, m++),
          gc
        )
      );
    else if ($ = yt(
      C,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let L = T, J;
      for (; L-- && (J = s[L], !(J.type !== 3 && Qr(J))); )
        ;
      if (J && wi(J) && yt(J, /^(else-)?if$/)) {
        let ee = r[r.length - 1];
        for (; ee.alternate.type === 19; )
          ee = ee.alternate;
        ee.alternate = $.exp ? Wr(
          $.exp,
          Ho(
            b,
            O,
            m++
          ),
          gc
        ) : Ho(b, O, m++);
      } else
        t.onError(
          we(30, $.loc)
        );
    } else if (_) {
      l = !0;
      const L = _.forParseResult;
      L ? (gf(L, t), r.push(
        je(t.helper(jl), [
          L.source,
          As(
            Xr(L),
            Ho(b, O),
            !0
          )
        ])
      )) : t.onError(
        we(
          32,
          _.loc
        )
      );
    } else {
      if (S) {
        if (p.has(S)) {
          t.onError(
            we(
              38,
              P
            )
          );
          continue;
        }
        p.add(S), S === "default" && (d = !0);
      }
      i.push(Ie(b, O));
    }
  }
  if (!a) {
    const T = (C, v) => {
      const f = n(C, void 0, v, o);
      return t.compatConfig && (f.isNonScopedSlot = !0), Ie("default", f);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((C) => Qr(C)) && (d ? t.onError(
      we(
        39,
        u[0].loc
      )
    ) : i.push(
      T(void 0, u)
    )) : i.push(T(void 0, s));
  }
  const E = l ? 2 : Qo(e.children) ? 3 : 1;
  let y = Tt(
    i.concat(
      Ie(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ce(
          E + (K.NODE_ENV !== "production" ? ` /* ${jf[E]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return r.length && (y = je(t.helper(Yd), [
    y,
    ts(r)
  ])), {
    slots: y,
    hasDynamicSlots: l
  };
}
function Ho(e, t, n) {
  const s = [
    Ie("name", e),
    Ie("fn", t)
  ];
  return n != null && s.push(
    Ie("key", ce(String(n), !0))
  ), Tt(s);
}
function Qo(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Qo(n.children))
          return !0;
        break;
      case 9:
        if (Qo(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Qo(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Qr(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Qr(e.content);
}
const vf = /* @__PURE__ */ new WeakMap(), mv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, i = e.tagType === 1;
  let r = i ? gv(e, t) : `"${s}"`;
  const l = me(r) && r.callee === Ll;
  let a, c, d = 0, u, p, m, E = (
    // dynamic component may resolve to plain elements
    l || r === ro || r === Al || !i && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const y = yf(
      e,
      t,
      void 0,
      i,
      l
    );
    a = y.props, d = y.patchFlag, p = y.dynamicPropNames;
    const T = y.directives;
    m = T && T.length ? ts(
      T.map((C) => yv(C, t))
    ) : void 0, y.shouldUseBlock && (E = !0);
  }
  if (e.children.length > 0)
    if (r === yi && (E = !0, d |= 1024, K.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      we(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), i && // Teleport is not a real component and has dedicated runtime handling
    r !== ro && // explained above.
    r !== yi) {
      const { slots: T, hasDynamicSlots: C } = hv(e, t);
      c = T, C && (d |= 1024);
    } else if (e.children.length === 1 && r !== ro) {
      const T = e.children[0], C = T.type, v = C === 5 || C === 8;
      v && xt(T, t) === 0 && (d |= 1), v || C === 2 ? c = T : c = e.children;
    } else
      c = e.children;
  p && p.length && (u = bv(p)), e.codegenNode = vo(
    t,
    r,
    a,
    c,
    d === 0 ? void 0 : d,
    u,
    m,
    !!E,
    !1,
    i,
    e.loc
  );
};
function gv(e, t, n = !1) {
  let { tag: s } = e;
  const o = Zr(s), i = yo(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (i)
    if (o || In(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (i.type === 6 ? l = i.value && ce(i.value.content, !0) : (l = i.exp, l || (l = ce("is", !1, i.arg.loc))), l)
        return je(t.helper(Ll), [
          l
        ]);
    } else i.type === 6 && i.value.content.startsWith("vue:") && (s = i.value.content.slice(4));
  const r = Qd(s) || t.isBuiltInComponent(s);
  return r ? (n || t.helper(r), r) : (t.helper(Rl), t.components.add(s), bo(s, "component"));
}
function yf(e, t, n = e.props, s, o, i = !1) {
  const { tag: r, loc: l, children: a } = e;
  let c = [];
  const d = [], u = [], p = a.length > 0;
  let m = !1, E = 0, y = !1, T = !1, C = !1, v = !1, f = !1, w = !1;
  const b = [], V = (O) => {
    c.length && (d.push(
      Tt(vc(c), l)
    ), c = []), O && d.push(O);
  }, P = () => {
    t.scopes.vFor > 0 && c.push(
      Ie(
        ce("ref_for", !0),
        ce("true")
      )
    );
  }, S = ({ key: O, value: I }) => {
    if (bt(O)) {
      const $ = O.content, L = gn($);
      if (L && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      $.toLowerCase() !== "onclick" && // omit v-model handlers
      $ !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Vn($) && (v = !0), L && Vn($) && (w = !0), L && I.type === 14 && (I = I.arguments[0]), I.type === 20 || (I.type === 4 || I.type === 8) && xt(I, t) > 0)
        return;
      $ === "ref" ? y = !0 : $ === "class" ? T = !0 : $ === "style" ? C = !0 : $ !== "key" && !b.includes($) && b.push($), s && ($ === "class" || $ === "style") && !b.includes($) && b.push($);
    } else
      f = !0;
  };
  for (let O = 0; O < n.length; O++) {
    const I = n[O];
    if (I.type === 6) {
      const { loc: $, name: L, nameLoc: J, value: ee } = I;
      let Z = !0;
      if (L === "ref" && (y = !0, P()), L === "is" && (Zr(r) || ee && ee.content.startsWith("vue:") || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Ie(
          ce(L, !0, J),
          ce(
            ee ? ee.content : "",
            Z,
            ee ? ee.loc : $
          )
        )
      );
    } else {
      const { name: $, arg: L, exp: J, loc: ee, modifiers: Z } = I, ne = $ === "bind", Q = $ === "on";
      if ($ === "slot") {
        s || t.onError(
          we(40, ee)
        );
        continue;
      }
      if ($ === "once" || $ === "memo" || $ === "is" || ne && Dn(L, "is") && (Zr(r) || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || Q && i)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && Dn(L, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        Q && p && Dn(L, "vue:before-update")) && (m = !0), ne && Dn(L, "ref") && P(), !L && (ne || Q)
      ) {
        if (f = !0, J)
          if (ne) {
            if (V(), K.NODE_ENV !== "production" && d.some((Ct) => Ct.type === 15 ? Ct.properties.some(({ key: kt }) => kt.type !== 4 || !kt.isStatic ? !0 : kt.content !== "class" && kt.content !== "style" && !gn(kt.content)) : !0) && Ps(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              ee
            ), In(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              d.unshift(J);
              continue;
            }
            P(), V(), d.push(J);
          } else
            V({
              type: 14,
              loc: ee,
              callee: t.helper(zl),
              arguments: s ? [J] : [J, "true"]
            });
        else
          t.onError(
            we(
              ne ? 34 : 35,
              ee
            )
          );
        continue;
      }
      ne && Z.some((ft) => ft.content === "prop") && (E |= 32);
      const Ee = t.directiveTransforms[$];
      if (Ee) {
        const { props: ft, needRuntime: Ct } = Ee(I, e, t);
        !i && ft.forEach(S), Q && L && !bt(L) ? V(Tt(ft, l)) : c.push(...ft), Ct && (u.push(I), Et(Ct) && vf.set(I, Ct));
      } else Tc($) || (u.push(I), p && (m = !0));
    }
  }
  let _;
  if (d.length ? (V(), d.length > 1 ? _ = je(
    t.helper(bi),
    d,
    l
  ) : _ = d[0]) : c.length && (_ = Tt(
    vc(c),
    l
  )), f ? E |= 16 : (T && !s && (E |= 2), C && !s && (E |= 4), b.length && (E |= 8), v && (E |= 32)), !m && (E === 0 || E === 32) && (y || w || u.length > 0) && (E |= 512), !t.inSSR && _)
    switch (_.type) {
      case 15:
        let O = -1, I = -1, $ = !1;
        for (let ee = 0; ee < _.properties.length; ee++) {
          const Z = _.properties[ee].key;
          bt(Z) ? Z.content === "class" ? O = ee : Z.content === "style" && (I = ee) : Z.isHandlerKey || ($ = !0);
        }
        const L = _.properties[O], J = _.properties[I];
        $ ? _ = je(
          t.helper(go),
          [_]
        ) : (L && !bt(L.value) && (L.value = je(
          t.helper(Ul),
          [L.value]
        )), J && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (C || J.value.type === 4 && J.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        J.value.type === 17) && (J.value = je(
          t.helper(ql),
          [J.value]
        )));
        break;
      case 14:
        break;
      default:
        _ = je(
          t.helper(go),
          [
            je(t.helper(To), [
              _
            ])
          ]
        );
        break;
    }
  return {
    props: _,
    directives: u,
    patchFlag: E,
    dynamicPropNames: b,
    shouldUseBlock: m
  };
}
function vc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.key.type === 8 || !o.key.isStatic) {
      n.push(o);
      continue;
    }
    const i = o.key.content, r = t.get(i);
    r ? (i === "style" || i === "class" || gn(i)) && vv(r, o) : (t.set(i, o), n.push(o));
  }
  return n;
}
function vv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ts(
    [e.value, t.value],
    e.loc
  );
}
function yv(e, t) {
  const n = [], s = vf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Fl), t.directives.add(e.name), n.push(bo(e.name, "directive")));
  const { loc: o } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const i = ce("true", !1, o);
    n.push(
      Tt(
        e.modifiers.map(
          (r) => Ie(r, i)
        ),
        o
      )
    );
  }
  return ts(n, e.loc);
}
function bv(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function Zr(e) {
  return e === "component" || e === "Component";
}
const _v = (e, t) => {
  if (xi(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: i } = Ev(e, t), r = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    i && (r[2] = i, l = 3), n.length && (r[3] = As([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), r.splice(l), e.codegenNode = je(
      t.helper(Gd),
      r,
      s
    );
  }
};
function Ev(e, t) {
  let n = '"default"', s;
  const o = [];
  for (let i = 0; i < e.props.length; i++) {
    const r = e.props[i];
    if (r.type === 6)
      r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = Se(r.name), o.push(r)));
    else if (r.name === "bind" && Dn(r.arg, "name")) {
      if (r.exp)
        n = r.exp;
      else if (r.arg && r.arg.type === 4) {
        const l = Se(r.arg.content);
        n = r.exp = ce(l, !1, r.arg.loc);
      }
    } else
      r.name === "bind" && r.arg && bt(r.arg) && (r.arg.content = Se(r.arg.content)), o.push(r);
  }
  if (o.length > 0) {
    const { props: i, directives: r } = yf(
      e,
      t,
      o,
      !1,
      !1
    );
    s = i, r.length && t.onError(
      we(
        36,
        r[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: s
  };
}
const bf = (e, t, n, s) => {
  const { loc: o, modifiers: i, arg: r } = e;
  !e.exp && !i.length && n.onError(we(35, o));
  let l;
  if (r.type === 4)
    if (r.isStatic) {
      let u = r.content;
      K.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(we(51, r.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const p = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Qt(Se(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = ce(p, !0, r.loc);
    } else
      l = jt([
        `${n.helperString(Kr)}(`,
        r,
        ")"
      ]);
  else
    l = r, l.children.unshift(`${n.helperString(Kr)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = ef(a), p = !(u || p0(a)), m = a.content.includes(";");
    K.NODE_ENV !== "production" && Gn(
      a,
      n,
      !1,
      m
    ), (p || c && u) && (a = jt([
      `${p ? "$event" : "(...args)"} => ${m ? "{" : "("}`,
      a,
      m ? "}" : ")"
    ]));
  }
  let d = {
    props: [
      Ie(
        l,
        a || ce("() => {}", !1, o)
      )
    ]
  };
  return s && (d = s(d)), c && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((u) => u.key.isHandlerKey = !0), d;
}, Nv = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, o = !1;
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        if (gr(r)) {
          o = !0;
          for (let l = i + 1; l < n.length; l++) {
            const a = n[l];
            if (gr(a))
              s || (s = n[i] = jt(
                [r],
                r.loc
              )), s.children.push(" + ", a), n.splice(l, 1), l--;
            else {
              s = void 0;
              break;
            }
          }
        }
      }
      if (!(!o || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (i) => i.type === 7 && !t.directiveTransforms[i.name]
      ) && e.tag !== "template")))
        for (let i = 0; i < n.length; i++) {
          const r = n[i];
          if (gr(r) || r.type === 8) {
            const l = [];
            (r.type !== 2 || r.content !== " ") && l.push(r), !t.ssr && xt(r, t) === 0 && l.push(
              1 + (K.NODE_ENV !== "production" ? ` /* ${Xs[1]} */` : "")
            ), n[i] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: je(
                t.helper(Pl),
                l
              )
            };
          }
        }
    };
}, yc = /* @__PURE__ */ new WeakSet(), wv = (e, t) => {
  if (e.type === 1 && yt(e, "once", !0))
    return yc.has(e) || t.inVOnce || t.inSSR ? void 0 : (yc.add(e), t.inVOnce = !0, t.helper(_i), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, _f = (e, t, n) => {
  const { exp: s, arg: o } = e;
  if (!s)
    return n.onError(
      we(41, e.loc)
    ), jo();
  const i = s.loc.source.trim(), r = s.type === 4 ? s.content : i, l = n.bindingMetadata[i];
  if (l === "props" || l === "props-aliased")
    return n.onError(we(44, s.loc)), jo();
  if (!r.trim() || !ef(s))
    return n.onError(
      we(42, s.loc)
    ), jo();
  const a = o || ce("modelValue", !0), c = o ? bt(o) ? `onUpdate:${Se(o.content)}` : jt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let d;
  const u = n.isTS ? "($event: any)" : "$event";
  d = jt([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Ie(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Ie(c, d)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((y) => y.content).map((y) => (Jl(y) ? y : JSON.stringify(y)) + ": true").join(", "), E = o ? bt(o) ? `${o.content}Modifiers` : jt([o, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Ie(
        E,
        ce(
          `{ ${m} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return jo(p);
};
function jo(e = []) {
  return { props: e };
}
const xv = /[\w).+\-_$\]]/, Sv = (e, t) => {
  In("COMPILER_FILTERS", t) && (e.type === 5 ? Ci(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Ci(n.exp, t);
  }));
};
function Ci(e, t) {
  if (e.type === 4)
    bc(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? bc(s, t) : s.type === 8 ? Ci(e, t) : s.type === 5 && Ci(s.content, t));
    }
}
function bc(e, t) {
  const n = e.content;
  let s = !1, o = !1, i = !1, r = !1, l = 0, a = 0, c = 0, d = 0, u, p, m, E, y = [];
  for (m = 0; m < n.length; m++)
    if (p = u, u = n.charCodeAt(m), s)
      u === 39 && p !== 92 && (s = !1);
    else if (o)
      u === 34 && p !== 92 && (o = !1);
    else if (i)
      u === 96 && p !== 92 && (i = !1);
    else if (r)
      u === 47 && p !== 92 && (r = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !c)
      E === void 0 ? (d = m + 1, E = n.slice(0, m).trim()) : T();
    else {
      switch (u) {
        case 34:
          o = !0;
          break;
        case 39:
          s = !0;
          break;
        case 96:
          i = !0;
          break;
        case 40:
          c++;
          break;
        case 41:
          c--;
          break;
        case 91:
          a++;
          break;
        case 93:
          a--;
          break;
        case 123:
          l++;
          break;
        case 125:
          l--;
          break;
      }
      if (u === 47) {
        let C = m - 1, v;
        for (; C >= 0 && (v = n.charAt(C), v === " "); C--)
          ;
        (!v || !xv.test(v)) && (r = !0);
      }
    }
  E === void 0 ? E = n.slice(0, m).trim() : d !== 0 && T();
  function T() {
    y.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (y.length) {
    for (K.NODE_ENV !== "production" && Ni(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < y.length; m++)
      E = Cv(E, y[m], t);
    e.content = E, e.ast = void 0;
  }
}
function Cv(e, t, n) {
  n.helper(Bl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${bo(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), i = t.slice(s + 1);
    return n.filters.add(o), `${bo(o, "filter")}(${e}${i !== ")" ? "," + i : i}`;
  }
}
const _c = /* @__PURE__ */ new WeakSet(), kv = (e, t) => {
  if (e.type === 1) {
    const n = yt(e, "memo");
    return !n || _c.has(e) ? void 0 : (_c.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Gl(s, t), e.codegenNode = je(t.helper(Wl), [
        n.exp,
        As(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Ov(e) {
  return [
    [
      wv,
      ov,
      kv,
      cv,
      Sv,
      ...K.NODE_ENV !== "production" ? [sv] : [],
      _v,
      mv,
      fv,
      Nv
    ],
    {
      on: bf,
      bind: av,
      model: _f
    }
  ];
}
function Tv(e, t = {}) {
  const n = t.onError || Yl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(we(47)) : s && n(we(48));
  const o = !1;
  t.cacheHandlers && n(we(49)), t.scopeId && !s && n(we(50));
  const i = de({}, t, {
    prefixIdentifiers: o
  }), r = re(e) ? V0(e, i) : e, [l, a] = Ov();
  return M0(
    r,
    de({}, i, {
      nodeTransforms: [
        ...l,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: de(
        {},
        a,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), F0(r, i);
}
const Dv = () => ({ props: [] });
var st = {};
const Ef = Symbol(st.NODE_ENV !== "production" ? "vModelRadio" : ""), Nf = Symbol(
  st.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), wf = Symbol(st.NODE_ENV !== "production" ? "vModelText" : ""), xf = Symbol(
  st.NODE_ENV !== "production" ? "vModelSelect" : ""
), el = Symbol(
  st.NODE_ENV !== "production" ? "vModelDynamic" : ""
), Sf = Symbol(
  st.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Cf = Symbol(
  st.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), kf = Symbol(st.NODE_ENV !== "production" ? "vShow" : ""), Zl = Symbol(st.NODE_ENV !== "production" ? "Transition" : ""), Of = Symbol(
  st.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
Zg({
  [Ef]: "vModelRadio",
  [Nf]: "vModelCheckbox",
  [wf]: "vModelText",
  [xf]: "vModelSelect",
  [el]: "vModelDynamic",
  [Sf]: "withModifiers",
  [Cf]: "withKeys",
  [kf]: "vShow",
  [Zl]: "Transition",
  [Of]: "TransitionGroup"
});
let ps;
function Vv(e, t = !1) {
  return ps || (ps = document.createElement("div")), t ? (ps.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, ps.children[0].getAttribute("foo")) : (ps.innerHTML = e, ps.textContent);
}
const $v = {
  parseMode: "html",
  isVoidTag: tp,
  isNativeTag: (e) => Vc(e) || $c(e) || Ac(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Vv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return Zl;
    if (e === "TransitionGroup" || e === "transition-group")
      return Of;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let s = t ? t.ns : n;
    if (t && s === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (o) => o.type === 6 && o.name === "encoding" && o.value != null && (o.value.content === "text/html" || o.value.content === "application/xhtml+xml")
        ) && (s = 0);
      } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (s = 0);
    else t && s === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (s = 0);
    if (s === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return s;
  }
}, Av = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ce("style", !0, t.loc),
      exp: Iv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Iv = (e, t) => {
  const n = Dc(e);
  return ce(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Bt(e, t) {
  return we(
    e,
    t,
    st.NODE_ENV !== "production" ? Mv : void 0
  );
}
const Mv = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, Pv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Bt(53, o)
  ), t.children.length && (n.onError(
    Bt(54, o)
  ), t.children.length = 0), {
    props: [
      Ie(
        ce("innerHTML", !0, o),
        s || ce("", !0)
      )
    ]
  };
}, Rv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Bt(55, o)
  ), t.children.length && (n.onError(
    Bt(56, o)
  ), t.children.length = 0), {
    props: [
      Ie(
        ce("textContent", !0),
        s ? xt(s, n) > 0 ? s : je(
          n.helperString(Yi),
          [s],
          o
        ) : ce("", !0)
      )
    ]
  };
}, Lv = (e, t, n) => {
  const s = _f(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    Bt(
      58,
      e.arg.loc
    )
  );
  function o() {
    const l = yt(t, "bind");
    l && Dn(l.arg, "value") && n.onError(
      Bt(
        60,
        l.loc
      )
    );
  }
  const { tag: i } = t, r = n.isCustomElement(i);
  if (i === "input" || i === "textarea" || i === "select" || r) {
    let l = wf, a = !1;
    if (i === "input" || r) {
      const c = yo(t, "type");
      if (c) {
        if (c.type === 7)
          l = el;
        else if (c.value)
          switch (c.value.content) {
            case "radio":
              l = Ef;
              break;
            case "checkbox":
              l = Nf;
              break;
            case "file":
              a = !0, n.onError(
                Bt(
                  59,
                  e.loc
                )
              );
              break;
            default:
              st.NODE_ENV !== "production" && o();
              break;
          }
      } else h0(t) ? l = el : st.NODE_ENV !== "production" && o();
    } else i === "select" ? l = xf : st.NODE_ENV !== "production" && o();
    a || (s.needRuntime = n.helper(l));
  } else
    n.onError(
      Bt(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), s;
}, Fv = /* @__PURE__ */ qe("passive,once,capture"), Bv = /* @__PURE__ */ qe(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Hv = /* @__PURE__ */ qe("left,right"), Tf = /* @__PURE__ */ qe("onkeyup,onkeydown,onkeypress"), jv = (e, t, n, s) => {
  const o = [], i = [], r = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ps(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Fv(a) ? r.push(a) : Hv(a) ? bt(e) ? Tf(e.content.toLowerCase()) ? o.push(a) : i.push(a) : (o.push(a), i.push(a)) : Bv(a) ? i.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: i,
    eventOptionModifiers: r
  };
}, Ec = (e, t) => bt(e) && e.content.toLowerCase() === "onclick" ? ce(t, !0) : e.type !== 4 ? jt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Uv = (e, t, n) => bf(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: i, value: r } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = jv(i, o, n, e.loc);
  if (a.includes("right") && (i = Ec(i, "onContextmenu")), a.includes("middle") && (i = Ec(i, "onMouseup")), a.length && (r = je(n.helper(Sf), [
    r,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!bt(i) || Tf(i.content.toLowerCase())) && (r = je(n.helper(Cf), [
    r,
    JSON.stringify(l)
  ])), c.length) {
    const d = c.map(on).join("");
    i = bt(i) ? ce(`${i.content}${d}`, !0) : jt(["(", i, `) + "${d}"`]);
  }
  return {
    props: [Ie(i, r)]
  };
}), qv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Bt(61, o)
  ), {
    props: [],
    needRuntime: n.helper(kf)
  };
}, zv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === Zl)
    return () => {
      if (!e.children.length)
        return;
      Df(e) && t.onError(
        Bt(
          62,
          {
            start: e.children[0].loc.start,
            end: e.children[e.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const s = e.children[0];
      if (s.type === 1)
        for (const o of s.props)
          o.type === 7 && o.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function Df(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Df);
}
const Kv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (st.NODE_ENV !== "production" && t.onError(
    Bt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Wv(e, t) {
  return e === "template" ? !0 : e in Nc ? Nc[e].has(t) : t in wc ? wc[t].has(e) : !(e in xc && xc[e].has(t) || t in Sc && Sc[t].has(e));
}
const hs = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), zn = /* @__PURE__ */ new Set([]), Nc = {
  head: /* @__PURE__ */ new Set([
    "base",
    "basefront",
    "bgsound",
    "link",
    "meta",
    "title",
    "noscript",
    "noframes",
    "style",
    "script",
    "template"
  ]),
  optgroup: /* @__PURE__ */ new Set(["option"]),
  select: /* @__PURE__ */ new Set(["optgroup", "option", "hr"]),
  // table
  table: /* @__PURE__ */ new Set(["caption", "colgroup", "tbody", "tfoot", "thead"]),
  tr: /* @__PURE__ */ new Set(["td", "th"]),
  colgroup: /* @__PURE__ */ new Set(["col"]),
  tbody: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["tr"]),
  tfoot: /* @__PURE__ */ new Set(["tr"]),
  // these elements can not have any children elements
  script: zn,
  iframe: zn,
  option: zn,
  textarea: zn,
  style: zn,
  title: zn
}, wc = {
  // sections
  html: zn,
  body: /* @__PURE__ */ new Set(["html"]),
  head: /* @__PURE__ */ new Set(["html"]),
  // table
  td: /* @__PURE__ */ new Set(["tr"]),
  colgroup: /* @__PURE__ */ new Set(["table"]),
  caption: /* @__PURE__ */ new Set(["table"]),
  tbody: /* @__PURE__ */ new Set(["table"]),
  tfoot: /* @__PURE__ */ new Set(["table"]),
  col: /* @__PURE__ */ new Set(["colgroup"]),
  th: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["table"]),
  tr: /* @__PURE__ */ new Set(["tbody", "thead", "tfoot"]),
  // data list
  dd: /* @__PURE__ */ new Set(["dl", "div"]),
  dt: /* @__PURE__ */ new Set(["dl", "div"]),
  // other
  figcaption: /* @__PURE__ */ new Set(["figure"]),
  // li: new Set(["ul", "ol"]),
  summary: /* @__PURE__ */ new Set(["details"]),
  area: /* @__PURE__ */ new Set(["map"])
}, xc = {
  p: /* @__PURE__ */ new Set([
    "address",
    "article",
    "aside",
    "blockquote",
    "center",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "fieldset",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "menu",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul"
  ]),
  svg: /* @__PURE__ */ new Set([
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "li",
    "menu",
    "meta",
    "ol",
    "p",
    "pre",
    "ruby",
    "s",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "table",
    "u",
    "ul",
    "var"
  ])
}, Sc = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: hs,
  h2: hs,
  h3: hs,
  h4: hs,
  h5: hs,
  h6: hs
}, Gv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Wv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Yv = [
  Av,
  ...st.NODE_ENV !== "production" ? [zv, Gv] : []
], Jv = {
  cloak: Dv,
  html: Pv,
  text: Rv,
  model: Lv,
  // override compiler-core
  on: Uv,
  // override compiler-core
  show: qv
};
function Xv(e, t = {}) {
  return Tv(
    e,
    de({}, $v, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Kv,
        ...Yv,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: de(
        {},
        Jv,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Js = {};
function Qv() {
  _d();
}
Js.NODE_ENV !== "production" && Qv();
const Cc = /* @__PURE__ */ Object.create(null);
function Zv(e, t) {
  if (!re(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Js.NODE_ENV !== "production" && $e("invalid template option: ", e), Oe;
  const n = Hf(e, t), s = Cc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Js.NODE_ENV !== "production" && !a && $e(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const o = de(
    {
      hoistStatic: !0,
      onError: Js.NODE_ENV !== "production" ? r : void 0,
      onWarn: Js.NODE_ENV !== "production" ? (a) => r(a, !0) : Oe
    },
    t
  );
  !o.isCustomElement && typeof customElements < "u" && (o.isCustomElement = (a) => !!customElements.get(a));
  const { code: i } = Xv(e, o);
  function r(a, c = !1) {
    const d = c ? a.message : `Template compilation error: ${a.message}`, u = a.loc && zf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    $e(u ? `${d}
${u}` : d);
  }
  const l = new Function("Vue", i)(Wg);
  return l._rc = !0, Cc[n] = l;
}
gd(Zv);
const ot = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ey = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ty = {
  __name: "Button",
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary", "outline", "ghost", "link"].includes(e)
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    fullWidth: {
      type: Boolean,
      default: !1
    },
    href: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: String,
      default: "default",
      validator: (e) => ["default", "full", "none"].includes(e)
    },
    // Global button settings can be passed as props
    buttonRadius: {
      type: [String, Number],
      default: null
    },
    primaryBg: {
      type: String,
      default: null
    },
    primaryBgHover: {
      type: String,
      default: null
    },
    primaryText: {
      type: String,
      default: null
    },
    secondaryBg: {
      type: String,
      default: null
    },
    secondaryBgHover: {
      type: String,
      default: null
    },
    secondaryText: {
      type: String,
      default: null
    },
    secondaryBorder: {
      type: String,
      default: null
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = z(!1), i = oe(() => n.href ? "a" : "button"), r = oe(() => {
      const c = {};
      if (n.rounded === "full" ? c.borderRadius = "9999px" : n.rounded === "none" ? c.borderRadius = "0" : n.buttonRadius !== null ? c.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius : c.borderRadius = "var(--button-radius, 6px)", n.variant === "primary") {
        const d = o.value && n.primaryBgHover ? n.primaryBgHover : n.primaryBg;
        d && (c.backgroundColor = d), n.primaryText && (c.color = n.primaryText);
      } else if (n.variant === "secondary") {
        const d = o.value && n.secondaryBgHover ? n.secondaryBgHover : n.secondaryBg;
        d && (c.backgroundColor = d), n.secondaryText && (c.color = n.secondaryText), n.secondaryBorder && (c.borderColor = n.secondaryBorder);
      }
      return c;
    }), l = oe(() => {
      const c = [
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      ];
      n.fullWidth && c.push("w-full");
      const d = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
      };
      return c.push(d[n.size]), n.variant === "primary" ? c.push(
        "bg-[var(--button-primary-bg,#dc2626)]",
        "hover:bg-[var(--button-primary-bg-hover,#b91c1c)]",
        "text-[var(--button-primary-text,white)]",
        "border border-transparent",
        "shadow-sm",
        "focus:ring-[var(--button-primary-bg,#dc2626)]"
      ) : n.variant === "secondary" ? c.push(
        "bg-[var(--button-secondary-bg,white)]",
        "hover:bg-[var(--button-secondary-bg-hover,#f9fafb)]",
        "text-[var(--button-secondary-text,#374151)]",
        "border border-[var(--button-secondary-border,#d1d5db)]",
        "shadow-sm",
        "focus:ring-[var(--button-primary-bg,#dc2626)]"
      ) : n.variant === "outline" ? c.push(
        "bg-transparent",
        "hover:bg-gray-50",
        "text-gray-700",
        "border-2 border-gray-300",
        "hover:border-gray-400",
        "focus:ring-gray-500"
      ) : n.variant === "ghost" ? c.push(
        "bg-transparent",
        "hover:bg-gray-100",
        "text-gray-700",
        "hover:text-gray-900",
        "focus:ring-gray-500"
      ) : n.variant === "link" && c.push(
        "bg-transparent",
        "text-[var(--button-primary-bg,#dc2626)]",
        "hover:text-[var(--button-primary-bg-hover,#b91c1c)]",
        "underline",
        "hover:no-underline",
        "p-0",
        "focus:ring-0"
      ), c.join(" ");
    }), a = (c) => {
      !n.disabled && !n.loading && s("click", c);
    };
    return (c, d) => (k(), ut(Nl(i.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ge(l.value),
      style: _t(r.value),
      onClick: a,
      onMouseenter: d[0] || (d[0] = (u) => o.value = !0),
      onMouseleave: d[1] || (d[1] = (u) => o.value = !1)
    }, {
      default: He(() => [
        e.loading ? (k(), D("svg", ey, d[2] || (d[2] = [
          h("circle", {
            class: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "4"
          }, null, -1),
          h("path", {
            class: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }, null, -1)
        ]))) : Y("", !0),
        Bn(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, Mn = /* @__PURE__ */ ot(ty, [["__scopeId", "data-v-023a6e93"]]), ny = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, sy = { class: "absolute inset-0 overflow-hidden" }, oy = { class: "fixed inset-y-0 right-0 max-w-full flex" }, iy = {
  key: 0,
  class: "w-screen max-w-md transform transition-transform duration-300 ease-out"
}, ry = { class: "h-full flex flex-col bg-white shadow-xl" }, ly = { class: "flex-1 overflow-y-auto px-4 sm:px-6" }, ay = {
  key: 0,
  class: "text-center py-12"
}, cy = {
  key: 1,
  class: "flow-root"
}, uy = {
  role: "list",
  class: "-my-6 divide-y divide-gray-200"
}, dy = { class: "flex-shrink-0 w-24 h-24 rounded-md overflow-hidden" }, fy = ["src", "alt"], py = { class: "ml-4 flex-1 flex flex-col" }, hy = { class: "flex justify-between text-base font-medium text-gray-900" }, my = ["href"], gy = { class: "ml-4" }, vy = {
  key: 0,
  class: "mt-1 text-sm text-gray-500"
}, yy = { class: "flex-1 flex items-end justify-between text-sm" }, by = ["value", "max", "onUpdate"], _y = ["onClick"], Ey = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6"
}, Ny = { class: "flex justify-between text-base font-medium text-gray-900" }, wy = { class: "mt-6" }, xy = { class: "mt-6" }, Sy = {
  __name: "CartDrawer",
  setup(e) {
    const t = z(!1), n = z([]), s = z(0), o = oe(() => {
      var u;
      return ((u = window.routes) == null ? void 0 : u.cart_url) || "/cart";
    }), i = (u) => {
      var p, m;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((m = (p = window.Shopify) == null ? void 0 : p.currency) == null ? void 0 : m.active) || "USD"
      }).format(u / 100);
    }, r = () => {
      t.value = !0, document.body.style.overflow = "hidden", a();
    }, l = () => {
      t.value = !1, document.body.style.overflow = "";
    }, a = async () => {
      const u = await window.OrionCart.fetchCart();
      n.value = u.items, s.value = u.total_price;
    }, c = async (u, p) => {
      await window.OrionCart.updateItem(u, p), a();
    }, d = async (u) => {
      await window.OrionCart.removeItem(u), a();
    };
    return Ye(() => {
      document.addEventListener("cart:open", r), document.addEventListener("cart:close", l);
      const u = (p) => {
        p.key === "Escape" && t.value && l();
      };
      document.addEventListener("keydown", u), It(() => {
        document.removeEventListener("cart:open", r), document.removeEventListener("cart:close", l), document.removeEventListener("keydown", u);
      });
    }), (u, p) => (k(), ut(cs, { to: "body" }, [
      pe(en, { name: "drawer" }, {
        default: He(() => [
          t.value ? (k(), D("div", ny, [
            h("div", sy, [
              pe(en, { name: "fade" }, {
                default: He(() => [
                  t.value ? (k(), D("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: l
                  })) : Y("", !0)
                ]),
                _: 1
              }),
              h("div", oy, [
                pe(en, { name: "slide" }, {
                  default: He(() => [
                    t.value ? (k(), D("div", iy, [
                      h("div", ry, [
                        h("div", { class: "flex items-start justify-between px-4 py-6 sm:px-6" }, [
                          p[1] || (p[1] = h("h2", { class: "text-lg font-medium text-gray-900" }, "Shopping Cart", -1)),
                          h("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                            onClick: l
                          }, p[0] || (p[0] = [
                            h("span", { class: "sr-only" }, "Close cart", -1),
                            h("svg", {
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              h("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ]))
                        ]),
                        h("div", ly, [
                          n.value.length === 0 ? (k(), D("div", ay, [
                            p[3] || (p[3] = h("svg", {
                              class: "mx-auto h-12 w-12 text-gray-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              h("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              })
                            ], -1)),
                            p[4] || (p[4] = h("h3", { class: "mt-2 text-sm font-medium text-gray-900" }, "Your cart is empty", -1)),
                            p[5] || (p[5] = h("p", { class: "mt-1 text-sm text-gray-500" }, "Start shopping to add items to your cart!", -1)),
                            pe(Mn, {
                              onClick: l,
                              variant: "secondary",
                              "full-width": !0,
                              class: "mt-6"
                            }, {
                              default: He(() => p[2] || (p[2] = [
                                Me(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (k(), D("div", cy, [
                            h("ul", uy, [
                              (k(!0), D(ue, null, Ae(n.value, (m) => {
                                var E;
                                return k(), D("li", {
                                  key: m.key,
                                  class: "py-6 flex"
                                }, [
                                  h("div", dy, [
                                    h("img", {
                                      src: m.image,
                                      alt: m.product_title,
                                      class: "w-full h-full object-center object-cover"
                                    }, null, 8, fy)
                                  ]),
                                  h("div", py, [
                                    h("div", null, [
                                      h("div", hy, [
                                        h("h3", null, [
                                          h("a", {
                                            href: m.url
                                          }, X(m.product_title), 9, my)
                                        ]),
                                        h("p", gy, X(i(m.line_price)), 1)
                                      ]),
                                      m.variant_title ? (k(), D("p", vy, X(m.variant_title), 1)) : Y("", !0)
                                    ]),
                                    h("div", yy, [
                                      h("quantity-selector", {
                                        value: m.quantity,
                                        min: 0,
                                        max: ((E = m.variant) == null ? void 0 : E.inventory_quantity) || 999,
                                        onUpdate: (y) => c(m.key, y)
                                      }, null, 40, by),
                                      h("button", {
                                        type: "button",
                                        class: "font-medium text-primary-600 hover:text-primary-500",
                                        onClick: (y) => d(m.key)
                                      }, " Remove ", 8, _y)
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]))
                        ]),
                        n.value.length > 0 ? (k(), D("div", Ey, [
                          h("div", Ny, [
                            p[6] || (p[6] = h("p", null, "Subtotal", -1)),
                            h("p", null, X(i(s.value)), 1)
                          ]),
                          p[9] || (p[9] = h("p", { class: "mt-0.5 text-sm text-gray-500" }, "Shipping and taxes calculated at checkout.", -1)),
                          h("div", wy, [
                            pe(Mn, {
                              href: o.value,
                              variant: "primary",
                              "full-width": !0
                            }, {
                              default: He(() => p[7] || (p[7] = [
                                Me(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [7]
                            }, 8, ["href"])
                          ]),
                          h("div", xy, [
                            pe(Mn, {
                              onClick: l,
                              variant: "secondary",
                              "full-width": !0
                            }, {
                              default: He(() => p[8] || (p[8] = [
                                Me(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [8]
                            })
                          ])
                        ])) : Y("", !0)
                      ])
                    ])) : Y("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : Y("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Vf = /* @__PURE__ */ ot(Sy, [["__scopeId", "data-v-97af0777"]]), Cy = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, ky = { class: "absolute inset-0 overflow-hidden" }, Oy = { class: "fixed inset-y-0 left-0 max-w-full flex" }, Ty = {
  key: 0,
  class: "w-screen max-w-sm transform transition-transform duration-300 ease-out"
}, Dy = { class: "h-full flex flex-col bg-white shadow-xl" }, Vy = { class: "flex-1 overflow-y-auto" }, $y = { class: "px-4 py-4" }, Ay = { class: "space-y-1" }, Iy = { key: 0 }, My = { key: 0 }, Py = ["onClick"], Ry = {
  key: 0,
  class: "mt-1 space-y-1"
}, Ly = { key: 0 }, Fy = ["onClick"], By = {
  key: 0,
  class: "mt-1 space-y-1"
}, Hy = ["href"], jy = ["href"], Uy = ["href"], qy = { class: "px-4 py-4 border-t" }, zy = { class: "space-y-1" }, Ky = ["href"], Wy = {
  key: 0,
  class: "px-4 py-4 border-t"
}, Gy = {
  __name: "MobileMenu",
  props: {
    menuItems: {
      type: Array,
      default: () => []
    },
    customerUrl: {
      type: String,
      default: null
    },
    showLocalization: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: t }) {
    const n = e, s = oe(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = z(!1), i = z([]), r = () => {
      o.value = !0, document.body.style.overflow = "hidden";
    }, l = () => {
      o.value = !1, document.body.style.overflow = "";
    }, a = (c) => {
      const d = i.value.indexOf(c);
      d > -1 ? i.value.splice(d, 1) : i.value.push(c);
    };
    return t({
      openMenu: r,
      closeMenu: l
    }), Ye(() => {
      document.addEventListener("mobile-menu:open", r), document.addEventListener("mobile-menu:close", l);
      const c = (d) => {
        d.key === "Escape" && o.value && l();
      };
      document.addEventListener("keydown", c), It(() => {
        document.removeEventListener("mobile-menu:open", r), document.removeEventListener("mobile-menu:close", l), document.removeEventListener("keydown", c);
      });
    }), (c, d) => (k(), D("div", null, [
      (k(), ut(cs, { to: "body" }, [
        pe(en, { name: "menu" }, {
          default: He(() => [
            o.value ? (k(), D("div", Cy, [
              h("div", ky, [
                pe(en, { name: "fade" }, {
                  default: He(() => [
                    o.value ? (k(), D("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: l
                    })) : Y("", !0)
                  ]),
                  _: 1
                }),
                h("div", Oy, [
                  pe(en, { name: "slide-left" }, {
                    default: He(() => [
                      o.value ? (k(), D("div", Ty, [
                        h("div", Dy, [
                          h("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            d[1] || (d[1] = h("h2", { class: "text-lg font-medium text-gray-900" }, "Menu", -1)),
                            h("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: l
                            }, d[0] || (d[0] = [
                              h("span", { class: "sr-only" }, "Close menu", -1),
                              h("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                h("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          h("div", Vy, [
                            h("nav", $y, [
                              h("ul", Ay, [
                                s.value.length === 0 ? (k(), D("li", Iy, d[2] || (d[2] = [
                                  h("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : Y("", !0),
                                (k(!0), D(ue, null, Ae(s.value, (u) => (k(), D("li", {
                                  key: u.id || u.title
                                }, [
                                  u.links && u.links.length ? (k(), D("div", My, [
                                    h("button", {
                                      onClick: (p) => a(u.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      h("span", null, X(u.title), 1),
                                      (k(), D("svg", {
                                        class: Ge(["h-5 w-5 transition-transform duration-200", { "rotate-180": i.value.includes(u.title) }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, d[3] || (d[3] = [
                                        h("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, Py),
                                    pe(en, { name: "submenu" }, {
                                      default: He(() => [
                                        i.value.includes(u.title) ? (k(), D("ul", Ry, [
                                          (k(!0), D(ue, null, Ae(u.links, (p) => (k(), D("li", {
                                            key: p.id || p.title
                                          }, [
                                            p.links && p.links.length ? (k(), D("div", Ly, [
                                              h("button", {
                                                onClick: (m) => a(`${u.title}-${p.title}`),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                h("span", null, X(p.title), 1),
                                                (k(), D("svg", {
                                                  class: Ge(["h-4 w-4 transition-transform duration-200", { "rotate-180": i.value.includes(`${u.title}-${p.title}`) }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, d[4] || (d[4] = [
                                                  h("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, Fy),
                                              pe(en, { name: "submenu" }, {
                                                default: He(() => [
                                                  i.value.includes(`${u.title}-${p.title}`) ? (k(), D("ul", By, [
                                                    (k(!0), D(ue, null, Ae(p.links, (m) => (k(), D("li", {
                                                      key: m.id || m.title
                                                    }, [
                                                      h("a", {
                                                        href: m.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: l
                                                      }, X(m.title), 9, Hy)
                                                    ]))), 128))
                                                  ])) : Y("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (k(), D("a", {
                                              key: 1,
                                              href: p.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: l
                                            }, X(p.title), 9, jy))
                                          ]))), 128))
                                        ])) : Y("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (k(), D("a", {
                                    key: 1,
                                    href: u.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: l
                                  }, X(u.title), 9, Uy))
                                ]))), 128))
                              ])
                            ]),
                            h("div", qy, [
                              h("div", zy, [
                                e.customerUrl ? (k(), D("a", {
                                  key: 0,
                                  href: e.customerUrl,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, d[5] || (d[5] = [
                                  h("span", { class: "flex items-center" }, [
                                    h("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      h("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      })
                                    ]),
                                    Me(" Account ")
                                  ], -1)
                                ]), 8, Ky)) : Y("", !0),
                                d[6] || (d[6] = h("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, [
                                  h("span", { class: "flex items-center" }, [
                                    h("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      h("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                      })
                                    ]),
                                    Me(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            e.showLocalization ? (k(), D("div", Wy, [
                              Bn(c.$slots, "localization", {}, void 0, !0)
                            ])) : Y("", !0)
                          ])
                        ])
                      ])) : Y("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : Y("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, $f = /* @__PURE__ */ ot(Gy, [["__scopeId", "data-v-f404e536"]]), Yy = { class: "variant-picker" }, Jy = { class: "text-sm font-medium text-gray-900 mb-3" }, Xy = { class: "font-normal text-gray-600" }, Qy = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, Zy = ["title", "aria-label", "disabled", "onClick"], e1 = { class: "sr-only" }, t1 = {
  key: 0,
  class: "color-swatch__checkmark"
}, n1 = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, s1 = ["aria-label", "disabled", "onClick"], o1 = {
  key: 0,
  class: "mt-6 flex items-center justify-between"
}, i1 = { class: "flex items-center gap-4" }, r1 = { class: "text-2xl font-bold text-gray-900" }, l1 = {
  key: 0,
  class: "text-lg text-gray-500 line-through"
}, a1 = {
  key: 0,
  class: "text-sm text-green-600 font-medium"
}, c1 = {
  key: 1,
  class: "text-sm text-red-600 font-medium"
}, u1 = {
  __name: "ProductVariantPicker",
  props: {
    product: {
      type: Object,
      required: !0
    },
    selectedVariantId: {
      type: [String, Number],
      default: null
    }
  },
  emits: ["variant-change"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = z({}), i = z(null), r = oe(() => n.product.options || []), l = oe(() => n.product.variants || []);
    Ye(() => {
      if (n.selectedVariantId) {
        const T = l.value.find((C) => C.id == n.selectedVariantId);
        T && a(T);
      } else if (l.value.length > 0) {
        const T = l.value.find((C) => C.available) || l.value[0];
        a(T);
      }
    });
    const a = (T) => {
      i.value = T, r.value.forEach((C, v) => {
        o.value[C.name] = T[`option${v + 1}`];
      }), s("variant-change", T);
    }, c = (T, C) => {
      o.value[T] = C;
      const v = l.value.find((f) => r.value.every((w, b) => {
        const V = o.value[w.name];
        return f[`option${b + 1}`] === V;
      }));
      v && (i.value = v, s("variant-change", v));
    }, d = (T) => o.value[T] || "", u = (T, C) => o.value[T] === C, p = (T, C) => {
      const v = r.value.findIndex((f) => f.name === T);
      return l.value.some((f) => {
        const w = f[`option${v + 1}`] === C, b = r.value.every((V, P) => {
          if (V.name === T) return !0;
          const S = o.value[V.name];
          return S ? f[`option${P + 1}`] === S : !0;
        });
        return w && b && f.available;
      });
    }, m = (T) => T.toLowerCase().includes("color") || T.toLowerCase().includes("colour"), E = (T) => ({
      black: "#000000",
      white: "#FFFFFF",
      red: "#EF4444",
      blue: "#3B82F6",
      green: "#10B981",
      yellow: "#F59E0B",
      purple: "#8B5CF6",
      pink: "#EC4899",
      gray: "#6B7280",
      grey: "#6B7280",
      brown: "#92400E",
      navy: "#1E3A8A",
      beige: "#D6D3D1",
      orange: "#F97316"
    })[T.toLowerCase()] || "#E5E7EB", y = (T) => {
      var C, v;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((v = (C = window.Shopify) == null ? void 0 : C.currency) == null ? void 0 : v.active) || "USD"
      }).format(T / 100);
    };
    return (T, C) => (k(), D("div", Yy, [
      (k(!0), D(ue, null, Ae(r.value, (v) => (k(), D("div", {
        key: v.name,
        class: "variant-option mb-6"
      }, [
        h("h3", Jy, [
          Me(X(v.name) + ": ", 1),
          h("span", Xy, X(d(v.name)), 1)
        ]),
        m(v.name) ? (k(), D("div", Qy, [
          (k(!0), D(ue, null, Ae(v.values, (f) => (k(), D("button", {
            key: f,
            type: "button",
            class: Ge([
              "color-swatch",
              u(v.name, f) ? "color-swatch--selected" : "",
              p(v.name, f) ? "" : "color-swatch--unavailable"
            ]),
            style: _t({ backgroundColor: E(f) }),
            title: f,
            "aria-label": `Select ${v.name} ${f}`,
            disabled: !p(v.name, f),
            onClick: (w) => c(v.name, f)
          }, [
            h("span", e1, X(f), 1),
            u(v.name, f) ? (k(), D("span", t1, C[0] || (C[0] = [
              h("svg", {
                class: "w-4 h-4",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                h("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ]))) : Y("", !0)
          ], 14, Zy))), 128))
        ])) : (k(), D("div", n1, [
          (k(!0), D(ue, null, Ae(v.values, (f) => (k(), D("button", {
            key: f,
            type: "button",
            class: Ge([
              "variant-button",
              u(v.name, f) ? "variant-button--selected" : "",
              p(v.name, f) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${v.name} ${f}`,
            disabled: !p(v.name, f),
            onClick: (w) => c(v.name, f)
          }, X(f), 11, s1))), 128))
        ]))
      ]))), 128)),
      i.value ? (k(), D("div", o1, [
        h("div", i1, [
          h("span", r1, X(y(i.value.price)), 1),
          i.value.compare_at_price > i.value.price ? (k(), D("span", l1, X(y(i.value.compare_at_price)), 1)) : Y("", !0)
        ]),
        i.value.available ? (k(), D("div", a1, " In Stock ")) : (k(), D("div", c1, " Out of Stock "))
      ])) : Y("", !0)
    ]));
  }
}, d1 = /* @__PURE__ */ ot(u1, [["__scopeId", "data-v-6eb16bf8"]]), f1 = { class: "quantity-selector" }, p1 = ["disabled"], h1 = ["value", "min", "max"], m1 = ["disabled"], g1 = {
  __name: "QuantitySelector",
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 999
    },
    step: {
      type: Number,
      default: 1
    }
  },
  emits: ["update:modelValue", "update"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = oe({
      get: () => n.modelValue,
      set: (c) => {
        const d = Math.max(n.min, Math.min(n.max, c));
        s("update:modelValue", d), s("update", d);
      }
    }), i = () => {
      o.value > n.min && (o.value = o.value - n.step);
    }, r = () => {
      o.value < n.max && (o.value = o.value + n.step);
    }, l = (c) => {
      const d = parseInt(c.target.value) || n.min;
      o.value = d;
    }, a = (c) => {
      const d = parseInt(c.target.value) || n.min;
      o.value = d, c.target.value = o.value;
    };
    return (c, d) => (k(), D("div", f1, [
      h("button", {
        type: "button",
        class: "quantity-button quantity-button--minus",
        disabled: e.modelValue <= e.min,
        onClick: i,
        "aria-label": "Decrease quantity"
      }, d[0] || (d[0] = [
        h("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20 12H4"
          })
        ], -1)
      ]), 8, p1),
      h("input", {
        type: "number",
        class: "quantity-input",
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: l,
        onBlur: a,
        "aria-label": "Quantity"
      }, null, 40, h1),
      h("button", {
        type: "button",
        class: "quantity-button quantity-button--plus",
        disabled: e.modelValue >= e.max,
        onClick: r,
        "aria-label": "Increase quantity"
      }, d[1] || (d[1] = [
        h("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4v16m8-8H4"
          })
        ], -1)
      ]), 8, m1)
    ]));
  }
}, v1 = /* @__PURE__ */ ot(g1, [["__scopeId", "data-v-06e9d113"]]);
function y1(e) {
  return ll() ? (Lc(e), !0) : !1;
}
function ea(e) {
  return typeof e == "function" ? e() : wo(e);
}
const b1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _1 = Object.prototype.toString, E1 = (e) => _1.call(e) === "[object Object]", Eo = () => {
};
function N1(e, t) {
  function n(...s) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(i);
    });
  }
  return n;
}
function w1(...e) {
  let t = 0, n, s = !0, o = Eo, i, r, l, a, c;
  !Ve(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [r, l = !0, a = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = Eo);
  };
  return (p) => {
    const m = ea(r), E = Date.now() - t, y = () => i = p();
    return d(), m <= 0 ? (t = Date.now(), y()) : (E > m && (a || !s) ? (t = Date.now(), y()) : l && (i = new Promise((T, C) => {
      o = c ? C : T, n = setTimeout(() => {
        t = Date.now(), s = !0, T(y()), d();
      }, Math.max(0, m - E));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, i);
  };
}
function x1(e, t = 200, n = !1, s = !0, o = !1) {
  return N1(
    w1(t, n, s, o),
    e
  );
}
function S1(e) {
  var t;
  const n = ea(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Af = b1 ? window : void 0;
function br(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Af) : [t, n, s, o] = e, !t)
    return Eo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [], r = () => {
    i.forEach((d) => d()), i.length = 0;
  }, l = (d, u, p, m) => (d.addEventListener(u, p, m), () => d.removeEventListener(u, p, m)), a = tn(
    () => [S1(t), ea(o)],
    ([d, u]) => {
      if (r(), !d)
        return;
      const p = E1(u) ? { ...u } : u;
      i.push(
        ...n.flatMap((m) => s.map((E) => l(d, m, E, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), r();
  };
  return y1(c), c;
}
function C1(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: i,
    passive: r = !0,
    window: l = Af
  } = t, a = ws({ x: 0, y: 0 }), c = ws({ x: 0, y: 0 }), d = oe(() => a.x - c.x), u = oe(() => a.y - c.y), { max: p, abs: m } = Math, E = oe(() => p(m(d.value), m(u.value)) >= n), y = z(!1), T = oe(() => E.value ? m(d.value) > m(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), C = (_) => [_.touches[0].clientX, _.touches[0].clientY], v = (_, O) => {
    a.x = _, a.y = O;
  }, f = (_, O) => {
    c.x = _, c.y = O;
  };
  let w;
  const b = k1(l == null ? void 0 : l.document);
  r ? w = b ? { passive: !0 } : { capture: !1 } : w = b ? { passive: !1, capture: !0 } : { capture: !0 };
  const V = (_) => {
    y.value && (o == null || o(_, T.value)), y.value = !1;
  }, P = [
    br(e, "touchstart", (_) => {
      if (_.touches.length !== 1)
        return;
      w.capture && !w.passive && _.preventDefault();
      const [O, I] = C(_);
      v(O, I), f(O, I), i == null || i(_);
    }, w),
    br(e, "touchmove", (_) => {
      if (_.touches.length !== 1)
        return;
      const [O, I] = C(_);
      f(O, I), !y.value && E.value && (y.value = !0), y.value && (s == null || s(_));
    }, w),
    br(e, ["touchend", "touchcancel"], V, w)
  ];
  return {
    isPassiveEventSupported: b,
    isSwiping: y,
    direction: T,
    coordsStart: a,
    coordsEnd: c,
    lengthX: d,
    lengthY: u,
    stop: () => P.forEach((_) => _())
  };
}
function k1(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", Eo, n), e.removeEventListener("x", Eo), t;
}
const O1 = { class: "sticky-header-container" }, T1 = {
  __name: "StickyHeader",
  props: {
    hideOnScrollDown: {
      type: Boolean,
      default: !1
    },
    sticky: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = e, n = z(null), s = z(!1), o = z(!1), i = z(!1), r = z(!1), l = z("#ffffff"), a = z(0), c = z(0), d = oe(() => T.value ? `${c.value}px` : "0");
    let u = 0;
    const p = oe(() => {
      const v = {};
      return T.value && s.value && (v.position = "fixed", v.top = "0", v.left = "0", v.right = "0", v.zIndex = "40", o.value ? v.transform = "translateY(-100%)" : v.transform = "translateY(0)"), r.value && (a.value === 0 ? v.backgroundColor = "transparent" : T.value && s.value && (v.backgroundColor = l.value)), v.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", v;
    }), m = () => {
      var w, b, V;
      const v = (b = (w = n.value) == null ? void 0 : w.getRootNode()) == null ? void 0 : b.host;
      if (!v) return;
      v.classList.add("sticky-header-wrapper");
      const f = (V = n.value) == null ? void 0 : V.querySelector(".main-header");
      f && r.value && (a.value === 0 ? (f.style.backgroundColor = "transparent", f.style.borderBottomColor = "transparent") : T.value && s.value && (f.style.backgroundColor = l.value, f.style.borderBottomColor = "#e5e7eb"));
    }, E = x1(() => {
      if (!T.value)
        return;
      const v = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = v, s.value = v > 0, i.value = v > 10, y.value && s.value) {
        const f = v - u;
        Math.abs(f) > 5 && (f > 0 && v > c.value ? o.value = !0 : f < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(v - u) > 1 && (u = v), m();
    }, 50), y = z(t.hideOnScrollDown), T = z(t.sticky), C = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return Ye(() => {
      if (n.value) {
        const v = n.value.getRootNode().host;
        if (v) {
          v.classList.add("sticky-header-wrapper"), r.value = v.classList.contains("header-transparent");
          const f = v.getAttribute("data-hide-on-scroll-down"), w = v.getAttribute("data-sticky"), b = v.getAttribute("data-sticky-bg");
          f !== null && (y.value = f === "true"), w !== null && (T.value = w === "true"), b !== null && (l.value = b || "#ffffff"), setTimeout(C, 100), window.addEventListener("resize", C);
        }
      }
      window.addEventListener("scroll", E, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), E();
    }), It(() => {
      window.removeEventListener("scroll", E), window.removeEventListener("resize", C);
    }), (v, f) => (k(), D("div", O1, [
      T.value && s.value ? (k(), D("div", {
        key: 0,
        class: "header-placeholder",
        style: _t({ height: d.value })
      }, null, 4)) : Y("", !0),
      h("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: Ge(["sticky-header-inner", {
          "is-fixed": T.value && s.value,
          "is-hidden": o.value,
          "has-shadow": i.value,
          "is-transparent": r.value && a.value === 0
        }]),
        style: _t(p.value)
      }, [
        Bn(v.$slots, "default")
      ], 6)
    ]));
  }
}, D1 = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, V1 = { class: "main-header__wrapper" }, $1 = {
  href: "/",
  class: "main-header__logo"
}, A1 = ["src", "alt"], I1 = {
  key: 1,
  class: "text-xl font-bold"
}, M1 = { class: "main-header__nav hidden lg:flex" }, P1 = ["href"], R1 = { class: "main-header__actions" }, L1 = {
  key: 0,
  class: "cart-count"
}, F1 = { class: "search-overlay__container" }, B1 = {
  action: "/search",
  method: "get",
  class: "search-form"
}, H1 = {
  __name: "MainHeader",
  props: {
    shopName: {
      type: String,
      default: "Orion Store"
    },
    logoUrl: {
      type: String,
      default: ""
    },
    navigationLinks: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = z(null), n = z(!1), s = z(0), o = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, i = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, r = async () => {
      var a;
      n.value = !n.value, n.value && (await xo(), (a = t.value) == null || a.focus());
    }, l = () => {
      var a;
      (a = window.OrionCart) != null && a.state && (s.value = window.OrionCart.state.itemCount || 0);
    };
    return Ye(() => {
      document.addEventListener("cart:updated", l), l();
    }), It(() => {
      document.removeEventListener("cart:updated", l);
    }), (a, c) => (k(), D("div", D1, [
      h("div", V1, [
        h("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: o,
          "aria-label": "Open menu"
        }, c[0] || (c[0] = [
          h("svg", {
            class: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 6h16M4 12h16M4 18h16"
            })
          ], -1)
        ])),
        h("a", $1, [
          e.logoUrl ? (k(), D("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, A1)) : (k(), D("span", I1, X(e.shopName), 1))
        ]),
        h("nav", M1, [
          (k(!0), D(ue, null, Ae(e.navigationLinks, (d) => (k(), D("a", {
            key: d.url,
            href: d.url,
            class: "nav-link"
          }, X(d.title), 9, P1))), 128))
        ]),
        h("div", R1, [
          h("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: r,
            "aria-label": "Search"
          }, c[1] || (c[1] = [
            h("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            ], -1)
          ])),
          c[3] || (c[3] = h("a", {
            href: "/account",
            class: "action-button",
            "aria-label": "Account"
          }, [
            h("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              })
            ])
          ], -1)),
          h("button", {
            type: "button",
            class: "action-button relative",
            onClick: i,
            "aria-label": "Cart"
          }, [
            c[2] || (c[2] = h("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)),
            s.value > 0 ? (k(), D("span", L1, X(s.value), 1)) : Y("", !0)
          ])
        ])
      ]),
      (k(), ut(cs, { to: "body" }, [
        pe(en, { name: "fade" }, {
          default: He(() => [
            n.value ? (k(), D("div", {
              key: 0,
              class: "search-overlay",
              onClick: sn(r, ["self"])
            }, [
              h("div", F1, [
                h("form", B1, [
                  h("input", {
                    ref_key: "searchInput",
                    ref: t,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: Id(r, ["esc"])
                  }, null, 544),
                  c[4] || (c[4] = h("button", {
                    type: "submit",
                    class: "search-submit"
                  }, [
                    h("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      h("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ])
                  ], -1))
                ]),
                h("button", {
                  type: "button",
                  class: "search-close",
                  onClick: r,
                  "aria-label": "Close search"
                }, c[5] || (c[5] = [
                  h("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ])
            ])) : Y("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, If = /* @__PURE__ */ ot(H1, [["__scopeId", "data-v-b1f748a1"]]), j1 = { class: "site-footer" }, U1 = {
  key: 0,
  class: "newsletter-section"
}, q1 = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, z1 = { class: "newsletter-content" }, K1 = { class: "newsletter-text" }, W1 = { class: "text-xl font-semibold mb-2" }, G1 = { class: "text-gray-600" }, Y1 = ["disabled"], J1 = ["disabled"], X1 = { key: 0 }, Q1 = { key: 1 }, Z1 = { class: "footer-main" }, eb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, tb = { class: "footer-grid" }, nb = { class: "footer-column" }, sb = { class: "footer-heading" }, ob = { class: "text-gray-600 mb-4" }, ib = {
  key: 0,
  class: "social-links"
}, rb = ["href", "aria-label"], lb = { class: "footer-heading" }, ab = { class: "footer-links" }, cb = ["href"], ub = {
  key: 0,
  class: "footer-column"
}, db = { class: "contact-info" }, fb = {
  key: 0,
  class: "contact-item"
}, pb = {
  key: 1,
  class: "contact-item"
}, hb = {
  key: 2,
  class: "contact-item"
}, mb = {
  key: 0,
  class: "payment-methods"
}, gb = { class: "payment-icons" }, vb = ["src", "alt"], yb = { class: "footer-bottom" }, bb = { class: "copyright" }, _b = {
  __name: "SiteFooter",
  props: {
    companyName: {
      type: String,
      default: "Orion Store"
    },
    companyDescription: {
      type: String,
      default: "Your trusted online shopping destination"
    },
    showNewsletter: {
      type: Boolean,
      default: !0
    },
    newsletterTitle: {
      type: String,
      default: "Subscribe to our newsletter"
    },
    newsletterDescription: {
      type: String,
      default: "Get the latest updates on new products and upcoming sales"
    },
    footerColumns: {
      type: Array,
      default: () => []
    },
    socialLinks: {
      type: Array,
      default: () => []
    },
    showContact: {
      type: Boolean,
      default: !0
    },
    contactEmail: {
      type: String,
      default: ""
    },
    contactPhone: {
      type: String,
      default: ""
    },
    contactAddress: {
      type: String,
      default: ""
    },
    paymentMethods: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = z(""), n = z(!1), s = oe(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
      n.value = !0;
      try {
        const r = new FormData();
        r.append("email", t.value), (await fetch("/contact#newsletter", {
          method: "POST",
          body: r
        })).ok ? (t.value = "", alert("Thank you for subscribing!")) : alert("An error occurred. Please try again.");
      } catch (r) {
        console.error("Newsletter submission error:", r), alert("An error occurred. Please try again.");
      } finally {
        n.value = !1;
      }
    }, i = (r) => {
      const l = {
        facebook: () => Yt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Yt("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        ]),
        twitter: () => Yt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Yt("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
        ]),
        instagram: () => Yt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Yt("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" })
        ]),
        youtube: () => Yt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Yt("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
        ])
      };
      return l[r.toLowerCase()] || l.facebook;
    };
    return (r, l) => (k(), D("footer", j1, [
      e.showNewsletter ? (k(), D("div", U1, [
        h("div", q1, [
          h("div", z1, [
            h("div", K1, [
              h("h3", W1, X(e.newsletterTitle), 1),
              h("p", G1, X(e.newsletterDescription), 1)
            ]),
            h("form", {
              onSubmit: sn(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              vt(h("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, Y1), [
                [Ln, t.value]
              ]),
              h("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (k(), D("span", Q1, "Subscribing...")) : (k(), D("span", X1, "Subscribe"))
              ], 8, J1)
            ], 32)
          ])
        ])
      ])) : Y("", !0),
      h("div", Z1, [
        h("div", eb, [
          h("div", tb, [
            h("div", nb, [
              h("h4", sb, X(e.companyName), 1),
              h("p", ob, X(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (k(), D("div", ib, [
                (k(!0), D(ue, null, Ae(e.socialLinks, (a) => (k(), D("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (k(), ut(Nl(i(a.name))))
                ], 8, rb))), 128))
              ])) : Y("", !0)
            ]),
            (k(!0), D(ue, null, Ae(e.footerColumns, (a) => (k(), D("div", {
              key: a.title,
              class: "footer-column"
            }, [
              h("h4", lb, X(a.title), 1),
              h("ul", ab, [
                (k(!0), D(ue, null, Ae(a.links, (c) => (k(), D("li", {
                  key: c.title
                }, [
                  h("a", {
                    href: c.url,
                    class: "footer-link"
                  }, X(c.title), 9, cb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (k(), D("div", ub, [
              l[4] || (l[4] = h("h4", { class: "footer-heading" }, "Contact", -1)),
              h("div", db, [
                e.contactEmail ? (k(), D("p", fb, [
                  l[1] || (l[1] = h("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    })
                  ], -1)),
                  Me(" " + X(e.contactEmail), 1)
                ])) : Y("", !0),
                e.contactPhone ? (k(), D("p", pb, [
                  l[2] || (l[2] = h("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    })
                  ], -1)),
                  Me(" " + X(e.contactPhone), 1)
                ])) : Y("", !0),
                e.contactAddress ? (k(), D("p", hb, [
                  l[3] || (l[3] = h("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    })
                  ], -1)),
                  Me(" " + X(e.contactAddress), 1)
                ])) : Y("", !0)
              ])
            ])) : Y("", !0)
          ]),
          e.paymentMethods.length > 0 ? (k(), D("div", mb, [
            l[5] || (l[5] = h("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            h("div", gb, [
              (k(!0), D(ue, null, Ae(e.paymentMethods, (a) => (k(), D("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, vb))), 128))
            ])
          ])) : Y("", !0),
          h("div", yb, [
            h("p", bb, " © " + X(s.value) + " " + X(e.companyName) + ". All rights reserved. ", 1),
            l[6] || (l[6] = h("div", { class: "footer-bottom-links" }, [
              h("a", {
                href: "/pages/privacy-policy",
                class: "footer-bottom-link"
              }, "Privacy Policy"),
              h("a", {
                href: "/pages/terms-of-service",
                class: "footer-bottom-link"
              }, "Terms of Service"),
              h("a", {
                href: "/pages/refund-policy",
                class: "footer-bottom-link"
              }, "Refund Policy")
            ], -1))
          ])
        ])
      ])
    ]));
  }
}, Eb = /* @__PURE__ */ ot(_b, [["__scopeId", "data-v-799862f9"]]), Nb = { class: "product-card group relative" }, wb = { class: "relative overflow-hidden rounded-lg bg-white" }, xb = ["href"], Sb = ["src", "alt"], Cb = {
  key: 0,
  class: "absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 text-xs font-medium rounded"
}, kb = {
  key: 1,
  class: "absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
}, Ob = { class: "absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity" }, Tb = { class: "mt-4" }, Db = {
  key: 0,
  class: "mb-2"
}, Vb = { class: "flex gap-1 flex-wrap" }, $b = ["onClick", "title"], Ab = { class: "text-sm font-medium text-secondary-900 line-clamp-2" }, Ib = ["href"], Mb = { class: "mt-1 flex items-center gap-2" }, Pb = { class: "text-lg font-semibold text-secondary-900" }, Rb = {
  key: 0,
  class: "text-sm text-secondary-500 line-through"
}, Lb = {
  __name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: !0
    },
    enableQuickAdd: {
      type: Boolean,
      default: !0
    },
    enableQuickView: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["quick-add", "quick-view"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = z(""), i = z(!1), r = oe(() => {
      var w, b;
      return i.value && ((w = n.product.media) != null && w[1]) ? n.product.media[1].src : ((b = n.product.featured_media) == null ? void 0 : b.src) || "/placeholder.jpg";
    }), l = oe(() => {
      var w;
      return (w = n.product.options) == null ? void 0 : w.some(
        (b) => b.name.toLowerCase().includes("color") || b.name.toLowerCase().includes("colour")
      );
    }), a = oe(() => {
      var b;
      const w = (b = n.product.options) == null ? void 0 : b.find(
        (V) => V.name.toLowerCase().includes("color") || V.name.toLowerCase().includes("colour")
      );
      return (w == null ? void 0 : w.values) || [];
    }), c = oe(() => n.product.price || 0), d = oe(() => n.product.compare_at_price || 0), u = oe(() => n.product.available && d.value > c.value), p = oe(() => u.value ? Math.round((d.value - c.value) / d.value * 100) : 0), m = (w) => `$${(w / 100).toFixed(2)}`, E = (w) => {
      const b = {
        black: "#000000",
        white: "#FFFFFF",
        red: "#FF0000",
        blue: "#0000FF",
        green: "#008000",
        yellow: "#FFFF00",
        pink: "#FFC0CB",
        purple: "#800080",
        orange: "#FFA500",
        brown: "#A52A2A",
        gray: "#808080",
        grey: "#808080",
        navy: "#000080",
        beige: "#F5F5DC",
        cream: "#FFFDD0"
      }, V = w.toLowerCase();
      return b[V] || `#${V.replace("#", "")}`;
    }, y = () => {
      var w;
      ((w = n.product.media) == null ? void 0 : w.length) > 1 && (i.value = !0);
    }, T = () => {
      i.value = !1;
    }, C = (w) => {
      o.value = w.value;
    }, v = () => {
      s("quick-add", n.product);
    }, f = () => {
      s("quick-view", n.product);
    };
    return (w, b) => (k(), D("div", Nb, [
      h("div", wb, [
        h("a", {
          href: e.product.url || "#",
          class: "block aspect-[3/4]"
        }, [
          h("img", {
            src: r.value,
            alt: e.product.title,
            class: "h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105",
            onMouseenter: y,
            onMouseleave: T
          }, null, 40, Sb),
          u.value ? (k(), D("div", Cb, X(p.value) + "% OFF ", 1)) : Y("", !0),
          e.product.available ? Y("", !0) : (k(), D("div", kb, b[0] || (b[0] = [
            h("span", { class: "bg-white text-secondary-900 px-4 py-2 font-medium rounded" }, " Out of Stock ", -1)
          ])))
        ], 8, xb),
        h("div", Ob, [
          e.product.available && e.enableQuickAdd ? (k(), ut(Mn, {
            key: 0,
            onClick: v,
            variant: "primary",
            size: "small",
            "full-width": !0
          }, {
            default: He(() => b[1] || (b[1] = [
              Me(" Quick Add ", -1)
            ])),
            _: 1,
            __: [1]
          })) : Y("", !0),
          e.enableQuickView ? (k(), ut(Mn, {
            key: 1,
            onClick: f,
            variant: "secondary",
            size: "small",
            "full-width": !0,
            class: "mt-2"
          }, {
            default: He(() => b[2] || (b[2] = [
              Me(" Quick View ", -1)
            ])),
            _: 1,
            __: [2]
          })) : Y("", !0)
        ])
      ]),
      h("div", Tb, [
        l.value ? (k(), D("div", Db, [
          h("div", Vb, [
            (k(!0), D(ue, null, Ae(a.value, (V) => (k(), D("button", {
              key: V.value,
              onClick: (P) => C(V),
              title: V.value,
              class: Ge([
                "w-6 h-6 rounded-full border-2 transition-all",
                o.value === V.value ? "border-secondary-900 scale-110" : "border-secondary-300"
              ]),
              style: _t({ backgroundColor: E(V.value) })
            }, null, 14, $b))), 128))
          ])
        ])) : Y("", !0),
        h("h3", Ab, [
          h("a", {
            href: e.product.url || "#",
            class: "hover:text-primary-600 transition-colors"
          }, X(e.product.title), 9, Ib)
        ]),
        h("div", Mb, [
          h("span", Pb, X(m(c.value)), 1),
          d.value > c.value ? (k(), D("span", Rb, X(m(d.value)), 1)) : Y("", !0)
        ])
      ])
    ]));
  }
}, Fb = { class: "collection-filters" }, Bb = { class: "lg:hidden mb-4" }, Hb = { class: "hidden lg:block space-y-6" }, jb = { class: "filter-group" }, Ub = { class: "filter-group" }, qb = { class: "space-y-2" }, zb = { class: "flex items-center" }, Kb = { class: "flex items-center" }, Wb = { class: "flex items-center" }, Gb = { class: "flex items-center" }, Yb = {
  key: 0,
  class: "filter-group"
}, Jb = { class: "space-y-2" }, Xb = ["value"], Qb = { class: "ml-2 text-sm" }, Zb = {
  key: 1,
  class: "filter-group"
}, e_ = { class: "space-y-2" }, t_ = ["value"], n_ = { class: "ml-2 text-sm" }, s_ = { class: "filter-group" }, o_ = { class: "flex items-center" }, i_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, r_ = { class: "h-full flex flex-col" }, l_ = { class: "flex items-center justify-between p-4 border-b" }, a_ = {
  __name: "CollectionFilters",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    initialFilters: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update-filters"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = z("manual"), i = z([]), r = z([]), l = z([]), a = z(!1), c = z(!1), d = oe(() => {
      const v = /* @__PURE__ */ new Set();
      return n.products.forEach((f) => {
        f.product_type && v.add(f.product_type);
      }), Array.from(v).sort();
    }), u = oe(() => {
      const v = /* @__PURE__ */ new Set();
      return n.products.forEach((f) => {
        f.vendor && v.add(f.vendor);
      }), Array.from(v).sort();
    }), p = oe(() => i.value.length > 0 || r.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      C();
    }, E = () => {
      C();
    }, y = () => {
      i.value = [], r.value = [], l.value = [], a.value = !1, C();
    }, T = () => {
      c.value = !1, C();
    }, C = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: i.value,
        types: r.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return (v, f) => (k(), D("div", Fb, [
      h("div", Bb, [
        h("button", {
          onClick: f[0] || (f[0] = (w) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        }, f[12] || (f[12] = [
          h("span", { class: "font-medium" }, "Filters", -1),
          h("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1)
        ]))
      ]),
      h("div", Hb, [
        h("div", jb, [
          f[14] || (f[14] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
          vt(h("select", {
            "onUpdate:modelValue": f[1] || (f[1] = (w) => o.value = w),
            onChange: m,
            class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          }, f[13] || (f[13] = [
            ks('<option value="manual" data-v-67473a91>Featured</option><option value="best-selling" data-v-67473a91>Best Selling</option><option value="title-ascending" data-v-67473a91>Alphabetically, A-Z</option><option value="title-descending" data-v-67473a91>Alphabetically, Z-A</option><option value="price-ascending" data-v-67473a91>Price, low to high</option><option value="price-descending" data-v-67473a91>Price, high to low</option><option value="created-ascending" data-v-67473a91>Date, old to new</option><option value="created-descending" data-v-67473a91>Date, new to old</option>', 8)
          ]), 544), [
            [Gi, o.value]
          ])
        ]),
        h("div", Ub, [
          f[19] || (f[19] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
          h("div", qb, [
            h("label", zb, [
              vt(h("input", {
                type: "checkbox",
                value: "0-50",
                "onUpdate:modelValue": f[2] || (f[2] = (w) => i.value = w),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Xt, i.value]
              ]),
              f[15] || (f[15] = h("span", { class: "ml-2 text-sm" }, "Under $50", -1))
            ]),
            h("label", Kb, [
              vt(h("input", {
                type: "checkbox",
                value: "50-100",
                "onUpdate:modelValue": f[3] || (f[3] = (w) => i.value = w),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Xt, i.value]
              ]),
              f[16] || (f[16] = h("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
            ]),
            h("label", Wb, [
              vt(h("input", {
                type: "checkbox",
                value: "100-200",
                "onUpdate:modelValue": f[4] || (f[4] = (w) => i.value = w),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Xt, i.value]
              ]),
              f[17] || (f[17] = h("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
            ]),
            h("label", Gb, [
              vt(h("input", {
                type: "checkbox",
                value: "200+",
                "onUpdate:modelValue": f[5] || (f[5] = (w) => i.value = w),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Xt, i.value]
              ]),
              f[18] || (f[18] = h("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (k(), D("div", Yb, [
          f[20] || (f[20] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          h("div", Jb, [
            (k(!0), D(ue, null, Ae(d.value, (w) => (k(), D("label", {
              key: w,
              class: "flex items-center"
            }, [
              vt(h("input", {
                type: "checkbox",
                value: w,
                "onUpdate:modelValue": f[6] || (f[6] = (b) => r.value = b),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, Xb), [
                [Xt, r.value]
              ]),
              h("span", Qb, X(w), 1)
            ]))), 128))
          ])
        ])) : Y("", !0),
        u.value.length > 0 ? (k(), D("div", Zb, [
          f[21] || (f[21] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          h("div", e_, [
            (k(!0), D(ue, null, Ae(u.value, (w) => (k(), D("label", {
              key: w,
              class: "flex items-center"
            }, [
              vt(h("input", {
                type: "checkbox",
                value: w,
                "onUpdate:modelValue": f[7] || (f[7] = (b) => l.value = b),
                onChange: E,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, t_), [
                [Xt, l.value]
              ]),
              h("span", n_, X(w), 1)
            ]))), 128))
          ])
        ])) : Y("", !0),
        h("div", s_, [
          f[23] || (f[23] = h("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          h("label", o_, [
            vt(h("input", {
              type: "checkbox",
              "onUpdate:modelValue": f[8] || (f[8] = (w) => a.value = w),
              onChange: E,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [Xt, a.value]
            ]),
            f[22] || (f[22] = h("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        p.value ? (k(), D("button", {
          key: 2,
          onClick: y,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : Y("", !0)
      ]),
      (k(), ut(cs, { to: "body" }, [
        c.value ? (k(), D("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: f[11] || (f[11] = sn((w) => c.value = !1, ["self"]))
        }, [
          h("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: f[9] || (f[9] = (w) => c.value = !1)
          }),
          h("div", i_, [
            h("div", r_, [
              h("div", l_, [
                f[25] || (f[25] = h("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                h("button", {
                  onClick: f[10] || (f[10] = (w) => c.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, f[24] || (f[24] = [
                  h("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              f[26] || (f[26] = h("div", { class: "flex-1 overflow-y-auto p-4 space-y-6" }, null, -1)),
              h("div", { class: "p-4 border-t" }, [
                h("button", {
                  onClick: T,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : Y("", !0)
      ]))
    ]));
  }
}, c_ = /* @__PURE__ */ ot(a_, [["__scopeId", "data-v-67473a91"]]), u_ = { class: "collection-grid" }, d_ = {
  key: 0,
  class: "mb-8"
}, f_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, p_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, h_ = { class: "mt-4 flex items-center justify-between" }, m_ = { class: "text-sm text-secondary-600" }, g_ = { class: "lg:hidden" }, v_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, y_ = { class: "lg:col-span-1" }, b_ = ["products"], __ = { class: "lg:col-span-3" }, E_ = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6"
}, N_ = {
  key: 1,
  class: "text-center py-12"
}, w_ = {
  key: 2,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6"
}, x_ = ["product"], S_ = {
  key: 3,
  class: "mt-8"
}, C_ = {
  key: 0,
  class: "inline-flex items-center"
}, k_ = {
  key: 1,
  class: "text-center"
}, O_ = ["disabled"], T_ = { key: 0 }, D_ = { key: 1 }, V_ = {
  key: 2,
  class: "flex items-center justify-between"
}, $_ = { class: "flex-1 flex justify-between sm:hidden" }, A_ = ["disabled"], I_ = ["disabled"], M_ = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, P_ = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, R_ = ["disabled"], L_ = ["onClick"], F_ = ["disabled"], B_ = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, H_ = { class: "relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full" }, j_ = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, U_ = { class: "text-lg font-medium text-secondary-900" }, q_ = {
  __name: "CollectionGrid",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    collectionTitle: {
      type: String,
      default: "All Products"
    },
    collectionDescription: {
      type: String,
      default: ""
    },
    productsPerPage: {
      type: Number,
      default: 12
    },
    enableInfiniteScroll: {
      type: Boolean,
      default: !1
    },
    showHeader: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = e, n = z(!1), s = z(!1), o = z(1), i = z(t.productsPerPage), r = z("manual"), l = z({}), a = z(null), c = z(null), d = oe(() => {
      var O, I, $;
      let S = [...t.products];
      switch (l.value.inStockOnly && (S = S.filter((L) => L.available)), ((O = l.value.priceRanges) == null ? void 0 : O.length) > 0 && (S = S.filter((L) => {
        const J = L.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? J < 50 : ee === "50-100" ? J >= 50 && J < 100 : ee === "100-200" ? J >= 100 && J < 200 : ee === "200+" ? J >= 200 : !1);
      })), ((I = l.value.types) == null ? void 0 : I.length) > 0 && (S = S.filter((L) => l.value.types.includes(L.product_type))), (($ = l.value.vendors) == null ? void 0 : $.length) > 0 && (S = S.filter((L) => l.value.vendors.includes(L.vendor))), l.value.sort || r.value) {
        case "price-ascending":
          S.sort((L, J) => L.price - J.price);
          break;
        case "price-descending":
          S.sort((L, J) => J.price - L.price);
          break;
        case "title-ascending":
          S.sort((L, J) => L.title.localeCompare(J.title));
          break;
        case "title-descending":
          S.sort((L, J) => J.title.localeCompare(L.title));
          break;
        case "created-ascending":
          S.sort((L, J) => new Date(L.created_at) - new Date(J.created_at));
          break;
        case "created-descending":
          S.sort((L, J) => new Date(J.created_at) - new Date(L.created_at));
          break;
      }
      return S;
    }), u = oe(() => {
      if (t.enableInfiniteScroll)
        return d.value.slice(0, i.value);
      const S = (o.value - 1) * t.productsPerPage, _ = S + t.productsPerPage;
      return d.value.slice(S, _);
    }), p = oe(() => Math.ceil(d.value.length / t.productsPerPage)), m = oe(() => i.value < d.value.length), E = oe(() => Math.max(0, d.value.length - i.value)), y = oe(() => {
      const S = [], _ = p.value, O = o.value;
      if (_ <= 7)
        for (let I = 1; I <= _; I++)
          S.push(I);
      else if (O <= 3) {
        for (let I = 1; I <= 5; I++)
          S.push(I);
        S.push("..."), S.push(_);
      } else if (O >= _ - 2) {
        S.push(1), S.push("...");
        for (let I = _ - 4; I <= _; I++)
          S.push(I);
      } else {
        S.push(1), S.push("...");
        for (let I = O - 1; I <= O + 1; I++)
          S.push(I);
        S.push("..."), S.push(_);
      }
      return S.filter((I) => I === "..." || I >= 1 && I <= _);
    }), T = (S) => {
      l.value = S, o.value = 1, i.value = t.productsPerPage;
    }, C = () => {
      o.value = 1, i.value = t.productsPerPage;
    }, v = () => {
      s.value = !0, setTimeout(() => {
        i.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, f = async (S) => {
      var O;
      const _ = new FormData();
      _.append("id", S.variants[0].id), _.append("quantity", "1"), await ((O = window.OrionCart) == null ? void 0 : O.addItem(_)), console.log("Added to cart:", S.title);
    }, w = (S) => {
      a.value = S;
    }, b = () => {
      a.value = null;
    };
    let V = null;
    const P = () => {
      !t.enableInfiniteScroll || !c.value || (V = new IntersectionObserver(
        (S) => {
          S[0].isIntersecting && m.value && !s.value && v();
        },
        { threshold: 0.1 }
      ), V.observe(c.value));
    };
    return Ye(() => {
      P();
    }), It(() => {
      V && V.disconnect();
    }), tn(() => t.enableInfiniteScroll, () => {
      P();
    }), (S, _) => (k(), D("div", u_, [
      e.showHeader ? (k(), D("div", d_, [
        h("h1", f_, X(e.collectionTitle), 1),
        e.collectionDescription ? (k(), D("div", p_, X(e.collectionDescription), 1)) : Y("", !0),
        h("div", h_, [
          h("p", m_, X(d.value.length) + " products ", 1),
          h("div", g_, [
            vt(h("select", {
              "onUpdate:modelValue": _[0] || (_[0] = (O) => r.value = O),
              onChange: C,
              class: "px-3 py-2 border border-secondary-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, _[5] || (_[5] = [
              ks('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Gi, r.value]
            ])
          ])
        ])
      ])) : Y("", !0),
      h("div", v_, [
        h("aside", y_, [
          h("collection-filters", {
            products: e.products,
            onUpdateFilters: T
          }, null, 40, b_)
        ]),
        h("div", __, [
          n.value ? (k(), D("div", E_, [
            (k(), D(ue, null, Ae(6, (O) => h("div", {
              key: O,
              class: "animate-pulse"
            }, _[6] || (_[6] = [
              h("div", { class: "bg-secondary-200 rounded-lg aspect-[3/4]" }, null, -1),
              h("div", { class: "mt-4 space-y-2" }, [
                h("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                h("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ])) : d.value.length === 0 ? (k(), D("div", N_, _[7] || (_[7] = [
            h("svg", {
              class: "mx-auto h-12 w-12 text-secondary-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            ], -1),
            h("h3", { class: "mt-2 text-sm font-medium text-secondary-900" }, "No products found", -1),
            h("p", { class: "mt-1 text-sm text-secondary-500" }, "Try adjusting your filters", -1)
          ]))) : (k(), D("div", w_, [
            (k(!0), D(ue, null, Ae(u.value, (O) => (k(), D("product-card", {
              key: O.id,
              product: O,
              onQuickAdd: f,
              onQuickView: w
            }, null, 40, x_))), 128))
          ])),
          !n.value && d.value.length > 0 ? (k(), D("div", S_, [
            e.enableInfiniteScroll ? (k(), D("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (k(), D("div", C_, _[8] || (_[8] = [
                h("svg", {
                  class: "animate-spin h-5 w-5 text-primary-600 mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  h("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  h("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                Me(" Loading more products... ", -1)
              ]))) : Y("", !0)
            ], 512)) : m.value ? (k(), D("div", k_, [
              h("button", {
                onClick: v,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                s.value ? (k(), D("span", T_, "Loading...")) : (k(), D("span", D_, "Load More (" + X(E.value) + " remaining)", 1))
              ], 8, O_)
            ])) : Y("", !0),
            !e.enableInfiniteScroll && p.value > 1 ? (k(), D("nav", V_, [
              h("div", $_, [
                h("button", {
                  onClick: _[1] || (_[1] = (O) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, A_),
                h("button", {
                  onClick: _[2] || (_[2] = (O) => o.value++),
                  disabled: o.value === p.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, I_)
              ]),
              h("div", M_, [
                h("div", null, [
                  h("nav", P_, [
                    h("button", {
                      onClick: _[3] || (_[3] = (O) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, _[9] || (_[9] = [
                      h("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        h("path", {
                          "fill-rule": "evenodd",
                          d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, R_),
                    (k(!0), D(ue, null, Ae(y.value, (O) => (k(), D("button", {
                      key: O,
                      onClick: (I) => o.value = O,
                      class: Ge([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === O ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, X(O), 11, L_))), 128)),
                    h("button", {
                      onClick: _[4] || (_[4] = (O) => o.value++),
                      disabled: o.value === p.value,
                      class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, _[10] || (_[10] = [
                      h("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        h("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, F_)
                  ])
                ])
              ])
            ])) : Y("", !0)
          ])) : Y("", !0)
        ])
      ]),
      (k(), ut(cs, { to: "body" }, [
        a.value ? (k(), D("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: sn(b, ["self"])
        }, [
          h("div", B_, [
            h("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: b
            }),
            h("div", H_, [
              h("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                h("button", {
                  onClick: b,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, _[11] || (_[11] = [
                  h("svg", {
                    class: "h-6 w-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    h("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              h("div", j_, [
                h("h3", U_, X(a.value.title), 1),
                _[12] || (_[12] = h("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : Y("", !0)
      ]))
    ]));
  }
}, z_ = { class: "product-gallery" }, K_ = { class: "main-image-wrapper" }, W_ = ["src", "alt"], G_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, Y_ = {
  key: 0,
  class: "thumbnails-wrapper"
}, J_ = ["disabled"], X_ = ["onClick", "aria-label"], Q_ = ["src", "alt"], Z_ = ["disabled"], eE = {
  key: 1,
  class: "swiper-dots"
}, tE = ["onClick", "aria-label"], nE = ["src", "alt"], sE = { class: "lightbox-counter" }, oE = 80, Uo = 4, kc = 2, iE = {
  __name: "ProductGallery",
  props: {
    images: {
      type: Array,
      required: !0,
      default: () => []
    },
    productTitle: {
      type: String,
      default: ""
    },
    imageTransformWidth: {
      type: Number,
      default: 1200
    },
    thumbnailWidth: {
      type: Number,
      default: 120
    }
  },
  setup(e) {
    const t = e, n = z(0), s = z(!1), o = z(!1), i = z(!1), r = z(!1), l = z(0), a = z(null), c = z(0), d = z(0), u = z({}), p = oe(() => t.images.map((P) => {
      if (P.src)
        return P;
      const S = P.url || P;
      return {
        src: `${S}?width=${t.imageTransformWidth}`,
        thumbnail: `${S}?width=${t.thumbnailWidth}`,
        alt: P.alt || t.productTitle
      };
    })), m = oe(() => p.value[n.value] || { src: "", alt: "" }), E = oe(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), y = oe(() => {
      const S = c.value / u.value.width * 100, _ = d.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * kc}px ${u.value.height * kc}px`,
        backgroundPosition: `${S}% ${_}%`
      };
    }), T = (P) => {
      s.value = !0, n.value = P;
    }, C = (P) => {
      P === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - Uo,
        l.value + 1
      );
    }, v = (P) => {
      n.value = P, o.value = !0, document.body.style.overflow = "hidden";
    }, f = () => {
      o.value = !1, document.body.style.overflow = "";
    }, w = (P) => {
      P === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, b = (P) => {
      const S = P.currentTarget.getBoundingClientRect();
      u.value = S, c.value = P.clientX - S.left, d.value = P.clientY - S.top;
    }, { lengthX: V } = C1(
      a,
      {
        onSwipeEnd() {
          V.value > 50 ? C("prev") : V.value < -50 && C("next");
        }
      }
    );
    return Ye(() => {
      r.value = window.innerWidth < 768;
      const P = () => {
        r.value = window.innerWidth < 768;
      }, S = (_) => {
        o.value && (_.key === "Escape" && f(), _.key === "ArrowLeft" && w("prev"), _.key === "ArrowRight" && w("next"));
      };
      window.addEventListener("resize", P), window.addEventListener("keydown", S), It(() => {
        window.removeEventListener("resize", P), window.removeEventListener("keydown", S);
      });
    }), (P, S) => (k(), D("div", z_, [
      h("div", K_, [
        h("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: S[1] || (S[1] = (_) => v(n.value)),
          onMouseenter: S[2] || (S[2] = (_) => i.value = !0),
          onMouseleave: S[3] || (S[3] = (_) => i.value = !1),
          onMousemove: b
        }, [
          h("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Ge(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: S[0] || (S[0] = (_) => s.value = !1)
          }, null, 42, W_),
          s.value ? (k(), D("div", G_, S[9] || (S[9] = [
            h("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : Y("", !0),
          S[10] || (S[10] = h("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
            h("svg", {
              class: "w-5 h-5 text-gray-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              })
            ])
          ], -1)),
          i.value && !r.value ? (k(), D("div", {
            key: 1,
            class: "zoom-lens",
            style: _t(E.value)
          }, null, 4)) : Y("", !0)
        ], 32),
        i.value && !r.value ? (k(), D("div", {
          key: 0,
          class: "zoom-preview",
          style: _t(y.value)
        }, null, 4)) : Y("", !0)
      ]),
      p.value.length > 1 ? (k(), D("div", Y_, [
        p.value.length > Uo ? (k(), D("button", {
          key: 0,
          onClick: S[4] || (S[4] = (_) => C("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, S[11] || (S[11] = [
          h("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })
          ], -1)
        ]), 8, J_)) : Y("", !0),
        h("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          h("div", {
            class: "thumbnails-track",
            style: _t({ transform: `translateX(-${l.value * (oE + 8)}px)` })
          }, [
            (k(!0), D(ue, null, Ae(p.value, (_, O) => (k(), D("button", {
              key: O,
              onClick: (I) => T(O),
              class: Ge(["thumbnail", { active: O === n.value }]),
              "aria-label": `View image ${O + 1}`
            }, [
              h("img", {
                src: _.thumbnail || _.src,
                alt: _.alt,
                class: "w-full h-full object-contain"
              }, null, 8, Q_)
            ], 10, X_))), 128))
          ], 4)
        ], 512),
        p.value.length > Uo ? (k(), D("button", {
          key: 1,
          onClick: S[5] || (S[5] = (_) => C("next")),
          disabled: l.value >= p.value.length - Uo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, S[12] || (S[12] = [
          h("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 8, Z_)) : Y("", !0)
      ])) : Y("", !0),
      p.value.length > 1 && r.value ? (k(), D("div", eE, [
        (k(!0), D(ue, null, Ae(p.value, (_, O) => (k(), D("button", {
          key: O,
          onClick: (I) => T(O),
          class: Ge(["swiper-dot", { active: O === n.value }]),
          "aria-label": `Go to image ${O + 1}`
        }, null, 10, tE))), 128))
      ])) : Y("", !0),
      (k(), ut(cs, { to: "body" }, [
        o.value ? (k(), D("div", {
          key: 0,
          class: "lightbox",
          onClick: f
        }, [
          h("button", {
            onClick: f,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, S[13] || (S[13] = [
            h("svg", {
              class: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ])),
          p.value.length > 1 ? (k(), D("button", {
            key: 0,
            onClick: S[6] || (S[6] = sn((_) => w("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, S[14] || (S[14] = [
            h("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ]))) : Y("", !0),
          h("div", {
            class: "lightbox-image-wrapper",
            onClick: S[7] || (S[7] = sn(() => {
            }, ["stop"]))
          }, [
            h("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, nE)
          ]),
          p.value.length > 1 ? (k(), D("button", {
            key: 1,
            onClick: S[8] || (S[8] = sn((_) => w("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, S[15] || (S[15] = [
            h("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ]))) : Y("", !0),
          h("div", sE, X(n.value + 1) + " / " + X(p.value.length), 1)
        ])) : Y("", !0)
      ]))
    ]));
  }
}, rE = /* @__PURE__ */ ot(iE, [["__scopeId", "data-v-a7c1d2a3"]]), lE = { class: "product-info" }, aE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, cE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, uE = { class: "price-wrapper mb-6" }, dE = { class: "flex items-baseline gap-3" }, fE = { class: "text-3xl font-semibold text-gray-900" }, pE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, hE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, mE = {
  key: 1,
  class: "mb-6"
}, gE = ["product", "current-variant"], vE = ["value"], yE = { class: "mb-4" }, bE = ["max"], _E = { class: "mb-4" }, EE = {
  key: 0,
  class: "text-red-600 font-medium"
}, NE = {
  key: 1,
  class: "text-amber-600"
}, wE = {
  key: 2,
  class: "text-green-600"
}, xE = { class: "flex flex-col sm:flex-row gap-3" }, SE = ["disabled"], CE = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, kE = { key: 1 }, OE = { key: 2 }, TE = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, DE = ["innerHTML"], VE = { class: "space-y-4" }, $E = {
  key: 0,
  class: "group"
}, AE = ["innerHTML"], IE = {
  key: 1,
  class: "group"
}, ME = { class: "mt-8 pt-8 border-t" }, PE = { class: "flex gap-3" }, RE = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, LE = {
  __name: "ProductInfo",
  props: {
    product: {
      type: Object,
      required: !0
    },
    showBuyNow: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["variant-change"],
  setup(e, { emit: t }) {
    var T;
    const n = e, s = t, o = z(n.product.selected_or_first_available_variant || ((T = n.product.variants) == null ? void 0 : T[0]) || {}), i = z(1), r = z(!1), l = z(!1), a = oe(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = oe(() => {
      var C;
      return (C = n.product.options) == null ? void 0 : C.some(
        (v) => v.name.toLowerCase() === "size" || v.name.toLowerCase() === "taille"
      );
    }), d = (C) => `$${(C / 100).toFixed(2)}`, u = (C) => {
      o.value = C, s("variant-change", C);
      const v = new URL(window.location);
      v.searchParams.set("variant", C.id), window.history.replaceState({}, "", v);
    }, p = async () => {
      var v;
      r.value = !0;
      const C = new FormData();
      C.append("id", o.value.id), C.append("quantity", i.value);
      try {
        await ((v = window.OrionCart) == null ? void 0 : v.addItem(C));
        const f = event.target, w = f.textContent;
        f.textContent = "✓ Added to Cart", setTimeout(() => {
          f.textContent = w;
        }, 2e3);
      } catch (f) {
        console.error("Failed to add to cart:", f), alert("Failed to add item to cart. Please try again.");
      } finally {
        r.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, E = (C) => {
      const v = window.location.href, f = n.product.title, w = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(v)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(v)}&text=${encodeURIComponent(f)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(v)}&description=${encodeURIComponent(f)}`
      };
      w[C] && window.open(w[C], "_blank", "width=600,height=400");
    }, y = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (C) {
        console.error("Failed to copy link:", C);
      }
    };
    return tn(() => n.product.selected_variant, (C) => {
      C && (o.value = C);
    }), (C, v) => (k(), D("div", lE, [
      h("h1", aE, X(e.product.title), 1),
      e.product.vendor ? (k(), D("p", cE, " by " + X(e.product.vendor), 1)) : Y("", !0),
      h("div", uE, [
        h("div", dE, [
          h("span", fE, X(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (k(), D("span", pE, X(d(o.value.compare_at_price)), 1)) : Y("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (k(), D("p", hE, " Save " + X(d(o.value.compare_at_price - o.value.price)) + " (" + X(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : Y("", !0)
      ]),
      e.product.has_only_default_variant ? Y("", !0) : (k(), D("div", mE, [
        h("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, gE)
      ])),
      h("form", {
        onSubmit: sn(p, ["prevent"]),
        class: "mb-8"
      }, [
        h("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, vE),
        h("div", yE, [
          v[4] || (v[4] = h("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          vt(h("quantity-selector", {
            "onUpdate:modelValue": v[0] || (v[0] = (f) => i.value = f),
            min: 1,
            max: a.value
          }, null, 8, bE), [
            [Ln, i.value]
          ])
        ]),
        h("div", _E, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (k(), D("p", NE, " Only " + X(o.value.inventory_quantity) + " left in stock ", 1)) : (k(), D("p", wE, " ✓ In Stock ")) : (k(), D("p", EE, " Out of Stock "))
        ]),
        h("div", xE, [
          h("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || r.value
          }, [
            r.value ? (k(), D("span", CE, v[5] || (v[5] = [
              h("svg", {
                class: "animate-spin h-5 w-5",
                viewBox: "0 0 24 24"
              }, [
                h("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4",
                  fill: "none"
                }),
                h("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1),
              Me(" Adding... ", -1)
            ]))) : o.value.available ? (k(), D("span", OE, " Add to Cart ")) : (k(), D("span", kE, " Sold Out "))
          ], 8, SE),
          e.showBuyNow ? (k(), ut(Mn, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: He(() => v[6] || (v[6] = [
              Me(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : Y("", !0)
        ])
      ], 32),
      e.product.description ? (k(), D("div", TE, [
        v[7] || (v[7] = h("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        h("div", {
          innerHTML: e.product.description
        }, null, 8, DE)
      ])) : Y("", !0),
      h("div", VE, [
        v[10] || (v[10] = ks('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (k(), D("details", $E, [
          v[8] || (v[8] = h("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
            h("span", { class: "font-medium" }, "Care Instructions"),
            h("svg", {
              class: "w-5 h-5 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          h("div", {
            class: "py-4 text-sm text-gray-600",
            innerHTML: e.product.care_instructions
          }, null, 8, AE)
        ])) : Y("", !0),
        c.value ? (k(), D("details", IE, v[9] || (v[9] = [
          ks('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : Y("", !0)
      ]),
      h("div", ME, [
        v[15] || (v[15] = h("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        h("div", PE, [
          h("button", {
            onClick: v[1] || (v[1] = (f) => E("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, v[11] || (v[11] = [
            h("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          h("button", {
            onClick: v[2] || (v[2] = (f) => E("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, v[12] || (v[12] = [
            h("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          h("button", {
            onClick: v[3] || (v[3] = (f) => E("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, v[13] || (v[13] = [
            h("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          h("button", {
            onClick: y,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            v[14] || (v[14] = h("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              })
            ], -1)),
            l.value ? (k(), D("span", RE, " Link copied! ")) : Y("", !0)
          ])
        ])
      ])
    ]));
  }
}, FE = /* @__PURE__ */ ot(LE, [["__scopeId", "data-v-9e2c3b5c"]]), BE = { class: "cart-item" }, HE = { class: "flex gap-4" }, jE = { class: "cart-item-image" }, UE = ["href"], qE = ["src", "alt"], zE = { class: "cart-item-details flex-1" }, KE = { class: "flex justify-between items-start mb-2" }, WE = { class: "font-medium text-gray-900" }, GE = ["href"], YE = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, JE = {
  key: 1,
  class: "mt-2 space-y-1"
}, XE = { class: "font-medium" }, QE = { class: "text-right lg:hidden" }, ZE = { class: "font-medium text-gray-900" }, e2 = {
  key: 0,
  class: "text-sm text-gray-500 line-through"
}, t2 = {
  key: 0,
  class: "mb-2"
}, n2 = { class: "flex items-center justify-between mt-3" }, s2 = { class: "flex items-center gap-3" }, o2 = ["max", "disabled"], i2 = ["disabled"], r2 = { class: "text-right hidden lg:block" }, l2 = { class: "font-medium text-gray-900" }, a2 = {
  key: 0,
  class: "text-sm text-gray-500 line-through"
}, c2 = {
  key: 1,
  class: "text-xs text-green-600 font-medium"
}, u2 = {
  key: 1,
  class: "text-xs text-amber-600 mt-2"
}, d2 = {
  key: 2,
  class: "text-xs text-red-600 mt-2"
}, f2 = {
  __name: "CartItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = z(n.item.quantity), i = z(!1), r = z(""), l = oe(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = oe(() => {
      var m;
      return ((m = n.item.variant) == null ? void 0 : m.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (m) => `$${(m / 100).toFixed(2)}`, d = () => {
      const m = n.item.original_line_price - n.item.final_line_price;
      return Math.round(m / n.item.original_line_price * 100);
    }, u = async (m) => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          await s("update", {
            key: n.item.key,
            quantity: m
          }), m === 0 && s("remove", n.item.key);
        } catch (E) {
          console.error("Failed to update quantity:", E), r.value = "Failed to update quantity. Please try again.", o.value = n.item.quantity;
        } finally {
          i.value = !1;
        }
      }
    }, p = async () => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          await s("remove", n.item.key);
        } catch (m) {
          console.error("Failed to remove item:", m), r.value = "Failed to remove item. Please try again.";
        } finally {
          i.value = !1;
        }
      }
    };
    return tn(() => n.item.quantity, (m) => {
      o.value = m;
    }), (m, E) => (k(), D("div", BE, [
      h("div", HE, [
        h("div", jE, [
          h("a", {
            href: e.item.url,
            class: "block"
          }, [
            h("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "w-full h-full object-cover rounded-md",
              loading: "lazy"
            }, null, 8, qE)
          ], 8, UE)
        ]),
        h("div", zE, [
          h("div", KE, [
            h("div", null, [
              h("h3", WE, [
                h("a", {
                  href: e.item.url,
                  class: "hover:text-red-600 transition-colors"
                }, X(e.item.product_title), 9, GE)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (k(), D("p", YE, X(e.item.variant_title), 1)) : Y("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (k(), D("div", JE, [
                (k(!0), D(ue, null, Ae(e.item.properties, (y, T) => (k(), D("p", {
                  key: T,
                  class: "text-xs text-gray-600"
                }, [
                  h("span", XE, X(T) + ":", 1),
                  Me(" " + X(y), 1)
                ]))), 128))
              ])) : Y("", !0)
            ]),
            h("div", QE, [
              h("p", ZE, X(c(e.item.final_line_price)), 1),
              e.item.original_line_price > e.item.final_line_price ? (k(), D("p", e2, X(c(e.item.original_line_price)), 1)) : Y("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (k(), D("div", t2, [
            (k(!0), D(ue, null, Ae(e.item.discounts, (y) => (k(), D("div", {
              key: y.id,
              class: "inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded"
            }, [
              E[1] || (E[1] = h("svg", {
                class: "w-3 h-3",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                h("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              Me(" " + X(y.title) + " (-" + X(c(y.amount)) + ") ", 1)
            ]))), 128))
          ])) : Y("", !0),
          h("div", n2, [
            h("div", s2, [
              vt(h("quantity-selector", {
                "onUpdate:modelValue": E[0] || (E[0] = (y) => o.value = y),
                min: 0,
                max: l.value,
                "on:update:modelValue": u,
                disabled: i.value,
                class: "w-24"
              }, null, 40, o2), [
                [Ln, o.value]
              ]),
              h("button", {
                type: "button",
                onClick: p,
                class: "text-sm text-gray-500 hover:text-red-600 transition-colors",
                disabled: i.value
              }, X(i.value ? "Removing..." : "Remove"), 9, i2)
            ]),
            h("div", r2, [
              h("p", l2, X(c(e.item.final_line_price)), 1),
              e.item.original_line_price > e.item.final_line_price ? (k(), D("p", a2, X(c(e.item.original_line_price)), 1)) : Y("", !0),
              e.item.original_line_price > e.item.final_line_price ? (k(), D("p", c2, " Save " + X(d()) + "% ", 1)) : Y("", !0)
            ])
          ]),
          a.value ? (k(), D("p", u2, " Only " + X(e.item.variant.inventory_quantity) + " left in stock ", 1)) : Y("", !0),
          r.value ? (k(), D("p", d2, X(r.value), 1)) : Y("", !0)
        ])
      ])
    ]));
  }
}, p2 = /* @__PURE__ */ ot(f2, [["__scopeId", "data-v-e99b3eca"]]), h2 = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, m2 = { class: "space-y-3 mb-4" }, g2 = { class: "flex justify-between text-sm" }, v2 = { class: "text-gray-600" }, y2 = { class: "font-medium text-gray-900" }, b2 = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, _2 = {
  key: 1,
  class: "flex justify-between text-sm"
}, E2 = { class: "text-gray-900" }, N2 = {
  key: 2,
  class: "flex justify-between text-sm"
}, w2 = { class: "text-gray-900" }, x2 = { class: "border-t pt-4 mb-6" }, S2 = { class: "flex justify-between items-baseline" }, C2 = { class: "text-right" }, k2 = { class: "text-xl font-bold text-gray-900" }, O2 = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, T2 = { class: "mb-6" }, D2 = { class: "group" }, V2 = { class: "mt-3" }, $2 = ["disabled"], A2 = ["disabled"], I2 = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, M2 = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, P2 = ["disabled"], R2 = {
  key: 0,
  class: "flex items-center gap-2"
}, L2 = { key: 1 }, F2 = {
  __name: "CartSummary",
  props: {
    cart: {
      type: Object,
      required: !0
    },
    showShipping: {
      type: Boolean,
      default: !0
    },
    showTax: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["checkout"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = z(""), i = z(""), r = z(""), l = z(!1), a = z(!1), c = oe(() => n.cart.item_count || 0), d = oe(() => n.cart.total_price || 0), u = oe(() => n.cart.original_total_price || n.cart.total_price || 0), p = oe(() => n.cart.total_discount || 0), m = oe(() => d.value >= 5e3 ? 0 : 500), E = oe(() => Math.round(d.value * 0.1)), y = (v) => `$${(v / 100).toFixed(2)}`, T = async () => {
      var v;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, i.value = "", r.value = "";
        try {
          const f = new FormData();
          f.append("discount_code", o.value);
          const w = await fetch("/discount/apply", {
            method: "POST",
            body: f
          });
          if (w.ok)
            r.value = "Promo code applied successfully!", o.value = "", await ((v = window.OrionCart) == null ? void 0 : v.fetchCart());
          else {
            const b = await w.json();
            i.value = b.message || "Invalid promo code";
          }
        } catch (f) {
          console.error("Failed to apply promo code:", f), i.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, C = async () => {
      if (!(c.value === 0 || a.value)) {
        a.value = !0;
        try {
          s("checkout"), window.location.href = "/checkout";
        } catch (v) {
          console.error("Failed to proceed to checkout:", v), alert("Failed to proceed to checkout. Please try again.");
        } finally {
          a.value = !1;
        }
      }
    };
    return (v, f) => (k(), D("div", h2, [
      f[8] || (f[8] = h("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      h("div", m2, [
        h("div", g2, [
          h("span", v2, "Subtotal (" + X(c.value) + " " + X(c.value === 1 ? "item" : "items") + ")", 1),
          h("span", y2, X(y(u.value)), 1)
        ]),
        p.value > 0 ? (k(), D("div", b2, [
          f[1] || (f[1] = h("span", { class: "flex items-center gap-1" }, [
            h("svg", {
              class: "w-4 h-4",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                "clip-rule": "evenodd"
              })
            ]),
            Me(" Discounts ")
          ], -1)),
          h("span", null, "-" + X(y(p.value)), 1)
        ])) : Y("", !0),
        e.showShipping ? (k(), D("div", _2, [
          f[2] || (f[2] = h("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          h("span", E2, X(m.value === 0 ? "Free" : y(m.value)), 1)
        ])) : Y("", !0),
        e.showTax ? (k(), D("div", N2, [
          f[3] || (f[3] = h("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          h("span", w2, X(y(E.value)), 1)
        ])) : Y("", !0)
      ]),
      h("div", x2, [
        h("div", S2, [
          f[4] || (f[4] = h("span", { class: "text-lg font-semibold" }, "Total", -1)),
          h("div", C2, [
            h("span", k2, X(y(d.value)), 1),
            p.value > 0 ? (k(), D("p", O2, " You saved " + X(y(p.value)) + "! ", 1)) : Y("", !0)
          ])
        ])
      ]),
      h("div", T2, [
        h("details", D2, [
          f[5] || (f[5] = h("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
            h("span", null, "Have a promo code?"),
            h("svg", {
              class: "w-4 h-4 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          h("div", V2, [
            h("form", {
              onSubmit: sn(T, ["prevent"]),
              class: "flex gap-2"
            }, [
              vt(h("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (w) => o.value = w),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, $2), [
                [Ln, o.value]
              ]),
              h("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !o.value.trim() || l.value
              }, X(l.value ? "Applying..." : "Apply"), 9, A2)
            ], 32),
            i.value ? (k(), D("p", I2, X(i.value), 1)) : Y("", !0),
            r.value ? (k(), D("p", M2, X(r.value), 1)) : Y("", !0)
          ])
        ])
      ]),
      h("button", {
        onClick: C,
        class: "w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        disabled: c.value === 0 || a.value
      }, [
        a.value ? (k(), D("span", R2, f[6] || (f[6] = [
          h("svg", {
            class: "animate-spin h-5 w-5",
            viewBox: "0 0 24 24"
          }, [
            h("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4",
              fill: "none"
            }),
            h("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
          ], -1),
          Me(" Processing... ", -1)
        ]))) : (k(), D("span", L2, f[7] || (f[7] = [
          Me(" Proceed to Checkout ", -1),
          h("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            h("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ], -1)
        ])))
      ], 8, P2),
      f[9] || (f[9] = ks('<div class="mt-6 space-y-2" data-v-d638da26><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-d638da26></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-d638da26></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-d638da26></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d638da26></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-d638da26><p class="text-xs text-gray-600 mb-2" data-v-d638da26>We accept</p><div class="flex gap-2" data-v-d638da26><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-d638da26></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#EB001B" data-v-d638da26></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-d638da26></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-d638da26></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-d638da26></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#253B80" data-v-d638da26></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-d638da26></path></svg></div></div>', 2))
    ]));
  }
}, B2 = /* @__PURE__ */ ot(F2, [["__scopeId", "data-v-d638da26"]]), H2 = { class: "slideshow-banner" }, j2 = {
  __name: "SlideshowBanner",
  props: {
    autoRotate: {
      type: [String, Boolean],
      default: !1
    },
    changeSlidesSpeed: {
      type: [String, Number],
      default: 5
    }
  },
  setup(e) {
    const t = e, n = z(0), s = z([]), o = z(null), i = oe(() => t.autoRotate === !0 || t.autoRotate === "true"), r = oe(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const y = document.querySelector(".slideshow-prev"), T = document.querySelector(".slideshow-next"), C = document.querySelectorAll(".slide-indicator");
      y && y.addEventListener("click", d), T && T.addEventListener("click", c), C.forEach((v, f) => {
        v.addEventListener("click", () => a(f));
      }), i.value && u();
    }, a = (y) => {
      var v, f, w, b;
      if (y === n.value || !s.value.length) return;
      (v = s.value[n.value]) == null || v.classList.remove("opacity-100"), (f = s.value[n.value]) == null || f.classList.add("opacity-0");
      const T = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      T == null || T.classList.remove("opacity-100"), T == null || T.classList.add("opacity-50"), n.value = y, (w = s.value[n.value]) == null || w.classList.remove("opacity-0"), (b = s.value[n.value]) == null || b.classList.add("opacity-100");
      const C = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      C == null || C.classList.remove("opacity-50"), C == null || C.classList.add("opacity-100");
    }, c = () => {
      const y = (n.value + 1) % s.value.length;
      a(y);
    }, d = () => {
      const y = n.value === 0 ? s.value.length - 1 : n.value - 1;
      a(y);
    }, u = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        c();
      }, r.value);
    }, p = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, m = () => {
      i.value && p();
    }, E = () => {
      i.value && u();
    };
    return Ye(() => {
      setTimeout(l, 100);
      const y = document.querySelector(".slideshow-wrapper");
      y && (y.addEventListener("mouseenter", m), y.addEventListener("mouseleave", E));
    }), It(() => {
      p();
      const y = document.querySelector(".slideshow-wrapper");
      y && (y.removeEventListener("mouseenter", m), y.removeEventListener("mouseleave", E));
    }), (y, T) => (k(), D("div", H2, [
      Bn(y.$slots, "default", {}, void 0, !0)
    ]));
  }
}, U2 = /* @__PURE__ */ ot(j2, [["__scopeId", "data-v-8690c751"]]), q2 = { class: "testimonials-carousel relative" }, z2 = {
  __name: "TestimonialsCarousel",
  props: {
    autoRotate: {
      type: [String, Boolean],
      default: !1
    },
    changeSlidesSpeed: {
      type: [String, Number],
      default: 5
    },
    showNavigation: {
      type: [String, Boolean],
      default: !0
    },
    showPagination: {
      type: [String, Boolean],
      default: !0
    }
  },
  setup(e) {
    const t = e, n = z(0), s = z([]), o = z(null), i = z(null), r = oe(() => t.autoRotate === !0 || t.autoRotate === "true"), l = oe(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), i.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const b = document.querySelector(".testimonials-prev"), V = document.querySelector(".testimonials-next"), P = document.querySelectorAll(".testimonial-indicator");
      b && b.addEventListener("click", u), V && V.addEventListener("click", d), P.forEach((S, _) => {
        S.addEventListener("click", () => c(_));
      }), r.value && p();
    }, c = (b) => {
      if (b === n.value || !s.value.length || !i.value) return;
      n.value = b;
      const P = -s.value[0].offsetWidth * n.value;
      i.value.style.transform = `translateX(${P}px)`, document.querySelectorAll(".testimonial-indicator").forEach((_, O) => {
        O === n.value ? (_.classList.remove("bg-gray-300"), _.classList.add("bg-red-600")) : (_.classList.remove("bg-red-600"), _.classList.add("bg-gray-300"));
      });
    }, d = () => {
      const b = (n.value + 1) % s.value.length;
      c(b);
    }, u = () => {
      const b = n.value === 0 ? s.value.length - 1 : n.value - 1;
      c(b);
    }, p = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        d();
      }, l.value);
    }, m = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, E = () => {
      r.value && m();
    }, y = () => {
      r.value && p();
    };
    let T = 0, C = 0;
    const v = (b) => {
      T = b.changedTouches[0].screenX;
    }, f = (b) => {
      C = b.changedTouches[0].screenX, w();
    }, w = () => {
      const V = T - C;
      Math.abs(V) > 50 && (V > 0 ? d() : u());
    };
    return Ye(() => {
      setTimeout(a, 100);
      const b = document.querySelector(".testimonials-wrapper");
      b && (b.addEventListener("mouseenter", E), b.addEventListener("mouseleave", y), b.addEventListener("touchstart", v), b.addEventListener("touchend", f));
    }), It(() => {
      m();
      const b = document.querySelector(".testimonials-wrapper");
      b && (b.removeEventListener("mouseenter", E), b.removeEventListener("mouseleave", y), b.removeEventListener("touchstart", v), b.removeEventListener("touchend", f));
    }), (b, V) => (k(), D("div", q2, [
      Bn(b.$slots, "default", {}, void 0, !0)
    ]));
  }
}, K2 = /* @__PURE__ */ ot(z2, [["__scopeId", "data-v-276cc4e8"]]), W2 = { class: "video-player relative w-full h-full" }, G2 = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, Y2 = ["src", "title"], J2 = {
  __name: "VideoPlayer",
  props: {
    videoUrl: {
      type: String,
      required: !0
    },
    autoplay: {
      type: [String, Boolean],
      default: !1
    },
    muted: {
      type: [String, Boolean],
      default: !0
    },
    controls: {
      type: [String, Boolean],
      default: !0
    },
    poster: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e, n = z(!1), s = z(""), o = z(""), i = oe(() => t.autoplay === !0 || t.autoplay === "true"), r = oe(() => t.muted === !0 || t.muted === "true"), l = oe(() => t.controls === !0 || t.controls === "true"), a = oe(() => `${s.value} video player`), c = oe(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const E = i.value ? "1" : "0", y = r.value ? "1" : "0", T = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${E}&mute=${y}&controls=${T}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${E}&muted=${y}&controls=${T}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
      if (!m) return { type: "", id: "" };
      const E = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const T of E) {
        const C = m.match(T);
        if (C)
          return { type: "youtube", id: C[1] };
      }
      const y = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const T of y) {
        const C = m.match(T);
        if (C)
          return { type: "vimeo", id: C[1] };
      }
      return { type: "", id: "" };
    }, u = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      i.value && o.value && s.value && (n.value = !0);
    };
    return Ye(() => {
      const m = d(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const E = document.querySelector(".play-button");
      E && E.addEventListener("click", u), p();
    }), (m, E) => (k(), D("div", W2, [
      n.value ? (k(), D("div", G2, [
        h("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, Y2)
      ])) : (k(), D("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        Bn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, X2 = /* @__PURE__ */ ot(J2, [["__scopeId", "data-v-540fecb2"]]), Q2 = { class: "password-modal" }, Z2 = {
  __name: "PasswordModal",
  setup(e) {
    const t = z(!1), n = () => {
      t.value = !0, document.body.style.overflow = "hidden";
    }, s = () => {
      t.value = !1, document.body.style.overflow = "";
    }, o = (c) => {
      c.preventDefault(), t.value ? s() : n();
    }, i = (c) => {
      c.key === "Escape" && t.value && s();
    }, r = (c) => {
      const d = document.querySelector(".password-content"), u = document.querySelector(".password-toggle");
      t.value && d && !d.contains(c.target) && !u.contains(c.target) && s();
    };
    Ye(() => {
      const c = document.querySelector(".password-toggle");
      c && c.addEventListener("click", o), document.addEventListener("keydown", i), document.addEventListener("click", r), setTimeout(() => {
        n();
      }, 500);
    });
    const l = () => {
      const c = document.querySelector(".password-content");
      c && (t.value ? (c.style.display = "block", c.style.opacity = "1", c.style.transform = "translateY(0)") : (c.style.opacity = "0", c.style.transform = "translateY(-20px)", setTimeout(() => {
        t.value || (c.style.display = "none");
      }, 300)));
    }, a = (c) => {
      let d = t.value;
      const u = setInterval(() => {
        t.value !== d && (c(t.value, d), d = t.value);
      }, 50);
      return () => clearInterval(u);
    };
    return Ye(() => {
      a(() => {
        l();
      });
    }), (c, d) => (k(), D("div", Q2, [
      Bn(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, eN = /* @__PURE__ */ ot(Z2, [["__scopeId", "data-v-075988c6"]]), tN = /* @__PURE__ */ Le({
  ...Mn,
  props: {
    ...Mn.props,
    // Inject global settings as default props
    buttonRadius: {
      type: [String, Number],
      default: () => {
        var e;
        return ((e = window.themeSettings) == null ? void 0 : e.buttonRadius) || 6;
      }
    },
    primaryBg: {
      type: String,
      default: () => {
        var e;
        return ((e = window.themeSettings) == null ? void 0 : e.buttonPrimaryBg) || "#dc2626";
      }
    },
    primaryBgHover: {
      type: String,
      default: () => {
        var e;
        return ((e = window.themeSettings) == null ? void 0 : e.buttonPrimaryBgHover) || "#b91c1c";
      }
    },
    primaryText: {
      type: String,
      default: () => {
        var e;
        return ((e = window.themeSettings) == null ? void 0 : e.buttonPrimaryText) || "#ffffff";
      }
    },
    secondaryBg: {
      type: String,
      default: () => {
        var e;
        return ((e = window.themeSettings) == null ? void 0 : e.buttonSecondaryBg) || "#ffffff";
      }
    },
    secondaryBgHover: {
      type: String,
      default: () => {
        var e;
        return ((e = window.themeSettings) == null ? void 0 : e.buttonSecondaryBgHover) || "#f9fafb";
      }
    },
    secondaryText: {
      type: String,
      default: () => {
        var e;
        return ((e = window.themeSettings) == null ? void 0 : e.buttonSecondaryText) || "#374151";
      }
    },
    secondaryBorder: {
      type: String,
      default: () => {
        var e;
        return ((e = window.themeSettings) == null ? void 0 : e.buttonSecondaryBorder) || "#d1d5db";
      }
    }
  }
}), nN = /* @__PURE__ */ Le(Vf), sN = /* @__PURE__ */ Le($f), oN = /* @__PURE__ */ Le(d1), iN = /* @__PURE__ */ Le(v1), rN = /* @__PURE__ */ Le(T1), lN = /* @__PURE__ */ Le(If), aN = /* @__PURE__ */ Le(Eb), cN = /* @__PURE__ */ Le(Lb), uN = /* @__PURE__ */ Le(c_), dN = /* @__PURE__ */ Le(q_), fN = /* @__PURE__ */ Le(rE), pN = /* @__PURE__ */ Le(FE), hN = /* @__PURE__ */ Le(p2), mN = /* @__PURE__ */ Le(B2), gN = /* @__PURE__ */ Le(U2), vN = /* @__PURE__ */ Le(K2), yN = /* @__PURE__ */ Le(X2), bN = /* @__PURE__ */ Le(eN);
customElements.define("orion-button", tN);
customElements.define("cart-drawer", nN);
customElements.define("mobile-menu", sN);
customElements.define("product-variant-picker", oN);
customElements.define("quantity-selector", iN);
customElements.define("sticky-header", rN);
customElements.define("main-header", lN);
customElements.define("site-footer", aN);
customElements.define("product-card", cN);
customElements.define("collection-filters", uN);
customElements.define("collection-grid", dN);
customElements.define("product-gallery", fN);
customElements.define("product-info", pN);
customElements.define("cart-item", hN);
customElements.define("cart-summary", mN);
customElements.define("slideshow-banner", gN);
customElements.define("testimonials-carousel", vN);
customElements.define("video-player", yN);
customElements.define("password-modal", bN);
document.addEventListener("DOMContentLoaded", () => {
  window.OrionButtonSettings = {
    radius: document.documentElement.style.getPropertyValue("--button-radius") || "6px",
    primaryBg: document.documentElement.style.getPropertyValue("--button-primary-bg") || "#dc2626",
    primaryBgHover: document.documentElement.style.getPropertyValue("--button-primary-bg-hover") || "#b91c1c",
    primaryText: document.documentElement.style.getPropertyValue("--button-primary-text") || "#ffffff",
    secondaryBg: document.documentElement.style.getPropertyValue("--button-secondary-bg") || "#ffffff",
    secondaryBgHover: document.documentElement.style.getPropertyValue("--button-secondary-bg-hover") || "#f9fafb",
    secondaryText: document.documentElement.style.getPropertyValue("--button-secondary-text") || "#374151",
    secondaryBorder: document.documentElement.style.getPropertyValue("--button-secondary-border") || "#d1d5db"
  }, document.querySelectorAll(".main-header-mount").forEach((o) => {
    Ns(If, {
      shopName: o.dataset.shopName || "Orion Store",
      logoUrl: o.dataset.logoUrl || "",
      navigationLinks: JSON.parse(o.dataset.navigationLinks || "[]")
    }).mount(o);
  }), document.querySelectorAll(".mobile-menu-mount").forEach((o) => {
    Ns($f, {
      menuItems: JSON.parse(o.dataset.menuItems || "[]"),
      customerUrl: o.dataset.customerUrl || "/account",
      showLocalization: o.dataset.showLocalization === "true"
    }).mount(o);
  }), document.querySelectorAll(".cart-drawer-mount").forEach((o) => {
    Ns(Vf).mount(o);
  }), document.querySelectorAll(".sticky-header").forEach((o) => {
    if (o.dataset.sticky === "true") {
      let i = window.scrollY;
      window.addEventListener("scroll", () => {
        const r = window.scrollY, l = o.dataset.transparent === "true", a = o.dataset.hideOnScroll === "true";
        r > 100 && !l ? (o.classList.add("sticky", "top-0", "shadow-md"), o.style.backgroundColor = o.dataset.stickyBackground || "#ffffff") : (o.classList.remove("sticky", "shadow-md"), o.style.backgroundColor = ""), a && (r > i && r > 100 ? o.style.transform = "translateY(-100%)" : o.style.transform = "translateY(0)"), i = r;
      });
    }
  }), window.OrionCart = {
    state: {
      isOpen: !1,
      items: [],
      totalPrice: 0,
      itemCount: 0
    },
    async fetchCart() {
      try {
        const i = await (await fetch(window.routes.cart_url + ".js")).json();
        return this.state.items = i.items, this.state.totalPrice = i.total_price, this.state.itemCount = i.item_count, document.dispatchEvent(new CustomEvent("cart:updated", { detail: i })), i;
      } catch (o) {
        console.error("Failed to fetch cart:", o);
      }
    },
    async addItem(o) {
      try {
        const r = await (await fetch(window.routes.cart_add_url, {
          method: "POST",
          body: o
        })).json();
        return await this.fetchCart(), this.openDrawer(), r;
      } catch (i) {
        console.error("Failed to add item to cart:", i);
      }
    },
    async updateItem(o, i) {
      try {
        const r = new FormData();
        r.append("updates[" + o + "]", i);
        const a = await (await fetch(window.routes.cart_update_url, {
          method: "POST",
          body: r
        })).json();
        return await this.fetchCart(), a;
      } catch (r) {
        console.error("Failed to update cart:", r);
      }
    },
    async removeItem(o) {
      return this.updateItem(o, 0);
    },
    openDrawer() {
      this.state.isOpen = !0, document.dispatchEvent(new CustomEvent("cart:open"));
    },
    closeDrawer() {
      this.state.isOpen = !1, document.dispatchEvent(new CustomEvent("cart:close"));
    }
  }, window.OrionCart.fetchCart(), document.addEventListener("cart:updated", (o) => {
    const i = o.detail.item_count;
    document.querySelectorAll(".cart-count").forEach((l) => {
      i > 0 ? (l.textContent = i, l.style.opacity = "1") : l.style.opacity = "0";
    });
  });
});
