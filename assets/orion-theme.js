var il = {};
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
const fe = il.NODE_ENV !== "production" ? Object.freeze({}) : {}, ys = il.NODE_ENV !== "production" ? Object.freeze([]) : [], Oe = () => {
}, Ws = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), si = (e) => e.startsWith("onUpdate:"), de = Object.assign, rl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Kf = Object.prototype.hasOwnProperty, ge = (e, t) => Kf.call(e, t), K = Array.isArray, Jn = (e) => Fs(e) === "[object Map]", cs = (e) => Fs(e) === "[object Set]", ca = (e) => Fs(e) === "[object Date]", Wf = (e) => Fs(e) === "[object RegExp]", oe = (e) => typeof e == "function", re = (e) => typeof e == "string", bt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Vi = (e) => (me(e) || oe(e)) && oe(e.then) && oe(e.catch), Ac = Object.prototype.toString, Fs = (e) => Ac.call(e), ll = (e) => Fs(e).slice(8, -1), $i = (e) => Fs(e) === "[object Object]", al = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ic = /* @__PURE__ */ qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ai = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gf = /-(\w)/g, Se = Ai(
  (e) => e.replace(Gf, (t, n) => n ? n.toUpperCase() : "")
), Yf = /\B([A-Z])/g, Ze = Ai(
  (e) => e.replace(Yf, "-$1").toLowerCase()
), on = Ai((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = Ai(
  (e) => e ? `on${on(e)}` : ""
), at = (e, t) => !Object.is(e, t), On = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ss = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, oi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ii = (e) => {
  const t = re(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ua;
const So = () => ua || (ua = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const Zs = {
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
}, Xf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Qf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Zf = /* @__PURE__ */ qe(Qf), da = 2;
function ep(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const o = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let i = 0;
  const r = [];
  for (let l = 0; l < s.length; l++)
    if (i += s[l].length + (o[l] && o[l].length || 0), i >= t) {
      for (let a = l - da; a <= l + da || n > i; a++) {
        if (a < 0 || a >= s.length) continue;
        const u = a + 1;
        r.push(
          `${u}${" ".repeat(Math.max(3 - String(u).length, 0))}|  ${s[a]}`
        );
        const d = s[a].length, c = o[a] && o[a].length || 0;
        if (a === l) {
          const f = t - (i - (d + c)), m = Math.max(
            1,
            n > i ? d - f : n - t
          );
          r.push("   |  " + " ".repeat(f) + "^".repeat(m));
        } else if (a > l) {
          if (n > i) {
            const f = Math.max(Math.min(n - i, d), 1);
            r.push("   |  " + "^".repeat(f));
          }
          i += d + c;
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
      const s = e[n], o = re(s) ? Mc(s) : dt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (re(e) || me(e))
    return e;
}
const tp = /;(?![^(]*\))/g, np = /:([^]+)/, sp = /\/\*[^]*?\*\//g;
function Mc(e) {
  const t = {};
  return e.replace(sp, "").split(tp).forEach((n) => {
    if (n) {
      const s = n.split(np);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function op(e) {
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
function ip(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !re(t) && (e.class = Ie(t)), n && (e.style = dt(n)), e;
}
const rp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", lp = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ap = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", cp = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Pc = /* @__PURE__ */ qe(rp), Rc = /* @__PURE__ */ qe(lp), Lc = /* @__PURE__ */ qe(ap), up = /* @__PURE__ */ qe(cp), Fc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dp = /* @__PURE__ */ qe(Fc), fa = /* @__PURE__ */ qe(
  Fc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function cl(e) {
  return !!e || e === "";
}
const fp = /* @__PURE__ */ qe(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), pp = /* @__PURE__ */ qe(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function hp(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const mp = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function gp(e, t) {
  return e.replace(
    mp,
    (n) => `\\${n}`
  );
}
function vp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Rn(e[s], t[s]);
  return n;
}
function Rn(e, t) {
  if (e === t) return !0;
  let n = ca(e), s = ca(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = bt(e), s = bt(t), n || s)
    return e === t;
  if (n = K(e), s = K(t), n || s)
    return n && s ? vp(e, t) : !1;
  if (n = me(e), s = me(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Rn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ii(e, t) {
  return e.findIndex((n) => Rn(n, t));
}
const Bc = (e) => !!(e && e.__v_isRef === !0), X = (e) => re(e) ? e : e == null ? "" : K(e) || me(e) && (e.toString === Ac || !oe(e.toString)) ? Bc(e) ? X(e.value) : JSON.stringify(e, jc, 2) : String(e), jc = (e, t) => Bc(t) ? jc(e, t.value) : Jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[rr(s, i) + " =>"] = o, n),
    {}
  )
} : cs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rr(n))
} : bt(t) ? rr(t) : me(t) && !K(t) && !$i(t) ? String(t) : t, rr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Hc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && il.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var be = {};
function Vt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Xe;
class ul {
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
function yp(e) {
  return new ul(e);
}
function dl() {
  return Xe;
}
function Uc(e, t = !1) {
  Xe ? Xe.cleanups.push(e) : be.NODE_ENV !== "production" && !t && Vt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let _e;
const lr = /* @__PURE__ */ new WeakSet();
class uo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Xe && Xe.active && Xe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, lr.has(this) && (lr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, pa(this), Kc(this);
    const t = _e, n = jt;
    _e = this, jt = !0;
    try {
      return this.fn();
    } finally {
      be.NODE_ENV !== "production" && _e !== this && Vt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Wc(this), _e = t, jt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        hl(t);
      this.deps = this.depsTail = void 0, pa(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? lr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xr(this) && this.run();
  }
  get dirty() {
    return xr(this);
  }
}
let qc = 0, eo, to;
function zc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = to, to = e;
    return;
  }
  e.next = eo, eo = e;
}
function fl() {
  qc++;
}
function pl() {
  if (--qc > 0)
    return;
  if (to) {
    let t = to;
    for (to = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; eo; ) {
    let t = eo;
    for (eo = void 0; t; ) {
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
function Kc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Wc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), hl(s), bp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function xr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Gc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Gc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fo) || (e.globalVersion = fo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = _e, s = jt;
  _e = e, jt = !0;
  try {
    Kc(e);
    const o = e.fn(e._value);
    (t.version === 0 || at(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    _e = n, jt = s, Wc(e), e.flags &= -3;
  }
}
function hl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), be.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      hl(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function bp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function _p(e, t) {
  e.effect instanceof uo && (e = e.effect.fn);
  const n = new uo(e);
  t && de(n, t);
  try {
    n.run();
  } catch (o) {
    throw n.stop(), o;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function Ep(e) {
  e.effect.stop();
}
let jt = !0;
const Yc = [];
function qt() {
  Yc.push(jt), jt = !1;
}
function zt() {
  const e = Yc.pop();
  jt = e === void 0 ? !0 : e;
}
function pa(e) {
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
let fo = 0;
class wp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, be.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!_e || !jt || _e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      n = this.activeLink = new wp(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Jc(n);
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
    this.version++, fo++, this.notify(t);
  }
  notify(t) {
    fl();
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
      pl();
    }
  }
}
function Jc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Jc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), be.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ri = /* @__PURE__ */ new WeakMap(), Xn = Symbol(
  be.NODE_ENV !== "production" ? "Object iterate" : ""
), Sr = Symbol(
  be.NODE_ENV !== "production" ? "Map keys iterate" : ""
), po = Symbol(
  be.NODE_ENV !== "production" ? "Array iterate" : ""
);
function je(e, t, n) {
  if (jt && _e) {
    let s = ri.get(e);
    s || ri.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Mi()), o.map = s, o.key = n), be.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function en(e, t, n, s, o, i) {
  const r = ri.get(e);
  if (!r) {
    fo++;
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
  if (fl(), t === "clear")
    r.forEach(l);
  else {
    const a = K(e), u = a && al(n);
    if (a && n === "length") {
      const d = Number(s);
      r.forEach((c, f) => {
        (f === "length" || f === po || !bt(f) && f >= d) && l(c);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(po)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(Xn)), Jn(e) && l(r.get(Sr)));
          break;
        case "delete":
          a || (l(r.get(Xn)), Jn(e) && l(r.get(Sr)));
          break;
        case "set":
          Jn(e) && l(r.get(Xn));
          break;
      }
  }
  pl();
}
function Np(e, t) {
  const n = ri.get(e);
  return n && n.get(t);
}
function hs(e) {
  const t = ae(e);
  return t === e ? t : (je(t, "iterate", po), tt(e) ? t : t.map(We));
}
function Pi(e) {
  return je(e = ae(e), "iterate", po), e;
}
const xp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ar(this, Symbol.iterator, We);
  },
  concat(...e) {
    return hs(this).concat(
      ...e.map((t) => K(t) ? hs(t) : t)
    );
  },
  entries() {
    return ar(this, "entries", (e) => (e[1] = We(e[1]), e));
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
    return cr(this, "includes", e);
  },
  indexOf(...e) {
    return cr(this, "indexOf", e);
  },
  join(e) {
    return hs(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return cr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ln(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Us(this, "pop");
  },
  push(...e) {
    return Us(this, "push", e);
  },
  reduce(e, ...t) {
    return ha(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ha(this, "reduceRight", e, t);
  },
  shift() {
    return Us(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ln(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Us(this, "splice", e);
  },
  toReversed() {
    return hs(this).toReversed();
  },
  toSorted(e) {
    return hs(this).toSorted(e);
  },
  toSpliced(...e) {
    return hs(this).toSpliced(...e);
  },
  unshift(...e) {
    return Us(this, "unshift", e);
  },
  values() {
    return ar(this, "values", We);
  }
};
function ar(e, t, n) {
  const s = Pi(e), o = s[t]();
  return s !== e && !tt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const Sp = Array.prototype;
function ln(e, t, n, s, o, i) {
  const r = Pi(e), l = r !== e && !tt(e), a = r[t];
  if (a !== Sp[t]) {
    const c = a.apply(e, i);
    return l ? We(c) : c;
  }
  let u = n;
  r !== e && (l ? u = function(c, f) {
    return n.call(this, We(c), f, e);
  } : n.length > 2 && (u = function(c, f) {
    return n.call(this, c, f, e);
  }));
  const d = a.call(r, u, s);
  return l && o ? o(d) : d;
}
function ha(e, t, n, s) {
  const o = Pi(e);
  let i = n;
  return o !== e && (tt(e) ? n.length > 3 && (i = function(r, l, a) {
    return n.call(this, r, l, a, e);
  }) : i = function(r, l, a) {
    return n.call(this, r, We(l), a, e);
  }), o[t](i, ...s);
}
function cr(e, t, n) {
  const s = ae(e);
  je(s, "iterate", po);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Cs(n[0]) ? (n[0] = ae(n[0]), s[t](...n)) : o;
}
function Us(e, t, n = []) {
  qt(), fl();
  const s = ae(e)[t].apply(e, n);
  return pl(), zt(), s;
}
const Cp = /* @__PURE__ */ qe("__proto__,__v_isRef,__isVue"), Xc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt)
);
function kp(e) {
  bt(e) || (e = String(e));
  const t = ae(this);
  return je(t, "has", e), t.hasOwnProperty(e);
}
class Qc {
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
      return s === (o ? i ? ou : su : i ? nu : tu).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = K(t);
    if (!o) {
      let a;
      if (r && (a = xp[n]))
        return a;
      if (n === "hasOwnProperty")
        return kp;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $e(t) ? t : s
    );
    return (bt(n) ? Xc.has(n) : Cp(n)) || (o || je(t, "get", n), i) ? l : $e(l) ? r && al(n) ? l : l.value : me(l) ? o ? Li(l) : Ss(l) : l;
  }
}
class Zc extends Qc {
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
    const r = K(t) && al(n) ? Number(n) < t.length : ge(t, n), l = Reflect.set(
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
    return (!bt(n) || !Xc.has(n)) && je(t, "has", n), s;
  }
  ownKeys(t) {
    return je(
      t,
      "iterate",
      K(t) ? "length" : Xn
    ), Reflect.ownKeys(t);
  }
}
class eu extends Qc {
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
const Op = /* @__PURE__ */ new Zc(), Tp = /* @__PURE__ */ new eu(), Dp = /* @__PURE__ */ new Zc(!0), Vp = /* @__PURE__ */ new eu(!0), Cr = (e) => e, Po = (e) => Reflect.getPrototypeOf(e);
function $p(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = ae(o), r = Jn(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...s), d = n ? Cr : t ? li : We;
    return !t && je(
      i,
      "iterate",
      a ? Sr : Xn
    ), {
      // iterator protocol
      next() {
        const { value: c, done: f } = u.next();
        return f ? { value: c, done: f } : {
          value: l ? [d(c[0]), d(c[1])] : d(c),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ro(e) {
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
function Ap(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = ae(i), l = ae(o);
      e || (at(o, l) && je(r, "get", o), je(r, "get", l));
      const { has: a } = Po(r), u = t ? Cr : e ? li : We;
      if (a.call(r, o))
        return u(i.get(o));
      if (a.call(r, l))
        return u(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && je(ae(o), "iterate", Xn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, r = ae(i), l = ae(o);
      return e || (at(o, l) && je(r, "has", o), je(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = ae(l), u = t ? Cr : e ? li : We;
      return !e && je(a, "iterate", Xn), l.forEach((d, c) => o.call(i, u(d), u(c), r));
    }
  };
  return de(
    n,
    e ? {
      add: Ro("add"),
      set: Ro("set"),
      delete: Ro("delete"),
      clear: Ro("clear")
    } : {
      add(o) {
        !t && !tt(o) && !Kt(o) && (o = ae(o));
        const i = ae(this);
        return Po(i).has.call(i, o) || (i.add(o), en(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !tt(i) && !Kt(i) && (i = ae(i));
        const r = ae(this), { has: l, get: a } = Po(r);
        let u = l.call(r, o);
        u ? be.NODE_ENV !== "production" && ma(r, l, o) : (o = ae(o), u = l.call(r, o));
        const d = a.call(r, o);
        return r.set(o, i), u ? at(i, d) && en(r, "set", o, i, d) : en(r, "add", o, i), this;
      },
      delete(o) {
        const i = ae(this), { has: r, get: l } = Po(i);
        let a = r.call(i, o);
        a ? be.NODE_ENV !== "production" && ma(i, r, o) : (o = ae(o), a = r.call(i, o));
        const u = l ? l.call(i, o) : void 0, d = i.delete(o);
        return a && en(i, "delete", o, void 0, u), d;
      },
      clear() {
        const o = ae(this), i = o.size !== 0, r = be.NODE_ENV !== "production" ? Jn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
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
    n[o] = $p(o, e, t);
  }), n;
}
function Ri(e, t) {
  const n = Ap(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Ip = {
  get: /* @__PURE__ */ Ri(!1, !1)
}, Mp = {
  get: /* @__PURE__ */ Ri(!1, !0)
}, Pp = {
  get: /* @__PURE__ */ Ri(!0, !1)
}, Rp = {
  get: /* @__PURE__ */ Ri(!0, !0)
};
function ma(e, t, n) {
  const s = ae(n);
  if (s !== n && t.call(e, s)) {
    const o = ll(e);
    Vt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tu = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap();
function Lp(e) {
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
function Fp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Lp(ll(e));
}
function Ss(e) {
  return Kt(e) ? e : Fi(
    e,
    !1,
    Op,
    Ip,
    tu
  );
}
function iu(e) {
  return Fi(
    e,
    !1,
    Dp,
    Mp,
    nu
  );
}
function Li(e) {
  return Fi(
    e,
    !0,
    Tp,
    Pp,
    su
  );
}
function Lt(e) {
  return Fi(
    e,
    !0,
    Vp,
    Rp,
    ou
  );
}
function Fi(e, t, n, s, o) {
  if (!me(e))
    return be.NODE_ENV !== "production" && Vt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Fp(e);
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
function Cs(e) {
  return e ? !!e.__v_raw : !1;
}
function ae(e) {
  const t = e && e.__v_raw;
  return t ? ae(t) : e;
}
function ru(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && ss(e, "__v_skip", !0), e;
}
const We = (e) => me(e) ? Ss(e) : e, li = (e) => me(e) ? Li(e) : e;
function $e(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function q(e) {
  return au(e, !1);
}
function lu(e) {
  return au(e, !0);
}
function au(e, t) {
  return $e(e) ? e : new Bp(e, t);
}
class Bp {
  constructor(t, n) {
    this.dep = new Mi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ae(t), this._value = n ? t : We(t), this.__v_isShallow = n;
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
function jp(e) {
  e.dep && (be.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function Co(e) {
  return $e(e) ? e.value : e;
}
function Hp(e) {
  return oe(e) ? e() : Co(e);
}
const Up = {
  get: (e, t, n) => t === "__v_raw" ? e : Co(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return $e(o) && !$e(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ml(e) {
  return hn(e) ? e : new Proxy(e, Up);
}
class qp {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Mi(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function cu(e) {
  return new qp(e);
}
function zp(e) {
  be.NODE_ENV !== "production" && !Cs(e) && Vt("toRefs() expects a reactive object but received a plain one.");
  const t = K(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = uu(e, n);
  return t;
}
class Kp {
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
    return Np(ae(this._object), this._key);
  }
}
class Wp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Gp(e, t, n) {
  return $e(e) ? e : oe(e) ? new Wp(e) : me(e) && arguments.length > 1 ? uu(e, t, n) : q(e);
}
function uu(e, t, n) {
  const s = e[t];
  return $e(s) ? s : new Kp(e, t, n);
}
class Yp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Mi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _e !== this)
      return zc(this, !0), !0;
  }
  get value() {
    const t = be.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Gc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : be.NODE_ENV !== "production" && Vt("Write operation failed: computed value is readonly");
  }
}
function Jp(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const i = new Yp(s, o, n);
  return be.NODE_ENV !== "production" && t && !n && (i.onTrack = t.onTrack, i.onTrigger = t.onTrigger), i;
}
const Xp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Qp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Lo = {}, ai = /* @__PURE__ */ new WeakMap();
let Nn;
function Zp() {
  return Nn;
}
function du(e, t = !1, n = Nn) {
  if (n) {
    let s = ai.get(n);
    s || ai.set(n, s = []), s.push(e);
  } else be.NODE_ENV !== "production" && !t && Vt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function eh(e, t, n = fe) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, u = (E) => {
    (n.onWarn || Vt)(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (E) => o ? E : tt(E) || o === !1 || o === 0 ? fn(E, 1) : fn(E);
  let c, f, m, _, b = !1, D = !1;
  if ($e(e) ? (f = () => e.value, b = tt(e)) : hn(e) ? (f = () => d(e), b = !0) : K(e) ? (D = !0, b = e.some((E) => hn(E) || tt(E)), f = () => e.map((E) => {
    if ($e(E))
      return E.value;
    if (hn(E))
      return d(E);
    if (oe(E))
      return a ? a(E, 2) : E();
    be.NODE_ENV !== "production" && u(E);
  })) : oe(e) ? t ? f = a ? () => a(e, 2) : e : f = () => {
    if (m) {
      qt();
      try {
        m();
      } finally {
        zt();
      }
    }
    const E = Nn;
    Nn = c;
    try {
      return a ? a(e, 3, [_]) : e(_);
    } finally {
      Nn = E;
    }
  } : (f = Oe, be.NODE_ENV !== "production" && u(e)), t && o) {
    const E = f, V = o === !0 ? 1 / 0 : o;
    f = () => fn(E(), V);
  }
  const O = dl(), y = () => {
    c.stop(), O && O.active && rl(O.effects, c);
  };
  if (i && t) {
    const E = t;
    t = (...V) => {
      E(...V), y();
    };
  }
  let h = D ? new Array(e.length).fill(Lo) : Lo;
  const x = (E) => {
    if (!(!(c.flags & 1) || !c.dirty && !E))
      if (t) {
        const V = c.run();
        if (o || b || (D ? V.some((P, N) => at(P, h[N])) : at(V, h))) {
          m && m();
          const P = Nn;
          Nn = c;
          try {
            const N = [
              V,
              // pass undefined as the old value when it's changed for the first time
              h === Lo ? void 0 : D && h[0] === Lo ? [] : h,
              _
            ];
            h = V, a ? a(t, 3, N) : (
              // @ts-expect-error
              t(...N)
            );
          } finally {
            Nn = P;
          }
        }
      } else
        c.run();
  };
  return l && l(x), c = new uo(f), c.scheduler = r ? () => r(x, !1) : x, _ = (E) => du(E, !1, c), m = c.onStop = () => {
    const E = ai.get(c);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const V of E) V();
      ai.delete(c);
    }
  }, be.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? x(!0) : h = c.run() : r ? r(x.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function fn(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, $e(e))
    fn(e.value, t, n);
  else if (K(e))
    for (let s = 0; s < e.length; s++)
      fn(e[s], t, n);
  else if (cs(e) || Jn(e))
    e.forEach((s) => {
      fn(s, t, n);
    });
  else if ($i(e)) {
    for (const s in e)
      fn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && fn(e[s], t, n);
  }
  return e;
}
var w = {};
const Qn = [];
function bs(e) {
  Qn.push(e);
}
function _s() {
  Qn.pop();
}
let ur = !1;
function M(e, ...t) {
  if (ur) return;
  ur = !0, qt();
  const n = Qn.length ? Qn[Qn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = th();
  if (s)
    us(
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
          ({ vnode: i }) => `at <${Ji(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...nh(o)), console.warn(...i);
  }
  zt(), ur = !1;
}
function th() {
  let e = Qn[Qn.length - 1];
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
function nh(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...sh(n));
  }), t;
}
function sh({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Ji(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...oh(e.props), i] : [o + i];
}
function oh(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...fu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fu(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : $e(t) ? (t = fu(e, ae(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ae(t), n ? t : [`${e}=`, t]);
}
function gl(e, t) {
  w.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? M(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && M(`${t} is NaN - the duration expression might be incorrect.`));
}
const ih = {
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
}, Bi = {
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
function us(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Fn(o, t, n);
  }
}
function $t(e, t, n, s) {
  if (oe(e)) {
    const o = us(e, t, n, s);
    return o && Vi(o) && o.catch((i) => {
      Fn(i, t, n);
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
function Fn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || fe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = w.NODE_ENV !== "production" ? Bi[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let c = 0; c < d.length; c++)
          if (d[c](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      qt(), us(i, null, 10, [
        e,
        a,
        u
      ]), zt();
      return;
    }
  }
  rh(e, n, o, s, r);
}
function rh(e, t, n, s = !0, o = !1) {
  if (w.NODE_ENV !== "production") {
    const i = Bi[t];
    if (n && bs(n), M(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && _s(), s)
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
const Es = [];
let xn = null, vs = 0;
const pu = /* @__PURE__ */ Promise.resolve();
let ci = null;
const lh = 100;
function ko(e) {
  const t = ci || pu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ah(e) {
  let t = Yt + 1, n = ct.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ct[s], i = ho(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ji(e) {
  if (!(e.flags & 1)) {
    const t = ho(e), n = ct[ct.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ho(n) ? ct.push(e) : ct.splice(ah(t), 0, e), e.flags |= 1, hu();
  }
}
function hu() {
  ci || (ci = pu.then(mu));
}
function ks(e) {
  K(e) ? Es.push(...e) : xn && e.id === -1 ? xn.splice(vs + 1, 0, e) : e.flags & 1 || (Es.push(e), e.flags |= 1), hu();
}
function ga(e, t, n = Yt + 1) {
  for (w.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ct.length; n++) {
    const s = ct[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || w.NODE_ENV !== "production" && vl(t, s))
        continue;
      ct.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ui(e) {
  if (Es.length) {
    const t = [...new Set(Es)].sort(
      (n, s) => ho(n) - ho(s)
    );
    if (Es.length = 0, xn) {
      xn.push(...t);
      return;
    }
    for (xn = t, w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vs = 0; vs < xn.length; vs++) {
      const n = xn[vs];
      w.NODE_ENV !== "production" && vl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xn = null, vs = 0;
  }
}
const ho = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function mu(e) {
  w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = w.NODE_ENV !== "production" ? (n) => vl(e, n) : Oe;
  try {
    for (Yt = 0; Yt < ct.length; Yt++) {
      const n = ct[Yt];
      if (n && !(n.flags & 8)) {
        if (w.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), us(
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
    Yt = -1, ct.length = 0, ui(e), ci = null, (ct.length || Es.length) && mu(e);
  }
}
function vl(e, t) {
  const n = e.get(t) || 0;
  if (n > lh) {
    const s = t.i, o = s && Vs(s.type);
    return Fn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ft = !1;
const Go = /* @__PURE__ */ new Map();
w.NODE_ENV !== "production" && (So().__VUE_HMR_RUNTIME__ = {
  createRecord: dr(gu),
  rerender: dr(dh),
  reload: dr(fh)
});
const os = /* @__PURE__ */ new Map();
function ch(e) {
  const t = e.type.__hmrId;
  let n = os.get(t);
  n || (gu(t, e.type), n = os.get(t)), n.instances.add(e);
}
function uh(e) {
  os.get(e.type.__hmrId).instances.delete(e);
}
function gu(e, t) {
  return os.has(e) ? !1 : (os.set(e, {
    initialDef: di(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function di(e) {
  return xd(e) ? e.__vccOpts : e;
}
function dh(e, t) {
  const n = os.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, di(s.type).render = t), s.renderCache = [], Ft = !0, s.update(), Ft = !1;
  }));
}
function fh(e, t) {
  const n = os.get(e);
  if (!n) return;
  t = di(t), va(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = di(i.type);
    let l = Go.get(r);
    l || (r !== n.initialDef && va(r, t), Go.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? ji(() => {
      Ft = !0, i.parent.update(), Ft = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  ks(() => {
    Go.clear();
  });
}
function va(e, t) {
  de(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function dr(e) {
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
let Pt, Gs = [], kr = !1;
function Oo(e, ...t) {
  Pt ? Pt.emit(e, ...t) : kr || Gs.push({ event: e, args: t });
}
function yl(e, t) {
  var n, s;
  Pt = e, Pt ? (Pt.enabled = !0, Gs.forEach(({ event: o, args: i }) => Pt.emit(o, ...i)), Gs = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    yl(i, t);
  }), setTimeout(() => {
    Pt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, kr = !0, Gs = []);
  }, 3e3)) : (kr = !0, Gs = []);
}
function ph(e, t) {
  Oo("app:init", e, t, {
    Fragment: ce,
    Text: sn,
    Comment: Te,
    Static: Mn
  });
}
function hh(e) {
  Oo("app:unmount", e);
}
const Or = /* @__PURE__ */ bl(
  "component:added"
  /* COMPONENT_ADDED */
), vu = /* @__PURE__ */ bl(
  "component:updated"
  /* COMPONENT_UPDATED */
), mh = /* @__PURE__ */ bl(
  "component:removed"
  /* COMPONENT_REMOVED */
), gh = (e) => {
  Pt && typeof Pt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Pt.cleanupBuffer(e) && mh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bl(e) {
  return (t) => {
    Oo(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const vh = /* @__PURE__ */ yu(
  "perf:start"
  /* PERFORMANCE_START */
), yh = /* @__PURE__ */ yu(
  "perf:end"
  /* PERFORMANCE_END */
);
function yu(e) {
  return (t, n, s) => {
    Oo(e, t.appContext.app, t.uid, t, n, s);
  };
}
function bh(e, t, n) {
  Oo(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Re = null, Hi = null;
function mo(e) {
  const t = Re;
  return Re = e, Hi = e && e.type.__scopeId || null, t;
}
function _h(e) {
  Hi = e;
}
function Eh() {
  Hi = null;
}
const wh = (e) => Ge;
function Ge(e, t = Re, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Rr(-1);
    const i = mo(t);
    let r;
    try {
      r = e(...o);
    } finally {
      mo(i), s._d && Rr(1);
    }
    return w.NODE_ENV !== "production" && vu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function bu(e) {
  Ic(e) && M("Do not use built-in directive ids as custom directive id: " + e);
}
function wt(e, t) {
  if (Re === null)
    return w.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), e;
  const n = Do(Re), s = e.dirs || (e.dirs = []);
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
const _u = Symbol("_vte"), Eu = (e) => e.__isTeleport, Zn = (e) => e && (e.disabled || e.disabled === ""), ya = (e) => e && (e.defer || e.defer === ""), ba = (e) => typeof SVGElement < "u" && e instanceof SVGElement, _a = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Tr = (e, t) => {
  const n = e && e.to;
  if (re(n))
    if (t) {
      const s = t(n);
      return w.NODE_ENV !== "production" && !s && !Zn(e) && M(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return w.NODE_ENV !== "production" && M(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return w.NODE_ENV !== "production" && !n && !Zn(e) && M(`Invalid Teleport target: ${n}`), n;
}, wu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, u) {
    const {
      mc: d,
      pc: c,
      pbc: f,
      o: { insert: m, querySelector: _, createText: b, createComment: D }
    } = u, O = Zn(t.props);
    let { shapeFlag: y, children: h, dynamicChildren: x } = t;
    if (w.NODE_ENV !== "production" && Ft && (a = !1, x = null), e == null) {
      const E = t.el = w.NODE_ENV !== "production" ? D("teleport start") : b(""), V = t.anchor = w.NODE_ENV !== "production" ? D("teleport end") : b("");
      m(E, n, s), m(V, n, s);
      const P = (g, C) => {
        y & 16 && (o && o.isCE && (o.ce._teleportTarget = g), d(
          h,
          g,
          C,
          o,
          i,
          r,
          l,
          a
        ));
      }, N = () => {
        const g = t.target = Tr(t.props, _), C = Nu(g, t, b, m);
        g ? (r !== "svg" && ba(g) ? r = "svg" : r !== "mathml" && _a(g) && (r = "mathml"), O || (P(g, C), Yo(t, !1))) : w.NODE_ENV !== "production" && !O && M(
          "Invalid Teleport target on mount:",
          g,
          `(${typeof g})`
        );
      };
      O && (P(n, V), Yo(t, !0)), ya(t.props) ? (t.el.__isMounted = !1, Be(() => {
        N(), delete t.el.__isMounted;
      }, i)) : N();
    } else {
      if (ya(t.props) && e.el.__isMounted === !1) {
        Be(() => {
          wu.process(
            e,
            t,
            n,
            s,
            o,
            i,
            r,
            l,
            a,
            u
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const E = t.anchor = e.anchor, V = t.target = e.target, P = t.targetAnchor = e.targetAnchor, N = Zn(e.props), g = N ? n : V, C = N ? E : P;
      if (r === "svg" || ba(V) ? r = "svg" : (r === "mathml" || _a(V)) && (r = "mathml"), x ? (f(
        e.dynamicChildren,
        x,
        g,
        o,
        i,
        r,
        l
      ), oo(e, t, w.NODE_ENV === "production")) : a || c(
        e,
        t,
        g,
        C,
        o,
        i,
        r,
        l,
        !1
      ), O)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Fo(
          t,
          n,
          E,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const A = t.target = Tr(
          t.props,
          _
        );
        A ? Fo(
          t,
          A,
          null,
          u,
          0
        ) : w.NODE_ENV !== "production" && M(
          "Invalid Teleport target on update:",
          V,
          `(${typeof V})`
        );
      } else N && Fo(
        t,
        V,
        P,
        u,
        1
      );
      Yo(t, O);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: u,
      targetAnchor: d,
      target: c,
      props: f
    } = e;
    if (c && (o(u), o(d)), i && o(a), r & 16) {
      const m = i || !Zn(f);
      for (let _ = 0; _ < l.length; _++) {
        const b = l[_];
        s(
          b,
          t,
          n,
          m,
          !!b.dynamicChildren
        );
      }
    }
  },
  move: Fo,
  hydrate: Nh
};
function Fo(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: u, props: d } = e, c = i === 2;
  if (c && s(r, t, n), (!c || Zn(d)) && a & 16)
    for (let f = 0; f < u.length; f++)
      o(
        u[f],
        t,
        n,
        2
      );
  c && s(l, t, n);
}
function Nh(e, t, n, s, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: u, createText: d }
}, c) {
  const f = t.target = Tr(
    t.props,
    a
  );
  if (f) {
    const m = Zn(t.props), _ = f._lpa || f.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = c(
          r(e),
          t,
          l(e),
          n,
          s,
          o,
          i
        ), t.targetStart = _, t.targetAnchor = _ && r(_);
      else {
        t.anchor = r(e);
        let b = _;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor")
              t.targetStart = b;
            else if (b.data === "teleport anchor") {
              t.targetAnchor = b, f._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          b = r(b);
        }
        t.targetAnchor || Nu(f, t, d, u), c(
          _ && r(_),
          t,
          f,
          n,
          s,
          o,
          i
        );
      }
    Yo(t, m);
  }
  return t.anchor && r(t.anchor);
}
const ds = wu;
function Yo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Nu(e, t, n, s) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[_u] = i, e && (s(o, e), s(i, e)), i;
}
const Sn = Symbol("_leaveCb"), Bo = Symbol("_enterCb");
function _l() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ye(() => {
    e.isMounted = !0;
  }), Ki(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ot = [Function, Array], El = {
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
}, xu = (e) => {
  const t = e.subTree;
  return t.component ? xu(t.component) : t;
}, xh = {
  name: "BaseTransition",
  props: El,
  setup(e, { slots: t }) {
    const n = ot(), s = _l();
    return () => {
      const o = t.default && Ui(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Su(o), r = ae(e), { mode: l } = r;
      if (w.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && M(`invalid <transition> mode: ${l}`), s.isLeaving)
        return fr(i);
      const a = Ea(i);
      if (!a)
        return fr(i);
      let u = Os(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      a.type !== Te && vn(a, u);
      let d = n.subTree && Ea(n.subTree);
      if (d && d.type !== Te && !Rt(a, d) && xu(n).type !== Te) {
        let c = Os(
          d,
          r,
          s,
          n
        );
        if (vn(d, c), l === "out-in" && a.type !== Te)
          return s.isLeaving = !0, c.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, d = void 0;
          }, fr(i);
        l === "in-out" && a.type !== Te ? c.delayLeave = (f, m, _) => {
          const b = ku(
            s,
            d
          );
          b[String(d.key)] = d, f[Sn] = () => {
            m(), f[Sn] = void 0, delete u.delayedLeave, d = void 0;
          }, u.delayedLeave = () => {
            _(), delete u.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function Su(e) {
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
const Cu = xh;
function ku(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Os(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: d,
    onEnterCancelled: c,
    onBeforeLeave: f,
    onLeave: m,
    onAfterLeave: _,
    onLeaveCancelled: b,
    onBeforeAppear: D,
    onAppear: O,
    onAfterAppear: y,
    onAppearCancelled: h
  } = t, x = String(e.key), E = ku(n, e), V = (g, C) => {
    g && $t(
      g,
      s,
      9,
      C
    );
  }, P = (g, C) => {
    const A = C[1];
    V(g, C), K(g) ? g.every(($) => $.length <= 1) && A() : g.length <= 1 && A();
  }, N = {
    mode: r,
    persisted: l,
    beforeEnter(g) {
      let C = a;
      if (!n.isMounted)
        if (i)
          C = D || a;
        else
          return;
      g[Sn] && g[Sn](
        !0
        /* cancelled */
      );
      const A = E[x];
      A && Rt(e, A) && A.el[Sn] && A.el[Sn](), V(C, [g]);
    },
    enter(g) {
      let C = u, A = d, $ = c;
      if (!n.isMounted)
        if (i)
          C = O || u, A = y || d, $ = h || c;
        else
          return;
      let L = !1;
      const J = g[Bo] = (ee) => {
        L || (L = !0, ee ? V($, [g]) : V(A, [g]), N.delayedLeave && N.delayedLeave(), g[Bo] = void 0);
      };
      C ? P(C, [g, J]) : J();
    },
    leave(g, C) {
      const A = String(e.key);
      if (g[Bo] && g[Bo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return C();
      V(f, [g]);
      let $ = !1;
      const L = g[Sn] = (J) => {
        $ || ($ = !0, C(), J ? V(b, [g]) : V(_, [g]), g[Sn] = void 0, E[A] === e && delete E[A]);
      };
      E[A] = e, m ? P(m, [g, L]) : L();
    },
    clone(g) {
      const C = Os(
        g,
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
function fr(e) {
  if (Bs(e))
    return e = At(e), e.children = null, e;
}
function Ea(e) {
  if (!Bs(e))
    return Eu(e.type) && e.children ? Su(e.children) : e;
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
function Ui(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === ce ? (r.patchFlag & 128 && o++, s = s.concat(
      Ui(r.children, t, l)
    )) : (t || r.type !== Te) && s.push(l != null ? At(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wl(e, t) {
  return oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function Sh() {
  const e = ot();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (w.NODE_ENV !== "production" && M(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function Nl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ou = /* @__PURE__ */ new WeakSet();
function Ch(e) {
  const t = ot(), n = lu(null);
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
  const s = w.NODE_ENV !== "production" ? Li(n) : n;
  return w.NODE_ENV !== "production" && Ou.add(s), s;
}
function ws(e, t, n, s, o = !1) {
  if (K(e)) {
    e.forEach(
      (_, b) => ws(
        _,
        t && (K(t) ? t[b] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (In(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && ws(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Do(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e;
  if (w.NODE_ENV !== "production" && !l) {
    M(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, d = l.refs === fe ? l.refs = {} : l.refs, c = l.setupState, f = ae(c), m = c === fe ? () => !1 : (_) => w.NODE_ENV !== "production" && (ge(f, _) && !$e(f[_]) && M(
    `Template ref "${_}" used on a non-ref value. It will not work in the production build.`
  ), Ou.has(f[_])) ? !1 : ge(f, _);
  if (u != null && u !== a && (re(u) ? (d[u] = null, m(u) && (c[u] = null)) : $e(u) && (u.value = null)), oe(a))
    us(a, l, 12, [r, d]);
  else {
    const _ = re(a), b = $e(a);
    if (_ || b) {
      const D = () => {
        if (e.f) {
          const O = _ ? m(a) ? c[a] : d[a] : a.value;
          o ? K(O) && rl(O, i) : K(O) ? O.includes(i) || O.push(i) : _ ? (d[a] = [i], m(a) && (c[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else _ ? (d[a] = r, m(a) && (c[a] = r)) : b ? (a.value = r, e.k && (d[e.k] = r)) : w.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? (D.id = -1, Be(D, n)) : D();
    } else w.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let wa = !1;
const jn = () => {
  wa || (console.error("Hydration completed but contains mismatches."), wa = !0);
}, kh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Oh = (e) => e.namespaceURI.includes("MathML"), jo = (e) => {
  if (e.nodeType === 1) {
    if (kh(e)) return "svg";
    if (Oh(e)) return "mathml";
  }
}, Kn = (e) => e.nodeType === 8;
function Th(e) {
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
      createComment: u
    }
  } = e, d = (h, x) => {
    if (!x.hasChildNodes()) {
      w.NODE_ENV !== "production" && M(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, h, x), ui(), x._vnode = h;
      return;
    }
    c(x.firstChild, h, null, null, null), ui(), x._vnode = h;
  }, c = (h, x, E, V, P, N = !1) => {
    N = N || !!x.dynamicChildren;
    const g = Kn(h) && h.data === "[", C = () => b(
      h,
      x,
      E,
      V,
      P,
      g
    ), { type: A, ref: $, shapeFlag: L, patchFlag: J } = x;
    let ee = h.nodeType;
    x.el = h, w.NODE_ENV !== "production" && (ss(h, "__vnode", x, !0), ss(h, "__vueParentComponent", E, !0)), J === -2 && (N = !1, x.dynamicChildren = null);
    let Z = null;
    switch (A) {
      case sn:
        ee !== 3 ? x.children === "" ? (a(x.el = o(""), r(h), h), Z = h) : Z = C() : (h.data !== x.children && (w.NODE_ENV !== "production" && M(
          "Hydration text mismatch in",
          h.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            h.data
          )}
  - expected on client: ${JSON.stringify(x.children)}`
        ), jn(), h.data = x.children), Z = i(h));
        break;
      case Te:
        y(h) ? (Z = i(h), O(
          x.el = h.content.firstChild,
          h,
          E
        )) : ee !== 8 || g ? Z = C() : Z = i(h);
        break;
      case Mn:
        if (g && (h = i(h), ee = h.nodeType), ee === 1 || ee === 3) {
          Z = h;
          const se = !x.children.length;
          for (let Q = 0; Q < x.staticCount; Q++)
            se && (x.children += Z.nodeType === 1 ? Z.outerHTML : Z.data), Q === x.staticCount - 1 && (x.anchor = Z), Z = i(Z);
          return g ? i(Z) : Z;
        } else
          C();
        break;
      case ce:
        g ? Z = _(
          h,
          x,
          E,
          V,
          P,
          N
        ) : Z = C();
        break;
      default:
        if (L & 1)
          (ee !== 1 || x.type.toLowerCase() !== h.tagName.toLowerCase()) && !y(h) ? Z = C() : Z = f(
            h,
            x,
            E,
            V,
            P,
            N
          );
        else if (L & 6) {
          x.slotScopeIds = P;
          const se = r(h);
          if (g ? Z = D(h) : Kn(h) && h.data === "teleport start" ? Z = D(h, h.data, "teleport end") : Z = i(h), t(
            x,
            se,
            null,
            E,
            V,
            jo(se),
            N
          ), In(x) && !x.type.__asyncResolved) {
            let Q;
            g ? (Q = pe(ce), Q.anchor = Z ? Z.previousSibling : se.lastChild) : Q = h.nodeType === 3 ? Le("") : pe("div"), Q.el = h, x.component.subTree = Q;
          }
        } else L & 64 ? ee !== 8 ? Z = C() : Z = x.type.hydrate(
          h,
          x,
          E,
          V,
          P,
          N,
          e,
          m
        ) : L & 128 ? Z = x.type.hydrate(
          h,
          x,
          E,
          V,
          jo(r(h)),
          P,
          N,
          e,
          c
        ) : w.NODE_ENV !== "production" && M("Invalid HostVNode type:", A, `(${typeof A})`);
    }
    return $ != null && ws($, null, V, x), Z;
  }, f = (h, x, E, V, P, N) => {
    N = N || !!x.dynamicChildren;
    const { type: g, props: C, patchFlag: A, shapeFlag: $, dirs: L, transition: J } = x, ee = g === "input" || g === "option";
    if (w.NODE_ENV !== "production" || ee || A !== -1) {
      L && Xt(x, null, E, "created");
      let Z = !1;
      if (y(h)) {
        Z = ed(
          null,
          // no need check parentSuspense in hydration
          J
        ) && E && E.vnode.props && E.vnode.props.appear;
        const Q = h.content.firstChild;
        if (Z) {
          const Ee = Q.getAttribute("class");
          Ee && (Q.$cls = Ee), J.beforeEnter(Q);
        }
        O(Q, h, E), x.el = h = Q;
      }
      if ($ & 16 && // skip if element has innerHTML / textContent
      !(C && (C.innerHTML || C.textContent))) {
        let Q = m(
          h.firstChild,
          x,
          h,
          E,
          V,
          P,
          N
        ), Ee = !1;
        for (; Q; ) {
          Ys(
            h,
            1
            /* CHILDREN */
          ) || (w.NODE_ENV !== "production" && !Ee && (M(
            "Hydration children mismatch on",
            h,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Ee = !0), jn());
          const ft = Q;
          Q = Q.nextSibling, l(ft);
        }
      } else if ($ & 8) {
        let Q = x.children;
        Q[0] === `
` && (h.tagName === "PRE" || h.tagName === "TEXTAREA") && (Q = Q.slice(1)), h.textContent !== Q && (Ys(
          h,
          0
          /* TEXT */
        ) || (w.NODE_ENV !== "production" && M(
          "Hydration text content mismatch on",
          h,
          `
  - rendered on server: ${h.textContent}
  - expected on client: ${x.children}`
        ), jn()), h.textContent = x.children);
      }
      if (C) {
        if (w.NODE_ENV !== "production" || ee || !N || A & 48) {
          const Q = h.tagName.includes("-");
          for (const Ee in C)
            w.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(L && L.some((ft) => ft.dir.created)) && Dh(h, Ee, C[Ee], x, E) && jn(), (ee && (Ee.endsWith("value") || Ee === "indeterminate") || gn(Ee) && !An(Ee) || // force hydrate v-bind with .prop modifiers
            Ee[0] === "." || Q) && s(h, Ee, null, C[Ee], void 0, E);
        } else if (C.onClick)
          s(
            h,
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
      (se = C && C.onVnodeBeforeMount) && gt(se, E, x), L && Xt(x, null, E, "beforeMount"), ((se = C && C.onVnodeMounted) || L || Z) && ud(() => {
        se && gt(se, E, x), Z && J.enter(h), L && Xt(x, null, E, "mounted");
      }, V);
    }
    return h.nextSibling;
  }, m = (h, x, E, V, P, N, g) => {
    g = g || !!x.dynamicChildren;
    const C = x.children, A = C.length;
    let $ = !1;
    for (let L = 0; L < A; L++) {
      const J = g ? C[L] : C[L] = ut(C[L]), ee = J.type === sn;
      h ? (ee && !g && L + 1 < A && ut(C[L + 1]).type === sn && (a(
        o(
          h.data.slice(J.children.length)
        ),
        E,
        i(h)
      ), h.data = J.children), h = c(
        h,
        J,
        V,
        P,
        N,
        g
      )) : ee && !J.children ? a(J.el = o(""), E) : (Ys(
        E,
        1
        /* CHILDREN */
      ) || (w.NODE_ENV !== "production" && !$ && (M(
        "Hydration children mismatch on",
        E,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), $ = !0), jn()), n(
        null,
        J,
        E,
        null,
        V,
        P,
        jo(E),
        N
      ));
    }
    return h;
  }, _ = (h, x, E, V, P, N) => {
    const { slotScopeIds: g } = x;
    g && (P = P ? P.concat(g) : g);
    const C = r(h), A = m(
      i(h),
      x,
      C,
      E,
      V,
      P,
      N
    );
    return A && Kn(A) && A.data === "]" ? i(x.anchor = A) : (jn(), a(x.anchor = u("]"), C, A), A);
  }, b = (h, x, E, V, P, N) => {
    if (Ys(
      h.parentElement,
      1
      /* CHILDREN */
    ) || (w.NODE_ENV !== "production" && M(
      `Hydration node mismatch:
- rendered on server:`,
      h,
      h.nodeType === 3 ? "(text)" : Kn(h) && h.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      x.type
    ), jn()), x.el = null, N) {
      const A = D(h);
      for (; ; ) {
        const $ = i(h);
        if ($ && $ !== A)
          l($);
        else
          break;
      }
    }
    const g = i(h), C = r(h);
    return l(h), n(
      null,
      x,
      C,
      g,
      E,
      V,
      jo(C),
      P
    ), E && (E.vnode.el = x.el, Yi(E, x.el)), g;
  }, D = (h, x = "[", E = "]") => {
    let V = 0;
    for (; h; )
      if (h = i(h), h && Kn(h) && (h.data === x && V++, h.data === E)) {
        if (V === 0)
          return i(h);
        V--;
      }
    return h;
  }, O = (h, x, E) => {
    const V = x.parentNode;
    V && V.replaceChild(h, x);
    let P = E;
    for (; P; )
      P.vnode.el === x && (P.vnode.el = P.subTree.el = h), P = P.parent;
  }, y = (h) => h.nodeType === 1 && h.tagName === "TEMPLATE";
  return [d, c];
}
function Dh(e, t, n, s, o) {
  let i, r, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Ie(n), Vh(Na(l || ""), Na(a)) || (i = 2, r = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = re(n) ? n : op(dt(n));
    const u = xa(l), d = xa(a);
    if (s.dirs)
      for (const { dir: c, value: f } of s.dirs)
        c.name === "show" && !f && d.set("display", "none");
    o && Tu(o, s, d), $h(u, d) || (i = 3, r = "style");
  } else (e instanceof SVGElement && pp(t) || e instanceof HTMLElement && (fa(t) || fp(t))) && (fa(t) ? (l = e.hasAttribute(t), a = cl(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = hp(n) ? String(n) : !1), l !== a && (i = 4, r = t));
  if (i != null && !Ys(e, i)) {
    const u = (f) => f === !1 ? "(not rendered)" : `${r}="${f}"`, d = `Hydration ${Du[i]} mismatch on`, c = `
  - rendered on server: ${u(l)}
  - expected on client: ${u(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return M(d, e, c), !0;
  }
  return !1;
}
function Na(e) {
  return new Set(e.trim().split(/\s+/));
}
function Vh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function xa(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [s, o] = n.split(":");
    s = s.trim(), o = o && o.trim(), s && o && t.set(s, o);
  }
  return t;
}
function $h(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function Tu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ce && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const i in o) {
      const r = Hc(o[i]);
      n.set(`--${gp(i)}`, r);
    }
  }
  t === s && e.parent && Tu(e.parent, e.vnode, n);
}
const Sa = "data-allow-mismatch", Du = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Ys(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Sa); )
      e = e.parentElement;
  const n = e && e.getAttribute(Sa);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(Du[t]);
  }
}
const Ah = So().requestIdleCallback || ((e) => setTimeout(e, 1)), Ih = So().cancelIdleCallback || ((e) => clearTimeout(e)), Mh = (e = 1e4) => (t) => {
  const n = Ah(t, { timeout: e });
  return () => Ih(n);
};
function Ph(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: i, innerWidth: r } = window;
  return (t > 0 && t < i || s > 0 && s < i) && (n > 0 && n < r || o > 0 && o < r);
}
const Rh = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const i of o)
      if (i.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (Ph(o))
        return t(), s.disconnect(), !1;
      s.observe(o);
    }
  }), () => s.disconnect();
}, Lh = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Fh = (e = []) => (t, n) => {
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
function Bh(e, t) {
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
const In = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function jh(e) {
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
  let u = null, d, c = 0;
  const f = () => (c++, u = null, m()), m = () => {
    let _;
    return u || (_ = u = t().catch((b) => {
      if (b = b instanceof Error ? b : new Error(String(b)), a)
        return new Promise((D, O) => {
          a(b, () => D(f()), () => O(b), c + 1);
        });
      throw b;
    }).then((b) => {
      if (_ !== u && u)
        return u;
      if (w.NODE_ENV !== "production" && !b && M(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), b && (b.__esModule || b[Symbol.toStringTag] === "Module") && (b = b.default), w.NODE_ENV !== "production" && b && !me(b) && !oe(b))
        throw new Error(`Invalid async component load result: ${b}`);
      return d = b, b;
    }));
  };
  return /* @__PURE__ */ wl({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(_, b, D) {
      let O = !1;
      (b.bu || (b.bu = [])).push(() => O = !0);
      const y = () => {
        if (O) {
          w.NODE_ENV !== "production" && M(
            `Skipping lazy hydration for component '${Vs(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        D();
      }, h = i ? () => {
        const x = i(
          y,
          (E) => Bh(_, E)
        );
        x && (b.bum || (b.bum = [])).push(x);
      } : y;
      d ? h() : m().then(() => !b.isUnmounted && h());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const _ = Ue;
      if (Nl(_), d)
        return () => pr(d, _);
      const b = (h) => {
        u = null, Fn(
          h,
          _,
          13,
          !s
        );
      };
      if (l && _.suspense || Ds)
        return m().then((h) => () => pr(h, _)).catch((h) => (b(h), () => s ? pe(s, {
          error: h
        }) : null));
      const D = q(!1), O = q(), y = q(!!o);
      return o && setTimeout(() => {
        y.value = !1;
      }, o), r != null && setTimeout(() => {
        if (!D.value && !O.value) {
          const h = new Error(
            `Async component timed out after ${r}ms.`
          );
          b(h), O.value = h;
        }
      }, r), m().then(() => {
        D.value = !0, _.parent && Bs(_.parent.vnode) && _.parent.update();
      }).catch((h) => {
        b(h), O.value = h;
      }), () => {
        if (D.value && d)
          return pr(d, _);
        if (O.value && s)
          return pe(s, {
            error: O.value
          });
        if (n && !y.value)
          return pe(n);
      };
    }
  });
}
function pr(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, r = pe(e, s, o);
  return r.ref = n, r.ce = i, delete t.vnode.ce, r;
}
const Bs = (e) => e.type.__isKeepAlive, Hh = {
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
        const y = t.default && t.default();
        return y && y.length === 1 ? y[0] : y;
      };
    const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    let r = null;
    w.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: u,
        um: d,
        o: { createElement: c }
      }
    } = s, f = c("div");
    s.activate = (y, h, x, E, V) => {
      const P = y.component;
      u(y, h, x, 0, l), a(
        P.vnode,
        y,
        h,
        x,
        P,
        l,
        E,
        y.slotScopeIds,
        V
      ), Be(() => {
        P.isDeactivated = !1, P.a && On(P.a);
        const N = y.props && y.props.onVnodeMounted;
        N && gt(N, P.parent, y);
      }, l), w.NODE_ENV !== "production" && Or(P);
    }, s.deactivate = (y) => {
      const h = y.component;
      mi(h.m), mi(h.a), u(y, f, null, 1, l), Be(() => {
        h.da && On(h.da);
        const x = y.props && y.props.onVnodeUnmounted;
        x && gt(x, h.parent, y), h.isDeactivated = !0;
      }, l), w.NODE_ENV !== "production" && Or(h), w.NODE_ENV !== "production" && (h.__keepAliveStorageContainer = f);
    };
    function m(y) {
      hr(y), d(y, n, l, !0);
    }
    function _(y) {
      o.forEach((h, x) => {
        const E = Vs(h.type);
        E && !y(E) && b(x);
      });
    }
    function b(y) {
      const h = o.get(y);
      h && (!r || !Rt(h, r)) ? m(h) : r && hr(r), o.delete(y), i.delete(y);
    }
    nn(
      () => [e.include, e.exclude],
      ([y, h]) => {
        y && _((x) => Js(y, x)), h && _((x) => !Js(h, x));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let D = null;
    const O = () => {
      D != null && (vi(n.subTree.type) ? Be(() => {
        o.set(D, Ho(n.subTree));
      }, n.subTree.suspense) : o.set(D, Ho(n.subTree)));
    };
    return Ye(O), zi(O), Ki(() => {
      o.forEach((y) => {
        const { subTree: h, suspense: x } = n, E = Ho(h);
        if (y.type === E.type && y.key === E.key) {
          hr(E);
          const V = E.component.da;
          V && Be(V, x);
          return;
        }
        m(y);
      });
    }), () => {
      if (D = null, !t.default)
        return r = null;
      const y = t.default(), h = y[0];
      if (y.length > 1)
        return w.NODE_ENV !== "production" && M("KeepAlive should contain exactly one component child."), r = null, y;
      if (!rn(h) || !(h.shapeFlag & 4) && !(h.shapeFlag & 128))
        return r = null, h;
      let x = Ho(h);
      if (x.type === Te)
        return r = null, x;
      const E = x.type, V = Vs(
        In(x) ? x.type.__asyncResolved || {} : E
      ), { include: P, exclude: N, max: g } = e;
      if (P && (!V || !Js(P, V)) || N && V && Js(N, V))
        return x.shapeFlag &= -257, r = x, h;
      const C = x.key == null ? E : x.key, A = o.get(C);
      return x.el && (x = At(x), h.shapeFlag & 128 && (h.ssContent = x)), D = C, A ? (x.el = A.el, x.component = A.component, x.transition && vn(x, x.transition), x.shapeFlag |= 512, i.delete(C), i.add(C)) : (i.add(C), g && i.size > parseInt(g, 10) && b(i.values().next().value)), x.shapeFlag |= 256, r = x, vi(h.type) ? h : x;
    };
  }
}, Uh = Hh;
function Js(e, t) {
  return K(e) ? e.some((n) => Js(n, t)) : re(e) ? e.split(",").includes(t) : Wf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Vu(e, t) {
  Au(e, "a", t);
}
function $u(e, t) {
  Au(e, "da", t);
}
function Au(e, t, n = Ue) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (qi(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Bs(o.parent.vnode) && qh(s, t, n, o), o = o.parent;
  }
}
function qh(e, t, n, s) {
  const o = qi(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  It(() => {
    rl(s[t], o);
  }, n);
}
function hr(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Ho(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function qi(e, t, n = Ue, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      qt();
      const l = rs(n), a = $t(t, n, e, r);
      return l(), zt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (w.NODE_ENV !== "production") {
    const o = Zt(Bi[e].replace(/ hook$/, ""));
    M(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const yn = (e) => (t, n = Ue) => {
  (!Ds || e === "sp") && qi(e, (...s) => t(...s), n);
}, Iu = yn("bm"), Ye = yn("m"), xl = yn(
  "bu"
), zi = yn("u"), Ki = yn(
  "bum"
), It = yn("um"), Mu = yn(
  "sp"
), Pu = yn("rtg"), Ru = yn("rtc");
function Lu(e, t = Ue) {
  qi("ec", e, t);
}
const fi = "components", zh = "directives";
function Kh(e, t) {
  return kl(fi, e, !0, t) || e;
}
const Sl = Symbol.for("v-ndc");
function Cl(e) {
  return re(e) ? kl(fi, e, !1) || e : e || Sl;
}
function Wh(e) {
  return kl(zh, e);
}
function kl(e, t, n = !0, s = !1) {
  const o = Re || Ue;
  if (o) {
    const i = o.type;
    if (e === fi) {
      const l = Vs(
        i,
        !1
      );
      if (l && (l === t || l === Se(t) || l === on(Se(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ca(o[e] || i[e], t) || // global registration
      Ca(o.appContext[e], t)
    );
    if (!r && s)
      return i;
    if (w.NODE_ENV !== "production" && n && !r) {
      const l = e === fi ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      M(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else w.NODE_ENV !== "production" && M(
    `resolve${on(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Ca(e, t) {
  return e && (e[t] || e[Se(t)] || e[on(Se(t))]);
}
function Ve(e, t, n, s) {
  let o;
  const i = n && n[s], r = K(e);
  if (r || re(e)) {
    const l = r && hn(e);
    let a = !1, u = !1;
    l && (a = !tt(e), u = Kt(e), e = Pi(e)), o = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++)
      o[d] = t(
        a ? u ? li(We(e[d])) : We(e[d]) : e[d],
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
      for (let a = 0, u = l.length; a < u; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, i && i[a]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
function Gh(e, t) {
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
function Bn(e, t, n = {}, s, o) {
  if (Re.ce || Re.parent && In(Re.parent) && Re.parent.ce)
    return t !== "default" && (n.name = t), k(), _t(
      ce,
      null,
      [pe("slot", n, s && s())],
      64
    );
  let i = e[t];
  w.NODE_ENV !== "production" && i && i.length > 1 && (M(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), k();
  const r = i && Ol(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
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
function Ol(e) {
  return e.some((t) => rn(t) ? !(t.type === Te || t.type === ce && !Ol(t.children)) : !0) ? e : null;
}
function Yh(e, t) {
  const n = {};
  if (w.NODE_ENV !== "production" && !me(e))
    return M("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Zt(s)] = e[s];
  return n;
}
const Dr = (e) => e ? bd(e) ? Do(e) : Dr(e.parent) : null, es = (
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
    $parent: (e) => Dr(e.parent),
    $root: (e) => Dr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Dl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ji(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ko.bind(e.proxy)),
    $watch: (e) => Fm.bind(e)
  })
), Tl = (e) => e === "_" || e === "$", mr = (e, t) => e !== fe && !e.__isScriptSetup && ge(e, t), no = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (w.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
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
        if (mr(s, t))
          return r[t] = 1, s[t];
        if (o !== fe && ge(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && ge(u, t)
        )
          return r[t] = 3, i[t];
        if (n !== fe && ge(n, t))
          return r[t] = 4, n[t];
        Vr && (r[t] = 0);
      }
    }
    const d = es[t];
    let c, f;
    if (d)
      return t === "$attrs" ? (je(e.attrs, "get", ""), w.NODE_ENV !== "production" && gi()) : w.NODE_ENV !== "production" && t === "$slots" && je(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== fe && ge(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      f = a.config.globalProperties, ge(f, t)
    )
      return f[t];
    w.NODE_ENV !== "production" && Re && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== fe && Tl(t[0]) && ge(o, t) ? M(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Re && M(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return mr(o, t) ? (o[t] = n, !0) : w.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (M(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== fe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (w.NODE_ENV !== "production" && M(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w.NODE_ENV !== "production" && M(
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
    return !!n[r] || e !== fe && ge(e, r) || mr(t, r) || (l = i[0]) && ge(l, r) || ge(s, r) || ge(es, r) || ge(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
w.NODE_ENV !== "production" && (no.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Jh = /* @__PURE__ */ de({}, no, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return no.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Zf(t);
    return w.NODE_ENV !== "production" && !n && no.has(e, t) && M(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function Xh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(es).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => es[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Oe
    });
  }), t;
}
function Qh(e) {
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
function Zh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ae(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Tl(s[0])) {
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
const fs = (e) => M(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function em() {
  return w.NODE_ENV !== "production" && fs("defineProps"), null;
}
function tm() {
  return w.NODE_ENV !== "production" && fs("defineEmits"), null;
}
function nm(e) {
  w.NODE_ENV !== "production" && fs("defineExpose");
}
function sm(e) {
  w.NODE_ENV !== "production" && fs("defineOptions");
}
function om() {
  return w.NODE_ENV !== "production" && fs("defineSlots"), null;
}
function im() {
  w.NODE_ENV !== "production" && fs("defineModel");
}
function rm(e, t) {
  return w.NODE_ENV !== "production" && fs("withDefaults"), null;
}
function lm() {
  return Fu("useSlots").slots;
}
function am() {
  return Fu("useAttrs").attrs;
}
function Fu(e) {
  const t = ot();
  return w.NODE_ENV !== "production" && !t && M(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Nd(t));
}
function go(e) {
  return K(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function cm(e, t) {
  const n = go(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? K(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : w.NODE_ENV !== "production" && M(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function um(e, t) {
  return !e || !t ? e || t : K(e) && K(t) ? e.concat(t) : de({}, go(e), go(t));
}
function dm(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function fm(e) {
  const t = ot();
  w.NODE_ENV !== "production" && !t && M(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Br(), Vi(n) && (n = n.catch((s) => {
    throw rs(t), s;
  })), [n, () => rs(t)];
}
function pm() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? M(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Vr = !0;
function hm(e) {
  const t = Dl(e), n = e.proxy, s = e.ctx;
  Vr = !1, t.beforeCreate && ka(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: d,
    beforeMount: c,
    mounted: f,
    beforeUpdate: m,
    updated: _,
    activated: b,
    deactivated: D,
    beforeDestroy: O,
    beforeUnmount: y,
    destroyed: h,
    unmounted: x,
    render: E,
    renderTracked: V,
    renderTriggered: P,
    errorCaptured: N,
    serverPrefetch: g,
    // public API
    expose: C,
    inheritAttrs: A,
    // assets
    components: $,
    directives: L,
    filters: J
  } = t, ee = w.NODE_ENV !== "production" ? pm() : null;
  if (w.NODE_ENV !== "production") {
    const [se] = e.propsOptions;
    if (se)
      for (const Q in se)
        ee("Props", Q);
  }
  if (u && mm(u, s, ee), r)
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
    if (w.NODE_ENV !== "production" && Vi(se) && M(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(se))
      w.NODE_ENV !== "production" && M("data() should return an object.");
    else if (e.data = Ss(se), w.NODE_ENV !== "production")
      for (const Q in se)
        ee("Data", Q), Tl(Q[0]) || Object.defineProperty(s, Q, {
          configurable: !0,
          enumerable: !0,
          get: () => se[Q],
          set: Oe
        });
  }
  if (Vr = !0, i)
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
      Bu(l[se], s, n, se);
  if (a) {
    const se = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(se).forEach((Q) => {
      Hu(Q, se[Q]);
    });
  }
  d && ka(d, e, "c");
  function Z(se, Q) {
    K(Q) ? Q.forEach((Ee) => se(Ee.bind(n))) : Q && se(Q.bind(n));
  }
  if (Z(Iu, c), Z(Ye, f), Z(xl, m), Z(zi, _), Z(Vu, b), Z($u, D), Z(Lu, N), Z(Ru, V), Z(Pu, P), Z(Ki, y), Z(It, x), Z(Mu, g), K(C))
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
  E && e.render === Oe && (e.render = E), A != null && (e.inheritAttrs = A), $ && (e.components = $), L && (e.directives = L), g && Nl(e);
}
function mm(e, t, n = Oe) {
  K(e) && (e = $r(e));
  for (const s in e) {
    const o = e[s];
    let i;
    me(o) ? "default" in o ? i = so(
      o.from || s,
      o.default,
      !0
    ) : i = so(o.from || s) : i = so(o), $e(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i, w.NODE_ENV !== "production" && n("Inject", s);
  }
}
function ka(e, t, n) {
  $t(
    K(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Bu(e, t, n, s) {
  let o = s.includes(".") ? id(n, s) : () => n[s];
  if (re(e)) {
    const i = t[e];
    oe(i) ? nn(o, i) : w.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e}"`, i);
  } else if (oe(e))
    nn(o, e.bind(n));
  else if (me(e))
    if (K(e))
      e.forEach((i) => Bu(i, t, n, s));
    else {
      const i = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(i) ? nn(o, i, e) : w.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else w.NODE_ENV !== "production" && M(`Invalid watch option: "${s}"`, e);
}
function Dl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (u) => pi(a, u, r, !0)
  ), pi(a, t, r)), me(t) && i.set(t, a), a;
}
function pi(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && pi(e, i, n, !0), o && o.forEach(
    (r) => pi(e, r, n, !0)
  );
  for (const r in t)
    if (s && r === "expose")
      w.NODE_ENV !== "production" && M(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = gm[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const gm = {
  data: Oa,
  props: Ta,
  emits: Ta,
  // objects
  methods: Xs,
  computed: Xs,
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
  components: Xs,
  directives: Xs,
  // watch
  watch: ym,
  // provide / inject
  provide: Oa,
  inject: vm
};
function Oa(e, t) {
  return t ? e ? function() {
    return de(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vm(e, t) {
  return Xs($r(e), $r(t));
}
function $r(e) {
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
function Xs(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ta(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    go(e),
    go(t ?? {})
  ) : t;
}
function ym(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = lt(e[s], t[s]);
  return n;
}
function ju() {
  return {
    app: null,
    config: {
      isNativeTag: Ws,
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
let bm = 0;
function _m(e, t) {
  return function(s, o = null) {
    oe(s) || (s = de({}, s)), o != null && !me(o) && (w.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), o = null);
    const i = ju(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: bm++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: qr,
      get config() {
        return i.config;
      },
      set config(d) {
        w.NODE_ENV !== "production" && M(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...c) {
        return r.has(d) ? w.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : d && oe(d.install) ? (r.add(d), d.install(u, ...c)) : oe(d) ? (r.add(d), d(u, ...c)) : w.NODE_ENV !== "production" && M(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(d) {
        return i.mixins.includes(d) ? w.NODE_ENV !== "production" && M(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), u;
      },
      component(d, c) {
        return w.NODE_ENV !== "production" && jr(d, i.config), c ? (w.NODE_ENV !== "production" && i.components[d] && M(`Component "${d}" has already been registered in target app.`), i.components[d] = c, u) : i.components[d];
      },
      directive(d, c) {
        return w.NODE_ENV !== "production" && bu(d), c ? (w.NODE_ENV !== "production" && i.directives[d] && M(`Directive "${d}" has already been registered in target app.`), i.directives[d] = c, u) : i.directives[d];
      },
      mount(d, c, f) {
        if (a)
          w.NODE_ENV !== "production" && M(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          w.NODE_ENV !== "production" && d.__vue_app__ && M(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = u._ceVNode || pe(s, o);
          return m.appContext = i, f === !0 ? f = "svg" : f === !1 && (f = void 0), w.NODE_ENV !== "production" && (i.reload = () => {
            const _ = At(m);
            _.el = null, e(_, d, f);
          }), c && t ? t(m, d) : e(m, d, f), a = !0, u._container = d, d.__vue_app__ = u, w.NODE_ENV !== "production" && (u._instance = m.component, ph(u, qr)), Do(m.component);
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
          u._instance,
          16
        ), e(null, u._container), w.NODE_ENV !== "production" && (u._instance = null, hh(u)), delete u._container.__vue_app__) : w.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return w.NODE_ENV !== "production" && d in i.provides && (ge(i.provides, d) ? M(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : M(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[d] = c, u;
      },
      runWithContext(d) {
        const c = ts;
        ts = u;
        try {
          return d();
        } finally {
          ts = c;
        }
      }
    };
    return u;
  };
}
let ts = null;
function Hu(e, t) {
  if (!Ue)
    w.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = Ue.provides;
    const s = Ue.parent && Ue.parent.provides;
    s === n && (n = Ue.provides = Object.create(s)), n[e] = t;
  }
}
function so(e, t, n = !1) {
  const s = ot();
  if (s || ts) {
    let o = ts ? ts._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    w.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else w.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
function Em() {
  return !!(ot() || ts);
}
const Uu = {}, qu = () => Object.create(Uu), zu = (e) => Object.getPrototypeOf(e) === Uu;
function wm(e, t, n, s = !1) {
  const o = {}, i = qu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ku(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  w.NODE_ENV !== "production" && Gu(t || {}, o, e), n ? e.props = s ? o : iu(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Nm(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function xm(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = ae(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(w.NODE_ENV !== "production" && Nm(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        let f = d[c];
        if (Wi(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (a)
          if (ge(i, f))
            m !== i[f] && (i[f] = m, u = !0);
          else {
            const _ = Se(f);
            o[_] = Ar(
              a,
              l,
              _,
              m,
              e,
              !1
            );
          }
        else
          m !== i[f] && (i[f] = m, u = !0);
      }
    }
  } else {
    Ku(e, t, o, i) && (u = !0);
    let d;
    for (const c in l)
      (!t || // for camelCase
      !ge(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ze(c)) === c || !ge(t, d))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[c] = Ar(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete o[c]);
    if (i !== l)
      for (const c in i)
        (!t || !ge(t, c)) && (delete i[c], u = !0);
  }
  u && en(e.attrs, "set", ""), w.NODE_ENV !== "production" && Gu(t || {}, o, e);
}
function Ku(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (An(a))
        continue;
      const u = t[a];
      let d;
      o && ge(o, d = Se(a)) ? !i || !i.includes(d) ? n[d] = u : (l || (l = {}))[d] = u : Wi(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (i) {
    const a = ae(n), u = l || fe;
    for (let d = 0; d < i.length; d++) {
      const c = i[d];
      n[c] = Ar(
        o,
        a,
        c,
        u[c],
        e,
        !ge(u, c)
      );
    }
  }
  return r;
}
function Ar(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = ge(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && oe(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const d = rs(o);
          s = u[n] = a.call(
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
const Sm = /* @__PURE__ */ new WeakMap();
function Wu(e, t, n = !1) {
  const s = n ? Sm : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!oe(e)) {
    const d = (c) => {
      a = !0;
      const [f, m] = Wu(c, t, !0);
      de(r, f), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return me(e) && s.set(e, ys), ys;
  if (K(i))
    for (let d = 0; d < i.length; d++) {
      w.NODE_ENV !== "production" && !re(i[d]) && M("props must be strings when using array syntax.", i[d]);
      const c = Se(i[d]);
      Da(c) && (r[c] = fe);
    }
  else if (i) {
    w.NODE_ENV !== "production" && !me(i) && M("invalid props options", i);
    for (const d in i) {
      const c = Se(d);
      if (Da(c)) {
        const f = i[d], m = r[c] = K(f) || oe(f) ? { type: f } : de({}, f), _ = m.type;
        let b = !1, D = !0;
        if (K(_))
          for (let O = 0; O < _.length; ++O) {
            const y = _[O], h = oe(y) && y.name;
            if (h === "Boolean") {
              b = !0;
              break;
            } else h === "String" && (D = !1);
          }
        else
          b = oe(_) && _.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = b, m[
          1
          /* shouldCastTrue */
        ] = D, (b || ge(m, "default")) && l.push(c);
      }
    }
  }
  const u = [r, l];
  return me(e) && s.set(e, u), u;
}
function Da(e) {
  return e[0] !== "$" && !An(e) ? !0 : (w.NODE_ENV !== "production" && M(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Cm(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Gu(e, t, n) {
  const s = ae(t), o = n.propsOptions[0], i = Object.keys(e).map((r) => Se(r));
  for (const r in o) {
    let l = o[r];
    l != null && km(
      r,
      s[r],
      l,
      w.NODE_ENV !== "production" ? Lt(s) : s,
      !i.includes(r)
    );
  }
}
function km(e, t, n, s, o) {
  const { type: i, required: r, validator: l, skipCheck: a } = n;
  if (r && o) {
    M('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !a) {
      let u = !1;
      const d = K(i) ? i : [i], c = [];
      for (let f = 0; f < d.length && !u; f++) {
        const { valid: m, expectedType: _ } = Tm(t, d[f]);
        c.push(_ || ""), u = m;
      }
      if (!u) {
        M(Dm(e, t, c));
        return;
      }
    }
    l && !l(t, s) && M('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Om = /* @__PURE__ */ qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Tm(e, t) {
  let n;
  const s = Cm(t);
  if (s === "null")
    n = e === null;
  else if (Om(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = me(e) : s === "Array" ? n = K(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Dm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(on).join(" | ")}`;
  const o = n[0], i = ll(t), r = Va(t, o), l = Va(t, i);
  return n.length === 1 && $a(o) && !Vm(o, i) && (s += ` with value ${r}`), s += `, got ${i} `, $a(i) && (s += `with value ${l}.`), s;
}
function Va(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $a(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Vm(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Vl = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", $l = (e) => K(e) ? e.map(ut) : [ut(e)], $m = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ge((...o) => (w.NODE_ENV !== "production" && Ue && !(n === null && Re) && !(n && n.root !== Ue.root) && M(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), $l(t(...o))), n);
  return s._c = !1, s;
}, Yu = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Vl(o)) continue;
    const i = e[o];
    if (oe(i))
      t[o] = $m(o, i, s);
    else if (i != null) {
      w.NODE_ENV !== "production" && M(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = $l(i);
      t[o] = () => r;
    }
  }
}, Ju = (e, t) => {
  w.NODE_ENV !== "production" && !Bs(e.vnode) && M(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = $l(t);
  e.slots.default = () => n;
}, Ir = (e, t, n) => {
  for (const s in t)
    (n || !Vl(s)) && (e[s] = t[s]);
}, Am = (e, t, n) => {
  const s = e.slots = qu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && ss(s, "__", o, !0);
    const i = t._;
    i ? (Ir(s, t, n), n && ss(s, "_", i, !0)) : Yu(t, s);
  } else t && Ju(e, t);
}, Im = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = fe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? w.NODE_ENV !== "production" && Ft ? (Ir(o, t, n), en(e, "set", "$slots")) : n && l === 1 ? i = !1 : Ir(o, t, n) : (i = !t.$stable, Yu(t, o)), r = t;
  } else t && (Ju(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Vl(l) && r[l] == null && delete o[l];
};
let qs, Tn;
function an(e, t) {
  e.appContext.config.performance && hi() && Tn.mark(`vue-${t}-${e.uid}`), w.NODE_ENV !== "production" && vh(e, t, hi() ? Tn.now() : Date.now());
}
function cn(e, t) {
  if (e.appContext.config.performance && hi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Tn.mark(s), Tn.measure(
      `<${Ji(e, e.type)}> ${t}`,
      n,
      s
    ), Tn.clearMarks(n), Tn.clearMarks(s);
  }
  w.NODE_ENV !== "production" && yh(e, t, hi() ? Tn.now() : Date.now());
}
function hi() {
  return qs !== void 0 || (typeof window < "u" && window.performance ? (qs = !0, Tn = window.performance) : qs = !1), qs;
}
function Mm() {
  const e = [];
  if (w.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Be = ud;
function Xu(e) {
  return Zu(e);
}
function Qu(e) {
  return Zu(e, Th);
}
function Zu(e, t) {
  Mm();
  const n = So();
  n.__VUE__ = !0, w.NODE_ENV !== "production" && yl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: d,
    parentNode: c,
    nextSibling: f,
    setScopeId: m = Oe,
    insertStaticContent: _
  } = e, b = (v, S, I, B = null, R = null, F = null, G = void 0, U = null, H = w.NODE_ENV !== "production" && Ft ? !1 : !!S.dynamicChildren) => {
    if (v === S)
      return;
    v && !Rt(v, S) && (B = Mo(v), bn(v, R, F, !0), v = null), S.patchFlag === -2 && (H = !1, S.dynamicChildren = null);
    const { type: j, ref: ie, shapeFlag: Y } = S;
    switch (j) {
      case sn:
        D(v, S, I, B);
        break;
      case Te:
        O(v, S, I, B);
        break;
      case Mn:
        v == null ? y(S, I, B, G) : w.NODE_ENV !== "production" && h(v, S, I, G);
        break;
      case ce:
        L(
          v,
          S,
          I,
          B,
          R,
          F,
          G,
          U,
          H
        );
        break;
      default:
        Y & 1 ? V(
          v,
          S,
          I,
          B,
          R,
          F,
          G,
          U,
          H
        ) : Y & 6 ? J(
          v,
          S,
          I,
          B,
          R,
          F,
          G,
          U,
          H
        ) : Y & 64 || Y & 128 ? j.process(
          v,
          S,
          I,
          B,
          R,
          F,
          G,
          U,
          H,
          ps
        ) : w.NODE_ENV !== "production" && M("Invalid VNode type:", j, `(${typeof j})`);
    }
    ie != null && R ? ws(ie, v && v.ref, F, S || v, !S) : ie == null && v && v.ref != null && ws(v.ref, null, F, v, !0);
  }, D = (v, S, I, B) => {
    if (v == null)
      s(
        S.el = l(S.children),
        I,
        B
      );
    else {
      const R = S.el = v.el;
      S.children !== v.children && u(R, S.children);
    }
  }, O = (v, S, I, B) => {
    v == null ? s(
      S.el = a(S.children || ""),
      I,
      B
    ) : S.el = v.el;
  }, y = (v, S, I, B) => {
    [v.el, v.anchor] = _(
      v.children,
      S,
      I,
      B,
      v.el,
      v.anchor
    );
  }, h = (v, S, I, B) => {
    if (S.children !== v.children) {
      const R = f(v.anchor);
      E(v), [S.el, S.anchor] = _(
        S.children,
        I,
        R,
        B
      );
    } else
      S.el = v.el, S.anchor = v.anchor;
  }, x = ({ el: v, anchor: S }, I, B) => {
    let R;
    for (; v && v !== S; )
      R = f(v), s(v, I, B), v = R;
    s(S, I, B);
  }, E = ({ el: v, anchor: S }) => {
    let I;
    for (; v && v !== S; )
      I = f(v), o(v), v = I;
    o(S);
  }, V = (v, S, I, B, R, F, G, U, H) => {
    S.type === "svg" ? G = "svg" : S.type === "math" && (G = "mathml"), v == null ? P(
      S,
      I,
      B,
      R,
      F,
      G,
      U,
      H
    ) : C(
      v,
      S,
      R,
      F,
      G,
      U,
      H
    );
  }, P = (v, S, I, B, R, F, G, U) => {
    let H, j;
    const { props: ie, shapeFlag: Y, transition: ne, dirs: le } = v;
    if (H = v.el = r(
      v.type,
      F,
      ie && ie.is,
      ie
    ), Y & 8 ? d(H, v.children) : Y & 16 && g(
      v.children,
      H,
      null,
      B,
      R,
      gr(v, F),
      G,
      U
    ), le && Xt(v, null, B, "created"), N(H, v, v.scopeId, G, B), ie) {
      for (const Ce in ie)
        Ce !== "value" && !An(Ce) && i(H, Ce, null, ie[Ce], F, B);
      "value" in ie && i(H, "value", null, ie.value, F), (j = ie.onVnodeBeforeMount) && gt(j, B, v);
    }
    w.NODE_ENV !== "production" && (ss(H, "__vnode", v, !0), ss(H, "__vueParentComponent", B, !0)), le && Xt(v, null, B, "beforeMount");
    const ye = ed(R, ne);
    ye && ne.beforeEnter(H), s(H, S, I), ((j = ie && ie.onVnodeMounted) || ye || le) && Be(() => {
      j && gt(j, B, v), ye && ne.enter(H), le && Xt(v, null, B, "mounted");
    }, R);
  }, N = (v, S, I, B, R) => {
    if (I && m(v, I), B)
      for (let F = 0; F < B.length; F++)
        m(v, B[F]);
    if (R) {
      let F = R.subTree;
      if (w.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = Gi(F.children) || F), S === F || vi(F.type) && (F.ssContent === S || F.ssFallback === S)) {
        const G = R.vnode;
        N(
          v,
          G,
          G.scopeId,
          G.slotScopeIds,
          R.parent
        );
      }
    }
  }, g = (v, S, I, B, R, F, G, U, H = 0) => {
    for (let j = H; j < v.length; j++) {
      const ie = v[j] = U ? Cn(v[j]) : ut(v[j]);
      b(
        null,
        ie,
        S,
        I,
        B,
        R,
        F,
        G,
        U
      );
    }
  }, C = (v, S, I, B, R, F, G) => {
    const U = S.el = v.el;
    w.NODE_ENV !== "production" && (U.__vnode = S);
    let { patchFlag: H, dynamicChildren: j, dirs: ie } = S;
    H |= v.patchFlag & 16;
    const Y = v.props || fe, ne = S.props || fe;
    let le;
    if (I && Hn(I, !1), (le = ne.onVnodeBeforeUpdate) && gt(le, I, S, v), ie && Xt(S, v, I, "beforeUpdate"), I && Hn(I, !0), w.NODE_ENV !== "production" && Ft && (H = 0, G = !1, j = null), (Y.innerHTML && ne.innerHTML == null || Y.textContent && ne.textContent == null) && d(U, ""), j ? (A(
      v.dynamicChildren,
      j,
      U,
      I,
      B,
      gr(S, R),
      F
    ), w.NODE_ENV !== "production" && oo(v, S)) : G || Ee(
      v,
      S,
      U,
      null,
      I,
      B,
      gr(S, R),
      F,
      !1
    ), H > 0) {
      if (H & 16)
        $(U, Y, ne, I, R);
      else if (H & 2 && Y.class !== ne.class && i(U, "class", null, ne.class, R), H & 4 && i(U, "style", Y.style, ne.style, R), H & 8) {
        const ye = S.dynamicProps;
        for (let Ce = 0; Ce < ye.length; Ce++) {
          const we = ye[Ce], pt = Y[we], Je = ne[we];
          (Je !== pt || we === "value") && i(U, we, pt, Je, R, I);
        }
      }
      H & 1 && v.children !== S.children && d(U, S.children);
    } else !G && j == null && $(U, Y, ne, I, R);
    ((le = ne.onVnodeUpdated) || ie) && Be(() => {
      le && gt(le, I, S, v), ie && Xt(S, v, I, "updated");
    }, B);
  }, A = (v, S, I, B, R, F, G) => {
    for (let U = 0; U < S.length; U++) {
      const H = v[U], j = S[U], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        H.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (H.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rt(H, j) || // - In the case of a component, it could contain anything.
        H.shapeFlag & 198) ? c(H.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      b(
        H,
        j,
        ie,
        null,
        B,
        R,
        F,
        G,
        !0
      );
    }
  }, $ = (v, S, I, B, R) => {
    if (S !== I) {
      if (S !== fe)
        for (const F in S)
          !An(F) && !(F in I) && i(
            v,
            F,
            S[F],
            null,
            R,
            B
          );
      for (const F in I) {
        if (An(F)) continue;
        const G = I[F], U = S[F];
        G !== U && F !== "value" && i(v, F, U, G, R, B);
      }
      "value" in I && i(v, "value", S.value, I.value, R);
    }
  }, L = (v, S, I, B, R, F, G, U, H) => {
    const j = S.el = v ? v.el : l(""), ie = S.anchor = v ? v.anchor : l("");
    let { patchFlag: Y, dynamicChildren: ne, slotScopeIds: le } = S;
    w.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ft || Y & 2048) && (Y = 0, H = !1, ne = null), le && (U = U ? U.concat(le) : le), v == null ? (s(j, I, B), s(ie, I, B), g(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      I,
      ie,
      R,
      F,
      G,
      U,
      H
    )) : Y > 0 && Y & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (A(
      v.dynamicChildren,
      ne,
      I,
      R,
      F,
      G,
      U
    ), w.NODE_ENV !== "production" ? oo(v, S) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (S.key != null || R && S === R.subTree) && oo(
        v,
        S,
        !0
        /* shallow */
      )
    )) : Ee(
      v,
      S,
      I,
      ie,
      R,
      F,
      G,
      U,
      H
    );
  }, J = (v, S, I, B, R, F, G, U, H) => {
    S.slotScopeIds = U, v == null ? S.shapeFlag & 512 ? R.ctx.activate(
      S,
      I,
      B,
      G,
      H
    ) : ee(
      S,
      I,
      B,
      R,
      F,
      G,
      H
    ) : Z(v, S, H);
  }, ee = (v, S, I, B, R, F, G) => {
    const U = v.component = yd(
      v,
      B,
      R
    );
    if (w.NODE_ENV !== "production" && U.type.__hmrId && ch(U), w.NODE_ENV !== "production" && (bs(v), an(U, "mount")), Bs(v) && (U.ctx.renderer = ps), w.NODE_ENV !== "production" && an(U, "init"), _d(U, !1, G), w.NODE_ENV !== "production" && cn(U, "init"), w.NODE_ENV !== "production" && Ft && (v.el = null), U.asyncDep) {
      if (R && R.registerDep(U, se, G), !v.el) {
        const H = U.subTree = pe(Te);
        O(null, H, S, I), v.placeholder = H.el;
      }
    } else
      se(
        U,
        v,
        S,
        I,
        R,
        F,
        G
      );
    w.NODE_ENV !== "production" && (_s(), cn(U, "mount"));
  }, Z = (v, S, I) => {
    const B = S.component = v.component;
    if (qm(v, S, I))
      if (B.asyncDep && !B.asyncResolved) {
        w.NODE_ENV !== "production" && bs(S), Q(B, S, I), w.NODE_ENV !== "production" && _s();
        return;
      } else
        B.next = S, B.update();
    else
      S.el = v.el, B.vnode = S;
  }, se = (v, S, I, B, R, F, G) => {
    const U = () => {
      if (v.isMounted) {
        let { next: Y, bu: ne, u: le, parent: ye, vnode: Ce } = v;
        {
          const Et = td(v);
          if (Et) {
            Y && (Y.el = Ce.el, Q(v, Y, G)), Et.asyncDep.then(() => {
              v.isUnmounted || U();
            });
            return;
          }
        }
        let we = Y, pt;
        w.NODE_ENV !== "production" && bs(Y || v.vnode), Hn(v, !1), Y ? (Y.el = Ce.el, Q(v, Y, G)) : Y = Ce, ne && On(ne), (pt = Y.props && Y.props.onVnodeBeforeUpdate) && gt(pt, ye, Y, Ce), Hn(v, !0), w.NODE_ENV !== "production" && an(v, "render");
        const Je = Jo(v);
        w.NODE_ENV !== "production" && cn(v, "render");
        const Mt = v.subTree;
        v.subTree = Je, w.NODE_ENV !== "production" && an(v, "patch"), b(
          Mt,
          Je,
          // parent may have changed if it's in a teleport
          c(Mt.el),
          // anchor may have changed if it's in a fragment
          Mo(Mt),
          v,
          R,
          F
        ), w.NODE_ENV !== "production" && cn(v, "patch"), Y.el = Je.el, we === null && Yi(v, Je.el), le && Be(le, R), (pt = Y.props && Y.props.onVnodeUpdated) && Be(
          () => gt(pt, ye, Y, Ce),
          R
        ), w.NODE_ENV !== "production" && vu(v), w.NODE_ENV !== "production" && _s();
      } else {
        let Y;
        const { el: ne, props: le } = S, { bm: ye, m: Ce, parent: we, root: pt, type: Je } = v, Mt = In(S);
        if (Hn(v, !1), ye && On(ye), !Mt && (Y = le && le.onVnodeBeforeMount) && gt(Y, we, S), Hn(v, !0), ne && ir) {
          const Et = () => {
            w.NODE_ENV !== "production" && an(v, "render"), v.subTree = Jo(v), w.NODE_ENV !== "production" && cn(v, "render"), w.NODE_ENV !== "production" && an(v, "hydrate"), ir(
              ne,
              v.subTree,
              v,
              R,
              null
            ), w.NODE_ENV !== "production" && cn(v, "hydrate");
          };
          Mt && Je.__asyncHydrate ? Je.__asyncHydrate(
            ne,
            v,
            Et
          ) : Et();
        } else {
          pt.ce && // @ts-expect-error _def is private
          pt.ce._def.shadowRoot !== !1 && pt.ce._injectChildStyle(Je), w.NODE_ENV !== "production" && an(v, "render");
          const Et = v.subTree = Jo(v);
          w.NODE_ENV !== "production" && cn(v, "render"), w.NODE_ENV !== "production" && an(v, "patch"), b(
            null,
            Et,
            I,
            B,
            v,
            R,
            F
          ), w.NODE_ENV !== "production" && cn(v, "patch"), S.el = Et.el;
        }
        if (Ce && Be(Ce, R), !Mt && (Y = le && le.onVnodeMounted)) {
          const Et = S;
          Be(
            () => gt(Y, we, Et),
            R
          );
        }
        (S.shapeFlag & 256 || we && In(we.vnode) && we.vnode.shapeFlag & 256) && v.a && Be(v.a, R), v.isMounted = !0, w.NODE_ENV !== "production" && Or(v), S = I = B = null;
      }
    };
    v.scope.on();
    const H = v.effect = new uo(U);
    v.scope.off();
    const j = v.update = H.run.bind(H), ie = v.job = H.runIfDirty.bind(H);
    ie.i = v, ie.id = v.uid, H.scheduler = () => ji(ie), Hn(v, !0), w.NODE_ENV !== "production" && (H.onTrack = v.rtc ? (Y) => On(v.rtc, Y) : void 0, H.onTrigger = v.rtg ? (Y) => On(v.rtg, Y) : void 0), j();
  }, Q = (v, S, I) => {
    S.component = v;
    const B = v.vnode.props;
    v.vnode = S, v.next = null, xm(v, S.props, B, I), Im(v, S.children, I), qt(), ga(v), zt();
  }, Ee = (v, S, I, B, R, F, G, U, H = !1) => {
    const j = v && v.children, ie = v ? v.shapeFlag : 0, Y = S.children, { patchFlag: ne, shapeFlag: le } = S;
    if (ne > 0) {
      if (ne & 128) {
        Ct(
          j,
          Y,
          I,
          B,
          R,
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
          R,
          F,
          G,
          U,
          H
        );
        return;
      }
    }
    le & 8 ? (ie & 16 && js(j, R, F), Y !== j && d(I, Y)) : ie & 16 ? le & 16 ? Ct(
      j,
      Y,
      I,
      B,
      R,
      F,
      G,
      U,
      H
    ) : js(j, R, F, !0) : (ie & 8 && d(I, ""), le & 16 && g(
      Y,
      I,
      B,
      R,
      F,
      G,
      U,
      H
    ));
  }, ft = (v, S, I, B, R, F, G, U, H) => {
    v = v || ys, S = S || ys;
    const j = v.length, ie = S.length, Y = Math.min(j, ie);
    let ne;
    for (ne = 0; ne < Y; ne++) {
      const le = S[ne] = H ? Cn(S[ne]) : ut(S[ne]);
      b(
        v[ne],
        le,
        I,
        null,
        R,
        F,
        G,
        U,
        H
      );
    }
    j > ie ? js(
      v,
      R,
      F,
      !0,
      !1,
      Y
    ) : g(
      S,
      I,
      B,
      R,
      F,
      G,
      U,
      H,
      Y
    );
  }, Ct = (v, S, I, B, R, F, G, U, H) => {
    let j = 0;
    const ie = S.length;
    let Y = v.length - 1, ne = ie - 1;
    for (; j <= Y && j <= ne; ) {
      const le = v[j], ye = S[j] = H ? Cn(S[j]) : ut(S[j]);
      if (Rt(le, ye))
        b(
          le,
          ye,
          I,
          null,
          R,
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
      const le = v[Y], ye = S[ne] = H ? Cn(S[ne]) : ut(S[ne]);
      if (Rt(le, ye))
        b(
          le,
          ye,
          I,
          null,
          R,
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
          b(
            null,
            S[j] = H ? Cn(S[j]) : ut(S[j]),
            I,
            ye,
            R,
            F,
            G,
            U,
            H
          ), j++;
      }
    } else if (j > ne)
      for (; j <= Y; )
        bn(v[j], R, F, !0), j++;
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
      const Hs = new Array(Je);
      for (j = 0; j < Je; j++) Hs[j] = 0;
      for (j = le; j <= Y; j++) {
        const rt = v[j];
        if (pt >= Je) {
          bn(rt, R, F, !0);
          continue;
        }
        let Wt;
        if (rt.key != null)
          Wt = Ce.get(rt.key);
        else
          for (we = ye; we <= ne; we++)
            if (Hs[we - ye] === 0 && Rt(rt, S[we])) {
              Wt = we;
              break;
            }
        Wt === void 0 ? bn(rt, R, F, !0) : (Hs[Wt - ye] = j + 1, Wt >= Et ? Et = Wt : Mt = !0, b(
          rt,
          S[Wt],
          I,
          null,
          R,
          F,
          G,
          U,
          H
        ), pt++);
      }
      const ra = Mt ? Pm(Hs) : ys;
      for (we = ra.length - 1, j = Je - 1; j >= 0; j--) {
        const rt = ye + j, Wt = S[rt], la = S[rt + 1], aa = rt + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          la.el || la.placeholder
        ) : B;
        Hs[j] === 0 ? b(
          null,
          Wt,
          I,
          aa,
          R,
          F,
          G,
          U,
          H
        ) : Mt && (we < 0 || j !== ra[we] ? kt(Wt, I, aa, 2) : we--);
      }
    }
  }, kt = (v, S, I, B, R = null) => {
    const { el: F, type: G, transition: U, children: H, shapeFlag: j } = v;
    if (j & 6) {
      kt(v.component.subTree, S, I, B);
      return;
    }
    if (j & 128) {
      v.suspense.move(S, I, B);
      return;
    }
    if (j & 64) {
      G.move(v, S, I, ps);
      return;
    }
    if (G === ce) {
      s(F, S, I);
      for (let Y = 0; Y < H.length; Y++)
        kt(H[Y], S, I, B);
      s(v.anchor, S, I);
      return;
    }
    if (G === Mn) {
      x(v, S, I);
      return;
    }
    if (B !== 2 && j & 1 && U)
      if (B === 0)
        U.beforeEnter(F), s(F, S, I), Be(() => U.enter(F), R);
      else {
        const { leave: Y, delayLeave: ne, afterLeave: le } = U, ye = () => {
          v.ctx.isUnmounted ? o(F) : s(F, S, I);
        }, Ce = () => {
          Y(F, () => {
            ye(), le && le();
          });
        };
        ne ? ne(F, ye, Ce) : Ce();
      }
    else
      s(F, S, I);
  }, bn = (v, S, I, B = !1, R = !1) => {
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
    } = v;
    if (Y === -2 && (R = !1), U != null && (qt(), ws(U, null, I, v, !0), zt()), le != null && (S.renderCache[le] = void 0), ie & 256) {
      S.ctx.deactivate(v);
      return;
    }
    const ye = ie & 1 && ne, Ce = !In(v);
    let we;
    if (Ce && (we = G && G.onVnodeBeforeUnmount) && gt(we, S, v), ie & 6)
      zf(v.component, I, B);
    else {
      if (ie & 128) {
        v.suspense.unmount(I, B);
        return;
      }
      ye && Xt(v, null, S, "beforeUnmount"), ie & 64 ? v.type.remove(
        v,
        S,
        I,
        ps,
        B
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ce || Y > 0 && Y & 64) ? js(
        j,
        S,
        I,
        !1,
        !0
      ) : (F === ce && Y & 384 || !R && ie & 16) && js(H, S, I), B && nr(v);
    }
    (Ce && (we = G && G.onVnodeUnmounted) || ye) && Be(() => {
      we && gt(we, S, v), ye && Xt(v, null, S, "unmounted");
    }, I);
  }, nr = (v) => {
    const { type: S, el: I, anchor: B, transition: R } = v;
    if (S === ce) {
      w.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && R && !R.persisted ? v.children.forEach((G) => {
        G.type === Te ? o(G.el) : nr(G);
      }) : qf(I, B);
      return;
    }
    if (S === Mn) {
      E(v);
      return;
    }
    const F = () => {
      o(I), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (v.shapeFlag & 1 && R && !R.persisted) {
      const { leave: G, delayLeave: U } = R, H = () => G(I, F);
      U ? U(v.el, F, H) : H();
    } else
      F();
  }, qf = (v, S) => {
    let I;
    for (; v !== S; )
      I = f(v), o(v), v = I;
    o(S);
  }, zf = (v, S, I) => {
    w.NODE_ENV !== "production" && v.type.__hmrId && uh(v);
    const {
      bum: B,
      scope: R,
      job: F,
      subTree: G,
      um: U,
      m: H,
      a: j,
      parent: ie,
      slots: { __: Y }
    } = v;
    mi(H), mi(j), B && On(B), ie && K(Y) && Y.forEach((ne) => {
      ie.renderCache[ne] = void 0;
    }), R.stop(), F && (F.flags |= 8, bn(G, v, S, I)), U && Be(U, S), Be(() => {
      v.isUnmounted = !0;
    }, S), S && S.pendingBranch && !S.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve()), w.NODE_ENV !== "production" && gh(v);
  }, js = (v, S, I, B = !1, R = !1, F = 0) => {
    for (let G = F; G < v.length; G++)
      bn(v[G], S, I, B, R);
  }, Mo = (v) => {
    if (v.shapeFlag & 6)
      return Mo(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const S = f(v.anchor || v.el), I = S && S[_u];
    return I ? f(I) : S;
  };
  let sr = !1;
  const ia = (v, S, I) => {
    v == null ? S._vnode && bn(S._vnode, null, null, !0) : b(
      S._vnode || null,
      v,
      S,
      null,
      null,
      null,
      I
    ), S._vnode = v, sr || (sr = !0, ga(), ui(), sr = !1);
  }, ps = {
    p: b,
    um: bn,
    m: kt,
    r: nr,
    mt: ee,
    mc: g,
    pc: Ee,
    pbc: A,
    n: Mo,
    o: e
  };
  let or, ir;
  return t && ([or, ir] = t(
    ps
  )), {
    render: ia,
    hydrate: or,
    createApp: _m(ia, or)
  };
}
function gr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Hn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ed(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function oo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (K(s) && K(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Cn(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && oo(r, l)), l.type === sn && (l.el = r.el), l.type === Te && !l.el && (l.el = r.el), w.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Pm(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < u ? i = l + 1 : r = l;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function td(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : td(t);
}
function mi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const nd = Symbol.for("v-scx"), sd = () => {
  {
    const e = so(nd);
    return e || w.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Rm(e, t) {
  return To(e, null, t);
}
function Lm(e, t) {
  return To(
    e,
    null,
    w.NODE_ENV !== "production" ? de({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function od(e, t) {
  return To(
    e,
    null,
    w.NODE_ENV !== "production" ? de({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function nn(e, t, n) {
  return w.NODE_ENV !== "production" && !oe(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), To(e, t, n);
}
function To(e, t, n = fe) {
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
  let u;
  if (Ds) {
    if (i === "sync") {
      const m = sd();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Oe, m.resume = Oe, m.pause = Oe, m;
    }
  }
  const d = Ue;
  l.call = (m, _, b) => $t(m, d, _, b);
  let c = !1;
  i === "post" ? l.scheduler = (m) => {
    Be(m, d && d.suspense);
  } : i !== "sync" && (c = !0, l.scheduler = (m, _) => {
    _ ? m() : ji(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const f = eh(e, t, l);
  return Ds && (u ? u.push(f) : a && f()), f;
}
function Fm(e, t, n) {
  const s = this.proxy, o = re(e) ? e.includes(".") ? id(s, e) : () => s[e] : e.bind(s, s);
  let i;
  oe(t) ? i = t : (i = t.handler, n = t);
  const r = rs(this), l = To(o, i.bind(s), n);
  return r(), l;
}
function id(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Bm(e, t, n = fe) {
  const s = ot();
  if (w.NODE_ENV !== "production" && !s)
    return M("useModel() called without active instance."), q();
  const o = Se(t);
  if (w.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return M(`useModel() called with prop "${t}" which is not declared.`), q();
  const i = Ze(t), r = rd(e, o), l = cu((a, u) => {
    let d, c = fe, f;
    return od(() => {
      const m = e[o];
      at(d, m) && (d = m, u());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const _ = n.set ? n.set(m) : m;
        if (!at(_, d) && !(c !== fe && at(m, c)))
          return;
        const b = s.vnode.props;
        b && // check if parent has passed v-model
        (t in b || o in b || i in b) && (`onUpdate:${t}` in b || `onUpdate:${o}` in b || `onUpdate:${i}` in b) || (d = m, u()), s.emit(`update:${t}`, _), at(m, _) && at(m, c) && !at(_, f) && u(), c = m, f = _;
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
const rd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Se(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function jm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || fe;
  if (w.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [c]
    } = e;
    if (d)
      if (!(t in d))
        (!c || !(Zt(Se(t)) in c)) && M(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Zt(Se(t))}" prop.`
        );
      else {
        const f = d[t];
        oe(f) && (f(...n) || M(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), r = i && rd(s, t.slice(7));
  if (r && (r.trim && (o = n.map((d) => re(d) ? d.trim() : d)), r.number && (o = n.map(oi))), w.NODE_ENV !== "production" && bh(e, t, o), w.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[Zt(d)] && M(
      `Event "${d}" is emitted in component ${Ji(
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
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, $t(
      u,
      e,
      6,
      o
    );
  }
}
function ld(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!oe(e)) {
    const a = (u) => {
      const d = ld(u, t, !0);
      d && (l = !0, de(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (me(e) && s.set(e, null), null) : (K(i) ? i.forEach((a) => r[a] = null) : de(r, i), me(e) && s.set(e, r), r);
}
function Wi(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Ze(t)) || ge(e, t));
}
let Mr = !1;
function gi() {
  Mr = !0;
}
function Jo(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: u,
    renderCache: d,
    props: c,
    data: f,
    setupState: m,
    ctx: _,
    inheritAttrs: b
  } = e, D = mo(e);
  let O, y;
  w.NODE_ENV !== "production" && (Mr = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = o || s, V = w.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(E, {
        get(P, N, g) {
          return M(
            `Property '${String(
              N
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, N, g);
        }
      }) : E;
      O = ut(
        u.call(
          V,
          E,
          d,
          w.NODE_ENV !== "production" ? Lt(c) : c,
          m,
          f,
          _
        )
      ), y = l;
    } else {
      const E = t;
      w.NODE_ENV !== "production" && l === c && gi(), O = ut(
        E.length > 1 ? E(
          w.NODE_ENV !== "production" ? Lt(c) : c,
          w.NODE_ENV !== "production" ? {
            get attrs() {
              return gi(), Lt(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : E(
          w.NODE_ENV !== "production" ? Lt(c) : c,
          null
        )
      ), y = t.props ? l : Hm(l);
    }
  } catch (E) {
    io.length = 0, Fn(E, e, 1), O = pe(Te);
  }
  let h = O, x;
  if (w.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && ([h, x] = ad(O)), y && b !== !1) {
    const E = Object.keys(y), { shapeFlag: V } = h;
    if (E.length) {
      if (V & 7)
        i && E.some(si) && (y = Um(
          y,
          i
        )), h = At(h, y, !1, !0);
      else if (w.NODE_ENV !== "production" && !Mr && h.type !== Te) {
        const P = Object.keys(l), N = [], g = [];
        for (let C = 0, A = P.length; C < A; C++) {
          const $ = P[C];
          gn($) ? si($) || N.push($[2].toLowerCase() + $.slice(3)) : g.push($);
        }
        g.length && M(
          `Extraneous non-props attributes (${g.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), N.length && M(
          `Extraneous non-emits event listeners (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (w.NODE_ENV !== "production" && !Aa(h) && M(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), h = At(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs), n.transition && (w.NODE_ENV !== "production" && !Aa(h) && M(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), vn(h, n.transition)), w.NODE_ENV !== "production" && x ? x(h) : O = h, mo(D), O;
}
const ad = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Gi(t, !1);
  if (s) {
    if (w.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return ad(s);
  } else return [e, void 0];
  const o = t.indexOf(s), i = n ? n.indexOf(s) : -1, r = (l) => {
    t[o] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ut(s), r];
};
function Gi(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (rn(o)) {
      if (o.type !== Te || o.children === "v-if") {
        if (n)
          return;
        if (n = o, w.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Gi(n.children);
      }
    } else
      return;
  }
  return n;
}
const Hm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Um = (e, t) => {
  const n = {};
  for (const s in e)
    (!si(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Aa = (e) => e.shapeFlag & 7 || e.type === Te;
function qm(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (w.NODE_ENV !== "production" && (o || l) && Ft || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Ia(s, r, u) : !!r;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        const f = d[c];
        if (r[f] !== s[f] && !Wi(u, f))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Ia(s, r, u) : !0 : !!r;
  return !1;
}
function Ia(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !Wi(n, i))
      return !0;
  }
  return !1;
}
function Yi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const vi = (e) => e.__isSuspense;
let Pr = 0;
const zm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, i, r, l, a, u) {
    if (e == null)
      Wm(
        t,
        n,
        s,
        o,
        i,
        r,
        l,
        a,
        u
      );
    else {
      if (i && i.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Gm(
        e,
        t,
        n,
        s,
        o,
        r,
        l,
        a,
        u
      );
    }
  },
  hydrate: Ym,
  normalize: Jm
}, Km = zm;
function vo(e, t) {
  const n = e.props && e.props[t];
  oe(n) && n();
}
function Wm(e, t, n, s, o, i, r, l, a) {
  const {
    p: u,
    o: { createElement: d }
  } = a, c = d("div"), f = e.suspense = cd(
    e,
    o,
    s,
    t,
    c,
    n,
    i,
    r,
    l,
    a
  );
  u(
    null,
    f.pendingBranch = e.ssContent,
    c,
    null,
    s,
    f,
    i,
    r
  ), f.deps > 0 ? (vo(e, "onPending"), vo(e, "onFallback"), u(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    i,
    r
  ), Ns(f, e.ssFallback)) : f.resolve(!1, !0);
}
function Gm(e, t, n, s, o, i, r, l, { p: a, um: u, o: { createElement: d } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const f = t.ssContent, m = t.ssFallback, { activeBranch: _, pendingBranch: b, isInFallback: D, isHydrating: O } = c;
  if (b)
    c.pendingBranch = f, Rt(f, b) ? (a(
      b,
      f,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      r,
      l
    ), c.deps <= 0 ? c.resolve() : D && (O || (a(
      _,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), Ns(c, m)))) : (c.pendingId = Pr++, O ? (c.isHydrating = !1, c.activeBranch = b) : u(b, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = d("div"), D ? (a(
      null,
      f,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      r,
      l
    ), c.deps <= 0 ? c.resolve() : (a(
      _,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), Ns(c, m))) : _ && Rt(f, _) ? (a(
      _,
      f,
      n,
      s,
      o,
      c,
      i,
      r,
      l
    ), c.resolve(!0)) : (a(
      null,
      f,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      r,
      l
    ), c.deps <= 0 && c.resolve()));
  else if (_ && Rt(f, _))
    a(
      _,
      f,
      n,
      s,
      o,
      c,
      i,
      r,
      l
    ), Ns(c, f);
  else if (vo(t, "onPending"), c.pendingBranch = f, f.shapeFlag & 512 ? c.pendingId = f.component.suspenseId : c.pendingId = Pr++, a(
    null,
    f,
    c.hiddenContainer,
    null,
    o,
    c,
    i,
    r,
    l
  ), c.deps <= 0)
    c.resolve();
  else {
    const { timeout: y, pendingId: h } = c;
    y > 0 ? setTimeout(() => {
      c.pendingId === h && c.fallback(m);
    }, y) : y === 0 && c.fallback(m);
  }
}
let Ma = !1;
function cd(e, t, n, s, o, i, r, l, a, u, d = !1) {
  w.NODE_ENV !== "production" && !Ma && (Ma = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: f,
    um: m,
    n: _,
    o: { parentNode: b, remove: D }
  } = u;
  let O;
  const y = Xm(e);
  y && t && t.pendingBranch && (O = t.pendingId, t.deps++);
  const h = e.props ? ii(e.props.timeout) : void 0;
  w.NODE_ENV !== "production" && gl(h, "Suspense timeout");
  const x = i, E = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: r,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Pr++,
    timeout: typeof h == "number" ? h : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(V = !1, P = !1) {
      if (w.NODE_ENV !== "production") {
        if (!V && !E.pendingBranch)
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
        activeBranch: g,
        pendingBranch: C,
        pendingId: A,
        effects: $,
        parentComponent: L,
        container: J
      } = E;
      let ee = !1;
      E.isHydrating ? E.isHydrating = !1 : V || (ee = g && C.transition && C.transition.mode === "out-in", ee && (g.transition.afterLeave = () => {
        A === E.pendingId && (f(
          C,
          J,
          i === x ? _(g) : i,
          0
        ), ks($));
      }), g && (b(g.el) === J && (i = _(g)), m(g, L, E, !0)), ee || f(C, J, i, 0)), Ns(E, C), E.pendingBranch = null, E.isInFallback = !1;
      let Z = E.parent, se = !1;
      for (; Z; ) {
        if (Z.pendingBranch) {
          Z.effects.push(...$), se = !0;
          break;
        }
        Z = Z.parent;
      }
      !se && !ee && ks($), E.effects = [], y && t && t.pendingBranch && O === t.pendingId && (t.deps--, t.deps === 0 && !P && t.resolve()), vo(N, "onResolve");
    },
    fallback(V) {
      if (!E.pendingBranch)
        return;
      const { vnode: P, activeBranch: N, parentComponent: g, container: C, namespace: A } = E;
      vo(P, "onFallback");
      const $ = _(N), L = () => {
        E.isInFallback && (c(
          null,
          V,
          C,
          $,
          g,
          null,
          // fallback tree will not have suspense context
          A,
          l,
          a
        ), Ns(E, V));
      }, J = V.transition && V.transition.mode === "out-in";
      J && (N.transition.afterLeave = L), E.isInFallback = !0, m(
        N,
        g,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), J || L();
    },
    move(V, P, N) {
      E.activeBranch && f(E.activeBranch, V, P, N), E.container = V;
    },
    next() {
      return E.activeBranch && _(E.activeBranch);
    },
    registerDep(V, P, N) {
      const g = !!E.pendingBranch;
      g && E.deps++;
      const C = V.vnode.el;
      V.asyncDep.catch((A) => {
        Fn(A, V, 0);
      }).then((A) => {
        if (V.isUnmounted || E.isUnmounted || E.pendingId !== V.suspenseId)
          return;
        V.asyncResolved = !0;
        const { vnode: $ } = V;
        w.NODE_ENV !== "production" && bs($), Hr(V, A, !1), C && ($.el = C);
        const L = !C && V.subTree.el;
        P(
          V,
          $,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          b(C || V.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          C ? null : _(V.subTree),
          E,
          r,
          N
        ), L && D(L), Yi(V, $.el), w.NODE_ENV !== "production" && _s(), g && --E.deps === 0 && E.resolve();
      });
    },
    unmount(V, P) {
      E.isUnmounted = !0, E.activeBranch && m(
        E.activeBranch,
        n,
        V,
        P
      ), E.pendingBranch && m(
        E.pendingBranch,
        n,
        V,
        P
      );
    }
  };
  return E;
}
function Ym(e, t, n, s, o, i, r, l, a) {
  const u = t.suspense = cd(
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
    u.pendingBranch = t.ssContent,
    n,
    u,
    i,
    r
  );
  return u.deps === 0 && u.resolve(!1, !0), d;
}
function Jm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Pa(
    s ? n.default : n
  ), e.ssFallback = s ? Pa(n.fallback) : pe(Te);
}
function Pa(e) {
  let t;
  if (oe(e)) {
    const n = is && e._c;
    n && (e._d = !1, k()), e = e(), n && (e._d = !0, t = et, dd());
  }
  if (K(e)) {
    const n = Gi(e);
    w.NODE_ENV !== "production" && !n && e.filter((s) => s !== Sl).length > 0 && M("<Suspense> slots expect a single root node."), e = n;
  }
  return e = ut(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function ud(e, t) {
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : ks(e);
}
function Ns(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, Yi(s, o));
}
function Xm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ce = Symbol.for("v-fgt"), sn = Symbol.for("v-txt"), Te = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), io = [];
let et = null;
function k(e = !1) {
  io.push(et = e ? null : []);
}
function dd() {
  io.pop(), et = io[io.length - 1] || null;
}
let is = 1;
function Rr(e, t = !1) {
  is += e, e < 0 && et && t && (et.hasOnce = !0);
}
function fd(e) {
  return e.dynamicChildren = is > 0 ? et || ys : null, dd(), is > 0 && et && et.push(e), e;
}
function T(e, t, n, s, o, i) {
  return fd(
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
  return fd(
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
    const n = Go.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Lr;
function Qm(e) {
  Lr = e;
}
const Zm = (...e) => hd(
  ...Lr ? Lr(e, Re) : e
), pd = ({ key: e }) => e ?? null, Xo = ({
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
    key: t && pd(t),
    ref: t && Xo(t),
    scopeId: Hi,
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
  return l ? (Al(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= re(n) ? 8 : 16), w.NODE_ENV !== "production" && a.key !== a.key && M("VNode created with invalid key (NaN). VNode type:", a.type), is > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  et && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && et.push(a), a;
}
const pe = w.NODE_ENV !== "production" ? Zm : hd;
function hd(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Sl) && (w.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Te), rn(e)) {
    const l = At(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Al(l, n), is > 0 && !i && et && (l.shapeFlag & 6 ? et[et.indexOf(e)] = l : et.push(l)), l.patchFlag = -2, l;
  }
  if (xd(e) && (e = e.__vccOpts), t) {
    t = md(t);
    let { class: l, style: a } = t;
    l && !re(l) && (t.class = Ie(l)), me(a) && (Cs(a) && !K(a) && (a = de({}, a)), t.style = dt(a));
  }
  const r = re(e) ? 1 : vi(e) ? 128 : Eu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return w.NODE_ENV !== "production" && r & 4 && Cs(e) && (e = ae(e), M(
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
function md(e) {
  return e ? Cs(e) || zu(e) ? de({}, e) : e : null;
}
function At(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, u = t ? vd(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && pd(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? K(i) ? i.concat(Xo(t)) : [i, Xo(t)] : Xo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: w.NODE_ENV !== "production" && r === -1 && K(l) ? l.map(gd) : l,
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
function gd(e) {
  const t = At(e);
  return K(e.children) && (t.children = e.children.map(gd)), t;
}
function Le(e = " ", t = 0) {
  return pe(sn, null, e, t);
}
function Ts(e, t) {
  const n = pe(Mn, null, e);
  return n.staticCount = t, n;
}
function z(e = "", t = !1) {
  return t ? (k(), _t(Te, null, e)) : pe(Te, null, e);
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
function Al(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (K(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Al(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !zu(t) ? t._ctx = Re : o === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else oe(t) ? (t = { default: t, _ctx: Re }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Le(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vd(...e) {
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
const eg = ju();
let tg = 0;
function yd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || eg, i = {
    uid: tg++,
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
    scope: new ul(
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
    propsOptions: Wu(s, o),
    emitsOptions: ld(s, o),
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
  return w.NODE_ENV !== "production" ? i.ctx = Xh(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = jm.bind(null, i), e.ce && e.ce(i), i;
}
let Ue = null;
const ot = () => Ue || Re;
let yi, Fr;
{
  const e = So(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  yi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ue = n
  ), Fr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ds = n
  );
}
const rs = (e) => {
  const t = Ue;
  return yi(e), e.scope.on(), () => {
    e.scope.off(), yi(t);
  };
}, Br = () => {
  Ue && Ue.scope.off(), yi(null);
}, ng = /* @__PURE__ */ qe("slot,component");
function jr(e, { isNativeTag: t }) {
  (ng(e) || t(e)) && M(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function bd(e) {
  return e.vnode.shapeFlag & 4;
}
let Ds = !1;
function _d(e, t = !1, n = !1) {
  t && Fr(t);
  const { props: s, children: o } = e.vnode, i = bd(e);
  wm(e, s, i, t), Am(e, o, n || t);
  const r = i ? sg(e, t) : void 0;
  return t && Fr(!1), r;
}
function sg(e, t) {
  var n;
  const s = e.type;
  if (w.NODE_ENV !== "production") {
    if (s.name && jr(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let r = 0; r < i.length; r++)
        jr(i[r], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let r = 0; r < i.length; r++)
        bu(i[r]);
    }
    s.compilerOptions && Il() && M(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, no), w.NODE_ENV !== "production" && Qh(e);
  const { setup: o } = s;
  if (o) {
    qt();
    const i = e.setupContext = o.length > 1 ? Nd(e) : null, r = rs(e), l = us(
      o,
      e,
      0,
      [
        w.NODE_ENV !== "production" ? Lt(e.props) : e.props,
        i
      ]
    ), a = Vi(l);
    if (zt(), r(), (a || e.sp) && !In(e) && Nl(e), a) {
      if (l.then(Br, Br), t)
        return l.then((u) => {
          Hr(e, u, t);
        }).catch((u) => {
          Fn(u, e, 0);
        });
      if (e.asyncDep = l, w.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = s.name) != null ? n : "Anonymous";
        M(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Hr(e, l, t);
  } else
    wd(e, t);
}
function Hr(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (w.NODE_ENV !== "production" && rn(t) && M(
    "setup() should not return VNodes directly - return a render function instead."
  ), w.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ml(t), w.NODE_ENV !== "production" && Zh(e)) : w.NODE_ENV !== "production" && t !== void 0 && M(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), wd(e, n);
}
let ro, Ur;
function Ed(e) {
  ro = e, Ur = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Jh));
  };
}
const Il = () => !ro;
function wd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ro && !s.render) {
      const o = s.template || Dl(e).template;
      if (o) {
        w.NODE_ENV !== "production" && an(e, "compile");
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, u = de(
          de(
            {
              isCustomElement: i,
              delimiters: l
            },
            r
          ),
          a
        );
        s.render = ro(o, u), w.NODE_ENV !== "production" && cn(e, "compile");
      }
    }
    e.render = s.render || Oe, Ur && Ur(e);
  }
  {
    const o = rs(e);
    qt();
    try {
      hm(e);
    } finally {
      zt(), o();
    }
  }
  w.NODE_ENV !== "production" && !s.render && e.render === Oe && !t && (!ro && s.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : M("Component is missing template or render function: ", s));
}
const Ra = w.NODE_ENV !== "production" ? {
  get(e, t) {
    return gi(), je(e, "get", ""), e[t];
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
function og(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return je(e, "get", "$slots"), t[n];
    }
  });
}
function Nd(e) {
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
        return n || (n = new Proxy(e.attrs, Ra));
      },
      get slots() {
        return s || (s = og(e));
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ra),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Do(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ml(ru(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in es)
        return es[n](e);
    },
    has(t, n) {
      return n in t || n in es;
    }
  })) : e.proxy;
}
const ig = /(?:^|[-_])(\w)/g, rg = (e) => e.replace(ig, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vs(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ji(e, t, n = !1) {
  let s = Vs(t);
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
  return s ? rg(s) : n ? "App" : "Anonymous";
}
function xd(e) {
  return oe(e) && "__vccOpts" in e;
}
const te = (e, t) => {
  const n = Jp(e, t, Ds);
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
function Sd() {
  if (w.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!me(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if ($e(c)) {
        qt();
        const f = c.value;
        return zt(), [
          "div",
          {},
          ["span", e, d(c)],
          "<",
          l(f),
          ">"
        ];
      } else {
        if (hn(c))
          return [
            "div",
            {},
            ["span", e, tt(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${Kt(c) ? " (readonly)" : ""}`
          ];
        if (Kt(c))
          return [
            "div",
            {},
            ["span", e, tt(c) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(c),
            ">"
          ];
      }
      return null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const f = [];
    c.type.props && c.props && f.push(r("props", ae(c.props))), c.setupState !== fe && f.push(r("setup", c.setupState)), c.data !== fe && f.push(r("data", ae(c.data)));
    const m = a(c, "computed");
    m && f.push(r("computed", m));
    const _ = a(c, "inject");
    return _ && f.push(r("injected", _)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), f;
  }
  function r(c, f) {
    return f = de({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          l(f[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, f = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : me(c) ? ["object", { object: f ? ae(c) : c }] : ["span", n, String(c)];
  }
  function a(c, f) {
    const m = c.type;
    if (oe(m))
      return;
    const _ = {};
    for (const b in c.ctx)
      u(m, b, f) && (_[b] = c.ctx[b]);
    return _;
  }
  function u(c, f, m) {
    const _ = c[m];
    if (K(_) && _.includes(f) || me(_) && f in _ || c.extends && u(c.extends, f, m) || c.mixins && c.mixins.some((b) => u(b, f, m)))
      return !0;
  }
  function d(c) {
    return tt(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function lg(e, t, n, s) {
  const o = n[s];
  if (o && Cd(o, e))
    return o;
  const i = t();
  return i.memo = e.slice(), i.cacheIndex = s, n[s] = i;
}
function Cd(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (at(n[s], t[s]))
      return !1;
  return is > 0 && et && et.push(e), !0;
}
const qr = "3.5.18", Ae = w.NODE_ENV !== "production" ? M : Oe, ag = Bi, cg = Pt, ug = yl, dg = {
  createComponentInstance: yd,
  setupComponent: _d,
  renderComponentRoot: Jo,
  setCurrentRenderingInstance: mo,
  isVNode: rn,
  normalizeVNode: ut,
  getComponentPublicInstance: Do,
  ensureValidVNode: Ol,
  pushWarningContext: bs,
  popWarningContext: _s
}, fg = dg, pg = null, hg = null, mg = null;
var xe = {};
let zr;
const La = typeof window < "u" && window.trustedTypes;
if (La)
  try {
    zr = /* @__PURE__ */ La.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    xe.NODE_ENV !== "production" && Ae(`Error creating trusted types policy: ${e}`);
  }
const kd = zr ? (e) => zr.createHTML(e) : (e) => e, gg = "http://www.w3.org/2000/svg", vg = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Fa = dn && /* @__PURE__ */ dn.createElement("template"), yg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? dn.createElementNS(gg, e) : t === "mathml" ? dn.createElementNS(vg, e) : n ? dn.createElement(e, { is: n }) : dn.createElement(e);
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
      Fa.innerHTML = kd(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Fa.content;
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
}, _n = "transition", zs = "animation", $s = Symbol("_vtc"), Od = {
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
}, Td = /* @__PURE__ */ de(
  {},
  El,
  Od
), bg = (e) => (e.displayName = "Transition", e.props = Td, e), tn = /* @__PURE__ */ bg(
  (e, { slots: t }) => Jt(Cu, Dd(e), t)
), Un = (e, t = []) => {
  K(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ba = (e) => e ? K(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Dd(e) {
  const t = {};
  for (const $ in e)
    $ in Od || (t[$] = e[$]);
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
    appearActiveClass: u = r,
    appearToClass: d = l,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, _ = _g(o), b = _ && _[0], D = _ && _[1], {
    onBeforeEnter: O,
    onEnter: y,
    onEnterCancelled: h,
    onLeave: x,
    onLeaveCancelled: E,
    onBeforeAppear: V = O,
    onAppear: P = y,
    onAppearCancelled: N = h
  } = t, g = ($, L, J, ee) => {
    $._enterCancelled = ee, wn($, L ? d : l), wn($, L ? u : r), J && J();
  }, C = ($, L) => {
    $._isLeaving = !1, wn($, c), wn($, m), wn($, f), L && L();
  }, A = ($) => (L, J) => {
    const ee = $ ? P : y, Z = () => g(L, $, J);
    Un(ee, [L, Z]), ja(() => {
      wn(L, $ ? a : i), Gt(L, $ ? d : l), Ba(ee) || Ha(L, s, b, Z);
    });
  };
  return de(t, {
    onBeforeEnter($) {
      Un(O, [$]), Gt($, i), Gt($, r);
    },
    onBeforeAppear($) {
      Un(V, [$]), Gt($, a), Gt($, u);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave($, L) {
      $._isLeaving = !0;
      const J = () => C($, L);
      Gt($, c), $._enterCancelled ? (Gt($, f), Kr()) : (Kr(), Gt($, f)), ja(() => {
        $._isLeaving && (wn($, c), Gt($, m), Ba(x) || Ha($, s, D, J));
      }), Un(x, [$, J]);
    },
    onEnterCancelled($) {
      g($, !1, void 0, !0), Un(h, [$]);
    },
    onAppearCancelled($) {
      g($, !0, void 0, !0), Un(N, [$]);
    },
    onLeaveCancelled($) {
      C($), Un(E, [$]);
    }
  });
}
function _g(e) {
  if (e == null)
    return null;
  if (me(e))
    return [vr(e.enter), vr(e.leave)];
  {
    const t = vr(e);
    return [t, t];
  }
}
function vr(e) {
  const t = ii(e);
  return xe.NODE_ENV !== "production" && gl(t, "<transition> explicit duration"), t;
}
function Gt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[$s] || (e[$s] = /* @__PURE__ */ new Set())).add(t);
}
function wn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[$s];
  n && (n.delete(t), n.size || (e[$s] = void 0));
}
function ja(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Eg = 0;
function Ha(e, t, n, s) {
  const o = e._endId = ++Eg, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: a } = Vd(e, t);
  if (!r)
    return s();
  const u = r + "end";
  let d = 0;
  const c = () => {
    e.removeEventListener(u, f), i();
  }, f = (m) => {
    m.target === e && ++d >= a && c();
  };
  setTimeout(() => {
    d < a && c();
  }, l + 1), e.addEventListener(u, f);
}
function Vd(e, t) {
  const n = window.getComputedStyle(e), s = (_) => (n[_] || "").split(", "), o = s(`${_n}Delay`), i = s(`${_n}Duration`), r = Ua(o, i), l = s(`${zs}Delay`), a = s(`${zs}Duration`), u = Ua(l, a);
  let d = null, c = 0, f = 0;
  t === _n ? r > 0 && (d = _n, c = r, f = i.length) : t === zs ? u > 0 && (d = zs, c = u, f = a.length) : (c = Math.max(r, u), d = c > 0 ? r > u ? _n : zs : null, f = d ? d === _n ? i.length : a.length : 0);
  const m = d === _n && /\b(transform|all)(,|$)/.test(
    s(`${_n}Property`).toString()
  );
  return {
    type: d,
    timeout: c,
    propCount: f,
    hasTransform: m
  };
}
function Ua(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => qa(n) + qa(e[s])));
}
function qa(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Kr() {
  return document.body.offsetHeight;
}
function wg(e, t, n) {
  const s = e[$s];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const bi = Symbol("_vod"), $d = Symbol("_vsh"), Ml = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[bi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ks(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ks(e, !0), s.enter(e)) : s.leave(e, () => {
      Ks(e, !1);
    }) : Ks(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ks(e, t);
  }
};
xe.NODE_ENV !== "production" && (Ml.name = "show");
function Ks(e, t) {
  e.style.display = t ? e[bi] : "none", e[$d] = !t;
}
function Ng() {
  Ml.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Ad = Symbol(xe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function xg(e) {
  const t = ot();
  if (!t) {
    xe.NODE_ENV !== "production" && Ae("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => _i(i, o));
  };
  xe.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const o = e(t.proxy);
    t.ce ? _i(t.ce, o) : Wr(t.subTree, o), n(o);
  };
  xl(() => {
    ks(s);
  }), Ye(() => {
    nn(s, Oe, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), It(() => o.disconnect());
  });
}
function Wr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Wr(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    _i(e.el, t);
  else if (e.type === ce)
    e.children.forEach((n) => Wr(n, t));
  else if (e.type === Mn) {
    let { el: n, anchor: s } = e;
    for (; n && (_i(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function _i(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const o in t) {
      const i = Hc(t[o]);
      n.setProperty(`--${o}`, i), s += `--${o}: ${i};`;
    }
    n[Ad] = s;
  }
}
const Sg = /(^|;)\s*display\s*:/;
function Cg(e, t, n) {
  const s = e.style, o = re(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (re(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && Qo(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && Qo(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), Qo(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[Ad];
      r && (n += ";" + r), s.cssText = n, i = Sg.test(n);
    }
  } else t && e.removeAttribute("style");
  bi in e && (e[bi] = i ? s.display : "", e[$d] && (s.display = "none"));
}
const kg = /[^\\];\s*$/, za = /\s*!important$/;
function Qo(e, t, n) {
  if (K(n))
    n.forEach((s) => Qo(e, t, s));
  else if (n == null && (n = ""), xe.NODE_ENV !== "production" && kg.test(n) && Ae(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Og(e, t);
    za.test(n) ? e.setProperty(
      Ze(s),
      n.replace(za, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ka = ["Webkit", "Moz", "ms"], yr = {};
function Og(e, t) {
  const n = yr[t];
  if (n)
    return n;
  let s = Se(t);
  if (s !== "filter" && s in e)
    return yr[t] = s;
  s = on(s);
  for (let o = 0; o < Ka.length; o++) {
    const i = Ka[o] + s;
    if (i in e)
      return yr[t] = i;
  }
  return t;
}
const Wa = "http://www.w3.org/1999/xlink";
function Ga(e, t, n, s, o, i = dp(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wa, t.slice(6, t.length)) : e.setAttributeNS(Wa, t, n) : n == null || i && !cl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : bt(n) ? String(n) : n
  );
}
function Ya(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? kd(n) : n);
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
    l === "boolean" ? n = cl(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
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
function Tg(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ja = Symbol("_vei");
function Dg(e, t, n, s, o = null) {
  const i = e[Ja] || (e[Ja] = {}), r = i[t];
  if (s && r)
    r.value = xe.NODE_ENV !== "production" ? Qa(s, t) : s;
  else {
    const [l, a] = Vg(t);
    if (s) {
      const u = i[t] = Ig(
        xe.NODE_ENV !== "production" ? Qa(s, t) : s,
        o
      );
      pn(e, l, u, a);
    } else r && (Tg(e, l, r, a), i[t] = void 0);
  }
}
const Xa = /(?:Once|Passive|Capture)$/;
function Vg(e) {
  let t;
  if (Xa.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Xa); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let br = 0;
const $g = /* @__PURE__ */ Promise.resolve(), Ag = () => br || ($g.then(() => br = 0), br = Date.now());
function Ig(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    $t(
      Mg(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Ag(), n;
}
function Qa(e, t) {
  return oe(e) || K(e) ? e : (Ae(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Oe);
}
function Mg(e, t) {
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
const Za = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Pg = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? wg(e, s, r) : t === "style" ? Cg(e, n, s) : gn(t) ? si(t) || Dg(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rg(e, t, s, r)) ? (Ya(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ga(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? Ya(e, Se(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ga(e, t, s, r));
};
function Rg(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Za(t) && oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Za(t) && re(n) ? !1 : t in e;
}
const ec = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fe(e, t, n) {
  const s = /* @__PURE__ */ wl(e, t);
  $i(s) && de(s, t);
  class o extends Xi {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const Lg = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Fe(e, t, qd), Fg = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Xi extends Fg {
  constructor(t, n = {}, s = Wn) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Wn ? this._root = this.shadowRoot : (xe.NODE_ENV !== "production" && this.shadowRoot && Ae(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Xi) {
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
    this._connected = !1, ko(() => {
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
          const u = i[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = ii(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Se(a)] = !0);
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
          get: () => Co(n[s])
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
    let s = n ? this.getAttribute(t) : ec;
    const o = Se(t);
    n && this._numberProps && this._numberProps[o] && (s = ii(s)), this._setProp(o, s, !1, !0);
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
    if (n !== this._props[t] && (n === ec ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && i.disconnect(), n === !0 ? this.setAttribute(Ze(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ze(t), n + "") : n || this.removeAttribute(Ze(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Ud(t, this._root);
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
            $i(r[0]) ? de({ detail: r }, r[0]) : { detail: r }
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
            const u = n + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(u, "");
            let c;
            for (; c = d.nextNode(); )
              c.setAttribute(u, "");
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
function Gr(e) {
  const t = ot(), n = t && t.ce;
  return n || (xe.NODE_ENV !== "production" && Ae(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function Bg() {
  const e = xe.NODE_ENV !== "production" ? Gr("useShadowRoot") : Gr();
  return e && e.shadowRoot;
}
function jg(e = "$style") {
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
const Id = /* @__PURE__ */ new WeakMap(), Md = /* @__PURE__ */ new WeakMap(), Ei = Symbol("_moveCb"), tc = Symbol("_enterCb"), Hg = (e) => (delete e.props.mode, e), Ug = /* @__PURE__ */ Hg({
  name: "TransitionGroup",
  props: /* @__PURE__ */ de({}, Td, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = ot(), s = _l();
    let o, i;
    return zi(() => {
      if (!o.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!Gg(
        o[0].el,
        n.vnode.el,
        r
      )) {
        o = [];
        return;
      }
      o.forEach(zg), o.forEach(Kg);
      const l = o.filter(Wg);
      Kr(), l.forEach((a) => {
        const u = a.el, d = u.style;
        Gt(u, r), d.transform = d.webkitTransform = d.transitionDuration = "";
        const c = u[Ei] = (f) => {
          f && f.target !== u || (!f || /transform$/.test(f.propertyName)) && (u.removeEventListener("transitionend", c), u[Ei] = null, wn(u, r));
        };
        u.addEventListener("transitionend", c);
      }), o = [];
    }), () => {
      const r = ae(e), l = Dd(r);
      let a = r.tag || ce;
      if (o = [], i)
        for (let u = 0; u < i.length; u++) {
          const d = i[u];
          d.el && d.el instanceof Element && (o.push(d), vn(
            d,
            Os(
              d,
              l,
              s,
              n
            )
          ), Id.set(
            d,
            d.el.getBoundingClientRect()
          ));
        }
      i = t.default ? Ui(t.default()) : [];
      for (let u = 0; u < i.length; u++) {
        const d = i[u];
        d.key != null ? vn(
          d,
          Os(d, l, s, n)
        ) : xe.NODE_ENV !== "production" && d.type !== sn && Ae("<TransitionGroup> children must be keyed.");
      }
      return pe(a, null, i);
    };
  }
}), qg = Ug;
function zg(e) {
  const t = e.el;
  t[Ei] && t[Ei](), t[tc] && t[tc]();
}
function Kg(e) {
  Md.set(e, e.el.getBoundingClientRect());
}
function Wg(e) {
  const t = Id.get(e), n = Md.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${s}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function Gg(e, t, n) {
  const s = e.cloneNode(), o = e[$s];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: r } = Vd(s);
  return i.removeChild(s), r;
}
const Ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => On(t, n) : t;
};
function Yg(e) {
  e.target.composing = !0;
}
function nc(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Dt = Symbol("_assign"), ls = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Dt] = Ln(o);
    const i = s || o.props && o.props.type === "number";
    pn(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = oi(l)), e[Dt](l);
    }), n && pn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (pn(e, "compositionstart", Yg), pn(e, "compositionend", nc), pn(e, "change", nc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (e[Dt] = Ln(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? oi(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Qt = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Dt] = Ln(n), pn(e, "change", () => {
      const s = e._modelValue, o = As(e), i = e.checked, r = e[Dt];
      if (K(s)) {
        const l = Ii(s, o), a = l !== -1;
        if (i && !a)
          r(s.concat(o));
        else if (!i && a) {
          const u = [...s];
          u.splice(l, 1), r(u);
        }
      } else if (cs(s)) {
        const l = new Set(s);
        i ? l.add(o) : l.delete(o), r(l);
      } else
        r(Pd(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: sc,
  beforeUpdate(e, t, n) {
    e[Dt] = Ln(n), sc(e, t, n);
  }
};
function sc(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (K(t))
    o = Ii(t, s.props.value) > -1;
  else if (cs(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Rn(t, Pd(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Pl = {
  created(e, { value: t }, n) {
    e.checked = Rn(t, n.props.value), e[Dt] = Ln(n), pn(e, "change", () => {
      e[Dt](As(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Dt] = Ln(s), t !== n && (e.checked = Rn(t, s.props.value));
  }
}, Qi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = cs(t);
    pn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => n ? oi(As(r)) : As(r)
      );
      e[Dt](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, ko(() => {
        e._assigning = !1;
      });
    }), e[Dt] = Ln(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    oc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Dt] = Ln(n);
  },
  updated(e, { value: t }) {
    e._assigning || oc(e, t);
  }
};
function oc(e, t) {
  const n = e.multiple, s = K(t);
  if (n && !s && !cs(t)) {
    xe.NODE_ENV !== "production" && Ae(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, i = e.options.length; o < i; o++) {
    const r = e.options[o], l = As(r);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? r.selected = t.some((u) => String(u) === String(l)) : r.selected = Ii(t, l) > -1;
      } else
        r.selected = t.has(l);
    else if (Rn(As(r), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function As(e) {
  return "_value" in e ? e._value : e.value;
}
function Pd(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Rd = {
  created(e, t, n) {
    Uo(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Uo(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Uo(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Uo(e, t, n, s, "updated");
  }
};
function Ld(e, t) {
  switch (e) {
    case "SELECT":
      return Qi;
    case "TEXTAREA":
      return ls;
    default:
      switch (t) {
        case "checkbox":
          return Qt;
        case "radio":
          return Pl;
        default:
          return ls;
      }
  }
}
function Uo(e, t, n, s, o) {
  const r = Ld(
    e.tagName,
    n.props && n.props.type
  )[o];
  r && r(e, t, n, s);
}
function Jg() {
  ls.getSSRProps = ({ value: e }) => ({ value: e }), Pl.getSSRProps = ({ value: e }, t) => {
    if (t.props && Rn(t.props.value, e))
      return { checked: !0 };
  }, Qt.getSSRProps = ({ value: e }, t) => {
    if (K(e)) {
      if (t.props && Ii(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (cs(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Rd.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Ld(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Xg = ["ctrl", "shift", "alt", "meta"], Qg = {
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
  exact: (e, t) => Xg.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ht = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = Qg[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, Zg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Fd = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Ze(o.key);
    if (t.some(
      (r) => r === i || Zg[r] === i
    ))
      return e(o);
  });
}, Bd = /* @__PURE__ */ de({ patchProp: Pg }, yg);
let lo, ic = !1;
function jd() {
  return lo || (lo = Xu(Bd));
}
function Hd() {
  return lo = ic ? lo : Qu(Bd), ic = !0, lo;
}
const Ud = (...e) => {
  jd().render(...e);
}, e0 = (...e) => {
  Hd().hydrate(...e);
}, Wn = (...e) => {
  const t = jd().createApp(...e);
  xe.NODE_ENV !== "production" && (Kd(t), Wd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Gd(s);
    if (!o) return;
    const i = t._component;
    !oe(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, zd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
}, qd = (...e) => {
  const t = Hd().createApp(...e);
  xe.NODE_ENV !== "production" && (Kd(t), Wd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Gd(s);
    if (o)
      return n(o, !0, zd(o));
  }, t;
};
function zd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Kd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Pc(t) || Rc(t) || Lc(t),
    writable: !1
  });
}
function Wd(e) {
  if (Il()) {
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
function Gd(e) {
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
let rc = !1;
const t0 = () => {
  rc || (rc = !0, Jg(), Ng());
}, n0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Cu,
  BaseTransitionPropsValidators: El,
  Comment: Te,
  DeprecationTypes: mg,
  EffectScope: ul,
  ErrorCodes: ih,
  ErrorTypeStrings: ag,
  Fragment: ce,
  KeepAlive: Uh,
  ReactiveEffect: uo,
  Static: Mn,
  Suspense: Km,
  Teleport: ds,
  Text: sn,
  TrackOpTypes: Xp,
  Transition: tn,
  TransitionGroup: qg,
  TriggerOpTypes: Qp,
  VueElement: Xi,
  assertNumber: gl,
  callWithAsyncErrorHandling: $t,
  callWithErrorHandling: us,
  camelize: Se,
  capitalize: on,
  cloneVNode: At,
  compatUtils: hg,
  computed: te,
  createApp: Wn,
  createBlock: _t,
  createCommentVNode: z,
  createElementBlock: T,
  createElementVNode: p,
  createHydrationRenderer: Qu,
  createPropsRestProxy: dm,
  createRenderer: Xu,
  createSSRApp: qd,
  createSlots: Gh,
  createStaticVNode: Ts,
  createTextVNode: Le,
  createVNode: pe,
  customRef: cu,
  defineAsyncComponent: jh,
  defineComponent: wl,
  defineCustomElement: Fe,
  defineEmits: tm,
  defineExpose: nm,
  defineModel: im,
  defineOptions: sm,
  defineProps: em,
  defineSSRCustomElement: Lg,
  defineSlots: om,
  devtools: cg,
  effect: _p,
  effectScope: yp,
  getCurrentInstance: ot,
  getCurrentScope: dl,
  getCurrentWatcher: Zp,
  getTransitionRawChildren: Ui,
  guardReactiveProps: md,
  h: Jt,
  handleError: Fn,
  hasInjectionContext: Em,
  hydrate: e0,
  hydrateOnIdle: Mh,
  hydrateOnInteraction: Fh,
  hydrateOnMediaQuery: Lh,
  hydrateOnVisible: Rh,
  initCustomFormatter: Sd,
  initDirectivesForSSR: t0,
  inject: so,
  isMemoSame: Cd,
  isProxy: Cs,
  isReactive: hn,
  isReadonly: Kt,
  isRef: $e,
  isRuntimeOnly: Il,
  isShallow: tt,
  isVNode: rn,
  markRaw: ru,
  mergeDefaults: cm,
  mergeModels: um,
  mergeProps: vd,
  nextTick: ko,
  normalizeClass: Ie,
  normalizeProps: ip,
  normalizeStyle: dt,
  onActivated: Vu,
  onBeforeMount: Iu,
  onBeforeUnmount: Ki,
  onBeforeUpdate: xl,
  onDeactivated: $u,
  onErrorCaptured: Lu,
  onMounted: Ye,
  onRenderTracked: Ru,
  onRenderTriggered: Pu,
  onScopeDispose: Uc,
  onServerPrefetch: Mu,
  onUnmounted: It,
  onUpdated: zi,
  onWatcherCleanup: du,
  openBlock: k,
  popScopeId: Eh,
  provide: Hu,
  proxyRefs: ml,
  pushScopeId: _h,
  queuePostFlushCb: ks,
  reactive: Ss,
  readonly: Li,
  ref: q,
  registerRuntimeCompiler: Ed,
  render: Ud,
  renderList: Ve,
  renderSlot: Bn,
  resolveComponent: Kh,
  resolveDirective: Wh,
  resolveDynamicComponent: Cl,
  resolveFilter: pg,
  resolveTransitionHooks: Os,
  setBlockTracking: Rr,
  setDevtoolsHook: ug,
  setTransitionHooks: vn,
  shallowReactive: iu,
  shallowReadonly: Lt,
  shallowRef: lu,
  ssrContextKey: nd,
  ssrUtils: fg,
  stop: Ep,
  toDisplayString: X,
  toHandlerKey: Zt,
  toHandlers: Yh,
  toRaw: ae,
  toRef: Gp,
  toRefs: zp,
  toValue: Hp,
  transformVNodeArgs: Qm,
  triggerRef: jp,
  unref: Co,
  useAttrs: am,
  useCssModule: jg,
  useCssVars: xg,
  useHost: Gr,
  useId: Sh,
  useModel: Bm,
  useSSRContext: sd,
  useShadowRoot: Bg,
  useSlots: lm,
  useTemplateRef: Ch,
  useTransitionState: _l,
  vModelCheckbox: Qt,
  vModelDynamic: Rd,
  vModelRadio: Pl,
  vModelSelect: Qi,
  vModelText: ls,
  vShow: Ml,
  version: qr,
  warn: Ae,
  watch: nn,
  watchEffect: Rm,
  watchPostEffect: Lm,
  watchSyncEffect: od,
  withAsyncContext: fm,
  withCtx: Ge,
  withDefaults: rm,
  withDirectives: wt,
  withKeys: Fd,
  withMemo: lg,
  withModifiers: Ht,
  withScopeId: wh
}, Symbol.toStringTag, { value: "Module" }));
var W = {};
const yo = Symbol(W.NODE_ENV !== "production" ? "Fragment" : ""), ao = Symbol(W.NODE_ENV !== "production" ? "Teleport" : ""), Rl = Symbol(W.NODE_ENV !== "production" ? "Suspense" : ""), wi = Symbol(W.NODE_ENV !== "production" ? "KeepAlive" : ""), Yd = Symbol(
  W.NODE_ENV !== "production" ? "BaseTransition" : ""
), as = Symbol(W.NODE_ENV !== "production" ? "openBlock" : ""), Jd = Symbol(W.NODE_ENV !== "production" ? "createBlock" : ""), Xd = Symbol(
  W.NODE_ENV !== "production" ? "createElementBlock" : ""
), Ll = Symbol(W.NODE_ENV !== "production" ? "createVNode" : ""), Fl = Symbol(
  W.NODE_ENV !== "production" ? "createElementVNode" : ""
), Vo = Symbol(
  W.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Bl = Symbol(
  W.NODE_ENV !== "production" ? "createTextVNode" : ""
), Qd = Symbol(
  W.NODE_ENV !== "production" ? "createStaticVNode" : ""
), jl = Symbol(
  W.NODE_ENV !== "production" ? "resolveComponent" : ""
), Hl = Symbol(
  W.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Ul = Symbol(
  W.NODE_ENV !== "production" ? "resolveDirective" : ""
), ql = Symbol(
  W.NODE_ENV !== "production" ? "resolveFilter" : ""
), zl = Symbol(
  W.NODE_ENV !== "production" ? "withDirectives" : ""
), Kl = Symbol(W.NODE_ENV !== "production" ? "renderList" : ""), Zd = Symbol(W.NODE_ENV !== "production" ? "renderSlot" : ""), ef = Symbol(W.NODE_ENV !== "production" ? "createSlots" : ""), Zi = Symbol(
  W.NODE_ENV !== "production" ? "toDisplayString" : ""
), Ni = Symbol(W.NODE_ENV !== "production" ? "mergeProps" : ""), Wl = Symbol(
  W.NODE_ENV !== "production" ? "normalizeClass" : ""
), Gl = Symbol(
  W.NODE_ENV !== "production" ? "normalizeStyle" : ""
), bo = Symbol(
  W.NODE_ENV !== "production" ? "normalizeProps" : ""
), $o = Symbol(
  W.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Yl = Symbol(W.NODE_ENV !== "production" ? "toHandlers" : ""), Yr = Symbol(W.NODE_ENV !== "production" ? "camelize" : ""), s0 = Symbol(W.NODE_ENV !== "production" ? "capitalize" : ""), Jr = Symbol(
  W.NODE_ENV !== "production" ? "toHandlerKey" : ""
), xi = Symbol(
  W.NODE_ENV !== "production" ? "setBlockTracking" : ""
), o0 = Symbol(W.NODE_ENV !== "production" ? "pushScopeId" : ""), i0 = Symbol(W.NODE_ENV !== "production" ? "popScopeId" : ""), Jl = Symbol(W.NODE_ENV !== "production" ? "withCtx" : ""), r0 = Symbol(W.NODE_ENV !== "production" ? "unref" : ""), l0 = Symbol(W.NODE_ENV !== "production" ? "isRef" : ""), Xl = Symbol(W.NODE_ENV !== "production" ? "withMemo" : ""), tf = Symbol(W.NODE_ENV !== "production" ? "isMemoSame" : ""), Is = {
  [yo]: "Fragment",
  [ao]: "Teleport",
  [Rl]: "Suspense",
  [wi]: "KeepAlive",
  [Yd]: "BaseTransition",
  [as]: "openBlock",
  [Jd]: "createBlock",
  [Xd]: "createElementBlock",
  [Ll]: "createVNode",
  [Fl]: "createElementVNode",
  [Vo]: "createCommentVNode",
  [Bl]: "createTextVNode",
  [Qd]: "createStaticVNode",
  [jl]: "resolveComponent",
  [Hl]: "resolveDynamicComponent",
  [Ul]: "resolveDirective",
  [ql]: "resolveFilter",
  [zl]: "withDirectives",
  [Kl]: "renderList",
  [Zd]: "renderSlot",
  [ef]: "createSlots",
  [Zi]: "toDisplayString",
  [Ni]: "mergeProps",
  [Wl]: "normalizeClass",
  [Gl]: "normalizeStyle",
  [bo]: "normalizeProps",
  [$o]: "guardReactiveProps",
  [Yl]: "toHandlers",
  [Yr]: "camelize",
  [s0]: "capitalize",
  [Jr]: "toHandlerKey",
  [xi]: "setBlockTracking",
  [o0]: "pushScopeId",
  [i0]: "popScopeId",
  [Jl]: "withCtx",
  [r0]: "unref",
  [l0]: "isRef",
  [Xl]: "withMemo",
  [tf]: "isMemoSame"
};
function a0(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Is[t] = e[t];
  });
}
const St = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function c0(e, t = "") {
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
function _o(e, t, n, s, o, i, r, l = !1, a = !1, u = !1, d = St) {
  return e && (l ? (e.helper(as), e.helper(Rs(e.inSSR, u))) : e.helper(Ps(e.inSSR, u)), r && e.helper(zl)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: o,
    dynamicProps: i,
    directives: r,
    isBlock: l,
    disableTracking: a,
    isComponent: u,
    loc: d
  };
}
function ns(e, t = St) {
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
function Ms(e, t = void 0, n = !1, s = !1, o = St) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: o
  };
}
function Xr(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: St
  };
}
function u0(e, t, n = !1, s = !1) {
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
function d0(e) {
  return {
    type: 21,
    body: e,
    loc: St
  };
}
function Ps(e, t) {
  return e || t ? Ll : Fl;
}
function Rs(e, t) {
  return e || t ? Jd : Xd;
}
function Ql(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Ps(s, e.isComponent)), t(as), t(Rs(s, e.isComponent)));
}
const lc = new Uint8Array([123, 123]), ac = new Uint8Array([125, 125]);
function cc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Nt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function En(e) {
  return e === 47 || e === 62 || Nt(e);
}
function Si(e) {
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
class f0 {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = lc, this.delimiterClose = ac, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = lc, this.delimiterClose = ac;
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
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : cc(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    En(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (En(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Si("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Nt(t) || (t === 62 ? (W.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = cc(t) ? 9 : 27, this.sectionStart = this.index));
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
const p0 = {
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
function Qr(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function Pn(e, t) {
  const n = Qr("MODE", t), s = Qr(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Ls(e, t, n, ...s) {
  const o = Pn(e, t);
  return W.NODE_ENV !== "production" && o && Ci(e, t, n, ...s), o;
}
function Ci(e, t, n, ...s) {
  if (Qr(e, t) === "suppress-warning")
    return;
  const { message: i, link: r } = p0[e], l = `(deprecation ${e}) ${typeof i == "function" ? i(...s) : i}${r ? `
  Details: ${r}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Zl(e) {
  throw e;
}
function nf(e) {
  W.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Ne(e, t, n, s) {
  const o = W.NODE_ENV !== "production" ? (n || h0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, i = new SyntaxError(String(o));
  return i.code = e, i.loc = t, i;
}
const h0 = {
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
function sf(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return ao;
    case "Suspense":
    case "suspense":
      return Rl;
    case "KeepAlive":
    case "keep-alive":
      return wi;
    case "BaseTransition":
    case "base-transition":
      return Yd;
  }
}
const m0 = /^$|^\d|[^\$\w\xA0-\uFFFF]/, ea = (e) => !m0.test(e), g0 = /[A-Za-z_$\xA0-\uFFFF]/, v0 = /[\.\?\w$\xA0-\uFFFF]/, y0 = /\s+[.[]\s*|\s*[.[]\s+/g, of = (e) => e.type === 4 ? e.content : e.loc.source, b0 = (e) => {
  const t = of(e).trim().replace(y0, (l) => l.trim());
  let n = 0, s = [], o = 0, i = 0, r = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, i++;
        else if (!(l === 0 ? g0 : v0).test(a))
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
}, rf = b0, _0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, E0 = (e) => _0.test(of(e)), w0 = E0;
function uc(e, t) {
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
function Eo(e, t, n = !1, s = !1) {
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
function N0(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function _r(e) {
  return e.type === 5 || e.type === 2;
}
function dc(e) {
  return e.type === 7 && e.name === "pre";
}
function x0(e) {
  return e.type === 7 && e.name === "slot";
}
function ki(e) {
  return e.type === 1 && e.tagType === 3;
}
function Oi(e) {
  return e.type === 1 && e.tagType === 2;
}
const S0 = /* @__PURE__ */ new Set([bo, $o]);
function lf(e, t = []) {
  if (e && !re(e) && e.type === 14) {
    const n = e.callee;
    if (!re(n) && S0.has(n))
      return lf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Ti(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], i = [], r;
  if (o && !re(o) && o.type === 14) {
    const l = lf(o);
    o = l[0], i = l[1], r = i[i.length - 1];
  }
  if (o == null || re(o))
    s = Tt([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !re(l) && l.type === 15 ? fc(t, l) || l.properties.unshift(t) : o.callee === Yl ? s = He(n.helper(Ni), [
      Tt([t]),
      o
    ]) : o.arguments.unshift(Tt([t])), !s && (s = o);
  } else o.type === 15 ? (fc(t, o) || o.properties.unshift(t), s = o) : (s = He(n.helper(Ni), [
    Tt([t]),
    o
  ]), r && r.callee === $o && (r = i[i.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = s : e.props = s : r ? r.arguments[0] = s : e.arguments[2] = s;
}
function fc(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (o) => o.key.type === 4 && o.key.content === s
    );
  }
  return n;
}
function wo(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function C0(e) {
  return e.type === 14 && e.callee === Xl ? e.arguments[1].returns : e;
}
const k0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, af = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Ws,
  isPreTag: Ws,
  isIgnoreNewlineTag: Ws,
  isCustomElement: Ws,
  onError: Zl,
  onWarn: nf,
  comments: W.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ve = af, No = null, mn = "", Qe = null, he = null, mt = "", un = -1, qn = -1, ta = 0, kn = !1, Zr = null;
const De = [], ke = new f0(De, {
  onerr: ht,
  ontext(e, t) {
    qo(Ke(e, t), e, t);
  },
  ontextentity(e, t, n) {
    qo(e, t, n);
  },
  oninterpolation(e, t) {
    if (kn)
      return qo(Ke(e, t), e, t);
    let n = e + ke.delimiterOpen.length, s = t - ke.delimiterClose.length;
    for (; Nt(mn.charCodeAt(n)); )
      n++;
    for (; Nt(mn.charCodeAt(s - 1)); )
      s--;
    let o = Ke(n, s);
    o.includes("&") && (o = ve.decodeEntities(o, !1)), el({
      type: 5,
      content: ei(o, !1, Pe(n, s)),
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
    hc(e);
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
            Zo(l, t, r < o);
          }
          break;
        }
      s || ht(23, cf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Qe.tag;
    Qe.isSelfClosing = !0, hc(e), De[0] && De[0].tag === t && Zo(De.shift(), e);
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
      kn = ke.inVPre = !0, Zr = Qe;
      const o = Qe.props;
      for (let i = 0; i < o.length; i++)
        o[i].type === 7 && (o[i] = L0(o[i]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Ke(e, t);
    if (kn && !dc(he))
      he.name += n, Gn(he.nameLoc, t);
    else {
      const s = n[0] !== "[";
      he.arg = ei(
        s ? n : n.slice(1, -1),
        s,
        Pe(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Ke(e, t);
    if (kn && !dc(he))
      he.name += "." + n, Gn(he.nameLoc, t);
    else if (he.name === "slot") {
      const s = he.arg;
      s && (s.content += "." + n, Gn(s.loc, t));
    } else {
      const s = ue(n, !0, Pe(e, t));
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
      if (Gn(he.loc, t), e !== 0)
        if (mt.includes("&") && (mt = ve.decodeEntities(
          mt,
          !0
        )), he.type === 6)
          he.name === "class" && (mt = df(mt).trim()), e === 1 && !mt && ht(13, t), he.value = {
            type: 2,
            content: mt,
            loc: e === 1 ? Pe(un, qn) : Pe(un - 1, qn + 1)
          }, ke.inSFCRoot && Qe.tag === "template" && he.name === "lang" && mt && mt !== "html" && ke.enterRCDATA(Si("</template"), 0);
        else {
          let n = 0;
          he.exp = ei(
            mt,
            !1,
            Pe(un, qn),
            0,
            n
          ), he.name === "for" && (he.forParseResult = T0(he.exp));
          let s = -1;
          he.name === "bind" && (s = he.modifiers.findIndex(
            (o) => o.content === "sync"
          )) > -1 && Ls(
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
    ve.comments && el({
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
      Zo(De[t], e - 1), ht(24, De[t].loc.start.offset);
  },
  oncdata(e, t) {
    De[0].ns !== 0 ? qo(Ke(e, t), e, t) : ht(1, e - 9);
  },
  onprocessinginstruction(e) {
    (De[0] ? De[0].ns : ve.ns) === 0 && ht(
      21,
      e - 1
    );
  }
}), pc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, O0 = /^\(|\)$/g;
function T0(e) {
  const t = e.loc, n = e.content, s = n.match(k0);
  if (!s) return;
  const [, o, i] = s, r = (c, f, m = !1) => {
    const _ = t.start.offset + f, b = _ + c.length;
    return ei(
      c,
      !1,
      Pe(_, b),
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
  let a = o.trim().replace(O0, "").trim();
  const u = o.indexOf(a), d = a.match(pc);
  if (d) {
    a = a.replace(pc, "").trim();
    const c = d[1].trim();
    let f;
    if (c && (f = n.indexOf(c, u + a.length), l.key = r(c, f, !0)), d[2]) {
      const m = d[2].trim();
      m && (l.index = r(
        m,
        n.indexOf(
          m,
          l.key ? f + c.length : u + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = r(a, u, !0)), l;
}
function Ke(e, t) {
  return mn.slice(e, t);
}
function hc(e) {
  ke.inSFCRoot && (Qe.innerLoc = Pe(e + 1, e + 1)), el(Qe);
  const { tag: t, ns: n } = Qe;
  n === 0 && ve.isPreTag(t) && ta++, ve.isVoidTag(t) ? Zo(Qe, e) : (De.unshift(Qe), (n === 1 || n === 2) && (ke.inXML = !0)), Qe = null;
}
function qo(e, t, n) {
  {
    const i = De[0] && De[0].tag;
    i !== "script" && i !== "style" && e.includes("&") && (e = ve.decodeEntities(e, !1));
  }
  const s = De[0] || No, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Gn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Pe(t, n)
  });
}
function Zo(e, t, n = !1) {
  n ? Gn(e.loc, cf(t, 60)) : Gn(e.loc, D0(t, 62) + 1), ke.inSFCRoot && (e.children.length ? e.innerLoc.end = de({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = de({}, e.innerLoc.start), e.innerLoc.source = Ke(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: i } = e;
  if (kn || (s === "slot" ? e.tagType = 2 : mc(e) ? e.tagType = 3 : $0(e) && (e.tagType = 1)), ke.inRCDATA || (e.children = uf(i)), o === 0 && ve.isIgnoreNewlineTag(s)) {
    const r = i[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ve.isPreTag(s) && ta--, Zr === e && (kn = ke.inVPre = !1, Zr = null), ke.inXML && (De[0] ? De[0].ns : ve.ns) === 0 && (ke.inXML = !1);
  {
    const r = e.props;
    if (W.NODE_ENV !== "production" && Pn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ve
    )) {
      let a = !1, u = !1;
      for (let d = 0; d < r.length; d++) {
        const c = r[d];
        if (c.type === 7 && (c.name === "if" ? a = !0 : c.name === "for" && (u = !0)), a && u) {
          Ci(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ve,
            e.loc
          );
          break;
        }
      }
    }
    if (!ke.inSFCRoot && Pn(
      "COMPILER_NATIVE_TEMPLATE",
      ve
    ) && e.tag === "template" && !mc(e)) {
      W.NODE_ENV !== "production" && Ci(
        "COMPILER_NATIVE_TEMPLATE",
        ve,
        e.loc
      );
      const a = De[0] || No, u = a.children.indexOf(e);
      a.children.splice(u, 1, ...e.children);
    }
    const l = r.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Ls(
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
function D0(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n < mn.length - 1; ) n++;
  return n;
}
function cf(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const V0 = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function mc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && V0.has(t[n].name))
        return !0;
  }
  return !1;
}
function $0({ tag: e, props: t }) {
  if (ve.isCustomElement(e))
    return !1;
  if (e === "component" || A0(e.charCodeAt(0)) || sf(e) || ve.isBuiltInComponent && ve.isBuiltInComponent(e) || ve.isNativeTag && !ve.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (Ls(
          "COMPILER_IS_ON_ELEMENT",
          ve,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Dn(s.arg, "is") && Ls(
        "COMPILER_IS_ON_ELEMENT",
        ve,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function A0(e) {
  return e > 64 && e < 91;
}
const I0 = /\r\n/g;
function uf(e) {
  const t = ve.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (ta)
        o.content = o.content.replace(I0, `
`);
      else if (M0(o.content)) {
        const i = e[s - 1] && e[s - 1].type, r = e[s + 1] && e[s + 1].type;
        !i || !r || t && (i === 3 && (r === 3 || r === 1) || i === 1 && (r === 3 || r === 1 && P0(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = df(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function M0(e) {
  for (let t = 0; t < e.length; t++)
    if (!Nt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function P0(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function df(e) {
  let t = "", n = !1;
  for (let s = 0; s < e.length; s++)
    Nt(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function el(e) {
  (De[0] || No).children.push(e);
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
function R0(e) {
  return Pe(e.start.offset, e.end.offset);
}
function Gn(e, t) {
  e.end = ke.getPos(t), e.source = Ke(e.start.offset, t);
}
function L0(e) {
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
function ei(e, t = !1, n, s = 0, o = 0) {
  return ue(e, t, n, s);
}
function ht(e, t, n) {
  ve.onError(
    Ne(e, Pe(t, t), void 0, n)
  );
}
function F0() {
  ke.reset(), Qe = null, he = null, mt = "", un = -1, qn = -1, De.length = 0;
}
function B0(e, t) {
  if (F0(), mn = e, ve = de({}, af), t) {
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
  n && (ke.delimiterOpen = Si(n[0]), ke.delimiterClose = Si(n[1]));
  const s = No = c0([], e);
  return ke.parse(mn), s.loc = Pe(0, e.length), s.children = uf(s.children), No = null, s;
}
function j0(e, t) {
  ti(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!ff(e)
  );
}
function ff(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !Oi(t[0]) ? t[0] : null;
}
function ti(e, t, n, s = !1, o = !1) {
  const { children: i } = e, r = [];
  for (let c = 0; c < i.length; c++) {
    const f = i[c];
    if (f.type === 1 && f.tagType === 0) {
      const m = s ? 0 : xt(f, n);
      if (m > 0) {
        if (m >= 2) {
          f.codegenNode.patchFlag = -1, r.push(f);
          continue;
        }
      } else {
        const _ = f.codegenNode;
        if (_.type === 13) {
          const b = _.patchFlag;
          if ((b === void 0 || b === 512 || b === 1) && hf(f, n) >= 2) {
            const D = mf(f);
            D && (_.props = n.hoist(D));
          }
          _.dynamicProps && (_.dynamicProps = n.hoist(_.dynamicProps));
        }
      }
    } else if (f.type === 12 && (s ? 0 : xt(f, n)) >= 2) {
      f.codegenNode.type === 14 && f.codegenNode.arguments.length > 0 && f.codegenNode.arguments.push(
        -1 + (W.NODE_ENV !== "production" ? ` /* ${Zs[-1]} */` : "")
      ), r.push(f);
      continue;
    }
    if (f.type === 1) {
      const m = f.tagType === 1;
      m && n.scopes.vSlot++, ti(f, e, n, !1, o), m && n.scopes.vSlot--;
    } else if (f.type === 11)
      ti(f, e, n, f.children.length === 1, !0);
    else if (f.type === 9)
      for (let m = 0; m < f.branches.length; m++)
        ti(
          f.branches[m],
          e,
          n,
          f.branches[m].children.length === 1,
          o
        );
  }
  let l = !1;
  const a = [];
  if (r.length === i.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && K(e.codegenNode.children))
      e.codegenNode.children = u(
        ns(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !K(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const c = d(e.codegenNode, "default");
      c && (a.push(n.cached.length), c.returns = u(
        ns(c.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !K(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const c = vt(e, "slot", !0), f = c && c.arg && d(t.codegenNode, c.arg);
      f && (a.push(n.cached.length), f.returns = u(
        ns(f.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const c of r)
      a.push(n.cached.length), c.codegenNode = n.cache(c.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !K(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Me(
      "__",
      ue(JSON.stringify(a), !1)
    )
  );
  function u(c) {
    const f = n.cache(c);
    return o && n.hmr && (f.needArraySpread = !0), f;
  }
  function d(c, f) {
    if (c.children && !K(c.children) && c.children.type === 15) {
      const m = c.children.properties.find(
        (_) => _.key === f || _.key.content === f
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
        const l = hf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < r && (r = l);
        for (let a = 0; a < e.children.length; a++) {
          const u = xt(e.children[a], t);
          if (u === 0)
            return n.set(e, 0), 0;
          u < r && (r = u);
        }
        if (r > 1)
          for (let a = 0; a < e.props.length; a++) {
            const u = e.props[a];
            if (u.type === 7 && u.name === "bind" && u.exp) {
              const d = xt(u.exp, t);
              if (d === 0)
                return n.set(e, 0), 0;
              d < r && (r = d);
            }
          }
        if (o.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(as), t.removeHelper(
            Rs(t.inSSR, o.isComponent)
          ), o.isBlock = !1, t.helper(Ps(t.inSSR, o.isComponent));
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
const H0 = /* @__PURE__ */ new Set([
  Wl,
  Gl,
  bo,
  $o
]);
function pf(e, t) {
  if (e.type === 14 && !re(e.callee) && H0.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return xt(n, t);
    if (n.type === 14)
      return pf(n, t);
  }
  return 0;
}
function hf(e, t) {
  let n = 3;
  const s = mf(e);
  if (s && s.type === 15) {
    const { properties: o } = s;
    for (let i = 0; i < o.length; i++) {
      const { key: r, value: l } = o[i], a = xt(r, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let u;
      if (l.type === 4 ? u = xt(l, t) : l.type === 14 ? u = pf(l, t) : u = 0, u === 0)
        return u;
      u < n && (n = u);
    }
  }
  return n;
}
function mf(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function U0(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: i = !1,
  nodeTransforms: r = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: u = Oe,
  isCustomElement: d = Oe,
  expressionPlugins: c = [],
  scopeId: f = null,
  slotted: m = !0,
  ssr: _ = !1,
  inSSR: b = !1,
  ssrCssVars: D = "",
  bindingMetadata: O = fe,
  inline: y = !1,
  isTS: h = !1,
  onError: x = Zl,
  onWarn: E = nf,
  compatConfig: V
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
    isBuiltInComponent: u,
    isCustomElement: d,
    expressionPlugins: c,
    scopeId: f,
    slotted: m,
    ssr: _,
    inSSR: b,
    ssrCssVars: D,
    bindingMetadata: O,
    inline: y,
    isTS: h,
    onError: x,
    onWarn: E,
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
    helper(g) {
      const C = N.helpers.get(g) || 0;
      return N.helpers.set(g, C + 1), g;
    },
    removeHelper(g) {
      const C = N.helpers.get(g);
      if (C) {
        const A = C - 1;
        A ? N.helpers.set(g, A) : N.helpers.delete(g);
      }
    },
    helperString(g) {
      return `_${Is[N.helper(g)]}`;
    },
    replaceNode(g) {
      if (W.NODE_ENV !== "production") {
        if (!N.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!N.parent)
          throw new Error("Cannot replace root node.");
      }
      N.parent.children[N.childIndex] = N.currentNode = g;
    },
    removeNode(g) {
      if (W.NODE_ENV !== "production" && !N.parent)
        throw new Error("Cannot remove root node.");
      const C = N.parent.children, A = g ? C.indexOf(g) : N.currentNode ? N.childIndex : -1;
      if (W.NODE_ENV !== "production" && A < 0)
        throw new Error("node being removed is not a child of current parent");
      !g || g === N.currentNode ? (N.currentNode = null, N.onNodeRemoved()) : N.childIndex > A && (N.childIndex--, N.onNodeRemoved()), N.parent.children.splice(A, 1);
    },
    onNodeRemoved: Oe,
    addIdentifiers(g) {
    },
    removeIdentifiers(g) {
    },
    hoist(g) {
      re(g) && (g = ue(g)), N.hoists.push(g);
      const C = ue(
        `_hoisted_${N.hoists.length}`,
        !1,
        g.loc,
        2
      );
      return C.hoisted = g, C;
    },
    cache(g, C = !1, A = !1) {
      const $ = u0(
        N.cached.length,
        g,
        C,
        A
      );
      return N.cached.push($), $;
    }
  };
  return N.filters = /* @__PURE__ */ new Set(), N;
}
function q0(e, t) {
  const n = U0(e, t);
  er(e, n), t.hoistStatic && j0(e, n), t.ssr || z0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function z0(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const o = ff(e);
    if (o && o.codegenNode) {
      const i = o.codegenNode;
      i.type === 13 && Ql(i, t), e.codegenNode = i;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let o = 64;
    W.NODE_ENV !== "production" && s.filter((i) => i.type !== 3).length === 1 && (o |= 2048), e.codegenNode = _o(
      t,
      n(yo),
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
function K0(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const o = e.children[n];
    re(o) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, er(o, t));
  }
}
function er(e, t) {
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
      t.ssr || t.helper(Vo);
      break;
    case 5:
      t.ssr || t.helper(Zi);
      break;
    case 9:
      for (let i = 0; i < e.branches.length; i++)
        er(e.branches[i], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      K0(e, t);
      break;
  }
  t.currentNode = e;
  let o = s.length;
  for (; o--; )
    s[o]();
}
function gf(e, t) {
  const n = re(e) ? (s) => s === e : (s) => e.test(s);
  return (s, o) => {
    if (s.type === 1) {
      const { props: i } = s;
      if (s.tagType === 3 && i.some(x0))
        return;
      const r = [];
      for (let l = 0; l < i.length; l++) {
        const a = i[l];
        if (a.type === 7 && n(a.name)) {
          i.splice(l, 1), l--;
          const u = t(s, a, o);
          u && r.push(u);
        }
      }
      return r;
    }
  };
}
const tr = "/*@__PURE__*/", vf = (e) => `${Is[e]}: _${Is[e]}`;
function W0(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: o = "template.vue.html",
  scopeId: i = null,
  optimizeImports: r = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: u = "vue/server-renderer",
  ssr: d = !1,
  isTS: c = !1,
  inSSR: f = !1
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
    ssrRuntimeModuleName: u,
    ssr: d,
    isTS: c,
    inSSR: f,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(b) {
      return `_${Is[b]}`;
    },
    push(b, D = -2, O) {
      m.code += b;
    },
    indent() {
      _(++m.indentLevel);
    },
    deindent(b = !1) {
      b ? --m.indentLevel : _(--m.indentLevel);
    },
    newline() {
      _(m.indentLevel);
    }
  };
  function _(b) {
    m.push(
      `
` + "  ".repeat(b),
      0
      /* Start */
    );
  }
  return m;
}
function G0(e, t = {}) {
  const n = W0(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: o,
    prefixIdentifiers: i,
    indent: r,
    deindent: l,
    newline: a,
    scopeId: u,
    ssr: d
  } = n, c = Array.from(e.helpers), f = c.length > 0, m = !i && s !== "module";
  Y0(e, n);
  const b = d ? "ssrRender" : "render", O = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${b}(${O}) {`), r(), m && (o("with (_ctx) {"), r(), f && (o(
    `const { ${c.map(vf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (Er(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (Er(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), Er(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let y = 0; y < e.temps; y++)
      o(`${y > 0 ? ", " : ""}_temp${y}`);
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
function Y0(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: o,
    newline: i,
    runtimeModuleName: r,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, u = l, d = Array.from(e.helpers);
  if (d.length > 0 && (o(
    `const _Vue = ${u}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const c = [
      Ll,
      Fl,
      Vo,
      Bl,
      Qd
    ].filter((f) => d.includes(f)).map(vf).join(", ");
    o(
      `const { ${c} } = _Vue
`,
      -1
      /* End */
    );
  }
  J0(e.hoists, t), i(), o("return ");
}
function Er(e, t, { helper: n, push: s, newline: o, isTS: i }) {
  const r = n(
    t === "filter" ? ql : t === "component" ? jl : Ul
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const u = a.endsWith("__self");
    u && (a = a.slice(0, -6)), s(
      `const ${wo(a, t)} = ${r}(${JSON.stringify(a)}${u ? ", true" : ""})${i ? "!" : ""}`
    ), l < e.length - 1 && o();
  }
}
function J0(e, t) {
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
function X0(e) {
  return re(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function na(e, t) {
  const n = e.length > 3 || W.NODE_ENV !== "production" && e.some((s) => K(s) || !X0(s));
  t.push("["), n && t.indent(), Ao(e, t, n), n && t.deindent(), t.push("]");
}
function Ao(e, t, n = !1, s = !0) {
  const { push: o, newline: i } = t;
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    re(l) ? o(
      l,
      -3
      /* Unknown */
    ) : K(l) ? na(l, t) : nt(l, t), r < e.length - 1 && (n ? (s && o(","), i()) : s && o(", "));
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
      W.NODE_ENV !== "production" && uc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), nt(e.codegenNode, t);
      break;
    case 2:
      Q0(e, t);
      break;
    case 4:
      yf(e, t);
      break;
    case 5:
      Z0(e, t);
      break;
    case 12:
      nt(e.codegenNode, t);
      break;
    case 8:
      bf(e, t);
      break;
    case 3:
      tv(e, t);
      break;
    case 13:
      nv(e, t);
      break;
    case 14:
      ov(e, t);
      break;
    case 15:
      iv(e, t);
      break;
    case 17:
      rv(e, t);
      break;
    case 18:
      lv(e, t);
      break;
    case 19:
      av(e, t);
      break;
    case 20:
      cv(e, t);
      break;
    case 21:
      Ao(e.body, t, !0, !1);
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
        return uc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function Q0(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function yf(e, t) {
  const { content: n, isStatic: s } = e;
  t.push(
    s ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Z0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(tr), n(`${s(Zi)}(`), nt(e.content, t), n(")");
}
function bf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    re(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : nt(s, t);
  }
}
function ev(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), bf(e, t), n("]");
  else if (e.isStatic) {
    const s = ea(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function tv(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(tr), n(
    `${s(Vo)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function nv(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: i,
    props: r,
    children: l,
    patchFlag: a,
    dynamicProps: u,
    directives: d,
    isBlock: c,
    disableTracking: f,
    isComponent: m
  } = e;
  let _;
  if (a)
    if (W.NODE_ENV !== "production")
      if (a < 0)
        _ = a + ` /* ${Zs[a]} */`;
      else {
        const D = Object.keys(Zs).map(Number).filter((O) => O > 0 && a & O).map((O) => Zs[O]).join(", ");
        _ = a + ` /* ${D} */`;
      }
    else
      _ = String(a);
  d && n(s(zl) + "("), c && n(`(${s(as)}(${f ? "true" : ""}), `), o && n(tr);
  const b = c ? Rs(t.inSSR, m) : Ps(t.inSSR, m);
  n(s(b) + "(", -2, e), Ao(
    sv([i, r, l, _, u]),
    t
  ), n(")"), c && n(")"), d && (n(", "), nt(d, t), n(")"));
}
function sv(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function ov(e, t) {
  const { push: n, helper: s, pure: o } = t, i = re(e.callee) ? e.callee : s(e.callee);
  o && n(tr), n(i + "(", -2, e), Ao(e.arguments, t), n(")");
}
function iv(e, t) {
  const { push: n, indent: s, deindent: o, newline: i } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const l = r.length > 1 || W.NODE_ENV !== "production" && r.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < r.length; a++) {
    const { key: u, value: d } = r[a];
    ev(u, t), n(": "), nt(d, t), a < r.length - 1 && (n(","), i());
  }
  l && o(), n(l ? "}" : " }");
}
function rv(e, t) {
  na(e.elements, t);
}
function lv(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: i, returns: r, body: l, newline: a, isSlot: u } = e;
  u && n(`_${Is[Jl]}(`), n("(", -2, e), K(i) ? Ao(i, t) : i && nt(i, t), n(") => "), (a || l) && (n("{"), s()), r ? (a && n("return "), K(r) ? na(r, t) : nt(r, t)) : l && nt(l, t), (a || l) && (o(), n("}")), u && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function av(e, t) {
  const { test: n, consequent: s, alternate: o, newline: i } = e, { push: r, indent: l, deindent: a, newline: u } = t;
  if (n.type === 4) {
    const c = !ea(n.content);
    c && r("("), yf(n, t), c && r(")");
  } else
    r("("), nt(n, t), r(")");
  i && l(), t.indentLevel++, i || r(" "), r("? "), nt(s, t), t.indentLevel--, i && u(), i || r(" "), r(": ");
  const d = o.type === 19;
  d || t.indentLevel++, nt(o, t), d || t.indentLevel--, i && a(
    !0
    /* without newline */
  );
}
function cv(e, t) {
  const { push: n, helper: s, indent: o, deindent: i, newline: r } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(xi)}(-1`), e.inVOnce && n(", true"), n("),"), r(), n("(")), n(`_cache[${e.index}] = `), nt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), r(), n(`${s(xi)}(1),`), r(), n(`_cache[${e.index}]`), i()), n(")"), a && n(")]");
}
const uv = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), dv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Yn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (i) {
      let r = i.message;
      const l = o.replace(dv, "").match(uv);
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
const fv = (e, t) => {
  if (e.type === 5)
    e.content = wr(
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
        !(n && r && r.type === 4 && r.content === "key") && (o.exp = wr(
          i,
          t,
          // slot args must be processed as function params
          o.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (o.arg = wr(r, t));
      }
    }
  }
};
function wr(e, t, n = !1, s = !1, o = Object.create(t.identifiers)) {
  return W.NODE_ENV !== "production" && Yn(e, t, n, s), e;
}
const pv = gf(
  /^(if|else|else-if)$/,
  (e, t, n) => hv(e, t, n, (s, o, i) => {
    const r = n.parent.children;
    let l = r.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const u = r[l];
      u && u.type === 9 && (a += u.branches.length);
    }
    return () => {
      if (i)
        s.codegenNode = vc(
          o,
          a,
          n
        );
      else {
        const u = gv(s.codegenNode);
        u.alternate = vc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function hv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      Ne(28, t.loc)
    ), t.exp = ue("true", !1, o);
  }
  if (W.NODE_ENV !== "production" && t.exp && Yn(t.exp, n), t.name === "if") {
    const o = gc(e, t), i = {
      type: 9,
      loc: R0(e.loc),
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
        const a = gc(e, t);
        if (W.NODE_ENV !== "production" && i.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...i, ...a.children]), W.NODE_ENV !== "production") {
          const d = a.userKey;
          d && l.branches.forEach(({ userKey: c }) => {
            mv(c, d) && n.onError(
              Ne(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const u = s && s(l, a, !1);
        er(a, n), u && u(), n.currentNode = null;
      } else
        n.onError(
          Ne(30, e.loc)
        );
      break;
    }
  }
}
function gc(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !vt(e, "for") ? e.children : [e],
    userKey: Eo(e, "key"),
    isTemplateIf: n
  };
}
function vc(e, t, n) {
  return e.condition ? Xr(
    e.condition,
    yc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    He(n.helper(Vo), [
      W.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : yc(e, t, n);
}
function yc(e, t, n) {
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
      return Ti(a, o, n), a;
    } else {
      let a = 64;
      return W.NODE_ENV !== "production" && !e.isTemplateIf && i.filter((u) => u.type !== 3).length === 1 && (a |= 2048), _o(
        n,
        s(yo),
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
    const a = r.codegenNode, u = C0(a);
    return u.type === 13 && Ql(u, n), Ti(u, o, n), a;
  }
}
function mv(e, t) {
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
function gv(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const vv = (e, t, n) => {
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
    _f(e), r = e.exp;
  }
  return i.type !== 4 ? (i.children.unshift("("), i.children.push(') || ""')) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : '""'), s.some((l) => l.content === "camel") && (i.type === 4 ? i.isStatic ? i.content = Se(i.content) : i.content = `${n.helperString(Yr)}(${i.content})` : (i.children.unshift(`${n.helperString(Yr)}(`), i.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && bc(i, "."), s.some((l) => l.content === "attr") && bc(i, "^")), {
    props: [Me(i, r)]
  };
}, _f = (e, t) => {
  const n = e.arg, s = Se(n.content);
  e.exp = ue(s, !1, n.loc);
}, bc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, yv = gf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return bv(e, t, n, (i) => {
      const r = He(s(Kl), [
        i.source
      ]), l = ki(e), a = vt(e, "memo"), u = Eo(e, "key", !1, !0);
      u && u.type === 7 && !u.exp && _f(u);
      let c = u && (u.type === 6 ? u.value ? ue(u.value.content, !0) : void 0 : u.exp);
      const f = u && c ? Me("key", c) : null, m = i.source.type === 4 && i.source.constType > 0, _ = m ? 64 : u ? 128 : 256;
      return i.codegenNode = _o(
        n,
        s(yo),
        void 0,
        r,
        _,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let b;
        const { children: D } = i;
        W.NODE_ENV !== "production" && l && e.children.some((h) => {
          if (h.type === 1) {
            const x = Eo(h, "key");
            if (x)
              return n.onError(
                Ne(
                  33,
                  x.loc
                )
              ), !0;
          }
        });
        const O = D.length !== 1 || D[0].type !== 1, y = Oi(e) ? e : l && e.children.length === 1 && Oi(e.children[0]) ? e.children[0] : null;
        if (y ? (b = y.codegenNode, l && f && Ti(b, f, n)) : O ? b = _o(
          n,
          s(yo),
          f ? Tt([f]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (b = D[0].codegenNode, l && f && Ti(b, f, n), b.isBlock !== !m && (b.isBlock ? (o(as), o(
          Rs(n.inSSR, b.isComponent)
        )) : o(
          Ps(n.inSSR, b.isComponent)
        )), b.isBlock = !m, b.isBlock ? (s(as), s(Rs(n.inSSR, b.isComponent))) : s(Ps(n.inSSR, b.isComponent))), a) {
          const h = Ms(
            tl(i.parseResult, [
              ue("_cached")
            ])
          );
          h.body = d0([
            Ut(["const _memo = (", a.exp, ")"]),
            Ut([
              "if (_cached",
              ...c ? [" && _cached.key === ", c] : [],
              ` && ${n.helperString(
                tf
              )}(_cached, _memo)) return _cached`
            ]),
            Ut(["const _item = ", b]),
            ue("_item.memo = _memo"),
            ue("return _item")
          ]), r.arguments.push(
            h,
            ue("_cache"),
            ue(String(n.cached.length))
          ), n.cached.push(null);
        } else
          r.arguments.push(
            Ms(
              tl(i.parseResult),
              b,
              !0
            )
          );
      };
    });
  }
);
function bv(e, t, n, s) {
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
  Ef(o, n);
  const { addIdentifiers: i, removeIdentifiers: r, scopes: l } = n, { source: a, value: u, key: d, index: c } = o, f = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: u,
    keyAlias: d,
    objectIndexAlias: c,
    parseResult: o,
    children: ki(e) ? e.children : [e]
  };
  n.replaceNode(f), l.vFor++;
  const m = s && s(f);
  return () => {
    l.vFor--, m && m();
  };
}
function Ef(e, t) {
  e.finalized || (W.NODE_ENV !== "production" && (Yn(e.source, t), e.key && Yn(
    e.key,
    t,
    !0
  ), e.index && Yn(
    e.index,
    t,
    !0
  ), e.value && Yn(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function tl({ value: e, key: t, index: n }, s = []) {
  return _v([e, t, n, ...s]);
}
function _v(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || ue("_".repeat(s + 1), !1));
}
const _c = ue("undefined", !1), Ev = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = vt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, wv = (e, t, n, s) => Ms(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function Nv(e, t, n = wv) {
  t.helper(Jl);
  const { children: s, loc: o } = e, i = [], r = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = vt(e, "slot", !0);
  if (a) {
    const { arg: D, exp: O } = a;
    D && !yt(D) && (l = !0), i.push(
      Me(
        D || ue("default", !0),
        n(O, void 0, s, o)
      )
    );
  }
  let u = !1, d = !1;
  const c = [], f = /* @__PURE__ */ new Set();
  let m = 0;
  for (let D = 0; D < s.length; D++) {
    const O = s[D];
    let y;
    if (!ki(O) || !(y = vt(O, "slot", !0))) {
      O.type !== 3 && c.push(O);
      continue;
    }
    if (a) {
      t.onError(
        Ne(37, y.loc)
      );
      break;
    }
    u = !0;
    const { children: h, loc: x } = O, {
      arg: E = ue("default", !0),
      exp: V,
      loc: P
    } = y;
    let N;
    yt(E) ? N = E ? E.content : "default" : l = !0;
    const g = vt(O, "for"), C = n(V, g, h, x);
    let A, $;
    if (A = vt(O, "if"))
      l = !0, r.push(
        Xr(
          A.exp,
          zo(E, C, m++),
          _c
        )
      );
    else if ($ = vt(
      O,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let L = D, J;
      for (; L-- && (J = s[L], !(J.type !== 3 && nl(J))); )
        ;
      if (J && ki(J) && vt(J, /^(else-)?if$/)) {
        let ee = r[r.length - 1];
        for (; ee.alternate.type === 19; )
          ee = ee.alternate;
        ee.alternate = $.exp ? Xr(
          $.exp,
          zo(
            E,
            C,
            m++
          ),
          _c
        ) : zo(E, C, m++);
      } else
        t.onError(
          Ne(30, $.loc)
        );
    } else if (g) {
      l = !0;
      const L = g.forParseResult;
      L ? (Ef(L, t), r.push(
        He(t.helper(Kl), [
          L.source,
          Ms(
            tl(L),
            zo(E, C),
            !0
          )
        ])
      )) : t.onError(
        Ne(
          32,
          g.loc
        )
      );
    } else {
      if (N) {
        if (f.has(N)) {
          t.onError(
            Ne(
              38,
              P
            )
          );
          continue;
        }
        f.add(N), N === "default" && (d = !0);
      }
      i.push(Me(E, C));
    }
  }
  if (!a) {
    const D = (O, y) => {
      const h = n(O, void 0, y, o);
      return t.compatConfig && (h.isNonScopedSlot = !0), Me("default", h);
    };
    u ? c.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    c.some((O) => nl(O)) && (d ? t.onError(
      Ne(
        39,
        c[0].loc
      )
    ) : i.push(
      D(void 0, c)
    )) : i.push(D(void 0, s));
  }
  const _ = l ? 2 : ni(e.children) ? 3 : 1;
  let b = Tt(
    i.concat(
      Me(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ue(
          _ + (W.NODE_ENV !== "production" ? ` /* ${Xf[_]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return r.length && (b = He(t.helper(ef), [
    b,
    ns(r)
  ])), {
    slots: b,
    hasDynamicSlots: l
  };
}
function zo(e, t, n) {
  const s = [
    Me("name", e),
    Me("fn", t)
  ];
  return n != null && s.push(
    Me("key", ue(String(n), !0))
  ), Tt(s);
}
function ni(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || ni(n.children))
          return !0;
        break;
      case 9:
        if (ni(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (ni(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function nl(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : nl(e.content);
}
const wf = /* @__PURE__ */ new WeakMap(), xv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, i = e.tagType === 1;
  let r = i ? Sv(e, t) : `"${s}"`;
  const l = me(r) && r.callee === Hl;
  let a, u, d = 0, c, f, m, _ = (
    // dynamic component may resolve to plain elements
    l || r === ao || r === Rl || !i && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const b = Nf(
      e,
      t,
      void 0,
      i,
      l
    );
    a = b.props, d = b.patchFlag, f = b.dynamicPropNames;
    const D = b.directives;
    m = D && D.length ? ns(
      D.map((O) => kv(O, t))
    ) : void 0, b.shouldUseBlock && (_ = !0);
  }
  if (e.children.length > 0)
    if (r === wi && (_ = !0, d |= 1024, W.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Ne(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), i && // Teleport is not a real component and has dedicated runtime handling
    r !== ao && // explained above.
    r !== wi) {
      const { slots: D, hasDynamicSlots: O } = Nv(e, t);
      u = D, O && (d |= 1024);
    } else if (e.children.length === 1 && r !== ao) {
      const D = e.children[0], O = D.type, y = O === 5 || O === 8;
      y && xt(D, t) === 0 && (d |= 1), y || O === 2 ? u = D : u = e.children;
    } else
      u = e.children;
  f && f.length && (c = Ov(f)), e.codegenNode = _o(
    t,
    r,
    a,
    u,
    d === 0 ? void 0 : d,
    c,
    m,
    !!_,
    !1,
    i,
    e.loc
  );
};
function Sv(e, t, n = !1) {
  let { tag: s } = e;
  const o = sl(s), i = Eo(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (i)
    if (o || Pn(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (i.type === 6 ? l = i.value && ue(i.value.content, !0) : (l = i.exp, l || (l = ue("is", !1, i.arg.loc))), l)
        return He(t.helper(Hl), [
          l
        ]);
    } else i.type === 6 && i.value.content.startsWith("vue:") && (s = i.value.content.slice(4));
  const r = sf(s) || t.isBuiltInComponent(s);
  return r ? (n || t.helper(r), r) : (t.helper(jl), t.components.add(s), wo(s, "component"));
}
function Nf(e, t, n = e.props, s, o, i = !1) {
  const { tag: r, loc: l, children: a } = e;
  let u = [];
  const d = [], c = [], f = a.length > 0;
  let m = !1, _ = 0, b = !1, D = !1, O = !1, y = !1, h = !1, x = !1;
  const E = [], V = (C) => {
    u.length && (d.push(
      Tt(Ec(u), l)
    ), u = []), C && d.push(C);
  }, P = () => {
    t.scopes.vFor > 0 && u.push(
      Me(
        ue("ref_for", !0),
        ue("true")
      )
    );
  }, N = ({ key: C, value: A }) => {
    if (yt(C)) {
      const $ = C.content, L = gn($);
      if (L && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      $.toLowerCase() !== "onclick" && // omit v-model handlers
      $ !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !An($) && (y = !0), L && An($) && (x = !0), L && A.type === 14 && (A = A.arguments[0]), A.type === 20 || (A.type === 4 || A.type === 8) && xt(A, t) > 0)
        return;
      $ === "ref" ? b = !0 : $ === "class" ? D = !0 : $ === "style" ? O = !0 : $ !== "key" && !E.includes($) && E.push($), s && ($ === "class" || $ === "style") && !E.includes($) && E.push($);
    } else
      h = !0;
  };
  for (let C = 0; C < n.length; C++) {
    const A = n[C];
    if (A.type === 6) {
      const { loc: $, name: L, nameLoc: J, value: ee } = A;
      let Z = !0;
      if (L === "ref" && (b = !0, P()), L === "is" && (sl(r) || ee && ee.content.startsWith("vue:") || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      u.push(
        Me(
          ue(L, !0, J),
          ue(
            ee ? ee.content : "",
            Z,
            ee ? ee.loc : $
          )
        )
      );
    } else {
      const { name: $, arg: L, exp: J, loc: ee, modifiers: Z } = A, se = $ === "bind", Q = $ === "on";
      if ($ === "slot") {
        s || t.onError(
          Ne(40, ee)
        );
        continue;
      }
      if ($ === "once" || $ === "memo" || $ === "is" || se && Dn(L, "is") && (sl(r) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || Q && i)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (se && Dn(L, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        Q && f && Dn(L, "vue:before-update")) && (m = !0), se && Dn(L, "ref") && P(), !L && (se || Q)
      ) {
        if (h = !0, J)
          if (se) {
            if (V(), W.NODE_ENV !== "production" && d.some((Ct) => Ct.type === 15 ? Ct.properties.some(({ key: kt }) => kt.type !== 4 || !kt.isStatic ? !0 : kt.content !== "class" && kt.content !== "style" && !gn(kt.content)) : !0) && Ls(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              ee
            ), Pn(
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
              callee: t.helper(Yl),
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
      se && Z.some((ft) => ft.content === "prop") && (_ |= 32);
      const Ee = t.directiveTransforms[$];
      if (Ee) {
        const { props: ft, needRuntime: Ct } = Ee(A, e, t);
        !i && ft.forEach(N), Q && L && !yt(L) ? V(Tt(ft, l)) : u.push(...ft), Ct && (c.push(A), bt(Ct) && wf.set(A, Ct));
      } else Ic($) || (c.push(A), f && (m = !0));
    }
  }
  let g;
  if (d.length ? (V(), d.length > 1 ? g = He(
    t.helper(Ni),
    d,
    l
  ) : g = d[0]) : u.length && (g = Tt(
    Ec(u),
    l
  )), h ? _ |= 16 : (D && !s && (_ |= 2), O && !s && (_ |= 4), E.length && (_ |= 8), y && (_ |= 32)), !m && (_ === 0 || _ === 32) && (b || x || c.length > 0) && (_ |= 512), !t.inSSR && g)
    switch (g.type) {
      case 15:
        let C = -1, A = -1, $ = !1;
        for (let ee = 0; ee < g.properties.length; ee++) {
          const Z = g.properties[ee].key;
          yt(Z) ? Z.content === "class" ? C = ee : Z.content === "style" && (A = ee) : Z.isHandlerKey || ($ = !0);
        }
        const L = g.properties[C], J = g.properties[A];
        $ ? g = He(
          t.helper(bo),
          [g]
        ) : (L && !yt(L.value) && (L.value = He(
          t.helper(Wl),
          [L.value]
        )), J && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (O || J.value.type === 4 && J.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        J.value.type === 17) && (J.value = He(
          t.helper(Gl),
          [J.value]
        )));
        break;
      case 14:
        break;
      default:
        g = He(
          t.helper(bo),
          [
            He(t.helper($o), [
              g
            ])
          ]
        );
        break;
    }
  return {
    props: g,
    directives: c,
    patchFlag: _,
    dynamicPropNames: E,
    shouldUseBlock: m
  };
}
function Ec(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.key.type === 8 || !o.key.isStatic) {
      n.push(o);
      continue;
    }
    const i = o.key.content, r = t.get(i);
    r ? (i === "style" || i === "class" || gn(i)) && Cv(r, o) : (t.set(i, o), n.push(o));
  }
  return n;
}
function Cv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ns(
    [e.value, t.value],
    e.loc
  );
}
function kv(e, t) {
  const n = [], s = wf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Ul), t.directives.add(e.name), n.push(wo(e.name, "directive")));
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
  return ns(n, e.loc);
}
function Ov(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function sl(e) {
  return e === "component" || e === "Component";
}
const Tv = (e, t) => {
  if (Oi(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: i } = Dv(e, t), r = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    i && (r[2] = i, l = 3), n.length && (r[3] = Ms([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), r.splice(l), e.codegenNode = He(
      t.helper(Zd),
      r,
      s
    );
  }
};
function Dv(e, t) {
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
    const { props: i, directives: r } = Nf(
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
const xf = (e, t, n, s) => {
  const { loc: o, modifiers: i, arg: r } = e;
  !e.exp && !i.length && n.onError(Ne(35, o));
  let l;
  if (r.type === 4)
    if (r.isStatic) {
      let c = r.content;
      W.NODE_ENV !== "production" && c.startsWith("vnode") && n.onError(Ne(51, r.loc)), c.startsWith("vue:") && (c = `vnode-${c.slice(4)}`);
      const f = t.tagType !== 0 || c.startsWith("vnode") || !/[A-Z]/.test(c) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Zt(Se(c))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${c}`
      );
      l = ue(f, !0, r.loc);
    } else
      l = Ut([
        `${n.helperString(Jr)}(`,
        r,
        ")"
      ]);
  else
    l = r, l.children.unshift(`${n.helperString(Jr)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let u = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const c = rf(a), f = !(c || w0(a)), m = a.content.includes(";");
    W.NODE_ENV !== "production" && Yn(
      a,
      n,
      !1,
      m
    ), (f || u && c) && (a = Ut([
      `${f ? "$event" : "(...args)"} => ${m ? "{" : "("}`,
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
  return s && (d = s(d)), u && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((c) => c.key.isHandlerKey = !0), d;
}, Vv = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, o = !1;
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        if (_r(r)) {
          o = !0;
          for (let l = i + 1; l < n.length; l++) {
            const a = n[l];
            if (_r(a))
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
          if (_r(r) || r.type === 8) {
            const l = [];
            (r.type !== 2 || r.content !== " ") && l.push(r), !t.ssr && xt(r, t) === 0 && l.push(
              1 + (W.NODE_ENV !== "production" ? ` /* ${Zs[1]} */` : "")
            ), n[i] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: He(
                t.helper(Bl),
                l
              )
            };
          }
        }
    };
}, wc = /* @__PURE__ */ new WeakSet(), $v = (e, t) => {
  if (e.type === 1 && vt(e, "once", !0))
    return wc.has(e) || t.inVOnce || t.inSSR ? void 0 : (wc.add(e), t.inVOnce = !0, t.helper(xi), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, Sf = (e, t, n) => {
  const { exp: s, arg: o } = e;
  if (!s)
    return n.onError(
      Ne(41, e.loc)
    ), Ko();
  const i = s.loc.source.trim(), r = s.type === 4 ? s.content : i, l = n.bindingMetadata[i];
  if (l === "props" || l === "props-aliased")
    return n.onError(Ne(44, s.loc)), Ko();
  if (!r.trim() || !rf(s))
    return n.onError(
      Ne(42, s.loc)
    ), Ko();
  const a = o || ue("modelValue", !0), u = o ? yt(o) ? `onUpdate:${Se(o.content)}` : Ut(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let d;
  const c = n.isTS ? "($event: any)" : "$event";
  d = Ut([
    `${c} => ((`,
    s,
    ") = $event)"
  ]);
  const f = [
    // modelValue: foo
    Me(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Me(u, d)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((b) => b.content).map((b) => (ea(b) ? b : JSON.stringify(b)) + ": true").join(", "), _ = o ? yt(o) ? `${o.content}Modifiers` : Ut([o, ' + "Modifiers"']) : "modelModifiers";
    f.push(
      Me(
        _,
        ue(
          `{ ${m} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return Ko(f);
};
function Ko(e = []) {
  return { props: e };
}
const Av = /[\w).+\-_$\]]/, Iv = (e, t) => {
  Pn("COMPILER_FILTERS", t) && (e.type === 5 ? Di(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Di(n.exp, t);
  }));
};
function Di(e, t) {
  if (e.type === 4)
    Nc(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? Nc(s, t) : s.type === 8 ? Di(e, t) : s.type === 5 && Di(s.content, t));
    }
}
function Nc(e, t) {
  const n = e.content;
  let s = !1, o = !1, i = !1, r = !1, l = 0, a = 0, u = 0, d = 0, c, f, m, _, b = [];
  for (m = 0; m < n.length; m++)
    if (f = c, c = n.charCodeAt(m), s)
      c === 39 && f !== 92 && (s = !1);
    else if (o)
      c === 34 && f !== 92 && (o = !1);
    else if (i)
      c === 96 && f !== 92 && (i = !1);
    else if (r)
      c === 47 && f !== 92 && (r = !1);
    else if (c === 124 && // pipe
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !u)
      _ === void 0 ? (d = m + 1, _ = n.slice(0, m).trim()) : D();
    else {
      switch (c) {
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
          u++;
          break;
        case 41:
          u--;
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
      if (c === 47) {
        let O = m - 1, y;
        for (; O >= 0 && (y = n.charAt(O), y === " "); O--)
          ;
        (!y || !Av.test(y)) && (r = !0);
      }
    }
  _ === void 0 ? _ = n.slice(0, m).trim() : d !== 0 && D();
  function D() {
    b.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (b.length) {
    for (W.NODE_ENV !== "production" && Ci(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < b.length; m++)
      _ = Mv(_, b[m], t);
    e.content = _, e.ast = void 0;
  }
}
function Mv(e, t, n) {
  n.helper(ql);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${wo(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), i = t.slice(s + 1);
    return n.filters.add(o), `${wo(o, "filter")}(${e}${i !== ")" ? "," + i : i}`;
  }
}
const xc = /* @__PURE__ */ new WeakSet(), Pv = (e, t) => {
  if (e.type === 1) {
    const n = vt(e, "memo");
    return !n || xc.has(e) ? void 0 : (xc.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Ql(s, t), e.codegenNode = He(t.helper(Xl), [
        n.exp,
        Ms(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Rv(e) {
  return [
    [
      $v,
      pv,
      Pv,
      yv,
      Iv,
      ...W.NODE_ENV !== "production" ? [fv] : [],
      Tv,
      xv,
      Ev,
      Vv
    ],
    {
      on: xf,
      bind: vv,
      model: Sf
    }
  ];
}
function Lv(e, t = {}) {
  const n = t.onError || Zl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(Ne(47)) : s && n(Ne(48));
  const o = !1;
  t.cacheHandlers && n(Ne(49)), t.scopeId && !s && n(Ne(50));
  const i = de({}, t, {
    prefixIdentifiers: o
  }), r = re(e) ? B0(e, i) : e, [l, a] = Rv();
  return q0(
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
  ), G0(r, i);
}
const Fv = () => ({ props: [] });
var st = {};
const Cf = Symbol(st.NODE_ENV !== "production" ? "vModelRadio" : ""), kf = Symbol(
  st.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Of = Symbol(st.NODE_ENV !== "production" ? "vModelText" : ""), Tf = Symbol(
  st.NODE_ENV !== "production" ? "vModelSelect" : ""
), ol = Symbol(
  st.NODE_ENV !== "production" ? "vModelDynamic" : ""
), Df = Symbol(
  st.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Vf = Symbol(
  st.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), $f = Symbol(st.NODE_ENV !== "production" ? "vShow" : ""), sa = Symbol(st.NODE_ENV !== "production" ? "Transition" : ""), Af = Symbol(
  st.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
a0({
  [Cf]: "vModelRadio",
  [kf]: "vModelCheckbox",
  [Of]: "vModelText",
  [Tf]: "vModelSelect",
  [ol]: "vModelDynamic",
  [Df]: "withModifiers",
  [Vf]: "withKeys",
  [$f]: "vShow",
  [sa]: "Transition",
  [Af]: "TransitionGroup"
});
let ms;
function Bv(e, t = !1) {
  return ms || (ms = document.createElement("div")), t ? (ms.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, ms.children[0].getAttribute("foo")) : (ms.innerHTML = e, ms.textContent);
}
const jv = {
  parseMode: "html",
  isVoidTag: up,
  isNativeTag: (e) => Pc(e) || Rc(e) || Lc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Bv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return sa;
    if (e === "TransitionGroup" || e === "transition-group")
      return Af;
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
}, Hv = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ue("style", !0, t.loc),
      exp: Uv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Uv = (e, t) => {
  const n = Mc(e);
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
    st.NODE_ENV !== "production" ? qv : void 0
  );
}
const qv = {
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
}, zv = (e, t, n) => {
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
}, Kv = (e, t, n) => {
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
          n.helperString(Zi),
          [s],
          o
        ) : ue("", !0)
      )
    ]
  };
}, Wv = (e, t, n) => {
  const s = Sf(e, t, n);
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
    let l = Of, a = !1;
    if (i === "input" || r) {
      const u = Eo(t, "type");
      if (u) {
        if (u.type === 7)
          l = ol;
        else if (u.value)
          switch (u.value.content) {
            case "radio":
              l = Cf;
              break;
            case "checkbox":
              l = kf;
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
      } else N0(t) ? l = ol : st.NODE_ENV !== "production" && o();
    } else i === "select" ? l = Tf : st.NODE_ENV !== "production" && o();
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
}, Gv = /* @__PURE__ */ qe("passive,once,capture"), Yv = /* @__PURE__ */ qe(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Jv = /* @__PURE__ */ qe("left,right"), If = /* @__PURE__ */ qe("onkeyup,onkeydown,onkeypress"), Xv = (e, t, n, s) => {
  const o = [], i = [], r = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ls(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Gv(a) ? r.push(a) : Jv(a) ? yt(e) ? If(e.content.toLowerCase()) ? o.push(a) : i.push(a) : (o.push(a), i.push(a)) : Yv(a) ? i.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: i,
    eventOptionModifiers: r
  };
}, Sc = (e, t) => yt(e) && e.content.toLowerCase() === "onclick" ? ue(t, !0) : e.type !== 4 ? Ut([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Qv = (e, t, n) => xf(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: i, value: r } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: u } = Xv(i, o, n, e.loc);
  if (a.includes("right") && (i = Sc(i, "onContextmenu")), a.includes("middle") && (i = Sc(i, "onMouseup")), a.length && (r = He(n.helper(Df), [
    r,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!yt(i) || If(i.content.toLowerCase())) && (r = He(n.helper(Vf), [
    r,
    JSON.stringify(l)
  ])), u.length) {
    const d = u.map(on).join("");
    i = yt(i) ? ue(`${i.content}${d}`, !0) : Ut(["(", i, `) + "${d}"`]);
  }
  return {
    props: [Me(i, r)]
  };
}), Zv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Bt(61, o)
  ), {
    props: [],
    needRuntime: n.helper($f)
  };
}, ey = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === sa)
    return () => {
      if (!e.children.length)
        return;
      Mf(e) && t.onError(
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
function Mf(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Mf);
}
const ty = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (st.NODE_ENV !== "production" && t.onError(
    Bt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function ny(e, t) {
  return e === "template" ? !0 : e in Cc ? Cc[e].has(t) : t in kc ? kc[t].has(e) : !(e in Oc && Oc[e].has(t) || t in Tc && Tc[t].has(e));
}
const gs = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), zn = /* @__PURE__ */ new Set([]), Cc = {
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
}, kc = {
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
}, Oc = {
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
}, Tc = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: gs,
  h2: gs,
  h3: gs,
  h4: gs,
  h5: gs,
  h6: gs
}, sy = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !ny(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, oy = [
  Hv,
  ...st.NODE_ENV !== "production" ? [ey, sy] : []
], iy = {
  cloak: Fv,
  html: zv,
  text: Kv,
  model: Wv,
  // override compiler-core
  on: Qv,
  // override compiler-core
  show: Zv
};
function ry(e, t = {}) {
  return Lv(
    e,
    de({}, jv, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ty,
        ...oy,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: de(
        {},
        iy,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Qs = {};
function ly() {
  Sd();
}
Qs.NODE_ENV !== "production" && ly();
const Dc = /* @__PURE__ */ Object.create(null);
function ay(e, t) {
  if (!re(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Qs.NODE_ENV !== "production" && Ae("invalid template option: ", e), Oe;
  const n = Jf(e, t), s = Dc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Qs.NODE_ENV !== "production" && !a && Ae(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const o = de(
    {
      hoistStatic: !0,
      onError: Qs.NODE_ENV !== "production" ? r : void 0,
      onWarn: Qs.NODE_ENV !== "production" ? (a) => r(a, !0) : Oe
    },
    t
  );
  !o.isCustomElement && typeof customElements < "u" && (o.isCustomElement = (a) => !!customElements.get(a));
  const { code: i } = ry(e, o);
  function r(a, u = !1) {
    const d = u ? a.message : `Template compilation error: ${a.message}`, c = a.loc && ep(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Ae(c ? `${d}
${c}` : d);
  }
  const l = new Function("Vue", i)(n0);
  return l._rc = !0, Dc[n] = l;
}
Ed(ay);
const it = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, cy = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, uy = {
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
      const u = {};
      if (n.rounded === "full" ? u.borderRadius = "9999px" : n.rounded === "none" ? u.borderRadius = "0" : n.buttonRadius !== null ? u.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius : u.borderRadius = "var(--button-radius, 6px)", n.variant === "primary") {
        const d = o.value && n.primaryBgHover ? n.primaryBgHover : n.primaryBg;
        d && (u.backgroundColor = d), n.primaryText && (u.color = n.primaryText);
      } else if (n.variant === "secondary") {
        const d = o.value && n.secondaryBgHover ? n.secondaryBgHover : n.secondaryBg;
        d && (u.backgroundColor = d), n.secondaryText && (u.color = n.secondaryText), n.secondaryBorder && (u.borderColor = n.secondaryBorder);
      }
      return u;
    }), l = te(() => {
      const u = [
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      ];
      n.fullWidth && u.push("w-full");
      const d = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
      };
      return u.push(d[n.size]), n.variant === "primary" ? u.push(
        "bg-[var(--button-primary-bg,#dc2626)]",
        "hover:bg-[var(--button-primary-bg-hover,#b91c1c)]",
        "text-[var(--button-primary-text,white)]",
        "border border-transparent",
        "shadow-sm",
        "focus:ring-[var(--button-primary-bg,#dc2626)]"
      ) : n.variant === "secondary" ? u.push(
        "bg-[var(--button-secondary-bg,white)]",
        "hover:bg-[var(--button-secondary-bg-hover,#f9fafb)]",
        "text-[var(--button-secondary-text,#374151)]",
        "border border-[var(--button-secondary-border,#d1d5db)]",
        "shadow-sm",
        "focus:ring-[var(--button-primary-bg,#dc2626)]"
      ) : n.variant === "outline" ? u.push(
        "bg-transparent",
        "hover:bg-gray-50",
        "text-gray-700",
        "border-2 border-gray-300",
        "hover:border-gray-400",
        "focus:ring-gray-500"
      ) : n.variant === "ghost" ? u.push(
        "bg-transparent",
        "hover:bg-gray-100",
        "text-gray-700",
        "hover:text-gray-900",
        "focus:ring-gray-500"
      ) : n.variant === "link" && u.push(
        "bg-transparent",
        "text-[var(--button-primary-bg,#dc2626)]",
        "hover:text-[var(--button-primary-bg-hover,#b91c1c)]",
        "underline",
        "hover:no-underline",
        "p-0",
        "focus:ring-0"
      ), u.join(" ");
    }), a = (u) => {
      !n.disabled && !n.loading && s("click", u);
    };
    return (u, d) => (k(), _t(Cl(i.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ie(l.value),
      style: dt(r.value),
      onClick: a,
      onMouseenter: d[0] || (d[0] = (c) => o.value = !0),
      onMouseleave: d[1] || (d[1] = (c) => o.value = !1)
    }, {
      default: Ge(() => [
        e.loading ? (k(), T("svg", cy, d[2] || (d[2] = [
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
        Bn(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, xs = /* @__PURE__ */ it(uy, [["__scopeId", "data-v-023a6e93"]]), dy = ["disabled"], fy = ["value", "min", "max"], py = ["disabled"], hy = {
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
        var f, m, _;
        const c = Math.max(n.min, Math.min(n.max, d));
        if (s("update:modelValue", c), s("update", c), ((_ = (m = (f = o == null ? void 0 : o.vnode) == null ? void 0 : f.el) == null ? void 0 : m.parentElement) == null ? void 0 : _.tagName) === "QUANTITY-SELECTOR") {
          const b = o.vnode.el.parentElement, D = b.getAttribute("data-line-key");
          if (D) {
            const O = new CustomEvent("quantity-update", {
              detail: { key: D, value: c },
              bubbles: !0
            });
            b.dispatchEvent(O);
          }
        }
      }
    }), r = () => {
      i.value > n.min && (i.value = i.value - n.step);
    }, l = () => {
      i.value < n.max && (i.value = i.value + n.step);
    }, a = (d) => {
      const c = parseInt(d.target.value) || n.min;
      i.value = c;
    }, u = (d) => {
      const c = parseInt(d.target.value) || n.min;
      i.value = c, d.target.value = i.value;
    };
    return (d, c) => (k(), T("div", {
      class: Ie(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      p("button", {
        type: "button",
        class: Ie(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue <= e.min,
        onClick: r,
        "aria-label": "Decrease quantity"
      }, c[0] || (c[0] = [
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
      ]), 10, dy),
      p("input", {
        type: "number",
        class: Ie(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: u,
        "aria-label": "Quantity"
      }, null, 42, fy),
      p("button", {
        type: "button",
        class: Ie(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, c[1] || (c[1] = [
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
      ]), 10, py)
    ], 2));
  }
}, Pf = /* @__PURE__ */ it(hy, [["__scopeId", "data-v-589d2042"]]), my = ["data-updating"], gy = { class: "cart-item__content" }, vy = { class: "cart-item__image" }, yy = ["href"], by = ["src", "alt"], _y = { class: "cart-item__details" }, Ey = { class: "cart-item__header" }, wy = { class: "cart-item__info" }, Ny = { class: "cart-item__title" }, xy = ["href"], Sy = {
  key: 0,
  class: "cart-item__variant"
}, Cy = {
  key: 1,
  class: "cart-item__properties"
}, ky = { class: "cart-item__property-key" }, Oy = { class: "cart-item__price cart-item__price--mobile" }, Ty = { class: "cart-item__price-current" }, Dy = {
  key: 0,
  class: "cart-item__price-original"
}, Vy = {
  key: 0,
  class: "cart-item__discounts"
}, $y = { class: "cart-item__actions" }, Ay = { class: "cart-item__actions-left" }, Iy = ["disabled"], My = {
  key: 0,
  class: "cart-item__remove-icon",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Py = {
  key: 1,
  class: "cart-item__remove-icon cart-item__remove-icon--loading",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ry = { class: "cart-item__price cart-item__price--desktop" }, Ly = { class: "cart-item__price-current" }, Fy = {
  key: 0,
  class: "cart-item__price-original"
}, By = {
  key: 1,
  class: "cart-item__price-savings"
}, jy = {
  key: 1,
  class: "cart-item__warning"
}, Hy = {
  key: 2,
  class: "cart-item__error"
}, Uy = {
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
      var f;
      return ((f = n.item.variant) == null ? void 0 : f.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), u = (f) => !f && f !== 0 ? "$0.00" : `$${(f > 1e3 ? f / 100 : f).toFixed(2)}`, d = async (f) => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          await s("update", {
            key: n.item.key,
            quantity: f
          }), f === 0 && s("remove", n.item.key);
        } catch (m) {
          console.error("Failed to update quantity:", m), r.value = "Failed to update quantity. Please try again.", o.value = n.item.quantity;
        } finally {
          i.value = !1;
        }
      }
    }, c = async () => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          await s("remove", n.item.key);
        } catch (f) {
          console.error("Failed to remove item:", f), r.value = "Failed to remove item. Please try again.";
        } finally {
          i.value = !1;
        }
      }
    };
    return nn(() => n.item.quantity, (f) => {
      o.value = f;
    }), (f, m) => (k(), T("div", {
      class: "cart-item",
      "data-updating": i.value
    }, [
      p("div", gy, [
        p("div", vy, [
          p("a", {
            href: e.item.url,
            class: "cart-item__image-link"
          }, [
            p("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "cart-item__image-img",
              loading: "lazy"
            }, null, 8, by)
          ], 8, yy)
        ]),
        p("div", _y, [
          p("div", Ey, [
            p("div", wy, [
              p("h3", Ny, [
                p("a", {
                  href: e.item.url,
                  class: "cart-item__title-link"
                }, X(e.item.product_title), 9, xy)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (k(), T("p", Sy, X(e.item.variant_title), 1)) : z("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (k(), T("div", Cy, [
                (k(!0), T(ce, null, Ve(e.item.properties, (_, b) => (k(), T("p", {
                  key: b,
                  class: "cart-item__property"
                }, [
                  p("span", ky, X(b) + ":", 1),
                  Le(" " + X(_), 1)
                ]))), 128))
              ])) : z("", !0)
            ]),
            p("div", Oy, [
              p("p", Ty, X(u(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (k(), T("p", Dy, X(u(e.item.original_price * e.item.quantity)), 1)) : z("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (k(), T("div", Vy, [
            (k(!0), T(ce, null, Ve(e.item.discounts, (_) => (k(), T("div", {
              key: _.id,
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
              Le(" " + X(_.title) + " (-" + X(u(_.amount || _.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : z("", !0),
          p("div", $y, [
            p("div", Ay, [
              pe(Pf, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  m[0] || (m[0] = (_) => o.value = _),
                  d
                ],
                min: 0,
                max: l.value,
                disabled: i.value,
                size: "small"
              }, null, 8, ["modelValue", "max", "disabled"]),
              p("button", {
                type: "button",
                onClick: c,
                class: "cart-item__remove",
                disabled: i.value,
                "aria-label": "Remove item from cart"
              }, [
                i.value ? (k(), T("svg", Py, m[3] || (m[3] = [
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
                ]))) : (k(), T("svg", My, m[2] || (m[2] = [
                  p("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, Iy)
            ]),
            p("div", Ry, [
              p("p", Ly, X(u(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (k(), T("p", Fy, X(u(e.item.original_price * e.item.quantity)), 1)) : z("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (k(), T("p", By, " Save " + X(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : z("", !0)
            ])
          ]),
          a.value ? (k(), T("p", jy, " Only " + X(e.item.variant.inventory_quantity) + " left in stock ", 1)) : z("", !0),
          r.value ? (k(), T("p", Hy, X(r.value), 1)) : z("", !0)
        ])
      ])
    ], 8, my));
  }
}, Rf = /* @__PURE__ */ it(Uy, [["__scopeId", "data-v-af1af6ae"]]), qy = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, zy = { class: "absolute inset-0 overflow-hidden" }, Ky = { class: "fixed inset-y-0 right-0 max-w-full flex" }, Wy = {
  key: 0,
  class: "w-screen max-w-md transform transition-transform duration-300 ease-out"
}, Gy = { class: "h-full flex flex-col bg-white shadow-xl" }, Yy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, Jy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, Xy = { class: "flex-1 overflow-y-auto" }, Qy = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, Zy = {
  key: 1,
  class: "px-4 sm:px-6 pb-6"
}, e1 = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, t1 = {
  key: 0,
  class: "bg-blue-50 border border-blue-200 rounded-lg p-3"
}, n1 = { class: "flex items-center gap-2" }, s1 = { class: "text-sm text-blue-800" }, o1 = { class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden" }, i1 = { class: "flex justify-between text-base font-medium text-gray-900" }, r1 = { class: "space-y-3" }, l1 = {
  __name: "CartDrawer",
  setup(e) {
    const t = q(!1), n = q([]), s = q(0), o = te(() => {
      var f;
      return ((f = window.routes) == null ? void 0 : f.cart_url) || "/cart";
    }), i = (f) => !f && f !== 0 ? "$0.00" : `$${(f > 1e3 ? f / 100 : f).toFixed(2)}`, r = () => {
      t.value = !0, document.body.style.overflow = "hidden", a();
    }, l = () => {
      t.value = !1, document.body.style.overflow = "";
    }, a = async () => {
      const f = await window.OrionCart.fetchCart();
      n.value = f.items, s.value = f.total_price;
    }, u = async ({ key: f, quantity: m }) => {
      await window.OrionCart.updateItem(f, m), a();
    }, d = async (f) => {
      await window.OrionCart.removeItem(f), a();
    }, c = (f) => {
      f.key === "Escape" && t.value && l();
    };
    return Ye(() => {
      document.addEventListener("cart:open", r), document.addEventListener("cart:close", l), document.addEventListener("keydown", c);
    }), It(() => {
      document.removeEventListener("cart:open", r), document.removeEventListener("cart:close", l), document.removeEventListener("keydown", c);
    }), (f, m) => (k(), _t(ds, { to: "body" }, [
      pe(tn, { name: "drawer" }, {
        default: Ge(() => [
          t.value ? (k(), T("div", qy, [
            p("div", zy, [
              pe(tn, { name: "fade" }, {
                default: Ge(() => [
                  t.value ? (k(), T("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: l
                  })) : z("", !0)
                ]),
                _: 1
              }),
              p("div", Ky, [
                pe(tn, { name: "slide" }, {
                  default: Ge(() => [
                    t.value ? (k(), T("div", Wy, [
                      p("div", Gy, [
                        p("div", Yy, [
                          p("div", null, [
                            m[0] || (m[0] = p("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (k(), T("p", Jy, X(n.value.length) + " " + X(n.value.length === 1 ? "item" : "items"), 1)) : z("", !0)
                          ]),
                          p("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: l
                          }, m[1] || (m[1] = [
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
                        p("div", Xy, [
                          n.value.length === 0 ? (k(), T("div", Qy, [
                            m[3] || (m[3] = p("div", { class: "empty-cart-icon" }, [
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
                            m[4] || (m[4] = p("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, " Your cart is empty ", -1)),
                            m[5] || (m[5] = p("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            pe(xs, {
                              onClick: l,
                              variant: "primary",
                              size: "large"
                            }, {
                              default: Ge(() => m[2] || (m[2] = [
                                Le(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (k(), T("div", Zy, [
                            (k(!0), T(ce, null, Ve(n.value, (_) => (k(), _t(Rf, {
                              key: _.key,
                              item: _,
                              onUpdate: u,
                              onRemove: d
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (k(), T("div", e1, [
                          s.value < 50 ? (k(), T("div", t1, [
                            p("div", n1, [
                              m[6] || (m[6] = p("svg", {
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
                              p("p", s1, " Add " + X(i(
                                50 - s.value
                              )) + " more for free shipping! ", 1)
                            ]),
                            p("div", o1, [
                              p("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: dt(`width: ${Math.min(
                                  s.value / f.freeShippingThreshold * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])
                          ])) : z("", !0),
                          p("div", null, [
                            p("div", i1, [
                              m[7] || (m[7] = p("p", null, "Subtotal", -1)),
                              p("p", null, X(i(s.value)), 1)
                            ]),
                            m[8] || (m[8] = p("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          p("div", r1, [
                            pe(xs, {
                              href: o.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Ge(() => m[9] || (m[9] = [
                                Le(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [9]
                            }, 8, ["href"]),
                            pe(xs, {
                              onClick: l,
                              variant: "ghost",
                              "full-width": !0
                            }, {
                              default: Ge(() => m[10] || (m[10] = [
                                Le(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            })
                          ]),
                          m[11] || (m[11] = p("div", { class: "flex items-center justify-center gap-6 text-xs text-gray-500 pt-2" }, [
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
}, Lf = /* @__PURE__ */ it(l1, [["__scopeId", "data-v-ee87f80c"]]), a1 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, c1 = { class: "absolute inset-0 overflow-hidden" }, u1 = { class: "fixed inset-y-0 left-0 max-w-full flex" }, d1 = {
  key: 0,
  class: "w-screen max-w-sm transform transition-transform duration-300 ease-out"
}, f1 = { class: "h-full flex flex-col bg-white shadow-xl" }, p1 = { class: "flex-1 overflow-y-auto" }, h1 = { class: "px-4 py-4" }, m1 = { class: "space-y-1" }, g1 = { key: 0 }, v1 = { key: 0 }, y1 = ["onClick"], b1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, _1 = { key: 0 }, E1 = ["onClick"], w1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, N1 = ["href"], x1 = ["href"], S1 = ["href"], C1 = { class: "px-4 py-4 border-t" }, k1 = { class: "space-y-1" }, O1 = ["href"], T1 = {
  key: 0,
  class: "px-4 py-4 border-t"
}, D1 = {
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
    }, a = (u) => {
      const d = i.value.indexOf(u);
      d > -1 ? i.value.splice(d, 1) : i.value.push(u);
    };
    return t({
      openMenu: r,
      closeMenu: l
    }), Ye(() => {
      document.addEventListener("mobile-menu:open", r), document.addEventListener("mobile-menu:close", l);
      const u = (d) => {
        d.key === "Escape" && o.value && l();
      };
      document.addEventListener("keydown", u), It(() => {
        document.removeEventListener("mobile-menu:open", r), document.removeEventListener("mobile-menu:close", l), document.removeEventListener("keydown", u);
      });
    }), (u, d) => (k(), T("div", null, [
      (k(), _t(ds, { to: "body" }, [
        pe(tn, { name: "menu" }, {
          default: Ge(() => [
            o.value ? (k(), T("div", a1, [
              p("div", c1, [
                pe(tn, { name: "fade" }, {
                  default: Ge(() => [
                    o.value ? (k(), T("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: l
                    })) : z("", !0)
                  ]),
                  _: 1
                }),
                p("div", u1, [
                  pe(tn, { name: "slide-left" }, {
                    default: Ge(() => [
                      o.value ? (k(), T("div", d1, [
                        p("div", f1, [
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
                          p("div", p1, [
                            p("nav", h1, [
                              p("ul", m1, [
                                s.value.length === 0 ? (k(), T("li", g1, d[2] || (d[2] = [
                                  p("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : z("", !0),
                                (k(!0), T(ce, null, Ve(s.value, (c) => (k(), T("li", {
                                  key: c.id || c.title
                                }, [
                                  c.links && c.links.length ? (k(), T("div", v1, [
                                    p("button", {
                                      onClick: (f) => a(c.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      p("span", null, X(c.title), 1),
                                      (k(), T("svg", {
                                        class: Ie(["h-5 w-5 transition-transform duration-200", { "rotate-180": i.value.includes(c.title) }]),
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
                                    ], 8, y1),
                                    pe(tn, { name: "submenu" }, {
                                      default: Ge(() => [
                                        i.value.includes(c.title) ? (k(), T("ul", b1, [
                                          (k(!0), T(ce, null, Ve(c.links, (f) => (k(), T("li", {
                                            key: f.id || f.title
                                          }, [
                                            f.links && f.links.length ? (k(), T("div", _1, [
                                              p("button", {
                                                onClick: (m) => a(`${c.title}-${f.title}`),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                p("span", null, X(f.title), 1),
                                                (k(), T("svg", {
                                                  class: Ie(["h-4 w-4 transition-transform duration-200", { "rotate-180": i.value.includes(`${c.title}-${f.title}`) }]),
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
                                              ], 8, E1),
                                              pe(tn, { name: "submenu" }, {
                                                default: Ge(() => [
                                                  i.value.includes(`${c.title}-${f.title}`) ? (k(), T("ul", w1, [
                                                    (k(!0), T(ce, null, Ve(f.links, (m) => (k(), T("li", {
                                                      key: m.id || m.title
                                                    }, [
                                                      p("a", {
                                                        href: m.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: l
                                                      }, X(m.title), 9, N1)
                                                    ]))), 128))
                                                  ])) : z("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (k(), T("a", {
                                              key: 1,
                                              href: f.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: l
                                            }, X(f.title), 9, x1))
                                          ]))), 128))
                                        ])) : z("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (k(), T("a", {
                                    key: 1,
                                    href: c.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: l
                                  }, X(c.title), 9, S1))
                                ]))), 128))
                              ])
                            ]),
                            p("div", C1, [
                              p("div", k1, [
                                e.customerUrl ? (k(), T("a", {
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
                                ]), 8, O1)) : z("", !0),
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
                            e.showLocalization ? (k(), T("div", T1, [
                              Bn(u.$slots, "localization", {}, void 0, !0)
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
}, Ff = /* @__PURE__ */ it(D1, [["__scopeId", "data-v-f404e536"]]), V1 = { class: "variant-picker" }, $1 = { class: "text-sm font-medium text-gray-900 mb-3" }, A1 = { class: "font-normal text-gray-600" }, I1 = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, M1 = ["title", "aria-label", "disabled", "onClick"], P1 = { class: "sr-only" }, R1 = {
  key: 0,
  class: "color-swatch__checkmark"
}, L1 = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, F1 = ["aria-label", "disabled", "onClick"], B1 = {
  key: 0,
  class: "mt-6 flex items-center justify-between"
}, j1 = { class: "flex items-center gap-4" }, H1 = { class: "text-2xl font-bold text-gray-900" }, U1 = {
  key: 0,
  class: "text-lg text-gray-500 line-through"
}, q1 = {
  key: 0,
  class: "text-sm text-green-600 font-medium"
}, z1 = {
  key: 1,
  class: "text-sm text-red-600 font-medium"
}, K1 = {
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
        const D = l.value.find((O) => O.id == n.selectedVariantId);
        D && a(D);
      } else if (l.value.length > 0) {
        const D = l.value.find((O) => O.available) || l.value[0];
        a(D);
      }
    });
    const a = (D) => {
      i.value = D, r.value.forEach((O, y) => {
        o.value[O.name] = D[`option${y + 1}`];
      }), s("variant-change", D);
    }, u = (D, O) => {
      o.value[D] = O;
      const y = l.value.find((h) => r.value.every((x, E) => {
        const V = o.value[x.name];
        return h[`option${E + 1}`] === V;
      }));
      y && (i.value = y, s("variant-change", y));
    }, d = (D) => o.value[D] || "", c = (D, O) => o.value[D] === O, f = (D, O) => {
      const y = r.value.findIndex((h) => h.name === D);
      return l.value.some((h) => {
        const x = h[`option${y + 1}`] === O, E = r.value.every((V, P) => {
          if (V.name === D) return !0;
          const N = o.value[V.name];
          return N ? h[`option${P + 1}`] === N : !0;
        });
        return x && E && h.available;
      });
    }, m = (D) => D.toLowerCase().includes("color") || D.toLowerCase().includes("colour"), _ = (D) => ({
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
    })[D.toLowerCase()] || "#E5E7EB", b = (D) => {
      var O, y;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((y = (O = window.Shopify) == null ? void 0 : O.currency) == null ? void 0 : y.active) || "USD"
      }).format(D / 100);
    };
    return (D, O) => (k(), T("div", V1, [
      (k(!0), T(ce, null, Ve(r.value, (y) => (k(), T("div", {
        key: y.name,
        class: "variant-option mb-6"
      }, [
        p("h3", $1, [
          Le(X(y.name) + ": ", 1),
          p("span", A1, X(d(y.name)), 1)
        ]),
        m(y.name) ? (k(), T("div", I1, [
          (k(!0), T(ce, null, Ve(y.values, (h) => (k(), T("button", {
            key: h,
            type: "button",
            class: Ie([
              "color-swatch",
              c(y.name, h) ? "color-swatch--selected" : "",
              f(y.name, h) ? "" : "color-swatch--unavailable"
            ]),
            style: dt({ backgroundColor: _(h) }),
            title: h,
            "aria-label": `Select ${y.name} ${h}`,
            disabled: !f(y.name, h),
            onClick: (x) => u(y.name, h)
          }, [
            p("span", P1, X(h), 1),
            c(y.name, h) ? (k(), T("span", R1, O[0] || (O[0] = [
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
          ], 14, M1))), 128))
        ])) : (k(), T("div", L1, [
          (k(!0), T(ce, null, Ve(y.values, (h) => (k(), T("button", {
            key: h,
            type: "button",
            class: Ie([
              "variant-button",
              c(y.name, h) ? "variant-button--selected" : "",
              f(y.name, h) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${y.name} ${h}`,
            disabled: !f(y.name, h),
            onClick: (x) => u(y.name, h)
          }, X(h), 11, F1))), 128))
        ]))
      ]))), 128)),
      i.value ? (k(), T("div", B1, [
        p("div", j1, [
          p("span", H1, X(b(i.value.price)), 1),
          i.value.compare_at_price > i.value.price ? (k(), T("span", U1, X(b(i.value.compare_at_price)), 1)) : z("", !0)
        ]),
        i.value.available ? (k(), T("div", q1, " In Stock ")) : (k(), T("div", z1, " Out of Stock "))
      ])) : z("", !0)
    ]));
  }
}, W1 = /* @__PURE__ */ it(K1, [["__scopeId", "data-v-6eb16bf8"]]);
function G1(e) {
  return dl() ? (Uc(e), !0) : !1;
}
function oa(e) {
  return typeof e == "function" ? e() : Co(e);
}
const Y1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const J1 = Object.prototype.toString, X1 = (e) => J1.call(e) === "[object Object]", xo = () => {
};
function Q1(e, t) {
  function n(...s) {
    return new Promise((o, i) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(i);
    });
  }
  return n;
}
function Z1(...e) {
  let t = 0, n, s = !0, o = xo, i, r, l, a, u;
  !$e(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: l = !0, leading: a = !0, rejectOnCancel: u = !1 } = e[0] : [r, l = !0, a = !0, u = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = xo);
  };
  return (f) => {
    const m = oa(r), _ = Date.now() - t, b = () => i = f();
    return d(), m <= 0 ? (t = Date.now(), b()) : (_ > m && (a || !s) ? (t = Date.now(), b()) : l && (i = new Promise((D, O) => {
      o = u ? O : D, n = setTimeout(() => {
        t = Date.now(), s = !0, D(b()), d();
      }, Math.max(0, m - _));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, i);
  };
}
function eb(e, t = 200, n = !1, s = !0, o = !1) {
  return Q1(
    Z1(t, n, s, o),
    e
  );
}
function tb(e) {
  var t;
  const n = oa(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Bf = Y1 ? window : void 0;
function Nr(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Bf) : [t, n, s, o] = e, !t)
    return xo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [], r = () => {
    i.forEach((d) => d()), i.length = 0;
  }, l = (d, c, f, m) => (d.addEventListener(c, f, m), () => d.removeEventListener(c, f, m)), a = nn(
    () => [tb(t), oa(o)],
    ([d, c]) => {
      if (r(), !d)
        return;
      const f = X1(c) ? { ...c } : c;
      i.push(
        ...n.flatMap((m) => s.map((_) => l(d, m, _, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    a(), r();
  };
  return G1(u), u;
}
function nb(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: i,
    passive: r = !0,
    window: l = Bf
  } = t, a = Ss({ x: 0, y: 0 }), u = Ss({ x: 0, y: 0 }), d = te(() => a.x - u.x), c = te(() => a.y - u.y), { max: f, abs: m } = Math, _ = te(() => f(m(d.value), m(c.value)) >= n), b = q(!1), D = te(() => _.value ? m(d.value) > m(c.value) ? d.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), O = (g) => [g.touches[0].clientX, g.touches[0].clientY], y = (g, C) => {
    a.x = g, a.y = C;
  }, h = (g, C) => {
    u.x = g, u.y = C;
  };
  let x;
  const E = sb(l == null ? void 0 : l.document);
  r ? x = E ? { passive: !0 } : { capture: !1 } : x = E ? { passive: !1, capture: !0 } : { capture: !0 };
  const V = (g) => {
    b.value && (o == null || o(g, D.value)), b.value = !1;
  }, P = [
    Nr(e, "touchstart", (g) => {
      if (g.touches.length !== 1)
        return;
      x.capture && !x.passive && g.preventDefault();
      const [C, A] = O(g);
      y(C, A), h(C, A), i == null || i(g);
    }, x),
    Nr(e, "touchmove", (g) => {
      if (g.touches.length !== 1)
        return;
      const [C, A] = O(g);
      h(C, A), !b.value && _.value && (b.value = !0), b.value && (s == null || s(g));
    }, x),
    Nr(e, ["touchend", "touchcancel"], V, x)
  ];
  return {
    isPassiveEventSupported: E,
    isSwiping: b,
    direction: D,
    coordsStart: a,
    coordsEnd: u,
    lengthX: d,
    lengthY: c,
    stop: () => P.forEach((g) => g())
  };
}
function sb(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", xo, n), e.removeEventListener("x", xo), t;
}
const ob = { class: "sticky-header-container" }, ib = {
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
    const t = e, n = q(null), s = q(!1), o = q(!1), i = q(!1), r = q(!1), l = q("#ffffff"), a = q(0), u = q(0), d = te(() => D.value ? `${u.value}px` : "0");
    let c = 0;
    const f = te(() => {
      const y = {};
      return D.value && s.value && (y.position = "fixed", y.top = "0", y.left = "0", y.right = "0", y.zIndex = "40", o.value ? y.transform = "translateY(-100%)" : y.transform = "translateY(0)"), r.value && (a.value === 0 ? y.backgroundColor = "transparent" : D.value && s.value && (y.backgroundColor = l.value)), y.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", y;
    }), m = () => {
      var x, E, V;
      const y = (E = (x = n.value) == null ? void 0 : x.getRootNode()) == null ? void 0 : E.host;
      if (!y) return;
      y.classList.add("sticky-header-wrapper");
      const h = (V = n.value) == null ? void 0 : V.querySelector(".main-header");
      h && r.value && (a.value === 0 ? (h.style.backgroundColor = "transparent", h.style.borderBottomColor = "transparent") : D.value && s.value && (h.style.backgroundColor = l.value, h.style.borderBottomColor = "#e5e7eb"));
    }, _ = eb(() => {
      if (!D.value)
        return;
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = y, s.value = y > 0, i.value = y > 10, b.value && s.value) {
        const h = y - c;
        Math.abs(h) > 5 && (h > 0 && y > u.value ? o.value = !0 : h < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(y - c) > 1 && (c = y), m();
    }, 50), b = q(t.hideOnScrollDown), D = q(t.sticky), O = () => {
      n.value && (u.value = n.value.offsetHeight || 80);
    };
    return Ye(() => {
      if (n.value) {
        const y = n.value.getRootNode().host;
        if (y) {
          y.classList.add("sticky-header-wrapper"), r.value = y.classList.contains("header-transparent");
          const h = y.getAttribute("data-hide-on-scroll-down"), x = y.getAttribute("data-sticky"), E = y.getAttribute("data-sticky-bg");
          h !== null && (b.value = h === "true"), x !== null && (D.value = x === "true"), E !== null && (l.value = E || "#ffffff"), setTimeout(O, 100), window.addEventListener("resize", O);
        }
      }
      window.addEventListener("scroll", _, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), _();
    }), It(() => {
      window.removeEventListener("scroll", _), window.removeEventListener("resize", O);
    }), (y, h) => (k(), T("div", ob, [
      D.value && s.value ? (k(), T("div", {
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
        style: dt(f.value)
      }, [
        Bn(y.$slots, "default")
      ], 6)
    ]));
  }
}, rb = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, lb = { class: "main-header__wrapper" }, ab = {
  href: "/",
  class: "main-header__logo"
}, cb = ["src", "alt"], ub = {
  key: 1,
  class: "text-xl font-bold"
}, db = { class: "main-header__nav hidden lg:flex" }, fb = ["href"], pb = { class: "main-header__actions" }, hb = ["href"], mb = {
  key: 0,
  class: "cart-count"
}, gb = { class: "search-overlay__container" }, vb = {
  action: "/search",
  method: "get",
  class: "search-form"
}, yb = {
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
      var d, c;
      return t.customer ? ((d = window.routes) == null ? void 0 : d.account_url) || "/account" : ((c = window.routes) == null ? void 0 : c.account_login_url) || "/account/login";
    }), r = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, l = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, a = async () => {
      var d;
      s.value = !s.value, s.value && (await ko(), (d = n.value) == null || d.focus());
    }, u = () => {
      var d;
      (d = window.OrionCart) != null && d.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return Ye(() => {
      document.addEventListener("cart:updated", u), u();
    }), It(() => {
      document.removeEventListener("cart:updated", u);
    }), (d, c) => (k(), T("div", rb, [
      p("div", lb, [
        p("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: r,
          "aria-label": "Open menu"
        }, c[0] || (c[0] = [
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
        p("a", ab, [
          e.logoUrl ? (k(), T("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, cb)) : (k(), T("span", ub, X(e.shopName), 1))
        ]),
        p("nav", db, [
          (k(!0), T(ce, null, Ve(e.navigationLinks, (f) => (k(), T("a", {
            key: f.url,
            href: f.url,
            class: "nav-link"
          }, X(f.title), 9, fb))), 128))
        ]),
        p("div", pb, [
          p("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: a,
            "aria-label": "Search"
          }, c[1] || (c[1] = [
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
          }, c[2] || (c[2] = [
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
          ]), 8, hb),
          p("button", {
            type: "button",
            class: "action-button relative",
            onClick: l,
            "aria-label": "Cart"
          }, [
            c[3] || (c[3] = p("svg", {
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
            o.value > 0 ? (k(), T("span", mb, X(o.value), 1)) : z("", !0)
          ])
        ])
      ]),
      (k(), _t(ds, { to: "body" }, [
        pe(tn, { name: "fade" }, {
          default: Ge(() => [
            s.value ? (k(), T("div", {
              key: 0,
              class: "search-overlay",
              onClick: Ht(a, ["self"])
            }, [
              p("div", gb, [
                p("form", vb, [
                  p("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: Fd(a, ["esc"])
                  }, null, 544),
                  c[4] || (c[4] = p("button", {
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
                }, c[5] || (c[5] = [
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
}, jf = /* @__PURE__ */ it(yb, [["__scopeId", "data-v-49795925"]]), bb = { class: "site-footer" }, _b = {
  key: 0,
  class: "newsletter-section"
}, Eb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, wb = { class: "newsletter-content" }, Nb = { class: "newsletter-text" }, xb = { class: "text-xl font-semibold mb-2" }, Sb = { class: "text-gray-600" }, Cb = ["disabled"], kb = ["disabled"], Ob = { key: 0 }, Tb = { key: 1 }, Db = { class: "footer-main" }, Vb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, $b = { class: "footer-grid" }, Ab = { class: "footer-column" }, Ib = { class: "footer-heading" }, Mb = { class: "text-gray-600 mb-4" }, Pb = {
  key: 0,
  class: "social-links"
}, Rb = ["href", "aria-label"], Lb = { class: "footer-heading" }, Fb = { class: "footer-links" }, Bb = ["href"], jb = {
  key: 0,
  class: "footer-column"
}, Hb = { class: "contact-info" }, Ub = {
  key: 0,
  class: "contact-item"
}, qb = {
  key: 1,
  class: "contact-item"
}, zb = {
  key: 2,
  class: "contact-item"
}, Kb = {
  key: 0,
  class: "payment-methods"
}, Wb = { class: "payment-icons" }, Gb = ["src", "alt"], Yb = { class: "footer-bottom" }, Jb = { class: "copyright" }, Xb = {
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
    return (r, l) => (k(), T("footer", bb, [
      e.showNewsletter ? (k(), T("div", _b, [
        p("div", Eb, [
          p("div", wb, [
            p("div", Nb, [
              p("h3", xb, X(e.newsletterTitle), 1),
              p("p", Sb, X(e.newsletterDescription), 1)
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
              }, null, 8, Cb), [
                [ls, t.value]
              ]),
              p("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (k(), T("span", Tb, "Subscribing...")) : (k(), T("span", Ob, "Subscribe"))
              ], 8, kb)
            ], 32)
          ])
        ])
      ])) : z("", !0),
      p("div", Db, [
        p("div", Vb, [
          p("div", $b, [
            p("div", Ab, [
              p("h4", Ib, X(e.companyName), 1),
              p("p", Mb, X(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (k(), T("div", Pb, [
                (k(!0), T(ce, null, Ve(e.socialLinks, (a) => (k(), T("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (k(), _t(Cl(i(a.name))))
                ], 8, Rb))), 128))
              ])) : z("", !0)
            ]),
            (k(!0), T(ce, null, Ve(e.footerColumns, (a) => (k(), T("div", {
              key: a.title,
              class: "footer-column"
            }, [
              p("h4", Lb, X(a.title), 1),
              p("ul", Fb, [
                (k(!0), T(ce, null, Ve(a.links, (u) => (k(), T("li", {
                  key: u.title
                }, [
                  p("a", {
                    href: u.url,
                    class: "footer-link"
                  }, X(u.title), 9, Bb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (k(), T("div", jb, [
              l[4] || (l[4] = p("h4", { class: "footer-heading" }, "Contact", -1)),
              p("div", Hb, [
                e.contactEmail ? (k(), T("p", Ub, [
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
                e.contactPhone ? (k(), T("p", qb, [
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
                e.contactAddress ? (k(), T("p", zb, [
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
          e.paymentMethods.length > 0 ? (k(), T("div", Kb, [
            l[5] || (l[5] = p("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            p("div", Wb, [
              (k(!0), T(ce, null, Ve(e.paymentMethods, (a) => (k(), T("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, Gb))), 128))
            ])
          ])) : z("", !0),
          p("div", Yb, [
            p("p", Jb, " © " + X(s.value) + " " + X(e.companyName) + ". All rights reserved. ", 1),
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
}, Qb = /* @__PURE__ */ it(Xb, [["__scopeId", "data-v-799862f9"]]), Zb = { class: "product-card group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" }, e_ = ["href"], t_ = ["src", "alt"], n_ = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, s_ = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, o_ = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, i_ = { class: "p-4" }, r_ = {
  key: 0,
  class: "mb-3"
}, l_ = { class: "flex gap-1.5 flex-wrap" }, a_ = ["onClick", "title"], c_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, u_ = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, d_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, f_ = ["href"], p_ = { class: "flex items-center gap-1 mb-2" }, h_ = { class: "flex" }, m_ = { class: "flex items-baseline gap-2 mb-4" }, g_ = { class: "text-xl font-bold text-gray-900" }, v_ = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, y_ = ["disabled"], b_ = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, __ = { key: 1 }, E_ = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, w_ = {
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
    }), u = te(() => {
      const N = a.value.handle;
      return a.value.url || (N ? `/products/${N}` : "#");
    }), d = te(() => {
      var N, g, C;
      return i.value && ((N = a.value.images) != null && N[1]) ? a.value.images[1].src : ((C = (g = a.value.images) == null ? void 0 : g[0]) == null ? void 0 : C.src) || a.value.featured_image || a.value.image || "/placeholder.jpg";
    }), c = te(() => {
      var N;
      return (N = a.value.options) == null ? void 0 : N.some(
        (g) => {
          var C, A;
          return ((C = g.name) == null ? void 0 : C.toLowerCase().includes("color")) || ((A = g.name) == null ? void 0 : A.toLowerCase().includes("colour"));
        }
      );
    }), f = te(() => {
      var g;
      const N = (g = a.value.options) == null ? void 0 : g.find(
        (C) => {
          var A, $;
          return ((A = C.name) == null ? void 0 : A.toLowerCase().includes("color")) || (($ = C.name) == null ? void 0 : $.toLowerCase().includes("colour"));
        }
      );
      return (N == null ? void 0 : N.values) || [];
    }), m = te(() => a.value.price || 0), _ = te(() => a.value.compare_at_price || 0), b = te(() => a.value.available && _.value > m.value), D = te(() => b.value ? Math.round((_.value - m.value) / _.value * 100) : 0), O = (N) => `$${(N / 100).toFixed(2)}`, y = (N) => {
      const g = {
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
      return g[C] || `#${C.replace("#", "")}`;
    }, h = () => {
      var N;
      ((N = a.value.images) == null ? void 0 : N.length) > 1 && (i.value = !0);
    }, x = () => {
      i.value = !1;
    }, E = (N) => {
      o.value = N.value;
    }, V = () => {
      l.value = !l.value;
    }, P = async () => {
      var N, g;
      r.value = !0;
      try {
        const C = (g = (N = a.value.variants) == null ? void 0 : N[0]) == null ? void 0 : g.id;
        if (!C)
          throw console.error("No variant ID found for product:", a.value), new Error("No variant ID found");
        const A = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: C,
              quantity: 1
            }]
          })
        });
        if (!A.ok)
          throw new Error("Failed to add to cart");
        const $ = await A.json();
        window.OrionCart && (await window.OrionCart.fetchCart(), window.OrionCart.openDrawer()), window.OrionNotifications && window.OrionNotifications.cartSuccess(a.value.title), s("add-to-cart", { variantId: C, quantity: 1 });
      } catch (C) {
        console.error("Error adding to cart:", C), window.OrionNotifications ? window.OrionNotifications.cartError() : alert("Failed to add item to cart. Please try again.");
      } finally {
        r.value = !1;
      }
    };
    return (N, g) => (k(), T("div", Zb, [
      p("a", {
        href: u.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        d.value ? (k(), T("img", {
          key: 0,
          src: d.value,
          alt: a.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: h,
          onMouseleave: x
        }, null, 40, t_)) : (k(), T("div", n_, g[0] || (g[0] = [
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
        b.value ? (k(), T("div", s_, " -" + X(D.value) + "% ", 1)) : z("", !0),
        a.value.available ? (k(), T("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: Ht(V, ["prevent"])
        }, [
          (k(), T("svg", {
            class: Ie(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, g[1] || (g[1] = [
            p("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : z("", !0),
        a.value.available ? z("", !0) : (k(), T("div", o_, g[2] || (g[2] = [
          p("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, e_),
      p("div", i_, [
        c.value ? (k(), T("div", r_, [
          p("div", l_, [
            (k(!0), T(ce, null, Ve(f.value, (C) => (k(), T("button", {
              key: C.value,
              onClick: (A) => E(C),
              title: C.value,
              class: Ie([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === C.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: dt({ backgroundColor: y(C.value) })
            }, [
              o.value === C.value ? (k(), T("span", c_, g[3] || (g[3] = [
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
            ], 14, a_))), 128))
          ])
        ])) : z("", !0),
        a.value.vendor ? (k(), T("p", u_, X(a.value.vendor), 1)) : z("", !0),
        p("h3", d_, [
          p("a", {
            href: u.value,
            class: "hover:text-gray-700 transition-colors"
          }, X(a.value.title || "Untitled"), 9, f_)
        ]),
        p("div", p_, [
          p("div", h_, [
            (k(), T(ce, null, Ve(5, (C) => p("svg", {
              key: C,
              class: Ie(["w-4 h-4", C <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, g[4] || (g[4] = [
              p("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          g[5] || (g[5] = p("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        p("div", m_, [
          p("span", g_, X(O(m.value)), 1),
          _.value > m.value ? (k(), T("span", v_, X(O(_.value)), 1)) : z("", !0)
        ]),
        a.value.available ? (k(), T("button", {
          key: 2,
          onClick: P,
          disabled: r.value,
          class: "w-full bg-black text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        }, [
          r.value ? z("", !0) : (k(), T("svg", b_, g[6] || (g[6] = [
            p("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          r.value ? (k(), T("svg", E_, g[7] || (g[7] = [
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
          ]))) : (k(), T("span", __, "Add to Cart"))
        ], 8, y_)) : z("", !0)
      ])
    ]));
  }
}, N_ = { class: "collection-filters" }, x_ = { class: "lg:hidden mb-4" }, S_ = { class: "hidden lg:block space-y-6" }, C_ = { class: "filter-group" }, k_ = { class: "filter-group" }, O_ = { class: "space-y-2" }, T_ = { class: "flex items-center" }, D_ = { class: "flex items-center" }, V_ = { class: "flex items-center" }, $_ = { class: "flex items-center" }, A_ = {
  key: 0,
  class: "filter-group"
}, I_ = { class: "space-y-2" }, M_ = ["value"], P_ = { class: "ml-2 text-sm" }, R_ = {
  key: 1,
  class: "filter-group"
}, L_ = { class: "space-y-2" }, F_ = ["value"], B_ = { class: "ml-2 text-sm" }, j_ = { class: "filter-group" }, H_ = { class: "flex items-center" }, U_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, q_ = { class: "h-full flex flex-col" }, z_ = { class: "flex items-center justify-between p-4 border-b" }, K_ = {
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
    const n = e, s = t, o = q("manual"), i = q([]), r = q([]), l = q([]), a = q(!1), u = q(!1), d = te(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((h) => {
        h.product_type && y.add(h.product_type);
      }), Array.from(y).sort();
    }), c = te(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((h) => {
        h.vendor && y.add(h.vendor);
      }), Array.from(y).sort();
    }), f = te(() => i.value.length > 0 || r.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      O();
    }, _ = () => {
      O();
    }, b = () => {
      i.value = [], r.value = [], l.value = [], a.value = !1, O();
    }, D = () => {
      u.value = !1, O();
    }, O = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: i.value,
        types: r.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return (y, h) => (k(), T("div", N_, [
      p("div", x_, [
        p("button", {
          onClick: h[0] || (h[0] = (x) => u.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        }, h[12] || (h[12] = [
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
      p("div", S_, [
        p("div", C_, [
          h[14] || (h[14] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
          wt(p("select", {
            "onUpdate:modelValue": h[1] || (h[1] = (x) => o.value = x),
            onChange: m,
            class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          }, h[13] || (h[13] = [
            Ts('<option value="manual" data-v-67473a91>Featured</option><option value="best-selling" data-v-67473a91>Best Selling</option><option value="title-ascending" data-v-67473a91>Alphabetically, A-Z</option><option value="title-descending" data-v-67473a91>Alphabetically, Z-A</option><option value="price-ascending" data-v-67473a91>Price, low to high</option><option value="price-descending" data-v-67473a91>Price, high to low</option><option value="created-ascending" data-v-67473a91>Date, old to new</option><option value="created-descending" data-v-67473a91>Date, new to old</option>', 8)
          ]), 544), [
            [Qi, o.value]
          ])
        ]),
        p("div", k_, [
          h[19] || (h[19] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
          p("div", O_, [
            p("label", T_, [
              wt(p("input", {
                type: "checkbox",
                value: "0-50",
                "onUpdate:modelValue": h[2] || (h[2] = (x) => i.value = x),
                onChange: _,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Qt, i.value]
              ]),
              h[15] || (h[15] = p("span", { class: "ml-2 text-sm" }, "Under $50", -1))
            ]),
            p("label", D_, [
              wt(p("input", {
                type: "checkbox",
                value: "50-100",
                "onUpdate:modelValue": h[3] || (h[3] = (x) => i.value = x),
                onChange: _,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Qt, i.value]
              ]),
              h[16] || (h[16] = p("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
            ]),
            p("label", V_, [
              wt(p("input", {
                type: "checkbox",
                value: "100-200",
                "onUpdate:modelValue": h[4] || (h[4] = (x) => i.value = x),
                onChange: _,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Qt, i.value]
              ]),
              h[17] || (h[17] = p("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
            ]),
            p("label", $_, [
              wt(p("input", {
                type: "checkbox",
                value: "200+",
                "onUpdate:modelValue": h[5] || (h[5] = (x) => i.value = x),
                onChange: _,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Qt, i.value]
              ]),
              h[18] || (h[18] = p("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (k(), T("div", A_, [
          h[20] || (h[20] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          p("div", I_, [
            (k(!0), T(ce, null, Ve(d.value, (x) => (k(), T("label", {
              key: x,
              class: "flex items-center"
            }, [
              wt(p("input", {
                type: "checkbox",
                value: x,
                "onUpdate:modelValue": h[6] || (h[6] = (E) => r.value = E),
                onChange: _,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, M_), [
                [Qt, r.value]
              ]),
              p("span", P_, X(x), 1)
            ]))), 128))
          ])
        ])) : z("", !0),
        c.value.length > 0 ? (k(), T("div", R_, [
          h[21] || (h[21] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          p("div", L_, [
            (k(!0), T(ce, null, Ve(c.value, (x) => (k(), T("label", {
              key: x,
              class: "flex items-center"
            }, [
              wt(p("input", {
                type: "checkbox",
                value: x,
                "onUpdate:modelValue": h[7] || (h[7] = (E) => l.value = E),
                onChange: _,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, F_), [
                [Qt, l.value]
              ]),
              p("span", B_, X(x), 1)
            ]))), 128))
          ])
        ])) : z("", !0),
        p("div", j_, [
          h[23] || (h[23] = p("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          p("label", H_, [
            wt(p("input", {
              type: "checkbox",
              "onUpdate:modelValue": h[8] || (h[8] = (x) => a.value = x),
              onChange: _,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [Qt, a.value]
            ]),
            h[22] || (h[22] = p("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        f.value ? (k(), T("button", {
          key: 2,
          onClick: b,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : z("", !0)
      ]),
      (k(), _t(ds, { to: "body" }, [
        u.value ? (k(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: h[11] || (h[11] = Ht((x) => u.value = !1, ["self"]))
        }, [
          p("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: h[9] || (h[9] = (x) => u.value = !1)
          }),
          p("div", U_, [
            p("div", q_, [
              p("div", z_, [
                h[25] || (h[25] = p("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                p("button", {
                  onClick: h[10] || (h[10] = (x) => u.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, h[24] || (h[24] = [
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
              h[26] || (h[26] = p("div", { class: "flex-1 overflow-y-auto p-4 space-y-6" }, null, -1)),
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
}, W_ = /* @__PURE__ */ it(K_, [["__scopeId", "data-v-67473a91"]]), G_ = { class: "collection-grid" }, Y_ = {
  key: 0,
  class: "mb-8"
}, J_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, X_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, Q_ = { class: "mt-4 flex items-center justify-between" }, Z_ = { class: "text-sm text-secondary-600" }, eE = { class: "lg:hidden" }, tE = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, nE = { class: "lg:col-span-1" }, sE = ["products"], oE = { class: "lg:col-span-3" }, iE = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6"
}, rE = {
  key: 1,
  class: "text-center py-12"
}, lE = {
  key: 2,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6"
}, aE = ["product"], cE = {
  key: 3,
  class: "mt-8"
}, uE = {
  key: 0,
  class: "inline-flex items-center"
}, dE = {
  key: 1,
  class: "text-center"
}, fE = ["disabled"], pE = { key: 0 }, hE = { key: 1 }, mE = {
  key: 2,
  class: "flex items-center justify-between"
}, gE = { class: "flex-1 flex justify-between sm:hidden" }, vE = ["disabled"], yE = ["disabled"], bE = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, _E = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, EE = ["disabled"], wE = ["onClick"], NE = ["disabled"], xE = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, SE = { class: "relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full" }, CE = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, kE = { class: "text-lg font-medium text-secondary-900" }, OE = {
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
    const t = e, n = q(!1), s = q(!1), o = q(1), i = q(t.productsPerPage), r = q("manual"), l = q({}), a = q(null), u = q(null), d = te(() => {
      var C, A, $;
      let N = [...t.products];
      switch (l.value.inStockOnly && (N = N.filter((L) => L.available)), ((C = l.value.priceRanges) == null ? void 0 : C.length) > 0 && (N = N.filter((L) => {
        const J = L.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? J < 50 : ee === "50-100" ? J >= 50 && J < 100 : ee === "100-200" ? J >= 100 && J < 200 : ee === "200+" ? J >= 200 : !1);
      })), ((A = l.value.types) == null ? void 0 : A.length) > 0 && (N = N.filter((L) => l.value.types.includes(L.product_type))), (($ = l.value.vendors) == null ? void 0 : $.length) > 0 && (N = N.filter((L) => l.value.vendors.includes(L.vendor))), l.value.sort || r.value) {
        case "price-ascending":
          N.sort((L, J) => L.price - J.price);
          break;
        case "price-descending":
          N.sort((L, J) => J.price - L.price);
          break;
        case "title-ascending":
          N.sort((L, J) => L.title.localeCompare(J.title));
          break;
        case "title-descending":
          N.sort((L, J) => J.title.localeCompare(L.title));
          break;
        case "created-ascending":
          N.sort((L, J) => new Date(L.created_at) - new Date(J.created_at));
          break;
        case "created-descending":
          N.sort((L, J) => new Date(J.created_at) - new Date(L.created_at));
          break;
      }
      return N;
    }), c = te(() => {
      if (t.enableInfiniteScroll)
        return d.value.slice(0, i.value);
      const N = (o.value - 1) * t.productsPerPage, g = N + t.productsPerPage;
      return d.value.slice(N, g);
    }), f = te(() => Math.ceil(d.value.length / t.productsPerPage)), m = te(() => i.value < d.value.length), _ = te(() => Math.max(0, d.value.length - i.value)), b = te(() => {
      const N = [], g = f.value, C = o.value;
      if (g <= 7)
        for (let A = 1; A <= g; A++)
          N.push(A);
      else if (C <= 3) {
        for (let A = 1; A <= 5; A++)
          N.push(A);
        N.push("..."), N.push(g);
      } else if (C >= g - 2) {
        N.push(1), N.push("...");
        for (let A = g - 4; A <= g; A++)
          N.push(A);
      } else {
        N.push(1), N.push("...");
        for (let A = C - 1; A <= C + 1; A++)
          N.push(A);
        N.push("..."), N.push(g);
      }
      return N.filter((A) => A === "..." || A >= 1 && A <= g);
    }), D = (N) => {
      l.value = N, o.value = 1, i.value = t.productsPerPage;
    }, O = () => {
      o.value = 1, i.value = t.productsPerPage;
    }, y = () => {
      s.value = !0, setTimeout(() => {
        i.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, h = async (N) => {
      var C;
      const g = new FormData();
      g.append("id", N.variants[0].id), g.append("quantity", "1"), await ((C = window.OrionCart) == null ? void 0 : C.addItem(g)), console.log("Added to cart:", N.title);
    }, x = (N) => {
      a.value = N;
    }, E = () => {
      a.value = null;
    };
    let V = null;
    const P = () => {
      !t.enableInfiniteScroll || !u.value || (V = new IntersectionObserver(
        (N) => {
          N[0].isIntersecting && m.value && !s.value && y();
        },
        { threshold: 0.1 }
      ), V.observe(u.value));
    };
    return Ye(() => {
      P();
    }), It(() => {
      V && V.disconnect();
    }), nn(() => t.enableInfiniteScroll, () => {
      P();
    }), (N, g) => (k(), T("div", G_, [
      e.showHeader ? (k(), T("div", Y_, [
        p("h1", J_, X(e.collectionTitle), 1),
        e.collectionDescription ? (k(), T("div", X_, X(e.collectionDescription), 1)) : z("", !0),
        p("div", Q_, [
          p("p", Z_, X(d.value.length) + " products ", 1),
          p("div", eE, [
            wt(p("select", {
              "onUpdate:modelValue": g[0] || (g[0] = (C) => r.value = C),
              onChange: O,
              class: "px-3 py-2 border border-secondary-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, g[5] || (g[5] = [
              Ts('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Qi, r.value]
            ])
          ])
        ])
      ])) : z("", !0),
      p("div", tE, [
        p("aside", nE, [
          p("collection-filters", {
            products: e.products,
            onUpdateFilters: D
          }, null, 40, sE)
        ]),
        p("div", oE, [
          n.value ? (k(), T("div", iE, [
            (k(), T(ce, null, Ve(6, (C) => p("div", {
              key: C,
              class: "animate-pulse"
            }, g[6] || (g[6] = [
              p("div", { class: "bg-secondary-200 rounded-lg aspect-[3/4]" }, null, -1),
              p("div", { class: "mt-4 space-y-2" }, [
                p("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                p("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ])) : d.value.length === 0 ? (k(), T("div", rE, g[7] || (g[7] = [
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
          ]))) : (k(), T("div", lE, [
            (k(!0), T(ce, null, Ve(c.value, (C) => (k(), T("product-card", {
              key: C.id,
              product: C,
              onQuickAdd: h,
              onQuickView: x
            }, null, 40, aE))), 128))
          ])),
          !n.value && d.value.length > 0 ? (k(), T("div", cE, [
            e.enableInfiniteScroll ? (k(), T("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: u,
              class: "text-center py-4"
            }, [
              s.value ? (k(), T("div", uE, g[8] || (g[8] = [
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
            ], 512)) : m.value ? (k(), T("div", dE, [
              p("button", {
                onClick: y,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                s.value ? (k(), T("span", pE, "Loading...")) : (k(), T("span", hE, "Load More (" + X(_.value) + " remaining)", 1))
              ], 8, fE)
            ])) : z("", !0),
            !e.enableInfiniteScroll && f.value > 1 ? (k(), T("nav", mE, [
              p("div", gE, [
                p("button", {
                  onClick: g[1] || (g[1] = (C) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, vE),
                p("button", {
                  onClick: g[2] || (g[2] = (C) => o.value++),
                  disabled: o.value === f.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, yE)
              ]),
              p("div", bE, [
                p("div", null, [
                  p("nav", _E, [
                    p("button", {
                      onClick: g[3] || (g[3] = (C) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, g[9] || (g[9] = [
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
                    ]), 8, EE),
                    (k(!0), T(ce, null, Ve(b.value, (C) => (k(), T("button", {
                      key: C,
                      onClick: (A) => o.value = C,
                      class: Ie([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === C ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, X(C), 11, wE))), 128)),
                    p("button", {
                      onClick: g[4] || (g[4] = (C) => o.value++),
                      disabled: o.value === f.value,
                      class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, g[10] || (g[10] = [
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
                    ]), 8, NE)
                  ])
                ])
              ])
            ])) : z("", !0)
          ])) : z("", !0)
        ])
      ]),
      (k(), _t(ds, { to: "body" }, [
        a.value ? (k(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: Ht(E, ["self"])
        }, [
          p("div", xE, [
            p("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: E
            }),
            p("div", SE, [
              p("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                p("button", {
                  onClick: E,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, g[11] || (g[11] = [
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
              p("div", CE, [
                p("h3", kE, X(a.value.title), 1),
                g[12] || (g[12] = p("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : z("", !0)
      ]))
    ]));
  }
}, TE = { class: "product-gallery" }, DE = { class: "main-image-wrapper" }, VE = ["src", "alt"], $E = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, AE = {
  key: 0,
  class: "thumbnails-wrapper"
}, IE = ["disabled"], ME = ["onClick", "aria-label"], PE = ["src", "alt"], RE = ["disabled"], LE = {
  key: 1,
  class: "swiper-dots"
}, FE = ["onClick", "aria-label"], BE = ["src", "alt"], jE = { class: "lightbox-counter" }, HE = 80, Wo = 4, Vc = 2, UE = {
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
    const t = e, n = q(0), s = q(!1), o = q(!1), i = q(!1), r = q(!1), l = q(0), a = q(null), u = q(0), d = q(0), c = q({}), f = te(() => t.images.map((P) => {
      if (P.src)
        return P;
      const N = P.url || P;
      return {
        src: `${N}?width=${t.imageTransformWidth}`,
        thumbnail: `${N}?width=${t.thumbnailWidth}`,
        alt: P.alt || t.productTitle
      };
    })), m = te(() => f.value[n.value] || { src: "", alt: "" }), _ = te(() => ({
      width: "150px",
      height: "150px",
      left: `${u.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), b = te(() => {
      const N = u.value / c.value.width * 100, g = d.value / c.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${c.value.width * Vc}px ${c.value.height * Vc}px`,
        backgroundPosition: `${N}% ${g}%`
      };
    }), D = (P) => {
      s.value = !0, n.value = P;
    }, O = (P) => {
      P === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        f.value.length - Wo,
        l.value + 1
      );
    }, y = (P) => {
      n.value = P, o.value = !0, document.body.style.overflow = "hidden";
    }, h = () => {
      o.value = !1, document.body.style.overflow = "";
    }, x = (P) => {
      P === "prev" ? n.value = n.value > 0 ? n.value - 1 : f.value.length - 1 : n.value = n.value < f.value.length - 1 ? n.value + 1 : 0;
    }, E = (P) => {
      const N = P.currentTarget.getBoundingClientRect();
      c.value = N, u.value = P.clientX - N.left, d.value = P.clientY - N.top;
    }, { lengthX: V } = nb(
      a,
      {
        onSwipeEnd() {
          V.value > 50 ? O("prev") : V.value < -50 && O("next");
        }
      }
    );
    return Ye(() => {
      r.value = window.innerWidth < 768;
      const P = () => {
        r.value = window.innerWidth < 768;
      }, N = (g) => {
        o.value && (g.key === "Escape" && h(), g.key === "ArrowLeft" && x("prev"), g.key === "ArrowRight" && x("next"));
      };
      window.addEventListener("resize", P), window.addEventListener("keydown", N), It(() => {
        window.removeEventListener("resize", P), window.removeEventListener("keydown", N);
      });
    }), (P, N) => (k(), T("div", TE, [
      p("div", DE, [
        p("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: N[1] || (N[1] = (g) => y(n.value)),
          onMouseenter: N[2] || (N[2] = (g) => i.value = !0),
          onMouseleave: N[3] || (N[3] = (g) => i.value = !1),
          onMousemove: E
        }, [
          p("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Ie(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: N[0] || (N[0] = (g) => s.value = !1)
          }, null, 42, VE),
          s.value ? (k(), T("div", $E, N[9] || (N[9] = [
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
          i.value && !r.value ? (k(), T("div", {
            key: 1,
            class: "zoom-lens",
            style: dt(_.value)
          }, null, 4)) : z("", !0)
        ], 32),
        i.value && !r.value ? (k(), T("div", {
          key: 0,
          class: "zoom-preview",
          style: dt(b.value)
        }, null, 4)) : z("", !0)
      ]),
      f.value.length > 1 ? (k(), T("div", AE, [
        f.value.length > Wo ? (k(), T("button", {
          key: 0,
          onClick: N[4] || (N[4] = (g) => O("prev")),
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
        ]), 8, IE)) : z("", !0),
        p("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          p("div", {
            class: "thumbnails-track",
            style: dt({ transform: `translateX(-${l.value * (HE + 8)}px)` })
          }, [
            (k(!0), T(ce, null, Ve(f.value, (g, C) => (k(), T("button", {
              key: C,
              onClick: (A) => D(C),
              class: Ie(["thumbnail", { active: C === n.value }]),
              "aria-label": `View image ${C + 1}`
            }, [
              p("img", {
                src: g.thumbnail || g.src,
                alt: g.alt,
                class: "w-full h-full object-contain"
              }, null, 8, PE)
            ], 10, ME))), 128))
          ], 4)
        ], 512),
        f.value.length > Wo ? (k(), T("button", {
          key: 1,
          onClick: N[5] || (N[5] = (g) => O("next")),
          disabled: l.value >= f.value.length - Wo,
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
        ]), 8, RE)) : z("", !0)
      ])) : z("", !0),
      f.value.length > 1 && r.value ? (k(), T("div", LE, [
        (k(!0), T(ce, null, Ve(f.value, (g, C) => (k(), T("button", {
          key: C,
          onClick: (A) => D(C),
          class: Ie(["swiper-dot", { active: C === n.value }]),
          "aria-label": `Go to image ${C + 1}`
        }, null, 10, FE))), 128))
      ])) : z("", !0),
      (k(), _t(ds, { to: "body" }, [
        o.value ? (k(), T("div", {
          key: 0,
          class: "lightbox",
          onClick: h
        }, [
          p("button", {
            onClick: h,
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
          f.value.length > 1 ? (k(), T("button", {
            key: 0,
            onClick: N[6] || (N[6] = Ht((g) => x("prev"), ["stop"])),
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
            }, null, 8, BE)
          ]),
          f.value.length > 1 ? (k(), T("button", {
            key: 1,
            onClick: N[8] || (N[8] = Ht((g) => x("next"), ["stop"])),
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
          p("div", jE, X(n.value + 1) + " / " + X(f.value.length), 1)
        ])) : z("", !0)
      ]))
    ]));
  }
}, qE = /* @__PURE__ */ it(UE, [["__scopeId", "data-v-a7c1d2a3"]]), zE = { class: "product-info" }, KE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, WE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, GE = { class: "price-wrapper mb-6" }, YE = { class: "flex items-baseline gap-3" }, JE = { class: "text-3xl font-semibold text-gray-900" }, XE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, QE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, ZE = {
  key: 1,
  class: "mb-6"
}, e2 = ["product", "current-variant"], t2 = ["value"], n2 = { class: "mb-4" }, s2 = ["max"], o2 = { class: "mb-4" }, i2 = {
  key: 0,
  class: "text-red-600 font-medium"
}, r2 = {
  key: 1,
  class: "text-amber-600"
}, l2 = {
  key: 2,
  class: "text-green-600"
}, a2 = { class: "flex flex-col sm:flex-row gap-3" }, c2 = ["disabled"], u2 = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, d2 = { key: 1 }, f2 = { key: 2 }, p2 = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, h2 = ["innerHTML"], m2 = { class: "space-y-4" }, g2 = {
  key: 0,
  class: "group"
}, v2 = ["innerHTML"], y2 = {
  key: 1,
  class: "group"
}, b2 = { class: "mt-8 pt-8 border-t" }, _2 = { class: "flex gap-3" }, E2 = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, w2 = {
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
    const n = e, s = t, o = q(n.product.selected_or_first_available_variant || ((D = n.product.variants) == null ? void 0 : D[0]) || {}), i = q(1), r = q(!1), l = q(!1), a = te(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), u = te(() => {
      var O;
      return (O = n.product.options) == null ? void 0 : O.some(
        (y) => y.name.toLowerCase() === "size" || y.name.toLowerCase() === "taille"
      );
    }), d = (O) => `$${(O / 100).toFixed(2)}`, c = (O) => {
      o.value = O, s("variant-change", O);
      const y = new URL(window.location);
      y.searchParams.set("variant", O.id), window.history.replaceState({}, "", y);
    }, f = async () => {
      var y;
      r.value = !0;
      const O = new FormData();
      O.append("id", o.value.id), O.append("quantity", i.value);
      try {
        await ((y = window.OrionCart) == null ? void 0 : y.addItem(O));
        const h = event.target, x = h.textContent;
        h.textContent = "✓ Added to Cart", setTimeout(() => {
          h.textContent = x;
        }, 2e3);
      } catch (h) {
        console.error("Failed to add to cart:", h), alert("Failed to add item to cart. Please try again.");
      } finally {
        r.value = !1;
      }
    }, m = async () => {
      await f(), window.location.href = "/checkout";
    }, _ = (O) => {
      const y = window.location.href, h = n.product.title, x = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(y)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(y)}&text=${encodeURIComponent(h)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(y)}&description=${encodeURIComponent(h)}`
      };
      x[O] && window.open(x[O], "_blank", "width=600,height=400");
    }, b = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (O) {
        console.error("Failed to copy link:", O);
      }
    };
    return nn(() => n.product.selected_variant, (O) => {
      O && (o.value = O);
    }), (O, y) => (k(), T("div", zE, [
      p("h1", KE, X(e.product.title), 1),
      e.product.vendor ? (k(), T("p", WE, " by " + X(e.product.vendor), 1)) : z("", !0),
      p("div", GE, [
        p("div", YE, [
          p("span", JE, X(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (k(), T("span", XE, X(d(o.value.compare_at_price)), 1)) : z("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (k(), T("p", QE, " Save " + X(d(o.value.compare_at_price - o.value.price)) + " (" + X(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : z("", !0)
      ]),
      e.product.has_only_default_variant ? z("", !0) : (k(), T("div", ZE, [
        p("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: c
        }, null, 40, e2)
      ])),
      p("form", {
        onSubmit: Ht(f, ["prevent"]),
        class: "mb-8"
      }, [
        p("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, t2),
        p("div", n2, [
          y[4] || (y[4] = p("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          wt(p("quantity-selector", {
            "onUpdate:modelValue": y[0] || (y[0] = (h) => i.value = h),
            min: 1,
            max: a.value
          }, null, 8, s2), [
            [ls, i.value]
          ])
        ]),
        p("div", o2, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (k(), T("p", r2, " Only " + X(o.value.inventory_quantity) + " left in stock ", 1)) : (k(), T("p", l2, " ✓ In Stock ")) : (k(), T("p", i2, " Out of Stock "))
        ]),
        p("div", a2, [
          p("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || r.value
          }, [
            r.value ? (k(), T("span", u2, y[5] || (y[5] = [
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
            ]))) : o.value.available ? (k(), T("span", f2, " Add to Cart ")) : (k(), T("span", d2, " Sold Out "))
          ], 8, c2),
          e.showBuyNow ? (k(), _t(xs, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Ge(() => y[6] || (y[6] = [
              Le(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : z("", !0)
        ])
      ], 32),
      e.product.description ? (k(), T("div", p2, [
        y[7] || (y[7] = p("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        p("div", {
          innerHTML: e.product.description
        }, null, 8, h2)
      ])) : z("", !0),
      p("div", m2, [
        y[10] || (y[10] = Ts('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (k(), T("details", g2, [
          y[8] || (y[8] = p("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
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
          }, null, 8, v2)
        ])) : z("", !0),
        u.value ? (k(), T("details", y2, y[9] || (y[9] = [
          Ts('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : z("", !0)
      ]),
      p("div", b2, [
        y[15] || (y[15] = p("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        p("div", _2, [
          p("button", {
            onClick: y[1] || (y[1] = (h) => _("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, y[11] || (y[11] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          p("button", {
            onClick: y[2] || (y[2] = (h) => _("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, y[12] || (y[12] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          p("button", {
            onClick: y[3] || (y[3] = (h) => _("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, y[13] || (y[13] = [
            p("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              p("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          p("button", {
            onClick: b,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            y[14] || (y[14] = p("svg", {
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
            l.value ? (k(), T("span", E2, " Link copied! ")) : z("", !0)
          ])
        ])
      ])
    ]));
  }
}, N2 = /* @__PURE__ */ it(w2, [["__scopeId", "data-v-9e2c3b5c"]]), x2 = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, S2 = { class: "space-y-3 mb-4" }, C2 = { class: "flex justify-between text-sm" }, k2 = { class: "text-gray-600" }, O2 = { class: "font-medium text-gray-900" }, T2 = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, D2 = {
  key: 1,
  class: "flex justify-between text-sm"
}, V2 = { class: "text-gray-900" }, $2 = {
  key: 2,
  class: "flex justify-between text-sm"
}, A2 = { class: "text-gray-900" }, I2 = { class: "border-t pt-4 mb-6" }, M2 = { class: "flex justify-between items-baseline" }, P2 = { class: "text-right" }, R2 = { class: "text-xl font-bold text-gray-900" }, L2 = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, F2 = { class: "mb-6" }, B2 = { class: "group" }, j2 = { class: "mt-3" }, H2 = ["disabled"], U2 = ["disabled"], q2 = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, z2 = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, K2 = ["disabled"], W2 = {
  key: 0,
  class: "flex items-center gap-2"
}, G2 = { key: 1 }, Y2 = {
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
    const n = e, s = t, o = q(""), i = q(""), r = q(""), l = q(!1), a = q(!1), u = te(() => n.cart.item_count || 0), d = te(() => n.cart.total_price || 0), c = te(() => n.cart.original_total_price || n.cart.total_price || 0), f = te(() => n.cart.total_discount || 0), m = te(() => d.value >= 5e3 ? 0 : 500), _ = te(() => Math.round(d.value * 0.1)), b = (y) => `$${(y / 100).toFixed(2)}`, D = async () => {
      var y;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, i.value = "", r.value = "";
        try {
          const h = new FormData();
          h.append("discount_code", o.value);
          const x = await fetch("/discount/apply", {
            method: "POST",
            body: h
          });
          if (x.ok)
            r.value = "Promo code applied successfully!", o.value = "", await ((y = window.OrionCart) == null ? void 0 : y.fetchCart());
          else {
            const E = await x.json();
            i.value = E.message || "Invalid promo code";
          }
        } catch (h) {
          console.error("Failed to apply promo code:", h), i.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, O = async () => {
      if (!(u.value === 0 || a.value)) {
        a.value = !0;
        try {
          s("checkout"), window.location.href = "/checkout";
        } catch (y) {
          console.error("Failed to proceed to checkout:", y), alert("Failed to proceed to checkout. Please try again.");
        } finally {
          a.value = !1;
        }
      }
    };
    return (y, h) => (k(), T("div", x2, [
      h[8] || (h[8] = p("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      p("div", S2, [
        p("div", C2, [
          p("span", k2, "Subtotal (" + X(u.value) + " " + X(u.value === 1 ? "item" : "items") + ")", 1),
          p("span", O2, X(b(c.value)), 1)
        ]),
        f.value > 0 ? (k(), T("div", T2, [
          h[1] || (h[1] = p("span", { class: "flex items-center gap-1" }, [
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
          p("span", null, "-" + X(b(f.value)), 1)
        ])) : z("", !0),
        e.showShipping ? (k(), T("div", D2, [
          h[2] || (h[2] = p("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          p("span", V2, X(m.value === 0 ? "Free" : b(m.value)), 1)
        ])) : z("", !0),
        e.showTax ? (k(), T("div", $2, [
          h[3] || (h[3] = p("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          p("span", A2, X(b(_.value)), 1)
        ])) : z("", !0)
      ]),
      p("div", I2, [
        p("div", M2, [
          h[4] || (h[4] = p("span", { class: "text-lg font-semibold" }, "Total", -1)),
          p("div", P2, [
            p("span", R2, X(b(d.value)), 1),
            f.value > 0 ? (k(), T("p", L2, " You saved " + X(b(f.value)) + "! ", 1)) : z("", !0)
          ])
        ])
      ]),
      p("div", F2, [
        p("details", B2, [
          h[5] || (h[5] = p("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          p("div", j2, [
            p("form", {
              onSubmit: Ht(D, ["prevent"]),
              class: "flex gap-2"
            }, [
              wt(p("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (x) => o.value = x),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, H2), [
                [ls, o.value]
              ]),
              p("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !o.value.trim() || l.value
              }, X(l.value ? "Applying..." : "Apply"), 9, U2)
            ], 32),
            i.value ? (k(), T("p", q2, X(i.value), 1)) : z("", !0),
            r.value ? (k(), T("p", z2, X(r.value), 1)) : z("", !0)
          ])
        ])
      ]),
      p("button", {
        onClick: O,
        class: "w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        disabled: u.value === 0 || a.value
      }, [
        a.value ? (k(), T("span", W2, h[6] || (h[6] = [
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
        ]))) : (k(), T("span", G2, h[7] || (h[7] = [
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
      ], 8, K2),
      h[9] || (h[9] = Ts('<div class="mt-6 space-y-2" data-v-d638da26><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-d638da26></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-d638da26></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-d638da26></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d638da26></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-d638da26><p class="text-xs text-gray-600 mb-2" data-v-d638da26>We accept</p><div class="flex gap-2" data-v-d638da26><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-d638da26></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#EB001B" data-v-d638da26></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-d638da26></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-d638da26></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-d638da26></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#253B80" data-v-d638da26></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-d638da26></path></svg></div></div>', 2))
    ]));
  }
}, J2 = /* @__PURE__ */ it(Y2, [["__scopeId", "data-v-d638da26"]]), X2 = { class: "slideshow-banner" }, Q2 = {
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
      const b = document.querySelector(".slideshow-prev"), D = document.querySelector(".slideshow-next"), O = document.querySelectorAll(".slide-indicator");
      b && b.addEventListener("click", d), D && D.addEventListener("click", u), O.forEach((y, h) => {
        y.addEventListener("click", () => a(h));
      }), i.value && c();
    }, a = (b) => {
      var y, h, x, E;
      if (b === n.value || !s.value.length) return;
      (y = s.value[n.value]) == null || y.classList.remove("opacity-100"), (h = s.value[n.value]) == null || h.classList.add("opacity-0");
      const D = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      D == null || D.classList.remove("opacity-100"), D == null || D.classList.add("opacity-50"), n.value = b, (x = s.value[n.value]) == null || x.classList.remove("opacity-0"), (E = s.value[n.value]) == null || E.classList.add("opacity-100");
      const O = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      O == null || O.classList.remove("opacity-50"), O == null || O.classList.add("opacity-100");
    }, u = () => {
      const b = (n.value + 1) % s.value.length;
      a(b);
    }, d = () => {
      const b = n.value === 0 ? s.value.length - 1 : n.value - 1;
      a(b);
    }, c = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        u();
      }, r.value);
    }, f = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, m = () => {
      i.value && f();
    }, _ = () => {
      i.value && c();
    };
    return Ye(() => {
      setTimeout(l, 100);
      const b = document.querySelector(".slideshow-wrapper");
      b && (b.addEventListener("mouseenter", m), b.addEventListener("mouseleave", _));
    }), It(() => {
      f();
      const b = document.querySelector(".slideshow-wrapper");
      b && (b.removeEventListener("mouseenter", m), b.removeEventListener("mouseleave", _));
    }), (b, D) => (k(), T("div", X2, [
      Bn(b.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Z2 = /* @__PURE__ */ it(Q2, [["__scopeId", "data-v-8690c751"]]), ew = { class: "testimonials-carousel relative" }, tw = {
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
      const E = document.querySelector(".testimonials-prev"), V = document.querySelector(".testimonials-next"), P = document.querySelectorAll(".testimonial-indicator");
      E && E.addEventListener("click", c), V && V.addEventListener("click", d), P.forEach((N, g) => {
        N.addEventListener("click", () => u(g));
      }), r.value && f();
    }, u = (E) => {
      if (E === n.value || !s.value.length || !i.value) return;
      n.value = E;
      const P = -s.value[0].offsetWidth * n.value;
      i.value.style.transform = `translateX(${P}px)`, document.querySelectorAll(".testimonial-indicator").forEach((g, C) => {
        C === n.value ? (g.classList.remove("bg-gray-300"), g.classList.add("bg-red-600")) : (g.classList.remove("bg-red-600"), g.classList.add("bg-gray-300"));
      });
    }, d = () => {
      const E = (n.value + 1) % s.value.length;
      u(E);
    }, c = () => {
      const E = n.value === 0 ? s.value.length - 1 : n.value - 1;
      u(E);
    }, f = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        d();
      }, l.value);
    }, m = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, _ = () => {
      r.value && m();
    }, b = () => {
      r.value && f();
    };
    let D = 0, O = 0;
    const y = (E) => {
      D = E.changedTouches[0].screenX;
    }, h = (E) => {
      O = E.changedTouches[0].screenX, x();
    }, x = () => {
      const V = D - O;
      Math.abs(V) > 50 && (V > 0 ? d() : c());
    };
    return Ye(() => {
      setTimeout(a, 100);
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.addEventListener("mouseenter", _), E.addEventListener("mouseleave", b), E.addEventListener("touchstart", y), E.addEventListener("touchend", h));
    }), It(() => {
      m();
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.removeEventListener("mouseenter", _), E.removeEventListener("mouseleave", b), E.removeEventListener("touchstart", y), E.removeEventListener("touchend", h));
    }), (E, V) => (k(), T("div", ew, [
      Bn(E.$slots, "default", {}, void 0, !0)
    ]));
  }
}, nw = /* @__PURE__ */ it(tw, [["__scopeId", "data-v-276cc4e8"]]), sw = { class: "video-player relative w-full h-full" }, ow = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, iw = ["src", "title"], rw = {
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
    const t = e, n = q(!1), s = q(""), o = q(""), i = te(() => t.autoplay === !0 || t.autoplay === "true"), r = te(() => t.muted === !0 || t.muted === "true"), l = te(() => t.controls === !0 || t.controls === "true"), a = te(() => `${s.value} video player`), u = te(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const _ = i.value ? "1" : "0", b = r.value ? "1" : "0", D = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${_}&mute=${b}&controls=${D}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${_}&muted=${b}&controls=${D}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
      if (!m) return { type: "", id: "" };
      const _ = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const D of _) {
        const O = m.match(D);
        if (O)
          return { type: "youtube", id: O[1] };
      }
      const b = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const D of b) {
        const O = m.match(D);
        if (O)
          return { type: "vimeo", id: O[1] };
      }
      return { type: "", id: "" };
    }, c = () => {
      o.value && s.value && (n.value = !0);
    }, f = () => {
      i.value && o.value && s.value && (n.value = !0);
    };
    return Ye(() => {
      const m = d(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const _ = document.querySelector(".play-button");
      _ && _.addEventListener("click", c), f();
    }), (m, _) => (k(), T("div", sw, [
      n.value ? (k(), T("div", ow, [
        p("iframe", {
          src: u.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, iw)
      ])) : (k(), T("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: c
      }, [
        Bn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, lw = /* @__PURE__ */ it(rw, [["__scopeId", "data-v-540fecb2"]]), aw = { class: "password-modal" }, cw = {
  __name: "PasswordModal",
  setup(e) {
    const t = q(!1), n = () => {
      t.value = !0, document.body.style.overflow = "hidden";
    }, s = () => {
      t.value = !1, document.body.style.overflow = "";
    }, o = (u) => {
      u.preventDefault(), t.value ? s() : n();
    }, i = (u) => {
      u.key === "Escape" && t.value && s();
    }, r = (u) => {
      const d = document.querySelector(".password-content"), c = document.querySelector(".password-toggle");
      t.value && d && !d.contains(u.target) && !c.contains(u.target) && s();
    };
    Ye(() => {
      const u = document.querySelector(".password-toggle");
      u && u.addEventListener("click", o), document.addEventListener("keydown", i), document.addEventListener("click", r), setTimeout(() => {
        n();
      }, 500);
    });
    const l = () => {
      const u = document.querySelector(".password-content");
      u && (t.value ? (u.style.display = "block", u.style.opacity = "1", u.style.transform = "translateY(0)") : (u.style.opacity = "0", u.style.transform = "translateY(-20px)", setTimeout(() => {
        t.value || (u.style.display = "none");
      }, 300)));
    }, a = (u) => {
      let d = t.value;
      const c = setInterval(() => {
        t.value !== d && (u(t.value, d), d = t.value);
      }, 50);
      return () => clearInterval(c);
    };
    return Ye(() => {
      a(() => {
        l();
      });
    }), (u, d) => (k(), T("div", aw, [
      Bn(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}, uw = /* @__PURE__ */ it(cw, [["__scopeId", "data-v-075988c6"]]), dw = {
  duration: 3e3,
  // Auto-dismiss after 3 seconds
  position: "top-right",
  // top-right, top-left, bottom-right, bottom-left
  maxNotifications: 5,
  // Maximum number of notifications to show at once
  animation: {
    enter: "translate-x-full",
    // Initial state (off-screen)
    enterActive: "transition-all duration-300 transform",
    // Transition classes
    leave: "translate-x-full"
    // Final state (off-screen)
  },
  styles: {
    base: "fixed z-50 px-6 py-3 rounded-lg shadow-lg font-medium text-sm",
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    warning: "bg-yellow-600 text-white",
    info: "bg-blue-600 text-white"
  }
};
let Vn = { ...dw }, $n = [], fw = 0;
function $c(e) {
  Vn = { ...Vn, ...e };
}
function pw() {
  return { ...Vn };
}
function hw(e) {
  const t = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2"
  };
  return t[e] || t["top-right"];
}
function Io(e, t = "info", n = {}) {
  var l, a, u, d;
  const o = { ...{
    ...Vn,
    position: ((l = window.themeSettings) == null ? void 0 : l.notificationPosition) || Vn.position,
    duration: ((a = window.themeSettings) == null ? void 0 : a.notificationDuration) || Vn.duration,
    maxNotifications: ((u = window.themeSettings) == null ? void 0 : u.notificationMaxCount) || Vn.maxNotifications,
    showCloseButton: ((d = window.themeSettings) == null ? void 0 : d.notificationShowCloseButton) !== !1
  }, ...n }, i = ++fw, r = document.createElement("div");
  if (r.id = `notification-${i}`, r.className = [
    o.styles.base,
    o.styles[t] || o.styles.info,
    o.animation.enterActive,
    o.animation.enter,
    hw(o.position)
  ].join(" "), typeof e == "string" ? r.textContent = e : e instanceof HTMLElement && r.appendChild(e), o.showCloseButton !== !1) {
    const c = document.createElement("button");
    c.innerHTML = "×", c.className = "ml-3 text-lg font-bold opacity-70 hover:opacity-100 transition-opacity", c.onclick = () => co(i), r.appendChild(c);
  }
  if (document.body.appendChild(r), $n.push({
    id: i,
    element: r,
    timer: null
  }), $n.length > o.maxNotifications) {
    const c = $n.shift();
    co(c.id, !1);
  }
  if (requestAnimationFrame(() => {
    r.classList.remove(o.animation.enter);
  }), o.duration > 0) {
    const c = $n.find((f) => f.id === i);
    c && (c.timer = setTimeout(() => {
      co(i);
    }, o.duration));
  }
  return i;
}
function co(e, t = !0) {
  const n = $n.findIndex((r) => r.id === e);
  if (n === -1) return;
  const s = $n[n], { element: o, timer: i } = s;
  i && clearTimeout(i), t ? (o.classList.add(Vn.animation.leave), setTimeout(() => {
    document.body.contains(o) && document.body.removeChild(o);
  }, 300)) : document.body.contains(o) && document.body.removeChild(o), $n.splice(n, 1);
}
function mw() {
  $n.forEach(({ id: e }) => {
    co(e, !1);
  });
}
function Hf(e, t = {}) {
  return Io(e, "success", t);
}
function Uf(e, t = {}) {
  return Io(e, "error", t);
}
function gw(e, t = {}) {
  return Io(e, "warning", t);
}
function vw(e, t = {}) {
  return Io(e, "info", t);
}
function yw(e, t = 1) {
  const n = t === 1 ? `${e} added to cart!` : `${t}x ${e} added to cart!`;
  return Hf(n);
}
function bw(e = "Failed to add item to cart. Please try again.") {
  return Uf(e);
}
function _w(e = {}) {
  return $c(e), window.OrionNotifications = {
    show: Io,
    success: Hf,
    error: Uf,
    warning: gw,
    info: vw,
    cartSuccess: yw,
    cartError: bw,
    dismiss: co,
    dismissAll: mw,
    config: {
      set: $c,
      get: pw
    }
  }, window.OrionNotifications;
}
const Ew = /* @__PURE__ */ Fe({
  ...xs,
  props: {
    ...xs.props,
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
}), ww = /* @__PURE__ */ Fe(Lf), Nw = /* @__PURE__ */ Fe(Ff), xw = /* @__PURE__ */ Fe(W1), Sw = /* @__PURE__ */ Fe(Pf), Cw = /* @__PURE__ */ Fe(ib), kw = /* @__PURE__ */ Fe(jf), Ow = /* @__PURE__ */ Fe(Qb), Tw = /* @__PURE__ */ Fe(W_), Dw = /* @__PURE__ */ Fe(OE), Vw = /* @__PURE__ */ Fe(qE), $w = /* @__PURE__ */ Fe(N2), Aw = /* @__PURE__ */ Fe(Rf), Iw = /* @__PURE__ */ Fe(J2), Mw = /* @__PURE__ */ Fe(Z2), Pw = /* @__PURE__ */ Fe(nw), Rw = /* @__PURE__ */ Fe(lw), Lw = /* @__PURE__ */ Fe(uw);
customElements.define("orion-button", Ew);
customElements.define("cart-drawer", ww);
customElements.define("mobile-menu", Nw);
customElements.define("product-variant-picker", xw);
customElements.define("quantity-selector", Sw);
customElements.define("sticky-header", Cw);
customElements.define("main-header", kw);
customElements.define("site-footer", Ow);
customElements.define("collection-filters", Tw);
customElements.define("collection-grid", Dw);
customElements.define("product-gallery", Vw);
customElements.define("product-info", $w);
customElements.define("cart-item", Aw);
customElements.define("cart-summary", Iw);
customElements.define("slideshow-banner", Mw);
customElements.define("testimonials-carousel", Pw);
customElements.define("video-player", Rw);
customElements.define("password-modal", Lw);
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
  }, document.querySelectorAll(".main-header-mount").forEach((i) => {
    Wn(jf, {
      shopName: i.dataset.shopName || "Orion Store",
      logoUrl: i.dataset.logoUrl || "",
      navigationLinks: JSON.parse(i.dataset.navigationLinks || "[]")
    }).mount(i);
  }), document.querySelectorAll(".mobile-menu-mount").forEach((i) => {
    Wn(Ff, {
      menuItems: JSON.parse(i.dataset.menuItems || "[]"),
      customerUrl: i.dataset.customerUrl || "/account",
      showLocalization: i.dataset.showLocalization === "true"
    }).mount(i);
  }), document.querySelectorAll(".cart-drawer-mount").forEach((i) => {
    Wn(Lf).mount(i);
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
    Wn(w_, r).mount(i);
  }), document.querySelectorAll(".sticky-header").forEach((i) => {
    if (i.dataset.sticky === "true") {
      let r = window.scrollY;
      window.addEventListener("scroll", () => {
        const l = window.scrollY, a = i.dataset.transparent === "true", u = i.dataset.hideOnScroll === "true";
        l > 100 && !a ? (i.classList.add("sticky", "top-0", "shadow-md"), i.style.backgroundColor = i.dataset.stickyBackground || "#ffffff") : (i.classList.remove("sticky", "shadow-md"), i.style.backgroundColor = ""), u && (l > r && l > 100 ? i.style.transform = "translateY(-100%)" : i.style.transform = "translateY(0)"), r = l;
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
        const r = await (await fetch(window.routes.cart_url + ".js")).json();
        return this.state.items = r.items, this.state.totalPrice = r.total_price, this.state.itemCount = r.item_count, document.dispatchEvent(new CustomEvent("cart:updated", { detail: r })), r;
      } catch (i) {
        console.error("Failed to fetch cart:", i);
      }
    },
    async addItem(i) {
      try {
        let r;
        i instanceof FormData ? r = await fetch(window.routes.cart_add_url, {
          method: "POST",
          body: i
        }) : r = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(i)
        });
        const l = await r.json();
        return await this.fetchCart(), this.openDrawer(), l;
      } catch (r) {
        console.error("Failed to add item to cart:", r);
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
  }), _w();
});
