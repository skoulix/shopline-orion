var sl = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = sl.NODE_ENV !== "production" ? Object.freeze({}) : {}, ys = sl.NODE_ENV !== "production" ? Object.freeze([]) : [], $e = () => {
}, Ks = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tr = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ol = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Bf = Object.prototype.hasOwnProperty, ge = (e, t) => Bf.call(e, t), Y = Array.isArray, Jn = (e) => Rs(e) === "[object Map]", us = (e) => Rs(e) === "[object Set]", la = (e) => Rs(e) === "[object Date]", jf = (e) => Rs(e) === "[object RegExp]", oe = (e) => typeof e == "function", le = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", $r = (e) => (me(e) || oe(e)) && oe(e.then) && oe(e.catch), Dc = Object.prototype.toString, Rs = (e) => Dc.call(e), rl = (e) => Rs(e).slice(8, -1), Dr = (e) => Rs(e) === "[object Object]", il = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ Ye(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vc = /* @__PURE__ */ Ye(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Vr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hf = /-(\w)/g, Ce = Vr(
  (e) => e.replace(Hf, (t, n) => n ? n.toUpperCase() : "")
), Uf = /\B([A-Z])/g, nt = Vr(
  (e) => e.replace(Uf, "-$1").toLowerCase()
), rn = Vr((e) => e.charAt(0).toUpperCase() + e.slice(1)), tn = Vr(
  (e) => e ? `on${rn(e)}` : ""
), ft = (e, t) => !Object.is(e, t), $n = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, os = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, nr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, sr = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let aa;
const xo = () => aa || (aa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qf(e, t) {
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
}, zf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Kf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Wf = /* @__PURE__ */ Ye(Kf), ca = 2;
function Gf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const o = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let r = 0;
  const i = [];
  for (let l = 0; l < s.length; l++)
    if (r += s[l].length + (o[l] && o[l].length || 0), r >= t) {
      for (let a = l - ca; a <= l + ca || n > r; a++) {
        if (a < 0 || a >= s.length) continue;
        const u = a + 1;
        i.push(
          `${u}${" ".repeat(Math.max(3 - String(u).length, 0))}|  ${s[a]}`
        );
        const d = s[a].length, c = o[a] && o[a].length || 0;
        if (a === l) {
          const p = t - (r - (d + c)), m = Math.max(
            1,
            n > r ? d - p : n - t
          );
          i.push("   |  " + " ".repeat(p) + "^".repeat(m));
        } else if (a > l) {
          if (n > r) {
            const p = Math.max(Math.min(n - r, d), 1);
            i.push("   |  " + "^".repeat(p));
          }
          r += d + c;
        }
      }
      break;
    }
  return i.join(`
`);
}
function Ge(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? Ac(s) : Ge(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (le(e) || me(e))
    return e;
}
const Yf = /;(?![^(]*\))/g, Jf = /:([^]+)/, Xf = /\/\*[^]*?\*\//g;
function Ac(e) {
  const t = {};
  return e.replace(Xf, "").split(Yf).forEach((n) => {
    if (n) {
      const s = n.split(Jf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Qf(e) {
  if (!e) return "";
  if (le(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (le(s) || typeof s == "number") {
      const o = n.startsWith("--") ? n : nt(n);
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
function Zf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !le(t) && (e.class = ke(t)), n && (e.style = Ge(n)), e;
}
const ep = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", tp = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", np = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", sp = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ic = /* @__PURE__ */ Ye(ep), Mc = /* @__PURE__ */ Ye(tp), Pc = /* @__PURE__ */ Ye(np), op = /* @__PURE__ */ Ye(sp), Rc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rp = /* @__PURE__ */ Ye(Rc), ua = /* @__PURE__ */ Ye(
  Rc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ll(e) {
  return !!e || e === "";
}
const ip = /* @__PURE__ */ Ye(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), lp = /* @__PURE__ */ Ye(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function ap(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const cp = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function up(e, t) {
  return e.replace(
    cp,
    (n) => `\\${n}`
  );
}
function dp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Rn(e[s], t[s]);
  return n;
}
function Rn(e, t) {
  if (e === t) return !0;
  let n = la(e), s = la(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = xt(e), s = xt(t), n || s)
    return e === t;
  if (n = Y(e), s = Y(t), n || s)
    return n && s ? dp(e, t) : !1;
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
function Ar(e, t) {
  return e.findIndex((n) => Rn(n, t));
}
const Lc = (e) => !!(e && e.__v_isRef === !0), U = (e) => le(e) ? e : e == null ? "" : Y(e) || me(e) && (e.toString === Dc || !oe(e.toString)) ? Lc(e) ? U(e.value) : JSON.stringify(e, Fc, 2) : String(e), Fc = (e, t) => Lc(t) ? Fc(e, t.value) : Jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[oi(s, r) + " =>"] = o, n),
    {}
  )
} : us(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => oi(n))
} : xt(t) ? oi(t) : me(t) && !Y(t) && !Dr(t) ? String(t) : t, oi = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Bc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && sl.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var _e = {};
function It(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let et;
class al {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = et, !t && et && (this.index = (et.scopes || (et.scopes = [])).push(
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
      const n = et;
      try {
        return et = this, t();
      } finally {
        et = n;
      }
    } else _e.NODE_ENV !== "production" && It("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = et, et = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (et = this.prevScope, this.prevScope = void 0);
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
function fp(e) {
  return new al(e);
}
function cl() {
  return et;
}
function jc(e, t = !1) {
  et ? et.cleanups.push(e) : _e.NODE_ENV !== "production" && !t && It(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Ee;
const ri = /* @__PURE__ */ new WeakSet();
class ao {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, et && et.active && et.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ri.has(this) && (ri.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Uc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, da(this), qc(this);
    const t = Ee, n = Ut;
    Ee = this, Ut = !0;
    try {
      return this.fn();
    } finally {
      _e.NODE_ENV !== "production" && Ee !== this && It(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), zc(this), Ee = t, Ut = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fl(t);
      this.deps = this.depsTail = void 0, da(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ri.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    wi(this) && this.run();
  }
  get dirty() {
    return wi(this);
  }
}
let Hc = 0, Zs, eo;
function Uc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = eo, eo = e;
    return;
  }
  e.next = Zs, Zs = e;
}
function ul() {
  Hc++;
}
function dl() {
  if (--Hc > 0)
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
function qc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), fl(s), pp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function wi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Kc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Kc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === co) || (e.globalVersion = co, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ee, s = Ut;
  Ee = e, Ut = !0;
  try {
    qc(e);
    const o = e.fn(e._value);
    (t.version === 0 || ft(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ee = n, Ut = s, zc(e), e.flags &= -3;
  }
}
function fl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), _e.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      fl(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function pp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function hp(e, t) {
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
function mp(e) {
  e.effect.stop();
}
let Ut = !0;
const Wc = [];
function Kt() {
  Wc.push(Ut), Ut = !1;
}
function Wt() {
  const e = Wc.pop();
  Ut = e === void 0 ? !0 : e;
}
function da(e) {
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
class gp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ir {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, _e.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Ee || !Ut || Ee === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ee)
      n = this.activeLink = new gp(Ee, this), Ee.deps ? (n.prevDep = Ee.depsTail, Ee.depsTail.nextDep = n, Ee.depsTail = n) : Ee.deps = Ee.depsTail = n, Gc(n);
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
    ul();
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
      dl();
    }
  }
}
function Gc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Gc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), _e.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const or = /* @__PURE__ */ new WeakMap(), Xn = Symbol(
  _e.NODE_ENV !== "production" ? "Object iterate" : ""
), xi = Symbol(
  _e.NODE_ENV !== "production" ? "Map keys iterate" : ""
), uo = Symbol(
  _e.NODE_ENV !== "production" ? "Array iterate" : ""
);
function qe(e, t, n) {
  if (Ut && Ee) {
    let s = or.get(e);
    s || or.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ir()), o.map = s, o.key = n), _e.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function nn(e, t, n, s, o, r) {
  const i = or.get(e);
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
  if (ul(), t === "clear")
    i.forEach(l);
  else {
    const a = Y(e), u = a && il(n);
    if (a && n === "length") {
      const d = Number(s);
      i.forEach((c, p) => {
        (p === "length" || p === uo || !xt(p) && p >= d) && l(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(uo)), t) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(Xn)), Jn(e) && l(i.get(xi)));
          break;
        case "delete":
          a || (l(i.get(Xn)), Jn(e) && l(i.get(xi)));
          break;
        case "set":
          Jn(e) && l(i.get(Xn));
          break;
      }
  }
  dl();
}
function vp(e, t) {
  const n = or.get(e);
  return n && n.get(t);
}
function hs(e) {
  const t = ce(e);
  return t === e ? t : (qe(t, "iterate", uo), rt(e) ? t : t.map(Qe));
}
function Mr(e) {
  return qe(e = ce(e), "iterate", uo), e;
}
const yp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ii(this, Symbol.iterator, Qe);
  },
  concat(...e) {
    return hs(this).concat(
      ...e.map((t) => Y(t) ? hs(t) : t)
    );
  },
  entries() {
    return ii(this, "entries", (e) => (e[1] = Qe(e[1]), e));
  },
  every(e, t) {
    return an(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return an(this, "filter", e, t, (n) => n.map(Qe), arguments);
  },
  find(e, t) {
    return an(this, "find", e, t, Qe, arguments);
  },
  findIndex(e, t) {
    return an(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return an(this, "findLast", e, t, Qe, arguments);
  },
  findLastIndex(e, t) {
    return an(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return an(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return li(this, "includes", e);
  },
  indexOf(...e) {
    return li(this, "indexOf", e);
  },
  join(e) {
    return hs(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return li(this, "lastIndexOf", e);
  },
  map(e, t) {
    return an(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Hs(this, "pop");
  },
  push(...e) {
    return Hs(this, "push", e);
  },
  reduce(e, ...t) {
    return fa(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fa(this, "reduceRight", e, t);
  },
  shift() {
    return Hs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return an(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Hs(this, "splice", e);
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
    return Hs(this, "unshift", e);
  },
  values() {
    return ii(this, "values", Qe);
  }
};
function ii(e, t, n) {
  const s = Mr(e), o = s[t]();
  return s !== e && !rt(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const bp = Array.prototype;
function an(e, t, n, s, o, r) {
  const i = Mr(e), l = i !== e && !rt(e), a = i[t];
  if (a !== bp[t]) {
    const c = a.apply(e, r);
    return l ? Qe(c) : c;
  }
  let u = n;
  i !== e && (l ? u = function(c, p) {
    return n.call(this, Qe(c), p, e);
  } : n.length > 2 && (u = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const d = a.call(i, u, s);
  return l && o ? o(d) : d;
}
function fa(e, t, n, s) {
  const o = Mr(e);
  let r = n;
  return o !== e && (rt(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, Qe(l), a, e);
  }), o[t](r, ...s);
}
function li(e, t, n) {
  const s = ce(e);
  qe(s, "iterate", uo);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Ss(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : o;
}
function Hs(e, t, n = []) {
  Kt(), ul();
  const s = ce(e)[t].apply(e, n);
  return dl(), Wt(), s;
}
const _p = /* @__PURE__ */ Ye("__proto__,__v_isRef,__isVue"), Yc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
);
function Ep(e) {
  xt(e) || (e = String(e));
  const t = ce(this);
  return qe(t, "has", e), t.hasOwnProperty(e);
}
class Jc {
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
      return s === (o ? r ? nu : tu : r ? eu : Zc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = Y(t);
    if (!o) {
      let a;
      if (i && (a = yp[n]))
        return a;
      if (n === "hasOwnProperty")
        return Ep;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ae(t) ? t : s
    );
    return (xt(n) ? Yc.has(n) : _p(n)) || (o || qe(t, "get", n), r) ? l : Ae(l) ? i && il(n) ? l : l.value : me(l) ? o ? Rr(l) : Ns(l) : l;
  }
}
class Xc extends Jc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Gt(r);
      if (!rt(s) && !Gt(s) && (r = ce(r), s = ce(s)), !Y(t) && Ae(r) && !Ae(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = Y(t) && il(n) ? Number(n) < t.length : ge(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ae(t) ? t : o
    );
    return t === ce(o) && (i ? ft(s, r) && nn(t, "set", n, s, r) : nn(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ge(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && nn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!xt(n) || !Yc.has(n)) && qe(t, "has", n), s;
  }
  ownKeys(t) {
    return qe(
      t,
      "iterate",
      Y(t) ? "length" : Xn
    ), Reflect.ownKeys(t);
  }
}
class Qc extends Jc {
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
const wp = /* @__PURE__ */ new Xc(), xp = /* @__PURE__ */ new Qc(), Np = /* @__PURE__ */ new Xc(!0), Sp = /* @__PURE__ */ new Qc(!0), Ni = (e) => e, Ao = (e) => Reflect.getPrototypeOf(e);
function kp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ce(o), i = Jn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = o[e](...s), d = n ? Ni : t ? rr : Qe;
    return !t && qe(
      r,
      "iterate",
      a ? xi : Xn
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = u.next();
        return p ? { value: c, done: p } : {
          value: l ? [d(c[0]), d(c[1])] : d(c),
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
        `${rn(e)} operation ${n}failed: target is readonly.`,
        ce(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Cp(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      e || (ft(o, l) && qe(i, "get", o), qe(i, "get", l));
      const { has: a } = Ao(i), u = t ? Ni : e ? rr : Qe;
      if (a.call(i, o))
        return u(r.get(o));
      if (a.call(i, l))
        return u(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && qe(ce(o), "iterate", Xn), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      return e || (ft(o, l) && qe(i, "has", o), qe(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = ce(l), u = t ? Ni : e ? rr : Qe;
      return !e && qe(a, "iterate", Xn), l.forEach((d, c) => o.call(r, u(d), u(c), i));
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
        !t && !rt(o) && !Gt(o) && (o = ce(o));
        const r = ce(this);
        return Ao(r).has.call(r, o) || (r.add(o), nn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !rt(r) && !Gt(r) && (r = ce(r));
        const i = ce(this), { has: l, get: a } = Ao(i);
        let u = l.call(i, o);
        u ? _e.NODE_ENV !== "production" && pa(i, l, o) : (o = ce(o), u = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, r), u ? ft(r, d) && nn(i, "set", o, r, d) : nn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ce(this), { has: i, get: l } = Ao(r);
        let a = i.call(r, o);
        a ? _e.NODE_ENV !== "production" && pa(r, i, o) : (o = ce(o), a = i.call(r, o));
        const u = l ? l.call(r, o) : void 0, d = r.delete(o);
        return a && nn(r, "delete", o, void 0, u), d;
      },
      clear() {
        const o = ce(this), r = o.size !== 0, i = _e.NODE_ENV !== "production" ? Jn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return r && nn(
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
    n[o] = kp(o, e, t);
  }), n;
}
function Pr(e, t) {
  const n = Cp(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
    o,
    r
  );
}
const Op = {
  get: /* @__PURE__ */ Pr(!1, !1)
}, Tp = {
  get: /* @__PURE__ */ Pr(!1, !0)
}, $p = {
  get: /* @__PURE__ */ Pr(!0, !1)
}, Dp = {
  get: /* @__PURE__ */ Pr(!0, !0)
};
function pa(e, t, n) {
  const s = ce(n);
  if (s !== n && t.call(e, s)) {
    const o = rl(e);
    It(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Zc = /* @__PURE__ */ new WeakMap(), eu = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap();
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
function Ap(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vp(rl(e));
}
function Ns(e) {
  return Gt(e) ? e : Lr(
    e,
    !1,
    wp,
    Op,
    Zc
  );
}
function su(e) {
  return Lr(
    e,
    !1,
    Np,
    Tp,
    eu
  );
}
function Rr(e) {
  return Lr(
    e,
    !0,
    xp,
    $p,
    tu
  );
}
function Bt(e) {
  return Lr(
    e,
    !0,
    Sp,
    Dp,
    nu
  );
}
function Lr(e, t, n, s, o) {
  if (!me(e))
    return _e.NODE_ENV !== "production" && It(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Ap(e);
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
function rt(e) {
  return !!(e && e.__v_isShallow);
}
function Ss(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function ou(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && os(e, "__v_skip", !0), e;
}
const Qe = (e) => me(e) ? Ns(e) : e, rr = (e) => me(e) ? Rr(e) : e;
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function q(e) {
  return iu(e, !1);
}
function ru(e) {
  return iu(e, !0);
}
function iu(e, t) {
  return Ae(e) ? e : new Ip(e, t);
}
class Ip {
  constructor(t, n) {
    this.dep = new Ir(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : Qe(t), this.__v_isShallow = n;
  }
  get value() {
    return _e.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || rt(t) || Gt(t);
    t = s ? t : ce(t), ft(t, n) && (this._rawValue = t, this._value = s ? t : Qe(t), _e.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Mp(e) {
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
function Pp(e) {
  return oe(e) ? e() : No(e);
}
const Rp = {
  get: (e, t, n) => t === "__v_raw" ? e : No(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ae(o) && !Ae(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function pl(e) {
  return mn(e) ? e : new Proxy(e, Rp);
}
class Lp {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ir(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function lu(e) {
  return new Lp(e);
}
function Fp(e) {
  _e.NODE_ENV !== "production" && !Ss(e) && It("toRefs() expects a reactive object but received a plain one.");
  const t = Y(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = au(e, n);
  return t;
}
class Bp {
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
    return vp(ce(this._object), this._key);
  }
}
class jp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Hp(e, t, n) {
  return Ae(e) ? e : oe(e) ? new jp(e) : me(e) && arguments.length > 1 ? au(e, t, n) : q(e);
}
function au(e, t, n) {
  const s = e[t];
  return Ae(s) ? s : new Bp(e, t, n);
}
class Up {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ir(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = co - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ee !== this)
      return Uc(this, !0), !0;
  }
  get value() {
    const t = _e.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Kc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : _e.NODE_ENV !== "production" && It("Write operation failed: computed value is readonly");
  }
}
function qp(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const r = new Up(s, o, n);
  return _e.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const zp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Kp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Mo = {}, ir = /* @__PURE__ */ new WeakMap();
let Sn;
function Wp() {
  return Sn;
}
function cu(e, t = !1, n = Sn) {
  if (n) {
    let s = ir.get(n);
    s || ir.set(n, s = []), s.push(e);
  } else _e.NODE_ENV !== "production" && !t && It(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Gp(e, t, n = pe) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, u = (b) => {
    (n.onWarn || It)(
      "Invalid watch source: ",
      b,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (b) => o ? b : rt(b) || o === !1 || o === 0 ? pn(b, 1) : pn(b);
  let c, p, m, g, v = !1, $ = !1;
  if (Ae(e) ? (p = () => e.value, v = rt(e)) : mn(e) ? (p = () => d(e), v = !0) : Y(e) ? ($ = !0, v = e.some((b) => mn(b) || rt(b)), p = () => e.map((b) => {
    if (Ae(b))
      return b.value;
    if (mn(b))
      return d(b);
    if (oe(b))
      return a ? a(b, 2) : b();
    _e.NODE_ENV !== "production" && u(b);
  })) : oe(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      Kt();
      try {
        m();
      } finally {
        Wt();
      }
    }
    const b = Sn;
    Sn = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Sn = b;
    }
  } : (p = $e, _e.NODE_ENV !== "production" && u(e)), t && o) {
    const b = p, A = o === !0 ? 1 / 0 : o;
    p = () => pn(b(), A);
  }
  const k = cl(), y = () => {
    c.stop(), k && k.active && ol(k.effects, c);
  };
  if (r && t) {
    const b = t;
    t = (...A) => {
      b(...A), y();
    };
  }
  let h = $ ? new Array(e.length).fill(Mo) : Mo;
  const E = (b) => {
    if (!(!(c.flags & 1) || !c.dirty && !b))
      if (t) {
        const A = c.run();
        if (o || v || ($ ? A.some((P, D) => ft(P, h[D])) : ft(A, h))) {
          m && m();
          const P = Sn;
          Sn = c;
          try {
            const D = [
              A,
              // pass undefined as the old value when it's changed for the first time
              h === Mo ? void 0 : $ && h[0] === Mo ? [] : h,
              g
            ];
            h = A, a ? a(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            Sn = P;
          }
        }
      } else
        c.run();
  };
  return l && l(E), c = new ao(p), c.scheduler = i ? () => i(E, !1) : E, g = (b) => cu(b, !1, c), m = c.onStop = () => {
    const b = ir.get(c);
    if (b) {
      if (a)
        a(b, 4);
      else
        for (const A of b) A();
      ir.delete(c);
    }
  }, _e.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? E(!0) : h = c.run() : i ? i(E.bind(null, !0), !0) : c.run(), y.pause = c.pause.bind(c), y.resume = c.resume.bind(c), y.stop = y, y;
}
function pn(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ae(e))
    pn(e.value, t, n);
  else if (Y(e))
    for (let s = 0; s < e.length; s++)
      pn(e[s], t, n);
  else if (us(e) || Jn(e))
    e.forEach((s) => {
      pn(s, t, n);
    });
  else if (Dr(e)) {
    for (const s in e)
      pn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && pn(e[s], t, n);
  }
  return e;
}
var N = {};
const Qn = [];
function bs(e) {
  Qn.push(e);
}
function _s() {
  Qn.pop();
}
let ai = !1;
function R(e, ...t) {
  if (ai) return;
  ai = !0, Kt();
  const n = Qn.length ? Qn[Qn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Yp();
  if (s)
    ds(
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
          ({ vnode: r }) => `at <${Yr(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Jp(o)), console.warn(...r);
  }
  Wt(), ai = !1;
}
function Yp() {
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
function Jp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Xp(n));
  }), t;
}
function Xp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Yr(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Qp(e.props), r] : [o + r];
}
function Qp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...uu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function uu(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ae(t) ? (t = uu(e, ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ce(t), n ? t : [`${e}=`, t]);
}
function hl(e, t) {
  N.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? R(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && R(`${t} is NaN - the duration expression might be incorrect.`));
}
const Zp = {
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
}, Fr = {
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
function ds(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Bn(o, t, n);
  }
}
function Mt(e, t, n, s) {
  if (oe(e)) {
    const o = ds(e, t, n, s);
    return o && $r(o) && o.catch((r) => {
      Bn(r, t, n);
    }), o;
  }
  if (Y(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Mt(e[r], t, n, s));
    return o;
  } else N.NODE_ENV !== "production" && R(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = N.NODE_ENV !== "production" ? Fr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let c = 0; c < d.length; c++)
          if (d[c](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Kt(), ds(r, null, 10, [
        e,
        a,
        u
      ]), Wt();
      return;
    }
  }
  eh(e, n, o, s, i);
}
function eh(e, t, n, s = !0, o = !1) {
  if (N.NODE_ENV !== "production") {
    const r = Fr[t];
    if (n && bs(n), R(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && _s(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const pt = [];
let Xt = -1;
const Es = [];
let kn = null, vs = 0;
const du = /* @__PURE__ */ Promise.resolve();
let lr = null;
const th = 100;
function Ls(e) {
  const t = lr || du;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nh(e) {
  let t = Xt + 1, n = pt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = pt[s], r = fo(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Br(e) {
  if (!(e.flags & 1)) {
    const t = fo(e), n = pt[pt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fo(n) ? pt.push(e) : pt.splice(nh(t), 0, e), e.flags |= 1, fu();
  }
}
function fu() {
  lr || (lr = du.then(pu));
}
function ks(e) {
  Y(e) ? Es.push(...e) : kn && e.id === -1 ? kn.splice(vs + 1, 0, e) : e.flags & 1 || (Es.push(e), e.flags |= 1), fu();
}
function ha(e, t, n = Xt + 1) {
  for (N.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < pt.length; n++) {
    const s = pt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || N.NODE_ENV !== "production" && ml(t, s))
        continue;
      pt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ar(e) {
  if (Es.length) {
    const t = [...new Set(Es)].sort(
      (n, s) => fo(n) - fo(s)
    );
    if (Es.length = 0, kn) {
      kn.push(...t);
      return;
    }
    for (kn = t, N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vs = 0; vs < kn.length; vs++) {
      const n = kn[vs];
      N.NODE_ENV !== "production" && ml(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kn = null, vs = 0;
  }
}
const fo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pu(e) {
  N.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = N.NODE_ENV !== "production" ? (n) => ml(e, n) : $e;
  try {
    for (Xt = 0; Xt < pt.length; Xt++) {
      const n = pt[Xt];
      if (n && !(n.flags & 8)) {
        if (N.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ds(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Xt < pt.length; Xt++) {
      const n = pt[Xt];
      n && (n.flags &= -2);
    }
    Xt = -1, pt.length = 0, ar(e), lr = null, (pt.length || Es.length) && pu(e);
  }
}
function ml(e, t) {
  const n = e.get(t) || 0;
  if (n > th) {
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
N.NODE_ENV !== "production" && (xo().__VUE_HMR_RUNTIME__ = {
  createRecord: ci(hu),
  rerender: ci(rh),
  reload: ci(ih)
});
const rs = /* @__PURE__ */ new Map();
function sh(e) {
  const t = e.type.__hmrId;
  let n = rs.get(t);
  n || (hu(t, e.type), n = rs.get(t)), n.instances.add(e);
}
function oh(e) {
  rs.get(e.type.__hmrId).instances.delete(e);
}
function hu(e, t) {
  return rs.has(e) ? !1 : (rs.set(e, {
    initialDef: cr(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function cr(e) {
  return wd(e) ? e.__vccOpts : e;
}
function rh(e, t) {
  const n = rs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, cr(s.type).render = t), s.renderCache = [], jt = !0, s.update(), jt = !1;
  }));
}
function ih(e, t) {
  const n = rs.get(e);
  if (!n) return;
  t = cr(t), ma(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = cr(r.type);
    let l = zo.get(i);
    l || (i !== n.initialDef && ma(i, t), zo.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Br(() => {
      jt = !0, r.parent.update(), jt = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  ks(() => {
    zo.clear();
  });
}
function ma(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ci(e) {
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
let Lt, Ws = [], Si = !1;
function So(e, ...t) {
  Lt ? Lt.emit(e, ...t) : Si || Ws.push({ event: e, args: t });
}
function gl(e, t) {
  var n, s;
  Lt = e, Lt ? (Lt.enabled = !0, Ws.forEach(({ event: o, args: r }) => Lt.emit(o, ...r)), Ws = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    gl(r, t);
  }), setTimeout(() => {
    Lt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Si = !0, Ws = []);
  }, 3e3)) : (Si = !0, Ws = []);
}
function lh(e, t) {
  So("app:init", e, t, {
    Fragment: ie,
    Text: on,
    Comment: De,
    Static: Mn
  });
}
function ah(e) {
  So("app:unmount", e);
}
const ki = /* @__PURE__ */ vl(
  "component:added"
  /* COMPONENT_ADDED */
), mu = /* @__PURE__ */ vl(
  "component:updated"
  /* COMPONENT_UPDATED */
), ch = /* @__PURE__ */ vl(
  "component:removed"
  /* COMPONENT_REMOVED */
), uh = (e) => {
  Lt && typeof Lt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Lt.cleanupBuffer(e) && ch(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vl(e) {
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
const dh = /* @__PURE__ */ gu(
  "perf:start"
  /* PERFORMANCE_START */
), fh = /* @__PURE__ */ gu(
  "perf:end"
  /* PERFORMANCE_END */
);
function gu(e) {
  return (t, n, s) => {
    So(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ph(e, t, n) {
  So(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Le = null, jr = null;
function po(e) {
  const t = Le;
  return Le = e, jr = e && e.type.__scopeId || null, t;
}
function hh(e) {
  jr = e;
}
function mh() {
  jr = null;
}
const gh = (e) => Me;
function Me(e, t = Le, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Mi(-1);
    const r = po(t);
    let i;
    try {
      i = e(...o);
    } finally {
      po(r), s._d && Mi(1);
    }
    return N.NODE_ENV !== "production" && mu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vu(e) {
  Vc(e) && R("Do not use built-in directive ids as custom directive id: " + e);
}
function Ue(e, t) {
  if (Le === null)
    return N.NODE_ENV !== "production" && R("withDirectives can only be used inside render functions."), e;
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
const yu = Symbol("_vte"), bu = (e) => e.__isTeleport, Zn = (e) => e && (e.disabled || e.disabled === ""), ga = (e) => e && (e.defer || e.defer === ""), va = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ya = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ci = (e, t) => {
  const n = e && e.to;
  if (le(n))
    if (t) {
      const s = t(n);
      return N.NODE_ENV !== "production" && !s && !Zn(e) && R(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return N.NODE_ENV !== "production" && R(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return N.NODE_ENV !== "production" && !n && !Zn(e) && R(`Invalid Teleport target: ${n}`), n;
}, _u = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, l, a, u) {
    const {
      mc: d,
      pc: c,
      pbc: p,
      o: { insert: m, querySelector: g, createText: v, createComment: $ }
    } = u, k = Zn(t.props);
    let { shapeFlag: y, children: h, dynamicChildren: E } = t;
    if (N.NODE_ENV !== "production" && jt && (a = !1, E = null), e == null) {
      const b = t.el = N.NODE_ENV !== "production" ? $("teleport start") : v(""), A = t.anchor = N.NODE_ENV !== "production" ? $("teleport end") : v("");
      m(b, n, s), m(A, n, s);
      const P = (w, T) => {
        y & 16 && (o && o.isCE && (o.ce._teleportTarget = w), d(
          h,
          w,
          T,
          o,
          r,
          i,
          l,
          a
        ));
      }, D = () => {
        const w = t.target = Ci(t.props, g), T = Eu(w, t, v, m);
        w ? (i !== "svg" && va(w) ? i = "svg" : i !== "mathml" && ya(w) && (i = "mathml"), k || (P(w, T), Ko(t, !1))) : N.NODE_ENV !== "production" && !k && R(
          "Invalid Teleport target on mount:",
          w,
          `(${typeof w})`
        );
      };
      k && (P(n, A), Ko(t, !0)), ga(t.props) ? (t.el.__isMounted = !1, He(() => {
        D(), delete t.el.__isMounted;
      }, r)) : D();
    } else {
      if (ga(t.props) && e.el.__isMounted === !1) {
        He(() => {
          _u.process(
            e,
            t,
            n,
            s,
            o,
            r,
            i,
            l,
            a,
            u
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const b = t.anchor = e.anchor, A = t.target = e.target, P = t.targetAnchor = e.targetAnchor, D = Zn(e.props), w = D ? n : A, T = D ? b : P;
      if (i === "svg" || va(A) ? i = "svg" : (i === "mathml" || ya(A)) && (i = "mathml"), E ? (p(
        e.dynamicChildren,
        E,
        w,
        o,
        r,
        i,
        l
      ), so(e, t, N.NODE_ENV === "production")) : a || c(
        e,
        t,
        w,
        T,
        o,
        r,
        i,
        l,
        !1
      ), k)
        D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Po(
          t,
          n,
          b,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const V = t.target = Ci(
          t.props,
          g
        );
        V ? Po(
          t,
          V,
          null,
          u,
          0
        ) : N.NODE_ENV !== "production" && R(
          "Invalid Teleport target on update:",
          A,
          `(${typeof A})`
        );
      } else D && Po(
        t,
        A,
        P,
        u,
        1
      );
      Ko(t, k);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, r) {
    const {
      shapeFlag: i,
      children: l,
      anchor: a,
      targetStart: u,
      targetAnchor: d,
      target: c,
      props: p
    } = e;
    if (c && (o(u), o(d)), r && o(a), i & 16) {
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
  hydrate: vh
};
function Po(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: u, props: d } = e, c = r === 2;
  if (c && s(i, t, n), (!c || Zn(d)) && a & 16)
    for (let p = 0; p < u.length; p++)
      o(
        u[p],
        t,
        n,
        2
      );
  c && s(l, t, n);
}
function vh(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: u, createText: d }
}, c) {
  const p = t.target = Ci(
    t.props,
    a
  );
  if (p) {
    const m = Zn(t.props), g = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = c(
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
        t.targetAnchor || Eu(p, t, d, u), c(
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
const bn = _u;
function Ko(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Eu(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[yu] = r, e && (s(o, e), s(r, e)), r;
}
const Cn = Symbol("_leaveCb"), Ro = Symbol("_enterCb");
function yl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Be(() => {
    e.isMounted = !0;
  }), zr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Dt = [Function, Array], bl = {
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
}, wu = (e) => {
  const t = e.subTree;
  return t.component ? wu(t.component) : t;
}, yh = {
  name: "BaseTransition",
  props: bl,
  setup(e, { slots: t }) {
    const n = ct(), s = yl();
    return () => {
      const o = t.default && Hr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = xu(o), i = ce(e), { mode: l } = i;
      if (N.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && R(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ui(r);
      const a = ba(r);
      if (!a)
        return ui(r);
      let u = Cs(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      a.type !== De && yn(a, u);
      let d = n.subTree && ba(n.subTree);
      if (d && d.type !== De && !Ft(a, d) && wu(n).type !== De) {
        let c = Cs(
          d,
          i,
          s,
          n
        );
        if (yn(d, c), l === "out-in" && a.type !== De)
          return s.isLeaving = !0, c.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, d = void 0;
          }, ui(r);
        l === "in-out" && a.type !== De ? c.delayLeave = (p, m, g) => {
          const v = Su(
            s,
            d
          );
          v[String(d.key)] = d, p[Cn] = () => {
            m(), p[Cn] = void 0, delete u.delayedLeave, d = void 0;
          }, u.delayedLeave = () => {
            g(), delete u.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return r;
    };
  }
};
function xu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== De) {
        if (N.NODE_ENV !== "production" && n) {
          R(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, N.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Nu = yh;
function Su(e, t) {
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
    onEnter: u,
    onAfterEnter: d,
    onEnterCancelled: c,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: g,
    onLeaveCancelled: v,
    onBeforeAppear: $,
    onAppear: k,
    onAfterAppear: y,
    onAppearCancelled: h
  } = t, E = String(e.key), b = Su(n, e), A = (w, T) => {
    w && Mt(
      w,
      s,
      9,
      T
    );
  }, P = (w, T) => {
    const V = T[1];
    A(w, T), Y(w) ? w.every((C) => C.length <= 1) && V() : w.length <= 1 && V();
  }, D = {
    mode: i,
    persisted: l,
    beforeEnter(w) {
      let T = a;
      if (!n.isMounted)
        if (r)
          T = $ || a;
        else
          return;
      w[Cn] && w[Cn](
        !0
        /* cancelled */
      );
      const V = b[E];
      V && Ft(e, V) && V.el[Cn] && V.el[Cn](), A(T, [w]);
    },
    enter(w) {
      let T = u, V = d, C = c;
      if (!n.isMounted)
        if (r)
          T = k || u, V = y || d, C = h || c;
        else
          return;
      let M = !1;
      const z = w[Ro] = (K) => {
        M || (M = !0, K ? A(C, [w]) : A(V, [w]), D.delayedLeave && D.delayedLeave(), w[Ro] = void 0);
      };
      T ? P(T, [w, z]) : z();
    },
    leave(w, T) {
      const V = String(e.key);
      if (w[Ro] && w[Ro](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      A(p, [w]);
      let C = !1;
      const M = w[Cn] = (z) => {
        C || (C = !0, T(), z ? A(v, [w]) : A(g, [w]), w[Cn] = void 0, b[V] === e && delete b[V]);
      };
      b[V] = e, m ? P(m, [w, M]) : M();
    },
    clone(w) {
      const T = Cs(
        w,
        t,
        n,
        s,
        o
      );
      return o && o(T), T;
    }
  };
  return D;
}
function ui(e) {
  if (Fs(e))
    return e = Pt(e), e.children = null, e;
}
function ba(e) {
  if (!Fs(e))
    return bu(e.type) && e.children ? xu(e.children) : e;
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
function Hr(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ie ? (i.patchFlag & 128 && o++, s = s.concat(
      Hr(i.children, t, l)
    )) : (t || i.type !== De) && s.push(l != null ? Pt(i, { key: l }) : i);
  }
  if (o > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _l(e, t) {
  return oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function bh() {
  const e = ct();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (N.NODE_ENV !== "production" && R(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function El(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ku = /* @__PURE__ */ new WeakSet();
function _h(e) {
  const t = ct(), n = ru(null);
  if (t) {
    const o = t.refs === pe ? t.refs = {} : t.refs;
    let r;
    N.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? R(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else N.NODE_ENV !== "production" && R(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = N.NODE_ENV !== "production" ? Rr(n) : n;
  return N.NODE_ENV !== "production" && ku.add(s), s;
}
function ws(e, t, n, s, o = !1) {
  if (Y(e)) {
    e.forEach(
      (g, v) => ws(
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
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && ws(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Co(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (N.NODE_ENV !== "production" && !l) {
    R(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, d = l.refs === pe ? l.refs = {} : l.refs, c = l.setupState, p = ce(c), m = c === pe ? () => !1 : (g) => N.NODE_ENV !== "production" && (ge(p, g) && !Ae(p[g]) && R(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), ku.has(p[g])) ? !1 : ge(p, g);
  if (u != null && u !== a && (le(u) ? (d[u] = null, m(u) && (c[u] = null)) : Ae(u) && (u.value = null)), oe(a))
    ds(a, l, 12, [i, d]);
  else {
    const g = le(a), v = Ae(a);
    if (g || v) {
      const $ = () => {
        if (e.f) {
          const k = g ? m(a) ? c[a] : d[a] : a.value;
          o ? Y(k) && ol(k, r) : Y(k) ? k.includes(r) || k.push(r) : g ? (d[a] = [r], m(a) && (c[a] = d[a])) : (a.value = [r], e.k && (d[e.k] = a.value));
        } else g ? (d[a] = i, m(a) && (c[a] = i)) : v ? (a.value = i, e.k && (d[e.k] = i)) : N.NODE_ENV !== "production" && R("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? ($.id = -1, He($, n)) : $();
    } else N.NODE_ENV !== "production" && R("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let _a = !1;
const Hn = () => {
  _a || (console.error("Hydration completed but contains mismatches."), _a = !0);
}, Eh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", wh = (e) => e.namespaceURI.includes("MathML"), Lo = (e) => {
  if (e.nodeType === 1) {
    if (Eh(e)) return "svg";
    if (wh(e)) return "mathml";
  }
}, Wn = (e) => e.nodeType === 8;
function xh(e) {
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
      createComment: u
    }
  } = e, d = (h, E) => {
    if (!E.hasChildNodes()) {
      N.NODE_ENV !== "production" && R(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, h, E), ar(), E._vnode = h;
      return;
    }
    c(E.firstChild, h, null, null, null), ar(), E._vnode = h;
  }, c = (h, E, b, A, P, D = !1) => {
    D = D || !!E.dynamicChildren;
    const w = Wn(h) && h.data === "[", T = () => v(
      h,
      E,
      b,
      A,
      P,
      w
    ), { type: V, ref: C, shapeFlag: M, patchFlag: z } = E;
    let K = h.nodeType;
    E.el = h, N.NODE_ENV !== "production" && (os(h, "__vnode", E, !0), os(h, "__vueParentComponent", b, !0)), z === -2 && (D = !1, E.dynamicChildren = null);
    let ee = null;
    switch (V) {
      case on:
        K !== 3 ? E.children === "" ? (a(E.el = o(""), i(h), h), ee = h) : ee = T() : (h.data !== E.children && (N.NODE_ENV !== "production" && R(
          "Hydration text mismatch in",
          h.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            h.data
          )}
  - expected on client: ${JSON.stringify(E.children)}`
        ), Hn(), h.data = E.children), ee = r(h));
        break;
      case De:
        y(h) ? (ee = r(h), k(
          E.el = h.content.firstChild,
          h,
          b
        )) : K !== 8 || w ? ee = T() : ee = r(h);
        break;
      case Mn:
        if (w && (h = r(h), K = h.nodeType), K === 1 || K === 3) {
          ee = h;
          const ne = !E.children.length;
          for (let te = 0; te < E.staticCount; te++)
            ne && (E.children += ee.nodeType === 1 ? ee.outerHTML : ee.data), te === E.staticCount - 1 && (E.anchor = ee), ee = r(ee);
          return w ? r(ee) : ee;
        } else
          T();
        break;
      case ie:
        w ? ee = g(
          h,
          E,
          b,
          A,
          P,
          D
        ) : ee = T();
        break;
      default:
        if (M & 1)
          (K !== 1 || E.type.toLowerCase() !== h.tagName.toLowerCase()) && !y(h) ? ee = T() : ee = p(
            h,
            E,
            b,
            A,
            P,
            D
          );
        else if (M & 6) {
          E.slotScopeIds = P;
          const ne = i(h);
          if (w ? ee = $(h) : Wn(h) && h.data === "teleport start" ? ee = $(h, h.data, "teleport end") : ee = r(h), t(
            E,
            ne,
            null,
            b,
            A,
            Lo(ne),
            D
          ), In(E) && !E.type.__asyncResolved) {
            let te;
            w ? (te = ue(ie), te.anchor = ee ? ee.previousSibling : ne.lastChild) : te = h.nodeType === 3 ? Fe("") : ue("div"), te.el = h, E.component.subTree = te;
          }
        } else M & 64 ? K !== 8 ? ee = T() : ee = E.type.hydrate(
          h,
          E,
          b,
          A,
          P,
          D,
          e,
          m
        ) : M & 128 ? ee = E.type.hydrate(
          h,
          E,
          b,
          A,
          Lo(i(h)),
          P,
          D,
          e,
          c
        ) : N.NODE_ENV !== "production" && R("Invalid HostVNode type:", V, `(${typeof V})`);
    }
    return C != null && ws(C, null, A, E), ee;
  }, p = (h, E, b, A, P, D) => {
    D = D || !!E.dynamicChildren;
    const { type: w, props: T, patchFlag: V, shapeFlag: C, dirs: M, transition: z } = E, K = w === "input" || w === "option";
    if (N.NODE_ENV !== "production" || K || V !== -1) {
      M && Zt(E, null, b, "created");
      let ee = !1;
      if (y(h)) {
        ee = Qu(
          null,
          // no need check parentSuspense in hydration
          z
        ) && b && b.vnode.props && b.vnode.props.appear;
        const te = h.content.firstChild;
        if (ee) {
          const we = te.getAttribute("class");
          we && (te.$cls = we), z.beforeEnter(te);
        }
        k(te, h, b), E.el = h = te;
      }
      if (C & 16 && // skip if element has innerHTML / textContent
      !(T && (T.innerHTML || T.textContent))) {
        let te = m(
          h.firstChild,
          E,
          h,
          b,
          A,
          P,
          D
        ), we = !1;
        for (; te; ) {
          Gs(
            h,
            1
            /* CHILDREN */
          ) || (N.NODE_ENV !== "production" && !we && (R(
            "Hydration children mismatch on",
            h,
            `
Server rendered element contains more child nodes than client vdom.`
          ), we = !0), Hn());
          const mt = te;
          te = te.nextSibling, l(mt);
        }
      } else if (C & 8) {
        let te = E.children;
        te[0] === `
` && (h.tagName === "PRE" || h.tagName === "TEXTAREA") && (te = te.slice(1)), h.textContent !== te && (Gs(
          h,
          0
          /* TEXT */
        ) || (N.NODE_ENV !== "production" && R(
          "Hydration text content mismatch on",
          h,
          `
  - rendered on server: ${h.textContent}
  - expected on client: ${E.children}`
        ), Hn()), h.textContent = E.children);
      }
      if (T) {
        if (N.NODE_ENV !== "production" || K || !D || V & 48) {
          const te = h.tagName.includes("-");
          for (const we in T)
            N.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(M && M.some((mt) => mt.dir.created)) && Nh(h, we, T[we], E, b) && Hn(), (K && (we.endsWith("value") || we === "indeterminate") || vn(we) && !An(we) || // force hydrate v-bind with .prop modifiers
            we[0] === "." || te) && s(h, we, null, T[we], void 0, b);
        } else if (T.onClick)
          s(
            h,
            "onClick",
            null,
            T.onClick,
            void 0,
            b
          );
        else if (V & 4 && mn(T.style))
          for (const te in T.style) T.style[te];
      }
      let ne;
      (ne = T && T.onVnodeBeforeMount) && bt(ne, b, E), M && Zt(E, null, b, "beforeMount"), ((ne = T && T.onVnodeMounted) || M || ee) && ad(() => {
        ne && bt(ne, b, E), ee && z.enter(h), M && Zt(E, null, b, "mounted");
      }, A);
    }
    return h.nextSibling;
  }, m = (h, E, b, A, P, D, w) => {
    w = w || !!E.dynamicChildren;
    const T = E.children, V = T.length;
    let C = !1;
    for (let M = 0; M < V; M++) {
      const z = w ? T[M] : T[M] = ht(T[M]), K = z.type === on;
      h ? (K && !w && M + 1 < V && ht(T[M + 1]).type === on && (a(
        o(
          h.data.slice(z.children.length)
        ),
        b,
        r(h)
      ), h.data = z.children), h = c(
        h,
        z,
        A,
        P,
        D,
        w
      )) : K && !z.children ? a(z.el = o(""), b) : (Gs(
        b,
        1
        /* CHILDREN */
      ) || (N.NODE_ENV !== "production" && !C && (R(
        "Hydration children mismatch on",
        b,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), C = !0), Hn()), n(
        null,
        z,
        b,
        null,
        A,
        P,
        Lo(b),
        D
      ));
    }
    return h;
  }, g = (h, E, b, A, P, D) => {
    const { slotScopeIds: w } = E;
    w && (P = P ? P.concat(w) : w);
    const T = i(h), V = m(
      r(h),
      E,
      T,
      b,
      A,
      P,
      D
    );
    return V && Wn(V) && V.data === "]" ? r(E.anchor = V) : (Hn(), a(E.anchor = u("]"), T, V), V);
  }, v = (h, E, b, A, P, D) => {
    if (Gs(
      h.parentElement,
      1
      /* CHILDREN */
    ) || (N.NODE_ENV !== "production" && R(
      `Hydration node mismatch:
- rendered on server:`,
      h,
      h.nodeType === 3 ? "(text)" : Wn(h) && h.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      E.type
    ), Hn()), E.el = null, D) {
      const V = $(h);
      for (; ; ) {
        const C = r(h);
        if (C && C !== V)
          l(C);
        else
          break;
      }
    }
    const w = r(h), T = i(h);
    return l(h), n(
      null,
      E,
      T,
      w,
      b,
      A,
      Lo(T),
      P
    ), b && (b.vnode.el = E.el, Gr(b, E.el)), w;
  }, $ = (h, E = "[", b = "]") => {
    let A = 0;
    for (; h; )
      if (h = r(h), h && Wn(h) && (h.data === E && A++, h.data === b)) {
        if (A === 0)
          return r(h);
        A--;
      }
    return h;
  }, k = (h, E, b) => {
    const A = E.parentNode;
    A && A.replaceChild(h, E);
    let P = b;
    for (; P; )
      P.vnode.el === E && (P.vnode.el = P.subTree.el = h), P = P.parent;
  }, y = (h) => h.nodeType === 1 && h.tagName === "TEMPLATE";
  return [d, c];
}
function Nh(e, t, n, s, o) {
  let r, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = ke(n), Sh(Ea(l || ""), Ea(a)) || (r = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : Qf(Ge(n));
    const u = wa(l), d = wa(a);
    if (s.dirs)
      for (const { dir: c, value: p } of s.dirs)
        c.name === "show" && !p && d.set("display", "none");
    o && Cu(o, s, d), kh(u, d) || (r = 3, i = "style");
  } else (e instanceof SVGElement && lp(t) || e instanceof HTMLElement && (ua(t) || ip(t))) && (ua(t) ? (l = e.hasAttribute(t), a = ll(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = ap(n) ? String(n) : !1), l !== a && (r = 4, i = t));
  if (r != null && !Gs(e, r)) {
    const u = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, d = `Hydration ${Ou[r]} mismatch on`, c = `
  - rendered on server: ${u(l)}
  - expected on client: ${u(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return R(d, e, c), !0;
  }
  return !1;
}
function Ea(e) {
  return new Set(e.trim().split(/\s+/));
}
function Sh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function wa(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [s, o] = n.split(":");
    s = s.trim(), o = o && o.trim(), s && o && t.set(s, o);
  }
  return t;
}
function kh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function Cu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ie && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const r in o) {
      const i = Bc(o[r]);
      n.set(`--${up(r)}`, i);
    }
  }
  t === s && e.parent && Cu(e.parent, e.vnode, n);
}
const xa = "data-allow-mismatch", Ou = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Gs(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(xa); )
      e = e.parentElement;
  const n = e && e.getAttribute(xa);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(Ou[t]);
  }
}
const Ch = xo().requestIdleCallback || ((e) => setTimeout(e, 1)), Oh = xo().cancelIdleCallback || ((e) => clearTimeout(e)), Th = (e = 1e4) => (t) => {
  const n = Ch(t, { timeout: e });
  return () => Oh(n);
};
function $h(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: r, innerWidth: i } = window;
  return (t > 0 && t < r || s > 0 && s < r) && (n > 0 && n < i || o > 0 && o < i);
}
const Dh = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const r of o)
      if (r.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if ($h(o))
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
}, Ah = (e = []) => (t, n) => {
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
function Ih(e, t) {
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
function Mh(e) {
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
  let u = null, d, c = 0;
  const p = () => (c++, u = null, m()), m = () => {
    let g;
    return u || (g = u = t().catch((v) => {
      if (v = v instanceof Error ? v : new Error(String(v)), a)
        return new Promise(($, k) => {
          a(v, () => $(p()), () => k(v), c + 1);
        });
      throw v;
    }).then((v) => {
      if (g !== u && u)
        return u;
      if (N.NODE_ENV !== "production" && !v && R(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), v && (v.__esModule || v[Symbol.toStringTag] === "Module") && (v = v.default), N.NODE_ENV !== "production" && v && !me(v) && !oe(v))
        throw new Error(`Invalid async component load result: ${v}`);
      return d = v, v;
    }));
  };
  return /* @__PURE__ */ _l({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(g, v, $) {
      let k = !1;
      (v.bu || (v.bu = [])).push(() => k = !0);
      const y = () => {
        if (k) {
          N.NODE_ENV !== "production" && R(
            `Skipping lazy hydration for component '${Ts(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        $();
      }, h = r ? () => {
        const E = r(
          y,
          (b) => Ih(g, b)
        );
        E && (v.bum || (v.bum = [])).push(E);
      } : y;
      d ? h() : m().then(() => !v.isUnmounted && h());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const g = Ke;
      if (El(g), d)
        return () => di(d, g);
      const v = (h) => {
        u = null, Bn(
          h,
          g,
          13,
          !s
        );
      };
      if (l && g.suspense || Os)
        return m().then((h) => () => di(h, g)).catch((h) => (v(h), () => s ? ue(s, {
          error: h
        }) : null));
      const $ = q(!1), k = q(), y = q(!!o);
      return o && setTimeout(() => {
        y.value = !1;
      }, o), i != null && setTimeout(() => {
        if (!$.value && !k.value) {
          const h = new Error(
            `Async component timed out after ${i}ms.`
          );
          v(h), k.value = h;
        }
      }, i), m().then(() => {
        $.value = !0, g.parent && Fs(g.parent.vnode) && g.parent.update();
      }).catch((h) => {
        v(h), k.value = h;
      }), () => {
        if ($.value && d)
          return di(d, g);
        if (k.value && s)
          return ue(s, {
            error: k.value
          });
        if (n && !y.value)
          return ue(n);
      };
    }
  });
}
function di(e, t) {
  const { ref: n, props: s, children: o, ce: r } = t.vnode, i = ue(e, s, o);
  return i.ref = n, i.ce = r, delete t.vnode.ce, i;
}
const Fs = (e) => e.type.__isKeepAlive, Ph = {
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
    const n = ct(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const y = t.default && t.default();
        return y && y.length === 1 ? y[0] : y;
      };
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let i = null;
    N.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: u,
        um: d,
        o: { createElement: c }
      }
    } = s, p = c("div");
    s.activate = (y, h, E, b, A) => {
      const P = y.component;
      u(y, h, E, 0, l), a(
        P.vnode,
        y,
        h,
        E,
        P,
        l,
        b,
        y.slotScopeIds,
        A
      ), He(() => {
        P.isDeactivated = !1, P.a && $n(P.a);
        const D = y.props && y.props.onVnodeMounted;
        D && bt(D, P.parent, y);
      }, l), N.NODE_ENV !== "production" && ki(P);
    }, s.deactivate = (y) => {
      const h = y.component;
      pr(h.m), pr(h.a), u(y, p, null, 1, l), He(() => {
        h.da && $n(h.da);
        const E = y.props && y.props.onVnodeUnmounted;
        E && bt(E, h.parent, y), h.isDeactivated = !0;
      }, l), N.NODE_ENV !== "production" && ki(h), N.NODE_ENV !== "production" && (h.__keepAliveStorageContainer = p);
    };
    function m(y) {
      fi(y), d(y, n, l, !0);
    }
    function g(y) {
      o.forEach((h, E) => {
        const b = Ts(h.type);
        b && !y(b) && v(E);
      });
    }
    function v(y) {
      const h = o.get(y);
      h && (!i || !Ft(h, i)) ? m(h) : i && fi(i), o.delete(y), r.delete(y);
    }
    sn(
      () => [e.include, e.exclude],
      ([y, h]) => {
        y && g((E) => Ys(y, E)), h && g((E) => !Ys(h, E));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let $ = null;
    const k = () => {
      $ != null && (mr(n.subTree.type) ? He(() => {
        o.set($, Fo(n.subTree));
      }, n.subTree.suspense) : o.set($, Fo(n.subTree)));
    };
    return Be(k), qr(k), zr(() => {
      o.forEach((y) => {
        const { subTree: h, suspense: E } = n, b = Fo(h);
        if (y.type === b.type && y.key === b.key) {
          fi(b);
          const A = b.component.da;
          A && He(A, E);
          return;
        }
        m(y);
      });
    }), () => {
      if ($ = null, !t.default)
        return i = null;
      const y = t.default(), h = y[0];
      if (y.length > 1)
        return N.NODE_ENV !== "production" && R("KeepAlive should contain exactly one component child."), i = null, y;
      if (!ln(h) || !(h.shapeFlag & 4) && !(h.shapeFlag & 128))
        return i = null, h;
      let E = Fo(h);
      if (E.type === De)
        return i = null, E;
      const b = E.type, A = Ts(
        In(E) ? E.type.__asyncResolved || {} : b
      ), { include: P, exclude: D, max: w } = e;
      if (P && (!A || !Ys(P, A)) || D && A && Ys(D, A))
        return E.shapeFlag &= -257, i = E, h;
      const T = E.key == null ? b : E.key, V = o.get(T);
      return E.el && (E = Pt(E), h.shapeFlag & 128 && (h.ssContent = E)), $ = T, V ? (E.el = V.el, E.component = V.component, E.transition && yn(E, E.transition), E.shapeFlag |= 512, r.delete(T), r.add(T)) : (r.add(T), w && r.size > parseInt(w, 10) && v(r.values().next().value)), E.shapeFlag |= 256, i = E, mr(h.type) ? h : E;
    };
  }
}, Rh = Ph;
function Ys(e, t) {
  return Y(e) ? e.some((n) => Ys(n, t)) : le(e) ? e.split(",").includes(t) : jf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Tu(e, t) {
  Du(e, "a", t);
}
function $u(e, t) {
  Du(e, "da", t);
}
function Du(e, t, n = Ke) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ur(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Fs(o.parent.vnode) && Lh(s, t, n, o), o = o.parent;
  }
}
function Lh(e, t, n, s) {
  const o = Ur(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ct(() => {
    ol(s[t], o);
  }, n);
}
function fi(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Fo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ur(e, t, n = Ke, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Kt();
      const l = as(n), a = Mt(t, n, e, i);
      return l(), Wt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (N.NODE_ENV !== "production") {
    const o = tn(Fr[e].replace(/ hook$/, ""));
    R(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _n = (e) => (t, n = Ke) => {
  (!Os || e === "sp") && Ur(e, (...s) => t(...s), n);
}, Vu = _n("bm"), Be = _n("m"), wl = _n(
  "bu"
), qr = _n("u"), zr = _n(
  "bum"
), Ct = _n("um"), Au = _n(
  "sp"
), Iu = _n("rtg"), Mu = _n("rtc");
function Pu(e, t = Ke) {
  Ur("ec", e, t);
}
const ur = "components", Fh = "directives";
function Bh(e, t) {
  return Sl(ur, e, !0, t) || e;
}
const xl = Symbol.for("v-ndc");
function Nl(e) {
  return le(e) ? Sl(ur, e, !1) || e : e || xl;
}
function jh(e) {
  return Sl(Fh, e);
}
function Sl(e, t, n = !0, s = !1) {
  const o = Le || Ke;
  if (o) {
    const r = o.type;
    if (e === ur) {
      const l = Ts(
        r,
        !1
      );
      if (l && (l === t || l === Ce(t) || l === rn(Ce(t))))
        return r;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Na(o[e] || r[e], t) || // global registration
      Na(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (N.NODE_ENV !== "production" && n && !i) {
      const l = e === ur ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      R(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else N.NODE_ENV !== "production" && R(
    `resolve${rn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Na(e, t) {
  return e && (e[t] || e[Ce(t)] || e[rn(Ce(t))]);
}
function be(e, t, n, s) {
  let o;
  const r = n && n[s], i = Y(e);
  if (i || le(e)) {
    const l = i && mn(e);
    let a = !1, u = !1;
    l && (a = !rt(e), u = Gt(e), e = Mr(e)), o = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++)
      o[d] = t(
        a ? u ? rr(Qe(e[d])) : Qe(e[d]) : e[d],
        d,
        void 0,
        r && r[d]
      );
  } else if (typeof e == "number") {
    N.NODE_ENV !== "production" && !Number.isInteger(e) && R(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
      for (let a = 0, u = l.length; a < u; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, r && r[a]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
function Hh(e, t) {
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
    return t !== "default" && (n.name = t), x(), at(
      ie,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  N.NODE_ENV !== "production" && r && r.length > 1 && (R(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), x();
  const i = r && kl(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = at(
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
function kl(e) {
  return e.some((t) => ln(t) ? !(t.type === De || t.type === ie && !kl(t.children)) : !0) ? e : null;
}
function Uh(e, t) {
  const n = {};
  if (N.NODE_ENV !== "production" && !me(e))
    return R("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : tn(s)] = e[s];
  return n;
}
const Oi = (e) => e ? vd(e) ? Co(e) : Oi(e.parent) : null, es = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => N.NODE_ENV !== "production" ? Bt(e.props) : e.props,
    $attrs: (e) => N.NODE_ENV !== "production" ? Bt(e.attrs) : e.attrs,
    $slots: (e) => N.NODE_ENV !== "production" ? Bt(e.slots) : e.slots,
    $refs: (e) => N.NODE_ENV !== "production" ? Bt(e.refs) : e.refs,
    $parent: (e) => Oi(e.parent),
    $root: (e) => Oi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Br(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ls.bind(e.proxy)),
    $watch: (e) => Am.bind(e)
  })
), Cl = (e) => e === "_" || e === "$", pi = (e, t) => e !== pe && !e.__isScriptSetup && ge(e, t), to = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (N.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
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
        if (pi(s, t))
          return i[t] = 1, s[t];
        if (o !== pe && ge(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && ge(u, t)
        )
          return i[t] = 3, r[t];
        if (n !== pe && ge(n, t))
          return i[t] = 4, n[t];
        Ti && (i[t] = 0);
      }
    }
    const d = es[t];
    let c, p;
    if (d)
      return t === "$attrs" ? (qe(e.attrs, "get", ""), N.NODE_ENV !== "production" && hr()) : N.NODE_ENV !== "production" && t === "$slots" && qe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== pe && ge(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, ge(p, t)
    )
      return p[t];
    N.NODE_ENV !== "production" && Le && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== pe && Cl(t[0]) && ge(o, t) ? R(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Le && R(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return pi(o, t) ? (o[t] = n, !0) : N.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (R(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (N.NODE_ENV !== "production" && R(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (N.NODE_ENV !== "production" && R(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (N.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== pe && ge(e, i) || pi(t, i) || (l = r[0]) && ge(l, i) || ge(s, i) || ge(es, i) || ge(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
N.NODE_ENV !== "production" && (to.ownKeys = (e) => (R(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const qh = /* @__PURE__ */ fe({}, to, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return to.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Wf(t);
    return N.NODE_ENV !== "production" && !n && to.has(e, t) && R(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function zh(e) {
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
function Kh(e) {
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
function Wh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ce(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Cl(s[0])) {
        R(
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
const fs = (e) => R(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Gh() {
  return N.NODE_ENV !== "production" && fs("defineProps"), null;
}
function Yh() {
  return N.NODE_ENV !== "production" && fs("defineEmits"), null;
}
function Jh(e) {
  N.NODE_ENV !== "production" && fs("defineExpose");
}
function Xh(e) {
  N.NODE_ENV !== "production" && fs("defineOptions");
}
function Qh() {
  return N.NODE_ENV !== "production" && fs("defineSlots"), null;
}
function Zh() {
  N.NODE_ENV !== "production" && fs("defineModel");
}
function em(e, t) {
  return N.NODE_ENV !== "production" && fs("withDefaults"), null;
}
function tm() {
  return Ru("useSlots").slots;
}
function nm() {
  return Ru("useAttrs").attrs;
}
function Ru(e) {
  const t = ct();
  return N.NODE_ENV !== "production" && !t && R(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Ed(t));
}
function ho(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function sm(e, t) {
  const n = ho(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? Y(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : N.NODE_ENV !== "production" && R(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function om(e, t) {
  return !e || !t ? e || t : Y(e) && Y(t) ? e.concat(t) : fe({}, ho(e), ho(t));
}
function rm(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function im(e) {
  const t = ct();
  N.NODE_ENV !== "production" && !t && R(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Li(), $r(n) && (n = n.catch((s) => {
    throw as(t), s;
  })), [n, () => as(t)];
}
function lm() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? R(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ti = !0;
function am(e) {
  const t = Ol(e), n = e.proxy, s = e.ctx;
  Ti = !1, t.beforeCreate && Sa(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: d,
    beforeMount: c,
    mounted: p,
    beforeUpdate: m,
    updated: g,
    activated: v,
    deactivated: $,
    beforeDestroy: k,
    beforeUnmount: y,
    destroyed: h,
    unmounted: E,
    render: b,
    renderTracked: A,
    renderTriggered: P,
    errorCaptured: D,
    serverPrefetch: w,
    // public API
    expose: T,
    inheritAttrs: V,
    // assets
    components: C,
    directives: M,
    filters: z
  } = t, K = N.NODE_ENV !== "production" ? lm() : null;
  if (N.NODE_ENV !== "production") {
    const [ne] = e.propsOptions;
    if (ne)
      for (const te in ne)
        K("Props", te);
  }
  if (u && cm(u, s, K), i)
    for (const ne in i) {
      const te = i[ne];
      oe(te) ? (N.NODE_ENV !== "production" ? Object.defineProperty(s, ne, {
        value: te.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ne] = te.bind(n), N.NODE_ENV !== "production" && K("Methods", ne)) : N.NODE_ENV !== "production" && R(
        `Method "${ne}" has type "${typeof te}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    N.NODE_ENV !== "production" && !oe(o) && R(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ne = o.call(n, n);
    if (N.NODE_ENV !== "production" && $r(ne) && R(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(ne))
      N.NODE_ENV !== "production" && R("data() should return an object.");
    else if (e.data = Ns(ne), N.NODE_ENV !== "production")
      for (const te in ne)
        K("Data", te), Cl(te[0]) || Object.defineProperty(s, te, {
          configurable: !0,
          enumerable: !0,
          get: () => ne[te],
          set: $e
        });
  }
  if (Ti = !0, r)
    for (const ne in r) {
      const te = r[ne], we = oe(te) ? te.bind(n, n) : oe(te.get) ? te.get.bind(n, n) : $e;
      N.NODE_ENV !== "production" && we === $e && R(`Computed property "${ne}" has no getter.`);
      const mt = !oe(te) && oe(te.set) ? te.set.bind(n) : N.NODE_ENV !== "production" ? () => {
        R(
          `Write operation failed: computed property "${ne}" is readonly.`
        );
      } : $e, Tt = Z({
        get: we,
        set: mt
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: ($t) => Tt.value = $t
      }), N.NODE_ENV !== "production" && K("Computed", ne);
    }
  if (l)
    for (const ne in l)
      Lu(l[ne], s, n, ne);
  if (a) {
    const ne = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(ne).forEach((te) => {
      Bu(te, ne[te]);
    });
  }
  d && Sa(d, e, "c");
  function ee(ne, te) {
    Y(te) ? te.forEach((we) => ne(we.bind(n))) : te && ne(te.bind(n));
  }
  if (ee(Vu, c), ee(Be, p), ee(wl, m), ee(qr, g), ee(Tu, v), ee($u, $), ee(Pu, D), ee(Mu, A), ee(Iu, P), ee(zr, y), ee(Ct, E), ee(Au, w), Y(T))
    if (T.length) {
      const ne = e.exposed || (e.exposed = {});
      T.forEach((te) => {
        Object.defineProperty(ne, te, {
          get: () => n[te],
          set: (we) => n[te] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  b && e.render === $e && (e.render = b), V != null && (e.inheritAttrs = V), C && (e.components = C), M && (e.directives = M), w && El(e);
}
function cm(e, t, n = $e) {
  Y(e) && (e = $i(e));
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
    }) : t[s] = r, N.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Sa(e, t, n) {
  Mt(
    Y(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Lu(e, t, n, s) {
  let o = s.includes(".") ? sd(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    oe(r) ? sn(o, r) : N.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e}"`, r);
  } else if (oe(e))
    sn(o, e.bind(n));
  else if (me(e))
    if (Y(e))
      e.forEach((r) => Lu(r, t, n, s));
    else {
      const r = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(r) ? sn(o, r, e) : N.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else N.NODE_ENV !== "production" && R(`Invalid watch option: "${s}"`, e);
}
function Ol(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (u) => dr(a, u, i, !0)
  ), dr(a, t, i)), me(t) && r.set(t, a), a;
}
function dr(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && dr(e, r, n, !0), o && o.forEach(
    (i) => dr(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      N.NODE_ENV !== "production" && R(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = um[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const um = {
  data: ka,
  props: Ca,
  emits: Ca,
  // objects
  methods: Js,
  computed: Js,
  // lifecycle
  beforeCreate: dt,
  created: dt,
  beforeMount: dt,
  mounted: dt,
  beforeUpdate: dt,
  updated: dt,
  beforeDestroy: dt,
  beforeUnmount: dt,
  destroyed: dt,
  unmounted: dt,
  activated: dt,
  deactivated: dt,
  errorCaptured: dt,
  serverPrefetch: dt,
  // assets
  components: Js,
  directives: Js,
  // watch
  watch: fm,
  // provide / inject
  provide: ka,
  inject: dm
};
function ka(e, t) {
  return t ? e ? function() {
    return fe(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function dm(e, t) {
  return Js($i(e), $i(t));
}
function $i(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function dt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Js(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ca(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    ho(e),
    ho(t ?? {})
  ) : t;
}
function fm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = dt(e[s], t[s]);
  return n;
}
function Fu() {
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
let pm = 0;
function hm(e, t) {
  return function(s, o = null) {
    oe(s) || (s = fe({}, s)), o != null && !me(o) && (N.NODE_ENV !== "production" && R("root props passed to app.mount() must be an object."), o = null);
    const r = Fu(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = r.app = {
      _uid: pm++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Hi,
      get config() {
        return r.config;
      },
      set config(d) {
        N.NODE_ENV !== "production" && R(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...c) {
        return i.has(d) ? N.NODE_ENV !== "production" && R("Plugin has already been applied to target app.") : d && oe(d.install) ? (i.add(d), d.install(u, ...c)) : oe(d) ? (i.add(d), d(u, ...c)) : N.NODE_ENV !== "production" && R(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(d) {
        return r.mixins.includes(d) ? N.NODE_ENV !== "production" && R(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), u;
      },
      component(d, c) {
        return N.NODE_ENV !== "production" && Fi(d, r.config), c ? (N.NODE_ENV !== "production" && r.components[d] && R(`Component "${d}" has already been registered in target app.`), r.components[d] = c, u) : r.components[d];
      },
      directive(d, c) {
        return N.NODE_ENV !== "production" && vu(d), c ? (N.NODE_ENV !== "production" && r.directives[d] && R(`Directive "${d}" has already been registered in target app.`), r.directives[d] = c, u) : r.directives[d];
      },
      mount(d, c, p) {
        if (a)
          N.NODE_ENV !== "production" && R(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          N.NODE_ENV !== "production" && d.__vue_app__ && R(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = u._ceVNode || ue(s, o);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), N.NODE_ENV !== "production" && (r.reload = () => {
            const g = Pt(m);
            g.el = null, e(g, d, p);
          }), c && t ? t(m, d) : e(m, d, p), a = !0, u._container = d, d.__vue_app__ = u, N.NODE_ENV !== "production" && (u._instance = m.component, lh(u, Hi)), Co(m.component);
        }
      },
      onUnmount(d) {
        N.NODE_ENV !== "production" && typeof d != "function" && R(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Mt(
          l,
          u._instance,
          16
        ), e(null, u._container), N.NODE_ENV !== "production" && (u._instance = null, ah(u)), delete u._container.__vue_app__) : N.NODE_ENV !== "production" && R("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return N.NODE_ENV !== "production" && d in r.provides && (ge(r.provides, d) ? R(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : R(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[d] = c, u;
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
function Bu(e, t) {
  if (!Ke)
    N.NODE_ENV !== "production" && R("provide() can only be used inside setup().");
  else {
    let n = Ke.provides;
    const s = Ke.parent && Ke.parent.provides;
    s === n && (n = Ke.provides = Object.create(s)), n[e] = t;
  }
}
function no(e, t, n = !1) {
  const s = ct();
  if (s || ts) {
    let o = ts ? ts._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    N.NODE_ENV !== "production" && R(`injection "${String(e)}" not found.`);
  } else N.NODE_ENV !== "production" && R("inject() can only be used inside setup() or functional components.");
}
function mm() {
  return !!(ct() || ts);
}
const ju = {}, Hu = () => Object.create(ju), Uu = (e) => Object.getPrototypeOf(e) === ju;
function gm(e, t, n, s = !1) {
  const o = {}, r = Hu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qu(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  N.NODE_ENV !== "production" && Ku(t || {}, o, e), n ? e.props = s ? o : su(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function vm(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function ym(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = ce(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(N.NODE_ENV !== "production" && vm(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        let p = d[c];
        if (Kr(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (ge(r, p))
            m !== r[p] && (r[p] = m, u = !0);
          else {
            const g = Ce(p);
            o[g] = Di(
              a,
              l,
              g,
              m,
              e,
              !1
            );
          }
        else
          m !== r[p] && (r[p] = m, u = !0);
      }
    }
  } else {
    qu(e, t, o, r) && (u = !0);
    let d;
    for (const c in l)
      (!t || // for camelCase
      !ge(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = nt(c)) === c || !ge(t, d))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[c] = Di(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete o[c]);
    if (r !== l)
      for (const c in r)
        (!t || !ge(t, c)) && (delete r[c], u = !0);
  }
  u && nn(e.attrs, "set", ""), N.NODE_ENV !== "production" && Ku(t || {}, o, e);
}
function qu(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (An(a))
        continue;
      const u = t[a];
      let d;
      o && ge(o, d = Ce(a)) ? !r || !r.includes(d) ? n[d] = u : (l || (l = {}))[d] = u : Kr(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, i = !0);
    }
  if (r) {
    const a = ce(n), u = l || pe;
    for (let d = 0; d < r.length; d++) {
      const c = r[d];
      n[c] = Di(
        o,
        a,
        c,
        u[c],
        e,
        !ge(u, c)
      );
    }
  }
  return i;
}
function Di(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = ge(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && oe(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const d = as(o);
          s = u[n] = a.call(
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
    ] && (s === "" || s === nt(n)) && (s = !0));
  }
  return s;
}
const bm = /* @__PURE__ */ new WeakMap();
function zu(e, t, n = !1) {
  const s = n ? bm : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!oe(e)) {
    const d = (c) => {
      a = !0;
      const [p, m] = zu(c, t, !0);
      fe(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !a)
    return me(e) && s.set(e, ys), ys;
  if (Y(r))
    for (let d = 0; d < r.length; d++) {
      N.NODE_ENV !== "production" && !le(r[d]) && R("props must be strings when using array syntax.", r[d]);
      const c = Ce(r[d]);
      Oa(c) && (i[c] = pe);
    }
  else if (r) {
    N.NODE_ENV !== "production" && !me(r) && R("invalid props options", r);
    for (const d in r) {
      const c = Ce(d);
      if (Oa(c)) {
        const p = r[d], m = i[c] = Y(p) || oe(p) ? { type: p } : fe({}, p), g = m.type;
        let v = !1, $ = !0;
        if (Y(g))
          for (let k = 0; k < g.length; ++k) {
            const y = g[k], h = oe(y) && y.name;
            if (h === "Boolean") {
              v = !0;
              break;
            } else h === "String" && ($ = !1);
          }
        else
          v = oe(g) && g.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = v, m[
          1
          /* shouldCastTrue */
        ] = $, (v || ge(m, "default")) && l.push(c);
      }
    }
  }
  const u = [i, l];
  return me(e) && s.set(e, u), u;
}
function Oa(e) {
  return e[0] !== "$" && !An(e) ? !0 : (N.NODE_ENV !== "production" && R(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function _m(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ku(e, t, n) {
  const s = ce(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ce(i));
  for (const i in o) {
    let l = o[i];
    l != null && Em(
      i,
      s[i],
      l,
      N.NODE_ENV !== "production" ? Bt(s) : s,
      !r.includes(i)
    );
  }
}
function Em(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    R('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let u = !1;
      const d = Y(r) ? r : [r], c = [];
      for (let p = 0; p < d.length && !u; p++) {
        const { valid: m, expectedType: g } = xm(t, d[p]);
        c.push(g || ""), u = m;
      }
      if (!u) {
        R(Nm(e, t, c));
        return;
      }
    }
    l && !l(t, s) && R('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const wm = /* @__PURE__ */ Ye(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function xm(e, t) {
  let n;
  const s = _m(t);
  if (s === "null")
    n = e === null;
  else if (wm(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = me(e) : s === "Array" ? n = Y(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Nm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(rn).join(" | ")}`;
  const o = n[0], r = rl(t), i = Ta(t, o), l = Ta(t, r);
  return n.length === 1 && $a(o) && !Sm(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, $a(r) && (s += `with value ${l}.`), s;
}
function Ta(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $a(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Sm(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Tl = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", $l = (e) => Y(e) ? e.map(ht) : [ht(e)], km = (e, t, n) => {
  if (t._n)
    return t;
  const s = Me((...o) => (N.NODE_ENV !== "production" && Ke && !(n === null && Le) && !(n && n.root !== Ke.root) && R(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), $l(t(...o))), n);
  return s._c = !1, s;
}, Wu = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Tl(o)) continue;
    const r = e[o];
    if (oe(r))
      t[o] = km(o, r, s);
    else if (r != null) {
      N.NODE_ENV !== "production" && R(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = $l(r);
      t[o] = () => i;
    }
  }
}, Gu = (e, t) => {
  N.NODE_ENV !== "production" && !Fs(e.vnode) && R(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = $l(t);
  e.slots.default = () => n;
}, Vi = (e, t, n) => {
  for (const s in t)
    (n || !Tl(s)) && (e[s] = t[s]);
}, Cm = (e, t, n) => {
  const s = e.slots = Hu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && os(s, "__", o, !0);
    const r = t._;
    r ? (Vi(s, t, n), n && os(s, "_", r, !0)) : Wu(t, s);
  } else t && Gu(e, t);
}, Om = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? N.NODE_ENV !== "production" && jt ? (Vi(o, t, n), nn(e, "set", "$slots")) : n && l === 1 ? r = !1 : Vi(o, t, n) : (r = !t.$stable, Wu(t, o)), i = t;
  } else t && (Gu(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !Tl(l) && i[l] == null && delete o[l];
};
let Us, Dn;
function cn(e, t) {
  e.appContext.config.performance && fr() && Dn.mark(`vue-${t}-${e.uid}`), N.NODE_ENV !== "production" && dh(e, t, fr() ? Dn.now() : Date.now());
}
function un(e, t) {
  if (e.appContext.config.performance && fr()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Dn.mark(s), Dn.measure(
      `<${Yr(e, e.type)}> ${t}`,
      n,
      s
    ), Dn.clearMarks(n), Dn.clearMarks(s);
  }
  N.NODE_ENV !== "production" && fh(e, t, fr() ? Dn.now() : Date.now());
}
function fr() {
  return Us !== void 0 || (typeof window < "u" && window.performance ? (Us = !0, Dn = window.performance) : Us = !1), Us;
}
function Tm() {
  const e = [];
  if (N.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const He = ad;
function Yu(e) {
  return Xu(e);
}
function Ju(e) {
  return Xu(e, xh);
}
function Xu(e, t) {
  Tm();
  const n = xo();
  n.__VUE__ = !0, N.NODE_ENV !== "production" && gl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: d,
    parentNode: c,
    nextSibling: p,
    setScopeId: m = $e,
    insertStaticContent: g
  } = e, v = (_, O, I, j = null, F = null, B = null, X = void 0, G = null, W = N.NODE_ENV !== "production" && jt ? !1 : !!O.dynamicChildren) => {
    if (_ === O)
      return;
    _ && !Ft(_, O) && (j = Vo(_), En(_, F, B, !0), _ = null), O.patchFlag === -2 && (W = !1, O.dynamicChildren = null);
    const { type: H, ref: re, shapeFlag: Q } = O;
    switch (H) {
      case on:
        $(_, O, I, j);
        break;
      case De:
        k(_, O, I, j);
        break;
      case Mn:
        _ == null ? y(O, I, j, X) : N.NODE_ENV !== "production" && h(_, O, I, X);
        break;
      case ie:
        M(
          _,
          O,
          I,
          j,
          F,
          B,
          X,
          G,
          W
        );
        break;
      default:
        Q & 1 ? A(
          _,
          O,
          I,
          j,
          F,
          B,
          X,
          G,
          W
        ) : Q & 6 ? z(
          _,
          O,
          I,
          j,
          F,
          B,
          X,
          G,
          W
        ) : Q & 64 || Q & 128 ? H.process(
          _,
          O,
          I,
          j,
          F,
          B,
          X,
          G,
          W,
          ps
        ) : N.NODE_ENV !== "production" && R("Invalid VNode type:", H, `(${typeof H})`);
    }
    re != null && F ? ws(re, _ && _.ref, B, O || _, !O) : re == null && _ && _.ref != null && ws(_.ref, null, B, _, !0);
  }, $ = (_, O, I, j) => {
    if (_ == null)
      s(
        O.el = l(O.children),
        I,
        j
      );
    else {
      const F = O.el = _.el;
      O.children !== _.children && u(F, O.children);
    }
  }, k = (_, O, I, j) => {
    _ == null ? s(
      O.el = a(O.children || ""),
      I,
      j
    ) : O.el = _.el;
  }, y = (_, O, I, j) => {
    [_.el, _.anchor] = g(
      _.children,
      O,
      I,
      j,
      _.el,
      _.anchor
    );
  }, h = (_, O, I, j) => {
    if (O.children !== _.children) {
      const F = p(_.anchor);
      b(_), [O.el, O.anchor] = g(
        O.children,
        I,
        F,
        j
      );
    } else
      O.el = _.el, O.anchor = _.anchor;
  }, E = ({ el: _, anchor: O }, I, j) => {
    let F;
    for (; _ && _ !== O; )
      F = p(_), s(_, I, j), _ = F;
    s(O, I, j);
  }, b = ({ el: _, anchor: O }) => {
    let I;
    for (; _ && _ !== O; )
      I = p(_), o(_), _ = I;
    o(O);
  }, A = (_, O, I, j, F, B, X, G, W) => {
    O.type === "svg" ? X = "svg" : O.type === "math" && (X = "mathml"), _ == null ? P(
      O,
      I,
      j,
      F,
      B,
      X,
      G,
      W
    ) : T(
      _,
      O,
      F,
      B,
      X,
      G,
      W
    );
  }, P = (_, O, I, j, F, B, X, G) => {
    let W, H;
    const { props: re, shapeFlag: Q, transition: se, dirs: ae } = _;
    if (W = _.el = i(
      _.type,
      B,
      re && re.is,
      re
    ), Q & 8 ? d(W, _.children) : Q & 16 && w(
      _.children,
      W,
      null,
      j,
      F,
      hi(_, B),
      X,
      G
    ), ae && Zt(_, null, j, "created"), D(W, _, _.scopeId, X, j), re) {
      for (const Oe in re)
        Oe !== "value" && !An(Oe) && r(W, Oe, null, re[Oe], B, j);
      "value" in re && r(W, "value", null, re.value, B), (H = re.onVnodeBeforeMount) && bt(H, j, _);
    }
    N.NODE_ENV !== "production" && (os(W, "__vnode", _, !0), os(W, "__vueParentComponent", j, !0)), ae && Zt(_, null, j, "beforeMount");
    const ye = Qu(F, se);
    ye && se.beforeEnter(W), s(W, O, I), ((H = re && re.onVnodeMounted) || ye || ae) && He(() => {
      H && bt(H, j, _), ye && se.enter(W), ae && Zt(_, null, j, "mounted");
    }, F);
  }, D = (_, O, I, j, F) => {
    if (I && m(_, I), j)
      for (let B = 0; B < j.length; B++)
        m(_, j[B]);
    if (F) {
      let B = F.subTree;
      if (N.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && (B = Wr(B.children) || B), O === B || mr(B.type) && (B.ssContent === O || B.ssFallback === O)) {
        const X = F.vnode;
        D(
          _,
          X,
          X.scopeId,
          X.slotScopeIds,
          F.parent
        );
      }
    }
  }, w = (_, O, I, j, F, B, X, G, W = 0) => {
    for (let H = W; H < _.length; H++) {
      const re = _[H] = G ? On(_[H]) : ht(_[H]);
      v(
        null,
        re,
        O,
        I,
        j,
        F,
        B,
        X,
        G
      );
    }
  }, T = (_, O, I, j, F, B, X) => {
    const G = O.el = _.el;
    N.NODE_ENV !== "production" && (G.__vnode = O);
    let { patchFlag: W, dynamicChildren: H, dirs: re } = O;
    W |= _.patchFlag & 16;
    const Q = _.props || pe, se = O.props || pe;
    let ae;
    if (I && Un(I, !1), (ae = se.onVnodeBeforeUpdate) && bt(ae, I, O, _), re && Zt(O, _, I, "beforeUpdate"), I && Un(I, !0), N.NODE_ENV !== "production" && jt && (W = 0, X = !1, H = null), (Q.innerHTML && se.innerHTML == null || Q.textContent && se.textContent == null) && d(G, ""), H ? (V(
      _.dynamicChildren,
      H,
      G,
      I,
      j,
      hi(O, F),
      B
    ), N.NODE_ENV !== "production" && so(_, O)) : X || we(
      _,
      O,
      G,
      null,
      I,
      j,
      hi(O, F),
      B,
      !1
    ), W > 0) {
      if (W & 16)
        C(G, Q, se, I, F);
      else if (W & 2 && Q.class !== se.class && r(G, "class", null, se.class, F), W & 4 && r(G, "style", Q.style, se.style, F), W & 8) {
        const ye = O.dynamicProps;
        for (let Oe = 0; Oe < ye.length; Oe++) {
          const xe = ye[Oe], gt = Q[xe], Ze = se[xe];
          (Ze !== gt || xe === "value") && r(G, xe, gt, Ze, F, I);
        }
      }
      W & 1 && _.children !== O.children && d(G, O.children);
    } else !X && H == null && C(G, Q, se, I, F);
    ((ae = se.onVnodeUpdated) || re) && He(() => {
      ae && bt(ae, I, O, _), re && Zt(O, _, I, "updated");
    }, j);
  }, V = (_, O, I, j, F, B, X) => {
    for (let G = 0; G < O.length; G++) {
      const W = _[G], H = O[G], re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ft(W, H) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? c(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      v(
        W,
        H,
        re,
        null,
        j,
        F,
        B,
        X,
        !0
      );
    }
  }, C = (_, O, I, j, F) => {
    if (O !== I) {
      if (O !== pe)
        for (const B in O)
          !An(B) && !(B in I) && r(
            _,
            B,
            O[B],
            null,
            F,
            j
          );
      for (const B in I) {
        if (An(B)) continue;
        const X = I[B], G = O[B];
        X !== G && B !== "value" && r(_, B, G, X, F, j);
      }
      "value" in I && r(_, "value", O.value, I.value, F);
    }
  }, M = (_, O, I, j, F, B, X, G, W) => {
    const H = O.el = _ ? _.el : l(""), re = O.anchor = _ ? _.anchor : l("");
    let { patchFlag: Q, dynamicChildren: se, slotScopeIds: ae } = O;
    N.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (jt || Q & 2048) && (Q = 0, W = !1, se = null), ae && (G = G ? G.concat(ae) : ae), _ == null ? (s(H, I, j), s(re, I, j), w(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      I,
      re,
      F,
      B,
      X,
      G,
      W
    )) : Q > 0 && Q & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (V(
      _.dynamicChildren,
      se,
      I,
      F,
      B,
      X,
      G
    ), N.NODE_ENV !== "production" ? so(_, O) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (O.key != null || F && O === F.subTree) && so(
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
      F,
      B,
      X,
      G,
      W
    );
  }, z = (_, O, I, j, F, B, X, G, W) => {
    O.slotScopeIds = G, _ == null ? O.shapeFlag & 512 ? F.ctx.activate(
      O,
      I,
      j,
      X,
      W
    ) : K(
      O,
      I,
      j,
      F,
      B,
      X,
      W
    ) : ee(_, O, W);
  }, K = (_, O, I, j, F, B, X) => {
    const G = _.component = gd(
      _,
      j,
      F
    );
    if (N.NODE_ENV !== "production" && G.type.__hmrId && sh(G), N.NODE_ENV !== "production" && (bs(_), cn(G, "mount")), Fs(_) && (G.ctx.renderer = ps), N.NODE_ENV !== "production" && cn(G, "init"), yd(G, !1, X), N.NODE_ENV !== "production" && un(G, "init"), N.NODE_ENV !== "production" && jt && (_.el = null), G.asyncDep) {
      if (F && F.registerDep(G, ne, X), !_.el) {
        const W = G.subTree = ue(De);
        k(null, W, O, I), _.placeholder = W.el;
      }
    } else
      ne(
        G,
        _,
        O,
        I,
        F,
        B,
        X
      );
    N.NODE_ENV !== "production" && (_s(), un(G, "mount"));
  }, ee = (_, O, I) => {
    const j = O.component = _.component;
    if (Lm(_, O, I))
      if (j.asyncDep && !j.asyncResolved) {
        N.NODE_ENV !== "production" && bs(O), te(j, O, I), N.NODE_ENV !== "production" && _s();
        return;
      } else
        j.next = O, j.update();
    else
      O.el = _.el, j.vnode = O;
  }, ne = (_, O, I, j, F, B, X) => {
    const G = () => {
      if (_.isMounted) {
        let { next: Q, bu: se, u: ae, parent: ye, vnode: Oe } = _;
        {
          const Nt = Zu(_);
          if (Nt) {
            Q && (Q.el = Oe.el, te(_, Q, X)), Nt.asyncDep.then(() => {
              _.isUnmounted || G();
            });
            return;
          }
        }
        let xe = Q, gt;
        N.NODE_ENV !== "production" && bs(Q || _.vnode), Un(_, !1), Q ? (Q.el = Oe.el, te(_, Q, X)) : Q = Oe, se && $n(se), (gt = Q.props && Q.props.onVnodeBeforeUpdate) && bt(gt, ye, Q, Oe), Un(_, !0), N.NODE_ENV !== "production" && cn(_, "render");
        const Ze = Wo(_);
        N.NODE_ENV !== "production" && un(_, "render");
        const Rt = _.subTree;
        _.subTree = Ze, N.NODE_ENV !== "production" && cn(_, "patch"), v(
          Rt,
          Ze,
          // parent may have changed if it's in a teleport
          c(Rt.el),
          // anchor may have changed if it's in a fragment
          Vo(Rt),
          _,
          F,
          B
        ), N.NODE_ENV !== "production" && un(_, "patch"), Q.el = Ze.el, xe === null && Gr(_, Ze.el), ae && He(ae, F), (gt = Q.props && Q.props.onVnodeUpdated) && He(
          () => bt(gt, ye, Q, Oe),
          F
        ), N.NODE_ENV !== "production" && mu(_), N.NODE_ENV !== "production" && _s();
      } else {
        let Q;
        const { el: se, props: ae } = O, { bm: ye, m: Oe, parent: xe, root: gt, type: Ze } = _, Rt = In(O);
        if (Un(_, !1), ye && $n(ye), !Rt && (Q = ae && ae.onVnodeBeforeMount) && bt(Q, xe, O), Un(_, !0), se && si) {
          const Nt = () => {
            N.NODE_ENV !== "production" && cn(_, "render"), _.subTree = Wo(_), N.NODE_ENV !== "production" && un(_, "render"), N.NODE_ENV !== "production" && cn(_, "hydrate"), si(
              se,
              _.subTree,
              _,
              F,
              null
            ), N.NODE_ENV !== "production" && un(_, "hydrate");
          };
          Rt && Ze.__asyncHydrate ? Ze.__asyncHydrate(
            se,
            _,
            Nt
          ) : Nt();
        } else {
          gt.ce && // @ts-expect-error _def is private
          gt.ce._def.shadowRoot !== !1 && gt.ce._injectChildStyle(Ze), N.NODE_ENV !== "production" && cn(_, "render");
          const Nt = _.subTree = Wo(_);
          N.NODE_ENV !== "production" && un(_, "render"), N.NODE_ENV !== "production" && cn(_, "patch"), v(
            null,
            Nt,
            I,
            j,
            _,
            F,
            B
          ), N.NODE_ENV !== "production" && un(_, "patch"), O.el = Nt.el;
        }
        if (Oe && He(Oe, F), !Rt && (Q = ae && ae.onVnodeMounted)) {
          const Nt = O;
          He(
            () => bt(Q, xe, Nt),
            F
          );
        }
        (O.shapeFlag & 256 || xe && In(xe.vnode) && xe.vnode.shapeFlag & 256) && _.a && He(_.a, F), _.isMounted = !0, N.NODE_ENV !== "production" && ki(_), O = I = j = null;
      }
    };
    _.scope.on();
    const W = _.effect = new ao(G);
    _.scope.off();
    const H = _.update = W.run.bind(W), re = _.job = W.runIfDirty.bind(W);
    re.i = _, re.id = _.uid, W.scheduler = () => Br(re), Un(_, !0), N.NODE_ENV !== "production" && (W.onTrack = _.rtc ? (Q) => $n(_.rtc, Q) : void 0, W.onTrigger = _.rtg ? (Q) => $n(_.rtg, Q) : void 0), H();
  }, te = (_, O, I) => {
    O.component = _;
    const j = _.vnode.props;
    _.vnode = O, _.next = null, ym(_, O.props, j, I), Om(_, O.children, I), Kt(), ha(_), Wt();
  }, we = (_, O, I, j, F, B, X, G, W = !1) => {
    const H = _ && _.children, re = _ ? _.shapeFlag : 0, Q = O.children, { patchFlag: se, shapeFlag: ae } = O;
    if (se > 0) {
      if (se & 128) {
        Tt(
          H,
          Q,
          I,
          j,
          F,
          B,
          X,
          G,
          W
        );
        return;
      } else if (se & 256) {
        mt(
          H,
          Q,
          I,
          j,
          F,
          B,
          X,
          G,
          W
        );
        return;
      }
    }
    ae & 8 ? (re & 16 && Bs(H, F, B), Q !== H && d(I, Q)) : re & 16 ? ae & 16 ? Tt(
      H,
      Q,
      I,
      j,
      F,
      B,
      X,
      G,
      W
    ) : Bs(H, F, B, !0) : (re & 8 && d(I, ""), ae & 16 && w(
      Q,
      I,
      j,
      F,
      B,
      X,
      G,
      W
    ));
  }, mt = (_, O, I, j, F, B, X, G, W) => {
    _ = _ || ys, O = O || ys;
    const H = _.length, re = O.length, Q = Math.min(H, re);
    let se;
    for (se = 0; se < Q; se++) {
      const ae = O[se] = W ? On(O[se]) : ht(O[se]);
      v(
        _[se],
        ae,
        I,
        null,
        F,
        B,
        X,
        G,
        W
      );
    }
    H > re ? Bs(
      _,
      F,
      B,
      !0,
      !1,
      Q
    ) : w(
      O,
      I,
      j,
      F,
      B,
      X,
      G,
      W,
      Q
    );
  }, Tt = (_, O, I, j, F, B, X, G, W) => {
    let H = 0;
    const re = O.length;
    let Q = _.length - 1, se = re - 1;
    for (; H <= Q && H <= se; ) {
      const ae = _[H], ye = O[H] = W ? On(O[H]) : ht(O[H]);
      if (Ft(ae, ye))
        v(
          ae,
          ye,
          I,
          null,
          F,
          B,
          X,
          G,
          W
        );
      else
        break;
      H++;
    }
    for (; H <= Q && H <= se; ) {
      const ae = _[Q], ye = O[se] = W ? On(O[se]) : ht(O[se]);
      if (Ft(ae, ye))
        v(
          ae,
          ye,
          I,
          null,
          F,
          B,
          X,
          G,
          W
        );
      else
        break;
      Q--, se--;
    }
    if (H > Q) {
      if (H <= se) {
        const ae = se + 1, ye = ae < re ? O[ae].el : j;
        for (; H <= se; )
          v(
            null,
            O[H] = W ? On(O[H]) : ht(O[H]),
            I,
            ye,
            F,
            B,
            X,
            G,
            W
          ), H++;
      }
    } else if (H > se)
      for (; H <= Q; )
        En(_[H], F, B, !0), H++;
    else {
      const ae = H, ye = H, Oe = /* @__PURE__ */ new Map();
      for (H = ye; H <= se; H++) {
        const ut = O[H] = W ? On(O[H]) : ht(O[H]);
        ut.key != null && (N.NODE_ENV !== "production" && Oe.has(ut.key) && R(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), Oe.set(ut.key, H));
      }
      let xe, gt = 0;
      const Ze = se - ye + 1;
      let Rt = !1, Nt = 0;
      const js = new Array(Ze);
      for (H = 0; H < Ze; H++) js[H] = 0;
      for (H = ae; H <= Q; H++) {
        const ut = _[H];
        if (gt >= Ze) {
          En(ut, F, B, !0);
          continue;
        }
        let Yt;
        if (ut.key != null)
          Yt = Oe.get(ut.key);
        else
          for (xe = ye; xe <= se; xe++)
            if (js[xe - ye] === 0 && Ft(ut, O[xe])) {
              Yt = xe;
              break;
            }
        Yt === void 0 ? En(ut, F, B, !0) : (js[Yt - ye] = H + 1, Yt >= Nt ? Nt = Yt : Rt = !0, v(
          ut,
          O[Yt],
          I,
          null,
          F,
          B,
          X,
          G,
          W
        ), gt++);
      }
      const oa = Rt ? $m(js) : ys;
      for (xe = oa.length - 1, H = Ze - 1; H >= 0; H--) {
        const ut = ye + H, Yt = O[ut], ra = O[ut + 1], ia = ut + 1 < re ? (
          // #13559, fallback to el placeholder for unresolved async component
          ra.el || ra.placeholder
        ) : j;
        js[H] === 0 ? v(
          null,
          Yt,
          I,
          ia,
          F,
          B,
          X,
          G,
          W
        ) : Rt && (xe < 0 || H !== oa[xe] ? $t(Yt, I, ia, 2) : xe--);
      }
    }
  }, $t = (_, O, I, j, F = null) => {
    const { el: B, type: X, transition: G, children: W, shapeFlag: H } = _;
    if (H & 6) {
      $t(_.component.subTree, O, I, j);
      return;
    }
    if (H & 128) {
      _.suspense.move(O, I, j);
      return;
    }
    if (H & 64) {
      X.move(_, O, I, ps);
      return;
    }
    if (X === ie) {
      s(B, O, I);
      for (let Q = 0; Q < W.length; Q++)
        $t(W[Q], O, I, j);
      s(_.anchor, O, I);
      return;
    }
    if (X === Mn) {
      E(_, O, I);
      return;
    }
    if (j !== 2 && H & 1 && G)
      if (j === 0)
        G.beforeEnter(B), s(B, O, I), He(() => G.enter(B), F);
      else {
        const { leave: Q, delayLeave: se, afterLeave: ae } = G, ye = () => {
          _.ctx.isUnmounted ? o(B) : s(B, O, I);
        }, Oe = () => {
          Q(B, () => {
            ye(), ae && ae();
          });
        };
        se ? se(B, ye, Oe) : Oe();
      }
    else
      s(B, O, I);
  }, En = (_, O, I, j = !1, F = !1) => {
    const {
      type: B,
      props: X,
      ref: G,
      children: W,
      dynamicChildren: H,
      shapeFlag: re,
      patchFlag: Q,
      dirs: se,
      cacheIndex: ae
    } = _;
    if (Q === -2 && (F = !1), G != null && (Kt(), ws(G, null, I, _, !0), Wt()), ae != null && (O.renderCache[ae] = void 0), re & 256) {
      O.ctx.deactivate(_);
      return;
    }
    const ye = re & 1 && se, Oe = !In(_);
    let xe;
    if (Oe && (xe = X && X.onVnodeBeforeUnmount) && bt(xe, O, _), re & 6)
      Ff(_.component, I, j);
    else {
      if (re & 128) {
        _.suspense.unmount(I, j);
        return;
      }
      ye && Zt(_, null, O, "beforeUnmount"), re & 64 ? _.type.remove(
        _,
        O,
        I,
        ps,
        j
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== ie || Q > 0 && Q & 64) ? Bs(
        H,
        O,
        I,
        !1,
        !0
      ) : (B === ie && Q & 384 || !F && re & 16) && Bs(W, O, I), j && ei(_);
    }
    (Oe && (xe = X && X.onVnodeUnmounted) || ye) && He(() => {
      xe && bt(xe, O, _), ye && Zt(_, null, O, "unmounted");
    }, I);
  }, ei = (_) => {
    const { type: O, el: I, anchor: j, transition: F } = _;
    if (O === ie) {
      N.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && F && !F.persisted ? _.children.forEach((X) => {
        X.type === De ? o(X.el) : ei(X);
      }) : Lf(I, j);
      return;
    }
    if (O === Mn) {
      b(_);
      return;
    }
    const B = () => {
      o(I), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (_.shapeFlag & 1 && F && !F.persisted) {
      const { leave: X, delayLeave: G } = F, W = () => X(I, B);
      G ? G(_.el, B, W) : W();
    } else
      B();
  }, Lf = (_, O) => {
    let I;
    for (; _ !== O; )
      I = p(_), o(_), _ = I;
    o(O);
  }, Ff = (_, O, I) => {
    N.NODE_ENV !== "production" && _.type.__hmrId && oh(_);
    const {
      bum: j,
      scope: F,
      job: B,
      subTree: X,
      um: G,
      m: W,
      a: H,
      parent: re,
      slots: { __: Q }
    } = _;
    pr(W), pr(H), j && $n(j), re && Y(Q) && Q.forEach((se) => {
      re.renderCache[se] = void 0;
    }), F.stop(), B && (B.flags |= 8, En(X, _, O, I)), G && He(G, O), He(() => {
      _.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve()), N.NODE_ENV !== "production" && uh(_);
  }, Bs = (_, O, I, j = !1, F = !1, B = 0) => {
    for (let X = B; X < _.length; X++)
      En(_[X], O, I, j, F);
  }, Vo = (_) => {
    if (_.shapeFlag & 6)
      return Vo(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const O = p(_.anchor || _.el), I = O && O[yu];
    return I ? p(I) : O;
  };
  let ti = !1;
  const sa = (_, O, I) => {
    _ == null ? O._vnode && En(O._vnode, null, null, !0) : v(
      O._vnode || null,
      _,
      O,
      null,
      null,
      null,
      I
    ), O._vnode = _, ti || (ti = !0, ha(), ar(), ti = !1);
  }, ps = {
    p: v,
    um: En,
    m: $t,
    r: ei,
    mt: K,
    mc: w,
    pc: we,
    pbc: V,
    n: Vo,
    o: e
  };
  let ni, si;
  return t && ([ni, si] = t(
    ps
  )), {
    render: sa,
    hydrate: ni,
    createApp: hm(sa, ni)
  };
}
function hi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Un({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Y(s) && Y(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = On(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && so(i, l)), l.type === on && (l.el = i.el), l.type === De && !l.el && (l.el = i.el), N.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function $m(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < u ? r = l + 1 : i = l;
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Zu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zu(t);
}
function pr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ed = Symbol.for("v-scx"), td = () => {
  {
    const e = no(ed);
    return e || N.NODE_ENV !== "production" && R(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Dm(e, t) {
  return ko(e, null, t);
}
function Vm(e, t) {
  return ko(
    e,
    null,
    N.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function nd(e, t) {
  return ko(
    e,
    null,
    N.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function sn(e, t, n) {
  return N.NODE_ENV !== "production" && !oe(t) && R(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ko(e, t, n);
}
function ko(e, t, n = pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  N.NODE_ENV !== "production" && !t && (s !== void 0 && R(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && R(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && R(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  N.NODE_ENV !== "production" && (l.onWarn = R);
  const a = t && s || !t && r !== "post";
  let u;
  if (Os) {
    if (r === "sync") {
      const m = td();
      u = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = $e, m.resume = $e, m.pause = $e, m;
    }
  }
  const d = Ke;
  l.call = (m, g, v) => Mt(m, d, g, v);
  let c = !1;
  r === "post" ? l.scheduler = (m) => {
    He(m, d && d.suspense);
  } : r !== "sync" && (c = !0, l.scheduler = (m, g) => {
    g ? m() : Br(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const p = Gp(e, t, l);
  return Os && (u ? u.push(p) : a && p()), p;
}
function Am(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? sd(s, e) : () => s[e] : e.bind(s, s);
  let r;
  oe(t) ? r = t : (r = t.handler, n = t);
  const i = as(this), l = ko(o, r.bind(s), n);
  return i(), l;
}
function sd(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Im(e, t, n = pe) {
  const s = ct();
  if (N.NODE_ENV !== "production" && !s)
    return R("useModel() called without active instance."), q();
  const o = Ce(t);
  if (N.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return R(`useModel() called with prop "${t}" which is not declared.`), q();
  const r = nt(t), i = od(e, o), l = lu((a, u) => {
    let d, c = pe, p;
    return nd(() => {
      const m = e[o];
      ft(d, m) && (d = m, u());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const g = n.set ? n.set(m) : m;
        if (!ft(g, d) && !(c !== pe && ft(m, c)))
          return;
        const v = s.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || r in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${r}` in v) || (d = m, u()), s.emit(`update:${t}`, g), ft(m, g) && ft(m, c) && !ft(g, p) && u(), c = m, p = g;
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
const od = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${nt(t)}Modifiers`];
function Mm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (N.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [c]
    } = e;
    if (d)
      if (!(t in d))
        (!c || !(tn(Ce(t)) in c)) && R(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${tn(Ce(t))}" prop.`
        );
      else {
        const p = d[t];
        oe(p) && (p(...n) || R(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && od(s, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => le(d) ? d.trim() : d)), i.number && (o = n.map(nr))), N.NODE_ENV !== "production" && ph(e, t, o), N.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[tn(d)] && R(
      `Event "${d}" is emitted in component ${Yr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${nt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = tn(t)] || // also try camelCase event handler (#2249)
  s[l = tn(Ce(t))];
  !a && r && (a = s[l = tn(nt(t))]), a && Mt(
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
    e.emitted[l] = !0, Mt(
      u,
      e,
      6,
      o
    );
  }
}
function rd(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!oe(e)) {
    const a = (u) => {
      const d = rd(u, t, !0);
      d && (l = !0, fe(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (me(e) && s.set(e, null), null) : (Y(r) ? r.forEach((a) => i[a] = null) : fe(i, r), me(e) && s.set(e, i), i);
}
function Kr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, nt(t)) || ge(e, t));
}
let Ai = !1;
function hr() {
  Ai = !0;
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
    render: u,
    renderCache: d,
    props: c,
    data: p,
    setupState: m,
    ctx: g,
    inheritAttrs: v
  } = e, $ = po(e);
  let k, y;
  N.NODE_ENV !== "production" && (Ai = !1);
  try {
    if (n.shapeFlag & 4) {
      const b = o || s, A = N.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(b, {
        get(P, D, w) {
          return R(
            `Property '${String(
              D
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, D, w);
        }
      }) : b;
      k = ht(
        u.call(
          A,
          b,
          d,
          N.NODE_ENV !== "production" ? Bt(c) : c,
          m,
          p,
          g
        )
      ), y = l;
    } else {
      const b = t;
      N.NODE_ENV !== "production" && l === c && hr(), k = ht(
        b.length > 1 ? b(
          N.NODE_ENV !== "production" ? Bt(c) : c,
          N.NODE_ENV !== "production" ? {
            get attrs() {
              return hr(), Bt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : b(
          N.NODE_ENV !== "production" ? Bt(c) : c,
          null
        )
      ), y = t.props ? l : Pm(l);
    }
  } catch (b) {
    oo.length = 0, Bn(b, e, 1), k = ue(De);
  }
  let h = k, E;
  if (N.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([h, E] = id(k)), y && v !== !1) {
    const b = Object.keys(y), { shapeFlag: A } = h;
    if (b.length) {
      if (A & 7)
        r && b.some(tr) && (y = Rm(
          y,
          r
        )), h = Pt(h, y, !1, !0);
      else if (N.NODE_ENV !== "production" && !Ai && h.type !== De) {
        const P = Object.keys(l), D = [], w = [];
        for (let T = 0, V = P.length; T < V; T++) {
          const C = P[T];
          vn(C) ? tr(C) || D.push(C[2].toLowerCase() + C.slice(3)) : w.push(C);
        }
        w.length && R(
          `Extraneous non-props attributes (${w.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), D.length && R(
          `Extraneous non-emits event listeners (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (N.NODE_ENV !== "production" && !Da(h) && R(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), h = Pt(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs), n.transition && (N.NODE_ENV !== "production" && !Da(h) && R(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(h, n.transition)), N.NODE_ENV !== "production" && E ? E(h) : k = h, po($), k;
}
const id = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Wr(t, !1);
  if (s) {
    if (N.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return id(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ht(s), i];
};
function Wr(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (ln(o)) {
      if (o.type !== De || o.children === "v-if") {
        if (n)
          return;
        if (n = o, N.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Wr(n.children);
      }
    } else
      return;
  }
  return n;
}
const Pm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rm = (e, t) => {
  const n = {};
  for (const s in e)
    (!tr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Da = (e) => e.shapeFlag & 7 || e.type === De;
function Lm(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, u = r.emitsOptions;
  if (N.NODE_ENV !== "production" && (o || l) && jt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Va(s, i, u) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        const p = d[c];
        if (i[p] !== s[p] && !Kr(u, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Va(s, i, u) : !0 : !!i;
  return !1;
}
function Va(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Kr(n, r))
      return !0;
  }
  return !1;
}
function Gr({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const mr = (e) => e.__isSuspense;
let Ii = 0;
const Fm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, r, i, l, a, u) {
    if (e == null)
      jm(
        t,
        n,
        s,
        o,
        r,
        i,
        l,
        a,
        u
      );
    else {
      if (r && r.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Hm(
        e,
        t,
        n,
        s,
        o,
        i,
        l,
        a,
        u
      );
    }
  },
  hydrate: Um,
  normalize: qm
}, Bm = Fm;
function mo(e, t) {
  const n = e.props && e.props[t];
  oe(n) && n();
}
function jm(e, t, n, s, o, r, i, l, a) {
  const {
    p: u,
    o: { createElement: d }
  } = a, c = d("div"), p = e.suspense = ld(
    e,
    o,
    s,
    t,
    c,
    n,
    r,
    i,
    l,
    a
  );
  u(
    null,
    p.pendingBranch = e.ssContent,
    c,
    null,
    s,
    p,
    r,
    i
  ), p.deps > 0 ? (mo(e, "onPending"), mo(e, "onFallback"), u(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    r,
    i
  ), xs(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Hm(e, t, n, s, o, r, i, l, { p: a, um: u, o: { createElement: d } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const p = t.ssContent, m = t.ssFallback, { activeBranch: g, pendingBranch: v, isInFallback: $, isHydrating: k } = c;
  if (v)
    c.pendingBranch = p, Ft(p, v) ? (a(
      v,
      p,
      c.hiddenContainer,
      null,
      o,
      c,
      r,
      i,
      l
    ), c.deps <= 0 ? c.resolve() : $ && (k || (a(
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
    ), xs(c, m)))) : (c.pendingId = Ii++, k ? (c.isHydrating = !1, c.activeBranch = v) : u(v, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = d("div"), $ ? (a(
      null,
      p,
      c.hiddenContainer,
      null,
      o,
      c,
      r,
      i,
      l
    ), c.deps <= 0 ? c.resolve() : (a(
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
    ), xs(c, m))) : g && Ft(p, g) ? (a(
      g,
      p,
      n,
      s,
      o,
      c,
      r,
      i,
      l
    ), c.resolve(!0)) : (a(
      null,
      p,
      c.hiddenContainer,
      null,
      o,
      c,
      r,
      i,
      l
    ), c.deps <= 0 && c.resolve()));
  else if (g && Ft(p, g))
    a(
      g,
      p,
      n,
      s,
      o,
      c,
      r,
      i,
      l
    ), xs(c, p);
  else if (mo(t, "onPending"), c.pendingBranch = p, p.shapeFlag & 512 ? c.pendingId = p.component.suspenseId : c.pendingId = Ii++, a(
    null,
    p,
    c.hiddenContainer,
    null,
    o,
    c,
    r,
    i,
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
let Aa = !1;
function ld(e, t, n, s, o, r, i, l, a, u, d = !1) {
  N.NODE_ENV !== "production" && !Aa && (Aa = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: p,
    um: m,
    n: g,
    o: { parentNode: v, remove: $ }
  } = u;
  let k;
  const y = zm(e);
  y && t && t.pendingBranch && (k = t.pendingId, t.deps++);
  const h = e.props ? sr(e.props.timeout) : void 0;
  N.NODE_ENV !== "production" && hl(h, "Suspense timeout");
  const E = r, b = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Ii++,
    timeout: typeof h == "number" ? h : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(A = !1, P = !1) {
      if (N.NODE_ENV !== "production") {
        if (!A && !b.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (b.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: D,
        activeBranch: w,
        pendingBranch: T,
        pendingId: V,
        effects: C,
        parentComponent: M,
        container: z
      } = b;
      let K = !1;
      b.isHydrating ? b.isHydrating = !1 : A || (K = w && T.transition && T.transition.mode === "out-in", K && (w.transition.afterLeave = () => {
        V === b.pendingId && (p(
          T,
          z,
          r === E ? g(w) : r,
          0
        ), ks(C));
      }), w && (v(w.el) === z && (r = g(w)), m(w, M, b, !0)), K || p(T, z, r, 0)), xs(b, T), b.pendingBranch = null, b.isInFallback = !1;
      let ee = b.parent, ne = !1;
      for (; ee; ) {
        if (ee.pendingBranch) {
          ee.effects.push(...C), ne = !0;
          break;
        }
        ee = ee.parent;
      }
      !ne && !K && ks(C), b.effects = [], y && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !P && t.resolve()), mo(D, "onResolve");
    },
    fallback(A) {
      if (!b.pendingBranch)
        return;
      const { vnode: P, activeBranch: D, parentComponent: w, container: T, namespace: V } = b;
      mo(P, "onFallback");
      const C = g(D), M = () => {
        b.isInFallback && (c(
          null,
          A,
          T,
          C,
          w,
          null,
          // fallback tree will not have suspense context
          V,
          l,
          a
        ), xs(b, A));
      }, z = A.transition && A.transition.mode === "out-in";
      z && (D.transition.afterLeave = M), b.isInFallback = !0, m(
        D,
        w,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), z || M();
    },
    move(A, P, D) {
      b.activeBranch && p(b.activeBranch, A, P, D), b.container = A;
    },
    next() {
      return b.activeBranch && g(b.activeBranch);
    },
    registerDep(A, P, D) {
      const w = !!b.pendingBranch;
      w && b.deps++;
      const T = A.vnode.el;
      A.asyncDep.catch((V) => {
        Bn(V, A, 0);
      }).then((V) => {
        if (A.isUnmounted || b.isUnmounted || b.pendingId !== A.suspenseId)
          return;
        A.asyncResolved = !0;
        const { vnode: C } = A;
        N.NODE_ENV !== "production" && bs(C), Bi(A, V, !1), T && (C.el = T);
        const M = !T && A.subTree.el;
        P(
          A,
          C,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          v(T || A.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          T ? null : g(A.subTree),
          b,
          i,
          D
        ), M && $(M), Gr(A, C.el), N.NODE_ENV !== "production" && _s(), w && --b.deps === 0 && b.resolve();
      });
    },
    unmount(A, P) {
      b.isUnmounted = !0, b.activeBranch && m(
        b.activeBranch,
        n,
        A,
        P
      ), b.pendingBranch && m(
        b.pendingBranch,
        n,
        A,
        P
      );
    }
  };
  return b;
}
function Um(e, t, n, s, o, r, i, l, a) {
  const u = t.suspense = ld(
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
    u.pendingBranch = t.ssContent,
    n,
    u,
    r,
    i
  );
  return u.deps === 0 && u.resolve(!1, !0), d;
}
function qm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Ia(
    s ? n.default : n
  ), e.ssFallback = s ? Ia(n.fallback) : ue(De);
}
function Ia(e) {
  let t;
  if (oe(e)) {
    const n = is && e._c;
    n && (e._d = !1, x()), e = e(), n && (e._d = !0, t = ot, cd());
  }
  if (Y(e)) {
    const n = Wr(e);
    N.NODE_ENV !== "production" && !n && e.filter((s) => s !== xl).length > 0 && R("<Suspense> slots expect a single root node."), e = n;
  }
  return e = ht(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function ad(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : ks(e);
}
function xs(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, Gr(s, o));
}
function zm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ie = Symbol.for("v-fgt"), on = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), oo = [];
let ot = null;
function x(e = !1) {
  oo.push(ot = e ? null : []);
}
function cd() {
  oo.pop(), ot = oo[oo.length - 1] || null;
}
let is = 1;
function Mi(e, t = !1) {
  is += e, e < 0 && ot && t && (ot.hasOnce = !0);
}
function ud(e) {
  return e.dynamicChildren = is > 0 ? ot || ys : null, cd(), is > 0 && ot && ot.push(e), e;
}
function S(e, t, n, s, o, r) {
  return ud(
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
function at(e, t, n, s, o) {
  return ud(
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
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  if (N.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = zo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Pi;
function Km(e) {
  Pi = e;
}
const Wm = (...e) => fd(
  ...Pi ? Pi(e, Le) : e
), dd = ({ key: e }) => e ?? null, Go = ({
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
    key: t && dd(t),
    ref: t && Go(t),
    scopeId: jr,
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
  return l ? (Dl(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), N.NODE_ENV !== "production" && a.key !== a.key && R("VNode created with invalid key (NaN). VNode type:", a.type), is > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ot.push(a), a;
}
const ue = N.NODE_ENV !== "production" ? Wm : fd;
function fd(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === xl) && (N.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = De), ln(e)) {
    const l = Pt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Dl(l, n), is > 0 && !r && ot && (l.shapeFlag & 6 ? ot[ot.indexOf(e)] = l : ot.push(l)), l.patchFlag = -2, l;
  }
  if (wd(e) && (e = e.__vccOpts), t) {
    t = pd(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = ke(l)), me(a) && (Ss(a) && !Y(a) && (a = fe({}, a)), t.style = Ge(a));
  }
  const i = le(e) ? 1 : mr(e) ? 128 : bu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return N.NODE_ENV !== "production" && i & 4 && Ss(e) && (e = ce(e), R(
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
function pd(e) {
  return e ? Ss(e) || Uu(e) ? fe({}, e) : e : null;
}
function Pt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, u = t ? md(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && dd(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Y(r) ? r.concat(Go(t)) : [r, Go(t)] : Go(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: N.NODE_ENV !== "production" && i === -1 && Y(l) ? l.map(hd) : l,
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
function hd(e) {
  const t = Pt(e);
  return Y(e.children) && (t.children = e.children.map(hd)), t;
}
function Fe(e = " ", t = 0) {
  return ue(on, null, e, t);
}
function ls(e, t) {
  const n = ue(Mn, null, e);
  return n.staticCount = t, n;
}
function L(e = "", t = !1) {
  return t ? (x(), at(De, null, e)) : ue(De, null, e);
}
function ht(e) {
  return e == null || typeof e == "boolean" ? ue(De) : Y(e) ? ue(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ln(e) ? On(e) : ue(on, null, String(e));
}
function On(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pt(e);
}
function Dl(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Dl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Uu(t) ? t._ctx = Le : o === 3 && Le && (Le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else oe(t) ? (t = { default: t, _ctx: Le }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Fe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function md(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ke([t.class, s.class]));
      else if (o === "style")
        t.style = Ge([t.style, s.style]);
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
const Gm = Fu();
let Ym = 0;
function gd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Gm, r = {
    uid: Ym++,
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
    scope: new al(
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
    propsOptions: zu(s, o),
    emitsOptions: rd(s, o),
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
  return N.NODE_ENV !== "production" ? r.ctx = zh(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Mm.bind(null, r), e.ce && e.ce(r), r;
}
let Ke = null;
const ct = () => Ke || Le;
let gr, Ri;
{
  const e = xo(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  gr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), Ri = t(
    "__VUE_SSR_SETTERS__",
    (n) => Os = n
  );
}
const as = (e) => {
  const t = Ke;
  return gr(e), e.scope.on(), () => {
    e.scope.off(), gr(t);
  };
}, Li = () => {
  Ke && Ke.scope.off(), gr(null);
}, Jm = /* @__PURE__ */ Ye("slot,component");
function Fi(e, { isNativeTag: t }) {
  (Jm(e) || t(e)) && R(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vd(e) {
  return e.vnode.shapeFlag & 4;
}
let Os = !1;
function yd(e, t = !1, n = !1) {
  t && Ri(t);
  const { props: s, children: o } = e.vnode, r = vd(e);
  gm(e, s, r, t), Cm(e, o, n || t);
  const i = r ? Xm(e, t) : void 0;
  return t && Ri(!1), i;
}
function Xm(e, t) {
  var n;
  const s = e.type;
  if (N.NODE_ENV !== "production") {
    if (s.name && Fi(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Fi(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        vu(r[i]);
    }
    s.compilerOptions && Vl() && R(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, to), N.NODE_ENV !== "production" && Kh(e);
  const { setup: o } = s;
  if (o) {
    Kt();
    const r = e.setupContext = o.length > 1 ? Ed(e) : null, i = as(e), l = ds(
      o,
      e,
      0,
      [
        N.NODE_ENV !== "production" ? Bt(e.props) : e.props,
        r
      ]
    ), a = $r(l);
    if (Wt(), i(), (a || e.sp) && !In(e) && El(e), a) {
      if (l.then(Li, Li), t)
        return l.then((u) => {
          Bi(e, u, t);
        }).catch((u) => {
          Bn(u, e, 0);
        });
      if (e.asyncDep = l, N.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = s.name) != null ? n : "Anonymous";
        R(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Bi(e, l, t);
  } else
    _d(e, t);
}
function Bi(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (N.NODE_ENV !== "production" && ln(t) && R(
    "setup() should not return VNodes directly - return a render function instead."
  ), N.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = pl(t), N.NODE_ENV !== "production" && Wh(e)) : N.NODE_ENV !== "production" && t !== void 0 && R(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _d(e, n);
}
let ro, ji;
function bd(e) {
  ro = e, ji = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, qh));
  };
}
const Vl = () => !ro;
function _d(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ro && !s.render) {
      const o = s.template || Ol(e).template;
      if (o) {
        N.NODE_ENV !== "production" && cn(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, u = fe(
          fe(
            {
              isCustomElement: r,
              delimiters: l
            },
            i
          ),
          a
        );
        s.render = ro(o, u), N.NODE_ENV !== "production" && un(e, "compile");
      }
    }
    e.render = s.render || $e, ji && ji(e);
  }
  {
    const o = as(e);
    Kt();
    try {
      am(e);
    } finally {
      Wt(), o();
    }
  }
  N.NODE_ENV !== "production" && !s.render && e.render === $e && !t && (!ro && s.template ? R(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : R("Component is missing template or render function: ", s));
}
const Ma = N.NODE_ENV !== "production" ? {
  get(e, t) {
    return hr(), qe(e, "get", ""), e[t];
  },
  set() {
    return R("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return R("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return qe(e, "get", ""), e[t];
  }
};
function Qm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return qe(e, "get", "$slots"), t[n];
    }
  });
}
function Ed(e) {
  const t = (n) => {
    if (N.NODE_ENV !== "production" && (e.exposed && R("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Y(n) ? s = "array" : Ae(n) && (s = "ref")), s !== "object" && R(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (N.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ma));
      },
      get slots() {
        return s || (s = Qm(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ma),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Co(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(pl(ou(e.exposed)), {
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
const Zm = /(?:^|[-_])(\w)/g, e0 = (e) => e.replace(Zm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ts(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yr(e, t, n = !1) {
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
  return s ? e0(s) : n ? "App" : "Anonymous";
}
function wd(e) {
  return oe(e) && "__vccOpts" in e;
}
const Z = (e, t) => {
  const n = qp(e, t, Os);
  if (N.NODE_ENV !== "production") {
    const s = ct();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Qt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? me(t) && !Y(t) ? ln(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ln(n) && (n = [n]), ue(e, t, n));
}
function xd() {
  if (N.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!me(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (Ae(c)) {
        Kt();
        const p = c.value;
        return Wt(), [
          "div",
          {},
          ["span", e, d(c)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (mn(c))
          return [
            "div",
            {},
            ["span", e, rt(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${Gt(c) ? " (readonly)" : ""}`
          ];
        if (Gt(c))
          return [
            "div",
            {},
            ["span", e, rt(c) ? "ShallowReadonly" : "Readonly"],
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
          ...r(c.$)
        ];
    }
  };
  function r(c) {
    const p = [];
    c.type.props && c.props && p.push(i("props", ce(c.props))), c.setupState !== pe && p.push(i("setup", c.setupState)), c.data !== pe && p.push(i("data", ce(c.data)));
    const m = a(c, "computed");
    m && p.push(i("computed", m));
    const g = a(c, "inject");
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
      ["object", { object: c }]
    ]), p;
  }
  function i(c, p) {
    return p = fe({}, p), Object.keys(p).length ? [
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
        ...Object.keys(p).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          l(p[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, p = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : me(c) ? ["object", { object: p ? ce(c) : c }] : ["span", n, String(c)];
  }
  function a(c, p) {
    const m = c.type;
    if (oe(m))
      return;
    const g = {};
    for (const v in c.ctx)
      u(m, v, p) && (g[v] = c.ctx[v]);
    return g;
  }
  function u(c, p, m) {
    const g = c[m];
    if (Y(g) && g.includes(p) || me(g) && p in g || c.extends && u(c.extends, p, m) || c.mixins && c.mixins.some((v) => u(v, p, m)))
      return !0;
  }
  function d(c) {
    return rt(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function t0(e, t, n, s) {
  const o = n[s];
  if (o && Nd(o, e))
    return o;
  const r = t();
  return r.memo = e.slice(), r.cacheIndex = s, n[s] = r;
}
function Nd(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (ft(n[s], t[s]))
      return !1;
  return is > 0 && ot && ot.push(e), !0;
}
const Hi = "3.5.18", Ie = N.NODE_ENV !== "production" ? R : $e, n0 = Fr, s0 = Lt, o0 = gl, r0 = {
  createComponentInstance: gd,
  setupComponent: yd,
  renderComponentRoot: Wo,
  setCurrentRenderingInstance: po,
  isVNode: ln,
  normalizeVNode: ht,
  getComponentPublicInstance: Co,
  ensureValidVNode: kl,
  pushWarningContext: bs,
  popWarningContext: _s
}, i0 = r0, l0 = null, a0 = null, c0 = null;
var Se = {};
let Ui;
const Pa = typeof window < "u" && window.trustedTypes;
if (Pa)
  try {
    Ui = /* @__PURE__ */ Pa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Se.NODE_ENV !== "production" && Ie(`Error creating trusted types policy: ${e}`);
  }
const Sd = Ui ? (e) => Ui.createHTML(e) : (e) => e, u0 = "http://www.w3.org/2000/svg", d0 = "http://www.w3.org/1998/Math/MathML", fn = typeof document < "u" ? document : null, Ra = fn && /* @__PURE__ */ fn.createElement("template"), f0 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? fn.createElementNS(u0, e) : t === "mathml" ? fn.createElementNS(d0, e) : n ? fn.createElement(e, { is: n }) : fn.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => fn.createTextNode(e),
  createComment: (e) => fn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => fn.querySelector(e),
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
      Ra.innerHTML = Sd(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ra.content;
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
}, wn = "transition", qs = "animation", $s = Symbol("_vtc"), kd = {
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
}, Cd = /* @__PURE__ */ fe(
  {},
  bl,
  kd
), p0 = (e) => (e.displayName = "Transition", e.props = Cd, e), st = /* @__PURE__ */ p0(
  (e, { slots: t }) => Qt(Nu, Od(e), t)
), qn = (e, t = []) => {
  Y(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, La = (e) => e ? Y(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Od(e) {
  const t = {};
  for (const C in e)
    C in kd || (t[C] = e[C]);
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
    appearActiveClass: u = i,
    appearToClass: d = l,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, g = h0(o), v = g && g[0], $ = g && g[1], {
    onBeforeEnter: k,
    onEnter: y,
    onEnterCancelled: h,
    onLeave: E,
    onLeaveCancelled: b,
    onBeforeAppear: A = k,
    onAppear: P = y,
    onAppearCancelled: D = h
  } = t, w = (C, M, z, K) => {
    C._enterCancelled = K, Nn(C, M ? d : l), Nn(C, M ? u : i), z && z();
  }, T = (C, M) => {
    C._isLeaving = !1, Nn(C, c), Nn(C, m), Nn(C, p), M && M();
  }, V = (C) => (M, z) => {
    const K = C ? P : y, ee = () => w(M, C, z);
    qn(K, [M, ee]), Fa(() => {
      Nn(M, C ? a : r), Jt(M, C ? d : l), La(K) || Ba(M, s, v, ee);
    });
  };
  return fe(t, {
    onBeforeEnter(C) {
      qn(k, [C]), Jt(C, r), Jt(C, i);
    },
    onBeforeAppear(C) {
      qn(A, [C]), Jt(C, a), Jt(C, u);
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(C, M) {
      C._isLeaving = !0;
      const z = () => T(C, M);
      Jt(C, c), C._enterCancelled ? (Jt(C, p), qi()) : (qi(), Jt(C, p)), Fa(() => {
        C._isLeaving && (Nn(C, c), Jt(C, m), La(E) || Ba(C, s, $, z));
      }), qn(E, [C, z]);
    },
    onEnterCancelled(C) {
      w(C, !1, void 0, !0), qn(h, [C]);
    },
    onAppearCancelled(C) {
      w(C, !0, void 0, !0), qn(D, [C]);
    },
    onLeaveCancelled(C) {
      T(C), qn(b, [C]);
    }
  });
}
function h0(e) {
  if (e == null)
    return null;
  if (me(e))
    return [mi(e.enter), mi(e.leave)];
  {
    const t = mi(e);
    return [t, t];
  }
}
function mi(e) {
  const t = sr(e);
  return Se.NODE_ENV !== "production" && hl(t, "<transition> explicit duration"), t;
}
function Jt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[$s] || (e[$s] = /* @__PURE__ */ new Set())).add(t);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[$s];
  n && (n.delete(t), n.size || (e[$s] = void 0));
}
function Fa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let m0 = 0;
function Ba(e, t, n, s) {
  const o = e._endId = ++m0, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = Td(e, t);
  if (!i)
    return s();
  const u = i + "end";
  let d = 0;
  const c = () => {
    e.removeEventListener(u, p), r();
  }, p = (m) => {
    m.target === e && ++d >= a && c();
  };
  setTimeout(() => {
    d < a && c();
  }, l + 1), e.addEventListener(u, p);
}
function Td(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${wn}Delay`), r = s(`${wn}Duration`), i = ja(o, r), l = s(`${qs}Delay`), a = s(`${qs}Duration`), u = ja(l, a);
  let d = null, c = 0, p = 0;
  t === wn ? i > 0 && (d = wn, c = i, p = r.length) : t === qs ? u > 0 && (d = qs, c = u, p = a.length) : (c = Math.max(i, u), d = c > 0 ? i > u ? wn : qs : null, p = d ? d === wn ? r.length : a.length : 0);
  const m = d === wn && /\b(transform|all)(,|$)/.test(
    s(`${wn}Property`).toString()
  );
  return {
    type: d,
    timeout: c,
    propCount: p,
    hasTransform: m
  };
}
function ja(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Ha(n) + Ha(e[s])));
}
function Ha(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function qi() {
  return document.body.offsetHeight;
}
function g0(e, t, n) {
  const s = e[$s];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vr = Symbol("_vod"), $d = Symbol("_vsh"), Al = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[vr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zs(e, t);
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
Se.NODE_ENV !== "production" && (Al.name = "show");
function zs(e, t) {
  e.style.display = t ? e[vr] : "none", e[$d] = !t;
}
function v0() {
  Al.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Dd = Symbol(Se.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function y0(e) {
  const t = ct();
  if (!t) {
    Se.NODE_ENV !== "production" && Ie("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => yr(r, o));
  };
  Se.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const o = e(t.proxy);
    t.ce ? yr(t.ce, o) : zi(t.subTree, o), n(o);
  };
  wl(() => {
    ks(s);
  }), Be(() => {
    sn(s, $e, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), Ct(() => o.disconnect());
  });
}
function zi(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      zi(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    yr(e.el, t);
  else if (e.type === ie)
    e.children.forEach((n) => zi(n, t));
  else if (e.type === Mn) {
    let { el: n, anchor: s } = e;
    for (; n && (yr(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function yr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const o in t) {
      const r = Bc(t[o]);
      n.setProperty(`--${o}`, r), s += `--${o}: ${r};`;
    }
    n[Dd] = s;
  }
}
const b0 = /(^|;)\s*display\s*:/;
function _0(e, t, n) {
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
      const i = s[Dd];
      i && (n += ";" + i), s.cssText = n, r = b0.test(n);
    }
  } else t && e.removeAttribute("style");
  vr in e && (e[vr] = r ? s.display : "", e[$d] && (s.display = "none"));
}
const E0 = /[^\\];\s*$/, Ua = /\s*!important$/;
function Yo(e, t, n) {
  if (Y(n))
    n.forEach((s) => Yo(e, t, s));
  else if (n == null && (n = ""), Se.NODE_ENV !== "production" && E0.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = w0(e, t);
    Ua.test(n) ? e.setProperty(
      nt(s),
      n.replace(Ua, ""),
      "important"
    ) : e[s] = n;
  }
}
const qa = ["Webkit", "Moz", "ms"], gi = {};
function w0(e, t) {
  const n = gi[t];
  if (n)
    return n;
  let s = Ce(t);
  if (s !== "filter" && s in e)
    return gi[t] = s;
  s = rn(s);
  for (let o = 0; o < qa.length; o++) {
    const r = qa[o] + s;
    if (r in e)
      return gi[t] = r;
  }
  return t;
}
const za = "http://www.w3.org/1999/xlink";
function Ka(e, t, n, s, o, r = rp(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(za, t.slice(6, t.length)) : e.setAttributeNS(za, t, n) : n == null || r && !ll(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : xt(n) ? String(n) : n
  );
}
function Wa(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Sd(n) : n);
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
    l === "boolean" ? n = ll(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
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
function x0(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ga = Symbol("_vei");
function N0(e, t, n, s, o = null) {
  const r = e[Ga] || (e[Ga] = {}), i = r[t];
  if (s && i)
    i.value = Se.NODE_ENV !== "production" ? Ja(s, t) : s;
  else {
    const [l, a] = S0(t);
    if (s) {
      const u = r[t] = O0(
        Se.NODE_ENV !== "production" ? Ja(s, t) : s,
        o
      );
      hn(e, l, u, a);
    } else i && (x0(e, l, i, a), r[t] = void 0);
  }
}
const Ya = /(?:Once|Passive|Capture)$/;
function S0(e) {
  let t;
  if (Ya.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ya); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let vi = 0;
const k0 = /* @__PURE__ */ Promise.resolve(), C0 = () => vi || (k0.then(() => vi = 0), vi = Date.now());
function O0(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Mt(
      T0(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = C0(), n;
}
function Ja(e, t) {
  return oe(e) || Y(e) ? e : (Ie(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), $e);
}
function T0(e, t) {
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
const Xa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $0 = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? g0(e, s, i) : t === "style" ? _0(e, n, s) : vn(t) ? tr(t) || N0(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : D0(e, t, s, i)) ? (Wa(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ka(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Wa(e, Ce(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ka(e, t, s, i));
};
function D0(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xa(t) && oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Xa(t) && le(n) ? !1 : t in e;
}
const Qa = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function je(e, t, n) {
  const s = /* @__PURE__ */ _l(e, t);
  Dr(s) && fe(s, t);
  class o extends Jr {
    constructor(i) {
      super(s, i, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const V0 = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ je(e, t, jd), A0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Jr extends A0 {
  constructor(t, n = {}, s = en) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== en ? this._root = this.shadowRoot : (Se.NODE_ENV !== "production" && this.shadowRoot && Ie(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Jr) {
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
          const u = r[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = sr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ce(a)] = !0);
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
    let s = n ? this.getAttribute(t) : Qa;
    const o = Ce(t);
    n && this._numberProps && this._numberProps[o] && (s = sr(s)), this._setProp(o, s, !1, !0);
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
    if (n !== this._props[t] && (n === Qa ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const r = this._ob;
      r && r.disconnect(), n === !0 ? this.setAttribute(nt(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(nt(t), n + "") : n || this.removeAttribute(nt(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Bd(t, this._root);
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
            Dr(i[0]) ? fe({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (r, ...i) => {
        o(r, i), nt(r) !== r && o(nt(r), i);
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
    if (Se.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
function Ki(e) {
  const t = ct(), n = t && t.ce;
  return n || (Se.NODE_ENV !== "production" && Ie(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function I0() {
  const e = Se.NODE_ENV !== "production" ? Ki("useShadowRoot") : Ki();
  return e && e.shadowRoot;
}
function M0(e = "$style") {
  {
    const t = ct();
    if (!t)
      return Se.NODE_ENV !== "production" && Ie("useCssModule must be called inside setup()"), pe;
    const n = t.type.__cssModules;
    if (!n)
      return Se.NODE_ENV !== "production" && Ie("Current instance does not have CSS modules injected."), pe;
    const s = n[e];
    return s || (Se.NODE_ENV !== "production" && Ie(`Current instance does not have CSS module named "${e}".`), pe);
  }
}
const Vd = /* @__PURE__ */ new WeakMap(), Ad = /* @__PURE__ */ new WeakMap(), br = Symbol("_moveCb"), Za = Symbol("_enterCb"), P0 = (e) => (delete e.props.mode, e), R0 = /* @__PURE__ */ P0({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, Cd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = ct(), s = yl();
    let o, r;
    return qr(() => {
      if (!o.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!H0(
        o[0].el,
        n.vnode.el,
        i
      )) {
        o = [];
        return;
      }
      o.forEach(F0), o.forEach(B0);
      const l = o.filter(j0);
      qi(), l.forEach((a) => {
        const u = a.el, d = u.style;
        Jt(u, i), d.transform = d.webkitTransform = d.transitionDuration = "";
        const c = u[br] = (p) => {
          p && p.target !== u || (!p || /transform$/.test(p.propertyName)) && (u.removeEventListener("transitionend", c), u[br] = null, Nn(u, i));
        };
        u.addEventListener("transitionend", c);
      }), o = [];
    }), () => {
      const i = ce(e), l = Od(i);
      let a = i.tag || ie;
      if (o = [], r)
        for (let u = 0; u < r.length; u++) {
          const d = r[u];
          d.el && d.el instanceof Element && (o.push(d), yn(
            d,
            Cs(
              d,
              l,
              s,
              n
            )
          ), Vd.set(
            d,
            d.el.getBoundingClientRect()
          ));
        }
      r = t.default ? Hr(t.default()) : [];
      for (let u = 0; u < r.length; u++) {
        const d = r[u];
        d.key != null ? yn(
          d,
          Cs(d, l, s, n)
        ) : Se.NODE_ENV !== "production" && d.type !== on && Ie("<TransitionGroup> children must be keyed.");
      }
      return ue(a, null, r);
    };
  }
}), L0 = R0;
function F0(e) {
  const t = e.el;
  t[br] && t[br](), t[Za] && t[Za]();
}
function B0(e) {
  Ad.set(e, e.el.getBoundingClientRect());
}
function j0(e) {
  const t = Vd.get(e), n = Ad.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${o}px)`, r.transitionDuration = "0s", e;
  }
}
function H0(e, t, n) {
  const s = e.cloneNode(), o = e[$s];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: i } = Td(s);
  return r.removeChild(s), i;
}
const Ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => $n(t, n) : t;
};
function U0(e) {
  e.target.composing = !0;
}
function ec(e) {
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
      n && (l = l.trim()), r && (l = nr(l)), e[At](l);
    }), n && hn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (hn(e, "compositionstart", U0), hn(e, "compositionend", ec), hn(e, "change", ec));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[At] = Ln(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? nr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, _t = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[At] = Ln(n), hn(e, "change", () => {
      const s = e._modelValue, o = Ds(e), r = e.checked, i = e[At];
      if (Y(s)) {
        const l = Ar(s, o), a = l !== -1;
        if (r && !a)
          i(s.concat(o));
        else if (!r && a) {
          const u = [...s];
          u.splice(l, 1), i(u);
        }
      } else if (us(s)) {
        const l = new Set(s);
        r ? l.add(o) : l.delete(o), i(l);
      } else
        i(Id(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: tc,
  beforeUpdate(e, t, n) {
    e[At] = Ln(n), tc(e, t, n);
  }
};
function tc(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (Y(t))
    o = Ar(t, s.props.value) > -1;
  else if (us(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Rn(t, Id(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Il = {
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
    const o = us(t);
    hn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? nr(Ds(i)) : Ds(i)
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
    nc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[At] = Ln(n);
  },
  updated(e, { value: t }) {
    e._assigning || nc(e, t);
  }
};
function nc(e, t) {
  const n = e.multiple, s = Y(t);
  if (n && !s && !us(t)) {
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
        a === "string" || a === "number" ? i.selected = t.some((u) => String(u) === String(l)) : i.selected = Ar(t, l) > -1;
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
function Id(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Md = {
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
function Pd(e, t) {
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
          return Il;
        default:
          return Fn;
      }
  }
}
function Bo(e, t, n, s, o) {
  const i = Pd(
    e.tagName,
    n.props && n.props.type
  )[o];
  i && i(e, t, n, s);
}
function q0() {
  Fn.getSSRProps = ({ value: e }) => ({ value: e }), Il.getSSRProps = ({ value: e }, t) => {
    if (t.props && Rn(t.props.value, e))
      return { checked: !0 };
  }, _t.getSSRProps = ({ value: e }, t) => {
    if (Y(e)) {
      if (t.props && Ar(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (us(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Md.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Pd(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const z0 = ["ctrl", "shift", "alt", "meta"], K0 = {
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
  exact: (e, t) => z0.some((n) => e[`${n}Key`] && !t.includes(n))
}, qt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = K0[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  });
}, W0 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, _r = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = nt(o.key);
    if (t.some(
      (i) => i === r || W0[i] === r
    ))
      return e(o);
  });
}, Rd = /* @__PURE__ */ fe({ patchProp: $0 }, f0);
let io, sc = !1;
function Ld() {
  return io || (io = Yu(Rd));
}
function Fd() {
  return io = sc ? io : Ju(Rd), sc = !0, io;
}
const Bd = (...e) => {
  Ld().render(...e);
}, G0 = (...e) => {
  Fd().hydrate(...e);
}, en = (...e) => {
  const t = Ld().createApp(...e);
  Se.NODE_ENV !== "production" && (Ud(t), qd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = zd(s);
    if (!o) return;
    const r = t._component;
    !oe(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Hd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
}, jd = (...e) => {
  const t = Fd().createApp(...e);
  Se.NODE_ENV !== "production" && (Ud(t), qd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = zd(s);
    if (o)
      return n(o, !0, Hd(o));
  }, t;
};
function Hd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ud(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ic(t) || Mc(t) || Pc(t),
    writable: !1
  });
}
function qd(e) {
  if (Vl()) {
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
function zd(e) {
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
let oc = !1;
const Y0 = () => {
  oc || (oc = !0, q0(), v0());
}, J0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Nu,
  BaseTransitionPropsValidators: bl,
  Comment: De,
  DeprecationTypes: c0,
  EffectScope: al,
  ErrorCodes: Zp,
  ErrorTypeStrings: n0,
  Fragment: ie,
  KeepAlive: Rh,
  ReactiveEffect: ao,
  Static: Mn,
  Suspense: Bm,
  Teleport: bn,
  Text: on,
  TrackOpTypes: zp,
  Transition: st,
  TransitionGroup: L0,
  TriggerOpTypes: Kp,
  VueElement: Jr,
  assertNumber: hl,
  callWithAsyncErrorHandling: Mt,
  callWithErrorHandling: ds,
  camelize: Ce,
  capitalize: rn,
  cloneVNode: Pt,
  compatUtils: a0,
  computed: Z,
  createApp: en,
  createBlock: at,
  createCommentVNode: L,
  createElementBlock: S,
  createElementVNode: f,
  createHydrationRenderer: Ju,
  createPropsRestProxy: rm,
  createRenderer: Yu,
  createSSRApp: jd,
  createSlots: Hh,
  createStaticVNode: ls,
  createTextVNode: Fe,
  createVNode: ue,
  customRef: lu,
  defineAsyncComponent: Mh,
  defineComponent: _l,
  defineCustomElement: je,
  defineEmits: Yh,
  defineExpose: Jh,
  defineModel: Zh,
  defineOptions: Xh,
  defineProps: Gh,
  defineSSRCustomElement: V0,
  defineSlots: Qh,
  devtools: s0,
  effect: hp,
  effectScope: fp,
  getCurrentInstance: ct,
  getCurrentScope: cl,
  getCurrentWatcher: Wp,
  getTransitionRawChildren: Hr,
  guardReactiveProps: pd,
  h: Qt,
  handleError: Bn,
  hasInjectionContext: mm,
  hydrate: G0,
  hydrateOnIdle: Th,
  hydrateOnInteraction: Ah,
  hydrateOnMediaQuery: Vh,
  hydrateOnVisible: Dh,
  initCustomFormatter: xd,
  initDirectivesForSSR: Y0,
  inject: no,
  isMemoSame: Nd,
  isProxy: Ss,
  isReactive: mn,
  isReadonly: Gt,
  isRef: Ae,
  isRuntimeOnly: Vl,
  isShallow: rt,
  isVNode: ln,
  markRaw: ou,
  mergeDefaults: sm,
  mergeModels: om,
  mergeProps: md,
  nextTick: Ls,
  normalizeClass: ke,
  normalizeProps: Zf,
  normalizeStyle: Ge,
  onActivated: Tu,
  onBeforeMount: Vu,
  onBeforeUnmount: zr,
  onBeforeUpdate: wl,
  onDeactivated: $u,
  onErrorCaptured: Pu,
  onMounted: Be,
  onRenderTracked: Mu,
  onRenderTriggered: Iu,
  onScopeDispose: jc,
  onServerPrefetch: Au,
  onUnmounted: Ct,
  onUpdated: qr,
  onWatcherCleanup: cu,
  openBlock: x,
  popScopeId: mh,
  provide: Bu,
  proxyRefs: pl,
  pushScopeId: hh,
  queuePostFlushCb: ks,
  reactive: Ns,
  readonly: Rr,
  ref: q,
  registerRuntimeCompiler: bd,
  render: Bd,
  renderList: be,
  renderSlot: jn,
  resolveComponent: Bh,
  resolveDirective: jh,
  resolveDynamicComponent: Nl,
  resolveFilter: l0,
  resolveTransitionHooks: Cs,
  setBlockTracking: Mi,
  setDevtoolsHook: o0,
  setTransitionHooks: yn,
  shallowReactive: su,
  shallowReadonly: Bt,
  shallowRef: ru,
  ssrContextKey: ed,
  ssrUtils: i0,
  stop: mp,
  toDisplayString: U,
  toHandlerKey: tn,
  toHandlers: Uh,
  toRaw: ce,
  toRef: Hp,
  toRefs: Fp,
  toValue: Pp,
  transformVNodeArgs: Km,
  triggerRef: Mp,
  unref: No,
  useAttrs: nm,
  useCssModule: M0,
  useCssVars: y0,
  useHost: Ki,
  useId: bh,
  useModel: Im,
  useSSRContext: td,
  useShadowRoot: I0,
  useSlots: tm,
  useTemplateRef: _h,
  useTransitionState: yl,
  vModelCheckbox: _t,
  vModelDynamic: Md,
  vModelRadio: Il,
  vModelSelect: Oo,
  vModelText: Fn,
  vShow: Al,
  version: Hi,
  warn: Ie,
  watch: sn,
  watchEffect: Dm,
  watchPostEffect: Vm,
  watchSyncEffect: nd,
  withAsyncContext: im,
  withCtx: Me,
  withDefaults: em,
  withDirectives: Ue,
  withKeys: _r,
  withMemo: t0,
  withModifiers: qt,
  withScopeId: gh
}, Symbol.toStringTag, { value: "Module" }));
var J = {};
const go = Symbol(J.NODE_ENV !== "production" ? "Fragment" : ""), lo = Symbol(J.NODE_ENV !== "production" ? "Teleport" : ""), Ml = Symbol(J.NODE_ENV !== "production" ? "Suspense" : ""), Er = Symbol(J.NODE_ENV !== "production" ? "KeepAlive" : ""), Kd = Symbol(
  J.NODE_ENV !== "production" ? "BaseTransition" : ""
), cs = Symbol(J.NODE_ENV !== "production" ? "openBlock" : ""), Wd = Symbol(J.NODE_ENV !== "production" ? "createBlock" : ""), Gd = Symbol(
  J.NODE_ENV !== "production" ? "createElementBlock" : ""
), Pl = Symbol(J.NODE_ENV !== "production" ? "createVNode" : ""), Rl = Symbol(
  J.NODE_ENV !== "production" ? "createElementVNode" : ""
), To = Symbol(
  J.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Ll = Symbol(
  J.NODE_ENV !== "production" ? "createTextVNode" : ""
), Yd = Symbol(
  J.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Fl = Symbol(
  J.NODE_ENV !== "production" ? "resolveComponent" : ""
), Bl = Symbol(
  J.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), jl = Symbol(
  J.NODE_ENV !== "production" ? "resolveDirective" : ""
), Hl = Symbol(
  J.NODE_ENV !== "production" ? "resolveFilter" : ""
), Ul = Symbol(
  J.NODE_ENV !== "production" ? "withDirectives" : ""
), ql = Symbol(J.NODE_ENV !== "production" ? "renderList" : ""), Jd = Symbol(J.NODE_ENV !== "production" ? "renderSlot" : ""), Xd = Symbol(J.NODE_ENV !== "production" ? "createSlots" : ""), Xr = Symbol(
  J.NODE_ENV !== "production" ? "toDisplayString" : ""
), wr = Symbol(J.NODE_ENV !== "production" ? "mergeProps" : ""), zl = Symbol(
  J.NODE_ENV !== "production" ? "normalizeClass" : ""
), Kl = Symbol(
  J.NODE_ENV !== "production" ? "normalizeStyle" : ""
), vo = Symbol(
  J.NODE_ENV !== "production" ? "normalizeProps" : ""
), $o = Symbol(
  J.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Wl = Symbol(J.NODE_ENV !== "production" ? "toHandlers" : ""), Wi = Symbol(J.NODE_ENV !== "production" ? "camelize" : ""), X0 = Symbol(J.NODE_ENV !== "production" ? "capitalize" : ""), Gi = Symbol(
  J.NODE_ENV !== "production" ? "toHandlerKey" : ""
), xr = Symbol(
  J.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Q0 = Symbol(J.NODE_ENV !== "production" ? "pushScopeId" : ""), Z0 = Symbol(J.NODE_ENV !== "production" ? "popScopeId" : ""), Gl = Symbol(J.NODE_ENV !== "production" ? "withCtx" : ""), eg = Symbol(J.NODE_ENV !== "production" ? "unref" : ""), tg = Symbol(J.NODE_ENV !== "production" ? "isRef" : ""), Yl = Symbol(J.NODE_ENV !== "production" ? "withMemo" : ""), Qd = Symbol(J.NODE_ENV !== "production" ? "isMemoSame" : ""), Vs = {
  [go]: "Fragment",
  [lo]: "Teleport",
  [Ml]: "Suspense",
  [Er]: "KeepAlive",
  [Kd]: "BaseTransition",
  [cs]: "openBlock",
  [Wd]: "createBlock",
  [Gd]: "createElementBlock",
  [Pl]: "createVNode",
  [Rl]: "createElementVNode",
  [To]: "createCommentVNode",
  [Ll]: "createTextVNode",
  [Yd]: "createStaticVNode",
  [Fl]: "resolveComponent",
  [Bl]: "resolveDynamicComponent",
  [jl]: "resolveDirective",
  [Hl]: "resolveFilter",
  [Ul]: "withDirectives",
  [ql]: "renderList",
  [Jd]: "renderSlot",
  [Xd]: "createSlots",
  [Xr]: "toDisplayString",
  [wr]: "mergeProps",
  [zl]: "normalizeClass",
  [Kl]: "normalizeStyle",
  [vo]: "normalizeProps",
  [$o]: "guardReactiveProps",
  [Wl]: "toHandlers",
  [Wi]: "camelize",
  [X0]: "capitalize",
  [Gi]: "toHandlerKey",
  [xr]: "setBlockTracking",
  [Q0]: "pushScopeId",
  [Z0]: "popScopeId",
  [Gl]: "withCtx",
  [eg]: "unref",
  [tg]: "isRef",
  [Yl]: "withMemo",
  [Qd]: "isMemoSame"
};
function ng(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Vs[t] = e[t];
  });
}
const Ot = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function sg(e, t = "") {
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
function yo(e, t, n, s, o, r, i, l = !1, a = !1, u = !1, d = Ot) {
  return e && (l ? (e.helper(cs), e.helper(Ms(e.inSSR, u))) : e.helper(Is(e.inSSR, u)), i && e.helper(Ul)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: o,
    dynamicProps: r,
    directives: i,
    isBlock: l,
    disableTracking: a,
    isComponent: u,
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
function Yi(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: Ot
  };
}
function og(e, t, n = !1, s = !1) {
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
function rg(e) {
  return {
    type: 21,
    body: e,
    loc: Ot
  };
}
function Is(e, t) {
  return e || t ? Pl : Rl;
}
function Ms(e, t) {
  return e || t ? Wd : Gd;
}
function Jl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Is(s, e.isComponent)), t(cs), t(Ms(s, e.isComponent)));
}
const rc = new Uint8Array([123, 123]), ic = new Uint8Array([125, 125]);
function lc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function St(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function xn(e) {
  return e === 47 || e === 62 || St(e);
}
function Nr(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Je = {
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
class ig {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = rc, this.delimiterClose = ic, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = rc, this.delimiterClose = ic;
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
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Je.TitleEnd || this.currentSequence === Je.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Je.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Je.Cdata.length && (this.state = 28, this.currentSequence = Je.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
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
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Je.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : lc(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    xn(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (xn(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Nr("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    St(t) || (t === 62 ? (J.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = lc(t) ? 9 : 27, this.sectionStart = this.index));
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
    t === 45 ? (this.state = 28, this.currentSequence = Je.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Je.ScriptEnd[3] ? this.startSpecial(Je.ScriptEnd, 4) : t === Je.StyleEnd[3] ? this.startSpecial(Je.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Je.TitleEnd[3] ? this.startSpecial(Je.TitleEnd, 4) : t === Je.TextareaEnd[3] ? this.startSpecial(Je.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
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
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Je.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const lg = {
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
function Ji(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function Pn(e, t) {
  const n = Ji("MODE", t), s = Ji(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Ps(e, t, n, ...s) {
  const o = Pn(e, t);
  return J.NODE_ENV !== "production" && o && Sr(e, t, n, ...s), o;
}
function Sr(e, t, n, ...s) {
  if (Ji(e, t) === "suppress-warning")
    return;
  const { message: r, link: i } = lg[e], l = `(deprecation ${e}) ${typeof r == "function" ? r(...s) : r}${i ? `
  Details: ${i}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Xl(e) {
  throw e;
}
function Zd(e) {
  J.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Ne(e, t, n, s) {
  const o = J.NODE_ENV !== "production" ? (n || ag)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(o));
  return r.code = e, r.loc = t, r;
}
const ag = {
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
function ef(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return lo;
    case "Suspense":
    case "suspense":
      return Ml;
    case "KeepAlive":
    case "keep-alive":
      return Er;
    case "BaseTransition":
    case "base-transition":
      return Kd;
  }
}
const cg = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Ql = (e) => !cg.test(e), ug = /[A-Za-z_$\xA0-\uFFFF]/, dg = /[\.\?\w$\xA0-\uFFFF]/, fg = /\s+[.[]\s*|\s*[.[]\s+/g, tf = (e) => e.type === 4 ? e.content : e.loc.source, pg = (e) => {
  const t = tf(e).trim().replace(fg, (l) => l.trim());
  let n = 0, s = [], o = 0, r = 0, i = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, r++;
        else if (!(l === 0 ? ug : dg).test(a))
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
}, nf = pg, hg = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, mg = (e) => hg.test(tf(e)), gg = mg;
function ac(e, t) {
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
function vg(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function yi(e) {
  return e.type === 5 || e.type === 2;
}
function cc(e) {
  return e.type === 7 && e.name === "pre";
}
function yg(e) {
  return e.type === 7 && e.name === "slot";
}
function kr(e) {
  return e.type === 1 && e.tagType === 3;
}
function Cr(e) {
  return e.type === 1 && e.tagType === 2;
}
const bg = /* @__PURE__ */ new Set([vo, $o]);
function sf(e, t = []) {
  if (e && !le(e) && e.type === 14) {
    const n = e.callee;
    if (!le(n) && bg.has(n))
      return sf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Or(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], r = [], i;
  if (o && !le(o) && o.type === 14) {
    const l = sf(o);
    o = l[0], r = l[1], i = r[r.length - 1];
  }
  if (o == null || le(o))
    s = Vt([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !le(l) && l.type === 15 ? uc(t, l) || l.properties.unshift(t) : o.callee === Wl ? s = ze(n.helper(wr), [
      Vt([t]),
      o
    ]) : o.arguments.unshift(Vt([t])), !s && (s = o);
  } else o.type === 15 ? (uc(t, o) || o.properties.unshift(t), s = o) : (s = ze(n.helper(wr), [
    Vt([t]),
    o
  ]), i && i.callee === $o && (i = r[r.length - 2]));
  e.type === 13 ? i ? i.arguments[0] = s : e.props = s : i ? i.arguments[0] = s : e.arguments[2] = s;
}
function uc(e, t) {
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
function _g(e) {
  return e.type === 14 && e.callee === Yl ? e.arguments[1].returns : e;
}
const Eg = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, of = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Ks,
  isPreTag: Ks,
  isIgnoreNewlineTag: Ks,
  isCustomElement: Ks,
  onError: Xl,
  onWarn: Zd,
  comments: J.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ve = of, Eo = null, gn = "", tt = null, he = null, yt = "", dn = -1, zn = -1, Zl = 0, Tn = !1, Xi = null;
const Ve = [], Te = new ig(Ve, {
  onerr: vt,
  ontext(e, t) {
    jo(Xe(e, t), e, t);
  },
  ontextentity(e, t, n) {
    jo(e, t, n);
  },
  oninterpolation(e, t) {
    if (Tn)
      return jo(Xe(e, t), e, t);
    let n = e + Te.delimiterOpen.length, s = t - Te.delimiterClose.length;
    for (; St(gn.charCodeAt(n)); )
      n++;
    for (; St(gn.charCodeAt(s - 1)); )
      s--;
    let o = Xe(n, s);
    o.includes("&") && (o = ve.decodeEntities(o, !1)), Qi({
      type: 5,
      content: Xo(o, !1, Re(n, s)),
      loc: Re(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Xe(e, t);
    tt = {
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
    fc(e);
  },
  onclosetag(e, t) {
    const n = Xe(e, t);
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
      s || vt(23, rf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = tt.tag;
    tt.isSelfClosing = !0, fc(e), Ve[0] && Ve[0].tag === t && Jo(Ve.shift(), e);
  },
  onattribname(e, t) {
    he = {
      type: 6,
      name: Xe(e, t),
      nameLoc: Re(e, t),
      value: void 0,
      loc: Re(e)
    };
  },
  ondirname(e, t) {
    const n = Xe(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
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
      Tn = Te.inVPre = !0, Xi = tt;
      const o = tt.props;
      for (let r = 0; r < o.length; r++)
        o[r].type === 7 && (o[r] = Vg(o[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Xe(e, t);
    if (Tn && !cc(he))
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
    const n = Xe(e, t);
    if (Tn && !cc(he))
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
    yt += Xe(e, t), dn < 0 && (dn = e), zn = t;
  },
  onattribentity(e, t, n) {
    yt += e, dn < 0 && (dn = t), zn = n;
  },
  onattribnameend(e) {
    const t = he.loc.start.offset, n = Xe(t, e);
    he.type === 7 && (he.rawName = n), tt.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && vt(2, t);
  },
  onattribend(e, t) {
    if (tt && he) {
      if (Gn(he.loc, t), e !== 0)
        if (yt.includes("&") && (yt = ve.decodeEntities(
          yt,
          !0
        )), he.type === 6)
          he.name === "class" && (yt = af(yt).trim()), e === 1 && !yt && vt(13, t), he.value = {
            type: 2,
            content: yt,
            loc: e === 1 ? Re(dn, zn) : Re(dn - 1, zn + 1)
          }, Te.inSFCRoot && tt.tag === "template" && he.name === "lang" && yt && yt !== "html" && Te.enterRCDATA(Nr("</template"), 0);
        else {
          let n = 0;
          he.exp = Xo(
            yt,
            !1,
            Re(dn, zn),
            0,
            n
          ), he.name === "for" && (he.forParseResult = xg(he.exp));
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
      (he.type !== 7 || he.name !== "pre") && tt.props.push(he);
    }
    yt = "", dn = zn = -1;
  },
  oncomment(e, t) {
    ve.comments && Qi({
      type: 3,
      content: Xe(e, t),
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
          Te.currentSequence === Je.CdataEnd ? vt(6, e) : vt(7, e);
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
    Ve[0].ns !== 0 ? jo(Xe(e, t), e, t) : vt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ve[0] ? Ve[0].ns : ve.ns) === 0 && vt(
      21,
      e - 1
    );
  }
}), dc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, wg = /^\(|\)$/g;
function xg(e) {
  const t = e.loc, n = e.content, s = n.match(Eg);
  if (!s) return;
  const [, o, r] = s, i = (c, p, m = !1) => {
    const g = t.start.offset + p, v = g + c.length;
    return Xo(
      c,
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
  let a = o.trim().replace(wg, "").trim();
  const u = o.indexOf(a), d = a.match(dc);
  if (d) {
    a = a.replace(dc, "").trim();
    const c = d[1].trim();
    let p;
    if (c && (p = n.indexOf(c, u + a.length), l.key = i(c, p, !0)), d[2]) {
      const m = d[2].trim();
      m && (l.index = i(
        m,
        n.indexOf(
          m,
          l.key ? p + c.length : u + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = i(a, u, !0)), l;
}
function Xe(e, t) {
  return gn.slice(e, t);
}
function fc(e) {
  Te.inSFCRoot && (tt.innerLoc = Re(e + 1, e + 1)), Qi(tt);
  const { tag: t, ns: n } = tt;
  n === 0 && ve.isPreTag(t) && Zl++, ve.isVoidTag(t) ? Jo(tt, e) : (Ve.unshift(tt), (n === 1 || n === 2) && (Te.inXML = !0)), tt = null;
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
  n ? Gn(e.loc, rf(t, 60)) : Gn(e.loc, Ng(t, 62) + 1), Te.inSFCRoot && (e.children.length ? e.innerLoc.end = fe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = fe({}, e.innerLoc.start), e.innerLoc.source = Xe(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: r } = e;
  if (Tn || (s === "slot" ? e.tagType = 2 : pc(e) ? e.tagType = 3 : kg(e) && (e.tagType = 1)), Te.inRCDATA || (e.children = lf(r)), o === 0 && ve.isIgnoreNewlineTag(s)) {
    const i = r[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ve.isPreTag(s) && Zl--, Xi === e && (Tn = Te.inVPre = !1, Xi = null), Te.inXML && (Ve[0] ? Ve[0].ns : ve.ns) === 0 && (Te.inXML = !1);
  {
    const i = e.props;
    if (J.NODE_ENV !== "production" && Pn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ve
    )) {
      let a = !1, u = !1;
      for (let d = 0; d < i.length; d++) {
        const c = i[d];
        if (c.type === 7 && (c.name === "if" ? a = !0 : c.name === "for" && (u = !0)), a && u) {
          Sr(
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
    ) && e.tag === "template" && !pc(e)) {
      J.NODE_ENV !== "production" && Sr(
        "COMPILER_NATIVE_TEMPLATE",
        ve,
        e.loc
      );
      const a = Ve[0] || Eo, u = a.children.indexOf(e);
      a.children.splice(u, 1, ...e.children);
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
      content: Xe(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function Ng(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n < gn.length - 1; ) n++;
  return n;
}
function rf(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const Sg = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function pc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && Sg.has(t[n].name))
        return !0;
  }
  return !1;
}
function kg({ tag: e, props: t }) {
  if (ve.isCustomElement(e))
    return !1;
  if (e === "component" || Cg(e.charCodeAt(0)) || ef(e) || ve.isBuiltInComponent && ve.isBuiltInComponent(e) || ve.isNativeTag && !ve.isNativeTag(e))
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
function Cg(e) {
  return e > 64 && e < 91;
}
const Og = /\r\n/g;
function lf(e) {
  const t = ve.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (Zl)
        o.content = o.content.replace(Og, `
`);
      else if (Tg(o.content)) {
        const r = e[s - 1] && e[s - 1].type, i = e[s + 1] && e[s + 1].type;
        !r || !i || t && (r === 3 && (i === 3 || i === 1) || r === 1 && (i === 3 || i === 1 && $g(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = af(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function Tg(e) {
  for (let t = 0; t < e.length; t++)
    if (!St(e.charCodeAt(t)))
      return !1;
  return !0;
}
function $g(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function af(e) {
  let t = "", n = !1;
  for (let s = 0; s < e.length; s++)
    St(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Qi(e) {
  (Ve[0] || Eo).children.push(e);
}
function Re(e, t) {
  return {
    start: Te.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : Te.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Xe(e, t)
  };
}
function Dg(e) {
  return Re(e.start.offset, e.end.offset);
}
function Gn(e, t) {
  e.end = Te.getPos(t), e.source = Xe(e.start.offset, t);
}
function Vg(e) {
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
function Ag() {
  Te.reset(), tt = null, he = null, yt = "", dn = -1, zn = -1, Ve.length = 0;
}
function Ig(e, t) {
  if (Ag(), gn = e, ve = fe({}, of), t) {
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
  n && (Te.delimiterOpen = Nr(n[0]), Te.delimiterClose = Nr(n[1]));
  const s = Eo = sg([], e);
  return Te.parse(gn), s.loc = Re(0, e.length), s.children = lf(s.children), Eo = null, s;
}
function Mg(e, t) {
  Qo(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!cf(e)
  );
}
function cf(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !Cr(t[0]) ? t[0] : null;
}
function Qo(e, t, n, s = !1, o = !1) {
  const { children: r } = e, i = [];
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
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
          if ((v === void 0 || v === 512 || v === 1) && df(p, n) >= 2) {
            const $ = ff(p);
            $ && (g.props = n.hoist($));
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
      e.codegenNode.children = u(
        ns(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Y(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const c = d(e.codegenNode, "default");
      c && (a.push(n.cached.length), c.returns = u(
        ns(c.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Y(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const c = Et(e, "slot", !0), p = c && c.arg && d(t.codegenNode, c.arg);
      p && (a.push(n.cached.length), p.returns = u(
        ns(p.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const c of i)
      a.push(n.cached.length), c.codegenNode = n.cache(c.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Y(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Pe(
      "__",
      de(JSON.stringify(a), !1)
    )
  );
  function u(c) {
    const p = n.cache(c);
    return o && n.hmr && (p.needArraySpread = !0), p;
  }
  function d(c, p) {
    if (c.children && !Y(c.children) && c.children.type === 15) {
      const m = c.children.properties.find(
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
        const l = df(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < i && (i = l);
        for (let a = 0; a < e.children.length; a++) {
          const u = kt(e.children[a], t);
          if (u === 0)
            return n.set(e, 0), 0;
          u < i && (i = u);
        }
        if (i > 1)
          for (let a = 0; a < e.props.length; a++) {
            const u = e.props[a];
            if (u.type === 7 && u.name === "bind" && u.exp) {
              const d = kt(u.exp, t);
              if (d === 0)
                return n.set(e, 0), 0;
              d < i && (i = d);
            }
          }
        if (o.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(cs), t.removeHelper(
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
const Pg = /* @__PURE__ */ new Set([
  zl,
  Kl,
  vo,
  $o
]);
function uf(e, t) {
  if (e.type === 14 && !le(e.callee) && Pg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return kt(n, t);
    if (n.type === 14)
      return uf(n, t);
  }
  return 0;
}
function df(e, t) {
  let n = 3;
  const s = ff(e);
  if (s && s.type === 15) {
    const { properties: o } = s;
    for (let r = 0; r < o.length; r++) {
      const { key: i, value: l } = o[r], a = kt(i, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let u;
      if (l.type === 4 ? u = kt(l, t) : l.type === 14 ? u = uf(l, t) : u = 0, u === 0)
        return u;
      u < n && (n = u);
    }
  }
  return n;
}
function ff(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function Rg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: r = !1,
  nodeTransforms: i = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: u = $e,
  isCustomElement: d = $e,
  expressionPlugins: c = [],
  scopeId: p = null,
  slotted: m = !0,
  ssr: g = !1,
  inSSR: v = !1,
  ssrCssVars: $ = "",
  bindingMetadata: k = pe,
  inline: y = !1,
  isTS: h = !1,
  onError: E = Xl,
  onWarn: b = Zd,
  compatConfig: A
}) {
  const P = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), D = {
    // options
    filename: t,
    selfName: P && rn(Ce(P[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: o,
    cacheHandlers: r,
    nodeTransforms: i,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: u,
    isCustomElement: d,
    expressionPlugins: c,
    scopeId: p,
    slotted: m,
    ssr: g,
    inSSR: v,
    ssrCssVars: $,
    bindingMetadata: k,
    inline: y,
    isTS: h,
    onError: E,
    onWarn: b,
    compatConfig: A,
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
    helper(w) {
      const T = D.helpers.get(w) || 0;
      return D.helpers.set(w, T + 1), w;
    },
    removeHelper(w) {
      const T = D.helpers.get(w);
      if (T) {
        const V = T - 1;
        V ? D.helpers.set(w, V) : D.helpers.delete(w);
      }
    },
    helperString(w) {
      return `_${Vs[D.helper(w)]}`;
    },
    replaceNode(w) {
      if (J.NODE_ENV !== "production") {
        if (!D.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!D.parent)
          throw new Error("Cannot replace root node.");
      }
      D.parent.children[D.childIndex] = D.currentNode = w;
    },
    removeNode(w) {
      if (J.NODE_ENV !== "production" && !D.parent)
        throw new Error("Cannot remove root node.");
      const T = D.parent.children, V = w ? T.indexOf(w) : D.currentNode ? D.childIndex : -1;
      if (J.NODE_ENV !== "production" && V < 0)
        throw new Error("node being removed is not a child of current parent");
      !w || w === D.currentNode ? (D.currentNode = null, D.onNodeRemoved()) : D.childIndex > V && (D.childIndex--, D.onNodeRemoved()), D.parent.children.splice(V, 1);
    },
    onNodeRemoved: $e,
    addIdentifiers(w) {
    },
    removeIdentifiers(w) {
    },
    hoist(w) {
      le(w) && (w = de(w)), D.hoists.push(w);
      const T = de(
        `_hoisted_${D.hoists.length}`,
        !1,
        w.loc,
        2
      );
      return T.hoisted = w, T;
    },
    cache(w, T = !1, V = !1) {
      const C = og(
        D.cached.length,
        w,
        T,
        V
      );
      return D.cached.push(C), C;
    }
  };
  return D.filters = /* @__PURE__ */ new Set(), D;
}
function Lg(e, t) {
  const n = Rg(e, t);
  Qr(e, n), t.hoistStatic && Mg(e, n), t.ssr || Fg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Fg(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const o = cf(e);
    if (o && o.codegenNode) {
      const r = o.codegenNode;
      r.type === 13 && Jl(r, t), e.codegenNode = r;
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
function Bg(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const o = e.children[n];
    le(o) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Qr(o, t));
  }
}
function Qr(e, t) {
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
      t.ssr || t.helper(Xr);
      break;
    case 9:
      for (let r = 0; r < e.branches.length; r++)
        Qr(e.branches[r], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Bg(e, t);
      break;
  }
  t.currentNode = e;
  let o = s.length;
  for (; o--; )
    s[o]();
}
function pf(e, t) {
  const n = le(e) ? (s) => s === e : (s) => e.test(s);
  return (s, o) => {
    if (s.type === 1) {
      const { props: r } = s;
      if (s.tagType === 3 && r.some(yg))
        return;
      const i = [];
      for (let l = 0; l < r.length; l++) {
        const a = r[l];
        if (a.type === 7 && n(a.name)) {
          r.splice(l, 1), l--;
          const u = t(s, a, o);
          u && i.push(u);
        }
      }
      return i;
    }
  };
}
const Zr = "/*@__PURE__*/", hf = (e) => `${Vs[e]}: _${Vs[e]}`;
function jg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: o = "template.vue.html",
  scopeId: r = null,
  optimizeImports: i = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: u = "vue/server-renderer",
  ssr: d = !1,
  isTS: c = !1,
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
    ssrRuntimeModuleName: u,
    ssr: d,
    isTS: c,
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
    push(v, $ = -2, k) {
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
function Hg(e, t = {}) {
  const n = jg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: o,
    prefixIdentifiers: r,
    indent: i,
    deindent: l,
    newline: a,
    scopeId: u,
    ssr: d
  } = n, c = Array.from(e.helpers), p = c.length > 0, m = !r && s !== "module";
  Ug(e, n);
  const v = d ? "ssrRender" : "render", k = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${v}(${k}) {`), i(), m && (o("with (_ctx) {"), i(), p && (o(
    `const { ${c.map(hf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (bi(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (bi(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), bi(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let y = 0; y < e.temps; y++)
      o(`${y > 0 ? ", " : ""}_temp${y}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), d || o("return "), e.codegenNode ? it(e.codegenNode, n) : o("null"), m && (l(), o("}")), l(), o("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function Ug(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: o,
    newline: r,
    runtimeModuleName: i,
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
      Pl,
      Rl,
      To,
      Ll,
      Yd
    ].filter((p) => d.includes(p)).map(hf).join(", ");
    o(
      `const { ${c} } = _Vue
`,
      -1
      /* End */
    );
  }
  qg(e.hoists, t), r(), o("return ");
}
function bi(e, t, { helper: n, push: s, newline: o, isTS: r }) {
  const i = n(
    t === "filter" ? Hl : t === "component" ? Fl : jl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const u = a.endsWith("__self");
    u && (a = a.slice(0, -6)), s(
      `const ${_o(a, t)} = ${i}(${JSON.stringify(a)}${u ? ", true" : ""})${r ? "!" : ""}`
    ), l < e.length - 1 && o();
  }
}
function qg(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: s } = t;
  s();
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    r && (n(`const _hoisted_${o + 1} = `), it(r, t), s());
  }
  t.pure = !1;
}
function zg(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function ea(e, t) {
  const n = e.length > 3 || J.NODE_ENV !== "production" && e.some((s) => Y(s) || !zg(s));
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
    ) : Y(l) ? ea(l, t) : it(l, t), i < e.length - 1 && (n ? (s && o(","), r()) : s && o(", "));
  }
}
function it(e, t) {
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
      J.NODE_ENV !== "production" && ac(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), it(e.codegenNode, t);
      break;
    case 2:
      Kg(e, t);
      break;
    case 4:
      mf(e, t);
      break;
    case 5:
      Wg(e, t);
      break;
    case 12:
      it(e.codegenNode, t);
      break;
    case 8:
      gf(e, t);
      break;
    case 3:
      Yg(e, t);
      break;
    case 13:
      Jg(e, t);
      break;
    case 14:
      Qg(e, t);
      break;
    case 15:
      Zg(e, t);
      break;
    case 17:
      ev(e, t);
      break;
    case 18:
      tv(e, t);
      break;
    case 19:
      nv(e, t);
      break;
    case 20:
      sv(e, t);
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
        return ac(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function Kg(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function mf(e, t) {
  const { content: n, isStatic: s } = e;
  t.push(
    s ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Wg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Zr), n(`${s(Xr)}(`), it(e.content, t), n(")");
}
function gf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    le(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : it(s, t);
  }
}
function Gg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), gf(e, t), n("]");
  else if (e.isStatic) {
    const s = Ql(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Yg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Zr), n(
    `${s(To)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Jg(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: r,
    props: i,
    children: l,
    patchFlag: a,
    dynamicProps: u,
    directives: d,
    isBlock: c,
    disableTracking: p,
    isComponent: m
  } = e;
  let g;
  if (a)
    if (J.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${Qs[a]} */`;
      else {
        const $ = Object.keys(Qs).map(Number).filter((k) => k > 0 && a & k).map((k) => Qs[k]).join(", ");
        g = a + ` /* ${$} */`;
      }
    else
      g = String(a);
  d && n(s(Ul) + "("), c && n(`(${s(cs)}(${p ? "true" : ""}), `), o && n(Zr);
  const v = c ? Ms(t.inSSR, m) : Is(t.inSSR, m);
  n(s(v) + "(", -2, e), Do(
    Xg([r, i, l, g, u]),
    t
  ), n(")"), c && n(")"), d && (n(", "), it(d, t), n(")"));
}
function Xg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Qg(e, t) {
  const { push: n, helper: s, pure: o } = t, r = le(e.callee) ? e.callee : s(e.callee);
  o && n(Zr), n(r + "(", -2, e), Do(e.arguments, t), n(")");
}
function Zg(e, t) {
  const { push: n, indent: s, deindent: o, newline: r } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const l = i.length > 1 || J.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < i.length; a++) {
    const { key: u, value: d } = i[a];
    Gg(u, t), n(": "), it(d, t), a < i.length - 1 && (n(","), r());
  }
  l && o(), n(l ? "}" : " }");
}
function ev(e, t) {
  ea(e.elements, t);
}
function tv(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: r, returns: i, body: l, newline: a, isSlot: u } = e;
  u && n(`_${Vs[Gl]}(`), n("(", -2, e), Y(r) ? Do(r, t) : r && it(r, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), Y(i) ? ea(i, t) : it(i, t)) : l && it(l, t), (a || l) && (o(), n("}")), u && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function nv(e, t) {
  const { test: n, consequent: s, alternate: o, newline: r } = e, { push: i, indent: l, deindent: a, newline: u } = t;
  if (n.type === 4) {
    const c = !Ql(n.content);
    c && i("("), mf(n, t), c && i(")");
  } else
    i("("), it(n, t), i(")");
  r && l(), t.indentLevel++, r || i(" "), i("? "), it(s, t), t.indentLevel--, r && u(), r || i(" "), i(": ");
  const d = o.type === 19;
  d || t.indentLevel++, it(o, t), d || t.indentLevel--, r && a(
    !0
    /* without newline */
  );
}
function sv(e, t) {
  const { push: n, helper: s, indent: o, deindent: r, newline: i } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(xr)}(-1`), e.inVOnce && n(", true"), n("),"), i(), n("(")), n(`_cache[${e.index}] = `), it(e.value, t), l && (n(`).cacheIndex = ${e.index},`), i(), n(`${s(xr)}(1),`), i(), n(`_cache[${e.index}]`), r()), n(")"), a && n(")]");
}
const ov = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), rv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Yn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (r) {
      let i = r.message;
      const l = o.replace(rv, "").match(ov);
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
const iv = (e, t) => {
  if (e.type === 5)
    e.content = _i(
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
        !(n && i && i.type === 4 && i.content === "key") && (o.exp = _i(
          r,
          t,
          // slot args must be processed as function params
          o.name === "slot"
        )), i && i.type === 4 && !i.isStatic && (o.arg = _i(i, t));
      }
    }
  }
};
function _i(e, t, n = !1, s = !1, o = Object.create(t.identifiers)) {
  return J.NODE_ENV !== "production" && Yn(e, t, n, s), e;
}
const lv = pf(
  /^(if|else|else-if)$/,
  (e, t, n) => av(e, t, n, (s, o, r) => {
    const i = n.parent.children;
    let l = i.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const u = i[l];
      u && u.type === 9 && (a += u.branches.length);
    }
    return () => {
      if (r)
        s.codegenNode = mc(
          o,
          a,
          n
        );
      else {
        const u = uv(s.codegenNode);
        u.alternate = mc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function av(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      Ne(28, t.loc)
    ), t.exp = de("true", !1, o);
  }
  if (J.NODE_ENV !== "production" && t.exp && Yn(t.exp, n), t.name === "if") {
    const o = hc(e, t), r = {
      type: 9,
      loc: Dg(e.loc),
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
        const a = hc(e, t);
        if (J.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...r, ...a.children]), J.NODE_ENV !== "production") {
          const d = a.userKey;
          d && l.branches.forEach(({ userKey: c }) => {
            cv(c, d) && n.onError(
              Ne(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const u = s && s(l, a, !1);
        Qr(a, n), u && u(), n.currentNode = null;
      } else
        n.onError(
          Ne(30, e.loc)
        );
      break;
    }
  }
}
function hc(e, t) {
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
function mc(e, t, n) {
  return e.condition ? Yi(
    e.condition,
    gc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    ze(n.helper(To), [
      J.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : gc(e, t, n);
}
function gc(e, t, n) {
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
      return Or(a, o, n), a;
    } else {
      let a = 64;
      return J.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((u) => u.type !== 3).length === 1 && (a |= 2048), yo(
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
    const a = i.codegenNode, u = _g(a);
    return u.type === 13 && Jl(u, n), Or(u, o, n), a;
  }
}
function cv(e, t) {
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
function uv(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const dv = (e, t, n) => {
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
    vf(e), i = e.exp;
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), s.some((l) => l.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = Ce(r.content) : r.content = `${n.helperString(Wi)}(${r.content})` : (r.children.unshift(`${n.helperString(Wi)}(`), r.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && vc(r, "."), s.some((l) => l.content === "attr") && vc(r, "^")), {
    props: [Pe(r, i)]
  };
}, vf = (e, t) => {
  const n = e.arg, s = Ce(n.content);
  e.exp = de(s, !1, n.loc);
}, vc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, fv = pf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return pv(e, t, n, (r) => {
      const i = ze(s(ql), [
        r.source
      ]), l = kr(e), a = Et(e, "memo"), u = bo(e, "key", !1, !0);
      u && u.type === 7 && !u.exp && vf(u);
      let c = u && (u.type === 6 ? u.value ? de(u.value.content, !0) : void 0 : u.exp);
      const p = u && c ? Pe("key", c) : null, m = r.source.type === 4 && r.source.constType > 0, g = m ? 64 : u ? 128 : 256;
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
        const { children: $ } = r;
        J.NODE_ENV !== "production" && l && e.children.some((h) => {
          if (h.type === 1) {
            const E = bo(h, "key");
            if (E)
              return n.onError(
                Ne(
                  33,
                  E.loc
                )
              ), !0;
          }
        });
        const k = $.length !== 1 || $[0].type !== 1, y = Cr(e) ? e : l && e.children.length === 1 && Cr(e.children[0]) ? e.children[0] : null;
        if (y ? (v = y.codegenNode, l && p && Or(v, p, n)) : k ? v = yo(
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
        ) : (v = $[0].codegenNode, l && p && Or(v, p, n), v.isBlock !== !m && (v.isBlock ? (o(cs), o(
          Ms(n.inSSR, v.isComponent)
        )) : o(
          Is(n.inSSR, v.isComponent)
        )), v.isBlock = !m, v.isBlock ? (s(cs), s(Ms(n.inSSR, v.isComponent))) : s(Is(n.inSSR, v.isComponent))), a) {
          const h = As(
            Zi(r.parseResult, [
              de("_cached")
            ])
          );
          h.body = rg([
            zt(["const _memo = (", a.exp, ")"]),
            zt([
              "if (_cached",
              ...c ? [" && _cached.key === ", c] : [],
              ` && ${n.helperString(
                Qd
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
              Zi(r.parseResult),
              v,
              !0
            )
          );
      };
    });
  }
);
function pv(e, t, n, s) {
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
  yf(o, n);
  const { addIdentifiers: r, removeIdentifiers: i, scopes: l } = n, { source: a, value: u, key: d, index: c } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: u,
    keyAlias: d,
    objectIndexAlias: c,
    parseResult: o,
    children: kr(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const m = s && s(p);
  return () => {
    l.vFor--, m && m();
  };
}
function yf(e, t) {
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
function Zi({ value: e, key: t, index: n }, s = []) {
  return hv([e, t, n, ...s]);
}
function hv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || de("_".repeat(s + 1), !1));
}
const yc = de("undefined", !1), mv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = Et(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, gv = (e, t, n, s) => As(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function vv(e, t, n = gv) {
  t.helper(Gl);
  const { children: s, loc: o } = e, r = [], i = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = Et(e, "slot", !0);
  if (a) {
    const { arg: $, exp: k } = a;
    $ && !wt($) && (l = !0), r.push(
      Pe(
        $ || de("default", !0),
        n(k, void 0, s, o)
      )
    );
  }
  let u = !1, d = !1;
  const c = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let $ = 0; $ < s.length; $++) {
    const k = s[$];
    let y;
    if (!kr(k) || !(y = Et(k, "slot", !0))) {
      k.type !== 3 && c.push(k);
      continue;
    }
    if (a) {
      t.onError(
        Ne(37, y.loc)
      );
      break;
    }
    u = !0;
    const { children: h, loc: E } = k, {
      arg: b = de("default", !0),
      exp: A,
      loc: P
    } = y;
    let D;
    wt(b) ? D = b ? b.content : "default" : l = !0;
    const w = Et(k, "for"), T = n(A, w, h, E);
    let V, C;
    if (V = Et(k, "if"))
      l = !0, i.push(
        Yi(
          V.exp,
          Ho(b, T, m++),
          yc
        )
      );
    else if (C = Et(
      k,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let M = $, z;
      for (; M-- && (z = s[M], !(z.type !== 3 && el(z))); )
        ;
      if (z && kr(z) && Et(z, /^(else-)?if$/)) {
        let K = i[i.length - 1];
        for (; K.alternate.type === 19; )
          K = K.alternate;
        K.alternate = C.exp ? Yi(
          C.exp,
          Ho(
            b,
            T,
            m++
          ),
          yc
        ) : Ho(b, T, m++);
      } else
        t.onError(
          Ne(30, C.loc)
        );
    } else if (w) {
      l = !0;
      const M = w.forParseResult;
      M ? (yf(M, t), i.push(
        ze(t.helper(ql), [
          M.source,
          As(
            Zi(M),
            Ho(b, T),
            !0
          )
        ])
      )) : t.onError(
        Ne(
          32,
          w.loc
        )
      );
    } else {
      if (D) {
        if (p.has(D)) {
          t.onError(
            Ne(
              38,
              P
            )
          );
          continue;
        }
        p.add(D), D === "default" && (d = !0);
      }
      r.push(Pe(b, T));
    }
  }
  if (!a) {
    const $ = (k, y) => {
      const h = n(k, void 0, y, o);
      return t.compatConfig && (h.isNonScopedSlot = !0), Pe("default", h);
    };
    u ? c.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    c.some((k) => el(k)) && (d ? t.onError(
      Ne(
        39,
        c[0].loc
      )
    ) : r.push(
      $(void 0, c)
    )) : r.push($(void 0, s));
  }
  const g = l ? 2 : Zo(e.children) ? 3 : 1;
  let v = Vt(
    r.concat(
      Pe(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        de(
          g + (J.NODE_ENV !== "production" ? ` /* ${zf[g]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return i.length && (v = ze(t.helper(Xd), [
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
function el(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : el(e.content);
}
const bf = /* @__PURE__ */ new WeakMap(), yv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, r = e.tagType === 1;
  let i = r ? bv(e, t) : `"${s}"`;
  const l = me(i) && i.callee === Bl;
  let a, u, d = 0, c, p, m, g = (
    // dynamic component may resolve to plain elements
    l || i === lo || i === Ml || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const v = _f(
      e,
      t,
      void 0,
      r,
      l
    );
    a = v.props, d = v.patchFlag, p = v.dynamicPropNames;
    const $ = v.directives;
    m = $ && $.length ? ns(
      $.map((k) => Ev(k, t))
    ) : void 0, v.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (i === Er && (g = !0, d |= 1024, J.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Ne(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    i !== lo && // explained above.
    i !== Er) {
      const { slots: $, hasDynamicSlots: k } = vv(e, t);
      u = $, k && (d |= 1024);
    } else if (e.children.length === 1 && i !== lo) {
      const $ = e.children[0], k = $.type, y = k === 5 || k === 8;
      y && kt($, t) === 0 && (d |= 1), y || k === 2 ? u = $ : u = e.children;
    } else
      u = e.children;
  p && p.length && (c = wv(p)), e.codegenNode = yo(
    t,
    i,
    a,
    u,
    d === 0 ? void 0 : d,
    c,
    m,
    !!g,
    !1,
    r,
    e.loc
  );
};
function bv(e, t, n = !1) {
  let { tag: s } = e;
  const o = tl(s), r = bo(
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
        return ze(t.helper(Bl), [
          l
        ]);
    } else r.type === 6 && r.value.content.startsWith("vue:") && (s = r.value.content.slice(4));
  const i = ef(s) || t.isBuiltInComponent(s);
  return i ? (n || t.helper(i), i) : (t.helper(Fl), t.components.add(s), _o(s, "component"));
}
function _f(e, t, n = e.props, s, o, r = !1) {
  const { tag: i, loc: l, children: a } = e;
  let u = [];
  const d = [], c = [], p = a.length > 0;
  let m = !1, g = 0, v = !1, $ = !1, k = !1, y = !1, h = !1, E = !1;
  const b = [], A = (T) => {
    u.length && (d.push(
      Vt(bc(u), l)
    ), u = []), T && d.push(T);
  }, P = () => {
    t.scopes.vFor > 0 && u.push(
      Pe(
        de("ref_for", !0),
        de("true")
      )
    );
  }, D = ({ key: T, value: V }) => {
    if (wt(T)) {
      const C = T.content, M = vn(C);
      if (M && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      C.toLowerCase() !== "onclick" && // omit v-model handlers
      C !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !An(C) && (y = !0), M && An(C) && (E = !0), M && V.type === 14 && (V = V.arguments[0]), V.type === 20 || (V.type === 4 || V.type === 8) && kt(V, t) > 0)
        return;
      C === "ref" ? v = !0 : C === "class" ? $ = !0 : C === "style" ? k = !0 : C !== "key" && !b.includes(C) && b.push(C), s && (C === "class" || C === "style") && !b.includes(C) && b.push(C);
    } else
      h = !0;
  };
  for (let T = 0; T < n.length; T++) {
    const V = n[T];
    if (V.type === 6) {
      const { loc: C, name: M, nameLoc: z, value: K } = V;
      let ee = !0;
      if (M === "ref" && (v = !0, P()), M === "is" && (tl(i) || K && K.content.startsWith("vue:") || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      u.push(
        Pe(
          de(M, !0, z),
          de(
            K ? K.content : "",
            ee,
            K ? K.loc : C
          )
        )
      );
    } else {
      const { name: C, arg: M, exp: z, loc: K, modifiers: ee } = V, ne = C === "bind", te = C === "on";
      if (C === "slot") {
        s || t.onError(
          Ne(40, K)
        );
        continue;
      }
      if (C === "once" || C === "memo" || C === "is" || ne && Vn(M, "is") && (tl(i) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || te && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && Vn(M, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        te && p && Vn(M, "vue:before-update")) && (m = !0), ne && Vn(M, "ref") && P(), !M && (ne || te)
      ) {
        if (h = !0, z)
          if (ne) {
            if (A(), J.NODE_ENV !== "production" && d.some((Tt) => Tt.type === 15 ? Tt.properties.some(({ key: $t }) => $t.type !== 4 || !$t.isStatic ? !0 : $t.content !== "class" && $t.content !== "style" && !vn($t.content)) : !0) && Ps(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              K
            ), Pn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              d.unshift(z);
              continue;
            }
            P(), A(), d.push(z);
          } else
            A({
              type: 14,
              loc: K,
              callee: t.helper(Wl),
              arguments: s ? [z] : [z, "true"]
            });
        else
          t.onError(
            Ne(
              ne ? 34 : 35,
              K
            )
          );
        continue;
      }
      ne && ee.some((mt) => mt.content === "prop") && (g |= 32);
      const we = t.directiveTransforms[C];
      if (we) {
        const { props: mt, needRuntime: Tt } = we(V, e, t);
        !r && mt.forEach(D), te && M && !wt(M) ? A(Vt(mt, l)) : u.push(...mt), Tt && (c.push(V), xt(Tt) && bf.set(V, Tt));
      } else Vc(C) || (c.push(V), p && (m = !0));
    }
  }
  let w;
  if (d.length ? (A(), d.length > 1 ? w = ze(
    t.helper(wr),
    d,
    l
  ) : w = d[0]) : u.length && (w = Vt(
    bc(u),
    l
  )), h ? g |= 16 : ($ && !s && (g |= 2), k && !s && (g |= 4), b.length && (g |= 8), y && (g |= 32)), !m && (g === 0 || g === 32) && (v || E || c.length > 0) && (g |= 512), !t.inSSR && w)
    switch (w.type) {
      case 15:
        let T = -1, V = -1, C = !1;
        for (let K = 0; K < w.properties.length; K++) {
          const ee = w.properties[K].key;
          wt(ee) ? ee.content === "class" ? T = K : ee.content === "style" && (V = K) : ee.isHandlerKey || (C = !0);
        }
        const M = w.properties[T], z = w.properties[V];
        C ? w = ze(
          t.helper(vo),
          [w]
        ) : (M && !wt(M.value) && (M.value = ze(
          t.helper(zl),
          [M.value]
        )), z && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (k || z.value.type === 4 && z.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        z.value.type === 17) && (z.value = ze(
          t.helper(Kl),
          [z.value]
        )));
        break;
      case 14:
        break;
      default:
        w = ze(
          t.helper(vo),
          [
            ze(t.helper($o), [
              w
            ])
          ]
        );
        break;
    }
  return {
    props: w,
    directives: c,
    patchFlag: g,
    dynamicPropNames: b,
    shouldUseBlock: m
  };
}
function bc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.key.type === 8 || !o.key.isStatic) {
      n.push(o);
      continue;
    }
    const r = o.key.content, i = t.get(r);
    i ? (r === "style" || r === "class" || vn(r)) && _v(i, o) : (t.set(r, o), n.push(o));
  }
  return n;
}
function _v(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ns(
    [e.value, t.value],
    e.loc
  );
}
function Ev(e, t) {
  const n = [], s = bf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(jl), t.directives.add(e.name), n.push(_o(e.name, "directive")));
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
function wv(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function tl(e) {
  return e === "component" || e === "Component";
}
const xv = (e, t) => {
  if (Cr(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: r } = Nv(e, t), i = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (i[2] = r, l = 3), n.length && (i[3] = As([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), i.splice(l), e.codegenNode = ze(
      t.helper(Jd),
      i,
      s
    );
  }
};
function Nv(e, t) {
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
    const { props: r, directives: i } = _f(
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
const Ef = (e, t, n, s) => {
  const { loc: o, modifiers: r, arg: i } = e;
  !e.exp && !r.length && n.onError(Ne(35, o));
  let l;
  if (i.type === 4)
    if (i.isStatic) {
      let c = i.content;
      J.NODE_ENV !== "production" && c.startsWith("vnode") && n.onError(Ne(51, i.loc)), c.startsWith("vue:") && (c = `vnode-${c.slice(4)}`);
      const p = t.tagType !== 0 || c.startsWith("vnode") || !/[A-Z]/.test(c) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        tn(Ce(c))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${c}`
      );
      l = de(p, !0, i.loc);
    } else
      l = zt([
        `${n.helperString(Gi)}(`,
        i,
        ")"
      ]);
  else
    l = i, l.children.unshift(`${n.helperString(Gi)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let u = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const c = nf(a), p = !(c || gg(a)), m = a.content.includes(";");
    J.NODE_ENV !== "production" && Yn(
      a,
      n,
      !1,
      m
    ), (p || u && c) && (a = zt([
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
  return s && (d = s(d)), u && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((c) => c.key.isHandlerKey = !0), d;
}, Sv = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, o = !1;
      for (let r = 0; r < n.length; r++) {
        const i = n[r];
        if (yi(i)) {
          o = !0;
          for (let l = r + 1; l < n.length; l++) {
            const a = n[l];
            if (yi(a))
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
          if (yi(i) || i.type === 8) {
            const l = [];
            (i.type !== 2 || i.content !== " ") && l.push(i), !t.ssr && kt(i, t) === 0 && l.push(
              1 + (J.NODE_ENV !== "production" ? ` /* ${Qs[1]} */` : "")
            ), n[r] = {
              type: 12,
              content: i,
              loc: i.loc,
              codegenNode: ze(
                t.helper(Ll),
                l
              )
            };
          }
        }
    };
}, _c = /* @__PURE__ */ new WeakSet(), kv = (e, t) => {
  if (e.type === 1 && Et(e, "once", !0))
    return _c.has(e) || t.inVOnce || t.inSSR ? void 0 : (_c.add(e), t.inVOnce = !0, t.helper(xr), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, wf = (e, t, n) => {
  const { exp: s, arg: o } = e;
  if (!s)
    return n.onError(
      Ne(41, e.loc)
    ), Uo();
  const r = s.loc.source.trim(), i = s.type === 4 ? s.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(Ne(44, s.loc)), Uo();
  if (!i.trim() || !nf(s))
    return n.onError(
      Ne(42, s.loc)
    ), Uo();
  const a = o || de("modelValue", !0), u = o ? wt(o) ? `onUpdate:${Ce(o.content)}` : zt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let d;
  const c = n.isTS ? "($event: any)" : "$event";
  d = zt([
    `${c} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Pe(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Pe(u, d)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((v) => v.content).map((v) => (Ql(v) ? v : JSON.stringify(v)) + ": true").join(", "), g = o ? wt(o) ? `${o.content}Modifiers` : zt([o, ' + "Modifiers"']) : "modelModifiers";
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
const Cv = /[\w).+\-_$\]]/, Ov = (e, t) => {
  Pn("COMPILER_FILTERS", t) && (e.type === 5 ? Tr(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Tr(n.exp, t);
  }));
};
function Tr(e, t) {
  if (e.type === 4)
    Ec(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? Ec(s, t) : s.type === 8 ? Tr(e, t) : s.type === 5 && Tr(s.content, t));
    }
}
function Ec(e, t) {
  const n = e.content;
  let s = !1, o = !1, r = !1, i = !1, l = 0, a = 0, u = 0, d = 0, c, p, m, g, v = [];
  for (m = 0; m < n.length; m++)
    if (p = c, c = n.charCodeAt(m), s)
      c === 39 && p !== 92 && (s = !1);
    else if (o)
      c === 34 && p !== 92 && (o = !1);
    else if (r)
      c === 96 && p !== 92 && (r = !1);
    else if (i)
      c === 47 && p !== 92 && (i = !1);
    else if (c === 124 && // pipe
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !u)
      g === void 0 ? (d = m + 1, g = n.slice(0, m).trim()) : $();
    else {
      switch (c) {
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
        let k = m - 1, y;
        for (; k >= 0 && (y = n.charAt(k), y === " "); k--)
          ;
        (!y || !Cv.test(y)) && (i = !0);
      }
    }
  g === void 0 ? g = n.slice(0, m).trim() : d !== 0 && $();
  function $() {
    v.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (v.length) {
    for (J.NODE_ENV !== "production" && Sr(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < v.length; m++)
      g = Tv(g, v[m], t);
    e.content = g, e.ast = void 0;
  }
}
function Tv(e, t, n) {
  n.helper(Hl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${_o(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), r = t.slice(s + 1);
    return n.filters.add(o), `${_o(o, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const wc = /* @__PURE__ */ new WeakSet(), $v = (e, t) => {
  if (e.type === 1) {
    const n = Et(e, "memo");
    return !n || wc.has(e) ? void 0 : (wc.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Jl(s, t), e.codegenNode = ze(t.helper(Yl), [
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
      kv,
      lv,
      $v,
      fv,
      Ov,
      ...J.NODE_ENV !== "production" ? [iv] : [],
      xv,
      yv,
      mv,
      Sv
    ],
    {
      on: Ef,
      bind: dv,
      model: wf
    }
  ];
}
function Vv(e, t = {}) {
  const n = t.onError || Xl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(Ne(47)) : s && n(Ne(48));
  const o = !1;
  t.cacheHandlers && n(Ne(49)), t.scopeId && !s && n(Ne(50));
  const r = fe({}, t, {
    prefixIdentifiers: o
  }), i = le(e) ? Ig(e, r) : e, [l, a] = Dv();
  return Lg(
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
  ), Hg(i, r);
}
const Av = () => ({ props: [] });
var lt = {};
const xf = Symbol(lt.NODE_ENV !== "production" ? "vModelRadio" : ""), Nf = Symbol(
  lt.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Sf = Symbol(lt.NODE_ENV !== "production" ? "vModelText" : ""), kf = Symbol(
  lt.NODE_ENV !== "production" ? "vModelSelect" : ""
), nl = Symbol(
  lt.NODE_ENV !== "production" ? "vModelDynamic" : ""
), Cf = Symbol(
  lt.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Of = Symbol(
  lt.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), Tf = Symbol(lt.NODE_ENV !== "production" ? "vShow" : ""), ta = Symbol(lt.NODE_ENV !== "production" ? "Transition" : ""), $f = Symbol(
  lt.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
ng({
  [xf]: "vModelRadio",
  [Nf]: "vModelCheckbox",
  [Sf]: "vModelText",
  [kf]: "vModelSelect",
  [nl]: "vModelDynamic",
  [Cf]: "withModifiers",
  [Of]: "withKeys",
  [Tf]: "vShow",
  [ta]: "Transition",
  [$f]: "TransitionGroup"
});
let ms;
function Iv(e, t = !1) {
  return ms || (ms = document.createElement("div")), t ? (ms.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, ms.children[0].getAttribute("foo")) : (ms.innerHTML = e, ms.textContent);
}
const Mv = {
  parseMode: "html",
  isVoidTag: op,
  isNativeTag: (e) => Ic(e) || Mc(e) || Pc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Iv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return ta;
    if (e === "TransitionGroup" || e === "transition-group")
      return $f;
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
}, Pv = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: de("style", !0, t.loc),
      exp: Rv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Rv = (e, t) => {
  const n = Ac(e);
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
    lt.NODE_ENV !== "production" ? Lv : void 0
  );
}
const Lv = {
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
}, Fv = (e, t, n) => {
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
}, Bv = (e, t, n) => {
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
          n.helperString(Xr),
          [s],
          o
        ) : de("", !0)
      )
    ]
  };
}, jv = (e, t, n) => {
  const s = wf(e, t, n);
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
    let l = Sf, a = !1;
    if (r === "input" || i) {
      const u = bo(t, "type");
      if (u) {
        if (u.type === 7)
          l = nl;
        else if (u.value)
          switch (u.value.content) {
            case "radio":
              l = xf;
              break;
            case "checkbox":
              l = Nf;
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
              lt.NODE_ENV !== "production" && o();
              break;
          }
      } else vg(t) ? l = nl : lt.NODE_ENV !== "production" && o();
    } else r === "select" ? l = kf : lt.NODE_ENV !== "production" && o();
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
}, Hv = /* @__PURE__ */ Ye("passive,once,capture"), Uv = /* @__PURE__ */ Ye(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), qv = /* @__PURE__ */ Ye("left,right"), Df = /* @__PURE__ */ Ye("onkeyup,onkeydown,onkeypress"), zv = (e, t, n, s) => {
  const o = [], r = [], i = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ps(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Hv(a) ? i.push(a) : qv(a) ? wt(e) ? Df(e.content.toLowerCase()) ? o.push(a) : r.push(a) : (o.push(a), r.push(a)) : Uv(a) ? r.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: r,
    eventOptionModifiers: i
  };
}, xc = (e, t) => wt(e) && e.content.toLowerCase() === "onclick" ? de(t, !0) : e.type !== 4 ? zt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Kv = (e, t, n) => Ef(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: r, value: i } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: u } = zv(r, o, n, e.loc);
  if (a.includes("right") && (r = xc(r, "onContextmenu")), a.includes("middle") && (r = xc(r, "onMouseup")), a.length && (i = ze(n.helper(Cf), [
    i,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!wt(r) || Df(r.content.toLowerCase())) && (i = ze(n.helper(Of), [
    i,
    JSON.stringify(l)
  ])), u.length) {
    const d = u.map(rn).join("");
    r = wt(r) ? de(`${r.content}${d}`, !0) : zt(["(", r, `) + "${d}"`]);
  }
  return {
    props: [Pe(r, i)]
  };
}), Wv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Ht(61, o)
  ), {
    props: [],
    needRuntime: n.helper(Tf)
  };
}, Gv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === ta)
    return () => {
      if (!e.children.length)
        return;
      Vf(e) && t.onError(
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
function Vf(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Vf);
}
const Yv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (lt.NODE_ENV !== "production" && t.onError(
    Ht(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Jv(e, t) {
  return e === "template" ? !0 : e in Nc ? Nc[e].has(t) : t in Sc ? Sc[t].has(e) : !(e in kc && kc[e].has(t) || t in Cc && Cc[t].has(e));
}
const gs = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Kn = /* @__PURE__ */ new Set([]), Nc = {
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
}, Sc = {
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
}, kc = {
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
}, Cc = {
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
}, Xv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Jv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Qv = [
  Pv,
  ...lt.NODE_ENV !== "production" ? [Gv, Xv] : []
], Zv = {
  cloak: Av,
  html: Fv,
  text: Bv,
  model: jv,
  // override compiler-core
  on: Kv,
  // override compiler-core
  show: Wv
};
function ey(e, t = {}) {
  return Vv(
    e,
    fe({}, Mv, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Yv,
        ...Qv,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: fe(
        {},
        Zv,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Xs = {};
function ty() {
  xd();
}
Xs.NODE_ENV !== "production" && ty();
const Oc = /* @__PURE__ */ Object.create(null);
function ny(e, t) {
  if (!le(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Xs.NODE_ENV !== "production" && Ie("invalid template option: ", e), $e;
  const n = qf(e, t), s = Oc[n];
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
  const { code: r } = ey(e, o);
  function i(a, u = !1) {
    const d = u ? a.message : `Template compilation error: ${a.message}`, c = a.loc && Gf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Ie(c ? `${d}
${c}` : d);
  }
  const l = new Function("Vue", r)(J0);
  return l._rc = !0, Oc[n] = l;
}
bd(ny);
const We = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, sy = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, oy = {
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
    const n = e, s = t, o = q(!1), r = Z(() => n.href ? "a" : "button"), i = (d, c = "") => {
      var g, v, $;
      const p = {
        button_border_radius: n.buttonRadius,
        button_primary_bg: n.primaryBg,
        button_primary_bg_hover: n.primaryBgHover,
        button_primary_text: n.primaryText,
        button_secondary_bg: n.secondaryBg,
        button_secondary_bg_hover: n.secondaryBgHover,
        button_secondary_text: n.secondaryText,
        button_secondary_border: n.secondaryBorder
      };
      if (p[d])
        return p[d];
      const m = ($ = (v = (g = window.Shopline) == null ? void 0 : g.theme) == null ? void 0 : v.settings) == null ? void 0 : $[d];
      if (m != null && m !== "")
        return m;
      try {
        const k = "--" + d.replace(/_/g, "-"), y = getComputedStyle(document.documentElement).getPropertyValue(k).trim();
        if (y) return y;
      } catch {
      }
      return c;
    }, l = Z(() => {
      const d = {};
      if (n.rounded === "full")
        d.borderRadius = "9999px";
      else if (n.rounded === "none")
        d.borderRadius = "0";
      else if (n.buttonRadius !== null)
        d.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius;
      else {
        const c = i("button_border_radius", "6");
        d.borderRadius = typeof c == "number" || !isNaN(c) ? `${c}px` : c;
      }
      return n.variant === "primary" ? (o.value ? d.backgroundColor = i("button_primary_bg_hover", "#b91c1c") : d.backgroundColor = i("button_primary_bg", "#dc2626"), d.color = i("button_primary_text", "white")) : n.variant === "secondary" ? (o.value ? d.backgroundColor = i("button_secondary_bg_hover", "#f9fafb") : d.backgroundColor = i("button_secondary_bg", "white"), d.color = i("button_secondary_text", "#374151"), d.borderColor = i("button_secondary_border", "#d1d5db")) : n.variant === "link" && (o.value ? d.color = i("button_primary_bg_hover", "#b91c1c") : d.color = i("button_primary_bg", "#dc2626")), d;
    }), a = Z(() => {
      const d = [
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      ];
      n.fullWidth && d.push("w-full");
      const c = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
      };
      return d.push(c[n.size]), n.variant === "primary" ? d.push(
        "border border-transparent",
        "shadow-sm"
      ) : n.variant === "secondary" ? d.push(
        "border",
        "shadow-sm"
      ) : n.variant === "outline" ? d.push(
        "bg-transparent",
        "hover:bg-gray-50",
        "text-gray-700",
        "border-2 border-gray-300",
        "hover:border-gray-400",
        "focus:ring-gray-500"
      ) : n.variant === "ghost" ? d.push(
        "bg-transparent",
        "hover:bg-gray-100",
        "text-gray-700",
        "hover:text-gray-900",
        "focus:ring-gray-500"
      ) : n.variant === "link" && d.push(
        "bg-transparent",
        "underline",
        "hover:no-underline",
        "p-0",
        "focus:ring-0"
      ), d.join(" ");
    }), u = (d) => {
      !n.disabled && !n.loading && s("click", d);
    };
    return (d, c) => (x(), at(Nl(r.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: ke(a.value),
      style: Ge(l.value),
      onClick: u,
      onMouseenter: c[0] || (c[0] = (p) => o.value = !0),
      onMouseleave: c[1] || (c[1] = (p) => o.value = !1)
    }, {
      default: Me(() => [
        e.loading ? (x(), S("svg", sy, c[2] || (c[2] = [
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
        ]))) : L("", !0),
        jn(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, ss = /* @__PURE__ */ We(oy, [["__scopeId", "data-v-ee93db6c"]]), ry = ["disabled"], iy = ["value", "min", "max"], ly = ["disabled"], ay = {
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
    const n = e, s = t, o = ct(), r = Z({
      get: () => n.modelValue,
      set: (d) => {
        var p, m, g;
        const c = Math.max(n.min, Math.min(n.max, d));
        if (s("update:modelValue", c), s("update", c), ((g = (m = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : m.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const v = o.vnode.el.parentElement, $ = v.getAttribute("data-line-key");
          if ($) {
            const k = new CustomEvent("quantity-update", {
              detail: { key: $, value: c },
              bubbles: !0
            });
            v.dispatchEvent(k);
          }
        }
      }
    }), i = () => {
      r.value > n.min && (r.value = r.value - n.step);
    }, l = () => {
      r.value < n.max && (r.value = r.value + n.step);
    }, a = (d) => {
      const c = parseInt(d.target.value) || n.min;
      r.value = c;
    }, u = (d) => {
      const c = parseInt(d.target.value) || n.min;
      r.value = c, d.target.value = r.value;
    };
    return (d, c) => (x(), S("div", {
      class: ke(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      f("button", {
        type: "button",
        class: ke(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue <= e.min,
        onClick: i,
        "aria-label": "Decrease quantity"
      }, c[0] || (c[0] = [
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
      ]), 10, ry),
      f("input", {
        type: "number",
        class: ke(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: u,
        "aria-label": "Quantity"
      }, null, 42, iy),
      f("button", {
        type: "button",
        class: ke(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, c[1] || (c[1] = [
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
      ]), 10, ly)
    ], 2));
  }
}, Af = /* @__PURE__ */ We(ay, [["__scopeId", "data-v-402d2d49"]]), cy = ["data-updating"], uy = { class: "cart-item__content" }, dy = { class: "cart-item__image" }, fy = ["href"], py = ["src", "alt"], hy = { class: "cart-item__details" }, my = { class: "cart-item__header" }, gy = { class: "cart-item__info" }, vy = { class: "cart-item__title" }, yy = ["href"], by = {
  key: 0,
  class: "cart-item__variant"
}, _y = {
  key: 1,
  class: "cart-item__properties"
}, Ey = { class: "cart-item__property-key" }, wy = { class: "cart-item__price cart-item__price--mobile" }, xy = { class: "cart-item__price-current" }, Ny = {
  key: 0,
  class: "cart-item__price-original"
}, Sy = {
  key: 0,
  class: "cart-item__discounts"
}, ky = { class: "cart-item__actions" }, Cy = { class: "cart-item__actions-left" }, Oy = ["disabled"], Ty = {
  key: 0,
  class: "cart-item__remove-icon",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, $y = {
  key: 1,
  class: "cart-item__remove-icon cart-item__remove-icon--loading",
  fill: "none",
  viewBox: "0 0 24 24"
}, Dy = { class: "cart-item__price cart-item__price--desktop" }, Vy = { class: "cart-item__price-current" }, Ay = {
  key: 0,
  class: "cart-item__price-original"
}, Iy = {
  key: 1,
  class: "cart-item__price-savings"
}, My = {
  key: 1,
  class: "cart-item__warning"
}, Py = {
  key: 2,
  class: "cart-item__error"
}, Ry = {
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
    }), u = (p) => {
      var k, y, h;
      if (!p && p !== 0) return "$0.00";
      const m = ((k = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : k.money_format) || "${{amount}}";
      (y = Shopline == null ? void 0 : Shopline.shop) != null && y.currency;
      const g = ((h = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : h.current) || "en", $ = new Intl.NumberFormat(g, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(p));
      return m.replace("{{amount}}", $);
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
    }, c = async () => {
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
    return sn(() => n.item.quantity, (p) => {
      o.value = p;
    }), (p, m) => (x(), S("div", {
      class: "cart-item",
      "data-updating": r.value
    }, [
      f("div", uy, [
        f("div", dy, [
          f("a", {
            href: e.item.url,
            class: "cart-item__image-link"
          }, [
            f("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "cart-item__image-img",
              loading: "lazy"
            }, null, 8, py)
          ], 8, fy)
        ]),
        f("div", hy, [
          f("div", my, [
            f("div", gy, [
              f("h3", vy, [
                f("a", {
                  href: e.item.url,
                  class: "cart-item__title-link"
                }, U(e.item.product_title), 9, yy)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (x(), S("p", by, U(e.item.variant_title), 1)) : L("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (x(), S("div", _y, [
                (x(!0), S(ie, null, be(e.item.properties, (g, v) => (x(), S("p", {
                  key: v,
                  class: "cart-item__property"
                }, [
                  f("span", Ey, U(v) + ":", 1),
                  Fe(" " + U(g), 1)
                ]))), 128))
              ])) : L("", !0)
            ]),
            f("div", wy, [
              f("p", xy, U(u(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), S("p", Ny, U(u(e.item.original_price * e.item.quantity)), 1)) : L("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (x(), S("div", Sy, [
            (x(!0), S(ie, null, be(e.item.discounts, (g) => (x(), S("div", {
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
              Fe(" " + U(g.title) + " (-" + U(u(g.amount || g.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : L("", !0),
          f("div", ky, [
            f("div", Cy, [
              ue(Af, {
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
                onClick: c,
                class: "cart-item__remove",
                disabled: r.value,
                "aria-label": "Remove item from cart"
              }, [
                r.value ? (x(), S("svg", $y, m[3] || (m[3] = [
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
                ]))) : (x(), S("svg", Ty, m[2] || (m[2] = [
                  f("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, Oy)
            ]),
            f("div", Dy, [
              f("p", Vy, U(u(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), S("p", Ay, U(u(e.item.original_price * e.item.quantity)), 1)) : L("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), S("p", Iy, " Save " + U(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : L("", !0)
            ])
          ]),
          a.value ? (x(), S("p", My, " Only " + U(e.item.variant.inventory_quantity) + " left in stock ", 1)) : L("", !0),
          i.value ? (x(), S("p", Py, U(i.value), 1)) : L("", !0)
        ])
      ])
    ], 8, cy));
  }
}, If = /* @__PURE__ */ We(Ry, [["__scopeId", "data-v-44c314e9"]]), Ly = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Fy = { class: "absolute inset-0 overflow-hidden" }, By = { class: "fixed inset-y-0 right-0 max-w-full flex pointer-events-none" }, jy = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, Hy = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, Uy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, qy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, zy = { class: "flex-1 overflow-y-auto" }, Ky = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, Wy = {
  key: 1,
  class: "px-4 sm:px-6 pb-6"
}, Gy = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, Yy = {
  key: 0,
  class: "flex items-center gap-2"
}, Jy = {
  key: 1,
  class: "flex items-center gap-2"
}, Xy = { class: "text-sm text-blue-800" }, Qy = {
  key: 2,
  class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden"
}, Zy = { class: "flex justify-between text-base font-medium text-gray-900" }, e1 = { class: "space-y-3" }, t1 = {
  __name: "CartDrawer",
  setup(e) {
    const t = q(!1), n = q([]), s = q(0), o = Z(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/cart";
    }), r = Z(() => {
      var v, $;
      return (($ = (v = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : v.settings) == null ? void 0 : $.free_shipping_threshold) || 50;
    }), i = Z(() => {
      var g, v;
      return ((v = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : v.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var h, E, b, A;
      if (!g && g !== 0) return "$0.00";
      const v = ((h = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : h.money_format) || "${{amount}}";
      (E = Shopline == null ? void 0 : Shopline.shop) != null && E.money_with_currency_format, (b = Shopline == null ? void 0 : Shopline.shop) != null && b.currency;
      const $ = ((A = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : A.current) || "en", y = new Intl.NumberFormat($, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(g));
      return v.replace("{{amount}}", y);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", d();
    }, u = () => {
      t.value = !1, document.body.style.overflow = "";
    }, d = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, c = async ({ key: g, quantity: v }) => {
      await window.OrionCart.updateItem(g, v), d();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), d();
    }, m = (g) => {
      g.key === "Escape" && t.value && u();
    };
    return Be(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", u), document.addEventListener("keydown", m);
    }), Ct(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", u), document.removeEventListener("keydown", m);
    }), (g, v) => (x(), at(bn, { to: "body" }, [
      ue(st, { name: "drawer" }, {
        default: Me(() => [
          t.value ? (x(), S("div", Ly, [
            f("div", Fy, [
              ue(st, { name: "fade" }, {
                default: Me(() => [
                  t.value ? (x(), S("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: u
                  })) : L("", !0)
                ]),
                _: 1
              }),
              f("div", By, [
                ue(st, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Me(() => [
                    t.value ? (x(), S("div", jy, [
                      f("div", Hy, [
                        f("div", Uy, [
                          f("div", null, [
                            v[0] || (v[0] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (x(), S("p", qy, U(n.value.length) + " " + U(n.value.length === 1 ? "item" : "items"), 1)) : L("", !0)
                          ]),
                          f("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: u
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
                        f("div", zy, [
                          n.value.length === 0 ? (x(), S("div", Ky, [
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
                            ue(ss, {
                              onClick: u,
                              variant: "primary",
                              size: "large"
                            }, {
                              default: Me(() => v[2] || (v[2] = [
                                Fe(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (x(), S("div", Wy, [
                            (x(!0), S(ie, null, be(n.value, ($) => (x(), at(If, {
                              key: $.key,
                              item: $,
                              onUpdate: c,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (x(), S("div", Gy, [
                          i.value ? (x(), S("div", {
                            key: 0,
                            class: ke([s.value >= r.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "p-3"]),
                            style: { borderRadius: "var(--button-radius)" }
                          }, [
                            s.value >= r.value ? (x(), S("div", Yy, v[6] || (v[6] = [
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
                            ]))) : (x(), S("div", Jy, [
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
                              f("p", Xy, " Add " + U(l(
                                r.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < r.value ? (x(), S("div", Qy, [
                              f("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: Ge(`width: ${Math.min(
                                  s.value / r.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])) : L("", !0)
                          ], 2)) : L("", !0),
                          f("div", null, [
                            f("div", Zy, [
                              v[8] || (v[8] = f("p", null, "Subtotal", -1)),
                              f("p", null, U(l(s.value)), 1)
                            ]),
                            v[9] || (v[9] = f("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          f("div", e1, [
                            ue(ss, {
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
                            ue(ss, {
                              onClick: u,
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
                        ])) : L("", !0)
                      ])
                    ])) : L("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : L("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Mf = /* @__PURE__ */ We(t1, [["__scopeId", "data-v-8da1cccd"]]), n1 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, s1 = { class: "absolute inset-0 overflow-hidden" }, o1 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, r1 = {
  key: 0,
  class: "w-screen max-w-sm pointer-events-auto"
}, i1 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, l1 = { class: "flex-1 overflow-y-auto" }, a1 = { class: "px-4 py-4" }, c1 = { class: "space-y-1" }, u1 = { key: 0 }, d1 = { key: 0 }, f1 = ["onClick"], p1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, h1 = { key: 0 }, m1 = ["onClick"], g1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, v1 = ["href"], y1 = ["href"], b1 = ["href"], _1 = { class: "px-4 py-4 border-t" }, E1 = { class: "space-y-1" }, w1 = ["href"], x1 = {
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
    const n = e, s = Z(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = Z(() => n.customerUrl || window.mobileMenuCustomerUrl || "/account"), r = Z(() => n.showLocalization || window.mobileMenuShowLocalization || !1), i = q(!1), l = q([]), a = () => {
      console.log("openMenu called"), i.value = !0, document.body.style.overflow = "hidden";
    }, u = () => {
      i.value = !1, document.body.style.overflow = "";
    }, d = (c) => {
      const p = l.value.indexOf(c);
      p > -1 ? l.value.splice(p, 1) : l.value.push(c);
    };
    return t({
      openMenu: a,
      closeMenu: u
    }), Be(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", u);
      const c = (p) => {
        p.key === "Escape" && i.value && u();
      };
      document.addEventListener("keydown", c), Ct(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", u), document.removeEventListener("keydown", c);
      });
    }), (c, p) => (x(), S("div", null, [
      (x(), at(bn, { to: "body" }, [
        ue(st, { name: "menu" }, {
          default: Me(() => [
            i.value ? (x(), S("div", n1, [
              f("div", s1, [
                ue(st, { name: "fade" }, {
                  default: Me(() => [
                    i.value ? (x(), S("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: u
                    })) : L("", !0)
                  ]),
                  _: 1
                }),
                f("div", o1, [
                  ue(st, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Me(() => [
                      i.value ? (x(), S("div", r1, [
                        f("div", i1, [
                          f("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            p[3] || (p[3] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Menu ", -1)),
                            f("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: u
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
                          f("div", l1, [
                            f("nav", a1, [
                              f("ul", c1, [
                                s.value.length === 0 ? (x(), S("li", u1, p[4] || (p[4] = [
                                  f("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : L("", !0),
                                (x(!0), S(ie, null, be(s.value, (m) => (x(), S("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (x(), S("div", d1, [
                                    f("button", {
                                      onClick: (g) => d(
                                        m.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      f("span", null, U(m.title), 1),
                                      (x(), S("svg", {
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
                                    ], 8, f1),
                                    ue(st, { name: "submenu" }, {
                                      default: Me(() => [
                                        l.value.includes(
                                          m.title
                                        ) ? (x(), S("ul", p1, [
                                          (x(!0), S(ie, null, be(m.links, (g) => (x(), S("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (x(), S("div", h1, [
                                              f("button", {
                                                onClick: (v) => d(
                                                  `${m.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                f("span", null, U(g.title), 1),
                                                (x(), S("svg", {
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
                                              ], 8, m1),
                                              ue(st, { name: "submenu" }, {
                                                default: Me(() => [
                                                  l.value.includes(
                                                    `${m.title}-${g.title}`
                                                  ) ? (x(), S("ul", g1, [
                                                    (x(!0), S(ie, null, be(g.links, (v) => (x(), S("li", {
                                                      key: v.id || v.title
                                                    }, [
                                                      f("a", {
                                                        href: v.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: p[0] || (p[0] = (...$) => u && u(...$))
                                                      }, U(v.title), 9, v1)
                                                    ]))), 128))
                                                  ])) : L("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (x(), S("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: p[1] || (p[1] = (...v) => u && u(...v))
                                            }, U(g.title), 9, y1))
                                          ]))), 128))
                                        ])) : L("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (x(), S("a", {
                                    key: 1,
                                    href: m.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: u
                                  }, U(m.title), 9, b1))
                                ]))), 128))
                              ])
                            ]),
                            f("div", _1, [
                              f("div", E1, [
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
                                ]), 8, w1),
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
                            r.value ? (x(), S("div", x1, [
                              jn(c.$slots, "localization", {}, void 0, !0)
                            ])) : L("", !0)
                          ])
                        ])
                      ])) : L("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : L("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, S1 = /* @__PURE__ */ We(N1, [["__scopeId", "data-v-9092623c"]]), k1 = { class: "variant-picker" }, C1 = { class: "text-sm font-medium text-gray-900 mb-3" }, O1 = { class: "font-normal text-gray-600" }, T1 = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, $1 = ["title", "aria-label", "disabled", "onClick"], D1 = { class: "sr-only" }, V1 = {
  key: 0,
  class: "color-swatch__checkmark"
}, A1 = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, I1 = ["aria-label", "disabled", "onClick"], M1 = {
  key: 0,
  class: "mt-6 flex items-center justify-between"
}, P1 = { class: "flex items-center gap-4" }, R1 = { class: "text-2xl font-bold text-gray-900" }, L1 = {
  key: 0,
  class: "text-lg text-gray-500 line-through"
}, F1 = {
  key: 0,
  class: "text-sm text-green-600 font-medium"
}, B1 = {
  key: 1,
  class: "text-sm text-red-600 font-medium"
}, j1 = {
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
        const $ = l.value.find((k) => k.id == n.selectedVariantId);
        $ && a($);
      } else if (l.value.length > 0) {
        const $ = l.value.find((k) => k.available) || l.value[0];
        a($);
      }
    });
    const a = ($) => {
      r.value = $, i.value.forEach((k, y) => {
        o.value[k.name] = $[`option${y + 1}`];
      }), s("variant-change", $);
    }, u = ($, k) => {
      o.value[$] = k;
      const y = l.value.find((h) => i.value.every((E, b) => {
        const A = o.value[E.name];
        return h[`option${b + 1}`] === A;
      }));
      y && (r.value = y, s("variant-change", y));
    }, d = ($) => o.value[$] || "", c = ($, k) => o.value[$] === k, p = ($, k) => {
      const y = i.value.findIndex((h) => h.name === $);
      return l.value.some((h) => {
        const E = h[`option${y + 1}`] === k, b = i.value.every((A, P) => {
          if (A.name === $) return !0;
          const D = o.value[A.name];
          return D ? h[`option${P + 1}`] === D : !0;
        });
        return E && b && h.available;
      });
    }, m = ($) => $.toLowerCase().includes("color") || $.toLowerCase().includes("colour"), g = ($) => ({
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
    })[$.toLowerCase()] || "#E5E7EB", v = ($) => {
      var k, y;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((y = (k = window.Shopify) == null ? void 0 : k.currency) == null ? void 0 : y.active) || "USD"
      }).format($ / 100);
    };
    return ($, k) => (x(), S("div", k1, [
      (x(!0), S(ie, null, be(i.value, (y) => (x(), S("div", {
        key: y.name,
        class: "variant-option mb-6"
      }, [
        f("h3", C1, [
          Fe(U(y.name) + ": ", 1),
          f("span", O1, U(d(y.name)), 1)
        ]),
        m(y.name) ? (x(), S("div", T1, [
          (x(!0), S(ie, null, be(y.values, (h) => (x(), S("button", {
            key: h,
            type: "button",
            class: ke([
              "color-swatch",
              c(y.name, h) ? "color-swatch--selected" : "",
              p(y.name, h) ? "" : "color-swatch--unavailable"
            ]),
            style: Ge({ backgroundColor: g(h) }),
            title: h,
            "aria-label": `Select ${y.name} ${h}`,
            disabled: !p(y.name, h),
            onClick: (E) => u(y.name, h)
          }, [
            f("span", D1, U(h), 1),
            c(y.name, h) ? (x(), S("span", V1, k[0] || (k[0] = [
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
            ]))) : L("", !0)
          ], 14, $1))), 128))
        ])) : (x(), S("div", A1, [
          (x(!0), S(ie, null, be(y.values, (h) => (x(), S("button", {
            key: h,
            type: "button",
            class: ke([
              "variant-button",
              c(y.name, h) ? "variant-button--selected" : "",
              p(y.name, h) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${y.name} ${h}`,
            disabled: !p(y.name, h),
            onClick: (E) => u(y.name, h)
          }, U(h), 11, I1))), 128))
        ]))
      ]))), 128)),
      r.value ? (x(), S("div", M1, [
        f("div", P1, [
          f("span", R1, U(v(r.value.price)), 1),
          r.value.compare_at_price > r.value.price ? (x(), S("span", L1, U(v(r.value.compare_at_price)), 1)) : L("", !0)
        ]),
        r.value.available ? (x(), S("div", F1, " In Stock ")) : (x(), S("div", B1, " Out of Stock "))
      ])) : L("", !0)
    ]));
  }
}, H1 = /* @__PURE__ */ We(j1, [["__scopeId", "data-v-6eb16bf8"]]);
function U1(e) {
  return cl() ? (jc(e), !0) : !1;
}
function na(e) {
  return typeof e == "function" ? e() : No(e);
}
const q1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const z1 = Object.prototype.toString, K1 = (e) => z1.call(e) === "[object Object]", wo = () => {
};
function W1(e, t) {
  function n(...s) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(r);
    });
  }
  return n;
}
function G1(...e) {
  let t = 0, n, s = !0, o = wo, r, i, l, a, u;
  !Ae(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: l = !0, leading: a = !0, rejectOnCancel: u = !1 } = e[0] : [i, l = !0, a = !0, u = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = wo);
  };
  return (p) => {
    const m = na(i), g = Date.now() - t, v = () => r = p();
    return d(), m <= 0 ? (t = Date.now(), v()) : (g > m && (a || !s) ? (t = Date.now(), v()) : l && (r = new Promise(($, k) => {
      o = u ? k : $, n = setTimeout(() => {
        t = Date.now(), s = !0, $(v()), d();
      }, Math.max(0, m - g));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, r);
  };
}
function Y1(e, t = 200, n = !1, s = !0, o = !1) {
  return W1(
    G1(t, n, s, o),
    e
  );
}
function J1(e) {
  var t;
  const n = na(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pf = q1 ? window : void 0;
function Ei(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Pf) : [t, n, s, o] = e, !t)
    return wo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((d) => d()), r.length = 0;
  }, l = (d, c, p, m) => (d.addEventListener(c, p, m), () => d.removeEventListener(c, p, m)), a = sn(
    () => [J1(t), na(o)],
    ([d, c]) => {
      if (i(), !d)
        return;
      const p = K1(c) ? { ...c } : c;
      r.push(
        ...n.flatMap((m) => s.map((g) => l(d, m, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    a(), i();
  };
  return U1(u), u;
}
function X1(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: r,
    passive: i = !0,
    window: l = Pf
  } = t, a = Ns({ x: 0, y: 0 }), u = Ns({ x: 0, y: 0 }), d = Z(() => a.x - u.x), c = Z(() => a.y - u.y), { max: p, abs: m } = Math, g = Z(() => p(m(d.value), m(c.value)) >= n), v = q(!1), $ = Z(() => g.value ? m(d.value) > m(c.value) ? d.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), k = (w) => [w.touches[0].clientX, w.touches[0].clientY], y = (w, T) => {
    a.x = w, a.y = T;
  }, h = (w, T) => {
    u.x = w, u.y = T;
  };
  let E;
  const b = Q1(l == null ? void 0 : l.document);
  i ? E = b ? { passive: !0 } : { capture: !1 } : E = b ? { passive: !1, capture: !0 } : { capture: !0 };
  const A = (w) => {
    v.value && (o == null || o(w, $.value)), v.value = !1;
  }, P = [
    Ei(e, "touchstart", (w) => {
      if (w.touches.length !== 1)
        return;
      E.capture && !E.passive && w.preventDefault();
      const [T, V] = k(w);
      y(T, V), h(T, V), r == null || r(w);
    }, E),
    Ei(e, "touchmove", (w) => {
      if (w.touches.length !== 1)
        return;
      const [T, V] = k(w);
      h(T, V), !v.value && g.value && (v.value = !0), v.value && (s == null || s(w));
    }, E),
    Ei(e, ["touchend", "touchcancel"], A, E)
  ];
  return {
    isPassiveEventSupported: b,
    isSwiping: v,
    direction: $,
    coordsStart: a,
    coordsEnd: u,
    lengthX: d,
    lengthY: c,
    stop: () => P.forEach((w) => w())
  };
}
function Q1(e) {
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
const Z1 = { class: "sticky-header-container" }, eb = {
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
    const t = e, n = q(null), s = q(!1), o = q(!1), r = q(!1), i = q(!1), l = q("#ffffff"), a = q(0), u = q(0), d = Z(() => $.value ? `${u.value}px` : "0");
    let c = 0;
    const p = Z(() => {
      const y = {};
      return $.value && s.value && (y.position = "fixed", y.top = "0", y.left = "0", y.right = "0", y.zIndex = "40", o.value ? y.transform = "translateY(-100%)" : y.transform = "translateY(0)"), i.value && (a.value === 0 ? y.backgroundColor = "transparent" : $.value && s.value && (y.backgroundColor = l.value)), y.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", y;
    }), m = () => {
      var E, b, A;
      const y = (b = (E = n.value) == null ? void 0 : E.getRootNode()) == null ? void 0 : b.host;
      if (!y) return;
      y.classList.add("sticky-header-wrapper");
      const h = (A = n.value) == null ? void 0 : A.querySelector(".main-header");
      h && i.value && (a.value === 0 ? (h.style.backgroundColor = "transparent", h.style.borderBottomColor = "transparent") : $.value && s.value && (h.style.backgroundColor = l.value, h.style.borderBottomColor = "#e5e7eb"));
    }, g = Y1(() => {
      if (!$.value)
        return;
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = y, s.value = y > 0, r.value = y > 10, v.value && s.value) {
        const h = y - c;
        Math.abs(h) > 5 && (h > 0 && y > u.value ? o.value = !0 : h < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(y - c) > 1 && (c = y), m();
    }, 50), v = q(t.hideOnScrollDown), $ = q(t.sticky), k = () => {
      n.value && (u.value = n.value.offsetHeight || 80);
    };
    return Be(() => {
      if (n.value) {
        const y = n.value.getRootNode().host;
        if (y) {
          y.classList.add("sticky-header-wrapper"), i.value = y.classList.contains("header-transparent");
          const h = y.getAttribute("data-hide-on-scroll-down"), E = y.getAttribute("data-sticky"), b = y.getAttribute("data-sticky-bg");
          h !== null && (v.value = h === "true"), E !== null && ($.value = E === "true"), b !== null && (l.value = b || "#ffffff"), setTimeout(k, 100), window.addEventListener("resize", k);
        }
      }
      window.addEventListener("scroll", g, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), g();
    }), Ct(() => {
      window.removeEventListener("scroll", g), window.removeEventListener("resize", k);
    }), (y, h) => (x(), S("div", Z1, [
      $.value && s.value ? (x(), S("div", {
        key: 0,
        class: "header-placeholder",
        style: Ge({ height: d.value })
      }, null, 4)) : L("", !0),
      f("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: ke(["sticky-header-inner", {
          "is-fixed": $.value && s.value,
          "is-hidden": o.value,
          "has-shadow": r.value,
          "is-transparent": i.value && a.value === 0
        }]),
        style: Ge(p.value)
      }, [
        jn(y.$slots, "default")
      ], 6)
    ]));
  }
}, tb = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, nb = { class: "main-header__wrapper" }, sb = {
  href: "/",
  class: "main-header__logo"
}, ob = ["src", "alt"], rb = {
  key: 1,
  class: "text-xl font-bold"
}, ib = { class: "main-header__nav hidden lg:flex" }, lb = ["href"], ab = { class: "main-header__actions" }, cb = ["href"], ub = {
  key: 0,
  class: "cart-count"
}, db = { class: "search-overlay__container" }, fb = {
  action: "/search",
  method: "get",
  class: "search-form"
}, pb = {
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
      var d, c;
      return t.customer ? ((d = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : d.account) || "/account" : ((c = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : c.account_login) || "/account/login";
    }), i = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, l = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, a = async () => {
      var d;
      s.value = !s.value, s.value && (await Ls(), (d = n.value) == null || d.focus());
    }, u = () => {
      var d;
      (d = window.OrionCart) != null && d.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return Be(() => {
      document.addEventListener("cart:updated", u), u();
    }), Ct(() => {
      document.removeEventListener("cart:updated", u);
    }), (d, c) => (x(), S("div", tb, [
      f("div", nb, [
        f("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: i,
          "aria-label": "Open menu"
        }, c[0] || (c[0] = [
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
        f("a", sb, [
          e.logoUrl ? (x(), S("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, ob)) : (x(), S("span", rb, U(e.shopName), 1))
        ]),
        f("nav", ib, [
          (x(!0), S(ie, null, be(e.navigationLinks, (p) => (x(), S("a", {
            key: p.url,
            href: p.url,
            class: "nav-link"
          }, U(p.title), 9, lb))), 128))
        ]),
        f("div", ab, [
          f("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: a,
            "aria-label": "Search"
          }, c[1] || (c[1] = [
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
          }, c[2] || (c[2] = [
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
          ]), 8, cb),
          f("button", {
            type: "button",
            class: "action-button relative",
            onClick: l,
            "aria-label": "Cart"
          }, [
            c[3] || (c[3] = f("svg", {
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
            o.value > 0 ? (x(), S("span", ub, U(o.value), 1)) : L("", !0)
          ])
        ])
      ]),
      (x(), at(bn, { to: "body" }, [
        ue(st, { name: "fade" }, {
          default: Me(() => [
            s.value ? (x(), S("div", {
              key: 0,
              class: "search-overlay",
              onClick: qt(a, ["self"])
            }, [
              f("div", db, [
                f("form", fb, [
                  f("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: _r(a, ["esc"])
                  }, null, 544),
                  c[4] || (c[4] = f("button", {
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
                }, c[5] || (c[5] = [
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
            ])) : L("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, Rf = /* @__PURE__ */ We(pb, [["__scopeId", "data-v-3988ea0d"]]), hb = { class: "site-footer" }, mb = {
  key: 0,
  class: "newsletter-section"
}, gb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, vb = { class: "newsletter-content" }, yb = { class: "newsletter-text" }, bb = { class: "text-xl font-semibold mb-2" }, _b = { class: "text-gray-600" }, Eb = ["disabled"], wb = ["disabled"], xb = { key: 0 }, Nb = { key: 1 }, Sb = { class: "footer-main" }, kb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Cb = { class: "footer-grid" }, Ob = { class: "footer-column" }, Tb = { class: "footer-heading" }, $b = { class: "text-gray-600 mb-4" }, Db = {
  key: 0,
  class: "social-links"
}, Vb = ["href", "aria-label"], Ab = { class: "footer-heading" }, Ib = { class: "footer-links" }, Mb = ["href"], Pb = {
  key: 0,
  class: "footer-column"
}, Rb = { class: "contact-info" }, Lb = {
  key: 0,
  class: "contact-item"
}, Fb = {
  key: 1,
  class: "contact-item"
}, Bb = {
  key: 2,
  class: "contact-item"
}, jb = {
  key: 0,
  class: "payment-methods"
}, Hb = { class: "payment-icons" }, Ub = ["src", "alt"], qb = { class: "footer-bottom" }, zb = { class: "copyright" }, Kb = {
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
    return (i, l) => (x(), S("footer", hb, [
      e.showNewsletter ? (x(), S("div", mb, [
        f("div", gb, [
          f("div", vb, [
            f("div", yb, [
              f("h3", bb, U(e.newsletterTitle), 1),
              f("p", _b, U(e.newsletterDescription), 1)
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
              }, null, 8, Eb), [
                [Fn, t.value]
              ]),
              f("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (x(), S("span", Nb, "Subscribing...")) : (x(), S("span", xb, "Subscribe"))
              ], 8, wb)
            ], 32)
          ])
        ])
      ])) : L("", !0),
      f("div", Sb, [
        f("div", kb, [
          f("div", Cb, [
            f("div", Ob, [
              f("h4", Tb, U(e.companyName), 1),
              f("p", $b, U(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (x(), S("div", Db, [
                (x(!0), S(ie, null, be(e.socialLinks, (a) => (x(), S("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (x(), at(Nl(r(a.name))))
                ], 8, Vb))), 128))
              ])) : L("", !0)
            ]),
            (x(!0), S(ie, null, be(e.footerColumns, (a) => (x(), S("div", {
              key: a.title,
              class: "footer-column"
            }, [
              f("h4", Ab, U(a.title), 1),
              f("ul", Ib, [
                (x(!0), S(ie, null, be(a.links, (u) => (x(), S("li", {
                  key: u.title
                }, [
                  f("a", {
                    href: u.url,
                    class: "footer-link"
                  }, U(u.title), 9, Mb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (x(), S("div", Pb, [
              l[4] || (l[4] = f("h4", { class: "footer-heading" }, "Contact", -1)),
              f("div", Rb, [
                e.contactEmail ? (x(), S("p", Lb, [
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
                  Fe(" " + U(e.contactEmail), 1)
                ])) : L("", !0),
                e.contactPhone ? (x(), S("p", Fb, [
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
                  Fe(" " + U(e.contactPhone), 1)
                ])) : L("", !0),
                e.contactAddress ? (x(), S("p", Bb, [
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
                  Fe(" " + U(e.contactAddress), 1)
                ])) : L("", !0)
              ])
            ])) : L("", !0)
          ]),
          e.paymentMethods.length > 0 ? (x(), S("div", jb, [
            l[5] || (l[5] = f("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            f("div", Hb, [
              (x(!0), S(ie, null, be(e.paymentMethods, (a) => (x(), S("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, Ub))), 128))
            ])
          ])) : L("", !0),
          f("div", qb, [
            f("p", zb, " © " + U(s.value) + " " + U(e.companyName) + ". All rights reserved. ", 1),
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
}, Wb = /* @__PURE__ */ We(Kb, [["__scopeId", "data-v-1c1567f0"]]), Gb = ["href"], Yb = ["src", "alt"], Jb = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, Xb = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, Qb = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, Zb = { class: "p-4" }, e_ = {
  key: 0,
  class: "mb-3"
}, t_ = { class: "flex gap-1.5 flex-wrap" }, n_ = ["onClick", "title"], s_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, o_ = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, r_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, i_ = ["href"], l_ = { class: "flex items-center gap-1 mb-2" }, a_ = { class: "flex" }, c_ = { class: "flex items-baseline gap-2 mb-4" }, u_ = { class: "text-xl font-bold text-gray-900" }, d_ = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, f_ = ["disabled"], p_ = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, h_ = { key: 1 }, m_ = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, g_ = {
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
    const n = e, s = t, o = q(""), r = q(!1), i = q(!1), l = q(!1), a = q(!1), u = Z(() => n.product ? n.product : {
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
    }), d = Z(() => {
      const V = u.value.handle;
      return u.value.url || (V ? `/products/${V}` : "#");
    }), c = Z(() => {
      var V, C, M;
      return r.value && ((V = u.value.images) != null && V[1]) ? u.value.images[1].src : ((M = (C = u.value.images) == null ? void 0 : C[0]) == null ? void 0 : M.src) || u.value.featured_image || u.value.image || "/placeholder.jpg";
    }), p = Z(() => {
      var V;
      return (V = u.value.options) == null ? void 0 : V.some(
        (C) => {
          var M, z;
          return ((M = C.name) == null ? void 0 : M.toLowerCase().includes("color")) || ((z = C.name) == null ? void 0 : z.toLowerCase().includes("colour"));
        }
      );
    }), m = Z(() => {
      var C;
      const V = (C = u.value.options) == null ? void 0 : C.find(
        (M) => {
          var z, K;
          return ((z = M.name) == null ? void 0 : z.toLowerCase().includes("color")) || ((K = M.name) == null ? void 0 : K.toLowerCase().includes("colour"));
        }
      );
      return (V == null ? void 0 : V.values) || [];
    }), g = Z(() => u.value.price || 0), v = Z(() => u.value.compare_at_price || 0), $ = Z(() => u.value.available && v.value > g.value), k = Z(() => $.value ? Math.round((v.value - g.value) / v.value * 100) : 0), y = Z(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: a.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), h = Z(() => {
      var V, C, M;
      return ((M = (C = (V = window.Shopline) == null ? void 0 : V.theme) == null ? void 0 : C.settings) == null ? void 0 : M.show_product_card_wishlist) !== !1;
    }), E = (V) => `$${(V / 100).toFixed(2)}`, b = (V) => {
      const C = {
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
      }, M = V.toLowerCase();
      return C[M] || `#${M.replace("#", "")}`;
    }, A = () => {
      var V;
      ((V = u.value.images) == null ? void 0 : V.length) > 1 && (r.value = !0);
    }, P = () => {
      r.value = !1;
    }, D = (V) => {
      o.value = V.value;
    }, w = () => {
      l.value = !l.value;
    }, T = async () => {
      var V, C, M, z;
      i.value = !0;
      try {
        const K = (C = (V = u.value.variants) == null ? void 0 : V[0]) == null ? void 0 : C.id;
        if (!K)
          throw console.error("No variant ID found for product:", u.value), new Error("No variant ID found");
        const ee = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: K,
              quantity: 1
            }]
          })
        });
        if (!ee.ok)
          throw new Error("Failed to add to cart");
        const ne = await ee.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((z = (M = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : M.settings) == null ? void 0 : z.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: K, quantity: 1 });
      } catch (K) {
        console.error("Error adding to cart:", K);
      } finally {
        i.value = !1;
      }
    };
    return (V, C) => (x(), S("div", {
      class: "product-card group relative bg-white transition-all duration-300 overflow-hidden",
      style: Ge(y.value),
      onMouseenter: C[2] || (C[2] = (M) => a.value = !0),
      onMouseleave: C[3] || (C[3] = (M) => a.value = !1)
    }, [
      f("a", {
        href: d.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        c.value ? (x(), S("img", {
          key: 0,
          src: c.value,
          alt: u.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: A,
          onMouseleave: P
        }, null, 40, Yb)) : (x(), S("div", Jb, C[4] || (C[4] = [
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
        $.value ? (x(), S("div", Xb, " -" + U(k.value) + "% ", 1)) : L("", !0),
        u.value.available && h.value ? (x(), S("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: qt(w, ["prevent"])
        }, [
          (x(), S("svg", {
            class: ke(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, C[5] || (C[5] = [
            f("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : L("", !0),
        u.value.available ? L("", !0) : (x(), S("div", Qb, C[6] || (C[6] = [
          f("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Gb),
      f("div", Zb, [
        p.value ? (x(), S("div", e_, [
          f("div", t_, [
            (x(!0), S(ie, null, be(m.value, (M) => (x(), S("button", {
              key: M.value,
              onClick: (z) => D(M),
              title: M.value,
              class: ke([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === M.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: Ge({ backgroundColor: b(M.value) })
            }, [
              o.value === M.value ? (x(), S("span", s_, C[7] || (C[7] = [
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
              ]))) : L("", !0)
            ], 14, n_))), 128))
          ])
        ])) : L("", !0),
        u.value.vendor ? (x(), S("p", o_, U(u.value.vendor), 1)) : L("", !0),
        f("h3", r_, [
          f("a", {
            href: d.value,
            class: "hover:text-gray-700 transition-colors"
          }, U(u.value.title || "Untitled"), 9, i_)
        ]),
        f("div", l_, [
          f("div", a_, [
            (x(), S(ie, null, be(5, (M) => f("svg", {
              key: M,
              class: ke(["w-4 h-4", M <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, C[8] || (C[8] = [
              f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          C[9] || (C[9] = f("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        f("div", c_, [
          f("span", u_, U(E(g.value)), 1),
          v.value > g.value ? (x(), S("span", d_, U(E(v.value)), 1)) : L("", !0)
        ]),
        u.value.available ? (x(), S("button", {
          key: 2,
          onClick: T,
          disabled: i.value,
          class: "w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          style: {
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
            borderRadius: "var(--button-radius)"
          },
          onMouseenter: C[0] || (C[0] = (M) => M.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
          onMouseleave: C[1] || (C[1] = (M) => M.target.style.backgroundColor = "var(--button-primary-bg)")
        }, [
          i.value ? L("", !0) : (x(), S("svg", p_, C[10] || (C[10] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          i.value ? (x(), S("svg", m_, C[11] || (C[11] = [
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
          ]))) : (x(), S("span", h_, "Add to Cart"))
        ], 40, f_)) : L("", !0)
      ])
    ], 36));
  }
}, v_ = { class: "collection-filters" }, y_ = { class: "lg:hidden mb-4" }, b_ = { class: "hidden lg:block space-y-6" }, __ = { class: "filter-group" }, E_ = { class: "filter-group" }, w_ = { class: "space-y-2" }, x_ = { class: "flex items-center" }, N_ = { class: "flex items-center" }, S_ = { class: "flex items-center" }, k_ = { class: "flex items-center" }, C_ = {
  key: 0,
  class: "filter-group"
}, O_ = { class: "space-y-2" }, T_ = ["value"], $_ = { class: "ml-2 text-sm" }, D_ = {
  key: 1,
  class: "filter-group"
}, V_ = { class: "space-y-2" }, A_ = ["value"], I_ = { class: "ml-2 text-sm" }, M_ = { class: "filter-group" }, P_ = { class: "flex items-center" }, R_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, L_ = { class: "h-full flex flex-col" }, F_ = { class: "flex items-center justify-between p-4 border-b" }, B_ = {
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
    const n = e, s = t, o = q("manual"), r = q([]), i = q([]), l = q([]), a = q(!1), u = q(!1), d = Z(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((h) => {
        h.product_type && y.add(h.product_type);
      }), Array.from(y).sort();
    }), c = Z(() => {
      const y = /* @__PURE__ */ new Set();
      return n.products.forEach((h) => {
        h.vendor && y.add(h.vendor);
      }), Array.from(y).sort();
    }), p = Z(() => r.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      k();
    }, g = () => {
      k();
    }, v = () => {
      r.value = [], i.value = [], l.value = [], a.value = !1, k();
    }, $ = () => {
      u.value = !1, k();
    }, k = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: r.value,
        types: i.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return (y, h) => (x(), S("div", v_, [
      f("div", y_, [
        f("button", {
          onClick: h[0] || (h[0] = (E) => u.value = !0),
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
      f("div", b_, [
        f("div", __, [
          h[14] || (h[14] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
          Ue(f("select", {
            "onUpdate:modelValue": h[1] || (h[1] = (E) => o.value = E),
            onChange: m,
            class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          }, h[13] || (h[13] = [
            ls('<option value="manual" data-v-67473a91>Featured</option><option value="best-selling" data-v-67473a91>Best Selling</option><option value="title-ascending" data-v-67473a91>Alphabetically, A-Z</option><option value="title-descending" data-v-67473a91>Alphabetically, Z-A</option><option value="price-ascending" data-v-67473a91>Price, low to high</option><option value="price-descending" data-v-67473a91>Price, high to low</option><option value="created-ascending" data-v-67473a91>Date, old to new</option><option value="created-descending" data-v-67473a91>Date, new to old</option>', 8)
          ]), 544), [
            [Oo, o.value]
          ])
        ]),
        f("div", E_, [
          h[19] || (h[19] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
          f("div", w_, [
            f("label", x_, [
              Ue(f("input", {
                type: "checkbox",
                value: "0-50",
                "onUpdate:modelValue": h[2] || (h[2] = (E) => r.value = E),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [_t, r.value]
              ]),
              h[15] || (h[15] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
            ]),
            f("label", N_, [
              Ue(f("input", {
                type: "checkbox",
                value: "50-100",
                "onUpdate:modelValue": h[3] || (h[3] = (E) => r.value = E),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [_t, r.value]
              ]),
              h[16] || (h[16] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
            ]),
            f("label", S_, [
              Ue(f("input", {
                type: "checkbox",
                value: "100-200",
                "onUpdate:modelValue": h[4] || (h[4] = (E) => r.value = E),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [_t, r.value]
              ]),
              h[17] || (h[17] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
            ]),
            f("label", k_, [
              Ue(f("input", {
                type: "checkbox",
                value: "200+",
                "onUpdate:modelValue": h[5] || (h[5] = (E) => r.value = E),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [_t, r.value]
              ]),
              h[18] || (h[18] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
            ])
          ])
        ]),
        d.value.length > 0 ? (x(), S("div", C_, [
          h[20] || (h[20] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
          f("div", O_, [
            (x(!0), S(ie, null, be(d.value, (E) => (x(), S("label", {
              key: E,
              class: "flex items-center"
            }, [
              Ue(f("input", {
                type: "checkbox",
                value: E,
                "onUpdate:modelValue": h[6] || (h[6] = (b) => i.value = b),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, T_), [
                [_t, i.value]
              ]),
              f("span", $_, U(E), 1)
            ]))), 128))
          ])
        ])) : L("", !0),
        c.value.length > 0 ? (x(), S("div", D_, [
          h[21] || (h[21] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
          f("div", V_, [
            (x(!0), S(ie, null, be(c.value, (E) => (x(), S("label", {
              key: E,
              class: "flex items-center"
            }, [
              Ue(f("input", {
                type: "checkbox",
                value: E,
                "onUpdate:modelValue": h[7] || (h[7] = (b) => l.value = b),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 40, A_), [
                [_t, l.value]
              ]),
              f("span", I_, U(E), 1)
            ]))), 128))
          ])
        ])) : L("", !0),
        f("div", M_, [
          h[23] || (h[23] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
          f("label", P_, [
            Ue(f("input", {
              type: "checkbox",
              "onUpdate:modelValue": h[8] || (h[8] = (E) => a.value = E),
              onChange: g,
              class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            }, null, 544), [
              [_t, a.value]
            ]),
            h[22] || (h[22] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
          ])
        ]),
        p.value ? (x(), S("button", {
          key: 2,
          onClick: v,
          class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
        }, " Clear all filters ")) : L("", !0)
      ]),
      (x(), at(bn, { to: "body" }, [
        u.value ? (x(), S("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: h[11] || (h[11] = qt((E) => u.value = !1, ["self"]))
        }, [
          f("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: h[9] || (h[9] = (E) => u.value = !1)
          }),
          f("div", R_, [
            f("div", L_, [
              f("div", F_, [
                h[25] || (h[25] = f("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                f("button", {
                  onClick: h[10] || (h[10] = (E) => u.value = !1),
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
                  onClick: $,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : L("", !0)
      ]))
    ]));
  }
}, j_ = /* @__PURE__ */ We(B_, [["__scopeId", "data-v-67473a91"]]), H_ = { class: "collection-grid" }, U_ = {
  key: 0,
  class: "mb-8"
}, q_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, z_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, K_ = { class: "mt-4 flex items-center justify-between" }, W_ = { class: "text-sm text-secondary-600" }, G_ = {
  key: 0,
  class: "lg:hidden"
}, Y_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, J_ = {
  key: 0,
  class: "lg:col-span-1"
}, X_ = ["products"], Q_ = {
  key: 1,
  class: "text-center py-12"
}, Z_ = ["product"], e2 = {
  key: 3,
  class: "mt-8"
}, t2 = {
  key: 0,
  class: "inline-flex items-center"
}, n2 = {
  key: 1,
  class: "text-center"
}, s2 = ["disabled"], o2 = { key: 0 }, r2 = { key: 1 }, i2 = {
  key: 2,
  class: "flex items-center justify-between"
}, l2 = { class: "flex-1 flex justify-between sm:hidden" }, a2 = ["disabled"], c2 = ["disabled"], u2 = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, d2 = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, f2 = ["disabled"], p2 = ["onClick"], h2 = ["disabled"], m2 = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, g2 = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, v2 = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, y2 = { class: "text-lg font-medium text-secondary-900" }, b2 = {
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
    const t = e, n = q(!1), s = q(!1), o = q(t.currentPage), r = q(t.products.length), i = q("manual"), l = q({}), a = q(null), u = q(null), d = Z(() => {
      const w = Number(t.columnsMobile), T = t.columnsDesktop, V = w === 1 ? "grid-cols-1" : "grid-cols-2", C = T <= 3 ? `md:grid-cols-${T}` : "md:grid-cols-3", M = `lg:grid-cols-${T}`;
      return `grid ${V} ${C} ${M} gap-4 lg:gap-6`;
    }), c = Z(() => {
      var V, C, M;
      let w = [...t.products];
      switch (l.value.inStockOnly && (w = w.filter((z) => z.available)), ((V = l.value.priceRanges) == null ? void 0 : V.length) > 0 && (w = w.filter((z) => {
        const K = z.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? K < 50 : ee === "50-100" ? K >= 50 && K < 100 : ee === "100-200" ? K >= 100 && K < 200 : ee === "200+" ? K >= 200 : !1);
      })), ((C = l.value.types) == null ? void 0 : C.length) > 0 && (w = w.filter((z) => l.value.types.includes(z.product_type))), ((M = l.value.vendors) == null ? void 0 : M.length) > 0 && (w = w.filter((z) => l.value.vendors.includes(z.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          w.sort((z, K) => z.price - K.price);
          break;
        case "price-descending":
          w.sort((z, K) => K.price - z.price);
          break;
        case "title-ascending":
          w.sort((z, K) => z.title.localeCompare(K.title));
          break;
        case "title-descending":
          w.sort((z, K) => K.title.localeCompare(z.title));
          break;
        case "created-ascending":
          w.sort((z, K) => new Date(z.created_at) - new Date(K.created_at));
          break;
        case "created-descending":
          w.sort((z, K) => new Date(K.created_at) - new Date(z.created_at));
          break;
      }
      return w;
    }), p = Z(() => {
      if (t.enableInfiniteScroll)
        return c.value.slice(0, r.value);
      const w = (o.value - 1) * t.productsPerPage, T = w + t.productsPerPage;
      return c.value.slice(w, T);
    }), m = Z(() => t.totalPages || Math.ceil(c.value.length / t.productsPerPage)), g = Z(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : r.value < c.value.length), v = Z(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, c.value.length - r.value)), $ = Z(() => {
      const w = [], T = m.value, V = o.value;
      if (T <= 7)
        for (let C = 1; C <= T; C++)
          w.push(C);
      else if (V <= 3) {
        for (let C = 1; C <= 5; C++)
          w.push(C);
        w.push("..."), w.push(T);
      } else if (V >= T - 2) {
        w.push(1), w.push("...");
        for (let C = T - 4; C <= T; C++)
          w.push(C);
      } else {
        w.push(1), w.push("...");
        for (let C = V - 1; C <= V + 1; C++)
          w.push(C);
        w.push("..."), w.push(T);
      }
      return w.filter((C) => C === "..." || C >= 1 && C <= T);
    }), k = (w) => {
      l.value = w, o.value = 1, r.value = t.productsPerPage;
    }, y = () => {
      o.value = 1, r.value = t.productsPerPage;
    }, h = () => {
      s.value = !0, setTimeout(() => {
        r.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, E = async (w) => {
      var V;
      const T = new FormData();
      T.append("id", w.variants[0].id), T.append("quantity", "1"), await ((V = window.OrionCart) == null ? void 0 : V.addItem(T)), console.log("Added to cart:", w.title);
    }, b = (w) => {
      a.value = w;
    }, A = () => {
      a.value = null;
    };
    let P = null;
    const D = () => {
      !t.enableInfiniteScroll || !u.value || (P = new IntersectionObserver(
        (w) => {
          w[0].isIntersecting && g.value && !s.value && h();
        },
        { threshold: 0.1 }
      ), P.observe(u.value));
    };
    return Be(() => {
      D();
    }), Ct(() => {
      P && P.disconnect();
    }), sn(() => t.enableInfiniteScroll, () => {
      D();
    }), (w, T) => (x(), S("div", H_, [
      e.showHeader ? (x(), S("div", U_, [
        f("h1", q_, U(e.collectionTitle), 1),
        e.collectionDescription ? (x(), S("div", z_, U(e.collectionDescription), 1)) : L("", !0),
        f("div", K_, [
          f("p", W_, U(e.totalProducts || c.value.length) + " products ", 1),
          e.enableSorting ? (x(), S("div", G_, [
            Ue(f("select", {
              "onUpdate:modelValue": T[0] || (T[0] = (V) => i.value = V),
              onChange: y,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, T[5] || (T[5] = [
              ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Oo, i.value]
            ])
          ])) : L("", !0)
        ])
      ])) : L("", !0),
      f("div", Y_, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (x(), S("aside", J_, [
          f("collection-filters", {
            products: e.products,
            onUpdateFilters: k
          }, null, 40, X_)
        ])) : L("", !0),
        f("div", {
          class: ke(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (x(), S("div", {
            key: 0,
            class: ke(d.value)
          }, [
            (x(), S(ie, null, be(6, (V) => f("div", {
              key: V,
              class: "animate-pulse"
            }, T[6] || (T[6] = [
              f("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              f("div", { class: "mt-4 space-y-2" }, [
                f("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                f("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : c.value.length === 0 ? (x(), S("div", Q_, T[7] || (T[7] = [
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
          ]))) : (x(), S("div", {
            key: 2,
            class: ke(d.value)
          }, [
            (x(!0), S(ie, null, be(p.value, (V) => (x(), S("product-card", {
              key: V.id,
              product: V,
              onQuickAdd: E,
              onQuickView: b
            }, null, 40, Z_))), 128))
          ], 2)),
          !n.value && c.value.length > 0 ? (x(), S("div", e2, [
            e.enableInfiniteScroll ? (x(), S("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: u,
              class: "text-center py-4"
            }, [
              s.value ? (x(), S("div", t2, T[8] || (T[8] = [
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
              ]))) : L("", !0)
            ], 512)) : g.value ? (x(), S("div", n2, [
              f("button", {
                onClick: h,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (x(), S("span", o2, "Loading...")) : (x(), S("span", r2, "Load More (" + U(v.value) + " remaining)", 1))
              ], 8, s2)
            ])) : L("", !0),
            !e.enableInfiniteScroll && m.value > 1 ? (x(), S("nav", i2, [
              f("div", l2, [
                f("button", {
                  onClick: T[1] || (T[1] = (V) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, a2),
                f("button", {
                  onClick: T[2] || (T[2] = (V) => o.value++),
                  disabled: o.value === m.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, c2)
              ]),
              f("div", u2, [
                f("div", null, [
                  f("nav", d2, [
                    f("button", {
                      onClick: T[3] || (T[3] = (V) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, T[9] || (T[9] = [
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
                    ]), 8, f2),
                    (x(!0), S(ie, null, be($.value, (V) => (x(), S("button", {
                      key: V,
                      onClick: (C) => o.value = V,
                      class: ke([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === V ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, U(V), 11, p2))), 128)),
                    f("button", {
                      onClick: T[4] || (T[4] = (V) => o.value++),
                      disabled: o.value === m.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, T[10] || (T[10] = [
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
                    ]), 8, h2)
                  ])
                ])
              ])
            ])) : L("", !0)
          ])) : L("", !0)
        ], 2)
      ]),
      (x(), at(bn, { to: "body" }, [
        a.value ? (x(), S("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: qt(A, ["self"])
        }, [
          f("div", m2, [
            f("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: A
            }),
            f("div", g2, [
              f("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                f("button", {
                  onClick: A,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, T[11] || (T[11] = [
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
              f("div", v2, [
                f("h3", y2, U(a.value.title), 1),
                T[12] || (T[12] = f("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : L("", !0)
      ]))
    ]));
  }
}, _2 = { class: "collection-sort-wrapper" }, E2 = {
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
    }), (i, l) => (x(), S("div", _2, [
      Ue(f("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
        onChange: r,
        class: "px-4 py-2 min-w-[200px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        style: { borderRadius: "var(--button-radius)" }
      }, l[1] || (l[1] = [
        ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option><option value="created-ascending">Date: Old to New</option><option value="created-descending">Date: New to Old</option>', 8)
      ]), 544), [
        [Oo, n.value]
      ])
    ]));
  }
}, w2 = {
  key: 0,
  class: "ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white",
  style: { borderRadius: "9999px" }
}, x2 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, N2 = { class: "absolute inset-0 overflow-hidden" }, S2 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, k2 = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, C2 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, O2 = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, T2 = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, $2 = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, D2 = { class: "mb-6" }, V2 = { class: "flex items-center cursor-pointer" }, A2 = { class: "mb-6" }, I2 = { class: "space-y-2" }, M2 = ["value"], P2 = { class: "ml-2 text-sm" }, R2 = {
  key: 0,
  class: "mb-6"
}, L2 = { class: "space-y-2" }, F2 = ["value"], B2 = { class: "ml-2 text-sm" }, j2 = {
  key: 1,
  class: "mb-6"
}, H2 = { class: "space-y-2" }, U2 = ["value"], q2 = { class: "ml-2 text-sm" }, z2 = {
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
    }, u = () => {
      n.value = !1, document.body.style.overflow = "";
    }, d = () => {
      const p = new URLSearchParams(window.location.search);
      p.delete("filter.v.availability"), p.delete("filter.v.price"), p.delete("filter.p.product_type"), p.delete("filter.p.vendor"), s.value.inStock && p.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((g) => {
        p.append("filter.price.range", g);
      }), s.value.types.length > 0 && s.value.types.forEach((g) => {
        p.append("filter.p.product_type", g);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((g) => {
        p.append("filter.p.vendor", g);
      });
      const m = `${window.location.pathname}${p.toString() ? "?" + p.toString() : ""}`;
      window.location.href = m;
    }, c = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const p = new URLSearchParams(window.location.search), m = [];
      for (const [$] of p)
        $.startsWith("filter.") && m.push($);
      m.forEach(($) => p.delete($));
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
      const v = p.getAll("filter.price.range");
      v.length > 0 && (s.value.priceRanges = v);
    }), Be(() => () => {
      document.body.style.overflow = "";
    }), (p, m) => (x(), S("div", null, [
      f("button", {
        onClick: a,
        class: "flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors",
        style: { borderRadius: "var(--button-radius)" }
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
        l.value > 0 ? (x(), S("span", w2, U(l.value), 1)) : L("", !0)
      ]),
      (x(), at(bn, { to: "body" }, [
        ue(st, { name: "drawer" }, {
          default: Me(() => [
            n.value ? (x(), S("div", x2, [
              f("div", N2, [
                ue(st, { name: "fade" }, {
                  default: Me(() => [
                    n.value ? (x(), S("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: u
                    })) : L("", !0)
                  ]),
                  _: 1
                }),
                f("div", S2, [
                  ue(st, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Me(() => [
                      n.value ? (x(), S("div", k2, [
                        f("div", C2, [
                          f("div", O2, [
                            f("div", null, [
                              m[6] || (m[6] = f("h2", { class: "text-lg font-medium text-gray-900" }, "Filters", -1)),
                              l.value > 0 ? (x(), S("p", T2, U(l.value) + " " + U(l.value === 1 ? "filter" : "filters") + " active ", 1)) : L("", !0)
                            ]),
                            f("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: u
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
                          f("div", $2, [
                            f("div", D2, [
                              m[9] || (m[9] = f("h3", { class: "font-medium mb-3" }, "Availability", -1)),
                              f("label", V2, [
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
                            f("div", A2, [
                              m[10] || (m[10] = f("h3", { class: "font-medium mb-3" }, "Price", -1)),
                              f("div", I2, [
                                (x(), S(ie, null, be(o, (g) => f("label", {
                                  key: g.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Ue(f("input", {
                                    type: "checkbox",
                                    value: g.value,
                                    "onUpdate:modelValue": m[1] || (m[1] = (v) => s.value.priceRanges = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, M2), [
                                    [_t, s.value.priceRanges]
                                  ]),
                                  f("span", P2, U(g.label), 1)
                                ])), 64))
                              ])
                            ]),
                            r.value.length > 0 ? (x(), S("div", R2, [
                              m[11] || (m[11] = f("h3", { class: "font-medium mb-3" }, "Product Type", -1)),
                              f("div", L2, [
                                (x(!0), S(ie, null, be(r.value, (g) => (x(), S("label", {
                                  key: g,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Ue(f("input", {
                                    type: "checkbox",
                                    value: g,
                                    "onUpdate:modelValue": m[2] || (m[2] = (v) => s.value.types = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, F2), [
                                    [_t, s.value.types]
                                  ]),
                                  f("span", B2, U(g), 1)
                                ]))), 128))
                              ])
                            ])) : L("", !0),
                            i.value.length > 0 ? (x(), S("div", j2, [
                              m[12] || (m[12] = f("h3", { class: "font-medium mb-3" }, "Brand", -1)),
                              f("div", H2, [
                                (x(!0), S(ie, null, be(i.value, (g) => (x(), S("label", {
                                  key: g,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Ue(f("input", {
                                    type: "checkbox",
                                    value: g,
                                    "onUpdate:modelValue": m[3] || (m[3] = (v) => s.value.vendors = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, U2), [
                                    [_t, s.value.vendors]
                                  ]),
                                  f("span", q2, U(g), 1)
                                ]))), 128))
                              ])
                            ])) : L("", !0)
                          ]),
                          f("div", { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, [
                            f("button", {
                              onClick: d,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Apply Filters "),
                            f("button", {
                              onClick: c,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Clear All ")
                          ])
                        ])
                      ])) : L("", !0)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])) : L("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, K2 = /* @__PURE__ */ We(z2, [["__scopeId", "data-v-5d8cdc55"]]), W2 = { class: "product-gallery" }, G2 = { class: "main-image-wrapper" }, Y2 = ["src", "alt"], J2 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, X2 = {
  key: 0,
  class: "thumbnails-wrapper"
}, Q2 = ["disabled"], Z2 = ["onClick", "aria-label"], eE = ["src", "alt"], tE = ["disabled"], nE = {
  key: 1,
  class: "swiper-dots"
}, sE = ["onClick", "aria-label"], oE = ["src", "alt"], rE = { class: "lightbox-counter" }, iE = 80, qo = 4, Tc = 2, lE = {
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
    const t = e, n = q(0), s = q(!1), o = q(!1), r = q(!1), i = q(!1), l = q(0), a = q(null), u = q(0), d = q(0), c = q({}), p = Z(() => t.images.map((P) => {
      if (P.src)
        return P;
      const D = P.url || P;
      return {
        src: `${D}?width=${t.imageTransformWidth}`,
        thumbnail: `${D}?width=${t.thumbnailWidth}`,
        alt: P.alt || t.productTitle
      };
    })), m = Z(() => p.value[n.value] || { src: "", alt: "" }), g = Z(() => ({
      width: "150px",
      height: "150px",
      left: `${u.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), v = Z(() => {
      const D = u.value / c.value.width * 100, w = d.value / c.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${c.value.width * Tc}px ${c.value.height * Tc}px`,
        backgroundPosition: `${D}% ${w}%`
      };
    }), $ = (P) => {
      s.value = !0, n.value = P;
    }, k = (P) => {
      P === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - qo,
        l.value + 1
      );
    }, y = (P) => {
      n.value = P, o.value = !0, document.body.style.overflow = "hidden";
    }, h = () => {
      o.value = !1, document.body.style.overflow = "";
    }, E = (P) => {
      P === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, b = (P) => {
      const D = P.currentTarget.getBoundingClientRect();
      c.value = D, u.value = P.clientX - D.left, d.value = P.clientY - D.top;
    }, { lengthX: A } = X1(
      a,
      {
        onSwipeEnd() {
          A.value > 50 ? k("prev") : A.value < -50 && k("next");
        }
      }
    );
    return Be(() => {
      i.value = window.innerWidth < 768;
      const P = () => {
        i.value = window.innerWidth < 768;
      }, D = (w) => {
        o.value && (w.key === "Escape" && h(), w.key === "ArrowLeft" && E("prev"), w.key === "ArrowRight" && E("next"));
      };
      window.addEventListener("resize", P), window.addEventListener("keydown", D), Ct(() => {
        window.removeEventListener("resize", P), window.removeEventListener("keydown", D);
      });
    }), (P, D) => (x(), S("div", W2, [
      f("div", G2, [
        f("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: D[1] || (D[1] = (w) => y(n.value)),
          onMouseenter: D[2] || (D[2] = (w) => r.value = !0),
          onMouseleave: D[3] || (D[3] = (w) => r.value = !1),
          onMousemove: b
        }, [
          f("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: ke(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: D[0] || (D[0] = (w) => s.value = !1)
          }, null, 42, Y2),
          s.value ? (x(), S("div", J2, D[9] || (D[9] = [
            f("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : L("", !0),
          D[10] || (D[10] = f("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
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
          r.value && !i.value ? (x(), S("div", {
            key: 1,
            class: "zoom-lens",
            style: Ge(g.value)
          }, null, 4)) : L("", !0)
        ], 32),
        r.value && !i.value ? (x(), S("div", {
          key: 0,
          class: "zoom-preview",
          style: Ge(v.value)
        }, null, 4)) : L("", !0)
      ]),
      p.value.length > 1 ? (x(), S("div", X2, [
        p.value.length > qo ? (x(), S("button", {
          key: 0,
          onClick: D[4] || (D[4] = (w) => k("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, D[11] || (D[11] = [
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
        ]), 8, Q2)) : L("", !0),
        f("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          f("div", {
            class: "thumbnails-track",
            style: Ge({ transform: `translateX(-${l.value * (iE + 8)}px)` })
          }, [
            (x(!0), S(ie, null, be(p.value, (w, T) => (x(), S("button", {
              key: T,
              onClick: (V) => $(T),
              class: ke(["thumbnail", { active: T === n.value }]),
              "aria-label": `View image ${T + 1}`
            }, [
              f("img", {
                src: w.thumbnail || w.src,
                alt: w.alt,
                class: "w-full h-full object-contain"
              }, null, 8, eE)
            ], 10, Z2))), 128))
          ], 4)
        ], 512),
        p.value.length > qo ? (x(), S("button", {
          key: 1,
          onClick: D[5] || (D[5] = (w) => k("next")),
          disabled: l.value >= p.value.length - qo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, D[12] || (D[12] = [
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
        ]), 8, tE)) : L("", !0)
      ])) : L("", !0),
      p.value.length > 1 && i.value ? (x(), S("div", nE, [
        (x(!0), S(ie, null, be(p.value, (w, T) => (x(), S("button", {
          key: T,
          onClick: (V) => $(T),
          class: ke(["swiper-dot", { active: T === n.value }]),
          "aria-label": `Go to image ${T + 1}`
        }, null, 10, sE))), 128))
      ])) : L("", !0),
      (x(), at(bn, { to: "body" }, [
        o.value ? (x(), S("div", {
          key: 0,
          class: "lightbox",
          onClick: h
        }, [
          f("button", {
            onClick: h,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, D[13] || (D[13] = [
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
          p.value.length > 1 ? (x(), S("button", {
            key: 0,
            onClick: D[6] || (D[6] = qt((w) => E("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, D[14] || (D[14] = [
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
          ]))) : L("", !0),
          f("div", {
            class: "lightbox-image-wrapper",
            onClick: D[7] || (D[7] = qt(() => {
            }, ["stop"]))
          }, [
            f("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, oE)
          ]),
          p.value.length > 1 ? (x(), S("button", {
            key: 1,
            onClick: D[8] || (D[8] = qt((w) => E("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, D[15] || (D[15] = [
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
          ]))) : L("", !0),
          f("div", rE, U(n.value + 1) + " / " + U(p.value.length), 1)
        ])) : L("", !0)
      ]))
    ]));
  }
}, aE = /* @__PURE__ */ We(lE, [["__scopeId", "data-v-a7c1d2a3"]]), cE = { class: "product-info" }, uE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, dE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, fE = { class: "price-wrapper mb-6" }, pE = { class: "flex items-baseline gap-3" }, hE = { class: "text-3xl font-semibold text-gray-900" }, mE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, gE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, vE = {
  key: 1,
  class: "mb-6"
}, yE = ["product", "current-variant"], bE = ["value"], _E = { class: "mb-4" }, EE = ["max"], wE = { class: "mb-4" }, xE = {
  key: 0,
  class: "text-red-600 font-medium"
}, NE = {
  key: 1,
  class: "text-amber-600"
}, SE = {
  key: 2,
  class: "text-green-600"
}, kE = { class: "flex flex-col sm:flex-row gap-3" }, CE = ["disabled"], OE = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, TE = { key: 1 }, $E = { key: 2 }, DE = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, VE = ["innerHTML"], AE = { class: "space-y-4" }, IE = {
  key: 0,
  class: "group"
}, ME = ["innerHTML"], PE = {
  key: 1,
  class: "group"
}, RE = { class: "mt-8 pt-8 border-t" }, LE = { class: "flex gap-3" }, FE = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, BE = {
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
    const n = e, s = t, o = q(n.product.selected_or_first_available_variant || (($ = n.product.variants) == null ? void 0 : $[0]) || {}), r = q(1), i = q(!1), l = q(!1), a = Z(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), u = Z(() => {
      var k;
      return (k = n.product.options) == null ? void 0 : k.some(
        (y) => y.name.toLowerCase() === "size" || y.name.toLowerCase() === "taille"
      );
    }), d = (k) => `$${(k / 100).toFixed(2)}`, c = (k) => {
      o.value = k, s("variant-change", k);
      const y = new URL(window.location);
      y.searchParams.set("variant", k.id), window.history.replaceState({}, "", y);
    }, p = async () => {
      var y;
      i.value = !0;
      const k = new FormData();
      k.append("id", o.value.id), k.append("quantity", r.value);
      try {
        await ((y = window.OrionCart) == null ? void 0 : y.addItem(k));
        const h = event.target, E = h.textContent;
        h.textContent = "✓ Added to Cart", setTimeout(() => {
          h.textContent = E;
        }, 2e3);
      } catch (h) {
        console.error("Failed to add to cart:", h), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, g = (k) => {
      const y = window.location.href, h = n.product.title, E = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(y)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(y)}&text=${encodeURIComponent(h)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(y)}&description=${encodeURIComponent(h)}`
      };
      E[k] && window.open(E[k], "_blank", "width=600,height=400");
    }, v = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (k) {
        console.error("Failed to copy link:", k);
      }
    };
    return sn(() => n.product.selected_variant, (k) => {
      k && (o.value = k);
    }), (k, y) => (x(), S("div", cE, [
      f("h1", uE, U(e.product.title), 1),
      e.product.vendor ? (x(), S("p", dE, " by " + U(e.product.vendor), 1)) : L("", !0),
      f("div", fE, [
        f("div", pE, [
          f("span", hE, U(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (x(), S("span", mE, U(d(o.value.compare_at_price)), 1)) : L("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (x(), S("p", gE, " Save " + U(d(o.value.compare_at_price - o.value.price)) + " (" + U(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : L("", !0)
      ]),
      e.product.has_only_default_variant ? L("", !0) : (x(), S("div", vE, [
        f("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: c
        }, null, 40, yE)
      ])),
      f("form", {
        onSubmit: qt(p, ["prevent"]),
        class: "mb-8"
      }, [
        f("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, bE),
        f("div", _E, [
          y[4] || (y[4] = f("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          Ue(f("quantity-selector", {
            "onUpdate:modelValue": y[0] || (y[0] = (h) => r.value = h),
            min: 1,
            max: a.value
          }, null, 8, EE), [
            [Fn, r.value]
          ])
        ]),
        f("div", wE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (x(), S("p", NE, " Only " + U(o.value.inventory_quantity) + " left in stock ", 1)) : (x(), S("p", SE, " ✓ In Stock ")) : (x(), S("p", xE, " Out of Stock "))
        ]),
        f("div", kE, [
          f("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || i.value
          }, [
            i.value ? (x(), S("span", OE, y[5] || (y[5] = [
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
            ]))) : o.value.available ? (x(), S("span", $E, " Add to Cart ")) : (x(), S("span", TE, " Sold Out "))
          ], 8, CE),
          e.showBuyNow ? (x(), at(ss, {
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
          }, 8, ["disabled"])) : L("", !0)
        ])
      ], 32),
      e.product.description ? (x(), S("div", DE, [
        y[7] || (y[7] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        f("div", {
          innerHTML: e.product.description
        }, null, 8, VE)
      ])) : L("", !0),
      f("div", AE, [
        y[10] || (y[10] = ls('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (x(), S("details", IE, [
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
          }, null, 8, ME)
        ])) : L("", !0),
        u.value ? (x(), S("details", PE, y[9] || (y[9] = [
          ls('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : L("", !0)
      ]),
      f("div", RE, [
        y[15] || (y[15] = f("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        f("div", LE, [
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
            l.value ? (x(), S("span", FE, " Link copied! ")) : L("", !0)
          ])
        ])
      ])
    ]));
  }
}, jE = /* @__PURE__ */ We(BE, [["__scopeId", "data-v-9e2c3b5c"]]), HE = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, UE = { class: "space-y-3 mb-4" }, qE = { class: "flex justify-between text-sm" }, zE = { class: "text-gray-600" }, KE = { class: "font-medium text-gray-900" }, WE = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, GE = {
  key: 1,
  class: "flex justify-between text-sm"
}, YE = { class: "text-gray-900" }, JE = {
  key: 2,
  class: "flex justify-between text-sm"
}, XE = { class: "text-gray-900" }, QE = { class: "border-t pt-4 mb-6" }, ZE = { class: "flex justify-between items-baseline" }, ew = { class: "text-right" }, tw = { class: "text-xl font-bold text-gray-900" }, nw = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, sw = { class: "mb-6" }, ow = { class: "group" }, rw = { class: "mt-3" }, iw = ["disabled"], lw = ["disabled"], aw = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, cw = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, uw = ["disabled"], dw = {
  key: 0,
  class: "flex items-center gap-2"
}, fw = { key: 1 }, pw = {
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
    const n = e, s = t, o = q(""), r = q(""), i = q(""), l = q(!1), a = q(!1), u = q(!1), d = Z(() => n.cart.item_count || 0), c = Z(() => n.cart.total_price || 0), p = Z(() => n.cart.original_total_price || n.cart.total_price || 0), m = Z(() => n.cart.total_discount || 0), g = Z(() => c.value >= 5e3 ? 0 : 500), v = Z(() => Math.round(c.value * 0.1)), $ = (h) => `$${(h / 100).toFixed(2)}`, k = async () => {
      var h;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, r.value = "", i.value = "";
        try {
          const E = new FormData();
          E.append("discount_code", o.value);
          const b = await fetch("/discount/apply", {
            method: "POST",
            body: E
          });
          if (b.ok)
            i.value = "Promo code applied successfully!", o.value = "", await ((h = window.OrionCart) == null ? void 0 : h.fetchCart());
          else {
            const A = await b.json();
            r.value = A.message || "Invalid promo code";
          }
        } catch (E) {
          console.error("Failed to apply promo code:", E), r.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, y = async () => {
      if (!(d.value === 0 || a.value)) {
        a.value = !0;
        try {
          s("checkout"), window.location.href = "/checkout";
        } catch (h) {
          console.error("Failed to proceed to checkout:", h), alert("Failed to proceed to checkout. Please try again.");
        } finally {
          a.value = !1;
        }
      }
    };
    return (h, E) => (x(), S("div", HE, [
      E[10] || (E[10] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      f("div", UE, [
        f("div", qE, [
          f("span", zE, "Subtotal (" + U(d.value) + " " + U(d.value === 1 ? "item" : "items") + ")", 1),
          f("span", KE, U($(p.value)), 1)
        ]),
        m.value > 0 ? (x(), S("div", WE, [
          E[3] || (E[3] = f("span", { class: "flex items-center gap-1" }, [
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
          f("span", null, "-" + U($(m.value)), 1)
        ])) : L("", !0),
        e.showShipping ? (x(), S("div", GE, [
          E[4] || (E[4] = f("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          f("span", YE, U(g.value === 0 ? "Free" : $(g.value)), 1)
        ])) : L("", !0),
        e.showTax ? (x(), S("div", JE, [
          E[5] || (E[5] = f("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          f("span", XE, U($(v.value)), 1)
        ])) : L("", !0)
      ]),
      f("div", QE, [
        f("div", ZE, [
          E[6] || (E[6] = f("span", { class: "text-lg font-semibold" }, "Total", -1)),
          f("div", ew, [
            f("span", tw, U($(c.value)), 1),
            m.value > 0 ? (x(), S("p", nw, " You saved " + U($(m.value)) + "! ", 1)) : L("", !0)
          ])
        ])
      ]),
      f("div", sw, [
        f("details", ow, [
          E[7] || (E[7] = f("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          f("div", rw, [
            f("form", {
              onSubmit: qt(k, ["prevent"]),
              class: "flex gap-2"
            }, [
              Ue(f("input", {
                "onUpdate:modelValue": E[0] || (E[0] = (b) => o.value = b),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, iw), [
                [Fn, o.value]
              ]),
              f("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !o.value.trim() || l.value
              }, U(l.value ? "Applying..." : "Apply"), 9, lw)
            ], 32),
            r.value ? (x(), S("p", aw, U(r.value), 1)) : L("", !0),
            i.value ? (x(), S("p", cw, U(i.value), 1)) : L("", !0)
          ])
        ])
      ]),
      f("button", {
        onClick: y,
        class: "w-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: Ge({
          backgroundColor: u.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: E[1] || (E[1] = (b) => u.value = !0),
        onMouseleave: E[2] || (E[2] = (b) => u.value = !1),
        disabled: d.value === 0 || a.value
      }, [
        a.value ? (x(), S("span", dw, E[8] || (E[8] = [
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
        ]))) : (x(), S("span", fw, E[9] || (E[9] = [
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
      ], 44, uw),
      E[11] || (E[11] = ls('<div class="mt-6 space-y-2" data-v-bd5cec1c><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-bd5cec1c></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-bd5cec1c></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-bd5cec1c></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-bd5cec1c></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-bd5cec1c><p class="text-xs text-gray-600 mb-2" data-v-bd5cec1c>We accept</p><div class="flex gap-2" data-v-bd5cec1c><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-bd5cec1c></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-bd5cec1c></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#EB001B" data-v-bd5cec1c></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-bd5cec1c></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-bd5cec1c></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-bd5cec1c></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-bd5cec1c></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#253B80" data-v-bd5cec1c></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-bd5cec1c></path></svg></div></div>', 2))
    ]));
  }
}, hw = /* @__PURE__ */ We(pw, [["__scopeId", "data-v-bd5cec1c"]]), mw = { class: "slideshow-banner" }, gw = {
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
      const v = document.querySelector(".slideshow-prev"), $ = document.querySelector(".slideshow-next"), k = document.querySelectorAll(".slide-indicator");
      v && v.addEventListener("click", d), $ && $.addEventListener("click", u), k.forEach((y, h) => {
        y.addEventListener("click", () => a(h));
      }), r.value && c();
    }, a = (v) => {
      var y, h, E, b;
      if (v === n.value || !s.value.length) return;
      (y = s.value[n.value]) == null || y.classList.remove("opacity-100"), (h = s.value[n.value]) == null || h.classList.add("opacity-0");
      const $ = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      $ == null || $.classList.remove("opacity-100"), $ == null || $.classList.add("opacity-50"), n.value = v, (E = s.value[n.value]) == null || E.classList.remove("opacity-0"), (b = s.value[n.value]) == null || b.classList.add("opacity-100");
      const k = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      k == null || k.classList.remove("opacity-50"), k == null || k.classList.add("opacity-100");
    }, u = () => {
      const v = (n.value + 1) % s.value.length;
      a(v);
    }, d = () => {
      const v = n.value === 0 ? s.value.length - 1 : n.value - 1;
      a(v);
    }, c = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        u();
      }, i.value);
    }, p = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, m = () => {
      r.value && p();
    }, g = () => {
      r.value && c();
    };
    return Be(() => {
      setTimeout(l, 100);
      const v = document.querySelector(".slideshow-wrapper");
      v && (v.addEventListener("mouseenter", m), v.addEventListener("mouseleave", g));
    }), Ct(() => {
      p();
      const v = document.querySelector(".slideshow-wrapper");
      v && (v.removeEventListener("mouseenter", m), v.removeEventListener("mouseleave", g));
    }), (v, $) => (x(), S("div", mw, [
      jn(v.$slots, "default", {}, void 0, !0)
    ]));
  }
}, vw = /* @__PURE__ */ We(gw, [["__scopeId", "data-v-8690c751"]]), yw = { class: "testimonials-carousel relative" }, bw = {
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
      const b = document.querySelector(".testimonials-prev"), A = document.querySelector(".testimonials-next"), P = document.querySelectorAll(".testimonial-indicator");
      b && b.addEventListener("click", c), A && A.addEventListener("click", d), P.forEach((D, w) => {
        D.addEventListener("click", () => u(w));
      }), i.value && p();
    }, u = (b) => {
      if (b === n.value || !s.value.length || !r.value) return;
      n.value = b;
      const P = -s.value[0].offsetWidth * n.value;
      r.value.style.transform = `translateX(${P}px)`, document.querySelectorAll(".testimonial-indicator").forEach((w, T) => {
        T === n.value ? (w.classList.remove("bg-gray-300"), w.classList.add("bg-red-600")) : (w.classList.remove("bg-red-600"), w.classList.add("bg-gray-300"));
      });
    }, d = () => {
      const b = (n.value + 1) % s.value.length;
      u(b);
    }, c = () => {
      const b = n.value === 0 ? s.value.length - 1 : n.value - 1;
      u(b);
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
    let $ = 0, k = 0;
    const y = (b) => {
      $ = b.changedTouches[0].screenX;
    }, h = (b) => {
      k = b.changedTouches[0].screenX, E();
    }, E = () => {
      const A = $ - k;
      Math.abs(A) > 50 && (A > 0 ? d() : c());
    };
    return Be(() => {
      setTimeout(a, 100);
      const b = document.querySelector(".testimonials-wrapper");
      b && (b.addEventListener("mouseenter", g), b.addEventListener("mouseleave", v), b.addEventListener("touchstart", y), b.addEventListener("touchend", h));
    }), Ct(() => {
      m();
      const b = document.querySelector(".testimonials-wrapper");
      b && (b.removeEventListener("mouseenter", g), b.removeEventListener("mouseleave", v), b.removeEventListener("touchstart", y), b.removeEventListener("touchend", h));
    }), (b, A) => (x(), S("div", yw, [
      jn(b.$slots, "default", {}, void 0, !0)
    ]));
  }
}, _w = /* @__PURE__ */ We(bw, [["__scopeId", "data-v-276cc4e8"]]), Ew = { class: "video-player relative w-full h-full" }, ww = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, xw = ["src", "title"], Nw = {
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
    const t = e, n = q(!1), s = q(""), o = q(""), r = Z(() => t.autoplay === !0 || t.autoplay === "true"), i = Z(() => t.muted === !0 || t.muted === "true"), l = Z(() => t.controls === !0 || t.controls === "true"), a = Z(() => `${s.value} video player`), u = Z(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const g = r.value ? "1" : "0", v = i.value ? "1" : "0", $ = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${g}&mute=${v}&controls=${$}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${g}&muted=${v}&controls=${$}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
      if (!m) return { type: "", id: "" };
      const g = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const $ of g) {
        const k = m.match($);
        if (k)
          return { type: "youtube", id: k[1] };
      }
      const v = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const $ of v) {
        const k = m.match($);
        if (k)
          return { type: "vimeo", id: k[1] };
      }
      return { type: "", id: "" };
    }, c = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      r.value && o.value && s.value && (n.value = !0);
    };
    return Be(() => {
      const m = d(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const g = document.querySelector(".play-button");
      g && g.addEventListener("click", c), p();
    }), (m, g) => (x(), S("div", Ew, [
      n.value ? (x(), S("div", ww, [
        f("iframe", {
          src: u.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, xw)
      ])) : (x(), S("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: c
      }, [
        jn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, Sw = /* @__PURE__ */ We(Nw, [["__scopeId", "data-v-540fecb2"]]), kw = { class: "password-modal" }, Cw = {
  __name: "PasswordModal",
  setup(e) {
    const t = q(!1), n = () => {
      t.value = !0, document.body.style.overflow = "hidden";
    }, s = () => {
      t.value = !1, document.body.style.overflow = "";
    }, o = (u) => {
      u.preventDefault(), t.value ? s() : n();
    }, r = (u) => {
      u.key === "Escape" && t.value && s();
    }, i = (u) => {
      const d = document.querySelector(".password-content"), c = document.querySelector(".password-toggle");
      t.value && d && !d.contains(u.target) && !c.contains(u.target) && s();
    };
    Be(() => {
      const u = document.querySelector(".password-toggle");
      u && u.addEventListener("click", o), document.addEventListener("keydown", r), document.addEventListener("click", i), setTimeout(() => {
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
    return Be(() => {
      a(() => {
        l();
      });
    }), (u, d) => (x(), S("div", kw, [
      jn(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Ow = /* @__PURE__ */ We(Cw, [["__scopeId", "data-v-075988c6"]]), Tw = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, $w = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, Dw = { class: "bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20" }, Vw = { class: "max-w-6xl mx-auto" }, Aw = { class: "relative" }, Iw = { class: "px-4 py-8 sm:px-6 lg:px-8" }, Mw = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, Pw = { class: "flex-1 relative group" }, Rw = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, Lw = {
  key: 0,
  class: "relative"
}, Fw = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, Bw = { class: "flex flex-wrap gap-2" }, jw = ["onClick"], Hw = {
  key: 0,
  class: "border-t border-gray-100"
}, Uw = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, qw = {
  key: 0,
  class: "p-6"
}, zw = { class: "animate-pulse" }, Kw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Ww = {
  key: 1,
  class: "p-6"
}, Gw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Yw = ["href"], Jw = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, Xw = ["src", "alt"], Qw = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, Zw = { class: "flex-1 min-w-0" }, ex = { class: "text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2" }, tx = { class: "mt-1 flex items-center gap-2" }, nx = { class: "text-sm font-semibold text-gray-900" }, sx = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, ox = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, rx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, ix = ["href"], lx = { class: "text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors" }, ax = {
  key: 3,
  class: "p-12 text-center"
}, cx = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, ux = ["href"], dx = {
  __name: "SearchOverlay",
  setup(e) {
    const t = q(!1), n = q(""), s = q(null), o = q(!1), r = q({
      products: [],
      collections: []
    }), i = q(null), l = Z(() => {
      var k;
      return ((k = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : k.search) || "/search";
    }), a = Z(() => n.value.length > 0), u = Z(() => {
      var h, E;
      const k = [], y = ((E = (h = window.Shopline) == null ? void 0 : h.theme) == null ? void 0 : E.settings) || {};
      for (let b = 1; b <= 6; b++) {
        const A = y[`popular_search_${b}`];
        A && A.trim() && k.push(A.trim());
      }
      return k.length === 0 ? ["New Arrivals", "Best Sellers", "Sale", "Summer Collection"] : k;
    }), d = (k) => {
      var A, P;
      if (!k && k !== 0) return "$0.00";
      const y = ((A = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : A.money_format) || "${{amount}}", h = ((P = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : P.current) || "en", b = new Intl.NumberFormat(h, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(k));
      return y.replace("{{amount}}", b);
    }, c = async () => {
      var k;
      t.value = !0, document.body.style.overflow = "hidden", await Ls(), (k = s.value) == null || k.focus();
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
      var k;
      try {
        const y = ((k = window.routes) == null ? void 0 : k.predictive_search_url) || "/search/suggest", h = await fetch(
          `${y}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (h.ok) {
          const E = await h.text(), P = new DOMParser().parseFromString(E, "text/html").querySelectorAll(".predictive-search__list-item"), D = Array.from(P).map((w) => {
            var z, K;
            const T = w.querySelector("a"), V = w.querySelector("img"), C = w.querySelector(".predictive-search__item-head"), M = w.querySelector(".price__item");
            return {
              url: (T == null ? void 0 : T.href) || "#",
              image: (V == null ? void 0 : V.src) || "",
              title: ((z = C == null ? void 0 : C.textContent) == null ? void 0 : z.trim()) || "",
              price: ((K = M == null ? void 0 : M.textContent) == null ? void 0 : K.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          r.value = {
            products: D,
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
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(n.value)}`);
    }, $ = (k) => {
      k.key === "Escape" && t.value && p();
    };
    return Be(() => {
      document.addEventListener("search-overlay:open", c), document.addEventListener("search-overlay:close", p), document.addEventListener("keydown", $);
    }), Ct(() => {
      document.removeEventListener("search-overlay:open", c), document.removeEventListener("search-overlay:close", p), document.removeEventListener("keydown", $);
    }), (k, y) => (x(), at(bn, { to: "body" }, [
      ue(st, { name: "search-overlay" }, {
        default: Me(() => [
          t.value ? (x(), S("div", Tw, [
            ue(st, { name: "fade" }, {
              default: Me(() => [
                t.value ? (x(), S("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-all duration-300",
                  onClick: p
                })) : L("", !0)
              ]),
              _: 1
            }),
            ue(st, {
              name: "slide-down",
              appear: ""
            }, {
              default: Me(() => {
                var h, E;
                return [
                  t.value ? (x(), S("div", $w, [
                    f("div", Dw, [
                      f("div", Vw, [
                        f("div", Aw, [
                          f("div", Iw, [
                            f("div", Mw, [
                              f("div", Pw, [
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
                                  "onUpdate:modelValue": y[0] || (y[0] = (b) => n.value = b),
                                  type: "search",
                                  placeholder: "Search for products, collections...",
                                  class: "search-input w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200",
                                  style: { borderRadius: "var(--button-radius, 16px)" },
                                  onInput: m,
                                  onKeydown: [
                                    _r(p, ["escape"]),
                                    _r(v, ["enter"])
                                  ]
                                }, null, 544), [
                                  [Fn, n.value]
                                ]),
                                f("div", Rw, [
                                  o.value ? (x(), S("div", Lw, y[2] || (y[2] = [
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (x(), S("button", {
                                    key: 1,
                                    onClick: y[1] || (y[1] = (b) => n.value = ""),
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
                                  ]))) : L("", !0)
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
                            !n.value && !o.value ? (x(), S("div", Fw, [
                              y[6] || (y[6] = f("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              f("div", Bw, [
                                (x(!0), S(ie, null, be(u.value, (b) => (x(), S("button", {
                                  key: b,
                                  onClick: (A) => {
                                    n.value = b, v();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, U(b), 9, jw))), 128))
                              ])
                            ])) : L("", !0)
                          ]),
                          a.value ? (x(), S("div", Hw, [
                            f("div", Uw, [
                              o.value ? (x(), S("div", qw, [
                                f("div", zw, [
                                  y[8] || (y[8] = f("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  f("div", Kw, [
                                    (x(), S(ie, null, be(4, (b) => f("div", {
                                      key: b,
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
                              ])) : r.value.products && r.value.products.length > 0 ? (x(), S("div", Ww, [
                                y[10] || (y[10] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                f("div", Gw, [
                                  (x(!0), S(ie, null, be(r.value.products, (b) => (x(), S("a", {
                                    key: b.id,
                                    href: b.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: p
                                  }, [
                                    f("div", Jw, [
                                      b.image ? (x(), S("img", {
                                        key: 0,
                                        src: b.image,
                                        alt: b.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, Xw)) : (x(), S("div", Qw, y[9] || (y[9] = [
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
                                    f("div", Zw, [
                                      f("p", ex, U(b.title), 1),
                                      f("div", tx, [
                                        f("p", nx, U(d(b.price)), 1),
                                        b.compareAtPrice && b.compareAtPrice > b.price ? (x(), S("p", sx, U(d(b.compareAtPrice)), 1)) : L("", !0)
                                      ])
                                    ])
                                  ], 8, Yw))), 128))
                                ])
                              ])) : L("", !0),
                              r.value.collections && r.value.collections.length > 0 ? (x(), S("div", ox, [
                                y[12] || (y[12] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                f("div", rx, [
                                  (x(!0), S(ie, null, be(r.value.collections, (b) => (x(), S("a", {
                                    key: b.id,
                                    href: b.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: p
                                  }, [
                                    f("span", lx, U(b.title), 1),
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
                                  ], 8, ix))), 128))
                                ])
                              ])) : L("", !0),
                              n.value && !o.value && (!r.value.products || r.value.products.length === 0) && (!r.value.collections || r.value.collections.length === 0) ? (x(), S("div", ax, y[13] || (y[13] = [
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
                              ]))) : L("", !0)
                            ]),
                            n.value && (((h = r.value.products) == null ? void 0 : h.length) > 0 || ((E = r.value.collections) == null ? void 0 : E.length) > 0) ? (x(), S("div", cx, [
                              f("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: p
                              }, [
                                Fe(' View all results for "' + U(n.value) + '" ', 1),
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
                              ], 8, ux)
                            ])) : L("", !0)
                          ])) : L("", !0)
                        ])
                      ])
                    ])
                  ])) : L("", !0)
                ];
              }),
              _: 1
            })
          ])) : L("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, fx = /* @__PURE__ */ We(dx, [["__scopeId", "data-v-985e236a"]]), px = {
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
    const t = q(!1), n = Z(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), s = Z(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: t.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), o = Z(() => {
      if (!e.tags) return [];
      if (typeof e.tags == "string")
        try {
          const a = JSON.parse(e.tags);
          return Array.isArray(a) ? a : [];
        } catch {
          return [];
        }
      return Array.isArray(e.tags) ? e.tags : [];
    }), r = Z(() => {
      if (!e.image) return "";
      if (typeof e.image == "string" && e.image.startsWith("{"))
        try {
          const a = JSON.parse(e.image);
          return a.mediaUrl || a.url || "";
        } catch {
          return e.image;
        }
      return e.image;
    }), i = Z(() => {
      var u, d;
      if (e.publishedAt && e.publishedAt.trim() && !e.publishedAt.match(/^\d+$/) && // Not just a timestamp
      !e.publishedAt.includes("T") && // Not ISO date format
      !e.publishedAt.match(/^\d{4}-\d{2}-\d{2}/) && // Not YYYY-MM-DD format
      e.publishedAt.length < 20)
        return e.publishedAt;
      const a = e.rawPublishedAt || e.publishedAt;
      if (!a) return "";
      try {
        let c;
        const p = String(a).trim();
        if (/^\d+$/.test(p)) {
          const g = parseInt(p);
          c = new Date(g > 1e12 ? g : g * 1e3);
        } else if (typeof a == "string")
          c = new Date(a);
        else
          return "";
        if (isNaN(c.getTime()) || c.getFullYear() < 1900 || c.getFullYear() > 2100)
          return console.warn("Invalid or unreasonable date:", a, "parsed as:", c), "";
        const m = typeof window < "u" && typeof window.Shopline < "u" && ((d = (u = window.Shopline) == null ? void 0 : u.locale) == null ? void 0 : d.current) || "en";
        return new Intl.DateTimeFormat(m, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(c);
      } catch (c) {
        return console.warn("Error formatting date:", c, a), "";
      }
    }), l = Z(() => {
      if (!e.content) return "";
      const a = e.content.replace(/<[^>]*>/g, "");
      return a.length <= 150 ? a : a.substring(0, 150).trim() + "...";
    });
    return {
      imageAspectClass: n,
      processedTags: o,
      processedImage: r,
      formattedDate: i,
      truncatedContent: l,
      cardStyles: s,
      isHovered: t
    };
  }
}, hx = ["href"], mx = ["src", "alt"], gx = { class: "relative p-6 flex-1 flex flex-col z-10" }, vx = {
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
  return x(), S("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: Ge(s.cardStyles),
    onMouseenter: t[0] || (t[0] = (i) => s.isHovered = !0),
    onMouseleave: t[1] || (t[1] = (i) => s.isHovered = !1)
  }, [
    t[4] || (t[4] = f("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (x(), S("div", {
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
        t[2] || (t[2] = f("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, hx)
    ], 2)) : L("", !0),
    f("div", gx, [
      n.showTags && s.processedTags.length > 0 ? (x(), S("div", vx, [
        (x(!0), S(ie, null, be(s.processedTags.slice(0, 3), (i) => (x(), S("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, U(i), 1))), 128))
      ])) : L("", !0),
      f("h3", yx, [
        f("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, U(n.title), 9, bx)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (x(), S("div", _x, [
        n.showAuthor && n.author ? (x(), S("span", Ex, U(n.author), 1)) : L("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (x(), S("span", wx, "•")) : L("", !0),
        n.showDate && s.formattedDate ? (x(), S("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, U(s.formattedDate), 9, xx)) : L("", !0)
      ])) : L("", !0),
      f("div", Nx, [
        n.excerpt ? (x(), S("p", Sx, U(n.excerpt), 1)) : n.content ? (x(), S("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-3",
          innerHTML: s.truncatedContent
        }, null, 8, kx)) : L("", !0)
      ]),
      f("div", Cx, [
        f("a", {
          href: n.url,
          class: "inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm group transition-colors duration-300"
        }, t[3] || (t[3] = [
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
  ], 36);
}
const $x = /* @__PURE__ */ We(px, [["render", Tx], ["__scopeId", "data-v-4d9d9306"]]);
({
  ...ss,
  props: {
    ...ss.props
  }
});
const Dx = /* @__PURE__ */ je(Mf), Vx = /* @__PURE__ */ je(S1), Ax = /* @__PURE__ */ je(H1), Ix = /* @__PURE__ */ je(Af), Mx = /* @__PURE__ */ je(eb), Px = /* @__PURE__ */ je(Rf), Rx = /* @__PURE__ */ je(Wb), Lx = /* @__PURE__ */ je(j_), Fx = /* @__PURE__ */ je(b2), Bx = /* @__PURE__ */ je(aE), jx = /* @__PURE__ */ je(jE), Hx = /* @__PURE__ */ je(If), Ux = /* @__PURE__ */ je(hw), qx = /* @__PURE__ */ je(vw), zx = /* @__PURE__ */ je(_w), Kx = /* @__PURE__ */ je(Sw), Wx = /* @__PURE__ */ je(Ow), Gx = /* @__PURE__ */ je(fx);
customElements.define("cart-drawer", Dx);
customElements.define("mobile-menu", Vx);
customElements.define("product-variant-picker", Ax);
customElements.define("quantity-selector", Ix);
customElements.define("sticky-header", Mx);
customElements.define("main-header", Px);
customElements.define("site-footer", Rx);
customElements.define("collection-filters", Lx);
customElements.define("collection-grid", Fx);
customElements.define("product-gallery", Bx);
customElements.define("product-info", jx);
customElements.define("cart-item", Hx);
customElements.define("cart-summary", Ux);
customElements.define("slideshow-banner", qx);
customElements.define("testimonials-carousel", zx);
customElements.define("video-player", Kx);
customElements.define("password-modal", Wx);
customElements.define("search-overlay", Gx);
function er(e = document) {
  e.querySelectorAll(".main-header-mount").forEach((a) => {
    if (a._vueApp) return;
    const u = en(Rf, {
      shopName: a.dataset.shopName || "Orion Store",
      logoUrl: a.dataset.logoUrl || "",
      navigationLinks: JSON.parse(a.dataset.navigationLinks || "[]")
    });
    a._vueApp = u, u.mount(a);
  }), e.querySelectorAll(".cart-drawer-mount").forEach((a) => {
    if (a._vueApp) return;
    const u = en(Mf);
    a._vueApp = u, u.mount(a);
  }), e.querySelectorAll("product-card").forEach((a) => {
    if (a._vueApp) return;
    const u = {
      productId: a.getAttribute("product-id"),
      variantId: a.getAttribute("variant-id"),
      title: a.getAttribute("title"),
      handle: a.getAttribute("handle"),
      url: a.getAttribute("url"),
      vendor: a.getAttribute("vendor"),
      price: a.getAttribute("price"),
      compareAtPrice: a.getAttribute("compare-at-price"),
      image: a.getAttribute("image"),
      available: a.getAttribute(":available") === "true"
    }, d = en(g_, u);
    a._vueApp = d, d.mount(a);
  }), e.querySelectorAll("collection-sort").forEach((a) => {
    if (a._vueApp) return;
    const u = {
      collectionHandle: a.getAttribute("collection-handle"),
      currentSort: a.getAttribute("current-sort") || "manual"
    }, d = en(E2, u);
    a._vueApp = d, d.mount(a);
  }), e.querySelectorAll("orion-button").forEach((a) => {
    if (a._vueApp) return;
    const u = {
      variant: a.getAttribute("variant") || "primary",
      size: a.getAttribute("size") || "medium",
      fullWidth: a.hasAttribute("full-width"),
      href: a.getAttribute("href"),
      type: a.getAttribute("type") || "button",
      disabled: a.hasAttribute("disabled"),
      loading: a.hasAttribute("loading"),
      rounded: a.getAttribute("rounded") || "default"
    }, d = en({
      components: { Button: ss },
      template: `<Button v-bind="$attrs">${a.innerHTML}</Button>`
    }, u);
    a._vueApp = d, d.mount(a);
  }), e.querySelectorAll("collection-filter-drawer").forEach((a) => {
    if (a._vueApp) return;
    const u = {
      collectionHandle: a.getAttribute("collection-handle"),
      products: JSON.parse(a.getAttribute(":products") || "[]")
    }, d = en(K2, u);
    a._vueApp = d, d.mount(a);
  }), e.querySelectorAll("article-card").forEach((a) => {
    if (a._vueApp) return;
    const u = {
      title: a.getAttribute("title"),
      url: a.getAttribute("url"),
      excerpt: a.getAttribute("excerpt"),
      content: a.getAttribute("content"),
      author: a.getAttribute("author"),
      publishedAt: a.getAttribute("published-at"),
      rawPublishedAt: a.getAttribute("raw-published-at"),
      image: a.getAttribute("image"),
      imageAlt: a.getAttribute("image-alt"),
      tags: JSON.parse(a.getAttribute("tags") || "[]"),
      imageRatio: a.getAttribute("image-ratio") || "landscape",
      showImage: a.getAttribute("show-image") === "true",
      showAuthor: a.getAttribute("show-author") === "true",
      showDate: a.getAttribute("show-date") === "true",
      showTags: a.getAttribute("show-tags") === "true"
    }, d = en($x, u);
    a._vueApp = d, d.mount(a);
  }), e === document && document.querySelectorAll(".sticky-header").forEach((u) => {
    if (u.dataset.sticky === "true" && !u._stickyInitialized) {
      u._stickyInitialized = !0;
      let d = window.scrollY;
      window.addEventListener("scroll", () => {
        const c = window.scrollY, p = u.dataset.transparent === "true", m = u.dataset.hideOnScroll === "true";
        c > 100 && !p ? (u.classList.add("sticky", "top-0", "shadow-md"), u.style.backgroundColor = u.dataset.stickyBackground || "#ffffff") : (u.classList.remove("sticky", "shadow-md"), u.style.backgroundColor = ""), m && (c > d && c > 100 ? u.style.transform = "translateY(-100%)" : u.style.transform = "translateY(0)"), d = c;
      });
    }
  });
}
window.OrionCart || (window.OrionCart = {
  state: {
    isOpen: !1,
    items: [],
    totalPrice: 0,
    itemCount: 0
  },
  async fetchCart() {
    var e;
    try {
      const n = await (await fetch((((e = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : e.cart) || "/cart") + ".js")).json();
      return this.state.items = n.items, this.state.totalPrice = n.total_price, this.state.itemCount = n.item_count, document.dispatchEvent(new CustomEvent("cart:updated", { detail: n })), n;
    } catch (t) {
      console.error("Failed to fetch cart:", t);
    }
  },
  async addItem(e) {
    var t;
    try {
      let n;
      e instanceof FormData ? n = await fetch(((t = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : t.cart_add) || "/cart/add", {
        method: "POST",
        body: e
      }) : n = await fetch("/api/carts/ajax-cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(e)
      });
      const s = await n.json();
      return await this.fetchCart(), this.openDrawer(), s;
    } catch (n) {
      console.error("Failed to add item to cart:", n);
    }
  },
  async updateItem(e, t, n = null) {
    try {
      const s = {
        quantity: t
      };
      n !== null ? s.line = n : s.id = e;
      const r = await (await fetch("/api/carts/ajax-cart/change.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(s)
      })).json();
      return await this.fetchCart(), r;
    } catch (s) {
      console.error("Failed to update cart:", s);
    }
  },
  async removeItem(e, t = null) {
    return this.updateItem(e, 0, t);
  },
  openDrawer() {
    this.state.isOpen = !0, document.dispatchEvent(new CustomEvent("cart:open"));
  },
  closeDrawer() {
    this.state.isOpen = !1, document.dispatchEvent(new CustomEvent("cart:close"));
  }
}, window.OrionCart.fetchCart(), document.addEventListener("cart:updated", (e) => {
  const t = e.detail.item_count;
  document.querySelectorAll(".cart-count").forEach((s) => {
    t > 0 ? (s.textContent = t, s.style.opacity = "1") : s.style.opacity = "0";
  });
}));
document.addEventListener("DOMContentLoaded", () => {
  er();
});
var $c;
(($c = window.Shopline) != null && $c.designMode || window.location.href.includes("theme_preview_mode")) && (document.addEventListener("shopline:section:load", (e) => {
  const t = document.querySelector(`[data-section-id="${e.detail.sectionId}"]`) || document;
  er(t);
}), document.addEventListener("shopline:section:reorder", () => {
  er();
}), document.addEventListener("shopline:block:select", (e) => {
  const t = document.querySelector(`[data-block-id="${e.detail.blockId}"]`);
  t && er(t);
}));
