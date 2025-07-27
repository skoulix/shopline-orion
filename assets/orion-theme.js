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
const pe = nl.NODE_ENV !== "production" ? Object.freeze({}) : {}, ms = nl.NODE_ENV !== "production" ? Object.freeze([]) : [], $e = () => {
}, Ks = () => !1, gn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zo = (e) => e.startsWith("onUpdate:"), de = Object.assign, sl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Lf = Object.prototype.hasOwnProperty, ge = (e, t) => Lf.call(e, t), Y = Array.isArray, Yn = (e) => Rs(e) === "[object Map]", ls = (e) => Rs(e) === "[object Set]", ra = (e) => Rs(e) === "[object Date]", Ff = (e) => Rs(e) === "[object RegExp]", oe = (e) => typeof e == "function", re = (e) => typeof e == "string", Et = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Oi = (e) => (me(e) || oe(e)) && oe(e.then) && oe(e.catch), Tc = Object.prototype.toString, Rs = (e) => Tc.call(e), ol = (e) => Rs(e).slice(8, -1), Ti = (e) => Rs(e) === "[object Object]", il = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Dn = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $c = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), $i = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Bf = /-(\w)/g, ke = $i(
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
  if (Y(e)) {
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
function Oe(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = Oe(e[n]);
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
  return t && !re(t) && (e.class = Oe(t)), n && (e.style = dt(n)), e;
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
  if (n = Y(e), s = Y(t), n || s)
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
const Pc = (e) => !!(e && e.__v_isRef === !0), K = (e) => re(e) ? e : e == null ? "" : Y(e) || me(e) && (e.toString === Tc || !oe(e.toString)) ? Pc(e) ? K(e.value) : JSON.stringify(e, Rc, 2) : String(e), Rc = (e, t) => Pc(t) ? Rc(e, t.value) : Yn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[sr(s, i) + " =>"] = o, n),
    {}
  )
} : ls(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => sr(n))
} : Et(t) ? sr(t) : me(t) && !Y(t) && !Ti(t) ? String(t) : t, sr = (e, t = "") => {
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
    const a = Y(e), c = a && il(n);
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
      ...e.map((t) => Y(t) ? ds(t) : t)
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
    const r = Y(t);
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
      if (!nt(s) && !Wt(s) && (i = ce(i), s = ce(s)), !Y(t) && Ae(i) && !Ae(s))
        return a ? !1 : (i.value = s, !0);
    }
    const r = Y(t) && il(n) ? Number(n) < t.length : ge(t, n), l = Reflect.set(
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
      Y(t) ? "length" : Jn
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
  const t = Y(e) ? new Array(e.length) : {};
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
  let u, h, m, y, g = !1, $ = !1;
  if (Ae(e) ? (h = () => e.value, g = nt(e)) : hn(e) ? (h = () => d(e), g = !0) : Y(e) ? ($ = !0, g = e.some((E) => hn(E) || nt(E)), h = () => e.map((E) => {
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
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Nn = E;
    }
  } : (h = $e, be.NODE_ENV !== "production" && c(e)), t && o) {
    const E = h, V = o === !0 ? 1 / 0 : o;
    h = () => fn(E(), V);
  }
  const k = al(), v = () => {
    u.stop(), k && k.active && sl(k.effects, u);
  };
  if (i && t) {
    const E = t;
    t = (...V) => {
      E(...V), v();
    };
  }
  let p = $ ? new Array(e.length).fill(Io) : Io;
  const N = (E) => {
    if (!(!(u.flags & 1) || !u.dirty && !E))
      if (t) {
        const V = u.run();
        if (o || g || ($ ? V.some((M, T) => at(M, p[T])) : at(V, p))) {
          m && m();
          const M = Nn;
          Nn = u;
          try {
            const T = [
              V,
              // pass undefined as the old value when it's changed for the first time
              p === Io ? void 0 : $ && p[0] === Io ? [] : p,
              y
            ];
            p = V, a ? a(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            Nn = M;
          }
        }
      } else
        u.run();
  };
  return l && l(N), u = new ao(h), u.scheduler = r ? () => r(N, !1) : N, y = (E) => lu(E, !1, u), m = u.onStop = () => {
    const E = oi.get(u);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const V of E) V();
      oi.delete(u);
    }
  }, be.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? N(!0) : p = u.run() : r ? r(N.bind(null, !0), !0) : u.run(), v.pause = u.pause.bind(u), v.resume = u.resume.bind(u), v.stop = v, v;
}
function fn(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ae(e))
    fn(e.value, t, n);
  else if (Y(e))
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
var w = {};
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
  w.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? P(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && P(`${t} is NaN - the duration expression might be incorrect.`));
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
  if (Y(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(It(e[i], t, n, s));
    return o;
  } else w.NODE_ENV !== "production" && P(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ln(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = w.NODE_ENV !== "production" ? Ri[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  if (w.NODE_ENV !== "production") {
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
  Y(e) ? ys.push(...e) : xn && e.id === -1 ? xn.splice(hs + 1, 0, e) : e.flags & 1 || (ys.push(e), e.flags |= 1), uu();
}
function pa(e, t, n = Jt + 1) {
  for (w.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ct.length; n++) {
    const s = ct[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || w.NODE_ENV !== "production" && hl(t, s))
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
    for (xn = t, w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), hs = 0; hs < xn.length; hs++) {
      const n = xn[hs];
      w.NODE_ENV !== "production" && hl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xn = null, hs = 0;
  }
}
const fo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function du(e) {
  w.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = w.NODE_ENV !== "production" ? (n) => hl(e, n) : $e;
  try {
    for (Jt = 0; Jt < ct.length; Jt++) {
      const n = ct[Jt];
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
w.NODE_ENV !== "production" && (No().__VUE_HMR_RUNTIME__ = {
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
    Fragment: le,
    Text: sn,
    Comment: De,
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
const hh = (e) => Be;
function Be(e, t = Re, n) {
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
    return w.NODE_ENV !== "production" && pu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function mu(e) {
  $c(e) && P("Do not use built-in directive ids as custom directive id: " + e);
}
function yt(e, t) {
  if (Re === null)
    return w.NODE_ENV !== "production" && P("withDirectives can only be used inside render functions."), e;
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
      return w.NODE_ENV !== "production" && !s && !Qn(e) && P(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return w.NODE_ENV !== "production" && P(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return w.NODE_ENV !== "production" && !n && !Qn(e) && P(`Invalid Teleport target: ${n}`), n;
}, yu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, c) {
    const {
      mc: d,
      pc: u,
      pbc: h,
      o: { insert: m, querySelector: y, createText: g, createComment: $ }
    } = c, k = Qn(t.props);
    let { shapeFlag: v, children: p, dynamicChildren: N } = t;
    if (w.NODE_ENV !== "production" && Bt && (a = !1, N = null), e == null) {
      const E = t.el = w.NODE_ENV !== "production" ? $("teleport start") : g(""), V = t.anchor = w.NODE_ENV !== "production" ? $("teleport end") : g("");
      m(E, n, s), m(V, n, s);
      const M = (b, S) => {
        v & 16 && (o && o.isCE && (o.ce._teleportTarget = b), d(
          p,
          b,
          S,
          o,
          i,
          r,
          l,
          a
        ));
      }, T = () => {
        const b = t.target = kr(t.props, y), S = bu(b, t, g, m);
        b ? (r !== "svg" && ga(b) ? r = "svg" : r !== "mathml" && va(b) && (r = "mathml"), k || (M(b, S), zo(t, !1))) : w.NODE_ENV !== "production" && !k && P(
          "Invalid Teleport target on mount:",
          b,
          `(${typeof b})`
        );
      };
      k && (M(n, V), zo(t, !0)), ma(t.props) ? (t.el.__isMounted = !1, je(() => {
        T(), delete t.el.__isMounted;
      }, i)) : T();
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
      const E = t.anchor = e.anchor, V = t.target = e.target, M = t.targetAnchor = e.targetAnchor, T = Qn(e.props), b = T ? n : V, S = T ? E : M;
      if (r === "svg" || ga(V) ? r = "svg" : (r === "mathml" || va(V)) && (r = "mathml"), N ? (h(
        e.dynamicChildren,
        N,
        b,
        o,
        i,
        r,
        l
      ), so(e, t, w.NODE_ENV === "production")) : a || u(
        e,
        t,
        b,
        S,
        o,
        i,
        r,
        l,
        !1
      ), k)
        T ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Mo(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const A = t.target = kr(
          t.props,
          y
        );
        A ? Mo(
          t,
          A,
          null,
          c,
          0
        ) : w.NODE_ENV !== "production" && P(
          "Invalid Teleport target on update:",
          V,
          `(${typeof V})`
        );
      } else T && Mo(
        t,
        V,
        M,
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
      const m = i || !Qn(h);
      for (let y = 0; y < l.length; y++) {
        const g = l[y];
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
    const m = Qn(t.props), y = h._lpa || h.firstChild;
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
        ), t.targetStart = y, t.targetAnchor = y && r(y);
      else {
        t.anchor = r(e);
        let g = y;
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
          y && r(y),
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
      if (w.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && P(`invalid <transition> mode: ${l}`), s.isLeaving)
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
      a.type !== De && vn(a, c);
      let d = n.subTree && ya(n.subTree);
      if (d && d.type !== De && !Lt(a, d) && _u(n).type !== De) {
        let u = ks(
          d,
          r,
          s,
          n
        );
        if (vn(d, u), l === "out-in" && a.type !== De)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, d = void 0;
          }, cr(i);
        l === "in-out" && a.type !== De ? u.delayLeave = (h, m, y) => {
          const g = Nu(
            s,
            d
          );
          g[String(d.key)] = d, h[Sn] = () => {
            m(), h[Sn] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            y(), delete c.delayedLeave, d = void 0;
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
      if (s.type !== De) {
        if (w.NODE_ENV !== "production" && n) {
          P(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, w.NODE_ENV === "production") break;
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
    onAfterLeave: y,
    onLeaveCancelled: g,
    onBeforeAppear: $,
    onAppear: k,
    onAfterAppear: v,
    onAppearCancelled: p
  } = t, N = String(e.key), E = Nu(n, e), V = (b, S) => {
    b && It(
      b,
      s,
      9,
      S
    );
  }, M = (b, S) => {
    const A = S[1];
    V(b, S), Y(b) ? b.every((D) => D.length <= 1) && A() : b.length <= 1 && A();
  }, T = {
    mode: r,
    persisted: l,
    beforeEnter(b) {
      let S = a;
      if (!n.isMounted)
        if (i)
          S = $ || a;
        else
          return;
      b[Sn] && b[Sn](
        !0
        /* cancelled */
      );
      const A = E[N];
      A && Lt(e, A) && A.el[Sn] && A.el[Sn](), V(S, [b]);
    },
    enter(b) {
      let S = c, A = d, D = u;
      if (!n.isMounted)
        if (i)
          S = k || c, A = v || d, D = p || u;
        else
          return;
      let H = !1;
      const W = b[Po] = (G) => {
        H || (H = !0, G ? V(D, [b]) : V(A, [b]), T.delayedLeave && T.delayedLeave(), b[Po] = void 0);
      };
      S ? M(S, [b, W]) : W();
    },
    leave(b, S) {
      const A = String(e.key);
      if (b[Po] && b[Po](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return S();
      V(h, [b]);
      let D = !1;
      const H = b[Sn] = (W) => {
        D || (D = !0, S(), W ? V(g, [b]) : V(y, [b]), b[Sn] = void 0, E[A] === e && delete E[A]);
      };
      E[A] = e, m ? M(m, [b, H]) : H();
    },
    clone(b) {
      const S = ks(
        b,
        t,
        n,
        s,
        o
      );
      return o && o(S), S;
    }
  };
  return T;
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
    r.type === le ? (r.patchFlag & 128 && o++, s = s.concat(
      Bi(r.children, t, l)
    )) : (t || r.type !== De) && s.push(l != null ? Mt(r, { key: l }) : r);
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
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (w.NODE_ENV !== "production" && P(
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
    w.NODE_ENV !== "production" && (i = Object.getOwnPropertyDescriptor(o, e)) && !i.configurable ? P(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  } else w.NODE_ENV !== "production" && P(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = w.NODE_ENV !== "production" ? Mi(n) : n;
  return w.NODE_ENV !== "production" && xu.add(s), s;
}
function bs(e, t, n, s, o = !1) {
  if (Y(e)) {
    e.forEach(
      (y, g) => bs(
        y,
        t && (Y(t) ? t[g] : t),
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
  if (w.NODE_ENV !== "production" && !l) {
    P(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, h = ce(u), m = u === pe ? () => !1 : (y) => w.NODE_ENV !== "production" && (ge(h, y) && !Ae(h[y]) && P(
    `Template ref "${y}" used on a non-ref value. It will not work in the production build.`
  ), xu.has(h[y])) ? !1 : ge(h, y);
  if (c != null && c !== a && (re(c) ? (d[c] = null, m(c) && (u[c] = null)) : Ae(c) && (c.value = null)), oe(a))
    as(a, l, 12, [r, d]);
  else {
    const y = re(a), g = Ae(a);
    if (y || g) {
      const $ = () => {
        if (e.f) {
          const k = y ? m(a) ? u[a] : d[a] : a.value;
          o ? Y(k) && sl(k, i) : Y(k) ? k.includes(i) || k.push(i) : y ? (d[a] = [i], m(a) && (u[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else y ? (d[a] = r, m(a) && (u[a] = r)) : g ? (a.value = r, e.k && (d[e.k] = r)) : w.NODE_ENV !== "production" && P("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? ($.id = -1, je($, n)) : $();
    } else w.NODE_ENV !== "production" && P("Invalid template ref type:", a, `(${typeof a})`);
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
  } = e, d = (p, N) => {
    if (!N.hasChildNodes()) {
      w.NODE_ENV !== "production" && P(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, p, N), ri(), N._vnode = p;
      return;
    }
    u(N.firstChild, p, null, null, null), ri(), N._vnode = p;
  }, u = (p, N, E, V, M, T = !1) => {
    T = T || !!N.dynamicChildren;
    const b = Kn(p) && p.data === "[", S = () => g(
      p,
      N,
      E,
      V,
      M,
      b
    ), { type: A, ref: D, shapeFlag: H, patchFlag: W } = N;
    let G = p.nodeType;
    N.el = p, w.NODE_ENV !== "production" && (ns(p, "__vnode", N, !0), ns(p, "__vueParentComponent", E, !0)), W === -2 && (T = !1, N.dynamicChildren = null);
    let Z = null;
    switch (A) {
      case sn:
        G !== 3 ? N.children === "" ? (a(N.el = o(""), r(p), p), Z = p) : Z = S() : (p.data !== N.children && (w.NODE_ENV !== "production" && P(
          "Hydration text mismatch in",
          p.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            p.data
          )}
  - expected on client: ${JSON.stringify(N.children)}`
        ), jn(), p.data = N.children), Z = i(p));
        break;
      case De:
        v(p) ? (Z = i(p), k(
          N.el = p.content.firstChild,
          p,
          E
        )) : G !== 8 || b ? Z = S() : Z = i(p);
        break;
      case An:
        if (b && (p = i(p), G = p.nodeType), G === 1 || G === 3) {
          Z = p;
          const se = !N.children.length;
          for (let ee = 0; ee < N.staticCount; ee++)
            se && (N.children += Z.nodeType === 1 ? Z.outerHTML : Z.data), ee === N.staticCount - 1 && (N.anchor = Z), Z = i(Z);
          return b ? i(Z) : Z;
        } else
          S();
        break;
      case le:
        b ? Z = y(
          p,
          N,
          E,
          V,
          M,
          T
        ) : Z = S();
        break;
      default:
        if (H & 1)
          (G !== 1 || N.type.toLowerCase() !== p.tagName.toLowerCase()) && !v(p) ? Z = S() : Z = h(
            p,
            N,
            E,
            V,
            M,
            T
          );
        else if (H & 6) {
          N.slotScopeIds = M;
          const se = r(p);
          if (b ? Z = $(p) : Kn(p) && p.data === "teleport start" ? Z = $(p, p.data, "teleport end") : Z = i(p), t(
            N,
            se,
            null,
            E,
            V,
            Ro(se),
            T
          ), Vn(N) && !N.type.__asyncResolved) {
            let ee;
            b ? (ee = fe(le), ee.anchor = Z ? Z.previousSibling : se.lastChild) : ee = p.nodeType === 3 ? Le("") : fe("div"), ee.el = p, N.component.subTree = ee;
          }
        } else H & 64 ? G !== 8 ? Z = S() : Z = N.type.hydrate(
          p,
          N,
          E,
          V,
          M,
          T,
          e,
          m
        ) : H & 128 ? Z = N.type.hydrate(
          p,
          N,
          E,
          V,
          Ro(r(p)),
          M,
          T,
          e,
          u
        ) : w.NODE_ENV !== "production" && P("Invalid HostVNode type:", A, `(${typeof A})`);
    }
    return D != null && bs(D, null, V, N), Z;
  }, h = (p, N, E, V, M, T) => {
    T = T || !!N.dynamicChildren;
    const { type: b, props: S, patchFlag: A, shapeFlag: D, dirs: H, transition: W } = N, G = b === "input" || b === "option";
    if (w.NODE_ENV !== "production" || G || A !== -1) {
      H && Qt(N, null, E, "created");
      let Z = !1;
      if (v(p)) {
        Z = Ju(
          null,
          // no need check parentSuspense in hydration
          W
        ) && E && E.vnode.props && E.vnode.props.appear;
        const ee = p.content.firstChild;
        if (Z) {
          const Ee = ee.getAttribute("class");
          Ee && (ee.$cls = Ee), W.beforeEnter(ee);
        }
        k(ee, p, E), N.el = p = ee;
      }
      if (D & 16 && // skip if element has innerHTML / textContent
      !(S && (S.innerHTML || S.textContent))) {
        let ee = m(
          p.firstChild,
          N,
          p,
          E,
          V,
          M,
          T
        ), Ee = !1;
        for (; ee; ) {
          Gs(
            p,
            1
            /* CHILDREN */
          ) || (w.NODE_ENV !== "production" && !Ee && (P(
            "Hydration children mismatch on",
            p,
            `
Server rendered element contains more child nodes than client vdom.`
          ), Ee = !0), jn());
          const pt = ee;
          ee = ee.nextSibling, l(pt);
        }
      } else if (D & 8) {
        let ee = N.children;
        ee[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (ee = ee.slice(1)), p.textContent !== ee && (Gs(
          p,
          0
          /* TEXT */
        ) || (w.NODE_ENV !== "production" && P(
          "Hydration text content mismatch on",
          p,
          `
  - rendered on server: ${p.textContent}
  - expected on client: ${N.children}`
        ), jn()), p.textContent = N.children);
      }
      if (S) {
        if (w.NODE_ENV !== "production" || G || !T || A & 48) {
          const ee = p.tagName.includes("-");
          for (const Ee in S)
            w.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(H && H.some((pt) => pt.dir.created)) && wh(p, Ee, S[Ee], N, E) && jn(), (G && (Ee.endsWith("value") || Ee === "indeterminate") || gn(Ee) && !Dn(Ee) || // force hydrate v-bind with .prop modifiers
            Ee[0] === "." || ee) && s(p, Ee, null, S[Ee], void 0, E);
        } else if (S.onClick)
          s(
            p,
            "onClick",
            null,
            S.onClick,
            void 0,
            E
          );
        else if (A & 4 && hn(S.style))
          for (const ee in S.style) S.style[ee];
      }
      let se;
      (se = S && S.onVnodeBeforeMount) && vt(se, E, N), H && Qt(N, null, E, "beforeMount"), ((se = S && S.onVnodeMounted) || H || Z) && rd(() => {
        se && vt(se, E, N), Z && W.enter(p), H && Qt(N, null, E, "mounted");
      }, V);
    }
    return p.nextSibling;
  }, m = (p, N, E, V, M, T, b) => {
    b = b || !!N.dynamicChildren;
    const S = N.children, A = S.length;
    let D = !1;
    for (let H = 0; H < A; H++) {
      const W = b ? S[H] : S[H] = ut(S[H]), G = W.type === sn;
      p ? (G && !b && H + 1 < A && ut(S[H + 1]).type === sn && (a(
        o(
          p.data.slice(W.children.length)
        ),
        E,
        i(p)
      ), p.data = W.children), p = u(
        p,
        W,
        V,
        M,
        T,
        b
      )) : G && !W.children ? a(W.el = o(""), E) : (Gs(
        E,
        1
        /* CHILDREN */
      ) || (w.NODE_ENV !== "production" && !D && (P(
        "Hydration children mismatch on",
        E,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), D = !0), jn()), n(
        null,
        W,
        E,
        null,
        V,
        M,
        Ro(E),
        T
      ));
    }
    return p;
  }, y = (p, N, E, V, M, T) => {
    const { slotScopeIds: b } = N;
    b && (M = M ? M.concat(b) : b);
    const S = r(p), A = m(
      i(p),
      N,
      S,
      E,
      V,
      M,
      T
    );
    return A && Kn(A) && A.data === "]" ? i(N.anchor = A) : (jn(), a(N.anchor = c("]"), S, A), A);
  }, g = (p, N, E, V, M, T) => {
    if (Gs(
      p.parentElement,
      1
      /* CHILDREN */
    ) || (w.NODE_ENV !== "production" && P(
      `Hydration node mismatch:
- rendered on server:`,
      p,
      p.nodeType === 3 ? "(text)" : Kn(p) && p.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      N.type
    ), jn()), N.el = null, T) {
      const A = $(p);
      for (; ; ) {
        const D = i(p);
        if (D && D !== A)
          l(D);
        else
          break;
      }
    }
    const b = i(p), S = r(p);
    return l(p), n(
      null,
      N,
      S,
      b,
      E,
      V,
      Ro(S),
      M
    ), E && (E.vnode.el = N.el, Ki(E, N.el)), b;
  }, $ = (p, N = "[", E = "]") => {
    let V = 0;
    for (; p; )
      if (p = i(p), p && Kn(p) && (p.data === N && V++, p.data === E)) {
        if (V === 0)
          return i(p);
        V--;
      }
    return p;
  }, k = (p, N, E) => {
    const V = N.parentNode;
    V && V.replaceChild(p, N);
    let M = E;
    for (; M; )
      M.vnode.el === N && (M.vnode.el = M.subTree.el = p), M = M.parent;
  }, v = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
  return [d, u];
}
function wh(e, t, n, s, o) {
  let i, r, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Oe(n), Nh(_a(l || ""), _a(a)) || (i = 2, r = "class");
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
  if (e.getCssVars && (t === s || s && s.type === le && s.children.includes(t))) {
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
    let y;
    return c || (y = c = t().catch((g) => {
      if (g = g instanceof Error ? g : new Error(String(g)), a)
        return new Promise(($, k) => {
          a(g, () => $(h()), () => k(g), u + 1);
        });
      throw g;
    }).then((g) => {
      if (y !== c && c)
        return c;
      if (w.NODE_ENV !== "production" && !g && P(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), w.NODE_ENV !== "production" && g && !me(g) && !oe(g))
        throw new Error(`Invalid async component load result: ${g}`);
      return d = g, g;
    }));
  };
  return /* @__PURE__ */ bl({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(y, g, $) {
      let k = !1;
      (g.bu || (g.bu = [])).push(() => k = !0);
      const v = () => {
        if (k) {
          w.NODE_ENV !== "production" && P(
            `Skipping lazy hydration for component '${Ts(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        $();
      }, p = i ? () => {
        const N = i(
          v,
          (E) => Vh(y, E)
        );
        N && (g.bum || (g.bum = [])).push(N);
      } : v;
      d ? p() : m().then(() => !g.isUnmounted && p());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const y = qe;
      if (_l(y), d)
        return () => ur(d, y);
      const g = (p) => {
        c = null, Ln(
          p,
          y,
          13,
          !s
        );
      };
      if (l && y.suspense || Os)
        return m().then((p) => () => ur(p, y)).catch((p) => (g(p), () => s ? fe(s, {
          error: p
        }) : null));
      const $ = U(!1), k = U(), v = U(!!o);
      return o && setTimeout(() => {
        v.value = !1;
      }, o), r != null && setTimeout(() => {
        if (!$.value && !k.value) {
          const p = new Error(
            `Async component timed out after ${r}ms.`
          );
          g(p), k.value = p;
        }
      }, r), m().then(() => {
        $.value = !0, y.parent && Fs(y.parent.vnode) && y.parent.update();
      }).catch((p) => {
        g(p), k.value = p;
      }), () => {
        if ($.value && d)
          return ur(d, y);
        if (k.value && s)
          return fe(s, {
            error: k.value
          });
        if (n && !v.value)
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
        const v = t.default && t.default();
        return v && v.length === 1 ? v[0] : v;
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
    s.activate = (v, p, N, E, V) => {
      const M = v.component;
      c(v, p, N, 0, l), a(
        M.vnode,
        v,
        p,
        N,
        M,
        l,
        E,
        v.slotScopeIds,
        V
      ), je(() => {
        M.isDeactivated = !1, M.a && On(M.a);
        const T = v.props && v.props.onVnodeMounted;
        T && vt(T, M.parent, v);
      }, l), w.NODE_ENV !== "production" && Sr(M);
    }, s.deactivate = (v) => {
      const p = v.component;
      di(p.m), di(p.a), c(v, h, null, 1, l), je(() => {
        p.da && On(p.da);
        const N = v.props && v.props.onVnodeUnmounted;
        N && vt(N, p.parent, v), p.isDeactivated = !0;
      }, l), w.NODE_ENV !== "production" && Sr(p), w.NODE_ENV !== "production" && (p.__keepAliveStorageContainer = h);
    };
    function m(v) {
      dr(v), d(v, n, l, !0);
    }
    function y(v) {
      o.forEach((p, N) => {
        const E = Ts(p.type);
        E && !v(E) && g(N);
      });
    }
    function g(v) {
      const p = o.get(v);
      p && (!r || !Lt(p, r)) ? m(p) : r && dr(r), o.delete(v), i.delete(v);
    }
    nn(
      () => [e.include, e.exclude],
      ([v, p]) => {
        v && y((N) => Ys(v, N)), p && y((N) => !Ys(p, N));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let $ = null;
    const k = () => {
      $ != null && (pi(n.subTree.type) ? je(() => {
        o.set($, Lo(n.subTree));
      }, n.subTree.suspense) : o.set($, Lo(n.subTree)));
    };
    return ze(k), Hi(k), Ui(() => {
      o.forEach((v) => {
        const { subTree: p, suspense: N } = n, E = Lo(p);
        if (v.type === E.type && v.key === E.key) {
          dr(E);
          const V = E.component.da;
          V && je(V, N);
          return;
        }
        m(v);
      });
    }), () => {
      if ($ = null, !t.default)
        return r = null;
      const v = t.default(), p = v[0];
      if (v.length > 1)
        return w.NODE_ENV !== "production" && P("KeepAlive should contain exactly one component child."), r = null, v;
      if (!rn(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128))
        return r = null, p;
      let N = Lo(p);
      if (N.type === De)
        return r = null, N;
      const E = N.type, V = Ts(
        Vn(N) ? N.type.__asyncResolved || {} : E
      ), { include: M, exclude: T, max: b } = e;
      if (M && (!V || !Ys(M, V)) || T && V && Ys(T, V))
        return N.shapeFlag &= -257, r = N, p;
      const S = N.key == null ? E : N.key, A = o.get(S);
      return N.el && (N = Mt(N), p.shapeFlag & 128 && (p.ssContent = N)), $ = S, A ? (N.el = A.el, N.component = A.component, N.transition && vn(N, N.transition), N.shapeFlag |= 512, i.delete(S), i.add(S)) : (i.add(S), b && i.size > parseInt(b, 10) && g(i.values().next().value)), N.shapeFlag |= 256, r = N, pi(p.type) ? p : N;
    };
  }
}, Mh = Ih;
function Ys(e, t) {
  return Y(e) ? e.some((n) => Ys(n, t)) : re(e) ? e.split(",").includes(t) : Ff(e) ? (e.lastIndex = 0, e.test(t)) : !1;
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
  } else if (w.NODE_ENV !== "production") {
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
      if (l && (l === t || l === ke(t) || l === on(ke(t))))
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
    if (w.NODE_ENV !== "production" && n && !r) {
      const l = e === ai ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      P(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else w.NODE_ENV !== "production" && P(
    `resolve${on(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Na(e, t) {
  return e && (e[t] || e[ke(t)] || e[on(ke(t))]);
}
function Se(e, t, n, s) {
  let o;
  const i = n && n[s], r = Y(e);
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
    w.NODE_ENV !== "production" && !Number.isInteger(e) && P(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
    if (Y(s))
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
    return t !== "default" && (n.name = t), x(), ft(
      le,
      null,
      [fe("slot", n, s && s())],
      64
    );
  let i = e[t];
  w.NODE_ENV !== "production" && i && i.length > 1 && (P(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), x();
  const r = i && Sl(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, a = ft(
    le,
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
  return e.some((t) => rn(t) ? !(t.type === De || t.type === le && !Sl(t.children)) : !0) ? e : null;
}
function jh(e, t) {
  const n = {};
  if (w.NODE_ENV !== "production" && !me(e))
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
    $props: (e) => w.NODE_ENV !== "production" ? Ft(e.props) : e.props,
    $attrs: (e) => w.NODE_ENV !== "production" ? Ft(e.attrs) : e.attrs,
    $slots: (e) => w.NODE_ENV !== "production" ? Ft(e.slots) : e.slots,
    $refs: (e) => w.NODE_ENV !== "production" ? Ft(e.refs) : e.refs,
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
      return t === "$attrs" ? (He(e.attrs, "get", ""), w.NODE_ENV !== "production" && fi()) : w.NODE_ENV !== "production" && t === "$slots" && He(e, "get", t), d(e);
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
    w.NODE_ENV !== "production" && Re && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
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
    return fr(o, t) ? (o[t] = n, !0) : w.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (P(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (w.NODE_ENV !== "production" && P(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (w.NODE_ENV !== "production" && P(
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
    return !!n[r] || e !== pe && ge(e, r) || fr(t, r) || (l = i[0]) && ge(l, r) || ge(s, r) || ge(Zn, r) || ge(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
w.NODE_ENV !== "production" && (to.ownKeys = (e) => (P(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Hh = /* @__PURE__ */ de({}, to, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return to.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !zf(t);
    return w.NODE_ENV !== "production" && !n && to.has(e, t) && P(
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
      set: $e
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
      set: $e
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
        set: $e
      });
    }
  });
}
const cs = (e) => P(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Kh() {
  return w.NODE_ENV !== "production" && cs("defineProps"), null;
}
function Wh() {
  return w.NODE_ENV !== "production" && cs("defineEmits"), null;
}
function Gh(e) {
  w.NODE_ENV !== "production" && cs("defineExpose");
}
function Yh(e) {
  w.NODE_ENV !== "production" && cs("defineOptions");
}
function Jh() {
  return w.NODE_ENV !== "production" && cs("defineSlots"), null;
}
function Xh() {
  w.NODE_ENV !== "production" && cs("defineModel");
}
function Qh(e, t) {
  return w.NODE_ENV !== "production" && cs("withDefaults"), null;
}
function Zh() {
  return Mu("useSlots").slots;
}
function em() {
  return Mu("useAttrs").attrs;
}
function Mu(e) {
  const t = it();
  return w.NODE_ENV !== "production" && !t && P(`${e}() called without active instance.`), t.setupContext || (t.setupContext = bd(t));
}
function ho(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function tm(e, t) {
  const n = ho(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? Y(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : w.NODE_ENV !== "production" && P(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function nm(e, t) {
  return !e || !t ? e || t : Y(e) && Y(t) ? e.concat(t) : de({}, ho(e), ho(t));
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
  w.NODE_ENV !== "production" && !t && P(
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
    updated: y,
    activated: g,
    deactivated: $,
    beforeDestroy: k,
    beforeUnmount: v,
    destroyed: p,
    unmounted: N,
    render: E,
    renderTracked: V,
    renderTriggered: M,
    errorCaptured: T,
    serverPrefetch: b,
    // public API
    expose: S,
    inheritAttrs: A,
    // assets
    components: D,
    directives: H,
    filters: W
  } = t, G = w.NODE_ENV !== "production" ? im() : null;
  if (w.NODE_ENV !== "production") {
    const [se] = e.propsOptions;
    if (se)
      for (const ee in se)
        G("Props", ee);
  }
  if (c && lm(c, s, G), r)
    for (const se in r) {
      const ee = r[se];
      oe(ee) ? (w.NODE_ENV !== "production" ? Object.defineProperty(s, se, {
        value: ee.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[se] = ee.bind(n), w.NODE_ENV !== "production" && G("Methods", se)) : w.NODE_ENV !== "production" && P(
        `Method "${se}" has type "${typeof ee}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    w.NODE_ENV !== "production" && !oe(o) && P(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const se = o.call(n, n);
    if (w.NODE_ENV !== "production" && Oi(se) && P(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(se))
      w.NODE_ENV !== "production" && P("data() should return an object.");
    else if (e.data = Ns(se), w.NODE_ENV !== "production")
      for (const ee in se)
        G("Data", ee), kl(ee[0]) || Object.defineProperty(s, ee, {
          configurable: !0,
          enumerable: !0,
          get: () => se[ee],
          set: $e
        });
  }
  if (Or = !0, i)
    for (const se in i) {
      const ee = i[se], Ee = oe(ee) ? ee.bind(n, n) : oe(ee.get) ? ee.get.bind(n, n) : $e;
      w.NODE_ENV !== "production" && Ee === $e && P(`Computed property "${se}" has no getter.`);
      const pt = !oe(ee) && oe(ee.set) ? ee.set.bind(n) : w.NODE_ENV !== "production" ? () => {
        P(
          `Write operation failed: computed property "${se}" is readonly.`
        );
      } : $e, Ot = te({
        get: Ee,
        set: pt
      });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (Tt) => Ot.value = Tt
      }), w.NODE_ENV !== "production" && G("Computed", se);
    }
  if (l)
    for (const se in l)
      Pu(l[se], s, n, se);
  if (a) {
    const se = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(se).forEach((ee) => {
      Lu(ee, se[ee]);
    });
  }
  d && xa(d, e, "c");
  function Z(se, ee) {
    Y(ee) ? ee.forEach((Ee) => se(Ee.bind(n))) : ee && se(ee.bind(n));
  }
  if (Z($u, u), Z(ze, h), Z(El, m), Z(Hi, y), Z(Cu, g), Z(Ou, $), Z(Iu, T), Z(Au, V), Z(Vu, M), Z(Ui, v), Z(kt, N), Z(Du, b), Y(S))
    if (S.length) {
      const se = e.exposed || (e.exposed = {});
      S.forEach((ee) => {
        Object.defineProperty(se, ee, {
          get: () => n[ee],
          set: (Ee) => n[ee] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === $e && (e.render = E), A != null && (e.inheritAttrs = A), D && (e.components = D), H && (e.directives = H), b && _l(e);
}
function lm(e, t, n = $e) {
  Y(e) && (e = Tr(e));
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
    }) : t[s] = i, w.NODE_ENV !== "production" && n("Inject", s);
  }
}
function xa(e, t, n) {
  It(
    Y(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Pu(e, t, n, s) {
  let o = s.includes(".") ? td(n, s) : () => n[s];
  if (re(e)) {
    const i = t[e];
    oe(i) ? nn(o, i) : w.NODE_ENV !== "production" && P(`Invalid watch handler specified by key "${e}"`, i);
  } else if (oe(e))
    nn(o, e.bind(n));
  else if (me(e))
    if (Y(e))
      e.forEach((i) => Pu(i, t, n, s));
    else {
      const i = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(i) ? nn(o, i, e) : w.NODE_ENV !== "production" && P(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else w.NODE_ENV !== "production" && P(`Invalid watch option: "${s}"`, e);
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
      w.NODE_ENV !== "production" && P(
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
  if (Y(e)) {
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
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
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
    oe(s) || (s = de({}, s)), o != null && !me(o) && (w.NODE_ENV !== "production" && P("root props passed to app.mount() must be an object."), o = null);
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
        w.NODE_ENV !== "production" && P(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return r.has(d) ? w.NODE_ENV !== "production" && P("Plugin has already been applied to target app.") : d && oe(d.install) ? (r.add(d), d.install(c, ...u)) : oe(d) ? (r.add(d), d(c, ...u)) : w.NODE_ENV !== "production" && P(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(d) {
        return i.mixins.includes(d) ? w.NODE_ENV !== "production" && P(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), c;
      },
      component(d, u) {
        return w.NODE_ENV !== "production" && Lr(d, i.config), u ? (w.NODE_ENV !== "production" && i.components[d] && P(`Component "${d}" has already been registered in target app.`), i.components[d] = u, c) : i.components[d];
      },
      directive(d, u) {
        return w.NODE_ENV !== "production" && mu(d), u ? (w.NODE_ENV !== "production" && i.directives[d] && P(`Directive "${d}" has already been registered in target app.`), i.directives[d] = u, c) : i.directives[d];
      },
      mount(d, u, h) {
        if (a)
          w.NODE_ENV !== "production" && P(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          w.NODE_ENV !== "production" && d.__vue_app__ && P(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || fe(s, o);
          return m.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), w.NODE_ENV !== "production" && (i.reload = () => {
            const y = Mt(m);
            y.el = null, e(y, d, h);
          }), u && t ? t(m, d) : e(m, d, h), a = !0, c._container = d, d.__vue_app__ = c, w.NODE_ENV !== "production" && (c._instance = m.component, ih(c, jr)), Co(m.component);
        }
      },
      onUnmount(d) {
        w.NODE_ENV !== "production" && typeof d != "function" && P(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (It(
          l,
          c._instance,
          16
        ), e(null, c._container), w.NODE_ENV !== "production" && (c._instance = null, rh(c)), delete c._container.__vue_app__) : w.NODE_ENV !== "production" && P("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return w.NODE_ENV !== "production" && d in i.provides && (ge(i.provides, d) ? P(
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
    w.NODE_ENV !== "production" && P("provide() can only be used inside setup().");
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
    w.NODE_ENV !== "production" && P(`injection "${String(e)}" not found.`);
  } else w.NODE_ENV !== "production" && P("inject() can only be used inside setup() or functional components.");
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
  w.NODE_ENV !== "production" && qu(t || {}, o, e), n ? e.props = s ? o : tu(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
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
    !(w.NODE_ENV !== "production" && mm(e)) && (s || r > 0) && !(r & 16)
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
            const y = ke(h);
            o[y] = $r(
              a,
              l,
              y,
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
  c && tn(e.attrs, "set", ""), w.NODE_ENV !== "production" && qu(t || {}, o, e);
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
      o && ge(o, d = ke(a)) ? !i || !i.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : qi(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, r = !0);
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
  if (Y(i))
    for (let d = 0; d < i.length; d++) {
      w.NODE_ENV !== "production" && !re(i[d]) && P("props must be strings when using array syntax.", i[d]);
      const u = ke(i[d]);
      Ca(u) && (r[u] = pe);
    }
  else if (i) {
    w.NODE_ENV !== "production" && !me(i) && P("invalid props options", i);
    for (const d in i) {
      const u = ke(d);
      if (Ca(u)) {
        const h = i[d], m = r[u] = Y(h) || oe(h) ? { type: h } : de({}, h), y = m.type;
        let g = !1, $ = !0;
        if (Y(y))
          for (let k = 0; k < y.length; ++k) {
            const v = y[k], p = oe(v) && v.name;
            if (p === "Boolean") {
              g = !0;
              break;
            } else p === "String" && ($ = !1);
          }
        else
          g = oe(y) && y.name === "Boolean";
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
  return e[0] !== "$" && !Dn(e) ? !0 : (w.NODE_ENV !== "production" && P(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ym(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qu(e, t, n) {
  const s = ce(t), o = n.propsOptions[0], i = Object.keys(e).map((r) => ke(r));
  for (const r in o) {
    let l = o[r];
    l != null && bm(
      r,
      s[r],
      l,
      w.NODE_ENV !== "production" ? Ft(s) : s,
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
      const d = Y(i) ? i : [i], u = [];
      for (let h = 0; h < d.length && !c; h++) {
        const { valid: m, expectedType: y } = Em(t, d[h]);
        u.push(y || ""), c = m;
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
  } else s === "Object" ? n = me(e) : s === "Array" ? n = Y(e) : n = e instanceof t;
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
const Ol = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Tl = (e) => Y(e) ? e.map(ut) : [ut(e)], xm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Be((...o) => (w.NODE_ENV !== "production" && qe && !(n === null && Re) && !(n && n.root !== qe.root) && P(
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
      w.NODE_ENV !== "production" && P(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = Tl(i);
      t[o] = () => r;
    }
  }
}, Ku = (e, t) => {
  w.NODE_ENV !== "production" && !Fs(e.vnode) && P(
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
    l ? w.NODE_ENV !== "production" && Bt ? (Dr(o, t, n), tn(e, "set", "$slots")) : n && l === 1 ? i = !1 : Dr(o, t, n) : (i = !t.$stable, zu(t, o)), r = t;
  } else t && (Ku(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Ol(l) && r[l] == null && delete o[l];
};
let Us, Tn;
function an(e, t) {
  e.appContext.config.performance && ui() && Tn.mark(`vue-${t}-${e.uid}`), w.NODE_ENV !== "production" && ch(e, t, ui() ? Tn.now() : Date.now());
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
  w.NODE_ENV !== "production" && uh(e, t, ui() ? Tn.now() : Date.now());
}
function ui() {
  return Us !== void 0 || (typeof window < "u" && window.performance ? (Us = !0, Tn = window.performance) : Us = !1), Us;
}
function Cm() {
  const e = [];
  if (w.NODE_ENV !== "production" && e.length) {
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
  n.__VUE__ = !0, w.NODE_ENV !== "production" && ml(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: m = $e,
    insertStaticContent: y
  } = e, g = (_, O, I, F = null, R = null, L = null, X = void 0, z = null, q = w.NODE_ENV !== "production" && Bt ? !1 : !!O.dynamicChildren) => {
    if (_ === O)
      return;
    _ && !Lt(_, O) && (F = Do(_), bn(_, R, L, !0), _ = null), O.patchFlag === -2 && (q = !1, O.dynamicChildren = null);
    const { type: B, ref: ie, shapeFlag: Q } = O;
    switch (B) {
      case sn:
        $(_, O, I, F);
        break;
      case De:
        k(_, O, I, F);
        break;
      case An:
        _ == null ? v(O, I, F, X) : w.NODE_ENV !== "production" && p(_, O, I, X);
        break;
      case le:
        H(
          _,
          O,
          I,
          F,
          R,
          L,
          X,
          z,
          q
        );
        break;
      default:
        Q & 1 ? V(
          _,
          O,
          I,
          F,
          R,
          L,
          X,
          z,
          q
        ) : Q & 6 ? W(
          _,
          O,
          I,
          F,
          R,
          L,
          X,
          z,
          q
        ) : Q & 64 || Q & 128 ? B.process(
          _,
          O,
          I,
          F,
          R,
          L,
          X,
          z,
          q,
          us
        ) : w.NODE_ENV !== "production" && P("Invalid VNode type:", B, `(${typeof B})`);
    }
    ie != null && R ? bs(ie, _ && _.ref, L, O || _, !O) : ie == null && _ && _.ref != null && bs(_.ref, null, L, _, !0);
  }, $ = (_, O, I, F) => {
    if (_ == null)
      s(
        O.el = l(O.children),
        I,
        F
      );
    else {
      const R = O.el = _.el;
      O.children !== _.children && c(R, O.children);
    }
  }, k = (_, O, I, F) => {
    _ == null ? s(
      O.el = a(O.children || ""),
      I,
      F
    ) : O.el = _.el;
  }, v = (_, O, I, F) => {
    [_.el, _.anchor] = y(
      _.children,
      O,
      I,
      F,
      _.el,
      _.anchor
    );
  }, p = (_, O, I, F) => {
    if (O.children !== _.children) {
      const R = h(_.anchor);
      E(_), [O.el, O.anchor] = y(
        O.children,
        I,
        R,
        F
      );
    } else
      O.el = _.el, O.anchor = _.anchor;
  }, N = ({ el: _, anchor: O }, I, F) => {
    let R;
    for (; _ && _ !== O; )
      R = h(_), s(_, I, F), _ = R;
    s(O, I, F);
  }, E = ({ el: _, anchor: O }) => {
    let I;
    for (; _ && _ !== O; )
      I = h(_), o(_), _ = I;
    o(O);
  }, V = (_, O, I, F, R, L, X, z, q) => {
    O.type === "svg" ? X = "svg" : O.type === "math" && (X = "mathml"), _ == null ? M(
      O,
      I,
      F,
      R,
      L,
      X,
      z,
      q
    ) : S(
      _,
      O,
      R,
      L,
      X,
      z,
      q
    );
  }, M = (_, O, I, F, R, L, X, z) => {
    let q, B;
    const { props: ie, shapeFlag: Q, transition: ne, dirs: ae } = _;
    if (q = _.el = r(
      _.type,
      L,
      ie && ie.is,
      ie
    ), Q & 8 ? d(q, _.children) : Q & 16 && b(
      _.children,
      q,
      null,
      F,
      R,
      pr(_, L),
      X,
      z
    ), ae && Qt(_, null, F, "created"), T(q, _, _.scopeId, X, F), ie) {
      for (const Ce in ie)
        Ce !== "value" && !Dn(Ce) && i(q, Ce, null, ie[Ce], L, F);
      "value" in ie && i(q, "value", null, ie.value, L), (B = ie.onVnodeBeforeMount) && vt(B, F, _);
    }
    w.NODE_ENV !== "production" && (ns(q, "__vnode", _, !0), ns(q, "__vueParentComponent", F, !0)), ae && Qt(_, null, F, "beforeMount");
    const ye = Ju(R, ne);
    ye && ne.beforeEnter(q), s(q, O, I), ((B = ie && ie.onVnodeMounted) || ye || ae) && je(() => {
      B && vt(B, F, _), ye && ne.enter(q), ae && Qt(_, null, F, "mounted");
    }, R);
  }, T = (_, O, I, F, R) => {
    if (I && m(_, I), F)
      for (let L = 0; L < F.length; L++)
        m(_, F[L]);
    if (R) {
      let L = R.subTree;
      if (w.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && (L = zi(L.children) || L), O === L || pi(L.type) && (L.ssContent === O || L.ssFallback === O)) {
        const X = R.vnode;
        T(
          _,
          X,
          X.scopeId,
          X.slotScopeIds,
          R.parent
        );
      }
    }
  }, b = (_, O, I, F, R, L, X, z, q = 0) => {
    for (let B = q; B < _.length; B++) {
      const ie = _[B] = z ? kn(_[B]) : ut(_[B]);
      g(
        null,
        ie,
        O,
        I,
        F,
        R,
        L,
        X,
        z
      );
    }
  }, S = (_, O, I, F, R, L, X) => {
    const z = O.el = _.el;
    w.NODE_ENV !== "production" && (z.__vnode = O);
    let { patchFlag: q, dynamicChildren: B, dirs: ie } = O;
    q |= _.patchFlag & 16;
    const Q = _.props || pe, ne = O.props || pe;
    let ae;
    if (I && Hn(I, !1), (ae = ne.onVnodeBeforeUpdate) && vt(ae, I, O, _), ie && Qt(O, _, I, "beforeUpdate"), I && Hn(I, !0), w.NODE_ENV !== "production" && Bt && (q = 0, X = !1, B = null), (Q.innerHTML && ne.innerHTML == null || Q.textContent && ne.textContent == null) && d(z, ""), B ? (A(
      _.dynamicChildren,
      B,
      z,
      I,
      F,
      pr(O, R),
      L
    ), w.NODE_ENV !== "production" && so(_, O)) : X || Ee(
      _,
      O,
      z,
      null,
      I,
      F,
      pr(O, R),
      L,
      !1
    ), q > 0) {
      if (q & 16)
        D(z, Q, ne, I, R);
      else if (q & 2 && Q.class !== ne.class && i(z, "class", null, ne.class, R), q & 4 && i(z, "style", Q.style, ne.style, R), q & 8) {
        const ye = O.dynamicProps;
        for (let Ce = 0; Ce < ye.length; Ce++) {
          const we = ye[Ce], ht = Q[we], Xe = ne[we];
          (Xe !== ht || we === "value") && i(z, we, ht, Xe, R, I);
        }
      }
      q & 1 && _.children !== O.children && d(z, O.children);
    } else !X && B == null && D(z, Q, ne, I, R);
    ((ae = ne.onVnodeUpdated) || ie) && je(() => {
      ae && vt(ae, I, O, _), ie && Qt(O, _, I, "updated");
    }, F);
  }, A = (_, O, I, F, R, L, X) => {
    for (let z = 0; z < O.length; z++) {
      const q = _[z], B = O[z], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (q.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(q, B) || // - In the case of a component, it could contain anything.
        q.shapeFlag & 198) ? u(q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      g(
        q,
        B,
        ie,
        null,
        F,
        R,
        L,
        X,
        !0
      );
    }
  }, D = (_, O, I, F, R) => {
    if (O !== I) {
      if (O !== pe)
        for (const L in O)
          !Dn(L) && !(L in I) && i(
            _,
            L,
            O[L],
            null,
            R,
            F
          );
      for (const L in I) {
        if (Dn(L)) continue;
        const X = I[L], z = O[L];
        X !== z && L !== "value" && i(_, L, z, X, R, F);
      }
      "value" in I && i(_, "value", O.value, I.value, R);
    }
  }, H = (_, O, I, F, R, L, X, z, q) => {
    const B = O.el = _ ? _.el : l(""), ie = O.anchor = _ ? _.anchor : l("");
    let { patchFlag: Q, dynamicChildren: ne, slotScopeIds: ae } = O;
    w.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Bt || Q & 2048) && (Q = 0, q = !1, ne = null), ae && (z = z ? z.concat(ae) : ae), _ == null ? (s(B, I, F), s(ie, I, F), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      I,
      ie,
      R,
      L,
      X,
      z,
      q
    )) : Q > 0 && Q & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (A(
      _.dynamicChildren,
      ne,
      I,
      R,
      L,
      X,
      z
    ), w.NODE_ENV !== "production" ? so(_, O) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (O.key != null || R && O === R.subTree) && so(
        _,
        O,
        !0
        /* shallow */
      )
    )) : Ee(
      _,
      O,
      I,
      ie,
      R,
      L,
      X,
      z,
      q
    );
  }, W = (_, O, I, F, R, L, X, z, q) => {
    O.slotScopeIds = z, _ == null ? O.shapeFlag & 512 ? R.ctx.activate(
      O,
      I,
      F,
      X,
      q
    ) : G(
      O,
      I,
      F,
      R,
      L,
      X,
      q
    ) : Z(_, O, q);
  }, G = (_, O, I, F, R, L, X) => {
    const z = _.component = hd(
      _,
      F,
      R
    );
    if (w.NODE_ENV !== "production" && z.type.__hmrId && th(z), w.NODE_ENV !== "production" && (gs(_), an(z, "mount")), Fs(_) && (z.ctx.renderer = us), w.NODE_ENV !== "production" && an(z, "init"), gd(z, !1, X), w.NODE_ENV !== "production" && cn(z, "init"), w.NODE_ENV !== "production" && Bt && (_.el = null), z.asyncDep) {
      if (R && R.registerDep(z, se, X), !_.el) {
        const q = z.subTree = fe(De);
        k(null, q, O, I), _.placeholder = q.el;
      }
    } else
      se(
        z,
        _,
        O,
        I,
        R,
        L,
        X
      );
    w.NODE_ENV !== "production" && (vs(), cn(z, "mount"));
  }, Z = (_, O, I) => {
    const F = O.component = _.component;
    if (Pm(_, O, I))
      if (F.asyncDep && !F.asyncResolved) {
        w.NODE_ENV !== "production" && gs(O), ee(F, O, I), w.NODE_ENV !== "production" && vs();
        return;
      } else
        F.next = O, F.update();
    else
      O.el = _.el, F.vnode = O;
  }, se = (_, O, I, F, R, L, X) => {
    const z = () => {
      if (_.isMounted) {
        let { next: Q, bu: ne, u: ae, parent: ye, vnode: Ce } = _;
        {
          const wt = Xu(_);
          if (wt) {
            Q && (Q.el = Ce.el, ee(_, Q, X)), wt.asyncDep.then(() => {
              _.isUnmounted || z();
            });
            return;
          }
        }
        let we = Q, ht;
        w.NODE_ENV !== "production" && gs(Q || _.vnode), Hn(_, !1), Q ? (Q.el = Ce.el, ee(_, Q, X)) : Q = Ce, ne && On(ne), (ht = Q.props && Q.props.onVnodeBeforeUpdate) && vt(ht, ye, Q, Ce), Hn(_, !0), w.NODE_ENV !== "production" && an(_, "render");
        const Xe = Ko(_);
        w.NODE_ENV !== "production" && cn(_, "render");
        const Pt = _.subTree;
        _.subTree = Xe, w.NODE_ENV !== "production" && an(_, "patch"), g(
          Pt,
          Xe,
          // parent may have changed if it's in a teleport
          u(Pt.el),
          // anchor may have changed if it's in a fragment
          Do(Pt),
          _,
          R,
          L
        ), w.NODE_ENV !== "production" && cn(_, "patch"), Q.el = Xe.el, we === null && Ki(_, Xe.el), ae && je(ae, R), (ht = Q.props && Q.props.onVnodeUpdated) && je(
          () => vt(ht, ye, Q, Ce),
          R
        ), w.NODE_ENV !== "production" && pu(_), w.NODE_ENV !== "production" && vs();
      } else {
        let Q;
        const { el: ne, props: ae } = O, { bm: ye, m: Ce, parent: we, root: ht, type: Xe } = _, Pt = Vn(O);
        if (Hn(_, !1), ye && On(ye), !Pt && (Q = ae && ae.onVnodeBeforeMount) && vt(Q, we, O), Hn(_, !0), ne && nr) {
          const wt = () => {
            w.NODE_ENV !== "production" && an(_, "render"), _.subTree = Ko(_), w.NODE_ENV !== "production" && cn(_, "render"), w.NODE_ENV !== "production" && an(_, "hydrate"), nr(
              ne,
              _.subTree,
              _,
              R,
              null
            ), w.NODE_ENV !== "production" && cn(_, "hydrate");
          };
          Pt && Xe.__asyncHydrate ? Xe.__asyncHydrate(
            ne,
            _,
            wt
          ) : wt();
        } else {
          ht.ce && // @ts-expect-error _def is private
          ht.ce._def.shadowRoot !== !1 && ht.ce._injectChildStyle(Xe), w.NODE_ENV !== "production" && an(_, "render");
          const wt = _.subTree = Ko(_);
          w.NODE_ENV !== "production" && cn(_, "render"), w.NODE_ENV !== "production" && an(_, "patch"), g(
            null,
            wt,
            I,
            F,
            _,
            R,
            L
          ), w.NODE_ENV !== "production" && cn(_, "patch"), O.el = wt.el;
        }
        if (Ce && je(Ce, R), !Pt && (Q = ae && ae.onVnodeMounted)) {
          const wt = O;
          je(
            () => vt(Q, we, wt),
            R
          );
        }
        (O.shapeFlag & 256 || we && Vn(we.vnode) && we.vnode.shapeFlag & 256) && _.a && je(_.a, R), _.isMounted = !0, w.NODE_ENV !== "production" && Sr(_), O = I = F = null;
      }
    };
    _.scope.on();
    const q = _.effect = new ao(z);
    _.scope.off();
    const B = _.update = q.run.bind(q), ie = _.job = q.runIfDirty.bind(q);
    ie.i = _, ie.id = _.uid, q.scheduler = () => Li(ie), Hn(_, !0), w.NODE_ENV !== "production" && (q.onTrack = _.rtc ? (Q) => On(_.rtc, Q) : void 0, q.onTrigger = _.rtg ? (Q) => On(_.rtg, Q) : void 0), B();
  }, ee = (_, O, I) => {
    O.component = _;
    const F = _.vnode.props;
    _.vnode = O, _.next = null, gm(_, O.props, F, I), km(_, O.children, I), zt(), pa(_), Kt();
  }, Ee = (_, O, I, F, R, L, X, z, q = !1) => {
    const B = _ && _.children, ie = _ ? _.shapeFlag : 0, Q = O.children, { patchFlag: ne, shapeFlag: ae } = O;
    if (ne > 0) {
      if (ne & 128) {
        Ot(
          B,
          Q,
          I,
          F,
          R,
          L,
          X,
          z,
          q
        );
        return;
      } else if (ne & 256) {
        pt(
          B,
          Q,
          I,
          F,
          R,
          L,
          X,
          z,
          q
        );
        return;
      }
    }
    ae & 8 ? (ie & 16 && Bs(B, R, L), Q !== B && d(I, Q)) : ie & 16 ? ae & 16 ? Ot(
      B,
      Q,
      I,
      F,
      R,
      L,
      X,
      z,
      q
    ) : Bs(B, R, L, !0) : (ie & 8 && d(I, ""), ae & 16 && b(
      Q,
      I,
      F,
      R,
      L,
      X,
      z,
      q
    ));
  }, pt = (_, O, I, F, R, L, X, z, q) => {
    _ = _ || ms, O = O || ms;
    const B = _.length, ie = O.length, Q = Math.min(B, ie);
    let ne;
    for (ne = 0; ne < Q; ne++) {
      const ae = O[ne] = q ? kn(O[ne]) : ut(O[ne]);
      g(
        _[ne],
        ae,
        I,
        null,
        R,
        L,
        X,
        z,
        q
      );
    }
    B > ie ? Bs(
      _,
      R,
      L,
      !0,
      !1,
      Q
    ) : b(
      O,
      I,
      F,
      R,
      L,
      X,
      z,
      q,
      Q
    );
  }, Ot = (_, O, I, F, R, L, X, z, q) => {
    let B = 0;
    const ie = O.length;
    let Q = _.length - 1, ne = ie - 1;
    for (; B <= Q && B <= ne; ) {
      const ae = _[B], ye = O[B] = q ? kn(O[B]) : ut(O[B]);
      if (Lt(ae, ye))
        g(
          ae,
          ye,
          I,
          null,
          R,
          L,
          X,
          z,
          q
        );
      else
        break;
      B++;
    }
    for (; B <= Q && B <= ne; ) {
      const ae = _[Q], ye = O[ne] = q ? kn(O[ne]) : ut(O[ne]);
      if (Lt(ae, ye))
        g(
          ae,
          ye,
          I,
          null,
          R,
          L,
          X,
          z,
          q
        );
      else
        break;
      Q--, ne--;
    }
    if (B > Q) {
      if (B <= ne) {
        const ae = ne + 1, ye = ae < ie ? O[ae].el : F;
        for (; B <= ne; )
          g(
            null,
            O[B] = q ? kn(O[B]) : ut(O[B]),
            I,
            ye,
            R,
            L,
            X,
            z,
            q
          ), B++;
      }
    } else if (B > ne)
      for (; B <= Q; )
        bn(_[B], R, L, !0), B++;
    else {
      const ae = B, ye = B, Ce = /* @__PURE__ */ new Map();
      for (B = ye; B <= ne; B++) {
        const rt = O[B] = q ? kn(O[B]) : ut(O[B]);
        rt.key != null && (w.NODE_ENV !== "production" && Ce.has(rt.key) && P(
          "Duplicate keys found during update:",
          JSON.stringify(rt.key),
          "Make sure keys are unique."
        ), Ce.set(rt.key, B));
      }
      let we, ht = 0;
      const Xe = ne - ye + 1;
      let Pt = !1, wt = 0;
      const js = new Array(Xe);
      for (B = 0; B < Xe; B++) js[B] = 0;
      for (B = ae; B <= Q; B++) {
        const rt = _[B];
        if (ht >= Xe) {
          bn(rt, R, L, !0);
          continue;
        }
        let Gt;
        if (rt.key != null)
          Gt = Ce.get(rt.key);
        else
          for (we = ye; we <= ne; we++)
            if (js[we - ye] === 0 && Lt(rt, O[we])) {
              Gt = we;
              break;
            }
        Gt === void 0 ? bn(rt, R, L, !0) : (js[Gt - ye] = B + 1, Gt >= wt ? wt = Gt : Pt = !0, g(
          rt,
          O[Gt],
          I,
          null,
          R,
          L,
          X,
          z,
          q
        ), ht++);
      }
      const sa = Pt ? Om(js) : ms;
      for (we = sa.length - 1, B = Xe - 1; B >= 0; B--) {
        const rt = ye + B, Gt = O[rt], oa = O[rt + 1], ia = rt + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          oa.el || oa.placeholder
        ) : F;
        js[B] === 0 ? g(
          null,
          Gt,
          I,
          ia,
          R,
          L,
          X,
          z,
          q
        ) : Pt && (we < 0 || B !== sa[we] ? Tt(Gt, I, ia, 2) : we--);
      }
    }
  }, Tt = (_, O, I, F, R = null) => {
    const { el: L, type: X, transition: z, children: q, shapeFlag: B } = _;
    if (B & 6) {
      Tt(_.component.subTree, O, I, F);
      return;
    }
    if (B & 128) {
      _.suspense.move(O, I, F);
      return;
    }
    if (B & 64) {
      X.move(_, O, I, us);
      return;
    }
    if (X === le) {
      s(L, O, I);
      for (let Q = 0; Q < q.length; Q++)
        Tt(q[Q], O, I, F);
      s(_.anchor, O, I);
      return;
    }
    if (X === An) {
      N(_, O, I);
      return;
    }
    if (F !== 2 && B & 1 && z)
      if (F === 0)
        z.beforeEnter(L), s(L, O, I), je(() => z.enter(L), R);
      else {
        const { leave: Q, delayLeave: ne, afterLeave: ae } = z, ye = () => {
          _.ctx.isUnmounted ? o(L) : s(L, O, I);
        }, Ce = () => {
          Q(L, () => {
            ye(), ae && ae();
          });
        };
        ne ? ne(L, ye, Ce) : Ce();
      }
    else
      s(L, O, I);
  }, bn = (_, O, I, F = !1, R = !1) => {
    const {
      type: L,
      props: X,
      ref: z,
      children: q,
      dynamicChildren: B,
      shapeFlag: ie,
      patchFlag: Q,
      dirs: ne,
      cacheIndex: ae
    } = _;
    if (Q === -2 && (R = !1), z != null && (zt(), bs(z, null, I, _, !0), Kt()), ae != null && (O.renderCache[ae] = void 0), ie & 256) {
      O.ctx.deactivate(_);
      return;
    }
    const ye = ie & 1 && ne, Ce = !Vn(_);
    let we;
    if (Ce && (we = X && X.onVnodeBeforeUnmount) && vt(we, O, _), ie & 6)
      Rf(_.component, I, F);
    else {
      if (ie & 128) {
        _.suspense.unmount(I, F);
        return;
      }
      ye && Qt(_, null, O, "beforeUnmount"), ie & 64 ? _.type.remove(
        _,
        O,
        I,
        us,
        F
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== le || Q > 0 && Q & 64) ? Bs(
        B,
        O,
        I,
        !1,
        !0
      ) : (L === le && Q & 384 || !R && ie & 16) && Bs(q, O, I), F && Zi(_);
    }
    (Ce && (we = X && X.onVnodeUnmounted) || ye) && je(() => {
      we && vt(we, O, _), ye && Qt(_, null, O, "unmounted");
    }, I);
  }, Zi = (_) => {
    const { type: O, el: I, anchor: F, transition: R } = _;
    if (O === le) {
      w.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && R && !R.persisted ? _.children.forEach((X) => {
        X.type === De ? o(X.el) : Zi(X);
      }) : Pf(I, F);
      return;
    }
    if (O === An) {
      E(_);
      return;
    }
    const L = () => {
      o(I), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (_.shapeFlag & 1 && R && !R.persisted) {
      const { leave: X, delayLeave: z } = R, q = () => X(I, L);
      z ? z(_.el, L, q) : q();
    } else
      L();
  }, Pf = (_, O) => {
    let I;
    for (; _ !== O; )
      I = h(_), o(_), _ = I;
    o(O);
  }, Rf = (_, O, I) => {
    w.NODE_ENV !== "production" && _.type.__hmrId && nh(_);
    const {
      bum: F,
      scope: R,
      job: L,
      subTree: X,
      um: z,
      m: q,
      a: B,
      parent: ie,
      slots: { __: Q }
    } = _;
    di(q), di(B), F && On(F), ie && Y(Q) && Q.forEach((ne) => {
      ie.renderCache[ne] = void 0;
    }), R.stop(), L && (L.flags |= 8, bn(X, _, O, I)), z && je(z, O), je(() => {
      _.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve()), w.NODE_ENV !== "production" && ah(_);
  }, Bs = (_, O, I, F = !1, R = !1, L = 0) => {
    for (let X = L; X < _.length; X++)
      bn(_[X], O, I, F, R);
  }, Do = (_) => {
    if (_.shapeFlag & 6)
      return Do(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const O = h(_.anchor || _.el), I = O && O[gu];
    return I ? h(I) : O;
  };
  let er = !1;
  const na = (_, O, I) => {
    _ == null ? O._vnode && bn(O._vnode, null, null, !0) : g(
      O._vnode || null,
      _,
      O,
      null,
      null,
      null,
      I
    ), O._vnode = _, er || (er = !0, pa(), ri(), er = !1);
  }, us = {
    p: g,
    um: bn,
    m: Tt,
    r: Zi,
    mt: G,
    mc: b,
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
  if (Y(s) && Y(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = kn(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && so(r, l)), l.type === sn && (l.el = r.el), l.type === De && !l.el && (l.el = r.el), w.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
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
    return e || w.NODE_ENV !== "production" && P(
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
    w.NODE_ENV !== "production" ? de({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function ed(e, t) {
  return ko(
    e,
    null,
    w.NODE_ENV !== "production" ? de({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function nn(e, t, n) {
  return w.NODE_ENV !== "production" && !oe(t) && P(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ko(e, t, n);
}
function ko(e, t, n = pe) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  w.NODE_ENV !== "production" && !t && (s !== void 0 && P(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && P(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && P(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  w.NODE_ENV !== "production" && (l.onWarn = P);
  const a = t && s || !t && i !== "post";
  let c;
  if (Os) {
    if (i === "sync") {
      const m = Zu();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = $e, m.resume = $e, m.pause = $e, m;
    }
  }
  const d = qe;
  l.call = (m, y, g) => It(m, d, y, g);
  let u = !1;
  i === "post" ? l.scheduler = (m) => {
    je(m, d && d.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (m, y) => {
    y ? m() : Li(m);
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
  if (w.NODE_ENV !== "production" && !s)
    return P("useModel() called without active instance."), U();
  const o = ke(t);
  if (w.NODE_ENV !== "production" && !s.propsOptions[0][o])
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
        const y = n.set ? n.set(m) : m;
        if (!at(y, d) && !(u !== pe && at(m, u)))
          return;
        const g = s.vnode.props;
        g && // check if parent has passed v-model
        (t in g || o in g || i in g) && (`onUpdate:${t}` in g || `onUpdate:${o}` in g || `onUpdate:${i}` in g) || (d = m, c()), s.emit(`update:${t}`, y), at(m, y) && at(m, u) && !at(y, h) && c(), u = m, h = y;
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
const nd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ke(t)}Modifiers`] || e[`${et(t)}Modifiers`];
function Am(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (w.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(en(ke(t)) in u)) && P(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${en(ke(t))}" prop.`
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
  if (r && (r.trim && (o = n.map((d) => re(d) ? d.trim() : d)), r.number && (o = n.map(ei))), w.NODE_ENV !== "production" && dh(e, t, o), w.NODE_ENV !== "production") {
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
  s[l = en(ke(t))];
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
  return !i && !l ? (me(e) && s.set(e, null), null) : (Y(i) ? i.forEach((a) => r[a] = null) : de(r, i), me(e) && s.set(e, r), r);
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
    ctx: y,
    inheritAttrs: g
  } = e, $ = po(e);
  let k, v;
  w.NODE_ENV !== "production" && (Vr = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = o || s, V = w.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(E, {
        get(M, T, b) {
          return P(
            `Property '${String(
              T
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, T, b);
        }
      }) : E;
      k = ut(
        c.call(
          V,
          E,
          d,
          w.NODE_ENV !== "production" ? Ft(u) : u,
          m,
          h,
          y
        )
      ), v = l;
    } else {
      const E = t;
      w.NODE_ENV !== "production" && l === u && fi(), k = ut(
        E.length > 1 ? E(
          w.NODE_ENV !== "production" ? Ft(u) : u,
          w.NODE_ENV !== "production" ? {
            get attrs() {
              return fi(), Ft(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : E(
          w.NODE_ENV !== "production" ? Ft(u) : u,
          null
        )
      ), v = t.props ? l : Im(l);
    }
  } catch (E) {
    oo.length = 0, Ln(E, e, 1), k = fe(De);
  }
  let p = k, N;
  if (w.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([p, N] = od(k)), v && g !== !1) {
    const E = Object.keys(v), { shapeFlag: V } = p;
    if (E.length) {
      if (V & 7)
        i && E.some(Zo) && (v = Mm(
          v,
          i
        )), p = Mt(p, v, !1, !0);
      else if (w.NODE_ENV !== "production" && !Vr && p.type !== De) {
        const M = Object.keys(l), T = [], b = [];
        for (let S = 0, A = M.length; S < A; S++) {
          const D = M[S];
          gn(D) ? Zo(D) || T.push(D[2].toLowerCase() + D.slice(3)) : b.push(D);
        }
        b.length && P(
          `Extraneous non-props attributes (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), T.length && P(
          `Extraneous non-emits event listeners (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (w.NODE_ENV !== "production" && !$a(p) && P(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), p = Mt(p, null, !1, !0), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && (w.NODE_ENV !== "production" && !$a(p) && P(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), vn(p, n.transition)), w.NODE_ENV !== "production" && N ? N(p) : k = p, po($), k;
}
const od = (e) => {
  const t = e.children, n = e.dynamicChildren, s = zi(t, !1);
  if (s) {
    if (w.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
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
      if (o.type !== De || o.children === "v-if") {
        if (n)
          return;
        if (n = o, w.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
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
}, $a = (e) => e.shapeFlag & 7 || e.type === De;
function Pm(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, c = i.emitsOptions;
  if (w.NODE_ENV !== "production" && (o || l) && Bt || t.dirs || t.transition)
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
  const h = t.ssContent, m = t.ssFallback, { activeBranch: y, pendingBranch: g, isInFallback: $, isHydrating: k } = u;
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
    ), u.deps <= 0 ? u.resolve() : $ && (k || (a(
      y,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), _s(u, m)))) : (u.pendingId = Ar++, k ? (u.isHydrating = !1, u.activeBranch = g) : c(g, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = d("div"), $ ? (a(
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
      y,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), _s(u, m))) : y && Lt(h, y) ? (a(
      y,
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
  else if (y && Lt(h, y))
    a(
      y,
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
    const { timeout: v, pendingId: p } = u;
    v > 0 ? setTimeout(() => {
      u.pendingId === p && u.fallback(m);
    }, v) : v === 0 && u.fallback(m);
  }
}
let Va = !1;
function id(e, t, n, s, o, i, r, l, a, c, d = !1) {
  w.NODE_ENV !== "production" && !Va && (Va = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: h,
    um: m,
    n: y,
    o: { parentNode: g, remove: $ }
  } = c;
  let k;
  const v = Um(e);
  v && t && t.pendingBranch && (k = t.pendingId, t.deps++);
  const p = e.props ? ti(e.props.timeout) : void 0;
  w.NODE_ENV !== "production" && pl(p, "Suspense timeout");
  const N = i, E = {
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
    resolve(V = !1, M = !1) {
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
        vnode: T,
        activeBranch: b,
        pendingBranch: S,
        pendingId: A,
        effects: D,
        parentComponent: H,
        container: W
      } = E;
      let G = !1;
      E.isHydrating ? E.isHydrating = !1 : V || (G = b && S.transition && S.transition.mode === "out-in", G && (b.transition.afterLeave = () => {
        A === E.pendingId && (h(
          S,
          W,
          i === N ? y(b) : i,
          0
        ), Ss(D));
      }), b && (g(b.el) === W && (i = y(b)), m(b, H, E, !0)), G || h(S, W, i, 0)), _s(E, S), E.pendingBranch = null, E.isInFallback = !1;
      let Z = E.parent, se = !1;
      for (; Z; ) {
        if (Z.pendingBranch) {
          Z.effects.push(...D), se = !0;
          break;
        }
        Z = Z.parent;
      }
      !se && !G && Ss(D), E.effects = [], v && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), mo(T, "onResolve");
    },
    fallback(V) {
      if (!E.pendingBranch)
        return;
      const { vnode: M, activeBranch: T, parentComponent: b, container: S, namespace: A } = E;
      mo(M, "onFallback");
      const D = y(T), H = () => {
        E.isInFallback && (u(
          null,
          V,
          S,
          D,
          b,
          null,
          // fallback tree will not have suspense context
          A,
          l,
          a
        ), _s(E, V));
      }, W = V.transition && V.transition.mode === "out-in";
      W && (T.transition.afterLeave = H), E.isInFallback = !0, m(
        T,
        b,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), W || H();
    },
    move(V, M, T) {
      E.activeBranch && h(E.activeBranch, V, M, T), E.container = V;
    },
    next() {
      return E.activeBranch && y(E.activeBranch);
    },
    registerDep(V, M, T) {
      const b = !!E.pendingBranch;
      b && E.deps++;
      const S = V.vnode.el;
      V.asyncDep.catch((A) => {
        Ln(A, V, 0);
      }).then((A) => {
        if (V.isUnmounted || E.isUnmounted || E.pendingId !== V.suspenseId)
          return;
        V.asyncResolved = !0;
        const { vnode: D } = V;
        w.NODE_ENV !== "production" && gs(D), Fr(V, A, !1), S && (D.el = S);
        const H = !S && V.subTree.el;
        M(
          V,
          D,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          g(S || V.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          S ? null : y(V.subTree),
          E,
          r,
          T
        ), H && $(H), Ki(V, D.el), w.NODE_ENV !== "production" && vs(), b && --E.deps === 0 && E.resolve();
      });
    },
    unmount(V, M) {
      E.isUnmounted = !0, E.activeBranch && m(
        E.activeBranch,
        n,
        V,
        M
      ), E.pendingBranch && m(
        E.pendingBranch,
        n,
        V,
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
  ), e.ssFallback = s ? Aa(n.fallback) : fe(De);
}
function Aa(e) {
  let t;
  if (oe(e)) {
    const n = os && e._c;
    n && (e._d = !1, x()), e = e(), n && (e._d = !0, t = tt, ld());
  }
  if (Y(e)) {
    const n = zi(e);
    w.NODE_ENV !== "production" && !n && e.filter((s) => s !== wl).length > 0 && P("<Suspense> slots expect a single root node."), e = n;
  }
  return e = ut(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function rd(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Ss(e);
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
const le = Symbol.for("v-fgt"), sn = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), An = Symbol.for("v-stc"), oo = [];
let tt = null;
function x(e = !1) {
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
function C(e, t, n, s, o, i) {
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
  if (w.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
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
function f(e, t = null, n = null, s = 0, o = null, i = e === le ? 0 : 1, r = !1, l = !1) {
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
  return l ? ($l(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= re(n) ? 8 : 16), w.NODE_ENV !== "production" && a.key !== a.key && P("VNode created with invalid key (NaN). VNode type:", a.type), os > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && tt.push(a), a;
}
const fe = w.NODE_ENV !== "production" ? zm : ud;
function ud(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === wl) && (w.NODE_ENV !== "production" && !e && P(`Invalid vnode type when creating vnode: ${e}.`), e = De), rn(e)) {
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
    l && !re(l) && (t.class = Oe(l)), me(a) && (xs(a) && !Y(a) && (a = de({}, a)), t.style = dt(a));
  }
  const r = re(e) ? 1 : pi(e) ? 128 : vu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return w.NODE_ENV !== "production" && r & 4 && xs(e) && (e = ce(e), P(
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
      n && i ? Y(i) ? i.concat(Wo(t)) : [i, Wo(t)] : Wo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: w.NODE_ENV !== "production" && r === -1 && Y(l) ? l.map(fd) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== le ? r === -1 ? 16 : r | 16 : r,
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
  return Y(e.children) && (t.children = e.children.map(fd)), t;
}
function Le(e = " ", t = 0) {
  return fe(sn, null, e, t);
}
function Cs(e, t) {
  const n = fe(An, null, e);
  return n.staticCount = t, n;
}
function j(e = "", t = !1) {
  return t ? (x(), ft(De, null, e)) : fe(De, null, e);
}
function ut(e) {
  return e == null || typeof e == "boolean" ? fe(De) : Y(e) ? fe(
    le,
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
  else if (Y(t))
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
  else oe(t) ? (t = { default: t, _ctx: Re }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Le(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Oe([t.class, s.class]));
      else if (o === "style")
        t.style = dt([t.style, s.style]);
      else if (gn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(Y(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
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
  return w.NODE_ENV !== "production" ? i.ctx = Uh(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Am.bind(null, i), e.ce && e.ce(i), i;
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
  if (w.NODE_ENV !== "production") {
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
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, to), w.NODE_ENV !== "production" && qh(e);
  const { setup: o } = s;
  if (o) {
    zt();
    const i = e.setupContext = o.length > 1 ? bd(e) : null, r = is(e), l = as(
      o,
      e,
      0,
      [
        w.NODE_ENV !== "production" ? Ft(e.props) : e.props,
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
      if (e.asyncDep = l, w.NODE_ENV !== "production" && !e.suspense) {
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
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (w.NODE_ENV !== "production" && rn(t) && P(
    "setup() should not return VNodes directly - return a render function instead."
  ), w.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = fl(t), w.NODE_ENV !== "production" && zh(e)) : w.NODE_ENV !== "production" && t !== void 0 && P(
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
        s.render = io(o, c), w.NODE_ENV !== "production" && cn(e, "compile");
      }
    }
    e.render = s.render || $e, Br && Br(e);
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
  w.NODE_ENV !== "production" && !s.render && e.render === $e && !t && (!io && s.template ? P(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : P("Component is missing template or render function: ", s));
}
const Ia = w.NODE_ENV !== "production" ? {
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
    if (w.NODE_ENV !== "production" && (e.exposed && P("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Y(n) ? s = "array" : Ae(n) && (s = "ref")), s !== "object" && P(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (w.NODE_ENV !== "production") {
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
const te = (e, t) => {
  const n = Hp(e, t, Os);
  if (w.NODE_ENV !== "production") {
    const s = it();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Xt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? me(t) && !Y(t) ? rn(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && rn(n) && (n = [n]), fe(e, t, n));
}
function Ed() {
  if (w.NODE_ENV === "production" || typeof window > "u")
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
    const y = a(u, "inject");
    return y && h.push(r("injected", y)), h.push([
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
    const y = {};
    for (const g in u.ctx)
      c(m, g, h) && (y[g] = u.ctx[g]);
    return y;
  }
  function c(u, h, m) {
    const y = u[m];
    if (Y(y) && y.includes(h) || me(y) && h in y || u.extends && c(u.extends, h, m) || u.mixins && u.mixins.some((g) => c(g, h, m)))
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
const jr = "3.5.18", Ie = w.NODE_ENV !== "production" ? P : $e, e0 = Ri, t0 = Rt, n0 = ml, s0 = {
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
}, o0 = s0, i0 = null, r0 = null, l0 = null;
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
const Nd = Hr ? (e) => Hr.createHTML(e) : (e) => e, a0 = "http://www.w3.org/2000/svg", c0 = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Pa = dn && /* @__PURE__ */ dn.createElement("template"), u0 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? dn.createElementNS(a0, e) : t === "mathml" ? dn.createElementNS(c0, e) : n ? dn.createElement(e, { is: n }) : dn.createElement(e);
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
), d0 = (e) => (e.displayName = "Transition", e.props = Sd, e), xt = /* @__PURE__ */ d0(
  (e, { slots: t }) => Xt(wu, kd(e), t)
), Un = (e, t = []) => {
  Y(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ra = (e) => e ? Y(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function kd(e) {
  const t = {};
  for (const D in e)
    D in xd || (t[D] = e[D]);
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
  } = e, y = f0(o), g = y && y[0], $ = y && y[1], {
    onBeforeEnter: k,
    onEnter: v,
    onEnterCancelled: p,
    onLeave: N,
    onLeaveCancelled: E,
    onBeforeAppear: V = k,
    onAppear: M = v,
    onAppearCancelled: T = p
  } = t, b = (D, H, W, G) => {
    D._enterCancelled = G, wn(D, H ? d : l), wn(D, H ? c : r), W && W();
  }, S = (D, H) => {
    D._isLeaving = !1, wn(D, u), wn(D, m), wn(D, h), H && H();
  }, A = (D) => (H, W) => {
    const G = D ? M : v, Z = () => b(H, D, W);
    Un(G, [H, Z]), La(() => {
      wn(H, D ? a : i), Yt(H, D ? d : l), Ra(G) || Fa(H, s, g, Z);
    });
  };
  return de(t, {
    onBeforeEnter(D) {
      Un(k, [D]), Yt(D, i), Yt(D, r);
    },
    onBeforeAppear(D) {
      Un(V, [D]), Yt(D, a), Yt(D, c);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(D, H) {
      D._isLeaving = !0;
      const W = () => S(D, H);
      Yt(D, u), D._enterCancelled ? (Yt(D, h), Ur()) : (Ur(), Yt(D, h)), La(() => {
        D._isLeaving && (wn(D, u), Yt(D, m), Ra(N) || Fa(D, s, $, W));
      }), Un(N, [D, W]);
    },
    onEnterCancelled(D) {
      b(D, !1, void 0, !0), Un(p, [D]);
    },
    onAppearCancelled(D) {
      b(D, !0, void 0, !0), Un(T, [D]);
    },
    onLeaveCancelled(D) {
      S(D), Un(E, [D]);
    }
  });
}
function f0(e) {
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
let p0 = 0;
function Fa(e, t, n, s) {
  const o = e._endId = ++p0, i = () => {
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
  const n = window.getComputedStyle(e), s = (y) => (n[y] || "").split(", "), o = s(`${_n}Delay`), i = s(`${_n}Duration`), r = Ba(o, i), l = s(`${qs}Delay`), a = s(`${qs}Duration`), c = Ba(l, a);
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
function h0(e, t, n) {
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
function m0() {
  Vl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Td = Symbol(xe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function g0(e) {
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
    nn(s, $e, { flush: "post" });
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
  else if (e.type === le)
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
const v0 = /(^|;)\s*display\s*:/;
function y0(e, t, n) {
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
      r && (n += ";" + r), s.cssText = n, i = v0.test(n);
    }
  } else t && e.removeAttribute("style");
  mi in e && (e[mi] = i ? s.display : "", e[Od] && (s.display = "none"));
}
const b0 = /[^\\];\s*$/, Ha = /\s*!important$/;
function Go(e, t, n) {
  if (Y(n))
    n.forEach((s) => Go(e, t, s));
  else if (n == null && (n = ""), xe.NODE_ENV !== "production" && b0.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = _0(e, t);
    Ha.test(n) ? e.setProperty(
      et(s),
      n.replace(Ha, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ua = ["Webkit", "Moz", "ms"], mr = {};
function _0(e, t) {
  const n = mr[t];
  if (n)
    return n;
  let s = ke(t);
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
function E0(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Wa = Symbol("_vei");
function w0(e, t, n, s, o = null) {
  const i = e[Wa] || (e[Wa] = {}), r = i[t];
  if (s && r)
    r.value = xe.NODE_ENV !== "production" ? Ya(s, t) : s;
  else {
    const [l, a] = N0(t);
    if (s) {
      const c = i[t] = k0(
        xe.NODE_ENV !== "production" ? Ya(s, t) : s,
        o
      );
      pn(e, l, c, a);
    } else r && (E0(e, l, r, a), i[t] = void 0);
  }
}
const Ga = /(?:Once|Passive|Capture)$/;
function N0(e) {
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
const x0 = /* @__PURE__ */ Promise.resolve(), S0 = () => gr || (x0.then(() => gr = 0), gr = Date.now());
function k0(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    It(
      C0(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = S0(), n;
}
function Ya(e, t) {
  return oe(e) || Y(e) ? e : (Ie(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), $e);
}
function C0(e, t) {
  if (Y(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, O0 = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? h0(e, s, r) : t === "style" ? y0(e, n, s) : gn(t) ? Zo(t) || w0(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : T0(e, t, s, r)) ? (Ka(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && za(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? Ka(e, ke(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), za(e, t, s, r));
};
function T0(e, t, n, s) {
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
function Fe(e, t, n) {
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
const $0 = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Fe(e, t, Fd), D0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Gi extends D0 {
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
      if (i && !Y(i))
        for (const a in i) {
          const c = i[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = ti(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[ke(a)] = !0);
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
    const { props: n } = t, s = Y(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(ke))
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
    const o = ke(t);
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
function V0() {
  const e = xe.NODE_ENV !== "production" ? zr("useShadowRoot") : zr();
  return e && e.shadowRoot;
}
function A0(e = "$style") {
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
const $d = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap(), vi = Symbol("_moveCb"), Qa = Symbol("_enterCb"), I0 = (e) => (delete e.props.mode, e), M0 = /* @__PURE__ */ I0({
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
      if (!B0(
        o[0].el,
        n.vnode.el,
        r
      )) {
        o = [];
        return;
      }
      o.forEach(R0), o.forEach(L0);
      const l = o.filter(F0);
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
      let a = r.tag || le;
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
}), P0 = M0;
function R0(e) {
  const t = e.el;
  t[vi] && t[vi](), t[Qa] && t[Qa]();
}
function L0(e) {
  Dd.set(e, e.el.getBoundingClientRect());
}
function F0(e) {
  const t = $d.get(e), n = Dd.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${s}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function B0(e, t, n) {
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
  return Y(t) ? (n) => On(t, n) : t;
};
function j0(e) {
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
    }), t || (pn(e, "compositionstart", j0), pn(e, "compositionend", Za), pn(e, "change", Za));
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
      if (Y(s)) {
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
  if (Y(t))
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
  const n = e.multiple, s = Y(t);
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
function H0() {
  Rn.getSSRProps = ({ value: e }) => ({ value: e }), Al.getSSRProps = ({ value: e }, t) => {
    if (t.props && Mn(t.props.value, e))
      return { checked: !0 };
  }, Zt.getSSRProps = ({ value: e }, t) => {
    if (Y(e)) {
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
const U0 = ["ctrl", "shift", "alt", "meta"], q0 = {
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
  exact: (e, t) => U0.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ut = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = q0[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, z0 = {
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
      (r) => r === i || z0[r] === i
    ))
      return e(o);
  });
}, Md = /* @__PURE__ */ de({ patchProp: O0 }, u0);
let ro, nc = !1;
function Pd() {
  return ro || (ro = Wu(Md));
}
function Rd() {
  return ro = nc ? ro : Gu(Md), nc = !0, ro;
}
const Ld = (...e) => {
  Pd().render(...e);
}, K0 = (...e) => {
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
const W0 = () => {
  sc || (sc = !0, H0(), m0());
}, G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: wu,
  BaseTransitionPropsValidators: yl,
  Comment: De,
  DeprecationTypes: l0,
  EffectScope: ll,
  ErrorCodes: Xp,
  ErrorTypeStrings: e0,
  Fragment: le,
  KeepAlive: Mh,
  ReactiveEffect: ao,
  Static: An,
  Suspense: Lm,
  Teleport: Fn,
  Text: sn,
  TrackOpTypes: Up,
  Transition: xt,
  TransitionGroup: P0,
  TriggerOpTypes: qp,
  VueElement: Gi,
  assertNumber: pl,
  callWithAsyncErrorHandling: It,
  callWithErrorHandling: as,
  camelize: ke,
  capitalize: on,
  cloneVNode: Mt,
  compatUtils: r0,
  computed: te,
  createApp: Es,
  createBlock: ft,
  createCommentVNode: j,
  createElementBlock: C,
  createElementVNode: f,
  createHydrationRenderer: Gu,
  createPropsRestProxy: sm,
  createRenderer: Wu,
  createSSRApp: Fd,
  createSlots: Bh,
  createStaticVNode: Cs,
  createTextVNode: Le,
  createVNode: fe,
  customRef: iu,
  defineAsyncComponent: Ah,
  defineComponent: bl,
  defineCustomElement: Fe,
  defineEmits: Wh,
  defineExpose: Gh,
  defineModel: Xh,
  defineOptions: Yh,
  defineProps: Kh,
  defineSSRCustomElement: $0,
  defineSlots: Jh,
  devtools: t0,
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
  hydrate: K0,
  hydrateOnIdle: Ch,
  hydrateOnInteraction: Dh,
  hydrateOnMediaQuery: $h,
  hydrateOnVisible: Th,
  initCustomFormatter: Ed,
  initDirectivesForSSR: W0,
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
  normalizeClass: Oe,
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
  openBlock: x,
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
  renderList: Se,
  renderSlot: Bn,
  resolveComponent: Lh,
  resolveDirective: Fh,
  resolveDynamicComponent: Nl,
  resolveFilter: i0,
  resolveTransitionHooks: ks,
  setBlockTracking: Ir,
  setDevtoolsHook: n0,
  setTransitionHooks: vn,
  shallowReactive: tu,
  shallowReadonly: Ft,
  shallowRef: su,
  ssrContextKey: Qu,
  ssrUtils: o0,
  stop: pp,
  toDisplayString: K,
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
  useCssModule: A0,
  useCssVars: g0,
  useHost: zr,
  useId: vh,
  useModel: Vm,
  useSSRContext: Zu,
  useShadowRoot: V0,
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
  withCtx: Be,
  withDefaults: Qh,
  withDirectives: yt,
  withKeys: yi,
  withMemo: Zm,
  withModifiers: Ut,
  withScopeId: hh
}, Symbol.toStringTag, { value: "Module" }));
var J = {};
const go = Symbol(J.NODE_ENV !== "production" ? "Fragment" : ""), lo = Symbol(J.NODE_ENV !== "production" ? "Teleport" : ""), Il = Symbol(J.NODE_ENV !== "production" ? "Suspense" : ""), bi = Symbol(J.NODE_ENV !== "production" ? "KeepAlive" : ""), qd = Symbol(
  J.NODE_ENV !== "production" ? "BaseTransition" : ""
), rs = Symbol(J.NODE_ENV !== "production" ? "openBlock" : ""), zd = Symbol(J.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  J.NODE_ENV !== "production" ? "createElementBlock" : ""
), Ml = Symbol(J.NODE_ENV !== "production" ? "createVNode" : ""), Pl = Symbol(
  J.NODE_ENV !== "production" ? "createElementVNode" : ""
), Oo = Symbol(
  J.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Rl = Symbol(
  J.NODE_ENV !== "production" ? "createTextVNode" : ""
), Wd = Symbol(
  J.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Ll = Symbol(
  J.NODE_ENV !== "production" ? "resolveComponent" : ""
), Fl = Symbol(
  J.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Bl = Symbol(
  J.NODE_ENV !== "production" ? "resolveDirective" : ""
), jl = Symbol(
  J.NODE_ENV !== "production" ? "resolveFilter" : ""
), Hl = Symbol(
  J.NODE_ENV !== "production" ? "withDirectives" : ""
), Ul = Symbol(J.NODE_ENV !== "production" ? "renderList" : ""), Gd = Symbol(J.NODE_ENV !== "production" ? "renderSlot" : ""), Yd = Symbol(J.NODE_ENV !== "production" ? "createSlots" : ""), Ji = Symbol(
  J.NODE_ENV !== "production" ? "toDisplayString" : ""
), _i = Symbol(J.NODE_ENV !== "production" ? "mergeProps" : ""), ql = Symbol(
  J.NODE_ENV !== "production" ? "normalizeClass" : ""
), zl = Symbol(
  J.NODE_ENV !== "production" ? "normalizeStyle" : ""
), vo = Symbol(
  J.NODE_ENV !== "production" ? "normalizeProps" : ""
), To = Symbol(
  J.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Kl = Symbol(J.NODE_ENV !== "production" ? "toHandlers" : ""), Kr = Symbol(J.NODE_ENV !== "production" ? "camelize" : ""), Y0 = Symbol(J.NODE_ENV !== "production" ? "capitalize" : ""), Wr = Symbol(
  J.NODE_ENV !== "production" ? "toHandlerKey" : ""
), Ei = Symbol(
  J.NODE_ENV !== "production" ? "setBlockTracking" : ""
), J0 = Symbol(J.NODE_ENV !== "production" ? "pushScopeId" : ""), X0 = Symbol(J.NODE_ENV !== "production" ? "popScopeId" : ""), Wl = Symbol(J.NODE_ENV !== "production" ? "withCtx" : ""), Q0 = Symbol(J.NODE_ENV !== "production" ? "unref" : ""), Z0 = Symbol(J.NODE_ENV !== "production" ? "isRef" : ""), Gl = Symbol(J.NODE_ENV !== "production" ? "withMemo" : ""), Jd = Symbol(J.NODE_ENV !== "production" ? "isMemoSame" : ""), Vs = {
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
  [Y0]: "capitalize",
  [Wr]: "toHandlerKey",
  [Ei]: "setBlockTracking",
  [J0]: "pushScopeId",
  [X0]: "popScopeId",
  [Wl]: "withCtx",
  [Q0]: "unref",
  [Z0]: "isRef",
  [Gl]: "withMemo",
  [Jd]: "isMemoSame"
};
function eg(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Vs[t] = e[t];
  });
}
const Ct = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function tg(e, t = "") {
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
function ng(e, t, n = !1, s = !1) {
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
function sg(e) {
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
class og {
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
    Nt(t) || (t === 62 ? (J.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = rc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || Nt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, J.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Nt(t) || (J.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
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
    t === 61 || En(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : J.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
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
    t === 93 ? this.state = 14 : (t === 61 || En(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), J.NODE_ENV !== "production" && this.cbs.onerr(
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
    Nt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (J.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
const ig = {
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
  return J.NODE_ENV !== "production" && o && Ni(e, t, n, ...s), o;
}
function Ni(e, t, n, ...s) {
  if (Yr(e, t) === "suppress-warning")
    return;
  const { message: i, link: r } = ig[e], l = `(deprecation ${e}) ${typeof i == "function" ? i(...s) : i}${r ? `
  Details: ${r}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Jl(e) {
  throw e;
}
function Xd(e) {
  J.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Ne(e, t, n, s) {
  const o = J.NODE_ENV !== "production" ? (n || rg)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, i = new SyntaxError(String(o));
  return i.code = e, i.loc = t, i;
}
const rg = {
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
const lg = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Xl = (e) => !lg.test(e), ag = /[A-Za-z_$\xA0-\uFFFF]/, cg = /[\.\?\w$\xA0-\uFFFF]/, ug = /\s+[.[]\s*|\s*[.[]\s+/g, Zd = (e) => e.type === 4 ? e.content : e.loc.source, dg = (e) => {
  const t = Zd(e).trim().replace(ug, (l) => l.trim());
  let n = 0, s = [], o = 0, i = 0, r = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, i++;
        else if (!(l === 0 ? ag : cg).test(a))
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
}, ef = dg, fg = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, pg = (e) => fg.test(Zd(e)), hg = pg;
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
function mg(e) {
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
function gg(e) {
  return e.type === 7 && e.name === "slot";
}
function xi(e) {
  return e.type === 1 && e.tagType === 3;
}
function Si(e) {
  return e.type === 1 && e.tagType === 2;
}
const vg = /* @__PURE__ */ new Set([vo, To]);
function tf(e, t = []) {
  if (e && !re(e) && e.type === 14) {
    const n = e.callee;
    if (!re(n) && vg.has(n))
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
function yg(e) {
  return e.type === 14 && e.callee === Gl ? e.arguments[1].returns : e;
}
const bg = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, nf = {
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
  comments: J.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ve = nf, Eo = null, mn = "", Ze = null, he = null, gt = "", un = -1, qn = -1, Ql = 0, Cn = !1, Jr = null;
const Ve = [], Te = new og(Ve, {
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
    let n = e + Te.delimiterOpen.length, s = t - Te.delimiterClose.length;
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
      ns: ve.getNamespace(n, Ve[0], ve.ns),
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
      for (let o = 0; o < Ve.length; o++)
        if (Ve[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && mt(24, Ve[0].loc.start.offset);
          for (let r = 0; r <= o; r++) {
            const l = Ve.shift();
            Yo(l, t, r < o);
          }
          break;
        }
      s || mt(23, sf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Ze.tag;
    Ze.isSelfClosing = !0, dc(e), Ve[0] && Ve[0].tag === t && Yo(Ve.shift(), e);
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
      Cn = Te.inVPre = !0, Jr = Ze;
      const o = Ze.props;
      for (let i = 0; i < o.length; i++)
        o[i].type === 7 && (o[i] = $g(o[i]));
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
          }, Te.inSFCRoot && Ze.tag === "template" && he.name === "lang" && gt && gt !== "html" && Te.enterRCDATA(wi("</template"), 0);
        else {
          let n = 0;
          he.exp = Jo(
            gt,
            !1,
            Pe(un, qn),
            0,
            n
          ), he.name === "for" && (he.forParseResult = Eg(he.exp));
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
    if (J.NODE_ENV !== "production" && Te.state !== 1)
      switch (Te.state) {
        case 5:
        case 8:
          mt(5, e);
          break;
        case 3:
        case 4:
          mt(
            25,
            Te.sectionStart
          );
          break;
        case 28:
          Te.currentSequence === We.CdataEnd ? mt(6, e) : mt(7, e);
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
    for (let t = 0; t < Ve.length; t++)
      Yo(Ve[t], e - 1), mt(24, Ve[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ve[0].ns !== 0 ? Bo(Ge(e, t), e, t) : mt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ve[0] ? Ve[0].ns : ve.ns) === 0 && mt(
      21,
      e - 1
    );
  }
}), uc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, _g = /^\(|\)$/g;
function Eg(e) {
  const t = e.loc, n = e.content, s = n.match(bg);
  if (!s) return;
  const [, o, i] = s, r = (u, h, m = !1) => {
    const y = t.start.offset + h, g = y + u.length;
    return Jo(
      u,
      !1,
      Pe(y, g),
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
  let a = o.trim().replace(_g, "").trim();
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
  Te.inSFCRoot && (Ze.innerLoc = Pe(e + 1, e + 1)), Xr(Ze);
  const { tag: t, ns: n } = Ze;
  n === 0 && ve.isPreTag(t) && Ql++, ve.isVoidTag(t) ? Yo(Ze, e) : (Ve.unshift(Ze), (n === 1 || n === 2) && (Te.inXML = !0)), Ze = null;
}
function Bo(e, t, n) {
  {
    const i = Ve[0] && Ve[0].tag;
    i !== "script" && i !== "style" && e.includes("&") && (e = ve.decodeEntities(e, !1));
  }
  const s = Ve[0] || Eo, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Wn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Pe(t, n)
  });
}
function Yo(e, t, n = !1) {
  n ? Wn(e.loc, sf(t, 60)) : Wn(e.loc, wg(t, 62) + 1), Te.inSFCRoot && (e.children.length ? e.innerLoc.end = de({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = de({}, e.innerLoc.start), e.innerLoc.source = Ge(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: i } = e;
  if (Cn || (s === "slot" ? e.tagType = 2 : fc(e) ? e.tagType = 3 : xg(e) && (e.tagType = 1)), Te.inRCDATA || (e.children = of(i)), o === 0 && ve.isIgnoreNewlineTag(s)) {
    const r = i[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ve.isPreTag(s) && Ql--, Jr === e && (Cn = Te.inVPre = !1, Jr = null), Te.inXML && (Ve[0] ? Ve[0].ns : ve.ns) === 0 && (Te.inXML = !1);
  {
    const r = e.props;
    if (J.NODE_ENV !== "production" && In(
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
    if (!Te.inSFCRoot && In(
      "COMPILER_NATIVE_TEMPLATE",
      ve
    ) && e.tag === "template" && !fc(e)) {
      J.NODE_ENV !== "production" && Ni(
        "COMPILER_NATIVE_TEMPLATE",
        ve,
        e.loc
      );
      const a = Ve[0] || Eo, c = a.children.indexOf(e);
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
function wg(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n < mn.length - 1; ) n++;
  return n;
}
function sf(e, t) {
  let n = e;
  for (; mn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const Ng = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function fc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && Ng.has(t[n].name))
        return !0;
  }
  return !1;
}
function xg({ tag: e, props: t }) {
  if (ve.isCustomElement(e))
    return !1;
  if (e === "component" || Sg(e.charCodeAt(0)) || Qd(e) || ve.isBuiltInComponent && ve.isBuiltInComponent(e) || ve.isNativeTag && !ve.isNativeTag(e))
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
function Sg(e) {
  return e > 64 && e < 91;
}
const kg = /\r\n/g;
function of(e) {
  const t = ve.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (Ql)
        o.content = o.content.replace(kg, `
`);
      else if (Cg(o.content)) {
        const i = e[s - 1] && e[s - 1].type, r = e[s + 1] && e[s + 1].type;
        !i || !r || t && (i === 3 && (r === 3 || r === 1) || i === 1 && (r === 3 || r === 1 && Og(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = rf(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function Cg(e) {
  for (let t = 0; t < e.length; t++)
    if (!Nt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function Og(e) {
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
  (Ve[0] || Eo).children.push(e);
}
function Pe(e, t) {
  return {
    start: Te.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : Te.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Ge(e, t)
  };
}
function Tg(e) {
  return Pe(e.start.offset, e.end.offset);
}
function Wn(e, t) {
  e.end = Te.getPos(t), e.source = Ge(e.start.offset, t);
}
function $g(e) {
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
function Dg() {
  Te.reset(), Ze = null, he = null, gt = "", un = -1, qn = -1, Ve.length = 0;
}
function Vg(e, t) {
  if (Dg(), mn = e, ve = de({}, nf), t) {
    let o;
    for (o in t)
      t[o] != null && (ve[o] = t[o]);
  }
  if (J.NODE_ENV !== "production" && !ve.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  Te.mode = ve.parseMode === "html" ? 1 : ve.parseMode === "sfc" ? 2 : 0, Te.inXML = ve.ns === 1 || ve.ns === 2;
  const n = t && t.delimiters;
  n && (Te.delimiterOpen = wi(n[0]), Te.delimiterClose = wi(n[1]));
  const s = Eo = tg([], e);
  return Te.parse(mn), s.loc = Pe(0, e.length), s.children = of(s.children), Eo = null, s;
}
function Ag(e, t) {
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
        const y = h.codegenNode;
        if (y.type === 13) {
          const g = y.patchFlag;
          if ((g === void 0 || g === 512 || g === 1) && cf(h, n) >= 2) {
            const $ = uf(h);
            $ && (y.props = n.hoist($));
          }
          y.dynamicProps && (y.dynamicProps = n.hoist(y.dynamicProps));
        }
      }
    } else if (h.type === 12 && (s ? 0 : St(h, n)) >= 2) {
      h.codegenNode.type === 14 && h.codegenNode.arguments.length > 0 && h.codegenNode.arguments.push(
        -1 + (J.NODE_ENV !== "production" ? ` /* ${Qs[-1]} */` : "")
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
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && Y(e.codegenNode.children))
      e.codegenNode.children = c(
        ts(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Y(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = d(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = c(
        ts(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Y(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = bt(e, "slot", !0), h = u && u.arg && d(t.codegenNode, u.arg);
      h && (a.push(n.cached.length), h.returns = c(
        ts(h.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const u of r)
      a.push(n.cached.length), u.codegenNode = n.cache(u.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Y(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
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
    if (u.children && !Y(u.children) && u.children.type === 15) {
      const m = u.children.properties.find(
        (y) => y.key === h || y.key.content === h
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
const Ig = /* @__PURE__ */ new Set([
  ql,
  zl,
  vo,
  To
]);
function af(e, t) {
  if (e.type === 14 && !re(e.callee) && Ig.has(e.callee)) {
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
function Mg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: i = !1,
  nodeTransforms: r = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: c = $e,
  isCustomElement: d = $e,
  expressionPlugins: u = [],
  scopeId: h = null,
  slotted: m = !0,
  ssr: y = !1,
  inSSR: g = !1,
  ssrCssVars: $ = "",
  bindingMetadata: k = pe,
  inline: v = !1,
  isTS: p = !1,
  onError: N = Jl,
  onWarn: E = Xd,
  compatConfig: V
}) {
  const M = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), T = {
    // options
    filename: t,
    selfName: M && on(ke(M[1])),
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
    ssr: y,
    inSSR: g,
    ssrCssVars: $,
    bindingMetadata: k,
    inline: v,
    isTS: p,
    onError: N,
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
    helper(b) {
      const S = T.helpers.get(b) || 0;
      return T.helpers.set(b, S + 1), b;
    },
    removeHelper(b) {
      const S = T.helpers.get(b);
      if (S) {
        const A = S - 1;
        A ? T.helpers.set(b, A) : T.helpers.delete(b);
      }
    },
    helperString(b) {
      return `_${Vs[T.helper(b)]}`;
    },
    replaceNode(b) {
      if (J.NODE_ENV !== "production") {
        if (!T.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!T.parent)
          throw new Error("Cannot replace root node.");
      }
      T.parent.children[T.childIndex] = T.currentNode = b;
    },
    removeNode(b) {
      if (J.NODE_ENV !== "production" && !T.parent)
        throw new Error("Cannot remove root node.");
      const S = T.parent.children, A = b ? S.indexOf(b) : T.currentNode ? T.childIndex : -1;
      if (J.NODE_ENV !== "production" && A < 0)
        throw new Error("node being removed is not a child of current parent");
      !b || b === T.currentNode ? (T.currentNode = null, T.onNodeRemoved()) : T.childIndex > A && (T.childIndex--, T.onNodeRemoved()), T.parent.children.splice(A, 1);
    },
    onNodeRemoved: $e,
    addIdentifiers(b) {
    },
    removeIdentifiers(b) {
    },
    hoist(b) {
      re(b) && (b = ue(b)), T.hoists.push(b);
      const S = ue(
        `_hoisted_${T.hoists.length}`,
        !1,
        b.loc,
        2
      );
      return S.hoisted = b, S;
    },
    cache(b, S = !1, A = !1) {
      const D = ng(
        T.cached.length,
        b,
        S,
        A
      );
      return T.cached.push(D), D;
    }
  };
  return T.filters = /* @__PURE__ */ new Set(), T;
}
function Pg(e, t) {
  const n = Mg(e, t);
  Xi(e, n), t.hoistStatic && Ag(e, n), t.ssr || Rg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Rg(e, t) {
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
    J.NODE_ENV !== "production" && s.filter((i) => i.type !== 3).length === 1 && (o |= 2048), e.codegenNode = yo(
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
function Lg(e, t) {
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
    if (r && (Y(r) ? s.push(...r) : s.push(r)), t.currentNode)
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
      Lg(e, t);
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
      if (s.tagType === 3 && i.some(gg))
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
function Fg(e, {
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
    push(g, $ = -2, k) {
      m.code += g;
    },
    indent() {
      y(++m.indentLevel);
    },
    deindent(g = !1) {
      g ? --m.indentLevel : y(--m.indentLevel);
    },
    newline() {
      y(m.indentLevel);
    }
  };
  function y(g) {
    m.push(
      `
` + "  ".repeat(g),
      0
      /* Start */
    );
  }
  return m;
}
function Bg(e, t = {}) {
  const n = Fg(e, t);
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
  jg(e, n);
  const g = d ? "ssrRender" : "render", k = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${g}(${k}) {`), r(), m && (o("with (_ctx) {"), r(), h && (o(
    `const { ${u.map(ff).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (yr(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (yr(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), yr(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let v = 0; v < e.temps; v++)
      o(`${v > 0 ? ", " : ""}_temp${v}`);
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
function jg(e, t) {
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
  Hg(e.hoists, t), i(), o("return ");
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
function Hg(e, t) {
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
function Ug(e) {
  return re(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Zl(e, t) {
  const n = e.length > 3 || J.NODE_ENV !== "production" && e.some((s) => Y(s) || !Ug(s));
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
    ) : Y(l) ? Zl(l, t) : st(l, t), r < e.length - 1 && (n ? (s && o(","), i()) : s && o(", "));
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
      J.NODE_ENV !== "production" && lc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), st(e.codegenNode, t);
      break;
    case 2:
      qg(e, t);
      break;
    case 4:
      pf(e, t);
      break;
    case 5:
      zg(e, t);
      break;
    case 12:
      st(e.codegenNode, t);
      break;
    case 8:
      hf(e, t);
      break;
    case 3:
      Wg(e, t);
      break;
    case 13:
      Gg(e, t);
      break;
    case 14:
      Jg(e, t);
      break;
    case 15:
      Xg(e, t);
      break;
    case 17:
      Qg(e, t);
      break;
    case 18:
      Zg(e, t);
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
      if (J.NODE_ENV !== "production")
        return lc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function qg(e, t) {
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
function zg(e, t) {
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
function Kg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), hf(e, t), n("]");
  else if (e.isStatic) {
    const s = Xl(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Wg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Qi), n(
    `${s(Oo)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Gg(e, t) {
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
  let y;
  if (a)
    if (J.NODE_ENV !== "production")
      if (a < 0)
        y = a + ` /* ${Qs[a]} */`;
      else {
        const $ = Object.keys(Qs).map(Number).filter((k) => k > 0 && a & k).map((k) => Qs[k]).join(", ");
        y = a + ` /* ${$} */`;
      }
    else
      y = String(a);
  d && n(s(Hl) + "("), u && n(`(${s(rs)}(${h ? "true" : ""}), `), o && n(Qi);
  const g = u ? Ms(t.inSSR, m) : Is(t.inSSR, m);
  n(s(g) + "(", -2, e), $o(
    Yg([i, r, l, y, c]),
    t
  ), n(")"), u && n(")"), d && (n(", "), st(d, t), n(")"));
}
function Yg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Jg(e, t) {
  const { push: n, helper: s, pure: o } = t, i = re(e.callee) ? e.callee : s(e.callee);
  o && n(Qi), n(i + "(", -2, e), $o(e.arguments, t), n(")");
}
function Xg(e, t) {
  const { push: n, indent: s, deindent: o, newline: i } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const l = r.length > 1 || J.NODE_ENV !== "production" && r.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < r.length; a++) {
    const { key: c, value: d } = r[a];
    Kg(c, t), n(": "), st(d, t), a < r.length - 1 && (n(","), i());
  }
  l && o(), n(l ? "}" : " }");
}
function Qg(e, t) {
  Zl(e.elements, t);
}
function Zg(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: i, returns: r, body: l, newline: a, isSlot: c } = e;
  c && n(`_${Vs[Wl]}(`), n("(", -2, e), Y(i) ? $o(i, t) : i && st(i, t), n(") => "), (a || l) && (n("{"), s()), r ? (a && n("return "), Y(r) ? Zl(r, t) : st(r, t)) : l && st(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
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
  return J.NODE_ENV !== "production" && Gn(e, t, n, s), e;
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
  if (J.NODE_ENV !== "production" && t.exp && Gn(t.exp, n), t.name === "if") {
    const o = pc(e, t), i = {
      type: 9,
      loc: Tg(e.loc),
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
        n.removeNode(l), J.NODE_ENV !== "production" && i.unshift(l);
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
        if (J.NODE_ENV !== "production" && i.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...i, ...a.children]), J.NODE_ENV !== "production") {
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
      J.NODE_ENV !== "production" ? '"v-if"' : '""',
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
      return J.NODE_ENV !== "production" && !e.isTemplateIf && i.filter((c) => c.type !== 3).length === 1 && (a |= 2048), yo(
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
    const a = r.codegenNode, c = yg(a);
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
  return i.type !== 4 ? (i.children.unshift("("), i.children.push(') || ""')) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : '""'), s.some((l) => l.content === "camel") && (i.type === 4 ? i.isStatic ? i.content = ke(i.content) : i.content = `${n.helperString(Kr)}(${i.content})` : (i.children.unshift(`${n.helperString(Kr)}(`), i.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && gc(i, "."), s.some((l) => l.content === "attr") && gc(i, "^")), {
    props: [Me(i, r)]
  };
}, mf = (e, t) => {
  const n = e.arg, s = ke(n.content);
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
      const h = c && u ? Me("key", u) : null, m = i.source.type === 4 && i.source.constType > 0, y = m ? 64 : c ? 128 : 256;
      return i.codegenNode = yo(
        n,
        s(go),
        void 0,
        r,
        y,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let g;
        const { children: $ } = i;
        J.NODE_ENV !== "production" && l && e.children.some((p) => {
          if (p.type === 1) {
            const N = bo(p, "key");
            if (N)
              return n.onError(
                Ne(
                  33,
                  N.loc
                )
              ), !0;
          }
        });
        const k = $.length !== 1 || $[0].type !== 1, v = Si(e) ? e : l && e.children.length === 1 && Si(e.children[0]) ? e.children[0] : null;
        if (v ? (g = v.codegenNode, l && h && ki(g, h, n)) : k ? g = yo(
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
          p.body = sg([
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
  e.finalized || (J.NODE_ENV !== "production" && (Gn(e.source, t), e.key && Gn(
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
    const { arg: $, exp: k } = a;
    $ && !_t($) && (l = !0), i.push(
      Me(
        $ || ue("default", !0),
        n(k, void 0, s, o)
      )
    );
  }
  let c = !1, d = !1;
  const u = [], h = /* @__PURE__ */ new Set();
  let m = 0;
  for (let $ = 0; $ < s.length; $++) {
    const k = s[$];
    let v;
    if (!xi(k) || !(v = bt(k, "slot", !0))) {
      k.type !== 3 && u.push(k);
      continue;
    }
    if (a) {
      t.onError(
        Ne(37, v.loc)
      );
      break;
    }
    c = !0;
    const { children: p, loc: N } = k, {
      arg: E = ue("default", !0),
      exp: V,
      loc: M
    } = v;
    let T;
    _t(E) ? T = E ? E.content : "default" : l = !0;
    const b = bt(k, "for"), S = n(V, b, p, N);
    let A, D;
    if (A = bt(k, "if"))
      l = !0, r.push(
        Gr(
          A.exp,
          jo(E, S, m++),
          vc
        )
      );
    else if (D = bt(
      k,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let H = $, W;
      for (; H-- && (W = s[H], !(W.type !== 3 && Zr(W))); )
        ;
      if (W && xi(W) && bt(W, /^(else-)?if$/)) {
        let G = r[r.length - 1];
        for (; G.alternate.type === 19; )
          G = G.alternate;
        G.alternate = D.exp ? Gr(
          D.exp,
          jo(
            E,
            S,
            m++
          ),
          vc
        ) : jo(E, S, m++);
      } else
        t.onError(
          Ne(30, D.loc)
        );
    } else if (b) {
      l = !0;
      const H = b.forParseResult;
      H ? (gf(H, t), r.push(
        Ue(t.helper(Ul), [
          H.source,
          As(
            Qr(H),
            jo(E, S),
            !0
          )
        ])
      )) : t.onError(
        Ne(
          32,
          b.loc
        )
      );
    } else {
      if (T) {
        if (h.has(T)) {
          t.onError(
            Ne(
              38,
              M
            )
          );
          continue;
        }
        h.add(T), T === "default" && (d = !0);
      }
      i.push(Me(E, S));
    }
  }
  if (!a) {
    const $ = (k, v) => {
      const p = n(k, void 0, v, o);
      return t.compatConfig && (p.isNonScopedSlot = !0), Me("default", p);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((k) => Zr(k)) && (d ? t.onError(
      Ne(
        39,
        u[0].loc
      )
    ) : i.push(
      $(void 0, u)
    )) : i.push($(void 0, s));
  }
  const y = l ? 2 : Qo(e.children) ? 3 : 1;
  let g = Dt(
    i.concat(
      Me(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ue(
          y + (J.NODE_ENV !== "production" ? ` /* ${Uf[y]} */` : ""),
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
  let a, c, d = 0, u, h, m, y = (
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
      $.map((k) => bv(k, t))
    ) : void 0, g.shouldUseBlock && (y = !0);
  }
  if (e.children.length > 0)
    if (r === bi && (y = !0, d |= 1024, J.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Ne(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), i && // Teleport is not a real component and has dedicated runtime handling
    r !== lo && // explained above.
    r !== bi) {
      const { slots: $, hasDynamicSlots: k } = mv(e, t);
      c = $, k && (d |= 1024);
    } else if (e.children.length === 1 && r !== lo) {
      const $ = e.children[0], k = $.type, v = k === 5 || k === 8;
      v && St($, t) === 0 && (d |= 1), v || k === 2 ? c = $ : c = e.children;
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
    !!y,
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
  let m = !1, y = 0, g = !1, $ = !1, k = !1, v = !1, p = !1, N = !1;
  const E = [], V = (S) => {
    c.length && (d.push(
      Dt(yc(c), l)
    ), c = []), S && d.push(S);
  }, M = () => {
    t.scopes.vFor > 0 && c.push(
      Me(
        ue("ref_for", !0),
        ue("true")
      )
    );
  }, T = ({ key: S, value: A }) => {
    if (_t(S)) {
      const D = S.content, H = gn(D);
      if (H && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      D.toLowerCase() !== "onclick" && // omit v-model handlers
      D !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Dn(D) && (v = !0), H && Dn(D) && (N = !0), H && A.type === 14 && (A = A.arguments[0]), A.type === 20 || (A.type === 4 || A.type === 8) && St(A, t) > 0)
        return;
      D === "ref" ? g = !0 : D === "class" ? $ = !0 : D === "style" ? k = !0 : D !== "key" && !E.includes(D) && E.push(D), s && (D === "class" || D === "style") && !E.includes(D) && E.push(D);
    } else
      p = !0;
  };
  for (let S = 0; S < n.length; S++) {
    const A = n[S];
    if (A.type === 6) {
      const { loc: D, name: H, nameLoc: W, value: G } = A;
      let Z = !0;
      if (H === "ref" && (g = !0, M()), H === "is" && (el(r) || G && G.content.startsWith("vue:") || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Me(
          ue(H, !0, W),
          ue(
            G ? G.content : "",
            Z,
            G ? G.loc : D
          )
        )
      );
    } else {
      const { name: D, arg: H, exp: W, loc: G, modifiers: Z } = A, se = D === "bind", ee = D === "on";
      if (D === "slot") {
        s || t.onError(
          Ne(40, G)
        );
        continue;
      }
      if (D === "once" || D === "memo" || D === "is" || se && $n(H, "is") && (el(r) || In(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || ee && i)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (se && $n(H, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        ee && h && $n(H, "vue:before-update")) && (m = !0), se && $n(H, "ref") && M(), !H && (se || ee)
      ) {
        if (p = !0, W)
          if (se) {
            if (V(), J.NODE_ENV !== "production" && d.some((Ot) => Ot.type === 15 ? Ot.properties.some(({ key: Tt }) => Tt.type !== 4 || !Tt.isStatic ? !0 : Tt.content !== "class" && Tt.content !== "style" && !gn(Tt.content)) : !0) && Ps(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              G
            ), In(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              d.unshift(W);
              continue;
            }
            M(), V(), d.push(W);
          } else
            V({
              type: 14,
              loc: G,
              callee: t.helper(Kl),
              arguments: s ? [W] : [W, "true"]
            });
        else
          t.onError(
            Ne(
              se ? 34 : 35,
              G
            )
          );
        continue;
      }
      se && Z.some((pt) => pt.content === "prop") && (y |= 32);
      const Ee = t.directiveTransforms[D];
      if (Ee) {
        const { props: pt, needRuntime: Ot } = Ee(A, e, t);
        !i && pt.forEach(T), ee && H && !_t(H) ? V(Dt(pt, l)) : c.push(...pt), Ot && (u.push(A), Et(Ot) && vf.set(A, Ot));
      } else $c(D) || (u.push(A), h && (m = !0));
    }
  }
  let b;
  if (d.length ? (V(), d.length > 1 ? b = Ue(
    t.helper(_i),
    d,
    l
  ) : b = d[0]) : c.length && (b = Dt(
    yc(c),
    l
  )), p ? y |= 16 : ($ && !s && (y |= 2), k && !s && (y |= 4), E.length && (y |= 8), v && (y |= 32)), !m && (y === 0 || y === 32) && (g || N || u.length > 0) && (y |= 512), !t.inSSR && b)
    switch (b.type) {
      case 15:
        let S = -1, A = -1, D = !1;
        for (let G = 0; G < b.properties.length; G++) {
          const Z = b.properties[G].key;
          _t(Z) ? Z.content === "class" ? S = G : Z.content === "style" && (A = G) : Z.isHandlerKey || (D = !0);
        }
        const H = b.properties[S], W = b.properties[A];
        D ? b = Ue(
          t.helper(vo),
          [b]
        ) : (H && !_t(H.value) && (H.value = Ue(
          t.helper(ql),
          [H.value]
        )), W && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (k || W.value.type === 4 && W.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        W.value.type === 17) && (W.value = Ue(
          t.helper(zl),
          [W.value]
        )));
        break;
      case 14:
        break;
      default:
        b = Ue(
          t.helper(vo),
          [
            Ue(t.helper(To), [
              b
            ])
          ]
        );
        break;
    }
  return {
    props: b,
    directives: u,
    patchFlag: y,
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
      r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = ke(r.name), o.push(r)));
    else if (r.name === "bind" && $n(r.arg, "name")) {
      if (r.exp)
        n = r.exp;
      else if (r.arg && r.arg.type === 4) {
        const l = ke(r.arg.content);
        n = r.exp = ue(l, !1, r.arg.loc);
      }
    } else
      r.name === "bind" && r.arg && _t(r.arg) && (r.arg.content = ke(r.arg.content)), o.push(r);
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
      J.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Ne(51, r.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const h = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        en(ke(u))
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
    const u = ef(a), h = !(u || hg(a)), m = a.content.includes(";");
    J.NODE_ENV !== "production" && Gn(
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
              1 + (J.NODE_ENV !== "production" ? ` /* ${Qs[1]} */` : "")
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
  const a = o || ue("modelValue", !0), c = o ? _t(o) ? `onUpdate:${ke(o.content)}` : qt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
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
    const m = e.modifiers.map((g) => g.content).map((g) => (Xl(g) ? g : JSON.stringify(g)) + ": true").join(", "), y = o ? _t(o) ? `${o.content}Modifiers` : qt([o, ' + "Modifiers"']) : "modelModifiers";
    h.push(
      Me(
        y,
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
  let s = !1, o = !1, i = !1, r = !1, l = 0, a = 0, c = 0, d = 0, u, h, m, y, g = [];
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
      y === void 0 ? (d = m + 1, y = n.slice(0, m).trim()) : $();
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
        let k = m - 1, v;
        for (; k >= 0 && (v = n.charAt(k), v === " "); k--)
          ;
        (!v || !Sv.test(v)) && (r = !0);
      }
    }
  y === void 0 ? y = n.slice(0, m).trim() : d !== 0 && $();
  function $() {
    g.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (g.length) {
    for (J.NODE_ENV !== "production" && Ni(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < g.length; m++)
      y = Cv(y, g[m], t);
    e.content = y, e.ast = void 0;
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
      ...J.NODE_ENV !== "production" ? [ov] : [],
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
  }), r = re(e) ? Vg(e, i) : e, [l, a] = Tv();
  return Pg(
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
  ), Bg(r, i);
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
eg({
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
      } else mg(t) ? l = tl : ot.NODE_ENV !== "production" && o();
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
      return Xs.NODE_ENV !== "production" && Ie("invalid template option: ", e), $e;
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
      onWarn: Xs.NODE_ENV !== "production" ? (a) => r(a, !0) : $e
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
  const l = new Function("Vue", i)(G0);
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
    const n = e, s = t, o = U(!1), i = te(() => n.href ? "a" : "button"), r = te(() => {
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
    return (c, d) => (x(), ft(Nl(i.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Oe(l.value),
      style: dt(r.value),
      onClick: a,
      onMouseenter: d[0] || (d[0] = (u) => o.value = !0),
      onMouseleave: d[1] || (d[1] = (u) => o.value = !1)
    }, {
      default: Be(() => [
        e.loading ? (x(), C("svg", ty, d[2] || (d[2] = [
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
        ]))) : j("", !0),
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
    const n = e, s = t, o = it(), i = te({
      get: () => n.modelValue,
      set: (d) => {
        var h, m, y;
        const u = Math.max(n.min, Math.min(n.max, d));
        if (s("update:modelValue", u), s("update", u), ((y = (m = (h = o == null ? void 0 : o.vnode) == null ? void 0 : h.el) == null ? void 0 : m.parentElement) == null ? void 0 : y.tagName) === "QUANTITY-SELECTOR") {
          const g = o.vnode.el.parentElement, $ = g.getAttribute("data-line-key");
          if ($) {
            const k = new CustomEvent("quantity-update", {
              detail: { key: $, value: u },
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
    return (d, u) => (x(), C("div", {
      class: Oe(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      f("button", {
        type: "button",
        class: Oe(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
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
        class: Oe(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, oy),
      f("button", {
        type: "button",
        class: Oe(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
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
    const n = e, s = t, o = U(n.item.quantity), i = U(!1), r = U(""), l = te(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = te(() => {
      var h;
      return ((h = n.item.variant) == null ? void 0 : h.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (h) => {
      var k, v, p;
      if (!h && h !== 0) return "$0.00";
      const m = ((k = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : k.money_format) || "${{amount}}";
      (v = Shopline == null ? void 0 : Shopline.shop) != null && v.currency;
      const y = ((p = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : p.current) || "en", $ = new Intl.NumberFormat(y, {
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
    }), (h, m) => (x(), C("div", {
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
                }, K(e.item.product_title), 9, gy)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (x(), C("p", vy, K(e.item.variant_title), 1)) : j("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (x(), C("div", yy, [
                (x(!0), C(le, null, Se(e.item.properties, (y, g) => (x(), C("p", {
                  key: g,
                  class: "cart-item__property"
                }, [
                  f("span", by, K(g) + ":", 1),
                  Le(" " + K(y), 1)
                ]))), 128))
              ])) : j("", !0)
            ]),
            f("div", _y, [
              f("p", Ey, K(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), C("p", wy, K(c(e.item.original_price * e.item.quantity)), 1)) : j("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (x(), C("div", Ny, [
            (x(!0), C(le, null, Se(e.item.discounts, (y) => (x(), C("div", {
              key: y.id,
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
              Le(" " + K(y.title) + " (-" + K(c(y.amount || y.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : j("", !0),
          f("div", xy, [
            f("div", Sy, [
              fe(Df, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  m[0] || (m[0] = (y) => o.value = y),
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
                i.value ? (x(), C("svg", Oy, m[3] || (m[3] = [
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
                ]))) : (x(), C("svg", Cy, m[2] || (m[2] = [
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
              f("p", $y, K(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), C("p", Dy, K(c(e.item.original_price * e.item.quantity)), 1)) : j("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), C("p", Vy, " Save " + K(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : j("", !0)
            ])
          ]),
          a.value ? (x(), C("p", Ay, " Only " + K(e.item.variant.inventory_quantity) + " left in stock ", 1)) : j("", !0),
          r.value ? (x(), C("p", Iy, K(r.value), 1)) : j("", !0)
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
    const t = U(!1), n = U([]), s = U(0), o = te(() => {
      var y;
      return ((y = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : y.cart) || "/cart";
    }), i = te(() => {
      var g, $;
      return (($ = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : $.free_shipping_threshold) || 50;
    }), r = te(() => {
      var y, g;
      return ((g = (y = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : y.settings) == null ? void 0 : g.show_free_shipping_bar) !== !1;
    }), l = (y) => {
      var p, N, E, V;
      if (!y && y !== 0) return "$0.00";
      const g = ((p = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : p.money_format) || "${{amount}}";
      (N = Shopline == null ? void 0 : Shopline.shop) != null && N.money_with_currency_format, (E = Shopline == null ? void 0 : Shopline.shop) != null && E.currency;
      const $ = ((V = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : V.current) || "en", v = new Intl.NumberFormat($, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(y));
      return g.replace("{{amount}}", v);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", d();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, d = async () => {
      const y = await window.OrionCart.fetchCart();
      n.value = y.items, s.value = y.total_price;
    }, u = async ({ key: y, quantity: g }) => {
      await window.OrionCart.updateItem(y, g), d();
    }, h = async (y) => {
      await window.OrionCart.removeItem(y), d();
    }, m = (y) => {
      y.key === "Escape" && t.value && c();
    };
    return ze(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", m);
    }), kt(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", m);
    }), (y, g) => (x(), ft(Fn, { to: "body" }, [
      fe(xt, { name: "drawer" }, {
        default: Be(() => [
          t.value ? (x(), C("div", Py, [
            f("div", Ry, [
              fe(xt, { name: "fade" }, {
                default: Be(() => [
                  t.value ? (x(), C("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: c
                  })) : j("", !0)
                ]),
                _: 1
              }),
              f("div", Ly, [
                fe(xt, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Be(() => [
                    t.value ? (x(), C("div", Fy, [
                      f("div", By, [
                        f("div", jy, [
                          f("div", null, [
                            g[0] || (g[0] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (x(), C("p", Hy, K(n.value.length) + " " + K(n.value.length === 1 ? "item" : "items"), 1)) : j("", !0)
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
                          n.value.length === 0 ? (x(), C("div", qy, [
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
                              default: Be(() => g[2] || (g[2] = [
                                Le(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (x(), C("div", zy, [
                            (x(!0), C(le, null, Se(n.value, ($) => (x(), ft(Vf, {
                              key: $.key,
                              item: $,
                              onUpdate: u,
                              onRemove: h
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (x(), C("div", Ky, [
                          r.value ? (x(), C("div", {
                            key: 0,
                            class: Oe([s.value >= i.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "rounded-lg p-3"])
                          }, [
                            s.value >= i.value ? (x(), C("div", Wy, g[6] || (g[6] = [
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
                            ]))) : (x(), C("div", Gy, [
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
                              f("p", Yy, " Add " + K(l(
                                i.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < i.value ? (x(), C("div", Jy, [
                              f("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: dt(`width: ${Math.min(
                                  s.value / i.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])) : j("", !0)
                          ], 2)) : j("", !0),
                          f("div", null, [
                            f("div", Xy, [
                              g[8] || (g[8] = f("p", null, "Subtotal", -1)),
                              f("p", null, K(l(s.value)), 1)
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
                              default: Be(() => g[10] || (g[10] = [
                                Le(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            }, 8, ["href"]),
                            fe(ws, {
                              onClick: c,
                              variant: "ghost",
                              "full-width": !0
                            }, {
                              default: Be(() => g[11] || (g[11] = [
                                Le(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [11]
                            })
                          ])
                        ])) : j("", !0)
                      ])
                    ])) : j("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : j("", !0)
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
    const n = e, s = te(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = te(() => n.customerUrl || window.mobileMenuCustomerUrl || "/account"), i = te(() => n.showLocalization || window.mobileMenuShowLocalization || !1), r = U(!1), l = U([]), a = () => {
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
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", c);
      const u = (h) => {
        h.key === "Escape" && r.value && c();
      };
      document.addEventListener("keydown", u), kt(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", c), document.removeEventListener("keydown", u);
      });
    }), (u, h) => (x(), C("div", null, [
      (x(), ft(Fn, { to: "body" }, [
        fe(xt, { name: "menu" }, {
          default: Be(() => [
            r.value ? (x(), C("div", e1, [
              f("div", t1, [
                fe(xt, { name: "fade" }, {
                  default: Be(() => [
                    r.value ? (x(), C("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : j("", !0)
                  ]),
                  _: 1
                }),
                f("div", n1, [
                  fe(xt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Be(() => [
                      r.value ? (x(), C("div", s1, [
                        f("div", o1, [
                          f("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            h[3] || (h[3] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Menu ", -1)),
                            f("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: c
                            }, h[2] || (h[2] = [
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
                                s.value.length === 0 ? (x(), C("li", a1, h[4] || (h[4] = [
                                  f("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : j("", !0),
                                (x(!0), C(le, null, Se(s.value, (m) => (x(), C("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (x(), C("div", c1, [
                                    f("button", {
                                      onClick: (y) => d(
                                        m.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      f("span", null, K(m.title), 1),
                                      (x(), C("svg", {
                                        class: Oe(["h-5 w-5 transition-transform duration-200", {
                                          "rotate-180": l.value.includes(
                                            m.title
                                          )
                                        }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, h[5] || (h[5] = [
                                        f("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, u1),
                                    fe(xt, { name: "submenu" }, {
                                      default: Be(() => [
                                        l.value.includes(
                                          m.title
                                        ) ? (x(), C("ul", d1, [
                                          (x(!0), C(le, null, Se(m.links, (y) => (x(), C("li", {
                                            key: y.id || y.title
                                          }, [
                                            y.links && y.links.length ? (x(), C("div", f1, [
                                              f("button", {
                                                onClick: (g) => d(
                                                  `${m.title}-${y.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                f("span", null, K(y.title), 1),
                                                (x(), C("svg", {
                                                  class: Oe(["h-4 w-4 transition-transform duration-200", {
                                                    "rotate-180": l.value.includes(
                                                      `${m.title}-${y.title}`
                                                    )
                                                  }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, h[6] || (h[6] = [
                                                  f("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, p1),
                                              fe(xt, { name: "submenu" }, {
                                                default: Be(() => [
                                                  l.value.includes(
                                                    `${m.title}-${y.title}`
                                                  ) ? (x(), C("ul", h1, [
                                                    (x(!0), C(le, null, Se(y.links, (g) => (x(), C("li", {
                                                      key: g.id || g.title
                                                    }, [
                                                      f("a", {
                                                        href: g.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: h[0] || (h[0] = (...$) => c && c(...$))
                                                      }, K(g.title), 9, m1)
                                                    ]))), 128))
                                                  ])) : j("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (x(), C("a", {
                                              key: 1,
                                              href: y.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: h[1] || (h[1] = (...g) => c && c(...g))
                                            }, K(y.title), 9, g1))
                                          ]))), 128))
                                        ])) : j("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (x(), C("a", {
                                    key: 1,
                                    href: m.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: c
                                  }, K(m.title), 9, v1))
                                ]))), 128))
                              ])
                            ]),
                            f("div", y1, [
                              f("div", b1, [
                                f("a", {
                                  href: o.value,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, h[7] || (h[7] = [
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
                                    Le(" Account ")
                                  ], -1)
                                ]), 8, _1),
                                h[8] || (h[8] = f("a", {
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
                                    Le(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            i.value ? (x(), C("div", E1, [
                              Bn(u.$slots, "localization", {}, void 0, !0)
                            ])) : j("", !0)
                          ])
                        ])
                      ])) : j("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : j("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, N1 = /* @__PURE__ */ Je(w1, [["__scopeId", "data-v-9092623c"]]), x1 = { class: "variant-picker" }, S1 = { class: "text-sm font-medium text-gray-900 mb-3" }, k1 = { class: "font-normal text-gray-600" }, C1 = {
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
    const n = e, s = t, o = U({}), i = U(null), r = te(() => n.product.options || []), l = te(() => n.product.variants || []);
    ze(() => {
      if (n.selectedVariantId) {
        const $ = l.value.find((k) => k.id == n.selectedVariantId);
        $ && a($);
      } else if (l.value.length > 0) {
        const $ = l.value.find((k) => k.available) || l.value[0];
        a($);
      }
    });
    const a = ($) => {
      i.value = $, r.value.forEach((k, v) => {
        o.value[k.name] = $[`option${v + 1}`];
      }), s("variant-change", $);
    }, c = ($, k) => {
      o.value[$] = k;
      const v = l.value.find((p) => r.value.every((N, E) => {
        const V = o.value[N.name];
        return p[`option${E + 1}`] === V;
      }));
      v && (i.value = v, s("variant-change", v));
    }, d = ($) => o.value[$] || "", u = ($, k) => o.value[$] === k, h = ($, k) => {
      const v = r.value.findIndex((p) => p.name === $);
      return l.value.some((p) => {
        const N = p[`option${v + 1}`] === k, E = r.value.every((V, M) => {
          if (V.name === $) return !0;
          const T = o.value[V.name];
          return T ? p[`option${M + 1}`] === T : !0;
        });
        return N && E && p.available;
      });
    }, m = ($) => $.toLowerCase().includes("color") || $.toLowerCase().includes("colour"), y = ($) => ({
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
      var k, v;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((v = (k = window.Shopify) == null ? void 0 : k.currency) == null ? void 0 : v.active) || "USD"
      }).format($ / 100);
    };
    return ($, k) => (x(), C("div", x1, [
      (x(!0), C(le, null, Se(r.value, (v) => (x(), C("div", {
        key: v.name,
        class: "variant-option mb-6"
      }, [
        f("h3", S1, [
          Le(K(v.name) + ": ", 1),
          f("span", k1, K(d(v.name)), 1)
        ]),
        m(v.name) ? (x(), C("div", C1, [
          (x(!0), C(le, null, Se(v.values, (p) => (x(), C("button", {
            key: p,
            type: "button",
            class: Oe([
              "color-swatch",
              u(v.name, p) ? "color-swatch--selected" : "",
              h(v.name, p) ? "" : "color-swatch--unavailable"
            ]),
            style: dt({ backgroundColor: y(p) }),
            title: p,
            "aria-label": `Select ${v.name} ${p}`,
            disabled: !h(v.name, p),
            onClick: (N) => c(v.name, p)
          }, [
            f("span", T1, K(p), 1),
            u(v.name, p) ? (x(), C("span", $1, k[0] || (k[0] = [
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
            ]))) : j("", !0)
          ], 14, O1))), 128))
        ])) : (x(), C("div", D1, [
          (x(!0), C(le, null, Se(v.values, (p) => (x(), C("button", {
            key: p,
            type: "button",
            class: Oe([
              "variant-button",
              u(v.name, p) ? "variant-button--selected" : "",
              h(v.name, p) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${v.name} ${p}`,
            disabled: !h(v.name, p),
            onClick: (N) => c(v.name, p)
          }, K(p), 11, V1))), 128))
        ]))
      ]))), 128)),
      i.value ? (x(), C("div", A1, [
        f("div", I1, [
          f("span", M1, K(g(i.value.price)), 1),
          i.value.compare_at_price > i.value.price ? (x(), C("span", P1, K(g(i.value.compare_at_price)), 1)) : j("", !0)
        ]),
        i.value.available ? (x(), C("div", R1, " In Stock ")) : (x(), C("div", L1, " Out of Stock "))
      ])) : j("", !0)
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
    const m = ta(r), y = Date.now() - t, g = () => i = h();
    return d(), m <= 0 ? (t = Date.now(), g()) : (y > m && (a || !s) ? (t = Date.now(), g()) : l && (i = new Promise(($, k) => {
      o = c ? k : $, n = setTimeout(() => {
        t = Date.now(), s = !0, $(g()), d();
      }, Math.max(0, m - y));
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
        ...n.flatMap((m) => s.map((y) => l(d, m, y, h)))
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
  } = t, a = Ns({ x: 0, y: 0 }), c = Ns({ x: 0, y: 0 }), d = te(() => a.x - c.x), u = te(() => a.y - c.y), { max: h, abs: m } = Math, y = te(() => h(m(d.value), m(u.value)) >= n), g = U(!1), $ = te(() => y.value ? m(d.value) > m(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), k = (b) => [b.touches[0].clientX, b.touches[0].clientY], v = (b, S) => {
    a.x = b, a.y = S;
  }, p = (b, S) => {
    c.x = b, c.y = S;
  };
  let N;
  const E = J1(l == null ? void 0 : l.document);
  r ? N = E ? { passive: !0 } : { capture: !1 } : N = E ? { passive: !1, capture: !0 } : { capture: !0 };
  const V = (b) => {
    g.value && (o == null || o(b, $.value)), g.value = !1;
  }, M = [
    _r(e, "touchstart", (b) => {
      if (b.touches.length !== 1)
        return;
      N.capture && !N.passive && b.preventDefault();
      const [S, A] = k(b);
      v(S, A), p(S, A), i == null || i(b);
    }, N),
    _r(e, "touchmove", (b) => {
      if (b.touches.length !== 1)
        return;
      const [S, A] = k(b);
      p(S, A), !g.value && y.value && (g.value = !0), g.value && (s == null || s(b));
    }, N),
    _r(e, ["touchend", "touchcancel"], V, N)
  ];
  return {
    isPassiveEventSupported: E,
    isSwiping: g,
    direction: $,
    coordsStart: a,
    coordsEnd: c,
    lengthX: d,
    lengthY: u,
    stop: () => M.forEach((b) => b())
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
    const t = e, n = U(null), s = U(!1), o = U(!1), i = U(!1), r = U(!1), l = U("#ffffff"), a = U(0), c = U(0), d = te(() => $.value ? `${c.value}px` : "0");
    let u = 0;
    const h = te(() => {
      const v = {};
      return $.value && s.value && (v.position = "fixed", v.top = "0", v.left = "0", v.right = "0", v.zIndex = "40", o.value ? v.transform = "translateY(-100%)" : v.transform = "translateY(0)"), r.value && (a.value === 0 ? v.backgroundColor = "transparent" : $.value && s.value && (v.backgroundColor = l.value)), v.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", v;
    }), m = () => {
      var N, E, V;
      const v = (E = (N = n.value) == null ? void 0 : N.getRootNode()) == null ? void 0 : E.host;
      if (!v) return;
      v.classList.add("sticky-header-wrapper");
      const p = (V = n.value) == null ? void 0 : V.querySelector(".main-header");
      p && r.value && (a.value === 0 ? (p.style.backgroundColor = "transparent", p.style.borderBottomColor = "transparent") : $.value && s.value && (p.style.backgroundColor = l.value, p.style.borderBottomColor = "#e5e7eb"));
    }, y = W1(() => {
      if (!$.value)
        return;
      const v = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = v, s.value = v > 0, i.value = v > 10, g.value && s.value) {
        const p = v - u;
        Math.abs(p) > 5 && (p > 0 && v > c.value ? o.value = !0 : p < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(v - u) > 1 && (u = v), m();
    }, 50), g = U(t.hideOnScrollDown), $ = U(t.sticky), k = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return ze(() => {
      if (n.value) {
        const v = n.value.getRootNode().host;
        if (v) {
          v.classList.add("sticky-header-wrapper"), r.value = v.classList.contains("header-transparent");
          const p = v.getAttribute("data-hide-on-scroll-down"), N = v.getAttribute("data-sticky"), E = v.getAttribute("data-sticky-bg");
          p !== null && (g.value = p === "true"), N !== null && ($.value = N === "true"), E !== null && (l.value = E || "#ffffff"), setTimeout(k, 100), window.addEventListener("resize", k);
        }
      }
      window.addEventListener("scroll", y, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), y();
    }), kt(() => {
      window.removeEventListener("scroll", y), window.removeEventListener("resize", k);
    }), (v, p) => (x(), C("div", X1, [
      $.value && s.value ? (x(), C("div", {
        key: 0,
        class: "header-placeholder",
        style: dt({ height: d.value })
      }, null, 4)) : j("", !0),
      f("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: Oe(["sticky-header-inner", {
          "is-fixed": $.value && s.value,
          "is-hidden": o.value,
          "has-shadow": i.value,
          "is-transparent": r.value && a.value === 0
        }]),
        style: dt(h.value)
      }, [
        Bn(v.$slots, "default")
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
    const t = e, n = U(null), s = U(!1), o = U(0), i = te(() => {
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
    }), (d, u) => (x(), C("div", Z1, [
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
          e.logoUrl ? (x(), C("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, nb)) : (x(), C("span", sb, K(e.shopName), 1))
        ]),
        f("nav", ob, [
          (x(!0), C(le, null, Se(e.navigationLinks, (h) => (x(), C("a", {
            key: h.url,
            href: h.url,
            class: "nav-link"
          }, K(h.title), 9, ib))), 128))
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
            o.value > 0 ? (x(), C("span", ab, K(o.value), 1)) : j("", !0)
          ])
        ])
      ]),
      (x(), ft(Fn, { to: "body" }, [
        fe(xt, { name: "fade" }, {
          default: Be(() => [
            s.value ? (x(), C("div", {
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
            ])) : j("", !0)
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
    const t = U(""), n = U(!1), s = te(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
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
    return (r, l) => (x(), C("footer", fb, [
      e.showNewsletter ? (x(), C("div", pb, [
        f("div", hb, [
          f("div", mb, [
            f("div", gb, [
              f("h3", vb, K(e.newsletterTitle), 1),
              f("p", yb, K(e.newsletterDescription), 1)
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
                n.value ? (x(), C("span", wb, "Subscribing...")) : (x(), C("span", Eb, "Subscribe"))
              ], 8, _b)
            ], 32)
          ])
        ])
      ])) : j("", !0),
      f("div", Nb, [
        f("div", xb, [
          f("div", Sb, [
            f("div", kb, [
              f("h4", Cb, K(e.companyName), 1),
              f("p", Ob, K(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (x(), C("div", Tb, [
                (x(!0), C(le, null, Se(e.socialLinks, (a) => (x(), C("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (x(), ft(Nl(i(a.name))))
                ], 8, $b))), 128))
              ])) : j("", !0)
            ]),
            (x(!0), C(le, null, Se(e.footerColumns, (a) => (x(), C("div", {
              key: a.title,
              class: "footer-column"
            }, [
              f("h4", Db, K(a.title), 1),
              f("ul", Vb, [
                (x(!0), C(le, null, Se(a.links, (c) => (x(), C("li", {
                  key: c.title
                }, [
                  f("a", {
                    href: c.url,
                    class: "footer-link"
                  }, K(c.title), 9, Ab)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (x(), C("div", Ib, [
              l[4] || (l[4] = f("h4", { class: "footer-heading" }, "Contact", -1)),
              f("div", Mb, [
                e.contactEmail ? (x(), C("p", Pb, [
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
                  Le(" " + K(e.contactEmail), 1)
                ])) : j("", !0),
                e.contactPhone ? (x(), C("p", Rb, [
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
                  Le(" " + K(e.contactPhone), 1)
                ])) : j("", !0),
                e.contactAddress ? (x(), C("p", Lb, [
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
                  Le(" " + K(e.contactAddress), 1)
                ])) : j("", !0)
              ])
            ])) : j("", !0)
          ]),
          e.paymentMethods.length > 0 ? (x(), C("div", Fb, [
            l[5] || (l[5] = f("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            f("div", Bb, [
              (x(!0), C(le, null, Se(e.paymentMethods, (a) => (x(), C("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, jb))), 128))
            ])
          ])) : j("", !0),
          f("div", Hb, [
            f("p", Ub, " © " + K(s.value) + " " + K(e.companyName) + ". All rights reserved. ", 1),
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
    const n = e, s = t, o = U(""), i = U(!1), r = U(!1), l = U(!1), a = te(() => n.product ? n.product : {
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
      const T = a.value.handle;
      return a.value.url || (T ? `/products/${T}` : "#");
    }), d = te(() => {
      var T, b, S;
      return i.value && ((T = a.value.images) != null && T[1]) ? a.value.images[1].src : ((S = (b = a.value.images) == null ? void 0 : b[0]) == null ? void 0 : S.src) || a.value.featured_image || a.value.image || "/placeholder.jpg";
    }), u = te(() => {
      var T;
      return (T = a.value.options) == null ? void 0 : T.some(
        (b) => {
          var S, A;
          return ((S = b.name) == null ? void 0 : S.toLowerCase().includes("color")) || ((A = b.name) == null ? void 0 : A.toLowerCase().includes("colour"));
        }
      );
    }), h = te(() => {
      var b;
      const T = (b = a.value.options) == null ? void 0 : b.find(
        (S) => {
          var A, D;
          return ((A = S.name) == null ? void 0 : A.toLowerCase().includes("color")) || ((D = S.name) == null ? void 0 : D.toLowerCase().includes("colour"));
        }
      );
      return (T == null ? void 0 : T.values) || [];
    }), m = te(() => a.value.price || 0), y = te(() => a.value.compare_at_price || 0), g = te(() => a.value.available && y.value > m.value), $ = te(() => g.value ? Math.round((y.value - m.value) / y.value * 100) : 0), k = (T) => `$${(T / 100).toFixed(2)}`, v = (T) => {
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
      }, S = T.toLowerCase();
      return b[S] || `#${S.replace("#", "")}`;
    }, p = () => {
      var T;
      ((T = a.value.images) == null ? void 0 : T.length) > 1 && (i.value = !0);
    }, N = () => {
      i.value = !1;
    }, E = (T) => {
      o.value = T.value;
    }, V = () => {
      l.value = !l.value;
    }, M = async () => {
      var T, b, S, A;
      r.value = !0;
      try {
        const D = (b = (T = a.value.variants) == null ? void 0 : T[0]) == null ? void 0 : b.id;
        if (!D)
          throw console.error("No variant ID found for product:", a.value), new Error("No variant ID found");
        const H = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: D,
              quantity: 1
            }]
          })
        });
        if (!H.ok)
          throw new Error("Failed to add to cart");
        const W = await H.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((A = (S = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : S.settings) == null ? void 0 : A.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: D, quantity: 1 });
      } catch (D) {
        console.error("Error adding to cart:", D);
      } finally {
        r.value = !1;
      }
    };
    return (T, b) => (x(), C("div", Kb, [
      f("a", {
        href: c.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        d.value ? (x(), C("img", {
          key: 0,
          src: d.value,
          alt: a.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: p,
          onMouseleave: N
        }, null, 40, Gb)) : (x(), C("div", Yb, b[0] || (b[0] = [
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
        g.value ? (x(), C("div", Jb, " -" + K($.value) + "% ", 1)) : j("", !0),
        a.value.available ? (x(), C("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: Ut(V, ["prevent"])
        }, [
          (x(), C("svg", {
            class: Oe(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, b[1] || (b[1] = [
            f("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : j("", !0),
        a.value.available ? j("", !0) : (x(), C("div", Xb, b[2] || (b[2] = [
          f("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Wb),
      f("div", Qb, [
        u.value ? (x(), C("div", Zb, [
          f("div", e_, [
            (x(!0), C(le, null, Se(h.value, (S) => (x(), C("button", {
              key: S.value,
              onClick: (A) => E(S),
              title: S.value,
              class: Oe([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === S.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: dt({ backgroundColor: v(S.value) })
            }, [
              o.value === S.value ? (x(), C("span", n_, b[3] || (b[3] = [
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
              ]))) : j("", !0)
            ], 14, t_))), 128))
          ])
        ])) : j("", !0),
        a.value.vendor ? (x(), C("p", s_, K(a.value.vendor), 1)) : j("", !0),
        f("h3", o_, [
          f("a", {
            href: c.value,
            class: "hover:text-gray-700 transition-colors"
          }, K(a.value.title || "Untitled"), 9, i_)
        ]),
        f("div", r_, [
          f("div", l_, [
            (x(), C(le, null, Se(5, (S) => f("svg", {
              key: S,
              class: Oe(["w-4 h-4", S <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, b[4] || (b[4] = [
              f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          b[5] || (b[5] = f("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        f("div", a_, [
          f("span", c_, K(k(m.value)), 1),
          y.value > m.value ? (x(), C("span", u_, K(k(y.value)), 1)) : j("", !0)
        ]),
        a.value.available ? (x(), C("button", {
          key: 2,
          onClick: M,
          disabled: r.value,
          class: "w-full bg-black text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        }, [
          r.value ? j("", !0) : (x(), C("svg", f_, b[6] || (b[6] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          r.value ? (x(), C("svg", h_, b[7] || (b[7] = [
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
          ]))) : (x(), C("span", p_, "Add to Cart"))
        ], 8, d_)) : j("", !0)
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
    const n = e, s = t, o = U("manual"), i = U([]), r = U([]), l = U([]), a = U(!1), c = U(!1), d = te(() => {
      const v = /* @__PURE__ */ new Set();
      return n.products.forEach((p) => {
        p.product_type && v.add(p.product_type);
      }), Array.from(v).sort();
    }), u = te(() => {
      const v = /* @__PURE__ */ new Set();
      return n.products.forEach((p) => {
        p.vendor && v.add(p.vendor);
      }), Array.from(v).sort();
    }), h = te(() => i.value.length > 0 || r.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      k();
    }, y = () => {
      k();
    }, g = () => {
      i.value = [], r.value = [], l.value = [], a.value = !1, k();
    }, $ = () => {
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
    return (v, p) => (x(), C("div", g_, [
      f("div", v_, [
        f("button", {
          onClick: p[0] || (p[0] = (N) => c.value = !0),
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
            "onUpdate:modelValue": p[1] || (p[1] = (N) => o.value = N),
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
                "onUpdate:modelValue": p[2] || (p[2] = (N) => i.value = N),
                onChange: y,
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
                "onUpdate:modelValue": p[3] || (p[3] = (N) => i.value = N),
                onChange: y,
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
                "onUpdate:modelValue": p[4] || (p[4] = (N) => i.value = N),
                onChange: y,
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
                "onUpdate:modelValue": p[5] || (p[5] = (N) => i.value = N),
                onChange: y,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Zt, i.value]
              ]),
              p[18] || (p[18] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (x(), C("div", k_, [
          p[20] || (p[20] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          f("div", C_, [
            (x(!0), C(le, null, Se(d.value, (N) => (x(), C("label", {
              key: N,
              class: "flex items-center"
            }, [
              yt(f("input", {
                type: "checkbox",
                value: N,
                "onUpdate:modelValue": p[6] || (p[6] = (E) => r.value = E),
                onChange: y,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, O_), [
                [Zt, r.value]
              ]),
              f("span", T_, K(N), 1)
            ]))), 128))
          ])
        ])) : j("", !0),
        u.value.length > 0 ? (x(), C("div", $_, [
          p[21] || (p[21] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          f("div", D_, [
            (x(!0), C(le, null, Se(u.value, (N) => (x(), C("label", {
              key: N,
              class: "flex items-center"
            }, [
              yt(f("input", {
                type: "checkbox",
                value: N,
                "onUpdate:modelValue": p[7] || (p[7] = (E) => l.value = E),
                onChange: y,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, V_), [
                [Zt, l.value]
              ]),
              f("span", A_, K(N), 1)
            ]))), 128))
          ])
        ])) : j("", !0),
        f("div", I_, [
          p[23] || (p[23] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          f("label", M_, [
            yt(f("input", {
              type: "checkbox",
              "onUpdate:modelValue": p[8] || (p[8] = (N) => a.value = N),
              onChange: y,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [Zt, a.value]
            ]),
            p[22] || (p[22] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        h.value ? (x(), C("button", {
          key: 2,
          onClick: g,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : j("", !0)
      ]),
      (x(), ft(Fn, { to: "body" }, [
        c.value ? (x(), C("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: p[11] || (p[11] = Ut((N) => c.value = !1, ["self"]))
        }, [
          f("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: p[9] || (p[9] = (N) => c.value = !1)
          }),
          f("div", P_, [
            f("div", R_, [
              f("div", L_, [
                p[25] || (p[25] = f("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                f("button", {
                  onClick: p[10] || (p[10] = (N) => c.value = !1),
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
        ])) : j("", !0)
      ]))
    ]));
  }
}, B_ = /* @__PURE__ */ Je(F_, [["__scopeId", "data-v-67473a91"]]), j_ = { class: "collection-grid" }, H_ = {
  key: 0,
  class: "mb-8"
}, U_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, q_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, z_ = { class: "mt-4 flex items-center justify-between" }, K_ = { class: "text-sm text-secondary-600" }, W_ = {
  key: 0,
  class: "lg:hidden"
}, G_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, Y_ = {
  key: 0,
  class: "lg:col-span-1"
}, J_ = ["products"], X_ = {
  key: 1,
  class: "text-center py-12"
}, Q_ = ["product"], Z_ = {
  key: 3,
  class: "mt-8"
}, e2 = {
  key: 0,
  class: "inline-flex items-center"
}, t2 = {
  key: 1,
  class: "text-center"
}, n2 = ["disabled"], s2 = { key: 0 }, o2 = { key: 1 }, i2 = {
  key: 2,
  class: "flex items-center justify-between"
}, r2 = { class: "flex-1 flex justify-between sm:hidden" }, l2 = ["disabled"], a2 = ["disabled"], c2 = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, u2 = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, d2 = ["disabled"], f2 = ["onClick"], p2 = ["disabled"], h2 = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, m2 = { class: "relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full" }, g2 = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, v2 = { class: "text-lg font-medium text-secondary-900" }, y2 = {
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
    collectionHandle: {
      type: String,
      default: ""
    },
    totalProducts: {
      type: Number,
      default: 0
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
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    },
    paginationInfo: {
      type: Object,
      default: () => ({})
    },
    columnsDesktop: {
      type: Number,
      default: 4
    },
    columnsMobile: {
      type: [Number, String],
      default: 2
    },
    enableFiltering: {
      type: Boolean,
      default: !0
    },
    enableSorting: {
      type: Boolean,
      default: !0
    },
    filterPosition: {
      type: String,
      default: "sidebar"
    }
  },
  setup(e) {
    const t = e, n = U(!1), s = U(!1), o = U(t.currentPage), i = U(t.products.length), r = U("manual"), l = U({}), a = U(null), c = U(null), d = te(() => {
      const b = Number(t.columnsMobile), S = t.columnsDesktop, A = b === 1 ? "grid-cols-1" : "grid-cols-2", D = S <= 3 ? `md:grid-cols-${S}` : "md:grid-cols-3", H = `lg:grid-cols-${S}`;
      return `grid ${A} ${D} ${H} gap-4 lg:gap-6`;
    }), u = te(() => {
      var A, D, H;
      let b = [...t.products];
      switch (l.value.inStockOnly && (b = b.filter((W) => W.available)), ((A = l.value.priceRanges) == null ? void 0 : A.length) > 0 && (b = b.filter((W) => {
        const G = W.price / 100;
        return l.value.priceRanges.some((Z) => Z === "0-50" ? G < 50 : Z === "50-100" ? G >= 50 && G < 100 : Z === "100-200" ? G >= 100 && G < 200 : Z === "200+" ? G >= 200 : !1);
      })), ((D = l.value.types) == null ? void 0 : D.length) > 0 && (b = b.filter((W) => l.value.types.includes(W.product_type))), ((H = l.value.vendors) == null ? void 0 : H.length) > 0 && (b = b.filter((W) => l.value.vendors.includes(W.vendor))), l.value.sort || r.value) {
        case "price-ascending":
          b.sort((W, G) => W.price - G.price);
          break;
        case "price-descending":
          b.sort((W, G) => G.price - W.price);
          break;
        case "title-ascending":
          b.sort((W, G) => W.title.localeCompare(G.title));
          break;
        case "title-descending":
          b.sort((W, G) => G.title.localeCompare(W.title));
          break;
        case "created-ascending":
          b.sort((W, G) => new Date(W.created_at) - new Date(G.created_at));
          break;
        case "created-descending":
          b.sort((W, G) => new Date(G.created_at) - new Date(W.created_at));
          break;
      }
      return b;
    }), h = te(() => {
      if (t.enableInfiniteScroll)
        return u.value.slice(0, i.value);
      const b = (o.value - 1) * t.productsPerPage, S = b + t.productsPerPage;
      return u.value.slice(b, S);
    }), m = te(() => t.totalPages || Math.ceil(u.value.length / t.productsPerPage)), y = te(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : i.value < u.value.length), g = te(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, u.value.length - i.value)), $ = te(() => {
      const b = [], S = m.value, A = o.value;
      if (S <= 7)
        for (let D = 1; D <= S; D++)
          b.push(D);
      else if (A <= 3) {
        for (let D = 1; D <= 5; D++)
          b.push(D);
        b.push("..."), b.push(S);
      } else if (A >= S - 2) {
        b.push(1), b.push("...");
        for (let D = S - 4; D <= S; D++)
          b.push(D);
      } else {
        b.push(1), b.push("...");
        for (let D = A - 1; D <= A + 1; D++)
          b.push(D);
        b.push("..."), b.push(S);
      }
      return b.filter((D) => D === "..." || D >= 1 && D <= S);
    }), k = (b) => {
      l.value = b, o.value = 1, i.value = t.productsPerPage;
    }, v = () => {
      o.value = 1, i.value = t.productsPerPage;
    }, p = () => {
      s.value = !0, setTimeout(() => {
        i.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, N = async (b) => {
      var A;
      const S = new FormData();
      S.append("id", b.variants[0].id), S.append("quantity", "1"), await ((A = window.OrionCart) == null ? void 0 : A.addItem(S)), console.log("Added to cart:", b.title);
    }, E = (b) => {
      a.value = b;
    }, V = () => {
      a.value = null;
    };
    let M = null;
    const T = () => {
      !t.enableInfiniteScroll || !c.value || (M = new IntersectionObserver(
        (b) => {
          b[0].isIntersecting && y.value && !s.value && p();
        },
        { threshold: 0.1 }
      ), M.observe(c.value));
    };
    return ze(() => {
      T();
    }), kt(() => {
      M && M.disconnect();
    }), nn(() => t.enableInfiniteScroll, () => {
      T();
    }), (b, S) => (x(), C("div", j_, [
      e.showHeader ? (x(), C("div", H_, [
        f("h1", U_, K(e.collectionTitle), 1),
        e.collectionDescription ? (x(), C("div", q_, K(e.collectionDescription), 1)) : j("", !0),
        f("div", z_, [
          f("p", K_, K(e.totalProducts || u.value.length) + " products ", 1),
          e.enableSorting ? (x(), C("div", W_, [
            yt(f("select", {
              "onUpdate:modelValue": S[0] || (S[0] = (A) => r.value = A),
              onChange: v,
              class: "px-3 py-2 border border-secondary-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, S[5] || (S[5] = [
              Cs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Yi, r.value]
            ])
          ])) : j("", !0)
        ])
      ])) : j("", !0),
      f("div", G_, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (x(), C("aside", Y_, [
          f("collection-filters", {
            products: e.products,
            onUpdateFilters: k
          }, null, 40, J_)
        ])) : j("", !0),
        f("div", {
          class: Oe(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (x(), C("div", {
            key: 0,
            class: Oe(d.value)
          }, [
            (x(), C(le, null, Se(6, (A) => f("div", {
              key: A,
              class: "animate-pulse"
            }, S[6] || (S[6] = [
              f("div", { class: "bg-secondary-200 rounded-lg aspect-[3/4]" }, null, -1),
              f("div", { class: "mt-4 space-y-2" }, [
                f("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                f("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : u.value.length === 0 ? (x(), C("div", X_, S[7] || (S[7] = [
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
          ]))) : (x(), C("div", {
            key: 2,
            class: Oe(d.value)
          }, [
            (x(!0), C(le, null, Se(h.value, (A) => (x(), C("product-card", {
              key: A.id,
              product: A,
              onQuickAdd: N,
              onQuickView: E
            }, null, 40, Q_))), 128))
          ], 2)),
          !n.value && u.value.length > 0 ? (x(), C("div", Z_, [
            e.enableInfiniteScroll ? (x(), C("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (x(), C("div", e2, S[8] || (S[8] = [
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
                Le(" Loading more products... ", -1)
              ]))) : j("", !0)
            ], 512)) : y.value ? (x(), C("div", t2, [
              f("button", {
                onClick: p,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                s.value ? (x(), C("span", s2, "Loading...")) : (x(), C("span", o2, "Load More (" + K(g.value) + " remaining)", 1))
              ], 8, n2)
            ])) : j("", !0),
            !e.enableInfiniteScroll && m.value > 1 ? (x(), C("nav", i2, [
              f("div", r2, [
                f("button", {
                  onClick: S[1] || (S[1] = (A) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, l2),
                f("button", {
                  onClick: S[2] || (S[2] = (A) => o.value++),
                  disabled: o.value === m.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, a2)
              ]),
              f("div", c2, [
                f("div", null, [
                  f("nav", u2, [
                    f("button", {
                      onClick: S[3] || (S[3] = (A) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, S[9] || (S[9] = [
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
                    ]), 8, d2),
                    (x(!0), C(le, null, Se($.value, (A) => (x(), C("button", {
                      key: A,
                      onClick: (D) => o.value = A,
                      class: Oe([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === A ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, K(A), 11, f2))), 128)),
                    f("button", {
                      onClick: S[4] || (S[4] = (A) => o.value++),
                      disabled: o.value === m.value,
                      class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, S[10] || (S[10] = [
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
                    ]), 8, p2)
                  ])
                ])
              ])
            ])) : j("", !0)
          ])) : j("", !0)
        ], 2)
      ]),
      (x(), ft(Fn, { to: "body" }, [
        a.value ? (x(), C("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: Ut(V, ["self"])
        }, [
          f("div", h2, [
            f("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: V
            }),
            f("div", m2, [
              f("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                f("button", {
                  onClick: V,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, S[11] || (S[11] = [
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
              f("div", g2, [
                f("h3", v2, K(a.value.title), 1),
                S[12] || (S[12] = f("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : j("", !0)
      ]))
    ]));
  }
}, b2 = { class: "product-gallery" }, _2 = { class: "main-image-wrapper" }, E2 = ["src", "alt"], w2 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, N2 = {
  key: 0,
  class: "thumbnails-wrapper"
}, x2 = ["disabled"], S2 = ["onClick", "aria-label"], k2 = ["src", "alt"], C2 = ["disabled"], O2 = {
  key: 1,
  class: "swiper-dots"
}, T2 = ["onClick", "aria-label"], $2 = ["src", "alt"], D2 = { class: "lightbox-counter" }, V2 = 80, Uo = 4, Oc = 2, A2 = {
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
    const t = e, n = U(0), s = U(!1), o = U(!1), i = U(!1), r = U(!1), l = U(0), a = U(null), c = U(0), d = U(0), u = U({}), h = te(() => t.images.map((M) => {
      if (M.src)
        return M;
      const T = M.url || M;
      return {
        src: `${T}?width=${t.imageTransformWidth}`,
        thumbnail: `${T}?width=${t.thumbnailWidth}`,
        alt: M.alt || t.productTitle
      };
    })), m = te(() => h.value[n.value] || { src: "", alt: "" }), y = te(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), g = te(() => {
      const T = c.value / u.value.width * 100, b = d.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * Oc}px ${u.value.height * Oc}px`,
        backgroundPosition: `${T}% ${b}%`
      };
    }), $ = (M) => {
      s.value = !0, n.value = M;
    }, k = (M) => {
      M === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        h.value.length - Uo,
        l.value + 1
      );
    }, v = (M) => {
      n.value = M, o.value = !0, document.body.style.overflow = "hidden";
    }, p = () => {
      o.value = !1, document.body.style.overflow = "";
    }, N = (M) => {
      M === "prev" ? n.value = n.value > 0 ? n.value - 1 : h.value.length - 1 : n.value = n.value < h.value.length - 1 ? n.value + 1 : 0;
    }, E = (M) => {
      const T = M.currentTarget.getBoundingClientRect();
      u.value = T, c.value = M.clientX - T.left, d.value = M.clientY - T.top;
    }, { lengthX: V } = Y1(
      a,
      {
        onSwipeEnd() {
          V.value > 50 ? k("prev") : V.value < -50 && k("next");
        }
      }
    );
    return ze(() => {
      r.value = window.innerWidth < 768;
      const M = () => {
        r.value = window.innerWidth < 768;
      }, T = (b) => {
        o.value && (b.key === "Escape" && p(), b.key === "ArrowLeft" && N("prev"), b.key === "ArrowRight" && N("next"));
      };
      window.addEventListener("resize", M), window.addEventListener("keydown", T), kt(() => {
        window.removeEventListener("resize", M), window.removeEventListener("keydown", T);
      });
    }), (M, T) => (x(), C("div", b2, [
      f("div", _2, [
        f("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: T[1] || (T[1] = (b) => v(n.value)),
          onMouseenter: T[2] || (T[2] = (b) => i.value = !0),
          onMouseleave: T[3] || (T[3] = (b) => i.value = !1),
          onMousemove: E
        }, [
          f("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Oe(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: T[0] || (T[0] = (b) => s.value = !1)
          }, null, 42, E2),
          s.value ? (x(), C("div", w2, T[9] || (T[9] = [
            f("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : j("", !0),
          T[10] || (T[10] = f("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
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
          i.value && !r.value ? (x(), C("div", {
            key: 1,
            class: "zoom-lens",
            style: dt(y.value)
          }, null, 4)) : j("", !0)
        ], 32),
        i.value && !r.value ? (x(), C("div", {
          key: 0,
          class: "zoom-preview",
          style: dt(g.value)
        }, null, 4)) : j("", !0)
      ]),
      h.value.length > 1 ? (x(), C("div", N2, [
        h.value.length > Uo ? (x(), C("button", {
          key: 0,
          onClick: T[4] || (T[4] = (b) => k("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, T[11] || (T[11] = [
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
        ]), 8, x2)) : j("", !0),
        f("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          f("div", {
            class: "thumbnails-track",
            style: dt({ transform: `translateX(-${l.value * (V2 + 8)}px)` })
          }, [
            (x(!0), C(le, null, Se(h.value, (b, S) => (x(), C("button", {
              key: S,
              onClick: (A) => $(S),
              class: Oe(["thumbnail", { active: S === n.value }]),
              "aria-label": `View image ${S + 1}`
            }, [
              f("img", {
                src: b.thumbnail || b.src,
                alt: b.alt,
                class: "w-full h-full object-contain"
              }, null, 8, k2)
            ], 10, S2))), 128))
          ], 4)
        ], 512),
        h.value.length > Uo ? (x(), C("button", {
          key: 1,
          onClick: T[5] || (T[5] = (b) => k("next")),
          disabled: l.value >= h.value.length - Uo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, T[12] || (T[12] = [
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
        ]), 8, C2)) : j("", !0)
      ])) : j("", !0),
      h.value.length > 1 && r.value ? (x(), C("div", O2, [
        (x(!0), C(le, null, Se(h.value, (b, S) => (x(), C("button", {
          key: S,
          onClick: (A) => $(S),
          class: Oe(["swiper-dot", { active: S === n.value }]),
          "aria-label": `Go to image ${S + 1}`
        }, null, 10, T2))), 128))
      ])) : j("", !0),
      (x(), ft(Fn, { to: "body" }, [
        o.value ? (x(), C("div", {
          key: 0,
          class: "lightbox",
          onClick: p
        }, [
          f("button", {
            onClick: p,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, T[13] || (T[13] = [
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
          h.value.length > 1 ? (x(), C("button", {
            key: 0,
            onClick: T[6] || (T[6] = Ut((b) => N("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, T[14] || (T[14] = [
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
          ]))) : j("", !0),
          f("div", {
            class: "lightbox-image-wrapper",
            onClick: T[7] || (T[7] = Ut(() => {
            }, ["stop"]))
          }, [
            f("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, $2)
          ]),
          h.value.length > 1 ? (x(), C("button", {
            key: 1,
            onClick: T[8] || (T[8] = Ut((b) => N("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, T[15] || (T[15] = [
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
          ]))) : j("", !0),
          f("div", D2, K(n.value + 1) + " / " + K(h.value.length), 1)
        ])) : j("", !0)
      ]))
    ]));
  }
}, I2 = /* @__PURE__ */ Je(A2, [["__scopeId", "data-v-a7c1d2a3"]]), M2 = { class: "product-info" }, P2 = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, R2 = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, L2 = { class: "price-wrapper mb-6" }, F2 = { class: "flex items-baseline gap-3" }, B2 = { class: "text-3xl font-semibold text-gray-900" }, j2 = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, H2 = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, U2 = {
  key: 1,
  class: "mb-6"
}, q2 = ["product", "current-variant"], z2 = ["value"], K2 = { class: "mb-4" }, W2 = ["max"], G2 = { class: "mb-4" }, Y2 = {
  key: 0,
  class: "text-red-600 font-medium"
}, J2 = {
  key: 1,
  class: "text-amber-600"
}, X2 = {
  key: 2,
  class: "text-green-600"
}, Q2 = { class: "flex flex-col sm:flex-row gap-3" }, Z2 = ["disabled"], eE = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, tE = { key: 1 }, nE = { key: 2 }, sE = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, oE = ["innerHTML"], iE = { class: "space-y-4" }, rE = {
  key: 0,
  class: "group"
}, lE = ["innerHTML"], aE = {
  key: 1,
  class: "group"
}, cE = { class: "mt-8 pt-8 border-t" }, uE = { class: "flex gap-3" }, dE = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, fE = {
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
    const n = e, s = t, o = U(n.product.selected_or_first_available_variant || (($ = n.product.variants) == null ? void 0 : $[0]) || {}), i = U(1), r = U(!1), l = U(!1), a = te(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = te(() => {
      var k;
      return (k = n.product.options) == null ? void 0 : k.some(
        (v) => v.name.toLowerCase() === "size" || v.name.toLowerCase() === "taille"
      );
    }), d = (k) => `$${(k / 100).toFixed(2)}`, u = (k) => {
      o.value = k, s("variant-change", k);
      const v = new URL(window.location);
      v.searchParams.set("variant", k.id), window.history.replaceState({}, "", v);
    }, h = async () => {
      var v;
      r.value = !0;
      const k = new FormData();
      k.append("id", o.value.id), k.append("quantity", i.value);
      try {
        await ((v = window.OrionCart) == null ? void 0 : v.addItem(k));
        const p = event.target, N = p.textContent;
        p.textContent = "✓ Added to Cart", setTimeout(() => {
          p.textContent = N;
        }, 2e3);
      } catch (p) {
        console.error("Failed to add to cart:", p), alert("Failed to add item to cart. Please try again.");
      } finally {
        r.value = !1;
      }
    }, m = async () => {
      await h(), window.location.href = "/checkout";
    }, y = (k) => {
      const v = window.location.href, p = n.product.title, N = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(v)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(v)}&text=${encodeURIComponent(p)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(v)}&description=${encodeURIComponent(p)}`
      };
      N[k] && window.open(N[k], "_blank", "width=600,height=400");
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
    }), (k, v) => (x(), C("div", M2, [
      f("h1", P2, K(e.product.title), 1),
      e.product.vendor ? (x(), C("p", R2, " by " + K(e.product.vendor), 1)) : j("", !0),
      f("div", L2, [
        f("div", F2, [
          f("span", B2, K(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (x(), C("span", j2, K(d(o.value.compare_at_price)), 1)) : j("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (x(), C("p", H2, " Save " + K(d(o.value.compare_at_price - o.value.price)) + " (" + K(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : j("", !0)
      ]),
      e.product.has_only_default_variant ? j("", !0) : (x(), C("div", U2, [
        f("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, q2)
      ])),
      f("form", {
        onSubmit: Ut(h, ["prevent"]),
        class: "mb-8"
      }, [
        f("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, z2),
        f("div", K2, [
          v[4] || (v[4] = f("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          yt(f("quantity-selector", {
            "onUpdate:modelValue": v[0] || (v[0] = (p) => i.value = p),
            min: 1,
            max: a.value
          }, null, 8, W2), [
            [Rn, i.value]
          ])
        ]),
        f("div", G2, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (x(), C("p", J2, " Only " + K(o.value.inventory_quantity) + " left in stock ", 1)) : (x(), C("p", X2, " ✓ In Stock ")) : (x(), C("p", Y2, " Out of Stock "))
        ]),
        f("div", Q2, [
          f("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || r.value
          }, [
            r.value ? (x(), C("span", eE, v[5] || (v[5] = [
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
              Le(" Adding... ", -1)
            ]))) : o.value.available ? (x(), C("span", nE, " Add to Cart ")) : (x(), C("span", tE, " Sold Out "))
          ], 8, Z2),
          e.showBuyNow ? (x(), ft(ws, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Be(() => v[6] || (v[6] = [
              Le(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : j("", !0)
        ])
      ], 32),
      e.product.description ? (x(), C("div", sE, [
        v[7] || (v[7] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        f("div", {
          innerHTML: e.product.description
        }, null, 8, oE)
      ])) : j("", !0),
      f("div", iE, [
        v[10] || (v[10] = Cs('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (x(), C("details", rE, [
          v[8] || (v[8] = f("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
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
          }, null, 8, lE)
        ])) : j("", !0),
        c.value ? (x(), C("details", aE, v[9] || (v[9] = [
          Cs('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : j("", !0)
      ]),
      f("div", cE, [
        v[15] || (v[15] = f("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        f("div", uE, [
          f("button", {
            onClick: v[1] || (v[1] = (p) => y("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, v[11] || (v[11] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          f("button", {
            onClick: v[2] || (v[2] = (p) => y("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, v[12] || (v[12] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          f("button", {
            onClick: v[3] || (v[3] = (p) => y("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, v[13] || (v[13] = [
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
            v[14] || (v[14] = f("svg", {
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
            l.value ? (x(), C("span", dE, " Link copied! ")) : j("", !0)
          ])
        ])
      ])
    ]));
  }
}, pE = /* @__PURE__ */ Je(fE, [["__scopeId", "data-v-9e2c3b5c"]]), hE = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, mE = { class: "space-y-3 mb-4" }, gE = { class: "flex justify-between text-sm" }, vE = { class: "text-gray-600" }, yE = { class: "font-medium text-gray-900" }, bE = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, _E = {
  key: 1,
  class: "flex justify-between text-sm"
}, EE = { class: "text-gray-900" }, wE = {
  key: 2,
  class: "flex justify-between text-sm"
}, NE = { class: "text-gray-900" }, xE = { class: "border-t pt-4 mb-6" }, SE = { class: "flex justify-between items-baseline" }, kE = { class: "text-right" }, CE = { class: "text-xl font-bold text-gray-900" }, OE = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, TE = { class: "mb-6" }, $E = { class: "group" }, DE = { class: "mt-3" }, VE = ["disabled"], AE = ["disabled"], IE = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, ME = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, PE = ["disabled"], RE = {
  key: 0,
  class: "flex items-center gap-2"
}, LE = { key: 1 }, FE = {
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
    const n = e, s = t, o = U(""), i = U(""), r = U(""), l = U(!1), a = U(!1), c = te(() => n.cart.item_count || 0), d = te(() => n.cart.total_price || 0), u = te(() => n.cart.original_total_price || n.cart.total_price || 0), h = te(() => n.cart.total_discount || 0), m = te(() => d.value >= 5e3 ? 0 : 500), y = te(() => Math.round(d.value * 0.1)), g = (v) => `$${(v / 100).toFixed(2)}`, $ = async () => {
      var v;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, i.value = "", r.value = "";
        try {
          const p = new FormData();
          p.append("discount_code", o.value);
          const N = await fetch("/discount/apply", {
            method: "POST",
            body: p
          });
          if (N.ok)
            r.value = "Promo code applied successfully!", o.value = "", await ((v = window.OrionCart) == null ? void 0 : v.fetchCart());
          else {
            const E = await N.json();
            i.value = E.message || "Invalid promo code";
          }
        } catch (p) {
          console.error("Failed to apply promo code:", p), i.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, k = async () => {
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
    return (v, p) => (x(), C("div", hE, [
      p[8] || (p[8] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      f("div", mE, [
        f("div", gE, [
          f("span", vE, "Subtotal (" + K(c.value) + " " + K(c.value === 1 ? "item" : "items") + ")", 1),
          f("span", yE, K(g(u.value)), 1)
        ]),
        h.value > 0 ? (x(), C("div", bE, [
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
            Le(" Discounts ")
          ], -1)),
          f("span", null, "-" + K(g(h.value)), 1)
        ])) : j("", !0),
        e.showShipping ? (x(), C("div", _E, [
          p[2] || (p[2] = f("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          f("span", EE, K(m.value === 0 ? "Free" : g(m.value)), 1)
        ])) : j("", !0),
        e.showTax ? (x(), C("div", wE, [
          p[3] || (p[3] = f("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          f("span", NE, K(g(y.value)), 1)
        ])) : j("", !0)
      ]),
      f("div", xE, [
        f("div", SE, [
          p[4] || (p[4] = f("span", { class: "text-lg font-semibold" }, "Total", -1)),
          f("div", kE, [
            f("span", CE, K(g(d.value)), 1),
            h.value > 0 ? (x(), C("p", OE, " You saved " + K(g(h.value)) + "! ", 1)) : j("", !0)
          ])
        ])
      ]),
      f("div", TE, [
        f("details", $E, [
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
          f("div", DE, [
            f("form", {
              onSubmit: Ut($, ["prevent"]),
              class: "flex gap-2"
            }, [
              yt(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (N) => o.value = N),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, VE), [
                [Rn, o.value]
              ]),
              f("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !o.value.trim() || l.value
              }, K(l.value ? "Applying..." : "Apply"), 9, AE)
            ], 32),
            i.value ? (x(), C("p", IE, K(i.value), 1)) : j("", !0),
            r.value ? (x(), C("p", ME, K(r.value), 1)) : j("", !0)
          ])
        ])
      ]),
      f("button", {
        onClick: k,
        class: "w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        disabled: c.value === 0 || a.value
      }, [
        a.value ? (x(), C("span", RE, p[6] || (p[6] = [
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
          Le(" Processing... ", -1)
        ]))) : (x(), C("span", LE, p[7] || (p[7] = [
          Le(" Proceed to Checkout ", -1),
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
      ], 8, PE),
      p[9] || (p[9] = Cs('<div class="mt-6 space-y-2" data-v-d638da26><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-d638da26></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-d638da26></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-d638da26></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d638da26></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-d638da26><p class="text-xs text-gray-600 mb-2" data-v-d638da26>We accept</p><div class="flex gap-2" data-v-d638da26><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-d638da26></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#EB001B" data-v-d638da26></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-d638da26></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-d638da26></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-d638da26></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#253B80" data-v-d638da26></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-d638da26></path></svg></div></div>', 2))
    ]));
  }
}, BE = /* @__PURE__ */ Je(FE, [["__scopeId", "data-v-d638da26"]]), jE = { class: "slideshow-banner" }, HE = {
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
    const t = e, n = U(0), s = U([]), o = U(null), i = te(() => t.autoRotate === !0 || t.autoRotate === "true"), r = te(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const g = document.querySelector(".slideshow-prev"), $ = document.querySelector(".slideshow-next"), k = document.querySelectorAll(".slide-indicator");
      g && g.addEventListener("click", d), $ && $.addEventListener("click", c), k.forEach((v, p) => {
        v.addEventListener("click", () => a(p));
      }), i.value && u();
    }, a = (g) => {
      var v, p, N, E;
      if (g === n.value || !s.value.length) return;
      (v = s.value[n.value]) == null || v.classList.remove("opacity-100"), (p = s.value[n.value]) == null || p.classList.add("opacity-0");
      const $ = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      $ == null || $.classList.remove("opacity-100"), $ == null || $.classList.add("opacity-50"), n.value = g, (N = s.value[n.value]) == null || N.classList.remove("opacity-0"), (E = s.value[n.value]) == null || E.classList.add("opacity-100");
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
    }, y = () => {
      i.value && u();
    };
    return ze(() => {
      setTimeout(l, 100);
      const g = document.querySelector(".slideshow-wrapper");
      g && (g.addEventListener("mouseenter", m), g.addEventListener("mouseleave", y));
    }), kt(() => {
      h();
      const g = document.querySelector(".slideshow-wrapper");
      g && (g.removeEventListener("mouseenter", m), g.removeEventListener("mouseleave", y));
    }), (g, $) => (x(), C("div", jE, [
      Bn(g.$slots, "default", {}, void 0, !0)
    ]));
  }
}, UE = /* @__PURE__ */ Je(HE, [["__scopeId", "data-v-8690c751"]]), qE = { class: "testimonials-carousel relative" }, zE = {
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
    const t = e, n = U(0), s = U([]), o = U(null), i = U(null), r = te(() => t.autoRotate === !0 || t.autoRotate === "true"), l = te(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), i.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const E = document.querySelector(".testimonials-prev"), V = document.querySelector(".testimonials-next"), M = document.querySelectorAll(".testimonial-indicator");
      E && E.addEventListener("click", u), V && V.addEventListener("click", d), M.forEach((T, b) => {
        T.addEventListener("click", () => c(b));
      }), r.value && h();
    }, c = (E) => {
      if (E === n.value || !s.value.length || !i.value) return;
      n.value = E;
      const M = -s.value[0].offsetWidth * n.value;
      i.value.style.transform = `translateX(${M}px)`, document.querySelectorAll(".testimonial-indicator").forEach((b, S) => {
        S === n.value ? (b.classList.remove("bg-gray-300"), b.classList.add("bg-red-600")) : (b.classList.remove("bg-red-600"), b.classList.add("bg-gray-300"));
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
    }, y = () => {
      r.value && m();
    }, g = () => {
      r.value && h();
    };
    let $ = 0, k = 0;
    const v = (E) => {
      $ = E.changedTouches[0].screenX;
    }, p = (E) => {
      k = E.changedTouches[0].screenX, N();
    }, N = () => {
      const V = $ - k;
      Math.abs(V) > 50 && (V > 0 ? d() : u());
    };
    return ze(() => {
      setTimeout(a, 100);
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.addEventListener("mouseenter", y), E.addEventListener("mouseleave", g), E.addEventListener("touchstart", v), E.addEventListener("touchend", p));
    }), kt(() => {
      m();
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.removeEventListener("mouseenter", y), E.removeEventListener("mouseleave", g), E.removeEventListener("touchstart", v), E.removeEventListener("touchend", p));
    }), (E, V) => (x(), C("div", qE, [
      Bn(E.$slots, "default", {}, void 0, !0)
    ]));
  }
}, KE = /* @__PURE__ */ Je(zE, [["__scopeId", "data-v-276cc4e8"]]), WE = { class: "video-player relative w-full h-full" }, GE = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, YE = ["src", "title"], JE = {
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
    const t = e, n = U(!1), s = U(""), o = U(""), i = te(() => t.autoplay === !0 || t.autoplay === "true"), r = te(() => t.muted === !0 || t.muted === "true"), l = te(() => t.controls === !0 || t.controls === "true"), a = te(() => `${s.value} video player`), c = te(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const y = i.value ? "1" : "0", g = r.value ? "1" : "0", $ = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${y}&mute=${g}&controls=${$}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${y}&muted=${g}&controls=${$}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
      if (!m) return { type: "", id: "" };
      const y = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const $ of y) {
        const k = m.match($);
        if (k)
          return { type: "youtube", id: k[1] };
      }
      const g = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const $ of g) {
        const k = m.match($);
        if (k)
          return { type: "vimeo", id: k[1] };
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
      const y = document.querySelector(".play-button");
      y && y.addEventListener("click", u), h();
    }), (m, y) => (x(), C("div", WE, [
      n.value ? (x(), C("div", GE, [
        f("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, YE)
      ])) : (x(), C("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        Bn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, XE = /* @__PURE__ */ Je(JE, [["__scopeId", "data-v-540fecb2"]]), QE = { class: "password-modal" }, ZE = {
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
    }), (c, d) => (x(), C("div", QE, [
      Bn(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, ew = /* @__PURE__ */ Je(ZE, [["__scopeId", "data-v-075988c6"]]), tw = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, nw = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, sw = { class: "bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20" }, ow = { class: "max-w-6xl mx-auto" }, iw = { class: "relative" }, rw = { class: "px-4 py-8 sm:px-6 lg:px-8" }, lw = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, aw = { class: "flex-1 relative group" }, cw = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, uw = {
  key: 0,
  class: "relative"
}, dw = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, fw = { class: "flex flex-wrap gap-2" }, pw = ["onClick"], hw = {
  key: 0,
  class: "border-t border-gray-100"
}, mw = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, gw = {
  key: 0,
  class: "p-6"
}, vw = { class: "animate-pulse" }, yw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, bw = {
  key: 1,
  class: "p-6"
}, _w = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Ew = ["href"], ww = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, Nw = ["src", "alt"], xw = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, Sw = { class: "flex-1 min-w-0" }, kw = { class: "text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2" }, Cw = { class: "mt-1 flex items-center gap-2" }, Ow = { class: "text-sm font-semibold text-gray-900" }, Tw = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, $w = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, Dw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, Vw = ["href"], Aw = { class: "text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors" }, Iw = {
  key: 3,
  class: "p-12 text-center"
}, Mw = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, Pw = ["href"], Rw = {
  __name: "SearchOverlay",
  setup(e) {
    const t = U(!1), n = U(""), s = U(null), o = U(!1), i = U({
      products: [],
      collections: []
    }), r = U(null), l = te(() => {
      var k;
      return ((k = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : k.search) || "/search";
    }), a = te(() => n.value.length > 0), c = U([
      "New Arrivals",
      "Best Sellers",
      "Sale",
      "Summer Collection"
    ]), d = (k) => {
      var V, M;
      if (!k && k !== 0) return "$0.00";
      const v = ((V = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : V.money_format) || "${{amount}}", p = ((M = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : M.current) || "en", E = new Intl.NumberFormat(p, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(k));
      return v.replace("{{amount}}", E);
    }, u = async () => {
      var k;
      t.value = !0, document.body.style.overflow = "hidden", await Ls(), (k = s.value) == null || k.focus();
    }, h = () => {
      t.value = !1, document.body.style.overflow = "", n.value = "", i.value = { products: [], collections: [] };
    }, m = () => {
      if (clearTimeout(r.value), n.value.length < 2) {
        i.value = { products: [], collections: [] }, o.value = !1;
        return;
      }
      o.value = !0, r.value = setTimeout(() => {
        y();
      }, 300);
    }, y = async () => {
      var k;
      try {
        const v = ((k = window.routes) == null ? void 0 : k.predictive_search_url) || "/search/suggest", p = await fetch(
          `${v}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (p.ok) {
          const N = await p.text(), M = new DOMParser().parseFromString(N, "text/html").querySelectorAll(".predictive-search__list-item"), T = Array.from(M).map((b) => {
            var W, G;
            const S = b.querySelector("a"), A = b.querySelector("img"), D = b.querySelector(".predictive-search__item-head"), H = b.querySelector(".price__item");
            return {
              url: (S == null ? void 0 : S.href) || "#",
              image: (A == null ? void 0 : A.src) || "",
              title: ((W = D == null ? void 0 : D.textContent) == null ? void 0 : W.trim()) || "",
              price: ((G = H == null ? void 0 : H.textContent) == null ? void 0 : G.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          i.value = {
            products: T,
            collections: []
            // Collections can be added if needed
          };
        }
      } catch (v) {
        console.error("Search error:", v), i.value = { products: [], collections: [] };
      } finally {
        o.value = !1;
      }
    }, g = () => {
      n.value && (window.location.href = `${l.value}?q=${encodeURIComponent(n.value)}`);
    }, $ = (k) => {
      k.key === "Escape" && t.value && h();
    };
    return ze(() => {
      document.addEventListener("search-overlay:open", u), document.addEventListener("search-overlay:close", h), document.addEventListener("keydown", $);
    }), kt(() => {
      document.removeEventListener("search-overlay:open", u), document.removeEventListener("search-overlay:close", h), document.removeEventListener("keydown", $);
    }), (k, v) => (x(), ft(Fn, { to: "body" }, [
      fe(xt, { name: "search-overlay" }, {
        default: Be(() => [
          t.value ? (x(), C("div", tw, [
            fe(xt, { name: "fade" }, {
              default: Be(() => [
                t.value ? (x(), C("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-all duration-300",
                  onClick: h
                })) : j("", !0)
              ]),
              _: 1
            }),
            fe(xt, {
              name: "slide-down",
              appear: ""
            }, {
              default: Be(() => {
                var p, N;
                return [
                  t.value ? (x(), C("div", nw, [
                    f("div", sw, [
                      f("div", ow, [
                        f("div", iw, [
                          f("div", rw, [
                            f("div", lw, [
                              f("div", aw, [
                                v[4] || (v[4] = f("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
                                  f("svg", {
                                    class: "w-5 h-5 text-gray-400 group-focus-within:text-gray-600 transition-colors",
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
                                ], -1)),
                                yt(f("input", {
                                  ref_key: "searchInput",
                                  ref: s,
                                  "onUpdate:modelValue": v[0] || (v[0] = (E) => n.value = E),
                                  type: "search",
                                  placeholder: "Search for products, collections...",
                                  class: "w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-200",
                                  onInput: m,
                                  onKeydown: [
                                    yi(h, ["escape"]),
                                    yi(g, ["enter"])
                                  ]
                                }, null, 544), [
                                  [Rn, n.value]
                                ]),
                                f("div", cw, [
                                  o.value ? (x(), C("div", uw, v[2] || (v[2] = [
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (x(), C("button", {
                                    key: 1,
                                    onClick: v[1] || (v[1] = (E) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, v[3] || (v[3] = [
                                    f("svg", {
                                      class: "w-4 h-4 text-gray-400",
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
                                  ]))) : j("", !0)
                                ])
                              ]),
                              f("button", {
                                type: "button",
                                class: "p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200",
                                onClick: h
                              }, v[5] || (v[5] = [
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
                            !n.value && !o.value ? (x(), C("div", dw, [
                              v[6] || (v[6] = f("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              f("div", fw, [
                                (x(!0), C(le, null, Se(c.value, (E) => (x(), C("button", {
                                  key: E,
                                  onClick: (V) => {
                                    n.value = E, m();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, K(E), 9, pw))), 128))
                              ])
                            ])) : j("", !0)
                          ]),
                          a.value ? (x(), C("div", hw, [
                            f("div", mw, [
                              o.value ? (x(), C("div", gw, [
                                f("div", vw, [
                                  v[8] || (v[8] = f("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  f("div", yw, [
                                    (x(), C(le, null, Se(4, (E) => f("div", {
                                      key: E,
                                      class: "flex items-start space-x-3"
                                    }, v[7] || (v[7] = [
                                      f("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      f("div", { class: "flex-1" }, [
                                        f("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        f("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : i.value.products && i.value.products.length > 0 ? (x(), C("div", bw, [
                                v[10] || (v[10] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                f("div", _w, [
                                  (x(!0), C(le, null, Se(i.value.products, (E) => (x(), C("a", {
                                    key: E.id,
                                    href: E.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: h
                                  }, [
                                    f("div", ww, [
                                      E.image ? (x(), C("img", {
                                        key: 0,
                                        src: E.image,
                                        alt: E.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, Nw)) : (x(), C("div", xw, v[9] || (v[9] = [
                                        f("svg", {
                                          class: "w-8 h-8 text-gray-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          f("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                          })
                                        ], -1)
                                      ])))
                                    ]),
                                    f("div", Sw, [
                                      f("p", kw, K(E.title), 1),
                                      f("div", Cw, [
                                        f("p", Ow, K(d(E.price)), 1),
                                        E.compareAtPrice && E.compareAtPrice > E.price ? (x(), C("p", Tw, K(d(E.compareAtPrice)), 1)) : j("", !0)
                                      ])
                                    ])
                                  ], 8, Ew))), 128))
                                ])
                              ])) : j("", !0),
                              i.value.collections && i.value.collections.length > 0 ? (x(), C("div", $w, [
                                v[12] || (v[12] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                f("div", Dw, [
                                  (x(!0), C(le, null, Se(i.value.collections, (E) => (x(), C("a", {
                                    key: E.id,
                                    href: E.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: h
                                  }, [
                                    f("span", Aw, K(E.title), 1),
                                    v[11] || (v[11] = f("svg", {
                                      class: "w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all",
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
                                    ], -1))
                                  ], 8, Vw))), 128))
                                ])
                              ])) : j("", !0),
                              n.value && !o.value && (!i.value.products || i.value.products.length === 0) && (!i.value.collections || i.value.collections.length === 0) ? (x(), C("div", Iw, v[13] || (v[13] = [
                                f("div", { class: "w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center" }, [
                                  f("svg", {
                                    class: "w-10 h-10 text-gray-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    f("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "1.5",
                                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    })
                                  ])
                                ], -1),
                                f("p", { class: "text-gray-900 font-medium mb-2" }, "No results found", -1),
                                f("p", { class: "text-sm text-gray-500" }, "Try searching for something else or check your spelling", -1)
                              ]))) : j("", !0)
                            ]),
                            n.value && (((p = i.value.products) == null ? void 0 : p.length) > 0 || ((N = i.value.collections) == null ? void 0 : N.length) > 0) ? (x(), C("div", Mw, [
                              f("a", {
                                href: `${l.value}?q=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: h
                              }, [
                                Le(' View all results for "' + K(n.value) + '" ', 1),
                                v[14] || (v[14] = f("svg", {
                                  class: "w-4 h-4",
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
                                ], -1))
                              ], 8, Pw)
                            ])) : j("", !0)
                          ])) : j("", !0)
                        ])
                      ])
                    ])
                  ])) : j("", !0)
                ];
              }),
              _: 1
            })
          ])) : j("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Lw = /* @__PURE__ */ Je(Rw, [["__scopeId", "data-v-4750b7e7"]]), Fw = /* @__PURE__ */ Fe({
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
}), Bw = /* @__PURE__ */ Fe(Af), jw = /* @__PURE__ */ Fe(N1), Hw = /* @__PURE__ */ Fe(B1), Uw = /* @__PURE__ */ Fe(Df), qw = /* @__PURE__ */ Fe(Q1), zw = /* @__PURE__ */ Fe(Mf), Kw = /* @__PURE__ */ Fe(zb), Ww = /* @__PURE__ */ Fe(B_), Gw = /* @__PURE__ */ Fe(y2), Yw = /* @__PURE__ */ Fe(I2), Jw = /* @__PURE__ */ Fe(pE), Xw = /* @__PURE__ */ Fe(Vf), Qw = /* @__PURE__ */ Fe(BE), Zw = /* @__PURE__ */ Fe(UE), eN = /* @__PURE__ */ Fe(KE), tN = /* @__PURE__ */ Fe(XE), nN = /* @__PURE__ */ Fe(ew), sN = /* @__PURE__ */ Fe(Lw);
customElements.define("orion-button", Fw);
customElements.define("cart-drawer", Bw);
customElements.define("mobile-menu", jw);
customElements.define("product-variant-picker", Hw);
customElements.define("quantity-selector", Uw);
customElements.define("sticky-header", qw);
customElements.define("main-header", zw);
customElements.define("site-footer", Kw);
customElements.define("collection-filters", Ww);
customElements.define("collection-grid", Gw);
customElements.define("product-gallery", Yw);
customElements.define("product-info", Jw);
customElements.define("cart-item", Xw);
customElements.define("cart-summary", Qw);
customElements.define("slideshow-banner", Zw);
customElements.define("testimonials-carousel", eN);
customElements.define("video-player", tN);
customElements.define("password-modal", nN);
customElements.define("search-overlay", sN);
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
