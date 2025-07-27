var nl = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = nl.NODE_ENV !== "production" ? Object.freeze({}) : {}, vs = nl.NODE_ENV !== "production" ? Object.freeze([]) : [], $e = () => {
}, Ks = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), er = (e) => e.startsWith("onUpdate:"), fe = Object.assign, sl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Lf = Object.prototype.hasOwnProperty, ge = (e, t) => Lf.call(e, t), Y = Array.isArray, Jn = (e) => Rs(e) === "[object Map]", cs = (e) => Rs(e) === "[object Set]", ia = (e) => Rs(e) === "[object Date]", Ff = (e) => Rs(e) === "[object RegExp]", oe = (e) => typeof e == "function", le = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Tr = (e) => (me(e) || oe(e)) && oe(e.then) && oe(e.catch), Tc = Object.prototype.toString, Rs = (e) => Tc.call(e), ol = (e) => Rs(e).slice(8, -1), $r = (e) => Rs(e) === "[object Object]", rl = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ Ge(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), $c = /* @__PURE__ */ Ge(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Dr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Bf = /-(\w)/g, Ce = Dr(
  (e) => e.replace(Bf, (t, n) => n ? n.toUpperCase() : "")
), jf = /\B([A-Z])/g, tt = Dr(
  (e) => e.replace(jf, "-$1").toLowerCase()
), on = Dr((e) => e.charAt(0).toUpperCase() + e.slice(1)), en = Dr(
  (e) => e ? `on${on(e)}` : ""
), dt = (e, t) => !Object.is(e, t), $n = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ss = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, tr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, nr = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let la;
const xo = () => la || (la = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
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
}, qf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", zf = /* @__PURE__ */ Ge(qf), aa = 2;
function Kf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const o = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let r = 0;
  const i = [];
  for (let l = 0; l < s.length; l++)
    if (r += s[l].length + (o[l] && o[l].length || 0), r >= t) {
      for (let a = l - aa; a <= l + aa || n > r; a++) {
        if (a < 0 || a >= s.length) continue;
        const c = a + 1;
        i.push(
          `${c}${" ".repeat(Math.max(3 - String(c).length, 0))}|  ${s[a]}`
        );
        const d = s[a].length, u = o[a] && o[a].length || 0;
        if (a === l) {
          const p = t - (r - (d + u)), m = Math.max(
            1,
            n > r ? d - p : n - t
          );
          i.push("   |  " + " ".repeat(p) + "^".repeat(m));
        } else if (a > l) {
          if (n > r) {
            const p = Math.max(Math.min(n - r, d), 1);
            i.push("   |  " + "^".repeat(p));
          }
          r += d + u;
        }
      }
      break;
    }
  return i.join(`
`);
}
function ht(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? Dc(s) : ht(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (le(e) || me(e))
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
  if (le(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (le(s) || typeof s == "number") {
      const o = n.startsWith("--") ? n : tt(n);
      t += `${o}:${s};`;
    }
  }
  return t;
}
function ke(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = ke(e[n]);
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
  return t && !le(t) && (e.class = ke(t)), n && (e.style = ht(n)), e;
}
const Qf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Zf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ep = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", tp = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Vc = /* @__PURE__ */ Ge(Qf), Ac = /* @__PURE__ */ Ge(Zf), Ic = /* @__PURE__ */ Ge(ep), np = /* @__PURE__ */ Ge(tp), Mc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", sp = /* @__PURE__ */ Ge(Mc), ca = /* @__PURE__ */ Ge(
  Mc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function il(e) {
  return !!e || e === "";
}
const op = /* @__PURE__ */ Ge(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), rp = /* @__PURE__ */ Ge(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function ip(e) {
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
    n = Rn(e[s], t[s]);
  return n;
}
function Rn(e, t) {
  if (e === t) return !0;
  let n = ia(e), s = ia(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = xt(e), s = xt(t), n || s)
    return e === t;
  if (n = Y(e), s = Y(t), n || s)
    return n && s ? cp(e, t) : !1;
  if (n = me(e), s = me(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !Rn(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Vr(e, t) {
  return e.findIndex((n) => Rn(n, t));
}
const Pc = (e) => !!(e && e.__v_isRef === !0), H = (e) => le(e) ? e : e == null ? "" : Y(e) || me(e) && (e.toString === Tc || !oe(e.toString)) ? Pc(e) ? H(e.value) : JSON.stringify(e, Rc, 2) : String(e), Rc = (e, t) => Pc(t) ? Rc(e, t.value) : Jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[si(s, r) + " =>"] = o, n),
    {}
  )
} : cs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => si(n))
} : xt(t) ? si(t) : me(t) && !Y(t) && !$r(t) ? String(t) : t, si = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Lc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && nl.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var _e = {};
function It(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ze;
class ll {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ze, !t && Ze && (this.index = (Ze.scopes || (Ze.scopes = [])).push(
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
      const n = Ze;
      try {
        return Ze = this, t();
      } finally {
        Ze = n;
      }
    } else _e.NODE_ENV !== "production" && It("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ze, Ze = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ze = this.prevScope, this.prevScope = void 0);
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
  return Ze;
}
function Fc(e, t = !1) {
  Ze ? Ze.cleanups.push(e) : _e.NODE_ENV !== "production" && !t && It(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Ee;
const oi = /* @__PURE__ */ new WeakSet();
class ao {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ze && Ze.active && Ze.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, oi.has(this) && (oi.delete(this), this.trigger()));
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
    const t = Ee, n = Ut;
    Ee = this, Ut = !0;
    try {
      return this.fn();
    } finally {
      _e.NODE_ENV !== "production" && Ee !== this && It(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Uc(this), Ee = t, Ut = n, this.flags &= -3;
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
    this.flags & 64 ? oi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ei(this) && this.run();
  }
  get dirty() {
    return Ei(this);
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
function Ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === co) || (e.globalVersion = co, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ei(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ee, s = Ut;
  Ee = e, Ut = !0;
  try {
    Hc(e);
    const o = e.fn(e._value);
    (t.version === 0 || dt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ee = n, Ut = s, Uc(e), e.flags &= -3;
  }
}
function dl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), _e.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      dl(r, !0);
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
  t && fe(n, t);
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
let Ut = !0;
const zc = [];
function Kt() {
  zc.push(Ut), Ut = !1;
}
function Wt() {
  const e = zc.pop();
  Ut = e === void 0 ? !0 : e;
}
function ua(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ee;
    Ee = void 0;
    try {
      t();
    } finally {
      Ee = n;
    }
  }
}
let co = 0;
class hp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ar {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, _e.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Ee || !Ut || Ee === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ee)
      n = this.activeLink = new hp(Ee, this), Ee.deps ? (n.prevDep = Ee.depsTail, Ee.depsTail.nextDep = n, Ee.depsTail = n) : Ee.deps = Ee.depsTail = n, Kc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Ee.depsTail, n.nextDep = void 0, Ee.depsTail.nextDep = n, Ee.depsTail = n, Ee.deps === n && (Ee.deps = s);
    }
    return _e.NODE_ENV !== "production" && Ee.onTrack && Ee.onTrack(
      fe(
        {
          effect: Ee
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
      if (_e.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            fe(
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
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), _e.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const sr = /* @__PURE__ */ new WeakMap(), Xn = Symbol(
  _e.NODE_ENV !== "production" ? "Object iterate" : ""
), wi = Symbol(
  _e.NODE_ENV !== "production" ? "Map keys iterate" : ""
), uo = Symbol(
  _e.NODE_ENV !== "production" ? "Array iterate" : ""
);
function qe(e, t, n) {
  if (Ut && Ee) {
    let s = sr.get(e);
    s || sr.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ar()), o.map = s, o.key = n), _e.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function tn(e, t, n, s, o, r) {
  const i = sr.get(e);
  if (!i) {
    co++;
    return;
  }
  const l = (a) => {
    a && (_e.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : a.trigger());
  };
  if (cl(), t === "clear")
    i.forEach(l);
  else {
    const a = Y(e), c = a && rl(n);
    if (a && n === "length") {
      const d = Number(s);
      i.forEach((u, p) => {
        (p === "length" || p === uo || !xt(p) && p >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), c && l(i.get(uo)), t) {
        case "add":
          a ? c && l(i.get("length")) : (l(i.get(Xn)), Jn(e) && l(i.get(wi)));
          break;
        case "delete":
          a || (l(i.get(Xn)), Jn(e) && l(i.get(wi)));
          break;
        case "set":
          Jn(e) && l(i.get(Xn));
          break;
      }
  }
  ul();
}
function mp(e, t) {
  const n = sr.get(e);
  return n && n.get(t);
}
function ps(e) {
  const t = ce(e);
  return t === e ? t : (qe(t, "iterate", uo), ot(e) ? t : t.map(Xe));
}
function Ir(e) {
  return qe(e = ce(e), "iterate", uo), e;
}
const gp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ri(this, Symbol.iterator, Xe);
  },
  concat(...e) {
    return ps(this).concat(
      ...e.map((t) => Y(t) ? ps(t) : t)
    );
  },
  entries() {
    return ri(this, "entries", (e) => (e[1] = Xe(e[1]), e));
  },
  every(e, t) {
    return ln(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ln(this, "filter", e, t, (n) => n.map(Xe), arguments);
  },
  find(e, t) {
    return ln(this, "find", e, t, Xe, arguments);
  },
  findIndex(e, t) {
    return ln(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ln(this, "findLast", e, t, Xe, arguments);
  },
  findLastIndex(e, t) {
    return ln(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ln(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ii(this, "includes", e);
  },
  indexOf(...e) {
    return ii(this, "indexOf", e);
  },
  join(e) {
    return ps(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ii(this, "lastIndexOf", e);
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
    return ps(this).toReversed();
  },
  toSorted(e) {
    return ps(this).toSorted(e);
  },
  toSpliced(...e) {
    return ps(this).toSpliced(...e);
  },
  unshift(...e) {
    return Hs(this, "unshift", e);
  },
  values() {
    return ri(this, "values", Xe);
  }
};
function ri(e, t, n) {
  const s = Ir(e), o = s[t]();
  return s !== e && !ot(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const vp = Array.prototype;
function ln(e, t, n, s, o, r) {
  const i = Ir(e), l = i !== e && !ot(e), a = i[t];
  if (a !== vp[t]) {
    const u = a.apply(e, r);
    return l ? Xe(u) : u;
  }
  let c = n;
  i !== e && (l ? c = function(u, p) {
    return n.call(this, Xe(u), p, e);
  } : n.length > 2 && (c = function(u, p) {
    return n.call(this, u, p, e);
  }));
  const d = a.call(i, c, s);
  return l && o ? o(d) : d;
}
function da(e, t, n, s) {
  const o = Ir(e);
  let r = n;
  return o !== e && (ot(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, Xe(l), a, e);
  }), o[t](r, ...s);
}
function ii(e, t, n) {
  const s = ce(e);
  qe(s, "iterate", uo);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Ss(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : o;
}
function Hs(e, t, n = []) {
  Kt(), cl();
  const s = ce(e)[t].apply(e, n);
  return ul(), Wt(), s;
}
const yp = /* @__PURE__ */ Ge("__proto__,__v_isRef,__isVue"), Wc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
);
function bp(e) {
  xt(e) || (e = String(e));
  const t = ce(this);
  return qe(t, "has", e), t.hasOwnProperty(e);
}
class Gc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? eu : Zc : r ? Qc : Xc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = Y(t);
    if (!o) {
      let a;
      if (i && (a = gp[n]))
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
    return (xt(n) ? Wc.has(n) : yp(n)) || (o || qe(t, "get", n), r) ? l : Ae(l) ? i && rl(n) ? l : l.value : me(l) ? o ? Pr(l) : Ns(l) : l;
  }
}
class Yc extends Gc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Gt(r);
      if (!ot(s) && !Gt(s) && (r = ce(r), s = ce(s)), !Y(t) && Ae(r) && !Ae(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = Y(t) && rl(n) ? Number(n) < t.length : ge(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ae(t) ? t : o
    );
    return t === ce(o) && (i ? dt(s, r) && tn(t, "set", n, s, r) : tn(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ge(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && tn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!xt(n) || !Wc.has(n)) && qe(t, "has", n), s;
  }
  ownKeys(t) {
    return qe(
      t,
      "iterate",
      Y(t) ? "length" : Xn
    ), Reflect.ownKeys(t);
  }
}
class Jc extends Gc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return _e.NODE_ENV !== "production" && It(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return _e.NODE_ENV !== "production" && It(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const _p = /* @__PURE__ */ new Yc(), Ep = /* @__PURE__ */ new Jc(), wp = /* @__PURE__ */ new Yc(!0), xp = /* @__PURE__ */ new Jc(!0), xi = (e) => e, Ao = (e) => Reflect.getPrototypeOf(e);
function Np(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ce(o), i = Jn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = o[e](...s), d = n ? xi : t ? or : Xe;
    return !t && qe(
      r,
      "iterate",
      a ? wi : Xn
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
function Io(e) {
  return function(...t) {
    if (_e.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      It(
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
      const r = this.__v_raw, i = ce(r), l = ce(o);
      e || (dt(o, l) && qe(i, "get", o), qe(i, "get", l));
      const { has: a } = Ao(i), c = t ? xi : e ? or : Xe;
      if (a.call(i, o))
        return c(r.get(o));
      if (a.call(i, l))
        return c(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && qe(ce(o), "iterate", Xn), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      return e || (dt(o, l) && qe(i, "has", o), qe(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = ce(l), c = t ? xi : e ? or : Xe;
      return !e && qe(a, "iterate", Xn), l.forEach((d, u) => o.call(r, c(d), c(u), i));
    }
  };
  return fe(
    n,
    e ? {
      add: Io("add"),
      set: Io("set"),
      delete: Io("delete"),
      clear: Io("clear")
    } : {
      add(o) {
        !t && !ot(o) && !Gt(o) && (o = ce(o));
        const r = ce(this);
        return Ao(r).has.call(r, o) || (r.add(o), tn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !ot(r) && !Gt(r) && (r = ce(r));
        const i = ce(this), { has: l, get: a } = Ao(i);
        let c = l.call(i, o);
        c ? _e.NODE_ENV !== "production" && fa(i, l, o) : (o = ce(o), c = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, r), c ? dt(r, d) && tn(i, "set", o, r, d) : tn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ce(this), { has: i, get: l } = Ao(r);
        let a = i.call(r, o);
        a ? _e.NODE_ENV !== "production" && fa(r, i, o) : (o = ce(o), a = i.call(r, o));
        const c = l ? l.call(r, o) : void 0, d = r.delete(o);
        return a && tn(r, "delete", o, void 0, c), d;
      },
      clear() {
        const o = ce(this), r = o.size !== 0, i = _e.NODE_ENV !== "production" ? Jn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return r && tn(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Np(o, e, t);
  }), n;
}
function Mr(e, t) {
  const n = Sp(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
    o,
    r
  );
}
const kp = {
  get: /* @__PURE__ */ Mr(!1, !1)
}, Cp = {
  get: /* @__PURE__ */ Mr(!1, !0)
}, Op = {
  get: /* @__PURE__ */ Mr(!0, !1)
}, Tp = {
  get: /* @__PURE__ */ Mr(!0, !0)
};
function fa(e, t, n) {
  const s = ce(n);
  if (s !== n && t.call(e, s)) {
    const o = ol(e);
    It(
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
  return Gt(e) ? e : Rr(
    e,
    !1,
    _p,
    kp,
    Xc
  );
}
function tu(e) {
  return Rr(
    e,
    !1,
    wp,
    Cp,
    Qc
  );
}
function Pr(e) {
  return Rr(
    e,
    !0,
    Ep,
    Op,
    Zc
  );
}
function Bt(e) {
  return Rr(
    e,
    !0,
    xp,
    Tp,
    eu
  );
}
function Rr(e, t, n, s, o) {
  if (!me(e))
    return _e.NODE_ENV !== "production" && It(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Dp(e);
  if (r === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return o.set(e, l), l;
}
function mn(e) {
  return Gt(e) ? mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gt(e) {
  return !!(e && e.__v_isReadonly);
}
function ot(e) {
  return !!(e && e.__v_isShallow);
}
function Ss(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function nu(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && ss(e, "__v_skip", !0), e;
}
const Xe = (e) => me(e) ? Ns(e) : e, or = (e) => me(e) ? Pr(e) : e;
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function q(e) {
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
    this.dep = new Ar(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : Xe(t), this.__v_isShallow = n;
  }
  get value() {
    return _e.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || ot(t) || Gt(t);
    t = s ? t : ce(t), dt(t, n) && (this._rawValue = t, this._value = s ? t : Xe(t), _e.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Ap(e) {
  e.dep && (_e.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function No(e) {
  return Ae(e) ? e.value : e;
}
function Ip(e) {
  return oe(e) ? e() : No(e);
}
const Mp = {
  get: (e, t, n) => t === "__v_raw" ? e : No(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ae(o) && !Ae(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function fl(e) {
  return mn(e) ? e : new Proxy(e, Mp);
}
class Pp {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ar(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ru(e) {
  return new Pp(e);
}
function Rp(e) {
  _e.NODE_ENV !== "production" && !Ss(e) && It("toRefs() expects a reactive object but received a plain one.");
  const t = Y(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = iu(e, n);
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
  return Ae(e) ? e : oe(e) ? new Fp(e) : me(e) && arguments.length > 1 ? iu(e, t, n) : q(e);
}
function iu(e, t, n) {
  const s = e[t];
  return Ae(s) ? s : new Lp(e, t, n);
}
class jp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ar(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = co - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ee !== this)
      return jc(this, !0), !0;
  }
  get value() {
    const t = _e.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return qc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : _e.NODE_ENV !== "production" && It("Write operation failed: computed value is readonly");
  }
}
function Hp(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const r = new jp(s, o, n);
  return _e.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
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
}, Mo = {}, rr = /* @__PURE__ */ new WeakMap();
let Sn;
function zp() {
  return Sn;
}
function lu(e, t = !1, n = Sn) {
  if (n) {
    let s = rr.get(n);
    s || rr.set(n, s = []), s.push(e);
  } else _e.NODE_ENV !== "production" && !t && It(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Kp(e, t, n = pe) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, c = (E) => {
    (n.onWarn || It)(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (E) => o ? E : ot(E) || o === !1 || o === 0 ? pn(E, 1) : pn(E);
  let u, p, m, g, v = !1, T = !1;
  if (Ae(e) ? (p = () => e.value, v = ot(e)) : mn(e) ? (p = () => d(e), v = !0) : Y(e) ? (T = !0, v = e.some((E) => mn(E) || ot(E)), p = () => e.map((E) => {
    if (Ae(E))
      return E.value;
    if (mn(E))
      return d(E);
    if (oe(E))
      return a ? a(E, 2) : E();
    _e.NODE_ENV !== "production" && c(E);
  })) : oe(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      Kt();
      try {
        m();
      } finally {
        Wt();
      }
    }
    const E = Sn;
    Sn = u;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Sn = E;
    }
  } : (p = $e, _e.NODE_ENV !== "production" && c(e)), t && o) {
    const E = p, V = o === !0 ? 1 / 0 : o;
    p = () => pn(E(), V);
  }
  const C = al(), y = () => {
    u.stop(), C && C.active && sl(C.effects, u);
  };
  if (r && t) {
    const E = t;
    t = (...V) => {
      E(...V), y();
    };
  }
  let h = T ? new Array(e.length).fill(Mo) : Mo;
  const S = (E) => {
    if (!(!(u.flags & 1) || !u.dirty && !E))
      if (t) {
        const V = u.run();
        if (o || v || (T ? V.some((M, $) => dt(M, h[$])) : dt(V, h))) {
          m && m();
          const M = Sn;
          Sn = u;
          try {
            const $ = [
              V,
              // pass undefined as the old value when it's changed for the first time
              h === Mo ? void 0 : T && h[0] === Mo ? [] : h,
              g
            ];
            h = V, a ? a(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            Sn = M;
          }
        }
      } else
        u.run();
  };
  return l && l(S), u = new ao(p), u.scheduler = i ? () => i(S, !1) : S, g = (E) => lu(E, !1, u), m = u.onStop = () => {
    const E = rr.get(u);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const V of E) V();
      rr.delete(u);
    }
  }, _e.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? S(!0) : h = u.run() : i ? i(S.bind(null, !0), !0) : u.run(), y.pause = u.pause.bind(u), y.resume = u.resume.bind(u), y.stop = y, y;
}
function pn(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ae(e))
    pn(e.value, t, n);
  else if (Y(e))
    for (let s = 0; s < e.length; s++)
      pn(e[s], t, n);
  else if (cs(e) || Jn(e))
    e.forEach((s) => {
      pn(s, t, n);
    });
  else if ($r(e)) {
    for (const s in e)
      pn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && pn(e[s], t, n);
  }
  return e;
}
var x = {};
const Qn = [];
function ys(e) {
  Qn.push(e);
}
function bs() {
  Qn.pop();
}
let li = !1;
function P(e, ...t) {
  if (li) return;
  li = !0, Kt();
  const n = Qn.length ? Qn[Qn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Wp();
  if (s)
    us(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${Gr(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Gp(o)), console.warn(...r);
  }
  Wt(), li = !1;
}
function Wp() {
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
function Gp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Yp(n));
  }), t;
}
function Yp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Gr(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Jp(e.props), r] : [o + r];
}
function Jp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...au(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function au(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ae(t) ? (t = au(e, ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ce(t), n ? t : [`${e}=`, t]);
}
function pl(e, t) {
  x.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? P(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && P(`${t} is NaN - the duration expression might be incorrect.`));
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
}, Lr = {
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
    Bn(o, t, n);
  }
}
function Mt(e, t, n, s) {
  if (oe(e)) {
    const o = us(e, t, n, s);
    return o && Tr(o) && o.catch((r) => {
      Bn(r, t, n);
    }), o;
  }
  if (Y(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Mt(e[r], t, n, s));
    return o;
  } else x.NODE_ENV !== "production" && P(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = x.NODE_ENV !== "production" ? Lr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Kt(), us(r, null, 10, [
        e,
        a,
        c
      ]), Wt();
      return;
    }
  }
  Qp(e, n, o, s, i);
}
function Qp(e, t, n, s = !0, o = !1) {
  if (x.NODE_ENV !== "production") {
    const r = Lr[t];
    if (n && ys(n), P(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && bs(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const ft = [];
let Xt = -1;
const _s = [];
let kn = null, gs = 0;
const cu = /* @__PURE__ */ Promise.resolve();
let ir = null;
const Zp = 100;
function Ls(e) {
  const t = ir || cu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function eh(e) {
  let t = Xt + 1, n = ft.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ft[s], r = fo(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Fr(e) {
  if (!(e.flags & 1)) {
    const t = fo(e), n = ft[ft.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fo(n) ? ft.push(e) : ft.splice(eh(t), 0, e), e.flags |= 1, uu();
  }
}
function uu() {
  ir || (ir = cu.then(du));
}
function ks(e) {
  Y(e) ? _s.push(...e) : kn && e.id === -1 ? kn.splice(gs + 1, 0, e) : e.flags & 1 || (_s.push(e), e.flags |= 1), uu();
}
function pa(e, t, n = Xt + 1) {
  for (x.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ft.length; n++) {
    const s = ft[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || x.NODE_ENV !== "production" && hl(t, s))
        continue;
      ft.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function lr(e) {
  if (_s.length) {
    const t = [...new Set(_s)].sort(
      (n, s) => fo(n) - fo(s)
    );
    if (_s.length = 0, kn) {
      kn.push(...t);
      return;
    }
    for (kn = t, x.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gs = 0; gs < kn.length; gs++) {
      const n = kn[gs];
      x.NODE_ENV !== "production" && hl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kn = null, gs = 0;
  }
}
const fo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function du(e) {
  x.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = x.NODE_ENV !== "production" ? (n) => hl(e, n) : $e;
  try {
    for (Xt = 0; Xt < ft.length; Xt++) {
      const n = ft[Xt];
      if (n && !(n.flags & 8)) {
        if (x.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), us(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Xt < ft.length; Xt++) {
      const n = ft[Xt];
      n && (n.flags &= -2);
    }
    Xt = -1, ft.length = 0, lr(e), ir = null, (ft.length || _s.length) && du(e);
  }
}
function hl(e, t) {
  const n = e.get(t) || 0;
  if (n > Zp) {
    const s = t.i, o = s && Ts(s.type);
    return Bn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let jt = !1;
const zo = /* @__PURE__ */ new Map();
x.NODE_ENV !== "production" && (xo().__VUE_HMR_RUNTIME__ = {
  createRecord: ai(fu),
  rerender: ai(sh),
  reload: ai(oh)
});
const os = /* @__PURE__ */ new Map();
function th(e) {
  const t = e.type.__hmrId;
  let n = os.get(t);
  n || (fu(t, e.type), n = os.get(t)), n.instances.add(e);
}
function nh(e) {
  os.get(e.type.__hmrId).instances.delete(e);
}
function fu(e, t) {
  return os.has(e) ? !1 : (os.set(e, {
    initialDef: ar(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ar(e) {
  return _d(e) ? e.__vccOpts : e;
}
function sh(e, t) {
  const n = os.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, ar(s.type).render = t), s.renderCache = [], jt = !0, s.update(), jt = !1;
  }));
}
function oh(e, t) {
  const n = os.get(e);
  if (!n) return;
  t = ar(t), ha(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = ar(r.type);
    let l = zo.get(i);
    l || (i !== n.initialDef && ha(i, t), zo.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Fr(() => {
      jt = !0, r.parent.update(), jt = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  ks(() => {
    zo.clear();
  });
}
function ha(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ai(e) {
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
let Lt, Ws = [], Ni = !1;
function So(e, ...t) {
  Lt ? Lt.emit(e, ...t) : Ni || Ws.push({ event: e, args: t });
}
function ml(e, t) {
  var n, s;
  Lt = e, Lt ? (Lt.enabled = !0, Ws.forEach(({ event: o, args: r }) => Lt.emit(o, ...r)), Ws = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    ml(r, t);
  }), setTimeout(() => {
    Lt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ni = !0, Ws = []);
  }, 3e3)) : (Ni = !0, Ws = []);
}
function rh(e, t) {
  So("app:init", e, t, {
    Fragment: ie,
    Text: sn,
    Comment: De,
    Static: Mn
  });
}
function ih(e) {
  So("app:unmount", e);
}
const Si = /* @__PURE__ */ gl(
  "component:added"
  /* COMPONENT_ADDED */
), pu = /* @__PURE__ */ gl(
  "component:updated"
  /* COMPONENT_UPDATED */
), lh = /* @__PURE__ */ gl(
  "component:removed"
  /* COMPONENT_REMOVED */
), ah = (e) => {
  Lt && typeof Lt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Lt.cleanupBuffer(e) && lh(e);
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
let Le = null, Br = null;
function po(e) {
  const t = Le;
  return Le = e, Br = e && e.type.__scopeId || null, t;
}
function fh(e) {
  Br = e;
}
function ph() {
  Br = null;
}
const hh = (e) => Me;
function Me(e, t = Le, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ii(-1);
    const r = po(t);
    let i;
    try {
      i = e(...o);
    } finally {
      po(r), s._d && Ii(1);
    }
    return x.NODE_ENV !== "production" && pu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function mu(e) {
  $c(e) && P("Do not use built-in directive ids as custom directive id: " + e);
}
function Ue(e, t) {
  if (Le === null)
    return x.NODE_ENV !== "production" && P("withDirectives can only be used inside render functions."), e;
  const n = Co(Le), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = pe] = t[o];
    r && (oe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && pn(i), s.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Zt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (Kt(), Mt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Wt());
  }
}
const gu = Symbol("_vte"), vu = (e) => e.__isTeleport, Zn = (e) => e && (e.disabled || e.disabled === ""), ma = (e) => e && (e.defer || e.defer === ""), ga = (e) => typeof SVGElement < "u" && e instanceof SVGElement, va = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ki = (e, t) => {
  const n = e && e.to;
  if (le(n))
    if (t) {
      const s = t(n);
      return x.NODE_ENV !== "production" && !s && !Zn(e) && P(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return x.NODE_ENV !== "production" && P(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return x.NODE_ENV !== "production" && !n && !Zn(e) && P(`Invalid Teleport target: ${n}`), n;
}, yu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, l, a, c) {
    const {
      mc: d,
      pc: u,
      pbc: p,
      o: { insert: m, querySelector: g, createText: v, createComment: T }
    } = c, C = Zn(t.props);
    let { shapeFlag: y, children: h, dynamicChildren: S } = t;
    if (x.NODE_ENV !== "production" && jt && (a = !1, S = null), e == null) {
      const E = t.el = x.NODE_ENV !== "production" ? T("teleport start") : v(""), V = t.anchor = x.NODE_ENV !== "production" ? T("teleport end") : v("");
      m(E, n, s), m(V, n, s);
      const M = (b, k) => {
        y & 16 && (o && o.isCE && (o.ce._teleportTarget = b), d(
          h,
          b,
          k,
          o,
          r,
          i,
          l,
          a
        ));
      }, $ = () => {
        const b = t.target = ki(t.props, g), k = bu(b, t, v, m);
        b ? (i !== "svg" && ga(b) ? i = "svg" : i !== "mathml" && va(b) && (i = "mathml"), C || (M(b, k), Ko(t, !1))) : x.NODE_ENV !== "production" && !C && P(
          "Invalid Teleport target on mount:",
          b,
          `(${typeof b})`
        );
      };
      C && (M(n, V), Ko(t, !0)), ma(t.props) ? (t.el.__isMounted = !1, He(() => {
        $(), delete t.el.__isMounted;
      }, r)) : $();
    } else {
      if (ma(t.props) && e.el.__isMounted === !1) {
        He(() => {
          yu.process(
            e,
            t,
            n,
            s,
            o,
            r,
            i,
            l,
            a,
            c
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const E = t.anchor = e.anchor, V = t.target = e.target, M = t.targetAnchor = e.targetAnchor, $ = Zn(e.props), b = $ ? n : V, k = $ ? E : M;
      if (i === "svg" || ga(V) ? i = "svg" : (i === "mathml" || va(V)) && (i = "mathml"), S ? (p(
        e.dynamicChildren,
        S,
        b,
        o,
        r,
        i,
        l
      ), so(e, t, x.NODE_ENV === "production")) : a || u(
        e,
        t,
        b,
        k,
        o,
        r,
        i,
        l,
        !1
      ), C)
        $ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Po(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const A = t.target = ki(
          t.props,
          g
        );
        A ? Po(
          t,
          A,
          null,
          c,
          0
        ) : x.NODE_ENV !== "production" && P(
          "Invalid Teleport target on update:",
          V,
          `(${typeof V})`
        );
      } else $ && Po(
        t,
        V,
        M,
        c,
        1
      );
      Ko(t, C);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, r) {
    const {
      shapeFlag: i,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: d,
      target: u,
      props: p
    } = e;
    if (u && (o(c), o(d)), r && o(a), i & 16) {
      const m = r || !Zn(p);
      for (let g = 0; g < l.length; g++) {
        const v = l[g];
        s(
          v,
          t,
          n,
          m,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: Po,
  hydrate: mh
};
function Po(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: c, props: d } = e, u = r === 2;
  if (u && s(i, t, n), (!u || Zn(d)) && a & 16)
    for (let p = 0; p < c.length; p++)
      o(
        c[p],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function mh(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: c, createText: d }
}, u) {
  const p = t.target = ki(
    t.props,
    a
  );
  if (p) {
    const m = Zn(t.props), g = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = u(
          i(e),
          t,
          l(e),
          n,
          s,
          o,
          r
        ), t.targetStart = g, t.targetAnchor = g && i(g);
      else {
        t.anchor = i(e);
        let v = g;
        for (; v; ) {
          if (v && v.nodeType === 8) {
            if (v.data === "teleport start anchor")
              t.targetStart = v;
            else if (v.data === "teleport anchor") {
              t.targetAnchor = v, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          v = i(v);
        }
        t.targetAnchor || bu(p, t, d, c), u(
          g && i(g),
          t,
          p,
          n,
          s,
          o,
          r
        );
      }
    Ko(t, m);
  }
  return t.anchor && i(t.anchor);
}
const bn = yu;
function Ko(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function bu(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[gu] = r, e && (s(o, e), s(r, e)), r;
}
const Cn = Symbol("_leaveCb"), Ro = Symbol("_enterCb");
function vl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Be(() => {
    e.isMounted = !0;
  }), qr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Dt = [Function, Array], yl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Dt,
  onEnter: Dt,
  onAfterEnter: Dt,
  onEnterCancelled: Dt,
  // leave
  onBeforeLeave: Dt,
  onLeave: Dt,
  onAfterLeave: Dt,
  onLeaveCancelled: Dt,
  // appear
  onBeforeAppear: Dt,
  onAppear: Dt,
  onAfterAppear: Dt,
  onAppearCancelled: Dt
}, _u = (e) => {
  const t = e.subTree;
  return t.component ? _u(t.component) : t;
}, gh = {
  name: "BaseTransition",
  props: yl,
  setup(e, { slots: t }) {
    const n = at(), s = vl();
    return () => {
      const o = t.default && jr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = Eu(o), i = ce(e), { mode: l } = i;
      if (x.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && P(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ci(r);
      const a = ya(r);
      if (!a)
        return ci(r);
      let c = Cs(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      a.type !== De && yn(a, c);
      let d = n.subTree && ya(n.subTree);
      if (d && d.type !== De && !Ft(a, d) && _u(n).type !== De) {
        let u = Cs(
          d,
          i,
          s,
          n
        );
        if (yn(d, u), l === "out-in" && a.type !== De)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, d = void 0;
          }, ci(r);
        l === "in-out" && a.type !== De ? u.delayLeave = (p, m, g) => {
          const v = xu(
            s,
            d
          );
          v[String(d.key)] = d, p[Cn] = () => {
            m(), p[Cn] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            g(), delete c.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return r;
    };
  }
};
function Eu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== De) {
        if (x.NODE_ENV !== "production" && n) {
          P(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, x.NODE_ENV === "production") break;
      }
  }
  return t;
}
const wu = gh;
function xu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Cs(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: g,
    onLeaveCancelled: v,
    onBeforeAppear: T,
    onAppear: C,
    onAfterAppear: y,
    onAppearCancelled: h
  } = t, S = String(e.key), E = xu(n, e), V = (b, k) => {
    b && Mt(
      b,
      s,
      9,
      k
    );
  }, M = (b, k) => {
    const A = k[1];
    V(b, k), Y(b) ? b.every((D) => D.length <= 1) && A() : b.length <= 1 && A();
  }, $ = {
    mode: i,
    persisted: l,
    beforeEnter(b) {
      let k = a;
      if (!n.isMounted)
        if (r)
          k = T || a;
        else
          return;
      b[Cn] && b[Cn](
        !0
        /* cancelled */
      );
      const A = E[S];
      A && Ft(e, A) && A.el[Cn] && A.el[Cn](), V(k, [b]);
    },
    enter(b) {
      let k = c, A = d, D = u;
      if (!n.isMounted)
        if (r)
          k = C || c, A = y || d, D = h || u;
        else
          return;
      let U = !1;
      const W = b[Ro] = (G) => {
        U || (U = !0, G ? V(D, [b]) : V(A, [b]), $.delayedLeave && $.delayedLeave(), b[Ro] = void 0);
      };
      k ? M(k, [b, W]) : W();
    },
    leave(b, k) {
      const A = String(e.key);
      if (b[Ro] && b[Ro](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return k();
      V(p, [b]);
      let D = !1;
      const U = b[Cn] = (W) => {
        D || (D = !0, k(), W ? V(v, [b]) : V(g, [b]), b[Cn] = void 0, E[A] === e && delete E[A]);
      };
      E[A] = e, m ? M(m, [b, U]) : U();
    },
    clone(b) {
      const k = Cs(
        b,
        t,
        n,
        s,
        o
      );
      return o && o(k), k;
    }
  };
  return $;
}
function ci(e) {
  if (Fs(e))
    return e = Pt(e), e.children = null, e;
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
function yn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, yn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function jr(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ie ? (i.patchFlag & 128 && o++, s = s.concat(
      jr(i.children, t, l)
    )) : (t || i.type !== De) && s.push(l != null ? Pt(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bl(e, t) {
  return oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function vh() {
  const e = at();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (x.NODE_ENV !== "production" && P(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function _l(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Nu = /* @__PURE__ */ new WeakSet();
function yh(e) {
  const t = at(), n = su(null);
  if (t) {
    const o = t.refs === pe ? t.refs = {} : t.refs;
    let r;
    x.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? P(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else x.NODE_ENV !== "production" && P(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = x.NODE_ENV !== "production" ? Pr(n) : n;
  return x.NODE_ENV !== "production" && Nu.add(s), s;
}
function Es(e, t, n, s, o = !1) {
  if (Y(e)) {
    e.forEach(
      (g, v) => Es(
        g,
        t && (Y(t) ? t[v] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (In(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Es(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Co(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (x.NODE_ENV !== "production" && !l) {
    P(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, p = ce(u), m = u === pe ? () => !1 : (g) => x.NODE_ENV !== "production" && (ge(p, g) && !Ae(p[g]) && P(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), Nu.has(p[g])) ? !1 : ge(p, g);
  if (c != null && c !== a && (le(c) ? (d[c] = null, m(c) && (u[c] = null)) : Ae(c) && (c.value = null)), oe(a))
    us(a, l, 12, [i, d]);
  else {
    const g = le(a), v = Ae(a);
    if (g || v) {
      const T = () => {
        if (e.f) {
          const C = g ? m(a) ? u[a] : d[a] : a.value;
          o ? Y(C) && sl(C, r) : Y(C) ? C.includes(r) || C.push(r) : g ? (d[a] = [r], m(a) && (u[a] = d[a])) : (a.value = [r], e.k && (d[e.k] = a.value));
        } else g ? (d[a] = i, m(a) && (u[a] = i)) : v ? (a.value = i, e.k && (d[e.k] = i)) : x.NODE_ENV !== "production" && P("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (T.id = -1, He(T, n)) : T();
    } else x.NODE_ENV !== "production" && P("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ba = !1;
const Hn = () => {
  ba || (console.error("Hydration completed but contains mismatches."), ba = !0);
}, bh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", _h = (e) => e.namespaceURI.includes("MathML"), Lo = (e) => {
  if (e.nodeType === 1) {
    if (bh(e)) return "svg";
    if (_h(e)) return "mathml";
  }
}, Wn = (e) => e.nodeType === 8;
function Eh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: o,
      nextSibling: r,
      parentNode: i,
      remove: l,
      insert: a,
      createComment: c
    }
  } = e, d = (h, S) => {
    if (!S.hasChildNodes()) {
      x.NODE_ENV !== "production" && P(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, h, S), lr(), S._vnode = h;
      return;
    }
    u(S.firstChild, h, null, null, null), lr(), S._vnode = h;
  }, u = (h, S, E, V, M, $ = !1) => {
    $ = $ || !!S.dynamicChildren;
    const b = Wn(h) && h.data === "[", k = () => v(
      h,
      S,
      E,
      V,
      M,
      b
    ), { type: A, ref: D, shapeFlag: U, patchFlag: W } = S;
    let G = h.nodeType;
    S.el = h, x.NODE_ENV !== "production" && (ss(h, "__vnode", S, !0), ss(h, "__vueParentComponent", E, !0)), W === -2 && ($ = !1, S.dynamicChildren = null);
    let ee = null;
    switch (A) {
      case sn:
        G !== 3 ? S.children === "" ? (a(S.el = o(""), i(h), h), ee = h) : ee = k() : (h.data !== S.children && (x.NODE_ENV !== "production" && P(
          "Hydration text mismatch in",
          h.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            h.data
          )}
  - expected on client: ${JSON.stringify(S.children)}`
        ), Hn(), h.data = S.children), ee = r(h));
        break;
      case De:
        y(h) ? (ee = r(h), C(
          S.el = h.content.firstChild,
          h,
          E
        )) : G !== 8 || b ? ee = k() : ee = r(h);
        break;
      case Mn:
        if (b && (h = r(h), G = h.nodeType), G === 1 || G === 3) {
          ee = h;
          const se = !S.children.length;
          for (let te = 0; te < S.staticCount; te++)
            se && (S.children += ee.nodeType === 1 ? ee.outerHTML : ee.data), te === S.staticCount - 1 && (S.anchor = ee), ee = r(ee);
          return b ? r(ee) : ee;
        } else
          k();
        break;
      case ie:
        b ? ee = g(
          h,
          S,
          E,
          V,
          M,
          $
        ) : ee = k();
        break;
      default:
        if (U & 1)
          (G !== 1 || S.type.toLowerCase() !== h.tagName.toLowerCase()) && !y(h) ? ee = k() : ee = p(
            h,
            S,
            E,
            V,
            M,
            $
          );
        else if (U & 6) {
          S.slotScopeIds = M;
          const se = i(h);
          if (b ? ee = T(h) : Wn(h) && h.data === "teleport start" ? ee = T(h, h.data, "teleport end") : ee = r(h), t(
            S,
            se,
            null,
            E,
            V,
            Lo(se),
            $
          ), In(S) && !S.type.__asyncResolved) {
            let te;
            b ? (te = ue(ie), te.anchor = ee ? ee.previousSibling : se.lastChild) : te = h.nodeType === 3 ? Fe("") : ue("div"), te.el = h, S.component.subTree = te;
          }
        } else U & 64 ? G !== 8 ? ee = k() : ee = S.type.hydrate(
          h,
          S,
          E,
          V,
          M,
          $,
          e,
          m
        ) : U & 128 ? ee = S.type.hydrate(
          h,
          S,
          E,
          V,
          Lo(i(h)),
          M,
          $,
          e,
          u
        ) : x.NODE_ENV !== "production" && P("Invalid HostVNode type:", A, `(${typeof A})`);
    }
    return D != null && Es(D, null, V, S), ee;
  }, p = (h, S, E, V, M, $) => {
    $ = $ || !!S.dynamicChildren;
    const { type: b, props: k, patchFlag: A, shapeFlag: D, dirs: U, transition: W } = S, G = b === "input" || b === "option";
    if (x.NODE_ENV !== "production" || G || A !== -1) {
      U && Zt(S, null, E, "created");
      let ee = !1;
      if (y(h)) {
        ee = Ju(
          null,
          // no need check parentSuspense in hydration
          W
        ) && E && E.vnode.props && E.vnode.props.appear;
        const te = h.content.firstChild;
        if (ee) {
          const we = te.getAttribute("class");
          we && (te.$cls = we), W.beforeEnter(te);
        }
        C(te, h, E), S.el = h = te;
      }
      if (D & 16 && // skip if element has innerHTML / textContent
      !(k && (k.innerHTML || k.textContent))) {
        let te = m(
          h.firstChild,
          S,
          h,
          E,
          V,
          M,
          $
        ), we = !1;
        for (; te; ) {
          Gs(
            h,
            1
            /* CHILDREN */
          ) || (x.NODE_ENV !== "production" && !we && (P(
            "Hydration children mismatch on",
            h,
            `
Server rendered element contains more child nodes than client vdom.`
          ), we = !0), Hn());
          const mt = te;
          te = te.nextSibling, l(mt);
        }
      } else if (D & 8) {
        let te = S.children;
        te[0] === `
` && (h.tagName === "PRE" || h.tagName === "TEXTAREA") && (te = te.slice(1)), h.textContent !== te && (Gs(
          h,
          0
          /* TEXT */
        ) || (x.NODE_ENV !== "production" && P(
          "Hydration text content mismatch on",
          h,
          `
  - rendered on server: ${h.textContent}
  - expected on client: ${S.children}`
        ), Hn()), h.textContent = S.children);
      }
      if (k) {
        if (x.NODE_ENV !== "production" || G || !$ || A & 48) {
          const te = h.tagName.includes("-");
          for (const we in k)
            x.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(U && U.some((mt) => mt.dir.created)) && wh(h, we, k[we], S, E) && Hn(), (G && (we.endsWith("value") || we === "indeterminate") || vn(we) && !An(we) || // force hydrate v-bind with .prop modifiers
            we[0] === "." || te) && s(h, we, null, k[we], void 0, E);
        } else if (k.onClick)
          s(
            h,
            "onClick",
            null,
            k.onClick,
            void 0,
            E
          );
        else if (A & 4 && mn(k.style))
          for (const te in k.style) k.style[te];
      }
      let se;
      (se = k && k.onVnodeBeforeMount) && bt(se, E, S), U && Zt(S, null, E, "beforeMount"), ((se = k && k.onVnodeMounted) || U || ee) && id(() => {
        se && bt(se, E, S), ee && W.enter(h), U && Zt(S, null, E, "mounted");
      }, V);
    }
    return h.nextSibling;
  }, m = (h, S, E, V, M, $, b) => {
    b = b || !!S.dynamicChildren;
    const k = S.children, A = k.length;
    let D = !1;
    for (let U = 0; U < A; U++) {
      const W = b ? k[U] : k[U] = pt(k[U]), G = W.type === sn;
      h ? (G && !b && U + 1 < A && pt(k[U + 1]).type === sn && (a(
        o(
          h.data.slice(W.children.length)
        ),
        E,
        r(h)
      ), h.data = W.children), h = u(
        h,
        W,
        V,
        M,
        $,
        b
      )) : G && !W.children ? a(W.el = o(""), E) : (Gs(
        E,
        1
        /* CHILDREN */
      ) || (x.NODE_ENV !== "production" && !D && (P(
        "Hydration children mismatch on",
        E,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), D = !0), Hn()), n(
        null,
        W,
        E,
        null,
        V,
        M,
        Lo(E),
        $
      ));
    }
    return h;
  }, g = (h, S, E, V, M, $) => {
    const { slotScopeIds: b } = S;
    b && (M = M ? M.concat(b) : b);
    const k = i(h), A = m(
      r(h),
      S,
      k,
      E,
      V,
      M,
      $
    );
    return A && Wn(A) && A.data === "]" ? r(S.anchor = A) : (Hn(), a(S.anchor = c("]"), k, A), A);
  }, v = (h, S, E, V, M, $) => {
    if (Gs(
      h.parentElement,
      1
      /* CHILDREN */
    ) || (x.NODE_ENV !== "production" && P(
      `Hydration node mismatch:
- rendered on server:`,
      h,
      h.nodeType === 3 ? "(text)" : Wn(h) && h.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      S.type
    ), Hn()), S.el = null, $) {
      const A = T(h);
      for (; ; ) {
        const D = r(h);
        if (D && D !== A)
          l(D);
        else
          break;
      }
    }
    const b = r(h), k = i(h);
    return l(h), n(
      null,
      S,
      k,
      b,
      E,
      V,
      Lo(k),
      M
    ), E && (E.vnode.el = S.el, Wr(E, S.el)), b;
  }, T = (h, S = "[", E = "]") => {
    let V = 0;
    for (; h; )
      if (h = r(h), h && Wn(h) && (h.data === S && V++, h.data === E)) {
        if (V === 0)
          return r(h);
        V--;
      }
    return h;
  }, C = (h, S, E) => {
    const V = S.parentNode;
    V && V.replaceChild(h, S);
    let M = E;
    for (; M; )
      M.vnode.el === S && (M.vnode.el = M.subTree.el = h), M = M.parent;
  }, y = (h) => h.nodeType === 1 && h.tagName === "TEMPLATE";
  return [d, u];
}
function wh(e, t, n, s, o) {
  let r, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = ke(n), xh(_a(l || ""), _a(a)) || (r = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : Jf(ht(n));
    const c = Ea(l), d = Ea(a);
    if (s.dirs)
      for (const { dir: u, value: p } of s.dirs)
        u.name === "show" && !p && d.set("display", "none");
    o && Su(o, s, d), Nh(c, d) || (r = 3, i = "style");
  } else (e instanceof SVGElement && rp(t) || e instanceof HTMLElement && (ca(t) || op(t))) && (ca(t) ? (l = e.hasAttribute(t), a = il(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = ip(n) ? String(n) : !1), l !== a && (r = 4, i = t));
  if (r != null && !Gs(e, r)) {
    const c = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, d = `Hydration ${ku[r]} mismatch on`, u = `
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
function xh(e, t) {
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
function Nh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function Su(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ie && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const r in o) {
      const i = Lc(o[r]);
      n.set(`--${ap(r)}`, i);
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
const Sh = xo().requestIdleCallback || ((e) => setTimeout(e, 1)), kh = xo().cancelIdleCallback || ((e) => clearTimeout(e)), Ch = (e = 1e4) => (t) => {
  const n = Sh(t, { timeout: e });
  return () => kh(n);
};
function Oh(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: r, innerWidth: i } = window;
  return (t > 0 && t < r || s > 0 && s < r) && (n > 0 && n < i || o > 0 && o < i);
}
const Th = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const r of o)
      if (r.isIntersecting) {
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
  le(e) && (e = [e]);
  let s = !1;
  const o = (i) => {
    s || (s = !0, r(), t(), i.target.dispatchEvent(new i.constructor(i.type, i)));
  }, r = () => {
    n((i) => {
      for (const l of e)
        i.removeEventListener(l, o);
    });
  };
  return n((i) => {
    for (const l of e)
      i.addEventListener(l, o, { once: !0 });
  }), r;
};
function Vh(e, t) {
  if (Wn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (Wn(s))
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
function Ah(e) {
  oe(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    hydrate: r,
    timeout: i,
    // undefined = never times out
    suspensible: l = !0,
    onError: a
  } = e;
  let c = null, d, u = 0;
  const p = () => (u++, c = null, m()), m = () => {
    let g;
    return c || (g = c = t().catch((v) => {
      if (v = v instanceof Error ? v : new Error(String(v)), a)
        return new Promise((T, C) => {
          a(v, () => T(p()), () => C(v), u + 1);
        });
      throw v;
    }).then((v) => {
      if (g !== c && c)
        return c;
      if (x.NODE_ENV !== "production" && !v && P(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), v && (v.__esModule || v[Symbol.toStringTag] === "Module") && (v = v.default), x.NODE_ENV !== "production" && v && !me(v) && !oe(v))
        throw new Error(`Invalid async component load result: ${v}`);
      return d = v, v;
    }));
  };
  return /* @__PURE__ */ bl({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(g, v, T) {
      let C = !1;
      (v.bu || (v.bu = [])).push(() => C = !0);
      const y = () => {
        if (C) {
          x.NODE_ENV !== "production" && P(
            `Skipping lazy hydration for component '${Ts(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        T();
      }, h = r ? () => {
        const S = r(
          y,
          (E) => Vh(g, E)
        );
        S && (v.bum || (v.bum = [])).push(S);
      } : y;
      d ? h() : m().then(() => !v.isUnmounted && h());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const g = Ke;
      if (_l(g), d)
        return () => ui(d, g);
      const v = (h) => {
        c = null, Bn(
          h,
          g,
          13,
          !s
        );
      };
      if (l && g.suspense || Os)
        return m().then((h) => () => ui(h, g)).catch((h) => (v(h), () => s ? ue(s, {
          error: h
        }) : null));
      const T = q(!1), C = q(), y = q(!!o);
      return o && setTimeout(() => {
        y.value = !1;
      }, o), i != null && setTimeout(() => {
        if (!T.value && !C.value) {
          const h = new Error(
            `Async component timed out after ${i}ms.`
          );
          v(h), C.value = h;
        }
      }, i), m().then(() => {
        T.value = !0, g.parent && Fs(g.parent.vnode) && g.parent.update();
      }).catch((h) => {
        v(h), C.value = h;
      }), () => {
        if (T.value && d)
          return ui(d, g);
        if (C.value && s)
          return ue(s, {
            error: C.value
          });
        if (n && !y.value)
          return ue(n);
      };
    }
  });
}
function ui(e, t) {
  const { ref: n, props: s, children: o, ce: r } = t.vnode, i = ue(e, s, o);
  return i.ref = n, i.ce = r, delete t.vnode.ce, i;
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
    const n = at(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const y = t.default && t.default();
        return y && y.length === 1 ? y[0] : y;
      };
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let i = null;
    x.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: d,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (y, h, S, E, V) => {
      const M = y.component;
      c(y, h, S, 0, l), a(
        M.vnode,
        y,
        h,
        S,
        M,
        l,
        E,
        y.slotScopeIds,
        V
      ), He(() => {
        M.isDeactivated = !1, M.a && $n(M.a);
        const $ = y.props && y.props.onVnodeMounted;
        $ && bt($, M.parent, y);
      }, l), x.NODE_ENV !== "production" && Si(M);
    }, s.deactivate = (y) => {
      const h = y.component;
      fr(h.m), fr(h.a), c(y, p, null, 1, l), He(() => {
        h.da && $n(h.da);
        const S = y.props && y.props.onVnodeUnmounted;
        S && bt(S, h.parent, y), h.isDeactivated = !0;
      }, l), x.NODE_ENV !== "production" && Si(h), x.NODE_ENV !== "production" && (h.__keepAliveStorageContainer = p);
    };
    function m(y) {
      di(y), d(y, n, l, !0);
    }
    function g(y) {
      o.forEach((h, S) => {
        const E = Ts(h.type);
        E && !y(E) && v(S);
      });
    }
    function v(y) {
      const h = o.get(y);
      h && (!i || !Ft(h, i)) ? m(h) : i && di(i), o.delete(y), r.delete(y);
    }
    nn(
      () => [e.include, e.exclude],
      ([y, h]) => {
        y && g((S) => Ys(y, S)), h && g((S) => !Ys(h, S));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let T = null;
    const C = () => {
      T != null && (hr(n.subTree.type) ? He(() => {
        o.set(T, Fo(n.subTree));
      }, n.subTree.suspense) : o.set(T, Fo(n.subTree)));
    };
    return Be(C), Ur(C), qr(() => {
      o.forEach((y) => {
        const { subTree: h, suspense: S } = n, E = Fo(h);
        if (y.type === E.type && y.key === E.key) {
          di(E);
          const V = E.component.da;
          V && He(V, S);
          return;
        }
        m(y);
      });
    }), () => {
      if (T = null, !t.default)
        return i = null;
      const y = t.default(), h = y[0];
      if (y.length > 1)
        return x.NODE_ENV !== "production" && P("KeepAlive should contain exactly one component child."), i = null, y;
      if (!rn(h) || !(h.shapeFlag & 4) && !(h.shapeFlag & 128))
        return i = null, h;
      let S = Fo(h);
      if (S.type === De)
        return i = null, S;
      const E = S.type, V = Ts(
        In(S) ? S.type.__asyncResolved || {} : E
      ), { include: M, exclude: $, max: b } = e;
      if (M && (!V || !Ys(M, V)) || $ && V && Ys($, V))
        return S.shapeFlag &= -257, i = S, h;
      const k = S.key == null ? E : S.key, A = o.get(k);
      return S.el && (S = Pt(S), h.shapeFlag & 128 && (h.ssContent = S)), T = k, A ? (S.el = A.el, S.component = A.component, S.transition && yn(S, S.transition), S.shapeFlag |= 512, r.delete(k), r.add(k)) : (r.add(k), b && r.size > parseInt(b, 10) && v(r.values().next().value)), S.shapeFlag |= 256, i = S, hr(h.type) ? h : S;
    };
  }
}, Mh = Ih;
function Ys(e, t) {
  return Y(e) ? e.some((n) => Ys(n, t)) : le(e) ? e.split(",").includes(t) : Ff(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Cu(e, t) {
  Tu(e, "a", t);
}
function Ou(e, t) {
  Tu(e, "da", t);
}
function Tu(e, t, n = Ke) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Hr(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Fs(o.parent.vnode) && Ph(s, t, n, o), o = o.parent;
  }
}
function Ph(e, t, n, s) {
  const o = Hr(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ct(() => {
    sl(s[t], o);
  }, n);
}
function di(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Fo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Hr(e, t, n = Ke, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Kt();
      const l = ls(n), a = Mt(t, n, e, i);
      return l(), Wt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (x.NODE_ENV !== "production") {
    const o = en(Lr[e].replace(/ hook$/, ""));
    P(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _n = (e) => (t, n = Ke) => {
  (!Os || e === "sp") && Hr(e, (...s) => t(...s), n);
}, $u = _n("bm"), Be = _n("m"), El = _n(
  "bu"
), Ur = _n("u"), qr = _n(
  "bum"
), Ct = _n("um"), Du = _n(
  "sp"
), Vu = _n("rtg"), Au = _n("rtc");
function Iu(e, t = Ke) {
  Hr("ec", e, t);
}
const cr = "components", Rh = "directives";
function Lh(e, t) {
  return Nl(cr, e, !0, t) || e;
}
const wl = Symbol.for("v-ndc");
function xl(e) {
  return le(e) ? Nl(cr, e, !1) || e : e || wl;
}
function Fh(e) {
  return Nl(Rh, e);
}
function Nl(e, t, n = !0, s = !1) {
  const o = Le || Ke;
  if (o) {
    const r = o.type;
    if (e === cr) {
      const l = Ts(
        r,
        !1
      );
      if (l && (l === t || l === Ce(t) || l === on(Ce(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      xa(o[e] || r[e], t) || // global registration
      xa(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (x.NODE_ENV !== "production" && n && !i) {
      const l = e === cr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      P(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else x.NODE_ENV !== "production" && P(
    `resolve${on(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function xa(e, t) {
  return e && (e[t] || e[Ce(t)] || e[on(Ce(t))]);
}
function be(e, t, n, s) {
  let o;
  const r = n && n[s], i = Y(e);
  if (i || le(e)) {
    const l = i && mn(e);
    let a = !1, c = !1;
    l && (a = !ot(e), c = Gt(e), e = Ir(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? c ? or(Xe(e[d])) : Xe(e[d]) : e[d],
        d,
        void 0,
        r && r[d]
      );
  } else if (typeof e == "number") {
    x.NODE_ENV !== "production" && !Number.isInteger(e) && P(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r && r[l]);
  } else if (me(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, r && r[a])
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, r && r[a]);
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
      const r = s.fn(...o);
      return r && (r.key = s.key), r;
    } : s.fn);
  }
  return e;
}
function jn(e, t, n = {}, s, o) {
  if (Le.ce || Le.parent && In(Le.parent) && Le.parent.ce)
    return t !== "default" && (n.name = t), w(), lt(
      ie,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  x.NODE_ENV !== "production" && r && r.length > 1 && (P(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), w();
  const i = r && Sl(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = lt(
    ie,
    {
      key: (l && !xt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a;
}
function Sl(e) {
  return e.some((t) => rn(t) ? !(t.type === De || t.type === ie && !Sl(t.children)) : !0) ? e : null;
}
function jh(e, t) {
  const n = {};
  if (x.NODE_ENV !== "production" && !me(e))
    return P("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : en(s)] = e[s];
  return n;
}
const Ci = (e) => e ? md(e) ? Co(e) : Ci(e.parent) : null, es = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => x.NODE_ENV !== "production" ? Bt(e.props) : e.props,
    $attrs: (e) => x.NODE_ENV !== "production" ? Bt(e.attrs) : e.attrs,
    $slots: (e) => x.NODE_ENV !== "production" ? Bt(e.slots) : e.slots,
    $refs: (e) => x.NODE_ENV !== "production" ? Bt(e.refs) : e.refs,
    $parent: (e) => Ci(e.parent),
    $root: (e) => Ci(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ls.bind(e.proxy)),
    $watch: (e) => Dm.bind(e)
  })
), kl = (e) => e === "_" || e === "$", fi = (e, t) => e !== pe && !e.__isScriptSetup && ge(e, t), to = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (x.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (fi(s, t))
          return i[t] = 1, s[t];
        if (o !== pe && ge(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && ge(c, t)
        )
          return i[t] = 3, r[t];
        if (n !== pe && ge(n, t))
          return i[t] = 4, n[t];
        Oi && (i[t] = 0);
      }
    }
    const d = es[t];
    let u, p;
    if (d)
      return t === "$attrs" ? (qe(e.attrs, "get", ""), x.NODE_ENV !== "production" && pr()) : x.NODE_ENV !== "production" && t === "$slots" && qe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== pe && ge(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, ge(p, t)
    )
      return p[t];
    x.NODE_ENV !== "production" && Le && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== pe && kl(t[0]) && ge(o, t) ? P(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Le && P(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return fi(o, t) ? (o[t] = n, !0) : x.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (P(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (x.NODE_ENV !== "production" && P(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x.NODE_ENV !== "production" && P(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (x.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== pe && ge(e, i) || fi(t, i) || (l = r[0]) && ge(l, i) || ge(s, i) || ge(es, i) || ge(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
x.NODE_ENV !== "production" && (to.ownKeys = (e) => (P(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Hh = /* @__PURE__ */ fe({}, to, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return to.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !zf(t);
    return x.NODE_ENV !== "production" && !n && to.has(e, t) && P(
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
  }), Object.keys(es).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => es[n](e),
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
const ds = (e) => P(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Kh() {
  return x.NODE_ENV !== "production" && ds("defineProps"), null;
}
function Wh() {
  return x.NODE_ENV !== "production" && ds("defineEmits"), null;
}
function Gh(e) {
  x.NODE_ENV !== "production" && ds("defineExpose");
}
function Yh(e) {
  x.NODE_ENV !== "production" && ds("defineOptions");
}
function Jh() {
  return x.NODE_ENV !== "production" && ds("defineSlots"), null;
}
function Xh() {
  x.NODE_ENV !== "production" && ds("defineModel");
}
function Qh(e, t) {
  return x.NODE_ENV !== "production" && ds("withDefaults"), null;
}
function Zh() {
  return Mu("useSlots").slots;
}
function em() {
  return Mu("useAttrs").attrs;
}
function Mu(e) {
  const t = at();
  return x.NODE_ENV !== "production" && !t && P(`${e}() called without active instance.`), t.setupContext || (t.setupContext = bd(t));
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
    o ? Y(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : x.NODE_ENV !== "production" && P(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function nm(e, t) {
  return !e || !t ? e || t : Y(e) && Y(t) ? e.concat(t) : fe({}, ho(e), ho(t));
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
  const t = at();
  x.NODE_ENV !== "production" && !t && P(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Ri(), Tr(n) && (n = n.catch((s) => {
    throw ls(t), s;
  })), [n, () => ls(t)];
}
function rm() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? P(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Oi = !0;
function im(e) {
  const t = Cl(e), n = e.proxy, s = e.ctx;
  Oi = !1, t.beforeCreate && Na(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: p,
    beforeUpdate: m,
    updated: g,
    activated: v,
    deactivated: T,
    beforeDestroy: C,
    beforeUnmount: y,
    destroyed: h,
    unmounted: S,
    render: E,
    renderTracked: V,
    renderTriggered: M,
    errorCaptured: $,
    serverPrefetch: b,
    // public API
    expose: k,
    inheritAttrs: A,
    // assets
    components: D,
    directives: U,
    filters: W
  } = t, G = x.NODE_ENV !== "production" ? rm() : null;
  if (x.NODE_ENV !== "production") {
    const [se] = e.propsOptions;
    if (se)
      for (const te in se)
        G("Props", te);
  }
  if (c && lm(c, s, G), i)
    for (const se in i) {
      const te = i[se];
      oe(te) ? (x.NODE_ENV !== "production" ? Object.defineProperty(s, se, {
        value: te.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[se] = te.bind(n), x.NODE_ENV !== "production" && G("Methods", se)) : x.NODE_ENV !== "production" && P(
        `Method "${se}" has type "${typeof te}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    x.NODE_ENV !== "production" && !oe(o) && P(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const se = o.call(n, n);
    if (x.NODE_ENV !== "production" && Tr(se) && P(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(se))
      x.NODE_ENV !== "production" && P("data() should return an object.");
    else if (e.data = Ns(se), x.NODE_ENV !== "production")
      for (const te in se)
        G("Data", te), kl(te[0]) || Object.defineProperty(s, te, {
          configurable: !0,
          enumerable: !0,
          get: () => se[te],
          set: $e
        });
  }
  if (Oi = !0, r)
    for (const se in r) {
      const te = r[se], we = oe(te) ? te.bind(n, n) : oe(te.get) ? te.get.bind(n, n) : $e;
      x.NODE_ENV !== "production" && we === $e && P(`Computed property "${se}" has no getter.`);
      const mt = !oe(te) && oe(te.set) ? te.set.bind(n) : x.NODE_ENV !== "production" ? () => {
        P(
          `Write operation failed: computed property "${se}" is readonly.`
        );
      } : $e, Tt = Z({
        get: we,
        set: mt
      });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: ($t) => Tt.value = $t
      }), x.NODE_ENV !== "production" && G("Computed", se);
    }
  if (l)
    for (const se in l)
      Pu(l[se], s, n, se);
  if (a) {
    const se = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(se).forEach((te) => {
      Lu(te, se[te]);
    });
  }
  d && Na(d, e, "c");
  function ee(se, te) {
    Y(te) ? te.forEach((we) => se(we.bind(n))) : te && se(te.bind(n));
  }
  if (ee($u, u), ee(Be, p), ee(El, m), ee(Ur, g), ee(Cu, v), ee(Ou, T), ee(Iu, $), ee(Au, V), ee(Vu, M), ee(qr, y), ee(Ct, S), ee(Du, b), Y(k))
    if (k.length) {
      const se = e.exposed || (e.exposed = {});
      k.forEach((te) => {
        Object.defineProperty(se, te, {
          get: () => n[te],
          set: (we) => n[te] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === $e && (e.render = E), A != null && (e.inheritAttrs = A), D && (e.components = D), U && (e.directives = U), b && _l(e);
}
function lm(e, t, n = $e) {
  Y(e) && (e = Ti(e));
  for (const s in e) {
    const o = e[s];
    let r;
    me(o) ? "default" in o ? r = no(
      o.from || s,
      o.default,
      !0
    ) : r = no(o.from || s) : r = no(o), Ae(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, x.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Na(e, t, n) {
  Mt(
    Y(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Pu(e, t, n, s) {
  let o = s.includes(".") ? td(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    oe(r) ? nn(o, r) : x.NODE_ENV !== "production" && P(`Invalid watch handler specified by key "${e}"`, r);
  } else if (oe(e))
    nn(o, e.bind(n));
  else if (me(e))
    if (Y(e))
      e.forEach((r) => Pu(r, t, n, s));
    else {
      const r = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(r) ? nn(o, r, e) : x.NODE_ENV !== "production" && P(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else x.NODE_ENV !== "production" && P(`Invalid watch option: "${s}"`, e);
}
function Cl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => ur(a, c, i, !0)
  ), ur(a, t, i)), me(t) && r.set(t, a), a;
}
function ur(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && ur(e, r, n, !0), o && o.forEach(
    (i) => ur(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      x.NODE_ENV !== "production" && P(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = am[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
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
  beforeCreate: ut,
  created: ut,
  beforeMount: ut,
  mounted: ut,
  beforeUpdate: ut,
  updated: ut,
  beforeDestroy: ut,
  beforeUnmount: ut,
  destroyed: ut,
  unmounted: ut,
  activated: ut,
  deactivated: ut,
  errorCaptured: ut,
  serverPrefetch: ut,
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
    return fe(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cm(e, t) {
  return Js(Ti(e), Ti(t));
}
function Ti(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ut(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Js(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ka(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    ho(e),
    ho(t ?? {})
  ) : t;
}
function um(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ut(e[s], t[s]);
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
    oe(s) || (s = fe({}, s)), o != null && !me(o) && (x.NODE_ENV !== "production" && P("root props passed to app.mount() must be an object."), o = null);
    const r = Ru(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: dm++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: ji,
      get config() {
        return r.config;
      },
      set config(d) {
        x.NODE_ENV !== "production" && P(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? x.NODE_ENV !== "production" && P("Plugin has already been applied to target app.") : d && oe(d.install) ? (i.add(d), d.install(c, ...u)) : oe(d) ? (i.add(d), d(c, ...u)) : x.NODE_ENV !== "production" && P(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(d) {
        return r.mixins.includes(d) ? x.NODE_ENV !== "production" && P(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), c;
      },
      component(d, u) {
        return x.NODE_ENV !== "production" && Li(d, r.config), u ? (x.NODE_ENV !== "production" && r.components[d] && P(`Component "${d}" has already been registered in target app.`), r.components[d] = u, c) : r.components[d];
      },
      directive(d, u) {
        return x.NODE_ENV !== "production" && mu(d), u ? (x.NODE_ENV !== "production" && r.directives[d] && P(`Directive "${d}" has already been registered in target app.`), r.directives[d] = u, c) : r.directives[d];
      },
      mount(d, u, p) {
        if (a)
          x.NODE_ENV !== "production" && P(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          x.NODE_ENV !== "production" && d.__vue_app__ && P(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || ue(s, o);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), x.NODE_ENV !== "production" && (r.reload = () => {
            const g = Pt(m);
            g.el = null, e(g, d, p);
          }), u && t ? t(m, d) : e(m, d, p), a = !0, c._container = d, d.__vue_app__ = c, x.NODE_ENV !== "production" && (c._instance = m.component, rh(c, ji)), Co(m.component);
        }
      },
      onUnmount(d) {
        x.NODE_ENV !== "production" && typeof d != "function" && P(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Mt(
          l,
          c._instance,
          16
        ), e(null, c._container), x.NODE_ENV !== "production" && (c._instance = null, ih(c)), delete c._container.__vue_app__) : x.NODE_ENV !== "production" && P("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return x.NODE_ENV !== "production" && d in r.provides && (ge(r.provides, d) ? P(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : P(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = ts;
        ts = c;
        try {
          return d();
        } finally {
          ts = u;
        }
      }
    };
    return c;
  };
}
let ts = null;
function Lu(e, t) {
  if (!Ke)
    x.NODE_ENV !== "production" && P("provide() can only be used inside setup().");
  else {
    let n = Ke.provides;
    const s = Ke.parent && Ke.parent.provides;
    s === n && (n = Ke.provides = Object.create(s)), n[e] = t;
  }
}
function no(e, t, n = !1) {
  const s = at();
  if (s || ts) {
    let o = ts ? ts._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    x.NODE_ENV !== "production" && P(`injection "${String(e)}" not found.`);
  } else x.NODE_ENV !== "production" && P("inject() can only be used inside setup() or functional components.");
}
function pm() {
  return !!(at() || ts);
}
const Fu = {}, Bu = () => Object.create(Fu), ju = (e) => Object.getPrototypeOf(e) === Fu;
function hm(e, t, n, s = !1) {
  const o = {}, r = Bu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hu(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  x.NODE_ENV !== "production" && qu(t || {}, o, e), n ? e.props = s ? o : tu(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
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
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = ce(o), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(x.NODE_ENV !== "production" && mm(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let p = d[u];
        if (zr(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (ge(r, p))
            m !== r[p] && (r[p] = m, c = !0);
          else {
            const g = Ce(p);
            o[g] = $i(
              a,
              l,
              g,
              m,
              e,
              !1
            );
          }
        else
          m !== r[p] && (r[p] = m, c = !0);
      }
    }
  } else {
    Hu(e, t, o, r) && (c = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !ge(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = tt(u)) === u || !ge(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = $i(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (r !== l)
      for (const u in r)
        (!t || !ge(t, u)) && (delete r[u], c = !0);
  }
  c && tn(e.attrs, "set", ""), x.NODE_ENV !== "production" && qu(t || {}, o, e);
}
function Hu(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (An(a))
        continue;
      const c = t[a];
      let d;
      o && ge(o, d = Ce(a)) ? !r || !r.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : zr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, i = !0);
    }
  if (r) {
    const a = ce(n), c = l || pe;
    for (let d = 0; d < r.length; d++) {
      const u = r[d];
      n[u] = $i(
        o,
        a,
        u,
        c[u],
        e,
        !ge(c, u)
      );
    }
  }
  return i;
}
function $i(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = ge(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && oe(a)) {
        const { propsDefaults: c } = o;
        if (n in c)
          s = c[n];
        else {
          const d = ls(o);
          s = c[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === tt(n)) && (s = !0));
  }
  return s;
}
const vm = /* @__PURE__ */ new WeakMap();
function Uu(e, t, n = !1) {
  const s = n ? vm : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!oe(e)) {
    const d = (u) => {
      a = !0;
      const [p, m] = Uu(u, t, !0);
      fe(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !a)
    return me(e) && s.set(e, vs), vs;
  if (Y(r))
    for (let d = 0; d < r.length; d++) {
      x.NODE_ENV !== "production" && !le(r[d]) && P("props must be strings when using array syntax.", r[d]);
      const u = Ce(r[d]);
      Ca(u) && (i[u] = pe);
    }
  else if (r) {
    x.NODE_ENV !== "production" && !me(r) && P("invalid props options", r);
    for (const d in r) {
      const u = Ce(d);
      if (Ca(u)) {
        const p = r[d], m = i[u] = Y(p) || oe(p) ? { type: p } : fe({}, p), g = m.type;
        let v = !1, T = !0;
        if (Y(g))
          for (let C = 0; C < g.length; ++C) {
            const y = g[C], h = oe(y) && y.name;
            if (h === "Boolean") {
              v = !0;
              break;
            } else h === "String" && (T = !1);
          }
        else
          v = oe(g) && g.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = v, m[
          1
          /* shouldCastTrue */
        ] = T, (v || ge(m, "default")) && l.push(u);
      }
    }
  }
  const c = [i, l];
  return me(e) && s.set(e, c), c;
}
function Ca(e) {
  return e[0] !== "$" && !An(e) ? !0 : (x.NODE_ENV !== "production" && P(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ym(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qu(e, t, n) {
  const s = ce(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ce(i));
  for (const i in o) {
    let l = o[i];
    l != null && bm(
      i,
      s[i],
      l,
      x.NODE_ENV !== "production" ? Bt(s) : s,
      !r.includes(i)
    );
  }
}
function bm(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    P('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let c = !1;
      const d = Y(r) ? r : [r], u = [];
      for (let p = 0; p < d.length && !c; p++) {
        const { valid: m, expectedType: g } = Em(t, d[p]);
        u.push(g || ""), c = m;
      }
      if (!c) {
        P(wm(e, t, u));
        return;
      }
    }
    l && !l(t, s) && P('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const _m = /* @__PURE__ */ Ge(
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
  const o = n[0], r = ol(t), i = Oa(t, o), l = Oa(t, r);
  return n.length === 1 && Ta(o) && !xm(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Ta(r) && (s += `with value ${l}.`), s;
}
function Oa(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ta(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function xm(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ol = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Tl = (e) => Y(e) ? e.map(pt) : [pt(e)], Nm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Me((...o) => (x.NODE_ENV !== "production" && Ke && !(n === null && Le) && !(n && n.root !== Ke.root) && P(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Tl(t(...o))), n);
  return s._c = !1, s;
}, zu = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ol(o)) continue;
    const r = e[o];
    if (oe(r))
      t[o] = Nm(o, r, s);
    else if (r != null) {
      x.NODE_ENV !== "production" && P(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Tl(r);
      t[o] = () => i;
    }
  }
}, Ku = (e, t) => {
  x.NODE_ENV !== "production" && !Fs(e.vnode) && P(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Tl(t);
  e.slots.default = () => n;
}, Di = (e, t, n) => {
  for (const s in t)
    (n || !Ol(s)) && (e[s] = t[s]);
}, Sm = (e, t, n) => {
  const s = e.slots = Bu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && ss(s, "__", o, !0);
    const r = t._;
    r ? (Di(s, t, n), n && ss(s, "_", r, !0)) : zu(t, s);
  } else t && Ku(e, t);
}, km = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? x.NODE_ENV !== "production" && jt ? (Di(o, t, n), tn(e, "set", "$slots")) : n && l === 1 ? r = !1 : Di(o, t, n) : (r = !t.$stable, zu(t, o)), i = t;
  } else t && (Ku(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !Ol(l) && i[l] == null && delete o[l];
};
let Us, Dn;
function an(e, t) {
  e.appContext.config.performance && dr() && Dn.mark(`vue-${t}-${e.uid}`), x.NODE_ENV !== "production" && ch(e, t, dr() ? Dn.now() : Date.now());
}
function cn(e, t) {
  if (e.appContext.config.performance && dr()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Dn.mark(s), Dn.measure(
      `<${Gr(e, e.type)}> ${t}`,
      n,
      s
    ), Dn.clearMarks(n), Dn.clearMarks(s);
  }
  x.NODE_ENV !== "production" && uh(e, t, dr() ? Dn.now() : Date.now());
}
function dr() {
  return Us !== void 0 || (typeof window < "u" && window.performance ? (Us = !0, Dn = window.performance) : Us = !1), Us;
}
function Cm() {
  const e = [];
  if (x.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const He = id;
function Wu(e) {
  return Yu(e);
}
function Gu(e) {
  return Yu(e, Eh);
}
function Yu(e, t) {
  Cm();
  const n = xo();
  n.__VUE__ = !0, x.NODE_ENV !== "production" && ml(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: p,
    setScopeId: m = $e,
    insertStaticContent: g
  } = e, v = (_, O, I, B = null, L = null, F = null, X = void 0, K = null, z = x.NODE_ENV !== "production" && jt ? !1 : !!O.dynamicChildren) => {
    if (_ === O)
      return;
    _ && !Ft(_, O) && (B = Vo(_), En(_, L, F, !0), _ = null), O.patchFlag === -2 && (z = !1, O.dynamicChildren = null);
    const { type: j, ref: re, shapeFlag: Q } = O;
    switch (j) {
      case sn:
        T(_, O, I, B);
        break;
      case De:
        C(_, O, I, B);
        break;
      case Mn:
        _ == null ? y(O, I, B, X) : x.NODE_ENV !== "production" && h(_, O, I, X);
        break;
      case ie:
        U(
          _,
          O,
          I,
          B,
          L,
          F,
          X,
          K,
          z
        );
        break;
      default:
        Q & 1 ? V(
          _,
          O,
          I,
          B,
          L,
          F,
          X,
          K,
          z
        ) : Q & 6 ? W(
          _,
          O,
          I,
          B,
          L,
          F,
          X,
          K,
          z
        ) : Q & 64 || Q & 128 ? j.process(
          _,
          O,
          I,
          B,
          L,
          F,
          X,
          K,
          z,
          fs
        ) : x.NODE_ENV !== "production" && P("Invalid VNode type:", j, `(${typeof j})`);
    }
    re != null && L ? Es(re, _ && _.ref, F, O || _, !O) : re == null && _ && _.ref != null && Es(_.ref, null, F, _, !0);
  }, T = (_, O, I, B) => {
    if (_ == null)
      s(
        O.el = l(O.children),
        I,
        B
      );
    else {
      const L = O.el = _.el;
      O.children !== _.children && c(L, O.children);
    }
  }, C = (_, O, I, B) => {
    _ == null ? s(
      O.el = a(O.children || ""),
      I,
      B
    ) : O.el = _.el;
  }, y = (_, O, I, B) => {
    [_.el, _.anchor] = g(
      _.children,
      O,
      I,
      B,
      _.el,
      _.anchor
    );
  }, h = (_, O, I, B) => {
    if (O.children !== _.children) {
      const L = p(_.anchor);
      E(_), [O.el, O.anchor] = g(
        O.children,
        I,
        L,
        B
      );
    } else
      O.el = _.el, O.anchor = _.anchor;
  }, S = ({ el: _, anchor: O }, I, B) => {
    let L;
    for (; _ && _ !== O; )
      L = p(_), s(_, I, B), _ = L;
    s(O, I, B);
  }, E = ({ el: _, anchor: O }) => {
    let I;
    for (; _ && _ !== O; )
      I = p(_), o(_), _ = I;
    o(O);
  }, V = (_, O, I, B, L, F, X, K, z) => {
    O.type === "svg" ? X = "svg" : O.type === "math" && (X = "mathml"), _ == null ? M(
      O,
      I,
      B,
      L,
      F,
      X,
      K,
      z
    ) : k(
      _,
      O,
      L,
      F,
      X,
      K,
      z
    );
  }, M = (_, O, I, B, L, F, X, K) => {
    let z, j;
    const { props: re, shapeFlag: Q, transition: ne, dirs: ae } = _;
    if (z = _.el = i(
      _.type,
      F,
      re && re.is,
      re
    ), Q & 8 ? d(z, _.children) : Q & 16 && b(
      _.children,
      z,
      null,
      B,
      L,
      pi(_, F),
      X,
      K
    ), ae && Zt(_, null, B, "created"), $(z, _, _.scopeId, X, B), re) {
      for (const Oe in re)
        Oe !== "value" && !An(Oe) && r(z, Oe, null, re[Oe], F, B);
      "value" in re && r(z, "value", null, re.value, F), (j = re.onVnodeBeforeMount) && bt(j, B, _);
    }
    x.NODE_ENV !== "production" && (ss(z, "__vnode", _, !0), ss(z, "__vueParentComponent", B, !0)), ae && Zt(_, null, B, "beforeMount");
    const ye = Ju(L, ne);
    ye && ne.beforeEnter(z), s(z, O, I), ((j = re && re.onVnodeMounted) || ye || ae) && He(() => {
      j && bt(j, B, _), ye && ne.enter(z), ae && Zt(_, null, B, "mounted");
    }, L);
  }, $ = (_, O, I, B, L) => {
    if (I && m(_, I), B)
      for (let F = 0; F < B.length; F++)
        m(_, B[F]);
    if (L) {
      let F = L.subTree;
      if (x.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && (F = Kr(F.children) || F), O === F || hr(F.type) && (F.ssContent === O || F.ssFallback === O)) {
        const X = L.vnode;
        $(
          _,
          X,
          X.scopeId,
          X.slotScopeIds,
          L.parent
        );
      }
    }
  }, b = (_, O, I, B, L, F, X, K, z = 0) => {
    for (let j = z; j < _.length; j++) {
      const re = _[j] = K ? On(_[j]) : pt(_[j]);
      v(
        null,
        re,
        O,
        I,
        B,
        L,
        F,
        X,
        K
      );
    }
  }, k = (_, O, I, B, L, F, X) => {
    const K = O.el = _.el;
    x.NODE_ENV !== "production" && (K.__vnode = O);
    let { patchFlag: z, dynamicChildren: j, dirs: re } = O;
    z |= _.patchFlag & 16;
    const Q = _.props || pe, ne = O.props || pe;
    let ae;
    if (I && Un(I, !1), (ae = ne.onVnodeBeforeUpdate) && bt(ae, I, O, _), re && Zt(O, _, I, "beforeUpdate"), I && Un(I, !0), x.NODE_ENV !== "production" && jt && (z = 0, X = !1, j = null), (Q.innerHTML && ne.innerHTML == null || Q.textContent && ne.textContent == null) && d(K, ""), j ? (A(
      _.dynamicChildren,
      j,
      K,
      I,
      B,
      pi(O, L),
      F
    ), x.NODE_ENV !== "production" && so(_, O)) : X || we(
      _,
      O,
      K,
      null,
      I,
      B,
      pi(O, L),
      F,
      !1
    ), z > 0) {
      if (z & 16)
        D(K, Q, ne, I, L);
      else if (z & 2 && Q.class !== ne.class && r(K, "class", null, ne.class, L), z & 4 && r(K, "style", Q.style, ne.style, L), z & 8) {
        const ye = O.dynamicProps;
        for (let Oe = 0; Oe < ye.length; Oe++) {
          const xe = ye[Oe], gt = Q[xe], Qe = ne[xe];
          (Qe !== gt || xe === "value") && r(K, xe, gt, Qe, L, I);
        }
      }
      z & 1 && _.children !== O.children && d(K, O.children);
    } else !X && j == null && D(K, Q, ne, I, L);
    ((ae = ne.onVnodeUpdated) || re) && He(() => {
      ae && bt(ae, I, O, _), re && Zt(O, _, I, "updated");
    }, B);
  }, A = (_, O, I, B, L, F, X) => {
    for (let K = 0; K < O.length; K++) {
      const z = _[K], j = O[K], re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (z.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ft(z, j) || // - In the case of a component, it could contain anything.
        z.shapeFlag & 198) ? u(z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      v(
        z,
        j,
        re,
        null,
        B,
        L,
        F,
        X,
        !0
      );
    }
  }, D = (_, O, I, B, L) => {
    if (O !== I) {
      if (O !== pe)
        for (const F in O)
          !An(F) && !(F in I) && r(
            _,
            F,
            O[F],
            null,
            L,
            B
          );
      for (const F in I) {
        if (An(F)) continue;
        const X = I[F], K = O[F];
        X !== K && F !== "value" && r(_, F, K, X, L, B);
      }
      "value" in I && r(_, "value", O.value, I.value, L);
    }
  }, U = (_, O, I, B, L, F, X, K, z) => {
    const j = O.el = _ ? _.el : l(""), re = O.anchor = _ ? _.anchor : l("");
    let { patchFlag: Q, dynamicChildren: ne, slotScopeIds: ae } = O;
    x.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (jt || Q & 2048) && (Q = 0, z = !1, ne = null), ae && (K = K ? K.concat(ae) : ae), _ == null ? (s(j, I, B), s(re, I, B), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      I,
      re,
      L,
      F,
      X,
      K,
      z
    )) : Q > 0 && Q & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (A(
      _.dynamicChildren,
      ne,
      I,
      L,
      F,
      X,
      K
    ), x.NODE_ENV !== "production" ? so(_, O) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (O.key != null || L && O === L.subTree) && so(
        _,
        O,
        !0
        /* shallow */
      )
    )) : we(
      _,
      O,
      I,
      re,
      L,
      F,
      X,
      K,
      z
    );
  }, W = (_, O, I, B, L, F, X, K, z) => {
    O.slotScopeIds = K, _ == null ? O.shapeFlag & 512 ? L.ctx.activate(
      O,
      I,
      B,
      X,
      z
    ) : G(
      O,
      I,
      B,
      L,
      F,
      X,
      z
    ) : ee(_, O, z);
  }, G = (_, O, I, B, L, F, X) => {
    const K = _.component = hd(
      _,
      B,
      L
    );
    if (x.NODE_ENV !== "production" && K.type.__hmrId && th(K), x.NODE_ENV !== "production" && (ys(_), an(K, "mount")), Fs(_) && (K.ctx.renderer = fs), x.NODE_ENV !== "production" && an(K, "init"), gd(K, !1, X), x.NODE_ENV !== "production" && cn(K, "init"), x.NODE_ENV !== "production" && jt && (_.el = null), K.asyncDep) {
      if (L && L.registerDep(K, se, X), !_.el) {
        const z = K.subTree = ue(De);
        C(null, z, O, I), _.placeholder = z.el;
      }
    } else
      se(
        K,
        _,
        O,
        I,
        L,
        F,
        X
      );
    x.NODE_ENV !== "production" && (bs(), cn(K, "mount"));
  }, ee = (_, O, I) => {
    const B = O.component = _.component;
    if (Pm(_, O, I))
      if (B.asyncDep && !B.asyncResolved) {
        x.NODE_ENV !== "production" && ys(O), te(B, O, I), x.NODE_ENV !== "production" && bs();
        return;
      } else
        B.next = O, B.update();
    else
      O.el = _.el, B.vnode = O;
  }, se = (_, O, I, B, L, F, X) => {
    const K = () => {
      if (_.isMounted) {
        let { next: Q, bu: ne, u: ae, parent: ye, vnode: Oe } = _;
        {
          const Nt = Xu(_);
          if (Nt) {
            Q && (Q.el = Oe.el, te(_, Q, X)), Nt.asyncDep.then(() => {
              _.isUnmounted || K();
            });
            return;
          }
        }
        let xe = Q, gt;
        x.NODE_ENV !== "production" && ys(Q || _.vnode), Un(_, !1), Q ? (Q.el = Oe.el, te(_, Q, X)) : Q = Oe, ne && $n(ne), (gt = Q.props && Q.props.onVnodeBeforeUpdate) && bt(gt, ye, Q, Oe), Un(_, !0), x.NODE_ENV !== "production" && an(_, "render");
        const Qe = Wo(_);
        x.NODE_ENV !== "production" && cn(_, "render");
        const Rt = _.subTree;
        _.subTree = Qe, x.NODE_ENV !== "production" && an(_, "patch"), v(
          Rt,
          Qe,
          // parent may have changed if it's in a teleport
          u(Rt.el),
          // anchor may have changed if it's in a fragment
          Vo(Rt),
          _,
          L,
          F
        ), x.NODE_ENV !== "production" && cn(_, "patch"), Q.el = Qe.el, xe === null && Wr(_, Qe.el), ae && He(ae, L), (gt = Q.props && Q.props.onVnodeUpdated) && He(
          () => bt(gt, ye, Q, Oe),
          L
        ), x.NODE_ENV !== "production" && pu(_), x.NODE_ENV !== "production" && bs();
      } else {
        let Q;
        const { el: ne, props: ae } = O, { bm: ye, m: Oe, parent: xe, root: gt, type: Qe } = _, Rt = In(O);
        if (Un(_, !1), ye && $n(ye), !Rt && (Q = ae && ae.onVnodeBeforeMount) && bt(Q, xe, O), Un(_, !0), ne && ni) {
          const Nt = () => {
            x.NODE_ENV !== "production" && an(_, "render"), _.subTree = Wo(_), x.NODE_ENV !== "production" && cn(_, "render"), x.NODE_ENV !== "production" && an(_, "hydrate"), ni(
              ne,
              _.subTree,
              _,
              L,
              null
            ), x.NODE_ENV !== "production" && cn(_, "hydrate");
          };
          Rt && Qe.__asyncHydrate ? Qe.__asyncHydrate(
            ne,
            _,
            Nt
          ) : Nt();
        } else {
          gt.ce && // @ts-expect-error _def is private
          gt.ce._def.shadowRoot !== !1 && gt.ce._injectChildStyle(Qe), x.NODE_ENV !== "production" && an(_, "render");
          const Nt = _.subTree = Wo(_);
          x.NODE_ENV !== "production" && cn(_, "render"), x.NODE_ENV !== "production" && an(_, "patch"), v(
            null,
            Nt,
            I,
            B,
            _,
            L,
            F
          ), x.NODE_ENV !== "production" && cn(_, "patch"), O.el = Nt.el;
        }
        if (Oe && He(Oe, L), !Rt && (Q = ae && ae.onVnodeMounted)) {
          const Nt = O;
          He(
            () => bt(Q, xe, Nt),
            L
          );
        }
        (O.shapeFlag & 256 || xe && In(xe.vnode) && xe.vnode.shapeFlag & 256) && _.a && He(_.a, L), _.isMounted = !0, x.NODE_ENV !== "production" && Si(_), O = I = B = null;
      }
    };
    _.scope.on();
    const z = _.effect = new ao(K);
    _.scope.off();
    const j = _.update = z.run.bind(z), re = _.job = z.runIfDirty.bind(z);
    re.i = _, re.id = _.uid, z.scheduler = () => Fr(re), Un(_, !0), x.NODE_ENV !== "production" && (z.onTrack = _.rtc ? (Q) => $n(_.rtc, Q) : void 0, z.onTrigger = _.rtg ? (Q) => $n(_.rtg, Q) : void 0), j();
  }, te = (_, O, I) => {
    O.component = _;
    const B = _.vnode.props;
    _.vnode = O, _.next = null, gm(_, O.props, B, I), km(_, O.children, I), Kt(), pa(_), Wt();
  }, we = (_, O, I, B, L, F, X, K, z = !1) => {
    const j = _ && _.children, re = _ ? _.shapeFlag : 0, Q = O.children, { patchFlag: ne, shapeFlag: ae } = O;
    if (ne > 0) {
      if (ne & 128) {
        Tt(
          j,
          Q,
          I,
          B,
          L,
          F,
          X,
          K,
          z
        );
        return;
      } else if (ne & 256) {
        mt(
          j,
          Q,
          I,
          B,
          L,
          F,
          X,
          K,
          z
        );
        return;
      }
    }
    ae & 8 ? (re & 16 && Bs(j, L, F), Q !== j && d(I, Q)) : re & 16 ? ae & 16 ? Tt(
      j,
      Q,
      I,
      B,
      L,
      F,
      X,
      K,
      z
    ) : Bs(j, L, F, !0) : (re & 8 && d(I, ""), ae & 16 && b(
      Q,
      I,
      B,
      L,
      F,
      X,
      K,
      z
    ));
  }, mt = (_, O, I, B, L, F, X, K, z) => {
    _ = _ || vs, O = O || vs;
    const j = _.length, re = O.length, Q = Math.min(j, re);
    let ne;
    for (ne = 0; ne < Q; ne++) {
      const ae = O[ne] = z ? On(O[ne]) : pt(O[ne]);
      v(
        _[ne],
        ae,
        I,
        null,
        L,
        F,
        X,
        K,
        z
      );
    }
    j > re ? Bs(
      _,
      L,
      F,
      !0,
      !1,
      Q
    ) : b(
      O,
      I,
      B,
      L,
      F,
      X,
      K,
      z,
      Q
    );
  }, Tt = (_, O, I, B, L, F, X, K, z) => {
    let j = 0;
    const re = O.length;
    let Q = _.length - 1, ne = re - 1;
    for (; j <= Q && j <= ne; ) {
      const ae = _[j], ye = O[j] = z ? On(O[j]) : pt(O[j]);
      if (Ft(ae, ye))
        v(
          ae,
          ye,
          I,
          null,
          L,
          F,
          X,
          K,
          z
        );
      else
        break;
      j++;
    }
    for (; j <= Q && j <= ne; ) {
      const ae = _[Q], ye = O[ne] = z ? On(O[ne]) : pt(O[ne]);
      if (Ft(ae, ye))
        v(
          ae,
          ye,
          I,
          null,
          L,
          F,
          X,
          K,
          z
        );
      else
        break;
      Q--, ne--;
    }
    if (j > Q) {
      if (j <= ne) {
        const ae = ne + 1, ye = ae < re ? O[ae].el : B;
        for (; j <= ne; )
          v(
            null,
            O[j] = z ? On(O[j]) : pt(O[j]),
            I,
            ye,
            L,
            F,
            X,
            K,
            z
          ), j++;
      }
    } else if (j > ne)
      for (; j <= Q; )
        En(_[j], L, F, !0), j++;
    else {
      const ae = j, ye = j, Oe = /* @__PURE__ */ new Map();
      for (j = ye; j <= ne; j++) {
        const ct = O[j] = z ? On(O[j]) : pt(O[j]);
        ct.key != null && (x.NODE_ENV !== "production" && Oe.has(ct.key) && P(
          "Duplicate keys found during update:",
          JSON.stringify(ct.key),
          "Make sure keys are unique."
        ), Oe.set(ct.key, j));
      }
      let xe, gt = 0;
      const Qe = ne - ye + 1;
      let Rt = !1, Nt = 0;
      const js = new Array(Qe);
      for (j = 0; j < Qe; j++) js[j] = 0;
      for (j = ae; j <= Q; j++) {
        const ct = _[j];
        if (gt >= Qe) {
          En(ct, L, F, !0);
          continue;
        }
        let Yt;
        if (ct.key != null)
          Yt = Oe.get(ct.key);
        else
          for (xe = ye; xe <= ne; xe++)
            if (js[xe - ye] === 0 && Ft(ct, O[xe])) {
              Yt = xe;
              break;
            }
        Yt === void 0 ? En(ct, L, F, !0) : (js[Yt - ye] = j + 1, Yt >= Nt ? Nt = Yt : Rt = !0, v(
          ct,
          O[Yt],
          I,
          null,
          L,
          F,
          X,
          K,
          z
        ), gt++);
      }
      const sa = Rt ? Om(js) : vs;
      for (xe = sa.length - 1, j = Qe - 1; j >= 0; j--) {
        const ct = ye + j, Yt = O[ct], oa = O[ct + 1], ra = ct + 1 < re ? (
          // #13559, fallback to el placeholder for unresolved async component
          oa.el || oa.placeholder
        ) : B;
        js[j] === 0 ? v(
          null,
          Yt,
          I,
          ra,
          L,
          F,
          X,
          K,
          z
        ) : Rt && (xe < 0 || j !== sa[xe] ? $t(Yt, I, ra, 2) : xe--);
      }
    }
  }, $t = (_, O, I, B, L = null) => {
    const { el: F, type: X, transition: K, children: z, shapeFlag: j } = _;
    if (j & 6) {
      $t(_.component.subTree, O, I, B);
      return;
    }
    if (j & 128) {
      _.suspense.move(O, I, B);
      return;
    }
    if (j & 64) {
      X.move(_, O, I, fs);
      return;
    }
    if (X === ie) {
      s(F, O, I);
      for (let Q = 0; Q < z.length; Q++)
        $t(z[Q], O, I, B);
      s(_.anchor, O, I);
      return;
    }
    if (X === Mn) {
      S(_, O, I);
      return;
    }
    if (B !== 2 && j & 1 && K)
      if (B === 0)
        K.beforeEnter(F), s(F, O, I), He(() => K.enter(F), L);
      else {
        const { leave: Q, delayLeave: ne, afterLeave: ae } = K, ye = () => {
          _.ctx.isUnmounted ? o(F) : s(F, O, I);
        }, Oe = () => {
          Q(F, () => {
            ye(), ae && ae();
          });
        };
        ne ? ne(F, ye, Oe) : Oe();
      }
    else
      s(F, O, I);
  }, En = (_, O, I, B = !1, L = !1) => {
    const {
      type: F,
      props: X,
      ref: K,
      children: z,
      dynamicChildren: j,
      shapeFlag: re,
      patchFlag: Q,
      dirs: ne,
      cacheIndex: ae
    } = _;
    if (Q === -2 && (L = !1), K != null && (Kt(), Es(K, null, I, _, !0), Wt()), ae != null && (O.renderCache[ae] = void 0), re & 256) {
      O.ctx.deactivate(_);
      return;
    }
    const ye = re & 1 && ne, Oe = !In(_);
    let xe;
    if (Oe && (xe = X && X.onVnodeBeforeUnmount) && bt(xe, O, _), re & 6)
      Rf(_.component, I, B);
    else {
      if (re & 128) {
        _.suspense.unmount(I, B);
        return;
      }
      ye && Zt(_, null, O, "beforeUnmount"), re & 64 ? _.type.remove(
        _,
        O,
        I,
        fs,
        B
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ie || Q > 0 && Q & 64) ? Bs(
        j,
        O,
        I,
        !1,
        !0
      ) : (F === ie && Q & 384 || !L && re & 16) && Bs(z, O, I), B && Zr(_);
    }
    (Oe && (xe = X && X.onVnodeUnmounted) || ye) && He(() => {
      xe && bt(xe, O, _), ye && Zt(_, null, O, "unmounted");
    }, I);
  }, Zr = (_) => {
    const { type: O, el: I, anchor: B, transition: L } = _;
    if (O === ie) {
      x.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && L && !L.persisted ? _.children.forEach((X) => {
        X.type === De ? o(X.el) : Zr(X);
      }) : Pf(I, B);
      return;
    }
    if (O === Mn) {
      E(_);
      return;
    }
    const F = () => {
      o(I), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (_.shapeFlag & 1 && L && !L.persisted) {
      const { leave: X, delayLeave: K } = L, z = () => X(I, F);
      K ? K(_.el, F, z) : z();
    } else
      F();
  }, Pf = (_, O) => {
    let I;
    for (; _ !== O; )
      I = p(_), o(_), _ = I;
    o(O);
  }, Rf = (_, O, I) => {
    x.NODE_ENV !== "production" && _.type.__hmrId && nh(_);
    const {
      bum: B,
      scope: L,
      job: F,
      subTree: X,
      um: K,
      m: z,
      a: j,
      parent: re,
      slots: { __: Q }
    } = _;
    fr(z), fr(j), B && $n(B), re && Y(Q) && Q.forEach((ne) => {
      re.renderCache[ne] = void 0;
    }), L.stop(), F && (F.flags |= 8, En(X, _, O, I)), K && He(K, O), He(() => {
      _.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve()), x.NODE_ENV !== "production" && ah(_);
  }, Bs = (_, O, I, B = !1, L = !1, F = 0) => {
    for (let X = F; X < _.length; X++)
      En(_[X], O, I, B, L);
  }, Vo = (_) => {
    if (_.shapeFlag & 6)
      return Vo(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const O = p(_.anchor || _.el), I = O && O[gu];
    return I ? p(I) : O;
  };
  let ei = !1;
  const na = (_, O, I) => {
    _ == null ? O._vnode && En(O._vnode, null, null, !0) : v(
      O._vnode || null,
      _,
      O,
      null,
      null,
      null,
      I
    ), O._vnode = _, ei || (ei = !0, pa(), lr(), ei = !1);
  }, fs = {
    p: v,
    um: En,
    m: $t,
    r: Zr,
    mt: G,
    mc: b,
    pc: we,
    pbc: A,
    n: Vo,
    o: e
  };
  let ti, ni;
  return t && ([ti, ni] = t(
    fs
  )), {
    render: na,
    hydrate: ti,
    createApp: fm(na, ti)
  };
}
function pi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Un({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ju(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Y(s) && Y(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = On(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && so(i, l)), l.type === sn && (l.el = i.el), l.type === De && !l.el && (l.el = i.el), x.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Om(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < c ? r = l + 1 : i = l;
      c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Xu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xu(t);
}
function fr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Qu = Symbol.for("v-scx"), Zu = () => {
  {
    const e = no(Qu);
    return e || x.NODE_ENV !== "production" && P(
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
    x.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function ed(e, t) {
  return ko(
    e,
    null,
    x.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function nn(e, t, n) {
  return x.NODE_ENV !== "production" && !oe(t) && P(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ko(e, t, n);
}
function ko(e, t, n = pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  x.NODE_ENV !== "production" && !t && (s !== void 0 && P(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && P(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && P(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  x.NODE_ENV !== "production" && (l.onWarn = P);
  const a = t && s || !t && r !== "post";
  let c;
  if (Os) {
    if (r === "sync") {
      const m = Zu();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = $e, m.resume = $e, m.pause = $e, m;
    }
  }
  const d = Ke;
  l.call = (m, g, v) => Mt(m, d, g, v);
  let u = !1;
  r === "post" ? l.scheduler = (m) => {
    He(m, d && d.suspense);
  } : r !== "sync" && (u = !0, l.scheduler = (m, g) => {
    g ? m() : Fr(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const p = Kp(e, t, l);
  return Os && (c ? c.push(p) : a && p()), p;
}
function Dm(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? td(s, e) : () => s[e] : e.bind(s, s);
  let r;
  oe(t) ? r = t : (r = t.handler, n = t);
  const i = ls(this), l = ko(o, r.bind(s), n);
  return i(), l;
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
  const s = at();
  if (x.NODE_ENV !== "production" && !s)
    return P("useModel() called without active instance."), q();
  const o = Ce(t);
  if (x.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return P(`useModel() called with prop "${t}" which is not declared.`), q();
  const r = tt(t), i = nd(e, o), l = ru((a, c) => {
    let d, u = pe, p;
    return ed(() => {
      const m = e[o];
      dt(d, m) && (d = m, c());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const g = n.set ? n.set(m) : m;
        if (!dt(g, d) && !(u !== pe && dt(m, u)))
          return;
        const v = s.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || r in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${r}` in v) || (d = m, c()), s.emit(`update:${t}`, g), dt(m, g) && dt(m, u) && !dt(g, p) && c(), u = m, p = g;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? { value: a++ ? i || pe : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const nd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Am(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (x.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(en(Ce(t)) in u)) && P(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${en(Ce(t))}" prop.`
        );
      else {
        const p = d[t];
        oe(p) && (p(...n) || P(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && nd(s, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => le(d) ? d.trim() : d)), i.number && (o = n.map(tr))), x.NODE_ENV !== "production" && dh(e, t, o), x.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[en(d)] && P(
      `Event "${d}" is emitted in component ${Gr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${tt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = en(t)] || // also try camelCase event handler (#2249)
  s[l = en(Ce(t))];
  !a && r && (a = s[l = en(tt(t))]), a && Mt(
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
    e.emitted[l] = !0, Mt(
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
  const r = e.emits;
  let i = {}, l = !1;
  if (!oe(e)) {
    const a = (c) => {
      const d = sd(c, t, !0);
      d && (l = !0, fe(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (me(e) && s.set(e, null), null) : (Y(r) ? r.forEach((a) => i[a] = null) : fe(i, r), me(e) && s.set(e, i), i);
}
function zr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, tt(t)) || ge(e, t));
}
let Vi = !1;
function pr() {
  Vi = !0;
}
function Wo(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: a,
    render: c,
    renderCache: d,
    props: u,
    data: p,
    setupState: m,
    ctx: g,
    inheritAttrs: v
  } = e, T = po(e);
  let C, y;
  x.NODE_ENV !== "production" && (Vi = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = o || s, V = x.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(E, {
        get(M, $, b) {
          return P(
            `Property '${String(
              $
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, $, b);
        }
      }) : E;
      C = pt(
        c.call(
          V,
          E,
          d,
          x.NODE_ENV !== "production" ? Bt(u) : u,
          m,
          p,
          g
        )
      ), y = l;
    } else {
      const E = t;
      x.NODE_ENV !== "production" && l === u && pr(), C = pt(
        E.length > 1 ? E(
          x.NODE_ENV !== "production" ? Bt(u) : u,
          x.NODE_ENV !== "production" ? {
            get attrs() {
              return pr(), Bt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : E(
          x.NODE_ENV !== "production" ? Bt(u) : u,
          null
        )
      ), y = t.props ? l : Im(l);
    }
  } catch (E) {
    oo.length = 0, Bn(E, e, 1), C = ue(De);
  }
  let h = C, S;
  if (x.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([h, S] = od(C)), y && v !== !1) {
    const E = Object.keys(y), { shapeFlag: V } = h;
    if (E.length) {
      if (V & 7)
        r && E.some(er) && (y = Mm(
          y,
          r
        )), h = Pt(h, y, !1, !0);
      else if (x.NODE_ENV !== "production" && !Vi && h.type !== De) {
        const M = Object.keys(l), $ = [], b = [];
        for (let k = 0, A = M.length; k < A; k++) {
          const D = M[k];
          vn(D) ? er(D) || $.push(D[2].toLowerCase() + D.slice(3)) : b.push(D);
        }
        b.length && P(
          `Extraneous non-props attributes (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), $.length && P(
          `Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (x.NODE_ENV !== "production" && !$a(h) && P(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), h = Pt(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs), n.transition && (x.NODE_ENV !== "production" && !$a(h) && P(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(h, n.transition)), x.NODE_ENV !== "production" && S ? S(h) : C = h, po(T), C;
}
const od = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Kr(t, !1);
  if (s) {
    if (x.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return od(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [pt(s), i];
};
function Kr(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (rn(o)) {
      if (o.type !== De || o.children === "v-if") {
        if (n)
          return;
        if (n = o, x.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Kr(n.children);
      }
    } else
      return;
  }
  return n;
}
const Im = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Mm = (e, t) => {
  const n = {};
  for (const s in e)
    (!er(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, $a = (e) => e.shapeFlag & 7 || e.type === De;
function Pm(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (x.NODE_ENV !== "production" && (o || l) && jt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Da(s, i, c) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const p = d[u];
        if (i[p] !== s[p] && !zr(c, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Da(s, i, c) : !0 : !!i;
  return !1;
}
function Da(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !zr(n, r))
      return !0;
  }
  return !1;
}
function Wr({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const hr = (e) => e.__isSuspense;
let Ai = 0;
const Rm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, r, i, l, a, c) {
    if (e == null)
      Fm(
        t,
        n,
        s,
        o,
        r,
        i,
        l,
        a,
        c
      );
    else {
      if (r && r.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Bm(
        e,
        t,
        n,
        s,
        o,
        i,
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
function Fm(e, t, n, s, o, r, i, l, a) {
  const {
    p: c,
    o: { createElement: d }
  } = a, u = d("div"), p = e.suspense = rd(
    e,
    o,
    s,
    t,
    u,
    n,
    r,
    i,
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
    r,
    i
  ), p.deps > 0 ? (mo(e, "onPending"), mo(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    r,
    i
  ), ws(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Bm(e, t, n, s, o, r, i, l, { p: a, um: c, o: { createElement: d } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, m = t.ssFallback, { activeBranch: g, pendingBranch: v, isInFallback: T, isHydrating: C } = u;
  if (v)
    u.pendingBranch = p, Ft(p, v) ? (a(
      v,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      r,
      i,
      l
    ), u.deps <= 0 ? u.resolve() : T && (C || (a(
      g,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      r,
      i,
      l
    ), ws(u, m)))) : (u.pendingId = Ai++, C ? (u.isHydrating = !1, u.activeBranch = v) : c(v, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = d("div"), T ? (a(
      null,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      r,
      i,
      l
    ), u.deps <= 0 ? u.resolve() : (a(
      g,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      r,
      i,
      l
    ), ws(u, m))) : g && Ft(p, g) ? (a(
      g,
      p,
      n,
      s,
      o,
      u,
      r,
      i,
      l
    ), u.resolve(!0)) : (a(
      null,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      r,
      i,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (g && Ft(p, g))
    a(
      g,
      p,
      n,
      s,
      o,
      u,
      r,
      i,
      l
    ), ws(u, p);
  else if (mo(t, "onPending"), u.pendingBranch = p, p.shapeFlag & 512 ? u.pendingId = p.component.suspenseId : u.pendingId = Ai++, a(
    null,
    p,
    u.hiddenContainer,
    null,
    o,
    u,
    r,
    i,
    l
  ), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: y, pendingId: h } = u;
    y > 0 ? setTimeout(() => {
      u.pendingId === h && u.fallback(m);
    }, y) : y === 0 && u.fallback(m);
  }
}
let Va = !1;
function rd(e, t, n, s, o, r, i, l, a, c, d = !1) {
  x.NODE_ENV !== "production" && !Va && (Va = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: m,
    n: g,
    o: { parentNode: v, remove: T }
  } = c;
  let C;
  const y = Um(e);
  y && t && t.pendingBranch && (C = t.pendingId, t.deps++);
  const h = e.props ? nr(e.props.timeout) : void 0;
  x.NODE_ENV !== "production" && pl(h, "Suspense timeout");
  const S = r, E = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Ai++,
    timeout: typeof h == "number" ? h : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(V = !1, M = !1) {
      if (x.NODE_ENV !== "production") {
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
        vnode: $,
        activeBranch: b,
        pendingBranch: k,
        pendingId: A,
        effects: D,
        parentComponent: U,
        container: W
      } = E;
      let G = !1;
      E.isHydrating ? E.isHydrating = !1 : V || (G = b && k.transition && k.transition.mode === "out-in", G && (b.transition.afterLeave = () => {
        A === E.pendingId && (p(
          k,
          W,
          r === S ? g(b) : r,
          0
        ), ks(D));
      }), b && (v(b.el) === W && (r = g(b)), m(b, U, E, !0)), G || p(k, W, r, 0)), ws(E, k), E.pendingBranch = null, E.isInFallback = !1;
      let ee = E.parent, se = !1;
      for (; ee; ) {
        if (ee.pendingBranch) {
          ee.effects.push(...D), se = !0;
          break;
        }
        ee = ee.parent;
      }
      !se && !G && ks(D), E.effects = [], y && t && t.pendingBranch && C === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), mo($, "onResolve");
    },
    fallback(V) {
      if (!E.pendingBranch)
        return;
      const { vnode: M, activeBranch: $, parentComponent: b, container: k, namespace: A } = E;
      mo(M, "onFallback");
      const D = g($), U = () => {
        E.isInFallback && (u(
          null,
          V,
          k,
          D,
          b,
          null,
          // fallback tree will not have suspense context
          A,
          l,
          a
        ), ws(E, V));
      }, W = V.transition && V.transition.mode === "out-in";
      W && ($.transition.afterLeave = U), E.isInFallback = !0, m(
        $,
        b,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), W || U();
    },
    move(V, M, $) {
      E.activeBranch && p(E.activeBranch, V, M, $), E.container = V;
    },
    next() {
      return E.activeBranch && g(E.activeBranch);
    },
    registerDep(V, M, $) {
      const b = !!E.pendingBranch;
      b && E.deps++;
      const k = V.vnode.el;
      V.asyncDep.catch((A) => {
        Bn(A, V, 0);
      }).then((A) => {
        if (V.isUnmounted || E.isUnmounted || E.pendingId !== V.suspenseId)
          return;
        V.asyncResolved = !0;
        const { vnode: D } = V;
        x.NODE_ENV !== "production" && ys(D), Fi(V, A, !1), k && (D.el = k);
        const U = !k && V.subTree.el;
        M(
          V,
          D,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          v(k || V.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          k ? null : g(V.subTree),
          E,
          i,
          $
        ), U && T(U), Wr(V, D.el), x.NODE_ENV !== "production" && bs(), b && --E.deps === 0 && E.resolve();
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
function jm(e, t, n, s, o, r, i, l, a) {
  const c = t.suspense = rd(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    o,
    r,
    i,
    l,
    !0
  ), d = a(
    e,
    c.pendingBranch = t.ssContent,
    n,
    c,
    r,
    i
  );
  return c.deps === 0 && c.resolve(!1, !0), d;
}
function Hm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Aa(
    s ? n.default : n
  ), e.ssFallback = s ? Aa(n.fallback) : ue(De);
}
function Aa(e) {
  let t;
  if (oe(e)) {
    const n = rs && e._c;
    n && (e._d = !1, w()), e = e(), n && (e._d = !0, t = st, ld());
  }
  if (Y(e)) {
    const n = Kr(e);
    x.NODE_ENV !== "production" && !n && e.filter((s) => s !== wl).length > 0 && P("<Suspense> slots expect a single root node."), e = n;
  }
  return e = pt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function id(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : ks(e);
}
function ws(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, Wr(s, o));
}
function Um(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ie = Symbol.for("v-fgt"), sn = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), oo = [];
let st = null;
function w(e = !1) {
  oo.push(st = e ? null : []);
}
function ld() {
  oo.pop(), st = oo[oo.length - 1] || null;
}
let rs = 1;
function Ii(e, t = !1) {
  rs += e, e < 0 && st && t && (st.hasOnce = !0);
}
function ad(e) {
  return e.dynamicChildren = rs > 0 ? st || vs : null, ld(), rs > 0 && st && st.push(e), e;
}
function N(e, t, n, s, o, r) {
  return ad(
    f(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function lt(e, t, n, s, o) {
  return ad(
    ue(
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
function Ft(e, t) {
  if (x.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = zo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Mi;
function qm(e) {
  Mi = e;
}
const zm = (...e) => ud(
  ...Mi ? Mi(e, Le) : e
), cd = ({ key: e }) => e ?? null, Go = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || Ae(e) || oe(e) ? { i: Le, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, o = null, r = e === ie ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cd(t),
    ref: t && Go(t),
    scopeId: Br,
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
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Le
  };
  return l ? ($l(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), x.NODE_ENV !== "production" && a.key !== a.key && P("VNode created with invalid key (NaN). VNode type:", a.type), rs > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  st && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && st.push(a), a;
}
const ue = x.NODE_ENV !== "production" ? zm : ud;
function ud(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === wl) && (x.NODE_ENV !== "production" && !e && P(`Invalid vnode type when creating vnode: ${e}.`), e = De), rn(e)) {
    const l = Pt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $l(l, n), rs > 0 && !r && st && (l.shapeFlag & 6 ? st[st.indexOf(e)] = l : st.push(l)), l.patchFlag = -2, l;
  }
  if (_d(e) && (e = e.__vccOpts), t) {
    t = dd(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = ke(l)), me(a) && (Ss(a) && !Y(a) && (a = fe({}, a)), t.style = ht(a));
  }
  const i = le(e) ? 1 : hr(e) ? 128 : vu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return x.NODE_ENV !== "production" && i & 4 && Ss(e) && (e = ce(e), P(
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
    i,
    r,
    !0
  );
}
function dd(e) {
  return e ? Ss(e) || ju(e) ? fe({}, e) : e : null;
}
function Pt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, c = t ? pd(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && cd(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Y(r) ? r.concat(Go(t)) : [r, Go(t)] : Go(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: x.NODE_ENV !== "production" && i === -1 && Y(l) ? l.map(fd) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ie ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Pt(e.ssContent),
    ssFallback: e.ssFallback && Pt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && yn(
    d,
    a.clone(d)
  ), d;
}
function fd(e) {
  const t = Pt(e);
  return Y(e.children) && (t.children = e.children.map(fd)), t;
}
function Fe(e = " ", t = 0) {
  return ue(sn, null, e, t);
}
function is(e, t) {
  const n = ue(Mn, null, e);
  return n.staticCount = t, n;
}
function R(e = "", t = !1) {
  return t ? (w(), lt(De, null, e)) : ue(De, null, e);
}
function pt(e) {
  return e == null || typeof e == "boolean" ? ue(De) : Y(e) ? ue(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rn(e) ? On(e) : ue(sn, null, String(e));
}
function On(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pt(e);
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
      !o && !ju(t) ? t._ctx = Le : o === 3 && Le && (Le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else oe(t) ? (t = { default: t, _ctx: Le }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Fe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ke([t.class, s.class]));
      else if (o === "style")
        t.style = ht([t.style, s.style]);
      else if (vn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(Y(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function bt(e, t, n, s = null) {
  Mt(e, t, 7, [
    n,
    s
  ]);
}
const Km = Ru();
let Wm = 0;
function hd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Km, r = {
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
  return x.NODE_ENV !== "production" ? r.ctx = Uh(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Am.bind(null, r), e.ce && e.ce(r), r;
}
let Ke = null;
const at = () => Ke || Le;
let mr, Pi;
{
  const e = xo(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  mr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), Pi = t(
    "__VUE_SSR_SETTERS__",
    (n) => Os = n
  );
}
const ls = (e) => {
  const t = Ke;
  return mr(e), e.scope.on(), () => {
    e.scope.off(), mr(t);
  };
}, Ri = () => {
  Ke && Ke.scope.off(), mr(null);
}, Gm = /* @__PURE__ */ Ge("slot,component");
function Li(e, { isNativeTag: t }) {
  (Gm(e) || t(e)) && P(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function md(e) {
  return e.vnode.shapeFlag & 4;
}
let Os = !1;
function gd(e, t = !1, n = !1) {
  t && Pi(t);
  const { props: s, children: o } = e.vnode, r = md(e);
  hm(e, s, r, t), Sm(e, o, n || t);
  const i = r ? Ym(e, t) : void 0;
  return t && Pi(!1), i;
}
function Ym(e, t) {
  var n;
  const s = e.type;
  if (x.NODE_ENV !== "production") {
    if (s.name && Li(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Li(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        mu(r[i]);
    }
    s.compilerOptions && Dl() && P(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, to), x.NODE_ENV !== "production" && qh(e);
  const { setup: o } = s;
  if (o) {
    Kt();
    const r = e.setupContext = o.length > 1 ? bd(e) : null, i = ls(e), l = us(
      o,
      e,
      0,
      [
        x.NODE_ENV !== "production" ? Bt(e.props) : e.props,
        r
      ]
    ), a = Tr(l);
    if (Wt(), i(), (a || e.sp) && !In(e) && _l(e), a) {
      if (l.then(Ri, Ri), t)
        return l.then((c) => {
          Fi(e, c, t);
        }).catch((c) => {
          Bn(c, e, 0);
        });
      if (e.asyncDep = l, x.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        P(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Fi(e, l, t);
  } else
    yd(e, t);
}
function Fi(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (x.NODE_ENV !== "production" && rn(t) && P(
    "setup() should not return VNodes directly - return a render function instead."
  ), x.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = fl(t), x.NODE_ENV !== "production" && zh(e)) : x.NODE_ENV !== "production" && t !== void 0 && P(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), yd(e, n);
}
let ro, Bi;
function vd(e) {
  ro = e, Bi = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Hh));
  };
}
const Dl = () => !ro;
function yd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ro && !s.render) {
      const o = s.template || Cl(e).template;
      if (o) {
        x.NODE_ENV !== "production" && an(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, c = fe(
          fe(
            {
              isCustomElement: r,
              delimiters: l
            },
            i
          ),
          a
        );
        s.render = ro(o, c), x.NODE_ENV !== "production" && cn(e, "compile");
      }
    }
    e.render = s.render || $e, Bi && Bi(e);
  }
  {
    const o = ls(e);
    Kt();
    try {
      im(e);
    } finally {
      Wt(), o();
    }
  }
  x.NODE_ENV !== "production" && !s.render && e.render === $e && !t && (!ro && s.template ? P(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : P("Component is missing template or render function: ", s));
}
const Ia = x.NODE_ENV !== "production" ? {
  get(e, t) {
    return pr(), qe(e, "get", ""), e[t];
  },
  set() {
    return P("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return P("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return qe(e, "get", ""), e[t];
  }
};
function Jm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return qe(e, "get", "$slots"), t[n];
    }
  });
}
function bd(e) {
  const t = (n) => {
    if (x.NODE_ENV !== "production" && (e.exposed && P("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Y(n) ? s = "array" : Ae(n) && (s = "ref")), s !== "object" && P(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (x.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ia));
      },
      get slots() {
        return s || (s = Jm(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
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
      if (n in es)
        return es[n](e);
    },
    has(t, n) {
      return n in t || n in es;
    }
  })) : e.proxy;
}
const Xm = /(?:^|[-_])(\w)/g, Qm = (e) => e.replace(Xm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ts(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gr(e, t, n = !1) {
  let s = Ts(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
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
const Z = (e, t) => {
  const n = Hp(e, t, Os);
  if (x.NODE_ENV !== "production") {
    const s = at();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Qt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? me(t) && !Y(t) ? rn(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && rn(n) && (n = [n]), ue(e, t, n));
}
function Ed() {
  if (x.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!me(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Ae(u)) {
        Kt();
        const p = u.value;
        return Wt(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (mn(u))
          return [
            "div",
            {},
            ["span", e, ot(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Gt(u) ? " (readonly)" : ""}`
          ];
        if (Gt(u))
          return [
            "div",
            {},
            ["span", e, ot(u) ? "ShallowReadonly" : "Readonly"],
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
          ...r(u.$)
        ];
    }
  };
  function r(u) {
    const p = [];
    u.type.props && u.props && p.push(i("props", ce(u.props))), u.setupState !== pe && p.push(i("setup", u.setupState)), u.data !== pe && p.push(i("data", ce(u.data)));
    const m = a(u, "computed");
    m && p.push(i("computed", m));
    const g = a(u, "inject");
    return g && p.push(i("injected", g)), p.push([
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
  function i(u, p) {
    return p = fe({}, p), Object.keys(p).length ? [
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : me(u) ? ["object", { object: p ? ce(u) : u }] : ["span", n, String(u)];
  }
  function a(u, p) {
    const m = u.type;
    if (oe(m))
      return;
    const g = {};
    for (const v in u.ctx)
      c(m, v, p) && (g[v] = u.ctx[v]);
    return g;
  }
  function c(u, p, m) {
    const g = u[m];
    if (Y(g) && g.includes(p) || me(g) && p in g || u.extends && c(u.extends, p, m) || u.mixins && u.mixins.some((v) => c(v, p, m)))
      return !0;
  }
  function d(u) {
    return ot(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function Zm(e, t, n, s) {
  const o = n[s];
  if (o && wd(o, e))
    return o;
  const r = t();
  return r.memo = e.slice(), r.cacheIndex = s, n[s] = r;
}
function wd(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (dt(n[s], t[s]))
      return !1;
  return rs > 0 && st && st.push(e), !0;
}
const ji = "3.5.18", Ie = x.NODE_ENV !== "production" ? P : $e, e0 = Lr, t0 = Lt, n0 = ml, s0 = {
  createComponentInstance: hd,
  setupComponent: gd,
  renderComponentRoot: Wo,
  setCurrentRenderingInstance: po,
  isVNode: rn,
  normalizeVNode: pt,
  getComponentPublicInstance: Co,
  ensureValidVNode: Sl,
  pushWarningContext: ys,
  popWarningContext: bs
}, o0 = s0, r0 = null, i0 = null, l0 = null;
var Se = {};
let Hi;
const Ma = typeof window < "u" && window.trustedTypes;
if (Ma)
  try {
    Hi = /* @__PURE__ */ Ma.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Se.NODE_ENV !== "production" && Ie(`Error creating trusted types policy: ${e}`);
  }
const xd = Hi ? (e) => Hi.createHTML(e) : (e) => e, a0 = "http://www.w3.org/2000/svg", c0 = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Pa = dn && /* @__PURE__ */ dn.createElement("template"), u0 = {
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
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      Pa.innerHTML = xd(
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
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, wn = "transition", qs = "animation", $s = Symbol("_vtc"), Nd = {
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
}, Sd = /* @__PURE__ */ fe(
  {},
  yl,
  Nd
), d0 = (e) => (e.displayName = "Transition", e.props = Sd, e), nt = /* @__PURE__ */ d0(
  (e, { slots: t }) => Qt(wu, kd(e), t)
), qn = (e, t = []) => {
  Y(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ra = (e) => e ? Y(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function kd(e) {
  const t = {};
  for (const D in e)
    D in Nd || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: c = i,
    appearToClass: d = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, g = f0(o), v = g && g[0], T = g && g[1], {
    onBeforeEnter: C,
    onEnter: y,
    onEnterCancelled: h,
    onLeave: S,
    onLeaveCancelled: E,
    onBeforeAppear: V = C,
    onAppear: M = y,
    onAppearCancelled: $ = h
  } = t, b = (D, U, W, G) => {
    D._enterCancelled = G, Nn(D, U ? d : l), Nn(D, U ? c : i), W && W();
  }, k = (D, U) => {
    D._isLeaving = !1, Nn(D, u), Nn(D, m), Nn(D, p), U && U();
  }, A = (D) => (U, W) => {
    const G = D ? M : y, ee = () => b(U, D, W);
    qn(G, [U, ee]), La(() => {
      Nn(U, D ? a : r), Jt(U, D ? d : l), Ra(G) || Fa(U, s, v, ee);
    });
  };
  return fe(t, {
    onBeforeEnter(D) {
      qn(C, [D]), Jt(D, r), Jt(D, i);
    },
    onBeforeAppear(D) {
      qn(V, [D]), Jt(D, a), Jt(D, c);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(D, U) {
      D._isLeaving = !0;
      const W = () => k(D, U);
      Jt(D, u), D._enterCancelled ? (Jt(D, p), Ui()) : (Ui(), Jt(D, p)), La(() => {
        D._isLeaving && (Nn(D, u), Jt(D, m), Ra(S) || Fa(D, s, T, W));
      }), qn(S, [D, W]);
    },
    onEnterCancelled(D) {
      b(D, !1, void 0, !0), qn(h, [D]);
    },
    onAppearCancelled(D) {
      b(D, !0, void 0, !0), qn($, [D]);
    },
    onLeaveCancelled(D) {
      k(D), qn(E, [D]);
    }
  });
}
function f0(e) {
  if (e == null)
    return null;
  if (me(e))
    return [hi(e.enter), hi(e.leave)];
  {
    const t = hi(e);
    return [t, t];
  }
}
function hi(e) {
  const t = nr(e);
  return Se.NODE_ENV !== "production" && pl(t, "<transition> explicit duration"), t;
}
function Jt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[$s] || (e[$s] = /* @__PURE__ */ new Set())).add(t);
}
function Nn(e, t) {
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
  const o = e._endId = ++p0, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = Cd(e, t);
  if (!i)
    return s();
  const c = i + "end";
  let d = 0;
  const u = () => {
    e.removeEventListener(c, p), r();
  }, p = (m) => {
    m.target === e && ++d >= a && u();
  };
  setTimeout(() => {
    d < a && u();
  }, l + 1), e.addEventListener(c, p);
}
function Cd(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${wn}Delay`), r = s(`${wn}Duration`), i = Ba(o, r), l = s(`${qs}Delay`), a = s(`${qs}Duration`), c = Ba(l, a);
  let d = null, u = 0, p = 0;
  t === wn ? i > 0 && (d = wn, u = i, p = r.length) : t === qs ? c > 0 && (d = qs, u = c, p = a.length) : (u = Math.max(i, c), d = u > 0 ? i > c ? wn : qs : null, p = d ? d === wn ? r.length : a.length : 0);
  const m = d === wn && /\b(transform|all)(,|$)/.test(
    s(`${wn}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: p,
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
function Ui() {
  return document.body.offsetHeight;
}
function h0(e, t, n) {
  const s = e[$s];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const gr = Symbol("_vod"), Od = Symbol("_vsh"), Vl = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[gr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zs(e, t);
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
Se.NODE_ENV !== "production" && (Vl.name = "show");
function zs(e, t) {
  e.style.display = t ? e[gr] : "none", e[Od] = !t;
}
function m0() {
  Vl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Td = Symbol(Se.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function g0(e) {
  const t = at();
  if (!t) {
    Se.NODE_ENV !== "production" && Ie("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => vr(r, o));
  };
  Se.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const o = e(t.proxy);
    t.ce ? vr(t.ce, o) : qi(t.subTree, o), n(o);
  };
  El(() => {
    ks(s);
  }), Be(() => {
    nn(s, $e, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), Ct(() => o.disconnect());
  });
}
function qi(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      qi(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    vr(e.el, t);
  else if (e.type === ie)
    e.children.forEach((n) => qi(n, t));
  else if (e.type === Mn) {
    let { el: n, anchor: s } = e;
    for (; n && (vr(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function vr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const o in t) {
      const r = Lc(t[o]);
      n.setProperty(`--${o}`, r), s += `--${o}: ${r};`;
    }
    n[Td] = s;
  }
}
const v0 = /(^|;)\s*display\s*:/;
function y0(e, t, n) {
  const s = e.style, o = le(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Yo(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Yo(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Yo(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Td];
      i && (n += ";" + i), s.cssText = n, r = v0.test(n);
    }
  } else t && e.removeAttribute("style");
  gr in e && (e[gr] = r ? s.display : "", e[Od] && (s.display = "none"));
}
const b0 = /[^\\];\s*$/, Ha = /\s*!important$/;
function Yo(e, t, n) {
  if (Y(n))
    n.forEach((s) => Yo(e, t, s));
  else if (n == null && (n = ""), Se.NODE_ENV !== "production" && b0.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = _0(e, t);
    Ha.test(n) ? e.setProperty(
      tt(s),
      n.replace(Ha, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ua = ["Webkit", "Moz", "ms"], mi = {};
function _0(e, t) {
  const n = mi[t];
  if (n)
    return n;
  let s = Ce(t);
  if (s !== "filter" && s in e)
    return mi[t] = s;
  s = on(s);
  for (let o = 0; o < Ua.length; o++) {
    const r = Ua[o] + s;
    if (r in e)
      return mi[t] = r;
  }
  return t;
}
const qa = "http://www.w3.org/1999/xlink";
function za(e, t, n, s, o, r = sp(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qa, t.slice(6, t.length)) : e.setAttributeNS(qa, t, n) : n == null || r && !il(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : xt(n) ? String(n) : n
  );
}
function Ka(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? xd(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = il(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    Se.NODE_ENV !== "production" && !i && Ie(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function hn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function E0(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Wa = Symbol("_vei");
function w0(e, t, n, s, o = null) {
  const r = e[Wa] || (e[Wa] = {}), i = r[t];
  if (s && i)
    i.value = Se.NODE_ENV !== "production" ? Ya(s, t) : s;
  else {
    const [l, a] = x0(t);
    if (s) {
      const c = r[t] = k0(
        Se.NODE_ENV !== "production" ? Ya(s, t) : s,
        o
      );
      hn(e, l, c, a);
    } else i && (E0(e, l, i, a), r[t] = void 0);
  }
}
const Ga = /(?:Once|Passive|Capture)$/;
function x0(e) {
  let t;
  if (Ga.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ga); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let gi = 0;
const N0 = /* @__PURE__ */ Promise.resolve(), S0 = () => gi || (N0.then(() => gi = 0), gi = Date.now());
function k0(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Mt(
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, O0 = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? h0(e, s, i) : t === "style" ? y0(e, n, s) : vn(t) ? er(t) || w0(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : T0(e, t, s, i)) ? (Ka(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && za(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Ka(e, Ce(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), za(e, t, s, i));
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
  return Ja(t) && le(n) ? !1 : t in e;
}
const Xa = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function je(e, t, n) {
  const s = /* @__PURE__ */ bl(e, t);
  $r(s) && fe(s, t);
  class o extends Yr {
    constructor(i) {
      super(s, i, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const $0 = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ je(e, t, Fd), D0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Yr extends D0 {
  constructor(t, n = {}, s = fn) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== fn ? this._root = this.shadowRoot : (Se.NODE_ENV !== "production" && this.shadowRoot && Ie(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Yr) {
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
      const { props: r, styles: i } = s;
      let l;
      if (r && !Y(r))
        for (const a in r) {
          const c = r[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = nr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ce(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(i) : Se.NODE_ENV !== "production" && i && Ie(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    Se.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        ge(this, s) ? Se.NODE_ENV !== "production" && Ie(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => No(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = Y(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(Ce))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(r) {
          this._setProp(o, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Xa;
    const o = Ce(t);
    n && this._numberProps && this._numberProps[o] && (s = nr(s)), this._setProp(o, s, !1, !0);
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
      const r = this._ob;
      r && r.disconnect(), n === !0 ? this.setAttribute(tt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(tt(t), n + "") : n || this.removeAttribute(tt(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Ld(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ue(this._def, fe(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, Se.NODE_ENV !== "production" && (s.ceReload = (r) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const o = (r, i) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            $r(i[0]) ? fe({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (r, ...i) => {
        o(r, i), tt(r) !== r && o(tt(r), i);
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
      const r = document.createElement("style");
      if (s && r.setAttribute("nonce", s), r.textContent = t[o], this.shadowRoot.prepend(r), Se.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(n.__hmrId);
            i || this._childStyles.set(n.__hmrId, i = []), i.push(r);
          }
        } else
          (this._styles || (this._styles = [])).push(r);
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
      const o = t[s], r = o.getAttribute("name") || "default", i = this._slots[r], l = o.parentNode;
      if (i)
        for (const a of i) {
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
    if (Se.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
function zi(e) {
  const t = at(), n = t && t.ce;
  return n || (Se.NODE_ENV !== "production" && Ie(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function V0() {
  const e = Se.NODE_ENV !== "production" ? zi("useShadowRoot") : zi();
  return e && e.shadowRoot;
}
function A0(e = "$style") {
  {
    const t = at();
    if (!t)
      return Se.NODE_ENV !== "production" && Ie("useCssModule must be called inside setup()"), pe;
    const n = t.type.__cssModules;
    if (!n)
      return Se.NODE_ENV !== "production" && Ie("Current instance does not have CSS modules injected."), pe;
    const s = n[e];
    return s || (Se.NODE_ENV !== "production" && Ie(`Current instance does not have CSS module named "${e}".`), pe);
  }
}
const $d = /* @__PURE__ */ new WeakMap(), Dd = /* @__PURE__ */ new WeakMap(), yr = Symbol("_moveCb"), Qa = Symbol("_enterCb"), I0 = (e) => (delete e.props.mode, e), M0 = /* @__PURE__ */ I0({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, Sd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = at(), s = vl();
    let o, r;
    return Ur(() => {
      if (!o.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!B0(
        o[0].el,
        n.vnode.el,
        i
      )) {
        o = [];
        return;
      }
      o.forEach(R0), o.forEach(L0);
      const l = o.filter(F0);
      Ui(), l.forEach((a) => {
        const c = a.el, d = c.style;
        Jt(c, i), d.transform = d.webkitTransform = d.transitionDuration = "";
        const u = c[yr] = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", u), c[yr] = null, Nn(c, i));
        };
        c.addEventListener("transitionend", u);
      }), o = [];
    }), () => {
      const i = ce(e), l = kd(i);
      let a = i.tag || ie;
      if (o = [], r)
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          d.el && d.el instanceof Element && (o.push(d), yn(
            d,
            Cs(
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
      r = t.default ? jr(t.default()) : [];
      for (let c = 0; c < r.length; c++) {
        const d = r[c];
        d.key != null ? yn(
          d,
          Cs(d, l, s, n)
        ) : Se.NODE_ENV !== "production" && d.type !== sn && Ie("<TransitionGroup> children must be keyed.");
      }
      return ue(a, null, r);
    };
  }
}), P0 = M0;
function R0(e) {
  const t = e.el;
  t[yr] && t[yr](), t[Qa] && t[Qa]();
}
function L0(e) {
  Dd.set(e, e.el.getBoundingClientRect());
}
function F0(e) {
  const t = $d.get(e), n = Dd.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${o}px)`, r.transitionDuration = "0s", e;
  }
}
function B0(e, t, n) {
  const s = e.cloneNode(), o = e[$s];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: i } = Cd(s);
  return r.removeChild(s), i;
}
const Ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => $n(t, n) : t;
};
function j0(e) {
  e.target.composing = !0;
}
function Za(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const At = Symbol("_assign"), Fn = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[At] = Ln(o);
    const r = s || o.props && o.props.type === "number";
    hn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = tr(l)), e[At](l);
    }), n && hn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (hn(e, "compositionstart", j0), hn(e, "compositionend", Za), hn(e, "change", Za));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[At] = Ln(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? tr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, _t = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[At] = Ln(n), hn(e, "change", () => {
      const s = e._modelValue, o = Ds(e), r = e.checked, i = e[At];
      if (Y(s)) {
        const l = Vr(s, o), a = l !== -1;
        if (r && !a)
          i(s.concat(o));
        else if (!r && a) {
          const c = [...s];
          c.splice(l, 1), i(c);
        }
      } else if (cs(s)) {
        const l = new Set(s);
        r ? l.add(o) : l.delete(o), i(l);
      } else
        i(Vd(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ec,
  beforeUpdate(e, t, n) {
    e[At] = Ln(n), ec(e, t, n);
  }
};
function ec(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (Y(t))
    o = Vr(t, s.props.value) > -1;
  else if (cs(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Rn(t, Vd(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Al = {
  created(e, { value: t }, n) {
    e.checked = Rn(t, n.props.value), e[At] = Ln(n), hn(e, "change", () => {
      e[At](Ds(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[At] = Ln(s), t !== n && (e.checked = Rn(t, s.props.value));
  }
}, Oo = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = cs(t);
    hn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? tr(Ds(i)) : Ds(i)
      );
      e[At](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ls(() => {
        e._assigning = !1;
      });
    }), e[At] = Ln(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    tc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[At] = Ln(n);
  },
  updated(e, { value: t }) {
    e._assigning || tc(e, t);
  }
};
function tc(e, t) {
  const n = e.multiple, s = Y(t);
  if (n && !s && !cs(t)) {
    Se.NODE_ENV !== "production" && Ie(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = Ds(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((c) => String(c) === String(l)) : i.selected = Vr(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (Rn(Ds(i), t)) {
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
    Bo(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Bo(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Bo(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Bo(e, t, n, s, "updated");
  }
};
function Id(e, t) {
  switch (e) {
    case "SELECT":
      return Oo;
    case "TEXTAREA":
      return Fn;
    default:
      switch (t) {
        case "checkbox":
          return _t;
        case "radio":
          return Al;
        default:
          return Fn;
      }
  }
}
function Bo(e, t, n, s, o) {
  const i = Id(
    e.tagName,
    n.props && n.props.type
  )[o];
  i && i(e, t, n, s);
}
function H0() {
  Fn.getSSRProps = ({ value: e }) => ({ value: e }), Al.getSSRProps = ({ value: e }, t) => {
    if (t.props && Rn(t.props.value, e))
      return { checked: !0 };
  }, _t.getSSRProps = ({ value: e }, t) => {
    if (Y(e)) {
      if (t.props && Vr(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (cs(e)) {
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
}, qt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = q0[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  });
}, z0 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, br = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = tt(o.key);
    if (t.some(
      (i) => i === r || z0[i] === r
    ))
      return e(o);
  });
}, Md = /* @__PURE__ */ fe({ patchProp: O0 }, u0);
let io, nc = !1;
function Pd() {
  return io || (io = Wu(Md));
}
function Rd() {
  return io = nc ? io : Gu(Md), nc = !0, io;
}
const Ld = (...e) => {
  Pd().render(...e);
}, K0 = (...e) => {
  Rd().hydrate(...e);
}, fn = (...e) => {
  const t = Pd().createApp(...e);
  Se.NODE_ENV !== "production" && (jd(t), Hd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Ud(s);
    if (!o) return;
    const r = t._component;
    !oe(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Bd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
}, Fd = (...e) => {
  const t = Rd().createApp(...e);
  Se.NODE_ENV !== "production" && (jd(t), Hd(t));
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
  if (le(e)) {
    const t = document.querySelector(e);
    return Se.NODE_ENV !== "production" && !t && Ie(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Se.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ie(
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
  Fragment: ie,
  KeepAlive: Mh,
  ReactiveEffect: ao,
  Static: Mn,
  Suspense: Lm,
  Teleport: bn,
  Text: sn,
  TrackOpTypes: Up,
  Transition: nt,
  TransitionGroup: P0,
  TriggerOpTypes: qp,
  VueElement: Yr,
  assertNumber: pl,
  callWithAsyncErrorHandling: Mt,
  callWithErrorHandling: us,
  camelize: Ce,
  capitalize: on,
  cloneVNode: Pt,
  compatUtils: i0,
  computed: Z,
  createApp: fn,
  createBlock: lt,
  createCommentVNode: R,
  createElementBlock: N,
  createElementVNode: f,
  createHydrationRenderer: Gu,
  createPropsRestProxy: sm,
  createRenderer: Wu,
  createSSRApp: Fd,
  createSlots: Bh,
  createStaticVNode: is,
  createTextVNode: Fe,
  createVNode: ue,
  customRef: ru,
  defineAsyncComponent: Ah,
  defineComponent: bl,
  defineCustomElement: je,
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
  getCurrentInstance: at,
  getCurrentScope: al,
  getCurrentWatcher: zp,
  getTransitionRawChildren: jr,
  guardReactiveProps: dd,
  h: Qt,
  handleError: Bn,
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
  isProxy: Ss,
  isReactive: mn,
  isReadonly: Gt,
  isRef: Ae,
  isRuntimeOnly: Dl,
  isShallow: ot,
  isVNode: rn,
  markRaw: nu,
  mergeDefaults: tm,
  mergeModels: nm,
  mergeProps: pd,
  nextTick: Ls,
  normalizeClass: ke,
  normalizeProps: Xf,
  normalizeStyle: ht,
  onActivated: Cu,
  onBeforeMount: $u,
  onBeforeUnmount: qr,
  onBeforeUpdate: El,
  onDeactivated: Ou,
  onErrorCaptured: Iu,
  onMounted: Be,
  onRenderTracked: Au,
  onRenderTriggered: Vu,
  onScopeDispose: Fc,
  onServerPrefetch: Du,
  onUnmounted: Ct,
  onUpdated: Ur,
  onWatcherCleanup: lu,
  openBlock: w,
  popScopeId: ph,
  provide: Lu,
  proxyRefs: fl,
  pushScopeId: fh,
  queuePostFlushCb: ks,
  reactive: Ns,
  readonly: Pr,
  ref: q,
  registerRuntimeCompiler: vd,
  render: Ld,
  renderList: be,
  renderSlot: jn,
  resolveComponent: Lh,
  resolveDirective: Fh,
  resolveDynamicComponent: xl,
  resolveFilter: r0,
  resolveTransitionHooks: Cs,
  setBlockTracking: Ii,
  setDevtoolsHook: n0,
  setTransitionHooks: yn,
  shallowReactive: tu,
  shallowReadonly: Bt,
  shallowRef: su,
  ssrContextKey: Qu,
  ssrUtils: o0,
  stop: pp,
  toDisplayString: H,
  toHandlerKey: en,
  toHandlers: jh,
  toRaw: ce,
  toRef: Bp,
  toRefs: Rp,
  toValue: Ip,
  transformVNodeArgs: qm,
  triggerRef: Ap,
  unref: No,
  useAttrs: em,
  useCssModule: A0,
  useCssVars: g0,
  useHost: zi,
  useId: vh,
  useModel: Vm,
  useSSRContext: Zu,
  useShadowRoot: V0,
  useSlots: Zh,
  useTemplateRef: yh,
  useTransitionState: vl,
  vModelCheckbox: _t,
  vModelDynamic: Ad,
  vModelRadio: Al,
  vModelSelect: Oo,
  vModelText: Fn,
  vShow: Vl,
  version: ji,
  warn: Ie,
  watch: nn,
  watchEffect: Tm,
  watchPostEffect: $m,
  watchSyncEffect: ed,
  withAsyncContext: om,
  withCtx: Me,
  withDefaults: Qh,
  withDirectives: Ue,
  withKeys: br,
  withMemo: Zm,
  withModifiers: qt,
  withScopeId: hh
}, Symbol.toStringTag, { value: "Module" }));
var J = {};
const go = Symbol(J.NODE_ENV !== "production" ? "Fragment" : ""), lo = Symbol(J.NODE_ENV !== "production" ? "Teleport" : ""), Il = Symbol(J.NODE_ENV !== "production" ? "Suspense" : ""), _r = Symbol(J.NODE_ENV !== "production" ? "KeepAlive" : ""), qd = Symbol(
  J.NODE_ENV !== "production" ? "BaseTransition" : ""
), as = Symbol(J.NODE_ENV !== "production" ? "openBlock" : ""), zd = Symbol(J.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  J.NODE_ENV !== "production" ? "createElementBlock" : ""
), Ml = Symbol(J.NODE_ENV !== "production" ? "createVNode" : ""), Pl = Symbol(
  J.NODE_ENV !== "production" ? "createElementVNode" : ""
), To = Symbol(
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
), Ul = Symbol(J.NODE_ENV !== "production" ? "renderList" : ""), Gd = Symbol(J.NODE_ENV !== "production" ? "renderSlot" : ""), Yd = Symbol(J.NODE_ENV !== "production" ? "createSlots" : ""), Jr = Symbol(
  J.NODE_ENV !== "production" ? "toDisplayString" : ""
), Er = Symbol(J.NODE_ENV !== "production" ? "mergeProps" : ""), ql = Symbol(
  J.NODE_ENV !== "production" ? "normalizeClass" : ""
), zl = Symbol(
  J.NODE_ENV !== "production" ? "normalizeStyle" : ""
), vo = Symbol(
  J.NODE_ENV !== "production" ? "normalizeProps" : ""
), $o = Symbol(
  J.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Kl = Symbol(J.NODE_ENV !== "production" ? "toHandlers" : ""), Ki = Symbol(J.NODE_ENV !== "production" ? "camelize" : ""), Y0 = Symbol(J.NODE_ENV !== "production" ? "capitalize" : ""), Wi = Symbol(
  J.NODE_ENV !== "production" ? "toHandlerKey" : ""
), wr = Symbol(
  J.NODE_ENV !== "production" ? "setBlockTracking" : ""
), J0 = Symbol(J.NODE_ENV !== "production" ? "pushScopeId" : ""), X0 = Symbol(J.NODE_ENV !== "production" ? "popScopeId" : ""), Wl = Symbol(J.NODE_ENV !== "production" ? "withCtx" : ""), Q0 = Symbol(J.NODE_ENV !== "production" ? "unref" : ""), Z0 = Symbol(J.NODE_ENV !== "production" ? "isRef" : ""), Gl = Symbol(J.NODE_ENV !== "production" ? "withMemo" : ""), Jd = Symbol(J.NODE_ENV !== "production" ? "isMemoSame" : ""), Vs = {
  [go]: "Fragment",
  [lo]: "Teleport",
  [Il]: "Suspense",
  [_r]: "KeepAlive",
  [qd]: "BaseTransition",
  [as]: "openBlock",
  [zd]: "createBlock",
  [Kd]: "createElementBlock",
  [Ml]: "createVNode",
  [Pl]: "createElementVNode",
  [To]: "createCommentVNode",
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
  [Jr]: "toDisplayString",
  [Er]: "mergeProps",
  [ql]: "normalizeClass",
  [zl]: "normalizeStyle",
  [vo]: "normalizeProps",
  [$o]: "guardReactiveProps",
  [Kl]: "toHandlers",
  [Ki]: "camelize",
  [Y0]: "capitalize",
  [Wi]: "toHandlerKey",
  [wr]: "setBlockTracking",
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
const Ot = {
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
    loc: Ot
  };
}
function yo(e, t, n, s, o, r, i, l = !1, a = !1, c = !1, d = Ot) {
  return e && (l ? (e.helper(as), e.helper(Ms(e.inSSR, c))) : e.helper(Is(e.inSSR, c)), i && e.helper(Hl)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: o,
    dynamicProps: r,
    directives: i,
    isBlock: l,
    disableTracking: a,
    isComponent: c,
    loc: d
  };
}
function ns(e, t = Ot) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Vt(e, t = Ot) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Pe(e, t) {
  return {
    type: 16,
    loc: Ot,
    key: le(e) ? de(e, !0) : e,
    value: t
  };
}
function de(e, t = !1, n = Ot, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function zt(e, t = Ot) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function ze(e, t = [], n = Ot) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function As(e, t = void 0, n = !1, s = !1, o = Ot) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: o
  };
}
function Gi(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: Ot
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
    loc: Ot
  };
}
function sg(e) {
  return {
    type: 21,
    body: e,
    loc: Ot
  };
}
function Is(e, t) {
  return e || t ? Ml : Pl;
}
function Ms(e, t) {
  return e || t ? zd : Kd;
}
function Yl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Is(s, e.isComponent)), t(as), t(Ms(s, e.isComponent)));
}
const oc = new Uint8Array([123, 123]), rc = new Uint8Array([125, 125]);
function ic(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function St(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function xn(e) {
  return e === 47 || e === 62 || St(e);
}
function xr(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ye = {
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
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = oc, this.delimiterClose = rc, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = oc, this.delimiterClose = rc;
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
      const r = this.newlines[o];
      if (t > r) {
        n = o + 2, s = t - r;
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
      xn(t)
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
      if (t === 62 || St(t)) {
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
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ye.TitleEnd || this.currentSequence === Ye.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ye.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ye.Cdata.length && (this.state = 28, this.currentSequence = Ye.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
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
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ye.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
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
    xn(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (xn(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(xr("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    St(t) || (t === 62 ? (J.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = ic(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || St(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, J.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : St(t) || (J.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : St(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || xn(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : J.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || xn(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || xn(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || xn(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), J.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || xn(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : St(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : St(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
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
    St(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (J.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
    t === 45 ? (this.state = 28, this.currentSequence = Ye.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Ye.ScriptEnd[3] ? this.startSpecial(Ye.ScriptEnd, 4) : t === Ye.StyleEnd[3] ? this.startSpecial(Ye.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Ye.TitleEnd[3] ? this.startSpecial(Ye.TitleEnd, 4) : t === Ye.TextareaEnd[3] ? this.startSpecial(Ye.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
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
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ye.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const rg = {
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
function Yi(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function Pn(e, t) {
  const n = Yi("MODE", t), s = Yi(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Ps(e, t, n, ...s) {
  const o = Pn(e, t);
  return J.NODE_ENV !== "production" && o && Nr(e, t, n, ...s), o;
}
function Nr(e, t, n, ...s) {
  if (Yi(e, t) === "suppress-warning")
    return;
  const { message: r, link: i } = rg[e], l = `(deprecation ${e}) ${typeof r == "function" ? r(...s) : r}${i ? `
  Details: ${i}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Jl(e) {
  throw e;
}
function Xd(e) {
  J.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Ne(e, t, n, s) {
  const o = J.NODE_ENV !== "production" ? (n || ig)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(o));
  return r.code = e, r.loc = t, r;
}
const ig = {
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
}, wt = (e) => e.type === 4 && e.isStatic;
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
      return _r;
    case "BaseTransition":
    case "base-transition":
      return qd;
  }
}
const lg = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Xl = (e) => !lg.test(e), ag = /[A-Za-z_$\xA0-\uFFFF]/, cg = /[\.\?\w$\xA0-\uFFFF]/, ug = /\s+[.[]\s*|\s*[.[]\s+/g, Zd = (e) => e.type === 4 ? e.content : e.loc.source, dg = (e) => {
  const t = Zd(e).trim().replace(ug, (l) => l.trim());
  let n = 0, s = [], o = 0, r = 0, i = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, r++;
        else if (!(l === 0 ? ag : cg).test(a))
          return !1;
        break;
      case 1:
        a === "'" || a === '"' || a === "`" ? (s.push(n), n = 3, i = a) : a === "[" ? o++ : a === "]" && (--o || (n = s.pop()));
        break;
      case 2:
        if (a === "'" || a === '"' || a === "`")
          s.push(n), n = 3, i = a;
        else if (a === "(")
          r++;
        else if (a === ")") {
          if (l === t.length - 1)
            return !1;
          --r || (n = s.pop());
        }
        break;
      case 3:
        a === i && (n = s.pop(), i = null);
        break;
    }
  }
  return !o && !r;
}, ef = dg, fg = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, pg = (e) => fg.test(Zd(e)), hg = pg;
function lc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function Et(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 7 && (n || o.exp) && (le(t) ? o.name === t : t.test(o.name)))
      return o;
  }
}
function bo(e, t, n = !1, s = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const r = e.props[o];
    if (r.type === 6) {
      if (n) continue;
      if (r.name === t && (r.value || s))
        return r;
    } else if (r.name === "bind" && (r.exp || s) && Vn(r.arg, t))
      return r;
  }
}
function Vn(e, t) {
  return !!(e && wt(e) && e.content === t);
}
function mg(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function vi(e) {
  return e.type === 5 || e.type === 2;
}
function ac(e) {
  return e.type === 7 && e.name === "pre";
}
function gg(e) {
  return e.type === 7 && e.name === "slot";
}
function Sr(e) {
  return e.type === 1 && e.tagType === 3;
}
function kr(e) {
  return e.type === 1 && e.tagType === 2;
}
const vg = /* @__PURE__ */ new Set([vo, $o]);
function tf(e, t = []) {
  if (e && !le(e) && e.type === 14) {
    const n = e.callee;
    if (!le(n) && vg.has(n))
      return tf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Cr(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], r = [], i;
  if (o && !le(o) && o.type === 14) {
    const l = tf(o);
    o = l[0], r = l[1], i = r[r.length - 1];
  }
  if (o == null || le(o))
    s = Vt([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !le(l) && l.type === 15 ? cc(t, l) || l.properties.unshift(t) : o.callee === Kl ? s = ze(n.helper(Er), [
      Vt([t]),
      o
    ]) : o.arguments.unshift(Vt([t])), !s && (s = o);
  } else o.type === 15 ? (cc(t, o) || o.properties.unshift(t), s = o) : (s = ze(n.helper(Er), [
    Vt([t]),
    o
  ]), i && i.callee === $o && (i = r[r.length - 2]));
  e.type === 13 ? i ? i.arguments[0] = s : e.props = s : i ? i.arguments[0] = s : e.arguments[2] = s;
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
let ve = nf, Eo = null, gn = "", et = null, he = null, yt = "", un = -1, zn = -1, Ql = 0, Tn = !1, Ji = null;
const Ve = [], Te = new og(Ve, {
  onerr: vt,
  ontext(e, t) {
    jo(Je(e, t), e, t);
  },
  ontextentity(e, t, n) {
    jo(e, t, n);
  },
  oninterpolation(e, t) {
    if (Tn)
      return jo(Je(e, t), e, t);
    let n = e + Te.delimiterOpen.length, s = t - Te.delimiterClose.length;
    for (; St(gn.charCodeAt(n)); )
      n++;
    for (; St(gn.charCodeAt(s - 1)); )
      s--;
    let o = Je(n, s);
    o.includes("&") && (o = ve.decodeEntities(o, !1)), Xi({
      type: 5,
      content: Xo(o, !1, Re(n, s)),
      loc: Re(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Je(e, t);
    et = {
      type: 1,
      tag: n,
      ns: ve.getNamespace(n, Ve[0], ve.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Re(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    dc(e);
  },
  onclosetag(e, t) {
    const n = Je(e, t);
    if (!ve.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < Ve.length; o++)
        if (Ve[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && vt(24, Ve[0].loc.start.offset);
          for (let i = 0; i <= o; i++) {
            const l = Ve.shift();
            Jo(l, t, i < o);
          }
          break;
        }
      s || vt(23, sf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = et.tag;
    et.isSelfClosing = !0, dc(e), Ve[0] && Ve[0].tag === t && Jo(Ve.shift(), e);
  },
  onattribname(e, t) {
    he = {
      type: 6,
      name: Je(e, t),
      nameLoc: Re(e, t),
      value: void 0,
      loc: Re(e)
    };
  },
  ondirname(e, t) {
    const n = Je(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!Tn && s === "" && vt(26, e), Tn || s === "")
      he = {
        type: 6,
        name: n,
        nameLoc: Re(e, t),
        value: void 0,
        loc: Re(e)
      };
    else if (he = {
      type: 7,
      name: s,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [de("prop")] : [],
      loc: Re(e)
    }, s === "pre") {
      Tn = Te.inVPre = !0, Ji = et;
      const o = et.props;
      for (let r = 0; r < o.length; r++)
        o[r].type === 7 && (o[r] = $g(o[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Je(e, t);
    if (Tn && !ac(he))
      he.name += n, Gn(he.nameLoc, t);
    else {
      const s = n[0] !== "[";
      he.arg = Xo(
        s ? n : n.slice(1, -1),
        s,
        Re(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Je(e, t);
    if (Tn && !ac(he))
      he.name += "." + n, Gn(he.nameLoc, t);
    else if (he.name === "slot") {
      const s = he.arg;
      s && (s.content += "." + n, Gn(s.loc, t));
    } else {
      const s = de(n, !0, Re(e, t));
      he.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    yt += Je(e, t), un < 0 && (un = e), zn = t;
  },
  onattribentity(e, t, n) {
    yt += e, un < 0 && (un = t), zn = n;
  },
  onattribnameend(e) {
    const t = he.loc.start.offset, n = Je(t, e);
    he.type === 7 && (he.rawName = n), et.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && vt(2, t);
  },
  onattribend(e, t) {
    if (et && he) {
      if (Gn(he.loc, t), e !== 0)
        if (yt.includes("&") && (yt = ve.decodeEntities(
          yt,
          !0
        )), he.type === 6)
          he.name === "class" && (yt = rf(yt).trim()), e === 1 && !yt && vt(13, t), he.value = {
            type: 2,
            content: yt,
            loc: e === 1 ? Re(un, zn) : Re(un - 1, zn + 1)
          }, Te.inSFCRoot && et.tag === "template" && he.name === "lang" && yt && yt !== "html" && Te.enterRCDATA(xr("</template"), 0);
        else {
          let n = 0;
          he.exp = Xo(
            yt,
            !1,
            Re(un, zn),
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
      (he.type !== 7 || he.name !== "pre") && et.props.push(he);
    }
    yt = "", un = zn = -1;
  },
  oncomment(e, t) {
    ve.comments && Xi({
      type: 3,
      content: Je(e, t),
      loc: Re(e - 4, t + 3)
    });
  },
  onend() {
    const e = gn.length;
    if (J.NODE_ENV !== "production" && Te.state !== 1)
      switch (Te.state) {
        case 5:
        case 8:
          vt(5, e);
          break;
        case 3:
        case 4:
          vt(
            25,
            Te.sectionStart
          );
          break;
        case 28:
          Te.currentSequence === Ye.CdataEnd ? vt(6, e) : vt(7, e);
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
          vt(9, e);
          break;
      }
    for (let t = 0; t < Ve.length; t++)
      Jo(Ve[t], e - 1), vt(24, Ve[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ve[0].ns !== 0 ? jo(Je(e, t), e, t) : vt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ve[0] ? Ve[0].ns : ve.ns) === 0 && vt(
      21,
      e - 1
    );
  }
}), uc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, _g = /^\(|\)$/g;
function Eg(e) {
  const t = e.loc, n = e.content, s = n.match(bg);
  if (!s) return;
  const [, o, r] = s, i = (u, p, m = !1) => {
    const g = t.start.offset + p, v = g + u.length;
    return Xo(
      u,
      !1,
      Re(g, v),
      0,
      m ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: i(r.trim(), n.indexOf(r, o.length)),
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
    let p;
    if (u && (p = n.indexOf(u, c + a.length), l.key = i(u, p, !0)), d[2]) {
      const m = d[2].trim();
      m && (l.index = i(
        m,
        n.indexOf(
          m,
          l.key ? p + u.length : c + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = i(a, c, !0)), l;
}
function Je(e, t) {
  return gn.slice(e, t);
}
function dc(e) {
  Te.inSFCRoot && (et.innerLoc = Re(e + 1, e + 1)), Xi(et);
  const { tag: t, ns: n } = et;
  n === 0 && ve.isPreTag(t) && Ql++, ve.isVoidTag(t) ? Jo(et, e) : (Ve.unshift(et), (n === 1 || n === 2) && (Te.inXML = !0)), et = null;
}
function jo(e, t, n) {
  {
    const r = Ve[0] && Ve[0].tag;
    r !== "script" && r !== "style" && e.includes("&") && (e = ve.decodeEntities(e, !1));
  }
  const s = Ve[0] || Eo, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Gn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Re(t, n)
  });
}
function Jo(e, t, n = !1) {
  n ? Gn(e.loc, sf(t, 60)) : Gn(e.loc, wg(t, 62) + 1), Te.inSFCRoot && (e.children.length ? e.innerLoc.end = fe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = fe({}, e.innerLoc.start), e.innerLoc.source = Je(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: r } = e;
  if (Tn || (s === "slot" ? e.tagType = 2 : fc(e) ? e.tagType = 3 : Ng(e) && (e.tagType = 1)), Te.inRCDATA || (e.children = of(r)), o === 0 && ve.isIgnoreNewlineTag(s)) {
    const i = r[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ve.isPreTag(s) && Ql--, Ji === e && (Tn = Te.inVPre = !1, Ji = null), Te.inXML && (Ve[0] ? Ve[0].ns : ve.ns) === 0 && (Te.inXML = !1);
  {
    const i = e.props;
    if (J.NODE_ENV !== "production" && Pn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ve
    )) {
      let a = !1, c = !1;
      for (let d = 0; d < i.length; d++) {
        const u = i[d];
        if (u.type === 7 && (u.name === "if" ? a = !0 : u.name === "for" && (c = !0)), a && c) {
          Nr(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ve,
            e.loc
          );
          break;
        }
      }
    }
    if (!Te.inSFCRoot && Pn(
      "COMPILER_NATIVE_TEMPLATE",
      ve
    ) && e.tag === "template" && !fc(e)) {
      J.NODE_ENV !== "production" && Nr(
        "COMPILER_NATIVE_TEMPLATE",
        ve,
        e.loc
      );
      const a = Ve[0] || Eo, c = a.children.indexOf(e);
      a.children.splice(c, 1, ...e.children);
    }
    const l = i.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Ps(
      "COMPILER_INLINE_TEMPLATE",
      ve,
      l.loc
    ) && e.children.length && (l.value = {
      type: 2,
      content: Je(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function wg(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n < gn.length - 1; ) n++;
  return n;
}
function sf(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const xg = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function fc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && xg.has(t[n].name))
        return !0;
  }
  return !1;
}
function Ng({ tag: e, props: t }) {
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
      s.name === "bind" && Vn(s.arg, "is") && Ps(
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
        const r = e[s - 1] && e[s - 1].type, i = e[s + 1] && e[s + 1].type;
        !r || !i || t && (r === 3 && (i === 3 || i === 1) || r === 1 && (i === 3 || i === 1 && Og(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = rf(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function Cg(e) {
  for (let t = 0; t < e.length; t++)
    if (!St(e.charCodeAt(t)))
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
    St(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Xi(e) {
  (Ve[0] || Eo).children.push(e);
}
function Re(e, t) {
  return {
    start: Te.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : Te.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Je(e, t)
  };
}
function Tg(e) {
  return Re(e.start.offset, e.end.offset);
}
function Gn(e, t) {
  e.end = Te.getPos(t), e.source = Je(e.start.offset, t);
}
function $g(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Re(
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
function Xo(e, t = !1, n, s = 0, o = 0) {
  return de(e, t, n, s);
}
function vt(e, t, n) {
  ve.onError(
    Ne(e, Re(t, t), void 0, n)
  );
}
function Dg() {
  Te.reset(), et = null, he = null, yt = "", un = -1, zn = -1, Ve.length = 0;
}
function Vg(e, t) {
  if (Dg(), gn = e, ve = fe({}, nf), t) {
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
  n && (Te.delimiterOpen = xr(n[0]), Te.delimiterClose = xr(n[1]));
  const s = Eo = tg([], e);
  return Te.parse(gn), s.loc = Re(0, e.length), s.children = of(s.children), Eo = null, s;
}
function Ag(e, t) {
  Qo(
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
  return t.length === 1 && t[0].type === 1 && !kr(t[0]) ? t[0] : null;
}
function Qo(e, t, n, s = !1, o = !1) {
  const { children: r } = e, i = [];
  for (let u = 0; u < r.length; u++) {
    const p = r[u];
    if (p.type === 1 && p.tagType === 0) {
      const m = s ? 0 : kt(p, n);
      if (m > 0) {
        if (m >= 2) {
          p.codegenNode.patchFlag = -1, i.push(p);
          continue;
        }
      } else {
        const g = p.codegenNode;
        if (g.type === 13) {
          const v = g.patchFlag;
          if ((v === void 0 || v === 512 || v === 1) && cf(p, n) >= 2) {
            const T = uf(p);
            T && (g.props = n.hoist(T));
          }
          g.dynamicProps && (g.dynamicProps = n.hoist(g.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : kt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (J.NODE_ENV !== "production" ? ` /* ${Qs[-1]} */` : "")
      ), i.push(p);
      continue;
    }
    if (p.type === 1) {
      const m = p.tagType === 1;
      m && n.scopes.vSlot++, Qo(p, e, n, !1, o), m && n.scopes.vSlot--;
    } else if (p.type === 11)
      Qo(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let m = 0; m < p.branches.length; m++)
        Qo(
          p.branches[m],
          e,
          n,
          p.branches[m].children.length === 1,
          o
        );
  }
  let l = !1;
  const a = [];
  if (i.length === r.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && Y(e.codegenNode.children))
      e.codegenNode.children = c(
        ns(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Y(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = d(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = c(
        ns(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Y(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = Et(e, "slot", !0), p = u && u.arg && d(t.codegenNode, u.arg);
      p && (a.push(n.cached.length), p.returns = c(
        ns(p.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const u of i)
      a.push(n.cached.length), u.codegenNode = n.cache(u.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Y(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Pe(
      "__",
      de(JSON.stringify(a), !1)
    )
  );
  function c(u) {
    const p = n.cache(u);
    return o && n.hmr && (p.needArraySpread = !0), p;
  }
  function d(u, p) {
    if (u.children && !Y(u.children) && u.children.type === 15) {
      const m = u.children.properties.find(
        (g) => g.key === p || g.key.content === p
      );
      return m && m.value;
    }
  }
  i.length && n.transformHoist && n.transformHoist(r, n, e);
}
function kt(e, t) {
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
        let i = 3;
        const l = cf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < i && (i = l);
        for (let a = 0; a < e.children.length; a++) {
          const c = kt(e.children[a], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < i && (i = c);
        }
        if (i > 1)
          for (let a = 0; a < e.props.length; a++) {
            const c = e.props[a];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const d = kt(c.exp, t);
              if (d === 0)
                return n.set(e, 0), 0;
              d < i && (i = d);
            }
          }
        if (o.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(as), t.removeHelper(
            Ms(t.inSSR, o.isComponent)
          ), o.isBlock = !1, t.helper(Is(t.inSSR, o.isComponent));
        }
        return n.set(e, i), i;
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
      return kt(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let r = 3;
      for (let i = 0; i < e.children.length; i++) {
        const l = e.children[i];
        if (le(l) || xt(l))
          continue;
        const a = kt(l, t);
        if (a === 0)
          return 0;
        a < r && (r = a);
      }
      return r;
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
  $o
]);
function af(e, t) {
  if (e.type === 14 && !le(e.callee) && Ig.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return kt(n, t);
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
    for (let r = 0; r < o.length; r++) {
      const { key: i, value: l } = o[r], a = kt(i, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let c;
      if (l.type === 4 ? c = kt(l, t) : l.type === 14 ? c = af(l, t) : c = 0, c === 0)
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
  cacheHandlers: r = !1,
  nodeTransforms: i = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: c = $e,
  isCustomElement: d = $e,
  expressionPlugins: u = [],
  scopeId: p = null,
  slotted: m = !0,
  ssr: g = !1,
  inSSR: v = !1,
  ssrCssVars: T = "",
  bindingMetadata: C = pe,
  inline: y = !1,
  isTS: h = !1,
  onError: S = Jl,
  onWarn: E = Xd,
  compatConfig: V
}) {
  const M = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), $ = {
    // options
    filename: t,
    selfName: M && on(Ce(M[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: o,
    cacheHandlers: r,
    nodeTransforms: i,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: c,
    isCustomElement: d,
    expressionPlugins: u,
    scopeId: p,
    slotted: m,
    ssr: g,
    inSSR: v,
    ssrCssVars: T,
    bindingMetadata: C,
    inline: y,
    isTS: h,
    onError: S,
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
      const k = $.helpers.get(b) || 0;
      return $.helpers.set(b, k + 1), b;
    },
    removeHelper(b) {
      const k = $.helpers.get(b);
      if (k) {
        const A = k - 1;
        A ? $.helpers.set(b, A) : $.helpers.delete(b);
      }
    },
    helperString(b) {
      return `_${Vs[$.helper(b)]}`;
    },
    replaceNode(b) {
      if (J.NODE_ENV !== "production") {
        if (!$.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!$.parent)
          throw new Error("Cannot replace root node.");
      }
      $.parent.children[$.childIndex] = $.currentNode = b;
    },
    removeNode(b) {
      if (J.NODE_ENV !== "production" && !$.parent)
        throw new Error("Cannot remove root node.");
      const k = $.parent.children, A = b ? k.indexOf(b) : $.currentNode ? $.childIndex : -1;
      if (J.NODE_ENV !== "production" && A < 0)
        throw new Error("node being removed is not a child of current parent");
      !b || b === $.currentNode ? ($.currentNode = null, $.onNodeRemoved()) : $.childIndex > A && ($.childIndex--, $.onNodeRemoved()), $.parent.children.splice(A, 1);
    },
    onNodeRemoved: $e,
    addIdentifiers(b) {
    },
    removeIdentifiers(b) {
    },
    hoist(b) {
      le(b) && (b = de(b)), $.hoists.push(b);
      const k = de(
        `_hoisted_${$.hoists.length}`,
        !1,
        b.loc,
        2
      );
      return k.hoisted = b, k;
    },
    cache(b, k = !1, A = !1) {
      const D = ng(
        $.cached.length,
        b,
        k,
        A
      );
      return $.cached.push(D), D;
    }
  };
  return $.filters = /* @__PURE__ */ new Set(), $;
}
function Pg(e, t) {
  const n = Mg(e, t);
  Xr(e, n), t.hoistStatic && Ag(e, n), t.ssr || Rg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Rg(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const o = lf(e);
    if (o && o.codegenNode) {
      const r = o.codegenNode;
      r.type === 13 && Yl(r, t), e.codegenNode = r;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let o = 64;
    J.NODE_ENV !== "production" && s.filter((r) => r.type !== 3).length === 1 && (o |= 2048), e.codegenNode = yo(
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
    le(o) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Xr(o, t));
  }
}
function Xr(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let r = 0; r < n.length; r++) {
    const i = n[r](e, t);
    if (i && (Y(i) ? s.push(...i) : s.push(i)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(To);
      break;
    case 5:
      t.ssr || t.helper(Jr);
      break;
    case 9:
      for (let r = 0; r < e.branches.length; r++)
        Xr(e.branches[r], t);
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
  const n = le(e) ? (s) => s === e : (s) => e.test(s);
  return (s, o) => {
    if (s.type === 1) {
      const { props: r } = s;
      if (s.tagType === 3 && r.some(gg))
        return;
      const i = [];
      for (let l = 0; l < r.length; l++) {
        const a = r[l];
        if (a.type === 7 && n(a.name)) {
          r.splice(l, 1), l--;
          const c = t(s, a, o);
          c && i.push(c);
        }
      }
      return i;
    }
  };
}
const Qr = "/*@__PURE__*/", ff = (e) => `${Vs[e]}: _${Vs[e]}`;
function Fg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: o = "template.vue.html",
  scopeId: r = null,
  optimizeImports: i = !1,
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
    scopeId: r,
    optimizeImports: i,
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
    helper(v) {
      return `_${Vs[v]}`;
    },
    push(v, T = -2, C) {
      m.code += v;
    },
    indent() {
      g(++m.indentLevel);
    },
    deindent(v = !1) {
      v ? --m.indentLevel : g(--m.indentLevel);
    },
    newline() {
      g(m.indentLevel);
    }
  };
  function g(v) {
    m.push(
      `
` + "  ".repeat(v),
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
    prefixIdentifiers: r,
    indent: i,
    deindent: l,
    newline: a,
    scopeId: c,
    ssr: d
  } = n, u = Array.from(e.helpers), p = u.length > 0, m = !r && s !== "module";
  jg(e, n);
  const v = d ? "ssrRender" : "render", C = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${v}(${C}) {`), i(), m && (o("with (_ctx) {"), i(), p && (o(
    `const { ${u.map(ff).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (yi(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (yi(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), yi(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let y = 0; y < e.temps; y++)
      o(`${y > 0 ? ", " : ""}_temp${y}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), d || o("return "), e.codegenNode ? rt(e.codegenNode, n) : o("null"), m && (l(), o("}")), l(), o("}"), {
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
    newline: r,
    runtimeModuleName: i,
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
      To,
      Rl,
      Wd
    ].filter((p) => d.includes(p)).map(ff).join(", ");
    o(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  Hg(e.hoists, t), r(), o("return ");
}
function yi(e, t, { helper: n, push: s, newline: o, isTS: r }) {
  const i = n(
    t === "filter" ? jl : t === "component" ? Ll : Bl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const c = a.endsWith("__self");
    c && (a = a.slice(0, -6)), s(
      `const ${_o(a, t)} = ${i}(${JSON.stringify(a)}${c ? ", true" : ""})${r ? "!" : ""}`
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
    const r = e[o];
    r && (n(`const _hoisted_${o + 1} = `), rt(r, t), s());
  }
  t.pure = !1;
}
function Ug(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Zl(e, t) {
  const n = e.length > 3 || J.NODE_ENV !== "production" && e.some((s) => Y(s) || !Ug(s));
  t.push("["), n && t.indent(), Do(e, t, n), n && t.deindent(), t.push("]");
}
function Do(e, t, n = !1, s = !0) {
  const { push: o, newline: r } = t;
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    le(l) ? o(
      l,
      -3
      /* Unknown */
    ) : Y(l) ? Zl(l, t) : rt(l, t), i < e.length - 1 && (n ? (s && o(","), r()) : s && o(", "));
  }
}
function rt(e, t) {
  if (le(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (xt(e)) {
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
      ), rt(e.codegenNode, t);
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
      rt(e.codegenNode, t);
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
  o && n(Qr), n(`${s(Jr)}(`), rt(e.content, t), n(")");
}
function hf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    le(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : rt(s, t);
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
  o && n(Qr), n(
    `${s(To)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Gg(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: r,
    props: i,
    children: l,
    patchFlag: a,
    dynamicProps: c,
    directives: d,
    isBlock: u,
    disableTracking: p,
    isComponent: m
  } = e;
  let g;
  if (a)
    if (J.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${Qs[a]} */`;
      else {
        const T = Object.keys(Qs).map(Number).filter((C) => C > 0 && a & C).map((C) => Qs[C]).join(", ");
        g = a + ` /* ${T} */`;
      }
    else
      g = String(a);
  d && n(s(Hl) + "("), u && n(`(${s(as)}(${p ? "true" : ""}), `), o && n(Qr);
  const v = u ? Ms(t.inSSR, m) : Is(t.inSSR, m);
  n(s(v) + "(", -2, e), Do(
    Yg([r, i, l, g, c]),
    t
  ), n(")"), u && n(")"), d && (n(", "), rt(d, t), n(")"));
}
function Yg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Jg(e, t) {
  const { push: n, helper: s, pure: o } = t, r = le(e.callee) ? e.callee : s(e.callee);
  o && n(Qr), n(r + "(", -2, e), Do(e.arguments, t), n(")");
}
function Xg(e, t) {
  const { push: n, indent: s, deindent: o, newline: r } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const l = i.length > 1 || J.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < i.length; a++) {
    const { key: c, value: d } = i[a];
    Kg(c, t), n(": "), rt(d, t), a < i.length - 1 && (n(","), r());
  }
  l && o(), n(l ? "}" : " }");
}
function Qg(e, t) {
  Zl(e.elements, t);
}
function Zg(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: r, returns: i, body: l, newline: a, isSlot: c } = e;
  c && n(`_${Vs[Wl]}(`), n("(", -2, e), Y(r) ? Do(r, t) : r && rt(r, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), Y(i) ? Zl(i, t) : rt(i, t)) : l && rt(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function ev(e, t) {
  const { test: n, consequent: s, alternate: o, newline: r } = e, { push: i, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const u = !Xl(n.content);
    u && i("("), pf(n, t), u && i(")");
  } else
    i("("), rt(n, t), i(")");
  r && l(), t.indentLevel++, r || i(" "), i("? "), rt(s, t), t.indentLevel--, r && c(), r || i(" "), i(": ");
  const d = o.type === 19;
  d || t.indentLevel++, rt(o, t), d || t.indentLevel--, r && a(
    !0
    /* without newline */
  );
}
function tv(e, t) {
  const { push: n, helper: s, indent: o, deindent: r, newline: i } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(wr)}(-1`), e.inVOnce && n(", true"), n("),"), i(), n("(")), n(`_cache[${e.index}] = `), rt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), i(), n(`${s(wr)}(1),`), i(), n(`_cache[${e.index}]`), r()), n(")"), a && n(")]");
}
const nv = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), sv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Yn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (r) {
      let i = r.message;
      const l = o.replace(sv, "").match(nv);
      l && (i = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        Ne(
          45,
          e.loc,
          void 0,
          i
        )
      );
    }
}
const ov = (e, t) => {
  if (e.type === 5)
    e.content = bi(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = Et(e, "memo");
    for (let s = 0; s < e.props.length; s++) {
      const o = e.props[s];
      if (o.type === 7 && o.name !== "for") {
        const r = o.exp, i = o.arg;
        r && r.type === 4 && !(o.name === "on" && i) && // key has been processed in transformFor(vMemo + vFor)
        !(n && i && i.type === 4 && i.content === "key") && (o.exp = bi(
          r,
          t,
          // slot args must be processed as function params
          o.name === "slot"
        )), i && i.type === 4 && !i.isStatic && (o.arg = bi(i, t));
      }
    }
  }
};
function bi(e, t, n = !1, s = !1, o = Object.create(t.identifiers)) {
  return J.NODE_ENV !== "production" && Yn(e, t, n, s), e;
}
const rv = df(
  /^(if|else|else-if)$/,
  (e, t, n) => iv(e, t, n, (s, o, r) => {
    const i = n.parent.children;
    let l = i.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const c = i[l];
      c && c.type === 9 && (a += c.branches.length);
    }
    return () => {
      if (r)
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
function iv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      Ne(28, t.loc)
    ), t.exp = de("true", !1, o);
  }
  if (J.NODE_ENV !== "production" && t.exp && Yn(t.exp, n), t.name === "if") {
    const o = pc(e, t), r = {
      type: 9,
      loc: Tg(e.loc),
      branches: [o]
    };
    if (n.replaceNode(r), s)
      return s(r, o, !0);
  } else {
    const o = n.parent.children, r = [];
    let i = o.indexOf(e);
    for (; i-- >= -1; ) {
      const l = o[i];
      if (l && l.type === 3) {
        n.removeNode(l), J.NODE_ENV !== "production" && r.unshift(l);
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
        if (J.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...r, ...a.children]), J.NODE_ENV !== "production") {
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
        Xr(a, n), c && c(), n.currentNode = null;
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
    children: n && !Et(e, "for") ? e.children : [e],
    userKey: bo(e, "key"),
    isTemplateIf: n
  };
}
function hc(e, t, n) {
  return e.condition ? Gi(
    e.condition,
    mc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    ze(n.helper(To), [
      J.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : mc(e, t, n);
}
function mc(e, t, n) {
  const { helper: s } = n, o = Pe(
    "key",
    de(
      `${t}`,
      !1,
      Ot,
      2
    )
  ), { children: r } = e, i = r[0];
  if (r.length !== 1 || i.type !== 1)
    if (r.length === 1 && i.type === 11) {
      const a = i.codegenNode;
      return Cr(a, o, n), a;
    } else {
      let a = 64;
      return J.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((c) => c.type !== 3).length === 1 && (a |= 2048), yo(
        n,
        s(go),
        Vt([o]),
        r,
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
    const a = i.codegenNode, c = yg(a);
    return c.type === 13 && Yl(c, n), Cr(c, o, n), a;
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
  const { modifiers: s, loc: o } = e, r = e.arg;
  let { exp: i } = e;
  if (i && i.type === 4 && !i.content.trim() && (i = void 0), !i) {
    if (r.type !== 4 || !r.isStatic)
      return n.onError(
        Ne(
          52,
          r.loc
        )
      ), {
        props: [
          Pe(r, de("", !0, o))
        ]
      };
    mf(e), i = e.exp;
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), s.some((l) => l.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = Ce(r.content) : r.content = `${n.helperString(Ki)}(${r.content})` : (r.children.unshift(`${n.helperString(Ki)}(`), r.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && gc(r, "."), s.some((l) => l.content === "attr") && gc(r, "^")), {
    props: [Pe(r, i)]
  };
}, mf = (e, t) => {
  const n = e.arg, s = Ce(n.content);
  e.exp = de(s, !1, n.loc);
}, gc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, uv = df(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return dv(e, t, n, (r) => {
      const i = ze(s(Ul), [
        r.source
      ]), l = Sr(e), a = Et(e, "memo"), c = bo(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && mf(c);
      let u = c && (c.type === 6 ? c.value ? de(c.value.content, !0) : void 0 : c.exp);
      const p = c && u ? Pe("key", u) : null, m = r.source.type === 4 && r.source.constType > 0, g = m ? 64 : c ? 128 : 256;
      return r.codegenNode = yo(
        n,
        s(go),
        void 0,
        i,
        g,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let v;
        const { children: T } = r;
        J.NODE_ENV !== "production" && l && e.children.some((h) => {
          if (h.type === 1) {
            const S = bo(h, "key");
            if (S)
              return n.onError(
                Ne(
                  33,
                  S.loc
                )
              ), !0;
          }
        });
        const C = T.length !== 1 || T[0].type !== 1, y = kr(e) ? e : l && e.children.length === 1 && kr(e.children[0]) ? e.children[0] : null;
        if (y ? (v = y.codegenNode, l && p && Cr(v, p, n)) : C ? v = yo(
          n,
          s(go),
          p ? Vt([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (v = T[0].codegenNode, l && p && Cr(v, p, n), v.isBlock !== !m && (v.isBlock ? (o(as), o(
          Ms(n.inSSR, v.isComponent)
        )) : o(
          Is(n.inSSR, v.isComponent)
        )), v.isBlock = !m, v.isBlock ? (s(as), s(Ms(n.inSSR, v.isComponent))) : s(Is(n.inSSR, v.isComponent))), a) {
          const h = As(
            Qi(r.parseResult, [
              de("_cached")
            ])
          );
          h.body = sg([
            zt(["const _memo = (", a.exp, ")"]),
            zt([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Jd
              )}(_cached, _memo)) return _cached`
            ]),
            zt(["const _item = ", v]),
            de("_item.memo = _memo"),
            de("return _item")
          ]), i.arguments.push(
            h,
            de("_cache"),
            de(String(n.cached.length))
          ), n.cached.push(null);
        } else
          i.arguments.push(
            As(
              Qi(r.parseResult),
              v,
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
  const { addIdentifiers: r, removeIdentifiers: i, scopes: l } = n, { source: a, value: c, key: d, index: u } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: d,
    objectIndexAlias: u,
    parseResult: o,
    children: Sr(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const m = s && s(p);
  return () => {
    l.vFor--, m && m();
  };
}
function gf(e, t) {
  e.finalized || (J.NODE_ENV !== "production" && (Yn(e.source, t), e.key && Yn(
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
function Qi({ value: e, key: t, index: n }, s = []) {
  return fv([e, t, n, ...s]);
}
function fv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || de("_".repeat(s + 1), !1));
}
const vc = de("undefined", !1), pv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = Et(e, "slot");
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
  const { children: s, loc: o } = e, r = [], i = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = Et(e, "slot", !0);
  if (a) {
    const { arg: T, exp: C } = a;
    T && !wt(T) && (l = !0), r.push(
      Pe(
        T || de("default", !0),
        n(C, void 0, s, o)
      )
    );
  }
  let c = !1, d = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let T = 0; T < s.length; T++) {
    const C = s[T];
    let y;
    if (!Sr(C) || !(y = Et(C, "slot", !0))) {
      C.type !== 3 && u.push(C);
      continue;
    }
    if (a) {
      t.onError(
        Ne(37, y.loc)
      );
      break;
    }
    c = !0;
    const { children: h, loc: S } = C, {
      arg: E = de("default", !0),
      exp: V,
      loc: M
    } = y;
    let $;
    wt(E) ? $ = E ? E.content : "default" : l = !0;
    const b = Et(C, "for"), k = n(V, b, h, S);
    let A, D;
    if (A = Et(C, "if"))
      l = !0, i.push(
        Gi(
          A.exp,
          Ho(E, k, m++),
          vc
        )
      );
    else if (D = Et(
      C,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let U = T, W;
      for (; U-- && (W = s[U], !(W.type !== 3 && Zi(W))); )
        ;
      if (W && Sr(W) && Et(W, /^(else-)?if$/)) {
        let G = i[i.length - 1];
        for (; G.alternate.type === 19; )
          G = G.alternate;
        G.alternate = D.exp ? Gi(
          D.exp,
          Ho(
            E,
            k,
            m++
          ),
          vc
        ) : Ho(E, k, m++);
      } else
        t.onError(
          Ne(30, D.loc)
        );
    } else if (b) {
      l = !0;
      const U = b.forParseResult;
      U ? (gf(U, t), i.push(
        ze(t.helper(Ul), [
          U.source,
          As(
            Qi(U),
            Ho(E, k),
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
      if ($) {
        if (p.has($)) {
          t.onError(
            Ne(
              38,
              M
            )
          );
          continue;
        }
        p.add($), $ === "default" && (d = !0);
      }
      r.push(Pe(E, k));
    }
  }
  if (!a) {
    const T = (C, y) => {
      const h = n(C, void 0, y, o);
      return t.compatConfig && (h.isNonScopedSlot = !0), Pe("default", h);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((C) => Zi(C)) && (d ? t.onError(
      Ne(
        39,
        u[0].loc
      )
    ) : r.push(
      T(void 0, u)
    )) : r.push(T(void 0, s));
  }
  const g = l ? 2 : Zo(e.children) ? 3 : 1;
  let v = Vt(
    r.concat(
      Pe(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        de(
          g + (J.NODE_ENV !== "production" ? ` /* ${Uf[g]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return i.length && (v = ze(t.helper(Yd), [
    v,
    ns(i)
  ])), {
    slots: v,
    hasDynamicSlots: l
  };
}
function Ho(e, t, n) {
  const s = [
    Pe("name", e),
    Pe("fn", t)
  ];
  return n != null && s.push(
    Pe("key", de(String(n), !0))
  ), Vt(s);
}
function Zo(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Zo(n.children))
          return !0;
        break;
      case 9:
        if (Zo(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Zo(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Zi(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Zi(e.content);
}
const vf = /* @__PURE__ */ new WeakMap(), gv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, r = e.tagType === 1;
  let i = r ? vv(e, t) : `"${s}"`;
  const l = me(i) && i.callee === Fl;
  let a, c, d = 0, u, p, m, g = (
    // dynamic component may resolve to plain elements
    l || i === lo || i === Il || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const v = yf(
      e,
      t,
      void 0,
      r,
      l
    );
    a = v.props, d = v.patchFlag, p = v.dynamicPropNames;
    const T = v.directives;
    m = T && T.length ? ns(
      T.map((C) => bv(C, t))
    ) : void 0, v.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (i === _r && (g = !0, d |= 1024, J.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Ne(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    i !== lo && // explained above.
    i !== _r) {
      const { slots: T, hasDynamicSlots: C } = mv(e, t);
      c = T, C && (d |= 1024);
    } else if (e.children.length === 1 && i !== lo) {
      const T = e.children[0], C = T.type, y = C === 5 || C === 8;
      y && kt(T, t) === 0 && (d |= 1), y || C === 2 ? c = T : c = e.children;
    } else
      c = e.children;
  p && p.length && (u = _v(p)), e.codegenNode = yo(
    t,
    i,
    a,
    c,
    d === 0 ? void 0 : d,
    u,
    m,
    !!g,
    !1,
    r,
    e.loc
  );
};
function vv(e, t, n = !1) {
  let { tag: s } = e;
  const o = el(s), r = bo(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (r)
    if (o || Pn(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (r.type === 6 ? l = r.value && de(r.value.content, !0) : (l = r.exp, l || (l = de("is", !1, r.arg.loc))), l)
        return ze(t.helper(Fl), [
          l
        ]);
    } else r.type === 6 && r.value.content.startsWith("vue:") && (s = r.value.content.slice(4));
  const i = Qd(s) || t.isBuiltInComponent(s);
  return i ? (n || t.helper(i), i) : (t.helper(Ll), t.components.add(s), _o(s, "component"));
}
function yf(e, t, n = e.props, s, o, r = !1) {
  const { tag: i, loc: l, children: a } = e;
  let c = [];
  const d = [], u = [], p = a.length > 0;
  let m = !1, g = 0, v = !1, T = !1, C = !1, y = !1, h = !1, S = !1;
  const E = [], V = (k) => {
    c.length && (d.push(
      Vt(yc(c), l)
    ), c = []), k && d.push(k);
  }, M = () => {
    t.scopes.vFor > 0 && c.push(
      Pe(
        de("ref_for", !0),
        de("true")
      )
    );
  }, $ = ({ key: k, value: A }) => {
    if (wt(k)) {
      const D = k.content, U = vn(D);
      if (U && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      D.toLowerCase() !== "onclick" && // omit v-model handlers
      D !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !An(D) && (y = !0), U && An(D) && (S = !0), U && A.type === 14 && (A = A.arguments[0]), A.type === 20 || (A.type === 4 || A.type === 8) && kt(A, t) > 0)
        return;
      D === "ref" ? v = !0 : D === "class" ? T = !0 : D === "style" ? C = !0 : D !== "key" && !E.includes(D) && E.push(D), s && (D === "class" || D === "style") && !E.includes(D) && E.push(D);
    } else
      h = !0;
  };
  for (let k = 0; k < n.length; k++) {
    const A = n[k];
    if (A.type === 6) {
      const { loc: D, name: U, nameLoc: W, value: G } = A;
      let ee = !0;
      if (U === "ref" && (v = !0, M()), U === "is" && (el(i) || G && G.content.startsWith("vue:") || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Pe(
          de(U, !0, W),
          de(
            G ? G.content : "",
            ee,
            G ? G.loc : D
          )
        )
      );
    } else {
      const { name: D, arg: U, exp: W, loc: G, modifiers: ee } = A, se = D === "bind", te = D === "on";
      if (D === "slot") {
        s || t.onError(
          Ne(40, G)
        );
        continue;
      }
      if (D === "once" || D === "memo" || D === "is" || se && Vn(U, "is") && (el(i) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || te && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (se && Vn(U, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        te && p && Vn(U, "vue:before-update")) && (m = !0), se && Vn(U, "ref") && M(), !U && (se || te)
      ) {
        if (h = !0, W)
          if (se) {
            if (V(), J.NODE_ENV !== "production" && d.some((Tt) => Tt.type === 15 ? Tt.properties.some(({ key: $t }) => $t.type !== 4 || !$t.isStatic ? !0 : $t.content !== "class" && $t.content !== "style" && !vn($t.content)) : !0) && Ps(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              G
            ), Pn(
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
      se && ee.some((mt) => mt.content === "prop") && (g |= 32);
      const we = t.directiveTransforms[D];
      if (we) {
        const { props: mt, needRuntime: Tt } = we(A, e, t);
        !r && mt.forEach($), te && U && !wt(U) ? V(Vt(mt, l)) : c.push(...mt), Tt && (u.push(A), xt(Tt) && vf.set(A, Tt));
      } else $c(D) || (u.push(A), p && (m = !0));
    }
  }
  let b;
  if (d.length ? (V(), d.length > 1 ? b = ze(
    t.helper(Er),
    d,
    l
  ) : b = d[0]) : c.length && (b = Vt(
    yc(c),
    l
  )), h ? g |= 16 : (T && !s && (g |= 2), C && !s && (g |= 4), E.length && (g |= 8), y && (g |= 32)), !m && (g === 0 || g === 32) && (v || S || u.length > 0) && (g |= 512), !t.inSSR && b)
    switch (b.type) {
      case 15:
        let k = -1, A = -1, D = !1;
        for (let G = 0; G < b.properties.length; G++) {
          const ee = b.properties[G].key;
          wt(ee) ? ee.content === "class" ? k = G : ee.content === "style" && (A = G) : ee.isHandlerKey || (D = !0);
        }
        const U = b.properties[k], W = b.properties[A];
        D ? b = ze(
          t.helper(vo),
          [b]
        ) : (U && !wt(U.value) && (U.value = ze(
          t.helper(ql),
          [U.value]
        )), W && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (C || W.value.type === 4 && W.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        W.value.type === 17) && (W.value = ze(
          t.helper(zl),
          [W.value]
        )));
        break;
      case 14:
        break;
      default:
        b = ze(
          t.helper(vo),
          [
            ze(t.helper($o), [
              b
            ])
          ]
        );
        break;
    }
  return {
    props: b,
    directives: u,
    patchFlag: g,
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
    const r = o.key.content, i = t.get(r);
    i ? (r === "style" || r === "class" || vn(r)) && yv(i, o) : (t.set(r, o), n.push(o));
  }
  return n;
}
function yv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ns(
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
    const r = de("true", !1, o);
    n.push(
      Vt(
        e.modifiers.map(
          (i) => Pe(i, r)
        ),
        o
      )
    );
  }
  return ns(n, e.loc);
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
  if (kr(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: r } = wv(e, t), i = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (i[2] = r, l = 3), n.length && (i[3] = As([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), i.splice(l), e.codegenNode = ze(
      t.helper(Gd),
      i,
      s
    );
  }
};
function wv(e, t) {
  let n = '"default"', s;
  const o = [];
  for (let r = 0; r < e.props.length; r++) {
    const i = e.props[r];
    if (i.type === 6)
      i.value && (i.name === "name" ? n = JSON.stringify(i.value.content) : (i.name = Ce(i.name), o.push(i)));
    else if (i.name === "bind" && Vn(i.arg, "name")) {
      if (i.exp)
        n = i.exp;
      else if (i.arg && i.arg.type === 4) {
        const l = Ce(i.arg.content);
        n = i.exp = de(l, !1, i.arg.loc);
      }
    } else
      i.name === "bind" && i.arg && wt(i.arg) && (i.arg.content = Ce(i.arg.content)), o.push(i);
  }
  if (o.length > 0) {
    const { props: r, directives: i } = yf(
      e,
      t,
      o,
      !1,
      !1
    );
    s = r, i.length && t.onError(
      Ne(
        36,
        i[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: s
  };
}
const bf = (e, t, n, s) => {
  const { loc: o, modifiers: r, arg: i } = e;
  !e.exp && !r.length && n.onError(Ne(35, o));
  let l;
  if (i.type === 4)
    if (i.isStatic) {
      let u = i.content;
      J.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Ne(51, i.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const p = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        en(Ce(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = de(p, !0, i.loc);
    } else
      l = zt([
        `${n.helperString(Wi)}(`,
        i,
        ")"
      ]);
  else
    l = i, l.children.unshift(`${n.helperString(Wi)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = ef(a), p = !(u || hg(a)), m = a.content.includes(";");
    J.NODE_ENV !== "production" && Yn(
      a,
      n,
      !1,
      m
    ), (p || c && u) && (a = zt([
      `${p ? "$event" : "(...args)"} => ${m ? "{" : "("}`,
      a,
      m ? "}" : ")"
    ]));
  }
  let d = {
    props: [
      Pe(
        l,
        a || de("() => {}", !1, o)
      )
    ]
  };
  return s && (d = s(d)), c && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((u) => u.key.isHandlerKey = !0), d;
}, xv = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, o = !1;
      for (let r = 0; r < n.length; r++) {
        const i = n[r];
        if (vi(i)) {
          o = !0;
          for (let l = r + 1; l < n.length; l++) {
            const a = n[l];
            if (vi(a))
              s || (s = n[r] = zt(
                [i],
                i.loc
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
        (r) => r.type === 7 && !t.directiveTransforms[r.name]
      ) && e.tag !== "template")))
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          if (vi(i) || i.type === 8) {
            const l = [];
            (i.type !== 2 || i.content !== " ") && l.push(i), !t.ssr && kt(i, t) === 0 && l.push(
              1 + (J.NODE_ENV !== "production" ? ` /* ${Qs[1]} */` : "")
            ), n[r] = {
              type: 12,
              content: i,
              loc: i.loc,
              codegenNode: ze(
                t.helper(Rl),
                l
              )
            };
          }
        }
    };
}, bc = /* @__PURE__ */ new WeakSet(), Nv = (e, t) => {
  if (e.type === 1 && Et(e, "once", !0))
    return bc.has(e) || t.inVOnce || t.inSSR ? void 0 : (bc.add(e), t.inVOnce = !0, t.helper(wr), () => {
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
    ), Uo();
  const r = s.loc.source.trim(), i = s.type === 4 ? s.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(Ne(44, s.loc)), Uo();
  if (!i.trim() || !ef(s))
    return n.onError(
      Ne(42, s.loc)
    ), Uo();
  const a = o || de("modelValue", !0), c = o ? wt(o) ? `onUpdate:${Ce(o.content)}` : zt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let d;
  const u = n.isTS ? "($event: any)" : "$event";
  d = zt([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Pe(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Pe(c, d)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((v) => v.content).map((v) => (Xl(v) ? v : JSON.stringify(v)) + ": true").join(", "), g = o ? wt(o) ? `${o.content}Modifiers` : zt([o, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Pe(
        g,
        de(
          `{ ${m} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return Uo(p);
};
function Uo(e = []) {
  return { props: e };
}
const Sv = /[\w).+\-_$\]]/, kv = (e, t) => {
  Pn("COMPILER_FILTERS", t) && (e.type === 5 ? Or(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Or(n.exp, t);
  }));
};
function Or(e, t) {
  if (e.type === 4)
    _c(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? _c(s, t) : s.type === 8 ? Or(e, t) : s.type === 5 && Or(s.content, t));
    }
}
function _c(e, t) {
  const n = e.content;
  let s = !1, o = !1, r = !1, i = !1, l = 0, a = 0, c = 0, d = 0, u, p, m, g, v = [];
  for (m = 0; m < n.length; m++)
    if (p = u, u = n.charCodeAt(m), s)
      u === 39 && p !== 92 && (s = !1);
    else if (o)
      u === 34 && p !== 92 && (o = !1);
    else if (r)
      u === 96 && p !== 92 && (r = !1);
    else if (i)
      u === 47 && p !== 92 && (i = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !c)
      g === void 0 ? (d = m + 1, g = n.slice(0, m).trim()) : T();
    else {
      switch (u) {
        case 34:
          o = !0;
          break;
        case 39:
          s = !0;
          break;
        case 96:
          r = !0;
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
        let C = m - 1, y;
        for (; C >= 0 && (y = n.charAt(C), y === " "); C--)
          ;
        (!y || !Sv.test(y)) && (i = !0);
      }
    }
  g === void 0 ? g = n.slice(0, m).trim() : d !== 0 && T();
  function T() {
    v.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (v.length) {
    for (J.NODE_ENV !== "production" && Nr(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < v.length; m++)
      g = Cv(g, v[m], t);
    e.content = g, e.ast = void 0;
  }
}
function Cv(e, t, n) {
  n.helper(jl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${_o(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), r = t.slice(s + 1);
    return n.filters.add(o), `${_o(o, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const Ec = /* @__PURE__ */ new WeakSet(), Ov = (e, t) => {
  if (e.type === 1) {
    const n = Et(e, "memo");
    return !n || Ec.has(e) ? void 0 : (Ec.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Yl(s, t), e.codegenNode = ze(t.helper(Gl), [
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
      Nv,
      rv,
      Ov,
      uv,
      kv,
      ...J.NODE_ENV !== "production" ? [ov] : [],
      Ev,
      gv,
      pv,
      xv
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
  const r = fe({}, t, {
    prefixIdentifiers: o
  }), i = le(e) ? Vg(e, r) : e, [l, a] = Tv();
  return Pg(
    i,
    fe({}, r, {
      nodeTransforms: [
        ...l,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: fe(
        {},
        a,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), Bg(i, r);
}
const Dv = () => ({ props: [] });
var it = {};
const Ef = Symbol(it.NODE_ENV !== "production" ? "vModelRadio" : ""), wf = Symbol(
  it.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), xf = Symbol(it.NODE_ENV !== "production" ? "vModelText" : ""), Nf = Symbol(
  it.NODE_ENV !== "production" ? "vModelSelect" : ""
), tl = Symbol(
  it.NODE_ENV !== "production" ? "vModelDynamic" : ""
), Sf = Symbol(
  it.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), kf = Symbol(
  it.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), Cf = Symbol(it.NODE_ENV !== "production" ? "vShow" : ""), ea = Symbol(it.NODE_ENV !== "production" ? "Transition" : ""), Of = Symbol(
  it.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
eg({
  [Ef]: "vModelRadio",
  [wf]: "vModelCheckbox",
  [xf]: "vModelText",
  [Nf]: "vModelSelect",
  [tl]: "vModelDynamic",
  [Sf]: "withModifiers",
  [kf]: "withKeys",
  [Cf]: "vShow",
  [ea]: "Transition",
  [Of]: "TransitionGroup"
});
let hs;
function Vv(e, t = !1) {
  return hs || (hs = document.createElement("div")), t ? (hs.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, hs.children[0].getAttribute("foo")) : (hs.innerHTML = e, hs.textContent);
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
      arg: de("style", !0, t.loc),
      exp: Mv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Mv = (e, t) => {
  const n = Dc(e);
  return de(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Ht(e, t) {
  return Ne(
    e,
    t,
    it.NODE_ENV !== "production" ? Pv : void 0
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
    Ht(53, o)
  ), t.children.length && (n.onError(
    Ht(54, o)
  ), t.children.length = 0), {
    props: [
      Pe(
        de("innerHTML", !0, o),
        s || de("", !0)
      )
    ]
  };
}, Lv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Ht(55, o)
  ), t.children.length && (n.onError(
    Ht(56, o)
  ), t.children.length = 0), {
    props: [
      Pe(
        de("textContent", !0),
        s ? kt(s, n) > 0 ? s : ze(
          n.helperString(Jr),
          [s],
          o
        ) : de("", !0)
      )
    ]
  };
}, Fv = (e, t, n) => {
  const s = _f(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    Ht(
      58,
      e.arg.loc
    )
  );
  function o() {
    const l = Et(t, "bind");
    l && Vn(l.arg, "value") && n.onError(
      Ht(
        60,
        l.loc
      )
    );
  }
  const { tag: r } = t, i = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || i) {
    let l = xf, a = !1;
    if (r === "input" || i) {
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
                Ht(
                  59,
                  e.loc
                )
              );
              break;
            default:
              it.NODE_ENV !== "production" && o();
              break;
          }
      } else mg(t) ? l = tl : it.NODE_ENV !== "production" && o();
    } else r === "select" ? l = Nf : it.NODE_ENV !== "production" && o();
    a || (s.needRuntime = n.helper(l));
  } else
    n.onError(
      Ht(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), s;
}, Bv = /* @__PURE__ */ Ge("passive,once,capture"), jv = /* @__PURE__ */ Ge(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Hv = /* @__PURE__ */ Ge("left,right"), Tf = /* @__PURE__ */ Ge("onkeyup,onkeydown,onkeypress"), Uv = (e, t, n, s) => {
  const o = [], r = [], i = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ps(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Bv(a) ? i.push(a) : Hv(a) ? wt(e) ? Tf(e.content.toLowerCase()) ? o.push(a) : r.push(a) : (o.push(a), r.push(a)) : jv(a) ? r.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: r,
    eventOptionModifiers: i
  };
}, wc = (e, t) => wt(e) && e.content.toLowerCase() === "onclick" ? de(t, !0) : e.type !== 4 ? zt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, qv = (e, t, n) => bf(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: r, value: i } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = Uv(r, o, n, e.loc);
  if (a.includes("right") && (r = wc(r, "onContextmenu")), a.includes("middle") && (r = wc(r, "onMouseup")), a.length && (i = ze(n.helper(Sf), [
    i,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!wt(r) || Tf(r.content.toLowerCase())) && (i = ze(n.helper(kf), [
    i,
    JSON.stringify(l)
  ])), c.length) {
    const d = c.map(on).join("");
    r = wt(r) ? de(`${r.content}${d}`, !0) : zt(["(", r, `) + "${d}"`]);
  }
  return {
    props: [Pe(r, i)]
  };
}), zv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Ht(61, o)
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
        Ht(
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
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (it.NODE_ENV !== "production" && t.onError(
    Ht(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Gv(e, t) {
  return e === "template" ? !0 : e in xc ? xc[e].has(t) : t in Nc ? Nc[t].has(e) : !(e in Sc && Sc[e].has(t) || t in kc && kc[t].has(e));
}
const ms = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Kn = /* @__PURE__ */ new Set([]), xc = {
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
  script: Kn,
  iframe: Kn,
  option: Kn,
  textarea: Kn,
  style: Kn,
  title: Kn
}, Nc = {
  // sections
  html: Kn,
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
  h1: ms,
  h2: ms,
  h3: ms,
  h4: ms,
  h5: ms,
  h6: ms
}, Yv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Gv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Jv = [
  Iv,
  ...it.NODE_ENV !== "production" ? [Kv, Yv] : []
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
    fe({}, Av, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Wv,
        ...Jv,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: fe(
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
  if (!le(e))
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
  const o = fe(
    {
      hoistStatic: !0,
      onError: Xs.NODE_ENV !== "production" ? i : void 0,
      onWarn: Xs.NODE_ENV !== "production" ? (a) => i(a, !0) : $e
    },
    t
  );
  !o.isCustomElement && typeof customElements < "u" && (o.isCustomElement = (a) => !!customElements.get(a));
  const { code: r } = Qv(e, o);
  function i(a, c = !1) {
    const d = c ? a.message : `Template compilation error: ${a.message}`, u = a.loc && Kf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Ie(u ? `${d}
${u}` : d);
  }
  const l = new Function("Vue", r)(G0);
  return l._rc = !0, Cc[n] = l;
}
vd(ey);
const We = (e, t) => {
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
    const n = e, s = t, o = q(!1), r = Z(() => n.href ? "a" : "button"), i = Z(() => {
      const c = {};
      if (n.rounded === "full" ? c.borderRadius = "9999px" : n.rounded === "none" ? c.borderRadius = "0" : n.buttonRadius !== null ? c.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius : c.borderRadius = "var(--button-radius, 6px)", n.variant === "primary") {
        const d = o.value && n.primaryBgHover ? n.primaryBgHover : n.primaryBg;
        d && (c.backgroundColor = d), n.primaryText && (c.color = n.primaryText);
      } else if (n.variant === "secondary") {
        const d = o.value && n.secondaryBgHover ? n.secondaryBgHover : n.secondaryBg;
        d && (c.backgroundColor = d), n.secondaryText && (c.color = n.secondaryText), n.secondaryBorder && (c.borderColor = n.secondaryBorder);
      }
      return c;
    }), l = Z(() => {
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
    return (c, d) => (w(), lt(xl(r.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: ke(l.value),
      style: ht(i.value),
      onClick: a,
      onMouseenter: d[0] || (d[0] = (u) => o.value = !0),
      onMouseleave: d[1] || (d[1] = (u) => o.value = !1)
    }, {
      default: Me(() => [
        e.loading ? (w(), N("svg", ty, d[2] || (d[2] = [
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
        ]))) : R("", !0),
        jn(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, xs = /* @__PURE__ */ We(ny, [["__scopeId", "data-v-023a6e93"]]), sy = ["disabled"], oy = ["value", "min", "max"], ry = ["disabled"], iy = {
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
    const n = e, s = t, o = at(), r = Z({
      get: () => n.modelValue,
      set: (d) => {
        var p, m, g;
        const u = Math.max(n.min, Math.min(n.max, d));
        if (s("update:modelValue", u), s("update", u), ((g = (m = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : m.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const v = o.vnode.el.parentElement, T = v.getAttribute("data-line-key");
          if (T) {
            const C = new CustomEvent("quantity-update", {
              detail: { key: T, value: u },
              bubbles: !0
            });
            v.dispatchEvent(C);
          }
        }
      }
    }), i = () => {
      r.value > n.min && (r.value = r.value - n.step);
    }, l = () => {
      r.value < n.max && (r.value = r.value + n.step);
    }, a = (d) => {
      const u = parseInt(d.target.value) || n.min;
      r.value = u;
    }, c = (d) => {
      const u = parseInt(d.target.value) || n.min;
      r.value = u, d.target.value = r.value;
    };
    return (d, u) => (w(), N("div", {
      class: ke(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      f("button", {
        type: "button",
        class: ke(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue <= e.min,
        onClick: i,
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
        class: ke(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, oy),
      f("button", {
        type: "button",
        class: ke(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
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
      ]), 10, ry)
    ], 2));
  }
}, Df = /* @__PURE__ */ We(iy, [["__scopeId", "data-v-589d2042"]]), ly = ["data-updating"], ay = { class: "cart-item__content" }, cy = { class: "cart-item__image" }, uy = ["href"], dy = ["src", "alt"], fy = { class: "cart-item__details" }, py = { class: "cart-item__header" }, hy = { class: "cart-item__info" }, my = { class: "cart-item__title" }, gy = ["href"], vy = {
  key: 0,
  class: "cart-item__variant"
}, yy = {
  key: 1,
  class: "cart-item__properties"
}, by = { class: "cart-item__property-key" }, _y = { class: "cart-item__price cart-item__price--mobile" }, Ey = { class: "cart-item__price-current" }, wy = {
  key: 0,
  class: "cart-item__price-original"
}, xy = {
  key: 0,
  class: "cart-item__discounts"
}, Ny = { class: "cart-item__actions" }, Sy = { class: "cart-item__actions-left" }, ky = ["disabled"], Cy = {
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
    const n = e, s = t, o = q(n.item.quantity), r = q(!1), i = q(""), l = Z(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = Z(() => {
      var p;
      return ((p = n.item.variant) == null ? void 0 : p.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (p) => {
      var C, y, h;
      if (!p && p !== 0) return "$0.00";
      const m = ((C = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : C.money_format) || "${{amount}}";
      (y = Shopline == null ? void 0 : Shopline.shop) != null && y.currency;
      const g = ((h = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : h.current) || "en", T = new Intl.NumberFormat(g, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(p));
      return m.replace("{{amount}}", T);
    }, d = async (p) => {
      if (!r.value) {
        r.value = !0, i.value = "";
        try {
          await s("update", {
            key: n.item.key,
            quantity: p
          }), p === 0 && s("remove", n.item.key);
        } catch (m) {
          console.error("Failed to update quantity:", m), i.value = "Failed to update quantity. Please try again.", o.value = n.item.quantity;
        } finally {
          r.value = !1;
        }
      }
    }, u = async () => {
      if (!r.value) {
        r.value = !0, i.value = "";
        try {
          await s("remove", n.item.key);
        } catch (p) {
          console.error("Failed to remove item:", p), i.value = "Failed to remove item. Please try again.";
        } finally {
          r.value = !1;
        }
      }
    };
    return nn(() => n.item.quantity, (p) => {
      o.value = p;
    }), (p, m) => (w(), N("div", {
      class: "cart-item",
      "data-updating": r.value
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
                }, H(e.item.product_title), 9, gy)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (w(), N("p", vy, H(e.item.variant_title), 1)) : R("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (w(), N("div", yy, [
                (w(!0), N(ie, null, be(e.item.properties, (g, v) => (w(), N("p", {
                  key: v,
                  class: "cart-item__property"
                }, [
                  f("span", by, H(v) + ":", 1),
                  Fe(" " + H(g), 1)
                ]))), 128))
              ])) : R("", !0)
            ]),
            f("div", _y, [
              f("p", Ey, H(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (w(), N("p", wy, H(c(e.item.original_price * e.item.quantity)), 1)) : R("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (w(), N("div", xy, [
            (w(!0), N(ie, null, be(e.item.discounts, (g) => (w(), N("div", {
              key: g.id,
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
              Fe(" " + H(g.title) + " (-" + H(c(g.amount || g.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : R("", !0),
          f("div", Ny, [
            f("div", Sy, [
              ue(Df, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  m[0] || (m[0] = (g) => o.value = g),
                  d
                ],
                min: 0,
                max: l.value,
                disabled: r.value,
                size: "small"
              }, null, 8, ["modelValue", "max", "disabled"]),
              f("button", {
                type: "button",
                onClick: u,
                class: "cart-item__remove",
                disabled: r.value,
                "aria-label": "Remove item from cart"
              }, [
                r.value ? (w(), N("svg", Oy, m[3] || (m[3] = [
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
                ]))) : (w(), N("svg", Cy, m[2] || (m[2] = [
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
              f("p", $y, H(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (w(), N("p", Dy, H(c(e.item.original_price * e.item.quantity)), 1)) : R("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (w(), N("p", Vy, " Save " + H(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : R("", !0)
            ])
          ]),
          a.value ? (w(), N("p", Ay, " Only " + H(e.item.variant.inventory_quantity) + " left in stock ", 1)) : R("", !0),
          i.value ? (w(), N("p", Iy, H(i.value), 1)) : R("", !0)
        ])
      ])
    ], 8, ly));
  }
}, Vf = /* @__PURE__ */ We(My, [["__scopeId", "data-v-44c314e9"]]), Py = {
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
    const t = q(!1), n = q([]), s = q(0), o = Z(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/cart";
    }), r = Z(() => {
      var v, T;
      return ((T = (v = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : v.settings) == null ? void 0 : T.free_shipping_threshold) || 50;
    }), i = Z(() => {
      var g, v;
      return ((v = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : v.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var h, S, E, V;
      if (!g && g !== 0) return "$0.00";
      const v = ((h = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : h.money_format) || "${{amount}}";
      (S = Shopline == null ? void 0 : Shopline.shop) != null && S.money_with_currency_format, (E = Shopline == null ? void 0 : Shopline.shop) != null && E.currency;
      const T = ((V = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : V.current) || "en", y = new Intl.NumberFormat(T, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(g));
      return v.replace("{{amount}}", y);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", d();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, d = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, u = async ({ key: g, quantity: v }) => {
      await window.OrionCart.updateItem(g, v), d();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), d();
    }, m = (g) => {
      g.key === "Escape" && t.value && c();
    };
    return Be(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", m);
    }), Ct(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", m);
    }), (g, v) => (w(), lt(bn, { to: "body" }, [
      ue(nt, { name: "drawer" }, {
        default: Me(() => [
          t.value ? (w(), N("div", Py, [
            f("div", Ry, [
              ue(nt, { name: "fade" }, {
                default: Me(() => [
                  t.value ? (w(), N("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: c
                  })) : R("", !0)
                ]),
                _: 1
              }),
              f("div", Ly, [
                ue(nt, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Me(() => [
                    t.value ? (w(), N("div", Fy, [
                      f("div", By, [
                        f("div", jy, [
                          f("div", null, [
                            v[0] || (v[0] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (w(), N("p", Hy, H(n.value.length) + " " + H(n.value.length === 1 ? "item" : "items"), 1)) : R("", !0)
                          ]),
                          f("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: c
                          }, v[1] || (v[1] = [
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
                          n.value.length === 0 ? (w(), N("div", qy, [
                            v[3] || (v[3] = f("div", { class: "empty-cart-icon" }, [
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
                            v[4] || (v[4] = f("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, " Your cart is empty ", -1)),
                            v[5] || (v[5] = f("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            ue(xs, {
                              onClick: c,
                              variant: "primary",
                              size: "large"
                            }, {
                              default: Me(() => v[2] || (v[2] = [
                                Fe(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (w(), N("div", zy, [
                            (w(!0), N(ie, null, be(n.value, (T) => (w(), lt(Vf, {
                              key: T.key,
                              item: T,
                              onUpdate: u,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (w(), N("div", Ky, [
                          i.value ? (w(), N("div", {
                            key: 0,
                            class: ke([s.value >= r.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "rounded-lg p-3"])
                          }, [
                            s.value >= r.value ? (w(), N("div", Wy, v[6] || (v[6] = [
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
                            ]))) : (w(), N("div", Gy, [
                              v[7] || (v[7] = f("svg", {
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
                              f("p", Yy, " Add " + H(l(
                                r.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < r.value ? (w(), N("div", Jy, [
                              f("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: ht(`width: ${Math.min(
                                  s.value / r.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])) : R("", !0)
                          ], 2)) : R("", !0),
                          f("div", null, [
                            f("div", Xy, [
                              v[8] || (v[8] = f("p", null, "Subtotal", -1)),
                              f("p", null, H(l(s.value)), 1)
                            ]),
                            v[9] || (v[9] = f("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          f("div", Qy, [
                            ue(xs, {
                              href: o.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Me(() => v[10] || (v[10] = [
                                Fe(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            }, 8, ["href"]),
                            ue(xs, {
                              onClick: c,
                              variant: "ghost",
                              "full-width": !0
                            }, {
                              default: Me(() => v[11] || (v[11] = [
                                Fe(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [11]
                            })
                          ])
                        ])) : R("", !0)
                      ])
                    ])) : R("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : R("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Af = /* @__PURE__ */ We(Zy, [["__scopeId", "data-v-8c9c8415"]]), e1 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, t1 = { class: "absolute inset-0 overflow-hidden" }, n1 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, s1 = {
  key: 0,
  class: "w-screen max-w-sm pointer-events-auto"
}, o1 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, r1 = { class: "flex-1 overflow-y-auto" }, i1 = { class: "px-4 py-4" }, l1 = { class: "space-y-1" }, a1 = { key: 0 }, c1 = { key: 0 }, u1 = ["onClick"], d1 = {
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
    const n = e, s = Z(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = Z(() => n.customerUrl || window.mobileMenuCustomerUrl || "/account"), r = Z(() => n.showLocalization || window.mobileMenuShowLocalization || !1), i = q(!1), l = q([]), a = () => {
      console.log("openMenu called"), i.value = !0, document.body.style.overflow = "hidden";
    }, c = () => {
      i.value = !1, document.body.style.overflow = "";
    }, d = (u) => {
      const p = l.value.indexOf(u);
      p > -1 ? l.value.splice(p, 1) : l.value.push(u);
    };
    return t({
      openMenu: a,
      closeMenu: c
    }), Be(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", c);
      const u = (p) => {
        p.key === "Escape" && i.value && c();
      };
      document.addEventListener("keydown", u), Ct(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", c), document.removeEventListener("keydown", u);
      });
    }), (u, p) => (w(), N("div", null, [
      (w(), lt(bn, { to: "body" }, [
        ue(nt, { name: "menu" }, {
          default: Me(() => [
            i.value ? (w(), N("div", e1, [
              f("div", t1, [
                ue(nt, { name: "fade" }, {
                  default: Me(() => [
                    i.value ? (w(), N("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : R("", !0)
                  ]),
                  _: 1
                }),
                f("div", n1, [
                  ue(nt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Me(() => [
                      i.value ? (w(), N("div", s1, [
                        f("div", o1, [
                          f("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            p[3] || (p[3] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Menu ", -1)),
                            f("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: c
                            }, p[2] || (p[2] = [
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
                          f("div", r1, [
                            f("nav", i1, [
                              f("ul", l1, [
                                s.value.length === 0 ? (w(), N("li", a1, p[4] || (p[4] = [
                                  f("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : R("", !0),
                                (w(!0), N(ie, null, be(s.value, (m) => (w(), N("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (w(), N("div", c1, [
                                    f("button", {
                                      onClick: (g) => d(
                                        m.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      f("span", null, H(m.title), 1),
                                      (w(), N("svg", {
                                        class: ke(["h-5 w-5 transition-transform duration-200", {
                                          "rotate-180": l.value.includes(
                                            m.title
                                          )
                                        }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, p[5] || (p[5] = [
                                        f("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, u1),
                                    ue(nt, { name: "submenu" }, {
                                      default: Me(() => [
                                        l.value.includes(
                                          m.title
                                        ) ? (w(), N("ul", d1, [
                                          (w(!0), N(ie, null, be(m.links, (g) => (w(), N("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (w(), N("div", f1, [
                                              f("button", {
                                                onClick: (v) => d(
                                                  `${m.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                f("span", null, H(g.title), 1),
                                                (w(), N("svg", {
                                                  class: ke(["h-4 w-4 transition-transform duration-200", {
                                                    "rotate-180": l.value.includes(
                                                      `${m.title}-${g.title}`
                                                    )
                                                  }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, p[6] || (p[6] = [
                                                  f("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, p1),
                                              ue(nt, { name: "submenu" }, {
                                                default: Me(() => [
                                                  l.value.includes(
                                                    `${m.title}-${g.title}`
                                                  ) ? (w(), N("ul", h1, [
                                                    (w(!0), N(ie, null, be(g.links, (v) => (w(), N("li", {
                                                      key: v.id || v.title
                                                    }, [
                                                      f("a", {
                                                        href: v.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: p[0] || (p[0] = (...T) => c && c(...T))
                                                      }, H(v.title), 9, m1)
                                                    ]))), 128))
                                                  ])) : R("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (w(), N("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: p[1] || (p[1] = (...v) => c && c(...v))
                                            }, H(g.title), 9, g1))
                                          ]))), 128))
                                        ])) : R("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (w(), N("a", {
                                    key: 1,
                                    href: m.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: c
                                  }, H(m.title), 9, v1))
                                ]))), 128))
                              ])
                            ]),
                            f("div", y1, [
                              f("div", b1, [
                                f("a", {
                                  href: o.value,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, p[7] || (p[7] = [
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
                                    Fe(" Account ")
                                  ], -1)
                                ]), 8, _1),
                                p[8] || (p[8] = f("a", {
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
                                    Fe(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            r.value ? (w(), N("div", E1, [
                              jn(u.$slots, "localization", {}, void 0, !0)
                            ])) : R("", !0)
                          ])
                        ])
                      ])) : R("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : R("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, x1 = /* @__PURE__ */ We(w1, [["__scopeId", "data-v-9092623c"]]), N1 = { class: "variant-picker" }, S1 = { class: "text-sm font-medium text-gray-900 mb-3" }, k1 = { class: "font-normal text-gray-600" }, C1 = {
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
    const n = e, s = t, o = q({}), r = q(null), i = Z(() => n.product.options || []), l = Z(() => n.product.variants || []);
    Be(() => {
      if (n.selectedVariantId) {
        const T = l.value.find((C) => C.id == n.selectedVariantId);
        T && a(T);
      } else if (l.value.length > 0) {
        const T = l.value.find((C) => C.available) || l.value[0];
        a(T);
      }
    });
    const a = (T) => {
      r.value = T, i.value.forEach((C, y) => {
        o.value[C.name] = T[`option${y + 1}`];
      }), s("variant-change", T);
    }, c = (T, C) => {
      o.value[T] = C;
      const y = l.value.find((h) => i.value.every((S, E) => {
        const V = o.value[S.name];
        return h[`option${E + 1}`] === V;
      }));
      y && (r.value = y, s("variant-change", y));
    }, d = (T) => o.value[T] || "", u = (T, C) => o.value[T] === C, p = (T, C) => {
      const y = i.value.findIndex((h) => h.name === T);
      return l.value.some((h) => {
        const S = h[`option${y + 1}`] === C, E = i.value.every((V, M) => {
          if (V.name === T) return !0;
          const $ = o.value[V.name];
          return $ ? h[`option${M + 1}`] === $ : !0;
        });
        return S && E && h.available;
      });
    }, m = (T) => T.toLowerCase().includes("color") || T.toLowerCase().includes("colour"), g = (T) => ({
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
    })[T.toLowerCase()] || "#E5E7EB", v = (T) => {
      var C, y;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((y = (C = window.Shopify) == null ? void 0 : C.currency) == null ? void 0 : y.active) || "USD"
      }).format(T / 100);
    };
    return (T, C) => (w(), N("div", N1, [
      (w(!0), N(ie, null, be(i.value, (y) => (w(), N("div", {
        key: y.name,
        class: "variant-option mb-6"
      }, [
        f("h3", S1, [
          Fe(H(y.name) + ": ", 1),
          f("span", k1, H(d(y.name)), 1)
        ]),
        m(y.name) ? (w(), N("div", C1, [
          (w(!0), N(ie, null, be(y.values, (h) => (w(), N("button", {
            key: h,
            type: "button",
            class: ke([
              "color-swatch",
              u(y.name, h) ? "color-swatch--selected" : "",
              p(y.name, h) ? "" : "color-swatch--unavailable"
            ]),
            style: ht({ backgroundColor: g(h) }),
            title: h,
            "aria-label": `Select ${y.name} ${h}`,
            disabled: !p(y.name, h),
            onClick: (S) => c(y.name, h)
          }, [
            f("span", T1, H(h), 1),
            u(y.name, h) ? (w(), N("span", $1, C[0] || (C[0] = [
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
            ]))) : R("", !0)
          ], 14, O1))), 128))
        ])) : (w(), N("div", D1, [
          (w(!0), N(ie, null, be(y.values, (h) => (w(), N("button", {
            key: h,
            type: "button",
            class: ke([
              "variant-button",
              u(y.name, h) ? "variant-button--selected" : "",
              p(y.name, h) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${y.name} ${h}`,
            disabled: !p(y.name, h),
            onClick: (S) => c(y.name, h)
          }, H(h), 11, V1))), 128))
        ]))
      ]))), 128)),
      r.value ? (w(), N("div", A1, [
        f("div", I1, [
          f("span", M1, H(v(r.value.price)), 1),
          r.value.compare_at_price > r.value.price ? (w(), N("span", P1, H(v(r.value.compare_at_price)), 1)) : R("", !0)
        ]),
        r.value.available ? (w(), N("div", R1, " In Stock ")) : (w(), N("div", L1, " Out of Stock "))
      ])) : R("", !0)
    ]));
  }
}, B1 = /* @__PURE__ */ We(F1, [["__scopeId", "data-v-6eb16bf8"]]);
function j1(e) {
  return al() ? (Fc(e), !0) : !1;
}
function ta(e) {
  return typeof e == "function" ? e() : No(e);
}
const H1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const U1 = Object.prototype.toString, q1 = (e) => U1.call(e) === "[object Object]", wo = () => {
};
function z1(e, t) {
  function n(...s) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(r);
    });
  }
  return n;
}
function K1(...e) {
  let t = 0, n, s = !0, o = wo, r, i, l, a, c;
  !Ae(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [i, l = !0, a = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = wo);
  };
  return (p) => {
    const m = ta(i), g = Date.now() - t, v = () => r = p();
    return d(), m <= 0 ? (t = Date.now(), v()) : (g > m && (a || !s) ? (t = Date.now(), v()) : l && (r = new Promise((T, C) => {
      o = c ? C : T, n = setTimeout(() => {
        t = Date.now(), s = !0, T(v()), d();
      }, Math.max(0, m - g));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, r);
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
function _i(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = If) : [t, n, s, o] = e, !t)
    return wo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((d) => d()), r.length = 0;
  }, l = (d, u, p, m) => (d.addEventListener(u, p, m), () => d.removeEventListener(u, p, m)), a = nn(
    () => [G1(t), ta(o)],
    ([d, u]) => {
      if (i(), !d)
        return;
      const p = q1(u) ? { ...u } : u;
      r.push(
        ...n.flatMap((m) => s.map((g) => l(d, m, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), i();
  };
  return j1(c), c;
}
function Y1(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: r,
    passive: i = !0,
    window: l = If
  } = t, a = Ns({ x: 0, y: 0 }), c = Ns({ x: 0, y: 0 }), d = Z(() => a.x - c.x), u = Z(() => a.y - c.y), { max: p, abs: m } = Math, g = Z(() => p(m(d.value), m(u.value)) >= n), v = q(!1), T = Z(() => g.value ? m(d.value) > m(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), C = (b) => [b.touches[0].clientX, b.touches[0].clientY], y = (b, k) => {
    a.x = b, a.y = k;
  }, h = (b, k) => {
    c.x = b, c.y = k;
  };
  let S;
  const E = J1(l == null ? void 0 : l.document);
  i ? S = E ? { passive: !0 } : { capture: !1 } : S = E ? { passive: !1, capture: !0 } : { capture: !0 };
  const V = (b) => {
    v.value && (o == null || o(b, T.value)), v.value = !1;
  }, M = [
    _i(e, "touchstart", (b) => {
      if (b.touches.length !== 1)
        return;
      S.capture && !S.passive && b.preventDefault();
      const [k, A] = C(b);
      y(k, A), h(k, A), r == null || r(b);
    }, S),
    _i(e, "touchmove", (b) => {
      if (b.touches.length !== 1)
        return;
      const [k, A] = C(b);
      h(k, A), !v.value && g.value && (v.value = !0), v.value && (s == null || s(b));
    }, S),
    _i(e, ["touchend", "touchcancel"], V, S)
  ];
  return {
    isPassiveEventSupported: E,
    isSwiping: v,
    direction: T,
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
    const t = e, n = q(null), s = q(!1), o = q(!1), r = q(!1), i = q(!1), l = q("#ffffff"), a = q(0), c = q(0), d = Z(() => T.value ? `${c.value}px` : "0");
    let u = 0;
    const p = Z(() => {
      const y = {};
      return T.value && s.value && (y.position = "fixed", y.top = "0", y.left = "0", y.right = "0", y.zIndex = "40", o.value ? y.transform = "translateY(-100%)" : y.transform = "translateY(0)"), i.value && (a.value === 0 ? y.backgroundColor = "transparent" : T.value && s.value && (y.backgroundColor = l.value)), y.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", y;
    }), m = () => {
      var S, E, V;
      const y = (E = (S = n.value) == null ? void 0 : S.getRootNode()) == null ? void 0 : E.host;
      if (!y) return;
      y.classList.add("sticky-header-wrapper");
      const h = (V = n.value) == null ? void 0 : V.querySelector(".main-header");
      h && i.value && (a.value === 0 ? (h.style.backgroundColor = "transparent", h.style.borderBottomColor = "transparent") : T.value && s.value && (h.style.backgroundColor = l.value, h.style.borderBottomColor = "#e5e7eb"));
    }, g = W1(() => {
      if (!T.value)
        return;
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = y, s.value = y > 0, r.value = y > 10, v.value && s.value) {
        const h = y - u;
        Math.abs(h) > 5 && (h > 0 && y > c.value ? o.value = !0 : h < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(y - u) > 1 && (u = y), m();
    }, 50), v = q(t.hideOnScrollDown), T = q(t.sticky), C = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return Be(() => {
      if (n.value) {
        const y = n.value.getRootNode().host;
        if (y) {
          y.classList.add("sticky-header-wrapper"), i.value = y.classList.contains("header-transparent");
          const h = y.getAttribute("data-hide-on-scroll-down"), S = y.getAttribute("data-sticky"), E = y.getAttribute("data-sticky-bg");
          h !== null && (v.value = h === "true"), S !== null && (T.value = S === "true"), E !== null && (l.value = E || "#ffffff"), setTimeout(C, 100), window.addEventListener("resize", C);
        }
      }
      window.addEventListener("scroll", g, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), g();
    }), Ct(() => {
      window.removeEventListener("scroll", g), window.removeEventListener("resize", C);
    }), (y, h) => (w(), N("div", X1, [
      T.value && s.value ? (w(), N("div", {
        key: 0,
        class: "header-placeholder",
        style: ht({ height: d.value })
      }, null, 4)) : R("", !0),
      f("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: ke(["sticky-header-inner", {
          "is-fixed": T.value && s.value,
          "is-hidden": o.value,
          "has-shadow": r.value,
          "is-transparent": i.value && a.value === 0
        }]),
        style: ht(p.value)
      }, [
        jn(y.$slots, "default")
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
}, ob = { class: "main-header__nav hidden lg:flex" }, rb = ["href"], ib = { class: "main-header__actions" }, lb = ["href"], ab = {
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
    const t = e, n = q(null), s = q(!1), o = q(0), r = Z(() => {
      var d, u;
      return t.customer ? ((d = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : d.account) || "/account" : ((u = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : u.account_login) || "/account/login";
    }), i = () => {
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
    return Be(() => {
      document.addEventListener("cart:updated", c), c();
    }), Ct(() => {
      document.removeEventListener("cart:updated", c);
    }), (d, u) => (w(), N("div", Z1, [
      f("div", eb, [
        f("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: i,
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
          e.logoUrl ? (w(), N("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, nb)) : (w(), N("span", sb, H(e.shopName), 1))
        ]),
        f("nav", ob, [
          (w(!0), N(ie, null, be(e.navigationLinks, (p) => (w(), N("a", {
            key: p.url,
            href: p.url,
            class: "nav-link"
          }, H(p.title), 9, rb))), 128))
        ]),
        f("div", ib, [
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
            href: r.value,
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
            o.value > 0 ? (w(), N("span", ab, H(o.value), 1)) : R("", !0)
          ])
        ])
      ]),
      (w(), lt(bn, { to: "body" }, [
        ue(nt, { name: "fade" }, {
          default: Me(() => [
            s.value ? (w(), N("div", {
              key: 0,
              class: "search-overlay",
              onClick: qt(a, ["self"])
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
                    onKeyup: br(a, ["esc"])
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
            ])) : R("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, Mf = /* @__PURE__ */ We(db, [["__scopeId", "data-v-3988ea0d"]]), fb = { class: "site-footer" }, pb = {
  key: 0,
  class: "newsletter-section"
}, hb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, mb = { class: "newsletter-content" }, gb = { class: "newsletter-text" }, vb = { class: "text-xl font-semibold mb-2" }, yb = { class: "text-gray-600" }, bb = ["disabled"], _b = ["disabled"], Eb = { key: 0 }, wb = { key: 1 }, xb = { class: "footer-main" }, Nb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Sb = { class: "footer-grid" }, kb = { class: "footer-column" }, Cb = { class: "footer-heading" }, Ob = { class: "text-gray-600 mb-4" }, Tb = {
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
    const t = q(""), n = q(!1), s = Z(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
      n.value = !0;
      try {
        const i = new FormData();
        i.append("email", t.value), (await fetch("/contact#newsletter", {
          method: "POST",
          body: i
        })).ok ? (t.value = "", alert("Thank you for subscribing!")) : alert("An error occurred. Please try again.");
      } catch (i) {
        console.error("Newsletter submission error:", i), alert("An error occurred. Please try again.");
      } finally {
        n.value = !1;
      }
    }, r = (i) => {
      const l = {
        facebook: () => Qt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Qt("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        ]),
        twitter: () => Qt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Qt("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
        ]),
        instagram: () => Qt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Qt("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" })
        ]),
        youtube: () => Qt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Qt("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
        ])
      };
      return l[i.toLowerCase()] || l.facebook;
    };
    return (i, l) => (w(), N("footer", fb, [
      e.showNewsletter ? (w(), N("div", pb, [
        f("div", hb, [
          f("div", mb, [
            f("div", gb, [
              f("h3", vb, H(e.newsletterTitle), 1),
              f("p", yb, H(e.newsletterDescription), 1)
            ]),
            f("form", {
              onSubmit: qt(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              Ue(f("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, bb), [
                [Fn, t.value]
              ]),
              f("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (w(), N("span", wb, "Subscribing...")) : (w(), N("span", Eb, "Subscribe"))
              ], 8, _b)
            ], 32)
          ])
        ])
      ])) : R("", !0),
      f("div", xb, [
        f("div", Nb, [
          f("div", Sb, [
            f("div", kb, [
              f("h4", Cb, H(e.companyName), 1),
              f("p", Ob, H(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (w(), N("div", Tb, [
                (w(!0), N(ie, null, be(e.socialLinks, (a) => (w(), N("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (w(), lt(xl(r(a.name))))
                ], 8, $b))), 128))
              ])) : R("", !0)
            ]),
            (w(!0), N(ie, null, be(e.footerColumns, (a) => (w(), N("div", {
              key: a.title,
              class: "footer-column"
            }, [
              f("h4", Db, H(a.title), 1),
              f("ul", Vb, [
                (w(!0), N(ie, null, be(a.links, (c) => (w(), N("li", {
                  key: c.title
                }, [
                  f("a", {
                    href: c.url,
                    class: "footer-link"
                  }, H(c.title), 9, Ab)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (w(), N("div", Ib, [
              l[4] || (l[4] = f("h4", { class: "footer-heading" }, "Contact", -1)),
              f("div", Mb, [
                e.contactEmail ? (w(), N("p", Pb, [
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
                  Fe(" " + H(e.contactEmail), 1)
                ])) : R("", !0),
                e.contactPhone ? (w(), N("p", Rb, [
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
                  Fe(" " + H(e.contactPhone), 1)
                ])) : R("", !0),
                e.contactAddress ? (w(), N("p", Lb, [
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
                  Fe(" " + H(e.contactAddress), 1)
                ])) : R("", !0)
              ])
            ])) : R("", !0)
          ]),
          e.paymentMethods.length > 0 ? (w(), N("div", Fb, [
            l[5] || (l[5] = f("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            f("div", Bb, [
              (w(!0), N(ie, null, be(e.paymentMethods, (a) => (w(), N("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, jb))), 128))
            ])
          ])) : R("", !0),
          f("div", Hb, [
            f("p", Ub, " © " + H(s.value) + " " + H(e.companyName) + ". All rights reserved. ", 1),
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
}, zb = /* @__PURE__ */ We(qb, [["__scopeId", "data-v-bb6699dc"]]), Kb = { class: "product-card group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden" }, Wb = ["href"], Gb = ["src", "alt"], Yb = {
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
}, o_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, r_ = ["href"], i_ = { class: "flex items-center gap-1 mb-2" }, l_ = { class: "flex" }, a_ = { class: "flex items-baseline gap-2 mb-4" }, c_ = { class: "text-xl font-bold text-gray-900" }, u_ = {
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
    url: String,
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
    const n = e, s = t, o = q(""), r = q(!1), i = q(!1), l = q(!1), a = Z(() => n.product ? n.product : {
      id: n.productId,
      title: n.title,
      handle: n.handle,
      url: n.url,
      vendor: n.vendor,
      price: typeof n.price == "string" ? parseFloat(n.price) : n.price,
      compare_at_price: typeof n.compareAtPrice == "string" ? parseFloat(n.compareAtPrice) : n.compareAtPrice,
      available: n.available,
      images: n.images || (n.image ? [{ src: n.image }] : []),
      featured_image: n.image,
      options: [],
      variants: n.variantId ? [{ id: n.variantId }] : []
    }), c = Z(() => {
      const $ = a.value.handle;
      return a.value.url || ($ ? `/products/${$}` : "#");
    }), d = Z(() => {
      var $, b, k;
      return r.value && (($ = a.value.images) != null && $[1]) ? a.value.images[1].src : ((k = (b = a.value.images) == null ? void 0 : b[0]) == null ? void 0 : k.src) || a.value.featured_image || a.value.image || "/placeholder.jpg";
    }), u = Z(() => {
      var $;
      return ($ = a.value.options) == null ? void 0 : $.some(
        (b) => {
          var k, A;
          return ((k = b.name) == null ? void 0 : k.toLowerCase().includes("color")) || ((A = b.name) == null ? void 0 : A.toLowerCase().includes("colour"));
        }
      );
    }), p = Z(() => {
      var b;
      const $ = (b = a.value.options) == null ? void 0 : b.find(
        (k) => {
          var A, D;
          return ((A = k.name) == null ? void 0 : A.toLowerCase().includes("color")) || ((D = k.name) == null ? void 0 : D.toLowerCase().includes("colour"));
        }
      );
      return ($ == null ? void 0 : $.values) || [];
    }), m = Z(() => a.value.price || 0), g = Z(() => a.value.compare_at_price || 0), v = Z(() => a.value.available && g.value > m.value), T = Z(() => v.value ? Math.round((g.value - m.value) / g.value * 100) : 0), C = ($) => `$${($ / 100).toFixed(2)}`, y = ($) => {
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
      }, k = $.toLowerCase();
      return b[k] || `#${k.replace("#", "")}`;
    }, h = () => {
      var $;
      (($ = a.value.images) == null ? void 0 : $.length) > 1 && (r.value = !0);
    }, S = () => {
      r.value = !1;
    }, E = ($) => {
      o.value = $.value;
    }, V = () => {
      l.value = !l.value;
    }, M = async () => {
      var $, b, k, A;
      i.value = !0;
      try {
        const D = (b = ($ = a.value.variants) == null ? void 0 : $[0]) == null ? void 0 : b.id;
        if (!D)
          throw console.error("No variant ID found for product:", a.value), new Error("No variant ID found");
        const U = await fetch("/api/carts/ajax-cart/add.js", {
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
        if (!U.ok)
          throw new Error("Failed to add to cart");
        const W = await U.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((A = (k = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : k.settings) == null ? void 0 : A.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: D, quantity: 1 });
      } catch (D) {
        console.error("Error adding to cart:", D);
      } finally {
        i.value = !1;
      }
    };
    return ($, b) => (w(), N("div", Kb, [
      f("a", {
        href: c.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        d.value ? (w(), N("img", {
          key: 0,
          src: d.value,
          alt: a.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: h,
          onMouseleave: S
        }, null, 40, Gb)) : (w(), N("div", Yb, b[0] || (b[0] = [
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
        v.value ? (w(), N("div", Jb, " -" + H(T.value) + "% ", 1)) : R("", !0),
        a.value.available ? (w(), N("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: qt(V, ["prevent"])
        }, [
          (w(), N("svg", {
            class: ke(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, b[1] || (b[1] = [
            f("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : R("", !0),
        a.value.available ? R("", !0) : (w(), N("div", Xb, b[2] || (b[2] = [
          f("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Wb),
      f("div", Qb, [
        u.value ? (w(), N("div", Zb, [
          f("div", e_, [
            (w(!0), N(ie, null, be(p.value, (k) => (w(), N("button", {
              key: k.value,
              onClick: (A) => E(k),
              title: k.value,
              class: ke([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === k.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: ht({ backgroundColor: y(k.value) })
            }, [
              o.value === k.value ? (w(), N("span", n_, b[3] || (b[3] = [
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
              ]))) : R("", !0)
            ], 14, t_))), 128))
          ])
        ])) : R("", !0),
        a.value.vendor ? (w(), N("p", s_, H(a.value.vendor), 1)) : R("", !0),
        f("h3", o_, [
          f("a", {
            href: c.value,
            class: "hover:text-gray-700 transition-colors"
          }, H(a.value.title || "Untitled"), 9, r_)
        ]),
        f("div", i_, [
          f("div", l_, [
            (w(), N(ie, null, be(5, (k) => f("svg", {
              key: k,
              class: ke(["w-4 h-4", k <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, b[4] || (b[4] = [
              f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          b[5] || (b[5] = f("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        f("div", a_, [
          f("span", c_, H(C(m.value)), 1),
          g.value > m.value ? (w(), N("span", u_, H(C(g.value)), 1)) : R("", !0)
        ]),
        a.value.available ? (w(), N("button", {
          key: 2,
          onClick: M,
          disabled: i.value,
          class: "w-full bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        }, [
          i.value ? R("", !0) : (w(), N("svg", f_, b[6] || (b[6] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          i.value ? (w(), N("svg", h_, b[7] || (b[7] = [
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
          ]))) : (w(), N("span", p_, "Add to Cart"))
        ], 8, d_)) : R("", !0)
      ])
    ]));
  }
}, g_ = { class: "collection-filters" }, v_ = { class: "lg:hidden mb-4" }, y_ = { class: "hidden lg:block space-y-6" }, b_ = { class: "filter-group" }, __ = { class: "filter-group" }, E_ = { class: "space-y-2" }, w_ = { class: "flex items-center" }, x_ = { class: "flex items-center" }, N_ = { class: "flex items-center" }, S_ = { class: "flex items-center" }, k_ = {
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
    const n = e, s = t, o = q("manual"), r = q([]), i = q([]), l = q([]), a = q(!1), c = q(!1), d = Z(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((h) => {
        h.product_type && y.add(h.product_type);
      }), Array.from(y).sort();
    }), u = Z(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((h) => {
        h.vendor && y.add(h.vendor);
      }), Array.from(y).sort();
    }), p = Z(() => r.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      C();
    }, g = () => {
      C();
    }, v = () => {
      r.value = [], i.value = [], l.value = [], a.value = !1, C();
    }, T = () => {
      c.value = !1, C();
    }, C = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: r.value,
        types: i.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return (y, h) => (w(), N("div", g_, [
      f("div", v_, [
        f("button", {
          onClick: h[0] || (h[0] = (S) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        }, h[12] || (h[12] = [
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
          h[14] || (h[14] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
          Ue(f("select", {
            "onUpdate:modelValue": h[1] || (h[1] = (S) => o.value = S),
            onChange: m,
            class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          }, h[13] || (h[13] = [
            is('<option value="manual" data-v-67473a91>Featured</option><option value="best-selling" data-v-67473a91>Best Selling</option><option value="title-ascending" data-v-67473a91>Alphabetically, A-Z</option><option value="title-descending" data-v-67473a91>Alphabetically, Z-A</option><option value="price-ascending" data-v-67473a91>Price, low to high</option><option value="price-descending" data-v-67473a91>Price, high to low</option><option value="created-ascending" data-v-67473a91>Date, old to new</option><option value="created-descending" data-v-67473a91>Date, new to old</option>', 8)
          ]), 544), [
            [Oo, o.value]
          ])
        ]),
        f("div", __, [
          h[19] || (h[19] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
          f("div", E_, [
            f("label", w_, [
              Ue(f("input", {
                type: "checkbox",
                value: "0-50",
                "onUpdate:modelValue": h[2] || (h[2] = (S) => r.value = S),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [_t, r.value]
              ]),
              h[15] || (h[15] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
            ]),
            f("label", x_, [
              Ue(f("input", {
                type: "checkbox",
                value: "50-100",
                "onUpdate:modelValue": h[3] || (h[3] = (S) => r.value = S),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [_t, r.value]
              ]),
              h[16] || (h[16] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
            ]),
            f("label", N_, [
              Ue(f("input", {
                type: "checkbox",
                value: "100-200",
                "onUpdate:modelValue": h[4] || (h[4] = (S) => r.value = S),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [_t, r.value]
              ]),
              h[17] || (h[17] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
            ]),
            f("label", S_, [
              Ue(f("input", {
                type: "checkbox",
                value: "200+",
                "onUpdate:modelValue": h[5] || (h[5] = (S) => r.value = S),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [_t, r.value]
              ]),
              h[18] || (h[18] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (w(), N("div", k_, [
          h[20] || (h[20] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          f("div", C_, [
            (w(!0), N(ie, null, be(d.value, (S) => (w(), N("label", {
              key: S,
              class: "flex items-center"
            }, [
              Ue(f("input", {
                type: "checkbox",
                value: S,
                "onUpdate:modelValue": h[6] || (h[6] = (E) => i.value = E),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, O_), [
                [_t, i.value]
              ]),
              f("span", T_, H(S), 1)
            ]))), 128))
          ])
        ])) : R("", !0),
        u.value.length > 0 ? (w(), N("div", $_, [
          h[21] || (h[21] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          f("div", D_, [
            (w(!0), N(ie, null, be(u.value, (S) => (w(), N("label", {
              key: S,
              class: "flex items-center"
            }, [
              Ue(f("input", {
                type: "checkbox",
                value: S,
                "onUpdate:modelValue": h[7] || (h[7] = (E) => l.value = E),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, V_), [
                [_t, l.value]
              ]),
              f("span", A_, H(S), 1)
            ]))), 128))
          ])
        ])) : R("", !0),
        f("div", I_, [
          h[23] || (h[23] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          f("label", M_, [
            Ue(f("input", {
              type: "checkbox",
              "onUpdate:modelValue": h[8] || (h[8] = (S) => a.value = S),
              onChange: g,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [_t, a.value]
            ]),
            h[22] || (h[22] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        p.value ? (w(), N("button", {
          key: 2,
          onClick: v,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : R("", !0)
      ]),
      (w(), lt(bn, { to: "body" }, [
        c.value ? (w(), N("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: h[11] || (h[11] = qt((S) => c.value = !1, ["self"]))
        }, [
          f("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: h[9] || (h[9] = (S) => c.value = !1)
          }),
          f("div", P_, [
            f("div", R_, [
              f("div", L_, [
                h[25] || (h[25] = f("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                f("button", {
                  onClick: h[10] || (h[10] = (S) => c.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, h[24] || (h[24] = [
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
              h[26] || (h[26] = f("div", { class: "flex-1 overflow-y-auto p-4 space-y-6" }, null, -1)),
              f("div", { class: "p-4 border-t" }, [
                f("button", {
                  onClick: T,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : R("", !0)
      ]))
    ]));
  }
}, B_ = /* @__PURE__ */ We(F_, [["__scopeId", "data-v-67473a91"]]), j_ = { class: "collection-grid" }, H_ = {
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
}, n2 = ["disabled"], s2 = { key: 0 }, o2 = { key: 1 }, r2 = {
  key: 2,
  class: "flex items-center justify-between"
}, i2 = { class: "flex-1 flex justify-between sm:hidden" }, l2 = ["disabled"], a2 = ["disabled"], c2 = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, u2 = {
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
    const t = e, n = q(!1), s = q(!1), o = q(t.currentPage), r = q(t.products.length), i = q("manual"), l = q({}), a = q(null), c = q(null), d = Z(() => {
      const b = Number(t.columnsMobile), k = t.columnsDesktop, A = b === 1 ? "grid-cols-1" : "grid-cols-2", D = k <= 3 ? `md:grid-cols-${k}` : "md:grid-cols-3", U = `lg:grid-cols-${k}`;
      return `grid ${A} ${D} ${U} gap-4 lg:gap-6`;
    }), u = Z(() => {
      var A, D, U;
      let b = [...t.products];
      switch (l.value.inStockOnly && (b = b.filter((W) => W.available)), ((A = l.value.priceRanges) == null ? void 0 : A.length) > 0 && (b = b.filter((W) => {
        const G = W.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? G < 50 : ee === "50-100" ? G >= 50 && G < 100 : ee === "100-200" ? G >= 100 && G < 200 : ee === "200+" ? G >= 200 : !1);
      })), ((D = l.value.types) == null ? void 0 : D.length) > 0 && (b = b.filter((W) => l.value.types.includes(W.product_type))), ((U = l.value.vendors) == null ? void 0 : U.length) > 0 && (b = b.filter((W) => l.value.vendors.includes(W.vendor))), l.value.sort || i.value) {
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
    }), p = Z(() => {
      if (t.enableInfiniteScroll)
        return u.value.slice(0, r.value);
      const b = (o.value - 1) * t.productsPerPage, k = b + t.productsPerPage;
      return u.value.slice(b, k);
    }), m = Z(() => t.totalPages || Math.ceil(u.value.length / t.productsPerPage)), g = Z(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : r.value < u.value.length), v = Z(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, u.value.length - r.value)), T = Z(() => {
      const b = [], k = m.value, A = o.value;
      if (k <= 7)
        for (let D = 1; D <= k; D++)
          b.push(D);
      else if (A <= 3) {
        for (let D = 1; D <= 5; D++)
          b.push(D);
        b.push("..."), b.push(k);
      } else if (A >= k - 2) {
        b.push(1), b.push("...");
        for (let D = k - 4; D <= k; D++)
          b.push(D);
      } else {
        b.push(1), b.push("...");
        for (let D = A - 1; D <= A + 1; D++)
          b.push(D);
        b.push("..."), b.push(k);
      }
      return b.filter((D) => D === "..." || D >= 1 && D <= k);
    }), C = (b) => {
      l.value = b, o.value = 1, r.value = t.productsPerPage;
    }, y = () => {
      o.value = 1, r.value = t.productsPerPage;
    }, h = () => {
      s.value = !0, setTimeout(() => {
        r.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, S = async (b) => {
      var A;
      const k = new FormData();
      k.append("id", b.variants[0].id), k.append("quantity", "1"), await ((A = window.OrionCart) == null ? void 0 : A.addItem(k)), console.log("Added to cart:", b.title);
    }, E = (b) => {
      a.value = b;
    }, V = () => {
      a.value = null;
    };
    let M = null;
    const $ = () => {
      !t.enableInfiniteScroll || !c.value || (M = new IntersectionObserver(
        (b) => {
          b[0].isIntersecting && g.value && !s.value && h();
        },
        { threshold: 0.1 }
      ), M.observe(c.value));
    };
    return Be(() => {
      $();
    }), Ct(() => {
      M && M.disconnect();
    }), nn(() => t.enableInfiniteScroll, () => {
      $();
    }), (b, k) => (w(), N("div", j_, [
      e.showHeader ? (w(), N("div", H_, [
        f("h1", U_, H(e.collectionTitle), 1),
        e.collectionDescription ? (w(), N("div", q_, H(e.collectionDescription), 1)) : R("", !0),
        f("div", z_, [
          f("p", K_, H(e.totalProducts || u.value.length) + " products ", 1),
          e.enableSorting ? (w(), N("div", W_, [
            Ue(f("select", {
              "onUpdate:modelValue": k[0] || (k[0] = (A) => i.value = A),
              onChange: y,
              class: "px-3 py-2 border border-secondary-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, k[5] || (k[5] = [
              is('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Oo, i.value]
            ])
          ])) : R("", !0)
        ])
      ])) : R("", !0),
      f("div", G_, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (w(), N("aside", Y_, [
          f("collection-filters", {
            products: e.products,
            onUpdateFilters: C
          }, null, 40, J_)
        ])) : R("", !0),
        f("div", {
          class: ke(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (w(), N("div", {
            key: 0,
            class: ke(d.value)
          }, [
            (w(), N(ie, null, be(6, (A) => f("div", {
              key: A,
              class: "animate-pulse"
            }, k[6] || (k[6] = [
              f("div", { class: "bg-secondary-200 rounded-lg aspect-[3/4]" }, null, -1),
              f("div", { class: "mt-4 space-y-2" }, [
                f("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                f("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : u.value.length === 0 ? (w(), N("div", X_, k[7] || (k[7] = [
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
          ]))) : (w(), N("div", {
            key: 2,
            class: ke(d.value)
          }, [
            (w(!0), N(ie, null, be(p.value, (A) => (w(), N("product-card", {
              key: A.id,
              product: A,
              onQuickAdd: S,
              onQuickView: E
            }, null, 40, Q_))), 128))
          ], 2)),
          !n.value && u.value.length > 0 ? (w(), N("div", Z_, [
            e.enableInfiniteScroll ? (w(), N("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (w(), N("div", e2, k[8] || (k[8] = [
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
                Fe(" Loading more products... ", -1)
              ]))) : R("", !0)
            ], 512)) : g.value ? (w(), N("div", t2, [
              f("button", {
                onClick: h,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              }, [
                s.value ? (w(), N("span", s2, "Loading...")) : (w(), N("span", o2, "Load More (" + H(v.value) + " remaining)", 1))
              ], 8, n2)
            ])) : R("", !0),
            !e.enableInfiniteScroll && m.value > 1 ? (w(), N("nav", r2, [
              f("div", i2, [
                f("button", {
                  onClick: k[1] || (k[1] = (A) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Previous ", 8, l2),
                f("button", {
                  onClick: k[2] || (k[2] = (A) => o.value++),
                  disabled: o.value === m.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                }, " Next ", 8, a2)
              ]),
              f("div", c2, [
                f("div", null, [
                  f("nav", u2, [
                    f("button", {
                      onClick: k[3] || (k[3] = (A) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 rounded-l-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, k[9] || (k[9] = [
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
                    (w(!0), N(ie, null, be(T.value, (A) => (w(), N("button", {
                      key: A,
                      onClick: (D) => o.value = A,
                      class: ke([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === A ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, H(A), 11, f2))), 128)),
                    f("button", {
                      onClick: k[4] || (k[4] = (A) => o.value++),
                      disabled: o.value === m.value,
                      class: "relative inline-flex items-center px-2 py-2 rounded-r-md border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    }, k[10] || (k[10] = [
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
            ])) : R("", !0)
          ])) : R("", !0)
        ], 2)
      ]),
      (w(), lt(bn, { to: "body" }, [
        a.value ? (w(), N("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: qt(V, ["self"])
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
                }, k[11] || (k[11] = [
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
                f("h3", v2, H(a.value.title), 1),
                k[12] || (k[12] = f("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : R("", !0)
      ]))
    ]));
  }
}, b2 = { class: "collection-sort-wrapper" }, _2 = {
  __name: "CollectionSort",
  props: {
    currentSort: {
      type: String,
      default: "manual"
    },
    collectionHandle: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const n = q(e.currentSort), s = () => new URLSearchParams(window.location.search), o = (i) => {
      const l = s();
      i === "manual" ? l.delete("sort_by") : l.set("sort_by", i);
      const a = `${window.location.pathname}${l.toString() ? "?" + l.toString() : ""}`;
      window.history.pushState({}, "", a), window.location.reload();
    }, r = () => {
      o(n.value);
    };
    return Be(() => {
      const l = s().get("sort_by");
      l && (n.value = l);
    }), (i, l) => (w(), N("div", b2, [
      Ue(f("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
        onChange: r,
        class: "px-4 py-2 min-w-[200px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      }, l[1] || (l[1] = [
        is('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option><option value="created-ascending">Date: Old to New</option><option value="created-descending">Date: New to Old</option>', 8)
      ]), 544), [
        [Oo, n.value]
      ])
    ]));
  }
}, E2 = {
  key: 0,
  class: "ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white rounded-full"
}, w2 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, x2 = { class: "absolute inset-0 overflow-hidden" }, N2 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, S2 = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, k2 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, C2 = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, O2 = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, T2 = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, $2 = { class: "mb-6" }, D2 = { class: "flex items-center cursor-pointer" }, V2 = { class: "mb-6" }, A2 = { class: "space-y-2" }, I2 = ["value"], M2 = { class: "ml-2 text-sm" }, P2 = {
  key: 0,
  class: "mb-6"
}, R2 = { class: "space-y-2" }, L2 = ["value"], F2 = { class: "ml-2 text-sm" }, B2 = {
  key: 1,
  class: "mb-6"
}, j2 = { class: "space-y-2" }, H2 = ["value"], U2 = { class: "ml-2 text-sm" }, q2 = {
  __name: "CollectionFilterDrawer",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    collectionHandle: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = q(!1), s = q({
      inStock: !1,
      priceRanges: [],
      types: [],
      vendors: []
    }), o = [
      { value: "0-50", label: "Under $50" },
      { value: "50-100", label: "$50 - $100" },
      { value: "100-200", label: "$100 - $200" },
      { value: "200+", label: "$200 & above" }
    ], r = Z(() => {
      const p = /* @__PURE__ */ new Set();
      return t.products.forEach((m) => {
        m.product_type && p.add(m.product_type);
      }), Array.from(p).sort();
    }), i = Z(() => {
      const p = /* @__PURE__ */ new Set();
      return t.products.forEach((m) => {
        m.vendor && p.add(m.vendor);
      }), Array.from(p).sort();
    }), l = Z(() => {
      let p = 0;
      return s.value.inStock && p++, p += s.value.priceRanges.length, p += s.value.types.length, p += s.value.vendors.length, p;
    }), a = () => {
      n.value = !n.value, n.value ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
    }, c = () => {
      n.value = !1, document.body.style.overflow = "";
    }, d = () => {
      const p = new URLSearchParams(window.location.search);
      p.delete("filter.v.availability"), p.delete("filter.v.price"), p.delete("filter.p.product_type"), p.delete("filter.p.vendor"), s.value.inStock && p.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((g) => {
        g === "0-50" ? (p.append("filter.v.price.gte", "0"), p.append("filter.v.price.lte", "50")) : g === "50-100" ? (p.append("filter.v.price.gte", "50"), p.append("filter.v.price.lte", "100")) : g === "100-200" ? (p.append("filter.v.price.gte", "100"), p.append("filter.v.price.lte", "200")) : g === "200+" && p.append("filter.v.price.gte", "200");
      }), s.value.types.length > 0 && s.value.types.forEach((g) => {
        p.append("filter.p.product_type", g);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((g) => {
        p.append("filter.p.vendor", g);
      });
      const m = `${window.location.pathname}${p.toString() ? "?" + p.toString() : ""}`;
      window.location.href = m;
    }, u = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const p = new URLSearchParams(window.location.search), m = [];
      for (const [T] of p)
        T.startsWith("filter.") && m.push(T);
      m.forEach((T) => p.delete(T));
      const g = p.get("sort_by"), v = `${window.location.pathname}${g ? "?sort_by=" + g : ""}`;
      window.location.href = v;
    };
    return Be(() => {
      const p = new URLSearchParams(window.location.search);
      p.get("filter.v.availability") === "1" && (s.value.inStock = !0);
      const m = p.getAll("filter.p.product_type");
      m.length > 0 && (s.value.types = m);
      const g = p.getAll("filter.p.vendor");
      g.length > 0 && (s.value.vendors = g);
    }), Be(() => () => {
      document.body.style.overflow = "";
    }), (p, m) => (w(), N("div", null, [
      f("button", {
        onClick: a,
        class: "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
      }, [
        m[4] || (m[4] = f("svg", {
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
        ], -1)),
        m[5] || (m[5] = f("span", null, "Filter", -1)),
        l.value > 0 ? (w(), N("span", E2, H(l.value), 1)) : R("", !0)
      ]),
      (w(), lt(bn, { to: "body" }, [
        ue(nt, { name: "drawer" }, {
          default: Me(() => [
            n.value ? (w(), N("div", w2, [
              f("div", x2, [
                ue(nt, { name: "fade" }, {
                  default: Me(() => [
                    n.value ? (w(), N("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : R("", !0)
                  ]),
                  _: 1
                }),
                f("div", N2, [
                  ue(nt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Me(() => [
                      n.value ? (w(), N("div", S2, [
                        f("div", k2, [
                          f("div", C2, [
                            f("div", null, [
                              m[6] || (m[6] = f("h2", { class: "text-lg font-medium text-gray-900" }, "Filters", -1)),
                              l.value > 0 ? (w(), N("p", O2, H(l.value) + " " + H(l.value === 1 ? "filter" : "filters") + " active ", 1)) : R("", !0)
                            ]),
                            f("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: c
                            }, m[7] || (m[7] = [
                              f("span", { class: "sr-only" }, "Close filters", -1),
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
                          f("div", T2, [
                            f("div", $2, [
                              m[9] || (m[9] = f("h3", { class: "font-medium mb-3" }, "Availability", -1)),
                              f("label", D2, [
                                Ue(f("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": m[0] || (m[0] = (g) => s.value.inStock = g),
                                  class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                }, null, 512), [
                                  [_t, s.value.inStock]
                                ]),
                                m[8] || (m[8] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            f("div", V2, [
                              m[10] || (m[10] = f("h3", { class: "font-medium mb-3" }, "Price", -1)),
                              f("div", A2, [
                                (w(), N(ie, null, be(o, (g) => f("label", {
                                  key: g.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Ue(f("input", {
                                    type: "checkbox",
                                    value: g.value,
                                    "onUpdate:modelValue": m[1] || (m[1] = (v) => s.value.priceRanges = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, I2), [
                                    [_t, s.value.priceRanges]
                                  ]),
                                  f("span", M2, H(g.label), 1)
                                ])), 64))
                              ])
                            ]),
                            r.value.length > 0 ? (w(), N("div", P2, [
                              m[11] || (m[11] = f("h3", { class: "font-medium mb-3" }, "Product Type", -1)),
                              f("div", R2, [
                                (w(!0), N(ie, null, be(r.value, (g) => (w(), N("label", {
                                  key: g,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Ue(f("input", {
                                    type: "checkbox",
                                    value: g,
                                    "onUpdate:modelValue": m[2] || (m[2] = (v) => s.value.types = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, L2), [
                                    [_t, s.value.types]
                                  ]),
                                  f("span", F2, H(g), 1)
                                ]))), 128))
                              ])
                            ])) : R("", !0),
                            i.value.length > 0 ? (w(), N("div", B2, [
                              m[12] || (m[12] = f("h3", { class: "font-medium mb-3" }, "Brand", -1)),
                              f("div", j2, [
                                (w(!0), N(ie, null, be(i.value, (g) => (w(), N("label", {
                                  key: g,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Ue(f("input", {
                                    type: "checkbox",
                                    value: g,
                                    "onUpdate:modelValue": m[3] || (m[3] = (v) => s.value.vendors = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, H2), [
                                    [_t, s.value.vendors]
                                  ]),
                                  f("span", U2, H(g), 1)
                                ]))), 128))
                              ])
                            ])) : R("", !0)
                          ]),
                          f("div", { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, [
                            f("button", {
                              onClick: d,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
                            }, " Apply Filters "),
                            f("button", {
                              onClick: u,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                            }, " Clear All ")
                          ])
                        ])
                      ])) : R("", !0)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])) : R("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, z2 = /* @__PURE__ */ We(q2, [["__scopeId", "data-v-98dc8517"]]), K2 = { class: "product-gallery" }, W2 = { class: "main-image-wrapper" }, G2 = ["src", "alt"], Y2 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, J2 = {
  key: 0,
  class: "thumbnails-wrapper"
}, X2 = ["disabled"], Q2 = ["onClick", "aria-label"], Z2 = ["src", "alt"], eE = ["disabled"], tE = {
  key: 1,
  class: "swiper-dots"
}, nE = ["onClick", "aria-label"], sE = ["src", "alt"], oE = { class: "lightbox-counter" }, rE = 80, qo = 4, Oc = 2, iE = {
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
    const t = e, n = q(0), s = q(!1), o = q(!1), r = q(!1), i = q(!1), l = q(0), a = q(null), c = q(0), d = q(0), u = q({}), p = Z(() => t.images.map((M) => {
      if (M.src)
        return M;
      const $ = M.url || M;
      return {
        src: `${$}?width=${t.imageTransformWidth}`,
        thumbnail: `${$}?width=${t.thumbnailWidth}`,
        alt: M.alt || t.productTitle
      };
    })), m = Z(() => p.value[n.value] || { src: "", alt: "" }), g = Z(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), v = Z(() => {
      const $ = c.value / u.value.width * 100, b = d.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * Oc}px ${u.value.height * Oc}px`,
        backgroundPosition: `${$}% ${b}%`
      };
    }), T = (M) => {
      s.value = !0, n.value = M;
    }, C = (M) => {
      M === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - qo,
        l.value + 1
      );
    }, y = (M) => {
      n.value = M, o.value = !0, document.body.style.overflow = "hidden";
    }, h = () => {
      o.value = !1, document.body.style.overflow = "";
    }, S = (M) => {
      M === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, E = (M) => {
      const $ = M.currentTarget.getBoundingClientRect();
      u.value = $, c.value = M.clientX - $.left, d.value = M.clientY - $.top;
    }, { lengthX: V } = Y1(
      a,
      {
        onSwipeEnd() {
          V.value > 50 ? C("prev") : V.value < -50 && C("next");
        }
      }
    );
    return Be(() => {
      i.value = window.innerWidth < 768;
      const M = () => {
        i.value = window.innerWidth < 768;
      }, $ = (b) => {
        o.value && (b.key === "Escape" && h(), b.key === "ArrowLeft" && S("prev"), b.key === "ArrowRight" && S("next"));
      };
      window.addEventListener("resize", M), window.addEventListener("keydown", $), Ct(() => {
        window.removeEventListener("resize", M), window.removeEventListener("keydown", $);
      });
    }), (M, $) => (w(), N("div", K2, [
      f("div", W2, [
        f("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: $[1] || ($[1] = (b) => y(n.value)),
          onMouseenter: $[2] || ($[2] = (b) => r.value = !0),
          onMouseleave: $[3] || ($[3] = (b) => r.value = !1),
          onMousemove: E
        }, [
          f("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: ke(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: $[0] || ($[0] = (b) => s.value = !1)
          }, null, 42, G2),
          s.value ? (w(), N("div", Y2, $[9] || ($[9] = [
            f("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : R("", !0),
          $[10] || ($[10] = f("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
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
          r.value && !i.value ? (w(), N("div", {
            key: 1,
            class: "zoom-lens",
            style: ht(g.value)
          }, null, 4)) : R("", !0)
        ], 32),
        r.value && !i.value ? (w(), N("div", {
          key: 0,
          class: "zoom-preview",
          style: ht(v.value)
        }, null, 4)) : R("", !0)
      ]),
      p.value.length > 1 ? (w(), N("div", J2, [
        p.value.length > qo ? (w(), N("button", {
          key: 0,
          onClick: $[4] || ($[4] = (b) => C("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, $[11] || ($[11] = [
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
        ]), 8, X2)) : R("", !0),
        f("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          f("div", {
            class: "thumbnails-track",
            style: ht({ transform: `translateX(-${l.value * (rE + 8)}px)` })
          }, [
            (w(!0), N(ie, null, be(p.value, (b, k) => (w(), N("button", {
              key: k,
              onClick: (A) => T(k),
              class: ke(["thumbnail", { active: k === n.value }]),
              "aria-label": `View image ${k + 1}`
            }, [
              f("img", {
                src: b.thumbnail || b.src,
                alt: b.alt,
                class: "w-full h-full object-contain"
              }, null, 8, Z2)
            ], 10, Q2))), 128))
          ], 4)
        ], 512),
        p.value.length > qo ? (w(), N("button", {
          key: 1,
          onClick: $[5] || ($[5] = (b) => C("next")),
          disabled: l.value >= p.value.length - qo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, $[12] || ($[12] = [
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
        ]), 8, eE)) : R("", !0)
      ])) : R("", !0),
      p.value.length > 1 && i.value ? (w(), N("div", tE, [
        (w(!0), N(ie, null, be(p.value, (b, k) => (w(), N("button", {
          key: k,
          onClick: (A) => T(k),
          class: ke(["swiper-dot", { active: k === n.value }]),
          "aria-label": `Go to image ${k + 1}`
        }, null, 10, nE))), 128))
      ])) : R("", !0),
      (w(), lt(bn, { to: "body" }, [
        o.value ? (w(), N("div", {
          key: 0,
          class: "lightbox",
          onClick: h
        }, [
          f("button", {
            onClick: h,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, $[13] || ($[13] = [
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
          p.value.length > 1 ? (w(), N("button", {
            key: 0,
            onClick: $[6] || ($[6] = qt((b) => S("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, $[14] || ($[14] = [
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
          ]))) : R("", !0),
          f("div", {
            class: "lightbox-image-wrapper",
            onClick: $[7] || ($[7] = qt(() => {
            }, ["stop"]))
          }, [
            f("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, sE)
          ]),
          p.value.length > 1 ? (w(), N("button", {
            key: 1,
            onClick: $[8] || ($[8] = qt((b) => S("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, $[15] || ($[15] = [
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
          ]))) : R("", !0),
          f("div", oE, H(n.value + 1) + " / " + H(p.value.length), 1)
        ])) : R("", !0)
      ]))
    ]));
  }
}, lE = /* @__PURE__ */ We(iE, [["__scopeId", "data-v-a7c1d2a3"]]), aE = { class: "product-info" }, cE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, uE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, dE = { class: "price-wrapper mb-6" }, fE = { class: "flex items-baseline gap-3" }, pE = { class: "text-3xl font-semibold text-gray-900" }, hE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, mE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, gE = {
  key: 1,
  class: "mb-6"
}, vE = ["product", "current-variant"], yE = ["value"], bE = { class: "mb-4" }, _E = ["max"], EE = { class: "mb-4" }, wE = {
  key: 0,
  class: "text-red-600 font-medium"
}, xE = {
  key: 1,
  class: "text-amber-600"
}, NE = {
  key: 2,
  class: "text-green-600"
}, SE = { class: "flex flex-col sm:flex-row gap-3" }, kE = ["disabled"], CE = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, OE = { key: 1 }, TE = { key: 2 }, $E = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, DE = ["innerHTML"], VE = { class: "space-y-4" }, AE = {
  key: 0,
  class: "group"
}, IE = ["innerHTML"], ME = {
  key: 1,
  class: "group"
}, PE = { class: "mt-8 pt-8 border-t" }, RE = { class: "flex gap-3" }, LE = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, FE = {
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
    const n = e, s = t, o = q(n.product.selected_or_first_available_variant || ((T = n.product.variants) == null ? void 0 : T[0]) || {}), r = q(1), i = q(!1), l = q(!1), a = Z(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = Z(() => {
      var C;
      return (C = n.product.options) == null ? void 0 : C.some(
        (y) => y.name.toLowerCase() === "size" || y.name.toLowerCase() === "taille"
      );
    }), d = (C) => `$${(C / 100).toFixed(2)}`, u = (C) => {
      o.value = C, s("variant-change", C);
      const y = new URL(window.location);
      y.searchParams.set("variant", C.id), window.history.replaceState({}, "", y);
    }, p = async () => {
      var y;
      i.value = !0;
      const C = new FormData();
      C.append("id", o.value.id), C.append("quantity", r.value);
      try {
        await ((y = window.OrionCart) == null ? void 0 : y.addItem(C));
        const h = event.target, S = h.textContent;
        h.textContent = "✓ Added to Cart", setTimeout(() => {
          h.textContent = S;
        }, 2e3);
      } catch (h) {
        console.error("Failed to add to cart:", h), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, g = (C) => {
      const y = window.location.href, h = n.product.title, S = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(y)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(y)}&text=${encodeURIComponent(h)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(y)}&description=${encodeURIComponent(h)}`
      };
      S[C] && window.open(S[C], "_blank", "width=600,height=400");
    }, v = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (C) {
        console.error("Failed to copy link:", C);
      }
    };
    return nn(() => n.product.selected_variant, (C) => {
      C && (o.value = C);
    }), (C, y) => (w(), N("div", aE, [
      f("h1", cE, H(e.product.title), 1),
      e.product.vendor ? (w(), N("p", uE, " by " + H(e.product.vendor), 1)) : R("", !0),
      f("div", dE, [
        f("div", fE, [
          f("span", pE, H(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (w(), N("span", hE, H(d(o.value.compare_at_price)), 1)) : R("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (w(), N("p", mE, " Save " + H(d(o.value.compare_at_price - o.value.price)) + " (" + H(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : R("", !0)
      ]),
      e.product.has_only_default_variant ? R("", !0) : (w(), N("div", gE, [
        f("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, vE)
      ])),
      f("form", {
        onSubmit: qt(p, ["prevent"]),
        class: "mb-8"
      }, [
        f("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, yE),
        f("div", bE, [
          y[4] || (y[4] = f("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          Ue(f("quantity-selector", {
            "onUpdate:modelValue": y[0] || (y[0] = (h) => r.value = h),
            min: 1,
            max: a.value
          }, null, 8, _E), [
            [Fn, r.value]
          ])
        ]),
        f("div", EE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (w(), N("p", xE, " Only " + H(o.value.inventory_quantity) + " left in stock ", 1)) : (w(), N("p", NE, " ✓ In Stock ")) : (w(), N("p", wE, " Out of Stock "))
        ]),
        f("div", SE, [
          f("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || i.value
          }, [
            i.value ? (w(), N("span", CE, y[5] || (y[5] = [
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
              Fe(" Adding... ", -1)
            ]))) : o.value.available ? (w(), N("span", TE, " Add to Cart ")) : (w(), N("span", OE, " Sold Out "))
          ], 8, kE),
          e.showBuyNow ? (w(), lt(xs, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Me(() => y[6] || (y[6] = [
              Fe(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : R("", !0)
        ])
      ], 32),
      e.product.description ? (w(), N("div", $E, [
        y[7] || (y[7] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        f("div", {
          innerHTML: e.product.description
        }, null, 8, DE)
      ])) : R("", !0),
      f("div", VE, [
        y[10] || (y[10] = is('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (w(), N("details", AE, [
          y[8] || (y[8] = f("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
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
          }, null, 8, IE)
        ])) : R("", !0),
        c.value ? (w(), N("details", ME, y[9] || (y[9] = [
          is('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : R("", !0)
      ]),
      f("div", PE, [
        y[15] || (y[15] = f("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        f("div", RE, [
          f("button", {
            onClick: y[1] || (y[1] = (h) => g("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, y[11] || (y[11] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          f("button", {
            onClick: y[2] || (y[2] = (h) => g("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, y[12] || (y[12] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          f("button", {
            onClick: y[3] || (y[3] = (h) => g("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, y[13] || (y[13] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          f("button", {
            onClick: v,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            y[14] || (y[14] = f("svg", {
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
            l.value ? (w(), N("span", LE, " Link copied! ")) : R("", !0)
          ])
        ])
      ])
    ]));
  }
}, BE = /* @__PURE__ */ We(FE, [["__scopeId", "data-v-9e2c3b5c"]]), jE = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, HE = { class: "space-y-3 mb-4" }, UE = { class: "flex justify-between text-sm" }, qE = { class: "text-gray-600" }, zE = { class: "font-medium text-gray-900" }, KE = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, WE = {
  key: 1,
  class: "flex justify-between text-sm"
}, GE = { class: "text-gray-900" }, YE = {
  key: 2,
  class: "flex justify-between text-sm"
}, JE = { class: "text-gray-900" }, XE = { class: "border-t pt-4 mb-6" }, QE = { class: "flex justify-between items-baseline" }, ZE = { class: "text-right" }, ew = { class: "text-xl font-bold text-gray-900" }, tw = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, nw = { class: "mb-6" }, sw = { class: "group" }, ow = { class: "mt-3" }, rw = ["disabled"], iw = ["disabled"], lw = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, aw = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, cw = ["disabled"], uw = {
  key: 0,
  class: "flex items-center gap-2"
}, dw = { key: 1 }, fw = {
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
    const n = e, s = t, o = q(""), r = q(""), i = q(""), l = q(!1), a = q(!1), c = Z(() => n.cart.item_count || 0), d = Z(() => n.cart.total_price || 0), u = Z(() => n.cart.original_total_price || n.cart.total_price || 0), p = Z(() => n.cart.total_discount || 0), m = Z(() => d.value >= 5e3 ? 0 : 500), g = Z(() => Math.round(d.value * 0.1)), v = (y) => `$${(y / 100).toFixed(2)}`, T = async () => {
      var y;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, r.value = "", i.value = "";
        try {
          const h = new FormData();
          h.append("discount_code", o.value);
          const S = await fetch("/discount/apply", {
            method: "POST",
            body: h
          });
          if (S.ok)
            i.value = "Promo code applied successfully!", o.value = "", await ((y = window.OrionCart) == null ? void 0 : y.fetchCart());
          else {
            const E = await S.json();
            r.value = E.message || "Invalid promo code";
          }
        } catch (h) {
          console.error("Failed to apply promo code:", h), r.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, C = async () => {
      if (!(c.value === 0 || a.value)) {
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
    return (y, h) => (w(), N("div", jE, [
      h[8] || (h[8] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      f("div", HE, [
        f("div", UE, [
          f("span", qE, "Subtotal (" + H(c.value) + " " + H(c.value === 1 ? "item" : "items") + ")", 1),
          f("span", zE, H(v(u.value)), 1)
        ]),
        p.value > 0 ? (w(), N("div", KE, [
          h[1] || (h[1] = f("span", { class: "flex items-center gap-1" }, [
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
            Fe(" Discounts ")
          ], -1)),
          f("span", null, "-" + H(v(p.value)), 1)
        ])) : R("", !0),
        e.showShipping ? (w(), N("div", WE, [
          h[2] || (h[2] = f("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          f("span", GE, H(m.value === 0 ? "Free" : v(m.value)), 1)
        ])) : R("", !0),
        e.showTax ? (w(), N("div", YE, [
          h[3] || (h[3] = f("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          f("span", JE, H(v(g.value)), 1)
        ])) : R("", !0)
      ]),
      f("div", XE, [
        f("div", QE, [
          h[4] || (h[4] = f("span", { class: "text-lg font-semibold" }, "Total", -1)),
          f("div", ZE, [
            f("span", ew, H(v(d.value)), 1),
            p.value > 0 ? (w(), N("p", tw, " You saved " + H(v(p.value)) + "! ", 1)) : R("", !0)
          ])
        ])
      ]),
      f("div", nw, [
        f("details", sw, [
          h[5] || (h[5] = f("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          f("div", ow, [
            f("form", {
              onSubmit: qt(T, ["prevent"]),
              class: "flex gap-2"
            }, [
              Ue(f("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (S) => o.value = S),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, rw), [
                [Fn, o.value]
              ]),
              f("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                disabled: !o.value.trim() || l.value
              }, H(l.value ? "Applying..." : "Apply"), 9, iw)
            ], 32),
            r.value ? (w(), N("p", lw, H(r.value), 1)) : R("", !0),
            i.value ? (w(), N("p", aw, H(i.value), 1)) : R("", !0)
          ])
        ])
      ]),
      f("button", {
        onClick: C,
        class: "w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        disabled: c.value === 0 || a.value
      }, [
        a.value ? (w(), N("span", uw, h[6] || (h[6] = [
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
          Fe(" Processing... ", -1)
        ]))) : (w(), N("span", dw, h[7] || (h[7] = [
          Fe(" Proceed to Checkout ", -1),
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
      ], 8, cw),
      h[9] || (h[9] = is('<div class="mt-6 space-y-2" data-v-d638da26><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-d638da26></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-d638da26></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-d638da26></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-d638da26><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-d638da26><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-d638da26></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-d638da26><p class="text-xs text-gray-600 mb-2" data-v-d638da26>We accept</p><div class="flex gap-2" data-v-d638da26><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-d638da26></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#EB001B" data-v-d638da26></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-d638da26></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-d638da26></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-d638da26></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-d638da26></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-d638da26><rect width="48" height="32" rx="4" fill="#253B80" data-v-d638da26></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-d638da26></path></svg></div></div>', 2))
    ]));
  }
}, pw = /* @__PURE__ */ We(fw, [["__scopeId", "data-v-d638da26"]]), hw = { class: "slideshow-banner" }, mw = {
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
    const t = e, n = q(0), s = q([]), o = q(null), r = Z(() => t.autoRotate === !0 || t.autoRotate === "true"), i = Z(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const v = document.querySelector(".slideshow-prev"), T = document.querySelector(".slideshow-next"), C = document.querySelectorAll(".slide-indicator");
      v && v.addEventListener("click", d), T && T.addEventListener("click", c), C.forEach((y, h) => {
        y.addEventListener("click", () => a(h));
      }), r.value && u();
    }, a = (v) => {
      var y, h, S, E;
      if (v === n.value || !s.value.length) return;
      (y = s.value[n.value]) == null || y.classList.remove("opacity-100"), (h = s.value[n.value]) == null || h.classList.add("opacity-0");
      const T = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      T == null || T.classList.remove("opacity-100"), T == null || T.classList.add("opacity-50"), n.value = v, (S = s.value[n.value]) == null || S.classList.remove("opacity-0"), (E = s.value[n.value]) == null || E.classList.add("opacity-100");
      const C = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      C == null || C.classList.remove("opacity-50"), C == null || C.classList.add("opacity-100");
    }, c = () => {
      const v = (n.value + 1) % s.value.length;
      a(v);
    }, d = () => {
      const v = n.value === 0 ? s.value.length - 1 : n.value - 1;
      a(v);
    }, u = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        c();
      }, i.value);
    }, p = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, m = () => {
      r.value && p();
    }, g = () => {
      r.value && u();
    };
    return Be(() => {
      setTimeout(l, 100);
      const v = document.querySelector(".slideshow-wrapper");
      v && (v.addEventListener("mouseenter", m), v.addEventListener("mouseleave", g));
    }), Ct(() => {
      p();
      const v = document.querySelector(".slideshow-wrapper");
      v && (v.removeEventListener("mouseenter", m), v.removeEventListener("mouseleave", g));
    }), (v, T) => (w(), N("div", hw, [
      jn(v.$slots, "default", {}, void 0, !0)
    ]));
  }
}, gw = /* @__PURE__ */ We(mw, [["__scopeId", "data-v-8690c751"]]), vw = { class: "testimonials-carousel relative" }, yw = {
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
    const t = e, n = q(0), s = q([]), o = q(null), r = q(null), i = Z(() => t.autoRotate === !0 || t.autoRotate === "true"), l = Z(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), r.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const E = document.querySelector(".testimonials-prev"), V = document.querySelector(".testimonials-next"), M = document.querySelectorAll(".testimonial-indicator");
      E && E.addEventListener("click", u), V && V.addEventListener("click", d), M.forEach(($, b) => {
        $.addEventListener("click", () => c(b));
      }), i.value && p();
    }, c = (E) => {
      if (E === n.value || !s.value.length || !r.value) return;
      n.value = E;
      const M = -s.value[0].offsetWidth * n.value;
      r.value.style.transform = `translateX(${M}px)`, document.querySelectorAll(".testimonial-indicator").forEach((b, k) => {
        k === n.value ? (b.classList.remove("bg-gray-300"), b.classList.add("bg-red-600")) : (b.classList.remove("bg-red-600"), b.classList.add("bg-gray-300"));
      });
    }, d = () => {
      const E = (n.value + 1) % s.value.length;
      c(E);
    }, u = () => {
      const E = n.value === 0 ? s.value.length - 1 : n.value - 1;
      c(E);
    }, p = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        d();
      }, l.value);
    }, m = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, g = () => {
      i.value && m();
    }, v = () => {
      i.value && p();
    };
    let T = 0, C = 0;
    const y = (E) => {
      T = E.changedTouches[0].screenX;
    }, h = (E) => {
      C = E.changedTouches[0].screenX, S();
    }, S = () => {
      const V = T - C;
      Math.abs(V) > 50 && (V > 0 ? d() : u());
    };
    return Be(() => {
      setTimeout(a, 100);
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.addEventListener("mouseenter", g), E.addEventListener("mouseleave", v), E.addEventListener("touchstart", y), E.addEventListener("touchend", h));
    }), Ct(() => {
      m();
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.removeEventListener("mouseenter", g), E.removeEventListener("mouseleave", v), E.removeEventListener("touchstart", y), E.removeEventListener("touchend", h));
    }), (E, V) => (w(), N("div", vw, [
      jn(E.$slots, "default", {}, void 0, !0)
    ]));
  }
}, bw = /* @__PURE__ */ We(yw, [["__scopeId", "data-v-276cc4e8"]]), _w = { class: "video-player relative w-full h-full" }, Ew = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, ww = ["src", "title"], xw = {
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
    const t = e, n = q(!1), s = q(""), o = q(""), r = Z(() => t.autoplay === !0 || t.autoplay === "true"), i = Z(() => t.muted === !0 || t.muted === "true"), l = Z(() => t.controls === !0 || t.controls === "true"), a = Z(() => `${s.value} video player`), c = Z(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const g = r.value ? "1" : "0", v = i.value ? "1" : "0", T = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${g}&mute=${v}&controls=${T}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${g}&muted=${v}&controls=${T}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
      if (!m) return { type: "", id: "" };
      const g = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const T of g) {
        const C = m.match(T);
        if (C)
          return { type: "youtube", id: C[1] };
      }
      const v = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const T of v) {
        const C = m.match(T);
        if (C)
          return { type: "vimeo", id: C[1] };
      }
      return { type: "", id: "" };
    }, u = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      r.value && o.value && s.value && (n.value = !0);
    };
    return Be(() => {
      const m = d(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const g = document.querySelector(".play-button");
      g && g.addEventListener("click", u), p();
    }), (m, g) => (w(), N("div", _w, [
      n.value ? (w(), N("div", Ew, [
        f("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, ww)
      ])) : (w(), N("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        jn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, Nw = /* @__PURE__ */ We(xw, [["__scopeId", "data-v-540fecb2"]]), Sw = { class: "password-modal" }, kw = {
  __name: "PasswordModal",
  setup(e) {
    const t = q(!1), n = () => {
      t.value = !0, document.body.style.overflow = "hidden";
    }, s = () => {
      t.value = !1, document.body.style.overflow = "";
    }, o = (c) => {
      c.preventDefault(), t.value ? s() : n();
    }, r = (c) => {
      c.key === "Escape" && t.value && s();
    }, i = (c) => {
      const d = document.querySelector(".password-content"), u = document.querySelector(".password-toggle");
      t.value && d && !d.contains(c.target) && !u.contains(c.target) && s();
    };
    Be(() => {
      const c = document.querySelector(".password-toggle");
      c && c.addEventListener("click", o), document.addEventListener("keydown", r), document.addEventListener("click", i), setTimeout(() => {
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
    return Be(() => {
      a(() => {
        l();
      });
    }), (c, d) => (w(), N("div", Sw, [
      jn(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Cw = /* @__PURE__ */ We(kw, [["__scopeId", "data-v-075988c6"]]), Ow = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Tw = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, $w = { class: "bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20" }, Dw = { class: "max-w-6xl mx-auto" }, Vw = { class: "relative" }, Aw = { class: "px-4 py-8 sm:px-6 lg:px-8" }, Iw = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, Mw = { class: "flex-1 relative group" }, Pw = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, Rw = {
  key: 0,
  class: "relative"
}, Lw = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, Fw = { class: "flex flex-wrap gap-2" }, Bw = ["onClick"], jw = {
  key: 0,
  class: "border-t border-gray-100"
}, Hw = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, Uw = {
  key: 0,
  class: "p-6"
}, qw = { class: "animate-pulse" }, zw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Kw = {
  key: 1,
  class: "p-6"
}, Ww = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Gw = ["href"], Yw = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, Jw = ["src", "alt"], Xw = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, Qw = { class: "flex-1 min-w-0" }, Zw = { class: "text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2" }, ex = { class: "mt-1 flex items-center gap-2" }, tx = { class: "text-sm font-semibold text-gray-900" }, nx = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, sx = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, ox = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, rx = ["href"], ix = { class: "text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors" }, lx = {
  key: 3,
  class: "p-12 text-center"
}, ax = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, cx = ["href"], ux = {
  __name: "SearchOverlay",
  setup(e) {
    const t = q(!1), n = q(""), s = q(null), o = q(!1), r = q({
      products: [],
      collections: []
    }), i = q(null), l = Z(() => {
      var C;
      return ((C = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : C.search) || "/search";
    }), a = Z(() => n.value.length > 0), c = q([
      "New Arrivals",
      "Best Sellers",
      "Sale",
      "Summer Collection"
    ]), d = (C) => {
      var V, M;
      if (!C && C !== 0) return "$0.00";
      const y = ((V = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : V.money_format) || "${{amount}}", h = ((M = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : M.current) || "en", E = new Intl.NumberFormat(h, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(C));
      return y.replace("{{amount}}", E);
    }, u = async () => {
      var C;
      t.value = !0, document.body.style.overflow = "hidden", await Ls(), (C = s.value) == null || C.focus();
    }, p = () => {
      t.value = !1, document.body.style.overflow = "", n.value = "", r.value = { products: [], collections: [] };
    }, m = () => {
      if (clearTimeout(i.value), n.value.length < 2) {
        r.value = { products: [], collections: [] }, o.value = !1;
        return;
      }
      o.value = !0, i.value = setTimeout(() => {
        g();
      }, 300);
    }, g = async () => {
      var C;
      try {
        const y = ((C = window.routes) == null ? void 0 : C.predictive_search_url) || "/search/suggest", h = await fetch(
          `${y}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (h.ok) {
          const S = await h.text(), M = new DOMParser().parseFromString(S, "text/html").querySelectorAll(".predictive-search__list-item"), $ = Array.from(M).map((b) => {
            var W, G;
            const k = b.querySelector("a"), A = b.querySelector("img"), D = b.querySelector(".predictive-search__item-head"), U = b.querySelector(".price__item");
            return {
              url: (k == null ? void 0 : k.href) || "#",
              image: (A == null ? void 0 : A.src) || "",
              title: ((W = D == null ? void 0 : D.textContent) == null ? void 0 : W.trim()) || "",
              price: ((G = U == null ? void 0 : U.textContent) == null ? void 0 : G.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          r.value = {
            products: $,
            collections: []
            // Collections can be added if needed
          };
        }
      } catch (y) {
        console.error("Search error:", y), r.value = { products: [], collections: [] };
      } finally {
        o.value = !1;
      }
    }, v = () => {
      n.value && (window.location.href = `${l.value}?q=${encodeURIComponent(n.value)}`);
    }, T = (C) => {
      C.key === "Escape" && t.value && p();
    };
    return Be(() => {
      document.addEventListener("search-overlay:open", u), document.addEventListener("search-overlay:close", p), document.addEventListener("keydown", T);
    }), Ct(() => {
      document.removeEventListener("search-overlay:open", u), document.removeEventListener("search-overlay:close", p), document.removeEventListener("keydown", T);
    }), (C, y) => (w(), lt(bn, { to: "body" }, [
      ue(nt, { name: "search-overlay" }, {
        default: Me(() => [
          t.value ? (w(), N("div", Ow, [
            ue(nt, { name: "fade" }, {
              default: Me(() => [
                t.value ? (w(), N("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-all duration-300",
                  onClick: p
                })) : R("", !0)
              ]),
              _: 1
            }),
            ue(nt, {
              name: "slide-down",
              appear: ""
            }, {
              default: Me(() => {
                var h, S;
                return [
                  t.value ? (w(), N("div", Tw, [
                    f("div", $w, [
                      f("div", Dw, [
                        f("div", Vw, [
                          f("div", Aw, [
                            f("div", Iw, [
                              f("div", Mw, [
                                y[4] || (y[4] = f("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
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
                                Ue(f("input", {
                                  ref_key: "searchInput",
                                  ref: s,
                                  "onUpdate:modelValue": y[0] || (y[0] = (E) => n.value = E),
                                  type: "search",
                                  placeholder: "Search for products, collections...",
                                  class: "w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 focus:bg-white transition-all duration-200",
                                  onInput: m,
                                  onKeydown: [
                                    br(p, ["escape"]),
                                    br(v, ["enter"])
                                  ]
                                }, null, 544), [
                                  [Fn, n.value]
                                ]),
                                f("div", Pw, [
                                  o.value ? (w(), N("div", Rw, y[2] || (y[2] = [
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (w(), N("button", {
                                    key: 1,
                                    onClick: y[1] || (y[1] = (E) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, y[3] || (y[3] = [
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
                                  ]))) : R("", !0)
                                ])
                              ]),
                              f("button", {
                                type: "button",
                                class: "p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200",
                                onClick: p
                              }, y[5] || (y[5] = [
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
                            !n.value && !o.value ? (w(), N("div", Lw, [
                              y[6] || (y[6] = f("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              f("div", Fw, [
                                (w(!0), N(ie, null, be(c.value, (E) => (w(), N("button", {
                                  key: E,
                                  onClick: (V) => {
                                    n.value = E, m();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, H(E), 9, Bw))), 128))
                              ])
                            ])) : R("", !0)
                          ]),
                          a.value ? (w(), N("div", jw, [
                            f("div", Hw, [
                              o.value ? (w(), N("div", Uw, [
                                f("div", qw, [
                                  y[8] || (y[8] = f("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  f("div", zw, [
                                    (w(), N(ie, null, be(4, (E) => f("div", {
                                      key: E,
                                      class: "flex items-start space-x-3"
                                    }, y[7] || (y[7] = [
                                      f("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      f("div", { class: "flex-1" }, [
                                        f("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        f("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : r.value.products && r.value.products.length > 0 ? (w(), N("div", Kw, [
                                y[10] || (y[10] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                f("div", Ww, [
                                  (w(!0), N(ie, null, be(r.value.products, (E) => (w(), N("a", {
                                    key: E.id,
                                    href: E.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: p
                                  }, [
                                    f("div", Yw, [
                                      E.image ? (w(), N("img", {
                                        key: 0,
                                        src: E.image,
                                        alt: E.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, Jw)) : (w(), N("div", Xw, y[9] || (y[9] = [
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
                                    f("div", Qw, [
                                      f("p", Zw, H(E.title), 1),
                                      f("div", ex, [
                                        f("p", tx, H(d(E.price)), 1),
                                        E.compareAtPrice && E.compareAtPrice > E.price ? (w(), N("p", nx, H(d(E.compareAtPrice)), 1)) : R("", !0)
                                      ])
                                    ])
                                  ], 8, Gw))), 128))
                                ])
                              ])) : R("", !0),
                              r.value.collections && r.value.collections.length > 0 ? (w(), N("div", sx, [
                                y[12] || (y[12] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                f("div", ox, [
                                  (w(!0), N(ie, null, be(r.value.collections, (E) => (w(), N("a", {
                                    key: E.id,
                                    href: E.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: p
                                  }, [
                                    f("span", ix, H(E.title), 1),
                                    y[11] || (y[11] = f("svg", {
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
                                  ], 8, rx))), 128))
                                ])
                              ])) : R("", !0),
                              n.value && !o.value && (!r.value.products || r.value.products.length === 0) && (!r.value.collections || r.value.collections.length === 0) ? (w(), N("div", lx, y[13] || (y[13] = [
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
                              ]))) : R("", !0)
                            ]),
                            n.value && (((h = r.value.products) == null ? void 0 : h.length) > 0 || ((S = r.value.collections) == null ? void 0 : S.length) > 0) ? (w(), N("div", ax, [
                              f("a", {
                                href: `${l.value}?q=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: p
                              }, [
                                Fe(' View all results for "' + H(n.value) + '" ', 1),
                                y[14] || (y[14] = f("svg", {
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
                              ], 8, cx)
                            ])) : R("", !0)
                          ])) : R("", !0)
                        ])
                      ])
                    ])
                  ])) : R("", !0)
                ];
              }),
              _: 1
            })
          ])) : R("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, dx = /* @__PURE__ */ We(ux, [["__scopeId", "data-v-4750b7e7"]]), fx = {
  name: "ArticleCard",
  props: {
    title: {
      type: String,
      required: !0
    },
    url: {
      type: String,
      required: !0
    },
    excerpt: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: ""
    },
    publishedAt: {
      type: String,
      default: ""
    },
    rawPublishedAt: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    imageAlt: {
      type: String,
      default: ""
    },
    tags: {
      type: [Array, String],
      default: () => []
    },
    imageRatio: {
      type: String,
      default: "landscape",
      validator: (e) => ["landscape", "square", "portrait"].includes(e)
    },
    showImage: {
      type: Boolean,
      default: !0
    },
    showAuthor: {
      type: Boolean,
      default: !1
    },
    showDate: {
      type: Boolean,
      default: !0
    },
    showTags: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = Z(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), n = Z(() => {
      if (!e.tags) return [];
      if (typeof e.tags == "string")
        try {
          const i = JSON.parse(e.tags);
          return Array.isArray(i) ? i : [];
        } catch {
          return [];
        }
      return Array.isArray(e.tags) ? e.tags : [];
    }), s = Z(() => {
      if (!e.image) return "";
      if (typeof e.image == "string" && e.image.startsWith("{"))
        try {
          const i = JSON.parse(e.image);
          return i.mediaUrl || i.url || "";
        } catch {
          return e.image;
        }
      return e.image;
    }), o = Z(() => {
      var l, a;
      if (e.publishedAt && e.publishedAt.trim() && !e.publishedAt.match(/^\d+$/) && // Not just a timestamp
      !e.publishedAt.includes("T") && // Not ISO date format
      !e.publishedAt.match(/^\d{4}-\d{2}-\d{2}/) && // Not YYYY-MM-DD format
      e.publishedAt.length < 20)
        return e.publishedAt;
      const i = e.rawPublishedAt || e.publishedAt;
      if (!i) return "";
      try {
        let c;
        const d = String(i).trim();
        if (/^\d+$/.test(d)) {
          const p = parseInt(d);
          c = new Date(p > 1e12 ? p : p * 1e3);
        } else if (typeof i == "string")
          c = new Date(i);
        else
          return "";
        if (isNaN(c.getTime()) || c.getFullYear() < 1900 || c.getFullYear() > 2100)
          return console.warn("Invalid or unreasonable date:", i, "parsed as:", c), "";
        const u = typeof window < "u" && typeof window.Shopline < "u" && ((a = (l = window.Shopline) == null ? void 0 : l.locale) == null ? void 0 : a.current) || "en";
        return new Intl.DateTimeFormat(u, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(c);
      } catch (c) {
        return console.warn("Error formatting date:", c, i), "";
      }
    }), r = Z(() => {
      if (!e.content) return "";
      const i = e.content.replace(/<[^>]*>/g, "");
      return i.length <= 150 ? i : i.substring(0, 150).trim() + "...";
    });
    return {
      imageAspectClass: t,
      processedTags: n,
      processedImage: s,
      formattedDate: o,
      truncatedContent: r
    };
  }
}, px = { class: "group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 h-full flex flex-col border border-gray-100" }, hx = ["href"], mx = ["src", "alt"], gx = { class: "relative p-6 flex-1 flex flex-col z-10" }, vx = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, yx = { class: "text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight" }, bx = ["href"], _x = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, Ex = { key: 0 }, wx = {
  key: 1,
  class: "text-gray-300"
}, xx = ["datetime"], Nx = { class: "flex-1 mb-6" }, Sx = {
  key: 0,
  class: "text-gray-600 leading-relaxed line-clamp-3"
}, kx = ["innerHTML"], Cx = { class: "mt-auto" }, Ox = ["href"];
function Tx(e, t, n, s, o, r) {
  return w(), N("article", px, [
    t[2] || (t[2] = f("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (w(), N("div", {
      key: 0,
      class: ke([s.imageAspectClass, "relative overflow-hidden"])
    }, [
      f("a", {
        href: n.url,
        class: "block w-full h-full"
      }, [
        f("img", {
          src: s.processedImage,
          alt: n.imageAlt,
          class: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
          loading: "lazy"
        }, null, 8, mx),
        t[0] || (t[0] = f("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, hx)
    ], 2)) : R("", !0),
    f("div", gx, [
      n.showTags && s.processedTags.length > 0 ? (w(), N("div", vx, [
        (w(!0), N(ie, null, be(s.processedTags.slice(0, 3), (i) => (w(), N("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, H(i), 1))), 128))
      ])) : R("", !0),
      f("h3", yx, [
        f("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, H(n.title), 9, bx)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (w(), N("div", _x, [
        n.showAuthor && n.author ? (w(), N("span", Ex, H(n.author), 1)) : R("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (w(), N("span", wx, "•")) : R("", !0),
        n.showDate && s.formattedDate ? (w(), N("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, H(s.formattedDate), 9, xx)) : R("", !0)
      ])) : R("", !0),
      f("div", Nx, [
        n.excerpt ? (w(), N("p", Sx, H(n.excerpt), 1)) : n.content ? (w(), N("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-3",
          innerHTML: s.truncatedContent
        }, null, 8, kx)) : R("", !0)
      ]),
      f("div", Cx, [
        f("a", {
          href: n.url,
          class: "inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm group transition-colors duration-300"
        }, t[1] || (t[1] = [
          f("span", null, "Read Article", -1),
          f("svg", {
            class: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300",
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
        ]), 8, Ox)
      ])
    ])
  ]);
}
const $x = /* @__PURE__ */ We(fx, [["render", Tx], ["__scopeId", "data-v-3471d8e5"]]), Dx = /* @__PURE__ */ je({
  ...xs,
  props: {
    ...xs.props,
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
}), Vx = /* @__PURE__ */ je(Af), Ax = /* @__PURE__ */ je(x1), Ix = /* @__PURE__ */ je(B1), Mx = /* @__PURE__ */ je(Df), Px = /* @__PURE__ */ je(Q1), Rx = /* @__PURE__ */ je(Mf), Lx = /* @__PURE__ */ je(zb), Fx = /* @__PURE__ */ je(B_), Bx = /* @__PURE__ */ je(y2), jx = /* @__PURE__ */ je(lE), Hx = /* @__PURE__ */ je(BE), Ux = /* @__PURE__ */ je(Vf), qx = /* @__PURE__ */ je(pw), zx = /* @__PURE__ */ je(gw), Kx = /* @__PURE__ */ je(bw), Wx = /* @__PURE__ */ je(Nw), Gx = /* @__PURE__ */ je(Cw), Yx = /* @__PURE__ */ je(dx);
customElements.define("orion-button", Dx);
customElements.define("cart-drawer", Vx);
customElements.define("mobile-menu", Ax);
customElements.define("product-variant-picker", Ix);
customElements.define("quantity-selector", Mx);
customElements.define("sticky-header", Px);
customElements.define("main-header", Rx);
customElements.define("site-footer", Lx);
customElements.define("collection-filters", Fx);
customElements.define("collection-grid", Bx);
customElements.define("product-gallery", jx);
customElements.define("product-info", Hx);
customElements.define("cart-item", Ux);
customElements.define("cart-summary", qx);
customElements.define("slideshow-banner", zx);
customElements.define("testimonials-carousel", Kx);
customElements.define("video-player", Wx);
customElements.define("password-modal", Gx);
customElements.define("search-overlay", Yx);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".main-header-mount").forEach((l) => {
    fn(Mf, {
      shopName: l.dataset.shopName || "Orion Store",
      logoUrl: l.dataset.logoUrl || "",
      navigationLinks: JSON.parse(l.dataset.navigationLinks || "[]")
    }).mount(l);
  }), document.querySelectorAll(".cart-drawer-mount").forEach((l) => {
    fn(Af).mount(l);
  }), document.querySelectorAll("product-card").forEach((l) => {
    const a = {
      productId: l.getAttribute("product-id"),
      variantId: l.getAttribute("variant-id"),
      title: l.getAttribute("title"),
      handle: l.getAttribute("handle"),
      url: l.getAttribute("url"),
      vendor: l.getAttribute("vendor"),
      price: l.getAttribute("price"),
      compareAtPrice: l.getAttribute("compare-at-price"),
      image: l.getAttribute("image"),
      available: l.getAttribute(":available") === "true"
    };
    fn(m_, a).mount(l);
  }), document.querySelectorAll("collection-sort").forEach((l) => {
    const a = {
      collectionHandle: l.getAttribute("collection-handle"),
      currentSort: l.getAttribute("current-sort") || "manual"
    };
    fn(_2, a).mount(l);
  }), document.querySelectorAll("collection-filter-drawer").forEach((l) => {
    const a = {
      collectionHandle: l.getAttribute("collection-handle"),
      products: JSON.parse(l.getAttribute(":products") || "[]")
    };
    fn(z2, a).mount(l);
  }), document.querySelectorAll("article-card").forEach((l) => {
    const a = {
      title: l.getAttribute("title"),
      url: l.getAttribute("url"),
      excerpt: l.getAttribute("excerpt"),
      content: l.getAttribute("content"),
      author: l.getAttribute("author"),
      publishedAt: l.getAttribute("published-at"),
      rawPublishedAt: l.getAttribute("raw-published-at"),
      image: l.getAttribute("image"),
      imageAlt: l.getAttribute("image-alt"),
      tags: JSON.parse(l.getAttribute("tags") || "[]"),
      imageRatio: l.getAttribute("image-ratio") || "landscape",
      showImage: l.getAttribute("show-image") === "true",
      showAuthor: l.getAttribute("show-author") === "true",
      showDate: l.getAttribute("show-date") === "true",
      showTags: l.getAttribute("show-tags") === "true"
    };
    fn($x, a).mount(l);
  }), document.querySelectorAll(".sticky-header").forEach((l) => {
    if (l.dataset.sticky === "true") {
      let a = window.scrollY;
      window.addEventListener("scroll", () => {
        const c = window.scrollY, d = l.dataset.transparent === "true", u = l.dataset.hideOnScroll === "true";
        c > 100 && !d ? (l.classList.add("sticky", "top-0", "shadow-md"), l.style.backgroundColor = l.dataset.stickyBackground || "#ffffff") : (l.classList.remove("sticky", "shadow-md"), l.style.backgroundColor = ""), u && (c > a && c > 100 ? l.style.transform = "translateY(-100%)" : l.style.transform = "translateY(0)"), a = c;
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
      var l;
      try {
        const c = await (await fetch((((l = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : l.cart) || "/cart") + ".js")).json();
        return this.state.items = c.items, this.state.totalPrice = c.total_price, this.state.itemCount = c.item_count, document.dispatchEvent(new CustomEvent("cart:updated", { detail: c })), c;
      } catch (a) {
        console.error("Failed to fetch cart:", a);
      }
    },
    async addItem(l) {
      var a;
      try {
        let c;
        l instanceof FormData ? c = await fetch(((a = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : a.cart_add) || "/cart/add", {
          method: "POST",
          body: l
        }) : c = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(l)
        });
        const d = await c.json();
        return await this.fetchCart(), this.openDrawer(), d;
      } catch (c) {
        console.error("Failed to add item to cart:", c);
      }
    },
    async updateItem(l, a, c = null) {
      try {
        const d = {
          quantity: a
        };
        c !== null ? d.line = c : d.id = l;
        const p = await (await fetch("/api/carts/ajax-cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(d)
        })).json();
        return await this.fetchCart(), p;
      } catch (d) {
        console.error("Failed to update cart:", d);
      }
    },
    async removeItem(l, a = null) {
      return this.updateItem(l, 0, a);
    },
    openDrawer() {
      this.state.isOpen = !0, document.dispatchEvent(new CustomEvent("cart:open"));
    },
    closeDrawer() {
      this.state.isOpen = !1, document.dispatchEvent(new CustomEvent("cart:close"));
    }
  }, window.OrionCart.fetchCart(), document.addEventListener("cart:updated", (l) => {
    const a = l.detail.item_count;
    document.querySelectorAll(".cart-count").forEach((d) => {
      a > 0 ? (d.textContent = a, d.style.opacity = "1") : d.style.opacity = "0";
    });
  });
});
