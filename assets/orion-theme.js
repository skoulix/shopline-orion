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
const pe = sl.NODE_ENV !== "production" ? Object.freeze({}) : {}, ys = sl.NODE_ENV !== "production" ? Object.freeze([]) : [], De = () => {
}, Ws = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), tr = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ol = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jf = Object.prototype.hasOwnProperty, ge = (e, t) => jf.call(e, t), Y = Array.isArray, Jn = (e) => Ls(e) === "[object Map]", us = (e) => Ls(e) === "[object Set]", la = (e) => Ls(e) === "[object Date]", Hf = (e) => Ls(e) === "[object RegExp]", oe = (e) => typeof e == "function", le = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Tr = (e) => (me(e) || oe(e)) && oe(e.then) && oe(e.catch), Dc = Object.prototype.toString, Ls = (e) => Dc.call(e), rl = (e) => Ls(e).slice(8, -1), Dr = (e) => Ls(e) === "[object Object]", il = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ Je(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vc = /* @__PURE__ */ Je(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Vr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Uf = /-(\w)/g, Ce = Vr(
  (e) => e.replace(Uf, (t, n) => n ? n.toUpperCase() : "")
), qf = /\B([A-Z])/g, st = Vr(
  (e) => e.replace(qf, "-$1").toLowerCase()
), rn = Vr((e) => e.charAt(0).toUpperCase() + e.slice(1)), tn = Vr(
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
}, nr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, sr = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let aa;
const No = () => aa || (aa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zf(e, t) {
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
}, Kf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Wf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Gf = /* @__PURE__ */ Je(Wf), ca = 2;
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
          const p = t - (r - (d + u)), h = Math.max(
            1,
            n > r ? d - p : n - t
          );
          i.push("   |  " + " ".repeat(p) + "^".repeat(h));
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
function ep(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !le(t) && (e.class = ke(t)), n && (e.style = Ge(n)), e;
}
const tp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", np = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", sp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", op = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ic = /* @__PURE__ */ Je(tp), Mc = /* @__PURE__ */ Je(np), Pc = /* @__PURE__ */ Je(sp), rp = /* @__PURE__ */ Je(op), Rc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ip = /* @__PURE__ */ Je(Rc), ua = /* @__PURE__ */ Je(
  Rc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ll(e) {
  return !!e || e === "";
}
const lp = /* @__PURE__ */ Je(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), ap = /* @__PURE__ */ Je(
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
const Lc = (e) => !!(e && e.__v_isRef === !0), j = (e) => le(e) ? e : e == null ? "" : Y(e) || me(e) && (e.toString === Dc || !oe(e.toString)) ? Lc(e) ? j(e.value) : JSON.stringify(e, Fc, 2) : String(e), Fc = (e, t) => Lc(t) ? Fc(e, t.value) : Jn(t) ? {
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
    } else _e.NODE_ENV !== "production" && It("cannot run an inactive effect scope.");
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
  tt ? tt.cleanups.push(e) : _e.NODE_ENV !== "production" && !t && It(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Ee;
const ri = /* @__PURE__ */ new WeakSet();
class co {
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
    const t = Ee, n = qt;
    Ee = this, qt = !0;
    try {
      return this.fn();
    } finally {
      _e.NODE_ENV !== "production" && Ee !== this && It(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), zc(this), Ee = t, qt = n, this.flags &= -3;
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
let Hc = 0, eo, to;
function Uc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = to, to = e;
    return;
  }
  e.next = eo, eo = e;
}
function ul() {
  Hc++;
}
function dl() {
  if (--Hc > 0)
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
    if (t.dep.version !== t.version || t.dep.computed && (Kc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Kc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === uo) || (e.globalVersion = uo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ee, s = qt;
  Ee = e, qt = !0;
  try {
    qc(e);
    const o = e.fn(e._value);
    (t.version === 0 || pt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ee = n, qt = s, zc(e), e.flags &= -3;
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
function hp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function mp(e, t) {
  e.effect instanceof co && (e = e.effect.fn);
  const n = new co(e);
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
let qt = !0;
const Wc = [];
function Wt() {
  Wc.push(qt), qt = !1;
}
function Gt() {
  const e = Wc.pop();
  qt = e === void 0 ? !0 : e;
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
let uo = 0;
class vp {
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
    if (!Ee || !qt || Ee === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ee)
      n = this.activeLink = new vp(Ee, this), Ee.deps ? (n.prevDep = Ee.depsTail, Ee.depsTail.nextDep = n, Ee.depsTail = n) : Ee.deps = Ee.depsTail = n, Gc(n);
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
    this.version++, uo++, this.notify(t);
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
), fo = Symbol(
  _e.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ze(e, t, n) {
  if (qt && Ee) {
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
    uo++;
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
    const a = Y(e), c = a && il(n);
    if (a && n === "length") {
      const d = Number(s);
      i.forEach((u, p) => {
        (p === "length" || p === fo || !xt(p) && p >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), c && l(i.get(fo)), t) {
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
  const n = or.get(e);
  return n && n.get(t);
}
function hs(e) {
  const t = ce(e);
  return t === e ? t : (ze(t, "iterate", fo), it(e) ? t : t.map(Ze));
}
function Mr(e) {
  return ze(e = ce(e), "iterate", fo), e;
}
const bp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ii(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return hs(this).concat(
      ...e.map((t) => Y(t) ? hs(t) : t)
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
    return Us(this, "pop");
  },
  push(...e) {
    return Us(this, "push", e);
  },
  reduce(e, ...t) {
    return fa(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fa(this, "reduceRight", e, t);
  },
  shift() {
    return Us(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return an(this, "some", e, t, void 0, arguments);
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
    return ii(this, "values", Ze);
  }
};
function ii(e, t, n) {
  const s = Mr(e), o = s[t]();
  return s !== e && !it(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const _p = Array.prototype;
function an(e, t, n, s, o, r) {
  const i = Mr(e), l = i !== e && !it(e), a = i[t];
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
  const o = Mr(e);
  let r = n;
  return o !== e && (it(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, Ze(l), a, e);
  }), o[t](r, ...s);
}
function li(e, t, n) {
  const s = ce(e);
  ze(s, "iterate", fo);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Ss(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : o;
}
function Us(e, t, n = []) {
  Wt(), ul();
  const s = ce(e)[t].apply(e, n);
  return dl(), Gt(), s;
}
const Ep = /* @__PURE__ */ Je("__proto__,__v_isRef,__isVue"), Yc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
);
function wp(e) {
  xt(e) || (e = String(e));
  const t = ce(this);
  return ze(t, "has", e), t.hasOwnProperty(e);
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
    return (xt(n) ? Yc.has(n) : Ep(n)) || (o || ze(t, "get", n), r) ? l : Ie(l) ? i && il(n) ? l : l.value : me(l) ? o ? Rr(l) : Ns(l) : l;
  }
}
class Xc extends Jc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Yt(r);
      if (!it(s) && !Yt(s) && (r = ce(r), s = ce(s)), !Y(t) && Ie(r) && !Ie(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = Y(t) && il(n) ? Number(n) < t.length : ge(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ie(t) ? t : o
    );
    return t === ce(o) && (i ? pt(s, r) && nn(t, "set", n, s, r) : nn(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ge(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && nn(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!xt(n) || !Yc.has(n)) && ze(t, "has", n), s;
  }
  ownKeys(t) {
    return ze(
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
const xp = /* @__PURE__ */ new Xc(), Np = /* @__PURE__ */ new Qc(), Sp = /* @__PURE__ */ new Xc(!0), kp = /* @__PURE__ */ new Qc(!0), Ni = (e) => e, Ao = (e) => Reflect.getPrototypeOf(e);
function Cp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ce(o), i = Jn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = o[e](...s), d = n ? Ni : t ? rr : Ze;
    return !t && ze(
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
function Op(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = ce(r), l = ce(o);
      e || (pt(o, l) && ze(i, "get", o), ze(i, "get", l));
      const { has: a } = Ao(i), c = t ? Ni : e ? rr : Ze;
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
      return e || (pt(o, l) && ze(i, "has", o), ze(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = ce(l), c = t ? Ni : e ? rr : Ze;
      return !e && ze(a, "iterate", Xn), l.forEach((d, u) => o.call(r, c(d), c(u), i));
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
        !t && !it(o) && !Yt(o) && (o = ce(o));
        const r = ce(this);
        return Ao(r).has.call(r, o) || (r.add(o), nn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !it(r) && !Yt(r) && (r = ce(r));
        const i = ce(this), { has: l, get: a } = Ao(i);
        let c = l.call(i, o);
        c ? _e.NODE_ENV !== "production" && pa(i, l, o) : (o = ce(o), c = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, r), c ? pt(r, d) && nn(i, "set", o, r, d) : nn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ce(this), { has: i, get: l } = Ao(r);
        let a = i.call(r, o);
        a ? _e.NODE_ENV !== "production" && pa(r, i, o) : (o = ce(o), a = i.call(r, o));
        const c = l ? l.call(r, o) : void 0, d = r.delete(o);
        return a && nn(r, "delete", o, void 0, c), d;
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
    n[o] = Cp(o, e, t);
  }), n;
}
function Pr(e, t) {
  const n = Op(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
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
function Ns(e) {
  return Yt(e) ? e : Lr(
    e,
    !1,
    xp,
    $p,
    Zc
  );
}
function su(e) {
  return Lr(
    e,
    !1,
    Sp,
    Tp,
    eu
  );
}
function Rr(e) {
  return Lr(
    e,
    !0,
    Np,
    Dp,
    tu
  );
}
function jt(e) {
  return Lr(
    e,
    !0,
    kp,
    Vp,
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
  return Yt(e) ? mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Yt(e) {
  return !!(e && e.__v_isReadonly);
}
function it(e) {
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
const Ze = (e) => me(e) ? Ns(e) : e, rr = (e) => me(e) ? Rr(e) : e;
function Ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function q(e) {
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
    this.dep = new Ir(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : Ze(t), this.__v_isShallow = n;
  }
  get value() {
    return _e.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || it(t) || Yt(t);
    t = s ? t : ce(t), pt(t, n) && (this._rawValue = t, this._value = s ? t : Ze(t), _e.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Pp(e) {
  e.dep && (_e.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function So(e) {
  return Ie(e) ? e.value : e;
}
function Rp(e) {
  return oe(e) ? e() : So(e);
}
const Lp = {
  get: (e, t, n) => t === "__v_raw" ? e : So(Reflect.get(e, t, n)),
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
  return new Fp(e);
}
function Bp(e) {
  _e.NODE_ENV !== "production" && !Ss(e) && It("toRefs() expects a reactive object but received a plain one.");
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
  return Ie(e) ? e : oe(e) ? new Hp(e) : me(e) && arguments.length > 1 ? au(e, t, n) : q(e);
}
function au(e, t, n) {
  const s = e[t];
  return Ie(s) ? s : new jp(e, t, n);
}
class qp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ir(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = uo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
function zp(e, t, n = !1) {
  let s, o;
  oe(e) ? s = e : (s = e.get, o = e.set);
  const r = new qp(s, o, n);
  return _e.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const Kp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Wp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Mo = {}, ir = /* @__PURE__ */ new WeakMap();
let Sn;
function Gp() {
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
function Yp(e, t, n = pe) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, c = (_) => {
    (n.onWarn || It)(
      "Invalid watch source: ",
      _,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (_) => o ? _ : it(_) || o === !1 || o === 0 ? pn(_, 1) : pn(_);
  let u, p, h, y, v = !1, T = !1;
  if (Ie(e) ? (p = () => e.value, v = it(e)) : mn(e) ? (p = () => d(e), v = !0) : Y(e) ? (T = !0, v = e.some((_) => mn(_) || it(_)), p = () => e.map((_) => {
    if (Ie(_))
      return _.value;
    if (mn(_))
      return d(_);
    if (oe(_))
      return a ? a(_, 2) : _();
    _e.NODE_ENV !== "production" && c(_);
  })) : oe(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (h) {
      Wt();
      try {
        h();
      } finally {
        Gt();
      }
    }
    const _ = Sn;
    Sn = u;
    try {
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Sn = _;
    }
  } : (p = De, _e.NODE_ENV !== "production" && c(e)), t && o) {
    const _ = p, A = o === !0 ? 1 / 0 : o;
    p = () => pn(_(), A);
  }
  const C = cl(), b = () => {
    u.stop(), C && C.active && ol(C.effects, u);
  };
  if (r && t) {
    const _ = t;
    t = (...A) => {
      _(...A), b();
    };
  }
  let g = T ? new Array(e.length).fill(Mo) : Mo;
  const k = (_) => {
    if (!(!(u.flags & 1) || !u.dirty && !_))
      if (t) {
        const A = u.run();
        if (o || v || (T ? A.some((M, D) => pt(M, g[D])) : pt(A, g))) {
          h && h();
          const M = Sn;
          Sn = u;
          try {
            const D = [
              A,
              // pass undefined as the old value when it's changed for the first time
              g === Mo ? void 0 : T && g[0] === Mo ? [] : g,
              y
            ];
            g = A, a ? a(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            Sn = M;
          }
        }
      } else
        u.run();
  };
  return l && l(k), u = new co(p), u.scheduler = i ? () => i(k, !1) : k, y = (_) => cu(_, !1, u), h = u.onStop = () => {
    const _ = ir.get(u);
    if (_) {
      if (a)
        a(_, 4);
      else
        for (const A of _) A();
      ir.delete(u);
    }
  }, _e.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? k(!0) : g = u.run() : i ? i(k.bind(null, !0), !0) : u.run(), b.pause = u.pause.bind(u), b.resume = u.resume.bind(u), b.stop = b, b;
}
function pn(e, t = 1 / 0, n) {
  if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
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
  else if (Dr(e)) {
    for (const s in e)
      pn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && pn(e[s], t, n);
  }
  return e;
}
var S = {};
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
  ai = !0, Wt();
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
  Gt(), ai = !1;
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
  S.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? R(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && R(`${t} is NaN - the duration expression might be incorrect.`));
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
    Bn(o, t, n);
  }
}
function Mt(e, t, n, s) {
  if (oe(e)) {
    const o = ds(e, t, n, s);
    return o && Tr(o) && o.catch((r) => {
      Bn(r, t, n);
    }), o;
  }
  if (Y(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Mt(e[r], t, n, s));
    return o;
  } else S.NODE_ENV !== "production" && R(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = S.NODE_ENV !== "production" ? Fr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Wt(), ds(r, null, 10, [
        e,
        a,
        c
      ]), Gt();
      return;
    }
  }
  th(e, n, o, s, i);
}
function th(e, t, n, s = !0, o = !1) {
  if (S.NODE_ENV !== "production") {
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
const ht = [];
let Qt = -1;
const Es = [];
let kn = null, vs = 0;
const du = /* @__PURE__ */ Promise.resolve();
let lr = null;
const nh = 100;
function Fs(e) {
  const t = lr || du;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sh(e) {
  let t = Qt + 1, n = ht.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ht[s], r = po(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Br(e) {
  if (!(e.flags & 1)) {
    const t = po(e), n = ht[ht.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= po(n) ? ht.push(e) : ht.splice(sh(t), 0, e), e.flags |= 1, fu();
  }
}
function fu() {
  lr || (lr = du.then(pu));
}
function ks(e) {
  Y(e) ? Es.push(...e) : kn && e.id === -1 ? kn.splice(vs + 1, 0, e) : e.flags & 1 || (Es.push(e), e.flags |= 1), fu();
}
function ha(e, t, n = Qt + 1) {
  for (S.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ht.length; n++) {
    const s = ht[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || S.NODE_ENV !== "production" && ml(t, s))
        continue;
      ht.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ar(e) {
  if (Es.length) {
    const t = [...new Set(Es)].sort(
      (n, s) => po(n) - po(s)
    );
    if (Es.length = 0, kn) {
      kn.push(...t);
      return;
    }
    for (kn = t, S.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vs = 0; vs < kn.length; vs++) {
      const n = kn[vs];
      S.NODE_ENV !== "production" && ml(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kn = null, vs = 0;
  }
}
const po = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pu(e) {
  S.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = S.NODE_ENV !== "production" ? (n) => ml(e, n) : De;
  try {
    for (Qt = 0; Qt < ht.length; Qt++) {
      const n = ht[Qt];
      if (n && !(n.flags & 8)) {
        if (S.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ds(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Qt < ht.length; Qt++) {
      const n = ht[Qt];
      n && (n.flags &= -2);
    }
    Qt = -1, ht.length = 0, ar(e), lr = null, (ht.length || Es.length) && pu(e);
  }
}
function ml(e, t) {
  const n = e.get(t) || 0;
  if (n > nh) {
    const s = t.i, o = s && $s(s.type);
    return Bn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ht = !1;
const zo = /* @__PURE__ */ new Map();
S.NODE_ENV !== "production" && (No().__VUE_HMR_RUNTIME__ = {
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
    initialDef: cr(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function cr(e) {
  return wd(e) ? e.__vccOpts : e;
}
function ih(e, t) {
  const n = rs.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, cr(s.type).render = t), s.renderCache = [], Ht = !0, s.update(), Ht = !1;
  }));
}
function lh(e, t) {
  const n = rs.get(e);
  if (!n) return;
  t = cr(t), ma(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = cr(r.type);
    let l = zo.get(i);
    l || (i !== n.initialDef && ma(i, t), zo.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Br(() => {
      Ht = !0, r.parent.update(), Ht = !1, l.delete(r);
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
let Ft, Gs = [], Si = !1;
function ko(e, ...t) {
  Ft ? Ft.emit(e, ...t) : Si || Gs.push({ event: e, args: t });
}
function gl(e, t) {
  var n, s;
  Ft = e, Ft ? (Ft.enabled = !0, Gs.forEach(({ event: o, args: r }) => Ft.emit(o, ...r)), Gs = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    gl(r, t);
  }), setTimeout(() => {
    Ft || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Si = !0, Gs = []);
  }, 3e3)) : (Si = !0, Gs = []);
}
function ah(e, t) {
  ko("app:init", e, t, {
    Fragment: ie,
    Text: on,
    Comment: Ve,
    Static: Mn
  });
}
function ch(e) {
  ko("app:unmount", e);
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
  Ft && typeof Ft.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ft.cleanupBuffer(e) && uh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vl(e) {
  return (t) => {
    ko(
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
    ko(e, t.appContext.app, t.uid, t, n, s);
  };
}
function hh(e, t, n) {
  ko(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Be = null, jr = null;
function ho(e) {
  const t = Be;
  return Be = e, jr = e && e.type.__scopeId || null, t;
}
function mh(e) {
  jr = e;
}
function gh() {
  jr = null;
}
const vh = (e) => Pe;
function Pe(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Mi(-1);
    const r = ho(t);
    let i;
    try {
      i = e(...o);
    } finally {
      ho(r), s._d && Mi(1);
    }
    return S.NODE_ENV !== "production" && mu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vu(e) {
  Vc(e) && R("Do not use built-in directive ids as custom directive id: " + e);
}
function $e(e, t) {
  if (Be === null)
    return S.NODE_ENV !== "production" && R("withDirectives can only be used inside render functions."), e;
  const n = Oo(Be), s = e.dirs || (e.dirs = []);
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
function en(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (Wt(), Mt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Gt());
  }
}
const yu = Symbol("_vte"), bu = (e) => e.__isTeleport, Zn = (e) => e && (e.disabled || e.disabled === ""), ga = (e) => e && (e.defer || e.defer === ""), va = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ya = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ci = (e, t) => {
  const n = e && e.to;
  if (le(n))
    if (t) {
      const s = t(n);
      return S.NODE_ENV !== "production" && !s && !Zn(e) && R(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return S.NODE_ENV !== "production" && R(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return S.NODE_ENV !== "production" && !n && !Zn(e) && R(`Invalid Teleport target: ${n}`), n;
}, _u = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, l, a, c) {
    const {
      mc: d,
      pc: u,
      pbc: p,
      o: { insert: h, querySelector: y, createText: v, createComment: T }
    } = c, C = Zn(t.props);
    let { shapeFlag: b, children: g, dynamicChildren: k } = t;
    if (S.NODE_ENV !== "production" && Ht && (a = !1, k = null), e == null) {
      const _ = t.el = S.NODE_ENV !== "production" ? T("teleport start") : v(""), A = t.anchor = S.NODE_ENV !== "production" ? T("teleport end") : v("");
      h(_, n, s), h(A, n, s);
      const M = (m, x) => {
        b & 16 && (o && o.isCE && (o.ce._teleportTarget = m), d(
          g,
          m,
          x,
          o,
          r,
          i,
          l,
          a
        ));
      }, D = () => {
        const m = t.target = Ci(t.props, y), x = Eu(m, t, v, h);
        m ? (i !== "svg" && va(m) ? i = "svg" : i !== "mathml" && ya(m) && (i = "mathml"), C || (M(m, x), Ko(t, !1))) : S.NODE_ENV !== "production" && !C && R(
          "Invalid Teleport target on mount:",
          m,
          `(${typeof m})`
        );
      };
      C && (M(n, A), Ko(t, !0)), ga(t.props) ? (t.el.__isMounted = !1, qe(() => {
        D(), delete t.el.__isMounted;
      }, r)) : D();
    } else {
      if (ga(t.props) && e.el.__isMounted === !1) {
        qe(() => {
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
      const _ = t.anchor = e.anchor, A = t.target = e.target, M = t.targetAnchor = e.targetAnchor, D = Zn(e.props), m = D ? n : A, x = D ? _ : M;
      if (i === "svg" || va(A) ? i = "svg" : (i === "mathml" || ya(A)) && (i = "mathml"), k ? (p(
        e.dynamicChildren,
        k,
        m,
        o,
        r,
        i,
        l
      ), oo(e, t, S.NODE_ENV === "production")) : a || u(
        e,
        t,
        m,
        x,
        o,
        r,
        i,
        l,
        !1
      ), C)
        D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Po(
          t,
          n,
          _,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const V = t.target = Ci(
          t.props,
          y
        );
        V ? Po(
          t,
          V,
          null,
          c,
          0
        ) : S.NODE_ENV !== "production" && R(
          "Invalid Teleport target on update:",
          A,
          `(${typeof A})`
        );
      } else D && Po(
        t,
        A,
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
      const h = r || !Zn(p);
      for (let y = 0; y < l.length; y++) {
        const v = l[y];
        s(
          v,
          t,
          n,
          h,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: Po,
  hydrate: yh
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
function yh(e, t, n, s, o, r, {
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: c, createText: d }
}, u) {
  const p = t.target = Ci(
    t.props,
    a
  );
  if (p) {
    const h = Zn(t.props), y = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (h)
        t.anchor = u(
          i(e),
          t,
          l(e),
          n,
          s,
          o,
          r
        ), t.targetStart = y, t.targetAnchor = y && i(y);
      else {
        t.anchor = i(e);
        let v = y;
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
        t.targetAnchor || Eu(p, t, d, c), u(
          y && i(y),
          t,
          p,
          n,
          s,
          o,
          r
        );
      }
    Ko(t, h);
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
  return He(() => {
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
}, bh = {
  name: "BaseTransition",
  props: bl,
  setup(e, { slots: t }) {
    const n = ut(), s = yl();
    return () => {
      const o = t.default && Hr(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = xu(o), i = ce(e), { mode: l } = i;
      if (S.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && R(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ui(r);
      const a = ba(r);
      if (!a)
        return ui(r);
      let c = Cs(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => c = u
      );
      a.type !== Ve && yn(a, c);
      let d = n.subTree && ba(n.subTree);
      if (d && d.type !== Ve && !Bt(a, d) && wu(n).type !== Ve) {
        let u = Cs(
          d,
          i,
          s,
          n
        );
        if (yn(d, u), l === "out-in" && a.type !== Ve)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, d = void 0;
          }, ui(r);
        l === "in-out" && a.type !== Ve ? u.delayLeave = (p, h, y) => {
          const v = Su(
            s,
            d
          );
          v[String(d.key)] = d, p[Cn] = () => {
            h(), p[Cn] = void 0, delete c.delayedLeave, d = void 0;
          }, c.delayedLeave = () => {
            y(), delete c.delayedLeave, d = void 0;
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
        if (S.NODE_ENV !== "production" && n) {
          R(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, S.NODE_ENV === "production") break;
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
    onLeave: h,
    onAfterLeave: y,
    onLeaveCancelled: v,
    onBeforeAppear: T,
    onAppear: C,
    onAfterAppear: b,
    onAppearCancelled: g
  } = t, k = String(e.key), _ = Su(n, e), A = (m, x) => {
    m && Mt(
      m,
      s,
      9,
      x
    );
  }, M = (m, x) => {
    const V = x[1];
    A(m, x), Y(m) ? m.every((O) => O.length <= 1) && V() : m.length <= 1 && V();
  }, D = {
    mode: i,
    persisted: l,
    beforeEnter(m) {
      let x = a;
      if (!n.isMounted)
        if (r)
          x = T || a;
        else
          return;
      m[Cn] && m[Cn](
        !0
        /* cancelled */
      );
      const V = _[k];
      V && Bt(e, V) && V.el[Cn] && V.el[Cn](), A(x, [m]);
    },
    enter(m) {
      let x = c, V = d, O = u;
      if (!n.isMounted)
        if (r)
          x = C || c, V = b || d, O = g || u;
        else
          return;
      let P = !1;
      const z = m[Ro] = (K) => {
        P || (P = !0, K ? A(O, [m]) : A(V, [m]), D.delayedLeave && D.delayedLeave(), m[Ro] = void 0);
      };
      x ? M(x, [m, z]) : z();
    },
    leave(m, x) {
      const V = String(e.key);
      if (m[Ro] && m[Ro](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return x();
      A(p, [m]);
      let O = !1;
      const P = m[Cn] = (z) => {
        O || (O = !0, x(), z ? A(v, [m]) : A(y, [m]), m[Cn] = void 0, _[V] === e && delete _[V]);
      };
      _[V] = e, h ? M(h, [m, P]) : P();
    },
    clone(m) {
      const x = Cs(
        m,
        t,
        n,
        s,
        o
      );
      return o && o(x), x;
    }
  };
  return D;
}
function ui(e) {
  if (Bs(e))
    return e = Pt(e), e.children = null, e;
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
function Hr(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ie ? (i.patchFlag & 128 && o++, s = s.concat(
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
  const e = ut();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (S.NODE_ENV !== "production" && R(
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
    S.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? R(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else S.NODE_ENV !== "production" && R(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = S.NODE_ENV !== "production" ? Rr(n) : n;
  return S.NODE_ENV !== "production" && ku.add(s), s;
}
function ws(e, t, n, s, o = !1) {
  if (Y(e)) {
    e.forEach(
      (y, v) => ws(
        y,
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
  const r = s.shapeFlag & 4 ? Oo(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (S.NODE_ENV !== "production" && !l) {
    R(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, p = ce(u), h = u === pe ? () => !1 : (y) => S.NODE_ENV !== "production" && (ge(p, y) && !Ie(p[y]) && R(
    `Template ref "${y}" used on a non-ref value. It will not work in the production build.`
  ), ku.has(p[y])) ? !1 : ge(p, y);
  if (c != null && c !== a && (le(c) ? (d[c] = null, h(c) && (u[c] = null)) : Ie(c) && (c.value = null)), oe(a))
    ds(a, l, 12, [i, d]);
  else {
    const y = le(a), v = Ie(a);
    if (y || v) {
      const T = () => {
        if (e.f) {
          const C = y ? h(a) ? u[a] : d[a] : a.value;
          o ? Y(C) && ol(C, r) : Y(C) ? C.includes(r) || C.push(r) : y ? (d[a] = [r], h(a) && (u[a] = d[a])) : (a.value = [r], e.k && (d[e.k] = a.value));
        } else y ? (d[a] = i, h(a) && (u[a] = i)) : v ? (a.value = i, e.k && (d[e.k] = i)) : S.NODE_ENV !== "production" && R("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (T.id = -1, qe(T, n)) : T();
    } else S.NODE_ENV !== "production" && R("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let _a = !1;
const Hn = () => {
  _a || (console.error("Hydration completed but contains mismatches."), _a = !0);
}, wh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", xh = (e) => e.namespaceURI.includes("MathML"), Lo = (e) => {
  if (e.nodeType === 1) {
    if (wh(e)) return "svg";
    if (xh(e)) return "mathml";
  }
}, Wn = (e) => e.nodeType === 8;
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
  } = e, d = (g, k) => {
    if (!k.hasChildNodes()) {
      S.NODE_ENV !== "production" && R(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, g, k), ar(), k._vnode = g;
      return;
    }
    u(k.firstChild, g, null, null, null), ar(), k._vnode = g;
  }, u = (g, k, _, A, M, D = !1) => {
    D = D || !!k.dynamicChildren;
    const m = Wn(g) && g.data === "[", x = () => v(
      g,
      k,
      _,
      A,
      M,
      m
    ), { type: V, ref: O, shapeFlag: P, patchFlag: z } = k;
    let K = g.nodeType;
    k.el = g, S.NODE_ENV !== "production" && (os(g, "__vnode", k, !0), os(g, "__vueParentComponent", _, !0)), z === -2 && (D = !1, k.dynamicChildren = null);
    let ee = null;
    switch (V) {
      case on:
        K !== 3 ? k.children === "" ? (a(k.el = o(""), i(g), g), ee = g) : ee = x() : (g.data !== k.children && (S.NODE_ENV !== "production" && R(
          "Hydration text mismatch in",
          g.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            g.data
          )}
  - expected on client: ${JSON.stringify(k.children)}`
        ), Hn(), g.data = k.children), ee = r(g));
        break;
      case Ve:
        b(g) ? (ee = r(g), C(
          k.el = g.content.firstChild,
          g,
          _
        )) : K !== 8 || m ? ee = x() : ee = r(g);
        break;
      case Mn:
        if (m && (g = r(g), K = g.nodeType), K === 1 || K === 3) {
          ee = g;
          const ne = !k.children.length;
          for (let te = 0; te < k.staticCount; te++)
            ne && (k.children += ee.nodeType === 1 ? ee.outerHTML : ee.data), te === k.staticCount - 1 && (k.anchor = ee), ee = r(ee);
          return m ? r(ee) : ee;
        } else
          x();
        break;
      case ie:
        m ? ee = y(
          g,
          k,
          _,
          A,
          M,
          D
        ) : ee = x();
        break;
      default:
        if (P & 1)
          (K !== 1 || k.type.toLowerCase() !== g.tagName.toLowerCase()) && !b(g) ? ee = x() : ee = p(
            g,
            k,
            _,
            A,
            M,
            D
          );
        else if (P & 6) {
          k.slotScopeIds = M;
          const ne = i(g);
          if (m ? ee = T(g) : Wn(g) && g.data === "teleport start" ? ee = T(g, g.data, "teleport end") : ee = r(g), t(
            k,
            ne,
            null,
            _,
            A,
            Lo(ne),
            D
          ), In(k) && !k.type.__asyncResolved) {
            let te;
            m ? (te = ue(ie), te.anchor = ee ? ee.previousSibling : ne.lastChild) : te = g.nodeType === 3 ? je("") : ue("div"), te.el = g, k.component.subTree = te;
          }
        } else P & 64 ? K !== 8 ? ee = x() : ee = k.type.hydrate(
          g,
          k,
          _,
          A,
          M,
          D,
          e,
          h
        ) : P & 128 ? ee = k.type.hydrate(
          g,
          k,
          _,
          A,
          Lo(i(g)),
          M,
          D,
          e,
          u
        ) : S.NODE_ENV !== "production" && R("Invalid HostVNode type:", V, `(${typeof V})`);
    }
    return O != null && ws(O, null, A, k), ee;
  }, p = (g, k, _, A, M, D) => {
    D = D || !!k.dynamicChildren;
    const { type: m, props: x, patchFlag: V, shapeFlag: O, dirs: P, transition: z } = k, K = m === "input" || m === "option";
    if (S.NODE_ENV !== "production" || K || V !== -1) {
      P && en(k, null, _, "created");
      let ee = !1;
      if (b(g)) {
        ee = Qu(
          null,
          // no need check parentSuspense in hydration
          z
        ) && _ && _.vnode.props && _.vnode.props.appear;
        const te = g.content.firstChild;
        if (ee) {
          const we = te.getAttribute("class");
          we && (te.$cls = we), z.beforeEnter(te);
        }
        C(te, g, _), k.el = g = te;
      }
      if (O & 16 && // skip if element has innerHTML / textContent
      !(x && (x.innerHTML || x.textContent))) {
        let te = h(
          g.firstChild,
          k,
          g,
          _,
          A,
          M,
          D
        ), we = !1;
        for (; te; ) {
          Ys(
            g,
            1
            /* CHILDREN */
          ) || (S.NODE_ENV !== "production" && !we && (R(
            "Hydration children mismatch on",
            g,
            `
Server rendered element contains more child nodes than client vdom.`
          ), we = !0), Hn());
          const gt = te;
          te = te.nextSibling, l(gt);
        }
      } else if (O & 8) {
        let te = k.children;
        te[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (te = te.slice(1)), g.textContent !== te && (Ys(
          g,
          0
          /* TEXT */
        ) || (S.NODE_ENV !== "production" && R(
          "Hydration text content mismatch on",
          g,
          `
  - rendered on server: ${g.textContent}
  - expected on client: ${k.children}`
        ), Hn()), g.textContent = k.children);
      }
      if (x) {
        if (S.NODE_ENV !== "production" || K || !D || V & 48) {
          const te = g.tagName.includes("-");
          for (const we in x)
            S.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(P && P.some((gt) => gt.dir.created)) && Sh(g, we, x[we], k, _) && Hn(), (K && (we.endsWith("value") || we === "indeterminate") || vn(we) && !An(we) || // force hydrate v-bind with .prop modifiers
            we[0] === "." || te) && s(g, we, null, x[we], void 0, _);
        } else if (x.onClick)
          s(
            g,
            "onClick",
            null,
            x.onClick,
            void 0,
            _
          );
        else if (V & 4 && mn(x.style))
          for (const te in x.style) x.style[te];
      }
      let ne;
      (ne = x && x.onVnodeBeforeMount) && _t(ne, _, k), P && en(k, null, _, "beforeMount"), ((ne = x && x.onVnodeMounted) || P || ee) && ad(() => {
        ne && _t(ne, _, k), ee && z.enter(g), P && en(k, null, _, "mounted");
      }, A);
    }
    return g.nextSibling;
  }, h = (g, k, _, A, M, D, m) => {
    m = m || !!k.dynamicChildren;
    const x = k.children, V = x.length;
    let O = !1;
    for (let P = 0; P < V; P++) {
      const z = m ? x[P] : x[P] = mt(x[P]), K = z.type === on;
      g ? (K && !m && P + 1 < V && mt(x[P + 1]).type === on && (a(
        o(
          g.data.slice(z.children.length)
        ),
        _,
        r(g)
      ), g.data = z.children), g = u(
        g,
        z,
        A,
        M,
        D,
        m
      )) : K && !z.children ? a(z.el = o(""), _) : (Ys(
        _,
        1
        /* CHILDREN */
      ) || (S.NODE_ENV !== "production" && !O && (R(
        "Hydration children mismatch on",
        _,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), O = !0), Hn()), n(
        null,
        z,
        _,
        null,
        A,
        M,
        Lo(_),
        D
      ));
    }
    return g;
  }, y = (g, k, _, A, M, D) => {
    const { slotScopeIds: m } = k;
    m && (M = M ? M.concat(m) : m);
    const x = i(g), V = h(
      r(g),
      k,
      x,
      _,
      A,
      M,
      D
    );
    return V && Wn(V) && V.data === "]" ? r(k.anchor = V) : (Hn(), a(k.anchor = c("]"), x, V), V);
  }, v = (g, k, _, A, M, D) => {
    if (Ys(
      g.parentElement,
      1
      /* CHILDREN */
    ) || (S.NODE_ENV !== "production" && R(
      `Hydration node mismatch:
- rendered on server:`,
      g,
      g.nodeType === 3 ? "(text)" : Wn(g) && g.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      k.type
    ), Hn()), k.el = null, D) {
      const V = T(g);
      for (; ; ) {
        const O = r(g);
        if (O && O !== V)
          l(O);
        else
          break;
      }
    }
    const m = r(g), x = i(g);
    return l(g), n(
      null,
      k,
      x,
      m,
      _,
      A,
      Lo(x),
      M
    ), _ && (_.vnode.el = k.el, Gr(_, k.el)), m;
  }, T = (g, k = "[", _ = "]") => {
    let A = 0;
    for (; g; )
      if (g = r(g), g && Wn(g) && (g.data === k && A++, g.data === _)) {
        if (A === 0)
          return r(g);
        A--;
      }
    return g;
  }, C = (g, k, _) => {
    const A = k.parentNode;
    A && A.replaceChild(g, k);
    let M = _;
    for (; M; )
      M.vnode.el === k && (M.vnode.el = M.subTree.el = g), M = M.parent;
  }, b = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [d, u];
}
function Sh(e, t, n, s, o) {
  let r, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = ke(n), kh(Ea(l || ""), Ea(a)) || (r = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : Zf(Ge(n));
    const c = wa(l), d = wa(a);
    if (s.dirs)
      for (const { dir: u, value: p } of s.dirs)
        u.name === "show" && !p && d.set("display", "none");
    o && Cu(o, s, d), Ch(c, d) || (r = 3, i = "style");
  } else (e instanceof SVGElement && ap(t) || e instanceof HTMLElement && (ua(t) || lp(t))) && (ua(t) ? (l = e.hasAttribute(t), a = ll(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = cp(n) ? String(n) : !1), l !== a && (r = 4, i = t));
  if (r != null && !Ys(e, r)) {
    const c = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, d = `Hydration ${Ou[r]} mismatch on`, u = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return R(d, e, u), !0;
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
  if (e.getCssVars && (t === s || s && s.type === ie && s.children.includes(t))) {
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
function Ys(e, t) {
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
const Oh = No().requestIdleCallback || ((e) => setTimeout(e, 1)), $h = No().cancelIdleCallback || ((e) => clearTimeout(e)), Th = (e = 1e4) => (t) => {
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
  const p = () => (u++, c = null, h()), h = () => {
    let y;
    return c || (y = c = t().catch((v) => {
      if (v = v instanceof Error ? v : new Error(String(v)), a)
        return new Promise((T, C) => {
          a(v, () => T(p()), () => C(v), u + 1);
        });
      throw v;
    }).then((v) => {
      if (y !== c && c)
        return c;
      if (S.NODE_ENV !== "production" && !v && R(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), v && (v.__esModule || v[Symbol.toStringTag] === "Module") && (v = v.default), S.NODE_ENV !== "production" && v && !me(v) && !oe(v))
        throw new Error(`Invalid async component load result: ${v}`);
      return d = v, v;
    }));
  };
  return /* @__PURE__ */ _l({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(y, v, T) {
      let C = !1;
      (v.bu || (v.bu = [])).push(() => C = !0);
      const b = () => {
        if (C) {
          S.NODE_ENV !== "production" && R(
            `Skipping lazy hydration for component '${$s(d) || d.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        T();
      }, g = r ? () => {
        const k = r(
          b,
          (_) => Mh(y, _)
        );
        k && (v.bum || (v.bum = [])).push(k);
      } : b;
      d ? g() : h().then(() => !v.isUnmounted && g());
    },
    get __asyncResolved() {
      return d;
    },
    setup() {
      const y = We;
      if (El(y), d)
        return () => di(d, y);
      const v = (g) => {
        c = null, Bn(
          g,
          y,
          13,
          !s
        );
      };
      if (l && y.suspense || Os)
        return h().then((g) => () => di(g, y)).catch((g) => (v(g), () => s ? ue(s, {
          error: g
        }) : null));
      const T = q(!1), C = q(), b = q(!!o);
      return o && setTimeout(() => {
        b.value = !1;
      }, o), i != null && setTimeout(() => {
        if (!T.value && !C.value) {
          const g = new Error(
            `Async component timed out after ${i}ms.`
          );
          v(g), C.value = g;
        }
      }, i), h().then(() => {
        T.value = !0, y.parent && Bs(y.parent.vnode) && y.parent.update();
      }).catch((g) => {
        v(g), C.value = g;
      }), () => {
        if (T.value && d)
          return di(d, y);
        if (C.value && s)
          return ue(s, {
            error: C.value
          });
        if (n && !b.value)
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
        const b = t.default && t.default();
        return b && b.length === 1 ? b[0] : b;
      };
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let i = null;
    S.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: d,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (b, g, k, _, A) => {
      const M = b.component;
      c(b, g, k, 0, l), a(
        M.vnode,
        b,
        g,
        k,
        M,
        l,
        _,
        b.slotScopeIds,
        A
      ), qe(() => {
        M.isDeactivated = !1, M.a && Tn(M.a);
        const D = b.props && b.props.onVnodeMounted;
        D && _t(D, M.parent, b);
      }, l), S.NODE_ENV !== "production" && ki(M);
    }, s.deactivate = (b) => {
      const g = b.component;
      pr(g.m), pr(g.a), c(b, p, null, 1, l), qe(() => {
        g.da && Tn(g.da);
        const k = b.props && b.props.onVnodeUnmounted;
        k && _t(k, g.parent, b), g.isDeactivated = !0;
      }, l), S.NODE_ENV !== "production" && ki(g), S.NODE_ENV !== "production" && (g.__keepAliveStorageContainer = p);
    };
    function h(b) {
      fi(b), d(b, n, l, !0);
    }
    function y(b) {
      o.forEach((g, k) => {
        const _ = $s(g.type);
        _ && !b(_) && v(k);
      });
    }
    function v(b) {
      const g = o.get(b);
      g && (!i || !Bt(g, i)) ? h(g) : i && fi(i), o.delete(b), r.delete(b);
    }
    sn(
      () => [e.include, e.exclude],
      ([b, g]) => {
        b && y((k) => Js(b, k)), g && y((k) => !Js(g, k));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let T = null;
    const C = () => {
      T != null && (mr(n.subTree.type) ? qe(() => {
        o.set(T, Fo(n.subTree));
      }, n.subTree.suspense) : o.set(T, Fo(n.subTree)));
    };
    return He(C), qr(C), zr(() => {
      o.forEach((b) => {
        const { subTree: g, suspense: k } = n, _ = Fo(g);
        if (b.type === _.type && b.key === _.key) {
          fi(_);
          const A = _.component.da;
          A && qe(A, k);
          return;
        }
        h(b);
      });
    }), () => {
      if (T = null, !t.default)
        return i = null;
      const b = t.default(), g = b[0];
      if (b.length > 1)
        return S.NODE_ENV !== "production" && R("KeepAlive should contain exactly one component child."), i = null, b;
      if (!ln(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return i = null, g;
      let k = Fo(g);
      if (k.type === Ve)
        return i = null, k;
      const _ = k.type, A = $s(
        In(k) ? k.type.__asyncResolved || {} : _
      ), { include: M, exclude: D, max: m } = e;
      if (M && (!A || !Js(M, A)) || D && A && Js(D, A))
        return k.shapeFlag &= -257, i = k, g;
      const x = k.key == null ? _ : k.key, V = o.get(x);
      return k.el && (k = Pt(k), g.shapeFlag & 128 && (g.ssContent = k)), T = x, V ? (k.el = V.el, k.component = V.component, k.transition && yn(k, k.transition), k.shapeFlag |= 512, r.delete(x), r.add(x)) : (r.add(x), m && r.size > parseInt(m, 10) && v(r.values().next().value)), k.shapeFlag |= 256, i = k, mr(g.type) ? g : k;
    };
  }
}, Lh = Rh;
function Js(e, t) {
  return Y(e) ? e.some((n) => Js(n, t)) : le(e) ? e.split(",").includes(t) : Hf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function $u(e, t) {
  Du(e, "a", t);
}
function Tu(e, t) {
  Du(e, "da", t);
}
function Du(e, t, n = We) {
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
function Ur(e, t, n = We, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Wt();
      const l = as(n), a = Mt(t, n, e, i);
      return l(), Gt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (S.NODE_ENV !== "production") {
    const o = tn(Fr[e].replace(/ hook$/, ""));
    R(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _n = (e) => (t, n = We) => {
  (!Os || e === "sp") && Ur(e, (...s) => t(...s), n);
}, Vu = _n("bm"), He = _n("m"), wl = _n(
  "bu"
), qr = _n("u"), zr = _n(
  "bum"
), Ct = _n("um"), Au = _n(
  "sp"
), Iu = _n("rtg"), Mu = _n("rtc");
function Pu(e, t = We) {
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
  const o = Be || We;
  if (o) {
    const r = o.type;
    if (e === ur) {
      const l = $s(
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
    if (S.NODE_ENV !== "production" && n && !i) {
      const l = e === ur ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      R(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else S.NODE_ENV !== "production" && R(
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
    let a = !1, c = !1;
    l && (a = !it(e), c = Yt(e), e = Mr(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? c ? rr(Ze(e[d])) : Ze(e[d]) : e[d],
        d,
        void 0,
        r && r[d]
      );
  } else if (typeof e == "number") {
    S.NODE_ENV !== "production" && !Number.isInteger(e) && R(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
    return t !== "default" && (n.name = t), w(), ct(
      ie,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  S.NODE_ENV !== "production" && r && r.length > 1 && (R(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), w();
  const i = r && kl(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = ct(
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
  return e.some((t) => ln(t) ? !(t.type === Ve || t.type === ie && !kl(t.children)) : !0) ? e : null;
}
function qh(e, t) {
  const n = {};
  if (S.NODE_ENV !== "production" && !me(e))
    return R("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : tn(s)] = e[s];
  return n;
}
const Oi = (e) => e ? vd(e) ? Oo(e) : Oi(e.parent) : null, es = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => S.NODE_ENV !== "production" ? jt(e.props) : e.props,
    $attrs: (e) => S.NODE_ENV !== "production" ? jt(e.attrs) : e.attrs,
    $slots: (e) => S.NODE_ENV !== "production" ? jt(e.slots) : e.slots,
    $refs: (e) => S.NODE_ENV !== "production" ? jt(e.refs) : e.refs,
    $parent: (e) => Oi(e.parent),
    $root: (e) => Oi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Br(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fs.bind(e.proxy)),
    $watch: (e) => Im.bind(e)
  })
), Cl = (e) => e === "_" || e === "$", pi = (e, t) => e !== pe && !e.__isScriptSetup && ge(e, t), no = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (S.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const h = i[t];
      if (h !== void 0)
        switch (h) {
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
          (c = e.propsOptions[0]) && ge(c, t)
        )
          return i[t] = 3, r[t];
        if (n !== pe && ge(n, t))
          return i[t] = 4, n[t];
        $i && (i[t] = 0);
      }
    }
    const d = es[t];
    let u, p;
    if (d)
      return t === "$attrs" ? (ze(e.attrs, "get", ""), S.NODE_ENV !== "production" && hr()) : S.NODE_ENV !== "production" && t === "$slots" && ze(e, "get", t), d(e);
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
    S.NODE_ENV !== "production" && Be && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== pe && Cl(t[0]) && ge(o, t) ? R(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Be && R(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return pi(o, t) ? (o[t] = n, !0) : S.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (R(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (S.NODE_ENV !== "production" && R(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (S.NODE_ENV !== "production" && R(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (S.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
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
S.NODE_ENV !== "production" && (no.ownKeys = (e) => (R(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zh = /* @__PURE__ */ fe({}, no, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return no.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Gf(t);
    return S.NODE_ENV !== "production" && !n && no.has(e, t) && R(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function Kh(e) {
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
function Wh(e) {
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
        set: De
      });
    }
  });
}
const fs = (e) => R(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Yh() {
  return S.NODE_ENV !== "production" && fs("defineProps"), null;
}
function Jh() {
  return S.NODE_ENV !== "production" && fs("defineEmits"), null;
}
function Xh(e) {
  S.NODE_ENV !== "production" && fs("defineExpose");
}
function Qh(e) {
  S.NODE_ENV !== "production" && fs("defineOptions");
}
function Zh() {
  return S.NODE_ENV !== "production" && fs("defineSlots"), null;
}
function em() {
  S.NODE_ENV !== "production" && fs("defineModel");
}
function tm(e, t) {
  return S.NODE_ENV !== "production" && fs("withDefaults"), null;
}
function nm() {
  return Ru("useSlots").slots;
}
function sm() {
  return Ru("useAttrs").attrs;
}
function Ru(e) {
  const t = ut();
  return S.NODE_ENV !== "production" && !t && R(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Ed(t));
}
function mo(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function om(e, t) {
  const n = mo(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? Y(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : S.NODE_ENV !== "production" && R(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function rm(e, t) {
  return !e || !t ? e || t : Y(e) && Y(t) ? e.concat(t) : fe({}, mo(e), mo(t));
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
  S.NODE_ENV !== "production" && !t && R(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Li(), Tr(n) && (n = n.catch((s) => {
    throw as(t), s;
  })), [n, () => as(t)];
}
function am() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? R(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
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
    beforeUpdate: h,
    updated: y,
    activated: v,
    deactivated: T,
    beforeDestroy: C,
    beforeUnmount: b,
    destroyed: g,
    unmounted: k,
    render: _,
    renderTracked: A,
    renderTriggered: M,
    errorCaptured: D,
    serverPrefetch: m,
    // public API
    expose: x,
    inheritAttrs: V,
    // assets
    components: O,
    directives: P,
    filters: z
  } = t, K = S.NODE_ENV !== "production" ? am() : null;
  if (S.NODE_ENV !== "production") {
    const [ne] = e.propsOptions;
    if (ne)
      for (const te in ne)
        K("Props", te);
  }
  if (c && um(c, s, K), i)
    for (const ne in i) {
      const te = i[ne];
      oe(te) ? (S.NODE_ENV !== "production" ? Object.defineProperty(s, ne, {
        value: te.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ne] = te.bind(n), S.NODE_ENV !== "production" && K("Methods", ne)) : S.NODE_ENV !== "production" && R(
        `Method "${ne}" has type "${typeof te}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    S.NODE_ENV !== "production" && !oe(o) && R(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ne = o.call(n, n);
    if (S.NODE_ENV !== "production" && Tr(ne) && R(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(ne))
      S.NODE_ENV !== "production" && R("data() should return an object.");
    else if (e.data = Ns(ne), S.NODE_ENV !== "production")
      for (const te in ne)
        K("Data", te), Cl(te[0]) || Object.defineProperty(s, te, {
          configurable: !0,
          enumerable: !0,
          get: () => ne[te],
          set: De
        });
  }
  if ($i = !0, r)
    for (const ne in r) {
      const te = r[ne], we = oe(te) ? te.bind(n, n) : oe(te.get) ? te.get.bind(n, n) : De;
      S.NODE_ENV !== "production" && we === De && R(`Computed property "${ne}" has no getter.`);
      const gt = !oe(te) && oe(te.set) ? te.set.bind(n) : S.NODE_ENV !== "production" ? () => {
        R(
          `Write operation failed: computed property "${ne}" is readonly.`
        );
      } : De, $t = Z({
        get: we,
        set: gt
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => $t.value,
        set: (Tt) => $t.value = Tt
      }), S.NODE_ENV !== "production" && K("Computed", ne);
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
  if (ee(Vu, u), ee(He, p), ee(wl, h), ee(qr, y), ee($u, v), ee(Tu, T), ee(Pu, D), ee(Mu, A), ee(Iu, M), ee(zr, b), ee(Ct, k), ee(Au, m), Y(x))
    if (x.length) {
      const ne = e.exposed || (e.exposed = {});
      x.forEach((te) => {
        Object.defineProperty(ne, te, {
          get: () => n[te],
          set: (we) => n[te] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === De && (e.render = _), V != null && (e.inheritAttrs = V), O && (e.components = O), P && (e.directives = P), m && El(e);
}
function um(e, t, n = De) {
  Y(e) && (e = Ti(e));
  for (const s in e) {
    const o = e[s];
    let r;
    me(o) ? "default" in o ? r = so(
      o.from || s,
      o.default,
      !0
    ) : r = so(o.from || s) : r = so(o), Ie(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, S.NODE_ENV !== "production" && n("Inject", s);
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
    oe(r) ? sn(o, r) : S.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e}"`, r);
  } else if (oe(e))
    sn(o, e.bind(n));
  else if (me(e))
    if (Y(e))
      e.forEach((r) => Lu(r, t, n, s));
    else {
      const r = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(r) ? sn(o, r, e) : S.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else S.NODE_ENV !== "production" && R(`Invalid watch option: "${s}"`, e);
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
  ), dr(a, t, i)), me(t) && r.set(t, a), a;
}
function dr(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && dr(e, r, n, !0), o && o.forEach(
    (i) => dr(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      S.NODE_ENV !== "production" && R(
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
  methods: Xs,
  computed: Xs,
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
  components: Xs,
  directives: Xs,
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
  return Xs(Ti(e), Ti(t));
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
function Xs(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ca(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    mo(e),
    mo(t ?? {})
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
let hm = 0;
function mm(e, t) {
  return function(s, o = null) {
    oe(s) || (s = fe({}, s)), o != null && !me(o) && (S.NODE_ENV !== "production" && R("root props passed to app.mount() must be an object."), o = null);
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
        S.NODE_ENV !== "production" && R(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? S.NODE_ENV !== "production" && R("Plugin has already been applied to target app.") : d && oe(d.install) ? (i.add(d), d.install(c, ...u)) : oe(d) ? (i.add(d), d(c, ...u)) : S.NODE_ENV !== "production" && R(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(d) {
        return r.mixins.includes(d) ? S.NODE_ENV !== "production" && R(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), c;
      },
      component(d, u) {
        return S.NODE_ENV !== "production" && Fi(d, r.config), u ? (S.NODE_ENV !== "production" && r.components[d] && R(`Component "${d}" has already been registered in target app.`), r.components[d] = u, c) : r.components[d];
      },
      directive(d, u) {
        return S.NODE_ENV !== "production" && vu(d), u ? (S.NODE_ENV !== "production" && r.directives[d] && R(`Directive "${d}" has already been registered in target app.`), r.directives[d] = u, c) : r.directives[d];
      },
      mount(d, u, p) {
        if (a)
          S.NODE_ENV !== "production" && R(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          S.NODE_ENV !== "production" && d.__vue_app__ && R(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = c._ceVNode || ue(s, o);
          return h.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), S.NODE_ENV !== "production" && (r.reload = () => {
            const y = Pt(h);
            y.el = null, e(y, d, p);
          }), u && t ? t(h, d) : e(h, d, p), a = !0, c._container = d, d.__vue_app__ = c, S.NODE_ENV !== "production" && (c._instance = h.component, ah(c, Hi)), Oo(h.component);
        }
      },
      onUnmount(d) {
        S.NODE_ENV !== "production" && typeof d != "function" && R(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Mt(
          l,
          c._instance,
          16
        ), e(null, c._container), S.NODE_ENV !== "production" && (c._instance = null, ch(c)), delete c._container.__vue_app__) : S.NODE_ENV !== "production" && R("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return S.NODE_ENV !== "production" && d in r.provides && (ge(r.provides, d) ? R(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : R(
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
  if (!We)
    S.NODE_ENV !== "production" && R("provide() can only be used inside setup().");
  else {
    let n = We.provides;
    const s = We.parent && We.parent.provides;
    s === n && (n = We.provides = Object.create(s)), n[e] = t;
  }
}
function so(e, t, n = !1) {
  const s = ut();
  if (s || ts) {
    let o = ts ? ts._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
    S.NODE_ENV !== "production" && R(`injection "${String(e)}" not found.`);
  } else S.NODE_ENV !== "production" && R("inject() can only be used inside setup() or functional components.");
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
  S.NODE_ENV !== "production" && Ku(t || {}, o, e), n ? e.props = s ? o : su(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
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
    !(S.NODE_ENV !== "production" && ym(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let p = d[u];
        if (Kr(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (a)
          if (ge(r, p))
            h !== r[p] && (r[p] = h, c = !0);
          else {
            const y = Ce(p);
            o[y] = Di(
              a,
              l,
              y,
              h,
              e,
              !1
            );
          }
        else
          h !== r[p] && (r[p] = h, c = !0);
      }
    }
  } else {
    qu(e, t, o, r) && (c = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !ge(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = st(u)) === u || !ge(t, d))) && (a ? n && // for camelCase
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
        (!t || !ge(t, u)) && (delete r[u], c = !0);
  }
  c && nn(e.attrs, "set", ""), S.NODE_ENV !== "production" && Ku(t || {}, o, e);
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
      o && ge(o, d = Ce(a)) ? !r || !r.includes(d) ? n[d] = c : (l || (l = {}))[d] = c : Kr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, i = !0);
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
        !ge(c, u)
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
      const [p, h] = zu(u, t, !0);
      fe(i, p), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !a)
    return me(e) && s.set(e, ys), ys;
  if (Y(r))
    for (let d = 0; d < r.length; d++) {
      S.NODE_ENV !== "production" && !le(r[d]) && R("props must be strings when using array syntax.", r[d]);
      const u = Ce(r[d]);
      Oa(u) && (i[u] = pe);
    }
  else if (r) {
    S.NODE_ENV !== "production" && !me(r) && R("invalid props options", r);
    for (const d in r) {
      const u = Ce(d);
      if (Oa(u)) {
        const p = r[d], h = i[u] = Y(p) || oe(p) ? { type: p } : fe({}, p), y = h.type;
        let v = !1, T = !0;
        if (Y(y))
          for (let C = 0; C < y.length; ++C) {
            const b = y[C], g = oe(b) && b.name;
            if (g === "Boolean") {
              v = !0;
              break;
            } else g === "String" && (T = !1);
          }
        else
          v = oe(y) && y.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = v, h[
          1
          /* shouldCastTrue */
        ] = T, (v || ge(h, "default")) && l.push(u);
      }
    }
  }
  const c = [i, l];
  return me(e) && s.set(e, c), c;
}
function Oa(e) {
  return e[0] !== "$" && !An(e) ? !0 : (S.NODE_ENV !== "production" && R(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Em(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ku(e, t, n) {
  const s = ce(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ce(i));
  for (const i in o) {
    let l = o[i];
    l != null && wm(
      i,
      s[i],
      l,
      S.NODE_ENV !== "production" ? jt(s) : s,
      !r.includes(i)
    );
  }
}
function wm(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    R('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let c = !1;
      const d = Y(r) ? r : [r], u = [];
      for (let p = 0; p < d.length && !c; p++) {
        const { valid: h, expectedType: y } = Nm(t, d[p]);
        u.push(y || ""), c = h;
      }
      if (!c) {
        R(Sm(e, t, u));
        return;
      }
    }
    l && !l(t, s) && R('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xm = /* @__PURE__ */ Je(
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
  } else s === "Object" ? n = me(e) : s === "Array" ? n = Y(e) : n = e instanceof t;
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
  const s = Pe((...o) => (S.NODE_ENV !== "production" && We && !(n === null && Be) && !(n && n.root !== We.root) && R(
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
      S.NODE_ENV !== "production" && R(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Tl(r);
      t[o] = () => i;
    }
  }
}, Gu = (e, t) => {
  S.NODE_ENV !== "production" && !Bs(e.vnode) && R(
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
    r ? (Vi(s, t, n), n && os(s, "_", r, !0)) : Wu(t, s);
  } else t && Gu(e, t);
}, $m = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? S.NODE_ENV !== "production" && Ht ? (Vi(o, t, n), nn(e, "set", "$slots")) : n && l === 1 ? r = !1 : Vi(o, t, n) : (r = !t.$stable, Wu(t, o)), i = t;
  } else t && (Gu(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !$l(l) && i[l] == null && delete o[l];
};
let qs, Dn;
function cn(e, t) {
  e.appContext.config.performance && fr() && Dn.mark(`vue-${t}-${e.uid}`), S.NODE_ENV !== "production" && fh(e, t, fr() ? Dn.now() : Date.now());
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
  S.NODE_ENV !== "production" && ph(e, t, fr() ? Dn.now() : Date.now());
}
function fr() {
  return qs !== void 0 || (typeof window < "u" && window.performance ? (qs = !0, Dn = window.performance) : qs = !1), qs;
}
function Tm() {
  const e = [];
  if (S.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const qe = ad;
function Yu(e) {
  return Xu(e);
}
function Ju(e) {
  return Xu(e, Nh);
}
function Xu(e, t) {
  Tm();
  const n = No();
  n.__VUE__ = !0, S.NODE_ENV !== "production" && gl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: h = De,
    insertStaticContent: y
  } = e, v = (E, $, I, H = null, F = null, B = null, X = void 0, G = null, W = S.NODE_ENV !== "production" && Ht ? !1 : !!$.dynamicChildren) => {
    if (E === $)
      return;
    E && !Bt(E, $) && (H = Vo(E), En(E, F, B, !0), E = null), $.patchFlag === -2 && (W = !1, $.dynamicChildren = null);
    const { type: U, ref: re, shapeFlag: Q } = $;
    switch (U) {
      case on:
        T(E, $, I, H);
        break;
      case Ve:
        C(E, $, I, H);
        break;
      case Mn:
        E == null ? b($, I, H, X) : S.NODE_ENV !== "production" && g(E, $, I, X);
        break;
      case ie:
        P(
          E,
          $,
          I,
          H,
          F,
          B,
          X,
          G,
          W
        );
        break;
      default:
        Q & 1 ? A(
          E,
          $,
          I,
          H,
          F,
          B,
          X,
          G,
          W
        ) : Q & 6 ? z(
          E,
          $,
          I,
          H,
          F,
          B,
          X,
          G,
          W
        ) : Q & 64 || Q & 128 ? U.process(
          E,
          $,
          I,
          H,
          F,
          B,
          X,
          G,
          W,
          ps
        ) : S.NODE_ENV !== "production" && R("Invalid VNode type:", U, `(${typeof U})`);
    }
    re != null && F ? ws(re, E && E.ref, B, $ || E, !$) : re == null && E && E.ref != null && ws(E.ref, null, B, E, !0);
  }, T = (E, $, I, H) => {
    if (E == null)
      s(
        $.el = l($.children),
        I,
        H
      );
    else {
      const F = $.el = E.el;
      $.children !== E.children && c(F, $.children);
    }
  }, C = (E, $, I, H) => {
    E == null ? s(
      $.el = a($.children || ""),
      I,
      H
    ) : $.el = E.el;
  }, b = (E, $, I, H) => {
    [E.el, E.anchor] = y(
      E.children,
      $,
      I,
      H,
      E.el,
      E.anchor
    );
  }, g = (E, $, I, H) => {
    if ($.children !== E.children) {
      const F = p(E.anchor);
      _(E), [$.el, $.anchor] = y(
        $.children,
        I,
        F,
        H
      );
    } else
      $.el = E.el, $.anchor = E.anchor;
  }, k = ({ el: E, anchor: $ }, I, H) => {
    let F;
    for (; E && E !== $; )
      F = p(E), s(E, I, H), E = F;
    s($, I, H);
  }, _ = ({ el: E, anchor: $ }) => {
    let I;
    for (; E && E !== $; )
      I = p(E), o(E), E = I;
    o($);
  }, A = (E, $, I, H, F, B, X, G, W) => {
    $.type === "svg" ? X = "svg" : $.type === "math" && (X = "mathml"), E == null ? M(
      $,
      I,
      H,
      F,
      B,
      X,
      G,
      W
    ) : x(
      E,
      $,
      F,
      B,
      X,
      G,
      W
    );
  }, M = (E, $, I, H, F, B, X, G) => {
    let W, U;
    const { props: re, shapeFlag: Q, transition: se, dirs: ae } = E;
    if (W = E.el = i(
      E.type,
      B,
      re && re.is,
      re
    ), Q & 8 ? d(W, E.children) : Q & 16 && m(
      E.children,
      W,
      null,
      H,
      F,
      hi(E, B),
      X,
      G
    ), ae && en(E, null, H, "created"), D(W, E, E.scopeId, X, H), re) {
      for (const Oe in re)
        Oe !== "value" && !An(Oe) && r(W, Oe, null, re[Oe], B, H);
      "value" in re && r(W, "value", null, re.value, B), (U = re.onVnodeBeforeMount) && _t(U, H, E);
    }
    S.NODE_ENV !== "production" && (os(W, "__vnode", E, !0), os(W, "__vueParentComponent", H, !0)), ae && en(E, null, H, "beforeMount");
    const ye = Qu(F, se);
    ye && se.beforeEnter(W), s(W, $, I), ((U = re && re.onVnodeMounted) || ye || ae) && qe(() => {
      U && _t(U, H, E), ye && se.enter(W), ae && en(E, null, H, "mounted");
    }, F);
  }, D = (E, $, I, H, F) => {
    if (I && h(E, I), H)
      for (let B = 0; B < H.length; B++)
        h(E, H[B]);
    if (F) {
      let B = F.subTree;
      if (S.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && (B = Wr(B.children) || B), $ === B || mr(B.type) && (B.ssContent === $ || B.ssFallback === $)) {
        const X = F.vnode;
        D(
          E,
          X,
          X.scopeId,
          X.slotScopeIds,
          F.parent
        );
      }
    }
  }, m = (E, $, I, H, F, B, X, G, W = 0) => {
    for (let U = W; U < E.length; U++) {
      const re = E[U] = G ? On(E[U]) : mt(E[U]);
      v(
        null,
        re,
        $,
        I,
        H,
        F,
        B,
        X,
        G
      );
    }
  }, x = (E, $, I, H, F, B, X) => {
    const G = $.el = E.el;
    S.NODE_ENV !== "production" && (G.__vnode = $);
    let { patchFlag: W, dynamicChildren: U, dirs: re } = $;
    W |= E.patchFlag & 16;
    const Q = E.props || pe, se = $.props || pe;
    let ae;
    if (I && Un(I, !1), (ae = se.onVnodeBeforeUpdate) && _t(ae, I, $, E), re && en($, E, I, "beforeUpdate"), I && Un(I, !0), S.NODE_ENV !== "production" && Ht && (W = 0, X = !1, U = null), (Q.innerHTML && se.innerHTML == null || Q.textContent && se.textContent == null) && d(G, ""), U ? (V(
      E.dynamicChildren,
      U,
      G,
      I,
      H,
      hi($, F),
      B
    ), S.NODE_ENV !== "production" && oo(E, $)) : X || we(
      E,
      $,
      G,
      null,
      I,
      H,
      hi($, F),
      B,
      !1
    ), W > 0) {
      if (W & 16)
        O(G, Q, se, I, F);
      else if (W & 2 && Q.class !== se.class && r(G, "class", null, se.class, F), W & 4 && r(G, "style", Q.style, se.style, F), W & 8) {
        const ye = $.dynamicProps;
        for (let Oe = 0; Oe < ye.length; Oe++) {
          const xe = ye[Oe], vt = Q[xe], et = se[xe];
          (et !== vt || xe === "value") && r(G, xe, vt, et, F, I);
        }
      }
      W & 1 && E.children !== $.children && d(G, $.children);
    } else !X && U == null && O(G, Q, se, I, F);
    ((ae = se.onVnodeUpdated) || re) && qe(() => {
      ae && _t(ae, I, $, E), re && en($, E, I, "updated");
    }, H);
  }, V = (E, $, I, H, F, B, X) => {
    for (let G = 0; G < $.length; G++) {
      const W = E[G], U = $[G], re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(W, U) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? u(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      v(
        W,
        U,
        re,
        null,
        H,
        F,
        B,
        X,
        !0
      );
    }
  }, O = (E, $, I, H, F) => {
    if ($ !== I) {
      if ($ !== pe)
        for (const B in $)
          !An(B) && !(B in I) && r(
            E,
            B,
            $[B],
            null,
            F,
            H
          );
      for (const B in I) {
        if (An(B)) continue;
        const X = I[B], G = $[B];
        X !== G && B !== "value" && r(E, B, G, X, F, H);
      }
      "value" in I && r(E, "value", $.value, I.value, F);
    }
  }, P = (E, $, I, H, F, B, X, G, W) => {
    const U = $.el = E ? E.el : l(""), re = $.anchor = E ? E.anchor : l("");
    let { patchFlag: Q, dynamicChildren: se, slotScopeIds: ae } = $;
    S.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ht || Q & 2048) && (Q = 0, W = !1, se = null), ae && (G = G ? G.concat(ae) : ae), E == null ? (s(U, I, H), s(re, I, H), m(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      $.children || [],
      I,
      re,
      F,
      B,
      X,
      G,
      W
    )) : Q > 0 && Q & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (V(
      E.dynamicChildren,
      se,
      I,
      F,
      B,
      X,
      G
    ), S.NODE_ENV !== "production" ? oo(E, $) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      ($.key != null || F && $ === F.subTree) && oo(
        E,
        $,
        !0
        /* shallow */
      )
    )) : we(
      E,
      $,
      I,
      re,
      F,
      B,
      X,
      G,
      W
    );
  }, z = (E, $, I, H, F, B, X, G, W) => {
    $.slotScopeIds = G, E == null ? $.shapeFlag & 512 ? F.ctx.activate(
      $,
      I,
      H,
      X,
      W
    ) : K(
      $,
      I,
      H,
      F,
      B,
      X,
      W
    ) : ee(E, $, W);
  }, K = (E, $, I, H, F, B, X) => {
    const G = E.component = gd(
      E,
      H,
      F
    );
    if (S.NODE_ENV !== "production" && G.type.__hmrId && oh(G), S.NODE_ENV !== "production" && (bs(E), cn(G, "mount")), Bs(E) && (G.ctx.renderer = ps), S.NODE_ENV !== "production" && cn(G, "init"), yd(G, !1, X), S.NODE_ENV !== "production" && un(G, "init"), S.NODE_ENV !== "production" && Ht && (E.el = null), G.asyncDep) {
      if (F && F.registerDep(G, ne, X), !E.el) {
        const W = G.subTree = ue(Ve);
        C(null, W, $, I), E.placeholder = W.el;
      }
    } else
      ne(
        G,
        E,
        $,
        I,
        F,
        B,
        X
      );
    S.NODE_ENV !== "production" && (_s(), un(G, "mount"));
  }, ee = (E, $, I) => {
    const H = $.component = E.component;
    if (Fm(E, $, I))
      if (H.asyncDep && !H.asyncResolved) {
        S.NODE_ENV !== "production" && bs($), te(H, $, I), S.NODE_ENV !== "production" && _s();
        return;
      } else
        H.next = $, H.update();
    else
      $.el = E.el, H.vnode = $;
  }, ne = (E, $, I, H, F, B, X) => {
    const G = () => {
      if (E.isMounted) {
        let { next: Q, bu: se, u: ae, parent: ye, vnode: Oe } = E;
        {
          const Nt = Zu(E);
          if (Nt) {
            Q && (Q.el = Oe.el, te(E, Q, X)), Nt.asyncDep.then(() => {
              E.isUnmounted || G();
            });
            return;
          }
        }
        let xe = Q, vt;
        S.NODE_ENV !== "production" && bs(Q || E.vnode), Un(E, !1), Q ? (Q.el = Oe.el, te(E, Q, X)) : Q = Oe, se && Tn(se), (vt = Q.props && Q.props.onVnodeBeforeUpdate) && _t(vt, ye, Q, Oe), Un(E, !0), S.NODE_ENV !== "production" && cn(E, "render");
        const et = Wo(E);
        S.NODE_ENV !== "production" && un(E, "render");
        const Rt = E.subTree;
        E.subTree = et, S.NODE_ENV !== "production" && cn(E, "patch"), v(
          Rt,
          et,
          // parent may have changed if it's in a teleport
          u(Rt.el),
          // anchor may have changed if it's in a fragment
          Vo(Rt),
          E,
          F,
          B
        ), S.NODE_ENV !== "production" && un(E, "patch"), Q.el = et.el, xe === null && Gr(E, et.el), ae && qe(ae, F), (vt = Q.props && Q.props.onVnodeUpdated) && qe(
          () => _t(vt, ye, Q, Oe),
          F
        ), S.NODE_ENV !== "production" && mu(E), S.NODE_ENV !== "production" && _s();
      } else {
        let Q;
        const { el: se, props: ae } = $, { bm: ye, m: Oe, parent: xe, root: vt, type: et } = E, Rt = In($);
        if (Un(E, !1), ye && Tn(ye), !Rt && (Q = ae && ae.onVnodeBeforeMount) && _t(Q, xe, $), Un(E, !0), se && si) {
          const Nt = () => {
            S.NODE_ENV !== "production" && cn(E, "render"), E.subTree = Wo(E), S.NODE_ENV !== "production" && un(E, "render"), S.NODE_ENV !== "production" && cn(E, "hydrate"), si(
              se,
              E.subTree,
              E,
              F,
              null
            ), S.NODE_ENV !== "production" && un(E, "hydrate");
          };
          Rt && et.__asyncHydrate ? et.__asyncHydrate(
            se,
            E,
            Nt
          ) : Nt();
        } else {
          vt.ce && // @ts-expect-error _def is private
          vt.ce._def.shadowRoot !== !1 && vt.ce._injectChildStyle(et), S.NODE_ENV !== "production" && cn(E, "render");
          const Nt = E.subTree = Wo(E);
          S.NODE_ENV !== "production" && un(E, "render"), S.NODE_ENV !== "production" && cn(E, "patch"), v(
            null,
            Nt,
            I,
            H,
            E,
            F,
            B
          ), S.NODE_ENV !== "production" && un(E, "patch"), $.el = Nt.el;
        }
        if (Oe && qe(Oe, F), !Rt && (Q = ae && ae.onVnodeMounted)) {
          const Nt = $;
          qe(
            () => _t(Q, xe, Nt),
            F
          );
        }
        ($.shapeFlag & 256 || xe && In(xe.vnode) && xe.vnode.shapeFlag & 256) && E.a && qe(E.a, F), E.isMounted = !0, S.NODE_ENV !== "production" && ki(E), $ = I = H = null;
      }
    };
    E.scope.on();
    const W = E.effect = new co(G);
    E.scope.off();
    const U = E.update = W.run.bind(W), re = E.job = W.runIfDirty.bind(W);
    re.i = E, re.id = E.uid, W.scheduler = () => Br(re), Un(E, !0), S.NODE_ENV !== "production" && (W.onTrack = E.rtc ? (Q) => Tn(E.rtc, Q) : void 0, W.onTrigger = E.rtg ? (Q) => Tn(E.rtg, Q) : void 0), U();
  }, te = (E, $, I) => {
    $.component = E;
    const H = E.vnode.props;
    E.vnode = $, E.next = null, bm(E, $.props, H, I), $m(E, $.children, I), Wt(), ha(E), Gt();
  }, we = (E, $, I, H, F, B, X, G, W = !1) => {
    const U = E && E.children, re = E ? E.shapeFlag : 0, Q = $.children, { patchFlag: se, shapeFlag: ae } = $;
    if (se > 0) {
      if (se & 128) {
        $t(
          U,
          Q,
          I,
          H,
          F,
          B,
          X,
          G,
          W
        );
        return;
      } else if (se & 256) {
        gt(
          U,
          Q,
          I,
          H,
          F,
          B,
          X,
          G,
          W
        );
        return;
      }
    }
    ae & 8 ? (re & 16 && js(U, F, B), Q !== U && d(I, Q)) : re & 16 ? ae & 16 ? $t(
      U,
      Q,
      I,
      H,
      F,
      B,
      X,
      G,
      W
    ) : js(U, F, B, !0) : (re & 8 && d(I, ""), ae & 16 && m(
      Q,
      I,
      H,
      F,
      B,
      X,
      G,
      W
    ));
  }, gt = (E, $, I, H, F, B, X, G, W) => {
    E = E || ys, $ = $ || ys;
    const U = E.length, re = $.length, Q = Math.min(U, re);
    let se;
    for (se = 0; se < Q; se++) {
      const ae = $[se] = W ? On($[se]) : mt($[se]);
      v(
        E[se],
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
    U > re ? js(
      E,
      F,
      B,
      !0,
      !1,
      Q
    ) : m(
      $,
      I,
      H,
      F,
      B,
      X,
      G,
      W,
      Q
    );
  }, $t = (E, $, I, H, F, B, X, G, W) => {
    let U = 0;
    const re = $.length;
    let Q = E.length - 1, se = re - 1;
    for (; U <= Q && U <= se; ) {
      const ae = E[U], ye = $[U] = W ? On($[U]) : mt($[U]);
      if (Bt(ae, ye))
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
      U++;
    }
    for (; U <= Q && U <= se; ) {
      const ae = E[Q], ye = $[se] = W ? On($[se]) : mt($[se]);
      if (Bt(ae, ye))
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
    if (U > Q) {
      if (U <= se) {
        const ae = se + 1, ye = ae < re ? $[ae].el : H;
        for (; U <= se; )
          v(
            null,
            $[U] = W ? On($[U]) : mt($[U]),
            I,
            ye,
            F,
            B,
            X,
            G,
            W
          ), U++;
      }
    } else if (U > se)
      for (; U <= Q; )
        En(E[U], F, B, !0), U++;
    else {
      const ae = U, ye = U, Oe = /* @__PURE__ */ new Map();
      for (U = ye; U <= se; U++) {
        const dt = $[U] = W ? On($[U]) : mt($[U]);
        dt.key != null && (S.NODE_ENV !== "production" && Oe.has(dt.key) && R(
          "Duplicate keys found during update:",
          JSON.stringify(dt.key),
          "Make sure keys are unique."
        ), Oe.set(dt.key, U));
      }
      let xe, vt = 0;
      const et = se - ye + 1;
      let Rt = !1, Nt = 0;
      const Hs = new Array(et);
      for (U = 0; U < et; U++) Hs[U] = 0;
      for (U = ae; U <= Q; U++) {
        const dt = E[U];
        if (vt >= et) {
          En(dt, F, B, !0);
          continue;
        }
        let Jt;
        if (dt.key != null)
          Jt = Oe.get(dt.key);
        else
          for (xe = ye; xe <= se; xe++)
            if (Hs[xe - ye] === 0 && Bt(dt, $[xe])) {
              Jt = xe;
              break;
            }
        Jt === void 0 ? En(dt, F, B, !0) : (Hs[Jt - ye] = U + 1, Jt >= Nt ? Nt = Jt : Rt = !0, v(
          dt,
          $[Jt],
          I,
          null,
          F,
          B,
          X,
          G,
          W
        ), vt++);
      }
      const oa = Rt ? Dm(Hs) : ys;
      for (xe = oa.length - 1, U = et - 1; U >= 0; U--) {
        const dt = ye + U, Jt = $[dt], ra = $[dt + 1], ia = dt + 1 < re ? (
          // #13559, fallback to el placeholder for unresolved async component
          ra.el || ra.placeholder
        ) : H;
        Hs[U] === 0 ? v(
          null,
          Jt,
          I,
          ia,
          F,
          B,
          X,
          G,
          W
        ) : Rt && (xe < 0 || U !== oa[xe] ? Tt(Jt, I, ia, 2) : xe--);
      }
    }
  }, Tt = (E, $, I, H, F = null) => {
    const { el: B, type: X, transition: G, children: W, shapeFlag: U } = E;
    if (U & 6) {
      Tt(E.component.subTree, $, I, H);
      return;
    }
    if (U & 128) {
      E.suspense.move($, I, H);
      return;
    }
    if (U & 64) {
      X.move(E, $, I, ps);
      return;
    }
    if (X === ie) {
      s(B, $, I);
      for (let Q = 0; Q < W.length; Q++)
        Tt(W[Q], $, I, H);
      s(E.anchor, $, I);
      return;
    }
    if (X === Mn) {
      k(E, $, I);
      return;
    }
    if (H !== 2 && U & 1 && G)
      if (H === 0)
        G.beforeEnter(B), s(B, $, I), qe(() => G.enter(B), F);
      else {
        const { leave: Q, delayLeave: se, afterLeave: ae } = G, ye = () => {
          E.ctx.isUnmounted ? o(B) : s(B, $, I);
        }, Oe = () => {
          Q(B, () => {
            ye(), ae && ae();
          });
        };
        se ? se(B, ye, Oe) : Oe();
      }
    else
      s(B, $, I);
  }, En = (E, $, I, H = !1, F = !1) => {
    const {
      type: B,
      props: X,
      ref: G,
      children: W,
      dynamicChildren: U,
      shapeFlag: re,
      patchFlag: Q,
      dirs: se,
      cacheIndex: ae
    } = E;
    if (Q === -2 && (F = !1), G != null && (Wt(), ws(G, null, I, E, !0), Gt()), ae != null && ($.renderCache[ae] = void 0), re & 256) {
      $.ctx.deactivate(E);
      return;
    }
    const ye = re & 1 && se, Oe = !In(E);
    let xe;
    if (Oe && (xe = X && X.onVnodeBeforeUnmount) && _t(xe, $, E), re & 6)
      Bf(E.component, I, H);
    else {
      if (re & 128) {
        E.suspense.unmount(I, H);
        return;
      }
      ye && en(E, null, $, "beforeUnmount"), re & 64 ? E.type.remove(
        E,
        $,
        I,
        ps,
        H
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== ie || Q > 0 && Q & 64) ? js(
        U,
        $,
        I,
        !1,
        !0
      ) : (B === ie && Q & 384 || !F && re & 16) && js(W, $, I), H && ei(E);
    }
    (Oe && (xe = X && X.onVnodeUnmounted) || ye) && qe(() => {
      xe && _t(xe, $, E), ye && en(E, null, $, "unmounted");
    }, I);
  }, ei = (E) => {
    const { type: $, el: I, anchor: H, transition: F } = E;
    if ($ === ie) {
      S.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && F && !F.persisted ? E.children.forEach((X) => {
        X.type === Ve ? o(X.el) : ei(X);
      }) : Ff(I, H);
      return;
    }
    if ($ === Mn) {
      _(E);
      return;
    }
    const B = () => {
      o(I), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (E.shapeFlag & 1 && F && !F.persisted) {
      const { leave: X, delayLeave: G } = F, W = () => X(I, B);
      G ? G(E.el, B, W) : W();
    } else
      B();
  }, Ff = (E, $) => {
    let I;
    for (; E !== $; )
      I = p(E), o(E), E = I;
    o($);
  }, Bf = (E, $, I) => {
    S.NODE_ENV !== "production" && E.type.__hmrId && rh(E);
    const {
      bum: H,
      scope: F,
      job: B,
      subTree: X,
      um: G,
      m: W,
      a: U,
      parent: re,
      slots: { __: Q }
    } = E;
    pr(W), pr(U), H && Tn(H), re && Y(Q) && Q.forEach((se) => {
      re.renderCache[se] = void 0;
    }), F.stop(), B && (B.flags |= 8, En(X, E, $, I)), G && qe(G, $), qe(() => {
      E.isUnmounted = !0;
    }, $), $ && $.pendingBranch && !$.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === $.pendingId && ($.deps--, $.deps === 0 && $.resolve()), S.NODE_ENV !== "production" && dh(E);
  }, js = (E, $, I, H = !1, F = !1, B = 0) => {
    for (let X = B; X < E.length; X++)
      En(E[X], $, I, H, F);
  }, Vo = (E) => {
    if (E.shapeFlag & 6)
      return Vo(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const $ = p(E.anchor || E.el), I = $ && $[yu];
    return I ? p(I) : $;
  };
  let ti = !1;
  const sa = (E, $, I) => {
    E == null ? $._vnode && En($._vnode, null, null, !0) : v(
      $._vnode || null,
      E,
      $,
      null,
      null,
      null,
      I
    ), $._vnode = E, ti || (ti = !0, ha(), ar(), ti = !1);
  }, ps = {
    p: v,
    um: En,
    m: Tt,
    r: ei,
    mt: K,
    mc: m,
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
function oo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Y(s) && Y(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = On(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && oo(i, l)), l.type === on && (l.el = i.el), l.type === Ve && !l.el && (l.el = i.el), S.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
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
function pr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ed = Symbol.for("v-scx"), td = () => {
  {
    const e = so(ed);
    return e || S.NODE_ENV !== "production" && R(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Vm(e, t) {
  return Co(e, null, t);
}
function Am(e, t) {
  return Co(
    e,
    null,
    S.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function nd(e, t) {
  return Co(
    e,
    null,
    S.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function sn(e, t, n) {
  return S.NODE_ENV !== "production" && !oe(t) && R(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Co(e, t, n);
}
function Co(e, t, n = pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  S.NODE_ENV !== "production" && !t && (s !== void 0 && R(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && R(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && R(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  S.NODE_ENV !== "production" && (l.onWarn = R);
  const a = t && s || !t && r !== "post";
  let c;
  if (Os) {
    if (r === "sync") {
      const h = td();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = De, h.resume = De, h.pause = De, h;
    }
  }
  const d = We;
  l.call = (h, y, v) => Mt(h, d, y, v);
  let u = !1;
  r === "post" ? l.scheduler = (h) => {
    qe(h, d && d.suspense);
  } : r !== "sync" && (u = !0, l.scheduler = (h, y) => {
    y ? h() : Br(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, d && (h.id = d.uid, h.i = d));
  };
  const p = Yp(e, t, l);
  return Os && (c ? c.push(p) : a && p()), p;
}
function Im(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? sd(s, e) : () => s[e] : e.bind(s, s);
  let r;
  oe(t) ? r = t : (r = t.handler, n = t);
  const i = as(this), l = Co(o, r.bind(s), n);
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
  if (S.NODE_ENV !== "production" && !s)
    return R("useModel() called without active instance."), q();
  const o = Ce(t);
  if (S.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return R(`useModel() called with prop "${t}" which is not declared.`), q();
  const r = st(t), i = od(e, o), l = lu((a, c) => {
    let d, u = pe, p;
    return nd(() => {
      const h = e[o];
      pt(d, h) && (d = h, c());
    }), {
      get() {
        return a(), n.get ? n.get(d) : d;
      },
      set(h) {
        const y = n.set ? n.set(h) : h;
        if (!pt(y, d) && !(u !== pe && pt(h, u)))
          return;
        const v = s.vnode.props;
        v && // check if parent has passed v-model
        (t in v || o in v || r in v) && (`onUpdate:${t}` in v || `onUpdate:${o}` in v || `onUpdate:${r}` in v) || (d = h, c()), s.emit(`update:${t}`, y), pt(h, y) && pt(h, u) && !pt(y, p) && c(), u = h, p = y;
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
  if (S.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(tn(Ce(t)) in u)) && R(
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
  if (i && (i.trim && (o = n.map((d) => le(d) ? d.trim() : d)), i.number && (o = n.map(nr))), S.NODE_ENV !== "production" && hh(e, t, o), S.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[tn(d)] && R(
      `Event "${d}" is emitted in component ${Yr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${st(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = tn(t)] || // also try camelCase event handler (#2249)
  s[l = tn(Ce(t))];
  !a && r && (a = s[l = tn(st(t))]), a && Mt(
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
  return !r && !l ? (me(e) && s.set(e, null), null) : (Y(r) ? r.forEach((a) => i[a] = null) : fe(i, r), me(e) && s.set(e, i), i);
}
function Kr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, st(t)) || ge(e, t));
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
    render: c,
    renderCache: d,
    props: u,
    data: p,
    setupState: h,
    ctx: y,
    inheritAttrs: v
  } = e, T = ho(e);
  let C, b;
  S.NODE_ENV !== "production" && (Ai = !1);
  try {
    if (n.shapeFlag & 4) {
      const _ = o || s, A = S.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(_, {
        get(M, D, m) {
          return R(
            `Property '${String(
              D
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, D, m);
        }
      }) : _;
      C = mt(
        c.call(
          A,
          _,
          d,
          S.NODE_ENV !== "production" ? jt(u) : u,
          h,
          p,
          y
        )
      ), b = l;
    } else {
      const _ = t;
      S.NODE_ENV !== "production" && l === u && hr(), C = mt(
        _.length > 1 ? _(
          S.NODE_ENV !== "production" ? jt(u) : u,
          S.NODE_ENV !== "production" ? {
            get attrs() {
              return hr(), jt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : _(
          S.NODE_ENV !== "production" ? jt(u) : u,
          null
        )
      ), b = t.props ? l : Rm(l);
    }
  } catch (_) {
    ro.length = 0, Bn(_, e, 1), C = ue(Ve);
  }
  let g = C, k;
  if (S.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([g, k] = id(C)), b && v !== !1) {
    const _ = Object.keys(b), { shapeFlag: A } = g;
    if (_.length) {
      if (A & 7)
        r && _.some(tr) && (b = Lm(
          b,
          r
        )), g = Pt(g, b, !1, !0);
      else if (S.NODE_ENV !== "production" && !Ai && g.type !== Ve) {
        const M = Object.keys(l), D = [], m = [];
        for (let x = 0, V = M.length; x < V; x++) {
          const O = M[x];
          vn(O) ? tr(O) || D.push(O[2].toLowerCase() + O.slice(3)) : m.push(O);
        }
        m.length && R(
          `Extraneous non-props attributes (${m.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), D.length && R(
          `Extraneous non-emits event listeners (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (S.NODE_ENV !== "production" && !Da(g) && R(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = Pt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (S.NODE_ENV !== "production" && !Da(g) && R(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(g, n.transition)), S.NODE_ENV !== "production" && k ? k(g) : C = g, ho(T), C;
}
const id = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Wr(t, !1);
  if (s) {
    if (S.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return id(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [mt(s), i];
};
function Wr(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (ln(o)) {
      if (o.type !== Ve || o.children === "v-if") {
        if (n)
          return;
        if (n = o, S.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
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
}, Da = (e) => e.shapeFlag & 7 || e.type === Ve;
function Fm(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (S.NODE_ENV !== "production" && (o || l) && Ht || t.dirs || t.transition)
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
        if (i[p] !== s[p] && !Kr(c, p))
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
function go(e, t) {
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
  ), p.deps > 0 ? (go(e, "onPending"), go(e, "onFallback"), c(
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
function Um(e, t, n, s, o, r, i, l, { p: a, um: c, o: { createElement: d } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, h = t.ssFallback, { activeBranch: y, pendingBranch: v, isInFallback: T, isHydrating: C } = u;
  if (v)
    u.pendingBranch = p, Bt(p, v) ? (a(
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
      y,
      h,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      r,
      i,
      l
    ), xs(u, h)))) : (u.pendingId = Ii++, C ? (u.isHydrating = !1, u.activeBranch = v) : c(v, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = d("div"), T ? (a(
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
      y,
      h,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      r,
      i,
      l
    ), xs(u, h))) : y && Bt(p, y) ? (a(
      y,
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
  else if (y && Bt(p, y))
    a(
      y,
      p,
      n,
      s,
      o,
      u,
      r,
      i,
      l
    ), xs(u, p);
  else if (go(t, "onPending"), u.pendingBranch = p, p.shapeFlag & 512 ? u.pendingId = p.component.suspenseId : u.pendingId = Ii++, a(
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
    const { timeout: b, pendingId: g } = u;
    b > 0 ? setTimeout(() => {
      u.pendingId === g && u.fallback(h);
    }, b) : b === 0 && u.fallback(h);
  }
}
let Aa = !1;
function ld(e, t, n, s, o, r, i, l, a, c, d = !1) {
  S.NODE_ENV !== "production" && !Aa && (Aa = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: h,
    n: y,
    o: { parentNode: v, remove: T }
  } = c;
  let C;
  const b = Km(e);
  b && t && t.pendingBranch && (C = t.pendingId, t.deps++);
  const g = e.props ? sr(e.props.timeout) : void 0;
  S.NODE_ENV !== "production" && hl(g, "Suspense timeout");
  const k = r, _ = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Ii++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !d,
    isHydrating: d,
    isUnmounted: !1,
    effects: [],
    resolve(A = !1, M = !1) {
      if (S.NODE_ENV !== "production") {
        if (!A && !_.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (_.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: D,
        activeBranch: m,
        pendingBranch: x,
        pendingId: V,
        effects: O,
        parentComponent: P,
        container: z
      } = _;
      let K = !1;
      _.isHydrating ? _.isHydrating = !1 : A || (K = m && x.transition && x.transition.mode === "out-in", K && (m.transition.afterLeave = () => {
        V === _.pendingId && (p(
          x,
          z,
          r === k ? y(m) : r,
          0
        ), ks(O));
      }), m && (v(m.el) === z && (r = y(m)), h(m, P, _, !0)), K || p(x, z, r, 0)), xs(_, x), _.pendingBranch = null, _.isInFallback = !1;
      let ee = _.parent, ne = !1;
      for (; ee; ) {
        if (ee.pendingBranch) {
          ee.effects.push(...O), ne = !0;
          break;
        }
        ee = ee.parent;
      }
      !ne && !K && ks(O), _.effects = [], b && t && t.pendingBranch && C === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), go(D, "onResolve");
    },
    fallback(A) {
      if (!_.pendingBranch)
        return;
      const { vnode: M, activeBranch: D, parentComponent: m, container: x, namespace: V } = _;
      go(M, "onFallback");
      const O = y(D), P = () => {
        _.isInFallback && (u(
          null,
          A,
          x,
          O,
          m,
          null,
          // fallback tree will not have suspense context
          V,
          l,
          a
        ), xs(_, A));
      }, z = A.transition && A.transition.mode === "out-in";
      z && (D.transition.afterLeave = P), _.isInFallback = !0, h(
        D,
        m,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), z || P();
    },
    move(A, M, D) {
      _.activeBranch && p(_.activeBranch, A, M, D), _.container = A;
    },
    next() {
      return _.activeBranch && y(_.activeBranch);
    },
    registerDep(A, M, D) {
      const m = !!_.pendingBranch;
      m && _.deps++;
      const x = A.vnode.el;
      A.asyncDep.catch((V) => {
        Bn(V, A, 0);
      }).then((V) => {
        if (A.isUnmounted || _.isUnmounted || _.pendingId !== A.suspenseId)
          return;
        A.asyncResolved = !0;
        const { vnode: O } = A;
        S.NODE_ENV !== "production" && bs(O), Bi(A, V, !1), x && (O.el = x);
        const P = !x && A.subTree.el;
        M(
          A,
          O,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          v(x || A.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          x ? null : y(A.subTree),
          _,
          i,
          D
        ), P && T(P), Gr(A, O.el), S.NODE_ENV !== "production" && _s(), m && --_.deps === 0 && _.resolve();
      });
    },
    unmount(A, M) {
      _.isUnmounted = !0, _.activeBranch && h(
        _.activeBranch,
        n,
        A,
        M
      ), _.pendingBranch && h(
        _.pendingBranch,
        n,
        A,
        M
      );
    }
  };
  return _;
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
    n && (e._d = !1, w()), e = e(), n && (e._d = !0, t = rt, cd());
  }
  if (Y(e)) {
    const n = Wr(e);
    S.NODE_ENV !== "production" && !n && e.filter((s) => s !== xl).length > 0 && R("<Suspense> slots expect a single root node."), e = n;
  }
  return e = mt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
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
function Km(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ie = Symbol.for("v-fgt"), on = Symbol.for("v-txt"), Ve = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), ro = [];
let rt = null;
function w(e = !1) {
  ro.push(rt = e ? null : []);
}
function cd() {
  ro.pop(), rt = ro[ro.length - 1] || null;
}
let is = 1;
function Mi(e, t = !1) {
  is += e, e < 0 && rt && t && (rt.hasOnce = !0);
}
function ud(e) {
  return e.dynamicChildren = is > 0 ? rt || ys : null, cd(), is > 0 && rt && rt.push(e), e;
}
function N(e, t, n, s, o, r) {
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
function Bt(e, t) {
  if (S.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = zo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Pi;
function Wm(e) {
  Pi = e;
}
const Gm = (...e) => fd(
  ...Pi ? Pi(e, Be) : e
), dd = ({ key: e }) => e ?? null, Go = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || Ie(e) || oe(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
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
    ctx: Be
  };
  return l ? (Dl(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), S.NODE_ENV !== "production" && a.key !== a.key && R("VNode created with invalid key (NaN). VNode type:", a.type), is > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  rt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && rt.push(a), a;
}
const ue = S.NODE_ENV !== "production" ? Gm : fd;
function fd(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === xl) && (S.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = Ve), ln(e)) {
    const l = Pt(
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
    l && !le(l) && (t.class = ke(l)), me(a) && (Ss(a) && !Y(a) && (a = fe({}, a)), t.style = Ge(a));
  }
  const i = le(e) ? 1 : mr(e) ? 128 : bu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return S.NODE_ENV !== "production" && i & 4 && Ss(e) && (e = ce(e), R(
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
      n && r ? Y(r) ? r.concat(Go(t)) : [r, Go(t)] : Go(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: S.NODE_ENV !== "production" && i === -1 && Y(l) ? l.map(hd) : l,
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
function je(e = " ", t = 0) {
  return ue(on, null, e, t);
}
function ls(e, t) {
  const n = ue(Mn, null, e);
  return n.staticCount = t, n;
}
function L(e = "", t = !1) {
  return t ? (w(), ct(Ve, null, e)) : ue(Ve, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean" ? ue(Ve) : Y(e) ? ue(
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
function _t(e, t, n, s = null) {
  Mt(e, t, 7, [
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
  return S.NODE_ENV !== "production" ? r.ctx = Kh(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Pm.bind(null, r), e.ce && e.ce(r), r;
}
let We = null;
const ut = () => We || Be;
let gr, Ri;
{
  const e = No(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  gr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => We = n
  ), Ri = t(
    "__VUE_SSR_SETTERS__",
    (n) => Os = n
  );
}
const as = (e) => {
  const t = We;
  return gr(e), e.scope.on(), () => {
    e.scope.off(), gr(t);
  };
}, Li = () => {
  We && We.scope.off(), gr(null);
}, Xm = /* @__PURE__ */ Je("slot,component");
function Fi(e, { isNativeTag: t }) {
  (Xm(e) || t(e)) && R(
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
  vm(e, s, r, t), Om(e, o, n || t);
  const i = r ? Qm(e, t) : void 0;
  return t && Ri(!1), i;
}
function Qm(e, t) {
  var n;
  const s = e.type;
  if (S.NODE_ENV !== "production") {
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
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, no), S.NODE_ENV !== "production" && Wh(e);
  const { setup: o } = s;
  if (o) {
    Wt();
    const r = e.setupContext = o.length > 1 ? Ed(e) : null, i = as(e), l = ds(
      o,
      e,
      0,
      [
        S.NODE_ENV !== "production" ? jt(e.props) : e.props,
        r
      ]
    ), a = Tr(l);
    if (Gt(), i(), (a || e.sp) && !In(e) && El(e), a) {
      if (l.then(Li, Li), t)
        return l.then((c) => {
          Bi(e, c, t);
        }).catch((c) => {
          Bn(c, e, 0);
        });
      if (e.asyncDep = l, S.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = s.name) != null ? n : "Anonymous";
        R(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Bi(e, l, t);
  } else
    _d(e, t);
}
function Bi(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (S.NODE_ENV !== "production" && ln(t) && R(
    "setup() should not return VNodes directly - return a render function instead."
  ), S.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = pl(t), S.NODE_ENV !== "production" && Gh(e)) : S.NODE_ENV !== "production" && t !== void 0 && R(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _d(e, n);
}
let io, ji;
function bd(e) {
  io = e, ji = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, zh));
  };
}
const Vl = () => !io;
function _d(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && io && !s.render) {
      const o = s.template || Ol(e).template;
      if (o) {
        S.NODE_ENV !== "production" && cn(e, "compile");
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
        s.render = io(o, c), S.NODE_ENV !== "production" && un(e, "compile");
      }
    }
    e.render = s.render || De, ji && ji(e);
  }
  {
    const o = as(e);
    Wt();
    try {
      cm(e);
    } finally {
      Gt(), o();
    }
  }
  S.NODE_ENV !== "production" && !s.render && e.render === De && !t && (!io && s.template ? R(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : R("Component is missing template or render function: ", s));
}
const Ma = S.NODE_ENV !== "production" ? {
  get(e, t) {
    return hr(), ze(e, "get", ""), e[t];
  },
  set() {
    return R("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return R("setupContext.attrs is readonly."), !1;
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
function Ed(e) {
  const t = (n) => {
    if (S.NODE_ENV !== "production" && (e.exposed && R("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Y(n) ? s = "array" : Ie(n) && (s = "ref")), s !== "object" && R(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (S.NODE_ENV !== "production") {
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
function Oo(e) {
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
function $s(e, t = !0) {
  return oe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yr(e, t, n = !1) {
  let s = $s(t);
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
const Z = (e, t) => {
  const n = zp(e, t, Os);
  if (S.NODE_ENV !== "production") {
    const s = ut();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Zt(e, t, n) {
  const s = arguments.length;
  return s === 2 ? me(t) && !Y(t) ? ln(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ln(n) && (n = [n]), ue(e, t, n));
}
function xd() {
  if (S.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!me(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Ie(u)) {
        Wt();
        const p = u.value;
        return Gt(), [
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
            `>${Yt(u) ? " (readonly)" : ""}`
          ];
        if (Yt(u))
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
    const h = a(u, "computed");
    h && p.push(i("computed", h));
    const y = a(u, "inject");
    return y && p.push(i("injected", y)), p.push([
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
        ...Object.keys(p).map((h) => [
          "div",
          {},
          ["span", s, h + ": "],
          l(p[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, p = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : me(u) ? ["object", { object: p ? ce(u) : u }] : ["span", n, String(u)];
  }
  function a(u, p) {
    const h = u.type;
    if (oe(h))
      return;
    const y = {};
    for (const v in u.ctx)
      c(h, v, p) && (y[v] = u.ctx[v]);
    return y;
  }
  function c(u, p, h) {
    const y = u[h];
    if (Y(y) && y.includes(p) || me(y) && p in y || u.extends && c(u.extends, p, h) || u.mixins && u.mixins.some((v) => c(v, p, h)))
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
const Hi = "3.5.18", Me = S.NODE_ENV !== "production" ? R : De, s0 = Fr, o0 = Ft, r0 = gl, i0 = {
  createComponentInstance: gd,
  setupComponent: yd,
  renderComponentRoot: Wo,
  setCurrentRenderingInstance: ho,
  isVNode: ln,
  normalizeVNode: mt,
  getComponentPublicInstance: Oo,
  ensureValidVNode: kl,
  pushWarningContext: bs,
  popWarningContext: _s
}, l0 = i0, a0 = null, c0 = null, u0 = null;
var Se = {};
let Ui;
const Pa = typeof window < "u" && window.trustedTypes;
if (Pa)
  try {
    Ui = /* @__PURE__ */ Pa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Se.NODE_ENV !== "production" && Me(`Error creating trusted types policy: ${e}`);
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
}, wn = "transition", zs = "animation", Ts = Symbol("_vtc"), kd = {
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
  (e, { slots: t }) => Zt(Nu, Od(e), t)
), qn = (e, t = []) => {
  Y(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, La = (e) => e ? Y(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Od(e) {
  const t = {};
  for (const O in e)
    O in kd || (t[O] = e[O]);
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
    leaveToClass: h = `${n}-leave-to`
  } = e, y = m0(o), v = y && y[0], T = y && y[1], {
    onBeforeEnter: C,
    onEnter: b,
    onEnterCancelled: g,
    onLeave: k,
    onLeaveCancelled: _,
    onBeforeAppear: A = C,
    onAppear: M = b,
    onAppearCancelled: D = g
  } = t, m = (O, P, z, K) => {
    O._enterCancelled = K, Nn(O, P ? d : l), Nn(O, P ? c : i), z && z();
  }, x = (O, P) => {
    O._isLeaving = !1, Nn(O, u), Nn(O, h), Nn(O, p), P && P();
  }, V = (O) => (P, z) => {
    const K = O ? M : b, ee = () => m(P, O, z);
    qn(K, [P, ee]), Fa(() => {
      Nn(P, O ? a : r), Xt(P, O ? d : l), La(K) || Ba(P, s, v, ee);
    });
  };
  return fe(t, {
    onBeforeEnter(O) {
      qn(C, [O]), Xt(O, r), Xt(O, i);
    },
    onBeforeAppear(O) {
      qn(A, [O]), Xt(O, a), Xt(O, c);
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(O, P) {
      O._isLeaving = !0;
      const z = () => x(O, P);
      Xt(O, u), O._enterCancelled ? (Xt(O, p), qi()) : (qi(), Xt(O, p)), Fa(() => {
        O._isLeaving && (Nn(O, u), Xt(O, h), La(k) || Ba(O, s, T, z));
      }), qn(k, [O, z]);
    },
    onEnterCancelled(O) {
      m(O, !1, void 0, !0), qn(g, [O]);
    },
    onAppearCancelled(O) {
      m(O, !0, void 0, !0), qn(D, [O]);
    },
    onLeaveCancelled(O) {
      x(O), qn(_, [O]);
    }
  });
}
function m0(e) {
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
function Xt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ts] || (e[Ts] = /* @__PURE__ */ new Set())).add(t);
}
function Nn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ts];
  n && (n.delete(t), n.size || (e[Ts] = void 0));
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
  }, p = (h) => {
    h.target === e && ++d >= a && u();
  };
  setTimeout(() => {
    d < a && u();
  }, l + 1), e.addEventListener(c, p);
}
function $d(e, t) {
  const n = window.getComputedStyle(e), s = (y) => (n[y] || "").split(", "), o = s(`${wn}Delay`), r = s(`${wn}Duration`), i = ja(o, r), l = s(`${zs}Delay`), a = s(`${zs}Duration`), c = ja(l, a);
  let d = null, u = 0, p = 0;
  t === wn ? i > 0 && (d = wn, u = i, p = r.length) : t === zs ? c > 0 && (d = zs, u = c, p = a.length) : (u = Math.max(i, c), d = u > 0 ? i > c ? wn : zs : null, p = d ? d === wn ? r.length : a.length : 0);
  const h = d === wn && /\b(transform|all)(,|$)/.test(
    s(`${wn}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: p,
    hasTransform: h
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
  const s = e[Ts];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const vr = Symbol("_vod"), Td = Symbol("_vsh"), Al = {
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
Se.NODE_ENV !== "production" && (Al.name = "show");
function Ks(e, t) {
  e.style.display = t ? e[vr] : "none", e[Td] = !t;
}
function y0() {
  Al.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Dd = Symbol(Se.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function b0(e) {
  const t = ut();
  if (!t) {
    Se.NODE_ENV !== "production" && Me("useCssVars is called without current active component instance.");
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
  }), He(() => {
    sn(s, De, { flush: "post" });
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
const _0 = /(^|;)\s*display\s*:/;
function E0(e, t, n) {
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
      i && (n += ";" + i), s.cssText = n, r = _0.test(n);
    }
  } else t && e.removeAttribute("style");
  vr in e && (e[vr] = r ? s.display : "", e[Td] && (s.display = "none"));
}
const w0 = /[^\\];\s*$/, Ua = /\s*!important$/;
function Yo(e, t, n) {
  if (Y(n))
    n.forEach((s) => Yo(e, t, s));
  else if (n == null && (n = ""), Se.NODE_ENV !== "production" && w0.test(n) && Me(
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
function Ka(e, t, n, s, o, r = ip(t)) {
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
    Se.NODE_ENV !== "production" && !i && Me(
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
    i.value = Se.NODE_ENV !== "production" ? Ja(s, t) : s;
  else {
    const [l, a] = k0(t);
    if (s) {
      const c = r[t] = $0(
        Se.NODE_ENV !== "production" ? Ja(s, t) : s,
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
    Mt(
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
  t === "class" ? v0(e, s, i) : t === "style" ? E0(e, n, s) : vn(t) ? tr(t) || S0(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : V0(e, t, s, i)) ? (Wa(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ka(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Wa(e, Ce(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ka(e, t, s, i));
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
  Dr(s) && fe(s, t);
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
  constructor(t, n = {}, s = Lt) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Lt ? this._root = this.shadowRoot : (Se.NODE_ENV !== "production" && this.shadowRoot && Me(
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
    this._connected = !1, Fs(() => {
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
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = sr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ce(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(i) : Se.NODE_ENV !== "production" && i && Me(
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
        ge(this, s) ? Se.NODE_ENV !== "production" && Me(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => So(n[s])
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
function Ki(e) {
  const t = ut(), n = t && t.ce;
  return n || (Se.NODE_ENV !== "production" && Me(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function M0() {
  const e = Se.NODE_ENV !== "production" ? Ki("useShadowRoot") : Ki();
  return e && e.shadowRoot;
}
function P0(e = "$style") {
  {
    const t = ut();
    if (!t)
      return Se.NODE_ENV !== "production" && Me("useCssModule must be called inside setup()"), pe;
    const n = t.type.__cssModules;
    if (!n)
      return Se.NODE_ENV !== "production" && Me("Current instance does not have CSS modules injected."), pe;
    const s = n[e];
    return s || (Se.NODE_ENV !== "production" && Me(`Current instance does not have CSS module named "${e}".`), pe);
  }
}
const Vd = /* @__PURE__ */ new WeakMap(), Ad = /* @__PURE__ */ new WeakMap(), br = Symbol("_moveCb"), Za = Symbol("_enterCb"), R0 = (e) => (delete e.props.mode, e), L0 = /* @__PURE__ */ R0({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, Cd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = ut(), s = yl();
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
      qi(), l.forEach((a) => {
        const c = a.el, d = c.style;
        Xt(c, i), d.transform = d.webkitTransform = d.transitionDuration = "";
        const u = c[br] = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", u), c[br] = null, Nn(c, i));
        };
        c.addEventListener("transitionend", u);
      }), o = [];
    }), () => {
      const i = ce(e), l = Od(i);
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
          ), Vd.set(
            d,
            d.el.getBoundingClientRect()
          ));
        }
      r = t.default ? Hr(t.default()) : [];
      for (let c = 0; c < r.length; c++) {
        const d = r[c];
        d.key != null ? yn(
          d,
          Cs(d, l, s, n)
        ) : Se.NODE_ENV !== "production" && d.type !== on && Me("<TransitionGroup> children must be keyed.");
      }
      return ue(a, null, r);
    };
  }
}), F0 = L0;
function B0(e) {
  const t = e.el;
  t[br] && t[br](), t[Za] && t[Za]();
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
  const s = e.cloneNode(), o = e[Ts];
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
    }), t || (hn(e, "compositionstart", q0), hn(e, "compositionend", ec), hn(e, "change", ec));
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
}, Le = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[At] = Ln(n), hn(e, "change", () => {
      const s = e._modelValue, o = Vs(e), r = e.checked, i = e[At];
      if (Y(s)) {
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
      e[At](Vs(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[At] = Ln(s), t !== n && (e.checked = Rn(t, s.props.value));
  }
}, Ds = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = us(t);
    hn(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? nr(Vs(i)) : Vs(i)
      );
      e[At](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, Fs(() => {
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
    Se.NODE_ENV !== "production" && Me(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = Vs(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((c) => String(c) === String(l)) : i.selected = Ar(t, l) > -1;
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
      return Ds;
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
function Bo(e, t, n, s, o) {
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
const K0 = ["ctrl", "shift", "alt", "meta"], W0 = {
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
  exact: (e, t) => K0.some((n) => e[`${n}Key`] && !t.includes(n))
}, zt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = W0[t[i]];
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
    const r = st(o.key);
    if (t.some(
      (i) => i === r || G0[i] === r
    ))
      return e(o);
  });
}, Rd = /* @__PURE__ */ fe({ patchProp: D0 }, p0);
let lo, sc = !1;
function Ld() {
  return lo || (lo = Yu(Rd));
}
function Fd() {
  return lo = sc ? lo : Ju(Rd), sc = !0, lo;
}
const Bd = (...e) => {
  Ld().render(...e);
}, Y0 = (...e) => {
  Fd().hydrate(...e);
}, Lt = (...e) => {
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
    return Se.NODE_ENV !== "production" && !t && Me(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Se.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Me(
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
  Fragment: ie,
  KeepAlive: Lh,
  ReactiveEffect: co,
  Static: Mn,
  Suspense: jm,
  Teleport: bn,
  Text: on,
  TrackOpTypes: Kp,
  Transition: ot,
  TransitionGroup: F0,
  TriggerOpTypes: Wp,
  VueElement: Jr,
  assertNumber: hl,
  callWithAsyncErrorHandling: Mt,
  callWithErrorHandling: ds,
  camelize: Ce,
  capitalize: rn,
  cloneVNode: Pt,
  compatUtils: c0,
  computed: Z,
  createApp: Lt,
  createBlock: ct,
  createCommentVNode: L,
  createElementBlock: N,
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
  getTransitionRawChildren: Hr,
  guardReactiveProps: pd,
  h: Zt,
  handleError: Bn,
  hasInjectionContext: gm,
  hydrate: Y0,
  hydrateOnIdle: Th,
  hydrateOnInteraction: Ih,
  hydrateOnMediaQuery: Ah,
  hydrateOnVisible: Vh,
  initCustomFormatter: xd,
  initDirectivesForSSR: J0,
  inject: so,
  isMemoSame: Nd,
  isProxy: Ss,
  isReactive: mn,
  isReadonly: Yt,
  isRef: Ie,
  isRuntimeOnly: Vl,
  isShallow: it,
  isVNode: ln,
  markRaw: ou,
  mergeDefaults: om,
  mergeModels: rm,
  mergeProps: md,
  nextTick: Fs,
  normalizeClass: ke,
  normalizeProps: ep,
  normalizeStyle: Ge,
  onActivated: $u,
  onBeforeMount: Vu,
  onBeforeUnmount: zr,
  onBeforeUpdate: wl,
  onDeactivated: Tu,
  onErrorCaptured: Pu,
  onMounted: He,
  onRenderTracked: Mu,
  onRenderTriggered: Iu,
  onScopeDispose: jc,
  onServerPrefetch: Au,
  onUnmounted: Ct,
  onUpdated: qr,
  onWatcherCleanup: cu,
  openBlock: w,
  popScopeId: gh,
  provide: Bu,
  proxyRefs: pl,
  pushScopeId: mh,
  queuePostFlushCb: ks,
  reactive: Ns,
  readonly: Rr,
  ref: q,
  registerRuntimeCompiler: bd,
  render: Bd,
  renderList: be,
  renderSlot: jn,
  resolveComponent: jh,
  resolveDirective: Hh,
  resolveDynamicComponent: Nl,
  resolveFilter: a0,
  resolveTransitionHooks: Cs,
  setBlockTracking: Mi,
  setDevtoolsHook: r0,
  setTransitionHooks: yn,
  shallowReactive: su,
  shallowReadonly: jt,
  shallowRef: ru,
  ssrContextKey: ed,
  ssrUtils: l0,
  stop: gp,
  toDisplayString: j,
  toHandlerKey: tn,
  toHandlers: qh,
  toRaw: ce,
  toRef: Up,
  toRefs: Bp,
  toValue: Rp,
  transformVNodeArgs: Wm,
  triggerRef: Pp,
  unref: So,
  useAttrs: sm,
  useCssModule: P0,
  useCssVars: b0,
  useHost: Ki,
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
  vModelSelect: Ds,
  vModelText: Fn,
  vShow: Al,
  version: Hi,
  warn: Me,
  watch: sn,
  watchEffect: Vm,
  watchPostEffect: Am,
  watchSyncEffect: nd,
  withAsyncContext: lm,
  withCtx: Pe,
  withDefaults: tm,
  withDirectives: $e,
  withKeys: _r,
  withMemo: n0,
  withModifiers: zt,
  withScopeId: vh
}, Symbol.toStringTag, { value: "Module" }));
var J = {};
const vo = Symbol(J.NODE_ENV !== "production" ? "Fragment" : ""), ao = Symbol(J.NODE_ENV !== "production" ? "Teleport" : ""), Ml = Symbol(J.NODE_ENV !== "production" ? "Suspense" : ""), Er = Symbol(J.NODE_ENV !== "production" ? "KeepAlive" : ""), Kd = Symbol(
  J.NODE_ENV !== "production" ? "BaseTransition" : ""
), cs = Symbol(J.NODE_ENV !== "production" ? "openBlock" : ""), Wd = Symbol(J.NODE_ENV !== "production" ? "createBlock" : ""), Gd = Symbol(
  J.NODE_ENV !== "production" ? "createElementBlock" : ""
), Pl = Symbol(J.NODE_ENV !== "production" ? "createVNode" : ""), Rl = Symbol(
  J.NODE_ENV !== "production" ? "createElementVNode" : ""
), $o = Symbol(
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
), yo = Symbol(
  J.NODE_ENV !== "production" ? "normalizeProps" : ""
), To = Symbol(
  J.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Wl = Symbol(J.NODE_ENV !== "production" ? "toHandlers" : ""), Wi = Symbol(J.NODE_ENV !== "production" ? "camelize" : ""), Q0 = Symbol(J.NODE_ENV !== "production" ? "capitalize" : ""), Gi = Symbol(
  J.NODE_ENV !== "production" ? "toHandlerKey" : ""
), xr = Symbol(
  J.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Z0 = Symbol(J.NODE_ENV !== "production" ? "pushScopeId" : ""), eg = Symbol(J.NODE_ENV !== "production" ? "popScopeId" : ""), Gl = Symbol(J.NODE_ENV !== "production" ? "withCtx" : ""), tg = Symbol(J.NODE_ENV !== "production" ? "unref" : ""), ng = Symbol(J.NODE_ENV !== "production" ? "isRef" : ""), Yl = Symbol(J.NODE_ENV !== "production" ? "withMemo" : ""), Qd = Symbol(J.NODE_ENV !== "production" ? "isMemoSame" : ""), As = {
  [vo]: "Fragment",
  [ao]: "Teleport",
  [Ml]: "Suspense",
  [Er]: "KeepAlive",
  [Kd]: "BaseTransition",
  [cs]: "openBlock",
  [Wd]: "createBlock",
  [Gd]: "createElementBlock",
  [Pl]: "createVNode",
  [Rl]: "createElementVNode",
  [$o]: "createCommentVNode",
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
  [yo]: "normalizeProps",
  [To]: "guardReactiveProps",
  [Wl]: "toHandlers",
  [Wi]: "camelize",
  [Q0]: "capitalize",
  [Gi]: "toHandlerKey",
  [xr]: "setBlockTracking",
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
    As[t] = e[t];
  });
}
const Ot = {
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
    loc: Ot
  };
}
function bo(e, t, n, s, o, r, i, l = !1, a = !1, c = !1, d = Ot) {
  return e && (l ? (e.helper(cs), e.helper(Ps(e.inSSR, c))) : e.helper(Ms(e.inSSR, c)), i && e.helper(Ul)), {
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
function Re(e, t) {
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
function Kt(e, t = Ot) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Ke(e, t = [], n = Ot) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function Is(e, t = void 0, n = !1, s = !1, o = Ot) {
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
function rg(e, t, n = !1, s = !1) {
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
function ig(e) {
  return {
    type: 21,
    body: e,
    loc: Ot
  };
}
function Ms(e, t) {
  return e || t ? Pl : Rl;
}
function Ps(e, t) {
  return e || t ? Wd : Gd;
}
function Jl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Ms(s, e.isComponent)), t(cs), t(Ps(s, e.isComponent)));
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
function Rs(e, t, n, ...s) {
  const o = Pn(e, t);
  return J.NODE_ENV !== "production" && o && Sr(e, t, n, ...s), o;
}
function Sr(e, t, n, ...s) {
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
  J.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Ne(e, t, n, s) {
  const o = J.NODE_ENV !== "production" ? (n || cg)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(o));
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
      return ao;
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
function _o(e, t, n = !1, s = !1) {
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
function kr(e) {
  return e.type === 1 && e.tagType === 3;
}
function Cr(e) {
  return e.type === 1 && e.tagType === 2;
}
const _g = /* @__PURE__ */ new Set([yo, To]);
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
    !le(l) && l.type === 15 ? uc(t, l) || l.properties.unshift(t) : o.callee === Wl ? s = Ke(n.helper(wr), [
      Vt([t]),
      o
    ]) : o.arguments.unshift(Vt([t])), !s && (s = o);
  } else o.type === 15 ? (uc(t, o) || o.properties.unshift(t), s = o) : (s = Ke(n.helper(wr), [
    Vt([t]),
    o
  ]), i && i.callee === To && (i = r[r.length - 2]));
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
function Eo(e, t) {
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
  isVoidTag: Ws,
  isPreTag: Ws,
  isIgnoreNewlineTag: Ws,
  isCustomElement: Ws,
  onError: Xl,
  onWarn: Zd,
  comments: J.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ve = of, wo = null, gn = "", nt = null, he = null, bt = "", dn = -1, zn = -1, Zl = 0, $n = !1, Xi = null;
const Ae = [], Te = new lg(Ae, {
  onerr: yt,
  ontext(e, t) {
    jo(Qe(e, t), e, t);
  },
  ontextentity(e, t, n) {
    jo(e, t, n);
  },
  oninterpolation(e, t) {
    if ($n)
      return jo(Qe(e, t), e, t);
    let n = e + Te.delimiterOpen.length, s = t - Te.delimiterClose.length;
    for (; St(gn.charCodeAt(n)); )
      n++;
    for (; St(gn.charCodeAt(s - 1)); )
      s--;
    let o = Qe(n, s);
    o.includes("&") && (o = ve.decodeEntities(o, !1)), Qi({
      type: 5,
      content: Xo(o, !1, Fe(n, s)),
      loc: Fe(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Qe(e, t);
    nt = {
      type: 1,
      tag: n,
      ns: ve.getNamespace(n, Ae[0], ve.ns),
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
    if (!ve.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < Ae.length; o++)
        if (Ae[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && yt(24, Ae[0].loc.start.offset);
          for (let i = 0; i <= o; i++) {
            const l = Ae.shift();
            Jo(l, t, i < o);
          }
          break;
        }
      s || yt(23, rf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = nt.tag;
    nt.isSelfClosing = !0, fc(e), Ae[0] && Ae[0].tag === t && Jo(Ae.shift(), e);
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
      he.arg = Xo(
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
        if (bt.includes("&") && (bt = ve.decodeEntities(
          bt,
          !0
        )), he.type === 6)
          he.name === "class" && (bt = af(bt).trim()), e === 1 && !bt && yt(13, t), he.value = {
            type: 2,
            content: bt,
            loc: e === 1 ? Fe(dn, zn) : Fe(dn - 1, zn + 1)
          }, Te.inSFCRoot && nt.tag === "template" && he.name === "lang" && bt && bt !== "html" && Te.enterRCDATA(Nr("</template"), 0);
        else {
          let n = 0;
          he.exp = Xo(
            bt,
            !1,
            Fe(dn, zn),
            0,
            n
          ), he.name === "for" && (he.forParseResult = Ng(he.exp));
          let s = -1;
          he.name === "bind" && (s = he.modifiers.findIndex(
            (o) => o.content === "sync"
          )) > -1 && Rs(
            "COMPILER_V_BIND_SYNC",
            ve,
            he.loc,
            he.arg.loc.source
          ) && (he.name = "model", he.modifiers.splice(s, 1));
        }
      (he.type !== 7 || he.name !== "pre") && nt.props.push(he);
    }
    bt = "", dn = zn = -1;
  },
  oncomment(e, t) {
    ve.comments && Qi({
      type: 3,
      content: Qe(e, t),
      loc: Fe(e - 4, t + 3)
    });
  },
  onend() {
    const e = gn.length;
    if (J.NODE_ENV !== "production" && Te.state !== 1)
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
      Jo(Ae[t], e - 1), yt(24, Ae[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ae[0].ns !== 0 ? jo(Qe(e, t), e, t) : yt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ae[0] ? Ae[0].ns : ve.ns) === 0 && yt(
      21,
      e - 1
    );
  }
}), dc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, xg = /^\(|\)$/g;
function Ng(e) {
  const t = e.loc, n = e.content, s = n.match(wg);
  if (!s) return;
  const [, o, r] = s, i = (u, p, h = !1) => {
    const y = t.start.offset + p, v = y + u.length;
    return Xo(
      u,
      !1,
      Fe(y, v),
      0,
      h ? 1 : 0
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
      const h = d[2].trim();
      h && (l.index = i(
        h,
        n.indexOf(
          h,
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
  n === 0 && ve.isPreTag(t) && Zl++, ve.isVoidTag(t) ? Jo(nt, e) : (Ae.unshift(nt), (n === 1 || n === 2) && (Te.inXML = !0)), nt = null;
}
function jo(e, t, n) {
  {
    const r = Ae[0] && Ae[0].tag;
    r !== "script" && r !== "style" && e.includes("&") && (e = ve.decodeEntities(e, !1));
  }
  const s = Ae[0] || wo, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, Gn(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Fe(t, n)
  });
}
function Jo(e, t, n = !1) {
  n ? Gn(e.loc, rf(t, 60)) : Gn(e.loc, Sg(t, 62) + 1), Te.inSFCRoot && (e.children.length ? e.innerLoc.end = fe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = fe({}, e.innerLoc.start), e.innerLoc.source = Qe(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: r } = e;
  if ($n || (s === "slot" ? e.tagType = 2 : pc(e) ? e.tagType = 3 : Cg(e) && (e.tagType = 1)), Te.inRCDATA || (e.children = lf(r)), o === 0 && ve.isIgnoreNewlineTag(s)) {
    const i = r[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  o === 0 && ve.isPreTag(s) && Zl--, Xi === e && ($n = Te.inVPre = !1, Xi = null), Te.inXML && (Ae[0] ? Ae[0].ns : ve.ns) === 0 && (Te.inXML = !1);
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
      const a = Ae[0] || wo, c = a.children.indexOf(e);
      a.children.splice(c, 1, ...e.children);
    }
    const l = i.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Rs(
      "COMPILER_INLINE_TEMPLATE",
      ve,
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
  if (ve.isCustomElement(e))
    return !1;
  if (e === "component" || Og(e.charCodeAt(0)) || ef(e) || ve.isBuiltInComponent && ve.isBuiltInComponent(e) || ve.isNativeTag && !ve.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (Rs(
          "COMPILER_IS_ON_ELEMENT",
          ve,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Vn(s.arg, "is") && Rs(
        "COMPILER_IS_ON_ELEMENT",
        ve,
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
  const t = ve.whitespace !== "preserve";
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
  (Ae[0] || wo).children.push(e);
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
function Xo(e, t = !1, n, s = 0, o = 0) {
  return de(e, t, n, s);
}
function yt(e, t, n) {
  ve.onError(
    Ne(e, Fe(t, t), void 0, n)
  );
}
function Ig() {
  Te.reset(), nt = null, he = null, bt = "", dn = -1, zn = -1, Ae.length = 0;
}
function Mg(e, t) {
  if (Ig(), gn = e, ve = fe({}, of), t) {
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
  const s = wo = og([], e);
  return Te.parse(gn), s.loc = Fe(0, e.length), s.children = lf(s.children), wo = null, s;
}
function Pg(e, t) {
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
  for (let u = 0; u < r.length; u++) {
    const p = r[u];
    if (p.type === 1 && p.tagType === 0) {
      const h = s ? 0 : kt(p, n);
      if (h > 0) {
        if (h >= 2) {
          p.codegenNode.patchFlag = -1, i.push(p);
          continue;
        }
      } else {
        const y = p.codegenNode;
        if (y.type === 13) {
          const v = y.patchFlag;
          if ((v === void 0 || v === 512 || v === 1) && df(p, n) >= 2) {
            const T = ff(p);
            T && (y.props = n.hoist(T));
          }
          y.dynamicProps && (y.dynamicProps = n.hoist(y.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : kt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (J.NODE_ENV !== "production" ? ` /* ${Zs[-1]} */` : "")
      ), i.push(p);
      continue;
    }
    if (p.type === 1) {
      const h = p.tagType === 1;
      h && n.scopes.vSlot++, Qo(p, e, n, !1, o), h && n.scopes.vSlot--;
    } else if (p.type === 11)
      Qo(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let h = 0; h < p.branches.length; h++)
        Qo(
          p.branches[h],
          e,
          n,
          p.branches[h].children.length === 1,
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
      const h = u.children.properties.find(
        (y) => y.key === p || y.key.content === p
      );
      return h && h.value;
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
            Ps(t.inSSR, o.isComponent)
          ), o.isBlock = !1, t.helper(Ms(t.inSSR, o.isComponent));
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
  Kl,
  yo,
  To
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
  slotted: h = !0,
  ssr: y = !1,
  inSSR: v = !1,
  ssrCssVars: T = "",
  bindingMetadata: C = pe,
  inline: b = !1,
  isTS: g = !1,
  onError: k = Xl,
  onWarn: _ = Zd,
  compatConfig: A
}) {
  const M = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), D = {
    // options
    filename: t,
    selfName: M && rn(Ce(M[1])),
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
    slotted: h,
    ssr: y,
    inSSR: v,
    ssrCssVars: T,
    bindingMetadata: C,
    inline: b,
    isTS: g,
    onError: k,
    onWarn: _,
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
    helper(m) {
      const x = D.helpers.get(m) || 0;
      return D.helpers.set(m, x + 1), m;
    },
    removeHelper(m) {
      const x = D.helpers.get(m);
      if (x) {
        const V = x - 1;
        V ? D.helpers.set(m, V) : D.helpers.delete(m);
      }
    },
    helperString(m) {
      return `_${As[D.helper(m)]}`;
    },
    replaceNode(m) {
      if (J.NODE_ENV !== "production") {
        if (!D.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!D.parent)
          throw new Error("Cannot replace root node.");
      }
      D.parent.children[D.childIndex] = D.currentNode = m;
    },
    removeNode(m) {
      if (J.NODE_ENV !== "production" && !D.parent)
        throw new Error("Cannot remove root node.");
      const x = D.parent.children, V = m ? x.indexOf(m) : D.currentNode ? D.childIndex : -1;
      if (J.NODE_ENV !== "production" && V < 0)
        throw new Error("node being removed is not a child of current parent");
      !m || m === D.currentNode ? (D.currentNode = null, D.onNodeRemoved()) : D.childIndex > V && (D.childIndex--, D.onNodeRemoved()), D.parent.children.splice(V, 1);
    },
    onNodeRemoved: De,
    addIdentifiers(m) {
    },
    removeIdentifiers(m) {
    },
    hoist(m) {
      le(m) && (m = de(m)), D.hoists.push(m);
      const x = de(
        `_hoisted_${D.hoists.length}`,
        !1,
        m.loc,
        2
      );
      return x.hoisted = m, x;
    },
    cache(m, x = !1, V = !1) {
      const O = rg(
        D.cached.length,
        m,
        x,
        V
      );
      return D.cached.push(O), O;
    }
  };
  return D.filters = /* @__PURE__ */ new Set(), D;
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
    J.NODE_ENV !== "production" && s.filter((r) => r.type !== 3).length === 1 && (o |= 2048), e.codegenNode = bo(
      t,
      n(vo),
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
      t.ssr || t.helper($o);
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
const Zr = "/*@__PURE__*/", hf = (e) => `${As[e]}: _${As[e]}`;
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
  const h = {
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
      return `_${As[v]}`;
    },
    push(v, T = -2, C) {
      h.code += v;
    },
    indent() {
      y(++h.indentLevel);
    },
    deindent(v = !1) {
      v ? --h.indentLevel : y(--h.indentLevel);
    },
    newline() {
      y(h.indentLevel);
    }
  };
  function y(v) {
    h.push(
      `
` + "  ".repeat(v),
      0
      /* Start */
    );
  }
  return h;
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
  } = n, u = Array.from(e.helpers), p = u.length > 0, h = !r && s !== "module";
  qg(e, n);
  const v = d ? "ssrRender" : "render", C = (d ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${v}(${C}) {`), i(), h && (o("with (_ctx) {"), i(), p && (o(
    `const { ${u.map(hf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (bi(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (bi(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), bi(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let b = 0; b < e.temps; b++)
      o(`${b > 0 ? ", " : ""}_temp${b}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), d || o("return "), e.codegenNode ? lt(e.codegenNode, n) : o("null"), h && (l(), o("}")), l(), o("}"), {
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
      $o,
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
      `const ${Eo(a, t)} = ${i}(${JSON.stringify(a)}${c ? ", true" : ""})${r ? "!" : ""}`
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
function Kg(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function ea(e, t) {
  const n = e.length > 3 || J.NODE_ENV !== "production" && e.some((s) => Y(s) || !Kg(s));
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
      J.NODE_ENV !== "production" && ac(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), lt(e.codegenNode, t);
      break;
    case 2:
      Wg(e, t);
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
function Wg(e, t) {
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
    `${s($o)}(${JSON.stringify(e.content)})`,
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
    isComponent: h
  } = e;
  let y;
  if (a)
    if (J.NODE_ENV !== "production")
      if (a < 0)
        y = a + ` /* ${Zs[a]} */`;
      else {
        const T = Object.keys(Zs).map(Number).filter((C) => C > 0 && a & C).map((C) => Zs[C]).join(", ");
        y = a + ` /* ${T} */`;
      }
    else
      y = String(a);
  d && n(s(Ul) + "("), u && n(`(${s(cs)}(${p ? "true" : ""}), `), o && n(Zr);
  const v = u ? Ps(t.inSSR, h) : Ms(t.inSSR, h);
  n(s(v) + "(", -2, e), Do(
    Qg([r, i, l, y, c]),
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
  o && n(Zr), n(r + "(", -2, e), Do(e.arguments, t), n(")");
}
function ev(e, t) {
  const { push: n, indent: s, deindent: o, newline: r } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const l = i.length > 1 || J.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
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
  c && n(`_${As[Gl]}(`), n("(", -2, e), Y(r) ? Do(r, t) : r && lt(r, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), Y(i) ? ea(i, t) : lt(i, t)) : l && lt(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
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
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(xr)}(-1`), e.inVOnce && n(", true"), n("),"), i(), n("(")), n(`_cache[${e.index}] = `), lt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), i(), n(`${s(xr)}(1),`), i(), n(`_cache[${e.index}]`), r()), n(")"), a && n(")]");
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
        Ne(
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
  return J.NODE_ENV !== "production" && Yn(e, t, n, s), e;
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
      Ne(28, t.loc)
    ), t.exp = de("true", !1, o);
  }
  if (J.NODE_ENV !== "production" && t.exp && Yn(t.exp, n), t.name === "if") {
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
          d && l.branches.forEach(({ userKey: u }) => {
            uv(u, d) && n.onError(
              Ne(
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
    userKey: _o(e, "key"),
    isTemplateIf: n
  };
}
function mc(e, t, n) {
  return e.condition ? Yi(
    e.condition,
    gc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Ke(n.helper($o), [
      J.NODE_ENV !== "production" ? '"v-if"' : '""',
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
      return J.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((c) => c.type !== 3).length === 1 && (a |= 2048), bo(
        n,
        s(vo),
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
        Ne(
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
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), s.some((l) => l.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = Ce(r.content) : r.content = `${n.helperString(Wi)}(${r.content})` : (r.children.unshift(`${n.helperString(Wi)}(`), r.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && vc(r, "."), s.some((l) => l.content === "attr") && vc(r, "^")), {
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
      ]), l = kr(e), a = Et(e, "memo"), c = _o(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && vf(c);
      let u = c && (c.type === 6 ? c.value ? de(c.value.content, !0) : void 0 : c.exp);
      const p = c && u ? Re("key", u) : null, h = r.source.type === 4 && r.source.constType > 0, y = h ? 64 : c ? 128 : 256;
      return r.codegenNode = bo(
        n,
        s(vo),
        void 0,
        i,
        y,
        void 0,
        void 0,
        !0,
        !h,
        !1,
        e.loc
      ), () => {
        let v;
        const { children: T } = r;
        J.NODE_ENV !== "production" && l && e.children.some((g) => {
          if (g.type === 1) {
            const k = _o(g, "key");
            if (k)
              return n.onError(
                Ne(
                  33,
                  k.loc
                )
              ), !0;
          }
        });
        const C = T.length !== 1 || T[0].type !== 1, b = Cr(e) ? e : l && e.children.length === 1 && Cr(e.children[0]) ? e.children[0] : null;
        if (b ? (v = b.codegenNode, l && p && Or(v, p, n)) : C ? v = bo(
          n,
          s(vo),
          p ? Vt([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (v = T[0].codegenNode, l && p && Or(v, p, n), v.isBlock !== !h && (v.isBlock ? (o(cs), o(
          Ps(n.inSSR, v.isComponent)
        )) : o(
          Ms(n.inSSR, v.isComponent)
        )), v.isBlock = !h, v.isBlock ? (s(cs), s(Ps(n.inSSR, v.isComponent))) : s(Ms(n.inSSR, v.isComponent))), a) {
          const g = Is(
            Zi(r.parseResult, [
              de("_cached")
            ])
          );
          g.body = ig([
            Kt(["const _memo = (", a.exp, ")"]),
            Kt([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Qd
              )}(_cached, _memo)) return _cached`
            ]),
            Kt(["const _item = ", v]),
            de("_item.memo = _memo"),
            de("return _item")
          ]), i.arguments.push(
            g,
            de("_cache"),
            de(String(n.cached.length))
          ), n.cached.push(null);
        } else
          i.arguments.push(
            Is(
              Zi(r.parseResult),
              v,
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
  const { addIdentifiers: r, removeIdentifiers: i, scopes: l } = n, { source: a, value: c, key: d, index: u } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: d,
    objectIndexAlias: u,
    parseResult: o,
    children: kr(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const h = s && s(p);
  return () => {
    l.vFor--, h && h();
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
}, vv = (e, t, n, s) => Is(
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
    const { arg: T, exp: C } = a;
    T && !wt(T) && (l = !0), r.push(
      Re(
        T || de("default", !0),
        n(C, void 0, s, o)
      )
    );
  }
  let c = !1, d = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let h = 0;
  for (let T = 0; T < s.length; T++) {
    const C = s[T];
    let b;
    if (!kr(C) || !(b = Et(C, "slot", !0))) {
      C.type !== 3 && u.push(C);
      continue;
    }
    if (a) {
      t.onError(
        Ne(37, b.loc)
      );
      break;
    }
    c = !0;
    const { children: g, loc: k } = C, {
      arg: _ = de("default", !0),
      exp: A,
      loc: M
    } = b;
    let D;
    wt(_) ? D = _ ? _.content : "default" : l = !0;
    const m = Et(C, "for"), x = n(A, m, g, k);
    let V, O;
    if (V = Et(C, "if"))
      l = !0, i.push(
        Yi(
          V.exp,
          Ho(_, x, h++),
          yc
        )
      );
    else if (O = Et(
      C,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let P = T, z;
      for (; P-- && (z = s[P], !(z.type !== 3 && el(z))); )
        ;
      if (z && kr(z) && Et(z, /^(else-)?if$/)) {
        let K = i[i.length - 1];
        for (; K.alternate.type === 19; )
          K = K.alternate;
        K.alternate = O.exp ? Yi(
          O.exp,
          Ho(
            _,
            x,
            h++
          ),
          yc
        ) : Ho(_, x, h++);
      } else
        t.onError(
          Ne(30, O.loc)
        );
    } else if (m) {
      l = !0;
      const P = m.forParseResult;
      P ? (yf(P, t), i.push(
        Ke(t.helper(ql), [
          P.source,
          Is(
            Zi(P),
            Ho(_, x),
            !0
          )
        ])
      )) : t.onError(
        Ne(
          32,
          m.loc
        )
      );
    } else {
      if (D) {
        if (p.has(D)) {
          t.onError(
            Ne(
              38,
              M
            )
          );
          continue;
        }
        p.add(D), D === "default" && (d = !0);
      }
      r.push(Re(_, x));
    }
  }
  if (!a) {
    const T = (C, b) => {
      const g = n(C, void 0, b, o);
      return t.compatConfig && (g.isNonScopedSlot = !0), Re("default", g);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((C) => el(C)) && (d ? t.onError(
      Ne(
        39,
        u[0].loc
      )
    ) : r.push(
      T(void 0, u)
    )) : r.push(T(void 0, s));
  }
  const y = l ? 2 : Zo(e.children) ? 3 : 1;
  let v = Vt(
    r.concat(
      Re(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        de(
          y + (J.NODE_ENV !== "production" ? ` /* ${Kf[y]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return i.length && (v = Ke(t.helper(Xd), [
    v,
    ns(i)
  ])), {
    slots: v,
    hasDynamicSlots: l
  };
}
function Ho(e, t, n) {
  const s = [
    Re("name", e),
    Re("fn", t)
  ];
  return n != null && s.push(
    Re("key", de(String(n), !0))
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
const bf = /* @__PURE__ */ new WeakMap(), bv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, r = e.tagType === 1;
  let i = r ? _v(e, t) : `"${s}"`;
  const l = me(i) && i.callee === Bl;
  let a, c, d = 0, u, p, h, y = (
    // dynamic component may resolve to plain elements
    l || i === ao || i === Ml || !r && // <svg> and <foreignObject> must be forced into blocks so that block
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
    const T = v.directives;
    h = T && T.length ? ns(
      T.map((C) => wv(C, t))
    ) : void 0, v.shouldUseBlock && (y = !0);
  }
  if (e.children.length > 0)
    if (i === Er && (y = !0, d |= 1024, J.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Ne(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    i !== ao && // explained above.
    i !== Er) {
      const { slots: T, hasDynamicSlots: C } = yv(e, t);
      c = T, C && (d |= 1024);
    } else if (e.children.length === 1 && i !== ao) {
      const T = e.children[0], C = T.type, b = C === 5 || C === 8;
      b && kt(T, t) === 0 && (d |= 1), b || C === 2 ? c = T : c = e.children;
    } else
      c = e.children;
  p && p.length && (u = xv(p)), e.codegenNode = bo(
    t,
    i,
    a,
    c,
    d === 0 ? void 0 : d,
    u,
    h,
    !!y,
    !1,
    r,
    e.loc
  );
};
function _v(e, t, n = !1) {
  let { tag: s } = e;
  const o = tl(s), r = _o(
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
  return i ? (n || t.helper(i), i) : (t.helper(Fl), t.components.add(s), Eo(s, "component"));
}
function _f(e, t, n = e.props, s, o, r = !1) {
  const { tag: i, loc: l, children: a } = e;
  let c = [];
  const d = [], u = [], p = a.length > 0;
  let h = !1, y = 0, v = !1, T = !1, C = !1, b = !1, g = !1, k = !1;
  const _ = [], A = (x) => {
    c.length && (d.push(
      Vt(bc(c), l)
    ), c = []), x && d.push(x);
  }, M = () => {
    t.scopes.vFor > 0 && c.push(
      Re(
        de("ref_for", !0),
        de("true")
      )
    );
  }, D = ({ key: x, value: V }) => {
    if (wt(x)) {
      const O = x.content, P = vn(O);
      if (P && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      O.toLowerCase() !== "onclick" && // omit v-model handlers
      O !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !An(O) && (b = !0), P && An(O) && (k = !0), P && V.type === 14 && (V = V.arguments[0]), V.type === 20 || (V.type === 4 || V.type === 8) && kt(V, t) > 0)
        return;
      O === "ref" ? v = !0 : O === "class" ? T = !0 : O === "style" ? C = !0 : O !== "key" && !_.includes(O) && _.push(O), s && (O === "class" || O === "style") && !_.includes(O) && _.push(O);
    } else
      g = !0;
  };
  for (let x = 0; x < n.length; x++) {
    const V = n[x];
    if (V.type === 6) {
      const { loc: O, name: P, nameLoc: z, value: K } = V;
      let ee = !0;
      if (P === "ref" && (v = !0, M()), P === "is" && (tl(i) || K && K.content.startsWith("vue:") || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Re(
          de(P, !0, z),
          de(
            K ? K.content : "",
            ee,
            K ? K.loc : O
          )
        )
      );
    } else {
      const { name: O, arg: P, exp: z, loc: K, modifiers: ee } = V, ne = O === "bind", te = O === "on";
      if (O === "slot") {
        s || t.onError(
          Ne(40, K)
        );
        continue;
      }
      if (O === "once" || O === "memo" || O === "is" || ne && Vn(P, "is") && (tl(i) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || te && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && Vn(P, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        te && p && Vn(P, "vue:before-update")) && (h = !0), ne && Vn(P, "ref") && M(), !P && (ne || te)
      ) {
        if (g = !0, z)
          if (ne) {
            if (A(), J.NODE_ENV !== "production" && d.some(($t) => $t.type === 15 ? $t.properties.some(({ key: Tt }) => Tt.type !== 4 || !Tt.isStatic ? !0 : Tt.content !== "class" && Tt.content !== "style" && !vn(Tt.content)) : !0) && Rs(
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
            M(), A(), d.push(z);
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
      ne && ee.some((gt) => gt.content === "prop") && (y |= 32);
      const we = t.directiveTransforms[O];
      if (we) {
        const { props: gt, needRuntime: $t } = we(V, e, t);
        !r && gt.forEach(D), te && P && !wt(P) ? A(Vt(gt, l)) : c.push(...gt), $t && (u.push(V), xt($t) && bf.set(V, $t));
      } else Vc(O) || (u.push(V), p && (h = !0));
    }
  }
  let m;
  if (d.length ? (A(), d.length > 1 ? m = Ke(
    t.helper(wr),
    d,
    l
  ) : m = d[0]) : c.length && (m = Vt(
    bc(c),
    l
  )), g ? y |= 16 : (T && !s && (y |= 2), C && !s && (y |= 4), _.length && (y |= 8), b && (y |= 32)), !h && (y === 0 || y === 32) && (v || k || u.length > 0) && (y |= 512), !t.inSSR && m)
    switch (m.type) {
      case 15:
        let x = -1, V = -1, O = !1;
        for (let K = 0; K < m.properties.length; K++) {
          const ee = m.properties[K].key;
          wt(ee) ? ee.content === "class" ? x = K : ee.content === "style" && (V = K) : ee.isHandlerKey || (O = !0);
        }
        const P = m.properties[x], z = m.properties[V];
        O ? m = Ke(
          t.helper(yo),
          [m]
        ) : (P && !wt(P.value) && (P.value = Ke(
          t.helper(zl),
          [P.value]
        )), z && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (C || z.value.type === 4 && z.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        z.value.type === 17) && (z.value = Ke(
          t.helper(Kl),
          [z.value]
        )));
        break;
      case 14:
        break;
      default:
        m = Ke(
          t.helper(yo),
          [
            Ke(t.helper(To), [
              m
            ])
          ]
        );
        break;
    }
  return {
    props: m,
    directives: u,
    patchFlag: y,
    dynamicPropNames: _,
    shouldUseBlock: h
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
  s ? n.push(t.helperString(s)) : (t.helper(jl), t.directives.add(e.name), n.push(Eo(e.name, "directive")));
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
function tl(e) {
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
    r && (i[2] = r, l = 3), n.length && (i[3] = Is([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), i.splice(l), e.codegenNode = Ke(
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
      let u = i.content;
      J.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Ne(51, i.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const p = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        tn(Ce(u))
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
    const u = nf(a), p = !(u || vg(a)), h = a.content.includes(";");
    J.NODE_ENV !== "production" && Yn(
      a,
      n,
      !1,
      h
    ), (p || c && u) && (a = Kt([
      `${p ? "$event" : "(...args)"} => ${h ? "{" : "("}`,
      a,
      h ? "}" : ")"
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
              1 + (J.NODE_ENV !== "production" ? ` /* ${Zs[1]} */` : "")
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
    const h = e.modifiers.map((v) => v.content).map((v) => (Ql(v) ? v : JSON.stringify(v)) + ": true").join(", "), y = o ? wt(o) ? `${o.content}Modifiers` : Kt([o, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Re(
        y,
        de(
          `{ ${h} }`,
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
const Ov = /[\w).+\-_$\]]/, $v = (e, t) => {
  Pn("COMPILER_FILTERS", t) && (e.type === 5 ? $r(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && $r(n.exp, t);
  }));
};
function $r(e, t) {
  if (e.type === 4)
    Ec(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? Ec(s, t) : s.type === 8 ? $r(e, t) : s.type === 5 && $r(s.content, t));
    }
}
function Ec(e, t) {
  const n = e.content;
  let s = !1, o = !1, r = !1, i = !1, l = 0, a = 0, c = 0, d = 0, u, p, h, y, v = [];
  for (h = 0; h < n.length; h++)
    if (p = u, u = n.charCodeAt(h), s)
      u === 39 && p !== 92 && (s = !1);
    else if (o)
      u === 34 && p !== 92 && (o = !1);
    else if (r)
      u === 96 && p !== 92 && (r = !1);
    else if (i)
      u === 47 && p !== 92 && (i = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(h + 1) !== 124 && n.charCodeAt(h - 1) !== 124 && !l && !a && !c)
      y === void 0 ? (d = h + 1, y = n.slice(0, h).trim()) : T();
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
        let C = h - 1, b;
        for (; C >= 0 && (b = n.charAt(C), b === " "); C--)
          ;
        (!b || !Ov.test(b)) && (i = !0);
      }
    }
  y === void 0 ? y = n.slice(0, h).trim() : d !== 0 && T();
  function T() {
    v.push(n.slice(d, h).trim()), d = h + 1;
  }
  if (v.length) {
    for (J.NODE_ENV !== "production" && Sr(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), h = 0; h < v.length; h++)
      y = Tv(y, v[h], t);
    e.content = y, e.ast = void 0;
  }
}
function Tv(e, t, n) {
  n.helper(Hl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${Eo(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), r = t.slice(s + 1);
    return n.filters.add(o), `${Eo(o, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const wc = /* @__PURE__ */ new WeakSet(), Dv = (e, t) => {
  if (e.type === 1) {
    const n = Et(e, "memo");
    return !n || wc.has(e) ? void 0 : (wc.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Jl(s, t), e.codegenNode = Ke(t.helper(Yl), [
        n.exp,
        Is(void 0, s),
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
      ...J.NODE_ENV !== "production" ? [lv] : [],
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
  t.prefixIdentifiers === !0 ? n(Ne(47)) : s && n(Ne(48));
  const o = !1;
  t.cacheHandlers && n(Ne(49)), t.scopeId && !s && n(Ne(50));
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
let ms;
function Mv(e, t = !1) {
  return ms || (ms = document.createElement("div")), t ? (ms.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, ms.children[0].getAttribute("foo")) : (ms.innerHTML = e, ms.textContent);
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
function Ut(e, t) {
  return Ne(
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
    Ut(53, o)
  ), t.children.length && (n.onError(
    Ut(54, o)
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
    Ut(55, o)
  ), t.children.length && (n.onError(
    Ut(56, o)
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
    Ut(
      58,
      e.arg.loc
    )
  );
  function o() {
    const l = Et(t, "bind");
    l && Vn(l.arg, "value") && n.onError(
      Ut(
        60,
        l.loc
      )
    );
  }
  const { tag: r } = t, i = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || i) {
    let l = Sf, a = !1;
    if (r === "input" || i) {
      const c = _o(t, "type");
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
                Ut(
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
      Ut(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), s;
}, Uv = /* @__PURE__ */ Je("passive,once,capture"), qv = /* @__PURE__ */ Je(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), zv = /* @__PURE__ */ Je("left,right"), Df = /* @__PURE__ */ Je("onkeyup,onkeydown,onkeypress"), Kv = (e, t, n, s) => {
  const o = [], r = [], i = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Rs(
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
]) : e, Wv = (e, t, n) => Ef(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: r, value: i } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: c } = Kv(r, o, n, e.loc);
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
    Ut(61, o)
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
        Ut(
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
    Ut(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Xv(e, t) {
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
  on: Wv,
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
var Qs = {};
function ny() {
  xd();
}
Qs.NODE_ENV !== "production" && ny();
const Oc = /* @__PURE__ */ Object.create(null);
function sy(e, t) {
  if (!le(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Qs.NODE_ENV !== "production" && Me("invalid template option: ", e), De;
  const n = zf(e, t), s = Oc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Qs.NODE_ENV !== "production" && !a && Me(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const o = fe(
    {
      hoistStatic: !0,
      onError: Qs.NODE_ENV !== "production" ? i : void 0,
      onWarn: Qs.NODE_ENV !== "production" ? (a) => i(a, !0) : De
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
const Ye = (e, t) => {
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
    const n = e, s = t, o = q(!1), r = Z(() => n.href ? "a" : "button"), i = (d, u = "") => {
      var y, v, T;
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
      const h = (T = (v = (y = window.Shopline) == null ? void 0 : y.theme) == null ? void 0 : v.settings) == null ? void 0 : T[d];
      if (h != null && h !== "")
        return h;
      try {
        const C = "--" + d.replace(/_/g, "-"), b = getComputedStyle(document.documentElement).getPropertyValue(C).trim();
        if (b) return b;
      } catch {
      }
      return u;
    }, l = Z(() => {
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
    }), a = Z(() => {
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
    return (d, u) => (w(), ct(Nl(r.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: ke(a.value),
      style: Ge(l.value),
      onClick: c,
      onMouseenter: u[0] || (u[0] = (p) => o.value = !0),
      onMouseleave: u[1] || (u[1] = (p) => o.value = !1)
    }, {
      default: Pe(() => [
        e.loading ? (w(), N("svg", oy, u[2] || (u[2] = [
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
}, ss = /* @__PURE__ */ Ye(ry, [["__scopeId", "data-v-ee93db6c"]]), iy = ["disabled"], ly = ["value", "min", "max"], ay = ["disabled"], cy = {
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
    const n = e, s = t, o = ut(), r = Z({
      get: () => n.modelValue,
      set: (d) => {
        var p, h, y;
        const u = Math.max(n.min, Math.min(n.max, d));
        if (s("update:modelValue", u), s("update", u), ((y = (h = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : h.parentElement) == null ? void 0 : y.tagName) === "QUANTITY-SELECTOR") {
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
      ]), 10, iy),
      f("input", {
        type: "number",
        class: ke(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, ly),
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
      ]), 10, ay)
    ], 2));
  }
}, Af = /* @__PURE__ */ Ye(cy, [["__scopeId", "data-v-402d2d49"]]), uy = ["data-updating"], dy = { class: "cart-item__content" }, fy = { class: "cart-item__image" }, py = ["href"], hy = ["src", "alt"], my = { class: "cart-item__details" }, gy = { class: "cart-item__header" }, vy = { class: "cart-item__info" }, yy = { class: "cart-item__title" }, by = ["href"], _y = {
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
    const n = e, s = t, o = q(n.item.quantity), r = q(!1), i = q(""), l = Z(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = Z(() => {
      var p;
      return ((p = n.item.variant) == null ? void 0 : p.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (p) => {
      var C, b, g;
      if (!p && p !== 0) return "$0.00";
      const h = ((C = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : C.money_format) || "${{amount}}";
      (b = Shopline == null ? void 0 : Shopline.shop) != null && b.currency;
      const y = ((g = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : g.current) || "en", T = new Intl.NumberFormat(y, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(p));
      return h.replace("{{amount}}", T);
    }, d = async (p) => {
      if (!r.value) {
        r.value = !0, i.value = "";
        try {
          await s("update", {
            key: n.item.key,
            quantity: p
          }), p === 0 && s("remove", n.item.key);
        } catch (h) {
          console.error("Failed to update quantity:", h), i.value = "Failed to update quantity. Please try again.", o.value = n.item.quantity;
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
    return sn(() => n.item.quantity, (p) => {
      o.value = p;
    }), (p, h) => (w(), N("div", {
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
                }, j(e.item.product_title), 9, by)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (w(), N("p", _y, j(e.item.variant_title), 1)) : L("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (w(), N("div", Ey, [
                (w(!0), N(ie, null, be(e.item.properties, (y, v) => (w(), N("p", {
                  key: v,
                  class: "cart-item__property"
                }, [
                  f("span", wy, j(v) + ":", 1),
                  je(" " + j(y), 1)
                ]))), 128))
              ])) : L("", !0)
            ]),
            f("div", xy, [
              f("p", Ny, j(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (w(), N("p", Sy, j(c(e.item.original_price * e.item.quantity)), 1)) : L("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (w(), N("div", ky, [
            (w(!0), N(ie, null, be(e.item.discounts, (y) => (w(), N("div", {
              key: y.id,
              class: "cart-item__discount"
            }, [
              h[1] || (h[1] = f("svg", {
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
              je(" " + j(y.title) + " (-" + j(c(y.amount || y.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : L("", !0),
          f("div", Cy, [
            f("div", Oy, [
              ue(Af, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  h[0] || (h[0] = (y) => o.value = y),
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
                r.value ? (w(), N("svg", Dy, h[3] || (h[3] = [
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
                ]))) : (w(), N("svg", Ty, h[2] || (h[2] = [
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
              f("p", Ay, j(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (w(), N("p", Iy, j(c(e.item.original_price * e.item.quantity)), 1)) : L("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (w(), N("p", My, " Save " + j(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : L("", !0)
            ])
          ]),
          a.value ? (w(), N("p", Py, " Only " + j(e.item.variant.inventory_quantity) + " left in stock ", 1)) : L("", !0),
          i.value ? (w(), N("p", Ry, j(i.value), 1)) : L("", !0)
        ])
      ])
    ], 8, uy));
  }
}, If = /* @__PURE__ */ Ye(Ly, [["__scopeId", "data-v-44c314e9"]]), Fy = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, By = { class: "absolute inset-0 overflow-hidden" }, jy = { class: "fixed inset-y-0 right-0 max-w-full flex pointer-events-none" }, Hy = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, Uy = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, qy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, zy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, Ky = { class: "flex-1 overflow-y-auto" }, Wy = {
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
    const t = q(!1), n = q([]), s = q(0), o = Z(() => {
      var y;
      return ((y = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : y.cart) || "/cart";
    }), r = Z(() => {
      var v, T;
      return ((T = (v = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : v.settings) == null ? void 0 : T.free_shipping_threshold) || 50;
    }), i = Z(() => {
      var y, v;
      return ((v = (y = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : y.settings) == null ? void 0 : v.show_free_shipping_bar) !== !1;
    }), l = (y) => {
      var g, k, _, A;
      if (!y && y !== 0) return "$0.00";
      const v = ((g = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : g.money_format) || "${{amount}}";
      (k = Shopline == null ? void 0 : Shopline.shop) != null && k.money_with_currency_format, (_ = Shopline == null ? void 0 : Shopline.shop) != null && _.currency;
      const T = ((A = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : A.current) || "en", b = new Intl.NumberFormat(T, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(y));
      return v.replace("{{amount}}", b);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", d();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, d = async () => {
      const y = await window.OrionCart.fetchCart();
      n.value = y.items, s.value = y.total_price;
    }, u = async ({ key: y, quantity: v }) => {
      await window.OrionCart.updateItem(y, v), d();
    }, p = async (y) => {
      await window.OrionCart.removeItem(y), d();
    }, h = (y) => {
      y.key === "Escape" && t.value && c();
    };
    return He(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", h);
    }), Ct(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", h);
    }), (y, v) => (w(), ct(bn, { to: "body" }, [
      ue(ot, { name: "drawer" }, {
        default: Pe(() => [
          t.value ? (w(), N("div", Fy, [
            f("div", By, [
              ue(ot, { name: "fade" }, {
                default: Pe(() => [
                  t.value ? (w(), N("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: c
                  })) : L("", !0)
                ]),
                _: 1
              }),
              f("div", jy, [
                ue(ot, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Pe(() => [
                    t.value ? (w(), N("div", Hy, [
                      f("div", Uy, [
                        f("div", qy, [
                          f("div", null, [
                            v[0] || (v[0] = f("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (w(), N("p", zy, j(n.value.length) + " " + j(n.value.length === 1 ? "item" : "items"), 1)) : L("", !0)
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
                        f("div", Ky, [
                          n.value.length === 0 ? (w(), N("div", Wy, [
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
                              onClick: c,
                              variant: "primary",
                              size: "large"
                            }, {
                              default: Pe(() => v[2] || (v[2] = [
                                je(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (w(), N("div", Gy, [
                            (w(!0), N(ie, null, be(n.value, (T) => (w(), ct(If, {
                              key: T.key,
                              item: T,
                              onUpdate: u,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (w(), N("div", Yy, [
                          i.value ? (w(), N("div", {
                            key: 0,
                            class: ke([s.value >= r.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "p-3"]),
                            style: { borderRadius: "var(--button-radius)" }
                          }, [
                            s.value >= r.value ? (w(), N("div", Jy, v[6] || (v[6] = [
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
                            ]))) : (w(), N("div", Xy, [
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
                              f("p", Qy, " Add " + j(l(
                                r.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < r.value ? (w(), N("div", Zy, [
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
                            f("div", e1, [
                              v[8] || (v[8] = f("p", null, "Subtotal", -1)),
                              f("p", null, j(l(s.value)), 1)
                            ]),
                            v[9] || (v[9] = f("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          f("div", t1, [
                            ue(ss, {
                              href: o.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Pe(() => v[10] || (v[10] = [
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
                              default: Pe(() => v[11] || (v[11] = [
                                je(" Continue Shopping ", -1)
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
}, Mf = /* @__PURE__ */ Ye(n1, [["__scopeId", "data-v-8da1cccd"]]), s1 = {
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
    }), He(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", c);
      const u = (p) => {
        p.key === "Escape" && i.value && c();
      };
      document.addEventListener("keydown", u), Ct(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", c), document.removeEventListener("keydown", u);
      });
    }), (u, p) => (w(), N("div", null, [
      (w(), ct(bn, { to: "body" }, [
        ue(ot, { name: "menu" }, {
          default: Pe(() => [
            i.value ? (w(), N("div", s1, [
              f("div", o1, [
                ue(ot, { name: "fade" }, {
                  default: Pe(() => [
                    i.value ? (w(), N("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : L("", !0)
                  ]),
                  _: 1
                }),
                f("div", r1, [
                  ue(ot, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      i.value ? (w(), N("div", i1, [
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
                                s.value.length === 0 ? (w(), N("li", d1, p[4] || (p[4] = [
                                  f("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : L("", !0),
                                (w(!0), N(ie, null, be(s.value, (h) => (w(), N("li", {
                                  key: h.id || h.title
                                }, [
                                  h.links && h.links.length ? (w(), N("div", f1, [
                                    f("button", {
                                      onClick: (y) => d(
                                        h.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      f("span", null, j(h.title), 1),
                                      (w(), N("svg", {
                                        class: ke(["h-5 w-5 transition-transform duration-200", {
                                          "rotate-180": l.value.includes(
                                            h.title
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
                                          h.title
                                        ) ? (w(), N("ul", h1, [
                                          (w(!0), N(ie, null, be(h.links, (y) => (w(), N("li", {
                                            key: y.id || y.title
                                          }, [
                                            y.links && y.links.length ? (w(), N("div", m1, [
                                              f("button", {
                                                onClick: (v) => d(
                                                  `${h.title}-${y.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                f("span", null, j(y.title), 1),
                                                (w(), N("svg", {
                                                  class: ke(["h-4 w-4 transition-transform duration-200", {
                                                    "rotate-180": l.value.includes(
                                                      `${h.title}-${y.title}`
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
                                                    `${h.title}-${y.title}`
                                                  ) ? (w(), N("ul", v1, [
                                                    (w(!0), N(ie, null, be(y.links, (v) => (w(), N("li", {
                                                      key: v.id || v.title
                                                    }, [
                                                      f("a", {
                                                        href: v.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: p[0] || (p[0] = (...T) => c && c(...T))
                                                      }, j(v.title), 9, y1)
                                                    ]))), 128))
                                                  ])) : L("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (w(), N("a", {
                                              key: 1,
                                              href: y.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: p[1] || (p[1] = (...v) => c && c(...v))
                                            }, j(y.title), 9, b1))
                                          ]))), 128))
                                        ])) : L("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (w(), N("a", {
                                    key: 1,
                                    href: h.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: c
                                  }, j(h.title), 9, _1))
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
                            r.value ? (w(), N("div", N1, [
                              jn(u.$slots, "localization", {}, void 0, !0)
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
}, k1 = /* @__PURE__ */ Ye(S1, [["__scopeId", "data-v-9092623c"]]), C1 = { class: "variant-picker" }, O1 = { class: "text-sm font-medium text-gray-900 mb-3" }, $1 = { class: "font-normal text-gray-600" }, T1 = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, D1 = ["title", "aria-label", "disabled", "onClick"], V1 = { class: "sr-only" }, A1 = {
  key: 0,
  class: "color-swatch__checkmark"
}, I1 = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, M1 = ["aria-label", "disabled", "onClick"], P1 = {
  key: 0,
  class: "mt-6 flex items-center justify-between"
}, R1 = { class: "flex items-center gap-4" }, L1 = { class: "text-2xl font-bold text-gray-900" }, F1 = {
  key: 0,
  class: "text-lg text-gray-500 line-through"
}, B1 = {
  key: 0,
  class: "text-sm text-green-600 font-medium"
}, j1 = {
  key: 1,
  class: "text-sm text-red-600 font-medium"
}, H1 = {
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
    He(() => {
      if (n.selectedVariantId) {
        const T = l.value.find((C) => C.id == n.selectedVariantId);
        T && a(T);
      } else if (l.value.length > 0) {
        const T = l.value.find((C) => C.available) || l.value[0];
        a(T);
      }
    });
    const a = (T) => {
      r.value = T, i.value.forEach((C, b) => {
        o.value[C.name] = T[`option${b + 1}`];
      }), s("variant-change", T);
    }, c = (T, C) => {
      o.value[T] = C;
      const b = l.value.find((g) => i.value.every((k, _) => {
        const A = o.value[k.name];
        return g[`option${_ + 1}`] === A;
      }));
      b && (r.value = b, s("variant-change", b));
    }, d = (T) => o.value[T] || "", u = (T, C) => o.value[T] === C, p = (T, C) => {
      const b = i.value.findIndex((g) => g.name === T);
      return l.value.some((g) => {
        const k = g[`option${b + 1}`] === C, _ = i.value.every((A, M) => {
          if (A.name === T) return !0;
          const D = o.value[A.name];
          return D ? g[`option${M + 1}`] === D : !0;
        });
        return k && _ && g.available;
      });
    }, h = (T) => T.toLowerCase().includes("color") || T.toLowerCase().includes("colour"), y = (T) => ({
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
      var C, b;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((b = (C = window.Shopify) == null ? void 0 : C.currency) == null ? void 0 : b.active) || "USD"
      }).format(T / 100);
    };
    return (T, C) => (w(), N("div", C1, [
      (w(!0), N(ie, null, be(i.value, (b) => (w(), N("div", {
        key: b.name,
        class: "variant-option mb-6"
      }, [
        f("h3", O1, [
          je(j(b.name) + ": ", 1),
          f("span", $1, j(d(b.name)), 1)
        ]),
        h(b.name) ? (w(), N("div", T1, [
          (w(!0), N(ie, null, be(b.values, (g) => (w(), N("button", {
            key: g,
            type: "button",
            class: ke([
              "color-swatch",
              u(b.name, g) ? "color-swatch--selected" : "",
              p(b.name, g) ? "" : "color-swatch--unavailable"
            ]),
            style: Ge({ backgroundColor: y(g) }),
            title: g,
            "aria-label": `Select ${b.name} ${g}`,
            disabled: !p(b.name, g),
            onClick: (k) => c(b.name, g)
          }, [
            f("span", V1, j(g), 1),
            u(b.name, g) ? (w(), N("span", A1, C[0] || (C[0] = [
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
          ], 14, D1))), 128))
        ])) : (w(), N("div", I1, [
          (w(!0), N(ie, null, be(b.values, (g) => (w(), N("button", {
            key: g,
            type: "button",
            class: ke([
              "variant-button",
              u(b.name, g) ? "variant-button--selected" : "",
              p(b.name, g) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${b.name} ${g}`,
            disabled: !p(b.name, g),
            onClick: (k) => c(b.name, g)
          }, j(g), 11, M1))), 128))
        ]))
      ]))), 128)),
      r.value ? (w(), N("div", P1, [
        f("div", R1, [
          f("span", L1, j(v(r.value.price)), 1),
          r.value.compare_at_price > r.value.price ? (w(), N("span", F1, j(v(r.value.compare_at_price)), 1)) : L("", !0)
        ]),
        r.value.available ? (w(), N("div", B1, " In Stock ")) : (w(), N("div", j1, " Out of Stock "))
      ])) : L("", !0)
    ]));
  }
}, U1 = /* @__PURE__ */ Ye(H1, [["__scopeId", "data-v-6eb16bf8"]]);
function q1(e) {
  return cl() ? (jc(e), !0) : !1;
}
function na(e) {
  return typeof e == "function" ? e() : So(e);
}
const z1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const K1 = Object.prototype.toString, W1 = (e) => K1.call(e) === "[object Object]", xo = () => {
};
function G1(e, t) {
  function n(...s) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(r);
    });
  }
  return n;
}
function Y1(...e) {
  let t = 0, n, s = !0, o = xo, r, i, l, a, c;
  !Ie(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [i, l = !0, a = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, o(), o = xo);
  };
  return (p) => {
    const h = na(i), y = Date.now() - t, v = () => r = p();
    return d(), h <= 0 ? (t = Date.now(), v()) : (y > h && (a || !s) ? (t = Date.now(), v()) : l && (r = new Promise((T, C) => {
      o = c ? C : T, n = setTimeout(() => {
        t = Date.now(), s = !0, T(v()), d();
      }, Math.max(0, h - y));
    })), !a && !n && (n = setTimeout(() => s = !0, h)), s = !1, r);
  };
}
function J1(e, t = 200, n = !1, s = !0, o = !1) {
  return G1(
    Y1(t, n, s, o),
    e
  );
}
function X1(e) {
  var t;
  const n = na(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pf = z1 ? window : void 0;
function Ei(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Pf) : [t, n, s, o] = e, !t)
    return xo;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((d) => d()), r.length = 0;
  }, l = (d, u, p, h) => (d.addEventListener(u, p, h), () => d.removeEventListener(u, p, h)), a = sn(
    () => [X1(t), na(o)],
    ([d, u]) => {
      if (i(), !d)
        return;
      const p = W1(u) ? { ...u } : u;
      r.push(
        ...n.flatMap((h) => s.map((y) => l(d, h, y, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), i();
  };
  return q1(c), c;
}
function Q1(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: r,
    passive: i = !0,
    window: l = Pf
  } = t, a = Ns({ x: 0, y: 0 }), c = Ns({ x: 0, y: 0 }), d = Z(() => a.x - c.x), u = Z(() => a.y - c.y), { max: p, abs: h } = Math, y = Z(() => p(h(d.value), h(u.value)) >= n), v = q(!1), T = Z(() => y.value ? h(d.value) > h(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), C = (m) => [m.touches[0].clientX, m.touches[0].clientY], b = (m, x) => {
    a.x = m, a.y = x;
  }, g = (m, x) => {
    c.x = m, c.y = x;
  };
  let k;
  const _ = Z1(l == null ? void 0 : l.document);
  i ? k = _ ? { passive: !0 } : { capture: !1 } : k = _ ? { passive: !1, capture: !0 } : { capture: !0 };
  const A = (m) => {
    v.value && (o == null || o(m, T.value)), v.value = !1;
  }, M = [
    Ei(e, "touchstart", (m) => {
      if (m.touches.length !== 1)
        return;
      k.capture && !k.passive && m.preventDefault();
      const [x, V] = C(m);
      b(x, V), g(x, V), r == null || r(m);
    }, k),
    Ei(e, "touchmove", (m) => {
      if (m.touches.length !== 1)
        return;
      const [x, V] = C(m);
      g(x, V), !v.value && y.value && (v.value = !0), v.value && (s == null || s(m));
    }, k),
    Ei(e, ["touchend", "touchcancel"], A, k)
  ];
  return {
    isPassiveEventSupported: _,
    isSwiping: v,
    direction: T,
    coordsStart: a,
    coordsEnd: c,
    lengthX: d,
    lengthY: u,
    stop: () => M.forEach((m) => m())
  };
}
function Z1(e) {
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
const eb = { class: "sticky-header-container" }, tb = {
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
      const b = {};
      return T.value && s.value && (b.position = "fixed", b.top = "0", b.left = "0", b.right = "0", b.zIndex = "40", o.value ? b.transform = "translateY(-100%)" : b.transform = "translateY(0)"), i.value && (a.value === 0 ? b.backgroundColor = "transparent" : T.value && s.value && (b.backgroundColor = l.value)), b.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", b;
    }), h = () => {
      var k, _, A;
      const b = (_ = (k = n.value) == null ? void 0 : k.getRootNode()) == null ? void 0 : _.host;
      if (!b) return;
      b.classList.add("sticky-header-wrapper");
      const g = (A = n.value) == null ? void 0 : A.querySelector(".main-header");
      g && i.value && (a.value === 0 ? (g.style.backgroundColor = "transparent", g.style.borderBottomColor = "transparent") : T.value && s.value && (g.style.backgroundColor = l.value, g.style.borderBottomColor = "#e5e7eb"));
    }, y = J1(() => {
      if (!T.value)
        return;
      const b = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = b, s.value = b > 0, r.value = b > 10, v.value && s.value) {
        const g = b - u;
        Math.abs(g) > 5 && (g > 0 && b > c.value ? o.value = !0 : g < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(b - u) > 1 && (u = b), h();
    }, 50), v = q(t.hideOnScrollDown), T = q(t.sticky), C = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return He(() => {
      if (n.value) {
        const b = n.value.getRootNode().host;
        if (b) {
          b.classList.add("sticky-header-wrapper"), i.value = b.classList.contains("header-transparent");
          const g = b.getAttribute("data-hide-on-scroll-down"), k = b.getAttribute("data-sticky"), _ = b.getAttribute("data-sticky-bg");
          g !== null && (v.value = g === "true"), k !== null && (T.value = k === "true"), _ !== null && (l.value = _ || "#ffffff"), setTimeout(C, 100), window.addEventListener("resize", C);
        }
      }
      window.addEventListener("scroll", y, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, h(), y();
    }), Ct(() => {
      window.removeEventListener("scroll", y), window.removeEventListener("resize", C);
    }), (b, g) => (w(), N("div", eb, [
      T.value && s.value ? (w(), N("div", {
        key: 0,
        class: "header-placeholder",
        style: Ge({ height: d.value })
      }, null, 4)) : L("", !0),
      f("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: ke(["sticky-header-inner", {
          "is-fixed": T.value && s.value,
          "is-hidden": o.value,
          "has-shadow": r.value,
          "is-transparent": i.value && a.value === 0
        }]),
        style: Ge(p.value)
      }, [
        jn(b.$slots, "default")
      ], 6)
    ]));
  }
}, nb = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, sb = { class: "main-header__wrapper" }, ob = {
  href: "/",
  class: "main-header__logo"
}, rb = ["src", "alt"], ib = {
  key: 1,
  class: "text-xl font-bold"
}, lb = { class: "main-header__nav hidden lg:flex" }, ab = ["href"], cb = { class: "main-header__actions" }, ub = ["href"], db = {
  key: 0,
  class: "cart-count"
}, fb = { class: "search-overlay__container" }, pb = {
  action: "/search",
  method: "get",
  class: "search-form"
}, hb = {
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
      s.value = !s.value, s.value && (await Fs(), (d = n.value) == null || d.focus());
    }, c = () => {
      var d;
      (d = window.OrionCart) != null && d.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return He(() => {
      document.addEventListener("cart:updated", c), c();
    }), Ct(() => {
      document.removeEventListener("cart:updated", c);
    }), (d, u) => (w(), N("div", nb, [
      f("div", sb, [
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
        f("a", ob, [
          e.logoUrl ? (w(), N("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, rb)) : (w(), N("span", ib, j(e.shopName), 1))
        ]),
        f("nav", lb, [
          (w(!0), N(ie, null, be(e.navigationLinks, (p) => (w(), N("a", {
            key: p.url,
            href: p.url,
            class: "nav-link"
          }, j(p.title), 9, ab))), 128))
        ]),
        f("div", cb, [
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
          ]), 8, ub),
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
            o.value > 0 ? (w(), N("span", db, j(o.value), 1)) : L("", !0)
          ])
        ])
      ]),
      (w(), ct(bn, { to: "body" }, [
        ue(ot, { name: "fade" }, {
          default: Pe(() => [
            s.value ? (w(), N("div", {
              key: 0,
              class: "search-overlay",
              onClick: zt(a, ["self"])
            }, [
              f("div", fb, [
                f("form", pb, [
                  f("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: _r(a, ["esc"])
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
            ])) : L("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
}, Rf = /* @__PURE__ */ Ye(hb, [["__scopeId", "data-v-3988ea0d"]]), mb = { class: "site-footer" }, gb = {
  key: 0,
  class: "newsletter-section"
}, vb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, yb = { class: "newsletter-content" }, bb = { class: "newsletter-text" }, _b = { class: "text-xl font-semibold mb-2" }, Eb = { class: "text-gray-600" }, wb = ["disabled"], xb = ["disabled"], Nb = { key: 0 }, Sb = { key: 1 }, kb = { class: "footer-main" }, Cb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Ob = { class: "footer-grid" }, $b = { class: "footer-column" }, Tb = { class: "footer-heading" }, Db = { class: "text-gray-600 mb-4" }, Vb = {
  key: 0,
  class: "social-links"
}, Ab = ["href", "aria-label"], Ib = { class: "footer-heading" }, Mb = { class: "footer-links" }, Pb = ["href"], Rb = {
  key: 0,
  class: "footer-column"
}, Lb = { class: "contact-info" }, Fb = {
  key: 0,
  class: "contact-item"
}, Bb = {
  key: 1,
  class: "contact-item"
}, jb = {
  key: 2,
  class: "contact-item"
}, Hb = {
  key: 0,
  class: "payment-methods"
}, Ub = { class: "payment-icons" }, qb = ["src", "alt"], zb = { class: "footer-bottom" }, Kb = { class: "copyright" }, Wb = {
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
        facebook: () => Zt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Zt("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
        ]),
        twitter: () => Zt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Zt("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
        ]),
        instagram: () => Zt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Zt("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" })
        ]),
        youtube: () => Zt("svg", { class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24" }, [
          Zt("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
        ])
      };
      return l[i.toLowerCase()] || l.facebook;
    };
    return (i, l) => (w(), N("footer", mb, [
      e.showNewsletter ? (w(), N("div", gb, [
        f("div", vb, [
          f("div", yb, [
            f("div", bb, [
              f("h3", _b, j(e.newsletterTitle), 1),
              f("p", Eb, j(e.newsletterDescription), 1)
            ]),
            f("form", {
              onSubmit: zt(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              $e(f("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, wb), [
                [Fn, t.value]
              ]),
              f("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (w(), N("span", Sb, "Subscribing...")) : (w(), N("span", Nb, "Subscribe"))
              ], 8, xb)
            ], 32)
          ])
        ])
      ])) : L("", !0),
      f("div", kb, [
        f("div", Cb, [
          f("div", Ob, [
            f("div", $b, [
              f("h4", Tb, j(e.companyName), 1),
              f("p", Db, j(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (w(), N("div", Vb, [
                (w(!0), N(ie, null, be(e.socialLinks, (a) => (w(), N("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (w(), ct(Nl(r(a.name))))
                ], 8, Ab))), 128))
              ])) : L("", !0)
            ]),
            (w(!0), N(ie, null, be(e.footerColumns, (a) => (w(), N("div", {
              key: a.title,
              class: "footer-column"
            }, [
              f("h4", Ib, j(a.title), 1),
              f("ul", Mb, [
                (w(!0), N(ie, null, be(a.links, (c) => (w(), N("li", {
                  key: c.title
                }, [
                  f("a", {
                    href: c.url,
                    class: "footer-link"
                  }, j(c.title), 9, Pb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (w(), N("div", Rb, [
              l[4] || (l[4] = f("h4", { class: "footer-heading" }, "Contact", -1)),
              f("div", Lb, [
                e.contactEmail ? (w(), N("p", Fb, [
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
                  je(" " + j(e.contactEmail), 1)
                ])) : L("", !0),
                e.contactPhone ? (w(), N("p", Bb, [
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
                  je(" " + j(e.contactPhone), 1)
                ])) : L("", !0),
                e.contactAddress ? (w(), N("p", jb, [
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
                  je(" " + j(e.contactAddress), 1)
                ])) : L("", !0)
              ])
            ])) : L("", !0)
          ]),
          e.paymentMethods.length > 0 ? (w(), N("div", Hb, [
            l[5] || (l[5] = f("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            f("div", Ub, [
              (w(!0), N(ie, null, be(e.paymentMethods, (a) => (w(), N("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, qb))), 128))
            ])
          ])) : L("", !0),
          f("div", zb, [
            f("p", Kb, " © " + j(s.value) + " " + j(e.companyName) + ". All rights reserved. ", 1),
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
}, Gb = /* @__PURE__ */ Ye(Wb, [["__scopeId", "data-v-1c1567f0"]]), Yb = ["href"], Jb = ["src", "alt"], Xb = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, Qb = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, Zb = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, e_ = { class: "p-4" }, t_ = {
  key: 0,
  class: "mb-3"
}, n_ = { class: "flex gap-1.5 flex-wrap" }, s_ = ["onClick", "title"], o_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, r_ = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, i_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, l_ = ["href"], a_ = { class: "flex items-center gap-1 mb-2" }, c_ = { class: "flex" }, u_ = { class: "flex items-baseline gap-2 mb-4" }, d_ = { class: "text-xl font-bold text-gray-900" }, f_ = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, p_ = ["disabled"], h_ = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, m_ = { key: 1 }, g_ = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, v_ = {
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
    const n = e, s = t, o = q(""), r = q(!1), i = q(!1), l = q(!1), a = q(!1), c = Z(() => n.product ? n.product : {
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
      const V = c.value.handle;
      return c.value.url || (V ? `/products/${V}` : "#");
    }), u = Z(() => {
      var V, O, P;
      return r.value && ((V = c.value.images) != null && V[1]) ? c.value.images[1].src : ((P = (O = c.value.images) == null ? void 0 : O[0]) == null ? void 0 : P.src) || c.value.featured_image || c.value.image || "/placeholder.jpg";
    }), p = Z(() => {
      var V;
      return (V = c.value.options) == null ? void 0 : V.some(
        (O) => {
          var P, z;
          return ((P = O.name) == null ? void 0 : P.toLowerCase().includes("color")) || ((z = O.name) == null ? void 0 : z.toLowerCase().includes("colour"));
        }
      );
    }), h = Z(() => {
      var O;
      const V = (O = c.value.options) == null ? void 0 : O.find(
        (P) => {
          var z, K;
          return ((z = P.name) == null ? void 0 : z.toLowerCase().includes("color")) || ((K = P.name) == null ? void 0 : K.toLowerCase().includes("colour"));
        }
      );
      return (V == null ? void 0 : V.values) || [];
    }), y = Z(() => c.value.price || 0), v = Z(() => c.value.compare_at_price || 0), T = Z(() => c.value.available && v.value > y.value), C = Z(() => T.value ? Math.round((v.value - y.value) / v.value * 100) : 0), b = Z(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: a.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), g = Z(() => {
      var V, O, P;
      return ((P = (O = (V = window.Shopline) == null ? void 0 : V.theme) == null ? void 0 : O.settings) == null ? void 0 : P.show_product_card_wishlist) !== !1;
    }), k = (V) => `$${(V / 100).toFixed(2)}`, _ = (V) => {
      const O = {
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
      }, P = V.toLowerCase();
      return O[P] || `#${P.replace("#", "")}`;
    }, A = () => {
      var V;
      ((V = c.value.images) == null ? void 0 : V.length) > 1 && (r.value = !0);
    }, M = () => {
      r.value = !1;
    }, D = (V) => {
      o.value = V.value;
    }, m = () => {
      l.value = !l.value;
    }, x = async () => {
      var V, O, P, z;
      i.value = !0;
      try {
        const K = (O = (V = c.value.variants) == null ? void 0 : V[0]) == null ? void 0 : O.id;
        if (!K)
          throw console.error("No variant ID found for product:", c.value), new Error("No variant ID found");
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
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((z = (P = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : P.settings) == null ? void 0 : z.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: K, quantity: 1 });
      } catch (K) {
        console.error("Error adding to cart:", K);
      } finally {
        i.value = !1;
      }
    };
    return (V, O) => (w(), N("div", {
      class: "product-card group relative bg-white transition-all duration-300 overflow-hidden",
      style: Ge(b.value),
      onMouseenter: O[2] || (O[2] = (P) => a.value = !0),
      onMouseleave: O[3] || (O[3] = (P) => a.value = !1)
    }, [
      f("a", {
        href: d.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        u.value ? (w(), N("img", {
          key: 0,
          src: u.value,
          alt: c.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: A,
          onMouseleave: M
        }, null, 40, Jb)) : (w(), N("div", Xb, O[4] || (O[4] = [
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
        T.value ? (w(), N("div", Qb, " -" + j(C.value) + "% ", 1)) : L("", !0),
        c.value.available && g.value ? (w(), N("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: zt(m, ["prevent"])
        }, [
          (w(), N("svg", {
            class: ke(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, O[5] || (O[5] = [
            f("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : L("", !0),
        c.value.available ? L("", !0) : (w(), N("div", Zb, O[6] || (O[6] = [
          f("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Yb),
      f("div", e_, [
        p.value ? (w(), N("div", t_, [
          f("div", n_, [
            (w(!0), N(ie, null, be(h.value, (P) => (w(), N("button", {
              key: P.value,
              onClick: (z) => D(P),
              title: P.value,
              class: ke([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === P.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: Ge({ backgroundColor: _(P.value) })
            }, [
              o.value === P.value ? (w(), N("span", o_, O[7] || (O[7] = [
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
            ], 14, s_))), 128))
          ])
        ])) : L("", !0),
        c.value.vendor ? (w(), N("p", r_, j(c.value.vendor), 1)) : L("", !0),
        f("h3", i_, [
          f("a", {
            href: d.value,
            class: "hover:text-gray-700 transition-colors"
          }, j(c.value.title || "Untitled"), 9, l_)
        ]),
        f("div", a_, [
          f("div", c_, [
            (w(), N(ie, null, be(5, (P) => f("svg", {
              key: P,
              class: ke(["w-4 h-4", P <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, O[8] || (O[8] = [
              f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          O[9] || (O[9] = f("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        f("div", u_, [
          f("span", d_, j(k(y.value)), 1),
          v.value > y.value ? (w(), N("span", f_, j(k(v.value)), 1)) : L("", !0)
        ]),
        c.value.available ? (w(), N("button", {
          key: 2,
          onClick: x,
          disabled: i.value,
          class: "w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          style: {
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
            borderRadius: "var(--button-radius)"
          },
          onMouseenter: O[0] || (O[0] = (P) => P.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
          onMouseleave: O[1] || (O[1] = (P) => P.target.style.backgroundColor = "var(--button-primary-bg)")
        }, [
          i.value ? L("", !0) : (w(), N("svg", h_, O[10] || (O[10] = [
            f("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          i.value ? (w(), N("svg", g_, O[11] || (O[11] = [
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
          ]))) : (w(), N("span", m_, "Add to Cart"))
        ], 40, p_)) : L("", !0)
      ])
    ], 36));
  }
}, y_ = { class: "collection-filters" }, b_ = { class: "lg:hidden mb-4" }, __ = { class: "space-y-6" }, E_ = {
  key: 0,
  class: "filter-group"
}, w_ = { class: "filter-group" }, x_ = { class: "space-y-2" }, N_ = { class: "flex items-center" }, S_ = { class: "flex items-center" }, k_ = { class: "flex items-center" }, C_ = { class: "flex items-center" }, O_ = {
  key: 1,
  class: "filter-group"
}, $_ = { class: "space-y-2" }, T_ = ["value"], D_ = { class: "ml-2 text-sm" }, V_ = {
  key: 2,
  class: "filter-group"
}, A_ = { class: "space-y-2" }, I_ = ["value"], M_ = { class: "ml-2 text-sm" }, P_ = { class: "filter-group" }, R_ = { class: "flex items-center" }, L_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, F_ = { class: "h-full flex flex-col" }, B_ = { class: "flex items-center justify-between p-4 border-b" }, j_ = { class: "flex-1 overflow-y-auto p-4" }, H_ = { class: "space-y-6" }, U_ = {
  key: 0,
  class: "filter-group"
}, q_ = { class: "filter-group" }, z_ = { class: "space-y-2" }, K_ = { class: "flex items-center" }, W_ = { class: "flex items-center" }, G_ = { class: "flex items-center" }, Y_ = { class: "flex items-center" }, J_ = {
  key: 1,
  class: "filter-group"
}, X_ = { class: "space-y-2" }, Q_ = ["value"], Z_ = { class: "ml-2 text-sm" }, e2 = {
  key: 2,
  class: "filter-group"
}, t2 = { class: "space-y-2" }, n2 = ["value"], s2 = { class: "ml-2 text-sm" }, o2 = { class: "filter-group" }, r2 = { class: "flex items-center" }, i2 = {
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
    const n = e, s = t, o = new URLSearchParams(window.location.search), r = o.get("sort_by") || "manual", l = (() => {
      const D = o.get("filter.price"), m = o.get("filter.type"), x = o.get("filter.vendor"), V = o.get("filter.availability");
      return {
        priceRanges: D ? D.split(",") : [],
        types: m ? m.split(",") : [],
        vendors: x ? x.split(",") : [],
        inStockOnly: V === "in_stock"
      };
    })(), a = q(r), c = q(l.priceRanges), d = q(l.types), u = q(l.vendors), p = q(l.inStockOnly), h = q(!1), y = Z(() => {
      var m, x;
      const D = ((x = (m = window.Shopline) == null ? void 0 : m.theme) == null ? void 0 : x.settings) || {};
      return {
        "--card-radius": D.card_border_radius ? `${D.card_border_radius}px` : "8px"
      };
    }), v = Z(() => {
      const D = /* @__PURE__ */ new Set();
      return n.products.forEach((m) => {
        m.product_type && D.add(m.product_type);
      }), Array.from(D).sort();
    }), T = Z(() => {
      const D = /* @__PURE__ */ new Set();
      return n.products.forEach((m) => {
        m.vendor && D.add(m.vendor);
      }), Array.from(D).sort();
    }), C = Z(() => c.value.length > 0 || d.value.length > 0 || u.value.length > 0 || p.value), b = () => {
      const D = new URL(window.location.href);
      a.value === "manual" ? D.searchParams.delete("sort_by") : D.searchParams.set("sort_by", a.value), window.location.href = D.toString();
    }, g = () => {
      h.value || k(), M();
    }, k = () => {
      s("apply-filters", {
        priceRanges: c.value,
        types: d.value,
        vendors: u.value,
        inStockOnly: p.value
      });
      const D = document.createElement("div");
      D.className = "fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded z-50", D.innerHTML = `
    <p class="font-medium">Note: Product filtering requires Shopline's facets API</p>
    <p class="text-sm mt-1">The filters have been applied to the URL, but product filtering needs server-side implementation.</p>
  `, document.body.appendChild(D), setTimeout(() => {
        D.remove();
      }, 5e3);
      const m = new URL(window.location.href);
      Array.from(m.searchParams.keys()).forEach((x) => {
        x.startsWith("filter.") && m.searchParams.delete(x);
      }), c.value.length > 0 && m.searchParams.set("filter.price", c.value.join(",")), d.value.length > 0 && m.searchParams.set("filter.type", d.value.join(",")), u.value.length > 0 && m.searchParams.set("filter.vendor", u.value.join(",")), p.value && m.searchParams.set("filter.availability", "in_stock"), window.history.pushState({}, "", m.toString());
    }, _ = () => {
      c.value = [], d.value = [], u.value = [], p.value = !1;
      const D = new URL(window.location.href);
      Array.from(D.searchParams.keys()).forEach((m) => {
        m.startsWith("filter.") && D.searchParams.delete(m);
      }), window.history.pushState({}, "", D.toString()), s("apply-filters", {
        priceRanges: [],
        types: [],
        vendors: [],
        inStockOnly: !1
      }), M();
    }, A = () => {
      h.value = !1, k();
    }, M = () => {
      s("update-filters", {
        sort: a.value,
        priceRanges: c.value,
        types: d.value,
        vendors: u.value,
        inStockOnly: p.value
      });
    };
    return (D, m) => (w(), N("div", y_, [
      f("div", b_, [
        f("button", {
          onClick: m[0] || (m[0] = (x) => h.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        }, m[20] || (m[20] = [
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
        style: Ge(y.value)
      }, [
        f("div", __, [
          e.showSort ? (w(), N("div", E_, [
            m[22] || (m[22] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
            $e(f("select", {
              "onUpdate:modelValue": m[1] || (m[1] = (x) => a.value = x),
              onChange: b,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, m[21] || (m[21] = [
              ls('<option value="manual" data-v-fa69a7b5>Featured</option><option value="best-selling" data-v-fa69a7b5>Best Selling</option><option value="title-ascending" data-v-fa69a7b5>Alphabetically, A-Z</option><option value="title-descending" data-v-fa69a7b5>Alphabetically, Z-A</option><option value="price-ascending" data-v-fa69a7b5>Price, low to high</option><option value="price-descending" data-v-fa69a7b5>Price, high to low</option><option value="created-ascending" data-v-fa69a7b5>Date, old to new</option><option value="created-descending" data-v-fa69a7b5>Date, new to old</option>', 8)
            ]), 544), [
              [Ds, a.value]
            ])
          ])) : L("", !0),
          f("div", w_, [
            m[27] || (m[27] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
            f("div", x_, [
              f("label", N_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": m[2] || (m[2] = (x) => c.value = x),
                  onChange: g,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, c.value]
                ]),
                m[23] || (m[23] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              f("label", S_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": m[3] || (m[3] = (x) => c.value = x),
                  onChange: g,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, c.value]
                ]),
                m[24] || (m[24] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              f("label", k_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": m[4] || (m[4] = (x) => c.value = x),
                  onChange: g,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, c.value]
                ]),
                m[25] || (m[25] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              f("label", C_, [
                $e(f("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": m[5] || (m[5] = (x) => c.value = x),
                  onChange: g,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, c.value]
                ]),
                m[26] || (m[26] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          v.value.length > 0 ? (w(), N("div", O_, [
            m[28] || (m[28] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
            f("div", $_, [
              (w(!0), N(ie, null, be(v.value, (x) => (w(), N("label", {
                key: x,
                class: "flex items-center"
              }, [
                $e(f("input", {
                  type: "checkbox",
                  value: x,
                  "onUpdate:modelValue": m[6] || (m[6] = (V) => d.value = V),
                  onChange: g,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, T_), [
                  [Le, d.value]
                ]),
                f("span", D_, j(x), 1)
              ]))), 128))
            ])
          ])) : L("", !0),
          T.value.length > 0 ? (w(), N("div", V_, [
            m[29] || (m[29] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
            f("div", A_, [
              (w(!0), N(ie, null, be(T.value, (x) => (w(), N("label", {
                key: x,
                class: "flex items-center"
              }, [
                $e(f("input", {
                  type: "checkbox",
                  value: x,
                  "onUpdate:modelValue": m[7] || (m[7] = (V) => u.value = V),
                  onChange: g,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, I_), [
                  [Le, u.value]
                ]),
                f("span", M_, j(x), 1)
              ]))), 128))
            ])
          ])) : L("", !0),
          f("div", P_, [
            m[31] || (m[31] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
            f("label", R_, [
              $e(f("input", {
                type: "checkbox",
                "onUpdate:modelValue": m[8] || (m[8] = (x) => p.value = x),
                onChange: g,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Le, p.value]
              ]),
              m[30] || (m[30] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          C.value ? (w(), N("button", {
            key: 3,
            onClick: _,
            class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
          }, " Clear all filters ")) : L("", !0)
        ])
      ], 4),
      (w(), ct(bn, { to: "body" }, [
        h.value ? (w(), N("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: m[19] || (m[19] = zt((x) => h.value = !1, ["self"]))
        }, [
          f("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: m[9] || (m[9] = (x) => h.value = !1)
          }),
          f("div", L_, [
            f("div", F_, [
              f("div", B_, [
                m[33] || (m[33] = f("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                f("button", {
                  onClick: m[10] || (m[10] = (x) => h.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, m[32] || (m[32] = [
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
              f("div", j_, [
                f("div", H_, [
                  e.showSort ? (w(), N("div", U_, [
                    m[35] || (m[35] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
                    $e(f("select", {
                      "onUpdate:modelValue": m[11] || (m[11] = (x) => a.value = x),
                      onChange: b,
                      class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    }, m[34] || (m[34] = [
                      f("option", { value: "manual" }, "Featured", -1),
                      f("option", { value: "best-selling" }, "Best Selling", -1),
                      f("option", { value: "title-ascending" }, "Alphabetically, A-Z", -1),
                      f("option", { value: "title-descending" }, "Alphabetically, Z-A", -1),
                      f("option", { value: "price-ascending" }, "Price, low to high", -1),
                      f("option", { value: "price-descending" }, "Price, high to low", -1),
                      f("option", { value: "created-ascending" }, "Date, old to new", -1),
                      f("option", { value: "created-descending" }, "Date, new to old", -1)
                    ]), 544), [
                      [Ds, a.value]
                    ])
                  ])) : L("", !0),
                  f("div", q_, [
                    m[40] || (m[40] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
                    f("div", z_, [
                      f("label", K_, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": m[12] || (m[12] = (x) => c.value = x),
                          onChange: g,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, c.value]
                        ]),
                        m[36] || (m[36] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      f("label", W_, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": m[13] || (m[13] = (x) => c.value = x),
                          onChange: g,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, c.value]
                        ]),
                        m[37] || (m[37] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      f("label", G_, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": m[14] || (m[14] = (x) => c.value = x),
                          onChange: g,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, c.value]
                        ]),
                        m[38] || (m[38] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      f("label", Y_, [
                        $e(f("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": m[15] || (m[15] = (x) => c.value = x),
                          onChange: g,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, c.value]
                        ]),
                        m[39] || (m[39] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  v.value.length > 0 ? (w(), N("div", J_, [
                    m[41] || (m[41] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
                    f("div", X_, [
                      (w(!0), N(ie, null, be(v.value, (x) => (w(), N("label", {
                        key: x,
                        class: "flex items-center"
                      }, [
                        $e(f("input", {
                          type: "checkbox",
                          value: x,
                          "onUpdate:modelValue": m[16] || (m[16] = (V) => d.value = V),
                          onChange: g,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, Q_), [
                          [Le, d.value]
                        ]),
                        f("span", Z_, j(x), 1)
                      ]))), 128))
                    ])
                  ])) : L("", !0),
                  T.value.length > 0 ? (w(), N("div", e2, [
                    m[42] || (m[42] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
                    f("div", t2, [
                      (w(!0), N(ie, null, be(T.value, (x) => (w(), N("label", {
                        key: x,
                        class: "flex items-center"
                      }, [
                        $e(f("input", {
                          type: "checkbox",
                          value: x,
                          "onUpdate:modelValue": m[17] || (m[17] = (V) => u.value = V),
                          onChange: g,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, n2), [
                          [Le, u.value]
                        ]),
                        f("span", s2, j(x), 1)
                      ]))), 128))
                    ])
                  ])) : L("", !0),
                  f("div", o2, [
                    m[44] || (m[44] = f("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
                    f("label", r2, [
                      $e(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": m[18] || (m[18] = (x) => p.value = x),
                        onChange: g,
                        class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      }, null, 544), [
                        [Le, p.value]
                      ]),
                      m[43] || (m[43] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  C.value ? (w(), N("button", {
                    key: 3,
                    onClick: _,
                    class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
                  }, " Clear all filters ")) : L("", !0)
                ])
              ]),
              f("div", { class: "p-4 border-t" }, [
                f("button", {
                  onClick: A,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : L("", !0)
      ]))
    ]));
  }
}, Lf = /* @__PURE__ */ Ye(i2, [["__scopeId", "data-v-fa69a7b5"]]), l2 = { class: "collection-grid" }, a2 = {
  key: 0,
  class: "mb-8"
}, c2 = { class: "text-3xl font-bold text-secondary-900 mb-4" }, u2 = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, d2 = { class: "mt-4 flex items-center justify-between" }, f2 = { class: "text-sm text-secondary-600" }, p2 = {
  key: 0,
  class: "lg:hidden"
}, h2 = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, m2 = {
  key: 0,
  class: "lg:col-span-1"
}, g2 = ["products"], v2 = {
  key: 1,
  class: "text-center py-12"
}, y2 = ["product"], b2 = {
  key: 3,
  class: "mt-8"
}, _2 = {
  key: 0,
  class: "inline-flex items-center"
}, E2 = {
  key: 1,
  class: "text-center"
}, w2 = ["disabled"], x2 = { key: 0 }, N2 = { key: 1 }, S2 = {
  key: 2,
  class: "flex items-center justify-between"
}, k2 = { class: "flex-1 flex justify-between sm:hidden" }, C2 = ["disabled"], O2 = ["disabled"], $2 = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, T2 = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, D2 = ["disabled"], V2 = ["onClick"], A2 = ["disabled"], I2 = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, M2 = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, P2 = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, R2 = { class: "text-lg font-medium text-secondary-900" }, L2 = {
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
      const m = Number(t.columnsMobile), x = t.columnsDesktop, V = m === 1 ? "grid-cols-1" : "grid-cols-2", O = x <= 3 ? `md:grid-cols-${x}` : "md:grid-cols-3", P = `lg:grid-cols-${x}`;
      return `grid ${V} ${O} ${P} gap-4 lg:gap-6`;
    }), u = Z(() => {
      var V, O, P;
      let m = [...t.products];
      switch (l.value.inStockOnly && (m = m.filter((z) => z.available)), ((V = l.value.priceRanges) == null ? void 0 : V.length) > 0 && (m = m.filter((z) => {
        const K = z.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? K < 50 : ee === "50-100" ? K >= 50 && K < 100 : ee === "100-200" ? K >= 100 && K < 200 : ee === "200+" ? K >= 200 : !1);
      })), ((O = l.value.types) == null ? void 0 : O.length) > 0 && (m = m.filter((z) => l.value.types.includes(z.product_type))), ((P = l.value.vendors) == null ? void 0 : P.length) > 0 && (m = m.filter((z) => l.value.vendors.includes(z.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          m.sort((z, K) => z.price - K.price);
          break;
        case "price-descending":
          m.sort((z, K) => K.price - z.price);
          break;
        case "title-ascending":
          m.sort((z, K) => z.title.localeCompare(K.title));
          break;
        case "title-descending":
          m.sort((z, K) => K.title.localeCompare(z.title));
          break;
        case "created-ascending":
          m.sort((z, K) => new Date(z.created_at) - new Date(K.created_at));
          break;
        case "created-descending":
          m.sort((z, K) => new Date(K.created_at) - new Date(z.created_at));
          break;
      }
      return m;
    }), p = Z(() => {
      if (t.enableInfiniteScroll)
        return u.value.slice(0, r.value);
      const m = (o.value - 1) * t.productsPerPage, x = m + t.productsPerPage;
      return u.value.slice(m, x);
    }), h = Z(() => t.totalPages || Math.ceil(u.value.length / t.productsPerPage)), y = Z(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : r.value < u.value.length), v = Z(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, u.value.length - r.value)), T = Z(() => {
      const m = [], x = h.value, V = o.value;
      if (x <= 7)
        for (let O = 1; O <= x; O++)
          m.push(O);
      else if (V <= 3) {
        for (let O = 1; O <= 5; O++)
          m.push(O);
        m.push("..."), m.push(x);
      } else if (V >= x - 2) {
        m.push(1), m.push("...");
        for (let O = x - 4; O <= x; O++)
          m.push(O);
      } else {
        m.push(1), m.push("...");
        for (let O = V - 1; O <= V + 1; O++)
          m.push(O);
        m.push("..."), m.push(x);
      }
      return m.filter((O) => O === "..." || O >= 1 && O <= x);
    }), C = (m) => {
      l.value = m, o.value = 1, r.value = t.productsPerPage;
    }, b = () => {
      o.value = 1, r.value = t.productsPerPage;
    }, g = () => {
      s.value = !0, setTimeout(() => {
        r.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, k = async (m) => {
      var V;
      const x = new FormData();
      x.append("id", m.variants[0].id), x.append("quantity", "1"), await ((V = window.OrionCart) == null ? void 0 : V.addItem(x)), console.log("Added to cart:", m.title);
    }, _ = (m) => {
      a.value = m;
    }, A = () => {
      a.value = null;
    };
    let M = null;
    const D = () => {
      !t.enableInfiniteScroll || !c.value || (M = new IntersectionObserver(
        (m) => {
          m[0].isIntersecting && y.value && !s.value && g();
        },
        { threshold: 0.1 }
      ), M.observe(c.value));
    };
    return He(() => {
      D();
    }), Ct(() => {
      M && M.disconnect();
    }), sn(() => t.enableInfiniteScroll, () => {
      D();
    }), (m, x) => (w(), N("div", l2, [
      e.showHeader ? (w(), N("div", a2, [
        f("h1", c2, j(e.collectionTitle), 1),
        e.collectionDescription ? (w(), N("div", u2, j(e.collectionDescription), 1)) : L("", !0),
        f("div", d2, [
          f("p", f2, j(e.totalProducts || u.value.length) + " products ", 1),
          e.enableSorting ? (w(), N("div", p2, [
            $e(f("select", {
              "onUpdate:modelValue": x[0] || (x[0] = (V) => i.value = V),
              onChange: b,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, x[5] || (x[5] = [
              ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Ds, i.value]
            ])
          ])) : L("", !0)
        ])
      ])) : L("", !0),
      f("div", h2, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (w(), N("aside", m2, [
          f("collection-filters", {
            products: e.products,
            onUpdateFilters: C
          }, null, 40, g2)
        ])) : L("", !0),
        f("div", {
          class: ke(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (w(), N("div", {
            key: 0,
            class: ke(d.value)
          }, [
            (w(), N(ie, null, be(6, (V) => f("div", {
              key: V,
              class: "animate-pulse"
            }, x[6] || (x[6] = [
              f("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              f("div", { class: "mt-4 space-y-2" }, [
                f("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                f("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : u.value.length === 0 ? (w(), N("div", v2, x[7] || (x[7] = [
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
            (w(!0), N(ie, null, be(p.value, (V) => (w(), N("product-card", {
              key: V.id,
              product: V,
              onQuickAdd: k,
              onQuickView: _
            }, null, 40, y2))), 128))
          ], 2)),
          !n.value && u.value.length > 0 ? (w(), N("div", b2, [
            e.enableInfiniteScroll ? (w(), N("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (w(), N("div", _2, x[8] || (x[8] = [
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
              ]))) : L("", !0)
            ], 512)) : y.value ? (w(), N("div", E2, [
              f("button", {
                onClick: g,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (w(), N("span", x2, "Loading...")) : (w(), N("span", N2, "Load More (" + j(v.value) + " remaining)", 1))
              ], 8, w2)
            ])) : L("", !0),
            !e.enableInfiniteScroll && h.value > 1 ? (w(), N("nav", S2, [
              f("div", k2, [
                f("button", {
                  onClick: x[1] || (x[1] = (V) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, C2),
                f("button", {
                  onClick: x[2] || (x[2] = (V) => o.value++),
                  disabled: o.value === h.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, O2)
              ]),
              f("div", $2, [
                f("div", null, [
                  f("nav", T2, [
                    f("button", {
                      onClick: x[3] || (x[3] = (V) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, x[9] || (x[9] = [
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
                    ]), 8, D2),
                    (w(!0), N(ie, null, be(T.value, (V) => (w(), N("button", {
                      key: V,
                      onClick: (O) => o.value = V,
                      class: ke([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === V ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, j(V), 11, V2))), 128)),
                    f("button", {
                      onClick: x[4] || (x[4] = (V) => o.value++),
                      disabled: o.value === h.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, x[10] || (x[10] = [
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
                    ]), 8, A2)
                  ])
                ])
              ])
            ])) : L("", !0)
          ])) : L("", !0)
        ], 2)
      ]),
      (w(), ct(bn, { to: "body" }, [
        a.value ? (w(), N("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: zt(A, ["self"])
        }, [
          f("div", I2, [
            f("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: A
            }),
            f("div", M2, [
              f("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                f("button", {
                  onClick: A,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, x[11] || (x[11] = [
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
              f("div", P2, [
                f("h3", R2, j(a.value.title), 1),
                x[12] || (x[12] = f("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : L("", !0)
      ]))
    ]));
  }
}, F2 = { class: "collection-sort-wrapper" }, B2 = {
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
    return He(() => {
      const l = s().get("sort_by");
      l && (n.value = l);
    }), (i, l) => (w(), N("div", F2, [
      $e(f("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
        onChange: r,
        class: "px-4 py-2 min-w-[200px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        style: { borderRadius: "var(--button-radius)" }
      }, l[1] || (l[1] = [
        ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option><option value="created-ascending">Date: Old to New</option><option value="created-descending">Date: New to Old</option>', 8)
      ]), 544), [
        [Ds, n.value]
      ])
    ]));
  }
}, j2 = {
  key: 0,
  class: "ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white",
  style: { borderRadius: "9999px" }
}, H2 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, U2 = { class: "absolute inset-0 overflow-hidden" }, q2 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, z2 = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, K2 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, W2 = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, G2 = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, Y2 = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, J2 = { class: "mb-6" }, X2 = { class: "flex items-center cursor-pointer" }, Q2 = { class: "mb-6" }, Z2 = { class: "space-y-2" }, eE = ["value"], tE = { class: "ml-2 text-sm" }, nE = {
  key: 0,
  class: "mb-6"
}, sE = { class: "space-y-2" }, oE = ["value"], rE = { class: "ml-2 text-sm" }, iE = {
  key: 1,
  class: "mb-6"
}, lE = { class: "space-y-2" }, aE = ["value"], cE = { class: "ml-2 text-sm" }, uE = {
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
      return t.products.forEach((h) => {
        h.product_type && p.add(h.product_type);
      }), Array.from(p).sort();
    }), i = Z(() => {
      const p = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.vendor && p.add(h.vendor);
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
      p.delete("filter.v.availability"), p.delete("filter.v.price"), p.delete("filter.p.product_type"), p.delete("filter.p.vendor"), s.value.inStock && p.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((y) => {
        p.append("filter.price.range", y);
      }), s.value.types.length > 0 && s.value.types.forEach((y) => {
        p.append("filter.p.product_type", y);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((y) => {
        p.append("filter.p.vendor", y);
      });
      const h = `${window.location.pathname}${p.toString() ? "?" + p.toString() : ""}`;
      window.location.href = h;
    }, u = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const p = new URLSearchParams(window.location.search), h = [];
      for (const [T] of p)
        T.startsWith("filter.") && h.push(T);
      h.forEach((T) => p.delete(T));
      const y = p.get("sort_by"), v = `${window.location.pathname}${y ? "?sort_by=" + y : ""}`;
      window.location.href = v;
    };
    return He(() => {
      const p = new URLSearchParams(window.location.search);
      p.get("filter.v.availability") === "1" && (s.value.inStock = !0);
      const h = p.getAll("filter.p.product_type");
      h.length > 0 && (s.value.types = h);
      const y = p.getAll("filter.p.vendor");
      y.length > 0 && (s.value.vendors = y);
      const v = p.getAll("filter.price.range");
      v.length > 0 && (s.value.priceRanges = v);
    }), He(() => () => {
      document.body.style.overflow = "";
    }), (p, h) => (w(), N("div", null, [
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
        l.value > 0 ? (w(), N("span", j2, j(l.value), 1)) : L("", !0)
      ]),
      (w(), ct(bn, { to: "body" }, [
        ue(ot, { name: "drawer" }, {
          default: Pe(() => [
            n.value ? (w(), N("div", H2, [
              f("div", U2, [
                ue(ot, { name: "fade" }, {
                  default: Pe(() => [
                    n.value ? (w(), N("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : L("", !0)
                  ]),
                  _: 1
                }),
                f("div", q2, [
                  ue(ot, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      n.value ? (w(), N("div", z2, [
                        f("div", K2, [
                          f("div", W2, [
                            f("div", null, [
                              h[6] || (h[6] = f("h2", { class: "text-lg font-medium text-gray-900" }, "Filters", -1)),
                              l.value > 0 ? (w(), N("p", G2, j(l.value) + " " + j(l.value === 1 ? "filter" : "filters") + " active ", 1)) : L("", !0)
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
                          f("div", Y2, [
                            f("div", J2, [
                              h[9] || (h[9] = f("h3", { class: "font-medium mb-3" }, "Availability", -1)),
                              f("label", X2, [
                                $e(f("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": h[0] || (h[0] = (y) => s.value.inStock = y),
                                  class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                }, null, 512), [
                                  [Le, s.value.inStock]
                                ]),
                                h[8] || (h[8] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            f("div", Q2, [
                              h[10] || (h[10] = f("h3", { class: "font-medium mb-3" }, "Price", -1)),
                              f("div", Z2, [
                                (w(), N(ie, null, be(o, (y) => f("label", {
                                  key: y.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: y.value,
                                    "onUpdate:modelValue": h[1] || (h[1] = (v) => s.value.priceRanges = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, eE), [
                                    [Le, s.value.priceRanges]
                                  ]),
                                  f("span", tE, j(y.label), 1)
                                ])), 64))
                              ])
                            ]),
                            r.value.length > 0 ? (w(), N("div", nE, [
                              h[11] || (h[11] = f("h3", { class: "font-medium mb-3" }, "Product Type", -1)),
                              f("div", sE, [
                                (w(!0), N(ie, null, be(r.value, (y) => (w(), N("label", {
                                  key: y,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: y,
                                    "onUpdate:modelValue": h[2] || (h[2] = (v) => s.value.types = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, oE), [
                                    [Le, s.value.types]
                                  ]),
                                  f("span", rE, j(y), 1)
                                ]))), 128))
                              ])
                            ])) : L("", !0),
                            i.value.length > 0 ? (w(), N("div", iE, [
                              h[12] || (h[12] = f("h3", { class: "font-medium mb-3" }, "Brand", -1)),
                              f("div", lE, [
                                (w(!0), N(ie, null, be(i.value, (y) => (w(), N("label", {
                                  key: y,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(f("input", {
                                    type: "checkbox",
                                    value: y,
                                    "onUpdate:modelValue": h[3] || (h[3] = (v) => s.value.vendors = v),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, aE), [
                                    [Le, s.value.vendors]
                                  ]),
                                  f("span", cE, j(y), 1)
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
                              onClick: u,
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
}, dE = /* @__PURE__ */ Ye(uE, [["__scopeId", "data-v-5d8cdc55"]]), fE = { class: "product-gallery" }, pE = { class: "main-image-wrapper" }, hE = ["src", "alt"], mE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, gE = {
  key: 0,
  class: "thumbnails-wrapper"
}, vE = ["disabled"], yE = ["onClick", "aria-label"], bE = ["src", "alt"], _E = ["disabled"], EE = {
  key: 1,
  class: "swiper-dots"
}, wE = ["onClick", "aria-label"], xE = ["src", "alt"], NE = { class: "lightbox-counter" }, SE = 80, qo = 4, $c = 2, kE = {
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
      const D = M.url || M;
      return {
        src: `${D}?width=${t.imageTransformWidth}`,
        thumbnail: `${D}?width=${t.thumbnailWidth}`,
        alt: M.alt || t.productTitle
      };
    })), h = Z(() => p.value[n.value] || { src: "", alt: "" }), y = Z(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${d.value - 150 / 2}px`
    })), v = Z(() => {
      const D = c.value / u.value.width * 100, m = d.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${h.value.src})`,
        backgroundSize: `${u.value.width * $c}px ${u.value.height * $c}px`,
        backgroundPosition: `${D}% ${m}%`
      };
    }), T = (M) => {
      s.value = !0, n.value = M;
    }, C = (M) => {
      M === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - qo,
        l.value + 1
      );
    }, b = (M) => {
      n.value = M, o.value = !0, document.body.style.overflow = "hidden";
    }, g = () => {
      o.value = !1, document.body.style.overflow = "";
    }, k = (M) => {
      M === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, _ = (M) => {
      const D = M.currentTarget.getBoundingClientRect();
      u.value = D, c.value = M.clientX - D.left, d.value = M.clientY - D.top;
    }, { lengthX: A } = Q1(
      a,
      {
        onSwipeEnd() {
          A.value > 50 ? C("prev") : A.value < -50 && C("next");
        }
      }
    );
    return He(() => {
      i.value = window.innerWidth < 768;
      const M = () => {
        i.value = window.innerWidth < 768;
      }, D = (m) => {
        o.value && (m.key === "Escape" && g(), m.key === "ArrowLeft" && k("prev"), m.key === "ArrowRight" && k("next"));
      };
      window.addEventListener("resize", M), window.addEventListener("keydown", D), Ct(() => {
        window.removeEventListener("resize", M), window.removeEventListener("keydown", D);
      });
    }), (M, D) => (w(), N("div", fE, [
      f("div", pE, [
        f("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: D[1] || (D[1] = (m) => b(n.value)),
          onMouseenter: D[2] || (D[2] = (m) => r.value = !0),
          onMouseleave: D[3] || (D[3] = (m) => r.value = !1),
          onMousemove: _
        }, [
          f("img", {
            src: h.value.src,
            alt: h.value.alt,
            class: ke(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: D[0] || (D[0] = (m) => s.value = !1)
          }, null, 42, hE),
          s.value ? (w(), N("div", mE, D[9] || (D[9] = [
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
          r.value && !i.value ? (w(), N("div", {
            key: 1,
            class: "zoom-lens",
            style: Ge(y.value)
          }, null, 4)) : L("", !0)
        ], 32),
        r.value && !i.value ? (w(), N("div", {
          key: 0,
          class: "zoom-preview",
          style: Ge(v.value)
        }, null, 4)) : L("", !0)
      ]),
      p.value.length > 1 ? (w(), N("div", gE, [
        p.value.length > qo ? (w(), N("button", {
          key: 0,
          onClick: D[4] || (D[4] = (m) => C("prev")),
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
        ]), 8, vE)) : L("", !0),
        f("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          f("div", {
            class: "thumbnails-track",
            style: Ge({ transform: `translateX(-${l.value * (SE + 8)}px)` })
          }, [
            (w(!0), N(ie, null, be(p.value, (m, x) => (w(), N("button", {
              key: x,
              onClick: (V) => T(x),
              class: ke(["thumbnail", { active: x === n.value }]),
              "aria-label": `View image ${x + 1}`
            }, [
              f("img", {
                src: m.thumbnail || m.src,
                alt: m.alt,
                class: "w-full h-full object-contain"
              }, null, 8, bE)
            ], 10, yE))), 128))
          ], 4)
        ], 512),
        p.value.length > qo ? (w(), N("button", {
          key: 1,
          onClick: D[5] || (D[5] = (m) => C("next")),
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
        ]), 8, _E)) : L("", !0)
      ])) : L("", !0),
      p.value.length > 1 && i.value ? (w(), N("div", EE, [
        (w(!0), N(ie, null, be(p.value, (m, x) => (w(), N("button", {
          key: x,
          onClick: (V) => T(x),
          class: ke(["swiper-dot", { active: x === n.value }]),
          "aria-label": `Go to image ${x + 1}`
        }, null, 10, wE))), 128))
      ])) : L("", !0),
      (w(), ct(bn, { to: "body" }, [
        o.value ? (w(), N("div", {
          key: 0,
          class: "lightbox",
          onClick: g
        }, [
          f("button", {
            onClick: g,
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
          p.value.length > 1 ? (w(), N("button", {
            key: 0,
            onClick: D[6] || (D[6] = zt((m) => k("prev"), ["stop"])),
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
            onClick: D[7] || (D[7] = zt(() => {
            }, ["stop"]))
          }, [
            f("img", {
              src: h.value.src,
              alt: h.value.alt,
              class: "lightbox-image"
            }, null, 8, xE)
          ]),
          p.value.length > 1 ? (w(), N("button", {
            key: 1,
            onClick: D[8] || (D[8] = zt((m) => k("next"), ["stop"])),
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
          f("div", NE, j(n.value + 1) + " / " + j(p.value.length), 1)
        ])) : L("", !0)
      ]))
    ]));
  }
}, CE = /* @__PURE__ */ Ye(kE, [["__scopeId", "data-v-a7c1d2a3"]]), OE = { class: "product-info" }, $E = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, TE = {
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
}, zE = { class: "flex flex-col sm:flex-row gap-3" }, KE = ["disabled"], WE = {
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
    var T;
    const n = e, s = t, o = q(n.product.selected_or_first_available_variant || ((T = n.product.variants) == null ? void 0 : T[0]) || {}), r = q(1), i = q(!1), l = q(!1), a = Z(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = Z(() => {
      var C;
      return (C = n.product.options) == null ? void 0 : C.some(
        (b) => b.name.toLowerCase() === "size" || b.name.toLowerCase() === "taille"
      );
    }), d = (C) => `$${(C / 100).toFixed(2)}`, u = (C) => {
      o.value = C, s("variant-change", C);
      const b = new URL(window.location);
      b.searchParams.set("variant", C.id), window.history.replaceState({}, "", b);
    }, p = async () => {
      var b;
      i.value = !0;
      const C = new FormData();
      C.append("id", o.value.id), C.append("quantity", r.value);
      try {
        await ((b = window.OrionCart) == null ? void 0 : b.addItem(C));
        const g = event.target, k = g.textContent;
        g.textContent = "✓ Added to Cart", setTimeout(() => {
          g.textContent = k;
        }, 2e3);
      } catch (g) {
        console.error("Failed to add to cart:", g), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, h = async () => {
      await p(), window.location.href = "/checkout";
    }, y = (C) => {
      const b = window.location.href, g = n.product.title, k = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(b)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(b)}&text=${encodeURIComponent(g)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(b)}&description=${encodeURIComponent(g)}`
      };
      k[C] && window.open(k[C], "_blank", "width=600,height=400");
    }, v = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (C) {
        console.error("Failed to copy link:", C);
      }
    };
    return sn(() => n.product.selected_variant, (C) => {
      C && (o.value = C);
    }), (C, b) => (w(), N("div", OE, [
      f("h1", $E, j(e.product.title), 1),
      e.product.vendor ? (w(), N("p", TE, " by " + j(e.product.vendor), 1)) : L("", !0),
      f("div", DE, [
        f("div", VE, [
          f("span", AE, j(d(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (w(), N("span", IE, j(d(o.value.compare_at_price)), 1)) : L("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (w(), N("p", ME, " Save " + j(d(o.value.compare_at_price - o.value.price)) + " (" + j(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : L("", !0)
      ]),
      e.product.has_only_default_variant ? L("", !0) : (w(), N("div", PE, [
        f("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, RE)
      ])),
      f("form", {
        onSubmit: zt(p, ["prevent"]),
        class: "mb-8"
      }, [
        f("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, LE),
        f("div", FE, [
          b[4] || (b[4] = f("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          $e(f("quantity-selector", {
            "onUpdate:modelValue": b[0] || (b[0] = (g) => r.value = g),
            min: 1,
            max: a.value
          }, null, 8, BE), [
            [Fn, r.value]
          ])
        ]),
        f("div", jE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (w(), N("p", UE, " Only " + j(o.value.inventory_quantity) + " left in stock ", 1)) : (w(), N("p", qE, " ✓ In Stock ")) : (w(), N("p", HE, " Out of Stock "))
        ]),
        f("div", zE, [
          f("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || i.value
          }, [
            i.value ? (w(), N("span", WE, b[5] || (b[5] = [
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
            ]))) : o.value.available ? (w(), N("span", YE, " Add to Cart ")) : (w(), N("span", GE, " Sold Out "))
          ], 8, KE),
          e.showBuyNow ? (w(), ct(ss, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: h,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Pe(() => b[6] || (b[6] = [
              je(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : L("", !0)
        ])
      ], 32),
      e.product.description ? (w(), N("div", JE, [
        b[7] || (b[7] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        f("div", {
          innerHTML: e.product.description
        }, null, 8, XE)
      ])) : L("", !0),
      f("div", QE, [
        b[10] || (b[10] = ls('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (w(), N("details", ZE, [
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
          }, null, 8, ew)
        ])) : L("", !0),
        c.value ? (w(), N("details", tw, b[9] || (b[9] = [
          ls('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : L("", !0)
      ]),
      f("div", nw, [
        b[15] || (b[15] = f("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        f("div", sw, [
          f("button", {
            onClick: b[1] || (b[1] = (g) => y("facebook")),
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
            onClick: b[2] || (b[2] = (g) => y("twitter")),
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
            onClick: b[3] || (b[3] = (g) => y("pinterest")),
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
            onClick: v,
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
            l.value ? (w(), N("span", ow, " Link copied! ")) : L("", !0)
          ])
        ])
      ])
    ]));
  }
}, iw = /* @__PURE__ */ Ye(rw, [["__scopeId", "data-v-9e2c3b5c"]]), lw = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, aw = { class: "space-y-3 mb-4" }, cw = { class: "flex justify-between text-sm" }, uw = { class: "text-gray-600" }, dw = { class: "font-medium text-gray-900" }, fw = {
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
    const n = e, s = t, o = q(""), r = q(""), i = q(""), l = q(!1), a = q(!1), c = q(!1), d = Z(() => n.cart.item_count || 0), u = Z(() => n.cart.total_price || 0), p = Z(() => n.cart.original_total_price || n.cart.total_price || 0), h = Z(() => n.cart.total_discount || 0), y = Z(() => u.value >= 5e3 ? 0 : 500), v = Z(() => Math.round(u.value * 0.1)), T = (g) => `$${(g / 100).toFixed(2)}`, C = async () => {
      var g;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, r.value = "", i.value = "";
        try {
          const k = new FormData();
          k.append("discount_code", o.value);
          const _ = await fetch("/discount/apply", {
            method: "POST",
            body: k
          });
          if (_.ok)
            i.value = "Promo code applied successfully!", o.value = "", await ((g = window.OrionCart) == null ? void 0 : g.fetchCart());
          else {
            const A = await _.json();
            r.value = A.message || "Invalid promo code";
          }
        } catch (k) {
          console.error("Failed to apply promo code:", k), r.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, b = async () => {
      if (!(d.value === 0 || a.value)) {
        a.value = !0;
        try {
          s("checkout"), window.location.href = "/checkout";
        } catch (g) {
          console.error("Failed to proceed to checkout:", g), alert("Failed to proceed to checkout. Please try again.");
        } finally {
          a.value = !1;
        }
      }
    };
    return (g, k) => (w(), N("div", lw, [
      k[10] || (k[10] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      f("div", aw, [
        f("div", cw, [
          f("span", uw, "Subtotal (" + j(d.value) + " " + j(d.value === 1 ? "item" : "items") + ")", 1),
          f("span", dw, j(T(p.value)), 1)
        ]),
        h.value > 0 ? (w(), N("div", fw, [
          k[3] || (k[3] = f("span", { class: "flex items-center gap-1" }, [
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
          f("span", null, "-" + j(T(h.value)), 1)
        ])) : L("", !0),
        e.showShipping ? (w(), N("div", pw, [
          k[4] || (k[4] = f("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          f("span", hw, j(y.value === 0 ? "Free" : T(y.value)), 1)
        ])) : L("", !0),
        e.showTax ? (w(), N("div", mw, [
          k[5] || (k[5] = f("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          f("span", gw, j(T(v.value)), 1)
        ])) : L("", !0)
      ]),
      f("div", vw, [
        f("div", yw, [
          k[6] || (k[6] = f("span", { class: "text-lg font-semibold" }, "Total", -1)),
          f("div", bw, [
            f("span", _w, j(T(u.value)), 1),
            h.value > 0 ? (w(), N("p", Ew, " You saved " + j(T(h.value)) + "! ", 1)) : L("", !0)
          ])
        ])
      ]),
      f("div", ww, [
        f("details", xw, [
          k[7] || (k[7] = f("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
              onSubmit: zt(C, ["prevent"]),
              class: "flex gap-2"
            }, [
              $e(f("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (_) => o.value = _),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, Sw), [
                [Fn, o.value]
              ]),
              f("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !o.value.trim() || l.value
              }, j(l.value ? "Applying..." : "Apply"), 9, kw)
            ], 32),
            r.value ? (w(), N("p", Cw, j(r.value), 1)) : L("", !0),
            i.value ? (w(), N("p", Ow, j(i.value), 1)) : L("", !0)
          ])
        ])
      ]),
      f("button", {
        onClick: b,
        class: "w-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: Ge({
          backgroundColor: c.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: k[1] || (k[1] = (_) => c.value = !0),
        onMouseleave: k[2] || (k[2] = (_) => c.value = !1),
        disabled: d.value === 0 || a.value
      }, [
        a.value ? (w(), N("span", Tw, k[8] || (k[8] = [
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
        ]))) : (w(), N("span", Dw, k[9] || (k[9] = [
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
      k[11] || (k[11] = ls('<div class="mt-6 space-y-2" data-v-bd5cec1c><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-bd5cec1c></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-bd5cec1c></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-bd5cec1c></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-bd5cec1c></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-bd5cec1c><p class="text-xs text-gray-600 mb-2" data-v-bd5cec1c>We accept</p><div class="flex gap-2" data-v-bd5cec1c><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-bd5cec1c></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-bd5cec1c></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#EB001B" data-v-bd5cec1c></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-bd5cec1c></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-bd5cec1c></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-bd5cec1c></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-bd5cec1c></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#253B80" data-v-bd5cec1c></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-bd5cec1c></path></svg></div></div>', 2))
    ]));
  }
}, Aw = /* @__PURE__ */ Ye(Vw, [["__scopeId", "data-v-bd5cec1c"]]), Iw = { class: "slideshow-banner" }, Mw = {
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
      v && v.addEventListener("click", d), T && T.addEventListener("click", c), C.forEach((b, g) => {
        b.addEventListener("click", () => a(g));
      }), r.value && u();
    }, a = (v) => {
      var b, g, k, _;
      if (v === n.value || !s.value.length) return;
      (b = s.value[n.value]) == null || b.classList.remove("opacity-100"), (g = s.value[n.value]) == null || g.classList.add("opacity-0");
      const T = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      T == null || T.classList.remove("opacity-100"), T == null || T.classList.add("opacity-50"), n.value = v, (k = s.value[n.value]) == null || k.classList.remove("opacity-0"), (_ = s.value[n.value]) == null || _.classList.add("opacity-100");
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
    }, h = () => {
      r.value && p();
    }, y = () => {
      r.value && u();
    };
    return He(() => {
      setTimeout(l, 100);
      const v = document.querySelector(".slideshow-wrapper");
      v && (v.addEventListener("mouseenter", h), v.addEventListener("mouseleave", y));
    }), Ct(() => {
      p();
      const v = document.querySelector(".slideshow-wrapper");
      v && (v.removeEventListener("mouseenter", h), v.removeEventListener("mouseleave", y));
    }), (v, T) => (w(), N("div", Iw, [
      jn(v.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Pw = /* @__PURE__ */ Ye(Mw, [["__scopeId", "data-v-8690c751"]]), Rw = { class: "testimonials-carousel relative" }, Lw = {
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
      const _ = document.querySelector(".testimonials-prev"), A = document.querySelector(".testimonials-next"), M = document.querySelectorAll(".testimonial-indicator");
      _ && _.addEventListener("click", u), A && A.addEventListener("click", d), M.forEach((D, m) => {
        D.addEventListener("click", () => c(m));
      }), i.value && p();
    }, c = (_) => {
      if (_ === n.value || !s.value.length || !r.value) return;
      n.value = _;
      const M = -s.value[0].offsetWidth * n.value;
      r.value.style.transform = `translateX(${M}px)`, document.querySelectorAll(".testimonial-indicator").forEach((m, x) => {
        x === n.value ? (m.classList.remove("bg-gray-300"), m.classList.add("bg-red-600")) : (m.classList.remove("bg-red-600"), m.classList.add("bg-gray-300"));
      });
    }, d = () => {
      const _ = (n.value + 1) % s.value.length;
      c(_);
    }, u = () => {
      const _ = n.value === 0 ? s.value.length - 1 : n.value - 1;
      c(_);
    }, p = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        d();
      }, l.value);
    }, h = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, y = () => {
      i.value && h();
    }, v = () => {
      i.value && p();
    };
    let T = 0, C = 0;
    const b = (_) => {
      T = _.changedTouches[0].screenX;
    }, g = (_) => {
      C = _.changedTouches[0].screenX, k();
    }, k = () => {
      const A = T - C;
      Math.abs(A) > 50 && (A > 0 ? d() : u());
    };
    return He(() => {
      setTimeout(a, 100);
      const _ = document.querySelector(".testimonials-wrapper");
      _ && (_.addEventListener("mouseenter", y), _.addEventListener("mouseleave", v), _.addEventListener("touchstart", b), _.addEventListener("touchend", g));
    }), Ct(() => {
      h();
      const _ = document.querySelector(".testimonials-wrapper");
      _ && (_.removeEventListener("mouseenter", y), _.removeEventListener("mouseleave", v), _.removeEventListener("touchstart", b), _.removeEventListener("touchend", g));
    }), (_, A) => (w(), N("div", Rw, [
      jn(_.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Fw = /* @__PURE__ */ Ye(Lw, [["__scopeId", "data-v-276cc4e8"]]), Bw = { class: "video-player relative w-full h-full" }, jw = {
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
    const t = e, n = q(!1), s = q(""), o = q(""), r = Z(() => t.autoplay === !0 || t.autoplay === "true"), i = Z(() => t.muted === !0 || t.muted === "true"), l = Z(() => t.controls === !0 || t.controls === "true"), a = Z(() => `${s.value} video player`), c = Z(() => {
      if (!o.value || !s.value) return "";
      let h = "";
      const y = r.value ? "1" : "0", v = i.value ? "1" : "0", T = l.value ? "1" : "0";
      return s.value === "youtube" ? (h = `https://www.youtube.com/embed/${o.value}?`, h += `autoplay=${y}&mute=${v}&controls=${T}`, h += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (h = `https://player.vimeo.com/video/${o.value}?`, h += `autoplay=${y}&muted=${v}&controls=${T}`, h += "&title=0&byline=0&portrait=0&playsinline=1"), h;
    }), d = (h) => {
      if (!h) return { type: "", id: "" };
      const y = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const T of y) {
        const C = h.match(T);
        if (C)
          return { type: "youtube", id: C[1] };
      }
      const v = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const T of v) {
        const C = h.match(T);
        if (C)
          return { type: "vimeo", id: C[1] };
      }
      return { type: "", id: "" };
    }, u = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      r.value && o.value && s.value && (n.value = !0);
    };
    return He(() => {
      const h = d(t.videoUrl);
      s.value = h.type, o.value = h.id;
      const y = document.querySelector(".play-button");
      y && y.addEventListener("click", u), p();
    }), (h, y) => (w(), N("div", Bw, [
      n.value ? (w(), N("div", jw, [
        f("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, Hw)
      ])) : (w(), N("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        jn(h.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, qw = /* @__PURE__ */ Ye(Uw, [["__scopeId", "data-v-540fecb2"]]), zw = { class: "password-modal" }, Kw = {
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
    }), (c, d) => (w(), N("div", zw, [
      jn(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Ww = /* @__PURE__ */ Ye(Kw, [["__scopeId", "data-v-075988c6"]]), Gw = {
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
    const t = q(!1), n = q(""), s = q(null), o = q(!1), r = q({
      products: [],
      collections: []
    }), i = q(null), l = Z(() => {
      var C;
      return ((C = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : C.search) || "/search";
    }), a = Z(() => n.value.length > 0), c = Z(() => {
      var g, k;
      const C = [], b = ((k = (g = window.Shopline) == null ? void 0 : g.theme) == null ? void 0 : k.settings) || {};
      for (let _ = 1; _ <= 6; _++) {
        const A = b[`popular_search_${_}`];
        A && A.trim() && C.push(A.trim());
      }
      return C.length === 0 ? ["New Arrivals", "Best Sellers", "Sale", "Summer Collection"] : C;
    }), d = (C) => {
      var A, M;
      if (!C && C !== 0) return "$0.00";
      const b = ((A = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : A.money_format) || "${{amount}}", g = ((M = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : M.current) || "en", _ = new Intl.NumberFormat(g, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(C));
      return b.replace("{{amount}}", _);
    }, u = async () => {
      var C;
      t.value = !0, document.body.style.overflow = "hidden", await Fs(), (C = s.value) == null || C.focus();
    }, p = () => {
      t.value = !1, document.body.style.overflow = "", n.value = "", r.value = { products: [], collections: [] };
    }, h = () => {
      if (clearTimeout(i.value), n.value.length < 2) {
        r.value = { products: [], collections: [] }, o.value = !1;
        return;
      }
      o.value = !0, i.value = setTimeout(() => {
        y();
      }, 300);
    }, y = async () => {
      var C;
      try {
        const b = ((C = window.routes) == null ? void 0 : C.predictive_search_url) || "/search/suggest", g = await fetch(
          `${b}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (g.ok) {
          const k = await g.text(), M = new DOMParser().parseFromString(k, "text/html").querySelectorAll(".predictive-search__list-item"), D = Array.from(M).map((m) => {
            var z, K;
            const x = m.querySelector("a"), V = m.querySelector("img"), O = m.querySelector(".predictive-search__item-head"), P = m.querySelector(".price__item");
            return {
              url: (x == null ? void 0 : x.href) || "#",
              image: (V == null ? void 0 : V.src) || "",
              title: ((z = O == null ? void 0 : O.textContent) == null ? void 0 : z.trim()) || "",
              price: ((K = P == null ? void 0 : P.textContent) == null ? void 0 : K.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          r.value = {
            products: D,
            collections: []
            // Collections can be added if needed
          };
        }
      } catch (b) {
        console.error("Search error:", b), r.value = { products: [], collections: [] };
      } finally {
        o.value = !1;
      }
    }, v = () => {
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(n.value)}`);
    }, T = (C) => {
      C.key === "Escape" && t.value && p();
    };
    return He(() => {
      document.addEventListener("search-overlay:open", u), document.addEventListener("search-overlay:close", p), document.addEventListener("keydown", T);
    }), Ct(() => {
      document.removeEventListener("search-overlay:open", u), document.removeEventListener("search-overlay:close", p), document.removeEventListener("keydown", T);
    }), (C, b) => (w(), ct(bn, { to: "body" }, [
      ue(ot, { name: "search-overlay" }, {
        default: Pe(() => [
          t.value ? (w(), N("div", Gw, [
            ue(ot, { name: "fade" }, {
              default: Pe(() => [
                t.value ? (w(), N("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-all duration-300",
                  onClick: p
                })) : L("", !0)
              ]),
              _: 1
            }),
            ue(ot, {
              name: "slide-down",
              appear: ""
            }, {
              default: Pe(() => {
                var g, k;
                return [
                  t.value ? (w(), N("div", Yw, [
                    f("div", Jw, [
                      f("div", Xw, [
                        f("div", Qw, [
                          f("div", Zw, [
                            f("div", ex, [
                              f("div", tx, [
                                b[4] || (b[4] = f("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
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
                                  "onUpdate:modelValue": b[0] || (b[0] = (_) => n.value = _),
                                  type: "search",
                                  placeholder: "Search for products, collections...",
                                  class: "search-input w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200",
                                  style: { borderRadius: "var(--button-radius, 16px)" },
                                  onInput: h,
                                  onKeydown: [
                                    _r(p, ["escape"]),
                                    _r(v, ["enter"])
                                  ]
                                }, null, 544), [
                                  [Fn, n.value]
                                ]),
                                f("div", nx, [
                                  o.value ? (w(), N("div", sx, b[2] || (b[2] = [
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (w(), N("button", {
                                    key: 1,
                                    onClick: b[1] || (b[1] = (_) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, b[3] || (b[3] = [
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
                              }, b[5] || (b[5] = [
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
                            !n.value && !o.value ? (w(), N("div", ox, [
                              b[6] || (b[6] = f("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              f("div", rx, [
                                (w(!0), N(ie, null, be(c.value, (_) => (w(), N("button", {
                                  key: _,
                                  onClick: (A) => {
                                    n.value = _, v();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, j(_), 9, ix))), 128))
                              ])
                            ])) : L("", !0)
                          ]),
                          a.value ? (w(), N("div", lx, [
                            f("div", ax, [
                              o.value ? (w(), N("div", cx, [
                                f("div", ux, [
                                  b[8] || (b[8] = f("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  f("div", dx, [
                                    (w(), N(ie, null, be(4, (_) => f("div", {
                                      key: _,
                                      class: "flex items-start space-x-3"
                                    }, b[7] || (b[7] = [
                                      f("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      f("div", { class: "flex-1" }, [
                                        f("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        f("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : r.value.products && r.value.products.length > 0 ? (w(), N("div", fx, [
                                b[10] || (b[10] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                f("div", px, [
                                  (w(!0), N(ie, null, be(r.value.products, (_) => (w(), N("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: p
                                  }, [
                                    f("div", mx, [
                                      _.image ? (w(), N("img", {
                                        key: 0,
                                        src: _.image,
                                        alt: _.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, gx)) : (w(), N("div", vx, b[9] || (b[9] = [
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
                                      f("p", bx, j(_.title), 1),
                                      f("div", _x, [
                                        f("p", Ex, j(d(_.price)), 1),
                                        _.compareAtPrice && _.compareAtPrice > _.price ? (w(), N("p", wx, j(d(_.compareAtPrice)), 1)) : L("", !0)
                                      ])
                                    ])
                                  ], 8, hx))), 128))
                                ])
                              ])) : L("", !0),
                              r.value.collections && r.value.collections.length > 0 ? (w(), N("div", xx, [
                                b[12] || (b[12] = f("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                f("div", Nx, [
                                  (w(!0), N(ie, null, be(r.value.collections, (_) => (w(), N("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: p
                                  }, [
                                    f("span", kx, j(_.title), 1),
                                    b[11] || (b[11] = f("svg", {
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
                              ])) : L("", !0),
                              n.value && !o.value && (!r.value.products || r.value.products.length === 0) && (!r.value.collections || r.value.collections.length === 0) ? (w(), N("div", Cx, b[13] || (b[13] = [
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
                            n.value && (((g = r.value.products) == null ? void 0 : g.length) > 0 || ((k = r.value.collections) == null ? void 0 : k.length) > 0) ? (w(), N("div", Ox, [
                              f("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: p
                              }, [
                                je(' View all results for "' + j(n.value) + '" ', 1),
                                b[14] || (b[14] = f("svg", {
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
}, Dx = /* @__PURE__ */ Ye(Tx, [["__scopeId", "data-v-985e236a"]]), Vx = {
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
          const y = parseInt(p);
          u = new Date(y > 1e12 ? y : y * 1e3);
        } else if (typeof a == "string")
          u = new Date(a);
        else
          return "";
        if (isNaN(u.getTime()) || u.getFullYear() < 1900 || u.getFullYear() > 2100)
          return console.warn("Invalid or unreasonable date:", a, "parsed as:", u), "";
        const h = typeof window < "u" && typeof window.Shopline < "u" && ((d = (c = window.Shopline) == null ? void 0 : c.locale) == null ? void 0 : d.current) || "en";
        return new Intl.DateTimeFormat(h, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(u);
      } catch (u) {
        return console.warn("Error formatting date:", u, a), "";
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
}, zx = ["innerHTML"], Kx = { class: "mt-auto" }, Wx = ["href"];
function Gx(e, t, n, s, o, r) {
  return w(), N("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: Ge(s.cardStyles),
    onMouseenter: t[0] || (t[0] = (i) => s.isHovered = !0),
    onMouseleave: t[1] || (t[1] = (i) => s.isHovered = !1)
  }, [
    t[4] || (t[4] = f("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
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
        }, null, 8, Ix),
        t[2] || (t[2] = f("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, Ax)
    ], 2)) : L("", !0),
    f("div", Mx, [
      n.showTags && s.processedTags.length > 0 ? (w(), N("div", Px, [
        (w(!0), N(ie, null, be(s.processedTags.slice(0, 3), (i) => (w(), N("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, j(i), 1))), 128))
      ])) : L("", !0),
      f("h3", Rx, [
        f("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, j(n.title), 9, Lx)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (w(), N("div", Fx, [
        n.showAuthor && n.author ? (w(), N("span", Bx, j(n.author), 1)) : L("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (w(), N("span", jx, "•")) : L("", !0),
        n.showDate && s.formattedDate ? (w(), N("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, j(s.formattedDate), 9, Hx)) : L("", !0)
      ])) : L("", !0),
      f("div", Ux, [
        n.excerpt ? (w(), N("p", qx, j(n.excerpt), 1)) : n.content ? (w(), N("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-3",
          innerHTML: s.truncatedContent
        }, null, 8, zx)) : L("", !0)
      ]),
      f("div", Kx, [
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
        ]), 8, Wx)
      ])
    ])
  ], 36);
}
const Yx = /* @__PURE__ */ Ye(Vx, [["render", Gx], ["__scopeId", "data-v-4d9d9306"]]);
({
  ...ss,
  props: {
    ...ss.props
  }
});
const Jx = /* @__PURE__ */ Ue(Mf), Xx = /* @__PURE__ */ Ue(k1), Qx = /* @__PURE__ */ Ue(U1), Zx = /* @__PURE__ */ Ue(Af), eN = /* @__PURE__ */ Ue(tb), tN = /* @__PURE__ */ Ue(Rf), nN = /* @__PURE__ */ Ue(Gb), sN = /* @__PURE__ */ Ue(Lf), oN = /* @__PURE__ */ Ue(L2), rN = /* @__PURE__ */ Ue(CE), iN = /* @__PURE__ */ Ue(iw), lN = /* @__PURE__ */ Ue(If), aN = /* @__PURE__ */ Ue(Aw), cN = /* @__PURE__ */ Ue(Pw), uN = /* @__PURE__ */ Ue(Fw), dN = /* @__PURE__ */ Ue(qw), fN = /* @__PURE__ */ Ue(Ww), pN = /* @__PURE__ */ Ue(Dx);
customElements.define("cart-drawer", Jx);
customElements.define("mobile-menu", Xx);
customElements.define("product-variant-picker", Qx);
customElements.define("quantity-selector", Zx);
customElements.define("sticky-header", eN);
customElements.define("main-header", tN);
customElements.define("site-footer", nN);
customElements.define("collection-filters", sN);
customElements.define("collection-grid", oN);
customElements.define("product-gallery", rN);
customElements.define("product-info", iN);
customElements.define("cart-item", lN);
customElements.define("cart-summary", aN);
customElements.define("slideshow-banner", cN);
customElements.define("testimonials-carousel", uN);
customElements.define("video-player", dN);
customElements.define("password-modal", fN);
customElements.define("search-overlay", pN);
function er(e = document) {
  e.querySelectorAll(".main-header-mount").forEach((c) => {
    if (c._vueApp) return;
    const d = Lt(Rf, {
      shopName: c.dataset.shopName || "Orion Store",
      logoUrl: c.dataset.logoUrl || "",
      navigationLinks: JSON.parse(c.dataset.navigationLinks || "[]")
    });
    c._vueApp = d, d.mount(c);
  }), e.querySelectorAll(".cart-drawer-mount").forEach((c) => {
    if (c._vueApp) return;
    const d = Lt(Mf);
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
    }, u = Lt(v_, d);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-sort").forEach((c) => {
    if (c._vueApp) return;
    const d = {
      collectionHandle: c.getAttribute("collection-handle"),
      currentSort: c.getAttribute("current-sort") || "manual"
    }, u = Lt(B2, d);
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
    }, u = Lt({
      components: { Button: ss },
      template: `<Button v-bind="$attrs">${c.innerHTML}</Button>`
    }, d);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-filter-drawer").forEach((c) => {
    if (c._vueApp) return;
    const d = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]")
    }, u = Lt(dE, d);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-filter-sidebar").forEach((c) => {
    if (c._vueApp) return;
    const d = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]"),
      showSort: c.getAttribute(":show-sort") === "true"
    }, u = Lt(Lf, d);
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
    }, u = Lt(Yx, d);
    c._vueApp = u, u.mount(c);
  }), e === document && document.querySelectorAll(".sticky-header").forEach((d) => {
    if (d.dataset.sticky === "true" && !d._stickyInitialized) {
      d._stickyInitialized = !0;
      let u = window.scrollY;
      window.addEventListener("scroll", () => {
        const p = window.scrollY, h = d.dataset.transparent === "true", y = d.dataset.hideOnScroll === "true";
        p > 100 && !h ? (d.classList.add("sticky", "top-0", "shadow-md"), d.style.backgroundColor = d.dataset.stickyBackground || "#ffffff") : (d.classList.remove("sticky", "shadow-md"), d.style.backgroundColor = ""), y && (p > u && p > 100 ? d.style.transform = "translateY(-100%)" : d.style.transform = "translateY(0)"), u = p;
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
var Tc;
((Tc = window.Shopline) != null && Tc.designMode || window.location.href.includes("theme_preview_mode")) && (document.addEventListener("shopline:section:load", (e) => {
  const t = document.querySelector(`[data-section-id="${e.detail.sectionId}"]`) || document;
  er(t);
}), document.addEventListener("shopline:section:reorder", () => {
  er();
}), document.addEventListener("shopline:block:select", (e) => {
  const t = document.querySelector(`[data-block-id="${e.detail.blockId}"]`);
  t && er(t);
}));
