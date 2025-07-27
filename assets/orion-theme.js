var nl = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = nl.NODE_ENV !== "production" ? Object.freeze({}) : {}, ms = nl.NODE_ENV !== "production" ? Object.freeze([]) : [], Te = () => {
}, Ks = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zo = (e) => e.startsWith("onUpdate:"), de = Object.assign, sl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Lf = Object.prototype.hasOwnProperty, ge = (e, t) => Lf.call(e, t), G = Array.isArray, Yn = (e) => Rs(e) === "[object Map]", ls = (e) => Rs(e) === "[object Set]", ra = (e) => Rs(e) === "[object Date]", Ff = (e) => Rs(e) === "[object RegExp]", oe = (e) => typeof e == "function", re = (e) => typeof e == "string", Et = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Oi = (e) => (me(e) || oe(e)) && oe(e.then) && oe(e.catch), Tc = Object.prototype.toString, Rs = (e) => Tc.call(e), ol = (e) => Rs(e).slice(8, -1), Ti = (e) => Rs(e) === "[object Object]", il = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $c = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), $i = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Bf = /-(\w)/g, Se = $i(
  (e) => e.replace(Bf, (t, n) => n ? n.toUpperCase() : "")
), jf = /\B([A-Z])/g, et = $i(
  (e) => e.replace(jf, "-$1").toLowerCase()
), on = $i((e) => e.charAt(0).toUpperCase() + e.slice(1)), en = $i(
  (e) => e ? `on${on(e)}` : ""
), at = (e, t) => !Object.is(e, t), On = (e, ...t) => {
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
let la;
const No = () => la || (la = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Hf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const Qs = {
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
}, Uf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, qf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", zf = /* @__PURE__ */ Ke(qf), aa = 2;
function Kf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const o = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let i = 0;
  const r = [];
  for (let l = 0; l < s.length; l++)
    if (i += s[l].length + (o[l] && o[l].length || 0), i >= t) {
      for (let a = l - aa; a <= l + aa || n > i; a++) {
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
  if (G(e)) {
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
const Wf = /;(?![^(]*\))/g, Gf = /:([^]+)/, Yf = /\/\*[^]*?\*\//g;
function Dc(e) {
  const t = {};
  return e.replace(Yf, "").split(Wf).forEach((n) => {
    if (n) {
      const s = n.split(Gf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Jf(e) {
  if (!e) return "";
  if (re(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (re(s) || typeof s == "number") {
      const o = n.startsWith("--") ? n : et(n);
      t += `${o}:${s};`;
    }
  }
  return t;
}
function Ve(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ve(e[n]);
      s && (t += s + " ");
    }
  else if (me(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Xf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !re(t) && (e.class = Ve(t)), n && (e.style = dt(n)), e;
}
const Qf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Zf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ep = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", tp = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Vc = /* @__PURE__ */ Ke(Qf), Ac = /* @__PURE__ */ Ke(Zf), Ic = /* @__PURE__ */ Ke(ep), np = /* @__PURE__ */ Ke(tp), Mc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", sp = /* @__PURE__ */ Ke(Mc), ca = /* @__PURE__ */ Ke(
  Mc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function rl(e) {
  return !!e || e === "";
}
const op = /* @__PURE__ */ Ke(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), ip = /* @__PURE__ */ Ke(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function rp(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const lp = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function ap(e, t) {
  return e.replace(
    lp,
    (n) => `\\${n}`
  );
}
function cp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Mn(e[s], t[s]);
  return n;
}
function Mn(e, t) {
  if (e === t) return !0;
  let n = ra(e), s = ra(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Et(e), s = Et(t), n || s)
    return e === t;
  if (n = G(e), s = G(t), n || s)
    return n && s ? cp(e, t) : !1;
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
const Pc = (e) => !!(e && e.__v_isRef === !0), W = (e) => re(e) ? e : e == null ? "" : G(e) || me(e) && (e.toString === Tc || !oe(e.toString)) ? Pc(e) ? W(e.value) : JSON.stringify(e, Rc, 2) : String(e), Rc = (e, t) => Pc(t) ? Rc(e, t.value) : Yn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[sr(s, i) + " =>"] = o, n),
    {}
  )
} : ls(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => sr(n))
} : Et(t) ? sr(t) : me(t) && !G(t) && !Ti(t) ? String(t) : t, sr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Lc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && nl.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var be = {};
function At(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Qe;
class ll {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Qe, !t && Qe && (this.index = (Qe.scopes || (Qe.scopes = [])).push(
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
      const n = Qe;
      try {
        return Qe = this, t();
      } finally {
        Qe = n;
      }
    } else be.NODE_ENV !== "production" && At("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Qe, Qe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Qe = this.prevScope, this.prevScope = void 0);
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
function up(e) {
  return new ll(e);
}
function al() {
  return Qe;
}
function Fc(e, t = !1) {
  Qe ? Qe.cleanups.push(e) : be.NODE_ENV !== "production" && !t && At(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let _e;
const or = /* @__PURE__ */ new WeakSet();
class ao {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qe && Qe.active && Qe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, or.has(this) && (or.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || jc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ua(this), Hc(this);
    const t = _e, n = Ht;
    _e = this, Ht = !0;
    try {
      return this.fn();
    } finally {
      be.NODE_ENV !== "production" && _e !== this && At(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Uc(this), _e = t, Ht = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        dl(t);
      this.deps = this.depsTail = void 0, ua(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? or.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Er(this) && this.run();
  }
  get dirty() {
    return Er(this);
  }
}
let Bc = 0, Zs, eo;
function jc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = eo, eo = e;
    return;
  }
  e.next = Zs, Zs = e;
}
function cl() {
  Bc++;
}
function ul() {
  if (--Bc > 0)
    return;
  if (eo) {
    let t = eo;
    for (eo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Zs; ) {
    let t = Zs;
    for (Zs = void 0; t; ) {
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
function Uc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), dl(s), dp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Er(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === co) || (e.globalVersion = co, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Er(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = _e, s = Ht;
  _e = e, Ht = !0;
  try {
    Hc(e);
    const o = e.fn(e._value);
    (t.version === 0 || at(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    _e = n, Ht = s, Uc(e), e.flags &= -3;
  }
}
function dl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), be.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      dl(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function dp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function fp(e, t) {
  e.effect instanceof ao && (e = e.effect.fn);
  const n = new ao(e);
  t && de(n, t);
  try {
    n.run();
  } catch (o) {
    throw n.stop(), o;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function pp(e) {
  e.effect.stop();
}
let Ht = !0;
const zc = [];
function zt() {
  zc.push(Ht), Ht = !1;
}
function Kt() {
  const e = zc.pop();
  Ht = e === void 0 ? !0 : e;
}
function ua(e) {
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
let co = 0;
class hp {
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
      n = this.activeLink = new hp(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Kc(n);
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
    this.version++, co++, this.notify(t);
  }
  notify(t) {
    cl();
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
      ul();
    }
  }
}
function Kc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Kc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), be.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ni = /* @__PURE__ */ new WeakMap(), Jn = Symbol(
  be.NODE_ENV !== "production" ? "Object iterate" : ""
), wr = Symbol(
  be.NODE_ENV !== "production" ? "Map keys iterate" : ""
), uo = Symbol(
  be.NODE_ENV !== "production" ? "Array iterate" : ""
);
function He(e, t, n) {
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
function tn(e, t, n, s, o, i) {
  const r = ni.get(e);
  if (!r) {
    co++;
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
  if (cl(), t === "clear")
    r.forEach(l);
  else {
    const a = G(e), c = a && il(n);
    if (a && n === "length") {
      const d = Number(s);
      r.forEach((u, h) => {
        (h === "length" || h === uo || !Et(h) && h >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), c && l(r.get(uo)), t) {
        case "add":
          a ? c && l(r.get("length")) : (l(r.get(Jn)), Yn(e) && l(r.get(wr)));
          break;
        case "delete":
          a || (l(r.get(Jn)), Yn(e) && l(r.get(wr)));
          break;
        case "set":
          Yn(e) && l(r.get(Jn));
          break;
      }
  }
  ul();
}
function mp(e, t) {
  const n = ni.get(e);
  return n && n.get(t);
}
function ds(e) {
  const t = ce(e);
  return t === e ? t : (He(t, "iterate", uo), nt(e) ? t : t.map(Ye));
}
function Ai(e) {
  return He(e = ce(e), "iterate", uo), e;
}
const gp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ir(this, Symbol.iterator, Ye);
  },
  concat(...e) {
    return ds(this).concat(
      ...e.map((t) => G(t) ? ds(t) : t)
    );
  },
  entries() {
    return ir(this, "entries", (e) => (e[1] = Ye(e[1]), e));
  },
  every(e, t) {
    return ln(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ln(this, "filter", e, t, (n) => n.map(Ye), arguments);
  },
  find(e, t) {
    return ln(this, "find", e, t, Ye, arguments);
  },
  findIndex(e, t) {
    return ln(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ln(this, "findLast", e, t, Ye, arguments);
  },
  findLastIndex(e, t) {
    return ln(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ln(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return rr(this, "includes", e);
  },
  indexOf(...e) {
    return rr(this, "indexOf", e);
  },
  join(e) {
    return ds(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return rr(this, "lastIndexOf", e);
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
    return da(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return da(this, "reduceRight", e, t);
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
    return ds(this).toReversed();
  },
  toSorted(e) {
    return ds(this).toSorted(e);
  },
  toSpliced(...e) {
    return ds(this).toSpliced(...e);
  },
  unshift(...e) {
    return Hs(this, "unshift", e);
  },
  values() {
    return ir(this, "values", Ye);
  }
};
function ir(e, t, n) {
  const s = Ai(e), o = s[t]();
  return s !== e && !nt(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const vp = Array.prototype;
function ln(e, t, n, s, o, i) {
  const r = Ai(e), l = r !== e && !nt(e), a = r[t];
  if (a !== vp[t]) {
    const u = a.apply(e, i);
    return l ? Ye(u) : u;
  }
  let c = n;
  r !== e && (l ? c = function(u, h) {
    return n.call(this, Ye(u), h, e);
  } : n.length > 2 && (c = function(u, h) {
    return n.call(this, u, h, e);
  }));
  const d = a.call(r, c, s);
  return l && o ? o(d) : d;
}
function da(e, t, n, s) {
  const o = Ai(e);
  let i = n;
  return o !== e && (nt(e) ? n.length > 3 && (i = function(r, l, a) {
    return n.call(this, r, l, a, e);
  }) : i = function(r, l, a) {
    return n.call(this, r, Ye(l), a, e);
  }), o[t](i, ...s);
}
function rr(e, t, n) {
  const s = ce(e);
  He(s, "iterate", uo);
  const o = s[t](...n);
  return (o === -1 || o === !1) && xs(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : o;
}
function Hs(e, t, n = []) {
  zt(), cl();
  const s = ce(e)[t].apply(e, n);
  return ul(), Kt(), s;
}
const yp = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), Wc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Et)
);
function bp(e) {
  Et(e) || (e = String(e));
  const t = ce(this);
  return He(t, "has", e), t.hasOwnProperty(e);
}
class Gc {
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
      return s === (o ? i ? eu : Zc : i ? Qc : Xc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = G(t);
    if (!o) {
      let a;
      if (r && (a = gp[n]))
        return a;
      if (n === "hasOwnProperty")
        return bp;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ae(t) ? t : s
    );
    return (Et(n) ? Wc.has(n) : yp(n)) || (o || He(t, "get", n), i) ? l : Ae(l) ? r && il(n) ? l : l.value : me(l) ? o ? Mi(l) : Ns(l) : l;
  }
}
class Yc extends Gc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Wt(i);
      if (!nt(s) && !Wt(s) && (i = ce(i), s = ce(s)), !G(t) && Ae(i) && !Ae(s))
        return a ? !1 : (i.value = s, !0);
    }
    const r = G(t) && il(n) ? Number(n) < t.length : ge(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ae(t) ? t : o
    );
    return t === ce(o) && (r ? at(s, i) && tn(t, "set", n, s, i) : tn(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ge(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && tn(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Et(n) || !Wc.has(n)) && He(t, "has", n), s;
  }
  ownKeys(t) {
    return He(
      t,
      "iterate",
      G(t) ? "length" : Jn
    ), Reflect.ownKeys(t);
  }
}
class Jc extends Gc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return be.NODE_ENV !== "production" && At(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return be.NODE_ENV !== "production" && At(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const _p = /* @__PURE__ */ new Yc(), Ep = /* @__PURE__ */ new Jc(), wp = /* @__PURE__ */ new Yc(!0), Np = /* @__PURE__ */ new Jc(!0), Nr = (e) => e, Vo = (e) => Reflect.getPrototypeOf(e);
function xp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = ce(o), r = Yn(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, c = o[e](...s), d = n ? Nr : t ? si : Ye;
    return !t && He(
      i,
      "iterate",
      a ? wr : Jn
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
      At(
        `${on(e)} operation ${n}failed: target is readonly.`,
        ce(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sp(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = ce(i), l = ce(o);
      e || (at(o, l) && He(r, "get", o), He(r, "get", l));
      const { has: a } = Vo(r), c = t ? Nr : e ? si : Ye;
      if (a.call(r, o))
        return c(i.get(o));
      if (a.call(r, l))
        return c(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && He(ce(o), "iterate", Jn), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, r = ce(i), l = ce(o);
      return e || (at(o, l) && He(r, "has", o), He(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = ce(l), c = t ? Nr : e ? si : Ye;
      return !e && He(a, "iterate", Jn), l.forEach((d, u) => o.call(i, c(d), c(u), r));
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
        !t && !nt(o) && !Wt(o) && (o = ce(o));
        const i = ce(this);
        return Vo(i).has.call(i, o) || (i.add(o), tn(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !nt(i) && !Wt(i) && (i = ce(i));
        const r = ce(this), { has: l, get: a } = Vo(r);
        let c = l.call(r, o);
        c ? be.NODE_ENV !== "production" && fa(r, l, o) : (o = ce(o), c = l.call(r, o));
        const d = a.call(r, o);
        return r.set(o, i), c ? at(i, d) && tn(r, "set", o, i, d) : tn(r, "add", o, i), this;
      },
      delete(o) {
        const i = ce(this), { has: r, get: l } = Vo(i);
        let a = r.call(i, o);
        a ? be.NODE_ENV !== "production" && fa(i, r, o) : (o = ce(o), a = r.call(i, o));
        const c = l ? l.call(i, o) : void 0, d = i.delete(o);
        return a && tn(i, "delete", o, void 0, c), d;
      },
      clear() {
        const o = ce(this), i = o.size !== 0, r = be.NODE_ENV !== "production" ? Yn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && tn(
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
    n[o] = xp(o, e, t);
  }), n;
}
function Ii(e, t) {
  const n = Sp(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
    o,
    i
  );
}
const kp = {
  get: /* @__PURE__ */ Ii(!1, !1)
}, Cp = {
  get: /* @__PURE__ */ Ii(!1, !0)
}, Op = {
  get: /* @__PURE__ */ Ii(!0, !1)
}, Tp = {
  get: /* @__PURE__ */ Ii(!0, !0)
};
function fa(e, t, n) {
  const s = ce(n);
  if (s !== n && t.call(e, s)) {
    const o = ol(e);
    At(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Xc = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), eu = /* @__PURE__ */ new WeakMap();
function $p(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $p(ol(e));
}
function Ns(e) {
  return Wt(e) ? e : Pi(
    e,
    !1,
    _p,
    kp,
    Xc
  );
}
function tu(e) {
  return Pi(
    e,
    !1,
    wp,
    Cp,
    Qc
  );
}
function Mi(e) {
  return Pi(
    e,
    !0,
    Ep,
    Op,
    Zc
  );
}
function Ft(e) {
  return Pi(
    e,
    !0,
    Np,
    Tp,
    eu
  );
}
function Pi(e, t, n, s, o) {
  if (!me(e))
    return be.NODE_ENV !== "production" && At(
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
  return Wt(e) ? hn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wt(e) {
  return !!(e && e.__v_isReadonly);
}
function nt(e) {
  return !!(e && e.__v_isShallow);
}
function xs(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function nu(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && ns(e, "__v_skip", !0), e;
}
const Ye = (e) => me(e) ? Ns(e) : e, si = (e) => me(e) ? Mi(e) : e;
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function U(e) {
  return ou(e, !1);
}
function su(e) {
  return ou(e, !0);
}
function ou(e, t) {
  return Ae(e) ? e : new Vp(e, t);
}
class Vp {
  constructor(t, n) {
    this.dep = new Vi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : Ye(t), this.__v_isShallow = n;
  }
  get value() {
    return be.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || nt(t) || Wt(t);
    t = s ? t : ce(t), at(t, n) && (this._rawValue = t, this._value = s ? t : Ye(t), be.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Ap(e) {
  e.dep && (be.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function xo(e) {
  return Ae(e) ? e.value : e;
}
function Ip(e) {
  return oe(e) ? e() : xo(e);
}
const Mp = {
  get: (e, t, n) => t === "__v_raw" ? e : xo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ae(o) && !Ae(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function fl(e) {
  return hn(e) ? e : new Proxy(e, Mp);
}
class Pp {
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
function iu(e) {
  return new Pp(e);
}
function Rp(e) {
  be.NODE_ENV !== "production" && !xs(e) && At("toRefs() expects a reactive object but received a plain one.");
  const t = G(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ru(e, n);
  return t;
}
class Lp {
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
    return mp(ce(this._object), this._key);
  }
}
class Fp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Bp(e, t, n) {
  return Ae(e) ? e : oe(e) ? new Fp(e) : me(e) && arguments.length > 1 ? ru(e, t, n) : U(e);
}
function ru(e, t, n) {
  const s = e[t];
  return Ae(s) ? s : new Lp(e, t, n);
}
class jp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Vi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = co - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _e !== this)
      return jc(this, !0), !0;
  }
  get value() {
    const t = be.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return qc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : be.NODE_ENV !== "production" && At("Write operation failed: computed value is readonly");
  }
}
function Hp(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const i = new jp(s, o, n);
  return be.NODE_ENV !== "production" && t && !n && (i.onTrack = t.onTrack, i.onTrigger = t.onTrigger), i;
}
const Up = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, qp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Io = {}, oi = /* @__PURE__ */ new WeakMap();
let Nn;
function zp() {
  return Nn;
}
function lu(e, t = !1, n = Nn) {
  if (n) {
    let s = oi.get(n);
    s || oi.set(n, s = []), s.push(e);
  } else be.NODE_ENV !== "production" && !t && At(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Kp(e, t, n = pe) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, c = (E) => {
    (n.onWarn || At)(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (E) => o ? E : nt(E) || o === !1 || o === 0 ? fn(E, 1) : fn(E);
  let u, h, m, v, g = !1, $ = !1;
  if (Ae(e) ? (h = () => e.value, g = nt(e)) : hn(e) ? (h = () => d(e), g = !0) : G(e) ? ($ = !0, g = e.some((E) => hn(E) || nt(E)), h = () => e.map((E) => {
    if (Ae(E))
      return E.value;
    if (hn(E))
      return d(E);
    if (oe(E))
      return a ? a(E, 2) : E();
    be.NODE_ENV !== "production" && c(E);
  })) : oe(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      zt();
      try {
        m();
      } finally {
        Kt();
      }
    }
    const E = Nn;
    Nn = u;
    try {
      return a ? a(e, 3, [v]) : e(v);
    } finally {
      Nn = E;
    }
  } : (h = Te, be.NODE_ENV !== "production" && c(e)), t && o) {
    const E = h, D = o === !0 ? 1 / 0 : o;
    h = () => fn(E(), D);
  }
  const S = al(), b = () => {
    u.stop(), S && S.active && sl(S.effects, u);
  };
  if (i && t) {
    const E = t;
    t = (...D) => {
      E(...D), b();
    };
  }
  let p = $ ? new Array(e.length).fill(Io) : Io;
  const w = (E) => {
    if (!(!(u.flags & 1) || !u.dirty && !E))
      if (t) {
        const D = u.run();
        if (o || g || ($ ? D.some((M, x) => at(M, p[x])) : at(D, p))) {
          m && m();
          const M = Nn;
          Nn = u;
          try {
            const x = [
              D,
              // pass undefined as the old value when it's changed for the first time
              p === Io ? void 0 : $ && p[0] === Io ? [] : p,
              v
            ];
            p = D, a ? a(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            Nn = M;
          }
        }
      } else
        u.run();
  };
  return l && l(w), u = new ao(h), u.scheduler = r ? () => r(w, !1) : w, v = (E) => lu(E, !1, u), m = u.onStop = () => {
    const E = oi.get(u);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const D of E) D();
      oi.delete(u);
    }
  }, be.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? w(!0) : p = u.run() : r ? r(w.bind(null, !0), !0) : u.run(), b.pause = u.pause.bind(u), b.resume = u.resume.bind(u), b.stop = b, b;
}
function fn(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ae(e))
    fn(e.value, t, n);
  else if (G(e))
    for (let s = 0; s < e.length; s++)
      fn(e[s], t, n);
  else if (ls(e) || Yn(e))
    e.forEach((s) => {
      fn(s, t, n);
    });
  else if (Ti(e)) {
    for (const s in e)
      fn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && fn(e[s], t, n);
  }
  return e;
}
var N = {};
const Xn = [];
function gs(e) {
  Xn.push(e);
}
function vs() {
  Xn.pop();
}
let lr = !1;
function P(e, ...t) {
  if (lr) return;
  lr = !0, zt();
  const n = Xn.length ? Xn[Xn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Wp();
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
          ({ vnode: i }) => `at <${Wi(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...Gp(o)), console.warn(...i);
  }
  Kt(), lr = !1;
}
function Wp() {
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
function Gp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Yp(n));
  }), t;
}
function Yp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Wi(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...Jp(e.props), i] : [o + i];
}
function Jp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...au(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function au(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ae(t) ? (t = au(e, ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ce(t), n ? t : [`${e}=`, t]);
}
function pl(e, t) {
  N.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? P(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && P(`${t} is NaN - the duration expression might be incorrect.`));
}
const Xp = {
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
}, Ri = {
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
    Ln(o, t, n);
  }
}
function It(e, t, n, s) {
  if (oe(e)) {
    const o = as(e, t, n, s);
    return o && Oi(o) && o.catch((i) => {
      Ln(i, t, n);
    }), o;
  }
  if (G(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(It(e[i], t, n, s));
    return o;
  } else N.NODE_ENV !== "production" && P(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ln(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = N.NODE_ENV !== "production" ? Ri[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      zt(), as(i, null, 10, [
        e,
        a,
        c
      ]), Kt();
      return;
    }
  }
  Qp(e, n, o, s, r);
}
function Qp(e, t, n, s = !0, o = !1) {
  if (N.NODE_ENV !== "production") {
    const i = Ri[t];
    if (n && gs(n), P(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && vs(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const ct = [];
let Jt = -1;
const ys = [];
let xn = null, hs = 0;
const cu = /* @__PURE__ */ Promise.resolve();
let ii = null;
const Zp = 100;
function Ls(e) {
  const t = ii || cu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function eh(e) {
  let t = Jt + 1, n = ct.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ct[s], i = fo(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Li(e) {
  if (!(e.flags & 1)) {
    const t = fo(e), n = ct[ct.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fo(n) ? ct.push(e) : ct.splice(eh(t), 0, e), e.flags |= 1, uu();
  }
}
function uu() {
  ii || (ii = cu.then(du));
}
function Ss(e) {
  G(e) ? ys.push(...e) : xn && e.id === -1 ? xn.splice(hs + 1, 0, e) : e.flags & 1 || (ys.push(e), e.flags |= 1), uu();
}
function pa(e, t, n = Jt + 1) {
  for (N.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ct.length; n++) {
    const s = ct[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || N.NODE_ENV !== "production" && hl(t, s))
        continue;
      ct.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ri(e) {
  if (ys.length) {
    const t = [...new Set(ys)].sort(
      (n, s) => fo(n) - fo(s)
    );
    if (ys.length = 0, xn) {
      xn.push(...t);
      return;
    }
    for (xn = t, N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), hs = 0; hs < xn.length; hs++) {
      const n = xn[hs];
      N.NODE_ENV !== "production" && hl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xn = null, hs = 0;
  }
}
const fo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function du(e) {
  N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = N.NODE_ENV !== "production" ? (n) => hl(e, n) : Te;
  try {
    for (Jt = 0; Jt < ct.length; Jt++) {
      const n = ct[Jt];
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
    for (; Jt < ct.length; Jt++) {
      const n = ct[Jt];
      n && (n.flags &= -2);
    }
    Jt = -1, ct.length = 0, ri(e), ii = null, (ct.length || ys.length) && du(e);
  }
}
function hl(e, t) {
  const n = e.get(t) || 0;
  if (n > Zp) {
    const s = t.i, o = s && Ts(s.type);
    return Ln(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Bt = !1;
const qo = /* @__PURE__ */ new Map();
N.NODE_ENV !== "production" && (No().__VUE_HMR_RUNTIME__ = {
  createRecord: ar(fu),
  rerender: ar(sh),
  reload: ar(oh)
});
const ss = /* @__PURE__ */ new Map();
function th(e) {
  const t = e.type.__hmrId;
  let n = ss.get(t);
  n || (fu(t, e.type), n = ss.get(t)), n.instances.add(e);
}
function nh(e) {
  ss.get(e.type.__hmrId).instances.delete(e);
}
function fu(e, t) {
  return ss.has(e) ? !1 : (ss.set(e, {
    initialDef: li(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function li(e) {
  return _d(e) ? e.__vccOpts : e;
}
function sh(e, t) {
  const n = ss.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, li(s.type).render = t), s.renderCache = [], Bt = !0, s.update(), Bt = !1;
  }));
}
function oh(e, t) {
  const n = ss.get(e);
  if (!n) return;
  t = li(t), ha(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = li(i.type);
    let l = qo.get(r);
    l || (r !== n.initialDef && ha(r, t), qo.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Li(() => {
      Bt = !0, i.parent.update(), Bt = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  Ss(() => {
    qo.clear();
  });
}
function ha(e, t) {
  de(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ar(e) {
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
let Rt, Ws = [], xr = !1;
function So(e, ...t) {
  Rt ? Rt.emit(e, ...t) : xr || Ws.push({ event: e, args: t });
}
function ml(e, t) {
  var n, s;
  Rt = e, Rt ? (Rt.enabled = !0, Ws.forEach(({ event: o, args: i }) => Rt.emit(o, ...i)), Ws = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    ml(i, t);
  }), setTimeout(() => {
    Rt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, xr = !0, Ws = []);
  }, 3e3)) : (xr = !0, Ws = []);
}
function ih(e, t) {
  So("app:init", e, t, {
    Fragment: ae,
    Text: sn,
    Comment: $e,
    Static: An
  });
}
function rh(e) {
  So("app:unmount", e);
}
const Sr = /* @__PURE__ */ gl(
  "component:added"
  /* COMPONENT_ADDED */
), pu = /* @__PURE__ */ gl(
  "component:updated"
  /* COMPONENT_UPDATED */
), lh = /* @__PURE__ */ gl(
  "component:removed"
  /* COMPONENT_REMOVED */
), ah = (e) => {
  Rt && typeof Rt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Rt.cleanupBuffer(e) && lh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gl(e) {
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
const ch = /* @__PURE__ */ hu(
  "perf:start"
  /* PERFORMANCE_START */
), uh = /* @__PURE__ */ hu(
  "perf:end"
  /* PERFORMANCE_END */
);
function hu(e) {
  return (t, n, s) => {
    So(e, t.appContext.app, t.uid, t, n, s);
  };
}
function dh(e, t, n) {
  So(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Re = null, Fi = null;
function po(e) {
  const t = Re;
  return Re = e, Fi = e && e.type.__scopeId || null, t;
}
function fh(e) {
  Fi = e;
}
function ph() {
  Fi = null;
}
const hh = (e) => Fe;
function Fe(e, t = Re, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ir(-1);
    const i = po(t);
    let r;
    try {
      r = e(...o);
    } finally {
      po(i), s._d && Ir(1);
    }
    return N.NODE_ENV !== "production" && pu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function mu(e) {
  $c(e) && P("Do not use built-in directive ids as custom directive id: " + e);
}
function yt(e, t) {
  if (Re === null)
    return N.NODE_ENV !== "production" && P("withDirectives can only be used inside render functions."), e;
  const n = Co(Re), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = pe] = t[o];
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
function Qt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (zt(), It(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Kt());
  }
}
const gu = Symbol("_vte"), vu = (e) => e.__isTeleport, Qn = (e) => e && (e.disabled || e.disabled === ""), ma = (e) => e && (e.defer || e.defer === ""), ga = (e) => typeof SVGElement < "u" && e instanceof SVGElement, va = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, kr = (e, t) => {
  const n = e && e.to;
  if (re(n))
    if (t) {
      const s = t(n);
      return N.NODE_ENV !== "production" && !s && !Qn(e) && P(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return N.NODE_ENV !== "production" && P(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return N.NODE_ENV !== "production" && !n && !Qn(e) && P(`Invalid Teleport target: ${n}`), n;
}, yu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    const {
      mc: d,
      pc: u,
      pbc: h,
      o: { insert: m, querySelector: v, createText: g, createComment: $ }
    } = c, S = Qn(t.props);
    let { shapeFlag: b, children: p, dynamicChildren: w } = t;
    if (N.NODE_ENV !== "production" && Bt && (a = !1, w = null), e == null) {
      const E = t.el = N.NODE_ENV !== "production" ? $("teleport start") : g(""), D = t.anchor = N.NODE_ENV !== "production" ? $("teleport end") : g("");
      m(E, n, s), m(D, n, s);
      const M = (y, O) => {
        b & 16 && (o && o.isCE && (o.ce._teleportTarget = y), d(
          p,
          y,
          O,
          o,
          i,
          r,
          l,
          a
        ));
      }, x = () => {
        const y = t.target = kr(t.props, v), O = bu(y, t, g, m);
        y ? (r !== "svg" && ga(y) ? r = "svg" : r !== "mathml" && va(y) && (r = "mathml"), S || (M(y, O), zo(t, !1))) : N.NODE_ENV !== "production" && !S && P(
          "Invalid Teleport target on mount:",
          y,
          `(${typeof y})`
        );
      };
      S && (M(n, D), zo(t, !0)), ma(t.props) ? (t.el.__isMounted = !1, je(() => {
        x(), delete t.el.__isMounted;
      }, i)) : x();
    } else {
      if (ma(t.props) && e.el.__isMounted === !1) {
        je(() => {
          yu.process(
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
      const E = t.anchor = e.anchor, D = t.target = e.target, M = t.targetAnchor = e.targetAnchor, x = Qn(e.props), y = x ? n : D, O = x ? E : M;
      if (r === "svg" || ga(D) ? r = "svg" : (r === "mathml" || va(D)) && (r = "mathml"), w ? (h(
        e.dynamicChildren,
        w,
        y,
        o,
        i,
        r,
        l
      ), so(e, t, N.NODE_ENV === "production")) : a || u(
        e,
        t,
        y,
        O,
        o,
        i,
        r,
        l,
        !1
      ), S)
        x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Mo(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const A = t.target = kr(
          t.props,
          v
        );
        A ? Mo(
          t,
          A,
          null,
          c,
          0
        ) : N.NODE_ENV !== "production" && P(
          "Invalid Teleport target on update:",
          D,
          `(${typeof D})`
        );
      } else x && Mo(
        t,
        D,
        M,
        c,
        1
      );
      zo(t, S);
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
      const m = i || !Qn(h);
      for (let v = 0; v < l.length; v++) {
        const g = l[v];
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
  hydrate: mh
};
function Mo(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: c, props: d } = e, u = i === 2;
  if (u && s(r, t, n), (!u || Qn(d)) && a & 16)
    for (let h = 0; h < c.length; h++)
      o(
        c[h],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function mh(e, t, n, s, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: c, createText: d }
}, u) {
  const h = t.target = kr(
    t.props,
    a
  );
  if (h) {
    const m = Qn(t.props), v = h._lpa || h.firstChild;
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
        ), t.targetStart = v, t.targetAnchor = v && r(v);
      else {
        t.anchor = r(e);
        let g = v;
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
        t.targetAnchor || bu(h, t, d, c), u(
          v && r(v),
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
const Fn = yu;
function zo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function bu(e, t, n, s) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[gu] = i, e && (s(o, e), s(i, e)), i;
}
const Sn = Symbol("_leaveCb"), Po = Symbol("_enterCb");
function vl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ze(() => {
    e.isMounted = !0;
  }), Ui(() => {
    e.isUnmounting = !0;
  }), e;
}
const $t = [Function, Array], yl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: $t,
  onEnter: $t,
  onAfterEnter: $t,
  onEnterCancelled: $t,
  // leave
  onBeforeLeave: $t,
  onLeave: $t,
  onAfterLeave: $t,
  onLeaveCancelled: $t,
  // appear
  onBeforeAppear: $t,
  onAppear: $t,
  onAfterAppear: $t,
  onAppearCancelled: $t
}, _u = (e) => {
  const t = e.subTree;
  return t.component ? _u(t.component) : t;
}, gh = {
  name: "BaseTransition",
  props: yl,
  setup(e, { slots: t }) {
    const n = it(), s = vl();
    return () => {
      const o = t.default && Bi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Eu(o), r = ce(e), { mode: l } = r;
      if (N.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && P(`invalid <transition> mode: ${l}`), s.isLeaving)
        return cr(i);
      const a = ya(i);
      if (!a)
        return cr(i);
      let c = ks(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      a.type !== $e && vn(a, c);
      let d = n.subTree && ya(n.subTree);
      if (d && d.type !== $e && !Lt(a, d) && _u(n).type !== $e) {
        let u = ks(
          d,
          r,
          s,
          n
        );
        if (vn(d, u), l === "out-in" && a.type !== $e)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, d = void 0;
          }, cr(i);
        l === "in-out" && a.type !== $e ? u.delayLeave = (h, m, v) => {
          const g = Nu(
            s,
            d
          );
          g[String(d.key)] = d, h[Sn] = () => {
            m(), h[Sn] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            v(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return i;
    };
  }
};
function Eu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== $e) {
        if (N.NODE_ENV !== "production" && n) {
          P(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, N.NODE_ENV === "production") break;
      }
  }
  return t;
}
const wu = gh;
function Nu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ks(e, t, n, s, o) {
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
    onAfterLeave: v,
    onLeaveCancelled: g,
    onBeforeAppear: $,
    onAppear: S,
    onAfterAppear: b,
    onAppearCancelled: p
  } = t, w = String(e.key), E = Nu(n, e), D = (y, O) => {
    y && It(
      y,
      s,
      9,
      O
    );
  }, M = (y, O) => {
    const A = O[1];
    D(y, O), G(y) ? y.every((V) => V.length <= 1) && A() : y.length <= 1 && A();
  }, x = {
    mode: r,
    persisted: l,
    beforeEnter(y) {
      let O = a;
      if (!n.isMounted)
        if (i)
          O = $ || a;
        else
          return;
      y[Sn] && y[Sn](
        !0
        /* cancelled */
      );
      const A = E[w];
      A && Lt(e, A) && A.el[Sn] && A.el[Sn](), D(O, [y]);
    },
    enter(y) {
      let O = c, A = d, V = u;
      if (!n.isMounted)
        if (i)
          O = S || c, A = b || d, V = p || u;
        else
          return;
      let R = !1;
      const K = y[Po] = (te) => {
        R || (R = !0, te ? D(V, [y]) : D(A, [y]), x.delayedLeave && x.delayedLeave(), y[Po] = void 0);
      };
      O ? M(O, [y, K]) : K();
    },
    leave(y, O) {
      const A = String(e.key);
      if (y[Po] && y[Po](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      D(h, [y]);
      let V = !1;
      const R = y[Sn] = (K) => {
        V || (V = !0, O(), K ? D(g, [y]) : D(v, [y]), y[Sn] = void 0, E[A] === e && delete E[A]);
      };
      E[A] = e, m ? M(m, [y, R]) : R();
    },
    clone(y) {
      const O = ks(
        y,
        t,
        n,
        s,
        o
      );
      return o && o(O), O;
    }
  };
  return x;
}
function cr(e) {
  if (Fs(e))
    return e = Mt(e), e.children = null, e;
}
function ya(e) {
  if (!Fs(e))
    return vu(e.type) && e.children ? Eu(e.children) : e;
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
function Bi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === ae ? (r.patchFlag & 128 && o++, s = s.concat(
      Bi(r.children, t, l)
    )) : (t || r.type !== $e) && s.push(l != null ? Mt(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bl(e, t) {
  return oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function vh() {
  const e = it();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (N.NODE_ENV !== "production" && P(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function _l(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xu = /* @__PURE__ */ new WeakSet();
function yh(e) {
  const t = it(), n = su(null);
  if (t) {
    const o = t.refs === pe ? t.refs = {} : t.refs;
    let i;
    N.NODE_ENV !== "production" && (i = Object.getOwnPropertyDescriptor(o, e)) && !i.configurable ? P(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  } else N.NODE_ENV !== "production" && P(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = N.NODE_ENV !== "production" ? Mi(n) : n;
  return N.NODE_ENV !== "production" && xu.add(s), s;
}
function bs(e, t, n, s, o = !1) {
  if (G(e)) {
    e.forEach(
      (v, g) => bs(
        v,
        t && (G(t) ? t[g] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Vn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && bs(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Co(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e;
  if (N.NODE_ENV !== "production" && !l) {
    P(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, h = ce(u), m = u === pe ? () => !1 : (v) => N.NODE_ENV !== "production" && (ge(h, v) && !Ae(h[v]) && P(
    `Template ref "${v}" used on a non-ref value. It will not work in the production build.`
  ), xu.has(h[v])) ? !1 : ge(h, v);
  if (c != null && c !== a && (re(c) ? (d[c] = null, m(c) && (u[c] = null)) : Ae(c) && (c.value = null)), oe(a))
    as(a, l, 12, [r, d]);
  else {
    const v = re(a), g = Ae(a);
    if (v || g) {
      const $ = () => {
        if (e.f) {
          const S = v ? m(a) ? u[a] : d[a] : a.value;
          o ? G(S) && sl(S, i) : G(S) ? S.includes(i) || S.push(i) : v ? (d[a] = [i], m(a) && (u[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else v ? (d[a] = r, m(a) && (u[a] = r)) : g ? (a.value = r, e.k && (d[e.k] = r)) : N.NODE_ENV !== "production" && P("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? ($.id = -1, je($, n)) : $();
    } else N.NODE_ENV !== "production" && P("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ba = !1;
const jn = () => {
  ba || (console.error("Hydration completed but contains mismatches."), ba = !0);
}, bh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", _h = (e) => e.namespaceURI.includes("MathML"), Ro = (e) => {
  if (e.nodeType === 1) {
    if (bh(e)) return "svg";
    if (_h(e)) return "mathml";
  }
}, Kn = (e) => e.nodeType === 8;
function Eh(e) {
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
  } = e, d = (p, w) => {
    if (!w.hasChildNodes()) {
      N.NODE_ENV !== "production" && P(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, p, w), ri(), w._vnode = p;
      return;
    }
    u(w.firstChild, p, null, null, null), ri(), w._vnode = p;
  }, u = (p, w, E, D, M, x = !1) => {
    x = x || !!w.dynamicChildren;
    const y = Kn(p) && p.data === "[", O = () => g(
      p,
      w,
      E,
      D,
      M,
      y
    ), { type: A, ref: V, shapeFlag: R, patchFlag: K } = w;
    let te = p.nodeType;
    w.el = p, N.NODE_ENV !== "production" && (ns(p, "__vnode", w, !0), ns(p, "__vueParentComponent", E, !0)), K === -2 && (x = !1, w.dynamicChildren = null);
    let Z = null;
    switch (A) {
      case sn:
        te !== 3 ? w.children === "" ? (a(w.el = o(""), r(p), p), Z = p) : Z = O() : (p.data !== w.children && (N.NODE_ENV !== "production" && P(
          "Hydration text mismatch in",
          p.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            p.data
          )}
  - expected on client: ${JSON.stringify(w.children)}`
        ), jn(), p.data = w.children), Z = i(p));
        break;
      case $e:
        b(p) ? (Z = i(p), S(
          w.el = p.content.firstChild,
          p,
          E
        )) : te !== 8 || y ? Z = O() : Z = i(p);
        break;
      case An:
        if (y && (p = i(p), te = p.nodeType), te === 1 || te === 3) {
          Z = p;
          const se = !w.children.length;
          for (let Q = 0; Q < w.staticCount; Q++)
            se && (w.children += Z.nodeType === 1 ? Z.outerHTML : Z.data), Q === w.staticCount - 1 && (w.anchor = Z), Z = i(Z);
          return y ? i(Z) : Z;
        } else
          O();
        break;
      case ae:
        y ? Z = v(
          p,
          w,
          E,
          D,
          M,
          x
        ) : Z = O();
        break;
      default:
        if (R & 1)
          (te !== 1 || w.type.toLowerCase() !== p.tagName.toLowerCase()) && !b(p) ? Z = O() : Z = h(
            p,
            w,
            E,
            D,
            M,
            x
          );
        else if (R & 6) {
          w.slotScopeIds = M;
          const se = r(p);
          if (y ? Z = $(p) : Kn(p) && p.data === "teleport start" ? Z = $(p, p.data, "teleport end") : Z = i(p), t(
            w,
            se,
            null,
            E,
            D,
            Ro(se),
            x
          ), Vn(w) && !w.type.__asyncResolved) {
            let Q;
            y ? (Q = fe(ae), Q.anchor = Z ? Z.previousSibling : se.lastChild) : Q = p.nodeType === 3 ? Be("") : fe("div"), Q.el = p, w.component.subTree = Q;
          }
        } else R & 64 ? te !== 8 ? Z = O() : Z = w.type.hydrate(
          p,
          w,
          E,
          D,
          M,
          x,
          e,
          m
        ) : R & 128 ? Z = w.type.hydrate(
          p,
          w,
          E,
          D,
          Ro(r(p)),
          M,
          x,
          e,
          u
        ) : N.NODE_ENV !== "production" && P("Invalid HostVNode type:", A, `(${typeof A})`);
    }
    return V != null && bs(V, null, D, w), Z;
  }, h = (p, w, E, D, M, x) => {
    x = x || !!w.dynamicChildren;
    const { type: y, props: O, patchFlag: A, shapeFlag: V, dirs: R, transition: K } = w, te = y === "input" || y === "option";
    if (N.NODE_ENV !== "production" || te || A !== -1) {
      R && Qt(w, null, E, "created");
      let Z = !1;
      if (b(p)) {
        Z = Ju(
          null,
          // no need check parentSuspense in hydration
          K
        ) && E && E.vnode.props && E.vnode.props.appear;
        const Q = p.content.firstChild;
        if (Z) {
          const Ee = Q.getAttribute("class");
          Ee && (Q.$cls = Ee), K.beforeEnter(Q);
        }
        S(Q, p, E), w.el = p = Q;
      }
      if (V & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let Q = m(
          p.firstChild,
          w,
          p,
          E,
          D,
          M,
          x
        ), Ee = !1;
        for (; Q; ) {
          Gs(
            p,
            1
            /* CHILDREN */
          ) || (N.NODE_ENV !== "production" && !Ee && (P(
            "Hydration children mismatch on",
            p,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Ee = !0), jn());
          const pt = Q;
          Q = Q.nextSibling, l(pt);
        }
      } else if (V & 8) {
        let Q = w.children;
        Q[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (Q = Q.slice(1)), p.textContent !== Q && (Gs(
          p,
          0
          /* TEXT */
        ) || (N.NODE_ENV !== "production" && P(
          "Hydration text content mismatch on",
          p,
          `
  - rendered on server: ${p.textContent}
  - expected on client: ${w.children}`
        ), jn()), p.textContent = w.children);
      }
      if (O) {
        if (N.NODE_ENV !== "production" || te || !x || A & 48) {
          const Q = p.tagName.includes("-");
          for (const Ee in O)
            N.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(R && R.some((pt) => pt.dir.created)) && wh(p, Ee, O[Ee], w, E) && jn(), (te && (Ee.endsWith("value") || Ee === "indeterminate") || gn(Ee) && !Dn(Ee) || // force hydrate v-bind with .prop modifiers
            Ee[0] === "." || Q) && s(p, Ee, null, O[Ee], void 0, E);
        } else if (O.onClick)
          s(
            p,
            "onClick",
            null,
            O.onClick,
            void 0,
            E
          );
        else if (A & 4 && hn(O.style))
          for (const Q in O.style) O.style[Q];
      }
      let se;
      (se = O && O.onVnodeBeforeMount) && vt(se, E, w), R && Qt(w, null, E, "beforeMount"), ((se = O && O.onVnodeMounted) || R || Z) && rd(() => {
        se && vt(se, E, w), Z && K.enter(p), R && Qt(w, null, E, "mounted");
      }, D);
    }
    return p.nextSibling;
  }, m = (p, w, E, D, M, x, y) => {
    y = y || !!w.dynamicChildren;
    const O = w.children, A = O.length;
    let V = !1;
    for (let R = 0; R < A; R++) {
      const K = y ? O[R] : O[R] = ut(O[R]), te = K.type === sn;
      p ? (te && !y && R + 1 < A && ut(O[R + 1]).type === sn && (a(
        o(
          p.data.slice(K.children.length)
        ),
        E,
        i(p)
      ), p.data = K.children), p = u(
        p,
        K,
        D,
        M,
        x,
        y
      )) : te && !K.children ? a(K.el = o(""), E) : (Gs(
        E,
        1
        /* CHILDREN */
      ) || (N.NODE_ENV !== "production" && !V && (P(
        "Hydration children mismatch on",
        E,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), V = !0), jn()), n(
        null,
        K,
        E,
        null,
        D,
        M,
        Ro(E),
        x
      ));
    }
    return p;
  }, v = (p, w, E, D, M, x) => {
    const { slotScopeIds: y } = w;
    y && (M = M ? M.concat(y) : y);
    const O = r(p), A = m(
      i(p),
      w,
      O,
      E,
      D,
      M,
      x
    );
    return A && Kn(A) && A.data === "]" ? i(w.anchor = A) : (jn(), a(w.anchor = c("]"), O, A), A);
  }, g = (p, w, E, D, M, x) => {
    if (Gs(
      p.parentElement,
      1
      /* CHILDREN */
    ) || (N.NODE_ENV !== "production" && P(
      `Hydration node mismatch:
- rendered on server:`,
      p,
      p.nodeType === 3 ? "(text)" : Kn(p) && p.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      w.type
    ), jn()), w.el = null, x) {
      const A = $(p);
      for (; ; ) {
        const V = i(p);
        if (V && V !== A)
          l(V);
        else
          break;
      }
    }
    const y = i(p), O = r(p);
    return l(p), n(
      null,
      w,
      O,
      y,
      E,
      D,
      Ro(O),
      M
    ), E && (E.vnode.el = w.el, Ki(E, w.el)), y;
  }, $ = (p, w = "[", E = "]") => {
    let D = 0;
    for (; p; )
      if (p = i(p), p && Kn(p) && (p.data === w && D++, p.data === E)) {
        if (D === 0)
          return i(p);
        D--;
      }
    return p;
  }, S = (p, w, E) => {
    const D = w.parentNode;
    D && D.replaceChild(p, w);
    let M = E;
    for (; M; )
      M.vnode.el === w && (M.vnode.el = M.subTree.el = p), M = M.parent;
  }, b = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [d, u];
}
function wh(e, t, n, s, o) {
  let i, r, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Ve(n), Nh(_a(l || ""), _a(a)) || (i = 2, r = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = re(n) ? n : Jf(dt(n));
    const c = Ea(l), d = Ea(a);
    if (s.dirs)
      for (const { dir: u, value: h } of s.dirs)
        u.name === "show" && !h && d.set("display", "none");
    o && Su(o, s, d), xh(c, d) || (i = 3, r = "style");
  } else (e instanceof SVGElement && ip(t) || e instanceof HTMLElement && (ca(t) || op(t))) && (ca(t) ? (l = e.hasAttribute(t), a = rl(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = rp(n) ? String(n) : !1), l !== a && (i = 4, r = t));
  if (i != null && !Gs(e, i)) {
    const c = (h) => h === !1 ? "(not rendered)" : `${r}="${h}"`, d = `Hydration ${ku[i]} mismatch on`, u = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return P(d, e, u), !0;
  }
  return !1;
}
function _a(e) {
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
function Ea(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [s, o] = n.split(":");
    s = s.trim(), o = o && o.trim(), s && o && t.set(s, o);
  }
  return t;
}
function xh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function Su(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ae && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const i in o) {
      const r = Lc(o[i]);
      n.set(`--${ap(i)}`, r);
    }
  }
  t === s && e.parent && Su(e.parent, e.vnode, n);
}
const wa = "data-allow-mismatch", ku = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Gs(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(wa); )
      e = e.parentElement;
  const n = e && e.getAttribute(wa);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(ku[t]);
  }
}
const Sh = No().requestIdleCallback || ((e) => setTimeout(e, 1)), kh = No().cancelIdleCallback || ((e) => clearTimeout(e)), Ch = (e = 1e4) => (t) => {
  const n = Sh(t, { timeout: e });
  return () => kh(n);
};
function Oh(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: i, innerWidth: r } = window;
  return (t > 0 && t < i || s > 0 && s < i) && (n > 0 && n < r || o > 0 && o < r);
}
const Th = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const i of o)
      if (i.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (Oh(o))
        return t(), s.disconnect(), !1;
      s.observe(o);
    }
  }), () => s.disconnect();
}, $h = (e) => (t) => {
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
const Vn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ah(e) {
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
    let v;
    return c || (v = c = t().catch((g) => {
      if (g = g instanceof Error ? g : new Error(String(g)), a)
        return new Promise(($, S) => {
          a(g, () => $(h()), () => S(g), u + 1);
        });
      throw g;
    }).then((g) => {
      if (v !== c && c)
        return c;
      if (N.NODE_ENV !== "production" && !g && P(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), N.NODE_ENV !== "production" && g && !me(g) && !oe(g))
        throw new Error(`Invalid async component load result: ${g}`);
      return d = g, g;
    }));
  };
  return /* @__PURE__ */ bl({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(v, g, $) {
      let S = !1;
      (g.bu || (g.bu = [])).push(() => S = !0);
      const b = () => {
        if (S) {
          N.NODE_ENV !== "production" && P(
            `Skipping lazy hydration for component '${Ts(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        $();
      }, p = i ? () => {
        const w = i(
          b,
          (E) => Vh(v, E)
        );
        w && (g.bum || (g.bum = [])).push(w);
      } : b;
      d ? p() : m().then(() => !g.isUnmounted && p());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const v = qe;
      if (_l(v), d)
        return () => ur(d, v);
      const g = (p) => {
        c = null, Ln(
          p,
          v,
          13,
          !s
        );
      };
      if (l && v.suspense || Os)
        return m().then((p) => () => ur(p, v)).catch((p) => (g(p), () => s ? fe(s, {
          error: p
        }) : null));
      const $ = U(!1), S = U(), b = U(!!o);
      return o && setTimeout(() => {
        b.value = !1;
      }, o), r != null && setTimeout(() => {
        if (!$.value && !S.value) {
          const p = new Error(
            `Async component timed out after ${r}ms.`
          );
          g(p), S.value = p;
        }
      }, r), m().then(() => {
        $.value = !0, v.parent && Fs(v.parent.vnode) && v.parent.update();
      }).catch((p) => {
        g(p), S.value = p;
      }), () => {
        if ($.value && d)
          return ur(d, v);
        if (S.value && s)
          return fe(s, {
            error: S.value
          });
        if (n && !b.value)
          return fe(n);
      };
    }
  });
}
function ur(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, r = fe(e, s, o);
  return r.ref = n, r.ce = i, delete t.vnode.ce, r;
}
const Fs = (e) => e.type.__isKeepAlive, Ih = {
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
    const n = it(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const b = t.default && t.default();
        return b && b.length === 1 ? b[0] : b;
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
    } = s, h = u("div");
    s.activate = (b, p, w, E, D) => {
      const M = b.component;
      c(b, p, w, 0, l), a(
        M.vnode,
        b,
        p,
        w,
        M,
        l,
        E,
        b.slotScopeIds,
        D
      ), je(() => {
        M.isDeactivated = !1, M.a && On(M.a);
        const x = b.props && b.props.onVnodeMounted;
        x && vt(x, M.parent, b);
      }, l), N.NODE_ENV !== "production" && Sr(M);
    }, s.deactivate = (b) => {
      const p = b.component;
      di(p.m), di(p.a), c(b, h, null, 1, l), je(() => {
        p.da && On(p.da);
        const w = b.props && b.props.onVnodeUnmounted;
        w && vt(w, p.parent, b), p.isDeactivated = !0;
      }, l), N.NODE_ENV !== "production" && Sr(p), N.NODE_ENV !== "production" && (p.__keepAliveStorageContainer = h);
    };
    function m(b) {
      dr(b), d(b, n, l, !0);
    }
    function v(b) {
      o.forEach((p, w) => {
        const E = Ts(p.type);
        E && !b(E) && g(w);
      });
    }
    function g(b) {
      const p = o.get(b);
      p && (!r || !Lt(p, r)) ? m(p) : r && dr(r), o.delete(b), i.delete(b);
    }
    nn(
      () => [e.include, e.exclude],
      ([b, p]) => {
        b && v((w) => Ys(b, w)), p && v((w) => !Ys(p, w));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let $ = null;
    const S = () => {
      $ != null && (pi(n.subTree.type) ? je(() => {
        o.set($, Lo(n.subTree));
      }, n.subTree.suspense) : o.set($, Lo(n.subTree)));
    };
    return ze(S), Hi(S), Ui(() => {
      o.forEach((b) => {
        const { subTree: p, suspense: w } = n, E = Lo(p);
        if (b.type === E.type && b.key === E.key) {
          dr(E);
          const D = E.component.da;
          D && je(D, w);
          return;
        }
        m(b);
      });
    }), () => {
      if ($ = null, !t.default)
        return r = null;
      const b = t.default(), p = b[0];
      if (b.length > 1)
        return N.NODE_ENV !== "production" && P("KeepAlive should contain exactly one component child."), r = null, b;
      if (!rn(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128))
        return r = null, p;
      let w = Lo(p);
      if (w.type === $e)
        return r = null, w;
      const E = w.type, D = Ts(
        Vn(w) ? w.type.__asyncResolved || {} : E
      ), { include: M, exclude: x, max: y } = e;
      if (M && (!D || !Ys(M, D)) || x && D && Ys(x, D))
        return w.shapeFlag &= -257, r = w, p;
      const O = w.key == null ? E : w.key, A = o.get(O);
      return w.el && (w = Mt(w), p.shapeFlag & 128 && (p.ssContent = w)), $ = O, A ? (w.el = A.el, w.component = A.component, w.transition && vn(w, w.transition), w.shapeFlag |= 512, i.delete(O), i.add(O)) : (i.add(O), y && i.size > parseInt(y, 10) && g(i.values().next().value)), w.shapeFlag |= 256, r = w, pi(p.type) ? p : w;
    };
  }
}, Mh = Ih;
function Ys(e, t) {
  return G(e) ? e.some((n) => Ys(n, t)) : re(e) ? e.split(",").includes(t) : Ff(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Cu(e, t) {
  Tu(e, "a", t);
}
function Ou(e, t) {
  Tu(e, "da", t);
}
function Tu(e, t, n = qe) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ji(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Fs(o.parent.vnode) && Ph(s, t, n, o), o = o.parent;
  }
}
function Ph(e, t, n, s) {
  const o = ji(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  kt(() => {
    sl(s[t], o);
  }, n);
}
function dr(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Lo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function ji(e, t, n = qe, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      zt();
      const l = is(n), a = It(t, n, e, r);
      return l(), Kt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (N.NODE_ENV !== "production") {
    const o = en(Ri[e].replace(/ hook$/, ""));
    P(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const yn = (e) => (t, n = qe) => {
  (!Os || e === "sp") && ji(e, (...s) => t(...s), n);
}, $u = yn("bm"), ze = yn("m"), El = yn(
  "bu"
), Hi = yn("u"), Ui = yn(
  "bum"
), kt = yn("um"), Du = yn(
  "sp"
), Vu = yn("rtg"), Au = yn("rtc");
function Iu(e, t = qe) {
  ji("ec", e, t);
}
const ai = "components", Rh = "directives";
function Lh(e, t) {
  return xl(ai, e, !0, t) || e;
}
const wl = Symbol.for("v-ndc");
function Nl(e) {
  return re(e) ? xl(ai, e, !1) || e : e || wl;
}
function Fh(e) {
  return xl(Rh, e);
}
function xl(e, t, n = !0, s = !1) {
  const o = Re || qe;
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
      P(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else N.NODE_ENV !== "production" && P(
    `resolve${on(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Na(e, t) {
  return e && (e[t] || e[Se(t)] || e[on(Se(t))]);
}
function Oe(e, t, n, s) {
  let o;
  const i = n && n[s], r = G(e);
  if (r || re(e)) {
    const l = r && hn(e);
    let a = !1, c = !1;
    l && (a = !nt(e), c = Wt(e), e = Ai(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? c ? si(Ye(e[d])) : Ye(e[d]) : e[d],
        d,
        void 0,
        i && i[d]
      );
  } else if (typeof e == "number") {
    N.NODE_ENV !== "production" && !Number.isInteger(e) && P(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
function Bh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (G(s))
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
  if (Re.ce || Re.parent && Vn(Re.parent) && Re.parent.ce)
    return t !== "default" && (n.name = t), k(), ft(
      ae,
      null,
      [fe("slot", n, s && s())],
      64
    );
  let i = e[t];
  N.NODE_ENV !== "production" && i && i.length > 1 && (P(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), k();
  const r = i && Sl(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, a = ft(
    ae,
    {
      key: (l && !Et(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && s ? "_fb" : "")
    },
    r || (s ? s() : []),
    r && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function Sl(e) {
  return e.some((t) => rn(t) ? !(t.type === $e || t.type === ae && !Sl(t.children)) : !0) ? e : null;
}
function jh(e, t) {
  const n = {};
  if (N.NODE_ENV !== "production" && !me(e))
    return P("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : en(s)] = e[s];
  return n;
}
const Cr = (e) => e ? md(e) ? Co(e) : Cr(e.parent) : null, Zn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => N.NODE_ENV !== "production" ? Ft(e.props) : e.props,
    $attrs: (e) => N.NODE_ENV !== "production" ? Ft(e.attrs) : e.attrs,
    $slots: (e) => N.NODE_ENV !== "production" ? Ft(e.slots) : e.slots,
    $refs: (e) => N.NODE_ENV !== "production" ? Ft(e.refs) : e.refs,
    $parent: (e) => Cr(e.parent),
    $root: (e) => Cr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Li(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ls.bind(e.proxy)),
    $watch: (e) => Dm.bind(e)
  })
), kl = (e) => e === "_" || e === "$", fr = (e, t) => e !== pe && !e.__isScriptSetup && ge(e, t), to = {
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
        if (fr(s, t))
          return r[t] = 1, s[t];
        if (o !== pe && ge(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && ge(c, t)
        )
          return r[t] = 3, i[t];
        if (n !== pe && ge(n, t))
          return r[t] = 4, n[t];
        Or && (r[t] = 0);
      }
    }
    const d = Zn[t];
    let u, h;
    if (d)
      return t === "$attrs" ? (He(e.attrs, "get", ""), N.NODE_ENV !== "production" && fi()) : N.NODE_ENV !== "production" && t === "$slots" && He(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== pe && ge(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, ge(h, t)
    )
      return h[t];
    N.NODE_ENV !== "production" && Re && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== pe && kl(t[0]) && ge(o, t) ? P(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Re && P(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return fr(o, t) ? (o[t] = n, !0) : N.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (P(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (N.NODE_ENV !== "production" && P(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (N.NODE_ENV !== "production" && P(
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
    return !!n[r] || e !== pe && ge(e, r) || fr(t, r) || (l = i[0]) && ge(l, r) || ge(s, r) || ge(Zn, r) || ge(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
N.NODE_ENV !== "production" && (to.ownKeys = (e) => (P(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Hh = /* @__PURE__ */ de({}, to, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return to.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !zf(t);
    return N.NODE_ENV !== "production" && !n && to.has(e, t) && P(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function Uh(e) {
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
      set: Te
    });
  }), t;
}
function qh(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Te
    });
  });
}
function zh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ce(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (kl(s[0])) {
        P(
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
        set: Te
      });
    }
  });
}
const cs = (e) => P(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Kh() {
  return N.NODE_ENV !== "production" && cs("defineProps"), null;
}
function Wh() {
  return N.NODE_ENV !== "production" && cs("defineEmits"), null;
}
function Gh(e) {
  N.NODE_ENV !== "production" && cs("defineExpose");
}
function Yh(e) {
  N.NODE_ENV !== "production" && cs("defineOptions");
}
function Jh() {
  return N.NODE_ENV !== "production" && cs("defineSlots"), null;
}
function Xh() {
  N.NODE_ENV !== "production" && cs("defineModel");
}
function Qh(e, t) {
  return N.NODE_ENV !== "production" && cs("withDefaults"), null;
}
function Zh() {
  return Mu("useSlots").slots;
}
function em() {
  return Mu("useAttrs").attrs;
}
function Mu(e) {
  const t = it();
  return N.NODE_ENV !== "production" && !t && P(`${e}() called without active instance.`), t.setupContext || (t.setupContext = bd(t));
}
function ho(e) {
  return G(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function tm(e, t) {
  const n = ho(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? G(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : N.NODE_ENV !== "production" && P(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function nm(e, t) {
  return !e || !t ? e || t : G(e) && G(t) ? e.concat(t) : de({}, ho(e), ho(t));
}
function sm(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function om(e) {
  const t = it();
  N.NODE_ENV !== "production" && !t && P(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Rr(), Oi(n) && (n = n.catch((s) => {
    throw is(t), s;
  })), [n, () => is(t)];
}
function im() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? P(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Or = !0;
function rm(e) {
  const t = Cl(e), n = e.proxy, s = e.ctx;
  Or = !1, t.beforeCreate && xa(t.beforeCreate, e, "bc");
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
    updated: v,
    activated: g,
    deactivated: $,
    beforeDestroy: S,
    beforeUnmount: b,
    destroyed: p,
    unmounted: w,
    render: E,
    renderTracked: D,
    renderTriggered: M,
    errorCaptured: x,
    serverPrefetch: y,
    // public API
    expose: O,
    inheritAttrs: A,
    // assets
    components: V,
    directives: R,
    filters: K
  } = t, te = N.NODE_ENV !== "production" ? im() : null;
  if (N.NODE_ENV !== "production") {
    const [se] = e.propsOptions;
    if (se)
      for (const Q in se)
        te("Props", Q);
  }
  if (c && lm(c, s, te), r)
    for (const se in r) {
      const Q = r[se];
      oe(Q) ? (N.NODE_ENV !== "production" ? Object.defineProperty(s, se, {
        value: Q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[se] = Q.bind(n), N.NODE_ENV !== "production" && te("Methods", se)) : N.NODE_ENV !== "production" && P(
        `Method "${se}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    N.NODE_ENV !== "production" && !oe(o) && P(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const se = o.call(n, n);
    if (N.NODE_ENV !== "production" && Oi(se) && P(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(se))
      N.NODE_ENV !== "production" && P("data() should return an object.");
    else if (e.data = Ns(se), N.NODE_ENV !== "production")
      for (const Q in se)
        te("Data", Q), kl(Q[0]) || Object.defineProperty(s, Q, {
          configurable: !0,
          enumerable: !0,
          get: () => se[Q],
          set: Te
        });
  }
  if (Or = !0, i)
    for (const se in i) {
      const Q = i[se], Ee = oe(Q) ? Q.bind(n, n) : oe(Q.get) ? Q.get.bind(n, n) : Te;
      N.NODE_ENV !== "production" && Ee === Te && P(`Computed property "${se}" has no getter.`);
      const pt = !oe(Q) && oe(Q.set) ? Q.set.bind(n) : N.NODE_ENV !== "production" ? () => {
        P(
          `Write operation failed: computed property "${se}" is readonly.`
        );
      } : Te, Ot = ee({
        get: Ee,
        set: pt
      });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (Tt) => Ot.value = Tt
      }), N.NODE_ENV !== "production" && te("Computed", se);
    }
  if (l)
    for (const se in l)
      Pu(l[se], s, n, se);
  if (a) {
    const se = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(se).forEach((Q) => {
      Lu(Q, se[Q]);
    });
  }
  d && xa(d, e, "c");
  function Z(se, Q) {
    G(Q) ? Q.forEach((Ee) => se(Ee.bind(n))) : Q && se(Q.bind(n));
  }
  if (Z($u, u), Z(ze, h), Z(El, m), Z(Hi, v), Z(Cu, g), Z(Ou, $), Z(Iu, x), Z(Au, D), Z(Vu, M), Z(Ui, b), Z(kt, w), Z(Du, y), G(O))
    if (O.length) {
      const se = e.exposed || (e.exposed = {});
      O.forEach((Q) => {
        Object.defineProperty(se, Q, {
          get: () => n[Q],
          set: (Ee) => n[Q] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Te && (e.render = E), A != null && (e.inheritAttrs = A), V && (e.components = V), R && (e.directives = R), y && _l(e);
}
function lm(e, t, n = Te) {
  G(e) && (e = Tr(e));
  for (const s in e) {
    const o = e[s];
    let i;
    me(o) ? "default" in o ? i = no(
      o.from || s,
      o.default,
      !0
    ) : i = no(o.from || s) : i = no(o), Ae(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i, N.NODE_ENV !== "production" && n("Inject", s);
  }
}
function xa(e, t, n) {
  It(
    G(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Pu(e, t, n, s) {
  let o = s.includes(".") ? td(n, s) : () => n[s];
  if (re(e)) {
    const i = t[e];
    oe(i) ? nn(o, i) : N.NODE_ENV !== "production" && P(`Invalid watch handler specified by key "${e}"`, i);
  } else if (oe(e))
    nn(o, e.bind(n));
  else if (me(e))
    if (G(e))
      e.forEach((i) => Pu(i, t, n, s));
    else {
      const i = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(i) ? nn(o, i, e) : N.NODE_ENV !== "production" && P(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else N.NODE_ENV !== "production" && P(`Invalid watch option: "${s}"`, e);
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
      N.NODE_ENV !== "production" && P(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = am[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const am = {
  data: Sa,
  props: ka,
  emits: ka,
  // objects
  methods: Js,
  computed: Js,
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
  components: Js,
  directives: Js,
  // watch
  watch: um,
  // provide / inject
  provide: Sa,
  inject: cm
};
function Sa(e, t) {
  return t ? e ? function() {
    return de(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cm(e, t) {
  return Js(Tr(e), Tr(t));
}
function Tr(e) {
  if (G(e)) {
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
function Js(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ka(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    ho(e),
    ho(t ?? {})
  ) : t;
}
function um(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = lt(e[s], t[s]);
  return n;
}
function Ru() {
  return {
    app: null,
    config: {
      isNativeTag: Ks,
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
let dm = 0;
function fm(e, t) {
  return function(s, o = null) {
    oe(s) || (s = de({}, s)), o != null && !me(o) && (N.NODE_ENV !== "production" && P("root props passed to app.mount() must be an object."), o = null);
    const i = Ru(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = i.app = {
      _uid: dm++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: jr,
      get config() {
        return i.config;
      },
      set config(d) {
        N.NODE_ENV !== "production" && P(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return r.has(d) ? N.NODE_ENV !== "production" && P("Plugin has already been applied to target app.") : d && oe(d.install) ? (r.add(d), d.install(c, ...u)) : oe(d) ? (r.add(d), d(c, ...u)) : N.NODE_ENV !== "production" && P(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(d) {
        return i.mixins.includes(d) ? N.NODE_ENV !== "production" && P(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), c;
      },
      component(d, u) {
        return N.NODE_ENV !== "production" && Lr(d, i.config), u ? (N.NODE_ENV !== "production" && i.components[d] && P(`Component "${d}" has already been registered in target app.`), i.components[d] = u, c) : i.components[d];
      },
      directive(d, u) {
        return N.NODE_ENV !== "production" && mu(d), u ? (N.NODE_ENV !== "production" && i.directives[d] && P(`Directive "${d}" has already been registered in target app.`), i.directives[d] = u, c) : i.directives[d];
      },
      mount(d, u, h) {
        if (a)
          N.NODE_ENV !== "production" && P(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          N.NODE_ENV !== "production" && d.__vue_app__ && P(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || fe(s, o);
          return m.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), N.NODE_ENV !== "production" && (i.reload = () => {
            const v = Mt(m);
            v.el = null, e(v, d, h);
          }), u && t ? t(m, d) : e(m, d, h), a = !0, c._container = d, d.__vue_app__ = c, N.NODE_ENV !== "production" && (c._instance = m.component, ih(c, jr)), Co(m.component);
        }
      },
      onUnmount(d) {
        N.NODE_ENV !== "production" && typeof d != "function" && P(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (It(
          l,
          c._instance,
          16
        ), e(null, c._container), N.NODE_ENV !== "production" && (c._instance = null, rh(c)), delete c._container.__vue_app__) : N.NODE_ENV !== "production" && P("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return N.NODE_ENV !== "production" && d in i.provides && (ge(i.provides, d) ? P(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : P(
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
function Lu(e, t) {
  if (!qe)
    N.NODE_ENV !== "production" && P("provide() can only be used inside setup().");
  else {
    let n = qe.provides;
    const s = qe.parent && qe.parent.provides;
    s === n && (n = qe.provides = Object.create(s)), n[e] = t;
  }
}
function no(e, t, n = !1) {
  const s = it();
  if (s || es) {
    let o = es ? es._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    N.NODE_ENV !== "production" && P(`injection "${String(e)}" not found.`);
  } else N.NODE_ENV !== "production" && P("inject() can only be used inside setup() or functional components.");
}
function pm() {
  return !!(it() || es);
}
const Fu = {}, Bu = () => Object.create(Fu), ju = (e) => Object.getPrototypeOf(e) === Fu;
function hm(e, t, n, s = !1) {
  const o = {}, i = Bu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hu(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  N.NODE_ENV !== "production" && qu(t || {}, o, e), n ? e.props = s ? o : tu(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function mm(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function gm(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = ce(o), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(N.NODE_ENV !== "production" && mm(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let h = d[u];
        if (qi(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (a)
          if (ge(i, h))
            m !== i[h] && (i[h] = m, c = !0);
          else {
            const v = Se(h);
            o[v] = $r(
              a,
              l,
              v,
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
    Hu(e, t, o, i) && (c = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !ge(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = et(u)) === u || !ge(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = $r(
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
  c && tn(e.attrs, "set", ""), N.NODE_ENV !== "production" && qu(t || {}, o, e);
}
function Hu(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Dn(a))
        continue;
      const c = t[a];
      let d;
      o && ge(o, d = Se(a)) ? !i || !i.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : qi(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, r = !0);
    }
  if (i) {
    const a = ce(n), c = l || pe;
    for (let d = 0; d < i.length; d++) {
      const u = i[d];
      n[u] = $r(
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
function $r(e, t, n, s, o, i) {
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
    ] && (s === "" || s === et(n)) && (s = !0));
  }
  return s;
}
const vm = /* @__PURE__ */ new WeakMap();
function Uu(e, t, n = !1) {
  const s = n ? vm : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!oe(e)) {
    const d = (u) => {
      a = !0;
      const [h, m] = Uu(u, t, !0);
      de(r, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return me(e) && s.set(e, ms), ms;
  if (G(i))
    for (let d = 0; d < i.length; d++) {
      N.NODE_ENV !== "production" && !re(i[d]) && P("props must be strings when using array syntax.", i[d]);
      const u = Se(i[d]);
      Ca(u) && (r[u] = pe);
    }
  else if (i) {
    N.NODE_ENV !== "production" && !me(i) && P("invalid props options", i);
    for (const d in i) {
      const u = Se(d);
      if (Ca(u)) {
        const h = i[d], m = r[u] = G(h) || oe(h) ? { type: h } : de({}, h), v = m.type;
        let g = !1, $ = !0;
        if (G(v))
          for (let S = 0; S < v.length; ++S) {
            const b = v[S], p = oe(b) && b.name;
            if (p === "Boolean") {
              g = !0;
              break;
            } else p === "String" && ($ = !1);
          }
        else
          g = oe(v) && v.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = g, m[
          1
          /* shouldCastTrue */
        ] = $, (g || ge(m, "default")) && l.push(u);
      }
    }
  }
  const c = [r, l];
  return me(e) && s.set(e, c), c;
}
function Ca(e) {
  return e[0] !== "$" && !Dn(e) ? !0 : (N.NODE_ENV !== "production" && P(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ym(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qu(e, t, n) {
  const s = ce(t), o = n.propsOptions[0], i = Object.keys(e).map((r) => Se(r));
  for (const r in o) {
    let l = o[r];
    l != null && bm(
      r,
      s[r],
      l,
      N.NODE_ENV !== "production" ? Ft(s) : s,
      !i.includes(r)
    );
  }
}
function bm(e, t, n, s, o) {
  const { type: i, required: r, validator: l, skipCheck: a } = n;
  if (r && o) {
    P('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !a) {
      let c = !1;
      const d = G(i) ? i : [i], u = [];
      for (let h = 0; h < d.length && !c; h++) {
        const { valid: m, expectedType: v } = Em(t, d[h]);
        u.push(v || ""), c = m;
      }
      if (!c) {
        P(wm(e, t, u));
        return;
      }
    }
    l && !l(t, s) && P('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const _m = /* @__PURE__ */ Ke(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Em(e, t) {
  let n;
  const s = ym(t);
  if (s === "null")
    n = e === null;
  else if (_m(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = me(e) : s === "Array" ? n = G(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function wm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(on).join(" | ")}`;
  const o = n[0], i = ol(t), r = Oa(t, o), l = Oa(t, i);
  return n.length === 1 && Ta(o) && !Nm(o, i) && (s += ` with value ${r}`), s += `, got ${i} `, Ta(i) && (s += `with value ${l}.`), s;
}
function Oa(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ta(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Nm(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ol = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Tl = (e) => G(e) ? e.map(ut) : [ut(e)], xm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Fe((...o) => (N.NODE_ENV !== "production" && qe && !(n === null && Re) && !(n && n.root !== qe.root) && P(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Tl(t(...o))), n);
  return s._c = !1, s;
}, zu = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ol(o)) continue;
    const i = e[o];
    if (oe(i))
      t[o] = xm(o, i, s);
    else if (i != null) {
      N.NODE_ENV !== "production" && P(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = Tl(i);
      t[o] = () => r;
    }
  }
}, Ku = (e, t) => {
  N.NODE_ENV !== "production" && !Fs(e.vnode) && P(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Tl(t);
  e.slots.default = () => n;
}, Dr = (e, t, n) => {
  for (const s in t)
    (n || !Ol(s)) && (e[s] = t[s]);
}, Sm = (e, t, n) => {
  const s = e.slots = Bu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && ns(s, "__", o, !0);
    const i = t._;
    i ? (Dr(s, t, n), n && ns(s, "_", i, !0)) : zu(t, s);
  } else t && Ku(e, t);
}, km = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? N.NODE_ENV !== "production" && Bt ? (Dr(o, t, n), tn(e, "set", "$slots")) : n && l === 1 ? i = !1 : Dr(o, t, n) : (i = !t.$stable, zu(t, o)), r = t;
  } else t && (Ku(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Ol(l) && r[l] == null && delete o[l];
};
let Us, Tn;
function an(e, t) {
  e.appContext.config.performance && ui() && Tn.mark(`vue-${t}-${e.uid}`), N.NODE_ENV !== "production" && ch(e, t, ui() ? Tn.now() : Date.now());
}
function cn(e, t) {
  if (e.appContext.config.performance && ui()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Tn.mark(s), Tn.measure(
      `<${Wi(e, e.type)}> ${t}`,
      n,
      s
    ), Tn.clearMarks(n), Tn.clearMarks(s);
  }
  N.NODE_ENV !== "production" && uh(e, t, ui() ? Tn.now() : Date.now());
}
function ui() {
  return Us !== void 0 || (typeof window < "u" && window.performance ? (Us = !0, Tn = window.performance) : Us = !1), Us;
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
const je = rd;
function Wu(e) {
  return Yu(e);
}
function Gu(e) {
  return Yu(e, Eh);
}
function Yu(e, t) {
  Cm();
  const n = No();
  n.__VUE__ = !0, N.NODE_ENV !== "production" && ml(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: m = Te,
    insertStaticContent: v
  } = e, g = (_, C, I, B = null, L = null, F = null, J = void 0, z = null, q = N.NODE_ENV !== "production" && Bt ? !1 : !!C.dynamicChildren) => {
    if (_ === C)
      return;
    _ && !Lt(_, C) && (B = Do(_), bn(_, L, F, !0), _ = null), C.patchFlag === -2 && (q = !1, C.dynamicChildren = null);
    const { type: j, ref: ie, shapeFlag: X } = C;
    switch (j) {
      case sn:
        $(_, C, I, B);
        break;
      case $e:
        S(_, C, I, B);
        break;
      case An:
        _ == null ? b(C, I, B, J) : N.NODE_ENV !== "production" && p(_, C, I, J);
        break;
      case ae:
        R(
          _,
          C,
          I,
          B,
          L,
          F,
          J,
          z,
          q
        );
        break;
      default:
        X & 1 ? D(
          _,
          C,
          I,
          B,
          L,
          F,
          J,
          z,
          q
        ) : X & 6 ? K(
          _,
          C,
          I,
          B,
          L,
          F,
          J,
          z,
          q
        ) : X & 64 || X & 128 ? j.process(
          _,
          C,
          I,
          B,
          L,
          F,
          J,
          z,
          q,
          us
        ) : N.NODE_ENV !== "production" && P("Invalid VNode type:", j, `(${typeof j})`);
    }
    ie != null && L ? bs(ie, _ && _.ref, F, C || _, !C) : ie == null && _ && _.ref != null && bs(_.ref, null, F, _, !0);
  }, $ = (_, C, I, B) => {
    if (_ == null)
      s(
        C.el = l(C.children),
        I,
        B
      );
    else {
      const L = C.el = _.el;
      C.children !== _.children && c(L, C.children);
    }
  }, S = (_, C, I, B) => {
    _ == null ? s(
      C.el = a(C.children || ""),
      I,
      B
    ) : C.el = _.el;
  }, b = (_, C, I, B) => {
    [_.el, _.anchor] = v(
      _.children,
      C,
      I,
      B,
      _.el,
      _.anchor
    );
  }, p = (_, C, I, B) => {
    if (C.children !== _.children) {
      const L = h(_.anchor);
      E(_), [C.el, C.anchor] = v(
        C.children,
        I,
        L,
        B
      );
    } else
      C.el = _.el, C.anchor = _.anchor;
  }, w = ({ el: _, anchor: C }, I, B) => {
    let L;
    for (; _ && _ !== C; )
      L = h(_), s(_, I, B), _ = L;
    s(C, I, B);
  }, E = ({ el: _, anchor: C }) => {
    let I;
    for (; _ && _ !== C; )
      I = h(_), o(_), _ = I;
    o(C);
  }, D = (_, C, I, B, L, F, J, z, q) => {
    C.type === "svg" ? J = "svg" : C.type === "math" && (J = "mathml"), _ == null ? M(
      C,
      I,
      B,
      L,
      F,
      J,
      z,
      q
    ) : O(
      _,
      C,
      L,
      F,
      J,
      z,
      q
    );
  }, M = (_, C, I, B, L, F, J, z) => {
    let q, j;
    const { props: ie, shapeFlag: X, transition: ne, dirs: le } = _;
    if (q = _.el = r(
      _.type,
      F,
      ie && ie.is,
      ie
    ), X & 8 ? d(q, _.children) : X & 16 && y(
      _.children,
      q,
      null,
      B,
      L,
      pr(_, F),
      J,
      z
    ), le && Qt(_, null, B, "created"), x(q, _, _.scopeId, J, B), ie) {
      for (const ke in ie)
        ke !== "value" && !Dn(ke) && i(q, ke, null, ie[ke], F, B);
      "value" in ie && i(q, "value", null, ie.value, F), (j = ie.onVnodeBeforeMount) && vt(j, B, _);
    }
    N.NODE_ENV !== "production" && (ns(q, "__vnode", _, !0), ns(q, "__vueParentComponent", B, !0)), le && Qt(_, null, B, "beforeMount");
    const ye = Ju(L, ne);
    ye && ne.beforeEnter(q), s(q, C, I), ((j = ie && ie.onVnodeMounted) || ye || le) && je(() => {
      j && vt(j, B, _), ye && ne.enter(q), le && Qt(_, null, B, "mounted");
    }, L);
  }, x = (_, C, I, B, L) => {
    if (I && m(_, I), B)
      for (let F = 0; F < B.length; F++)
        m(_, B[F]);
    if (L) {
      let F = L.subTree;
      if (N.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = zi(F.children) || F), C === F || pi(F.type) && (F.ssContent === C || F.ssFallback === C)) {
        const J = L.vnode;
        x(
          _,
          J,
          J.scopeId,
          J.slotScopeIds,
          L.parent
        );
      }
    }
  }, y = (_, C, I, B, L, F, J, z, q = 0) => {
    for (let j = q; j < _.length; j++) {
      const ie = _[j] = z ? kn(_[j]) : ut(_[j]);
      g(
        null,
        ie,
        C,
        I,
        B,
        L,
        F,
        J,
        z
      );
    }
  }, O = (_, C, I, B, L, F, J) => {
    const z = C.el = _.el;
    N.NODE_ENV !== "production" && (z.__vnode = C);
    let { patchFlag: q, dynamicChildren: j, dirs: ie } = C;
    q |= _.patchFlag & 16;
    const X = _.props || pe, ne = C.props || pe;
    let le;
    if (I && Hn(I, !1), (le = ne.onVnodeBeforeUpdate) && vt(le, I, C, _), ie && Qt(C, _, I, "beforeUpdate"), I && Hn(I, !0), N.NODE_ENV !== "production" && Bt && (q = 0, J = !1, j = null), (X.innerHTML && ne.innerHTML == null || X.textContent && ne.textContent == null) && d(z, ""), j ? (A(
      _.dynamicChildren,
      j,
      z,
      I,
      B,
      pr(C, L),
      F
    ), N.NODE_ENV !== "production" && so(_, C)) : J || Ee(
      _,
      C,
      z,
      null,
      I,
      B,
      pr(C, L),
      F,
      !1
    ), q > 0) {
      if (q & 16)
        V(z, X, ne, I, L);
      else if (q & 2 && X.class !== ne.class && i(z, "class", null, ne.class, L), q & 4 && i(z, "style", X.style, ne.style, L), q & 8) {
        const ye = C.dynamicProps;
        for (let ke = 0; ke < ye.length; ke++) {
          const we = ye[ke], ht = X[we], Xe = ne[we];
          (Xe !== ht || we === "value") && i(z, we, ht, Xe, L, I);
        }
      }
      q & 1 && _.children !== C.children && d(z, C.children);
    } else !J && j == null && V(z, X, ne, I, L);
    ((le = ne.onVnodeUpdated) || ie) && je(() => {
      le && vt(le, I, C, _), ie && Qt(C, _, I, "updated");
    }, B);
  }, A = (_, C, I, B, L, F, J) => {
    for (let z = 0; z < C.length; z++) {
      const q = _[z], j = C[z], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (q.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(q, j) || // - In the case of a component, it could contain anything.
        q.shapeFlag & 198) ? u(q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      g(
        q,
        j,
        ie,
        null,
        B,
        L,
        F,
        J,
        !0
      );
    }
  }, V = (_, C, I, B, L) => {
    if (C !== I) {
      if (C !== pe)
        for (const F in C)
          !Dn(F) && !(F in I) && i(
            _,
            F,
            C[F],
            null,
            L,
            B
          );
      for (const F in I) {
        if (Dn(F)) continue;
        const J = I[F], z = C[F];
        J !== z && F !== "value" && i(_, F, z, J, L, B);
      }
      "value" in I && i(_, "value", C.value, I.value, L);
    }
  }, R = (_, C, I, B, L, F, J, z, q) => {
    const j = C.el = _ ? _.el : l(""), ie = C.anchor = _ ? _.anchor : l("");
    let { patchFlag: X, dynamicChildren: ne, slotScopeIds: le } = C;
    N.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Bt || X & 2048) && (X = 0, q = !1, ne = null), le && (z = z ? z.concat(le) : le), _ == null ? (s(j, I, B), s(ie, I, B), y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      I,
      ie,
      L,
      F,
      J,
      z,
      q
    )) : X > 0 && X & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (A(
      _.dynamicChildren,
      ne,
      I,
      L,
      F,
      J,
      z
    ), N.NODE_ENV !== "production" ? so(_, C) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (C.key != null || L && C === L.subTree) && so(
        _,
        C,
        !0
        /* shallow */
      )
    )) : Ee(
      _,
      C,
      I,
      ie,
      L,
      F,
      J,
      z,
      q
    );
  }, K = (_, C, I, B, L, F, J, z, q) => {
    C.slotScopeIds = z, _ == null ? C.shapeFlag & 512 ? L.ctx.activate(
      C,
      I,
      B,
      J,
      q
    ) : te(
      C,
      I,
      B,
      L,
      F,
      J,
      q
    ) : Z(_, C, q);
  }, te = (_, C, I, B, L, F, J) => {
    const z = _.component = hd(
      _,
      B,
      L
    );
    if (N.NODE_ENV !== "production" && z.type.__hmrId && th(z), N.NODE_ENV !== "production" && (gs(_), an(z, "mount")), Fs(_) && (z.ctx.renderer = us), N.NODE_ENV !== "production" && an(z, "init"), gd(z, !1, J), N.NODE_ENV !== "production" && cn(z, "init"), N.NODE_ENV !== "production" && Bt && (_.el = null), z.asyncDep) {
      if (L && L.registerDep(z, se, J), !_.el) {
        const q = z.subTree = fe($e);
        S(null, q, C, I), _.placeholder = q.el;
      }
    } else
      se(
        z,
        _,
        C,
        I,
        L,
        F,
        J
      );
    N.NODE_ENV !== "production" && (vs(), cn(z, "mount"));
  }, Z = (_, C, I) => {
    const B = C.component = _.component;
    if (Pm(_, C, I))
      if (B.asyncDep && !B.asyncResolved) {
        N.NODE_ENV !== "production" && gs(C), Q(B, C, I), N.NODE_ENV !== "production" && vs();
        return;
      } else
        B.next = C, B.update();
    else
      C.el = _.el, B.vnode = C;
  }, se = (_, C, I, B, L, F, J) => {
    const z = () => {
      if (_.isMounted) {
        let { next: X, bu: ne, u: le, parent: ye, vnode: ke } = _;
        {
          const wt = Xu(_);
          if (wt) {
            X && (X.el = ke.el, Q(_, X, J)), wt.asyncDep.then(() => {
              _.isUnmounted || z();
            });
            return;
          }
        }
        let we = X, ht;
        N.NODE_ENV !== "production" && gs(X || _.vnode), Hn(_, !1), X ? (X.el = ke.el, Q(_, X, J)) : X = ke, ne && On(ne), (ht = X.props && X.props.onVnodeBeforeUpdate) && vt(ht, ye, X, ke), Hn(_, !0), N.NODE_ENV !== "production" && an(_, "render");
        const Xe = Ko(_);
        N.NODE_ENV !== "production" && cn(_, "render");
        const Pt = _.subTree;
        _.subTree = Xe, N.NODE_ENV !== "production" && an(_, "patch"), g(
          Pt,
          Xe,
          // parent may have changed if it's in a teleport
          u(Pt.el),
          // anchor may have changed if it's in a fragment
          Do(Pt),
          _,
          L,
          F
        ), N.NODE_ENV !== "production" && cn(_, "patch"), X.el = Xe.el, we === null && Ki(_, Xe.el), le && je(le, L), (ht = X.props && X.props.onVnodeUpdated) && je(
          () => vt(ht, ye, X, ke),
          L
        ), N.NODE_ENV !== "production" && pu(_), N.NODE_ENV !== "production" && vs();
      } else {
        let X;
        const { el: ne, props: le } = C, { bm: ye, m: ke, parent: we, root: ht, type: Xe } = _, Pt = Vn(C);
        if (Hn(_, !1), ye && On(ye), !Pt && (X = le && le.onVnodeBeforeMount) && vt(X, we, C), Hn(_, !0), ne && nr) {
          const wt = () => {
            N.NODE_ENV !== "production" && an(_, "render"), _.subTree = Ko(_), N.NODE_ENV !== "production" && cn(_, "render"), N.NODE_ENV !== "production" && an(_, "hydrate"), nr(
              ne,
              _.subTree,
              _,
              L,
              null
            ), N.NODE_ENV !== "production" && cn(_, "hydrate");
          };
          Pt && Xe.__asyncHydrate ? Xe.__asyncHydrate(
            ne,
            _,
            wt
          ) : wt();
        } else {
          ht.ce && // @ts-expect-error _def is private
          ht.ce._def.shadowRoot !== !1 && ht.ce._injectChildStyle(Xe), N.NODE_ENV !== "production" && an(_, "render");
          const wt = _.subTree = Ko(_);
          N.NODE_ENV !== "production" && cn(_, "render"), N.NODE_ENV !== "production" && an(_, "patch"), g(
            null,
            wt,
            I,
            B,
            _,
            L,
            F
          ), N.NODE_ENV !== "production" && cn(_, "patch"), C.el = wt.el;
        }
        if (ke && je(ke, L), !Pt && (X = le && le.onVnodeMounted)) {
          const wt = C;
          je(
            () => vt(X, we, wt),
            L
          );
        }
        (C.shapeFlag & 256 || we && Vn(we.vnode) && we.vnode.shapeFlag & 256) && _.a && je(_.a, L), _.isMounted = !0, N.NODE_ENV !== "production" && Sr(_), C = I = B = null;
      }
    };
    _.scope.on();
    const q = _.effect = new ao(z);
    _.scope.off();
    const j = _.update = q.run.bind(q), ie = _.job = q.runIfDirty.bind(q);
    ie.i = _, ie.id = _.uid, q.scheduler = () => Li(ie), Hn(_, !0), N.NODE_ENV !== "production" && (q.onTrack = _.rtc ? (X) => On(_.rtc, X) : void 0, q.onTrigger = _.rtg ? (X) => On(_.rtg, X) : void 0), j();
  }, Q = (_, C, I) => {
    C.component = _;
    const B = _.vnode.props;
    _.vnode = C, _.next = null, gm(_, C.props, B, I), km(_, C.children, I), zt(), pa(_), Kt();
  }, Ee = (_, C, I, B, L, F, J, z, q = !1) => {
    const j = _ && _.children, ie = _ ? _.shapeFlag : 0, X = C.children, { patchFlag: ne, shapeFlag: le } = C;
    if (ne > 0) {
      if (ne & 128) {
        Ot(
          j,
          X,
          I,
          B,
          L,
          F,
          J,
          z,
          q
        );
        return;
      } else if (ne & 256) {
        pt(
          j,
          X,
          I,
          B,
          L,
          F,
          J,
          z,
          q
        );
        return;
      }
    }
    le & 8 ? (ie & 16 && Bs(j, L, F), X !== j && d(I, X)) : ie & 16 ? le & 16 ? Ot(
      j,
      X,
      I,
      B,
      L,
      F,
      J,
      z,
      q
    ) : Bs(j, L, F, !0) : (ie & 8 && d(I, ""), le & 16 && y(
      X,
      I,
      B,
      L,
      F,
      J,
      z,
      q
    ));
  }, pt = (_, C, I, B, L, F, J, z, q) => {
    _ = _ || ms, C = C || ms;
    const j = _.length, ie = C.length, X = Math.min(j, ie);
    let ne;
    for (ne = 0; ne < X; ne++) {
      const le = C[ne] = q ? kn(C[ne]) : ut(C[ne]);
      g(
        _[ne],
        le,
        I,
        null,
        L,
        F,
        J,
        z,
        q
      );
    }
    j > ie ? Bs(
      _,
      L,
      F,
      !0,
      !1,
      X
    ) : y(
      C,
      I,
      B,
      L,
      F,
      J,
      z,
      q,
      X
    );
  }, Ot = (_, C, I, B, L, F, J, z, q) => {
    let j = 0;
    const ie = C.length;
    let X = _.length - 1, ne = ie - 1;
    for (; j <= X && j <= ne; ) {
      const le = _[j], ye = C[j] = q ? kn(C[j]) : ut(C[j]);
      if (Lt(le, ye))
        g(
          le,
          ye,
          I,
          null,
          L,
          F,
          J,
          z,
          q
        );
      else
        break;
      j++;
    }
    for (; j <= X && j <= ne; ) {
      const le = _[X], ye = C[ne] = q ? kn(C[ne]) : ut(C[ne]);
      if (Lt(le, ye))
        g(
          le,
          ye,
          I,
          null,
          L,
          F,
          J,
          z,
          q
        );
      else
        break;
      X--, ne--;
    }
    if (j > X) {
      if (j <= ne) {
        const le = ne + 1, ye = le < ie ? C[le].el : B;
        for (; j <= ne; )
          g(
            null,
            C[j] = q ? kn(C[j]) : ut(C[j]),
            I,
            ye,
            L,
            F,
            J,
            z,
            q
          ), j++;
      }
    } else if (j > ne)
      for (; j <= X; )
        bn(_[j], L, F, !0), j++;
    else {
      const le = j, ye = j, ke = /* @__PURE__ */ new Map();
      for (j = ye; j <= ne; j++) {
        const rt = C[j] = q ? kn(C[j]) : ut(C[j]);
        rt.key != null && (N.NODE_ENV !== "production" && ke.has(rt.key) && P(
          "Duplicate keys found during update:",
          JSON.stringify(rt.key),
          "Make sure keys are unique."
        ), ke.set(rt.key, j));
      }
      let we, ht = 0;
      const Xe = ne - ye + 1;
      let Pt = !1, wt = 0;
      const js = new Array(Xe);
      for (j = 0; j < Xe; j++) js[j] = 0;
      for (j = le; j <= X; j++) {
        const rt = _[j];
        if (ht >= Xe) {
          bn(rt, L, F, !0);
          continue;
        }
        let Gt;
        if (rt.key != null)
          Gt = ke.get(rt.key);
        else
          for (we = ye; we <= ne; we++)
            if (js[we - ye] === 0 && Lt(rt, C[we])) {
              Gt = we;
              break;
            }
        Gt === void 0 ? bn(rt, L, F, !0) : (js[Gt - ye] = j + 1, Gt >= wt ? wt = Gt : Pt = !0, g(
          rt,
          C[Gt],
          I,
          null,
          L,
          F,
          J,
          z,
          q
        ), ht++);
      }
      const sa = Pt ? Om(js) : ms;
      for (we = sa.length - 1, j = Xe - 1; j >= 0; j--) {
        const rt = ye + j, Gt = C[rt], oa = C[rt + 1], ia = rt + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          oa.el || oa.placeholder
        ) : B;
        js[j] === 0 ? g(
          null,
          Gt,
          I,
          ia,
          L,
          F,
          J,
          z,
          q
        ) : Pt && (we < 0 || j !== sa[we] ? Tt(Gt, I, ia, 2) : we--);
      }
    }
  }, Tt = (_, C, I, B, L = null) => {
    const { el: F, type: J, transition: z, children: q, shapeFlag: j } = _;
    if (j & 6) {
      Tt(_.component.subTree, C, I, B);
      return;
    }
    if (j & 128) {
      _.suspense.move(C, I, B);
      return;
    }
    if (j & 64) {
      J.move(_, C, I, us);
      return;
    }
    if (J === ae) {
      s(F, C, I);
      for (let X = 0; X < q.length; X++)
        Tt(q[X], C, I, B);
      s(_.anchor, C, I);
      return;
    }
    if (J === An) {
      w(_, C, I);
      return;
    }
    if (B !== 2 && j & 1 && z)
      if (B === 0)
        z.beforeEnter(F), s(F, C, I), je(() => z.enter(F), L);
      else {
        const { leave: X, delayLeave: ne, afterLeave: le } = z, ye = () => {
          _.ctx.isUnmounted ? o(F) : s(F, C, I);
        }, ke = () => {
          X(F, () => {
            ye(), le && le();
          });
        };
        ne ? ne(F, ye, ke) : ke();
      }
    else
      s(F, C, I);
  }, bn = (_, C, I, B = !1, L = !1) => {
    const {
      type: F,
      props: J,
      ref: z,
      children: q,
      dynamicChildren: j,
      shapeFlag: ie,
      patchFlag: X,
      dirs: ne,
      cacheIndex: le
    } = _;
    if (X === -2 && (L = !1), z != null && (zt(), bs(z, null, I, _, !0), Kt()), le != null && (C.renderCache[le] = void 0), ie & 256) {
      C.ctx.deactivate(_);
      return;
    }
    const ye = ie & 1 && ne, ke = !Vn(_);
    let we;
    if (ke && (we = J && J.onVnodeBeforeUnmount) && vt(we, C, _), ie & 6)
      Rf(_.component, I, B);
    else {
      if (ie & 128) {
        _.suspense.unmount(I, B);
        return;
      }
      ye && Qt(_, null, C, "beforeUnmount"), ie & 64 ? _.type.remove(
        _,
        C,
        I,
        us,
        B
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ae || X > 0 && X & 64) ? Bs(
        j,
        C,
        I,
        !1,
        !0
      ) : (F === ae && X & 384 || !L && ie & 16) && Bs(q, C, I), B && Zi(_);
    }
    (ke && (we = J && J.onVnodeUnmounted) || ye) && je(() => {
      we && vt(we, C, _), ye && Qt(_, null, C, "unmounted");
    }, I);
  }, Zi = (_) => {
    const { type: C, el: I, anchor: B, transition: L } = _;
    if (C === ae) {
      N.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && L && !L.persisted ? _.children.forEach((J) => {
        J.type === $e ? o(J.el) : Zi(J);
      }) : Pf(I, B);
      return;
    }
    if (C === An) {
      E(_);
      return;
    }
    const F = () => {
      o(I), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (_.shapeFlag & 1 && L && !L.persisted) {
      const { leave: J, delayLeave: z } = L, q = () => J(I, F);
      z ? z(_.el, F, q) : q();
    } else
      F();
  }, Pf = (_, C) => {
    let I;
    for (; _ !== C; )
      I = h(_), o(_), _ = I;
    o(C);
  }, Rf = (_, C, I) => {
    N.NODE_ENV !== "production" && _.type.__hmrId && nh(_);
    const {
      bum: B,
      scope: L,
      job: F,
      subTree: J,
      um: z,
      m: q,
      a: j,
      parent: ie,
      slots: { __: X }
    } = _;
    di(q), di(j), B && On(B), ie && G(X) && X.forEach((ne) => {
      ie.renderCache[ne] = void 0;
    }), L.stop(), F && (F.flags |= 8, bn(J, _, C, I)), z && je(z, C), je(() => {
      _.isUnmounted = !0;
    }, C), C && C.pendingBranch && !C.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === C.pendingId && (C.deps--, C.deps === 0 && C.resolve()), N.NODE_ENV !== "production" && ah(_);
  }, Bs = (_, C, I, B = !1, L = !1, F = 0) => {
    for (let J = F; J < _.length; J++)
      bn(_[J], C, I, B, L);
  }, Do = (_) => {
    if (_.shapeFlag & 6)
      return Do(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const C = h(_.anchor || _.el), I = C && C[gu];
    return I ? h(I) : C;
  };
  let er = !1;
  const na = (_, C, I) => {
    _ == null ? C._vnode && bn(C._vnode, null, null, !0) : g(
      C._vnode || null,
      _,
      C,
      null,
      null,
      null,
      I
    ), C._vnode = _, er || (er = !0, pa(), ri(), er = !1);
  }, us = {
    p: g,
    um: bn,
    m: Tt,
    r: Zi,
    mt: te,
    mc: y,
    pc: Ee,
    pbc: A,
    n: Do,
    o: e
  };
  let tr, nr;
  return t && ([tr, nr] = t(
    us
  )), {
    render: na,
    hydrate: tr,
    createApp: fm(na, tr)
  };
}
function pr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Hn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ju(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (G(s) && G(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = kn(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && so(r, l)), l.type === sn && (l.el = r.el), l.type === $e && !l.el && (l.el = r.el), N.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Om(e) {
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
function Xu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xu(t);
}
function di(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Qu = Symbol.for("v-scx"), Zu = () => {
  {
    const e = no(Qu);
    return e || N.NODE_ENV !== "production" && P(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Tm(e, t) {
  return ko(e, null, t);
}
function $m(e, t) {
  return ko(
    e,
    null,
    N.NODE_ENV !== "production" ? de({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function ed(e, t) {
  return ko(
    e,
    null,
    N.NODE_ENV !== "production" ? de({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function nn(e, t, n) {
  return N.NODE_ENV !== "production" && !oe(t) && P(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ko(e, t, n);
}
function ko(e, t, n = pe) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  N.NODE_ENV !== "production" && !t && (s !== void 0 && P(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && P(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && P(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  N.NODE_ENV !== "production" && (l.onWarn = P);
  const a = t && s || !t && i !== "post";
  let c;
  if (Os) {
    if (i === "sync") {
      const m = Zu();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Te, m.resume = Te, m.pause = Te, m;
    }
  }
  const d = qe;
  l.call = (m, v, g) => It(m, d, v, g);
  let u = !1;
  i === "post" ? l.scheduler = (m) => {
    je(m, d && d.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (m, v) => {
    v ? m() : Li(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = Kp(e, t, l);
  return Os && (c ? c.push(h) : a && h()), h;
}
function Dm(e, t, n) {
  const s = this.proxy, o = re(e) ? e.includes(".") ? td(s, e) : () => s[e] : e.bind(s, s);
  let i;
  oe(t) ? i = t : (i = t.handler, n = t);
  const r = is(this), l = ko(o, i.bind(s), n);
  return r(), l;
}
function td(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Vm(e, t, n = pe) {
  const s = it();
  if (N.NODE_ENV !== "production" && !s)
    return P("useModel() called without active instance."), U();
  const o = Se(t);
  if (N.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return P(`useModel() called with prop "${t}" which is not declared.`), U();
  const i = et(t), r = nd(e, o), l = iu((a, c) => {
    let d, u = pe, h;
    return ed(() => {
      const m = e[o];
      at(d, m) && (d = m, c());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const v = n.set ? n.set(m) : m;
        if (!at(v, d) && !(u !== pe && at(m, u)))
          return;
        const g = s.vnode.props;
        g && // check if parent has passed v-model
        (t in g || o in g || i in g) && (`onUpdate:${t}` in g || `onUpdate:${o}` in g || `onUpdate:${i}` in g) || (d = m, c()), s.emit(`update:${t}`, v), at(m, v) && at(m, u) && !at(v, h) && c(), u = m, h = v;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? { value: a++ ? r || pe : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const nd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Se(t)}Modifiers`] || e[`${et(t)}Modifiers`];
function Am(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (N.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(en(Se(t)) in u)) && P(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${en(Se(t))}" prop.`
        );
      else {
        const h = d[t];
        oe(h) && (h(...n) || P(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), r = i && nd(s, t.slice(7));
  if (r && (r.trim && (o = n.map((d) => re(d) ? d.trim() : d)), r.number && (o = n.map(ei))), N.NODE_ENV !== "production" && dh(e, t, o), N.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[en(d)] && P(
      `Event "${d}" is emitted in component ${Wi(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${et(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = en(t)] || // also try camelCase event handler (#2249)
  s[l = en(Se(t))];
  !a && i && (a = s[l = en(et(t))]), a && It(
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
    e.emitted[l] = !0, It(
      c,
      e,
      6,
      o
    );
  }
}
function sd(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!oe(e)) {
    const a = (c) => {
      const d = sd(c, t, !0);
      d && (l = !0, de(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (me(e) && s.set(e, null), null) : (G(i) ? i.forEach((a) => r[a] = null) : de(r, i), me(e) && s.set(e, r), r);
}
function qi(e, t) {
  return !e || !gn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, et(t)) || ge(e, t));
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
    ctx: v,
    inheritAttrs: g
  } = e, $ = po(e);
  let S, b;
  N.NODE_ENV !== "production" && (Vr = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = o || s, D = N.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(E, {
        get(M, x, y) {
          return P(
            `Property '${String(
              x
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, x, y);
        }
      }) : E;
      S = ut(
        c.call(
          D,
          E,
          d,
          N.NODE_ENV !== "production" ? Ft(u) : u,
          m,
          h,
          v
        )
      ), b = l;
    } else {
      const E = t;
      N.NODE_ENV !== "production" && l === u && fi(), S = ut(
        E.length > 1 ? E(
          N.NODE_ENV !== "production" ? Ft(u) : u,
          N.NODE_ENV !== "production" ? {
            get attrs() {
              return fi(), Ft(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : E(
          N.NODE_ENV !== "production" ? Ft(u) : u,
          null
        )
      ), b = t.props ? l : Im(l);
    }
  } catch (E) {
    oo.length = 0, Ln(E, e, 1), S = fe($e);
  }
  let p = S, w;
  if (N.NODE_ENV !== "production" && S.patchFlag > 0 && S.patchFlag & 2048 && ([p, w] = od(S)), b && g !== !1) {
    const E = Object.keys(b), { shapeFlag: D } = p;
    if (E.length) {
      if (D & 7)
        i && E.some(Zo) && (b = Mm(
          b,
          i
        )), p = Mt(p, b, !1, !0);
      else if (N.NODE_ENV !== "production" && !Vr && p.type !== $e) {
        const M = Object.keys(l), x = [], y = [];
        for (let O = 0, A = M.length; O < A; O++) {
          const V = M[O];
          gn(V) ? Zo(V) || x.push(V[2].toLowerCase() + V.slice(3)) : y.push(V);
        }
        y.length && P(
          `Extraneous non-props attributes (${y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), x.length && P(
          `Extraneous non-emits event listeners (${x.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (N.NODE_ENV !== "production" && !$a(p) && P(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), p = Mt(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && (N.NODE_ENV !== "production" && !$a(p) && P(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), vn(p, n.transition)), N.NODE_ENV !== "production" && w ? w(p) : S = p, po($), S;
}
const od = (e) => {
  const t = e.children, n = e.dynamicChildren, s = zi(t, !1);
  if (s) {
    if (N.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return od(s);
  } else return [e, void 0];
  const o = t.indexOf(s), i = n ? n.indexOf(s) : -1, r = (l) => {
    t[o] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ut(s), r];
};
function zi(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (rn(o)) {
      if (o.type !== $e || o.children === "v-if") {
        if (n)
          return;
        if (n = o, N.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return zi(n.children);
      }
    } else
      return;
  }
  return n;
}
const Im = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || gn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Mm = (e, t) => {
  const n = {};
  for (const s in e)
    (!Zo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, $a = (e) => e.shapeFlag & 7 || e.type === $e;
function Pm(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (N.NODE_ENV !== "production" && (o || l) && Bt || t.dirs || t.transition)
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
        if (r[h] !== s[h] && !qi(c, h))
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
    if (t[i] !== e[i] && !qi(n, i))
      return !0;
  }
  return !1;
}
function Ki({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const pi = (e) => e.__isSuspense;
let Ar = 0;
const Rm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    if (e == null)
      Fm(
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
      Bm(
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
  hydrate: jm,
  normalize: Hm
}, Lm = Rm;
function mo(e, t) {
  const n = e.props && e.props[t];
  oe(n) && n();
}
function Fm(e, t, n, s, o, i, r, l, a) {
  const {
    p: c,
    o: { createElement: d }
  } = a, u = d("div"), h = e.suspense = id(
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
  ), h.deps > 0 ? (mo(e, "onPending"), mo(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    i,
    r
  ), _s(h, e.ssFallback)) : h.resolve(!1, !0);
}
function Bm(e, t, n, s, o, i, r, l, { p: a, um: c, o: { createElement: d } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const h = t.ssContent, m = t.ssFallback, { activeBranch: v, pendingBranch: g, isInFallback: $, isHydrating: S } = u;
  if (g)
    u.pendingBranch = h, Lt(h, g) ? (a(
      g,
      h,
      u.hiddenContainer,
      null,
      o,
      u,
      i,
      r,
      l
    ), u.deps <= 0 ? u.resolve() : $ && (S || (a(
      v,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), _s(u, m)))) : (u.pendingId = Ar++, S ? (u.isHydrating = !1, u.activeBranch = g) : c(g, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = d("div"), $ ? (a(
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
      v,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), _s(u, m))) : v && Lt(h, v) ? (a(
      v,
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
  else if (v && Lt(h, v))
    a(
      v,
      h,
      n,
      s,
      o,
      u,
      i,
      r,
      l
    ), _s(u, h);
  else if (mo(t, "onPending"), u.pendingBranch = h, h.shapeFlag & 512 ? u.pendingId = h.component.suspenseId : u.pendingId = Ar++, a(
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
    const { timeout: b, pendingId: p } = u;
    b > 0 ? setTimeout(() => {
      u.pendingId === p && u.fallback(m);
    }, b) : b === 0 && u.fallback(m);
  }
}
let Va = !1;
function id(e, t, n, s, o, i, r, l, a, c, d = !1) {
  N.NODE_ENV !== "production" && !Va && (Va = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: h,
    um: m,
    n: v,
    o: { parentNode: g, remove: $ }
  } = c;
  let S;
  const b = Um(e);
  b && t && t.pendingBranch && (S = t.pendingId, t.deps++);
  const p = e.props ? ti(e.props.timeout) : void 0;
  N.NODE_ENV !== "production" && pl(p, "Suspense timeout");
  const w = i, E = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: r,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Ar++,
    timeout: typeof p == "number" ? p : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(D = !1, M = !1) {
      if (N.NODE_ENV !== "production") {
        if (!D && !E.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (E.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: x,
        activeBranch: y,
        pendingBranch: O,
        pendingId: A,
        effects: V,
        parentComponent: R,
        container: K
      } = E;
      let te = !1;
      E.isHydrating ? E.isHydrating = !1 : D || (te = y && O.transition && O.transition.mode === "out-in", te && (y.transition.afterLeave = () => {
        A === E.pendingId && (h(
          O,
          K,
          i === w ? v(y) : i,
          0
        ), Ss(V));
      }), y && (g(y.el) === K && (i = v(y)), m(y, R, E, !0)), te || h(O, K, i, 0)), _s(E, O), E.pendingBranch = null, E.isInFallback = !1;
      let Z = E.parent, se = !1;
      for (; Z; ) {
        if (Z.pendingBranch) {
          Z.effects.push(...V), se = !0;
          break;
        }
        Z = Z.parent;
      }
      !se && !te && Ss(V), E.effects = [], b && t && t.pendingBranch && S === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), mo(x, "onResolve");
    },
    fallback(D) {
      if (!E.pendingBranch)
        return;
      const { vnode: M, activeBranch: x, parentComponent: y, container: O, namespace: A } = E;
      mo(M, "onFallback");
      const V = v(x), R = () => {
        E.isInFallback && (u(
          null,
          D,
          O,
          V,
          y,
          null,
          // fallback tree will not have suspense context
          A,
          l,
          a
        ), _s(E, D));
      }, K = D.transition && D.transition.mode === "out-in";
      K && (x.transition.afterLeave = R), E.isInFallback = !0, m(
        x,
        y,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), K || R();
    },
    move(D, M, x) {
      E.activeBranch && h(E.activeBranch, D, M, x), E.container = D;
    },
    next() {
      return E.activeBranch && v(E.activeBranch);
    },
    registerDep(D, M, x) {
      const y = !!E.pendingBranch;
      y && E.deps++;
      const O = D.vnode.el;
      D.asyncDep.catch((A) => {
        Ln(A, D, 0);
      }).then((A) => {
        if (D.isUnmounted || E.isUnmounted || E.pendingId !== D.suspenseId)
          return;
        D.asyncResolved = !0;
        const { vnode: V } = D;
        N.NODE_ENV !== "production" && gs(V), Fr(D, A, !1), O && (V.el = O);
        const R = !O && D.subTree.el;
        M(
          D,
          V,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          g(O || D.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          O ? null : v(D.subTree),
          E,
          r,
          x
        ), R && $(R), Ki(D, V.el), N.NODE_ENV !== "production" && vs(), y && --E.deps === 0 && E.resolve();
      });
    },
    unmount(D, M) {
      E.isUnmounted = !0, E.activeBranch && m(
        E.activeBranch,
        n,
        D,
        M
      ), E.pendingBranch && m(
        E.pendingBranch,
        n,
        D,
        M
      );
    }
  };
  return E;
}
function jm(e, t, n, s, o, i, r, l, a) {
  const c = t.suspense = id(
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
  e.ssContent = Aa(
    s ? n.default : n
  ), e.ssFallback = s ? Aa(n.fallback) : fe($e);
}
function Aa(e) {
  let t;
  if (oe(e)) {
    const n = os && e._c;
    n && (e._d = !1, k()), e = e(), n && (e._d = !0, t = tt, ld());
  }
  if (G(e)) {
    const n = zi(e);
    N.NODE_ENV !== "production" && !n && e.filter((s) => s !== wl).length > 0 && P("<Suspense> slots expect a single root node."), e = n;
  }
  return e = ut(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function rd(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : Ss(e);
}
function _s(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, Ki(s, o));
}
function Um(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ae = Symbol.for("v-fgt"), sn = Symbol.for("v-txt"), $e = Symbol.for("v-cmt"), An = Symbol.for("v-stc"), oo = [];
let tt = null;
function k(e = !1) {
  oo.push(tt = e ? null : []);
}
function ld() {
  oo.pop(), tt = oo[oo.length - 1] || null;
}
let os = 1;
function Ir(e, t = !1) {
  os += e, e < 0 && tt && t && (tt.hasOnce = !0);
}
function ad(e) {
  return e.dynamicChildren = os > 0 ? tt || ms : null, ld(), os > 0 && tt && tt.push(e), e;
}
function T(e, t, n, s, o, i) {
  return ad(
    f(
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
function ft(e, t, n, s, o) {
  return ad(
    fe(
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
function Lt(e, t) {
  if (N.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = qo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Mr;
function qm(e) {
  Mr = e;
}
const zm = (...e) => ud(
  ...Mr ? Mr(e, Re) : e
), cd = ({ key: e }) => e ?? null, Wo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || Ae(e) || oe(e) ? { i: Re, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, o = null, i = e === ae ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cd(t),
    ref: t && Wo(t),
    scopeId: Fi,
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
  return l ? ($l(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= re(n) ? 8 : 16), N.NODE_ENV !== "production" && a.key !== a.key && P("VNode created with invalid key (NaN). VNode type:", a.type), os > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && tt.push(a), a;
}
const fe = N.NODE_ENV !== "production" ? zm : ud;
function ud(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === wl) && (N.NODE_ENV !== "production" && !e && P(`Invalid vnode type when creating vnode: ${e}.`), e = $e), rn(e)) {
    const l = Mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $l(l, n), os > 0 && !i && tt && (l.shapeFlag & 6 ? tt[tt.indexOf(e)] = l : tt.push(l)), l.patchFlag = -2, l;
  }
  if (_d(e) && (e = e.__vccOpts), t) {
    t = dd(t);
    let { class: l, style: a } = t;
    l && !re(l) && (t.class = Ve(l)), me(a) && (xs(a) && !G(a) && (a = de({}, a)), t.style = dt(a));
  }
  const r = re(e) ? 1 : pi(e) ? 128 : vu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return N.NODE_ENV !== "production" && r & 4 && xs(e) && (e = ce(e), P(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), f(
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
function dd(e) {
  return e ? xs(e) || ju(e) ? de({}, e) : e : null;
}
function Mt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, c = t ? pd(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && cd(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? G(i) ? i.concat(Wo(t)) : [i, Wo(t)] : Wo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: N.NODE_ENV !== "production" && r === -1 && G(l) ? l.map(fd) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ae ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Mt(e.ssContent),
    ssFallback: e.ssFallback && Mt(e.ssFallback),
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
function fd(e) {
  const t = Mt(e);
  return G(e.children) && (t.children = e.children.map(fd)), t;
}
function Be(e = " ", t = 0) {
  return fe(sn, null, e, t);
}
function Cs(e, t) {
  const n = fe(An, null, e);
  return n.staticCount = t, n;
}
function H(e = "", t = !1) {
  return t ? (k(), ft($e, null, e)) : fe($e, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? fe($e) : G(e) ? fe(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rn(e) ? kn(e) : fe(sn, null, String(e));
}
function kn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mt(e);
}
function $l(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (G(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), $l(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ju(t) ? t._ctx = Re : o === 3 && Re && (Re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else oe(t) ? (t = { default: t, _ctx: Re }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Be(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Ve([t.class, s.class]));
      else if (o === "style")
        t.style = dt([t.style, s.style]);
      else if (gn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(G(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function vt(e, t, n, s = null) {
  It(e, t, 7, [
    n,
    s
  ]);
}
const Km = Ru();
let Wm = 0;
function hd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Km, i = {
    uid: Wm++,
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
    scope: new ll(
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
    propsOptions: Uu(s, o),
    emitsOptions: sd(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: pe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: pe,
    data: pe,
    props: pe,
    attrs: pe,
    slots: pe,
    refs: pe,
    setupState: pe,
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
  return N.NODE_ENV !== "production" ? i.ctx = Uh(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Am.bind(null, i), e.ce && e.ce(i), i;
}
let qe = null;
const it = () => qe || Re;
let hi, Pr;
{
  const e = No(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  hi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => qe = n
  ), Pr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Os = n
  );
}
const is = (e) => {
  const t = qe;
  return hi(e), e.scope.on(), () => {
    e.scope.off(), hi(t);
  };
}, Rr = () => {
  qe && qe.scope.off(), hi(null);
}, Gm = /* @__PURE__ */ Ke("slot,component");
function Lr(e, { isNativeTag: t }) {
  (Gm(e) || t(e)) && P(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function md(e) {
  return e.vnode.shapeFlag & 4;
}
let Os = !1;
function gd(e, t = !1, n = !1) {
  t && Pr(t);
  const { props: s, children: o } = e.vnode, i = md(e);
  hm(e, s, i, t), Sm(e, o, n || t);
  const r = i ? Ym(e, t) : void 0;
  return t && Pr(!1), r;
}
function Ym(e, t) {
  var n;
  const s = e.type;
  if (N.NODE_ENV !== "production") {
    if (s.name && Lr(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let r = 0; r < i.length; r++)
        Lr(i[r], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let r = 0; r < i.length; r++)
        mu(i[r]);
    }
    s.compilerOptions && Dl() && P(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, to), N.NODE_ENV !== "production" && qh(e);
  const { setup: o } = s;
  if (o) {
    zt();
    const i = e.setupContext = o.length > 1 ? bd(e) : null, r = is(e), l = as(
      o,
      e,
      0,
      [
        N.NODE_ENV !== "production" ? Ft(e.props) : e.props,
        i
      ]
    ), a = Oi(l);
    if (Kt(), r(), (a || e.sp) && !Vn(e) && _l(e), a) {
      if (l.then(Rr, Rr), t)
        return l.then((c) => {
          Fr(e, c, t);
        }).catch((c) => {
          Ln(c, e, 0);
        });
      if (e.asyncDep = l, N.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        P(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Fr(e, l, t);
  } else
    yd(e, t);
}
function Fr(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (N.NODE_ENV !== "production" && rn(t) && P(
    "setup() should not return VNodes directly - return a render function instead."
  ), N.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = fl(t), N.NODE_ENV !== "production" && zh(e)) : N.NODE_ENV !== "production" && t !== void 0 && P(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), yd(e, n);
}
let io, Br;
function vd(e) {
  io = e, Br = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Hh));
  };
}
const Dl = () => !io;
function yd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && io && !s.render) {
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
        s.render = io(o, c), N.NODE_ENV !== "production" && cn(e, "compile");
      }
    }
    e.render = s.render || Te, Br && Br(e);
  }
  {
    const o = is(e);
    zt();
    try {
      rm(e);
    } finally {
      Kt(), o();
    }
  }
  N.NODE_ENV !== "production" && !s.render && e.render === Te && !t && (!io && s.template ? P(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : P("Component is missing template or render function: ", s));
}
const Ia = N.NODE_ENV !== "production" ? {
  get(e, t) {
    return fi(), He(e, "get", ""), e[t];
  },
  set() {
    return P("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return P("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return He(e, "get", ""), e[t];
  }
};
function Jm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return He(e, "get", "$slots"), t[n];
    }
  });
}
function bd(e) {
  const t = (n) => {
    if (N.NODE_ENV !== "production" && (e.exposed && P("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (G(n) ? s = "array" : Ae(n) && (s = "ref")), s !== "object" && P(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (N.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ia));
      },
      get slots() {
        return s || (s = Jm(e));
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ia),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Co(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fl(nu(e.exposed)), {
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
const Xm = /(?:^|[-_])(\w)/g, Qm = (e) => e.replace(Xm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ts(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wi(e, t, n = !1) {
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
  return s ? Qm(s) : n ? "App" : "Anonymous";
}
function _d(e) {
  return oe(e) && "__vccOpts" in e;
}
const ee = (e, t) => {
  const n = Hp(e, t, Os);
  if (N.NODE_ENV !== "production") {
    const s = it();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Xt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? me(t) && !G(t) ? rn(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && rn(n) && (n = [n]), fe(e, t, n));
}
function Ed() {
  if (N.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!me(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Ae(u)) {
        zt();
        const h = u.value;
        return Kt(), [
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
            ["span", e, nt(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Wt(u) ? " (readonly)" : ""}`
          ];
        if (Wt(u))
          return [
            "div",
            {},
            ["span", e, nt(u) ? "ShallowReadonly" : "Readonly"],
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
    u.type.props && u.props && h.push(r("props", ce(u.props))), u.setupState !== pe && h.push(r("setup", u.setupState)), u.data !== pe && h.push(r("data", ce(u.data)));
    const m = a(u, "computed");
    m && h.push(r("computed", m));
    const v = a(u, "inject");
    return v && h.push(r("injected", v)), h.push([
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : me(u) ? ["object", { object: h ? ce(u) : u }] : ["span", n, String(u)];
  }
  function a(u, h) {
    const m = u.type;
    if (oe(m))
      return;
    const v = {};
    for (const g in u.ctx)
      c(m, g, h) && (v[g] = u.ctx[g]);
    return v;
  }
  function c(u, h, m) {
    const v = u[m];
    if (G(v) && v.includes(h) || me(v) && h in v || u.extends && c(u.extends, h, m) || u.mixins && u.mixins.some((g) => c(g, h, m)))
      return !0;
  }
  function d(u) {
    return nt(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function Zm(e, t, n, s) {
  const o = n[s];
  if (o && wd(o, e))
    return o;
  const i = t();
  return i.memo = e.slice(), i.cacheIndex = s, n[s] = i;
}
function wd(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (at(n[s], t[s]))
      return !1;
  return os > 0 && tt && tt.push(e), !0;
}
const jr = "3.5.18", Ie = N.NODE_ENV !== "production" ? P : Te, eg = Ri, tg = Rt, ng = ml, sg = {
  createComponentInstance: hd,
  setupComponent: gd,
  renderComponentRoot: Ko,
  setCurrentRenderingInstance: po,
  isVNode: rn,
  normalizeVNode: ut,
  getComponentPublicInstance: Co,
  ensureValidVNode: Sl,
  pushWarningContext: gs,
  popWarningContext: vs
}, og = sg, ig = null, rg = null, lg = null;
var xe = {};
let Hr;
const Ma = typeof window < "u" && window.trustedTypes;
if (Ma)
  try {
    Hr = /* @__PURE__ */ Ma.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    xe.NODE_ENV !== "production" && Ie(`Error creating trusted types policy: ${e}`);
  }
const Nd = Hr ? (e) => Hr.createHTML(e) : (e) => e, ag = "http://www.w3.org/2000/svg", cg = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Pa = dn && /* @__PURE__ */ dn.createElement("template"), ug = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? dn.createElementNS(ag, e) : t === "mathml" ? dn.createElementNS(cg, e) : n ? dn.createElement(e, { is: n }) : dn.createElement(e);
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
      Pa.innerHTML = Nd(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Pa.content;
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
}, _n = "transition", qs = "animation", $s = Symbol("_vtc"), xd = {
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
}, Sd = /* @__PURE__ */ de(
  {},
  yl,
  xd
), dg = (e) => (e.displayName = "Transition", e.props = Sd, e), xt = /* @__PURE__ */ dg(
  (e, { slots: t }) => Xt(wu, kd(e), t)
), Un = (e, t = []) => {
  G(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ra = (e) => e ? G(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function kd(e) {
  const t = {};
  for (const V in e)
    V in xd || (t[V] = e[V]);
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
  } = e, v = fg(o), g = v && v[0], $ = v && v[1], {
    onBeforeEnter: S,
    onEnter: b,
    onEnterCancelled: p,
    onLeave: w,
    onLeaveCancelled: E,
    onBeforeAppear: D = S,
    onAppear: M = b,
    onAppearCancelled: x = p
  } = t, y = (V, R, K, te) => {
    V._enterCancelled = te, wn(V, R ? d : l), wn(V, R ? c : r), K && K();
  }, O = (V, R) => {
    V._isLeaving = !1, wn(V, u), wn(V, m), wn(V, h), R && R();
  }, A = (V) => (R, K) => {
    const te = V ? M : b, Z = () => y(R, V, K);
    Un(te, [R, Z]), La(() => {
      wn(R, V ? a : i), Yt(R, V ? d : l), Ra(te) || Fa(R, s, g, Z);
    });
  };
  return de(t, {
    onBeforeEnter(V) {
      Un(S, [V]), Yt(V, i), Yt(V, r);
    },
    onBeforeAppear(V) {
      Un(D, [V]), Yt(V, a), Yt(V, c);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(V, R) {
      V._isLeaving = !0;
      const K = () => O(V, R);
      Yt(V, u), V._enterCancelled ? (Yt(V, h), Ur()) : (Ur(), Yt(V, h)), La(() => {
        V._isLeaving && (wn(V, u), Yt(V, m), Ra(w) || Fa(V, s, $, K));
      }), Un(w, [V, K]);
    },
    onEnterCancelled(V) {
      y(V, !1, void 0, !0), Un(p, [V]);
    },
    onAppearCancelled(V) {
      y(V, !0, void 0, !0), Un(x, [V]);
    },
    onLeaveCancelled(V) {
      O(V), Un(E, [V]);
    }
  });
}
function fg(e) {
  if (e == null)
    return null;
  if (me(e))
    return [hr(e.enter), hr(e.leave)];
  {
    const t = hr(e);
    return [t, t];
  }
}
function hr(e) {
  const t = ti(e);
  return xe.NODE_ENV !== "production" && pl(t, "<transition> explicit duration"), t;
}
function Yt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[$s] || (e[$s] = /* @__PURE__ */ new Set())).add(t);
}
function wn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[$s];
  n && (n.delete(t), n.size || (e[$s] = void 0));
}
function La(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let pg = 0;
function Fa(e, t, n, s) {
  const o = e._endId = ++pg, i = () => {
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
  const n = window.getComputedStyle(e), s = (v) => (n[v] || "").split(", "), o = s(`${_n}Delay`), i = s(`${_n}Duration`), r = Ba(o, i), l = s(`${qs}Delay`), a = s(`${qs}Duration`), c = Ba(l, a);
  let d = null, u = 0, h = 0;
  t === _n ? r > 0 && (d = _n, u = r, h = i.length) : t === qs ? c > 0 && (d = qs, u = c, h = a.length) : (u = Math.max(r, c), d = u > 0 ? r > c ? _n : qs : null, h = d ? d === _n ? i.length : a.length : 0);
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
function Ba(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ja(n) + ja(e[s])));
}
function ja(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ur() {
  return document.body.offsetHeight;
}
function hg(e, t, n) {
  const s = e[$s];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mi = Symbol("_vod"), Od = Symbol("_vsh"), Vl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[mi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zs(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), zs(e, !0), s.enter(e)) : s.leave(e, () => {
      zs(e, !1);
    }) : zs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    zs(e, t);
  }
};
xe.NODE_ENV !== "production" && (Vl.name = "show");
function zs(e, t) {
  e.style.display = t ? e[mi] : "none", e[Od] = !t;
}
function mg() {
  Vl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Td = Symbol(xe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function gg(e) {
  const t = it();
  if (!t) {
    xe.NODE_ENV !== "production" && Ie("useCssVars is called without current active component instance.");
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
    t.ce ? gi(t.ce, o) : qr(t.subTree, o), n(o);
  };
  El(() => {
    Ss(s);
  }), ze(() => {
    nn(s, Te, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), kt(() => o.disconnect());
  });
}
function qr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      qr(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    gi(e.el, t);
  else if (e.type === ae)
    e.children.forEach((n) => qr(n, t));
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
      const i = Lc(t[o]);
      n.setProperty(`--${o}`, i), s += `--${o}: ${i};`;
    }
    n[Td] = s;
  }
}
const vg = /(^|;)\s*display\s*:/;
function yg(e, t, n) {
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
      const r = s[Td];
      r && (n += ";" + r), s.cssText = n, i = vg.test(n);
    }
  } else t && e.removeAttribute("style");
  mi in e && (e[mi] = i ? s.display : "", e[Od] && (s.display = "none"));
}
const bg = /[^\\];\s*$/, Ha = /\s*!important$/;
function Go(e, t, n) {
  if (G(n))
    n.forEach((s) => Go(e, t, s));
  else if (n == null && (n = ""), xe.NODE_ENV !== "production" && bg.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = _g(e, t);
    Ha.test(n) ? e.setProperty(
      et(s),
      n.replace(Ha, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ua = ["Webkit", "Moz", "ms"], mr = {};
function _g(e, t) {
  const n = mr[t];
  if (n)
    return n;
  let s = Se(t);
  if (s !== "filter" && s in e)
    return mr[t] = s;
  s = on(s);
  for (let o = 0; o < Ua.length; o++) {
    const i = Ua[o] + s;
    if (i in e)
      return mr[t] = i;
  }
  return t;
}
const qa = "http://www.w3.org/1999/xlink";
function za(e, t, n, s, o, i = sp(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qa, t.slice(6, t.length)) : e.setAttributeNS(qa, t, n) : n == null || i && !rl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Et(n) ? String(n) : n
  );
}
function Ka(e, t, n, s, o) {
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
    l === "boolean" ? n = rl(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    xe.NODE_ENV !== "production" && !r && Ie(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(o || t);
}
function pn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Eg(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Wa = Symbol("_vei");
function wg(e, t, n, s, o = null) {
  const i = e[Wa] || (e[Wa] = {}), r = i[t];
  if (s && r)
    r.value = xe.NODE_ENV !== "production" ? Ya(s, t) : s;
  else {
    const [l, a] = Ng(t);
    if (s) {
      const c = i[t] = kg(
        xe.NODE_ENV !== "production" ? Ya(s, t) : s,
        o
      );
      pn(e, l, c, a);
    } else r && (Eg(e, l, r, a), i[t] = void 0);
  }
}
const Ga = /(?:Once|Passive|Capture)$/;
function Ng(e) {
  let t;
  if (Ga.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ga); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let gr = 0;
const xg = /* @__PURE__ */ Promise.resolve(), Sg = () => gr || (xg.then(() => gr = 0), gr = Date.now());
function kg(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    It(
      Cg(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Sg(), n;
}
function Ya(e, t) {
  return oe(e) || G(e) ? e : (Ie(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Te);
}
function Cg(e, t) {
  if (G(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Ja = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Og = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? hg(e, s, r) : t === "style" ? yg(e, n, s) : gn(t) ? Zo(t) || wg(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tg(e, t, s, r)) ? (Ka(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && za(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? Ka(e, Se(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), za(e, t, s, r));
};
function Tg(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ja(t) && oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ja(t) && re(n) ? !1 : t in e;
}
const Xa = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Le(e, t, n) {
  const s = /* @__PURE__ */ bl(e, t);
  Ti(s) && de(s, t);
  class o extends Gi {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const $g = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Le(e, t, Fd), Dg = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Gi extends Dg {
  constructor(t, n = {}, s = Es) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Es ? this._root = this.shadowRoot : (xe.NODE_ENV !== "production" && this.shadowRoot && Ie(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Gi) {
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
    this._connected = !1, Ls(() => {
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
      if (i && !G(i))
        for (const a in i) {
          const c = i[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = ti(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Se(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(r) : xe.NODE_ENV !== "production" && r && Ie(
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
        ge(this, s) ? xe.NODE_ENV !== "production" && Ie(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => xo(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = G(n) ? n : Object.keys(n || {});
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
    let s = n ? this.getAttribute(t) : Xa;
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
    if (n !== this._props[t] && (n === Xa ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && i.disconnect(), n === !0 ? this.setAttribute(et(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(et(t), n + "") : n || this.removeAttribute(et(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Ld(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = fe(this._def, de(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, xe.NODE_ENV !== "production" && (s.ceReload = (i) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Ti(r[0]) ? de({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), et(i) !== i && o(et(i), r);
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
function zr(e) {
  const t = it(), n = t && t.ce;
  return n || (xe.NODE_ENV !== "production" && Ie(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function Vg() {
  const e = xe.NODE_ENV !== "production" ? zr("useShadowRoot") : zr();
  return e && e.shadowRoot;
}
function Ag(e = "$style") {
  {
    const t = it();
    if (!t)
      return xe.NODE_ENV !== "production" && Ie("useCssModule must be called inside setup()"), pe;
    const n = t.type.__cssModules;
    if (!n)
      return xe.NODE_ENV !== "production" && Ie("Current instance does not have CSS modules injected."), pe;
    const s = n[e];
    return s || (xe.NODE_ENV !== "production" && Ie(`Current instance does not have CSS module named "${e}".`), pe);
  }
}
const $d = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap(), vi = Symbol("_moveCb"), Qa = Symbol("_enterCb"), Ig = (e) => (delete e.props.mode, e), Mg = /* @__PURE__ */ Ig({
  name: "TransitionGroup",
  props: /* @__PURE__ */ de({}, Sd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = it(), s = vl();
    let o, i;
    return Hi(() => {
      if (!o.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!Bg(
        o[0].el,
        n.vnode.el,
        r
      )) {
        o = [];
        return;
      }
      o.forEach(Rg), o.forEach(Lg);
      const l = o.filter(Fg);
      Ur(), l.forEach((a) => {
        const c = a.el, d = c.style;
        Yt(c, r), d.transform = d.webkitTransform = d.transitionDuration = "";
        const u = c[vi] = (h) => {
          h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", u), c[vi] = null, wn(c, r));
        };
        c.addEventListener("transitionend", u);
      }), o = [];
    }), () => {
      const r = ce(e), l = kd(r);
      let a = r.tag || ae;
      if (o = [], i)
        for (let c = 0; c < i.length; c++) {
          const d = i[c];
          d.el && d.el instanceof Element && (o.push(d), vn(
            d,
            ks(
              d,
              l,
              s,
              n
            )
          ), $d.set(
            d,
            d.el.getBoundingClientRect()
          ));
        }
      i = t.default ? Bi(t.default()) : [];
      for (let c = 0; c < i.length; c++) {
        const d = i[c];
        d.key != null ? vn(
          d,
          ks(d, l, s, n)
        ) : xe.NODE_ENV !== "production" && d.type !== sn && Ie("<TransitionGroup> children must be keyed.");
      }
      return fe(a, null, i);
    };
  }
}), Pg = Mg;
function Rg(e) {
  const t = e.el;
  t[vi] && t[vi](), t[Qa] && t[Qa]();
}
function Lg(e) {
  Dd.set(e, e.el.getBoundingClientRect());
}
function Fg(e) {
  const t = $d.get(e), n = Dd.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${s}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function Bg(e, t, n) {
  const s = e.cloneNode(), o = e[$s];
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
  return G(t) ? (n) => On(t, n) : t;
};
function jg(e) {
  e.target.composing = !0;
}
function Za(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Vt = Symbol("_assign"), Rn = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Vt] = Pn(o);
    const i = s || o.props && o.props.type === "number";
    pn(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = ei(l)), e[Vt](l);
    }), n && pn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (pn(e, "compositionstart", jg), pn(e, "compositionend", Za), pn(e, "change", Za));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (e[Vt] = Pn(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ei(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Zt = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Vt] = Pn(n), pn(e, "change", () => {
      const s = e._modelValue, o = Ds(e), i = e.checked, r = e[Vt];
      if (G(s)) {
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
  mounted: ec,
  beforeUpdate(e, t, n) {
    e[Vt] = Pn(n), ec(e, t, n);
  }
};
function ec(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (G(t))
    o = Di(t, s.props.value) > -1;
  else if (ls(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Mn(t, Vd(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Al = {
  created(e, { value: t }, n) {
    e.checked = Mn(t, n.props.value), e[Vt] = Pn(n), pn(e, "change", () => {
      e[Vt](Ds(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Vt] = Pn(s), t !== n && (e.checked = Mn(t, s.props.value));
  }
}, Yi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = ls(t);
    pn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => n ? ei(Ds(r)) : Ds(r)
      );
      e[Vt](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, Ls(() => {
        e._assigning = !1;
      });
    }), e[Vt] = Pn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    tc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Vt] = Pn(n);
  },
  updated(e, { value: t }) {
    e._assigning || tc(e, t);
  }
};
function tc(e, t) {
  const n = e.multiple, s = G(t);
  if (n && !s && !ls(t)) {
    xe.NODE_ENV !== "production" && Ie(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, i = e.options.length; o < i; o++) {
    const r = e.options[o], l = Ds(r);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? r.selected = t.some((c) => String(c) === String(l)) : r.selected = Di(t, l) > -1;
      } else
        r.selected = t.has(l);
    else if (Mn(Ds(r), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Ds(e) {
  return "_value" in e ? e._value : e.value;
}
function Vd(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Ad = {
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
function Id(e, t) {
  switch (e) {
    case "SELECT":
      return Yi;
    case "TEXTAREA":
      return Rn;
    default:
      switch (t) {
        case "checkbox":
          return Zt;
        case "radio":
          return Al;
        default:
          return Rn;
      }
  }
}
function Fo(e, t, n, s, o) {
  const r = Id(
    e.tagName,
    n.props && n.props.type
  )[o];
  r && r(e, t, n, s);
}
function Hg() {
  Rn.getSSRProps = ({ value: e }) => ({ value: e }), Al.getSSRProps = ({ value: e }, t) => {
    if (t.props && Mn(t.props.value, e))
      return { checked: !0 };
  }, Zt.getSSRProps = ({ value: e }, t) => {
    if (G(e)) {
      if (t.props && Di(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (ls(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Ad.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Id(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Ug = ["ctrl", "shift", "alt", "meta"], qg = {
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
  exact: (e, t) => Ug.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ut = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = qg[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, zg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, yi = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = et(o.key);
    if (t.some(
      (r) => r === i || zg[r] === i
    ))
      return e(o);
  });
}, Md = /* @__PURE__ */ de({ patchProp: Og }, ug);
let ro, nc = !1;
function Pd() {
  return ro || (ro = Wu(Md));
}
function Rd() {
  return ro = nc ? ro : Gu(Md), nc = !0, ro;
}
const Ld = (...e) => {
  Pd().render(...e);
}, Kg = (...e) => {
  Rd().hydrate(...e);
}, Es = (...e) => {
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
    value: (t) => Vc(t) || Ac(t) || Ic(t),
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
        Ie(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ie(s), n;
      },
      set() {
        Ie(s);
      }
    });
  }
}
function Ud(e) {
  if (re(e)) {
    const t = document.querySelector(e);
    return xe.NODE_ENV !== "production" && !t && Ie(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return xe.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ie(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let sc = !1;
const Wg = () => {
  sc || (sc = !0, Hg(), mg());
}, Gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: wu,
  BaseTransitionPropsValidators: yl,
  Comment: $e,
  DeprecationTypes: lg,
  EffectScope: ll,
  ErrorCodes: Xp,
  ErrorTypeStrings: eg,
  Fragment: ae,
  KeepAlive: Mh,
  ReactiveEffect: ao,
  Static: An,
  Suspense: Lm,
  Teleport: Fn,
  Text: sn,
  TrackOpTypes: Up,
  Transition: xt,
  TransitionGroup: Pg,
  TriggerOpTypes: qp,
  VueElement: Gi,
  assertNumber: pl,
  callWithAsyncErrorHandling: It,
  callWithErrorHandling: as,
  camelize: Se,
  capitalize: on,
  cloneVNode: Mt,
  compatUtils: rg,
  computed: ee,
  createApp: Es,
  createBlock: ft,
  createCommentVNode: H,
  createElementBlock: T,
  createElementVNode: f,
  createHydrationRenderer: Gu,
  createPropsRestProxy: sm,
  createRenderer: Wu,
  createSSRApp: Fd,
  createSlots: Bh,
  createStaticVNode: Cs,
  createTextVNode: Be,
  createVNode: fe,
  customRef: iu,
  defineAsyncComponent: Ah,
  defineComponent: bl,
  defineCustomElement: Le,
  defineEmits: Wh,
  defineExpose: Gh,
  defineModel: Xh,
  defineOptions: Yh,
  defineProps: Kh,
  defineSSRCustomElement: $g,
  defineSlots: Jh,
  devtools: tg,
  effect: fp,
  effectScope: up,
  getCurrentInstance: it,
  getCurrentScope: al,
  getCurrentWatcher: zp,
  getTransitionRawChildren: Bi,
  guardReactiveProps: dd,
  h: Xt,
  handleError: Ln,
  hasInjectionContext: pm,
  hydrate: Kg,
  hydrateOnIdle: Ch,
  hydrateOnInteraction: Dh,
  hydrateOnMediaQuery: $h,
  hydrateOnVisible: Th,
  initCustomFormatter: Ed,
  initDirectivesForSSR: Wg,
  inject: no,
  isMemoSame: wd,
  isProxy: xs,
  isReactive: hn,
  isReadonly: Wt,
  isRef: Ae,
  isRuntimeOnly: Dl,
  isShallow: nt,
  isVNode: rn,
  markRaw: nu,
  mergeDefaults: tm,
  mergeModels: nm,
  mergeProps: pd,
  nextTick: Ls,
  normalizeClass: Ve,
  normalizeProps: Xf,
  normalizeStyle: dt,
  onActivated: Cu,
  onBeforeMount: $u,
  onBeforeUnmount: Ui,
  onBeforeUpdate: El,
  onDeactivated: Ou,
  onErrorCaptured: Iu,
  onMounted: ze,
  onRenderTracked: Au,
  onRenderTriggered: Vu,
  onScopeDispose: Fc,
  onServerPrefetch: Du,
  onUnmounted: kt,
  onUpdated: Hi,
  onWatcherCleanup: lu,
  openBlock: k,
  popScopeId: ph,
  provide: Lu,
  proxyRefs: fl,
  pushScopeId: fh,
  queuePostFlushCb: Ss,
  reactive: Ns,
  readonly: Mi,
  ref: U,
  registerRuntimeCompiler: vd,
  render: Ld,
  renderList: Oe,
  renderSlot: Bn,
  resolveComponent: Lh,
  resolveDirective: Fh,
  resolveDynamicComponent: Nl,
  resolveFilter: ig,
  resolveTransitionHooks: ks,
  setBlockTracking: Ir,
  setDevtoolsHook: ng,
  setTransitionHooks: vn,
  shallowReactive: tu,
  shallowReadonly: Ft,
  shallowRef: su,
  ssrContextKey: Qu,
  ssrUtils: og,
  stop: pp,
  toDisplayString: W,
  toHandlerKey: en,
  toHandlers: jh,
  toRaw: ce,
  toRef: Bp,
  toRefs: Rp,
  toValue: Ip,
  transformVNodeArgs: qm,
  triggerRef: Ap,
  unref: xo,
  useAttrs: em,
  useCssModule: Ag,
  useCssVars: gg,
  useHost: zr,
  useId: vh,
  useModel: Vm,
  useSSRContext: Zu,
  useShadowRoot: Vg,
  useSlots: Zh,
  useTemplateRef: yh,
  useTransitionState: vl,
  vModelCheckbox: Zt,
  vModelDynamic: Ad,
  vModelRadio: Al,
  vModelSelect: Yi,
  vModelText: Rn,
  vShow: Vl,
  version: jr,
  warn: Ie,
  watch: nn,
  watchEffect: Tm,
  watchPostEffect: $m,
  watchSyncEffect: ed,
  withAsyncContext: om,
  withCtx: Fe,
  withDefaults: Qh,
  withDirectives: yt,
  withKeys: yi,
  withMemo: Zm,
  withModifiers: Ut,
  withScopeId: hh
}, Symbol.toStringTag, { value: "Module" }));
var Y = {};
const go = Symbol(Y.NODE_ENV !== "production" ? "Fragment" : ""), lo = Symbol(Y.NODE_ENV !== "production" ? "Teleport" : ""), Il = Symbol(Y.NODE_ENV !== "production" ? "Suspense" : ""), bi = Symbol(Y.NODE_ENV !== "production" ? "KeepAlive" : ""), qd = Symbol(
  Y.NODE_ENV !== "production" ? "BaseTransition" : ""
), rs = Symbol(Y.NODE_ENV !== "production" ? "openBlock" : ""), zd = Symbol(Y.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  Y.NODE_ENV !== "production" ? "createElementBlock" : ""
), Ml = Symbol(Y.NODE_ENV !== "production" ? "createVNode" : ""), Pl = Symbol(
  Y.NODE_ENV !== "production" ? "createElementVNode" : ""
), Oo = Symbol(
  Y.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Rl = Symbol(
  Y.NODE_ENV !== "production" ? "createTextVNode" : ""
), Wd = Symbol(
  Y.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Ll = Symbol(
  Y.NODE_ENV !== "production" ? "resolveComponent" : ""
), Fl = Symbol(
  Y.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Bl = Symbol(
  Y.NODE_ENV !== "production" ? "resolveDirective" : ""
), jl = Symbol(
  Y.NODE_ENV !== "production" ? "resolveFilter" : ""
), Hl = Symbol(
  Y.NODE_ENV !== "production" ? "withDirectives" : ""
), Ul = Symbol(Y.NODE_ENV !== "production" ? "renderList" : ""), Gd = Symbol(Y.NODE_ENV !== "production" ? "renderSlot" : ""), Yd = Symbol(Y.NODE_ENV !== "production" ? "createSlots" : ""), Ji = Symbol(
  Y.NODE_ENV !== "production" ? "toDisplayString" : ""
), _i = Symbol(Y.NODE_ENV !== "production" ? "mergeProps" : ""), ql = Symbol(
  Y.NODE_ENV !== "production" ? "normalizeClass" : ""
), zl = Symbol(
  Y.NODE_ENV !== "production" ? "normalizeStyle" : ""
), vo = Symbol(
  Y.NODE_ENV !== "production" ? "normalizeProps" : ""
), To = Symbol(
  Y.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Kl = Symbol(Y.NODE_ENV !== "production" ? "toHandlers" : ""), Kr = Symbol(Y.NODE_ENV !== "production" ? "camelize" : ""), Yg = Symbol(Y.NODE_ENV !== "production" ? "capitalize" : ""), Wr = Symbol(
  Y.NODE_ENV !== "production" ? "toHandlerKey" : ""
), Ei = Symbol(
  Y.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Jg = Symbol(Y.NODE_ENV !== "production" ? "pushScopeId" : ""), Xg = Symbol(Y.NODE_ENV !== "production" ? "popScopeId" : ""), Wl = Symbol(Y.NODE_ENV !== "production" ? "withCtx" : ""), Qg = Symbol(Y.NODE_ENV !== "production" ? "unref" : ""), Zg = Symbol(Y.NODE_ENV !== "production" ? "isRef" : ""), Gl = Symbol(Y.NODE_ENV !== "production" ? "withMemo" : ""), Jd = Symbol(Y.NODE_ENV !== "production" ? "isMemoSame" : ""), Vs = {
  [go]: "Fragment",
  [lo]: "Teleport",
  [Il]: "Suspense",
  [bi]: "KeepAlive",
  [qd]: "BaseTransition",
  [rs]: "openBlock",
  [zd]: "createBlock",
  [Kd]: "createElementBlock",
  [Ml]: "createVNode",
  [Pl]: "createElementVNode",
  [Oo]: "createCommentVNode",
  [Rl]: "createTextVNode",
  [Wd]: "createStaticVNode",
  [Ll]: "resolveComponent",
  [Fl]: "resolveDynamicComponent",
  [Bl]: "resolveDirective",
  [jl]: "resolveFilter",
  [Hl]: "withDirectives",
  [Ul]: "renderList",
  [Gd]: "renderSlot",
  [Yd]: "createSlots",
  [Ji]: "toDisplayString",
  [_i]: "mergeProps",
  [ql]: "normalizeClass",
  [zl]: "normalizeStyle",
  [vo]: "normalizeProps",
  [To]: "guardReactiveProps",
  [Kl]: "toHandlers",
  [Kr]: "camelize",
  [Yg]: "capitalize",
  [Wr]: "toHandlerKey",
  [Ei]: "setBlockTracking",
  [Jg]: "pushScopeId",
  [Xg]: "popScopeId",
  [Wl]: "withCtx",
  [Qg]: "unref",
  [Zg]: "isRef",
  [Gl]: "withMemo",
  [Jd]: "isMemoSame"
};
function e0(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Vs[t] = e[t];
  });
}
const Ct = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function t0(e, t = "") {
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
    loc: Ct
  };
}
function yo(e, t, n, s, o, i, r, l = !1, a = !1, c = !1, d = Ct) {
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
function ts(e, t = Ct) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Dt(e, t = Ct) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Me(e, t) {
  return {
    type: 16,
    loc: Ct,
    key: re(e) ? ue(e, !0) : e,
    value: t
  };
}
function ue(e, t = !1, n = Ct, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function qt(e, t = Ct) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Ue(e, t = [], n = Ct) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function As(e, t = void 0, n = !1, s = !1, o = Ct) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: o
  };
}
function Gr(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: Ct
  };
}
function n0(e, t, n = !1, s = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: s,
    needArraySpread: !1,
    loc: Ct
  };
}
function s0(e) {
  return {
    type: 21,
    body: e,
    loc: Ct
  };
}
function Is(e, t) {
  return e || t ? Ml : Pl;
}
function Ms(e, t) {
  return e || t ? zd : Kd;
}
function Yl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Is(s, e.isComponent)), t(rs), t(Ms(s, e.isComponent)));
}
const oc = new Uint8Array([123, 123]), ic = new Uint8Array([125, 125]);
function rc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Nt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function En(e) {
  return e === 47 || e === 62 || Nt(e);
}
function wi(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const We = {
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
class o0 {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = oc, this.delimiterClose = ic, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = oc, this.delimiterClose = ic;
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
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === We.TitleEnd || this.currentSequence === We.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === We.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === We.Cdata.length && (this.state = 28, this.currentSequence = We.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
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
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === We.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : rc(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    En(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (En(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(wi("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Nt(t) || (t === 62 ? (Y.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = rc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || Nt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, Y.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Nt(t) || (Y.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
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
    t === 61 || En(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : Y.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
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
    t === 93 ? this.state = 14 : (t === 61 || En(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), Y.NODE_ENV !== "production" && this.cbs.onerr(
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
    Nt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (Y.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
    t === 45 ? (this.state = 28, this.currentSequence = We.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === We.ScriptEnd[3] ? this.startSpecial(We.ScriptEnd, 4) : t === We.StyleEnd[3] ? this.startSpecial(We.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === We.TitleEnd[3] ? this.startSpecial(We.TitleEnd, 4) : t === We.TextareaEnd[3] ? this.startSpecial(We.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
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
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === We.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const i0 = {
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
function Yr(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function In(e, t) {
  const n = Yr("MODE", t), s = Yr(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Ps(e, t, n, ...s) {
  const o = In(e, t);
  return Y.NODE_ENV !== "production" && o && Ni(e, t, n, ...s), o;
}
function Ni(e, t, n, ...s) {
  if (Yr(e, t) === "suppress-warning")
    return;
  const { message: i, link: r } = i0[e], l = `(deprecation ${e}) ${typeof i == "function" ? i(...s) : i}${r ? `
  Details: ${r}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Jl(e) {
  throw e;
}
function Xd(e) {
  Y.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Ne(e, t, n, s) {
  const o = Y.NODE_ENV !== "production" ? (n || r0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, i = new SyntaxError(String(o));
  return i.code = e, i.loc = t, i;
}
const r0 = {
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
}, _t = (e) => e.type === 4 && e.isStatic;
function Qd(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return lo;
    case "Suspense":
    case "suspense":
      return Il;
    case "KeepAlive":
    case "keep-alive":
      return bi;
    case "BaseTransition":
    case "base-transition":
      return qd;
  }
}
const l0 = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Xl = (e) => !l0.test(e), a0 = /[A-Za-z_$\xA0-\uFFFF]/, c0 = /[\.\?\w$\xA0-\uFFFF]/, u0 = /\s+[.[]\s*|\s*[.[]\s+/g, Zd = (e) => e.type === 4 ? e.content : e.loc.source, d0 = (e) => {
  const t = Zd(e).trim().replace(u0, (l) => l.trim());
  let n = 0, s = [], o = 0, i = 0, r = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, i++;
        else if (!(l === 0 ? a0 : c0).test(a))
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
}, ef = d0, f0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, p0 = (e) => f0.test(Zd(e)), h0 = p0;
function lc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function bt(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 7 && (n || o.exp) && (re(t) ? o.name === t : t.test(o.name)))
      return o;
  }
}
function bo(e, t, n = !1, s = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const i = e.props[o];
    if (i.type === 6) {
      if (n) continue;
      if (i.name === t && (i.value || s))
        return i;
    } else if (i.name === "bind" && (i.exp || s) && $n(i.arg, t))
      return i;
  }
}
function $n(e, t) {
  return !!(e && _t(e) && e.content === t);
}
function m0(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function vr(e) {
  return e.type === 5 || e.type === 2;
}
function ac(e) {
  return e.type === 7 && e.name === "pre";
}
function g0(e) {
  return e.type === 7 && e.name === "slot";
}
function xi(e) {
  return e.type === 1 && e.tagType === 3;
}
function Si(e) {
  return e.type === 1 && e.tagType === 2;
}
const v0 = /* @__PURE__ */ new Set([vo, To]);
function tf(e, t = []) {
  if (e && !re(e) && e.type === 14) {
    const n = e.callee;
    if (!re(n) && v0.has(n))
      return tf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function ki(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], i = [], r;
  if (o && !re(o) && o.type === 14) {
    const l = tf(o);
    o = l[0], i = l[1], r = i[i.length - 1];
  }
  if (o == null || re(o))
    s = Dt([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !re(l) && l.type === 15 ? cc(t, l) || l.properties.unshift(t) : o.callee === Kl ? s = Ue(n.helper(_i), [
      Dt([t]),
      o
    ]) : o.arguments.unshift(Dt([t])), !s && (s = o);
  } else o.type === 15 ? (cc(t, o) || o.properties.unshift(t), s = o) : (s = Ue(n.helper(_i), [
    Dt([t]),
    o
  ]), r && r.callee === To && (r = i[i.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = s : e.props = s : r ? r.arguments[0] = s : e.arguments[2] = s;
}
function cc(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (o) => o.key.type === 4 && o.key.content === s
    );
  }
  return n;
}
function _o(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function y0(e) {
  return e.type === 14 && e.callee === Gl ? e.arguments[1].returns : e;
}
const b0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, nf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Ks,
  isPreTag: Ks,
  isIgnoreNewlineTag: Ks,
  isCustomElement: Ks,
  onError: Jl,
  onWarn: Xd,
  comments: Y.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ve = nf, Eo = null, mn = "", Ze = null, he = null, gt = "", un = -1, qn = -1, Ql = 0, Cn = !1, Jr = null;
const De = [], Ce = new o0(De, {
  onerr: mt,
  ontext(e, t) {
    Bo(Ge(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Bo(e, t, n);
  },
  oninterpolation(e, t) {
    if (Cn)
      return Bo(Ge(e, t), e, t);
    let n = e + Ce.delimiterOpen.length, s = t - Ce.delimiterClose.length;
    for (; Nt(mn.charCodeAt(n)); )
      n++;
    for (; Nt(mn.charCodeAt(s - 1)); )
      s--;
    let o = Ge(n, s);
    o.includes("&") && (o = ve.decodeEntities(o, !1)), Xr({
      type: 5,
      content: Jo(o, !1, Pe(n, s)),
      loc: Pe(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Ge(e, t);
    Ze = {
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
    dc(e);
  },
  onclosetag(e, t) {
    const n = Ge(e, t);
    if (!ve.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < De.length; o++)
        if (De[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && mt(24, De[0].loc.start.offset);
          for (let r = 0; r <= o; r++) {
            const l = De.shift();
            Yo(l, t, r < o);
          }
          break;
        }
      s || mt(23, sf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Ze.tag;
    Ze.isSelfClosing = !0, dc(e), De[0] && De[0].tag === t && Yo(De.shift(), e);
  },
  onattribname(e, t) {
    he = {
      type: 6,
      name: Ge(e, t),
      nameLoc: Pe(e, t),
      value: void 0,
      loc: Pe(e)
    };
  },
  ondirname(e, t) {
    const n = Ge(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!Cn && s === "" && mt(26, e), Cn || s === "")
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
      Cn = Ce.inVPre = !0, Jr = Ze;
      const o = Ze.props;
      for (let i = 0; i < o.length; i++)
        o[i].type === 7 && (o[i] = $0(o[i]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Ge(e, t);
    if (Cn && !ac(he))
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
    const n = Ge(e, t);
    if (Cn && !ac(he))
      he.name += "." + n, Wn(he.nameLoc, t);
    else if (he.name === "slot") {
      const s = he.arg;
      s && (s.content += "." + n, Wn(s.loc, t));
    } else {
      const s = ue(n, !0, Pe(e, t));
      he.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    gt += Ge(e, t), un < 0 && (un = e), qn = t;
  },
  onattribentity(e, t, n) {
    gt += e, un < 0 && (un = t), qn = n;
  },
  onattribnameend(e) {
    const t = he.loc.start.offset, n = Ge(t, e);
    he.type === 7 && (he.rawName = n), Ze.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && mt(2, t);
  },
  onattribend(e, t) {
    if (Ze && he) {
      if (Wn(he.loc, t), e !== 0)
        if (gt.includes("&") && (gt = ve.decodeEntities(
          gt,
          !0
        )), he.type === 6)
          he.name === "class" && (gt = rf(gt).trim()), e === 1 && !gt && mt(13, t), he.value = {
            type: 2,
            content: gt,
            loc: e === 1 ? Pe(un, qn) : Pe(un - 1, qn + 1)
          }, Ce.inSFCRoot && Ze.tag === "template" && he.name === "lang" && gt && gt !== "html" && Ce.enterRCDATA(wi("</template"), 0);
        else {
          let n = 0;
          he.exp = Jo(
            gt,
            !1,
            Pe(un, qn),
            0,
            n
          ), he.name === "for" && (he.forParseResult = E0(he.exp));
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
      (he.type !== 7 || he.name !== "pre") && Ze.props.push(he);
    }
    gt = "", un = qn = -1;
  },
  oncomment(e, t) {
    ve.comments && Xr({
      type: 3,
      content: Ge(e, t),
      loc: Pe(e - 4, t + 3)
    });
  },
  onend() {
    const e = mn.length;
    if (Y.NODE_ENV !== "production" && Ce.state !== 1)
      switch (Ce.state) {
        case 5:
        case 8:
          mt(5, e);
          break;
        case 3:
        case 4:
          mt(
            25,
            Ce.sectionStart
          );
          break;
        case 28:
          Ce.currentSequence === We.CdataEnd ? mt(6, e) : mt(7, e);
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
          mt(9, e);
          break;
      }
    for (let t = 0; t < De.length; t++)
      Yo(De[t], e - 1), mt(24, De[t].loc.start.offset);
  },
  oncdata(e, t) {
    De[0].ns !== 0 ? Bo(Ge(e, t), e, t) : mt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (De[0] ? De[0].ns : ve.ns) === 0 && mt(
      21,
      e - 1
    );
  }
}), uc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, _0 = /^\(|\)$/g;
function E0(e) {
  const t = e.loc, n = e.content, s = n.match(b0);
  if (!s) return;
  const [, o, i] = s, r = (u, h, m = !1) => {
    const v = t.start.offset + h, g = v + u.length;
    return Jo(
      u,
      !1,
      Pe(v, g),
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
  let a = o.trim().replace(_0, "").trim();
  const c = o.indexOf(a), d = a.match(uc);
  if (d) {
    a = a.replace(uc, "").trim();
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
function Ge(e, t) {
  return mn.slice(e, t);
}
function dc(e) {
  Ce.inSFCRoot && (Ze.innerLoc = Pe(e + 1, e + 1)), Xr(Ze);
  const { tag: t, ns: n } = Ze;
  n === 0 && ve.isPreTag(t) && Ql++, ve.isVoidTag(t) ? Yo(Ze, e) : (De.unshift(Ze), (n === 1 || n === 2) && (Ce.inXML = !0)), Ze = null;
}
function Bo(e, t, n) {
  {
    const i = De[0] && De[0].tag;
    i !== "script" && i !== "style" && e.includes("&") && (e = ve.decodeEntities(e, !1));
  }
  const s = De[0] || Eo, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Wn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Pe(t, n)
  });
}
function Yo(e, t, n = !1) {
  n ? Wn(e.loc, sf(t, 60)) : Wn(e.loc, w0(t, 62) + 1), Ce.inSFCRoot && (e.children.length ? e.innerLoc.end = de({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = de({}, e.innerLoc.start), e.innerLoc.source = Ge(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: i } = e;
  if (Cn || (s === "slot" ? e.tagType = 2 : fc(e) ? e.tagType = 3 : x0(e) && (e.tagType = 1)), Ce.inRCDATA || (e.children = of(i)), o === 0 && ve.isIgnoreNewlineTag(s)) {
    const r = i[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ve.isPreTag(s) && Ql--, Jr === e && (Cn = Ce.inVPre = !1, Jr = null), Ce.inXML && (De[0] ? De[0].ns : ve.ns) === 0 && (Ce.inXML = !1);
  {
    const r = e.props;
    if (Y.NODE_ENV !== "production" && In(
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
    if (!Ce.inSFCRoot && In(
      "COMPILER_NATIVE_TEMPLATE",
      ve
    ) && e.tag === "template" && !fc(e)) {
      Y.NODE_ENV !== "production" && Ni(
        "COMPILER_NATIVE_TEMPLATE",
        ve,
        e.loc
      );
      const a = De[0] || Eo, c = a.children.indexOf(e);
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
      content: Ge(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function w0(e, t) {
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
function fc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && N0.has(t[n].name))
        return !0;
  }
  return !1;
}
function x0({ tag: e, props: t }) {
  if (ve.isCustomElement(e))
    return !1;
  if (e === "component" || S0(e.charCodeAt(0)) || Qd(e) || ve.isBuiltInComponent && ve.isBuiltInComponent(e) || ve.isNativeTag && !ve.isNativeTag(e))
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
      s.name === "bind" && $n(s.arg, "is") && Ps(
        "COMPILER_IS_ON_ELEMENT",
        ve,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function S0(e) {
  return e > 64 && e < 91;
}
const k0 = /\r\n/g;
function of(e) {
  const t = ve.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (Ql)
        o.content = o.content.replace(k0, `
`);
      else if (C0(o.content)) {
        const i = e[s - 1] && e[s - 1].type, r = e[s + 1] && e[s + 1].type;
        !i || !r || t && (i === 3 && (r === 3 || r === 1) || i === 1 && (r === 3 || r === 1 && O0(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = rf(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function C0(e) {
  for (let t = 0; t < e.length; t++)
    if (!Nt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function O0(e) {
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
function Xr(e) {
  (De[0] || Eo).children.push(e);
}
function Pe(e, t) {
  return {
    start: Ce.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : Ce.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Ge(e, t)
  };
}
function T0(e) {
  return Pe(e.start.offset, e.end.offset);
}
function Wn(e, t) {
  e.end = Ce.getPos(t), e.source = Ge(e.start.offset, t);
}
function $0(e) {
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
function mt(e, t, n) {
  ve.onError(
    Ne(e, Pe(t, t), void 0, n)
  );
}
function D0() {
  Ce.reset(), Ze = null, he = null, gt = "", un = -1, qn = -1, De.length = 0;
}
function V0(e, t) {
  if (D0(), mn = e, ve = de({}, nf), t) {
    let o;
    for (o in t)
      t[o] != null && (ve[o] = t[o]);
  }
  if (Y.NODE_ENV !== "production" && !ve.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  Ce.mode = ve.parseMode === "html" ? 1 : ve.parseMode === "sfc" ? 2 : 0, Ce.inXML = ve.ns === 1 || ve.ns === 2;
  const n = t && t.delimiters;
  n && (Ce.delimiterOpen = wi(n[0]), Ce.delimiterClose = wi(n[1]));
  const s = Eo = t0([], e);
  return Ce.parse(mn), s.loc = Pe(0, e.length), s.children = of(s.children), Eo = null, s;
}
function A0(e, t) {
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
  return t.length === 1 && t[0].type === 1 && !Si(t[0]) ? t[0] : null;
}
function Xo(e, t, n, s = !1, o = !1) {
  const { children: i } = e, r = [];
  for (let u = 0; u < i.length; u++) {
    const h = i[u];
    if (h.type === 1 && h.tagType === 0) {
      const m = s ? 0 : St(h, n);
      if (m > 0) {
        if (m >= 2) {
          h.codegenNode.patchFlag = -1, r.push(h);
          continue;
        }
      } else {
        const v = h.codegenNode;
        if (v.type === 13) {
          const g = v.patchFlag;
          if ((g === void 0 || g === 512 || g === 1) && cf(h, n) >= 2) {
            const $ = uf(h);
            $ && (v.props = n.hoist($));
          }
          v.dynamicProps && (v.dynamicProps = n.hoist(v.dynamicProps));
        }
      }
    } else if (h.type === 12 && (s ? 0 : St(h, n)) >= 2) {
      h.codegenNode.type === 14 && h.codegenNode.arguments.length > 0 && h.codegenNode.arguments.push(
        -1 + (Y.NODE_ENV !== "production" ? ` /* ${Qs[-1]} */` : "")
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
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && G(e.codegenNode.children))
      e.codegenNode.children = c(
        ts(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !G(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = d(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = c(
        ts(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !G(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = bt(e, "slot", !0), h = u && u.arg && d(t.codegenNode, u.arg);
      h && (a.push(n.cached.length), h.returns = c(
        ts(h.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const u of r)
      a.push(n.cached.length), u.codegenNode = n.cache(u.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !G(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
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
    if (u.children && !G(u.children) && u.children.type === 15) {
      const m = u.children.properties.find(
        (v) => v.key === h || v.key.content === h
      );
      return m && m.value;
    }
  }
  r.length && n.transformHoist && n.transformHoist(i, n, e);
}
function St(e, t) {
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
          const c = St(e.children[a], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < r && (r = c);
        }
        if (r > 1)
          for (let a = 0; a < e.props.length; a++) {
            const c = e.props[a];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const d = St(c.exp, t);
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
      return St(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let i = 3;
      for (let r = 0; r < e.children.length; r++) {
        const l = e.children[r];
        if (re(l) || Et(l))
          continue;
        const a = St(l, t);
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
const I0 = /* @__PURE__ */ new Set([
  ql,
  zl,
  vo,
  To
]);
function af(e, t) {
  if (e.type === 14 && !re(e.callee) && I0.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return St(n, t);
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
      const { key: r, value: l } = o[i], a = St(r, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let c;
      if (l.type === 4 ? c = St(l, t) : l.type === 14 ? c = af(l, t) : c = 0, c === 0)
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
function M0(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: i = !1,
  nodeTransforms: r = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: c = Te,
  isCustomElement: d = Te,
  expressionPlugins: u = [],
  scopeId: h = null,
  slotted: m = !0,
  ssr: v = !1,
  inSSR: g = !1,
  ssrCssVars: $ = "",
  bindingMetadata: S = pe,
  inline: b = !1,
  isTS: p = !1,
  onError: w = Jl,
  onWarn: E = Xd,
  compatConfig: D
}) {
  const M = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), x = {
    // options
    filename: t,
    selfName: M && on(Se(M[1])),
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
    ssr: v,
    inSSR: g,
    ssrCssVars: $,
    bindingMetadata: S,
    inline: b,
    isTS: p,
    onError: w,
    onWarn: E,
    compatConfig: D,
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
    helper(y) {
      const O = x.helpers.get(y) || 0;
      return x.helpers.set(y, O + 1), y;
    },
    removeHelper(y) {
      const O = x.helpers.get(y);
      if (O) {
        const A = O - 1;
        A ? x.helpers.set(y, A) : x.helpers.delete(y);
      }
    },
    helperString(y) {
      return `_${Vs[x.helper(y)]}`;
    },
    replaceNode(y) {
      if (Y.NODE_ENV !== "production") {
        if (!x.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!x.parent)
          throw new Error("Cannot replace root node.");
      }
      x.parent.children[x.childIndex] = x.currentNode = y;
    },
    removeNode(y) {
      if (Y.NODE_ENV !== "production" && !x.parent)
        throw new Error("Cannot remove root node.");
      const O = x.parent.children, A = y ? O.indexOf(y) : x.currentNode ? x.childIndex : -1;
      if (Y.NODE_ENV !== "production" && A < 0)
        throw new Error("node being removed is not a child of current parent");
      !y || y === x.currentNode ? (x.currentNode = null, x.onNodeRemoved()) : x.childIndex > A && (x.childIndex--, x.onNodeRemoved()), x.parent.children.splice(A, 1);
    },
    onNodeRemoved: Te,
    addIdentifiers(y) {
    },
    removeIdentifiers(y) {
    },
    hoist(y) {
      re(y) && (y = ue(y)), x.hoists.push(y);
      const O = ue(
        `_hoisted_${x.hoists.length}`,
        !1,
        y.loc,
        2
      );
      return O.hoisted = y, O;
    },
    cache(y, O = !1, A = !1) {
      const V = n0(
        x.cached.length,
        y,
        O,
        A
      );
      return x.cached.push(V), V;
    }
  };
  return x.filters = /* @__PURE__ */ new Set(), x;
}
function P0(e, t) {
  const n = M0(e, t);
  Xi(e, n), t.hoistStatic && A0(e, n), t.ssr || R0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function R0(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const o = lf(e);
    if (o && o.codegenNode) {
      const i = o.codegenNode;
      i.type === 13 && Yl(i, t), e.codegenNode = i;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let o = 64;
    Y.NODE_ENV !== "production" && s.filter((i) => i.type !== 3).length === 1 && (o |= 2048), e.codegenNode = yo(
      t,
      n(go),
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
function L0(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const o = e.children[n];
    re(o) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Xi(o, t));
  }
}
function Xi(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let i = 0; i < n.length; i++) {
    const r = n[i](e, t);
    if (r && (G(r) ? s.push(...r) : s.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Oo);
      break;
    case 5:
      t.ssr || t.helper(Ji);
      break;
    case 9:
      for (let i = 0; i < e.branches.length; i++)
        Xi(e.branches[i], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      L0(e, t);
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
      if (s.tagType === 3 && i.some(g0))
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
const Qi = "/*@__PURE__*/", ff = (e) => `${Vs[e]}: _${Vs[e]}`;
function F0(e, {
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
      return `_${Vs[g]}`;
    },
    push(g, $ = -2, S) {
      m.code += g;
    },
    indent() {
      v(++m.indentLevel);
    },
    deindent(g = !1) {
      g ? --m.indentLevel : v(--m.indentLevel);
    },
    newline() {
      v(m.indentLevel);
    }
  };
  function v(g) {
    m.push(
      `
` + "  ".repeat(g),
      0
      /* Start */
    );
  }
  return m;
}
function B0(e, t = {}) {
  const n = F0(e, t);
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
  j0(e, n);
  const g = d ? "ssrRender" : "render", S = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${g}(${S}) {`), r(), m && (o("with (_ctx) {"), r(), h && (o(
    `const { ${u.map(ff).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (yr(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (yr(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), yr(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let b = 0; b < e.temps; b++)
      o(`${b > 0 ? ", " : ""}_temp${b}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), d || o("return "), e.codegenNode ? st(e.codegenNode, n) : o("null"), m && (l(), o("}")), l(), o("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function j0(e, t) {
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
      Ml,
      Pl,
      Oo,
      Rl,
      Wd
    ].filter((h) => d.includes(h)).map(ff).join(", ");
    o(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  H0(e.hoists, t), i(), o("return ");
}
function yr(e, t, { helper: n, push: s, newline: o, isTS: i }) {
  const r = n(
    t === "filter" ? jl : t === "component" ? Ll : Bl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const c = a.endsWith("__self");
    c && (a = a.slice(0, -6)), s(
      `const ${_o(a, t)} = ${r}(${JSON.stringify(a)}${c ? ", true" : ""})${i ? "!" : ""}`
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
    i && (n(`const _hoisted_${o + 1} = `), st(i, t), s());
  }
  t.pure = !1;
}
function U0(e) {
  return re(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Zl(e, t) {
  const n = e.length > 3 || Y.NODE_ENV !== "production" && e.some((s) => G(s) || !U0(s));
  t.push("["), n && t.indent(), $o(e, t, n), n && t.deindent(), t.push("]");
}
function $o(e, t, n = !1, s = !0) {
  const { push: o, newline: i } = t;
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    re(l) ? o(
      l,
      -3
      /* Unknown */
    ) : G(l) ? Zl(l, t) : st(l, t), r < e.length - 1 && (n ? (s && o(","), i()) : s && o(", "));
  }
}
function st(e, t) {
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
      Y.NODE_ENV !== "production" && lc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), st(e.codegenNode, t);
      break;
    case 2:
      q0(e, t);
      break;
    case 4:
      pf(e, t);
      break;
    case 5:
      z0(e, t);
      break;
    case 12:
      st(e.codegenNode, t);
      break;
    case 8:
      hf(e, t);
      break;
    case 3:
      W0(e, t);
      break;
    case 13:
      G0(e, t);
      break;
    case 14:
      J0(e, t);
      break;
    case 15:
      X0(e, t);
      break;
    case 17:
      Q0(e, t);
      break;
    case 18:
      Z0(e, t);
      break;
    case 19:
      ev(e, t);
      break;
    case 20:
      tv(e, t);
      break;
    case 21:
      $o(e.body, t, !0, !1);
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
      if (Y.NODE_ENV !== "production")
        return lc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function q0(e, t) {
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
function z0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Qi), n(`${s(Ji)}(`), st(e.content, t), n(")");
}
function hf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    re(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : st(s, t);
  }
}
function K0(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), hf(e, t), n("]");
  else if (e.isStatic) {
    const s = Xl(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function W0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Qi), n(
    `${s(Oo)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function G0(e, t) {
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
  let v;
  if (a)
    if (Y.NODE_ENV !== "production")
      if (a < 0)
        v = a + ` /* ${Qs[a]} */`;
      else {
        const $ = Object.keys(Qs).map(Number).filter((S) => S > 0 && a & S).map((S) => Qs[S]).join(", ");
        v = a + ` /* ${$} */`;
      }
    else
      v = String(a);
  d && n(s(Hl) + "("), u && n(`(${s(rs)}(${h ? "true" : ""}), `), o && n(Qi);
  const g = u ? Ms(t.inSSR, m) : Is(t.inSSR, m);
  n(s(g) + "(", -2, e), $o(
    Y0([i, r, l, v, c]),
    t
  ), n(")"), u && n(")"), d && (n(", "), st(d, t), n(")"));
}
function Y0(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function J0(e, t) {
  const { push: n, helper: s, pure: o } = t, i = re(e.callee) ? e.callee : s(e.callee);
  o && n(Qi), n(i + "(", -2, e), $o(e.arguments, t), n(")");
}
function X0(e, t) {
  const { push: n, indent: s, deindent: o, newline: i } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const l = r.length > 1 || Y.NODE_ENV !== "production" && r.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < r.length; a++) {
    const { key: c, value: d } = r[a];
    K0(c, t), n(": "), st(d, t), a < r.length - 1 && (n(","), i());
  }
  l && o(), n(l ? "}" : " }");
}
function Q0(e, t) {
  Zl(e.elements, t);
}
function Z0(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: i, returns: r, body: l, newline: a, isSlot: c } = e;
  c && n(`_${Vs[Wl]}(`), n("(", -2, e), G(i) ? $o(i, t) : i && st(i, t), n(") => "), (a || l) && (n("{"), s()), r ? (a && n("return "), G(r) ? Zl(r, t) : st(r, t)) : l && st(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function ev(e, t) {
  const { test: n, consequent: s, alternate: o, newline: i } = e, { push: r, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const u = !Xl(n.content);
    u && r("("), pf(n, t), u && r(")");
  } else
    r("("), st(n, t), r(")");
  i && l(), t.indentLevel++, i || r(" "), r("? "), st(s, t), t.indentLevel--, i && c(), i || r(" "), r(": ");
  const d = o.type === 19;
  d || t.indentLevel++, st(o, t), d || t.indentLevel--, i && a(
    !0
    /* without newline */
  );
}
function tv(e, t) {
  const { push: n, helper: s, indent: o, deindent: i, newline: r } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(Ei)}(-1`), e.inVOnce && n(", true"), n("),"), r(), n("(")), n(`_cache[${e.index}] = `), st(e.value, t), l && (n(`).cacheIndex = ${e.index},`), r(), n(`${s(Ei)}(1),`), r(), n(`_cache[${e.index}]`), i()), n(")"), a && n(")]");
}
const nv = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), sv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Gn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (i) {
      let r = i.message;
      const l = o.replace(sv, "").match(nv);
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
const ov = (e, t) => {
  if (e.type === 5)
    e.content = br(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = bt(e, "memo");
    for (let s = 0; s < e.props.length; s++) {
      const o = e.props[s];
      if (o.type === 7 && o.name !== "for") {
        const i = o.exp, r = o.arg;
        i && i.type === 4 && !(o.name === "on" && r) && // key has been processed in transformFor(vMemo + vFor)
        !(n && r && r.type === 4 && r.content === "key") && (o.exp = br(
          i,
          t,
          // slot args must be processed as function params
          o.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (o.arg = br(r, t));
      }
    }
  }
};
function br(e, t, n = !1, s = !1, o = Object.create(t.identifiers)) {
  return Y.NODE_ENV !== "production" && Gn(e, t, n, s), e;
}
const iv = df(
  /^(if|else|else-if)$/,
  (e, t, n) => rv(e, t, n, (s, o, i) => {
    const r = n.parent.children;
    let l = r.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const c = r[l];
      c && c.type === 9 && (a += c.branches.length);
    }
    return () => {
      if (i)
        s.codegenNode = hc(
          o,
          a,
          n
        );
      else {
        const c = av(s.codegenNode);
        c.alternate = hc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function rv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      Ne(28, t.loc)
    ), t.exp = ue("true", !1, o);
  }
  if (Y.NODE_ENV !== "production" && t.exp && Gn(t.exp, n), t.name === "if") {
    const o = pc(e, t), i = {
      type: 9,
      loc: T0(e.loc),
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
        n.removeNode(l), Y.NODE_ENV !== "production" && i.unshift(l);
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
        const a = pc(e, t);
        if (Y.NODE_ENV !== "production" && i.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...i, ...a.children]), Y.NODE_ENV !== "production") {
          const d = a.userKey;
          d && l.branches.forEach(({ userKey: u }) => {
            lv(u, d) && n.onError(
              Ne(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const c = s && s(l, a, !1);
        Xi(a, n), c && c(), n.currentNode = null;
      } else
        n.onError(
          Ne(30, e.loc)
        );
      break;
    }
  }
}
function pc(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !bt(e, "for") ? e.children : [e],
    userKey: bo(e, "key"),
    isTemplateIf: n
  };
}
function hc(e, t, n) {
  return e.condition ? Gr(
    e.condition,
    mc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Ue(n.helper(Oo), [
      Y.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : mc(e, t, n);
}
function mc(e, t, n) {
  const { helper: s } = n, o = Me(
    "key",
    ue(
      `${t}`,
      !1,
      Ct,
      2
    )
  ), { children: i } = e, r = i[0];
  if (i.length !== 1 || r.type !== 1)
    if (i.length === 1 && r.type === 11) {
      const a = r.codegenNode;
      return ki(a, o, n), a;
    } else {
      let a = 64;
      return Y.NODE_ENV !== "production" && !e.isTemplateIf && i.filter((c) => c.type !== 3).length === 1 && (a |= 2048), yo(
        n,
        s(go),
        Dt([o]),
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
    const a = r.codegenNode, c = y0(a);
    return c.type === 13 && Yl(c, n), ki(c, o, n), a;
  }
}
function lv(e, t) {
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
function av(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const cv = (e, t, n) => {
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
  return i.type !== 4 ? (i.children.unshift("("), i.children.push(') || ""')) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : '""'), s.some((l) => l.content === "camel") && (i.type === 4 ? i.isStatic ? i.content = Se(i.content) : i.content = `${n.helperString(Kr)}(${i.content})` : (i.children.unshift(`${n.helperString(Kr)}(`), i.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && gc(i, "."), s.some((l) => l.content === "attr") && gc(i, "^")), {
    props: [Me(i, r)]
  };
}, mf = (e, t) => {
  const n = e.arg, s = Se(n.content);
  e.exp = ue(s, !1, n.loc);
}, gc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, uv = df(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return dv(e, t, n, (i) => {
      const r = Ue(s(Ul), [
        i.source
      ]), l = xi(e), a = bt(e, "memo"), c = bo(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && mf(c);
      let u = c && (c.type === 6 ? c.value ? ue(c.value.content, !0) : void 0 : c.exp);
      const h = c && u ? Me("key", u) : null, m = i.source.type === 4 && i.source.constType > 0, v = m ? 64 : c ? 128 : 256;
      return i.codegenNode = yo(
        n,
        s(go),
        void 0,
        r,
        v,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let g;
        const { children: $ } = i;
        Y.NODE_ENV !== "production" && l && e.children.some((p) => {
          if (p.type === 1) {
            const w = bo(p, "key");
            if (w)
              return n.onError(
                Ne(
                  33,
                  w.loc
                )
              ), !0;
          }
        });
        const S = $.length !== 1 || $[0].type !== 1, b = Si(e) ? e : l && e.children.length === 1 && Si(e.children[0]) ? e.children[0] : null;
        if (b ? (g = b.codegenNode, l && h && ki(g, h, n)) : S ? g = yo(
          n,
          s(go),
          h ? Dt([h]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (g = $[0].codegenNode, l && h && ki(g, h, n), g.isBlock !== !m && (g.isBlock ? (o(rs), o(
          Ms(n.inSSR, g.isComponent)
        )) : o(
          Is(n.inSSR, g.isComponent)
        )), g.isBlock = !m, g.isBlock ? (s(rs), s(Ms(n.inSSR, g.isComponent))) : s(Is(n.inSSR, g.isComponent))), a) {
          const p = As(
            Qr(i.parseResult, [
              ue("_cached")
            ])
          );
          p.body = s0([
            qt(["const _memo = (", a.exp, ")"]),
            qt([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Jd
              )}(_cached, _memo)) return _cached`
            ]),
            qt(["const _item = ", g]),
            ue("_item.memo = _memo"),
            ue("return _item")
          ]), r.arguments.push(
            p,
            ue("_cache"),
            ue(String(n.cached.length))
          ), n.cached.push(null);
        } else
          r.arguments.push(
            As(
              Qr(i.parseResult),
              g,
              !0
            )
          );
      };
    });
  }
);
function dv(e, t, n, s) {
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
    children: xi(e) ? e.children : [e]
  };
  n.replaceNode(h), l.vFor++;
  const m = s && s(h);
  return () => {
    l.vFor--, m && m();
  };
}
function gf(e, t) {
  e.finalized || (Y.NODE_ENV !== "production" && (Gn(e.source, t), e.key && Gn(
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
function Qr({ value: e, key: t, index: n }, s = []) {
  return fv([e, t, n, ...s]);
}
function fv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || ue("_".repeat(s + 1), !1));
}
const vc = ue("undefined", !1), pv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = bt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, hv = (e, t, n, s) => As(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function mv(e, t, n = hv) {
  t.helper(Wl);
  const { children: s, loc: o } = e, i = [], r = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = bt(e, "slot", !0);
  if (a) {
    const { arg: $, exp: S } = a;
    $ && !_t($) && (l = !0), i.push(
      Me(
        $ || ue("default", !0),
        n(S, void 0, s, o)
      )
    );
  }
  let c = !1, d = !1;
  const u = [], h = /* @__PURE__ */ new Set();
  let m = 0;
  for (let $ = 0; $ < s.length; $++) {
    const S = s[$];
    let b;
    if (!xi(S) || !(b = bt(S, "slot", !0))) {
      S.type !== 3 && u.push(S);
      continue;
    }
    if (a) {
      t.onError(
        Ne(37, b.loc)
      );
      break;
    }
    c = !0;
    const { children: p, loc: w } = S, {
      arg: E = ue("default", !0),
      exp: D,
      loc: M
    } = b;
    let x;
    _t(E) ? x = E ? E.content : "default" : l = !0;
    const y = bt(S, "for"), O = n(D, y, p, w);
    let A, V;
    if (A = bt(S, "if"))
      l = !0, r.push(
        Gr(
          A.exp,
          jo(E, O, m++),
          vc
        )
      );
    else if (V = bt(
      S,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let R = $, K;
      for (; R-- && (K = s[R], !(K.type !== 3 && Zr(K))); )
        ;
      if (K && xi(K) && bt(K, /^(else-)?if$/)) {
        let te = r[r.length - 1];
        for (; te.alternate.type === 19; )
          te = te.alternate;
        te.alternate = V.exp ? Gr(
          V.exp,
          jo(
            E,
            O,
            m++
          ),
          vc
        ) : jo(E, O, m++);
      } else
        t.onError(
          Ne(30, V.loc)
        );
    } else if (y) {
      l = !0;
      const R = y.forParseResult;
      R ? (gf(R, t), r.push(
        Ue(t.helper(Ul), [
          R.source,
          As(
            Qr(R),
            jo(E, O),
            !0
          )
        ])
      )) : t.onError(
        Ne(
          32,
          y.loc
        )
      );
    } else {
      if (x) {
        if (h.has(x)) {
          t.onError(
            Ne(
              38,
              M
            )
          );
          continue;
        }
        h.add(x), x === "default" && (d = !0);
      }
      i.push(Me(E, O));
    }
  }
  if (!a) {
    const $ = (S, b) => {
      const p = n(S, void 0, b, o);
      return t.compatConfig && (p.isNonScopedSlot = !0), Me("default", p);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((S) => Zr(S)) && (d ? t.onError(
      Ne(
        39,
        u[0].loc
      )
    ) : i.push(
      $(void 0, u)
    )) : i.push($(void 0, s));
  }
  const v = l ? 2 : Qo(e.children) ? 3 : 1;
  let g = Dt(
    i.concat(
      Me(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ue(
          v + (Y.NODE_ENV !== "production" ? ` /* ${Uf[v]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return r.length && (g = Ue(t.helper(Yd), [
    g,
    ts(r)
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
  ), Dt(s);
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
function Zr(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Zr(e.content);
}
const vf = /* @__PURE__ */ new WeakMap(), gv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, i = e.tagType === 1;
  let r = i ? vv(e, t) : `"${s}"`;
  const l = me(r) && r.callee === Fl;
  let a, c, d = 0, u, h, m, v = (
    // dynamic component may resolve to plain elements
    l || r === lo || r === Il || !i && // <svg> and <foreignObject> must be forced into blocks so that block
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
    const $ = g.directives;
    m = $ && $.length ? ts(
      $.map((S) => bv(S, t))
    ) : void 0, g.shouldUseBlock && (v = !0);
  }
  if (e.children.length > 0)
    if (r === bi && (v = !0, d |= 1024, Y.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Ne(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), i && // Teleport is not a real component and has dedicated runtime handling
    r !== lo && // explained above.
    r !== bi) {
      const { slots: $, hasDynamicSlots: S } = mv(e, t);
      c = $, S && (d |= 1024);
    } else if (e.children.length === 1 && r !== lo) {
      const $ = e.children[0], S = $.type, b = S === 5 || S === 8;
      b && St($, t) === 0 && (d |= 1), b || S === 2 ? c = $ : c = e.children;
    } else
      c = e.children;
  h && h.length && (u = _v(h)), e.codegenNode = yo(
    t,
    r,
    a,
    c,
    d === 0 ? void 0 : d,
    u,
    m,
    !!v,
    !1,
    i,
    e.loc
  );
};
function vv(e, t, n = !1) {
  let { tag: s } = e;
  const o = el(s), i = bo(
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
        return Ue(t.helper(Fl), [
          l
        ]);
    } else i.type === 6 && i.value.content.startsWith("vue:") && (s = i.value.content.slice(4));
  const r = Qd(s) || t.isBuiltInComponent(s);
  return r ? (n || t.helper(r), r) : (t.helper(Ll), t.components.add(s), _o(s, "component"));
}
function yf(e, t, n = e.props, s, o, i = !1) {
  const { tag: r, loc: l, children: a } = e;
  let c = [];
  const d = [], u = [], h = a.length > 0;
  let m = !1, v = 0, g = !1, $ = !1, S = !1, b = !1, p = !1, w = !1;
  const E = [], D = (O) => {
    c.length && (d.push(
      Dt(yc(c), l)
    ), c = []), O && d.push(O);
  }, M = () => {
    t.scopes.vFor > 0 && c.push(
      Me(
        ue("ref_for", !0),
        ue("true")
      )
    );
  }, x = ({ key: O, value: A }) => {
    if (_t(O)) {
      const V = O.content, R = gn(V);
      if (R && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      V.toLowerCase() !== "onclick" && // omit v-model handlers
      V !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Dn(V) && (b = !0), R && Dn(V) && (w = !0), R && A.type === 14 && (A = A.arguments[0]), A.type === 20 || (A.type === 4 || A.type === 8) && St(A, t) > 0)
        return;
      V === "ref" ? g = !0 : V === "class" ? $ = !0 : V === "style" ? S = !0 : V !== "key" && !E.includes(V) && E.push(V), s && (V === "class" || V === "style") && !E.includes(V) && E.push(V);
    } else
      p = !0;
  };
  for (let O = 0; O < n.length; O++) {
    const A = n[O];
    if (A.type === 6) {
      const { loc: V, name: R, nameLoc: K, value: te } = A;
      let Z = !0;
      if (R === "ref" && (g = !0, M()), R === "is" && (el(r) || te && te.content.startsWith("vue:") || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Me(
          ue(R, !0, K),
          ue(
            te ? te.content : "",
            Z,
            te ? te.loc : V
          )
        )
      );
    } else {
      const { name: V, arg: R, exp: K, loc: te, modifiers: Z } = A, se = V === "bind", Q = V === "on";
      if (V === "slot") {
        s || t.onError(
          Ne(40, te)
        );
        continue;
      }
      if (V === "once" || V === "memo" || V === "is" || se && $n(R, "is") && (el(r) || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || Q && i)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (se && $n(R, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        Q && h && $n(R, "vue:before-update")) && (m = !0), se && $n(R, "ref") && M(), !R && (se || Q)
      ) {
        if (p = !0, K)
          if (se) {
            if (D(), Y.NODE_ENV !== "production" && d.some((Ot) => Ot.type === 15 ? Ot.properties.some(({ key: Tt }) => Tt.type !== 4 || !Tt.isStatic ? !0 : Tt.content !== "class" && Tt.content !== "style" && !gn(Tt.content)) : !0) && Ps(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              te
            ), In(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              d.unshift(K);
              continue;
            }
            M(), D(), d.push(K);
          } else
            D({
              type: 14,
              loc: te,
              callee: t.helper(Kl),
              arguments: s ? [K] : [K, "true"]
            });
        else
          t.onError(
            Ne(
              se ? 34 : 35,
              te
            )
          );
        continue;
      }
      se && Z.some((pt) => pt.content === "prop") && (v |= 32);
      const Ee = t.directiveTransforms[V];
      if (Ee) {
        const { props: pt, needRuntime: Ot } = Ee(A, e, t);
        !i && pt.forEach(x), Q && R && !_t(R) ? D(Dt(pt, l)) : c.push(...pt), Ot && (u.push(A), Et(Ot) && vf.set(A, Ot));
      } else $c(V) || (u.push(A), h && (m = !0));
    }
  }
  let y;
  if (d.length ? (D(), d.length > 1 ? y = Ue(
    t.helper(_i),
    d,
    l
  ) : y = d[0]) : c.length && (y = Dt(
    yc(c),
    l
  )), p ? v |= 16 : ($ && !s && (v |= 2), S && !s && (v |= 4), E.length && (v |= 8), b && (v |= 32)), !m && (v === 0 || v === 32) && (g || w || u.length > 0) && (v |= 512), !t.inSSR && y)
    switch (y.type) {
      case 15:
        let O = -1, A = -1, V = !1;
        for (let te = 0; te < y.properties.length; te++) {
          const Z = y.properties[te].key;
          _t(Z) ? Z.content === "class" ? O = te : Z.content === "style" && (A = te) : Z.isHandlerKey || (V = !0);
        }
        const R = y.properties[O], K = y.properties[A];
        V ? y = Ue(
          t.helper(vo),
          [y]
        ) : (R && !_t(R.value) && (R.value = Ue(
          t.helper(ql),
          [R.value]
        )), K && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (S || K.value.type === 4 && K.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        K.value.type === 17) && (K.value = Ue(
          t.helper(zl),
          [K.value]
        )));
        break;
      case 14:
        break;
      default:
        y = Ue(
          t.helper(vo),
          [
            Ue(t.helper(To), [
              y
            ])
          ]
        );
        break;
    }
  return {
    props: y,
    directives: u,
    patchFlag: v,
    dynamicPropNames: E,
    shouldUseBlock: m
  };
}
function yc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.key.type === 8 || !o.key.isStatic) {
      n.push(o);
      continue;
    }
    const i = o.key.content, r = t.get(i);
    r ? (i === "style" || i === "class" || gn(i)) && yv(r, o) : (t.set(i, o), n.push(o));
  }
  return n;
}
function yv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ts(
    [e.value, t.value],
    e.loc
  );
}
function bv(e, t) {
  const n = [], s = vf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Bl), t.directives.add(e.name), n.push(_o(e.name, "directive")));
  const { loc: o } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const i = ue("true", !1, o);
    n.push(
      Dt(
        e.modifiers.map(
          (r) => Me(r, i)
        ),
        o
      )
    );
  }
  return ts(n, e.loc);
}
function _v(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function el(e) {
  return e === "component" || e === "Component";
}
const Ev = (e, t) => {
  if (Si(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: i } = wv(e, t), r = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    i && (r[2] = i, l = 3), n.length && (r[3] = As([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), r.splice(l), e.codegenNode = Ue(
      t.helper(Gd),
      r,
      s
    );
  }
};
function wv(e, t) {
  let n = '"default"', s;
  const o = [];
  for (let i = 0; i < e.props.length; i++) {
    const r = e.props[i];
    if (r.type === 6)
      r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = Se(r.name), o.push(r)));
    else if (r.name === "bind" && $n(r.arg, "name")) {
      if (r.exp)
        n = r.exp;
      else if (r.arg && r.arg.type === 4) {
        const l = Se(r.arg.content);
        n = r.exp = ue(l, !1, r.arg.loc);
      }
    } else
      r.name === "bind" && r.arg && _t(r.arg) && (r.arg.content = Se(r.arg.content)), o.push(r);
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
      Y.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Ne(51, r.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const h = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        en(Se(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = ue(h, !0, r.loc);
    } else
      l = qt([
        `${n.helperString(Wr)}(`,
        r,
        ")"
      ]);
  else
    l = r, l.children.unshift(`${n.helperString(Wr)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = ef(a), h = !(u || h0(a)), m = a.content.includes(";");
    Y.NODE_ENV !== "production" && Gn(
      a,
      n,
      !1,
      m
    ), (h || c && u) && (a = qt([
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
}, Nv = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, o = !1;
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        if (vr(r)) {
          o = !0;
          for (let l = i + 1; l < n.length; l++) {
            const a = n[l];
            if (vr(a))
              s || (s = n[i] = qt(
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
          if (vr(r) || r.type === 8) {
            const l = [];
            (r.type !== 2 || r.content !== " ") && l.push(r), !t.ssr && St(r, t) === 0 && l.push(
              1 + (Y.NODE_ENV !== "production" ? ` /* ${Qs[1]} */` : "")
            ), n[i] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: Ue(
                t.helper(Rl),
                l
              )
            };
          }
        }
    };
}, bc = /* @__PURE__ */ new WeakSet(), xv = (e, t) => {
  if (e.type === 1 && bt(e, "once", !0))
    return bc.has(e) || t.inVOnce || t.inSSR ? void 0 : (bc.add(e), t.inVOnce = !0, t.helper(Ei), () => {
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
  const a = o || ue("modelValue", !0), c = o ? _t(o) ? `onUpdate:${Se(o.content)}` : qt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let d;
  const u = n.isTS ? "($event: any)" : "$event";
  d = qt([
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
    const m = e.modifiers.map((g) => g.content).map((g) => (Xl(g) ? g : JSON.stringify(g)) + ": true").join(", "), v = o ? _t(o) ? `${o.content}Modifiers` : qt([o, ' + "Modifiers"']) : "modelModifiers";
    h.push(
      Me(
        v,
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
const Sv = /[\w).+\-_$\]]/, kv = (e, t) => {
  In("COMPILER_FILTERS", t) && (e.type === 5 ? Ci(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Ci(n.exp, t);
  }));
};
function Ci(e, t) {
  if (e.type === 4)
    _c(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? _c(s, t) : s.type === 8 ? Ci(e, t) : s.type === 5 && Ci(s.content, t));
    }
}
function _c(e, t) {
  const n = e.content;
  let s = !1, o = !1, i = !1, r = !1, l = 0, a = 0, c = 0, d = 0, u, h, m, v, g = [];
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
      v === void 0 ? (d = m + 1, v = n.slice(0, m).trim()) : $();
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
        let S = m - 1, b;
        for (; S >= 0 && (b = n.charAt(S), b === " "); S--)
          ;
        (!b || !Sv.test(b)) && (r = !0);
      }
    }
  v === void 0 ? v = n.slice(0, m).trim() : d !== 0 && $();
  function $() {
    g.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (g.length) {
    for (Y.NODE_ENV !== "production" && Ni(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < g.length; m++)
      v = Cv(v, g[m], t);
    e.content = v, e.ast = void 0;
  }
}
function Cv(e, t, n) {
  n.helper(jl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${_o(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), i = t.slice(s + 1);
    return n.filters.add(o), `${_o(o, "filter")}(${e}${i !== ")" ? "," + i : i}`;
  }
}
const Ec = /* @__PURE__ */ new WeakSet(), Ov = (e, t) => {
  if (e.type === 1) {
    const n = bt(e, "memo");
    return !n || Ec.has(e) ? void 0 : (Ec.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Yl(s, t), e.codegenNode = Ue(t.helper(Gl), [
        n.exp,
        As(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Tv(e) {
  return [
    [
      xv,
      iv,
      Ov,
      uv,
      kv,
      ...Y.NODE_ENV !== "production" ? [ov] : [],
      Ev,
      gv,
      pv,
      Nv
    ],
    {
      on: bf,
      bind: cv,
      model: _f
    }
  ];
}
function $v(e, t = {}) {
  const n = t.onError || Jl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(Ne(47)) : s && n(Ne(48));
  const o = !1;
  t.cacheHandlers && n(Ne(49)), t.scopeId && !s && n(Ne(50));
  const i = de({}, t, {
    prefixIdentifiers: o
  }), r = re(e) ? V0(e, i) : e, [l, a] = Tv();
  return P0(
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
  ), B0(r, i);
}
const Dv = () => ({ props: [] });
var ot = {};
const Ef = Symbol(ot.NODE_ENV !== "production" ? "vModelRadio" : ""), wf = Symbol(
  ot.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Nf = Symbol(ot.NODE_ENV !== "production" ? "vModelText" : ""), xf = Symbol(
  ot.NODE_ENV !== "production" ? "vModelSelect" : ""
), tl = Symbol(
  ot.NODE_ENV !== "production" ? "vModelDynamic" : ""
), Sf = Symbol(
  ot.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), kf = Symbol(
  ot.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), Cf = Symbol(ot.NODE_ENV !== "production" ? "vShow" : ""), ea = Symbol(ot.NODE_ENV !== "production" ? "Transition" : ""), Of = Symbol(
  ot.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
e0({
  [Ef]: "vModelRadio",
  [wf]: "vModelCheckbox",
  [Nf]: "vModelText",
  [xf]: "vModelSelect",
  [tl]: "vModelDynamic",
  [Sf]: "withModifiers",
  [kf]: "withKeys",
  [Cf]: "vShow",
  [ea]: "Transition",
  [Of]: "TransitionGroup"
});
let fs;
function Vv(e, t = !1) {
  return fs || (fs = document.createElement("div")), t ? (fs.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, fs.children[0].getAttribute("foo")) : (fs.innerHTML = e, fs.textContent);
}
const Av = {
  parseMode: "html",
  isVoidTag: np,
  isNativeTag: (e) => Vc(e) || Ac(e) || Ic(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Vv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return ea;
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
}, Iv = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ue("style", !0, t.loc),
      exp: Mv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Mv = (e, t) => {
  const n = Dc(e);
  return ue(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function jt(e, t) {
  return Ne(
    e,
    t,
    ot.NODE_ENV !== "production" ? Pv : void 0
  );
}
const Pv = {
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
}, Rv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    jt(53, o)
  ), t.children.length && (n.onError(
    jt(54, o)
  ), t.children.length = 0), {
    props: [
      Me(
        ue("innerHTML", !0, o),
        s || ue("", !0)
      )
    ]
  };
}, Lv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    jt(55, o)
  ), t.children.length && (n.onError(
    jt(56, o)
  ), t.children.length = 0), {
    props: [
      Me(
        ue("textContent", !0),
        s ? St(s, n) > 0 ? s : Ue(
          n.helperString(Ji),
          [s],
          o
        ) : ue("", !0)
      )
    ]
  };
}, Fv = (e, t, n) => {
  const s = _f(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    jt(
      58,
      e.arg.loc
    )
  );
  function o() {
    const l = bt(t, "bind");
    l && $n(l.arg, "value") && n.onError(
      jt(
        60,
        l.loc
      )
    );
  }
  const { tag: i } = t, r = n.isCustomElement(i);
  if (i === "input" || i === "textarea" || i === "select" || r) {
    let l = Nf, a = !1;
    if (i === "input" || r) {
      const c = bo(t, "type");
      if (c) {
        if (c.type === 7)
          l = tl;
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
                jt(
                  59,
                  e.loc
                )
              );
              break;
            default:
              ot.NODE_ENV !== "production" && o();
              break;
          }
      } else m0(t) ? l = tl : ot.NODE_ENV !== "production" && o();
    } else i === "select" ? l = xf : ot.NODE_ENV !== "production" && o();
    a || (s.needRuntime = n.helper(l));
  } else
    n.onError(
      jt(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), s;
}, Bv = /* @__PURE__ */ Ke("passive,once,capture"), jv = /* @__PURE__ */ Ke(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Hv = /* @__PURE__ */ Ke("left,right"), Tf = /* @__PURE__ */ Ke("onkeyup,onkeydown,onkeypress"), Uv = (e, t, n, s) => {
  const o = [], i = [], r = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ps(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Bv(a) ? r.push(a) : Hv(a) ? _t(e) ? Tf(e.content.toLowerCase()) ? o.push(a) : i.push(a) : (o.push(a), i.push(a)) : jv(a) ? i.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: i,
    eventOptionModifiers: r
  };
}, wc = (e, t) => _t(e) && e.content.toLowerCase() === "onclick" ? ue(t, !0) : e.type !== 4 ? qt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, qv = (e, t, n) => bf(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: i, value: r } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = Uv(i, o, n, e.loc);
  if (a.includes("right") && (i = wc(i, "onContextmenu")), a.includes("middle") && (i = wc(i, "onMouseup")), a.length && (r = Ue(n.helper(Sf), [
    r,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!_t(i) || Tf(i.content.toLowerCase())) && (r = Ue(n.helper(kf), [
    r,
    JSON.stringify(l)
  ])), c.length) {
    const d = c.map(on).join("");
    i = _t(i) ? ue(`${i.content}${d}`, !0) : qt(["(", i, `) + "${d}"`]);
  }
  return {
    props: [Me(i, r)]
  };
}), zv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    jt(61, o)
  ), {
    props: [],
    needRuntime: n.helper(Cf)
  };
}, Kv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === ea)
    return () => {
      if (!e.children.length)
        return;
      $f(e) && t.onError(
        jt(
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
function $f(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some($f);
}
const Wv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (ot.NODE_ENV !== "production" && t.onError(
    jt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Gv(e, t) {
  return e === "template" ? !0 : e in Nc ? Nc[e].has(t) : t in xc ? xc[t].has(e) : !(e in Sc && Sc[e].has(t) || t in kc && kc[t].has(e));
}
const ps = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), zn = /* @__PURE__ */ new Set([]), Nc = {
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
}, xc = {
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
}, Sc = {
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
}, kc = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: ps,
  h2: ps,
  h3: ps,
  h4: ps,
  h5: ps,
  h6: ps
}, Yv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Gv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Jv = [
  Iv,
  ...ot.NODE_ENV !== "production" ? [Kv, Yv] : []
], Xv = {
  cloak: Dv,
  html: Rv,
  text: Lv,
  model: Fv,
  // override compiler-core
  on: qv,
  // override compiler-core
  show: zv
};
function Qv(e, t = {}) {
  return $v(
    e,
    de({}, Av, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Wv,
        ...Jv,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: de(
        {},
        Xv,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Xs = {};
function Zv() {
  Ed();
}
Xs.NODE_ENV !== "production" && Zv();
const Cc = /* @__PURE__ */ Object.create(null);
function ey(e, t) {
  if (!re(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Xs.NODE_ENV !== "production" && Ie("invalid template option: ", e), Te;
  const n = Hf(e, t), s = Cc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Xs.NODE_ENV !== "production" && !a && Ie(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const o = de(
    {
      hoistStatic: !0,
      onError: Xs.NODE_ENV !== "production" ? r : void 0,
      onWarn: Xs.NODE_ENV !== "production" ? (a) => r(a, !0) : Te
    },
    t
  );
  !o.isCustomElement && typeof customElements < "u" && (o.isCustomElement = (a) => !!customElements.get(a));
  const { code: i } = Qv(e, o);
  function r(a, c = !1) {
    const d = c ? a.message : `Template compilation error: ${a.message}`, u = a.loc && Kf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Ie(u ? `${d}
${u}` : d);
  }
  const l = new Function("Vue", i)(Gg);
  return l._rc = !0, Cc[n] = l;
}
vd(ey);
const Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ty = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ny = {
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
    const n = e, s = t, o = U(!1), i = ee(() => n.href ? "a" : "button"), r = ee(() => {
      const c = {};
      if (n.rounded === "full" ? c.borderRadius = "9999px" : n.rounded === "none" ? c.borderRadius = "0" : n.buttonRadius !== null ? c.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius : c.borderRadius = "var(--button-radius, 6px)", n.variant === "primary") {
        const d = o.value && n.primaryBgHover ? n.primaryBgHover : n.primaryBg;
        d && (c.backgroundColor = d), n.primaryText && (c.color = n.primaryText);
      } else if (n.variant === "secondary") {
        const d = o.value && n.secondaryBgHover ? n.secondaryBgHover : n.secondaryBg;
        d && (c.backgroundColor = d), n.secondaryText && (c.color = n.secondaryText), n.secondaryBorder && (c.borderColor = n.secondaryBorder);
      }
      return c;
    }), l = ee(() => {
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
    return (c, d) => (k(), ft(Nl(i.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ve(l.value),
      style: dt(r.value),
      onClick: a,
      onMouseenter: d[0] || (d[0] = (u) => o.value = !0),
      onMouseleave: d[1] || (d[1] = (u) => o.value = !1)
    }, {
      default: Fe(() => [
        e.loading ? (k(), T("svg", ty, d[2] || (d[2] = [
          f("circle", {
            class: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "4"
          }, null, -1),
          f("path", {
            class: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }, null, -1)
        ]))) : H("", !0),
        Bn(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, ws = /* @__PURE__ */ Je(ny, [["__scopeId", "data-v-023a6e93"]]), sy = ["disabled"], oy = ["value", "min", "max"], iy = ["disabled"], ry = {
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
    const n = e, s = t, o = it(), i = ee({
      get: () => n.modelValue,
      set: (d) => {
        var h, m, v;
        const u = Math.max(n.min, Math.min(n.max, d));
        if (s("update:modelValue", u), s("update", u), ((v = (m = (h = o == null ? void 0 : o.vnode) == null ? void 0 : h.el) == null ? void 0 : m.parentElement) == null ? void 0 : v.tagName) === "QUANTITY-SELECTOR") {
          const g = o.vnode.el.parentElement, $ = g.getAttribute("data-line-key");
          if ($) {
            const S = new CustomEvent("quantity-update", {
              detail: { key: $, value: u },
              bubbles: !0
            });
            g.dispatchEvent(S);
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
    return (d, u) => (k(), T("div", {
      class: Ve(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      f("button", {
        type: "button",
        class: Ve(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue <= e.min,
        onClick: r,
        "aria-label": "Decrease quantity"
      }, u[0] || (u[0] = [
        f("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          f("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20 12H4"
          })
        ], -1)
      ]), 10, sy),
      f("input", {
        type: "number",
        class: Ve(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, oy),
      f("button", {
        type: "button",
        class: Ve(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, u[1] || (u[1] = [
        f("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          f("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4v16m8-8H4"
          })
        ], -1)
      ]), 10, iy)
    ], 2));
  }
}, Df = /* @__PURE__ */ Je(ry, [["__scopeId", "data-v-589d2042"]]), ly = ["data-updating"], ay = { class: "cart-item__content" }, cy = { class: "cart-item__image" }, uy = ["href"], dy = ["src", "alt"], fy = { class: "cart-item__details" }, py = { class: "cart-item__header" }, hy = { class: "cart-item__info" }, my = { class: "cart-item__title" }, gy = ["href"], vy = {
  key: 0,
  class: "cart-item__variant"
}, yy = {
  key: 1,
  class: "cart-item__properties"
}, by = { class: "cart-item__property-key" }, _y = { class: "cart-item__price cart-item__price--mobile" }, Ey = { class: "cart-item__price-current" }, wy = {
  key: 0,
  class: "cart-item__price-original"
}, Ny = {
  key: 0,
  class: "cart-item__discounts"
}, xy = { class: "cart-item__actions" }, Sy = { class: "cart-item__actions-left" }, ky = ["disabled"], Cy = {
  key: 0,
  class: "cart-item__remove-icon",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Oy = {
  key: 1,
  class: "cart-item__remove-icon cart-item__remove-icon--loading",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ty = { class: "cart-item__price cart-item__price--desktop" }, $y = { class: "cart-item__price-current" }, Dy = {
  key: 0,
  class: "cart-item__price-original"
}, Vy = {
  key: 1,
  class: "cart-item__price-savings"
}, Ay = {
  key: 1,
  class: "cart-item__warning"
}, Iy = {
  key: 2,
  class: "cart-item__error"
}, My = {
  __name: "CartItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = U(n.item.quantity), i = U(!1), r = U(""), l = ee(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = ee(() => {
      var h;
      return ((h = n.item.variant) == null ? void 0 : h.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (h) => {
      var S, b, p;
      if (!h && h !== 0) return "$0.00";
      const m = ((S = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : S.money_format) || "${{amount}}";
      (b = Shopline == null ? void 0 : Shopline.shop) != null && b.currency;
      const v = ((p = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : p.current) || "en", $ = new Intl.NumberFormat(v, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(h));
      return m.replace("{{amount}}", $);
    }, d = async (h) => {
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
    }), (h, m) => (k(), T("div", {
      class: "cart-item",
      "data-updating": i.value
    }, [
      f("div", ay, [
        f("div", cy, [
          f("a", {
            href: e.item.url,
            class: "cart-item__image-link"
          }, [
            f("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "cart-item__image-img",
              loading: "lazy"
            }, null, 8, dy)
          ], 8, uy)
        ]),
        f("div", fy, [
          f("div", py, [
            f("div", hy, [
              f("h3", my, [
                f("a", {
                  href: e.item.url,
                  class: "cart-item__title-link"
                }, W(e.item.product_title), 9, gy)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (k(), T("p", vy, W(e.item.variant_title), 1)) : H("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (k(), T("div", yy, [
                (k(!0), T(ae, null, Oe(e.item.properties, (v, g) => (k(), T("p", {
                  key: g,
                  class: "cart-item__property"
                }, [
                  f("span", by, W(g) + ":", 1),
                  Be(" " + W(v), 1)
                ]))), 128))
              ])) : H("", !0)
            ]),
            f("div", _y, [
              f("p", Ey, W(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (k(), T("p", wy, W(c(e.item.original_price * e.item.quantity)), 1)) : H("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (k(), T("div", Ny, [
            (k(!0), T(ae, null, Oe(e.item.discounts, (v) => (k(), T("div", {
              key: v.id,
              class: "cart-item__discount"
            }, [
              m[1] || (m[1] = f("svg", {
                class: "cart-item__discount-icon",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                f("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              Be(" " + W(v.title) + " (-" + W(c(v.amount || v.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : H("", !0),
          f("div", xy, [
            f("div", Sy, [
              fe(Df, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  m[0] || (m[0] = (v) => o.value = v),
                  d
                ],
                min: 0,
                max: l.value,
                disabled: i.value,
                size: "small"
              }, null, 8, ["modelValue", "max", "disabled"]),
              f("button", {
                type: "button",
                onClick: u,
                class: "cart-item__remove",
                disabled: i.value,
                "aria-label": "Remove item from cart"
              }, [
                i.value ? (k(), T("svg", Oy, m[3] || (m[3] = [
                  f("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }, null, -1),
                  f("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, null, -1)
                ]))) : (k(), T("svg", Cy, m[2] || (m[2] = [
                  f("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, ky)
            ]),
            f("div", Ty, [
              f("p", $y, W(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (k(), T("p", Dy, W(c(e.item.original_price * e.item.quantity)), 1)) : H("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (k(), T("p", Vy, " Save " + W(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : H("", !0)
            ])
          ]),
          a.value ? (k(), T("p", Ay, " Only " + W(e.item.variant.inventory_quantity) + " left in stock ", 1)) : H("", !0),
          r.value ? (k(), T("p", Iy, W(r.value), 1)) : H("", !0)
        ])
      ])
    ], 8, ly));
  }
}, Vf = /* @__PURE__ */ Je(My, [["__scopeId", "data-v-44c314e9"]]), Py = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Ry = { class: "absolute inset-0 overflow-hidden" }, Ly = { class: "fixed inset-y-0 right-0 max-w-full flex pointer-events-none" }, Fy = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, By = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, jy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, Hy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, Uy = { class: "flex-1 overflow-y-auto" }, qy = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, zy = {
  key: 1,
  class: "px-4 sm:px-6 pb-6"
}, Ky = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, Wy = {
  key: 0,
  class: "flex items-center gap-2"
}, Gy = {
  key: 1,
  class: "flex items-center gap-2"
}, Yy = { class: "text-sm text-blue-800" }, Jy = {
  key: 2,
  class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden"
}, Xy = { class: "flex justify-between text-base font-medium text-gray-900" }, Qy = { class: "space-y-3" }, Zy = {
  __name: "CartDrawer",
  setup(e) {
    const t = U(!1), n = U([]), s = U(0), o = ee(() => {
      var v;
      return ((v = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : v.cart) || "/cart";
    }), i = ee(() => {
      var g, $;
      return (($ = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : $.free_shipping_threshold) || 50;
    }), r = ee(() => {
      var v, g;
      return ((g = (v = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : v.settings) == null ? void 0 : g.show_free_shipping_bar) !== !1;
    }), l = (v) => {
      var p, w, E, D;
      if (!v && v !== 0) return "$0.00";
      const g = ((p = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : p.money_format) || "${{amount}}";
      (w = Shopline == null ? void 0 : Shopline.shop) != null && w.money_with_currency_format, (E = Shopline == null ? void 0 : Shopline.shop) != null && E.currency;
      const $ = ((D = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : D.current) || "en", b = new Intl.NumberFormat($, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(v));
      return g.replace("{{amount}}", b);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", d();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, d = async () => {
      const v = await window.OrionCart.fetchCart();
      n.value = v.items, s.value = v.total_price;
    }, u = async ({ key: v, quantity: g }) => {
      await window.OrionCart.updateItem(v, g), d();
    }, h = async (v) => {
      await window.OrionCart.removeItem(v), d();
    }, m = (v) => {
      v.key === "Escape" && t.value && c();
    };
    return ze(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", m);
    }), kt(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", m);
    }), (v, g) => (k(), ft(Fn, { to: "body" }, [
      fe(xt, { name: "drawer" }, {
        default: Fe(() => [
          t.value ? (k(), T("div", Py, [
            f("div", Ry, [
              fe(xt, { name: "fade" }, {
                default: Fe(() => [
                  t.value ? (k(), T("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: c
                  })) : H("", !0)
                ]),
                _: 1
              }),
              f("div", Ly, [
                fe(xt, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Fe(() => [
                    t.value ? (k(), T("div", Fy, [
                      f("div", By, [
                        f("div", jy, [
                          f("div", null, [
                            g[0] || (g[0] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (k(), T("p", Hy, W(n.value.length) + " " + W(n.value.length === 1 ? "item" : "items"), 1)) : H("", !0)
                          ]),
                          f("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: c
                          }, g[1] || (g[1] = [
                            f("span", { class: "sr-only" }, "Close cart", -1),
                            f("svg", {
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              f("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ]))
                        ]),
                        f("div", Uy, [
                          n.value.length === 0 ? (k(), T("div", qy, [
                            g[3] || (g[3] = f("div", { class: "empty-cart-icon" }, [
                              f("div", { class: "empty-cart-icon-bg" }),
                              f("svg", {
                                class: "empty-cart-icon-svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "1.5"
                              }, [
                                f("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                })
                              ])
                            ], -1)),
                            g[4] || (g[4] = f("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, " Your cart is empty ", -1)),
                            g[5] || (g[5] = f("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            fe(ws, {
                              onClick: c,
                              variant: "primary",
                              size: "large"
                            }, {
                              default: Fe(() => g[2] || (g[2] = [
                                Be(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (k(), T("div", zy, [
                            (k(!0), T(ae, null, Oe(n.value, ($) => (k(), ft(Vf, {
                              key: $.key,
                              item: $,
                              onUpdate: u,
                              onRemove: h
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (k(), T("div", Ky, [
                          r.value ? (k(), T("div", {
                            key: 0,
                            class: Ve([s.value >= i.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "rounded-lg p-3"])
                          }, [
                            s.value >= i.value ? (k(), T("div", Wy, g[6] || (g[6] = [
                              f("svg", {
                                class: "w-5 h-5 text-green-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                f("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ], -1),
                              f("p", { class: "text-sm text-green-800" }, " Congratulations! You've unlocked free shipping! ", -1)
                            ]))) : (k(), T("div", Gy, [
                              g[7] || (g[7] = f("svg", {
                                class: "w-5 h-5 text-blue-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                f("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ], -1)),
                              f("p", Yy, " Add " + W(l(
                                i.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < i.value ? (k(), T("div", Jy, [
                              f("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: dt(`width: ${Math.min(
                                  s.value / i.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])) : H("", !0)
                          ], 2)) : H("", !0),
                          f("div", null, [
                            f("div", Xy, [
                              g[8] || (g[8] = f("p", null, "Subtotal", -1)),
                              f("p", null, W(l(s.value)), 1)
                            ]),
                            g[9] || (g[9] = f("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          f("div", Qy, [
                            fe(ws, {
                              href: o.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Fe(() => g[10] || (g[10] = [
                                Be(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            }, 8, ["href"]),
                            fe(ws, {
                              onClick: c,
                              variant: "ghost",
                              "full-width": !0
                            }, {
                              default: Fe(() => g[11] || (g[11] = [
                                Be(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [11]
                            })
                          ])
                        ])) : H("", !0)
                      ])
                    ])) : H("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : H("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Af = /* @__PURE__ */ Je(Zy, [["__scopeId", "data-v-8c9c8415"]]), e1 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, t1 = { class: "absolute inset-0 overflow-hidden" }, n1 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, s1 = {
  key: 0,
  class: "w-screen max-w-sm pointer-events-auto"
}, o1 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, i1 = { class: "flex-1 overflow-y-auto" }, r1 = { class: "px-4 py-4" }, l1 = { class: "space-y-1" }, a1 = { key: 0 }, c1 = { key: 0 }, u1 = ["onClick"], d1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, f1 = { key: 0 }, p1 = ["onClick"], h1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, m1 = ["href"], g1 = ["href"], v1 = ["href"], y1 = { class: "px-4 py-4 border-t" }, b1 = { class: "space-y-1" }, _1 = ["href"], E1 = {
  key: 0,
  class: "px-4 py-4 border-t"
}, w1 = {
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
    const n = e, s = ee(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = ee(() => n.customerUrl || window.mobileMenuCustomerUrl || "/account"), i = ee(() => n.showLocalization || window.mobileMenuShowLocalization || !1), r = U(!1), l = U([]), a = () => {
      console.log("openMenu called"), r.value = !0, document.body.style.overflow = "hidden";
    }, c = () => {
      r.value = !1, document.body.style.overflow = "";
    }, d = (u) => {
      const h = l.value.indexOf(u);
      h > -1 ? l.value.splice(h, 1) : l.value.push(u);
    };
    return t({
      openMenu: a,
      closeMenu: c
    }), ze(() => {
      console.log("MobileMenu component mounted"), console.log("Menu items:", s.value), document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", c);
      const u = (h) => {
        h.key === "Escape" && r.value && c();
      };
      document.addEventListener("keydown", u), kt(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", c), document.removeEventListener("keydown", u);
      });
    }), (u, h) => (k(), T("div", null, [
      (k(), ft(Fn, { to: "body" }, [
        fe(xt, { name: "menu" }, {
          default: Fe(() => [
            r.value ? (k(), T("div", e1, [
              f("div", t1, [
                fe(xt, { name: "fade" }, {
                  default: Fe(() => [
                    r.value ? (k(), T("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : H("", !0)
                  ]),
                  _: 1
                }),
                f("div", n1, [
                  fe(xt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Fe(() => [
                      r.value ? (k(), T("div", s1, [
                        f("div", o1, [
                          f("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            h[1] || (h[1] = f("h2", { class: "text-lg font-medium text-gray-900" }, "Menu", -1)),
                            f("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: c
                            }, h[0] || (h[0] = [
                              f("span", { class: "sr-only" }, "Close menu", -1),
                              f("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                f("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          f("div", i1, [
                            f("nav", r1, [
                              f("ul", l1, [
                                s.value.length === 0 ? (k(), T("li", a1, h[2] || (h[2] = [
                                  f("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : H("", !0),
                                (k(!0), T(ae, null, Oe(s.value, (m) => (k(), T("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (k(), T("div", c1, [
                                    f("button", {
                                      onClick: (v) => d(m.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      f("span", null, W(m.title), 1),
                                      (k(), T("svg", {
                                        class: Ve(["h-5 w-5 transition-transform duration-200", { "rotate-180": l.value.includes(m.title) }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, h[3] || (h[3] = [
                                        f("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, u1),
                                    fe(xt, { name: "submenu" }, {
                                      default: Fe(() => [
                                        l.value.includes(m.title) ? (k(), T("ul", d1, [
                                          (k(!0), T(ae, null, Oe(m.links, (v) => (k(), T("li", {
                                            key: v.id || v.title
                                          }, [
                                            v.links && v.links.length ? (k(), T("div", f1, [
                                              f("button", {
                                                onClick: (g) => d(`${m.title}-${v.title}`),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                f("span", null, W(v.title), 1),
                                                (k(), T("svg", {
                                                  class: Ve(["h-4 w-4 transition-transform duration-200", { "rotate-180": l.value.includes(`${m.title}-${v.title}`) }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, h[4] || (h[4] = [
                                                  f("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, p1),
                                              fe(xt, { name: "submenu" }, {
                                                default: Fe(() => [
                                                  l.value.includes(`${m.title}-${v.title}`) ? (k(), T("ul", h1, [
                                                    (k(!0), T(ae, null, Oe(v.links, (g) => (k(), T("li", {
                                                      key: g.id || g.title
                                                    }, [
                                                      f("a", {
                                                        href: g.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: c
                                                      }, W(g.title), 9, m1)
                                                    ]))), 128))
                                                  ])) : H("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (k(), T("a", {
                                              key: 1,
                                              href: v.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: c
                                            }, W(v.title), 9, g1))
                                          ]))), 128))
                                        ])) : H("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (k(), T("a", {
                                    key: 1,
                                    href: m.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: c
                                  }, W(m.title), 9, v1))
                                ]))), 128))
                              ])
                            ]),
                            f("div", y1, [
                              f("div", b1, [
                                f("a", {
                                  href: o.value,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, h[5] || (h[5] = [
                                  f("span", { class: "flex items-center" }, [
                                    f("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      f("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      })
                                    ]),
                                    Be(" Account ")
                                  ], -1)
                                ]), 8, _1),
                                h[6] || (h[6] = f("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, [
                                  f("span", { class: "flex items-center" }, [
                                    f("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      f("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                      })
                                    ]),
                                    Be(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            i.value ? (k(), T("div", E1, [
                              Bn(u.$slots, "localization", {}, void 0, !0)
                            ])) : H("", !0)
                          ])
                        ])
                      ])) : H("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : H("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, N1 = /* @__PURE__ */ Je(w1, [["__scopeId", "data-v-8c7afa86"]]), x1 = { class: "variant-picker" }, S1 = { class: "text-sm font-medium text-gray-900 mb-3" }, k1 = { class: "font-normal text-gray-600" }, C1 = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, O1 = ["title", "aria-label", "disabled", "onClick"], T1 = { class: "sr-only" }, $1 = {
  key: 0,
  class: "color-swatch__checkmark"
}, D1 = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, V1 = ["aria-label", "disabled", "onClick"], A1 = {
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
    const n = e, s = t, o = U({}), i = U(null), r = ee(() => n.product.options || []), l = ee(() => n.product.variants || []);
    ze(() => {
      if (n.selectedVariantId) {
        const $ = l.value.find((S) => S.id == n.selectedVariantId);
        $ && a($);
      } else if (l.value.length > 0) {
        const $ = l.value.find((S) => S.available) || l.value[0];
        a($);
      }
    });
    const a = ($) => {
      i.value = $, r.value.forEach((S, b) => {
        o.value[S.name] = $[`option${b + 1}`];
      }), s("variant-change", $);
    }, c = ($, S) => {
      o.value[$] = S;
      const b = l.value.find((p) => r.value.every((w, E) => {
        const D = o.value[w.name];
        return p[`option${E + 1}`] === D;
      }));
      b && (i.value = b, s("variant-change", b));
    }, d = ($) => o.value[$] || "", u = ($, S) => o.value[$] === S, h = ($, S) => {
      const b = r.value.findIndex((p) => p.name === $);
      return l.value.some((p) => {
        const w = p[`option${b + 1}`] === S, E = r.value.every((D, M) => {
          if (D.name === $) return !0;
          const x = o.value[D.name];
          return x ? p[`option${M + 1}`] === x : !0;
        });
        return w && E && p.available;
      });
    }, m = ($) => $.toLowerCase().includes("color") || $.toLowerCase().includes("colour"), v = ($) => ({
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
    })[$.toLowerCase()] || "#E5E7EB", g = ($) => {
      var S, b;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((b = (S = window.Shopify) == null ? void 0 : S.currency) == null ? void 0 : b.active) || "USD"
      }).format($ / 100);
    };
    return ($, S) => (k(), T("div", x1, [
      (k(!0), T(ae, null, Oe(r.value, (b) => (k(), T("div", {
        key: b.name,
        class: "variant-option mb-6"
      }, [
        f("h3", S1, [
          Be(W(b.name) + ": ", 1),
          f("span", k1, W(d(b.name)), 1)
        ]),
        m(b.name) ? (k(), T("div", C1, [
          (k(!0), T(ae, null, Oe(b.values, (p) => (k(), T("button", {
            key: p,
            type: "button",
            class: Ve([
              "color-swatch",
              u(b.name, p) ? "color-swatch--selected" : "",
              h(b.name, p) ? "" : "color-swatch--unavailable"
            ]),
            style: dt({ backgroundColor: v(p) }),
            title: p,
            "aria-label": `Select ${b.name} ${p}`,
            disabled: !h(b.name, p),
            onClick: (w) => c(b.name, p)
          }, [
            f("span", T1, W(p), 1),
            u(b.name, p) ? (k(), T("span", $1, S[0] || (S[0] = [
              f("svg", {
                class: "w-4 h-4",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                f("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ]))) : H("", !0)
          ], 14, O1))), 128))
        ])) : (k(), T("div", D1, [
          (k(!0), T(ae, null, Oe(b.values, (p) => (k(), T("button", {
            key: p,
            type: "button",
            class: Ve([
              "variant-button",
              u(b.name, p) ? "variant-button--selected" : "",
              h(b.name, p) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${b.name} ${p}`,
            disabled: !h(b.name, p),
            onClick: (w) => c(b.name, p)
          }, W(p), 11, V1))), 128))
        ]))
      ]))), 128)),
      i.value ? (k(), T("div", A1, [
        f("div", I1, [
          f("span", M1, W(g(i.value.price)), 1),
          i.value.compare_at_price > i.value.price ? (k(), T("span", P1, W(g(i.value.compare_at_price)), 1)) : H("", !0)
        ]),
        i.value.available ? (k(), T("div", R1, " In Stock ")) : (k(), T("div", L1, " Out of Stock "))
      ])) : H("", !0)
    ]));
  }
}, B1 = /* @__PURE__ */ Je(F1, [["__scopeId", "data-v-6eb16bf8"]]);
function j1(e) {
  return al() ? (Fc(e), !0) : !1;
}
function ta(e) {
  return typeof e == "function" ? e() : xo(e);
}
const H1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const U1 = Object.prototype.toString, q1 = (e) => U1.call(e) === "[object Object]", wo = () => {
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
  let t = 0, n, s = !0, o = wo, i, r, l, a, c;
  !Ae(e[0]) && typeof e[0] == "object" ? { delay: r, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [r, l = !0, a = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = wo);
  };
  return (h) => {
    const m = ta(r), v = Date.now() - t, g = () => i = h();
    return d(), m <= 0 ? (t = Date.now(), g()) : (v > m && (a || !s) ? (t = Date.now(), g()) : l && (i = new Promise(($, S) => {
      o = c ? S : $, n = setTimeout(() => {
        t = Date.now(), s = !0, $(g()), d();
      }, Math.max(0, m - v));
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
  const n = ta(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const If = H1 ? window : void 0;
function _r(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = If) : [t, n, s, o] = e, !t)
    return wo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [], r = () => {
    i.forEach((d) => d()), i.length = 0;
  }, l = (d, u, h, m) => (d.addEventListener(u, h, m), () => d.removeEventListener(u, h, m)), a = nn(
    () => [G1(t), ta(o)],
    ([d, u]) => {
      if (r(), !d)
        return;
      const h = q1(u) ? { ...u } : u;
      i.push(
        ...n.flatMap((m) => s.map((v) => l(d, m, v, h)))
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
    window: l = If
  } = t, a = Ns({ x: 0, y: 0 }), c = Ns({ x: 0, y: 0 }), d = ee(() => a.x - c.x), u = ee(() => a.y - c.y), { max: h, abs: m } = Math, v = ee(() => h(m(d.value), m(u.value)) >= n), g = U(!1), $ = ee(() => v.value ? m(d.value) > m(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), S = (y) => [y.touches[0].clientX, y.touches[0].clientY], b = (y, O) => {
    a.x = y, a.y = O;
  }, p = (y, O) => {
    c.x = y, c.y = O;
  };
  let w;
  const E = J1(l == null ? void 0 : l.document);
  r ? w = E ? { passive: !0 } : { capture: !1 } : w = E ? { passive: !1, capture: !0 } : { capture: !0 };
  const D = (y) => {
    g.value && (o == null || o(y, $.value)), g.value = !1;
  }, M = [
    _r(e, "touchstart", (y) => {
      if (y.touches.length !== 1)
        return;
      w.capture && !w.passive && y.preventDefault();
      const [O, A] = S(y);
      b(O, A), p(O, A), i == null || i(y);
    }, w),
    _r(e, "touchmove", (y) => {
      if (y.touches.length !== 1)
        return;
      const [O, A] = S(y);
      p(O, A), !g.value && v.value && (g.value = !0), g.value && (s == null || s(y));
    }, w),
    _r(e, ["touchend", "touchcancel"], D, w)
  ];
  return {
    isPassiveEventSupported: E,
    isSwiping: g,
    direction: $,
    coordsStart: a,
    coordsEnd: c,
    lengthX: d,
    lengthY: u,
    stop: () => M.forEach((y) => y())
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
  return e.addEventListener("x", wo, n), e.removeEventListener("x", wo), t;
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
    const t = e, n = U(null), s = U(!1), o = U(!1), i = U(!1), r = U(!1), l = U("#ffffff"), a = U(0), c = U(0), d = ee(() => $.value ? `${c.value}px` : "0");
    let u = 0;
    const h = ee(() => {
      const b = {};
      return $.value && s.value && (b.position = "fixed", b.top = "0", b.left = "0", b.right = "0", b.zIndex = "40", o.value ? b.transform = "translateY(-100%)" : b.transform = "translateY(0)"), r.value && (a.value === 0 ? b.backgroundColor = "transparent" : $.value && s.value && (b.backgroundColor = l.value)), b.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", b;
    }), m = () => {
      var w, E, D;
      const b = (E = (w = n.value) == null ? void 0 : w.getRootNode()) == null ? void 0 : E.host;
      if (!b) return;
      b.classList.add("sticky-header-wrapper");
      const p = (D = n.value) == null ? void 0 : D.querySelector(".main-header");
      p && r.value && (a.value === 0 ? (p.style.backgroundColor = "transparent", p.style.borderBottomColor = "transparent") : $.value && s.value && (p.style.backgroundColor = l.value, p.style.borderBottomColor = "#e5e7eb"));
    }, v = W1(() => {
      if (!$.value)
        return;
      const b = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = b, s.value = b > 0, i.value = b > 10, g.value && s.value) {
        const p = b - u;
        Math.abs(p) > 5 && (p > 0 && b > c.value ? o.value = !0 : p < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(b - u) > 1 && (u = b), m();
    }, 50), g = U(t.hideOnScrollDown), $ = U(t.sticky), S = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return ze(() => {
      if (n.value) {
        const b = n.value.getRootNode().host;
        if (b) {
          b.classList.add("sticky-header-wrapper"), r.value = b.classList.contains("header-transparent");
          const p = b.getAttribute("data-hide-on-scroll-down"), w = b.getAttribute("data-sticky"), E = b.getAttribute("data-sticky-bg");
          p !== null && (g.value = p === "true"), w !== null && ($.value = w === "true"), E !== null && (l.value = E || "#ffffff"), setTimeout(S, 100), window.addEventListener("resize", S);
        }
      }
      window.addEventListener("scroll", v, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), v();
    }), kt(() => {
      window.removeEventListener("scroll", v), window.removeEventListener("resize", S);
    }), (b, p) => (k(), T("div", X1, [
      $.value && s.value ? (k(), T("div", {
        key: 0,
        class: "header-placeholder",
        style: dt({ height: d.value })
      }, null, 4)) : H("", !0),
      f("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: Ve(["sticky-header-inner", {
          "is-fixed": $.value && s.value,
          "is-hidden": o.value,
          "has-shadow": i.value,
          "is-transparent": r.value && a.value === 0
        }]),
        style: dt(h.value)
      }, [
        Bn(b.$slots, "default")
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
    const t = e, n = U(null), s = U(!1), o = U(0), i = ee(() => {
      var d, u;
      return t.customer ? ((d = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : d.account) || "/account" : ((u = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : u.account_login) || "/account/login";
    }), r = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, l = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, a = async () => {
      var d;
      s.value = !s.value, s.value && (await Ls(), (d = n.value) == null || d.focus());
    }, c = () => {
      var d;
      (d = window.OrionCart) != null && d.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return ze(() => {
      document.addEventListener("cart:updated", c), c();
    }), kt(() => {
      document.removeEventListener("cart:updated", c);
    }), (d, u) => (k(), T("div", Z1, [
      f("div", eb, [
        f("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: r,
          "aria-label": "Open menu"
        }, u[0] || (u[0] = [
          f("svg", {
            class: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 6h16M4 12h16M4 18h16"
            })
          ], -1)
        ])),
        f("a", tb, [
          e.logoUrl ? (k(), T("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, nb)) : (k(), T("span", sb, W(e.shopName), 1))
        ]),
        f("nav", ob, [
          (k(!0), T(ae, null, Oe(e.navigationLinks, (h) => (k(), T("a", {
            key: h.url,
            href: h.url,
            class: "nav-link"
          }, W(h.title), 9, ib))), 128))
        ]),
        f("div", rb, [
          f("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: a,
            "aria-label": "Search"
          }, u[1] || (u[1] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            ], -1)
          ])),
          f("a", {
            href: i.value,
            class: "action-button",
            "aria-label": "Account"
          }, u[2] || (u[2] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              })
            ], -1)
          ]), 8, lb),
          f("button", {
            type: "button",
            class: "action-button relative",
            onClick: l,
            "aria-label": "Cart"
          }, [
            u[3] || (u[3] = f("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)),
            o.value > 0 ? (k(), T("span", ab, W(o.value), 1)) : H("", !0)
          ])
        ])
      ]),
      (k(), ft(Fn, { to: "body" }, [
        fe(xt, { name: "fade" }, {
          default: Fe(() => [
            s.value ? (k(), T("div", {
              key: 0,
              class: "search-overlay",
              onClick: Ut(a, ["self"])
            }, [
              f("div", cb, [
                f("form", ub, [
                  f("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: yi(a, ["esc"])
                  }, null, 544),
                  u[4] || (u[4] = f("button", {
                    type: "submit",
                    class: "search-submit"
                  }, [
                    f("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      f("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ])
                  ], -1))
                ]),
                f("button", {
                  type: "button",
                  class: "search-close",
                  onClick: a,
                  "aria-label": "Close search"
                }, u[5] || (u[5] = [
                  f("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    f("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ])
            ])) : H("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, Mf = /* @__PURE__ */ Je(db, [["__scopeId", "data-v-3988ea0d"]]), fb = { class: "site-footer" }, pb = {
  key: 0,
  class: "newsletter-section"
}, hb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, mb = { class: "newsletter-content" }, gb = { class: "newsletter-text" }, vb = { class: "text-xl font-semibold mb-2" }, yb = { class: "text-gray-600" }, bb = ["disabled"], _b = ["disabled"], Eb = { key: 0 }, wb = { key: 1 }, Nb = { class: "footer-main" }, xb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Sb = { class: "footer-grid" }, kb = { class: "footer-column" }, Cb = { class: "footer-heading" }, Ob = { class: "text-gray-600 mb-4" }, Tb = {
  key: 0,
  class: "social-links"
}, $b = ["href", "aria-label"], Db = { class: "footer-heading" }, Vb = { class: "footer-links" }, Ab = ["href"], Ib = {
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
    const t = U(""), n = U(!1), s = ee(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
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
        facebook: () => Xt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Xt("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        ]),
        twitter: () => Xt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Xt("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
        ]),
        instagram: () => Xt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Xt("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" })
        ]),
        youtube: () => Xt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Xt("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
        ])
      };
      return l[r.toLowerCase()] || l.facebook;
    };
    return (r, l) => (k(), T("footer", fb, [
      e.showNewsletter ? (k(), T("div", pb, [
        f("div", hb, [
          f("div", mb, [
            f("div", gb, [
              f("h3", vb, W(e.newsletterTitle), 1),
              f("p", yb, W(e.newsletterDescription), 1)
            ]),
            f("form", {
              onSubmit: Ut(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              yt(f("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, bb), [
                [Rn, t.value]
              ]),
              f("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (k(), T("span", wb, "Subscribing...")) : (k(), T("span", Eb, "Subscribe"))
              ], 8, _b)
            ], 32)
          ])
        ])
      ])) : H("", !0),
      f("div", Nb, [
        f("div", xb, [
          f("div", Sb, [
            f("div", kb, [
              f("h4", Cb, W(e.companyName), 1),
              f("p", Ob, W(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (k(), T("div", Tb, [
                (k(!0), T(ae, null, Oe(e.socialLinks, (a) => (k(), T("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (k(), ft(Nl(i(a.name))))
                ], 8, $b))), 128))
              ])) : H("", !0)
            ]),
            (k(!0), T(ae, null, Oe(e.footerColumns, (a) => (k(), T("div", {
              key: a.title,
              class: "footer-column"
            }, [
              f("h4", Db, W(a.title), 1),
              f("ul", Vb, [
                (k(!0), T(ae, null, Oe(a.links, (c) => (k(), T("li", {
                  key: c.title
                }, [
                  f("a", {
                    href: c.url,
                    class: "footer-link"
                  }, W(c.title), 9, Ab)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (k(), T("div", Ib, [
              l[4] || (l[4] = f("h4", { class: "footer-heading" }, "Contact", -1)),
              f("div", Mb, [
                e.contactEmail ? (k(), T("p", Pb, [
                  l[1] || (l[1] = f("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    f("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    })
                  ], -1)),
                  Be(" " + W(e.contactEmail), 1)
                ])) : H("", !0),
                e.contactPhone ? (k(), T("p", Rb, [
                  l[2] || (l[2] = f("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    f("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    })
                  ], -1)),
                  Be(" " + W(e.contactPhone), 1)
                ])) : H("", !0),
                e.contactAddress ? (k(), T("p", Lb, [
                  l[3] || (l[3] = f("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    f("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    f("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    })
                  ], -1)),
                  Be(" " + W(e.contactAddress), 1)
                ])) : H("", !0)
              ])
            ])) : H("", !0)
          ]),
          e.paymentMethods.length > 0 ? (k(), T("div", Fb, [
            l[5] || (l[5] = f("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            f("div", Bb, [
              (k(!0), T(ae, null, Oe(e.paymentMethods, (a) => (k(), T("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, jb))), 128))
            ])
          ])) : H("", !0),
          f("div", Hb, [
            f("p", Ub, " © " + W(s.value) + " " + W(e.companyName) + ". All rights reserved. ", 1),
            l[6] || (l[6] = f("div", { class: "footer-bottom-links" }, [
              f("a", {
                href: "/pages/privacy-policy",
                class: "footer-bottom-link"
              }, "Privacy Policy"),
              f("a", {
                href: "/pages/terms-of-service",
                class: "footer-bottom-link"
              }, "Terms of Service"),
              f("a", {
                href: "/pages/refund-policy",
                class: "footer-bottom-link"
              }, "Refund Policy")
            ], -1))
          ])
        ])
      ])
    ]));
  }
}, zb = /* @__PURE__ */ Je(qb, [["__scopeId", "data-v-799862f9"]]), Kb = { class: "product-card group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" }, Wb = ["href"], Gb = ["src", "alt"], Yb = {
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
    const n = e, s = t, o = U(""), i = U(!1), r = U(!1), l = U(!1), a = ee(() => n.product ? n.product : {
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
    }), c = ee(() => {
      const x = a.value.handle;
      return a.value.url || (x ? `/products/${x}` : "#");
    }), d = ee(() => {
      var x, y, O;
      return i.value && ((x = a.value.images) != null && x[1]) ? a.value.images[1].src : ((O = (y = a.value.images) == null ? void 0 : y[0]) == null ? void 0 : O.src) || a.value.featured_image || a.value.image || "/placeholder.jpg";
    }), u = ee(() => {
      var x;
      return (x = a.value.options) == null ? void 0 : x.some(
        (y) => {
          var O, A;
          return ((O = y.name) == null ? void 0 : O.toLowerCase().includes("color")) || ((A = y.name) == null ? void 0 : A.toLowerCase().includes("colour"));
        }
      );
    }), h = ee(() => {
      var y;
      const x = (y = a.value.options) == null ? void 0 : y.find(
        (O) => {
          var A, V;
          return ((A = O.name) == null ? void 0 : A.toLowerCase().includes("color")) || ((V = O.name) == null ? void 0 : V.toLowerCase().includes("colour"));
        }
      );
      return (x == null ? void 0 : x.values) || [];
    }), m = ee(() => a.value.price || 0), v = ee(() => a.value.compare_at_price || 0), g = ee(() => a.value.available && v.value > m.value), $ = ee(() => g.value ? Math.round((v.value - m.value) / v.value * 100) : 0), S = (x) => `$${(x / 100).toFixed(2)}`, b = (x) => {
      const y = {
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
      }, O = x.toLowerCase();
      return y[O] || `#${O.replace("#", "")}`;
    }, p = () => {
      var x;
      ((x = a.value.images) == null ? void 0 : x.length) > 1 && (i.value = !0);
    }, w = () => {
      i.value = !1;
    }, E = (x) => {
      o.value = x.value;
    }, D = () => {
      l.value = !l.value;
    }, M = async () => {
      var x, y, O, A;
      r.value = !0;
      try {
        const V = (y = (x = a.value.variants) == null ? void 0 : x[0]) == null ? void 0 : y.id;
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
        const K = await R.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((A = (O = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : O.settings) == null ? void 0 : A.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: V, quantity: 1 });
      } catch (V) {
        console.error("Error adding to cart:", V);
      } finally {
        r.value = !1;
      }
    };
    return (x, y) => (k(), T("div", Kb, [
      f("a", {
        href: c.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        d.value ? (k(), T("img", {
          key: 0,
          src: d.value,
          alt: a.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: p,
          onMouseleave: w
        }, null, 40, Gb)) : (k(), T("div", Yb, y[0] || (y[0] = [
          f("svg", {
            class: "w-20 h-20 text-gray-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            })
          ], -1)
        ]))),
        g.value ? (k(), T("div", Jb, " -" + W($.value) + "% ", 1)) : H("", !0),
        a.value.available ? (k(), T("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: Ut(D, ["prevent"])
        }, [
          (k(), T("svg", {
            class: Ve(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, y[1] || (y[1] = [
            f("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : H("", !0),
        a.value.available ? H("", !0) : (k(), T("div", Xb, y[2] || (y[2] = [
          f("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Wb),
      f("div", Qb, [
        u.value ? (k(), T("div", Zb, [
          f("div", e_, [
            (k(!0), T(ae, null, Oe(h.value, (O) => (k(), T("button", {
              key: O.value,
              onClick: (A) => E(O),
              title: O.value,
              class: Ve([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === O.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: dt({ backgroundColor: b(O.value) })
            }, [
              o.value === O.value ? (k(), T("span", n_, y[3] || (y[3] = [
                f("svg", {
                  class: "w-4 h-4 text-white drop-shadow",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  f("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd"
                  })
                ], -1)
              ]))) : H("", !0)
            ], 14, t_))), 128))
          ])
        ])) : H("", !0),
        a.value.vendor ? (k(), T("p", s_, W(a.value.vendor), 1)) : H("", !0),
        f("h3", o_, [
          f("a", {
            href: c.value,
            class: "hover:text-gray-700 transition-colors"
          }, W(a.value.title || "Untitled"), 9, i_)
        ]),
        f("div", r_, [
          f("div", l_, [
            (k(), T(ae, null, Oe(5, (O) => f("svg", {
              key: O,
              class: Ve(["w-4 h-4", O <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, y[4] || (y[4] = [
              f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          y[5] || (y[5] = f("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        f("div", a_, [
          f("span", c_, W(S(m.value)), 1),
          v.value > m.value ? (k(), T("span", u_, W(S(v.value)), 1)) : H("", !0)
        ]),
        a.value.available ? (k(), T("button", {
          key: 2,
          onClick: M,
          disabled: r.value,
          class: "w-full bg-black text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        }, [
          r.value ? H("", !0) : (k(), T("svg", f_, y[6] || (y[6] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          r.value ? (k(), T("svg", h_, y[7] || (y[7] = [
            f("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4"
            }, null, -1),
            f("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }, null, -1)
          ]))) : (k(), T("span", p_, "Add to Cart"))
        ], 8, d_)) : H("", !0)
      ])
    ]));
  }
}, g_ = { class: "collection-filters" }, v_ = { class: "lg:hidden mb-4" }, y_ = { class: "hidden lg:block space-y-6" }, b_ = { class: "filter-group" }, __ = { class: "filter-group" }, E_ = { class: "space-y-2" }, w_ = { class: "flex items-center" }, N_ = { class: "flex items-center" }, x_ = { class: "flex items-center" }, S_ = { class: "flex items-center" }, k_ = {
  key: 0,
  class: "filter-group"
}, C_ = { class: "space-y-2" }, O_ = ["value"], T_ = { class: "ml-2 text-sm" }, $_ = {
  key: 1,
  class: "filter-group"
}, D_ = { class: "space-y-2" }, V_ = ["value"], A_ = { class: "ml-2 text-sm" }, I_ = { class: "filter-group" }, M_ = { class: "flex items-center" }, P_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, R_ = { class: "h-full flex flex-col" }, L_ = { class: "flex items-center justify-between p-4 border-b" }, F_ = {
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
    const n = e, s = t, o = U("manual"), i = U([]), r = U([]), l = U([]), a = U(!1), c = U(!1), d = ee(() => {
      const b = /* @__PURE__ */ new Set();
      return n.products.forEach((p) => {
        p.product_type && b.add(p.product_type);
      }), Array.from(b).sort();
    }), u = ee(() => {
      const b = /* @__PURE__ */ new Set();
      return n.products.forEach((p) => {
        p.vendor && b.add(p.vendor);
      }), Array.from(b).sort();
    }), h = ee(() => i.value.length > 0 || r.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      S();
    }, v = () => {
      S();
    }, g = () => {
      i.value = [], r.value = [], l.value = [], a.value = !1, S();
    }, $ = () => {
      c.value = !1, S();
    }, S = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: i.value,
        types: r.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return (b, p) => (k(), T("div", g_, [
      f("div", v_, [
        f("button", {
          onClick: p[0] || (p[0] = (w) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        }, p[12] || (p[12] = [
          f("span", { class: "font-medium" }, "Filters", -1),
          f("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1)
        ]))
      ]),
      f("div", y_, [
        f("div", b_, [
          p[14] || (p[14] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
          yt(f("select", {
            "onUpdate:modelValue": p[1] || (p[1] = (w) => o.value = w),
            onChange: m,
            class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          }, p[13] || (p[13] = [
            Cs('<option value="manual" data-v-67473a91>Featured</option><option value="best-selling" data-v-67473a91>Best Selling</option><option value="title-ascending" data-v-67473a91>Alphabetically, A-Z</option><option value="title-descending" data-v-67473a91>Alphabetically, Z-A</option><option value="price-ascending" data-v-67473a91>Price, low to high</option><option value="price-descending" data-v-67473a91>Price, high to low</option><option value="created-ascending" data-v-67473a91>Date, old to new</option><option value="created-descending" data-v-67473a91>Date, new to old</option>', 8)
          ]), 544), [
            [Yi, o.value]
          ])
        ]),
        f("div", __, [
          p[19] || (p[19] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
          f("div", E_, [
            f("label", w_, [
              yt(f("input", {
                type: "checkbox",
                value: "0-50",
                "onUpdate:modelValue": p[2] || (p[2] = (w) => i.value = w),
                onChange: v,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Zt, i.value]
              ]),
              p[15] || (p[15] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
            ]),
            f("label", N_, [
              yt(f("input", {
                type: "checkbox",
                value: "50-100",
                "onUpdate:modelValue": p[3] || (p[3] = (w) => i.value = w),
                onChange: v,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Zt, i.value]
              ]),
              p[16] || (p[16] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
            ]),
            f("label", x_, [
              yt(f("input", {
                type: "checkbox",
                value: "100-200",
                "onUpdate:modelValue": p[4] || (p[4] = (w) => i.value = w),
                onChange: v,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Zt, i.value]
              ]),
              p[17] || (p[17] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
            ]),
            f("label", S_, [
              yt(f("input", {
                type: "checkbox",
                value: "200+",
                "onUpdate:modelValue": p[5] || (p[5] = (w) => i.value = w),
                onChange: v,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Zt, i.value]
              ]),
              p[18] || (p[18] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (k(), T("div", k_, [
          p[20] || (p[20] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          f("div", C_, [
            (k(!0), T(ae, null, Oe(d.value, (w) => (k(), T("label", {
              key: w,
              class: "flex items-center"
            }, [
              yt(f("input", {
                type: "checkbox",
                value: w,
                "onUpdate:modelValue": p[6] || (p[6] = (E) => r.value = E),
                onChange: v,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, O_), [
                [Zt, r.value]
              ]),
              f("span", T_, W(w), 1)
            ]))), 128))
          ])
        ])) : H("", !0),
        u.value.length > 0 ? (k(), T("div", $_, [
          p[21] || (p[21] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          f("div", D_, [
            (k(!0), T(ae, null, Oe(u.value, (w) => (k(), T("label", {
              key: w,
              class: "flex items-center"
            }, [
              yt(f("input", {
                type: "checkbox",
                value: w,
                "onUpdate:modelValue": p[7] || (p[7] = (E) => l.value = E),
                onChange: v,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, V_), [
                [Zt, l.value]
              ]),
              f("span", A_, W(w), 1)
            ]))), 128))
          ])
        ])) : H("", !0),
        f("div", I_, [
          p[23] || (p[23] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          f("label", M_, [
            yt(f("input", {
              type: "checkbox",
              "onUpdate:modelValue": p[8] || (p[8] = (w) => a.value = w),
              onChange: v,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [Zt, a.value]
            ]),
            p[22] || (p[22] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        h.value ? (k(), T("button", {
          key: 2,
          onClick: g,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : H("", !0)
      ]),
      (k(), ft(Fn, { to: "body" }, [
        c.value ? (k(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: p[11] || (p[11] = Ut((w) => c.value = !1, ["self"]))
        }, [
          f("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: p[9] || (p[9] = (w) => c.value = !1)
          }),
          f("div", P_, [
            f("div", R_, [
              f("div", L_, [
                p[25] || (p[25] = f("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                f("button", {
                  onClick: p[10] || (p[10] = (w) => c.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, p[24] || (p[24] = [
                  f("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    f("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              p[26] || (p[26] = f("div", { class: "flex-1 overflow-y-auto p-4 space-y-6" }, null, -1)),
              f("div", { class: "p-4 border-t" }, [
                f("button", {
                  onClick: $,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : H("", !0)
      ]))
    ]));
  }
}, B_ = /* @__PURE__ */ Je(F_, [["__scopeId", "data-v-67473a91"]]), j_ = { class: "collection-grid" }, H_ = {
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
    const t = e, n = U(!1), s = U(!1), o = U(1), i = U(t.productsPerPage), r = U("manual"), l = U({}), a = U(null), c = U(null), d = ee(() => {
      var O, A, V;
      let x = [...t.products];
      switch (l.value.inStockOnly && (x = x.filter((R) => R.available)), ((O = l.value.priceRanges) == null ? void 0 : O.length) > 0 && (x = x.filter((R) => {
        const K = R.price / 100;
        return l.value.priceRanges.some((te) => te === "0-50" ? K < 50 : te === "50-100" ? K >= 50 && K < 100 : te === "100-200" ? K >= 100 && K < 200 : te === "200+" ? K >= 200 : !1);
      })), ((A = l.value.types) == null ? void 0 : A.length) > 0 && (x = x.filter((R) => l.value.types.includes(R.product_type))), ((V = l.value.vendors) == null ? void 0 : V.length) > 0 && (x = x.filter((R) => l.value.vendors.includes(R.vendor))), l.value.sort || r.value) {
        case "price-ascending":
          x.sort((R, K) => R.price - K.price);
          break;
        case "price-descending":
          x.sort((R, K) => K.price - R.price);
          break;
        case "title-ascending":
          x.sort((R, K) => R.title.localeCompare(K.title));
          break;
        case "title-descending":
          x.sort((R, K) => K.title.localeCompare(R.title));
          break;
        case "created-ascending":
          x.sort((R, K) => new Date(R.created_at) - new Date(K.created_at));
          break;
        case "created-descending":
          x.sort((R, K) => new Date(K.created_at) - new Date(R.created_at));
          break;
      }
      return x;
    }), u = ee(() => {
      if (t.enableInfiniteScroll)
        return d.value.slice(0, i.value);
      const x = (o.value - 1) * t.productsPerPage, y = x + t.productsPerPage;
      return d.value.slice(x, y);
    }), h = ee(() => Math.ceil(d.value.length / t.productsPerPage)), m = ee(() => i.value < d.value.length), v = ee(() => Math.max(0, d.value.length - i.value)), g = ee(() => {
      const x = [], y = h.value, O = o.value;
      if (y <= 7)
        for (let A = 1; A <= y; A++)
          x.push(A);
      else if (O <= 3) {
        for (let A = 1; A <= 5; A++)
          x.push(A);
        x.push("..."), x.push(y);
      } else if (O >= y - 2) {
        x.push(1), x.push("...");
        for (let A = y - 4; A <= y; A++)
          x.push(A);
      } else {
        x.push(1), x.push("...");
        for (let A = O - 1; A <= O + 1; A++)
          x.push(A);
        x.push("..."), x.push(y);
      }
      return x.filter((A) => A === "..." || A >= 1 && A <= y);
    }), $ = (x) => {
      l.value = x, o.value = 1, i.value = t.productsPerPage;
    }, S = () => {
      o.value = 1, i.value = t.productsPerPage;
    }, b = () => {
      s.value = !0, setTimeout(() => {
        i.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, p = async (x) => {
      var O;
      const y = new FormData();
      y.append("id", x.variants[0].id), y.append("quantity", "1"), await ((O = window.OrionCart) == null ? void 0 : O.addItem(y)), console.log("Added to cart:", x.title);
    }, w = (x) => {
      a.value = x;
    }, E = () => {
      a.value = null;
    };
    let D = null;
    const M = () => {
      !t.enableInfiniteScroll || !c.value || (D = new IntersectionObserver(
        (x) => {
          x[0].isIntersecting && m.value && !s.value && b();
        },
        { threshold: 0.1 }
      ), D.observe(c.value));
    };
    return ze(() => {
      M();
    }), kt(() => {
      D && D.disconnect();
    }), nn(() => t.enableInfiniteScroll, () => {
      M();
    }), (x, y) => (k(), T("div", j_, [
      e.showHeader ? (k(), T("div", H_, [
        f("h1", U_, W(e.collectionTitle), 1),
        e.collectionDescription ? (k(), T("div", q_, W(e.collectionDescription), 1)) : H("", !0),
        f("div", z_, [
          f("p", K_, W(d.value.length) + " products ", 1),
          f("div", W_, [
            yt(f("select", {
              "onUpdate:modelValue": y[0] || (y[0] = (O) => r.value = O),
              onChange: S,
              class: "px-3 py-2 border border-secondary-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, y[5] || (y[5] = [
              Cs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Yi, r.value]
            ])
          ])
        ])
      ])) : H("", !0),
      f("div", G_, [
        f("aside", Y_, [
          f("collection-filters", {
            products: e.products,
            onUpdateFilters: $
          }, null, 40, J_)
        ]),
        f("div", X_, [
          n.value ? (k(), T("div", Q_, [
            (k(), T(ae, null, Oe(6, (O) => f("div", {
              key: O,
              class: "animate-pulse"
            }, y[6] || (y[6] = [
              f("div", { class: "bg-secondary-200 rounded-lg aspect-[3/4]" }, null, -1),
              f("div", { class: "mt-4 space-y-2" }, [
                f("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                f("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ])) : d.value.length === 0 ? (k(), T("div", Z_, y[7] || (y[7] = [
            f("svg", {
              class: "mx-auto h-12 w-12 text-secondary-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            ], -1),
            f("h3", { class: "mt-2 text-sm font-medium text-secondary-900" }, "No products found", -1),
            f("p", { class: "mt-1 text-sm text-secondary-500" }, "Try adjusting your filters", -1)
          ]))) : (k(), T("div", eE, [
            (k(!0), T(ae, null, Oe(u.value, (O) => (k(), T("product-card", {
              key: O.id,
              product: O,
              onQuickAdd: p,
              onQuickView: w
            }, null, 40, tE))), 128))
          ])),
          !n.value && d.value.length > 0 ? (k(), T("div", nE, [
            e.enableInfiniteScroll ? (k(), T("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (k(), T("div", sE, y[8] || (y[8] = [
                f("svg", {
                  class: "animate-spin h-5 w-5 text-primary-600 mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  f("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  f("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                Be(" Loading more products... ", -1)
              ]))) : H("", !0)
            ], 512)) : m.value ? (k(), T("div", oE, [
              f("button", {
                onClick: b,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                s.value ? (k(), T("span", rE, "Loading...")) : (k(), T("span", lE, "Load More (" + W(v.value) + " remaining)", 1))
              ], 8, iE)
            ])) : H("", !0),
            !e.enableInfiniteScroll && h.value > 1 ? (k(), T("nav", aE, [
              f("div", cE, [
                f("button", {
                  onClick: y[1] || (y[1] = (O) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, uE),
                f("button", {
                  onClick: y[2] || (y[2] = (O) => o.value++),
                  disabled: o.value === h.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, dE)
              ]),
              f("div", fE, [
                f("div", null, [
                  f("nav", pE, [
                    f("button", {
                      onClick: y[3] || (y[3] = (O) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, y[9] || (y[9] = [
                      f("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        f("path", {
                          "fill-rule": "evenodd",
                          d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, hE),
                    (k(!0), T(ae, null, Oe(g.value, (O) => (k(), T("button", {
                      key: O,
                      onClick: (A) => o.value = O,
                      class: Ve([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === O ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, W(O), 11, mE))), 128)),
                    f("button", {
                      onClick: y[4] || (y[4] = (O) => o.value++),
                      disabled: o.value === h.value,
                      class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, y[10] || (y[10] = [
                      f("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        f("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, gE)
                  ])
                ])
              ])
            ])) : H("", !0)
          ])) : H("", !0)
        ])
      ]),
      (k(), ft(Fn, { to: "body" }, [
        a.value ? (k(), T("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: Ut(E, ["self"])
        }, [
          f("div", vE, [
            f("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: E
            }),
            f("div", yE, [
              f("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                f("button", {
                  onClick: E,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, y[11] || (y[11] = [
                  f("svg", {
                    class: "h-6 w-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    f("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              f("div", bE, [
                f("h3", _E, W(a.value.title), 1),
                y[12] || (y[12] = f("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : H("", !0)
      ]))
    ]));
  }
}, wE = { class: "product-gallery" }, NE = { class: "main-image-wrapper" }, xE = ["src", "alt"], SE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, kE = {
  key: 0,
  class: "thumbnails-wrapper"
}, CE = ["disabled"], OE = ["onClick", "aria-label"], TE = ["src", "alt"], $E = ["disabled"], DE = {
  key: 1,
  class: "swiper-dots"
}, VE = ["onClick", "aria-label"], AE = ["src", "alt"], IE = { class: "lightbox-counter" }, ME = 80, Uo = 4, Oc = 2, PE = {
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
    const t = e, n = U(0), s = U(!1), o = U(!1), i = U(!1), r = U(!1), l = U(0), a = U(null), c = U(0), d = U(0), u = U({}), h = ee(() => t.images.map((M) => {
      if (M.src)
        return M;
      const x = M.url || M;
      return {
        src: `${x}?width=${t.imageTransformWidth}`,
        thumbnail: `${x}?width=${t.thumbnailWidth}`,
        alt: M.alt || t.productTitle
      };
    })), m = ee(() => h.value[n.value] || { src: "", alt: "" }), v = ee(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), g = ee(() => {
      const x = c.value / u.value.width * 100, y = d.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * Oc}px ${u.value.height * Oc}px`,
        backgroundPosition: `${x}% ${y}%`
      };
    }), $ = (M) => {
      s.value = !0, n.value = M;
    }, S = (M) => {
      M === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        h.value.length - Uo,
        l.value + 1
      );
    }, b = (M) => {
      n.value = M, o.value = !0, document.body.style.overflow = "hidden";
    }, p = () => {
      o.value = !1, document.body.style.overflow = "";
    }, w = (M) => {
      M === "prev" ? n.value = n.value > 0 ? n.value - 1 : h.value.length - 1 : n.value = n.value < h.value.length - 1 ? n.value + 1 : 0;
    }, E = (M) => {
      const x = M.currentTarget.getBoundingClientRect();
      u.value = x, c.value = M.clientX - x.left, d.value = M.clientY - x.top;
    }, { lengthX: D } = Y1(
      a,
      {
        onSwipeEnd() {
          D.value > 50 ? S("prev") : D.value < -50 && S("next");
        }
      }
    );
    return ze(() => {
      r.value = window.innerWidth < 768;
      const M = () => {
        r.value = window.innerWidth < 768;
      }, x = (y) => {
        o.value && (y.key === "Escape" && p(), y.key === "ArrowLeft" && w("prev"), y.key === "ArrowRight" && w("next"));
      };
      window.addEventListener("resize", M), window.addEventListener("keydown", x), kt(() => {
        window.removeEventListener("resize", M), window.removeEventListener("keydown", x);
      });
    }), (M, x) => (k(), T("div", wE, [
      f("div", NE, [
        f("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: x[1] || (x[1] = (y) => b(n.value)),
          onMouseenter: x[2] || (x[2] = (y) => i.value = !0),
          onMouseleave: x[3] || (x[3] = (y) => i.value = !1),
          onMousemove: E
        }, [
          f("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Ve(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: x[0] || (x[0] = (y) => s.value = !1)
          }, null, 42, xE),
          s.value ? (k(), T("div", SE, x[9] || (x[9] = [
            f("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : H("", !0),
          x[10] || (x[10] = f("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
            f("svg", {
              class: "w-5 h-5 text-gray-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
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
            style: dt(v.value)
          }, null, 4)) : H("", !0)
        ], 32),
        i.value && !r.value ? (k(), T("div", {
          key: 0,
          class: "zoom-preview",
          style: dt(g.value)
        }, null, 4)) : H("", !0)
      ]),
      h.value.length > 1 ? (k(), T("div", kE, [
        h.value.length > Uo ? (k(), T("button", {
          key: 0,
          onClick: x[4] || (x[4] = (y) => S("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, x[11] || (x[11] = [
          f("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })
          ], -1)
        ]), 8, CE)) : H("", !0),
        f("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          f("div", {
            class: "thumbnails-track",
            style: dt({ transform: `translateX(-${l.value * (ME + 8)}px)` })
          }, [
            (k(!0), T(ae, null, Oe(h.value, (y, O) => (k(), T("button", {
              key: O,
              onClick: (A) => $(O),
              class: Ve(["thumbnail", { active: O === n.value }]),
              "aria-label": `View image ${O + 1}`
            }, [
              f("img", {
                src: y.thumbnail || y.src,
                alt: y.alt,
                class: "w-full h-full object-contain"
              }, null, 8, TE)
            ], 10, OE))), 128))
          ], 4)
        ], 512),
        h.value.length > Uo ? (k(), T("button", {
          key: 1,
          onClick: x[5] || (x[5] = (y) => S("next")),
          disabled: l.value >= h.value.length - Uo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, x[12] || (x[12] = [
          f("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 8, $E)) : H("", !0)
      ])) : H("", !0),
      h.value.length > 1 && r.value ? (k(), T("div", DE, [
        (k(!0), T(ae, null, Oe(h.value, (y, O) => (k(), T("button", {
          key: O,
          onClick: (A) => $(O),
          class: Ve(["swiper-dot", { active: O === n.value }]),
          "aria-label": `Go to image ${O + 1}`
        }, null, 10, VE))), 128))
      ])) : H("", !0),
      (k(), ft(Fn, { to: "body" }, [
        o.value ? (k(), T("div", {
          key: 0,
          class: "lightbox",
          onClick: p
        }, [
          f("button", {
            onClick: p,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, x[13] || (x[13] = [
            f("svg", {
              class: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ])),
          h.value.length > 1 ? (k(), T("button", {
            key: 0,
            onClick: x[6] || (x[6] = Ut((y) => w("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, x[14] || (x[14] = [
            f("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ]))) : H("", !0),
          f("div", {
            class: "lightbox-image-wrapper",
            onClick: x[7] || (x[7] = Ut(() => {
            }, ["stop"]))
          }, [
            f("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, AE)
          ]),
          h.value.length > 1 ? (k(), T("button", {
            key: 1,
            onClick: x[8] || (x[8] = Ut((y) => w("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, x[15] || (x[15] = [
            f("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ]))) : H("", !0),
          f("div", IE, W(n.value + 1) + " / " + W(h.value.length), 1)
        ])) : H("", !0)
      ]))
    ]));
  }
}, RE = /* @__PURE__ */ Je(PE, [["__scopeId", "data-v-a7c1d2a3"]]), LE = { class: "product-info" }, FE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, BE = {
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
    var $;
    const n = e, s = t, o = U(n.product.selected_or_first_available_variant || (($ = n.product.variants) == null ? void 0 : $[0]) || {}), i = U(1), r = U(!1), l = U(!1), a = ee(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = ee(() => {
      var S;
      return (S = n.product.options) == null ? void 0 : S.some(
        (b) => b.name.toLowerCase() === "size" || b.name.toLowerCase() === "taille"
      );
    }), d = (S) => `$${(S / 100).toFixed(2)}`, u = (S) => {
      o.value = S, s("variant-change", S);
      const b = new URL(window.location);
      b.searchParams.set("variant", S.id), window.history.replaceState({}, "", b);
    }, h = async () => {
      var b;
      r.value = !0;
      const S = new FormData();
      S.append("id", o.value.id), S.append("quantity", i.value);
      try {
        await ((b = window.OrionCart) == null ? void 0 : b.addItem(S));
        const p = event.target, w = p.textContent;
        p.textContent = "✓ Added to Cart", setTimeout(() => {
          p.textContent = w;
        }, 2e3);
      } catch (p) {
        console.error("Failed to add to cart:", p), alert("Failed to add item to cart. Please try again.");
      } finally {
        r.value = !1;
      }
    }, m = async () => {
      await h(), window.location.href = "/checkout";
    }, v = (S) => {
      const b = window.location.href, p = n.product.title, w = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(b)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(b)}&text=${encodeURIComponent(p)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(b)}&description=${encodeURIComponent(p)}`
      };
      w[S] && window.open(w[S], "_blank", "width=600,height=400");
    }, g = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (S) {
        console.error("Failed to copy link:", S);
      }
    };
    return nn(() => n.product.selected_variant, (S) => {
      S && (o.value = S);
    }), (S, b) => (k(), T("div", LE, [
      f("h1", FE, W(e.product.title), 1),
      e.product.vendor ? (k(), T("p", BE, " by " + W(e.product.vendor), 1)) : H("", !0),
      f("div", jE, [
        f("div", HE, [
          f("span", UE, W(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (k(), T("span", qE, W(d(o.value.compare_at_price)), 1)) : H("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (k(), T("p", zE, " Save " + W(d(o.value.compare_at_price - o.value.price)) + " (" + W(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : H("", !0)
      ]),
      e.product.has_only_default_variant ? H("", !0) : (k(), T("div", KE, [
        f("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, WE)
      ])),
      f("form", {
        onSubmit: Ut(h, ["prevent"]),
        class: "mb-8"
      }, [
        f("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, GE),
        f("div", YE, [
          b[4] || (b[4] = f("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          yt(f("quantity-selector", {
            "onUpdate:modelValue": b[0] || (b[0] = (p) => i.value = p),
            min: 1,
            max: a.value
          }, null, 8, JE), [
            [Rn, i.value]
          ])
        ]),
        f("div", XE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (k(), T("p", ZE, " Only " + W(o.value.inventory_quantity) + " left in stock ", 1)) : (k(), T("p", e2, " ✓ In Stock ")) : (k(), T("p", QE, " Out of Stock "))
        ]),
        f("div", t2, [
          f("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || r.value
          }, [
            r.value ? (k(), T("span", s2, b[5] || (b[5] = [
              f("svg", {
                class: "animate-spin h-5 w-5",
                viewBox: "0 0 24 24"
              }, [
                f("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4",
                  fill: "none"
                }),
                f("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1),
              Be(" Adding... ", -1)
            ]))) : o.value.available ? (k(), T("span", i2, " Add to Cart ")) : (k(), T("span", o2, " Sold Out "))
          ], 8, n2),
          e.showBuyNow ? (k(), ft(ws, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Fe(() => b[6] || (b[6] = [
              Be(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : H("", !0)
        ])
      ], 32),
      e.product.description ? (k(), T("div", r2, [
        b[7] || (b[7] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        f("div", {
          innerHTML: e.product.description
        }, null, 8, l2)
      ])) : H("", !0),
      f("div", a2, [
        b[10] || (b[10] = Cs('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (k(), T("details", c2, [
          b[8] || (b[8] = f("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
            f("span", { class: "font-medium" }, "Care Instructions"),
            f("svg", {
              class: "w-5 h-5 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          f("div", {
            class: "py-4 text-sm text-gray-600",
            innerHTML: e.product.care_instructions
          }, null, 8, u2)
        ])) : H("", !0),
        c.value ? (k(), T("details", d2, b[9] || (b[9] = [
          Cs('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : H("", !0)
      ]),
      f("div", f2, [
        b[15] || (b[15] = f("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        f("div", p2, [
          f("button", {
            onClick: b[1] || (b[1] = (p) => v("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, b[11] || (b[11] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          f("button", {
            onClick: b[2] || (b[2] = (p) => v("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, b[12] || (b[12] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          f("button", {
            onClick: b[3] || (b[3] = (p) => v("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, b[13] || (b[13] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          f("button", {
            onClick: g,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            b[14] || (b[14] = f("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              })
            ], -1)),
            l.value ? (k(), T("span", h2, " Link copied! ")) : H("", !0)
          ])
        ])
      ])
    ]));
  }
}, g2 = /* @__PURE__ */ Je(m2, [["__scopeId", "data-v-9e2c3b5c"]]), v2 = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, y2 = { class: "space-y-3 mb-4" }, b2 = { class: "flex justify-between text-sm" }, _2 = { class: "text-gray-600" }, E2 = { class: "font-medium text-gray-900" }, w2 = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, N2 = {
  key: 1,
  class: "flex justify-between text-sm"
}, x2 = { class: "text-gray-900" }, S2 = {
  key: 2,
  class: "flex justify-between text-sm"
}, k2 = { class: "text-gray-900" }, C2 = { class: "border-t pt-4 mb-6" }, O2 = { class: "flex justify-between items-baseline" }, T2 = { class: "text-right" }, $2 = { class: "text-xl font-bold text-gray-900" }, D2 = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, V2 = { class: "mb-6" }, A2 = { class: "group" }, I2 = { class: "mt-3" }, M2 = ["disabled"], P2 = ["disabled"], R2 = {
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
    const n = e, s = t, o = U(""), i = U(""), r = U(""), l = U(!1), a = U(!1), c = ee(() => n.cart.item_count || 0), d = ee(() => n.cart.total_price || 0), u = ee(() => n.cart.original_total_price || n.cart.total_price || 0), h = ee(() => n.cart.total_discount || 0), m = ee(() => d.value >= 5e3 ? 0 : 500), v = ee(() => Math.round(d.value * 0.1)), g = (b) => `$${(b / 100).toFixed(2)}`, $ = async () => {
      var b;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, i.value = "", r.value = "";
        try {
          const p = new FormData();
          p.append("discount_code", o.value);
          const w = await fetch("/discount/apply", {
            method: "POST",
            body: p
          });
          if (w.ok)
            r.value = "Promo code applied successfully!", o.value = "", await ((b = window.OrionCart) == null ? void 0 : b.fetchCart());
          else {
            const E = await w.json();
            i.value = E.message || "Invalid promo code";
          }
        } catch (p) {
          console.error("Failed to apply promo code:", p), i.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, S = async () => {
      if (!(c.value === 0 || a.value)) {
        a.value = !0;
        try {
          s("checkout"), window.location.href = "/checkout";
        } catch (b) {
          console.error("Failed to proceed to checkout:", b), alert("Failed to proceed to checkout. Please try again.");
        } finally {
          a.value = !1;
        }
      }
    };
    return (b, p) => (k(), T("div", v2, [
      p[8] || (p[8] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      f("div", y2, [
        f("div", b2, [
          f("span", _2, "Subtotal (" + W(c.value) + " " + W(c.value === 1 ? "item" : "items") + ")", 1),
          f("span", E2, W(g(u.value)), 1)
        ]),
        h.value > 0 ? (k(), T("div", w2, [
          p[1] || (p[1] = f("span", { class: "flex items-center gap-1" }, [
            f("svg", {
              class: "w-4 h-4",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              f("path", {
                "fill-rule": "evenodd",
                d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                "clip-rule": "evenodd"
              })
            ]),
            Be(" Discounts ")
          ], -1)),
          f("span", null, "-" + W(g(h.value)), 1)
        ])) : H("", !0),
        e.showShipping ? (k(), T("div", N2, [
          p[2] || (p[2] = f("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          f("span", x2, W(m.value === 0 ? "Free" : g(m.value)), 1)
        ])) : H("", !0),
        e.showTax ? (k(), T("div", S2, [
          p[3] || (p[3] = f("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          f("span", k2, W(g(v.value)), 1)
        ])) : H("", !0)
      ]),
      f("div", C2, [
        f("div", O2, [
          p[4] || (p[4] = f("span", { class: "text-lg font-semibold" }, "Total", -1)),
          f("div", T2, [
            f("span", $2, W(g(d.value)), 1),
            h.value > 0 ? (k(), T("p", D2, " You saved " + W(g(h.value)) + "! ", 1)) : H("", !0)
          ])
        ])
      ]),
      f("div", V2, [
        f("details", A2, [
          p[5] || (p[5] = f("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
            f("span", null, "Have a promo code?"),
            f("svg", {
              class: "w-4 h-4 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          f("div", I2, [
            f("form", {
              onSubmit: Ut($, ["prevent"]),
              class: "flex gap-2"
            }, [
              yt(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (w) => o.value = w),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, M2), [
                [Rn, o.value]
              ]),
              f("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !o.value.trim() || l.value
              }, W(l.value ? "Applying..." : "Apply"), 9, P2)
            ], 32),
            i.value ? (k(), T("p", R2, W(i.value), 1)) : H("", !0),
            r.value ? (k(), T("p", L2, W(r.value), 1)) : H("", !0)
          ])
        ])
      ]),
      f("button", {
        onClick: S,
        class: "w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        disabled: c.value === 0 || a.value
      }, [
        a.value ? (k(), T("span", B2, p[6] || (p[6] = [
          f("svg", {
            class: "animate-spin h-5 w-5",
            viewBox: "0 0 24 24"
          }, [
            f("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4",
              fill: "none"
            }),
            f("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
          ], -1),
          Be(" Processing... ", -1)
        ]))) : (k(), T("span", j2, p[7] || (p[7] = [
          Be(" Proceed to Checkout ", -1),
          f("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ], -1)
        ])))
      ], 8, F2),
      p[9] || (p[9] = Cs('<div class="mt-6 space-y-2" data-v-d638da26><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-d638da26></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-d638da26></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-d638da26></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d638da26></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-d638da26><p class="text-xs text-gray-600 mb-2" data-v-d638da26>We accept</p><div class="flex gap-2" data-v-d638da26><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-d638da26></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#EB001B" data-v-d638da26></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-d638da26></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-d638da26></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-d638da26></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#253B80" data-v-d638da26></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-d638da26></path></svg></div></div>', 2))
    ]));
  }
}, U2 = /* @__PURE__ */ Je(H2, [["__scopeId", "data-v-d638da26"]]), q2 = { class: "slideshow-banner" }, z2 = {
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
    const t = e, n = U(0), s = U([]), o = U(null), i = ee(() => t.autoRotate === !0 || t.autoRotate === "true"), r = ee(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const g = document.querySelector(".slideshow-prev"), $ = document.querySelector(".slideshow-next"), S = document.querySelectorAll(".slide-indicator");
      g && g.addEventListener("click", d), $ && $.addEventListener("click", c), S.forEach((b, p) => {
        b.addEventListener("click", () => a(p));
      }), i.value && u();
    }, a = (g) => {
      var b, p, w, E;
      if (g === n.value || !s.value.length) return;
      (b = s.value[n.value]) == null || b.classList.remove("opacity-100"), (p = s.value[n.value]) == null || p.classList.add("opacity-0");
      const $ = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      $ == null || $.classList.remove("opacity-100"), $ == null || $.classList.add("opacity-50"), n.value = g, (w = s.value[n.value]) == null || w.classList.remove("opacity-0"), (E = s.value[n.value]) == null || E.classList.add("opacity-100");
      const S = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      S == null || S.classList.remove("opacity-50"), S == null || S.classList.add("opacity-100");
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
    }, v = () => {
      i.value && u();
    };
    return ze(() => {
      setTimeout(l, 100);
      const g = document.querySelector(".slideshow-wrapper");
      g && (g.addEventListener("mouseenter", m), g.addEventListener("mouseleave", v));
    }), kt(() => {
      h();
      const g = document.querySelector(".slideshow-wrapper");
      g && (g.removeEventListener("mouseenter", m), g.removeEventListener("mouseleave", v));
    }), (g, $) => (k(), T("div", q2, [
      Bn(g.$slots, "default", {}, void 0, !0)
    ]));
  }
}, K2 = /* @__PURE__ */ Je(z2, [["__scopeId", "data-v-8690c751"]]), W2 = { class: "testimonials-carousel relative" }, G2 = {
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
    const t = e, n = U(0), s = U([]), o = U(null), i = U(null), r = ee(() => t.autoRotate === !0 || t.autoRotate === "true"), l = ee(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), i.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const E = document.querySelector(".testimonials-prev"), D = document.querySelector(".testimonials-next"), M = document.querySelectorAll(".testimonial-indicator");
      E && E.addEventListener("click", u), D && D.addEventListener("click", d), M.forEach((x, y) => {
        x.addEventListener("click", () => c(y));
      }), r.value && h();
    }, c = (E) => {
      if (E === n.value || !s.value.length || !i.value) return;
      n.value = E;
      const M = -s.value[0].offsetWidth * n.value;
      i.value.style.transform = `translateX(${M}px)`, document.querySelectorAll(".testimonial-indicator").forEach((y, O) => {
        O === n.value ? (y.classList.remove("bg-gray-300"), y.classList.add("bg-red-600")) : (y.classList.remove("bg-red-600"), y.classList.add("bg-gray-300"));
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
    }, v = () => {
      r.value && m();
    }, g = () => {
      r.value && h();
    };
    let $ = 0, S = 0;
    const b = (E) => {
      $ = E.changedTouches[0].screenX;
    }, p = (E) => {
      S = E.changedTouches[0].screenX, w();
    }, w = () => {
      const D = $ - S;
      Math.abs(D) > 50 && (D > 0 ? d() : u());
    };
    return ze(() => {
      setTimeout(a, 100);
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.addEventListener("mouseenter", v), E.addEventListener("mouseleave", g), E.addEventListener("touchstart", b), E.addEventListener("touchend", p));
    }), kt(() => {
      m();
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.removeEventListener("mouseenter", v), E.removeEventListener("mouseleave", g), E.removeEventListener("touchstart", b), E.removeEventListener("touchend", p));
    }), (E, D) => (k(), T("div", W2, [
      Bn(E.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Y2 = /* @__PURE__ */ Je(G2, [["__scopeId", "data-v-276cc4e8"]]), J2 = { class: "video-player relative w-full h-full" }, X2 = {
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
    const t = e, n = U(!1), s = U(""), o = U(""), i = ee(() => t.autoplay === !0 || t.autoplay === "true"), r = ee(() => t.muted === !0 || t.muted === "true"), l = ee(() => t.controls === !0 || t.controls === "true"), a = ee(() => `${s.value} video player`), c = ee(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const v = i.value ? "1" : "0", g = r.value ? "1" : "0", $ = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${v}&mute=${g}&controls=${$}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${v}&muted=${g}&controls=${$}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
      if (!m) return { type: "", id: "" };
      const v = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const $ of v) {
        const S = m.match($);
        if (S)
          return { type: "youtube", id: S[1] };
      }
      const g = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const $ of g) {
        const S = m.match($);
        if (S)
          return { type: "vimeo", id: S[1] };
      }
      return { type: "", id: "" };
    }, u = () => {
      o.value && s.value && (n.value = !0);
    }, h = () => {
      i.value && o.value && s.value && (n.value = !0);
    };
    return ze(() => {
      const m = d(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const v = document.querySelector(".play-button");
      v && v.addEventListener("click", u), h();
    }), (m, v) => (k(), T("div", J2, [
      n.value ? (k(), T("div", X2, [
        f("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, Q2)
      ])) : (k(), T("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        Bn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, ew = /* @__PURE__ */ Je(Z2, [["__scopeId", "data-v-540fecb2"]]), tw = { class: "password-modal" }, nw = {
  __name: "PasswordModal",
  setup(e) {
    const t = U(!1), n = () => {
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
    ze(() => {
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
    return ze(() => {
      a(() => {
        l();
      });
    }), (c, d) => (k(), T("div", tw, [
      Bn(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, sw = /* @__PURE__ */ Je(nw, [["__scopeId", "data-v-075988c6"]]), ow = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, iw = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, rw = { class: "bg-white shadow-xl transition-shadow duration-300" }, lw = { class: "max-w-4xl mx-auto" }, aw = { class: "relative" }, cw = { class: "flex items-center px-4 py-6 sm:px-6 border-b border-gray-200" }, uw = { class: "flex-1 relative" }, dw = { class: "absolute inset-y-0 right-0 flex items-center pr-3" }, fw = {
  key: 0,
  class: "w-5 h-5 text-gray-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, pw = {
  key: 1,
  class: "animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"
}, hw = {
  key: 0,
  class: "border-t border-gray-200"
}, mw = { class: "max-h-96 overflow-y-auto" }, gw = {
  key: 0,
  class: "p-4"
}, vw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, yw = ["href"], bw = ["src", "alt"], _w = { class: "flex-1 min-w-0" }, Ew = { class: "text-sm font-medium text-gray-900 truncate group-hover:text-red-600" }, ww = { class: "text-sm text-gray-500" }, Nw = {
  key: 1,
  class: "p-4 border-t"
}, xw = { class: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, Sw = ["href"], kw = {
  key: 2,
  class: "p-8 text-center"
}, Cw = { class: "mt-2 text-sm text-gray-500" }, Ow = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-3 bg-gray-50"
}, Tw = ["href"], $w = {
  __name: "SearchOverlay",
  setup(e) {
    const t = U(!1), n = U(""), s = U(null), o = U(!1), i = U({
      products: [],
      collections: []
    }), r = U(null), l = ee(() => {
      var $;
      return (($ = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : $.search) || "/search";
    }), a = ee(() => n.value.length > 0), c = ($) => {
      var E, D;
      if (!$ && $ !== 0) return "$0.00";
      const S = ((E = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : E.money_format) || "${{amount}}", b = ((D = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : D.current) || "en", w = new Intl.NumberFormat(b, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat($));
      return S.replace("{{amount}}", w);
    }, d = async () => {
      var $;
      t.value = !0, document.body.style.overflow = "hidden", await Ls(), ($ = s.value) == null || $.focus();
    }, u = () => {
      t.value = !1, document.body.style.overflow = "", n.value = "", i.value = { products: [], collections: [] };
    }, h = () => {
      if (clearTimeout(r.value), n.value.length < 2) {
        i.value = { products: [], collections: [] }, o.value = !1;
        return;
      }
      o.value = !0, r.value = setTimeout(() => {
        m();
      }, 300);
    }, m = async () => {
      var $;
      try {
        const S = (($ = window.routes) == null ? void 0 : $.predictive_search_url) || "/search/suggest", b = await fetch(
          `${S}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (b.ok) {
          const p = await b.text(), D = new DOMParser().parseFromString(p, "text/html").querySelectorAll(".predictive-search__list-item"), M = Array.from(D).map((x) => {
            var R, K;
            const y = x.querySelector("a"), O = x.querySelector("img"), A = x.querySelector(".predictive-search__item-head"), V = x.querySelector(".price__item");
            return {
              url: (y == null ? void 0 : y.href) || "#",
              image: (O == null ? void 0 : O.src) || "",
              title: ((R = A == null ? void 0 : A.textContent) == null ? void 0 : R.trim()) || "",
              price: ((K = V == null ? void 0 : V.textContent) == null ? void 0 : K.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          i.value = {
            products: M,
            collections: []
            // Collections can be added if needed
          };
        }
      } catch (S) {
        console.error("Search error:", S), i.value = { products: [], collections: [] };
      } finally {
        o.value = !1;
      }
    }, v = () => {
      n.value && (window.location.href = `${l.value}?q=${encodeURIComponent(n.value)}`);
    }, g = ($) => {
      $.key === "Escape" && t.value && u();
    };
    return ze(() => {
      document.addEventListener("search-overlay:open", d), document.addEventListener("search-overlay:close", u), document.addEventListener("keydown", g);
    }), kt(() => {
      document.removeEventListener("search-overlay:open", d), document.removeEventListener("search-overlay:close", u), document.removeEventListener("keydown", g);
    }), ($, S) => (k(), ft(Fn, { to: "body" }, [
      fe(xt, { name: "search-overlay" }, {
        default: Fe(() => [
          t.value ? (k(), T("div", ow, [
            fe(xt, { name: "fade" }, {
              default: Fe(() => [
                t.value ? (k(), T("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                  onClick: u
                })) : H("", !0)
              ]),
              _: 1
            }),
            fe(xt, {
              name: "slide-down",
              appear: ""
            }, {
              default: Fe(() => {
                var b, p;
                return [
                  t.value ? (k(), T("div", iw, [
                    f("div", rw, [
                      f("div", lw, [
                        f("div", aw, [
                          f("div", cw, [
                            f("div", uw, [
                              yt(f("input", {
                                ref_key: "searchInput",
                                ref: s,
                                "onUpdate:modelValue": S[0] || (S[0] = (w) => n.value = w),
                                type: "search",
                                placeholder: "Search products...",
                                class: "w-full px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                                onInput: h,
                                onKeydown: [
                                  yi(u, ["escape"]),
                                  yi(v, ["enter"])
                                ]
                              }, null, 544), [
                                [Rn, n.value]
                              ]),
                              f("div", dw, [
                                o.value ? (k(), T("div", pw)) : (k(), T("svg", fw, S[1] || (S[1] = [
                                  f("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  }, null, -1)
                                ])))
                              ])
                            ]),
                            f("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: u
                            }, S[2] || (S[2] = [
                              f("span", { class: "sr-only" }, "Close search", -1),
                              f("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                f("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          a.value ? (k(), T("div", hw, [
                            f("div", mw, [
                              i.value.products && i.value.products.length > 0 ? (k(), T("div", gw, [
                                S[3] || (S[3] = f("h3", { class: "text-sm font-medium text-gray-900 mb-3" }, "Products", -1)),
                                f("div", vw, [
                                  (k(!0), T(ae, null, Oe(i.value.products, (w) => (k(), T("a", {
                                    key: w.id,
                                    href: w.url,
                                    class: "group flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50",
                                    onClick: u
                                  }, [
                                    w.image ? (k(), T("img", {
                                      key: 0,
                                      src: w.image,
                                      alt: w.title,
                                      class: "w-16 h-16 object-cover rounded"
                                    }, null, 8, bw)) : H("", !0),
                                    f("div", _w, [
                                      f("p", Ew, W(w.title), 1),
                                      f("p", ww, W(c(w.price)), 1)
                                    ])
                                  ], 8, yw))), 128))
                                ])
                              ])) : H("", !0),
                              i.value.collections && i.value.collections.length > 0 ? (k(), T("div", Nw, [
                                S[4] || (S[4] = f("h3", { class: "text-sm font-medium text-gray-900 mb-3" }, "Collections", -1)),
                                f("div", xw, [
                                  (k(!0), T(ae, null, Oe(i.value.collections, (w) => (k(), T("a", {
                                    key: w.id,
                                    href: w.url,
                                    class: "text-sm text-gray-600 hover:text-red-600 p-2 rounded hover:bg-gray-50",
                                    onClick: u
                                  }, W(w.title), 9, Sw))), 128))
                                ])
                              ])) : H("", !0),
                              n.value && !o.value && (!i.value.products || i.value.products.length === 0) && (!i.value.collections || i.value.collections.length === 0) ? (k(), T("div", kw, [
                                S[5] || (S[5] = f("svg", {
                                  class: "mx-auto h-12 w-12 text-gray-400",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  f("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  })
                                ], -1)),
                                f("p", Cw, 'No results found for "' + W(n.value) + '"', 1)
                              ])) : H("", !0)
                            ]),
                            n.value && (((b = i.value.products) == null ? void 0 : b.length) > 0 || ((p = i.value.collections) == null ? void 0 : p.length) > 0) ? (k(), T("div", Ow, [
                              f("a", {
                                href: `${l.value}?q=${encodeURIComponent(n.value)}`,
                                class: "text-sm text-red-600 hover:text-red-700 font-medium",
                                onClick: u
                              }, " View all results → ", 8, Tw)
                            ])) : H("", !0)
                          ])) : H("", !0)
                        ])
                      ])
                    ])
                  ])) : H("", !0)
                ];
              }),
              _: 1
            })
          ])) : H("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Dw = /* @__PURE__ */ Je($w, [["__scopeId", "data-v-bd8440ab"]]), Vw = /* @__PURE__ */ Le({
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
}), Aw = /* @__PURE__ */ Le(Af), Iw = /* @__PURE__ */ Le(N1), Mw = /* @__PURE__ */ Le(B1), Pw = /* @__PURE__ */ Le(Df), Rw = /* @__PURE__ */ Le(Q1), Lw = /* @__PURE__ */ Le(Mf), Fw = /* @__PURE__ */ Le(zb), Bw = /* @__PURE__ */ Le(B_), jw = /* @__PURE__ */ Le(EE), Hw = /* @__PURE__ */ Le(RE), Uw = /* @__PURE__ */ Le(g2), qw = /* @__PURE__ */ Le(Vf), zw = /* @__PURE__ */ Le(U2), Kw = /* @__PURE__ */ Le(K2), Ww = /* @__PURE__ */ Le(Y2), Gw = /* @__PURE__ */ Le(ew), Yw = /* @__PURE__ */ Le(sw), Jw = /* @__PURE__ */ Le(Dw);
customElements.define("orion-button", Vw);
customElements.define("cart-drawer", Aw);
customElements.define("mobile-menu", Iw);
customElements.define("product-variant-picker", Mw);
customElements.define("quantity-selector", Pw);
customElements.define("sticky-header", Rw);
customElements.define("main-header", Lw);
customElements.define("site-footer", Fw);
customElements.define("collection-filters", Bw);
customElements.define("collection-grid", jw);
customElements.define("product-gallery", Hw);
customElements.define("product-info", Uw);
customElements.define("cart-item", qw);
customElements.define("cart-summary", zw);
customElements.define("slideshow-banner", Kw);
customElements.define("testimonials-carousel", Ww);
customElements.define("video-player", Gw);
customElements.define("password-modal", Yw);
customElements.define("search-overlay", Jw);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".main-header-mount").forEach((o) => {
    Es(Mf, {
      shopName: o.dataset.shopName || "Orion Store",
      logoUrl: o.dataset.logoUrl || "",
      navigationLinks: JSON.parse(o.dataset.navigationLinks || "[]")
    }).mount(o);
  }), document.querySelectorAll(".cart-drawer-mount").forEach((o) => {
    Es(Af).mount(o);
  }), document.querySelectorAll("product-card").forEach((o) => {
    const i = {
      productId: o.getAttribute("product-id"),
      variantId: o.getAttribute("variant-id"),
      title: o.getAttribute("title"),
      handle: o.getAttribute("handle"),
      vendor: o.getAttribute("vendor"),
      price: o.getAttribute("price"),
      compareAtPrice: o.getAttribute("compare-at-price"),
      image: o.getAttribute("image"),
      available: o.getAttribute(":available") === "true"
    };
    Es(m_, i).mount(o);
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
      var o;
      try {
        const r = await (await fetch((((o = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : o.cart) || "/cart") + ".js")).json();
        return this.state.items = r.items, this.state.totalPrice = r.total_price, this.state.itemCount = r.item_count, document.dispatchEvent(new CustomEvent("cart:updated", { detail: r })), r;
      } catch (i) {
        console.error("Failed to fetch cart:", i);
      }
    },
    async addItem(o) {
      var i;
      try {
        let r;
        o instanceof FormData ? r = await fetch(((i = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : i.cart_add) || "/cart/add", {
          method: "POST",
          body: o
        }) : r = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(o)
        });
        const l = await r.json();
        return await this.fetchCart(), this.openDrawer(), l;
      } catch (r) {
        console.error("Failed to add item to cart:", r);
      }
    },
    async updateItem(o, i, r = null) {
      try {
        const l = {
          quantity: i
        };
        r !== null ? l.line = r : l.id = o;
        const c = await (await fetch("/api/carts/ajax-cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(l)
        })).json();
        return await this.fetchCart(), c;
      } catch (l) {
        console.error("Failed to update cart:", l);
      }
    },
    async removeItem(o, i = null) {
      return this.updateItem(o, 0, i);
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
