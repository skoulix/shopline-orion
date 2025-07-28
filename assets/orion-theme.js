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
}, Gs = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), nr = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ol = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jf = Object.prototype.hasOwnProperty, ge = (e, t) => jf.call(e, t), Y = Array.isArray, Jn = (e) => Ls(e) === "[object Map]", us = (e) => Ls(e) === "[object Set]", la = (e) => Ls(e) === "[object Date]", Hf = (e) => Ls(e) === "[object RegExp]", oe = (e) => typeof e == "function", le = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", me = (e) => e !== null && typeof e == "object", Dr = (e) => (me(e) || oe(e)) && oe(e.then) && oe(e.catch), Dc = Object.prototype.toString, Ls = (e) => Dc.call(e), rl = (e) => Ls(e).slice(8, -1), Vr = (e) => Ls(e) === "[object Object]", il = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, An = /* @__PURE__ */ Je(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vc = /* @__PURE__ */ Je(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ar = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Uf = /-(\w)/g, Ce = Ar(
  (e) => e.replace(Uf, (t, n) => n ? n.toUpperCase() : "")
), qf = /\B([A-Z])/g, st = Ar(
  (e) => e.replace(qf, "-$1").toLowerCase()
), rn = Ar((e) => e.charAt(0).toUpperCase() + e.slice(1)), tn = Ar(
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
        const f = s[a].length, u = o[a] && o[a].length || 0;
        if (a === l) {
          const p = t - (r - (f + u)), m = Math.max(
            1,
            n > r ? f - p : n - t
          );
          i.push("   |  " + " ".repeat(p) + "^".repeat(m));
        } else if (a > l) {
          if (n > r) {
            const p = Math.max(Math.min(n - r, f), 1);
            i.push("   |  " + "^".repeat(p));
          }
          r += f + u;
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
function we(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = we(e[n]);
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
  return t && !le(t) && (e.class = we(t)), n && (e.style = Ge(n)), e;
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
function Ir(e, t) {
  return e.findIndex((n) => Rn(n, t));
}
const Lc = (e) => !!(e && e.__v_isRef === !0), j = (e) => le(e) ? e : e == null ? "" : Y(e) || me(e) && (e.toString === Dc || !oe(e.toString)) ? Lc(e) ? j(e.value) : JSON.stringify(e, Fc, 2) : String(e), Fc = (e, t) => Lc(t) ? Fc(e, t.value) : Jn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[oi(s, r) + " =>"] = o, n),
    {}
  )
} : us(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => oi(n))
} : xt(t) ? oi(t) : me(t) && !Y(t) && !Vr(t) ? String(t) : t, oi = (e, t = "") => {
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
    if (t.dep.version !== t.version || t.dep.computed && (Kc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Kc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === po) || (e.globalVersion = po, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wi(e))))
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
let po = 0;
class vp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Mr {
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
    this.version++, po++, this.notify(t);
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
const rr = /* @__PURE__ */ new WeakMap(), Xn = Symbol(
  _e.NODE_ENV !== "production" ? "Object iterate" : ""
), xi = Symbol(
  _e.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ho = Symbol(
  _e.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ze(e, t, n) {
  if (qt && Ee) {
    let s = rr.get(e);
    s || rr.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Mr()), o.map = s, o.key = n), _e.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function nn(e, t, n, s, o, r) {
  const i = rr.get(e);
  if (!i) {
    po++;
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
      const f = Number(s);
      i.forEach((u, p) => {
        (p === "length" || p === ho || !xt(p) && p >= f) && l(u);
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
function hs(e) {
  const t = ce(e);
  return t === e ? t : (ze(t, "iterate", ho), it(e) ? t : t.map(Ze));
}
function Pr(e) {
  return ze(e = ce(e), "iterate", ho), e;
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
    return hs(this).toReversed();
  },
  toSorted(e) {
    return hs(this).toSorted(e);
  },
  toSpliced(...e) {
    return hs(this).toSpliced(...e);
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
  const f = a.call(i, c, s);
  return l && o ? o(f) : f;
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
  ze(s, "iterate", ho);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Ss(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : o;
}
function qs(e, t, n = []) {
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
    return (xt(n) ? Yc.has(n) : Ep(n)) || (o || ze(t, "get", n), r) ? l : Ie(l) ? i && il(n) ? l : l.value : me(l) ? o ? Lr(l) : Ns(l) : l;
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
const xp = /* @__PURE__ */ new Xc(), Np = /* @__PURE__ */ new Qc(), Sp = /* @__PURE__ */ new Xc(!0), kp = /* @__PURE__ */ new Qc(!0), Ni = (e) => e, Mo = (e) => Reflect.getPrototypeOf(e);
function Cp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = ce(o), i = Jn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = o[e](...s), f = n ? Ni : t ? ir : Ze;
    return !t && ze(
      r,
      "iterate",
      a ? xi : Xn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = c.next();
        return p ? { value: u, done: p } : {
          value: l ? [f(u[0]), f(u[1])] : f(u),
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
      const { has: a } = Mo(i), c = t ? Ni : e ? ir : Ze;
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
      const i = this, l = i.__v_raw, a = ce(l), c = t ? Ni : e ? ir : Ze;
      return !e && ze(a, "iterate", Xn), l.forEach((f, u) => o.call(r, c(f), c(u), i));
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
        !t && !it(o) && !Yt(o) && (o = ce(o));
        const r = ce(this);
        return Mo(r).has.call(r, o) || (r.add(o), nn(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !it(r) && !Yt(r) && (r = ce(r));
        const i = ce(this), { has: l, get: a } = Mo(i);
        let c = l.call(i, o);
        c ? _e.NODE_ENV !== "production" && pa(i, l, o) : (o = ce(o), c = l.call(i, o));
        const f = a.call(i, o);
        return i.set(o, r), c ? pt(r, f) && nn(i, "set", o, r, f) : nn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ce(this), { has: i, get: l } = Mo(r);
        let a = i.call(r, o);
        a ? _e.NODE_ENV !== "production" && pa(r, i, o) : (o = ce(o), a = i.call(r, o));
        const c = l ? l.call(r, o) : void 0, f = r.delete(o);
        return a && nn(r, "delete", o, void 0, c), f;
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
function Rr(e, t) {
  const n = Op(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
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
  return Yt(e) ? e : Fr(
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
function jt(e) {
  return Fr(
    e,
    !0,
    kp,
    Vp,
    nu
  );
}
function Fr(e, t, n, s, o) {
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
const Ze = (e) => me(e) ? Ns(e) : e, ir = (e) => me(e) ? Lr(e) : e;
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
    this.dep = new Mr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : Ze(t), this.__v_isShallow = n;
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
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Mr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = po - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
}, Ro = {}, lr = /* @__PURE__ */ new WeakMap();
let Sn;
function Gp() {
  return Sn;
}
function cu(e, t = !1, n = Sn) {
  if (n) {
    let s = lr.get(n);
    s || lr.set(n, s = []), s.push(e);
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
  }, f = (_) => o ? _ : it(_) || o === !1 || o === 0 ? pn(_, 1) : pn(_);
  let u, p, m, v, h = !1, $ = !1;
  if (Ie(e) ? (p = () => e.value, h = it(e)) : mn(e) ? (p = () => f(e), h = !0) : Y(e) ? ($ = !0, h = e.some((_) => mn(_) || it(_)), p = () => e.map((_) => {
    if (Ie(_))
      return _.value;
    if (mn(_))
      return f(_);
    if (oe(_))
      return a ? a(_, 2) : _();
    _e.NODE_ENV !== "production" && c(_);
  })) : oe(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      Wt();
      try {
        m();
      } finally {
        Gt();
      }
    }
    const _ = Sn;
    Sn = u;
    try {
      return a ? a(e, 3, [v]) : e(v);
    } finally {
      Sn = _;
    }
  } : (p = De, _e.NODE_ENV !== "production" && c(e)), t && o) {
    const _ = p, A = o === !0 ? 1 / 0 : o;
    p = () => pn(_(), A);
  }
  const x = cl(), y = () => {
    u.stop(), x && x.active && ol(x.effects, u);
  };
  if (r && t) {
    const _ = t;
    t = (...A) => {
      _(...A), y();
    };
  }
  let g = $ ? new Array(e.length).fill(Ro) : Ro;
  const C = (_) => {
    if (!(!(u.flags & 1) || !u.dirty && !_))
      if (t) {
        const A = u.run();
        if (o || h || ($ ? A.some((S, O) => pt(S, g[O])) : pt(A, g))) {
          m && m();
          const S = Sn;
          Sn = u;
          try {
            const O = [
              A,
              // pass undefined as the old value when it's changed for the first time
              g === Ro ? void 0 : $ && g[0] === Ro ? [] : g,
              v
            ];
            g = A, a ? a(t, 3, O) : (
              // @ts-expect-error
              t(...O)
            );
          } finally {
            Sn = S;
          }
        }
      } else
        u.run();
  };
  return l && l(C), u = new fo(p), u.scheduler = i ? () => i(C, !1) : C, v = (_) => cu(_, !1, u), m = u.onStop = () => {
    const _ = lr.get(u);
    if (_) {
      if (a)
        a(_, 4);
      else
        for (const A of _) A();
      lr.delete(u);
    }
  }, _e.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? C(!0) : g = u.run() : i ? i(C.bind(null, !0), !0) : u.run(), y.pause = u.pause.bind(u), y.resume = u.resume.bind(u), y.stop = y, y;
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
  else if (Vr(e)) {
    for (const s in e)
      pn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && pn(e[s], t, n);
  }
  return e;
}
var k = {};
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
  k.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? R(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && R(`${t} is NaN - the duration expression might be incorrect.`));
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
function Mt(e, t, n, s) {
  if (oe(e)) {
    const o = ds(e, t, n, s);
    return o && Dr(o) && o.catch((r) => {
      Bn(r, t, n);
    }), o;
  }
  if (Y(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Mt(e[r], t, n, s));
    return o;
  } else k.NODE_ENV !== "production" && R(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = k.NODE_ENV !== "production" ? Br[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, a, c) === !1)
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
  if (k.NODE_ENV !== "production") {
    const r = Br[t];
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
let ar = null;
const nh = 100;
function Fs(e) {
  const t = ar || du;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sh(e) {
  let t = Qt + 1, n = ht.length;
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
function ks(e) {
  Y(e) ? Es.push(...e) : kn && e.id === -1 ? kn.splice(vs + 1, 0, e) : e.flags & 1 || (Es.push(e), e.flags |= 1), fu();
}
function ha(e, t, n = Qt + 1) {
  for (k.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ht.length; n++) {
    const s = ht[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || k.NODE_ENV !== "production" && ml(t, s))
        continue;
      ht.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function cr(e) {
  if (Es.length) {
    const t = [...new Set(Es)].sort(
      (n, s) => mo(n) - mo(s)
    );
    if (Es.length = 0, kn) {
      kn.push(...t);
      return;
    }
    for (kn = t, k.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vs = 0; vs < kn.length; vs++) {
      const n = kn[vs];
      k.NODE_ENV !== "production" && ml(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kn = null, vs = 0;
  }
}
const mo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pu(e) {
  k.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = k.NODE_ENV !== "production" ? (n) => ml(e, n) : De;
  try {
    for (Qt = 0; Qt < ht.length; Qt++) {
      const n = ht[Qt];
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
    for (; Qt < ht.length; Qt++) {
      const n = ht[Qt];
      n && (n.flags &= -2);
    }
    Qt = -1, ht.length = 0, cr(e), ar = null, (ht.length || Es.length) && pu(e);
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
const Wo = /* @__PURE__ */ new Map();
k.NODE_ENV !== "production" && (ko().__VUE_HMR_RUNTIME__ = {
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
    t && (s.render = t, ur(s.type).render = t), s.renderCache = [], Ht = !0, s.update(), Ht = !1;
  }));
}
function lh(e, t) {
  const n = rs.get(e);
  if (!n) return;
  t = ur(t), ma(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = ur(r.type);
    let l = Wo.get(i);
    l || (i !== n.initialDef && ma(i, t), Wo.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? jr(() => {
      Ht = !0, r.parent.update(), Ht = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  ks(() => {
    Wo.clear();
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
let Ft, Ys = [], Si = !1;
function Oo(e, ...t) {
  Ft ? Ft.emit(e, ...t) : Si || Ys.push({ event: e, args: t });
}
function gl(e, t) {
  var n, s;
  Ft = e, Ft ? (Ft.enabled = !0, Ys.forEach(({ event: o, args: r }) => Ft.emit(o, ...r)), Ys = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    gl(r, t);
  }), setTimeout(() => {
    Ft || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Si = !0, Ys = []);
  }, 3e3)) : (Si = !0, Ys = []);
}
function ah(e, t) {
  Oo("app:init", e, t, {
    Fragment: ie,
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
  Ft && typeof Ft.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ft.cleanupBuffer(e) && uh(e);
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
    return k.NODE_ENV !== "production" && mu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vu(e) {
  Vc(e) && R("Do not use built-in directive ids as custom directive id: " + e);
}
function $e(e, t) {
  if (Be === null)
    return k.NODE_ENV !== "production" && R("withDirectives can only be used inside render functions."), e;
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
      return k.NODE_ENV !== "production" && !s && !Zn(e) && R(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return k.NODE_ENV !== "production" && R(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return k.NODE_ENV !== "production" && !n && !Zn(e) && R(`Invalid Teleport target: ${n}`), n;
}, _u = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, l, a, c) {
    const {
      mc: f,
      pc: u,
      pbc: p,
      o: { insert: m, querySelector: v, createText: h, createComment: $ }
    } = c, x = Zn(t.props);
    let { shapeFlag: y, children: g, dynamicChildren: C } = t;
    if (k.NODE_ENV !== "production" && Ht && (a = !1, C = null), e == null) {
      const _ = t.el = k.NODE_ENV !== "production" ? $("teleport start") : h(""), A = t.anchor = k.NODE_ENV !== "production" ? $("teleport end") : h("");
      m(_, n, s), m(A, n, s);
      const S = (b, T) => {
        y & 16 && (o && o.isCE && (o.ce._teleportTarget = b), f(
          g,
          b,
          T,
          o,
          r,
          i,
          l,
          a
        ));
      }, O = () => {
        const b = t.target = Ci(t.props, v), T = Eu(b, t, h, m);
        b ? (i !== "svg" && va(b) ? i = "svg" : i !== "mathml" && ya(b) && (i = "mathml"), x || (S(b, T), Go(t, !1))) : k.NODE_ENV !== "production" && !x && R(
          "Invalid Teleport target on mount:",
          b,
          `(${typeof b})`
        );
      };
      x && (S(n, A), Go(t, !0)), ga(t.props) ? (t.el.__isMounted = !1, qe(() => {
        O(), delete t.el.__isMounted;
      }, r)) : O();
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
      const _ = t.anchor = e.anchor, A = t.target = e.target, S = t.targetAnchor = e.targetAnchor, O = Zn(e.props), b = O ? n : A, T = O ? _ : S;
      if (i === "svg" || va(A) ? i = "svg" : (i === "mathml" || ya(A)) && (i = "mathml"), C ? (p(
        e.dynamicChildren,
        C,
        b,
        o,
        r,
        i,
        l
      ), ro(e, t, k.NODE_ENV === "production")) : a || u(
        e,
        t,
        b,
        T,
        o,
        r,
        i,
        l,
        !1
      ), x)
        O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Lo(
          t,
          n,
          _,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const I = t.target = Ci(
          t.props,
          v
        );
        I ? Lo(
          t,
          I,
          null,
          c,
          0
        ) : k.NODE_ENV !== "production" && R(
          "Invalid Teleport target on update:",
          A,
          `(${typeof A})`
        );
      } else O && Lo(
        t,
        A,
        S,
        c,
        1
      );
      Go(t, x);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, r) {
    const {
      shapeFlag: i,
      children: l,
      anchor: a,
      targetStart: c,
      targetAnchor: f,
      target: u,
      props: p
    } = e;
    if (u && (o(c), o(f)), r && o(a), i & 16) {
      const m = r || !Zn(p);
      for (let v = 0; v < l.length; v++) {
        const h = l[v];
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
  const { el: i, anchor: l, shapeFlag: a, children: c, props: f } = e, u = r === 2;
  if (u && s(i, t, n), (!u || Zn(f)) && a & 16)
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
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: c, createText: f }
}, u) {
  const p = t.target = Ci(
    t.props,
    a
  );
  if (p) {
    const m = Zn(t.props), v = p._lpa || p.firstChild;
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
        ), t.targetStart = v, t.targetAnchor = v && i(v);
      else {
        t.anchor = i(e);
        let h = v;
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
        t.targetAnchor || Eu(p, t, f, c), u(
          v && i(v),
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
      const o = t.default && Ur(t.default(), !0);
      if (!o || !o.length)
        return;
      const r = xu(o), i = ce(e), { mode: l } = i;
      if (k.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && R(`invalid <transition> mode: ${l}`), s.isLeaving)
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
      let f = n.subTree && ba(n.subTree);
      if (f && f.type !== Ve && !Bt(a, f) && wu(n).type !== Ve) {
        let u = Cs(
          f,
          i,
          s,
          n
        );
        if (yn(f, u), l === "out-in" && a.type !== Ve)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, f = void 0;
          }, ui(r);
        l === "in-out" && a.type !== Ve ? u.delayLeave = (p, m, v) => {
          const h = Su(
            s,
            f
          );
          h[String(f.key)] = f, p[Cn] = () => {
            m(), p[Cn] = void 0, delete c.delayedLeave, f = void 0;
          }, c.delayedLeave = () => {
            v(), delete c.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
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
        if (k.NODE_ENV !== "production" && n) {
          R(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, k.NODE_ENV === "production") break;
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
    onAfterEnter: f,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: m,
    onAfterLeave: v,
    onLeaveCancelled: h,
    onBeforeAppear: $,
    onAppear: x,
    onAfterAppear: y,
    onAppearCancelled: g
  } = t, C = String(e.key), _ = Su(n, e), A = (b, T) => {
    b && Mt(
      b,
      s,
      9,
      T
    );
  }, S = (b, T) => {
    const I = T[1];
    A(b, T), Y(b) ? b.every((D) => D.length <= 1) && I() : b.length <= 1 && I();
  }, O = {
    mode: i,
    persisted: l,
    beforeEnter(b) {
      let T = a;
      if (!n.isMounted)
        if (r)
          T = $ || a;
        else
          return;
      b[Cn] && b[Cn](
        !0
        /* cancelled */
      );
      const I = _[C];
      I && Bt(e, I) && I.el[Cn] && I.el[Cn](), A(T, [b]);
    },
    enter(b) {
      let T = c, I = f, D = u;
      if (!n.isMounted)
        if (r)
          T = x || c, I = y || f, D = g || u;
        else
          return;
      let P = !1;
      const z = b[Fo] = (K) => {
        P || (P = !0, K ? A(D, [b]) : A(I, [b]), O.delayedLeave && O.delayedLeave(), b[Fo] = void 0);
      };
      T ? S(T, [b, z]) : z();
    },
    leave(b, T) {
      const I = String(e.key);
      if (b[Fo] && b[Fo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      A(p, [b]);
      let D = !1;
      const P = b[Cn] = (z) => {
        D || (D = !0, T(), z ? A(h, [b]) : A(v, [b]), b[Cn] = void 0, _[I] === e && delete _[I]);
      };
      _[I] = e, m ? S(m, [b, P]) : P();
    },
    clone(b) {
      const T = Cs(
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
function Ur(e, t = !1, n) {
  let s = [], o = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === ie ? (i.patchFlag & 128 && o++, s = s.concat(
      Ur(i.children, t, l)
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
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (k.NODE_ENV !== "production" && R(
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
    k.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? R(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else k.NODE_ENV !== "production" && R(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = k.NODE_ENV !== "production" ? Lr(n) : n;
  return k.NODE_ENV !== "production" && ku.add(s), s;
}
function ws(e, t, n, s, o = !1) {
  if (Y(e)) {
    e.forEach(
      (v, h) => ws(
        v,
        t && (Y(t) ? t[h] : t),
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
  const r = s.shapeFlag & 4 ? To(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (k.NODE_ENV !== "production" && !l) {
    R(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, f = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, p = ce(u), m = u === pe ? () => !1 : (v) => k.NODE_ENV !== "production" && (ge(p, v) && !Ie(p[v]) && R(
    `Template ref "${v}" used on a non-ref value. It will not work in the production build.`
  ), ku.has(p[v])) ? !1 : ge(p, v);
  if (c != null && c !== a && (le(c) ? (f[c] = null, m(c) && (u[c] = null)) : Ie(c) && (c.value = null)), oe(a))
    ds(a, l, 12, [i, f]);
  else {
    const v = le(a), h = Ie(a);
    if (v || h) {
      const $ = () => {
        if (e.f) {
          const x = v ? m(a) ? u[a] : f[a] : a.value;
          o ? Y(x) && ol(x, r) : Y(x) ? x.includes(r) || x.push(r) : v ? (f[a] = [r], m(a) && (u[a] = f[a])) : (a.value = [r], e.k && (f[e.k] = a.value));
        } else v ? (f[a] = i, m(a) && (u[a] = i)) : h ? (a.value = i, e.k && (f[e.k] = i)) : k.NODE_ENV !== "production" && R("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? ($.id = -1, qe($, n)) : $();
    } else k.NODE_ENV !== "production" && R("Invalid template ref type:", a, `(${typeof a})`);
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
  } = e, f = (g, C) => {
    if (!C.hasChildNodes()) {
      k.NODE_ENV !== "production" && R(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, g, C), cr(), C._vnode = g;
      return;
    }
    u(C.firstChild, g, null, null, null), cr(), C._vnode = g;
  }, u = (g, C, _, A, S, O = !1) => {
    O = O || !!C.dynamicChildren;
    const b = Wn(g) && g.data === "[", T = () => h(
      g,
      C,
      _,
      A,
      S,
      b
    ), { type: I, ref: D, shapeFlag: P, patchFlag: z } = C;
    let K = g.nodeType;
    C.el = g, k.NODE_ENV !== "production" && (os(g, "__vnode", C, !0), os(g, "__vueParentComponent", _, !0)), z === -2 && (O = !1, C.dynamicChildren = null);
    let ee = null;
    switch (I) {
      case on:
        K !== 3 ? C.children === "" ? (a(C.el = o(""), i(g), g), ee = g) : ee = T() : (g.data !== C.children && (k.NODE_ENV !== "production" && R(
          "Hydration text mismatch in",
          g.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            g.data
          )}
  - expected on client: ${JSON.stringify(C.children)}`
        ), Hn(), g.data = C.children), ee = r(g));
        break;
      case Ve:
        y(g) ? (ee = r(g), x(
          C.el = g.content.firstChild,
          g,
          _
        )) : K !== 8 || b ? ee = T() : ee = r(g);
        break;
      case Mn:
        if (b && (g = r(g), K = g.nodeType), K === 1 || K === 3) {
          ee = g;
          const ne = !C.children.length;
          for (let te = 0; te < C.staticCount; te++)
            ne && (C.children += ee.nodeType === 1 ? ee.outerHTML : ee.data), te === C.staticCount - 1 && (C.anchor = ee), ee = r(ee);
          return b ? r(ee) : ee;
        } else
          T();
        break;
      case ie:
        b ? ee = v(
          g,
          C,
          _,
          A,
          S,
          O
        ) : ee = T();
        break;
      default:
        if (P & 1)
          (K !== 1 || C.type.toLowerCase() !== g.tagName.toLowerCase()) && !y(g) ? ee = T() : ee = p(
            g,
            C,
            _,
            A,
            S,
            O
          );
        else if (P & 6) {
          C.slotScopeIds = S;
          const ne = i(g);
          if (b ? ee = $(g) : Wn(g) && g.data === "teleport start" ? ee = $(g, g.data, "teleport end") : ee = r(g), t(
            C,
            ne,
            null,
            _,
            A,
            Bo(ne),
            O
          ), In(C) && !C.type.__asyncResolved) {
            let te;
            b ? (te = ue(ie), te.anchor = ee ? ee.previousSibling : ne.lastChild) : te = g.nodeType === 3 ? je("") : ue("div"), te.el = g, C.component.subTree = te;
          }
        } else P & 64 ? K !== 8 ? ee = T() : ee = C.type.hydrate(
          g,
          C,
          _,
          A,
          S,
          O,
          e,
          m
        ) : P & 128 ? ee = C.type.hydrate(
          g,
          C,
          _,
          A,
          Bo(i(g)),
          S,
          O,
          e,
          u
        ) : k.NODE_ENV !== "production" && R("Invalid HostVNode type:", I, `(${typeof I})`);
    }
    return D != null && ws(D, null, A, C), ee;
  }, p = (g, C, _, A, S, O) => {
    O = O || !!C.dynamicChildren;
    const { type: b, props: T, patchFlag: I, shapeFlag: D, dirs: P, transition: z } = C, K = b === "input" || b === "option";
    if (k.NODE_ENV !== "production" || K || I !== -1) {
      P && en(C, null, _, "created");
      let ee = !1;
      if (y(g)) {
        ee = Qu(
          null,
          // no need check parentSuspense in hydration
          z
        ) && _ && _.vnode.props && _.vnode.props.appear;
        const te = g.content.firstChild;
        if (ee) {
          const xe = te.getAttribute("class");
          xe && (te.$cls = xe), z.beforeEnter(te);
        }
        x(te, g, _), C.el = g = te;
      }
      if (D & 16 && // skip if element has innerHTML / textContent
      !(T && (T.innerHTML || T.textContent))) {
        let te = m(
          g.firstChild,
          C,
          g,
          _,
          A,
          S,
          O
        ), xe = !1;
        for (; te; ) {
          Js(
            g,
            1
            /* CHILDREN */
          ) || (k.NODE_ENV !== "production" && !xe && (R(
            "Hydration children mismatch on",
            g,
            `
Server rendered element contains more child nodes than client vdom.`
          ), xe = !0), Hn());
          const gt = te;
          te = te.nextSibling, l(gt);
        }
      } else if (D & 8) {
        let te = C.children;
        te[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (te = te.slice(1)), g.textContent !== te && (Js(
          g,
          0
          /* TEXT */
        ) || (k.NODE_ENV !== "production" && R(
          "Hydration text content mismatch on",
          g,
          `
  - rendered on server: ${g.textContent}
  - expected on client: ${C.children}`
        ), Hn()), g.textContent = C.children);
      }
      if (T) {
        if (k.NODE_ENV !== "production" || K || !O || I & 48) {
          const te = g.tagName.includes("-");
          for (const xe in T)
            k.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(P && P.some((gt) => gt.dir.created)) && Sh(g, xe, T[xe], C, _) && Hn(), (K && (xe.endsWith("value") || xe === "indeterminate") || vn(xe) && !An(xe) || // force hydrate v-bind with .prop modifiers
            xe[0] === "." || te) && s(g, xe, null, T[xe], void 0, _);
        } else if (T.onClick)
          s(
            g,
            "onClick",
            null,
            T.onClick,
            void 0,
            _
          );
        else if (I & 4 && mn(T.style))
          for (const te in T.style) T.style[te];
      }
      let ne;
      (ne = T && T.onVnodeBeforeMount) && _t(ne, _, C), P && en(C, null, _, "beforeMount"), ((ne = T && T.onVnodeMounted) || P || ee) && ad(() => {
        ne && _t(ne, _, C), ee && z.enter(g), P && en(C, null, _, "mounted");
      }, A);
    }
    return g.nextSibling;
  }, m = (g, C, _, A, S, O, b) => {
    b = b || !!C.dynamicChildren;
    const T = C.children, I = T.length;
    let D = !1;
    for (let P = 0; P < I; P++) {
      const z = b ? T[P] : T[P] = mt(T[P]), K = z.type === on;
      g ? (K && !b && P + 1 < I && mt(T[P + 1]).type === on && (a(
        o(
          g.data.slice(z.children.length)
        ),
        _,
        r(g)
      ), g.data = z.children), g = u(
        g,
        z,
        A,
        S,
        O,
        b
      )) : K && !z.children ? a(z.el = o(""), _) : (Js(
        _,
        1
        /* CHILDREN */
      ) || (k.NODE_ENV !== "production" && !D && (R(
        "Hydration children mismatch on",
        _,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), D = !0), Hn()), n(
        null,
        z,
        _,
        null,
        A,
        S,
        Bo(_),
        O
      ));
    }
    return g;
  }, v = (g, C, _, A, S, O) => {
    const { slotScopeIds: b } = C;
    b && (S = S ? S.concat(b) : b);
    const T = i(g), I = m(
      r(g),
      C,
      T,
      _,
      A,
      S,
      O
    );
    return I && Wn(I) && I.data === "]" ? r(C.anchor = I) : (Hn(), a(C.anchor = c("]"), T, I), I);
  }, h = (g, C, _, A, S, O) => {
    if (Js(
      g.parentElement,
      1
      /* CHILDREN */
    ) || (k.NODE_ENV !== "production" && R(
      `Hydration node mismatch:
- rendered on server:`,
      g,
      g.nodeType === 3 ? "(text)" : Wn(g) && g.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      C.type
    ), Hn()), C.el = null, O) {
      const I = $(g);
      for (; ; ) {
        const D = r(g);
        if (D && D !== I)
          l(D);
        else
          break;
      }
    }
    const b = r(g), T = i(g);
    return l(g), n(
      null,
      C,
      T,
      b,
      _,
      A,
      Bo(T),
      S
    ), _ && (_.vnode.el = C.el, Gr(_, C.el)), b;
  }, $ = (g, C = "[", _ = "]") => {
    let A = 0;
    for (; g; )
      if (g = r(g), g && Wn(g) && (g.data === C && A++, g.data === _)) {
        if (A === 0)
          return r(g);
        A--;
      }
    return g;
  }, x = (g, C, _) => {
    const A = C.parentNode;
    A && A.replaceChild(g, C);
    let S = _;
    for (; S; )
      S.vnode.el === C && (S.vnode.el = S.subTree.el = g), S = S.parent;
  }, y = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [f, u];
}
function Sh(e, t, n, s, o) {
  let r, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = we(n), kh(Ea(l || ""), Ea(a)) || (r = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : Zf(Ge(n));
    const c = wa(l), f = wa(a);
    if (s.dirs)
      for (const { dir: u, value: p } of s.dirs)
        u.name === "show" && !p && f.set("display", "none");
    o && Cu(o, s, f), Ch(c, f) || (r = 3, i = "style");
  } else (e instanceof SVGElement && ap(t) || e instanceof HTMLElement && (ua(t) || lp(t))) && (ua(t) ? (l = e.hasAttribute(t), a = ll(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = cp(n) ? String(n) : !1), l !== a && (r = 4, i = t));
  if (r != null && !Js(e, r)) {
    const c = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, f = `Hydration ${Ou[r]} mismatch on`, u = `
  - rendered on server: ${c(l)}
  - expected on client: ${c(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return R(f, e, u), !0;
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
  let c = null, f, u = 0;
  const p = () => (u++, c = null, m()), m = () => {
    let v;
    return c || (v = c = t().catch((h) => {
      if (h = h instanceof Error ? h : new Error(String(h)), a)
        return new Promise(($, x) => {
          a(h, () => $(p()), () => x(h), u + 1);
        });
      throw h;
    }).then((h) => {
      if (v !== c && c)
        return c;
      if (k.NODE_ENV !== "production" && !h && R(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), h && (h.__esModule || h[Symbol.toStringTag] === "Module") && (h = h.default), k.NODE_ENV !== "production" && h && !me(h) && !oe(h))
        throw new Error(`Invalid async component load result: ${h}`);
      return f = h, h;
    }));
  };
  return /* @__PURE__ */ _l({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(v, h, $) {
      let x = !1;
      (h.bu || (h.bu = [])).push(() => x = !0);
      const y = () => {
        if (x) {
          k.NODE_ENV !== "production" && R(
            `Skipping lazy hydration for component '${$s(f) || f.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        $();
      }, g = r ? () => {
        const C = r(
          y,
          (_) => Mh(v, _)
        );
        C && (h.bum || (h.bum = [])).push(C);
      } : y;
      f ? g() : m().then(() => !h.isUnmounted && g());
    },
    get __asyncResolved() {
      return f;
    },
    setup() {
      const v = We;
      if (El(v), f)
        return () => di(f, v);
      const h = (g) => {
        c = null, Bn(
          g,
          v,
          13,
          !s
        );
      };
      if (l && v.suspense || Os)
        return m().then((g) => () => di(g, v)).catch((g) => (h(g), () => s ? ue(s, {
          error: g
        }) : null));
      const $ = q(!1), x = q(), y = q(!!o);
      return o && setTimeout(() => {
        y.value = !1;
      }, o), i != null && setTimeout(() => {
        if (!$.value && !x.value) {
          const g = new Error(
            `Async component timed out after ${i}ms.`
          );
          h(g), x.value = g;
        }
      }, i), m().then(() => {
        $.value = !0, v.parent && Bs(v.parent.vnode) && v.parent.update();
      }).catch((g) => {
        h(g), x.value = g;
      }), () => {
        if ($.value && f)
          return di(f, v);
        if (x.value && s)
          return ue(s, {
            error: x.value
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
        const y = t.default && t.default();
        return y && y.length === 1 ? y[0] : y;
      };
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let i = null;
    k.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: f,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (y, g, C, _, A) => {
      const S = y.component;
      c(y, g, C, 0, l), a(
        S.vnode,
        y,
        g,
        C,
        S,
        l,
        _,
        y.slotScopeIds,
        A
      ), qe(() => {
        S.isDeactivated = !1, S.a && Tn(S.a);
        const O = y.props && y.props.onVnodeMounted;
        O && _t(O, S.parent, y);
      }, l), k.NODE_ENV !== "production" && ki(S);
    }, s.deactivate = (y) => {
      const g = y.component;
      hr(g.m), hr(g.a), c(y, p, null, 1, l), qe(() => {
        g.da && Tn(g.da);
        const C = y.props && y.props.onVnodeUnmounted;
        C && _t(C, g.parent, y), g.isDeactivated = !0;
      }, l), k.NODE_ENV !== "production" && ki(g), k.NODE_ENV !== "production" && (g.__keepAliveStorageContainer = p);
    };
    function m(y) {
      fi(y), f(y, n, l, !0);
    }
    function v(y) {
      o.forEach((g, C) => {
        const _ = $s(g.type);
        _ && !y(_) && h(C);
      });
    }
    function h(y) {
      const g = o.get(y);
      g && (!i || !Bt(g, i)) ? m(g) : i && fi(i), o.delete(y), r.delete(y);
    }
    sn(
      () => [e.include, e.exclude],
      ([y, g]) => {
        y && v((C) => Xs(y, C)), g && v((C) => !Xs(g, C));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let $ = null;
    const x = () => {
      $ != null && (gr(n.subTree.type) ? qe(() => {
        o.set($, jo(n.subTree));
      }, n.subTree.suspense) : o.set($, jo(n.subTree)));
    };
    return He(x), zr(x), js(() => {
      o.forEach((y) => {
        const { subTree: g, suspense: C } = n, _ = jo(g);
        if (y.type === _.type && y.key === _.key) {
          fi(_);
          const A = _.component.da;
          A && qe(A, C);
          return;
        }
        m(y);
      });
    }), () => {
      if ($ = null, !t.default)
        return i = null;
      const y = t.default(), g = y[0];
      if (y.length > 1)
        return k.NODE_ENV !== "production" && R("KeepAlive should contain exactly one component child."), i = null, y;
      if (!ln(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return i = null, g;
      let C = jo(g);
      if (C.type === Ve)
        return i = null, C;
      const _ = C.type, A = $s(
        In(C) ? C.type.__asyncResolved || {} : _
      ), { include: S, exclude: O, max: b } = e;
      if (S && (!A || !Xs(S, A)) || O && A && Xs(O, A))
        return C.shapeFlag &= -257, i = C, g;
      const T = C.key == null ? _ : C.key, I = o.get(T);
      return C.el && (C = Pt(C), g.shapeFlag & 128 && (g.ssContent = C)), $ = T, I ? (C.el = I.el, C.component = I.component, C.transition && yn(C, C.transition), C.shapeFlag |= 512, r.delete(T), r.add(T)) : (r.add(T), b && r.size > parseInt(b, 10) && h(r.values().next().value)), C.shapeFlag |= 256, i = C, gr(g.type) ? g : C;
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
  Ct(() => {
    ol(s[t], o);
  }, n);
}
function fi(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function jo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function qr(e, t, n = We, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Wt();
      const l = as(n), a = Mt(t, n, e, i);
      return l(), Gt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (k.NODE_ENV !== "production") {
    const o = tn(Br[e].replace(/ hook$/, ""));
    R(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _n = (e) => (t, n = We) => {
  (!Os || e === "sp") && qr(e, (...s) => t(...s), n);
}, Vu = _n("bm"), He = _n("m"), wl = _n(
  "bu"
), zr = _n("u"), js = _n(
  "bum"
), Ct = _n("um"), Au = _n(
  "sp"
), Iu = _n("rtg"), Mu = _n("rtc");
function Pu(e, t = We) {
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
  const o = Be || We;
  if (o) {
    const r = o.type;
    if (e === dr) {
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
    if (k.NODE_ENV !== "production" && n && !i) {
      const l = e === dr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      R(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else k.NODE_ENV !== "production" && R(
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
    l && (a = !it(e), c = Yt(e), e = Pr(e)), o = new Array(e.length);
    for (let f = 0, u = e.length; f < u; f++)
      o[f] = t(
        a ? c ? ir(Ze(e[f])) : Ze(e[f]) : e[f],
        f,
        void 0,
        r && r[f]
      );
  } else if (typeof e == "number") {
    k.NODE_ENV !== "production" && !Number.isInteger(e) && R(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
        const f = l[a];
        o[a] = t(e[f], f, a, r && r[a]);
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
  k.NODE_ENV !== "production" && r && r.length > 1 && (R(
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
  if (k.NODE_ENV !== "production" && !me(e))
    return R("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : tn(s)] = e[s];
  return n;
}
const Oi = (e) => e ? vd(e) ? To(e) : Oi(e.parent) : null, es = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => k.NODE_ENV !== "production" ? jt(e.props) : e.props,
    $attrs: (e) => k.NODE_ENV !== "production" ? jt(e.attrs) : e.attrs,
    $slots: (e) => k.NODE_ENV !== "production" ? jt(e.slots) : e.slots,
    $refs: (e) => k.NODE_ENV !== "production" ? jt(e.refs) : e.refs,
    $parent: (e) => Oi(e.parent),
    $root: (e) => Oi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      jr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fs.bind(e.proxy)),
    $watch: (e) => Im.bind(e)
  })
), Cl = (e) => e === "_" || e === "$", pi = (e, t) => e !== pe && !e.__isScriptSetup && ge(e, t), so = {
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
    const f = es[t];
    let u, p;
    if (f)
      return t === "$attrs" ? (ze(e.attrs, "get", ""), k.NODE_ENV !== "production" && mr()) : k.NODE_ENV !== "production" && t === "$slots" && ze(e, "get", t), f(e);
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
    k.NODE_ENV !== "production" && Be && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
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
    return pi(o, t) ? (o[t] = n, !0) : k.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (R(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (k.NODE_ENV !== "production" && R(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (k.NODE_ENV !== "production" && R(
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
    return !!n[i] || e !== pe && ge(e, i) || pi(t, i) || (l = r[0]) && ge(l, i) || ge(s, i) || ge(es, i) || ge(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
k.NODE_ENV !== "production" && (so.ownKeys = (e) => (R(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zh = /* @__PURE__ */ fe({}, so, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return so.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Gf(t);
    return k.NODE_ENV !== "production" && !n && so.has(e, t) && R(
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
  return k.NODE_ENV !== "production" && fs("defineProps"), null;
}
function Jh() {
  return k.NODE_ENV !== "production" && fs("defineEmits"), null;
}
function Xh(e) {
  k.NODE_ENV !== "production" && fs("defineExpose");
}
function Qh(e) {
  k.NODE_ENV !== "production" && fs("defineOptions");
}
function Zh() {
  return k.NODE_ENV !== "production" && fs("defineSlots"), null;
}
function em() {
  k.NODE_ENV !== "production" && fs("defineModel");
}
function tm(e, t) {
  return k.NODE_ENV !== "production" && fs("withDefaults"), null;
}
function nm() {
  return Ru("useSlots").slots;
}
function sm() {
  return Ru("useAttrs").attrs;
}
function Ru(e) {
  const t = ut();
  return k.NODE_ENV !== "production" && !t && R(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Ed(t));
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
    o ? Y(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : k.NODE_ENV !== "production" && R(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
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
  k.NODE_ENV !== "production" && !t && R(
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
    created: f,
    beforeMount: u,
    mounted: p,
    beforeUpdate: m,
    updated: v,
    activated: h,
    deactivated: $,
    beforeDestroy: x,
    beforeUnmount: y,
    destroyed: g,
    unmounted: C,
    render: _,
    renderTracked: A,
    renderTriggered: S,
    errorCaptured: O,
    serverPrefetch: b,
    // public API
    expose: T,
    inheritAttrs: I,
    // assets
    components: D,
    directives: P,
    filters: z
  } = t, K = k.NODE_ENV !== "production" ? am() : null;
  if (k.NODE_ENV !== "production") {
    const [ne] = e.propsOptions;
    if (ne)
      for (const te in ne)
        K("Props", te);
  }
  if (c && um(c, s, K), i)
    for (const ne in i) {
      const te = i[ne];
      oe(te) ? (k.NODE_ENV !== "production" ? Object.defineProperty(s, ne, {
        value: te.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ne] = te.bind(n), k.NODE_ENV !== "production" && K("Methods", ne)) : k.NODE_ENV !== "production" && R(
        `Method "${ne}" has type "${typeof te}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    k.NODE_ENV !== "production" && !oe(o) && R(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ne = o.call(n, n);
    if (k.NODE_ENV !== "production" && Dr(ne) && R(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(ne))
      k.NODE_ENV !== "production" && R("data() should return an object.");
    else if (e.data = Ns(ne), k.NODE_ENV !== "production")
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
      const te = r[ne], xe = oe(te) ? te.bind(n, n) : oe(te.get) ? te.get.bind(n, n) : De;
      k.NODE_ENV !== "production" && xe === De && R(`Computed property "${ne}" has no getter.`);
      const gt = !oe(te) && oe(te.set) ? te.set.bind(n) : k.NODE_ENV !== "production" ? () => {
        R(
          `Write operation failed: computed property "${ne}" is readonly.`
        );
      } : De, $t = Z({
        get: xe,
        set: gt
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => $t.value,
        set: (Tt) => $t.value = Tt
      }), k.NODE_ENV !== "production" && K("Computed", ne);
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
  f && Sa(f, e, "c");
  function ee(ne, te) {
    Y(te) ? te.forEach((xe) => ne(xe.bind(n))) : te && ne(te.bind(n));
  }
  if (ee(Vu, u), ee(He, p), ee(wl, m), ee(zr, v), ee($u, h), ee(Tu, $), ee(Pu, O), ee(Mu, A), ee(Iu, S), ee(js, y), ee(Ct, C), ee(Au, b), Y(T))
    if (T.length) {
      const ne = e.exposed || (e.exposed = {});
      T.forEach((te) => {
        Object.defineProperty(ne, te, {
          get: () => n[te],
          set: (xe) => n[te] = xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === De && (e.render = _), I != null && (e.inheritAttrs = I), D && (e.components = D), P && (e.directives = P), b && El(e);
}
function um(e, t, n = De) {
  Y(e) && (e = Ti(e));
  for (const s in e) {
    const o = e[s];
    let r;
    me(o) ? "default" in o ? r = oo(
      o.from || s,
      o.default,
      !0
    ) : r = oo(o.from || s) : r = oo(o), Ie(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, k.NODE_ENV !== "production" && n("Inject", s);
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
    oe(r) ? sn(o, r) : k.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e}"`, r);
  } else if (oe(e))
    sn(o, e.bind(n));
  else if (me(e))
    if (Y(e))
      e.forEach((r) => Lu(r, t, n, s));
    else {
      const r = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(r) ? sn(o, r, e) : k.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else k.NODE_ENV !== "production" && R(`Invalid watch option: "${s}"`, e);
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
  ), fr(a, t, i)), me(t) && r.set(t, a), a;
}
function fr(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && fr(e, r, n, !0), o && o.forEach(
    (i) => fr(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      k.NODE_ENV !== "production" && R(
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
    oe(s) || (s = fe({}, s)), o != null && !me(o) && (k.NODE_ENV !== "production" && R("root props passed to app.mount() must be an object."), o = null);
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
      set config(f) {
        k.NODE_ENV !== "production" && R(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...u) {
        return i.has(f) ? k.NODE_ENV !== "production" && R("Plugin has already been applied to target app.") : f && oe(f.install) ? (i.add(f), f.install(c, ...u)) : oe(f) ? (i.add(f), f(c, ...u)) : k.NODE_ENV !== "production" && R(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(f) {
        return r.mixins.includes(f) ? k.NODE_ENV !== "production" && R(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : r.mixins.push(f), c;
      },
      component(f, u) {
        return k.NODE_ENV !== "production" && Fi(f, r.config), u ? (k.NODE_ENV !== "production" && r.components[f] && R(`Component "${f}" has already been registered in target app.`), r.components[f] = u, c) : r.components[f];
      },
      directive(f, u) {
        return k.NODE_ENV !== "production" && vu(f), u ? (k.NODE_ENV !== "production" && r.directives[f] && R(`Directive "${f}" has already been registered in target app.`), r.directives[f] = u, c) : r.directives[f];
      },
      mount(f, u, p) {
        if (a)
          k.NODE_ENV !== "production" && R(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          k.NODE_ENV !== "production" && f.__vue_app__ && R(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || ue(s, o);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), k.NODE_ENV !== "production" && (r.reload = () => {
            const v = Pt(m);
            v.el = null, e(v, f, p);
          }), u && t ? t(m, f) : e(m, f, p), a = !0, c._container = f, f.__vue_app__ = c, k.NODE_ENV !== "production" && (c._instance = m.component, ah(c, Hi)), To(m.component);
        }
      },
      onUnmount(f) {
        k.NODE_ENV !== "production" && typeof f != "function" && R(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), l.push(f);
      },
      unmount() {
        a ? (Mt(
          l,
          c._instance,
          16
        ), e(null, c._container), k.NODE_ENV !== "production" && (c._instance = null, ch(c)), delete c._container.__vue_app__) : k.NODE_ENV !== "production" && R("Cannot unmount an app that is not mounted.");
      },
      provide(f, u) {
        return k.NODE_ENV !== "production" && f in r.provides && (ge(r.provides, f) ? R(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ) : R(
          `App already provides property with key "${String(f)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[f] = u, c;
      },
      runWithContext(f) {
        const u = ts;
        ts = c;
        try {
          return f();
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
    k.NODE_ENV !== "production" && R("provide() can only be used inside setup().");
  else {
    let n = We.provides;
    const s = We.parent && We.parent.provides;
    s === n && (n = We.provides = Object.create(s)), n[e] = t;
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
    k.NODE_ENV !== "production" && R(`injection "${String(e)}" not found.`);
  } else k.NODE_ENV !== "production" && R("inject() can only be used inside setup() or functional components.");
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
  k.NODE_ENV !== "production" && Ku(t || {}, o, e), n ? e.props = s ? o : su(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
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
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let p = f[u];
        if (Kr(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (ge(r, p))
            m !== r[p] && (r[p] = m, c = !0);
          else {
            const v = Ce(p);
            o[v] = Di(
              a,
              l,
              v,
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
    let f;
    for (const u in l)
      (!t || // for camelCase
      !ge(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = st(u)) === u || !ge(t, f))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[u] = Di(
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
  c && nn(e.attrs, "set", ""), k.NODE_ENV !== "production" && Ku(t || {}, o, e);
}
function qu(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (An(a))
        continue;
      const c = t[a];
      let f;
      o && ge(o, f = Ce(a)) ? !r || !r.includes(f) ? n[f] = c : (l || (l = {}))[f] = c : Kr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, i = !0);
    }
  if (r) {
    const a = ce(n), c = l || pe;
    for (let f = 0; f < r.length; f++) {
      const u = r[f];
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
          const f = as(o);
          s = c[n] = a.call(
            null,
            t
          ), f();
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
    const f = (u) => {
      a = !0;
      const [p, m] = zu(u, t, !0);
      fe(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !a)
    return me(e) && s.set(e, ys), ys;
  if (Y(r))
    for (let f = 0; f < r.length; f++) {
      k.NODE_ENV !== "production" && !le(r[f]) && R("props must be strings when using array syntax.", r[f]);
      const u = Ce(r[f]);
      Oa(u) && (i[u] = pe);
    }
  else if (r) {
    k.NODE_ENV !== "production" && !me(r) && R("invalid props options", r);
    for (const f in r) {
      const u = Ce(f);
      if (Oa(u)) {
        const p = r[f], m = i[u] = Y(p) || oe(p) ? { type: p } : fe({}, p), v = m.type;
        let h = !1, $ = !0;
        if (Y(v))
          for (let x = 0; x < v.length; ++x) {
            const y = v[x], g = oe(y) && y.name;
            if (g === "Boolean") {
              h = !0;
              break;
            } else g === "String" && ($ = !1);
          }
        else
          h = oe(v) && v.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = h, m[
          1
          /* shouldCastTrue */
        ] = $, (h || ge(m, "default")) && l.push(u);
      }
    }
  }
  const c = [i, l];
  return me(e) && s.set(e, c), c;
}
function Oa(e) {
  return e[0] !== "$" && !An(e) ? !0 : (k.NODE_ENV !== "production" && R(`Invalid prop name: "${e}" is a reserved property.`), !1);
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
      k.NODE_ENV !== "production" ? jt(s) : s,
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
      const f = Y(r) ? r : [r], u = [];
      for (let p = 0; p < f.length && !c; p++) {
        const { valid: m, expectedType: v } = Nm(t, f[p]);
        u.push(v || ""), c = m;
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
  const s = Pe((...o) => (k.NODE_ENV !== "production" && We && !(n === null && Be) && !(n && n.root !== We.root) && R(
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
      k.NODE_ENV !== "production" && R(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Tl(r);
      t[o] = () => i;
    }
  }
}, Gu = (e, t) => {
  k.NODE_ENV !== "production" && !Bs(e.vnode) && R(
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
    l ? k.NODE_ENV !== "production" && Ht ? (Vi(o, t, n), nn(e, "set", "$slots")) : n && l === 1 ? r = !1 : Vi(o, t, n) : (r = !t.$stable, Wu(t, o)), i = t;
  } else t && (Gu(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !$l(l) && i[l] == null && delete o[l];
};
let zs, Dn;
function cn(e, t) {
  e.appContext.config.performance && pr() && Dn.mark(`vue-${t}-${e.uid}`), k.NODE_ENV !== "production" && fh(e, t, pr() ? Dn.now() : Date.now());
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
  k.NODE_ENV !== "production" && ph(e, t, pr() ? Dn.now() : Date.now());
}
function pr() {
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
const qe = ad;
function Yu(e) {
  return Xu(e);
}
function Ju(e) {
  return Xu(e, Nh);
}
function Xu(e, t) {
  Tm();
  const n = ko();
  n.__VUE__ = !0, k.NODE_ENV !== "production" && gl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: f,
    parentNode: u,
    nextSibling: p,
    setScopeId: m = De,
    insertStaticContent: v
  } = e, h = (E, V, M, H = null, F = null, B = null, X = void 0, G = null, W = k.NODE_ENV !== "production" && Ht ? !1 : !!V.dynamicChildren) => {
    if (E === V)
      return;
    E && !Bt(E, V) && (H = Io(E), En(E, F, B, !0), E = null), V.patchFlag === -2 && (W = !1, V.dynamicChildren = null);
    const { type: U, ref: re, shapeFlag: Q } = V;
    switch (U) {
      case on:
        $(E, V, M, H);
        break;
      case Ve:
        x(E, V, M, H);
        break;
      case Mn:
        E == null ? y(V, M, H, X) : k.NODE_ENV !== "production" && g(E, V, M, X);
        break;
      case ie:
        P(
          E,
          V,
          M,
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
          V,
          M,
          H,
          F,
          B,
          X,
          G,
          W
        ) : Q & 6 ? z(
          E,
          V,
          M,
          H,
          F,
          B,
          X,
          G,
          W
        ) : Q & 64 || Q & 128 ? U.process(
          E,
          V,
          M,
          H,
          F,
          B,
          X,
          G,
          W,
          ps
        ) : k.NODE_ENV !== "production" && R("Invalid VNode type:", U, `(${typeof U})`);
    }
    re != null && F ? ws(re, E && E.ref, B, V || E, !V) : re == null && E && E.ref != null && ws(E.ref, null, B, E, !0);
  }, $ = (E, V, M, H) => {
    if (E == null)
      s(
        V.el = l(V.children),
        M,
        H
      );
    else {
      const F = V.el = E.el;
      V.children !== E.children && c(F, V.children);
    }
  }, x = (E, V, M, H) => {
    E == null ? s(
      V.el = a(V.children || ""),
      M,
      H
    ) : V.el = E.el;
  }, y = (E, V, M, H) => {
    [E.el, E.anchor] = v(
      E.children,
      V,
      M,
      H,
      E.el,
      E.anchor
    );
  }, g = (E, V, M, H) => {
    if (V.children !== E.children) {
      const F = p(E.anchor);
      _(E), [V.el, V.anchor] = v(
        V.children,
        M,
        F,
        H
      );
    } else
      V.el = E.el, V.anchor = E.anchor;
  }, C = ({ el: E, anchor: V }, M, H) => {
    let F;
    for (; E && E !== V; )
      F = p(E), s(E, M, H), E = F;
    s(V, M, H);
  }, _ = ({ el: E, anchor: V }) => {
    let M;
    for (; E && E !== V; )
      M = p(E), o(E), E = M;
    o(V);
  }, A = (E, V, M, H, F, B, X, G, W) => {
    V.type === "svg" ? X = "svg" : V.type === "math" && (X = "mathml"), E == null ? S(
      V,
      M,
      H,
      F,
      B,
      X,
      G,
      W
    ) : T(
      E,
      V,
      F,
      B,
      X,
      G,
      W
    );
  }, S = (E, V, M, H, F, B, X, G) => {
    let W, U;
    const { props: re, shapeFlag: Q, transition: se, dirs: ae } = E;
    if (W = E.el = i(
      E.type,
      B,
      re && re.is,
      re
    ), Q & 8 ? f(W, E.children) : Q & 16 && b(
      E.children,
      W,
      null,
      H,
      F,
      hi(E, B),
      X,
      G
    ), ae && en(E, null, H, "created"), O(W, E, E.scopeId, X, H), re) {
      for (const Oe in re)
        Oe !== "value" && !An(Oe) && r(W, Oe, null, re[Oe], B, H);
      "value" in re && r(W, "value", null, re.value, B), (U = re.onVnodeBeforeMount) && _t(U, H, E);
    }
    k.NODE_ENV !== "production" && (os(W, "__vnode", E, !0), os(W, "__vueParentComponent", H, !0)), ae && en(E, null, H, "beforeMount");
    const ye = Qu(F, se);
    ye && se.beforeEnter(W), s(W, V, M), ((U = re && re.onVnodeMounted) || ye || ae) && qe(() => {
      U && _t(U, H, E), ye && se.enter(W), ae && en(E, null, H, "mounted");
    }, F);
  }, O = (E, V, M, H, F) => {
    if (M && m(E, M), H)
      for (let B = 0; B < H.length; B++)
        m(E, H[B]);
    if (F) {
      let B = F.subTree;
      if (k.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && (B = Wr(B.children) || B), V === B || gr(B.type) && (B.ssContent === V || B.ssFallback === V)) {
        const X = F.vnode;
        O(
          E,
          X,
          X.scopeId,
          X.slotScopeIds,
          F.parent
        );
      }
    }
  }, b = (E, V, M, H, F, B, X, G, W = 0) => {
    for (let U = W; U < E.length; U++) {
      const re = E[U] = G ? On(E[U]) : mt(E[U]);
      h(
        null,
        re,
        V,
        M,
        H,
        F,
        B,
        X,
        G
      );
    }
  }, T = (E, V, M, H, F, B, X) => {
    const G = V.el = E.el;
    k.NODE_ENV !== "production" && (G.__vnode = V);
    let { patchFlag: W, dynamicChildren: U, dirs: re } = V;
    W |= E.patchFlag & 16;
    const Q = E.props || pe, se = V.props || pe;
    let ae;
    if (M && Un(M, !1), (ae = se.onVnodeBeforeUpdate) && _t(ae, M, V, E), re && en(V, E, M, "beforeUpdate"), M && Un(M, !0), k.NODE_ENV !== "production" && Ht && (W = 0, X = !1, U = null), (Q.innerHTML && se.innerHTML == null || Q.textContent && se.textContent == null) && f(G, ""), U ? (I(
      E.dynamicChildren,
      U,
      G,
      M,
      H,
      hi(V, F),
      B
    ), k.NODE_ENV !== "production" && ro(E, V)) : X || xe(
      E,
      V,
      G,
      null,
      M,
      H,
      hi(V, F),
      B,
      !1
    ), W > 0) {
      if (W & 16)
        D(G, Q, se, M, F);
      else if (W & 2 && Q.class !== se.class && r(G, "class", null, se.class, F), W & 4 && r(G, "style", Q.style, se.style, F), W & 8) {
        const ye = V.dynamicProps;
        for (let Oe = 0; Oe < ye.length; Oe++) {
          const Ne = ye[Oe], vt = Q[Ne], et = se[Ne];
          (et !== vt || Ne === "value") && r(G, Ne, vt, et, F, M);
        }
      }
      W & 1 && E.children !== V.children && f(G, V.children);
    } else !X && U == null && D(G, Q, se, M, F);
    ((ae = se.onVnodeUpdated) || re) && qe(() => {
      ae && _t(ae, M, V, E), re && en(V, E, M, "updated");
    }, H);
  }, I = (E, V, M, H, F, B, X) => {
    for (let G = 0; G < V.length; G++) {
      const W = E[G], U = V[G], re = (
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
          M
        )
      );
      h(
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
  }, D = (E, V, M, H, F) => {
    if (V !== M) {
      if (V !== pe)
        for (const B in V)
          !An(B) && !(B in M) && r(
            E,
            B,
            V[B],
            null,
            F,
            H
          );
      for (const B in M) {
        if (An(B)) continue;
        const X = M[B], G = V[B];
        X !== G && B !== "value" && r(E, B, G, X, F, H);
      }
      "value" in M && r(E, "value", V.value, M.value, F);
    }
  }, P = (E, V, M, H, F, B, X, G, W) => {
    const U = V.el = E ? E.el : l(""), re = V.anchor = E ? E.anchor : l("");
    let { patchFlag: Q, dynamicChildren: se, slotScopeIds: ae } = V;
    k.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ht || Q & 2048) && (Q = 0, W = !1, se = null), ae && (G = G ? G.concat(ae) : ae), E == null ? (s(U, M, H), s(re, M, H), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      M,
      re,
      F,
      B,
      X,
      G,
      W
    )) : Q > 0 && Q & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (I(
      E.dynamicChildren,
      se,
      M,
      F,
      B,
      X,
      G
    ), k.NODE_ENV !== "production" ? ro(E, V) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (V.key != null || F && V === F.subTree) && ro(
        E,
        V,
        !0
        /* shallow */
      )
    )) : xe(
      E,
      V,
      M,
      re,
      F,
      B,
      X,
      G,
      W
    );
  }, z = (E, V, M, H, F, B, X, G, W) => {
    V.slotScopeIds = G, E == null ? V.shapeFlag & 512 ? F.ctx.activate(
      V,
      M,
      H,
      X,
      W
    ) : K(
      V,
      M,
      H,
      F,
      B,
      X,
      W
    ) : ee(E, V, W);
  }, K = (E, V, M, H, F, B, X) => {
    const G = E.component = gd(
      E,
      H,
      F
    );
    if (k.NODE_ENV !== "production" && G.type.__hmrId && oh(G), k.NODE_ENV !== "production" && (bs(E), cn(G, "mount")), Bs(E) && (G.ctx.renderer = ps), k.NODE_ENV !== "production" && cn(G, "init"), yd(G, !1, X), k.NODE_ENV !== "production" && un(G, "init"), k.NODE_ENV !== "production" && Ht && (E.el = null), G.asyncDep) {
      if (F && F.registerDep(G, ne, X), !E.el) {
        const W = G.subTree = ue(Ve);
        x(null, W, V, M), E.placeholder = W.el;
      }
    } else
      ne(
        G,
        E,
        V,
        M,
        F,
        B,
        X
      );
    k.NODE_ENV !== "production" && (_s(), un(G, "mount"));
  }, ee = (E, V, M) => {
    const H = V.component = E.component;
    if (Fm(E, V, M))
      if (H.asyncDep && !H.asyncResolved) {
        k.NODE_ENV !== "production" && bs(V), te(H, V, M), k.NODE_ENV !== "production" && _s();
        return;
      } else
        H.next = V, H.update();
    else
      V.el = E.el, H.vnode = V;
  }, ne = (E, V, M, H, F, B, X) => {
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
        let Ne = Q, vt;
        k.NODE_ENV !== "production" && bs(Q || E.vnode), Un(E, !1), Q ? (Q.el = Oe.el, te(E, Q, X)) : Q = Oe, se && Tn(se), (vt = Q.props && Q.props.onVnodeBeforeUpdate) && _t(vt, ye, Q, Oe), Un(E, !0), k.NODE_ENV !== "production" && cn(E, "render");
        const et = Yo(E);
        k.NODE_ENV !== "production" && un(E, "render");
        const Rt = E.subTree;
        E.subTree = et, k.NODE_ENV !== "production" && cn(E, "patch"), h(
          Rt,
          et,
          // parent may have changed if it's in a teleport
          u(Rt.el),
          // anchor may have changed if it's in a fragment
          Io(Rt),
          E,
          F,
          B
        ), k.NODE_ENV !== "production" && un(E, "patch"), Q.el = et.el, Ne === null && Gr(E, et.el), ae && qe(ae, F), (vt = Q.props && Q.props.onVnodeUpdated) && qe(
          () => _t(vt, ye, Q, Oe),
          F
        ), k.NODE_ENV !== "production" && mu(E), k.NODE_ENV !== "production" && _s();
      } else {
        let Q;
        const { el: se, props: ae } = V, { bm: ye, m: Oe, parent: Ne, root: vt, type: et } = E, Rt = In(V);
        if (Un(E, !1), ye && Tn(ye), !Rt && (Q = ae && ae.onVnodeBeforeMount) && _t(Q, Ne, V), Un(E, !0), se && si) {
          const Nt = () => {
            k.NODE_ENV !== "production" && cn(E, "render"), E.subTree = Yo(E), k.NODE_ENV !== "production" && un(E, "render"), k.NODE_ENV !== "production" && cn(E, "hydrate"), si(
              se,
              E.subTree,
              E,
              F,
              null
            ), k.NODE_ENV !== "production" && un(E, "hydrate");
          };
          Rt && et.__asyncHydrate ? et.__asyncHydrate(
            se,
            E,
            Nt
          ) : Nt();
        } else {
          vt.ce && // @ts-expect-error _def is private
          vt.ce._def.shadowRoot !== !1 && vt.ce._injectChildStyle(et), k.NODE_ENV !== "production" && cn(E, "render");
          const Nt = E.subTree = Yo(E);
          k.NODE_ENV !== "production" && un(E, "render"), k.NODE_ENV !== "production" && cn(E, "patch"), h(
            null,
            Nt,
            M,
            H,
            E,
            F,
            B
          ), k.NODE_ENV !== "production" && un(E, "patch"), V.el = Nt.el;
        }
        if (Oe && qe(Oe, F), !Rt && (Q = ae && ae.onVnodeMounted)) {
          const Nt = V;
          qe(
            () => _t(Q, Ne, Nt),
            F
          );
        }
        (V.shapeFlag & 256 || Ne && In(Ne.vnode) && Ne.vnode.shapeFlag & 256) && E.a && qe(E.a, F), E.isMounted = !0, k.NODE_ENV !== "production" && ki(E), V = M = H = null;
      }
    };
    E.scope.on();
    const W = E.effect = new fo(G);
    E.scope.off();
    const U = E.update = W.run.bind(W), re = E.job = W.runIfDirty.bind(W);
    re.i = E, re.id = E.uid, W.scheduler = () => jr(re), Un(E, !0), k.NODE_ENV !== "production" && (W.onTrack = E.rtc ? (Q) => Tn(E.rtc, Q) : void 0, W.onTrigger = E.rtg ? (Q) => Tn(E.rtg, Q) : void 0), U();
  }, te = (E, V, M) => {
    V.component = E;
    const H = E.vnode.props;
    E.vnode = V, E.next = null, bm(E, V.props, H, M), $m(E, V.children, M), Wt(), ha(E), Gt();
  }, xe = (E, V, M, H, F, B, X, G, W = !1) => {
    const U = E && E.children, re = E ? E.shapeFlag : 0, Q = V.children, { patchFlag: se, shapeFlag: ae } = V;
    if (se > 0) {
      if (se & 128) {
        $t(
          U,
          Q,
          M,
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
          M,
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
    ae & 8 ? (re & 16 && Hs(U, F, B), Q !== U && f(M, Q)) : re & 16 ? ae & 16 ? $t(
      U,
      Q,
      M,
      H,
      F,
      B,
      X,
      G,
      W
    ) : Hs(U, F, B, !0) : (re & 8 && f(M, ""), ae & 16 && b(
      Q,
      M,
      H,
      F,
      B,
      X,
      G,
      W
    ));
  }, gt = (E, V, M, H, F, B, X, G, W) => {
    E = E || ys, V = V || ys;
    const U = E.length, re = V.length, Q = Math.min(U, re);
    let se;
    for (se = 0; se < Q; se++) {
      const ae = V[se] = W ? On(V[se]) : mt(V[se]);
      h(
        E[se],
        ae,
        M,
        null,
        F,
        B,
        X,
        G,
        W
      );
    }
    U > re ? Hs(
      E,
      F,
      B,
      !0,
      !1,
      Q
    ) : b(
      V,
      M,
      H,
      F,
      B,
      X,
      G,
      W,
      Q
    );
  }, $t = (E, V, M, H, F, B, X, G, W) => {
    let U = 0;
    const re = V.length;
    let Q = E.length - 1, se = re - 1;
    for (; U <= Q && U <= se; ) {
      const ae = E[U], ye = V[U] = W ? On(V[U]) : mt(V[U]);
      if (Bt(ae, ye))
        h(
          ae,
          ye,
          M,
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
      const ae = E[Q], ye = V[se] = W ? On(V[se]) : mt(V[se]);
      if (Bt(ae, ye))
        h(
          ae,
          ye,
          M,
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
        const ae = se + 1, ye = ae < re ? V[ae].el : H;
        for (; U <= se; )
          h(
            null,
            V[U] = W ? On(V[U]) : mt(V[U]),
            M,
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
        const dt = V[U] = W ? On(V[U]) : mt(V[U]);
        dt.key != null && (k.NODE_ENV !== "production" && Oe.has(dt.key) && R(
          "Duplicate keys found during update:",
          JSON.stringify(dt.key),
          "Make sure keys are unique."
        ), Oe.set(dt.key, U));
      }
      let Ne, vt = 0;
      const et = se - ye + 1;
      let Rt = !1, Nt = 0;
      const Us = new Array(et);
      for (U = 0; U < et; U++) Us[U] = 0;
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
          for (Ne = ye; Ne <= se; Ne++)
            if (Us[Ne - ye] === 0 && Bt(dt, V[Ne])) {
              Jt = Ne;
              break;
            }
        Jt === void 0 ? En(dt, F, B, !0) : (Us[Jt - ye] = U + 1, Jt >= Nt ? Nt = Jt : Rt = !0, h(
          dt,
          V[Jt],
          M,
          null,
          F,
          B,
          X,
          G,
          W
        ), vt++);
      }
      const oa = Rt ? Dm(Us) : ys;
      for (Ne = oa.length - 1, U = et - 1; U >= 0; U--) {
        const dt = ye + U, Jt = V[dt], ra = V[dt + 1], ia = dt + 1 < re ? (
          // #13559, fallback to el placeholder for unresolved async component
          ra.el || ra.placeholder
        ) : H;
        Us[U] === 0 ? h(
          null,
          Jt,
          M,
          ia,
          F,
          B,
          X,
          G,
          W
        ) : Rt && (Ne < 0 || U !== oa[Ne] ? Tt(Jt, M, ia, 2) : Ne--);
      }
    }
  }, Tt = (E, V, M, H, F = null) => {
    const { el: B, type: X, transition: G, children: W, shapeFlag: U } = E;
    if (U & 6) {
      Tt(E.component.subTree, V, M, H);
      return;
    }
    if (U & 128) {
      E.suspense.move(V, M, H);
      return;
    }
    if (U & 64) {
      X.move(E, V, M, ps);
      return;
    }
    if (X === ie) {
      s(B, V, M);
      for (let Q = 0; Q < W.length; Q++)
        Tt(W[Q], V, M, H);
      s(E.anchor, V, M);
      return;
    }
    if (X === Mn) {
      C(E, V, M);
      return;
    }
    if (H !== 2 && U & 1 && G)
      if (H === 0)
        G.beforeEnter(B), s(B, V, M), qe(() => G.enter(B), F);
      else {
        const { leave: Q, delayLeave: se, afterLeave: ae } = G, ye = () => {
          E.ctx.isUnmounted ? o(B) : s(B, V, M);
        }, Oe = () => {
          Q(B, () => {
            ye(), ae && ae();
          });
        };
        se ? se(B, ye, Oe) : Oe();
      }
    else
      s(B, V, M);
  }, En = (E, V, M, H = !1, F = !1) => {
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
    if (Q === -2 && (F = !1), G != null && (Wt(), ws(G, null, M, E, !0), Gt()), ae != null && (V.renderCache[ae] = void 0), re & 256) {
      V.ctx.deactivate(E);
      return;
    }
    const ye = re & 1 && se, Oe = !In(E);
    let Ne;
    if (Oe && (Ne = X && X.onVnodeBeforeUnmount) && _t(Ne, V, E), re & 6)
      Bf(E.component, M, H);
    else {
      if (re & 128) {
        E.suspense.unmount(M, H);
        return;
      }
      ye && en(E, null, V, "beforeUnmount"), re & 64 ? E.type.remove(
        E,
        V,
        M,
        ps,
        H
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== ie || Q > 0 && Q & 64) ? Hs(
        U,
        V,
        M,
        !1,
        !0
      ) : (B === ie && Q & 384 || !F && re & 16) && Hs(W, V, M), H && ei(E);
    }
    (Oe && (Ne = X && X.onVnodeUnmounted) || ye) && qe(() => {
      Ne && _t(Ne, V, E), ye && en(E, null, V, "unmounted");
    }, M);
  }, ei = (E) => {
    const { type: V, el: M, anchor: H, transition: F } = E;
    if (V === ie) {
      k.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && F && !F.persisted ? E.children.forEach((X) => {
        X.type === Ve ? o(X.el) : ei(X);
      }) : Ff(M, H);
      return;
    }
    if (V === Mn) {
      _(E);
      return;
    }
    const B = () => {
      o(M), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (E.shapeFlag & 1 && F && !F.persisted) {
      const { leave: X, delayLeave: G } = F, W = () => X(M, B);
      G ? G(E.el, B, W) : W();
    } else
      B();
  }, Ff = (E, V) => {
    let M;
    for (; E !== V; )
      M = p(E), o(E), E = M;
    o(V);
  }, Bf = (E, V, M) => {
    k.NODE_ENV !== "production" && E.type.__hmrId && rh(E);
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
    hr(W), hr(U), H && Tn(H), re && Y(Q) && Q.forEach((se) => {
      re.renderCache[se] = void 0;
    }), F.stop(), B && (B.flags |= 8, En(X, E, V, M)), G && qe(G, V), qe(() => {
      E.isUnmounted = !0;
    }, V), V && V.pendingBranch && !V.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === V.pendingId && (V.deps--, V.deps === 0 && V.resolve()), k.NODE_ENV !== "production" && dh(E);
  }, Hs = (E, V, M, H = !1, F = !1, B = 0) => {
    for (let X = B; X < E.length; X++)
      En(E[X], V, M, H, F);
  }, Io = (E) => {
    if (E.shapeFlag & 6)
      return Io(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const V = p(E.anchor || E.el), M = V && V[yu];
    return M ? p(M) : V;
  };
  let ti = !1;
  const sa = (E, V, M) => {
    E == null ? V._vnode && En(V._vnode, null, null, !0) : h(
      V._vnode || null,
      E,
      V,
      null,
      null,
      null,
      M
    ), V._vnode = E, ti || (ti = !0, ha(), cr(), ti = !1);
  }, ps = {
    p: h,
    um: En,
    m: Tt,
    r: ei,
    mt: K,
    mc: b,
    pc: xe,
    pbc: I,
    n: Io,
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
function ro(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Y(s) && Y(o))
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
    return e || k.NODE_ENV !== "production" && R(
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
    k.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function nd(e, t) {
  return $o(
    e,
    null,
    k.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function sn(e, t, n) {
  return k.NODE_ENV !== "production" && !oe(t) && R(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), $o(e, t, n);
}
function $o(e, t, n = pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  k.NODE_ENV !== "production" && !t && (s !== void 0 && R(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && R(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && R(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  k.NODE_ENV !== "production" && (l.onWarn = R);
  const a = t && s || !t && r !== "post";
  let c;
  if (Os) {
    if (r === "sync") {
      const m = td();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = De, m.resume = De, m.pause = De, m;
    }
  }
  const f = We;
  l.call = (m, v, h) => Mt(m, f, v, h);
  let u = !1;
  r === "post" ? l.scheduler = (m) => {
    qe(m, f && f.suspense);
  } : r !== "sync" && (u = !0, l.scheduler = (m, v) => {
    v ? m() : jr(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, f && (m.id = f.uid, m.i = f));
  };
  const p = Yp(e, t, l);
  return Os && (c ? c.push(p) : a && p()), p;
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
  if (k.NODE_ENV !== "production" && !s)
    return R("useModel() called without active instance."), q();
  const o = Ce(t);
  if (k.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return R(`useModel() called with prop "${t}" which is not declared.`), q();
  const r = st(t), i = od(e, o), l = lu((a, c) => {
    let f, u = pe, p;
    return nd(() => {
      const m = e[o];
      pt(f, m) && (f = m, c());
    }), {
      get() {
        return a(), n.get ? n.get(f) : f;
      },
      set(m) {
        const v = n.set ? n.set(m) : m;
        if (!pt(v, f) && !(u !== pe && pt(m, u)))
          return;
        const h = s.vnode.props;
        h && // check if parent has passed v-model
        (t in h || o in h || r in h) && (`onUpdate:${t}` in h || `onUpdate:${o}` in h || `onUpdate:${r}` in h) || (f = m, c()), s.emit(`update:${t}`, v), pt(m, v) && pt(m, u) && !pt(v, p) && c(), u = m, p = v;
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
  if (k.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [u]
    } = e;
    if (f)
      if (!(t in f))
        (!u || !(tn(Ce(t)) in u)) && R(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${tn(Ce(t))}" prop.`
        );
      else {
        const p = f[t];
        oe(p) && (p(...n) || R(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && od(s, t.slice(7));
  if (i && (i.trim && (o = n.map((f) => le(f) ? f.trim() : f)), i.number && (o = n.map(sr))), k.NODE_ENV !== "production" && hh(e, t, o), k.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && s[tn(f)] && R(
      `Event "${f}" is emitted in component ${Yr(
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
      const f = rd(c, t, !0);
      f && (l = !0, fe(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (me(e) && s.set(e, null), null) : (Y(r) ? r.forEach((a) => i[a] = null) : fe(i, r), me(e) && s.set(e, i), i);
}
function Kr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, st(t)) || ge(e, t));
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
    renderCache: f,
    props: u,
    data: p,
    setupState: m,
    ctx: v,
    inheritAttrs: h
  } = e, $ = go(e);
  let x, y;
  k.NODE_ENV !== "production" && (Ai = !1);
  try {
    if (n.shapeFlag & 4) {
      const _ = o || s, A = k.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(_, {
        get(S, O, b) {
          return R(
            `Property '${String(
              O
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(S, O, b);
        }
      }) : _;
      x = mt(
        c.call(
          A,
          _,
          f,
          k.NODE_ENV !== "production" ? jt(u) : u,
          m,
          p,
          v
        )
      ), y = l;
    } else {
      const _ = t;
      k.NODE_ENV !== "production" && l === u && mr(), x = mt(
        _.length > 1 ? _(
          k.NODE_ENV !== "production" ? jt(u) : u,
          k.NODE_ENV !== "production" ? {
            get attrs() {
              return mr(), jt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : _(
          k.NODE_ENV !== "production" ? jt(u) : u,
          null
        )
      ), y = t.props ? l : Rm(l);
    }
  } catch (_) {
    io.length = 0, Bn(_, e, 1), x = ue(Ve);
  }
  let g = x, C;
  if (k.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && ([g, C] = id(x)), y && h !== !1) {
    const _ = Object.keys(y), { shapeFlag: A } = g;
    if (_.length) {
      if (A & 7)
        r && _.some(nr) && (y = Lm(
          y,
          r
        )), g = Pt(g, y, !1, !0);
      else if (k.NODE_ENV !== "production" && !Ai && g.type !== Ve) {
        const S = Object.keys(l), O = [], b = [];
        for (let T = 0, I = S.length; T < I; T++) {
          const D = S[T];
          vn(D) ? nr(D) || O.push(D[2].toLowerCase() + D.slice(3)) : b.push(D);
        }
        b.length && R(
          `Extraneous non-props attributes (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), O.length && R(
          `Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (k.NODE_ENV !== "production" && !Da(g) && R(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = Pt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (k.NODE_ENV !== "production" && !Da(g) && R(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(g, n.transition)), k.NODE_ENV !== "production" && C ? C(g) : x = g, go($), x;
}
const id = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Wr(t, !1);
  if (s) {
    if (k.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
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
    (!nr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Da = (e) => e.shapeFlag & 7 || e.type === Ve;
function Fm(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, c = r.emitsOptions;
  if (k.NODE_ENV !== "production" && (o || l) && Ht || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Va(s, i, c) : !!i;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const p = f[u];
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
    o: { createElement: f }
  } = a, u = f("div"), p = e.suspense = ld(
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
  ), xs(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Um(e, t, n, s, o, r, i, l, { p: a, um: c, o: { createElement: f } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, m = t.ssFallback, { activeBranch: v, pendingBranch: h, isInFallback: $, isHydrating: x } = u;
  if (h)
    u.pendingBranch = p, Bt(p, h) ? (a(
      h,
      p,
      u.hiddenContainer,
      null,
      o,
      u,
      r,
      i,
      l
    ), u.deps <= 0 ? u.resolve() : $ && (x || (a(
      v,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      r,
      i,
      l
    ), xs(u, m)))) : (u.pendingId = Ii++, x ? (u.isHydrating = !1, u.activeBranch = h) : c(h, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = f("div"), $ ? (a(
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
      v,
      m,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      r,
      i,
      l
    ), xs(u, m))) : v && Bt(p, v) ? (a(
      v,
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
  else if (v && Bt(p, v))
    a(
      v,
      p,
      n,
      s,
      o,
      u,
      r,
      i,
      l
    ), xs(u, p);
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
    const { timeout: y, pendingId: g } = u;
    y > 0 ? setTimeout(() => {
      u.pendingId === g && u.fallback(m);
    }, y) : y === 0 && u.fallback(m);
  }
}
let Aa = !1;
function ld(e, t, n, s, o, r, i, l, a, c, f = !1) {
  k.NODE_ENV !== "production" && !Aa && (Aa = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: m,
    n: v,
    o: { parentNode: h, remove: $ }
  } = c;
  let x;
  const y = Km(e);
  y && t && t.pendingBranch && (x = t.pendingId, t.deps++);
  const g = e.props ? or(e.props.timeout) : void 0;
  k.NODE_ENV !== "production" && hl(g, "Suspense timeout");
  const C = r, _ = {
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
    isInFallback: !f,
    isHydrating: f,
    isUnmounted: !1,
    effects: [],
    resolve(A = !1, S = !1) {
      if (k.NODE_ENV !== "production") {
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
        vnode: O,
        activeBranch: b,
        pendingBranch: T,
        pendingId: I,
        effects: D,
        parentComponent: P,
        container: z
      } = _;
      let K = !1;
      _.isHydrating ? _.isHydrating = !1 : A || (K = b && T.transition && T.transition.mode === "out-in", K && (b.transition.afterLeave = () => {
        I === _.pendingId && (p(
          T,
          z,
          r === C ? v(b) : r,
          0
        ), ks(D));
      }), b && (h(b.el) === z && (r = v(b)), m(b, P, _, !0)), K || p(T, z, r, 0)), xs(_, T), _.pendingBranch = null, _.isInFallback = !1;
      let ee = _.parent, ne = !1;
      for (; ee; ) {
        if (ee.pendingBranch) {
          ee.effects.push(...D), ne = !0;
          break;
        }
        ee = ee.parent;
      }
      !ne && !K && ks(D), _.effects = [], y && t && t.pendingBranch && x === t.pendingId && (t.deps--, t.deps === 0 && !S && t.resolve()), yo(O, "onResolve");
    },
    fallback(A) {
      if (!_.pendingBranch)
        return;
      const { vnode: S, activeBranch: O, parentComponent: b, container: T, namespace: I } = _;
      yo(S, "onFallback");
      const D = v(O), P = () => {
        _.isInFallback && (u(
          null,
          A,
          T,
          D,
          b,
          null,
          // fallback tree will not have suspense context
          I,
          l,
          a
        ), xs(_, A));
      }, z = A.transition && A.transition.mode === "out-in";
      z && (O.transition.afterLeave = P), _.isInFallback = !0, m(
        O,
        b,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), z || P();
    },
    move(A, S, O) {
      _.activeBranch && p(_.activeBranch, A, S, O), _.container = A;
    },
    next() {
      return _.activeBranch && v(_.activeBranch);
    },
    registerDep(A, S, O) {
      const b = !!_.pendingBranch;
      b && _.deps++;
      const T = A.vnode.el;
      A.asyncDep.catch((I) => {
        Bn(I, A, 0);
      }).then((I) => {
        if (A.isUnmounted || _.isUnmounted || _.pendingId !== A.suspenseId)
          return;
        A.asyncResolved = !0;
        const { vnode: D } = A;
        k.NODE_ENV !== "production" && bs(D), Bi(A, I, !1), T && (D.el = T);
        const P = !T && A.subTree.el;
        S(
          A,
          D,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          h(T || A.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          T ? null : v(A.subTree),
          _,
          i,
          O
        ), P && $(P), Gr(A, D.el), k.NODE_ENV !== "production" && _s(), b && --_.deps === 0 && _.resolve();
      });
    },
    unmount(A, S) {
      _.isUnmounted = !0, _.activeBranch && m(
        _.activeBranch,
        n,
        A,
        S
      ), _.pendingBranch && m(
        _.pendingBranch,
        n,
        A,
        S
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
  ), f = a(
    e,
    c.pendingBranch = t.ssContent,
    n,
    c,
    r,
    i
  );
  return c.deps === 0 && c.resolve(!1, !0), f;
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
    k.NODE_ENV !== "production" && !n && e.filter((s) => s !== xl).length > 0 && R("<Suspense> slots expect a single root node."), e = n;
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
const ie = Symbol.for("v-fgt"), on = Symbol.for("v-txt"), Ve = Symbol.for("v-cmt"), Mn = Symbol.for("v-stc"), io = [];
let rt = null;
function w(e = !1) {
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
  return e.dynamicChildren = is > 0 ? rt || ys : null, cd(), is > 0 && rt && rt.push(e), e;
}
function N(e, t, n, s, o, r) {
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
  if (k.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Wo.get(t.type);
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
), dd = ({ key: e }) => e ?? null, Jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || Ie(e) || oe(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, s = 0, o = null, r = e === ie ? 0 : 1, i = !1, l = !1) {
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
  return l ? (Dl(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), k.NODE_ENV !== "production" && a.key !== a.key && R("VNode created with invalid key (NaN). VNode type:", a.type), is > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  rt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && rt.push(a), a;
}
const ue = k.NODE_ENV !== "production" ? Gm : fd;
function fd(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === xl) && (k.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = Ve), ln(e)) {
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
    l && !le(l) && (t.class = we(l)), me(a) && (Ss(a) && !Y(a) && (a = fe({}, a)), t.style = Ge(a));
  }
  const i = le(e) ? 1 : gr(e) ? 128 : bu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return k.NODE_ENV !== "production" && i & 4 && Ss(e) && (e = ce(e), R(
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
  return e ? Ss(e) || Uu(e) ? fe({}, e) : e : null;
}
function Pt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, c = t ? md(o || {}, t) : o, f = {
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
    children: k.NODE_ENV !== "production" && i === -1 && Y(l) ? l.map(hd) : l,
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
    f,
    a.clone(f)
  ), f;
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
        t.class !== s.class && (t.class = we([t.class, s.class]));
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
  return k.NODE_ENV !== "production" ? r.ctx = Kh(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Pm.bind(null, r), e.ce && e.ce(r), r;
}
let We = null;
const ut = () => We || Be;
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
    (n) => We = n
  ), Ri = t(
    "__VUE_SSR_SETTERS__",
    (n) => Os = n
  );
}
const as = (e) => {
  const t = We;
  return vr(e), e.scope.on(), () => {
    e.scope.off(), vr(t);
  };
}, Li = () => {
  We && We.scope.off(), vr(null);
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
  if (k.NODE_ENV !== "production") {
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
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, so), k.NODE_ENV !== "production" && Wh(e);
  const { setup: o } = s;
  if (o) {
    Wt();
    const r = e.setupContext = o.length > 1 ? Ed(e) : null, i = as(e), l = ds(
      o,
      e,
      0,
      [
        k.NODE_ENV !== "production" ? jt(e.props) : e.props,
        r
      ]
    ), a = Dr(l);
    if (Gt(), i(), (a || e.sp) && !In(e) && El(e), a) {
      if (l.then(Li, Li), t)
        return l.then((c) => {
          Bi(e, c, t);
        }).catch((c) => {
          Bn(c, e, 0);
        });
      if (e.asyncDep = l, k.NODE_ENV !== "production" && !e.suspense) {
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
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (k.NODE_ENV !== "production" && ln(t) && R(
    "setup() should not return VNodes directly - return a render function instead."
  ), k.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = pl(t), k.NODE_ENV !== "production" && Gh(e)) : k.NODE_ENV !== "production" && t !== void 0 && R(
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
  k.NODE_ENV !== "production" && !s.render && e.render === De && !t && (!lo && s.template ? R(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : R("Component is missing template or render function: ", s));
}
const Ma = k.NODE_ENV !== "production" ? {
  get(e, t) {
    return mr(), ze(e, "get", ""), e[t];
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
    if (k.NODE_ENV !== "production" && (e.exposed && R("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Y(n) ? s = "array" : Ie(n) && (s = "ref")), s !== "object" && R(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (k.NODE_ENV !== "production") {
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
  if (k.NODE_ENV !== "production") {
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
  if (k.NODE_ENV === "production" || typeof window > "u")
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
          ["span", e, f(u)],
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
    const m = a(u, "computed");
    m && p.push(i("computed", m));
    const v = a(u, "inject");
    return v && p.push(i("injected", v)), p.push([
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
    const v = {};
    for (const h in u.ctx)
      c(m, h, p) && (v[h] = u.ctx[h]);
    return v;
  }
  function c(u, p, m) {
    const v = u[m];
    if (Y(v) && v.includes(p) || me(v) && p in v || u.extends && c(u.extends, p, m) || u.mixins && u.mixins.some((h) => c(h, p, m)))
      return !0;
  }
  function f(u) {
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
const Hi = "3.5.18", Me = k.NODE_ENV !== "production" ? R : De, s0 = Br, o0 = Ft, r0 = gl, i0 = {
  createComponentInstance: gd,
  setupComponent: yd,
  renderComponentRoot: Yo,
  setCurrentRenderingInstance: go,
  isVNode: ln,
  normalizeVNode: mt,
  getComponentPublicInstance: To,
  ensureValidVNode: kl,
  pushWarningContext: bs,
  popWarningContext: _s
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
}, wn = "transition", Ks = "animation", Ts = Symbol("_vtc"), kd = {
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
  for (const D in e)
    D in kd || (t[D] = e[D]);
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
    appearToClass: f = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, v = m0(o), h = v && v[0], $ = v && v[1], {
    onBeforeEnter: x,
    onEnter: y,
    onEnterCancelled: g,
    onLeave: C,
    onLeaveCancelled: _,
    onBeforeAppear: A = x,
    onAppear: S = y,
    onAppearCancelled: O = g
  } = t, b = (D, P, z, K) => {
    D._enterCancelled = K, Nn(D, P ? f : l), Nn(D, P ? c : i), z && z();
  }, T = (D, P) => {
    D._isLeaving = !1, Nn(D, u), Nn(D, m), Nn(D, p), P && P();
  }, I = (D) => (P, z) => {
    const K = D ? S : y, ee = () => b(P, D, z);
    qn(K, [P, ee]), Fa(() => {
      Nn(P, D ? a : r), Xt(P, D ? f : l), La(K) || Ba(P, s, h, ee);
    });
  };
  return fe(t, {
    onBeforeEnter(D) {
      qn(x, [D]), Xt(D, r), Xt(D, i);
    },
    onBeforeAppear(D) {
      qn(A, [D]), Xt(D, a), Xt(D, c);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(D, P) {
      D._isLeaving = !0;
      const z = () => T(D, P);
      Xt(D, u), D._enterCancelled ? (Xt(D, p), qi()) : (qi(), Xt(D, p)), Fa(() => {
        D._isLeaving && (Nn(D, u), Xt(D, m), La(C) || Ba(D, s, $, z));
      }), qn(C, [D, z]);
    },
    onEnterCancelled(D) {
      b(D, !1, void 0, !0), qn(g, [D]);
    },
    onAppearCancelled(D) {
      b(D, !0, void 0, !0), qn(O, [D]);
    },
    onLeaveCancelled(D) {
      T(D), qn(_, [D]);
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
  const t = or(e);
  return ke.NODE_ENV !== "production" && hl(t, "<transition> explicit duration"), t;
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
  let f = 0;
  const u = () => {
    e.removeEventListener(c, p), r();
  }, p = (m) => {
    m.target === e && ++f >= a && u();
  };
  setTimeout(() => {
    f < a && u();
  }, l + 1), e.addEventListener(c, p);
}
function $d(e, t) {
  const n = window.getComputedStyle(e), s = (v) => (n[v] || "").split(", "), o = s(`${wn}Delay`), r = s(`${wn}Duration`), i = ja(o, r), l = s(`${Ks}Delay`), a = s(`${Ks}Duration`), c = ja(l, a);
  let f = null, u = 0, p = 0;
  t === wn ? i > 0 && (f = wn, u = i, p = r.length) : t === Ks ? c > 0 && (f = Ks, u = c, p = a.length) : (u = Math.max(i, c), f = u > 0 ? i > c ? wn : Ks : null, p = f ? f === wn ? r.length : a.length : 0);
  const m = f === wn && /\b(transform|all)(,|$)/.test(
    s(`${wn}Property`).toString()
  );
  return {
    type: f,
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
  const s = e[Ts];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yr = Symbol("_vod"), Td = Symbol("_vsh"), Al = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[yr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ws(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ws(e, !0), s.enter(e)) : s.leave(e, () => {
      Ws(e, !1);
    }) : Ws(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ws(e, t);
  }
};
ke.NODE_ENV !== "production" && (Al.name = "show");
function Ws(e, t) {
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
    br(e.el, t);
  else if (e.type === ie)
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
  t === "class" ? v0(e, s, i) : t === "style" ? E0(e, n, s) : vn(t) ? nr(t) || S0(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : V0(e, t, s, i)) ? (Wa(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ka(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? Wa(e, Ce(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ka(e, t, s, i));
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
  constructor(t, n = {}, s = Lt) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Lt ? this._root = this.shadowRoot : (ke.NODE_ENV !== "production" && this.shadowRoot && Me(
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
        ge(this, s) ? ke.NODE_ENV !== "production" && Me(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
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
            const c = n + "-s", f = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let u;
            for (; u = f.nextNode(); )
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
function Ki(e) {
  const t = ut(), n = t && t.ce;
  return n || (ke.NODE_ENV !== "production" && Me(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function M0() {
  const e = ke.NODE_ENV !== "production" ? Ki("useShadowRoot") : Ki();
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
        const c = a.el, f = c.style;
        Xt(c, i), f.transform = f.webkitTransform = f.transitionDuration = "";
        const u = c[_r] = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", u), c[_r] = null, Nn(c, i));
        };
        c.addEventListener("transitionend", u);
      }), o = [];
    }), () => {
      const i = ce(e), l = Od(i);
      let a = i.tag || ie;
      if (o = [], r)
        for (let c = 0; c < r.length; c++) {
          const f = r[c];
          f.el && f.el instanceof Element && (o.push(f), yn(
            f,
            Cs(
              f,
              l,
              s,
              n
            )
          ), Vd.set(
            f,
            f.el.getBoundingClientRect()
          ));
        }
      r = t.default ? Ur(t.default()) : [];
      for (let c = 0; c < r.length; c++) {
        const f = r[c];
        f.key != null ? yn(
          f,
          Cs(f, l, s, n)
        ) : ke.NODE_ENV !== "production" && f.type !== on && Me("<TransitionGroup> children must be keyed.");
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
      n && (l = l.trim()), r && (l = sr(l)), e[At](l);
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
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? sr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Le = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[At] = Ln(n), hn(e, "change", () => {
      const s = e._modelValue, o = Vs(e), r = e.checked, i = e[At];
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
    e[At] = Ln(n), tc(e, t, n);
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
        (i) => n ? sr(Vs(i)) : Vs(i)
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
    ke.NODE_ENV !== "production" && Me(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = Vs(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((c) => String(c) === String(l)) : i.selected = Ir(t, l) > -1;
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
}, Lt = (...e) => {
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
  Fragment: ie,
  KeepAlive: Lh,
  ReactiveEffect: fo,
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
  createElementVNode: d,
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
  inject: oo,
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
  normalizeClass: we,
  normalizeProps: ep,
  normalizeStyle: Ge,
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
  onUnmounted: Ct,
  onUpdated: zr,
  onWatcherCleanup: cu,
  openBlock: w,
  popScopeId: gh,
  provide: Bu,
  proxyRefs: pl,
  pushScopeId: mh,
  queuePostFlushCb: ks,
  reactive: Ns,
  readonly: Lr,
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
  unref: Co,
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
  withKeys: Er,
  withMemo: n0,
  withModifiers: zt,
  withScopeId: vh
}, Symbol.toStringTag, { value: "Module" }));
var J = {};
const bo = Symbol(J.NODE_ENV !== "production" ? "Fragment" : ""), co = Symbol(J.NODE_ENV !== "production" ? "Teleport" : ""), Ml = Symbol(J.NODE_ENV !== "production" ? "Suspense" : ""), wr = Symbol(J.NODE_ENV !== "production" ? "KeepAlive" : ""), Kd = Symbol(
  J.NODE_ENV !== "production" ? "BaseTransition" : ""
), cs = Symbol(J.NODE_ENV !== "production" ? "openBlock" : ""), Wd = Symbol(J.NODE_ENV !== "production" ? "createBlock" : ""), Gd = Symbol(
  J.NODE_ENV !== "production" ? "createElementBlock" : ""
), Pl = Symbol(J.NODE_ENV !== "production" ? "createVNode" : ""), Rl = Symbol(
  J.NODE_ENV !== "production" ? "createElementVNode" : ""
), Do = Symbol(
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
), xr = Symbol(J.NODE_ENV !== "production" ? "mergeProps" : ""), zl = Symbol(
  J.NODE_ENV !== "production" ? "normalizeClass" : ""
), Kl = Symbol(
  J.NODE_ENV !== "production" ? "normalizeStyle" : ""
), _o = Symbol(
  J.NODE_ENV !== "production" ? "normalizeProps" : ""
), Vo = Symbol(
  J.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Wl = Symbol(J.NODE_ENV !== "production" ? "toHandlers" : ""), Wi = Symbol(J.NODE_ENV !== "production" ? "camelize" : ""), Q0 = Symbol(J.NODE_ENV !== "production" ? "capitalize" : ""), Gi = Symbol(
  J.NODE_ENV !== "production" ? "toHandlerKey" : ""
), Nr = Symbol(
  J.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Z0 = Symbol(J.NODE_ENV !== "production" ? "pushScopeId" : ""), eg = Symbol(J.NODE_ENV !== "production" ? "popScopeId" : ""), Gl = Symbol(J.NODE_ENV !== "production" ? "withCtx" : ""), tg = Symbol(J.NODE_ENV !== "production" ? "unref" : ""), ng = Symbol(J.NODE_ENV !== "production" ? "isRef" : ""), Yl = Symbol(J.NODE_ENV !== "production" ? "withMemo" : ""), Qd = Symbol(J.NODE_ENV !== "production" ? "isMemoSame" : ""), As = {
  [bo]: "Fragment",
  [co]: "Teleport",
  [Ml]: "Suspense",
  [wr]: "KeepAlive",
  [Kd]: "BaseTransition",
  [cs]: "openBlock",
  [Wd]: "createBlock",
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
  [Kl]: "normalizeStyle",
  [_o]: "normalizeProps",
  [Vo]: "guardReactiveProps",
  [Wl]: "toHandlers",
  [Wi]: "camelize",
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
function Eo(e, t, n, s, o, r, i, l = !1, a = !1, c = !1, f = Ot) {
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
    loc: f
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
  return J.NODE_ENV !== "production" && o && kr(e, t, n, ...s), o;
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
  J.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Se(e, t, n, s) {
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
      return co;
    case "Suspense":
    case "suspense":
      return Ml;
    case "KeepAlive":
    case "keep-alive":
      return wr;
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
    s = Vt([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !le(l) && l.type === 15 ? uc(t, l) || l.properties.unshift(t) : o.callee === Wl ? s = Ke(n.helper(xr), [
      Vt([t]),
      o
    ]) : o.arguments.unshift(Vt([t])), !s && (s = o);
  } else o.type === 15 ? (uc(t, o) || o.properties.unshift(t), s = o) : (s = Ke(n.helper(xr), [
    Vt([t]),
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
  comments: J.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ve = of, No = null, gn = "", nt = null, he = null, bt = "", dn = -1, zn = -1, Zl = 0, $n = !1, Xi = null;
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
    o.includes("&") && (o = ve.decodeEntities(o, !1)), Qi({
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
        if (bt.includes("&") && (bt = ve.decodeEntities(
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
      Qo(Ae[t], e - 1), yt(24, Ae[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ae[0].ns !== 0 ? Uo(Qe(e, t), e, t) : yt(1, e - 9);
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
  const [, o, r] = s, i = (u, p, m = !1) => {
    const v = t.start.offset + p, h = v + u.length;
    return Zo(
      u,
      !1,
      Fe(v, h),
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
  const c = o.indexOf(a), f = a.match(dc);
  if (f) {
    a = a.replace(dc, "").trim();
    const u = f[1].trim();
    let p;
    if (u && (p = n.indexOf(u, c + a.length), l.key = i(u, p, !0)), f[2]) {
      const m = f[2].trim();
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
  n === 0 && ve.isPreTag(t) && Zl++, ve.isVoidTag(t) ? Qo(nt, e) : (Ae.unshift(nt), (n === 1 || n === 2) && (Te.inXML = !0)), nt = null;
}
function Uo(e, t, n) {
  {
    const r = Ae[0] && Ae[0].tag;
    r !== "script" && r !== "style" && e.includes("&") && (e = ve.decodeEntities(e, !1));
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
      for (let f = 0; f < i.length; f++) {
        const u = i[f];
        if (u.type === 7 && (u.name === "if" ? a = !0 : u.name === "for" && (c = !0)), a && c) {
          kr(
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
      J.NODE_ENV !== "production" && kr(
        "COMPILER_NATIVE_TEMPLATE",
        ve,
        e.loc
      );
      const a = Ae[0] || No, c = a.children.indexOf(e);
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
  ve.onError(
    Se(e, Fe(t, t), void 0, n)
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
        const v = p.codegenNode;
        if (v.type === 13) {
          const h = v.patchFlag;
          if ((h === void 0 || h === 512 || h === 1) && df(p, n) >= 2) {
            const $ = ff(p);
            $ && (v.props = n.hoist($));
          }
          v.dynamicProps && (v.dynamicProps = n.hoist(v.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : kt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (J.NODE_ENV !== "production" ? ` /* ${eo[-1]} */` : "")
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
      const u = f(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = c(
        ns(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !Y(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = Et(e, "slot", !0), p = u && u.arg && f(t.codegenNode, u.arg);
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
  function f(u, p) {
    if (u.children && !Y(u.children) && u.children.type === 15) {
      const m = u.children.properties.find(
        (v) => v.key === p || v.key.content === p
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
              const f = kt(c.exp, t);
              if (f === 0)
                return n.set(e, 0), 0;
              f < i && (i = f);
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
  isCustomElement: f = De,
  expressionPlugins: u = [],
  scopeId: p = null,
  slotted: m = !0,
  ssr: v = !1,
  inSSR: h = !1,
  ssrCssVars: $ = "",
  bindingMetadata: x = pe,
  inline: y = !1,
  isTS: g = !1,
  onError: C = Xl,
  onWarn: _ = Zd,
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
    isCustomElement: f,
    expressionPlugins: u,
    scopeId: p,
    slotted: m,
    ssr: v,
    inSSR: h,
    ssrCssVars: $,
    bindingMetadata: x,
    inline: y,
    isTS: g,
    onError: C,
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
    helper(b) {
      const T = O.helpers.get(b) || 0;
      return O.helpers.set(b, T + 1), b;
    },
    removeHelper(b) {
      const T = O.helpers.get(b);
      if (T) {
        const I = T - 1;
        I ? O.helpers.set(b, I) : O.helpers.delete(b);
      }
    },
    helperString(b) {
      return `_${As[O.helper(b)]}`;
    },
    replaceNode(b) {
      if (J.NODE_ENV !== "production") {
        if (!O.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!O.parent)
          throw new Error("Cannot replace root node.");
      }
      O.parent.children[O.childIndex] = O.currentNode = b;
    },
    removeNode(b) {
      if (J.NODE_ENV !== "production" && !O.parent)
        throw new Error("Cannot remove root node.");
      const T = O.parent.children, I = b ? T.indexOf(b) : O.currentNode ? O.childIndex : -1;
      if (J.NODE_ENV !== "production" && I < 0)
        throw new Error("node being removed is not a child of current parent");
      !b || b === O.currentNode ? (O.currentNode = null, O.onNodeRemoved()) : O.childIndex > I && (O.childIndex--, O.onNodeRemoved()), O.parent.children.splice(I, 1);
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
    cache(b, T = !1, I = !1) {
      const D = rg(
        O.cached.length,
        b,
        T,
        I
      );
      return O.cached.push(D), D;
    }
  };
  return O.filters = /* @__PURE__ */ new Set(), O;
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
    J.NODE_ENV !== "production" && s.filter((r) => r.type !== 3).length === 1 && (o |= 2048), e.codegenNode = Eo(
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
  ssr: f = !1,
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
    ssr: f,
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
      return `_${As[h]}`;
    },
    push(h, $ = -2, x) {
      m.code += h;
    },
    indent() {
      v(++m.indentLevel);
    },
    deindent(h = !1) {
      h ? --m.indentLevel : v(--m.indentLevel);
    },
    newline() {
      v(m.indentLevel);
    }
  };
  function v(h) {
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
    ssr: f
  } = n, u = Array.from(e.helpers), p = u.length > 0, m = !r && s !== "module";
  qg(e, n);
  const h = f ? "ssrRender" : "render", x = (f ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${h}(${x}) {`), i(), m && (o("with (_ctx) {"), i(), p && (o(
    `const { ${u.map(hf).join(", ")} } = _Vue
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
  ), a()), f || o("return "), e.codegenNode ? lt(e.codegenNode, n) : o("null"), m && (l(), o("}")), l(), o("}"), {
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
  } = t, c = l, f = Array.from(e.helpers);
  if (f.length > 0 && (o(
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
    ].filter((p) => f.includes(p)).map(hf).join(", ");
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
function Kg(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function ea(e, t) {
  const n = e.length > 3 || J.NODE_ENV !== "production" && e.some((s) => Y(s) || !Kg(s));
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
    directives: f,
    isBlock: u,
    disableTracking: p,
    isComponent: m
  } = e;
  let v;
  if (a)
    if (J.NODE_ENV !== "production")
      if (a < 0)
        v = a + ` /* ${eo[a]} */`;
      else {
        const $ = Object.keys(eo).map(Number).filter((x) => x > 0 && a & x).map((x) => eo[x]).join(", ");
        v = a + ` /* ${$} */`;
      }
    else
      v = String(a);
  f && n(s(Ul) + "("), u && n(`(${s(cs)}(${p ? "true" : ""}), `), o && n(Zr);
  const h = u ? Ps(t.inSSR, m) : Ms(t.inSSR, m);
  n(s(h) + "(", -2, e), Ao(
    Qg([r, i, l, v, c]),
    t
  ), n(")"), u && n(")"), f && (n(", "), lt(f, t), n(")"));
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
  const l = i.length > 1 || J.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < i.length; a++) {
    const { key: c, value: f } = i[a];
    Yg(c, t), n(": "), lt(f, t), a < i.length - 1 && (n(","), r());
  }
  l && o(), n(l ? "}" : " }");
}
function tv(e, t) {
  ea(e.elements, t);
}
function nv(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: r, returns: i, body: l, newline: a, isSlot: c } = e;
  c && n(`_${As[Gl]}(`), n("(", -2, e), Y(r) ? Ao(r, t) : r && lt(r, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), Y(i) ? ea(i, t) : lt(i, t)) : l && lt(l, t), (a || l) && (o(), n("}")), c && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function sv(e, t) {
  const { test: n, consequent: s, alternate: o, newline: r } = e, { push: i, indent: l, deindent: a, newline: c } = t;
  if (n.type === 4) {
    const u = !Ql(n.content);
    u && i("("), mf(n, t), u && i(")");
  } else
    i("("), lt(n, t), i(")");
  r && l(), t.indentLevel++, r || i(" "), i("? "), lt(s, t), t.indentLevel--, r && c(), r || i(" "), i(": ");
  const f = o.type === 19;
  f || t.indentLevel++, lt(o, t), f || t.indentLevel--, r && a(
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
      Se(28, t.loc)
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
          Se(30, e.loc)
        ), n.removeNode();
        const a = hc(e, t);
        if (J.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...r, ...a.children]), J.NODE_ENV !== "production") {
          const f = a.userKey;
          f && l.branches.forEach(({ userKey: u }) => {
            uv(u, f) && n.onError(
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
      return $r(a, o, n), a;
    } else {
      let a = 64;
      return J.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((c) => c.type !== 3).length === 1 && (a |= 2048), Eo(
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
      ]), l = Cr(e), a = Et(e, "memo"), c = wo(e, "key", !1, !0);
      c && c.type === 7 && !c.exp && vf(c);
      let u = c && (c.type === 6 ? c.value ? de(c.value.content, !0) : void 0 : c.exp);
      const p = c && u ? Re("key", u) : null, m = r.source.type === 4 && r.source.constType > 0, v = m ? 64 : c ? 128 : 256;
      return r.codegenNode = Eo(
        n,
        s(bo),
        void 0,
        i,
        v,
        void 0,
        void 0,
        !0,
        !m,
        !1,
        e.loc
      ), () => {
        let h;
        const { children: $ } = r;
        J.NODE_ENV !== "production" && l && e.children.some((g) => {
          if (g.type === 1) {
            const C = wo(g, "key");
            if (C)
              return n.onError(
                Se(
                  33,
                  C.loc
                )
              ), !0;
          }
        });
        const x = $.length !== 1 || $[0].type !== 1, y = Or(e) ? e : l && e.children.length === 1 && Or(e.children[0]) ? e.children[0] : null;
        if (y ? (h = y.codegenNode, l && p && $r(h, p, n)) : x ? h = Eo(
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
        ) : (h = $[0].codegenNode, l && p && $r(h, p, n), h.isBlock !== !m && (h.isBlock ? (o(cs), o(
          Ps(n.inSSR, h.isComponent)
        )) : o(
          Ms(n.inSSR, h.isComponent)
        )), h.isBlock = !m, h.isBlock ? (s(cs), s(Ps(n.inSSR, h.isComponent))) : s(Ms(n.inSSR, h.isComponent))), a) {
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
            Kt(["const _item = ", h]),
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
  const { addIdentifiers: r, removeIdentifiers: i, scopes: l } = n, { source: a, value: c, key: f, index: u } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: c,
    keyAlias: f,
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
    const { arg: $, exp: x } = a;
    $ && !wt($) && (l = !0), r.push(
      Re(
        $ || de("default", !0),
        n(x, void 0, s, o)
      )
    );
  }
  let c = !1, f = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let $ = 0; $ < s.length; $++) {
    const x = s[$];
    let y;
    if (!Cr(x) || !(y = Et(x, "slot", !0))) {
      x.type !== 3 && u.push(x);
      continue;
    }
    if (a) {
      t.onError(
        Se(37, y.loc)
      );
      break;
    }
    c = !0;
    const { children: g, loc: C } = x, {
      arg: _ = de("default", !0),
      exp: A,
      loc: S
    } = y;
    let O;
    wt(_) ? O = _ ? _.content : "default" : l = !0;
    const b = Et(x, "for"), T = n(A, b, g, C);
    let I, D;
    if (I = Et(x, "if"))
      l = !0, i.push(
        Yi(
          I.exp,
          qo(_, T, m++),
          yc
        )
      );
    else if (D = Et(
      x,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let P = $, z;
      for (; P-- && (z = s[P], !(z.type !== 3 && el(z))); )
        ;
      if (z && Cr(z) && Et(z, /^(else-)?if$/)) {
        let K = i[i.length - 1];
        for (; K.alternate.type === 19; )
          K = K.alternate;
        K.alternate = D.exp ? Yi(
          D.exp,
          qo(
            _,
            T,
            m++
          ),
          yc
        ) : qo(_, T, m++);
      } else
        t.onError(
          Se(30, D.loc)
        );
    } else if (b) {
      l = !0;
      const P = b.forParseResult;
      P ? (yf(P, t), i.push(
        Ke(t.helper(ql), [
          P.source,
          Is(
            Zi(P),
            qo(_, T),
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
        p.add(O), O === "default" && (f = !0);
      }
      r.push(Re(_, T));
    }
  }
  if (!a) {
    const $ = (x, y) => {
      const g = n(x, void 0, y, o);
      return t.compatConfig && (g.isNonScopedSlot = !0), Re("default", g);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((x) => el(x)) && (f ? t.onError(
      Se(
        39,
        u[0].loc
      )
    ) : r.push(
      $(void 0, u)
    )) : r.push($(void 0, s));
  }
  const v = l ? 2 : tr(e.children) ? 3 : 1;
  let h = Vt(
    r.concat(
      Re(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        de(
          v + (J.NODE_ENV !== "production" ? ` /* ${Kf[v]} */` : ""),
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
  ), Vt(s);
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
  const l = me(i) && i.callee === Bl;
  let a, c, f = 0, u, p, m, v = (
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
    a = h.props, f = h.patchFlag, p = h.dynamicPropNames;
    const $ = h.directives;
    m = $ && $.length ? ns(
      $.map((x) => wv(x, t))
    ) : void 0, h.shouldUseBlock && (v = !0);
  }
  if (e.children.length > 0)
    if (i === wr && (v = !0, f |= 1024, J.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Se(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    i !== co && // explained above.
    i !== wr) {
      const { slots: $, hasDynamicSlots: x } = yv(e, t);
      c = $, x && (f |= 1024);
    } else if (e.children.length === 1 && i !== co) {
      const $ = e.children[0], x = $.type, y = x === 5 || x === 8;
      y && kt($, t) === 0 && (f |= 1), y || x === 2 ? c = $ : c = e.children;
    } else
      c = e.children;
  p && p.length && (u = xv(p)), e.codegenNode = Eo(
    t,
    i,
    a,
    c,
    f === 0 ? void 0 : f,
    u,
    m,
    !!v,
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
  const f = [], u = [], p = a.length > 0;
  let m = !1, v = 0, h = !1, $ = !1, x = !1, y = !1, g = !1, C = !1;
  const _ = [], A = (T) => {
    c.length && (f.push(
      Vt(bc(c), l)
    ), c = []), T && f.push(T);
  }, S = () => {
    t.scopes.vFor > 0 && c.push(
      Re(
        de("ref_for", !0),
        de("true")
      )
    );
  }, O = ({ key: T, value: I }) => {
    if (wt(T)) {
      const D = T.content, P = vn(D);
      if (P && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      D.toLowerCase() !== "onclick" && // omit v-model handlers
      D !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !An(D) && (y = !0), P && An(D) && (C = !0), P && I.type === 14 && (I = I.arguments[0]), I.type === 20 || (I.type === 4 || I.type === 8) && kt(I, t) > 0)
        return;
      D === "ref" ? h = !0 : D === "class" ? $ = !0 : D === "style" ? x = !0 : D !== "key" && !_.includes(D) && _.push(D), s && (D === "class" || D === "style") && !_.includes(D) && _.push(D);
    } else
      g = !0;
  };
  for (let T = 0; T < n.length; T++) {
    const I = n[T];
    if (I.type === 6) {
      const { loc: D, name: P, nameLoc: z, value: K } = I;
      let ee = !0;
      if (P === "ref" && (h = !0, S()), P === "is" && (tl(i) || K && K.content.startsWith("vue:") || Pn(
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
            K ? K.loc : D
          )
        )
      );
    } else {
      const { name: D, arg: P, exp: z, loc: K, modifiers: ee } = I, ne = D === "bind", te = D === "on";
      if (D === "slot") {
        s || t.onError(
          Se(40, K)
        );
        continue;
      }
      if (D === "once" || D === "memo" || D === "is" || ne && Vn(P, "is") && (tl(i) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || te && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && Vn(P, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        te && p && Vn(P, "vue:before-update")) && (m = !0), ne && Vn(P, "ref") && S(), !P && (ne || te)
      ) {
        if (g = !0, z)
          if (ne) {
            if (A(), J.NODE_ENV !== "production" && f.some(($t) => $t.type === 15 ? $t.properties.some(({ key: Tt }) => Tt.type !== 4 || !Tt.isStatic ? !0 : Tt.content !== "class" && Tt.content !== "style" && !vn(Tt.content)) : !0) && Rs(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              K
            ), Pn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              f.unshift(z);
              continue;
            }
            S(), A(), f.push(z);
          } else
            A({
              type: 14,
              loc: K,
              callee: t.helper(Wl),
              arguments: s ? [z] : [z, "true"]
            });
        else
          t.onError(
            Se(
              ne ? 34 : 35,
              K
            )
          );
        continue;
      }
      ne && ee.some((gt) => gt.content === "prop") && (v |= 32);
      const xe = t.directiveTransforms[D];
      if (xe) {
        const { props: gt, needRuntime: $t } = xe(I, e, t);
        !r && gt.forEach(O), te && P && !wt(P) ? A(Vt(gt, l)) : c.push(...gt), $t && (u.push(I), xt($t) && bf.set(I, $t));
      } else Vc(D) || (u.push(I), p && (m = !0));
    }
  }
  let b;
  if (f.length ? (A(), f.length > 1 ? b = Ke(
    t.helper(xr),
    f,
    l
  ) : b = f[0]) : c.length && (b = Vt(
    bc(c),
    l
  )), g ? v |= 16 : ($ && !s && (v |= 2), x && !s && (v |= 4), _.length && (v |= 8), y && (v |= 32)), !m && (v === 0 || v === 32) && (h || C || u.length > 0) && (v |= 512), !t.inSSR && b)
    switch (b.type) {
      case 15:
        let T = -1, I = -1, D = !1;
        for (let K = 0; K < b.properties.length; K++) {
          const ee = b.properties[K].key;
          wt(ee) ? ee.content === "class" ? T = K : ee.content === "style" && (I = K) : ee.isHandlerKey || (D = !0);
        }
        const P = b.properties[T], z = b.properties[I];
        D ? b = Ke(
          t.helper(_o),
          [b]
        ) : (P && !wt(P.value) && (P.value = Ke(
          t.helper(zl),
          [P.value]
        )), z && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (x || z.value.type === 4 && z.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        z.value.type === 17) && (z.value = Ke(
          t.helper(Kl),
          [z.value]
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
    patchFlag: v,
    dynamicPropNames: _,
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
  if (Or(e)) {
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
      J.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Se(51, i.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
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
    const u = nf(a), p = !(u || vg(a)), m = a.content.includes(";");
    J.NODE_ENV !== "production" && Yn(
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
  let f = {
    props: [
      Re(
        l,
        a || de("() => {}", !1, o)
      )
    ]
  };
  return s && (f = s(f)), c && (f.props[0].value = n.cache(f.props[0].value)), f.props.forEach((u) => u.key.isHandlerKey = !0), f;
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
              1 + (J.NODE_ENV !== "production" ? ` /* ${eo[1]} */` : "")
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
  let f;
  const u = n.isTS ? "($event: any)" : "$event";
  f = Kt([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Re(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Re(c, f)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const m = e.modifiers.map((h) => h.content).map((h) => (Ql(h) ? h : JSON.stringify(h)) + ": true").join(", "), v = o ? wt(o) ? `${o.content}Modifiers` : Kt([o, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Re(
        v,
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
  let s = !1, o = !1, r = !1, i = !1, l = 0, a = 0, c = 0, f = 0, u, p, m, v, h = [];
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
      v === void 0 ? (f = m + 1, v = n.slice(0, m).trim()) : $();
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
        let x = m - 1, y;
        for (; x >= 0 && (y = n.charAt(x), y === " "); x--)
          ;
        (!y || !Ov.test(y)) && (i = !0);
      }
    }
  v === void 0 ? v = n.slice(0, m).trim() : f !== 0 && $();
  function $() {
    h.push(n.slice(f, m).trim()), f = m + 1;
  }
  if (h.length) {
    for (J.NODE_ENV !== "production" && kr(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), m = 0; m < h.length; m++)
      v = Tv(v, h[m], t);
    e.content = v, e.ast = void 0;
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
    const f = c.map(rn).join("");
    r = wt(r) ? de(`${r.content}${f}`, !0) : Kt(["(", r, `) + "${f}"`]);
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
    const f = c ? a.message : `Template compilation error: ${a.message}`, u = a.loc && Yf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Me(u ? `${f}
${u}` : f);
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
    const n = e, s = t, o = q(!1), r = Z(() => n.href ? "a" : "button"), i = (f, u = "") => {
      var v, h, $;
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
      if (p[f])
        return p[f];
      const m = ($ = (h = (v = window.Shopline) == null ? void 0 : v.theme) == null ? void 0 : h.settings) == null ? void 0 : $[f];
      if (m != null && m !== "")
        return m;
      try {
        const x = "--" + f.replace(/_/g, "-"), y = getComputedStyle(document.documentElement).getPropertyValue(x).trim();
        if (y) return y;
      } catch {
      }
      return u;
    }, l = Z(() => {
      const f = {};
      if (n.rounded === "full")
        f.borderRadius = "9999px";
      else if (n.rounded === "none")
        f.borderRadius = "0";
      else if (n.buttonRadius !== null)
        f.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius;
      else {
        const u = i("button_border_radius", "6");
        f.borderRadius = typeof u == "number" || !isNaN(u) ? `${u}px` : u;
      }
      return n.variant === "primary" ? (o.value ? f.backgroundColor = i("button_primary_bg_hover", "#b91c1c") : f.backgroundColor = i("button_primary_bg", "#dc2626"), f.color = i("button_primary_text", "white")) : n.variant === "secondary" ? (o.value ? f.backgroundColor = i("button_secondary_bg_hover", "#f9fafb") : f.backgroundColor = i("button_secondary_bg", "white"), f.color = i("button_secondary_text", "#374151"), f.borderColor = i("button_secondary_border", "#d1d5db")) : n.variant === "link" && (o.value ? f.color = i("button_primary_bg_hover", "#b91c1c") : f.color = i("button_primary_bg", "#dc2626")), f;
    }), a = Z(() => {
      const f = [
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      ];
      n.fullWidth && f.push("w-full");
      const u = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
      };
      return f.push(u[n.size]), n.variant === "primary" ? f.push(
        "border border-transparent",
        "shadow-sm"
      ) : n.variant === "secondary" ? f.push(
        "border",
        "shadow-sm"
      ) : n.variant === "outline" ? f.push(
        "bg-transparent",
        "hover:bg-gray-50",
        "text-gray-700",
        "border-2 border-gray-300",
        "hover:border-gray-400",
        "focus:ring-gray-500"
      ) : n.variant === "ghost" ? f.push(
        "bg-transparent",
        "hover:bg-gray-100",
        "text-gray-700",
        "hover:text-gray-900",
        "focus:ring-gray-500"
      ) : n.variant === "link" && f.push(
        "bg-transparent",
        "underline",
        "hover:no-underline",
        "p-0",
        "focus:ring-0"
      ), f.join(" ");
    }), c = (f) => {
      !n.disabled && !n.loading && s("click", f);
    };
    return (f, u) => (w(), ct(Nl(r.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: we(a.value),
      style: Ge(l.value),
      onClick: c,
      onMouseenter: u[0] || (u[0] = (p) => o.value = !0),
      onMouseleave: u[1] || (u[1] = (p) => o.value = !1)
    }, {
      default: Pe(() => [
        e.loading ? (w(), N("svg", oy, u[2] || (u[2] = [
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
        ]))) : L("", !0),
        jn(f.$slots, "default", {}, void 0, !0)
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
      set: (f) => {
        var p, m, v;
        const u = Math.max(n.min, Math.min(n.max, f));
        if (s("update:modelValue", u), s("update", u), ((v = (m = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : m.parentElement) == null ? void 0 : v.tagName) === "QUANTITY-SELECTOR") {
          const h = o.vnode.el.parentElement, $ = h.getAttribute("data-line-key");
          if ($) {
            const x = new CustomEvent("quantity-update", {
              detail: { key: $, value: u },
              bubbles: !0
            });
            h.dispatchEvent(x);
          }
        }
      }
    }), i = () => {
      r.value > n.min && (r.value = r.value - n.step);
    }, l = () => {
      r.value < n.max && (r.value = r.value + n.step);
    }, a = (f) => {
      const u = parseInt(f.target.value) || n.min;
      r.value = u;
    }, c = (f) => {
      const u = parseInt(f.target.value) || n.min;
      r.value = u, f.target.value = r.value;
    };
    return (f, u) => (w(), N("div", {
      class: we(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      d("button", {
        type: "button",
        class: we(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue <= e.min,
        onClick: i,
        "aria-label": "Decrease quantity"
      }, u[0] || (u[0] = [
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
      ]), 10, iy),
      d("input", {
        type: "number",
        class: we(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, ly),
      d("button", {
        type: "button",
        class: we(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, u[1] || (u[1] = [
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
      var x, y, g;
      if (!p && p !== 0) return "$0.00";
      const m = ((x = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : x.money_format) || "${{amount}}";
      (y = Shopline == null ? void 0 : Shopline.shop) != null && y.currency;
      const v = ((g = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : g.current) || "en", $ = new Intl.NumberFormat(v, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(p));
      return m.replace("{{amount}}", $);
    }, f = async (p) => {
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
    return sn(() => n.item.quantity, (p) => {
      o.value = p;
    }), (p, m) => (w(), N("div", {
      class: "cart-item",
      "data-updating": r.value
    }, [
      d("div", dy, [
        d("div", fy, [
          d("a", {
            href: e.item.url,
            class: "cart-item__image-link"
          }, [
            d("img", {
              src: e.item.image || "/assets/placeholder-product.svg",
              alt: e.item.product_title,
              class: "cart-item__image-img",
              loading: "lazy"
            }, null, 8, hy)
          ], 8, py)
        ]),
        d("div", my, [
          d("div", gy, [
            d("div", vy, [
              d("h3", yy, [
                d("a", {
                  href: e.item.url,
                  class: "cart-item__title-link"
                }, j(e.item.product_title), 9, by)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (w(), N("p", _y, j(e.item.variant_title), 1)) : L("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (w(), N("div", Ey, [
                (w(!0), N(ie, null, be(e.item.properties, (v, h) => (w(), N("p", {
                  key: h,
                  class: "cart-item__property"
                }, [
                  d("span", wy, j(h) + ":", 1),
                  je(" " + j(v), 1)
                ]))), 128))
              ])) : L("", !0)
            ]),
            d("div", xy, [
              d("p", Ny, j(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (w(), N("p", Sy, j(c(e.item.original_price * e.item.quantity)), 1)) : L("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (w(), N("div", ky, [
            (w(!0), N(ie, null, be(e.item.discounts, (v) => (w(), N("div", {
              key: v.id,
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
              je(" " + j(v.title) + " (-" + j(c(v.amount || v.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : L("", !0),
          d("div", Cy, [
            d("div", Oy, [
              ue(Af, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  m[0] || (m[0] = (v) => o.value = v),
                  f
                ],
                min: 0,
                max: l.value,
                disabled: r.value,
                size: "small"
              }, null, 8, ["modelValue", "max", "disabled"]),
              d("button", {
                type: "button",
                onClick: u,
                class: "cart-item__remove",
                disabled: r.value,
                "aria-label": "Remove item from cart"
              }, [
                r.value ? (w(), N("svg", Dy, m[3] || (m[3] = [
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
                ]))) : (w(), N("svg", Ty, m[2] || (m[2] = [
                  d("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, $y)
            ]),
            d("div", Vy, [
              d("p", Ay, j(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
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
      var v;
      return ((v = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : v.cart) || "/cart";
    }), r = Z(() => {
      var h, $;
      return (($ = (h = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : h.settings) == null ? void 0 : $.free_shipping_threshold) || 50;
    }), i = Z(() => {
      var v, h;
      return ((h = (v = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : v.settings) == null ? void 0 : h.show_free_shipping_bar) !== !1;
    }), l = (v) => {
      var g, C, _, A;
      if (!v && v !== 0) return "$0.00";
      const h = ((g = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : g.money_format) || "${{amount}}";
      (C = Shopline == null ? void 0 : Shopline.shop) != null && C.money_with_currency_format, (_ = Shopline == null ? void 0 : Shopline.shop) != null && _.currency;
      const $ = ((A = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : A.current) || "en", y = new Intl.NumberFormat($, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(v));
      return h.replace("{{amount}}", y);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", f();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, f = async () => {
      const v = await window.OrionCart.fetchCart();
      n.value = v.items, s.value = v.total_price;
    }, u = async ({ key: v, quantity: h }) => {
      await window.OrionCart.updateItem(v, h), f();
    }, p = async (v) => {
      await window.OrionCart.removeItem(v), f();
    }, m = (v) => {
      v.key === "Escape" && t.value && c();
    };
    return He(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", m);
    }), Ct(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", m);
    }), (v, h) => (w(), ct(bn, { to: "body" }, [
      ue(ot, { name: "drawer" }, {
        default: Pe(() => [
          t.value ? (w(), N("div", Fy, [
            d("div", By, [
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
              d("div", jy, [
                ue(ot, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Pe(() => [
                    t.value ? (w(), N("div", Hy, [
                      d("div", Uy, [
                        d("div", qy, [
                          d("div", null, [
                            h[0] || (h[0] = d("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (w(), N("p", zy, j(n.value.length) + " " + j(n.value.length === 1 ? "item" : "items"), 1)) : L("", !0)
                          ]),
                          d("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: c
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
                        d("div", Ky, [
                          n.value.length === 0 ? (w(), N("div", Wy, [
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
                          ])) : (w(), N("div", Gy, [
                            (w(!0), N(ie, null, be(n.value, ($) => (w(), ct(If, {
                              key: $.key,
                              item: $,
                              onUpdate: u,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (w(), N("div", Yy, [
                          i.value ? (w(), N("div", {
                            key: 0,
                            class: we([s.value >= r.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "p-3"]),
                            style: { borderRadius: "var(--button-radius)" }
                          }, [
                            s.value >= r.value ? (w(), N("div", Jy, h[6] || (h[6] = [
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
                            ]))) : (w(), N("div", Xy, [
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
                              d("p", Qy, " Add " + j(l(
                                r.value - s.value
                              )) + " more for free shipping! ", 1)
                            ])),
                            s.value < r.value ? (w(), N("div", Zy, [
                              d("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: Ge(`width: ${Math.min(
                                  s.value / r.value * 100,
                                  100
                                )}%`)
                              }, null, 4)
                            ])) : L("", !0)
                          ], 2)) : L("", !0),
                          d("div", null, [
                            d("div", e1, [
                              h[8] || (h[8] = d("p", null, "Subtotal", -1)),
                              d("p", null, j(l(s.value)), 1)
                            ]),
                            h[9] || (h[9] = d("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          d("div", t1, [
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
    }, f = (u) => {
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
              d("div", o1, [
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
                d("div", r1, [
                  ue(ot, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      i.value ? (w(), N("div", i1, [
                        d("div", l1, [
                          d("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            p[3] || (p[3] = d("h2", { class: "text-lg font-medium text-gray-900" }, " Menu ", -1)),
                            d("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: c
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
                          d("div", a1, [
                            d("nav", c1, [
                              d("ul", u1, [
                                s.value.length === 0 ? (w(), N("li", d1, p[4] || (p[4] = [
                                  d("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : L("", !0),
                                (w(!0), N(ie, null, be(s.value, (m) => (w(), N("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (w(), N("div", f1, [
                                    d("button", {
                                      onClick: (v) => f(
                                        m.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      d("span", null, j(m.title), 1),
                                      (w(), N("svg", {
                                        class: we(["h-5 w-5 transition-transform duration-200", {
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
                                    ], 8, p1),
                                    ue(ot, { name: "submenu" }, {
                                      default: Pe(() => [
                                        l.value.includes(
                                          m.title
                                        ) ? (w(), N("ul", h1, [
                                          (w(!0), N(ie, null, be(m.links, (v) => (w(), N("li", {
                                            key: v.id || v.title
                                          }, [
                                            v.links && v.links.length ? (w(), N("div", m1, [
                                              d("button", {
                                                onClick: (h) => f(
                                                  `${m.title}-${v.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                d("span", null, j(v.title), 1),
                                                (w(), N("svg", {
                                                  class: we(["h-4 w-4 transition-transform duration-200", {
                                                    "rotate-180": l.value.includes(
                                                      `${m.title}-${v.title}`
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
                                              ], 8, g1),
                                              ue(ot, { name: "submenu" }, {
                                                default: Pe(() => [
                                                  l.value.includes(
                                                    `${m.title}-${v.title}`
                                                  ) ? (w(), N("ul", v1, [
                                                    (w(!0), N(ie, null, be(v.links, (h) => (w(), N("li", {
                                                      key: h.id || h.title
                                                    }, [
                                                      d("a", {
                                                        href: h.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: p[0] || (p[0] = (...$) => c && c(...$))
                                                      }, j(h.title), 9, y1)
                                                    ]))), 128))
                                                  ])) : L("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (w(), N("a", {
                                              key: 1,
                                              href: v.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: p[1] || (p[1] = (...h) => c && c(...h))
                                            }, j(v.title), 9, b1))
                                          ]))), 128))
                                        ])) : L("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (w(), N("a", {
                                    key: 1,
                                    href: m.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: c
                                  }, j(m.title), 9, _1))
                                ]))), 128))
                              ])
                            ]),
                            d("div", E1, [
                              d("div", w1, [
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
                                ]), 8, x1),
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
        const $ = l.value.find((x) => x.id == n.selectedVariantId);
        $ && a($);
      } else if (l.value.length > 0) {
        const $ = l.value.find((x) => x.available) || l.value[0];
        a($);
      }
    });
    const a = ($) => {
      r.value = $, i.value.forEach((x, y) => {
        o.value[x.name] = $[`option${y + 1}`];
      }), s("variant-change", $);
    }, c = ($, x) => {
      o.value[$] = x;
      const y = l.value.find((g) => i.value.every((C, _) => {
        const A = o.value[C.name];
        return g[`option${_ + 1}`] === A;
      }));
      y && (r.value = y, s("variant-change", y));
    }, f = ($) => o.value[$] || "", u = ($, x) => o.value[$] === x, p = ($, x) => {
      const y = i.value.findIndex((g) => g.name === $);
      return l.value.some((g) => {
        const C = g[`option${y + 1}`] === x, _ = i.value.every((A, S) => {
          if (A.name === $) return !0;
          const O = o.value[A.name];
          return O ? g[`option${S + 1}`] === O : !0;
        });
        return C && _ && g.available;
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
    })[$.toLowerCase()] || "#E5E7EB", h = ($) => {
      var x, y;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: ((y = (x = window.Shopify) == null ? void 0 : x.currency) == null ? void 0 : y.active) || "USD"
      }).format($ / 100);
    };
    return ($, x) => (w(), N("div", C1, [
      (w(!0), N(ie, null, be(i.value, (y) => (w(), N("div", {
        key: y.name,
        class: "variant-option mb-6"
      }, [
        d("h3", O1, [
          je(j(y.name) + ": ", 1),
          d("span", $1, j(f(y.name)), 1)
        ]),
        m(y.name) ? (w(), N("div", T1, [
          (w(!0), N(ie, null, be(y.values, (g) => (w(), N("button", {
            key: g,
            type: "button",
            class: we([
              "color-swatch",
              u(y.name, g) ? "color-swatch--selected" : "",
              p(y.name, g) ? "" : "color-swatch--unavailable"
            ]),
            style: Ge({ backgroundColor: v(g) }),
            title: g,
            "aria-label": `Select ${y.name} ${g}`,
            disabled: !p(y.name, g),
            onClick: (C) => c(y.name, g)
          }, [
            d("span", V1, j(g), 1),
            u(y.name, g) ? (w(), N("span", A1, x[0] || (x[0] = [
              d("svg", {
                class: "w-4 h-4",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                d("path", {
                  "fill-rule": "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ]))) : L("", !0)
          ], 14, D1))), 128))
        ])) : (w(), N("div", I1, [
          (w(!0), N(ie, null, be(y.values, (g) => (w(), N("button", {
            key: g,
            type: "button",
            class: we([
              "variant-button",
              u(y.name, g) ? "variant-button--selected" : "",
              p(y.name, g) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${y.name} ${g}`,
            disabled: !p(y.name, g),
            onClick: (C) => c(y.name, g)
          }, j(g), 11, M1))), 128))
        ]))
      ]))), 128)),
      r.value ? (w(), N("div", P1, [
        d("div", R1, [
          d("span", L1, j(h(r.value.price)), 1),
          r.value.compare_at_price > r.value.price ? (w(), N("span", F1, j(h(r.value.compare_at_price)), 1)) : L("", !0)
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
  return typeof e == "function" ? e() : Co(e);
}
const z1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const K1 = Object.prototype.toString, W1 = (e) => K1.call(e) === "[object Object]", So = () => {
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
  let t = 0, n, s = !0, o = So, r, i, l, a, c;
  !Ie(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [i, l = !0, a = !0, c = !1] = e;
  const f = () => {
    n && (clearTimeout(n), n = void 0, o(), o = So);
  };
  return (p) => {
    const m = na(i), v = Date.now() - t, h = () => r = p();
    return f(), m <= 0 ? (t = Date.now(), h()) : (v > m && (a || !s) ? (t = Date.now(), h()) : l && (r = new Promise(($, x) => {
      o = c ? x : $, n = setTimeout(() => {
        t = Date.now(), s = !0, $(h()), f();
      }, Math.max(0, m - v));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, r);
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
    return So;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((f) => f()), r.length = 0;
  }, l = (f, u, p, m) => (f.addEventListener(u, p, m), () => f.removeEventListener(u, p, m)), a = sn(
    () => [X1(t), na(o)],
    ([f, u]) => {
      if (i(), !f)
        return;
      const p = W1(u) ? { ...u } : u;
      r.push(
        ...n.flatMap((m) => s.map((v) => l(f, m, v, p)))
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
  } = t, a = Ns({ x: 0, y: 0 }), c = Ns({ x: 0, y: 0 }), f = Z(() => a.x - c.x), u = Z(() => a.y - c.y), { max: p, abs: m } = Math, v = Z(() => p(m(f.value), m(u.value)) >= n), h = q(!1), $ = Z(() => v.value ? m(f.value) > m(u.value) ? f.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), x = (b) => [b.touches[0].clientX, b.touches[0].clientY], y = (b, T) => {
    a.x = b, a.y = T;
  }, g = (b, T) => {
    c.x = b, c.y = T;
  };
  let C;
  const _ = Z1(l == null ? void 0 : l.document);
  i ? C = _ ? { passive: !0 } : { capture: !1 } : C = _ ? { passive: !1, capture: !0 } : { capture: !0 };
  const A = (b) => {
    h.value && (o == null || o(b, $.value)), h.value = !1;
  }, S = [
    Ei(e, "touchstart", (b) => {
      if (b.touches.length !== 1)
        return;
      C.capture && !C.passive && b.preventDefault();
      const [T, I] = x(b);
      y(T, I), g(T, I), r == null || r(b);
    }, C),
    Ei(e, "touchmove", (b) => {
      if (b.touches.length !== 1)
        return;
      const [T, I] = x(b);
      g(T, I), !h.value && v.value && (h.value = !0), h.value && (s == null || s(b));
    }, C),
    Ei(e, ["touchend", "touchcancel"], A, C)
  ];
  return {
    isPassiveEventSupported: _,
    isSwiping: h,
    direction: $,
    coordsStart: a,
    coordsEnd: c,
    lengthX: f,
    lengthY: u,
    stop: () => S.forEach((b) => b())
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
  return e.addEventListener("x", So, n), e.removeEventListener("x", So), t;
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
    const t = e, n = q(null), s = q(!1), o = q(!1), r = q(!1), i = q(!1), l = q("#ffffff"), a = q(0), c = q(0), f = Z(() => $.value ? `${c.value}px` : "0");
    let u = 0;
    const p = Z(() => {
      const y = {};
      return $.value && s.value && (y.position = "fixed", y.top = "0", y.left = "0", y.right = "0", y.zIndex = "40", o.value ? y.transform = "translateY(-100%)" : y.transform = "translateY(0)"), i.value && (a.value === 0 ? y.backgroundColor = "transparent" : $.value && s.value && (y.backgroundColor = l.value)), y.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", y;
    }), m = () => {
      var C, _, A;
      const y = (_ = (C = n.value) == null ? void 0 : C.getRootNode()) == null ? void 0 : _.host;
      if (!y) return;
      y.classList.add("sticky-header-wrapper");
      const g = (A = n.value) == null ? void 0 : A.querySelector(".main-header");
      g && i.value && (a.value === 0 ? (g.style.backgroundColor = "transparent", g.style.borderBottomColor = "transparent") : $.value && s.value && (g.style.backgroundColor = l.value, g.style.borderBottomColor = "#e5e7eb"));
    }, v = J1(() => {
      if (!$.value)
        return;
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = y, s.value = y > 0, r.value = y > 10, h.value && s.value) {
        const g = y - u;
        Math.abs(g) > 5 && (g > 0 && y > c.value ? o.value = !0 : g < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(y - u) > 1 && (u = y), m();
    }, 50), h = q(t.hideOnScrollDown), $ = q(t.sticky), x = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return He(() => {
      if (n.value) {
        const y = n.value.getRootNode().host;
        if (y) {
          y.classList.add("sticky-header-wrapper"), i.value = y.classList.contains("header-transparent");
          const g = y.getAttribute("data-hide-on-scroll-down"), C = y.getAttribute("data-sticky"), _ = y.getAttribute("data-sticky-bg");
          g !== null && (h.value = g === "true"), C !== null && ($.value = C === "true"), _ !== null && (l.value = _ || "#ffffff"), setTimeout(x, 100), window.addEventListener("resize", x);
        }
      }
      window.addEventListener("scroll", v, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), v();
    }), Ct(() => {
      window.removeEventListener("scroll", v), window.removeEventListener("resize", x);
    }), (y, g) => (w(), N("div", eb, [
      $.value && s.value ? (w(), N("div", {
        key: 0,
        class: "header-placeholder",
        style: Ge({ height: f.value })
      }, null, 4)) : L("", !0),
      d("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: we(["sticky-header-inner", {
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
      var f, u;
      return t.customer ? ((f = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : f.account) || "/account" : ((u = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : u.account_login) || "/account/login";
    }), i = () => {
      document.dispatchEvent(new CustomEvent("mobile-menu:open"));
    }, l = () => {
      document.dispatchEvent(new CustomEvent("cart:open"));
    }, a = async () => {
      var f;
      s.value = !s.value, s.value && (await Fs(), (f = n.value) == null || f.focus());
    }, c = () => {
      var f;
      (f = window.OrionCart) != null && f.state && (o.value = window.OrionCart.state.itemCount || 0);
    };
    return He(() => {
      document.addEventListener("cart:updated", c), c();
    }), Ct(() => {
      document.removeEventListener("cart:updated", c);
    }), (f, u) => (w(), N("div", nb, [
      d("div", sb, [
        d("button", {
          type: "button",
          class: "main-header__mobile-toggle lg:hidden",
          onClick: i,
          "aria-label": "Open menu"
        }, u[0] || (u[0] = [
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
        d("a", ob, [
          e.logoUrl ? (w(), N("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, rb)) : (w(), N("span", ib, j(e.shopName), 1))
        ]),
        d("nav", lb, [
          (w(!0), N(ie, null, be(e.navigationLinks, (p) => (w(), N("a", {
            key: p.url,
            href: p.url,
            class: "nav-link"
          }, j(p.title), 9, ab))), 128))
        ]),
        d("div", cb, [
          d("button", {
            type: "button",
            class: "action-button hidden md:flex",
            onClick: a,
            "aria-label": "Search"
          }, u[1] || (u[1] = [
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
          }, u[2] || (u[2] = [
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
          ]), 8, ub),
          d("button", {
            type: "button",
            class: "action-button relative",
            onClick: l,
            "aria-label": "Cart"
          }, [
            u[3] || (u[3] = d("svg", {
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
              d("div", fb, [
                d("form", pb, [
                  d("input", {
                    ref_key: "searchInput",
                    ref: n,
                    type: "search",
                    name: "q",
                    placeholder: "Search products...",
                    class: "search-input",
                    onKeyup: Er(a, ["esc"])
                  }, null, 544),
                  u[4] || (u[4] = d("button", {
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
                }, u[5] || (u[5] = [
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
        d("div", vb, [
          d("div", yb, [
            d("div", bb, [
              d("h3", _b, j(e.newsletterTitle), 1),
              d("p", Eb, j(e.newsletterDescription), 1)
            ]),
            d("form", {
              onSubmit: zt(o, ["prevent"]),
              class: "newsletter-form"
            }, [
              $e(d("input", {
                "onUpdate:modelValue": l[0] || (l[0] = (a) => t.value = a),
                type: "email",
                placeholder: "Enter your email",
                required: "",
                class: "newsletter-input",
                disabled: n.value
              }, null, 8, wb), [
                [Fn, t.value]
              ]),
              d("button", {
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
      d("div", kb, [
        d("div", Cb, [
          d("div", Ob, [
            d("div", $b, [
              d("h4", Tb, j(e.companyName), 1),
              d("p", Db, j(e.companyDescription), 1),
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
              d("h4", Ib, j(a.title), 1),
              d("ul", Mb, [
                (w(!0), N(ie, null, be(a.links, (c) => (w(), N("li", {
                  key: c.title
                }, [
                  d("a", {
                    href: c.url,
                    class: "footer-link"
                  }, j(c.title), 9, Pb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (w(), N("div", Rb, [
              l[4] || (l[4] = d("h4", { class: "footer-heading" }, "Contact", -1)),
              d("div", Lb, [
                e.contactEmail ? (w(), N("p", Fb, [
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
                  je(" " + j(e.contactEmail), 1)
                ])) : L("", !0),
                e.contactPhone ? (w(), N("p", Bb, [
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
                  je(" " + j(e.contactPhone), 1)
                ])) : L("", !0),
                e.contactAddress ? (w(), N("p", jb, [
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
                  je(" " + j(e.contactAddress), 1)
                ])) : L("", !0)
              ])
            ])) : L("", !0)
          ]),
          e.paymentMethods.length > 0 ? (w(), N("div", Hb, [
            l[5] || (l[5] = d("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            d("div", Ub, [
              (w(!0), N(ie, null, be(e.paymentMethods, (a) => (w(), N("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, qb))), 128))
            ])
          ])) : L("", !0),
          d("div", zb, [
            d("p", Kb, " © " + j(s.value) + " " + j(e.companyName) + ". All rights reserved. ", 1),
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
    }), f = Z(() => {
      const I = c.value.handle;
      return c.value.url || (I ? `/products/${I}` : "#");
    }), u = Z(() => {
      var I, D, P;
      return r.value && ((I = c.value.images) != null && I[1]) ? c.value.images[1].src : ((P = (D = c.value.images) == null ? void 0 : D[0]) == null ? void 0 : P.src) || c.value.featured_image || c.value.image || "/placeholder.jpg";
    }), p = Z(() => {
      var I;
      return (I = c.value.options) == null ? void 0 : I.some(
        (D) => {
          var P, z;
          return ((P = D.name) == null ? void 0 : P.toLowerCase().includes("color")) || ((z = D.name) == null ? void 0 : z.toLowerCase().includes("colour"));
        }
      );
    }), m = Z(() => {
      var D;
      const I = (D = c.value.options) == null ? void 0 : D.find(
        (P) => {
          var z, K;
          return ((z = P.name) == null ? void 0 : z.toLowerCase().includes("color")) || ((K = P.name) == null ? void 0 : K.toLowerCase().includes("colour"));
        }
      );
      return (I == null ? void 0 : I.values) || [];
    }), v = Z(() => c.value.price || 0), h = Z(() => c.value.compare_at_price || 0), $ = Z(() => c.value.available && h.value > v.value), x = Z(() => $.value ? Math.round((h.value - v.value) / h.value * 100) : 0), y = Z(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: a.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), g = Z(() => {
      var I, D, P;
      return ((P = (D = (I = window.Shopline) == null ? void 0 : I.theme) == null ? void 0 : D.settings) == null ? void 0 : P.show_product_card_wishlist) !== !1;
    }), C = (I) => `$${(I / 100).toFixed(2)}`, _ = (I) => {
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
      }, P = I.toLowerCase();
      return D[P] || `#${P.replace("#", "")}`;
    }, A = () => {
      var I;
      ((I = c.value.images) == null ? void 0 : I.length) > 1 && (r.value = !0);
    }, S = () => {
      r.value = !1;
    }, O = (I) => {
      o.value = I.value;
    }, b = () => {
      l.value = !l.value;
    }, T = async () => {
      var I, D, P, z;
      i.value = !0;
      try {
        const K = (D = (I = c.value.variants) == null ? void 0 : I[0]) == null ? void 0 : D.id;
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
    return (I, D) => (w(), N("div", {
      class: "product-card group relative bg-white transition-all duration-300 overflow-hidden",
      style: Ge(y.value),
      onMouseenter: D[2] || (D[2] = (P) => a.value = !0),
      onMouseleave: D[3] || (D[3] = (P) => a.value = !1)
    }, [
      d("a", {
        href: f.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        u.value ? (w(), N("img", {
          key: 0,
          src: u.value,
          alt: c.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: A,
          onMouseleave: S
        }, null, 40, Jb)) : (w(), N("div", Xb, D[4] || (D[4] = [
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
        $.value ? (w(), N("div", Qb, " -" + j(x.value) + "% ", 1)) : L("", !0),
        c.value.available && g.value ? (w(), N("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: zt(b, ["prevent"])
        }, [
          (w(), N("svg", {
            class: we(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, D[5] || (D[5] = [
            d("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : L("", !0),
        c.value.available ? L("", !0) : (w(), N("div", Zb, D[6] || (D[6] = [
          d("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Yb),
      d("div", e_, [
        p.value ? (w(), N("div", t_, [
          d("div", n_, [
            (w(!0), N(ie, null, be(m.value, (P) => (w(), N("button", {
              key: P.value,
              onClick: (z) => O(P),
              title: P.value,
              class: we([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === P.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: Ge({ backgroundColor: _(P.value) })
            }, [
              o.value === P.value ? (w(), N("span", o_, D[7] || (D[7] = [
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
              ]))) : L("", !0)
            ], 14, s_))), 128))
          ])
        ])) : L("", !0),
        c.value.vendor ? (w(), N("p", r_, j(c.value.vendor), 1)) : L("", !0),
        d("h3", i_, [
          d("a", {
            href: f.value,
            class: "hover:text-gray-700 transition-colors"
          }, j(c.value.title || "Untitled"), 9, l_)
        ]),
        d("div", a_, [
          d("div", c_, [
            (w(), N(ie, null, be(5, (P) => d("svg", {
              key: P,
              class: we(["w-4 h-4", P <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, D[8] || (D[8] = [
              d("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          D[9] || (D[9] = d("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        d("div", u_, [
          d("span", d_, j(C(v.value)), 1),
          h.value > v.value ? (w(), N("span", f_, j(C(h.value)), 1)) : L("", !0)
        ]),
        c.value.available ? (w(), N("button", {
          key: 2,
          onClick: T,
          disabled: i.value,
          class: "w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          style: {
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
            borderRadius: "var(--button-radius)"
          },
          onMouseenter: D[0] || (D[0] = (P) => P.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
          onMouseleave: D[1] || (D[1] = (P) => P.target.style.backgroundColor = "var(--button-primary-bg)")
        }, [
          i.value ? L("", !0) : (w(), N("svg", h_, D[10] || (D[10] = [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          i.value ? (w(), N("svg", g_, D[11] || (D[11] = [
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
          ]))) : (w(), N("span", m_, "Add to Cart"))
        ], 40, p_)) : L("", !0)
      ])
    ], 36));
  }
}, y_ = { class: "collection-filters" }, b_ = { class: "lg:hidden mb-4" }, __ = { class: "space-y-6" }, E_ = {
  key: 0,
  class: "filter-group"
}, w_ = { class: "filter-group" }, x_ = { class: "flex items-center" }, N_ = { class: "filter-group" }, S_ = { class: "space-y-2" }, k_ = { class: "flex items-center" }, C_ = { class: "flex items-center" }, O_ = { class: "flex items-center" }, $_ = { class: "flex items-center" }, T_ = {
  key: 1,
  class: "filter-group"
}, D_ = { class: "space-y-2" }, V_ = ["value"], A_ = { class: "ml-2 text-sm" }, I_ = {
  key: 2,
  class: "filter-group"
}, M_ = { class: "space-y-2" }, P_ = ["value"], R_ = { class: "ml-2 text-sm" }, L_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, F_ = { class: "h-full flex flex-col" }, B_ = { class: "flex items-center justify-between p-4 border-b" }, j_ = { class: "flex-1 overflow-y-auto p-4" }, H_ = { class: "space-y-6" }, U_ = {
  key: 0,
  class: "filter-group"
}, q_ = { class: "filter-group" }, z_ = { class: "flex items-center" }, K_ = { class: "filter-group" }, W_ = { class: "space-y-2" }, G_ = { class: "flex items-center" }, Y_ = { class: "flex items-center" }, J_ = { class: "flex items-center" }, X_ = { class: "flex items-center" }, Q_ = {
  key: 1,
  class: "filter-group"
}, Z_ = { class: "space-y-2" }, e2 = ["value"], t2 = { class: "ml-2 text-sm" }, n2 = {
  key: 2,
  class: "filter-group"
}, s2 = { class: "space-y-2" }, o2 = ["value"], r2 = { class: "ml-2 text-sm" }, i2 = {
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
    const n = e, s = t, o = q("manual"), r = q([]), i = q([]), l = q([]), a = q(!1), c = q(!1), f = () => {
      const A = new URLSearchParams(window.location.search);
      r.value = [], i.value = [], l.value = [], a.value = !1, o.value = A.get("sort_by") || "manual", A.get("filter.v.availability") === "1" && (a.value = !0);
      const S = A.getAll("filter.p.product_type");
      S.length > 0 && (i.value = S);
      const O = A.getAll("filter.p.vendor");
      O.length > 0 && (l.value = O);
      const b = A.getAll("filter.price.range");
      b.length > 0 && (r.value = b);
    }, u = () => {
      f();
    }, p = Z(() => {
      var S, O;
      const A = ((O = (S = window.Shopline) == null ? void 0 : S.theme) == null ? void 0 : O.settings) || {};
      return {
        "--card-radius": A.card_border_radius ? `${A.card_border_radius}px` : "8px"
      };
    }), m = Z(() => {
      const A = /* @__PURE__ */ new Set();
      return n.products.forEach((S) => {
        S.product_type && A.add(S.product_type);
      }), Array.from(A).sort();
    }), v = Z(() => {
      const A = /* @__PURE__ */ new Set();
      return n.products.forEach((S) => {
        S.vendor && A.add(S.vendor);
      }), Array.from(A).sort();
    }), h = Z(() => r.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), $ = () => {
      const A = new URL(window.location.href);
      o.value === "manual" ? A.searchParams.delete("sort_by") : A.searchParams.set("sort_by", o.value), window.location.href = A.toString();
    }, x = () => {
      c.value || y(), _();
    }, y = () => {
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
    }, g = () => {
      r.value = [], i.value = [], l.value = [], a.value = !1;
      const A = new URLSearchParams(window.location.search), S = [];
      for (const [T] of A)
        T.startsWith("filter.") && S.push(T);
      S.forEach((T) => A.delete(T));
      const O = A.get("sort_by"), b = `${window.location.pathname}${O ? "?sort_by=" + O : ""}`;
      window.location.href = b;
    }, C = () => {
      c.value = !1, y();
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
      f(), window.addEventListener("popstate", u);
    }), js(() => {
      window.removeEventListener("popstate", u);
    }), (A, S) => (w(), N("div", y_, [
      d("div", b_, [
        d("button", {
          onClick: S[0] || (S[0] = (O) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
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
        style: Ge(p.value)
      }, [
        d("div", __, [
          e.showSort ? (w(), N("div", E_, [
            S[22] || (S[22] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
            $e(d("select", {
              "onUpdate:modelValue": S[1] || (S[1] = (O) => o.value = O),
              onChange: $,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, S[21] || (S[21] = [
              ls('<option value="manual" data-v-16b588fe>Featured</option><option value="best-selling" data-v-16b588fe>Best Selling</option><option value="title-ascending" data-v-16b588fe>Alphabetically, A-Z</option><option value="title-descending" data-v-16b588fe>Alphabetically, Z-A</option><option value="price-ascending" data-v-16b588fe>Price, low to high</option><option value="price-descending" data-v-16b588fe>Price, high to low</option><option value="created-ascending" data-v-16b588fe>Date, old to new</option><option value="created-descending" data-v-16b588fe>Date, new to old</option>', 8)
            ]), 544), [
              [Ds, o.value]
            ])
          ])) : L("", !0),
          d("div", w_, [
            S[24] || (S[24] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
            d("label", x_, [
              $e(d("input", {
                type: "checkbox",
                "onUpdate:modelValue": S[2] || (S[2] = (O) => a.value = O),
                onChange: x,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Le, a.value]
              ]),
              S[23] || (S[23] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          d("div", N_, [
            S[29] || (S[29] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
            d("div", S_, [
              d("label", k_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": S[3] || (S[3] = (O) => r.value = O),
                  onChange: x,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[25] || (S[25] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              d("label", C_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": S[4] || (S[4] = (O) => r.value = O),
                  onChange: x,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[26] || (S[26] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              d("label", O_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": S[5] || (S[5] = (O) => r.value = O),
                  onChange: x,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[27] || (S[27] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              d("label", $_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": S[6] || (S[6] = (O) => r.value = O),
                  onChange: x,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                S[28] || (S[28] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          m.value.length > 0 ? (w(), N("div", T_, [
            S[30] || (S[30] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
            d("div", D_, [
              (w(!0), N(ie, null, be(m.value, (O) => (w(), N("label", {
                key: O,
                class: "flex items-center"
              }, [
                $e(d("input", {
                  type: "checkbox",
                  value: O,
                  "onUpdate:modelValue": S[7] || (S[7] = (b) => i.value = b),
                  onChange: x,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, V_), [
                  [Le, i.value]
                ]),
                d("span", A_, j(O), 1)
              ]))), 128))
            ])
          ])) : L("", !0),
          v.value.length > 0 ? (w(), N("div", I_, [
            S[31] || (S[31] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
            d("div", M_, [
              (w(!0), N(ie, null, be(v.value, (O) => (w(), N("label", {
                key: O,
                class: "flex items-center"
              }, [
                $e(d("input", {
                  type: "checkbox",
                  value: O,
                  "onUpdate:modelValue": S[8] || (S[8] = (b) => l.value = b),
                  onChange: x,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, P_), [
                  [Le, l.value]
                ]),
                d("span", R_, j(O), 1)
              ]))), 128))
            ])
          ])) : L("", !0),
          h.value ? (w(), N("button", {
            key: 3,
            onClick: g,
            class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
          }, " Clear all filters ")) : L("", !0)
        ])
      ], 4),
      (w(), ct(bn, { to: "body" }, [
        c.value ? (w(), N("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: S[19] || (S[19] = zt((O) => c.value = !1, ["self"]))
        }, [
          d("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: S[9] || (S[9] = (O) => c.value = !1)
          }),
          d("div", L_, [
            d("div", F_, [
              d("div", B_, [
                S[33] || (S[33] = d("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                d("button", {
                  onClick: S[10] || (S[10] = (O) => c.value = !1),
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
              d("div", j_, [
                d("div", H_, [
                  e.showSort ? (w(), N("div", U_, [
                    S[35] || (S[35] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
                    $e(d("select", {
                      "onUpdate:modelValue": S[11] || (S[11] = (O) => o.value = O),
                      onChange: $,
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
                      [Ds, o.value]
                    ])
                  ])) : L("", !0),
                  d("div", q_, [
                    S[37] || (S[37] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
                    d("label", z_, [
                      $e(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": S[12] || (S[12] = (O) => a.value = O),
                        onChange: x,
                        class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      }, null, 544), [
                        [Le, a.value]
                      ]),
                      S[36] || (S[36] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  d("div", K_, [
                    S[42] || (S[42] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
                    d("div", W_, [
                      d("label", G_, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": S[13] || (S[13] = (O) => r.value = O),
                          onChange: x,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[38] || (S[38] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      d("label", Y_, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": S[14] || (S[14] = (O) => r.value = O),
                          onChange: x,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[39] || (S[39] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      d("label", J_, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": S[15] || (S[15] = (O) => r.value = O),
                          onChange: x,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[40] || (S[40] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      d("label", X_, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": S[16] || (S[16] = (O) => r.value = O),
                          onChange: x,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        S[41] || (S[41] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  m.value.length > 0 ? (w(), N("div", Q_, [
                    S[43] || (S[43] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
                    d("div", Z_, [
                      (w(!0), N(ie, null, be(m.value, (O) => (w(), N("label", {
                        key: O,
                        class: "flex items-center"
                      }, [
                        $e(d("input", {
                          type: "checkbox",
                          value: O,
                          "onUpdate:modelValue": S[17] || (S[17] = (b) => i.value = b),
                          onChange: x,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, e2), [
                          [Le, i.value]
                        ]),
                        d("span", t2, j(O), 1)
                      ]))), 128))
                    ])
                  ])) : L("", !0),
                  v.value.length > 0 ? (w(), N("div", n2, [
                    S[44] || (S[44] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
                    d("div", s2, [
                      (w(!0), N(ie, null, be(v.value, (O) => (w(), N("label", {
                        key: O,
                        class: "flex items-center"
                      }, [
                        $e(d("input", {
                          type: "checkbox",
                          value: O,
                          "onUpdate:modelValue": S[18] || (S[18] = (b) => l.value = b),
                          onChange: x,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, o2), [
                          [Le, l.value]
                        ]),
                        d("span", r2, j(O), 1)
                      ]))), 128))
                    ])
                  ])) : L("", !0),
                  h.value ? (w(), N("button", {
                    key: 3,
                    onClick: g,
                    class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
                  }, " Clear all filters ")) : L("", !0)
                ])
              ]),
              d("div", { class: "p-4 border-t" }, [
                d("button", {
                  onClick: C,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : L("", !0)
      ]))
    ]));
  }
}, Lf = /* @__PURE__ */ Ye(i2, [["__scopeId", "data-v-16b588fe"]]), l2 = { class: "collection-grid" }, a2 = {
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
    const t = e, n = q(!1), s = q(!1), o = q(t.currentPage), r = q(t.products.length), i = q("manual"), l = q({}), a = q(null), c = q(null), f = Z(() => {
      const b = Number(t.columnsMobile), T = t.columnsDesktop, I = b === 1 ? "grid-cols-1" : "grid-cols-2", D = T <= 3 ? `md:grid-cols-${T}` : "md:grid-cols-3", P = `lg:grid-cols-${T}`;
      return `grid ${I} ${D} ${P} gap-4 lg:gap-6`;
    }), u = Z(() => {
      var I, D, P;
      let b = [...t.products];
      switch (l.value.inStockOnly && (b = b.filter((z) => z.available)), ((I = l.value.priceRanges) == null ? void 0 : I.length) > 0 && (b = b.filter((z) => {
        const K = z.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? K < 50 : ee === "50-100" ? K >= 50 && K < 100 : ee === "100-200" ? K >= 100 && K < 200 : ee === "200+" ? K >= 200 : !1);
      })), ((D = l.value.types) == null ? void 0 : D.length) > 0 && (b = b.filter((z) => l.value.types.includes(z.product_type))), ((P = l.value.vendors) == null ? void 0 : P.length) > 0 && (b = b.filter((z) => l.value.vendors.includes(z.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          b.sort((z, K) => z.price - K.price);
          break;
        case "price-descending":
          b.sort((z, K) => K.price - z.price);
          break;
        case "title-ascending":
          b.sort((z, K) => z.title.localeCompare(K.title));
          break;
        case "title-descending":
          b.sort((z, K) => K.title.localeCompare(z.title));
          break;
        case "created-ascending":
          b.sort((z, K) => new Date(z.created_at) - new Date(K.created_at));
          break;
        case "created-descending":
          b.sort((z, K) => new Date(K.created_at) - new Date(z.created_at));
          break;
      }
      return b;
    }), p = Z(() => {
      if (t.enableInfiniteScroll)
        return u.value.slice(0, r.value);
      const b = (o.value - 1) * t.productsPerPage, T = b + t.productsPerPage;
      return u.value.slice(b, T);
    }), m = Z(() => t.totalPages || Math.ceil(u.value.length / t.productsPerPage)), v = Z(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : r.value < u.value.length), h = Z(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, u.value.length - r.value)), $ = Z(() => {
      const b = [], T = m.value, I = o.value;
      if (T <= 7)
        for (let D = 1; D <= T; D++)
          b.push(D);
      else if (I <= 3) {
        for (let D = 1; D <= 5; D++)
          b.push(D);
        b.push("..."), b.push(T);
      } else if (I >= T - 2) {
        b.push(1), b.push("...");
        for (let D = T - 4; D <= T; D++)
          b.push(D);
      } else {
        b.push(1), b.push("...");
        for (let D = I - 1; D <= I + 1; D++)
          b.push(D);
        b.push("..."), b.push(T);
      }
      return b.filter((D) => D === "..." || D >= 1 && D <= T);
    }), x = (b) => {
      l.value = b, o.value = 1, r.value = t.productsPerPage;
    }, y = () => {
      o.value = 1, r.value = t.productsPerPage;
    }, g = () => {
      s.value = !0, setTimeout(() => {
        r.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, C = async (b) => {
      var I;
      const T = new FormData();
      T.append("id", b.variants[0].id), T.append("quantity", "1"), await ((I = window.OrionCart) == null ? void 0 : I.addItem(T)), console.log("Added to cart:", b.title);
    }, _ = (b) => {
      a.value = b;
    }, A = () => {
      a.value = null;
    };
    let S = null;
    const O = () => {
      !t.enableInfiniteScroll || !c.value || (S = new IntersectionObserver(
        (b) => {
          b[0].isIntersecting && v.value && !s.value && g();
        },
        { threshold: 0.1 }
      ), S.observe(c.value));
    };
    return He(() => {
      O();
    }), Ct(() => {
      S && S.disconnect();
    }), sn(() => t.enableInfiniteScroll, () => {
      O();
    }), (b, T) => (w(), N("div", l2, [
      e.showHeader ? (w(), N("div", a2, [
        d("h1", c2, j(e.collectionTitle), 1),
        e.collectionDescription ? (w(), N("div", u2, j(e.collectionDescription), 1)) : L("", !0),
        d("div", d2, [
          d("p", f2, j(e.totalProducts || u.value.length) + " products ", 1),
          e.enableSorting ? (w(), N("div", p2, [
            $e(d("select", {
              "onUpdate:modelValue": T[0] || (T[0] = (I) => i.value = I),
              onChange: y,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, T[5] || (T[5] = [
              ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Ds, i.value]
            ])
          ])) : L("", !0)
        ])
      ])) : L("", !0),
      d("div", h2, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (w(), N("aside", m2, [
          d("collection-filters", {
            products: e.products,
            onUpdateFilters: x
          }, null, 40, g2)
        ])) : L("", !0),
        d("div", {
          class: we(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (w(), N("div", {
            key: 0,
            class: we(f.value)
          }, [
            (w(), N(ie, null, be(6, (I) => d("div", {
              key: I,
              class: "animate-pulse"
            }, T[6] || (T[6] = [
              d("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              d("div", { class: "mt-4 space-y-2" }, [
                d("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                d("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : u.value.length === 0 ? (w(), N("div", v2, T[7] || (T[7] = [
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
          ]))) : (w(), N("div", {
            key: 2,
            class: we(f.value)
          }, [
            (w(!0), N(ie, null, be(p.value, (I) => (w(), N("product-card", {
              key: I.id,
              product: I,
              onQuickAdd: C,
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
              s.value ? (w(), N("div", _2, T[8] || (T[8] = [
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
              ]))) : L("", !0)
            ], 512)) : v.value ? (w(), N("div", E2, [
              d("button", {
                onClick: g,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (w(), N("span", x2, "Loading...")) : (w(), N("span", N2, "Load More (" + j(h.value) + " remaining)", 1))
              ], 8, w2)
            ])) : L("", !0),
            !e.enableInfiniteScroll && m.value > 1 ? (w(), N("nav", S2, [
              d("div", k2, [
                d("button", {
                  onClick: T[1] || (T[1] = (I) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, C2),
                d("button", {
                  onClick: T[2] || (T[2] = (I) => o.value++),
                  disabled: o.value === m.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, O2)
              ]),
              d("div", $2, [
                d("div", null, [
                  d("nav", T2, [
                    d("button", {
                      onClick: T[3] || (T[3] = (I) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, T[9] || (T[9] = [
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
                    ]), 8, D2),
                    (w(!0), N(ie, null, be($.value, (I) => (w(), N("button", {
                      key: I,
                      onClick: (D) => o.value = I,
                      class: we([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === I ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, j(I), 11, V2))), 128)),
                    d("button", {
                      onClick: T[4] || (T[4] = (I) => o.value++),
                      disabled: o.value === m.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, T[10] || (T[10] = [
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
          d("div", I2, [
            d("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: A
            }),
            d("div", M2, [
              d("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                d("button", {
                  onClick: A,
                  class: "bg-white rounded-md text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                }, T[11] || (T[11] = [
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
              d("div", P2, [
                d("h3", R2, j(a.value.title), 1),
                T[12] || (T[12] = d("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
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
      $e(d("select", {
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
  class: "fixed inset-0 z-50 overflow-hidden"
}, H2 = { class: "absolute inset-0 overflow-hidden" }, U2 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, q2 = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, z2 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, K2 = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, W2 = { class: "h-12 flex flex-col justify-between" }, G2 = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, Y2 = { class: "mb-6" }, J2 = { class: "flex items-center cursor-pointer" }, X2 = { class: "mb-6" }, Q2 = { class: "space-y-2" }, Z2 = ["value"], eE = { class: "ml-2 text-sm" }, tE = {
  key: 0,
  class: "mb-6"
}, nE = { class: "space-y-2" }, sE = ["value"], oE = { class: "ml-2 text-sm" }, rE = {
  key: 1,
  class: "mb-6"
}, iE = { class: "space-y-2" }, lE = ["value"], aE = { class: "ml-2 text-sm" }, cE = {
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
      const v = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.product_type && v.add(h.product_type);
      }), Array.from(v).sort();
    }), i = Z(() => {
      const v = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.vendor && v.add(h.vendor);
      }), Array.from(v).sort();
    }), l = Z(() => {
      let v = 0;
      return s.value.inStock && v++, v += s.value.priceRanges.length, v += s.value.types.length, v += s.value.vendors.length, v;
    }), a = () => {
      n.value = !n.value, n.value ? (p(), document.body.style.overflow = "hidden") : document.body.style.overflow = "";
    }, c = () => {
      n.value = !1, document.body.style.overflow = "";
    }, f = () => {
      const v = new URLSearchParams(window.location.search), h = [];
      for (const [x] of v)
        x.startsWith("filter.") && h.push(x);
      h.forEach((x) => {
        for (; v.has(x); )
          v.delete(x);
      }), s.value.inStock && v.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((x) => {
        v.append("filter.price.range", x);
      }), s.value.types.length > 0 && s.value.types.forEach((x) => {
        v.append("filter.p.product_type", x);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((x) => {
        v.append("filter.p.vendor", x);
      });
      const $ = `${window.location.pathname}${v.toString() ? "?" + v.toString() : ""}`;
      window.location.href = $;
    }, u = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const v = new URLSearchParams(window.location.search), h = [];
      for (const [y] of v)
        y.startsWith("filter.") && h.push(y);
      h.forEach((y) => v.delete(y));
      const $ = v.get("sort_by"), x = `${window.location.pathname}${$ ? "?sort_by=" + $ : ""}`;
      window.location.href = x;
    }, p = () => {
      const v = new URLSearchParams(window.location.search);
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      }, v.get("filter.v.availability") === "1" && (s.value.inStock = !0);
      const h = v.getAll("filter.p.product_type");
      h.length > 0 && (s.value.types = h);
      const $ = v.getAll("filter.p.vendor");
      $.length > 0 && (s.value.vendors = $);
      const x = v.getAll("filter.price.range");
      x.length > 0 && (s.value.priceRanges = x);
    }, m = () => {
      p();
    };
    return He(() => {
      p(), window.addEventListener("popstate", m);
    }), js(() => {
      window.removeEventListener("popstate", m), document.body.style.overflow = "";
    }), (v, h) => (w(), N("div", null, [
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
          class: we(["ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }]),
          style: { borderRadius: "9999px" }
        }, j(l.value || "0"), 3)
      ]),
      (w(), ct(bn, { to: "body" }, [
        ue(ot, { name: "drawer" }, {
          default: Pe(() => [
            n.value ? (w(), N("div", j2, [
              d("div", H2, [
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
                d("div", U2, [
                  ue(ot, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      n.value ? (w(), N("div", q2, [
                        d("div", z2, [
                          d("div", K2, [
                            d("div", W2, [
                              h[6] || (h[6] = d("h2", { class: "text-lg font-medium text-gray-900" }, "Filters", -1)),
                              d("p", {
                                class: we(["text-sm text-gray-500 h-5 transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }])
                              }, j(l.value || "0") + " " + j((l.value || 0) === 1 ? "filter" : "filters") + " active ", 3)
                            ]),
                            d("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: c
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
                          d("div", G2, [
                            d("div", Y2, [
                              h[9] || (h[9] = d("h3", { class: "font-medium mb-3" }, "Availability", -1)),
                              d("label", J2, [
                                $e(d("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": h[0] || (h[0] = ($) => s.value.inStock = $),
                                  class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                }, null, 512), [
                                  [Le, s.value.inStock]
                                ]),
                                h[8] || (h[8] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            d("div", X2, [
                              h[10] || (h[10] = d("h3", { class: "font-medium mb-3" }, "Price", -1)),
                              d("div", Q2, [
                                (w(), N(ie, null, be(o, ($) => d("label", {
                                  key: $.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: $.value,
                                    "onUpdate:modelValue": h[1] || (h[1] = (x) => s.value.priceRanges = x),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, Z2), [
                                    [Le, s.value.priceRanges]
                                  ]),
                                  d("span", eE, j($.label), 1)
                                ])), 64))
                              ])
                            ]),
                            r.value.length > 0 ? (w(), N("div", tE, [
                              h[11] || (h[11] = d("h3", { class: "font-medium mb-3" }, "Product Type", -1)),
                              d("div", nE, [
                                (w(!0), N(ie, null, be(r.value, ($) => (w(), N("label", {
                                  key: $,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: $,
                                    "onUpdate:modelValue": h[2] || (h[2] = (x) => s.value.types = x),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, sE), [
                                    [Le, s.value.types]
                                  ]),
                                  d("span", oE, j($), 1)
                                ]))), 128))
                              ])
                            ])) : L("", !0),
                            i.value.length > 0 ? (w(), N("div", rE, [
                              h[12] || (h[12] = d("h3", { class: "font-medium mb-3" }, "Brand", -1)),
                              d("div", iE, [
                                (w(!0), N(ie, null, be(i.value, ($) => (w(), N("label", {
                                  key: $,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: $,
                                    "onUpdate:modelValue": h[3] || (h[3] = (x) => s.value.vendors = x),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, lE), [
                                    [Le, s.value.vendors]
                                  ]),
                                  d("span", aE, j($), 1)
                                ]))), 128))
                              ])
                            ])) : L("", !0)
                          ]),
                          d("div", { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, [
                            d("button", {
                              onClick: f,
                              class: "w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Apply Filters "),
                            d("button", {
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
}, uE = /* @__PURE__ */ Ye(cE, [["__scopeId", "data-v-7b26bf02"]]), dE = { class: "product-gallery" }, fE = { class: "main-image-wrapper" }, pE = ["src", "alt"], hE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, mE = {
  key: 0,
  class: "thumbnails-wrapper"
}, gE = ["disabled"], vE = ["onClick", "aria-label"], yE = ["src", "alt"], bE = ["disabled"], _E = {
  key: 1,
  class: "swiper-dots"
}, EE = ["onClick", "aria-label"], wE = ["src", "alt"], xE = { class: "lightbox-counter" }, NE = 80, Ko = 4, $c = 2, SE = {
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
    const t = e, n = q(0), s = q(!1), o = q(!1), r = q(!1), i = q(!1), l = q(0), a = q(null), c = q(0), f = q(0), u = q({}), p = Z(() => t.images.map((S) => {
      if (S.src)
        return S;
      const O = S.url || S;
      return {
        src: `${O}?width=${t.imageTransformWidth}`,
        thumbnail: `${O}?width=${t.thumbnailWidth}`,
        alt: S.alt || t.productTitle
      };
    })), m = Z(() => p.value[n.value] || { src: "", alt: "" }), v = Z(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${f.value - 150 / 2}px`
    })), h = Z(() => {
      const O = c.value / u.value.width * 100, b = f.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * $c}px ${u.value.height * $c}px`,
        backgroundPosition: `${O}% ${b}%`
      };
    }), $ = (S) => {
      s.value = !0, n.value = S;
    }, x = (S) => {
      S === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - Ko,
        l.value + 1
      );
    }, y = (S) => {
      n.value = S, o.value = !0, document.body.style.overflow = "hidden";
    }, g = () => {
      o.value = !1, document.body.style.overflow = "";
    }, C = (S) => {
      S === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, _ = (S) => {
      const O = S.currentTarget.getBoundingClientRect();
      u.value = O, c.value = S.clientX - O.left, f.value = S.clientY - O.top;
    }, { lengthX: A } = Q1(
      a,
      {
        onSwipeEnd() {
          A.value > 50 ? x("prev") : A.value < -50 && x("next");
        }
      }
    );
    return He(() => {
      i.value = window.innerWidth < 768;
      const S = () => {
        i.value = window.innerWidth < 768;
      }, O = (b) => {
        o.value && (b.key === "Escape" && g(), b.key === "ArrowLeft" && C("prev"), b.key === "ArrowRight" && C("next"));
      };
      window.addEventListener("resize", S), window.addEventListener("keydown", O), Ct(() => {
        window.removeEventListener("resize", S), window.removeEventListener("keydown", O);
      });
    }), (S, O) => (w(), N("div", dE, [
      d("div", fE, [
        d("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: O[1] || (O[1] = (b) => y(n.value)),
          onMouseenter: O[2] || (O[2] = (b) => r.value = !0),
          onMouseleave: O[3] || (O[3] = (b) => r.value = !1),
          onMousemove: _
        }, [
          d("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: we(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: O[0] || (O[0] = (b) => s.value = !1)
          }, null, 42, pE),
          s.value ? (w(), N("div", hE, O[9] || (O[9] = [
            d("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : L("", !0),
          O[10] || (O[10] = d("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
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
          r.value && !i.value ? (w(), N("div", {
            key: 1,
            class: "zoom-lens",
            style: Ge(v.value)
          }, null, 4)) : L("", !0)
        ], 32),
        r.value && !i.value ? (w(), N("div", {
          key: 0,
          class: "zoom-preview",
          style: Ge(h.value)
        }, null, 4)) : L("", !0)
      ]),
      p.value.length > 1 ? (w(), N("div", mE, [
        p.value.length > Ko ? (w(), N("button", {
          key: 0,
          onClick: O[4] || (O[4] = (b) => x("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, O[11] || (O[11] = [
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
        ]), 8, gE)) : L("", !0),
        d("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          d("div", {
            class: "thumbnails-track",
            style: Ge({ transform: `translateX(-${l.value * (NE + 8)}px)` })
          }, [
            (w(!0), N(ie, null, be(p.value, (b, T) => (w(), N("button", {
              key: T,
              onClick: (I) => $(T),
              class: we(["thumbnail", { active: T === n.value }]),
              "aria-label": `View image ${T + 1}`
            }, [
              d("img", {
                src: b.thumbnail || b.src,
                alt: b.alt,
                class: "w-full h-full object-contain"
              }, null, 8, yE)
            ], 10, vE))), 128))
          ], 4)
        ], 512),
        p.value.length > Ko ? (w(), N("button", {
          key: 1,
          onClick: O[5] || (O[5] = (b) => x("next")),
          disabled: l.value >= p.value.length - Ko,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, O[12] || (O[12] = [
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
        ]), 8, bE)) : L("", !0)
      ])) : L("", !0),
      p.value.length > 1 && i.value ? (w(), N("div", _E, [
        (w(!0), N(ie, null, be(p.value, (b, T) => (w(), N("button", {
          key: T,
          onClick: (I) => $(T),
          class: we(["swiper-dot", { active: T === n.value }]),
          "aria-label": `Go to image ${T + 1}`
        }, null, 10, EE))), 128))
      ])) : L("", !0),
      (w(), ct(bn, { to: "body" }, [
        o.value ? (w(), N("div", {
          key: 0,
          class: "lightbox",
          onClick: g
        }, [
          d("button", {
            onClick: g,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, O[13] || (O[13] = [
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
          p.value.length > 1 ? (w(), N("button", {
            key: 0,
            onClick: O[6] || (O[6] = zt((b) => C("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, O[14] || (O[14] = [
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
          ]))) : L("", !0),
          d("div", {
            class: "lightbox-image-wrapper",
            onClick: O[7] || (O[7] = zt(() => {
            }, ["stop"]))
          }, [
            d("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, wE)
          ]),
          p.value.length > 1 ? (w(), N("button", {
            key: 1,
            onClick: O[8] || (O[8] = zt((b) => C("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, O[15] || (O[15] = [
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
          ]))) : L("", !0),
          d("div", xE, j(n.value + 1) + " / " + j(p.value.length), 1)
        ])) : L("", !0)
      ]))
    ]));
  }
}, kE = /* @__PURE__ */ Ye(SE, [["__scopeId", "data-v-a7c1d2a3"]]), CE = { class: "product-info" }, OE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, $E = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, TE = { class: "price-wrapper mb-6" }, DE = { class: "flex items-baseline gap-3" }, VE = { class: "text-3xl font-semibold text-gray-900" }, AE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, IE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, ME = {
  key: 1,
  class: "mb-6"
}, PE = ["product", "current-variant"], RE = ["value"], LE = { class: "mb-4" }, FE = ["max"], BE = { class: "mb-4" }, jE = {
  key: 0,
  class: "text-red-600 font-medium"
}, HE = {
  key: 1,
  class: "text-amber-600"
}, UE = {
  key: 2,
  class: "text-green-600"
}, qE = { class: "flex flex-col sm:flex-row gap-3" }, zE = ["disabled"], KE = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, WE = { key: 1 }, GE = { key: 2 }, YE = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, JE = ["innerHTML"], XE = { class: "space-y-4" }, QE = {
  key: 0,
  class: "group"
}, ZE = ["innerHTML"], ew = {
  key: 1,
  class: "group"
}, tw = { class: "mt-8 pt-8 border-t" }, nw = { class: "flex gap-3" }, sw = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, ow = {
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
    const n = e, s = t, o = q(n.product.selected_or_first_available_variant || (($ = n.product.variants) == null ? void 0 : $[0]) || {}), r = q(1), i = q(!1), l = q(!1), a = Z(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = Z(() => {
      var x;
      return (x = n.product.options) == null ? void 0 : x.some(
        (y) => y.name.toLowerCase() === "size" || y.name.toLowerCase() === "taille"
      );
    }), f = (x) => `$${(x / 100).toFixed(2)}`, u = (x) => {
      o.value = x, s("variant-change", x);
      const y = new URL(window.location);
      y.searchParams.set("variant", x.id), window.history.replaceState({}, "", y);
    }, p = async () => {
      var y;
      i.value = !0;
      const x = new FormData();
      x.append("id", o.value.id), x.append("quantity", r.value);
      try {
        await ((y = window.OrionCart) == null ? void 0 : y.addItem(x));
        const g = event.target, C = g.textContent;
        g.textContent = "✓ Added to Cart", setTimeout(() => {
          g.textContent = C;
        }, 2e3);
      } catch (g) {
        console.error("Failed to add to cart:", g), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, v = (x) => {
      const y = window.location.href, g = n.product.title, C = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(y)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(y)}&text=${encodeURIComponent(g)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(y)}&description=${encodeURIComponent(g)}`
      };
      C[x] && window.open(C[x], "_blank", "width=600,height=400");
    }, h = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href), l.value = !0, setTimeout(() => {
          l.value = !1;
        }, 2e3);
      } catch (x) {
        console.error("Failed to copy link:", x);
      }
    };
    return sn(() => n.product.selected_variant, (x) => {
      x && (o.value = x);
    }), (x, y) => (w(), N("div", CE, [
      d("h1", OE, j(e.product.title), 1),
      e.product.vendor ? (w(), N("p", $E, " by " + j(e.product.vendor), 1)) : L("", !0),
      d("div", TE, [
        d("div", DE, [
          d("span", VE, j(f(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (w(), N("span", AE, j(f(o.value.compare_at_price)), 1)) : L("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (w(), N("p", IE, " Save " + j(f(o.value.compare_at_price - o.value.price)) + " (" + j(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : L("", !0)
      ]),
      e.product.has_only_default_variant ? L("", !0) : (w(), N("div", ME, [
        d("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, PE)
      ])),
      d("form", {
        onSubmit: zt(p, ["prevent"]),
        class: "mb-8"
      }, [
        d("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, RE),
        d("div", LE, [
          y[4] || (y[4] = d("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          $e(d("quantity-selector", {
            "onUpdate:modelValue": y[0] || (y[0] = (g) => r.value = g),
            min: 1,
            max: a.value
          }, null, 8, FE), [
            [Fn, r.value]
          ])
        ]),
        d("div", BE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (w(), N("p", HE, " Only " + j(o.value.inventory_quantity) + " left in stock ", 1)) : (w(), N("p", UE, " ✓ In Stock ")) : (w(), N("p", jE, " Out of Stock "))
        ]),
        d("div", qE, [
          d("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || i.value
          }, [
            i.value ? (w(), N("span", KE, y[5] || (y[5] = [
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
            ]))) : o.value.available ? (w(), N("span", GE, " Add to Cart ")) : (w(), N("span", WE, " Sold Out "))
          ], 8, zE),
          e.showBuyNow ? (w(), ct(ss, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Pe(() => y[6] || (y[6] = [
              je(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : L("", !0)
        ])
      ], 32),
      e.product.description ? (w(), N("div", YE, [
        y[7] || (y[7] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        d("div", {
          innerHTML: e.product.description
        }, null, 8, JE)
      ])) : L("", !0),
      d("div", XE, [
        y[10] || (y[10] = ls('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (w(), N("details", QE, [
          y[8] || (y[8] = d("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
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
          }, null, 8, ZE)
        ])) : L("", !0),
        c.value ? (w(), N("details", ew, y[9] || (y[9] = [
          ls('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : L("", !0)
      ]),
      d("div", tw, [
        y[15] || (y[15] = d("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        d("div", nw, [
          d("button", {
            onClick: y[1] || (y[1] = (g) => v("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, y[11] || (y[11] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          d("button", {
            onClick: y[2] || (y[2] = (g) => v("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, y[12] || (y[12] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          d("button", {
            onClick: y[3] || (y[3] = (g) => v("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, y[13] || (y[13] = [
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
            y[14] || (y[14] = d("svg", {
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
            l.value ? (w(), N("span", sw, " Link copied! ")) : L("", !0)
          ])
        ])
      ])
    ]));
  }
}, rw = /* @__PURE__ */ Ye(ow, [["__scopeId", "data-v-9e2c3b5c"]]), iw = { class: "cart-summary bg-gray-50 rounded-lg p-6 lg:sticky lg:top-24" }, lw = { class: "space-y-3 mb-4" }, aw = { class: "flex justify-between text-sm" }, cw = { class: "text-gray-600" }, uw = { class: "font-medium text-gray-900" }, dw = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, fw = {
  key: 1,
  class: "flex justify-between text-sm"
}, pw = { class: "text-gray-900" }, hw = {
  key: 2,
  class: "flex justify-between text-sm"
}, mw = { class: "text-gray-900" }, gw = { class: "border-t pt-4 mb-6" }, vw = { class: "flex justify-between items-baseline" }, yw = { class: "text-right" }, bw = { class: "text-xl font-bold text-gray-900" }, _w = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, Ew = { class: "mb-6" }, ww = { class: "group" }, xw = { class: "mt-3" }, Nw = ["disabled"], Sw = ["disabled"], kw = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, Cw = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, Ow = ["disabled"], $w = {
  key: 0,
  class: "flex items-center gap-2"
}, Tw = { key: 1 }, Dw = {
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
    const n = e, s = t, o = q(""), r = q(""), i = q(""), l = q(!1), a = q(!1), c = q(!1), f = Z(() => n.cart.item_count || 0), u = Z(() => n.cart.total_price || 0), p = Z(() => n.cart.original_total_price || n.cart.total_price || 0), m = Z(() => n.cart.total_discount || 0), v = Z(() => u.value >= 5e3 ? 0 : 500), h = Z(() => Math.round(u.value * 0.1)), $ = (g) => `$${(g / 100).toFixed(2)}`, x = async () => {
      var g;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, r.value = "", i.value = "";
        try {
          const C = new FormData();
          C.append("discount_code", o.value);
          const _ = await fetch("/discount/apply", {
            method: "POST",
            body: C
          });
          if (_.ok)
            i.value = "Promo code applied successfully!", o.value = "", await ((g = window.OrionCart) == null ? void 0 : g.fetchCart());
          else {
            const A = await _.json();
            r.value = A.message || "Invalid promo code";
          }
        } catch (C) {
          console.error("Failed to apply promo code:", C), r.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, y = async () => {
      if (!(f.value === 0 || a.value)) {
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
    return (g, C) => (w(), N("div", iw, [
      C[10] || (C[10] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      d("div", lw, [
        d("div", aw, [
          d("span", cw, "Subtotal (" + j(f.value) + " " + j(f.value === 1 ? "item" : "items") + ")", 1),
          d("span", uw, j($(p.value)), 1)
        ]),
        m.value > 0 ? (w(), N("div", dw, [
          C[3] || (C[3] = d("span", { class: "flex items-center gap-1" }, [
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
          d("span", null, "-" + j($(m.value)), 1)
        ])) : L("", !0),
        e.showShipping ? (w(), N("div", fw, [
          C[4] || (C[4] = d("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          d("span", pw, j(v.value === 0 ? "Free" : $(v.value)), 1)
        ])) : L("", !0),
        e.showTax ? (w(), N("div", hw, [
          C[5] || (C[5] = d("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          d("span", mw, j($(h.value)), 1)
        ])) : L("", !0)
      ]),
      d("div", gw, [
        d("div", vw, [
          C[6] || (C[6] = d("span", { class: "text-lg font-semibold" }, "Total", -1)),
          d("div", yw, [
            d("span", bw, j($(u.value)), 1),
            m.value > 0 ? (w(), N("p", _w, " You saved " + j($(m.value)) + "! ", 1)) : L("", !0)
          ])
        ])
      ]),
      d("div", Ew, [
        d("details", ww, [
          C[7] || (C[7] = d("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          d("div", xw, [
            d("form", {
              onSubmit: zt(x, ["prevent"]),
              class: "flex gap-2"
            }, [
              $e(d("input", {
                "onUpdate:modelValue": C[0] || (C[0] = (_) => o.value = _),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                disabled: l.value
              }, null, 8, Nw), [
                [Fn, o.value]
              ]),
              d("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !o.value.trim() || l.value
              }, j(l.value ? "Applying..." : "Apply"), 9, Sw)
            ], 32),
            r.value ? (w(), N("p", kw, j(r.value), 1)) : L("", !0),
            i.value ? (w(), N("p", Cw, j(i.value), 1)) : L("", !0)
          ])
        ])
      ]),
      d("button", {
        onClick: y,
        class: "w-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: Ge({
          backgroundColor: c.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: C[1] || (C[1] = (_) => c.value = !0),
        onMouseleave: C[2] || (C[2] = (_) => c.value = !1),
        disabled: f.value === 0 || a.value
      }, [
        a.value ? (w(), N("span", $w, C[8] || (C[8] = [
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
        ]))) : (w(), N("span", Tw, C[9] || (C[9] = [
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
      ], 44, Ow),
      C[11] || (C[11] = ls('<div class="mt-6 space-y-2" data-v-bd5cec1c><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-bd5cec1c></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-bd5cec1c></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-bd5cec1c></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-bd5cec1c><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-bd5cec1c><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-bd5cec1c></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-bd5cec1c><p class="text-xs text-gray-600 mb-2" data-v-bd5cec1c>We accept</p><div class="flex gap-2" data-v-bd5cec1c><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-bd5cec1c></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-bd5cec1c></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#EB001B" data-v-bd5cec1c></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-bd5cec1c></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-bd5cec1c></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-bd5cec1c></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-bd5cec1c></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-bd5cec1c><rect width="48" height="32" rx="4" fill="#253B80" data-v-bd5cec1c></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-bd5cec1c></path></svg></div></div>', 2))
    ]));
  }
}, Vw = /* @__PURE__ */ Ye(Dw, [["__scopeId", "data-v-bd5cec1c"]]), Aw = { class: "slideshow-banner" }, Iw = {
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
      const h = document.querySelector(".slideshow-prev"), $ = document.querySelector(".slideshow-next"), x = document.querySelectorAll(".slide-indicator");
      h && h.addEventListener("click", f), $ && $.addEventListener("click", c), x.forEach((y, g) => {
        y.addEventListener("click", () => a(g));
      }), r.value && u();
    }, a = (h) => {
      var y, g, C, _;
      if (h === n.value || !s.value.length) return;
      (y = s.value[n.value]) == null || y.classList.remove("opacity-100"), (g = s.value[n.value]) == null || g.classList.add("opacity-0");
      const $ = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      $ == null || $.classList.remove("opacity-100"), $ == null || $.classList.add("opacity-50"), n.value = h, (C = s.value[n.value]) == null || C.classList.remove("opacity-0"), (_ = s.value[n.value]) == null || _.classList.add("opacity-100");
      const x = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      x == null || x.classList.remove("opacity-50"), x == null || x.classList.add("opacity-100");
    }, c = () => {
      const h = (n.value + 1) % s.value.length;
      a(h);
    }, f = () => {
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
    }, v = () => {
      r.value && u();
    };
    return He(() => {
      setTimeout(l, 100);
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.addEventListener("mouseenter", m), h.addEventListener("mouseleave", v));
    }), Ct(() => {
      p();
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.removeEventListener("mouseenter", m), h.removeEventListener("mouseleave", v));
    }), (h, $) => (w(), N("div", Aw, [
      jn(h.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Mw = /* @__PURE__ */ Ye(Iw, [["__scopeId", "data-v-8690c751"]]), Pw = { class: "testimonials-carousel relative" }, Rw = {
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
      const _ = document.querySelector(".testimonials-prev"), A = document.querySelector(".testimonials-next"), S = document.querySelectorAll(".testimonial-indicator");
      _ && _.addEventListener("click", u), A && A.addEventListener("click", f), S.forEach((O, b) => {
        O.addEventListener("click", () => c(b));
      }), i.value && p();
    }, c = (_) => {
      if (_ === n.value || !s.value.length || !r.value) return;
      n.value = _;
      const S = -s.value[0].offsetWidth * n.value;
      r.value.style.transform = `translateX(${S}px)`, document.querySelectorAll(".testimonial-indicator").forEach((b, T) => {
        T === n.value ? (b.classList.remove("bg-gray-300"), b.classList.add("bg-red-600")) : (b.classList.remove("bg-red-600"), b.classList.add("bg-gray-300"));
      });
    }, f = () => {
      const _ = (n.value + 1) % s.value.length;
      c(_);
    }, u = () => {
      const _ = n.value === 0 ? s.value.length - 1 : n.value - 1;
      c(_);
    }, p = () => {
      o.value && clearInterval(o.value), o.value = setInterval(() => {
        f();
      }, l.value);
    }, m = () => {
      o.value && (clearInterval(o.value), o.value = null);
    }, v = () => {
      i.value && m();
    }, h = () => {
      i.value && p();
    };
    let $ = 0, x = 0;
    const y = (_) => {
      $ = _.changedTouches[0].screenX;
    }, g = (_) => {
      x = _.changedTouches[0].screenX, C();
    }, C = () => {
      const A = $ - x;
      Math.abs(A) > 50 && (A > 0 ? f() : u());
    };
    return He(() => {
      setTimeout(a, 100);
      const _ = document.querySelector(".testimonials-wrapper");
      _ && (_.addEventListener("mouseenter", v), _.addEventListener("mouseleave", h), _.addEventListener("touchstart", y), _.addEventListener("touchend", g));
    }), Ct(() => {
      m();
      const _ = document.querySelector(".testimonials-wrapper");
      _ && (_.removeEventListener("mouseenter", v), _.removeEventListener("mouseleave", h), _.removeEventListener("touchstart", y), _.removeEventListener("touchend", g));
    }), (_, A) => (w(), N("div", Pw, [
      jn(_.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Lw = /* @__PURE__ */ Ye(Rw, [["__scopeId", "data-v-276cc4e8"]]), Fw = { class: "video-player relative w-full h-full" }, Bw = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, jw = ["src", "title"], Hw = {
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
      const v = r.value ? "1" : "0", h = i.value ? "1" : "0", $ = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${v}&mute=${h}&controls=${$}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${v}&muted=${h}&controls=${$}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), f = (m) => {
      if (!m) return { type: "", id: "" };
      const v = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const $ of v) {
        const x = m.match($);
        if (x)
          return { type: "youtube", id: x[1] };
      }
      const h = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const $ of h) {
        const x = m.match($);
        if (x)
          return { type: "vimeo", id: x[1] };
      }
      return { type: "", id: "" };
    }, u = () => {
      o.value && s.value && (n.value = !0);
    }, p = () => {
      r.value && o.value && s.value && (n.value = !0);
    };
    return He(() => {
      const m = f(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const v = document.querySelector(".play-button");
      v && v.addEventListener("click", u), p();
    }), (m, v) => (w(), N("div", Fw, [
      n.value ? (w(), N("div", Bw, [
        d("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, jw)
      ])) : (w(), N("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        jn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, Uw = /* @__PURE__ */ Ye(Hw, [["__scopeId", "data-v-540fecb2"]]), qw = { class: "password-modal" }, zw = {
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
      const f = document.querySelector(".password-content"), u = document.querySelector(".password-toggle");
      t.value && f && !f.contains(c.target) && !u.contains(c.target) && s();
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
      let f = t.value;
      const u = setInterval(() => {
        t.value !== f && (c(t.value, f), f = t.value);
      }, 50);
      return () => clearInterval(u);
    };
    return He(() => {
      a(() => {
        l();
      });
    }), (c, f) => (w(), N("div", qw, [
      jn(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Kw = /* @__PURE__ */ Ye(zw, [["__scopeId", "data-v-075988c6"]]), Ww = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, Gw = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, Yw = { class: "bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20" }, Jw = { class: "max-w-6xl mx-auto" }, Xw = { class: "relative" }, Qw = { class: "px-4 py-8 sm:px-6 lg:px-8" }, Zw = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, ex = { class: "flex-1 relative group" }, tx = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, nx = {
  key: 0,
  class: "relative"
}, sx = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, ox = { class: "flex flex-wrap gap-2" }, rx = ["onClick"], ix = {
  key: 0,
  class: "border-t border-gray-100"
}, lx = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, ax = {
  key: 0,
  class: "p-6"
}, cx = { class: "animate-pulse" }, ux = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, dx = {
  key: 1,
  class: "p-6"
}, fx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, px = ["href"], hx = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, mx = ["src", "alt"], gx = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, vx = { class: "flex-1 min-w-0" }, yx = { class: "text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2" }, bx = { class: "mt-1 flex items-center gap-2" }, _x = { class: "text-sm font-semibold text-gray-900" }, Ex = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, wx = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, xx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, Nx = ["href"], Sx = { class: "text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors" }, kx = {
  key: 3,
  class: "p-12 text-center"
}, Cx = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, Ox = ["href"], $x = {
  __name: "SearchOverlay",
  setup(e) {
    const t = q(!1), n = q(""), s = q(null), o = q(!1), r = q({
      products: [],
      collections: []
    }), i = q(null), l = Z(() => {
      var x;
      return ((x = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : x.search) || "/search";
    }), a = Z(() => n.value.length > 0), c = Z(() => {
      var g, C;
      const x = [], y = ((C = (g = window.Shopline) == null ? void 0 : g.theme) == null ? void 0 : C.settings) || {};
      for (let _ = 1; _ <= 6; _++) {
        const A = y[`popular_search_${_}`];
        A && A.trim() && x.push(A.trim());
      }
      return x.length === 0 ? ["New Arrivals", "Best Sellers", "Sale", "Summer Collection"] : x;
    }), f = (x) => {
      var A, S;
      if (!x && x !== 0) return "$0.00";
      const y = ((A = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : A.money_format) || "${{amount}}", g = ((S = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : S.current) || "en", _ = new Intl.NumberFormat(g, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(x));
      return y.replace("{{amount}}", _);
    }, u = async () => {
      var x;
      t.value = !0, document.body.style.overflow = "hidden", await Fs(), (x = s.value) == null || x.focus();
    }, p = () => {
      t.value = !1, document.body.style.overflow = "", n.value = "", r.value = { products: [], collections: [] };
    }, m = () => {
      if (clearTimeout(i.value), n.value.length < 2) {
        r.value = { products: [], collections: [] }, o.value = !1;
        return;
      }
      o.value = !0, i.value = setTimeout(() => {
        v();
      }, 300);
    }, v = async () => {
      var x;
      try {
        const y = ((x = window.routes) == null ? void 0 : x.predictive_search_url) || "/search/suggest", g = await fetch(
          `${y}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (g.ok) {
          const C = await g.text(), S = new DOMParser().parseFromString(C, "text/html").querySelectorAll(".predictive-search__list-item"), O = Array.from(S).map((b) => {
            var z, K;
            const T = b.querySelector("a"), I = b.querySelector("img"), D = b.querySelector(".predictive-search__item-head"), P = b.querySelector(".price__item");
            return {
              url: (T == null ? void 0 : T.href) || "#",
              image: (I == null ? void 0 : I.src) || "",
              title: ((z = D == null ? void 0 : D.textContent) == null ? void 0 : z.trim()) || "",
              price: ((K = P == null ? void 0 : P.textContent) == null ? void 0 : K.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          r.value = {
            products: O,
            collections: []
            // Collections can be added if needed
          };
        }
      } catch (y) {
        console.error("Search error:", y), r.value = { products: [], collections: [] };
      } finally {
        o.value = !1;
      }
    }, h = () => {
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(n.value)}`);
    }, $ = (x) => {
      x.key === "Escape" && t.value && p();
    };
    return He(() => {
      document.addEventListener("search-overlay:open", u), document.addEventListener("search-overlay:close", p), document.addEventListener("keydown", $);
    }), Ct(() => {
      document.removeEventListener("search-overlay:open", u), document.removeEventListener("search-overlay:close", p), document.removeEventListener("keydown", $);
    }), (x, y) => (w(), ct(bn, { to: "body" }, [
      ue(ot, { name: "search-overlay" }, {
        default: Pe(() => [
          t.value ? (w(), N("div", Ww, [
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
                var g, C;
                return [
                  t.value ? (w(), N("div", Gw, [
                    d("div", Yw, [
                      d("div", Jw, [
                        d("div", Xw, [
                          d("div", Qw, [
                            d("div", Zw, [
                              d("div", ex, [
                                y[4] || (y[4] = d("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
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
                                  "onUpdate:modelValue": y[0] || (y[0] = (_) => n.value = _),
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
                                d("div", tx, [
                                  o.value ? (w(), N("div", nx, y[2] || (y[2] = [
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (w(), N("button", {
                                    key: 1,
                                    onClick: y[1] || (y[1] = (_) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, y[3] || (y[3] = [
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
                                  ]))) : L("", !0)
                                ])
                              ]),
                              d("button", {
                                type: "button",
                                class: "p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200",
                                onClick: p
                              }, y[5] || (y[5] = [
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
                            !n.value && !o.value ? (w(), N("div", sx, [
                              y[6] || (y[6] = d("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              d("div", ox, [
                                (w(!0), N(ie, null, be(c.value, (_) => (w(), N("button", {
                                  key: _,
                                  onClick: (A) => {
                                    n.value = _, h();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, j(_), 9, rx))), 128))
                              ])
                            ])) : L("", !0)
                          ]),
                          a.value ? (w(), N("div", ix, [
                            d("div", lx, [
                              o.value ? (w(), N("div", ax, [
                                d("div", cx, [
                                  y[8] || (y[8] = d("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  d("div", ux, [
                                    (w(), N(ie, null, be(4, (_) => d("div", {
                                      key: _,
                                      class: "flex items-start space-x-3"
                                    }, y[7] || (y[7] = [
                                      d("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      d("div", { class: "flex-1" }, [
                                        d("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        d("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : r.value.products && r.value.products.length > 0 ? (w(), N("div", dx, [
                                y[10] || (y[10] = d("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                d("div", fx, [
                                  (w(!0), N(ie, null, be(r.value.products, (_) => (w(), N("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: p
                                  }, [
                                    d("div", hx, [
                                      _.image ? (w(), N("img", {
                                        key: 0,
                                        src: _.image,
                                        alt: _.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, mx)) : (w(), N("div", gx, y[9] || (y[9] = [
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
                                    d("div", vx, [
                                      d("p", yx, j(_.title), 1),
                                      d("div", bx, [
                                        d("p", _x, j(f(_.price)), 1),
                                        _.compareAtPrice && _.compareAtPrice > _.price ? (w(), N("p", Ex, j(f(_.compareAtPrice)), 1)) : L("", !0)
                                      ])
                                    ])
                                  ], 8, px))), 128))
                                ])
                              ])) : L("", !0),
                              r.value.collections && r.value.collections.length > 0 ? (w(), N("div", wx, [
                                y[12] || (y[12] = d("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                d("div", xx, [
                                  (w(!0), N(ie, null, be(r.value.collections, (_) => (w(), N("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: p
                                  }, [
                                    d("span", Sx, j(_.title), 1),
                                    y[11] || (y[11] = d("svg", {
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
                                  ], 8, Nx))), 128))
                                ])
                              ])) : L("", !0),
                              n.value && !o.value && (!r.value.products || r.value.products.length === 0) && (!r.value.collections || r.value.collections.length === 0) ? (w(), N("div", kx, y[13] || (y[13] = [
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
                              ]))) : L("", !0)
                            ]),
                            n.value && (((g = r.value.products) == null ? void 0 : g.length) > 0 || ((C = r.value.collections) == null ? void 0 : C.length) > 0) ? (w(), N("div", Cx, [
                              d("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: p
                              }, [
                                je(' View all results for "' + j(n.value) + '" ', 1),
                                y[14] || (y[14] = d("svg", {
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
                              ], 8, Ox)
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
}, Tx = /* @__PURE__ */ Ye($x, [["__scopeId", "data-v-985e236a"]]), Dx = {
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
      var c, f;
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
          const v = parseInt(p);
          u = new Date(v > 1e12 ? v : v * 1e3);
        } else if (typeof a == "string")
          u = new Date(a);
        else
          return "";
        if (isNaN(u.getTime()) || u.getFullYear() < 1900 || u.getFullYear() > 2100)
          return console.warn("Invalid or unreasonable date:", a, "parsed as:", u), "";
        const m = typeof window < "u" && typeof window.Shopline < "u" && ((f = (c = window.Shopline) == null ? void 0 : c.locale) == null ? void 0 : f.current) || "en";
        return new Intl.DateTimeFormat(m, {
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
}, Vx = ["href"], Ax = ["src", "alt"], Ix = { class: "relative p-6 flex-1 flex flex-col z-10" }, Mx = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, Px = { class: "text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight" }, Rx = ["href"], Lx = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, Fx = { key: 0 }, Bx = {
  key: 1,
  class: "text-gray-300"
}, jx = ["datetime"], Hx = { class: "flex-1 mb-6" }, Ux = {
  key: 0,
  class: "text-gray-600 leading-relaxed line-clamp-3"
}, qx = ["innerHTML"], zx = { class: "mt-auto" }, Kx = ["href"];
function Wx(e, t, n, s, o, r) {
  return w(), N("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: Ge(s.cardStyles),
    onMouseenter: t[0] || (t[0] = (i) => s.isHovered = !0),
    onMouseleave: t[1] || (t[1] = (i) => s.isHovered = !1)
  }, [
    t[4] || (t[4] = d("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (w(), N("div", {
      key: 0,
      class: we([s.imageAspectClass, "relative overflow-hidden"])
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
        }, null, 8, Ax),
        t[2] || (t[2] = d("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, Vx)
    ], 2)) : L("", !0),
    d("div", Ix, [
      n.showTags && s.processedTags.length > 0 ? (w(), N("div", Mx, [
        (w(!0), N(ie, null, be(s.processedTags.slice(0, 3), (i) => (w(), N("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, j(i), 1))), 128))
      ])) : L("", !0),
      d("h3", Px, [
        d("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, j(n.title), 9, Rx)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (w(), N("div", Lx, [
        n.showAuthor && n.author ? (w(), N("span", Fx, j(n.author), 1)) : L("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (w(), N("span", Bx, "•")) : L("", !0),
        n.showDate && s.formattedDate ? (w(), N("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, j(s.formattedDate), 9, jx)) : L("", !0)
      ])) : L("", !0),
      d("div", Hx, [
        n.excerpt ? (w(), N("p", Ux, j(n.excerpt), 1)) : n.content ? (w(), N("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-3",
          innerHTML: s.truncatedContent
        }, null, 8, qx)) : L("", !0)
      ]),
      d("div", zx, [
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
        ]), 8, Kx)
      ])
    ])
  ], 36);
}
const Gx = /* @__PURE__ */ Ye(Dx, [["render", Wx], ["__scopeId", "data-v-4d9d9306"]]);
({
  ...ss,
  props: {
    ...ss.props
  }
});
const Yx = /* @__PURE__ */ Ue(Mf), Jx = /* @__PURE__ */ Ue(k1), Xx = /* @__PURE__ */ Ue(U1), Qx = /* @__PURE__ */ Ue(Af), Zx = /* @__PURE__ */ Ue(tb), eN = /* @__PURE__ */ Ue(Rf), tN = /* @__PURE__ */ Ue(Gb), nN = /* @__PURE__ */ Ue(Lf), sN = /* @__PURE__ */ Ue(L2), oN = /* @__PURE__ */ Ue(kE), rN = /* @__PURE__ */ Ue(rw), iN = /* @__PURE__ */ Ue(If), lN = /* @__PURE__ */ Ue(Vw), aN = /* @__PURE__ */ Ue(Mw), cN = /* @__PURE__ */ Ue(Lw), uN = /* @__PURE__ */ Ue(Uw), dN = /* @__PURE__ */ Ue(Kw), fN = /* @__PURE__ */ Ue(Tx);
customElements.define("cart-drawer", Yx);
customElements.define("mobile-menu", Jx);
customElements.define("product-variant-picker", Xx);
customElements.define("quantity-selector", Qx);
customElements.define("sticky-header", Zx);
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
    const f = Lt(Rf, {
      shopName: c.dataset.shopName || "Orion Store",
      logoUrl: c.dataset.logoUrl || "",
      navigationLinks: JSON.parse(c.dataset.navigationLinks || "[]")
    });
    c._vueApp = f, f.mount(c);
  }), e.querySelectorAll(".cart-drawer-mount").forEach((c) => {
    if (c._vueApp) return;
    const f = Lt(Mf);
    c._vueApp = f, f.mount(c);
  }), e.querySelectorAll("product-card").forEach((c) => {
    if (c._vueApp) return;
    const f = {
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
    }, u = Lt(v_, f);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-sort").forEach((c) => {
    if (c._vueApp) return;
    const f = {
      collectionHandle: c.getAttribute("collection-handle"),
      currentSort: c.getAttribute("current-sort") || "manual"
    }, u = Lt(B2, f);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("orion-button").forEach((c) => {
    if (c._vueApp) return;
    const f = {
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
    }, f);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-filter-drawer").forEach((c) => {
    if (c._vueApp) return;
    const f = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]")
    }, u = Lt(uE, f);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-filter-sidebar").forEach((c) => {
    if (c._vueApp) return;
    const f = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]"),
      showSort: c.getAttribute(":show-sort") === "true"
    }, u = Lt(Lf, f);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("article-card").forEach((c) => {
    if (c._vueApp) return;
    const f = {
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
    }, u = Lt(Gx, f);
    c._vueApp = u, u.mount(c);
  }), e === document && document.querySelectorAll(".sticky-header").forEach((f) => {
    if (f.dataset.sticky === "true" && !f._stickyInitialized) {
      f._stickyInitialized = !0;
      let u = window.scrollY;
      window.addEventListener("scroll", () => {
        const p = window.scrollY, m = f.dataset.transparent === "true", v = f.dataset.hideOnScroll === "true";
        p > 100 && !m ? (f.classList.add("sticky", "top-0", "shadow-md"), f.style.backgroundColor = f.dataset.stickyBackground || "#ffffff") : (f.classList.remove("sticky", "shadow-md"), f.style.backgroundColor = ""), v && (p > u && p > 100 ? f.style.transform = "translateY(-100%)" : f.style.transform = "translateY(0)"), u = p;
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
