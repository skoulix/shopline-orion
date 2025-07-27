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
}, Ff = Object.prototype.hasOwnProperty, ge = (e, t) => Ff.call(e, t), K = Array.isArray, Gn = (e) => Rs(e) === "[object Map]", ls = (e) => Rs(e) === "[object Set]", ia = (e) => Rs(e) === "[object Date]", Bf = (e) => Rs(e) === "[object RegExp]", oe = (e) => typeof e == "function", re = (e) => typeof e == "string", bt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", ki = (e) => (me(e) || oe(e)) && oe(e.then) && oe(e.catch), Oc = Object.prototype.toString, Rs = (e) => Oc.call(e), sl = (e) => Rs(e).slice(8, -1), Oi = (e) => Rs(e) === "[object Object]", ol = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vn = /* @__PURE__ */ qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tc = /* @__PURE__ */ qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ti = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, jf = /-(\w)/g, Se = Ti(
  (e) => e.replace(jf, (t, n) => n ? n.toUpperCase() : "")
), Hf = /\B([A-Z])/g, Ze = Ti(
  (e) => e.replace(Hf, "-$1").toLowerCase()
), on = Ti((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = Ti(
  (e) => e ? `on${on(e)}` : ""
), at = (e, t) => !Object.is(e, t), On = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ts = (e, t, n, s = !1) => {
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
const wo = () => ra || (ra = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Uf(e, t) {
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
}, qf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, zf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Kf = /* @__PURE__ */ qe(zf), la = 2;
function Wf(e, t = 0, n = e.length) {
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
          const h = t - (i - (d + u)), m = Math.max(
            1,
            n > i ? d - h : n - t
          );
          r.push("   |  " + " ".repeat(h) + "^".repeat(m));
        } else if (a > l) {
          if (n > i) {
            const h = Math.max(Math.min(n - i, d), 1);
            r.push("   |  " + "^".repeat(h));
          }
          i += d + u;
        }
      }
      break;
    }
  return r.join(`
`);
}
function dt(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = re(s) ? Dc(s) : dt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (re(e) || me(e))
    return e;
}
const Gf = /;(?![^(]*\))/g, Yf = /:([^]+)/, Jf = /\/\*[^]*?\*\//g;
function Dc(e) {
  const t = {};
  return e.replace(Jf, "").split(Gf).forEach((n) => {
    if (n) {
      const s = n.split(Yf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Xf(e) {
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
function Ie(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ie(e[n]);
      s && (t += s + " ");
    }
  else if (me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Qf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !re(t) && (e.class = Ie(t)), n && (e.style = dt(n)), e;
}
const Zf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ep = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", tp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", np = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Vc = /* @__PURE__ */ qe(Zf), $c = /* @__PURE__ */ qe(ep), Ac = /* @__PURE__ */ qe(tp), sp = /* @__PURE__ */ qe(np), Ic = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", op = /* @__PURE__ */ qe(Ic), aa = /* @__PURE__ */ qe(
  Ic + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function il(e) {
  return !!e || e === "";
}
const ip = /* @__PURE__ */ qe(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), rp = /* @__PURE__ */ qe(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function lp(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const ap = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function cp(e, t) {
  return e.replace(
    ap,
    (n) => `\\${n}`
  );
}
function up(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Mn(e[s], t[s]);
  return n;
}
function Mn(e, t) {
  if (e === t) return !0;
  let n = ia(e), s = ia(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = bt(e), s = bt(t), n || s)
    return e === t;
  if (n = K(e), s = K(t), n || s)
    return n && s ? up(e, t) : !1;
  if (n = me(e), s = me(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Mn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Di(e, t) {
  return e.findIndex((n) => Mn(n, t));
}
const Mc = (e) => !!(e && e.__v_isRef === !0), X = (e) => re(e) ? e : e == null ? "" : K(e) || me(e) && (e.toString === Oc || !oe(e.toString)) ? Mc(e) ? X(e.value) : JSON.stringify(e, Pc, 2) : String(e), Pc = (e, t) => Mc(t) ? Pc(e, t.value) : Gn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[nr(s, i) + " =>"] = o, n),
    {}
  )
} : ls(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => nr(n))
} : bt(t) ? nr(t) : me(t) && !K(t) && !Oi(t) ? String(t) : t, nr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
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
function dp(e) {
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
    this.flags |= 2, ca(this), jc(this);
    const t = _e, n = jt;
    _e = this, jt = !0;
    try {
      return this.fn();
    } finally {
      be.NODE_ENV !== "production" && _e !== this && Vt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Hc(this), _e = t, jt = n, this.flags &= -3;
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
function jc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), ul(s), fp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
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
  const t = e.dep, n = _e, s = jt;
  _e = e, jt = !0;
  try {
    jc(e);
    const o = e.fn(e._value);
    (t.version === 0 || at(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    _e = n, jt = s, Hc(e), e.flags &= -3;
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
function fp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function pp(e, t) {
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
function hp(e) {
  e.effect.stop();
}
let jt = !0;
const qc = [];
function qt() {
  qc.push(jt), jt = !1;
}
function zt() {
  const e = qc.pop();
  jt = e === void 0 ? !0 : e;
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
class mp {
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
    if (!_e || !jt || _e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      n = this.activeLink = new mp(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, zc(n);
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
const ni = /* @__PURE__ */ new WeakMap(), Yn = Symbol(
  be.NODE_ENV !== "production" ? "Object iterate" : ""
), Er = Symbol(
  be.NODE_ENV !== "production" ? "Map keys iterate" : ""
), co = Symbol(
  be.NODE_ENV !== "production" ? "Array iterate" : ""
);
function je(e, t, n) {
  if (jt && _e) {
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
function en(e, t, n, s, o, i) {
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
    const a = K(e), c = a && ol(n);
    if (a && n === "length") {
      const d = Number(s);
      r.forEach((u, h) => {
        (h === "length" || h === co || !bt(h) && h >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), c && l(r.get(co)), t) {
        case "add":
          a ? c && l(r.get("length")) : (l(r.get(Yn)), Gn(e) && l(r.get(Er)));
          break;
        case "delete":
          a || (l(r.get(Yn)), Gn(e) && l(r.get(Er)));
          break;
        case "set":
          Gn(e) && l(r.get(Yn));
          break;
      }
  }
  cl();
}
function gp(e, t) {
  const n = ni.get(e);
  return n && n.get(t);
}
function fs(e) {
  const t = ae(e);
  return t === e ? t : (je(t, "iterate", co), tt(e) ? t : t.map(We));
}
function $i(e) {
  return je(e = ae(e), "iterate", co), e;
}
const vp = {
  __proto__: null,
  [Symbol.iterator]() {
    return or(this, Symbol.iterator, We);
  },
  concat(...e) {
    return fs(this).concat(
      ...e.map((t) => K(t) ? fs(t) : t)
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
    return js(this, "pop");
  },
  push(...e) {
    return js(this, "push", e);
  },
  reduce(e, ...t) {
    return ua(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ua(this, "reduceRight", e, t);
  },
  shift() {
    return js(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ln(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return js(this, "splice", e);
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
    return js(this, "unshift", e);
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
const yp = Array.prototype;
function ln(e, t, n, s, o, i) {
  const r = $i(e), l = r !== e && !tt(e), a = r[t];
  if (a !== yp[t]) {
    const u = a.apply(e, i);
    return l ? We(u) : u;
  }
  let c = n;
  r !== e && (l ? c = function(u, h) {
    return n.call(this, We(u), h, e);
  } : n.length > 2 && (c = function(u, h) {
    return n.call(this, u, h, e);
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
  je(s, "iterate", co);
  const o = s[t](...n);
  return (o === -1 || o === !1) && xs(n[0]) ? (n[0] = ae(n[0]), s[t](...n)) : o;
}
function js(e, t, n = []) {
  qt(), al();
  const s = ae(e)[t].apply(e, n);
  return cl(), zt(), s;
}
const bp = /* @__PURE__ */ qe("__proto__,__v_isRef,__isVue"), Kc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt)
);
function _p(e) {
  bt(e) || (e = String(e));
  const t = ae(this);
  return je(t, "has", e), t.hasOwnProperty(e);
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
    const r = K(t);
    if (!o) {
      let a;
      if (r && (a = vp[n]))
        return a;
      if (n === "hasOwnProperty")
        return _p;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $e(t) ? t : s
    );
    return (bt(n) ? Kc.has(n) : bp(n)) || (o || je(t, "get", n), i) ? l : $e(l) ? r && ol(n) ? l : l.value : me(l) ? o ? Ii(l) : Ns(l) : l;
  }
}
class Gc extends Wc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Kt(i);
      if (!tt(s) && !Kt(s) && (i = ae(i), s = ae(s)), !K(t) && $e(i) && !$e(s))
        return a ? !1 : (i.value = s, !0);
    }
    const r = K(t) && ol(n) ? Number(n) < t.length : ge(t, n), l = Reflect.set(
      t,
      n,
      s,
      $e(t) ? t : o
    );
    return t === ae(o) && (r ? at(s, i) && en(t, "set", n, s, i) : en(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ge(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && en(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!bt(n) || !Kc.has(n)) && je(t, "has", n), s;
  }
  ownKeys(t) {
    return je(
      t,
      "iterate",
      K(t) ? "length" : Yn
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
const Ep = /* @__PURE__ */ new Gc(), wp = /* @__PURE__ */ new Yc(), Np = /* @__PURE__ */ new Gc(!0), xp = /* @__PURE__ */ new Yc(!0), wr = (e) => e, $o = (e) => Reflect.getPrototypeOf(e);
function Sp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = ae(o), r = Gn(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, c = o[e](...s), d = n ? wr : t ? si : We;
    return !t && je(
      i,
      "iterate",
      a ? Er : Yn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: h } = c.next();
        return h ? { value: u, done: h } : {
          value: l ? [d(u[0]), d(u[1])] : d(u),
          done: h
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
function Cp(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = ae(i), l = ae(o);
      e || (at(o, l) && je(r, "get", o), je(r, "get", l));
      const { has: a } = $o(r), c = t ? wr : e ? si : We;
      if (a.call(r, o))
        return c(i.get(o));
      if (a.call(r, l))
        return c(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && je(ae(o), "iterate", Yn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, r = ae(i), l = ae(o);
      return e || (at(o, l) && je(r, "has", o), je(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = ae(l), c = t ? wr : e ? si : We;
      return !e && je(a, "iterate", Yn), l.forEach((d, u) => o.call(i, c(d), c(u), r));
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
        !t && !tt(o) && !Kt(o) && (o = ae(o));
        const i = ae(this);
        return $o(i).has.call(i, o) || (i.add(o), en(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !tt(i) && !Kt(i) && (i = ae(i));
        const r = ae(this), { has: l, get: a } = $o(r);
        let c = l.call(r, o);
        c ? be.NODE_ENV !== "production" && da(r, l, o) : (o = ae(o), c = l.call(r, o));
        const d = a.call(r, o);
        return r.set(o, i), c ? at(i, d) && en(r, "set", o, i, d) : en(r, "add", o, i), this;
      },
      delete(o) {
        const i = ae(this), { has: r, get: l } = $o(i);
        let a = r.call(i, o);
        a ? be.NODE_ENV !== "production" && da(i, r, o) : (o = ae(o), a = r.call(i, o));
        const c = l ? l.call(i, o) : void 0, d = i.delete(o);
        return a && en(i, "delete", o, void 0, c), d;
      },
      clear() {
        const o = ae(this), i = o.size !== 0, r = be.NODE_ENV !== "production" ? Gn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && en(
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
    n[o] = Sp(o, e, t);
  }), n;
}
function Ai(e, t) {
  const n = Cp(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
    o,
    i
  );
}
const kp = {
  get: /* @__PURE__ */ Ai(!1, !1)
}, Op = {
  get: /* @__PURE__ */ Ai(!1, !0)
}, Tp = {
  get: /* @__PURE__ */ Ai(!0, !1)
}, Dp = {
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
function Vp(e) {
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
function $p(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vp(sl(e));
}
function Ns(e) {
  return Kt(e) ? e : Mi(
    e,
    !1,
    Ep,
    kp,
    Jc
  );
}
function eu(e) {
  return Mi(
    e,
    !1,
    Np,
    Op,
    Xc
  );
}
function Ii(e) {
  return Mi(
    e,
    !0,
    wp,
    Tp,
    Qc
  );
}
function Lt(e) {
  return Mi(
    e,
    !0,
    xp,
    Dp,
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
  const i = $p(e);
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
  return Kt(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Kt(e) {
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
  return !ge(e, "__v_skip") && Object.isExtensible(e) && ts(e, "__v_skip", !0), e;
}
const We = (e) => me(e) ? Ns(e) : e, si = (e) => me(e) ? Ii(e) : e;
function $e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function q(e) {
  return su(e, !1);
}
function nu(e) {
  return su(e, !0);
}
function su(e, t) {
  return $e(e) ? e : new Ap(e, t);
}
class Ap {
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
    const n = this._rawValue, s = this.__v_isShallow || tt(t) || Kt(t);
    t = s ? t : ae(t), at(t, n) && (this._rawValue = t, this._value = s ? t : We(t), be.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Ip(e) {
  e.dep && (be.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function No(e) {
  return $e(e) ? e.value : e;
}
function Mp(e) {
  return oe(e) ? e() : No(e);
}
const Pp = {
  get: (e, t, n) => t === "__v_raw" ? e : No(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return $e(o) && !$e(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function dl(e) {
  return hn(e) ? e : new Proxy(e, Pp);
}
class Rp {
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
  return new Rp(e);
}
function Lp(e) {
  be.NODE_ENV !== "production" && !xs(e) && Vt("toRefs() expects a reactive object but received a plain one.");
  const t = K(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = iu(e, n);
  return t;
}
class Fp {
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
    return gp(ae(this._object), this._key);
  }
}
class Bp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function jp(e, t, n) {
  return $e(e) ? e : oe(e) ? new Bp(e) : me(e) && arguments.length > 1 ? iu(e, t, n) : q(e);
}
function iu(e, t, n) {
  const s = e[t];
  return $e(s) ? s : new Fp(e, t, n);
}
class Hp {
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
function Up(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const i = new Hp(s, o, n);
  return be.NODE_ENV !== "production" && t && !n && (i.onTrack = t.onTrack, i.onTrigger = t.onTrigger), i;
}
const qp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, zp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Io = {}, oi = /* @__PURE__ */ new WeakMap();
let Nn;
function Kp() {
  return Nn;
}
function ru(e, t = !1, n = Nn) {
  if (n) {
    let s = oi.get(n);
    s || oi.set(n, s = []), s.push(e);
  } else be.NODE_ENV !== "production" && !t && Vt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Wp(e, t, n = fe) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, c = (E) => {
    (n.onWarn || Vt)(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (E) => o ? E : tt(E) || o === !1 || o === 0 ? fn(E, 1) : fn(E);
  let u, h, m, b, g = !1, D = !1;
  if ($e(e) ? (h = () => e.value, g = tt(e)) : hn(e) ? (h = () => d(e), g = !0) : K(e) ? (D = !0, g = e.some((E) => hn(E) || tt(E)), h = () => e.map((E) => {
    if ($e(E))
      return E.value;
    if (hn(E))
      return d(E);
    if (oe(E))
      return a ? a(E, 2) : E();
    be.NODE_ENV !== "production" && c(E);
  })) : oe(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      qt();
      try {
        m();
      } finally {
        zt();
      }
    }
    const E = Nn;
    Nn = u;
    try {
      return a ? a(e, 3, [b]) : e(b);
    } finally {
      Nn = E;
    }
  } : (h = Oe, be.NODE_ENV !== "production" && c(e)), t && o) {
    const E = h, $ = o === !0 ? 1 / 0 : o;
    h = () => fn(E(), $);
  }
  const k = ll(), _ = () => {
    u.stop(), k && k.active && nl(k.effects, u);
  };
  if (i && t) {
    const E = t;
    t = (...$) => {
      E(...$), _();
    };
  }
  let f = D ? new Array(e.length).fill(Io) : Io;
  const x = (E) => {
    if (!(!(u.flags & 1) || !u.dirty && !E))
      if (t) {
        const $ = u.run();
        if (o || g || (D ? $.some((P, N) => at(P, f[N])) : at($, f))) {
          m && m();
          const P = Nn;
          Nn = u;
          try {
            const N = [
              $,
              // pass undefined as the old value when it's changed for the first time
              f === Io ? void 0 : D && f[0] === Io ? [] : f,
              b
            ];
            f = $, a ? a(t, 3, N) : (
              // @ts-expect-error
              t(...N)
            );
          } finally {
            Nn = P;
          }
        }
      } else
        u.run();
  };
  return l && l(x), u = new lo(h), u.scheduler = r ? () => r(x, !1) : x, b = (E) => ru(E, !1, u), m = u.onStop = () => {
    const E = oi.get(u);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const $ of E) $();
      oi.delete(u);
    }
  }, be.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? x(!0) : f = u.run() : r ? r(x.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function fn(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, $e(e))
    fn(e.value, t, n);
  else if (K(e))
    for (let s = 0; s < e.length; s++)
      fn(e[s], t, n);
  else if (ls(e) || Gn(e))
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
var w = {};
const Jn = [];
function vs(e) {
  Jn.push(e);
}
function ys() {
  Jn.pop();
}
let rr = !1;
function M(e, ...t) {
  if (rr) return;
  rr = !0, qt();
  const n = Jn.length ? Jn[Jn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Gp();
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
`, ...Yp(o)), console.warn(...i);
  }
  zt(), rr = !1;
}
function Gp() {
  let e = Jn[Jn.length - 1];
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
function Yp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Jp(n));
  }), t;
}
function Jp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Ki(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...Xp(e.props), i] : [o + i];
}
function Xp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...lu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function lu(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : $e(t) ? (t = lu(e, ae(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ae(t), n ? t : [`${e}=`, t]);
}
function fl(e, t) {
  w.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? M(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && M(`${t} is NaN - the duration expression might be incorrect.`));
}
const Qp = {
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
    Rn(o, t, n);
  }
}
function $t(e, t, n, s) {
  if (oe(e)) {
    const o = as(e, t, n, s);
    return o && ki(o) && o.catch((i) => {
      Rn(i, t, n);
    }), o;
  }
  if (K(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push($t(e[i], t, n, s));
    return o;
  } else w.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Rn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = w.NODE_ENV !== "production" ? Pi[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      qt(), as(i, null, 10, [
        e,
        a,
        c
      ]), zt();
      return;
    }
  }
  Zp(e, n, o, s, r);
}
function Zp(e, t, n, s = !0, o = !1) {
  if (w.NODE_ENV !== "production") {
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
const ct = [];
let Yt = -1;
const bs = [];
let xn = null, ms = 0;
const au = /* @__PURE__ */ Promise.resolve();
let ii = null;
const eh = 100;
function xo(e) {
  const t = ii || au;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function th(e) {
  let t = Yt + 1, n = ct.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ct[s], i = uo(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ri(e) {
  if (!(e.flags & 1)) {
    const t = uo(e), n = ct[ct.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= uo(n) ? ct.push(e) : ct.splice(th(t), 0, e), e.flags |= 1, cu();
  }
}
function cu() {
  ii || (ii = au.then(uu));
}
function Ss(e) {
  K(e) ? bs.push(...e) : xn && e.id === -1 ? xn.splice(ms + 1, 0, e) : e.flags & 1 || (bs.push(e), e.flags |= 1), cu();
}
function fa(e, t, n = Yt + 1) {
  for (w.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ct.length; n++) {
    const s = ct[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || w.NODE_ENV !== "production" && pl(t, s))
        continue;
      ct.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
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
    for (xn = t, w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ms = 0; ms < xn.length; ms++) {
      const n = xn[ms];
      w.NODE_ENV !== "production" && pl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xn = null, ms = 0;
  }
}
const uo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uu(e) {
  w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = w.NODE_ENV !== "production" ? (n) => pl(e, n) : Oe;
  try {
    for (Yt = 0; Yt < ct.length; Yt++) {
      const n = ct[Yt];
      if (n && !(n.flags & 8)) {
        if (w.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), as(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Yt < ct.length; Yt++) {
      const n = ct[Yt];
      n && (n.flags &= -2);
    }
    Yt = -1, ct.length = 0, ri(e), ii = null, (ct.length || bs.length) && uu(e);
  }
}
function pl(e, t) {
  const n = e.get(t) || 0;
  if (n > eh) {
    const s = t.i, o = s && Ts(s.type);
    return Rn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ft = !1;
const qo = /* @__PURE__ */ new Map();
w.NODE_ENV !== "production" && (wo().__VUE_HMR_RUNTIME__ = {
  createRecord: lr(du),
  rerender: lr(oh),
  reload: lr(ih)
});
const ns = /* @__PURE__ */ new Map();
function nh(e) {
  const t = e.type.__hmrId;
  let n = ns.get(t);
  n || (du(t, e.type), n = ns.get(t)), n.instances.add(e);
}
function sh(e) {
  ns.get(e.type.__hmrId).instances.delete(e);
}
function du(e, t) {
  return ns.has(e) ? !1 : (ns.set(e, {
    initialDef: li(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function li(e) {
  return bd(e) ? e.__vccOpts : e;
}
function oh(e, t) {
  const n = ns.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, li(s.type).render = t), s.renderCache = [], Ft = !0, s.update(), Ft = !1;
  }));
}
function ih(e, t) {
  const n = ns.get(e);
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
let Pt, Ks = [], Nr = !1;
function So(e, ...t) {
  Pt ? Pt.emit(e, ...t) : Nr || Ks.push({ event: e, args: t });
}
function hl(e, t) {
  var n, s;
  Pt = e, Pt ? (Pt.enabled = !0, Ks.forEach(({ event: o, args: i }) => Pt.emit(o, ...i)), Ks = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    hl(i, t);
  }), setTimeout(() => {
    Pt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Nr = !0, Ks = []);
  }, 3e3)) : (Nr = !0, Ks = []);
}
function rh(e, t) {
  So("app:init", e, t, {
    Fragment: ce,
    Text: sn,
    Comment: Te,
    Static: An
  });
}
function lh(e) {
  So("app:unmount", e);
}
const xr = /* @__PURE__ */ ml(
  "component:added"
  /* COMPONENT_ADDED */
), fu = /* @__PURE__ */ ml(
  "component:updated"
  /* COMPONENT_UPDATED */
), ah = /* @__PURE__ */ ml(
  "component:removed"
  /* COMPONENT_REMOVED */
), ch = (e) => {
  Pt && typeof Pt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Pt.cleanupBuffer(e) && ah(e);
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
const uh = /* @__PURE__ */ pu(
  "perf:start"
  /* PERFORMANCE_START */
), dh = /* @__PURE__ */ pu(
  "perf:end"
  /* PERFORMANCE_END */
);
function pu(e) {
  return (t, n, s) => {
    So(e, t.appContext.app, t.uid, t, n, s);
  };
}
function fh(e, t, n) {
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
function ph(e) {
  Li = e;
}
function hh() {
  Li = null;
}
const mh = (e) => Ge;
function Ge(e, t = Re, n) {
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
    return w.NODE_ENV !== "production" && fu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function hu(e) {
  Tc(e) && M("Do not use built-in directive ids as custom directive id: " + e);
}
function wt(e, t) {
  if (Re === null)
    return w.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), e;
  const n = ko(Re), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = fe] = t[o];
    i && (oe(i) && (i = {
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
function Xt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (qt(), $t(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), zt());
  }
}
const mu = Symbol("_vte"), gu = (e) => e.__isTeleport, Xn = (e) => e && (e.disabled || e.disabled === ""), ha = (e) => e && (e.defer || e.defer === ""), ma = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ga = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Sr = (e, t) => {
  const n = e && e.to;
  if (re(n))
    if (t) {
      const s = t(n);
      return w.NODE_ENV !== "production" && !s && !Xn(e) && M(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return w.NODE_ENV !== "production" && M(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return w.NODE_ENV !== "production" && !n && !Xn(e) && M(`Invalid Teleport target: ${n}`), n;
}, vu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    const {
      mc: d,
      pc: u,
      pbc: h,
      o: { insert: m, querySelector: b, createText: g, createComment: D }
    } = c, k = Xn(t.props);
    let { shapeFlag: _, children: f, dynamicChildren: x } = t;
    if (w.NODE_ENV !== "production" && Ft && (a = !1, x = null), e == null) {
      const E = t.el = w.NODE_ENV !== "production" ? D("teleport start") : g(""), $ = t.anchor = w.NODE_ENV !== "production" ? D("teleport end") : g("");
      m(E, n, s), m($, n, s);
      const P = (v, C) => {
        _ & 16 && (o && o.isCE && (o.ce._teleportTarget = v), d(
          f,
          v,
          C,
          o,
          i,
          r,
          l,
          a
        ));
      }, N = () => {
        const v = t.target = Sr(t.props, b), C = yu(v, t, g, m);
        v ? (r !== "svg" && ma(v) ? r = "svg" : r !== "mathml" && ga(v) && (r = "mathml"), k || (P(v, C), zo(t, !1))) : w.NODE_ENV !== "production" && !k && M(
          "Invalid Teleport target on mount:",
          v,
          `(${typeof v})`
        );
      };
      k && (P(n, $), zo(t, !0)), ha(t.props) ? (t.el.__isMounted = !1, Be(() => {
        N(), delete t.el.__isMounted;
      }, i)) : N();
    } else {
      if (ha(t.props) && e.el.__isMounted === !1) {
        Be(() => {
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
      const E = t.anchor = e.anchor, $ = t.target = e.target, P = t.targetAnchor = e.targetAnchor, N = Xn(e.props), v = N ? n : $, C = N ? E : P;
      if (r === "svg" || ma($) ? r = "svg" : (r === "mathml" || ga($)) && (r = "mathml"), x ? (h(
        e.dynamicChildren,
        x,
        v,
        o,
        i,
        r,
        l
      ), no(e, t, w.NODE_ENV === "production")) : a || u(
        e,
        t,
        v,
        C,
        o,
        i,
        r,
        l,
        !1
      ), k)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Mo(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const A = t.target = Sr(
          t.props,
          b
        );
        A ? Mo(
          t,
          A,
          null,
          c,
          0
        ) : w.NODE_ENV !== "production" && M(
          "Invalid Teleport target on update:",
          $,
          `(${typeof $})`
        );
      } else N && Mo(
        t,
        $,
        P,
        c,
        1
      );
      zo(t, k);
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
      props: h
    } = e;
    if (u && (o(c), o(d)), i && o(a), r & 16) {
      const m = i || !Xn(h);
      for (let b = 0; b < l.length; b++) {
        const g = l[b];
        s(
          g,
          t,
          n,
          m,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: Mo,
  hydrate: gh
};
function Mo(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: c, props: d } = e, u = i === 2;
  if (u && s(r, t, n), (!u || Xn(d)) && a & 16)
    for (let h = 0; h < c.length; h++)
      o(
        c[h],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function gh(e, t, n, s, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: c, createText: d }
}, u) {
  const h = t.target = Sr(
    t.props,
    a
  );
  if (h) {
    const m = Xn(t.props), b = h._lpa || h.firstChild;
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
        ), t.targetStart = b, t.targetAnchor = b && r(b);
      else {
        t.anchor = r(e);
        let g = b;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor")
              t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, h._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          g = r(g);
        }
        t.targetAnchor || yu(h, t, d, c), u(
          b && r(b),
          t,
          h,
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
  }), Hi(() => {
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
}, vh = {
  name: "BaseTransition",
  props: vl,
  setup(e, { slots: t }) {
    const n = ot(), s = gl();
    return () => {
      const o = t.default && Fi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = _u(o), r = ae(e), { mode: l } = r;
      if (w.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && M(`invalid <transition> mode: ${l}`), s.isLeaving)
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
        l === "in-out" && a.type !== Te ? u.delayLeave = (h, m, b) => {
          const g = wu(
            s,
            d
          );
          g[String(d.key)] = d, h[Sn] = () => {
            m(), h[Sn] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            b(), delete c.delayedLeave, d = void 0;
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
        if (w.NODE_ENV !== "production" && n) {
          M(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, w.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Eu = vh;
function wu(e, t) {
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
    onBeforeLeave: h,
    onLeave: m,
    onAfterLeave: b,
    onLeaveCancelled: g,
    onBeforeAppear: D,
    onAppear: k,
    onAfterAppear: _,
    onAppearCancelled: f
  } = t, x = String(e.key), E = wu(n, e), $ = (v, C) => {
    v && $t(
      v,
      s,
      9,
      C
    );
  }, P = (v, C) => {
    const A = C[1];
    $(v, C), K(v) ? v.every((V) => V.length <= 1) && A() : v.length <= 1 && A();
  }, N = {
    mode: r,
    persisted: l,
    beforeEnter(v) {
      let C = a;
      if (!n.isMounted)
        if (i)
          C = D || a;
        else
          return;
      v[Sn] && v[Sn](
        !0
        /* cancelled */
      );
      const A = E[x];
      A && Rt(e, A) && A.el[Sn] && A.el[Sn](), $(C, [v]);
    },
    enter(v) {
      let C = c, A = d, V = u;
      if (!n.isMounted)
        if (i)
          C = k || c, A = _ || d, V = f || u;
        else
          return;
      let R = !1;
      const J = v[Po] = (ee) => {
        R || (R = !0, ee ? $(V, [v]) : $(A, [v]), N.delayedLeave && N.delayedLeave(), v[Po] = void 0);
      };
      C ? P(C, [v, J]) : J();
    },
    leave(v, C) {
      const A = String(e.key);
      if (v[Po] && v[Po](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return C();
      $(h, [v]);
      let V = !1;
      const R = v[Sn] = (J) => {
        V || (V = !0, C(), J ? $(g, [v]) : $(b, [v]), v[Sn] = void 0, E[A] === e && delete E[A]);
      };
      E[A] = e, m ? P(m, [v, R]) : R();
    },
    clone(v) {
      const C = Cs(
        v,
        t,
        n,
        s,
        o
      );
      return o && o(C), C;
    }
  };
  return N;
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
    if (t & 32 && oe(n.default))
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
    r.type === ce ? (r.patchFlag & 128 && o++, s = s.concat(
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
  return oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function yh() {
  const e = ot();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (w.NODE_ENV !== "production" && M(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function bl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Nu = /* @__PURE__ */ new WeakSet();
function bh(e) {
  const t = ot(), n = nu(null);
  if (t) {
    const o = t.refs === fe ? t.refs = {} : t.refs;
    let i;
    w.NODE_ENV !== "production" && (i = Object.getOwnPropertyDescriptor(o, e)) && !i.configurable ? M(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  } else w.NODE_ENV !== "production" && M(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = w.NODE_ENV !== "production" ? Ii(n) : n;
  return w.NODE_ENV !== "production" && Nu.add(s), s;
}
function _s(e, t, n, s, o = !1) {
  if (K(e)) {
    e.forEach(
      (b, g) => _s(
        b,
        t && (K(t) ? t[g] : t),
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
  if (w.NODE_ENV !== "production" && !l) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = l.refs === fe ? l.refs = {} : l.refs, u = l.setupState, h = ae(u), m = u === fe ? () => !1 : (b) => w.NODE_ENV !== "production" && (ge(h, b) && !$e(h[b]) && M(
    `Template ref "${b}" used on a non-ref value. It will not work in the production build.`
  ), Nu.has(h[b])) ? !1 : ge(h, b);
  if (c != null && c !== a && (re(c) ? (d[c] = null, m(c) && (u[c] = null)) : $e(c) && (c.value = null)), oe(a))
    as(a, l, 12, [r, d]);
  else {
    const b = re(a), g = $e(a);
    if (b || g) {
      const D = () => {
        if (e.f) {
          const k = b ? m(a) ? u[a] : d[a] : a.value;
          o ? K(k) && nl(k, i) : K(k) ? k.includes(i) || k.push(i) : b ? (d[a] = [i], m(a) && (u[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else b ? (d[a] = r, m(a) && (u[a] = r)) : g ? (a.value = r, e.k && (d[e.k] = r)) : w.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? (D.id = -1, Be(D, n)) : D();
    } else w.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ya = !1;
const Fn = () => {
  ya || (console.error("Hydration completed but contains mismatches."), ya = !0);
}, _h = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Eh = (e) => e.namespaceURI.includes("MathML"), Ro = (e) => {
  if (e.nodeType === 1) {
    if (_h(e)) return "svg";
    if (Eh(e)) return "mathml";
  }
}, qn = (e) => e.nodeType === 8;
function wh(e) {
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
  } = e, d = (f, x) => {
    if (!x.hasChildNodes()) {
      w.NODE_ENV !== "production" && M(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, f, x), ri(), x._vnode = f;
      return;
    }
    u(x.firstChild, f, null, null, null), ri(), x._vnode = f;
  }, u = (f, x, E, $, P, N = !1) => {
    N = N || !!x.dynamicChildren;
    const v = qn(f) && f.data === "[", C = () => g(
      f,
      x,
      E,
      $,
      P,
      v
    ), { type: A, ref: V, shapeFlag: R, patchFlag: J } = x;
    let ee = f.nodeType;
    x.el = f, w.NODE_ENV !== "production" && (ts(f, "__vnode", x, !0), ts(f, "__vueParentComponent", E, !0)), J === -2 && (N = !1, x.dynamicChildren = null);
    let Z = null;
    switch (A) {
      case sn:
        ee !== 3 ? x.children === "" ? (a(x.el = o(""), r(f), f), Z = f) : Z = C() : (f.data !== x.children && (w.NODE_ENV !== "production" && M(
          "Hydration text mismatch in",
          f.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            f.data
          )}
  - expected on client: ${JSON.stringify(x.children)}`
        ), Fn(), f.data = x.children), Z = i(f));
        break;
      case Te:
        _(f) ? (Z = i(f), k(
          x.el = f.content.firstChild,
          f,
          E
        )) : ee !== 8 || v ? Z = C() : Z = i(f);
        break;
      case An:
        if (v && (f = i(f), ee = f.nodeType), ee === 1 || ee === 3) {
          Z = f;
          const se = !x.children.length;
          for (let Q = 0; Q < x.staticCount; Q++)
            se && (x.children += Z.nodeType === 1 ? Z.outerHTML : Z.data), Q === x.staticCount - 1 && (x.anchor = Z), Z = i(Z);
          return v ? i(Z) : Z;
        } else
          C();
        break;
      case ce:
        v ? Z = b(
          f,
          x,
          E,
          $,
          P,
          N
        ) : Z = C();
        break;
      default:
        if (R & 1)
          (ee !== 1 || x.type.toLowerCase() !== f.tagName.toLowerCase()) && !_(f) ? Z = C() : Z = h(
            f,
            x,
            E,
            $,
            P,
            N
          );
        else if (R & 6) {
          x.slotScopeIds = P;
          const se = r(f);
          if (v ? Z = D(f) : qn(f) && f.data === "teleport start" ? Z = D(f, f.data, "teleport end") : Z = i(f), t(
            x,
            se,
            null,
            E,
            $,
            Ro(se),
            N
          ), $n(x) && !x.type.__asyncResolved) {
            let Q;
            v ? (Q = pe(ce), Q.anchor = Z ? Z.previousSibling : se.lastChild) : Q = f.nodeType === 3 ? Le("") : pe("div"), Q.el = f, x.component.subTree = Q;
          }
        } else R & 64 ? ee !== 8 ? Z = C() : Z = x.type.hydrate(
          f,
          x,
          E,
          $,
          P,
          N,
          e,
          m
        ) : R & 128 ? Z = x.type.hydrate(
          f,
          x,
          E,
          $,
          Ro(r(f)),
          P,
          N,
          e,
          u
        ) : w.NODE_ENV !== "production" && M("Invalid HostVNode type:", A, `(${typeof A})`);
    }
    return V != null && _s(V, null, $, x), Z;
  }, h = (f, x, E, $, P, N) => {
    N = N || !!x.dynamicChildren;
    const { type: v, props: C, patchFlag: A, shapeFlag: V, dirs: R, transition: J } = x, ee = v === "input" || v === "option";
    if (w.NODE_ENV !== "production" || ee || A !== -1) {
      R && Xt(x, null, E, "created");
      let Z = !1;
      if (_(f)) {
        Z = Yu(
          null,
          // no need check parentSuspense in hydration
          J
        ) && E && E.vnode.props && E.vnode.props.appear;
        const Q = f.content.firstChild;
        if (Z) {
          const Ee = Q.getAttribute("class");
          Ee && (Q.$cls = Ee), J.beforeEnter(Q);
        }
        k(Q, f, E), x.el = f = Q;
      }
      if (V & 16 && // skip if element has innerHTML / textContent
      !(C && (C.innerHTML || C.textContent))) {
        let Q = m(
          f.firstChild,
          x,
          f,
          E,
          $,
          P,
          N
        ), Ee = !1;
        for (; Q; ) {
          Ws(
            f,
            1
            /* CHILDREN */
          ) || (w.NODE_ENV !== "production" && !Ee && (M(
            "Hydration children mismatch on",
            f,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Ee = !0), Fn());
          const ft = Q;
          Q = Q.nextSibling, l(ft);
        }
      } else if (V & 8) {
        let Q = x.children;
        Q[0] === `
` && (f.tagName === "PRE" || f.tagName === "TEXTAREA") && (Q = Q.slice(1)), f.textContent !== Q && (Ws(
          f,
          0
          /* TEXT */
        ) || (w.NODE_ENV !== "production" && M(
          "Hydration text content mismatch on",
          f,
          `
  - rendered on server: ${f.textContent}
  - expected on client: ${x.children}`
        ), Fn()), f.textContent = x.children);
      }
      if (C) {
        if (w.NODE_ENV !== "production" || ee || !N || A & 48) {
          const Q = f.tagName.includes("-");
          for (const Ee in C)
            w.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(R && R.some((ft) => ft.dir.created)) && Nh(f, Ee, C[Ee], x, E) && Fn(), (ee && (Ee.endsWith("value") || Ee === "indeterminate") || gn(Ee) && !Vn(Ee) || // force hydrate v-bind with .prop modifiers
            Ee[0] === "." || Q) && s(f, Ee, null, C[Ee], void 0, E);
        } else if (C.onClick)
          s(
            f,
            "onClick",
            null,
            C.onClick,
            void 0,
            E
          );
        else if (A & 4 && hn(C.style))
          for (const Q in C.style) C.style[Q];
      }
      let se;
      (se = C && C.onVnodeBeforeMount) && gt(se, E, x), R && Xt(x, null, E, "beforeMount"), ((se = C && C.onVnodeMounted) || R || Z) && id(() => {
        se && gt(se, E, x), Z && J.enter(f), R && Xt(x, null, E, "mounted");
      }, $);
    }
    return f.nextSibling;
  }, m = (f, x, E, $, P, N, v) => {
    v = v || !!x.dynamicChildren;
    const C = x.children, A = C.length;
    let V = !1;
    for (let R = 0; R < A; R++) {
      const J = v ? C[R] : C[R] = ut(C[R]), ee = J.type === sn;
      f ? (ee && !v && R + 1 < A && ut(C[R + 1]).type === sn && (a(
        o(
          f.data.slice(J.children.length)
        ),
        E,
        i(f)
      ), f.data = J.children), f = u(
        f,
        J,
        $,
        P,
        N,
        v
      )) : ee && !J.children ? a(J.el = o(""), E) : (Ws(
        E,
        1
        /* CHILDREN */
      ) || (w.NODE_ENV !== "production" && !V && (M(
        "Hydration children mismatch on",
        E,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), V = !0), Fn()), n(
        null,
        J,
        E,
        null,
        $,
        P,
        Ro(E),
        N
      ));
    }
    return f;
  }, b = (f, x, E, $, P, N) => {
    const { slotScopeIds: v } = x;
    v && (P = P ? P.concat(v) : v);
    const C = r(f), A = m(
      i(f),
      x,
      C,
      E,
      $,
      P,
      N
    );
    return A && qn(A) && A.data === "]" ? i(x.anchor = A) : (Fn(), a(x.anchor = c("]"), C, A), A);
  }, g = (f, x, E, $, P, N) => {
    if (Ws(
      f.parentElement,
      1
      /* CHILDREN */
    ) || (w.NODE_ENV !== "production" && M(
      `Hydration node mismatch:
- rendered on server:`,
      f,
      f.nodeType === 3 ? "(text)" : qn(f) && f.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      x.type
    ), Fn()), x.el = null, N) {
      const A = D(f);
      for (; ; ) {
        const V = i(f);
        if (V && V !== A)
          l(V);
        else
          break;
      }
    }
    const v = i(f), C = r(f);
    return l(f), n(
      null,
      x,
      C,
      v,
      E,
      $,
      Ro(C),
      P
    ), E && (E.vnode.el = x.el, zi(E, x.el)), v;
  }, D = (f, x = "[", E = "]") => {
    let $ = 0;
    for (; f; )
      if (f = i(f), f && qn(f) && (f.data === x && $++, f.data === E)) {
        if ($ === 0)
          return i(f);
        $--;
      }
    return f;
  }, k = (f, x, E) => {
    const $ = x.parentNode;
    $ && $.replaceChild(f, x);
    let P = E;
    for (; P; )
      P.vnode.el === x && (P.vnode.el = P.subTree.el = f), P = P.parent;
  }, _ = (f) => f.nodeType === 1 && f.tagName === "TEMPLATE";
  return [d, u];
}
function Nh(e, t, n, s, o) {
  let i, r, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Ie(n), xh(ba(l || ""), ba(a)) || (i = 2, r = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = re(n) ? n : Xf(dt(n));
    const c = _a(l), d = _a(a);
    if (s.dirs)
      for (const { dir: u, value: h } of s.dirs)
        u.name === "show" && !h && d.set("display", "none");
    o && xu(o, s, d), Sh(c, d) || (i = 3, r = "style");
  } else (e instanceof SVGElement && rp(t) || e instanceof HTMLElement && (aa(t) || ip(t))) && (aa(t) ? (l = e.hasAttribute(t), a = il(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = lp(n) ? String(n) : !1), l !== a && (i = 4, r = t));
  if (i != null && !Ws(e, i)) {
    const c = (h) => h === !1 ? "(not rendered)" : `${r}="${h}"`, d = `Hydration ${Su[i]} mismatch on`, u = `
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
function xh(e, t) {
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
function Sh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function xu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ce && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const i in o) {
      const r = Rc(o[i]);
      n.set(`--${cp(i)}`, r);
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
const Ch = wo().requestIdleCallback || ((e) => setTimeout(e, 1)), kh = wo().cancelIdleCallback || ((e) => clearTimeout(e)), Oh = (e = 1e4) => (t) => {
  const n = Ch(t, { timeout: e });
  return () => kh(n);
};
function Th(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: i, innerWidth: r } = window;
  return (t > 0 && t < i || s > 0 && s < i) && (n > 0 && n < r || o > 0 && o < r);
}
const Dh = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const i of o)
      if (i.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (Th(o))
        return t(), s.disconnect(), !1;
      s.observe(o);
    }
  }), () => s.disconnect();
}, Vh = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, $h = (e = []) => (t, n) => {
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
function Ah(e, t) {
  if (qn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (qn(s))
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
function Ih(e) {
  oe(e) && (e = { loader: e });
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
  const h = () => (u++, c = null, m()), m = () => {
    let b;
    return c || (b = c = t().catch((g) => {
      if (g = g instanceof Error ? g : new Error(String(g)), a)
        return new Promise((D, k) => {
          a(g, () => D(h()), () => k(g), u + 1);
        });
      throw g;
    }).then((g) => {
      if (b !== c && c)
        return c;
      if (w.NODE_ENV !== "production" && !g && M(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), w.NODE_ENV !== "production" && g && !me(g) && !oe(g))
        throw new Error(`Invalid async component load result: ${g}`);
      return d = g, g;
    }));
  };
  return /* @__PURE__ */ yl({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(b, g, D) {
      let k = !1;
      (g.bu || (g.bu = [])).push(() => k = !0);
      const _ = () => {
        if (k) {
          w.NODE_ENV !== "production" && M(
            `Skipping lazy hydration for component '${Ts(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        D();
      }, f = i ? () => {
        const x = i(
          _,
          (E) => Ah(b, E)
        );
        x && (g.bum || (g.bum = [])).push(x);
      } : _;
      d ? f() : m().then(() => !g.isUnmounted && f());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const b = Ue;
      if (bl(b), d)
        return () => cr(d, b);
      const g = (f) => {
        c = null, Rn(
          f,
          b,
          13,
          !s
        );
      };
      if (l && b.suspense || Os)
        return m().then((f) => () => cr(f, b)).catch((f) => (g(f), () => s ? pe(s, {
          error: f
        }) : null));
      const D = q(!1), k = q(), _ = q(!!o);
      return o && setTimeout(() => {
        _.value = !1;
      }, o), r != null && setTimeout(() => {
        if (!D.value && !k.value) {
          const f = new Error(
            `Async component timed out after ${r}ms.`
          );
          g(f), k.value = f;
        }
      }, r), m().then(() => {
        D.value = !0, b.parent && Ls(b.parent.vnode) && b.parent.update();
      }).catch((f) => {
        g(f), k.value = f;
      }), () => {
        if (D.value && d)
          return cr(d, b);
        if (k.value && s)
          return pe(s, {
            error: k.value
          });
        if (n && !_.value)
          return pe(n);
      };
    }
  });
}
function cr(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, r = pe(e, s, o);
  return r.ref = n, r.ce = i, delete t.vnode.ce, r;
}
const Ls = (e) => e.type.__isKeepAlive, Mh = {
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
    const n = ot(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const _ = t.default && t.default();
        return _ && _.length === 1 ? _[0] : _;
      };
    const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    let r = null;
    w.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: d,
        o: { createElement: u }
      }
    } = s, h = u("div");
    s.activate = (_, f, x, E, $) => {
      const P = _.component;
      c(_, f, x, 0, l), a(
        P.vnode,
        _,
        f,
        x,
        P,
        l,
        E,
        _.slotScopeIds,
        $
      ), Be(() => {
        P.isDeactivated = !1, P.a && On(P.a);
        const N = _.props && _.props.onVnodeMounted;
        N && gt(N, P.parent, _);
      }, l), w.NODE_ENV !== "production" && xr(P);
    }, s.deactivate = (_) => {
      const f = _.component;
      di(f.m), di(f.a), c(_, h, null, 1, l), Be(() => {
        f.da && On(f.da);
        const x = _.props && _.props.onVnodeUnmounted;
        x && gt(x, f.parent, _), f.isDeactivated = !0;
      }, l), w.NODE_ENV !== "production" && xr(f), w.NODE_ENV !== "production" && (f.__keepAliveStorageContainer = h);
    };
    function m(_) {
      ur(_), d(_, n, l, !0);
    }
    function b(_) {
      o.forEach((f, x) => {
        const E = Ts(f.type);
        E && !_(E) && g(x);
      });
    }
    function g(_) {
      const f = o.get(_);
      f && (!r || !Rt(f, r)) ? m(f) : r && ur(r), o.delete(_), i.delete(_);
    }
    nn(
      () => [e.include, e.exclude],
      ([_, f]) => {
        _ && b((x) => Gs(_, x)), f && b((x) => !Gs(f, x));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let D = null;
    const k = () => {
      D != null && (pi(n.subTree.type) ? Be(() => {
        o.set(D, Lo(n.subTree));
      }, n.subTree.suspense) : o.set(D, Lo(n.subTree)));
    };
    return Ye(k), ji(k), Hi(() => {
      o.forEach((_) => {
        const { subTree: f, suspense: x } = n, E = Lo(f);
        if (_.type === E.type && _.key === E.key) {
          ur(E);
          const $ = E.component.da;
          $ && Be($, x);
          return;
        }
        m(_);
      });
    }), () => {
      if (D = null, !t.default)
        return r = null;
      const _ = t.default(), f = _[0];
      if (_.length > 1)
        return w.NODE_ENV !== "production" && M("KeepAlive should contain exactly one component child."), r = null, _;
      if (!rn(f) || !(f.shapeFlag & 4) && !(f.shapeFlag & 128))
        return r = null, f;
      let x = Lo(f);
      if (x.type === Te)
        return r = null, x;
      const E = x.type, $ = Ts(
        $n(x) ? x.type.__asyncResolved || {} : E
      ), { include: P, exclude: N, max: v } = e;
      if (P && (!$ || !Gs(P, $)) || N && $ && Gs(N, $))
        return x.shapeFlag &= -257, r = x, f;
      const C = x.key == null ? E : x.key, A = o.get(C);
      return x.el && (x = At(x), f.shapeFlag & 128 && (f.ssContent = x)), D = C, A ? (x.el = A.el, x.component = A.component, x.transition && vn(x, x.transition), x.shapeFlag |= 512, i.delete(C), i.add(C)) : (i.add(C), v && i.size > parseInt(v, 10) && g(i.values().next().value)), x.shapeFlag |= 256, r = x, pi(f.type) ? f : x;
    };
  }
}, Ph = Mh;
function Gs(e, t) {
  return K(e) ? e.some((n) => Gs(n, t)) : re(e) ? e.split(",").includes(t) : Bf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
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
      Ls(o.parent.vnode) && Rh(s, t, n, o), o = o.parent;
  }
}
function Rh(e, t, n, s) {
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
      qt();
      const l = os(n), a = $t(t, n, e, r);
      return l(), zt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (w.NODE_ENV !== "production") {
    const o = Zt(Pi[e].replace(/ hook$/, ""));
    M(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const yn = (e) => (t, n = Ue) => {
  (!Os || e === "sp") && Bi(e, (...s) => t(...s), n);
}, Tu = yn("bm"), Ye = yn("m"), _l = yn(
  "bu"
), ji = yn("u"), Hi = yn(
  "bum"
), It = yn("um"), Du = yn(
  "sp"
), Vu = yn("rtg"), $u = yn("rtc");
function Au(e, t = Ue) {
  Bi("ec", e, t);
}
const ai = "components", Lh = "directives";
function Fh(e, t) {
  return Nl(ai, e, !0, t) || e;
}
const El = Symbol.for("v-ndc");
function wl(e) {
  return re(e) ? Nl(ai, e, !1) || e : e || El;
}
function Bh(e) {
  return Nl(Lh, e);
}
function Nl(e, t, n = !0, s = !1) {
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
      wa(o[e] || i[e], t) || // global registration
      wa(o.appContext[e], t)
    );
    if (!r && s)
      return i;
    if (w.NODE_ENV !== "production" && n && !r) {
      const l = e === ai ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      M(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else w.NODE_ENV !== "production" && M(
    `resolve${on(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function wa(e, t) {
  return e && (e[t] || e[Se(t)] || e[on(Se(t))]);
}
function Ve(e, t, n, s) {
  let o;
  const i = n && n[s], r = K(e);
  if (r || re(e)) {
    const l = r && hn(e);
    let a = !1, c = !1;
    l && (a = !tt(e), c = Kt(e), e = $i(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? c ? si(We(e[d])) : We(e[d]) : e[d],
        d,
        void 0,
        i && i[d]
      );
  } else if (typeof e == "number") {
    w.NODE_ENV !== "production" && !Number.isInteger(e) && M(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
function jh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (K(s))
      for (let o = 0; o < s.length; o++)
        e[s[o].name] = s[o].fn;
    else s && (e[s.name] = s.key ? (...o) => {
      const i = s.fn(...o);
      return i && (i.key = s.key), i;
    } : s.fn);
  }
  return e;
}
function Ln(e, t, n = {}, s, o) {
  if (Re.ce || Re.parent && $n(Re.parent) && Re.parent.ce)
    return t !== "default" && (n.name = t), O(), _t(
      ce,
      null,
      [pe("slot", n, s && s())],
      64
    );
  let i = e[t];
  w.NODE_ENV !== "production" && i && i.length > 1 && (M(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), O();
  const r = i && xl(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, a = _t(
    ce,
    {
      key: (l && !bt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && s ? "_fb" : "")
    },
    r || (s ? s() : []),
    r && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function xl(e) {
  return e.some((t) => rn(t) ? !(t.type === Te || t.type === ce && !xl(t.children)) : !0) ? e : null;
}
function Hh(e, t) {
  const n = {};
  if (w.NODE_ENV !== "production" && !me(e))
    return M("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Zt(s)] = e[s];
  return n;
}
const Cr = (e) => e ? hd(e) ? ko(e) : Cr(e.parent) : null, Qn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => w.NODE_ENV !== "production" ? Lt(e.props) : e.props,
    $attrs: (e) => w.NODE_ENV !== "production" ? Lt(e.attrs) : e.attrs,
    $slots: (e) => w.NODE_ENV !== "production" ? Lt(e.slots) : e.slots,
    $refs: (e) => w.NODE_ENV !== "production" ? Lt(e.refs) : e.refs,
    $parent: (e) => Cr(e.parent),
    $root: (e) => Cr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ri(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xo.bind(e.proxy)),
    $watch: (e) => $m.bind(e)
  })
), Sl = (e) => e === "_" || e === "$", dr = (e, t) => e !== fe && !e.__isScriptSetup && ge(e, t), eo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (w.NODE_ENV !== "production" && t === "__isVue")
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
    const d = Qn[t];
    let u, h;
    if (d)
      return t === "$attrs" ? (je(e.attrs, "get", ""), w.NODE_ENV !== "production" && fi()) : w.NODE_ENV !== "production" && t === "$slots" && je(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== fe && ge(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, ge(h, t)
    )
      return h[t];
    w.NODE_ENV !== "production" && Re && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
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
    return dr(o, t) ? (o[t] = n, !0) : w.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (M(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== fe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (w.NODE_ENV !== "production" && M(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w.NODE_ENV !== "production" && M(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (w.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i }
  }, r) {
    let l;
    return !!n[r] || e !== fe && ge(e, r) || dr(t, r) || (l = i[0]) && ge(l, r) || ge(s, r) || ge(Qn, r) || ge(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
w.NODE_ENV !== "production" && (eo.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Uh = /* @__PURE__ */ de({}, eo, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return eo.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Kf(t);
    return w.NODE_ENV !== "production" && !n && eo.has(e, t) && M(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function qh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Qn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Qn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Oe
    });
  }), t;
}
function zh(e) {
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
function Kh(e) {
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
function Wh() {
  return w.NODE_ENV !== "production" && us("defineProps"), null;
}
function Gh() {
  return w.NODE_ENV !== "production" && us("defineEmits"), null;
}
function Yh(e) {
  w.NODE_ENV !== "production" && us("defineExpose");
}
function Jh(e) {
  w.NODE_ENV !== "production" && us("defineOptions");
}
function Xh() {
  return w.NODE_ENV !== "production" && us("defineSlots"), null;
}
function Qh() {
  w.NODE_ENV !== "production" && us("defineModel");
}
function Zh(e, t) {
  return w.NODE_ENV !== "production" && us("withDefaults"), null;
}
function em() {
  return Iu("useSlots").slots;
}
function tm() {
  return Iu("useAttrs").attrs;
}
function Iu(e) {
  const t = ot();
  return w.NODE_ENV !== "production" && !t && M(`${e}() called without active instance.`), t.setupContext || (t.setupContext = yd(t));
}
function po(e) {
  return K(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function nm(e, t) {
  const n = po(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? K(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : w.NODE_ENV !== "production" && M(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function sm(e, t) {
  return !e || !t ? e || t : K(e) && K(t) ? e.concat(t) : de({}, po(e), po(t));
}
function om(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function im(e) {
  const t = ot();
  w.NODE_ENV !== "production" && !t && M(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Pr(), ki(n) && (n = n.catch((s) => {
    throw os(t), s;
  })), [n, () => os(t)];
}
function rm() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? M(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let kr = !0;
function lm(e) {
  const t = Cl(e), n = e.proxy, s = e.ctx;
  kr = !1, t.beforeCreate && Na(t.beforeCreate, e, "bc");
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
    mounted: h,
    beforeUpdate: m,
    updated: b,
    activated: g,
    deactivated: D,
    beforeDestroy: k,
    beforeUnmount: _,
    destroyed: f,
    unmounted: x,
    render: E,
    renderTracked: $,
    renderTriggered: P,
    errorCaptured: N,
    serverPrefetch: v,
    // public API
    expose: C,
    inheritAttrs: A,
    // assets
    components: V,
    directives: R,
    filters: J
  } = t, ee = w.NODE_ENV !== "production" ? rm() : null;
  if (w.NODE_ENV !== "production") {
    const [se] = e.propsOptions;
    if (se)
      for (const Q in se)
        ee("Props", Q);
  }
  if (c && am(c, s, ee), r)
    for (const se in r) {
      const Q = r[se];
      oe(Q) ? (w.NODE_ENV !== "production" ? Object.defineProperty(s, se, {
        value: Q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[se] = Q.bind(n), w.NODE_ENV !== "production" && ee("Methods", se)) : w.NODE_ENV !== "production" && M(
        `Method "${se}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    w.NODE_ENV !== "production" && !oe(o) && M(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const se = o.call(n, n);
    if (w.NODE_ENV !== "production" && ki(se) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(se))
      w.NODE_ENV !== "production" && M("data() should return an object.");
    else if (e.data = Ns(se), w.NODE_ENV !== "production")
      for (const Q in se)
        ee("Data", Q), Sl(Q[0]) || Object.defineProperty(s, Q, {
          configurable: !0,
          enumerable: !0,
          get: () => se[Q],
          set: Oe
        });
  }
  if (kr = !0, i)
    for (const se in i) {
      const Q = i[se], Ee = oe(Q) ? Q.bind(n, n) : oe(Q.get) ? Q.get.bind(n, n) : Oe;
      w.NODE_ENV !== "production" && Ee === Oe && M(`Computed property "${se}" has no getter.`);
      const ft = !oe(Q) && oe(Q.set) ? Q.set.bind(n) : w.NODE_ENV !== "production" ? () => {
        M(
          `Write operation failed: computed property "${se}" is readonly.`
        );
      } : Oe, Ct = te({
        get: Ee,
        set: ft
      });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (kt) => Ct.value = kt
      }), w.NODE_ENV !== "production" && ee("Computed", se);
    }
  if (l)
    for (const se in l)
      Mu(l[se], s, n, se);
  if (a) {
    const se = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(se).forEach((Q) => {
      Ru(Q, se[Q]);
    });
  }
  d && Na(d, e, "c");
  function Z(se, Q) {
    K(Q) ? Q.forEach((Ee) => se(Ee.bind(n))) : Q && se(Q.bind(n));
  }
  if (Z(Tu, u), Z(Ye, h), Z(_l, m), Z(ji, b), Z(Cu, g), Z(ku, D), Z(Au, N), Z($u, $), Z(Vu, P), Z(Hi, _), Z(It, x), Z(Du, v), K(C))
    if (C.length) {
      const se = e.exposed || (e.exposed = {});
      C.forEach((Q) => {
        Object.defineProperty(se, Q, {
          get: () => n[Q],
          set: (Ee) => n[Q] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Oe && (e.render = E), A != null && (e.inheritAttrs = A), V && (e.components = V), R && (e.directives = R), v && bl(e);
}
function am(e, t, n = Oe) {
  K(e) && (e = Or(e));
  for (const s in e) {
    const o = e[s];
    let i;
    me(o) ? "default" in o ? i = to(
      o.from || s,
      o.default,
      !0
    ) : i = to(o.from || s) : i = to(o), $e(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i, w.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Na(e, t, n) {
  $t(
    K(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Mu(e, t, n, s) {
  let o = s.includes(".") ? ed(n, s) : () => n[s];
  if (re(e)) {
    const i = t[e];
    oe(i) ? nn(o, i) : w.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e}"`, i);
  } else if (oe(e))
    nn(o, e.bind(n));
  else if (me(e))
    if (K(e))
      e.forEach((i) => Mu(i, t, n, s));
    else {
      const i = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(i) ? nn(o, i, e) : w.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else w.NODE_ENV !== "production" && M(`Invalid watch option: "${s}"`, e);
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
      w.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = cm[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const cm = {
  data: xa,
  props: Sa,
  emits: Sa,
  // objects
  methods: Ys,
  computed: Ys,
  // lifecycle
  beforeCreate: lt,
  created: lt,
  beforeMount: lt,
  mounted: lt,
  beforeUpdate: lt,
  updated: lt,
  beforeDestroy: lt,
  beforeUnmount: lt,
  destroyed: lt,
  unmounted: lt,
  activated: lt,
  deactivated: lt,
  errorCaptured: lt,
  serverPrefetch: lt,
  // assets
  components: Ys,
  directives: Ys,
  // watch
  watch: dm,
  // provide / inject
  provide: xa,
  inject: um
};
function xa(e, t) {
  return t ? e ? function() {
    return de(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function um(e, t) {
  return Ys(Or(e), Or(t));
}
function Or(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function lt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ys(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sa(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    po(e),
    po(t ?? {})
  ) : t;
}
function dm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = lt(e[s], t[s]);
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
let fm = 0;
function pm(e, t) {
  return function(s, o = null) {
    oe(s) || (s = de({}, s)), o != null && !me(o) && (w.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), o = null);
    const i = Pu(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: fm++,
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
        w.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return r.has(d) ? w.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : d && oe(d.install) ? (r.add(d), d.install(c, ...u)) : oe(d) ? (r.add(d), d(c, ...u)) : w.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(d) {
        return i.mixins.includes(d) ? w.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), c;
      },
      component(d, u) {
        return w.NODE_ENV !== "production" && Rr(d, i.config), u ? (w.NODE_ENV !== "production" && i.components[d] && M(`Component "${d}" has already been registered in target app.`), i.components[d] = u, c) : i.components[d];
      },
      directive(d, u) {
        return w.NODE_ENV !== "production" && hu(d), u ? (w.NODE_ENV !== "production" && i.directives[d] && M(`Directive "${d}" has already been registered in target app.`), i.directives[d] = u, c) : i.directives[d];
      },
      mount(d, u, h) {
        if (a)
          w.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          w.NODE_ENV !== "production" && d.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || pe(s, o);
          return m.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), w.NODE_ENV !== "production" && (i.reload = () => {
            const b = At(m);
            b.el = null, e(b, d, h);
          }), u && t ? t(m, d) : e(m, d, h), a = !0, c._container = d, d.__vue_app__ = c, w.NODE_ENV !== "production" && (c._instance = m.component, rh(c, Br)), ko(m.component);
        }
      },
      onUnmount(d) {
        w.NODE_ENV !== "production" && typeof d != "function" && M(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? ($t(
          l,
          c._instance,
          16
        ), e(null, c._container), w.NODE_ENV !== "production" && (c._instance = null, lh(c)), delete c._container.__vue_app__) : w.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return w.NODE_ENV !== "production" && d in i.provides && (ge(i.provides, d) ? M(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : M(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = Zn;
        Zn = c;
        try {
          return d();
        } finally {
          Zn = u;
        }
      }
    };
    return c;
  };
}
let Zn = null;
function Ru(e, t) {
  if (!Ue)
    w.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = Ue.provides;
    const s = Ue.parent && Ue.parent.provides;
    s === n && (n = Ue.provides = Object.create(s)), n[e] = t;
  }
}
function to(e, t, n = !1) {
  const s = ot();
  if (s || Zn) {
    let o = Zn ? Zn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    w.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else w.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
function hm() {
  return !!(ot() || Zn);
}
const Lu = {}, Fu = () => Object.create(Lu), Bu = (e) => Object.getPrototypeOf(e) === Lu;
function mm(e, t, n, s = !1) {
  const o = {}, i = Fu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ju(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  w.NODE_ENV !== "production" && Uu(t || {}, o, e), n ? e.props = s ? o : eu(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function gm(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function vm(e, t, n, s) {
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
    !(w.NODE_ENV !== "production" && gm(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let h = d[u];
        if (Ui(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (a)
          if (ge(i, h))
            m !== i[h] && (i[h] = m, c = !0);
          else {
            const b = Se(h);
            o[b] = Tr(
              a,
              l,
              b,
              m,
              e,
              !1
            );
          }
        else
          m !== i[h] && (i[h] = m, c = !0);
      }
    }
  } else {
    ju(e, t, o, i) && (c = !0);
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
  c && en(e.attrs, "set", ""), w.NODE_ENV !== "production" && Uu(t || {}, o, e);
}
function ju(e, t, n, s) {
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
      if (r.type !== Function && !r.skipFactory && oe(a)) {
        const { propsDefaults: c } = o;
        if (n in c)
          s = c[n];
        else {
          const d = os(o);
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
const ym = /* @__PURE__ */ new WeakMap();
function Hu(e, t, n = !1) {
  const s = n ? ym : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!oe(e)) {
    const d = (u) => {
      a = !0;
      const [h, m] = Hu(u, t, !0);
      de(r, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return me(e) && s.set(e, gs), gs;
  if (K(i))
    for (let d = 0; d < i.length; d++) {
      w.NODE_ENV !== "production" && !re(i[d]) && M("props must be strings when using array syntax.", i[d]);
      const u = Se(i[d]);
      Ca(u) && (r[u] = fe);
    }
  else if (i) {
    w.NODE_ENV !== "production" && !me(i) && M("invalid props options", i);
    for (const d in i) {
      const u = Se(d);
      if (Ca(u)) {
        const h = i[d], m = r[u] = K(h) || oe(h) ? { type: h } : de({}, h), b = m.type;
        let g = !1, D = !0;
        if (K(b))
          for (let k = 0; k < b.length; ++k) {
            const _ = b[k], f = oe(_) && _.name;
            if (f === "Boolean") {
              g = !0;
              break;
            } else f === "String" && (D = !1);
          }
        else
          g = oe(b) && b.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = g, m[
          1
          /* shouldCastTrue */
        ] = D, (g || ge(m, "default")) && l.push(u);
      }
    }
  }
  const c = [r, l];
  return me(e) && s.set(e, c), c;
}
function Ca(e) {
  return e[0] !== "$" && !Vn(e) ? !0 : (w.NODE_ENV !== "production" && M(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function bm(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Uu(e, t, n) {
  const s = ae(t), o = n.propsOptions[0], i = Object.keys(e).map((r) => Se(r));
  for (const r in o) {
    let l = o[r];
    l != null && _m(
      r,
      s[r],
      l,
      w.NODE_ENV !== "production" ? Lt(s) : s,
      !i.includes(r)
    );
  }
}
function _m(e, t, n, s, o) {
  const { type: i, required: r, validator: l, skipCheck: a } = n;
  if (r && o) {
    M('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !a) {
      let c = !1;
      const d = K(i) ? i : [i], u = [];
      for (let h = 0; h < d.length && !c; h++) {
        const { valid: m, expectedType: b } = wm(t, d[h]);
        u.push(b || ""), c = m;
      }
      if (!c) {
        M(Nm(e, t, u));
        return;
      }
    }
    l && !l(t, s) && M('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Em = /* @__PURE__ */ qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function wm(e, t) {
  let n;
  const s = bm(t);
  if (s === "null")
    n = e === null;
  else if (Em(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = me(e) : s === "Array" ? n = K(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Nm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(on).join(" | ")}`;
  const o = n[0], i = sl(t), r = ka(t, o), l = ka(t, i);
  return n.length === 1 && Oa(o) && !xm(o, i) && (s += ` with value ${r}`), s += `, got ${i} `, Oa(i) && (s += `with value ${l}.`), s;
}
function ka(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Oa(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function xm(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const kl = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Ol = (e) => K(e) ? e.map(ut) : [ut(e)], Sm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ge((...o) => (w.NODE_ENV !== "production" && Ue && !(n === null && Re) && !(n && n.root !== Ue.root) && M(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ol(t(...o))), n);
  return s._c = !1, s;
}, qu = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (kl(o)) continue;
    const i = e[o];
    if (oe(i))
      t[o] = Sm(o, i, s);
    else if (i != null) {
      w.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = Ol(i);
      t[o] = () => r;
    }
  }
}, zu = (e, t) => {
  w.NODE_ENV !== "production" && !Ls(e.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ol(t);
  e.slots.default = () => n;
}, Dr = (e, t, n) => {
  for (const s in t)
    (n || !kl(s)) && (e[s] = t[s]);
}, Cm = (e, t, n) => {
  const s = e.slots = Fu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && ts(s, "__", o, !0);
    const i = t._;
    i ? (Dr(s, t, n), n && ts(s, "_", i, !0)) : qu(t, s);
  } else t && zu(e, t);
}, km = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = fe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? w.NODE_ENV !== "production" && Ft ? (Dr(o, t, n), en(e, "set", "$slots")) : n && l === 1 ? i = !1 : Dr(o, t, n) : (i = !t.$stable, qu(t, o)), r = t;
  } else t && (zu(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !kl(l) && r[l] == null && delete o[l];
};
let Hs, Tn;
function an(e, t) {
  e.appContext.config.performance && ui() && Tn.mark(`vue-${t}-${e.uid}`), w.NODE_ENV !== "production" && uh(e, t, ui() ? Tn.now() : Date.now());
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
  w.NODE_ENV !== "production" && dh(e, t, ui() ? Tn.now() : Date.now());
}
function ui() {
  return Hs !== void 0 || (typeof window < "u" && window.performance ? (Hs = !0, Tn = window.performance) : Hs = !1), Hs;
}
function Om() {
  const e = [];
  if (w.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Be = id;
function Ku(e) {
  return Gu(e);
}
function Wu(e) {
  return Gu(e, wh);
}
function Gu(e, t) {
  Om();
  const n = wo();
  n.__VUE__ = !0, w.NODE_ENV !== "production" && hl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    nextSibling: h,
    setScopeId: m = Oe,
    insertStaticContent: b
  } = e, g = (y, S, I, B = null, L = null, F = null, G = void 0, U = null, H = w.NODE_ENV !== "production" && Ft ? !1 : !!S.dynamicChildren) => {
    if (y === S)
      return;
    y && !Rt(y, S) && (B = Vo(y), bn(y, L, F, !0), y = null), S.patchFlag === -2 && (H = !1, S.dynamicChildren = null);
    const { type: j, ref: ie, shapeFlag: Y } = S;
    switch (j) {
      case sn:
        D(y, S, I, B);
        break;
      case Te:
        k(y, S, I, B);
        break;
      case An:
        y == null ? _(S, I, B, G) : w.NODE_ENV !== "production" && f(y, S, I, G);
        break;
      case ce:
        R(
          y,
          S,
          I,
          B,
          L,
          F,
          G,
          U,
          H
        );
        break;
      default:
        Y & 1 ? $(
          y,
          S,
          I,
          B,
          L,
          F,
          G,
          U,
          H
        ) : Y & 6 ? J(
          y,
          S,
          I,
          B,
          L,
          F,
          G,
          U,
          H
        ) : Y & 64 || Y & 128 ? j.process(
          y,
          S,
          I,
          B,
          L,
          F,
          G,
          U,
          H,
          ds
        ) : w.NODE_ENV !== "production" && M("Invalid VNode type:", j, `(${typeof j})`);
    }
    ie != null && L ? _s(ie, y && y.ref, F, S || y, !S) : ie == null && y && y.ref != null && _s(y.ref, null, F, y, !0);
  }, D = (y, S, I, B) => {
    if (y == null)
      s(
        S.el = l(S.children),
        I,
        B
      );
    else {
      const L = S.el = y.el;
      S.children !== y.children && c(L, S.children);
    }
  }, k = (y, S, I, B) => {
    y == null ? s(
      S.el = a(S.children || ""),
      I,
      B
    ) : S.el = y.el;
  }, _ = (y, S, I, B) => {
    [y.el, y.anchor] = b(
      y.children,
      S,
      I,
      B,
      y.el,
      y.anchor
    );
  }, f = (y, S, I, B) => {
    if (S.children !== y.children) {
      const L = h(y.anchor);
      E(y), [S.el, S.anchor] = b(
        S.children,
        I,
        L,
        B
      );
    } else
      S.el = y.el, S.anchor = y.anchor;
  }, x = ({ el: y, anchor: S }, I, B) => {
    let L;
    for (; y && y !== S; )
      L = h(y), s(y, I, B), y = L;
    s(S, I, B);
  }, E = ({ el: y, anchor: S }) => {
    let I;
    for (; y && y !== S; )
      I = h(y), o(y), y = I;
    o(S);
  }, $ = (y, S, I, B, L, F, G, U, H) => {
    S.type === "svg" ? G = "svg" : S.type === "math" && (G = "mathml"), y == null ? P(
      S,
      I,
      B,
      L,
      F,
      G,
      U,
      H
    ) : C(
      y,
      S,
      L,
      F,
      G,
      U,
      H
    );
  }, P = (y, S, I, B, L, F, G, U) => {
    let H, j;
    const { props: ie, shapeFlag: Y, transition: ne, dirs: le } = y;
    if (H = y.el = r(
      y.type,
      F,
      ie && ie.is,
      ie
    ), Y & 8 ? d(H, y.children) : Y & 16 && v(
      y.children,
      H,
      null,
      B,
      L,
      fr(y, F),
      G,
      U
    ), le && Xt(y, null, B, "created"), N(H, y, y.scopeId, G, B), ie) {
      for (const Ce in ie)
        Ce !== "value" && !Vn(Ce) && i(H, Ce, null, ie[Ce], F, B);
      "value" in ie && i(H, "value", null, ie.value, F), (j = ie.onVnodeBeforeMount) && gt(j, B, y);
    }
    w.NODE_ENV !== "production" && (ts(H, "__vnode", y, !0), ts(H, "__vueParentComponent", B, !0)), le && Xt(y, null, B, "beforeMount");
    const ye = Yu(L, ne);
    ye && ne.beforeEnter(H), s(H, S, I), ((j = ie && ie.onVnodeMounted) || ye || le) && Be(() => {
      j && gt(j, B, y), ye && ne.enter(H), le && Xt(y, null, B, "mounted");
    }, L);
  }, N = (y, S, I, B, L) => {
    if (I && m(y, I), B)
      for (let F = 0; F < B.length; F++)
        m(y, B[F]);
    if (L) {
      let F = L.subTree;
      if (w.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = qi(F.children) || F), S === F || pi(F.type) && (F.ssContent === S || F.ssFallback === S)) {
        const G = L.vnode;
        N(
          y,
          G,
          G.scopeId,
          G.slotScopeIds,
          L.parent
        );
      }
    }
  }, v = (y, S, I, B, L, F, G, U, H = 0) => {
    for (let j = H; j < y.length; j++) {
      const ie = y[j] = U ? Cn(y[j]) : ut(y[j]);
      g(
        null,
        ie,
        S,
        I,
        B,
        L,
        F,
        G,
        U
      );
    }
  }, C = (y, S, I, B, L, F, G) => {
    const U = S.el = y.el;
    w.NODE_ENV !== "production" && (U.__vnode = S);
    let { patchFlag: H, dynamicChildren: j, dirs: ie } = S;
    H |= y.patchFlag & 16;
    const Y = y.props || fe, ne = S.props || fe;
    let le;
    if (I && Bn(I, !1), (le = ne.onVnodeBeforeUpdate) && gt(le, I, S, y), ie && Xt(S, y, I, "beforeUpdate"), I && Bn(I, !0), w.NODE_ENV !== "production" && Ft && (H = 0, G = !1, j = null), (Y.innerHTML && ne.innerHTML == null || Y.textContent && ne.textContent == null) && d(U, ""), j ? (A(
      y.dynamicChildren,
      j,
      U,
      I,
      B,
      fr(S, L),
      F
    ), w.NODE_ENV !== "production" && no(y, S)) : G || Ee(
      y,
      S,
      U,
      null,
      I,
      B,
      fr(S, L),
      F,
      !1
    ), H > 0) {
      if (H & 16)
        V(U, Y, ne, I, L);
      else if (H & 2 && Y.class !== ne.class && i(U, "class", null, ne.class, L), H & 4 && i(U, "style", Y.style, ne.style, L), H & 8) {
        const ye = S.dynamicProps;
        for (let Ce = 0; Ce < ye.length; Ce++) {
          const we = ye[Ce], pt = Y[we], Je = ne[we];
          (Je !== pt || we === "value") && i(U, we, pt, Je, L, I);
        }
      }
      H & 1 && y.children !== S.children && d(U, S.children);
    } else !G && j == null && V(U, Y, ne, I, L);
    ((le = ne.onVnodeUpdated) || ie) && Be(() => {
      le && gt(le, I, S, y), ie && Xt(S, y, I, "updated");
    }, B);
  }, A = (y, S, I, B, L, F, G) => {
    for (let U = 0; U < S.length; U++) {
      const H = y[U], j = S[U], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rt(H, j) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? u(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      g(
        H,
        j,
        ie,
        null,
        B,
        L,
        F,
        G,
        !0
      );
    }
  }, V = (y, S, I, B, L) => {
    if (S !== I) {
      if (S !== fe)
        for (const F in S)
          !Vn(F) && !(F in I) && i(
            y,
            F,
            S[F],
            null,
            L,
            B
          );
      for (const F in I) {
        if (Vn(F)) continue;
        const G = I[F], U = S[F];
        G !== U && F !== "value" && i(y, F, U, G, L, B);
      }
      "value" in I && i(y, "value", S.value, I.value, L);
    }
  }, R = (y, S, I, B, L, F, G, U, H) => {
    const j = S.el = y ? y.el : l(""), ie = S.anchor = y ? y.anchor : l("");
    let { patchFlag: Y, dynamicChildren: ne, slotScopeIds: le } = S;
    w.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ft || Y & 2048) && (Y = 0, H = !1, ne = null), le && (U = U ? U.concat(le) : le), y == null ? (s(j, I, B), s(ie, I, B), v(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      I,
      ie,
      L,
      F,
      G,
      U,
      H
    )) : Y > 0 && Y & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren ? (A(
      y.dynamicChildren,
      ne,
      I,
      L,
      F,
      G,
      U
    ), w.NODE_ENV !== "production" ? no(y, S) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (S.key != null || L && S === L.subTree) && no(
        y,
        S,
        !0
        /* shallow */
      )
    )) : Ee(
      y,
      S,
      I,
      ie,
      L,
      F,
      G,
      U,
      H
    );
  }, J = (y, S, I, B, L, F, G, U, H) => {
    S.slotScopeIds = U, y == null ? S.shapeFlag & 512 ? L.ctx.activate(
      S,
      I,
      B,
      G,
      H
    ) : ee(
      S,
      I,
      B,
      L,
      F,
      G,
      H
    ) : Z(y, S, H);
  }, ee = (y, S, I, B, L, F, G) => {
    const U = y.component = pd(
      y,
      B,
      L
    );
    if (w.NODE_ENV !== "production" && U.type.__hmrId && nh(U), w.NODE_ENV !== "production" && (vs(y), an(U, "mount")), Ls(y) && (U.ctx.renderer = ds), w.NODE_ENV !== "production" && an(U, "init"), md(U, !1, G), w.NODE_ENV !== "production" && cn(U, "init"), w.NODE_ENV !== "production" && Ft && (y.el = null), U.asyncDep) {
      if (L && L.registerDep(U, se, G), !y.el) {
        const H = U.subTree = pe(Te);
        k(null, H, S, I), y.placeholder = H.el;
      }
    } else
      se(
        U,
        y,
        S,
        I,
        L,
        F,
        G
      );
    w.NODE_ENV !== "production" && (ys(), cn(U, "mount"));
  }, Z = (y, S, I) => {
    const B = S.component = y.component;
    if (Rm(y, S, I))
      if (B.asyncDep && !B.asyncResolved) {
        w.NODE_ENV !== "production" && vs(S), Q(B, S, I), w.NODE_ENV !== "production" && ys();
        return;
      } else
        B.next = S, B.update();
    else
      S.el = y.el, B.vnode = S;
  }, se = (y, S, I, B, L, F, G) => {
    const U = () => {
      if (y.isMounted) {
        let { next: Y, bu: ne, u: le, parent: ye, vnode: Ce } = y;
        {
          const Et = Ju(y);
          if (Et) {
            Y && (Y.el = Ce.el, Q(y, Y, G)), Et.asyncDep.then(() => {
              y.isUnmounted || U();
            });
            return;
          }
        }
        let we = Y, pt;
        w.NODE_ENV !== "production" && vs(Y || y.vnode), Bn(y, !1), Y ? (Y.el = Ce.el, Q(y, Y, G)) : Y = Ce, ne && On(ne), (pt = Y.props && Y.props.onVnodeBeforeUpdate) && gt(pt, ye, Y, Ce), Bn(y, !0), w.NODE_ENV !== "production" && an(y, "render");
        const Je = Ko(y);
        w.NODE_ENV !== "production" && cn(y, "render");
        const Mt = y.subTree;
        y.subTree = Je, w.NODE_ENV !== "production" && an(y, "patch"), g(
          Mt,
          Je,
          // parent may have changed if it's in a teleport
          u(Mt.el),
          // anchor may have changed if it's in a fragment
          Vo(Mt),
          y,
          L,
          F
        ), w.NODE_ENV !== "production" && cn(y, "patch"), Y.el = Je.el, we === null && zi(y, Je.el), le && Be(le, L), (pt = Y.props && Y.props.onVnodeUpdated) && Be(
          () => gt(pt, ye, Y, Ce),
          L
        ), w.NODE_ENV !== "production" && fu(y), w.NODE_ENV !== "production" && ys();
      } else {
        let Y;
        const { el: ne, props: le } = S, { bm: ye, m: Ce, parent: we, root: pt, type: Je } = y, Mt = $n(S);
        if (Bn(y, !1), ye && On(ye), !Mt && (Y = le && le.onVnodeBeforeMount) && gt(Y, we, S), Bn(y, !0), ne && tr) {
          const Et = () => {
            w.NODE_ENV !== "production" && an(y, "render"), y.subTree = Ko(y), w.NODE_ENV !== "production" && cn(y, "render"), w.NODE_ENV !== "production" && an(y, "hydrate"), tr(
              ne,
              y.subTree,
              y,
              L,
              null
            ), w.NODE_ENV !== "production" && cn(y, "hydrate");
          };
          Mt && Je.__asyncHydrate ? Je.__asyncHydrate(
            ne,
            y,
            Et
          ) : Et();
        } else {
          pt.ce && // @ts-expect-error _def is private
          pt.ce._def.shadowRoot !== !1 && pt.ce._injectChildStyle(Je), w.NODE_ENV !== "production" && an(y, "render");
          const Et = y.subTree = Ko(y);
          w.NODE_ENV !== "production" && cn(y, "render"), w.NODE_ENV !== "production" && an(y, "patch"), g(
            null,
            Et,
            I,
            B,
            y,
            L,
            F
          ), w.NODE_ENV !== "production" && cn(y, "patch"), S.el = Et.el;
        }
        if (Ce && Be(Ce, L), !Mt && (Y = le && le.onVnodeMounted)) {
          const Et = S;
          Be(
            () => gt(Y, we, Et),
            L
          );
        }
        (S.shapeFlag & 256 || we && $n(we.vnode) && we.vnode.shapeFlag & 256) && y.a && Be(y.a, L), y.isMounted = !0, w.NODE_ENV !== "production" && xr(y), S = I = B = null;
      }
    };
    y.scope.on();
    const H = y.effect = new lo(U);
    y.scope.off();
    const j = y.update = H.run.bind(H), ie = y.job = H.runIfDirty.bind(H);
    ie.i = y, ie.id = y.uid, H.scheduler = () => Ri(ie), Bn(y, !0), w.NODE_ENV !== "production" && (H.onTrack = y.rtc ? (Y) => On(y.rtc, Y) : void 0, H.onTrigger = y.rtg ? (Y) => On(y.rtg, Y) : void 0), j();
  }, Q = (y, S, I) => {
    S.component = y;
    const B = y.vnode.props;
    y.vnode = S, y.next = null, vm(y, S.props, B, I), km(y, S.children, I), qt(), fa(y), zt();
  }, Ee = (y, S, I, B, L, F, G, U, H = !1) => {
    const j = y && y.children, ie = y ? y.shapeFlag : 0, Y = S.children, { patchFlag: ne, shapeFlag: le } = S;
    if (ne > 0) {
      if (ne & 128) {
        Ct(
          j,
          Y,
          I,
          B,
          L,
          F,
          G,
          U,
          H
        );
        return;
      } else if (ne & 256) {
        ft(
          j,
          Y,
          I,
          B,
          L,
          F,
          G,
          U,
          H
        );
        return;
      }
    }
    le & 8 ? (ie & 16 && Fs(j, L, F), Y !== j && d(I, Y)) : ie & 16 ? le & 16 ? Ct(
      j,
      Y,
      I,
      B,
      L,
      F,
      G,
      U,
      H
    ) : Fs(j, L, F, !0) : (ie & 8 && d(I, ""), le & 16 && v(
      Y,
      I,
      B,
      L,
      F,
      G,
      U,
      H
    ));
  }, ft = (y, S, I, B, L, F, G, U, H) => {
    y = y || gs, S = S || gs;
    const j = y.length, ie = S.length, Y = Math.min(j, ie);
    let ne;
    for (ne = 0; ne < Y; ne++) {
      const le = S[ne] = H ? Cn(S[ne]) : ut(S[ne]);
      g(
        y[ne],
        le,
        I,
        null,
        L,
        F,
        G,
        U,
        H
      );
    }
    j > ie ? Fs(
      y,
      L,
      F,
      !0,
      !1,
      Y
    ) : v(
      S,
      I,
      B,
      L,
      F,
      G,
      U,
      H,
      Y
    );
  }, Ct = (y, S, I, B, L, F, G, U, H) => {
    let j = 0;
    const ie = S.length;
    let Y = y.length - 1, ne = ie - 1;
    for (; j <= Y && j <= ne; ) {
      const le = y[j], ye = S[j] = H ? Cn(S[j]) : ut(S[j]);
      if (Rt(le, ye))
        g(
          le,
          ye,
          I,
          null,
          L,
          F,
          G,
          U,
          H
        );
      else
        break;
      j++;
    }
    for (; j <= Y && j <= ne; ) {
      const le = y[Y], ye = S[ne] = H ? Cn(S[ne]) : ut(S[ne]);
      if (Rt(le, ye))
        g(
          le,
          ye,
          I,
          null,
          L,
          F,
          G,
          U,
          H
        );
      else
        break;
      Y--, ne--;
    }
    if (j > Y) {
      if (j <= ne) {
        const le = ne + 1, ye = le < ie ? S[le].el : B;
        for (; j <= ne; )
          g(
            null,
            S[j] = H ? Cn(S[j]) : ut(S[j]),
            I,
            ye,
            L,
            F,
            G,
            U,
            H
          ), j++;
      }
    } else if (j > ne)
      for (; j <= Y; )
        bn(y[j], L, F, !0), j++;
    else {
      const le = j, ye = j, Ce = /* @__PURE__ */ new Map();
      for (j = ye; j <= ne; j++) {
        const rt = S[j] = H ? Cn(S[j]) : ut(S[j]);
        rt.key != null && (w.NODE_ENV !== "production" && Ce.has(rt.key) && M(
          "Duplicate keys found during update:",
          JSON.stringify(rt.key),
          "Make sure keys are unique."
        ), Ce.set(rt.key, j));
      }
      let we, pt = 0;
      const Je = ne - ye + 1;
      let Mt = !1, Et = 0;
      const Bs = new Array(Je);
      for (j = 0; j < Je; j++) Bs[j] = 0;
      for (j = le; j <= Y; j++) {
        const rt = y[j];
        if (pt >= Je) {
          bn(rt, L, F, !0);
          continue;
        }
        let Wt;
        if (rt.key != null)
          Wt = Ce.get(rt.key);
        else
          for (we = ye; we <= ne; we++)
            if (Bs[we - ye] === 0 && Rt(rt, S[we])) {
              Wt = we;
              break;
            }
        Wt === void 0 ? bn(rt, L, F, !0) : (Bs[Wt - ye] = j + 1, Wt >= Et ? Et = Wt : Mt = !0, g(
          rt,
          S[Wt],
          I,
          null,
          L,
          F,
          G,
          U,
          H
        ), pt++);
      }
      const na = Mt ? Tm(Bs) : gs;
      for (we = na.length - 1, j = Je - 1; j >= 0; j--) {
        const rt = ye + j, Wt = S[rt], sa = S[rt + 1], oa = rt + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          sa.el || sa.placeholder
        ) : B;
        Bs[j] === 0 ? g(
          null,
          Wt,
          I,
          oa,
          L,
          F,
          G,
          U,
          H
        ) : Mt && (we < 0 || j !== na[we] ? kt(Wt, I, oa, 2) : we--);
      }
    }
  }, kt = (y, S, I, B, L = null) => {
    const { el: F, type: G, transition: U, children: H, shapeFlag: j } = y;
    if (j & 6) {
      kt(y.component.subTree, S, I, B);
      return;
    }
    if (j & 128) {
      y.suspense.move(S, I, B);
      return;
    }
    if (j & 64) {
      G.move(y, S, I, ds);
      return;
    }
    if (G === ce) {
      s(F, S, I);
      for (let Y = 0; Y < H.length; Y++)
        kt(H[Y], S, I, B);
      s(y.anchor, S, I);
      return;
    }
    if (G === An) {
      x(y, S, I);
      return;
    }
    if (B !== 2 && j & 1 && U)
      if (B === 0)
        U.beforeEnter(F), s(F, S, I), Be(() => U.enter(F), L);
      else {
        const { leave: Y, delayLeave: ne, afterLeave: le } = U, ye = () => {
          y.ctx.isUnmounted ? o(F) : s(F, S, I);
        }, Ce = () => {
          Y(F, () => {
            ye(), le && le();
          });
        };
        ne ? ne(F, ye, Ce) : Ce();
      }
    else
      s(F, S, I);
  }, bn = (y, S, I, B = !1, L = !1) => {
    const {
      type: F,
      props: G,
      ref: U,
      children: H,
      dynamicChildren: j,
      shapeFlag: ie,
      patchFlag: Y,
      dirs: ne,
      cacheIndex: le
    } = y;
    if (Y === -2 && (L = !1), U != null && (qt(), _s(U, null, I, y, !0), zt()), le != null && (S.renderCache[le] = void 0), ie & 256) {
      S.ctx.deactivate(y);
      return;
    }
    const ye = ie & 1 && ne, Ce = !$n(y);
    let we;
    if (Ce && (we = G && G.onVnodeBeforeUnmount) && gt(we, S, y), ie & 6)
      Lf(y.component, I, B);
    else {
      if (ie & 128) {
        y.suspense.unmount(I, B);
        return;
      }
      ye && Xt(y, null, S, "beforeUnmount"), ie & 64 ? y.type.remove(
        y,
        S,
        I,
        ds,
        B
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ce || Y > 0 && Y & 64) ? Fs(
        j,
        S,
        I,
        !1,
        !0
      ) : (F === ce && Y & 384 || !L && ie & 16) && Fs(H, S, I), B && Qi(y);
    }
    (Ce && (we = G && G.onVnodeUnmounted) || ye) && Be(() => {
      we && gt(we, S, y), ye && Xt(y, null, S, "unmounted");
    }, I);
  }, Qi = (y) => {
    const { type: S, el: I, anchor: B, transition: L } = y;
    if (S === ce) {
      w.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && L && !L.persisted ? y.children.forEach((G) => {
        G.type === Te ? o(G.el) : Qi(G);
      }) : Rf(I, B);
      return;
    }
    if (S === An) {
      E(y);
      return;
    }
    const F = () => {
      o(I), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (y.shapeFlag & 1 && L && !L.persisted) {
      const { leave: G, delayLeave: U } = L, H = () => G(I, F);
      U ? U(y.el, F, H) : H();
    } else
      F();
  }, Rf = (y, S) => {
    let I;
    for (; y !== S; )
      I = h(y), o(y), y = I;
    o(S);
  }, Lf = (y, S, I) => {
    w.NODE_ENV !== "production" && y.type.__hmrId && sh(y);
    const {
      bum: B,
      scope: L,
      job: F,
      subTree: G,
      um: U,
      m: H,
      a: j,
      parent: ie,
      slots: { __: Y }
    } = y;
    di(H), di(j), B && On(B), ie && K(Y) && Y.forEach((ne) => {
      ie.renderCache[ne] = void 0;
    }), L.stop(), F && (F.flags |= 8, bn(G, y, S, I)), U && Be(U, S), Be(() => {
      y.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), w.NODE_ENV !== "production" && ch(y);
  }, Fs = (y, S, I, B = !1, L = !1, F = 0) => {
    for (let G = F; G < y.length; G++)
      bn(y[G], S, I, B, L);
  }, Vo = (y) => {
    if (y.shapeFlag & 6)
      return Vo(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const S = h(y.anchor || y.el), I = S && S[mu];
    return I ? h(I) : S;
  };
  let Zi = !1;
  const ta = (y, S, I) => {
    y == null ? S._vnode && bn(S._vnode, null, null, !0) : g(
      S._vnode || null,
      y,
      S,
      null,
      null,
      null,
      I
    ), S._vnode = y, Zi || (Zi = !0, fa(), ri(), Zi = !1);
  }, ds = {
    p: g,
    um: bn,
    m: kt,
    r: Qi,
    mt: ee,
    mc: v,
    pc: Ee,
    pbc: A,
    n: Vo,
    o: e
  };
  let er, tr;
  return t && ([er, tr] = t(
    ds
  )), {
    render: ta,
    hydrate: er,
    createApp: pm(ta, er)
  };
}
function fr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function no(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (K(s) && K(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Cn(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && no(r, l)), l.type === sn && (l.el = r.el), l.type === Te && !l.el && (l.el = r.el), w.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Tm(e) {
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
    return e || w.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Dm(e, t) {
  return Co(e, null, t);
}
function Vm(e, t) {
  return Co(
    e,
    null,
    w.NODE_ENV !== "production" ? de({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function Zu(e, t) {
  return Co(
    e,
    null,
    w.NODE_ENV !== "production" ? de({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function nn(e, t, n) {
  return w.NODE_ENV !== "production" && !oe(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Co(e, t, n);
}
function Co(e, t, n = fe) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  w.NODE_ENV !== "production" && !t && (s !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  w.NODE_ENV !== "production" && (l.onWarn = M);
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
  l.call = (m, b, g) => $t(m, d, b, g);
  let u = !1;
  i === "post" ? l.scheduler = (m) => {
    Be(m, d && d.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (m, b) => {
    b ? m() : Ri(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = Wp(e, t, l);
  return Os && (c ? c.push(h) : a && h()), h;
}
function $m(e, t, n) {
  const s = this.proxy, o = re(e) ? e.includes(".") ? ed(s, e) : () => s[e] : e.bind(s, s);
  let i;
  oe(t) ? i = t : (i = t.handler, n = t);
  const r = os(this), l = Co(o, i.bind(s), n);
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
function Am(e, t, n = fe) {
  const s = ot();
  if (w.NODE_ENV !== "production" && !s)
    return M("useModel() called without active instance."), q();
  const o = Se(t);
  if (w.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return M(`useModel() called with prop "${t}" which is not declared.`), q();
  const i = Ze(t), r = td(e, o), l = ou((a, c) => {
    let d, u = fe, h;
    return Zu(() => {
      const m = e[o];
      at(d, m) && (d = m, c());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const b = n.set ? n.set(m) : m;
        if (!at(b, d) && !(u !== fe && at(m, u)))
          return;
        const g = s.vnode.props;
        g && // check if parent has passed v-model
        (t in g || o in g || i in g) && (`onUpdate:${t}` in g || `onUpdate:${o}` in g || `onUpdate:${i}` in g) || (d = m, c()), s.emit(`update:${t}`, b), at(m, b) && at(m, u) && !at(b, h) && c(), u = m, h = b;
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
function Im(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || fe;
  if (w.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(Zt(Se(t)) in u)) && M(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Zt(Se(t))}" prop.`
        );
      else {
        const h = d[t];
        oe(h) && (h(...n) || M(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), r = i && td(s, t.slice(7));
  if (r && (r.trim && (o = n.map((d) => re(d) ? d.trim() : d)), r.number && (o = n.map(ei))), w.NODE_ENV !== "production" && fh(e, t, o), w.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[Zt(d)] && M(
      `Event "${d}" is emitted in component ${Ki(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ze(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Zt(t)] || // also try camelCase event handler (#2249)
  s[l = Zt(Se(t))];
  !a && i && (a = s[l = Zt(Ze(t))]), a && $t(
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
  if (!oe(e)) {
    const a = (c) => {
      const d = nd(c, t, !0);
      d && (l = !0, de(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (me(e) && s.set(e, null), null) : (K(i) ? i.forEach((a) => r[a] = null) : de(r, i), me(e) && s.set(e, r), r);
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
    data: h,
    setupState: m,
    ctx: b,
    inheritAttrs: g
  } = e, D = fo(e);
  let k, _;
  w.NODE_ENV !== "production" && (Vr = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = o || s, $ = w.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(E, {
        get(P, N, v) {
          return M(
            `Property '${String(
              N
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, N, v);
        }
      }) : E;
      k = ut(
        c.call(
          $,
          E,
          d,
          w.NODE_ENV !== "production" ? Lt(u) : u,
          m,
          h,
          b
        )
      ), _ = l;
    } else {
      const E = t;
      w.NODE_ENV !== "production" && l === u && fi(), k = ut(
        E.length > 1 ? E(
          w.NODE_ENV !== "production" ? Lt(u) : u,
          w.NODE_ENV !== "production" ? {
            get attrs() {
              return fi(), Lt(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : E(
          w.NODE_ENV !== "production" ? Lt(u) : u,
          null
        )
      ), _ = t.props ? l : Mm(l);
    }
  } catch (E) {
    so.length = 0, Rn(E, e, 1), k = pe(Te);
  }
  let f = k, x;
  if (w.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([f, x] = sd(k)), _ && g !== !1) {
    const E = Object.keys(_), { shapeFlag: $ } = f;
    if (E.length) {
      if ($ & 7)
        i && E.some(Zo) && (_ = Pm(
          _,
          i
        )), f = At(f, _, !1, !0);
      else if (w.NODE_ENV !== "production" && !Vr && f.type !== Te) {
        const P = Object.keys(l), N = [], v = [];
        for (let C = 0, A = P.length; C < A; C++) {
          const V = P[C];
          gn(V) ? Zo(V) || N.push(V[2].toLowerCase() + V.slice(3)) : v.push(V);
        }
        v.length && M(
          `Extraneous non-props attributes (${v.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), N.length && M(
          `Extraneous non-emits event listeners (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (w.NODE_ENV !== "production" && !Ta(f) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), f = At(f, null, !1, !0), f.dirs = f.dirs ? f.dirs.concat(n.dirs) : n.dirs), n.transition && (w.NODE_ENV !== "production" && !Ta(f) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), vn(f, n.transition)), w.NODE_ENV !== "production" && x ? x(f) : k = f, fo(D), k;
}
const sd = (e) => {
  const t = e.children, n = e.dynamicChildren, s = qi(t, !1);
  if (s) {
    if (w.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return sd(s);
  } else return [e, void 0];
  const o = t.indexOf(s), i = n ? n.indexOf(s) : -1, r = (l) => {
    t[o] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ut(s), r];
};
function qi(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (rn(o)) {
      if (o.type !== Te || o.children === "v-if") {
        if (n)
          return;
        if (n = o, w.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return qi(n.children);
      }
    } else
      return;
  }
  return n;
}
const Mm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Pm = (e, t) => {
  const n = {};
  for (const s in e)
    (!Zo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Ta = (e) => e.shapeFlag & 7 || e.type === Te;
function Rm(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (w.NODE_ENV !== "production" && (o || l) && Ft || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Da(s, r, c) : !!r;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const h = d[u];
        if (r[h] !== s[h] && !Ui(c, h))
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
const Lm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    if (e == null)
      Bm(
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
      jm(
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
  hydrate: Hm,
  normalize: Um
}, Fm = Lm;
function ho(e, t) {
  const n = e.props && e.props[t];
  oe(n) && n();
}
function Bm(e, t, n, s, o, i, r, l, a) {
  const {
    p: c,
    o: { createElement: d }
  } = a, u = d("div"), h = e.suspense = od(
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
    h.pendingBranch = e.ssContent,
    u,
    null,
    s,
    h,
    i,
    r
  ), h.deps > 0 ? (ho(e, "onPending"), ho(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    i,
    r
  ), Es(h, e.ssFallback)) : h.resolve(!1, !0);
}
function jm(e, t, n, s, o, i, r, l, { p: a, um: c, o: { createElement: d } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const h = t.ssContent, m = t.ssFallback, { activeBranch: b, pendingBranch: g, isInFallback: D, isHydrating: k } = u;
  if (g)
    u.pendingBranch = h, Rt(h, g) ? (a(
      g,
      h,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 ? u.resolve() : D && (k || (a(
      b,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), Es(u, m)))) : (u.pendingId = $r++, k ? (u.isHydrating = !1, u.activeBranch = g) : c(g, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = d("div"), D ? (a(
      null,
      h,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 ? u.resolve() : (a(
      b,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), Es(u, m))) : b && Rt(h, b) ? (a(
      b,
      h,
      n,
      s,
      o,
      u,
      i,
      r,
      l
    ), u.resolve(!0)) : (a(
      null,
      h,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (b && Rt(h, b))
    a(
      b,
      h,
      n,
      s,
      o,
      u,
      i,
      r,
      l
    ), Es(u, h);
  else if (ho(t, "onPending"), u.pendingBranch = h, h.shapeFlag & 512 ? u.pendingId = h.component.suspenseId : u.pendingId = $r++, a(
    null,
    h,
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
    const { timeout: _, pendingId: f } = u;
    _ > 0 ? setTimeout(() => {
      u.pendingId === f && u.fallback(m);
    }, _) : _ === 0 && u.fallback(m);
  }
}
let Va = !1;
function od(e, t, n, s, o, i, r, l, a, c, d = !1) {
  w.NODE_ENV !== "production" && !Va && (Va = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: h,
    um: m,
    n: b,
    o: { parentNode: g, remove: D }
  } = c;
  let k;
  const _ = qm(e);
  _ && t && t.pendingBranch && (k = t.pendingId, t.deps++);
  const f = e.props ? ti(e.props.timeout) : void 0;
  w.NODE_ENV !== "production" && fl(f, "Suspense timeout");
  const x = i, E = {
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
    resolve($ = !1, P = !1) {
      if (w.NODE_ENV !== "production") {
        if (!$ && !E.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (E.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: N,
        activeBranch: v,
        pendingBranch: C,
        pendingId: A,
        effects: V,
        parentComponent: R,
        container: J
      } = E;
      let ee = !1;
      E.isHydrating ? E.isHydrating = !1 : $ || (ee = v && C.transition && C.transition.mode === "out-in", ee && (v.transition.afterLeave = () => {
        A === E.pendingId && (h(
          C,
          J,
          i === x ? b(v) : i,
          0
        ), Ss(V));
      }), v && (g(v.el) === J && (i = b(v)), m(v, R, E, !0)), ee || h(C, J, i, 0)), Es(E, C), E.pendingBranch = null, E.isInFallback = !1;
      let Z = E.parent, se = !1;
      for (; Z; ) {
        if (Z.pendingBranch) {
          Z.effects.push(...V), se = !0;
          break;
        }
        Z = Z.parent;
      }
      !se && !ee && Ss(V), E.effects = [], _ && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !P && t.resolve()), ho(N, "onResolve");
    },
    fallback($) {
      if (!E.pendingBranch)
        return;
      const { vnode: P, activeBranch: N, parentComponent: v, container: C, namespace: A } = E;
      ho(P, "onFallback");
      const V = b(N), R = () => {
        E.isInFallback && (u(
          null,
          $,
          C,
          V,
          v,
          null,
          // fallback tree will not have suspense context
          A,
          l,
          a
        ), Es(E, $));
      }, J = $.transition && $.transition.mode === "out-in";
      J && (N.transition.afterLeave = R), E.isInFallback = !0, m(
        N,
        v,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), J || R();
    },
    move($, P, N) {
      E.activeBranch && h(E.activeBranch, $, P, N), E.container = $;
    },
    next() {
      return E.activeBranch && b(E.activeBranch);
    },
    registerDep($, P, N) {
      const v = !!E.pendingBranch;
      v && E.deps++;
      const C = $.vnode.el;
      $.asyncDep.catch((A) => {
        Rn(A, $, 0);
      }).then((A) => {
        if ($.isUnmounted || E.isUnmounted || E.pendingId !== $.suspenseId)
          return;
        $.asyncResolved = !0;
        const { vnode: V } = $;
        w.NODE_ENV !== "production" && vs(V), Lr($, A, !1), C && (V.el = C);
        const R = !C && $.subTree.el;
        P(
          $,
          V,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          g(C || $.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          C ? null : b($.subTree),
          E,
          r,
          N
        ), R && D(R), zi($, V.el), w.NODE_ENV !== "production" && ys(), v && --E.deps === 0 && E.resolve();
      });
    },
    unmount($, P) {
      E.isUnmounted = !0, E.activeBranch && m(
        E.activeBranch,
        n,
        $,
        P
      ), E.pendingBranch && m(
        E.pendingBranch,
        n,
        $,
        P
      );
    }
  };
  return E;
}
function Hm(e, t, n, s, o, i, r, l, a) {
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
function Um(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = $a(
    s ? n.default : n
  ), e.ssFallback = s ? $a(n.fallback) : pe(Te);
}
function $a(e) {
  let t;
  if (oe(e)) {
    const n = ss && e._c;
    n && (e._d = !1, O()), e = e(), n && (e._d = !0, t = et, rd());
  }
  if (K(e)) {
    const n = qi(e);
    w.NODE_ENV !== "production" && !n && e.filter((s) => s !== El).length > 0 && M("<Suspense> slots expect a single root node."), e = n;
  }
  return e = ut(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function id(e, t) {
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : Ss(e);
}
function Es(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, zi(s, o));
}
function qm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ce = Symbol.for("v-fgt"), sn = Symbol.for("v-txt"), Te = Symbol.for("v-cmt"), An = Symbol.for("v-stc"), so = [];
let et = null;
function O(e = !1) {
  so.push(et = e ? null : []);
}
function rd() {
  so.pop(), et = so[so.length - 1] || null;
}
let ss = 1;
function Ar(e, t = !1) {
  ss += e, e < 0 && et && t && (et.hasOnce = !0);
}
function ld(e) {
  return e.dynamicChildren = ss > 0 ? et || gs : null, rd(), ss > 0 && et && et.push(e), e;
}
function T(e, t, n, s, o, i) {
  return ld(
    p(
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
function _t(e, t, n, s, o) {
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
  if (w.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = qo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Ir;
function zm(e) {
  Ir = e;
}
const Km = (...e) => cd(
  ...Ir ? Ir(e, Re) : e
), ad = ({ key: e }) => e ?? null, Wo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || $e(e) || oe(e) ? { i: Re, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, s = 0, o = null, i = e === ce ? 0 : 1, r = !1, l = !1) {
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
  return l ? (Tl(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= re(n) ? 8 : 16), w.NODE_ENV !== "production" && a.key !== a.key && M("VNode created with invalid key (NaN). VNode type:", a.type), ss > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  et && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && et.push(a), a;
}
const pe = w.NODE_ENV !== "production" ? Km : cd;
function cd(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === El) && (w.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Te), rn(e)) {
    const l = At(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tl(l, n), ss > 0 && !i && et && (l.shapeFlag & 6 ? et[et.indexOf(e)] = l : et.push(l)), l.patchFlag = -2, l;
  }
  if (bd(e) && (e = e.__vccOpts), t) {
    t = ud(t);
    let { class: l, style: a } = t;
    l && !re(l) && (t.class = Ie(l)), me(a) && (xs(a) && !K(a) && (a = de({}, a)), t.style = dt(a));
  }
  const r = re(e) ? 1 : pi(e) ? 128 : gu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return w.NODE_ENV !== "production" && r & 4 && xs(e) && (e = ae(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), p(
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
      n && i ? K(i) ? i.concat(Wo(t)) : [i, Wo(t)] : Wo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: w.NODE_ENV !== "production" && r === -1 && K(l) ? l.map(dd) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ce ? r === -1 ? 16 : r | 16 : r,
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
  return K(e.children) && (t.children = e.children.map(dd)), t;
}
function Le(e = " ", t = 0) {
  return pe(sn, null, e, t);
}
function ks(e, t) {
  const n = pe(An, null, e);
  return n.staticCount = t, n;
}
function z(e = "", t = !1) {
  return t ? (O(), _t(Te, null, e)) : pe(Te, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? pe(Te) : K(e) ? pe(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rn(e) ? Cn(e) : pe(sn, null, String(e));
}
function Cn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : At(e);
}
function Tl(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (K(t))
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
  else oe(t) ? (t = { default: t, _ctx: Re }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Le(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function fd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Ie([t.class, s.class]));
      else if (o === "style")
        t.style = dt([t.style, s.style]);
      else if (gn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(K(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
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
const Wm = Pu();
let Gm = 0;
function pd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Wm, i = {
    uid: Gm++,
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
    propsOptions: Hu(s, o),
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
  return w.NODE_ENV !== "production" ? i.ctx = qh(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Im.bind(null, i), e.ce && e.ce(i), i;
}
let Ue = null;
const ot = () => Ue || Re;
let hi, Mr;
{
  const e = wo(), t = (n, s) => {
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
const os = (e) => {
  const t = Ue;
  return hi(e), e.scope.on(), () => {
    e.scope.off(), hi(t);
  };
}, Pr = () => {
  Ue && Ue.scope.off(), hi(null);
}, Ym = /* @__PURE__ */ qe("slot,component");
function Rr(e, { isNativeTag: t }) {
  (Ym(e) || t(e)) && M(
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
  mm(e, s, i, t), Cm(e, o, n || t);
  const r = i ? Jm(e, t) : void 0;
  return t && Mr(!1), r;
}
function Jm(e, t) {
  var n;
  const s = e.type;
  if (w.NODE_ENV !== "production") {
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
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, eo), w.NODE_ENV !== "production" && zh(e);
  const { setup: o } = s;
  if (o) {
    qt();
    const i = e.setupContext = o.length > 1 ? yd(e) : null, r = os(e), l = as(
      o,
      e,
      0,
      [
        w.NODE_ENV !== "production" ? Lt(e.props) : e.props,
        i
      ]
    ), a = ki(l);
    if (zt(), r(), (a || e.sp) && !$n(e) && bl(e), a) {
      if (l.then(Pr, Pr), t)
        return l.then((c) => {
          Lr(e, c, t);
        }).catch((c) => {
          Rn(c, e, 0);
        });
      if (e.asyncDep = l, w.NODE_ENV !== "production" && !e.suspense) {
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
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (w.NODE_ENV !== "production" && rn(t) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), w.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = dl(t), w.NODE_ENV !== "production" && Kh(e)) : w.NODE_ENV !== "production" && t !== void 0 && M(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), vd(e, n);
}
let oo, Fr;
function gd(e) {
  oo = e, Fr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Uh));
  };
}
const Dl = () => !oo;
function vd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && oo && !s.render) {
      const o = s.template || Cl(e).template;
      if (o) {
        w.NODE_ENV !== "production" && an(e, "compile");
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
        s.render = oo(o, c), w.NODE_ENV !== "production" && cn(e, "compile");
      }
    }
    e.render = s.render || Oe, Fr && Fr(e);
  }
  {
    const o = os(e);
    qt();
    try {
      lm(e);
    } finally {
      zt(), o();
    }
  }
  w.NODE_ENV !== "production" && !s.render && e.render === Oe && !t && (!oo && s.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", s));
}
const Aa = w.NODE_ENV !== "production" ? {
  get(e, t) {
    return fi(), je(e, "get", ""), e[t];
  },
  set() {
    return M("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return M("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return je(e, "get", ""), e[t];
  }
};
function Xm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return je(e, "get", "$slots"), t[n];
    }
  });
}
function yd(e) {
  const t = (n) => {
    if (w.NODE_ENV !== "production" && (e.exposed && M("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (K(n) ? s = "array" : $e(n) && (s = "ref")), s !== "object" && M(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (w.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Aa));
      },
      get slots() {
        return s || (s = Xm(e));
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
      if (n in Qn)
        return Qn[n](e);
    },
    has(t, n) {
      return n in t || n in Qn;
    }
  })) : e.proxy;
}
const Qm = /(?:^|[-_])(\w)/g, Zm = (e) => e.replace(Qm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ts(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || t && e.__name;
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
  return s ? Zm(s) : n ? "App" : "Anonymous";
}
function bd(e) {
  return oe(e) && "__vccOpts" in e;
}
const te = (e, t) => {
  const n = Up(e, t, Os);
  if (w.NODE_ENV !== "production") {
    const s = ot();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Jt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? me(t) && !K(t) ? rn(t) ? pe(e, null, [t]) : pe(e, t) : pe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && rn(n) && (n = [n]), pe(e, t, n));
}
function _d() {
  if (w.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!me(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if ($e(u)) {
        qt();
        const h = u.value;
        return zt(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(h),
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
            `>${Kt(u) ? " (readonly)" : ""}`
          ];
        if (Kt(u))
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
    const h = [];
    u.type.props && u.props && h.push(r("props", ae(u.props))), u.setupState !== fe && h.push(r("setup", u.setupState)), u.data !== fe && h.push(r("data", ae(u.data)));
    const m = a(u, "computed");
    m && h.push(r("computed", m));
    const b = a(u, "inject");
    return b && h.push(r("injected", b)), h.push([
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
    ]), h;
  }
  function r(u, h) {
    return h = de({}, h), Object.keys(h).length ? [
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
        ...Object.keys(h).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          l(h[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, h = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : me(u) ? ["object", { object: h ? ae(u) : u }] : ["span", n, String(u)];
  }
  function a(u, h) {
    const m = u.type;
    if (oe(m))
      return;
    const b = {};
    for (const g in u.ctx)
      c(m, g, h) && (b[g] = u.ctx[g]);
    return b;
  }
  function c(u, h, m) {
    const b = u[m];
    if (K(b) && b.includes(h) || me(b) && h in b || u.extends && c(u.extends, h, m) || u.mixins && u.mixins.some((g) => c(g, h, m)))
      return !0;
  }
  function d(u) {
    return tt(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function eg(e, t, n, s) {
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
    if (at(n[s], t[s]))
      return !1;
  return ss > 0 && et && et.push(e), !0;
}
const Br = "3.5.18", Ae = w.NODE_ENV !== "production" ? M : Oe, tg = Pi, ng = Pt, sg = hl, og = {
  createComponentInstance: pd,
  setupComponent: md,
  renderComponentRoot: Ko,
  setCurrentRenderingInstance: fo,
  isVNode: rn,
  normalizeVNode: ut,
  getComponentPublicInstance: ko,
  ensureValidVNode: xl,
  pushWarningContext: vs,
  popWarningContext: ys
}, ig = og, rg = null, lg = null, ag = null;
var xe = {};
let jr;
const Ia = typeof window < "u" && window.trustedTypes;
if (Ia)
  try {
    jr = /* @__PURE__ */ Ia.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    xe.NODE_ENV !== "production" && Ae(`Error creating trusted types policy: ${e}`);
  }
const wd = jr ? (e) => jr.createHTML(e) : (e) => e, cg = "http://www.w3.org/2000/svg", ug = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Ma = dn && /* @__PURE__ */ dn.createElement("template"), dg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? dn.createElementNS(cg, e) : t === "mathml" ? dn.createElementNS(ug, e) : n ? dn.createElement(e, { is: n }) : dn.createElement(e);
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
      Ma.innerHTML = wd(
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
}, _n = "transition", Us = "animation", Ds = Symbol("_vtc"), Nd = {
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
  Nd
), fg = (e) => (e.displayName = "Transition", e.props = xd, e), tn = /* @__PURE__ */ fg(
  (e, { slots: t }) => Jt(Eu, Sd(e), t)
), jn = (e, t = []) => {
  K(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Pa = (e) => e ? K(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Sd(e) {
  const t = {};
  for (const V in e)
    V in Nd || (t[V] = e[V]);
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
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, b = pg(o), g = b && b[0], D = b && b[1], {
    onBeforeEnter: k,
    onEnter: _,
    onEnterCancelled: f,
    onLeave: x,
    onLeaveCancelled: E,
    onBeforeAppear: $ = k,
    onAppear: P = _,
    onAppearCancelled: N = f
  } = t, v = (V, R, J, ee) => {
    V._enterCancelled = ee, wn(V, R ? d : l), wn(V, R ? c : r), J && J();
  }, C = (V, R) => {
    V._isLeaving = !1, wn(V, u), wn(V, m), wn(V, h), R && R();
  }, A = (V) => (R, J) => {
    const ee = V ? P : _, Z = () => v(R, V, J);
    jn(ee, [R, Z]), Ra(() => {
      wn(R, V ? a : i), Gt(R, V ? d : l), Pa(ee) || La(R, s, g, Z);
    });
  };
  return de(t, {
    onBeforeEnter(V) {
      jn(k, [V]), Gt(V, i), Gt(V, r);
    },
    onBeforeAppear(V) {
      jn($, [V]), Gt(V, a), Gt(V, c);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(V, R) {
      V._isLeaving = !0;
      const J = () => C(V, R);
      Gt(V, u), V._enterCancelled ? (Gt(V, h), Hr()) : (Hr(), Gt(V, h)), Ra(() => {
        V._isLeaving && (wn(V, u), Gt(V, m), Pa(x) || La(V, s, D, J));
      }), jn(x, [V, J]);
    },
    onEnterCancelled(V) {
      v(V, !1, void 0, !0), jn(f, [V]);
    },
    onAppearCancelled(V) {
      v(V, !0, void 0, !0), jn(N, [V]);
    },
    onLeaveCancelled(V) {
      C(V), jn(E, [V]);
    }
  });
}
function pg(e) {
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
function Gt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ds] || (e[Ds] = /* @__PURE__ */ new Set())).add(t);
}
function wn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ds];
  n && (n.delete(t), n.size || (e[Ds] = void 0));
}
function Ra(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hg = 0;
function La(e, t, n, s) {
  const o = e._endId = ++hg, i = () => {
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
    e.removeEventListener(c, h), i();
  }, h = (m) => {
    m.target === e && ++d >= a && u();
  };
  setTimeout(() => {
    d < a && u();
  }, l + 1), e.addEventListener(c, h);
}
function Cd(e, t) {
  const n = window.getComputedStyle(e), s = (b) => (n[b] || "").split(", "), o = s(`${_n}Delay`), i = s(`${_n}Duration`), r = Fa(o, i), l = s(`${Us}Delay`), a = s(`${Us}Duration`), c = Fa(l, a);
  let d = null, u = 0, h = 0;
  t === _n ? r > 0 && (d = _n, u = r, h = i.length) : t === Us ? c > 0 && (d = Us, u = c, h = a.length) : (u = Math.max(r, c), d = u > 0 ? r > c ? _n : Us : null, h = d ? d === _n ? i.length : a.length : 0);
  const m = d === _n && /\b(transform|all)(,|$)/.test(
    s(`${_n}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: h,
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
function Hr() {
  return document.body.offsetHeight;
}
function mg(e, t, n) {
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
function gg() {
  Vl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Od = Symbol(xe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function vg(e) {
  const t = ot();
  if (!t) {
    xe.NODE_ENV !== "production" && Ae("useCssVars is called without current active component instance.");
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
    nn(s, Oe, { flush: "post" });
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
  else if (e.type === ce)
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
const yg = /(^|;)\s*display\s*:/;
function bg(e, t, n) {
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
      r && (n += ";" + r), s.cssText = n, i = yg.test(n);
    }
  } else t && e.removeAttribute("style");
  mi in e && (e[mi] = i ? s.display : "", e[kd] && (s.display = "none"));
}
const _g = /[^\\];\s*$/, ja = /\s*!important$/;
function Go(e, t, n) {
  if (K(n))
    n.forEach((s) => Go(e, t, s));
  else if (n == null && (n = ""), xe.NODE_ENV !== "production" && _g.test(n) && Ae(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Eg(e, t);
    ja.test(n) ? e.setProperty(
      Ze(s),
      n.replace(ja, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ha = ["Webkit", "Moz", "ms"], hr = {};
function Eg(e, t) {
  const n = hr[t];
  if (n)
    return n;
  let s = Se(t);
  if (s !== "filter" && s in e)
    return hr[t] = s;
  s = on(s);
  for (let o = 0; o < Ha.length; o++) {
    const i = Ha[o] + s;
    if (i in e)
      return hr[t] = i;
  }
  return t;
}
const Ua = "http://www.w3.org/1999/xlink";
function qa(e, t, n, s, o, i = op(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ua, t.slice(6, t.length)) : e.setAttributeNS(Ua, t, n) : n == null || i && !il(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : bt(n) ? String(n) : n
  );
}
function za(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? wd(n) : n);
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
    xe.NODE_ENV !== "production" && !r && Ae(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(o || t);
}
function pn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function wg(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ka = Symbol("_vei");
function Ng(e, t, n, s, o = null) {
  const i = e[Ka] || (e[Ka] = {}), r = i[t];
  if (s && r)
    r.value = xe.NODE_ENV !== "production" ? Ga(s, t) : s;
  else {
    const [l, a] = xg(t);
    if (s) {
      const c = i[t] = kg(
        xe.NODE_ENV !== "production" ? Ga(s, t) : s,
        o
      );
      pn(e, l, c, a);
    } else r && (wg(e, l, r, a), i[t] = void 0);
  }
}
const Wa = /(?:Once|Passive|Capture)$/;
function xg(e) {
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
const Sg = /* @__PURE__ */ Promise.resolve(), Cg = () => mr || (Sg.then(() => mr = 0), mr = Date.now());
function kg(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    $t(
      Og(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Cg(), n;
}
function Ga(e, t) {
  return oe(e) || K(e) ? e : (Ae(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Oe);
}
function Og(e, t) {
  if (K(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tg = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? mg(e, s, r) : t === "style" ? bg(e, n, s) : gn(t) ? Zo(t) || Ng(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dg(e, t, s, r)) ? (za(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qa(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? za(e, Se(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), qa(e, t, s, r));
};
function Dg(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ya(t) && oe(n));
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
function Fe(e, t, n) {
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
const Vg = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Fe(e, t, Fd), $g = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Wi extends $g {
  constructor(t, n = {}, s = zn) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== zn ? this._root = this.shadowRoot : (xe.NODE_ENV !== "production" && this.shadowRoot && Ae(
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
      if (i && !K(i))
        for (const a in i) {
          const c = i[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = ti(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Se(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(r) : xe.NODE_ENV !== "production" && r && Ae(
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
        ge(this, s) ? xe.NODE_ENV !== "production" && Ae(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => No(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = K(n) ? n : Object.keys(n || {});
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
  const t = ot(), n = t && t.ce;
  return n || (xe.NODE_ENV !== "production" && Ae(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function Ag() {
  const e = xe.NODE_ENV !== "production" ? qr("useShadowRoot") : qr();
  return e && e.shadowRoot;
}
function Ig(e = "$style") {
  {
    const t = ot();
    if (!t)
      return xe.NODE_ENV !== "production" && Ae("useCssModule must be called inside setup()"), fe;
    const n = t.type.__cssModules;
    if (!n)
      return xe.NODE_ENV !== "production" && Ae("Current instance does not have CSS modules injected."), fe;
    const s = n[e];
    return s || (xe.NODE_ENV !== "production" && Ae(`Current instance does not have CSS module named "${e}".`), fe);
  }
}
const Td = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap(), vi = Symbol("_moveCb"), Xa = Symbol("_enterCb"), Mg = (e) => (delete e.props.mode, e), Pg = /* @__PURE__ */ Mg({
  name: "TransitionGroup",
  props: /* @__PURE__ */ de({}, xd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = ot(), s = gl();
    let o, i;
    return ji(() => {
      if (!o.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!jg(
        o[0].el,
        n.vnode.el,
        r
      )) {
        o = [];
        return;
      }
      o.forEach(Lg), o.forEach(Fg);
      const l = o.filter(Bg);
      Hr(), l.forEach((a) => {
        const c = a.el, d = c.style;
        Gt(c, r), d.transform = d.webkitTransform = d.transitionDuration = "";
        const u = c[vi] = (h) => {
          h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", u), c[vi] = null, wn(c, r));
        };
        c.addEventListener("transitionend", u);
      }), o = [];
    }), () => {
      const r = ae(e), l = Sd(r);
      let a = r.tag || ce;
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
        ) : xe.NODE_ENV !== "production" && d.type !== sn && Ae("<TransitionGroup> children must be keyed.");
      }
      return pe(a, null, i);
    };
  }
}), Rg = Pg;
function Lg(e) {
  const t = e.el;
  t[vi] && t[vi](), t[Xa] && t[Xa]();
}
function Fg(e) {
  Dd.set(e, e.el.getBoundingClientRect());
}
function Bg(e) {
  const t = Td.get(e), n = Dd.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${s}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function jg(e, t, n) {
  const s = e.cloneNode(), o = e[Ds];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: r } = Cd(s);
  return i.removeChild(s), r;
}
const Pn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => On(t, n) : t;
};
function Hg(e) {
  e.target.composing = !0;
}
function Qa(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Dt = Symbol("_assign"), is = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Dt] = Pn(o);
    const i = s || o.props && o.props.type === "number";
    pn(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = ei(l)), e[Dt](l);
    }), n && pn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (pn(e, "compositionstart", Hg), pn(e, "compositionend", Qa), pn(e, "change", Qa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (e[Dt] = Pn(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ei(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Qt = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Dt] = Pn(n), pn(e, "change", () => {
      const s = e._modelValue, o = Vs(e), i = e.checked, r = e[Dt];
      if (K(s)) {
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
    e[Dt] = Pn(n), Za(e, t, n);
  }
};
function Za(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (K(t))
    o = Di(t, s.props.value) > -1;
  else if (ls(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Mn(t, Vd(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const $l = {
  created(e, { value: t }, n) {
    e.checked = Mn(t, n.props.value), e[Dt] = Pn(n), pn(e, "change", () => {
      e[Dt](Vs(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Dt] = Pn(s), t !== n && (e.checked = Mn(t, s.props.value));
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
    }), e[Dt] = Pn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ec(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Dt] = Pn(n);
  },
  updated(e, { value: t }) {
    e._assigning || ec(e, t);
  }
};
function ec(e, t) {
  const n = e.multiple, s = K(t);
  if (n && !s && !ls(t)) {
    xe.NODE_ENV !== "production" && Ae(
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
    else if (Mn(Vs(r), t)) {
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
      return is;
    default:
      switch (t) {
        case "checkbox":
          return Qt;
        case "radio":
          return $l;
        default:
          return is;
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
function Ug() {
  is.getSSRProps = ({ value: e }) => ({ value: e }), $l.getSSRProps = ({ value: e }, t) => {
    if (t.props && Mn(t.props.value, e))
      return { checked: !0 };
  }, Qt.getSSRProps = ({ value: e }, t) => {
    if (K(e)) {
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
const qg = ["ctrl", "shift", "alt", "meta"], zg = {
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
  exact: (e, t) => qg.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ht = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = zg[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, Kg = {
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
      (r) => r === i || Kg[r] === i
    ))
      return e(o);
  });
}, Md = /* @__PURE__ */ de({ patchProp: Tg }, dg);
let io, tc = !1;
function Pd() {
  return io || (io = Ku(Md));
}
function Rd() {
  return io = tc ? io : Wu(Md), tc = !0, io;
}
const Ld = (...e) => {
  Pd().render(...e);
}, Wg = (...e) => {
  Rd().hydrate(...e);
}, zn = (...e) => {
  const t = Pd().createApp(...e);
  xe.NODE_ENV !== "production" && (jd(t), Hd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Ud(s);
    if (!o) return;
    const i = t._component;
    !oe(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Bd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
}, Fd = (...e) => {
  const t = Rd().createApp(...e);
  xe.NODE_ENV !== "production" && (jd(t), Hd(t));
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
function jd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Vc(t) || $c(t) || Ac(t),
    writable: !1
  });
}
function Hd(e) {
  if (Dl()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ae(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ae(s), n;
      },
      set() {
        Ae(s);
      }
    });
  }
}
function Ud(e) {
  if (re(e)) {
    const t = document.querySelector(e);
    return xe.NODE_ENV !== "production" && !t && Ae(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return xe.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ae(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let nc = !1;
const Gg = () => {
  nc || (nc = !0, Ug(), gg());
}, Yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Eu,
  BaseTransitionPropsValidators: vl,
  Comment: Te,
  DeprecationTypes: ag,
  EffectScope: rl,
  ErrorCodes: Qp,
  ErrorTypeStrings: tg,
  Fragment: ce,
  KeepAlive: Ph,
  ReactiveEffect: lo,
  Static: An,
  Suspense: Fm,
  Teleport: cs,
  Text: sn,
  TrackOpTypes: qp,
  Transition: tn,
  TransitionGroup: Rg,
  TriggerOpTypes: zp,
  VueElement: Wi,
  assertNumber: fl,
  callWithAsyncErrorHandling: $t,
  callWithErrorHandling: as,
  camelize: Se,
  capitalize: on,
  cloneVNode: At,
  compatUtils: lg,
  computed: te,
  createApp: zn,
  createBlock: _t,
  createCommentVNode: z,
  createElementBlock: T,
  createElementVNode: p,
  createHydrationRenderer: Wu,
  createPropsRestProxy: om,
  createRenderer: Ku,
  createSSRApp: Fd,
  createSlots: jh,
  createStaticVNode: ks,
  createTextVNode: Le,
  createVNode: pe,
  customRef: ou,
  defineAsyncComponent: Ih,
  defineComponent: yl,
  defineCustomElement: Fe,
  defineEmits: Gh,
  defineExpose: Yh,
  defineModel: Qh,
  defineOptions: Jh,
  defineProps: Wh,
  defineSSRCustomElement: Vg,
  defineSlots: Xh,
  devtools: ng,
  effect: pp,
  effectScope: dp,
  getCurrentInstance: ot,
  getCurrentScope: ll,
  getCurrentWatcher: Kp,
  getTransitionRawChildren: Fi,
  guardReactiveProps: ud,
  h: Jt,
  handleError: Rn,
  hasInjectionContext: hm,
  hydrate: Wg,
  hydrateOnIdle: Oh,
  hydrateOnInteraction: $h,
  hydrateOnMediaQuery: Vh,
  hydrateOnVisible: Dh,
  initCustomFormatter: _d,
  initDirectivesForSSR: Gg,
  inject: to,
  isMemoSame: Ed,
  isProxy: xs,
  isReactive: hn,
  isReadonly: Kt,
  isRef: $e,
  isRuntimeOnly: Dl,
  isShallow: tt,
  isVNode: rn,
  markRaw: tu,
  mergeDefaults: nm,
  mergeModels: sm,
  mergeProps: fd,
  nextTick: xo,
  normalizeClass: Ie,
  normalizeProps: Qf,
  normalizeStyle: dt,
  onActivated: Cu,
  onBeforeMount: Tu,
  onBeforeUnmount: Hi,
  onBeforeUpdate: _l,
  onDeactivated: ku,
  onErrorCaptured: Au,
  onMounted: Ye,
  onRenderTracked: $u,
  onRenderTriggered: Vu,
  onScopeDispose: Lc,
  onServerPrefetch: Du,
  onUnmounted: It,
  onUpdated: ji,
  onWatcherCleanup: ru,
  openBlock: O,
  popScopeId: hh,
  provide: Ru,
  proxyRefs: dl,
  pushScopeId: ph,
  queuePostFlushCb: Ss,
  reactive: Ns,
  readonly: Ii,
  ref: q,
  registerRuntimeCompiler: gd,
  render: Ld,
  renderList: Ve,
  renderSlot: Ln,
  resolveComponent: Fh,
  resolveDirective: Bh,
  resolveDynamicComponent: wl,
  resolveFilter: rg,
  resolveTransitionHooks: Cs,
  setBlockTracking: Ar,
  setDevtoolsHook: sg,
  setTransitionHooks: vn,
  shallowReactive: eu,
  shallowReadonly: Lt,
  shallowRef: nu,
  ssrContextKey: Xu,
  ssrUtils: ig,
  stop: hp,
  toDisplayString: X,
  toHandlerKey: Zt,
  toHandlers: Hh,
  toRaw: ae,
  toRef: jp,
  toRefs: Lp,
  toValue: Mp,
  transformVNodeArgs: zm,
  triggerRef: Ip,
  unref: No,
  useAttrs: tm,
  useCssModule: Ig,
  useCssVars: vg,
  useHost: qr,
  useId: yh,
  useModel: Am,
  useSSRContext: Qu,
  useShadowRoot: Ag,
  useSlots: em,
  useTemplateRef: bh,
  useTransitionState: gl,
  vModelCheckbox: Qt,
  vModelDynamic: $d,
  vModelRadio: $l,
  vModelSelect: Gi,
  vModelText: is,
  vShow: Vl,
  version: Br,
  warn: Ae,
  watch: nn,
  watchEffect: Dm,
  watchPostEffect: Vm,
  watchSyncEffect: Zu,
  withAsyncContext: im,
  withCtx: Ge,
  withDefaults: Zh,
  withDirectives: wt,
  withKeys: Id,
  withMemo: eg,
  withModifiers: Ht,
  withScopeId: mh
}, Symbol.toStringTag, { value: "Module" }));
var W = {};
const mo = Symbol(W.NODE_ENV !== "production" ? "Fragment" : ""), ro = Symbol(W.NODE_ENV !== "production" ? "Teleport" : ""), Al = Symbol(W.NODE_ENV !== "production" ? "Suspense" : ""), yi = Symbol(W.NODE_ENV !== "production" ? "KeepAlive" : ""), qd = Symbol(
  W.NODE_ENV !== "production" ? "BaseTransition" : ""
), rs = Symbol(W.NODE_ENV !== "production" ? "openBlock" : ""), zd = Symbol(W.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  W.NODE_ENV !== "production" ? "createElementBlock" : ""
), Il = Symbol(W.NODE_ENV !== "production" ? "createVNode" : ""), Ml = Symbol(
  W.NODE_ENV !== "production" ? "createElementVNode" : ""
), Oo = Symbol(
  W.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Pl = Symbol(
  W.NODE_ENV !== "production" ? "createTextVNode" : ""
), Wd = Symbol(
  W.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Rl = Symbol(
  W.NODE_ENV !== "production" ? "resolveComponent" : ""
), Ll = Symbol(
  W.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Fl = Symbol(
  W.NODE_ENV !== "production" ? "resolveDirective" : ""
), Bl = Symbol(
  W.NODE_ENV !== "production" ? "resolveFilter" : ""
), jl = Symbol(
  W.NODE_ENV !== "production" ? "withDirectives" : ""
), Hl = Symbol(W.NODE_ENV !== "production" ? "renderList" : ""), Gd = Symbol(W.NODE_ENV !== "production" ? "renderSlot" : ""), Yd = Symbol(W.NODE_ENV !== "production" ? "createSlots" : ""), Yi = Symbol(
  W.NODE_ENV !== "production" ? "toDisplayString" : ""
), bi = Symbol(W.NODE_ENV !== "production" ? "mergeProps" : ""), Ul = Symbol(
  W.NODE_ENV !== "production" ? "normalizeClass" : ""
), ql = Symbol(
  W.NODE_ENV !== "production" ? "normalizeStyle" : ""
), go = Symbol(
  W.NODE_ENV !== "production" ? "normalizeProps" : ""
), To = Symbol(
  W.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), zl = Symbol(W.NODE_ENV !== "production" ? "toHandlers" : ""), zr = Symbol(W.NODE_ENV !== "production" ? "camelize" : ""), Jg = Symbol(W.NODE_ENV !== "production" ? "capitalize" : ""), Kr = Symbol(
  W.NODE_ENV !== "production" ? "toHandlerKey" : ""
), _i = Symbol(
  W.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Xg = Symbol(W.NODE_ENV !== "production" ? "pushScopeId" : ""), Qg = Symbol(W.NODE_ENV !== "production" ? "popScopeId" : ""), Kl = Symbol(W.NODE_ENV !== "production" ? "withCtx" : ""), Zg = Symbol(W.NODE_ENV !== "production" ? "unref" : ""), e0 = Symbol(W.NODE_ENV !== "production" ? "isRef" : ""), Wl = Symbol(W.NODE_ENV !== "production" ? "withMemo" : ""), Jd = Symbol(W.NODE_ENV !== "production" ? "isMemoSame" : ""), $s = {
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
  [jl]: "withDirectives",
  [Hl]: "renderList",
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
  [Jg]: "capitalize",
  [Kr]: "toHandlerKey",
  [_i]: "setBlockTracking",
  [Xg]: "pushScopeId",
  [Qg]: "popScopeId",
  [Kl]: "withCtx",
  [Zg]: "unref",
  [e0]: "isRef",
  [Wl]: "withMemo",
  [Jd]: "isMemoSame"
};
function t0(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    $s[t] = e[t];
  });
}
const St = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function n0(e, t = "") {
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
  return e && (l ? (e.helper(rs), e.helper(Ms(e.inSSR, c))) : e.helper(Is(e.inSSR, c)), r && e.helper(jl)), {
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
function es(e, t = St) {
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
function Me(e, t) {
  return {
    type: 16,
    loc: St,
    key: re(e) ? ue(e, !0) : e,
    value: t
  };
}
function ue(e, t = !1, n = St, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function Ut(e, t = St) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function He(e, t = [], n = St) {
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
function s0(e, t, n = !1, s = !1) {
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
function o0(e) {
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
function Nt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function En(e) {
  return e === 47 || e === 62 || Nt(e);
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
class i0 {
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
      if (t === 62 || Nt(t)) {
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
    Nt(t) || (t === 62 ? (W.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = ic(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || Nt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, W.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Nt(t) || (W.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Nt(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || En(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : W.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
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
    t === 93 ? this.state = 14 : (t === 61 || En(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), W.NODE_ENV !== "production" && this.cbs.onerr(
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
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : Nt(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Nt(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
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
    Nt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (W.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
const r0 = {
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
  return W.NODE_ENV !== "production" && o && wi(e, t, n, ...s), o;
}
function wi(e, t, n, ...s) {
  if (Gr(e, t) === "suppress-warning")
    return;
  const { message: i, link: r } = r0[e], l = `(deprecation ${e}) ${typeof i == "function" ? i(...s) : i}${r ? `
  Details: ${r}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Yl(e) {
  throw e;
}
function Xd(e) {
  W.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Ne(e, t, n, s) {
  const o = W.NODE_ENV !== "production" ? (n || l0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, i = new SyntaxError(String(o));
  return i.code = e, i.loc = t, i;
}
const l0 = {
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
}, yt = (e) => e.type === 4 && e.isStatic;
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
const a0 = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Jl = (e) => !a0.test(e), c0 = /[A-Za-z_$\xA0-\uFFFF]/, u0 = /[\.\?\w$\xA0-\uFFFF]/, d0 = /\s+[.[]\s*|\s*[.[]\s+/g, Zd = (e) => e.type === 4 ? e.content : e.loc.source, f0 = (e) => {
  const t = Zd(e).trim().replace(d0, (l) => l.trim());
  let n = 0, s = [], o = 0, i = 0, r = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, i++;
        else if (!(l === 0 ? c0 : u0).test(a))
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
}, ef = f0, p0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, h0 = (e) => p0.test(Zd(e)), m0 = h0;
function rc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function vt(e, t, n = !1) {
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
  return !!(e && yt(e) && e.content === t);
}
function g0(e) {
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
function v0(e) {
  return e.type === 7 && e.name === "slot";
}
function Ni(e) {
  return e.type === 1 && e.tagType === 3;
}
function xi(e) {
  return e.type === 1 && e.tagType === 2;
}
const y0 = /* @__PURE__ */ new Set([go, To]);
function tf(e, t = []) {
  if (e && !re(e) && e.type === 14) {
    const n = e.callee;
    if (!re(n) && y0.has(n))
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
    !re(l) && l.type === 15 ? ac(t, l) || l.properties.unshift(t) : o.callee === zl ? s = He(n.helper(bi), [
      Tt([t]),
      o
    ]) : o.arguments.unshift(Tt([t])), !s && (s = o);
  } else o.type === 15 ? (ac(t, o) || o.properties.unshift(t), s = o) : (s = He(n.helper(bi), [
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
function b0(e) {
  return e.type === 14 && e.callee === Wl ? e.arguments[1].returns : e;
}
const _0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, nf = {
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
  comments: W.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ve = nf, _o = null, mn = "", Qe = null, he = null, mt = "", un = -1, Hn = -1, Xl = 0, kn = !1, Yr = null;
const De = [], ke = new i0(De, {
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
    for (; Nt(mn.charCodeAt(n)); )
      n++;
    for (; Nt(mn.charCodeAt(s - 1)); )
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
      modifiers: n === "." ? [ue("prop")] : [],
      loc: Pe(e)
    }, s === "pre") {
      kn = ke.inVPre = !0, Yr = Qe;
      const o = Qe.props;
      for (let i = 0; i < o.length; i++)
        o[i].type === 7 && (o[i] = V0(o[i]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Ke(e, t);
    if (kn && !lc(he))
      he.name += n, Kn(he.nameLoc, t);
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
      he.name += "." + n, Kn(he.nameLoc, t);
    else if (he.name === "slot") {
      const s = he.arg;
      s && (s.content += "." + n, Kn(s.loc, t));
    } else {
      const s = ue(n, !0, Pe(e, t));
      he.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    mt += Ke(e, t), un < 0 && (un = e), Hn = t;
  },
  onattribentity(e, t, n) {
    mt += e, un < 0 && (un = t), Hn = n;
  },
  onattribnameend(e) {
    const t = he.loc.start.offset, n = Ke(t, e);
    he.type === 7 && (he.rawName = n), Qe.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && ht(2, t);
  },
  onattribend(e, t) {
    if (Qe && he) {
      if (Kn(he.loc, t), e !== 0)
        if (mt.includes("&") && (mt = ve.decodeEntities(
          mt,
          !0
        )), he.type === 6)
          he.name === "class" && (mt = rf(mt).trim()), e === 1 && !mt && ht(13, t), he.value = {
            type: 2,
            content: mt,
            loc: e === 1 ? Pe(un, Hn) : Pe(un - 1, Hn + 1)
          }, ke.inSFCRoot && Qe.tag === "template" && he.name === "lang" && mt && mt !== "html" && ke.enterRCDATA(Ei("</template"), 0);
        else {
          let n = 0;
          he.exp = Jo(
            mt,
            !1,
            Pe(un, Hn),
            0,
            n
          ), he.name === "for" && (he.forParseResult = w0(he.exp));
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
    mt = "", un = Hn = -1;
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
    if (W.NODE_ENV !== "production" && ke.state !== 1)
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
}), cc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, E0 = /^\(|\)$/g;
function w0(e) {
  const t = e.loc, n = e.content, s = n.match(_0);
  if (!s) return;
  const [, o, i] = s, r = (u, h, m = !1) => {
    const b = t.start.offset + h, g = b + u.length;
    return Jo(
      u,
      !1,
      Pe(b, g),
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
  let a = o.trim().replace(E0, "").trim();
  const c = o.indexOf(a), d = a.match(cc);
  if (d) {
    a = a.replace(cc, "").trim();
    const u = d[1].trim();
    let h;
    if (u && (h = n.indexOf(u, c + a.length), l.key = r(u, h, !0)), d[2]) {
      const m = d[2].trim();
      m && (l.index = r(
        m,
        n.indexOf(
          m,
          l.key ? h + u.length : c + a.length
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
  o && o.type === 2 ? (o.content += e, Kn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Pe(t, n)
  });
}
function Yo(e, t, n = !1) {
  n ? Kn(e.loc, sf(t, 60)) : Kn(e.loc, N0(t, 62) + 1), ke.inSFCRoot && (e.children.length ? e.innerLoc.end = de({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = de({}, e.innerLoc.start), e.innerLoc.source = Ke(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: i } = e;
  if (kn || (s === "slot" ? e.tagType = 2 : dc(e) ? e.tagType = 3 : S0(e) && (e.tagType = 1)), ke.inRCDATA || (e.children = of(i)), o === 0 && ve.isIgnoreNewlineTag(s)) {
    const r = i[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ve.isPreTag(s) && Xl--, Yr === e && (kn = ke.inVPre = !1, Yr = null), ke.inXML && (De[0] ? De[0].ns : ve.ns) === 0 && (ke.inXML = !1);
  {
    const r = e.props;
    if (W.NODE_ENV !== "production" && In(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ve
    )) {
      let a = !1, c = !1;
      for (let d = 0; d < r.length; d++) {
        const u = r[d];
        if (u.type === 7 && (u.name === "if" ? a = !0 : u.name === "for" && (c = !0)), a && c) {
          wi(
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
      W.NODE_ENV !== "production" && wi(
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
function N0(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n < mn.length - 1; ) n++;
  return n;
}
function sf(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const x0 = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function dc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && x0.has(t[n].name))
        return !0;
  }
  return !1;
}
function S0({ tag: e, props: t }) {
  if (ve.isCustomElement(e))
    return !1;
  if (e === "component" || C0(e.charCodeAt(0)) || Qd(e) || ve.isBuiltInComponent && ve.isBuiltInComponent(e) || ve.isNativeTag && !ve.isNativeTag(e))
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
function C0(e) {
  return e > 64 && e < 91;
}
const k0 = /\r\n/g;
function of(e) {
  const t = ve.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (Xl)
        o.content = o.content.replace(k0, `
`);
      else if (O0(o.content)) {
        const i = e[s - 1] && e[s - 1].type, r = e[s + 1] && e[s + 1].type;
        !i || !r || t && (i === 3 && (r === 3 || r === 1) || i === 1 && (r === 3 || r === 1 && T0(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = rf(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function O0(e) {
  for (let t = 0; t < e.length; t++)
    if (!Nt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function T0(e) {
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
    Nt(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
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
function D0(e) {
  return Pe(e.start.offset, e.end.offset);
}
function Kn(e, t) {
  e.end = ke.getPos(t), e.source = Ke(e.start.offset, t);
}
function V0(e) {
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
  return ue(e, t, n, s);
}
function ht(e, t, n) {
  ve.onError(
    Ne(e, Pe(t, t), void 0, n)
  );
}
function $0() {
  ke.reset(), Qe = null, he = null, mt = "", un = -1, Hn = -1, De.length = 0;
}
function A0(e, t) {
  if ($0(), mn = e, ve = de({}, nf), t) {
    let o;
    for (o in t)
      t[o] != null && (ve[o] = t[o]);
  }
  if (W.NODE_ENV !== "production" && !ve.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  ke.mode = ve.parseMode === "html" ? 1 : ve.parseMode === "sfc" ? 2 : 0, ke.inXML = ve.ns === 1 || ve.ns === 2;
  const n = t && t.delimiters;
  n && (ke.delimiterOpen = Ei(n[0]), ke.delimiterClose = Ei(n[1]));
  const s = _o = n0([], e);
  return ke.parse(mn), s.loc = Pe(0, e.length), s.children = of(s.children), _o = null, s;
}
function I0(e, t) {
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
    const h = i[u];
    if (h.type === 1 && h.tagType === 0) {
      const m = s ? 0 : xt(h, n);
      if (m > 0) {
        if (m >= 2) {
          h.codegenNode.patchFlag = -1, r.push(h);
          continue;
        }
      } else {
        const b = h.codegenNode;
        if (b.type === 13) {
          const g = b.patchFlag;
          if ((g === void 0 || g === 512 || g === 1) && cf(h, n) >= 2) {
            const D = uf(h);
            D && (b.props = n.hoist(D));
          }
          b.dynamicProps && (b.dynamicProps = n.hoist(b.dynamicProps));
        }
      }
    } else if (h.type === 12 && (s ? 0 : xt(h, n)) >= 2) {
      h.codegenNode.type === 14 && h.codegenNode.arguments.length > 0 && h.codegenNode.arguments.push(
        -1 + (W.NODE_ENV !== "production" ? ` /* ${Xs[-1]} */` : "")
      ), r.push(h);
      continue;
    }
    if (h.type === 1) {
      const m = h.tagType === 1;
      m && n.scopes.vSlot++, Xo(h, e, n, !1, o), m && n.scopes.vSlot--;
    } else if (h.type === 11)
      Xo(h, e, n, h.children.length === 1, !0);
    else if (h.type === 9)
      for (let m = 0; m < h.branches.length; m++)
        Xo(
          h.branches[m],
          e,
          n,
          h.branches[m].children.length === 1,
          o
        );
  }
  let l = !1;
  const a = [];
  if (r.length === i.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && K(e.codegenNode.children))
      e.codegenNode.children = c(
        es(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !K(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = d(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = c(
        es(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !K(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = vt(e, "slot", !0), h = u && u.arg && d(t.codegenNode, u.arg);
      h && (a.push(n.cached.length), h.returns = c(
        es(h.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const u of r)
      a.push(n.cached.length), u.codegenNode = n.cache(u.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !K(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Me(
      "__",
      ue(JSON.stringify(a), !1)
    )
  );
  function c(u) {
    const h = n.cache(u);
    return o && n.hmr && (h.needArraySpread = !0), h;
  }
  function d(u, h) {
    if (u.children && !K(u.children) && u.children.type === 15) {
      const m = u.children.properties.find(
        (b) => b.key === h || b.key.content === h
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
        if (re(l) || bt(l))
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
const M0 = /* @__PURE__ */ new Set([
  Ul,
  ql,
  go,
  To
]);
function af(e, t) {
  if (e.type === 14 && !re(e.callee) && M0.has(e.callee)) {
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
function P0(e, {
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
  scopeId: h = null,
  slotted: m = !0,
  ssr: b = !1,
  inSSR: g = !1,
  ssrCssVars: D = "",
  bindingMetadata: k = fe,
  inline: _ = !1,
  isTS: f = !1,
  onError: x = Yl,
  onWarn: E = Xd,
  compatConfig: $
}) {
  const P = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), N = {
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
    scopeId: h,
    slotted: m,
    ssr: b,
    inSSR: g,
    ssrCssVars: D,
    bindingMetadata: k,
    inline: _,
    isTS: f,
    onError: x,
    onWarn: E,
    compatConfig: $,
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
    helper(v) {
      const C = N.helpers.get(v) || 0;
      return N.helpers.set(v, C + 1), v;
    },
    removeHelper(v) {
      const C = N.helpers.get(v);
      if (C) {
        const A = C - 1;
        A ? N.helpers.set(v, A) : N.helpers.delete(v);
      }
    },
    helperString(v) {
      return `_${$s[N.helper(v)]}`;
    },
    replaceNode(v) {
      if (W.NODE_ENV !== "production") {
        if (!N.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!N.parent)
          throw new Error("Cannot replace root node.");
      }
      N.parent.children[N.childIndex] = N.currentNode = v;
    },
    removeNode(v) {
      if (W.NODE_ENV !== "production" && !N.parent)
        throw new Error("Cannot remove root node.");
      const C = N.parent.children, A = v ? C.indexOf(v) : N.currentNode ? N.childIndex : -1;
      if (W.NODE_ENV !== "production" && A < 0)
        throw new Error("node being removed is not a child of current parent");
      !v || v === N.currentNode ? (N.currentNode = null, N.onNodeRemoved()) : N.childIndex > A && (N.childIndex--, N.onNodeRemoved()), N.parent.children.splice(A, 1);
    },
    onNodeRemoved: Oe,
    addIdentifiers(v) {
    },
    removeIdentifiers(v) {
    },
    hoist(v) {
      re(v) && (v = ue(v)), N.hoists.push(v);
      const C = ue(
        `_hoisted_${N.hoists.length}`,
        !1,
        v.loc,
        2
      );
      return C.hoisted = v, C;
    },
    cache(v, C = !1, A = !1) {
      const V = s0(
        N.cached.length,
        v,
        C,
        A
      );
      return N.cached.push(V), V;
    }
  };
  return N.filters = /* @__PURE__ */ new Set(), N;
}
function R0(e, t) {
  const n = P0(e, t);
  Ji(e, n), t.hoistStatic && I0(e, n), t.ssr || L0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function L0(e, t) {
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
    W.NODE_ENV !== "production" && s.filter((i) => i.type !== 3).length === 1 && (o |= 2048), e.codegenNode = vo(
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
function F0(e, t) {
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
    if (r && (K(r) ? s.push(...r) : s.push(r)), t.currentNode)
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
      F0(e, t);
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
      if (s.tagType === 3 && i.some(v0))
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
function B0(e, {
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
  inSSR: h = !1
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
    inSSR: h,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(g) {
      return `_${$s[g]}`;
    },
    push(g, D = -2, k) {
      m.code += g;
    },
    indent() {
      b(++m.indentLevel);
    },
    deindent(g = !1) {
      g ? --m.indentLevel : b(--m.indentLevel);
    },
    newline() {
      b(m.indentLevel);
    }
  };
  function b(g) {
    m.push(
      `
` + "  ".repeat(g),
      0
      /* Start */
    );
  }
  return m;
}
function j0(e, t = {}) {
  const n = B0(e, t);
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
  } = n, u = Array.from(e.helpers), h = u.length > 0, m = !i && s !== "module";
  H0(e, n);
  const g = d ? "ssrRender" : "render", k = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${g}(${k}) {`), r(), m && (o("with (_ctx) {"), r(), h && (o(
    `const { ${u.map(ff).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (vr(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (vr(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), vr(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let _ = 0; _ < e.temps; _++)
      o(`${_ > 0 ? ", " : ""}_temp${_}`);
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
function H0(e, t) {
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
    ].filter((h) => d.includes(h)).map(ff).join(", ");
    o(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  U0(e.hoists, t), i(), o("return ");
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
function U0(e, t) {
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
function q0(e) {
  return re(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Ql(e, t) {
  const n = e.length > 3 || W.NODE_ENV !== "production" && e.some((s) => K(s) || !q0(s));
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
    ) : K(l) ? Ql(l, t) : nt(l, t), r < e.length - 1 && (n ? (s && o(","), i()) : s && o(", "));
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
  if (bt(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      W.NODE_ENV !== "production" && rc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), nt(e.codegenNode, t);
      break;
    case 2:
      z0(e, t);
      break;
    case 4:
      pf(e, t);
      break;
    case 5:
      K0(e, t);
      break;
    case 12:
      nt(e.codegenNode, t);
      break;
    case 8:
      hf(e, t);
      break;
    case 3:
      G0(e, t);
      break;
    case 13:
      Y0(e, t);
      break;
    case 14:
      X0(e, t);
      break;
    case 15:
      Q0(e, t);
      break;
    case 17:
      Z0(e, t);
      break;
    case 18:
      ev(e, t);
      break;
    case 19:
      tv(e, t);
      break;
    case 20:
      nv(e, t);
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
      if (W.NODE_ENV !== "production")
        return rc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function z0(e, t) {
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
function K0(e, t) {
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
function W0(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), hf(e, t), n("]");
  else if (e.isStatic) {
    const s = Jl(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function G0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Xi), n(
    `${s(Oo)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Y0(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: i,
    props: r,
    children: l,
    patchFlag: a,
    dynamicProps: c,
    directives: d,
    isBlock: u,
    disableTracking: h,
    isComponent: m
  } = e;
  let b;
  if (a)
    if (W.NODE_ENV !== "production")
      if (a < 0)
        b = a + ` /* ${Xs[a]} */`;
      else {
        const D = Object.keys(Xs).map(Number).filter((k) => k > 0 && a & k).map((k) => Xs[k]).join(", ");
        b = a + ` /* ${D} */`;
      }
    else
      b = String(a);
  d && n(s(jl) + "("), u && n(`(${s(rs)}(${h ? "true" : ""}), `), o && n(Xi);
  const g = u ? Ms(t.inSSR, m) : Is(t.inSSR, m);
  n(s(g) + "(", -2, e), Do(
    J0([i, r, l, b, c]),
    t
  ), n(")"), u && n(")"), d && (n(", "), nt(d, t), n(")"));
}
function J0(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function X0(e, t) {
  const { push: n, helper: s, pure: o } = t, i = re(e.callee) ? e.callee : s(e.callee);
  o && n(Xi), n(i + "(", -2, e), Do(e.arguments, t), n(")");
}
function Q0(e, t) {
  const { push: n, indent: s, deindent: o, newline: i } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const l = r.length > 1 || W.NODE_ENV !== "production" && r.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < r.length; a++) {
    const { key: c, value: d } = r[a];
    W0(c, t), n(": "), nt(d, t), a < r.length - 1 && (n(","), i());
  }
  l && o(), n(l ? "}" : " }");
}
function Z0(e, t) {
  Ql(e.elements, t);
}
function ev(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: i, returns: r, body: l, newline: a, isSlot: c } = e;
  c && n(`_${$s[Kl]}(`), n("(", -2, e), K(i) ? Do(i, t) : i && nt(i, t), n(") => "), (a || l) && (n("{"), s()), r ? (a && n("return "), K(r) ? Ql(r, t) : nt(r, t)) : l && nt(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function tv(e, t) {
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
function nv(e, t) {
  const { push: n, helper: s, indent: o, deindent: i, newline: r } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(_i)}(-1`), e.inVOnce && n(", true"), n("),"), r(), n("(")), n(`_cache[${e.index}] = `), nt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), r(), n(`${s(_i)}(1),`), r(), n(`_cache[${e.index}]`), i()), n(")"), a && n(")]");
}
const sv = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), ov = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Wn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (i) {
      let r = i.message;
      const l = o.replace(ov, "").match(sv);
      l && (r = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        Ne(
          45,
          e.loc,
          void 0,
          r
        )
      );
    }
}
const iv = (e, t) => {
  if (e.type === 5)
    e.content = yr(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = vt(e, "memo");
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
  return W.NODE_ENV !== "production" && Wn(e, t, n, s), e;
}
const rv = df(
  /^(if|else|else-if)$/,
  (e, t, n) => lv(e, t, n, (s, o, i) => {
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
        const c = cv(s.codegenNode);
        c.alternate = pc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function lv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      Ne(28, t.loc)
    ), t.exp = ue("true", !1, o);
  }
  if (W.NODE_ENV !== "production" && t.exp && Wn(t.exp, n), t.name === "if") {
    const o = fc(e, t), i = {
      type: 9,
      loc: D0(e.loc),
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
        n.removeNode(l), W.NODE_ENV !== "production" && i.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          Ne(30, e.loc)
        ), n.removeNode();
        const a = fc(e, t);
        if (W.NODE_ENV !== "production" && i.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...i, ...a.children]), W.NODE_ENV !== "production") {
          const d = a.userKey;
          d && l.branches.forEach(({ userKey: u }) => {
            av(u, d) && n.onError(
              Ne(
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
          Ne(30, e.loc)
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
    children: n && !vt(e, "for") ? e.children : [e],
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
    He(n.helper(Oo), [
      W.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : hc(e, t, n);
}
function hc(e, t, n) {
  const { helper: s } = n, o = Me(
    "key",
    ue(
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
      return W.NODE_ENV !== "production" && !e.isTemplateIf && i.filter((c) => c.type !== 3).length === 1 && (a |= 2048), vo(
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
    const a = r.codegenNode, c = b0(a);
    return c.type === 13 && Gl(c, n), Si(c, o, n), a;
  }
}
function av(e, t) {
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
function cv(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const uv = (e, t, n) => {
  const { modifiers: s, loc: o } = e, i = e.arg;
  let { exp: r } = e;
  if (r && r.type === 4 && !r.content.trim() && (r = void 0), !r) {
    if (i.type !== 4 || !i.isStatic)
      return n.onError(
        Ne(
          52,
          i.loc
        )
      ), {
        props: [
          Me(i, ue("", !0, o))
        ]
      };
    mf(e), r = e.exp;
  }
  return i.type !== 4 ? (i.children.unshift("("), i.children.push(') || ""')) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : '""'), s.some((l) => l.content === "camel") && (i.type === 4 ? i.isStatic ? i.content = Se(i.content) : i.content = `${n.helperString(zr)}(${i.content})` : (i.children.unshift(`${n.helperString(zr)}(`), i.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && mc(i, "."), s.some((l) => l.content === "attr") && mc(i, "^")), {
    props: [Me(i, r)]
  };
}, mf = (e, t) => {
  const n = e.arg, s = Se(n.content);
  e.exp = ue(s, !1, n.loc);
}, mc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, dv = df(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return fv(e, t, n, (i) => {
      const r = He(s(Hl), [
        i.source
      ]), l = Ni(e), a = vt(e, "memo"), c = yo(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && mf(c);
      let u = c && (c.type === 6 ? c.value ? ue(c.value.content, !0) : void 0 : c.exp);
      const h = c && u ? Me("key", u) : null, m = i.source.type === 4 && i.source.constType > 0, b = m ? 64 : c ? 128 : 256;
      return i.codegenNode = vo(
        n,
        s(mo),
        void 0,
        r,
        b,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let g;
        const { children: D } = i;
        W.NODE_ENV !== "production" && l && e.children.some((f) => {
          if (f.type === 1) {
            const x = yo(f, "key");
            if (x)
              return n.onError(
                Ne(
                  33,
                  x.loc
                )
              ), !0;
          }
        });
        const k = D.length !== 1 || D[0].type !== 1, _ = xi(e) ? e : l && e.children.length === 1 && xi(e.children[0]) ? e.children[0] : null;
        if (_ ? (g = _.codegenNode, l && h && Si(g, h, n)) : k ? g = vo(
          n,
          s(mo),
          h ? Tt([h]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (g = D[0].codegenNode, l && h && Si(g, h, n), g.isBlock !== !m && (g.isBlock ? (o(rs), o(
          Ms(n.inSSR, g.isComponent)
        )) : o(
          Is(n.inSSR, g.isComponent)
        )), g.isBlock = !m, g.isBlock ? (s(rs), s(Ms(n.inSSR, g.isComponent))) : s(Is(n.inSSR, g.isComponent))), a) {
          const f = As(
            Xr(i.parseResult, [
              ue("_cached")
            ])
          );
          f.body = o0([
            Ut(["const _memo = (", a.exp, ")"]),
            Ut([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Jd
              )}(_cached, _memo)) return _cached`
            ]),
            Ut(["const _item = ", g]),
            ue("_item.memo = _memo"),
            ue("return _item")
          ]), r.arguments.push(
            f,
            ue("_cache"),
            ue(String(n.cached.length))
          ), n.cached.push(null);
        } else
          r.arguments.push(
            As(
              Xr(i.parseResult),
              g,
              !0
            )
          );
      };
    });
  }
);
function fv(e, t, n, s) {
  if (!t.exp) {
    n.onError(
      Ne(31, t.loc)
    );
    return;
  }
  const o = t.forParseResult;
  if (!o) {
    n.onError(
      Ne(32, t.loc)
    );
    return;
  }
  gf(o, n);
  const { addIdentifiers: i, removeIdentifiers: r, scopes: l } = n, { source: a, value: c, key: d, index: u } = o, h = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: d,
    objectIndexAlias: u,
    parseResult: o,
    children: Ni(e) ? e.children : [e]
  };
  n.replaceNode(h), l.vFor++;
  const m = s && s(h);
  return () => {
    l.vFor--, m && m();
  };
}
function gf(e, t) {
  e.finalized || (W.NODE_ENV !== "production" && (Wn(e.source, t), e.key && Wn(
    e.key,
    t,
    !0
  ), e.index && Wn(
    e.index,
    t,
    !0
  ), e.value && Wn(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function Xr({ value: e, key: t, index: n }, s = []) {
  return pv([e, t, n, ...s]);
}
function pv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || ue("_".repeat(s + 1), !1));
}
const gc = ue("undefined", !1), hv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = vt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, mv = (e, t, n, s) => As(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function gv(e, t, n = mv) {
  t.helper(Kl);
  const { children: s, loc: o } = e, i = [], r = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = vt(e, "slot", !0);
  if (a) {
    const { arg: D, exp: k } = a;
    D && !yt(D) && (l = !0), i.push(
      Me(
        D || ue("default", !0),
        n(k, void 0, s, o)
      )
    );
  }
  let c = !1, d = !1;
  const u = [], h = /* @__PURE__ */ new Set();
  let m = 0;
  for (let D = 0; D < s.length; D++) {
    const k = s[D];
    let _;
    if (!Ni(k) || !(_ = vt(k, "slot", !0))) {
      k.type !== 3 && u.push(k);
      continue;
    }
    if (a) {
      t.onError(
        Ne(37, _.loc)
      );
      break;
    }
    c = !0;
    const { children: f, loc: x } = k, {
      arg: E = ue("default", !0),
      exp: $,
      loc: P
    } = _;
    let N;
    yt(E) ? N = E ? E.content : "default" : l = !0;
    const v = vt(k, "for"), C = n($, v, f, x);
    let A, V;
    if (A = vt(k, "if"))
      l = !0, r.push(
        Wr(
          A.exp,
          jo(E, C, m++),
          gc
        )
      );
    else if (V = vt(
      k,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let R = D, J;
      for (; R-- && (J = s[R], !(J.type !== 3 && Qr(J))); )
        ;
      if (J && Ni(J) && vt(J, /^(else-)?if$/)) {
        let ee = r[r.length - 1];
        for (; ee.alternate.type === 19; )
          ee = ee.alternate;
        ee.alternate = V.exp ? Wr(
          V.exp,
          jo(
            E,
            C,
            m++
          ),
          gc
        ) : jo(E, C, m++);
      } else
        t.onError(
          Ne(30, V.loc)
        );
    } else if (v) {
      l = !0;
      const R = v.forParseResult;
      R ? (gf(R, t), r.push(
        He(t.helper(Hl), [
          R.source,
          As(
            Xr(R),
            jo(E, C),
            !0
          )
        ])
      )) : t.onError(
        Ne(
          32,
          v.loc
        )
      );
    } else {
      if (N) {
        if (h.has(N)) {
          t.onError(
            Ne(
              38,
              P
            )
          );
          continue;
        }
        h.add(N), N === "default" && (d = !0);
      }
      i.push(Me(E, C));
    }
  }
  if (!a) {
    const D = (k, _) => {
      const f = n(k, void 0, _, o);
      return t.compatConfig && (f.isNonScopedSlot = !0), Me("default", f);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((k) => Qr(k)) && (d ? t.onError(
      Ne(
        39,
        u[0].loc
      )
    ) : i.push(
      D(void 0, u)
    )) : i.push(D(void 0, s));
  }
  const b = l ? 2 : Qo(e.children) ? 3 : 1;
  let g = Tt(
    i.concat(
      Me(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ue(
          b + (W.NODE_ENV !== "production" ? ` /* ${qf[b]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return r.length && (g = He(t.helper(Yd), [
    g,
    es(r)
  ])), {
    slots: g,
    hasDynamicSlots: l
  };
}
function jo(e, t, n) {
  const s = [
    Me("name", e),
    Me("fn", t)
  ];
  return n != null && s.push(
    Me("key", ue(String(n), !0))
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
const vf = /* @__PURE__ */ new WeakMap(), vv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, i = e.tagType === 1;
  let r = i ? yv(e, t) : `"${s}"`;
  const l = me(r) && r.callee === Ll;
  let a, c, d = 0, u, h, m, b = (
    // dynamic component may resolve to plain elements
    l || r === ro || r === Al || !i && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const g = yf(
      e,
      t,
      void 0,
      i,
      l
    );
    a = g.props, d = g.patchFlag, h = g.dynamicPropNames;
    const D = g.directives;
    m = D && D.length ? es(
      D.map((k) => _v(k, t))
    ) : void 0, g.shouldUseBlock && (b = !0);
  }
  if (e.children.length > 0)
    if (r === yi && (b = !0, d |= 1024, W.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Ne(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), i && // Teleport is not a real component and has dedicated runtime handling
    r !== ro && // explained above.
    r !== yi) {
      const { slots: D, hasDynamicSlots: k } = gv(e, t);
      c = D, k && (d |= 1024);
    } else if (e.children.length === 1 && r !== ro) {
      const D = e.children[0], k = D.type, _ = k === 5 || k === 8;
      _ && xt(D, t) === 0 && (d |= 1), _ || k === 2 ? c = D : c = e.children;
    } else
      c = e.children;
  h && h.length && (u = Ev(h)), e.codegenNode = vo(
    t,
    r,
    a,
    c,
    d === 0 ? void 0 : d,
    u,
    m,
    !!b,
    !1,
    i,
    e.loc
  );
};
function yv(e, t, n = !1) {
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
      if (i.type === 6 ? l = i.value && ue(i.value.content, !0) : (l = i.exp, l || (l = ue("is", !1, i.arg.loc))), l)
        return He(t.helper(Ll), [
          l
        ]);
    } else i.type === 6 && i.value.content.startsWith("vue:") && (s = i.value.content.slice(4));
  const r = Qd(s) || t.isBuiltInComponent(s);
  return r ? (n || t.helper(r), r) : (t.helper(Rl), t.components.add(s), bo(s, "component"));
}
function yf(e, t, n = e.props, s, o, i = !1) {
  const { tag: r, loc: l, children: a } = e;
  let c = [];
  const d = [], u = [], h = a.length > 0;
  let m = !1, b = 0, g = !1, D = !1, k = !1, _ = !1, f = !1, x = !1;
  const E = [], $ = (C) => {
    c.length && (d.push(
      Tt(vc(c), l)
    ), c = []), C && d.push(C);
  }, P = () => {
    t.scopes.vFor > 0 && c.push(
      Me(
        ue("ref_for", !0),
        ue("true")
      )
    );
  }, N = ({ key: C, value: A }) => {
    if (yt(C)) {
      const V = C.content, R = gn(V);
      if (R && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      V.toLowerCase() !== "onclick" && // omit v-model handlers
      V !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Vn(V) && (_ = !0), R && Vn(V) && (x = !0), R && A.type === 14 && (A = A.arguments[0]), A.type === 20 || (A.type === 4 || A.type === 8) && xt(A, t) > 0)
        return;
      V === "ref" ? g = !0 : V === "class" ? D = !0 : V === "style" ? k = !0 : V !== "key" && !E.includes(V) && E.push(V), s && (V === "class" || V === "style") && !E.includes(V) && E.push(V);
    } else
      f = !0;
  };
  for (let C = 0; C < n.length; C++) {
    const A = n[C];
    if (A.type === 6) {
      const { loc: V, name: R, nameLoc: J, value: ee } = A;
      let Z = !0;
      if (R === "ref" && (g = !0, P()), R === "is" && (Zr(r) || ee && ee.content.startsWith("vue:") || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Me(
          ue(R, !0, J),
          ue(
            ee ? ee.content : "",
            Z,
            ee ? ee.loc : V
          )
        )
      );
    } else {
      const { name: V, arg: R, exp: J, loc: ee, modifiers: Z } = A, se = V === "bind", Q = V === "on";
      if (V === "slot") {
        s || t.onError(
          Ne(40, ee)
        );
        continue;
      }
      if (V === "once" || V === "memo" || V === "is" || se && Dn(R, "is") && (Zr(r) || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || Q && i)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (se && Dn(R, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        Q && h && Dn(R, "vue:before-update")) && (m = !0), se && Dn(R, "ref") && P(), !R && (se || Q)
      ) {
        if (f = !0, J)
          if (se) {
            if ($(), W.NODE_ENV !== "production" && d.some((Ct) => Ct.type === 15 ? Ct.properties.some(({ key: kt }) => kt.type !== 4 || !kt.isStatic ? !0 : kt.content !== "class" && kt.content !== "style" && !gn(kt.content)) : !0) && Ps(
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
            P(), $(), d.push(J);
          } else
            $({
              type: 14,
              loc: ee,
              callee: t.helper(zl),
              arguments: s ? [J] : [J, "true"]
            });
        else
          t.onError(
            Ne(
              se ? 34 : 35,
              ee
            )
          );
        continue;
      }
      se && Z.some((ft) => ft.content === "prop") && (b |= 32);
      const Ee = t.directiveTransforms[V];
      if (Ee) {
        const { props: ft, needRuntime: Ct } = Ee(A, e, t);
        !i && ft.forEach(N), Q && R && !yt(R) ? $(Tt(ft, l)) : c.push(...ft), Ct && (u.push(A), bt(Ct) && vf.set(A, Ct));
      } else Tc(V) || (u.push(A), h && (m = !0));
    }
  }
  let v;
  if (d.length ? ($(), d.length > 1 ? v = He(
    t.helper(bi),
    d,
    l
  ) : v = d[0]) : c.length && (v = Tt(
    vc(c),
    l
  )), f ? b |= 16 : (D && !s && (b |= 2), k && !s && (b |= 4), E.length && (b |= 8), _ && (b |= 32)), !m && (b === 0 || b === 32) && (g || x || u.length > 0) && (b |= 512), !t.inSSR && v)
    switch (v.type) {
      case 15:
        let C = -1, A = -1, V = !1;
        for (let ee = 0; ee < v.properties.length; ee++) {
          const Z = v.properties[ee].key;
          yt(Z) ? Z.content === "class" ? C = ee : Z.content === "style" && (A = ee) : Z.isHandlerKey || (V = !0);
        }
        const R = v.properties[C], J = v.properties[A];
        V ? v = He(
          t.helper(go),
          [v]
        ) : (R && !yt(R.value) && (R.value = He(
          t.helper(Ul),
          [R.value]
        )), J && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (k || J.value.type === 4 && J.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        J.value.type === 17) && (J.value = He(
          t.helper(ql),
          [J.value]
        )));
        break;
      case 14:
        break;
      default:
        v = He(
          t.helper(go),
          [
            He(t.helper(To), [
              v
            ])
          ]
        );
        break;
    }
  return {
    props: v,
    directives: u,
    patchFlag: b,
    dynamicPropNames: E,
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
    r ? (i === "style" || i === "class" || gn(i)) && bv(r, o) : (t.set(i, o), n.push(o));
  }
  return n;
}
function bv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = es(
    [e.value, t.value],
    e.loc
  );
}
function _v(e, t) {
  const n = [], s = vf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Fl), t.directives.add(e.name), n.push(bo(e.name, "directive")));
  const { loc: o } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const i = ue("true", !1, o);
    n.push(
      Tt(
        e.modifiers.map(
          (r) => Me(r, i)
        ),
        o
      )
    );
  }
  return es(n, e.loc);
}
function Ev(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function Zr(e) {
  return e === "component" || e === "Component";
}
const wv = (e, t) => {
  if (xi(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: i } = Nv(e, t), r = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    i && (r[2] = i, l = 3), n.length && (r[3] = As([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), r.splice(l), e.codegenNode = He(
      t.helper(Gd),
      r,
      s
    );
  }
};
function Nv(e, t) {
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
        n = r.exp = ue(l, !1, r.arg.loc);
      }
    } else
      r.name === "bind" && r.arg && yt(r.arg) && (r.arg.content = Se(r.arg.content)), o.push(r);
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
      Ne(
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
  !e.exp && !i.length && n.onError(Ne(35, o));
  let l;
  if (r.type === 4)
    if (r.isStatic) {
      let u = r.content;
      W.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Ne(51, r.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const h = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Zt(Se(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = ue(h, !0, r.loc);
    } else
      l = Ut([
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
    const u = ef(a), h = !(u || m0(a)), m = a.content.includes(";");
    W.NODE_ENV !== "production" && Wn(
      a,
      n,
      !1,
      m
    ), (h || c && u) && (a = Ut([
      `${h ? "$event" : "(...args)"} => ${m ? "{" : "("}`,
      a,
      m ? "}" : ")"
    ]));
  }
  let d = {
    props: [
      Me(
        l,
        a || ue("() => {}", !1, o)
      )
    ]
  };
  return s && (d = s(d)), c && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((u) => u.key.isHandlerKey = !0), d;
}, xv = (e, t) => {
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
              s || (s = n[i] = Ut(
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
              1 + (W.NODE_ENV !== "production" ? ` /* ${Xs[1]} */` : "")
            ), n[i] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: He(
                t.helper(Pl),
                l
              )
            };
          }
        }
    };
}, yc = /* @__PURE__ */ new WeakSet(), Sv = (e, t) => {
  if (e.type === 1 && vt(e, "once", !0))
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
      Ne(41, e.loc)
    ), Ho();
  const i = s.loc.source.trim(), r = s.type === 4 ? s.content : i, l = n.bindingMetadata[i];
  if (l === "props" || l === "props-aliased")
    return n.onError(Ne(44, s.loc)), Ho();
  if (!r.trim() || !ef(s))
    return n.onError(
      Ne(42, s.loc)
    ), Ho();
  const a = o || ue("modelValue", !0), c = o ? yt(o) ? `onUpdate:${Se(o.content)}` : Ut(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let d;
  const u = n.isTS ? "($event: any)" : "$event";
  d = Ut([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const h = [
    // modelValue: foo
    Me(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Me(c, d)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((g) => g.content).map((g) => (Jl(g) ? g : JSON.stringify(g)) + ": true").join(", "), b = o ? yt(o) ? `${o.content}Modifiers` : Ut([o, ' + "Modifiers"']) : "modelModifiers";
    h.push(
      Me(
        b,
        ue(
          `{ ${m} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return Ho(h);
};
function Ho(e = []) {
  return { props: e };
}
const Cv = /[\w).+\-_$\]]/, kv = (e, t) => {
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
  let s = !1, o = !1, i = !1, r = !1, l = 0, a = 0, c = 0, d = 0, u, h, m, b, g = [];
  for (m = 0; m < n.length; m++)
    if (h = u, u = n.charCodeAt(m), s)
      u === 39 && h !== 92 && (s = !1);
    else if (o)
      u === 34 && h !== 92 && (o = !1);
    else if (i)
      u === 96 && h !== 92 && (i = !1);
    else if (r)
      u === 47 && h !== 92 && (r = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !c)
      b === void 0 ? (d = m + 1, b = n.slice(0, m).trim()) : D();
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
        let k = m - 1, _;
        for (; k >= 0 && (_ = n.charAt(k), _ === " "); k--)
          ;
        (!_ || !Cv.test(_)) && (r = !0);
      }
    }
  b === void 0 ? b = n.slice(0, m).trim() : d !== 0 && D();
  function D() {
    g.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (g.length) {
    for (W.NODE_ENV !== "production" && wi(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < g.length; m++)
      b = Ov(b, g[m], t);
    e.content = b, e.ast = void 0;
  }
}
function Ov(e, t, n) {
  n.helper(Bl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${bo(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), i = t.slice(s + 1);
    return n.filters.add(o), `${bo(o, "filter")}(${e}${i !== ")" ? "," + i : i}`;
  }
}
const _c = /* @__PURE__ */ new WeakSet(), Tv = (e, t) => {
  if (e.type === 1) {
    const n = vt(e, "memo");
    return !n || _c.has(e) ? void 0 : (_c.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Gl(s, t), e.codegenNode = He(t.helper(Wl), [
        n.exp,
        As(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Dv(e) {
  return [
    [
      Sv,
      rv,
      Tv,
      dv,
      kv,
      ...W.NODE_ENV !== "production" ? [iv] : [],
      wv,
      vv,
      hv,
      xv
    ],
    {
      on: bf,
      bind: uv,
      model: _f
    }
  ];
}
function Vv(e, t = {}) {
  const n = t.onError || Yl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(Ne(47)) : s && n(Ne(48));
  const o = !1;
  t.cacheHandlers && n(Ne(49)), t.scopeId && !s && n(Ne(50));
  const i = de({}, t, {
    prefixIdentifiers: o
  }), r = re(e) ? A0(e, i) : e, [l, a] = Dv();
  return R0(
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
  ), j0(r, i);
}
const $v = () => ({ props: [] });
var st = {};
const Ef = Symbol(st.NODE_ENV !== "production" ? "vModelRadio" : ""), wf = Symbol(
  st.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Nf = Symbol(st.NODE_ENV !== "production" ? "vModelText" : ""), xf = Symbol(
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
t0({
  [Ef]: "vModelRadio",
  [wf]: "vModelCheckbox",
  [Nf]: "vModelText",
  [xf]: "vModelSelect",
  [el]: "vModelDynamic",
  [Sf]: "withModifiers",
  [Cf]: "withKeys",
  [kf]: "vShow",
  [Zl]: "Transition",
  [Of]: "TransitionGroup"
});
let ps;
function Av(e, t = !1) {
  return ps || (ps = document.createElement("div")), t ? (ps.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, ps.children[0].getAttribute("foo")) : (ps.innerHTML = e, ps.textContent);
}
const Iv = {
  parseMode: "html",
  isVoidTag: sp,
  isNativeTag: (e) => Vc(e) || $c(e) || Ac(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Av,
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
}, Mv = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ue("style", !0, t.loc),
      exp: Pv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Pv = (e, t) => {
  const n = Dc(e);
  return ue(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Bt(e, t) {
  return Ne(
    e,
    t,
    st.NODE_ENV !== "production" ? Rv : void 0
  );
}
const Rv = {
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
}, Lv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Bt(53, o)
  ), t.children.length && (n.onError(
    Bt(54, o)
  ), t.children.length = 0), {
    props: [
      Me(
        ue("innerHTML", !0, o),
        s || ue("", !0)
      )
    ]
  };
}, Fv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Bt(55, o)
  ), t.children.length && (n.onError(
    Bt(56, o)
  ), t.children.length = 0), {
    props: [
      Me(
        ue("textContent", !0),
        s ? xt(s, n) > 0 ? s : He(
          n.helperString(Yi),
          [s],
          o
        ) : ue("", !0)
      )
    ]
  };
}, Bv = (e, t, n) => {
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
    const l = vt(t, "bind");
    l && Dn(l.arg, "value") && n.onError(
      Bt(
        60,
        l.loc
      )
    );
  }
  const { tag: i } = t, r = n.isCustomElement(i);
  if (i === "input" || i === "textarea" || i === "select" || r) {
    let l = Nf, a = !1;
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
              l = wf;
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
      } else g0(t) ? l = el : st.NODE_ENV !== "production" && o();
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
}, jv = /* @__PURE__ */ qe("passive,once,capture"), Hv = /* @__PURE__ */ qe(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Uv = /* @__PURE__ */ qe("left,right"), Tf = /* @__PURE__ */ qe("onkeyup,onkeydown,onkeypress"), qv = (e, t, n, s) => {
  const o = [], i = [], r = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ps(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || jv(a) ? r.push(a) : Uv(a) ? yt(e) ? Tf(e.content.toLowerCase()) ? o.push(a) : i.push(a) : (o.push(a), i.push(a)) : Hv(a) ? i.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: i,
    eventOptionModifiers: r
  };
}, Ec = (e, t) => yt(e) && e.content.toLowerCase() === "onclick" ? ue(t, !0) : e.type !== 4 ? Ut([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, zv = (e, t, n) => bf(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: i, value: r } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = qv(i, o, n, e.loc);
  if (a.includes("right") && (i = Ec(i, "onContextmenu")), a.includes("middle") && (i = Ec(i, "onMouseup")), a.length && (r = He(n.helper(Sf), [
    r,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!yt(i) || Tf(i.content.toLowerCase())) && (r = He(n.helper(Cf), [
    r,
    JSON.stringify(l)
  ])), c.length) {
    const d = c.map(on).join("");
    i = yt(i) ? ue(`${i.content}${d}`, !0) : Ut(["(", i, `) + "${d}"`]);
  }
  return {
    props: [Me(i, r)]
  };
}), Kv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Bt(61, o)
  ), {
    props: [],
    needRuntime: n.helper(kf)
  };
}, Wv = (e, t) => {
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
const Gv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (st.NODE_ENV !== "production" && t.onError(
    Bt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Yv(e, t) {
  return e === "template" ? !0 : e in wc ? wc[e].has(t) : t in Nc ? Nc[t].has(e) : !(e in xc && xc[e].has(t) || t in Sc && Sc[t].has(e));
}
const hs = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Un = /* @__PURE__ */ new Set([]), wc = {
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
  script: Un,
  iframe: Un,
  option: Un,
  textarea: Un,
  style: Un,
  title: Un
}, Nc = {
  // sections
  html: Un,
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
}, Jv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Yv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Xv = [
  Mv,
  ...st.NODE_ENV !== "production" ? [Wv, Jv] : []
], Qv = {
  cloak: $v,
  html: Lv,
  text: Fv,
  model: Bv,
  // override compiler-core
  on: zv,
  // override compiler-core
  show: Kv
};
function Zv(e, t = {}) {
  return Vv(
    e,
    de({}, Iv, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Gv,
        ...Xv,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: de(
        {},
        Qv,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Js = {};
function ey() {
  _d();
}
Js.NODE_ENV !== "production" && ey();
const Cc = /* @__PURE__ */ Object.create(null);
function ty(e, t) {
  if (!re(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Js.NODE_ENV !== "production" && Ae("invalid template option: ", e), Oe;
  const n = Uf(e, t), s = Cc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Js.NODE_ENV !== "production" && !a && Ae(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
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
  const { code: i } = Zv(e, o);
  function r(a, c = !1) {
    const d = c ? a.message : `Template compilation error: ${a.message}`, u = a.loc && Wf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Ae(u ? `${d}
${u}` : d);
  }
  const l = new Function("Vue", i)(Yg);
  return l._rc = !0, Cc[n] = l;
}
gd(ty);
const it = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ny = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, sy = {
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
    const n = e, s = t, o = q(!1), i = te(() => n.href ? "a" : "button"), r = te(() => {
      const c = {};
      if (n.rounded === "full" ? c.borderRadius = "9999px" : n.rounded === "none" ? c.borderRadius = "0" : n.buttonRadius !== null ? c.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius : c.borderRadius = "var(--button-radius, 6px)", n.variant === "primary") {
        const d = o.value && n.primaryBgHover ? n.primaryBgHover : n.primaryBg;
        d && (c.backgroundColor = d), n.primaryText && (c.color = n.primaryText);
      } else if (n.variant === "secondary") {
        const d = o.value && n.secondaryBgHover ? n.secondaryBgHover : n.secondaryBg;
        d && (c.backgroundColor = d), n.secondaryText && (c.color = n.secondaryText), n.secondaryBorder && (c.borderColor = n.secondaryBorder);
      }
      return c;
    }), l = te(() => {
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
    return (c, d) => (O(), _t(wl(i.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ie(l.value),
      style: dt(r.value),
      onClick: a,
      onMouseenter: d[0] || (d[0] = (u) => o.value = !0),
      onMouseleave: d[1] || (d[1] = (u) => o.value = !1)
    }, {
      default: Ge(() => [
        e.loading ? (O(), T("svg", ny, d[2] || (d[2] = [
          p("circle", {
            class: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "4"
          }, null, -1),
          p("path", {
            class: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }, null, -1)
        ]))) : z("", !0),
        Ln(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, ws = /* @__PURE__ */ it(sy, [["__scopeId", "data-v-023a6e93"]]), oy = ["disabled"], iy = ["value", "min", "max"], ry = ["disabled"], ly = {
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
    },
    size: {
      type: String,
      default: "default",
      // 'default', 'small'
      validator: (e) => ["default", "small"].includes(e)
    }
  },
  emits: ["update:modelValue", "update"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = ot(), i = te({
      get: () => n.modelValue,
      set: (d) => {
        var h, m, b;
        const u = Math.max(n.min, Math.min(n.max, d));
        if (s("update:modelValue", u), s("update", u), ((b = (m = (h = o == null ? void 0 : o.vnode) == null ? void 0 : h.el) == null ? void 0 : m.parentElement) == null ? void 0 : b.tagName) === "QUANTITY-SELECTOR") {
          const g = o.vnode.el.parentElement, D = g.getAttribute("data-line-key");
          if (D) {
            const k = new CustomEvent("quantity-update", {
              detail: { key: D, value: u },
              bubbles: !0
            });
            g.dispatchEvent(k);
          }
        }
      }
    }), r = () => {
      i.value > n.min && (i.value = i.value - n.step);
    }, l = () => {
      i.value < n.max && (i.value = i.value + n.step);
    }, a = (d) => {
      const u = parseInt(d.target.value) || n.min;
      i.value = u;
    }, c = (d) => {
      const u = parseInt(d.target.value) || n.min;
      i.value = u, d.target.value = i.value;
    };
    return (d, u) => (O(), T("div", {
      class: Ie(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      p("button", {
        type: "button",
        class: Ie(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue <= e.min,
        onClick: r,
        "aria-label": "Decrease quantity"
      }, u[0] || (u[0] = [
        p("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          p("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20 12H4"
          })
        ], -1)
      ]), 10, oy),
      p("input", {
        type: "number",
        class: Ie(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, iy),
      p("button", {
        type: "button",
        class: Ie(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, u[1] || (u[1] = [
        p("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          p("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4v16m8-8H4"
          })
        ], -1)
      ]), 10, ry)
    ], 2));
  }
}, Vf = /* @__PURE__ */ it(ly, [["__scopeId", "data-v-589d2042"]]), ay = ["data-updating"], cy = { class: "cart-item__content" }, uy = { class: "cart-item__image" }, dy = ["href"], fy = ["src", "alt"], py = { class: "cart-item__details" }, hy = { class: "cart-item__header" }, my = { class: "cart-item__info" }, gy = { class: "cart-item__title" }, vy = ["href"], yy = {
  key: 0,
  class: "cart-item__variant"
}, by = {
  key: 1,
  class: "cart-item__properties"
}, _y = { class: "cart-item__property-key" }, Ey = { class: "cart-item__price cart-item__price--mobile" }, wy = { class: "cart-item__price-current" }, Ny = {
  key: 0,
  class: "cart-item__price-original"
}, xy = {
  key: 0,
  class: "cart-item__discounts"
}, Sy = { class: "cart-item__actions" }, Cy = { class: "cart-item__actions-left" }, ky = ["disabled"], Oy = {
  key: 0,
  class: "cart-item__remove-icon",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ty = {
  key: 1,
  class: "cart-item__remove-icon cart-item__remove-icon--loading",
  fill: "none",
  viewBox: "0 0 24 24"
}, Dy = { class: "cart-item__price cart-item__price--desktop" }, Vy = { class: "cart-item__price-current" }, $y = {
  key: 0,
  class: "cart-item__price-original"
}, Ay = {
  key: 1,
  class: "cart-item__price-savings"
}, Iy = {
  key: 1,
  class: "cart-item__warning"
}, My = {
  key: 2,
  class: "cart-item__error"
}, Py = {
  __name: "CartItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = q(n.item.quantity), i = q(!1), r = q(""), l = te(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = te(() => {
      var h;
      return ((h = n.item.variant) == null ? void 0 : h.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (h) => !h && h !== 0 ? "$0.00" : `$${(h > 1e3 ? h / 100 : h).toFixed(2)}`, d = async (h) => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          await s("update", {
            key: n.item.key,
            quantity: h
          }), h === 0 && s("remove", n.item.key);
        } catch (m) {
          console.error("Failed to update quantity:", m), r.value = "Failed to update quantity. Please try again.", o.value = n.item.quantity;
        } finally {
          i.value = !1;
        }
      }
    }, u = async () => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          await s("remove", n.item.key);
        } catch (h) {
          console.error("Failed to remove item:", h), r.value = "Failed to remove item. Please try again.";
        } finally {
          i.value = !1;
        }
      }
    };
    return nn(() => n.item.quantity, (h) => {
      o.value = h;
    }), (h, m) => (O(), T("div", {
      class: "cart-item",
      "data-updating": i.value
    }, [
      p("div", cy, [
        p("div", uy, [
          p("a", {
            href: e.item.url,
            class: "cart-item__image-link"
          }, [
            p("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "cart-item__image-img",
              loading: "lazy"
            }, null, 8, fy)
          ], 8, dy)
        ]),
        p("div", py, [
          p("div", hy, [
            p("div", my, [
              p("h3", gy, [
                p("a", {
                  href: e.item.url,
                  class: "cart-item__title-link"
                }, X(e.item.product_title), 9, vy)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (O(), T("p", yy, X(e.item.variant_title), 1)) : z("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (O(), T("div", by, [
                (O(!0), T(ce, null, Ve(e.item.properties, (b, g) => (O(), T("p", {
                  key: g,
                  class: "cart-item__property"
                }, [
                  p("span", _y, X(g) + ":", 1),
                  Le(" " + X(b), 1)
                ]))), 128))
              ])) : z("", !0)
            ]),
            p("div", Ey, [
              p("p", wy, X(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (O(), T("p", Ny, X(c(e.item.original_price * e.item.quantity)), 1)) : z("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (O(), T("div", xy, [
            (O(!0), T(ce, null, Ve(e.item.discounts, (b) => (O(), T("div", {
              key: b.id,
              class: "cart-item__discount"
            }, [
              m[1] || (m[1] = p("svg", {
                class: "cart-item__discount-icon",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                p("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              Le(" " + X(b.title) + " (-" + X(c(b.amount || b.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : z("", !0),
          p("div", Sy, [
            p("div", Cy, [
              pe(Vf, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  m[0] || (m[0] = (b) => o.value = b),
                  d
                ],
                min: 0,
                max: l.value,
                disabled: i.value,
                size: "small"
              }, null, 8, ["modelValue", "max", "disabled"]),
              p("button", {
                type: "button",
                onClick: u,
                class: "cart-item__remove",
                disabled: i.value,
                "aria-label": "Remove item from cart"
              }, [
                i.value ? (O(), T("svg", Ty, m[3] || (m[3] = [
                  p("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }, null, -1),
                  p("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, null, -1)
                ]))) : (O(), T("svg", Oy, m[2] || (m[2] = [
                  p("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, ky)
            ]),
            p("div", Dy, [
              p("p", Vy, X(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (O(), T("p", $y, X(c(e.item.original_price * e.item.quantity)), 1)) : z("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (O(), T("p", Ay, " Save " + X(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : z("", !0)
            ])
          ]),
          a.value ? (O(), T("p", Iy, " Only " + X(e.item.variant.inventory_quantity) + " left in stock ", 1)) : z("", !0),
          r.value ? (O(), T("p", My, X(r.value), 1)) : z("", !0)
        ])
      ])
    ], 8, ay));
  }
}, $f = /* @__PURE__ */ it(Py, [["__scopeId", "data-v-af1af6ae"]]), Ry = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Ly = { class: "absolute inset-0 overflow-hidden" }, Fy = { class: "fixed inset-y-0 right-0 max-w-full flex" }, By = {
  key: 0,
  class: "w-screen max-w-md transform transition-transform duration-300 ease-out"
}, jy = { class: "h-full flex flex-col bg-white shadow-xl" }, Hy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, Uy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, qy = { class: "flex-1 overflow-y-auto" }, zy = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, Ky = {
  key: 1,
  class: "px-4 sm:px-6 pb-6"
}, Wy = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, Gy = {
  key: 0,
  class: "bg-blue-50 border border-blue-200 rounded-lg p-3"
}, Yy = { class: "flex items-center gap-2" }, Jy = { class: "text-sm text-blue-800" }, Xy = { class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden" }, Qy = { class: "flex justify-between text-base font-medium text-gray-900" }, Zy = { class: "space-y-3" }, e1 = {
  __name: "CartDrawer",
  setup(e) {
    const t = q(!1), n = q([]), s = q(0), o = te(() => {
      var b;
      return ((b = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : b.cart) || "/cart";
    }), i = te(() => {
      var g, D;
      return (((D = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : D.free_shipping_threshold) || 50) * 100;
    }), r = te(() => {
      var b, g;
      return ((g = (b = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : b.settings) == null ? void 0 : g.show_free_shipping_bar) !== !1;
    }), l = (b) => {
      var k, _, f, x;
      if (!b && b !== 0) return "$0.00";
      const g = ((k = Shopline == null ? void 0 : Shopline.currency) == null ? void 0 : k.format) || ((_ = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : _.money_format) || "${{amount}}";
      (f = Shopline == null ? void 0 : Shopline.currency) != null && f.active || (x = Shopline == null ? void 0 : Shopline.shop) != null && x.currency;
      const D = (b / 100).toFixed(2);
      return g.replace("{{amount}}", D);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", d();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, d = async () => {
      const b = await window.OrionCart.fetchCart();
      n.value = b.items, s.value = b.total_price;
    }, u = async ({ key: b, quantity: g }) => {
      await window.OrionCart.updateItem(b, g), d();
    }, h = async (b) => {
      await window.OrionCart.removeItem(b), d();
    }, m = (b) => {
      b.key === "Escape" && t.value && c();
    };
    return Ye(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", m);
    }), It(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", m);
    }), (b, g) => (O(), _t(cs, { to: "body" }, [
      pe(tn, { name: "drawer" }, {
        default: Ge(() => [
          t.value ? (O(), T("div", Ry, [
            p("div", Ly, [
              pe(tn, { name: "fade" }, {
                default: Ge(() => [
                  t.value ? (O(), T("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: c
                  })) : z("", !0)
                ]),
                _: 1
              }),
              p("div", Fy, [
                pe(tn, { name: "slide" }, {
                  default: Ge(() => [
                    t.value ? (O(), T("div", By, [
                      p("div", jy, [
                        p("div", Hy, [
                          p("div", null, [
                            g[0] || (g[0] = p("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (O(), T("p", Uy, X(n.value.length) + " " + X(n.value.length === 1 ? "item" : "items"), 1)) : z("", !0)
                          ]),
                          p("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: c
                          }, g[1] || (g[1] = [
                            p("span", { class: "sr-only" }, "Close cart", -1),
                            p("svg", {
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              p("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ]))
                        ]),
                        p("div", qy, [
                          n.value.length === 0 ? (O(), T("div", zy, [
                            g[3] || (g[3] = p("div", { class: "empty-cart-icon" }, [
                              p("div", { class: "empty-cart-icon-bg" }),
                              p("svg", {
                                class: "empty-cart-icon-svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "1.5"
                              }, [
                                p("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                })
                              ])
                            ], -1)),
                            g[4] || (g[4] = p("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, " Your cart is empty ", -1)),
                            g[5] || (g[5] = p("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            pe(ws, {
                              onClick: c,
                              variant: "primary",
                              size: "large"
                            }, {
                              default: Ge(() => g[2] || (g[2] = [
                                Le(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (O(), T("div", Ky, [
                            (O(!0), T(ce, null, Ve(n.value, (D) => (O(), _t($f, {
                              key: D.key,
                              item: D,
                              onUpdate: u,
                              onRemove: h
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (O(), T("div", Wy, [
                          r.value && s.value < i.value ? (O(), T("div", Gy, [
                            p("div", Yy, [
                              g[6] || (g[6] = p("svg", {
                                class: "w-5 h-5 text-blue-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                p("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ], -1)),
                              p("p", Jy, " Add " + X(l(
                                i.value - s.value
                              )) + " more for free shipping! ", 1)
                            ]),
                            p("div", Xy, [
                              p("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: dt(`width: ${Math.min(
                                  s.value / i.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])
                          ])) : z("", !0),
                          p("div", null, [
                            p("div", Qy, [
                              g[7] || (g[7] = p("p", null, "Subtotal", -1)),
                              p("p", null, X(l(s.value)), 1)
                            ]),
                            g[8] || (g[8] = p("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          p("div", Zy, [
                            pe(ws, {
                              href: o.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Ge(() => g[9] || (g[9] = [
                                Le(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [9]
                            }, 8, ["href"]),
                            pe(ws, {
                              onClick: c,
                              variant: "ghost",
                              "full-width": !0
                            }, {
                              default: Ge(() => g[10] || (g[10] = [
                                Le(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            })
                          ]),
                          g[11] || (g[11] = p("div", { class: "flex items-center justify-center gap-6 text-xs text-gray-500 pt-2" }, [
                            p("div", { class: "flex items-center gap-1" }, [
                              p("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                p("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                })
                              ]),
                              p("span", null, "Secure Checkout")
                            ]),
                            p("div", { class: "flex items-center gap-1" }, [
                              p("svg", {
                                class: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                p("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ]),
                              p("span", null, "Money Back Guarantee")
                            ])
                          ], -1))
                        ])) : z("", !0)
                      ])
                    ])) : z("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : z("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Af = /* @__PURE__ */ it(e1, [["__scopeId", "data-v-f96bb725"]]), t1 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, n1 = { class: "absolute inset-0 overflow-hidden" }, s1 = { class: "fixed inset-y-0 left-0 max-w-full flex" }, o1 = {
  key: 0,
  class: "w-screen max-w-sm transform transition-transform duration-300 ease-out"
}, i1 = { class: "h-full flex flex-col bg-white shadow-xl" }, r1 = { class: "flex-1 overflow-y-auto" }, l1 = { class: "px-4 py-4" }, a1 = { class: "space-y-1" }, c1 = { key: 0 }, u1 = { key: 0 }, d1 = ["onClick"], f1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, p1 = { key: 0 }, h1 = ["onClick"], m1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, g1 = ["href"], v1 = ["href"], y1 = ["href"], b1 = { class: "px-4 py-4 border-t" }, _1 = { class: "space-y-1" }, E1 = ["href"], w1 = {
  key: 0,
  class: "px-4 py-4 border-t"
}, N1 = {
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
    const n = e, s = te(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = q(!1), i = q([]), r = () => {
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
    }), (c, d) => (O(), T("div", null, [
      (O(), _t(cs, { to: "body" }, [
        pe(tn, { name: "menu" }, {
          default: Ge(() => [
            o.value ? (O(), T("div", t1, [
              p("div", n1, [
                pe(tn, { name: "fade" }, {
                  default: Ge(() => [
                    o.value ? (O(), T("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: l
                    })) : z("", !0)
                  ]),
                  _: 1
                }),
                p("div", s1, [
                  pe(tn, { name: "slide-left" }, {
                    default: Ge(() => [
                      o.value ? (O(), T("div", o1, [
                        p("div", i1, [
                          p("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            d[1] || (d[1] = p("h2", { class: "text-lg font-medium text-gray-900" }, "Menu", -1)),
                            p("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: l
                            }, d[0] || (d[0] = [
                              p("span", { class: "sr-only" }, "Close menu", -1),
                              p("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                p("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          p("div", r1, [
                            p("nav", l1, [
                              p("ul", a1, [
                                s.value.length === 0 ? (O(), T("li", c1, d[2] || (d[2] = [
                                  p("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : z("", !0),
                                (O(!0), T(ce, null, Ve(s.value, (u) => (O(), T("li", {
                                  key: u.id || u.title
                                }, [
                                  u.links && u.links.length ? (O(), T("div", u1, [
                                    p("button", {
                                      onClick: (h) => a(u.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      p("span", null, X(u.title), 1),
                                      (O(), T("svg", {
                                        class: Ie(["h-5 w-5 transition-transform duration-200", { "rotate-180": i.value.includes(u.title) }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, d[3] || (d[3] = [
                                        p("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, d1),
                                    pe(tn, { name: "submenu" }, {
                                      default: Ge(() => [
                                        i.value.includes(u.title) ? (O(), T("ul", f1, [
                                          (O(!0), T(ce, null, Ve(u.links, (h) => (O(), T("li", {
                                            key: h.id || h.title
                                          }, [
                                            h.links && h.links.length ? (O(), T("div", p1, [
                                              p("button", {
                                                onClick: (m) => a(`${u.title}-${h.title}`),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                p("span", null, X(h.title), 1),
                                                (O(), T("svg", {
                                                  class: Ie(["h-4 w-4 transition-transform duration-200", { "rotate-180": i.value.includes(`${u.title}-${h.title}`) }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, d[4] || (d[4] = [
                                                  p("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, h1),
                                              pe(tn, { name: "submenu" }, {
                                                default: Ge(() => [
                                                  i.value.includes(`${u.title}-${h.title}`) ? (O(), T("ul", m1, [
                                                    (O(!0), T(ce, null, Ve(h.links, (m) => (O(), T("li", {
                                                      key: m.id || m.title
                                                    }, [
                                                      p("a", {
                                                        href: m.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: l
                                                      }, X(m.title), 9, g1)
                                                    ]))), 128))
                                                  ])) : z("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (O(), T("a", {
                                              key: 1,
                                              href: h.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: l
                                            }, X(h.title), 9, v1))
                                          ]))), 128))
                                        ])) : z("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (O(), T("a", {
                                    key: 1,
                                    href: u.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: l
                                  }, X(u.title), 9, y1))
                                ]))), 128))
                              ])
                            ]),
                            p("div", b1, [
                              p("div", _1, [
                                e.customerUrl ? (O(), T("a", {
                                  key: 0,
                                  href: e.customerUrl,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, d[5] || (d[5] = [
                                  p("span", { class: "flex items-center" }, [
                                    p("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      p("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      })
                                    ]),
                                    Le(" Account ")
                                  ], -1)
                                ]), 8, E1)) : z("", !0),
                                d[6] || (d[6] = p("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, [
                                  p("span", { class: "flex items-center" }, [
                                    p("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      p("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                      })
                                    ]),
                                    Le(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            e.showLocalization ? (O(), T("div", w1, [
                              Ln(c.$slots, "localization", {}, void 0, !0)
                            ])) : z("", !0)
                          ])
                        ])
                      ])) : z("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : z("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, If = /* @__PURE__ */ it(N1, [["__scopeId", "data-v-f404e536"]]), x1 = { class: "variant-picker" }, S1 = { class: "text-sm font-medium text-gray-900 mb-3" }, C1 = { class: "font-normal text-gray-600" }, k1 = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, O1 = ["title", "aria-label", "disabled", "onClick"], T1 = { class: "sr-only" }, D1 = {
  key: 0,
  class: "color-swatch__checkmark"
}, V1 = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, $1 = ["aria-label", "disabled", "onClick"], A1 = {
  key: 0,
  class: "mt-6 flex items-center justify-between"
}, I1 = { class: "flex items-center gap-4" }, M1 = { class: "text-2xl font-bold text-gray-900" }, P1 = {
  key: 0,
  class: "text-lg text-gray-500 line-through"
}, R1 = {
  key: 0,
  class: "text-sm text-green-600 font-medium"
}, L1 = {
  key: 1,
  class: "text-sm text-red-600 font-medium"
}, F1 = {
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
    const n = e, s = t, o = q({}), i = q(null), r = te(() => n.product.options || []), l = te(() => n.product.variants || []);
    Ye(() => {
      if (n.selectedVariantId) {
        const D = l.value.find((k) => k.id == n.selectedVariantId);
        D && a(D);
      } else if (l.value.length > 0) {
        const D = l.value.find((k) => k.available) || l.value[0];
        a(D);
      }
    });
    const a = (D) => {
      i.value = D, r.value.forEach((k, _) => {
        o.value[k.name] = D[`option${_ + 1}`];
      }), s("variant-change", D);
    }, c = (D, k) => {
      o.value[D] = k;
      const _ = l.value.find((f) => r.value.every((x, E) => {
        const $ = o.value[x.name];
        return f[`option${E + 1}`] === $;
      }));
      _ && (i.value = _, s("variant-change", _));
    }, d = (D) => o.value[D] || "", u = (D, k) => o.value[D] === k, h = (D, k) => {
      const _ = r.value.findIndex((f) => f.name === D);
      return l.value.some((f) => {
        const x = f[`option${_ + 1}`] === k, E = r.value.every(($, P) => {
          if ($.name === D) return !0;
          const N = o.value[$.name];
          return N ? f[`option${P + 1}`] === N : !0;
        });
        return x && E && f.available;
      });
    }, m = (D) => D.toLowerCase().includes("color") || D.toLowerCase().includes("colour"), b = (D) => ({
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
    })[D.toLowerCase()] || "#E5E7EB", g = (D) => {
      var k, _;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((_ = (k = window.Shopify) == null ? void 0 : k.currency) == null ? void 0 : _.active) || "USD"
      }).format(D / 100);
    };
    return (D, k) => (O(), T("div", x1, [
      (O(!0), T(ce, null, Ve(r.value, (_) => (O(), T("div", {
        key: _.name,
        class: "variant-option mb-6"
      }, [
        p("h3", S1, [
          Le(X(_.name) + ": ", 1),
          p("span", C1, X(d(_.name)), 1)
        ]),
        m(_.name) ? (O(), T("div", k1, [
          (O(!0), T(ce, null, Ve(_.values, (f) => (O(), T("button", {
            key: f,
            type: "button",
            class: Ie([
              "color-swatch",
              u(_.name, f) ? "color-swatch--selected" : "",
              h(_.name, f) ? "" : "color-swatch--unavailable"
            ]),
            style: dt({ backgroundColor: b(f) }),
            title: f,
            "aria-label": `Select ${_.name} ${f}`,
            disabled: !h(_.name, f),
            onClick: (x) => c(_.name, f)
          }, [
            p("span", T1, X(f), 1),
            u(_.name, f) ? (O(), T("span", D1, k[0] || (k[0] = [
              p("svg", {
                class: "w-4 h-4",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                p("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ]))) : z("", !0)
          ], 14, O1))), 128))
        ])) : (O(), T("div", V1, [
          (O(!0), T(ce, null, Ve(_.values, (f) => (O(), T("button", {
            key: f,
            type: "button",
            class: Ie([
              "variant-button",
              u(_.name, f) ? "variant-button--selected" : "",
              h(_.name, f) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${_.name} ${f}`,
            disabled: !h(_.name, f),
            onClick: (x) => c(_.name, f)
          }, X(f), 11, $1))), 128))
        ]))
      ]))), 128)),
      i.value ? (O(), T("div", A1, [
        p("div", I1, [
          p("span", M1, X(g(i.value.price)), 1),
          i.value.compare_at_price > i.value.price ? (O(), T("span", P1, X(g(i.value.compare_at_price)), 1)) : z("", !0)
        ]),
        i.value.available ? (O(), T("div", R1, " In Stock ")) : (O(), T("div", L1, " Out of Stock "))
      ])) : z("", !0)
    ]));
  }
}, B1 = /* @__PURE__ */ it(F1, [["__scopeId", "data-v-6eb16bf8"]]);
function j1(e) {
  return ll() ? (Lc(e), !0) : !1;
}
function ea(e) {
  return typeof e == "function" ? e() : No(e);
}
const H1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const U1 = Object.prototype.toString, q1 = (e) => U1.call(e) === "[object Object]", Eo = () => {
};
function z1(e, t) {
  function n(...s) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(i);
    });
  }
  return n;
}
function K1(...e) {
  let t = 0, n, s = !0, o = Eo, i, r, l, a, c;
  !$e(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [r, l = !0, a = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = Eo);
  };
  return (h) => {
    const m = ea(r), b = Date.now() - t, g = () => i = h();
    return d(), m <= 0 ? (t = Date.now(), g()) : (b > m && (a || !s) ? (t = Date.now(), g()) : l && (i = new Promise((D, k) => {
      o = c ? k : D, n = setTimeout(() => {
        t = Date.now(), s = !0, D(g()), d();
      }, Math.max(0, m - b));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, i);
  };
}
function W1(e, t = 200, n = !1, s = !0, o = !1) {
  return z1(
    K1(t, n, s, o),
    e
  );
}
function G1(e) {
  var t;
  const n = ea(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Mf = H1 ? window : void 0;
function br(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Mf) : [t, n, s, o] = e, !t)
    return Eo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [], r = () => {
    i.forEach((d) => d()), i.length = 0;
  }, l = (d, u, h, m) => (d.addEventListener(u, h, m), () => d.removeEventListener(u, h, m)), a = nn(
    () => [G1(t), ea(o)],
    ([d, u]) => {
      if (r(), !d)
        return;
      const h = q1(u) ? { ...u } : u;
      i.push(
        ...n.flatMap((m) => s.map((b) => l(d, m, b, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), r();
  };
  return j1(c), c;
}
function Y1(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: i,
    passive: r = !0,
    window: l = Mf
  } = t, a = Ns({ x: 0, y: 0 }), c = Ns({ x: 0, y: 0 }), d = te(() => a.x - c.x), u = te(() => a.y - c.y), { max: h, abs: m } = Math, b = te(() => h(m(d.value), m(u.value)) >= n), g = q(!1), D = te(() => b.value ? m(d.value) > m(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), k = (v) => [v.touches[0].clientX, v.touches[0].clientY], _ = (v, C) => {
    a.x = v, a.y = C;
  }, f = (v, C) => {
    c.x = v, c.y = C;
  };
  let x;
  const E = J1(l == null ? void 0 : l.document);
  r ? x = E ? { passive: !0 } : { capture: !1 } : x = E ? { passive: !1, capture: !0 } : { capture: !0 };
  const $ = (v) => {
    g.value && (o == null || o(v, D.value)), g.value = !1;
  }, P = [
    br(e, "touchstart", (v) => {
      if (v.touches.length !== 1)
        return;
      x.capture && !x.passive && v.preventDefault();
      const [C, A] = k(v);
      _(C, A), f(C, A), i == null || i(v);
    }, x),
    br(e, "touchmove", (v) => {
      if (v.touches.length !== 1)
        return;
      const [C, A] = k(v);
      f(C, A), !g.value && b.value && (g.value = !0), g.value && (s == null || s(v));
    }, x),
    br(e, ["touchend", "touchcancel"], $, x)
  ];
  return {
    isPassiveEventSupported: E,
    isSwiping: g,
    direction: D,
    coordsStart: a,
    coordsEnd: c,
    lengthX: d,
    lengthY: u,
    stop: () => P.forEach((v) => v())
  };
}
function J1(e) {
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
const X1 = { class: "sticky-header-container" }, Q1 = {
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
    const t = e, n = q(null), s = q(!1), o = q(!1), i = q(!1), r = q(!1), l = q("#ffffff"), a = q(0), c = q(0), d = te(() => D.value ? `${c.value}px` : "0");
    let u = 0;
    const h = te(() => {
      const _ = {};
      return D.value && s.value && (_.position = "fixed", _.top = "0", _.left = "0", _.right = "0", _.zIndex = "40", o.value ? _.transform = "translateY(-100%)" : _.transform = "translateY(0)"), r.value && (a.value === 0 ? _.backgroundColor = "transparent" : D.value && s.value && (_.backgroundColor = l.value)), _.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", _;
    }), m = () => {
      var x, E, $;
      const _ = (E = (x = n.value) == null ? void 0 : x.getRootNode()) == null ? void 0 : E.host;
      if (!_) return;
      _.classList.add("sticky-header-wrapper");
      const f = ($ = n.value) == null ? void 0 : $.querySelector(".main-header");
      f && r.value && (a.value === 0 ? (f.style.backgroundColor = "transparent", f.style.borderBottomColor = "transparent") : D.value && s.value && (f.style.backgroundColor = l.value, f.style.borderBottomColor = "#e5e7eb"));
    }, b = W1(() => {
      if (!D.value)
        return;
      const _ = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = _, s.value = _ > 0, i.value = _ > 10, g.value && s.value) {
        const f = _ - u;
        Math.abs(f) > 5 && (f > 0 && _ > c.value ? o.value = !0 : f < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(_ - u) > 1 && (u = _), m();
    }, 50), g = q(t.hideOnScrollDown), D = q(t.sticky), k = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return Ye(() => {
      if (n.value) {
        const _ = n.value.getRootNode().host;
        if (_) {
          _.classList.add("sticky-header-wrapper"), r.value = _.classList.contains("header-transparent");
          const f = _.getAttribute("data-hide-on-scroll-down"), x = _.getAttribute("data-sticky"), E = _.getAttribute("data-sticky-bg");
          f !== null && (g.value = f === "true"), x !== null && (D.value = x === "true"), E !== null && (l.value = E || "#ffffff"), setTimeout(k, 100), window.addEventListener("resize", k);
        }
      }
      window.addEventListener("scroll", b, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), b();
    }), It(() => {
      window.removeEventListener("scroll", b), window.removeEventListener("resize", k);
    }), (_, f) => (O(), T("div", X1, [
      D.value && s.value ? (O(), T("div", {
        key: 0,
        class: "header-placeholder",
        style: dt({ height: d.value })
      }, null, 4)) : z("", !0),
      p("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: Ie(["sticky-header-inner", {
          "is-fixed": D.value && s.value,
          "is-hidden": o.value,
          "has-shadow": i.value,
          "is-transparent": r.value && a.value === 0
        }]),
        style: dt(h.value)
      }, [
        Ln(_.$slots, "default")
      ], 6)
    ]));
  }
}, Z1 = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, eb = { class: "main-header__wrapper" }, tb = {
  href: "/",
  class: "main-header__logo"
}, nb = ["src", "alt"], sb = {
  key: 1,
  class: "text-xl font-bold"
}, ob = { class: "main-header__nav hidden lg:flex" }, ib = ["href"], rb = { class: "main-header__actions" }, lb = ["href"], ab = {
  key: 0,
  class: "cart-count"
}, cb = { class: "search-overlay__container" }, ub = {
  action: "/search",
  method: "get",
  class: "search-form"
}, db = {
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
    },
    customer: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = q(null), s = q(!1), o = q(0), i = te(() => {
      var d, u;
      return t.customer ? ((d = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : d.account) || "/account" : ((u = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : u.account_login) || "/account/login";
    }), r = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, l = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, a = async () => {
      var d;
      s.value = !s.value, s.value && (await xo(), (d = n.value) == null || d.focus());
    }, c = () => {
      var d;
      (d = window.OrionCart) != null && d.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return Ye(() => {
      document.addEventListener("cart:updated", c), c();
    }), It(() => {
      document.removeEventListener("cart:updated", c);
    }), (d, u) => (O(), T("div", Z1, [
      p("div", eb, [
        p("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: r,
          "aria-label": "Open menu"
        }, u[0] || (u[0] = [
          p("svg", {
            class: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 6h16M4 12h16M4 18h16"
            })
          ], -1)
        ])),
        p("a", tb, [
          e.logoUrl ? (O(), T("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, nb)) : (O(), T("span", sb, X(e.shopName), 1))
        ]),
        p("nav", ob, [
          (O(!0), T(ce, null, Ve(e.navigationLinks, (h) => (O(), T("a", {
            key: h.url,
            href: h.url,
            class: "nav-link"
          }, X(h.title), 9, ib))), 128))
        ]),
        p("div", rb, [
          p("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: a,
            "aria-label": "Search"
          }, u[1] || (u[1] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            ], -1)
          ])),
          p("a", {
            href: i.value,
            class: "action-button",
            "aria-label": "Account"
          }, u[2] || (u[2] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              })
            ], -1)
          ]), 8, lb),
          p("button", {
            type: "button",
            class: "action-button relative",
            onClick: l,
            "aria-label": "Cart"
          }, [
            u[3] || (u[3] = p("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)),
            o.value > 0 ? (O(), T("span", ab, X(o.value), 1)) : z("", !0)
          ])
        ])
      ]),
      (O(), _t(cs, { to: "body" }, [
        pe(tn, { name: "fade" }, {
          default: Ge(() => [
            s.value ? (O(), T("div", {
              key: 0,
              class: "search-overlay",
              onClick: Ht(a, ["self"])
            }, [
              p("div", cb, [
                p("form", ub, [
                  p("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: Id(a, ["esc"])
                  }, null, 544),
                  u[4] || (u[4] = p("button", {
                    type: "submit",
                    class: "search-submit"
                  }, [
                    p("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      p("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ])
                  ], -1))
                ]),
                p("button", {
                  type: "button",
                  class: "search-close",
                  onClick: a,
                  "aria-label": "Close search"
                }, u[5] || (u[5] = [
                  p("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ])
            ])) : z("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, Pf = /* @__PURE__ */ it(db, [["__scopeId", "data-v-3988ea0d"]]), fb = { class: "site-footer" }, pb = {
  key: 0,
  class: "newsletter-section"
}, hb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, mb = { class: "newsletter-content" }, gb = { class: "newsletter-text" }, vb = { class: "text-xl font-semibold mb-2" }, yb = { class: "text-gray-600" }, bb = ["disabled"], _b = ["disabled"], Eb = { key: 0 }, wb = { key: 1 }, Nb = { class: "footer-main" }, xb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Sb = { class: "footer-grid" }, Cb = { class: "footer-column" }, kb = { class: "footer-heading" }, Ob = { class: "text-gray-600 mb-4" }, Tb = {
  key: 0,
  class: "social-links"
}, Db = ["href", "aria-label"], Vb = { class: "footer-heading" }, $b = { class: "footer-links" }, Ab = ["href"], Ib = {
  key: 0,
  class: "footer-column"
}, Mb = { class: "contact-info" }, Pb = {
  key: 0,
  class: "contact-item"
}, Rb = {
  key: 1,
  class: "contact-item"
}, Lb = {
  key: 2,
  class: "contact-item"
}, Fb = {
  key: 0,
  class: "payment-methods"
}, Bb = { class: "payment-icons" }, jb = ["src", "alt"], Hb = { class: "footer-bottom" }, Ub = { class: "copyright" }, qb = {
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
    const t = q(""), n = q(!1), s = te(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
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
        facebook: () => Jt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Jt("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        ]),
        twitter: () => Jt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Jt("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
        ]),
        instagram: () => Jt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Jt("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" })
        ]),
        youtube: () => Jt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Jt("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
        ])
      };
      return l[r.toLowerCase()] || l.facebook;
    };
    return (r, l) => (O(), T("footer", fb, [
      e.showNewsletter ? (O(), T("div", pb, [
        p("div", hb, [
          p("div", mb, [
            p("div", gb, [
              p("h3", vb, X(e.newsletterTitle), 1),
              p("p", yb, X(e.newsletterDescription), 1)
            ]),
            p("form", {
              onSubmit: Ht(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              wt(p("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, bb), [
                [is, t.value]
              ]),
              p("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (O(), T("span", wb, "Subscribing...")) : (O(), T("span", Eb, "Subscribe"))
              ], 8, _b)
            ], 32)
          ])
        ])
      ])) : z("", !0),
      p("div", Nb, [
        p("div", xb, [
          p("div", Sb, [
            p("div", Cb, [
              p("h4", kb, X(e.companyName), 1),
              p("p", Ob, X(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (O(), T("div", Tb, [
                (O(!0), T(ce, null, Ve(e.socialLinks, (a) => (O(), T("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (O(), _t(wl(i(a.name))))
                ], 8, Db))), 128))
              ])) : z("", !0)
            ]),
            (O(!0), T(ce, null, Ve(e.footerColumns, (a) => (O(), T("div", {
              key: a.title,
              class: "footer-column"
            }, [
              p("h4", Vb, X(a.title), 1),
              p("ul", $b, [
                (O(!0), T(ce, null, Ve(a.links, (c) => (O(), T("li", {
                  key: c.title
                }, [
                  p("a", {
                    href: c.url,
                    class: "footer-link"
                  }, X(c.title), 9, Ab)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (O(), T("div", Ib, [
              l[4] || (l[4] = p("h4", { class: "footer-heading" }, "Contact", -1)),
              p("div", Mb, [
                e.contactEmail ? (O(), T("p", Pb, [
                  l[1] || (l[1] = p("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    })
                  ], -1)),
                  Le(" " + X(e.contactEmail), 1)
                ])) : z("", !0),
                e.contactPhone ? (O(), T("p", Rb, [
                  l[2] || (l[2] = p("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    })
                  ], -1)),
                  Le(" " + X(e.contactPhone), 1)
                ])) : z("", !0),
                e.contactAddress ? (O(), T("p", Lb, [
                  l[3] || (l[3] = p("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    })
                  ], -1)),
                  Le(" " + X(e.contactAddress), 1)
                ])) : z("", !0)
              ])
            ])) : z("", !0)
          ]),
          e.paymentMethods.length > 0 ? (O(), T("div", Fb, [
            l[5] || (l[5] = p("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            p("div", Bb, [
              (O(!0), T(ce, null, Ve(e.paymentMethods, (a) => (O(), T("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, jb))), 128))
            ])
          ])) : z("", !0),
          p("div", Hb, [
            p("p", Ub, " © " + X(s.value) + " " + X(e.companyName) + ". All rights reserved. ", 1),
            l[6] || (l[6] = p("div", { class: "footer-bottom-links" }, [
              p("a", {
                href: "/pages/privacy-policy",
                class: "footer-bottom-link"
              }, "Privacy Policy"),
              p("a", {
                href: "/pages/terms-of-service",
                class: "footer-bottom-link"
              }, "Terms of Service"),
              p("a", {
                href: "/pages/refund-policy",
                class: "footer-bottom-link"
              }, "Refund Policy")
            ], -1))
          ])
        ])
      ])
    ]));
  }
}, zb = /* @__PURE__ */ it(qb, [["__scopeId", "data-v-799862f9"]]), Kb = { class: "product-card group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" }, Wb = ["href"], Gb = ["src", "alt"], Yb = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, Jb = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, Xb = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, Qb = { class: "p-4" }, Zb = {
  key: 0,
  class: "mb-3"
}, e_ = { class: "flex gap-1.5 flex-wrap" }, t_ = ["onClick", "title"], n_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, s_ = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, o_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, i_ = ["href"], r_ = { class: "flex items-center gap-1 mb-2" }, l_ = { class: "flex" }, a_ = { class: "flex items-baseline gap-2 mb-4" }, c_ = { class: "text-xl font-bold text-gray-900" }, u_ = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, d_ = ["disabled"], f_ = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, p_ = { key: 1 }, h_ = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, m_ = {
  __name: "ProductCard",
  props: {
    // Support both full product object and individual props
    product: {
      type: Object,
      required: !1,
      default: null
    },
    // Individual props as fallback
    productId: String,
    variantId: String,
    title: String,
    handle: String,
    vendor: String,
    price: [String, Number],
    compareAtPrice: [String, Number],
    image: String,
    images: Array,
    available: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["add-to-cart"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = q(""), i = q(!1), r = q(!1), l = q(!1), a = te(() => n.product ? n.product : {
      id: n.productId,
      title: n.title,
      handle: n.handle,
      vendor: n.vendor,
      price: typeof n.price == "string" ? parseFloat(n.price) : n.price,
      compare_at_price: typeof n.compareAtPrice == "string" ? parseFloat(n.compareAtPrice) : n.compareAtPrice,
      available: n.available,
      images: n.images || (n.image ? [{ src: n.image }] : []),
      featured_image: n.image,
      options: [],
      variants: n.variantId ? [{ id: n.variantId }] : []
    }), c = te(() => {
      const N = a.value.handle;
      return a.value.url || (N ? `/products/${N}` : "#");
    }), d = te(() => {
      var N, v, C;
      return i.value && ((N = a.value.images) != null && N[1]) ? a.value.images[1].src : ((C = (v = a.value.images) == null ? void 0 : v[0]) == null ? void 0 : C.src) || a.value.featured_image || a.value.image || "/placeholder.jpg";
    }), u = te(() => {
      var N;
      return (N = a.value.options) == null ? void 0 : N.some(
        (v) => {
          var C, A;
          return ((C = v.name) == null ? void 0 : C.toLowerCase().includes("color")) || ((A = v.name) == null ? void 0 : A.toLowerCase().includes("colour"));
        }
      );
    }), h = te(() => {
      var v;
      const N = (v = a.value.options) == null ? void 0 : v.find(
        (C) => {
          var A, V;
          return ((A = C.name) == null ? void 0 : A.toLowerCase().includes("color")) || ((V = C.name) == null ? void 0 : V.toLowerCase().includes("colour"));
        }
      );
      return (N == null ? void 0 : N.values) || [];
    }), m = te(() => a.value.price || 0), b = te(() => a.value.compare_at_price || 0), g = te(() => a.value.available && b.value > m.value), D = te(() => g.value ? Math.round((b.value - m.value) / b.value * 100) : 0), k = (N) => `$${(N / 100).toFixed(2)}`, _ = (N) => {
      const v = {
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
      }, C = N.toLowerCase();
      return v[C] || `#${C.replace("#", "")}`;
    }, f = () => {
      var N;
      ((N = a.value.images) == null ? void 0 : N.length) > 1 && (i.value = !0);
    }, x = () => {
      i.value = !1;
    }, E = (N) => {
      o.value = N.value;
    }, $ = () => {
      l.value = !l.value;
    }, P = async () => {
      var N, v, C, A;
      r.value = !0;
      try {
        const V = (v = (N = a.value.variants) == null ? void 0 : N[0]) == null ? void 0 : v.id;
        if (!V)
          throw console.error("No variant ID found for product:", a.value), new Error("No variant ID found");
        const R = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: V,
              quantity: 1
            }]
          })
        });
        if (!R.ok)
          throw new Error("Failed to add to cart");
        const J = await R.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((A = (C = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : C.settings) == null ? void 0 : A.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: V, quantity: 1 });
      } catch (V) {
        console.error("Error adding to cart:", V);
      } finally {
        r.value = !1;
      }
    };
    return (N, v) => (O(), T("div", Kb, [
      p("a", {
        href: c.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        d.value ? (O(), T("img", {
          key: 0,
          src: d.value,
          alt: a.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: f,
          onMouseleave: x
        }, null, 40, Gb)) : (O(), T("div", Yb, v[0] || (v[0] = [
          p("svg", {
            class: "w-20 h-20 text-gray-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            })
          ], -1)
        ]))),
        g.value ? (O(), T("div", Jb, " -" + X(D.value) + "% ", 1)) : z("", !0),
        a.value.available ? (O(), T("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: Ht($, ["prevent"])
        }, [
          (O(), T("svg", {
            class: Ie(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, v[1] || (v[1] = [
            p("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : z("", !0),
        a.value.available ? z("", !0) : (O(), T("div", Xb, v[2] || (v[2] = [
          p("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Wb),
      p("div", Qb, [
        u.value ? (O(), T("div", Zb, [
          p("div", e_, [
            (O(!0), T(ce, null, Ve(h.value, (C) => (O(), T("button", {
              key: C.value,
              onClick: (A) => E(C),
              title: C.value,
              class: Ie([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === C.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: dt({ backgroundColor: _(C.value) })
            }, [
              o.value === C.value ? (O(), T("span", n_, v[3] || (v[3] = [
                p("svg", {
                  class: "w-4 h-4 text-white drop-shadow",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  p("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd"
                  })
                ], -1)
              ]))) : z("", !0)
            ], 14, t_))), 128))
          ])
        ])) : z("", !0),
        a.value.vendor ? (O(), T("p", s_, X(a.value.vendor), 1)) : z("", !0),
        p("h3", o_, [
          p("a", {
            href: c.value,
            class: "hover:text-gray-700 transition-colors"
          }, X(a.value.title || "Untitled"), 9, i_)
        ]),
        p("div", r_, [
          p("div", l_, [
            (O(), T(ce, null, Ve(5, (C) => p("svg", {
              key: C,
              class: Ie(["w-4 h-4", C <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, v[4] || (v[4] = [
              p("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          v[5] || (v[5] = p("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        p("div", a_, [
          p("span", c_, X(k(m.value)), 1),
          b.value > m.value ? (O(), T("span", u_, X(k(b.value)), 1)) : z("", !0)
        ]),
        a.value.available ? (O(), T("button", {
          key: 2,
          onClick: P,
          disabled: r.value,
          class: "w-full bg-black text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        }, [
          r.value ? z("", !0) : (O(), T("svg", f_, v[6] || (v[6] = [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          r.value ? (O(), T("svg", h_, v[7] || (v[7] = [
            p("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4"
            }, null, -1),
            p("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }, null, -1)
          ]))) : (O(), T("span", p_, "Add to Cart"))
        ], 8, d_)) : z("", !0)
      ])
    ]));
  }
}, g_ = { class: "collection-filters" }, v_ = { class: "lg:hidden mb-4" }, y_ = { class: "hidden lg:block space-y-6" }, b_ = { class: "filter-group" }, __ = { class: "filter-group" }, E_ = { class: "space-y-2" }, w_ = { class: "flex items-center" }, N_ = { class: "flex items-center" }, x_ = { class: "flex items-center" }, S_ = { class: "flex items-center" }, C_ = {
  key: 0,
  class: "filter-group"
}, k_ = { class: "space-y-2" }, O_ = ["value"], T_ = { class: "ml-2 text-sm" }, D_ = {
  key: 1,
  class: "filter-group"
}, V_ = { class: "space-y-2" }, $_ = ["value"], A_ = { class: "ml-2 text-sm" }, I_ = { class: "filter-group" }, M_ = { class: "flex items-center" }, P_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, R_ = { class: "h-full flex flex-col" }, L_ = { class: "flex items-center justify-between p-4 border-b" }, F_ = {
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
    const n = e, s = t, o = q("manual"), i = q([]), r = q([]), l = q([]), a = q(!1), c = q(!1), d = te(() => {
      const _ = /* @__PURE__ */ new Set();
      return n.products.forEach((f) => {
        f.product_type && _.add(f.product_type);
      }), Array.from(_).sort();
    }), u = te(() => {
      const _ = /* @__PURE__ */ new Set();
      return n.products.forEach((f) => {
        f.vendor && _.add(f.vendor);
      }), Array.from(_).sort();
    }), h = te(() => i.value.length > 0 || r.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      k();
    }, b = () => {
      k();
    }, g = () => {
      i.value = [], r.value = [], l.value = [], a.value = !1, k();
    }, D = () => {
      c.value = !1, k();
    }, k = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: i.value,
        types: r.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return (_, f) => (O(), T("div", g_, [
      p("div", v_, [
        p("button", {
          onClick: f[0] || (f[0] = (x) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        }, f[12] || (f[12] = [
          p("span", { class: "font-medium" }, "Filters", -1),
          p("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1)
        ]))
      ]),
      p("div", y_, [
        p("div", b_, [
          f[14] || (f[14] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
          wt(p("select", {
            "onUpdate:modelValue": f[1] || (f[1] = (x) => o.value = x),
            onChange: m,
            class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          }, f[13] || (f[13] = [
            ks('<option value="manual" data-v-67473a91>Featured</option><option value="best-selling" data-v-67473a91>Best Selling</option><option value="title-ascending" data-v-67473a91>Alphabetically, A-Z</option><option value="title-descending" data-v-67473a91>Alphabetically, Z-A</option><option value="price-ascending" data-v-67473a91>Price, low to high</option><option value="price-descending" data-v-67473a91>Price, high to low</option><option value="created-ascending" data-v-67473a91>Date, old to new</option><option value="created-descending" data-v-67473a91>Date, new to old</option>', 8)
          ]), 544), [
            [Gi, o.value]
          ])
        ]),
        p("div", __, [
          f[19] || (f[19] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
          p("div", E_, [
            p("label", w_, [
              wt(p("input", {
                type: "checkbox",
                value: "0-50",
                "onUpdate:modelValue": f[2] || (f[2] = (x) => i.value = x),
                onChange: b,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Qt, i.value]
              ]),
              f[15] || (f[15] = p("span", { class: "ml-2 text-sm" }, "Under $50", -1))
            ]),
            p("label", N_, [
              wt(p("input", {
                type: "checkbox",
                value: "50-100",
                "onUpdate:modelValue": f[3] || (f[3] = (x) => i.value = x),
                onChange: b,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Qt, i.value]
              ]),
              f[16] || (f[16] = p("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
            ]),
            p("label", x_, [
              wt(p("input", {
                type: "checkbox",
                value: "100-200",
                "onUpdate:modelValue": f[4] || (f[4] = (x) => i.value = x),
                onChange: b,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Qt, i.value]
              ]),
              f[17] || (f[17] = p("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
            ]),
            p("label", S_, [
              wt(p("input", {
                type: "checkbox",
                value: "200+",
                "onUpdate:modelValue": f[5] || (f[5] = (x) => i.value = x),
                onChange: b,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Qt, i.value]
              ]),
              f[18] || (f[18] = p("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (O(), T("div", C_, [
          f[20] || (f[20] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          p("div", k_, [
            (O(!0), T(ce, null, Ve(d.value, (x) => (O(), T("label", {
              key: x,
              class: "flex items-center"
            }, [
              wt(p("input", {
                type: "checkbox",
                value: x,
                "onUpdate:modelValue": f[6] || (f[6] = (E) => r.value = E),
                onChange: b,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, O_), [
                [Qt, r.value]
              ]),
              p("span", T_, X(x), 1)
            ]))), 128))
          ])
        ])) : z("", !0),
        u.value.length > 0 ? (O(), T("div", D_, [
          f[21] || (f[21] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          p("div", V_, [
            (O(!0), T(ce, null, Ve(u.value, (x) => (O(), T("label", {
              key: x,
              class: "flex items-center"
            }, [
              wt(p("input", {
                type: "checkbox",
                value: x,
                "onUpdate:modelValue": f[7] || (f[7] = (E) => l.value = E),
                onChange: b,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, $_), [
                [Qt, l.value]
              ]),
              p("span", A_, X(x), 1)
            ]))), 128))
          ])
        ])) : z("", !0),
        p("div", I_, [
          f[23] || (f[23] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          p("label", M_, [
            wt(p("input", {
              type: "checkbox",
              "onUpdate:modelValue": f[8] || (f[8] = (x) => a.value = x),
              onChange: b,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [Qt, a.value]
            ]),
            f[22] || (f[22] = p("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        h.value ? (O(), T("button", {
          key: 2,
          onClick: g,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : z("", !0)
      ]),
      (O(), _t(cs, { to: "body" }, [
        c.value ? (O(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: f[11] || (f[11] = Ht((x) => c.value = !1, ["self"]))
        }, [
          p("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: f[9] || (f[9] = (x) => c.value = !1)
          }),
          p("div", P_, [
            p("div", R_, [
              p("div", L_, [
                f[25] || (f[25] = p("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                p("button", {
                  onClick: f[10] || (f[10] = (x) => c.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, f[24] || (f[24] = [
                  p("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              f[26] || (f[26] = p("div", { class: "flex-1 overflow-y-auto p-4 space-y-6" }, null, -1)),
              p("div", { class: "p-4 border-t" }, [
                p("button", {
                  onClick: D,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : z("", !0)
      ]))
    ]));
  }
}, B_ = /* @__PURE__ */ it(F_, [["__scopeId", "data-v-67473a91"]]), j_ = { class: "collection-grid" }, H_ = {
  key: 0,
  class: "mb-8"
}, U_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, q_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, z_ = { class: "mt-4 flex items-center justify-between" }, K_ = { class: "text-sm text-secondary-600" }, W_ = { class: "lg:hidden" }, G_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, Y_ = { class: "lg:col-span-1" }, J_ = ["products"], X_ = { class: "lg:col-span-3" }, Q_ = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6"
}, Z_ = {
  key: 1,
  class: "text-center py-12"
}, eE = {
  key: 2,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6"
}, tE = ["product"], nE = {
  key: 3,
  class: "mt-8"
}, sE = {
  key: 0,
  class: "inline-flex items-center"
}, oE = {
  key: 1,
  class: "text-center"
}, iE = ["disabled"], rE = { key: 0 }, lE = { key: 1 }, aE = {
  key: 2,
  class: "flex items-center justify-between"
}, cE = { class: "flex-1 flex justify-between sm:hidden" }, uE = ["disabled"], dE = ["disabled"], fE = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, pE = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, hE = ["disabled"], mE = ["onClick"], gE = ["disabled"], vE = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, yE = { class: "relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full" }, bE = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, _E = { class: "text-lg font-medium text-secondary-900" }, EE = {
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
    const t = e, n = q(!1), s = q(!1), o = q(1), i = q(t.productsPerPage), r = q("manual"), l = q({}), a = q(null), c = q(null), d = te(() => {
      var C, A, V;
      let N = [...t.products];
      switch (l.value.inStockOnly && (N = N.filter((R) => R.available)), ((C = l.value.priceRanges) == null ? void 0 : C.length) > 0 && (N = N.filter((R) => {
        const J = R.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? J < 50 : ee === "50-100" ? J >= 50 && J < 100 : ee === "100-200" ? J >= 100 && J < 200 : ee === "200+" ? J >= 200 : !1);
      })), ((A = l.value.types) == null ? void 0 : A.length) > 0 && (N = N.filter((R) => l.value.types.includes(R.product_type))), ((V = l.value.vendors) == null ? void 0 : V.length) > 0 && (N = N.filter((R) => l.value.vendors.includes(R.vendor))), l.value.sort || r.value) {
        case "price-ascending":
          N.sort((R, J) => R.price - J.price);
          break;
        case "price-descending":
          N.sort((R, J) => J.price - R.price);
          break;
        case "title-ascending":
          N.sort((R, J) => R.title.localeCompare(J.title));
          break;
        case "title-descending":
          N.sort((R, J) => J.title.localeCompare(R.title));
          break;
        case "created-ascending":
          N.sort((R, J) => new Date(R.created_at) - new Date(J.created_at));
          break;
        case "created-descending":
          N.sort((R, J) => new Date(J.created_at) - new Date(R.created_at));
          break;
      }
      return N;
    }), u = te(() => {
      if (t.enableInfiniteScroll)
        return d.value.slice(0, i.value);
      const N = (o.value - 1) * t.productsPerPage, v = N + t.productsPerPage;
      return d.value.slice(N, v);
    }), h = te(() => Math.ceil(d.value.length / t.productsPerPage)), m = te(() => i.value < d.value.length), b = te(() => Math.max(0, d.value.length - i.value)), g = te(() => {
      const N = [], v = h.value, C = o.value;
      if (v <= 7)
        for (let A = 1; A <= v; A++)
          N.push(A);
      else if (C <= 3) {
        for (let A = 1; A <= 5; A++)
          N.push(A);
        N.push("..."), N.push(v);
      } else if (C >= v - 2) {
        N.push(1), N.push("...");
        for (let A = v - 4; A <= v; A++)
          N.push(A);
      } else {
        N.push(1), N.push("...");
        for (let A = C - 1; A <= C + 1; A++)
          N.push(A);
        N.push("..."), N.push(v);
      }
      return N.filter((A) => A === "..." || A >= 1 && A <= v);
    }), D = (N) => {
      l.value = N, o.value = 1, i.value = t.productsPerPage;
    }, k = () => {
      o.value = 1, i.value = t.productsPerPage;
    }, _ = () => {
      s.value = !0, setTimeout(() => {
        i.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, f = async (N) => {
      var C;
      const v = new FormData();
      v.append("id", N.variants[0].id), v.append("quantity", "1"), await ((C = window.OrionCart) == null ? void 0 : C.addItem(v)), console.log("Added to cart:", N.title);
    }, x = (N) => {
      a.value = N;
    }, E = () => {
      a.value = null;
    };
    let $ = null;
    const P = () => {
      !t.enableInfiniteScroll || !c.value || ($ = new IntersectionObserver(
        (N) => {
          N[0].isIntersecting && m.value && !s.value && _();
        },
        { threshold: 0.1 }
      ), $.observe(c.value));
    };
    return Ye(() => {
      P();
    }), It(() => {
      $ && $.disconnect();
    }), nn(() => t.enableInfiniteScroll, () => {
      P();
    }), (N, v) => (O(), T("div", j_, [
      e.showHeader ? (O(), T("div", H_, [
        p("h1", U_, X(e.collectionTitle), 1),
        e.collectionDescription ? (O(), T("div", q_, X(e.collectionDescription), 1)) : z("", !0),
        p("div", z_, [
          p("p", K_, X(d.value.length) + " products ", 1),
          p("div", W_, [
            wt(p("select", {
              "onUpdate:modelValue": v[0] || (v[0] = (C) => r.value = C),
              onChange: k,
              class: "px-3 py-2 border border-secondary-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, v[5] || (v[5] = [
              ks('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Gi, r.value]
            ])
          ])
        ])
      ])) : z("", !0),
      p("div", G_, [
        p("aside", Y_, [
          p("collection-filters", {
            products: e.products,
            onUpdateFilters: D
          }, null, 40, J_)
        ]),
        p("div", X_, [
          n.value ? (O(), T("div", Q_, [
            (O(), T(ce, null, Ve(6, (C) => p("div", {
              key: C,
              class: "animate-pulse"
            }, v[6] || (v[6] = [
              p("div", { class: "bg-secondary-200 rounded-lg aspect-[3/4]" }, null, -1),
              p("div", { class: "mt-4 space-y-2" }, [
                p("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                p("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ])) : d.value.length === 0 ? (O(), T("div", Z_, v[7] || (v[7] = [
            p("svg", {
              class: "mx-auto h-12 w-12 text-secondary-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            ], -1),
            p("h3", { class: "mt-2 text-sm font-medium text-secondary-900" }, "No products found", -1),
            p("p", { class: "mt-1 text-sm text-secondary-500" }, "Try adjusting your filters", -1)
          ]))) : (O(), T("div", eE, [
            (O(!0), T(ce, null, Ve(u.value, (C) => (O(), T("product-card", {
              key: C.id,
              product: C,
              onQuickAdd: f,
              onQuickView: x
            }, null, 40, tE))), 128))
          ])),
          !n.value && d.value.length > 0 ? (O(), T("div", nE, [
            e.enableInfiniteScroll ? (O(), T("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (O(), T("div", sE, v[8] || (v[8] = [
                p("svg", {
                  class: "animate-spin h-5 w-5 text-primary-600 mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  p("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  p("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                Le(" Loading more products... ", -1)
              ]))) : z("", !0)
            ], 512)) : m.value ? (O(), T("div", oE, [
              p("button", {
                onClick: _,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                s.value ? (O(), T("span", rE, "Loading...")) : (O(), T("span", lE, "Load More (" + X(b.value) + " remaining)", 1))
              ], 8, iE)
            ])) : z("", !0),
            !e.enableInfiniteScroll && h.value > 1 ? (O(), T("nav", aE, [
              p("div", cE, [
                p("button", {
                  onClick: v[1] || (v[1] = (C) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, uE),
                p("button", {
                  onClick: v[2] || (v[2] = (C) => o.value++),
                  disabled: o.value === h.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, dE)
              ]),
              p("div", fE, [
                p("div", null, [
                  p("nav", pE, [
                    p("button", {
                      onClick: v[3] || (v[3] = (C) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, v[9] || (v[9] = [
                      p("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        p("path", {
                          "fill-rule": "evenodd",
                          d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, hE),
                    (O(!0), T(ce, null, Ve(g.value, (C) => (O(), T("button", {
                      key: C,
                      onClick: (A) => o.value = C,
                      class: Ie([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === C ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, X(C), 11, mE))), 128)),
                    p("button", {
                      onClick: v[4] || (v[4] = (C) => o.value++),
                      disabled: o.value === h.value,
                      class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, v[10] || (v[10] = [
                      p("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        p("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, gE)
                  ])
                ])
              ])
            ])) : z("", !0)
          ])) : z("", !0)
        ])
      ]),
      (O(), _t(cs, { to: "body" }, [
        a.value ? (O(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: Ht(E, ["self"])
        }, [
          p("div", vE, [
            p("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: E
            }),
            p("div", yE, [
              p("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                p("button", {
                  onClick: E,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, v[11] || (v[11] = [
                  p("svg", {
                    class: "h-6 w-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    p("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              p("div", bE, [
                p("h3", _E, X(a.value.title), 1),
                v[12] || (v[12] = p("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : z("", !0)
      ]))
    ]));
  }
}, wE = { class: "product-gallery" }, NE = { class: "main-image-wrapper" }, xE = ["src", "alt"], SE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, CE = {
  key: 0,
  class: "thumbnails-wrapper"
}, kE = ["disabled"], OE = ["onClick", "aria-label"], TE = ["src", "alt"], DE = ["disabled"], VE = {
  key: 1,
  class: "swiper-dots"
}, $E = ["onClick", "aria-label"], AE = ["src", "alt"], IE = { class: "lightbox-counter" }, ME = 80, Uo = 4, kc = 2, PE = {
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
    const t = e, n = q(0), s = q(!1), o = q(!1), i = q(!1), r = q(!1), l = q(0), a = q(null), c = q(0), d = q(0), u = q({}), h = te(() => t.images.map((P) => {
      if (P.src)
        return P;
      const N = P.url || P;
      return {
        src: `${N}?width=${t.imageTransformWidth}`,
        thumbnail: `${N}?width=${t.thumbnailWidth}`,
        alt: P.alt || t.productTitle
      };
    })), m = te(() => h.value[n.value] || { src: "", alt: "" }), b = te(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), g = te(() => {
      const N = c.value / u.value.width * 100, v = d.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * kc}px ${u.value.height * kc}px`,
        backgroundPosition: `${N}% ${v}%`
      };
    }), D = (P) => {
      s.value = !0, n.value = P;
    }, k = (P) => {
      P === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        h.value.length - Uo,
        l.value + 1
      );
    }, _ = (P) => {
      n.value = P, o.value = !0, document.body.style.overflow = "hidden";
    }, f = () => {
      o.value = !1, document.body.style.overflow = "";
    }, x = (P) => {
      P === "prev" ? n.value = n.value > 0 ? n.value - 1 : h.value.length - 1 : n.value = n.value < h.value.length - 1 ? n.value + 1 : 0;
    }, E = (P) => {
      const N = P.currentTarget.getBoundingClientRect();
      u.value = N, c.value = P.clientX - N.left, d.value = P.clientY - N.top;
    }, { lengthX: $ } = Y1(
      a,
      {
        onSwipeEnd() {
          $.value > 50 ? k("prev") : $.value < -50 && k("next");
        }
      }
    );
    return Ye(() => {
      r.value = window.innerWidth < 768;
      const P = () => {
        r.value = window.innerWidth < 768;
      }, N = (v) => {
        o.value && (v.key === "Escape" && f(), v.key === "ArrowLeft" && x("prev"), v.key === "ArrowRight" && x("next"));
      };
      window.addEventListener("resize", P), window.addEventListener("keydown", N), It(() => {
        window.removeEventListener("resize", P), window.removeEventListener("keydown", N);
      });
    }), (P, N) => (O(), T("div", wE, [
      p("div", NE, [
        p("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: N[1] || (N[1] = (v) => _(n.value)),
          onMouseenter: N[2] || (N[2] = (v) => i.value = !0),
          onMouseleave: N[3] || (N[3] = (v) => i.value = !1),
          onMousemove: E
        }, [
          p("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Ie(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: N[0] || (N[0] = (v) => s.value = !1)
          }, null, 42, xE),
          s.value ? (O(), T("div", SE, N[9] || (N[9] = [
            p("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : z("", !0),
          N[10] || (N[10] = p("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
            p("svg", {
              class: "w-5 h-5 text-gray-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              })
            ])
          ], -1)),
          i.value && !r.value ? (O(), T("div", {
            key: 1,
            class: "zoom-lens",
            style: dt(b.value)
          }, null, 4)) : z("", !0)
        ], 32),
        i.value && !r.value ? (O(), T("div", {
          key: 0,
          class: "zoom-preview",
          style: dt(g.value)
        }, null, 4)) : z("", !0)
      ]),
      h.value.length > 1 ? (O(), T("div", CE, [
        h.value.length > Uo ? (O(), T("button", {
          key: 0,
          onClick: N[4] || (N[4] = (v) => k("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, N[11] || (N[11] = [
          p("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })
          ], -1)
        ]), 8, kE)) : z("", !0),
        p("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          p("div", {
            class: "thumbnails-track",
            style: dt({ transform: `translateX(-${l.value * (ME + 8)}px)` })
          }, [
            (O(!0), T(ce, null, Ve(h.value, (v, C) => (O(), T("button", {
              key: C,
              onClick: (A) => D(C),
              class: Ie(["thumbnail", { active: C === n.value }]),
              "aria-label": `View image ${C + 1}`
            }, [
              p("img", {
                src: v.thumbnail || v.src,
                alt: v.alt,
                class: "w-full h-full object-contain"
              }, null, 8, TE)
            ], 10, OE))), 128))
          ], 4)
        ], 512),
        h.value.length > Uo ? (O(), T("button", {
          key: 1,
          onClick: N[5] || (N[5] = (v) => k("next")),
          disabled: l.value >= h.value.length - Uo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, N[12] || (N[12] = [
          p("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 8, DE)) : z("", !0)
      ])) : z("", !0),
      h.value.length > 1 && r.value ? (O(), T("div", VE, [
        (O(!0), T(ce, null, Ve(h.value, (v, C) => (O(), T("button", {
          key: C,
          onClick: (A) => D(C),
          class: Ie(["swiper-dot", { active: C === n.value }]),
          "aria-label": `Go to image ${C + 1}`
        }, null, 10, $E))), 128))
      ])) : z("", !0),
      (O(), _t(cs, { to: "body" }, [
        o.value ? (O(), T("div", {
          key: 0,
          class: "lightbox",
          onClick: f
        }, [
          p("button", {
            onClick: f,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, N[13] || (N[13] = [
            p("svg", {
              class: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ])),
          h.value.length > 1 ? (O(), T("button", {
            key: 0,
            onClick: N[6] || (N[6] = Ht((v) => x("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, N[14] || (N[14] = [
            p("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ]))) : z("", !0),
          p("div", {
            class: "lightbox-image-wrapper",
            onClick: N[7] || (N[7] = Ht(() => {
            }, ["stop"]))
          }, [
            p("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, AE)
          ]),
          h.value.length > 1 ? (O(), T("button", {
            key: 1,
            onClick: N[8] || (N[8] = Ht((v) => x("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, N[15] || (N[15] = [
            p("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ]))) : z("", !0),
          p("div", IE, X(n.value + 1) + " / " + X(h.value.length), 1)
        ])) : z("", !0)
      ]))
    ]));
  }
}, RE = /* @__PURE__ */ it(PE, [["__scopeId", "data-v-a7c1d2a3"]]), LE = { class: "product-info" }, FE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, BE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, jE = { class: "price-wrapper mb-6" }, HE = { class: "flex items-baseline gap-3" }, UE = { class: "text-3xl font-semibold text-gray-900" }, qE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, zE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, KE = {
  key: 1,
  class: "mb-6"
}, WE = ["product", "current-variant"], GE = ["value"], YE = { class: "mb-4" }, JE = ["max"], XE = { class: "mb-4" }, QE = {
  key: 0,
  class: "text-red-600 font-medium"
}, ZE = {
  key: 1,
  class: "text-amber-600"
}, e2 = {
  key: 2,
  class: "text-green-600"
}, t2 = { class: "flex flex-col sm:flex-row gap-3" }, n2 = ["disabled"], s2 = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, o2 = { key: 1 }, i2 = { key: 2 }, r2 = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, l2 = ["innerHTML"], a2 = { class: "space-y-4" }, c2 = {
  key: 0,
  class: "group"
}, u2 = ["innerHTML"], d2 = {
  key: 1,
  class: "group"
}, f2 = { class: "mt-8 pt-8 border-t" }, p2 = { class: "flex gap-3" }, h2 = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, m2 = {
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
    var D;
    const n = e, s = t, o = q(n.product.selected_or_first_available_variant || ((D = n.product.variants) == null ? void 0 : D[0]) || {}), i = q(1), r = q(!1), l = q(!1), a = te(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = te(() => {
      var k;
      return (k = n.product.options) == null ? void 0 : k.some(
        (_) => _.name.toLowerCase() === "size" || _.name.toLowerCase() === "taille"
      );
    }), d = (k) => `$${(k / 100).toFixed(2)}`, u = (k) => {
      o.value = k, s("variant-change", k);
      const _ = new URL(window.location);
      _.searchParams.set("variant", k.id), window.history.replaceState({}, "", _);
    }, h = async () => {
      var _;
      r.value = !0;
      const k = new FormData();
      k.append("id", o.value.id), k.append("quantity", i.value);
      try {
        await ((_ = window.OrionCart) == null ? void 0 : _.addItem(k));
        const f = event.target, x = f.textContent;
        f.textContent = "✓ Added to Cart", setTimeout(() => {
          f.textContent = x;
        }, 2e3);
      } catch (f) {
        console.error("Failed to add to cart:", f), alert("Failed to add item to cart. Please try again.");
      } finally {
        r.value = !1;
      }
    }, m = async () => {
      await h(), window.location.href = "/checkout";
    }, b = (k) => {
      const _ = window.location.href, f = n.product.title, x = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(_)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(_)}&text=${encodeURIComponent(f)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(_)}&description=${encodeURIComponent(f)}`
      };
      x[k] && window.open(x[k], "_blank", "width=600,height=400");
    }, g = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (k) {
        console.error("Failed to copy link:", k);
      }
    };
    return nn(() => n.product.selected_variant, (k) => {
      k && (o.value = k);
    }), (k, _) => (O(), T("div", LE, [
      p("h1", FE, X(e.product.title), 1),
      e.product.vendor ? (O(), T("p", BE, " by " + X(e.product.vendor), 1)) : z("", !0),
      p("div", jE, [
        p("div", HE, [
          p("span", UE, X(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (O(), T("span", qE, X(d(o.value.compare_at_price)), 1)) : z("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (O(), T("p", zE, " Save " + X(d(o.value.compare_at_price - o.value.price)) + " (" + X(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : z("", !0)
      ]),
      e.product.has_only_default_variant ? z("", !0) : (O(), T("div", KE, [
        p("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, WE)
      ])),
      p("form", {
        onSubmit: Ht(h, ["prevent"]),
        class: "mb-8"
      }, [
        p("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, GE),
        p("div", YE, [
          _[4] || (_[4] = p("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          wt(p("quantity-selector", {
            "onUpdate:modelValue": _[0] || (_[0] = (f) => i.value = f),
            min: 1,
            max: a.value
          }, null, 8, JE), [
            [is, i.value]
          ])
        ]),
        p("div", XE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (O(), T("p", ZE, " Only " + X(o.value.inventory_quantity) + " left in stock ", 1)) : (O(), T("p", e2, " ✓ In Stock ")) : (O(), T("p", QE, " Out of Stock "))
        ]),
        p("div", t2, [
          p("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || r.value
          }, [
            r.value ? (O(), T("span", s2, _[5] || (_[5] = [
              p("svg", {
                class: "animate-spin h-5 w-5",
                viewBox: "0 0 24 24"
              }, [
                p("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4",
                  fill: "none"
                }),
                p("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1),
              Le(" Adding... ", -1)
            ]))) : o.value.available ? (O(), T("span", i2, " Add to Cart ")) : (O(), T("span", o2, " Sold Out "))
          ], 8, n2),
          e.showBuyNow ? (O(), _t(ws, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Ge(() => _[6] || (_[6] = [
              Le(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : z("", !0)
        ])
      ], 32),
      e.product.description ? (O(), T("div", r2, [
        _[7] || (_[7] = p("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        p("div", {
          innerHTML: e.product.description
        }, null, 8, l2)
      ])) : z("", !0),
      p("div", a2, [
        _[10] || (_[10] = ks('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (O(), T("details", c2, [
          _[8] || (_[8] = p("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
            p("span", { class: "font-medium" }, "Care Instructions"),
            p("svg", {
              class: "w-5 h-5 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          p("div", {
            class: "py-4 text-sm text-gray-600",
            innerHTML: e.product.care_instructions
          }, null, 8, u2)
        ])) : z("", !0),
        c.value ? (O(), T("details", d2, _[9] || (_[9] = [
          ks('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : z("", !0)
      ]),
      p("div", f2, [
        _[15] || (_[15] = p("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        p("div", p2, [
          p("button", {
            onClick: _[1] || (_[1] = (f) => b("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, _[11] || (_[11] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          p("button", {
            onClick: _[2] || (_[2] = (f) => b("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, _[12] || (_[12] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          p("button", {
            onClick: _[3] || (_[3] = (f) => b("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, _[13] || (_[13] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          p("button", {
            onClick: g,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            _[14] || (_[14] = p("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              })
            ], -1)),
            l.value ? (O(), T("span", h2, " Link copied! ")) : z("", !0)
          ])
        ])
      ])
    ]));
  }
}, g2 = /* @__PURE__ */ it(m2, [["__scopeId", "data-v-9e2c3b5c"]]), v2 = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, y2 = { class: "space-y-3 mb-4" }, b2 = { class: "flex justify-between text-sm" }, _2 = { class: "text-gray-600" }, E2 = { class: "font-medium text-gray-900" }, w2 = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, N2 = {
  key: 1,
  class: "flex justify-between text-sm"
}, x2 = { class: "text-gray-900" }, S2 = {
  key: 2,
  class: "flex justify-between text-sm"
}, C2 = { class: "text-gray-900" }, k2 = { class: "border-t pt-4 mb-6" }, O2 = { class: "flex justify-between items-baseline" }, T2 = { class: "text-right" }, D2 = { class: "text-xl font-bold text-gray-900" }, V2 = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, $2 = { class: "mb-6" }, A2 = { class: "group" }, I2 = { class: "mt-3" }, M2 = ["disabled"], P2 = ["disabled"], R2 = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, L2 = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, F2 = ["disabled"], B2 = {
  key: 0,
  class: "flex items-center gap-2"
}, j2 = { key: 1 }, H2 = {
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
    const n = e, s = t, o = q(""), i = q(""), r = q(""), l = q(!1), a = q(!1), c = te(() => n.cart.item_count || 0), d = te(() => n.cart.total_price || 0), u = te(() => n.cart.original_total_price || n.cart.total_price || 0), h = te(() => n.cart.total_discount || 0), m = te(() => d.value >= 5e3 ? 0 : 500), b = te(() => Math.round(d.value * 0.1)), g = (_) => `$${(_ / 100).toFixed(2)}`, D = async () => {
      var _;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, i.value = "", r.value = "";
        try {
          const f = new FormData();
          f.append("discount_code", o.value);
          const x = await fetch("/discount/apply", {
            method: "POST",
            body: f
          });
          if (x.ok)
            r.value = "Promo code applied successfully!", o.value = "", await ((_ = window.OrionCart) == null ? void 0 : _.fetchCart());
          else {
            const E = await x.json();
            i.value = E.message || "Invalid promo code";
          }
        } catch (f) {
          console.error("Failed to apply promo code:", f), i.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, k = async () => {
      if (!(c.value === 0 || a.value)) {
        a.value = !0;
        try {
          s("checkout"), window.location.href = "/checkout";
        } catch (_) {
          console.error("Failed to proceed to checkout:", _), alert("Failed to proceed to checkout. Please try again.");
        } finally {
          a.value = !1;
        }
      }
    };
    return (_, f) => (O(), T("div", v2, [
      f[8] || (f[8] = p("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      p("div", y2, [
        p("div", b2, [
          p("span", _2, "Subtotal (" + X(c.value) + " " + X(c.value === 1 ? "item" : "items") + ")", 1),
          p("span", E2, X(g(u.value)), 1)
        ]),
        h.value > 0 ? (O(), T("div", w2, [
          f[1] || (f[1] = p("span", { class: "flex items-center gap-1" }, [
            p("svg", {
              class: "w-4 h-4",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              p("path", {
                "fill-rule": "evenodd",
                d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                "clip-rule": "evenodd"
              })
            ]),
            Le(" Discounts ")
          ], -1)),
          p("span", null, "-" + X(g(h.value)), 1)
        ])) : z("", !0),
        e.showShipping ? (O(), T("div", N2, [
          f[2] || (f[2] = p("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          p("span", x2, X(m.value === 0 ? "Free" : g(m.value)), 1)
        ])) : z("", !0),
        e.showTax ? (O(), T("div", S2, [
          f[3] || (f[3] = p("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          p("span", C2, X(g(b.value)), 1)
        ])) : z("", !0)
      ]),
      p("div", k2, [
        p("div", O2, [
          f[4] || (f[4] = p("span", { class: "text-lg font-semibold" }, "Total", -1)),
          p("div", T2, [
            p("span", D2, X(g(d.value)), 1),
            h.value > 0 ? (O(), T("p", V2, " You saved " + X(g(h.value)) + "! ", 1)) : z("", !0)
          ])
        ])
      ]),
      p("div", $2, [
        p("details", A2, [
          f[5] || (f[5] = p("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
            p("span", null, "Have a promo code?"),
            p("svg", {
              class: "w-4 h-4 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          p("div", I2, [
            p("form", {
              onSubmit: Ht(D, ["prevent"]),
              class: "flex gap-2"
            }, [
              wt(p("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (x) => o.value = x),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, M2), [
                [is, o.value]
              ]),
              p("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !o.value.trim() || l.value
              }, X(l.value ? "Applying..." : "Apply"), 9, P2)
            ], 32),
            i.value ? (O(), T("p", R2, X(i.value), 1)) : z("", !0),
            r.value ? (O(), T("p", L2, X(r.value), 1)) : z("", !0)
          ])
        ])
      ]),
      p("button", {
        onClick: k,
        class: "w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        disabled: c.value === 0 || a.value
      }, [
        a.value ? (O(), T("span", B2, f[6] || (f[6] = [
          p("svg", {
            class: "animate-spin h-5 w-5",
            viewBox: "0 0 24 24"
          }, [
            p("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4",
              fill: "none"
            }),
            p("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
          ], -1),
          Le(" Processing... ", -1)
        ]))) : (O(), T("span", j2, f[7] || (f[7] = [
          Le(" Proceed to Checkout ", -1),
          p("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ], -1)
        ])))
      ], 8, F2),
      f[9] || (f[9] = ks('<div class="mt-6 space-y-2" data-v-d638da26><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-d638da26></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-d638da26></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-d638da26></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d638da26></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-d638da26><p class="text-xs text-gray-600 mb-2" data-v-d638da26>We accept</p><div class="flex gap-2" data-v-d638da26><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-d638da26></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#EB001B" data-v-d638da26></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-d638da26></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-d638da26></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-d638da26></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#253B80" data-v-d638da26></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-d638da26></path></svg></div></div>', 2))
    ]));
  }
}, U2 = /* @__PURE__ */ it(H2, [["__scopeId", "data-v-d638da26"]]), q2 = { class: "slideshow-banner" }, z2 = {
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
    const t = e, n = q(0), s = q([]), o = q(null), i = te(() => t.autoRotate === !0 || t.autoRotate === "true"), r = te(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const g = document.querySelector(".slideshow-prev"), D = document.querySelector(".slideshow-next"), k = document.querySelectorAll(".slide-indicator");
      g && g.addEventListener("click", d), D && D.addEventListener("click", c), k.forEach((_, f) => {
        _.addEventListener("click", () => a(f));
      }), i.value && u();
    }, a = (g) => {
      var _, f, x, E;
      if (g === n.value || !s.value.length) return;
      (_ = s.value[n.value]) == null || _.classList.remove("opacity-100"), (f = s.value[n.value]) == null || f.classList.add("opacity-0");
      const D = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      D == null || D.classList.remove("opacity-100"), D == null || D.classList.add("opacity-50"), n.value = g, (x = s.value[n.value]) == null || x.classList.remove("opacity-0"), (E = s.value[n.value]) == null || E.classList.add("opacity-100");
      const k = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      k == null || k.classList.remove("opacity-50"), k == null || k.classList.add("opacity-100");
    }, c = () => {
      const g = (n.value + 1) % s.value.length;
      a(g);
    }, d = () => {
      const g = n.value === 0 ? s.value.length - 1 : n.value - 1;
      a(g);
    }, u = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        c();
      }, r.value);
    }, h = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, m = () => {
      i.value && h();
    }, b = () => {
      i.value && u();
    };
    return Ye(() => {
      setTimeout(l, 100);
      const g = document.querySelector(".slideshow-wrapper");
      g && (g.addEventListener("mouseenter", m), g.addEventListener("mouseleave", b));
    }), It(() => {
      h();
      const g = document.querySelector(".slideshow-wrapper");
      g && (g.removeEventListener("mouseenter", m), g.removeEventListener("mouseleave", b));
    }), (g, D) => (O(), T("div", q2, [
      Ln(g.$slots, "default", {}, void 0, !0)
    ]));
  }
}, K2 = /* @__PURE__ */ it(z2, [["__scopeId", "data-v-8690c751"]]), W2 = { class: "testimonials-carousel relative" }, G2 = {
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
    const t = e, n = q(0), s = q([]), o = q(null), i = q(null), r = te(() => t.autoRotate === !0 || t.autoRotate === "true"), l = te(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), i.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const E = document.querySelector(".testimonials-prev"), $ = document.querySelector(".testimonials-next"), P = document.querySelectorAll(".testimonial-indicator");
      E && E.addEventListener("click", u), $ && $.addEventListener("click", d), P.forEach((N, v) => {
        N.addEventListener("click", () => c(v));
      }), r.value && h();
    }, c = (E) => {
      if (E === n.value || !s.value.length || !i.value) return;
      n.value = E;
      const P = -s.value[0].offsetWidth * n.value;
      i.value.style.transform = `translateX(${P}px)`, document.querySelectorAll(".testimonial-indicator").forEach((v, C) => {
        C === n.value ? (v.classList.remove("bg-gray-300"), v.classList.add("bg-red-600")) : (v.classList.remove("bg-red-600"), v.classList.add("bg-gray-300"));
      });
    }, d = () => {
      const E = (n.value + 1) % s.value.length;
      c(E);
    }, u = () => {
      const E = n.value === 0 ? s.value.length - 1 : n.value - 1;
      c(E);
    }, h = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        d();
      }, l.value);
    }, m = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, b = () => {
      r.value && m();
    }, g = () => {
      r.value && h();
    };
    let D = 0, k = 0;
    const _ = (E) => {
      D = E.changedTouches[0].screenX;
    }, f = (E) => {
      k = E.changedTouches[0].screenX, x();
    }, x = () => {
      const $ = D - k;
      Math.abs($) > 50 && ($ > 0 ? d() : u());
    };
    return Ye(() => {
      setTimeout(a, 100);
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.addEventListener("mouseenter", b), E.addEventListener("mouseleave", g), E.addEventListener("touchstart", _), E.addEventListener("touchend", f));
    }), It(() => {
      m();
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.removeEventListener("mouseenter", b), E.removeEventListener("mouseleave", g), E.removeEventListener("touchstart", _), E.removeEventListener("touchend", f));
    }), (E, $) => (O(), T("div", W2, [
      Ln(E.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Y2 = /* @__PURE__ */ it(G2, [["__scopeId", "data-v-276cc4e8"]]), J2 = { class: "video-player relative w-full h-full" }, X2 = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, Q2 = ["src", "title"], Z2 = {
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
    const t = e, n = q(!1), s = q(""), o = q(""), i = te(() => t.autoplay === !0 || t.autoplay === "true"), r = te(() => t.muted === !0 || t.muted === "true"), l = te(() => t.controls === !0 || t.controls === "true"), a = te(() => `${s.value} video player`), c = te(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const b = i.value ? "1" : "0", g = r.value ? "1" : "0", D = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${b}&mute=${g}&controls=${D}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${b}&muted=${g}&controls=${D}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
      if (!m) return { type: "", id: "" };
      const b = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const D of b) {
        const k = m.match(D);
        if (k)
          return { type: "youtube", id: k[1] };
      }
      const g = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const D of g) {
        const k = m.match(D);
        if (k)
          return { type: "vimeo", id: k[1] };
      }
      return { type: "", id: "" };
    }, u = () => {
      o.value && s.value && (n.value = !0);
    }, h = () => {
      i.value && o.value && s.value && (n.value = !0);
    };
    return Ye(() => {
      const m = d(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const b = document.querySelector(".play-button");
      b && b.addEventListener("click", u), h();
    }), (m, b) => (O(), T("div", J2, [
      n.value ? (O(), T("div", X2, [
        p("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, Q2)
      ])) : (O(), T("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        Ln(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, ew = /* @__PURE__ */ it(Z2, [["__scopeId", "data-v-540fecb2"]]), tw = { class: "password-modal" }, nw = {
  __name: "PasswordModal",
  setup(e) {
    const t = q(!1), n = () => {
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
    }), (c, d) => (O(), T("div", tw, [
      Ln(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, sw = /* @__PURE__ */ it(nw, [["__scopeId", "data-v-075988c6"]]), ow = /* @__PURE__ */ Fe({
  ...ws,
  props: {
    ...ws.props,
    // Inject global settings as default props
    buttonRadius: {
      type: [String, Number],
      default: () => {
        var e, t;
        return ((t = (e = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : e.settings) == null ? void 0 : t.button_border_radius) || 6;
      }
    },
    primaryBg: {
      type: String,
      default: () => {
        var e, t;
        return ((t = (e = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : e.settings) == null ? void 0 : t.button_primary_bg) || "#dc2626";
      }
    },
    primaryBgHover: {
      type: String,
      default: () => {
        var e, t;
        return ((t = (e = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : e.settings) == null ? void 0 : t.button_primary_bg_hover) || "#b91c1c";
      }
    },
    primaryText: {
      type: String,
      default: () => {
        var e, t;
        return ((t = (e = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : e.settings) == null ? void 0 : t.button_primary_text) || "#ffffff";
      }
    },
    secondaryBg: {
      type: String,
      default: () => {
        var e, t;
        return ((t = (e = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : e.settings) == null ? void 0 : t.button_secondary_bg) || "#ffffff";
      }
    },
    secondaryBgHover: {
      type: String,
      default: () => {
        var e, t;
        return ((t = (e = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : e.settings) == null ? void 0 : t.button_secondary_bg_hover) || "#f9fafb";
      }
    },
    secondaryText: {
      type: String,
      default: () => {
        var e, t;
        return ((t = (e = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : e.settings) == null ? void 0 : t.button_secondary_text) || "#374151";
      }
    },
    secondaryBorder: {
      type: String,
      default: () => {
        var e, t;
        return ((t = (e = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : e.settings) == null ? void 0 : t.button_secondary_border) || "#d1d5db";
      }
    }
  }
}), iw = /* @__PURE__ */ Fe(Af), rw = /* @__PURE__ */ Fe(If), lw = /* @__PURE__ */ Fe(B1), aw = /* @__PURE__ */ Fe(Vf), cw = /* @__PURE__ */ Fe(Q1), uw = /* @__PURE__ */ Fe(Pf), dw = /* @__PURE__ */ Fe(zb), fw = /* @__PURE__ */ Fe(B_), pw = /* @__PURE__ */ Fe(EE), hw = /* @__PURE__ */ Fe(RE), mw = /* @__PURE__ */ Fe(g2), gw = /* @__PURE__ */ Fe($f), vw = /* @__PURE__ */ Fe(U2), yw = /* @__PURE__ */ Fe(K2), bw = /* @__PURE__ */ Fe(Y2), _w = /* @__PURE__ */ Fe(ew), Ew = /* @__PURE__ */ Fe(sw);
customElements.define("orion-button", ow);
customElements.define("cart-drawer", iw);
customElements.define("mobile-menu", rw);
customElements.define("product-variant-picker", lw);
customElements.define("quantity-selector", aw);
customElements.define("sticky-header", cw);
customElements.define("main-header", uw);
customElements.define("site-footer", dw);
customElements.define("collection-filters", fw);
customElements.define("collection-grid", pw);
customElements.define("product-gallery", hw);
customElements.define("product-info", mw);
customElements.define("cart-item", gw);
customElements.define("cart-summary", vw);
customElements.define("slideshow-banner", yw);
customElements.define("testimonials-carousel", bw);
customElements.define("video-player", _w);
customElements.define("password-modal", Ew);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".main-header-mount").forEach((i) => {
    zn(Pf, {
      shopName: i.dataset.shopName || "Orion Store",
      logoUrl: i.dataset.logoUrl || "",
      navigationLinks: JSON.parse(i.dataset.navigationLinks || "[]")
    }).mount(i);
  }), document.querySelectorAll(".mobile-menu-mount").forEach((i) => {
    zn(If, {
      menuItems: JSON.parse(i.dataset.menuItems || "[]"),
      customerUrl: i.dataset.customerUrl || "/account",
      showLocalization: i.dataset.showLocalization === "true"
    }).mount(i);
  }), document.querySelectorAll(".cart-drawer-mount").forEach((i) => {
    zn(Af).mount(i);
  }), document.querySelectorAll("product-card").forEach((i) => {
    const r = {
      productId: i.getAttribute("product-id"),
      variantId: i.getAttribute("variant-id"),
      title: i.getAttribute("title"),
      handle: i.getAttribute("handle"),
      vendor: i.getAttribute("vendor"),
      price: i.getAttribute("price"),
      compareAtPrice: i.getAttribute("compare-at-price"),
      image: i.getAttribute("image"),
      available: i.getAttribute(":available") === "true"
    };
    zn(m_, r).mount(i);
  }), document.querySelectorAll(".sticky-header").forEach((i) => {
    if (i.dataset.sticky === "true") {
      let r = window.scrollY;
      window.addEventListener("scroll", () => {
        const l = window.scrollY, a = i.dataset.transparent === "true", c = i.dataset.hideOnScroll === "true";
        l > 100 && !a ? (i.classList.add("sticky", "top-0", "shadow-md"), i.style.backgroundColor = i.dataset.stickyBackground || "#ffffff") : (i.classList.remove("sticky", "shadow-md"), i.style.backgroundColor = ""), c && (l > r && l > 100 ? i.style.transform = "translateY(-100%)" : i.style.transform = "translateY(0)"), r = l;
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
      var i;
      try {
        const l = await (await fetch((((i = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : i.cart) || "/cart") + ".js")).json();
        return this.state.items = l.items, this.state.totalPrice = l.total_price, this.state.itemCount = l.item_count, document.dispatchEvent(new CustomEvent("cart:updated", { detail: l })), l;
      } catch (r) {
        console.error("Failed to fetch cart:", r);
      }
    },
    async addItem(i) {
      var r;
      try {
        let l;
        i instanceof FormData ? l = await fetch(((r = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : r.cart_add) || "/cart/add", {
          method: "POST",
          body: i
        }) : l = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(i)
        });
        const a = await l.json();
        return await this.fetchCart(), this.openDrawer(), a;
      } catch (l) {
        console.error("Failed to add item to cart:", l);
      }
    },
    async updateItem(i, r, l = null) {
      try {
        const a = {
          quantity: r
        };
        l !== null ? a.line = l : a.id = i;
        const d = await (await fetch("/api/carts/ajax-cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(a)
        })).json();
        return await this.fetchCart(), d;
      } catch (a) {
        console.error("Failed to update cart:", a);
      }
    },
    async removeItem(i, r = null) {
      return this.updateItem(i, 0, r);
    },
    openDrawer() {
      this.state.isOpen = !0, document.dispatchEvent(new CustomEvent("cart:open"));
    },
    closeDrawer() {
      this.state.isOpen = !1, document.dispatchEvent(new CustomEvent("cart:close"));
    }
  }, window.OrionCart.fetchCart(), document.addEventListener("cart:updated", (i) => {
    const r = i.detail.item_count;
    document.querySelectorAll(".cart-count").forEach((a) => {
      r > 0 ? (a.textContent = r, a.style.opacity = "1") : a.style.opacity = "0";
    });
  });
});
