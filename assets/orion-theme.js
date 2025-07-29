var sl = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Je(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = sl.NODE_ENV !== "production" ? Object.freeze({}) : {}, bs = sl.NODE_ENV !== "production" ? Object.freeze([]) : [], De = () => {
}, Gs = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tr = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ol = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Uf = Object.prototype.hasOwnProperty, ye = (e, t) => Uf.call(e, t), Q = Array.isArray, Xn = (e) => Fs(e) === "[object Map]", us = (e) => Fs(e) === "[object Set]", ia = (e) => Fs(e) === "[object Date]", qf = (e) => Fs(e) === "[object RegExp]", oe = (e) => typeof e == "function", le = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Tr = (e) => (ge(e) || oe(e)) && oe(e.then) && oe(e.catch), Dc = Object.prototype.toString, Fs = (e) => Dc.call(e), rl = (e) => Fs(e).slice(8, -1), Dr = (e) => Fs(e) === "[object Object]", il = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vn = /* @__PURE__ */ Je(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ac = /* @__PURE__ */ Je(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, zf = /-(\w)/g, Ce = Ar(
  (e) => e.replace(zf, (t, n) => n ? n.toUpperCase() : "")
), Wf = /\B([A-Z])/g, ot = Ar(
  (e) => e.replace(Wf, "-$1").toLowerCase()
), rn = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), nn = Ar(
  (e) => e ? `on${rn(e)}` : ""
), mt = (e, t) => !Object.is(e, t), Tn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, rs = (e, t, n, s = !1) => {
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
function Kf(e, t) {
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
}, Gf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Yf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Jf = /* @__PURE__ */ Je(Yf), aa = 2;
function Xf(e, t = 0, n = e.length) {
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
        const f = a + 1;
        i.push(
          `${f}${" ".repeat(Math.max(3 - String(f).length, 0))}|  ${s[a]}`
        );
        const u = s[a].length, c = o[a] && o[a].length || 0;
        if (a === l) {
          const p = t - (r - (u + c)), m = Math.max(
            1,
            n > r ? u - p : n - t
          );
          i.push("   |  " + " ".repeat(p) + "^".repeat(m));
        } else if (a > l) {
          if (n > r) {
            const p = Math.max(Math.min(n - r, u), 1);
            i.push("   |  " + "^".repeat(p));
          }
          r += u + c;
        }
      }
      break;
    }
  return i.join(`
`);
}
function Ue(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? Vc(s) : Ue(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (le(e) || ge(e))
    return e;
}
const Qf = /;(?![^(]*\))/g, Zf = /:([^]+)/, ep = /\/\*[^]*?\*\//g;
function Vc(e) {
  const t = {};
  return e.replace(ep, "").split(Qf).forEach((n) => {
    if (n) {
      const s = n.split(Zf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function tp(e) {
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
function Ee(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ee(e[n]);
      s && (t += s + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function np(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !le(t) && (e.class = Ee(t)), n && (e.style = Ue(n)), e;
}
const sp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", op = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", rp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ip = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ic = /* @__PURE__ */ Je(sp), Mc = /* @__PURE__ */ Je(op), Pc = /* @__PURE__ */ Je(rp), lp = /* @__PURE__ */ Je(ip), Rc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ap = /* @__PURE__ */ Je(Rc), ca = /* @__PURE__ */ Je(
  Rc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ll(e) {
  return !!e || e === "";
}
const cp = /* @__PURE__ */ Je(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), up = /* @__PURE__ */ Je(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function dp(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const fp = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function pp(e, t) {
  return e.replace(
    fp,
    (n) => `\\${n}`
  );
}
function hp(e, t) {
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
  if (n = Q(e), s = Q(t), n || s)
    return n && s ? hp(e, t) : !1;
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
function Vr(e, t) {
  return e.findIndex((n) => Rn(n, t));
}
const Lc = (e) => !!(e && e.__v_isRef === !0), q = (e) => le(e) ? e : e == null ? "" : Q(e) || ge(e) && (e.toString === Dc || !oe(e.toString)) ? Lc(e) ? q(e.value) : JSON.stringify(e, Fc, 2) : String(e), Fc = (e, t) => Lc(t) ? Fc(e, t.value) : Xn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[si(s, r) + " =>"] = o, n),
    {}
  )
} : us(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => si(n))
} : Nt(t) ? si(t) : ge(t) && !Q(t) && !Dr(t) ? String(t) : t, si = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Bc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && sl.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var we = {};
function Mt(e, ...t) {
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
    } else we.NODE_ENV !== "production" && Mt("cannot run an inactive effect scope.");
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
function mp(e) {
  return new al(e);
}
function cl() {
  return nt;
}
function jc(e, t = !1) {
  nt ? nt.cleanups.push(e) : we.NODE_ENV !== "production" && !t && Mt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let xe;
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Uc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ua(this), qc(this);
    const t = xe, n = zt;
    xe = this, zt = !0;
    try {
      return this.fn();
    } finally {
      we.NODE_ENV !== "production" && xe !== this && Mt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), zc(this), xe = t, zt = n, this.flags &= -3;
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
let Hc = 0, to, no;
function Uc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = no, no = e;
    return;
  }
  e.next = to, to = e;
}
function ul() {
  Hc++;
}
function dl() {
  if (--Hc > 0)
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
function qc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), fl(s), gp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === po) || (e.globalVersion = po, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ei(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xe, s = zt;
  xe = e, zt = !0;
  try {
    qc(e);
    const o = e.fn(e._value);
    (t.version === 0 || mt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    xe = n, zt = s, zc(e), e.flags &= -3;
  }
}
function fl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), we.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      fl(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function gp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function vp(e, t) {
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
function yp(e) {
  e.effect.stop();
}
let zt = !0;
const Kc = [];
function Gt() {
  Kc.push(zt), zt = !1;
}
function Yt() {
  const e = Kc.pop();
  zt = e === void 0 ? !0 : e;
}
function ua(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = n;
    }
  }
}
let po = 0;
class bp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ir {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, we.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!xe || !zt || xe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      n = this.activeLink = new bp(xe, this), xe.deps ? (n.prevDep = xe.depsTail, xe.depsTail.nextDep = n, xe.depsTail = n) : xe.deps = xe.depsTail = n, Gc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = xe.depsTail, n.nextDep = void 0, xe.depsTail.nextDep = n, xe.depsTail = n, xe.deps === n && (xe.deps = s);
    }
    return we.NODE_ENV !== "production" && xe.onTrack && xe.onTrack(
      fe(
        {
          effect: xe
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
      if (we.NODE_ENV !== "production")
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
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), we.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const or = /* @__PURE__ */ new WeakMap(), Qn = Symbol(
  we.NODE_ENV !== "production" ? "Object iterate" : ""
), wi = Symbol(
  we.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ho = Symbol(
  we.NODE_ENV !== "production" ? "Array iterate" : ""
);
function We(e, t, n) {
  if (zt && xe) {
    let s = or.get(e);
    s || or.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ir()), o.map = s, o.key = n), we.NODE_ENV !== "production" ? o.track({
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
    a && (we.NODE_ENV !== "production" ? a.trigger({
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
    const a = Q(e), f = a && il(n);
    if (a && n === "length") {
      const u = Number(s);
      i.forEach((c, p) => {
        (p === "length" || p === ho || !Nt(p) && p >= u) && l(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(ho)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(Qn)), Xn(e) && l(i.get(wi)));
          break;
        case "delete":
          a || (l(i.get(Qn)), Xn(e) && l(i.get(wi)));
          break;
        case "set":
          Xn(e) && l(i.get(Qn));
          break;
      }
  }
  dl();
}
function _p(e, t) {
  const n = or.get(e);
  return n && n.get(t);
}
function ms(e) {
  const t = ce(e);
  return t === e ? t : (We(t, "iterate", ho), lt(e) ? t : t.map(et));
}
function Mr(e) {
  return We(e = ce(e), "iterate", ho), e;
}
const Ep = {
  __proto__: null,
  [Symbol.iterator]() {
    return ri(this, Symbol.iterator, et);
  },
  concat(...e) {
    return ms(this).concat(
      ...e.map((t) => Q(t) ? ms(t) : t)
    );
  },
  entries() {
    return ri(this, "entries", (e) => (e[1] = et(e[1]), e));
  },
  every(e, t) {
    return an(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return an(this, "filter", e, t, (n) => n.map(et), arguments);
  },
  find(e, t) {
    return an(this, "find", e, t, et, arguments);
  },
  findIndex(e, t) {
    return an(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return an(this, "findLast", e, t, et, arguments);
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
    return ri(this, "values", et);
  }
};
function ri(e, t, n) {
  const s = Mr(e), o = s[t]();
  return s !== e && !lt(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const wp = Array.prototype;
function an(e, t, n, s, o, r) {
  const i = Mr(e), l = i !== e && !lt(e), a = i[t];
  if (a !== wp[t]) {
    const c = a.apply(e, r);
    return l ? et(c) : c;
  }
  let f = n;
  i !== e && (l ? f = function(c, p) {
    return n.call(this, et(c), p, e);
  } : n.length > 2 && (f = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const u = a.call(i, f, s);
  return l && o ? o(u) : u;
}
function da(e, t, n, s) {
  const o = Mr(e);
  let r = n;
  return o !== e && (lt(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, et(l), a, e);
  }), o[t](r, ...s);
}
function ii(e, t, n) {
  const s = ce(e);
  We(s, "iterate", ho);
  const o = s[t](...n);
  return (o === -1 || o === !1) && ks(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : o;
}
function qs(e, t, n = []) {
  Gt(), ul();
  const s = ce(e)[t].apply(e, n);
  return dl(), Yt(), s;
}
const xp = /* @__PURE__ */ Je("__proto__,__v_isRef,__isVue"), Yc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
);
function Np(e) {
  Nt(e) || (e = String(e));
  const t = ce(this);
  return We(t, "has", e), t.hasOwnProperty(e);
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
    const i = Q(t);
    if (!o) {
      let a;
      if (i && (a = Ep[n]))
        return a;
      if (n === "hasOwnProperty")
        return Np;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Pe(t) ? t : s
    );
    return (Nt(n) ? Yc.has(n) : xp(n)) || (o || We(t, "get", n), r) ? l : Pe(l) ? i && il(n) ? l : l.value : ge(l) ? o ? Rr(l) : Ss(l) : l;
  }
}
class Xc extends Jc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Jt(r);
      if (!lt(s) && !Jt(s) && (r = ce(r), s = ce(s)), !Q(t) && Pe(r) && !Pe(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = Q(t) && il(n) ? Number(n) < t.length : ye(t, n), l = Reflect.set(
      t,
      n,
      s,
      Pe(t) ? t : o
    );
    return t === ce(o) && (i ? mt(s, r) && sn(t, "set", n, s, r) : sn(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ye(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && sn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Nt(n) || !Yc.has(n)) && We(t, "has", n), s;
  }
  ownKeys(t) {
    return We(
      t,
      "iterate",
      Q(t) ? "length" : Qn
    ), Reflect.ownKeys(t);
  }
}
class Qc extends Jc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return we.NODE_ENV !== "production" && Mt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return we.NODE_ENV !== "production" && Mt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Sp = /* @__PURE__ */ new Xc(), kp = /* @__PURE__ */ new Qc(), Cp = /* @__PURE__ */ new Xc(!0), Op = /* @__PURE__ */ new Qc(!0), xi = (e) => e, Io = (e) => Reflect.getPrototypeOf(e);
function $p(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ce(o), i = Xn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...s), u = n ? xi : t ? rr : et;
    return !t && We(
      r,
      "iterate",
      a ? wi : Qn
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = f.next();
        return p ? { value: c, done: p } : {
          value: l ? [u(c[0]), u(c[1])] : u(c),
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
    if (we.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Mt(
        `${rn(e)} operation ${n}failed: target is readonly.`,
        ce(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Tp(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      e || (mt(o, l) && We(i, "get", o), We(i, "get", l));
      const { has: a } = Io(i), f = t ? xi : e ? rr : et;
      if (a.call(i, o))
        return f(r.get(o));
      if (a.call(i, l))
        return f(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && We(ce(o), "iterate", Qn), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      return e || (mt(o, l) && We(i, "has", o), We(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = ce(l), f = t ? xi : e ? rr : et;
      return !e && We(a, "iterate", Qn), l.forEach((u, c) => o.call(r, f(u), f(c), i));
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
        let f = l.call(i, o);
        f ? we.NODE_ENV !== "production" && fa(i, l, o) : (o = ce(o), f = l.call(i, o));
        const u = a.call(i, o);
        return i.set(o, r), f ? mt(r, u) && sn(i, "set", o, r, u) : sn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ce(this), { has: i, get: l } = Io(r);
        let a = i.call(r, o);
        a ? we.NODE_ENV !== "production" && fa(r, i, o) : (o = ce(o), a = i.call(r, o));
        const f = l ? l.call(r, o) : void 0, u = r.delete(o);
        return a && sn(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = ce(this), r = o.size !== 0, i = we.NODE_ENV !== "production" ? Xn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
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
    n[o] = $p(o, e, t);
  }), n;
}
function Pr(e, t) {
  const n = Tp(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ye(n, o) && o in s ? n : s,
    o,
    r
  );
}
const Dp = {
  get: /* @__PURE__ */ Pr(!1, !1)
}, Ap = {
  get: /* @__PURE__ */ Pr(!1, !0)
}, Vp = {
  get: /* @__PURE__ */ Pr(!0, !1)
}, Ip = {
  get: /* @__PURE__ */ Pr(!0, !0)
};
function fa(e, t, n) {
  const s = ce(n);
  if (s !== n && t.call(e, s)) {
    const o = rl(e);
    Mt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Zc = /* @__PURE__ */ new WeakMap(), eu = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap();
function Mp(e) {
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
function Pp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mp(rl(e));
}
function Ss(e) {
  return Jt(e) ? e : Lr(
    e,
    !1,
    Sp,
    Dp,
    Zc
  );
}
function su(e) {
  return Lr(
    e,
    !1,
    Cp,
    Ap,
    eu
  );
}
function Rr(e) {
  return Lr(
    e,
    !0,
    kp,
    Vp,
    tu
  );
}
function Ht(e) {
  return Lr(
    e,
    !0,
    Op,
    Ip,
    nu
  );
}
function Lr(e, t, n, s, o) {
  if (!ge(e))
    return we.NODE_ENV !== "production" && Mt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Pp(e);
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
function ou(e) {
  return !ye(e, "__v_skip") && Object.isExtensible(e) && rs(e, "__v_skip", !0), e;
}
const et = (e) => ge(e) ? Ss(e) : e, rr = (e) => ge(e) ? Rr(e) : e;
function Pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function K(e) {
  return iu(e, !1);
}
function ru(e) {
  return iu(e, !0);
}
function iu(e, t) {
  return Pe(e) ? e : new Rp(e, t);
}
class Rp {
  constructor(t, n) {
    this.dep = new Ir(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : et(t), this.__v_isShallow = n;
  }
  get value() {
    return we.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || lt(t) || Jt(t);
    t = s ? t : ce(t), mt(t, n) && (this._rawValue = t, this._value = s ? t : et(t), we.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Lp(e) {
  e.dep && (we.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function ko(e) {
  return Pe(e) ? e.value : e;
}
function Fp(e) {
  return oe(e) ? e() : ko(e);
}
const Bp = {
  get: (e, t, n) => t === "__v_raw" ? e : ko(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Pe(o) && !Pe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function pl(e) {
  return mn(e) ? e : new Proxy(e, Bp);
}
class jp {
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
  return new jp(e);
}
function Hp(e) {
  we.NODE_ENV !== "production" && !ks(e) && Mt("toRefs() expects a reactive object but received a plain one.");
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = au(e, n);
  return t;
}
class Up {
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
    return _p(ce(this._object), this._key);
  }
}
class qp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function zp(e, t, n) {
  return Pe(e) ? e : oe(e) ? new qp(e) : ge(e) && arguments.length > 1 ? au(e, t, n) : K(e);
}
function au(e, t, n) {
  const s = e[t];
  return Pe(s) ? s : new Up(e, t, n);
}
class Wp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ir(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = po - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
      return Uc(this, !0), !0;
  }
  get value() {
    const t = we.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Wc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : we.NODE_ENV !== "production" && Mt("Write operation failed: computed value is readonly");
  }
}
function Kp(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const r = new Wp(s, o, n);
  return we.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const Gp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Yp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Po = {}, ir = /* @__PURE__ */ new WeakMap();
let Sn;
function Jp() {
  return Sn;
}
function cu(e, t = !1, n = Sn) {
  if (n) {
    let s = ir.get(n);
    s || ir.set(n, s = []), s.push(e);
  } else we.NODE_ENV !== "production" && !t && Mt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Xp(e, t, n = pe) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, f = (_) => {
    (n.onWarn || Mt)(
      "Invalid watch source: ",
      _,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (_) => o ? _ : lt(_) || o === !1 || o === 0 ? pn(_, 1) : pn(_);
  let c, p, m, g, h = !1, I = !1;
  if (Pe(e) ? (p = () => e.value, h = lt(e)) : mn(e) ? (p = () => u(e), h = !0) : Q(e) ? (I = !0, h = e.some((_) => mn(_) || lt(_)), p = () => e.map((_) => {
    if (Pe(_))
      return _.value;
    if (mn(_))
      return u(_);
    if (oe(_))
      return a ? a(_, 2) : _();
    we.NODE_ENV !== "production" && f(_);
  })) : oe(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      Gt();
      try {
        m();
      } finally {
        Yt();
      }
    }
    const _ = Sn;
    Sn = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Sn = _;
    }
  } : (p = De, we.NODE_ENV !== "production" && f(e)), t && o) {
    const _ = p, M = o === !0 ? 1 / 0 : o;
    p = () => pn(_(), M);
  }
  const k = cl(), N = () => {
    c.stop(), k && k.active && ol(k.effects, c);
  };
  if (r && t) {
    const _ = t;
    t = (...M) => {
      _(...M), N();
    };
  }
  let v = I ? new Array(e.length).fill(Po) : Po;
  const O = (_) => {
    if (!(!(c.flags & 1) || !c.dirty && !_))
      if (t) {
        const M = c.run();
        if (o || h || (I ? M.some((S, x) => mt(S, v[x])) : mt(M, v))) {
          m && m();
          const S = Sn;
          Sn = c;
          try {
            const x = [
              M,
              // pass undefined as the old value when it's changed for the first time
              v === Po ? void 0 : I && v[0] === Po ? [] : v,
              g
            ];
            v = M, a ? a(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            Sn = S;
          }
        }
      } else
        c.run();
  };
  return l && l(O), c = new fo(p), c.scheduler = i ? () => i(O, !1) : O, g = (_) => cu(_, !1, c), m = c.onStop = () => {
    const _ = ir.get(c);
    if (_) {
      if (a)
        a(_, 4);
      else
        for (const M of _) M();
      ir.delete(c);
    }
  }, we.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? O(!0) : v = c.run() : i ? i(O.bind(null, !0), !0) : c.run(), N.pause = c.pause.bind(c), N.resume = c.resume.bind(c), N.stop = N, N;
}
function pn(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Pe(e))
    pn(e.value, t, n);
  else if (Q(e))
    for (let s = 0; s < e.length; s++)
      pn(e[s], t, n);
  else if (us(e) || Xn(e))
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
var C = {};
const Zn = [];
function _s(e) {
  Zn.push(e);
}
function Es() {
  Zn.pop();
}
let li = !1;
function B(e, ...t) {
  if (li) return;
  li = !0, Gt();
  const n = Zn.length ? Zn[Zn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Qp();
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
`, ...Zp(o)), console.warn(...r);
  }
  Yt(), li = !1;
}
function Qp() {
  let e = Zn[Zn.length - 1];
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
function Zp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...eh(n));
  }), t;
}
function eh({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Gr(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...th(e.props), r] : [o + r];
}
function th(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...uu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function uu(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Pe(t) ? (t = uu(e, ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ce(t), n ? t : [`${e}=`, t]);
}
function hl(e, t) {
  C.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? B(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && B(`${t} is NaN - the duration expression might be incorrect.`));
}
const nh = {
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
    Hn(o, t, n);
  }
}
function Pt(e, t, n, s) {
  if (oe(e)) {
    const o = ds(e, t, n, s);
    return o && Tr(o) && o.catch((r) => {
      Hn(r, t, n);
    }), o;
  }
  if (Q(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Pt(e[r], t, n, s));
    return o;
  } else C.NODE_ENV !== "production" && B(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Hn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = C.NODE_ENV !== "production" ? Fr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Gt(), ds(r, null, 10, [
        e,
        a,
        f
      ]), Yt();
      return;
    }
  }
  sh(e, n, o, s, i);
}
function sh(e, t, n, s = !0, o = !1) {
  if (C.NODE_ENV !== "production") {
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
const du = /* @__PURE__ */ Promise.resolve();
let lr = null;
const oh = 100;
function Ln(e) {
  const t = lr || du;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rh(e) {
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
    !(e.flags & 2) && t >= mo(n) ? gt.push(e) : gt.splice(rh(t), 0, e), e.flags |= 1, fu();
  }
}
function fu() {
  lr || (lr = du.then(pu));
}
function Cs(e) {
  Q(e) ? ws.push(...e) : kn && e.id === -1 ? kn.splice(ys + 1, 0, e) : e.flags & 1 || (ws.push(e), e.flags |= 1), fu();
}
function pa(e, t, n = Zt + 1) {
  for (C.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < gt.length; n++) {
    const s = gt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || C.NODE_ENV !== "production" && ml(t, s))
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
    for (kn = t, C.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ys = 0; ys < kn.length; ys++) {
      const n = kn[ys];
      C.NODE_ENV !== "production" && ml(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kn = null, ys = 0;
  }
}
const mo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pu(e) {
  C.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = C.NODE_ENV !== "production" ? (n) => ml(e, n) : De;
  try {
    for (Zt = 0; Zt < gt.length; Zt++) {
      const n = gt[Zt];
      if (n && !(n.flags & 8)) {
        if (C.NODE_ENV !== "production" && t(n))
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
    Zt = -1, gt.length = 0, ar(e), lr = null, (gt.length || ws.length) && pu(e);
  }
}
function ml(e, t) {
  const n = e.get(t) || 0;
  if (n > oh) {
    const s = t.i, o = s && Ts(s.type);
    return Hn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ut = !1;
const Wo = /* @__PURE__ */ new Map();
C.NODE_ENV !== "production" && (So().__VUE_HMR_RUNTIME__ = {
  createRecord: ai(hu),
  rerender: ai(ah),
  reload: ai(ch)
});
const is = /* @__PURE__ */ new Map();
function ih(e) {
  const t = e.type.__hmrId;
  let n = is.get(t);
  n || (hu(t, e.type), n = is.get(t)), n.instances.add(e);
}
function lh(e) {
  is.get(e.type.__hmrId).instances.delete(e);
}
function hu(e, t) {
  return is.has(e) ? !1 : (is.set(e, {
    initialDef: cr(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function cr(e) {
  return wd(e) ? e.__vccOpts : e;
}
function ah(e, t) {
  const n = is.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, cr(s.type).render = t), s.renderCache = [], Ut = !0, s.update(), Ut = !1;
  }));
}
function ch(e, t) {
  const n = is.get(e);
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
function uh(e, t) {
  Co("app:init", e, t, {
    Fragment: re,
    Text: on,
    Comment: Ae,
    Static: Mn
  });
}
function dh(e) {
  Co("app:unmount", e);
}
const Si = /* @__PURE__ */ vl(
  "component:added"
  /* COMPONENT_ADDED */
), mu = /* @__PURE__ */ vl(
  "component:updated"
  /* COMPONENT_UPDATED */
), fh = /* @__PURE__ */ vl(
  "component:removed"
  /* COMPONENT_REMOVED */
), ph = (e) => {
  Bt && typeof Bt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Bt.cleanupBuffer(e) && fh(e);
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
const hh = /* @__PURE__ */ gu(
  "perf:start"
  /* PERFORMANCE_START */
), mh = /* @__PURE__ */ gu(
  "perf:end"
  /* PERFORMANCE_END */
);
function gu(e) {
  return (t, n, s) => {
    Co(e, t.appContext.app, t.uid, t, n, s);
  };
}
function gh(e, t, n) {
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
function vh(e) {
  jr = e;
}
function yh() {
  jr = null;
}
const bh = (e) => Me;
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
    return C.NODE_ENV !== "production" && mu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vu(e) {
  Ac(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function $e(e, t) {
  if (Be === null)
    return C.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
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
    a && (Gt(), Pt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Yt());
  }
}
const yu = Symbol("_vte"), bu = (e) => e.__isTeleport, es = (e) => e && (e.disabled || e.disabled === ""), ma = (e) => e && (e.defer || e.defer === ""), ga = (e) => typeof SVGElement < "u" && e instanceof SVGElement, va = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ki = (e, t) => {
  const n = e && e.to;
  if (le(n))
    if (t) {
      const s = t(n);
      return C.NODE_ENV !== "production" && !s && !es(e) && B(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return C.NODE_ENV !== "production" && B(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return C.NODE_ENV !== "production" && !n && !es(e) && B(`Invalid Teleport target: ${n}`), n;
}, _u = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, l, a, f) {
    const {
      mc: u,
      pc: c,
      pbc: p,
      o: { insert: m, querySelector: g, createText: h, createComment: I }
    } = f, k = es(t.props);
    let { shapeFlag: N, children: v, dynamicChildren: O } = t;
    if (C.NODE_ENV !== "production" && Ut && (a = !1, O = null), e == null) {
      const _ = t.el = C.NODE_ENV !== "production" ? I("teleport start") : h(""), M = t.anchor = C.NODE_ENV !== "production" ? I("teleport end") : h("");
      m(_, n, s), m(M, n, s);
      const S = (y, D) => {
        N & 16 && (o && o.isCE && (o.ce._teleportTarget = y), u(
          v,
          y,
          D,
          o,
          r,
          i,
          l,
          a
        ));
      }, x = () => {
        const y = t.target = ki(t.props, g), D = Eu(y, t, h, m);
        y ? (i !== "svg" && ga(y) ? i = "svg" : i !== "mathml" && va(y) && (i = "mathml"), k || (S(y, D), Ko(t, !1))) : C.NODE_ENV !== "production" && !k && B(
          "Invalid Teleport target on mount:",
          y,
          `(${typeof y})`
        );
      };
      k && (S(n, M), Ko(t, !0)), ma(t.props) ? (t.el.__isMounted = !1, ze(() => {
        x(), delete t.el.__isMounted;
      }, r)) : x();
    } else {
      if (ma(t.props) && e.el.__isMounted === !1) {
        ze(() => {
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
            f
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const _ = t.anchor = e.anchor, M = t.target = e.target, S = t.targetAnchor = e.targetAnchor, x = es(e.props), y = x ? n : M, D = x ? _ : S;
      if (i === "svg" || ga(M) ? i = "svg" : (i === "mathml" || va(M)) && (i = "mathml"), O ? (p(
        e.dynamicChildren,
        O,
        y,
        o,
        r,
        i,
        l
      ), ro(e, t, C.NODE_ENV === "production")) : a || c(
        e,
        t,
        y,
        D,
        o,
        r,
        i,
        l,
        !1
      ), k)
        x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ro(
          t,
          n,
          _,
          f,
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
          f,
          0
        ) : C.NODE_ENV !== "production" && B(
          "Invalid Teleport target on update:",
          M,
          `(${typeof M})`
        );
      } else x && Ro(
        t,
        M,
        S,
        f,
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
      targetStart: f,
      targetAnchor: u,
      target: c,
      props: p
    } = e;
    if (c && (o(f), o(u)), r && o(a), i & 16) {
      const m = r || !es(p);
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
  hydrate: _h
};
function Ro(e, t, n, { o: { insert: s }, m: o }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: f, props: u } = e, c = r === 2;
  if (c && s(i, t, n), (!c || es(u)) && a & 16)
    for (let p = 0; p < f.length; p++)
      o(
        f[p],
        t,
        n,
        2
      );
  c && s(l, t, n);
}
function _h(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: f, createText: u }
}, c) {
  const p = t.target = ki(
    t.props,
    a
  );
  if (p) {
    const m = es(t.props), g = p._lpa || p.firstChild;
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
        t.targetAnchor || Eu(p, t, u, f), c(
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
}, wu = (e) => {
  const t = e.subTree;
  return t.component ? wu(t.component) : t;
}, Eh = {
  name: "BaseTransition",
  props: bl,
  setup(e, { slots: t }) {
    const n = dt(), s = yl();
    return () => {
      const o = t.default && Hr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = xu(o), i = ce(e), { mode: l } = i;
      if (C.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && B(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ci(r);
      const a = ya(r);
      if (!a)
        return ci(r);
      let f = Os(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => f = c
      );
      a.type !== Ae && yn(a, f);
      let u = n.subTree && ya(n.subTree);
      if (u && u.type !== Ae && !jt(a, u) && wu(n).type !== Ae) {
        let c = Os(
          u,
          i,
          s,
          n
        );
        if (yn(u, c), l === "out-in" && a.type !== Ae)
          return s.isLeaving = !0, c.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, u = void 0;
          }, ci(r);
        l === "in-out" && a.type !== Ae ? c.delayLeave = (p, m, g) => {
          const h = Su(
            s,
            u
          );
          h[String(u.key)] = u, p[Cn] = () => {
            m(), p[Cn] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            g(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function xu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== Ae) {
        if (C.NODE_ENV !== "production" && n) {
          B(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, C.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Nu = Eh;
function Su(e, t) {
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
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: c,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: g,
    onLeaveCancelled: h,
    onBeforeAppear: I,
    onAppear: k,
    onAfterAppear: N,
    onAppearCancelled: v
  } = t, O = String(e.key), _ = Su(n, e), M = (y, D) => {
    y && Pt(
      y,
      s,
      9,
      D
    );
  }, S = (y, D) => {
    const R = D[1];
    M(y, D), Q(y) ? y.every((P) => P.length <= 1) && R() : y.length <= 1 && R();
  }, x = {
    mode: i,
    persisted: l,
    beforeEnter(y) {
      let D = a;
      if (!n.isMounted)
        if (r)
          D = I || a;
        else
          return;
      y[Cn] && y[Cn](
        !0
        /* cancelled */
      );
      const R = _[O];
      R && jt(e, R) && R.el[Cn] && R.el[Cn](), M(D, [y]);
    },
    enter(y) {
      let D = f, R = u, P = c;
      if (!n.isMounted)
        if (r)
          D = k || f, R = N || u, P = v || c;
        else
          return;
      let $ = !1;
      const T = y[Lo] = (A) => {
        $ || ($ = !0, A ? M(P, [y]) : M(R, [y]), x.delayedLeave && x.delayedLeave(), y[Lo] = void 0);
      };
      D ? S(D, [y, T]) : T();
    },
    leave(y, D) {
      const R = String(e.key);
      if (y[Lo] && y[Lo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      M(p, [y]);
      let P = !1;
      const $ = y[Cn] = (T) => {
        P || (P = !0, D(), T ? M(h, [y]) : M(g, [y]), y[Cn] = void 0, _[R] === e && delete _[R]);
      };
      _[R] = e, m ? S(m, [y, $]) : $();
    },
    clone(y) {
      const D = Os(
        y,
        t,
        n,
        s,
        o
      );
      return o && o(D), D;
    }
  };
  return x;
}
function ci(e) {
  if (Bs(e))
    return e = Rt(e), e.children = null, e;
}
function ya(e) {
  if (!Bs(e))
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
    i.type === re ? (i.patchFlag & 128 && o++, s = s.concat(
      Hr(i.children, t, l)
    )) : (t || i.type !== Ae) && s.push(l != null ? Rt(i, { key: l }) : i);
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
function wh() {
  const e = dt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (C.NODE_ENV !== "production" && B(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function El(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ku = /* @__PURE__ */ new WeakSet();
function xh(e) {
  const t = dt(), n = ru(null);
  if (t) {
    const o = t.refs === pe ? t.refs = {} : t.refs;
    let r;
    C.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? B(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else C.NODE_ENV !== "production" && B(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = C.NODE_ENV !== "production" ? Rr(n) : n;
  return C.NODE_ENV !== "production" && ku.add(s), s;
}
function xs(e, t, n, s, o = !1) {
  if (Q(e)) {
    e.forEach(
      (g, h) => xs(
        g,
        t && (Q(t) ? t[h] : t),
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
  if (C.NODE_ENV !== "production" && !l) {
    B(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = l.refs === pe ? l.refs = {} : l.refs, c = l.setupState, p = ce(c), m = c === pe ? () => !1 : (g) => C.NODE_ENV !== "production" && (ye(p, g) && !Pe(p[g]) && B(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), ku.has(p[g])) ? !1 : ye(p, g);
  if (f != null && f !== a && (le(f) ? (u[f] = null, m(f) && (c[f] = null)) : Pe(f) && (f.value = null)), oe(a))
    ds(a, l, 12, [i, u]);
  else {
    const g = le(a), h = Pe(a);
    if (g || h) {
      const I = () => {
        if (e.f) {
          const k = g ? m(a) ? c[a] : u[a] : a.value;
          o ? Q(k) && ol(k, r) : Q(k) ? k.includes(r) || k.push(r) : g ? (u[a] = [r], m(a) && (c[a] = u[a])) : (a.value = [r], e.k && (u[e.k] = a.value));
        } else g ? (u[a] = i, m(a) && (c[a] = i)) : h ? (a.value = i, e.k && (u[e.k] = i)) : C.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (I.id = -1, ze(I, n)) : I();
    } else C.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ba = !1;
const Un = () => {
  ba || (console.error("Hydration completed but contains mismatches."), ba = !0);
}, Nh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Sh = (e) => e.namespaceURI.includes("MathML"), Fo = (e) => {
  if (e.nodeType === 1) {
    if (Nh(e)) return "svg";
    if (Sh(e)) return "mathml";
  }
}, Gn = (e) => e.nodeType === 8;
function kh(e) {
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
      createComment: f
    }
  } = e, u = (v, O) => {
    if (!O.hasChildNodes()) {
      C.NODE_ENV !== "production" && B(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, v, O), ar(), O._vnode = v;
      return;
    }
    c(O.firstChild, v, null, null, null), ar(), O._vnode = v;
  }, c = (v, O, _, M, S, x = !1) => {
    x = x || !!O.dynamicChildren;
    const y = Gn(v) && v.data === "[", D = () => h(
      v,
      O,
      _,
      M,
      S,
      y
    ), { type: R, ref: P, shapeFlag: $, patchFlag: T } = O;
    let A = v.nodeType;
    O.el = v, C.NODE_ENV !== "production" && (rs(v, "__vnode", O, !0), rs(v, "__vueParentComponent", _, !0)), T === -2 && (x = !1, O.dynamicChildren = null);
    let L = null;
    switch (R) {
      case on:
        A !== 3 ? O.children === "" ? (a(O.el = o(""), i(v), v), L = v) : L = D() : (v.data !== O.children && (C.NODE_ENV !== "production" && B(
          "Hydration text mismatch in",
          v.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            v.data
          )}
  - expected on client: ${JSON.stringify(O.children)}`
        ), Un(), v.data = O.children), L = r(v));
        break;
      case Ae:
        N(v) ? (L = r(v), k(
          O.el = v.content.firstChild,
          v,
          _
        )) : A !== 8 || y ? L = D() : L = r(v);
        break;
      case Mn:
        if (y && (v = r(v), A = v.nodeType), A === 1 || A === 3) {
          L = v;
          const G = !O.children.length;
          for (let ee = 0; ee < O.staticCount; ee++)
            G && (O.children += L.nodeType === 1 ? L.outerHTML : L.data), ee === O.staticCount - 1 && (O.anchor = L), L = r(L);
          return y ? r(L) : L;
        } else
          D();
        break;
      case re:
        y ? L = g(
          v,
          O,
          _,
          M,
          S,
          x
        ) : L = D();
        break;
      default:
        if ($ & 1)
          (A !== 1 || O.type.toLowerCase() !== v.tagName.toLowerCase()) && !N(v) ? L = D() : L = p(
            v,
            O,
            _,
            M,
            S,
            x
          );
        else if ($ & 6) {
          O.slotScopeIds = S;
          const G = i(v);
          if (y ? L = I(v) : Gn(v) && v.data === "teleport start" ? L = I(v, v.data, "teleport end") : L = r(v), t(
            O,
            G,
            null,
            _,
            M,
            Fo(G),
            x
          ), In(O) && !O.type.__asyncResolved) {
            let ee;
            y ? (ee = ue(re), ee.anchor = L ? L.previousSibling : G.lastChild) : ee = v.nodeType === 3 ? je("") : ue("div"), ee.el = v, O.component.subTree = ee;
          }
        } else $ & 64 ? A !== 8 ? L = D() : L = O.type.hydrate(
          v,
          O,
          _,
          M,
          S,
          x,
          e,
          m
        ) : $ & 128 ? L = O.type.hydrate(
          v,
          O,
          _,
          M,
          Fo(i(v)),
          S,
          x,
          e,
          c
        ) : C.NODE_ENV !== "production" && B("Invalid HostVNode type:", R, `(${typeof R})`);
    }
    return P != null && xs(P, null, M, O), L;
  }, p = (v, O, _, M, S, x) => {
    x = x || !!O.dynamicChildren;
    const { type: y, props: D, patchFlag: R, shapeFlag: P, dirs: $, transition: T } = O, A = y === "input" || y === "option";
    if (C.NODE_ENV !== "production" || A || R !== -1) {
      $ && tn(O, null, _, "created");
      let L = !1;
      if (N(v)) {
        L = Qu(
          null,
          // no need check parentSuspense in hydration
          T
        ) && _ && _.vnode.props && _.vnode.props.appear;
        const ee = v.content.firstChild;
        if (L) {
          const ve = ee.getAttribute("class");
          ve && (ee.$cls = ve), T.beforeEnter(ee);
        }
        k(ee, v, _), O.el = v = ee;
      }
      if (P & 16 && // skip if element has innerHTML / textContent
      !(D && (D.innerHTML || D.textContent))) {
        let ee = m(
          v.firstChild,
          O,
          v,
          _,
          M,
          S,
          x
        ), ve = !1;
        for (; ee; ) {
          Js(
            v,
            1
            /* CHILDREN */
          ) || (C.NODE_ENV !== "production" && !ve && (B(
            "Hydration children mismatch on",
            v,
            `
Server rendered element contains more child nodes than client vdom.`
          ), ve = !0), Un());
          const Xe = ee;
          ee = ee.nextSibling, l(Xe);
        }
      } else if (P & 8) {
        let ee = O.children;
        ee[0] === `
` && (v.tagName === "PRE" || v.tagName === "TEXTAREA") && (ee = ee.slice(1)), v.textContent !== ee && (Js(
          v,
          0
          /* TEXT */
        ) || (C.NODE_ENV !== "production" && B(
          "Hydration text content mismatch on",
          v,
          `
  - rendered on server: ${v.textContent}
  - expected on client: ${O.children}`
        ), Un()), v.textContent = O.children);
      }
      if (D) {
        if (C.NODE_ENV !== "production" || A || !x || R & 48) {
          const ee = v.tagName.includes("-");
          for (const ve in D)
            C.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !($ && $.some((Xe) => Xe.dir.created)) && Ch(v, ve, D[ve], O, _) && Un(), (A && (ve.endsWith("value") || ve === "indeterminate") || vn(ve) && !Vn(ve) || // force hydrate v-bind with .prop modifiers
            ve[0] === "." || ee) && s(v, ve, null, D[ve], void 0, _);
        } else if (D.onClick)
          s(
            v,
            "onClick",
            null,
            D.onClick,
            void 0,
            _
          );
        else if (R & 4 && mn(D.style))
          for (const ee in D.style) D.style[ee];
      }
      let G;
      (G = D && D.onVnodeBeforeMount) && Et(G, _, O), $ && tn(O, null, _, "beforeMount"), ((G = D && D.onVnodeMounted) || $ || L) && ad(() => {
        G && Et(G, _, O), L && T.enter(v), $ && tn(O, null, _, "mounted");
      }, M);
    }
    return v.nextSibling;
  }, m = (v, O, _, M, S, x, y) => {
    y = y || !!O.dynamicChildren;
    const D = O.children, R = D.length;
    let P = !1;
    for (let $ = 0; $ < R; $++) {
      const T = y ? D[$] : D[$] = vt(D[$]), A = T.type === on;
      v ? (A && !y && $ + 1 < R && vt(D[$ + 1]).type === on && (a(
        o(
          v.data.slice(T.children.length)
        ),
        _,
        r(v)
      ), v.data = T.children), v = c(
        v,
        T,
        M,
        S,
        x,
        y
      )) : A && !T.children ? a(T.el = o(""), _) : (Js(
        _,
        1
        /* CHILDREN */
      ) || (C.NODE_ENV !== "production" && !P && (B(
        "Hydration children mismatch on",
        _,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), P = !0), Un()), n(
        null,
        T,
        _,
        null,
        M,
        S,
        Fo(_),
        x
      ));
    }
    return v;
  }, g = (v, O, _, M, S, x) => {
    const { slotScopeIds: y } = O;
    y && (S = S ? S.concat(y) : y);
    const D = i(v), R = m(
      r(v),
      O,
      D,
      _,
      M,
      S,
      x
    );
    return R && Gn(R) && R.data === "]" ? r(O.anchor = R) : (Un(), a(O.anchor = f("]"), D, R), R);
  }, h = (v, O, _, M, S, x) => {
    if (Js(
      v.parentElement,
      1
      /* CHILDREN */
    ) || (C.NODE_ENV !== "production" && B(
      `Hydration node mismatch:
- rendered on server:`,
      v,
      v.nodeType === 3 ? "(text)" : Gn(v) && v.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      O.type
    ), Un()), O.el = null, x) {
      const R = I(v);
      for (; ; ) {
        const P = r(v);
        if (P && P !== R)
          l(P);
        else
          break;
      }
    }
    const y = r(v), D = i(v);
    return l(v), n(
      null,
      O,
      D,
      y,
      _,
      M,
      Fo(D),
      S
    ), _ && (_.vnode.el = O.el, Kr(_, O.el)), y;
  }, I = (v, O = "[", _ = "]") => {
    let M = 0;
    for (; v; )
      if (v = r(v), v && Gn(v) && (v.data === O && M++, v.data === _)) {
        if (M === 0)
          return r(v);
        M--;
      }
    return v;
  }, k = (v, O, _) => {
    const M = O.parentNode;
    M && M.replaceChild(v, O);
    let S = _;
    for (; S; )
      S.vnode.el === O && (S.vnode.el = S.subTree.el = v), S = S.parent;
  }, N = (v) => v.nodeType === 1 && v.tagName === "TEMPLATE";
  return [u, c];
}
function Ch(e, t, n, s, o) {
  let r, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Ee(n), Oh(_a(l || ""), _a(a)) || (r = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : tp(Ue(n));
    const f = Ea(l), u = Ea(a);
    if (s.dirs)
      for (const { dir: c, value: p } of s.dirs)
        c.name === "show" && !p && u.set("display", "none");
    o && Cu(o, s, u), $h(f, u) || (r = 3, i = "style");
  } else (e instanceof SVGElement && up(t) || e instanceof HTMLElement && (ca(t) || cp(t))) && (ca(t) ? (l = e.hasAttribute(t), a = ll(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = dp(n) ? String(n) : !1), l !== a && (r = 4, i = t));
  if (r != null && !Js(e, r)) {
    const f = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, u = `Hydration ${Ou[r]} mismatch on`, c = `
  - rendered on server: ${f(l)}
  - expected on client: ${f(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return B(u, e, c), !0;
  }
  return !1;
}
function _a(e) {
  return new Set(e.trim().split(/\s+/));
}
function Oh(e, t) {
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
function $h(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function Cu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === re && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const r in o) {
      const i = Bc(o[r]);
      n.set(`--${pp(r)}`, i);
    }
  }
  t === s && e.parent && Cu(e.parent, e.vnode, n);
}
const wa = "data-allow-mismatch", Ou = {
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
    return t === 0 && s.includes("children") ? !0 : s.includes(Ou[t]);
  }
}
const Th = So().requestIdleCallback || ((e) => setTimeout(e, 1)), Dh = So().cancelIdleCallback || ((e) => clearTimeout(e)), Ah = (e = 1e4) => (t) => {
  const n = Th(t, { timeout: e });
  return () => Dh(n);
};
function Vh(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: r, innerWidth: i } = window;
  return (t > 0 && t < r || s > 0 && s < r) && (n > 0 && n < i || o > 0 && o < i);
}
const Ih = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const r of o)
      if (r.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (Vh(o))
        return t(), s.disconnect(), !1;
      s.observe(o);
    }
  }), () => s.disconnect();
}, Mh = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Ph = (e = []) => (t, n) => {
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
function Rh(e, t) {
  if (Gn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (Gn(s))
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
function Lh(e) {
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
  let f = null, u, c = 0;
  const p = () => (c++, f = null, m()), m = () => {
    let g;
    return f || (g = f = t().catch((h) => {
      if (h = h instanceof Error ? h : new Error(String(h)), a)
        return new Promise((I, k) => {
          a(h, () => I(p()), () => k(h), c + 1);
        });
      throw h;
    }).then((h) => {
      if (g !== f && f)
        return f;
      if (C.NODE_ENV !== "production" && !h && B(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), h && (h.__esModule || h[Symbol.toStringTag] === "Module") && (h = h.default), C.NODE_ENV !== "production" && h && !ge(h) && !oe(h))
        throw new Error(`Invalid async component load result: ${h}`);
      return u = h, h;
    }));
  };
  return /* @__PURE__ */ _l({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(g, h, I) {
      let k = !1;
      (h.bu || (h.bu = [])).push(() => k = !0);
      const N = () => {
        if (k) {
          C.NODE_ENV !== "production" && B(
            `Skipping lazy hydration for component '${Ts(u) || u.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        I();
      }, v = r ? () => {
        const O = r(
          N,
          (_) => Rh(g, _)
        );
        O && (h.bum || (h.bum = [])).push(O);
      } : N;
      u ? v() : m().then(() => !h.isUnmounted && v());
    },
    get __asyncResolved() {
      return u;
    },
    setup() {
      const g = Ge;
      if (El(g), u)
        return () => ui(u, g);
      const h = (v) => {
        f = null, Hn(
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
      const I = K(!1), k = K(), N = K(!!o);
      return o && setTimeout(() => {
        N.value = !1;
      }, o), i != null && setTimeout(() => {
        if (!I.value && !k.value) {
          const v = new Error(
            `Async component timed out after ${i}ms.`
          );
          h(v), k.value = v;
        }
      }, i), m().then(() => {
        I.value = !0, g.parent && Bs(g.parent.vnode) && g.parent.update();
      }).catch((v) => {
        h(v), k.value = v;
      }), () => {
        if (I.value && u)
          return ui(u, g);
        if (k.value && s)
          return ue(s, {
            error: k.value
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
const Bs = (e) => e.type.__isKeepAlive, Fh = {
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
    C.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: f,
        um: u,
        o: { createElement: c }
      }
    } = s, p = c("div");
    s.activate = (N, v, O, _, M) => {
      const S = N.component;
      f(N, v, O, 0, l), a(
        S.vnode,
        N,
        v,
        O,
        S,
        l,
        _,
        N.slotScopeIds,
        M
      ), ze(() => {
        S.isDeactivated = !1, S.a && Tn(S.a);
        const x = N.props && N.props.onVnodeMounted;
        x && Et(x, S.parent, N);
      }, l), C.NODE_ENV !== "production" && Si(S);
    }, s.deactivate = (N) => {
      const v = N.component;
      pr(v.m), pr(v.a), f(N, p, null, 1, l), ze(() => {
        v.da && Tn(v.da);
        const O = N.props && N.props.onVnodeUnmounted;
        O && Et(O, v.parent, N), v.isDeactivated = !0;
      }, l), C.NODE_ENV !== "production" && Si(v), C.NODE_ENV !== "production" && (v.__keepAliveStorageContainer = p);
    };
    function m(N) {
      di(N), u(N, n, l, !0);
    }
    function g(N) {
      o.forEach((v, O) => {
        const _ = Ts(v.type);
        _ && !N(_) && h(O);
      });
    }
    function h(N) {
      const v = o.get(N);
      v && (!i || !jt(v, i)) ? m(v) : i && di(i), o.delete(N), r.delete(N);
    }
    Wt(
      () => [e.include, e.exclude],
      ([N, v]) => {
        N && g((O) => Xs(N, O)), v && g((O) => !Xs(v, O));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let I = null;
    const k = () => {
      I != null && (mr(n.subTree.type) ? ze(() => {
        o.set(I, Bo(n.subTree));
      }, n.subTree.suspense) : o.set(I, Bo(n.subTree)));
    };
    return He(k), qr(k), js(() => {
      o.forEach((N) => {
        const { subTree: v, suspense: O } = n, _ = Bo(v);
        if (N.type === _.type && N.key === _.key) {
          di(_);
          const M = _.component.da;
          M && ze(M, O);
          return;
        }
        m(N);
      });
    }), () => {
      if (I = null, !t.default)
        return i = null;
      const N = t.default(), v = N[0];
      if (N.length > 1)
        return C.NODE_ENV !== "production" && B("KeepAlive should contain exactly one component child."), i = null, N;
      if (!ln(v) || !(v.shapeFlag & 4) && !(v.shapeFlag & 128))
        return i = null, v;
      let O = Bo(v);
      if (O.type === Ae)
        return i = null, O;
      const _ = O.type, M = Ts(
        In(O) ? O.type.__asyncResolved || {} : _
      ), { include: S, exclude: x, max: y } = e;
      if (S && (!M || !Xs(S, M)) || x && M && Xs(x, M))
        return O.shapeFlag &= -257, i = O, v;
      const D = O.key == null ? _ : O.key, R = o.get(D);
      return O.el && (O = Rt(O), v.shapeFlag & 128 && (v.ssContent = O)), I = D, R ? (O.el = R.el, O.component = R.component, O.transition && yn(O, O.transition), O.shapeFlag |= 512, r.delete(D), r.add(D)) : (r.add(D), y && r.size > parseInt(y, 10) && h(r.values().next().value)), O.shapeFlag |= 256, i = O, mr(v.type) ? v : O;
    };
  }
}, Bh = Fh;
function Xs(e, t) {
  return Q(e) ? e.some((n) => Xs(n, t)) : le(e) ? e.split(",").includes(t) : qf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function $u(e, t) {
  Du(e, "a", t);
}
function Tu(e, t) {
  Du(e, "da", t);
}
function Du(e, t, n = Ge) {
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
      Bs(o.parent.vnode) && jh(s, t, n, o), o = o.parent;
  }
}
function jh(e, t, n, s) {
  const o = Ur(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Lt(() => {
    ol(s[t], o);
  }, n);
}
function di(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Bo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Ur(e, t, n = Ge, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Gt();
      const l = as(n), a = Pt(t, n, e, i);
      return l(), Yt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (C.NODE_ENV !== "production") {
    const o = nn(Fr[e].replace(/ hook$/, ""));
    B(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _n = (e) => (t, n = Ge) => {
  (!$s || e === "sp") && Ur(e, (...s) => t(...s), n);
}, Au = _n("bm"), He = _n("m"), wl = _n(
  "bu"
), qr = _n("u"), js = _n(
  "bum"
), Lt = _n("um"), Vu = _n(
  "sp"
), Iu = _n("rtg"), Mu = _n("rtc");
function Pu(e, t = Ge) {
  Ur("ec", e, t);
}
const ur = "components", Hh = "directives";
function Uh(e, t) {
  return Sl(ur, e, !0, t) || e;
}
const xl = Symbol.for("v-ndc");
function Nl(e) {
  return le(e) ? Sl(ur, e, !1) || e : e || xl;
}
function qh(e) {
  return Sl(Hh, e);
}
function Sl(e, t, n = !0, s = !1) {
  const o = Be || Ge;
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
    if (C.NODE_ENV !== "production" && n && !i) {
      const l = e === ur ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      B(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else C.NODE_ENV !== "production" && B(
    `resolve${rn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function xa(e, t) {
  return e && (e[t] || e[Ce(t)] || e[rn(Ce(t))]);
}
function he(e, t, n, s) {
  let o;
  const r = n && n[s], i = Q(e);
  if (i || le(e)) {
    const l = i && mn(e);
    let a = !1, f = !1;
    l && (a = !lt(e), f = Jt(e), e = Mr(e)), o = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      o[u] = t(
        a ? f ? rr(et(e[u])) : et(e[u]) : e[u],
        u,
        void 0,
        r && r[u]
      );
  } else if (typeof e == "number") {
    C.NODE_ENV !== "production" && !Number.isInteger(e) && B(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
      for (let a = 0, f = l.length; a < f; a++) {
        const u = l[a];
        o[a] = t(e[u], u, a, r && r[a]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
function zh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Q(s))
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
    return t !== "default" && (n.name = t), b(), ut(
      re,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  C.NODE_ENV !== "production" && r && r.length > 1 && (B(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), b();
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
  return e.some((t) => ln(t) ? !(t.type === Ae || t.type === re && !kl(t.children)) : !0) ? e : null;
}
function Wh(e, t) {
  const n = {};
  if (C.NODE_ENV !== "production" && !ge(e))
    return B("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : nn(s)] = e[s];
  return n;
}
const Ci = (e) => e ? vd(e) ? $o(e) : Ci(e.parent) : null, ts = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => C.NODE_ENV !== "production" ? Ht(e.props) : e.props,
    $attrs: (e) => C.NODE_ENV !== "production" ? Ht(e.attrs) : e.attrs,
    $slots: (e) => C.NODE_ENV !== "production" ? Ht(e.slots) : e.slots,
    $refs: (e) => C.NODE_ENV !== "production" ? Ht(e.refs) : e.refs,
    $parent: (e) => Ci(e.parent),
    $root: (e) => Ci(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Br(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ln.bind(e.proxy)),
    $watch: (e) => Pm.bind(e)
  })
), Cl = (e) => e === "_" || e === "$", fi = (e, t) => e !== pe && !e.__isScriptSetup && ye(e, t), so = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (C.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
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
        if (o !== pe && ye(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && ye(f, t)
        )
          return i[t] = 3, r[t];
        if (n !== pe && ye(n, t))
          return i[t] = 4, n[t];
        Oi && (i[t] = 0);
      }
    }
    const u = ts[t];
    let c, p;
    if (u)
      return t === "$attrs" ? (We(e.attrs, "get", ""), C.NODE_ENV !== "production" && hr()) : C.NODE_ENV !== "production" && t === "$slots" && We(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== pe && ye(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, ye(p, t)
    )
      return p[t];
    C.NODE_ENV !== "production" && Be && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== pe && Cl(t[0]) && ye(o, t) ? B(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Be && B(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return fi(o, t) ? (o[t] = n, !0) : C.NODE_ENV !== "production" && o.__isScriptSetup && ye(o, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ye(s, t) ? (s[t] = n, !0) : ye(e.props, t) ? (C.NODE_ENV !== "production" && B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (C.NODE_ENV !== "production" && B(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (C.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== pe && ye(e, i) || fi(t, i) || (l = r[0]) && ye(l, i) || ye(s, i) || ye(ts, i) || ye(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
C.NODE_ENV !== "production" && (so.ownKeys = (e) => (B(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Kh = /* @__PURE__ */ fe({}, so, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return so.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Jf(t);
    return C.NODE_ENV !== "production" && !n && so.has(e, t) && B(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function Gh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ts).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ts[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: De
    });
  }), t;
}
function Yh(e) {
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
function Jh(e) {
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
function Xh() {
  return C.NODE_ENV !== "production" && ps("defineProps"), null;
}
function Qh() {
  return C.NODE_ENV !== "production" && ps("defineEmits"), null;
}
function Zh(e) {
  C.NODE_ENV !== "production" && ps("defineExpose");
}
function em(e) {
  C.NODE_ENV !== "production" && ps("defineOptions");
}
function tm() {
  return C.NODE_ENV !== "production" && ps("defineSlots"), null;
}
function nm() {
  C.NODE_ENV !== "production" && ps("defineModel");
}
function sm(e, t) {
  return C.NODE_ENV !== "production" && ps("withDefaults"), null;
}
function om() {
  return Ru("useSlots").slots;
}
function rm() {
  return Ru("useAttrs").attrs;
}
function Ru(e) {
  const t = dt();
  return C.NODE_ENV !== "production" && !t && B(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Ed(t));
}
function vo(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function im(e, t) {
  const n = vo(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? Q(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : C.NODE_ENV !== "production" && B(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function lm(e, t) {
  return !e || !t ? e || t : Q(e) && Q(t) ? e.concat(t) : fe({}, vo(e), vo(t));
}
function am(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function cm(e) {
  const t = dt();
  C.NODE_ENV !== "production" && !t && B(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Ri(), Tr(n) && (n = n.catch((s) => {
    throw as(t), s;
  })), [n, () => as(t)];
}
function um() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? B(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Oi = !0;
function dm(e) {
  const t = Ol(e), n = e.proxy, s = e.ctx;
  Oi = !1, t.beforeCreate && Na(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: p,
    beforeUpdate: m,
    updated: g,
    activated: h,
    deactivated: I,
    beforeDestroy: k,
    beforeUnmount: N,
    destroyed: v,
    unmounted: O,
    render: _,
    renderTracked: M,
    renderTriggered: S,
    errorCaptured: x,
    serverPrefetch: y,
    // public API
    expose: D,
    inheritAttrs: R,
    // assets
    components: P,
    directives: $,
    filters: T
  } = t, A = C.NODE_ENV !== "production" ? um() : null;
  if (C.NODE_ENV !== "production") {
    const [G] = e.propsOptions;
    if (G)
      for (const ee in G)
        A("Props", ee);
  }
  if (f && fm(f, s, A), i)
    for (const G in i) {
      const ee = i[G];
      oe(ee) ? (C.NODE_ENV !== "production" ? Object.defineProperty(s, G, {
        value: ee.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[G] = ee.bind(n), C.NODE_ENV !== "production" && A("Methods", G)) : C.NODE_ENV !== "production" && B(
        `Method "${G}" has type "${typeof ee}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    C.NODE_ENV !== "production" && !oe(o) && B(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = o.call(n, n);
    if (C.NODE_ENV !== "production" && Tr(G) && B(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ge(G))
      C.NODE_ENV !== "production" && B("data() should return an object.");
    else if (e.data = Ss(G), C.NODE_ENV !== "production")
      for (const ee in G)
        A("Data", ee), Cl(ee[0]) || Object.defineProperty(s, ee, {
          configurable: !0,
          enumerable: !0,
          get: () => G[ee],
          set: De
        });
  }
  if (Oi = !0, r)
    for (const G in r) {
      const ee = r[G], ve = oe(ee) ? ee.bind(n, n) : oe(ee.get) ? ee.get.bind(n, n) : De;
      C.NODE_ENV !== "production" && ve === De && B(`Computed property "${G}" has no getter.`);
      const Xe = !oe(ee) && oe(ee.set) ? ee.set.bind(n) : C.NODE_ENV !== "production" ? () => {
        B(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      } : De, ft = X({
        get: ve,
        set: Xe
      });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => ft.value,
        set: (Tt) => ft.value = Tt
      }), C.NODE_ENV !== "production" && A("Computed", G);
    }
  if (l)
    for (const G in l)
      Lu(l[G], s, n, G);
  if (a) {
    const G = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(G).forEach((ee) => {
      Bu(ee, G[ee]);
    });
  }
  u && Na(u, e, "c");
  function L(G, ee) {
    Q(ee) ? ee.forEach((ve) => G(ve.bind(n))) : ee && G(ee.bind(n));
  }
  if (L(Au, c), L(He, p), L(wl, m), L(qr, g), L($u, h), L(Tu, I), L(Pu, x), L(Mu, M), L(Iu, S), L(js, N), L(Lt, O), L(Vu, y), Q(D))
    if (D.length) {
      const G = e.exposed || (e.exposed = {});
      D.forEach((ee) => {
        Object.defineProperty(G, ee, {
          get: () => n[ee],
          set: (ve) => n[ee] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === De && (e.render = _), R != null && (e.inheritAttrs = R), P && (e.components = P), $ && (e.directives = $), y && El(e);
}
function fm(e, t, n = De) {
  Q(e) && (e = $i(e));
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
    }) : t[s] = r, C.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Na(e, t, n) {
  Pt(
    Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Lu(e, t, n, s) {
  let o = s.includes(".") ? sd(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    oe(r) ? Wt(o, r) : C.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, r);
  } else if (oe(e))
    Wt(o, e.bind(n));
  else if (ge(e))
    if (Q(e))
      e.forEach((r) => Lu(r, t, n, s));
    else {
      const r = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(r) ? Wt(o, r, e) : C.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else C.NODE_ENV !== "production" && B(`Invalid watch option: "${s}"`, e);
}
function Ol(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (f) => dr(a, f, i, !0)
  ), dr(a, t, i)), ge(t) && r.set(t, a), a;
}
function dr(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && dr(e, r, n, !0), o && o.forEach(
    (i) => dr(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      C.NODE_ENV !== "production" && B(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = pm[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const pm = {
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
  watch: mm,
  // provide / inject
  provide: Sa,
  inject: hm
};
function Sa(e, t) {
  return t ? e ? function() {
    return fe(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hm(e, t) {
  return Qs($i(e), $i(t));
}
function $i(e) {
  if (Q(e)) {
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
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    vo(e),
    vo(t ?? {})
  ) : t;
}
function mm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ht(e[s], t[s]);
  return n;
}
function Fu() {
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
let gm = 0;
function vm(e, t) {
  return function(s, o = null) {
    oe(s) || (s = fe({}, s)), o != null && !ge(o) && (C.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), o = null);
    const r = Fu(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = r.app = {
      _uid: gm++,
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
        C.NODE_ENV !== "production" && B(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...c) {
        return i.has(u) ? C.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : u && oe(u.install) ? (i.add(u), u.install(f, ...c)) : oe(u) ? (i.add(u), u(f, ...c)) : C.NODE_ENV !== "production" && B(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? C.NODE_ENV !== "production" && B(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, c) {
        return C.NODE_ENV !== "production" && Li(u, r.config), c ? (C.NODE_ENV !== "production" && r.components[u] && B(`Component "${u}" has already been registered in target app.`), r.components[u] = c, f) : r.components[u];
      },
      directive(u, c) {
        return C.NODE_ENV !== "production" && vu(u), c ? (C.NODE_ENV !== "production" && r.directives[u] && B(`Directive "${u}" has already been registered in target app.`), r.directives[u] = c, f) : r.directives[u];
      },
      mount(u, c, p) {
        if (a)
          C.NODE_ENV !== "production" && B(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          C.NODE_ENV !== "production" && u.__vue_app__ && B(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = f._ceVNode || ue(s, o);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), C.NODE_ENV !== "production" && (r.reload = () => {
            const g = Rt(m);
            g.el = null, e(g, u, p);
          }), c && t ? t(m, u) : e(m, u, p), a = !0, f._container = u, u.__vue_app__ = f, C.NODE_ENV !== "production" && (f._instance = m.component, uh(f, ji)), $o(m.component);
        }
      },
      onUnmount(u) {
        C.NODE_ENV !== "production" && typeof u != "function" && B(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        a ? (Pt(
          l,
          f._instance,
          16
        ), e(null, f._container), C.NODE_ENV !== "production" && (f._instance = null, dh(f)), delete f._container.__vue_app__) : C.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(u, c) {
        return C.NODE_ENV !== "production" && u in r.provides && (ye(r.provides, u) ? B(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : B(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = c, f;
      },
      runWithContext(u) {
        const c = ns;
        ns = f;
        try {
          return u();
        } finally {
          ns = c;
        }
      }
    };
    return f;
  };
}
let ns = null;
function Bu(e, t) {
  if (!Ge)
    C.NODE_ENV !== "production" && B("provide() can only be used inside setup().");
  else {
    let n = Ge.provides;
    const s = Ge.parent && Ge.parent.provides;
    s === n && (n = Ge.provides = Object.create(s)), n[e] = t;
  }
}
function oo(e, t, n = !1) {
  const s = dt();
  if (s || ns) {
    let o = ns ? ns._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    C.NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
  } else C.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
function ym() {
  return !!(dt() || ns);
}
const ju = {}, Hu = () => Object.create(ju), Uu = (e) => Object.getPrototypeOf(e) === ju;
function bm(e, t, n, s = !1) {
  const o = {}, r = Hu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qu(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  C.NODE_ENV !== "production" && Wu(t || {}, o, e), n ? e.props = s ? o : su(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function _m(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Em(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = ce(o), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(C.NODE_ENV !== "production" && _m(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let p = u[c];
        if (zr(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (ye(r, p))
            m !== r[p] && (r[p] = m, f = !0);
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
          m !== r[p] && (r[p] = m, f = !0);
      }
    }
  } else {
    qu(e, t, o, r) && (f = !0);
    let u;
    for (const c in l)
      (!t || // for camelCase
      !ye(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ot(c)) === c || !ye(t, u))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[c] = Ti(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete o[c]);
    if (r !== l)
      for (const c in r)
        (!t || !ye(t, c)) && (delete r[c], f = !0);
  }
  f && sn(e.attrs, "set", ""), C.NODE_ENV !== "production" && Wu(t || {}, o, e);
}
function qu(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (Vn(a))
        continue;
      const f = t[a];
      let u;
      o && ye(o, u = Ce(a)) ? !r || !r.includes(u) ? n[u] = f : (l || (l = {}))[u] = f : zr(e.emitsOptions, a) || (!(a in s) || f !== s[a]) && (s[a] = f, i = !0);
    }
  if (r) {
    const a = ce(n), f = l || pe;
    for (let u = 0; u < r.length; u++) {
      const c = r[u];
      n[c] = Ti(
        o,
        a,
        c,
        f[c],
        e,
        !ye(f, c)
      );
    }
  }
  return i;
}
function Ti(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = ye(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && oe(a)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const u = as(o);
          s = f[n] = a.call(
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
const wm = /* @__PURE__ */ new WeakMap();
function zu(e, t, n = !1) {
  const s = n ? wm : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!oe(e)) {
    const u = (c) => {
      a = !0;
      const [p, m] = zu(c, t, !0);
      fe(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return ge(e) && s.set(e, bs), bs;
  if (Q(r))
    for (let u = 0; u < r.length; u++) {
      C.NODE_ENV !== "production" && !le(r[u]) && B("props must be strings when using array syntax.", r[u]);
      const c = Ce(r[u]);
      Ca(c) && (i[c] = pe);
    }
  else if (r) {
    C.NODE_ENV !== "production" && !ge(r) && B("invalid props options", r);
    for (const u in r) {
      const c = Ce(u);
      if (Ca(c)) {
        const p = r[u], m = i[c] = Q(p) || oe(p) ? { type: p } : fe({}, p), g = m.type;
        let h = !1, I = !0;
        if (Q(g))
          for (let k = 0; k < g.length; ++k) {
            const N = g[k], v = oe(N) && N.name;
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
        ] = I, (h || ye(m, "default")) && l.push(c);
      }
    }
  }
  const f = [i, l];
  return ge(e) && s.set(e, f), f;
}
function Ca(e) {
  return e[0] !== "$" && !Vn(e) ? !0 : (C.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function xm(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Wu(e, t, n) {
  const s = ce(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ce(i));
  for (const i in o) {
    let l = o[i];
    l != null && Nm(
      i,
      s[i],
      l,
      C.NODE_ENV !== "production" ? Ht(s) : s,
      !r.includes(i)
    );
  }
}
function Nm(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    B('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let f = !1;
      const u = Q(r) ? r : [r], c = [];
      for (let p = 0; p < u.length && !f; p++) {
        const { valid: m, expectedType: g } = km(t, u[p]);
        c.push(g || ""), f = m;
      }
      if (!f) {
        B(Cm(e, t, c));
        return;
      }
    }
    l && !l(t, s) && B('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Sm = /* @__PURE__ */ Je(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function km(e, t) {
  let n;
  const s = xm(t);
  if (s === "null")
    n = e === null;
  else if (Sm(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = ge(e) : s === "Array" ? n = Q(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Cm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(rn).join(" | ")}`;
  const o = n[0], r = rl(t), i = Oa(t, o), l = Oa(t, r);
  return n.length === 1 && $a(o) && !Om(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, $a(r) && (s += `with value ${l}.`), s;
}
function Oa(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $a(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Om(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const $l = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Tl = (e) => Q(e) ? e.map(vt) : [vt(e)], $m = (e, t, n) => {
  if (t._n)
    return t;
  const s = Me((...o) => (C.NODE_ENV !== "production" && Ge && !(n === null && Be) && !(n && n.root !== Ge.root) && B(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Tl(t(...o))), n);
  return s._c = !1, s;
}, Ku = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if ($l(o)) continue;
    const r = e[o];
    if (oe(r))
      t[o] = $m(o, r, s);
    else if (r != null) {
      C.NODE_ENV !== "production" && B(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Tl(r);
      t[o] = () => i;
    }
  }
}, Gu = (e, t) => {
  C.NODE_ENV !== "production" && !Bs(e.vnode) && B(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Tl(t);
  e.slots.default = () => n;
}, Di = (e, t, n) => {
  for (const s in t)
    (n || !$l(s)) && (e[s] = t[s]);
}, Tm = (e, t, n) => {
  const s = e.slots = Hu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && rs(s, "__", o, !0);
    const r = t._;
    r ? (Di(s, t, n), n && rs(s, "_", r, !0)) : Ku(t, s);
  } else t && Gu(e, t);
}, Dm = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? C.NODE_ENV !== "production" && Ut ? (Di(o, t, n), sn(e, "set", "$slots")) : n && l === 1 ? r = !1 : Di(o, t, n) : (r = !t.$stable, Ku(t, o)), i = t;
  } else t && (Gu(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !$l(l) && i[l] == null && delete o[l];
};
let zs, Dn;
function cn(e, t) {
  e.appContext.config.performance && fr() && Dn.mark(`vue-${t}-${e.uid}`), C.NODE_ENV !== "production" && hh(e, t, fr() ? Dn.now() : Date.now());
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
  C.NODE_ENV !== "production" && mh(e, t, fr() ? Dn.now() : Date.now());
}
function fr() {
  return zs !== void 0 || (typeof window < "u" && window.performance ? (zs = !0, Dn = window.performance) : zs = !1), zs;
}
function Am() {
  const e = [];
  if (C.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ze = ad;
function Yu(e) {
  return Xu(e);
}
function Ju(e) {
  return Xu(e, kh);
}
function Xu(e, t) {
  Am();
  const n = So();
  n.__VUE__ = !0, C.NODE_ENV !== "production" && gl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: c,
    nextSibling: p,
    setScopeId: m = De,
    insertStaticContent: g
  } = e, h = (E, V, F, z = null, H = null, U = null, te = void 0, J = null, Y = C.NODE_ENV !== "production" && Ut ? !1 : !!V.dynamicChildren) => {
    if (E === V)
      return;
    E && !jt(E, V) && (z = Vo(E), En(E, H, U, !0), E = null), V.patchFlag === -2 && (Y = !1, V.dynamicChildren = null);
    const { type: W, ref: ie, shapeFlag: ne } = V;
    switch (W) {
      case on:
        I(E, V, F, z);
        break;
      case Ae:
        k(E, V, F, z);
        break;
      case Mn:
        E == null ? N(V, F, z, te) : C.NODE_ENV !== "production" && v(E, V, F, te);
        break;
      case re:
        $(
          E,
          V,
          F,
          z,
          H,
          U,
          te,
          J,
          Y
        );
        break;
      default:
        ne & 1 ? M(
          E,
          V,
          F,
          z,
          H,
          U,
          te,
          J,
          Y
        ) : ne & 6 ? T(
          E,
          V,
          F,
          z,
          H,
          U,
          te,
          J,
          Y
        ) : ne & 64 || ne & 128 ? W.process(
          E,
          V,
          F,
          z,
          H,
          U,
          te,
          J,
          Y,
          hs
        ) : C.NODE_ENV !== "production" && B("Invalid VNode type:", W, `(${typeof W})`);
    }
    ie != null && H ? xs(ie, E && E.ref, U, V || E, !V) : ie == null && E && E.ref != null && xs(E.ref, null, U, E, !0);
  }, I = (E, V, F, z) => {
    if (E == null)
      s(
        V.el = l(V.children),
        F,
        z
      );
    else {
      const H = V.el = E.el;
      V.children !== E.children && f(H, V.children);
    }
  }, k = (E, V, F, z) => {
    E == null ? s(
      V.el = a(V.children || ""),
      F,
      z
    ) : V.el = E.el;
  }, N = (E, V, F, z) => {
    [E.el, E.anchor] = g(
      E.children,
      V,
      F,
      z,
      E.el,
      E.anchor
    );
  }, v = (E, V, F, z) => {
    if (V.children !== E.children) {
      const H = p(E.anchor);
      _(E), [V.el, V.anchor] = g(
        V.children,
        F,
        H,
        z
      );
    } else
      V.el = E.el, V.anchor = E.anchor;
  }, O = ({ el: E, anchor: V }, F, z) => {
    let H;
    for (; E && E !== V; )
      H = p(E), s(E, F, z), E = H;
    s(V, F, z);
  }, _ = ({ el: E, anchor: V }) => {
    let F;
    for (; E && E !== V; )
      F = p(E), o(E), E = F;
    o(V);
  }, M = (E, V, F, z, H, U, te, J, Y) => {
    V.type === "svg" ? te = "svg" : V.type === "math" && (te = "mathml"), E == null ? S(
      V,
      F,
      z,
      H,
      U,
      te,
      J,
      Y
    ) : D(
      E,
      V,
      H,
      U,
      te,
      J,
      Y
    );
  }, S = (E, V, F, z, H, U, te, J) => {
    let Y, W;
    const { props: ie, shapeFlag: ne, transition: se, dirs: ae } = E;
    if (Y = E.el = i(
      E.type,
      U,
      ie && ie.is,
      ie
    ), ne & 8 ? u(Y, E.children) : ne & 16 && y(
      E.children,
      Y,
      null,
      z,
      H,
      pi(E, U),
      te,
      J
    ), ae && tn(E, null, z, "created"), x(Y, E, E.scopeId, te, z), ie) {
      for (const Oe in ie)
        Oe !== "value" && !Vn(Oe) && r(Y, Oe, null, ie[Oe], U, z);
      "value" in ie && r(Y, "value", null, ie.value, U), (W = ie.onVnodeBeforeMount) && Et(W, z, E);
    }
    C.NODE_ENV !== "production" && (rs(Y, "__vnode", E, !0), rs(Y, "__vueParentComponent", z, !0)), ae && tn(E, null, z, "beforeMount");
    const _e = Qu(H, se);
    _e && se.beforeEnter(Y), s(Y, V, F), ((W = ie && ie.onVnodeMounted) || _e || ae) && ze(() => {
      W && Et(W, z, E), _e && se.enter(Y), ae && tn(E, null, z, "mounted");
    }, H);
  }, x = (E, V, F, z, H) => {
    if (F && m(E, F), z)
      for (let U = 0; U < z.length; U++)
        m(E, z[U]);
    if (H) {
      let U = H.subTree;
      if (C.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && (U = Wr(U.children) || U), V === U || mr(U.type) && (U.ssContent === V || U.ssFallback === V)) {
        const te = H.vnode;
        x(
          E,
          te,
          te.scopeId,
          te.slotScopeIds,
          H.parent
        );
      }
    }
  }, y = (E, V, F, z, H, U, te, J, Y = 0) => {
    for (let W = Y; W < E.length; W++) {
      const ie = E[W] = J ? On(E[W]) : vt(E[W]);
      h(
        null,
        ie,
        V,
        F,
        z,
        H,
        U,
        te,
        J
      );
    }
  }, D = (E, V, F, z, H, U, te) => {
    const J = V.el = E.el;
    C.NODE_ENV !== "production" && (J.__vnode = V);
    let { patchFlag: Y, dynamicChildren: W, dirs: ie } = V;
    Y |= E.patchFlag & 16;
    const ne = E.props || pe, se = V.props || pe;
    let ae;
    if (F && qn(F, !1), (ae = se.onVnodeBeforeUpdate) && Et(ae, F, V, E), ie && tn(V, E, F, "beforeUpdate"), F && qn(F, !0), C.NODE_ENV !== "production" && Ut && (Y = 0, te = !1, W = null), (ne.innerHTML && se.innerHTML == null || ne.textContent && se.textContent == null) && u(J, ""), W ? (R(
      E.dynamicChildren,
      W,
      J,
      F,
      z,
      pi(V, H),
      U
    ), C.NODE_ENV !== "production" && ro(E, V)) : te || ve(
      E,
      V,
      J,
      null,
      F,
      z,
      pi(V, H),
      U,
      !1
    ), Y > 0) {
      if (Y & 16)
        P(J, ne, se, F, H);
      else if (Y & 2 && ne.class !== se.class && r(J, "class", null, se.class, H), Y & 4 && r(J, "style", ne.style, se.style, H), Y & 8) {
        const _e = V.dynamicProps;
        for (let Oe = 0; Oe < _e.length; Oe++) {
          const Ne = _e[Oe], yt = ne[Ne], tt = se[Ne];
          (tt !== yt || Ne === "value") && r(J, Ne, yt, tt, H, F);
        }
      }
      Y & 1 && E.children !== V.children && u(J, V.children);
    } else !te && W == null && P(J, ne, se, F, H);
    ((ae = se.onVnodeUpdated) || ie) && ze(() => {
      ae && Et(ae, F, V, E), ie && tn(V, E, F, "updated");
    }, z);
  }, R = (E, V, F, z, H, U, te) => {
    for (let J = 0; J < V.length; J++) {
      const Y = E[J], W = V[J], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Y.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(Y, W) || // - In the case of a component, it could contain anything.
        Y.shapeFlag & 198) ? c(Y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      h(
        Y,
        W,
        ie,
        null,
        z,
        H,
        U,
        te,
        !0
      );
    }
  }, P = (E, V, F, z, H) => {
    if (V !== F) {
      if (V !== pe)
        for (const U in V)
          !Vn(U) && !(U in F) && r(
            E,
            U,
            V[U],
            null,
            H,
            z
          );
      for (const U in F) {
        if (Vn(U)) continue;
        const te = F[U], J = V[U];
        te !== J && U !== "value" && r(E, U, J, te, H, z);
      }
      "value" in F && r(E, "value", V.value, F.value, H);
    }
  }, $ = (E, V, F, z, H, U, te, J, Y) => {
    const W = V.el = E ? E.el : l(""), ie = V.anchor = E ? E.anchor : l("");
    let { patchFlag: ne, dynamicChildren: se, slotScopeIds: ae } = V;
    C.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ut || ne & 2048) && (ne = 0, Y = !1, se = null), ae && (J = J ? J.concat(ae) : ae), E == null ? (s(W, F, z), s(ie, F, z), y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      F,
      ie,
      H,
      U,
      te,
      J,
      Y
    )) : ne > 0 && ne & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (R(
      E.dynamicChildren,
      se,
      F,
      H,
      U,
      te,
      J
    ), C.NODE_ENV !== "production" ? ro(E, V) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (V.key != null || H && V === H.subTree) && ro(
        E,
        V,
        !0
        /* shallow */
      )
    )) : ve(
      E,
      V,
      F,
      ie,
      H,
      U,
      te,
      J,
      Y
    );
  }, T = (E, V, F, z, H, U, te, J, Y) => {
    V.slotScopeIds = J, E == null ? V.shapeFlag & 512 ? H.ctx.activate(
      V,
      F,
      z,
      te,
      Y
    ) : A(
      V,
      F,
      z,
      H,
      U,
      te,
      Y
    ) : L(E, V, Y);
  }, A = (E, V, F, z, H, U, te) => {
    const J = E.component = gd(
      E,
      z,
      H
    );
    if (C.NODE_ENV !== "production" && J.type.__hmrId && ih(J), C.NODE_ENV !== "production" && (_s(E), cn(J, "mount")), Bs(E) && (J.ctx.renderer = hs), C.NODE_ENV !== "production" && cn(J, "init"), yd(J, !1, te), C.NODE_ENV !== "production" && un(J, "init"), C.NODE_ENV !== "production" && Ut && (E.el = null), J.asyncDep) {
      if (H && H.registerDep(J, G, te), !E.el) {
        const Y = J.subTree = ue(Ae);
        k(null, Y, V, F), E.placeholder = Y.el;
      }
    } else
      G(
        J,
        E,
        V,
        F,
        H,
        U,
        te
      );
    C.NODE_ENV !== "production" && (Es(), un(J, "mount"));
  }, L = (E, V, F) => {
    const z = V.component = E.component;
    if (jm(E, V, F))
      if (z.asyncDep && !z.asyncResolved) {
        C.NODE_ENV !== "production" && _s(V), ee(z, V, F), C.NODE_ENV !== "production" && Es();
        return;
      } else
        z.next = V, z.update();
    else
      V.el = E.el, z.vnode = V;
  }, G = (E, V, F, z, H, U, te) => {
    const J = () => {
      if (E.isMounted) {
        let { next: ne, bu: se, u: ae, parent: _e, vnode: Oe } = E;
        {
          const St = Zu(E);
          if (St) {
            ne && (ne.el = Oe.el, ee(E, ne, te)), St.asyncDep.then(() => {
              E.isUnmounted || J();
            });
            return;
          }
        }
        let Ne = ne, yt;
        C.NODE_ENV !== "production" && _s(ne || E.vnode), qn(E, !1), ne ? (ne.el = Oe.el, ee(E, ne, te)) : ne = Oe, se && Tn(se), (yt = ne.props && ne.props.onVnodeBeforeUpdate) && Et(yt, _e, ne, Oe), qn(E, !0), C.NODE_ENV !== "production" && cn(E, "render");
        const tt = Go(E);
        C.NODE_ENV !== "production" && un(E, "render");
        const Ft = E.subTree;
        E.subTree = tt, C.NODE_ENV !== "production" && cn(E, "patch"), h(
          Ft,
          tt,
          // parent may have changed if it's in a teleport
          c(Ft.el),
          // anchor may have changed if it's in a fragment
          Vo(Ft),
          E,
          H,
          U
        ), C.NODE_ENV !== "production" && un(E, "patch"), ne.el = tt.el, Ne === null && Kr(E, tt.el), ae && ze(ae, H), (yt = ne.props && ne.props.onVnodeUpdated) && ze(
          () => Et(yt, _e, ne, Oe),
          H
        ), C.NODE_ENV !== "production" && mu(E), C.NODE_ENV !== "production" && Es();
      } else {
        let ne;
        const { el: se, props: ae } = V, { bm: _e, m: Oe, parent: Ne, root: yt, type: tt } = E, Ft = In(V);
        if (qn(E, !1), _e && Tn(_e), !Ft && (ne = ae && ae.onVnodeBeforeMount) && Et(ne, Ne, V), qn(E, !0), se && ni) {
          const St = () => {
            C.NODE_ENV !== "production" && cn(E, "render"), E.subTree = Go(E), C.NODE_ENV !== "production" && un(E, "render"), C.NODE_ENV !== "production" && cn(E, "hydrate"), ni(
              se,
              E.subTree,
              E,
              H,
              null
            ), C.NODE_ENV !== "production" && un(E, "hydrate");
          };
          Ft && tt.__asyncHydrate ? tt.__asyncHydrate(
            se,
            E,
            St
          ) : St();
        } else {
          yt.ce && // @ts-expect-error _def is private
          yt.ce._def.shadowRoot !== !1 && yt.ce._injectChildStyle(tt), C.NODE_ENV !== "production" && cn(E, "render");
          const St = E.subTree = Go(E);
          C.NODE_ENV !== "production" && un(E, "render"), C.NODE_ENV !== "production" && cn(E, "patch"), h(
            null,
            St,
            F,
            z,
            E,
            H,
            U
          ), C.NODE_ENV !== "production" && un(E, "patch"), V.el = St.el;
        }
        if (Oe && ze(Oe, H), !Ft && (ne = ae && ae.onVnodeMounted)) {
          const St = V;
          ze(
            () => Et(ne, Ne, St),
            H
          );
        }
        (V.shapeFlag & 256 || Ne && In(Ne.vnode) && Ne.vnode.shapeFlag & 256) && E.a && ze(E.a, H), E.isMounted = !0, C.NODE_ENV !== "production" && Si(E), V = F = z = null;
      }
    };
    E.scope.on();
    const Y = E.effect = new fo(J);
    E.scope.off();
    const W = E.update = Y.run.bind(Y), ie = E.job = Y.runIfDirty.bind(Y);
    ie.i = E, ie.id = E.uid, Y.scheduler = () => Br(ie), qn(E, !0), C.NODE_ENV !== "production" && (Y.onTrack = E.rtc ? (ne) => Tn(E.rtc, ne) : void 0, Y.onTrigger = E.rtg ? (ne) => Tn(E.rtg, ne) : void 0), W();
  }, ee = (E, V, F) => {
    V.component = E;
    const z = E.vnode.props;
    E.vnode = V, E.next = null, Em(E, V.props, z, F), Dm(E, V.children, F), Gt(), pa(E), Yt();
  }, ve = (E, V, F, z, H, U, te, J, Y = !1) => {
    const W = E && E.children, ie = E ? E.shapeFlag : 0, ne = V.children, { patchFlag: se, shapeFlag: ae } = V;
    if (se > 0) {
      if (se & 128) {
        ft(
          W,
          ne,
          F,
          z,
          H,
          U,
          te,
          J,
          Y
        );
        return;
      } else if (se & 256) {
        Xe(
          W,
          ne,
          F,
          z,
          H,
          U,
          te,
          J,
          Y
        );
        return;
      }
    }
    ae & 8 ? (ie & 16 && Hs(W, H, U), ne !== W && u(F, ne)) : ie & 16 ? ae & 16 ? ft(
      W,
      ne,
      F,
      z,
      H,
      U,
      te,
      J,
      Y
    ) : Hs(W, H, U, !0) : (ie & 8 && u(F, ""), ae & 16 && y(
      ne,
      F,
      z,
      H,
      U,
      te,
      J,
      Y
    ));
  }, Xe = (E, V, F, z, H, U, te, J, Y) => {
    E = E || bs, V = V || bs;
    const W = E.length, ie = V.length, ne = Math.min(W, ie);
    let se;
    for (se = 0; se < ne; se++) {
      const ae = V[se] = Y ? On(V[se]) : vt(V[se]);
      h(
        E[se],
        ae,
        F,
        null,
        H,
        U,
        te,
        J,
        Y
      );
    }
    W > ie ? Hs(
      E,
      H,
      U,
      !0,
      !1,
      ne
    ) : y(
      V,
      F,
      z,
      H,
      U,
      te,
      J,
      Y,
      ne
    );
  }, ft = (E, V, F, z, H, U, te, J, Y) => {
    let W = 0;
    const ie = V.length;
    let ne = E.length - 1, se = ie - 1;
    for (; W <= ne && W <= se; ) {
      const ae = E[W], _e = V[W] = Y ? On(V[W]) : vt(V[W]);
      if (jt(ae, _e))
        h(
          ae,
          _e,
          F,
          null,
          H,
          U,
          te,
          J,
          Y
        );
      else
        break;
      W++;
    }
    for (; W <= ne && W <= se; ) {
      const ae = E[ne], _e = V[se] = Y ? On(V[se]) : vt(V[se]);
      if (jt(ae, _e))
        h(
          ae,
          _e,
          F,
          null,
          H,
          U,
          te,
          J,
          Y
        );
      else
        break;
      ne--, se--;
    }
    if (W > ne) {
      if (W <= se) {
        const ae = se + 1, _e = ae < ie ? V[ae].el : z;
        for (; W <= se; )
          h(
            null,
            V[W] = Y ? On(V[W]) : vt(V[W]),
            F,
            _e,
            H,
            U,
            te,
            J,
            Y
          ), W++;
      }
    } else if (W > se)
      for (; W <= ne; )
        En(E[W], H, U, !0), W++;
    else {
      const ae = W, _e = W, Oe = /* @__PURE__ */ new Map();
      for (W = _e; W <= se; W++) {
        const pt = V[W] = Y ? On(V[W]) : vt(V[W]);
        pt.key != null && (C.NODE_ENV !== "production" && Oe.has(pt.key) && B(
          "Duplicate keys found during update:",
          JSON.stringify(pt.key),
          "Make sure keys are unique."
        ), Oe.set(pt.key, W));
      }
      let Ne, yt = 0;
      const tt = se - _e + 1;
      let Ft = !1, St = 0;
      const Us = new Array(tt);
      for (W = 0; W < tt; W++) Us[W] = 0;
      for (W = ae; W <= ne; W++) {
        const pt = E[W];
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
        Xt === void 0 ? En(pt, H, U, !0) : (Us[Xt - _e] = W + 1, Xt >= St ? St = Xt : Ft = !0, h(
          pt,
          V[Xt],
          F,
          null,
          H,
          U,
          te,
          J,
          Y
        ), yt++);
      }
      const sa = Ft ? Vm(Us) : bs;
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
          te,
          J,
          Y
        ) : Ft && (Ne < 0 || W !== sa[Ne] ? Tt(Xt, F, ra, 2) : Ne--);
      }
    }
  }, Tt = (E, V, F, z, H = null) => {
    const { el: U, type: te, transition: J, children: Y, shapeFlag: W } = E;
    if (W & 6) {
      Tt(E.component.subTree, V, F, z);
      return;
    }
    if (W & 128) {
      E.suspense.move(V, F, z);
      return;
    }
    if (W & 64) {
      te.move(E, V, F, hs);
      return;
    }
    if (te === re) {
      s(U, V, F);
      for (let ne = 0; ne < Y.length; ne++)
        Tt(Y[ne], V, F, z);
      s(E.anchor, V, F);
      return;
    }
    if (te === Mn) {
      O(E, V, F);
      return;
    }
    if (z !== 2 && W & 1 && J)
      if (z === 0)
        J.beforeEnter(U), s(U, V, F), ze(() => J.enter(U), H);
      else {
        const { leave: ne, delayLeave: se, afterLeave: ae } = J, _e = () => {
          E.ctx.isUnmounted ? o(U) : s(U, V, F);
        }, Oe = () => {
          ne(U, () => {
            _e(), ae && ae();
          });
        };
        se ? se(U, _e, Oe) : Oe();
      }
    else
      s(U, V, F);
  }, En = (E, V, F, z = !1, H = !1) => {
    const {
      type: U,
      props: te,
      ref: J,
      children: Y,
      dynamicChildren: W,
      shapeFlag: ie,
      patchFlag: ne,
      dirs: se,
      cacheIndex: ae
    } = E;
    if (ne === -2 && (H = !1), J != null && (Gt(), xs(J, null, F, E, !0), Yt()), ae != null && (V.renderCache[ae] = void 0), ie & 256) {
      V.ctx.deactivate(E);
      return;
    }
    const _e = ie & 1 && se, Oe = !In(E);
    let Ne;
    if (Oe && (Ne = te && te.onVnodeBeforeUnmount) && Et(Ne, V, E), ie & 6)
      Hf(E.component, F, z);
    else {
      if (ie & 128) {
        E.suspense.unmount(F, z);
        return;
      }
      _e && tn(E, null, V, "beforeUnmount"), ie & 64 ? E.type.remove(
        E,
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
      (U !== re || ne > 0 && ne & 64) ? Hs(
        W,
        V,
        F,
        !1,
        !0
      ) : (U === re && ne & 384 || !H && ie & 16) && Hs(Y, V, F), z && Zr(E);
    }
    (Oe && (Ne = te && te.onVnodeUnmounted) || _e) && ze(() => {
      Ne && Et(Ne, V, E), _e && tn(E, null, V, "unmounted");
    }, F);
  }, Zr = (E) => {
    const { type: V, el: F, anchor: z, transition: H } = E;
    if (V === re) {
      C.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && H && !H.persisted ? E.children.forEach((te) => {
        te.type === Ae ? o(te.el) : Zr(te);
      }) : jf(F, z);
      return;
    }
    if (V === Mn) {
      _(E);
      return;
    }
    const U = () => {
      o(F), H && !H.persisted && H.afterLeave && H.afterLeave();
    };
    if (E.shapeFlag & 1 && H && !H.persisted) {
      const { leave: te, delayLeave: J } = H, Y = () => te(F, U);
      J ? J(E.el, U, Y) : Y();
    } else
      U();
  }, jf = (E, V) => {
    let F;
    for (; E !== V; )
      F = p(E), o(E), E = F;
    o(V);
  }, Hf = (E, V, F) => {
    C.NODE_ENV !== "production" && E.type.__hmrId && lh(E);
    const {
      bum: z,
      scope: H,
      job: U,
      subTree: te,
      um: J,
      m: Y,
      a: W,
      parent: ie,
      slots: { __: ne }
    } = E;
    pr(Y), pr(W), z && Tn(z), ie && Q(ne) && ne.forEach((se) => {
      ie.renderCache[se] = void 0;
    }), H.stop(), U && (U.flags |= 8, En(te, E, V, F)), J && ze(J, V), ze(() => {
      E.isUnmounted = !0;
    }, V), V && V.pendingBranch && !V.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === V.pendingId && (V.deps--, V.deps === 0 && V.resolve()), C.NODE_ENV !== "production" && ph(E);
  }, Hs = (E, V, F, z = !1, H = !1, U = 0) => {
    for (let te = U; te < E.length; te++)
      En(E[te], V, F, z, H);
  }, Vo = (E) => {
    if (E.shapeFlag & 6)
      return Vo(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const V = p(E.anchor || E.el), F = V && V[yu];
    return F ? p(F) : V;
  };
  let ei = !1;
  const na = (E, V, F) => {
    E == null ? V._vnode && En(V._vnode, null, null, !0) : h(
      V._vnode || null,
      E,
      V,
      null,
      null,
      null,
      F
    ), V._vnode = E, ei || (ei = !0, pa(), ar(), ei = !1);
  }, hs = {
    p: h,
    um: En,
    m: Tt,
    r: Zr,
    mt: A,
    mc: y,
    pc: ve,
    pbc: R,
    n: Vo,
    o: e
  };
  let ti, ni;
  return t && ([ti, ni] = t(
    hs
  )), {
    render: na,
    hydrate: ti,
    createApp: vm(na, ti)
  };
}
function pi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function qn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ro(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Q(s) && Q(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = On(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && ro(i, l)), l.type === on && (l.el = i.el), l.type === Ae && !l.el && (l.el = i.el), C.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Vm(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const f = e[s];
    if (f !== 0) {
      if (o = n[n.length - 1], e[o] < f) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < f ? r = l + 1 : i = l;
      f < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
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
    const e = oo(ed);
    return e || C.NODE_ENV !== "production" && B(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Im(e, t) {
  return Oo(e, null, t);
}
function Mm(e, t) {
  return Oo(
    e,
    null,
    C.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function nd(e, t) {
  return Oo(
    e,
    null,
    C.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Wt(e, t, n) {
  return C.NODE_ENV !== "production" && !oe(t) && B(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Oo(e, t, n);
}
function Oo(e, t, n = pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  C.NODE_ENV !== "production" && !t && (s !== void 0 && B(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && B(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && B(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  C.NODE_ENV !== "production" && (l.onWarn = B);
  const a = t && s || !t && r !== "post";
  let f;
  if ($s) {
    if (r === "sync") {
      const m = td();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = De, m.resume = De, m.pause = De, m;
    }
  }
  const u = Ge;
  l.call = (m, g, h) => Pt(m, u, g, h);
  let c = !1;
  r === "post" ? l.scheduler = (m) => {
    ze(m, u && u.suspense);
  } : r !== "sync" && (c = !0, l.scheduler = (m, g) => {
    g ? m() : Br(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const p = Xp(e, t, l);
  return $s && (f ? f.push(p) : a && p()), p;
}
function Pm(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? sd(s, e) : () => s[e] : e.bind(s, s);
  let r;
  oe(t) ? r = t : (r = t.handler, n = t);
  const i = as(this), l = Oo(o, r.bind(s), n);
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
function Rm(e, t, n = pe) {
  const s = dt();
  if (C.NODE_ENV !== "production" && !s)
    return B("useModel() called without active instance."), K();
  const o = Ce(t);
  if (C.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return B(`useModel() called with prop "${t}" which is not declared.`), K();
  const r = ot(t), i = od(e, o), l = lu((a, f) => {
    let u, c = pe, p;
    return nd(() => {
      const m = e[o];
      mt(u, m) && (u = m, f());
    }), {
      get() {
        return a(), n.get ? n.get(u) : u;
      },
      set(m) {
        const g = n.set ? n.set(m) : m;
        if (!mt(g, u) && !(c !== pe && mt(m, c)))
          return;
        const h = s.vnode.props;
        h && // check if parent has passed v-model
        (t in h || o in h || r in h) && (`onUpdate:${t}` in h || `onUpdate:${o}` in h || `onUpdate:${r}` in h) || (u = m, f()), s.emit(`update:${t}`, g), mt(m, g) && mt(m, c) && !mt(g, p) && f(), c = m, p = g;
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
const od = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${ot(t)}Modifiers`];
function Lm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (C.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [c]
    } = e;
    if (u)
      if (!(t in u))
        (!c || !(nn(Ce(t)) in c)) && B(
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
  const r = t.startsWith("update:"), i = r && od(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => le(u) ? u.trim() : u)), i.number && (o = n.map(nr))), C.NODE_ENV !== "production" && gh(e, t, o), C.NODE_ENV !== "production") {
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
  !a && r && (a = s[l = nn(ot(t))]), a && Pt(
    a,
    e,
    6,
    o
  );
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Pt(
      f,
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
    const a = (f) => {
      const u = rd(f, t, !0);
      u && (l = !0, fe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ge(e) && s.set(e, null), null) : (Q(r) ? r.forEach((a) => i[a] = null) : fe(i, r), ge(e) && s.set(e, i), i);
}
function zr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ye(e, t[0].toLowerCase() + t.slice(1)) || ye(e, ot(t)) || ye(e, t));
}
let Ai = !1;
function hr() {
  Ai = !0;
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
    render: f,
    renderCache: u,
    props: c,
    data: p,
    setupState: m,
    ctx: g,
    inheritAttrs: h
  } = e, I = go(e);
  let k, N;
  C.NODE_ENV !== "production" && (Ai = !1);
  try {
    if (n.shapeFlag & 4) {
      const _ = o || s, M = C.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(_, {
        get(S, x, y) {
          return B(
            `Property '${String(
              x
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(S, x, y);
        }
      }) : _;
      k = vt(
        f.call(
          M,
          _,
          u,
          C.NODE_ENV !== "production" ? Ht(c) : c,
          m,
          p,
          g
        )
      ), N = l;
    } else {
      const _ = t;
      C.NODE_ENV !== "production" && l === c && hr(), k = vt(
        _.length > 1 ? _(
          C.NODE_ENV !== "production" ? Ht(c) : c,
          C.NODE_ENV !== "production" ? {
            get attrs() {
              return hr(), Ht(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : _(
          C.NODE_ENV !== "production" ? Ht(c) : c,
          null
        )
      ), N = t.props ? l : Fm(l);
    }
  } catch (_) {
    io.length = 0, Hn(_, e, 1), k = ue(Ae);
  }
  let v = k, O;
  if (C.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([v, O] = id(k)), N && h !== !1) {
    const _ = Object.keys(N), { shapeFlag: M } = v;
    if (_.length) {
      if (M & 7)
        r && _.some(tr) && (N = Bm(
          N,
          r
        )), v = Rt(v, N, !1, !0);
      else if (C.NODE_ENV !== "production" && !Ai && v.type !== Ae) {
        const S = Object.keys(l), x = [], y = [];
        for (let D = 0, R = S.length; D < R; D++) {
          const P = S[D];
          vn(P) ? tr(P) || x.push(P[2].toLowerCase() + P.slice(3)) : y.push(P);
        }
        y.length && B(
          `Extraneous non-props attributes (${y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), x.length && B(
          `Extraneous non-emits event listeners (${x.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (C.NODE_ENV !== "production" && !Ta(v) && B(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), v = Rt(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (C.NODE_ENV !== "production" && !Ta(v) && B(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(v, n.transition)), C.NODE_ENV !== "production" && O ? O(v) : k = v, go(I), k;
}
const id = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Wr(t, !1);
  if (s) {
    if (C.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return id(s);
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
      if (o.type !== Ae || o.children === "v-if") {
        if (n)
          return;
        if (n = o, C.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Wr(n.children);
      }
    } else
      return;
  }
  return n;
}
const Fm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Bm = (e, t) => {
  const n = {};
  for (const s in e)
    (!tr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Ta = (e) => e.shapeFlag & 7 || e.type === Ae;
function jm(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, f = r.emitsOptions;
  if (C.NODE_ENV !== "production" && (o || l) && Ut || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Da(s, i, f) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const p = u[c];
        if (i[p] !== s[p] && !zr(f, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Da(s, i, f) : !0 : !!i;
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
let Vi = 0;
const Hm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, r, i, l, a, f) {
    if (e == null)
      qm(
        t,
        n,
        s,
        o,
        r,
        i,
        l,
        a,
        f
      );
    else {
      if (r && r.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      zm(
        e,
        t,
        n,
        s,
        o,
        i,
        l,
        a,
        f
      );
    }
  },
  hydrate: Wm,
  normalize: Km
}, Um = Hm;
function yo(e, t) {
  const n = e.props && e.props[t];
  oe(n) && n();
}
function qm(e, t, n, s, o, r, i, l, a) {
  const {
    p: f,
    o: { createElement: u }
  } = a, c = u("div"), p = e.suspense = ld(
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
  f(
    null,
    p.pendingBranch = e.ssContent,
    c,
    null,
    s,
    p,
    r,
    i
  ), p.deps > 0 ? (yo(e, "onPending"), yo(e, "onFallback"), f(
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
function zm(e, t, n, s, o, r, i, l, { p: a, um: f, o: { createElement: u } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const p = t.ssContent, m = t.ssFallback, { activeBranch: g, pendingBranch: h, isInFallback: I, isHydrating: k } = c;
  if (h)
    c.pendingBranch = p, jt(p, h) ? (a(
      h,
      p,
      c.hiddenContainer,
      null,
      o,
      c,
      r,
      i,
      l
    ), c.deps <= 0 ? c.resolve() : I && (k || (a(
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
    ), Ns(c, m)))) : (c.pendingId = Vi++, k ? (c.isHydrating = !1, c.activeBranch = h) : f(h, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = u("div"), I ? (a(
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
    ), Ns(c, m))) : g && jt(p, g) ? (a(
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
  else if (g && jt(p, g))
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
    ), Ns(c, p);
  else if (yo(t, "onPending"), c.pendingBranch = p, p.shapeFlag & 512 ? c.pendingId = p.component.suspenseId : c.pendingId = Vi++, a(
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
    const { timeout: N, pendingId: v } = c;
    N > 0 ? setTimeout(() => {
      c.pendingId === v && c.fallback(m);
    }, N) : N === 0 && c.fallback(m);
  }
}
let Aa = !1;
function ld(e, t, n, s, o, r, i, l, a, f, u = !1) {
  C.NODE_ENV !== "production" && !Aa && (Aa = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: p,
    um: m,
    n: g,
    o: { parentNode: h, remove: I }
  } = f;
  let k;
  const N = Gm(e);
  N && t && t.pendingBranch && (k = t.pendingId, t.deps++);
  const v = e.props ? sr(e.props.timeout) : void 0;
  C.NODE_ENV !== "production" && hl(v, "Suspense timeout");
  const O = r, _ = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Vi++,
    timeout: typeof v == "number" ? v : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !u,
    isHydrating: u,
    isUnmounted: !1,
    effects: [],
    resolve(M = !1, S = !1) {
      if (C.NODE_ENV !== "production") {
        if (!M && !_.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (_.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: x,
        activeBranch: y,
        pendingBranch: D,
        pendingId: R,
        effects: P,
        parentComponent: $,
        container: T
      } = _;
      let A = !1;
      _.isHydrating ? _.isHydrating = !1 : M || (A = y && D.transition && D.transition.mode === "out-in", A && (y.transition.afterLeave = () => {
        R === _.pendingId && (p(
          D,
          T,
          r === O ? g(y) : r,
          0
        ), Cs(P));
      }), y && (h(y.el) === T && (r = g(y)), m(y, $, _, !0)), A || p(D, T, r, 0)), Ns(_, D), _.pendingBranch = null, _.isInFallback = !1;
      let L = _.parent, G = !1;
      for (; L; ) {
        if (L.pendingBranch) {
          L.effects.push(...P), G = !0;
          break;
        }
        L = L.parent;
      }
      !G && !A && Cs(P), _.effects = [], N && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !S && t.resolve()), yo(x, "onResolve");
    },
    fallback(M) {
      if (!_.pendingBranch)
        return;
      const { vnode: S, activeBranch: x, parentComponent: y, container: D, namespace: R } = _;
      yo(S, "onFallback");
      const P = g(x), $ = () => {
        _.isInFallback && (c(
          null,
          M,
          D,
          P,
          y,
          null,
          // fallback tree will not have suspense context
          R,
          l,
          a
        ), Ns(_, M));
      }, T = M.transition && M.transition.mode === "out-in";
      T && (x.transition.afterLeave = $), _.isInFallback = !0, m(
        x,
        y,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), T || $();
    },
    move(M, S, x) {
      _.activeBranch && p(_.activeBranch, M, S, x), _.container = M;
    },
    next() {
      return _.activeBranch && g(_.activeBranch);
    },
    registerDep(M, S, x) {
      const y = !!_.pendingBranch;
      y && _.deps++;
      const D = M.vnode.el;
      M.asyncDep.catch((R) => {
        Hn(R, M, 0);
      }).then((R) => {
        if (M.isUnmounted || _.isUnmounted || _.pendingId !== M.suspenseId)
          return;
        M.asyncResolved = !0;
        const { vnode: P } = M;
        C.NODE_ENV !== "production" && _s(P), Fi(M, R, !1), D && (P.el = D);
        const $ = !D && M.subTree.el;
        S(
          M,
          P,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          h(D || M.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          D ? null : g(M.subTree),
          _,
          i,
          x
        ), $ && I($), Kr(M, P.el), C.NODE_ENV !== "production" && Es(), y && --_.deps === 0 && _.resolve();
      });
    },
    unmount(M, S) {
      _.isUnmounted = !0, _.activeBranch && m(
        _.activeBranch,
        n,
        M,
        S
      ), _.pendingBranch && m(
        _.pendingBranch,
        n,
        M,
        S
      );
    }
  };
  return _;
}
function Wm(e, t, n, s, o, r, i, l, a) {
  const f = t.suspense = ld(
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
    f.pendingBranch = t.ssContent,
    n,
    f,
    r,
    i
  );
  return f.deps === 0 && f.resolve(!1, !0), u;
}
function Km(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Va(
    s ? n.default : n
  ), e.ssFallback = s ? Va(n.fallback) : ue(Ae);
}
function Va(e) {
  let t;
  if (oe(e)) {
    const n = ls && e._c;
    n && (e._d = !1, b()), e = e(), n && (e._d = !0, t = it, cd());
  }
  if (Q(e)) {
    const n = Wr(e);
    C.NODE_ENV !== "production" && !n && e.filter((s) => s !== xl).length > 0 && B("<Suspense> slots expect a single root node."), e = n;
  }
  return e = vt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function ad(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Cs(e);
}
function Ns(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, Kr(s, o));
}
function Gm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const re = Symbol.for("v-fgt"), on = Symbol.for("v-txt"), Ae = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), io = [];
let it = null;
function b(e = !1) {
  io.push(it = e ? null : []);
}
function cd() {
  io.pop(), it = io[io.length - 1] || null;
}
let ls = 1;
function Ii(e, t = !1) {
  ls += e, e < 0 && it && t && (it.hasOnce = !0);
}
function ud(e) {
  return e.dynamicChildren = ls > 0 ? it || bs : null, cd(), ls > 0 && it && it.push(e), e;
}
function w(e, t, n, s, o, r) {
  return ud(
    d(
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
function jt(e, t) {
  if (C.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Wo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Mi;
function Ym(e) {
  Mi = e;
}
const Jm = (...e) => fd(
  ...Mi ? Mi(e, Be) : e
), dd = ({ key: e }) => e ?? null, Yo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || Pe(e) || oe(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, s = 0, o = null, r = e === re ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dd(t),
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
  return l ? (Dl(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), C.NODE_ENV !== "production" && a.key !== a.key && B("VNode created with invalid key (NaN). VNode type:", a.type), ls > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  it && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && it.push(a), a;
}
const ue = C.NODE_ENV !== "production" ? Jm : fd;
function fd(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === xl) && (C.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = Ae), ln(e)) {
    const l = Rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Dl(l, n), ls > 0 && !r && it && (l.shapeFlag & 6 ? it[it.indexOf(e)] = l : it.push(l)), l.patchFlag = -2, l;
  }
  if (wd(e) && (e = e.__vccOpts), t) {
    t = pd(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = Ee(l)), ge(a) && (ks(a) && !Q(a) && (a = fe({}, a)), t.style = Ue(a));
  }
  const i = le(e) ? 1 : mr(e) ? 128 : bu(e) ? 64 : ge(e) ? 4 : oe(e) ? 2 : 0;
  return C.NODE_ENV !== "production" && i & 4 && ks(e) && (e = ce(e), B(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), d(
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
  return e ? ks(e) || Uu(e) ? fe({}, e) : e : null;
}
function Rt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, f = t ? md(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && dd(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Q(r) ? r.concat(Yo(t)) : [r, Yo(t)] : Yo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: C.NODE_ENV !== "production" && i === -1 && Q(l) ? l.map(hd) : l,
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
    ssContent: e.ssContent && Rt(e.ssContent),
    ssFallback: e.ssFallback && Rt(e.ssFallback),
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
function hd(e) {
  const t = Rt(e);
  return Q(e.children) && (t.children = e.children.map(hd)), t;
}
function je(e = " ", t = 0) {
  return ue(on, null, e, t);
}
function Fn(e, t) {
  const n = ue(Mn, null, e);
  return n.staticCount = t, n;
}
function j(e = "", t = !1) {
  return t ? (b(), ut(Ae, null, e)) : ue(Ae, null, e);
}
function vt(e) {
  return e == null || typeof e == "boolean" ? ue(Ae) : Q(e) ? ue(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ln(e) ? On(e) : ue(on, null, String(e));
}
function On(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Rt(e);
}
function Dl(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Dl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Uu(t) ? t._ctx = Be : o === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else oe(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [je(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function md(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Ee([t.class, s.class]));
      else if (o === "style")
        t.style = Ue([t.style, s.style]);
      else if (vn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(Q(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Et(e, t, n, s = null) {
  Pt(e, t, 7, [
    n,
    s
  ]);
}
const Xm = Fu();
let Qm = 0;
function gd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Xm, r = {
    uid: Qm++,
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
  return C.NODE_ENV !== "production" ? r.ctx = Gh(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Lm.bind(null, r), e.ce && e.ce(r), r;
}
let Ge = null;
const dt = () => Ge || Be;
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
    (n) => Ge = n
  ), Pi = t(
    "__VUE_SSR_SETTERS__",
    (n) => $s = n
  );
}
const as = (e) => {
  const t = Ge;
  return gr(e), e.scope.on(), () => {
    e.scope.off(), gr(t);
  };
}, Ri = () => {
  Ge && Ge.scope.off(), gr(null);
}, Zm = /* @__PURE__ */ Je("slot,component");
function Li(e, { isNativeTag: t }) {
  (Zm(e) || t(e)) && B(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vd(e) {
  return e.vnode.shapeFlag & 4;
}
let $s = !1;
function yd(e, t = !1, n = !1) {
  t && Pi(t);
  const { props: s, children: o } = e.vnode, r = vd(e);
  bm(e, s, r, t), Tm(e, o, n || t);
  const i = r ? e0(e, t) : void 0;
  return t && Pi(!1), i;
}
function e0(e, t) {
  var n;
  const s = e.type;
  if (C.NODE_ENV !== "production") {
    if (s.name && Li(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        Li(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        vu(r[i]);
    }
    s.compilerOptions && Al() && B(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, so), C.NODE_ENV !== "production" && Yh(e);
  const { setup: o } = s;
  if (o) {
    Gt();
    const r = e.setupContext = o.length > 1 ? Ed(e) : null, i = as(e), l = ds(
      o,
      e,
      0,
      [
        C.NODE_ENV !== "production" ? Ht(e.props) : e.props,
        r
      ]
    ), a = Tr(l);
    if (Yt(), i(), (a || e.sp) && !In(e) && El(e), a) {
      if (l.then(Ri, Ri), t)
        return l.then((f) => {
          Fi(e, f, t);
        }).catch((f) => {
          Hn(f, e, 0);
        });
      if (e.asyncDep = l, C.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = s.name) != null ? n : "Anonymous";
        B(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Fi(e, l, t);
  } else
    _d(e, t);
}
function Fi(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? (C.NODE_ENV !== "production" && ln(t) && B(
    "setup() should not return VNodes directly - return a render function instead."
  ), C.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = pl(t), C.NODE_ENV !== "production" && Jh(e)) : C.NODE_ENV !== "production" && t !== void 0 && B(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _d(e, n);
}
let lo, Bi;
function bd(e) {
  lo = e, Bi = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Kh));
  };
}
const Al = () => !lo;
function _d(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && lo && !s.render) {
      const o = s.template || Ol(e).template;
      if (o) {
        C.NODE_ENV !== "production" && cn(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, f = fe(
          fe(
            {
              isCustomElement: r,
              delimiters: l
            },
            i
          ),
          a
        );
        s.render = lo(o, f), C.NODE_ENV !== "production" && un(e, "compile");
      }
    }
    e.render = s.render || De, Bi && Bi(e);
  }
  {
    const o = as(e);
    Gt();
    try {
      dm(e);
    } finally {
      Yt(), o();
    }
  }
  C.NODE_ENV !== "production" && !s.render && e.render === De && !t && (!lo && s.template ? B(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : B("Component is missing template or render function: ", s));
}
const Ia = C.NODE_ENV !== "production" ? {
  get(e, t) {
    return hr(), We(e, "get", ""), e[t];
  },
  set() {
    return B("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return B("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return We(e, "get", ""), e[t];
  }
};
function t0(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return We(e, "get", "$slots"), t[n];
    }
  });
}
function Ed(e) {
  const t = (n) => {
    if (C.NODE_ENV !== "production" && (e.exposed && B("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Q(n) ? s = "array" : Pe(n) && (s = "ref")), s !== "object" && B(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (C.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ia));
      },
      get slots() {
        return s || (s = t0(e));
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(pl(ou(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ts)
        return ts[n](e);
    },
    has(t, n) {
      return n in t || n in ts;
    }
  })) : e.proxy;
}
const n0 = /(?:^|[-_])(\w)/g, s0 = (e) => e.replace(n0, (t) => t.toUpperCase()).replace(/[-_]/g, "");
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
  return s ? s0(s) : n ? "App" : "Anonymous";
}
function wd(e) {
  return oe(e) && "__vccOpts" in e;
}
const X = (e, t) => {
  const n = Kp(e, t, $s);
  if (C.NODE_ENV !== "production") {
    const s = dt();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function en(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ge(t) && !Q(t) ? ln(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ln(n) && (n = [n]), ue(e, t, n));
}
function xd() {
  if (C.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!ge(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (Pe(c)) {
        Gt();
        const p = c.value;
        return Yt(), [
          "div",
          {},
          ["span", e, u(c)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (mn(c))
          return [
            "div",
            {},
            ["span", e, lt(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${Jt(c) ? " (readonly)" : ""}`
          ];
        if (Jt(c))
          return [
            "div",
            {},
            ["span", e, lt(c) ? "ShallowReadonly" : "Readonly"],
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
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : ge(c) ? ["object", { object: p ? ce(c) : c }] : ["span", n, String(c)];
  }
  function a(c, p) {
    const m = c.type;
    if (oe(m))
      return;
    const g = {};
    for (const h in c.ctx)
      f(m, h, p) && (g[h] = c.ctx[h]);
    return g;
  }
  function f(c, p, m) {
    const g = c[m];
    if (Q(g) && g.includes(p) || ge(g) && p in g || c.extends && f(c.extends, p, m) || c.mixins && c.mixins.some((h) => f(h, p, m)))
      return !0;
  }
  function u(c) {
    return lt(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function o0(e, t, n, s) {
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
    if (mt(n[s], t[s]))
      return !1;
  return ls > 0 && it && it.push(e), !0;
}
const ji = "3.5.18", Ie = C.NODE_ENV !== "production" ? B : De, r0 = Fr, i0 = Bt, l0 = gl, a0 = {
  createComponentInstance: gd,
  setupComponent: yd,
  renderComponentRoot: Go,
  setCurrentRenderingInstance: go,
  isVNode: ln,
  normalizeVNode: vt,
  getComponentPublicInstance: $o,
  ensureValidVNode: kl,
  pushWarningContext: _s,
  popWarningContext: Es
}, c0 = a0, u0 = null, d0 = null, f0 = null;
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
const Sd = Hi ? (e) => Hi.createHTML(e) : (e) => e, p0 = "http://www.w3.org/2000/svg", h0 = "http://www.w3.org/1998/Math/MathML", fn = typeof document < "u" ? document : null, Pa = fn && /* @__PURE__ */ fn.createElement("template"), m0 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? fn.createElementNS(p0, e) : t === "mathml" ? fn.createElementNS(h0, e) : n ? fn.createElement(e, { is: n }) : fn.createElement(e);
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
      Pa.innerHTML = Sd(
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
}, wn = "transition", Ws = "animation", Ds = Symbol("_vtc"), kd = {
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
), g0 = (e) => (e.displayName = "Transition", e.props = Cd, e), rt = /* @__PURE__ */ g0(
  (e, { slots: t }) => en(Nu, Od(e), t)
), zn = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ra = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Od(e) {
  const t = {};
  for (const P in e)
    P in kd || (t[P] = e[P]);
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
    appearActiveClass: f = i,
    appearToClass: u = l,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, g = v0(o), h = g && g[0], I = g && g[1], {
    onBeforeEnter: k,
    onEnter: N,
    onEnterCancelled: v,
    onLeave: O,
    onLeaveCancelled: _,
    onBeforeAppear: M = k,
    onAppear: S = N,
    onAppearCancelled: x = v
  } = t, y = (P, $, T, A) => {
    P._enterCancelled = A, Nn(P, $ ? u : l), Nn(P, $ ? f : i), T && T();
  }, D = (P, $) => {
    P._isLeaving = !1, Nn(P, c), Nn(P, m), Nn(P, p), $ && $();
  }, R = (P) => ($, T) => {
    const A = P ? S : N, L = () => y($, P, T);
    zn(A, [$, L]), La(() => {
      Nn($, P ? a : r), Qt($, P ? u : l), Ra(A) || Fa($, s, h, L);
    });
  };
  return fe(t, {
    onBeforeEnter(P) {
      zn(k, [P]), Qt(P, r), Qt(P, i);
    },
    onBeforeAppear(P) {
      zn(M, [P]), Qt(P, a), Qt(P, f);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(P, $) {
      P._isLeaving = !0;
      const T = () => D(P, $);
      Qt(P, c), P._enterCancelled ? (Qt(P, p), Ui()) : (Ui(), Qt(P, p)), La(() => {
        P._isLeaving && (Nn(P, c), Qt(P, m), Ra(O) || Fa(P, s, I, T));
      }), zn(O, [P, T]);
    },
    onEnterCancelled(P) {
      y(P, !1, void 0, !0), zn(v, [P]);
    },
    onAppearCancelled(P) {
      y(P, !0, void 0, !0), zn(x, [P]);
    },
    onLeaveCancelled(P) {
      D(P), zn(_, [P]);
    }
  });
}
function v0(e) {
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
let y0 = 0;
function Fa(e, t, n, s) {
  const o = e._endId = ++y0, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = $d(e, t);
  if (!i)
    return s();
  const f = i + "end";
  let u = 0;
  const c = () => {
    e.removeEventListener(f, p), r();
  }, p = (m) => {
    m.target === e && ++u >= a && c();
  };
  setTimeout(() => {
    u < a && c();
  }, l + 1), e.addEventListener(f, p);
}
function $d(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${wn}Delay`), r = s(`${wn}Duration`), i = Ba(o, r), l = s(`${Ws}Delay`), a = s(`${Ws}Duration`), f = Ba(l, a);
  let u = null, c = 0, p = 0;
  t === wn ? i > 0 && (u = wn, c = i, p = r.length) : t === Ws ? f > 0 && (u = Ws, c = f, p = a.length) : (c = Math.max(i, f), u = c > 0 ? i > f ? wn : Ws : null, p = u ? u === wn ? r.length : a.length : 0);
  const m = u === wn && /\b(transform|all)(,|$)/.test(
    s(`${wn}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
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
function b0(e, t, n) {
  const s = e[Ds];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vr = Symbol("_vod"), Td = Symbol("_vsh"), Vl = {
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
ke.NODE_ENV !== "production" && (Vl.name = "show");
function Ks(e, t) {
  e.style.display = t ? e[vr] : "none", e[Td] = !t;
}
function _0() {
  Vl.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Dd = Symbol(ke.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function E0(e) {
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
    o.observe(t.subTree.el.parentNode, { childList: !0 }), Lt(() => o.disconnect());
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
      const r = Bc(t[o]);
      n.setProperty(`--${o}`, r), s += `--${o}: ${r};`;
    }
    n[Dd] = s;
  }
}
const w0 = /(^|;)\s*display\s*:/;
function x0(e, t, n) {
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
      const i = s[Dd];
      i && (n += ";" + i), s.cssText = n, r = w0.test(n);
    }
  } else t && e.removeAttribute("style");
  vr in e && (e[vr] = r ? s.display : "", e[Td] && (s.display = "none"));
}
const N0 = /[^\\];\s*$/, Ha = /\s*!important$/;
function Jo(e, t, n) {
  if (Q(n))
    n.forEach((s) => Jo(e, t, s));
  else if (n == null && (n = ""), ke.NODE_ENV !== "production" && N0.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = S0(e, t);
    Ha.test(n) ? e.setProperty(
      ot(s),
      n.replace(Ha, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ua = ["Webkit", "Moz", "ms"], mi = {};
function S0(e, t) {
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
function za(e, t, n, s, o, r = ap(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qa, t.slice(6, t.length)) : e.setAttributeNS(qa, t, n) : n == null || r && !ll(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Nt(n) ? String(n) : n
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
function k0(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ka = Symbol("_vei");
function C0(e, t, n, s, o = null) {
  const r = e[Ka] || (e[Ka] = {}), i = r[t];
  if (s && i)
    i.value = ke.NODE_ENV !== "production" ? Ya(s, t) : s;
  else {
    const [l, a] = O0(t);
    if (s) {
      const f = r[t] = D0(
        ke.NODE_ENV !== "production" ? Ya(s, t) : s,
        o
      );
      hn(e, l, f, a);
    } else i && (k0(e, l, i, a), r[t] = void 0);
  }
}
const Ga = /(?:Once|Passive|Capture)$/;
function O0(e) {
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
const $0 = /* @__PURE__ */ Promise.resolve(), T0 = () => gi || ($0.then(() => gi = 0), gi = Date.now());
function D0(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Pt(
      A0(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = T0(), n;
}
function Ya(e, t) {
  return oe(e) || Q(e) ? e : (Ie(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), De);
}
function A0(e, t) {
  if (Q(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, V0 = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? b0(e, s, i) : t === "style" ? x0(e, n, s) : vn(t) ? tr(t) || C0(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : I0(e, t, s, i)) ? (Wa(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && za(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Wa(e, Ce(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), za(e, t, s, i));
};
function I0(e, t, n, s) {
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
function qe(e, t, n) {
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
const M0 = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ qe(e, t, jd), P0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Yr extends P0 {
  constructor(t, n = {}, s = At) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== At ? this._root = this.shadowRoot : (ke.NODE_ENV !== "production" && this.shadowRoot && Ie(
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
      if (r && !Q(r))
        for (const a in r) {
          const f = r[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = sr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ce(a)] = !0);
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
        ye(this, s) ? ke.NODE_ENV !== "production" && Ie(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ko(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = Q(n) ? n : Object.keys(n || {});
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
    this._app && (t.appContext = this._app._context), Bd(t, this._root);
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
            const f = n + "-s", u = document.createTreeWalker(a, 1);
            a.setAttribute(f, "");
            let c;
            for (; c = u.nextNode(); )
              c.setAttribute(f, "");
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
function R0() {
  const e = ke.NODE_ENV !== "production" ? zi("useShadowRoot") : zi();
  return e && e.shadowRoot;
}
function L0(e = "$style") {
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
const Ad = /* @__PURE__ */ new WeakMap(), Vd = /* @__PURE__ */ new WeakMap(), br = Symbol("_moveCb"), Qa = Symbol("_enterCb"), F0 = (e) => (delete e.props.mode, e), B0 = /* @__PURE__ */ F0({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, Cd, {
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
      if (!z0(
        o[0].el,
        n.vnode.el,
        i
      )) {
        o = [];
        return;
      }
      o.forEach(H0), o.forEach(U0);
      const l = o.filter(q0);
      Ui(), l.forEach((a) => {
        const f = a.el, u = f.style;
        Qt(f, i), u.transform = u.webkitTransform = u.transitionDuration = "";
        const c = f[br] = (p) => {
          p && p.target !== f || (!p || /transform$/.test(p.propertyName)) && (f.removeEventListener("transitionend", c), f[br] = null, Nn(f, i));
        };
        f.addEventListener("transitionend", c);
      }), o = [];
    }), () => {
      const i = ce(e), l = Od(i);
      let a = i.tag || re;
      if (o = [], r)
        for (let f = 0; f < r.length; f++) {
          const u = r[f];
          u.el && u.el instanceof Element && (o.push(u), yn(
            u,
            Os(
              u,
              l,
              s,
              n
            )
          ), Ad.set(
            u,
            u.el.getBoundingClientRect()
          ));
        }
      r = t.default ? Hr(t.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const u = r[f];
        u.key != null ? yn(
          u,
          Os(u, l, s, n)
        ) : ke.NODE_ENV !== "production" && u.type !== on && Ie("<TransitionGroup> children must be keyed.");
      }
      return ue(a, null, r);
    };
  }
}), j0 = B0;
function H0(e) {
  const t = e.el;
  t[br] && t[br](), t[Qa] && t[Qa]();
}
function U0(e) {
  Vd.set(e, e.el.getBoundingClientRect());
}
function q0(e) {
  const t = Ad.get(e), n = Vd.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${o}px)`, r.transitionDuration = "0s", e;
  }
}
function z0(e, t, n) {
  const s = e.cloneNode(), o = e[Ds];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: i } = $d(s);
  return r.removeChild(s), i;
}
const Bn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Tn(t, n) : t;
};
function W0(e) {
  e.target.composing = !0;
}
function Za(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const It = Symbol("_assign"), jn = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[It] = Bn(o);
    const r = s || o.props && o.props.type === "number";
    hn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = nr(l)), e[It](l);
    }), n && hn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (hn(e, "compositionstart", W0), hn(e, "compositionend", Za), hn(e, "change", Za));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[It] = Bn(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? nr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Le = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[It] = Bn(n), hn(e, "change", () => {
      const s = e._modelValue, o = Vs(e), r = e.checked, i = e[It];
      if (Q(s)) {
        const l = Vr(s, o), a = l !== -1;
        if (r && !a)
          i(s.concat(o));
        else if (!r && a) {
          const f = [...s];
          f.splice(l, 1), i(f);
        }
      } else if (us(s)) {
        const l = new Set(s);
        r ? l.add(o) : l.delete(o), i(l);
      } else
        i(Id(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ec,
  beforeUpdate(e, t, n) {
    e[It] = Bn(n), ec(e, t, n);
  }
};
function ec(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (Q(t))
    o = Vr(t, s.props.value) > -1;
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
    e.checked = Rn(t, n.props.value), e[It] = Bn(n), hn(e, "change", () => {
      e[It](Vs(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[It] = Bn(s), t !== n && (e.checked = Rn(t, s.props.value));
  }
}, As = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = us(t);
    hn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? nr(Vs(i)) : Vs(i)
      );
      e[It](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ln(() => {
        e._assigning = !1;
      });
    }), e[It] = Bn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    tc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[It] = Bn(n);
  },
  updated(e, { value: t }) {
    e._assigning || tc(e, t);
  }
};
function tc(e, t) {
  const n = e.multiple, s = Q(t);
  if (n && !s && !us(t)) {
    ke.NODE_ENV !== "production" && Ie(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = Vs(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((f) => String(f) === String(l)) : i.selected = Vr(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (Rn(Vs(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Vs(e) {
  return "_value" in e ? e._value : e.value;
}
function Id(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Md = {
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
function Pd(e, t) {
  switch (e) {
    case "SELECT":
      return As;
    case "TEXTAREA":
      return jn;
    default:
      switch (t) {
        case "checkbox":
          return Le;
        case "radio":
          return Il;
        default:
          return jn;
      }
  }
}
function jo(e, t, n, s, o) {
  const i = Pd(
    e.tagName,
    n.props && n.props.type
  )[o];
  i && i(e, t, n, s);
}
function K0() {
  jn.getSSRProps = ({ value: e }) => ({ value: e }), Il.getSSRProps = ({ value: e }, t) => {
    if (t.props && Rn(t.props.value, e))
      return { checked: !0 };
  }, Le.getSSRProps = ({ value: e }, t) => {
    if (Q(e)) {
      if (t.props && Vr(e, t.props.value) > -1)
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
const G0 = ["ctrl", "shift", "alt", "meta"], Y0 = {
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
  exact: (e, t) => G0.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ot = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = Y0[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  });
}, J0 = {
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
      (i) => i === r || J0[i] === r
    ))
      return e(o);
  });
}, Rd = /* @__PURE__ */ fe({ patchProp: V0 }, m0);
let ao, nc = !1;
function Ld() {
  return ao || (ao = Yu(Rd));
}
function Fd() {
  return ao = nc ? ao : Ju(Rd), nc = !0, ao;
}
const Bd = (...e) => {
  Ld().render(...e);
}, X0 = (...e) => {
  Fd().hydrate(...e);
}, At = (...e) => {
  const t = Ld().createApp(...e);
  ke.NODE_ENV !== "production" && (Ud(t), qd(t));
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
  ke.NODE_ENV !== "production" && (Ud(t), qd(t));
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
  if (Al()) {
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
    return ke.NODE_ENV !== "production" && !t && Ie(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ke.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ie(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let sc = !1;
const Q0 = () => {
  sc || (sc = !0, K0(), _0());
}, Z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Nu,
  BaseTransitionPropsValidators: bl,
  Comment: Ae,
  DeprecationTypes: f0,
  EffectScope: al,
  ErrorCodes: nh,
  ErrorTypeStrings: r0,
  Fragment: re,
  KeepAlive: Bh,
  ReactiveEffect: fo,
  Static: Mn,
  Suspense: Um,
  Teleport: bn,
  Text: on,
  TrackOpTypes: Gp,
  Transition: rt,
  TransitionGroup: j0,
  TriggerOpTypes: Yp,
  VueElement: Yr,
  assertNumber: hl,
  callWithAsyncErrorHandling: Pt,
  callWithErrorHandling: ds,
  camelize: Ce,
  capitalize: rn,
  cloneVNode: Rt,
  compatUtils: d0,
  computed: X,
  createApp: At,
  createBlock: ut,
  createCommentVNode: j,
  createElementBlock: w,
  createElementVNode: d,
  createHydrationRenderer: Ju,
  createPropsRestProxy: am,
  createRenderer: Yu,
  createSSRApp: jd,
  createSlots: zh,
  createStaticVNode: Fn,
  createTextVNode: je,
  createVNode: ue,
  customRef: lu,
  defineAsyncComponent: Lh,
  defineComponent: _l,
  defineCustomElement: qe,
  defineEmits: Qh,
  defineExpose: Zh,
  defineModel: nm,
  defineOptions: em,
  defineProps: Xh,
  defineSSRCustomElement: M0,
  defineSlots: tm,
  devtools: i0,
  effect: vp,
  effectScope: mp,
  getCurrentInstance: dt,
  getCurrentScope: cl,
  getCurrentWatcher: Jp,
  getTransitionRawChildren: Hr,
  guardReactiveProps: pd,
  h: en,
  handleError: Hn,
  hasInjectionContext: ym,
  hydrate: X0,
  hydrateOnIdle: Ah,
  hydrateOnInteraction: Ph,
  hydrateOnMediaQuery: Mh,
  hydrateOnVisible: Ih,
  initCustomFormatter: xd,
  initDirectivesForSSR: Q0,
  inject: oo,
  isMemoSame: Nd,
  isProxy: ks,
  isReactive: mn,
  isReadonly: Jt,
  isRef: Pe,
  isRuntimeOnly: Al,
  isShallow: lt,
  isVNode: ln,
  markRaw: ou,
  mergeDefaults: im,
  mergeModels: lm,
  mergeProps: md,
  nextTick: Ln,
  normalizeClass: Ee,
  normalizeProps: np,
  normalizeStyle: Ue,
  onActivated: $u,
  onBeforeMount: Au,
  onBeforeUnmount: js,
  onBeforeUpdate: wl,
  onDeactivated: Tu,
  onErrorCaptured: Pu,
  onMounted: He,
  onRenderTracked: Mu,
  onRenderTriggered: Iu,
  onScopeDispose: jc,
  onServerPrefetch: Vu,
  onUnmounted: Lt,
  onUpdated: qr,
  onWatcherCleanup: cu,
  openBlock: b,
  popScopeId: yh,
  provide: Bu,
  proxyRefs: pl,
  pushScopeId: vh,
  queuePostFlushCb: Cs,
  reactive: Ss,
  readonly: Rr,
  ref: K,
  registerRuntimeCompiler: bd,
  render: Bd,
  renderList: he,
  renderSlot: fs,
  resolveComponent: Uh,
  resolveDirective: qh,
  resolveDynamicComponent: Nl,
  resolveFilter: u0,
  resolveTransitionHooks: Os,
  setBlockTracking: Ii,
  setDevtoolsHook: l0,
  setTransitionHooks: yn,
  shallowReactive: su,
  shallowReadonly: Ht,
  shallowRef: ru,
  ssrContextKey: ed,
  ssrUtils: c0,
  stop: yp,
  toDisplayString: q,
  toHandlerKey: nn,
  toHandlers: Wh,
  toRaw: ce,
  toRef: zp,
  toRefs: Hp,
  toValue: Fp,
  transformVNodeArgs: Ym,
  triggerRef: Lp,
  unref: ko,
  useAttrs: rm,
  useCssModule: L0,
  useCssVars: E0,
  useHost: zi,
  useId: wh,
  useModel: Rm,
  useSSRContext: td,
  useShadowRoot: R0,
  useSlots: om,
  useTemplateRef: xh,
  useTransitionState: yl,
  vModelCheckbox: Le,
  vModelDynamic: Md,
  vModelRadio: Il,
  vModelSelect: As,
  vModelText: jn,
  vShow: Vl,
  version: ji,
  warn: Ie,
  watch: Wt,
  watchEffect: Im,
  watchPostEffect: Mm,
  watchSyncEffect: nd,
  withAsyncContext: cm,
  withCtx: Me,
  withDefaults: sm,
  withDirectives: $e,
  withKeys: _r,
  withMemo: o0,
  withModifiers: Ot,
  withScopeId: bh
}, Symbol.toStringTag, { value: "Module" }));
var Z = {};
const bo = Symbol(Z.NODE_ENV !== "production" ? "Fragment" : ""), co = Symbol(Z.NODE_ENV !== "production" ? "Teleport" : ""), Ml = Symbol(Z.NODE_ENV !== "production" ? "Suspense" : ""), Er = Symbol(Z.NODE_ENV !== "production" ? "KeepAlive" : ""), Wd = Symbol(
  Z.NODE_ENV !== "production" ? "BaseTransition" : ""
), cs = Symbol(Z.NODE_ENV !== "production" ? "openBlock" : ""), Kd = Symbol(Z.NODE_ENV !== "production" ? "createBlock" : ""), Gd = Symbol(
  Z.NODE_ENV !== "production" ? "createElementBlock" : ""
), Pl = Symbol(Z.NODE_ENV !== "production" ? "createVNode" : ""), Rl = Symbol(
  Z.NODE_ENV !== "production" ? "createElementVNode" : ""
), To = Symbol(
  Z.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Ll = Symbol(
  Z.NODE_ENV !== "production" ? "createTextVNode" : ""
), Yd = Symbol(
  Z.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Fl = Symbol(
  Z.NODE_ENV !== "production" ? "resolveComponent" : ""
), Bl = Symbol(
  Z.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), jl = Symbol(
  Z.NODE_ENV !== "production" ? "resolveDirective" : ""
), Hl = Symbol(
  Z.NODE_ENV !== "production" ? "resolveFilter" : ""
), Ul = Symbol(
  Z.NODE_ENV !== "production" ? "withDirectives" : ""
), ql = Symbol(Z.NODE_ENV !== "production" ? "renderList" : ""), Jd = Symbol(Z.NODE_ENV !== "production" ? "renderSlot" : ""), Xd = Symbol(Z.NODE_ENV !== "production" ? "createSlots" : ""), Jr = Symbol(
  Z.NODE_ENV !== "production" ? "toDisplayString" : ""
), wr = Symbol(Z.NODE_ENV !== "production" ? "mergeProps" : ""), zl = Symbol(
  Z.NODE_ENV !== "production" ? "normalizeClass" : ""
), Wl = Symbol(
  Z.NODE_ENV !== "production" ? "normalizeStyle" : ""
), _o = Symbol(
  Z.NODE_ENV !== "production" ? "normalizeProps" : ""
), Do = Symbol(
  Z.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Kl = Symbol(Z.NODE_ENV !== "production" ? "toHandlers" : ""), Wi = Symbol(Z.NODE_ENV !== "production" ? "camelize" : ""), eg = Symbol(Z.NODE_ENV !== "production" ? "capitalize" : ""), Ki = Symbol(
  Z.NODE_ENV !== "production" ? "toHandlerKey" : ""
), xr = Symbol(
  Z.NODE_ENV !== "production" ? "setBlockTracking" : ""
), tg = Symbol(Z.NODE_ENV !== "production" ? "pushScopeId" : ""), ng = Symbol(Z.NODE_ENV !== "production" ? "popScopeId" : ""), Gl = Symbol(Z.NODE_ENV !== "production" ? "withCtx" : ""), sg = Symbol(Z.NODE_ENV !== "production" ? "unref" : ""), og = Symbol(Z.NODE_ENV !== "production" ? "isRef" : ""), Yl = Symbol(Z.NODE_ENV !== "production" ? "withMemo" : ""), Qd = Symbol(Z.NODE_ENV !== "production" ? "isMemoSame" : ""), Is = {
  [bo]: "Fragment",
  [co]: "Teleport",
  [Ml]: "Suspense",
  [Er]: "KeepAlive",
  [Wd]: "BaseTransition",
  [cs]: "openBlock",
  [Kd]: "createBlock",
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
  [Jr]: "toDisplayString",
  [wr]: "mergeProps",
  [zl]: "normalizeClass",
  [Wl]: "normalizeStyle",
  [_o]: "normalizeProps",
  [Do]: "guardReactiveProps",
  [Kl]: "toHandlers",
  [Wi]: "camelize",
  [eg]: "capitalize",
  [Ki]: "toHandlerKey",
  [xr]: "setBlockTracking",
  [tg]: "pushScopeId",
  [ng]: "popScopeId",
  [Gl]: "withCtx",
  [sg]: "unref",
  [og]: "isRef",
  [Yl]: "withMemo",
  [Qd]: "isMemoSame"
};
function rg(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Is[t] = e[t];
  });
}
const $t = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function ig(e, t = "") {
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
function Eo(e, t, n, s, o, r, i, l = !1, a = !1, f = !1, u = $t) {
  return e && (l ? (e.helper(cs), e.helper(Rs(e.inSSR, f))) : e.helper(Ps(e.inSSR, f)), i && e.helper(Ul)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: o,
    dynamicProps: r,
    directives: i,
    isBlock: l,
    disableTracking: a,
    isComponent: f,
    loc: u
  };
}
function ss(e, t = $t) {
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
function Ke(e, t = [], n = $t) {
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
function lg(e, t, n = !1, s = !1) {
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
function ag(e) {
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
  return e || t ? Kd : Gd;
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
const Qe = {
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
class cg {
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
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Qe.TitleEnd || this.currentSequence === Qe.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Qe.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Qe.Cdata.length && (this.state = 28, this.currentSequence = Qe.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
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
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Qe.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
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
    kt(t) || (t === 62 ? (Z.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = ic(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || kt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, Z.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : kt(t) || (Z.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
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
    t === 61 || xn(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : Z.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
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
    t === 93 ? this.state = 14 : (t === 61 || xn(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), Z.NODE_ENV !== "production" && this.cbs.onerr(
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
    kt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (Z.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
    t === 45 ? (this.state = 28, this.currentSequence = Qe.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Qe.ScriptEnd[3] ? this.startSpecial(Qe.ScriptEnd, 4) : t === Qe.StyleEnd[3] ? this.startSpecial(Qe.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Qe.TitleEnd[3] ? this.startSpecial(Qe.TitleEnd, 4) : t === Qe.TextareaEnd[3] ? this.startSpecial(Qe.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
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
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Qe.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const ug = {
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
  return Z.NODE_ENV !== "production" && o && Sr(e, t, n, ...s), o;
}
function Sr(e, t, n, ...s) {
  if (Yi(e, t) === "suppress-warning")
    return;
  const { message: r, link: i } = ug[e], l = `(deprecation ${e}) ${typeof r == "function" ? r(...s) : r}${i ? `
  Details: ${i}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Xl(e) {
  throw e;
}
function Zd(e) {
  Z.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Se(e, t, n, s) {
  const o = Z.NODE_ENV !== "production" ? (n || dg)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(o));
  return r.code = e, r.loc = t, r;
}
const dg = {
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
function ef(e) {
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
      return Wd;
  }
}
const fg = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Ql = (e) => !fg.test(e), pg = /[A-Za-z_$\xA0-\uFFFF]/, hg = /[\.\?\w$\xA0-\uFFFF]/, mg = /\s+[.[]\s*|\s*[.[]\s+/g, tf = (e) => e.type === 4 ? e.content : e.loc.source, gg = (e) => {
  const t = tf(e).trim().replace(mg, (l) => l.trim());
  let n = 0, s = [], o = 0, r = 0, i = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, r++;
        else if (!(l === 0 ? pg : hg).test(a))
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
}, nf = gg, vg = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, yg = (e) => vg.test(tf(e)), bg = yg;
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
    } else if (r.name === "bind" && (r.exp || s) && An(r.arg, t))
      return r;
  }
}
function An(e, t) {
  return !!(e && xt(e) && e.content === t);
}
function _g(e) {
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
function Eg(e) {
  return e.type === 7 && e.name === "slot";
}
function kr(e) {
  return e.type === 1 && e.tagType === 3;
}
function Cr(e) {
  return e.type === 1 && e.tagType === 2;
}
const wg = /* @__PURE__ */ new Set([_o, Do]);
function sf(e, t = []) {
  if (e && !le(e) && e.type === 14) {
    const n = e.callee;
    if (!le(n) && wg.has(n))
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
    !le(l) && l.type === 15 ? cc(t, l) || l.properties.unshift(t) : o.callee === Kl ? s = Ke(n.helper(wr), [
      Vt([t]),
      o
    ]) : o.arguments.unshift(Vt([t])), !s && (s = o);
  } else o.type === 15 ? (cc(t, o) || o.properties.unshift(t), s = o) : (s = Ke(n.helper(wr), [
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
function xg(e) {
  return e.type === 14 && e.callee === Yl ? e.arguments[1].returns : e;
}
const Ng = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, of = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Gs,
  isPreTag: Gs,
  isIgnoreNewlineTag: Gs,
  isCustomElement: Gs,
  onError: Xl,
  onWarn: Zd,
  comments: Z.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let be = of, No = null, gn = "", st = null, me = null, _t = "", dn = -1, Wn = -1, Zl = 0, $n = !1, Ji = null;
const Ve = [], Te = new cg(Ve, {
  onerr: bt,
  ontext(e, t) {
    Ho(Ze(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Ho(e, t, n);
  },
  oninterpolation(e, t) {
    if ($n)
      return Ho(Ze(e, t), e, t);
    let n = e + Te.delimiterOpen.length, s = t - Te.delimiterClose.length;
    for (; kt(gn.charCodeAt(n)); )
      n++;
    for (; kt(gn.charCodeAt(s - 1)); )
      s--;
    let o = Ze(n, s);
    o.includes("&") && (o = be.decodeEntities(o, !1)), Xi({
      type: 5,
      content: Qo(o, !1, Fe(n, s)),
      loc: Fe(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Ze(e, t);
    st = {
      type: 1,
      tag: n,
      ns: be.getNamespace(n, Ve[0], be.ns),
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
    const n = Ze(e, t);
    if (!be.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < Ve.length; o++)
        if (Ve[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && bt(24, Ve[0].loc.start.offset);
          for (let i = 0; i <= o; i++) {
            const l = Ve.shift();
            Xo(l, t, i < o);
          }
          break;
        }
      s || bt(23, rf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = st.tag;
    st.isSelfClosing = !0, dc(e), Ve[0] && Ve[0].tag === t && Xo(Ve.shift(), e);
  },
  onattribname(e, t) {
    me = {
      type: 6,
      name: Ze(e, t),
      nameLoc: Fe(e, t),
      value: void 0,
      loc: Fe(e)
    };
  },
  ondirname(e, t) {
    const n = Ze(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!$n && s === "" && bt(26, e), $n || s === "")
      me = {
        type: 6,
        name: n,
        nameLoc: Fe(e, t),
        value: void 0,
        loc: Fe(e)
      };
    else if (me = {
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
        o[r].type === 7 && (o[r] = Mg(o[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Ze(e, t);
    if ($n && !ac(me))
      me.name += n, Yn(me.nameLoc, t);
    else {
      const s = n[0] !== "[";
      me.arg = Qo(
        s ? n : n.slice(1, -1),
        s,
        Fe(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Ze(e, t);
    if ($n && !ac(me))
      me.name += "." + n, Yn(me.nameLoc, t);
    else if (me.name === "slot") {
      const s = me.arg;
      s && (s.content += "." + n, Yn(s.loc, t));
    } else {
      const s = de(n, !0, Fe(e, t));
      me.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    _t += Ze(e, t), dn < 0 && (dn = e), Wn = t;
  },
  onattribentity(e, t, n) {
    _t += e, dn < 0 && (dn = t), Wn = n;
  },
  onattribnameend(e) {
    const t = me.loc.start.offset, n = Ze(t, e);
    me.type === 7 && (me.rawName = n), st.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && bt(2, t);
  },
  onattribend(e, t) {
    if (st && me) {
      if (Yn(me.loc, t), e !== 0)
        if (_t.includes("&") && (_t = be.decodeEntities(
          _t,
          !0
        )), me.type === 6)
          me.name === "class" && (_t = af(_t).trim()), e === 1 && !_t && bt(13, t), me.value = {
            type: 2,
            content: _t,
            loc: e === 1 ? Fe(dn, Wn) : Fe(dn - 1, Wn + 1)
          }, Te.inSFCRoot && st.tag === "template" && me.name === "lang" && _t && _t !== "html" && Te.enterRCDATA(Nr("</template"), 0);
        else {
          let n = 0;
          me.exp = Qo(
            _t,
            !1,
            Fe(dn, Wn),
            0,
            n
          ), me.name === "for" && (me.forParseResult = kg(me.exp));
          let s = -1;
          me.name === "bind" && (s = me.modifiers.findIndex(
            (o) => o.content === "sync"
          )) > -1 && Ls(
            "COMPILER_V_BIND_SYNC",
            be,
            me.loc,
            me.arg.loc.source
          ) && (me.name = "model", me.modifiers.splice(s, 1));
        }
      (me.type !== 7 || me.name !== "pre") && st.props.push(me);
    }
    _t = "", dn = Wn = -1;
  },
  oncomment(e, t) {
    be.comments && Xi({
      type: 3,
      content: Ze(e, t),
      loc: Fe(e - 4, t + 3)
    });
  },
  onend() {
    const e = gn.length;
    if (Z.NODE_ENV !== "production" && Te.state !== 1)
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
          Te.currentSequence === Qe.CdataEnd ? bt(6, e) : bt(7, e);
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
    for (let t = 0; t < Ve.length; t++)
      Xo(Ve[t], e - 1), bt(24, Ve[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ve[0].ns !== 0 ? Ho(Ze(e, t), e, t) : bt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ve[0] ? Ve[0].ns : be.ns) === 0 && bt(
      21,
      e - 1
    );
  }
}), uc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Sg = /^\(|\)$/g;
function kg(e) {
  const t = e.loc, n = e.content, s = n.match(Ng);
  if (!s) return;
  const [, o, r] = s, i = (c, p, m = !1) => {
    const g = t.start.offset + p, h = g + c.length;
    return Qo(
      c,
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
  let a = o.trim().replace(Sg, "").trim();
  const f = o.indexOf(a), u = a.match(uc);
  if (u) {
    a = a.replace(uc, "").trim();
    const c = u[1].trim();
    let p;
    if (c && (p = n.indexOf(c, f + a.length), l.key = i(c, p, !0)), u[2]) {
      const m = u[2].trim();
      m && (l.index = i(
        m,
        n.indexOf(
          m,
          l.key ? p + c.length : f + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = i(a, f, !0)), l;
}
function Ze(e, t) {
  return gn.slice(e, t);
}
function dc(e) {
  Te.inSFCRoot && (st.innerLoc = Fe(e + 1, e + 1)), Xi(st);
  const { tag: t, ns: n } = st;
  n === 0 && be.isPreTag(t) && Zl++, be.isVoidTag(t) ? Xo(st, e) : (Ve.unshift(st), (n === 1 || n === 2) && (Te.inXML = !0)), st = null;
}
function Ho(e, t, n) {
  {
    const r = Ve[0] && Ve[0].tag;
    r !== "script" && r !== "style" && e.includes("&") && (e = be.decodeEntities(e, !1));
  }
  const s = Ve[0] || No, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Yn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Fe(t, n)
  });
}
function Xo(e, t, n = !1) {
  n ? Yn(e.loc, rf(t, 60)) : Yn(e.loc, Cg(t, 62) + 1), Te.inSFCRoot && (e.children.length ? e.innerLoc.end = fe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = fe({}, e.innerLoc.start), e.innerLoc.source = Ze(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: r } = e;
  if ($n || (s === "slot" ? e.tagType = 2 : fc(e) ? e.tagType = 3 : $g(e) && (e.tagType = 1)), Te.inRCDATA || (e.children = lf(r)), o === 0 && be.isIgnoreNewlineTag(s)) {
    const i = r[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  o === 0 && be.isPreTag(s) && Zl--, Ji === e && ($n = Te.inVPre = !1, Ji = null), Te.inXML && (Ve[0] ? Ve[0].ns : be.ns) === 0 && (Te.inXML = !1);
  {
    const i = e.props;
    if (Z.NODE_ENV !== "production" && Pn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      be
    )) {
      let a = !1, f = !1;
      for (let u = 0; u < i.length; u++) {
        const c = i[u];
        if (c.type === 7 && (c.name === "if" ? a = !0 : c.name === "for" && (f = !0)), a && f) {
          Sr(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            be,
            e.loc
          );
          break;
        }
      }
    }
    if (!Te.inSFCRoot && Pn(
      "COMPILER_NATIVE_TEMPLATE",
      be
    ) && e.tag === "template" && !fc(e)) {
      Z.NODE_ENV !== "production" && Sr(
        "COMPILER_NATIVE_TEMPLATE",
        be,
        e.loc
      );
      const a = Ve[0] || No, f = a.children.indexOf(e);
      a.children.splice(f, 1, ...e.children);
    }
    const l = i.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Ls(
      "COMPILER_INLINE_TEMPLATE",
      be,
      l.loc
    ) && e.children.length && (l.value = {
      type: 2,
      content: Ze(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function Cg(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n < gn.length - 1; ) n++;
  return n;
}
function rf(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const Og = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function fc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && Og.has(t[n].name))
        return !0;
  }
  return !1;
}
function $g({ tag: e, props: t }) {
  if (be.isCustomElement(e))
    return !1;
  if (e === "component" || Tg(e.charCodeAt(0)) || ef(e) || be.isBuiltInComponent && be.isBuiltInComponent(e) || be.isNativeTag && !be.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (Ls(
          "COMPILER_IS_ON_ELEMENT",
          be,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && An(s.arg, "is") && Ls(
        "COMPILER_IS_ON_ELEMENT",
        be,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function Tg(e) {
  return e > 64 && e < 91;
}
const Dg = /\r\n/g;
function lf(e) {
  const t = be.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (Zl)
        o.content = o.content.replace(Dg, `
`);
      else if (Ag(o.content)) {
        const r = e[s - 1] && e[s - 1].type, i = e[s + 1] && e[s + 1].type;
        !r || !i || t && (r === 3 && (i === 3 || i === 1) || r === 1 && (i === 3 || i === 1 && Vg(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = af(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function Ag(e) {
  for (let t = 0; t < e.length; t++)
    if (!kt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function Vg(e) {
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
    kt(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Xi(e) {
  (Ve[0] || No).children.push(e);
}
function Fe(e, t) {
  return {
    start: Te.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : Te.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Ze(e, t)
  };
}
function Ig(e) {
  return Fe(e.start.offset, e.end.offset);
}
function Yn(e, t) {
  e.end = Te.getPos(t), e.source = Ze(e.start.offset, t);
}
function Mg(e) {
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
  be.onError(
    Se(e, Fe(t, t), void 0, n)
  );
}
function Pg() {
  Te.reset(), st = null, me = null, _t = "", dn = -1, Wn = -1, Ve.length = 0;
}
function Rg(e, t) {
  if (Pg(), gn = e, be = fe({}, of), t) {
    let o;
    for (o in t)
      t[o] != null && (be[o] = t[o]);
  }
  if (Z.NODE_ENV !== "production" && !be.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  Te.mode = be.parseMode === "html" ? 1 : be.parseMode === "sfc" ? 2 : 0, Te.inXML = be.ns === 1 || be.ns === 2;
  const n = t && t.delimiters;
  n && (Te.delimiterOpen = Nr(n[0]), Te.delimiterClose = Nr(n[1]));
  const s = No = ig([], e);
  return Te.parse(gn), s.loc = Fe(0, e.length), s.children = lf(s.children), No = null, s;
}
function Lg(e, t) {
  Zo(
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
function Zo(e, t, n, s = !1, o = !1) {
  const { children: r } = e, i = [];
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
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
          if ((h === void 0 || h === 512 || h === 1) && df(p, n) >= 2) {
            const I = ff(p);
            I && (g.props = n.hoist(I));
          }
          g.dynamicProps && (g.dynamicProps = n.hoist(g.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : Ct(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (Z.NODE_ENV !== "production" ? ` /* ${eo[-1]} */` : "")
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
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && Q(e.codegenNode.children))
      e.codegenNode.children = f(
        ss(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Q(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const c = u(e.codegenNode, "default");
      c && (a.push(n.cached.length), c.returns = f(
        ss(c.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Q(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const c = wt(e, "slot", !0), p = c && c.arg && u(t.codegenNode, c.arg);
      p && (a.push(n.cached.length), p.returns = f(
        ss(p.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const c of i)
      a.push(n.cached.length), c.codegenNode = n.cache(c.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !Q(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Re(
      "__",
      de(JSON.stringify(a), !1)
    )
  );
  function f(c) {
    const p = n.cache(c);
    return o && n.hmr && (p.needArraySpread = !0), p;
  }
  function u(c, p) {
    if (c.children && !Q(c.children) && c.children.type === 15) {
      const m = c.children.properties.find(
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
        const l = df(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < i && (i = l);
        for (let a = 0; a < e.children.length; a++) {
          const f = Ct(e.children[a], t);
          if (f === 0)
            return n.set(e, 0), 0;
          f < i && (i = f);
        }
        if (i > 1)
          for (let a = 0; a < e.props.length; a++) {
            const f = e.props[a];
            if (f.type === 7 && f.name === "bind" && f.exp) {
              const u = Ct(f.exp, t);
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
const Fg = /* @__PURE__ */ new Set([
  zl,
  Wl,
  _o,
  Do
]);
function uf(e, t) {
  if (e.type === 14 && !le(e.callee) && Fg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return Ct(n, t);
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
      const { key: i, value: l } = o[r], a = Ct(i, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let f;
      if (l.type === 4 ? f = Ct(l, t) : l.type === 14 ? f = uf(l, t) : f = 0, f === 0)
        return f;
      f < n && (n = f);
    }
  }
  return n;
}
function ff(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function Bg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: r = !1,
  nodeTransforms: i = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: f = De,
  isCustomElement: u = De,
  expressionPlugins: c = [],
  scopeId: p = null,
  slotted: m = !0,
  ssr: g = !1,
  inSSR: h = !1,
  ssrCssVars: I = "",
  bindingMetadata: k = pe,
  inline: N = !1,
  isTS: v = !1,
  onError: O = Xl,
  onWarn: _ = Zd,
  compatConfig: M
}) {
  const S = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), x = {
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
    isBuiltInComponent: f,
    isCustomElement: u,
    expressionPlugins: c,
    scopeId: p,
    slotted: m,
    ssr: g,
    inSSR: h,
    ssrCssVars: I,
    bindingMetadata: k,
    inline: N,
    isTS: v,
    onError: O,
    onWarn: _,
    compatConfig: M,
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
      const D = x.helpers.get(y) || 0;
      return x.helpers.set(y, D + 1), y;
    },
    removeHelper(y) {
      const D = x.helpers.get(y);
      if (D) {
        const R = D - 1;
        R ? x.helpers.set(y, R) : x.helpers.delete(y);
      }
    },
    helperString(y) {
      return `_${Is[x.helper(y)]}`;
    },
    replaceNode(y) {
      if (Z.NODE_ENV !== "production") {
        if (!x.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!x.parent)
          throw new Error("Cannot replace root node.");
      }
      x.parent.children[x.childIndex] = x.currentNode = y;
    },
    removeNode(y) {
      if (Z.NODE_ENV !== "production" && !x.parent)
        throw new Error("Cannot remove root node.");
      const D = x.parent.children, R = y ? D.indexOf(y) : x.currentNode ? x.childIndex : -1;
      if (Z.NODE_ENV !== "production" && R < 0)
        throw new Error("node being removed is not a child of current parent");
      !y || y === x.currentNode ? (x.currentNode = null, x.onNodeRemoved()) : x.childIndex > R && (x.childIndex--, x.onNodeRemoved()), x.parent.children.splice(R, 1);
    },
    onNodeRemoved: De,
    addIdentifiers(y) {
    },
    removeIdentifiers(y) {
    },
    hoist(y) {
      le(y) && (y = de(y)), x.hoists.push(y);
      const D = de(
        `_hoisted_${x.hoists.length}`,
        !1,
        y.loc,
        2
      );
      return D.hoisted = y, D;
    },
    cache(y, D = !1, R = !1) {
      const P = lg(
        x.cached.length,
        y,
        D,
        R
      );
      return x.cached.push(P), P;
    }
  };
  return x.filters = /* @__PURE__ */ new Set(), x;
}
function jg(e, t) {
  const n = Bg(e, t);
  Xr(e, n), t.hoistStatic && Lg(e, n), t.ssr || Hg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Hg(e, t) {
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
    Z.NODE_ENV !== "production" && s.filter((r) => r.type !== 3).length === 1 && (o |= 2048), e.codegenNode = Eo(
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
function Ug(e, t) {
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
    if (i && (Q(i) ? s.push(...i) : s.push(i)), t.currentNode)
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
      Ug(e, t);
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
      if (s.tagType === 3 && r.some(Eg))
        return;
      const i = [];
      for (let l = 0; l < r.length; l++) {
        const a = r[l];
        if (a.type === 7 && n(a.name)) {
          r.splice(l, 1), l--;
          const f = t(s, a, o);
          f && i.push(f);
        }
      }
      return i;
    }
  };
}
const Qr = "/*@__PURE__*/", hf = (e) => `${Is[e]}: _${Is[e]}`;
function qg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: o = "template.vue.html",
  scopeId: r = null,
  optimizeImports: i = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: f = "vue/server-renderer",
  ssr: u = !1,
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
    ssrRuntimeModuleName: f,
    ssr: u,
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
    helper(h) {
      return `_${Is[h]}`;
    },
    push(h, I = -2, k) {
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
function zg(e, t = {}) {
  const n = qg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: o,
    prefixIdentifiers: r,
    indent: i,
    deindent: l,
    newline: a,
    scopeId: f,
    ssr: u
  } = n, c = Array.from(e.helpers), p = c.length > 0, m = !r && s !== "module";
  Wg(e, n);
  const h = u ? "ssrRender" : "render", k = (u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${h}(${k}) {`), i(), m && (o("with (_ctx) {"), i(), p && (o(
    `const { ${c.map(hf).join(", ")} } = _Vue
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
function Wg(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: o,
    newline: r,
    runtimeModuleName: i,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, f = l, u = Array.from(e.helpers);
  if (u.length > 0 && (o(
    `const _Vue = ${f}
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
    ].filter((p) => u.includes(p)).map(hf).join(", ");
    o(
      `const { ${c} } = _Vue
`,
      -1
      /* End */
    );
  }
  Kg(e.hoists, t), r(), o("return ");
}
function yi(e, t, { helper: n, push: s, newline: o, isTS: r }) {
  const i = n(
    t === "filter" ? Hl : t === "component" ? Fl : jl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const f = a.endsWith("__self");
    f && (a = a.slice(0, -6)), s(
      `const ${xo(a, t)} = ${i}(${JSON.stringify(a)}${f ? ", true" : ""})${r ? "!" : ""}`
    ), l < e.length - 1 && o();
  }
}
function Kg(e, t) {
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
function Gg(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function ea(e, t) {
  const n = e.length > 3 || Z.NODE_ENV !== "production" && e.some((s) => Q(s) || !Gg(s));
  t.push("["), n && t.indent(), Ao(e, t, n), n && t.deindent(), t.push("]");
}
function Ao(e, t, n = !1, s = !0) {
  const { push: o, newline: r } = t;
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    le(l) ? o(
      l,
      -3
      /* Unknown */
    ) : Q(l) ? ea(l, t) : at(l, t), i < e.length - 1 && (n ? (s && o(","), r()) : s && o(", "));
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
      Z.NODE_ENV !== "production" && lc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), at(e.codegenNode, t);
      break;
    case 2:
      Yg(e, t);
      break;
    case 4:
      mf(e, t);
      break;
    case 5:
      Jg(e, t);
      break;
    case 12:
      at(e.codegenNode, t);
      break;
    case 8:
      gf(e, t);
      break;
    case 3:
      Qg(e, t);
      break;
    case 13:
      Zg(e, t);
      break;
    case 14:
      tv(e, t);
      break;
    case 15:
      nv(e, t);
      break;
    case 17:
      sv(e, t);
      break;
    case 18:
      ov(e, t);
      break;
    case 19:
      rv(e, t);
      break;
    case 20:
      iv(e, t);
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
      if (Z.NODE_ENV !== "production")
        return lc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function Yg(e, t) {
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
function Jg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Qr), n(`${s(Jr)}(`), at(e.content, t), n(")");
}
function gf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    le(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : at(s, t);
  }
}
function Xg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), gf(e, t), n("]");
  else if (e.isStatic) {
    const s = Ql(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Qg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Qr), n(
    `${s(To)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Zg(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: r,
    props: i,
    children: l,
    patchFlag: a,
    dynamicProps: f,
    directives: u,
    isBlock: c,
    disableTracking: p,
    isComponent: m
  } = e;
  let g;
  if (a)
    if (Z.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${eo[a]} */`;
      else {
        const I = Object.keys(eo).map(Number).filter((k) => k > 0 && a & k).map((k) => eo[k]).join(", ");
        g = a + ` /* ${I} */`;
      }
    else
      g = String(a);
  u && n(s(Ul) + "("), c && n(`(${s(cs)}(${p ? "true" : ""}), `), o && n(Qr);
  const h = c ? Rs(t.inSSR, m) : Ps(t.inSSR, m);
  n(s(h) + "(", -2, e), Ao(
    ev([r, i, l, g, f]),
    t
  ), n(")"), c && n(")"), u && (n(", "), at(u, t), n(")"));
}
function ev(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function tv(e, t) {
  const { push: n, helper: s, pure: o } = t, r = le(e.callee) ? e.callee : s(e.callee);
  o && n(Qr), n(r + "(", -2, e), Ao(e.arguments, t), n(")");
}
function nv(e, t) {
  const { push: n, indent: s, deindent: o, newline: r } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const l = i.length > 1 || Z.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < i.length; a++) {
    const { key: f, value: u } = i[a];
    Xg(f, t), n(": "), at(u, t), a < i.length - 1 && (n(","), r());
  }
  l && o(), n(l ? "}" : " }");
}
function sv(e, t) {
  ea(e.elements, t);
}
function ov(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: r, returns: i, body: l, newline: a, isSlot: f } = e;
  f && n(`_${Is[Gl]}(`), n("(", -2, e), Q(r) ? Ao(r, t) : r && at(r, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), Q(i) ? ea(i, t) : at(i, t)) : l && at(l, t), (a || l) && (o(), n("}")), f && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function rv(e, t) {
  const { test: n, consequent: s, alternate: o, newline: r } = e, { push: i, indent: l, deindent: a, newline: f } = t;
  if (n.type === 4) {
    const c = !Ql(n.content);
    c && i("("), mf(n, t), c && i(")");
  } else
    i("("), at(n, t), i(")");
  r && l(), t.indentLevel++, r || i(" "), i("? "), at(s, t), t.indentLevel--, r && f(), r || i(" "), i(": ");
  const u = o.type === 19;
  u || t.indentLevel++, at(o, t), u || t.indentLevel--, r && a(
    !0
    /* without newline */
  );
}
function iv(e, t) {
  const { push: n, helper: s, indent: o, deindent: r, newline: i } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(xr)}(-1`), e.inVOnce && n(", true"), n("),"), i(), n("(")), n(`_cache[${e.index}] = `), at(e.value, t), l && (n(`).cacheIndex = ${e.index},`), i(), n(`${s(xr)}(1),`), i(), n(`_cache[${e.index}]`), r()), n(")"), a && n(")]");
}
const lv = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), av = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Jn(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (r) {
      let i = r.message;
      const l = o.replace(av, "").match(lv);
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
const cv = (e, t) => {
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
  return Z.NODE_ENV !== "production" && Jn(e, t, n, s), e;
}
const uv = pf(
  /^(if|else|else-if)$/,
  (e, t, n) => dv(e, t, n, (s, o, r) => {
    const i = n.parent.children;
    let l = i.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const f = i[l];
      f && f.type === 9 && (a += f.branches.length);
    }
    return () => {
      if (r)
        s.codegenNode = hc(
          o,
          a,
          n
        );
      else {
        const f = pv(s.codegenNode);
        f.alternate = hc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function dv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      Se(28, t.loc)
    ), t.exp = de("true", !1, o);
  }
  if (Z.NODE_ENV !== "production" && t.exp && Jn(t.exp, n), t.name === "if") {
    const o = pc(e, t), r = {
      type: 9,
      loc: Ig(e.loc),
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
        n.removeNode(l), Z.NODE_ENV !== "production" && r.unshift(l);
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
        if (Z.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...r, ...a.children]), Z.NODE_ENV !== "production") {
          const u = a.userKey;
          u && l.branches.forEach(({ userKey: c }) => {
            fv(c, u) && n.onError(
              Se(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const f = s && s(l, a, !1);
        Xr(a, n), f && f(), n.currentNode = null;
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
    Ke(n.helper(To), [
      Z.NODE_ENV !== "production" ? '"v-if"' : '""',
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
      return Z.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((f) => f.type !== 3).length === 1 && (a |= 2048), Eo(
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
    const a = i.codegenNode, f = xg(a);
    return f.type === 13 && Jl(f, n), Or(f, o, n), a;
  }
}
function fv(e, t) {
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
function pv(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const hv = (e, t, n) => {
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
    vf(e), i = e.exp;
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), s.some((l) => l.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = Ce(r.content) : r.content = `${n.helperString(Wi)}(${r.content})` : (r.children.unshift(`${n.helperString(Wi)}(`), r.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && gc(r, "."), s.some((l) => l.content === "attr") && gc(r, "^")), {
    props: [Re(r, i)]
  };
}, vf = (e, t) => {
  const n = e.arg, s = Ce(n.content);
  e.exp = de(s, !1, n.loc);
}, gc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, mv = pf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return gv(e, t, n, (r) => {
      const i = Ke(s(ql), [
        r.source
      ]), l = kr(e), a = wt(e, "memo"), f = wo(e, "key", !1, !0);
      f && f.type === 7 && !f.exp && vf(f);
      let c = f && (f.type === 6 ? f.value ? de(f.value.content, !0) : void 0 : f.exp);
      const p = f && c ? Re("key", c) : null, m = r.source.type === 4 && r.source.constType > 0, g = m ? 64 : f ? 128 : 256;
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
        Z.NODE_ENV !== "production" && l && e.children.some((v) => {
          if (v.type === 1) {
            const O = wo(v, "key");
            if (O)
              return n.onError(
                Se(
                  33,
                  O.loc
                )
              ), !0;
          }
        });
        const k = I.length !== 1 || I[0].type !== 1, N = Cr(e) ? e : l && e.children.length === 1 && Cr(e.children[0]) ? e.children[0] : null;
        if (N ? (h = N.codegenNode, l && p && Or(h, p, n)) : k ? h = Eo(
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
          v.body = ag([
            Kt(["const _memo = (", a.exp, ")"]),
            Kt([
              "if (_cached",
              ...c ? [" && _cached.key === ", c] : [],
              ` && ${n.helperString(
                Qd
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
function gv(e, t, n, s) {
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
  yf(o, n);
  const { addIdentifiers: r, removeIdentifiers: i, scopes: l } = n, { source: a, value: f, key: u, index: c } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: f,
    keyAlias: u,
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
  e.finalized || (Z.NODE_ENV !== "production" && (Jn(e.source, t), e.key && Jn(
    e.key,
    t,
    !0
  ), e.index && Jn(
    e.index,
    t,
    !0
  ), e.value && Jn(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function Qi({ value: e, key: t, index: n }, s = []) {
  return vv([e, t, n, ...s]);
}
function vv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || de("_".repeat(s + 1), !1));
}
const vc = de("undefined", !1), yv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = wt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, bv = (e, t, n, s) => Ms(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function _v(e, t, n = bv) {
  t.helper(Gl);
  const { children: s, loc: o } = e, r = [], i = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = wt(e, "slot", !0);
  if (a) {
    const { arg: I, exp: k } = a;
    I && !xt(I) && (l = !0), r.push(
      Re(
        I || de("default", !0),
        n(k, void 0, s, o)
      )
    );
  }
  let f = !1, u = !1;
  const c = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let I = 0; I < s.length; I++) {
    const k = s[I];
    let N;
    if (!kr(k) || !(N = wt(k, "slot", !0))) {
      k.type !== 3 && c.push(k);
      continue;
    }
    if (a) {
      t.onError(
        Se(37, N.loc)
      );
      break;
    }
    f = !0;
    const { children: v, loc: O } = k, {
      arg: _ = de("default", !0),
      exp: M,
      loc: S
    } = N;
    let x;
    xt(_) ? x = _ ? _.content : "default" : l = !0;
    const y = wt(k, "for"), D = n(M, y, v, O);
    let R, P;
    if (R = wt(k, "if"))
      l = !0, i.push(
        Gi(
          R.exp,
          Uo(_, D, m++),
          vc
        )
      );
    else if (P = wt(
      k,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let $ = I, T;
      for (; $-- && (T = s[$], !(T.type !== 3 && Zi(T))); )
        ;
      if (T && kr(T) && wt(T, /^(else-)?if$/)) {
        let A = i[i.length - 1];
        for (; A.alternate.type === 19; )
          A = A.alternate;
        A.alternate = P.exp ? Gi(
          P.exp,
          Uo(
            _,
            D,
            m++
          ),
          vc
        ) : Uo(_, D, m++);
      } else
        t.onError(
          Se(30, P.loc)
        );
    } else if (y) {
      l = !0;
      const $ = y.forParseResult;
      $ ? (yf($, t), i.push(
        Ke(t.helper(ql), [
          $.source,
          Ms(
            Qi($),
            Uo(_, D),
            !0
          )
        ])
      )) : t.onError(
        Se(
          32,
          y.loc
        )
      );
    } else {
      if (x) {
        if (p.has(x)) {
          t.onError(
            Se(
              38,
              S
            )
          );
          continue;
        }
        p.add(x), x === "default" && (u = !0);
      }
      r.push(Re(_, D));
    }
  }
  if (!a) {
    const I = (k, N) => {
      const v = n(k, void 0, N, o);
      return t.compatConfig && (v.isNonScopedSlot = !0), Re("default", v);
    };
    f ? c.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    c.some((k) => Zi(k)) && (u ? t.onError(
      Se(
        39,
        c[0].loc
      )
    ) : r.push(
      I(void 0, c)
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
          g + (Z.NODE_ENV !== "production" ? ` /* ${Gf[g]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return i.length && (h = Ke(t.helper(Xd), [
    h,
    ss(i)
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
const bf = /* @__PURE__ */ new WeakMap(), Ev = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, r = e.tagType === 1;
  let i = r ? wv(e, t) : `"${s}"`;
  const l = ge(i) && i.callee === Bl;
  let a, f, u = 0, c, p, m, g = (
    // dynamic component may resolve to plain elements
    l || i === co || i === Ml || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const h = _f(
      e,
      t,
      void 0,
      r,
      l
    );
    a = h.props, u = h.patchFlag, p = h.dynamicPropNames;
    const I = h.directives;
    m = I && I.length ? ss(
      I.map((k) => Nv(k, t))
    ) : void 0, h.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (i === Er && (g = !0, u |= 1024, Z.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Se(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    i !== co && // explained above.
    i !== Er) {
      const { slots: I, hasDynamicSlots: k } = _v(e, t);
      f = I, k && (u |= 1024);
    } else if (e.children.length === 1 && i !== co) {
      const I = e.children[0], k = I.type, N = k === 5 || k === 8;
      N && Ct(I, t) === 0 && (u |= 1), N || k === 2 ? f = I : f = e.children;
    } else
      f = e.children;
  p && p.length && (c = Sv(p)), e.codegenNode = Eo(
    t,
    i,
    a,
    f,
    u === 0 ? void 0 : u,
    c,
    m,
    !!g,
    !1,
    r,
    e.loc
  );
};
function wv(e, t, n = !1) {
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
        return Ke(t.helper(Bl), [
          l
        ]);
    } else r.type === 6 && r.value.content.startsWith("vue:") && (s = r.value.content.slice(4));
  const i = ef(s) || t.isBuiltInComponent(s);
  return i ? (n || t.helper(i), i) : (t.helper(Fl), t.components.add(s), xo(s, "component"));
}
function _f(e, t, n = e.props, s, o, r = !1) {
  const { tag: i, loc: l, children: a } = e;
  let f = [];
  const u = [], c = [], p = a.length > 0;
  let m = !1, g = 0, h = !1, I = !1, k = !1, N = !1, v = !1, O = !1;
  const _ = [], M = (D) => {
    f.length && (u.push(
      Vt(yc(f), l)
    ), f = []), D && u.push(D);
  }, S = () => {
    t.scopes.vFor > 0 && f.push(
      Re(
        de("ref_for", !0),
        de("true")
      )
    );
  }, x = ({ key: D, value: R }) => {
    if (xt(D)) {
      const P = D.content, $ = vn(P);
      if ($ && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      P.toLowerCase() !== "onclick" && // omit v-model handlers
      P !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Vn(P) && (N = !0), $ && Vn(P) && (O = !0), $ && R.type === 14 && (R = R.arguments[0]), R.type === 20 || (R.type === 4 || R.type === 8) && Ct(R, t) > 0)
        return;
      P === "ref" ? h = !0 : P === "class" ? I = !0 : P === "style" ? k = !0 : P !== "key" && !_.includes(P) && _.push(P), s && (P === "class" || P === "style") && !_.includes(P) && _.push(P);
    } else
      v = !0;
  };
  for (let D = 0; D < n.length; D++) {
    const R = n[D];
    if (R.type === 6) {
      const { loc: P, name: $, nameLoc: T, value: A } = R;
      let L = !0;
      if ($ === "ref" && (h = !0, S()), $ === "is" && (el(i) || A && A.content.startsWith("vue:") || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      f.push(
        Re(
          de($, !0, T),
          de(
            A ? A.content : "",
            L,
            A ? A.loc : P
          )
        )
      );
    } else {
      const { name: P, arg: $, exp: T, loc: A, modifiers: L } = R, G = P === "bind", ee = P === "on";
      if (P === "slot") {
        s || t.onError(
          Se(40, A)
        );
        continue;
      }
      if (P === "once" || P === "memo" || P === "is" || G && An($, "is") && (el(i) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || ee && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (G && An($, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        ee && p && An($, "vue:before-update")) && (m = !0), G && An($, "ref") && S(), !$ && (G || ee)
      ) {
        if (v = !0, T)
          if (G) {
            if (M(), Z.NODE_ENV !== "production" && u.some((ft) => ft.type === 15 ? ft.properties.some(({ key: Tt }) => Tt.type !== 4 || !Tt.isStatic ? !0 : Tt.content !== "class" && Tt.content !== "style" && !vn(Tt.content)) : !0) && Ls(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              A
            ), Pn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              u.unshift(T);
              continue;
            }
            S(), M(), u.push(T);
          } else
            M({
              type: 14,
              loc: A,
              callee: t.helper(Kl),
              arguments: s ? [T] : [T, "true"]
            });
        else
          t.onError(
            Se(
              G ? 34 : 35,
              A
            )
          );
        continue;
      }
      G && L.some((Xe) => Xe.content === "prop") && (g |= 32);
      const ve = t.directiveTransforms[P];
      if (ve) {
        const { props: Xe, needRuntime: ft } = ve(R, e, t);
        !r && Xe.forEach(x), ee && $ && !xt($) ? M(Vt(Xe, l)) : f.push(...Xe), ft && (c.push(R), Nt(ft) && bf.set(R, ft));
      } else Ac(P) || (c.push(R), p && (m = !0));
    }
  }
  let y;
  if (u.length ? (M(), u.length > 1 ? y = Ke(
    t.helper(wr),
    u,
    l
  ) : y = u[0]) : f.length && (y = Vt(
    yc(f),
    l
  )), v ? g |= 16 : (I && !s && (g |= 2), k && !s && (g |= 4), _.length && (g |= 8), N && (g |= 32)), !m && (g === 0 || g === 32) && (h || O || c.length > 0) && (g |= 512), !t.inSSR && y)
    switch (y.type) {
      case 15:
        let D = -1, R = -1, P = !1;
        for (let A = 0; A < y.properties.length; A++) {
          const L = y.properties[A].key;
          xt(L) ? L.content === "class" ? D = A : L.content === "style" && (R = A) : L.isHandlerKey || (P = !0);
        }
        const $ = y.properties[D], T = y.properties[R];
        P ? y = Ke(
          t.helper(_o),
          [y]
        ) : ($ && !xt($.value) && ($.value = Ke(
          t.helper(zl),
          [$.value]
        )), T && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (k || T.value.type === 4 && T.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        T.value.type === 17) && (T.value = Ke(
          t.helper(Wl),
          [T.value]
        )));
        break;
      case 14:
        break;
      default:
        y = Ke(
          t.helper(_o),
          [
            Ke(t.helper(Do), [
              y
            ])
          ]
        );
        break;
    }
  return {
    props: y,
    directives: c,
    patchFlag: g,
    dynamicPropNames: _,
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
    i ? (r === "style" || r === "class" || vn(r)) && xv(i, o) : (t.set(r, o), n.push(o));
  }
  return n;
}
function xv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = ss(
    [e.value, t.value],
    e.loc
  );
}
function Nv(e, t) {
  const n = [], s = bf.get(e);
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
  return ss(n, e.loc);
}
function Sv(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function el(e) {
  return e === "component" || e === "Component";
}
const kv = (e, t) => {
  if (Cr(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: r } = Cv(e, t), i = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (i[2] = r, l = 3), n.length && (i[3] = Ms([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), i.splice(l), e.codegenNode = Ke(
      t.helper(Jd),
      i,
      s
    );
  }
};
function Cv(e, t) {
  let n = '"default"', s;
  const o = [];
  for (let r = 0; r < e.props.length; r++) {
    const i = e.props[r];
    if (i.type === 6)
      i.value && (i.name === "name" ? n = JSON.stringify(i.value.content) : (i.name = Ce(i.name), o.push(i)));
    else if (i.name === "bind" && An(i.arg, "name")) {
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
    const { props: r, directives: i } = _f(
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
const Ef = (e, t, n, s) => {
  const { loc: o, modifiers: r, arg: i } = e;
  !e.exp && !r.length && n.onError(Se(35, o));
  let l;
  if (i.type === 4)
    if (i.isStatic) {
      let c = i.content;
      Z.NODE_ENV !== "production" && c.startsWith("vnode") && n.onError(Se(51, i.loc)), c.startsWith("vue:") && (c = `vnode-${c.slice(4)}`);
      const p = t.tagType !== 0 || c.startsWith("vnode") || !/[A-Z]/.test(c) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        nn(Ce(c))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${c}`
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
  let f = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const c = nf(a), p = !(c || bg(a)), m = a.content.includes(";");
    Z.NODE_ENV !== "production" && Jn(
      a,
      n,
      !1,
      m
    ), (p || f && c) && (a = Kt([
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
  return s && (u = s(u)), f && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((c) => c.key.isHandlerKey = !0), u;
}, Ov = (e, t) => {
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
              1 + (Z.NODE_ENV !== "production" ? ` /* ${eo[1]} */` : "")
            ), n[r] = {
              type: 12,
              content: i,
              loc: i.loc,
              codegenNode: Ke(
                t.helper(Ll),
                l
              )
            };
          }
        }
    };
}, bc = /* @__PURE__ */ new WeakSet(), $v = (e, t) => {
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
}, wf = (e, t, n) => {
  const { exp: s, arg: o } = e;
  if (!s)
    return n.onError(
      Se(41, e.loc)
    ), qo();
  const r = s.loc.source.trim(), i = s.type === 4 ? s.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(Se(44, s.loc)), qo();
  if (!i.trim() || !nf(s))
    return n.onError(
      Se(42, s.loc)
    ), qo();
  const a = o || de("modelValue", !0), f = o ? xt(o) ? `onUpdate:${Ce(o.content)}` : Kt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let u;
  const c = n.isTS ? "($event: any)" : "$event";
  u = Kt([
    `${c} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Re(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Re(f, u)
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
const Tv = /[\w).+\-_$\]]/, Dv = (e, t) => {
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
  let s = !1, o = !1, r = !1, i = !1, l = 0, a = 0, f = 0, u = 0, c, p, m, g, h = [];
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
    n.charCodeAt(m + 1) !== 124 && n.charCodeAt(m - 1) !== 124 && !l && !a && !f)
      g === void 0 ? (u = m + 1, g = n.slice(0, m).trim()) : I();
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
          f++;
          break;
        case 41:
          f--;
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
        let k = m - 1, N;
        for (; k >= 0 && (N = n.charAt(k), N === " "); k--)
          ;
        (!N || !Tv.test(N)) && (i = !0);
      }
    }
  g === void 0 ? g = n.slice(0, m).trim() : u !== 0 && I();
  function I() {
    h.push(n.slice(u, m).trim()), u = m + 1;
  }
  if (h.length) {
    for (Z.NODE_ENV !== "production" && Sr(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < h.length; m++)
      g = Av(g, h[m], t);
    e.content = g, e.ast = void 0;
  }
}
function Av(e, t, n) {
  n.helper(Hl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${xo(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), r = t.slice(s + 1);
    return n.filters.add(o), `${xo(o, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const Ec = /* @__PURE__ */ new WeakSet(), Vv = (e, t) => {
  if (e.type === 1) {
    const n = wt(e, "memo");
    return !n || Ec.has(e) ? void 0 : (Ec.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Jl(s, t), e.codegenNode = Ke(t.helper(Yl), [
        n.exp,
        Ms(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Iv(e) {
  return [
    [
      $v,
      uv,
      Vv,
      mv,
      Dv,
      ...Z.NODE_ENV !== "production" ? [cv] : [],
      kv,
      Ev,
      yv,
      Ov
    ],
    {
      on: Ef,
      bind: hv,
      model: wf
    }
  ];
}
function Mv(e, t = {}) {
  const n = t.onError || Xl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(Se(47)) : s && n(Se(48));
  const o = !1;
  t.cacheHandlers && n(Se(49)), t.scopeId && !s && n(Se(50));
  const r = fe({}, t, {
    prefixIdentifiers: o
  }), i = le(e) ? Rg(e, r) : e, [l, a] = Iv();
  return jg(
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
  ), zg(i, r);
}
const Pv = () => ({ props: [] });
var ct = {};
const xf = Symbol(ct.NODE_ENV !== "production" ? "vModelRadio" : ""), Nf = Symbol(
  ct.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Sf = Symbol(ct.NODE_ENV !== "production" ? "vModelText" : ""), kf = Symbol(
  ct.NODE_ENV !== "production" ? "vModelSelect" : ""
), tl = Symbol(
  ct.NODE_ENV !== "production" ? "vModelDynamic" : ""
), Cf = Symbol(
  ct.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Of = Symbol(
  ct.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), $f = Symbol(ct.NODE_ENV !== "production" ? "vShow" : ""), ta = Symbol(ct.NODE_ENV !== "production" ? "Transition" : ""), Tf = Symbol(
  ct.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
rg({
  [xf]: "vModelRadio",
  [Nf]: "vModelCheckbox",
  [Sf]: "vModelText",
  [kf]: "vModelSelect",
  [tl]: "vModelDynamic",
  [Cf]: "withModifiers",
  [Of]: "withKeys",
  [$f]: "vShow",
  [ta]: "Transition",
  [Tf]: "TransitionGroup"
});
let gs;
function Rv(e, t = !1) {
  return gs || (gs = document.createElement("div")), t ? (gs.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, gs.children[0].getAttribute("foo")) : (gs.innerHTML = e, gs.textContent);
}
const Lv = {
  parseMode: "html",
  isVoidTag: lp,
  isNativeTag: (e) => Ic(e) || Mc(e) || Pc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Rv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return ta;
    if (e === "TransitionGroup" || e === "transition-group")
      return Tf;
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
}, Fv = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: de("style", !0, t.loc),
      exp: Bv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Bv = (e, t) => {
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
    ct.NODE_ENV !== "production" ? jv : void 0
  );
}
const jv = {
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
}, Hv = (e, t, n) => {
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
}, Uv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    qt(55, o)
  ), t.children.length && (n.onError(
    qt(56, o)
  ), t.children.length = 0), {
    props: [
      Re(
        de("textContent", !0),
        s ? Ct(s, n) > 0 ? s : Ke(
          n.helperString(Jr),
          [s],
          o
        ) : de("", !0)
      )
    ]
  };
}, qv = (e, t, n) => {
  const s = wf(e, t, n);
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
    l && An(l.arg, "value") && n.onError(
      qt(
        60,
        l.loc
      )
    );
  }
  const { tag: r } = t, i = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || i) {
    let l = Sf, a = !1;
    if (r === "input" || i) {
      const f = wo(t, "type");
      if (f) {
        if (f.type === 7)
          l = tl;
        else if (f.value)
          switch (f.value.content) {
            case "radio":
              l = xf;
              break;
            case "checkbox":
              l = Nf;
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
      } else _g(t) ? l = tl : ct.NODE_ENV !== "production" && o();
    } else r === "select" ? l = kf : ct.NODE_ENV !== "production" && o();
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
}, zv = /* @__PURE__ */ Je("passive,once,capture"), Wv = /* @__PURE__ */ Je(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), Kv = /* @__PURE__ */ Je("left,right"), Df = /* @__PURE__ */ Je("onkeyup,onkeydown,onkeypress"), Gv = (e, t, n, s) => {
  const o = [], r = [], i = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ls(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || zv(a) ? i.push(a) : Kv(a) ? xt(e) ? Df(e.content.toLowerCase()) ? o.push(a) : r.push(a) : (o.push(a), r.push(a)) : Wv(a) ? r.push(a) : o.push(a);
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
]) : e, Yv = (e, t, n) => Ef(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: r, value: i } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: f } = Gv(r, o, n, e.loc);
  if (a.includes("right") && (r = wc(r, "onContextmenu")), a.includes("middle") && (r = wc(r, "onMouseup")), a.length && (i = Ke(n.helper(Cf), [
    i,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!xt(r) || Df(r.content.toLowerCase())) && (i = Ke(n.helper(Of), [
    i,
    JSON.stringify(l)
  ])), f.length) {
    const u = f.map(rn).join("");
    r = xt(r) ? de(`${r.content}${u}`, !0) : Kt(["(", r, `) + "${u}"`]);
  }
  return {
    props: [Re(r, i)]
  };
}), Jv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    qt(61, o)
  ), {
    props: [],
    needRuntime: n.helper($f)
  };
}, Xv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === ta)
    return () => {
      if (!e.children.length)
        return;
      Af(e) && t.onError(
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
function Af(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Af);
}
const Qv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (ct.NODE_ENV !== "production" && t.onError(
    qt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Zv(e, t) {
  return e === "template" ? !0 : e in xc ? xc[e].has(t) : t in Nc ? Nc[t].has(e) : !(e in Sc && Sc[e].has(t) || t in kc && kc[t].has(e));
}
const vs = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Kn = /* @__PURE__ */ new Set([]), xc = {
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
  h1: vs,
  h2: vs,
  h3: vs,
  h4: vs,
  h5: vs,
  h6: vs
}, ey = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Zv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, ty = [
  Fv,
  ...ct.NODE_ENV !== "production" ? [Xv, ey] : []
], ny = {
  cloak: Pv,
  html: Hv,
  text: Uv,
  model: qv,
  // override compiler-core
  on: Yv,
  // override compiler-core
  show: Jv
};
function sy(e, t = {}) {
  return Mv(
    e,
    fe({}, Lv, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Qv,
        ...ty,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: fe(
        {},
        ny,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var Zs = {};
function oy() {
  xd();
}
Zs.NODE_ENV !== "production" && oy();
const Cc = /* @__PURE__ */ Object.create(null);
function ry(e, t) {
  if (!le(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Zs.NODE_ENV !== "production" && Ie("invalid template option: ", e), De;
  const n = Kf(e, t), s = Cc[n];
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
  const { code: r } = sy(e, o);
  function i(a, f = !1) {
    const u = f ? a.message : `Template compilation error: ${a.message}`, c = a.loc && Xf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Ie(c ? `${u}
${c}` : u);
  }
  const l = new Function("Vue", r)(Z0);
  return l._rc = !0, Cc[n] = l;
}
bd(ry);
const Ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, iy = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ly = {
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
    const n = e, s = t, o = K(!1), r = X(() => n.href ? "a" : "button"), i = (u, c = "") => {
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
        const k = "--" + u.replace(/_/g, "-"), N = getComputedStyle(document.documentElement).getPropertyValue(k).trim();
        if (N) return N;
      } catch {
      }
      return c;
    }, l = X(() => {
      const u = {};
      if (n.rounded === "full")
        u.borderRadius = "9999px";
      else if (n.rounded === "none")
        u.borderRadius = "0";
      else if (n.buttonRadius !== null)
        u.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius;
      else {
        const c = i("button_border_radius", "6");
        u.borderRadius = typeof c == "number" || !isNaN(c) ? `${c}px` : c;
      }
      return n.variant === "primary" ? (o.value ? u.backgroundColor = i("button_primary_bg_hover", "#b91c1c") : u.backgroundColor = i("button_primary_bg", "#dc2626"), u.color = i("button_primary_text", "white")) : n.variant === "secondary" ? (o.value ? u.backgroundColor = i("button_secondary_bg_hover", "#f9fafb") : u.backgroundColor = i("button_secondary_bg", "white"), u.color = i("button_secondary_text", "#374151"), u.borderColor = i("button_secondary_border", "#d1d5db")) : n.variant === "link" && (o.value ? u.color = i("button_primary_bg_hover", "#b91c1c") : u.color = i("button_primary_bg", "#dc2626")), u;
    }), a = X(() => {
      const u = [
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      ];
      n.fullWidth && u.push("w-full");
      const c = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
      };
      return u.push(c[n.size]), n.variant === "primary" ? u.push(
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
    }), f = (u) => {
      !n.disabled && !n.loading && s("click", u);
    };
    return (u, c) => (b(), ut(Nl(r.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ee(a.value),
      style: Ue(l.value),
      onClick: f,
      onMouseenter: c[0] || (c[0] = (p) => o.value = !0),
      onMouseleave: c[1] || (c[1] = (p) => o.value = !1)
    }, {
      default: Me(() => [
        e.loading ? (b(), w("svg", iy, c[2] || (c[2] = [
          d("circle", {
            class: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "4"
          }, null, -1),
          d("path", {
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
}, os = /* @__PURE__ */ Ye(ly, [["__scopeId", "data-v-ee93db6c"]]), ay = ["disabled"], cy = ["value", "min", "max"], uy = ["disabled"], dy = {
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
    const n = e, s = t, o = dt(), r = X({
      get: () => n.modelValue,
      set: (u) => {
        var p, m, g;
        const c = Math.max(n.min, Math.min(n.max, u));
        if (s("update:modelValue", c), s("update", c), ((g = (m = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : m.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const h = o.vnode.el.parentElement, I = h.getAttribute("data-line-key");
          if (I) {
            const k = new CustomEvent("quantity-update", {
              detail: { key: I, value: c },
              bubbles: !0
            });
            h.dispatchEvent(k);
          }
        }
      }
    }), i = () => {
      r.value > n.min && (r.value = r.value - n.step);
    }, l = () => {
      r.value < n.max && (r.value = r.value + n.step);
    }, a = (u) => {
      const c = parseInt(u.target.value) || n.min;
      r.value = c;
    }, f = (u) => {
      const c = parseInt(u.target.value) || n.min;
      r.value = c, u.target.value = r.value;
    };
    return (u, c) => (b(), w("div", {
      class: Ee(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      d("button", {
        type: "button",
        class: Ee(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue <= e.min,
        onClick: i,
        "aria-label": "Decrease quantity"
      }, c[0] || (c[0] = [
        d("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20 12H4"
          })
        ], -1)
      ]), 10, ay),
      d("input", {
        type: "number",
        class: Ee(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: f,
        "aria-label": "Quantity"
      }, null, 42, cy),
      d("button", {
        type: "button",
        class: Ee(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, c[1] || (c[1] = [
        d("svg", {
          class: "w-3 h-3",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4v16m8-8H4"
          })
        ], -1)
      ]), 10, uy)
    ], 2));
  }
}, Vf = /* @__PURE__ */ Ye(dy, [["__scopeId", "data-v-402d2d49"]]), fy = ["data-updating"], py = { class: "cart-item__content" }, hy = { class: "cart-item__image" }, my = ["href"], gy = ["src", "alt"], vy = { class: "cart-item__details" }, yy = { class: "cart-item__header" }, by = { class: "cart-item__info" }, _y = { class: "cart-item__title" }, Ey = ["href"], wy = {
  key: 0,
  class: "cart-item__variant"
}, xy = {
  key: 1,
  class: "cart-item__properties"
}, Ny = { class: "cart-item__property-key" }, Sy = { class: "cart-item__price cart-item__price--mobile" }, ky = { class: "cart-item__price-current" }, Cy = {
  key: 0,
  class: "cart-item__price-original"
}, Oy = {
  key: 0,
  class: "cart-item__discounts"
}, $y = { class: "cart-item__actions" }, Ty = { class: "cart-item__actions-left" }, Dy = ["disabled"], Ay = {
  key: 0,
  class: "cart-item__remove-icon",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Vy = {
  key: 1,
  class: "cart-item__remove-icon cart-item__remove-icon--loading",
  fill: "none",
  viewBox: "0 0 24 24"
}, Iy = { class: "cart-item__price cart-item__price--desktop" }, My = { class: "cart-item__price-current" }, Py = {
  key: 0,
  class: "cart-item__price-original"
}, Ry = {
  key: 1,
  class: "cart-item__price-savings"
}, Ly = {
  key: 1,
  class: "cart-item__warning"
}, Fy = {
  key: 2,
  class: "cart-item__error"
}, By = {
  __name: "CartItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = K(n.item.quantity), r = K(!1), i = K(""), l = X(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = X(() => {
      var p;
      return ((p = n.item.variant) == null ? void 0 : p.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), f = (p) => {
      var k, N, v;
      if (!p && p !== 0) return "$0.00";
      const m = ((k = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : k.money_format) || "${{amount}}";
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
    return Wt(() => n.item.quantity, (p) => {
      o.value = p;
    }), (p, m) => (b(), w("div", {
      class: "cart-item",
      "data-updating": r.value
    }, [
      d("div", py, [
        d("div", hy, [
          d("a", {
            href: e.item.url,
            class: "cart-item__image-link"
          }, [
            d("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "cart-item__image-img",
              loading: "lazy"
            }, null, 8, gy)
          ], 8, my)
        ]),
        d("div", vy, [
          d("div", yy, [
            d("div", by, [
              d("h3", _y, [
                d("a", {
                  href: e.item.url,
                  class: "cart-item__title-link"
                }, q(e.item.product_title), 9, Ey)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (b(), w("p", wy, q(e.item.variant_title), 1)) : j("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (b(), w("div", xy, [
                (b(!0), w(re, null, he(e.item.properties, (g, h) => (b(), w("p", {
                  key: h,
                  class: "cart-item__property"
                }, [
                  d("span", Ny, q(h) + ":", 1),
                  je(" " + q(g), 1)
                ]))), 128))
              ])) : j("", !0)
            ]),
            d("div", Sy, [
              d("p", ky, q(f(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (b(), w("p", Cy, q(f(e.item.original_price * e.item.quantity)), 1)) : j("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (b(), w("div", Oy, [
            (b(!0), w(re, null, he(e.item.discounts, (g) => (b(), w("div", {
              key: g.id,
              class: "cart-item__discount"
            }, [
              m[1] || (m[1] = d("svg", {
                class: "cart-item__discount-icon",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                d("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              je(" " + q(g.title) + " (-" + q(f(g.amount || g.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : j("", !0),
          d("div", $y, [
            d("div", Ty, [
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
              d("button", {
                type: "button",
                onClick: c,
                class: "cart-item__remove",
                disabled: r.value,
                "aria-label": "Remove item from cart"
              }, [
                r.value ? (b(), w("svg", Vy, m[3] || (m[3] = [
                  d("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }, null, -1),
                  d("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, null, -1)
                ]))) : (b(), w("svg", Ay, m[2] || (m[2] = [
                  d("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, Dy)
            ]),
            d("div", Iy, [
              d("p", My, q(f(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (b(), w("p", Py, q(f(e.item.original_price * e.item.quantity)), 1)) : j("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (b(), w("p", Ry, " Save " + q(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : j("", !0)
            ])
          ]),
          a.value ? (b(), w("p", Ly, " Only " + q(e.item.variant.inventory_quantity) + " left in stock ", 1)) : j("", !0),
          i.value ? (b(), w("p", Fy, q(i.value), 1)) : j("", !0)
        ])
      ])
    ], 8, fy));
  }
}, If = /* @__PURE__ */ Ye(By, [["__scopeId", "data-v-6f2d5a63"]]), jy = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Hy = { class: "absolute inset-0 overflow-hidden" }, Uy = { class: "fixed inset-y-0 right-0 max-w-full flex pointer-events-none" }, qy = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, zy = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, Wy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, Ky = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, Gy = { class: "flex-1 overflow-y-auto" }, Yy = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, Jy = {
  key: 1,
  class: "px-4 sm:px-6 pb-6"
}, Xy = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, Qy = {
  key: 0,
  class: "flex items-center gap-2"
}, Zy = {
  key: 1,
  class: "flex items-center gap-2"
}, e1 = { class: "text-sm text-blue-800" }, t1 = {
  key: 2,
  class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden"
}, n1 = { class: "flex justify-between text-base font-medium text-gray-900" }, s1 = { class: "space-y-3" }, o1 = {
  __name: "CartDrawer",
  setup(e) {
    const t = K(!1), n = K([]), s = K(0), o = X(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/cart";
    }), r = X(() => {
      var h, I;
      return ((I = (h = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : h.settings) == null ? void 0 : I.free_shipping_threshold) || 50;
    }), i = X(() => {
      var g, h;
      return ((h = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : h.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var v, O, _, M;
      if (!g && g !== 0) return "$0.00";
      const h = ((v = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : v.money_format) || "${{amount}}";
      (O = Shopline == null ? void 0 : Shopline.shop) != null && O.money_with_currency_format, (_ = Shopline == null ? void 0 : Shopline.shop) != null && _.currency;
      const I = ((M = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : M.current) || "en", N = new Intl.NumberFormat(I, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(g));
      return h.replace("{{amount}}", N);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", u();
    }, f = () => {
      t.value = !1, document.body.style.overflow = "";
    }, u = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, c = async ({ key: g, quantity: h }) => {
      await window.OrionCart.updateItem(g, h), u();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), u();
    }, m = (g) => {
      g.key === "Escape" && t.value && f();
    };
    return He(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", f), document.addEventListener("keydown", m);
    }), Lt(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", f), document.removeEventListener("keydown", m);
    }), (g, h) => (b(), ut(bn, { to: "body" }, [
      ue(rt, { name: "drawer" }, {
        default: Me(() => [
          t.value ? (b(), w("div", jy, [
            d("div", Hy, [
              ue(rt, { name: "fade" }, {
                default: Me(() => [
                  t.value ? (b(), w("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: f
                  })) : j("", !0)
                ]),
                _: 1
              }),
              d("div", Uy, [
                ue(rt, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Me(() => [
                    t.value ? (b(), w("div", qy, [
                      d("div", zy, [
                        d("div", Wy, [
                          d("div", null, [
                            h[0] || (h[0] = d("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (b(), w("p", Ky, q(n.value.length) + " " + q(n.value.length === 1 ? "item" : "items"), 1)) : j("", !0)
                          ]),
                          d("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: f
                          }, h[1] || (h[1] = [
                            d("span", { class: "sr-only" }, "Close cart", -1),
                            d("svg", {
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              d("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ]))
                        ]),
                        d("div", Gy, [
                          n.value.length === 0 ? (b(), w("div", Yy, [
                            h[3] || (h[3] = d("div", { class: "empty-cart-icon" }, [
                              d("div", { class: "empty-cart-icon-bg" }),
                              d("svg", {
                                class: "empty-cart-icon-svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "1.5"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                })
                              ])
                            ], -1)),
                            h[4] || (h[4] = d("h3", { class: "text-lg font-semibold text-gray-900 mb-2" }, " Your cart is empty ", -1)),
                            h[5] || (h[5] = d("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            ue(os, {
                              onClick: f,
                              variant: "primary",
                              size: "large"
                            }, {
                              default: Me(() => h[2] || (h[2] = [
                                je(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (b(), w("div", Jy, [
                            (b(!0), w(re, null, he(n.value, (I) => (b(), ut(If, {
                              key: I.key,
                              item: I,
                              onUpdate: c,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (b(), w("div", Xy, [
                          i.value ? (b(), w("div", {
                            key: 0,
                            class: Ee([s.value >= r.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "p-3"]),
                            style: { borderRadius: "var(--button-radius)" }
                          }, [
                            s.value >= r.value ? (b(), w("div", Qy, h[6] || (h[6] = [
                              d("svg", {
                                class: "w-5 h-5 text-green-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ], -1),
                              d("p", { class: "text-sm text-green-800" }, " Congratulations! You've unlocked free shipping! ", -1)
                            ]))) : (b(), w("div", Zy, [
                              h[7] || (h[7] = d("svg", {
                                class: "w-5 h-5 text-blue-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ], -1)),
                              d("p", e1, " Add " + q(l(
                                r.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < r.value ? (b(), w("div", t1, [
                              d("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: Ue(`width: ${Math.min(
                                  s.value / r.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])) : j("", !0)
                          ], 2)) : j("", !0),
                          d("div", null, [
                            d("div", n1, [
                              h[8] || (h[8] = d("p", null, "Subtotal", -1)),
                              d("p", null, q(l(s.value)), 1)
                            ]),
                            h[9] || (h[9] = d("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          d("div", s1, [
                            ue(os, {
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
                            ue(os, {
                              onClick: f,
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
}, Mf = /* @__PURE__ */ Ye(o1, [["__scopeId", "data-v-8da1cccd"]]), r1 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, i1 = { class: "absolute inset-0 overflow-hidden" }, l1 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, a1 = {
  key: 0,
  class: "w-screen max-w-sm pointer-events-auto"
}, c1 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, u1 = { class: "flex-1 overflow-y-auto" }, d1 = { class: "px-4 py-4" }, f1 = { class: "space-y-1" }, p1 = { key: 0 }, h1 = { key: 0 }, m1 = ["onClick"], g1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, v1 = { key: 0 }, y1 = ["onClick"], b1 = {
  key: 0,
  class: "mt-1 space-y-1"
}, _1 = ["href"], E1 = ["href"], w1 = ["href"], x1 = { class: "px-4 py-4 border-t" }, N1 = { class: "space-y-1" }, S1 = ["href"], k1 = {
  key: 0,
  class: "px-4 py-4 border-t"
}, C1 = {
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
    const n = e, s = X(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = X(() => n.customerUrl || window.mobileMenuCustomerUrl || "/account"), r = X(() => n.showLocalization || window.mobileMenuShowLocalization || !1), i = K(!1), l = K([]), a = () => {
      console.log("openMenu called"), i.value = !0, document.body.style.overflow = "hidden";
    }, f = () => {
      i.value = !1, document.body.style.overflow = "";
    }, u = (c) => {
      const p = l.value.indexOf(c);
      p > -1 ? l.value.splice(p, 1) : l.value.push(c);
    };
    return t({
      openMenu: a,
      closeMenu: f
    }), He(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", f);
      const c = (p) => {
        p.key === "Escape" && i.value && f();
      };
      document.addEventListener("keydown", c), Lt(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", f), document.removeEventListener("keydown", c);
      });
    }), (c, p) => (b(), w("div", null, [
      (b(), ut(bn, { to: "body" }, [
        ue(rt, { name: "menu" }, {
          default: Me(() => [
            i.value ? (b(), w("div", r1, [
              d("div", i1, [
                ue(rt, { name: "fade" }, {
                  default: Me(() => [
                    i.value ? (b(), w("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: f
                    })) : j("", !0)
                  ]),
                  _: 1
                }),
                d("div", l1, [
                  ue(rt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Me(() => [
                      i.value ? (b(), w("div", a1, [
                        d("div", c1, [
                          d("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            p[3] || (p[3] = d("h2", { class: "text-lg font-medium text-gray-900" }, " Menu ", -1)),
                            d("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: f
                            }, p[2] || (p[2] = [
                              d("span", { class: "sr-only" }, "Close menu", -1),
                              d("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          d("div", u1, [
                            d("nav", d1, [
                              d("ul", f1, [
                                s.value.length === 0 ? (b(), w("li", p1, p[4] || (p[4] = [
                                  d("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : j("", !0),
                                (b(!0), w(re, null, he(s.value, (m) => (b(), w("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (b(), w("div", h1, [
                                    d("button", {
                                      onClick: (g) => u(
                                        m.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      d("span", null, q(m.title), 1),
                                      (b(), w("svg", {
                                        class: Ee(["h-5 w-5 transition-transform duration-200", {
                                          "rotate-180": l.value.includes(
                                            m.title
                                          )
                                        }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, p[5] || (p[5] = [
                                        d("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, m1),
                                    ue(rt, { name: "submenu" }, {
                                      default: Me(() => [
                                        l.value.includes(
                                          m.title
                                        ) ? (b(), w("ul", g1, [
                                          (b(!0), w(re, null, he(m.links, (g) => (b(), w("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (b(), w("div", v1, [
                                              d("button", {
                                                onClick: (h) => u(
                                                  `${m.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                d("span", null, q(g.title), 1),
                                                (b(), w("svg", {
                                                  class: Ee(["h-4 w-4 transition-transform duration-200", {
                                                    "rotate-180": l.value.includes(
                                                      `${m.title}-${g.title}`
                                                    )
                                                  }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, p[6] || (p[6] = [
                                                  d("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, y1),
                                              ue(rt, { name: "submenu" }, {
                                                default: Me(() => [
                                                  l.value.includes(
                                                    `${m.title}-${g.title}`
                                                  ) ? (b(), w("ul", b1, [
                                                    (b(!0), w(re, null, he(g.links, (h) => (b(), w("li", {
                                                      key: h.id || h.title
                                                    }, [
                                                      d("a", {
                                                        href: h.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: p[0] || (p[0] = (...I) => f && f(...I))
                                                      }, q(h.title), 9, _1)
                                                    ]))), 128))
                                                  ])) : j("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (b(), w("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: p[1] || (p[1] = (...h) => f && f(...h))
                                            }, q(g.title), 9, E1))
                                          ]))), 128))
                                        ])) : j("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (b(), w("a", {
                                    key: 1,
                                    href: m.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: f
                                  }, q(m.title), 9, w1))
                                ]))), 128))
                              ])
                            ]),
                            d("div", x1, [
                              d("div", N1, [
                                d("a", {
                                  href: o.value,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, p[7] || (p[7] = [
                                  d("span", { class: "flex items-center" }, [
                                    d("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      d("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      })
                                    ]),
                                    je(" Account ")
                                  ], -1)
                                ]), 8, S1),
                                p[8] || (p[8] = d("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, [
                                  d("span", { class: "flex items-center" }, [
                                    d("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      d("path", {
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
                            r.value ? (b(), w("div", k1, [
                              fs(c.$slots, "localization", {}, void 0, !0)
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
}, O1 = /* @__PURE__ */ Ye(C1, [["__scopeId", "data-v-9092623c"]]), $1 = { class: "variant-picker" }, T1 = {
  key: 0,
  class: "single-variant-info mb-6 p-4 bg-gray-50 rounded-lg"
}, D1 = { class: "font-medium text-gray-900" }, A1 = { key: 1 }, V1 = { class: "text-sm font-medium text-gray-900 mb-3" }, I1 = { class: "font-normal text-gray-600" }, M1 = {
  key: 0,
  class: "flex flex-wrap gap-3"
}, P1 = ["title", "aria-label", "disabled", "onClick"], R1 = ["src", "alt"], L1 = {
  key: 1,
  class: "text-xs"
}, F1 = {
  key: 1,
  class: "color-swatches-wrapper",
  style: { display: "flex", "flex-wrap": "wrap", gap: "0.75rem" }
}, B1 = ["title", "aria-label", "disabled", "onClick", "onMouseenter", "onMouseleave"], j1 = { style: { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", "white-space": "nowrap", "border-width": "0" } }, H1 = {
  key: 0,
  class: "color-swatch__checkmark",
  style: { position: "absolute", inset: "0", display: "flex", "align-items": "center", "justify-content": "center" }
}, U1 = {
  style: { width: "1.25rem", height: "1.25rem", filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.5)) drop-shadow(-1px -1px 1px rgba(255,255,255,0.5))" },
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, q1 = {
  key: 2,
  class: "variant-buttons-wrapper",
  style: { display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }
}, z1 = ["aria-label", "disabled", "onClick", "onMouseenter", "onMouseleave"], W1 = {
  key: 2,
  class: "single-variant-options"
}, K1 = { class: "text-sm font-medium text-gray-900 mb-2" }, G1 = { class: "px-4 py-2 bg-gray-50 rounded-lg inline-block" }, Y1 = { class: "text-sm font-medium text-gray-700" }, J1 = {
  key: 3,
  class: "variant-picker-empty"
}, X1 = {
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
    const n = e, s = t, o = ($, T) => {
      const A = document.getElementById("variantPicker");
      A && A.dispatchEvent(new CustomEvent($, { detail: T, bubbles: !0 }));
    }, r = K({}), i = K(null), l = K(!1), a = () => n.product && n.product.id ? n.product : window.productPageData && window.productPageData.product ? window.productPageData.product : {}, f = K({}), u = X(() => f.value.variants || []), c = X(() => {
      if (f.value.options && f.value.options.length > 0)
        return f.value.options.map((T, A) => ({
          ...T,
          position: T.position || A + 1
        }));
      const $ = [];
      if (u.value.length > 0) {
        if (u.value[0].option1) {
          const T = [
            ...new Set(
              u.value.map((A) => A.option1).filter(Boolean)
            )
          ];
          $.push({
            name: "Size",
            position: 1,
            values: T
          });
        }
        if (u.value[0].option2) {
          const T = [
            ...new Set(
              u.value.map((A) => A.option2).filter(Boolean)
            )
          ];
          $.push({
            name: "Color",
            position: 2,
            values: T
          });
        }
        if (u.value[0].option3) {
          const T = [
            ...new Set(
              u.value.map((A) => A.option3).filter(Boolean)
            )
          ];
          $.push({
            name: "Option",
            position: 3,
            values: T
          });
        }
      }
      return $;
    }), p = X(
      () => f.value.options_with_values || c.value
    ), m = async ($ = 5) => {
      for (let T = 0; T < $; T++) {
        const A = a();
        if (A && A.id)
          return f.value = A, !0;
        T < $ - 1 && await new Promise((L) => setTimeout(L, 100));
      }
      return !1;
    };
    He(async () => {
      if (await m(), u.value.length > 0) {
        let $ = null;
        if (n.selectedVariantId && ($ = u.value.find(
          (T) => T.id == n.selectedVariantId
        )), $ || ($ = u.value.find((T) => T.available) || u.value[0]), $)
          if (u.value.length === 1 && c.value.length === 0)
            Ln(() => {
              g($);
            });
          else {
            if ($.option1) {
              const T = c.value.find(
                (A) => A.position === 1
              );
              T && (r.value[T.name] = $.option1);
            }
            if ($.option2) {
              const T = c.value.find(
                (A) => A.position === 2
              );
              T && (r.value[T.name] = $.option2);
            }
            if ($.option3) {
              const T = c.value.find(
                (A) => A.position === 3
              );
              T && (r.value[T.name] = $.option3);
            }
            Ln(() => {
              g($);
            });
          }
      }
    });
    const g = ($) => {
      $ && (i.value = $, l.value = !0, c.value.forEach((T, A) => {
        r.value[T.name] = $[`option${A + 1}`];
      }), n.updateUrl && $ && h($), $ && $.featured_media && (s("media-change", $.featured_media), o("media-change", $.featured_media)), s("variant-change", $), o("variant-change", $));
    }, h = ($) => {
      const T = new URL(window.location);
      $ && $.id ? T.searchParams.set("sku", $.id) : T.searchParams.delete("sku"), window.history.replaceState({}, document.title, T.toString());
    }, I = ($, T) => {
      r.value[$] = T;
      const A = u.value.find((L) => c.value.every((G, ee) => {
        const ve = r.value[G.name];
        return L[`option${ee + 1}`] === ve;
      }));
      A && (g(A), n.sectionId && k(A));
    }, k = async ($) => {
      if (!(!$ || !$.id))
        try {
          const T = await fetch(
            `${window.location.pathname}?sku=${$.id}&section_id=${n.sectionId}`,
            {
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }
          );
          if (!T.ok) throw new Error("Failed to fetch product info");
          const A = await T.text(), G = new DOMParser().parseFromString(A, "text/html");
          s("product-info-update", {
            variant: $,
            html: G
          });
        } catch {
        }
    }, N = ($) => r.value[$] || "";
    Wt(
      () => n.selectedVariantId,
      ($) => {
        if ($) {
          const T = u.value.find((A) => A.id == $);
          T && g(T);
        }
      }
    );
    const v = ($, T) => r.value[$] === T, O = ($, T) => {
      const A = c.value.findIndex(
        (L) => L.name === $
      );
      return u.value.some((L) => {
        const G = L[`option${A + 1}`] === T, ee = c.value.every((ve, Xe) => {
          if (ve.name === $) return !0;
          const ft = r.value[ve.name];
          return ft ? L[`option${Xe + 1}`] === ft : !0;
        });
        return G && ee && L.available;
      });
    }, _ = ($) => {
      if (!$) return !1;
      const T = $.toLowerCase();
      return T === "color" || T === "colour" || T.includes("color") || T.includes("colour");
    }, M = ($) => {
      const A = {
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
      return A || ($.startsWith("#") ? $ : "#E5E7EB");
    }, S = ($) => p.value.some(
      (T) => T.name === $.name && T.values_images && T.values_images.length > 0
    ), x = ($) => {
      const T = p.value.find(
        (A) => A.name === $.name
      );
      return !T || !T.values_images ? $.values.map((A) => ({ value: A, image: null })) : T.values_images;
    }, y = ($, T = 100) => $ ? typeof $ == "string" ? $ : $.src ? $.src : "" : "", D = ($, T) => {
      const A = v($, T), L = O($, T);
      return {
        padding: "0.5rem 1rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: A ? "rgb(17 24 39)" : "rgb(209 213 219)",
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        color: A ? "rgb(255 255 255)" : "rgb(55 65 81)",
        backgroundColor: A ? "rgb(17 24 39)" : "rgb(255 255 255)",
        transition: "all 200ms",
        cursor: L ? "pointer" : "not-allowed",
        opacity: L ? "1" : "0.3",
        textDecoration: L ? "none" : "line-through",
        display: "inline-block",
        textAlign: "center",
        userSelect: "none"
      };
    }, R = ($) => {
      const T = v("Color", $), A = O("Color", $), L = M($), G = L.toLowerCase() === "#ffffff" || $.toLowerCase() === "white";
      return {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        borderWidth: T ? "3px" : "2px",
        borderStyle: "solid",
        borderColor: T ? "rgb(17 24 39)" : "rgb(229 231 235)",
        backgroundColor: L,
        position: "relative",
        overflow: "hidden",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: A ? "pointer" : "not-allowed",
        opacity: A ? "1" : "0.4",
        boxShadow: T ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        transform: T ? "scale(1.1)" : "scale(1)"
      };
    }, P = ($, T, A) => {
      const L = v("Color", T);
      O("Color", T) && (A ? ($.target.style.transform = L ? "scale(1.1)" : "scale(1.05)", $.target.style.boxShadow = L ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)") : ($.target.style.transform = L ? "scale(1.1)" : "scale(1)", $.target.style.boxShadow = L ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"));
    };
    return ($, T) => (b(), w("div", $1, [
      u.value.length === 1 && c.value.length === 0 ? (b(), w("div", T1, [
        T[0] || (T[0] = d("div", { class: "text-sm text-gray-600 mb-2" }, "Selected Option:", -1)),
        d("div", D1, q(u.value[0].title), 1)
      ])) : c.value.length > 0 ? (b(), w("div", A1, [
        (b(!0), w(re, null, he(c.value, (A) => (b(), w("div", {
          key: A.name,
          class: "variant-option mb-6"
        }, [
          d("h3", V1, [
            je(q(A.name || "Option") + ": ", 1),
            d("span", I1, q(N(A.name) || "Select"), 1)
          ]),
          S(A) ? (b(), w("div", M1, [
            (b(!0), w(re, null, he(x(
              A
            ), (L, G) => (b(), w("button", {
              key: L.value,
              type: "button",
              class: Ee([
                "variant-image-button",
                v(A.name, L.value) ? "variant-image-button--selected" : "",
                O(A.name, L.value) ? "" : "variant-image-button--unavailable"
              ]),
              title: L.value,
              "aria-label": `Select ${A.name} ${L.value}`,
              disabled: !O(A.name, L.value),
              onClick: (ee) => I(A.name, L.value)
            }, [
              L.image ? (b(), w("img", {
                key: 0,
                src: y(L.image, 100),
                alt: L.value,
                class: "w-full h-full object-cover"
              }, null, 8, R1)) : (b(), w("span", L1, q(L.value), 1))
            ], 10, P1))), 128))
          ])) : _(A.name) ? (b(), w("div", F1, [
            (b(!0), w(re, null, he(A.values, (L) => (b(), w("button", {
              key: L,
              type: "button",
              class: Ee([
                "color-swatch",
                v(A.name, L) ? "color-swatch--selected" : "",
                O(A.name, L) ? "" : "color-swatch--unavailable"
              ]),
              style: Ue(R(L)),
              title: L,
              "aria-label": `Select ${A.name} ${L}`,
              disabled: !O(A.name, L),
              onClick: Ot((G) => I(A.name, L), ["stop"]),
              onMouseenter: (G) => P(G, L, !0),
              onMouseleave: (G) => P(G, L, !1)
            }, [
              d("span", j1, q(L), 1),
              v(A.name, L) ? (b(), w("span", H1, [
                (b(), w("svg", U1, T[1] || (T[1] = [
                  d("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd",
                    style: { fill: "white", stroke: "black", "stroke-width": "0.5px", "paint-order": "stroke" }
                  }, null, -1)
                ])))
              ])) : j("", !0)
            ], 46, B1))), 128))
          ])) : (b(), w("div", q1, [
            (b(!0), w(re, null, he(A.values, (L) => (b(), w("button", {
              key: L,
              type: "button",
              class: Ee([
                "variant-button",
                v(A.name, L) ? "variant-button--selected" : "",
                O(A.name, L) ? "" : "variant-button--unavailable"
              ]),
              style: Ue(D(A.name, L)),
              "aria-label": `Select ${A.name} ${L}`,
              disabled: !O(A.name, L),
              onClick: Ot((G) => I(A.name, L), ["stop"]),
              onMouseenter: (G) => G.target.style.backgroundColor = v(A.name, L) ? "rgb(31 41 55)" : "rgb(249 250 251)",
              onMouseleave: (G) => G.target.style.backgroundColor = v(A.name, L) ? "rgb(17 24 39)" : "rgb(255 255 255)"
            }, q(L), 47, z1))), 128))
          ]))
        ]))), 128))
      ])) : u.value.length === 1 && c.value.length > 0 ? (b(), w("div", W1, [
        (b(!0), w(re, null, he(c.value, (A) => (b(), w("div", {
          key: A.name,
          class: "mb-4"
        }, [
          d("h3", K1, q(A.name) + ": ", 1),
          d("div", G1, [
            d("span", Y1, q(u.value[0][`option${c.value.indexOf(A) + 1}`] || A.values[0]), 1)
          ])
        ]))), 128))
      ])) : j("", !0),
      u.value.length === 0 && c.value.length === 0 && !l.value ? (b(), w("div", J1, T[2] || (T[2] = [
        d("div", { class: "p-4 bg-gray-50 border border-gray-200 rounded-md" }, [
          d("p", { class: "text-sm text-gray-600" }, " Loading variant options... ")
        ], -1)
      ]))) : j("", !0)
    ]));
  }
}, Q1 = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, Z1 = { class: "main-header__wrapper" }, eb = {
  href: "/",
  class: "main-header__logo"
}, tb = ["src", "alt"], nb = {
  key: 1,
  class: "text-xl font-bold"
}, sb = { class: "main-header__nav hidden lg:flex" }, ob = ["href"], rb = { class: "main-header__actions" }, ib = ["href"], lb = {
  key: 0,
  class: "cart-count"
}, ab = { class: "search-overlay__container" }, cb = {
  action: "/search",
  method: "get",
  class: "search-form"
}, ub = {
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
    const t = e, n = K(null), s = K(!1), o = K(0), r = X(() => {
      var u, c;
      return t.customer ? ((u = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : u.account) || "/account" : ((c = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : c.account_login) || "/account/login";
    }), i = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, l = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, a = async () => {
      var u;
      s.value = !s.value, s.value && (await Ln(), (u = n.value) == null || u.focus());
    }, f = () => {
      var u;
      (u = window.OrionCart) != null && u.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return He(() => {
      document.addEventListener("cart:updated", f), f();
    }), Lt(() => {
      document.removeEventListener("cart:updated", f);
    }), (u, c) => (b(), w("div", Q1, [
      d("div", Z1, [
        d("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: i,
          "aria-label": "Open menu"
        }, c[0] || (c[0] = [
          d("svg", {
            class: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M4 6h16M4 12h16M4 18h16"
            })
          ], -1)
        ])),
        d("a", eb, [
          e.logoUrl ? (b(), w("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, tb)) : (b(), w("span", nb, q(e.shopName), 1))
        ]),
        d("nav", sb, [
          (b(!0), w(re, null, he(e.navigationLinks, (p) => (b(), w("a", {
            key: p.url,
            href: p.url,
            class: "nav-link"
          }, q(p.title), 9, ob))), 128))
        ]),
        d("div", rb, [
          d("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: a,
            "aria-label": "Search"
          }, c[1] || (c[1] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })
            ], -1)
          ])),
          d("a", {
            href: r.value,
            class: "action-button",
            "aria-label": "Account"
          }, c[2] || (c[2] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              })
            ], -1)
          ]), 8, ib),
          d("button", {
            type: "button",
            class: "action-button relative",
            onClick: l,
            "aria-label": "Cart"
          }, [
            c[3] || (c[3] = d("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              })
            ], -1)),
            o.value > 0 ? (b(), w("span", lb, q(o.value), 1)) : j("", !0)
          ])
        ])
      ]),
      (b(), ut(bn, { to: "body" }, [
        ue(rt, { name: "fade" }, {
          default: Me(() => [
            s.value ? (b(), w("div", {
              key: 0,
              class: "search-overlay",
              onClick: Ot(a, ["self"])
            }, [
              d("div", ab, [
                d("form", cb, [
                  d("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: _r(a, ["esc"])
                  }, null, 544),
                  c[4] || (c[4] = d("button", {
                    type: "submit",
                    class: "search-submit"
                  }, [
                    d("svg", {
                      class: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      d("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ])
                  ], -1))
                ]),
                d("button", {
                  type: "button",
                  class: "search-close",
                  onClick: a,
                  "aria-label": "Close search"
                }, c[5] || (c[5] = [
                  d("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
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
}, Pf = /* @__PURE__ */ Ye(ub, [["__scopeId", "data-v-2dc4d29f"]]), db = { class: "site-footer" }, fb = {
  key: 0,
  class: "newsletter-section"
}, pb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, hb = { class: "newsletter-content" }, mb = { class: "newsletter-text" }, gb = { class: "text-xl font-semibold mb-2" }, vb = { class: "text-gray-600" }, yb = ["disabled"], bb = ["disabled"], _b = { key: 0 }, Eb = { key: 1 }, wb = { class: "footer-main" }, xb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Nb = { class: "footer-grid" }, Sb = { class: "footer-column" }, kb = { class: "footer-heading" }, Cb = { class: "text-gray-600 mb-4" }, Ob = {
  key: 0,
  class: "social-links"
}, $b = ["href", "aria-label"], Tb = { class: "footer-heading" }, Db = { class: "footer-links" }, Ab = ["href"], Vb = {
  key: 0,
  class: "footer-column"
}, Ib = { class: "contact-info" }, Mb = {
  key: 0,
  class: "contact-item"
}, Pb = {
  key: 1,
  class: "contact-item"
}, Rb = {
  key: 2,
  class: "contact-item"
}, Lb = {
  key: 0,
  class: "payment-methods"
}, Fb = { class: "payment-icons" }, Bb = ["src", "alt"], jb = { class: "footer-bottom" }, Hb = { class: "copyright" }, Ub = {
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
    const t = K(""), n = K(!1), s = X(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
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
    return (i, l) => (b(), w("footer", db, [
      e.showNewsletter ? (b(), w("div", fb, [
        d("div", pb, [
          d("div", hb, [
            d("div", mb, [
              d("h3", gb, q(e.newsletterTitle), 1),
              d("p", vb, q(e.newsletterDescription), 1)
            ]),
            d("form", {
              onSubmit: Ot(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              $e(d("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, yb), [
                [jn, t.value]
              ]),
              d("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (b(), w("span", Eb, "Subscribing...")) : (b(), w("span", _b, "Subscribe"))
              ], 8, bb)
            ], 32)
          ])
        ])
      ])) : j("", !0),
      d("div", wb, [
        d("div", xb, [
          d("div", Nb, [
            d("div", Sb, [
              d("h4", kb, q(e.companyName), 1),
              d("p", Cb, q(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (b(), w("div", Ob, [
                (b(!0), w(re, null, he(e.socialLinks, (a) => (b(), w("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (b(), ut(Nl(r(a.name))))
                ], 8, $b))), 128))
              ])) : j("", !0)
            ]),
            (b(!0), w(re, null, he(e.footerColumns, (a) => (b(), w("div", {
              key: a.title,
              class: "footer-column"
            }, [
              d("h4", Tb, q(a.title), 1),
              d("ul", Db, [
                (b(!0), w(re, null, he(a.links, (f) => (b(), w("li", {
                  key: f.title
                }, [
                  d("a", {
                    href: f.url,
                    class: "footer-link"
                  }, q(f.title), 9, Ab)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (b(), w("div", Vb, [
              l[4] || (l[4] = d("h4", { class: "footer-heading" }, "Contact", -1)),
              d("div", Ib, [
                e.contactEmail ? (b(), w("p", Mb, [
                  l[1] || (l[1] = d("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    })
                  ], -1)),
                  je(" " + q(e.contactEmail), 1)
                ])) : j("", !0),
                e.contactPhone ? (b(), w("p", Pb, [
                  l[2] || (l[2] = d("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    })
                  ], -1)),
                  je(" " + q(e.contactPhone), 1)
                ])) : j("", !0),
                e.contactAddress ? (b(), w("p", Rb, [
                  l[3] || (l[3] = d("svg", {
                    class: "w-5 h-5 inline mr-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }),
                    d("path", {
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
          e.paymentMethods.length > 0 ? (b(), w("div", Lb, [
            l[5] || (l[5] = d("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            d("div", Fb, [
              (b(!0), w(re, null, he(e.paymentMethods, (a) => (b(), w("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, Bb))), 128))
            ])
          ])) : j("", !0),
          d("div", jb, [
            d("p", Hb, " © " + q(s.value) + " " + q(e.companyName) + ". All rights reserved. ", 1),
            l[6] || (l[6] = d("div", { class: "footer-bottom-links" }, [
              d("a", {
                href: "/pages/privacy-policy",
                class: "footer-bottom-link"
              }, "Privacy Policy"),
              d("a", {
                href: "/pages/terms-of-service",
                class: "footer-bottom-link"
              }, "Terms of Service"),
              d("a", {
                href: "/pages/refund-policy",
                class: "footer-bottom-link"
              }, "Refund Policy")
            ], -1))
          ])
        ])
      ])
    ]));
  }
}, qb = /* @__PURE__ */ Ye(Ub, [["__scopeId", "data-v-1c1567f0"]]), zb = ["href"], Wb = ["src", "alt"], Kb = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, Gb = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, Yb = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, Jb = { class: "p-4" }, Xb = {
  key: 0,
  class: "mb-3"
}, Qb = { class: "flex gap-1.5 flex-wrap" }, Zb = ["onClick", "title"], e_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, t_ = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, n_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, s_ = ["href"], o_ = {
  key: 2,
  class: "flex items-center gap-1 mb-2"
}, r_ = { class: "flex" }, i_ = { class: "flex items-baseline gap-2 mb-4" }, l_ = { class: "text-xl font-bold text-gray-900" }, a_ = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, c_ = ["disabled"], u_ = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, d_ = { key: 1 }, f_ = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, p_ = {
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
    const n = X(() => {
      var $, T, A;
      return ((A = (T = ($ = window.Shopline) == null ? void 0 : $.theme) == null ? void 0 : T.settings) == null ? void 0 : A.card_show_vendor) !== !1;
    }), s = X(() => {
      var $, T, A;
      return ((A = (T = ($ = window.Shopline) == null ? void 0 : $.theme) == null ? void 0 : T.settings) == null ? void 0 : A.card_show_reviews) !== !1;
    }), o = e, r = t, i = K(""), l = K(!1), a = K(!1), f = K(!1), u = K(!1), c = X(() => o.product ? o.product : {
      id: o.productId,
      title: o.title,
      handle: o.handle,
      url: o.url,
      vendor: o.vendor,
      price: typeof o.price == "string" ? parseFloat(o.price) : o.price,
      compare_at_price: typeof o.compareAtPrice == "string" ? parseFloat(o.compareAtPrice) : o.compareAtPrice,
      available: o.available,
      images: o.images || (o.image ? [{ src: o.image }] : []),
      featured_image: o.image,
      options: [],
      variants: o.variantId ? [{ id: o.variantId }] : []
    }), p = X(() => {
      const $ = c.value.handle;
      return c.value.url || ($ ? `/products/${$}` : "#");
    }), m = X(() => {
      var $, T, A;
      return l.value && (($ = c.value.images) != null && $[1]) ? c.value.images[1].src : ((A = (T = c.value.images) == null ? void 0 : T[0]) == null ? void 0 : A.src) || c.value.featured_image || c.value.image || "/placeholder.jpg";
    }), g = X(() => {
      var $;
      return ($ = c.value.options) == null ? void 0 : $.some(
        (T) => {
          var A, L;
          return ((A = T.name) == null ? void 0 : A.toLowerCase().includes("color")) || ((L = T.name) == null ? void 0 : L.toLowerCase().includes("colour"));
        }
      );
    }), h = X(() => {
      var T;
      const $ = (T = c.value.options) == null ? void 0 : T.find(
        (A) => {
          var L, G;
          return ((L = A.name) == null ? void 0 : L.toLowerCase().includes("color")) || ((G = A.name) == null ? void 0 : G.toLowerCase().includes("colour"));
        }
      );
      return ($ == null ? void 0 : $.values) || [];
    }), I = X(() => c.value.price || 0), k = X(() => c.value.compare_at_price || 0), N = X(() => c.value.available && k.value > I.value), v = X(() => N.value ? Math.round((k.value - I.value) / k.value * 100) : 0), O = X(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: u.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), _ = X(() => {
      var $, T, A;
      return ((A = (T = ($ = window.Shopline) == null ? void 0 : $.theme) == null ? void 0 : T.settings) == null ? void 0 : A.show_product_card_wishlist) !== !1;
    }), M = ($) => `$${($ / 100).toFixed(2)}`, S = ($) => {
      const T = {
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
      }, A = $.toLowerCase();
      return T[A] || `#${A.replace("#", "")}`;
    }, x = () => {
      var $;
      (($ = c.value.images) == null ? void 0 : $.length) > 1 && (l.value = !0);
    }, y = () => {
      l.value = !1;
    }, D = ($) => {
      i.value = $.value;
    }, R = () => {
      f.value = !f.value;
    }, P = async () => {
      var $, T, A, L;
      a.value = !0;
      try {
        const G = (T = ($ = c.value.variants) == null ? void 0 : $[0]) == null ? void 0 : T.id;
        if (!G)
          throw console.error("No variant ID found for product:", c.value), new Error("No variant ID found");
        const ee = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: G,
              quantity: 1
            }]
          })
        });
        if (!ee.ok)
          throw new Error("Failed to add to cart");
        const ve = await ee.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((L = (A = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : A.settings) == null ? void 0 : L.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", r("add-to-cart", { variantId: G, quantity: 1 });
      } catch (G) {
        console.error("Error adding to cart:", G);
      } finally {
        a.value = !1;
      }
    };
    return ($, T) => (b(), w("div", {
      class: "product-card group relative bg-white transition-all duration-300 overflow-hidden",
      style: Ue(O.value),
      onMouseenter: T[2] || (T[2] = (A) => u.value = !0),
      onMouseleave: T[3] || (T[3] = (A) => u.value = !1)
    }, [
      d("a", {
        href: p.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        m.value ? (b(), w("img", {
          key: 0,
          src: m.value,
          alt: c.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: x,
          onMouseleave: y
        }, null, 40, Wb)) : (b(), w("div", Kb, T[4] || (T[4] = [
          d("svg", {
            class: "w-20 h-20 text-gray-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            })
          ], -1)
        ]))),
        N.value ? (b(), w("div", Gb, " -" + q(v.value) + "% ", 1)) : j("", !0),
        c.value.available && _.value ? (b(), w("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: Ot(R, ["prevent"])
        }, [
          (b(), w("svg", {
            class: Ee(["w-5 h-5", f.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, T[5] || (T[5] = [
            d("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : j("", !0),
        c.value.available ? j("", !0) : (b(), w("div", Yb, T[6] || (T[6] = [
          d("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, zb),
      d("div", Jb, [
        g.value ? (b(), w("div", Xb, [
          d("div", Qb, [
            (b(!0), w(re, null, he(h.value, (A) => (b(), w("button", {
              key: A.value,
              onClick: (L) => D(A),
              title: A.value,
              class: Ee([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                i.value === A.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: Ue({ backgroundColor: S(A.value) })
            }, [
              i.value === A.value ? (b(), w("span", e_, T[7] || (T[7] = [
                d("svg", {
                  class: "w-4 h-4 text-white drop-shadow",
                  fill: "currentColor",
                  viewBox: "0 0 20 20"
                }, [
                  d("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd"
                  })
                ], -1)
              ]))) : j("", !0)
            ], 14, Zb))), 128))
          ])
        ])) : j("", !0),
        n.value && c.value.vendor ? (b(), w("p", t_, q(c.value.vendor), 1)) : j("", !0),
        d("h3", n_, [
          d("a", {
            href: p.value,
            class: "hover:text-gray-700 transition-colors"
          }, q(c.value.title || "Untitled"), 9, s_)
        ]),
        s.value ? (b(), w("div", o_, [
          d("div", r_, [
            (b(), w(re, null, he(5, (A) => d("svg", {
              key: A,
              class: Ee(["w-4 h-4", A <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, T[8] || (T[8] = [
              d("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          T[9] || (T[9] = d("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ])) : j("", !0),
        d("div", i_, [
          d("span", l_, q(M(I.value)), 1),
          k.value > I.value ? (b(), w("span", a_, q(M(k.value)), 1)) : j("", !0)
        ]),
        c.value.available ? (b(), w("button", {
          key: 3,
          onClick: P,
          disabled: a.value,
          class: "w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          style: {
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
            borderRadius: "var(--button-radius)"
          },
          onMouseenter: T[0] || (T[0] = (A) => A.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
          onMouseleave: T[1] || (T[1] = (A) => A.target.style.backgroundColor = "var(--button-primary-bg)")
        }, [
          a.value ? j("", !0) : (b(), w("svg", u_, T[10] || (T[10] = [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          a.value ? (b(), w("svg", f_, T[11] || (T[11] = [
            d("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4"
            }, null, -1),
            d("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            }, null, -1)
          ]))) : (b(), w("span", d_, "Add to Cart"))
        ], 40, c_)) : j("", !0)
      ])
    ], 36));
  }
}, h_ = { class: "collection-filters" }, m_ = { class: "lg:hidden mb-4" }, g_ = { class: "space-y-6" }, v_ = {
  key: 0,
  class: "filter-group"
}, y_ = { class: "filter-group" }, b_ = { class: "flex items-center" }, __ = { class: "filter-group" }, E_ = { class: "space-y-2" }, w_ = { class: "flex items-center" }, x_ = { class: "flex items-center" }, N_ = { class: "flex items-center" }, S_ = { class: "flex items-center" }, k_ = {
  key: 1,
  class: "filter-group"
}, C_ = { class: "space-y-2" }, O_ = ["value"], $_ = { class: "ml-2 text-sm" }, T_ = {
  key: 2,
  class: "filter-group"
}, D_ = { class: "space-y-2" }, A_ = ["value"], V_ = { class: "ml-2 text-sm" }, I_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, M_ = { class: "h-full flex flex-col" }, P_ = { class: "flex items-center justify-between p-4 border-b" }, R_ = { class: "flex-1 overflow-y-auto p-4" }, L_ = { class: "space-y-6" }, F_ = {
  key: 0,
  class: "filter-group"
}, B_ = { class: "filter-group" }, j_ = { class: "flex items-center" }, H_ = { class: "filter-group" }, U_ = { class: "space-y-2" }, q_ = { class: "flex items-center" }, z_ = { class: "flex items-center" }, W_ = { class: "flex items-center" }, K_ = { class: "flex items-center" }, G_ = {
  key: 1,
  class: "filter-group"
}, Y_ = { class: "space-y-2" }, J_ = ["value"], X_ = { class: "ml-2 text-sm" }, Q_ = {
  key: 2,
  class: "filter-group"
}, Z_ = { class: "space-y-2" }, e2 = ["value"], t2 = { class: "ml-2 text-sm" }, n2 = {
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
    const n = e, s = t, o = K("manual"), r = K([]), i = K([]), l = K([]), a = K(!1), f = K(!1), u = () => {
      const M = new URLSearchParams(window.location.search);
      r.value = [], i.value = [], l.value = [], a.value = !1, o.value = M.get("sort_by") || "manual", M.get("filter.v.availability") === "1" && (a.value = !0);
      const S = M.getAll("filter.p.product_type");
      S.length > 0 && (i.value = S);
      const x = M.getAll("filter.p.vendor");
      x.length > 0 && (l.value = x);
      const y = M.getAll("filter.price.range");
      y.length > 0 && (r.value = y);
    }, c = () => {
      u();
    }, p = X(() => {
      var S, x;
      const M = ((x = (S = window.Shopline) == null ? void 0 : S.theme) == null ? void 0 : x.settings) || {};
      return {
        "--card-radius": M.card_border_radius ? `${M.card_border_radius}px` : "8px"
      };
    }), m = X(() => {
      const M = /* @__PURE__ */ new Set();
      return n.products.forEach((S) => {
        S.product_type && M.add(S.product_type);
      }), Array.from(M).sort();
    }), g = X(() => {
      const M = /* @__PURE__ */ new Set();
      return n.products.forEach((S) => {
        S.vendor && M.add(S.vendor);
      }), Array.from(M).sort();
    }), h = X(() => r.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), I = () => {
      const M = new URL(window.location.href);
      o.value === "manual" ? M.searchParams.delete("sort_by") : M.searchParams.set("sort_by", o.value), window.location.href = M.toString();
    }, k = () => {
      f.value || N(), _();
    }, N = () => {
      const M = new URLSearchParams(window.location.search), S = [];
      for (const [y] of M)
        y.startsWith("filter.") && S.push(y);
      S.forEach((y) => {
        for (; M.has(y); )
          M.delete(y);
      }), a.value && M.set("filter.v.availability", "1"), r.value.length > 0 && r.value.forEach((y) => {
        M.append("filter.price.range", y);
      }), i.value.length > 0 && i.value.forEach((y) => {
        M.append("filter.p.product_type", y);
      }), l.value.length > 0 && l.value.forEach((y) => {
        M.append("filter.p.vendor", y);
      });
      const x = `${window.location.pathname}${M.toString() ? "?" + M.toString() : ""}`;
      window.location.href = x;
    }, v = () => {
      r.value = [], i.value = [], l.value = [], a.value = !1;
      const M = new URLSearchParams(window.location.search), S = [];
      for (const [D] of M)
        D.startsWith("filter.") && S.push(D);
      S.forEach((D) => M.delete(D));
      const x = M.get("sort_by"), y = `${window.location.pathname}${x ? "?sort_by=" + x : ""}`;
      window.location.href = y;
    }, O = () => {
      f.value = !1, N();
    }, _ = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: r.value,
        types: i.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return He(() => {
      u(), window.addEventListener("popstate", c);
    }), js(() => {
      window.removeEventListener("popstate", c);
    }), (M, S) => (b(), w("div", h_, [
      d("div", m_, [
        d("button", {
          onClick: S[0] || (S[0] = (x) => f.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 hover:bg-secondary-50 transition-colors",
          style: { borderRadius: "var(--card-radius, 8px)" }
        }, S[20] || (S[20] = [
          d("span", { class: "font-medium" }, "Filters", -1),
          d("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1)
        ]))
      ]),
      d("div", {
        class: "hidden lg:block filters-card",
        style: Ue(p.value)
      }, [
        d("div", g_, [
          e.showSort ? (b(), w("div", v_, [
            S[22] || (S[22] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
            $e(d("select", {
              "onUpdate:modelValue": S[1] || (S[1] = (x) => o.value = x),
              onChange: I,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, S[21] || (S[21] = [
              Fn('<option value="manual" data-v-308e1139>Featured</option><option value="best-selling" data-v-308e1139>Best Selling</option><option value="title-ascending" data-v-308e1139>Alphabetically, A-Z</option><option value="title-descending" data-v-308e1139>Alphabetically, Z-A</option><option value="price-ascending" data-v-308e1139>Price, low to high</option><option value="price-descending" data-v-308e1139>Price, high to low</option><option value="created-ascending" data-v-308e1139>Date, old to new</option><option value="created-descending" data-v-308e1139>Date, new to old</option>', 8)
            ]), 544), [
              [As, o.value]
            ])
          ])) : j("", !0),
          d("div", y_, [
            S[24] || (S[24] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
            d("label", b_, [
              $e(d("input", {
                type: "checkbox",
                "onUpdate:modelValue": S[2] || (S[2] = (x) => a.value = x),
                onChange: k,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Le, a.value]
              ]),
              S[23] || (S[23] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          d("div", __, [
            S[29] || (S[29] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
            d("div", E_, [
              d("label", w_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": S[3] || (S[3] = (x) => r.value = x),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[25] || (S[25] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              d("label", x_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": S[4] || (S[4] = (x) => r.value = x),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[26] || (S[26] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              d("label", N_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": S[5] || (S[5] = (x) => r.value = x),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[27] || (S[27] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              d("label", S_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": S[6] || (S[6] = (x) => r.value = x),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[28] || (S[28] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          m.value.length > 0 ? (b(), w("div", k_, [
            S[30] || (S[30] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
            d("div", C_, [
              (b(!0), w(re, null, he(m.value, (x) => (b(), w("label", {
                key: x,
                class: "flex items-center"
              }, [
                $e(d("input", {
                  type: "checkbox",
                  value: x,
                  "onUpdate:modelValue": S[7] || (S[7] = (y) => i.value = y),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, O_), [
                  [Le, i.value]
                ]),
                d("span", $_, q(x), 1)
              ]))), 128))
            ])
          ])) : j("", !0),
          g.value.length > 0 ? (b(), w("div", T_, [
            S[31] || (S[31] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
            d("div", D_, [
              (b(!0), w(re, null, he(g.value, (x) => (b(), w("label", {
                key: x,
                class: "flex items-center"
              }, [
                $e(d("input", {
                  type: "checkbox",
                  value: x,
                  "onUpdate:modelValue": S[8] || (S[8] = (y) => l.value = y),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, A_), [
                  [Le, l.value]
                ]),
                d("span", V_, q(x), 1)
              ]))), 128))
            ])
          ])) : j("", !0),
          h.value ? (b(), w("button", {
            key: 3,
            onClick: v,
            class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
          }, " Clear all filters ")) : j("", !0)
        ])
      ], 4),
      (b(), ut(bn, { to: "body" }, [
        f.value ? (b(), w("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: S[19] || (S[19] = Ot((x) => f.value = !1, ["self"]))
        }, [
          d("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: S[9] || (S[9] = (x) => f.value = !1)
          }),
          d("div", I_, [
            d("div", M_, [
              d("div", P_, [
                S[33] || (S[33] = d("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                d("button", {
                  onClick: S[10] || (S[10] = (x) => f.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, S[32] || (S[32] = [
                  d("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              d("div", R_, [
                d("div", L_, [
                  e.showSort ? (b(), w("div", F_, [
                    S[35] || (S[35] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
                    $e(d("select", {
                      "onUpdate:modelValue": S[11] || (S[11] = (x) => o.value = x),
                      onChange: I,
                      class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    }, S[34] || (S[34] = [
                      d("option", { value: "manual" }, "Featured", -1),
                      d("option", { value: "best-selling" }, "Best Selling", -1),
                      d("option", { value: "title-ascending" }, "Alphabetically, A-Z", -1),
                      d("option", { value: "title-descending" }, "Alphabetically, Z-A", -1),
                      d("option", { value: "price-ascending" }, "Price, low to high", -1),
                      d("option", { value: "price-descending" }, "Price, high to low", -1),
                      d("option", { value: "created-ascending" }, "Date, old to new", -1),
                      d("option", { value: "created-descending" }, "Date, new to old", -1)
                    ]), 544), [
                      [As, o.value]
                    ])
                  ])) : j("", !0),
                  d("div", B_, [
                    S[37] || (S[37] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
                    d("label", j_, [
                      $e(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": S[12] || (S[12] = (x) => a.value = x),
                        onChange: k,
                        class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      }, null, 544), [
                        [Le, a.value]
                      ]),
                      S[36] || (S[36] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  d("div", H_, [
                    S[42] || (S[42] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
                    d("div", U_, [
                      d("label", q_, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": S[13] || (S[13] = (x) => r.value = x),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[38] || (S[38] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      d("label", z_, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": S[14] || (S[14] = (x) => r.value = x),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[39] || (S[39] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      d("label", W_, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": S[15] || (S[15] = (x) => r.value = x),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[40] || (S[40] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      d("label", K_, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": S[16] || (S[16] = (x) => r.value = x),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[41] || (S[41] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  m.value.length > 0 ? (b(), w("div", G_, [
                    S[43] || (S[43] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
                    d("div", Y_, [
                      (b(!0), w(re, null, he(m.value, (x) => (b(), w("label", {
                        key: x,
                        class: "flex items-center"
                      }, [
                        $e(d("input", {
                          type: "checkbox",
                          value: x,
                          "onUpdate:modelValue": S[17] || (S[17] = (y) => i.value = y),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, J_), [
                          [Le, i.value]
                        ]),
                        d("span", X_, q(x), 1)
                      ]))), 128))
                    ])
                  ])) : j("", !0),
                  g.value.length > 0 ? (b(), w("div", Q_, [
                    S[44] || (S[44] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
                    d("div", Z_, [
                      (b(!0), w(re, null, he(g.value, (x) => (b(), w("label", {
                        key: x,
                        class: "flex items-center"
                      }, [
                        $e(d("input", {
                          type: "checkbox",
                          value: x,
                          "onUpdate:modelValue": S[18] || (S[18] = (y) => l.value = y),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, e2), [
                          [Le, l.value]
                        ]),
                        d("span", t2, q(x), 1)
                      ]))), 128))
                    ])
                  ])) : j("", !0),
                  h.value ? (b(), w("button", {
                    key: 3,
                    onClick: v,
                    class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
                  }, " Clear all filters ")) : j("", !0)
                ])
              ]),
              d("div", { class: "p-4 border-t" }, [
                d("button", {
                  onClick: O,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : j("", !0)
      ]))
    ]));
  }
}, Rf = /* @__PURE__ */ Ye(n2, [["__scopeId", "data-v-308e1139"]]), s2 = { class: "collection-grid" }, o2 = {
  key: 0,
  class: "mb-8"
}, r2 = { class: "text-3xl font-bold text-secondary-900 mb-4" }, i2 = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, l2 = { class: "mt-4 flex items-center justify-between" }, a2 = { class: "text-sm text-secondary-600" }, c2 = {
  key: 0,
  class: "lg:hidden"
}, u2 = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, d2 = {
  key: 0,
  class: "lg:col-span-1"
}, f2 = ["products"], p2 = {
  key: 1,
  class: "text-center py-12"
}, h2 = ["product"], m2 = {
  key: 3,
  class: "mt-8"
}, g2 = {
  key: 0,
  class: "inline-flex items-center"
}, v2 = {
  key: 1,
  class: "text-center"
}, y2 = ["disabled"], b2 = { key: 0 }, _2 = { key: 1 }, E2 = {
  key: 2,
  class: "flex items-center justify-between"
}, w2 = { class: "flex-1 flex justify-between sm:hidden" }, x2 = ["disabled"], N2 = ["disabled"], S2 = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, k2 = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, C2 = ["disabled"], O2 = ["onClick"], $2 = ["disabled"], T2 = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, D2 = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, A2 = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, V2 = { class: "text-lg font-medium text-secondary-900" }, I2 = {
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
    const t = e, n = K(!1), s = K(!1), o = K(t.currentPage), r = K(t.products.length), i = K("manual"), l = K({}), a = K(null), f = K(null), u = X(() => {
      const y = Number(t.columnsMobile), D = t.columnsDesktop, R = y === 1 ? "grid-cols-1" : "grid-cols-2", P = D <= 3 ? `md:grid-cols-${D}` : "md:grid-cols-3", $ = `lg:grid-cols-${D}`;
      return `grid ${R} ${P} ${$} gap-4 lg:gap-6`;
    }), c = X(() => {
      var R, P, $;
      let y = [...t.products];
      switch (l.value.inStockOnly && (y = y.filter((T) => T.available)), ((R = l.value.priceRanges) == null ? void 0 : R.length) > 0 && (y = y.filter((T) => {
        const A = T.price / 100;
        return l.value.priceRanges.some((L) => L === "0-50" ? A < 50 : L === "50-100" ? A >= 50 && A < 100 : L === "100-200" ? A >= 100 && A < 200 : L === "200+" ? A >= 200 : !1);
      })), ((P = l.value.types) == null ? void 0 : P.length) > 0 && (y = y.filter((T) => l.value.types.includes(T.product_type))), (($ = l.value.vendors) == null ? void 0 : $.length) > 0 && (y = y.filter((T) => l.value.vendors.includes(T.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          y.sort((T, A) => T.price - A.price);
          break;
        case "price-descending":
          y.sort((T, A) => A.price - T.price);
          break;
        case "title-ascending":
          y.sort((T, A) => T.title.localeCompare(A.title));
          break;
        case "title-descending":
          y.sort((T, A) => A.title.localeCompare(T.title));
          break;
        case "created-ascending":
          y.sort((T, A) => new Date(T.created_at) - new Date(A.created_at));
          break;
        case "created-descending":
          y.sort((T, A) => new Date(A.created_at) - new Date(T.created_at));
          break;
      }
      return y;
    }), p = X(() => {
      if (t.enableInfiniteScroll)
        return c.value.slice(0, r.value);
      const y = (o.value - 1) * t.productsPerPage, D = y + t.productsPerPage;
      return c.value.slice(y, D);
    }), m = X(() => t.totalPages || Math.ceil(c.value.length / t.productsPerPage)), g = X(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : r.value < c.value.length), h = X(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, c.value.length - r.value)), I = X(() => {
      const y = [], D = m.value, R = o.value;
      if (D <= 7)
        for (let P = 1; P <= D; P++)
          y.push(P);
      else if (R <= 3) {
        for (let P = 1; P <= 5; P++)
          y.push(P);
        y.push("..."), y.push(D);
      } else if (R >= D - 2) {
        y.push(1), y.push("...");
        for (let P = D - 4; P <= D; P++)
          y.push(P);
      } else {
        y.push(1), y.push("...");
        for (let P = R - 1; P <= R + 1; P++)
          y.push(P);
        y.push("..."), y.push(D);
      }
      return y.filter((P) => P === "..." || P >= 1 && P <= D);
    }), k = (y) => {
      l.value = y, o.value = 1, r.value = t.productsPerPage;
    }, N = () => {
      o.value = 1, r.value = t.productsPerPage;
    }, v = () => {
      s.value = !0, setTimeout(() => {
        r.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, O = async (y) => {
      var R;
      const D = new FormData();
      D.append("id", y.variants[0].id), D.append("quantity", "1"), await ((R = window.OrionCart) == null ? void 0 : R.addItem(D)), console.log("Added to cart:", y.title);
    }, _ = (y) => {
      a.value = y;
    }, M = () => {
      a.value = null;
    };
    let S = null;
    const x = () => {
      !t.enableInfiniteScroll || !f.value || (S = new IntersectionObserver(
        (y) => {
          y[0].isIntersecting && g.value && !s.value && v();
        },
        { threshold: 0.1 }
      ), S.observe(f.value));
    };
    return He(() => {
      x();
    }), Lt(() => {
      S && S.disconnect();
    }), Wt(() => t.enableInfiniteScroll, () => {
      x();
    }), (y, D) => (b(), w("div", s2, [
      e.showHeader ? (b(), w("div", o2, [
        d("h1", r2, q(e.collectionTitle), 1),
        e.collectionDescription ? (b(), w("div", i2, q(e.collectionDescription), 1)) : j("", !0),
        d("div", l2, [
          d("p", a2, q(e.totalProducts || c.value.length) + " products ", 1),
          e.enableSorting ? (b(), w("div", c2, [
            $e(d("select", {
              "onUpdate:modelValue": D[0] || (D[0] = (R) => i.value = R),
              onChange: N,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, D[5] || (D[5] = [
              Fn('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [As, i.value]
            ])
          ])) : j("", !0)
        ])
      ])) : j("", !0),
      d("div", u2, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (b(), w("aside", d2, [
          d("collection-filters", {
            products: e.products,
            onUpdateFilters: k
          }, null, 40, f2)
        ])) : j("", !0),
        d("div", {
          class: Ee(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (b(), w("div", {
            key: 0,
            class: Ee(u.value)
          }, [
            (b(), w(re, null, he(6, (R) => d("div", {
              key: R,
              class: "animate-pulse"
            }, D[6] || (D[6] = [
              d("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              d("div", { class: "mt-4 space-y-2" }, [
                d("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                d("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : c.value.length === 0 ? (b(), w("div", p2, D[7] || (D[7] = [
            d("svg", {
              class: "mx-auto h-12 w-12 text-secondary-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            ], -1),
            d("h3", { class: "mt-2 text-sm font-medium text-secondary-900" }, "No products found", -1),
            d("p", { class: "mt-1 text-sm text-secondary-500" }, "Try adjusting your filters", -1)
          ]))) : (b(), w("div", {
            key: 2,
            class: Ee(u.value)
          }, [
            (b(!0), w(re, null, he(p.value, (R) => (b(), w("product-card", {
              key: R.id,
              product: R,
              onQuickAdd: O,
              onQuickView: _
            }, null, 40, h2))), 128))
          ], 2)),
          !n.value && c.value.length > 0 ? (b(), w("div", m2, [
            e.enableInfiniteScroll ? (b(), w("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: f,
              class: "text-center py-4"
            }, [
              s.value ? (b(), w("div", g2, D[8] || (D[8] = [
                d("svg", {
                  class: "animate-spin h-5 w-5 text-primary-600 mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  d("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  d("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                je(" Loading more products... ", -1)
              ]))) : j("", !0)
            ], 512)) : g.value ? (b(), w("div", v2, [
              d("button", {
                onClick: v,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (b(), w("span", b2, "Loading...")) : (b(), w("span", _2, "Load More (" + q(h.value) + " remaining)", 1))
              ], 8, y2)
            ])) : j("", !0),
            !e.enableInfiniteScroll && m.value > 1 ? (b(), w("nav", E2, [
              d("div", w2, [
                d("button", {
                  onClick: D[1] || (D[1] = (R) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, x2),
                d("button", {
                  onClick: D[2] || (D[2] = (R) => o.value++),
                  disabled: o.value === m.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, N2)
              ]),
              d("div", S2, [
                d("div", null, [
                  d("nav", k2, [
                    d("button", {
                      onClick: D[3] || (D[3] = (R) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, D[9] || (D[9] = [
                      d("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        d("path", {
                          "fill-rule": "evenodd",
                          d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, C2),
                    (b(!0), w(re, null, he(I.value, (R) => (b(), w("button", {
                      key: R,
                      onClick: (P) => o.value = R,
                      class: Ee([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === R ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, q(R), 11, O2))), 128)),
                    d("button", {
                      onClick: D[4] || (D[4] = (R) => o.value++),
                      disabled: o.value === m.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, D[10] || (D[10] = [
                      d("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        d("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, $2)
                  ])
                ])
              ])
            ])) : j("", !0)
          ])) : j("", !0)
        ], 2)
      ]),
      (b(), ut(bn, { to: "body" }, [
        a.value ? (b(), w("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: Ot(M, ["self"])
        }, [
          d("div", T2, [
            d("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: M
            }),
            d("div", D2, [
              d("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                d("button", {
                  onClick: M,
                  class: "bg-white text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  style: { borderRadius: "var(--card-radius, 8px)" }
                }, D[11] || (D[11] = [
                  d("svg", {
                    class: "h-6 w-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              d("div", A2, [
                d("h3", V2, q(a.value.title), 1),
                D[12] || (D[12] = d("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : j("", !0)
      ]))
    ]));
  }
}, M2 = { class: "collection-sort-wrapper" }, P2 = {
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
    const n = K(e.currentSort), s = () => new URLSearchParams(window.location.search), o = (i) => {
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
    }), (i, l) => (b(), w("div", M2, [
      $e(d("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
        onChange: r,
        class: "px-4 py-2 min-w-[200px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        style: { borderRadius: "var(--button-radius)" }
      }, l[1] || (l[1] = [
        Fn('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option><option value="created-ascending">Date: Old to New</option><option value="created-descending">Date: New to Old</option>', 8)
      ]), 544), [
        [As, n.value]
      ])
    ]));
  }
}, R2 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, L2 = { class: "absolute inset-0 overflow-hidden" }, F2 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, B2 = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, j2 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, H2 = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, U2 = { class: "h-12 flex flex-col justify-between" }, q2 = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, z2 = { class: "mb-6" }, W2 = { class: "flex items-center cursor-pointer" }, K2 = { class: "mb-6" }, G2 = { class: "space-y-2" }, Y2 = ["value"], J2 = { class: "ml-2 text-sm" }, X2 = {
  key: 0,
  class: "mb-6"
}, Q2 = { class: "space-y-2" }, Z2 = ["value"], eE = { class: "ml-2 text-sm" }, tE = {
  key: 1,
  class: "mb-6"
}, nE = { class: "space-y-2" }, sE = ["value"], oE = { class: "ml-2 text-sm" }, rE = {
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
    const t = e, n = K(!1), s = K({
      inStock: !1,
      priceRanges: [],
      types: [],
      vendors: []
    }), o = [
      { value: "0-50", label: "Under $50" },
      { value: "50-100", label: "$50 - $100" },
      { value: "100-200", label: "$100 - $200" },
      { value: "200+", label: "$200 & above" }
    ], r = X(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.product_type && g.add(h.product_type);
      }), Array.from(g).sort();
    }), i = X(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.vendor && g.add(h.vendor);
      }), Array.from(g).sort();
    }), l = X(() => {
      let g = 0;
      return s.value.inStock && g++, g += s.value.priceRanges.length, g += s.value.types.length, g += s.value.vendors.length, g;
    }), a = () => {
      n.value = !n.value, n.value ? (p(), document.body.style.overflow = "hidden") : document.body.style.overflow = "";
    }, f = () => {
      n.value = !1, document.body.style.overflow = "";
    }, u = () => {
      const g = new URLSearchParams(window.location.search), h = [];
      for (const [k] of g)
        k.startsWith("filter.") && h.push(k);
      h.forEach((k) => {
        for (; g.has(k); )
          g.delete(k);
      }), s.value.inStock && g.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((k) => {
        g.append("filter.price.range", k);
      }), s.value.types.length > 0 && s.value.types.forEach((k) => {
        g.append("filter.p.product_type", k);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((k) => {
        g.append("filter.p.vendor", k);
      });
      const I = `${window.location.pathname}${g.toString() ? "?" + g.toString() : ""}`;
      window.location.href = I;
    }, c = () => {
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
      const I = g.get("sort_by"), k = `${window.location.pathname}${I ? "?sort_by=" + I : ""}`;
      window.location.href = k;
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
      const k = g.getAll("filter.price.range");
      k.length > 0 && (s.value.priceRanges = k);
    }, m = () => {
      p();
    };
    return He(() => {
      p(), window.addEventListener("popstate", m);
    }), js(() => {
      window.removeEventListener("popstate", m), document.body.style.overflow = "";
    }), (g, h) => (b(), w("div", null, [
      d("button", {
        onClick: a,
        class: "flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors",
        style: { borderRadius: "var(--button-radius)" }
      }, [
        h[4] || (h[4] = d("svg", {
          class: "w-5 h-5",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          })
        ], -1)),
        h[5] || (h[5] = d("span", null, "Filter", -1)),
        d("span", {
          class: Ee(["ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }]),
          style: { borderRadius: "9999px" }
        }, q(l.value || "0"), 3)
      ]),
      (b(), ut(bn, { to: "body" }, [
        ue(rt, { name: "drawer" }, {
          default: Me(() => [
            n.value ? (b(), w("div", R2, [
              d("div", L2, [
                ue(rt, { name: "fade" }, {
                  default: Me(() => [
                    n.value ? (b(), w("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: f
                    })) : j("", !0)
                  ]),
                  _: 1
                }),
                d("div", F2, [
                  ue(rt, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Me(() => [
                      n.value ? (b(), w("div", B2, [
                        d("div", j2, [
                          d("div", H2, [
                            d("div", U2, [
                              h[6] || (h[6] = d("h2", { class: "text-lg font-medium text-gray-900" }, "Filters", -1)),
                              d("p", {
                                class: Ee(["text-sm text-gray-500 h-5 transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }])
                              }, q(l.value || "0") + " " + q((l.value || 0) === 1 ? "filter" : "filters") + " active ", 3)
                            ]),
                            d("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: f
                            }, h[7] || (h[7] = [
                              d("span", { class: "sr-only" }, "Close filters", -1),
                              d("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          d("div", q2, [
                            d("div", z2, [
                              h[9] || (h[9] = d("h3", { class: "font-medium mb-3" }, "Availability", -1)),
                              d("label", W2, [
                                $e(d("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": h[0] || (h[0] = (I) => s.value.inStock = I),
                                  class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                }, null, 512), [
                                  [Le, s.value.inStock]
                                ]),
                                h[8] || (h[8] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            d("div", K2, [
                              h[10] || (h[10] = d("h3", { class: "font-medium mb-3" }, "Price", -1)),
                              d("div", G2, [
                                (b(), w(re, null, he(o, (I) => d("label", {
                                  key: I.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: I.value,
                                    "onUpdate:modelValue": h[1] || (h[1] = (k) => s.value.priceRanges = k),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, Y2), [
                                    [Le, s.value.priceRanges]
                                  ]),
                                  d("span", J2, q(I.label), 1)
                                ])), 64))
                              ])
                            ]),
                            r.value.length > 0 ? (b(), w("div", X2, [
                              h[11] || (h[11] = d("h3", { class: "font-medium mb-3" }, "Product Type", -1)),
                              d("div", Q2, [
                                (b(!0), w(re, null, he(r.value, (I) => (b(), w("label", {
                                  key: I,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: I,
                                    "onUpdate:modelValue": h[2] || (h[2] = (k) => s.value.types = k),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, Z2), [
                                    [Le, s.value.types]
                                  ]),
                                  d("span", eE, q(I), 1)
                                ]))), 128))
                              ])
                            ])) : j("", !0),
                            i.value.length > 0 ? (b(), w("div", tE, [
                              h[12] || (h[12] = d("h3", { class: "font-medium mb-3" }, "Brand", -1)),
                              d("div", nE, [
                                (b(!0), w(re, null, he(i.value, (I) => (b(), w("label", {
                                  key: I,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: I,
                                    "onUpdate:modelValue": h[3] || (h[3] = (k) => s.value.vendors = k),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, sE), [
                                    [Le, s.value.vendors]
                                  ]),
                                  d("span", oE, q(I), 1)
                                ]))), 128))
                              ])
                            ])) : j("", !0)
                          ]),
                          d("div", { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, [
                            d("button", {
                              onClick: u,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Apply Filters "),
                            d("button", {
                              onClick: c,
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
}, iE = /* @__PURE__ */ Ye(rE, [["__scopeId", "data-v-7b26bf02"]]);
function lE(e) {
  return cl() ? (jc(e), !0) : !1;
}
function Lf(e) {
  return typeof e == "function" ? e() : ko(e);
}
const aE = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const cE = Object.prototype.toString, uE = (e) => cE.call(e) === "[object Object]", nl = () => {
};
function dE(e) {
  var t;
  const n = Lf(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ff = aE ? window : void 0;
function _i(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Ff) : [t, n, s, o] = e, !t)
    return nl;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((u) => u()), r.length = 0;
  }, l = (u, c, p, m) => (u.addEventListener(c, p, m), () => u.removeEventListener(c, p, m)), a = Wt(
    () => [dE(t), Lf(o)],
    ([u, c]) => {
      if (i(), !u)
        return;
      const p = uE(c) ? { ...c } : c;
      r.push(
        ...n.flatMap((m) => s.map((g) => l(u, m, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    a(), i();
  };
  return lE(f), f;
}
function fE(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: r,
    passive: i = !0,
    window: l = Ff
  } = t, a = Ss({ x: 0, y: 0 }), f = Ss({ x: 0, y: 0 }), u = X(() => a.x - f.x), c = X(() => a.y - f.y), { max: p, abs: m } = Math, g = X(() => p(m(u.value), m(c.value)) >= n), h = K(!1), I = X(() => g.value ? m(u.value) > m(c.value) ? u.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), k = (y) => [y.touches[0].clientX, y.touches[0].clientY], N = (y, D) => {
    a.x = y, a.y = D;
  }, v = (y, D) => {
    f.x = y, f.y = D;
  };
  let O;
  const _ = pE(l == null ? void 0 : l.document);
  i ? O = _ ? { passive: !0 } : { capture: !1 } : O = _ ? { passive: !1, capture: !0 } : { capture: !0 };
  const M = (y) => {
    h.value && (o == null || o(y, I.value)), h.value = !1;
  }, S = [
    _i(e, "touchstart", (y) => {
      if (y.touches.length !== 1)
        return;
      O.capture && !O.passive && y.preventDefault();
      const [D, R] = k(y);
      N(D, R), v(D, R), r == null || r(y);
    }, O),
    _i(e, "touchmove", (y) => {
      if (y.touches.length !== 1)
        return;
      const [D, R] = k(y);
      v(D, R), !h.value && g.value && (h.value = !0), h.value && (s == null || s(y));
    }, O),
    _i(e, ["touchend", "touchcancel"], M, O)
  ];
  return {
    isPassiveEventSupported: _,
    isSwiping: h,
    direction: I,
    coordsStart: a,
    coordsEnd: f,
    lengthX: u,
    lengthY: c,
    stop: () => S.forEach((y) => y())
  };
}
function pE(e) {
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
const hE = { class: "product-gallery" }, mE = { class: "main-image-wrapper" }, gE = ["src", "alt"], vE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, yE = {
  key: 0,
  class: "thumbnails-wrapper"
}, bE = ["disabled"], _E = ["onClick", "aria-label"], EE = ["src", "alt"], wE = ["disabled"], xE = {
  key: 1,
  class: "swiper-dots"
}, NE = ["onClick", "aria-label"], SE = ["src", "alt"], kE = { class: "lightbox-counter" }, CE = 80, zo = 4, Oc = 2, OE = {
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
    const t = e, n = K(0), s = K(!1), o = K(!1), r = K(!1), i = K(!1), l = K(0), a = K(null), f = K(0), u = K(0), c = K({}), p = X(() => t.images.map((S) => {
      if (S.src)
        return S;
      const x = S.url || S;
      return {
        src: `${x}?width=${t.imageTransformWidth}`,
        thumbnail: `${x}?width=${t.thumbnailWidth}`,
        alt: S.alt || t.productTitle
      };
    })), m = X(() => p.value[n.value] || { src: "", alt: "" }), g = X(() => ({
      width: "150px",
      height: "150px",
      left: `${f.value - 150 / 2}px`,
      top: `${u.value - 150 / 2}px`
    })), h = X(() => {
      const x = f.value / c.value.width * 100, y = u.value / c.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${c.value.width * Oc}px ${c.value.height * Oc}px`,
        backgroundPosition: `${x}% ${y}%`
      };
    }), I = (S) => {
      s.value = !0, n.value = S;
    }, k = (S) => {
      S === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - zo,
        l.value + 1
      );
    }, N = (S) => {
      n.value = S, o.value = !0, document.body.style.overflow = "hidden";
    }, v = () => {
      o.value = !1, document.body.style.overflow = "";
    }, O = (S) => {
      S === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, _ = (S) => {
      const x = S.currentTarget.getBoundingClientRect();
      c.value = x, f.value = S.clientX - x.left, u.value = S.clientY - x.top;
    }, { lengthX: M } = fE(
      a,
      {
        onSwipeEnd() {
          M.value > 50 ? k("prev") : M.value < -50 && k("next");
        }
      }
    );
    return He(() => {
      i.value = window.innerWidth < 768;
      const S = () => {
        i.value = window.innerWidth < 768;
      }, x = (y) => {
        o.value && (y.key === "Escape" && v(), y.key === "ArrowLeft" && O("prev"), y.key === "ArrowRight" && O("next"));
      };
      window.addEventListener("resize", S), window.addEventListener("keydown", x), Lt(() => {
        window.removeEventListener("resize", S), window.removeEventListener("keydown", x);
      });
    }), (S, x) => (b(), w("div", hE, [
      d("div", mE, [
        d("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: x[1] || (x[1] = (y) => N(n.value)),
          onMouseenter: x[2] || (x[2] = (y) => r.value = !0),
          onMouseleave: x[3] || (x[3] = (y) => r.value = !1),
          onMousemove: _
        }, [
          d("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Ee(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: x[0] || (x[0] = (y) => s.value = !1)
          }, null, 42, gE),
          s.value ? (b(), w("div", vE, x[9] || (x[9] = [
            d("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : j("", !0),
          x[10] || (x[10] = d("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
            d("svg", {
              class: "w-5 h-5 text-gray-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              })
            ])
          ], -1)),
          r.value && !i.value ? (b(), w("div", {
            key: 1,
            class: "zoom-lens",
            style: Ue(g.value)
          }, null, 4)) : j("", !0)
        ], 32),
        r.value && !i.value ? (b(), w("div", {
          key: 0,
          class: "zoom-preview",
          style: Ue(h.value)
        }, null, 4)) : j("", !0)
      ]),
      p.value.length > 1 ? (b(), w("div", yE, [
        p.value.length > zo ? (b(), w("button", {
          key: 0,
          onClick: x[4] || (x[4] = (y) => k("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, x[11] || (x[11] = [
          d("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })
          ], -1)
        ]), 8, bE)) : j("", !0),
        d("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          d("div", {
            class: "thumbnails-track",
            style: Ue({ transform: `translateX(-${l.value * (CE + 8)}px)` })
          }, [
            (b(!0), w(re, null, he(p.value, (y, D) => (b(), w("button", {
              key: D,
              onClick: (R) => I(D),
              class: Ee(["thumbnail", { active: D === n.value }]),
              "aria-label": `View image ${D + 1}`
            }, [
              d("img", {
                src: y.thumbnail || y.src,
                alt: y.alt,
                class: "w-full h-full object-contain"
              }, null, 8, EE)
            ], 10, _E))), 128))
          ], 4)
        ], 512),
        p.value.length > zo ? (b(), w("button", {
          key: 1,
          onClick: x[5] || (x[5] = (y) => k("next")),
          disabled: l.value >= p.value.length - zo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, x[12] || (x[12] = [
          d("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 8, wE)) : j("", !0)
      ])) : j("", !0),
      p.value.length > 1 && i.value ? (b(), w("div", xE, [
        (b(!0), w(re, null, he(p.value, (y, D) => (b(), w("button", {
          key: D,
          onClick: (R) => I(D),
          class: Ee(["swiper-dot", { active: D === n.value }]),
          "aria-label": `Go to image ${D + 1}`
        }, null, 10, NE))), 128))
      ])) : j("", !0),
      (b(), ut(bn, { to: "body" }, [
        o.value ? (b(), w("div", {
          key: 0,
          class: "lightbox",
          onClick: v
        }, [
          d("button", {
            onClick: v,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, x[13] || (x[13] = [
            d("svg", {
              class: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ])),
          p.value.length > 1 ? (b(), w("button", {
            key: 0,
            onClick: x[6] || (x[6] = Ot((y) => O("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, x[14] || (x[14] = [
            d("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ]))) : j("", !0),
          d("div", {
            class: "lightbox-image-wrapper",
            onClick: x[7] || (x[7] = Ot(() => {
            }, ["stop"]))
          }, [
            d("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, SE)
          ]),
          p.value.length > 1 ? (b(), w("button", {
            key: 1,
            onClick: x[8] || (x[8] = Ot((y) => O("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, x[15] || (x[15] = [
            d("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ]))) : j("", !0),
          d("div", kE, q(n.value + 1) + " / " + q(p.value.length), 1)
        ])) : j("", !0)
      ]))
    ]));
  }
}, $E = /* @__PURE__ */ Ye(OE, [["__scopeId", "data-v-a7c1d2a3"]]), TE = { class: "product-info" }, DE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, AE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, VE = { class: "price-wrapper mb-6" }, IE = { class: "flex items-baseline gap-3" }, ME = { class: "text-3xl font-semibold text-gray-900" }, PE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, RE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, LE = {
  key: 1,
  class: "mb-6"
}, FE = ["product", "current-variant"], BE = ["value"], jE = { class: "mb-4" }, HE = ["max"], UE = { class: "mb-4" }, qE = {
  key: 0,
  class: "text-red-600 font-medium"
}, zE = {
  key: 1,
  class: "text-amber-600"
}, WE = {
  key: 2,
  class: "text-green-600"
}, KE = { class: "flex flex-col sm:flex-row gap-3" }, GE = ["disabled"], YE = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, JE = { key: 1 }, XE = { key: 2 }, QE = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, ZE = ["innerHTML"], ew = { class: "space-y-4" }, tw = {
  key: 0,
  class: "group"
}, nw = ["innerHTML"], sw = {
  key: 1,
  class: "group"
}, ow = { class: "mt-8 pt-8 border-t" }, rw = { class: "flex gap-3" }, iw = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, lw = {
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
    const n = e, s = t, o = K(n.product.selected_or_first_available_variant || ((I = n.product.variants) == null ? void 0 : I[0]) || {}), r = K(1), i = K(!1), l = K(!1), a = X(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), f = X(() => {
      var k;
      return (k = n.product.options) == null ? void 0 : k.some(
        (N) => N.name.toLowerCase() === "size" || N.name.toLowerCase() === "taille"
      );
    }), u = (k) => `$${(k / 100).toFixed(2)}`, c = (k) => {
      o.value = k, s("variant-change", k);
      const N = new URL(window.location);
      N.searchParams.set("variant", k.id), window.history.replaceState({}, "", N);
    }, p = async () => {
      var N;
      i.value = !0;
      const k = new FormData();
      k.append("id", o.value.id), k.append("quantity", r.value);
      try {
        await ((N = window.OrionCart) == null ? void 0 : N.addItem(k));
        const v = event.target, O = v.textContent;
        v.textContent = "✓ Added to Cart", setTimeout(() => {
          v.textContent = O;
        }, 2e3);
      } catch (v) {
        console.error("Failed to add to cart:", v), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, g = (k) => {
      const N = window.location.href, v = n.product.title, O = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(N)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(N)}&text=${encodeURIComponent(v)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(N)}&description=${encodeURIComponent(v)}`
      };
      O[k] && window.open(O[k], "_blank", "width=600,height=400");
    }, h = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (k) {
        console.error("Failed to copy link:", k);
      }
    };
    return Wt(() => n.product.selected_variant, (k) => {
      k && (o.value = k);
    }), (k, N) => (b(), w("div", TE, [
      d("h1", DE, q(e.product.title), 1),
      e.product.vendor ? (b(), w("p", AE, " by " + q(e.product.vendor), 1)) : j("", !0),
      d("div", VE, [
        d("div", IE, [
          d("span", ME, q(u(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (b(), w("span", PE, q(u(o.value.compare_at_price)), 1)) : j("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (b(), w("p", RE, " Save " + q(u(o.value.compare_at_price - o.value.price)) + " (" + q(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : j("", !0)
      ]),
      e.product.has_only_default_variant ? j("", !0) : (b(), w("div", LE, [
        d("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: c
        }, null, 40, FE)
      ])),
      d("form", {
        onSubmit: Ot(p, ["prevent"]),
        class: "mb-8"
      }, [
        d("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, BE),
        d("div", jE, [
          N[4] || (N[4] = d("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          $e(d("quantity-selector", {
            "onUpdate:modelValue": N[0] || (N[0] = (v) => r.value = v),
            min: 1,
            max: a.value
          }, null, 8, HE), [
            [jn, r.value]
          ])
        ]),
        d("div", UE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (b(), w("p", zE, " Only " + q(o.value.inventory_quantity) + " left in stock ", 1)) : (b(), w("p", WE, " ✓ In Stock ")) : (b(), w("p", qE, " Out of Stock "))
        ]),
        d("div", KE, [
          d("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || i.value
          }, [
            i.value ? (b(), w("span", YE, N[5] || (N[5] = [
              d("svg", {
                class: "animate-spin h-5 w-5",
                viewBox: "0 0 24 24"
              }, [
                d("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4",
                  fill: "none"
                }),
                d("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1),
              je(" Adding... ", -1)
            ]))) : o.value.available ? (b(), w("span", XE, " Add to Cart ")) : (b(), w("span", JE, " Sold Out "))
          ], 8, GE),
          e.showBuyNow ? (b(), ut(os, {
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
      e.product.description ? (b(), w("div", QE, [
        N[7] || (N[7] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        d("div", {
          innerHTML: e.product.description
        }, null, 8, ZE)
      ])) : j("", !0),
      d("div", ew, [
        N[10] || (N[10] = Fn('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (b(), w("details", tw, [
          N[8] || (N[8] = d("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
            d("span", { class: "font-medium" }, "Care Instructions"),
            d("svg", {
              class: "w-5 h-5 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          d("div", {
            class: "py-4 text-sm text-gray-600",
            innerHTML: e.product.care_instructions
          }, null, 8, nw)
        ])) : j("", !0),
        f.value ? (b(), w("details", sw, N[9] || (N[9] = [
          Fn('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : j("", !0)
      ]),
      d("div", ow, [
        N[15] || (N[15] = d("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        d("div", rw, [
          d("button", {
            onClick: N[1] || (N[1] = (v) => g("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, N[11] || (N[11] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          d("button", {
            onClick: N[2] || (N[2] = (v) => g("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, N[12] || (N[12] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          d("button", {
            onClick: N[3] || (N[3] = (v) => g("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, N[13] || (N[13] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" })
            ], -1)
          ])),
          d("button", {
            onClick: h,
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative",
            "aria-label": "Copy link"
          }, [
            N[14] || (N[14] = d("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              })
            ], -1)),
            l.value ? (b(), w("span", iw, " Link copied! ")) : j("", !0)
          ])
        ])
      ])
    ]));
  }
}, aw = /* @__PURE__ */ Ye(lw, [["__scopeId", "data-v-9e2c3b5c"]]), cw = {
  class: "cart-summary bg-gray-50 p-6 lg:sticky lg:top-24",
  style: { borderRadius: "var(--card-radius, 8px)" }
}, uw = { class: "space-y-3 mb-4" }, dw = { class: "flex justify-between text-sm" }, fw = { class: "text-gray-600" }, pw = { class: "font-medium text-gray-900" }, hw = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, mw = {
  key: 1,
  class: "flex justify-between text-sm"
}, gw = { class: "text-gray-900" }, vw = {
  key: 2,
  class: "flex justify-between text-sm"
}, yw = { class: "text-gray-900" }, bw = { class: "border-t pt-4 mb-6" }, _w = { class: "flex justify-between items-baseline" }, Ew = { class: "text-right" }, ww = { class: "text-xl font-bold text-gray-900" }, xw = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, Nw = { class: "mb-6" }, Sw = { class: "group" }, kw = { class: "mt-3" }, Cw = ["disabled"], Ow = ["disabled"], $w = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, Tw = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, Dw = ["disabled"], Aw = {
  key: 0,
  class: "flex items-center gap-2"
}, Vw = { key: 1 }, Iw = {
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
    const n = e, s = t, o = K(""), r = K(""), i = K(""), l = K(!1), a = K(!1), f = K(!1), u = X(() => n.cart.item_count || 0), c = X(() => n.cart.total_price || 0), p = X(() => n.cart.original_total_price || n.cart.total_price || 0), m = X(() => n.cart.total_discount || 0), g = X(() => c.value >= 5e3 ? 0 : 500), h = X(() => Math.round(c.value * 0.1)), I = (v) => `$${(v / 100).toFixed(2)}`, k = async () => {
      var v;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, r.value = "", i.value = "";
        try {
          const O = new FormData();
          O.append("discount_code", o.value);
          const _ = await fetch("/discount/apply", {
            method: "POST",
            body: O
          });
          if (_.ok)
            i.value = "Promo code applied successfully!", o.value = "", await ((v = window.OrionCart) == null ? void 0 : v.fetchCart());
          else {
            const M = await _.json();
            r.value = M.message || "Invalid promo code";
          }
        } catch (O) {
          console.error("Failed to apply promo code:", O), r.value = "Failed to apply promo code. Please try again.";
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
    return (v, O) => (b(), w("div", cw, [
      O[10] || (O[10] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      d("div", uw, [
        d("div", dw, [
          d("span", fw, "Subtotal (" + q(u.value) + " " + q(u.value === 1 ? "item" : "items") + ")", 1),
          d("span", pw, q(I(p.value)), 1)
        ]),
        m.value > 0 ? (b(), w("div", hw, [
          O[3] || (O[3] = d("span", { class: "flex items-center gap-1" }, [
            d("svg", {
              class: "w-4 h-4",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              d("path", {
                "fill-rule": "evenodd",
                d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                "clip-rule": "evenodd"
              })
            ]),
            je(" Discounts ")
          ], -1)),
          d("span", null, "-" + q(I(m.value)), 1)
        ])) : j("", !0),
        e.showShipping ? (b(), w("div", mw, [
          O[4] || (O[4] = d("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          d("span", gw, q(g.value === 0 ? "Free" : I(g.value)), 1)
        ])) : j("", !0),
        e.showTax ? (b(), w("div", vw, [
          O[5] || (O[5] = d("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          d("span", yw, q(I(h.value)), 1)
        ])) : j("", !0)
      ]),
      d("div", bw, [
        d("div", _w, [
          O[6] || (O[6] = d("span", { class: "text-lg font-semibold" }, "Total", -1)),
          d("div", Ew, [
            d("span", ww, q(I(c.value)), 1),
            m.value > 0 ? (b(), w("p", xw, " You saved " + q(I(m.value)) + "! ", 1)) : j("", !0)
          ])
        ])
      ]),
      d("div", Nw, [
        d("details", Sw, [
          O[7] || (O[7] = d("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
            d("span", null, "Have a promo code?"),
            d("svg", {
              class: "w-4 h-4 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          d("div", kw, [
            d("form", {
              onSubmit: Ot(k, ["prevent"]),
              class: "flex gap-2"
            }, [
              $e(d("input", {
                "onUpdate:modelValue": O[0] || (O[0] = (_) => o.value = _),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                style: { borderRadius: "var(--card-radius, 8px)" },
                disabled: l.value
              }, null, 8, Cw), [
                [jn, o.value]
              ]),
              d("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !o.value.trim() || l.value
              }, q(l.value ? "Applying..." : "Apply"), 9, Ow)
            ], 32),
            r.value ? (b(), w("p", $w, q(r.value), 1)) : j("", !0),
            i.value ? (b(), w("p", Tw, q(i.value), 1)) : j("", !0)
          ])
        ])
      ]),
      d("button", {
        onClick: N,
        class: "w-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: Ue({
          backgroundColor: f.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: O[1] || (O[1] = (_) => f.value = !0),
        onMouseleave: O[2] || (O[2] = (_) => f.value = !1),
        disabled: u.value === 0 || a.value
      }, [
        a.value ? (b(), w("span", Aw, O[8] || (O[8] = [
          d("svg", {
            class: "animate-spin h-5 w-5",
            viewBox: "0 0 24 24"
          }, [
            d("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4",
              fill: "none"
            }),
            d("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
          ], -1),
          je(" Processing... ", -1)
        ]))) : (b(), w("span", Vw, O[9] || (O[9] = [
          je(" Proceed to Checkout ", -1),
          d("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ], -1)
        ])))
      ], 44, Dw),
      O[11] || (O[11] = Fn('<div class="mt-6 space-y-2" data-v-daaa8299><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-daaa8299></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-daaa8299></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-daaa8299></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-daaa8299></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-daaa8299><p class="text-xs text-gray-600 mb-2" data-v-daaa8299>We accept</p><div class="flex gap-2" data-v-daaa8299><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-daaa8299></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#EB001B" data-v-daaa8299></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-daaa8299></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-daaa8299></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-daaa8299></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#253B80" data-v-daaa8299></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-daaa8299></path></svg></div></div>', 2))
    ]));
  }
}, Mw = /* @__PURE__ */ Ye(Iw, [["__scopeId", "data-v-daaa8299"]]), Pw = { class: "slideshow-banner" }, Rw = {
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
    const t = e, n = K(0), s = K([]), o = K(null), r = X(() => t.autoRotate === !0 || t.autoRotate === "true"), i = X(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const h = document.querySelector(".slideshow-prev"), I = document.querySelector(".slideshow-next"), k = document.querySelectorAll(".slide-indicator");
      h && h.addEventListener("click", u), I && I.addEventListener("click", f), k.forEach((N, v) => {
        N.addEventListener("click", () => a(v));
      }), r.value && c();
    }, a = (h) => {
      var N, v, O, _;
      if (h === n.value || !s.value.length) return;
      (N = s.value[n.value]) == null || N.classList.remove("opacity-100"), (v = s.value[n.value]) == null || v.classList.add("opacity-0");
      const I = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      I == null || I.classList.remove("opacity-100"), I == null || I.classList.add("opacity-50"), n.value = h, (O = s.value[n.value]) == null || O.classList.remove("opacity-0"), (_ = s.value[n.value]) == null || _.classList.add("opacity-100");
      const k = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      k == null || k.classList.remove("opacity-50"), k == null || k.classList.add("opacity-100");
    }, f = () => {
      const h = (n.value + 1) % s.value.length;
      a(h);
    }, u = () => {
      const h = n.value === 0 ? s.value.length - 1 : n.value - 1;
      a(h);
    }, c = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        f();
      }, i.value);
    }, p = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, m = () => {
      r.value && p();
    }, g = () => {
      r.value && c();
    };
    return He(() => {
      setTimeout(l, 100);
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.addEventListener("mouseenter", m), h.addEventListener("mouseleave", g));
    }), Lt(() => {
      p();
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.removeEventListener("mouseenter", m), h.removeEventListener("mouseleave", g));
    }), (h, I) => (b(), w("div", Pw, [
      fs(h.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Lw = /* @__PURE__ */ Ye(Rw, [["__scopeId", "data-v-8690c751"]]), Fw = { class: "testimonials-carousel relative" }, Bw = {
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
    const t = e, n = K(0), s = K([]), o = K(null), r = K(null), i = X(() => t.autoRotate === !0 || t.autoRotate === "true"), l = X(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), r.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const _ = document.querySelector(".testimonials-prev"), M = document.querySelector(".testimonials-next"), S = document.querySelectorAll(".testimonial-indicator");
      _ && _.addEventListener("click", c), M && M.addEventListener("click", u), S.forEach((x, y) => {
        x.addEventListener("click", () => f(y));
      }), i.value && p();
    }, f = (_) => {
      if (_ === n.value || !s.value.length || !r.value) return;
      n.value = _;
      const S = -s.value[0].offsetWidth * n.value;
      r.value.style.transform = `translateX(${S}px)`, document.querySelectorAll(".testimonial-indicator").forEach((y, D) => {
        D === n.value ? (y.classList.remove("bg-gray-300"), y.classList.add("bg-red-600")) : (y.classList.remove("bg-red-600"), y.classList.add("bg-gray-300"));
      });
    }, u = () => {
      const _ = (n.value + 1) % s.value.length;
      f(_);
    }, c = () => {
      const _ = n.value === 0 ? s.value.length - 1 : n.value - 1;
      f(_);
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
    let I = 0, k = 0;
    const N = (_) => {
      I = _.changedTouches[0].screenX;
    }, v = (_) => {
      k = _.changedTouches[0].screenX, O();
    }, O = () => {
      const M = I - k;
      Math.abs(M) > 50 && (M > 0 ? u() : c());
    };
    return He(() => {
      setTimeout(a, 100);
      const _ = document.querySelector(".testimonials-wrapper");
      _ && (_.addEventListener("mouseenter", g), _.addEventListener("mouseleave", h), _.addEventListener("touchstart", N), _.addEventListener("touchend", v));
    }), Lt(() => {
      m();
      const _ = document.querySelector(".testimonials-wrapper");
      _ && (_.removeEventListener("mouseenter", g), _.removeEventListener("mouseleave", h), _.removeEventListener("touchstart", N), _.removeEventListener("touchend", v));
    }), (_, M) => (b(), w("div", Fw, [
      fs(_.$slots, "default", {}, void 0, !0)
    ]));
  }
}, jw = /* @__PURE__ */ Ye(Bw, [["__scopeId", "data-v-276cc4e8"]]), Hw = { class: "video-player relative w-full h-full" }, Uw = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, qw = ["src", "title"], zw = {
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
    const t = e, n = K(!1), s = K(""), o = K(""), r = X(() => t.autoplay === !0 || t.autoplay === "true"), i = X(() => t.muted === !0 || t.muted === "true"), l = X(() => t.controls === !0 || t.controls === "true"), a = X(() => `${s.value} video player`), f = X(() => {
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
        const k = m.match(I);
        if (k)
          return { type: "youtube", id: k[1] };
      }
      const h = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const I of h) {
        const k = m.match(I);
        if (k)
          return { type: "vimeo", id: k[1] };
      }
      return { type: "", id: "" };
    }, c = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      r.value && o.value && s.value && (n.value = !0);
    };
    return He(() => {
      const m = u(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const g = document.querySelector(".play-button");
      g && g.addEventListener("click", c), p();
    }), (m, g) => (b(), w("div", Hw, [
      n.value ? (b(), w("div", Uw, [
        d("iframe", {
          src: f.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, qw)
      ])) : (b(), w("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: c
      }, [
        fs(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, Ww = /* @__PURE__ */ Ye(zw, [["__scopeId", "data-v-540fecb2"]]), Kw = { class: "password-modal" }, Gw = {
  __name: "PasswordModal",
  setup(e) {
    const t = K(!1), n = () => {
      t.value = !0, document.body.style.overflow = "hidden";
    }, s = () => {
      t.value = !1, document.body.style.overflow = "";
    }, o = (f) => {
      f.preventDefault(), t.value ? s() : n();
    }, r = (f) => {
      f.key === "Escape" && t.value && s();
    }, i = (f) => {
      const u = document.querySelector(".password-content"), c = document.querySelector(".password-toggle");
      t.value && u && !u.contains(f.target) && !c.contains(f.target) && s();
    };
    He(() => {
      const f = document.querySelector(".password-toggle");
      f && f.addEventListener("click", o), document.addEventListener("keydown", r), document.addEventListener("click", i), setTimeout(() => {
        n();
      }, 500);
    });
    const l = () => {
      const f = document.querySelector(".password-content");
      f && (t.value ? (f.style.display = "block", f.style.opacity = "1", f.style.transform = "translateY(0)") : (f.style.opacity = "0", f.style.transform = "translateY(-20px)", setTimeout(() => {
        t.value || (f.style.display = "none");
      }, 300)));
    }, a = (f) => {
      let u = t.value;
      const c = setInterval(() => {
        t.value !== u && (f(t.value, u), u = t.value);
      }, 50);
      return () => clearInterval(c);
    };
    return He(() => {
      a(() => {
        l();
      });
    }), (f, u) => (b(), w("div", Kw, [
      fs(f.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Yw = /* @__PURE__ */ Ye(Gw, [["__scopeId", "data-v-075988c6"]]), Jw = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Xw = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, Qw = { class: "bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20" }, Zw = { class: "max-w-6xl mx-auto" }, ex = { class: "relative" }, tx = { class: "px-4 py-8 sm:px-6 lg:px-8" }, nx = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, sx = { class: "flex-1 relative group" }, ox = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, rx = {
  key: 0,
  class: "relative"
}, ix = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, lx = { class: "flex flex-wrap gap-2" }, ax = ["onClick"], cx = {
  key: 0,
  class: "border-t border-gray-100"
}, ux = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, dx = {
  key: 0,
  class: "p-6"
}, fx = { class: "animate-pulse" }, px = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, hx = {
  key: 1,
  class: "p-6"
}, mx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, gx = ["href"], vx = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, yx = ["src", "alt"], bx = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, _x = { class: "flex-1 min-w-0" }, Ex = { class: "text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2" }, wx = { class: "mt-1 flex items-center gap-2" }, xx = { class: "text-sm font-semibold text-gray-900" }, Nx = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, Sx = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, kx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, Cx = ["href"], Ox = { class: "text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors" }, $x = {
  key: 3,
  class: "p-12 text-center"
}, Tx = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, Dx = ["href"], Ax = {
  __name: "SearchOverlay",
  setup(e) {
    const t = K(!1), n = K(""), s = K(null), o = K(!1), r = K({
      products: [],
      collections: []
    }), i = K(null), l = X(() => {
      var k;
      return ((k = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : k.search) || "/search";
    }), a = X(() => n.value.length > 0), f = X(() => {
      var v, O;
      const k = [], N = ((O = (v = window.Shopline) == null ? void 0 : v.theme) == null ? void 0 : O.settings) || {};
      for (let _ = 1; _ <= 6; _++) {
        const M = N[`popular_search_${_}`];
        M && M.trim() && k.push(M.trim());
      }
      return k.length === 0 ? ["New Arrivals", "Best Sellers", "Sale", "Summer Collection"] : k;
    }), u = (k) => {
      var M, S;
      if (!k && k !== 0) return "$0.00";
      const N = ((M = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : M.money_format) || "${{amount}}", v = ((S = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : S.current) || "en", _ = new Intl.NumberFormat(v, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(k));
      return N.replace("{{amount}}", _);
    }, c = async () => {
      var k;
      t.value = !0, document.body.style.overflow = "hidden", await Ln(), (k = s.value) == null || k.focus();
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
        const N = ((k = window.routes) == null ? void 0 : k.predictive_search_url) || "/search/suggest", v = await fetch(
          `${N}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (v.ok) {
          const O = await v.text(), S = new DOMParser().parseFromString(O, "text/html").querySelectorAll(".predictive-search__list-item"), x = Array.from(S).map((y) => {
            var T, A;
            const D = y.querySelector("a"), R = y.querySelector("img"), P = y.querySelector(".predictive-search__item-head"), $ = y.querySelector(".price__item");
            return {
              url: (D == null ? void 0 : D.href) || "#",
              image: (R == null ? void 0 : R.src) || "",
              title: ((T = P == null ? void 0 : P.textContent) == null ? void 0 : T.trim()) || "",
              price: ((A = $ == null ? void 0 : $.textContent) == null ? void 0 : A.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          r.value = {
            products: x,
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
    }, I = (k) => {
      k.key === "Escape" && t.value && p();
    };
    return He(() => {
      document.addEventListener("search-overlay:open", c), document.addEventListener("search-overlay:close", p), document.addEventListener("keydown", I);
    }), Lt(() => {
      document.removeEventListener("search-overlay:open", c), document.removeEventListener("search-overlay:close", p), document.removeEventListener("keydown", I);
    }), (k, N) => (b(), ut(bn, { to: "body" }, [
      ue(rt, { name: "search-overlay" }, {
        default: Me(() => [
          t.value ? (b(), w("div", Jw, [
            ue(rt, { name: "fade" }, {
              default: Me(() => [
                t.value ? (b(), w("div", {
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
                var v, O;
                return [
                  t.value ? (b(), w("div", Xw, [
                    d("div", Qw, [
                      d("div", Zw, [
                        d("div", ex, [
                          d("div", tx, [
                            d("div", nx, [
                              d("div", sx, [
                                N[4] || (N[4] = d("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
                                  d("svg", {
                                    class: "w-5 h-5 text-gray-400 group-focus-within:text-gray-600 transition-colors",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    d("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    })
                                  ])
                                ], -1)),
                                $e(d("input", {
                                  ref_key: "searchInput",
                                  ref: s,
                                  "onUpdate:modelValue": N[0] || (N[0] = (_) => n.value = _),
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
                                  [jn, n.value]
                                ]),
                                d("div", ox, [
                                  o.value ? (b(), w("div", rx, N[2] || (N[2] = [
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (b(), w("button", {
                                    key: 1,
                                    onClick: N[1] || (N[1] = (_) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, N[3] || (N[3] = [
                                    d("svg", {
                                      class: "w-4 h-4 text-gray-400",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24"
                                    }, [
                                      d("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                      })
                                    ], -1)
                                  ]))) : j("", !0)
                                ])
                              ]),
                              d("button", {
                                type: "button",
                                class: "p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200",
                                onClick: p
                              }, N[5] || (N[5] = [
                                d("span", { class: "sr-only" }, "Close search", -1),
                                d("svg", {
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  d("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ], -1)
                              ]))
                            ]),
                            !n.value && !o.value ? (b(), w("div", ix, [
                              N[6] || (N[6] = d("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              d("div", lx, [
                                (b(!0), w(re, null, he(f.value, (_) => (b(), w("button", {
                                  key: _,
                                  onClick: (M) => {
                                    n.value = _, h();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, q(_), 9, ax))), 128))
                              ])
                            ])) : j("", !0)
                          ]),
                          a.value ? (b(), w("div", cx, [
                            d("div", ux, [
                              o.value ? (b(), w("div", dx, [
                                d("div", fx, [
                                  N[8] || (N[8] = d("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  d("div", px, [
                                    (b(), w(re, null, he(4, (_) => d("div", {
                                      key: _,
                                      class: "flex items-start space-x-3"
                                    }, N[7] || (N[7] = [
                                      d("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      d("div", { class: "flex-1" }, [
                                        d("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        d("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : r.value.products && r.value.products.length > 0 ? (b(), w("div", hx, [
                                N[10] || (N[10] = d("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                d("div", mx, [
                                  (b(!0), w(re, null, he(r.value.products, (_) => (b(), w("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: p
                                  }, [
                                    d("div", vx, [
                                      _.image ? (b(), w("img", {
                                        key: 0,
                                        src: _.image,
                                        alt: _.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, yx)) : (b(), w("div", bx, N[9] || (N[9] = [
                                        d("svg", {
                                          class: "w-8 h-8 text-gray-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          d("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                          })
                                        ], -1)
                                      ])))
                                    ]),
                                    d("div", _x, [
                                      d("p", Ex, q(_.title), 1),
                                      d("div", wx, [
                                        d("p", xx, q(u(_.price)), 1),
                                        _.compareAtPrice && _.compareAtPrice > _.price ? (b(), w("p", Nx, q(u(_.compareAtPrice)), 1)) : j("", !0)
                                      ])
                                    ])
                                  ], 8, gx))), 128))
                                ])
                              ])) : j("", !0),
                              r.value.collections && r.value.collections.length > 0 ? (b(), w("div", Sx, [
                                N[12] || (N[12] = d("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                d("div", kx, [
                                  (b(!0), w(re, null, he(r.value.collections, (_) => (b(), w("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: p
                                  }, [
                                    d("span", Ox, q(_.title), 1),
                                    N[11] || (N[11] = d("svg", {
                                      class: "w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24"
                                    }, [
                                      d("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M9 5l7 7-7 7"
                                      })
                                    ], -1))
                                  ], 8, Cx))), 128))
                                ])
                              ])) : j("", !0),
                              n.value && !o.value && (!r.value.products || r.value.products.length === 0) && (!r.value.collections || r.value.collections.length === 0) ? (b(), w("div", $x, N[13] || (N[13] = [
                                d("div", { class: "w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center" }, [
                                  d("svg", {
                                    class: "w-10 h-10 text-gray-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    d("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "1.5",
                                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    })
                                  ])
                                ], -1),
                                d("p", { class: "text-gray-900 font-medium mb-2" }, "No results found", -1),
                                d("p", { class: "text-sm text-gray-500" }, "Try searching for something else or check your spelling", -1)
                              ]))) : j("", !0)
                            ]),
                            n.value && (((v = r.value.products) == null ? void 0 : v.length) > 0 || ((O = r.value.collections) == null ? void 0 : O.length) > 0) ? (b(), w("div", Tx, [
                              d("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: p
                              }, [
                                je(' View all results for "' + q(n.value) + '" ', 1),
                                N[14] || (N[14] = d("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  d("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                  })
                                ], -1))
                              ], 8, Dx)
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
}, Vx = /* @__PURE__ */ Ye(Ax, [["__scopeId", "data-v-985e236a"]]), Ix = {
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
    const t = K(!1), n = X(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), s = X(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: t.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), o = X(() => {
      if (!e.tags) return [];
      if (typeof e.tags == "string")
        try {
          const a = JSON.parse(e.tags);
          return Array.isArray(a) ? a : [];
        } catch {
          return [];
        }
      return Array.isArray(e.tags) ? e.tags : [];
    }), r = X(() => {
      if (!e.image) return "";
      if (typeof e.image == "string" && e.image.startsWith("{"))
        try {
          const a = JSON.parse(e.image);
          return a.mediaUrl || a.url || "";
        } catch {
          return e.image;
        }
      return e.image;
    }), i = X(() => {
      var f, u;
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
        const m = typeof window < "u" && typeof window.Shopline < "u" && ((u = (f = window.Shopline) == null ? void 0 : f.locale) == null ? void 0 : u.current) || "en";
        return new Intl.DateTimeFormat(m, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(c);
      } catch (c) {
        return console.warn("Error formatting date:", c, a), "";
      }
    }), l = X(() => {
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
}, Mx = ["href"], Px = ["src", "alt"], Rx = { class: "relative p-6 flex-1 flex flex-col z-10" }, Lx = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, Fx = { class: "text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight" }, Bx = ["href"], jx = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, Hx = { key: 0 }, Ux = {
  key: 1,
  class: "text-gray-300"
}, qx = ["datetime"], zx = { class: "flex-1 mb-6" }, Wx = {
  key: 0,
  class: "text-gray-600 leading-relaxed line-clamp-3"
}, Kx = ["innerHTML"], Gx = { class: "mt-auto" }, Yx = ["href"];
function Jx(e, t, n, s, o, r) {
  return b(), w("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: Ue(s.cardStyles),
    onMouseenter: t[0] || (t[0] = (i) => s.isHovered = !0),
    onMouseleave: t[1] || (t[1] = (i) => s.isHovered = !1)
  }, [
    t[4] || (t[4] = d("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (b(), w("div", {
      key: 0,
      class: Ee([s.imageAspectClass, "relative overflow-hidden"])
    }, [
      d("a", {
        href: n.url,
        class: "block w-full h-full"
      }, [
        d("img", {
          src: s.processedImage,
          alt: n.imageAlt,
          class: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
          loading: "lazy"
        }, null, 8, Px),
        t[2] || (t[2] = d("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, Mx)
    ], 2)) : j("", !0),
    d("div", Rx, [
      n.showTags && s.processedTags.length > 0 ? (b(), w("div", Lx, [
        (b(!0), w(re, null, he(s.processedTags.slice(0, 3), (i) => (b(), w("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, q(i), 1))), 128))
      ])) : j("", !0),
      d("h3", Fx, [
        d("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, q(n.title), 9, Bx)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (b(), w("div", jx, [
        n.showAuthor && n.author ? (b(), w("span", Hx, q(n.author), 1)) : j("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (b(), w("span", Ux, "•")) : j("", !0),
        n.showDate && s.formattedDate ? (b(), w("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, q(s.formattedDate), 9, qx)) : j("", !0)
      ])) : j("", !0),
      d("div", zx, [
        n.excerpt ? (b(), w("p", Wx, q(n.excerpt), 1)) : n.content ? (b(), w("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-3",
          innerHTML: s.truncatedContent
        }, null, 8, Kx)) : j("", !0)
      ]),
      d("div", Gx, [
        d("a", {
          href: n.url,
          class: "inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm group transition-colors duration-300"
        }, t[3] || (t[3] = [
          d("span", null, "Read Article", -1),
          d("svg", {
            class: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 8, Yx)
      ])
    ])
  ], 36);
}
const Bf = /* @__PURE__ */ Ye(Ix, [["render", Jx], ["__scopeId", "data-v-4d9d9306"]]), Xx = {
  name: "BlogArticles",
  components: {
    ArticleCard: Bf
  },
  props: {
    blogId: {
      type: String,
      required: !0
    },
    blogHandle: {
      type: String,
      default: ""
    },
    limit: {
      type: Number,
      default: 3
    },
    currentArticleId: {
      type: String,
      default: null
    },
    columnsDesktop: {
      type: Number,
      default: 3
    },
    imageRatio: {
      type: String,
      default: "landscape"
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
      default: !1
    }
  },
  setup(e) {
    const t = K([]), n = K(!0), s = K(null), o = X(() => Math.min(e.limit, 6)), r = X(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), i = X(() => ({
      maxWidth: e.columnsDesktop === 4 ? "300px" : e.columnsDesktop === 3 ? "350px" : e.columnsDesktop === 2 ? "500px" : "100%",
      borderRadius: "var(--card-radius, 8px)",
      backgroundColor: "var(--color-loading-bg, #f5f5f5)",
      overflow: "hidden"
    })), l = X(() => ({ maxWidth: e.columnsDesktop === 4 ? "300px" : e.columnsDesktop === 3 ? "350px" : e.columnsDesktop === 2 ? "500px" : "100%" })), a = (u) => {
      var c, p;
      if (!u) return "";
      try {
        const m = new Date(u), g = ((p = (c = window.Shopline) == null ? void 0 : c.locale) == null ? void 0 : p.current) || "en";
        return new Intl.DateTimeFormat(g, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(m);
      } catch {
        return u;
      }
    }, f = async () => {
      n.value = !0, s.value = null;
      try {
        if (e.blogHandle === "news") {
          t.value = [
            {
              id: "1",
              title: "Sample Article 1",
              url: "/blogs/news/sample-article-1",
              excerpt: "This is a sample article excerpt for testing purposes.",
              author: "Admin",
              published_at: (/* @__PURE__ */ new Date()).toISOString(),
              image: { src: "https://via.placeholder.com/400x300" },
              tags: ["sample", "test"]
            },
            {
              id: "2",
              title: "Sample Article 2",
              url: "/blogs/news/sample-article-2",
              excerpt: "Another sample article to demonstrate the layout.",
              author: "Admin",
              published_at: new Date(Date.now() - 864e5).toISOString(),
              image: { src: "https://via.placeholder.com/400x300" },
              tags: ["demo"]
            },
            {
              id: "3",
              title: "Sample Article 3",
              url: "/blogs/news/sample-article-3",
              excerpt: "A third article to show the grid layout working properly.",
              author: "Admin",
              published_at: new Date(Date.now() - 1728e5).toISOString(),
              image: { src: "https://via.placeholder.com/400x300" },
              tags: ["example"]
            }
          ], e.currentArticleId && (t.value = t.value.filter(
            (u) => String(u.id) !== String(e.currentArticleId)
          )), t.value = t.value.slice(0, e.limit);
          return;
        }
        throw new Error("Unable to fetch blog articles. Blog API endpoint not available.");
      } catch (u) {
        console.error("Error fetching blog articles:", u), s.value = "Unable to load articles. Please ensure a valid blog is selected.";
      } finally {
        n.value = !1;
      }
    };
    return He(() => {
      f();
    }), {
      articles: t,
      loading: n,
      error: s,
      displayLimit: o,
      imageAspectClass: r,
      skeletonStyles: i,
      cardWrapperStyles: l,
      formatDate: a
    };
  }
}, Qx = { class: "blog-articles-component" }, Zx = {
  key: 0,
  class: "flex flex-wrap justify-center gap-6"
}, eN = { class: "p-6" }, tN = {
  key: 0,
  class: "flex gap-2 mb-4"
}, nN = {
  key: 1,
  class: "h-4 bg-gray-200 rounded w-1/2 mb-4"
}, sN = {
  key: 1,
  class: "text-center py-12"
}, oN = { class: "text-gray-600" }, rN = {
  key: 2,
  class: "flex flex-wrap justify-center gap-6"
}, iN = ["title", "url", "excerpt", "content", "author", "published-at", "raw-published-at", "image", "image-alt", "tags", "image-ratio", "show-image", "show-author", "show-date"], lN = {
  key: 3,
  class: "text-center py-12"
};
function aN(e, t, n, s, o, r) {
  return b(), w("div", Qx, [
    s.loading ? (b(), w("div", Zx, [
      (b(!0), w(re, null, he(s.displayLimit, (i) => (b(), w("div", {
        key: `skeleton-${i}`,
        class: "article-skeleton flex-shrink-0 w-full sm:w-auto animate-pulse",
        style: Ue(s.skeletonStyles)
      }, [
        n.showImage ? (b(), w("div", {
          key: 0,
          class: Ee([s.imageAspectClass, "bg-gray-200"])
        }, null, 2)) : j("", !0),
        d("div", eN, [
          n.showTags ? (b(), w("div", tN, t[0] || (t[0] = [
            d("div", { class: "h-6 w-16 bg-gray-200 rounded-full" }, null, -1),
            d("div", { class: "h-6 w-20 bg-gray-200 rounded-full" }, null, -1)
          ]))) : j("", !0),
          t[1] || (t[1] = d("div", { class: "h-6 bg-gray-200 rounded mb-2" }, null, -1)),
          t[2] || (t[2] = d("div", { class: "h-6 bg-gray-200 rounded w-3/4 mb-4" }, null, -1)),
          n.showAuthor || n.showDate ? (b(), w("div", nN)) : j("", !0),
          t[3] || (t[3] = Fn('<div class="space-y-2 mb-6" data-v-d0155edf><div class="h-4 bg-gray-200 rounded" data-v-d0155edf></div><div class="h-4 bg-gray-200 rounded" data-v-d0155edf></div><div class="h-4 bg-gray-200 rounded w-2/3" data-v-d0155edf></div></div><div class="h-6 bg-gray-200 rounded w-24" data-v-d0155edf></div>', 2))
        ])
      ], 4))), 128))
    ])) : s.error ? (b(), w("div", sN, [
      t[4] || (t[4] = d("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, "Unable to load articles", -1)),
      d("p", oN, q(s.error), 1)
    ])) : s.articles.length > 0 ? (b(), w("div", rN, [
      (b(!0), w(re, null, he(s.articles, (i) => {
        var l, a;
        return b(), w("div", {
          key: i.id,
          class: "article-card-wrapper flex-shrink-0 w-full sm:w-auto",
          style: Ue(s.cardWrapperStyles)
        }, [
          d("article-card", {
            title: i.title,
            url: i.url,
            excerpt: i.excerpt,
            content: i.content,
            author: i.author,
            "published-at": s.formatDate(i.published_at),
            "raw-published-at": i.published_at,
            image: ((l = i.image) == null ? void 0 : l.src) || i.featured_image,
            "image-alt": ((a = i.image) == null ? void 0 : a.alt) || i.title,
            tags: i.tags,
            "image-ratio": n.imageRatio,
            "show-image": n.showImage,
            "show-author": n.showAuthor,
            "show-date": n.showDate,
            "show-tags": !1
          }, null, 8, iN)
        ], 4);
      }), 128))
    ])) : (b(), w("div", lN, t[5] || (t[5] = [
      d("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, "No articles found", -1),
      d("p", { class: "text-gray-600" }, "This blog has no articles yet.", -1)
    ])))
  ]);
}
const cN = /* @__PURE__ */ Ye(Xx, [["render", aN], ["__scopeId", "data-v-d0155edf"]]);
({
  ...os,
  props: {
    ...os.props
  }
});
const uN = /* @__PURE__ */ qe(Mf), dN = /* @__PURE__ */ qe(O1), fN = /* @__PURE__ */ qe(X1), pN = /* @__PURE__ */ qe(Vf), hN = /* @__PURE__ */ qe(Pf), mN = /* @__PURE__ */ qe(qb), gN = /* @__PURE__ */ qe(Rf), vN = /* @__PURE__ */ qe(I2), yN = /* @__PURE__ */ qe($E), bN = /* @__PURE__ */ qe(aw), _N = /* @__PURE__ */ qe(If), EN = /* @__PURE__ */ qe(Mw), wN = /* @__PURE__ */ qe(Lw), xN = /* @__PURE__ */ qe(jw), NN = /* @__PURE__ */ qe(Ww), SN = /* @__PURE__ */ qe(Yw), kN = /* @__PURE__ */ qe(Vx);
customElements.define("cart-drawer", uN);
customElements.define("mobile-menu", dN);
customElements.define("product-variant-picker", fN);
customElements.define("quantity-selector", pN);
customElements.define("main-header", hN);
customElements.define("site-footer", mN);
customElements.define("collection-filters", gN);
customElements.define("collection-grid", vN);
customElements.define("product-gallery", yN);
customElements.define("product-info", bN);
customElements.define("cart-item", _N);
customElements.define("cart-summary", EN);
customElements.define("slideshow-banner", wN);
customElements.define("testimonials-carousel", xN);
customElements.define("video-player", NN);
customElements.define("password-modal", SN);
customElements.define("search-overlay", kN);
function uo(e = document) {
  e.querySelectorAll(".main-header-mount").forEach((u) => {
    if (u._vueApp) return;
    const c = At(Pf, {
      shopName: u.dataset.shopName || "Orion Store",
      logoUrl: u.dataset.logoUrl || "",
      navigationLinks: JSON.parse(u.dataset.navigationLinks || "[]")
    });
    u._vueApp = c, c.mount(u);
  }), e.querySelectorAll(".cart-drawer-mount").forEach((u) => {
    if (u._vueApp) return;
    const c = At(Mf);
    u._vueApp = c, c.mount(u);
  }), e.querySelectorAll("product-card").forEach((u) => {
    if (u._vueApp) return;
    const c = {
      productId: u.getAttribute("product-id"),
      variantId: u.getAttribute("variant-id"),
      title: u.getAttribute("title"),
      handle: u.getAttribute("handle"),
      url: u.getAttribute("url"),
      vendor: u.getAttribute("vendor"),
      price: u.getAttribute("price"),
      compareAtPrice: u.getAttribute("compare-at-price"),
      image: u.getAttribute("image"),
      available: u.getAttribute(":available") === "true"
    }, p = At(p_, c);
    u._vueApp = p, p.mount(u);
  }), e.querySelectorAll("collection-sort").forEach((u) => {
    if (u._vueApp) return;
    const c = {
      collectionHandle: u.getAttribute("collection-handle"),
      currentSort: u.getAttribute("current-sort") || "manual"
    }, p = At(P2, c);
    u._vueApp = p, p.mount(u);
  }), e.querySelectorAll("orion-button").forEach((u) => {
    if (u._vueApp) return;
    const c = {
      variant: u.getAttribute("variant") || "primary",
      size: u.getAttribute("size") || "medium",
      fullWidth: u.hasAttribute("full-width"),
      href: u.getAttribute("href"),
      type: u.getAttribute("type") || "button",
      disabled: u.hasAttribute("disabled"),
      loading: u.hasAttribute("loading"),
      rounded: u.getAttribute("rounded") || "default"
    }, p = At(
      {
        components: { Button: os },
        template: `<Button v-bind="$attrs">${u.innerHTML}</Button>`
      },
      c
    );
    u._vueApp = p, p.mount(u);
  }), e.querySelectorAll(
    "collection-filter-drawer"
  ).forEach((u) => {
    if (u._vueApp) return;
    const c = {
      collectionHandle: u.getAttribute("collection-handle"),
      products: JSON.parse(u.getAttribute(":products") || "[]")
    }, p = At(iE, c);
    u._vueApp = p, p.mount(u);
  }), e.querySelectorAll(
    "collection-filter-sidebar"
  ).forEach((u) => {
    if (u._vueApp) return;
    const c = {
      collectionHandle: u.getAttribute("collection-handle"),
      products: JSON.parse(u.getAttribute(":products") || "[]"),
      showSort: u.getAttribute(":show-sort") === "true"
    }, p = At(Rf, c);
    u._vueApp = p, p.mount(u);
  }), e.querySelectorAll("article-card").forEach((u) => {
    if (u._vueApp) return;
    const c = {
      title: u.getAttribute("title"),
      url: u.getAttribute("url"),
      excerpt: u.getAttribute("excerpt"),
      content: u.getAttribute("content"),
      author: u.getAttribute("author"),
      publishedAt: u.getAttribute("published-at"),
      rawPublishedAt: u.getAttribute("raw-published-at"),
      image: u.getAttribute("image"),
      imageAlt: u.getAttribute("image-alt"),
      tags: JSON.parse(u.getAttribute("tags") || "[]"),
      imageRatio: u.getAttribute("image-ratio") || "landscape",
      showImage: u.getAttribute("show-image") === "true",
      showAuthor: u.getAttribute("show-author") === "true",
      showDate: u.getAttribute("show-date") === "true",
      showTags: u.getAttribute("show-tags") === "true"
    }, p = At(Bf, c);
    u._vueApp = p, p.mount(u);
  }), e.querySelectorAll("blog-articles").forEach((u) => {
    if (u._vueApp) return;
    const c = {
      blogId: u.getAttribute("blog-id"),
      blogHandle: u.getAttribute("blog-handle") || "",
      limit: parseInt(u.getAttribute("limit")) || 3,
      currentArticleId: u.getAttribute("current-article-id"),
      columnsDesktop: parseInt(u.getAttribute("columns-desktop")) || 3,
      imageRatio: u.getAttribute("image-ratio") || "landscape",
      showImage: u.getAttribute("show-image") !== "false",
      showAuthor: u.getAttribute("show-author") === "true",
      showDate: u.getAttribute("show-date") !== "false",
      showTags: u.getAttribute("show-tags") === "true"
    }, p = At(cN, c);
    u._vueApp = p, p.mount(u);
  }), e === document && document.querySelectorAll(".site-header").forEach((c) => {
    if (c.dataset.sticky === "true" && !c._stickyInitialized) {
      let _ = function() {
        const x = window.scrollY, y = c.dataset.hideOnScroll === "true", D = c.dataset.transparent === "true", R = c.dataset.stickyBackground || "#ffffff", P = document.body.classList.contains("template-index");
        D && P ? x > 50 ? (c.classList.remove("transparent-header"), c.classList.add("scrolled"), c.style.backgroundColor = R, c.style.borderBottomColor = "") : (c.classList.add("transparent-header"), c.classList.remove("scrolled"), c.style.backgroundColor = "transparent", c.style.borderBottomColor = "transparent") : x > 0 ? (c.classList.contains("scrolled") || (c.classList.add("scrolled"), O()), c.style.backgroundColor = R) : (c.classList.contains("scrolled") && (c.classList.remove("scrolled"), h.style.height = "0px"), c.style.backgroundColor = ""), y && (x > 300 && x > k ? (c.classList.add("hide-on-scroll"), c.classList.remove("show-on-scroll")) : (c.classList.remove("hide-on-scroll"), c.classList.add("show-on-scroll"))), k = x, N = !1;
      };
      var p = _;
      c._stickyInitialized = !0, c._reinitialize = () => {
        const x = c.nextElementSibling;
        if (x && x.classList.contains("sticky-spacer")) {
          const y = c.offsetHeight, D = c.dataset.transparent === "true", R = document.body.classList.contains("template-index");
          D && R || c.classList.contains("scrolled") ? x.style.height = y + "px" : x.style.height = "0px";
        }
      };
      const m = c.dataset.transparent === "true", g = document.body.classList.contains("template-index"), h = document.createElement("div");
      h.className = "sticky-spacer", c.parentNode.insertBefore(h, c.nextSibling);
      let I = null;
      if (!g) {
        I = document.createElement("div"), I.className = "header-top-spacer", I.style.height = c.offsetHeight + "px";
        const x = document.getElementById("MainContent");
        x && x.firstChild && x.insertBefore(I, x.firstChild);
      }
      m && g ? (c.classList.add("transparent-header"), h.style.height = c.offsetHeight + "px") : h.style.height = "0px";
      let k = 0, N = !1, v = c.offsetHeight;
      const O = () => {
        v = c.offsetHeight, h.style.height = v + "px";
      };
      window.addEventListener("scroll", function() {
        N || (window.requestAnimationFrame(_), N = !0);
      });
      let M;
      window.addEventListener("resize", () => {
        clearTimeout(M), M = setTimeout(() => {
          v = c.offsetHeight, O(), I && (I.style.height = v + "px"), S(), _();
        }, 250);
      });
      const S = () => {
        if (m && g) {
          c.classList.add("transparent-header"), c.classList.remove("bg-white"), c.style.backgroundColor = "transparent", c.style.borderBottomColor = "transparent", c.style.position = "absolute", c.style.width = "100%", h.style.height = "0px";
          const x = document.querySelector(
            '#MainContent > .shopline-section:first-child, #MainContent > div[id^="shopline-section-"]:first-child, main > .shopline-section:first-child'
          );
          if (x) {
            const y = c.offsetHeight;
            x.style.marginTop = `-${y}px`, x.style.paddingTop = `${y}px`;
          }
        } else if (g) {
          O();
          const x = document.querySelector(
            '#MainContent > .shopline-section:first-child, #MainContent > div[id^="shopline-section-"]:first-child, main > .shopline-section:first-child'
          );
          if (x) {
            const y = c.offsetHeight;
            x.querySelector(".hero-banner") ? (x.style.marginTop = `-${y}px`, x.style.paddingTop = `${y}px`) : (x.style.paddingTop = `${y}px`, x.style.marginTop = "0px");
          }
        } else
          h.style.height = "0px";
      };
      S(), setTimeout(S, 100), _();
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
let $c;
window.addEventListener("resize", () => {
  clearTimeout($c), $c = setTimeout(() => {
    document.querySelectorAll(".site-header.sticky-header").forEach((t) => {
      t._reinitialize && t._reinitialize();
    });
  }, 250);
});
document.addEventListener("DOMContentLoaded", () => {
  uo();
});
var Tc;
((Tc = window.Shopline) != null && Tc.designMode || window.location.href.includes("theme_preview_mode")) && (document.addEventListener("shopline:section:load", (e) => {
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
