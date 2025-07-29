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
const pe = sl.NODE_ENV !== "production" ? Object.freeze({}) : {}, bs = sl.NODE_ENV !== "production" ? Object.freeze([]) : [], De = () => {
}, Gs = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tr = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ol = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jf = Object.prototype.hasOwnProperty, ve = (e, t) => jf.call(e, t), J = Array.isArray, Jn = (e) => Fs(e) === "[object Map]", us = (e) => Fs(e) === "[object Set]", ia = (e) => Fs(e) === "[object Date]", Hf = (e) => Fs(e) === "[object RegExp]", oe = (e) => typeof e == "function", le = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Tr = (e) => (ge(e) || oe(e)) && oe(e.then) && oe(e.catch), Tc = Object.prototype.toString, Fs = (e) => Tc.call(e), rl = (e) => Fs(e).slice(8, -1), Dr = (e) => Fs(e) === "[object Object]", il = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ Ye(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Dc = /* @__PURE__ */ Ye(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Vr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Uf = /-(\w)/g, Ce = Vr(
  (e) => e.replace(Uf, (t, n) => n ? n.toUpperCase() : "")
), qf = /\B([A-Z])/g, ot = Vr(
  (e) => e.replace(qf, "-$1").toLowerCase()
), rn = Vr((e) => e.charAt(0).toUpperCase() + e.slice(1)), nn = Vr(
  (e) => e ? `on${rn(e)}` : ""
), mt = (e, t) => !Object.is(e, t), Tn = (e, ...t) => {
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
let la;
const So = () => la || (la = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const eo = {
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
}, Wf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Kf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Gf = /* @__PURE__ */ Ye(Kf), aa = 2;
function Yf(e, t = 0, n = e.length) {
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
        const u = s[a].length, d = o[a] && o[a].length || 0;
        if (a === l) {
          const p = t - (r - (u + d)), m = Math.max(
            1,
            n > r ? u - p : n - t
          );
          i.push("   |  " + " ".repeat(p) + "^".repeat(m));
        } else if (a > l) {
          if (n > r) {
            const p = Math.max(Math.min(n - r, u), 1);
            i.push("   |  " + "^".repeat(p));
          }
          r += u + d;
        }
      }
      break;
    }
  return i.join(`
`);
}
function Ge(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? Vc(s) : Ge(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (le(e) || ge(e))
    return e;
}
const Jf = /;(?![^(]*\))/g, Xf = /:([^]+)/, Qf = /\/\*[^]*?\*\//g;
function Vc(e) {
  const t = {};
  return e.replace(Qf, "").split(Jf).forEach((n) => {
    if (n) {
      const s = n.split(Xf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Zf(e) {
  if (!e) return "";
  if (le(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (le(s) || typeof s == "number") {
      const o = n.startsWith("--") ? n : ot(n);
      t += `${o}:${s};`;
    }
  }
  return t;
}
function xe(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const s = xe(e[n]);
      s && (t += s + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ep(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !le(t) && (e.class = xe(t)), n && (e.style = Ge(n)), e;
}
const tp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", np = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", sp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", op = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ac = /* @__PURE__ */ Ye(tp), Ic = /* @__PURE__ */ Ye(np), Mc = /* @__PURE__ */ Ye(sp), rp = /* @__PURE__ */ Ye(op), Pc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ip = /* @__PURE__ */ Ye(Pc), ca = /* @__PURE__ */ Ye(
  Pc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ll(e) {
  return !!e || e === "";
}
const lp = /* @__PURE__ */ Ye(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), ap = /* @__PURE__ */ Ye(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function cp(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const up = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function dp(e, t) {
  return e.replace(
    up,
    (n) => `\\${n}`
  );
}
function fp(e, t) {
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
  if (n = Nt(e), s = Nt(t), n || s)
    return e === t;
  if (n = J(e), s = J(t), n || s)
    return n && s ? fp(e, t) : !1;
  if (n = ge(e), s = ge(t), n || s) {
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
const Rc = (e) => !!(e && e.__v_isRef === !0), q = (e) => le(e) ? e : e == null ? "" : J(e) || ge(e) && (e.toString === Tc || !oe(e.toString)) ? Rc(e) ? q(e.value) : JSON.stringify(e, Lc, 2) : String(e), Lc = (e, t) => Rc(t) ? Lc(e, t.value) : Jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[si(s, r) + " =>"] = o, n),
    {}
  )
} : us(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => si(n))
} : Nt(t) ? si(t) : ge(t) && !J(t) && !Dr(t) ? String(t) : t, si = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Fc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && sl.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var Ee = {};
function It(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let nt;
class al {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = nt, !t && nt && (this.index = (nt.scopes || (nt.scopes = [])).push(
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
      const n = nt;
      try {
        return nt = this, t();
      } finally {
        nt = n;
      }
    } else Ee.NODE_ENV !== "production" && It("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = nt, nt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (nt = this.prevScope, this.prevScope = void 0);
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
function pp(e) {
  return new al(e);
}
function cl() {
  return nt;
}
function Bc(e, t = !1) {
  nt ? nt.cleanups.push(e) : Ee.NODE_ENV !== "production" && !t && It(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let we;
const oi = /* @__PURE__ */ new WeakSet();
class fo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, nt && nt.active && nt.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ua(this), Uc(this);
    const t = we, n = zt;
    we = this, zt = !0;
    try {
      return this.fn();
    } finally {
      Ee.NODE_ENV !== "production" && we !== this && It(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), qc(this), we = t, zt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fl(t);
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
let jc = 0, to, no;
function Hc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = no, no = e;
    return;
  }
  e.next = to, to = e;
}
function ul() {
  jc++;
}
function dl() {
  if (--jc > 0)
    return;
  if (no) {
    let t = no;
    for (no = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; to; ) {
    let t = to;
    for (to = void 0; t; ) {
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
function Uc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), fl(s), hp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === po) || (e.globalVersion = po, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ei(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = we, s = zt;
  we = e, zt = !0;
  try {
    Uc(e);
    const o = e.fn(e._value);
    (t.version === 0 || mt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    we = n, zt = s, qc(e), e.flags &= -3;
  }
}
function fl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), Ee.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      fl(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function hp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function mp(e, t) {
  e.effect instanceof fo && (e = e.effect.fn);
  const n = new fo(e);
  t && fe(n, t);
  try {
    n.run();
  } catch (o) {
    throw n.stop(), o;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function gp(e) {
  e.effect.stop();
}
let zt = !0;
const Wc = [];
function Gt() {
  Wc.push(zt), zt = !1;
}
function Yt() {
  const e = Wc.pop();
  zt = e === void 0 ? !0 : e;
}
function ua(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = we;
    we = void 0;
    try {
      t();
    } finally {
      we = n;
    }
  }
}
let po = 0;
class vp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ir {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, Ee.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!we || !zt || we === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== we)
      n = this.activeLink = new vp(we, this), we.deps ? (n.prevDep = we.depsTail, we.depsTail.nextDep = n, we.depsTail = n) : we.deps = we.depsTail = n, Kc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = we.depsTail, n.nextDep = void 0, we.depsTail.nextDep = n, we.depsTail = n, we.deps === n && (we.deps = s);
    }
    return Ee.NODE_ENV !== "production" && we.onTrack && we.onTrack(
      fe(
        {
          effect: we
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, po++, this.notify(t);
  }
  notify(t) {
    ul();
    try {
      if (Ee.NODE_ENV !== "production")
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
function Kc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Kc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), Ee.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const or = /* @__PURE__ */ new WeakMap(), Xn = Symbol(
  Ee.NODE_ENV !== "production" ? "Object iterate" : ""
), wi = Symbol(
  Ee.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ho = Symbol(
  Ee.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ze(e, t, n) {
  if (zt && we) {
    let s = or.get(e);
    s || or.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ir()), o.map = s, o.key = n), Ee.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function sn(e, t, n, s, o, r) {
  const i = or.get(e);
  if (!i) {
    po++;
    return;
  }
  const l = (a) => {
    a && (Ee.NODE_ENV !== "production" ? a.trigger({
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
    const a = J(e), c = a && il(n);
    if (a && n === "length") {
      const u = Number(s);
      i.forEach((d, p) => {
        (p === "length" || p === ho || !Nt(p) && p >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), c && l(i.get(ho)), t) {
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
  dl();
}
function yp(e, t) {
  const n = or.get(e);
  return n && n.get(t);
}
function ms(e) {
  const t = ce(e);
  return t === e ? t : (ze(t, "iterate", ho), lt(e) ? t : t.map(Ze));
}
function Mr(e) {
  return ze(e = ce(e), "iterate", ho), e;
}
const bp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ri(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return ms(this).concat(
      ...e.map((t) => J(t) ? ms(t) : t)
    );
  },
  entries() {
    return ri(this, "entries", (e) => (e[1] = Ze(e[1]), e));
  },
  every(e, t) {
    return an(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return an(this, "filter", e, t, (n) => n.map(Ze), arguments);
  },
  find(e, t) {
    return an(this, "find", e, t, Ze, arguments);
  },
  findIndex(e, t) {
    return an(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return an(this, "findLast", e, t, Ze, arguments);
  },
  findLastIndex(e, t) {
    return an(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return an(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ii(this, "includes", e);
  },
  indexOf(...e) {
    return ii(this, "indexOf", e);
  },
  join(e) {
    return ms(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ii(this, "lastIndexOf", e);
  },
  map(e, t) {
    return an(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return qs(this, "pop");
  },
  push(...e) {
    return qs(this, "push", e);
  },
  reduce(e, ...t) {
    return da(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return da(this, "reduceRight", e, t);
  },
  shift() {
    return qs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return an(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return qs(this, "splice", e);
  },
  toReversed() {
    return ms(this).toReversed();
  },
  toSorted(e) {
    return ms(this).toSorted(e);
  },
  toSpliced(...e) {
    return ms(this).toSpliced(...e);
  },
  unshift(...e) {
    return qs(this, "unshift", e);
  },
  values() {
    return ri(this, "values", Ze);
  }
};
function ri(e, t, n) {
  const s = Mr(e), o = s[t]();
  return s !== e && !lt(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const _p = Array.prototype;
function an(e, t, n, s, o, r) {
  const i = Mr(e), l = i !== e && !lt(e), a = i[t];
  if (a !== _p[t]) {
    const d = a.apply(e, r);
    return l ? Ze(d) : d;
  }
  let c = n;
  i !== e && (l ? c = function(d, p) {
    return n.call(this, Ze(d), p, e);
  } : n.length > 2 && (c = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const u = a.call(i, c, s);
  return l && o ? o(u) : u;
}
function da(e, t, n, s) {
  const o = Mr(e);
  let r = n;
  return o !== e && (lt(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, Ze(l), a, e);
  }), o[t](r, ...s);
}
function ii(e, t, n) {
  const s = ce(e);
  ze(s, "iterate", ho);
  const o = s[t](...n);
  return (o === -1 || o === !1) && ks(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : o;
}
function qs(e, t, n = []) {
  Gt(), ul();
  const s = ce(e)[t].apply(e, n);
  return dl(), Yt(), s;
}
const Ep = /* @__PURE__ */ Ye("__proto__,__v_isRef,__isVue"), Gc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
);
function wp(e) {
  Nt(e) || (e = String(e));
  const t = ce(this);
  return ze(t, "has", e), t.hasOwnProperty(e);
}
class Yc {
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
      return s === (o ? r ? tu : eu : r ? Zc : Qc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = J(t);
    if (!o) {
      let a;
      if (i && (a = bp[n]))
        return a;
      if (n === "hasOwnProperty")
        return wp;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Pe(t) ? t : s
    );
    return (Nt(n) ? Gc.has(n) : Ep(n)) || (o || ze(t, "get", n), r) ? l : Pe(l) ? i && il(n) ? l : l.value : ge(l) ? o ? Rr(l) : Ss(l) : l;
  }
}
class Jc extends Yc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Jt(r);
      if (!lt(s) && !Jt(s) && (r = ce(r), s = ce(s)), !J(t) && Pe(r) && !Pe(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = J(t) && il(n) ? Number(n) < t.length : ve(t, n), l = Reflect.set(
      t,
      n,
      s,
      Pe(t) ? t : o
    );
    return t === ce(o) && (i ? mt(s, r) && sn(t, "set", n, s, r) : sn(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ve(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && sn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Nt(n) || !Gc.has(n)) && ze(t, "has", n), s;
  }
  ownKeys(t) {
    return ze(
      t,
      "iterate",
      J(t) ? "length" : Xn
    ), Reflect.ownKeys(t);
  }
}
class Xc extends Yc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ee.NODE_ENV !== "production" && It(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ee.NODE_ENV !== "production" && It(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const xp = /* @__PURE__ */ new Jc(), Np = /* @__PURE__ */ new Xc(), Sp = /* @__PURE__ */ new Jc(!0), kp = /* @__PURE__ */ new Xc(!0), xi = (e) => e, Io = (e) => Reflect.getPrototypeOf(e);
function Cp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ce(o), i = Jn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = o[e](...s), u = n ? xi : t ? rr : Ze;
    return !t && ze(
      r,
      "iterate",
      a ? wi : Xn
    ), {
      // iterator protocol
      next() {
        const { value: d, done: p } = c.next();
        return p ? { value: d, done: p } : {
          value: l ? [u(d[0]), u(d[1])] : u(d),
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
function Mo(e) {
  return function(...t) {
    if (Ee.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      It(
        `${rn(e)} operation ${n}failed: target is readonly.`,
        ce(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Op(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      e || (mt(o, l) && ze(i, "get", o), ze(i, "get", l));
      const { has: a } = Io(i), c = t ? xi : e ? rr : Ze;
      if (a.call(i, o))
        return c(r.get(o));
      if (a.call(i, l))
        return c(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ze(ce(o), "iterate", Xn), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      return e || (mt(o, l) && ze(i, "has", o), ze(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = ce(l), c = t ? xi : e ? rr : Ze;
      return !e && ze(a, "iterate", Xn), l.forEach((u, d) => o.call(r, c(u), c(d), i));
    }
  };
  return fe(
    n,
    e ? {
      add: Mo("add"),
      set: Mo("set"),
      delete: Mo("delete"),
      clear: Mo("clear")
    } : {
      add(o) {
        !t && !lt(o) && !Jt(o) && (o = ce(o));
        const r = ce(this);
        return Io(r).has.call(r, o) || (r.add(o), sn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !lt(r) && !Jt(r) && (r = ce(r));
        const i = ce(this), { has: l, get: a } = Io(i);
        let c = l.call(i, o);
        c ? Ee.NODE_ENV !== "production" && fa(i, l, o) : (o = ce(o), c = l.call(i, o));
        const u = a.call(i, o);
        return i.set(o, r), c ? mt(r, u) && sn(i, "set", o, r, u) : sn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ce(this), { has: i, get: l } = Io(r);
        let a = i.call(r, o);
        a ? Ee.NODE_ENV !== "production" && fa(r, i, o) : (o = ce(o), a = i.call(r, o));
        const c = l ? l.call(r, o) : void 0, u = r.delete(o);
        return a && sn(r, "delete", o, void 0, c), u;
      },
      clear() {
        const o = ce(this), r = o.size !== 0, i = Ee.NODE_ENV !== "production" ? Jn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return r && sn(
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
    n[o] = Cp(o, e, t);
  }), n;
}
function Pr(e, t) {
  const n = Op(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ve(n, o) && o in s ? n : s,
    o,
    r
  );
}
const $p = {
  get: /* @__PURE__ */ Pr(!1, !1)
}, Tp = {
  get: /* @__PURE__ */ Pr(!1, !0)
}, Dp = {
  get: /* @__PURE__ */ Pr(!0, !1)
}, Vp = {
  get: /* @__PURE__ */ Pr(!0, !0)
};
function fa(e, t, n) {
  const s = ce(n);
  if (s !== n && t.call(e, s)) {
    const o = rl(e);
    It(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Qc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), eu = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap();
function Ap(e) {
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
function Ip(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ap(rl(e));
}
function Ss(e) {
  return Jt(e) ? e : Lr(
    e,
    !1,
    xp,
    $p,
    Qc
  );
}
function nu(e) {
  return Lr(
    e,
    !1,
    Sp,
    Tp,
    Zc
  );
}
function Rr(e) {
  return Lr(
    e,
    !0,
    Np,
    Dp,
    eu
  );
}
function Ht(e) {
  return Lr(
    e,
    !0,
    kp,
    Vp,
    tu
  );
}
function Lr(e, t, n, s, o) {
  if (!ge(e))
    return Ee.NODE_ENV !== "production" && It(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Ip(e);
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
  return Jt(e) ? mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Jt(e) {
  return !!(e && e.__v_isReadonly);
}
function lt(e) {
  return !!(e && e.__v_isShallow);
}
function ks(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function su(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && os(e, "__v_skip", !0), e;
}
const Ze = (e) => ge(e) ? Ss(e) : e, rr = (e) => ge(e) ? Rr(e) : e;
function Pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function G(e) {
  return ru(e, !1);
}
function ou(e) {
  return ru(e, !0);
}
function ru(e, t) {
  return Pe(e) ? e : new Mp(e, t);
}
class Mp {
  constructor(t, n) {
    this.dep = new Ir(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : Ze(t), this.__v_isShallow = n;
  }
  get value() {
    return Ee.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || lt(t) || Jt(t);
    t = s ? t : ce(t), mt(t, n) && (this._rawValue = t, this._value = s ? t : Ze(t), Ee.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Pp(e) {
  e.dep && (Ee.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function ko(e) {
  return Pe(e) ? e.value : e;
}
function Rp(e) {
  return oe(e) ? e() : ko(e);
}
const Lp = {
  get: (e, t, n) => t === "__v_raw" ? e : ko(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Pe(o) && !Pe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function pl(e) {
  return mn(e) ? e : new Proxy(e, Lp);
}
class Fp {
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
function iu(e) {
  return new Fp(e);
}
function Bp(e) {
  Ee.NODE_ENV !== "production" && !ks(e) && It("toRefs() expects a reactive object but received a plain one.");
  const t = J(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = lu(e, n);
  return t;
}
class jp {
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
    return yp(ce(this._object), this._key);
  }
}
class Hp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Up(e, t, n) {
  return Pe(e) ? e : oe(e) ? new Hp(e) : ge(e) && arguments.length > 1 ? lu(e, t, n) : G(e);
}
function lu(e, t, n) {
  const s = e[t];
  return Pe(s) ? s : new jp(e, t, n);
}
class qp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ir(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = po - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    we !== this)
      return Hc(this, !0), !0;
  }
  get value() {
    const t = Ee.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return zc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ee.NODE_ENV !== "production" && It("Write operation failed: computed value is readonly");
  }
}
function zp(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const r = new qp(s, o, n);
  return Ee.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const Wp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Kp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Po = {}, ir = /* @__PURE__ */ new WeakMap();
let Sn;
function Gp() {
  return Sn;
}
function au(e, t = !1, n = Sn) {
  if (n) {
    let s = ir.get(n);
    s || ir.set(n, s = []), s.push(e);
  } else Ee.NODE_ENV !== "production" && !t && It(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Yp(e, t, n = pe) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, c = (y) => {
    (n.onWarn || It)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (y) => o ? y : lt(y) || o === !1 || o === 0 ? pn(y, 1) : pn(y);
  let d, p, m, g, h = !1, I = !1;
  if (Pe(e) ? (p = () => e.value, h = lt(e)) : mn(e) ? (p = () => u(e), h = !0) : J(e) ? (I = !0, h = e.some((y) => mn(y) || lt(y)), p = () => e.map((y) => {
    if (Pe(y))
      return y.value;
    if (mn(y))
      return u(y);
    if (oe(y))
      return a ? a(y, 2) : y();
    Ee.NODE_ENV !== "production" && c(y);
  })) : oe(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      Gt();
      try {
        m();
      } finally {
        Yt();
      }
    }
    const y = Sn;
    Sn = d;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Sn = y;
    }
  } : (p = De, Ee.NODE_ENV !== "production" && c(e)), t && o) {
    const y = p, A = o === !0 ? 1 / 0 : o;
    p = () => pn(y(), A);
  }
  const C = cl(), N = () => {
    d.stop(), C && C.active && ol(C.effects, d);
  };
  if (r && t) {
    const y = t;
    t = (...A) => {
      y(...A), N();
    };
  }
  let v = I ? new Array(e.length).fill(Po) : Po;
  const w = (y) => {
    if (!(!(d.flags & 1) || !d.dirty && !y))
      if (t) {
        const A = d.run();
        if (o || h || (I ? A.some((S, O) => mt(S, v[O])) : mt(A, v))) {
          m && m();
          const S = Sn;
          Sn = d;
          try {
            const O = [
              A,
              // pass undefined as the old value when it's changed for the first time
              v === Po ? void 0 : I && v[0] === Po ? [] : v,
              g
            ];
            v = A, a ? a(t, 3, O) : (
              // @ts-expect-error
              t(...O)
            );
          } finally {
            Sn = S;
          }
        }
      } else
        d.run();
  };
  return l && l(w), d = new fo(p), d.scheduler = i ? () => i(w, !1) : w, g = (y) => au(y, !1, d), m = d.onStop = () => {
    const y = ir.get(d);
    if (y) {
      if (a)
        a(y, 4);
      else
        for (const A of y) A();
      ir.delete(d);
    }
  }, Ee.NODE_ENV !== "production" && (d.onTrack = n.onTrack, d.onTrigger = n.onTrigger), t ? s ? w(!0) : v = d.run() : i ? i(w.bind(null, !0), !0) : d.run(), N.pause = d.pause.bind(d), N.resume = d.resume.bind(d), N.stop = N, N;
}
function pn(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Pe(e))
    pn(e.value, t, n);
  else if (J(e))
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
var k = {};
const Qn = [];
function _s(e) {
  Qn.push(e);
}
function Es() {
  Qn.pop();
}
let li = !1;
function B(e, ...t) {
  if (li) return;
  li = !0, Gt();
  const n = Qn.length ? Qn[Qn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Jp();
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
          ({ vnode: r }) => `at <${Gr(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Xp(o)), console.warn(...r);
  }
  Yt(), li = !1;
}
function Jp() {
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
function Xp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Qp(n));
  }), t;
}
function Qp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Gr(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Zp(e.props), r] : [o + r];
}
function Zp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...cu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function cu(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Pe(t) ? (t = cu(e, ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ce(t), n ? t : [`${e}=`, t]);
}
function hl(e, t) {
  k.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? B(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && B(`${t} is NaN - the duration expression might be incorrect.`));
}
const eh = {
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
    jn(o, t, n);
  }
}
function Mt(e, t, n, s) {
  if (oe(e)) {
    const o = ds(e, t, n, s);
    return o && Tr(o) && o.catch((r) => {
      jn(r, t, n);
    }), o;
  }
  if (J(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Mt(e[r], t, n, s));
    return o;
  } else k.NODE_ENV !== "production" && B(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function jn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = k.NODE_ENV !== "production" ? Fr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Gt(), ds(r, null, 10, [
        e,
        a,
        c
      ]), Yt();
      return;
    }
  }
  th(e, n, o, s, i);
}
function th(e, t, n, s = !0, o = !1) {
  if (k.NODE_ENV !== "production") {
    const r = Fr[t];
    if (n && _s(n), B(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Es(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const gt = [];
let Zt = -1;
const ws = [];
let kn = null, ys = 0;
const uu = /* @__PURE__ */ Promise.resolve();
let lr = null;
const nh = 100;
function Ln(e) {
  const t = lr || uu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sh(e) {
  let t = Zt + 1, n = gt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = gt[s], r = mo(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Br(e) {
  if (!(e.flags & 1)) {
    const t = mo(e), n = gt[gt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= mo(n) ? gt.push(e) : gt.splice(sh(t), 0, e), e.flags |= 1, du();
  }
}
function du() {
  lr || (lr = uu.then(fu));
}
function Cs(e) {
  J(e) ? ws.push(...e) : kn && e.id === -1 ? kn.splice(ys + 1, 0, e) : e.flags & 1 || (ws.push(e), e.flags |= 1), du();
}
function pa(e, t, n = Zt + 1) {
  for (k.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < gt.length; n++) {
    const s = gt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || k.NODE_ENV !== "production" && ml(t, s))
        continue;
      gt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ar(e) {
  if (ws.length) {
    const t = [...new Set(ws)].sort(
      (n, s) => mo(n) - mo(s)
    );
    if (ws.length = 0, kn) {
      kn.push(...t);
      return;
    }
    for (kn = t, k.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ys = 0; ys < kn.length; ys++) {
      const n = kn[ys];
      k.NODE_ENV !== "production" && ml(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kn = null, ys = 0;
  }
}
const mo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fu(e) {
  k.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = k.NODE_ENV !== "production" ? (n) => ml(e, n) : De;
  try {
    for (Zt = 0; Zt < gt.length; Zt++) {
      const n = gt[Zt];
      if (n && !(n.flags & 8)) {
        if (k.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ds(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Zt < gt.length; Zt++) {
      const n = gt[Zt];
      n && (n.flags &= -2);
    }
    Zt = -1, gt.length = 0, ar(e), lr = null, (gt.length || ws.length) && fu(e);
  }
}
function ml(e, t) {
  const n = e.get(t) || 0;
  if (n > nh) {
    const s = t.i, o = s && Ts(s.type);
    return jn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ut = !1;
const Wo = /* @__PURE__ */ new Map();
k.NODE_ENV !== "production" && (So().__VUE_HMR_RUNTIME__ = {
  createRecord: ai(pu),
  rerender: ai(ih),
  reload: ai(lh)
});
const rs = /* @__PURE__ */ new Map();
function oh(e) {
  const t = e.type.__hmrId;
  let n = rs.get(t);
  n || (pu(t, e.type), n = rs.get(t)), n.instances.add(e);
}
function rh(e) {
  rs.get(e.type.__hmrId).instances.delete(e);
}
function pu(e, t) {
  return rs.has(e) ? !1 : (rs.set(e, {
    initialDef: cr(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function cr(e) {
  return Ed(e) ? e.__vccOpts : e;
}
function ih(e, t) {
  const n = rs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, cr(s.type).render = t), s.renderCache = [], Ut = !0, s.update(), Ut = !1;
  }));
}
function lh(e, t) {
  const n = rs.get(e);
  if (!n) return;
  t = cr(t), ha(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = cr(r.type);
    let l = Wo.get(i);
    l || (i !== n.initialDef && ha(i, t), Wo.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Br(() => {
      Ut = !0, r.parent.update(), Ut = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Cs(() => {
    Wo.clear();
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
let Bt, Ys = [], Ni = !1;
function Co(e, ...t) {
  Bt ? Bt.emit(e, ...t) : Ni || Ys.push({ event: e, args: t });
}
function gl(e, t) {
  var n, s;
  Bt = e, Bt ? (Bt.enabled = !0, Ys.forEach(({ event: o, args: r }) => Bt.emit(o, ...r)), Ys = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    gl(r, t);
  }), setTimeout(() => {
    Bt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ni = !0, Ys = []);
  }, 3e3)) : (Ni = !0, Ys = []);
}
function ah(e, t) {
  Co("app:init", e, t, {
    Fragment: re,
    Text: on,
    Comment: Ve,
    Static: Mn
  });
}
function ch(e) {
  Co("app:unmount", e);
}
const Si = /* @__PURE__ */ vl(
  "component:added"
  /* COMPONENT_ADDED */
), hu = /* @__PURE__ */ vl(
  "component:updated"
  /* COMPONENT_UPDATED */
), uh = /* @__PURE__ */ vl(
  "component:removed"
  /* COMPONENT_REMOVED */
), dh = (e) => {
  Bt && typeof Bt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Bt.cleanupBuffer(e) && uh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return (t) => {
    Co(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const fh = /* @__PURE__ */ mu(
  "perf:start"
  /* PERFORMANCE_START */
), ph = /* @__PURE__ */ mu(
  "perf:end"
  /* PERFORMANCE_END */
);
function mu(e) {
  return (t, n, s) => {
    Co(e, t.appContext.app, t.uid, t, n, s);
  };
}
function hh(e, t, n) {
  Co(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Be = null, jr = null;
function go(e) {
  const t = Be;
  return Be = e, jr = e && e.type.__scopeId || null, t;
}
function mh(e) {
  jr = e;
}
function gh() {
  jr = null;
}
const vh = (e) => Me;
function Me(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ii(-1);
    const r = go(t);
    let i;
    try {
      i = e(...o);
    } finally {
      go(r), s._d && Ii(1);
    }
    return k.NODE_ENV !== "production" && hu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function gu(e) {
  Dc(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function $e(e, t) {
  if (Be === null)
    return k.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
  const n = $o(Be), s = e.dirs || (e.dirs = []);
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
function tn(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (Gt(), Mt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Yt());
  }
}
const vu = Symbol("_vte"), yu = (e) => e.__isTeleport, Zn = (e) => e && (e.disabled || e.disabled === ""), ma = (e) => e && (e.defer || e.defer === ""), ga = (e) => typeof SVGElement < "u" && e instanceof SVGElement, va = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ki = (e, t) => {
  const n = e && e.to;
  if (le(n))
    if (t) {
      const s = t(n);
      return k.NODE_ENV !== "production" && !s && !Zn(e) && B(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return k.NODE_ENV !== "production" && B(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return k.NODE_ENV !== "production" && !n && !Zn(e) && B(`Invalid Teleport target: ${n}`), n;
}, bu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, l, a, c) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: m, querySelector: g, createText: h, createComment: I }
    } = c, C = Zn(t.props);
    let { shapeFlag: N, children: v, dynamicChildren: w } = t;
    if (k.NODE_ENV !== "production" && Ut && (a = !1, w = null), e == null) {
      const y = t.el = k.NODE_ENV !== "production" ? I("teleport start") : h(""), A = t.anchor = k.NODE_ENV !== "production" ? I("teleport end") : h("");
      m(y, n, s), m(A, n, s);
      const S = (b, T) => {
        N & 16 && (o && o.isCE && (o.ce._teleportTarget = b), u(
          v,
          b,
          T,
          o,
          r,
          i,
          l,
          a
        ));
      }, O = () => {
        const b = t.target = ki(t.props, g), T = _u(b, t, h, m);
        b ? (i !== "svg" && ga(b) ? i = "svg" : i !== "mathml" && va(b) && (i = "mathml"), C || (S(b, T), Ko(t, !1))) : k.NODE_ENV !== "production" && !C && B(
          "Invalid Teleport target on mount:",
          b,
          `(${typeof b})`
        );
      };
      C && (S(n, A), Ko(t, !0)), ma(t.props) ? (t.el.__isMounted = !1, qe(() => {
        O(), delete t.el.__isMounted;
      }, r)) : O();
    } else {
      if (ma(t.props) && e.el.__isMounted === !1) {
        qe(() => {
          bu.process(
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
      const y = t.anchor = e.anchor, A = t.target = e.target, S = t.targetAnchor = e.targetAnchor, O = Zn(e.props), b = O ? n : A, T = O ? y : S;
      if (i === "svg" || ga(A) ? i = "svg" : (i === "mathml" || va(A)) && (i = "mathml"), w ? (p(
        e.dynamicChildren,
        w,
        b,
        o,
        r,
        i,
        l
      ), ro(e, t, k.NODE_ENV === "production")) : a || d(
        e,
        t,
        b,
        T,
        o,
        r,
        i,
        l,
        !1
      ), C)
        O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ro(
          t,
          n,
          y,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = ki(
          t.props,
          g
        );
        R ? Ro(
          t,
          R,
          null,
          c,
          0
        ) : k.NODE_ENV !== "production" && B(
          "Invalid Teleport target on update:",
          A,
          `(${typeof A})`
        );
      } else O && Ro(
        t,
        A,
        S,
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
      targetAnchor: u,
      target: d,
      props: p
    } = e;
    if (d && (o(c), o(u)), r && o(a), i & 16) {
      const m = r || !Zn(p);
      for (let g = 0; g < l.length; g++) {
        const h = l[g];
        s(
          h,
          t,
          n,
          m,
          !!h.dynamicChildren
        );
      }
    }
  },
  move: Ro,
  hydrate: yh
};
function Ro(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: c, props: u } = e, d = r === 2;
  if (d && s(i, t, n), (!d || Zn(u)) && a & 16)
    for (let p = 0; p < c.length; p++)
      o(
        c[p],
        t,
        n,
        2
      );
  d && s(l, t, n);
}
function yh(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: c, createText: u }
}, d) {
  const p = t.target = ki(
    t.props,
    a
  );
  if (p) {
    const m = Zn(t.props), g = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (m)
        t.anchor = d(
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
        let h = g;
        for (; h; ) {
          if (h && h.nodeType === 8) {
            if (h.data === "teleport start anchor")
              t.targetStart = h;
            else if (h.data === "teleport anchor") {
              t.targetAnchor = h, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          h = i(h);
        }
        t.targetAnchor || _u(p, t, u, c), d(
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
const bn = bu;
function Ko(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function _u(e, t, n, s) {
  const o = t.targetStart = n(""), r = t.targetAnchor = n("");
  return o[vu] = r, e && (s(o, e), s(r, e)), r;
}
const Cn = Symbol("_leaveCb"), Lo = Symbol("_enterCb");
function yl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return He(() => {
    e.isMounted = !0;
  }), js(() => {
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
}, Eu = (e) => {
  const t = e.subTree;
  return t.component ? Eu(t.component) : t;
}, bh = {
  name: "BaseTransition",
  props: bl,
  setup(e, { slots: t }) {
    const n = dt(), s = yl();
    return () => {
      const o = t.default && Hr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = wu(o), i = ce(e), { mode: l } = i;
      if (k.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && B(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ci(r);
      const a = ya(r);
      if (!a)
        return ci(r);
      let c = Os(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => c = d
      );
      a.type !== Ve && yn(a, c);
      let u = n.subTree && ya(n.subTree);
      if (u && u.type !== Ve && !jt(a, u) && Eu(n).type !== Ve) {
        let d = Os(
          u,
          i,
          s,
          n
        );
        if (yn(u, d), l === "out-in" && a.type !== Ve)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, ci(r);
        l === "in-out" && a.type !== Ve ? d.delayLeave = (p, m, g) => {
          const h = Nu(
            s,
            u
          );
          h[String(u.key)] = u, p[Cn] = () => {
            m(), p[Cn] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            g(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function wu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== Ve) {
        if (k.NODE_ENV !== "production" && n) {
          B(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, k.NODE_ENV === "production") break;
      }
  }
  return t;
}
const xu = bh;
function Nu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Os(e, t, n, s, o) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: g,
    onLeaveCancelled: h,
    onBeforeAppear: I,
    onAppear: C,
    onAfterAppear: N,
    onAppearCancelled: v
  } = t, w = String(e.key), y = Nu(n, e), A = (b, T) => {
    b && Mt(
      b,
      s,
      9,
      T
    );
  }, S = (b, T) => {
    const R = T[1];
    A(b, T), J(b) ? b.every((D) => D.length <= 1) && R() : b.length <= 1 && R();
  }, O = {
    mode: i,
    persisted: l,
    beforeEnter(b) {
      let T = a;
      if (!n.isMounted)
        if (r)
          T = I || a;
        else
          return;
      b[Cn] && b[Cn](
        !0
        /* cancelled */
      );
      const R = y[w];
      R && jt(e, R) && R.el[Cn] && R.el[Cn](), A(T, [b]);
    },
    enter(b) {
      let T = c, R = u, D = d;
      if (!n.isMounted)
        if (r)
          T = C || c, R = N || u, D = v || d;
        else
          return;
      let $ = !1;
      const M = b[Lo] = (P) => {
        $ || ($ = !0, P ? A(D, [b]) : A(R, [b]), O.delayedLeave && O.delayedLeave(), b[Lo] = void 0);
      };
      T ? S(T, [b, M]) : M();
    },
    leave(b, T) {
      const R = String(e.key);
      if (b[Lo] && b[Lo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      A(p, [b]);
      let D = !1;
      const $ = b[Cn] = (M) => {
        D || (D = !0, T(), M ? A(h, [b]) : A(g, [b]), b[Cn] = void 0, y[R] === e && delete y[R]);
      };
      y[R] = e, m ? S(m, [b, $]) : $();
    },
    clone(b) {
      const T = Os(
        b,
        t,
        n,
        s,
        o
      );
      return o && o(T), T;
    }
  };
  return O;
}
function ci(e) {
  if (Bs(e))
    return e = Pt(e), e.children = null, e;
}
function ya(e) {
  if (!Bs(e))
    return yu(e.type) && e.children ? wu(e.children) : e;
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
    i.type === re ? (i.patchFlag & 128 && o++, s = s.concat(
      Hr(i.children, t, l)
    )) : (t || i.type !== Ve) && s.push(l != null ? Pt(i, { key: l }) : i);
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
function _h() {
  const e = dt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (k.NODE_ENV !== "production" && B(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function El(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Su = /* @__PURE__ */ new WeakSet();
function Eh(e) {
  const t = dt(), n = ou(null);
  if (t) {
    const o = t.refs === pe ? t.refs = {} : t.refs;
    let r;
    k.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? B(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else k.NODE_ENV !== "production" && B(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = k.NODE_ENV !== "production" ? Rr(n) : n;
  return k.NODE_ENV !== "production" && Su.add(s), s;
}
function xs(e, t, n, s, o = !1) {
  if (J(e)) {
    e.forEach(
      (g, h) => xs(
        g,
        t && (J(t) ? t[h] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (In(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && xs(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? $o(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (k.NODE_ENV !== "production" && !l) {
    B(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, u = l.refs === pe ? l.refs = {} : l.refs, d = l.setupState, p = ce(d), m = d === pe ? () => !1 : (g) => k.NODE_ENV !== "production" && (ve(p, g) && !Pe(p[g]) && B(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), Su.has(p[g])) ? !1 : ve(p, g);
  if (c != null && c !== a && (le(c) ? (u[c] = null, m(c) && (d[c] = null)) : Pe(c) && (c.value = null)), oe(a))
    ds(a, l, 12, [i, u]);
  else {
    const g = le(a), h = Pe(a);
    if (g || h) {
      const I = () => {
        if (e.f) {
          const C = g ? m(a) ? d[a] : u[a] : a.value;
          o ? J(C) && ol(C, r) : J(C) ? C.includes(r) || C.push(r) : g ? (u[a] = [r], m(a) && (d[a] = u[a])) : (a.value = [r], e.k && (u[e.k] = a.value));
        } else g ? (u[a] = i, m(a) && (d[a] = i)) : h ? (a.value = i, e.k && (u[e.k] = i)) : k.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (I.id = -1, qe(I, n)) : I();
    } else k.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ba = !1;
const Hn = () => {
  ba || (console.error("Hydration completed but contains mismatches."), ba = !0);
}, wh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", xh = (e) => e.namespaceURI.includes("MathML"), Fo = (e) => {
  if (e.nodeType === 1) {
    if (wh(e)) return "svg";
    if (xh(e)) return "mathml";
  }
}, Kn = (e) => e.nodeType === 8;
function Nh(e) {
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
  } = e, u = (v, w) => {
    if (!w.hasChildNodes()) {
      k.NODE_ENV !== "production" && B(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, v, w), ar(), w._vnode = v;
      return;
    }
    d(w.firstChild, v, null, null, null), ar(), w._vnode = v;
  }, d = (v, w, y, A, S, O = !1) => {
    O = O || !!w.dynamicChildren;
    const b = Kn(v) && v.data === "[", T = () => h(
      v,
      w,
      y,
      A,
      S,
      b
    ), { type: R, ref: D, shapeFlag: $, patchFlag: M } = w;
    let P = v.nodeType;
    w.el = v, k.NODE_ENV !== "production" && (os(v, "__vnode", w, !0), os(v, "__vueParentComponent", y, !0)), M === -2 && (O = !1, w.dynamicChildren = null);
    let L = null;
    switch (R) {
      case on:
        P !== 3 ? w.children === "" ? (a(w.el = o(""), i(v), v), L = v) : L = T() : (v.data !== w.children && (k.NODE_ENV !== "production" && B(
          "Hydration text mismatch in",
          v.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            v.data
          )}
  - expected on client: ${JSON.stringify(w.children)}`
        ), Hn(), v.data = w.children), L = r(v));
        break;
      case Ve:
        N(v) ? (L = r(v), C(
          w.el = v.content.firstChild,
          v,
          y
        )) : P !== 8 || b ? L = T() : L = r(v);
        break;
      case Mn:
        if (b && (v = r(v), P = v.nodeType), P === 1 || P === 3) {
          L = v;
          const Q = !w.children.length;
          for (let ne = 0; ne < w.staticCount; ne++)
            Q && (w.children += L.nodeType === 1 ? L.outerHTML : L.data), ne === w.staticCount - 1 && (w.anchor = L), L = r(L);
          return b ? r(L) : L;
        } else
          T();
        break;
      case re:
        b ? L = g(
          v,
          w,
          y,
          A,
          S,
          O
        ) : L = T();
        break;
      default:
        if ($ & 1)
          (P !== 1 || w.type.toLowerCase() !== v.tagName.toLowerCase()) && !N(v) ? L = T() : L = p(
            v,
            w,
            y,
            A,
            S,
            O
          );
        else if ($ & 6) {
          w.slotScopeIds = S;
          const Q = i(v);
          if (b ? L = I(v) : Kn(v) && v.data === "teleport start" ? L = I(v, v.data, "teleport end") : L = r(v), t(
            w,
            Q,
            null,
            y,
            A,
            Fo(Q),
            O
          ), In(w) && !w.type.__asyncResolved) {
            let ne;
            b ? (ne = ue(re), ne.anchor = L ? L.previousSibling : Q.lastChild) : ne = v.nodeType === 3 ? je("") : ue("div"), ne.el = v, w.component.subTree = ne;
          }
        } else $ & 64 ? P !== 8 ? L = T() : L = w.type.hydrate(
          v,
          w,
          y,
          A,
          S,
          O,
          e,
          m
        ) : $ & 128 ? L = w.type.hydrate(
          v,
          w,
          y,
          A,
          Fo(i(v)),
          S,
          O,
          e,
          d
        ) : k.NODE_ENV !== "production" && B("Invalid HostVNode type:", R, `(${typeof R})`);
    }
    return D != null && xs(D, null, A, w), L;
  }, p = (v, w, y, A, S, O) => {
    O = O || !!w.dynamicChildren;
    const { type: b, props: T, patchFlag: R, shapeFlag: D, dirs: $, transition: M } = w, P = b === "input" || b === "option";
    if (k.NODE_ENV !== "production" || P || R !== -1) {
      $ && tn(w, null, y, "created");
      let L = !1;
      if (N(v)) {
        L = Xu(
          null,
          // no need check parentSuspense in hydration
          M
        ) && y && y.vnode.props && y.vnode.props.appear;
        const ne = v.content.firstChild;
        if (L) {
          const be = ne.getAttribute("class");
          be && (ne.$cls = be), M.beforeEnter(ne);
        }
        C(ne, v, y), w.el = v = ne;
      }
      if (D & 16 && // skip if element has innerHTML / textContent
      !(T && (T.innerHTML || T.textContent))) {
        let ne = m(
          v.firstChild,
          w,
          v,
          y,
          A,
          S,
          O
        ), be = !1;
        for (; ne; ) {
          Js(
            v,
            1
            /* CHILDREN */
          ) || (k.NODE_ENV !== "production" && !be && (B(
            "Hydration children mismatch on",
            v,
            `
Server rendered element contains more child nodes than client vdom.`
          ), be = !0), Hn());
          const et = ne;
          ne = ne.nextSibling, l(et);
        }
      } else if (D & 8) {
        let ne = w.children;
        ne[0] === `
` && (v.tagName === "PRE" || v.tagName === "TEXTAREA") && (ne = ne.slice(1)), v.textContent !== ne && (Js(
          v,
          0
          /* TEXT */
        ) || (k.NODE_ENV !== "production" && B(
          "Hydration text content mismatch on",
          v,
          `
  - rendered on server: ${v.textContent}
  - expected on client: ${w.children}`
        ), Hn()), v.textContent = w.children);
      }
      if (T) {
        if (k.NODE_ENV !== "production" || P || !O || R & 48) {
          const ne = v.tagName.includes("-");
          for (const be in T)
            k.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !($ && $.some((et) => et.dir.created)) && Sh(v, be, T[be], w, y) && Hn(), (P && (be.endsWith("value") || be === "indeterminate") || vn(be) && !An(be) || // force hydrate v-bind with .prop modifiers
            be[0] === "." || ne) && s(v, be, null, T[be], void 0, y);
        } else if (T.onClick)
          s(
            v,
            "onClick",
            null,
            T.onClick,
            void 0,
            y
          );
        else if (R & 4 && mn(T.style))
          for (const ne in T.style) T.style[ne];
      }
      let Q;
      (Q = T && T.onVnodeBeforeMount) && Et(Q, y, w), $ && tn(w, null, y, "beforeMount"), ((Q = T && T.onVnodeMounted) || $ || L) && ld(() => {
        Q && Et(Q, y, w), L && M.enter(v), $ && tn(w, null, y, "mounted");
      }, A);
    }
    return v.nextSibling;
  }, m = (v, w, y, A, S, O, b) => {
    b = b || !!w.dynamicChildren;
    const T = w.children, R = T.length;
    let D = !1;
    for (let $ = 0; $ < R; $++) {
      const M = b ? T[$] : T[$] = vt(T[$]), P = M.type === on;
      v ? (P && !b && $ + 1 < R && vt(T[$ + 1]).type === on && (a(
        o(
          v.data.slice(M.children.length)
        ),
        y,
        r(v)
      ), v.data = M.children), v = d(
        v,
        M,
        A,
        S,
        O,
        b
      )) : P && !M.children ? a(M.el = o(""), y) : (Js(
        y,
        1
        /* CHILDREN */
      ) || (k.NODE_ENV !== "production" && !D && (B(
        "Hydration children mismatch on",
        y,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), D = !0), Hn()), n(
        null,
        M,
        y,
        null,
        A,
        S,
        Fo(y),
        O
      ));
    }
    return v;
  }, g = (v, w, y, A, S, O) => {
    const { slotScopeIds: b } = w;
    b && (S = S ? S.concat(b) : b);
    const T = i(v), R = m(
      r(v),
      w,
      T,
      y,
      A,
      S,
      O
    );
    return R && Kn(R) && R.data === "]" ? r(w.anchor = R) : (Hn(), a(w.anchor = c("]"), T, R), R);
  }, h = (v, w, y, A, S, O) => {
    if (Js(
      v.parentElement,
      1
      /* CHILDREN */
    ) || (k.NODE_ENV !== "production" && B(
      `Hydration node mismatch:
- rendered on server:`,
      v,
      v.nodeType === 3 ? "(text)" : Kn(v) && v.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      w.type
    ), Hn()), w.el = null, O) {
      const R = I(v);
      for (; ; ) {
        const D = r(v);
        if (D && D !== R)
          l(D);
        else
          break;
      }
    }
    const b = r(v), T = i(v);
    return l(v), n(
      null,
      w,
      T,
      b,
      y,
      A,
      Fo(T),
      S
    ), y && (y.vnode.el = w.el, Kr(y, w.el)), b;
  }, I = (v, w = "[", y = "]") => {
    let A = 0;
    for (; v; )
      if (v = r(v), v && Kn(v) && (v.data === w && A++, v.data === y)) {
        if (A === 0)
          return r(v);
        A--;
      }
    return v;
  }, C = (v, w, y) => {
    const A = w.parentNode;
    A && A.replaceChild(v, w);
    let S = y;
    for (; S; )
      S.vnode.el === w && (S.vnode.el = S.subTree.el = v), S = S.parent;
  }, N = (v) => v.nodeType === 1 && v.tagName === "TEMPLATE";
  return [u, d];
}
function Sh(e, t, n, s, o) {
  let r, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = xe(n), kh(_a(l || ""), _a(a)) || (r = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : Zf(Ge(n));
    const c = Ea(l), u = Ea(a);
    if (s.dirs)
      for (const { dir: d, value: p } of s.dirs)
        d.name === "show" && !p && u.set("display", "none");
    o && ku(o, s, u), Ch(c, u) || (r = 3, i = "style");
  } else (e instanceof SVGElement && ap(t) || e instanceof HTMLElement && (ca(t) || lp(t))) && (ca(t) ? (l = e.hasAttribute(t), a = ll(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = cp(n) ? String(n) : !1), l !== a && (r = 4, i = t));
  if (r != null && !Js(e, r)) {
    const c = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, u = `Hydration ${Cu[r]} mismatch on`, d = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return B(u, e, d), !0;
  }
  return !1;
}
function _a(e) {
  return new Set(e.trim().split(/\s+/));
}
function kh(e, t) {
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
function Ch(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function ku(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === re && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const r in o) {
      const i = Fc(o[r]);
      n.set(`--${dp(r)}`, i);
    }
  }
  t === s && e.parent && ku(e.parent, e.vnode, n);
}
const wa = "data-allow-mismatch", Cu = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Js(e, t) {
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
    return t === 0 && s.includes("children") ? !0 : s.includes(Cu[t]);
  }
}
const Oh = So().requestIdleCallback || ((e) => setTimeout(e, 1)), $h = So().cancelIdleCallback || ((e) => clearTimeout(e)), Th = (e = 1e4) => (t) => {
  const n = Oh(t, { timeout: e });
  return () => $h(n);
};
function Dh(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: r, innerWidth: i } = window;
  return (t > 0 && t < r || s > 0 && s < r) && (n > 0 && n < i || o > 0 && o < i);
}
const Vh = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const r of o)
      if (r.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (Dh(o))
        return t(), s.disconnect(), !1;
      s.observe(o);
    }
  }), () => s.disconnect();
}, Ah = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Ih = (e = []) => (t, n) => {
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
function Mh(e, t) {
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
function Ph(e) {
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
  let c = null, u, d = 0;
  const p = () => (d++, c = null, m()), m = () => {
    let g;
    return c || (g = c = t().catch((h) => {
      if (h = h instanceof Error ? h : new Error(String(h)), a)
        return new Promise((I, C) => {
          a(h, () => I(p()), () => C(h), d + 1);
        });
      throw h;
    }).then((h) => {
      if (g !== c && c)
        return c;
      if (k.NODE_ENV !== "production" && !h && B(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), h && (h.__esModule || h[Symbol.toStringTag] === "Module") && (h = h.default), k.NODE_ENV !== "production" && h && !ge(h) && !oe(h))
        throw new Error(`Invalid async component load result: ${h}`);
      return u = h, h;
    }));
  };
  return /* @__PURE__ */ _l({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(g, h, I) {
      let C = !1;
      (h.bu || (h.bu = [])).push(() => C = !0);
      const N = () => {
        if (C) {
          k.NODE_ENV !== "production" && B(
            `Skipping lazy hydration for component '${Ts(u) || u.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        I();
      }, v = r ? () => {
        const w = r(
          N,
          (y) => Mh(g, y)
        );
        w && (h.bum || (h.bum = [])).push(w);
      } : N;
      u ? v() : m().then(() => !h.isUnmounted && v());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const g = Ke;
      if (El(g), u)
        return () => ui(u, g);
      const h = (v) => {
        c = null, jn(
          v,
          g,
          13,
          !s
        );
      };
      if (l && g.suspense || $s)
        return m().then((v) => () => ui(v, g)).catch((v) => (h(v), () => s ? ue(s, {
          error: v
        }) : null));
      const I = G(!1), C = G(), N = G(!!o);
      return o && setTimeout(() => {
        N.value = !1;
      }, o), i != null && setTimeout(() => {
        if (!I.value && !C.value) {
          const v = new Error(
            `Async component timed out after ${i}ms.`
          );
          h(v), C.value = v;
        }
      }, i), m().then(() => {
        I.value = !0, g.parent && Bs(g.parent.vnode) && g.parent.update();
      }).catch((v) => {
        h(v), C.value = v;
      }), () => {
        if (I.value && u)
          return ui(u, g);
        if (C.value && s)
          return ue(s, {
            error: C.value
          });
        if (n && !N.value)
          return ue(n);
      };
    }
  });
}
function ui(e, t) {
  const { ref: n, props: s, children: o, ce: r } = t.vnode, i = ue(e, s, o);
  return i.ref = n, i.ce = r, delete t.vnode.ce, i;
}
const Bs = (e) => e.type.__isKeepAlive, Rh = {
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
        const N = t.default && t.default();
        return N && N.length === 1 ? N[0] : N;
      };
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let i = null;
    k.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: u,
        o: { createElement: d }
      }
    } = s, p = d("div");
    s.activate = (N, v, w, y, A) => {
      const S = N.component;
      c(N, v, w, 0, l), a(
        S.vnode,
        N,
        v,
        w,
        S,
        l,
        y,
        N.slotScopeIds,
        A
      ), qe(() => {
        S.isDeactivated = !1, S.a && Tn(S.a);
        const O = N.props && N.props.onVnodeMounted;
        O && Et(O, S.parent, N);
      }, l), k.NODE_ENV !== "production" && Si(S);
    }, s.deactivate = (N) => {
      const v = N.component;
      pr(v.m), pr(v.a), c(N, p, null, 1, l), qe(() => {
        v.da && Tn(v.da);
        const w = N.props && N.props.onVnodeUnmounted;
        w && Et(w, v.parent, N), v.isDeactivated = !0;
      }, l), k.NODE_ENV !== "production" && Si(v), k.NODE_ENV !== "production" && (v.__keepAliveStorageContainer = p);
    };
    function m(N) {
      di(N), u(N, n, l, !0);
    }
    function g(N) {
      o.forEach((v, w) => {
        const y = Ts(v.type);
        y && !N(y) && h(w);
      });
    }
    function h(N) {
      const v = o.get(N);
      v && (!i || !jt(v, i)) ? m(v) : i && di(i), o.delete(N), r.delete(N);
    }
    Wt(
      () => [e.include, e.exclude],
      ([N, v]) => {
        N && g((w) => Xs(N, w)), v && g((w) => !Xs(v, w));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let I = null;
    const C = () => {
      I != null && (mr(n.subTree.type) ? qe(() => {
        o.set(I, Bo(n.subTree));
      }, n.subTree.suspense) : o.set(I, Bo(n.subTree)));
    };
    return He(C), qr(C), js(() => {
      o.forEach((N) => {
        const { subTree: v, suspense: w } = n, y = Bo(v);
        if (N.type === y.type && N.key === y.key) {
          di(y);
          const A = y.component.da;
          A && qe(A, w);
          return;
        }
        m(N);
      });
    }), () => {
      if (I = null, !t.default)
        return i = null;
      const N = t.default(), v = N[0];
      if (N.length > 1)
        return k.NODE_ENV !== "production" && B("KeepAlive should contain exactly one component child."), i = null, N;
      if (!ln(v) || !(v.shapeFlag & 4) && !(v.shapeFlag & 128))
        return i = null, v;
      let w = Bo(v);
      if (w.type === Ve)
        return i = null, w;
      const y = w.type, A = Ts(
        In(w) ? w.type.__asyncResolved || {} : y
      ), { include: S, exclude: O, max: b } = e;
      if (S && (!A || !Xs(S, A)) || O && A && Xs(O, A))
        return w.shapeFlag &= -257, i = w, v;
      const T = w.key == null ? y : w.key, R = o.get(T);
      return w.el && (w = Pt(w), v.shapeFlag & 128 && (v.ssContent = w)), I = T, R ? (w.el = R.el, w.component = R.component, w.transition && yn(w, w.transition), w.shapeFlag |= 512, r.delete(T), r.add(T)) : (r.add(T), b && r.size > parseInt(b, 10) && h(r.values().next().value)), w.shapeFlag |= 256, i = w, mr(v.type) ? v : w;
    };
  }
}, Lh = Rh;
function Xs(e, t) {
  return J(e) ? e.some((n) => Xs(n, t)) : le(e) ? e.split(",").includes(t) : Hf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Ou(e, t) {
  Tu(e, "a", t);
}
function $u(e, t) {
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
  if (Ur(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Bs(o.parent.vnode) && Fh(s, t, n, o), o = o.parent;
  }
}
function Fh(e, t, n, s) {
  const o = Ur(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Rt(() => {
    ol(s[t], o);
  }, n);
}
function di(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Bo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ur(e, t, n = Ke, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Gt();
      const l = as(n), a = Mt(t, n, e, i);
      return l(), Yt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (k.NODE_ENV !== "production") {
    const o = nn(Fr[e].replace(/ hook$/, ""));
    B(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _n = (e) => (t, n = Ke) => {
  (!$s || e === "sp") && Ur(e, (...s) => t(...s), n);
}, Du = _n("bm"), He = _n("m"), wl = _n(
  "bu"
), qr = _n("u"), js = _n(
  "bum"
), Rt = _n("um"), Vu = _n(
  "sp"
), Au = _n("rtg"), Iu = _n("rtc");
function Mu(e, t = Ke) {
  Ur("ec", e, t);
}
const ur = "components", Bh = "directives";
function jh(e, t) {
  return Sl(ur, e, !0, t) || e;
}
const xl = Symbol.for("v-ndc");
function Nl(e) {
  return le(e) ? Sl(ur, e, !1) || e : e || xl;
}
function Hh(e) {
  return Sl(Bh, e);
}
function Sl(e, t, n = !0, s = !1) {
  const o = Be || Ke;
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
      xa(o[e] || r[e], t) || // global registration
      xa(o.appContext[e], t)
    );
    if (!i && s)
      return r;
    if (k.NODE_ENV !== "production" && n && !i) {
      const l = e === ur ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      B(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else k.NODE_ENV !== "production" && B(
    `resolve${rn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function xa(e, t) {
  return e && (e[t] || e[Ce(t)] || e[rn(Ce(t))]);
}
function me(e, t, n, s) {
  let o;
  const r = n && n[s], i = J(e);
  if (i || le(e)) {
    const l = i && mn(e);
    let a = !1, c = !1;
    l && (a = !lt(e), c = Jt(e), e = Mr(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        a ? c ? rr(Ze(e[u])) : Ze(e[u]) : e[u],
        u,
        void 0,
        r && r[u]
      );
  } else if (typeof e == "number") {
    k.NODE_ENV !== "production" && !Number.isInteger(e) && B(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r && r[l]);
  } else if (ge(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, r && r[a])
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const u = l[a];
        o[a] = t(e[u], u, a, r && r[a]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
function Uh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (J(s))
      for (let o = 0; o < s.length; o++)
        e[s[o].name] = s[o].fn;
    else s && (e[s.name] = s.key ? (...o) => {
      const r = s.fn(...o);
      return r && (r.key = s.key), r;
    } : s.fn);
  }
  return e;
}
function fs(e, t, n = {}, s, o) {
  if (Be.ce || Be.parent && In(Be.parent) && Be.parent.ce)
    return t !== "default" && (n.name = t), E(), ut(
      re,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  k.NODE_ENV !== "production" && r && r.length > 1 && (B(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), E();
  const i = r && kl(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = ut(
    re,
    {
      key: (l && !Nt(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), r && r._c && (r._d = !0), a;
}
function kl(e) {
  return e.some((t) => ln(t) ? !(t.type === Ve || t.type === re && !kl(t.children)) : !0) ? e : null;
}
function qh(e, t) {
  const n = {};
  if (k.NODE_ENV !== "production" && !ge(e))
    return B("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : nn(s)] = e[s];
  return n;
}
const Ci = (e) => e ? gd(e) ? $o(e) : Ci(e.parent) : null, es = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => k.NODE_ENV !== "production" ? Ht(e.props) : e.props,
    $attrs: (e) => k.NODE_ENV !== "production" ? Ht(e.attrs) : e.attrs,
    $slots: (e) => k.NODE_ENV !== "production" ? Ht(e.slots) : e.slots,
    $refs: (e) => k.NODE_ENV !== "production" ? Ht(e.refs) : e.refs,
    $parent: (e) => Ci(e.parent),
    $root: (e) => Ci(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Br(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ln.bind(e.proxy)),
    $watch: (e) => Im.bind(e)
  })
), Cl = (e) => e === "_" || e === "$", fi = (e, t) => e !== pe && !e.__isScriptSetup && ve(e, t), so = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (k.NODE_ENV !== "production" && t === "__isVue")
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
        if (o !== pe && ve(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && ve(c, t)
        )
          return i[t] = 3, r[t];
        if (n !== pe && ve(n, t))
          return i[t] = 4, n[t];
        Oi && (i[t] = 0);
      }
    }
    const u = es[t];
    let d, p;
    if (u)
      return t === "$attrs" ? (ze(e.attrs, "get", ""), k.NODE_ENV !== "production" && hr()) : k.NODE_ENV !== "production" && t === "$slots" && ze(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== pe && ve(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, ve(p, t)
    )
      return p[t];
    k.NODE_ENV !== "production" && Be && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== pe && Cl(t[0]) && ve(o, t) ? B(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Be && B(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return fi(o, t) ? (o[t] = n, !0) : k.NODE_ENV !== "production" && o.__isScriptSetup && ve(o, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ve(s, t) ? (s[t] = n, !0) : ve(e.props, t) ? (k.NODE_ENV !== "production" && B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (k.NODE_ENV !== "production" && B(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (k.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== pe && ve(e, i) || fi(t, i) || (l = r[0]) && ve(l, i) || ve(s, i) || ve(es, i) || ve(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
k.NODE_ENV !== "production" && (so.ownKeys = (e) => (B(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zh = /* @__PURE__ */ fe({}, so, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return so.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Gf(t);
    return k.NODE_ENV !== "production" && !n && so.has(e, t) && B(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function Wh(e) {
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
      set: De
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
      set: De
    });
  });
}
function Gh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ce(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Cl(s[0])) {
        B(
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
        set: De
      });
    }
  });
}
const ps = (e) => B(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Yh() {
  return k.NODE_ENV !== "production" && ps("defineProps"), null;
}
function Jh() {
  return k.NODE_ENV !== "production" && ps("defineEmits"), null;
}
function Xh(e) {
  k.NODE_ENV !== "production" && ps("defineExpose");
}
function Qh(e) {
  k.NODE_ENV !== "production" && ps("defineOptions");
}
function Zh() {
  return k.NODE_ENV !== "production" && ps("defineSlots"), null;
}
function em() {
  k.NODE_ENV !== "production" && ps("defineModel");
}
function tm(e, t) {
  return k.NODE_ENV !== "production" && ps("withDefaults"), null;
}
function nm() {
  return Pu("useSlots").slots;
}
function sm() {
  return Pu("useAttrs").attrs;
}
function Pu(e) {
  const t = dt();
  return k.NODE_ENV !== "production" && !t && B(`${e}() called without active instance.`), t.setupContext || (t.setupContext = _d(t));
}
function vo(e) {
  return J(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function om(e, t) {
  const n = vo(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? J(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : k.NODE_ENV !== "production" && B(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function rm(e, t) {
  return !e || !t ? e || t : J(e) && J(t) ? e.concat(t) : fe({}, vo(e), vo(t));
}
function im(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function lm(e) {
  const t = dt();
  k.NODE_ENV !== "production" && !t && B(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Ri(), Tr(n) && (n = n.catch((s) => {
    throw as(t), s;
  })), [n, () => as(t)];
}
function am() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? B(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Oi = !0;
function cm(e) {
  const t = Ol(e), n = e.proxy, s = e.ctx;
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
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: m,
    updated: g,
    activated: h,
    deactivated: I,
    beforeDestroy: C,
    beforeUnmount: N,
    destroyed: v,
    unmounted: w,
    render: y,
    renderTracked: A,
    renderTriggered: S,
    errorCaptured: O,
    serverPrefetch: b,
    // public API
    expose: T,
    inheritAttrs: R,
    // assets
    components: D,
    directives: $,
    filters: M
  } = t, P = k.NODE_ENV !== "production" ? am() : null;
  if (k.NODE_ENV !== "production") {
    const [Q] = e.propsOptions;
    if (Q)
      for (const ne in Q)
        P("Props", ne);
  }
  if (c && um(c, s, P), i)
    for (const Q in i) {
      const ne = i[Q];
      oe(ne) ? (k.NODE_ENV !== "production" ? Object.defineProperty(s, Q, {
        value: ne.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[Q] = ne.bind(n), k.NODE_ENV !== "production" && P("Methods", Q)) : k.NODE_ENV !== "production" && B(
        `Method "${Q}" has type "${typeof ne}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    k.NODE_ENV !== "production" && !oe(o) && B(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Q = o.call(n, n);
    if (k.NODE_ENV !== "production" && Tr(Q) && B(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ge(Q))
      k.NODE_ENV !== "production" && B("data() should return an object.");
    else if (e.data = Ss(Q), k.NODE_ENV !== "production")
      for (const ne in Q)
        P("Data", ne), Cl(ne[0]) || Object.defineProperty(s, ne, {
          configurable: !0,
          enumerable: !0,
          get: () => Q[ne],
          set: De
        });
  }
  if (Oi = !0, r)
    for (const Q in r) {
      const ne = r[Q], be = oe(ne) ? ne.bind(n, n) : oe(ne.get) ? ne.get.bind(n, n) : De;
      k.NODE_ENV !== "production" && be === De && B(`Computed property "${Q}" has no getter.`);
      const et = !oe(ne) && oe(ne.set) ? ne.set.bind(n) : k.NODE_ENV !== "production" ? () => {
        B(
          `Write operation failed: computed property "${Q}" is readonly.`
        );
      } : De, ft = te({
        get: be,
        set: et
      });
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => ft.value,
        set: (Tt) => ft.value = Tt
      }), k.NODE_ENV !== "production" && P("Computed", Q);
    }
  if (l)
    for (const Q in l)
      Ru(l[Q], s, n, Q);
  if (a) {
    const Q = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(Q).forEach((ne) => {
      Fu(ne, Q[ne]);
    });
  }
  u && Na(u, e, "c");
  function L(Q, ne) {
    J(ne) ? ne.forEach((be) => Q(be.bind(n))) : ne && Q(ne.bind(n));
  }
  if (L(Du, d), L(He, p), L(wl, m), L(qr, g), L(Ou, h), L($u, I), L(Mu, O), L(Iu, A), L(Au, S), L(js, N), L(Rt, w), L(Vu, b), J(T))
    if (T.length) {
      const Q = e.exposed || (e.exposed = {});
      T.forEach((ne) => {
        Object.defineProperty(Q, ne, {
          get: () => n[ne],
          set: (be) => n[ne] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === De && (e.render = y), R != null && (e.inheritAttrs = R), D && (e.components = D), $ && (e.directives = $), b && El(e);
}
function um(e, t, n = De) {
  J(e) && (e = $i(e));
  for (const s in e) {
    const o = e[s];
    let r;
    ge(o) ? "default" in o ? r = oo(
      o.from || s,
      o.default,
      !0
    ) : r = oo(o.from || s) : r = oo(o), Pe(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, k.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Na(e, t, n) {
  Mt(
    J(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ru(e, t, n, s) {
  let o = s.includes(".") ? nd(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    oe(r) ? Wt(o, r) : k.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, r);
  } else if (oe(e))
    Wt(o, e.bind(n));
  else if (ge(e))
    if (J(e))
      e.forEach((r) => Ru(r, t, n, s));
    else {
      const r = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(r) ? Wt(o, r, e) : k.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else k.NODE_ENV !== "production" && B(`Invalid watch option: "${s}"`, e);
}
function Ol(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => dr(a, c, i, !0)
  ), dr(a, t, i)), ge(t) && r.set(t, a), a;
}
function dr(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && dr(e, r, n, !0), o && o.forEach(
    (i) => dr(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      k.NODE_ENV !== "production" && B(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = dm[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const dm = {
  data: Sa,
  props: ka,
  emits: ka,
  // objects
  methods: Qs,
  computed: Qs,
  // lifecycle
  beforeCreate: ht,
  created: ht,
  beforeMount: ht,
  mounted: ht,
  beforeUpdate: ht,
  updated: ht,
  beforeDestroy: ht,
  beforeUnmount: ht,
  destroyed: ht,
  unmounted: ht,
  activated: ht,
  deactivated: ht,
  errorCaptured: ht,
  serverPrefetch: ht,
  // assets
  components: Qs,
  directives: Qs,
  // watch
  watch: pm,
  // provide / inject
  provide: Sa,
  inject: fm
};
function Sa(e, t) {
  return t ? e ? function() {
    return fe(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fm(e, t) {
  return Qs($i(e), $i(t));
}
function $i(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ht(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qs(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ka(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    vo(e),
    vo(t ?? {})
  ) : t;
}
function pm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ht(e[s], t[s]);
  return n;
}
function Lu() {
  return {
    app: null,
    config: {
      isNativeTag: Gs,
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
let hm = 0;
function mm(e, t) {
  return function(s, o = null) {
    oe(s) || (s = fe({}, s)), o != null && !ge(o) && (k.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), o = null);
    const r = Lu(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: hm++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: ji,
      get config() {
        return r.config;
      },
      set config(u) {
        k.NODE_ENV !== "production" && B(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return i.has(u) ? k.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : u && oe(u.install) ? (i.add(u), u.install(c, ...d)) : oe(u) ? (i.add(u), u(c, ...d)) : k.NODE_ENV !== "production" && B(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(u) {
        return r.mixins.includes(u) ? k.NODE_ENV !== "production" && B(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), c;
      },
      component(u, d) {
        return k.NODE_ENV !== "production" && Li(u, r.config), d ? (k.NODE_ENV !== "production" && r.components[u] && B(`Component "${u}" has already been registered in target app.`), r.components[u] = d, c) : r.components[u];
      },
      directive(u, d) {
        return k.NODE_ENV !== "production" && gu(u), d ? (k.NODE_ENV !== "production" && r.directives[u] && B(`Directive "${u}" has already been registered in target app.`), r.directives[u] = d, c) : r.directives[u];
      },
      mount(u, d, p) {
        if (a)
          k.NODE_ENV !== "production" && B(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          k.NODE_ENV !== "production" && u.__vue_app__ && B(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || ue(s, o);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), k.NODE_ENV !== "production" && (r.reload = () => {
            const g = Pt(m);
            g.el = null, e(g, u, p);
          }), d && t ? t(m, u) : e(m, u, p), a = !0, c._container = u, u.__vue_app__ = c, k.NODE_ENV !== "production" && (c._instance = m.component, ah(c, ji)), $o(m.component);
        }
      },
      onUnmount(u) {
        k.NODE_ENV !== "production" && typeof u != "function" && B(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        a ? (Mt(
          l,
          c._instance,
          16
        ), e(null, c._container), k.NODE_ENV !== "production" && (c._instance = null, ch(c)), delete c._container.__vue_app__) : k.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return k.NODE_ENV !== "production" && u in r.provides && (ve(r.provides, u) ? B(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : B(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = ts;
        ts = c;
        try {
          return u();
        } finally {
          ts = d;
        }
      }
    };
    return c;
  };
}
let ts = null;
function Fu(e, t) {
  if (!Ke)
    k.NODE_ENV !== "production" && B("provide() can only be used inside setup().");
  else {
    let n = Ke.provides;
    const s = Ke.parent && Ke.parent.provides;
    s === n && (n = Ke.provides = Object.create(s)), n[e] = t;
  }
}
function oo(e, t, n = !1) {
  const s = dt();
  if (s || ts) {
    let o = ts ? ts._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    k.NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
  } else k.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
function gm() {
  return !!(dt() || ts);
}
const Bu = {}, ju = () => Object.create(Bu), Hu = (e) => Object.getPrototypeOf(e) === Bu;
function vm(e, t, n, s = !1) {
  const o = {}, r = ju();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Uu(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  k.NODE_ENV !== "production" && zu(t || {}, o, e), n ? e.props = s ? o : nu(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function ym(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function bm(e, t, n, s) {
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
    !(k.NODE_ENV !== "production" && ym(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (zr(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (ve(r, p))
            m !== r[p] && (r[p] = m, c = !0);
          else {
            const g = Ce(p);
            o[g] = Ti(
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
    Uu(e, t, o, r) && (c = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !ve(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ot(d)) === d || !ve(t, u))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[d] = Ti(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (r !== l)
      for (const d in r)
        (!t || !ve(t, d)) && (delete r[d], c = !0);
  }
  c && sn(e.attrs, "set", ""), k.NODE_ENV !== "production" && zu(t || {}, o, e);
}
function Uu(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (An(a))
        continue;
      const c = t[a];
      let u;
      o && ve(o, u = Ce(a)) ? !r || !r.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : zr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, i = !0);
    }
  if (r) {
    const a = ce(n), c = l || pe;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Ti(
        o,
        a,
        d,
        c[d],
        e,
        !ve(c, d)
      );
    }
  }
  return i;
}
function Ti(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = ve(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && oe(a)) {
        const { propsDefaults: c } = o;
        if (n in c)
          s = c[n];
        else {
          const u = as(o);
          s = c[n] = a.call(
            null,
            t
          ), u();
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
    ] && (s === "" || s === ot(n)) && (s = !0));
  }
  return s;
}
const _m = /* @__PURE__ */ new WeakMap();
function qu(e, t, n = !1) {
  const s = n ? _m : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!oe(e)) {
    const u = (d) => {
      a = !0;
      const [p, m] = qu(d, t, !0);
      fe(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return ge(e) && s.set(e, bs), bs;
  if (J(r))
    for (let u = 0; u < r.length; u++) {
      k.NODE_ENV !== "production" && !le(r[u]) && B("props must be strings when using array syntax.", r[u]);
      const d = Ce(r[u]);
      Ca(d) && (i[d] = pe);
    }
  else if (r) {
    k.NODE_ENV !== "production" && !ge(r) && B("invalid props options", r);
    for (const u in r) {
      const d = Ce(u);
      if (Ca(d)) {
        const p = r[u], m = i[d] = J(p) || oe(p) ? { type: p } : fe({}, p), g = m.type;
        let h = !1, I = !0;
        if (J(g))
          for (let C = 0; C < g.length; ++C) {
            const N = g[C], v = oe(N) && N.name;
            if (v === "Boolean") {
              h = !0;
              break;
            } else v === "String" && (I = !1);
          }
        else
          h = oe(g) && g.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = h, m[
          1
          /* shouldCastTrue */
        ] = I, (h || ve(m, "default")) && l.push(d);
      }
    }
  }
  const c = [i, l];
  return ge(e) && s.set(e, c), c;
}
function Ca(e) {
  return e[0] !== "$" && !An(e) ? !0 : (k.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Em(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function zu(e, t, n) {
  const s = ce(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ce(i));
  for (const i in o) {
    let l = o[i];
    l != null && wm(
      i,
      s[i],
      l,
      k.NODE_ENV !== "production" ? Ht(s) : s,
      !r.includes(i)
    );
  }
}
function wm(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    B('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let c = !1;
      const u = J(r) ? r : [r], d = [];
      for (let p = 0; p < u.length && !c; p++) {
        const { valid: m, expectedType: g } = Nm(t, u[p]);
        d.push(g || ""), c = m;
      }
      if (!c) {
        B(Sm(e, t, d));
        return;
      }
    }
    l && !l(t, s) && B('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xm = /* @__PURE__ */ Ye(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Nm(e, t) {
  let n;
  const s = Em(t);
  if (s === "null")
    n = e === null;
  else if (xm(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = ge(e) : s === "Array" ? n = J(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Sm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(rn).join(" | ")}`;
  const o = n[0], r = rl(t), i = Oa(t, o), l = Oa(t, r);
  return n.length === 1 && $a(o) && !km(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, $a(r) && (s += `with value ${l}.`), s;
}
function Oa(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $a(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function km(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const $l = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Tl = (e) => J(e) ? e.map(vt) : [vt(e)], Cm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Me((...o) => (k.NODE_ENV !== "production" && Ke && !(n === null && Be) && !(n && n.root !== Ke.root) && B(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Tl(t(...o))), n);
  return s._c = !1, s;
}, Wu = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if ($l(o)) continue;
    const r = e[o];
    if (oe(r))
      t[o] = Cm(o, r, s);
    else if (r != null) {
      k.NODE_ENV !== "production" && B(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Tl(r);
      t[o] = () => i;
    }
  }
}, Ku = (e, t) => {
  k.NODE_ENV !== "production" && !Bs(e.vnode) && B(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Tl(t);
  e.slots.default = () => n;
}, Di = (e, t, n) => {
  for (const s in t)
    (n || !$l(s)) && (e[s] = t[s]);
}, Om = (e, t, n) => {
  const s = e.slots = ju();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && os(s, "__", o, !0);
    const r = t._;
    r ? (Di(s, t, n), n && os(s, "_", r, !0)) : Wu(t, s);
  } else t && Ku(e, t);
}, $m = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? k.NODE_ENV !== "production" && Ut ? (Di(o, t, n), sn(e, "set", "$slots")) : n && l === 1 ? r = !1 : Di(o, t, n) : (r = !t.$stable, Wu(t, o)), i = t;
  } else t && (Ku(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !$l(l) && i[l] == null && delete o[l];
};
let zs, Dn;
function cn(e, t) {
  e.appContext.config.performance && fr() && Dn.mark(`vue-${t}-${e.uid}`), k.NODE_ENV !== "production" && fh(e, t, fr() ? Dn.now() : Date.now());
}
function un(e, t) {
  if (e.appContext.config.performance && fr()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Dn.mark(s), Dn.measure(
      `<${Gr(e, e.type)}> ${t}`,
      n,
      s
    ), Dn.clearMarks(n), Dn.clearMarks(s);
  }
  k.NODE_ENV !== "production" && ph(e, t, fr() ? Dn.now() : Date.now());
}
function fr() {
  return zs !== void 0 || (typeof window < "u" && window.performance ? (zs = !0, Dn = window.performance) : zs = !1), zs;
}
function Tm() {
  const e = [];
  if (k.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const qe = ld;
function Gu(e) {
  return Ju(e);
}
function Yu(e) {
  return Ju(e, Nh);
}
function Ju(e, t) {
  Tm();
  const n = So();
  n.__VUE__ = !0, k.NODE_ENV !== "production" && gl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: p,
    setScopeId: m = De,
    insertStaticContent: g
  } = e, h = (_, V, F, z = null, H = null, U = null, Z = void 0, Y = null, K = k.NODE_ENV !== "production" && Ut ? !1 : !!V.dynamicChildren) => {
    if (_ === V)
      return;
    _ && !jt(_, V) && (z = Ao(_), En(_, H, U, !0), _ = null), V.patchFlag === -2 && (K = !1, V.dynamicChildren = null);
    const { type: W, ref: ie, shapeFlag: ee } = V;
    switch (W) {
      case on:
        I(_, V, F, z);
        break;
      case Ve:
        C(_, V, F, z);
        break;
      case Mn:
        _ == null ? N(V, F, z, Z) : k.NODE_ENV !== "production" && v(_, V, F, Z);
        break;
      case re:
        $(
          _,
          V,
          F,
          z,
          H,
          U,
          Z,
          Y,
          K
        );
        break;
      default:
        ee & 1 ? A(
          _,
          V,
          F,
          z,
          H,
          U,
          Z,
          Y,
          K
        ) : ee & 6 ? M(
          _,
          V,
          F,
          z,
          H,
          U,
          Z,
          Y,
          K
        ) : ee & 64 || ee & 128 ? W.process(
          _,
          V,
          F,
          z,
          H,
          U,
          Z,
          Y,
          K,
          hs
        ) : k.NODE_ENV !== "production" && B("Invalid VNode type:", W, `(${typeof W})`);
    }
    ie != null && H ? xs(ie, _ && _.ref, U, V || _, !V) : ie == null && _ && _.ref != null && xs(_.ref, null, U, _, !0);
  }, I = (_, V, F, z) => {
    if (_ == null)
      s(
        V.el = l(V.children),
        F,
        z
      );
    else {
      const H = V.el = _.el;
      V.children !== _.children && c(H, V.children);
    }
  }, C = (_, V, F, z) => {
    _ == null ? s(
      V.el = a(V.children || ""),
      F,
      z
    ) : V.el = _.el;
  }, N = (_, V, F, z) => {
    [_.el, _.anchor] = g(
      _.children,
      V,
      F,
      z,
      _.el,
      _.anchor
    );
  }, v = (_, V, F, z) => {
    if (V.children !== _.children) {
      const H = p(_.anchor);
      y(_), [V.el, V.anchor] = g(
        V.children,
        F,
        H,
        z
      );
    } else
      V.el = _.el, V.anchor = _.anchor;
  }, w = ({ el: _, anchor: V }, F, z) => {
    let H;
    for (; _ && _ !== V; )
      H = p(_), s(_, F, z), _ = H;
    s(V, F, z);
  }, y = ({ el: _, anchor: V }) => {
    let F;
    for (; _ && _ !== V; )
      F = p(_), o(_), _ = F;
    o(V);
  }, A = (_, V, F, z, H, U, Z, Y, K) => {
    V.type === "svg" ? Z = "svg" : V.type === "math" && (Z = "mathml"), _ == null ? S(
      V,
      F,
      z,
      H,
      U,
      Z,
      Y,
      K
    ) : T(
      _,
      V,
      H,
      U,
      Z,
      Y,
      K
    );
  }, S = (_, V, F, z, H, U, Z, Y) => {
    let K, W;
    const { props: ie, shapeFlag: ee, transition: se, dirs: ae } = _;
    if (K = _.el = i(
      _.type,
      U,
      ie && ie.is,
      ie
    ), ee & 8 ? u(K, _.children) : ee & 16 && b(
      _.children,
      K,
      null,
      z,
      H,
      pi(_, U),
      Z,
      Y
    ), ae && tn(_, null, z, "created"), O(K, _, _.scopeId, Z, z), ie) {
      for (const Oe in ie)
        Oe !== "value" && !An(Oe) && r(K, Oe, null, ie[Oe], U, z);
      "value" in ie && r(K, "value", null, ie.value, U), (W = ie.onVnodeBeforeMount) && Et(W, z, _);
    }
    k.NODE_ENV !== "production" && (os(K, "__vnode", _, !0), os(K, "__vueParentComponent", z, !0)), ae && tn(_, null, z, "beforeMount");
    const _e = Xu(H, se);
    _e && se.beforeEnter(K), s(K, V, F), ((W = ie && ie.onVnodeMounted) || _e || ae) && qe(() => {
      W && Et(W, z, _), _e && se.enter(K), ae && tn(_, null, z, "mounted");
    }, H);
  }, O = (_, V, F, z, H) => {
    if (F && m(_, F), z)
      for (let U = 0; U < z.length; U++)
        m(_, z[U]);
    if (H) {
      let U = H.subTree;
      if (k.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && (U = Wr(U.children) || U), V === U || mr(U.type) && (U.ssContent === V || U.ssFallback === V)) {
        const Z = H.vnode;
        O(
          _,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          H.parent
        );
      }
    }
  }, b = (_, V, F, z, H, U, Z, Y, K = 0) => {
    for (let W = K; W < _.length; W++) {
      const ie = _[W] = Y ? On(_[W]) : vt(_[W]);
      h(
        null,
        ie,
        V,
        F,
        z,
        H,
        U,
        Z,
        Y
      );
    }
  }, T = (_, V, F, z, H, U, Z) => {
    const Y = V.el = _.el;
    k.NODE_ENV !== "production" && (Y.__vnode = V);
    let { patchFlag: K, dynamicChildren: W, dirs: ie } = V;
    K |= _.patchFlag & 16;
    const ee = _.props || pe, se = V.props || pe;
    let ae;
    if (F && Un(F, !1), (ae = se.onVnodeBeforeUpdate) && Et(ae, F, V, _), ie && tn(V, _, F, "beforeUpdate"), F && Un(F, !0), k.NODE_ENV !== "production" && Ut && (K = 0, Z = !1, W = null), (ee.innerHTML && se.innerHTML == null || ee.textContent && se.textContent == null) && u(Y, ""), W ? (R(
      _.dynamicChildren,
      W,
      Y,
      F,
      z,
      pi(V, H),
      U
    ), k.NODE_ENV !== "production" && ro(_, V)) : Z || be(
      _,
      V,
      Y,
      null,
      F,
      z,
      pi(V, H),
      U,
      !1
    ), K > 0) {
      if (K & 16)
        D(Y, ee, se, F, H);
      else if (K & 2 && ee.class !== se.class && r(Y, "class", null, se.class, H), K & 4 && r(Y, "style", ee.style, se.style, H), K & 8) {
        const _e = V.dynamicProps;
        for (let Oe = 0; Oe < _e.length; Oe++) {
          const Ne = _e[Oe], yt = ee[Ne], tt = se[Ne];
          (tt !== yt || Ne === "value") && r(Y, Ne, yt, tt, H, F);
        }
      }
      K & 1 && _.children !== V.children && u(Y, V.children);
    } else !Z && W == null && D(Y, ee, se, F, H);
    ((ae = se.onVnodeUpdated) || ie) && qe(() => {
      ae && Et(ae, F, V, _), ie && tn(V, _, F, "updated");
    }, z);
  }, R = (_, V, F, z, H, U, Z) => {
    for (let Y = 0; Y < V.length; Y++) {
      const K = _[Y], W = V[Y], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(K, W) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? d(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      h(
        K,
        W,
        ie,
        null,
        z,
        H,
        U,
        Z,
        !0
      );
    }
  }, D = (_, V, F, z, H) => {
    if (V !== F) {
      if (V !== pe)
        for (const U in V)
          !An(U) && !(U in F) && r(
            _,
            U,
            V[U],
            null,
            H,
            z
          );
      for (const U in F) {
        if (An(U)) continue;
        const Z = F[U], Y = V[U];
        Z !== Y && U !== "value" && r(_, U, Y, Z, H, z);
      }
      "value" in F && r(_, "value", V.value, F.value, H);
    }
  }, $ = (_, V, F, z, H, U, Z, Y, K) => {
    const W = V.el = _ ? _.el : l(""), ie = V.anchor = _ ? _.anchor : l("");
    let { patchFlag: ee, dynamicChildren: se, slotScopeIds: ae } = V;
    k.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ut || ee & 2048) && (ee = 0, K = !1, se = null), ae && (Y = Y ? Y.concat(ae) : ae), _ == null ? (s(W, F, z), s(ie, F, z), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      F,
      ie,
      H,
      U,
      Z,
      Y,
      K
    )) : ee > 0 && ee & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren ? (R(
      _.dynamicChildren,
      se,
      F,
      H,
      U,
      Z,
      Y
    ), k.NODE_ENV !== "production" ? ro(_, V) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (V.key != null || H && V === H.subTree) && ro(
        _,
        V,
        !0
        /* shallow */
      )
    )) : be(
      _,
      V,
      F,
      ie,
      H,
      U,
      Z,
      Y,
      K
    );
  }, M = (_, V, F, z, H, U, Z, Y, K) => {
    V.slotScopeIds = Y, _ == null ? V.shapeFlag & 512 ? H.ctx.activate(
      V,
      F,
      z,
      Z,
      K
    ) : P(
      V,
      F,
      z,
      H,
      U,
      Z,
      K
    ) : L(_, V, K);
  }, P = (_, V, F, z, H, U, Z) => {
    const Y = _.component = md(
      _,
      z,
      H
    );
    if (k.NODE_ENV !== "production" && Y.type.__hmrId && oh(Y), k.NODE_ENV !== "production" && (_s(_), cn(Y, "mount")), Bs(_) && (Y.ctx.renderer = hs), k.NODE_ENV !== "production" && cn(Y, "init"), vd(Y, !1, Z), k.NODE_ENV !== "production" && un(Y, "init"), k.NODE_ENV !== "production" && Ut && (_.el = null), Y.asyncDep) {
      if (H && H.registerDep(Y, Q, Z), !_.el) {
        const K = Y.subTree = ue(Ve);
        C(null, K, V, F), _.placeholder = K.el;
      }
    } else
      Q(
        Y,
        _,
        V,
        F,
        H,
        U,
        Z
      );
    k.NODE_ENV !== "production" && (Es(), un(Y, "mount"));
  }, L = (_, V, F) => {
    const z = V.component = _.component;
    if (Fm(_, V, F))
      if (z.asyncDep && !z.asyncResolved) {
        k.NODE_ENV !== "production" && _s(V), ne(z, V, F), k.NODE_ENV !== "production" && Es();
        return;
      } else
        z.next = V, z.update();
    else
      V.el = _.el, z.vnode = V;
  }, Q = (_, V, F, z, H, U, Z) => {
    const Y = () => {
      if (_.isMounted) {
        let { next: ee, bu: se, u: ae, parent: _e, vnode: Oe } = _;
        {
          const St = Qu(_);
          if (St) {
            ee && (ee.el = Oe.el, ne(_, ee, Z)), St.asyncDep.then(() => {
              _.isUnmounted || Y();
            });
            return;
          }
        }
        let Ne = ee, yt;
        k.NODE_ENV !== "production" && _s(ee || _.vnode), Un(_, !1), ee ? (ee.el = Oe.el, ne(_, ee, Z)) : ee = Oe, se && Tn(se), (yt = ee.props && ee.props.onVnodeBeforeUpdate) && Et(yt, _e, ee, Oe), Un(_, !0), k.NODE_ENV !== "production" && cn(_, "render");
        const tt = Go(_);
        k.NODE_ENV !== "production" && un(_, "render");
        const Lt = _.subTree;
        _.subTree = tt, k.NODE_ENV !== "production" && cn(_, "patch"), h(
          Lt,
          tt,
          // parent may have changed if it's in a teleport
          d(Lt.el),
          // anchor may have changed if it's in a fragment
          Ao(Lt),
          _,
          H,
          U
        ), k.NODE_ENV !== "production" && un(_, "patch"), ee.el = tt.el, Ne === null && Kr(_, tt.el), ae && qe(ae, H), (yt = ee.props && ee.props.onVnodeUpdated) && qe(
          () => Et(yt, _e, ee, Oe),
          H
        ), k.NODE_ENV !== "production" && hu(_), k.NODE_ENV !== "production" && Es();
      } else {
        let ee;
        const { el: se, props: ae } = V, { bm: _e, m: Oe, parent: Ne, root: yt, type: tt } = _, Lt = In(V);
        if (Un(_, !1), _e && Tn(_e), !Lt && (ee = ae && ae.onVnodeBeforeMount) && Et(ee, Ne, V), Un(_, !0), se && ni) {
          const St = () => {
            k.NODE_ENV !== "production" && cn(_, "render"), _.subTree = Go(_), k.NODE_ENV !== "production" && un(_, "render"), k.NODE_ENV !== "production" && cn(_, "hydrate"), ni(
              se,
              _.subTree,
              _,
              H,
              null
            ), k.NODE_ENV !== "production" && un(_, "hydrate");
          };
          Lt && tt.__asyncHydrate ? tt.__asyncHydrate(
            se,
            _,
            St
          ) : St();
        } else {
          yt.ce && // @ts-expect-error _def is private
          yt.ce._def.shadowRoot !== !1 && yt.ce._injectChildStyle(tt), k.NODE_ENV !== "production" && cn(_, "render");
          const St = _.subTree = Go(_);
          k.NODE_ENV !== "production" && un(_, "render"), k.NODE_ENV !== "production" && cn(_, "patch"), h(
            null,
            St,
            F,
            z,
            _,
            H,
            U
          ), k.NODE_ENV !== "production" && un(_, "patch"), V.el = St.el;
        }
        if (Oe && qe(Oe, H), !Lt && (ee = ae && ae.onVnodeMounted)) {
          const St = V;
          qe(
            () => Et(ee, Ne, St),
            H
          );
        }
        (V.shapeFlag & 256 || Ne && In(Ne.vnode) && Ne.vnode.shapeFlag & 256) && _.a && qe(_.a, H), _.isMounted = !0, k.NODE_ENV !== "production" && Si(_), V = F = z = null;
      }
    };
    _.scope.on();
    const K = _.effect = new fo(Y);
    _.scope.off();
    const W = _.update = K.run.bind(K), ie = _.job = K.runIfDirty.bind(K);
    ie.i = _, ie.id = _.uid, K.scheduler = () => Br(ie), Un(_, !0), k.NODE_ENV !== "production" && (K.onTrack = _.rtc ? (ee) => Tn(_.rtc, ee) : void 0, K.onTrigger = _.rtg ? (ee) => Tn(_.rtg, ee) : void 0), W();
  }, ne = (_, V, F) => {
    V.component = _;
    const z = _.vnode.props;
    _.vnode = V, _.next = null, bm(_, V.props, z, F), $m(_, V.children, F), Gt(), pa(_), Yt();
  }, be = (_, V, F, z, H, U, Z, Y, K = !1) => {
    const W = _ && _.children, ie = _ ? _.shapeFlag : 0, ee = V.children, { patchFlag: se, shapeFlag: ae } = V;
    if (se > 0) {
      if (se & 128) {
        ft(
          W,
          ee,
          F,
          z,
          H,
          U,
          Z,
          Y,
          K
        );
        return;
      } else if (se & 256) {
        et(
          W,
          ee,
          F,
          z,
          H,
          U,
          Z,
          Y,
          K
        );
        return;
      }
    }
    ae & 8 ? (ie & 16 && Hs(W, H, U), ee !== W && u(F, ee)) : ie & 16 ? ae & 16 ? ft(
      W,
      ee,
      F,
      z,
      H,
      U,
      Z,
      Y,
      K
    ) : Hs(W, H, U, !0) : (ie & 8 && u(F, ""), ae & 16 && b(
      ee,
      F,
      z,
      H,
      U,
      Z,
      Y,
      K
    ));
  }, et = (_, V, F, z, H, U, Z, Y, K) => {
    _ = _ || bs, V = V || bs;
    const W = _.length, ie = V.length, ee = Math.min(W, ie);
    let se;
    for (se = 0; se < ee; se++) {
      const ae = V[se] = K ? On(V[se]) : vt(V[se]);
      h(
        _[se],
        ae,
        F,
        null,
        H,
        U,
        Z,
        Y,
        K
      );
    }
    W > ie ? Hs(
      _,
      H,
      U,
      !0,
      !1,
      ee
    ) : b(
      V,
      F,
      z,
      H,
      U,
      Z,
      Y,
      K,
      ee
    );
  }, ft = (_, V, F, z, H, U, Z, Y, K) => {
    let W = 0;
    const ie = V.length;
    let ee = _.length - 1, se = ie - 1;
    for (; W <= ee && W <= se; ) {
      const ae = _[W], _e = V[W] = K ? On(V[W]) : vt(V[W]);
      if (jt(ae, _e))
        h(
          ae,
          _e,
          F,
          null,
          H,
          U,
          Z,
          Y,
          K
        );
      else
        break;
      W++;
    }
    for (; W <= ee && W <= se; ) {
      const ae = _[ee], _e = V[se] = K ? On(V[se]) : vt(V[se]);
      if (jt(ae, _e))
        h(
          ae,
          _e,
          F,
          null,
          H,
          U,
          Z,
          Y,
          K
        );
      else
        break;
      ee--, se--;
    }
    if (W > ee) {
      if (W <= se) {
        const ae = se + 1, _e = ae < ie ? V[ae].el : z;
        for (; W <= se; )
          h(
            null,
            V[W] = K ? On(V[W]) : vt(V[W]),
            F,
            _e,
            H,
            U,
            Z,
            Y,
            K
          ), W++;
      }
    } else if (W > se)
      for (; W <= ee; )
        En(_[W], H, U, !0), W++;
    else {
      const ae = W, _e = W, Oe = /* @__PURE__ */ new Map();
      for (W = _e; W <= se; W++) {
        const pt = V[W] = K ? On(V[W]) : vt(V[W]);
        pt.key != null && (k.NODE_ENV !== "production" && Oe.has(pt.key) && B(
          "Duplicate keys found during update:",
          JSON.stringify(pt.key),
          "Make sure keys are unique."
        ), Oe.set(pt.key, W));
      }
      let Ne, yt = 0;
      const tt = se - _e + 1;
      let Lt = !1, St = 0;
      const Us = new Array(tt);
      for (W = 0; W < tt; W++) Us[W] = 0;
      for (W = ae; W <= ee; W++) {
        const pt = _[W];
        if (yt >= tt) {
          En(pt, H, U, !0);
          continue;
        }
        let Xt;
        if (pt.key != null)
          Xt = Oe.get(pt.key);
        else
          for (Ne = _e; Ne <= se; Ne++)
            if (Us[Ne - _e] === 0 && jt(pt, V[Ne])) {
              Xt = Ne;
              break;
            }
        Xt === void 0 ? En(pt, H, U, !0) : (Us[Xt - _e] = W + 1, Xt >= St ? St = Xt : Lt = !0, h(
          pt,
          V[Xt],
          F,
          null,
          H,
          U,
          Z,
          Y,
          K
        ), yt++);
      }
      const sa = Lt ? Dm(Us) : bs;
      for (Ne = sa.length - 1, W = tt - 1; W >= 0; W--) {
        const pt = _e + W, Xt = V[pt], oa = V[pt + 1], ra = pt + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          oa.el || oa.placeholder
        ) : z;
        Us[W] === 0 ? h(
          null,
          Xt,
          F,
          ra,
          H,
          U,
          Z,
          Y,
          K
        ) : Lt && (Ne < 0 || W !== sa[Ne] ? Tt(Xt, F, ra, 2) : Ne--);
      }
    }
  }, Tt = (_, V, F, z, H = null) => {
    const { el: U, type: Z, transition: Y, children: K, shapeFlag: W } = _;
    if (W & 6) {
      Tt(_.component.subTree, V, F, z);
      return;
    }
    if (W & 128) {
      _.suspense.move(V, F, z);
      return;
    }
    if (W & 64) {
      Z.move(_, V, F, hs);
      return;
    }
    if (Z === re) {
      s(U, V, F);
      for (let ee = 0; ee < K.length; ee++)
        Tt(K[ee], V, F, z);
      s(_.anchor, V, F);
      return;
    }
    if (Z === Mn) {
      w(_, V, F);
      return;
    }
    if (z !== 2 && W & 1 && Y)
      if (z === 0)
        Y.beforeEnter(U), s(U, V, F), qe(() => Y.enter(U), H);
      else {
        const { leave: ee, delayLeave: se, afterLeave: ae } = Y, _e = () => {
          _.ctx.isUnmounted ? o(U) : s(U, V, F);
        }, Oe = () => {
          ee(U, () => {
            _e(), ae && ae();
          });
        };
        se ? se(U, _e, Oe) : Oe();
      }
    else
      s(U, V, F);
  }, En = (_, V, F, z = !1, H = !1) => {
    const {
      type: U,
      props: Z,
      ref: Y,
      children: K,
      dynamicChildren: W,
      shapeFlag: ie,
      patchFlag: ee,
      dirs: se,
      cacheIndex: ae
    } = _;
    if (ee === -2 && (H = !1), Y != null && (Gt(), xs(Y, null, F, _, !0), Yt()), ae != null && (V.renderCache[ae] = void 0), ie & 256) {
      V.ctx.deactivate(_);
      return;
    }
    const _e = ie & 1 && se, Oe = !In(_);
    let Ne;
    if (Oe && (Ne = Z && Z.onVnodeBeforeUnmount) && Et(Ne, V, _), ie & 6)
      Bf(_.component, F, z);
    else {
      if (ie & 128) {
        _.suspense.unmount(F, z);
        return;
      }
      _e && tn(_, null, V, "beforeUnmount"), ie & 64 ? _.type.remove(
        _,
        V,
        F,
        hs,
        z
      ) : W && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !W.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== re || ee > 0 && ee & 64) ? Hs(
        W,
        V,
        F,
        !1,
        !0
      ) : (U === re && ee & 384 || !H && ie & 16) && Hs(K, V, F), z && Zr(_);
    }
    (Oe && (Ne = Z && Z.onVnodeUnmounted) || _e) && qe(() => {
      Ne && Et(Ne, V, _), _e && tn(_, null, V, "unmounted");
    }, F);
  }, Zr = (_) => {
    const { type: V, el: F, anchor: z, transition: H } = _;
    if (V === re) {
      k.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && H && !H.persisted ? _.children.forEach((Z) => {
        Z.type === Ve ? o(Z.el) : Zr(Z);
      }) : Ff(F, z);
      return;
    }
    if (V === Mn) {
      y(_);
      return;
    }
    const U = () => {
      o(F), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (_.shapeFlag & 1 && H && !H.persisted) {
      const { leave: Z, delayLeave: Y } = H, K = () => Z(F, U);
      Y ? Y(_.el, U, K) : K();
    } else
      U();
  }, Ff = (_, V) => {
    let F;
    for (; _ !== V; )
      F = p(_), o(_), _ = F;
    o(V);
  }, Bf = (_, V, F) => {
    k.NODE_ENV !== "production" && _.type.__hmrId && rh(_);
    const {
      bum: z,
      scope: H,
      job: U,
      subTree: Z,
      um: Y,
      m: K,
      a: W,
      parent: ie,
      slots: { __: ee }
    } = _;
    pr(K), pr(W), z && Tn(z), ie && J(ee) && ee.forEach((se) => {
      ie.renderCache[se] = void 0;
    }), H.stop(), U && (U.flags |= 8, En(Z, _, V, F)), Y && qe(Y, V), qe(() => {
      _.isUnmounted = !0;
    }, V), V && V.pendingBranch && !V.isUnmounted && _.asyncDep && !_.asyncResolved && _.suspenseId === V.pendingId && (V.deps--, V.deps === 0 && V.resolve()), k.NODE_ENV !== "production" && dh(_);
  }, Hs = (_, V, F, z = !1, H = !1, U = 0) => {
    for (let Z = U; Z < _.length; Z++)
      En(_[Z], V, F, z, H);
  }, Ao = (_) => {
    if (_.shapeFlag & 6)
      return Ao(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const V = p(_.anchor || _.el), F = V && V[vu];
    return F ? p(F) : V;
  };
  let ei = !1;
  const na = (_, V, F) => {
    _ == null ? V._vnode && En(V._vnode, null, null, !0) : h(
      V._vnode || null,
      _,
      V,
      null,
      null,
      null,
      F
    ), V._vnode = _, ei || (ei = !0, pa(), ar(), ei = !1);
  }, hs = {
    p: h,
    um: En,
    m: Tt,
    r: Zr,
    mt: P,
    mc: b,
    pc: be,
    pbc: R,
    n: Ao,
    o: e
  };
  let ti, ni;
  return t && ([ti, ni] = t(
    hs
  )), {
    render: na,
    hydrate: ti,
    createApp: mm(na, ti)
  };
}
function pi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Un({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ro(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (J(s) && J(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = On(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && ro(i, l)), l.type === on && (l.el = i.el), l.type === Ve && !l.el && (l.el = i.el), k.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Dm(e) {
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
function Qu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Qu(t);
}
function pr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Zu = Symbol.for("v-scx"), ed = () => {
  {
    const e = oo(Zu);
    return e || k.NODE_ENV !== "production" && B(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Vm(e, t) {
  return Oo(e, null, t);
}
function Am(e, t) {
  return Oo(
    e,
    null,
    k.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function td(e, t) {
  return Oo(
    e,
    null,
    k.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Wt(e, t, n) {
  return k.NODE_ENV !== "production" && !oe(t) && B(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Oo(e, t, n);
}
function Oo(e, t, n = pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  k.NODE_ENV !== "production" && !t && (s !== void 0 && B(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && B(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && B(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  k.NODE_ENV !== "production" && (l.onWarn = B);
  const a = t && s || !t && r !== "post";
  let c;
  if ($s) {
    if (r === "sync") {
      const m = ed();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = De, m.resume = De, m.pause = De, m;
    }
  }
  const u = Ke;
  l.call = (m, g, h) => Mt(m, u, g, h);
  let d = !1;
  r === "post" ? l.scheduler = (m) => {
    qe(m, u && u.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (m, g) => {
    g ? m() : Br(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), d && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const p = Yp(e, t, l);
  return $s && (c ? c.push(p) : a && p()), p;
}
function Im(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? nd(s, e) : () => s[e] : e.bind(s, s);
  let r;
  oe(t) ? r = t : (r = t.handler, n = t);
  const i = as(this), l = Oo(o, r.bind(s), n);
  return i(), l;
}
function nd(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Mm(e, t, n = pe) {
  const s = dt();
  if (k.NODE_ENV !== "production" && !s)
    return B("useModel() called without active instance."), G();
  const o = Ce(t);
  if (k.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return B(`useModel() called with prop "${t}" which is not declared.`), G();
  const r = ot(t), i = sd(e, o), l = iu((a, c) => {
    let u, d = pe, p;
    return td(() => {
      const m = e[o];
      mt(u, m) && (u = m, c());
    }), {
      get() {
        return a(), n.get ? n.get(u) : u;
      },
      set(m) {
        const g = n.set ? n.set(m) : m;
        if (!mt(g, u) && !(d !== pe && mt(m, d)))
          return;
        const h = s.vnode.props;
        h && // check if parent has passed v-model
        (t in h || o in h || r in h) && (`onUpdate:${t}` in h || `onUpdate:${o}` in h || `onUpdate:${r}` in h) || (u = m, c()), s.emit(`update:${t}`, g), mt(m, g) && mt(m, d) && !mt(g, p) && c(), d = m, p = g;
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
const sd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${ot(t)}Modifiers`];
function Pm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (k.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(nn(Ce(t)) in d)) && B(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nn(Ce(t))}" prop.`
        );
      else {
        const p = u[t];
        oe(p) && (p(...n) || B(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && sd(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => le(u) ? u.trim() : u)), i.number && (o = n.map(nr))), k.NODE_ENV !== "production" && hh(e, t, o), k.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[nn(u)] && B(
      `Event "${u}" is emitted in component ${Gr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ot(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = nn(t)] || // also try camelCase event handler (#2249)
  s[l = nn(Ce(t))];
  !a && r && (a = s[l = nn(ot(t))]), a && Mt(
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
function od(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!oe(e)) {
    const a = (c) => {
      const u = od(c, t, !0);
      u && (l = !0, fe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ge(e) && s.set(e, null), null) : (J(r) ? r.forEach((a) => i[a] = null) : fe(i, r), ge(e) && s.set(e, i), i);
}
function zr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, ot(t)) || ve(e, t));
}
let Vi = !1;
function hr() {
  Vi = !0;
}
function Go(e) {
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
    renderCache: u,
    props: d,
    data: p,
    setupState: m,
    ctx: g,
    inheritAttrs: h
  } = e, I = go(e);
  let C, N;
  k.NODE_ENV !== "production" && (Vi = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = o || s, A = k.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(y, {
        get(S, O, b) {
          return B(
            `Property '${String(
              O
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(S, O, b);
        }
      }) : y;
      C = vt(
        c.call(
          A,
          y,
          u,
          k.NODE_ENV !== "production" ? Ht(d) : d,
          m,
          p,
          g
        )
      ), N = l;
    } else {
      const y = t;
      k.NODE_ENV !== "production" && l === d && hr(), C = vt(
        y.length > 1 ? y(
          k.NODE_ENV !== "production" ? Ht(d) : d,
          k.NODE_ENV !== "production" ? {
            get attrs() {
              return hr(), Ht(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : y(
          k.NODE_ENV !== "production" ? Ht(d) : d,
          null
        )
      ), N = t.props ? l : Rm(l);
    }
  } catch (y) {
    io.length = 0, jn(y, e, 1), C = ue(Ve);
  }
  let v = C, w;
  if (k.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([v, w] = rd(C)), N && h !== !1) {
    const y = Object.keys(N), { shapeFlag: A } = v;
    if (y.length) {
      if (A & 7)
        r && y.some(tr) && (N = Lm(
          N,
          r
        )), v = Pt(v, N, !1, !0);
      else if (k.NODE_ENV !== "production" && !Vi && v.type !== Ve) {
        const S = Object.keys(l), O = [], b = [];
        for (let T = 0, R = S.length; T < R; T++) {
          const D = S[T];
          vn(D) ? tr(D) || O.push(D[2].toLowerCase() + D.slice(3)) : b.push(D);
        }
        b.length && B(
          `Extraneous non-props attributes (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), O.length && B(
          `Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (k.NODE_ENV !== "production" && !Ta(v) && B(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), v = Pt(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (k.NODE_ENV !== "production" && !Ta(v) && B(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(v, n.transition)), k.NODE_ENV !== "production" && w ? w(v) : C = v, go(I), C;
}
const rd = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Wr(t, !1);
  if (s) {
    if (k.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return rd(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [vt(s), i];
};
function Wr(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (ln(o)) {
      if (o.type !== Ve || o.children === "v-if") {
        if (n)
          return;
        if (n = o, k.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Wr(n.children);
      }
    } else
      return;
  }
  return n;
}
const Rm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lm = (e, t) => {
  const n = {};
  for (const s in e)
    (!tr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Ta = (e) => e.shapeFlag & 7 || e.type === Ve;
function Fm(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (k.NODE_ENV !== "production" && (o || l) && Ut || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Da(s, i, c) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
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
function Kr({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const mr = (e) => e.__isSuspense;
let Ai = 0;
const Bm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, r, i, l, a, c) {
    if (e == null)
      Hm(
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
      Um(
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
  hydrate: qm,
  normalize: zm
}, jm = Bm;
function yo(e, t) {
  const n = e.props && e.props[t];
  oe(n) && n();
}
function Hm(e, t, n, s, o, r, i, l, a) {
  const {
    p: c,
    o: { createElement: u }
  } = a, d = u("div"), p = e.suspense = id(
    e,
    o,
    s,
    t,
    d,
    n,
    r,
    i,
    l,
    a
  );
  c(
    null,
    p.pendingBranch = e.ssContent,
    d,
    null,
    s,
    p,
    r,
    i
  ), p.deps > 0 ? (yo(e, "onPending"), yo(e, "onFallback"), c(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    r,
    i
  ), Ns(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Um(e, t, n, s, o, r, i, l, { p: a, um: c, o: { createElement: u } }) {
  const d = t.suspense = e.suspense;
  d.vnode = t, t.el = e.el;
  const p = t.ssContent, m = t.ssFallback, { activeBranch: g, pendingBranch: h, isInFallback: I, isHydrating: C } = d;
  if (h)
    d.pendingBranch = p, jt(p, h) ? (a(
      h,
      p,
      d.hiddenContainer,
      null,
      o,
      d,
      r,
      i,
      l
    ), d.deps <= 0 ? d.resolve() : I && (C || (a(
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
    ), Ns(d, m)))) : (d.pendingId = Ai++, C ? (d.isHydrating = !1, d.activeBranch = h) : c(h, o, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), I ? (a(
      null,
      p,
      d.hiddenContainer,
      null,
      o,
      d,
      r,
      i,
      l
    ), d.deps <= 0 ? d.resolve() : (a(
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
    ), Ns(d, m))) : g && jt(p, g) ? (a(
      g,
      p,
      n,
      s,
      o,
      d,
      r,
      i,
      l
    ), d.resolve(!0)) : (a(
      null,
      p,
      d.hiddenContainer,
      null,
      o,
      d,
      r,
      i,
      l
    ), d.deps <= 0 && d.resolve()));
  else if (g && jt(p, g))
    a(
      g,
      p,
      n,
      s,
      o,
      d,
      r,
      i,
      l
    ), Ns(d, p);
  else if (yo(t, "onPending"), d.pendingBranch = p, p.shapeFlag & 512 ? d.pendingId = p.component.suspenseId : d.pendingId = Ai++, a(
    null,
    p,
    d.hiddenContainer,
    null,
    o,
    d,
    r,
    i,
    l
  ), d.deps <= 0)
    d.resolve();
  else {
    const { timeout: N, pendingId: v } = d;
    N > 0 ? setTimeout(() => {
      d.pendingId === v && d.fallback(m);
    }, N) : N === 0 && d.fallback(m);
  }
}
let Va = !1;
function id(e, t, n, s, o, r, i, l, a, c, u = !1) {
  k.NODE_ENV !== "production" && !Va && (Va = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: d,
    m: p,
    um: m,
    n: g,
    o: { parentNode: h, remove: I }
  } = c;
  let C;
  const N = Wm(e);
  N && t && t.pendingBranch && (C = t.pendingId, t.deps++);
  const v = e.props ? sr(e.props.timeout) : void 0;
  k.NODE_ENV !== "production" && hl(v, "Suspense timeout");
  const w = r, y = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Ai++,
    timeout: typeof v == "number" ? v : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !u,
    isHydrating: u,
    isUnmounted: !1,
    effects: [],
    resolve(A = !1, S = !1) {
      if (k.NODE_ENV !== "production") {
        if (!A && !y.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (y.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: O,
        activeBranch: b,
        pendingBranch: T,
        pendingId: R,
        effects: D,
        parentComponent: $,
        container: M
      } = y;
      let P = !1;
      y.isHydrating ? y.isHydrating = !1 : A || (P = b && T.transition && T.transition.mode === "out-in", P && (b.transition.afterLeave = () => {
        R === y.pendingId && (p(
          T,
          M,
          r === w ? g(b) : r,
          0
        ), Cs(D));
      }), b && (h(b.el) === M && (r = g(b)), m(b, $, y, !0)), P || p(T, M, r, 0)), Ns(y, T), y.pendingBranch = null, y.isInFallback = !1;
      let L = y.parent, Q = !1;
      for (; L; ) {
        if (L.pendingBranch) {
          L.effects.push(...D), Q = !0;
          break;
        }
        L = L.parent;
      }
      !Q && !P && Cs(D), y.effects = [], N && t && t.pendingBranch && C === t.pendingId && (t.deps--, t.deps === 0 && !S && t.resolve()), yo(O, "onResolve");
    },
    fallback(A) {
      if (!y.pendingBranch)
        return;
      const { vnode: S, activeBranch: O, parentComponent: b, container: T, namespace: R } = y;
      yo(S, "onFallback");
      const D = g(O), $ = () => {
        y.isInFallback && (d(
          null,
          A,
          T,
          D,
          b,
          null,
          // fallback tree will not have suspense context
          R,
          l,
          a
        ), Ns(y, A));
      }, M = A.transition && A.transition.mode === "out-in";
      M && (O.transition.afterLeave = $), y.isInFallback = !0, m(
        O,
        b,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), M || $();
    },
    move(A, S, O) {
      y.activeBranch && p(y.activeBranch, A, S, O), y.container = A;
    },
    next() {
      return y.activeBranch && g(y.activeBranch);
    },
    registerDep(A, S, O) {
      const b = !!y.pendingBranch;
      b && y.deps++;
      const T = A.vnode.el;
      A.asyncDep.catch((R) => {
        jn(R, A, 0);
      }).then((R) => {
        if (A.isUnmounted || y.isUnmounted || y.pendingId !== A.suspenseId)
          return;
        A.asyncResolved = !0;
        const { vnode: D } = A;
        k.NODE_ENV !== "production" && _s(D), Fi(A, R, !1), T && (D.el = T);
        const $ = !T && A.subTree.el;
        S(
          A,
          D,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          h(T || A.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          T ? null : g(A.subTree),
          y,
          i,
          O
        ), $ && I($), Kr(A, D.el), k.NODE_ENV !== "production" && Es(), b && --y.deps === 0 && y.resolve();
      });
    },
    unmount(A, S) {
      y.isUnmounted = !0, y.activeBranch && m(
        y.activeBranch,
        n,
        A,
        S
      ), y.pendingBranch && m(
        y.pendingBranch,
        n,
        A,
        S
      );
    }
  };
  return y;
}
function qm(e, t, n, s, o, r, i, l, a) {
  const c = t.suspense = id(
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
  ), u = a(
    e,
    c.pendingBranch = t.ssContent,
    n,
    c,
    r,
    i
  );
  return c.deps === 0 && c.resolve(!1, !0), u;
}
function zm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Aa(
    s ? n.default : n
  ), e.ssFallback = s ? Aa(n.fallback) : ue(Ve);
}
function Aa(e) {
  let t;
  if (oe(e)) {
    const n = is && e._c;
    n && (e._d = !1, E()), e = e(), n && (e._d = !0, t = it, ad());
  }
  if (J(e)) {
    const n = Wr(e);
    k.NODE_ENV !== "production" && !n && e.filter((s) => s !== xl).length > 0 && B("<Suspense> slots expect a single root node."), e = n;
  }
  return e = vt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function ld(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : Cs(e);
}
function Ns(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, Kr(s, o));
}
function Wm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const re = Symbol.for("v-fgt"), on = Symbol.for("v-txt"), Ve = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), io = [];
let it = null;
function E(e = !1) {
  io.push(it = e ? null : []);
}
function ad() {
  io.pop(), it = io[io.length - 1] || null;
}
let is = 1;
function Ii(e, t = !1) {
  is += e, e < 0 && it && t && (it.hasOnce = !0);
}
function cd(e) {
  return e.dynamicChildren = is > 0 ? it || bs : null, ad(), is > 0 && it && it.push(e), e;
}
function x(e, t, n, s, o, r) {
  return cd(
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
function ut(e, t, n, s, o) {
  return cd(
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
function jt(e, t) {
  if (k.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Wo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Mi;
function Km(e) {
  Mi = e;
}
const Gm = (...e) => dd(
  ...Mi ? Mi(e, Be) : e
), ud = ({ key: e }) => e ?? null, Yo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || Pe(e) || oe(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, o = null, r = e === re ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ud(t),
    ref: t && Yo(t),
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
    ctx: Be
  };
  return l ? (Dl(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), k.NODE_ENV !== "production" && a.key !== a.key && B("VNode created with invalid key (NaN). VNode type:", a.type), is > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  it && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && it.push(a), a;
}
const ue = k.NODE_ENV !== "production" ? Gm : dd;
function dd(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === xl) && (k.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = Ve), ln(e)) {
    const l = Pt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Dl(l, n), is > 0 && !r && it && (l.shapeFlag & 6 ? it[it.indexOf(e)] = l : it.push(l)), l.patchFlag = -2, l;
  }
  if (Ed(e) && (e = e.__vccOpts), t) {
    t = fd(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = xe(l)), ge(a) && (ks(a) && !J(a) && (a = fe({}, a)), t.style = Ge(a));
  }
  const i = le(e) ? 1 : mr(e) ? 128 : yu(e) ? 64 : ge(e) ? 4 : oe(e) ? 2 : 0;
  return k.NODE_ENV !== "production" && i & 4 && ks(e) && (e = ce(e), B(
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
function fd(e) {
  return e ? ks(e) || Hu(e) ? fe({}, e) : e : null;
}
function Pt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, c = t ? hd(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ud(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? J(r) ? r.concat(Yo(t)) : [r, Yo(t)] : Yo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: k.NODE_ENV !== "production" && i === -1 && J(l) ? l.map(pd) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== re ? i === -1 ? 16 : i | 16 : i,
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
    u,
    a.clone(u)
  ), u;
}
function pd(e) {
  const t = Pt(e);
  return J(e.children) && (t.children = e.children.map(pd)), t;
}
function je(e = " ", t = 0) {
  return ue(on, null, e, t);
}
function ls(e, t) {
  const n = ue(Mn, null, e);
  return n.staticCount = t, n;
}
function j(e = "", t = !1) {
  return t ? (E(), ut(Ve, null, e)) : ue(Ve, null, e);
}
function vt(e) {
  return e == null || typeof e == "boolean" ? ue(Ve) : J(e) ? ue(
    re,
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
  else if (J(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Dl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Hu(t) ? t._ctx = Be : o === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else oe(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [je(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function hd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = xe([t.class, s.class]));
      else if (o === "style")
        t.style = Ge([t.style, s.style]);
      else if (vn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(J(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Et(e, t, n, s = null) {
  Mt(e, t, 7, [
    n,
    s
  ]);
}
const Ym = Lu();
let Jm = 0;
function md(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Ym, r = {
    uid: Jm++,
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
    propsOptions: qu(s, o),
    emitsOptions: od(s, o),
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
  return k.NODE_ENV !== "production" ? r.ctx = Wh(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Pm.bind(null, r), e.ce && e.ce(r), r;
}
let Ke = null;
const dt = () => Ke || Be;
let gr, Pi;
{
  const e = So(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  gr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), Pi = t(
    "__VUE_SSR_SETTERS__",
    (n) => $s = n
  );
}
const as = (e) => {
  const t = Ke;
  return gr(e), e.scope.on(), () => {
    e.scope.off(), gr(t);
  };
}, Ri = () => {
  Ke && Ke.scope.off(), gr(null);
}, Xm = /* @__PURE__ */ Ye("slot,component");
function Li(e, { isNativeTag: t }) {
  (Xm(e) || t(e)) && B(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function gd(e) {
  return e.vnode.shapeFlag & 4;
}
let $s = !1;
function vd(e, t = !1, n = !1) {
  t && Pi(t);
  const { props: s, children: o } = e.vnode, r = gd(e);
  vm(e, s, r, t), Om(e, o, n || t);
  const i = r ? Qm(e, t) : void 0;
  return t && Pi(!1), i;
}
function Qm(e, t) {
  var n;
  const s = e.type;
  if (k.NODE_ENV !== "production") {
    if (s.name && Li(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Li(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        gu(r[i]);
    }
    s.compilerOptions && Vl() && B(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, so), k.NODE_ENV !== "production" && Kh(e);
  const { setup: o } = s;
  if (o) {
    Gt();
    const r = e.setupContext = o.length > 1 ? _d(e) : null, i = as(e), l = ds(
      o,
      e,
      0,
      [
        k.NODE_ENV !== "production" ? Ht(e.props) : e.props,
        r
      ]
    ), a = Tr(l);
    if (Yt(), i(), (a || e.sp) && !In(e) && El(e), a) {
      if (l.then(Ri, Ri), t)
        return l.then((c) => {
          Fi(e, c, t);
        }).catch((c) => {
          jn(c, e, 0);
        });
      if (e.asyncDep = l, k.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        B(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Fi(e, l, t);
  } else
    bd(e, t);
}
function Fi(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? (k.NODE_ENV !== "production" && ln(t) && B(
    "setup() should not return VNodes directly - return a render function instead."
  ), k.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = pl(t), k.NODE_ENV !== "production" && Gh(e)) : k.NODE_ENV !== "production" && t !== void 0 && B(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), bd(e, n);
}
let lo, Bi;
function yd(e) {
  lo = e, Bi = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, zh));
  };
}
const Vl = () => !lo;
function bd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && lo && !s.render) {
      const o = s.template || Ol(e).template;
      if (o) {
        k.NODE_ENV !== "production" && cn(e, "compile");
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
        s.render = lo(o, c), k.NODE_ENV !== "production" && un(e, "compile");
      }
    }
    e.render = s.render || De, Bi && Bi(e);
  }
  {
    const o = as(e);
    Gt();
    try {
      cm(e);
    } finally {
      Yt(), o();
    }
  }
  k.NODE_ENV !== "production" && !s.render && e.render === De && !t && (!lo && s.template ? B(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : B("Component is missing template or render function: ", s));
}
const Ia = k.NODE_ENV !== "production" ? {
  get(e, t) {
    return hr(), ze(e, "get", ""), e[t];
  },
  set() {
    return B("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return B("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ze(e, "get", ""), e[t];
  }
};
function Zm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ze(e, "get", "$slots"), t[n];
    }
  });
}
function _d(e) {
  const t = (n) => {
    if (k.NODE_ENV !== "production" && (e.exposed && B("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (J(n) ? s = "array" : Pe(n) && (s = "ref")), s !== "object" && B(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (k.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ia));
      },
      get slots() {
        return s || (s = Zm(e));
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
function $o(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(pl(su(e.exposed)), {
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
const e0 = /(?:^|[-_])(\w)/g, t0 = (e) => e.replace(e0, (t) => t.toUpperCase()).replace(/[-_]/g, "");
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
  return s ? t0(s) : n ? "App" : "Anonymous";
}
function Ed(e) {
  return oe(e) && "__vccOpts" in e;
}
const te = (e, t) => {
  const n = zp(e, t, $s);
  if (k.NODE_ENV !== "production") {
    const s = dt();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function en(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ge(t) && !J(t) ? ln(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ln(n) && (n = [n]), ue(e, t, n));
}
function wd() {
  if (k.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!ge(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (Pe(d)) {
        Gt();
        const p = d.value;
        return Yt(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (mn(d))
          return [
            "div",
            {},
            ["span", e, lt(d) ? "ShallowReactive" : "Reactive"],
            "<",
            l(d),
            `>${Jt(d) ? " (readonly)" : ""}`
          ];
        if (Jt(d))
          return [
            "div",
            {},
            ["span", e, lt(d) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(d),
            ">"
          ];
      }
      return null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const p = [];
    d.type.props && d.props && p.push(i("props", ce(d.props))), d.setupState !== pe && p.push(i("setup", d.setupState)), d.data !== pe && p.push(i("data", ce(d.data)));
    const m = a(d, "computed");
    m && p.push(i("computed", m));
    const g = a(d, "inject");
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
      ["object", { object: d }]
    ]), p;
  }
  function i(d, p) {
    return p = fe({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
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
  function l(d, p = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", s, d] : ge(d) ? ["object", { object: p ? ce(d) : d }] : ["span", n, String(d)];
  }
  function a(d, p) {
    const m = d.type;
    if (oe(m))
      return;
    const g = {};
    for (const h in d.ctx)
      c(m, h, p) && (g[h] = d.ctx[h]);
    return g;
  }
  function c(d, p, m) {
    const g = d[m];
    if (J(g) && g.includes(p) || ge(g) && p in g || d.extends && c(d.extends, p, m) || d.mixins && d.mixins.some((h) => c(h, p, m)))
      return !0;
  }
  function u(d) {
    return lt(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function n0(e, t, n, s) {
  const o = n[s];
  if (o && xd(o, e))
    return o;
  const r = t();
  return r.memo = e.slice(), r.cacheIndex = s, n[s] = r;
}
function xd(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (mt(n[s], t[s]))
      return !1;
  return is > 0 && it && it.push(e), !0;
}
const ji = "3.5.18", Ie = k.NODE_ENV !== "production" ? B : De, s0 = Fr, o0 = Bt, r0 = gl, i0 = {
  createComponentInstance: md,
  setupComponent: vd,
  renderComponentRoot: Go,
  setCurrentRenderingInstance: go,
  isVNode: ln,
  normalizeVNode: vt,
  getComponentPublicInstance: $o,
  ensureValidVNode: kl,
  pushWarningContext: _s,
  popWarningContext: Es
}, l0 = i0, a0 = null, c0 = null, u0 = null;
var ke = {};
let Hi;
const Ma = typeof window < "u" && window.trustedTypes;
if (Ma)
  try {
    Hi = /* @__PURE__ */ Ma.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ke.NODE_ENV !== "production" && Ie(`Error creating trusted types policy: ${e}`);
  }
const Nd = Hi ? (e) => Hi.createHTML(e) : (e) => e, d0 = "http://www.w3.org/2000/svg", f0 = "http://www.w3.org/1998/Math/MathML", fn = typeof document < "u" ? document : null, Pa = fn && /* @__PURE__ */ fn.createElement("template"), p0 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? fn.createElementNS(d0, e) : t === "mathml" ? fn.createElementNS(f0, e) : n ? fn.createElement(e, { is: n }) : fn.createElement(e);
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
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, wn = "transition", Ws = "animation", Ds = Symbol("_vtc"), Sd = {
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
}, kd = /* @__PURE__ */ fe(
  {},
  bl,
  Sd
), h0 = (e) => (e.displayName = "Transition", e.props = kd, e), rt = /* @__PURE__ */ h0(
  (e, { slots: t }) => en(xu, Cd(e), t)
), qn = (e, t = []) => {
  J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ra = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Cd(e) {
  const t = {};
  for (const D in e)
    D in Sd || (t[D] = e[D]);
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
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, g = m0(o), h = g && g[0], I = g && g[1], {
    onBeforeEnter: C,
    onEnter: N,
    onEnterCancelled: v,
    onLeave: w,
    onLeaveCancelled: y,
    onBeforeAppear: A = C,
    onAppear: S = N,
    onAppearCancelled: O = v
  } = t, b = (D, $, M, P) => {
    D._enterCancelled = P, Nn(D, $ ? u : l), Nn(D, $ ? c : i), M && M();
  }, T = (D, $) => {
    D._isLeaving = !1, Nn(D, d), Nn(D, m), Nn(D, p), $ && $();
  }, R = (D) => ($, M) => {
    const P = D ? S : N, L = () => b($, D, M);
    qn(P, [$, L]), La(() => {
      Nn($, D ? a : r), Qt($, D ? u : l), Ra(P) || Fa($, s, h, L);
    });
  };
  return fe(t, {
    onBeforeEnter(D) {
      qn(C, [D]), Qt(D, r), Qt(D, i);
    },
    onBeforeAppear(D) {
      qn(A, [D]), Qt(D, a), Qt(D, c);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(D, $) {
      D._isLeaving = !0;
      const M = () => T(D, $);
      Qt(D, d), D._enterCancelled ? (Qt(D, p), Ui()) : (Ui(), Qt(D, p)), La(() => {
        D._isLeaving && (Nn(D, d), Qt(D, m), Ra(w) || Fa(D, s, I, M));
      }), qn(w, [D, M]);
    },
    onEnterCancelled(D) {
      b(D, !1, void 0, !0), qn(v, [D]);
    },
    onAppearCancelled(D) {
      b(D, !0, void 0, !0), qn(O, [D]);
    },
    onLeaveCancelled(D) {
      T(D), qn(y, [D]);
    }
  });
}
function m0(e) {
  if (e == null)
    return null;
  if (ge(e))
    return [hi(e.enter), hi(e.leave)];
  {
    const t = hi(e);
    return [t, t];
  }
}
function hi(e) {
  const t = sr(e);
  return ke.NODE_ENV !== "production" && hl(t, "<transition> explicit duration"), t;
}
function Qt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ds] || (e[Ds] = /* @__PURE__ */ new Set())).add(t);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ds];
  n && (n.delete(t), n.size || (e[Ds] = void 0));
}
function La(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let g0 = 0;
function Fa(e, t, n, s) {
  const o = e._endId = ++g0, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = Od(e, t);
  if (!i)
    return s();
  const c = i + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, p), r();
  }, p = (m) => {
    m.target === e && ++u >= a && d();
  };
  setTimeout(() => {
    u < a && d();
  }, l + 1), e.addEventListener(c, p);
}
function Od(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${wn}Delay`), r = s(`${wn}Duration`), i = Ba(o, r), l = s(`${Ws}Delay`), a = s(`${Ws}Duration`), c = Ba(l, a);
  let u = null, d = 0, p = 0;
  t === wn ? i > 0 && (u = wn, d = i, p = r.length) : t === Ws ? c > 0 && (u = Ws, d = c, p = a.length) : (d = Math.max(i, c), u = d > 0 ? i > c ? wn : Ws : null, p = u ? u === wn ? r.length : a.length : 0);
  const m = u === wn && /\b(transform|all)(,|$)/.test(
    s(`${wn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
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
function v0(e, t, n) {
  const s = e[Ds];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vr = Symbol("_vod"), $d = Symbol("_vsh"), Al = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[vr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ks(e, t);
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
ke.NODE_ENV !== "production" && (Al.name = "show");
function Ks(e, t) {
  e.style.display = t ? e[vr] : "none", e[$d] = !t;
}
function y0() {
  Al.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Td = Symbol(ke.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function b0(e) {
  const t = dt();
  if (!t) {
    ke.NODE_ENV !== "production" && Ie("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => yr(r, o));
  };
  ke.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const o = e(t.proxy);
    t.ce ? yr(t.ce, o) : qi(t.subTree, o), n(o);
  };
  wl(() => {
    Cs(s);
  }), He(() => {
    Wt(s, De, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), Rt(() => o.disconnect());
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
    yr(e.el, t);
  else if (e.type === re)
    e.children.forEach((n) => qi(n, t));
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
      const r = Fc(t[o]);
      n.setProperty(`--${o}`, r), s += `--${o}: ${r};`;
    }
    n[Td] = s;
  }
}
const _0 = /(^|;)\s*display\s*:/;
function E0(e, t, n) {
  const s = e.style, o = le(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Jo(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Jo(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Jo(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Td];
      i && (n += ";" + i), s.cssText = n, r = _0.test(n);
    }
  } else t && e.removeAttribute("style");
  vr in e && (e[vr] = r ? s.display : "", e[$d] && (s.display = "none"));
}
const w0 = /[^\\];\s*$/, Ha = /\s*!important$/;
function Jo(e, t, n) {
  if (J(n))
    n.forEach((s) => Jo(e, t, s));
  else if (n == null && (n = ""), ke.NODE_ENV !== "production" && w0.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = x0(e, t);
    Ha.test(n) ? e.setProperty(
      ot(s),
      n.replace(Ha, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ua = ["Webkit", "Moz", "ms"], mi = {};
function x0(e, t) {
  const n = mi[t];
  if (n)
    return n;
  let s = Ce(t);
  if (s !== "filter" && s in e)
    return mi[t] = s;
  s = rn(s);
  for (let o = 0; o < Ua.length; o++) {
    const r = Ua[o] + s;
    if (r in e)
      return mi[t] = r;
  }
  return t;
}
const qa = "http://www.w3.org/1999/xlink";
function za(e, t, n, s, o, r = ip(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qa, t.slice(6, t.length)) : e.setAttributeNS(qa, t, n) : n == null || r && !ll(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Nt(n) ? String(n) : n
  );
}
function Wa(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Nd(n) : n);
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
    ke.NODE_ENV !== "production" && !i && Ie(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function hn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function N0(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ka = Symbol("_vei");
function S0(e, t, n, s, o = null) {
  const r = e[Ka] || (e[Ka] = {}), i = r[t];
  if (s && i)
    i.value = ke.NODE_ENV !== "production" ? Ya(s, t) : s;
  else {
    const [l, a] = k0(t);
    if (s) {
      const c = r[t] = $0(
        ke.NODE_ENV !== "production" ? Ya(s, t) : s,
        o
      );
      hn(e, l, c, a);
    } else i && (N0(e, l, i, a), r[t] = void 0);
  }
}
const Ga = /(?:Once|Passive|Capture)$/;
function k0(e) {
  let t;
  if (Ga.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ga); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ot(e.slice(2)), t];
}
let gi = 0;
const C0 = /* @__PURE__ */ Promise.resolve(), O0 = () => gi || (C0.then(() => gi = 0), gi = Date.now());
function $0(e, t) {
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
  return n.value = e, n.attached = O0(), n;
}
function Ya(e, t) {
  return oe(e) || J(e) ? e : (Ie(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), De);
}
function T0(e, t) {
  if (J(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, D0 = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? v0(e, s, i) : t === "style" ? E0(e, n, s) : vn(t) ? tr(t) || S0(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : V0(e, t, s, i)) ? (Wa(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && za(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Wa(e, Ce(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), za(e, t, s, i));
};
function V0(e, t, n, s) {
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
function Ue(e, t, n) {
  const s = /* @__PURE__ */ _l(e, t);
  Dr(s) && fe(s, t);
  class o extends Yr {
    constructor(i) {
      super(s, i, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const A0 = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Ue(e, t, Bd), I0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Yr extends I0 {
  constructor(t, n = {}, s = Ft) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Ft ? this._root = this.shadowRoot : (ke.NODE_ENV !== "production" && this.shadowRoot && Ie(
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
    this._connected = !1, Ln(() => {
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
      if (r && !J(r))
        for (const a in r) {
          const c = r[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = sr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ce(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(i) : ke.NODE_ENV !== "production" && i && Ie(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    ke.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        ve(this, s) ? ke.NODE_ENV !== "production" && Ie(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ko(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = J(n) ? n : Object.keys(n || {});
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
    if (n !== this._props[t] && (n === Xa ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const r = this._ob;
      r && r.disconnect(), n === !0 ? this.setAttribute(ot(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ot(t), n + "") : n || this.removeAttribute(ot(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Fd(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ue(this._def, fe(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, ke.NODE_ENV !== "production" && (s.ceReload = (r) => {
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
        o(r, i), ot(r) !== r && o(ot(r), i);
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
      if (s && r.setAttribute("nonce", s), r.textContent = t[o], this.shadowRoot.prepend(r), ke.NODE_ENV !== "production")
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
            const c = n + "-s", u = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let d;
            for (; d = u.nextNode(); )
              d.setAttribute(c, "");
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
    if (ke.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
function zi(e) {
  const t = dt(), n = t && t.ce;
  return n || (ke.NODE_ENV !== "production" && Ie(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function M0() {
  const e = ke.NODE_ENV !== "production" ? zi("useShadowRoot") : zi();
  return e && e.shadowRoot;
}
function P0(e = "$style") {
  {
    const t = dt();
    if (!t)
      return ke.NODE_ENV !== "production" && Ie("useCssModule must be called inside setup()"), pe;
    const n = t.type.__cssModules;
    if (!n)
      return ke.NODE_ENV !== "production" && Ie("Current instance does not have CSS modules injected."), pe;
    const s = n[e];
    return s || (ke.NODE_ENV !== "production" && Ie(`Current instance does not have CSS module named "${e}".`), pe);
  }
}
const Dd = /* @__PURE__ */ new WeakMap(), Vd = /* @__PURE__ */ new WeakMap(), br = Symbol("_moveCb"), Qa = Symbol("_enterCb"), R0 = (e) => (delete e.props.mode, e), L0 = /* @__PURE__ */ R0({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, kd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = dt(), s = yl();
    let o, r;
    return qr(() => {
      if (!o.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!U0(
        o[0].el,
        n.vnode.el,
        i
      )) {
        o = [];
        return;
      }
      o.forEach(B0), o.forEach(j0);
      const l = o.filter(H0);
      Ui(), l.forEach((a) => {
        const c = a.el, u = c.style;
        Qt(c, i), u.transform = u.webkitTransform = u.transitionDuration = "";
        const d = c[br] = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", d), c[br] = null, Nn(c, i));
        };
        c.addEventListener("transitionend", d);
      }), o = [];
    }), () => {
      const i = ce(e), l = Cd(i);
      let a = i.tag || re;
      if (o = [], r)
        for (let c = 0; c < r.length; c++) {
          const u = r[c];
          u.el && u.el instanceof Element && (o.push(u), yn(
            u,
            Os(
              u,
              l,
              s,
              n
            )
          ), Dd.set(
            u,
            u.el.getBoundingClientRect()
          ));
        }
      r = t.default ? Hr(t.default()) : [];
      for (let c = 0; c < r.length; c++) {
        const u = r[c];
        u.key != null ? yn(
          u,
          Os(u, l, s, n)
        ) : ke.NODE_ENV !== "production" && u.type !== on && Ie("<TransitionGroup> children must be keyed.");
      }
      return ue(a, null, r);
    };
  }
}), F0 = L0;
function B0(e) {
  const t = e.el;
  t[br] && t[br](), t[Qa] && t[Qa]();
}
function j0(e) {
  Vd.set(e, e.el.getBoundingClientRect());
}
function H0(e) {
  const t = Dd.get(e), n = Vd.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${o}px)`, r.transitionDuration = "0s", e;
  }
}
function U0(e, t, n) {
  const s = e.cloneNode(), o = e[Ds];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: i } = Od(s);
  return r.removeChild(s), i;
}
const Fn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (n) => Tn(t, n) : t;
};
function q0(e) {
  e.target.composing = !0;
}
function Za(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const At = Symbol("_assign"), Bn = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[At] = Fn(o);
    const r = s || o.props && o.props.type === "number";
    hn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = nr(l)), e[At](l);
    }), n && hn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (hn(e, "compositionstart", q0), hn(e, "compositionend", Za), hn(e, "change", Za));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[At] = Fn(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? nr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Le = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[At] = Fn(n), hn(e, "change", () => {
      const s = e._modelValue, o = As(e), r = e.checked, i = e[At];
      if (J(s)) {
        const l = Ar(s, o), a = l !== -1;
        if (r && !a)
          i(s.concat(o));
        else if (!r && a) {
          const c = [...s];
          c.splice(l, 1), i(c);
        }
      } else if (us(s)) {
        const l = new Set(s);
        r ? l.add(o) : l.delete(o), i(l);
      } else
        i(Ad(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ec,
  beforeUpdate(e, t, n) {
    e[At] = Fn(n), ec(e, t, n);
  }
};
function ec(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (J(t))
    o = Ar(t, s.props.value) > -1;
  else if (us(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = Rn(t, Ad(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Il = {
  created(e, { value: t }, n) {
    e.checked = Rn(t, n.props.value), e[At] = Fn(n), hn(e, "change", () => {
      e[At](As(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[At] = Fn(s), t !== n && (e.checked = Rn(t, s.props.value));
  }
}, Vs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = us(t);
    hn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? nr(As(i)) : As(i)
      );
      e[At](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ln(() => {
        e._assigning = !1;
      });
    }), e[At] = Fn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    tc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[At] = Fn(n);
  },
  updated(e, { value: t }) {
    e._assigning || tc(e, t);
  }
};
function tc(e, t) {
  const n = e.multiple, s = J(t);
  if (n && !s && !us(t)) {
    ke.NODE_ENV !== "production" && Ie(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = As(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((c) => String(c) === String(l)) : i.selected = Ar(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (Rn(As(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function As(e) {
  return "_value" in e ? e._value : e.value;
}
function Ad(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Id = {
  created(e, t, n) {
    jo(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    jo(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    jo(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    jo(e, t, n, s, "updated");
  }
};
function Md(e, t) {
  switch (e) {
    case "SELECT":
      return Vs;
    case "TEXTAREA":
      return Bn;
    default:
      switch (t) {
        case "checkbox":
          return Le;
        case "radio":
          return Il;
        default:
          return Bn;
      }
  }
}
function jo(e, t, n, s, o) {
  const i = Md(
    e.tagName,
    n.props && n.props.type
  )[o];
  i && i(e, t, n, s);
}
function z0() {
  Bn.getSSRProps = ({ value: e }) => ({ value: e }), Il.getSSRProps = ({ value: e }, t) => {
    if (t.props && Rn(t.props.value, e))
      return { checked: !0 };
  }, Le.getSSRProps = ({ value: e }, t) => {
    if (J(e)) {
      if (t.props && Ar(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (us(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Id.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Md(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const W0 = ["ctrl", "shift", "alt", "meta"], K0 = {
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
  exact: (e, t) => W0.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ot = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = K0[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  });
}, G0 = {
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
    const r = ot(o.key);
    if (t.some(
      (i) => i === r || G0[i] === r
    ))
      return e(o);
  });
}, Pd = /* @__PURE__ */ fe({ patchProp: D0 }, p0);
let ao, nc = !1;
function Rd() {
  return ao || (ao = Gu(Pd));
}
function Ld() {
  return ao = nc ? ao : Yu(Pd), nc = !0, ao;
}
const Fd = (...e) => {
  Rd().render(...e);
}, Y0 = (...e) => {
  Ld().hydrate(...e);
}, Ft = (...e) => {
  const t = Rd().createApp(...e);
  ke.NODE_ENV !== "production" && (Hd(t), Ud(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = qd(s);
    if (!o) return;
    const r = t._component;
    !oe(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, jd(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
}, Bd = (...e) => {
  const t = Ld().createApp(...e);
  ke.NODE_ENV !== "production" && (Hd(t), Ud(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = qd(s);
    if (o)
      return n(o, !0, jd(o));
  }, t;
};
function jd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ac(t) || Ic(t) || Mc(t),
    writable: !1
  });
}
function Ud(e) {
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
function qd(e) {
  if (le(e)) {
    const t = document.querySelector(e);
    return ke.NODE_ENV !== "production" && !t && Ie(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ke.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ie(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let sc = !1;
const J0 = () => {
  sc || (sc = !0, z0(), y0());
}, X0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: xu,
  BaseTransitionPropsValidators: bl,
  Comment: Ve,
  DeprecationTypes: u0,
  EffectScope: al,
  ErrorCodes: eh,
  ErrorTypeStrings: s0,
  Fragment: re,
  KeepAlive: Lh,
  ReactiveEffect: fo,
  Static: Mn,
  Suspense: jm,
  Teleport: bn,
  Text: on,
  TrackOpTypes: Wp,
  Transition: rt,
  TransitionGroup: F0,
  TriggerOpTypes: Kp,
  VueElement: Yr,
  assertNumber: hl,
  callWithAsyncErrorHandling: Mt,
  callWithErrorHandling: ds,
  camelize: Ce,
  capitalize: rn,
  cloneVNode: Pt,
  compatUtils: c0,
  computed: te,
  createApp: Ft,
  createBlock: ut,
  createCommentVNode: j,
  createElementBlock: x,
  createElementVNode: f,
  createHydrationRenderer: Yu,
  createPropsRestProxy: im,
  createRenderer: Gu,
  createSSRApp: Bd,
  createSlots: Uh,
  createStaticVNode: ls,
  createTextVNode: je,
  createVNode: ue,
  customRef: iu,
  defineAsyncComponent: Ph,
  defineComponent: _l,
  defineCustomElement: Ue,
  defineEmits: Jh,
  defineExpose: Xh,
  defineModel: em,
  defineOptions: Qh,
  defineProps: Yh,
  defineSSRCustomElement: A0,
  defineSlots: Zh,
  devtools: o0,
  effect: mp,
  effectScope: pp,
  getCurrentInstance: dt,
  getCurrentScope: cl,
  getCurrentWatcher: Gp,
  getTransitionRawChildren: Hr,
  guardReactiveProps: fd,
  h: en,
  handleError: jn,
  hasInjectionContext: gm,
  hydrate: Y0,
  hydrateOnIdle: Th,
  hydrateOnInteraction: Ih,
  hydrateOnMediaQuery: Ah,
  hydrateOnVisible: Vh,
  initCustomFormatter: wd,
  initDirectivesForSSR: J0,
  inject: oo,
  isMemoSame: xd,
  isProxy: ks,
  isReactive: mn,
  isReadonly: Jt,
  isRef: Pe,
  isRuntimeOnly: Vl,
  isShallow: lt,
  isVNode: ln,
  markRaw: su,
  mergeDefaults: om,
  mergeModels: rm,
  mergeProps: hd,
  nextTick: Ln,
  normalizeClass: xe,
  normalizeProps: ep,
  normalizeStyle: Ge,
  onActivated: Ou,
  onBeforeMount: Du,
  onBeforeUnmount: js,
  onBeforeUpdate: wl,
  onDeactivated: $u,
  onErrorCaptured: Mu,
  onMounted: He,
  onRenderTracked: Iu,
  onRenderTriggered: Au,
  onScopeDispose: Bc,
  onServerPrefetch: Vu,
  onUnmounted: Rt,
  onUpdated: qr,
  onWatcherCleanup: au,
  openBlock: E,
  popScopeId: gh,
  provide: Fu,
  proxyRefs: pl,
  pushScopeId: mh,
  queuePostFlushCb: Cs,
  reactive: Ss,
  readonly: Rr,
  ref: G,
  registerRuntimeCompiler: yd,
  render: Fd,
  renderList: me,
  renderSlot: fs,
  resolveComponent: jh,
  resolveDirective: Hh,
  resolveDynamicComponent: Nl,
  resolveFilter: a0,
  resolveTransitionHooks: Os,
  setBlockTracking: Ii,
  setDevtoolsHook: r0,
  setTransitionHooks: yn,
  shallowReactive: nu,
  shallowReadonly: Ht,
  shallowRef: ou,
  ssrContextKey: Zu,
  ssrUtils: l0,
  stop: gp,
  toDisplayString: q,
  toHandlerKey: nn,
  toHandlers: qh,
  toRaw: ce,
  toRef: Up,
  toRefs: Bp,
  toValue: Rp,
  transformVNodeArgs: Km,
  triggerRef: Pp,
  unref: ko,
  useAttrs: sm,
  useCssModule: P0,
  useCssVars: b0,
  useHost: zi,
  useId: _h,
  useModel: Mm,
  useSSRContext: ed,
  useShadowRoot: M0,
  useSlots: nm,
  useTemplateRef: Eh,
  useTransitionState: yl,
  vModelCheckbox: Le,
  vModelDynamic: Id,
  vModelRadio: Il,
  vModelSelect: Vs,
  vModelText: Bn,
  vShow: Al,
  version: ji,
  warn: Ie,
  watch: Wt,
  watchEffect: Vm,
  watchPostEffect: Am,
  watchSyncEffect: td,
  withAsyncContext: lm,
  withCtx: Me,
  withDefaults: tm,
  withDirectives: $e,
  withKeys: _r,
  withMemo: n0,
  withModifiers: Ot,
  withScopeId: vh
}, Symbol.toStringTag, { value: "Module" }));
var X = {};
const bo = Symbol(X.NODE_ENV !== "production" ? "Fragment" : ""), co = Symbol(X.NODE_ENV !== "production" ? "Teleport" : ""), Ml = Symbol(X.NODE_ENV !== "production" ? "Suspense" : ""), Er = Symbol(X.NODE_ENV !== "production" ? "KeepAlive" : ""), zd = Symbol(
  X.NODE_ENV !== "production" ? "BaseTransition" : ""
), cs = Symbol(X.NODE_ENV !== "production" ? "openBlock" : ""), Wd = Symbol(X.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  X.NODE_ENV !== "production" ? "createElementBlock" : ""
), Pl = Symbol(X.NODE_ENV !== "production" ? "createVNode" : ""), Rl = Symbol(
  X.NODE_ENV !== "production" ? "createElementVNode" : ""
), To = Symbol(
  X.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Ll = Symbol(
  X.NODE_ENV !== "production" ? "createTextVNode" : ""
), Gd = Symbol(
  X.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Fl = Symbol(
  X.NODE_ENV !== "production" ? "resolveComponent" : ""
), Bl = Symbol(
  X.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), jl = Symbol(
  X.NODE_ENV !== "production" ? "resolveDirective" : ""
), Hl = Symbol(
  X.NODE_ENV !== "production" ? "resolveFilter" : ""
), Ul = Symbol(
  X.NODE_ENV !== "production" ? "withDirectives" : ""
), ql = Symbol(X.NODE_ENV !== "production" ? "renderList" : ""), Yd = Symbol(X.NODE_ENV !== "production" ? "renderSlot" : ""), Jd = Symbol(X.NODE_ENV !== "production" ? "createSlots" : ""), Jr = Symbol(
  X.NODE_ENV !== "production" ? "toDisplayString" : ""
), wr = Symbol(X.NODE_ENV !== "production" ? "mergeProps" : ""), zl = Symbol(
  X.NODE_ENV !== "production" ? "normalizeClass" : ""
), Wl = Symbol(
  X.NODE_ENV !== "production" ? "normalizeStyle" : ""
), _o = Symbol(
  X.NODE_ENV !== "production" ? "normalizeProps" : ""
), Do = Symbol(
  X.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Kl = Symbol(X.NODE_ENV !== "production" ? "toHandlers" : ""), Wi = Symbol(X.NODE_ENV !== "production" ? "camelize" : ""), Q0 = Symbol(X.NODE_ENV !== "production" ? "capitalize" : ""), Ki = Symbol(
  X.NODE_ENV !== "production" ? "toHandlerKey" : ""
), xr = Symbol(
  X.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Z0 = Symbol(X.NODE_ENV !== "production" ? "pushScopeId" : ""), eg = Symbol(X.NODE_ENV !== "production" ? "popScopeId" : ""), Gl = Symbol(X.NODE_ENV !== "production" ? "withCtx" : ""), tg = Symbol(X.NODE_ENV !== "production" ? "unref" : ""), ng = Symbol(X.NODE_ENV !== "production" ? "isRef" : ""), Yl = Symbol(X.NODE_ENV !== "production" ? "withMemo" : ""), Xd = Symbol(X.NODE_ENV !== "production" ? "isMemoSame" : ""), Is = {
  [bo]: "Fragment",
  [co]: "Teleport",
  [Ml]: "Suspense",
  [Er]: "KeepAlive",
  [zd]: "BaseTransition",
  [cs]: "openBlock",
  [Wd]: "createBlock",
  [Kd]: "createElementBlock",
  [Pl]: "createVNode",
  [Rl]: "createElementVNode",
  [To]: "createCommentVNode",
  [Ll]: "createTextVNode",
  [Gd]: "createStaticVNode",
  [Fl]: "resolveComponent",
  [Bl]: "resolveDynamicComponent",
  [jl]: "resolveDirective",
  [Hl]: "resolveFilter",
  [Ul]: "withDirectives",
  [ql]: "renderList",
  [Yd]: "renderSlot",
  [Jd]: "createSlots",
  [Jr]: "toDisplayString",
  [wr]: "mergeProps",
  [zl]: "normalizeClass",
  [Wl]: "normalizeStyle",
  [_o]: "normalizeProps",
  [Do]: "guardReactiveProps",
  [Kl]: "toHandlers",
  [Wi]: "camelize",
  [Q0]: "capitalize",
  [Ki]: "toHandlerKey",
  [xr]: "setBlockTracking",
  [Z0]: "pushScopeId",
  [eg]: "popScopeId",
  [Gl]: "withCtx",
  [tg]: "unref",
  [ng]: "isRef",
  [Yl]: "withMemo",
  [Xd]: "isMemoSame"
};
function sg(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Is[t] = e[t];
  });
}
const $t = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function og(e, t = "") {
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
    loc: $t
  };
}
function Eo(e, t, n, s, o, r, i, l = !1, a = !1, c = !1, u = $t) {
  return e && (l ? (e.helper(cs), e.helper(Rs(e.inSSR, c))) : e.helper(Ps(e.inSSR, c)), i && e.helper(Ul)), {
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
    loc: u
  };
}
function ns(e, t = $t) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Vt(e, t = $t) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Re(e, t) {
  return {
    type: 16,
    loc: $t,
    key: le(e) ? de(e, !0) : e,
    value: t
  };
}
function de(e, t = !1, n = $t, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function Kt(e, t = $t) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function We(e, t = [], n = $t) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function Ms(e, t = void 0, n = !1, s = !1, o = $t) {
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
    loc: $t
  };
}
function rg(e, t, n = !1, s = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: s,
    needArraySpread: !1,
    loc: $t
  };
}
function ig(e) {
  return {
    type: 21,
    body: e,
    loc: $t
  };
}
function Ps(e, t) {
  return e || t ? Pl : Rl;
}
function Rs(e, t) {
  return e || t ? Wd : Kd;
}
function Jl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Ps(s, e.isComponent)), t(cs), t(Rs(s, e.isComponent)));
}
const oc = new Uint8Array([123, 123]), rc = new Uint8Array([125, 125]);
function ic(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function kt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function xn(e) {
  return e === 47 || e === 62 || kt(e);
}
function Nr(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Xe = {
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
class lg {
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
      if (t === 62 || kt(t)) {
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
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Xe.TitleEnd || this.currentSequence === Xe.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Xe.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Xe.Cdata.length && (this.state = 28, this.currentSequence = Xe.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
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
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Xe.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
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
      n !== "template" && this.enterRCDATA(Nr("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    kt(t) || (t === 62 ? (X.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = ic(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || kt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, X.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : kt(t) || (X.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : kt(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || xn(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : X.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
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
    t === 93 ? this.state = 14 : (t === 61 || xn(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), X.NODE_ENV !== "production" && this.cbs.onerr(
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
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : kt(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : kt(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
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
    kt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (X.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
    t === 45 ? (this.state = 28, this.currentSequence = Xe.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Xe.ScriptEnd[3] ? this.startSpecial(Xe.ScriptEnd, 4) : t === Xe.StyleEnd[3] ? this.startSpecial(Xe.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Xe.TitleEnd[3] ? this.startSpecial(Xe.TitleEnd, 4) : t === Xe.TextareaEnd[3] ? this.startSpecial(Xe.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
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
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Xe.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const ag = {
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
function Ls(e, t, n, ...s) {
  const o = Pn(e, t);
  return X.NODE_ENV !== "production" && o && Sr(e, t, n, ...s), o;
}
function Sr(e, t, n, ...s) {
  if (Yi(e, t) === "suppress-warning")
    return;
  const { message: r, link: i } = ag[e], l = `(deprecation ${e}) ${typeof r == "function" ? r(...s) : r}${i ? `
  Details: ${i}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Xl(e) {
  throw e;
}
function Qd(e) {
  X.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Se(e, t, n, s) {
  const o = X.NODE_ENV !== "production" ? (n || cg)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(o));
  return r.code = e, r.loc = t, r;
}
const cg = {
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
}, xt = (e) => e.type === 4 && e.isStatic;
function Zd(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return co;
    case "Suspense":
    case "suspense":
      return Ml;
    case "KeepAlive":
    case "keep-alive":
      return Er;
    case "BaseTransition":
    case "base-transition":
      return zd;
  }
}
const ug = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Ql = (e) => !ug.test(e), dg = /[A-Za-z_$\xA0-\uFFFF]/, fg = /[\.\?\w$\xA0-\uFFFF]/, pg = /\s+[.[]\s*|\s*[.[]\s+/g, ef = (e) => e.type === 4 ? e.content : e.loc.source, hg = (e) => {
  const t = ef(e).trim().replace(pg, (l) => l.trim());
  let n = 0, s = [], o = 0, r = 0, i = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, r++;
        else if (!(l === 0 ? dg : fg).test(a))
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
}, tf = hg, mg = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, gg = (e) => mg.test(ef(e)), vg = gg;
function lc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function wt(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 7 && (n || o.exp) && (le(t) ? o.name === t : t.test(o.name)))
      return o;
  }
}
function wo(e, t, n = !1, s = !1) {
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
  return !!(e && xt(e) && e.content === t);
}
function yg(e) {
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
function bg(e) {
  return e.type === 7 && e.name === "slot";
}
function kr(e) {
  return e.type === 1 && e.tagType === 3;
}
function Cr(e) {
  return e.type === 1 && e.tagType === 2;
}
const _g = /* @__PURE__ */ new Set([_o, Do]);
function nf(e, t = []) {
  if (e && !le(e) && e.type === 14) {
    const n = e.callee;
    if (!le(n) && _g.has(n))
      return nf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Or(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], r = [], i;
  if (o && !le(o) && o.type === 14) {
    const l = nf(o);
    o = l[0], r = l[1], i = r[r.length - 1];
  }
  if (o == null || le(o))
    s = Vt([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !le(l) && l.type === 15 ? cc(t, l) || l.properties.unshift(t) : o.callee === Kl ? s = We(n.helper(wr), [
      Vt([t]),
      o
    ]) : o.arguments.unshift(Vt([t])), !s && (s = o);
  } else o.type === 15 ? (cc(t, o) || o.properties.unshift(t), s = o) : (s = We(n.helper(wr), [
    Vt([t]),
    o
  ]), i && i.callee === Do && (i = r[r.length - 2]));
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
function xo(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function Eg(e) {
  return e.type === 14 && e.callee === Yl ? e.arguments[1].returns : e;
}
const wg = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, sf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Gs,
  isPreTag: Gs,
  isIgnoreNewlineTag: Gs,
  isCustomElement: Gs,
  onError: Xl,
  onWarn: Qd,
  comments: X.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ye = sf, No = null, gn = "", st = null, he = null, _t = "", dn = -1, zn = -1, Zl = 0, $n = !1, Ji = null;
const Ae = [], Te = new lg(Ae, {
  onerr: bt,
  ontext(e, t) {
    Ho(Qe(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Ho(e, t, n);
  },
  oninterpolation(e, t) {
    if ($n)
      return Ho(Qe(e, t), e, t);
    let n = e + Te.delimiterOpen.length, s = t - Te.delimiterClose.length;
    for (; kt(gn.charCodeAt(n)); )
      n++;
    for (; kt(gn.charCodeAt(s - 1)); )
      s--;
    let o = Qe(n, s);
    o.includes("&") && (o = ye.decodeEntities(o, !1)), Xi({
      type: 5,
      content: Qo(o, !1, Fe(n, s)),
      loc: Fe(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Qe(e, t);
    st = {
      type: 1,
      tag: n,
      ns: ye.getNamespace(n, Ae[0], ye.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Fe(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    dc(e);
  },
  onclosetag(e, t) {
    const n = Qe(e, t);
    if (!ye.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < Ae.length; o++)
        if (Ae[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && bt(24, Ae[0].loc.start.offset);
          for (let i = 0; i <= o; i++) {
            const l = Ae.shift();
            Xo(l, t, i < o);
          }
          break;
        }
      s || bt(23, of(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = st.tag;
    st.isSelfClosing = !0, dc(e), Ae[0] && Ae[0].tag === t && Xo(Ae.shift(), e);
  },
  onattribname(e, t) {
    he = {
      type: 6,
      name: Qe(e, t),
      nameLoc: Fe(e, t),
      value: void 0,
      loc: Fe(e)
    };
  },
  ondirname(e, t) {
    const n = Qe(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!$n && s === "" && bt(26, e), $n || s === "")
      he = {
        type: 6,
        name: n,
        nameLoc: Fe(e, t),
        value: void 0,
        loc: Fe(e)
      };
    else if (he = {
      type: 7,
      name: s,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [de("prop")] : [],
      loc: Fe(e)
    }, s === "pre") {
      $n = Te.inVPre = !0, Ji = st;
      const o = st.props;
      for (let r = 0; r < o.length; r++)
        o[r].type === 7 && (o[r] = Ag(o[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Qe(e, t);
    if ($n && !ac(he))
      he.name += n, Gn(he.nameLoc, t);
    else {
      const s = n[0] !== "[";
      he.arg = Qo(
        s ? n : n.slice(1, -1),
        s,
        Fe(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Qe(e, t);
    if ($n && !ac(he))
      he.name += "." + n, Gn(he.nameLoc, t);
    else if (he.name === "slot") {
      const s = he.arg;
      s && (s.content += "." + n, Gn(s.loc, t));
    } else {
      const s = de(n, !0, Fe(e, t));
      he.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    _t += Qe(e, t), dn < 0 && (dn = e), zn = t;
  },
  onattribentity(e, t, n) {
    _t += e, dn < 0 && (dn = t), zn = n;
  },
  onattribnameend(e) {
    const t = he.loc.start.offset, n = Qe(t, e);
    he.type === 7 && (he.rawName = n), st.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && bt(2, t);
  },
  onattribend(e, t) {
    if (st && he) {
      if (Gn(he.loc, t), e !== 0)
        if (_t.includes("&") && (_t = ye.decodeEntities(
          _t,
          !0
        )), he.type === 6)
          he.name === "class" && (_t = lf(_t).trim()), e === 1 && !_t && bt(13, t), he.value = {
            type: 2,
            content: _t,
            loc: e === 1 ? Fe(dn, zn) : Fe(dn - 1, zn + 1)
          }, Te.inSFCRoot && st.tag === "template" && he.name === "lang" && _t && _t !== "html" && Te.enterRCDATA(Nr("</template"), 0);
        else {
          let n = 0;
          he.exp = Qo(
            _t,
            !1,
            Fe(dn, zn),
            0,
            n
          ), he.name === "for" && (he.forParseResult = Ng(he.exp));
          let s = -1;
          he.name === "bind" && (s = he.modifiers.findIndex(
            (o) => o.content === "sync"
          )) > -1 && Ls(
            "COMPILER_V_BIND_SYNC",
            ye,
            he.loc,
            he.arg.loc.source
          ) && (he.name = "model", he.modifiers.splice(s, 1));
        }
      (he.type !== 7 || he.name !== "pre") && st.props.push(he);
    }
    _t = "", dn = zn = -1;
  },
  oncomment(e, t) {
    ye.comments && Xi({
      type: 3,
      content: Qe(e, t),
      loc: Fe(e - 4, t + 3)
    });
  },
  onend() {
    const e = gn.length;
    if (X.NODE_ENV !== "production" && Te.state !== 1)
      switch (Te.state) {
        case 5:
        case 8:
          bt(5, e);
          break;
        case 3:
        case 4:
          bt(
            25,
            Te.sectionStart
          );
          break;
        case 28:
          Te.currentSequence === Xe.CdataEnd ? bt(6, e) : bt(7, e);
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
          bt(9, e);
          break;
      }
    for (let t = 0; t < Ae.length; t++)
      Xo(Ae[t], e - 1), bt(24, Ae[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ae[0].ns !== 0 ? Ho(Qe(e, t), e, t) : bt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ae[0] ? Ae[0].ns : ye.ns) === 0 && bt(
      21,
      e - 1
    );
  }
}), uc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, xg = /^\(|\)$/g;
function Ng(e) {
  const t = e.loc, n = e.content, s = n.match(wg);
  if (!s) return;
  const [, o, r] = s, i = (d, p, m = !1) => {
    const g = t.start.offset + p, h = g + d.length;
    return Qo(
      d,
      !1,
      Fe(g, h),
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
  let a = o.trim().replace(xg, "").trim();
  const c = o.indexOf(a), u = a.match(uc);
  if (u) {
    a = a.replace(uc, "").trim();
    const d = u[1].trim();
    let p;
    if (d && (p = n.indexOf(d, c + a.length), l.key = i(d, p, !0)), u[2]) {
      const m = u[2].trim();
      m && (l.index = i(
        m,
        n.indexOf(
          m,
          l.key ? p + d.length : c + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = i(a, c, !0)), l;
}
function Qe(e, t) {
  return gn.slice(e, t);
}
function dc(e) {
  Te.inSFCRoot && (st.innerLoc = Fe(e + 1, e + 1)), Xi(st);
  const { tag: t, ns: n } = st;
  n === 0 && ye.isPreTag(t) && Zl++, ye.isVoidTag(t) ? Xo(st, e) : (Ae.unshift(st), (n === 1 || n === 2) && (Te.inXML = !0)), st = null;
}
function Ho(e, t, n) {
  {
    const r = Ae[0] && Ae[0].tag;
    r !== "script" && r !== "style" && e.includes("&") && (e = ye.decodeEntities(e, !1));
  }
  const s = Ae[0] || No, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Gn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Fe(t, n)
  });
}
function Xo(e, t, n = !1) {
  n ? Gn(e.loc, of(t, 60)) : Gn(e.loc, Sg(t, 62) + 1), Te.inSFCRoot && (e.children.length ? e.innerLoc.end = fe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = fe({}, e.innerLoc.start), e.innerLoc.source = Qe(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: r } = e;
  if ($n || (s === "slot" ? e.tagType = 2 : fc(e) ? e.tagType = 3 : Cg(e) && (e.tagType = 1)), Te.inRCDATA || (e.children = rf(r)), o === 0 && ye.isIgnoreNewlineTag(s)) {
    const i = r[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ye.isPreTag(s) && Zl--, Ji === e && ($n = Te.inVPre = !1, Ji = null), Te.inXML && (Ae[0] ? Ae[0].ns : ye.ns) === 0 && (Te.inXML = !1);
  {
    const i = e.props;
    if (X.NODE_ENV !== "production" && Pn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ye
    )) {
      let a = !1, c = !1;
      for (let u = 0; u < i.length; u++) {
        const d = i[u];
        if (d.type === 7 && (d.name === "if" ? a = !0 : d.name === "for" && (c = !0)), a && c) {
          Sr(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ye,
            e.loc
          );
          break;
        }
      }
    }
    if (!Te.inSFCRoot && Pn(
      "COMPILER_NATIVE_TEMPLATE",
      ye
    ) && e.tag === "template" && !fc(e)) {
      X.NODE_ENV !== "production" && Sr(
        "COMPILER_NATIVE_TEMPLATE",
        ye,
        e.loc
      );
      const a = Ae[0] || No, c = a.children.indexOf(e);
      a.children.splice(c, 1, ...e.children);
    }
    const l = i.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Ls(
      "COMPILER_INLINE_TEMPLATE",
      ye,
      l.loc
    ) && e.children.length && (l.value = {
      type: 2,
      content: Qe(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function Sg(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n < gn.length - 1; ) n++;
  return n;
}
function of(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const kg = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function fc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && kg.has(t[n].name))
        return !0;
  }
  return !1;
}
function Cg({ tag: e, props: t }) {
  if (ye.isCustomElement(e))
    return !1;
  if (e === "component" || Og(e.charCodeAt(0)) || Zd(e) || ye.isBuiltInComponent && ye.isBuiltInComponent(e) || ye.isNativeTag && !ye.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (Ls(
          "COMPILER_IS_ON_ELEMENT",
          ye,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Vn(s.arg, "is") && Ls(
        "COMPILER_IS_ON_ELEMENT",
        ye,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function Og(e) {
  return e > 64 && e < 91;
}
const $g = /\r\n/g;
function rf(e) {
  const t = ye.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (Zl)
        o.content = o.content.replace($g, `
`);
      else if (Tg(o.content)) {
        const r = e[s - 1] && e[s - 1].type, i = e[s + 1] && e[s + 1].type;
        !r || !i || t && (r === 3 && (i === 3 || i === 1) || r === 1 && (i === 3 || i === 1 && Dg(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = lf(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function Tg(e) {
  for (let t = 0; t < e.length; t++)
    if (!kt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function Dg(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function lf(e) {
  let t = "", n = !1;
  for (let s = 0; s < e.length; s++)
    kt(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Xi(e) {
  (Ae[0] || No).children.push(e);
}
function Fe(e, t) {
  return {
    start: Te.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : Te.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Qe(e, t)
  };
}
function Vg(e) {
  return Fe(e.start.offset, e.end.offset);
}
function Gn(e, t) {
  e.end = Te.getPos(t), e.source = Qe(e.start.offset, t);
}
function Ag(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Fe(
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
function Qo(e, t = !1, n, s = 0, o = 0) {
  return de(e, t, n, s);
}
function bt(e, t, n) {
  ye.onError(
    Se(e, Fe(t, t), void 0, n)
  );
}
function Ig() {
  Te.reset(), st = null, he = null, _t = "", dn = -1, zn = -1, Ae.length = 0;
}
function Mg(e, t) {
  if (Ig(), gn = e, ye = fe({}, sf), t) {
    let o;
    for (o in t)
      t[o] != null && (ye[o] = t[o]);
  }
  if (X.NODE_ENV !== "production" && !ye.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  Te.mode = ye.parseMode === "html" ? 1 : ye.parseMode === "sfc" ? 2 : 0, Te.inXML = ye.ns === 1 || ye.ns === 2;
  const n = t && t.delimiters;
  n && (Te.delimiterOpen = Nr(n[0]), Te.delimiterClose = Nr(n[1]));
  const s = No = og([], e);
  return Te.parse(gn), s.loc = Fe(0, e.length), s.children = rf(s.children), No = null, s;
}
function Pg(e, t) {
  Zo(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!af(e)
  );
}
function af(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !Cr(t[0]) ? t[0] : null;
}
function Zo(e, t, n, s = !1, o = !1) {
  const { children: r } = e, i = [];
  for (let d = 0; d < r.length; d++) {
    const p = r[d];
    if (p.type === 1 && p.tagType === 0) {
      const m = s ? 0 : Ct(p, n);
      if (m > 0) {
        if (m >= 2) {
          p.codegenNode.patchFlag = -1, i.push(p);
          continue;
        }
      } else {
        const g = p.codegenNode;
        if (g.type === 13) {
          const h = g.patchFlag;
          if ((h === void 0 || h === 512 || h === 1) && uf(p, n) >= 2) {
            const I = df(p);
            I && (g.props = n.hoist(I));
          }
          g.dynamicProps && (g.dynamicProps = n.hoist(g.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : Ct(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (X.NODE_ENV !== "production" ? ` /* ${eo[-1]} */` : "")
      ), i.push(p);
      continue;
    }
    if (p.type === 1) {
      const m = p.tagType === 1;
      m && n.scopes.vSlot++, Zo(p, e, n, !1, o), m && n.scopes.vSlot--;
    } else if (p.type === 11)
      Zo(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let m = 0; m < p.branches.length; m++)
        Zo(
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
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && J(e.codegenNode.children))
      e.codegenNode.children = c(
        ns(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !J(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const d = u(e.codegenNode, "default");
      d && (a.push(n.cached.length), d.returns = c(
        ns(d.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !J(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const d = wt(e, "slot", !0), p = d && d.arg && u(t.codegenNode, d.arg);
      p && (a.push(n.cached.length), p.returns = c(
        ns(p.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const d of i)
      a.push(n.cached.length), d.codegenNode = n.cache(d.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !J(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Re(
      "__",
      de(JSON.stringify(a), !1)
    )
  );
  function c(d) {
    const p = n.cache(d);
    return o && n.hmr && (p.needArraySpread = !0), p;
  }
  function u(d, p) {
    if (d.children && !J(d.children) && d.children.type === 15) {
      const m = d.children.properties.find(
        (g) => g.key === p || g.key.content === p
      );
      return m && m.value;
    }
  }
  i.length && n.transformHoist && n.transformHoist(r, n, e);
}
function Ct(e, t) {
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
        const l = uf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < i && (i = l);
        for (let a = 0; a < e.children.length; a++) {
          const c = Ct(e.children[a], t);
          if (c === 0)
            return n.set(e, 0), 0;
          c < i && (i = c);
        }
        if (i > 1)
          for (let a = 0; a < e.props.length; a++) {
            const c = e.props[a];
            if (c.type === 7 && c.name === "bind" && c.exp) {
              const u = Ct(c.exp, t);
              if (u === 0)
                return n.set(e, 0), 0;
              u < i && (i = u);
            }
          }
        if (o.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(cs), t.removeHelper(
            Rs(t.inSSR, o.isComponent)
          ), o.isBlock = !1, t.helper(Ps(t.inSSR, o.isComponent));
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
      return Ct(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let r = 3;
      for (let i = 0; i < e.children.length; i++) {
        const l = e.children[i];
        if (le(l) || Nt(l))
          continue;
        const a = Ct(l, t);
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
const Rg = /* @__PURE__ */ new Set([
  zl,
  Wl,
  _o,
  Do
]);
function cf(e, t) {
  if (e.type === 14 && !le(e.callee) && Rg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return Ct(n, t);
    if (n.type === 14)
      return cf(n, t);
  }
  return 0;
}
function uf(e, t) {
  let n = 3;
  const s = df(e);
  if (s && s.type === 15) {
    const { properties: o } = s;
    for (let r = 0; r < o.length; r++) {
      const { key: i, value: l } = o[r], a = Ct(i, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let c;
      if (l.type === 4 ? c = Ct(l, t) : l.type === 14 ? c = cf(l, t) : c = 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function df(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function Lg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: r = !1,
  nodeTransforms: i = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: c = De,
  isCustomElement: u = De,
  expressionPlugins: d = [],
  scopeId: p = null,
  slotted: m = !0,
  ssr: g = !1,
  inSSR: h = !1,
  ssrCssVars: I = "",
  bindingMetadata: C = pe,
  inline: N = !1,
  isTS: v = !1,
  onError: w = Xl,
  onWarn: y = Qd,
  compatConfig: A
}) {
  const S = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), O = {
    // options
    filename: t,
    selfName: S && rn(Ce(S[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: o,
    cacheHandlers: r,
    nodeTransforms: i,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: c,
    isCustomElement: u,
    expressionPlugins: d,
    scopeId: p,
    slotted: m,
    ssr: g,
    inSSR: h,
    ssrCssVars: I,
    bindingMetadata: C,
    inline: N,
    isTS: v,
    onError: w,
    onWarn: y,
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
    helper(b) {
      const T = O.helpers.get(b) || 0;
      return O.helpers.set(b, T + 1), b;
    },
    removeHelper(b) {
      const T = O.helpers.get(b);
      if (T) {
        const R = T - 1;
        R ? O.helpers.set(b, R) : O.helpers.delete(b);
      }
    },
    helperString(b) {
      return `_${Is[O.helper(b)]}`;
    },
    replaceNode(b) {
      if (X.NODE_ENV !== "production") {
        if (!O.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!O.parent)
          throw new Error("Cannot replace root node.");
      }
      O.parent.children[O.childIndex] = O.currentNode = b;
    },
    removeNode(b) {
      if (X.NODE_ENV !== "production" && !O.parent)
        throw new Error("Cannot remove root node.");
      const T = O.parent.children, R = b ? T.indexOf(b) : O.currentNode ? O.childIndex : -1;
      if (X.NODE_ENV !== "production" && R < 0)
        throw new Error("node being removed is not a child of current parent");
      !b || b === O.currentNode ? (O.currentNode = null, O.onNodeRemoved()) : O.childIndex > R && (O.childIndex--, O.onNodeRemoved()), O.parent.children.splice(R, 1);
    },
    onNodeRemoved: De,
    addIdentifiers(b) {
    },
    removeIdentifiers(b) {
    },
    hoist(b) {
      le(b) && (b = de(b)), O.hoists.push(b);
      const T = de(
        `_hoisted_${O.hoists.length}`,
        !1,
        b.loc,
        2
      );
      return T.hoisted = b, T;
    },
    cache(b, T = !1, R = !1) {
      const D = rg(
        O.cached.length,
        b,
        T,
        R
      );
      return O.cached.push(D), D;
    }
  };
  return O.filters = /* @__PURE__ */ new Set(), O;
}
function Fg(e, t) {
  const n = Lg(e, t);
  Xr(e, n), t.hoistStatic && Pg(e, n), t.ssr || Bg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Bg(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const o = af(e);
    if (o && o.codegenNode) {
      const r = o.codegenNode;
      r.type === 13 && Jl(r, t), e.codegenNode = r;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let o = 64;
    X.NODE_ENV !== "production" && s.filter((r) => r.type !== 3).length === 1 && (o |= 2048), e.codegenNode = Eo(
      t,
      n(bo),
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
function jg(e, t) {
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
    if (i && (J(i) ? s.push(...i) : s.push(i)), t.currentNode)
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
      jg(e, t);
      break;
  }
  t.currentNode = e;
  let o = s.length;
  for (; o--; )
    s[o]();
}
function ff(e, t) {
  const n = le(e) ? (s) => s === e : (s) => e.test(s);
  return (s, o) => {
    if (s.type === 1) {
      const { props: r } = s;
      if (s.tagType === 3 && r.some(bg))
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
const Qr = "/*@__PURE__*/", pf = (e) => `${Is[e]}: _${Is[e]}`;
function Hg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: o = "template.vue.html",
  scopeId: r = null,
  optimizeImports: i = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: c = "vue/server-renderer",
  ssr: u = !1,
  isTS: d = !1,
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
    ssr: u,
    isTS: d,
    inSSR: p,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(h) {
      return `_${Is[h]}`;
    },
    push(h, I = -2, C) {
      m.code += h;
    },
    indent() {
      g(++m.indentLevel);
    },
    deindent(h = !1) {
      h ? --m.indentLevel : g(--m.indentLevel);
    },
    newline() {
      g(m.indentLevel);
    }
  };
  function g(h) {
    m.push(
      `
` + "  ".repeat(h),
      0
      /* Start */
    );
  }
  return m;
}
function Ug(e, t = {}) {
  const n = Hg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: o,
    prefixIdentifiers: r,
    indent: i,
    deindent: l,
    newline: a,
    scopeId: c,
    ssr: u
  } = n, d = Array.from(e.helpers), p = d.length > 0, m = !r && s !== "module";
  qg(e, n);
  const h = u ? "ssrRender" : "render", C = (u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${h}(${C}) {`), i(), m && (o("with (_ctx) {"), i(), p && (o(
    `const { ${d.map(pf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (yi(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (yi(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), yi(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let N = 0; N < e.temps; N++)
      o(`${N > 0 ? ", " : ""}_temp${N}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), u || o("return "), e.codegenNode ? at(e.codegenNode, n) : o("null"), m && (l(), o("}")), l(), o("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function qg(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: o,
    newline: r,
    runtimeModuleName: i,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, c = l, u = Array.from(e.helpers);
  if (u.length > 0 && (o(
    `const _Vue = ${c}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const d = [
      Pl,
      Rl,
      To,
      Ll,
      Gd
    ].filter((p) => u.includes(p)).map(pf).join(", ");
    o(
      `const { ${d} } = _Vue
`,
      -1
      /* End */
    );
  }
  zg(e.hoists, t), r(), o("return ");
}
function yi(e, t, { helper: n, push: s, newline: o, isTS: r }) {
  const i = n(
    t === "filter" ? Hl : t === "component" ? Fl : jl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const c = a.endsWith("__self");
    c && (a = a.slice(0, -6)), s(
      `const ${xo(a, t)} = ${i}(${JSON.stringify(a)}${c ? ", true" : ""})${r ? "!" : ""}`
    ), l < e.length - 1 && o();
  }
}
function zg(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: s } = t;
  s();
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    r && (n(`const _hoisted_${o + 1} = `), at(r, t), s());
  }
  t.pure = !1;
}
function Wg(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function ea(e, t) {
  const n = e.length > 3 || X.NODE_ENV !== "production" && e.some((s) => J(s) || !Wg(s));
  t.push("["), n && t.indent(), Vo(e, t, n), n && t.deindent(), t.push("]");
}
function Vo(e, t, n = !1, s = !0) {
  const { push: o, newline: r } = t;
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    le(l) ? o(
      l,
      -3
      /* Unknown */
    ) : J(l) ? ea(l, t) : at(l, t), i < e.length - 1 && (n ? (s && o(","), r()) : s && o(", "));
  }
}
function at(e, t) {
  if (le(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (Nt(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      X.NODE_ENV !== "production" && lc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), at(e.codegenNode, t);
      break;
    case 2:
      Kg(e, t);
      break;
    case 4:
      hf(e, t);
      break;
    case 5:
      Gg(e, t);
      break;
    case 12:
      at(e.codegenNode, t);
      break;
    case 8:
      mf(e, t);
      break;
    case 3:
      Jg(e, t);
      break;
    case 13:
      Xg(e, t);
      break;
    case 14:
      Zg(e, t);
      break;
    case 15:
      ev(e, t);
      break;
    case 17:
      tv(e, t);
      break;
    case 18:
      nv(e, t);
      break;
    case 19:
      sv(e, t);
      break;
    case 20:
      ov(e, t);
      break;
    case 21:
      Vo(e.body, t, !0, !1);
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
      if (X.NODE_ENV !== "production")
        return lc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function Kg(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function hf(e, t) {
  const { content: n, isStatic: s } = e;
  t.push(
    s ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Gg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Qr), n(`${s(Jr)}(`), at(e.content, t), n(")");
}
function mf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    le(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : at(s, t);
  }
}
function Yg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), mf(e, t), n("]");
  else if (e.isStatic) {
    const s = Ql(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Jg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Qr), n(
    `${s(To)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Xg(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: r,
    props: i,
    children: l,
    patchFlag: a,
    dynamicProps: c,
    directives: u,
    isBlock: d,
    disableTracking: p,
    isComponent: m
  } = e;
  let g;
  if (a)
    if (X.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${eo[a]} */`;
      else {
        const I = Object.keys(eo).map(Number).filter((C) => C > 0 && a & C).map((C) => eo[C]).join(", ");
        g = a + ` /* ${I} */`;
      }
    else
      g = String(a);
  u && n(s(Ul) + "("), d && n(`(${s(cs)}(${p ? "true" : ""}), `), o && n(Qr);
  const h = d ? Rs(t.inSSR, m) : Ps(t.inSSR, m);
  n(s(h) + "(", -2, e), Vo(
    Qg([r, i, l, g, c]),
    t
  ), n(")"), d && n(")"), u && (n(", "), at(u, t), n(")"));
}
function Qg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Zg(e, t) {
  const { push: n, helper: s, pure: o } = t, r = le(e.callee) ? e.callee : s(e.callee);
  o && n(Qr), n(r + "(", -2, e), Vo(e.arguments, t), n(")");
}
function ev(e, t) {
  const { push: n, indent: s, deindent: o, newline: r } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const l = i.length > 1 || X.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < i.length; a++) {
    const { key: c, value: u } = i[a];
    Yg(c, t), n(": "), at(u, t), a < i.length - 1 && (n(","), r());
  }
  l && o(), n(l ? "}" : " }");
}
function tv(e, t) {
  ea(e.elements, t);
}
function nv(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: r, returns: i, body: l, newline: a, isSlot: c } = e;
  c && n(`_${Is[Gl]}(`), n("(", -2, e), J(r) ? Vo(r, t) : r && at(r, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), J(i) ? ea(i, t) : at(i, t)) : l && at(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function sv(e, t) {
  const { test: n, consequent: s, alternate: o, newline: r } = e, { push: i, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const d = !Ql(n.content);
    d && i("("), hf(n, t), d && i(")");
  } else
    i("("), at(n, t), i(")");
  r && l(), t.indentLevel++, r || i(" "), i("? "), at(s, t), t.indentLevel--, r && c(), r || i(" "), i(": ");
  const u = o.type === 19;
  u || t.indentLevel++, at(o, t), u || t.indentLevel--, r && a(
    !0
    /* without newline */
  );
}
function ov(e, t) {
  const { push: n, helper: s, indent: o, deindent: r, newline: i } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(xr)}(-1`), e.inVOnce && n(", true"), n("),"), i(), n("(")), n(`_cache[${e.index}] = `), at(e.value, t), l && (n(`).cacheIndex = ${e.index},`), i(), n(`${s(xr)}(1),`), i(), n(`_cache[${e.index}]`), r()), n(")"), a && n(")]");
}
const rv = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), iv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Yn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (r) {
      let i = r.message;
      const l = o.replace(iv, "").match(rv);
      l && (i = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        Se(
          45,
          e.loc,
          void 0,
          i
        )
      );
    }
}
const lv = (e, t) => {
  if (e.type === 5)
    e.content = bi(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = wt(e, "memo");
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
  return X.NODE_ENV !== "production" && Yn(e, t, n, s), e;
}
const av = ff(
  /^(if|else|else-if)$/,
  (e, t, n) => cv(e, t, n, (s, o, r) => {
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
        const c = dv(s.codegenNode);
        c.alternate = hc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function cv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      Se(28, t.loc)
    ), t.exp = de("true", !1, o);
  }
  if (X.NODE_ENV !== "production" && t.exp && Yn(t.exp, n), t.name === "if") {
    const o = pc(e, t), r = {
      type: 9,
      loc: Vg(e.loc),
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
        n.removeNode(l), X.NODE_ENV !== "production" && r.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          Se(30, e.loc)
        ), n.removeNode();
        const a = pc(e, t);
        if (X.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...r, ...a.children]), X.NODE_ENV !== "production") {
          const u = a.userKey;
          u && l.branches.forEach(({ userKey: d }) => {
            uv(d, u) && n.onError(
              Se(
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
          Se(30, e.loc)
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
    children: n && !wt(e, "for") ? e.children : [e],
    userKey: wo(e, "key"),
    isTemplateIf: n
  };
}
function hc(e, t, n) {
  return e.condition ? Gi(
    e.condition,
    mc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    We(n.helper(To), [
      X.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : mc(e, t, n);
}
function mc(e, t, n) {
  const { helper: s } = n, o = Re(
    "key",
    de(
      `${t}`,
      !1,
      $t,
      2
    )
  ), { children: r } = e, i = r[0];
  if (r.length !== 1 || i.type !== 1)
    if (r.length === 1 && i.type === 11) {
      const a = i.codegenNode;
      return Or(a, o, n), a;
    } else {
      let a = 64;
      return X.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((c) => c.type !== 3).length === 1 && (a |= 2048), Eo(
        n,
        s(bo),
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
    const a = i.codegenNode, c = Eg(a);
    return c.type === 13 && Jl(c, n), Or(c, o, n), a;
  }
}
function uv(e, t) {
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
function dv(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const fv = (e, t, n) => {
  const { modifiers: s, loc: o } = e, r = e.arg;
  let { exp: i } = e;
  if (i && i.type === 4 && !i.content.trim() && (i = void 0), !i) {
    if (r.type !== 4 || !r.isStatic)
      return n.onError(
        Se(
          52,
          r.loc
        )
      ), {
        props: [
          Re(r, de("", !0, o))
        ]
      };
    gf(e), i = e.exp;
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), s.some((l) => l.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = Ce(r.content) : r.content = `${n.helperString(Wi)}(${r.content})` : (r.children.unshift(`${n.helperString(Wi)}(`), r.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && gc(r, "."), s.some((l) => l.content === "attr") && gc(r, "^")), {
    props: [Re(r, i)]
  };
}, gf = (e, t) => {
  const n = e.arg, s = Ce(n.content);
  e.exp = de(s, !1, n.loc);
}, gc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, pv = ff(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return hv(e, t, n, (r) => {
      const i = We(s(ql), [
        r.source
      ]), l = kr(e), a = wt(e, "memo"), c = wo(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && gf(c);
      let d = c && (c.type === 6 ? c.value ? de(c.value.content, !0) : void 0 : c.exp);
      const p = c && d ? Re("key", d) : null, m = r.source.type === 4 && r.source.constType > 0, g = m ? 64 : c ? 128 : 256;
      return r.codegenNode = Eo(
        n,
        s(bo),
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
        let h;
        const { children: I } = r;
        X.NODE_ENV !== "production" && l && e.children.some((v) => {
          if (v.type === 1) {
            const w = wo(v, "key");
            if (w)
              return n.onError(
                Se(
                  33,
                  w.loc
                )
              ), !0;
          }
        });
        const C = I.length !== 1 || I[0].type !== 1, N = Cr(e) ? e : l && e.children.length === 1 && Cr(e.children[0]) ? e.children[0] : null;
        if (N ? (h = N.codegenNode, l && p && Or(h, p, n)) : C ? h = Eo(
          n,
          s(bo),
          p ? Vt([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (h = I[0].codegenNode, l && p && Or(h, p, n), h.isBlock !== !m && (h.isBlock ? (o(cs), o(
          Rs(n.inSSR, h.isComponent)
        )) : o(
          Ps(n.inSSR, h.isComponent)
        )), h.isBlock = !m, h.isBlock ? (s(cs), s(Rs(n.inSSR, h.isComponent))) : s(Ps(n.inSSR, h.isComponent))), a) {
          const v = Ms(
            Qi(r.parseResult, [
              de("_cached")
            ])
          );
          v.body = ig([
            Kt(["const _memo = (", a.exp, ")"]),
            Kt([
              "if (_cached",
              ...d ? [" && _cached.key === ", d] : [],
              ` && ${n.helperString(
                Xd
              )}(_cached, _memo)) return _cached`
            ]),
            Kt(["const _item = ", h]),
            de("_item.memo = _memo"),
            de("return _item")
          ]), i.arguments.push(
            v,
            de("_cache"),
            de(String(n.cached.length))
          ), n.cached.push(null);
        } else
          i.arguments.push(
            Ms(
              Qi(r.parseResult),
              h,
              !0
            )
          );
      };
    });
  }
);
function hv(e, t, n, s) {
  if (!t.exp) {
    n.onError(
      Se(31, t.loc)
    );
    return;
  }
  const o = t.forParseResult;
  if (!o) {
    n.onError(
      Se(32, t.loc)
    );
    return;
  }
  vf(o, n);
  const { addIdentifiers: r, removeIdentifiers: i, scopes: l } = n, { source: a, value: c, key: u, index: d } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: u,
    objectIndexAlias: d,
    parseResult: o,
    children: kr(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const m = s && s(p);
  return () => {
    l.vFor--, m && m();
  };
}
function vf(e, t) {
  e.finalized || (X.NODE_ENV !== "production" && (Yn(e.source, t), e.key && Yn(
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
  return mv([e, t, n, ...s]);
}
function mv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || de("_".repeat(s + 1), !1));
}
const vc = de("undefined", !1), gv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = wt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, vv = (e, t, n, s) => Ms(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function yv(e, t, n = vv) {
  t.helper(Gl);
  const { children: s, loc: o } = e, r = [], i = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = wt(e, "slot", !0);
  if (a) {
    const { arg: I, exp: C } = a;
    I && !xt(I) && (l = !0), r.push(
      Re(
        I || de("default", !0),
        n(C, void 0, s, o)
      )
    );
  }
  let c = !1, u = !1;
  const d = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let I = 0; I < s.length; I++) {
    const C = s[I];
    let N;
    if (!kr(C) || !(N = wt(C, "slot", !0))) {
      C.type !== 3 && d.push(C);
      continue;
    }
    if (a) {
      t.onError(
        Se(37, N.loc)
      );
      break;
    }
    c = !0;
    const { children: v, loc: w } = C, {
      arg: y = de("default", !0),
      exp: A,
      loc: S
    } = N;
    let O;
    xt(y) ? O = y ? y.content : "default" : l = !0;
    const b = wt(C, "for"), T = n(A, b, v, w);
    let R, D;
    if (R = wt(C, "if"))
      l = !0, i.push(
        Gi(
          R.exp,
          Uo(y, T, m++),
          vc
        )
      );
    else if (D = wt(
      C,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let $ = I, M;
      for (; $-- && (M = s[$], !(M.type !== 3 && Zi(M))); )
        ;
      if (M && kr(M) && wt(M, /^(else-)?if$/)) {
        let P = i[i.length - 1];
        for (; P.alternate.type === 19; )
          P = P.alternate;
        P.alternate = D.exp ? Gi(
          D.exp,
          Uo(
            y,
            T,
            m++
          ),
          vc
        ) : Uo(y, T, m++);
      } else
        t.onError(
          Se(30, D.loc)
        );
    } else if (b) {
      l = !0;
      const $ = b.forParseResult;
      $ ? (vf($, t), i.push(
        We(t.helper(ql), [
          $.source,
          Ms(
            Qi($),
            Uo(y, T),
            !0
          )
        ])
      )) : t.onError(
        Se(
          32,
          b.loc
        )
      );
    } else {
      if (O) {
        if (p.has(O)) {
          t.onError(
            Se(
              38,
              S
            )
          );
          continue;
        }
        p.add(O), O === "default" && (u = !0);
      }
      r.push(Re(y, T));
    }
  }
  if (!a) {
    const I = (C, N) => {
      const v = n(C, void 0, N, o);
      return t.compatConfig && (v.isNonScopedSlot = !0), Re("default", v);
    };
    c ? d.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    d.some((C) => Zi(C)) && (u ? t.onError(
      Se(
        39,
        d[0].loc
      )
    ) : r.push(
      I(void 0, d)
    )) : r.push(I(void 0, s));
  }
  const g = l ? 2 : er(e.children) ? 3 : 1;
  let h = Vt(
    r.concat(
      Re(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        de(
          g + (X.NODE_ENV !== "production" ? ` /* ${Wf[g]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return i.length && (h = We(t.helper(Jd), [
    h,
    ns(i)
  ])), {
    slots: h,
    hasDynamicSlots: l
  };
}
function Uo(e, t, n) {
  const s = [
    Re("name", e),
    Re("fn", t)
  ];
  return n != null && s.push(
    Re("key", de(String(n), !0))
  ), Vt(s);
}
function er(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || er(n.children))
          return !0;
        break;
      case 9:
        if (er(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (er(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Zi(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Zi(e.content);
}
const yf = /* @__PURE__ */ new WeakMap(), bv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, r = e.tagType === 1;
  let i = r ? _v(e, t) : `"${s}"`;
  const l = ge(i) && i.callee === Bl;
  let a, c, u = 0, d, p, m, g = (
    // dynamic component may resolve to plain elements
    l || i === co || i === Ml || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const h = bf(
      e,
      t,
      void 0,
      r,
      l
    );
    a = h.props, u = h.patchFlag, p = h.dynamicPropNames;
    const I = h.directives;
    m = I && I.length ? ns(
      I.map((C) => wv(C, t))
    ) : void 0, h.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (i === Er && (g = !0, u |= 1024, X.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Se(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    i !== co && // explained above.
    i !== Er) {
      const { slots: I, hasDynamicSlots: C } = yv(e, t);
      c = I, C && (u |= 1024);
    } else if (e.children.length === 1 && i !== co) {
      const I = e.children[0], C = I.type, N = C === 5 || C === 8;
      N && Ct(I, t) === 0 && (u |= 1), N || C === 2 ? c = I : c = e.children;
    } else
      c = e.children;
  p && p.length && (d = xv(p)), e.codegenNode = Eo(
    t,
    i,
    a,
    c,
    u === 0 ? void 0 : u,
    d,
    m,
    !!g,
    !1,
    r,
    e.loc
  );
};
function _v(e, t, n = !1) {
  let { tag: s } = e;
  const o = el(s), r = wo(
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
        return We(t.helper(Bl), [
          l
        ]);
    } else r.type === 6 && r.value.content.startsWith("vue:") && (s = r.value.content.slice(4));
  const i = Zd(s) || t.isBuiltInComponent(s);
  return i ? (n || t.helper(i), i) : (t.helper(Fl), t.components.add(s), xo(s, "component"));
}
function bf(e, t, n = e.props, s, o, r = !1) {
  const { tag: i, loc: l, children: a } = e;
  let c = [];
  const u = [], d = [], p = a.length > 0;
  let m = !1, g = 0, h = !1, I = !1, C = !1, N = !1, v = !1, w = !1;
  const y = [], A = (T) => {
    c.length && (u.push(
      Vt(yc(c), l)
    ), c = []), T && u.push(T);
  }, S = () => {
    t.scopes.vFor > 0 && c.push(
      Re(
        de("ref_for", !0),
        de("true")
      )
    );
  }, O = ({ key: T, value: R }) => {
    if (xt(T)) {
      const D = T.content, $ = vn(D);
      if ($ && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      D.toLowerCase() !== "onclick" && // omit v-model handlers
      D !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !An(D) && (N = !0), $ && An(D) && (w = !0), $ && R.type === 14 && (R = R.arguments[0]), R.type === 20 || (R.type === 4 || R.type === 8) && Ct(R, t) > 0)
        return;
      D === "ref" ? h = !0 : D === "class" ? I = !0 : D === "style" ? C = !0 : D !== "key" && !y.includes(D) && y.push(D), s && (D === "class" || D === "style") && !y.includes(D) && y.push(D);
    } else
      v = !0;
  };
  for (let T = 0; T < n.length; T++) {
    const R = n[T];
    if (R.type === 6) {
      const { loc: D, name: $, nameLoc: M, value: P } = R;
      let L = !0;
      if ($ === "ref" && (h = !0, S()), $ === "is" && (el(i) || P && P.content.startsWith("vue:") || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Re(
          de($, !0, M),
          de(
            P ? P.content : "",
            L,
            P ? P.loc : D
          )
        )
      );
    } else {
      const { name: D, arg: $, exp: M, loc: P, modifiers: L } = R, Q = D === "bind", ne = D === "on";
      if (D === "slot") {
        s || t.onError(
          Se(40, P)
        );
        continue;
      }
      if (D === "once" || D === "memo" || D === "is" || Q && Vn($, "is") && (el(i) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || ne && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (Q && Vn($, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        ne && p && Vn($, "vue:before-update")) && (m = !0), Q && Vn($, "ref") && S(), !$ && (Q || ne)
      ) {
        if (v = !0, M)
          if (Q) {
            if (A(), X.NODE_ENV !== "production" && u.some((ft) => ft.type === 15 ? ft.properties.some(({ key: Tt }) => Tt.type !== 4 || !Tt.isStatic ? !0 : Tt.content !== "class" && Tt.content !== "style" && !vn(Tt.content)) : !0) && Ls(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              P
            ), Pn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              u.unshift(M);
              continue;
            }
            S(), A(), u.push(M);
          } else
            A({
              type: 14,
              loc: P,
              callee: t.helper(Kl),
              arguments: s ? [M] : [M, "true"]
            });
        else
          t.onError(
            Se(
              Q ? 34 : 35,
              P
            )
          );
        continue;
      }
      Q && L.some((et) => et.content === "prop") && (g |= 32);
      const be = t.directiveTransforms[D];
      if (be) {
        const { props: et, needRuntime: ft } = be(R, e, t);
        !r && et.forEach(O), ne && $ && !xt($) ? A(Vt(et, l)) : c.push(...et), ft && (d.push(R), Nt(ft) && yf.set(R, ft));
      } else Dc(D) || (d.push(R), p && (m = !0));
    }
  }
  let b;
  if (u.length ? (A(), u.length > 1 ? b = We(
    t.helper(wr),
    u,
    l
  ) : b = u[0]) : c.length && (b = Vt(
    yc(c),
    l
  )), v ? g |= 16 : (I && !s && (g |= 2), C && !s && (g |= 4), y.length && (g |= 8), N && (g |= 32)), !m && (g === 0 || g === 32) && (h || w || d.length > 0) && (g |= 512), !t.inSSR && b)
    switch (b.type) {
      case 15:
        let T = -1, R = -1, D = !1;
        for (let P = 0; P < b.properties.length; P++) {
          const L = b.properties[P].key;
          xt(L) ? L.content === "class" ? T = P : L.content === "style" && (R = P) : L.isHandlerKey || (D = !0);
        }
        const $ = b.properties[T], M = b.properties[R];
        D ? b = We(
          t.helper(_o),
          [b]
        ) : ($ && !xt($.value) && ($.value = We(
          t.helper(zl),
          [$.value]
        )), M && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (C || M.value.type === 4 && M.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        M.value.type === 17) && (M.value = We(
          t.helper(Wl),
          [M.value]
        )));
        break;
      case 14:
        break;
      default:
        b = We(
          t.helper(_o),
          [
            We(t.helper(Do), [
              b
            ])
          ]
        );
        break;
    }
  return {
    props: b,
    directives: d,
    patchFlag: g,
    dynamicPropNames: y,
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
    i ? (r === "style" || r === "class" || vn(r)) && Ev(i, o) : (t.set(r, o), n.push(o));
  }
  return n;
}
function Ev(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ns(
    [e.value, t.value],
    e.loc
  );
}
function wv(e, t) {
  const n = [], s = yf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(jl), t.directives.add(e.name), n.push(xo(e.name, "directive")));
  const { loc: o } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const r = de("true", !1, o);
    n.push(
      Vt(
        e.modifiers.map(
          (i) => Re(i, r)
        ),
        o
      )
    );
  }
  return ns(n, e.loc);
}
function xv(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function el(e) {
  return e === "component" || e === "Component";
}
const Nv = (e, t) => {
  if (Cr(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: r } = Sv(e, t), i = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (i[2] = r, l = 3), n.length && (i[3] = Ms([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), i.splice(l), e.codegenNode = We(
      t.helper(Yd),
      i,
      s
    );
  }
};
function Sv(e, t) {
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
      i.name === "bind" && i.arg && xt(i.arg) && (i.arg.content = Ce(i.arg.content)), o.push(i);
  }
  if (o.length > 0) {
    const { props: r, directives: i } = bf(
      e,
      t,
      o,
      !1,
      !1
    );
    s = r, i.length && t.onError(
      Se(
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
const _f = (e, t, n, s) => {
  const { loc: o, modifiers: r, arg: i } = e;
  !e.exp && !r.length && n.onError(Se(35, o));
  let l;
  if (i.type === 4)
    if (i.isStatic) {
      let d = i.content;
      X.NODE_ENV !== "production" && d.startsWith("vnode") && n.onError(Se(51, i.loc)), d.startsWith("vue:") && (d = `vnode-${d.slice(4)}`);
      const p = t.tagType !== 0 || d.startsWith("vnode") || !/[A-Z]/.test(d) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        nn(Ce(d))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${d}`
      );
      l = de(p, !0, i.loc);
    } else
      l = Kt([
        `${n.helperString(Ki)}(`,
        i,
        ")"
      ]);
  else
    l = i, l.children.unshift(`${n.helperString(Ki)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const d = tf(a), p = !(d || vg(a)), m = a.content.includes(";");
    X.NODE_ENV !== "production" && Yn(
      a,
      n,
      !1,
      m
    ), (p || c && d) && (a = Kt([
      `${p ? "$event" : "(...args)"} => ${m ? "{" : "("}`,
      a,
      m ? "}" : ")"
    ]));
  }
  let u = {
    props: [
      Re(
        l,
        a || de("() => {}", !1, o)
      )
    ]
  };
  return s && (u = s(u)), c && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((d) => d.key.isHandlerKey = !0), u;
}, kv = (e, t) => {
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
              s || (s = n[r] = Kt(
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
            (i.type !== 2 || i.content !== " ") && l.push(i), !t.ssr && Ct(i, t) === 0 && l.push(
              1 + (X.NODE_ENV !== "production" ? ` /* ${eo[1]} */` : "")
            ), n[r] = {
              type: 12,
              content: i,
              loc: i.loc,
              codegenNode: We(
                t.helper(Ll),
                l
              )
            };
          }
        }
    };
}, bc = /* @__PURE__ */ new WeakSet(), Cv = (e, t) => {
  if (e.type === 1 && wt(e, "once", !0))
    return bc.has(e) || t.inVOnce || t.inSSR ? void 0 : (bc.add(e), t.inVOnce = !0, t.helper(xr), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, Ef = (e, t, n) => {
  const { exp: s, arg: o } = e;
  if (!s)
    return n.onError(
      Se(41, e.loc)
    ), qo();
  const r = s.loc.source.trim(), i = s.type === 4 ? s.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(Se(44, s.loc)), qo();
  if (!i.trim() || !tf(s))
    return n.onError(
      Se(42, s.loc)
    ), qo();
  const a = o || de("modelValue", !0), c = o ? xt(o) ? `onUpdate:${Ce(o.content)}` : Kt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let u;
  const d = n.isTS ? "($event: any)" : "$event";
  u = Kt([
    `${d} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Re(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Re(c, u)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((h) => h.content).map((h) => (Ql(h) ? h : JSON.stringify(h)) + ": true").join(", "), g = o ? xt(o) ? `${o.content}Modifiers` : Kt([o, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Re(
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
  return qo(p);
};
function qo(e = []) {
  return { props: e };
}
const Ov = /[\w).+\-_$\]]/, $v = (e, t) => {
  Pn("COMPILER_FILTERS", t) && (e.type === 5 ? $r(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && $r(n.exp, t);
  }));
};
function $r(e, t) {
  if (e.type === 4)
    _c(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? _c(s, t) : s.type === 8 ? $r(e, t) : s.type === 5 && $r(s.content, t));
    }
}
function _c(e, t) {
  const n = e.content;
  let s = !1, o = !1, r = !1, i = !1, l = 0, a = 0, c = 0, u = 0, d, p, m, g, h = [];
  for (m = 0; m < n.length; m++)
    if (p = d, d = n.charCodeAt(m), s)
      d === 39 && p !== 92 && (s = !1);
    else if (o)
      d === 34 && p !== 92 && (o = !1);
    else if (r)
      d === 96 && p !== 92 && (r = !1);
    else if (i)
      d === 47 && p !== 92 && (i = !1);
    else if (d === 124 && // pipe
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !c)
      g === void 0 ? (u = m + 1, g = n.slice(0, m).trim()) : I();
    else {
      switch (d) {
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
      if (d === 47) {
        let C = m - 1, N;
        for (; C >= 0 && (N = n.charAt(C), N === " "); C--)
          ;
        (!N || !Ov.test(N)) && (i = !0);
      }
    }
  g === void 0 ? g = n.slice(0, m).trim() : u !== 0 && I();
  function I() {
    h.push(n.slice(u, m).trim()), u = m + 1;
  }
  if (h.length) {
    for (X.NODE_ENV !== "production" && Sr(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < h.length; m++)
      g = Tv(g, h[m], t);
    e.content = g, e.ast = void 0;
  }
}
function Tv(e, t, n) {
  n.helper(Hl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${xo(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), r = t.slice(s + 1);
    return n.filters.add(o), `${xo(o, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const Ec = /* @__PURE__ */ new WeakSet(), Dv = (e, t) => {
  if (e.type === 1) {
    const n = wt(e, "memo");
    return !n || Ec.has(e) ? void 0 : (Ec.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Jl(s, t), e.codegenNode = We(t.helper(Yl), [
        n.exp,
        Ms(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Vv(e) {
  return [
    [
      Cv,
      av,
      Dv,
      pv,
      $v,
      ...X.NODE_ENV !== "production" ? [lv] : [],
      Nv,
      bv,
      gv,
      kv
    ],
    {
      on: _f,
      bind: fv,
      model: Ef
    }
  ];
}
function Av(e, t = {}) {
  const n = t.onError || Xl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(Se(47)) : s && n(Se(48));
  const o = !1;
  t.cacheHandlers && n(Se(49)), t.scopeId && !s && n(Se(50));
  const r = fe({}, t, {
    prefixIdentifiers: o
  }), i = le(e) ? Mg(e, r) : e, [l, a] = Vv();
  return Fg(
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
  ), Ug(i, r);
}
const Iv = () => ({ props: [] });
var ct = {};
const wf = Symbol(ct.NODE_ENV !== "production" ? "vModelRadio" : ""), xf = Symbol(
  ct.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Nf = Symbol(ct.NODE_ENV !== "production" ? "vModelText" : ""), Sf = Symbol(
  ct.NODE_ENV !== "production" ? "vModelSelect" : ""
), tl = Symbol(
  ct.NODE_ENV !== "production" ? "vModelDynamic" : ""
), kf = Symbol(
  ct.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Cf = Symbol(
  ct.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), Of = Symbol(ct.NODE_ENV !== "production" ? "vShow" : ""), ta = Symbol(ct.NODE_ENV !== "production" ? "Transition" : ""), $f = Symbol(
  ct.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
sg({
  [wf]: "vModelRadio",
  [xf]: "vModelCheckbox",
  [Nf]: "vModelText",
  [Sf]: "vModelSelect",
  [tl]: "vModelDynamic",
  [kf]: "withModifiers",
  [Cf]: "withKeys",
  [Of]: "vShow",
  [ta]: "Transition",
  [$f]: "TransitionGroup"
});
let gs;
function Mv(e, t = !1) {
  return gs || (gs = document.createElement("div")), t ? (gs.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, gs.children[0].getAttribute("foo")) : (gs.innerHTML = e, gs.textContent);
}
const Pv = {
  parseMode: "html",
  isVoidTag: rp,
  isNativeTag: (e) => Ac(e) || Ic(e) || Mc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Mv,
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
}, Rv = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: de("style", !0, t.loc),
      exp: Lv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Lv = (e, t) => {
  const n = Vc(e);
  return de(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function qt(e, t) {
  return Se(
    e,
    t,
    ct.NODE_ENV !== "production" ? Fv : void 0
  );
}
const Fv = {
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
}, Bv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    qt(53, o)
  ), t.children.length && (n.onError(
    qt(54, o)
  ), t.children.length = 0), {
    props: [
      Re(
        de("innerHTML", !0, o),
        s || de("", !0)
      )
    ]
  };
}, jv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    qt(55, o)
  ), t.children.length && (n.onError(
    qt(56, o)
  ), t.children.length = 0), {
    props: [
      Re(
        de("textContent", !0),
        s ? Ct(s, n) > 0 ? s : We(
          n.helperString(Jr),
          [s],
          o
        ) : de("", !0)
      )
    ]
  };
}, Hv = (e, t, n) => {
  const s = Ef(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    qt(
      58,
      e.arg.loc
    )
  );
  function o() {
    const l = wt(t, "bind");
    l && Vn(l.arg, "value") && n.onError(
      qt(
        60,
        l.loc
      )
    );
  }
  const { tag: r } = t, i = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || i) {
    let l = Nf, a = !1;
    if (r === "input" || i) {
      const c = wo(t, "type");
      if (c) {
        if (c.type === 7)
          l = tl;
        else if (c.value)
          switch (c.value.content) {
            case "radio":
              l = wf;
              break;
            case "checkbox":
              l = xf;
              break;
            case "file":
              a = !0, n.onError(
                qt(
                  59,
                  e.loc
                )
              );
              break;
            default:
              ct.NODE_ENV !== "production" && o();
              break;
          }
      } else yg(t) ? l = tl : ct.NODE_ENV !== "production" && o();
    } else r === "select" ? l = Sf : ct.NODE_ENV !== "production" && o();
    a || (s.needRuntime = n.helper(l));
  } else
    n.onError(
      qt(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), s;
}, Uv = /* @__PURE__ */ Ye("passive,once,capture"), qv = /* @__PURE__ */ Ye(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), zv = /* @__PURE__ */ Ye("left,right"), Tf = /* @__PURE__ */ Ye("onkeyup,onkeydown,onkeypress"), Wv = (e, t, n, s) => {
  const o = [], r = [], i = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ls(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Uv(a) ? i.push(a) : zv(a) ? xt(e) ? Tf(e.content.toLowerCase()) ? o.push(a) : r.push(a) : (o.push(a), r.push(a)) : qv(a) ? r.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: r,
    eventOptionModifiers: i
  };
}, wc = (e, t) => xt(e) && e.content.toLowerCase() === "onclick" ? de(t, !0) : e.type !== 4 ? Kt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Kv = (e, t, n) => _f(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: r, value: i } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = Wv(r, o, n, e.loc);
  if (a.includes("right") && (r = wc(r, "onContextmenu")), a.includes("middle") && (r = wc(r, "onMouseup")), a.length && (i = We(n.helper(kf), [
    i,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!xt(r) || Tf(r.content.toLowerCase())) && (i = We(n.helper(Cf), [
    i,
    JSON.stringify(l)
  ])), c.length) {
    const u = c.map(rn).join("");
    r = xt(r) ? de(`${r.content}${u}`, !0) : Kt(["(", r, `) + "${u}"`]);
  }
  return {
    props: [Re(r, i)]
  };
}), Gv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    qt(61, o)
  ), {
    props: [],
    needRuntime: n.helper(Of)
  };
}, Yv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === ta)
    return () => {
      if (!e.children.length)
        return;
      Df(e) && t.onError(
        qt(
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
const Jv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (ct.NODE_ENV !== "production" && t.onError(
    qt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Xv(e, t) {
  return e === "template" ? !0 : e in xc ? xc[e].has(t) : t in Nc ? Nc[t].has(e) : !(e in Sc && Sc[e].has(t) || t in kc && kc[t].has(e));
}
const vs = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Wn = /* @__PURE__ */ new Set([]), xc = {
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
  script: Wn,
  iframe: Wn,
  option: Wn,
  textarea: Wn,
  style: Wn,
  title: Wn
}, Nc = {
  // sections
  html: Wn,
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
  h1: vs,
  h2: vs,
  h3: vs,
  h4: vs,
  h5: vs,
  h6: vs
}, Qv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Xv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Zv = [
  Rv,
  ...ct.NODE_ENV !== "production" ? [Yv, Qv] : []
], ey = {
  cloak: Iv,
  html: Bv,
  text: jv,
  model: Hv,
  // override compiler-core
  on: Kv,
  // override compiler-core
  show: Gv
};
function ty(e, t = {}) {
  return Av(
    e,
    fe({}, Pv, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Jv,
        ...Zv,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: fe(
        {},
        ey,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Zs = {};
function ny() {
  wd();
}
Zs.NODE_ENV !== "production" && ny();
const Cc = /* @__PURE__ */ Object.create(null);
function sy(e, t) {
  if (!le(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Zs.NODE_ENV !== "production" && Ie("invalid template option: ", e), De;
  const n = zf(e, t), s = Cc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Zs.NODE_ENV !== "production" && !a && Ie(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const o = fe(
    {
      hoistStatic: !0,
      onError: Zs.NODE_ENV !== "production" ? i : void 0,
      onWarn: Zs.NODE_ENV !== "production" ? (a) => i(a, !0) : De
    },
    t
  );
  !o.isCustomElement && typeof customElements < "u" && (o.isCustomElement = (a) => !!customElements.get(a));
  const { code: r } = ty(e, o);
  function i(a, c = !1) {
    const u = c ? a.message : `Template compilation error: ${a.message}`, d = a.loc && Yf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Ie(d ? `${u}
${d}` : u);
  }
  const l = new Function("Vue", r)(X0);
  return l._rc = !0, Cc[n] = l;
}
yd(sy);
const Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, oy = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ry = {
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
    const n = e, s = t, o = G(!1), r = te(() => n.href ? "a" : "button"), i = (u, d = "") => {
      var g, h, I;
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
      if (p[u])
        return p[u];
      const m = (I = (h = (g = window.Shopline) == null ? void 0 : g.theme) == null ? void 0 : h.settings) == null ? void 0 : I[u];
      if (m != null && m !== "")
        return m;
      try {
        const C = "--" + u.replace(/_/g, "-"), N = getComputedStyle(document.documentElement).getPropertyValue(C).trim();
        if (N) return N;
      } catch {
      }
      return d;
    }, l = te(() => {
      const u = {};
      if (n.rounded === "full")
        u.borderRadius = "9999px";
      else if (n.rounded === "none")
        u.borderRadius = "0";
      else if (n.buttonRadius !== null)
        u.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius;
      else {
        const d = i("button_border_radius", "6");
        u.borderRadius = typeof d == "number" || !isNaN(d) ? `${d}px` : d;
      }
      return n.variant === "primary" ? (o.value ? u.backgroundColor = i("button_primary_bg_hover", "#b91c1c") : u.backgroundColor = i("button_primary_bg", "#dc2626"), u.color = i("button_primary_text", "white")) : n.variant === "secondary" ? (o.value ? u.backgroundColor = i("button_secondary_bg_hover", "#f9fafb") : u.backgroundColor = i("button_secondary_bg", "white"), u.color = i("button_secondary_text", "#374151"), u.borderColor = i("button_secondary_border", "#d1d5db")) : n.variant === "link" && (o.value ? u.color = i("button_primary_bg_hover", "#b91c1c") : u.color = i("button_primary_bg", "#dc2626")), u;
    }), a = te(() => {
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
        "border border-transparent",
        "shadow-sm"
      ) : n.variant === "secondary" ? u.push(
        "border",
        "shadow-sm"
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
        "underline",
        "hover:no-underline",
        "p-0",
        "focus:ring-0"
      ), u.join(" ");
    }), c = (u) => {
      !n.disabled && !n.loading && s("click", u);
    };
    return (u, d) => (E(), ut(Nl(r.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: xe(a.value),
      style: Ge(l.value),
      onClick: c,
      onMouseenter: d[0] || (d[0] = (p) => o.value = !0),
      onMouseleave: d[1] || (d[1] = (p) => o.value = !1)
    }, {
      default: Me(() => [
        e.loading ? (E(), x("svg", oy, d[2] || (d[2] = [
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
        fs(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, ss = /* @__PURE__ */ Je(ry, [["__scopeId", "data-v-ee93db6c"]]), iy = ["disabled"], ly = ["value", "min", "max"], ay = ["disabled"], cy = {
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
    const n = e, s = t, o = dt(), r = te({
      get: () => n.modelValue,
      set: (u) => {
        var p, m, g;
        const d = Math.max(n.min, Math.min(n.max, u));
        if (s("update:modelValue", d), s("update", d), ((g = (m = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : m.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const h = o.vnode.el.parentElement, I = h.getAttribute("data-line-key");
          if (I) {
            const C = new CustomEvent("quantity-update", {
              detail: { key: I, value: d },
              bubbles: !0
            });
            h.dispatchEvent(C);
          }
        }
      }
    }), i = () => {
      r.value > n.min && (r.value = r.value - n.step);
    }, l = () => {
      r.value < n.max && (r.value = r.value + n.step);
    }, a = (u) => {
      const d = parseInt(u.target.value) || n.min;
      r.value = d;
    }, c = (u) => {
      const d = parseInt(u.target.value) || n.min;
      r.value = d, u.target.value = r.value;
    };
    return (u, d) => (E(), x("div", {
      class: xe(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      f("button", {
        type: "button",
        class: xe(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue <= e.min,
        onClick: i,
        "aria-label": "Decrease quantity"
      }, d[0] || (d[0] = [
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
      ]), 10, iy),
      f("input", {
        type: "number",
        class: xe(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, ly),
      f("button", {
        type: "button",
        class: xe(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, d[1] || (d[1] = [
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
      ]), 10, ay)
    ], 2));
  }
}, Vf = /* @__PURE__ */ Je(cy, [["__scopeId", "data-v-402d2d49"]]), uy = ["data-updating"], dy = { class: "cart-item__content" }, fy = { class: "cart-item__image" }, py = ["href"], hy = ["src", "alt"], my = { class: "cart-item__details" }, gy = { class: "cart-item__header" }, vy = { class: "cart-item__info" }, yy = { class: "cart-item__title" }, by = ["href"], _y = {
  key: 0,
  class: "cart-item__variant"
}, Ey = {
  key: 1,
  class: "cart-item__properties"
}, wy = { class: "cart-item__property-key" }, xy = { class: "cart-item__price cart-item__price--mobile" }, Ny = { class: "cart-item__price-current" }, Sy = {
  key: 0,
  class: "cart-item__price-original"
}, ky = {
  key: 0,
  class: "cart-item__discounts"
}, Cy = { class: "cart-item__actions" }, Oy = { class: "cart-item__actions-left" }, $y = ["disabled"], Ty = {
  key: 0,
  class: "cart-item__remove-icon",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Dy = {
  key: 1,
  class: "cart-item__remove-icon cart-item__remove-icon--loading",
  fill: "none",
  viewBox: "0 0 24 24"
}, Vy = { class: "cart-item__price cart-item__price--desktop" }, Ay = { class: "cart-item__price-current" }, Iy = {
  key: 0,
  class: "cart-item__price-original"
}, My = {
  key: 1,
  class: "cart-item__price-savings"
}, Py = {
  key: 1,
  class: "cart-item__warning"
}, Ry = {
  key: 2,
  class: "cart-item__error"
}, Ly = {
  __name: "CartItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = G(n.item.quantity), r = G(!1), i = G(""), l = te(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = te(() => {
      var p;
      return ((p = n.item.variant) == null ? void 0 : p.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (p) => {
      var C, N, v;
      if (!p && p !== 0) return "$0.00";
      const m = ((C = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : C.money_format) || "${{amount}}";
      (N = Shopline == null ? void 0 : Shopline.shop) != null && N.currency;
      const g = ((v = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : v.current) || "en", I = new Intl.NumberFormat(g, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(p));
      return m.replace("{{amount}}", I);
    }, u = async (p) => {
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
    }, d = async () => {
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
    return Wt(() => n.item.quantity, (p) => {
      o.value = p;
    }), (p, m) => (E(), x("div", {
      class: "cart-item",
      "data-updating": r.value
    }, [
      f("div", dy, [
        f("div", fy, [
          f("a", {
            href: e.item.url,
            class: "cart-item__image-link"
          }, [
            f("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "cart-item__image-img",
              loading: "lazy"
            }, null, 8, hy)
          ], 8, py)
        ]),
        f("div", my, [
          f("div", gy, [
            f("div", vy, [
              f("h3", yy, [
                f("a", {
                  href: e.item.url,
                  class: "cart-item__title-link"
                }, q(e.item.product_title), 9, by)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (E(), x("p", _y, q(e.item.variant_title), 1)) : j("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (E(), x("div", Ey, [
                (E(!0), x(re, null, me(e.item.properties, (g, h) => (E(), x("p", {
                  key: h,
                  class: "cart-item__property"
                }, [
                  f("span", wy, q(h) + ":", 1),
                  je(" " + q(g), 1)
                ]))), 128))
              ])) : j("", !0)
            ]),
            f("div", xy, [
              f("p", Ny, q(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (E(), x("p", Sy, q(c(e.item.original_price * e.item.quantity)), 1)) : j("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (E(), x("div", ky, [
            (E(!0), x(re, null, me(e.item.discounts, (g) => (E(), x("div", {
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
              je(" " + q(g.title) + " (-" + q(c(g.amount || g.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : j("", !0),
          f("div", Cy, [
            f("div", Oy, [
              ue(Vf, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  m[0] || (m[0] = (g) => o.value = g),
                  u
                ],
                min: 0,
                max: l.value,
                disabled: r.value,
                size: "small"
              }, null, 8, ["modelValue", "max", "disabled"]),
              f("button", {
                type: "button",
                onClick: d,
                class: "cart-item__remove",
                disabled: r.value,
                "aria-label": "Remove item from cart"
              }, [
                r.value ? (E(), x("svg", Dy, m[3] || (m[3] = [
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
                ]))) : (E(), x("svg", Ty, m[2] || (m[2] = [
                  f("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, $y)
            ]),
            f("div", Vy, [
              f("p", Ay, q(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (E(), x("p", Iy, q(c(e.item.original_price * e.item.quantity)), 1)) : j("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (E(), x("p", My, " Save " + q(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : j("", !0)
            ])
          ]),
          a.value ? (E(), x("p", Py, " Only " + q(e.item.variant.inventory_quantity) + " left in stock ", 1)) : j("", !0),
          i.value ? (E(), x("p", Ry, q(i.value), 1)) : j("", !0)
        ])
      ])
    ], 8, uy));
  }
}, Af = /* @__PURE__ */ Je(Ly, [["__scopeId", "data-v-6f2d5a63"]]), Fy = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, By = { class: "absolute inset-0 overflow-hidden" }, jy = { class: "fixed inset-y-0 right-0 max-w-full flex pointer-events-none" }, Hy = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, Uy = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, qy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, zy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, Wy = { class: "flex-1 overflow-y-auto" }, Ky = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, Gy = {
  key: 1,
  class: "px-4 sm:px-6 pb-6"
}, Yy = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, Jy = {
  key: 0,
  class: "flex items-center gap-2"
}, Xy = {
  key: 1,
  class: "flex items-center gap-2"
}, Qy = { class: "text-sm text-blue-800" }, Zy = {
  key: 2,
  class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden"
}, e1 = { class: "flex justify-between text-base font-medium text-gray-900" }, t1 = { class: "space-y-3" }, n1 = {
  __name: "CartDrawer",
  setup(e) {
    const t = G(!1), n = G([]), s = G(0), o = te(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/cart";
    }), r = te(() => {
      var h, I;
      return ((I = (h = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : h.settings) == null ? void 0 : I.free_shipping_threshold) || 50;
    }), i = te(() => {
      var g, h;
      return ((h = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : h.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var v, w, y, A;
      if (!g && g !== 0) return "$0.00";
      const h = ((v = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : v.money_format) || "${{amount}}";
      (w = Shopline == null ? void 0 : Shopline.shop) != null && w.money_with_currency_format, (y = Shopline == null ? void 0 : Shopline.shop) != null && y.currency;
      const I = ((A = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : A.current) || "en", N = new Intl.NumberFormat(I, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(g));
      return h.replace("{{amount}}", N);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", u();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, u = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, d = async ({ key: g, quantity: h }) => {
      await window.OrionCart.updateItem(g, h), u();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), u();
    }, m = (g) => {
      g.key === "Escape" && t.value && c();
    };
    return He(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", m);
    }), Rt(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", m);
    }), (g, h) => (E(), ut(bn, { to: "body" }, [
      ue(rt, { name: "drawer" }, {
        default: Me(() => [
          t.value ? (E(), x("div", Fy, [
            f("div", By, [
              ue(rt, { name: "fade" }, {
                default: Me(() => [
                  t.value ? (E(), x("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: c
                  })) : j("", !0)
                ]),
                _: 1
              }),
              f("div", jy, [
                ue(rt, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Me(() => [
                    t.value ? (E(), x("div", Hy, [
                      f("div", Uy, [
                        f("div", qy, [
                          f("div", null, [
                            h[0] || (h[0] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (E(), x("p", zy, q(n.value.length) + " " + q(n.value.length === 1 ? "item" : "items"), 1)) : j("", !0)
                          ]),
                          f("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: c
                          }, h[1] || (h[1] = [
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
                        f("div", Wy, [
                          n.value.length === 0 ? (E(), x("div", Ky, [
                            h[3] || (h[3] = f("div", { class: "empty-cart-icon" }, [
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
                            h[4] || (h[4] = f("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, " Your cart is empty ", -1)),
                            h[5] || (h[5] = f("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            ue(ss, {
                              onClick: c,
                              variant: "primary",
                              size: "large"
                            }, {
                              default: Me(() => h[2] || (h[2] = [
                                je(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (E(), x("div", Gy, [
                            (E(!0), x(re, null, me(n.value, (I) => (E(), ut(Af, {
                              key: I.key,
                              item: I,
                              onUpdate: d,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (E(), x("div", Yy, [
                          i.value ? (E(), x("div", {
                            key: 0,
                            class: xe([s.value >= r.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "p-3"]),
                            style: { borderRadius: "var(--button-radius)" }
                          }, [
                            s.value >= r.value ? (E(), x("div", Jy, h[6] || (h[6] = [
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
                            ]))) : (E(), x("div", Xy, [
                              h[7] || (h[7] = f("svg", {
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
                              f("p", Qy, " Add " + q(l(
                                r.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < r.value ? (E(), x("div", Zy, [
                              f("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: Ge(`width: ${Math.min(
                                  s.value / r.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])) : j("", !0)
                          ], 2)) : j("", !0),
                          f("div", null, [
                            f("div", e1, [
                              h[8] || (h[8] = f("p", null, "Subtotal", -1)),
                              f("p", null, q(l(s.value)), 1)
                            ]),
                            h[9] || (h[9] = f("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          f("div", t1, [
                            ue(ss, {
                              href: o.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Me(() => h[10] || (h[10] = [
                                je(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            }, 8, ["href"]),
                            ue(ss, {
                              onClick: c,
                              variant: "ghost",
                              "full-width": !0
                            }, {
                              default: Me(() => h[11] || (h[11] = [
                                je(" Continue Shopping ", -1)
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
}, If = /* @__PURE__ */ Je(n1, [["__scopeId", "data-v-8da1cccd"]]), s1 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, o1 = { class: "absolute inset-0 overflow-hidden" }, r1 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, i1 = {
  key: 0,
  class: "w-screen max-w-sm pointer-events-auto"
}, l1 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, a1 = { class: "flex-1 overflow-y-auto" }, c1 = { class: "px-4 py-4" }, u1 = { class: "space-y-1" }, d1 = { key: 0 }, f1 = { key: 0 }, p1 = ["onClick"], h1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, m1 = { key: 0 }, g1 = ["onClick"], v1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, y1 = ["href"], b1 = ["href"], _1 = ["href"], E1 = { class: "px-4 py-4 border-t" }, w1 = { class: "space-y-1" }, x1 = ["href"], N1 = {
  key: 0,
  class: "px-4 py-4 border-t"
}, S1 = {
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
    const n = e, s = te(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = te(() => n.customerUrl || window.mobileMenuCustomerUrl || "/account"), r = te(() => n.showLocalization || window.mobileMenuShowLocalization || !1), i = G(!1), l = G([]), a = () => {
      console.log("openMenu called"), i.value = !0, document.body.style.overflow = "hidden";
    }, c = () => {
      i.value = !1, document.body.style.overflow = "";
    }, u = (d) => {
      const p = l.value.indexOf(d);
      p > -1 ? l.value.splice(p, 1) : l.value.push(d);
    };
    return t({
      openMenu: a,
      closeMenu: c
    }), He(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", c);
      const d = (p) => {
        p.key === "Escape" && i.value && c();
      };
      document.addEventListener("keydown", d), Rt(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", c), document.removeEventListener("keydown", d);
      });
    }), (d, p) => (E(), x("div", null, [
      (E(), ut(bn, { to: "body" }, [
        ue(rt, { name: "menu" }, {
          default: Me(() => [
            i.value ? (E(), x("div", s1, [
              f("div", o1, [
                ue(rt, { name: "fade" }, {
                  default: Me(() => [
                    i.value ? (E(), x("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : j("", !0)
                  ]),
                  _: 1
                }),
                f("div", r1, [
                  ue(rt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Me(() => [
                      i.value ? (E(), x("div", i1, [
                        f("div", l1, [
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
                          f("div", a1, [
                            f("nav", c1, [
                              f("ul", u1, [
                                s.value.length === 0 ? (E(), x("li", d1, p[4] || (p[4] = [
                                  f("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : j("", !0),
                                (E(!0), x(re, null, me(s.value, (m) => (E(), x("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (E(), x("div", f1, [
                                    f("button", {
                                      onClick: (g) => u(
                                        m.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      f("span", null, q(m.title), 1),
                                      (E(), x("svg", {
                                        class: xe(["h-5 w-5 transition-transform duration-200", {
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
                                    ], 8, p1),
                                    ue(rt, { name: "submenu" }, {
                                      default: Me(() => [
                                        l.value.includes(
                                          m.title
                                        ) ? (E(), x("ul", h1, [
                                          (E(!0), x(re, null, me(m.links, (g) => (E(), x("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (E(), x("div", m1, [
                                              f("button", {
                                                onClick: (h) => u(
                                                  `${m.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                f("span", null, q(g.title), 1),
                                                (E(), x("svg", {
                                                  class: xe(["h-4 w-4 transition-transform duration-200", {
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
                                              ], 8, g1),
                                              ue(rt, { name: "submenu" }, {
                                                default: Me(() => [
                                                  l.value.includes(
                                                    `${m.title}-${g.title}`
                                                  ) ? (E(), x("ul", v1, [
                                                    (E(!0), x(re, null, me(g.links, (h) => (E(), x("li", {
                                                      key: h.id || h.title
                                                    }, [
                                                      f("a", {
                                                        href: h.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: p[0] || (p[0] = (...I) => c && c(...I))
                                                      }, q(h.title), 9, y1)
                                                    ]))), 128))
                                                  ])) : j("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (E(), x("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: p[1] || (p[1] = (...h) => c && c(...h))
                                            }, q(g.title), 9, b1))
                                          ]))), 128))
                                        ])) : j("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (E(), x("a", {
                                    key: 1,
                                    href: m.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: c
                                  }, q(m.title), 9, _1))
                                ]))), 128))
                              ])
                            ]),
                            f("div", E1, [
                              f("div", w1, [
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
                                    je(" Account ")
                                  ], -1)
                                ]), 8, x1),
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
                                    je(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            r.value ? (E(), x("div", N1, [
                              fs(d.$slots, "localization", {}, void 0, !0)
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
}, k1 = /* @__PURE__ */ Je(S1, [["__scopeId", "data-v-9092623c"]]), C1 = { class: "variant-picker" }, O1 = {
  key: 0,
  class: "single-variant-info mb-6 p-4 bg-gray-50 rounded-lg"
}, $1 = { class: "font-medium text-gray-900" }, T1 = { key: 1 }, D1 = { class: "text-sm font-medium text-gray-900 mb-3" }, V1 = { class: "font-normal text-gray-600" }, A1 = {
  key: 0,
  class: "flex flex-wrap gap-3"
}, I1 = ["title", "aria-label", "disabled", "onClick"], M1 = ["src", "alt"], P1 = {
  key: 1,
  class: "text-xs"
}, R1 = {
  key: 1,
  class: "color-swatches-wrapper",
  style: { display: "flex", "flex-wrap": "wrap", gap: "0.75rem" }
}, L1 = ["title", "aria-label", "disabled", "onClick", "onMouseenter", "onMouseleave"], F1 = { style: { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", "white-space": "nowrap", "border-width": "0" } }, B1 = {
  key: 0,
  class: "color-swatch__checkmark",
  style: { position: "absolute", inset: "0", display: "flex", "align-items": "center", "justify-content": "center" }
}, j1 = {
  style: { width: "1.25rem", height: "1.25rem", filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.5)) drop-shadow(-1px -1px 1px rgba(255,255,255,0.5))" },
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, H1 = {
  key: 2,
  class: "variant-buttons-wrapper",
  style: { display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }
}, U1 = ["aria-label", "disabled", "onClick", "onMouseenter", "onMouseleave"], q1 = {
  key: 2,
  class: "single-variant-options"
}, z1 = { class: "text-sm font-medium text-gray-900 mb-2" }, W1 = { class: "px-4 py-2 bg-gray-50 rounded-lg inline-block" }, K1 = { class: "text-sm font-medium text-gray-700" }, G1 = {
  key: 3,
  class: "variant-picker-empty"
}, Y1 = {
  __name: "ProductVariantPicker",
  props: {
    product: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    selectedVariantId: {
      type: [String, Number],
      default: null
    },
    updateUrl: {
      type: Boolean,
      default: !0
    },
    sectionId: {
      type: String,
      default: ""
    }
  },
  emits: [
    "variant-change",
    "media-change",
    "product-info-update"
  ],
  setup(e, { emit: t }) {
    const n = e, s = t, o = ($, M) => {
      const P = document.getElementById("variantPicker");
      P && P.dispatchEvent(new CustomEvent($, { detail: M, bubbles: !0 }));
    }, r = G({}), i = G(null), l = G(!1), a = () => n.product && n.product.id ? n.product : window.productPageData && window.productPageData.product ? window.productPageData.product : {}, c = G({}), u = te(() => c.value.variants || []), d = te(() => {
      if (c.value.options && c.value.options.length > 0)
        return c.value.options.map((M, P) => ({
          ...M,
          position: M.position || P + 1
        }));
      const $ = [];
      if (u.value.length > 0) {
        if (u.value[0].option1) {
          const M = [
            ...new Set(
              u.value.map((P) => P.option1).filter(Boolean)
            )
          ];
          $.push({
            name: "Size",
            position: 1,
            values: M
          });
        }
        if (u.value[0].option2) {
          const M = [
            ...new Set(
              u.value.map((P) => P.option2).filter(Boolean)
            )
          ];
          $.push({
            name: "Color",
            position: 2,
            values: M
          });
        }
        if (u.value[0].option3) {
          const M = [
            ...new Set(
              u.value.map((P) => P.option3).filter(Boolean)
            )
          ];
          $.push({
            name: "Option",
            position: 3,
            values: M
          });
        }
      }
      return $;
    }), p = te(
      () => c.value.options_with_values || d.value
    ), m = async ($ = 5) => {
      for (let M = 0; M < $; M++) {
        const P = a();
        if (P && P.id)
          return c.value = P, !0;
        M < $ - 1 && await new Promise((L) => setTimeout(L, 100));
      }
      return !1;
    };
    He(async () => {
      if (await m(), u.value.length > 0) {
        let $ = null;
        if (n.selectedVariantId && ($ = u.value.find(
          (M) => M.id == n.selectedVariantId
        )), $ || ($ = u.value.find((M) => M.available) || u.value[0]), $)
          if (u.value.length === 1 && d.value.length === 0)
            Ln(() => {
              g($);
            });
          else {
            if ($.option1) {
              const M = d.value.find(
                (P) => P.position === 1
              );
              M && (r.value[M.name] = $.option1);
            }
            if ($.option2) {
              const M = d.value.find(
                (P) => P.position === 2
              );
              M && (r.value[M.name] = $.option2);
            }
            if ($.option3) {
              const M = d.value.find(
                (P) => P.position === 3
              );
              M && (r.value[M.name] = $.option3);
            }
            Ln(() => {
              g($);
            });
          }
      }
    });
    const g = ($) => {
      $ && (i.value = $, l.value = !0, d.value.forEach((M, P) => {
        r.value[M.name] = $[`option${P + 1}`];
      }), n.updateUrl && $ && h($), $ && $.featured_media && (s("media-change", $.featured_media), o("media-change", $.featured_media)), s("variant-change", $), o("variant-change", $));
    }, h = ($) => {
      const M = new URL(window.location);
      $ && $.id ? M.searchParams.set("sku", $.id) : M.searchParams.delete("sku"), window.history.replaceState({}, document.title, M.toString());
    }, I = ($, M) => {
      r.value[$] = M;
      const P = u.value.find((L) => d.value.every((Q, ne) => {
        const be = r.value[Q.name];
        return L[`option${ne + 1}`] === be;
      }));
      P && (g(P), n.sectionId && C(P));
    }, C = async ($) => {
      if (!(!$ || !$.id))
        try {
          const M = await fetch(
            `${window.location.pathname}?sku=${$.id}&section_id=${n.sectionId}`,
            {
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }
          );
          if (!M.ok) throw new Error("Failed to fetch product info");
          const P = await M.text(), Q = new DOMParser().parseFromString(P, "text/html");
          s("product-info-update", {
            variant: $,
            html: Q
          });
        } catch {
        }
    }, N = ($) => r.value[$] || "";
    Wt(
      () => n.selectedVariantId,
      ($) => {
        if ($) {
          const M = u.value.find((P) => P.id == $);
          M && g(M);
        }
      }
    );
    const v = ($, M) => r.value[$] === M, w = ($, M) => {
      const P = d.value.findIndex(
        (L) => L.name === $
      );
      return u.value.some((L) => {
        const Q = L[`option${P + 1}`] === M, ne = d.value.every((be, et) => {
          if (be.name === $) return !0;
          const ft = r.value[be.name];
          return ft ? L[`option${et + 1}`] === ft : !0;
        });
        return Q && ne && L.available;
      });
    }, y = ($) => {
      if (!$) return !1;
      const M = $.toLowerCase();
      return M === "color" || M === "colour" || M.includes("color") || M.includes("colour");
    }, A = ($) => {
      const P = {
        black: "#000000",
        white: "#FFFFFF",
        red: "#DC2626",
        blue: "#2563EB",
        green: "#16A34A",
        yellow: "#EAB308",
        purple: "#9333EA",
        pink: "#EC4899",
        gray: "#6B7280",
        grey: "#6B7280",
        brown: "#92400E",
        navy: "#1E3A8A",
        beige: "#D6D3D1",
        orange: "#EA580C",
        teal: "#14B8A6",
        cyan: "#06B6D4",
        indigo: "#4F46E5"
      }[$.toLowerCase()];
      return P || ($.startsWith("#") ? $ : "#E5E7EB");
    }, S = ($) => p.value.some(
      (M) => M.name === $.name && M.values_images && M.values_images.length > 0
    ), O = ($) => {
      const M = p.value.find(
        (P) => P.name === $.name
      );
      return !M || !M.values_images ? $.values.map((P) => ({ value: P, image: null })) : M.values_images;
    }, b = ($, M = 100) => $ ? typeof $ == "string" ? $ : $.src ? $.src : "" : "", T = ($, M) => {
      const P = v($, M), L = w($, M);
      return {
        padding: "0.5rem 1rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: P ? "rgb(17 24 39)" : "rgb(209 213 219)",
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        color: P ? "rgb(255 255 255)" : "rgb(55 65 81)",
        backgroundColor: P ? "rgb(17 24 39)" : "rgb(255 255 255)",
        transition: "all 200ms",
        cursor: L ? "pointer" : "not-allowed",
        opacity: L ? "1" : "0.3",
        textDecoration: L ? "none" : "line-through",
        display: "inline-block",
        textAlign: "center",
        userSelect: "none"
      };
    }, R = ($) => {
      const M = v("Color", $), P = w("Color", $), L = A($), Q = L.toLowerCase() === "#ffffff" || $.toLowerCase() === "white";
      return {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        borderWidth: M ? "3px" : "2px",
        borderStyle: "solid",
        borderColor: M ? "rgb(17 24 39)" : "rgb(229 231 235)",
        backgroundColor: L,
        position: "relative",
        overflow: "hidden",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: P ? "pointer" : "not-allowed",
        opacity: P ? "1" : "0.4",
        boxShadow: M ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        transform: M ? "scale(1.1)" : "scale(1)"
      };
    }, D = ($, M, P) => {
      const L = v("Color", M);
      w("Color", M) && (P ? ($.target.style.transform = L ? "scale(1.1)" : "scale(1.05)", $.target.style.boxShadow = L ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)") : ($.target.style.transform = L ? "scale(1.1)" : "scale(1)", $.target.style.boxShadow = L ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"));
    };
    return ($, M) => (E(), x("div", C1, [
      u.value.length === 1 && d.value.length === 0 ? (E(), x("div", O1, [
        M[0] || (M[0] = f("div", { class: "text-sm text-gray-600 mb-2" }, "Selected Option:", -1)),
        f("div", $1, q(u.value[0].title), 1)
      ])) : d.value.length > 0 ? (E(), x("div", T1, [
        (E(!0), x(re, null, me(d.value, (P) => (E(), x("div", {
          key: P.name,
          class: "variant-option mb-6"
        }, [
          f("h3", D1, [
            je(q(P.name || "Option") + ": ", 1),
            f("span", V1, q(N(P.name) || "Select"), 1)
          ]),
          S(P) ? (E(), x("div", A1, [
            (E(!0), x(re, null, me(O(
              P
            ), (L, Q) => (E(), x("button", {
              key: L.value,
              type: "button",
              class: xe([
                "variant-image-button",
                v(P.name, L.value) ? "variant-image-button--selected" : "",
                w(P.name, L.value) ? "" : "variant-image-button--unavailable"
              ]),
              title: L.value,
              "aria-label": `Select ${P.name} ${L.value}`,
              disabled: !w(P.name, L.value),
              onClick: (ne) => I(P.name, L.value)
            }, [
              L.image ? (E(), x("img", {
                key: 0,
                src: b(L.image, 100),
                alt: L.value,
                class: "w-full h-full object-cover"
              }, null, 8, M1)) : (E(), x("span", P1, q(L.value), 1))
            ], 10, I1))), 128))
          ])) : y(P.name) ? (E(), x("div", R1, [
            (E(!0), x(re, null, me(P.values, (L) => (E(), x("button", {
              key: L,
              type: "button",
              class: xe([
                "color-swatch",
                v(P.name, L) ? "color-swatch--selected" : "",
                w(P.name, L) ? "" : "color-swatch--unavailable"
              ]),
              style: Ge(R(L)),
              title: L,
              "aria-label": `Select ${P.name} ${L}`,
              disabled: !w(P.name, L),
              onClick: Ot((Q) => I(P.name, L), ["stop"]),
              onMouseenter: (Q) => D(Q, L, !0),
              onMouseleave: (Q) => D(Q, L, !1)
            }, [
              f("span", F1, q(L), 1),
              v(P.name, L) ? (E(), x("span", B1, [
                (E(), x("svg", j1, M[1] || (M[1] = [
                  f("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd",
                    style: { fill: "white", stroke: "black", "stroke-width": "0.5px", "paint-order": "stroke" }
                  }, null, -1)
                ])))
              ])) : j("", !0)
            ], 46, L1))), 128))
          ])) : (E(), x("div", H1, [
            (E(!0), x(re, null, me(P.values, (L) => (E(), x("button", {
              key: L,
              type: "button",
              class: xe([
                "variant-button",
                v(P.name, L) ? "variant-button--selected" : "",
                w(P.name, L) ? "" : "variant-button--unavailable"
              ]),
              style: Ge(T(P.name, L)),
              "aria-label": `Select ${P.name} ${L}`,
              disabled: !w(P.name, L),
              onClick: Ot((Q) => I(P.name, L), ["stop"]),
              onMouseenter: (Q) => Q.target.style.backgroundColor = v(P.name, L) ? "rgb(31 41 55)" : "rgb(249 250 251)",
              onMouseleave: (Q) => Q.target.style.backgroundColor = v(P.name, L) ? "rgb(17 24 39)" : "rgb(255 255 255)"
            }, q(L), 47, U1))), 128))
          ]))
        ]))), 128))
      ])) : u.value.length === 1 && d.value.length > 0 ? (E(), x("div", q1, [
        (E(!0), x(re, null, me(d.value, (P) => (E(), x("div", {
          key: P.name,
          class: "mb-4"
        }, [
          f("h3", z1, q(P.name) + ": ", 1),
          f("div", W1, [
            f("span", K1, q(u.value[0][`option${d.value.indexOf(P) + 1}`] || P.values[0]), 1)
          ])
        ]))), 128))
      ])) : j("", !0),
      u.value.length === 0 && d.value.length === 0 && !l.value ? (E(), x("div", G1, M[2] || (M[2] = [
        f("div", { class: "p-4 bg-gray-50 border border-gray-200 rounded-md" }, [
          f("p", { class: "text-sm text-gray-600" }, " Loading variant options... ")
        ], -1)
      ]))) : j("", !0)
    ]));
  }
}, J1 = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, X1 = { class: "main-header__wrapper" }, Q1 = {
  href: "/",
  class: "main-header__logo"
}, Z1 = ["src", "alt"], eb = {
  key: 1,
  class: "text-xl font-bold"
}, tb = { class: "main-header__nav hidden lg:flex" }, nb = ["href"], sb = { class: "main-header__actions" }, ob = ["href"], rb = {
  key: 0,
  class: "cart-count"
}, ib = { class: "search-overlay__container" }, lb = {
  action: "/search",
  method: "get",
  class: "search-form"
}, ab = {
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
    const t = e, n = G(null), s = G(!1), o = G(0), r = te(() => {
      var u, d;
      return t.customer ? ((u = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : u.account) || "/account" : ((d = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : d.account_login) || "/account/login";
    }), i = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, l = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, a = async () => {
      var u;
      s.value = !s.value, s.value && (await Ln(), (u = n.value) == null || u.focus());
    }, c = () => {
      var u;
      (u = window.OrionCart) != null && u.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return He(() => {
      document.addEventListener("cart:updated", c), c();
    }), Rt(() => {
      document.removeEventListener("cart:updated", c);
    }), (u, d) => (E(), x("div", J1, [
      f("div", X1, [
        f("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: i,
          "aria-label": "Open menu"
        }, d[0] || (d[0] = [
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
        f("a", Q1, [
          e.logoUrl ? (E(), x("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, Z1)) : (E(), x("span", eb, q(e.shopName), 1))
        ]),
        f("nav", tb, [
          (E(!0), x(re, null, me(e.navigationLinks, (p) => (E(), x("a", {
            key: p.url,
            href: p.url,
            class: "nav-link"
          }, q(p.title), 9, nb))), 128))
        ]),
        f("div", sb, [
          f("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: a,
            "aria-label": "Search"
          }, d[1] || (d[1] = [
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
          }, d[2] || (d[2] = [
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
          ]), 8, ob),
          f("button", {
            type: "button",
            class: "action-button relative",
            onClick: l,
            "aria-label": "Cart"
          }, [
            d[3] || (d[3] = f("svg", {
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
            o.value > 0 ? (E(), x("span", rb, q(o.value), 1)) : j("", !0)
          ])
        ])
      ]),
      (E(), ut(bn, { to: "body" }, [
        ue(rt, { name: "fade" }, {
          default: Me(() => [
            s.value ? (E(), x("div", {
              key: 0,
              class: "search-overlay",
              onClick: Ot(a, ["self"])
            }, [
              f("div", ib, [
                f("form", lb, [
                  f("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: _r(a, ["esc"])
                  }, null, 544),
                  d[4] || (d[4] = f("button", {
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
                }, d[5] || (d[5] = [
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
}, Mf = /* @__PURE__ */ Je(ab, [["__scopeId", "data-v-2dc4d29f"]]), cb = { class: "site-footer" }, ub = {
  key: 0,
  class: "newsletter-section"
}, db = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, fb = { class: "newsletter-content" }, pb = { class: "newsletter-text" }, hb = { class: "text-xl font-semibold mb-2" }, mb = { class: "text-gray-600" }, gb = ["disabled"], vb = ["disabled"], yb = { key: 0 }, bb = { key: 1 }, _b = { class: "footer-main" }, Eb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, wb = { class: "footer-grid" }, xb = { class: "footer-column" }, Nb = { class: "footer-heading" }, Sb = { class: "text-gray-600 mb-4" }, kb = {
  key: 0,
  class: "social-links"
}, Cb = ["href", "aria-label"], Ob = { class: "footer-heading" }, $b = { class: "footer-links" }, Tb = ["href"], Db = {
  key: 0,
  class: "footer-column"
}, Vb = { class: "contact-info" }, Ab = {
  key: 0,
  class: "contact-item"
}, Ib = {
  key: 1,
  class: "contact-item"
}, Mb = {
  key: 2,
  class: "contact-item"
}, Pb = {
  key: 0,
  class: "payment-methods"
}, Rb = { class: "payment-icons" }, Lb = ["src", "alt"], Fb = { class: "footer-bottom" }, Bb = { class: "copyright" }, jb = {
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
    const t = G(""), n = G(!1), s = te(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
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
        facebook: () => en("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          en("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        ]),
        twitter: () => en("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          en("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
        ]),
        instagram: () => en("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          en("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" })
        ]),
        youtube: () => en("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          en("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
        ])
      };
      return l[i.toLowerCase()] || l.facebook;
    };
    return (i, l) => (E(), x("footer", cb, [
      e.showNewsletter ? (E(), x("div", ub, [
        f("div", db, [
          f("div", fb, [
            f("div", pb, [
              f("h3", hb, q(e.newsletterTitle), 1),
              f("p", mb, q(e.newsletterDescription), 1)
            ]),
            f("form", {
              onSubmit: Ot(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              $e(f("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, gb), [
                [Bn, t.value]
              ]),
              f("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (E(), x("span", bb, "Subscribing...")) : (E(), x("span", yb, "Subscribe"))
              ], 8, vb)
            ], 32)
          ])
        ])
      ])) : j("", !0),
      f("div", _b, [
        f("div", Eb, [
          f("div", wb, [
            f("div", xb, [
              f("h4", Nb, q(e.companyName), 1),
              f("p", Sb, q(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (E(), x("div", kb, [
                (E(!0), x(re, null, me(e.socialLinks, (a) => (E(), x("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (E(), ut(Nl(r(a.name))))
                ], 8, Cb))), 128))
              ])) : j("", !0)
            ]),
            (E(!0), x(re, null, me(e.footerColumns, (a) => (E(), x("div", {
              key: a.title,
              class: "footer-column"
            }, [
              f("h4", Ob, q(a.title), 1),
              f("ul", $b, [
                (E(!0), x(re, null, me(a.links, (c) => (E(), x("li", {
                  key: c.title
                }, [
                  f("a", {
                    href: c.url,
                    class: "footer-link"
                  }, q(c.title), 9, Tb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (E(), x("div", Db, [
              l[4] || (l[4] = f("h4", { class: "footer-heading" }, "Contact", -1)),
              f("div", Vb, [
                e.contactEmail ? (E(), x("p", Ab, [
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
                  je(" " + q(e.contactEmail), 1)
                ])) : j("", !0),
                e.contactPhone ? (E(), x("p", Ib, [
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
                  je(" " + q(e.contactPhone), 1)
                ])) : j("", !0),
                e.contactAddress ? (E(), x("p", Mb, [
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
                  je(" " + q(e.contactAddress), 1)
                ])) : j("", !0)
              ])
            ])) : j("", !0)
          ]),
          e.paymentMethods.length > 0 ? (E(), x("div", Pb, [
            l[5] || (l[5] = f("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            f("div", Rb, [
              (E(!0), x(re, null, me(e.paymentMethods, (a) => (E(), x("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, Lb))), 128))
            ])
          ])) : j("", !0),
          f("div", Fb, [
            f("p", Bb, " © " + q(s.value) + " " + q(e.companyName) + ". All rights reserved. ", 1),
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
}, Hb = /* @__PURE__ */ Je(jb, [["__scopeId", "data-v-1c1567f0"]]), Ub = ["href"], qb = ["src", "alt"], zb = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, Wb = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, Kb = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, Gb = { class: "p-4" }, Yb = {
  key: 0,
  class: "mb-3"
}, Jb = { class: "flex gap-1.5 flex-wrap" }, Xb = ["onClick", "title"], Qb = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, Zb = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, e_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, t_ = ["href"], n_ = { class: "flex items-center gap-1 mb-2" }, s_ = { class: "flex" }, o_ = { class: "flex items-baseline gap-2 mb-4" }, r_ = { class: "text-xl font-bold text-gray-900" }, i_ = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, l_ = ["disabled"], a_ = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, c_ = { key: 1 }, u_ = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, d_ = {
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
    const n = e, s = t, o = G(""), r = G(!1), i = G(!1), l = G(!1), a = G(!1), c = te(() => n.product ? n.product : {
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
    }), u = te(() => {
      const R = c.value.handle;
      return c.value.url || (R ? `/products/${R}` : "#");
    }), d = te(() => {
      var R, D, $;
      return r.value && ((R = c.value.images) != null && R[1]) ? c.value.images[1].src : (($ = (D = c.value.images) == null ? void 0 : D[0]) == null ? void 0 : $.src) || c.value.featured_image || c.value.image || "/placeholder.jpg";
    }), p = te(() => {
      var R;
      return (R = c.value.options) == null ? void 0 : R.some(
        (D) => {
          var $, M;
          return (($ = D.name) == null ? void 0 : $.toLowerCase().includes("color")) || ((M = D.name) == null ? void 0 : M.toLowerCase().includes("colour"));
        }
      );
    }), m = te(() => {
      var D;
      const R = (D = c.value.options) == null ? void 0 : D.find(
        ($) => {
          var M, P;
          return ((M = $.name) == null ? void 0 : M.toLowerCase().includes("color")) || ((P = $.name) == null ? void 0 : P.toLowerCase().includes("colour"));
        }
      );
      return (R == null ? void 0 : R.values) || [];
    }), g = te(() => c.value.price || 0), h = te(() => c.value.compare_at_price || 0), I = te(() => c.value.available && h.value > g.value), C = te(() => I.value ? Math.round((h.value - g.value) / h.value * 100) : 0), N = te(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: a.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), v = te(() => {
      var R, D, $;
      return (($ = (D = (R = window.Shopline) == null ? void 0 : R.theme) == null ? void 0 : D.settings) == null ? void 0 : $.show_product_card_wishlist) !== !1;
    }), w = (R) => `$${(R / 100).toFixed(2)}`, y = (R) => {
      const D = {
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
      }, $ = R.toLowerCase();
      return D[$] || `#${$.replace("#", "")}`;
    }, A = () => {
      var R;
      ((R = c.value.images) == null ? void 0 : R.length) > 1 && (r.value = !0);
    }, S = () => {
      r.value = !1;
    }, O = (R) => {
      o.value = R.value;
    }, b = () => {
      l.value = !l.value;
    }, T = async () => {
      var R, D, $, M;
      i.value = !0;
      try {
        const P = (D = (R = c.value.variants) == null ? void 0 : R[0]) == null ? void 0 : D.id;
        if (!P)
          throw console.error("No variant ID found for product:", c.value), new Error("No variant ID found");
        const L = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: P,
              quantity: 1
            }]
          })
        });
        if (!L.ok)
          throw new Error("Failed to add to cart");
        const Q = await L.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((M = ($ = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : $.settings) == null ? void 0 : M.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: P, quantity: 1 });
      } catch (P) {
        console.error("Error adding to cart:", P);
      } finally {
        i.value = !1;
      }
    };
    return (R, D) => (E(), x("div", {
      class: "product-card group relative bg-white transition-all duration-300 overflow-hidden",
      style: Ge(N.value),
      onMouseenter: D[2] || (D[2] = ($) => a.value = !0),
      onMouseleave: D[3] || (D[3] = ($) => a.value = !1)
    }, [
      f("a", {
        href: u.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        d.value ? (E(), x("img", {
          key: 0,
          src: d.value,
          alt: c.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: A,
          onMouseleave: S
        }, null, 40, qb)) : (E(), x("div", zb, D[4] || (D[4] = [
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
        I.value ? (E(), x("div", Wb, " -" + q(C.value) + "% ", 1)) : j("", !0),
        c.value.available && v.value ? (E(), x("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: Ot(b, ["prevent"])
        }, [
          (E(), x("svg", {
            class: xe(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, D[5] || (D[5] = [
            f("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : j("", !0),
        c.value.available ? j("", !0) : (E(), x("div", Kb, D[6] || (D[6] = [
          f("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Ub),
      f("div", Gb, [
        p.value ? (E(), x("div", Yb, [
          f("div", Jb, [
            (E(!0), x(re, null, me(m.value, ($) => (E(), x("button", {
              key: $.value,
              onClick: (M) => O($),
              title: $.value,
              class: xe([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === $.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: Ge({ backgroundColor: y($.value) })
            }, [
              o.value === $.value ? (E(), x("span", Qb, D[7] || (D[7] = [
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
            ], 14, Xb))), 128))
          ])
        ])) : j("", !0),
        c.value.vendor ? (E(), x("p", Zb, q(c.value.vendor), 1)) : j("", !0),
        f("h3", e_, [
          f("a", {
            href: u.value,
            class: "hover:text-gray-700 transition-colors"
          }, q(c.value.title || "Untitled"), 9, t_)
        ]),
        f("div", n_, [
          f("div", s_, [
            (E(), x(re, null, me(5, ($) => f("svg", {
              key: $,
              class: xe(["w-4 h-4", $ <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, D[8] || (D[8] = [
              f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          D[9] || (D[9] = f("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        f("div", o_, [
          f("span", r_, q(w(g.value)), 1),
          h.value > g.value ? (E(), x("span", i_, q(w(h.value)), 1)) : j("", !0)
        ]),
        c.value.available ? (E(), x("button", {
          key: 2,
          onClick: T,
          disabled: i.value,
          class: "w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          style: {
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
            borderRadius: "var(--button-radius)"
          },
          onMouseenter: D[0] || (D[0] = ($) => $.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
          onMouseleave: D[1] || (D[1] = ($) => $.target.style.backgroundColor = "var(--button-primary-bg)")
        }, [
          i.value ? j("", !0) : (E(), x("svg", a_, D[10] || (D[10] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          i.value ? (E(), x("svg", u_, D[11] || (D[11] = [
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
          ]))) : (E(), x("span", c_, "Add to Cart"))
        ], 40, l_)) : j("", !0)
      ])
    ], 36));
  }
}, f_ = { class: "collection-filters" }, p_ = { class: "lg:hidden mb-4" }, h_ = { class: "space-y-6" }, m_ = {
  key: 0,
  class: "filter-group"
}, g_ = { class: "filter-group" }, v_ = { class: "flex items-center" }, y_ = { class: "filter-group" }, b_ = { class: "space-y-2" }, __ = { class: "flex items-center" }, E_ = { class: "flex items-center" }, w_ = { class: "flex items-center" }, x_ = { class: "flex items-center" }, N_ = {
  key: 1,
  class: "filter-group"
}, S_ = { class: "space-y-2" }, k_ = ["value"], C_ = { class: "ml-2 text-sm" }, O_ = {
  key: 2,
  class: "filter-group"
}, $_ = { class: "space-y-2" }, T_ = ["value"], D_ = { class: "ml-2 text-sm" }, V_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, A_ = { class: "h-full flex flex-col" }, I_ = { class: "flex items-center justify-between p-4 border-b" }, M_ = { class: "flex-1 overflow-y-auto p-4" }, P_ = { class: "space-y-6" }, R_ = {
  key: 0,
  class: "filter-group"
}, L_ = { class: "filter-group" }, F_ = { class: "flex items-center" }, B_ = { class: "filter-group" }, j_ = { class: "space-y-2" }, H_ = { class: "flex items-center" }, U_ = { class: "flex items-center" }, q_ = { class: "flex items-center" }, z_ = { class: "flex items-center" }, W_ = {
  key: 1,
  class: "filter-group"
}, K_ = { class: "space-y-2" }, G_ = ["value"], Y_ = { class: "ml-2 text-sm" }, J_ = {
  key: 2,
  class: "filter-group"
}, X_ = { class: "space-y-2" }, Q_ = ["value"], Z_ = { class: "ml-2 text-sm" }, e2 = {
  __name: "CollectionFilters",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    initialFilters: {
      type: Object,
      default: () => ({})
    },
    showSort: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update-filters"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = G("manual"), r = G([]), i = G([]), l = G([]), a = G(!1), c = G(!1), u = () => {
      const A = new URLSearchParams(window.location.search);
      r.value = [], i.value = [], l.value = [], a.value = !1, o.value = A.get("sort_by") || "manual", A.get("filter.v.availability") === "1" && (a.value = !0);
      const S = A.getAll("filter.p.product_type");
      S.length > 0 && (i.value = S);
      const O = A.getAll("filter.p.vendor");
      O.length > 0 && (l.value = O);
      const b = A.getAll("filter.price.range");
      b.length > 0 && (r.value = b);
    }, d = () => {
      u();
    }, p = te(() => {
      var S, O;
      const A = ((O = (S = window.Shopline) == null ? void 0 : S.theme) == null ? void 0 : O.settings) || {};
      return {
        "--card-radius": A.card_border_radius ? `${A.card_border_radius}px` : "8px"
      };
    }), m = te(() => {
      const A = /* @__PURE__ */ new Set();
      return n.products.forEach((S) => {
        S.product_type && A.add(S.product_type);
      }), Array.from(A).sort();
    }), g = te(() => {
      const A = /* @__PURE__ */ new Set();
      return n.products.forEach((S) => {
        S.vendor && A.add(S.vendor);
      }), Array.from(A).sort();
    }), h = te(() => r.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), I = () => {
      const A = new URL(window.location.href);
      o.value === "manual" ? A.searchParams.delete("sort_by") : A.searchParams.set("sort_by", o.value), window.location.href = A.toString();
    }, C = () => {
      c.value || N(), y();
    }, N = () => {
      const A = new URLSearchParams(window.location.search), S = [];
      for (const [b] of A)
        b.startsWith("filter.") && S.push(b);
      S.forEach((b) => {
        for (; A.has(b); )
          A.delete(b);
      }), a.value && A.set("filter.v.availability", "1"), r.value.length > 0 && r.value.forEach((b) => {
        A.append("filter.price.range", b);
      }), i.value.length > 0 && i.value.forEach((b) => {
        A.append("filter.p.product_type", b);
      }), l.value.length > 0 && l.value.forEach((b) => {
        A.append("filter.p.vendor", b);
      });
      const O = `${window.location.pathname}${A.toString() ? "?" + A.toString() : ""}`;
      window.location.href = O;
    }, v = () => {
      r.value = [], i.value = [], l.value = [], a.value = !1;
      const A = new URLSearchParams(window.location.search), S = [];
      for (const [T] of A)
        T.startsWith("filter.") && S.push(T);
      S.forEach((T) => A.delete(T));
      const O = A.get("sort_by"), b = `${window.location.pathname}${O ? "?sort_by=" + O : ""}`;
      window.location.href = b;
    }, w = () => {
      c.value = !1, N();
    }, y = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: r.value,
        types: i.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return He(() => {
      u(), window.addEventListener("popstate", d);
    }), js(() => {
      window.removeEventListener("popstate", d);
    }), (A, S) => (E(), x("div", f_, [
      f("div", p_, [
        f("button", {
          onClick: S[0] || (S[0] = (O) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 hover:bg-secondary-50 transition-colors",
          style: { borderRadius: "var(--card-radius, 8px)" }
        }, S[20] || (S[20] = [
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
      f("div", {
        class: "hidden lg:block filters-card",
        style: Ge(p.value)
      }, [
        f("div", h_, [
          e.showSort ? (E(), x("div", m_, [
            S[22] || (S[22] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
            $e(f("select", {
              "onUpdate:modelValue": S[1] || (S[1] = (O) => o.value = O),
              onChange: I,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, S[21] || (S[21] = [
              ls('<option value="manual" data-v-308e1139>Featured</option><option value="best-selling" data-v-308e1139>Best Selling</option><option value="title-ascending" data-v-308e1139>Alphabetically, A-Z</option><option value="title-descending" data-v-308e1139>Alphabetically, Z-A</option><option value="price-ascending" data-v-308e1139>Price, low to high</option><option value="price-descending" data-v-308e1139>Price, high to low</option><option value="created-ascending" data-v-308e1139>Date, old to new</option><option value="created-descending" data-v-308e1139>Date, new to old</option>', 8)
            ]), 544), [
              [Vs, o.value]
            ])
          ])) : j("", !0),
          f("div", g_, [
            S[24] || (S[24] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
            f("label", v_, [
              $e(f("input", {
                type: "checkbox",
                "onUpdate:modelValue": S[2] || (S[2] = (O) => a.value = O),
                onChange: C,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Le, a.value]
              ]),
              S[23] || (S[23] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          f("div", y_, [
            S[29] || (S[29] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
            f("div", b_, [
              f("label", __, [
                $e(f("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": S[3] || (S[3] = (O) => r.value = O),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[25] || (S[25] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              f("label", E_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": S[4] || (S[4] = (O) => r.value = O),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[26] || (S[26] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              f("label", w_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": S[5] || (S[5] = (O) => r.value = O),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[27] || (S[27] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              f("label", x_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": S[6] || (S[6] = (O) => r.value = O),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[28] || (S[28] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          m.value.length > 0 ? (E(), x("div", N_, [
            S[30] || (S[30] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
            f("div", S_, [
              (E(!0), x(re, null, me(m.value, (O) => (E(), x("label", {
                key: O,
                class: "flex items-center"
              }, [
                $e(f("input", {
                  type: "checkbox",
                  value: O,
                  "onUpdate:modelValue": S[7] || (S[7] = (b) => i.value = b),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, k_), [
                  [Le, i.value]
                ]),
                f("span", C_, q(O), 1)
              ]))), 128))
            ])
          ])) : j("", !0),
          g.value.length > 0 ? (E(), x("div", O_, [
            S[31] || (S[31] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
            f("div", $_, [
              (E(!0), x(re, null, me(g.value, (O) => (E(), x("label", {
                key: O,
                class: "flex items-center"
              }, [
                $e(f("input", {
                  type: "checkbox",
                  value: O,
                  "onUpdate:modelValue": S[8] || (S[8] = (b) => l.value = b),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, T_), [
                  [Le, l.value]
                ]),
                f("span", D_, q(O), 1)
              ]))), 128))
            ])
          ])) : j("", !0),
          h.value ? (E(), x("button", {
            key: 3,
            onClick: v,
            class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
          }, " Clear all filters ")) : j("", !0)
        ])
      ], 4),
      (E(), ut(bn, { to: "body" }, [
        c.value ? (E(), x("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: S[19] || (S[19] = Ot((O) => c.value = !1, ["self"]))
        }, [
          f("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: S[9] || (S[9] = (O) => c.value = !1)
          }),
          f("div", V_, [
            f("div", A_, [
              f("div", I_, [
                S[33] || (S[33] = f("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                f("button", {
                  onClick: S[10] || (S[10] = (O) => c.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, S[32] || (S[32] = [
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
              f("div", M_, [
                f("div", P_, [
                  e.showSort ? (E(), x("div", R_, [
                    S[35] || (S[35] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
                    $e(f("select", {
                      "onUpdate:modelValue": S[11] || (S[11] = (O) => o.value = O),
                      onChange: I,
                      class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    }, S[34] || (S[34] = [
                      f("option", { value: "manual" }, "Featured", -1),
                      f("option", { value: "best-selling" }, "Best Selling", -1),
                      f("option", { value: "title-ascending" }, "Alphabetically, A-Z", -1),
                      f("option", { value: "title-descending" }, "Alphabetically, Z-A", -1),
                      f("option", { value: "price-ascending" }, "Price, low to high", -1),
                      f("option", { value: "price-descending" }, "Price, high to low", -1),
                      f("option", { value: "created-ascending" }, "Date, old to new", -1),
                      f("option", { value: "created-descending" }, "Date, new to old", -1)
                    ]), 544), [
                      [Vs, o.value]
                    ])
                  ])) : j("", !0),
                  f("div", L_, [
                    S[37] || (S[37] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
                    f("label", F_, [
                      $e(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": S[12] || (S[12] = (O) => a.value = O),
                        onChange: C,
                        class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      }, null, 544), [
                        [Le, a.value]
                      ]),
                      S[36] || (S[36] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  f("div", B_, [
                    S[42] || (S[42] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
                    f("div", j_, [
                      f("label", H_, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": S[13] || (S[13] = (O) => r.value = O),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[38] || (S[38] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      f("label", U_, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": S[14] || (S[14] = (O) => r.value = O),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[39] || (S[39] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      f("label", q_, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": S[15] || (S[15] = (O) => r.value = O),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[40] || (S[40] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      f("label", z_, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": S[16] || (S[16] = (O) => r.value = O),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[41] || (S[41] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  m.value.length > 0 ? (E(), x("div", W_, [
                    S[43] || (S[43] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
                    f("div", K_, [
                      (E(!0), x(re, null, me(m.value, (O) => (E(), x("label", {
                        key: O,
                        class: "flex items-center"
                      }, [
                        $e(f("input", {
                          type: "checkbox",
                          value: O,
                          "onUpdate:modelValue": S[17] || (S[17] = (b) => i.value = b),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, G_), [
                          [Le, i.value]
                        ]),
                        f("span", Y_, q(O), 1)
                      ]))), 128))
                    ])
                  ])) : j("", !0),
                  g.value.length > 0 ? (E(), x("div", J_, [
                    S[44] || (S[44] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
                    f("div", X_, [
                      (E(!0), x(re, null, me(g.value, (O) => (E(), x("label", {
                        key: O,
                        class: "flex items-center"
                      }, [
                        $e(f("input", {
                          type: "checkbox",
                          value: O,
                          "onUpdate:modelValue": S[18] || (S[18] = (b) => l.value = b),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, Q_), [
                          [Le, l.value]
                        ]),
                        f("span", Z_, q(O), 1)
                      ]))), 128))
                    ])
                  ])) : j("", !0),
                  h.value ? (E(), x("button", {
                    key: 3,
                    onClick: v,
                    class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
                  }, " Clear all filters ")) : j("", !0)
                ])
              ]),
              f("div", { class: "p-4 border-t" }, [
                f("button", {
                  onClick: w,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : j("", !0)
      ]))
    ]));
  }
}, Pf = /* @__PURE__ */ Je(e2, [["__scopeId", "data-v-308e1139"]]), t2 = { class: "collection-grid" }, n2 = {
  key: 0,
  class: "mb-8"
}, s2 = { class: "text-3xl font-bold text-secondary-900 mb-4" }, o2 = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, r2 = { class: "mt-4 flex items-center justify-between" }, i2 = { class: "text-sm text-secondary-600" }, l2 = {
  key: 0,
  class: "lg:hidden"
}, a2 = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, c2 = {
  key: 0,
  class: "lg:col-span-1"
}, u2 = ["products"], d2 = {
  key: 1,
  class: "text-center py-12"
}, f2 = ["product"], p2 = {
  key: 3,
  class: "mt-8"
}, h2 = {
  key: 0,
  class: "inline-flex items-center"
}, m2 = {
  key: 1,
  class: "text-center"
}, g2 = ["disabled"], v2 = { key: 0 }, y2 = { key: 1 }, b2 = {
  key: 2,
  class: "flex items-center justify-between"
}, _2 = { class: "flex-1 flex justify-between sm:hidden" }, E2 = ["disabled"], w2 = ["disabled"], x2 = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, N2 = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, S2 = ["disabled"], k2 = ["onClick"], C2 = ["disabled"], O2 = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, $2 = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, T2 = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, D2 = { class: "text-lg font-medium text-secondary-900" }, V2 = {
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
    const t = e, n = G(!1), s = G(!1), o = G(t.currentPage), r = G(t.products.length), i = G("manual"), l = G({}), a = G(null), c = G(null), u = te(() => {
      const b = Number(t.columnsMobile), T = t.columnsDesktop, R = b === 1 ? "grid-cols-1" : "grid-cols-2", D = T <= 3 ? `md:grid-cols-${T}` : "md:grid-cols-3", $ = `lg:grid-cols-${T}`;
      return `grid ${R} ${D} ${$} gap-4 lg:gap-6`;
    }), d = te(() => {
      var R, D, $;
      let b = [...t.products];
      switch (l.value.inStockOnly && (b = b.filter((M) => M.available)), ((R = l.value.priceRanges) == null ? void 0 : R.length) > 0 && (b = b.filter((M) => {
        const P = M.price / 100;
        return l.value.priceRanges.some((L) => L === "0-50" ? P < 50 : L === "50-100" ? P >= 50 && P < 100 : L === "100-200" ? P >= 100 && P < 200 : L === "200+" ? P >= 200 : !1);
      })), ((D = l.value.types) == null ? void 0 : D.length) > 0 && (b = b.filter((M) => l.value.types.includes(M.product_type))), (($ = l.value.vendors) == null ? void 0 : $.length) > 0 && (b = b.filter((M) => l.value.vendors.includes(M.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          b.sort((M, P) => M.price - P.price);
          break;
        case "price-descending":
          b.sort((M, P) => P.price - M.price);
          break;
        case "title-ascending":
          b.sort((M, P) => M.title.localeCompare(P.title));
          break;
        case "title-descending":
          b.sort((M, P) => P.title.localeCompare(M.title));
          break;
        case "created-ascending":
          b.sort((M, P) => new Date(M.created_at) - new Date(P.created_at));
          break;
        case "created-descending":
          b.sort((M, P) => new Date(P.created_at) - new Date(M.created_at));
          break;
      }
      return b;
    }), p = te(() => {
      if (t.enableInfiniteScroll)
        return d.value.slice(0, r.value);
      const b = (o.value - 1) * t.productsPerPage, T = b + t.productsPerPage;
      return d.value.slice(b, T);
    }), m = te(() => t.totalPages || Math.ceil(d.value.length / t.productsPerPage)), g = te(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : r.value < d.value.length), h = te(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, d.value.length - r.value)), I = te(() => {
      const b = [], T = m.value, R = o.value;
      if (T <= 7)
        for (let D = 1; D <= T; D++)
          b.push(D);
      else if (R <= 3) {
        for (let D = 1; D <= 5; D++)
          b.push(D);
        b.push("..."), b.push(T);
      } else if (R >= T - 2) {
        b.push(1), b.push("...");
        for (let D = T - 4; D <= T; D++)
          b.push(D);
      } else {
        b.push(1), b.push("...");
        for (let D = R - 1; D <= R + 1; D++)
          b.push(D);
        b.push("..."), b.push(T);
      }
      return b.filter((D) => D === "..." || D >= 1 && D <= T);
    }), C = (b) => {
      l.value = b, o.value = 1, r.value = t.productsPerPage;
    }, N = () => {
      o.value = 1, r.value = t.productsPerPage;
    }, v = () => {
      s.value = !0, setTimeout(() => {
        r.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, w = async (b) => {
      var R;
      const T = new FormData();
      T.append("id", b.variants[0].id), T.append("quantity", "1"), await ((R = window.OrionCart) == null ? void 0 : R.addItem(T)), console.log("Added to cart:", b.title);
    }, y = (b) => {
      a.value = b;
    }, A = () => {
      a.value = null;
    };
    let S = null;
    const O = () => {
      !t.enableInfiniteScroll || !c.value || (S = new IntersectionObserver(
        (b) => {
          b[0].isIntersecting && g.value && !s.value && v();
        },
        { threshold: 0.1 }
      ), S.observe(c.value));
    };
    return He(() => {
      O();
    }), Rt(() => {
      S && S.disconnect();
    }), Wt(() => t.enableInfiniteScroll, () => {
      O();
    }), (b, T) => (E(), x("div", t2, [
      e.showHeader ? (E(), x("div", n2, [
        f("h1", s2, q(e.collectionTitle), 1),
        e.collectionDescription ? (E(), x("div", o2, q(e.collectionDescription), 1)) : j("", !0),
        f("div", r2, [
          f("p", i2, q(e.totalProducts || d.value.length) + " products ", 1),
          e.enableSorting ? (E(), x("div", l2, [
            $e(f("select", {
              "onUpdate:modelValue": T[0] || (T[0] = (R) => i.value = R),
              onChange: N,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, T[5] || (T[5] = [
              ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Vs, i.value]
            ])
          ])) : j("", !0)
        ])
      ])) : j("", !0),
      f("div", a2, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (E(), x("aside", c2, [
          f("collection-filters", {
            products: e.products,
            onUpdateFilters: C
          }, null, 40, u2)
        ])) : j("", !0),
        f("div", {
          class: xe(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (E(), x("div", {
            key: 0,
            class: xe(u.value)
          }, [
            (E(), x(re, null, me(6, (R) => f("div", {
              key: R,
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
          ], 2)) : d.value.length === 0 ? (E(), x("div", d2, T[7] || (T[7] = [
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
          ]))) : (E(), x("div", {
            key: 2,
            class: xe(u.value)
          }, [
            (E(!0), x(re, null, me(p.value, (R) => (E(), x("product-card", {
              key: R.id,
              product: R,
              onQuickAdd: w,
              onQuickView: y
            }, null, 40, f2))), 128))
          ], 2)),
          !n.value && d.value.length > 0 ? (E(), x("div", p2, [
            e.enableInfiniteScroll ? (E(), x("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (E(), x("div", h2, T[8] || (T[8] = [
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
                je(" Loading more products... ", -1)
              ]))) : j("", !0)
            ], 512)) : g.value ? (E(), x("div", m2, [
              f("button", {
                onClick: v,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (E(), x("span", v2, "Loading...")) : (E(), x("span", y2, "Load More (" + q(h.value) + " remaining)", 1))
              ], 8, g2)
            ])) : j("", !0),
            !e.enableInfiniteScroll && m.value > 1 ? (E(), x("nav", b2, [
              f("div", _2, [
                f("button", {
                  onClick: T[1] || (T[1] = (R) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, E2),
                f("button", {
                  onClick: T[2] || (T[2] = (R) => o.value++),
                  disabled: o.value === m.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, w2)
              ]),
              f("div", x2, [
                f("div", null, [
                  f("nav", N2, [
                    f("button", {
                      onClick: T[3] || (T[3] = (R) => o.value--),
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
                    ]), 8, S2),
                    (E(!0), x(re, null, me(I.value, (R) => (E(), x("button", {
                      key: R,
                      onClick: (D) => o.value = R,
                      class: xe([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === R ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, q(R), 11, k2))), 128)),
                    f("button", {
                      onClick: T[4] || (T[4] = (R) => o.value++),
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
                    ]), 8, C2)
                  ])
                ])
              ])
            ])) : j("", !0)
          ])) : j("", !0)
        ], 2)
      ]),
      (E(), ut(bn, { to: "body" }, [
        a.value ? (E(), x("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: Ot(A, ["self"])
        }, [
          f("div", O2, [
            f("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: A
            }),
            f("div", $2, [
              f("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                f("button", {
                  onClick: A,
                  class: "bg-white text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  style: { borderRadius: "var(--card-radius, 8px)" }
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
              f("div", T2, [
                f("h3", D2, q(a.value.title), 1),
                T[12] || (T[12] = f("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : j("", !0)
      ]))
    ]));
  }
}, A2 = { class: "collection-sort-wrapper" }, I2 = {
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
    const n = G(e.currentSort), s = () => new URLSearchParams(window.location.search), o = (i) => {
      const l = s();
      i === "manual" ? l.delete("sort_by") : l.set("sort_by", i);
      const a = `${window.location.pathname}${l.toString() ? "?" + l.toString() : ""}`;
      window.history.pushState({}, "", a), window.location.reload();
    }, r = () => {
      o(n.value);
    };
    return He(() => {
      const l = s().get("sort_by");
      l && (n.value = l);
    }), (i, l) => (E(), x("div", A2, [
      $e(f("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
        onChange: r,
        class: "px-4 py-2 min-w-[200px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        style: { borderRadius: "var(--button-radius)" }
      }, l[1] || (l[1] = [
        ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option><option value="created-ascending">Date: Old to New</option><option value="created-descending">Date: New to Old</option>', 8)
      ]), 544), [
        [Vs, n.value]
      ])
    ]));
  }
}, M2 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, P2 = { class: "absolute inset-0 overflow-hidden" }, R2 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, L2 = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, F2 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, B2 = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, j2 = { class: "h-12 flex flex-col justify-between" }, H2 = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, U2 = { class: "mb-6" }, q2 = { class: "flex items-center cursor-pointer" }, z2 = { class: "mb-6" }, W2 = { class: "space-y-2" }, K2 = ["value"], G2 = { class: "ml-2 text-sm" }, Y2 = {
  key: 0,
  class: "mb-6"
}, J2 = { class: "space-y-2" }, X2 = ["value"], Q2 = { class: "ml-2 text-sm" }, Z2 = {
  key: 1,
  class: "mb-6"
}, eE = { class: "space-y-2" }, tE = ["value"], nE = { class: "ml-2 text-sm" }, sE = {
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
    const t = e, n = G(!1), s = G({
      inStock: !1,
      priceRanges: [],
      types: [],
      vendors: []
    }), o = [
      { value: "0-50", label: "Under $50" },
      { value: "50-100", label: "$50 - $100" },
      { value: "100-200", label: "$100 - $200" },
      { value: "200+", label: "$200 & above" }
    ], r = te(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.product_type && g.add(h.product_type);
      }), Array.from(g).sort();
    }), i = te(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.vendor && g.add(h.vendor);
      }), Array.from(g).sort();
    }), l = te(() => {
      let g = 0;
      return s.value.inStock && g++, g += s.value.priceRanges.length, g += s.value.types.length, g += s.value.vendors.length, g;
    }), a = () => {
      n.value = !n.value, n.value ? (p(), document.body.style.overflow = "hidden") : document.body.style.overflow = "";
    }, c = () => {
      n.value = !1, document.body.style.overflow = "";
    }, u = () => {
      const g = new URLSearchParams(window.location.search), h = [];
      for (const [C] of g)
        C.startsWith("filter.") && h.push(C);
      h.forEach((C) => {
        for (; g.has(C); )
          g.delete(C);
      }), s.value.inStock && g.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((C) => {
        g.append("filter.price.range", C);
      }), s.value.types.length > 0 && s.value.types.forEach((C) => {
        g.append("filter.p.product_type", C);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((C) => {
        g.append("filter.p.vendor", C);
      });
      const I = `${window.location.pathname}${g.toString() ? "?" + g.toString() : ""}`;
      window.location.href = I;
    }, d = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const g = new URLSearchParams(window.location.search), h = [];
      for (const [N] of g)
        N.startsWith("filter.") && h.push(N);
      h.forEach((N) => g.delete(N));
      const I = g.get("sort_by"), C = `${window.location.pathname}${I ? "?sort_by=" + I : ""}`;
      window.location.href = C;
    }, p = () => {
      const g = new URLSearchParams(window.location.search);
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      }, g.get("filter.v.availability") === "1" && (s.value.inStock = !0);
      const h = g.getAll("filter.p.product_type");
      h.length > 0 && (s.value.types = h);
      const I = g.getAll("filter.p.vendor");
      I.length > 0 && (s.value.vendors = I);
      const C = g.getAll("filter.price.range");
      C.length > 0 && (s.value.priceRanges = C);
    }, m = () => {
      p();
    };
    return He(() => {
      p(), window.addEventListener("popstate", m);
    }), js(() => {
      window.removeEventListener("popstate", m), document.body.style.overflow = "";
    }), (g, h) => (E(), x("div", null, [
      f("button", {
        onClick: a,
        class: "flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors",
        style: { borderRadius: "var(--button-radius)" }
      }, [
        h[4] || (h[4] = f("svg", {
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
        h[5] || (h[5] = f("span", null, "Filter", -1)),
        f("span", {
          class: xe(["ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }]),
          style: { borderRadius: "9999px" }
        }, q(l.value || "0"), 3)
      ]),
      (E(), ut(bn, { to: "body" }, [
        ue(rt, { name: "drawer" }, {
          default: Me(() => [
            n.value ? (E(), x("div", M2, [
              f("div", P2, [
                ue(rt, { name: "fade" }, {
                  default: Me(() => [
                    n.value ? (E(), x("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : j("", !0)
                  ]),
                  _: 1
                }),
                f("div", R2, [
                  ue(rt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Me(() => [
                      n.value ? (E(), x("div", L2, [
                        f("div", F2, [
                          f("div", B2, [
                            f("div", j2, [
                              h[6] || (h[6] = f("h2", { class: "text-lg font-medium text-gray-900" }, "Filters", -1)),
                              f("p", {
                                class: xe(["text-sm text-gray-500 h-5 transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }])
                              }, q(l.value || "0") + " " + q((l.value || 0) === 1 ? "filter" : "filters") + " active ", 3)
                            ]),
                            f("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: c
                            }, h[7] || (h[7] = [
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
                          f("div", H2, [
                            f("div", U2, [
                              h[9] || (h[9] = f("h3", { class: "font-medium mb-3" }, "Availability", -1)),
                              f("label", q2, [
                                $e(f("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": h[0] || (h[0] = (I) => s.value.inStock = I),
                                  class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                }, null, 512), [
                                  [Le, s.value.inStock]
                                ]),
                                h[8] || (h[8] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            f("div", z2, [
                              h[10] || (h[10] = f("h3", { class: "font-medium mb-3" }, "Price", -1)),
                              f("div", W2, [
                                (E(), x(re, null, me(o, (I) => f("label", {
                                  key: I.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: I.value,
                                    "onUpdate:modelValue": h[1] || (h[1] = (C) => s.value.priceRanges = C),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, K2), [
                                    [Le, s.value.priceRanges]
                                  ]),
                                  f("span", G2, q(I.label), 1)
                                ])), 64))
                              ])
                            ]),
                            r.value.length > 0 ? (E(), x("div", Y2, [
                              h[11] || (h[11] = f("h3", { class: "font-medium mb-3" }, "Product Type", -1)),
                              f("div", J2, [
                                (E(!0), x(re, null, me(r.value, (I) => (E(), x("label", {
                                  key: I,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: I,
                                    "onUpdate:modelValue": h[2] || (h[2] = (C) => s.value.types = C),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, X2), [
                                    [Le, s.value.types]
                                  ]),
                                  f("span", Q2, q(I), 1)
                                ]))), 128))
                              ])
                            ])) : j("", !0),
                            i.value.length > 0 ? (E(), x("div", Z2, [
                              h[12] || (h[12] = f("h3", { class: "font-medium mb-3" }, "Brand", -1)),
                              f("div", eE, [
                                (E(!0), x(re, null, me(i.value, (I) => (E(), x("label", {
                                  key: I,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: I,
                                    "onUpdate:modelValue": h[3] || (h[3] = (C) => s.value.vendors = C),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, tE), [
                                    [Le, s.value.vendors]
                                  ]),
                                  f("span", nE, q(I), 1)
                                ]))), 128))
                              ])
                            ])) : j("", !0)
                          ]),
                          f("div", { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, [
                            f("button", {
                              onClick: u,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Apply Filters "),
                            f("button", {
                              onClick: d,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Clear All ")
                          ])
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
      ]))
    ]));
  }
}, oE = /* @__PURE__ */ Je(sE, [["__scopeId", "data-v-7b26bf02"]]);
function rE(e) {
  return cl() ? (Bc(e), !0) : !1;
}
function Rf(e) {
  return typeof e == "function" ? e() : ko(e);
}
const iE = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const lE = Object.prototype.toString, aE = (e) => lE.call(e) === "[object Object]", nl = () => {
};
function cE(e) {
  var t;
  const n = Rf(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Lf = iE ? window : void 0;
function _i(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Lf) : [t, n, s, o] = e, !t)
    return nl;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((u) => u()), r.length = 0;
  }, l = (u, d, p, m) => (u.addEventListener(d, p, m), () => u.removeEventListener(d, p, m)), a = Wt(
    () => [cE(t), Rf(o)],
    ([u, d]) => {
      if (i(), !u)
        return;
      const p = aE(d) ? { ...d } : d;
      r.push(
        ...n.flatMap((m) => s.map((g) => l(u, m, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), i();
  };
  return rE(c), c;
}
function uE(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: r,
    passive: i = !0,
    window: l = Lf
  } = t, a = Ss({ x: 0, y: 0 }), c = Ss({ x: 0, y: 0 }), u = te(() => a.x - c.x), d = te(() => a.y - c.y), { max: p, abs: m } = Math, g = te(() => p(m(u.value), m(d.value)) >= n), h = G(!1), I = te(() => g.value ? m(u.value) > m(d.value) ? u.value > 0 ? "left" : "right" : d.value > 0 ? "up" : "down" : "none"), C = (b) => [b.touches[0].clientX, b.touches[0].clientY], N = (b, T) => {
    a.x = b, a.y = T;
  }, v = (b, T) => {
    c.x = b, c.y = T;
  };
  let w;
  const y = dE(l == null ? void 0 : l.document);
  i ? w = y ? { passive: !0 } : { capture: !1 } : w = y ? { passive: !1, capture: !0 } : { capture: !0 };
  const A = (b) => {
    h.value && (o == null || o(b, I.value)), h.value = !1;
  }, S = [
    _i(e, "touchstart", (b) => {
      if (b.touches.length !== 1)
        return;
      w.capture && !w.passive && b.preventDefault();
      const [T, R] = C(b);
      N(T, R), v(T, R), r == null || r(b);
    }, w),
    _i(e, "touchmove", (b) => {
      if (b.touches.length !== 1)
        return;
      const [T, R] = C(b);
      v(T, R), !h.value && g.value && (h.value = !0), h.value && (s == null || s(b));
    }, w),
    _i(e, ["touchend", "touchcancel"], A, w)
  ];
  return {
    isPassiveEventSupported: y,
    isSwiping: h,
    direction: I,
    coordsStart: a,
    coordsEnd: c,
    lengthX: u,
    lengthY: d,
    stop: () => S.forEach((b) => b())
  };
}
function dE(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", nl, n), e.removeEventListener("x", nl), t;
}
const fE = { class: "product-gallery" }, pE = { class: "main-image-wrapper" }, hE = ["src", "alt"], mE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, gE = {
  key: 0,
  class: "thumbnails-wrapper"
}, vE = ["disabled"], yE = ["onClick", "aria-label"], bE = ["src", "alt"], _E = ["disabled"], EE = {
  key: 1,
  class: "swiper-dots"
}, wE = ["onClick", "aria-label"], xE = ["src", "alt"], NE = { class: "lightbox-counter" }, SE = 80, zo = 4, Oc = 2, kE = {
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
    const t = e, n = G(0), s = G(!1), o = G(!1), r = G(!1), i = G(!1), l = G(0), a = G(null), c = G(0), u = G(0), d = G({}), p = te(() => t.images.map((S) => {
      if (S.src)
        return S;
      const O = S.url || S;
      return {
        src: `${O}?width=${t.imageTransformWidth}`,
        thumbnail: `${O}?width=${t.thumbnailWidth}`,
        alt: S.alt || t.productTitle
      };
    })), m = te(() => p.value[n.value] || { src: "", alt: "" }), g = te(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${u.value - 150 / 2}px`
    })), h = te(() => {
      const O = c.value / d.value.width * 100, b = u.value / d.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${d.value.width * Oc}px ${d.value.height * Oc}px`,
        backgroundPosition: `${O}% ${b}%`
      };
    }), I = (S) => {
      s.value = !0, n.value = S;
    }, C = (S) => {
      S === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - zo,
        l.value + 1
      );
    }, N = (S) => {
      n.value = S, o.value = !0, document.body.style.overflow = "hidden";
    }, v = () => {
      o.value = !1, document.body.style.overflow = "";
    }, w = (S) => {
      S === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, y = (S) => {
      const O = S.currentTarget.getBoundingClientRect();
      d.value = O, c.value = S.clientX - O.left, u.value = S.clientY - O.top;
    }, { lengthX: A } = uE(
      a,
      {
        onSwipeEnd() {
          A.value > 50 ? C("prev") : A.value < -50 && C("next");
        }
      }
    );
    return He(() => {
      i.value = window.innerWidth < 768;
      const S = () => {
        i.value = window.innerWidth < 768;
      }, O = (b) => {
        o.value && (b.key === "Escape" && v(), b.key === "ArrowLeft" && w("prev"), b.key === "ArrowRight" && w("next"));
      };
      window.addEventListener("resize", S), window.addEventListener("keydown", O), Rt(() => {
        window.removeEventListener("resize", S), window.removeEventListener("keydown", O);
      });
    }), (S, O) => (E(), x("div", fE, [
      f("div", pE, [
        f("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: O[1] || (O[1] = (b) => N(n.value)),
          onMouseenter: O[2] || (O[2] = (b) => r.value = !0),
          onMouseleave: O[3] || (O[3] = (b) => r.value = !1),
          onMousemove: y
        }, [
          f("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: xe(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: O[0] || (O[0] = (b) => s.value = !1)
          }, null, 42, hE),
          s.value ? (E(), x("div", mE, O[9] || (O[9] = [
            f("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : j("", !0),
          O[10] || (O[10] = f("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
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
          r.value && !i.value ? (E(), x("div", {
            key: 1,
            class: "zoom-lens",
            style: Ge(g.value)
          }, null, 4)) : j("", !0)
        ], 32),
        r.value && !i.value ? (E(), x("div", {
          key: 0,
          class: "zoom-preview",
          style: Ge(h.value)
        }, null, 4)) : j("", !0)
      ]),
      p.value.length > 1 ? (E(), x("div", gE, [
        p.value.length > zo ? (E(), x("button", {
          key: 0,
          onClick: O[4] || (O[4] = (b) => C("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, O[11] || (O[11] = [
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
        ]), 8, vE)) : j("", !0),
        f("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          f("div", {
            class: "thumbnails-track",
            style: Ge({ transform: `translateX(-${l.value * (SE + 8)}px)` })
          }, [
            (E(!0), x(re, null, me(p.value, (b, T) => (E(), x("button", {
              key: T,
              onClick: (R) => I(T),
              class: xe(["thumbnail", { active: T === n.value }]),
              "aria-label": `View image ${T + 1}`
            }, [
              f("img", {
                src: b.thumbnail || b.src,
                alt: b.alt,
                class: "w-full h-full object-contain"
              }, null, 8, bE)
            ], 10, yE))), 128))
          ], 4)
        ], 512),
        p.value.length > zo ? (E(), x("button", {
          key: 1,
          onClick: O[5] || (O[5] = (b) => C("next")),
          disabled: l.value >= p.value.length - zo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, O[12] || (O[12] = [
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
        ]), 8, _E)) : j("", !0)
      ])) : j("", !0),
      p.value.length > 1 && i.value ? (E(), x("div", EE, [
        (E(!0), x(re, null, me(p.value, (b, T) => (E(), x("button", {
          key: T,
          onClick: (R) => I(T),
          class: xe(["swiper-dot", { active: T === n.value }]),
          "aria-label": `Go to image ${T + 1}`
        }, null, 10, wE))), 128))
      ])) : j("", !0),
      (E(), ut(bn, { to: "body" }, [
        o.value ? (E(), x("div", {
          key: 0,
          class: "lightbox",
          onClick: v
        }, [
          f("button", {
            onClick: v,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, O[13] || (O[13] = [
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
          p.value.length > 1 ? (E(), x("button", {
            key: 0,
            onClick: O[6] || (O[6] = Ot((b) => w("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, O[14] || (O[14] = [
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
            onClick: O[7] || (O[7] = Ot(() => {
            }, ["stop"]))
          }, [
            f("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, xE)
          ]),
          p.value.length > 1 ? (E(), x("button", {
            key: 1,
            onClick: O[8] || (O[8] = Ot((b) => w("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, O[15] || (O[15] = [
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
          f("div", NE, q(n.value + 1) + " / " + q(p.value.length), 1)
        ])) : j("", !0)
      ]))
    ]));
  }
}, CE = /* @__PURE__ */ Je(kE, [["__scopeId", "data-v-a7c1d2a3"]]), OE = { class: "product-info" }, $E = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, TE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, DE = { class: "price-wrapper mb-6" }, VE = { class: "flex items-baseline gap-3" }, AE = { class: "text-3xl font-semibold text-gray-900" }, IE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, ME = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, PE = {
  key: 1,
  class: "mb-6"
}, RE = ["product", "current-variant"], LE = ["value"], FE = { class: "mb-4" }, BE = ["max"], jE = { class: "mb-4" }, HE = {
  key: 0,
  class: "text-red-600 font-medium"
}, UE = {
  key: 1,
  class: "text-amber-600"
}, qE = {
  key: 2,
  class: "text-green-600"
}, zE = { class: "flex flex-col sm:flex-row gap-3" }, WE = ["disabled"], KE = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, GE = { key: 1 }, YE = { key: 2 }, JE = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, XE = ["innerHTML"], QE = { class: "space-y-4" }, ZE = {
  key: 0,
  class: "group"
}, ew = ["innerHTML"], tw = {
  key: 1,
  class: "group"
}, nw = { class: "mt-8 pt-8 border-t" }, sw = { class: "flex gap-3" }, ow = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, rw = {
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
    var I;
    const n = e, s = t, o = G(n.product.selected_or_first_available_variant || ((I = n.product.variants) == null ? void 0 : I[0]) || {}), r = G(1), i = G(!1), l = G(!1), a = te(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = te(() => {
      var C;
      return (C = n.product.options) == null ? void 0 : C.some(
        (N) => N.name.toLowerCase() === "size" || N.name.toLowerCase() === "taille"
      );
    }), u = (C) => `$${(C / 100).toFixed(2)}`, d = (C) => {
      o.value = C, s("variant-change", C);
      const N = new URL(window.location);
      N.searchParams.set("variant", C.id), window.history.replaceState({}, "", N);
    }, p = async () => {
      var N;
      i.value = !0;
      const C = new FormData();
      C.append("id", o.value.id), C.append("quantity", r.value);
      try {
        await ((N = window.OrionCart) == null ? void 0 : N.addItem(C));
        const v = event.target, w = v.textContent;
        v.textContent = "✓ Added to Cart", setTimeout(() => {
          v.textContent = w;
        }, 2e3);
      } catch (v) {
        console.error("Failed to add to cart:", v), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, g = (C) => {
      const N = window.location.href, v = n.product.title, w = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(N)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(N)}&text=${encodeURIComponent(v)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(N)}&description=${encodeURIComponent(v)}`
      };
      w[C] && window.open(w[C], "_blank", "width=600,height=400");
    }, h = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (C) {
        console.error("Failed to copy link:", C);
      }
    };
    return Wt(() => n.product.selected_variant, (C) => {
      C && (o.value = C);
    }), (C, N) => (E(), x("div", OE, [
      f("h1", $E, q(e.product.title), 1),
      e.product.vendor ? (E(), x("p", TE, " by " + q(e.product.vendor), 1)) : j("", !0),
      f("div", DE, [
        f("div", VE, [
          f("span", AE, q(u(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (E(), x("span", IE, q(u(o.value.compare_at_price)), 1)) : j("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (E(), x("p", ME, " Save " + q(u(o.value.compare_at_price - o.value.price)) + " (" + q(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : j("", !0)
      ]),
      e.product.has_only_default_variant ? j("", !0) : (E(), x("div", PE, [
        f("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: d
        }, null, 40, RE)
      ])),
      f("form", {
        onSubmit: Ot(p, ["prevent"]),
        class: "mb-8"
      }, [
        f("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, LE),
        f("div", FE, [
          N[4] || (N[4] = f("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          $e(f("quantity-selector", {
            "onUpdate:modelValue": N[0] || (N[0] = (v) => r.value = v),
            min: 1,
            max: a.value
          }, null, 8, BE), [
            [Bn, r.value]
          ])
        ]),
        f("div", jE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (E(), x("p", UE, " Only " + q(o.value.inventory_quantity) + " left in stock ", 1)) : (E(), x("p", qE, " ✓ In Stock ")) : (E(), x("p", HE, " Out of Stock "))
        ]),
        f("div", zE, [
          f("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || i.value
          }, [
            i.value ? (E(), x("span", KE, N[5] || (N[5] = [
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
              je(" Adding... ", -1)
            ]))) : o.value.available ? (E(), x("span", YE, " Add to Cart ")) : (E(), x("span", GE, " Sold Out "))
          ], 8, WE),
          e.showBuyNow ? (E(), ut(ss, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Me(() => N[6] || (N[6] = [
              je(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : j("", !0)
        ])
      ], 32),
      e.product.description ? (E(), x("div", JE, [
        N[7] || (N[7] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        f("div", {
          innerHTML: e.product.description
        }, null, 8, XE)
      ])) : j("", !0),
      f("div", QE, [
        N[10] || (N[10] = ls('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (E(), x("details", ZE, [
          N[8] || (N[8] = f("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
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
          }, null, 8, ew)
        ])) : j("", !0),
        c.value ? (E(), x("details", tw, N[9] || (N[9] = [
          ls('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : j("", !0)
      ]),
      f("div", nw, [
        N[15] || (N[15] = f("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        f("div", sw, [
          f("button", {
            onClick: N[1] || (N[1] = (v) => g("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, N[11] || (N[11] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          f("button", {
            onClick: N[2] || (N[2] = (v) => g("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, N[12] || (N[12] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          f("button", {
            onClick: N[3] || (N[3] = (v) => g("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, N[13] || (N[13] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          f("button", {
            onClick: h,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            N[14] || (N[14] = f("svg", {
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
            l.value ? (E(), x("span", ow, " Link copied! ")) : j("", !0)
          ])
        ])
      ])
    ]));
  }
}, iw = /* @__PURE__ */ Je(rw, [["__scopeId", "data-v-9e2c3b5c"]]), lw = {
  class: "cart-summary bg-gray-50 p-6 lg:sticky lg:top-24",
  style: { borderRadius: "var(--card-radius, 8px)" }
}, aw = { class: "space-y-3 mb-4" }, cw = { class: "flex justify-between text-sm" }, uw = { class: "text-gray-600" }, dw = { class: "font-medium text-gray-900" }, fw = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, pw = {
  key: 1,
  class: "flex justify-between text-sm"
}, hw = { class: "text-gray-900" }, mw = {
  key: 2,
  class: "flex justify-between text-sm"
}, gw = { class: "text-gray-900" }, vw = { class: "border-t pt-4 mb-6" }, yw = { class: "flex justify-between items-baseline" }, bw = { class: "text-right" }, _w = { class: "text-xl font-bold text-gray-900" }, Ew = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, ww = { class: "mb-6" }, xw = { class: "group" }, Nw = { class: "mt-3" }, Sw = ["disabled"], kw = ["disabled"], Cw = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, Ow = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, $w = ["disabled"], Tw = {
  key: 0,
  class: "flex items-center gap-2"
}, Dw = { key: 1 }, Vw = {
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
    const n = e, s = t, o = G(""), r = G(""), i = G(""), l = G(!1), a = G(!1), c = G(!1), u = te(() => n.cart.item_count || 0), d = te(() => n.cart.total_price || 0), p = te(() => n.cart.original_total_price || n.cart.total_price || 0), m = te(() => n.cart.total_discount || 0), g = te(() => d.value >= 5e3 ? 0 : 500), h = te(() => Math.round(d.value * 0.1)), I = (v) => `$${(v / 100).toFixed(2)}`, C = async () => {
      var v;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, r.value = "", i.value = "";
        try {
          const w = new FormData();
          w.append("discount_code", o.value);
          const y = await fetch("/discount/apply", {
            method: "POST",
            body: w
          });
          if (y.ok)
            i.value = "Promo code applied successfully!", o.value = "", await ((v = window.OrionCart) == null ? void 0 : v.fetchCart());
          else {
            const A = await y.json();
            r.value = A.message || "Invalid promo code";
          }
        } catch (w) {
          console.error("Failed to apply promo code:", w), r.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, N = async () => {
      if (!(u.value === 0 || a.value)) {
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
    return (v, w) => (E(), x("div", lw, [
      w[10] || (w[10] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      f("div", aw, [
        f("div", cw, [
          f("span", uw, "Subtotal (" + q(u.value) + " " + q(u.value === 1 ? "item" : "items") + ")", 1),
          f("span", dw, q(I(p.value)), 1)
        ]),
        m.value > 0 ? (E(), x("div", fw, [
          w[3] || (w[3] = f("span", { class: "flex items-center gap-1" }, [
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
            je(" Discounts ")
          ], -1)),
          f("span", null, "-" + q(I(m.value)), 1)
        ])) : j("", !0),
        e.showShipping ? (E(), x("div", pw, [
          w[4] || (w[4] = f("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          f("span", hw, q(g.value === 0 ? "Free" : I(g.value)), 1)
        ])) : j("", !0),
        e.showTax ? (E(), x("div", mw, [
          w[5] || (w[5] = f("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          f("span", gw, q(I(h.value)), 1)
        ])) : j("", !0)
      ]),
      f("div", vw, [
        f("div", yw, [
          w[6] || (w[6] = f("span", { class: "text-lg font-semibold" }, "Total", -1)),
          f("div", bw, [
            f("span", _w, q(I(d.value)), 1),
            m.value > 0 ? (E(), x("p", Ew, " You saved " + q(I(m.value)) + "! ", 1)) : j("", !0)
          ])
        ])
      ]),
      f("div", ww, [
        f("details", xw, [
          w[7] || (w[7] = f("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          f("div", Nw, [
            f("form", {
              onSubmit: Ot(C, ["prevent"]),
              class: "flex gap-2"
            }, [
              $e(f("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (y) => o.value = y),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                style: { borderRadius: "var(--card-radius, 8px)" },
                disabled: l.value
              }, null, 8, Sw), [
                [Bn, o.value]
              ]),
              f("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !o.value.trim() || l.value
              }, q(l.value ? "Applying..." : "Apply"), 9, kw)
            ], 32),
            r.value ? (E(), x("p", Cw, q(r.value), 1)) : j("", !0),
            i.value ? (E(), x("p", Ow, q(i.value), 1)) : j("", !0)
          ])
        ])
      ]),
      f("button", {
        onClick: N,
        class: "w-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: Ge({
          backgroundColor: c.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: w[1] || (w[1] = (y) => c.value = !0),
        onMouseleave: w[2] || (w[2] = (y) => c.value = !1),
        disabled: u.value === 0 || a.value
      }, [
        a.value ? (E(), x("span", Tw, w[8] || (w[8] = [
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
          je(" Processing... ", -1)
        ]))) : (E(), x("span", Dw, w[9] || (w[9] = [
          je(" Proceed to Checkout ", -1),
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
      ], 44, $w),
      w[11] || (w[11] = ls('<div class="mt-6 space-y-2" data-v-daaa8299><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-daaa8299></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-daaa8299></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-daaa8299></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-daaa8299></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-daaa8299><p class="text-xs text-gray-600 mb-2" data-v-daaa8299>We accept</p><div class="flex gap-2" data-v-daaa8299><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-daaa8299></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#EB001B" data-v-daaa8299></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-daaa8299></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-daaa8299></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-daaa8299></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#253B80" data-v-daaa8299></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-daaa8299></path></svg></div></div>', 2))
    ]));
  }
}, Aw = /* @__PURE__ */ Je(Vw, [["__scopeId", "data-v-daaa8299"]]), Iw = { class: "slideshow-banner" }, Mw = {
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
    const t = e, n = G(0), s = G([]), o = G(null), r = te(() => t.autoRotate === !0 || t.autoRotate === "true"), i = te(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const h = document.querySelector(".slideshow-prev"), I = document.querySelector(".slideshow-next"), C = document.querySelectorAll(".slide-indicator");
      h && h.addEventListener("click", u), I && I.addEventListener("click", c), C.forEach((N, v) => {
        N.addEventListener("click", () => a(v));
      }), r.value && d();
    }, a = (h) => {
      var N, v, w, y;
      if (h === n.value || !s.value.length) return;
      (N = s.value[n.value]) == null || N.classList.remove("opacity-100"), (v = s.value[n.value]) == null || v.classList.add("opacity-0");
      const I = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      I == null || I.classList.remove("opacity-100"), I == null || I.classList.add("opacity-50"), n.value = h, (w = s.value[n.value]) == null || w.classList.remove("opacity-0"), (y = s.value[n.value]) == null || y.classList.add("opacity-100");
      const C = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      C == null || C.classList.remove("opacity-50"), C == null || C.classList.add("opacity-100");
    }, c = () => {
      const h = (n.value + 1) % s.value.length;
      a(h);
    }, u = () => {
      const h = n.value === 0 ? s.value.length - 1 : n.value - 1;
      a(h);
    }, d = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        c();
      }, i.value);
    }, p = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, m = () => {
      r.value && p();
    }, g = () => {
      r.value && d();
    };
    return He(() => {
      setTimeout(l, 100);
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.addEventListener("mouseenter", m), h.addEventListener("mouseleave", g));
    }), Rt(() => {
      p();
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.removeEventListener("mouseenter", m), h.removeEventListener("mouseleave", g));
    }), (h, I) => (E(), x("div", Iw, [
      fs(h.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Pw = /* @__PURE__ */ Je(Mw, [["__scopeId", "data-v-8690c751"]]), Rw = { class: "testimonials-carousel relative" }, Lw = {
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
    const t = e, n = G(0), s = G([]), o = G(null), r = G(null), i = te(() => t.autoRotate === !0 || t.autoRotate === "true"), l = te(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), r.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const y = document.querySelector(".testimonials-prev"), A = document.querySelector(".testimonials-next"), S = document.querySelectorAll(".testimonial-indicator");
      y && y.addEventListener("click", d), A && A.addEventListener("click", u), S.forEach((O, b) => {
        O.addEventListener("click", () => c(b));
      }), i.value && p();
    }, c = (y) => {
      if (y === n.value || !s.value.length || !r.value) return;
      n.value = y;
      const S = -s.value[0].offsetWidth * n.value;
      r.value.style.transform = `translateX(${S}px)`, document.querySelectorAll(".testimonial-indicator").forEach((b, T) => {
        T === n.value ? (b.classList.remove("bg-gray-300"), b.classList.add("bg-red-600")) : (b.classList.remove("bg-red-600"), b.classList.add("bg-gray-300"));
      });
    }, u = () => {
      const y = (n.value + 1) % s.value.length;
      c(y);
    }, d = () => {
      const y = n.value === 0 ? s.value.length - 1 : n.value - 1;
      c(y);
    }, p = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        u();
      }, l.value);
    }, m = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, g = () => {
      i.value && m();
    }, h = () => {
      i.value && p();
    };
    let I = 0, C = 0;
    const N = (y) => {
      I = y.changedTouches[0].screenX;
    }, v = (y) => {
      C = y.changedTouches[0].screenX, w();
    }, w = () => {
      const A = I - C;
      Math.abs(A) > 50 && (A > 0 ? u() : d());
    };
    return He(() => {
      setTimeout(a, 100);
      const y = document.querySelector(".testimonials-wrapper");
      y && (y.addEventListener("mouseenter", g), y.addEventListener("mouseleave", h), y.addEventListener("touchstart", N), y.addEventListener("touchend", v));
    }), Rt(() => {
      m();
      const y = document.querySelector(".testimonials-wrapper");
      y && (y.removeEventListener("mouseenter", g), y.removeEventListener("mouseleave", h), y.removeEventListener("touchstart", N), y.removeEventListener("touchend", v));
    }), (y, A) => (E(), x("div", Rw, [
      fs(y.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Fw = /* @__PURE__ */ Je(Lw, [["__scopeId", "data-v-276cc4e8"]]), Bw = { class: "video-player relative w-full h-full" }, jw = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, Hw = ["src", "title"], Uw = {
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
    const t = e, n = G(!1), s = G(""), o = G(""), r = te(() => t.autoplay === !0 || t.autoplay === "true"), i = te(() => t.muted === !0 || t.muted === "true"), l = te(() => t.controls === !0 || t.controls === "true"), a = te(() => `${s.value} video player`), c = te(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const g = r.value ? "1" : "0", h = i.value ? "1" : "0", I = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${g}&mute=${h}&controls=${I}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${g}&muted=${h}&controls=${I}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), u = (m) => {
      if (!m) return { type: "", id: "" };
      const g = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const I of g) {
        const C = m.match(I);
        if (C)
          return { type: "youtube", id: C[1] };
      }
      const h = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const I of h) {
        const C = m.match(I);
        if (C)
          return { type: "vimeo", id: C[1] };
      }
      return { type: "", id: "" };
    }, d = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      r.value && o.value && s.value && (n.value = !0);
    };
    return He(() => {
      const m = u(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const g = document.querySelector(".play-button");
      g && g.addEventListener("click", d), p();
    }), (m, g) => (E(), x("div", Bw, [
      n.value ? (E(), x("div", jw, [
        f("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, Hw)
      ])) : (E(), x("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: d
      }, [
        fs(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, qw = /* @__PURE__ */ Je(Uw, [["__scopeId", "data-v-540fecb2"]]), zw = { class: "password-modal" }, Ww = {
  __name: "PasswordModal",
  setup(e) {
    const t = G(!1), n = () => {
      t.value = !0, document.body.style.overflow = "hidden";
    }, s = () => {
      t.value = !1, document.body.style.overflow = "";
    }, o = (c) => {
      c.preventDefault(), t.value ? s() : n();
    }, r = (c) => {
      c.key === "Escape" && t.value && s();
    }, i = (c) => {
      const u = document.querySelector(".password-content"), d = document.querySelector(".password-toggle");
      t.value && u && !u.contains(c.target) && !d.contains(c.target) && s();
    };
    He(() => {
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
      let u = t.value;
      const d = setInterval(() => {
        t.value !== u && (c(t.value, u), u = t.value);
      }, 50);
      return () => clearInterval(d);
    };
    return He(() => {
      a(() => {
        l();
      });
    }), (c, u) => (E(), x("div", zw, [
      fs(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Kw = /* @__PURE__ */ Je(Ww, [["__scopeId", "data-v-075988c6"]]), Gw = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Yw = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, Jw = { class: "bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20" }, Xw = { class: "max-w-6xl mx-auto" }, Qw = { class: "relative" }, Zw = { class: "px-4 py-8 sm:px-6 lg:px-8" }, ex = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, tx = { class: "flex-1 relative group" }, nx = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, sx = {
  key: 0,
  class: "relative"
}, ox = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, rx = { class: "flex flex-wrap gap-2" }, ix = ["onClick"], lx = {
  key: 0,
  class: "border-t border-gray-100"
}, ax = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, cx = {
  key: 0,
  class: "p-6"
}, ux = { class: "animate-pulse" }, dx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, fx = {
  key: 1,
  class: "p-6"
}, px = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, hx = ["href"], mx = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, gx = ["src", "alt"], vx = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, yx = { class: "flex-1 min-w-0" }, bx = { class: "text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2" }, _x = { class: "mt-1 flex items-center gap-2" }, Ex = { class: "text-sm font-semibold text-gray-900" }, wx = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, xx = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, Nx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, Sx = ["href"], kx = { class: "text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors" }, Cx = {
  key: 3,
  class: "p-12 text-center"
}, Ox = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, $x = ["href"], Tx = {
  __name: "SearchOverlay",
  setup(e) {
    const t = G(!1), n = G(""), s = G(null), o = G(!1), r = G({
      products: [],
      collections: []
    }), i = G(null), l = te(() => {
      var C;
      return ((C = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : C.search) || "/search";
    }), a = te(() => n.value.length > 0), c = te(() => {
      var v, w;
      const C = [], N = ((w = (v = window.Shopline) == null ? void 0 : v.theme) == null ? void 0 : w.settings) || {};
      for (let y = 1; y <= 6; y++) {
        const A = N[`popular_search_${y}`];
        A && A.trim() && C.push(A.trim());
      }
      return C.length === 0 ? ["New Arrivals", "Best Sellers", "Sale", "Summer Collection"] : C;
    }), u = (C) => {
      var A, S;
      if (!C && C !== 0) return "$0.00";
      const N = ((A = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : A.money_format) || "${{amount}}", v = ((S = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : S.current) || "en", y = new Intl.NumberFormat(v, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(C));
      return N.replace("{{amount}}", y);
    }, d = async () => {
      var C;
      t.value = !0, document.body.style.overflow = "hidden", await Ln(), (C = s.value) == null || C.focus();
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
        const N = ((C = window.routes) == null ? void 0 : C.predictive_search_url) || "/search/suggest", v = await fetch(
          `${N}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (v.ok) {
          const w = await v.text(), S = new DOMParser().parseFromString(w, "text/html").querySelectorAll(".predictive-search__list-item"), O = Array.from(S).map((b) => {
            var M, P;
            const T = b.querySelector("a"), R = b.querySelector("img"), D = b.querySelector(".predictive-search__item-head"), $ = b.querySelector(".price__item");
            return {
              url: (T == null ? void 0 : T.href) || "#",
              image: (R == null ? void 0 : R.src) || "",
              title: ((M = D == null ? void 0 : D.textContent) == null ? void 0 : M.trim()) || "",
              price: ((P = $ == null ? void 0 : $.textContent) == null ? void 0 : P.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          r.value = {
            products: O,
            collections: []
            // Collections can be added if needed
          };
        }
      } catch (N) {
        console.error("Search error:", N), r.value = { products: [], collections: [] };
      } finally {
        o.value = !1;
      }
    }, h = () => {
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(n.value)}`);
    }, I = (C) => {
      C.key === "Escape" && t.value && p();
    };
    return He(() => {
      document.addEventListener("search-overlay:open", d), document.addEventListener("search-overlay:close", p), document.addEventListener("keydown", I);
    }), Rt(() => {
      document.removeEventListener("search-overlay:open", d), document.removeEventListener("search-overlay:close", p), document.removeEventListener("keydown", I);
    }), (C, N) => (E(), ut(bn, { to: "body" }, [
      ue(rt, { name: "search-overlay" }, {
        default: Me(() => [
          t.value ? (E(), x("div", Gw, [
            ue(rt, { name: "fade" }, {
              default: Me(() => [
                t.value ? (E(), x("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-all duration-300",
                  onClick: p
                })) : j("", !0)
              ]),
              _: 1
            }),
            ue(rt, {
              name: "slide-down",
              appear: ""
            }, {
              default: Me(() => {
                var v, w;
                return [
                  t.value ? (E(), x("div", Yw, [
                    f("div", Jw, [
                      f("div", Xw, [
                        f("div", Qw, [
                          f("div", Zw, [
                            f("div", ex, [
                              f("div", tx, [
                                N[4] || (N[4] = f("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
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
                                $e(f("input", {
                                  ref_key: "searchInput",
                                  ref: s,
                                  "onUpdate:modelValue": N[0] || (N[0] = (y) => n.value = y),
                                  type: "search",
                                  placeholder: "Search for products, collections...",
                                  class: "search-input w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200",
                                  style: { borderRadius: "var(--button-radius, 16px)" },
                                  onInput: m,
                                  onKeydown: [
                                    _r(p, ["escape"]),
                                    _r(h, ["enter"])
                                  ]
                                }, null, 544), [
                                  [Bn, n.value]
                                ]),
                                f("div", nx, [
                                  o.value ? (E(), x("div", sx, N[2] || (N[2] = [
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (E(), x("button", {
                                    key: 1,
                                    onClick: N[1] || (N[1] = (y) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, N[3] || (N[3] = [
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
                                onClick: p
                              }, N[5] || (N[5] = [
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
                            !n.value && !o.value ? (E(), x("div", ox, [
                              N[6] || (N[6] = f("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              f("div", rx, [
                                (E(!0), x(re, null, me(c.value, (y) => (E(), x("button", {
                                  key: y,
                                  onClick: (A) => {
                                    n.value = y, h();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, q(y), 9, ix))), 128))
                              ])
                            ])) : j("", !0)
                          ]),
                          a.value ? (E(), x("div", lx, [
                            f("div", ax, [
                              o.value ? (E(), x("div", cx, [
                                f("div", ux, [
                                  N[8] || (N[8] = f("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  f("div", dx, [
                                    (E(), x(re, null, me(4, (y) => f("div", {
                                      key: y,
                                      class: "flex items-start space-x-3"
                                    }, N[7] || (N[7] = [
                                      f("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      f("div", { class: "flex-1" }, [
                                        f("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        f("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : r.value.products && r.value.products.length > 0 ? (E(), x("div", fx, [
                                N[10] || (N[10] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                f("div", px, [
                                  (E(!0), x(re, null, me(r.value.products, (y) => (E(), x("a", {
                                    key: y.id,
                                    href: y.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: p
                                  }, [
                                    f("div", mx, [
                                      y.image ? (E(), x("img", {
                                        key: 0,
                                        src: y.image,
                                        alt: y.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, gx)) : (E(), x("div", vx, N[9] || (N[9] = [
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
                                    f("div", yx, [
                                      f("p", bx, q(y.title), 1),
                                      f("div", _x, [
                                        f("p", Ex, q(u(y.price)), 1),
                                        y.compareAtPrice && y.compareAtPrice > y.price ? (E(), x("p", wx, q(u(y.compareAtPrice)), 1)) : j("", !0)
                                      ])
                                    ])
                                  ], 8, hx))), 128))
                                ])
                              ])) : j("", !0),
                              r.value.collections && r.value.collections.length > 0 ? (E(), x("div", xx, [
                                N[12] || (N[12] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                f("div", Nx, [
                                  (E(!0), x(re, null, me(r.value.collections, (y) => (E(), x("a", {
                                    key: y.id,
                                    href: y.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: p
                                  }, [
                                    f("span", kx, q(y.title), 1),
                                    N[11] || (N[11] = f("svg", {
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
                                  ], 8, Sx))), 128))
                                ])
                              ])) : j("", !0),
                              n.value && !o.value && (!r.value.products || r.value.products.length === 0) && (!r.value.collections || r.value.collections.length === 0) ? (E(), x("div", Cx, N[13] || (N[13] = [
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
                            n.value && (((v = r.value.products) == null ? void 0 : v.length) > 0 || ((w = r.value.collections) == null ? void 0 : w.length) > 0) ? (E(), x("div", Ox, [
                              f("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: p
                              }, [
                                je(' View all results for "' + q(n.value) + '" ', 1),
                                N[14] || (N[14] = f("svg", {
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
                              ], 8, $x)
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
}, Dx = /* @__PURE__ */ Je(Tx, [["__scopeId", "data-v-985e236a"]]), Vx = {
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
    const t = G(!1), n = te(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), s = te(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: t.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), o = te(() => {
      if (!e.tags) return [];
      if (typeof e.tags == "string")
        try {
          const a = JSON.parse(e.tags);
          return Array.isArray(a) ? a : [];
        } catch {
          return [];
        }
      return Array.isArray(e.tags) ? e.tags : [];
    }), r = te(() => {
      if (!e.image) return "";
      if (typeof e.image == "string" && e.image.startsWith("{"))
        try {
          const a = JSON.parse(e.image);
          return a.mediaUrl || a.url || "";
        } catch {
          return e.image;
        }
      return e.image;
    }), i = te(() => {
      var c, u;
      if (e.publishedAt && e.publishedAt.trim() && !e.publishedAt.match(/^\d+$/) && // Not just a timestamp
      !e.publishedAt.includes("T") && // Not ISO date format
      !e.publishedAt.match(/^\d{4}-\d{2}-\d{2}/) && // Not YYYY-MM-DD format
      e.publishedAt.length < 20)
        return e.publishedAt;
      const a = e.rawPublishedAt || e.publishedAt;
      if (!a) return "";
      try {
        let d;
        const p = String(a).trim();
        if (/^\d+$/.test(p)) {
          const g = parseInt(p);
          d = new Date(g > 1e12 ? g : g * 1e3);
        } else if (typeof a == "string")
          d = new Date(a);
        else
          return "";
        if (isNaN(d.getTime()) || d.getFullYear() < 1900 || d.getFullYear() > 2100)
          return console.warn("Invalid or unreasonable date:", a, "parsed as:", d), "";
        const m = typeof window < "u" && typeof window.Shopline < "u" && ((u = (c = window.Shopline) == null ? void 0 : c.locale) == null ? void 0 : u.current) || "en";
        return new Intl.DateTimeFormat(m, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(d);
      } catch (d) {
        return console.warn("Error formatting date:", d, a), "";
      }
    }), l = te(() => {
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
}, Ax = ["href"], Ix = ["src", "alt"], Mx = { class: "relative p-6 flex-1 flex flex-col z-10" }, Px = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, Rx = { class: "text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight" }, Lx = ["href"], Fx = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, Bx = { key: 0 }, jx = {
  key: 1,
  class: "text-gray-300"
}, Hx = ["datetime"], Ux = { class: "flex-1 mb-6" }, qx = {
  key: 0,
  class: "text-gray-600 leading-relaxed line-clamp-3"
}, zx = ["innerHTML"], Wx = { class: "mt-auto" }, Kx = ["href"];
function Gx(e, t, n, s, o, r) {
  return E(), x("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: Ge(s.cardStyles),
    onMouseenter: t[0] || (t[0] = (i) => s.isHovered = !0),
    onMouseleave: t[1] || (t[1] = (i) => s.isHovered = !1)
  }, [
    t[4] || (t[4] = f("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (E(), x("div", {
      key: 0,
      class: xe([s.imageAspectClass, "relative overflow-hidden"])
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
        }, null, 8, Ix),
        t[2] || (t[2] = f("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, Ax)
    ], 2)) : j("", !0),
    f("div", Mx, [
      n.showTags && s.processedTags.length > 0 ? (E(), x("div", Px, [
        (E(!0), x(re, null, me(s.processedTags.slice(0, 3), (i) => (E(), x("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, q(i), 1))), 128))
      ])) : j("", !0),
      f("h3", Rx, [
        f("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, q(n.title), 9, Lx)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (E(), x("div", Fx, [
        n.showAuthor && n.author ? (E(), x("span", Bx, q(n.author), 1)) : j("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (E(), x("span", jx, "•")) : j("", !0),
        n.showDate && s.formattedDate ? (E(), x("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, q(s.formattedDate), 9, Hx)) : j("", !0)
      ])) : j("", !0),
      f("div", Ux, [
        n.excerpt ? (E(), x("p", qx, q(n.excerpt), 1)) : n.content ? (E(), x("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-3",
          innerHTML: s.truncatedContent
        }, null, 8, zx)) : j("", !0)
      ]),
      f("div", Wx, [
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
        ]), 8, Kx)
      ])
    ])
  ], 36);
}
const Yx = /* @__PURE__ */ Je(Vx, [["render", Gx], ["__scopeId", "data-v-4d9d9306"]]);
({
  ...ss,
  props: {
    ...ss.props
  }
});
const Jx = /* @__PURE__ */ Ue(If), Xx = /* @__PURE__ */ Ue(k1), Qx = /* @__PURE__ */ Ue(Y1), Zx = /* @__PURE__ */ Ue(Vf), eN = /* @__PURE__ */ Ue(Mf), tN = /* @__PURE__ */ Ue(Hb), nN = /* @__PURE__ */ Ue(Pf), sN = /* @__PURE__ */ Ue(V2), oN = /* @__PURE__ */ Ue(CE), rN = /* @__PURE__ */ Ue(iw), iN = /* @__PURE__ */ Ue(Af), lN = /* @__PURE__ */ Ue(Aw), aN = /* @__PURE__ */ Ue(Pw), cN = /* @__PURE__ */ Ue(Fw), uN = /* @__PURE__ */ Ue(qw), dN = /* @__PURE__ */ Ue(Kw), fN = /* @__PURE__ */ Ue(Dx);
customElements.define("cart-drawer", Jx);
customElements.define("mobile-menu", Xx);
customElements.define("product-variant-picker", Qx);
customElements.define("quantity-selector", Zx);
customElements.define("main-header", eN);
customElements.define("site-footer", tN);
customElements.define("collection-filters", nN);
customElements.define("collection-grid", sN);
customElements.define("product-gallery", oN);
customElements.define("product-info", rN);
customElements.define("cart-item", iN);
customElements.define("cart-summary", lN);
customElements.define("slideshow-banner", aN);
customElements.define("testimonials-carousel", cN);
customElements.define("video-player", uN);
customElements.define("password-modal", dN);
customElements.define("search-overlay", fN);
function uo(e = document) {
  e.querySelectorAll(".main-header-mount").forEach((c) => {
    if (c._vueApp) return;
    const u = Ft(Mf, {
      shopName: c.dataset.shopName || "Orion Store",
      logoUrl: c.dataset.logoUrl || "",
      navigationLinks: JSON.parse(c.dataset.navigationLinks || "[]")
    });
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll(".cart-drawer-mount").forEach((c) => {
    if (c._vueApp) return;
    const u = Ft(If);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("product-card").forEach((c) => {
    if (c._vueApp) return;
    const u = {
      productId: c.getAttribute("product-id"),
      variantId: c.getAttribute("variant-id"),
      title: c.getAttribute("title"),
      handle: c.getAttribute("handle"),
      url: c.getAttribute("url"),
      vendor: c.getAttribute("vendor"),
      price: c.getAttribute("price"),
      compareAtPrice: c.getAttribute("compare-at-price"),
      image: c.getAttribute("image"),
      available: c.getAttribute(":available") === "true"
    }, d = Ft(d_, u);
    c._vueApp = d, d.mount(c);
  }), e.querySelectorAll("collection-sort").forEach((c) => {
    if (c._vueApp) return;
    const u = {
      collectionHandle: c.getAttribute("collection-handle"),
      currentSort: c.getAttribute("current-sort") || "manual"
    }, d = Ft(I2, u);
    c._vueApp = d, d.mount(c);
  }), e.querySelectorAll("orion-button").forEach((c) => {
    if (c._vueApp) return;
    const u = {
      variant: c.getAttribute("variant") || "primary",
      size: c.getAttribute("size") || "medium",
      fullWidth: c.hasAttribute("full-width"),
      href: c.getAttribute("href"),
      type: c.getAttribute("type") || "button",
      disabled: c.hasAttribute("disabled"),
      loading: c.hasAttribute("loading"),
      rounded: c.getAttribute("rounded") || "default"
    }, d = Ft(
      {
        components: { Button: ss },
        template: `<Button v-bind="$attrs">${c.innerHTML}</Button>`
      },
      u
    );
    c._vueApp = d, d.mount(c);
  }), e.querySelectorAll(
    "collection-filter-drawer"
  ).forEach((c) => {
    if (c._vueApp) return;
    const u = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]")
    }, d = Ft(oE, u);
    c._vueApp = d, d.mount(c);
  }), e.querySelectorAll(
    "collection-filter-sidebar"
  ).forEach((c) => {
    if (c._vueApp) return;
    const u = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]"),
      showSort: c.getAttribute(":show-sort") === "true"
    }, d = Ft(Pf, u);
    c._vueApp = d, d.mount(c);
  }), e.querySelectorAll("article-card").forEach((c) => {
    if (c._vueApp) return;
    const u = {
      title: c.getAttribute("title"),
      url: c.getAttribute("url"),
      excerpt: c.getAttribute("excerpt"),
      content: c.getAttribute("content"),
      author: c.getAttribute("author"),
      publishedAt: c.getAttribute("published-at"),
      rawPublishedAt: c.getAttribute("raw-published-at"),
      image: c.getAttribute("image"),
      imageAlt: c.getAttribute("image-alt"),
      tags: JSON.parse(c.getAttribute("tags") || "[]"),
      imageRatio: c.getAttribute("image-ratio") || "landscape",
      showImage: c.getAttribute("show-image") === "true",
      showAuthor: c.getAttribute("show-author") === "true",
      showDate: c.getAttribute("show-date") === "true",
      showTags: c.getAttribute("show-tags") === "true"
    }, d = Ft(Yx, u);
    c._vueApp = d, d.mount(c);
  }), e === document && document.querySelectorAll(".site-header").forEach((u) => {
    if (u.dataset.sticky === "true" && !u._stickyInitialized) {
      let v = function() {
        const w = window.scrollY, y = u.dataset.hideOnScroll === "true", A = u.dataset.transparent === "true", S = u.dataset.stickyBackground || "#ffffff", O = document.body.classList.contains("template-index");
        A && O && (w > 50 ? (u.style.position = "", N()) : (u.style.position = "absolute", u.style.width = "100%", g.style.height = "0px")), A && O ? w > 50 ? (u.classList.remove("transparent-header"), u.classList.add("scrolled"), u.style.backgroundColor = S, u.style.borderBottomColor = "") : (u.classList.add("transparent-header"), u.classList.remove("scrolled"), u.style.backgroundColor = "transparent", u.style.borderBottomColor = "transparent") : w > 50 ? (u.classList.add("scrolled"), u.style.backgroundColor = S) : (u.classList.remove("scrolled"), u.style.backgroundColor = ""), y && (w > 300 && w > h ? (u.classList.add("hide-on-scroll"), u.classList.remove("show-on-scroll")) : (u.classList.remove("hide-on-scroll"), u.classList.add("show-on-scroll"))), h = w, I = !1;
      };
      var d = v;
      u._stickyInitialized = !0;
      const p = u.dataset.transparent === "true", m = document.body.classList.contains("template-index"), g = document.createElement("div");
      g.className = "sticky-spacer", u.parentNode.insertBefore(g, u.nextSibling), p && m ? (u.classList.add("transparent-header"), g.style.height = "0px") : g.style.height = u.offsetHeight + "px";
      let h = 0, I = !1, C = u.offsetHeight;
      const N = () => {
        C = u.offsetHeight, g.style.height = C + "px";
      };
      window.addEventListener("scroll", function() {
        I || (window.requestAnimationFrame(v), I = !0);
      }), window.addEventListener("resize", () => {
        N();
        const w = document.querySelector(
          '#MainContent > .shopline-section:first-child, #MainContent > div[id^="shopline-section-"]:first-child, main > .shopline-section:first-child'
        );
        if (w) {
          const y = u.offsetHeight;
          p && m ? (w.style.marginTop = `-${y}px`, w.style.paddingTop = `${y}px`) : w.querySelector(".hero-banner") ? (w.style.marginTop = `-${y}px`, w.style.paddingTop = `${y}px`) : (w.style.paddingTop = `${y}px`, w.style.marginTop = "0px");
        }
      }), p && m ? (u.classList.add("transparent-header"), u.classList.remove("bg-white"), u.style.backgroundColor = "transparent", u.style.borderBottomColor = "transparent", u.style.position = "absolute", u.style.width = "100%", g.style.height = "0px", setTimeout(() => {
        const w = document.querySelector(
          '#MainContent > .shopline-section:first-child, #MainContent > div[id^="shopline-section-"]:first-child, main > .shopline-section:first-child'
        );
        if (w) {
          const y = u.offsetHeight;
          w.style.marginTop = `-${y}px`, w.style.paddingTop = `${y}px`;
        }
      }, 100)) : setTimeout(() => {
        N();
        const w = document.querySelector(
          '#MainContent > .shopline-section:first-child, #MainContent > div[id^="shopline-section-"]:first-child, main > .shopline-section:first-child'
        );
        if (w) {
          const y = u.offsetHeight;
          w.querySelector(".hero-banner") ? (w.style.marginTop = `-${y}px`, w.style.paddingTop = `${y}px`) : (w.style.paddingTop = `${y}px`, w.style.marginTop = "0px");
        }
      }, 100), v();
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
      const n = await (await fetch(
        (((e = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : e.cart) || "/cart") + ".js"
      )).json();
      return this.state.items = n.items, this.state.totalPrice = n.total_price, this.state.itemCount = n.item_count, document.dispatchEvent(
        new CustomEvent("cart:updated", { detail: n })
      ), n;
    } catch (t) {
      console.error("Failed to fetch cart:", t);
    }
  },
  async addItem(e) {
    var t;
    try {
      let n;
      e instanceof FormData ? n = await fetch(
        ((t = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : t.cart_add) || "/cart/add",
        {
          method: "POST",
          body: e
        }
      ) : n = await fetch("/api/carts/ajax-cart/add.js", {
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
window.mountVueComponents = uo;
document.addEventListener("DOMContentLoaded", () => {
  uo();
});
var $c;
(($c = window.Shopline) != null && $c.designMode || window.location.href.includes("theme_preview_mode")) && (document.addEventListener("shopline:section:load", (e) => {
  const t = document.querySelector(
    `[data-section-id="${e.detail.sectionId}"]`
  ) || document;
  uo(t);
}), document.addEventListener("shopline:section:reorder", () => {
  uo();
}), document.addEventListener("shopline:block:select", (e) => {
  const t = document.querySelector(
    `[data-block-id="${e.detail.blockId}"]`
  );
  t && uo(t);
}));
