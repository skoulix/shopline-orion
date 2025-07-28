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
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), nr = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ol = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jf = Object.prototype.hasOwnProperty, ve = (e, t) => jf.call(e, t), Y = Array.isArray, Jn = (e) => Fs(e) === "[object Map]", us = (e) => Fs(e) === "[object Set]", la = (e) => Fs(e) === "[object Date]", Hf = (e) => Fs(e) === "[object RegExp]", oe = (e) => typeof e == "function", le = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Dr = (e) => (ge(e) || oe(e)) && oe(e.then) && oe(e.catch), Dc = Object.prototype.toString, Fs = (e) => Dc.call(e), rl = (e) => Fs(e).slice(8, -1), Vr = (e) => Fs(e) === "[object Object]", il = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ Ye(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vc = /* @__PURE__ */ Ye(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Uf = /-(\w)/g, Ce = Ar(
  (e) => e.replace(Uf, (t, n) => n ? n.toUpperCase() : "")
), qf = /\B([A-Z])/g, st = Ar(
  (e) => e.replace(qf, "-$1").toLowerCase()
), rn = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), nn = Ar(
  (e) => e ? `on${rn(e)}` : ""
), pt = (e, t) => !Object.is(e, t), Tn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, os = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, sr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, or = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let aa;
const ko = () => aa || (aa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
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
}, Kf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Gf = /* @__PURE__ */ Ye(Kf), ca = 2;
function Yf(e, t = 0, n = e.length) {
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
function qe(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? Ac(s) : qe(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (le(e) || ge(e))
    return e;
}
const Jf = /;(?![^(]*\))/g, Xf = /:([^]+)/, Qf = /\/\*[^]*?\*\//g;
function Ac(e) {
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
      const o = n.startsWith("--") ? n : st(n);
      t += `${o}:${s};`;
    }
  }
  return t;
}
function Ee(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ee(e[n]);
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
  return t && !le(t) && (e.class = Ee(t)), n && (e.style = qe(n)), e;
}
const tp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", np = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", sp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", op = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ic = /* @__PURE__ */ Ye(tp), Mc = /* @__PURE__ */ Ye(np), Pc = /* @__PURE__ */ Ye(sp), rp = /* @__PURE__ */ Ye(op), Rc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ip = /* @__PURE__ */ Ye(Rc), ua = /* @__PURE__ */ Ye(
  Rc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
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
  let n = la(e), s = la(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = xt(e), s = xt(t), n || s)
    return e === t;
  if (n = Y(e), s = Y(t), n || s)
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
function Ir(e, t) {
  return e.findIndex((n) => Rn(n, t));
}
const Lc = (e) => !!(e && e.__v_isRef === !0), H = (e) => le(e) ? e : e == null ? "" : Y(e) || ge(e) && (e.toString === Dc || !oe(e.toString)) ? Lc(e) ? H(e.value) : JSON.stringify(e, Fc, 2) : String(e), Fc = (e, t) => Lc(t) ? Fc(e, t.value) : Jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[oi(s, r) + " =>"] = o, n),
    {}
  )
} : us(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => oi(n))
} : xt(t) ? oi(t) : ge(t) && !Y(t) && !Vr(t) ? String(t) : t, oi = (e, t = "") => {
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
var we = {};
function Mt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let tt;
class al {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = tt, !t && tt && (this.index = (tt.scopes || (tt.scopes = [])).push(
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
      const n = tt;
      try {
        return tt = this, t();
      } finally {
        tt = n;
      }
    } else we.NODE_ENV !== "production" && Mt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = tt, tt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (tt = this.prevScope, this.prevScope = void 0);
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
  return tt;
}
function jc(e, t = !1) {
  tt ? tt.cleanups.push(e) : we.NODE_ENV !== "production" && !t && Mt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let xe;
const ri = /* @__PURE__ */ new WeakSet();
class fo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, tt && tt.active && tt.effects.push(this);
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
    s.version === -1 ? (s === n && (n = o), fl(s), hp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function wi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === po) || (e.globalVersion = po, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xe, s = zt;
  xe = e, zt = !0;
  try {
    qc(e);
    const o = e.fn(e._value);
    (t.version === 0 || pt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
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
const Kc = [];
function Gt() {
  Kc.push(zt), zt = !1;
}
function Yt() {
  const e = Kc.pop();
  zt = e === void 0 ? !0 : e;
}
function da(e) {
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
class vp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, we.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!xe || !zt || xe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      n = this.activeLink = new vp(xe, this), xe.deps ? (n.prevDep = xe.depsTail, xe.depsTail.nextDep = n, xe.depsTail = n) : xe.deps = xe.depsTail = n, Gc(n);
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
const rr = /* @__PURE__ */ new WeakMap(), Xn = Symbol(
  we.NODE_ENV !== "production" ? "Object iterate" : ""
), xi = Symbol(
  we.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ho = Symbol(
  we.NODE_ENV !== "production" ? "Array iterate" : ""
);
function We(e, t, n) {
  if (zt && xe) {
    let s = rr.get(e);
    s || rr.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Mr()), o.map = s, o.key = n), we.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function sn(e, t, n, s, o, r) {
  const i = rr.get(e);
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
    const a = Y(e), c = a && il(n);
    if (a && n === "length") {
      const d = Number(s);
      i.forEach((u, p) => {
        (p === "length" || p === ho || !xt(p) && p >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), c && l(i.get(ho)), t) {
        case "add":
          a ? c && l(i.get("length")) : (l(i.get(Xn)), Jn(e) && l(i.get(xi)));
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
function yp(e, t) {
  const n = rr.get(e);
  return n && n.get(t);
}
function ms(e) {
  const t = ce(e);
  return t === e ? t : (We(t, "iterate", ho), it(e) ? t : t.map(Ze));
}
function Pr(e) {
  return We(e = ce(e), "iterate", ho), e;
}
const bp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ii(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return ms(this).concat(
      ...e.map((t) => Y(t) ? ms(t) : t)
    );
  },
  entries() {
    return ii(this, "entries", (e) => (e[1] = Ze(e[1]), e));
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
    return li(this, "includes", e);
  },
  indexOf(...e) {
    return li(this, "indexOf", e);
  },
  join(e) {
    return ms(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return li(this, "lastIndexOf", e);
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
    return fa(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fa(this, "reduceRight", e, t);
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
    return ii(this, "values", Ze);
  }
};
function ii(e, t, n) {
  const s = Pr(e), o = s[t]();
  return s !== e && !it(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const _p = Array.prototype;
function an(e, t, n, s, o, r) {
  const i = Pr(e), l = i !== e && !it(e), a = i[t];
  if (a !== _p[t]) {
    const u = a.apply(e, r);
    return l ? Ze(u) : u;
  }
  let c = n;
  i !== e && (l ? c = function(u, p) {
    return n.call(this, Ze(u), p, e);
  } : n.length > 2 && (c = function(u, p) {
    return n.call(this, u, p, e);
  }));
  const d = a.call(i, c, s);
  return l && o ? o(d) : d;
}
function fa(e, t, n, s) {
  const o = Pr(e);
  let r = n;
  return o !== e && (it(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, Ze(l), a, e);
  }), o[t](r, ...s);
}
function li(e, t, n) {
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
const Ep = /* @__PURE__ */ Ye("__proto__,__v_isRef,__isVue"), Yc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
);
function wp(e) {
  xt(e) || (e = String(e));
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
    const i = Y(t);
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
      Ie(t) ? t : s
    );
    return (xt(n) ? Yc.has(n) : Ep(n)) || (o || We(t, "get", n), r) ? l : Ie(l) ? i && il(n) ? l : l.value : ge(l) ? o ? Lr(l) : Ss(l) : l;
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
      if (!it(s) && !Jt(s) && (r = ce(r), s = ce(s)), !Y(t) && Ie(r) && !Ie(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = Y(t) && il(n) ? Number(n) < t.length : ve(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ie(t) ? t : o
    );
    return t === ce(o) && (i ? pt(s, r) && sn(t, "set", n, s, r) : sn(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ve(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && sn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!xt(n) || !Yc.has(n)) && We(t, "has", n), s;
  }
  ownKeys(t) {
    return We(
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
const xp = /* @__PURE__ */ new Xc(), Np = /* @__PURE__ */ new Qc(), Sp = /* @__PURE__ */ new Xc(!0), kp = /* @__PURE__ */ new Qc(!0), Ni = (e) => e, Mo = (e) => Reflect.getPrototypeOf(e);
function Cp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ce(o), i = Jn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = o[e](...s), d = n ? Ni : t ? ir : Ze;
    return !t && We(
      r,
      "iterate",
      a ? xi : Xn
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
function Po(e) {
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
function Op(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      e || (pt(o, l) && We(i, "get", o), We(i, "get", l));
      const { has: a } = Mo(i), c = t ? Ni : e ? ir : Ze;
      if (a.call(i, o))
        return c(r.get(o));
      if (a.call(i, l))
        return c(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && We(ce(o), "iterate", Xn), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      return e || (pt(o, l) && We(i, "has", o), We(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = ce(l), c = t ? Ni : e ? ir : Ze;
      return !e && We(a, "iterate", Xn), l.forEach((d, u) => o.call(r, c(d), c(u), i));
    }
  };
  return fe(
    n,
    e ? {
      add: Po("add"),
      set: Po("set"),
      delete: Po("delete"),
      clear: Po("clear")
    } : {
      add(o) {
        !t && !it(o) && !Jt(o) && (o = ce(o));
        const r = ce(this);
        return Mo(r).has.call(r, o) || (r.add(o), sn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !it(r) && !Jt(r) && (r = ce(r));
        const i = ce(this), { has: l, get: a } = Mo(i);
        let c = l.call(i, o);
        c ? we.NODE_ENV !== "production" && pa(i, l, o) : (o = ce(o), c = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, r), c ? pt(r, d) && sn(i, "set", o, r, d) : sn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ce(this), { has: i, get: l } = Mo(r);
        let a = i.call(r, o);
        a ? we.NODE_ENV !== "production" && pa(r, i, o) : (o = ce(o), a = i.call(r, o));
        const c = l ? l.call(r, o) : void 0, d = r.delete(o);
        return a && sn(r, "delete", o, void 0, c), d;
      },
      clear() {
        const o = ce(this), r = o.size !== 0, i = we.NODE_ENV !== "production" ? Jn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
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
function Rr(e, t) {
  const n = Op(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ve(n, o) && o in s ? n : s,
    o,
    r
  );
}
const $p = {
  get: /* @__PURE__ */ Rr(!1, !1)
}, Tp = {
  get: /* @__PURE__ */ Rr(!1, !0)
}, Dp = {
  get: /* @__PURE__ */ Rr(!0, !1)
}, Vp = {
  get: /* @__PURE__ */ Rr(!0, !0)
};
function pa(e, t, n) {
  const s = ce(n);
  if (s !== n && t.call(e, s)) {
    const o = rl(e);
    Mt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Zc = /* @__PURE__ */ new WeakMap(), eu = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), nu = /* @__PURE__ */ new WeakMap();
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
  return Jt(e) ? e : Fr(
    e,
    !1,
    xp,
    $p,
    Zc
  );
}
function su(e) {
  return Fr(
    e,
    !1,
    Sp,
    Tp,
    eu
  );
}
function Lr(e) {
  return Fr(
    e,
    !0,
    Np,
    Dp,
    tu
  );
}
function Ht(e) {
  return Fr(
    e,
    !0,
    kp,
    Vp,
    nu
  );
}
function Fr(e, t, n, s, o) {
  if (!ge(e))
    return we.NODE_ENV !== "production" && Mt(
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
function it(e) {
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
  return !ve(e, "__v_skip") && Object.isExtensible(e) && os(e, "__v_skip", !0), e;
}
const Ze = (e) => ge(e) ? Ss(e) : e, ir = (e) => ge(e) ? Lr(e) : e;
function Ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function W(e) {
  return iu(e, !1);
}
function ru(e) {
  return iu(e, !0);
}
function iu(e, t) {
  return Ie(e) ? e : new Mp(e, t);
}
class Mp {
  constructor(t, n) {
    this.dep = new Mr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : Ze(t), this.__v_isShallow = n;
  }
  get value() {
    return we.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || it(t) || Jt(t);
    t = s ? t : ce(t), pt(t, n) && (this._rawValue = t, this._value = s ? t : Ze(t), we.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Pp(e) {
  e.dep && (we.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function Co(e) {
  return Ie(e) ? e.value : e;
}
function Rp(e) {
  return oe(e) ? e() : Co(e);
}
const Lp = {
  get: (e, t, n) => t === "__v_raw" ? e : Co(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ie(o) && !Ie(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function pl(e) {
  return mn(e) ? e : new Proxy(e, Lp);
}
class Fp {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Mr(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
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
  return new Fp(e);
}
function Bp(e) {
  we.NODE_ENV !== "production" && !ks(e) && Mt("toRefs() expects a reactive object but received a plain one.");
  const t = Y(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = au(e, n);
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
  return Ie(e) ? e : oe(e) ? new Hp(e) : ge(e) && arguments.length > 1 ? au(e, t, n) : W(e);
}
function au(e, t, n) {
  const s = e[t];
  return Ie(s) ? s : new jp(e, t, n);
}
class qp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Mr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = po - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
function zp(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const r = new qp(s, o, n);
  return we.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
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
}, Ro = {}, lr = /* @__PURE__ */ new WeakMap();
let Sn;
function Gp() {
  return Sn;
}
function cu(e, t = !1, n = Sn) {
  if (n) {
    let s = lr.get(n);
    s || lr.set(n, s = []), s.push(e);
  } else we.NODE_ENV !== "production" && !t && Mt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Yp(e, t, n = pe) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, c = (E) => {
    (n.onWarn || Mt)(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (E) => o ? E : it(E) || o === !1 || o === 0 ? pn(E, 1) : pn(E);
  let u, p, m, g, h = !1, I = !1;
  if (Ie(e) ? (p = () => e.value, h = it(e)) : mn(e) ? (p = () => d(e), h = !0) : Y(e) ? (I = !0, h = e.some((E) => mn(E) || it(E)), p = () => e.map((E) => {
    if (Ie(E))
      return E.value;
    if (mn(E))
      return d(E);
    if (oe(E))
      return a ? a(E, 2) : E();
    we.NODE_ENV !== "production" && c(E);
  })) : oe(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      Gt();
      try {
        m();
      } finally {
        Yt();
      }
    }
    const E = Sn;
    Sn = u;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Sn = E;
    }
  } : (p = De, we.NODE_ENV !== "production" && c(e)), t && o) {
    const E = p, M = o === !0 ? 1 / 0 : o;
    p = () => pn(E(), M);
  }
  const k = cl(), _ = () => {
    u.stop(), k && k.active && ol(k.effects, u);
  };
  if (r && t) {
    const E = t;
    t = (...M) => {
      E(...M), _();
    };
  }
  let v = I ? new Array(e.length).fill(Ro) : Ro;
  const $ = (E) => {
    if (!(!(u.flags & 1) || !u.dirty && !E))
      if (t) {
        const M = u.run();
        if (o || h || (I ? M.some((C, T) => pt(C, v[T])) : pt(M, v))) {
          m && m();
          const C = Sn;
          Sn = u;
          try {
            const T = [
              M,
              // pass undefined as the old value when it's changed for the first time
              v === Ro ? void 0 : I && v[0] === Ro ? [] : v,
              g
            ];
            v = M, a ? a(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            );
          } finally {
            Sn = C;
          }
        }
      } else
        u.run();
  };
  return l && l($), u = new fo(p), u.scheduler = i ? () => i($, !1) : $, g = (E) => cu(E, !1, u), m = u.onStop = () => {
    const E = lr.get(u);
    if (E) {
      if (a)
        a(E, 4);
      else
        for (const M of E) M();
      lr.delete(u);
    }
  }, we.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? $(!0) : v = u.run() : i ? i($.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function pn(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ie(e))
    pn(e.value, t, n);
  else if (Y(e))
    for (let s = 0; s < e.length; s++)
      pn(e[s], t, n);
  else if (us(e) || Jn(e))
    e.forEach((s) => {
      pn(s, t, n);
    });
  else if (Vr(e)) {
    for (const s in e)
      pn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && pn(e[s], t, n);
  }
  return e;
}
var O = {};
const Qn = [];
function _s(e) {
  Qn.push(e);
}
function Es() {
  Qn.pop();
}
let ai = !1;
function L(e, ...t) {
  if (ai) return;
  ai = !0, Gt();
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
          ({ vnode: r }) => `at <${Yr(n, r.type)}>`
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
  Yt(), ai = !1;
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Yr(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Zp(e.props), r] : [o + r];
}
function Zp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...uu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function uu(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ie(t) ? (t = uu(e, ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : oe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ce(t), n ? t : [`${e}=`, t]);
}
function hl(e, t) {
  O.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? L(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && L(`${t} is NaN - the duration expression might be incorrect.`));
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
}, Br = {
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
function Pt(e, t, n, s) {
  if (oe(e)) {
    const o = ds(e, t, n, s);
    return o && Dr(o) && o.catch((r) => {
      Bn(r, t, n);
    }), o;
  }
  if (Y(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Pt(e[r], t, n, s));
    return o;
  } else O.NODE_ENV !== "production" && L(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = O.NODE_ENV !== "production" ? Br[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  if (O.NODE_ENV !== "production") {
    const r = Br[t];
    if (n && _s(n), L(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Es(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const ht = [];
let Zt = -1;
const ws = [];
let kn = null, ys = 0;
const du = /* @__PURE__ */ Promise.resolve();
let ar = null;
const nh = 100;
function fs(e) {
  const t = ar || du;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sh(e) {
  let t = Zt + 1, n = ht.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ht[s], r = mo(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function jr(e) {
  if (!(e.flags & 1)) {
    const t = mo(e), n = ht[ht.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= mo(n) ? ht.push(e) : ht.splice(sh(t), 0, e), e.flags |= 1, fu();
  }
}
function fu() {
  ar || (ar = du.then(pu));
}
function Cs(e) {
  Y(e) ? ws.push(...e) : kn && e.id === -1 ? kn.splice(ys + 1, 0, e) : e.flags & 1 || (ws.push(e), e.flags |= 1), fu();
}
function ha(e, t, n = Zt + 1) {
  for (O.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ht.length; n++) {
    const s = ht[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || O.NODE_ENV !== "production" && ml(t, s))
        continue;
      ht.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function cr(e) {
  if (ws.length) {
    const t = [...new Set(ws)].sort(
      (n, s) => mo(n) - mo(s)
    );
    if (ws.length = 0, kn) {
      kn.push(...t);
      return;
    }
    for (kn = t, O.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ys = 0; ys < kn.length; ys++) {
      const n = kn[ys];
      O.NODE_ENV !== "production" && ml(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kn = null, ys = 0;
  }
}
const mo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pu(e) {
  O.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = O.NODE_ENV !== "production" ? (n) => ml(e, n) : De;
  try {
    for (Zt = 0; Zt < ht.length; Zt++) {
      const n = ht[Zt];
      if (n && !(n.flags & 8)) {
        if (O.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ds(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Zt < ht.length; Zt++) {
      const n = ht[Zt];
      n && (n.flags &= -2);
    }
    Zt = -1, ht.length = 0, cr(e), ar = null, (ht.length || ws.length) && pu(e);
  }
}
function ml(e, t) {
  const n = e.get(t) || 0;
  if (n > nh) {
    const s = t.i, o = s && Ts(s.type);
    return Bn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ut = !1;
const Ko = /* @__PURE__ */ new Map();
O.NODE_ENV !== "production" && (ko().__VUE_HMR_RUNTIME__ = {
  createRecord: ci(hu),
  rerender: ci(ih),
  reload: ci(lh)
});
const rs = /* @__PURE__ */ new Map();
function oh(e) {
  const t = e.type.__hmrId;
  let n = rs.get(t);
  n || (hu(t, e.type), n = rs.get(t)), n.instances.add(e);
}
function rh(e) {
  rs.get(e.type.__hmrId).instances.delete(e);
}
function hu(e, t) {
  return rs.has(e) ? !1 : (rs.set(e, {
    initialDef: ur(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ur(e) {
  return wd(e) ? e.__vccOpts : e;
}
function ih(e, t) {
  const n = rs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, ur(s.type).render = t), s.renderCache = [], Ut = !0, s.update(), Ut = !1;
  }));
}
function lh(e, t) {
  const n = rs.get(e);
  if (!n) return;
  t = ur(t), ma(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = ur(r.type);
    let l = Ko.get(i);
    l || (i !== n.initialDef && ma(i, t), Ko.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? jr(() => {
      Ut = !0, r.parent.update(), Ut = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Cs(() => {
    Ko.clear();
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
let Bt, Ys = [], Si = !1;
function Oo(e, ...t) {
  Bt ? Bt.emit(e, ...t) : Si || Ys.push({ event: e, args: t });
}
function gl(e, t) {
  var n, s;
  Bt = e, Bt ? (Bt.enabled = !0, Ys.forEach(({ event: o, args: r }) => Bt.emit(o, ...r)), Ys = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    gl(r, t);
  }), setTimeout(() => {
    Bt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Si = !0, Ys = []);
  }, 3e3)) : (Si = !0, Ys = []);
}
function ah(e, t) {
  Oo("app:init", e, t, {
    Fragment: re,
    Text: on,
    Comment: Ve,
    Static: Mn
  });
}
function ch(e) {
  Oo("app:unmount", e);
}
const ki = /* @__PURE__ */ vl(
  "component:added"
  /* COMPONENT_ADDED */
), mu = /* @__PURE__ */ vl(
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
    Oo(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const fh = /* @__PURE__ */ gu(
  "perf:start"
  /* PERFORMANCE_START */
), ph = /* @__PURE__ */ gu(
  "perf:end"
  /* PERFORMANCE_END */
);
function gu(e) {
  return (t, n, s) => {
    Oo(e, t.appContext.app, t.uid, t, n, s);
  };
}
function hh(e, t, n) {
  Oo(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Be = null, Hr = null;
function go(e) {
  const t = Be;
  return Be = e, Hr = e && e.type.__scopeId || null, t;
}
function mh(e) {
  Hr = e;
}
function gh() {
  Hr = null;
}
const vh = (e) => Pe;
function Pe(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Mi(-1);
    const r = go(t);
    let i;
    try {
      i = e(...o);
    } finally {
      go(r), s._d && Mi(1);
    }
    return O.NODE_ENV !== "production" && mu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vu(e) {
  Vc(e) && L("Do not use built-in directive ids as custom directive id: " + e);
}
function $e(e, t) {
  if (Be === null)
    return O.NODE_ENV !== "production" && L("withDirectives can only be used inside render functions."), e;
  const n = To(Be), s = e.dirs || (e.dirs = []);
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
const yu = Symbol("_vte"), bu = (e) => e.__isTeleport, Zn = (e) => e && (e.disabled || e.disabled === ""), ga = (e) => e && (e.defer || e.defer === ""), va = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ya = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ci = (e, t) => {
  const n = e && e.to;
  if (le(n))
    if (t) {
      const s = t(n);
      return O.NODE_ENV !== "production" && !s && !Zn(e) && L(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return O.NODE_ENV !== "production" && L(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return O.NODE_ENV !== "production" && !n && !Zn(e) && L(`Invalid Teleport target: ${n}`), n;
}, _u = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, l, a, c) {
    const {
      mc: d,
      pc: u,
      pbc: p,
      o: { insert: m, querySelector: g, createText: h, createComment: I }
    } = c, k = Zn(t.props);
    let { shapeFlag: _, children: v, dynamicChildren: $ } = t;
    if (O.NODE_ENV !== "production" && Ut && (a = !1, $ = null), e == null) {
      const E = t.el = O.NODE_ENV !== "production" ? I("teleport start") : h(""), M = t.anchor = O.NODE_ENV !== "production" ? I("teleport end") : h("");
      m(E, n, s), m(M, n, s);
      const C = (b, D) => {
        _ & 16 && (o && o.isCE && (o.ce._teleportTarget = b), d(
          v,
          b,
          D,
          o,
          r,
          i,
          l,
          a
        ));
      }, T = () => {
        const b = t.target = Ci(t.props, g), D = Eu(b, t, h, m);
        b ? (i !== "svg" && va(b) ? i = "svg" : i !== "mathml" && ya(b) && (i = "mathml"), k || (C(b, D), Go(t, !1))) : O.NODE_ENV !== "production" && !k && L(
          "Invalid Teleport target on mount:",
          b,
          `(${typeof b})`
        );
      };
      k && (C(n, M), Go(t, !0)), ga(t.props) ? (t.el.__isMounted = !1, ze(() => {
        T(), delete t.el.__isMounted;
      }, r)) : T();
    } else {
      if (ga(t.props) && e.el.__isMounted === !1) {
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
            c
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const E = t.anchor = e.anchor, M = t.target = e.target, C = t.targetAnchor = e.targetAnchor, T = Zn(e.props), b = T ? n : M, D = T ? E : C;
      if (i === "svg" || va(M) ? i = "svg" : (i === "mathml" || ya(M)) && (i = "mathml"), $ ? (p(
        e.dynamicChildren,
        $,
        b,
        o,
        r,
        i,
        l
      ), ro(e, t, O.NODE_ENV === "production")) : a || u(
        e,
        t,
        b,
        D,
        o,
        r,
        i,
        l,
        !1
      ), k)
        T ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Lo(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const N = t.target = Ci(
          t.props,
          g
        );
        N ? Lo(
          t,
          N,
          null,
          c,
          0
        ) : O.NODE_ENV !== "production" && L(
          "Invalid Teleport target on update:",
          M,
          `(${typeof M})`
        );
      } else T && Lo(
        t,
        M,
        C,
        c,
        1
      );
      Go(t, k);
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
  move: Lo,
  hydrate: yh
};
function Lo(e, t, n, { o: { insert: s }, m: o }, r = 2) {
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
function yh(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: c, createText: d }
}, u) {
  const p = t.target = Ci(
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
        t.targetAnchor || Eu(p, t, d, c), u(
          g && i(g),
          t,
          p,
          n,
          s,
          o,
          r
        );
      }
    Go(t, m);
  }
  return t.anchor && i(t.anchor);
}
const bn = _u;
function Go(e, t) {
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
const Cn = Symbol("_leaveCb"), Fo = Symbol("_enterCb");
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
const Vt = [Function, Array], bl = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Vt,
  onEnter: Vt,
  onAfterEnter: Vt,
  onEnterCancelled: Vt,
  // leave
  onBeforeLeave: Vt,
  onLeave: Vt,
  onAfterLeave: Vt,
  onLeaveCancelled: Vt,
  // appear
  onBeforeAppear: Vt,
  onAppear: Vt,
  onAfterAppear: Vt,
  onAppearCancelled: Vt
}, wu = (e) => {
  const t = e.subTree;
  return t.component ? wu(t.component) : t;
}, bh = {
  name: "BaseTransition",
  props: bl,
  setup(e, { slots: t }) {
    const n = ut(), s = yl();
    return () => {
      const o = t.default && Ur(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = xu(o), i = ce(e), { mode: l } = i;
      if (O.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && L(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ui(r);
      const a = ba(r);
      if (!a)
        return ui(r);
      let c = Os(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      a.type !== Ve && yn(a, c);
      let d = n.subTree && ba(n.subTree);
      if (d && d.type !== Ve && !jt(a, d) && wu(n).type !== Ve) {
        let u = Os(
          d,
          i,
          s,
          n
        );
        if (yn(d, u), l === "out-in" && a.type !== Ve)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, d = void 0;
          }, ui(r);
        l === "in-out" && a.type !== Ve ? u.delayLeave = (p, m, g) => {
          const h = Su(
            s,
            d
          );
          h[String(d.key)] = d, p[Cn] = () => {
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
function xu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== Ve) {
        if (O.NODE_ENV !== "production" && n) {
          L(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, O.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Nu = bh;
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
    onEnter: c,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: g,
    onLeaveCancelled: h,
    onBeforeAppear: I,
    onAppear: k,
    onAfterAppear: _,
    onAppearCancelled: v
  } = t, $ = String(e.key), E = Su(n, e), M = (b, D) => {
    b && Pt(
      b,
      s,
      9,
      D
    );
  }, C = (b, D) => {
    const N = D[1];
    M(b, D), Y(b) ? b.every((y) => y.length <= 1) && N() : b.length <= 1 && N();
  }, T = {
    mode: i,
    persisted: l,
    beforeEnter(b) {
      let D = a;
      if (!n.isMounted)
        if (r)
          D = I || a;
        else
          return;
      b[Cn] && b[Cn](
        !0
        /* cancelled */
      );
      const N = E[$];
      N && jt(e, N) && N.el[Cn] && N.el[Cn](), M(D, [b]);
    },
    enter(b) {
      let D = c, N = d, y = u;
      if (!n.isMounted)
        if (r)
          D = k || c, N = _ || d, y = v || u;
        else
          return;
      let V = !1;
      const P = b[Fo] = (B) => {
        V || (V = !0, B ? M(y, [b]) : M(N, [b]), T.delayedLeave && T.delayedLeave(), b[Fo] = void 0);
      };
      D ? C(D, [b, P]) : P();
    },
    leave(b, D) {
      const N = String(e.key);
      if (b[Fo] && b[Fo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      M(p, [b]);
      let y = !1;
      const V = b[Cn] = (P) => {
        y || (y = !0, D(), P ? M(h, [b]) : M(g, [b]), b[Cn] = void 0, E[N] === e && delete E[N]);
      };
      E[N] = e, m ? C(m, [b, V]) : V();
    },
    clone(b) {
      const D = Os(
        b,
        t,
        n,
        s,
        o
      );
      return o && o(D), D;
    }
  };
  return T;
}
function ui(e) {
  if (Bs(e))
    return e = Rt(e), e.children = null, e;
}
function ba(e) {
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
function Ur(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === re ? (i.patchFlag & 128 && o++, s = s.concat(
      Ur(i.children, t, l)
    )) : (t || i.type !== Ve) && s.push(l != null ? Rt(i, { key: l }) : i);
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
  const e = ut();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (O.NODE_ENV !== "production" && L(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function El(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ku = /* @__PURE__ */ new WeakSet();
function Eh(e) {
  const t = ut(), n = ru(null);
  if (t) {
    const o = t.refs === pe ? t.refs = {} : t.refs;
    let r;
    O.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? L(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else O.NODE_ENV !== "production" && L(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = O.NODE_ENV !== "production" ? Lr(n) : n;
  return O.NODE_ENV !== "production" && ku.add(s), s;
}
function xs(e, t, n, s, o = !1) {
  if (Y(e)) {
    e.forEach(
      (g, h) => xs(
        g,
        t && (Y(t) ? t[h] : t),
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
  const r = s.shapeFlag & 4 ? To(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (O.NODE_ENV !== "production" && !l) {
    L(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, p = ce(u), m = u === pe ? () => !1 : (g) => O.NODE_ENV !== "production" && (ve(p, g) && !Ie(p[g]) && L(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), ku.has(p[g])) ? !1 : ve(p, g);
  if (c != null && c !== a && (le(c) ? (d[c] = null, m(c) && (u[c] = null)) : Ie(c) && (c.value = null)), oe(a))
    ds(a, l, 12, [i, d]);
  else {
    const g = le(a), h = Ie(a);
    if (g || h) {
      const I = () => {
        if (e.f) {
          const k = g ? m(a) ? u[a] : d[a] : a.value;
          o ? Y(k) && ol(k, r) : Y(k) ? k.includes(r) || k.push(r) : g ? (d[a] = [r], m(a) && (u[a] = d[a])) : (a.value = [r], e.k && (d[e.k] = a.value));
        } else g ? (d[a] = i, m(a) && (u[a] = i)) : h ? (a.value = i, e.k && (d[e.k] = i)) : O.NODE_ENV !== "production" && L("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (I.id = -1, ze(I, n)) : I();
    } else O.NODE_ENV !== "production" && L("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let _a = !1;
const Hn = () => {
  _a || (console.error("Hydration completed but contains mismatches."), _a = !0);
}, wh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", xh = (e) => e.namespaceURI.includes("MathML"), Bo = (e) => {
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
  } = e, d = (v, $) => {
    if (!$.hasChildNodes()) {
      O.NODE_ENV !== "production" && L(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, v, $), cr(), $._vnode = v;
      return;
    }
    u($.firstChild, v, null, null, null), cr(), $._vnode = v;
  }, u = (v, $, E, M, C, T = !1) => {
    T = T || !!$.dynamicChildren;
    const b = Kn(v) && v.data === "[", D = () => h(
      v,
      $,
      E,
      M,
      C,
      b
    ), { type: N, ref: y, shapeFlag: V, patchFlag: P } = $;
    let B = v.nodeType;
    $.el = v, O.NODE_ENV !== "production" && (os(v, "__vnode", $, !0), os(v, "__vueParentComponent", E, !0)), P === -2 && (T = !1, $.dynamicChildren = null);
    let J = null;
    switch (N) {
      case on:
        B !== 3 ? $.children === "" ? (a($.el = o(""), i(v), v), J = v) : J = D() : (v.data !== $.children && (O.NODE_ENV !== "production" && L(
          "Hydration text mismatch in",
          v.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            v.data
          )}
  - expected on client: ${JSON.stringify($.children)}`
        ), Hn(), v.data = $.children), J = r(v));
        break;
      case Ve:
        _(v) ? (J = r(v), k(
          $.el = v.content.firstChild,
          v,
          E
        )) : B !== 8 || b ? J = D() : J = r(v);
        break;
      case Mn:
        if (b && (v = r(v), B = v.nodeType), B === 1 || B === 3) {
          J = v;
          const ne = !$.children.length;
          for (let te = 0; te < $.staticCount; te++)
            ne && ($.children += J.nodeType === 1 ? J.outerHTML : J.data), te === $.staticCount - 1 && ($.anchor = J), J = r(J);
          return b ? r(J) : J;
        } else
          D();
        break;
      case re:
        b ? J = g(
          v,
          $,
          E,
          M,
          C,
          T
        ) : J = D();
        break;
      default:
        if (V & 1)
          (B !== 1 || $.type.toLowerCase() !== v.tagName.toLowerCase()) && !_(v) ? J = D() : J = p(
            v,
            $,
            E,
            M,
            C,
            T
          );
        else if (V & 6) {
          $.slotScopeIds = C;
          const ne = i(v);
          if (b ? J = I(v) : Kn(v) && v.data === "teleport start" ? J = I(v, v.data, "teleport end") : J = r(v), t(
            $,
            ne,
            null,
            E,
            M,
            Bo(ne),
            T
          ), In($) && !$.type.__asyncResolved) {
            let te;
            b ? (te = ue(re), te.anchor = J ? J.previousSibling : ne.lastChild) : te = v.nodeType === 3 ? je("") : ue("div"), te.el = v, $.component.subTree = te;
          }
        } else V & 64 ? B !== 8 ? J = D() : J = $.type.hydrate(
          v,
          $,
          E,
          M,
          C,
          T,
          e,
          m
        ) : V & 128 ? J = $.type.hydrate(
          v,
          $,
          E,
          M,
          Bo(i(v)),
          C,
          T,
          e,
          u
        ) : O.NODE_ENV !== "production" && L("Invalid HostVNode type:", N, `(${typeof N})`);
    }
    return y != null && xs(y, null, M, $), J;
  }, p = (v, $, E, M, C, T) => {
    T = T || !!$.dynamicChildren;
    const { type: b, props: D, patchFlag: N, shapeFlag: y, dirs: V, transition: P } = $, B = b === "input" || b === "option";
    if (O.NODE_ENV !== "production" || B || N !== -1) {
      V && tn($, null, E, "created");
      let J = !1;
      if (_(v)) {
        J = Qu(
          null,
          // no need check parentSuspense in hydration
          P
        ) && E && E.vnode.props && E.vnode.props.appear;
        const te = v.content.firstChild;
        if (J) {
          const _e = te.getAttribute("class");
          _e && (te.$cls = _e), P.beforeEnter(te);
        }
        k(te, v, E), $.el = v = te;
      }
      if (y & 16 && // skip if element has innerHTML / textContent
      !(D && (D.innerHTML || D.textContent))) {
        let te = m(
          v.firstChild,
          $,
          v,
          E,
          M,
          C,
          T
        ), _e = !1;
        for (; te; ) {
          Js(
            v,
            1
            /* CHILDREN */
          ) || (O.NODE_ENV !== "production" && !_e && (L(
            "Hydration children mismatch on",
            v,
            `
Server rendered element contains more child nodes than client vdom.`
          ), _e = !0), Hn());
          const gt = te;
          te = te.nextSibling, l(gt);
        }
      } else if (y & 8) {
        let te = $.children;
        te[0] === `
` && (v.tagName === "PRE" || v.tagName === "TEXTAREA") && (te = te.slice(1)), v.textContent !== te && (Js(
          v,
          0
          /* TEXT */
        ) || (O.NODE_ENV !== "production" && L(
          "Hydration text content mismatch on",
          v,
          `
  - rendered on server: ${v.textContent}
  - expected on client: ${$.children}`
        ), Hn()), v.textContent = $.children);
      }
      if (D) {
        if (O.NODE_ENV !== "production" || B || !T || N & 48) {
          const te = v.tagName.includes("-");
          for (const _e in D)
            O.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(V && V.some((gt) => gt.dir.created)) && Sh(v, _e, D[_e], $, E) && Hn(), (B && (_e.endsWith("value") || _e === "indeterminate") || vn(_e) && !An(_e) || // force hydrate v-bind with .prop modifiers
            _e[0] === "." || te) && s(v, _e, null, D[_e], void 0, E);
        } else if (D.onClick)
          s(
            v,
            "onClick",
            null,
            D.onClick,
            void 0,
            E
          );
        else if (N & 4 && mn(D.style))
          for (const te in D.style) D.style[te];
      }
      let ne;
      (ne = D && D.onVnodeBeforeMount) && _t(ne, E, $), V && tn($, null, E, "beforeMount"), ((ne = D && D.onVnodeMounted) || V || J) && ad(() => {
        ne && _t(ne, E, $), J && P.enter(v), V && tn($, null, E, "mounted");
      }, M);
    }
    return v.nextSibling;
  }, m = (v, $, E, M, C, T, b) => {
    b = b || !!$.dynamicChildren;
    const D = $.children, N = D.length;
    let y = !1;
    for (let V = 0; V < N; V++) {
      const P = b ? D[V] : D[V] = mt(D[V]), B = P.type === on;
      v ? (B && !b && V + 1 < N && mt(D[V + 1]).type === on && (a(
        o(
          v.data.slice(P.children.length)
        ),
        E,
        r(v)
      ), v.data = P.children), v = u(
        v,
        P,
        M,
        C,
        T,
        b
      )) : B && !P.children ? a(P.el = o(""), E) : (Js(
        E,
        1
        /* CHILDREN */
      ) || (O.NODE_ENV !== "production" && !y && (L(
        "Hydration children mismatch on",
        E,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), y = !0), Hn()), n(
        null,
        P,
        E,
        null,
        M,
        C,
        Bo(E),
        T
      ));
    }
    return v;
  }, g = (v, $, E, M, C, T) => {
    const { slotScopeIds: b } = $;
    b && (C = C ? C.concat(b) : b);
    const D = i(v), N = m(
      r(v),
      $,
      D,
      E,
      M,
      C,
      T
    );
    return N && Kn(N) && N.data === "]" ? r($.anchor = N) : (Hn(), a($.anchor = c("]"), D, N), N);
  }, h = (v, $, E, M, C, T) => {
    if (Js(
      v.parentElement,
      1
      /* CHILDREN */
    ) || (O.NODE_ENV !== "production" && L(
      `Hydration node mismatch:
- rendered on server:`,
      v,
      v.nodeType === 3 ? "(text)" : Kn(v) && v.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      $.type
    ), Hn()), $.el = null, T) {
      const N = I(v);
      for (; ; ) {
        const y = r(v);
        if (y && y !== N)
          l(y);
        else
          break;
      }
    }
    const b = r(v), D = i(v);
    return l(v), n(
      null,
      $,
      D,
      b,
      E,
      M,
      Bo(D),
      C
    ), E && (E.vnode.el = $.el, Gr(E, $.el)), b;
  }, I = (v, $ = "[", E = "]") => {
    let M = 0;
    for (; v; )
      if (v = r(v), v && Kn(v) && (v.data === $ && M++, v.data === E)) {
        if (M === 0)
          return r(v);
        M--;
      }
    return v;
  }, k = (v, $, E) => {
    const M = $.parentNode;
    M && M.replaceChild(v, $);
    let C = E;
    for (; C; )
      C.vnode.el === $ && (C.vnode.el = C.subTree.el = v), C = C.parent;
  }, _ = (v) => v.nodeType === 1 && v.tagName === "TEMPLATE";
  return [d, u];
}
function Sh(e, t, n, s, o) {
  let r, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = Ee(n), kh(Ea(l || ""), Ea(a)) || (r = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : Zf(qe(n));
    const c = wa(l), d = wa(a);
    if (s.dirs)
      for (const { dir: u, value: p } of s.dirs)
        u.name === "show" && !p && d.set("display", "none");
    o && Cu(o, s, d), Ch(c, d) || (r = 3, i = "style");
  } else (e instanceof SVGElement && ap(t) || e instanceof HTMLElement && (ua(t) || lp(t))) && (ua(t) ? (l = e.hasAttribute(t), a = ll(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = cp(n) ? String(n) : !1), l !== a && (r = 4, i = t));
  if (r != null && !Js(e, r)) {
    const c = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, d = `Hydration ${Ou[r]} mismatch on`, u = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return L(d, e, u), !0;
  }
  return !1;
}
function Ea(e) {
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
function wa(e) {
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
function Cu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === re && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const r in o) {
      const i = Bc(o[r]);
      n.set(`--${dp(r)}`, i);
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
function Js(e, t) {
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
const Oh = ko().requestIdleCallback || ((e) => setTimeout(e, 1)), $h = ko().cancelIdleCallback || ((e) => clearTimeout(e)), Th = (e = 1e4) => (t) => {
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
  let c = null, d, u = 0;
  const p = () => (u++, c = null, m()), m = () => {
    let g;
    return c || (g = c = t().catch((h) => {
      if (h = h instanceof Error ? h : new Error(String(h)), a)
        return new Promise((I, k) => {
          a(h, () => I(p()), () => k(h), u + 1);
        });
      throw h;
    }).then((h) => {
      if (g !== c && c)
        return c;
      if (O.NODE_ENV !== "production" && !h && L(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), h && (h.__esModule || h[Symbol.toStringTag] === "Module") && (h = h.default), O.NODE_ENV !== "production" && h && !ge(h) && !oe(h))
        throw new Error(`Invalid async component load result: ${h}`);
      return d = h, h;
    }));
  };
  return /* @__PURE__ */ _l({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(g, h, I) {
      let k = !1;
      (h.bu || (h.bu = [])).push(() => k = !0);
      const _ = () => {
        if (k) {
          O.NODE_ENV !== "production" && L(
            `Skipping lazy hydration for component '${Ts(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        I();
      }, v = r ? () => {
        const $ = r(
          _,
          (E) => Mh(g, E)
        );
        $ && (h.bum || (h.bum = [])).push($);
      } : _;
      d ? v() : m().then(() => !h.isUnmounted && v());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const g = Ge;
      if (El(g), d)
        return () => di(d, g);
      const h = (v) => {
        c = null, Bn(
          v,
          g,
          13,
          !s
        );
      };
      if (l && g.suspense || $s)
        return m().then((v) => () => di(v, g)).catch((v) => (h(v), () => s ? ue(s, {
          error: v
        }) : null));
      const I = W(!1), k = W(), _ = W(!!o);
      return o && setTimeout(() => {
        _.value = !1;
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
        if (I.value && d)
          return di(d, g);
        if (k.value && s)
          return ue(s, {
            error: k.value
          });
        if (n && !_.value)
          return ue(n);
      };
    }
  });
}
function di(e, t) {
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
    const n = ut(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const _ = t.default && t.default();
        return _ && _.length === 1 ? _[0] : _;
      };
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let i = null;
    O.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: d,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (_, v, $, E, M) => {
      const C = _.component;
      c(_, v, $, 0, l), a(
        C.vnode,
        _,
        v,
        $,
        C,
        l,
        E,
        _.slotScopeIds,
        M
      ), ze(() => {
        C.isDeactivated = !1, C.a && Tn(C.a);
        const T = _.props && _.props.onVnodeMounted;
        T && _t(T, C.parent, _);
      }, l), O.NODE_ENV !== "production" && ki(C);
    }, s.deactivate = (_) => {
      const v = _.component;
      hr(v.m), hr(v.a), c(_, p, null, 1, l), ze(() => {
        v.da && Tn(v.da);
        const $ = _.props && _.props.onVnodeUnmounted;
        $ && _t($, v.parent, _), v.isDeactivated = !0;
      }, l), O.NODE_ENV !== "production" && ki(v), O.NODE_ENV !== "production" && (v.__keepAliveStorageContainer = p);
    };
    function m(_) {
      fi(_), d(_, n, l, !0);
    }
    function g(_) {
      o.forEach((v, $) => {
        const E = Ts(v.type);
        E && !_(E) && h($);
      });
    }
    function h(_) {
      const v = o.get(_);
      v && (!i || !jt(v, i)) ? m(v) : i && fi(i), o.delete(_), r.delete(_);
    }
    Wt(
      () => [e.include, e.exclude],
      ([_, v]) => {
        _ && g(($) => Xs(_, $)), v && g(($) => !Xs(v, $));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let I = null;
    const k = () => {
      I != null && (gr(n.subTree.type) ? ze(() => {
        o.set(I, jo(n.subTree));
      }, n.subTree.suspense) : o.set(I, jo(n.subTree)));
    };
    return He(k), zr(k), js(() => {
      o.forEach((_) => {
        const { subTree: v, suspense: $ } = n, E = jo(v);
        if (_.type === E.type && _.key === E.key) {
          fi(E);
          const M = E.component.da;
          M && ze(M, $);
          return;
        }
        m(_);
      });
    }), () => {
      if (I = null, !t.default)
        return i = null;
      const _ = t.default(), v = _[0];
      if (_.length > 1)
        return O.NODE_ENV !== "production" && L("KeepAlive should contain exactly one component child."), i = null, _;
      if (!ln(v) || !(v.shapeFlag & 4) && !(v.shapeFlag & 128))
        return i = null, v;
      let $ = jo(v);
      if ($.type === Ve)
        return i = null, $;
      const E = $.type, M = Ts(
        In($) ? $.type.__asyncResolved || {} : E
      ), { include: C, exclude: T, max: b } = e;
      if (C && (!M || !Xs(C, M)) || T && M && Xs(T, M))
        return $.shapeFlag &= -257, i = $, v;
      const D = $.key == null ? E : $.key, N = o.get(D);
      return $.el && ($ = Rt($), v.shapeFlag & 128 && (v.ssContent = $)), I = D, N ? ($.el = N.el, $.component = N.component, $.transition && yn($, $.transition), $.shapeFlag |= 512, r.delete(D), r.add(D)) : (r.add(D), b && r.size > parseInt(b, 10) && h(r.values().next().value)), $.shapeFlag |= 256, i = $, gr(v.type) ? v : $;
    };
  }
}, Lh = Rh;
function Xs(e, t) {
  return Y(e) ? e.some((n) => Xs(n, t)) : le(e) ? e.split(",").includes(t) : Hf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
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
  if (qr(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Bs(o.parent.vnode) && Fh(s, t, n, o), o = o.parent;
  }
}
function Fh(e, t, n, s) {
  const o = qr(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ot(() => {
    ol(s[t], o);
  }, n);
}
function fi(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function jo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function qr(e, t, n = Ge, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Gt();
      const l = as(n), a = Pt(t, n, e, i);
      return l(), Yt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (O.NODE_ENV !== "production") {
    const o = nn(Br[e].replace(/ hook$/, ""));
    L(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _n = (e) => (t, n = Ge) => {
  (!$s || e === "sp") && qr(e, (...s) => t(...s), n);
}, Vu = _n("bm"), He = _n("m"), wl = _n(
  "bu"
), zr = _n("u"), js = _n(
  "bum"
), Ot = _n("um"), Au = _n(
  "sp"
), Iu = _n("rtg"), Mu = _n("rtc");
function Pu(e, t = Ge) {
  qr("ec", e, t);
}
const dr = "components", Bh = "directives";
function jh(e, t) {
  return Sl(dr, e, !0, t) || e;
}
const xl = Symbol.for("v-ndc");
function Nl(e) {
  return le(e) ? Sl(dr, e, !1) || e : e || xl;
}
function Hh(e) {
  return Sl(Bh, e);
}
function Sl(e, t, n = !0, s = !1) {
  const o = Be || Ge;
  if (o) {
    const r = o.type;
    if (e === dr) {
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
    if (O.NODE_ENV !== "production" && n && !i) {
      const l = e === dr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      L(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else O.NODE_ENV !== "production" && L(
    `resolve${rn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Na(e, t) {
  return e && (e[t] || e[Ce(t)] || e[rn(Ce(t))]);
}
function me(e, t, n, s) {
  let o;
  const r = n && n[s], i = Y(e);
  if (i || le(e)) {
    const l = i && mn(e);
    let a = !1, c = !1;
    l && (a = !it(e), c = Jt(e), e = Pr(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? c ? ir(Ze(e[d])) : Ze(e[d]) : e[d],
        d,
        void 0,
        r && r[d]
      );
  } else if (typeof e == "number") {
    O.NODE_ENV !== "production" && !Number.isInteger(e) && L(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
        const d = l[a];
        o[a] = t(e[d], d, a, r && r[a]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
function Uh(e, t) {
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
  if (Be.ce || Be.parent && In(Be.parent) && Be.parent.ce)
    return t !== "default" && (n.name = t), x(), ct(
      re,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  O.NODE_ENV !== "production" && r && r.length > 1 && (L(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), x();
  const i = r && kl(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = ct(
    re,
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
  return e.some((t) => ln(t) ? !(t.type === Ve || t.type === re && !kl(t.children)) : !0) ? e : null;
}
function qh(e, t) {
  const n = {};
  if (O.NODE_ENV !== "production" && !ge(e))
    return L("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : nn(s)] = e[s];
  return n;
}
const Oi = (e) => e ? vd(e) ? To(e) : Oi(e.parent) : null, es = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => O.NODE_ENV !== "production" ? Ht(e.props) : e.props,
    $attrs: (e) => O.NODE_ENV !== "production" ? Ht(e.attrs) : e.attrs,
    $slots: (e) => O.NODE_ENV !== "production" ? Ht(e.slots) : e.slots,
    $refs: (e) => O.NODE_ENV !== "production" ? Ht(e.refs) : e.refs,
    $parent: (e) => Oi(e.parent),
    $root: (e) => Oi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      jr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fs.bind(e.proxy)),
    $watch: (e) => Im.bind(e)
  })
), Cl = (e) => e === "_" || e === "$", pi = (e, t) => e !== pe && !e.__isScriptSetup && ve(e, t), so = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (O.NODE_ENV !== "production" && t === "__isVue")
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
        if (pi(s, t))
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
        $i && (i[t] = 0);
      }
    }
    const d = es[t];
    let u, p;
    if (d)
      return t === "$attrs" ? (We(e.attrs, "get", ""), O.NODE_ENV !== "production" && mr()) : O.NODE_ENV !== "production" && t === "$slots" && We(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== pe && ve(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, ve(p, t)
    )
      return p[t];
    O.NODE_ENV !== "production" && Be && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== pe && Cl(t[0]) && ve(o, t) ? L(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Be && L(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return pi(o, t) ? (o[t] = n, !0) : O.NODE_ENV !== "production" && o.__isScriptSetup && ve(o, t) ? (L(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ve(s, t) ? (s[t] = n, !0) : ve(e.props, t) ? (O.NODE_ENV !== "production" && L(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (O.NODE_ENV !== "production" && L(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (O.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== pe && ve(e, i) || pi(t, i) || (l = r[0]) && ve(l, i) || ve(s, i) || ve(es, i) || ve(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
O.NODE_ENV !== "production" && (so.ownKeys = (e) => (L(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zh = /* @__PURE__ */ fe({}, so, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return so.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Gf(t);
    return O.NODE_ENV !== "production" && !n && so.has(e, t) && L(
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
        L(
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
const ps = (e) => L(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Yh() {
  return O.NODE_ENV !== "production" && ps("defineProps"), null;
}
function Jh() {
  return O.NODE_ENV !== "production" && ps("defineEmits"), null;
}
function Xh(e) {
  O.NODE_ENV !== "production" && ps("defineExpose");
}
function Qh(e) {
  O.NODE_ENV !== "production" && ps("defineOptions");
}
function Zh() {
  return O.NODE_ENV !== "production" && ps("defineSlots"), null;
}
function em() {
  O.NODE_ENV !== "production" && ps("defineModel");
}
function tm(e, t) {
  return O.NODE_ENV !== "production" && ps("withDefaults"), null;
}
function nm() {
  return Ru("useSlots").slots;
}
function sm() {
  return Ru("useAttrs").attrs;
}
function Ru(e) {
  const t = ut();
  return O.NODE_ENV !== "production" && !t && L(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Ed(t));
}
function vo(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function om(e, t) {
  const n = vo(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? Y(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : O.NODE_ENV !== "production" && L(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function rm(e, t) {
  return !e || !t ? e || t : Y(e) && Y(t) ? e.concat(t) : fe({}, vo(e), vo(t));
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
  const t = ut();
  O.NODE_ENV !== "production" && !t && L(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Li(), Dr(n) && (n = n.catch((s) => {
    throw as(t), s;
  })), [n, () => as(t)];
}
function am() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? L(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let $i = !0;
function cm(e) {
  const t = Ol(e), n = e.proxy, s = e.ctx;
  $i = !1, t.beforeCreate && Sa(t.beforeCreate, e, "bc");
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
    activated: h,
    deactivated: I,
    beforeDestroy: k,
    beforeUnmount: _,
    destroyed: v,
    unmounted: $,
    render: E,
    renderTracked: M,
    renderTriggered: C,
    errorCaptured: T,
    serverPrefetch: b,
    // public API
    expose: D,
    inheritAttrs: N,
    // assets
    components: y,
    directives: V,
    filters: P
  } = t, B = O.NODE_ENV !== "production" ? am() : null;
  if (O.NODE_ENV !== "production") {
    const [ne] = e.propsOptions;
    if (ne)
      for (const te in ne)
        B("Props", te);
  }
  if (c && um(c, s, B), i)
    for (const ne in i) {
      const te = i[ne];
      oe(te) ? (O.NODE_ENV !== "production" ? Object.defineProperty(s, ne, {
        value: te.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ne] = te.bind(n), O.NODE_ENV !== "production" && B("Methods", ne)) : O.NODE_ENV !== "production" && L(
        `Method "${ne}" has type "${typeof te}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    O.NODE_ENV !== "production" && !oe(o) && L(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ne = o.call(n, n);
    if (O.NODE_ENV !== "production" && Dr(ne) && L(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ge(ne))
      O.NODE_ENV !== "production" && L("data() should return an object.");
    else if (e.data = Ss(ne), O.NODE_ENV !== "production")
      for (const te in ne)
        B("Data", te), Cl(te[0]) || Object.defineProperty(s, te, {
          configurable: !0,
          enumerable: !0,
          get: () => ne[te],
          set: De
        });
  }
  if ($i = !0, r)
    for (const ne in r) {
      const te = r[ne], _e = oe(te) ? te.bind(n, n) : oe(te.get) ? te.get.bind(n, n) : De;
      O.NODE_ENV !== "production" && _e === De && L(`Computed property "${ne}" has no getter.`);
      const gt = !oe(te) && oe(te.set) ? te.set.bind(n) : O.NODE_ENV !== "production" ? () => {
        L(
          `Write operation failed: computed property "${ne}" is readonly.`
        );
      } : De, Tt = X({
        get: _e,
        set: gt
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (Dt) => Tt.value = Dt
      }), O.NODE_ENV !== "production" && B("Computed", ne);
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
  function J(ne, te) {
    Y(te) ? te.forEach((_e) => ne(_e.bind(n))) : te && ne(te.bind(n));
  }
  if (J(Vu, u), J(He, p), J(wl, m), J(zr, g), J($u, h), J(Tu, I), J(Pu, T), J(Mu, M), J(Iu, C), J(js, _), J(Ot, $), J(Au, b), Y(D))
    if (D.length) {
      const ne = e.exposed || (e.exposed = {});
      D.forEach((te) => {
        Object.defineProperty(ne, te, {
          get: () => n[te],
          set: (_e) => n[te] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === De && (e.render = E), N != null && (e.inheritAttrs = N), y && (e.components = y), V && (e.directives = V), b && El(e);
}
function um(e, t, n = De) {
  Y(e) && (e = Ti(e));
  for (const s in e) {
    const o = e[s];
    let r;
    ge(o) ? "default" in o ? r = oo(
      o.from || s,
      o.default,
      !0
    ) : r = oo(o.from || s) : r = oo(o), Ie(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, O.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Sa(e, t, n) {
  Pt(
    Y(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Lu(e, t, n, s) {
  let o = s.includes(".") ? sd(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    oe(r) ? Wt(o, r) : O.NODE_ENV !== "production" && L(`Invalid watch handler specified by key "${e}"`, r);
  } else if (oe(e))
    Wt(o, e.bind(n));
  else if (ge(e))
    if (Y(e))
      e.forEach((r) => Lu(r, t, n, s));
    else {
      const r = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(r) ? Wt(o, r, e) : O.NODE_ENV !== "production" && L(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else O.NODE_ENV !== "production" && L(`Invalid watch option: "${s}"`, e);
}
function Ol(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => fr(a, c, i, !0)
  ), fr(a, t, i)), ge(t) && r.set(t, a), a;
}
function fr(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && fr(e, r, n, !0), o && o.forEach(
    (i) => fr(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      O.NODE_ENV !== "production" && L(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = dm[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const dm = {
  data: ka,
  props: Ca,
  emits: Ca,
  // objects
  methods: Qs,
  computed: Qs,
  // lifecycle
  beforeCreate: ft,
  created: ft,
  beforeMount: ft,
  mounted: ft,
  beforeUpdate: ft,
  updated: ft,
  beforeDestroy: ft,
  beforeUnmount: ft,
  destroyed: ft,
  unmounted: ft,
  activated: ft,
  deactivated: ft,
  errorCaptured: ft,
  serverPrefetch: ft,
  // assets
  components: Qs,
  directives: Qs,
  // watch
  watch: pm,
  // provide / inject
  provide: ka,
  inject: fm
};
function ka(e, t) {
  return t ? e ? function() {
    return fe(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fm(e, t) {
  return Qs(Ti(e), Ti(t));
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
function ft(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qs(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ca(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
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
    n[s] = ft(e[s], t[s]);
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
let hm = 0;
function mm(e, t) {
  return function(s, o = null) {
    oe(s) || (s = fe({}, s)), o != null && !ge(o) && (O.NODE_ENV !== "production" && L("root props passed to app.mount() must be an object."), o = null);
    const r = Fu(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = r.app = {
      _uid: hm++,
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
        O.NODE_ENV !== "production" && L(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? O.NODE_ENV !== "production" && L("Plugin has already been applied to target app.") : d && oe(d.install) ? (i.add(d), d.install(c, ...u)) : oe(d) ? (i.add(d), d(c, ...u)) : O.NODE_ENV !== "production" && L(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(d) {
        return r.mixins.includes(d) ? O.NODE_ENV !== "production" && L(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), c;
      },
      component(d, u) {
        return O.NODE_ENV !== "production" && Fi(d, r.config), u ? (O.NODE_ENV !== "production" && r.components[d] && L(`Component "${d}" has already been registered in target app.`), r.components[d] = u, c) : r.components[d];
      },
      directive(d, u) {
        return O.NODE_ENV !== "production" && vu(d), u ? (O.NODE_ENV !== "production" && r.directives[d] && L(`Directive "${d}" has already been registered in target app.`), r.directives[d] = u, c) : r.directives[d];
      },
      mount(d, u, p) {
        if (a)
          O.NODE_ENV !== "production" && L(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          O.NODE_ENV !== "production" && d.__vue_app__ && L(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || ue(s, o);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), O.NODE_ENV !== "production" && (r.reload = () => {
            const g = Rt(m);
            g.el = null, e(g, d, p);
          }), u && t ? t(m, d) : e(m, d, p), a = !0, c._container = d, d.__vue_app__ = c, O.NODE_ENV !== "production" && (c._instance = m.component, ah(c, Hi)), To(m.component);
        }
      },
      onUnmount(d) {
        O.NODE_ENV !== "production" && typeof d != "function" && L(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Pt(
          l,
          c._instance,
          16
        ), e(null, c._container), O.NODE_ENV !== "production" && (c._instance = null, ch(c)), delete c._container.__vue_app__) : O.NODE_ENV !== "production" && L("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return O.NODE_ENV !== "production" && d in r.provides && (ve(r.provides, d) ? L(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : L(
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
function Bu(e, t) {
  if (!Ge)
    O.NODE_ENV !== "production" && L("provide() can only be used inside setup().");
  else {
    let n = Ge.provides;
    const s = Ge.parent && Ge.parent.provides;
    s === n && (n = Ge.provides = Object.create(s)), n[e] = t;
  }
}
function oo(e, t, n = !1) {
  const s = ut();
  if (s || ts) {
    let o = ts ? ts._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    O.NODE_ENV !== "production" && L(`injection "${String(e)}" not found.`);
  } else O.NODE_ENV !== "production" && L("inject() can only be used inside setup() or functional components.");
}
function gm() {
  return !!(ut() || ts);
}
const ju = {}, Hu = () => Object.create(ju), Uu = (e) => Object.getPrototypeOf(e) === ju;
function vm(e, t, n, s = !1) {
  const o = {}, r = Hu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qu(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  O.NODE_ENV !== "production" && Wu(t || {}, o, e), n ? e.props = s ? o : su(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
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
    !(O.NODE_ENV !== "production" && ym(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let p = d[u];
        if (Wr(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (ve(r, p))
            m !== r[p] && (r[p] = m, c = !0);
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
          m !== r[p] && (r[p] = m, c = !0);
      }
    }
  } else {
    qu(e, t, o, r) && (c = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !ve(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = st(u)) === u || !ve(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = Di(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (r !== l)
      for (const u in r)
        (!t || !ve(t, u)) && (delete r[u], c = !0);
  }
  c && sn(e.attrs, "set", ""), O.NODE_ENV !== "production" && Wu(t || {}, o, e);
}
function qu(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (An(a))
        continue;
      const c = t[a];
      let d;
      o && ve(o, d = Ce(a)) ? !r || !r.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : Wr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, i = !0);
    }
  if (r) {
    const a = ce(n), c = l || pe;
    for (let d = 0; d < r.length; d++) {
      const u = r[d];
      n[u] = Di(
        o,
        a,
        u,
        c[u],
        e,
        !ve(c, u)
      );
    }
  }
  return i;
}
function Di(e, t, n, s, o, r) {
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
          const d = as(o);
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
    ] && (s === "" || s === st(n)) && (s = !0));
  }
  return s;
}
const _m = /* @__PURE__ */ new WeakMap();
function zu(e, t, n = !1) {
  const s = n ? _m : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!oe(e)) {
    const d = (u) => {
      a = !0;
      const [p, m] = zu(u, t, !0);
      fe(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !a)
    return ge(e) && s.set(e, bs), bs;
  if (Y(r))
    for (let d = 0; d < r.length; d++) {
      O.NODE_ENV !== "production" && !le(r[d]) && L("props must be strings when using array syntax.", r[d]);
      const u = Ce(r[d]);
      Oa(u) && (i[u] = pe);
    }
  else if (r) {
    O.NODE_ENV !== "production" && !ge(r) && L("invalid props options", r);
    for (const d in r) {
      const u = Ce(d);
      if (Oa(u)) {
        const p = r[d], m = i[u] = Y(p) || oe(p) ? { type: p } : fe({}, p), g = m.type;
        let h = !1, I = !0;
        if (Y(g))
          for (let k = 0; k < g.length; ++k) {
            const _ = g[k], v = oe(_) && _.name;
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
        ] = I, (h || ve(m, "default")) && l.push(u);
      }
    }
  }
  const c = [i, l];
  return ge(e) && s.set(e, c), c;
}
function Oa(e) {
  return e[0] !== "$" && !An(e) ? !0 : (O.NODE_ENV !== "production" && L(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Em(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Wu(e, t, n) {
  const s = ce(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ce(i));
  for (const i in o) {
    let l = o[i];
    l != null && wm(
      i,
      s[i],
      l,
      O.NODE_ENV !== "production" ? Ht(s) : s,
      !r.includes(i)
    );
  }
}
function wm(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    L('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let c = !1;
      const d = Y(r) ? r : [r], u = [];
      for (let p = 0; p < d.length && !c; p++) {
        const { valid: m, expectedType: g } = Nm(t, d[p]);
        u.push(g || ""), c = m;
      }
      if (!c) {
        L(Sm(e, t, u));
        return;
      }
    }
    l && !l(t, s) && L('Invalid prop: custom validator check failed for prop "' + e + '".');
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
  } else s === "Object" ? n = ge(e) : s === "Array" ? n = Y(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Sm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(rn).join(" | ")}`;
  const o = n[0], r = rl(t), i = $a(t, o), l = $a(t, r);
  return n.length === 1 && Ta(o) && !km(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Ta(r) && (s += `with value ${l}.`), s;
}
function $a(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ta(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function km(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const $l = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Tl = (e) => Y(e) ? e.map(mt) : [mt(e)], Cm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Pe((...o) => (O.NODE_ENV !== "production" && Ge && !(n === null && Be) && !(n && n.root !== Ge.root) && L(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Tl(t(...o))), n);
  return s._c = !1, s;
}, Ku = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if ($l(o)) continue;
    const r = e[o];
    if (oe(r))
      t[o] = Cm(o, r, s);
    else if (r != null) {
      O.NODE_ENV !== "production" && L(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Tl(r);
      t[o] = () => i;
    }
  }
}, Gu = (e, t) => {
  O.NODE_ENV !== "production" && !Bs(e.vnode) && L(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Tl(t);
  e.slots.default = () => n;
}, Vi = (e, t, n) => {
  for (const s in t)
    (n || !$l(s)) && (e[s] = t[s]);
}, Om = (e, t, n) => {
  const s = e.slots = Hu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && os(s, "__", o, !0);
    const r = t._;
    r ? (Vi(s, t, n), n && os(s, "_", r, !0)) : Ku(t, s);
  } else t && Gu(e, t);
}, $m = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? O.NODE_ENV !== "production" && Ut ? (Vi(o, t, n), sn(e, "set", "$slots")) : n && l === 1 ? r = !1 : Vi(o, t, n) : (r = !t.$stable, Ku(t, o)), i = t;
  } else t && (Gu(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !$l(l) && i[l] == null && delete o[l];
};
let zs, Dn;
function cn(e, t) {
  e.appContext.config.performance && pr() && Dn.mark(`vue-${t}-${e.uid}`), O.NODE_ENV !== "production" && fh(e, t, pr() ? Dn.now() : Date.now());
}
function un(e, t) {
  if (e.appContext.config.performance && pr()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Dn.mark(s), Dn.measure(
      `<${Yr(e, e.type)}> ${t}`,
      n,
      s
    ), Dn.clearMarks(n), Dn.clearMarks(s);
  }
  O.NODE_ENV !== "production" && ph(e, t, pr() ? Dn.now() : Date.now());
}
function pr() {
  return zs !== void 0 || (typeof window < "u" && window.performance ? (zs = !0, Dn = window.performance) : zs = !1), zs;
}
function Tm() {
  const e = [];
  if (O.NODE_ENV !== "production" && e.length) {
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
  return Xu(e, Nh);
}
function Xu(e, t) {
  Tm();
  const n = ko();
  n.__VUE__ = !0, O.NODE_ENV !== "production" && gl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: m = De,
    insertStaticContent: g
  } = e, h = (w, A, R, q = null, j = null, U = null, Z = void 0, G = null, K = O.NODE_ENV !== "production" && Ut ? !1 : !!A.dynamicChildren) => {
    if (w === A)
      return;
    w && !jt(w, A) && (q = Io(w), En(w, j, U, !0), w = null), A.patchFlag === -2 && (K = !1, A.dynamicChildren = null);
    const { type: z, ref: ie, shapeFlag: ee } = A;
    switch (z) {
      case on:
        I(w, A, R, q);
        break;
      case Ve:
        k(w, A, R, q);
        break;
      case Mn:
        w == null ? _(A, R, q, Z) : O.NODE_ENV !== "production" && v(w, A, R, Z);
        break;
      case re:
        V(
          w,
          A,
          R,
          q,
          j,
          U,
          Z,
          G,
          K
        );
        break;
      default:
        ee & 1 ? M(
          w,
          A,
          R,
          q,
          j,
          U,
          Z,
          G,
          K
        ) : ee & 6 ? P(
          w,
          A,
          R,
          q,
          j,
          U,
          Z,
          G,
          K
        ) : ee & 64 || ee & 128 ? z.process(
          w,
          A,
          R,
          q,
          j,
          U,
          Z,
          G,
          K,
          hs
        ) : O.NODE_ENV !== "production" && L("Invalid VNode type:", z, `(${typeof z})`);
    }
    ie != null && j ? xs(ie, w && w.ref, U, A || w, !A) : ie == null && w && w.ref != null && xs(w.ref, null, U, w, !0);
  }, I = (w, A, R, q) => {
    if (w == null)
      s(
        A.el = l(A.children),
        R,
        q
      );
    else {
      const j = A.el = w.el;
      A.children !== w.children && c(j, A.children);
    }
  }, k = (w, A, R, q) => {
    w == null ? s(
      A.el = a(A.children || ""),
      R,
      q
    ) : A.el = w.el;
  }, _ = (w, A, R, q) => {
    [w.el, w.anchor] = g(
      w.children,
      A,
      R,
      q,
      w.el,
      w.anchor
    );
  }, v = (w, A, R, q) => {
    if (A.children !== w.children) {
      const j = p(w.anchor);
      E(w), [A.el, A.anchor] = g(
        A.children,
        R,
        j,
        q
      );
    } else
      A.el = w.el, A.anchor = w.anchor;
  }, $ = ({ el: w, anchor: A }, R, q) => {
    let j;
    for (; w && w !== A; )
      j = p(w), s(w, R, q), w = j;
    s(A, R, q);
  }, E = ({ el: w, anchor: A }) => {
    let R;
    for (; w && w !== A; )
      R = p(w), o(w), w = R;
    o(A);
  }, M = (w, A, R, q, j, U, Z, G, K) => {
    A.type === "svg" ? Z = "svg" : A.type === "math" && (Z = "mathml"), w == null ? C(
      A,
      R,
      q,
      j,
      U,
      Z,
      G,
      K
    ) : D(
      w,
      A,
      j,
      U,
      Z,
      G,
      K
    );
  }, C = (w, A, R, q, j, U, Z, G) => {
    let K, z;
    const { props: ie, shapeFlag: ee, transition: se, dirs: ae } = w;
    if (K = w.el = i(
      w.type,
      U,
      ie && ie.is,
      ie
    ), ee & 8 ? d(K, w.children) : ee & 16 && b(
      w.children,
      K,
      null,
      q,
      j,
      hi(w, U),
      Z,
      G
    ), ae && tn(w, null, q, "created"), T(K, w, w.scopeId, Z, q), ie) {
      for (const Oe in ie)
        Oe !== "value" && !An(Oe) && r(K, Oe, null, ie[Oe], U, q);
      "value" in ie && r(K, "value", null, ie.value, U), (z = ie.onVnodeBeforeMount) && _t(z, q, w);
    }
    O.NODE_ENV !== "production" && (os(K, "__vnode", w, !0), os(K, "__vueParentComponent", q, !0)), ae && tn(w, null, q, "beforeMount");
    const be = Qu(j, se);
    be && se.beforeEnter(K), s(K, A, R), ((z = ie && ie.onVnodeMounted) || be || ae) && ze(() => {
      z && _t(z, q, w), be && se.enter(K), ae && tn(w, null, q, "mounted");
    }, j);
  }, T = (w, A, R, q, j) => {
    if (R && m(w, R), q)
      for (let U = 0; U < q.length; U++)
        m(w, q[U]);
    if (j) {
      let U = j.subTree;
      if (O.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && (U = Kr(U.children) || U), A === U || gr(U.type) && (U.ssContent === A || U.ssFallback === A)) {
        const Z = j.vnode;
        T(
          w,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          j.parent
        );
      }
    }
  }, b = (w, A, R, q, j, U, Z, G, K = 0) => {
    for (let z = K; z < w.length; z++) {
      const ie = w[z] = G ? On(w[z]) : mt(w[z]);
      h(
        null,
        ie,
        A,
        R,
        q,
        j,
        U,
        Z,
        G
      );
    }
  }, D = (w, A, R, q, j, U, Z) => {
    const G = A.el = w.el;
    O.NODE_ENV !== "production" && (G.__vnode = A);
    let { patchFlag: K, dynamicChildren: z, dirs: ie } = A;
    K |= w.patchFlag & 16;
    const ee = w.props || pe, se = A.props || pe;
    let ae;
    if (R && Un(R, !1), (ae = se.onVnodeBeforeUpdate) && _t(ae, R, A, w), ie && tn(A, w, R, "beforeUpdate"), R && Un(R, !0), O.NODE_ENV !== "production" && Ut && (K = 0, Z = !1, z = null), (ee.innerHTML && se.innerHTML == null || ee.textContent && se.textContent == null) && d(G, ""), z ? (N(
      w.dynamicChildren,
      z,
      G,
      R,
      q,
      hi(A, j),
      U
    ), O.NODE_ENV !== "production" && ro(w, A)) : Z || _e(
      w,
      A,
      G,
      null,
      R,
      q,
      hi(A, j),
      U,
      !1
    ), K > 0) {
      if (K & 16)
        y(G, ee, se, R, j);
      else if (K & 2 && ee.class !== se.class && r(G, "class", null, se.class, j), K & 4 && r(G, "style", ee.style, se.style, j), K & 8) {
        const be = A.dynamicProps;
        for (let Oe = 0; Oe < be.length; Oe++) {
          const Ne = be[Oe], vt = ee[Ne], et = se[Ne];
          (et !== vt || Ne === "value") && r(G, Ne, vt, et, j, R);
        }
      }
      K & 1 && w.children !== A.children && d(G, A.children);
    } else !Z && z == null && y(G, ee, se, R, j);
    ((ae = se.onVnodeUpdated) || ie) && ze(() => {
      ae && _t(ae, R, A, w), ie && tn(A, w, R, "updated");
    }, q);
  }, N = (w, A, R, q, j, U, Z) => {
    for (let G = 0; G < A.length; G++) {
      const K = w[G], z = A[G], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(K, z) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? u(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      h(
        K,
        z,
        ie,
        null,
        q,
        j,
        U,
        Z,
        !0
      );
    }
  }, y = (w, A, R, q, j) => {
    if (A !== R) {
      if (A !== pe)
        for (const U in A)
          !An(U) && !(U in R) && r(
            w,
            U,
            A[U],
            null,
            j,
            q
          );
      for (const U in R) {
        if (An(U)) continue;
        const Z = R[U], G = A[U];
        Z !== G && U !== "value" && r(w, U, G, Z, j, q);
      }
      "value" in R && r(w, "value", A.value, R.value, j);
    }
  }, V = (w, A, R, q, j, U, Z, G, K) => {
    const z = A.el = w ? w.el : l(""), ie = A.anchor = w ? w.anchor : l("");
    let { patchFlag: ee, dynamicChildren: se, slotScopeIds: ae } = A;
    O.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ut || ee & 2048) && (ee = 0, K = !1, se = null), ae && (G = G ? G.concat(ae) : ae), w == null ? (s(z, R, q), s(ie, R, q), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      R,
      ie,
      j,
      U,
      Z,
      G,
      K
    )) : ee > 0 && ee & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren ? (N(
      w.dynamicChildren,
      se,
      R,
      j,
      U,
      Z,
      G
    ), O.NODE_ENV !== "production" ? ro(w, A) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (A.key != null || j && A === j.subTree) && ro(
        w,
        A,
        !0
        /* shallow */
      )
    )) : _e(
      w,
      A,
      R,
      ie,
      j,
      U,
      Z,
      G,
      K
    );
  }, P = (w, A, R, q, j, U, Z, G, K) => {
    A.slotScopeIds = G, w == null ? A.shapeFlag & 512 ? j.ctx.activate(
      A,
      R,
      q,
      Z,
      K
    ) : B(
      A,
      R,
      q,
      j,
      U,
      Z,
      K
    ) : J(w, A, K);
  }, B = (w, A, R, q, j, U, Z) => {
    const G = w.component = gd(
      w,
      q,
      j
    );
    if (O.NODE_ENV !== "production" && G.type.__hmrId && oh(G), O.NODE_ENV !== "production" && (_s(w), cn(G, "mount")), Bs(w) && (G.ctx.renderer = hs), O.NODE_ENV !== "production" && cn(G, "init"), yd(G, !1, Z), O.NODE_ENV !== "production" && un(G, "init"), O.NODE_ENV !== "production" && Ut && (w.el = null), G.asyncDep) {
      if (j && j.registerDep(G, ne, Z), !w.el) {
        const K = G.subTree = ue(Ve);
        k(null, K, A, R), w.placeholder = K.el;
      }
    } else
      ne(
        G,
        w,
        A,
        R,
        j,
        U,
        Z
      );
    O.NODE_ENV !== "production" && (Es(), un(G, "mount"));
  }, J = (w, A, R) => {
    const q = A.component = w.component;
    if (Fm(w, A, R))
      if (q.asyncDep && !q.asyncResolved) {
        O.NODE_ENV !== "production" && _s(A), te(q, A, R), O.NODE_ENV !== "production" && Es();
        return;
      } else
        q.next = A, q.update();
    else
      A.el = w.el, q.vnode = A;
  }, ne = (w, A, R, q, j, U, Z) => {
    const G = () => {
      if (w.isMounted) {
        let { next: ee, bu: se, u: ae, parent: be, vnode: Oe } = w;
        {
          const Nt = Zu(w);
          if (Nt) {
            ee && (ee.el = Oe.el, te(w, ee, Z)), Nt.asyncDep.then(() => {
              w.isUnmounted || G();
            });
            return;
          }
        }
        let Ne = ee, vt;
        O.NODE_ENV !== "production" && _s(ee || w.vnode), Un(w, !1), ee ? (ee.el = Oe.el, te(w, ee, Z)) : ee = Oe, se && Tn(se), (vt = ee.props && ee.props.onVnodeBeforeUpdate) && _t(vt, be, ee, Oe), Un(w, !0), O.NODE_ENV !== "production" && cn(w, "render");
        const et = Yo(w);
        O.NODE_ENV !== "production" && un(w, "render");
        const Lt = w.subTree;
        w.subTree = et, O.NODE_ENV !== "production" && cn(w, "patch"), h(
          Lt,
          et,
          // parent may have changed if it's in a teleport
          u(Lt.el),
          // anchor may have changed if it's in a fragment
          Io(Lt),
          w,
          j,
          U
        ), O.NODE_ENV !== "production" && un(w, "patch"), ee.el = et.el, Ne === null && Gr(w, et.el), ae && ze(ae, j), (vt = ee.props && ee.props.onVnodeUpdated) && ze(
          () => _t(vt, be, ee, Oe),
          j
        ), O.NODE_ENV !== "production" && mu(w), O.NODE_ENV !== "production" && Es();
      } else {
        let ee;
        const { el: se, props: ae } = A, { bm: be, m: Oe, parent: Ne, root: vt, type: et } = w, Lt = In(A);
        if (Un(w, !1), be && Tn(be), !Lt && (ee = ae && ae.onVnodeBeforeMount) && _t(ee, Ne, A), Un(w, !0), se && si) {
          const Nt = () => {
            O.NODE_ENV !== "production" && cn(w, "render"), w.subTree = Yo(w), O.NODE_ENV !== "production" && un(w, "render"), O.NODE_ENV !== "production" && cn(w, "hydrate"), si(
              se,
              w.subTree,
              w,
              j,
              null
            ), O.NODE_ENV !== "production" && un(w, "hydrate");
          };
          Lt && et.__asyncHydrate ? et.__asyncHydrate(
            se,
            w,
            Nt
          ) : Nt();
        } else {
          vt.ce && // @ts-expect-error _def is private
          vt.ce._def.shadowRoot !== !1 && vt.ce._injectChildStyle(et), O.NODE_ENV !== "production" && cn(w, "render");
          const Nt = w.subTree = Yo(w);
          O.NODE_ENV !== "production" && un(w, "render"), O.NODE_ENV !== "production" && cn(w, "patch"), h(
            null,
            Nt,
            R,
            q,
            w,
            j,
            U
          ), O.NODE_ENV !== "production" && un(w, "patch"), A.el = Nt.el;
        }
        if (Oe && ze(Oe, j), !Lt && (ee = ae && ae.onVnodeMounted)) {
          const Nt = A;
          ze(
            () => _t(ee, Ne, Nt),
            j
          );
        }
        (A.shapeFlag & 256 || Ne && In(Ne.vnode) && Ne.vnode.shapeFlag & 256) && w.a && ze(w.a, j), w.isMounted = !0, O.NODE_ENV !== "production" && ki(w), A = R = q = null;
      }
    };
    w.scope.on();
    const K = w.effect = new fo(G);
    w.scope.off();
    const z = w.update = K.run.bind(K), ie = w.job = K.runIfDirty.bind(K);
    ie.i = w, ie.id = w.uid, K.scheduler = () => jr(ie), Un(w, !0), O.NODE_ENV !== "production" && (K.onTrack = w.rtc ? (ee) => Tn(w.rtc, ee) : void 0, K.onTrigger = w.rtg ? (ee) => Tn(w.rtg, ee) : void 0), z();
  }, te = (w, A, R) => {
    A.component = w;
    const q = w.vnode.props;
    w.vnode = A, w.next = null, bm(w, A.props, q, R), $m(w, A.children, R), Gt(), ha(w), Yt();
  }, _e = (w, A, R, q, j, U, Z, G, K = !1) => {
    const z = w && w.children, ie = w ? w.shapeFlag : 0, ee = A.children, { patchFlag: se, shapeFlag: ae } = A;
    if (se > 0) {
      if (se & 128) {
        Tt(
          z,
          ee,
          R,
          q,
          j,
          U,
          Z,
          G,
          K
        );
        return;
      } else if (se & 256) {
        gt(
          z,
          ee,
          R,
          q,
          j,
          U,
          Z,
          G,
          K
        );
        return;
      }
    }
    ae & 8 ? (ie & 16 && Hs(z, j, U), ee !== z && d(R, ee)) : ie & 16 ? ae & 16 ? Tt(
      z,
      ee,
      R,
      q,
      j,
      U,
      Z,
      G,
      K
    ) : Hs(z, j, U, !0) : (ie & 8 && d(R, ""), ae & 16 && b(
      ee,
      R,
      q,
      j,
      U,
      Z,
      G,
      K
    ));
  }, gt = (w, A, R, q, j, U, Z, G, K) => {
    w = w || bs, A = A || bs;
    const z = w.length, ie = A.length, ee = Math.min(z, ie);
    let se;
    for (se = 0; se < ee; se++) {
      const ae = A[se] = K ? On(A[se]) : mt(A[se]);
      h(
        w[se],
        ae,
        R,
        null,
        j,
        U,
        Z,
        G,
        K
      );
    }
    z > ie ? Hs(
      w,
      j,
      U,
      !0,
      !1,
      ee
    ) : b(
      A,
      R,
      q,
      j,
      U,
      Z,
      G,
      K,
      ee
    );
  }, Tt = (w, A, R, q, j, U, Z, G, K) => {
    let z = 0;
    const ie = A.length;
    let ee = w.length - 1, se = ie - 1;
    for (; z <= ee && z <= se; ) {
      const ae = w[z], be = A[z] = K ? On(A[z]) : mt(A[z]);
      if (jt(ae, be))
        h(
          ae,
          be,
          R,
          null,
          j,
          U,
          Z,
          G,
          K
        );
      else
        break;
      z++;
    }
    for (; z <= ee && z <= se; ) {
      const ae = w[ee], be = A[se] = K ? On(A[se]) : mt(A[se]);
      if (jt(ae, be))
        h(
          ae,
          be,
          R,
          null,
          j,
          U,
          Z,
          G,
          K
        );
      else
        break;
      ee--, se--;
    }
    if (z > ee) {
      if (z <= se) {
        const ae = se + 1, be = ae < ie ? A[ae].el : q;
        for (; z <= se; )
          h(
            null,
            A[z] = K ? On(A[z]) : mt(A[z]),
            R,
            be,
            j,
            U,
            Z,
            G,
            K
          ), z++;
      }
    } else if (z > se)
      for (; z <= ee; )
        En(w[z], j, U, !0), z++;
    else {
      const ae = z, be = z, Oe = /* @__PURE__ */ new Map();
      for (z = be; z <= se; z++) {
        const dt = A[z] = K ? On(A[z]) : mt(A[z]);
        dt.key != null && (O.NODE_ENV !== "production" && Oe.has(dt.key) && L(
          "Duplicate keys found during update:",
          JSON.stringify(dt.key),
          "Make sure keys are unique."
        ), Oe.set(dt.key, z));
      }
      let Ne, vt = 0;
      const et = se - be + 1;
      let Lt = !1, Nt = 0;
      const Us = new Array(et);
      for (z = 0; z < et; z++) Us[z] = 0;
      for (z = ae; z <= ee; z++) {
        const dt = w[z];
        if (vt >= et) {
          En(dt, j, U, !0);
          continue;
        }
        let Xt;
        if (dt.key != null)
          Xt = Oe.get(dt.key);
        else
          for (Ne = be; Ne <= se; Ne++)
            if (Us[Ne - be] === 0 && jt(dt, A[Ne])) {
              Xt = Ne;
              break;
            }
        Xt === void 0 ? En(dt, j, U, !0) : (Us[Xt - be] = z + 1, Xt >= Nt ? Nt = Xt : Lt = !0, h(
          dt,
          A[Xt],
          R,
          null,
          j,
          U,
          Z,
          G,
          K
        ), vt++);
      }
      const oa = Lt ? Dm(Us) : bs;
      for (Ne = oa.length - 1, z = et - 1; z >= 0; z--) {
        const dt = be + z, Xt = A[dt], ra = A[dt + 1], ia = dt + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          ra.el || ra.placeholder
        ) : q;
        Us[z] === 0 ? h(
          null,
          Xt,
          R,
          ia,
          j,
          U,
          Z,
          G,
          K
        ) : Lt && (Ne < 0 || z !== oa[Ne] ? Dt(Xt, R, ia, 2) : Ne--);
      }
    }
  }, Dt = (w, A, R, q, j = null) => {
    const { el: U, type: Z, transition: G, children: K, shapeFlag: z } = w;
    if (z & 6) {
      Dt(w.component.subTree, A, R, q);
      return;
    }
    if (z & 128) {
      w.suspense.move(A, R, q);
      return;
    }
    if (z & 64) {
      Z.move(w, A, R, hs);
      return;
    }
    if (Z === re) {
      s(U, A, R);
      for (let ee = 0; ee < K.length; ee++)
        Dt(K[ee], A, R, q);
      s(w.anchor, A, R);
      return;
    }
    if (Z === Mn) {
      $(w, A, R);
      return;
    }
    if (q !== 2 && z & 1 && G)
      if (q === 0)
        G.beforeEnter(U), s(U, A, R), ze(() => G.enter(U), j);
      else {
        const { leave: ee, delayLeave: se, afterLeave: ae } = G, be = () => {
          w.ctx.isUnmounted ? o(U) : s(U, A, R);
        }, Oe = () => {
          ee(U, () => {
            be(), ae && ae();
          });
        };
        se ? se(U, be, Oe) : Oe();
      }
    else
      s(U, A, R);
  }, En = (w, A, R, q = !1, j = !1) => {
    const {
      type: U,
      props: Z,
      ref: G,
      children: K,
      dynamicChildren: z,
      shapeFlag: ie,
      patchFlag: ee,
      dirs: se,
      cacheIndex: ae
    } = w;
    if (ee === -2 && (j = !1), G != null && (Gt(), xs(G, null, R, w, !0), Yt()), ae != null && (A.renderCache[ae] = void 0), ie & 256) {
      A.ctx.deactivate(w);
      return;
    }
    const be = ie & 1 && se, Oe = !In(w);
    let Ne;
    if (Oe && (Ne = Z && Z.onVnodeBeforeUnmount) && _t(Ne, A, w), ie & 6)
      Bf(w.component, R, q);
    else {
      if (ie & 128) {
        w.suspense.unmount(R, q);
        return;
      }
      be && tn(w, null, A, "beforeUnmount"), ie & 64 ? w.type.remove(
        w,
        A,
        R,
        hs,
        q
      ) : z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== re || ee > 0 && ee & 64) ? Hs(
        z,
        A,
        R,
        !1,
        !0
      ) : (U === re && ee & 384 || !j && ie & 16) && Hs(K, A, R), q && ei(w);
    }
    (Oe && (Ne = Z && Z.onVnodeUnmounted) || be) && ze(() => {
      Ne && _t(Ne, A, w), be && tn(w, null, A, "unmounted");
    }, R);
  }, ei = (w) => {
    const { type: A, el: R, anchor: q, transition: j } = w;
    if (A === re) {
      O.NODE_ENV !== "production" && w.patchFlag > 0 && w.patchFlag & 2048 && j && !j.persisted ? w.children.forEach((Z) => {
        Z.type === Ve ? o(Z.el) : ei(Z);
      }) : Ff(R, q);
      return;
    }
    if (A === Mn) {
      E(w);
      return;
    }
    const U = () => {
      o(R), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (w.shapeFlag & 1 && j && !j.persisted) {
      const { leave: Z, delayLeave: G } = j, K = () => Z(R, U);
      G ? G(w.el, U, K) : K();
    } else
      U();
  }, Ff = (w, A) => {
    let R;
    for (; w !== A; )
      R = p(w), o(w), w = R;
    o(A);
  }, Bf = (w, A, R) => {
    O.NODE_ENV !== "production" && w.type.__hmrId && rh(w);
    const {
      bum: q,
      scope: j,
      job: U,
      subTree: Z,
      um: G,
      m: K,
      a: z,
      parent: ie,
      slots: { __: ee }
    } = w;
    hr(K), hr(z), q && Tn(q), ie && Y(ee) && ee.forEach((se) => {
      ie.renderCache[se] = void 0;
    }), j.stop(), U && (U.flags |= 8, En(Z, w, A, R)), G && ze(G, A), ze(() => {
      w.isUnmounted = !0;
    }, A), A && A.pendingBranch && !A.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === A.pendingId && (A.deps--, A.deps === 0 && A.resolve()), O.NODE_ENV !== "production" && dh(w);
  }, Hs = (w, A, R, q = !1, j = !1, U = 0) => {
    for (let Z = U; Z < w.length; Z++)
      En(w[Z], A, R, q, j);
  }, Io = (w) => {
    if (w.shapeFlag & 6)
      return Io(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const A = p(w.anchor || w.el), R = A && A[yu];
    return R ? p(R) : A;
  };
  let ti = !1;
  const sa = (w, A, R) => {
    w == null ? A._vnode && En(A._vnode, null, null, !0) : h(
      A._vnode || null,
      w,
      A,
      null,
      null,
      null,
      R
    ), A._vnode = w, ti || (ti = !0, ha(), cr(), ti = !1);
  }, hs = {
    p: h,
    um: En,
    m: Dt,
    r: ei,
    mt: B,
    mc: b,
    pc: _e,
    pbc: N,
    n: Io,
    o: e
  };
  let ni, si;
  return t && ([ni, si] = t(
    hs
  )), {
    render: sa,
    hydrate: ni,
    createApp: mm(sa, ni)
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
function ro(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Y(s) && Y(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = On(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && ro(i, l)), l.type === on && (l.el = i.el), l.type === Ve && !l.el && (l.el = i.el), O.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
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
function Zu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zu(t);
}
function hr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ed = Symbol.for("v-scx"), td = () => {
  {
    const e = oo(ed);
    return e || O.NODE_ENV !== "production" && L(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Vm(e, t) {
  return $o(e, null, t);
}
function Am(e, t) {
  return $o(
    e,
    null,
    O.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function nd(e, t) {
  return $o(
    e,
    null,
    O.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Wt(e, t, n) {
  return O.NODE_ENV !== "production" && !oe(t) && L(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), $o(e, t, n);
}
function $o(e, t, n = pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  O.NODE_ENV !== "production" && !t && (s !== void 0 && L(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && L(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && L(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  O.NODE_ENV !== "production" && (l.onWarn = L);
  const a = t && s || !t && r !== "post";
  let c;
  if ($s) {
    if (r === "sync") {
      const m = td();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = De, m.resume = De, m.pause = De, m;
    }
  }
  const d = Ge;
  l.call = (m, g, h) => Pt(m, d, g, h);
  let u = !1;
  r === "post" ? l.scheduler = (m) => {
    ze(m, d && d.suspense);
  } : r !== "sync" && (u = !0, l.scheduler = (m, g) => {
    g ? m() : jr(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const p = Yp(e, t, l);
  return $s && (c ? c.push(p) : a && p()), p;
}
function Im(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? sd(s, e) : () => s[e] : e.bind(s, s);
  let r;
  oe(t) ? r = t : (r = t.handler, n = t);
  const i = as(this), l = $o(o, r.bind(s), n);
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
function Mm(e, t, n = pe) {
  const s = ut();
  if (O.NODE_ENV !== "production" && !s)
    return L("useModel() called without active instance."), W();
  const o = Ce(t);
  if (O.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return L(`useModel() called with prop "${t}" which is not declared.`), W();
  const r = st(t), i = od(e, o), l = lu((a, c) => {
    let d, u = pe, p;
    return nd(() => {
      const m = e[o];
      pt(d, m) && (d = m, c());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(m) {
        const g = n.set ? n.set(m) : m;
        if (!pt(g, d) && !(u !== pe && pt(m, u)))
          return;
        const h = s.vnode.props;
        h && // check if parent has passed v-model
        (t in h || o in h || r in h) && (`onUpdate:${t}` in h || `onUpdate:${o}` in h || `onUpdate:${r}` in h) || (d = m, c()), s.emit(`update:${t}`, g), pt(m, g) && pt(m, u) && !pt(g, p) && c(), u = m, p = g;
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
const od = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${st(t)}Modifiers`];
function Pm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (O.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(nn(Ce(t)) in u)) && L(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nn(Ce(t))}" prop.`
        );
      else {
        const p = d[t];
        oe(p) && (p(...n) || L(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && od(s, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => le(d) ? d.trim() : d)), i.number && (o = n.map(sr))), O.NODE_ENV !== "production" && hh(e, t, o), O.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[nn(d)] && L(
      `Event "${d}" is emitted in component ${Yr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${st(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = nn(t)] || // also try camelCase event handler (#2249)
  s[l = nn(Ce(t))];
  !a && r && (a = s[l = nn(st(t))]), a && Pt(
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
    e.emitted[l] = !0, Pt(
      c,
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
    const a = (c) => {
      const d = rd(c, t, !0);
      d && (l = !0, fe(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (ge(e) && s.set(e, null), null) : (Y(r) ? r.forEach((a) => i[a] = null) : fe(i, r), ge(e) && s.set(e, i), i);
}
function Wr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, st(t)) || ve(e, t));
}
let Ai = !1;
function mr() {
  Ai = !0;
}
function Yo(e) {
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
    inheritAttrs: h
  } = e, I = go(e);
  let k, _;
  O.NODE_ENV !== "production" && (Ai = !1);
  try {
    if (n.shapeFlag & 4) {
      const E = o || s, M = O.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(E, {
        get(C, T, b) {
          return L(
            `Property '${String(
              T
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(C, T, b);
        }
      }) : E;
      k = mt(
        c.call(
          M,
          E,
          d,
          O.NODE_ENV !== "production" ? Ht(u) : u,
          m,
          p,
          g
        )
      ), _ = l;
    } else {
      const E = t;
      O.NODE_ENV !== "production" && l === u && mr(), k = mt(
        E.length > 1 ? E(
          O.NODE_ENV !== "production" ? Ht(u) : u,
          O.NODE_ENV !== "production" ? {
            get attrs() {
              return mr(), Ht(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : E(
          O.NODE_ENV !== "production" ? Ht(u) : u,
          null
        )
      ), _ = t.props ? l : Rm(l);
    }
  } catch (E) {
    io.length = 0, Bn(E, e, 1), k = ue(Ve);
  }
  let v = k, $;
  if (O.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && ([v, $] = id(k)), _ && h !== !1) {
    const E = Object.keys(_), { shapeFlag: M } = v;
    if (E.length) {
      if (M & 7)
        r && E.some(nr) && (_ = Lm(
          _,
          r
        )), v = Rt(v, _, !1, !0);
      else if (O.NODE_ENV !== "production" && !Ai && v.type !== Ve) {
        const C = Object.keys(l), T = [], b = [];
        for (let D = 0, N = C.length; D < N; D++) {
          const y = C[D];
          vn(y) ? nr(y) || T.push(y[2].toLowerCase() + y.slice(3)) : b.push(y);
        }
        b.length && L(
          `Extraneous non-props attributes (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), T.length && L(
          `Extraneous non-emits event listeners (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (O.NODE_ENV !== "production" && !Da(v) && L(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), v = Rt(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs), n.transition && (O.NODE_ENV !== "production" && !Da(v) && L(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(v, n.transition)), O.NODE_ENV !== "production" && $ ? $(v) : k = v, go(I), k;
}
const id = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Kr(t, !1);
  if (s) {
    if (O.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return id(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [mt(s), i];
};
function Kr(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (ln(o)) {
      if (o.type !== Ve || o.children === "v-if") {
        if (n)
          return;
        if (n = o, O.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Kr(n.children);
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
    (!nr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Da = (e) => e.shapeFlag & 7 || e.type === Ve;
function Fm(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (O.NODE_ENV !== "production" && (o || l) && Ut || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Va(s, i, c) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const p = d[u];
        if (i[p] !== s[p] && !Wr(c, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Va(s, i, c) : !0 : !!i;
  return !1;
}
function Va(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Wr(n, r))
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
const gr = (e) => e.__isSuspense;
let Ii = 0;
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
    o: { createElement: d }
  } = a, u = d("div"), p = e.suspense = ld(
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
function Um(e, t, n, s, o, r, i, l, { p: a, um: c, o: { createElement: d } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, m = t.ssFallback, { activeBranch: g, pendingBranch: h, isInFallback: I, isHydrating: k } = u;
  if (h)
    u.pendingBranch = p, jt(p, h) ? (a(
      h,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      r,
      i,
      l
    ), u.deps <= 0 ? u.resolve() : I && (k || (a(
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
    ), Ns(u, m)))) : (u.pendingId = Ii++, k ? (u.isHydrating = !1, u.activeBranch = h) : c(h, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = d("div"), I ? (a(
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
    ), Ns(u, m))) : g && jt(p, g) ? (a(
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
  else if (g && jt(p, g))
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
    ), Ns(u, p);
  else if (yo(t, "onPending"), u.pendingBranch = p, p.shapeFlag & 512 ? u.pendingId = p.component.suspenseId : u.pendingId = Ii++, a(
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
    const { timeout: _, pendingId: v } = u;
    _ > 0 ? setTimeout(() => {
      u.pendingId === v && u.fallback(m);
    }, _) : _ === 0 && u.fallback(m);
  }
}
let Aa = !1;
function ld(e, t, n, s, o, r, i, l, a, c, d = !1) {
  O.NODE_ENV !== "production" && !Aa && (Aa = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: m,
    n: g,
    o: { parentNode: h, remove: I }
  } = c;
  let k;
  const _ = Wm(e);
  _ && t && t.pendingBranch && (k = t.pendingId, t.deps++);
  const v = e.props ? or(e.props.timeout) : void 0;
  O.NODE_ENV !== "production" && hl(v, "Suspense timeout");
  const $ = r, E = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Ii++,
    timeout: typeof v == "number" ? v : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(M = !1, C = !1) {
      if (O.NODE_ENV !== "production") {
        if (!M && !E.pendingBranch)
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
        pendingBranch: D,
        pendingId: N,
        effects: y,
        parentComponent: V,
        container: P
      } = E;
      let B = !1;
      E.isHydrating ? E.isHydrating = !1 : M || (B = b && D.transition && D.transition.mode === "out-in", B && (b.transition.afterLeave = () => {
        N === E.pendingId && (p(
          D,
          P,
          r === $ ? g(b) : r,
          0
        ), Cs(y));
      }), b && (h(b.el) === P && (r = g(b)), m(b, V, E, !0)), B || p(D, P, r, 0)), Ns(E, D), E.pendingBranch = null, E.isInFallback = !1;
      let J = E.parent, ne = !1;
      for (; J; ) {
        if (J.pendingBranch) {
          J.effects.push(...y), ne = !0;
          break;
        }
        J = J.parent;
      }
      !ne && !B && Cs(y), E.effects = [], _ && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !C && t.resolve()), yo(T, "onResolve");
    },
    fallback(M) {
      if (!E.pendingBranch)
        return;
      const { vnode: C, activeBranch: T, parentComponent: b, container: D, namespace: N } = E;
      yo(C, "onFallback");
      const y = g(T), V = () => {
        E.isInFallback && (u(
          null,
          M,
          D,
          y,
          b,
          null,
          // fallback tree will not have suspense context
          N,
          l,
          a
        ), Ns(E, M));
      }, P = M.transition && M.transition.mode === "out-in";
      P && (T.transition.afterLeave = V), E.isInFallback = !0, m(
        T,
        b,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), P || V();
    },
    move(M, C, T) {
      E.activeBranch && p(E.activeBranch, M, C, T), E.container = M;
    },
    next() {
      return E.activeBranch && g(E.activeBranch);
    },
    registerDep(M, C, T) {
      const b = !!E.pendingBranch;
      b && E.deps++;
      const D = M.vnode.el;
      M.asyncDep.catch((N) => {
        Bn(N, M, 0);
      }).then((N) => {
        if (M.isUnmounted || E.isUnmounted || E.pendingId !== M.suspenseId)
          return;
        M.asyncResolved = !0;
        const { vnode: y } = M;
        O.NODE_ENV !== "production" && _s(y), Bi(M, N, !1), D && (y.el = D);
        const V = !D && M.subTree.el;
        C(
          M,
          y,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          h(D || M.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          D ? null : g(M.subTree),
          E,
          i,
          T
        ), V && I(V), Gr(M, y.el), O.NODE_ENV !== "production" && Es(), b && --E.deps === 0 && E.resolve();
      });
    },
    unmount(M, C) {
      E.isUnmounted = !0, E.activeBranch && m(
        E.activeBranch,
        n,
        M,
        C
      ), E.pendingBranch && m(
        E.pendingBranch,
        n,
        M,
        C
      );
    }
  };
  return E;
}
function qm(e, t, n, s, o, r, i, l, a) {
  const c = t.suspense = ld(
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
function zm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Ia(
    s ? n.default : n
  ), e.ssFallback = s ? Ia(n.fallback) : ue(Ve);
}
function Ia(e) {
  let t;
  if (oe(e)) {
    const n = is && e._c;
    n && (e._d = !1, x()), e = e(), n && (e._d = !0, t = rt, cd());
  }
  if (Y(e)) {
    const n = Kr(e);
    O.NODE_ENV !== "production" && !n && e.filter((s) => s !== xl).length > 0 && L("<Suspense> slots expect a single root node."), e = n;
  }
  return e = mt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function ad(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Cs(e);
}
function Ns(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, Gr(s, o));
}
function Wm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const re = Symbol.for("v-fgt"), on = Symbol.for("v-txt"), Ve = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), io = [];
let rt = null;
function x(e = !1) {
  io.push(rt = e ? null : []);
}
function cd() {
  io.pop(), rt = io[io.length - 1] || null;
}
let is = 1;
function Mi(e, t = !1) {
  is += e, e < 0 && rt && t && (rt.hasOnce = !0);
}
function ud(e) {
  return e.dynamicChildren = is > 0 ? rt || bs : null, cd(), is > 0 && rt && rt.push(e), e;
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
function ct(e, t, n, s, o) {
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
  if (O.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Ko.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Pi;
function Km(e) {
  Pi = e;
}
const Gm = (...e) => fd(
  ...Pi ? Pi(e, Be) : e
), dd = ({ key: e }) => e ?? null, Jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || Ie(e) || oe(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, o = null, r = e === re ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dd(t),
    ref: t && Jo(t),
    scopeId: Hr,
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
  return l ? (Dl(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), O.NODE_ENV !== "production" && a.key !== a.key && L("VNode created with invalid key (NaN). VNode type:", a.type), is > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  rt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && rt.push(a), a;
}
const ue = O.NODE_ENV !== "production" ? Gm : fd;
function fd(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === xl) && (O.NODE_ENV !== "production" && !e && L(`Invalid vnode type when creating vnode: ${e}.`), e = Ve), ln(e)) {
    const l = Rt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Dl(l, n), is > 0 && !r && rt && (l.shapeFlag & 6 ? rt[rt.indexOf(e)] = l : rt.push(l)), l.patchFlag = -2, l;
  }
  if (wd(e) && (e = e.__vccOpts), t) {
    t = pd(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = Ee(l)), ge(a) && (ks(a) && !Y(a) && (a = fe({}, a)), t.style = qe(a));
  }
  const i = le(e) ? 1 : gr(e) ? 128 : bu(e) ? 64 : ge(e) ? 4 : oe(e) ? 2 : 0;
  return O.NODE_ENV !== "production" && i & 4 && ks(e) && (e = ce(e), L(
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
  return e ? ks(e) || Uu(e) ? fe({}, e) : e : null;
}
function Rt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, c = t ? md(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && dd(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Y(r) ? r.concat(Jo(t)) : [r, Jo(t)] : Jo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: O.NODE_ENV !== "production" && i === -1 && Y(l) ? l.map(hd) : l,
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
    d,
    a.clone(d)
  ), d;
}
function hd(e) {
  const t = Rt(e);
  return Y(e.children) && (t.children = e.children.map(hd)), t;
}
function je(e = " ", t = 0) {
  return ue(on, null, e, t);
}
function ls(e, t) {
  const n = ue(Mn, null, e);
  return n.staticCount = t, n;
}
function F(e = "", t = !1) {
  return t ? (x(), ct(Ve, null, e)) : ue(Ve, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? ue(Ve) : Y(e) ? ue(
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
        t.style = qe([t.style, s.style]);
      else if (vn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(Y(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function _t(e, t, n, s = null) {
  Pt(e, t, 7, [
    n,
    s
  ]);
}
const Ym = Fu();
let Jm = 0;
function gd(e, t, n) {
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
  return O.NODE_ENV !== "production" ? r.ctx = Wh(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Pm.bind(null, r), e.ce && e.ce(r), r;
}
let Ge = null;
const ut = () => Ge || Be;
let vr, Ri;
{
  const e = ko(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  vr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ge = n
  ), Ri = t(
    "__VUE_SSR_SETTERS__",
    (n) => $s = n
  );
}
const as = (e) => {
  const t = Ge;
  return vr(e), e.scope.on(), () => {
    e.scope.off(), vr(t);
  };
}, Li = () => {
  Ge && Ge.scope.off(), vr(null);
}, Xm = /* @__PURE__ */ Ye("slot,component");
function Fi(e, { isNativeTag: t }) {
  (Xm(e) || t(e)) && L(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vd(e) {
  return e.vnode.shapeFlag & 4;
}
let $s = !1;
function yd(e, t = !1, n = !1) {
  t && Ri(t);
  const { props: s, children: o } = e.vnode, r = vd(e);
  vm(e, s, r, t), Om(e, o, n || t);
  const i = r ? Qm(e, t) : void 0;
  return t && Ri(!1), i;
}
function Qm(e, t) {
  var n;
  const s = e.type;
  if (O.NODE_ENV !== "production") {
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
    s.compilerOptions && Vl() && L(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, so), O.NODE_ENV !== "production" && Kh(e);
  const { setup: o } = s;
  if (o) {
    Gt();
    const r = e.setupContext = o.length > 1 ? Ed(e) : null, i = as(e), l = ds(
      o,
      e,
      0,
      [
        O.NODE_ENV !== "production" ? Ht(e.props) : e.props,
        r
      ]
    ), a = Dr(l);
    if (Yt(), i(), (a || e.sp) && !In(e) && El(e), a) {
      if (l.then(Li, Li), t)
        return l.then((c) => {
          Bi(e, c, t);
        }).catch((c) => {
          Bn(c, e, 0);
        });
      if (e.asyncDep = l, O.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        L(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Bi(e, l, t);
  } else
    _d(e, t);
}
function Bi(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? (O.NODE_ENV !== "production" && ln(t) && L(
    "setup() should not return VNodes directly - return a render function instead."
  ), O.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = pl(t), O.NODE_ENV !== "production" && Gh(e)) : O.NODE_ENV !== "production" && t !== void 0 && L(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _d(e, n);
}
let lo, ji;
function bd(e) {
  lo = e, ji = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, zh));
  };
}
const Vl = () => !lo;
function _d(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && lo && !s.render) {
      const o = s.template || Ol(e).template;
      if (o) {
        O.NODE_ENV !== "production" && cn(e, "compile");
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
        s.render = lo(o, c), O.NODE_ENV !== "production" && un(e, "compile");
      }
    }
    e.render = s.render || De, ji && ji(e);
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
  O.NODE_ENV !== "production" && !s.render && e.render === De && !t && (!lo && s.template ? L(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : L("Component is missing template or render function: ", s));
}
const Ma = O.NODE_ENV !== "production" ? {
  get(e, t) {
    return mr(), We(e, "get", ""), e[t];
  },
  set() {
    return L("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return L("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return We(e, "get", ""), e[t];
  }
};
function Zm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return We(e, "get", "$slots"), t[n];
    }
  });
}
function Ed(e) {
  const t = (n) => {
    if (O.NODE_ENV !== "production" && (e.exposed && L("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Y(n) ? s = "array" : Ie(n) && (s = "ref")), s !== "object" && L(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (O.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ma));
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
      attrs: new Proxy(e.attrs, Ma),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function To(e) {
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
const e0 = /(?:^|[-_])(\w)/g, t0 = (e) => e.replace(e0, (t) => t.toUpperCase()).replace(/[-_]/g, "");
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
  return s ? t0(s) : n ? "App" : "Anonymous";
}
function wd(e) {
  return oe(e) && "__vccOpts" in e;
}
const X = (e, t) => {
  const n = zp(e, t, $s);
  if (O.NODE_ENV !== "production") {
    const s = ut();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function en(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ge(t) && !Y(t) ? ln(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ln(n) && (n = [n]), ue(e, t, n));
}
function xd() {
  if (O.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!ge(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Ie(u)) {
        Gt();
        const p = u.value;
        return Yt(), [
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
            ["span", e, it(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Jt(u) ? " (readonly)" : ""}`
          ];
        if (Jt(u))
          return [
            "div",
            {},
            ["span", e, it(u) ? "ShallowReadonly" : "Readonly"],
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : ge(u) ? ["object", { object: p ? ce(u) : u }] : ["span", n, String(u)];
  }
  function a(u, p) {
    const m = u.type;
    if (oe(m))
      return;
    const g = {};
    for (const h in u.ctx)
      c(m, h, p) && (g[h] = u.ctx[h]);
    return g;
  }
  function c(u, p, m) {
    const g = u[m];
    if (Y(g) && g.includes(p) || ge(g) && p in g || u.extends && c(u.extends, p, m) || u.mixins && u.mixins.some((h) => c(h, p, m)))
      return !0;
  }
  function d(u) {
    return it(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function n0(e, t, n, s) {
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
    if (pt(n[s], t[s]))
      return !1;
  return is > 0 && rt && rt.push(e), !0;
}
const Hi = "3.5.18", Me = O.NODE_ENV !== "production" ? L : De, s0 = Br, o0 = Bt, r0 = gl, i0 = {
  createComponentInstance: gd,
  setupComponent: yd,
  renderComponentRoot: Yo,
  setCurrentRenderingInstance: go,
  isVNode: ln,
  normalizeVNode: mt,
  getComponentPublicInstance: To,
  ensureValidVNode: kl,
  pushWarningContext: _s,
  popWarningContext: Es
}, l0 = i0, a0 = null, c0 = null, u0 = null;
var ke = {};
let Ui;
const Pa = typeof window < "u" && window.trustedTypes;
if (Pa)
  try {
    Ui = /* @__PURE__ */ Pa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ke.NODE_ENV !== "production" && Me(`Error creating trusted types policy: ${e}`);
  }
const Sd = Ui ? (e) => Ui.createHTML(e) : (e) => e, d0 = "http://www.w3.org/2000/svg", f0 = "http://www.w3.org/1998/Math/MathML", fn = typeof document < "u" ? document : null, Ra = fn && /* @__PURE__ */ fn.createElement("template"), p0 = {
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
), h0 = (e) => (e.displayName = "Transition", e.props = Cd, e), ot = /* @__PURE__ */ h0(
  (e, { slots: t }) => en(Nu, Od(e), t)
), qn = (e, t = []) => {
  Y(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, La = (e) => e ? Y(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Od(e) {
  const t = {};
  for (const y in e)
    y in kd || (t[y] = e[y]);
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
  } = e, g = m0(o), h = g && g[0], I = g && g[1], {
    onBeforeEnter: k,
    onEnter: _,
    onEnterCancelled: v,
    onLeave: $,
    onLeaveCancelled: E,
    onBeforeAppear: M = k,
    onAppear: C = _,
    onAppearCancelled: T = v
  } = t, b = (y, V, P, B) => {
    y._enterCancelled = B, Nn(y, V ? d : l), Nn(y, V ? c : i), P && P();
  }, D = (y, V) => {
    y._isLeaving = !1, Nn(y, u), Nn(y, m), Nn(y, p), V && V();
  }, N = (y) => (V, P) => {
    const B = y ? C : _, J = () => b(V, y, P);
    qn(B, [V, J]), Fa(() => {
      Nn(V, y ? a : r), Qt(V, y ? d : l), La(B) || Ba(V, s, h, J);
    });
  };
  return fe(t, {
    onBeforeEnter(y) {
      qn(k, [y]), Qt(y, r), Qt(y, i);
    },
    onBeforeAppear(y) {
      qn(M, [y]), Qt(y, a), Qt(y, c);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(y, V) {
      y._isLeaving = !0;
      const P = () => D(y, V);
      Qt(y, u), y._enterCancelled ? (Qt(y, p), qi()) : (qi(), Qt(y, p)), Fa(() => {
        y._isLeaving && (Nn(y, u), Qt(y, m), La($) || Ba(y, s, I, P));
      }), qn($, [y, P]);
    },
    onEnterCancelled(y) {
      b(y, !1, void 0, !0), qn(v, [y]);
    },
    onAppearCancelled(y) {
      b(y, !0, void 0, !0), qn(T, [y]);
    },
    onLeaveCancelled(y) {
      D(y), qn(E, [y]);
    }
  });
}
function m0(e) {
  if (e == null)
    return null;
  if (ge(e))
    return [mi(e.enter), mi(e.leave)];
  {
    const t = mi(e);
    return [t, t];
  }
}
function mi(e) {
  const t = or(e);
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
function Fa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let g0 = 0;
function Ba(e, t, n, s) {
  const o = e._endId = ++g0, r = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = $d(e, t);
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
function $d(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${wn}Delay`), r = s(`${wn}Duration`), i = ja(o, r), l = s(`${Ws}Delay`), a = s(`${Ws}Duration`), c = ja(l, a);
  let d = null, u = 0, p = 0;
  t === wn ? i > 0 && (d = wn, u = i, p = r.length) : t === Ws ? c > 0 && (d = Ws, u = c, p = a.length) : (u = Math.max(i, c), d = u > 0 ? i > c ? wn : Ws : null, p = d ? d === wn ? r.length : a.length : 0);
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
function v0(e, t, n) {
  const s = e[Ds];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yr = Symbol("_vod"), Td = Symbol("_vsh"), Al = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[yr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ks(e, t);
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
  e.style.display = t ? e[yr] : "none", e[Td] = !t;
}
function y0() {
  Al.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Dd = Symbol(ke.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function b0(e) {
  const t = ut();
  if (!t) {
    ke.NODE_ENV !== "production" && Me("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => br(r, o));
  };
  ke.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const o = e(t.proxy);
    t.ce ? br(t.ce, o) : zi(t.subTree, o), n(o);
  };
  wl(() => {
    Cs(s);
  }), He(() => {
    Wt(s, De, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), Ot(() => o.disconnect());
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
    br(e.el, t);
  else if (e.type === re)
    e.children.forEach((n) => zi(n, t));
  else if (e.type === Mn) {
    let { el: n, anchor: s } = e;
    for (; n && (br(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function br(e, t) {
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
const _0 = /(^|;)\s*display\s*:/;
function E0(e, t, n) {
  const s = e.style, o = le(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Xo(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Xo(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Xo(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Dd];
      i && (n += ";" + i), s.cssText = n, r = _0.test(n);
    }
  } else t && e.removeAttribute("style");
  yr in e && (e[yr] = r ? s.display : "", e[Td] && (s.display = "none"));
}
const w0 = /[^\\];\s*$/, Ua = /\s*!important$/;
function Xo(e, t, n) {
  if (Y(n))
    n.forEach((s) => Xo(e, t, s));
  else if (n == null && (n = ""), ke.NODE_ENV !== "production" && w0.test(n) && Me(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = x0(e, t);
    Ua.test(n) ? e.setProperty(
      st(s),
      n.replace(Ua, ""),
      "important"
    ) : e[s] = n;
  }
}
const qa = ["Webkit", "Moz", "ms"], gi = {};
function x0(e, t) {
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
function Wa(e, t, n, s, o, r = ip(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(za, t.slice(6, t.length)) : e.setAttributeNS(za, t, n) : n == null || r && !ll(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : xt(n) ? String(n) : n
  );
}
function Ka(e, t, n, s, o) {
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
    ke.NODE_ENV !== "production" && !i && Me(
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
const Ga = Symbol("_vei");
function S0(e, t, n, s, o = null) {
  const r = e[Ga] || (e[Ga] = {}), i = r[t];
  if (s && i)
    i.value = ke.NODE_ENV !== "production" ? Ja(s, t) : s;
  else {
    const [l, a] = k0(t);
    if (s) {
      const c = r[t] = $0(
        ke.NODE_ENV !== "production" ? Ja(s, t) : s,
        o
      );
      hn(e, l, c, a);
    } else i && (N0(e, l, i, a), r[t] = void 0);
  }
}
const Ya = /(?:Once|Passive|Capture)$/;
function k0(e) {
  let t;
  if (Ya.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ya); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : st(e.slice(2)), t];
}
let vi = 0;
const C0 = /* @__PURE__ */ Promise.resolve(), O0 = () => vi || (C0.then(() => vi = 0), vi = Date.now());
function $0(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Pt(
      T0(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = O0(), n;
}
function Ja(e, t) {
  return oe(e) || Y(e) ? e : (Me(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), De);
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, D0 = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? v0(e, s, i) : t === "style" ? E0(e, n, s) : vn(t) ? nr(t) || S0(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : V0(e, t, s, i)) ? (Ka(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wa(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Ka(e, Ce(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Wa(e, t, s, i));
};
function V0(e, t, n, s) {
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
function Ue(e, t, n) {
  const s = /* @__PURE__ */ _l(e, t);
  Vr(s) && fe(s, t);
  class o extends Jr {
    constructor(i) {
      super(s, i, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const A0 = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Ue(e, t, jd), I0 = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Jr extends I0 {
  constructor(t, n = {}, s = Ft) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Ft ? this._root = this.shadowRoot : (ke.NODE_ENV !== "production" && this.shadowRoot && Me(
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
    this._connected = !1, fs(() => {
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
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = or(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ce(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(i) : ke.NODE_ENV !== "production" && i && Me(
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
        ve(this, s) ? ke.NODE_ENV !== "production" && Me(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Co(n[s])
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
    n && this._numberProps && this._numberProps[o] && (s = or(s)), this._setProp(o, s, !1, !0);
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
      r && r.disconnect(), n === !0 ? this.setAttribute(st(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(st(t), n + "") : n || this.removeAttribute(st(t)), r && r.observe(this, { attributes: !0 });
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
            Vr(i[0]) ? fe({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (r, ...i) => {
        o(r, i), st(r) !== r && o(st(r), i);
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
    if (ke.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
function Wi(e) {
  const t = ut(), n = t && t.ce;
  return n || (ke.NODE_ENV !== "production" && Me(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function M0() {
  const e = ke.NODE_ENV !== "production" ? Wi("useShadowRoot") : Wi();
  return e && e.shadowRoot;
}
function P0(e = "$style") {
  {
    const t = ut();
    if (!t)
      return ke.NODE_ENV !== "production" && Me("useCssModule must be called inside setup()"), pe;
    const n = t.type.__cssModules;
    if (!n)
      return ke.NODE_ENV !== "production" && Me("Current instance does not have CSS modules injected."), pe;
    const s = n[e];
    return s || (ke.NODE_ENV !== "production" && Me(`Current instance does not have CSS module named "${e}".`), pe);
  }
}
const Vd = /* @__PURE__ */ new WeakMap(), Ad = /* @__PURE__ */ new WeakMap(), _r = Symbol("_moveCb"), Za = Symbol("_enterCb"), R0 = (e) => (delete e.props.mode, e), L0 = /* @__PURE__ */ R0({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, Cd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = ut(), s = yl();
    let o, r;
    return zr(() => {
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
      qi(), l.forEach((a) => {
        const c = a.el, d = c.style;
        Qt(c, i), d.transform = d.webkitTransform = d.transitionDuration = "";
        const u = c[_r] = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", u), c[_r] = null, Nn(c, i));
        };
        c.addEventListener("transitionend", u);
      }), o = [];
    }), () => {
      const i = ce(e), l = Od(i);
      let a = i.tag || re;
      if (o = [], r)
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          d.el && d.el instanceof Element && (o.push(d), yn(
            d,
            Os(
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
      r = t.default ? Ur(t.default()) : [];
      for (let c = 0; c < r.length; c++) {
        const d = r[c];
        d.key != null ? yn(
          d,
          Os(d, l, s, n)
        ) : ke.NODE_ENV !== "production" && d.type !== on && Me("<TransitionGroup> children must be keyed.");
      }
      return ue(a, null, r);
    };
  }
}), F0 = L0;
function B0(e) {
  const t = e.el;
  t[_r] && t[_r](), t[Za] && t[Za]();
}
function j0(e) {
  Ad.set(e, e.el.getBoundingClientRect());
}
function H0(e) {
  const t = Vd.get(e), n = Ad.get(e), s = t.left - n.left, o = t.top - n.top;
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
  const { hasTransform: i } = $d(s);
  return r.removeChild(s), i;
}
const Ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => Tn(t, n) : t;
};
function q0(e) {
  e.target.composing = !0;
}
function ec(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const It = Symbol("_assign"), Fn = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[It] = Ln(o);
    const r = s || o.props && o.props.type === "number";
    hn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = sr(l)), e[It](l);
    }), n && hn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (hn(e, "compositionstart", q0), hn(e, "compositionend", ec), hn(e, "change", ec));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[It] = Ln(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? sr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Le = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[It] = Ln(n), hn(e, "change", () => {
      const s = e._modelValue, o = As(e), r = e.checked, i = e[It];
      if (Y(s)) {
        const l = Ir(s, o), a = l !== -1;
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
        i(Id(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: tc,
  beforeUpdate(e, t, n) {
    e[It] = Ln(n), tc(e, t, n);
  }
};
function tc(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (Y(t))
    o = Ir(t, s.props.value) > -1;
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
    e.checked = Rn(t, n.props.value), e[It] = Ln(n), hn(e, "change", () => {
      e[It](As(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[It] = Ln(s), t !== n && (e.checked = Rn(t, s.props.value));
  }
}, Vs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = us(t);
    hn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? sr(As(i)) : As(i)
      );
      e[It](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, fs(() => {
        e._assigning = !1;
      });
    }), e[It] = Ln(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    nc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[It] = Ln(n);
  },
  updated(e, { value: t }) {
    e._assigning || nc(e, t);
  }
};
function nc(e, t) {
  const n = e.multiple, s = Y(t);
  if (n && !s && !us(t)) {
    ke.NODE_ENV !== "production" && Me(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = As(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((c) => String(c) === String(l)) : i.selected = Ir(t, l) > -1;
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
function Id(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Md = {
  created(e, t, n) {
    Ho(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Ho(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Ho(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Ho(e, t, n, s, "updated");
  }
};
function Pd(e, t) {
  switch (e) {
    case "SELECT":
      return Vs;
    case "TEXTAREA":
      return Fn;
    default:
      switch (t) {
        case "checkbox":
          return Le;
        case "radio":
          return Il;
        default:
          return Fn;
      }
  }
}
function Ho(e, t, n, s, o) {
  const i = Pd(
    e.tagName,
    n.props && n.props.type
  )[o];
  i && i(e, t, n, s);
}
function z0() {
  Fn.getSSRProps = ({ value: e }) => ({ value: e }), Il.getSSRProps = ({ value: e }, t) => {
    if (t.props && Rn(t.props.value, e))
      return { checked: !0 };
  }, Le.getSSRProps = ({ value: e }, t) => {
    if (Y(e)) {
      if (t.props && Ir(e, t.props.value) > -1)
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
}, Ct = (e, t) => {
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
}, Er = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = st(o.key);
    if (t.some(
      (i) => i === r || G0[i] === r
    ))
      return e(o);
  });
}, Rd = /* @__PURE__ */ fe({ patchProp: D0 }, p0);
let ao, sc = !1;
function Ld() {
  return ao || (ao = Yu(Rd));
}
function Fd() {
  return ao = sc ? ao : Ju(Rd), sc = !0, ao;
}
const Bd = (...e) => {
  Ld().render(...e);
}, Y0 = (...e) => {
  Fd().hydrate(...e);
}, Ft = (...e) => {
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
  if (Vl()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Me(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Me(s), n;
      },
      set() {
        Me(s);
      }
    });
  }
}
function zd(e) {
  if (le(e)) {
    const t = document.querySelector(e);
    return ke.NODE_ENV !== "production" && !t && Me(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ke.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Me(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let oc = !1;
const J0 = () => {
  oc || (oc = !0, z0(), y0());
}, X0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Nu,
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
  Transition: ot,
  TransitionGroup: F0,
  TriggerOpTypes: Kp,
  VueElement: Jr,
  assertNumber: hl,
  callWithAsyncErrorHandling: Pt,
  callWithErrorHandling: ds,
  camelize: Ce,
  capitalize: rn,
  cloneVNode: Rt,
  compatUtils: c0,
  computed: X,
  createApp: Ft,
  createBlock: ct,
  createCommentVNode: F,
  createElementBlock: S,
  createElementVNode: f,
  createHydrationRenderer: Ju,
  createPropsRestProxy: im,
  createRenderer: Yu,
  createSSRApp: jd,
  createSlots: Uh,
  createStaticVNode: ls,
  createTextVNode: je,
  createVNode: ue,
  customRef: lu,
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
  getCurrentInstance: ut,
  getCurrentScope: cl,
  getCurrentWatcher: Gp,
  getTransitionRawChildren: Ur,
  guardReactiveProps: pd,
  h: en,
  handleError: Bn,
  hasInjectionContext: gm,
  hydrate: Y0,
  hydrateOnIdle: Th,
  hydrateOnInteraction: Ih,
  hydrateOnMediaQuery: Ah,
  hydrateOnVisible: Vh,
  initCustomFormatter: xd,
  initDirectivesForSSR: J0,
  inject: oo,
  isMemoSame: Nd,
  isProxy: ks,
  isReactive: mn,
  isReadonly: Jt,
  isRef: Ie,
  isRuntimeOnly: Vl,
  isShallow: it,
  isVNode: ln,
  markRaw: ou,
  mergeDefaults: om,
  mergeModels: rm,
  mergeProps: md,
  nextTick: fs,
  normalizeClass: Ee,
  normalizeProps: ep,
  normalizeStyle: qe,
  onActivated: $u,
  onBeforeMount: Vu,
  onBeforeUnmount: js,
  onBeforeUpdate: wl,
  onDeactivated: Tu,
  onErrorCaptured: Pu,
  onMounted: He,
  onRenderTracked: Mu,
  onRenderTriggered: Iu,
  onScopeDispose: jc,
  onServerPrefetch: Au,
  onUnmounted: Ot,
  onUpdated: zr,
  onWatcherCleanup: cu,
  openBlock: x,
  popScopeId: gh,
  provide: Bu,
  proxyRefs: pl,
  pushScopeId: mh,
  queuePostFlushCb: Cs,
  reactive: Ss,
  readonly: Lr,
  ref: W,
  registerRuntimeCompiler: bd,
  render: Bd,
  renderList: me,
  renderSlot: jn,
  resolveComponent: jh,
  resolveDirective: Hh,
  resolveDynamicComponent: Nl,
  resolveFilter: a0,
  resolveTransitionHooks: Os,
  setBlockTracking: Mi,
  setDevtoolsHook: r0,
  setTransitionHooks: yn,
  shallowReactive: su,
  shallowReadonly: Ht,
  shallowRef: ru,
  ssrContextKey: ed,
  ssrUtils: l0,
  stop: gp,
  toDisplayString: H,
  toHandlerKey: nn,
  toHandlers: qh,
  toRaw: ce,
  toRef: Up,
  toRefs: Bp,
  toValue: Rp,
  transformVNodeArgs: Km,
  triggerRef: Pp,
  unref: Co,
  useAttrs: sm,
  useCssModule: P0,
  useCssVars: b0,
  useHost: Wi,
  useId: _h,
  useModel: Mm,
  useSSRContext: td,
  useShadowRoot: M0,
  useSlots: nm,
  useTemplateRef: Eh,
  useTransitionState: yl,
  vModelCheckbox: Le,
  vModelDynamic: Md,
  vModelRadio: Il,
  vModelSelect: Vs,
  vModelText: Fn,
  vShow: Al,
  version: Hi,
  warn: Me,
  watch: Wt,
  watchEffect: Vm,
  watchPostEffect: Am,
  watchSyncEffect: nd,
  withAsyncContext: lm,
  withCtx: Pe,
  withDefaults: tm,
  withDirectives: $e,
  withKeys: Er,
  withMemo: n0,
  withModifiers: Ct,
  withScopeId: vh
}, Symbol.toStringTag, { value: "Module" }));
var Q = {};
const bo = Symbol(Q.NODE_ENV !== "production" ? "Fragment" : ""), co = Symbol(Q.NODE_ENV !== "production" ? "Teleport" : ""), Ml = Symbol(Q.NODE_ENV !== "production" ? "Suspense" : ""), wr = Symbol(Q.NODE_ENV !== "production" ? "KeepAlive" : ""), Wd = Symbol(
  Q.NODE_ENV !== "production" ? "BaseTransition" : ""
), cs = Symbol(Q.NODE_ENV !== "production" ? "openBlock" : ""), Kd = Symbol(Q.NODE_ENV !== "production" ? "createBlock" : ""), Gd = Symbol(
  Q.NODE_ENV !== "production" ? "createElementBlock" : ""
), Pl = Symbol(Q.NODE_ENV !== "production" ? "createVNode" : ""), Rl = Symbol(
  Q.NODE_ENV !== "production" ? "createElementVNode" : ""
), Do = Symbol(
  Q.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Ll = Symbol(
  Q.NODE_ENV !== "production" ? "createTextVNode" : ""
), Yd = Symbol(
  Q.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Fl = Symbol(
  Q.NODE_ENV !== "production" ? "resolveComponent" : ""
), Bl = Symbol(
  Q.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), jl = Symbol(
  Q.NODE_ENV !== "production" ? "resolveDirective" : ""
), Hl = Symbol(
  Q.NODE_ENV !== "production" ? "resolveFilter" : ""
), Ul = Symbol(
  Q.NODE_ENV !== "production" ? "withDirectives" : ""
), ql = Symbol(Q.NODE_ENV !== "production" ? "renderList" : ""), Jd = Symbol(Q.NODE_ENV !== "production" ? "renderSlot" : ""), Xd = Symbol(Q.NODE_ENV !== "production" ? "createSlots" : ""), Xr = Symbol(
  Q.NODE_ENV !== "production" ? "toDisplayString" : ""
), xr = Symbol(Q.NODE_ENV !== "production" ? "mergeProps" : ""), zl = Symbol(
  Q.NODE_ENV !== "production" ? "normalizeClass" : ""
), Wl = Symbol(
  Q.NODE_ENV !== "production" ? "normalizeStyle" : ""
), _o = Symbol(
  Q.NODE_ENV !== "production" ? "normalizeProps" : ""
), Vo = Symbol(
  Q.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Kl = Symbol(Q.NODE_ENV !== "production" ? "toHandlers" : ""), Ki = Symbol(Q.NODE_ENV !== "production" ? "camelize" : ""), Q0 = Symbol(Q.NODE_ENV !== "production" ? "capitalize" : ""), Gi = Symbol(
  Q.NODE_ENV !== "production" ? "toHandlerKey" : ""
), Nr = Symbol(
  Q.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Z0 = Symbol(Q.NODE_ENV !== "production" ? "pushScopeId" : ""), eg = Symbol(Q.NODE_ENV !== "production" ? "popScopeId" : ""), Gl = Symbol(Q.NODE_ENV !== "production" ? "withCtx" : ""), tg = Symbol(Q.NODE_ENV !== "production" ? "unref" : ""), ng = Symbol(Q.NODE_ENV !== "production" ? "isRef" : ""), Yl = Symbol(Q.NODE_ENV !== "production" ? "withMemo" : ""), Qd = Symbol(Q.NODE_ENV !== "production" ? "isMemoSame" : ""), Is = {
  [bo]: "Fragment",
  [co]: "Teleport",
  [Ml]: "Suspense",
  [wr]: "KeepAlive",
  [Wd]: "BaseTransition",
  [cs]: "openBlock",
  [Kd]: "createBlock",
  [Gd]: "createElementBlock",
  [Pl]: "createVNode",
  [Rl]: "createElementVNode",
  [Do]: "createCommentVNode",
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
  [xr]: "mergeProps",
  [zl]: "normalizeClass",
  [Wl]: "normalizeStyle",
  [_o]: "normalizeProps",
  [Vo]: "guardReactiveProps",
  [Kl]: "toHandlers",
  [Ki]: "camelize",
  [Q0]: "capitalize",
  [Gi]: "toHandlerKey",
  [Nr]: "setBlockTracking",
  [Z0]: "pushScopeId",
  [eg]: "popScopeId",
  [Gl]: "withCtx",
  [tg]: "unref",
  [ng]: "isRef",
  [Yl]: "withMemo",
  [Qd]: "isMemoSame"
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
function Eo(e, t, n, s, o, r, i, l = !1, a = !1, c = !1, d = $t) {
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
    loc: d
  };
}
function ns(e, t = $t) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function At(e, t = $t) {
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
function Yi(e, t, n, s = !0) {
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
  return e || t ? Kd : Gd;
}
function Jl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Ps(s, e.isComponent)), t(cs), t(Rs(s, e.isComponent)));
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
function Sr(e) {
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
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : lc(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    xn(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (xn(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Sr("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    St(t) || (t === 62 ? (Q.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = lc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || St(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, Q.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : St(t) || (Q.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
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
    t === 61 || xn(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : Q.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
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
    t === 93 ? this.state = 14 : (t === 61 || xn(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), Q.NODE_ENV !== "production" && this.cbs.onerr(
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
    St(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (Q.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
function Ji(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function Pn(e, t) {
  const n = Ji("MODE", t), s = Ji(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Ls(e, t, n, ...s) {
  const o = Pn(e, t);
  return Q.NODE_ENV !== "production" && o && kr(e, t, n, ...s), o;
}
function kr(e, t, n, ...s) {
  if (Ji(e, t) === "suppress-warning")
    return;
  const { message: r, link: i } = ag[e], l = `(deprecation ${e}) ${typeof r == "function" ? r(...s) : r}${i ? `
  Details: ${i}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Xl(e) {
  throw e;
}
function Zd(e) {
  Q.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Se(e, t, n, s) {
  const o = Q.NODE_ENV !== "production" ? (n || cg)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(o));
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
}, wt = (e) => e.type === 4 && e.isStatic;
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
      return wr;
    case "BaseTransition":
    case "base-transition":
      return Wd;
  }
}
const ug = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Ql = (e) => !ug.test(e), dg = /[A-Za-z_$\xA0-\uFFFF]/, fg = /[\.\?\w$\xA0-\uFFFF]/, pg = /\s+[.[]\s*|\s*[.[]\s+/g, tf = (e) => e.type === 4 ? e.content : e.loc.source, hg = (e) => {
  const t = tf(e).trim().replace(pg, (l) => l.trim());
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
}, nf = hg, mg = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, gg = (e) => mg.test(tf(e)), vg = gg;
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
  return !!(e && wt(e) && e.content === t);
}
function yg(e) {
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
function bg(e) {
  return e.type === 7 && e.name === "slot";
}
function Cr(e) {
  return e.type === 1 && e.tagType === 3;
}
function Or(e) {
  return e.type === 1 && e.tagType === 2;
}
const _g = /* @__PURE__ */ new Set([_o, Vo]);
function sf(e, t = []) {
  if (e && !le(e) && e.type === 14) {
    const n = e.callee;
    if (!le(n) && _g.has(n))
      return sf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function $r(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], r = [], i;
  if (o && !le(o) && o.type === 14) {
    const l = sf(o);
    o = l[0], r = l[1], i = r[r.length - 1];
  }
  if (o == null || le(o))
    s = At([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !le(l) && l.type === 15 ? uc(t, l) || l.properties.unshift(t) : o.callee === Kl ? s = Ke(n.helper(xr), [
      At([t]),
      o
    ]) : o.arguments.unshift(At([t])), !s && (s = o);
  } else o.type === 15 ? (uc(t, o) || o.properties.unshift(t), s = o) : (s = Ke(n.helper(xr), [
    At([t]),
    o
  ]), i && i.callee === Vo && (i = r[r.length - 2]));
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
function xo(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function Eg(e) {
  return e.type === 14 && e.callee === Yl ? e.arguments[1].returns : e;
}
const wg = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, of = {
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
  comments: Q.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ye = of, No = null, gn = "", nt = null, he = null, bt = "", dn = -1, zn = -1, Zl = 0, $n = !1, Xi = null;
const Ae = [], Te = new lg(Ae, {
  onerr: yt,
  ontext(e, t) {
    Uo(Qe(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Uo(e, t, n);
  },
  oninterpolation(e, t) {
    if ($n)
      return Uo(Qe(e, t), e, t);
    let n = e + Te.delimiterOpen.length, s = t - Te.delimiterClose.length;
    for (; St(gn.charCodeAt(n)); )
      n++;
    for (; St(gn.charCodeAt(s - 1)); )
      s--;
    let o = Qe(n, s);
    o.includes("&") && (o = ye.decodeEntities(o, !1)), Qi({
      type: 5,
      content: Zo(o, !1, Fe(n, s)),
      loc: Fe(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Qe(e, t);
    nt = {
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
    fc(e);
  },
  onclosetag(e, t) {
    const n = Qe(e, t);
    if (!ye.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < Ae.length; o++)
        if (Ae[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && yt(24, Ae[0].loc.start.offset);
          for (let i = 0; i <= o; i++) {
            const l = Ae.shift();
            Qo(l, t, i < o);
          }
          break;
        }
      s || yt(23, rf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = nt.tag;
    nt.isSelfClosing = !0, fc(e), Ae[0] && Ae[0].tag === t && Qo(Ae.shift(), e);
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
    if (!$n && s === "" && yt(26, e), $n || s === "")
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
      $n = Te.inVPre = !0, Xi = nt;
      const o = nt.props;
      for (let r = 0; r < o.length; r++)
        o[r].type === 7 && (o[r] = Ag(o[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Qe(e, t);
    if ($n && !cc(he))
      he.name += n, Gn(he.nameLoc, t);
    else {
      const s = n[0] !== "[";
      he.arg = Zo(
        s ? n : n.slice(1, -1),
        s,
        Fe(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Qe(e, t);
    if ($n && !cc(he))
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
    bt += Qe(e, t), dn < 0 && (dn = e), zn = t;
  },
  onattribentity(e, t, n) {
    bt += e, dn < 0 && (dn = t), zn = n;
  },
  onattribnameend(e) {
    const t = he.loc.start.offset, n = Qe(t, e);
    he.type === 7 && (he.rawName = n), nt.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && yt(2, t);
  },
  onattribend(e, t) {
    if (nt && he) {
      if (Gn(he.loc, t), e !== 0)
        if (bt.includes("&") && (bt = ye.decodeEntities(
          bt,
          !0
        )), he.type === 6)
          he.name === "class" && (bt = af(bt).trim()), e === 1 && !bt && yt(13, t), he.value = {
            type: 2,
            content: bt,
            loc: e === 1 ? Fe(dn, zn) : Fe(dn - 1, zn + 1)
          }, Te.inSFCRoot && nt.tag === "template" && he.name === "lang" && bt && bt !== "html" && Te.enterRCDATA(Sr("</template"), 0);
        else {
          let n = 0;
          he.exp = Zo(
            bt,
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
      (he.type !== 7 || he.name !== "pre") && nt.props.push(he);
    }
    bt = "", dn = zn = -1;
  },
  oncomment(e, t) {
    ye.comments && Qi({
      type: 3,
      content: Qe(e, t),
      loc: Fe(e - 4, t + 3)
    });
  },
  onend() {
    const e = gn.length;
    if (Q.NODE_ENV !== "production" && Te.state !== 1)
      switch (Te.state) {
        case 5:
        case 8:
          yt(5, e);
          break;
        case 3:
        case 4:
          yt(
            25,
            Te.sectionStart
          );
          break;
        case 28:
          Te.currentSequence === Xe.CdataEnd ? yt(6, e) : yt(7, e);
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
          yt(9, e);
          break;
      }
    for (let t = 0; t < Ae.length; t++)
      Qo(Ae[t], e - 1), yt(24, Ae[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ae[0].ns !== 0 ? Uo(Qe(e, t), e, t) : yt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ae[0] ? Ae[0].ns : ye.ns) === 0 && yt(
      21,
      e - 1
    );
  }
}), dc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, xg = /^\(|\)$/g;
function Ng(e) {
  const t = e.loc, n = e.content, s = n.match(wg);
  if (!s) return;
  const [, o, r] = s, i = (u, p, m = !1) => {
    const g = t.start.offset + p, h = g + u.length;
    return Zo(
      u,
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
  const c = o.indexOf(a), d = a.match(dc);
  if (d) {
    a = a.replace(dc, "").trim();
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
function Qe(e, t) {
  return gn.slice(e, t);
}
function fc(e) {
  Te.inSFCRoot && (nt.innerLoc = Fe(e + 1, e + 1)), Qi(nt);
  const { tag: t, ns: n } = nt;
  n === 0 && ye.isPreTag(t) && Zl++, ye.isVoidTag(t) ? Qo(nt, e) : (Ae.unshift(nt), (n === 1 || n === 2) && (Te.inXML = !0)), nt = null;
}
function Uo(e, t, n) {
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
function Qo(e, t, n = !1) {
  n ? Gn(e.loc, rf(t, 60)) : Gn(e.loc, Sg(t, 62) + 1), Te.inSFCRoot && (e.children.length ? e.innerLoc.end = fe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = fe({}, e.innerLoc.start), e.innerLoc.source = Qe(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: r } = e;
  if ($n || (s === "slot" ? e.tagType = 2 : pc(e) ? e.tagType = 3 : Cg(e) && (e.tagType = 1)), Te.inRCDATA || (e.children = lf(r)), o === 0 && ye.isIgnoreNewlineTag(s)) {
    const i = r[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ye.isPreTag(s) && Zl--, Xi === e && ($n = Te.inVPre = !1, Xi = null), Te.inXML && (Ae[0] ? Ae[0].ns : ye.ns) === 0 && (Te.inXML = !1);
  {
    const i = e.props;
    if (Q.NODE_ENV !== "production" && Pn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ye
    )) {
      let a = !1, c = !1;
      for (let d = 0; d < i.length; d++) {
        const u = i[d];
        if (u.type === 7 && (u.name === "if" ? a = !0 : u.name === "for" && (c = !0)), a && c) {
          kr(
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
    ) && e.tag === "template" && !pc(e)) {
      Q.NODE_ENV !== "production" && kr(
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
function rf(e, t) {
  let n = e;
  for (; gn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const kg = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function pc({ tag: e, props: t }) {
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
  if (e === "component" || Og(e.charCodeAt(0)) || ef(e) || ye.isBuiltInComponent && ye.isBuiltInComponent(e) || ye.isNativeTag && !ye.isNativeTag(e))
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
function lf(e) {
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
function Dg(e) {
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
function Zo(e, t = !1, n, s = 0, o = 0) {
  return de(e, t, n, s);
}
function yt(e, t, n) {
  ye.onError(
    Se(e, Fe(t, t), void 0, n)
  );
}
function Ig() {
  Te.reset(), nt = null, he = null, bt = "", dn = -1, zn = -1, Ae.length = 0;
}
function Mg(e, t) {
  if (Ig(), gn = e, ye = fe({}, of), t) {
    let o;
    for (o in t)
      t[o] != null && (ye[o] = t[o]);
  }
  if (Q.NODE_ENV !== "production" && !ye.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  Te.mode = ye.parseMode === "html" ? 1 : ye.parseMode === "sfc" ? 2 : 0, Te.inXML = ye.ns === 1 || ye.ns === 2;
  const n = t && t.delimiters;
  n && (Te.delimiterOpen = Sr(n[0]), Te.delimiterClose = Sr(n[1]));
  const s = No = og([], e);
  return Te.parse(gn), s.loc = Fe(0, e.length), s.children = lf(s.children), No = null, s;
}
function Pg(e, t) {
  er(
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
  return t.length === 1 && t[0].type === 1 && !Or(t[0]) ? t[0] : null;
}
function er(e, t, n, s = !1, o = !1) {
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
          const h = g.patchFlag;
          if ((h === void 0 || h === 512 || h === 1) && df(p, n) >= 2) {
            const I = ff(p);
            I && (g.props = n.hoist(I));
          }
          g.dynamicProps && (g.dynamicProps = n.hoist(g.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : kt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (Q.NODE_ENV !== "production" ? ` /* ${eo[-1]} */` : "")
      ), i.push(p);
      continue;
    }
    if (p.type === 1) {
      const m = p.tagType === 1;
      m && n.scopes.vSlot++, er(p, e, n, !1, o), m && n.scopes.vSlot--;
    } else if (p.type === 11)
      er(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let m = 0; m < p.branches.length; m++)
        er(
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
    Re(
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
        const l = df(e, t);
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
const Rg = /* @__PURE__ */ new Set([
  zl,
  Wl,
  _o,
  Vo
]);
function uf(e, t) {
  if (e.type === 14 && !le(e.callee) && Rg.has(e.callee)) {
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
      let c;
      if (l.type === 4 ? c = kt(l, t) : l.type === 14 ? c = uf(l, t) : c = 0, c === 0)
        return c;
      c < n && (n = c);
    }
  }
  return n;
}
function ff(e) {
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
  isCustomElement: d = De,
  expressionPlugins: u = [],
  scopeId: p = null,
  slotted: m = !0,
  ssr: g = !1,
  inSSR: h = !1,
  ssrCssVars: I = "",
  bindingMetadata: k = pe,
  inline: _ = !1,
  isTS: v = !1,
  onError: $ = Xl,
  onWarn: E = Zd,
  compatConfig: M
}) {
  const C = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), T = {
    // options
    filename: t,
    selfName: C && rn(Ce(C[1])),
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
    inSSR: h,
    ssrCssVars: I,
    bindingMetadata: k,
    inline: _,
    isTS: v,
    onError: $,
    onWarn: E,
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
    helper(b) {
      const D = T.helpers.get(b) || 0;
      return T.helpers.set(b, D + 1), b;
    },
    removeHelper(b) {
      const D = T.helpers.get(b);
      if (D) {
        const N = D - 1;
        N ? T.helpers.set(b, N) : T.helpers.delete(b);
      }
    },
    helperString(b) {
      return `_${Is[T.helper(b)]}`;
    },
    replaceNode(b) {
      if (Q.NODE_ENV !== "production") {
        if (!T.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!T.parent)
          throw new Error("Cannot replace root node.");
      }
      T.parent.children[T.childIndex] = T.currentNode = b;
    },
    removeNode(b) {
      if (Q.NODE_ENV !== "production" && !T.parent)
        throw new Error("Cannot remove root node.");
      const D = T.parent.children, N = b ? D.indexOf(b) : T.currentNode ? T.childIndex : -1;
      if (Q.NODE_ENV !== "production" && N < 0)
        throw new Error("node being removed is not a child of current parent");
      !b || b === T.currentNode ? (T.currentNode = null, T.onNodeRemoved()) : T.childIndex > N && (T.childIndex--, T.onNodeRemoved()), T.parent.children.splice(N, 1);
    },
    onNodeRemoved: De,
    addIdentifiers(b) {
    },
    removeIdentifiers(b) {
    },
    hoist(b) {
      le(b) && (b = de(b)), T.hoists.push(b);
      const D = de(
        `_hoisted_${T.hoists.length}`,
        !1,
        b.loc,
        2
      );
      return D.hoisted = b, D;
    },
    cache(b, D = !1, N = !1) {
      const y = rg(
        T.cached.length,
        b,
        D,
        N
      );
      return T.cached.push(y), y;
    }
  };
  return T.filters = /* @__PURE__ */ new Set(), T;
}
function Fg(e, t) {
  const n = Lg(e, t);
  Qr(e, n), t.hoistStatic && Pg(e, n), t.ssr || Bg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Bg(e, t) {
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
    Q.NODE_ENV !== "production" && s.filter((r) => r.type !== 3).length === 1 && (o |= 2048), e.codegenNode = Eo(
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
      t.ssr || t.helper(Do);
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
      jg(e, t);
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
const Zr = "/*@__PURE__*/", hf = (e) => `${Is[e]}: _${Is[e]}`;
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
    ssr: d
  } = n, u = Array.from(e.helpers), p = u.length > 0, m = !r && s !== "module";
  qg(e, n);
  const h = d ? "ssrRender" : "render", k = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${h}(${k}) {`), i(), m && (o("with (_ctx) {"), i(), p && (o(
    `const { ${u.map(hf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (bi(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (bi(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), bi(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let _ = 0; _ < e.temps; _++)
      o(`${_ > 0 ? ", " : ""}_temp${_}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), d || o("return "), e.codegenNode ? lt(e.codegenNode, n) : o("null"), m && (l(), o("}")), l(), o("}"), {
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
  } = t, c = l, d = Array.from(e.helpers);
  if (d.length > 0 && (o(
    `const _Vue = ${c}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const u = [
      Pl,
      Rl,
      Do,
      Ll,
      Yd
    ].filter((p) => d.includes(p)).map(hf).join(", ");
    o(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  zg(e.hoists, t), r(), o("return ");
}
function bi(e, t, { helper: n, push: s, newline: o, isTS: r }) {
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
    r && (n(`const _hoisted_${o + 1} = `), lt(r, t), s());
  }
  t.pure = !1;
}
function Wg(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function ea(e, t) {
  const n = e.length > 3 || Q.NODE_ENV !== "production" && e.some((s) => Y(s) || !Wg(s));
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
    ) : Y(l) ? ea(l, t) : lt(l, t), i < e.length - 1 && (n ? (s && o(","), r()) : s && o(", "));
  }
}
function lt(e, t) {
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
      Q.NODE_ENV !== "production" && ac(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), lt(e.codegenNode, t);
      break;
    case 2:
      Kg(e, t);
      break;
    case 4:
      mf(e, t);
      break;
    case 5:
      Gg(e, t);
      break;
    case 12:
      lt(e.codegenNode, t);
      break;
    case 8:
      gf(e, t);
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
      if (Q.NODE_ENV !== "production")
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
function Gg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Zr), n(`${s(Xr)}(`), lt(e.content, t), n(")");
}
function gf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    le(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : lt(s, t);
  }
}
function Yg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), gf(e, t), n("]");
  else if (e.isStatic) {
    const s = Ql(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Jg(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(Zr), n(
    `${s(Do)}(${JSON.stringify(e.content)})`,
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
    directives: d,
    isBlock: u,
    disableTracking: p,
    isComponent: m
  } = e;
  let g;
  if (a)
    if (Q.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${eo[a]} */`;
      else {
        const I = Object.keys(eo).map(Number).filter((k) => k > 0 && a & k).map((k) => eo[k]).join(", ");
        g = a + ` /* ${I} */`;
      }
    else
      g = String(a);
  d && n(s(Ul) + "("), u && n(`(${s(cs)}(${p ? "true" : ""}), `), o && n(Zr);
  const h = u ? Rs(t.inSSR, m) : Ps(t.inSSR, m);
  n(s(h) + "(", -2, e), Ao(
    Qg([r, i, l, g, c]),
    t
  ), n(")"), u && n(")"), d && (n(", "), lt(d, t), n(")"));
}
function Qg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Zg(e, t) {
  const { push: n, helper: s, pure: o } = t, r = le(e.callee) ? e.callee : s(e.callee);
  o && n(Zr), n(r + "(", -2, e), Ao(e.arguments, t), n(")");
}
function ev(e, t) {
  const { push: n, indent: s, deindent: o, newline: r } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const l = i.length > 1 || Q.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < i.length; a++) {
    const { key: c, value: d } = i[a];
    Yg(c, t), n(": "), lt(d, t), a < i.length - 1 && (n(","), r());
  }
  l && o(), n(l ? "}" : " }");
}
function tv(e, t) {
  ea(e.elements, t);
}
function nv(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: r, returns: i, body: l, newline: a, isSlot: c } = e;
  c && n(`_${Is[Gl]}(`), n("(", -2, e), Y(r) ? Ao(r, t) : r && lt(r, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), Y(i) ? ea(i, t) : lt(i, t)) : l && lt(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function sv(e, t) {
  const { test: n, consequent: s, alternate: o, newline: r } = e, { push: i, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const u = !Ql(n.content);
    u && i("("), mf(n, t), u && i(")");
  } else
    i("("), lt(n, t), i(")");
  r && l(), t.indentLevel++, r || i(" "), i("? "), lt(s, t), t.indentLevel--, r && c(), r || i(" "), i(": ");
  const d = o.type === 19;
  d || t.indentLevel++, lt(o, t), d || t.indentLevel--, r && a(
    !0
    /* without newline */
  );
}
function ov(e, t) {
  const { push: n, helper: s, indent: o, deindent: r, newline: i } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(Nr)}(-1`), e.inVOnce && n(", true"), n("),"), i(), n("(")), n(`_cache[${e.index}] = `), lt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), i(), n(`${s(Nr)}(1),`), i(), n(`_cache[${e.index}]`), r()), n(")"), a && n(")]");
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
  return Q.NODE_ENV !== "production" && Yn(e, t, n, s), e;
}
const av = pf(
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
        s.codegenNode = mc(
          o,
          a,
          n
        );
      else {
        const c = dv(s.codegenNode);
        c.alternate = mc(
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
  if (Q.NODE_ENV !== "production" && t.exp && Yn(t.exp, n), t.name === "if") {
    const o = hc(e, t), r = {
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
        n.removeNode(l), Q.NODE_ENV !== "production" && r.unshift(l);
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
        const a = hc(e, t);
        if (Q.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...r, ...a.children]), Q.NODE_ENV !== "production") {
          const d = a.userKey;
          d && l.branches.forEach(({ userKey: u }) => {
            uv(u, d) && n.onError(
              Se(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const c = s && s(l, a, !1);
        Qr(a, n), c && c(), n.currentNode = null;
      } else
        n.onError(
          Se(30, e.loc)
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
    userKey: wo(e, "key"),
    isTemplateIf: n
  };
}
function mc(e, t, n) {
  return e.condition ? Yi(
    e.condition,
    gc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Ke(n.helper(Do), [
      Q.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : gc(e, t, n);
}
function gc(e, t, n) {
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
      return $r(a, o, n), a;
    } else {
      let a = 64;
      return Q.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((c) => c.type !== 3).length === 1 && (a |= 2048), Eo(
        n,
        s(bo),
        At([o]),
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
    return c.type === 13 && Jl(c, n), $r(c, o, n), a;
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
    vf(e), i = e.exp;
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), s.some((l) => l.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = Ce(r.content) : r.content = `${n.helperString(Ki)}(${r.content})` : (r.children.unshift(`${n.helperString(Ki)}(`), r.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && vc(r, "."), s.some((l) => l.content === "attr") && vc(r, "^")), {
    props: [Re(r, i)]
  };
}, vf = (e, t) => {
  const n = e.arg, s = Ce(n.content);
  e.exp = de(s, !1, n.loc);
}, vc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, pv = pf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return hv(e, t, n, (r) => {
      const i = Ke(s(ql), [
        r.source
      ]), l = Cr(e), a = Et(e, "memo"), c = wo(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && vf(c);
      let u = c && (c.type === 6 ? c.value ? de(c.value.content, !0) : void 0 : c.exp);
      const p = c && u ? Re("key", u) : null, m = r.source.type === 4 && r.source.constType > 0, g = m ? 64 : c ? 128 : 256;
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
        Q.NODE_ENV !== "production" && l && e.children.some((v) => {
          if (v.type === 1) {
            const $ = wo(v, "key");
            if ($)
              return n.onError(
                Se(
                  33,
                  $.loc
                )
              ), !0;
          }
        });
        const k = I.length !== 1 || I[0].type !== 1, _ = Or(e) ? e : l && e.children.length === 1 && Or(e.children[0]) ? e.children[0] : null;
        if (_ ? (h = _.codegenNode, l && p && $r(h, p, n)) : k ? h = Eo(
          n,
          s(bo),
          p ? At([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (h = I[0].codegenNode, l && p && $r(h, p, n), h.isBlock !== !m && (h.isBlock ? (o(cs), o(
          Rs(n.inSSR, h.isComponent)
        )) : o(
          Ps(n.inSSR, h.isComponent)
        )), h.isBlock = !m, h.isBlock ? (s(cs), s(Rs(n.inSSR, h.isComponent))) : s(Ps(n.inSSR, h.isComponent))), a) {
          const v = Ms(
            Zi(r.parseResult, [
              de("_cached")
            ])
          );
          v.body = ig([
            Kt(["const _memo = (", a.exp, ")"]),
            Kt([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
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
              Zi(r.parseResult),
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
  yf(o, n);
  const { addIdentifiers: r, removeIdentifiers: i, scopes: l } = n, { source: a, value: c, key: d, index: u } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: d,
    objectIndexAlias: u,
    parseResult: o,
    children: Cr(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const m = s && s(p);
  return () => {
    l.vFor--, m && m();
  };
}
function yf(e, t) {
  e.finalized || (Q.NODE_ENV !== "production" && (Yn(e.source, t), e.key && Yn(
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
  return mv([e, t, n, ...s]);
}
function mv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || de("_".repeat(s + 1), !1));
}
const yc = de("undefined", !1), gv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = Et(e, "slot");
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
  const a = Et(e, "slot", !0);
  if (a) {
    const { arg: I, exp: k } = a;
    I && !wt(I) && (l = !0), r.push(
      Re(
        I || de("default", !0),
        n(k, void 0, s, o)
      )
    );
  }
  let c = !1, d = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let I = 0; I < s.length; I++) {
    const k = s[I];
    let _;
    if (!Cr(k) || !(_ = Et(k, "slot", !0))) {
      k.type !== 3 && u.push(k);
      continue;
    }
    if (a) {
      t.onError(
        Se(37, _.loc)
      );
      break;
    }
    c = !0;
    const { children: v, loc: $ } = k, {
      arg: E = de("default", !0),
      exp: M,
      loc: C
    } = _;
    let T;
    wt(E) ? T = E ? E.content : "default" : l = !0;
    const b = Et(k, "for"), D = n(M, b, v, $);
    let N, y;
    if (N = Et(k, "if"))
      l = !0, i.push(
        Yi(
          N.exp,
          qo(E, D, m++),
          yc
        )
      );
    else if (y = Et(
      k,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let V = I, P;
      for (; V-- && (P = s[V], !(P.type !== 3 && el(P))); )
        ;
      if (P && Cr(P) && Et(P, /^(else-)?if$/)) {
        let B = i[i.length - 1];
        for (; B.alternate.type === 19; )
          B = B.alternate;
        B.alternate = y.exp ? Yi(
          y.exp,
          qo(
            E,
            D,
            m++
          ),
          yc
        ) : qo(E, D, m++);
      } else
        t.onError(
          Se(30, y.loc)
        );
    } else if (b) {
      l = !0;
      const V = b.forParseResult;
      V ? (yf(V, t), i.push(
        Ke(t.helper(ql), [
          V.source,
          Ms(
            Zi(V),
            qo(E, D),
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
      if (T) {
        if (p.has(T)) {
          t.onError(
            Se(
              38,
              C
            )
          );
          continue;
        }
        p.add(T), T === "default" && (d = !0);
      }
      r.push(Re(E, D));
    }
  }
  if (!a) {
    const I = (k, _) => {
      const v = n(k, void 0, _, o);
      return t.compatConfig && (v.isNonScopedSlot = !0), Re("default", v);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((k) => el(k)) && (d ? t.onError(
      Se(
        39,
        u[0].loc
      )
    ) : r.push(
      I(void 0, u)
    )) : r.push(I(void 0, s));
  }
  const g = l ? 2 : tr(e.children) ? 3 : 1;
  let h = At(
    r.concat(
      Re(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        de(
          g + (Q.NODE_ENV !== "production" ? ` /* ${Wf[g]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return i.length && (h = Ke(t.helper(Xd), [
    h,
    ns(i)
  ])), {
    slots: h,
    hasDynamicSlots: l
  };
}
function qo(e, t, n) {
  const s = [
    Re("name", e),
    Re("fn", t)
  ];
  return n != null && s.push(
    Re("key", de(String(n), !0))
  ), At(s);
}
function tr(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || tr(n.children))
          return !0;
        break;
      case 9:
        if (tr(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (tr(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function el(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : el(e.content);
}
const bf = /* @__PURE__ */ new WeakMap(), bv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, r = e.tagType === 1;
  let i = r ? _v(e, t) : `"${s}"`;
  const l = ge(i) && i.callee === Bl;
  let a, c, d = 0, u, p, m, g = (
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
    a = h.props, d = h.patchFlag, p = h.dynamicPropNames;
    const I = h.directives;
    m = I && I.length ? ns(
      I.map((k) => wv(k, t))
    ) : void 0, h.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (i === wr && (g = !0, d |= 1024, Q.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Se(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    i !== co && // explained above.
    i !== wr) {
      const { slots: I, hasDynamicSlots: k } = yv(e, t);
      c = I, k && (d |= 1024);
    } else if (e.children.length === 1 && i !== co) {
      const I = e.children[0], k = I.type, _ = k === 5 || k === 8;
      _ && kt(I, t) === 0 && (d |= 1), _ || k === 2 ? c = I : c = e.children;
    } else
      c = e.children;
  p && p.length && (u = xv(p)), e.codegenNode = Eo(
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
function _v(e, t, n = !1) {
  let { tag: s } = e;
  const o = tl(s), r = wo(
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
  let c = [];
  const d = [], u = [], p = a.length > 0;
  let m = !1, g = 0, h = !1, I = !1, k = !1, _ = !1, v = !1, $ = !1;
  const E = [], M = (D) => {
    c.length && (d.push(
      At(bc(c), l)
    ), c = []), D && d.push(D);
  }, C = () => {
    t.scopes.vFor > 0 && c.push(
      Re(
        de("ref_for", !0),
        de("true")
      )
    );
  }, T = ({ key: D, value: N }) => {
    if (wt(D)) {
      const y = D.content, V = vn(y);
      if (V && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      y.toLowerCase() !== "onclick" && // omit v-model handlers
      y !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !An(y) && (_ = !0), V && An(y) && ($ = !0), V && N.type === 14 && (N = N.arguments[0]), N.type === 20 || (N.type === 4 || N.type === 8) && kt(N, t) > 0)
        return;
      y === "ref" ? h = !0 : y === "class" ? I = !0 : y === "style" ? k = !0 : y !== "key" && !E.includes(y) && E.push(y), s && (y === "class" || y === "style") && !E.includes(y) && E.push(y);
    } else
      v = !0;
  };
  for (let D = 0; D < n.length; D++) {
    const N = n[D];
    if (N.type === 6) {
      const { loc: y, name: V, nameLoc: P, value: B } = N;
      let J = !0;
      if (V === "ref" && (h = !0, C()), V === "is" && (tl(i) || B && B.content.startsWith("vue:") || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Re(
          de(V, !0, P),
          de(
            B ? B.content : "",
            J,
            B ? B.loc : y
          )
        )
      );
    } else {
      const { name: y, arg: V, exp: P, loc: B, modifiers: J } = N, ne = y === "bind", te = y === "on";
      if (y === "slot") {
        s || t.onError(
          Se(40, B)
        );
        continue;
      }
      if (y === "once" || y === "memo" || y === "is" || ne && Vn(V, "is") && (tl(i) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || te && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && Vn(V, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        te && p && Vn(V, "vue:before-update")) && (m = !0), ne && Vn(V, "ref") && C(), !V && (ne || te)
      ) {
        if (v = !0, P)
          if (ne) {
            if (M(), Q.NODE_ENV !== "production" && d.some((Tt) => Tt.type === 15 ? Tt.properties.some(({ key: Dt }) => Dt.type !== 4 || !Dt.isStatic ? !0 : Dt.content !== "class" && Dt.content !== "style" && !vn(Dt.content)) : !0) && Ls(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              B
            ), Pn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              d.unshift(P);
              continue;
            }
            C(), M(), d.push(P);
          } else
            M({
              type: 14,
              loc: B,
              callee: t.helper(Kl),
              arguments: s ? [P] : [P, "true"]
            });
        else
          t.onError(
            Se(
              ne ? 34 : 35,
              B
            )
          );
        continue;
      }
      ne && J.some((gt) => gt.content === "prop") && (g |= 32);
      const _e = t.directiveTransforms[y];
      if (_e) {
        const { props: gt, needRuntime: Tt } = _e(N, e, t);
        !r && gt.forEach(T), te && V && !wt(V) ? M(At(gt, l)) : c.push(...gt), Tt && (u.push(N), xt(Tt) && bf.set(N, Tt));
      } else Vc(y) || (u.push(N), p && (m = !0));
    }
  }
  let b;
  if (d.length ? (M(), d.length > 1 ? b = Ke(
    t.helper(xr),
    d,
    l
  ) : b = d[0]) : c.length && (b = At(
    bc(c),
    l
  )), v ? g |= 16 : (I && !s && (g |= 2), k && !s && (g |= 4), E.length && (g |= 8), _ && (g |= 32)), !m && (g === 0 || g === 32) && (h || $ || u.length > 0) && (g |= 512), !t.inSSR && b)
    switch (b.type) {
      case 15:
        let D = -1, N = -1, y = !1;
        for (let B = 0; B < b.properties.length; B++) {
          const J = b.properties[B].key;
          wt(J) ? J.content === "class" ? D = B : J.content === "style" && (N = B) : J.isHandlerKey || (y = !0);
        }
        const V = b.properties[D], P = b.properties[N];
        y ? b = Ke(
          t.helper(_o),
          [b]
        ) : (V && !wt(V.value) && (V.value = Ke(
          t.helper(zl),
          [V.value]
        )), P && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (k || P.value.type === 4 && P.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        P.value.type === 17) && (P.value = Ke(
          t.helper(Wl),
          [P.value]
        )));
        break;
      case 14:
        break;
      default:
        b = Ke(
          t.helper(_o),
          [
            Ke(t.helper(Vo), [
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
function bc(e) {
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
  const n = [], s = bf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(jl), t.directives.add(e.name), n.push(xo(e.name, "directive")));
  const { loc: o } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const r = de("true", !1, o);
    n.push(
      At(
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
function tl(e) {
  return e === "component" || e === "Component";
}
const Nv = (e, t) => {
  if (Or(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: r } = Sv(e, t), i = [
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
      let u = i.content;
      Q.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Se(51, i.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const p = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        nn(Ce(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = de(p, !0, i.loc);
    } else
      l = Kt([
        `${n.helperString(Gi)}(`,
        i,
        ")"
      ]);
  else
    l = i, l.children.unshift(`${n.helperString(Gi)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let c = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = nf(a), p = !(u || vg(a)), m = a.content.includes(";");
    Q.NODE_ENV !== "production" && Yn(
      a,
      n,
      !1,
      m
    ), (p || c && u) && (a = Kt([
      `${p ? "$event" : "(...args)"} => ${m ? "{" : "("}`,
      a,
      m ? "}" : ")"
    ]));
  }
  let d = {
    props: [
      Re(
        l,
        a || de("() => {}", !1, o)
      )
    ]
  };
  return s && (d = s(d)), c && (d.props[0].value = n.cache(d.props[0].value)), d.props.forEach((u) => u.key.isHandlerKey = !0), d;
}, kv = (e, t) => {
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
          if (yi(i) || i.type === 8) {
            const l = [];
            (i.type !== 2 || i.content !== " ") && l.push(i), !t.ssr && kt(i, t) === 0 && l.push(
              1 + (Q.NODE_ENV !== "production" ? ` /* ${eo[1]} */` : "")
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
}, _c = /* @__PURE__ */ new WeakSet(), Cv = (e, t) => {
  if (e.type === 1 && Et(e, "once", !0))
    return _c.has(e) || t.inVOnce || t.inSSR ? void 0 : (_c.add(e), t.inVOnce = !0, t.helper(Nr), () => {
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
    ), zo();
  const r = s.loc.source.trim(), i = s.type === 4 ? s.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(Se(44, s.loc)), zo();
  if (!i.trim() || !nf(s))
    return n.onError(
      Se(42, s.loc)
    ), zo();
  const a = o || de("modelValue", !0), c = o ? wt(o) ? `onUpdate:${Ce(o.content)}` : Kt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let d;
  const u = n.isTS ? "($event: any)" : "$event";
  d = Kt([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Re(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Re(c, d)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((h) => h.content).map((h) => (Ql(h) ? h : JSON.stringify(h)) + ": true").join(", "), g = o ? wt(o) ? `${o.content}Modifiers` : Kt([o, ' + "Modifiers"']) : "modelModifiers";
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
  return zo(p);
};
function zo(e = []) {
  return { props: e };
}
const Ov = /[\w).+\-_$\]]/, $v = (e, t) => {
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
  let s = !1, o = !1, r = !1, i = !1, l = 0, a = 0, c = 0, d = 0, u, p, m, g, h = [];
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
      g === void 0 ? (d = m + 1, g = n.slice(0, m).trim()) : I();
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
        let k = m - 1, _;
        for (; k >= 0 && (_ = n.charAt(k), _ === " "); k--)
          ;
        (!_ || !Ov.test(_)) && (i = !0);
      }
    }
  g === void 0 ? g = n.slice(0, m).trim() : d !== 0 && I();
  function I() {
    h.push(n.slice(d, m).trim()), d = m + 1;
  }
  if (h.length) {
    for (Q.NODE_ENV !== "production" && kr(
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
const wc = /* @__PURE__ */ new WeakSet(), Dv = (e, t) => {
  if (e.type === 1) {
    const n = Et(e, "memo");
    return !n || wc.has(e) ? void 0 : (wc.add(e), () => {
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
function Vv(e) {
  return [
    [
      Cv,
      av,
      Dv,
      pv,
      $v,
      ...Q.NODE_ENV !== "production" ? [lv] : [],
      Nv,
      bv,
      gv,
      kv
    ],
    {
      on: Ef,
      bind: fv,
      model: wf
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
var at = {};
const xf = Symbol(at.NODE_ENV !== "production" ? "vModelRadio" : ""), Nf = Symbol(
  at.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Sf = Symbol(at.NODE_ENV !== "production" ? "vModelText" : ""), kf = Symbol(
  at.NODE_ENV !== "production" ? "vModelSelect" : ""
), nl = Symbol(
  at.NODE_ENV !== "production" ? "vModelDynamic" : ""
), Cf = Symbol(
  at.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Of = Symbol(
  at.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), $f = Symbol(at.NODE_ENV !== "production" ? "vShow" : ""), ta = Symbol(at.NODE_ENV !== "production" ? "Transition" : ""), Tf = Symbol(
  at.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
sg({
  [xf]: "vModelRadio",
  [Nf]: "vModelCheckbox",
  [Sf]: "vModelText",
  [kf]: "vModelSelect",
  [nl]: "vModelDynamic",
  [Cf]: "withModifiers",
  [Of]: "withKeys",
  [$f]: "vShow",
  [ta]: "Transition",
  [Tf]: "TransitionGroup"
});
let gs;
function Mv(e, t = !1) {
  return gs || (gs = document.createElement("div")), t ? (gs.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, gs.children[0].getAttribute("foo")) : (gs.innerHTML = e, gs.textContent);
}
const Pv = {
  parseMode: "html",
  isVoidTag: rp,
  isNativeTag: (e) => Ic(e) || Mc(e) || Pc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Mv,
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
  const n = Ac(e);
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
    at.NODE_ENV !== "production" ? Fv : void 0
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
        s ? kt(s, n) > 0 ? s : Ke(
          n.helperString(Xr),
          [s],
          o
        ) : de("", !0)
      )
    ]
  };
}, Hv = (e, t, n) => {
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
    const l = Et(t, "bind");
    l && Vn(l.arg, "value") && n.onError(
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
      const c = wo(t, "type");
      if (c) {
        if (c.type === 7)
          l = nl;
        else if (c.value)
          switch (c.value.content) {
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
              at.NODE_ENV !== "production" && o();
              break;
          }
      } else yg(t) ? l = nl : at.NODE_ENV !== "production" && o();
    } else r === "select" ? l = kf : at.NODE_ENV !== "production" && o();
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
), zv = /* @__PURE__ */ Ye("left,right"), Df = /* @__PURE__ */ Ye("onkeyup,onkeydown,onkeypress"), Wv = (e, t, n, s) => {
  const o = [], r = [], i = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ls(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Uv(a) ? i.push(a) : zv(a) ? wt(e) ? Df(e.content.toLowerCase()) ? o.push(a) : r.push(a) : (o.push(a), r.push(a)) : qv(a) ? r.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: r,
    eventOptionModifiers: i
  };
}, xc = (e, t) => wt(e) && e.content.toLowerCase() === "onclick" ? de(t, !0) : e.type !== 4 ? Kt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Kv = (e, t, n) => Ef(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: r, value: i } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = Wv(r, o, n, e.loc);
  if (a.includes("right") && (r = xc(r, "onContextmenu")), a.includes("middle") && (r = xc(r, "onMouseup")), a.length && (i = Ke(n.helper(Cf), [
    i,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!wt(r) || Df(r.content.toLowerCase())) && (i = Ke(n.helper(Of), [
    i,
    JSON.stringify(l)
  ])), c.length) {
    const d = c.map(rn).join("");
    r = wt(r) ? de(`${r.content}${d}`, !0) : Kt(["(", r, `) + "${d}"`]);
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
    needRuntime: n.helper($f)
  };
}, Yv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === ta)
    return () => {
      if (!e.children.length)
        return;
      Vf(e) && t.onError(
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
function Vf(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Vf);
}
const Jv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (at.NODE_ENV !== "production" && t.onError(
    qt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Xv(e, t) {
  return e === "template" ? !0 : e in Nc ? Nc[e].has(t) : t in Sc ? Sc[t].has(e) : !(e in kc && kc[e].has(t) || t in Cc && Cc[t].has(e));
}
const vs = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Wn = /* @__PURE__ */ new Set([]), Nc = {
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
}, Sc = {
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
  ...at.NODE_ENV !== "production" ? [Yv, Qv] : []
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
  xd();
}
Zs.NODE_ENV !== "production" && ny();
const Oc = /* @__PURE__ */ Object.create(null);
function sy(e, t) {
  if (!le(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Zs.NODE_ENV !== "production" && Me("invalid template option: ", e), De;
  const n = zf(e, t), s = Oc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Zs.NODE_ENV !== "production" && !a && Me(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
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
    const d = c ? a.message : `Template compilation error: ${a.message}`, u = a.loc && Yf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Me(u ? `${d}
${u}` : d);
  }
  const l = new Function("Vue", r)(X0);
  return l._rc = !0, Oc[n] = l;
}
bd(sy);
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
    const n = e, s = t, o = W(!1), r = X(() => n.href ? "a" : "button"), i = (d, u = "") => {
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
      if (p[d])
        return p[d];
      const m = (I = (h = (g = window.Shopline) == null ? void 0 : g.theme) == null ? void 0 : h.settings) == null ? void 0 : I[d];
      if (m != null && m !== "")
        return m;
      try {
        const k = "--" + d.replace(/_/g, "-"), _ = getComputedStyle(document.documentElement).getPropertyValue(k).trim();
        if (_) return _;
      } catch {
      }
      return u;
    }, l = X(() => {
      const d = {};
      if (n.rounded === "full")
        d.borderRadius = "9999px";
      else if (n.rounded === "none")
        d.borderRadius = "0";
      else if (n.buttonRadius !== null)
        d.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius;
      else {
        const u = i("button_border_radius", "6");
        d.borderRadius = typeof u == "number" || !isNaN(u) ? `${u}px` : u;
      }
      return n.variant === "primary" ? (o.value ? d.backgroundColor = i("button_primary_bg_hover", "#b91c1c") : d.backgroundColor = i("button_primary_bg", "#dc2626"), d.color = i("button_primary_text", "white")) : n.variant === "secondary" ? (o.value ? d.backgroundColor = i("button_secondary_bg_hover", "#f9fafb") : d.backgroundColor = i("button_secondary_bg", "white"), d.color = i("button_secondary_text", "#374151"), d.borderColor = i("button_secondary_border", "#d1d5db")) : n.variant === "link" && (o.value ? d.color = i("button_primary_bg_hover", "#b91c1c") : d.color = i("button_primary_bg", "#dc2626")), d;
    }), a = X(() => {
      const d = [
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      ];
      n.fullWidth && d.push("w-full");
      const u = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
      };
      return d.push(u[n.size]), n.variant === "primary" ? d.push(
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
    }), c = (d) => {
      !n.disabled && !n.loading && s("click", d);
    };
    return (d, u) => (x(), ct(Nl(r.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ee(a.value),
      style: qe(l.value),
      onClick: c,
      onMouseenter: u[0] || (u[0] = (p) => o.value = !0),
      onMouseleave: u[1] || (u[1] = (p) => o.value = !1)
    }, {
      default: Pe(() => [
        e.loading ? (x(), S("svg", oy, u[2] || (u[2] = [
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
        ]))) : F("", !0),
        jn(d.$slots, "default", {}, void 0, !0)
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
    const n = e, s = t, o = ut(), r = X({
      get: () => n.modelValue,
      set: (d) => {
        var p, m, g;
        const u = Math.max(n.min, Math.min(n.max, d));
        if (s("update:modelValue", u), s("update", u), ((g = (m = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : m.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const h = o.vnode.el.parentElement, I = h.getAttribute("data-line-key");
          if (I) {
            const k = new CustomEvent("quantity-update", {
              detail: { key: I, value: u },
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
    }, a = (d) => {
      const u = parseInt(d.target.value) || n.min;
      r.value = u;
    }, c = (d) => {
      const u = parseInt(d.target.value) || n.min;
      r.value = u, d.target.value = r.value;
    };
    return (d, u) => (x(), S("div", {
      class: Ee(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      f("button", {
        type: "button",
        class: Ee(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
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
      ]), 10, iy),
      f("input", {
        type: "number",
        class: Ee(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, ly),
      f("button", {
        type: "button",
        class: Ee(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
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
      ]), 10, ay)
    ], 2));
  }
}, Af = /* @__PURE__ */ Je(cy, [["__scopeId", "data-v-402d2d49"]]), uy = ["data-updating"], dy = { class: "cart-item__content" }, fy = { class: "cart-item__image" }, py = ["href"], hy = ["src", "alt"], my = { class: "cart-item__details" }, gy = { class: "cart-item__header" }, vy = { class: "cart-item__info" }, yy = { class: "cart-item__title" }, by = ["href"], _y = {
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
    const n = e, s = t, o = W(n.item.quantity), r = W(!1), i = W(""), l = X(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = X(() => {
      var p;
      return ((p = n.item.variant) == null ? void 0 : p.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (p) => {
      var k, _, v;
      if (!p && p !== 0) return "$0.00";
      const m = ((k = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : k.money_format) || "${{amount}}";
      (_ = Shopline == null ? void 0 : Shopline.shop) != null && _.currency;
      const g = ((v = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : v.current) || "en", I = new Intl.NumberFormat(g, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(p));
      return m.replace("{{amount}}", I);
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
    return Wt(() => n.item.quantity, (p) => {
      o.value = p;
    }), (p, m) => (x(), S("div", {
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
                }, H(e.item.product_title), 9, by)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (x(), S("p", _y, H(e.item.variant_title), 1)) : F("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (x(), S("div", Ey, [
                (x(!0), S(re, null, me(e.item.properties, (g, h) => (x(), S("p", {
                  key: h,
                  class: "cart-item__property"
                }, [
                  f("span", wy, H(h) + ":", 1),
                  je(" " + H(g), 1)
                ]))), 128))
              ])) : F("", !0)
            ]),
            f("div", xy, [
              f("p", Ny, H(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), S("p", Sy, H(c(e.item.original_price * e.item.quantity)), 1)) : F("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (x(), S("div", ky, [
            (x(!0), S(re, null, me(e.item.discounts, (g) => (x(), S("div", {
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
              je(" " + H(g.title) + " (-" + H(c(g.amount || g.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : F("", !0),
          f("div", Cy, [
            f("div", Oy, [
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
                onClick: u,
                class: "cart-item__remove",
                disabled: r.value,
                "aria-label": "Remove item from cart"
              }, [
                r.value ? (x(), S("svg", Dy, m[3] || (m[3] = [
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
              ], 8, $y)
            ]),
            f("div", Vy, [
              f("p", Ay, H(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), S("p", Iy, H(c(e.item.original_price * e.item.quantity)), 1)) : F("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), S("p", My, " Save " + H(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : F("", !0)
            ])
          ]),
          a.value ? (x(), S("p", Py, " Only " + H(e.item.variant.inventory_quantity) + " left in stock ", 1)) : F("", !0),
          i.value ? (x(), S("p", Ry, H(i.value), 1)) : F("", !0)
        ])
      ])
    ], 8, uy));
  }
}, If = /* @__PURE__ */ Je(Ly, [["__scopeId", "data-v-6f2d5a63"]]), Fy = {
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
    const t = W(!1), n = W([]), s = W(0), o = X(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/cart";
    }), r = X(() => {
      var h, I;
      return ((I = (h = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : h.settings) == null ? void 0 : I.free_shipping_threshold) || 50;
    }), i = X(() => {
      var g, h;
      return ((h = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : h.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var v, $, E, M;
      if (!g && g !== 0) return "$0.00";
      const h = ((v = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : v.money_format) || "${{amount}}";
      ($ = Shopline == null ? void 0 : Shopline.shop) != null && $.money_with_currency_format, (E = Shopline == null ? void 0 : Shopline.shop) != null && E.currency;
      const I = ((M = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : M.current) || "en", _ = new Intl.NumberFormat(I, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(g));
      return h.replace("{{amount}}", _);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", d();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, d = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, u = async ({ key: g, quantity: h }) => {
      await window.OrionCart.updateItem(g, h), d();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), d();
    }, m = (g) => {
      g.key === "Escape" && t.value && c();
    };
    return He(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", m);
    }), Ot(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", m);
    }), (g, h) => (x(), ct(bn, { to: "body" }, [
      ue(ot, { name: "drawer" }, {
        default: Pe(() => [
          t.value ? (x(), S("div", Fy, [
            f("div", By, [
              ue(ot, { name: "fade" }, {
                default: Pe(() => [
                  t.value ? (x(), S("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: c
                  })) : F("", !0)
                ]),
                _: 1
              }),
              f("div", jy, [
                ue(ot, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Pe(() => [
                    t.value ? (x(), S("div", Hy, [
                      f("div", Uy, [
                        f("div", qy, [
                          f("div", null, [
                            h[0] || (h[0] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (x(), S("p", zy, H(n.value.length) + " " + H(n.value.length === 1 ? "item" : "items"), 1)) : F("", !0)
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
                          n.value.length === 0 ? (x(), S("div", Ky, [
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
                              default: Pe(() => h[2] || (h[2] = [
                                je(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (x(), S("div", Gy, [
                            (x(!0), S(re, null, me(n.value, (I) => (x(), ct(If, {
                              key: I.key,
                              item: I,
                              onUpdate: u,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (x(), S("div", Yy, [
                          i.value ? (x(), S("div", {
                            key: 0,
                            class: Ee([s.value >= r.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "p-3"]),
                            style: { borderRadius: "var(--button-radius)" }
                          }, [
                            s.value >= r.value ? (x(), S("div", Jy, h[6] || (h[6] = [
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
                            ]))) : (x(), S("div", Xy, [
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
                              f("p", Qy, " Add " + H(l(
                                r.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < r.value ? (x(), S("div", Zy, [
                              f("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: qe(`width: ${Math.min(
                                  s.value / r.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])) : F("", !0)
                          ], 2)) : F("", !0),
                          f("div", null, [
                            f("div", e1, [
                              h[8] || (h[8] = f("p", null, "Subtotal", -1)),
                              f("p", null, H(l(s.value)), 1)
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
                              default: Pe(() => h[10] || (h[10] = [
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
                              default: Pe(() => h[11] || (h[11] = [
                                je(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [11]
                            })
                          ])
                        ])) : F("", !0)
                      ])
                    ])) : F("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : F("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Mf = /* @__PURE__ */ Je(n1, [["__scopeId", "data-v-8da1cccd"]]), s1 = {
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
    const n = e, s = X(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = X(() => n.customerUrl || window.mobileMenuCustomerUrl || "/account"), r = X(() => n.showLocalization || window.mobileMenuShowLocalization || !1), i = W(!1), l = W([]), a = () => {
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
    }), He(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", c);
      const u = (p) => {
        p.key === "Escape" && i.value && c();
      };
      document.addEventListener("keydown", u), Ot(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", c), document.removeEventListener("keydown", u);
      });
    }), (u, p) => (x(), S("div", null, [
      (x(), ct(bn, { to: "body" }, [
        ue(ot, { name: "menu" }, {
          default: Pe(() => [
            i.value ? (x(), S("div", s1, [
              f("div", o1, [
                ue(ot, { name: "fade" }, {
                  default: Pe(() => [
                    i.value ? (x(), S("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : F("", !0)
                  ]),
                  _: 1
                }),
                f("div", r1, [
                  ue(ot, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      i.value ? (x(), S("div", i1, [
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
                                s.value.length === 0 ? (x(), S("li", d1, p[4] || (p[4] = [
                                  f("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : F("", !0),
                                (x(!0), S(re, null, me(s.value, (m) => (x(), S("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (x(), S("div", f1, [
                                    f("button", {
                                      onClick: (g) => d(
                                        m.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      f("span", null, H(m.title), 1),
                                      (x(), S("svg", {
                                        class: Ee(["h-5 w-5 transition-transform duration-200", {
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
                                    ue(ot, { name: "submenu" }, {
                                      default: Pe(() => [
                                        l.value.includes(
                                          m.title
                                        ) ? (x(), S("ul", h1, [
                                          (x(!0), S(re, null, me(m.links, (g) => (x(), S("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (x(), S("div", m1, [
                                              f("button", {
                                                onClick: (h) => d(
                                                  `${m.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                f("span", null, H(g.title), 1),
                                                (x(), S("svg", {
                                                  class: Ee(["h-4 w-4 transition-transform duration-200", {
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
                                              ue(ot, { name: "submenu" }, {
                                                default: Pe(() => [
                                                  l.value.includes(
                                                    `${m.title}-${g.title}`
                                                  ) ? (x(), S("ul", v1, [
                                                    (x(!0), S(re, null, me(g.links, (h) => (x(), S("li", {
                                                      key: h.id || h.title
                                                    }, [
                                                      f("a", {
                                                        href: h.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: p[0] || (p[0] = (...I) => c && c(...I))
                                                      }, H(h.title), 9, y1)
                                                    ]))), 128))
                                                  ])) : F("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (x(), S("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: p[1] || (p[1] = (...h) => c && c(...h))
                                            }, H(g.title), 9, b1))
                                          ]))), 128))
                                        ])) : F("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (x(), S("a", {
                                    key: 1,
                                    href: m.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: c
                                  }, H(m.title), 9, _1))
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
                            r.value ? (x(), S("div", N1, [
                              jn(u.$slots, "localization", {}, void 0, !0)
                            ])) : F("", !0)
                          ])
                        ])
                      ])) : F("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : F("", !0)
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
}, Y1 = { class: "p-4 bg-yellow-50 border border-yellow-200 rounded-md" }, J1 = { class: "text-xs text-yellow-700" }, X1 = { class: "text-xs text-yellow-700" }, Q1 = { class: "text-xs text-yellow-700" }, Z1 = { class: "mt-2" }, eb = { class: "text-xs mt-2 overflow-auto" }, tb = {
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
    const n = e, s = t, o = (N, y) => {
      const V = document.getElementById("variantPicker");
      V && V.dispatchEvent(new CustomEvent(N, { detail: y, bubbles: !0 }));
    }, r = W({}), i = W(null), l = () => n.product && n.product.id ? (console.log("Using product from props:", n.product), n.product) : window.productPageData && window.productPageData.product ? (console.log(
      "Using product from window.productPageData:",
      window.productPageData.product
    ), window.productPageData.product) : (console.log("No product data found, returning empty object"), {}), a = W(l()), c = X(() => a.value.variants || []), d = X(() => {
      if (a.value.options && a.value.options.length > 0)
        return a.value.options.map((y, V) => ({
          ...y,
          position: y.position || V + 1
        }));
      const N = [];
      if (c.value.length > 0) {
        if (c.value[0].option1) {
          const y = [
            ...new Set(
              c.value.map((V) => V.option1).filter(Boolean)
            )
          ];
          N.push({
            name: "Size",
            position: 1,
            values: y
          });
        }
        if (c.value[0].option2) {
          const y = [
            ...new Set(
              c.value.map((V) => V.option2).filter(Boolean)
            )
          ];
          N.push({
            name: "Color",
            position: 2,
            values: y
          });
        }
        if (c.value[0].option3) {
          const y = [
            ...new Set(
              c.value.map((V) => V.option3).filter(Boolean)
            )
          ];
          N.push({
            name: "Option",
            position: 3,
            values: y
          });
        }
      }
      return N;
    }), u = X(
      () => a.value.options_with_values || d.value
    );
    He(() => {
      if (a.value = l(), c.value.length > 0) {
        let N = null;
        if (n.selectedVariantId && (N = c.value.find(
          (y) => y.id == n.selectedVariantId
        )), N || (N = c.value.find((y) => y.available) || c.value[0]), N) {
          if (console.log("Initializing with variant:", N), N.option1) {
            const y = d.value.find(
              (V) => V.position === 1
            );
            y && (r.value[y.name] = N.option1);
          }
          if (N.option2) {
            const y = d.value.find(
              (V) => V.position === 2
            );
            y && (r.value[y.name] = N.option2);
          }
          if (N.option3) {
            const y = d.value.find(
              (V) => V.position === 3
            );
            y && (r.value[y.name] = N.option3);
          }
          fs(() => {
            p(N);
          });
        }
      }
    });
    const p = (N) => {
      i.value = N, d.value.forEach((y, V) => {
        r.value[y.name] = N[`option${V + 1}`];
      }), n.updateUrl && N && m(N), N && N.featured_media && (s("media-change", N.featured_media), o("media-change", N.featured_media)), s("variant-change", N), o("variant-change", N), console.log("Variant selected:", N);
    }, m = (N) => {
      const y = new URL(window.location);
      N && N.id ? y.searchParams.set("sku", N.id) : y.searchParams.delete("sku"), window.history.replaceState({}, document.title, y.toString());
    }, g = (N, y) => {
      console.log("Option clicked:", N, y), r.value[N] = y;
      const V = c.value.find((P) => d.value.every((B, J) => {
        const ne = r.value[B.name];
        return P[`option${J + 1}`] === ne;
      }));
      console.log("Matching variant found:", V), V && (p(V), n.sectionId && h(V));
    }, h = async (N) => {
      if (!(!N || !N.id))
        try {
          const y = await fetch(
            `${window.location.pathname}?sku=${N.id}&section_id=${n.sectionId}`,
            {
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }
          );
          if (!y.ok) throw new Error("Failed to fetch product info");
          const V = await y.text(), B = new DOMParser().parseFromString(V, "text/html");
          s("product-info-update", {
            variant: N,
            html: B
          });
        } catch (y) {
          console.error("Error fetching product info:", y);
        }
    }, I = (N) => r.value[N] || "";
    Wt(
      () => n.selectedVariantId,
      (N) => {
        if (N) {
          const y = c.value.find((V) => V.id == N);
          y && p(y);
        }
      }
    );
    const k = (N, y) => r.value[N] === y, _ = (N, y) => {
      const V = d.value.findIndex(
        (P) => P.name === N
      );
      return c.value.some((P) => {
        const B = P[`option${V + 1}`] === y, J = d.value.every((ne, te) => {
          if (ne.name === N) return !0;
          const _e = r.value[ne.name];
          return _e ? P[`option${te + 1}`] === _e : !0;
        });
        return B && J && P.available;
      });
    }, v = (N) => {
      if (!N) return !1;
      const y = N.toLowerCase();
      return y === "color" || y === "colour" || y.includes("color") || y.includes("colour");
    }, $ = (N) => {
      const V = {
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
      }[N.toLowerCase()];
      return V || (N.startsWith("#") ? N : "#E5E7EB");
    }, E = (N) => u.value.some(
      (y) => y.name === N.name && y.values_images && y.values_images.length > 0
    ), M = (N) => {
      const y = u.value.find(
        (V) => V.name === N.name
      );
      return !y || !y.values_images ? N.values.map((V) => ({ value: V, image: null })) : y.values_images;
    }, C = (N, y = 100) => N ? typeof N == "string" ? N : N.src ? N.src : "" : "", T = (N, y) => {
      const V = k(N, y), P = _(N, y);
      return {
        padding: "0.5rem 1rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: V ? "rgb(17 24 39)" : "rgb(209 213 219)",
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        color: V ? "rgb(255 255 255)" : "rgb(55 65 81)",
        backgroundColor: V ? "rgb(17 24 39)" : "rgb(255 255 255)",
        transition: "all 200ms",
        cursor: P ? "pointer" : "not-allowed",
        opacity: P ? "1" : "0.3",
        textDecoration: P ? "none" : "line-through",
        display: "inline-block",
        textAlign: "center",
        userSelect: "none"
      };
    }, b = (N) => {
      const y = k("Color", N), V = _("Color", N), P = $(N), B = P.toLowerCase() === "#ffffff" || N.toLowerCase() === "white";
      return {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        borderWidth: y ? "3px" : "2px",
        borderStyle: "solid",
        borderColor: y ? "rgb(17 24 39)" : "rgb(229 231 235)",
        backgroundColor: P,
        position: "relative",
        overflow: "hidden",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: V ? "pointer" : "not-allowed",
        opacity: V ? "1" : "0.4",
        boxShadow: y ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        transform: y ? "scale(1.1)" : "scale(1)"
      };
    }, D = (N, y, V) => {
      const P = k("Color", y);
      _("Color", y) && (V ? (N.target.style.transform = P ? "scale(1.1)" : "scale(1.05)", N.target.style.boxShadow = P ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)") : (N.target.style.transform = P ? "scale(1.1)" : "scale(1)", N.target.style.boxShadow = P ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"));
    };
    return (N, y) => (x(), S("div", C1, [
      c.value.length === 1 && d.value.length === 0 ? (x(), S("div", O1, [
        y[0] || (y[0] = f("div", { class: "text-sm text-gray-600 mb-2" }, "Selected Option:", -1)),
        f("div", $1, H(c.value[0].title), 1)
      ])) : d.value.length > 0 ? (x(), S("div", T1, [
        (x(!0), S(re, null, me(d.value, (V) => (x(), S("div", {
          key: V.name,
          class: "variant-option mb-6"
        }, [
          f("h3", D1, [
            je(H(V.name || "Option") + ": ", 1),
            f("span", V1, H(I(V.name) || "Select"), 1)
          ]),
          E(V) ? (x(), S("div", A1, [
            (x(!0), S(re, null, me(M(
              V
            ), (P, B) => (x(), S("button", {
              key: P.value,
              type: "button",
              class: Ee([
                "variant-image-button",
                k(V.name, P.value) ? "variant-image-button--selected" : "",
                _(V.name, P.value) ? "" : "variant-image-button--unavailable"
              ]),
              title: P.value,
              "aria-label": `Select ${V.name} ${P.value}`,
              disabled: !_(V.name, P.value),
              onClick: (J) => g(V.name, P.value)
            }, [
              P.image ? (x(), S("img", {
                key: 0,
                src: C(P.image, 100),
                alt: P.value,
                class: "w-full h-full object-cover"
              }, null, 8, M1)) : (x(), S("span", P1, H(P.value), 1))
            ], 10, I1))), 128))
          ])) : v(V.name) ? (x(), S("div", R1, [
            (x(!0), S(re, null, me(V.values, (P) => (x(), S("button", {
              key: P,
              type: "button",
              class: Ee([
                "color-swatch",
                k(V.name, P) ? "color-swatch--selected" : "",
                _(V.name, P) ? "" : "color-swatch--unavailable"
              ]),
              style: qe(b(P)),
              title: P,
              "aria-label": `Select ${V.name} ${P}`,
              disabled: !_(V.name, P),
              onClick: Ct((B) => g(V.name, P), ["stop"]),
              onMouseenter: (B) => D(B, P, !0),
              onMouseleave: (B) => D(B, P, !1)
            }, [
              f("span", F1, H(P), 1),
              k(V.name, P) ? (x(), S("span", B1, [
                (x(), S("svg", j1, y[1] || (y[1] = [
                  f("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd",
                    style: { fill: "white", stroke: "black", "stroke-width": "0.5px", "paint-order": "stroke" }
                  }, null, -1)
                ])))
              ])) : F("", !0)
            ], 46, L1))), 128))
          ])) : (x(), S("div", H1, [
            (x(!0), S(re, null, me(V.values, (P) => (x(), S("button", {
              key: P,
              type: "button",
              class: Ee([
                "variant-button",
                k(V.name, P) ? "variant-button--selected" : "",
                _(V.name, P) ? "" : "variant-button--unavailable"
              ]),
              style: qe(T(V.name, P)),
              "aria-label": `Select ${V.name} ${P}`,
              disabled: !_(V.name, P),
              onClick: Ct((B) => g(V.name, P), ["stop"]),
              onMouseenter: (B) => B.target.style.backgroundColor = k(V.name, P) ? "rgb(31 41 55)" : "rgb(249 250 251)",
              onMouseleave: (B) => B.target.style.backgroundColor = k(V.name, P) ? "rgb(17 24 39)" : "rgb(255 255 255)"
            }, H(P), 47, U1))), 128))
          ]))
        ]))), 128))
      ])) : c.value.length === 1 && d.value.length > 0 ? (x(), S("div", q1, [
        (x(!0), S(re, null, me(d.value, (V) => (x(), S("div", {
          key: V.name,
          class: "mb-4"
        }, [
          f("h3", z1, H(V.name) + ": ", 1),
          f("div", W1, [
            f("span", K1, H(c.value[0][`option${d.value.indexOf(V) + 1}`] || V.values[0]), 1)
          ])
        ]))), 128))
      ])) : F("", !0),
      c.value.length === 0 && d.value.length === 0 ? (x(), S("div", G1, [
        f("div", Y1, [
          y[3] || (y[3] = f("p", { class: "text-sm text-yellow-800 font-medium mb-2" }, " Variant Picker Debug Info: ", -1)),
          f("p", J1, " Product Data Loaded: " + H(a.value ? "Yes" : "No"), 1),
          f("p", X1, " Number of Options: " + H(d.value.length), 1),
          f("p", Q1, " Number of Variants: " + H(c.value.length), 1),
          f("details", Z1, [
            y[2] || (y[2] = f("summary", { class: "text-xs text-yellow-700 cursor-pointer" }, " View Raw Data ", -1)),
            f("pre", eb, H(JSON.stringify(a.value, null, 2)), 1)
          ])
        ])
      ])) : F("", !0)
    ]));
  }
};
function nb(e) {
  return cl() ? (jc(e), !0) : !1;
}
function na(e) {
  return typeof e == "function" ? e() : Co(e);
}
const sb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ob = Object.prototype.toString, rb = (e) => ob.call(e) === "[object Object]", So = () => {
};
function ib(e, t) {
  function n(...s) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(r);
    });
  }
  return n;
}
function lb(...e) {
  let t = 0, n, s = !0, o = So, r, i, l, a, c;
  !Ie(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [i, l = !0, a = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = So);
  };
  return (p) => {
    const m = na(i), g = Date.now() - t, h = () => r = p();
    return d(), m <= 0 ? (t = Date.now(), h()) : (g > m && (a || !s) ? (t = Date.now(), h()) : l && (r = new Promise((I, k) => {
      o = c ? k : I, n = setTimeout(() => {
        t = Date.now(), s = !0, I(h()), d();
      }, Math.max(0, m - g));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, r);
  };
}
function ab(e, t = 200, n = !1, s = !0, o = !1) {
  return ib(
    lb(t, n, s, o),
    e
  );
}
function cb(e) {
  var t;
  const n = na(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pf = sb ? window : void 0;
function Ei(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Pf) : [t, n, s, o] = e, !t)
    return So;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((d) => d()), r.length = 0;
  }, l = (d, u, p, m) => (d.addEventListener(u, p, m), () => d.removeEventListener(u, p, m)), a = Wt(
    () => [cb(t), na(o)],
    ([d, u]) => {
      if (i(), !d)
        return;
      const p = rb(u) ? { ...u } : u;
      r.push(
        ...n.flatMap((m) => s.map((g) => l(d, m, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), i();
  };
  return nb(c), c;
}
function ub(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: r,
    passive: i = !0,
    window: l = Pf
  } = t, a = Ss({ x: 0, y: 0 }), c = Ss({ x: 0, y: 0 }), d = X(() => a.x - c.x), u = X(() => a.y - c.y), { max: p, abs: m } = Math, g = X(() => p(m(d.value), m(u.value)) >= n), h = W(!1), I = X(() => g.value ? m(d.value) > m(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), k = (b) => [b.touches[0].clientX, b.touches[0].clientY], _ = (b, D) => {
    a.x = b, a.y = D;
  }, v = (b, D) => {
    c.x = b, c.y = D;
  };
  let $;
  const E = db(l == null ? void 0 : l.document);
  i ? $ = E ? { passive: !0 } : { capture: !1 } : $ = E ? { passive: !1, capture: !0 } : { capture: !0 };
  const M = (b) => {
    h.value && (o == null || o(b, I.value)), h.value = !1;
  }, C = [
    Ei(e, "touchstart", (b) => {
      if (b.touches.length !== 1)
        return;
      $.capture && !$.passive && b.preventDefault();
      const [D, N] = k(b);
      _(D, N), v(D, N), r == null || r(b);
    }, $),
    Ei(e, "touchmove", (b) => {
      if (b.touches.length !== 1)
        return;
      const [D, N] = k(b);
      v(D, N), !h.value && g.value && (h.value = !0), h.value && (s == null || s(b));
    }, $),
    Ei(e, ["touchend", "touchcancel"], M, $)
  ];
  return {
    isPassiveEventSupported: E,
    isSwiping: h,
    direction: I,
    coordsStart: a,
    coordsEnd: c,
    lengthX: d,
    lengthY: u,
    stop: () => C.forEach((b) => b())
  };
}
function db(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", So, n), e.removeEventListener("x", So), t;
}
const fb = { class: "sticky-header-container" }, pb = {
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
    const t = e, n = W(null), s = W(!1), o = W(!1), r = W(!1), i = W(!1), l = W("#ffffff"), a = W(0), c = W(0), d = X(() => I.value ? `${c.value}px` : "0");
    let u = 0;
    const p = X(() => {
      const _ = {};
      return I.value && s.value && (_.position = "fixed", _.top = "0", _.left = "0", _.right = "0", _.zIndex = "40", o.value ? _.transform = "translateY(-100%)" : _.transform = "translateY(0)"), i.value && (a.value === 0 ? _.backgroundColor = "transparent" : I.value && s.value && (_.backgroundColor = l.value)), _.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", _;
    }), m = () => {
      var $, E, M;
      const _ = (E = ($ = n.value) == null ? void 0 : $.getRootNode()) == null ? void 0 : E.host;
      if (!_) return;
      _.classList.add("sticky-header-wrapper");
      const v = (M = n.value) == null ? void 0 : M.querySelector(".main-header");
      v && i.value && (a.value === 0 ? (v.style.backgroundColor = "transparent", v.style.borderBottomColor = "transparent") : I.value && s.value && (v.style.backgroundColor = l.value, v.style.borderBottomColor = "#e5e7eb"));
    }, g = ab(() => {
      if (!I.value)
        return;
      const _ = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = _, s.value = _ > 0, r.value = _ > 10, h.value && s.value) {
        const v = _ - u;
        Math.abs(v) > 5 && (v > 0 && _ > c.value ? o.value = !0 : v < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(_ - u) > 1 && (u = _), m();
    }, 50), h = W(t.hideOnScrollDown), I = W(t.sticky), k = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return He(() => {
      if (n.value) {
        const _ = n.value.getRootNode().host;
        if (_) {
          _.classList.add("sticky-header-wrapper"), i.value = _.classList.contains("header-transparent");
          const v = _.getAttribute("data-hide-on-scroll-down"), $ = _.getAttribute("data-sticky"), E = _.getAttribute("data-sticky-bg");
          v !== null && (h.value = v === "true"), $ !== null && (I.value = $ === "true"), E !== null && (l.value = E || "#ffffff"), setTimeout(k, 100), window.addEventListener("resize", k);
        }
      }
      window.addEventListener("scroll", g, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), g();
    }), Ot(() => {
      window.removeEventListener("scroll", g), window.removeEventListener("resize", k);
    }), (_, v) => (x(), S("div", fb, [
      I.value && s.value ? (x(), S("div", {
        key: 0,
        class: "header-placeholder",
        style: qe({ height: d.value })
      }, null, 4)) : F("", !0),
      f("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: Ee(["sticky-header-inner", {
          "is-fixed": I.value && s.value,
          "is-hidden": o.value,
          "has-shadow": r.value,
          "is-transparent": i.value && a.value === 0
        }]),
        style: qe(p.value)
      }, [
        jn(_.$slots, "default")
      ], 6)
    ]));
  }
}, hb = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, mb = { class: "main-header__wrapper" }, gb = {
  href: "/",
  class: "main-header__logo"
}, vb = ["src", "alt"], yb = {
  key: 1,
  class: "text-xl font-bold"
}, bb = { class: "main-header__nav hidden lg:flex" }, _b = ["href"], Eb = { class: "main-header__actions" }, wb = ["href"], xb = {
  key: 0,
  class: "cart-count"
}, Nb = { class: "search-overlay__container" }, Sb = {
  action: "/search",
  method: "get",
  class: "search-form"
}, kb = {
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
    const t = e, n = W(null), s = W(!1), o = W(0), r = X(() => {
      var d, u;
      return t.customer ? ((d = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : d.account) || "/account" : ((u = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : u.account_login) || "/account/login";
    }), i = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, l = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, a = async () => {
      var d;
      s.value = !s.value, s.value && (await fs(), (d = n.value) == null || d.focus());
    }, c = () => {
      var d;
      (d = window.OrionCart) != null && d.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return He(() => {
      document.addEventListener("cart:updated", c), c();
    }), Ot(() => {
      document.removeEventListener("cart:updated", c);
    }), (d, u) => (x(), S("div", hb, [
      f("div", mb, [
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
        f("a", gb, [
          e.logoUrl ? (x(), S("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, vb)) : (x(), S("span", yb, H(e.shopName), 1))
        ]),
        f("nav", bb, [
          (x(!0), S(re, null, me(e.navigationLinks, (p) => (x(), S("a", {
            key: p.url,
            href: p.url,
            class: "nav-link"
          }, H(p.title), 9, _b))), 128))
        ]),
        f("div", Eb, [
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
          ]), 8, wb),
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
            o.value > 0 ? (x(), S("span", xb, H(o.value), 1)) : F("", !0)
          ])
        ])
      ]),
      (x(), ct(bn, { to: "body" }, [
        ue(ot, { name: "fade" }, {
          default: Pe(() => [
            s.value ? (x(), S("div", {
              key: 0,
              class: "search-overlay",
              onClick: Ct(a, ["self"])
            }, [
              f("div", Nb, [
                f("form", Sb, [
                  f("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: Er(a, ["esc"])
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
            ])) : F("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, Rf = /* @__PURE__ */ Je(kb, [["__scopeId", "data-v-2dc4d29f"]]), Cb = { class: "site-footer" }, Ob = {
  key: 0,
  class: "newsletter-section"
}, $b = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Tb = { class: "newsletter-content" }, Db = { class: "newsletter-text" }, Vb = { class: "text-xl font-semibold mb-2" }, Ab = { class: "text-gray-600" }, Ib = ["disabled"], Mb = ["disabled"], Pb = { key: 0 }, Rb = { key: 1 }, Lb = { class: "footer-main" }, Fb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Bb = { class: "footer-grid" }, jb = { class: "footer-column" }, Hb = { class: "footer-heading" }, Ub = { class: "text-gray-600 mb-4" }, qb = {
  key: 0,
  class: "social-links"
}, zb = ["href", "aria-label"], Wb = { class: "footer-heading" }, Kb = { class: "footer-links" }, Gb = ["href"], Yb = {
  key: 0,
  class: "footer-column"
}, Jb = { class: "contact-info" }, Xb = {
  key: 0,
  class: "contact-item"
}, Qb = {
  key: 1,
  class: "contact-item"
}, Zb = {
  key: 2,
  class: "contact-item"
}, e_ = {
  key: 0,
  class: "payment-methods"
}, t_ = { class: "payment-icons" }, n_ = ["src", "alt"], s_ = { class: "footer-bottom" }, o_ = { class: "copyright" }, r_ = {
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
    const t = W(""), n = W(!1), s = X(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
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
    return (i, l) => (x(), S("footer", Cb, [
      e.showNewsletter ? (x(), S("div", Ob, [
        f("div", $b, [
          f("div", Tb, [
            f("div", Db, [
              f("h3", Vb, H(e.newsletterTitle), 1),
              f("p", Ab, H(e.newsletterDescription), 1)
            ]),
            f("form", {
              onSubmit: Ct(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              $e(f("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, Ib), [
                [Fn, t.value]
              ]),
              f("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (x(), S("span", Rb, "Subscribing...")) : (x(), S("span", Pb, "Subscribe"))
              ], 8, Mb)
            ], 32)
          ])
        ])
      ])) : F("", !0),
      f("div", Lb, [
        f("div", Fb, [
          f("div", Bb, [
            f("div", jb, [
              f("h4", Hb, H(e.companyName), 1),
              f("p", Ub, H(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (x(), S("div", qb, [
                (x(!0), S(re, null, me(e.socialLinks, (a) => (x(), S("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (x(), ct(Nl(r(a.name))))
                ], 8, zb))), 128))
              ])) : F("", !0)
            ]),
            (x(!0), S(re, null, me(e.footerColumns, (a) => (x(), S("div", {
              key: a.title,
              class: "footer-column"
            }, [
              f("h4", Wb, H(a.title), 1),
              f("ul", Kb, [
                (x(!0), S(re, null, me(a.links, (c) => (x(), S("li", {
                  key: c.title
                }, [
                  f("a", {
                    href: c.url,
                    class: "footer-link"
                  }, H(c.title), 9, Gb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (x(), S("div", Yb, [
              l[4] || (l[4] = f("h4", { class: "footer-heading" }, "Contact", -1)),
              f("div", Jb, [
                e.contactEmail ? (x(), S("p", Xb, [
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
                  je(" " + H(e.contactEmail), 1)
                ])) : F("", !0),
                e.contactPhone ? (x(), S("p", Qb, [
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
                  je(" " + H(e.contactPhone), 1)
                ])) : F("", !0),
                e.contactAddress ? (x(), S("p", Zb, [
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
                  je(" " + H(e.contactAddress), 1)
                ])) : F("", !0)
              ])
            ])) : F("", !0)
          ]),
          e.paymentMethods.length > 0 ? (x(), S("div", e_, [
            l[5] || (l[5] = f("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            f("div", t_, [
              (x(!0), S(re, null, me(e.paymentMethods, (a) => (x(), S("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, n_))), 128))
            ])
          ])) : F("", !0),
          f("div", s_, [
            f("p", o_, " © " + H(s.value) + " " + H(e.companyName) + ". All rights reserved. ", 1),
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
}, i_ = /* @__PURE__ */ Je(r_, [["__scopeId", "data-v-1c1567f0"]]), l_ = ["href"], a_ = ["src", "alt"], c_ = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, u_ = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, d_ = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, f_ = { class: "p-4" }, p_ = {
  key: 0,
  class: "mb-3"
}, h_ = { class: "flex gap-1.5 flex-wrap" }, m_ = ["onClick", "title"], g_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, v_ = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, y_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, b_ = ["href"], __ = { class: "flex items-center gap-1 mb-2" }, E_ = { class: "flex" }, w_ = { class: "flex items-baseline gap-2 mb-4" }, x_ = { class: "text-xl font-bold text-gray-900" }, N_ = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, S_ = ["disabled"], k_ = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, C_ = { key: 1 }, O_ = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, $_ = {
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
    const n = e, s = t, o = W(""), r = W(!1), i = W(!1), l = W(!1), a = W(!1), c = X(() => n.product ? n.product : {
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
    }), d = X(() => {
      const N = c.value.handle;
      return c.value.url || (N ? `/products/${N}` : "#");
    }), u = X(() => {
      var N, y, V;
      return r.value && ((N = c.value.images) != null && N[1]) ? c.value.images[1].src : ((V = (y = c.value.images) == null ? void 0 : y[0]) == null ? void 0 : V.src) || c.value.featured_image || c.value.image || "/placeholder.jpg";
    }), p = X(() => {
      var N;
      return (N = c.value.options) == null ? void 0 : N.some(
        (y) => {
          var V, P;
          return ((V = y.name) == null ? void 0 : V.toLowerCase().includes("color")) || ((P = y.name) == null ? void 0 : P.toLowerCase().includes("colour"));
        }
      );
    }), m = X(() => {
      var y;
      const N = (y = c.value.options) == null ? void 0 : y.find(
        (V) => {
          var P, B;
          return ((P = V.name) == null ? void 0 : P.toLowerCase().includes("color")) || ((B = V.name) == null ? void 0 : B.toLowerCase().includes("colour"));
        }
      );
      return (N == null ? void 0 : N.values) || [];
    }), g = X(() => c.value.price || 0), h = X(() => c.value.compare_at_price || 0), I = X(() => c.value.available && h.value > g.value), k = X(() => I.value ? Math.round((h.value - g.value) / h.value * 100) : 0), _ = X(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: a.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), v = X(() => {
      var N, y, V;
      return ((V = (y = (N = window.Shopline) == null ? void 0 : N.theme) == null ? void 0 : y.settings) == null ? void 0 : V.show_product_card_wishlist) !== !1;
    }), $ = (N) => `$${(N / 100).toFixed(2)}`, E = (N) => {
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
      }, V = N.toLowerCase();
      return y[V] || `#${V.replace("#", "")}`;
    }, M = () => {
      var N;
      ((N = c.value.images) == null ? void 0 : N.length) > 1 && (r.value = !0);
    }, C = () => {
      r.value = !1;
    }, T = (N) => {
      o.value = N.value;
    }, b = () => {
      l.value = !l.value;
    }, D = async () => {
      var N, y, V, P;
      i.value = !0;
      try {
        const B = (y = (N = c.value.variants) == null ? void 0 : N[0]) == null ? void 0 : y.id;
        if (!B)
          throw console.error("No variant ID found for product:", c.value), new Error("No variant ID found");
        const J = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [{
              id: B,
              quantity: 1
            }]
          })
        });
        if (!J.ok)
          throw new Error("Failed to add to cart");
        const ne = await J.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((P = (V = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : V.settings) == null ? void 0 : P.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: B, quantity: 1 });
      } catch (B) {
        console.error("Error adding to cart:", B);
      } finally {
        i.value = !1;
      }
    };
    return (N, y) => (x(), S("div", {
      class: "product-card group relative bg-white transition-all duration-300 overflow-hidden",
      style: qe(_.value),
      onMouseenter: y[2] || (y[2] = (V) => a.value = !0),
      onMouseleave: y[3] || (y[3] = (V) => a.value = !1)
    }, [
      f("a", {
        href: d.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        u.value ? (x(), S("img", {
          key: 0,
          src: u.value,
          alt: c.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: M,
          onMouseleave: C
        }, null, 40, a_)) : (x(), S("div", c_, y[4] || (y[4] = [
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
        I.value ? (x(), S("div", u_, " -" + H(k.value) + "% ", 1)) : F("", !0),
        c.value.available && v.value ? (x(), S("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: Ct(b, ["prevent"])
        }, [
          (x(), S("svg", {
            class: Ee(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, y[5] || (y[5] = [
            f("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : F("", !0),
        c.value.available ? F("", !0) : (x(), S("div", d_, y[6] || (y[6] = [
          f("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, l_),
      f("div", f_, [
        p.value ? (x(), S("div", p_, [
          f("div", h_, [
            (x(!0), S(re, null, me(m.value, (V) => (x(), S("button", {
              key: V.value,
              onClick: (P) => T(V),
              title: V.value,
              class: Ee([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === V.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: qe({ backgroundColor: E(V.value) })
            }, [
              o.value === V.value ? (x(), S("span", g_, y[7] || (y[7] = [
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
              ]))) : F("", !0)
            ], 14, m_))), 128))
          ])
        ])) : F("", !0),
        c.value.vendor ? (x(), S("p", v_, H(c.value.vendor), 1)) : F("", !0),
        f("h3", y_, [
          f("a", {
            href: d.value,
            class: "hover:text-gray-700 transition-colors"
          }, H(c.value.title || "Untitled"), 9, b_)
        ]),
        f("div", __, [
          f("div", E_, [
            (x(), S(re, null, me(5, (V) => f("svg", {
              key: V,
              class: Ee(["w-4 h-4", V <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, y[8] || (y[8] = [
              f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          y[9] || (y[9] = f("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        f("div", w_, [
          f("span", x_, H($(g.value)), 1),
          h.value > g.value ? (x(), S("span", N_, H($(h.value)), 1)) : F("", !0)
        ]),
        c.value.available ? (x(), S("button", {
          key: 2,
          onClick: D,
          disabled: i.value,
          class: "w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          style: {
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
            borderRadius: "var(--button-radius)"
          },
          onMouseenter: y[0] || (y[0] = (V) => V.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
          onMouseleave: y[1] || (y[1] = (V) => V.target.style.backgroundColor = "var(--button-primary-bg)")
        }, [
          i.value ? F("", !0) : (x(), S("svg", k_, y[10] || (y[10] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          i.value ? (x(), S("svg", O_, y[11] || (y[11] = [
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
          ]))) : (x(), S("span", C_, "Add to Cart"))
        ], 40, S_)) : F("", !0)
      ])
    ], 36));
  }
}, T_ = { class: "collection-filters" }, D_ = { class: "lg:hidden mb-4" }, V_ = { class: "space-y-6" }, A_ = {
  key: 0,
  class: "filter-group"
}, I_ = { class: "filter-group" }, M_ = { class: "flex items-center" }, P_ = { class: "filter-group" }, R_ = { class: "space-y-2" }, L_ = { class: "flex items-center" }, F_ = { class: "flex items-center" }, B_ = { class: "flex items-center" }, j_ = { class: "flex items-center" }, H_ = {
  key: 1,
  class: "filter-group"
}, U_ = { class: "space-y-2" }, q_ = ["value"], z_ = { class: "ml-2 text-sm" }, W_ = {
  key: 2,
  class: "filter-group"
}, K_ = { class: "space-y-2" }, G_ = ["value"], Y_ = { class: "ml-2 text-sm" }, J_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, X_ = { class: "h-full flex flex-col" }, Q_ = { class: "flex items-center justify-between p-4 border-b" }, Z_ = { class: "flex-1 overflow-y-auto p-4" }, e2 = { class: "space-y-6" }, t2 = {
  key: 0,
  class: "filter-group"
}, n2 = { class: "filter-group" }, s2 = { class: "flex items-center" }, o2 = { class: "filter-group" }, r2 = { class: "space-y-2" }, i2 = { class: "flex items-center" }, l2 = { class: "flex items-center" }, a2 = { class: "flex items-center" }, c2 = { class: "flex items-center" }, u2 = {
  key: 1,
  class: "filter-group"
}, d2 = { class: "space-y-2" }, f2 = ["value"], p2 = { class: "ml-2 text-sm" }, h2 = {
  key: 2,
  class: "filter-group"
}, m2 = { class: "space-y-2" }, g2 = ["value"], v2 = { class: "ml-2 text-sm" }, y2 = {
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
    const n = e, s = t, o = W("manual"), r = W([]), i = W([]), l = W([]), a = W(!1), c = W(!1), d = () => {
      const M = new URLSearchParams(window.location.search);
      r.value = [], i.value = [], l.value = [], a.value = !1, o.value = M.get("sort_by") || "manual", M.get("filter.v.availability") === "1" && (a.value = !0);
      const C = M.getAll("filter.p.product_type");
      C.length > 0 && (i.value = C);
      const T = M.getAll("filter.p.vendor");
      T.length > 0 && (l.value = T);
      const b = M.getAll("filter.price.range");
      b.length > 0 && (r.value = b);
    }, u = () => {
      d();
    }, p = X(() => {
      var C, T;
      const M = ((T = (C = window.Shopline) == null ? void 0 : C.theme) == null ? void 0 : T.settings) || {};
      return {
        "--card-radius": M.card_border_radius ? `${M.card_border_radius}px` : "8px"
      };
    }), m = X(() => {
      const M = /* @__PURE__ */ new Set();
      return n.products.forEach((C) => {
        C.product_type && M.add(C.product_type);
      }), Array.from(M).sort();
    }), g = X(() => {
      const M = /* @__PURE__ */ new Set();
      return n.products.forEach((C) => {
        C.vendor && M.add(C.vendor);
      }), Array.from(M).sort();
    }), h = X(() => r.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), I = () => {
      const M = new URL(window.location.href);
      o.value === "manual" ? M.searchParams.delete("sort_by") : M.searchParams.set("sort_by", o.value), window.location.href = M.toString();
    }, k = () => {
      c.value || _(), E();
    }, _ = () => {
      const M = new URLSearchParams(window.location.search), C = [];
      for (const [b] of M)
        b.startsWith("filter.") && C.push(b);
      C.forEach((b) => {
        for (; M.has(b); )
          M.delete(b);
      }), a.value && M.set("filter.v.availability", "1"), r.value.length > 0 && r.value.forEach((b) => {
        M.append("filter.price.range", b);
      }), i.value.length > 0 && i.value.forEach((b) => {
        M.append("filter.p.product_type", b);
      }), l.value.length > 0 && l.value.forEach((b) => {
        M.append("filter.p.vendor", b);
      });
      const T = `${window.location.pathname}${M.toString() ? "?" + M.toString() : ""}`;
      window.location.href = T;
    }, v = () => {
      r.value = [], i.value = [], l.value = [], a.value = !1;
      const M = new URLSearchParams(window.location.search), C = [];
      for (const [D] of M)
        D.startsWith("filter.") && C.push(D);
      C.forEach((D) => M.delete(D));
      const T = M.get("sort_by"), b = `${window.location.pathname}${T ? "?sort_by=" + T : ""}`;
      window.location.href = b;
    }, $ = () => {
      c.value = !1, _();
    }, E = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: r.value,
        types: i.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return He(() => {
      d(), window.addEventListener("popstate", u);
    }), js(() => {
      window.removeEventListener("popstate", u);
    }), (M, C) => (x(), S("div", T_, [
      f("div", D_, [
        f("button", {
          onClick: C[0] || (C[0] = (T) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 hover:bg-secondary-50 transition-colors",
          style: { borderRadius: "var(--card-radius, 8px)" }
        }, C[20] || (C[20] = [
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
        style: qe(p.value)
      }, [
        f("div", V_, [
          e.showSort ? (x(), S("div", A_, [
            C[22] || (C[22] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
            $e(f("select", {
              "onUpdate:modelValue": C[1] || (C[1] = (T) => o.value = T),
              onChange: I,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, C[21] || (C[21] = [
              ls('<option value="manual" data-v-308e1139>Featured</option><option value="best-selling" data-v-308e1139>Best Selling</option><option value="title-ascending" data-v-308e1139>Alphabetically, A-Z</option><option value="title-descending" data-v-308e1139>Alphabetically, Z-A</option><option value="price-ascending" data-v-308e1139>Price, low to high</option><option value="price-descending" data-v-308e1139>Price, high to low</option><option value="created-ascending" data-v-308e1139>Date, old to new</option><option value="created-descending" data-v-308e1139>Date, new to old</option>', 8)
            ]), 544), [
              [Vs, o.value]
            ])
          ])) : F("", !0),
          f("div", I_, [
            C[24] || (C[24] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
            f("label", M_, [
              $e(f("input", {
                type: "checkbox",
                "onUpdate:modelValue": C[2] || (C[2] = (T) => a.value = T),
                onChange: k,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Le, a.value]
              ]),
              C[23] || (C[23] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          f("div", P_, [
            C[29] || (C[29] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
            f("div", R_, [
              f("label", L_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": C[3] || (C[3] = (T) => r.value = T),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                C[25] || (C[25] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              f("label", F_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": C[4] || (C[4] = (T) => r.value = T),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                C[26] || (C[26] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              f("label", B_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": C[5] || (C[5] = (T) => r.value = T),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                C[27] || (C[27] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              f("label", j_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": C[6] || (C[6] = (T) => r.value = T),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                C[28] || (C[28] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          m.value.length > 0 ? (x(), S("div", H_, [
            C[30] || (C[30] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
            f("div", U_, [
              (x(!0), S(re, null, me(m.value, (T) => (x(), S("label", {
                key: T,
                class: "flex items-center"
              }, [
                $e(f("input", {
                  type: "checkbox",
                  value: T,
                  "onUpdate:modelValue": C[7] || (C[7] = (b) => i.value = b),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, q_), [
                  [Le, i.value]
                ]),
                f("span", z_, H(T), 1)
              ]))), 128))
            ])
          ])) : F("", !0),
          g.value.length > 0 ? (x(), S("div", W_, [
            C[31] || (C[31] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
            f("div", K_, [
              (x(!0), S(re, null, me(g.value, (T) => (x(), S("label", {
                key: T,
                class: "flex items-center"
              }, [
                $e(f("input", {
                  type: "checkbox",
                  value: T,
                  "onUpdate:modelValue": C[8] || (C[8] = (b) => l.value = b),
                  onChange: k,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, G_), [
                  [Le, l.value]
                ]),
                f("span", Y_, H(T), 1)
              ]))), 128))
            ])
          ])) : F("", !0),
          h.value ? (x(), S("button", {
            key: 3,
            onClick: v,
            class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
          }, " Clear all filters ")) : F("", !0)
        ])
      ], 4),
      (x(), ct(bn, { to: "body" }, [
        c.value ? (x(), S("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: C[19] || (C[19] = Ct((T) => c.value = !1, ["self"]))
        }, [
          f("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: C[9] || (C[9] = (T) => c.value = !1)
          }),
          f("div", J_, [
            f("div", X_, [
              f("div", Q_, [
                C[33] || (C[33] = f("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                f("button", {
                  onClick: C[10] || (C[10] = (T) => c.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, C[32] || (C[32] = [
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
              f("div", Z_, [
                f("div", e2, [
                  e.showSort ? (x(), S("div", t2, [
                    C[35] || (C[35] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
                    $e(f("select", {
                      "onUpdate:modelValue": C[11] || (C[11] = (T) => o.value = T),
                      onChange: I,
                      class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    }, C[34] || (C[34] = [
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
                  ])) : F("", !0),
                  f("div", n2, [
                    C[37] || (C[37] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
                    f("label", s2, [
                      $e(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": C[12] || (C[12] = (T) => a.value = T),
                        onChange: k,
                        class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      }, null, 544), [
                        [Le, a.value]
                      ]),
                      C[36] || (C[36] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  f("div", o2, [
                    C[42] || (C[42] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
                    f("div", r2, [
                      f("label", i2, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": C[13] || (C[13] = (T) => r.value = T),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        C[38] || (C[38] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      f("label", l2, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": C[14] || (C[14] = (T) => r.value = T),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        C[39] || (C[39] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      f("label", a2, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": C[15] || (C[15] = (T) => r.value = T),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        C[40] || (C[40] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      f("label", c2, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": C[16] || (C[16] = (T) => r.value = T),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        C[41] || (C[41] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  m.value.length > 0 ? (x(), S("div", u2, [
                    C[43] || (C[43] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
                    f("div", d2, [
                      (x(!0), S(re, null, me(m.value, (T) => (x(), S("label", {
                        key: T,
                        class: "flex items-center"
                      }, [
                        $e(f("input", {
                          type: "checkbox",
                          value: T,
                          "onUpdate:modelValue": C[17] || (C[17] = (b) => i.value = b),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, f2), [
                          [Le, i.value]
                        ]),
                        f("span", p2, H(T), 1)
                      ]))), 128))
                    ])
                  ])) : F("", !0),
                  g.value.length > 0 ? (x(), S("div", h2, [
                    C[44] || (C[44] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
                    f("div", m2, [
                      (x(!0), S(re, null, me(g.value, (T) => (x(), S("label", {
                        key: T,
                        class: "flex items-center"
                      }, [
                        $e(f("input", {
                          type: "checkbox",
                          value: T,
                          "onUpdate:modelValue": C[18] || (C[18] = (b) => l.value = b),
                          onChange: k,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, g2), [
                          [Le, l.value]
                        ]),
                        f("span", v2, H(T), 1)
                      ]))), 128))
                    ])
                  ])) : F("", !0),
                  h.value ? (x(), S("button", {
                    key: 3,
                    onClick: v,
                    class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
                  }, " Clear all filters ")) : F("", !0)
                ])
              ]),
              f("div", { class: "p-4 border-t" }, [
                f("button", {
                  onClick: $,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : F("", !0)
      ]))
    ]));
  }
}, Lf = /* @__PURE__ */ Je(y2, [["__scopeId", "data-v-308e1139"]]), b2 = { class: "collection-grid" }, _2 = {
  key: 0,
  class: "mb-8"
}, E2 = { class: "text-3xl font-bold text-secondary-900 mb-4" }, w2 = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, x2 = { class: "mt-4 flex items-center justify-between" }, N2 = { class: "text-sm text-secondary-600" }, S2 = {
  key: 0,
  class: "lg:hidden"
}, k2 = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, C2 = {
  key: 0,
  class: "lg:col-span-1"
}, O2 = ["products"], $2 = {
  key: 1,
  class: "text-center py-12"
}, T2 = ["product"], D2 = {
  key: 3,
  class: "mt-8"
}, V2 = {
  key: 0,
  class: "inline-flex items-center"
}, A2 = {
  key: 1,
  class: "text-center"
}, I2 = ["disabled"], M2 = { key: 0 }, P2 = { key: 1 }, R2 = {
  key: 2,
  class: "flex items-center justify-between"
}, L2 = { class: "flex-1 flex justify-between sm:hidden" }, F2 = ["disabled"], B2 = ["disabled"], j2 = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, H2 = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, U2 = ["disabled"], q2 = ["onClick"], z2 = ["disabled"], W2 = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, K2 = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, G2 = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Y2 = { class: "text-lg font-medium text-secondary-900" }, J2 = {
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
    const t = e, n = W(!1), s = W(!1), o = W(t.currentPage), r = W(t.products.length), i = W("manual"), l = W({}), a = W(null), c = W(null), d = X(() => {
      const b = Number(t.columnsMobile), D = t.columnsDesktop, N = b === 1 ? "grid-cols-1" : "grid-cols-2", y = D <= 3 ? `md:grid-cols-${D}` : "md:grid-cols-3", V = `lg:grid-cols-${D}`;
      return `grid ${N} ${y} ${V} gap-4 lg:gap-6`;
    }), u = X(() => {
      var N, y, V;
      let b = [...t.products];
      switch (l.value.inStockOnly && (b = b.filter((P) => P.available)), ((N = l.value.priceRanges) == null ? void 0 : N.length) > 0 && (b = b.filter((P) => {
        const B = P.price / 100;
        return l.value.priceRanges.some((J) => J === "0-50" ? B < 50 : J === "50-100" ? B >= 50 && B < 100 : J === "100-200" ? B >= 100 && B < 200 : J === "200+" ? B >= 200 : !1);
      })), ((y = l.value.types) == null ? void 0 : y.length) > 0 && (b = b.filter((P) => l.value.types.includes(P.product_type))), ((V = l.value.vendors) == null ? void 0 : V.length) > 0 && (b = b.filter((P) => l.value.vendors.includes(P.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          b.sort((P, B) => P.price - B.price);
          break;
        case "price-descending":
          b.sort((P, B) => B.price - P.price);
          break;
        case "title-ascending":
          b.sort((P, B) => P.title.localeCompare(B.title));
          break;
        case "title-descending":
          b.sort((P, B) => B.title.localeCompare(P.title));
          break;
        case "created-ascending":
          b.sort((P, B) => new Date(P.created_at) - new Date(B.created_at));
          break;
        case "created-descending":
          b.sort((P, B) => new Date(B.created_at) - new Date(P.created_at));
          break;
      }
      return b;
    }), p = X(() => {
      if (t.enableInfiniteScroll)
        return u.value.slice(0, r.value);
      const b = (o.value - 1) * t.productsPerPage, D = b + t.productsPerPage;
      return u.value.slice(b, D);
    }), m = X(() => t.totalPages || Math.ceil(u.value.length / t.productsPerPage)), g = X(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : r.value < u.value.length), h = X(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, u.value.length - r.value)), I = X(() => {
      const b = [], D = m.value, N = o.value;
      if (D <= 7)
        for (let y = 1; y <= D; y++)
          b.push(y);
      else if (N <= 3) {
        for (let y = 1; y <= 5; y++)
          b.push(y);
        b.push("..."), b.push(D);
      } else if (N >= D - 2) {
        b.push(1), b.push("...");
        for (let y = D - 4; y <= D; y++)
          b.push(y);
      } else {
        b.push(1), b.push("...");
        for (let y = N - 1; y <= N + 1; y++)
          b.push(y);
        b.push("..."), b.push(D);
      }
      return b.filter((y) => y === "..." || y >= 1 && y <= D);
    }), k = (b) => {
      l.value = b, o.value = 1, r.value = t.productsPerPage;
    }, _ = () => {
      o.value = 1, r.value = t.productsPerPage;
    }, v = () => {
      s.value = !0, setTimeout(() => {
        r.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, $ = async (b) => {
      var N;
      const D = new FormData();
      D.append("id", b.variants[0].id), D.append("quantity", "1"), await ((N = window.OrionCart) == null ? void 0 : N.addItem(D)), console.log("Added to cart:", b.title);
    }, E = (b) => {
      a.value = b;
    }, M = () => {
      a.value = null;
    };
    let C = null;
    const T = () => {
      !t.enableInfiniteScroll || !c.value || (C = new IntersectionObserver(
        (b) => {
          b[0].isIntersecting && g.value && !s.value && v();
        },
        { threshold: 0.1 }
      ), C.observe(c.value));
    };
    return He(() => {
      T();
    }), Ot(() => {
      C && C.disconnect();
    }), Wt(() => t.enableInfiniteScroll, () => {
      T();
    }), (b, D) => (x(), S("div", b2, [
      e.showHeader ? (x(), S("div", _2, [
        f("h1", E2, H(e.collectionTitle), 1),
        e.collectionDescription ? (x(), S("div", w2, H(e.collectionDescription), 1)) : F("", !0),
        f("div", x2, [
          f("p", N2, H(e.totalProducts || u.value.length) + " products ", 1),
          e.enableSorting ? (x(), S("div", S2, [
            $e(f("select", {
              "onUpdate:modelValue": D[0] || (D[0] = (N) => i.value = N),
              onChange: _,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, D[5] || (D[5] = [
              ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Vs, i.value]
            ])
          ])) : F("", !0)
        ])
      ])) : F("", !0),
      f("div", k2, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (x(), S("aside", C2, [
          f("collection-filters", {
            products: e.products,
            onUpdateFilters: k
          }, null, 40, O2)
        ])) : F("", !0),
        f("div", {
          class: Ee(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (x(), S("div", {
            key: 0,
            class: Ee(d.value)
          }, [
            (x(), S(re, null, me(6, (N) => f("div", {
              key: N,
              class: "animate-pulse"
            }, D[6] || (D[6] = [
              f("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              f("div", { class: "mt-4 space-y-2" }, [
                f("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                f("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : u.value.length === 0 ? (x(), S("div", $2, D[7] || (D[7] = [
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
            class: Ee(d.value)
          }, [
            (x(!0), S(re, null, me(p.value, (N) => (x(), S("product-card", {
              key: N.id,
              product: N,
              onQuickAdd: $,
              onQuickView: E
            }, null, 40, T2))), 128))
          ], 2)),
          !n.value && u.value.length > 0 ? (x(), S("div", D2, [
            e.enableInfiniteScroll ? (x(), S("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (x(), S("div", V2, D[8] || (D[8] = [
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
              ]))) : F("", !0)
            ], 512)) : g.value ? (x(), S("div", A2, [
              f("button", {
                onClick: v,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (x(), S("span", M2, "Loading...")) : (x(), S("span", P2, "Load More (" + H(h.value) + " remaining)", 1))
              ], 8, I2)
            ])) : F("", !0),
            !e.enableInfiniteScroll && m.value > 1 ? (x(), S("nav", R2, [
              f("div", L2, [
                f("button", {
                  onClick: D[1] || (D[1] = (N) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, F2),
                f("button", {
                  onClick: D[2] || (D[2] = (N) => o.value++),
                  disabled: o.value === m.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, B2)
              ]),
              f("div", j2, [
                f("div", null, [
                  f("nav", H2, [
                    f("button", {
                      onClick: D[3] || (D[3] = (N) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, D[9] || (D[9] = [
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
                    ]), 8, U2),
                    (x(!0), S(re, null, me(I.value, (N) => (x(), S("button", {
                      key: N,
                      onClick: (y) => o.value = N,
                      class: Ee([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === N ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, H(N), 11, q2))), 128)),
                    f("button", {
                      onClick: D[4] || (D[4] = (N) => o.value++),
                      disabled: o.value === m.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, D[10] || (D[10] = [
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
                    ]), 8, z2)
                  ])
                ])
              ])
            ])) : F("", !0)
          ])) : F("", !0)
        ], 2)
      ]),
      (x(), ct(bn, { to: "body" }, [
        a.value ? (x(), S("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: Ct(M, ["self"])
        }, [
          f("div", W2, [
            f("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: M
            }),
            f("div", K2, [
              f("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                f("button", {
                  onClick: M,
                  class: "bg-white text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  style: { borderRadius: "var(--card-radius, 8px)" }
                }, D[11] || (D[11] = [
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
              f("div", G2, [
                f("h3", Y2, H(a.value.title), 1),
                D[12] || (D[12] = f("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : F("", !0)
      ]))
    ]));
  }
}, X2 = { class: "collection-sort-wrapper" }, Q2 = {
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
    const n = W(e.currentSort), s = () => new URLSearchParams(window.location.search), o = (i) => {
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
    }), (i, l) => (x(), S("div", X2, [
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
}, Z2 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, eE = { class: "absolute inset-0 overflow-hidden" }, tE = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, nE = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, sE = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, oE = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, rE = { class: "h-12 flex flex-col justify-between" }, iE = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, lE = { class: "mb-6" }, aE = { class: "flex items-center cursor-pointer" }, cE = { class: "mb-6" }, uE = { class: "space-y-2" }, dE = ["value"], fE = { class: "ml-2 text-sm" }, pE = {
  key: 0,
  class: "mb-6"
}, hE = { class: "space-y-2" }, mE = ["value"], gE = { class: "ml-2 text-sm" }, vE = {
  key: 1,
  class: "mb-6"
}, yE = { class: "space-y-2" }, bE = ["value"], _E = { class: "ml-2 text-sm" }, EE = {
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
    const t = e, n = W(!1), s = W({
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
    }, c = () => {
      n.value = !1, document.body.style.overflow = "";
    }, d = () => {
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
    }, u = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const g = new URLSearchParams(window.location.search), h = [];
      for (const [_] of g)
        _.startsWith("filter.") && h.push(_);
      h.forEach((_) => g.delete(_));
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
    }), (g, h) => (x(), S("div", null, [
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
          class: Ee(["ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }]),
          style: { borderRadius: "9999px" }
        }, H(l.value || "0"), 3)
      ]),
      (x(), ct(bn, { to: "body" }, [
        ue(ot, { name: "drawer" }, {
          default: Pe(() => [
            n.value ? (x(), S("div", Z2, [
              f("div", eE, [
                ue(ot, { name: "fade" }, {
                  default: Pe(() => [
                    n.value ? (x(), S("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : F("", !0)
                  ]),
                  _: 1
                }),
                f("div", tE, [
                  ue(ot, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      n.value ? (x(), S("div", nE, [
                        f("div", sE, [
                          f("div", oE, [
                            f("div", rE, [
                              h[6] || (h[6] = f("h2", { class: "text-lg font-medium text-gray-900" }, "Filters", -1)),
                              f("p", {
                                class: Ee(["text-sm text-gray-500 h-5 transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }])
                              }, H(l.value || "0") + " " + H((l.value || 0) === 1 ? "filter" : "filters") + " active ", 3)
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
                          f("div", iE, [
                            f("div", lE, [
                              h[9] || (h[9] = f("h3", { class: "font-medium mb-3" }, "Availability", -1)),
                              f("label", aE, [
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
                            f("div", cE, [
                              h[10] || (h[10] = f("h3", { class: "font-medium mb-3" }, "Price", -1)),
                              f("div", uE, [
                                (x(), S(re, null, me(o, (I) => f("label", {
                                  key: I.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: I.value,
                                    "onUpdate:modelValue": h[1] || (h[1] = (k) => s.value.priceRanges = k),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, dE), [
                                    [Le, s.value.priceRanges]
                                  ]),
                                  f("span", fE, H(I.label), 1)
                                ])), 64))
                              ])
                            ]),
                            r.value.length > 0 ? (x(), S("div", pE, [
                              h[11] || (h[11] = f("h3", { class: "font-medium mb-3" }, "Product Type", -1)),
                              f("div", hE, [
                                (x(!0), S(re, null, me(r.value, (I) => (x(), S("label", {
                                  key: I,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: I,
                                    "onUpdate:modelValue": h[2] || (h[2] = (k) => s.value.types = k),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, mE), [
                                    [Le, s.value.types]
                                  ]),
                                  f("span", gE, H(I), 1)
                                ]))), 128))
                              ])
                            ])) : F("", !0),
                            i.value.length > 0 ? (x(), S("div", vE, [
                              h[12] || (h[12] = f("h3", { class: "font-medium mb-3" }, "Brand", -1)),
                              f("div", yE, [
                                (x(!0), S(re, null, me(i.value, (I) => (x(), S("label", {
                                  key: I,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: I,
                                    "onUpdate:modelValue": h[3] || (h[3] = (k) => s.value.vendors = k),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, bE), [
                                    [Le, s.value.vendors]
                                  ]),
                                  f("span", _E, H(I), 1)
                                ]))), 128))
                              ])
                            ])) : F("", !0)
                          ]),
                          f("div", { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, [
                            f("button", {
                              onClick: d,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Apply Filters "),
                            f("button", {
                              onClick: u,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Clear All ")
                          ])
                        ])
                      ])) : F("", !0)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])) : F("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, wE = /* @__PURE__ */ Je(EE, [["__scopeId", "data-v-7b26bf02"]]), xE = { class: "product-gallery" }, NE = { class: "main-image-wrapper" }, SE = ["src", "alt"], kE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, CE = {
  key: 0,
  class: "thumbnails-wrapper"
}, OE = ["disabled"], $E = ["onClick", "aria-label"], TE = ["src", "alt"], DE = ["disabled"], VE = {
  key: 1,
  class: "swiper-dots"
}, AE = ["onClick", "aria-label"], IE = ["src", "alt"], ME = { class: "lightbox-counter" }, PE = 80, Wo = 4, $c = 2, RE = {
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
    const t = e, n = W(0), s = W(!1), o = W(!1), r = W(!1), i = W(!1), l = W(0), a = W(null), c = W(0), d = W(0), u = W({}), p = X(() => t.images.map((C) => {
      if (C.src)
        return C;
      const T = C.url || C;
      return {
        src: `${T}?width=${t.imageTransformWidth}`,
        thumbnail: `${T}?width=${t.thumbnailWidth}`,
        alt: C.alt || t.productTitle
      };
    })), m = X(() => p.value[n.value] || { src: "", alt: "" }), g = X(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), h = X(() => {
      const T = c.value / u.value.width * 100, b = d.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * $c}px ${u.value.height * $c}px`,
        backgroundPosition: `${T}% ${b}%`
      };
    }), I = (C) => {
      s.value = !0, n.value = C;
    }, k = (C) => {
      C === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - Wo,
        l.value + 1
      );
    }, _ = (C) => {
      n.value = C, o.value = !0, document.body.style.overflow = "hidden";
    }, v = () => {
      o.value = !1, document.body.style.overflow = "";
    }, $ = (C) => {
      C === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, E = (C) => {
      const T = C.currentTarget.getBoundingClientRect();
      u.value = T, c.value = C.clientX - T.left, d.value = C.clientY - T.top;
    }, { lengthX: M } = ub(
      a,
      {
        onSwipeEnd() {
          M.value > 50 ? k("prev") : M.value < -50 && k("next");
        }
      }
    );
    return He(() => {
      i.value = window.innerWidth < 768;
      const C = () => {
        i.value = window.innerWidth < 768;
      }, T = (b) => {
        o.value && (b.key === "Escape" && v(), b.key === "ArrowLeft" && $("prev"), b.key === "ArrowRight" && $("next"));
      };
      window.addEventListener("resize", C), window.addEventListener("keydown", T), Ot(() => {
        window.removeEventListener("resize", C), window.removeEventListener("keydown", T);
      });
    }), (C, T) => (x(), S("div", xE, [
      f("div", NE, [
        f("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: T[1] || (T[1] = (b) => _(n.value)),
          onMouseenter: T[2] || (T[2] = (b) => r.value = !0),
          onMouseleave: T[3] || (T[3] = (b) => r.value = !1),
          onMousemove: E
        }, [
          f("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: Ee(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: T[0] || (T[0] = (b) => s.value = !1)
          }, null, 42, SE),
          s.value ? (x(), S("div", kE, T[9] || (T[9] = [
            f("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : F("", !0),
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
          r.value && !i.value ? (x(), S("div", {
            key: 1,
            class: "zoom-lens",
            style: qe(g.value)
          }, null, 4)) : F("", !0)
        ], 32),
        r.value && !i.value ? (x(), S("div", {
          key: 0,
          class: "zoom-preview",
          style: qe(h.value)
        }, null, 4)) : F("", !0)
      ]),
      p.value.length > 1 ? (x(), S("div", CE, [
        p.value.length > Wo ? (x(), S("button", {
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
        ]), 8, OE)) : F("", !0),
        f("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          f("div", {
            class: "thumbnails-track",
            style: qe({ transform: `translateX(-${l.value * (PE + 8)}px)` })
          }, [
            (x(!0), S(re, null, me(p.value, (b, D) => (x(), S("button", {
              key: D,
              onClick: (N) => I(D),
              class: Ee(["thumbnail", { active: D === n.value }]),
              "aria-label": `View image ${D + 1}`
            }, [
              f("img", {
                src: b.thumbnail || b.src,
                alt: b.alt,
                class: "w-full h-full object-contain"
              }, null, 8, TE)
            ], 10, $E))), 128))
          ], 4)
        ], 512),
        p.value.length > Wo ? (x(), S("button", {
          key: 1,
          onClick: T[5] || (T[5] = (b) => k("next")),
          disabled: l.value >= p.value.length - Wo,
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
        ]), 8, DE)) : F("", !0)
      ])) : F("", !0),
      p.value.length > 1 && i.value ? (x(), S("div", VE, [
        (x(!0), S(re, null, me(p.value, (b, D) => (x(), S("button", {
          key: D,
          onClick: (N) => I(D),
          class: Ee(["swiper-dot", { active: D === n.value }]),
          "aria-label": `Go to image ${D + 1}`
        }, null, 10, AE))), 128))
      ])) : F("", !0),
      (x(), ct(bn, { to: "body" }, [
        o.value ? (x(), S("div", {
          key: 0,
          class: "lightbox",
          onClick: v
        }, [
          f("button", {
            onClick: v,
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
          p.value.length > 1 ? (x(), S("button", {
            key: 0,
            onClick: T[6] || (T[6] = Ct((b) => $("prev"), ["stop"])),
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
          ]))) : F("", !0),
          f("div", {
            class: "lightbox-image-wrapper",
            onClick: T[7] || (T[7] = Ct(() => {
            }, ["stop"]))
          }, [
            f("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, IE)
          ]),
          p.value.length > 1 ? (x(), S("button", {
            key: 1,
            onClick: T[8] || (T[8] = Ct((b) => $("next"), ["stop"])),
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
          ]))) : F("", !0),
          f("div", ME, H(n.value + 1) + " / " + H(p.value.length), 1)
        ])) : F("", !0)
      ]))
    ]));
  }
}, LE = /* @__PURE__ */ Je(RE, [["__scopeId", "data-v-a7c1d2a3"]]), FE = { class: "product-info" }, BE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, jE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, HE = { class: "price-wrapper mb-6" }, UE = { class: "flex items-baseline gap-3" }, qE = { class: "text-3xl font-semibold text-gray-900" }, zE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, WE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, KE = {
  key: 1,
  class: "mb-6"
}, GE = ["product", "current-variant"], YE = ["value"], JE = { class: "mb-4" }, XE = ["max"], QE = { class: "mb-4" }, ZE = {
  key: 0,
  class: "text-red-600 font-medium"
}, ew = {
  key: 1,
  class: "text-amber-600"
}, tw = {
  key: 2,
  class: "text-green-600"
}, nw = { class: "flex flex-col sm:flex-row gap-3" }, sw = ["disabled"], ow = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, rw = { key: 1 }, iw = { key: 2 }, lw = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, aw = ["innerHTML"], cw = { class: "space-y-4" }, uw = {
  key: 0,
  class: "group"
}, dw = ["innerHTML"], fw = {
  key: 1,
  class: "group"
}, pw = { class: "mt-8 pt-8 border-t" }, hw = { class: "flex gap-3" }, mw = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, gw = {
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
    const n = e, s = t, o = W(n.product.selected_or_first_available_variant || ((I = n.product.variants) == null ? void 0 : I[0]) || {}), r = W(1), i = W(!1), l = W(!1), a = X(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = X(() => {
      var k;
      return (k = n.product.options) == null ? void 0 : k.some(
        (_) => _.name.toLowerCase() === "size" || _.name.toLowerCase() === "taille"
      );
    }), d = (k) => `$${(k / 100).toFixed(2)}`, u = (k) => {
      o.value = k, s("variant-change", k);
      const _ = new URL(window.location);
      _.searchParams.set("variant", k.id), window.history.replaceState({}, "", _);
    }, p = async () => {
      var _;
      i.value = !0;
      const k = new FormData();
      k.append("id", o.value.id), k.append("quantity", r.value);
      try {
        await ((_ = window.OrionCart) == null ? void 0 : _.addItem(k));
        const v = event.target, $ = v.textContent;
        v.textContent = "✓ Added to Cart", setTimeout(() => {
          v.textContent = $;
        }, 2e3);
      } catch (v) {
        console.error("Failed to add to cart:", v), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, g = (k) => {
      const _ = window.location.href, v = n.product.title, $ = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(_)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(_)}&text=${encodeURIComponent(v)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(_)}&description=${encodeURIComponent(v)}`
      };
      $[k] && window.open($[k], "_blank", "width=600,height=400");
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
    }), (k, _) => (x(), S("div", FE, [
      f("h1", BE, H(e.product.title), 1),
      e.product.vendor ? (x(), S("p", jE, " by " + H(e.product.vendor), 1)) : F("", !0),
      f("div", HE, [
        f("div", UE, [
          f("span", qE, H(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (x(), S("span", zE, H(d(o.value.compare_at_price)), 1)) : F("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (x(), S("p", WE, " Save " + H(d(o.value.compare_at_price - o.value.price)) + " (" + H(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : F("", !0)
      ]),
      e.product.has_only_default_variant ? F("", !0) : (x(), S("div", KE, [
        f("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, GE)
      ])),
      f("form", {
        onSubmit: Ct(p, ["prevent"]),
        class: "mb-8"
      }, [
        f("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, YE),
        f("div", JE, [
          _[4] || (_[4] = f("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          $e(f("quantity-selector", {
            "onUpdate:modelValue": _[0] || (_[0] = (v) => r.value = v),
            min: 1,
            max: a.value
          }, null, 8, XE), [
            [Fn, r.value]
          ])
        ]),
        f("div", QE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (x(), S("p", ew, " Only " + H(o.value.inventory_quantity) + " left in stock ", 1)) : (x(), S("p", tw, " ✓ In Stock ")) : (x(), S("p", ZE, " Out of Stock "))
        ]),
        f("div", nw, [
          f("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || i.value
          }, [
            i.value ? (x(), S("span", ow, _[5] || (_[5] = [
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
            ]))) : o.value.available ? (x(), S("span", iw, " Add to Cart ")) : (x(), S("span", rw, " Sold Out "))
          ], 8, sw),
          e.showBuyNow ? (x(), ct(ss, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Pe(() => _[6] || (_[6] = [
              je(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : F("", !0)
        ])
      ], 32),
      e.product.description ? (x(), S("div", lw, [
        _[7] || (_[7] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        f("div", {
          innerHTML: e.product.description
        }, null, 8, aw)
      ])) : F("", !0),
      f("div", cw, [
        _[10] || (_[10] = ls('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (x(), S("details", uw, [
          _[8] || (_[8] = f("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
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
          }, null, 8, dw)
        ])) : F("", !0),
        c.value ? (x(), S("details", fw, _[9] || (_[9] = [
          ls('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : F("", !0)
      ]),
      f("div", pw, [
        _[15] || (_[15] = f("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        f("div", hw, [
          f("button", {
            onClick: _[1] || (_[1] = (v) => g("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, _[11] || (_[11] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          f("button", {
            onClick: _[2] || (_[2] = (v) => g("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, _[12] || (_[12] = [
            f("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              f("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          f("button", {
            onClick: _[3] || (_[3] = (v) => g("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, _[13] || (_[13] = [
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
            _[14] || (_[14] = f("svg", {
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
            l.value ? (x(), S("span", mw, " Link copied! ")) : F("", !0)
          ])
        ])
      ])
    ]));
  }
}, vw = /* @__PURE__ */ Je(gw, [["__scopeId", "data-v-9e2c3b5c"]]), yw = {
  class: "cart-summary bg-gray-50 p-6 lg:sticky lg:top-24",
  style: { borderRadius: "var(--card-radius, 8px)" }
}, bw = { class: "space-y-3 mb-4" }, _w = { class: "flex justify-between text-sm" }, Ew = { class: "text-gray-600" }, ww = { class: "font-medium text-gray-900" }, xw = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, Nw = {
  key: 1,
  class: "flex justify-between text-sm"
}, Sw = { class: "text-gray-900" }, kw = {
  key: 2,
  class: "flex justify-between text-sm"
}, Cw = { class: "text-gray-900" }, Ow = { class: "border-t pt-4 mb-6" }, $w = { class: "flex justify-between items-baseline" }, Tw = { class: "text-right" }, Dw = { class: "text-xl font-bold text-gray-900" }, Vw = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, Aw = { class: "mb-6" }, Iw = { class: "group" }, Mw = { class: "mt-3" }, Pw = ["disabled"], Rw = ["disabled"], Lw = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, Fw = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, Bw = ["disabled"], jw = {
  key: 0,
  class: "flex items-center gap-2"
}, Hw = { key: 1 }, Uw = {
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
    const n = e, s = t, o = W(""), r = W(""), i = W(""), l = W(!1), a = W(!1), c = W(!1), d = X(() => n.cart.item_count || 0), u = X(() => n.cart.total_price || 0), p = X(() => n.cart.original_total_price || n.cart.total_price || 0), m = X(() => n.cart.total_discount || 0), g = X(() => u.value >= 5e3 ? 0 : 500), h = X(() => Math.round(u.value * 0.1)), I = (v) => `$${(v / 100).toFixed(2)}`, k = async () => {
      var v;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, r.value = "", i.value = "";
        try {
          const $ = new FormData();
          $.append("discount_code", o.value);
          const E = await fetch("/discount/apply", {
            method: "POST",
            body: $
          });
          if (E.ok)
            i.value = "Promo code applied successfully!", o.value = "", await ((v = window.OrionCart) == null ? void 0 : v.fetchCart());
          else {
            const M = await E.json();
            r.value = M.message || "Invalid promo code";
          }
        } catch ($) {
          console.error("Failed to apply promo code:", $), r.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, _ = async () => {
      if (!(d.value === 0 || a.value)) {
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
    return (v, $) => (x(), S("div", yw, [
      $[10] || ($[10] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      f("div", bw, [
        f("div", _w, [
          f("span", Ew, "Subtotal (" + H(d.value) + " " + H(d.value === 1 ? "item" : "items") + ")", 1),
          f("span", ww, H(I(p.value)), 1)
        ]),
        m.value > 0 ? (x(), S("div", xw, [
          $[3] || ($[3] = f("span", { class: "flex items-center gap-1" }, [
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
          f("span", null, "-" + H(I(m.value)), 1)
        ])) : F("", !0),
        e.showShipping ? (x(), S("div", Nw, [
          $[4] || ($[4] = f("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          f("span", Sw, H(g.value === 0 ? "Free" : I(g.value)), 1)
        ])) : F("", !0),
        e.showTax ? (x(), S("div", kw, [
          $[5] || ($[5] = f("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          f("span", Cw, H(I(h.value)), 1)
        ])) : F("", !0)
      ]),
      f("div", Ow, [
        f("div", $w, [
          $[6] || ($[6] = f("span", { class: "text-lg font-semibold" }, "Total", -1)),
          f("div", Tw, [
            f("span", Dw, H(I(u.value)), 1),
            m.value > 0 ? (x(), S("p", Vw, " You saved " + H(I(m.value)) + "! ", 1)) : F("", !0)
          ])
        ])
      ]),
      f("div", Aw, [
        f("details", Iw, [
          $[7] || ($[7] = f("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          f("div", Mw, [
            f("form", {
              onSubmit: Ct(k, ["prevent"]),
              class: "flex gap-2"
            }, [
              $e(f("input", {
                "onUpdate:modelValue": $[0] || ($[0] = (E) => o.value = E),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                style: { borderRadius: "var(--card-radius, 8px)" },
                disabled: l.value
              }, null, 8, Pw), [
                [Fn, o.value]
              ]),
              f("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !o.value.trim() || l.value
              }, H(l.value ? "Applying..." : "Apply"), 9, Rw)
            ], 32),
            r.value ? (x(), S("p", Lw, H(r.value), 1)) : F("", !0),
            i.value ? (x(), S("p", Fw, H(i.value), 1)) : F("", !0)
          ])
        ])
      ]),
      f("button", {
        onClick: _,
        class: "w-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: qe({
          backgroundColor: c.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: $[1] || ($[1] = (E) => c.value = !0),
        onMouseleave: $[2] || ($[2] = (E) => c.value = !1),
        disabled: d.value === 0 || a.value
      }, [
        a.value ? (x(), S("span", jw, $[8] || ($[8] = [
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
        ]))) : (x(), S("span", Hw, $[9] || ($[9] = [
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
      ], 44, Bw),
      $[11] || ($[11] = ls('<div class="mt-6 space-y-2" data-v-daaa8299><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-daaa8299></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-daaa8299></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-daaa8299></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-daaa8299></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-daaa8299><p class="text-xs text-gray-600 mb-2" data-v-daaa8299>We accept</p><div class="flex gap-2" data-v-daaa8299><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-daaa8299></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#EB001B" data-v-daaa8299></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-daaa8299></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-daaa8299></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-daaa8299></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#253B80" data-v-daaa8299></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-daaa8299></path></svg></div></div>', 2))
    ]));
  }
}, qw = /* @__PURE__ */ Je(Uw, [["__scopeId", "data-v-daaa8299"]]), zw = { class: "slideshow-banner" }, Ww = {
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
    const t = e, n = W(0), s = W([]), o = W(null), r = X(() => t.autoRotate === !0 || t.autoRotate === "true"), i = X(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const h = document.querySelector(".slideshow-prev"), I = document.querySelector(".slideshow-next"), k = document.querySelectorAll(".slide-indicator");
      h && h.addEventListener("click", d), I && I.addEventListener("click", c), k.forEach((_, v) => {
        _.addEventListener("click", () => a(v));
      }), r.value && u();
    }, a = (h) => {
      var _, v, $, E;
      if (h === n.value || !s.value.length) return;
      (_ = s.value[n.value]) == null || _.classList.remove("opacity-100"), (v = s.value[n.value]) == null || v.classList.add("opacity-0");
      const I = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      I == null || I.classList.remove("opacity-100"), I == null || I.classList.add("opacity-50"), n.value = h, ($ = s.value[n.value]) == null || $.classList.remove("opacity-0"), (E = s.value[n.value]) == null || E.classList.add("opacity-100");
      const k = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      k == null || k.classList.remove("opacity-50"), k == null || k.classList.add("opacity-100");
    }, c = () => {
      const h = (n.value + 1) % s.value.length;
      a(h);
    }, d = () => {
      const h = n.value === 0 ? s.value.length - 1 : n.value - 1;
      a(h);
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
    return He(() => {
      setTimeout(l, 100);
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.addEventListener("mouseenter", m), h.addEventListener("mouseleave", g));
    }), Ot(() => {
      p();
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.removeEventListener("mouseenter", m), h.removeEventListener("mouseleave", g));
    }), (h, I) => (x(), S("div", zw, [
      jn(h.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Kw = /* @__PURE__ */ Je(Ww, [["__scopeId", "data-v-8690c751"]]), Gw = { class: "testimonials-carousel relative" }, Yw = {
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
    const t = e, n = W(0), s = W([]), o = W(null), r = W(null), i = X(() => t.autoRotate === !0 || t.autoRotate === "true"), l = X(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), r.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const E = document.querySelector(".testimonials-prev"), M = document.querySelector(".testimonials-next"), C = document.querySelectorAll(".testimonial-indicator");
      E && E.addEventListener("click", u), M && M.addEventListener("click", d), C.forEach((T, b) => {
        T.addEventListener("click", () => c(b));
      }), i.value && p();
    }, c = (E) => {
      if (E === n.value || !s.value.length || !r.value) return;
      n.value = E;
      const C = -s.value[0].offsetWidth * n.value;
      r.value.style.transform = `translateX(${C}px)`, document.querySelectorAll(".testimonial-indicator").forEach((b, D) => {
        D === n.value ? (b.classList.remove("bg-gray-300"), b.classList.add("bg-red-600")) : (b.classList.remove("bg-red-600"), b.classList.add("bg-gray-300"));
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
    }, h = () => {
      i.value && p();
    };
    let I = 0, k = 0;
    const _ = (E) => {
      I = E.changedTouches[0].screenX;
    }, v = (E) => {
      k = E.changedTouches[0].screenX, $();
    }, $ = () => {
      const M = I - k;
      Math.abs(M) > 50 && (M > 0 ? d() : u());
    };
    return He(() => {
      setTimeout(a, 100);
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.addEventListener("mouseenter", g), E.addEventListener("mouseleave", h), E.addEventListener("touchstart", _), E.addEventListener("touchend", v));
    }), Ot(() => {
      m();
      const E = document.querySelector(".testimonials-wrapper");
      E && (E.removeEventListener("mouseenter", g), E.removeEventListener("mouseleave", h), E.removeEventListener("touchstart", _), E.removeEventListener("touchend", v));
    }), (E, M) => (x(), S("div", Gw, [
      jn(E.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Jw = /* @__PURE__ */ Je(Yw, [["__scopeId", "data-v-276cc4e8"]]), Xw = { class: "video-player relative w-full h-full" }, Qw = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, Zw = ["src", "title"], ex = {
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
    const t = e, n = W(!1), s = W(""), o = W(""), r = X(() => t.autoplay === !0 || t.autoplay === "true"), i = X(() => t.muted === !0 || t.muted === "true"), l = X(() => t.controls === !0 || t.controls === "true"), a = X(() => `${s.value} video player`), c = X(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const g = r.value ? "1" : "0", h = i.value ? "1" : "0", I = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${g}&mute=${h}&controls=${I}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${g}&muted=${h}&controls=${I}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), d = (m) => {
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
    }, u = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      r.value && o.value && s.value && (n.value = !0);
    };
    return He(() => {
      const m = d(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const g = document.querySelector(".play-button");
      g && g.addEventListener("click", u), p();
    }), (m, g) => (x(), S("div", Xw, [
      n.value ? (x(), S("div", Qw, [
        f("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, Zw)
      ])) : (x(), S("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        jn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, tx = /* @__PURE__ */ Je(ex, [["__scopeId", "data-v-540fecb2"]]), nx = { class: "password-modal" }, sx = {
  __name: "PasswordModal",
  setup(e) {
    const t = W(!1), n = () => {
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
      let d = t.value;
      const u = setInterval(() => {
        t.value !== d && (c(t.value, d), d = t.value);
      }, 50);
      return () => clearInterval(u);
    };
    return He(() => {
      a(() => {
        l();
      });
    }), (c, d) => (x(), S("div", nx, [
      jn(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, ox = /* @__PURE__ */ Je(sx, [["__scopeId", "data-v-075988c6"]]), rx = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, ix = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, lx = { class: "bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20" }, ax = { class: "max-w-6xl mx-auto" }, cx = { class: "relative" }, ux = { class: "px-4 py-8 sm:px-6 lg:px-8" }, dx = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, fx = { class: "flex-1 relative group" }, px = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, hx = {
  key: 0,
  class: "relative"
}, mx = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, gx = { class: "flex flex-wrap gap-2" }, vx = ["onClick"], yx = {
  key: 0,
  class: "border-t border-gray-100"
}, bx = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, _x = {
  key: 0,
  class: "p-6"
}, Ex = { class: "animate-pulse" }, wx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, xx = {
  key: 1,
  class: "p-6"
}, Nx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Sx = ["href"], kx = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, Cx = ["src", "alt"], Ox = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, $x = { class: "flex-1 min-w-0" }, Tx = { class: "text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2" }, Dx = { class: "mt-1 flex items-center gap-2" }, Vx = { class: "text-sm font-semibold text-gray-900" }, Ax = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, Ix = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, Mx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, Px = ["href"], Rx = { class: "text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors" }, Lx = {
  key: 3,
  class: "p-12 text-center"
}, Fx = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, Bx = ["href"], jx = {
  __name: "SearchOverlay",
  setup(e) {
    const t = W(!1), n = W(""), s = W(null), o = W(!1), r = W({
      products: [],
      collections: []
    }), i = W(null), l = X(() => {
      var k;
      return ((k = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : k.search) || "/search";
    }), a = X(() => n.value.length > 0), c = X(() => {
      var v, $;
      const k = [], _ = (($ = (v = window.Shopline) == null ? void 0 : v.theme) == null ? void 0 : $.settings) || {};
      for (let E = 1; E <= 6; E++) {
        const M = _[`popular_search_${E}`];
        M && M.trim() && k.push(M.trim());
      }
      return k.length === 0 ? ["New Arrivals", "Best Sellers", "Sale", "Summer Collection"] : k;
    }), d = (k) => {
      var M, C;
      if (!k && k !== 0) return "$0.00";
      const _ = ((M = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : M.money_format) || "${{amount}}", v = ((C = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : C.current) || "en", E = new Intl.NumberFormat(v, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(k));
      return _.replace("{{amount}}", E);
    }, u = async () => {
      var k;
      t.value = !0, document.body.style.overflow = "hidden", await fs(), (k = s.value) == null || k.focus();
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
        const _ = ((k = window.routes) == null ? void 0 : k.predictive_search_url) || "/search/suggest", v = await fetch(
          `${_}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (v.ok) {
          const $ = await v.text(), C = new DOMParser().parseFromString($, "text/html").querySelectorAll(".predictive-search__list-item"), T = Array.from(C).map((b) => {
            var P, B;
            const D = b.querySelector("a"), N = b.querySelector("img"), y = b.querySelector(".predictive-search__item-head"), V = b.querySelector(".price__item");
            return {
              url: (D == null ? void 0 : D.href) || "#",
              image: (N == null ? void 0 : N.src) || "",
              title: ((P = y == null ? void 0 : y.textContent) == null ? void 0 : P.trim()) || "",
              price: ((B = V == null ? void 0 : V.textContent) == null ? void 0 : B.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          r.value = {
            products: T,
            collections: []
            // Collections can be added if needed
          };
        }
      } catch (_) {
        console.error("Search error:", _), r.value = { products: [], collections: [] };
      } finally {
        o.value = !1;
      }
    }, h = () => {
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(n.value)}`);
    }, I = (k) => {
      k.key === "Escape" && t.value && p();
    };
    return He(() => {
      document.addEventListener("search-overlay:open", u), document.addEventListener("search-overlay:close", p), document.addEventListener("keydown", I);
    }), Ot(() => {
      document.removeEventListener("search-overlay:open", u), document.removeEventListener("search-overlay:close", p), document.removeEventListener("keydown", I);
    }), (k, _) => (x(), ct(bn, { to: "body" }, [
      ue(ot, { name: "search-overlay" }, {
        default: Pe(() => [
          t.value ? (x(), S("div", rx, [
            ue(ot, { name: "fade" }, {
              default: Pe(() => [
                t.value ? (x(), S("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-all duration-300",
                  onClick: p
                })) : F("", !0)
              ]),
              _: 1
            }),
            ue(ot, {
              name: "slide-down",
              appear: ""
            }, {
              default: Pe(() => {
                var v, $;
                return [
                  t.value ? (x(), S("div", ix, [
                    f("div", lx, [
                      f("div", ax, [
                        f("div", cx, [
                          f("div", ux, [
                            f("div", dx, [
                              f("div", fx, [
                                _[4] || (_[4] = f("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
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
                                  "onUpdate:modelValue": _[0] || (_[0] = (E) => n.value = E),
                                  type: "search",
                                  placeholder: "Search for products, collections...",
                                  class: "search-input w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200",
                                  style: { borderRadius: "var(--button-radius, 16px)" },
                                  onInput: m,
                                  onKeydown: [
                                    Er(p, ["escape"]),
                                    Er(h, ["enter"])
                                  ]
                                }, null, 544), [
                                  [Fn, n.value]
                                ]),
                                f("div", px, [
                                  o.value ? (x(), S("div", hx, _[2] || (_[2] = [
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (x(), S("button", {
                                    key: 1,
                                    onClick: _[1] || (_[1] = (E) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, _[3] || (_[3] = [
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
                                  ]))) : F("", !0)
                                ])
                              ]),
                              f("button", {
                                type: "button",
                                class: "p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200",
                                onClick: p
                              }, _[5] || (_[5] = [
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
                            !n.value && !o.value ? (x(), S("div", mx, [
                              _[6] || (_[6] = f("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              f("div", gx, [
                                (x(!0), S(re, null, me(c.value, (E) => (x(), S("button", {
                                  key: E,
                                  onClick: (M) => {
                                    n.value = E, h();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, H(E), 9, vx))), 128))
                              ])
                            ])) : F("", !0)
                          ]),
                          a.value ? (x(), S("div", yx, [
                            f("div", bx, [
                              o.value ? (x(), S("div", _x, [
                                f("div", Ex, [
                                  _[8] || (_[8] = f("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  f("div", wx, [
                                    (x(), S(re, null, me(4, (E) => f("div", {
                                      key: E,
                                      class: "flex items-start space-x-3"
                                    }, _[7] || (_[7] = [
                                      f("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      f("div", { class: "flex-1" }, [
                                        f("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        f("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : r.value.products && r.value.products.length > 0 ? (x(), S("div", xx, [
                                _[10] || (_[10] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                f("div", Nx, [
                                  (x(!0), S(re, null, me(r.value.products, (E) => (x(), S("a", {
                                    key: E.id,
                                    href: E.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: p
                                  }, [
                                    f("div", kx, [
                                      E.image ? (x(), S("img", {
                                        key: 0,
                                        src: E.image,
                                        alt: E.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, Cx)) : (x(), S("div", Ox, _[9] || (_[9] = [
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
                                    f("div", $x, [
                                      f("p", Tx, H(E.title), 1),
                                      f("div", Dx, [
                                        f("p", Vx, H(d(E.price)), 1),
                                        E.compareAtPrice && E.compareAtPrice > E.price ? (x(), S("p", Ax, H(d(E.compareAtPrice)), 1)) : F("", !0)
                                      ])
                                    ])
                                  ], 8, Sx))), 128))
                                ])
                              ])) : F("", !0),
                              r.value.collections && r.value.collections.length > 0 ? (x(), S("div", Ix, [
                                _[12] || (_[12] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                f("div", Mx, [
                                  (x(!0), S(re, null, me(r.value.collections, (E) => (x(), S("a", {
                                    key: E.id,
                                    href: E.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: p
                                  }, [
                                    f("span", Rx, H(E.title), 1),
                                    _[11] || (_[11] = f("svg", {
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
                                  ], 8, Px))), 128))
                                ])
                              ])) : F("", !0),
                              n.value && !o.value && (!r.value.products || r.value.products.length === 0) && (!r.value.collections || r.value.collections.length === 0) ? (x(), S("div", Lx, _[13] || (_[13] = [
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
                              ]))) : F("", !0)
                            ]),
                            n.value && (((v = r.value.products) == null ? void 0 : v.length) > 0 || (($ = r.value.collections) == null ? void 0 : $.length) > 0) ? (x(), S("div", Fx, [
                              f("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: p
                              }, [
                                je(' View all results for "' + H(n.value) + '" ', 1),
                                _[14] || (_[14] = f("svg", {
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
                              ], 8, Bx)
                            ])) : F("", !0)
                          ])) : F("", !0)
                        ])
                      ])
                    ])
                  ])) : F("", !0)
                ];
              }),
              _: 1
            })
          ])) : F("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, Hx = /* @__PURE__ */ Je(jx, [["__scopeId", "data-v-985e236a"]]), Ux = {
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
    const t = W(!1), n = X(() => {
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
      var c, d;
      if (e.publishedAt && e.publishedAt.trim() && !e.publishedAt.match(/^\d+$/) && // Not just a timestamp
      !e.publishedAt.includes("T") && // Not ISO date format
      !e.publishedAt.match(/^\d{4}-\d{2}-\d{2}/) && // Not YYYY-MM-DD format
      e.publishedAt.length < 20)
        return e.publishedAt;
      const a = e.rawPublishedAt || e.publishedAt;
      if (!a) return "";
      try {
        let u;
        const p = String(a).trim();
        if (/^\d+$/.test(p)) {
          const g = parseInt(p);
          u = new Date(g > 1e12 ? g : g * 1e3);
        } else if (typeof a == "string")
          u = new Date(a);
        else
          return "";
        if (isNaN(u.getTime()) || u.getFullYear() < 1900 || u.getFullYear() > 2100)
          return console.warn("Invalid or unreasonable date:", a, "parsed as:", u), "";
        const m = typeof window < "u" && typeof window.Shopline < "u" && ((d = (c = window.Shopline) == null ? void 0 : c.locale) == null ? void 0 : d.current) || "en";
        return new Intl.DateTimeFormat(m, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(u);
      } catch (u) {
        return console.warn("Error formatting date:", u, a), "";
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
}, qx = ["href"], zx = ["src", "alt"], Wx = { class: "relative p-6 flex-1 flex flex-col z-10" }, Kx = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, Gx = { class: "text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight" }, Yx = ["href"], Jx = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, Xx = { key: 0 }, Qx = {
  key: 1,
  class: "text-gray-300"
}, Zx = ["datetime"], eN = { class: "flex-1 mb-6" }, tN = {
  key: 0,
  class: "text-gray-600 leading-relaxed line-clamp-3"
}, nN = ["innerHTML"], sN = { class: "mt-auto" }, oN = ["href"];
function rN(e, t, n, s, o, r) {
  return x(), S("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: qe(s.cardStyles),
    onMouseenter: t[0] || (t[0] = (i) => s.isHovered = !0),
    onMouseleave: t[1] || (t[1] = (i) => s.isHovered = !1)
  }, [
    t[4] || (t[4] = f("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (x(), S("div", {
      key: 0,
      class: Ee([s.imageAspectClass, "relative overflow-hidden"])
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
        }, null, 8, zx),
        t[2] || (t[2] = f("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, qx)
    ], 2)) : F("", !0),
    f("div", Wx, [
      n.showTags && s.processedTags.length > 0 ? (x(), S("div", Kx, [
        (x(!0), S(re, null, me(s.processedTags.slice(0, 3), (i) => (x(), S("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, H(i), 1))), 128))
      ])) : F("", !0),
      f("h3", Gx, [
        f("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, H(n.title), 9, Yx)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (x(), S("div", Jx, [
        n.showAuthor && n.author ? (x(), S("span", Xx, H(n.author), 1)) : F("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (x(), S("span", Qx, "•")) : F("", !0),
        n.showDate && s.formattedDate ? (x(), S("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, H(s.formattedDate), 9, Zx)) : F("", !0)
      ])) : F("", !0),
      f("div", eN, [
        n.excerpt ? (x(), S("p", tN, H(n.excerpt), 1)) : n.content ? (x(), S("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-3",
          innerHTML: s.truncatedContent
        }, null, 8, nN)) : F("", !0)
      ]),
      f("div", sN, [
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
        ]), 8, oN)
      ])
    ])
  ], 36);
}
const iN = /* @__PURE__ */ Je(Ux, [["render", rN], ["__scopeId", "data-v-4d9d9306"]]);
({
  ...ss,
  props: {
    ...ss.props
  }
});
const lN = /* @__PURE__ */ Ue(Mf), aN = /* @__PURE__ */ Ue(k1), cN = /* @__PURE__ */ Ue(tb), uN = /* @__PURE__ */ Ue(Af), dN = /* @__PURE__ */ Ue(pb), fN = /* @__PURE__ */ Ue(Rf), pN = /* @__PURE__ */ Ue(i_), hN = /* @__PURE__ */ Ue(Lf), mN = /* @__PURE__ */ Ue(J2), gN = /* @__PURE__ */ Ue(LE), vN = /* @__PURE__ */ Ue(vw), yN = /* @__PURE__ */ Ue(If), bN = /* @__PURE__ */ Ue(qw), _N = /* @__PURE__ */ Ue(Kw), EN = /* @__PURE__ */ Ue(Jw), wN = /* @__PURE__ */ Ue(tx), xN = /* @__PURE__ */ Ue(ox), NN = /* @__PURE__ */ Ue(Hx);
customElements.define("cart-drawer", lN);
customElements.define("mobile-menu", aN);
customElements.define("product-variant-picker", cN);
customElements.define("quantity-selector", uN);
customElements.define("sticky-header", dN);
customElements.define("main-header", fN);
customElements.define("site-footer", pN);
customElements.define("collection-filters", hN);
customElements.define("collection-grid", mN);
customElements.define("product-gallery", gN);
customElements.define("product-info", vN);
customElements.define("cart-item", yN);
customElements.define("cart-summary", bN);
customElements.define("slideshow-banner", _N);
customElements.define("testimonials-carousel", EN);
customElements.define("video-player", wN);
customElements.define("password-modal", xN);
customElements.define("search-overlay", NN);
function uo(e = document) {
  e.querySelectorAll(".main-header-mount").forEach((c) => {
    if (c._vueApp) return;
    const d = Ft(Rf, {
      shopName: c.dataset.shopName || "Orion Store",
      logoUrl: c.dataset.logoUrl || "",
      navigationLinks: JSON.parse(c.dataset.navigationLinks || "[]")
    });
    c._vueApp = d, d.mount(c);
  }), e.querySelectorAll(".cart-drawer-mount").forEach((c) => {
    if (c._vueApp) return;
    const d = Ft(Mf);
    c._vueApp = d, d.mount(c);
  }), e.querySelectorAll("product-card").forEach((c) => {
    if (c._vueApp) return;
    const d = {
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
    }, u = Ft($_, d);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-sort").forEach((c) => {
    if (c._vueApp) return;
    const d = {
      collectionHandle: c.getAttribute("collection-handle"),
      currentSort: c.getAttribute("current-sort") || "manual"
    }, u = Ft(Q2, d);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("orion-button").forEach((c) => {
    if (c._vueApp) return;
    const d = {
      variant: c.getAttribute("variant") || "primary",
      size: c.getAttribute("size") || "medium",
      fullWidth: c.hasAttribute("full-width"),
      href: c.getAttribute("href"),
      type: c.getAttribute("type") || "button",
      disabled: c.hasAttribute("disabled"),
      loading: c.hasAttribute("loading"),
      rounded: c.getAttribute("rounded") || "default"
    }, u = Ft({
      components: { Button: ss },
      template: `<Button v-bind="$attrs">${c.innerHTML}</Button>`
    }, d);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-filter-drawer").forEach((c) => {
    if (c._vueApp) return;
    const d = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]")
    }, u = Ft(wE, d);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-filter-sidebar").forEach((c) => {
    if (c._vueApp) return;
    const d = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]"),
      showSort: c.getAttribute(":show-sort") === "true"
    }, u = Ft(Lf, d);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("article-card").forEach((c) => {
    if (c._vueApp) return;
    const d = {
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
    }, u = Ft(iN, d);
    c._vueApp = u, u.mount(c);
  }), e === document && document.querySelectorAll(".sticky-header").forEach((d) => {
    if (d.dataset.sticky === "true" && !d._stickyInitialized) {
      d._stickyInitialized = !0;
      let u = window.scrollY;
      window.addEventListener("scroll", () => {
        const p = window.scrollY, m = d.dataset.transparent === "true", g = d.dataset.hideOnScroll === "true";
        p > 100 && !m ? (d.classList.add("sticky", "top-0", "shadow-md"), d.style.backgroundColor = d.dataset.stickyBackground || "#ffffff") : (d.classList.remove("sticky", "shadow-md"), d.style.backgroundColor = ""), g && (p > u && p > 100 ? d.style.transform = "translateY(-100%)" : d.style.transform = "translateY(0)"), u = p;
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
window.mountVueComponents = uo;
document.addEventListener("DOMContentLoaded", () => {
  uo();
});
var Tc;
((Tc = window.Shopline) != null && Tc.designMode || window.location.href.includes("theme_preview_mode")) && (document.addEventListener("shopline:section:load", (e) => {
  const t = document.querySelector(`[data-section-id="${e.detail.sectionId}"]`) || document;
  uo(t);
}), document.addEventListener("shopline:section:reorder", () => {
  uo();
}), document.addEventListener("shopline:block:select", (e) => {
  const t = document.querySelector(`[data-block-id="${e.detail.blockId}"]`);
  t && uo(t);
}));
