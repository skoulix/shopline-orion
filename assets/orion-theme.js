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
function _e(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const s = _e(e[n]);
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
  return t && !le(t) && (e.class = _e(t)), n && (e.style = Ge(n)), e;
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
var Ee = {};
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
    } else Ee.NODE_ENV !== "production" && It("cannot run an inactive effect scope.");
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
  tt ? tt.cleanups.push(e) : Ee.NODE_ENV !== "production" && !t && It(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let we;
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
    const t = we, n = qt;
    we = this, qt = !0;
    try {
      return this.fn();
    } finally {
      Ee.NODE_ENV !== "production" && we !== this && It(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), zc(this), we = t, qt = n, this.flags &= -3;
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
  const t = e.dep, n = we, s = qt;
  we = e, qt = !0;
  try {
    qc(e);
    const o = e.fn(e._value);
    (t.version === 0 || pt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    we = n, qt = s, zc(e), e.flags &= -3;
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
class Mr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, Ee.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!we || !qt || we === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== we)
      n = this.activeLink = new vp(we, this), we.deps ? (n.prevDep = we.depsTail, we.depsTail.nextDep = n, we.depsTail = n) : we.deps = we.depsTail = n, Gc(n);
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
function Gc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Gc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), Ee.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const rr = /* @__PURE__ */ new WeakMap(), Xn = Symbol(
  Ee.NODE_ENV !== "production" ? "Object iterate" : ""
), xi = Symbol(
  Ee.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ho = Symbol(
  Ee.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ze(e, t, n) {
  if (qt && we) {
    let s = rr.get(e);
    s || rr.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Mr()), o.map = s, o.key = n), Ee.NODE_ENV !== "production" ? o.track({
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
        c ? Ee.NODE_ENV !== "production" && pa(i, l, o) : (o = ce(o), c = l.call(i, o));
        const f = a.call(i, o);
        return i.set(o, r), c ? pt(r, f) && nn(i, "set", o, r, f) : nn(i, "add", o, r), this;
      },
      delete(o) {
        const r = ce(this), { has: i, get: l } = Mo(r);
        let a = i.call(r, o);
        a ? Ee.NODE_ENV !== "production" && pa(r, i, o) : (o = ce(o), a = i.call(r, o));
        const c = l ? l.call(r, o) : void 0, f = r.delete(o);
        return a && nn(r, "delete", o, void 0, c), f;
      },
      clear() {
        const o = ce(this), r = o.size !== 0, i = Ee.NODE_ENV !== "production" ? Jn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
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
    return Ee.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || it(t) || Yt(t);
    t = s ? t : ce(t), pt(t, n) && (this._rawValue = t, this._value = s ? t : Ze(t), Ee.NODE_ENV !== "production" ? this.dep.trigger({
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
  Ee.NODE_ENV !== "production" && !Ss(e) && It("toRefs() expects a reactive object but received a plain one.");
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
    we !== this)
      return Uc(this, !0), !0;
  }
  get value() {
    const t = Ee.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Kc(this), t && (t.version = this.dep.version), this._value;
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
  } else Ee.NODE_ENV !== "production" && !t && It(
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
  let u, p, m, g, h = !1, V = !1;
  if (Ie(e) ? (p = () => e.value, h = it(e)) : mn(e) ? (p = () => f(e), h = !0) : Y(e) ? (V = !0, h = e.some((_) => mn(_) || it(_)), p = () => e.map((_) => {
    if (Ie(_))
      return _.value;
    if (mn(_))
      return f(_);
    if (oe(_))
      return a ? a(_, 2) : _();
    Ee.NODE_ENV !== "production" && c(_);
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
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      Sn = _;
    }
  } : (p = De, Ee.NODE_ENV !== "production" && c(e)), t && o) {
    const _ = p, A = o === !0 ? 1 / 0 : o;
    p = () => pn(_(), A);
  }
  const C = cl(), E = () => {
    u.stop(), C && C.active && ol(C.effects, u);
  };
  if (r && t) {
    const _ = t;
    t = (...A) => {
      _(...A), E();
    };
  }
  let y = V ? new Array(e.length).fill(Ro) : Ro;
  const $ = (_) => {
    if (!(!(u.flags & 1) || !u.dirty && !_))
      if (t) {
        const A = u.run();
        if (o || h || (V ? A.some((b, N) => pt(b, y[N])) : pt(A, y))) {
          m && m();
          const b = Sn;
          Sn = u;
          try {
            const N = [
              A,
              // pass undefined as the old value when it's changed for the first time
              y === Ro ? void 0 : V && y[0] === Ro ? [] : y,
              g
            ];
            y = A, a ? a(t, 3, N) : (
              // @ts-expect-error
              t(...N)
            );
          } finally {
            Sn = b;
          }
        }
      } else
        u.run();
  };
  return l && l($), u = new fo(p), u.scheduler = i ? () => i($, !1) : $, g = (_) => cu(_, !1, u), m = u.onStop = () => {
    const _ = lr.get(u);
    if (_) {
      if (a)
        a(_, 4);
      else
        for (const A of _) A();
      lr.delete(u);
    }
  }, Ee.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? $(!0) : y = u.run() : i ? i($.bind(null, !0), !0) : u.run(), E.pause = u.pause.bind(u), E.resume = u.resume.bind(u), E.stop = E, E;
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
var O = {};
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
  O.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? R(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && R(`${t} is NaN - the duration expression might be incorrect.`));
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
  } else O.NODE_ENV !== "production" && R(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = O.NODE_ENV !== "production" ? Br[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  if (O.NODE_ENV !== "production") {
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
  if (Es.length) {
    const t = [...new Set(Es)].sort(
      (n, s) => mo(n) - mo(s)
    );
    if (Es.length = 0, kn) {
      kn.push(...t);
      return;
    }
    for (kn = t, O.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), vs = 0; vs < kn.length; vs++) {
      const n = kn[vs];
      O.NODE_ENV !== "production" && ml(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kn = null, vs = 0;
  }
}
const mo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pu(e) {
  O.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = O.NODE_ENV !== "production" ? (n) => ml(e, n) : De;
  try {
    for (Qt = 0; Qt < ht.length; Qt++) {
      const n = ht[Qt];
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
    return O.NODE_ENV !== "production" && mu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vu(e) {
  Vc(e) && R("Do not use built-in directive ids as custom directive id: " + e);
}
function $e(e, t) {
  if (Be === null)
    return O.NODE_ENV !== "production" && R("withDirectives can only be used inside render functions."), e;
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
      return O.NODE_ENV !== "production" && !s && !Zn(e) && R(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return O.NODE_ENV !== "production" && R(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return O.NODE_ENV !== "production" && !n && !Zn(e) && R(`Invalid Teleport target: ${n}`), n;
}, _u = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, r, i, l, a, c) {
    const {
      mc: f,
      pc: u,
      pbc: p,
      o: { insert: m, querySelector: g, createText: h, createComment: V }
    } = c, C = Zn(t.props);
    let { shapeFlag: E, children: y, dynamicChildren: $ } = t;
    if (O.NODE_ENV !== "production" && Ht && (a = !1, $ = null), e == null) {
      const _ = t.el = O.NODE_ENV !== "production" ? V("teleport start") : h(""), A = t.anchor = O.NODE_ENV !== "production" ? V("teleport end") : h("");
      m(_, n, s), m(A, n, s);
      const b = (v, S) => {
        E & 16 && (o && o.isCE && (o.ce._teleportTarget = v), f(
          y,
          v,
          S,
          o,
          r,
          i,
          l,
          a
        ));
      }, N = () => {
        const v = t.target = Ci(t.props, g), S = Eu(v, t, h, m);
        v ? (i !== "svg" && va(v) ? i = "svg" : i !== "mathml" && ya(v) && (i = "mathml"), C || (b(v, S), Go(t, !1))) : O.NODE_ENV !== "production" && !C && R(
          "Invalid Teleport target on mount:",
          v,
          `(${typeof v})`
        );
      };
      C && (b(n, A), Go(t, !0)), ga(t.props) ? (t.el.__isMounted = !1, qe(() => {
        N(), delete t.el.__isMounted;
      }, r)) : N();
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
      const _ = t.anchor = e.anchor, A = t.target = e.target, b = t.targetAnchor = e.targetAnchor, N = Zn(e.props), v = N ? n : A, S = N ? _ : b;
      if (i === "svg" || va(A) ? i = "svg" : (i === "mathml" || ya(A)) && (i = "mathml"), $ ? (p(
        e.dynamicChildren,
        $,
        v,
        o,
        r,
        i,
        l
      ), ro(e, t, O.NODE_ENV === "production")) : a || u(
        e,
        t,
        v,
        S,
        o,
        r,
        i,
        l,
        !1
      ), C)
        N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Lo(
          t,
          n,
          _,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const I = t.target = Ci(
          t.props,
          g
        );
        I ? Lo(
          t,
          I,
          null,
          c,
          0
        ) : O.NODE_ENV !== "production" && R(
          "Invalid Teleport target on update:",
          A,
          `(${typeof A})`
        );
      } else N && Lo(
        t,
        A,
        b,
        c,
        1
      );
      Go(t, C);
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
        t.targetAnchor || Eu(p, t, f, c), u(
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
      if (O.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && R(`invalid <transition> mode: ${l}`), s.isLeaving)
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
        l === "in-out" && a.type !== Ve ? u.delayLeave = (p, m, g) => {
          const h = Su(
            s,
            f
          );
          h[String(f.key)] = f, p[Cn] = () => {
            m(), p[Cn] = void 0, delete c.delayedLeave, f = void 0;
          }, c.delayedLeave = () => {
            g(), delete c.delayedLeave, f = void 0;
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
        if (O.NODE_ENV !== "production" && n) {
          R(
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
    onAfterLeave: g,
    onLeaveCancelled: h,
    onBeforeAppear: V,
    onAppear: C,
    onAfterAppear: E,
    onAppearCancelled: y
  } = t, $ = String(e.key), _ = Su(n, e), A = (v, S) => {
    v && Mt(
      v,
      s,
      9,
      S
    );
  }, b = (v, S) => {
    const I = S[1];
    A(v, S), Y(v) ? v.every((T) => T.length <= 1) && I() : v.length <= 1 && I();
  }, N = {
    mode: i,
    persisted: l,
    beforeEnter(v) {
      let S = a;
      if (!n.isMounted)
        if (r)
          S = V || a;
        else
          return;
      v[Cn] && v[Cn](
        !0
        /* cancelled */
      );
      const I = _[$];
      I && Bt(e, I) && I.el[Cn] && I.el[Cn](), A(S, [v]);
    },
    enter(v) {
      let S = c, I = f, T = u;
      if (!n.isMounted)
        if (r)
          S = C || c, I = E || f, T = y || u;
        else
          return;
      let M = !1;
      const z = v[Fo] = (K) => {
        M || (M = !0, K ? A(T, [v]) : A(I, [v]), N.delayedLeave && N.delayedLeave(), v[Fo] = void 0);
      };
      S ? b(S, [v, z]) : z();
    },
    leave(v, S) {
      const I = String(e.key);
      if (v[Fo] && v[Fo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return S();
      A(p, [v]);
      let T = !1;
      const M = v[Cn] = (z) => {
        T || (T = !0, S(), z ? A(h, [v]) : A(g, [v]), v[Cn] = void 0, _[I] === e && delete _[I]);
      };
      _[I] = e, m ? b(m, [v, M]) : M();
    },
    clone(v) {
      const S = Cs(
        v,
        t,
        n,
        s,
        o
      );
      return o && o(S), S;
    }
  };
  return N;
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
    i.type === re ? (i.patchFlag & 128 && o++, s = s.concat(
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
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (O.NODE_ENV !== "production" && R(
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
    O.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(o, e)) && !r.configurable ? R(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else O.NODE_ENV !== "production" && R(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = O.NODE_ENV !== "production" ? Lr(n) : n;
  return O.NODE_ENV !== "production" && ku.add(s), s;
}
function ws(e, t, n, s, o = !1) {
  if (Y(e)) {
    e.forEach(
      (g, h) => ws(
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
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && ws(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? To(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (O.NODE_ENV !== "production" && !l) {
    R(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, f = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, p = ce(u), m = u === pe ? () => !1 : (g) => O.NODE_ENV !== "production" && (ge(p, g) && !Ie(p[g]) && R(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), ku.has(p[g])) ? !1 : ge(p, g);
  if (c != null && c !== a && (le(c) ? (f[c] = null, m(c) && (u[c] = null)) : Ie(c) && (c.value = null)), oe(a))
    ds(a, l, 12, [i, f]);
  else {
    const g = le(a), h = Ie(a);
    if (g || h) {
      const V = () => {
        if (e.f) {
          const C = g ? m(a) ? u[a] : f[a] : a.value;
          o ? Y(C) && ol(C, r) : Y(C) ? C.includes(r) || C.push(r) : g ? (f[a] = [r], m(a) && (u[a] = f[a])) : (a.value = [r], e.k && (f[e.k] = a.value));
        } else g ? (f[a] = i, m(a) && (u[a] = i)) : h ? (a.value = i, e.k && (f[e.k] = i)) : O.NODE_ENV !== "production" && R("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (V.id = -1, qe(V, n)) : V();
    } else O.NODE_ENV !== "production" && R("Invalid template ref type:", a, `(${typeof a})`);
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
  } = e, f = (y, $) => {
    if (!$.hasChildNodes()) {
      O.NODE_ENV !== "production" && R(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, y, $), cr(), $._vnode = y;
      return;
    }
    u($.firstChild, y, null, null, null), cr(), $._vnode = y;
  }, u = (y, $, _, A, b, N = !1) => {
    N = N || !!$.dynamicChildren;
    const v = Wn(y) && y.data === "[", S = () => h(
      y,
      $,
      _,
      A,
      b,
      v
    ), { type: I, ref: T, shapeFlag: M, patchFlag: z } = $;
    let K = y.nodeType;
    $.el = y, O.NODE_ENV !== "production" && (os(y, "__vnode", $, !0), os(y, "__vueParentComponent", _, !0)), z === -2 && (N = !1, $.dynamicChildren = null);
    let ee = null;
    switch (I) {
      case on:
        K !== 3 ? $.children === "" ? (a($.el = o(""), i(y), y), ee = y) : ee = S() : (y.data !== $.children && (O.NODE_ENV !== "production" && R(
          "Hydration text mismatch in",
          y.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            y.data
          )}
  - expected on client: ${JSON.stringify($.children)}`
        ), Hn(), y.data = $.children), ee = r(y));
        break;
      case Ve:
        E(y) ? (ee = r(y), C(
          $.el = y.content.firstChild,
          y,
          _
        )) : K !== 8 || v ? ee = S() : ee = r(y);
        break;
      case Mn:
        if (v && (y = r(y), K = y.nodeType), K === 1 || K === 3) {
          ee = y;
          const ne = !$.children.length;
          for (let te = 0; te < $.staticCount; te++)
            ne && ($.children += ee.nodeType === 1 ? ee.outerHTML : ee.data), te === $.staticCount - 1 && ($.anchor = ee), ee = r(ee);
          return v ? r(ee) : ee;
        } else
          S();
        break;
      case re:
        v ? ee = g(
          y,
          $,
          _,
          A,
          b,
          N
        ) : ee = S();
        break;
      default:
        if (M & 1)
          (K !== 1 || $.type.toLowerCase() !== y.tagName.toLowerCase()) && !E(y) ? ee = S() : ee = p(
            y,
            $,
            _,
            A,
            b,
            N
          );
        else if (M & 6) {
          $.slotScopeIds = b;
          const ne = i(y);
          if (v ? ee = V(y) : Wn(y) && y.data === "teleport start" ? ee = V(y, y.data, "teleport end") : ee = r(y), t(
            $,
            ne,
            null,
            _,
            A,
            Bo(ne),
            N
          ), In($) && !$.type.__asyncResolved) {
            let te;
            v ? (te = ue(re), te.anchor = ee ? ee.previousSibling : ne.lastChild) : te = y.nodeType === 3 ? je("") : ue("div"), te.el = y, $.component.subTree = te;
          }
        } else M & 64 ? K !== 8 ? ee = S() : ee = $.type.hydrate(
          y,
          $,
          _,
          A,
          b,
          N,
          e,
          m
        ) : M & 128 ? ee = $.type.hydrate(
          y,
          $,
          _,
          A,
          Bo(i(y)),
          b,
          N,
          e,
          u
        ) : O.NODE_ENV !== "production" && R("Invalid HostVNode type:", I, `(${typeof I})`);
    }
    return T != null && ws(T, null, A, $), ee;
  }, p = (y, $, _, A, b, N) => {
    N = N || !!$.dynamicChildren;
    const { type: v, props: S, patchFlag: I, shapeFlag: T, dirs: M, transition: z } = $, K = v === "input" || v === "option";
    if (O.NODE_ENV !== "production" || K || I !== -1) {
      M && en($, null, _, "created");
      let ee = !1;
      if (E(y)) {
        ee = Qu(
          null,
          // no need check parentSuspense in hydration
          z
        ) && _ && _.vnode.props && _.vnode.props.appear;
        const te = y.content.firstChild;
        if (ee) {
          const xe = te.getAttribute("class");
          xe && (te.$cls = xe), z.beforeEnter(te);
        }
        C(te, y, _), $.el = y = te;
      }
      if (T & 16 && // skip if element has innerHTML / textContent
      !(S && (S.innerHTML || S.textContent))) {
        let te = m(
          y.firstChild,
          $,
          y,
          _,
          A,
          b,
          N
        ), xe = !1;
        for (; te; ) {
          Js(
            y,
            1
            /* CHILDREN */
          ) || (O.NODE_ENV !== "production" && !xe && (R(
            "Hydration children mismatch on",
            y,
            `
Server rendered element contains more child nodes than client vdom.`
          ), xe = !0), Hn());
          const gt = te;
          te = te.nextSibling, l(gt);
        }
      } else if (T & 8) {
        let te = $.children;
        te[0] === `
` && (y.tagName === "PRE" || y.tagName === "TEXTAREA") && (te = te.slice(1)), y.textContent !== te && (Js(
          y,
          0
          /* TEXT */
        ) || (O.NODE_ENV !== "production" && R(
          "Hydration text content mismatch on",
          y,
          `
  - rendered on server: ${y.textContent}
  - expected on client: ${$.children}`
        ), Hn()), y.textContent = $.children);
      }
      if (S) {
        if (O.NODE_ENV !== "production" || K || !N || I & 48) {
          const te = y.tagName.includes("-");
          for (const xe in S)
            O.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(M && M.some((gt) => gt.dir.created)) && Sh(y, xe, S[xe], $, _) && Hn(), (K && (xe.endsWith("value") || xe === "indeterminate") || vn(xe) && !An(xe) || // force hydrate v-bind with .prop modifiers
            xe[0] === "." || te) && s(y, xe, null, S[xe], void 0, _);
        } else if (S.onClick)
          s(
            y,
            "onClick",
            null,
            S.onClick,
            void 0,
            _
          );
        else if (I & 4 && mn(S.style))
          for (const te in S.style) S.style[te];
      }
      let ne;
      (ne = S && S.onVnodeBeforeMount) && _t(ne, _, $), M && en($, null, _, "beforeMount"), ((ne = S && S.onVnodeMounted) || M || ee) && ad(() => {
        ne && _t(ne, _, $), ee && z.enter(y), M && en($, null, _, "mounted");
      }, A);
    }
    return y.nextSibling;
  }, m = (y, $, _, A, b, N, v) => {
    v = v || !!$.dynamicChildren;
    const S = $.children, I = S.length;
    let T = !1;
    for (let M = 0; M < I; M++) {
      const z = v ? S[M] : S[M] = mt(S[M]), K = z.type === on;
      y ? (K && !v && M + 1 < I && mt(S[M + 1]).type === on && (a(
        o(
          y.data.slice(z.children.length)
        ),
        _,
        r(y)
      ), y.data = z.children), y = u(
        y,
        z,
        A,
        b,
        N,
        v
      )) : K && !z.children ? a(z.el = o(""), _) : (Js(
        _,
        1
        /* CHILDREN */
      ) || (O.NODE_ENV !== "production" && !T && (R(
        "Hydration children mismatch on",
        _,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), T = !0), Hn()), n(
        null,
        z,
        _,
        null,
        A,
        b,
        Bo(_),
        N
      ));
    }
    return y;
  }, g = (y, $, _, A, b, N) => {
    const { slotScopeIds: v } = $;
    v && (b = b ? b.concat(v) : v);
    const S = i(y), I = m(
      r(y),
      $,
      S,
      _,
      A,
      b,
      N
    );
    return I && Wn(I) && I.data === "]" ? r($.anchor = I) : (Hn(), a($.anchor = c("]"), S, I), I);
  }, h = (y, $, _, A, b, N) => {
    if (Js(
      y.parentElement,
      1
      /* CHILDREN */
    ) || (O.NODE_ENV !== "production" && R(
      `Hydration node mismatch:
- rendered on server:`,
      y,
      y.nodeType === 3 ? "(text)" : Wn(y) && y.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      $.type
    ), Hn()), $.el = null, N) {
      const I = V(y);
      for (; ; ) {
        const T = r(y);
        if (T && T !== I)
          l(T);
        else
          break;
      }
    }
    const v = r(y), S = i(y);
    return l(y), n(
      null,
      $,
      S,
      v,
      _,
      A,
      Bo(S),
      b
    ), _ && (_.vnode.el = $.el, Gr(_, $.el)), v;
  }, V = (y, $ = "[", _ = "]") => {
    let A = 0;
    for (; y; )
      if (y = r(y), y && Wn(y) && (y.data === $ && A++, y.data === _)) {
        if (A === 0)
          return r(y);
        A--;
      }
    return y;
  }, C = (y, $, _) => {
    const A = $.parentNode;
    A && A.replaceChild(y, $);
    let b = _;
    for (; b; )
      b.vnode.el === $ && (b.vnode.el = b.subTree.el = y), b = b.parent;
  }, E = (y) => y.nodeType === 1 && y.tagName === "TEMPLATE";
  return [f, u];
}
function Sh(e, t, n, s, o) {
  let r, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = _e(n), kh(Ea(l || ""), Ea(a)) || (r = 2, i = "class");
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
    let g;
    return c || (g = c = t().catch((h) => {
      if (h = h instanceof Error ? h : new Error(String(h)), a)
        return new Promise((V, C) => {
          a(h, () => V(p()), () => C(h), u + 1);
        });
      throw h;
    }).then((h) => {
      if (g !== c && c)
        return c;
      if (O.NODE_ENV !== "production" && !h && R(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), h && (h.__esModule || h[Symbol.toStringTag] === "Module") && (h = h.default), O.NODE_ENV !== "production" && h && !me(h) && !oe(h))
        throw new Error(`Invalid async component load result: ${h}`);
      return f = h, h;
    }));
  };
  return /* @__PURE__ */ _l({
    name: "AsyncComponentWrapper",
    __asyncLoader: m,
    __asyncHydrate(g, h, V) {
      let C = !1;
      (h.bu || (h.bu = [])).push(() => C = !0);
      const E = () => {
        if (C) {
          O.NODE_ENV !== "production" && R(
            `Skipping lazy hydration for component '${$s(f) || f.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        V();
      }, y = r ? () => {
        const $ = r(
          E,
          (_) => Mh(g, _)
        );
        $ && (h.bum || (h.bum = [])).push($);
      } : E;
      f ? y() : m().then(() => !h.isUnmounted && y());
    },
    get __asyncResolved() {
      return f;
    },
    setup() {
      const g = We;
      if (El(g), f)
        return () => di(f, g);
      const h = (y) => {
        c = null, Bn(
          y,
          g,
          13,
          !s
        );
      };
      if (l && g.suspense || Os)
        return m().then((y) => () => di(y, g)).catch((y) => (h(y), () => s ? ue(s, {
          error: y
        }) : null));
      const V = q(!1), C = q(), E = q(!!o);
      return o && setTimeout(() => {
        E.value = !1;
      }, o), i != null && setTimeout(() => {
        if (!V.value && !C.value) {
          const y = new Error(
            `Async component timed out after ${i}ms.`
          );
          h(y), C.value = y;
        }
      }, i), m().then(() => {
        V.value = !0, g.parent && Bs(g.parent.vnode) && g.parent.update();
      }).catch((y) => {
        h(y), C.value = y;
      }), () => {
        if (V.value && f)
          return di(f, g);
        if (C.value && s)
          return ue(s, {
            error: C.value
          });
        if (n && !E.value)
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
        const E = t.default && t.default();
        return E && E.length === 1 ? E[0] : E;
      };
    const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let i = null;
    O.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: c,
        um: f,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (E, y, $, _, A) => {
      const b = E.component;
      c(E, y, $, 0, l), a(
        b.vnode,
        E,
        y,
        $,
        b,
        l,
        _,
        E.slotScopeIds,
        A
      ), qe(() => {
        b.isDeactivated = !1, b.a && Tn(b.a);
        const N = E.props && E.props.onVnodeMounted;
        N && _t(N, b.parent, E);
      }, l), O.NODE_ENV !== "production" && ki(b);
    }, s.deactivate = (E) => {
      const y = E.component;
      hr(y.m), hr(y.a), c(E, p, null, 1, l), qe(() => {
        y.da && Tn(y.da);
        const $ = E.props && E.props.onVnodeUnmounted;
        $ && _t($, y.parent, E), y.isDeactivated = !0;
      }, l), O.NODE_ENV !== "production" && ki(y), O.NODE_ENV !== "production" && (y.__keepAliveStorageContainer = p);
    };
    function m(E) {
      fi(E), f(E, n, l, !0);
    }
    function g(E) {
      o.forEach((y, $) => {
        const _ = $s(y.type);
        _ && !E(_) && h($);
      });
    }
    function h(E) {
      const y = o.get(E);
      y && (!i || !Bt(y, i)) ? m(y) : i && fi(i), o.delete(E), r.delete(E);
    }
    sn(
      () => [e.include, e.exclude],
      ([E, y]) => {
        E && g(($) => Xs(E, $)), y && g(($) => !Xs(y, $));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let V = null;
    const C = () => {
      V != null && (gr(n.subTree.type) ? qe(() => {
        o.set(V, jo(n.subTree));
      }, n.subTree.suspense) : o.set(V, jo(n.subTree)));
    };
    return He(C), zr(C), js(() => {
      o.forEach((E) => {
        const { subTree: y, suspense: $ } = n, _ = jo(y);
        if (E.type === _.type && E.key === _.key) {
          fi(_);
          const A = _.component.da;
          A && qe(A, $);
          return;
        }
        m(E);
      });
    }), () => {
      if (V = null, !t.default)
        return i = null;
      const E = t.default(), y = E[0];
      if (E.length > 1)
        return O.NODE_ENV !== "production" && R("KeepAlive should contain exactly one component child."), i = null, E;
      if (!ln(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128))
        return i = null, y;
      let $ = jo(y);
      if ($.type === Ve)
        return i = null, $;
      const _ = $.type, A = $s(
        In($) ? $.type.__asyncResolved || {} : _
      ), { include: b, exclude: N, max: v } = e;
      if (b && (!A || !Xs(b, A)) || N && A && Xs(N, A))
        return $.shapeFlag &= -257, i = $, y;
      const S = $.key == null ? _ : $.key, I = o.get(S);
      return $.el && ($ = Pt($), y.shapeFlag & 128 && (y.ssContent = $)), V = S, I ? ($.el = I.el, $.component = I.component, $.transition && yn($, $.transition), $.shapeFlag |= 512, r.delete(S), r.add(S)) : (r.add(S), v && r.size > parseInt(v, 10) && h(r.values().next().value)), $.shapeFlag |= 256, i = $, gr(y.type) ? y : $;
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
  } else if (O.NODE_ENV !== "production") {
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
    if (O.NODE_ENV !== "production" && n && !i) {
      const l = e === dr ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      R(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else O.NODE_ENV !== "production" && R(
    `resolve${rn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Na(e, t) {
  return e && (e[t] || e[Ce(t)] || e[rn(Ce(t))]);
}
function ye(e, t, n, s) {
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
    O.NODE_ENV !== "production" && !Number.isInteger(e) && R(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
    return t !== "default" && (n.name = t), x(), ct(
      re,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let r = e[t];
  O.NODE_ENV !== "production" && r && r.length > 1 && (R(
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
  if (O.NODE_ENV !== "production" && !me(e))
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
    $props: (e) => O.NODE_ENV !== "production" ? jt(e.props) : e.props,
    $attrs: (e) => O.NODE_ENV !== "production" ? jt(e.attrs) : e.attrs,
    $slots: (e) => O.NODE_ENV !== "production" ? jt(e.slots) : e.slots,
    $refs: (e) => O.NODE_ENV !== "production" ? jt(e.refs) : e.refs,
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
      return t === "$attrs" ? (ze(e.attrs, "get", ""), O.NODE_ENV !== "production" && mr()) : O.NODE_ENV !== "production" && t === "$slots" && ze(e, "get", t), f(e);
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
    O.NODE_ENV !== "production" && Be && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
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
    return pi(o, t) ? (o[t] = n, !0) : O.NODE_ENV !== "production" && o.__isScriptSetup && ge(o, t) ? (R(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) ? (O.NODE_ENV !== "production" && R(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (O.NODE_ENV !== "production" && R(
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
    return !!n[i] || e !== pe && ge(e, i) || pi(t, i) || (l = r[0]) && ge(l, i) || ge(s, i) || ge(es, i) || ge(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
O.NODE_ENV !== "production" && (so.ownKeys = (e) => (R(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zh = /* @__PURE__ */ fe({}, so, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return so.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Gf(t);
    return O.NODE_ENV !== "production" && !n && so.has(e, t) && R(
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
  return O.NODE_ENV !== "production" && fs("defineProps"), null;
}
function Jh() {
  return O.NODE_ENV !== "production" && fs("defineEmits"), null;
}
function Xh(e) {
  O.NODE_ENV !== "production" && fs("defineExpose");
}
function Qh(e) {
  O.NODE_ENV !== "production" && fs("defineOptions");
}
function Zh() {
  return O.NODE_ENV !== "production" && fs("defineSlots"), null;
}
function em() {
  O.NODE_ENV !== "production" && fs("defineModel");
}
function tm(e, t) {
  return O.NODE_ENV !== "production" && fs("withDefaults"), null;
}
function nm() {
  return Ru("useSlots").slots;
}
function sm() {
  return Ru("useAttrs").attrs;
}
function Ru(e) {
  const t = ut();
  return O.NODE_ENV !== "production" && !t && R(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Ed(t));
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
    o ? Y(o) || oe(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : O.NODE_ENV !== "production" && R(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
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
  O.NODE_ENV !== "production" && !t && R(
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
    updated: g,
    activated: h,
    deactivated: V,
    beforeDestroy: C,
    beforeUnmount: E,
    destroyed: y,
    unmounted: $,
    render: _,
    renderTracked: A,
    renderTriggered: b,
    errorCaptured: N,
    serverPrefetch: v,
    // public API
    expose: S,
    inheritAttrs: I,
    // assets
    components: T,
    directives: M,
    filters: z
  } = t, K = O.NODE_ENV !== "production" ? am() : null;
  if (O.NODE_ENV !== "production") {
    const [ne] = e.propsOptions;
    if (ne)
      for (const te in ne)
        K("Props", te);
  }
  if (c && um(c, s, K), i)
    for (const ne in i) {
      const te = i[ne];
      oe(te) ? (O.NODE_ENV !== "production" ? Object.defineProperty(s, ne, {
        value: te.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[ne] = te.bind(n), O.NODE_ENV !== "production" && K("Methods", ne)) : O.NODE_ENV !== "production" && R(
        `Method "${ne}" has type "${typeof te}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    O.NODE_ENV !== "production" && !oe(o) && R(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const ne = o.call(n, n);
    if (O.NODE_ENV !== "production" && Dr(ne) && R(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !me(ne))
      O.NODE_ENV !== "production" && R("data() should return an object.");
    else if (e.data = Ns(ne), O.NODE_ENV !== "production")
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
      O.NODE_ENV !== "production" && xe === De && R(`Computed property "${ne}" has no getter.`);
      const gt = !oe(te) && oe(te.set) ? te.set.bind(n) : O.NODE_ENV !== "production" ? () => {
        R(
          `Write operation failed: computed property "${ne}" is readonly.`
        );
      } : De, $t = J({
        get: xe,
        set: gt
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => $t.value,
        set: (Tt) => $t.value = Tt
      }), O.NODE_ENV !== "production" && K("Computed", ne);
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
  if (ee(Vu, u), ee(He, p), ee(wl, m), ee(zr, g), ee($u, h), ee(Tu, V), ee(Pu, N), ee(Mu, A), ee(Iu, b), ee(js, E), ee(Ct, $), ee(Au, v), Y(S))
    if (S.length) {
      const ne = e.exposed || (e.exposed = {});
      S.forEach((te) => {
        Object.defineProperty(ne, te, {
          get: () => n[te],
          set: (xe) => n[te] = xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === De && (e.render = _), I != null && (e.inheritAttrs = I), T && (e.components = T), M && (e.directives = M), v && El(e);
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
    }) : t[s] = r, O.NODE_ENV !== "production" && n("Inject", s);
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
    oe(r) ? sn(o, r) : O.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e}"`, r);
  } else if (oe(e))
    sn(o, e.bind(n));
  else if (me(e))
    if (Y(e))
      e.forEach((r) => Lu(r, t, n, s));
    else {
      const r = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(r) ? sn(o, r, e) : O.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else O.NODE_ENV !== "production" && R(`Invalid watch option: "${s}"`, e);
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
      O.NODE_ENV !== "production" && R(
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
    oe(s) || (s = fe({}, s)), o != null && !me(o) && (O.NODE_ENV !== "production" && R("root props passed to app.mount() must be an object."), o = null);
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
        O.NODE_ENV !== "production" && R(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...u) {
        return i.has(f) ? O.NODE_ENV !== "production" && R("Plugin has already been applied to target app.") : f && oe(f.install) ? (i.add(f), f.install(c, ...u)) : oe(f) ? (i.add(f), f(c, ...u)) : O.NODE_ENV !== "production" && R(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(f) {
        return r.mixins.includes(f) ? O.NODE_ENV !== "production" && R(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : r.mixins.push(f), c;
      },
      component(f, u) {
        return O.NODE_ENV !== "production" && Fi(f, r.config), u ? (O.NODE_ENV !== "production" && r.components[f] && R(`Component "${f}" has already been registered in target app.`), r.components[f] = u, c) : r.components[f];
      },
      directive(f, u) {
        return O.NODE_ENV !== "production" && vu(f), u ? (O.NODE_ENV !== "production" && r.directives[f] && R(`Directive "${f}" has already been registered in target app.`), r.directives[f] = u, c) : r.directives[f];
      },
      mount(f, u, p) {
        if (a)
          O.NODE_ENV !== "production" && R(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          O.NODE_ENV !== "production" && f.__vue_app__ && R(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = c._ceVNode || ue(s, o);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), O.NODE_ENV !== "production" && (r.reload = () => {
            const g = Pt(m);
            g.el = null, e(g, f, p);
          }), u && t ? t(m, f) : e(m, f, p), a = !0, c._container = f, f.__vue_app__ = c, O.NODE_ENV !== "production" && (c._instance = m.component, ah(c, Hi)), To(m.component);
        }
      },
      onUnmount(f) {
        O.NODE_ENV !== "production" && typeof f != "function" && R(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), l.push(f);
      },
      unmount() {
        a ? (Mt(
          l,
          c._instance,
          16
        ), e(null, c._container), O.NODE_ENV !== "production" && (c._instance = null, ch(c)), delete c._container.__vue_app__) : O.NODE_ENV !== "production" && R("Cannot unmount an app that is not mounted.");
      },
      provide(f, u) {
        return O.NODE_ENV !== "production" && f in r.provides && (ge(r.provides, f) ? R(
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
    O.NODE_ENV !== "production" && R("provide() can only be used inside setup().");
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
    O.NODE_ENV !== "production" && R(`injection "${String(e)}" not found.`);
  } else O.NODE_ENV !== "production" && R("inject() can only be used inside setup() or functional components.");
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
  O.NODE_ENV !== "production" && Ku(t || {}, o, e), n ? e.props = s ? o : su(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
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
  c && nn(e.attrs, "set", ""), O.NODE_ENV !== "production" && Ku(t || {}, o, e);
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
      O.NODE_ENV !== "production" && !le(r[f]) && R("props must be strings when using array syntax.", r[f]);
      const u = Ce(r[f]);
      Oa(u) && (i[u] = pe);
    }
  else if (r) {
    O.NODE_ENV !== "production" && !me(r) && R("invalid props options", r);
    for (const f in r) {
      const u = Ce(f);
      if (Oa(u)) {
        const p = r[f], m = i[u] = Y(p) || oe(p) ? { type: p } : fe({}, p), g = m.type;
        let h = !1, V = !0;
        if (Y(g))
          for (let C = 0; C < g.length; ++C) {
            const E = g[C], y = oe(E) && E.name;
            if (y === "Boolean") {
              h = !0;
              break;
            } else y === "String" && (V = !1);
          }
        else
          h = oe(g) && g.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = h, m[
          1
          /* shouldCastTrue */
        ] = V, (h || ge(m, "default")) && l.push(u);
      }
    }
  }
  const c = [i, l];
  return me(e) && s.set(e, c), c;
}
function Oa(e) {
  return e[0] !== "$" && !An(e) ? !0 : (O.NODE_ENV !== "production" && R(`Invalid prop name: "${e}" is a reserved property.`), !1);
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
      O.NODE_ENV !== "production" ? jt(s) : s,
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
        const { valid: m, expectedType: g } = Nm(t, f[p]);
        u.push(g || ""), c = m;
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
  const s = Pe((...o) => (O.NODE_ENV !== "production" && We && !(n === null && Be) && !(n && n.root !== We.root) && R(
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
      O.NODE_ENV !== "production" && R(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Tl(r);
      t[o] = () => i;
    }
  }
}, Gu = (e, t) => {
  O.NODE_ENV !== "production" && !Bs(e.vnode) && R(
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
    l ? O.NODE_ENV !== "production" && Ht ? (Vi(o, t, n), nn(e, "set", "$slots")) : n && l === 1 ? r = !1 : Vi(o, t, n) : (r = !t.$stable, Wu(t, o)), i = t;
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
  n.__VUE__ = !0, O.NODE_ENV !== "production" && gl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    insertStaticContent: g
  } = e, h = (w, D, P, H = null, F = null, B = null, Q = void 0, G = null, W = O.NODE_ENV !== "production" && Ht ? !1 : !!D.dynamicChildren) => {
    if (w === D)
      return;
    w && !Bt(w, D) && (H = Io(w), En(w, F, B, !0), w = null), D.patchFlag === -2 && (W = !1, D.dynamicChildren = null);
    const { type: U, ref: ie, shapeFlag: Z } = D;
    switch (U) {
      case on:
        V(w, D, P, H);
        break;
      case Ve:
        C(w, D, P, H);
        break;
      case Mn:
        w == null ? E(D, P, H, Q) : O.NODE_ENV !== "production" && y(w, D, P, Q);
        break;
      case re:
        M(
          w,
          D,
          P,
          H,
          F,
          B,
          Q,
          G,
          W
        );
        break;
      default:
        Z & 1 ? A(
          w,
          D,
          P,
          H,
          F,
          B,
          Q,
          G,
          W
        ) : Z & 6 ? z(
          w,
          D,
          P,
          H,
          F,
          B,
          Q,
          G,
          W
        ) : Z & 64 || Z & 128 ? U.process(
          w,
          D,
          P,
          H,
          F,
          B,
          Q,
          G,
          W,
          ps
        ) : O.NODE_ENV !== "production" && R("Invalid VNode type:", U, `(${typeof U})`);
    }
    ie != null && F ? ws(ie, w && w.ref, B, D || w, !D) : ie == null && w && w.ref != null && ws(w.ref, null, B, w, !0);
  }, V = (w, D, P, H) => {
    if (w == null)
      s(
        D.el = l(D.children),
        P,
        H
      );
    else {
      const F = D.el = w.el;
      D.children !== w.children && c(F, D.children);
    }
  }, C = (w, D, P, H) => {
    w == null ? s(
      D.el = a(D.children || ""),
      P,
      H
    ) : D.el = w.el;
  }, E = (w, D, P, H) => {
    [w.el, w.anchor] = g(
      w.children,
      D,
      P,
      H,
      w.el,
      w.anchor
    );
  }, y = (w, D, P, H) => {
    if (D.children !== w.children) {
      const F = p(w.anchor);
      _(w), [D.el, D.anchor] = g(
        D.children,
        P,
        F,
        H
      );
    } else
      D.el = w.el, D.anchor = w.anchor;
  }, $ = ({ el: w, anchor: D }, P, H) => {
    let F;
    for (; w && w !== D; )
      F = p(w), s(w, P, H), w = F;
    s(D, P, H);
  }, _ = ({ el: w, anchor: D }) => {
    let P;
    for (; w && w !== D; )
      P = p(w), o(w), w = P;
    o(D);
  }, A = (w, D, P, H, F, B, Q, G, W) => {
    D.type === "svg" ? Q = "svg" : D.type === "math" && (Q = "mathml"), w == null ? b(
      D,
      P,
      H,
      F,
      B,
      Q,
      G,
      W
    ) : S(
      w,
      D,
      F,
      B,
      Q,
      G,
      W
    );
  }, b = (w, D, P, H, F, B, Q, G) => {
    let W, U;
    const { props: ie, shapeFlag: Z, transition: se, dirs: ae } = w;
    if (W = w.el = i(
      w.type,
      B,
      ie && ie.is,
      ie
    ), Z & 8 ? f(W, w.children) : Z & 16 && v(
      w.children,
      W,
      null,
      H,
      F,
      hi(w, B),
      Q,
      G
    ), ae && en(w, null, H, "created"), N(W, w, w.scopeId, Q, H), ie) {
      for (const Oe in ie)
        Oe !== "value" && !An(Oe) && r(W, Oe, null, ie[Oe], B, H);
      "value" in ie && r(W, "value", null, ie.value, B), (U = ie.onVnodeBeforeMount) && _t(U, H, w);
    }
    O.NODE_ENV !== "production" && (os(W, "__vnode", w, !0), os(W, "__vueParentComponent", H, !0)), ae && en(w, null, H, "beforeMount");
    const be = Qu(F, se);
    be && se.beforeEnter(W), s(W, D, P), ((U = ie && ie.onVnodeMounted) || be || ae) && qe(() => {
      U && _t(U, H, w), be && se.enter(W), ae && en(w, null, H, "mounted");
    }, F);
  }, N = (w, D, P, H, F) => {
    if (P && m(w, P), H)
      for (let B = 0; B < H.length; B++)
        m(w, H[B]);
    if (F) {
      let B = F.subTree;
      if (O.NODE_ENV !== "production" && B.patchFlag > 0 && B.patchFlag & 2048 && (B = Wr(B.children) || B), D === B || gr(B.type) && (B.ssContent === D || B.ssFallback === D)) {
        const Q = F.vnode;
        N(
          w,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          F.parent
        );
      }
    }
  }, v = (w, D, P, H, F, B, Q, G, W = 0) => {
    for (let U = W; U < w.length; U++) {
      const ie = w[U] = G ? On(w[U]) : mt(w[U]);
      h(
        null,
        ie,
        D,
        P,
        H,
        F,
        B,
        Q,
        G
      );
    }
  }, S = (w, D, P, H, F, B, Q) => {
    const G = D.el = w.el;
    O.NODE_ENV !== "production" && (G.__vnode = D);
    let { patchFlag: W, dynamicChildren: U, dirs: ie } = D;
    W |= w.patchFlag & 16;
    const Z = w.props || pe, se = D.props || pe;
    let ae;
    if (P && Un(P, !1), (ae = se.onVnodeBeforeUpdate) && _t(ae, P, D, w), ie && en(D, w, P, "beforeUpdate"), P && Un(P, !0), O.NODE_ENV !== "production" && Ht && (W = 0, Q = !1, U = null), (Z.innerHTML && se.innerHTML == null || Z.textContent && se.textContent == null) && f(G, ""), U ? (I(
      w.dynamicChildren,
      U,
      G,
      P,
      H,
      hi(D, F),
      B
    ), O.NODE_ENV !== "production" && ro(w, D)) : Q || xe(
      w,
      D,
      G,
      null,
      P,
      H,
      hi(D, F),
      B,
      !1
    ), W > 0) {
      if (W & 16)
        T(G, Z, se, P, F);
      else if (W & 2 && Z.class !== se.class && r(G, "class", null, se.class, F), W & 4 && r(G, "style", Z.style, se.style, F), W & 8) {
        const be = D.dynamicProps;
        for (let Oe = 0; Oe < be.length; Oe++) {
          const Ne = be[Oe], vt = Z[Ne], et = se[Ne];
          (et !== vt || Ne === "value") && r(G, Ne, vt, et, F, P);
        }
      }
      W & 1 && w.children !== D.children && f(G, D.children);
    } else !Q && U == null && T(G, Z, se, P, F);
    ((ae = se.onVnodeUpdated) || ie) && qe(() => {
      ae && _t(ae, P, D, w), ie && en(D, w, P, "updated");
    }, H);
  }, I = (w, D, P, H, F, B, Q) => {
    for (let G = 0; G < D.length; G++) {
      const W = w[G], U = D[G], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(W, U) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? u(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          P
        )
      );
      h(
        W,
        U,
        ie,
        null,
        H,
        F,
        B,
        Q,
        !0
      );
    }
  }, T = (w, D, P, H, F) => {
    if (D !== P) {
      if (D !== pe)
        for (const B in D)
          !An(B) && !(B in P) && r(
            w,
            B,
            D[B],
            null,
            F,
            H
          );
      for (const B in P) {
        if (An(B)) continue;
        const Q = P[B], G = D[B];
        Q !== G && B !== "value" && r(w, B, G, Q, F, H);
      }
      "value" in P && r(w, "value", D.value, P.value, F);
    }
  }, M = (w, D, P, H, F, B, Q, G, W) => {
    const U = D.el = w ? w.el : l(""), ie = D.anchor = w ? w.anchor : l("");
    let { patchFlag: Z, dynamicChildren: se, slotScopeIds: ae } = D;
    O.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ht || Z & 2048) && (Z = 0, W = !1, se = null), ae && (G = G ? G.concat(ae) : ae), w == null ? (s(U, P, H), s(ie, P, H), v(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      P,
      ie,
      F,
      B,
      Q,
      G,
      W
    )) : Z > 0 && Z & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren ? (I(
      w.dynamicChildren,
      se,
      P,
      F,
      B,
      Q,
      G
    ), O.NODE_ENV !== "production" ? ro(w, D) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (D.key != null || F && D === F.subTree) && ro(
        w,
        D,
        !0
        /* shallow */
      )
    )) : xe(
      w,
      D,
      P,
      ie,
      F,
      B,
      Q,
      G,
      W
    );
  }, z = (w, D, P, H, F, B, Q, G, W) => {
    D.slotScopeIds = G, w == null ? D.shapeFlag & 512 ? F.ctx.activate(
      D,
      P,
      H,
      Q,
      W
    ) : K(
      D,
      P,
      H,
      F,
      B,
      Q,
      W
    ) : ee(w, D, W);
  }, K = (w, D, P, H, F, B, Q) => {
    const G = w.component = gd(
      w,
      H,
      F
    );
    if (O.NODE_ENV !== "production" && G.type.__hmrId && oh(G), O.NODE_ENV !== "production" && (bs(w), cn(G, "mount")), Bs(w) && (G.ctx.renderer = ps), O.NODE_ENV !== "production" && cn(G, "init"), yd(G, !1, Q), O.NODE_ENV !== "production" && un(G, "init"), O.NODE_ENV !== "production" && Ht && (w.el = null), G.asyncDep) {
      if (F && F.registerDep(G, ne, Q), !w.el) {
        const W = G.subTree = ue(Ve);
        C(null, W, D, P), w.placeholder = W.el;
      }
    } else
      ne(
        G,
        w,
        D,
        P,
        F,
        B,
        Q
      );
    O.NODE_ENV !== "production" && (_s(), un(G, "mount"));
  }, ee = (w, D, P) => {
    const H = D.component = w.component;
    if (Fm(w, D, P))
      if (H.asyncDep && !H.asyncResolved) {
        O.NODE_ENV !== "production" && bs(D), te(H, D, P), O.NODE_ENV !== "production" && _s();
        return;
      } else
        H.next = D, H.update();
    else
      D.el = w.el, H.vnode = D;
  }, ne = (w, D, P, H, F, B, Q) => {
    const G = () => {
      if (w.isMounted) {
        let { next: Z, bu: se, u: ae, parent: be, vnode: Oe } = w;
        {
          const Nt = Zu(w);
          if (Nt) {
            Z && (Z.el = Oe.el, te(w, Z, Q)), Nt.asyncDep.then(() => {
              w.isUnmounted || G();
            });
            return;
          }
        }
        let Ne = Z, vt;
        O.NODE_ENV !== "production" && bs(Z || w.vnode), Un(w, !1), Z ? (Z.el = Oe.el, te(w, Z, Q)) : Z = Oe, se && Tn(se), (vt = Z.props && Z.props.onVnodeBeforeUpdate) && _t(vt, be, Z, Oe), Un(w, !0), O.NODE_ENV !== "production" && cn(w, "render");
        const et = Yo(w);
        O.NODE_ENV !== "production" && un(w, "render");
        const Rt = w.subTree;
        w.subTree = et, O.NODE_ENV !== "production" && cn(w, "patch"), h(
          Rt,
          et,
          // parent may have changed if it's in a teleport
          u(Rt.el),
          // anchor may have changed if it's in a fragment
          Io(Rt),
          w,
          F,
          B
        ), O.NODE_ENV !== "production" && un(w, "patch"), Z.el = et.el, Ne === null && Gr(w, et.el), ae && qe(ae, F), (vt = Z.props && Z.props.onVnodeUpdated) && qe(
          () => _t(vt, be, Z, Oe),
          F
        ), O.NODE_ENV !== "production" && mu(w), O.NODE_ENV !== "production" && _s();
      } else {
        let Z;
        const { el: se, props: ae } = D, { bm: be, m: Oe, parent: Ne, root: vt, type: et } = w, Rt = In(D);
        if (Un(w, !1), be && Tn(be), !Rt && (Z = ae && ae.onVnodeBeforeMount) && _t(Z, Ne, D), Un(w, !0), se && si) {
          const Nt = () => {
            O.NODE_ENV !== "production" && cn(w, "render"), w.subTree = Yo(w), O.NODE_ENV !== "production" && un(w, "render"), O.NODE_ENV !== "production" && cn(w, "hydrate"), si(
              se,
              w.subTree,
              w,
              F,
              null
            ), O.NODE_ENV !== "production" && un(w, "hydrate");
          };
          Rt && et.__asyncHydrate ? et.__asyncHydrate(
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
            P,
            H,
            w,
            F,
            B
          ), O.NODE_ENV !== "production" && un(w, "patch"), D.el = Nt.el;
        }
        if (Oe && qe(Oe, F), !Rt && (Z = ae && ae.onVnodeMounted)) {
          const Nt = D;
          qe(
            () => _t(Z, Ne, Nt),
            F
          );
        }
        (D.shapeFlag & 256 || Ne && In(Ne.vnode) && Ne.vnode.shapeFlag & 256) && w.a && qe(w.a, F), w.isMounted = !0, O.NODE_ENV !== "production" && ki(w), D = P = H = null;
      }
    };
    w.scope.on();
    const W = w.effect = new fo(G);
    w.scope.off();
    const U = w.update = W.run.bind(W), ie = w.job = W.runIfDirty.bind(W);
    ie.i = w, ie.id = w.uid, W.scheduler = () => jr(ie), Un(w, !0), O.NODE_ENV !== "production" && (W.onTrack = w.rtc ? (Z) => Tn(w.rtc, Z) : void 0, W.onTrigger = w.rtg ? (Z) => Tn(w.rtg, Z) : void 0), U();
  }, te = (w, D, P) => {
    D.component = w;
    const H = w.vnode.props;
    w.vnode = D, w.next = null, bm(w, D.props, H, P), $m(w, D.children, P), Wt(), ha(w), Gt();
  }, xe = (w, D, P, H, F, B, Q, G, W = !1) => {
    const U = w && w.children, ie = w ? w.shapeFlag : 0, Z = D.children, { patchFlag: se, shapeFlag: ae } = D;
    if (se > 0) {
      if (se & 128) {
        $t(
          U,
          Z,
          P,
          H,
          F,
          B,
          Q,
          G,
          W
        );
        return;
      } else if (se & 256) {
        gt(
          U,
          Z,
          P,
          H,
          F,
          B,
          Q,
          G,
          W
        );
        return;
      }
    }
    ae & 8 ? (ie & 16 && Hs(U, F, B), Z !== U && f(P, Z)) : ie & 16 ? ae & 16 ? $t(
      U,
      Z,
      P,
      H,
      F,
      B,
      Q,
      G,
      W
    ) : Hs(U, F, B, !0) : (ie & 8 && f(P, ""), ae & 16 && v(
      Z,
      P,
      H,
      F,
      B,
      Q,
      G,
      W
    ));
  }, gt = (w, D, P, H, F, B, Q, G, W) => {
    w = w || ys, D = D || ys;
    const U = w.length, ie = D.length, Z = Math.min(U, ie);
    let se;
    for (se = 0; se < Z; se++) {
      const ae = D[se] = W ? On(D[se]) : mt(D[se]);
      h(
        w[se],
        ae,
        P,
        null,
        F,
        B,
        Q,
        G,
        W
      );
    }
    U > ie ? Hs(
      w,
      F,
      B,
      !0,
      !1,
      Z
    ) : v(
      D,
      P,
      H,
      F,
      B,
      Q,
      G,
      W,
      Z
    );
  }, $t = (w, D, P, H, F, B, Q, G, W) => {
    let U = 0;
    const ie = D.length;
    let Z = w.length - 1, se = ie - 1;
    for (; U <= Z && U <= se; ) {
      const ae = w[U], be = D[U] = W ? On(D[U]) : mt(D[U]);
      if (Bt(ae, be))
        h(
          ae,
          be,
          P,
          null,
          F,
          B,
          Q,
          G,
          W
        );
      else
        break;
      U++;
    }
    for (; U <= Z && U <= se; ) {
      const ae = w[Z], be = D[se] = W ? On(D[se]) : mt(D[se]);
      if (Bt(ae, be))
        h(
          ae,
          be,
          P,
          null,
          F,
          B,
          Q,
          G,
          W
        );
      else
        break;
      Z--, se--;
    }
    if (U > Z) {
      if (U <= se) {
        const ae = se + 1, be = ae < ie ? D[ae].el : H;
        for (; U <= se; )
          h(
            null,
            D[U] = W ? On(D[U]) : mt(D[U]),
            P,
            be,
            F,
            B,
            Q,
            G,
            W
          ), U++;
      }
    } else if (U > se)
      for (; U <= Z; )
        En(w[U], F, B, !0), U++;
    else {
      const ae = U, be = U, Oe = /* @__PURE__ */ new Map();
      for (U = be; U <= se; U++) {
        const dt = D[U] = W ? On(D[U]) : mt(D[U]);
        dt.key != null && (O.NODE_ENV !== "production" && Oe.has(dt.key) && R(
          "Duplicate keys found during update:",
          JSON.stringify(dt.key),
          "Make sure keys are unique."
        ), Oe.set(dt.key, U));
      }
      let Ne, vt = 0;
      const et = se - be + 1;
      let Rt = !1, Nt = 0;
      const Us = new Array(et);
      for (U = 0; U < et; U++) Us[U] = 0;
      for (U = ae; U <= Z; U++) {
        const dt = w[U];
        if (vt >= et) {
          En(dt, F, B, !0);
          continue;
        }
        let Jt;
        if (dt.key != null)
          Jt = Oe.get(dt.key);
        else
          for (Ne = be; Ne <= se; Ne++)
            if (Us[Ne - be] === 0 && Bt(dt, D[Ne])) {
              Jt = Ne;
              break;
            }
        Jt === void 0 ? En(dt, F, B, !0) : (Us[Jt - be] = U + 1, Jt >= Nt ? Nt = Jt : Rt = !0, h(
          dt,
          D[Jt],
          P,
          null,
          F,
          B,
          Q,
          G,
          W
        ), vt++);
      }
      const oa = Rt ? Dm(Us) : ys;
      for (Ne = oa.length - 1, U = et - 1; U >= 0; U--) {
        const dt = be + U, Jt = D[dt], ra = D[dt + 1], ia = dt + 1 < ie ? (
          // #13559, fallback to el placeholder for unresolved async component
          ra.el || ra.placeholder
        ) : H;
        Us[U] === 0 ? h(
          null,
          Jt,
          P,
          ia,
          F,
          B,
          Q,
          G,
          W
        ) : Rt && (Ne < 0 || U !== oa[Ne] ? Tt(Jt, P, ia, 2) : Ne--);
      }
    }
  }, Tt = (w, D, P, H, F = null) => {
    const { el: B, type: Q, transition: G, children: W, shapeFlag: U } = w;
    if (U & 6) {
      Tt(w.component.subTree, D, P, H);
      return;
    }
    if (U & 128) {
      w.suspense.move(D, P, H);
      return;
    }
    if (U & 64) {
      Q.move(w, D, P, ps);
      return;
    }
    if (Q === re) {
      s(B, D, P);
      for (let Z = 0; Z < W.length; Z++)
        Tt(W[Z], D, P, H);
      s(w.anchor, D, P);
      return;
    }
    if (Q === Mn) {
      $(w, D, P);
      return;
    }
    if (H !== 2 && U & 1 && G)
      if (H === 0)
        G.beforeEnter(B), s(B, D, P), qe(() => G.enter(B), F);
      else {
        const { leave: Z, delayLeave: se, afterLeave: ae } = G, be = () => {
          w.ctx.isUnmounted ? o(B) : s(B, D, P);
        }, Oe = () => {
          Z(B, () => {
            be(), ae && ae();
          });
        };
        se ? se(B, be, Oe) : Oe();
      }
    else
      s(B, D, P);
  }, En = (w, D, P, H = !1, F = !1) => {
    const {
      type: B,
      props: Q,
      ref: G,
      children: W,
      dynamicChildren: U,
      shapeFlag: ie,
      patchFlag: Z,
      dirs: se,
      cacheIndex: ae
    } = w;
    if (Z === -2 && (F = !1), G != null && (Wt(), ws(G, null, P, w, !0), Gt()), ae != null && (D.renderCache[ae] = void 0), ie & 256) {
      D.ctx.deactivate(w);
      return;
    }
    const be = ie & 1 && se, Oe = !In(w);
    let Ne;
    if (Oe && (Ne = Q && Q.onVnodeBeforeUnmount) && _t(Ne, D, w), ie & 6)
      Bf(w.component, P, H);
    else {
      if (ie & 128) {
        w.suspense.unmount(P, H);
        return;
      }
      be && en(w, null, D, "beforeUnmount"), ie & 64 ? w.type.remove(
        w,
        D,
        P,
        ps,
        H
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== re || Z > 0 && Z & 64) ? Hs(
        U,
        D,
        P,
        !1,
        !0
      ) : (B === re && Z & 384 || !F && ie & 16) && Hs(W, D, P), H && ei(w);
    }
    (Oe && (Ne = Q && Q.onVnodeUnmounted) || be) && qe(() => {
      Ne && _t(Ne, D, w), be && en(w, null, D, "unmounted");
    }, P);
  }, ei = (w) => {
    const { type: D, el: P, anchor: H, transition: F } = w;
    if (D === re) {
      O.NODE_ENV !== "production" && w.patchFlag > 0 && w.patchFlag & 2048 && F && !F.persisted ? w.children.forEach((Q) => {
        Q.type === Ve ? o(Q.el) : ei(Q);
      }) : Ff(P, H);
      return;
    }
    if (D === Mn) {
      _(w);
      return;
    }
    const B = () => {
      o(P), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (w.shapeFlag & 1 && F && !F.persisted) {
      const { leave: Q, delayLeave: G } = F, W = () => Q(P, B);
      G ? G(w.el, B, W) : W();
    } else
      B();
  }, Ff = (w, D) => {
    let P;
    for (; w !== D; )
      P = p(w), o(w), w = P;
    o(D);
  }, Bf = (w, D, P) => {
    O.NODE_ENV !== "production" && w.type.__hmrId && rh(w);
    const {
      bum: H,
      scope: F,
      job: B,
      subTree: Q,
      um: G,
      m: W,
      a: U,
      parent: ie,
      slots: { __: Z }
    } = w;
    hr(W), hr(U), H && Tn(H), ie && Y(Z) && Z.forEach((se) => {
      ie.renderCache[se] = void 0;
    }), F.stop(), B && (B.flags |= 8, En(Q, w, D, P)), G && qe(G, D), qe(() => {
      w.isUnmounted = !0;
    }, D), D && D.pendingBranch && !D.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === D.pendingId && (D.deps--, D.deps === 0 && D.resolve()), O.NODE_ENV !== "production" && dh(w);
  }, Hs = (w, D, P, H = !1, F = !1, B = 0) => {
    for (let Q = B; Q < w.length; Q++)
      En(w[Q], D, P, H, F);
  }, Io = (w) => {
    if (w.shapeFlag & 6)
      return Io(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const D = p(w.anchor || w.el), P = D && D[yu];
    return P ? p(P) : D;
  };
  let ti = !1;
  const sa = (w, D, P) => {
    w == null ? D._vnode && En(D._vnode, null, null, !0) : h(
      D._vnode || null,
      w,
      D,
      null,
      null,
      null,
      P
    ), D._vnode = w, ti || (ti = !0, ha(), cr(), ti = !1);
  }, ps = {
    p: h,
    um: En,
    m: Tt,
    r: ei,
    mt: K,
    mc: v,
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
    return e || O.NODE_ENV !== "production" && R(
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
function sn(e, t, n) {
  return O.NODE_ENV !== "production" && !oe(t) && R(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), $o(e, t, n);
}
function $o(e, t, n = pe) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  O.NODE_ENV !== "production" && !t && (s !== void 0 && R(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && R(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && R(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  O.NODE_ENV !== "production" && (l.onWarn = R);
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
  l.call = (m, g, h) => Mt(m, f, g, h);
  let u = !1;
  r === "post" ? l.scheduler = (m) => {
    qe(m, f && f.suspense);
  } : r !== "sync" && (u = !0, l.scheduler = (m, g) => {
    g ? m() : jr(m);
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
  if (O.NODE_ENV !== "production" && !s)
    return R("useModel() called without active instance."), q();
  const o = Ce(t);
  if (O.NODE_ENV !== "production" && !s.propsOptions[0][o])
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
        const g = n.set ? n.set(m) : m;
        if (!pt(g, f) && !(u !== pe && pt(m, u)))
          return;
        const h = s.vnode.props;
        h && // check if parent has passed v-model
        (t in h || o in h || r in h) && (`onUpdate:${t}` in h || `onUpdate:${o}` in h || `onUpdate:${r}` in h) || (f = m, c()), s.emit(`update:${t}`, g), pt(m, g) && pt(m, u) && !pt(g, p) && c(), u = m, p = g;
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
  if (i && (i.trim && (o = n.map((f) => le(f) ? f.trim() : f)), i.number && (o = n.map(sr))), O.NODE_ENV !== "production" && hh(e, t, o), O.NODE_ENV !== "production") {
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
    ctx: g,
    inheritAttrs: h
  } = e, V = go(e);
  let C, E;
  O.NODE_ENV !== "production" && (Ai = !1);
  try {
    if (n.shapeFlag & 4) {
      const _ = o || s, A = O.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(_, {
        get(b, N, v) {
          return R(
            `Property '${String(
              N
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(b, N, v);
        }
      }) : _;
      C = mt(
        c.call(
          A,
          _,
          f,
          O.NODE_ENV !== "production" ? jt(u) : u,
          m,
          p,
          g
        )
      ), E = l;
    } else {
      const _ = t;
      O.NODE_ENV !== "production" && l === u && mr(), C = mt(
        _.length > 1 ? _(
          O.NODE_ENV !== "production" ? jt(u) : u,
          O.NODE_ENV !== "production" ? {
            get attrs() {
              return mr(), jt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : _(
          O.NODE_ENV !== "production" ? jt(u) : u,
          null
        )
      ), E = t.props ? l : Rm(l);
    }
  } catch (_) {
    io.length = 0, Bn(_, e, 1), C = ue(Ve);
  }
  let y = C, $;
  if (O.NODE_ENV !== "production" && C.patchFlag > 0 && C.patchFlag & 2048 && ([y, $] = id(C)), E && h !== !1) {
    const _ = Object.keys(E), { shapeFlag: A } = y;
    if (_.length) {
      if (A & 7)
        r && _.some(nr) && (E = Lm(
          E,
          r
        )), y = Pt(y, E, !1, !0);
      else if (O.NODE_ENV !== "production" && !Ai && y.type !== Ve) {
        const b = Object.keys(l), N = [], v = [];
        for (let S = 0, I = b.length; S < I; S++) {
          const T = b[S];
          vn(T) ? nr(T) || N.push(T[2].toLowerCase() + T.slice(3)) : v.push(T);
        }
        v.length && R(
          `Extraneous non-props attributes (${v.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), N.length && R(
          `Extraneous non-emits event listeners (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (O.NODE_ENV !== "production" && !Da(y) && R(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), y = Pt(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (O.NODE_ENV !== "production" && !Da(y) && R(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), yn(y, n.transition)), O.NODE_ENV !== "production" && $ ? $(y) : C = y, go(V), C;
}
const id = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Wr(t, !1);
  if (s) {
    if (O.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
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
        if (n = o, O.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
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
  if (O.NODE_ENV !== "production" && (o || l) && Ht || t.dirs || t.transition)
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
  const p = t.ssContent, m = t.ssFallback, { activeBranch: g, pendingBranch: h, isInFallback: V, isHydrating: C } = u;
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
    ), u.deps <= 0 ? u.resolve() : V && (C || (a(
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
    ), xs(u, m)))) : (u.pendingId = Ii++, C ? (u.isHydrating = !1, u.activeBranch = h) : c(h, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = f("div"), V ? (a(
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
    ), xs(u, m))) : g && Bt(p, g) ? (a(
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
  else if (g && Bt(p, g))
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
    const { timeout: E, pendingId: y } = u;
    E > 0 ? setTimeout(() => {
      u.pendingId === y && u.fallback(m);
    }, E) : E === 0 && u.fallback(m);
  }
}
let Aa = !1;
function ld(e, t, n, s, o, r, i, l, a, c, f = !1) {
  O.NODE_ENV !== "production" && !Aa && (Aa = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: m,
    n: g,
    o: { parentNode: h, remove: V }
  } = c;
  let C;
  const E = Km(e);
  E && t && t.pendingBranch && (C = t.pendingId, t.deps++);
  const y = e.props ? or(e.props.timeout) : void 0;
  O.NODE_ENV !== "production" && hl(y, "Suspense timeout");
  const $ = r, _ = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Ii++,
    timeout: typeof y == "number" ? y : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !f,
    isHydrating: f,
    isUnmounted: !1,
    effects: [],
    resolve(A = !1, b = !1) {
      if (O.NODE_ENV !== "production") {
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
        vnode: N,
        activeBranch: v,
        pendingBranch: S,
        pendingId: I,
        effects: T,
        parentComponent: M,
        container: z
      } = _;
      let K = !1;
      _.isHydrating ? _.isHydrating = !1 : A || (K = v && S.transition && S.transition.mode === "out-in", K && (v.transition.afterLeave = () => {
        I === _.pendingId && (p(
          S,
          z,
          r === $ ? g(v) : r,
          0
        ), ks(T));
      }), v && (h(v.el) === z && (r = g(v)), m(v, M, _, !0)), K || p(S, z, r, 0)), xs(_, S), _.pendingBranch = null, _.isInFallback = !1;
      let ee = _.parent, ne = !1;
      for (; ee; ) {
        if (ee.pendingBranch) {
          ee.effects.push(...T), ne = !0;
          break;
        }
        ee = ee.parent;
      }
      !ne && !K && ks(T), _.effects = [], E && t && t.pendingBranch && C === t.pendingId && (t.deps--, t.deps === 0 && !b && t.resolve()), yo(N, "onResolve");
    },
    fallback(A) {
      if (!_.pendingBranch)
        return;
      const { vnode: b, activeBranch: N, parentComponent: v, container: S, namespace: I } = _;
      yo(b, "onFallback");
      const T = g(N), M = () => {
        _.isInFallback && (u(
          null,
          A,
          S,
          T,
          v,
          null,
          // fallback tree will not have suspense context
          I,
          l,
          a
        ), xs(_, A));
      }, z = A.transition && A.transition.mode === "out-in";
      z && (N.transition.afterLeave = M), _.isInFallback = !0, m(
        N,
        v,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), z || M();
    },
    move(A, b, N) {
      _.activeBranch && p(_.activeBranch, A, b, N), _.container = A;
    },
    next() {
      return _.activeBranch && g(_.activeBranch);
    },
    registerDep(A, b, N) {
      const v = !!_.pendingBranch;
      v && _.deps++;
      const S = A.vnode.el;
      A.asyncDep.catch((I) => {
        Bn(I, A, 0);
      }).then((I) => {
        if (A.isUnmounted || _.isUnmounted || _.pendingId !== A.suspenseId)
          return;
        A.asyncResolved = !0;
        const { vnode: T } = A;
        O.NODE_ENV !== "production" && bs(T), Bi(A, I, !1), S && (T.el = S);
        const M = !S && A.subTree.el;
        b(
          A,
          T,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          h(S || A.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          S ? null : g(A.subTree),
          _,
          i,
          N
        ), M && V(M), Gr(A, T.el), O.NODE_ENV !== "production" && _s(), v && --_.deps === 0 && _.resolve();
      });
    },
    unmount(A, b) {
      _.isUnmounted = !0, _.activeBranch && m(
        _.activeBranch,
        n,
        A,
        b
      ), _.pendingBranch && m(
        _.pendingBranch,
        n,
        A,
        b
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
    n && (e._d = !1, x()), e = e(), n && (e._d = !0, t = rt, cd());
  }
  if (Y(e)) {
    const n = Wr(e);
    O.NODE_ENV !== "production" && !n && e.filter((s) => s !== xl).length > 0 && R("<Suspense> slots expect a single root node."), e = n;
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
  return e.dynamicChildren = is > 0 ? rt || ys : null, cd(), is > 0 && rt && rt.push(e), e;
}
function k(e, t, n, s, o, r) {
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
  if (O.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
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
function d(e, t = null, n = null, s = 0, o = null, r = e === re ? 0 : 1, i = !1, l = !1) {
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
  return l ? (Dl(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), O.NODE_ENV !== "production" && a.key !== a.key && R("VNode created with invalid key (NaN). VNode type:", a.type), is > 0 && // avoid a block node from tracking itself
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
  if ((!e || e === xl) && (O.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = Ve), ln(e)) {
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
    l && !le(l) && (t.class = _e(l)), me(a) && (Ss(a) && !Y(a) && (a = fe({}, a)), t.style = Ge(a));
  }
  const i = le(e) ? 1 : gr(e) ? 128 : bu(e) ? 64 : me(e) ? 4 : oe(e) ? 2 : 0;
  return O.NODE_ENV !== "production" && i & 4 && Ss(e) && (e = ce(e), R(
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
        t.class !== s.class && (t.class = _e([t.class, s.class]));
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
  return O.NODE_ENV !== "production" ? r.ctx = Kh(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Pm.bind(null, r), e.ce && e.ce(r), r;
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
    s.compilerOptions && Vl() && R(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, so), O.NODE_ENV !== "production" && Wh(e);
  const { setup: o } = s;
  if (o) {
    Wt();
    const r = e.setupContext = o.length > 1 ? Ed(e) : null, i = as(e), l = ds(
      o,
      e,
      0,
      [
        O.NODE_ENV !== "production" ? jt(e.props) : e.props,
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
      if (e.asyncDep = l, O.NODE_ENV !== "production" && !e.suspense) {
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
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) ? (O.NODE_ENV !== "production" && ln(t) && R(
    "setup() should not return VNodes directly - return a render function instead."
  ), O.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = pl(t), O.NODE_ENV !== "production" && Gh(e)) : O.NODE_ENV !== "production" && t !== void 0 && R(
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
    Wt();
    try {
      cm(e);
    } finally {
      Gt(), o();
    }
  }
  O.NODE_ENV !== "production" && !s.render && e.render === De && !t && (!lo && s.template ? R(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : R("Component is missing template or render function: ", s));
}
const Ma = O.NODE_ENV !== "production" ? {
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
    if (O.NODE_ENV !== "production" && (e.exposed && R("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (Y(n) ? s = "array" : Ie(n) && (s = "ref")), s !== "object" && R(
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
const J = (e, t) => {
  const n = zp(e, t, Os);
  if (O.NODE_ENV !== "production") {
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
  if (O.NODE_ENV === "production" || typeof window > "u")
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
    for (const h in u.ctx)
      c(m, h, p) && (g[h] = u.ctx[h]);
    return g;
  }
  function c(u, p, m) {
    const g = u[m];
    if (Y(g) && g.includes(p) || me(g) && p in g || u.extends && c(u.extends, p, m) || u.mixins && u.mixins.some((h) => c(h, p, m)))
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
const Hi = "3.5.18", Me = O.NODE_ENV !== "production" ? R : De, s0 = Br, o0 = Ft, r0 = gl, i0 = {
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
  for (const T in e)
    T in kd || (t[T] = e[T]);
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
  } = e, g = m0(o), h = g && g[0], V = g && g[1], {
    onBeforeEnter: C,
    onEnter: E,
    onEnterCancelled: y,
    onLeave: $,
    onLeaveCancelled: _,
    onBeforeAppear: A = C,
    onAppear: b = E,
    onAppearCancelled: N = y
  } = t, v = (T, M, z, K) => {
    T._enterCancelled = K, Nn(T, M ? f : l), Nn(T, M ? c : i), z && z();
  }, S = (T, M) => {
    T._isLeaving = !1, Nn(T, u), Nn(T, m), Nn(T, p), M && M();
  }, I = (T) => (M, z) => {
    const K = T ? b : E, ee = () => v(M, T, z);
    qn(K, [M, ee]), Fa(() => {
      Nn(M, T ? a : r), Xt(M, T ? f : l), La(K) || Ba(M, s, h, ee);
    });
  };
  return fe(t, {
    onBeforeEnter(T) {
      qn(C, [T]), Xt(T, r), Xt(T, i);
    },
    onBeforeAppear(T) {
      qn(A, [T]), Xt(T, a), Xt(T, c);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(T, M) {
      T._isLeaving = !0;
      const z = () => S(T, M);
      Xt(T, u), T._enterCancelled ? (Xt(T, p), qi()) : (qi(), Xt(T, p)), Fa(() => {
        T._isLeaving && (Nn(T, u), Xt(T, m), La($) || Ba(T, s, V, z));
      }), qn($, [T, z]);
    },
    onEnterCancelled(T) {
      v(T, !1, void 0, !0), qn(y, [T]);
    },
    onAppearCancelled(T) {
      v(T, !0, void 0, !0), qn(N, [T]);
    },
    onLeaveCancelled(T) {
      S(T), qn(_, [T]);
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
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${wn}Delay`), r = s(`${wn}Duration`), i = ja(o, r), l = s(`${Ks}Delay`), a = s(`${Ks}Duration`), c = ja(l, a);
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
      let a = i.tag || re;
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
  Fragment: re,
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
  computed: J,
  createApp: Lt,
  createBlock: ct,
  createCommentVNode: L,
  createElementBlock: k,
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
  normalizeClass: _e,
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
  openBlock: x,
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
  renderList: ye,
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
var X = {};
const bo = Symbol(X.NODE_ENV !== "production" ? "Fragment" : ""), co = Symbol(X.NODE_ENV !== "production" ? "Teleport" : ""), Ml = Symbol(X.NODE_ENV !== "production" ? "Suspense" : ""), wr = Symbol(X.NODE_ENV !== "production" ? "KeepAlive" : ""), Kd = Symbol(
  X.NODE_ENV !== "production" ? "BaseTransition" : ""
), cs = Symbol(X.NODE_ENV !== "production" ? "openBlock" : ""), Wd = Symbol(X.NODE_ENV !== "production" ? "createBlock" : ""), Gd = Symbol(
  X.NODE_ENV !== "production" ? "createElementBlock" : ""
), Pl = Symbol(X.NODE_ENV !== "production" ? "createVNode" : ""), Rl = Symbol(
  X.NODE_ENV !== "production" ? "createElementVNode" : ""
), Do = Symbol(
  X.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Ll = Symbol(
  X.NODE_ENV !== "production" ? "createTextVNode" : ""
), Yd = Symbol(
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
), ql = Symbol(X.NODE_ENV !== "production" ? "renderList" : ""), Jd = Symbol(X.NODE_ENV !== "production" ? "renderSlot" : ""), Xd = Symbol(X.NODE_ENV !== "production" ? "createSlots" : ""), Xr = Symbol(
  X.NODE_ENV !== "production" ? "toDisplayString" : ""
), xr = Symbol(X.NODE_ENV !== "production" ? "mergeProps" : ""), zl = Symbol(
  X.NODE_ENV !== "production" ? "normalizeClass" : ""
), Kl = Symbol(
  X.NODE_ENV !== "production" ? "normalizeStyle" : ""
), _o = Symbol(
  X.NODE_ENV !== "production" ? "normalizeProps" : ""
), Vo = Symbol(
  X.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Wl = Symbol(X.NODE_ENV !== "production" ? "toHandlers" : ""), Wi = Symbol(X.NODE_ENV !== "production" ? "camelize" : ""), Q0 = Symbol(X.NODE_ENV !== "production" ? "capitalize" : ""), Gi = Symbol(
  X.NODE_ENV !== "production" ? "toHandlerKey" : ""
), Nr = Symbol(
  X.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Z0 = Symbol(X.NODE_ENV !== "production" ? "pushScopeId" : ""), eg = Symbol(X.NODE_ENV !== "production" ? "popScopeId" : ""), Gl = Symbol(X.NODE_ENV !== "production" ? "withCtx" : ""), tg = Symbol(X.NODE_ENV !== "production" ? "unref" : ""), ng = Symbol(X.NODE_ENV !== "production" ? "isRef" : ""), Yl = Symbol(X.NODE_ENV !== "production" ? "withMemo" : ""), Qd = Symbol(X.NODE_ENV !== "production" ? "isMemoSame" : ""), As = {
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
    St(t) || (t === 62 ? (X.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = lc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || St(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, X.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : St(t) || (X.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
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
    St(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (X.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
  return X.NODE_ENV !== "production" && o && kr(e, t, n, ...s), o;
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
  comments: X.NODE_ENV !== "production",
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
    if (X.NODE_ENV !== "production" && Te.state !== 1)
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
    if (X.NODE_ENV !== "production" && Pn(
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
      X.NODE_ENV !== "production" && kr(
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
  if (X.NODE_ENV !== "production" && !ve.decodeEntities)
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
        const g = p.codegenNode;
        if (g.type === 13) {
          const h = g.patchFlag;
          if ((h === void 0 || h === 512 || h === 1) && df(p, n) >= 2) {
            const V = ff(p);
            V && (g.props = n.hoist(V));
          }
          g.dynamicProps && (g.dynamicProps = n.hoist(g.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : kt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (X.NODE_ENV !== "production" ? ` /* ${eo[-1]} */` : "")
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
  ssr: g = !1,
  inSSR: h = !1,
  ssrCssVars: V = "",
  bindingMetadata: C = pe,
  inline: E = !1,
  isTS: y = !1,
  onError: $ = Xl,
  onWarn: _ = Zd,
  compatConfig: A
}) {
  const b = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), N = {
    // options
    filename: t,
    selfName: b && rn(Ce(b[1])),
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
    ssr: g,
    inSSR: h,
    ssrCssVars: V,
    bindingMetadata: C,
    inline: E,
    isTS: y,
    onError: $,
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
    helper(v) {
      const S = N.helpers.get(v) || 0;
      return N.helpers.set(v, S + 1), v;
    },
    removeHelper(v) {
      const S = N.helpers.get(v);
      if (S) {
        const I = S - 1;
        I ? N.helpers.set(v, I) : N.helpers.delete(v);
      }
    },
    helperString(v) {
      return `_${As[N.helper(v)]}`;
    },
    replaceNode(v) {
      if (X.NODE_ENV !== "production") {
        if (!N.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!N.parent)
          throw new Error("Cannot replace root node.");
      }
      N.parent.children[N.childIndex] = N.currentNode = v;
    },
    removeNode(v) {
      if (X.NODE_ENV !== "production" && !N.parent)
        throw new Error("Cannot remove root node.");
      const S = N.parent.children, I = v ? S.indexOf(v) : N.currentNode ? N.childIndex : -1;
      if (X.NODE_ENV !== "production" && I < 0)
        throw new Error("node being removed is not a child of current parent");
      !v || v === N.currentNode ? (N.currentNode = null, N.onNodeRemoved()) : N.childIndex > I && (N.childIndex--, N.onNodeRemoved()), N.parent.children.splice(I, 1);
    },
    onNodeRemoved: De,
    addIdentifiers(v) {
    },
    removeIdentifiers(v) {
    },
    hoist(v) {
      le(v) && (v = de(v)), N.hoists.push(v);
      const S = de(
        `_hoisted_${N.hoists.length}`,
        !1,
        v.loc,
        2
      );
      return S.hoisted = v, S;
    },
    cache(v, S = !1, I = !1) {
      const T = rg(
        N.cached.length,
        v,
        S,
        I
      );
      return N.cached.push(T), T;
    }
  };
  return N.filters = /* @__PURE__ */ new Set(), N;
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
    push(h, V = -2, C) {
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
    ssr: f
  } = n, u = Array.from(e.helpers), p = u.length > 0, m = !r && s !== "module";
  qg(e, n);
  const h = f ? "ssrRender" : "render", C = (f ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${h}(${C}) {`), i(), m && (o("with (_ctx) {"), i(), p && (o(
    `const { ${u.map(hf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (bi(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (bi(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), bi(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let E = 0; E < e.temps; E++)
      o(`${E > 0 ? ", " : ""}_temp${E}`);
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
  const n = e.length > 3 || X.NODE_ENV !== "production" && e.some((s) => Y(s) || !Kg(s));
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
      X.NODE_ENV !== "production" && ac(
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
      if (X.NODE_ENV !== "production")
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
  let g;
  if (a)
    if (X.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${eo[a]} */`;
      else {
        const V = Object.keys(eo).map(Number).filter((C) => C > 0 && a & C).map((C) => eo[C]).join(", ");
        g = a + ` /* ${V} */`;
      }
    else
      g = String(a);
  f && n(s(Ul) + "("), u && n(`(${s(cs)}(${p ? "true" : ""}), `), o && n(Zr);
  const h = u ? Ps(t.inSSR, m) : Ms(t.inSSR, m);
  n(s(h) + "(", -2, e), Ao(
    Qg([r, i, l, g, c]),
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
  const l = i.length > 1 || X.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
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
  return X.NODE_ENV !== "production" && Yn(e, t, n, s), e;
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
  if (X.NODE_ENV !== "production" && t.exp && Yn(t.exp, n), t.name === "if") {
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
        const a = hc(e, t);
        if (X.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...r, ...a.children]), X.NODE_ENV !== "production") {
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
      X.NODE_ENV !== "production" ? '"v-if"' : '""',
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
        const { children: V } = r;
        X.NODE_ENV !== "production" && l && e.children.some((y) => {
          if (y.type === 1) {
            const $ = wo(y, "key");
            if ($)
              return n.onError(
                Se(
                  33,
                  $.loc
                )
              ), !0;
          }
        });
        const C = V.length !== 1 || V[0].type !== 1, E = Or(e) ? e : l && e.children.length === 1 && Or(e.children[0]) ? e.children[0] : null;
        if (E ? (h = E.codegenNode, l && p && $r(h, p, n)) : C ? h = Eo(
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
        ) : (h = V[0].codegenNode, l && p && $r(h, p, n), h.isBlock !== !m && (h.isBlock ? (o(cs), o(
          Ps(n.inSSR, h.isComponent)
        )) : o(
          Ms(n.inSSR, h.isComponent)
        )), h.isBlock = !m, h.isBlock ? (s(cs), s(Ps(n.inSSR, h.isComponent))) : s(Ms(n.inSSR, h.isComponent))), a) {
          const y = Is(
            Zi(r.parseResult, [
              de("_cached")
            ])
          );
          y.body = ig([
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
            y,
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
    const { arg: V, exp: C } = a;
    V && !wt(V) && (l = !0), r.push(
      Re(
        V || de("default", !0),
        n(C, void 0, s, o)
      )
    );
  }
  let c = !1, f = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let m = 0;
  for (let V = 0; V < s.length; V++) {
    const C = s[V];
    let E;
    if (!Cr(C) || !(E = Et(C, "slot", !0))) {
      C.type !== 3 && u.push(C);
      continue;
    }
    if (a) {
      t.onError(
        Se(37, E.loc)
      );
      break;
    }
    c = !0;
    const { children: y, loc: $ } = C, {
      arg: _ = de("default", !0),
      exp: A,
      loc: b
    } = E;
    let N;
    wt(_) ? N = _ ? _.content : "default" : l = !0;
    const v = Et(C, "for"), S = n(A, v, y, $);
    let I, T;
    if (I = Et(C, "if"))
      l = !0, i.push(
        Yi(
          I.exp,
          qo(_, S, m++),
          yc
        )
      );
    else if (T = Et(
      C,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let M = V, z;
      for (; M-- && (z = s[M], !(z.type !== 3 && el(z))); )
        ;
      if (z && Cr(z) && Et(z, /^(else-)?if$/)) {
        let K = i[i.length - 1];
        for (; K.alternate.type === 19; )
          K = K.alternate;
        K.alternate = T.exp ? Yi(
          T.exp,
          qo(
            _,
            S,
            m++
          ),
          yc
        ) : qo(_, S, m++);
      } else
        t.onError(
          Se(30, T.loc)
        );
    } else if (v) {
      l = !0;
      const M = v.forParseResult;
      M ? (yf(M, t), i.push(
        Ke(t.helper(ql), [
          M.source,
          Is(
            Zi(M),
            qo(_, S),
            !0
          )
        ])
      )) : t.onError(
        Se(
          32,
          v.loc
        )
      );
    } else {
      if (N) {
        if (p.has(N)) {
          t.onError(
            Se(
              38,
              b
            )
          );
          continue;
        }
        p.add(N), N === "default" && (f = !0);
      }
      r.push(Re(_, S));
    }
  }
  if (!a) {
    const V = (C, E) => {
      const y = n(C, void 0, E, o);
      return t.compatConfig && (y.isNonScopedSlot = !0), Re("default", y);
    };
    c ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((C) => el(C)) && (f ? t.onError(
      Se(
        39,
        u[0].loc
      )
    ) : r.push(
      V(void 0, u)
    )) : r.push(V(void 0, s));
  }
  const g = l ? 2 : tr(e.children) ? 3 : 1;
  let h = Vt(
    r.concat(
      Re(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        de(
          g + (X.NODE_ENV !== "production" ? ` /* ${Kf[g]} */` : ""),
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
  let a, c, f = 0, u, p, m, g = (
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
    const V = h.directives;
    m = V && V.length ? ns(
      V.map((C) => wv(C, t))
    ) : void 0, h.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (i === wr && (g = !0, f |= 1024, X.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Se(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    i !== co && // explained above.
    i !== wr) {
      const { slots: V, hasDynamicSlots: C } = yv(e, t);
      c = V, C && (f |= 1024);
    } else if (e.children.length === 1 && i !== co) {
      const V = e.children[0], C = V.type, E = C === 5 || C === 8;
      E && kt(V, t) === 0 && (f |= 1), E || C === 2 ? c = V : c = e.children;
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
  const f = [], u = [], p = a.length > 0;
  let m = !1, g = 0, h = !1, V = !1, C = !1, E = !1, y = !1, $ = !1;
  const _ = [], A = (S) => {
    c.length && (f.push(
      Vt(bc(c), l)
    ), c = []), S && f.push(S);
  }, b = () => {
    t.scopes.vFor > 0 && c.push(
      Re(
        de("ref_for", !0),
        de("true")
      )
    );
  }, N = ({ key: S, value: I }) => {
    if (wt(S)) {
      const T = S.content, M = vn(T);
      if (M && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      T.toLowerCase() !== "onclick" && // omit v-model handlers
      T !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !An(T) && (E = !0), M && An(T) && ($ = !0), M && I.type === 14 && (I = I.arguments[0]), I.type === 20 || (I.type === 4 || I.type === 8) && kt(I, t) > 0)
        return;
      T === "ref" ? h = !0 : T === "class" ? V = !0 : T === "style" ? C = !0 : T !== "key" && !_.includes(T) && _.push(T), s && (T === "class" || T === "style") && !_.includes(T) && _.push(T);
    } else
      y = !0;
  };
  for (let S = 0; S < n.length; S++) {
    const I = n[S];
    if (I.type === 6) {
      const { loc: T, name: M, nameLoc: z, value: K } = I;
      let ee = !0;
      if (M === "ref" && (h = !0, b()), M === "is" && (tl(i) || K && K.content.startsWith("vue:") || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      c.push(
        Re(
          de(M, !0, z),
          de(
            K ? K.content : "",
            ee,
            K ? K.loc : T
          )
        )
      );
    } else {
      const { name: T, arg: M, exp: z, loc: K, modifiers: ee } = I, ne = T === "bind", te = T === "on";
      if (T === "slot") {
        s || t.onError(
          Se(40, K)
        );
        continue;
      }
      if (T === "once" || T === "memo" || T === "is" || ne && Vn(M, "is") && (tl(i) || Pn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || te && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (ne && Vn(M, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        te && p && Vn(M, "vue:before-update")) && (m = !0), ne && Vn(M, "ref") && b(), !M && (ne || te)
      ) {
        if (y = !0, z)
          if (ne) {
            if (A(), X.NODE_ENV !== "production" && f.some(($t) => $t.type === 15 ? $t.properties.some(({ key: Tt }) => Tt.type !== 4 || !Tt.isStatic ? !0 : Tt.content !== "class" && Tt.content !== "style" && !vn(Tt.content)) : !0) && Rs(
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
            b(), A(), f.push(z);
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
      ne && ee.some((gt) => gt.content === "prop") && (g |= 32);
      const xe = t.directiveTransforms[T];
      if (xe) {
        const { props: gt, needRuntime: $t } = xe(I, e, t);
        !r && gt.forEach(N), te && M && !wt(M) ? A(Vt(gt, l)) : c.push(...gt), $t && (u.push(I), xt($t) && bf.set(I, $t));
      } else Vc(T) || (u.push(I), p && (m = !0));
    }
  }
  let v;
  if (f.length ? (A(), f.length > 1 ? v = Ke(
    t.helper(xr),
    f,
    l
  ) : v = f[0]) : c.length && (v = Vt(
    bc(c),
    l
  )), y ? g |= 16 : (V && !s && (g |= 2), C && !s && (g |= 4), _.length && (g |= 8), E && (g |= 32)), !m && (g === 0 || g === 32) && (h || $ || u.length > 0) && (g |= 512), !t.inSSR && v)
    switch (v.type) {
      case 15:
        let S = -1, I = -1, T = !1;
        for (let K = 0; K < v.properties.length; K++) {
          const ee = v.properties[K].key;
          wt(ee) ? ee.content === "class" ? S = K : ee.content === "style" && (I = K) : ee.isHandlerKey || (T = !0);
        }
        const M = v.properties[S], z = v.properties[I];
        T ? v = Ke(
          t.helper(_o),
          [v]
        ) : (M && !wt(M.value) && (M.value = Ke(
          t.helper(zl),
          [M.value]
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
        v = Ke(
          t.helper(_o),
          [
            Ke(t.helper(Vo), [
              v
            ])
          ]
        );
        break;
    }
  return {
    props: v,
    directives: u,
    patchFlag: g,
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
      X.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Se(51, i.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
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
    X.NODE_ENV !== "production" && Yn(
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
              1 + (X.NODE_ENV !== "production" ? ` /* ${eo[1]} */` : "")
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
  let s = !1, o = !1, r = !1, i = !1, l = 0, a = 0, c = 0, f = 0, u, p, m, g, h = [];
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
      g === void 0 ? (f = m + 1, g = n.slice(0, m).trim()) : V();
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
        let C = m - 1, E;
        for (; C >= 0 && (E = n.charAt(C), E === " "); C--)
          ;
        (!E || !Ov.test(E)) && (i = !0);
      }
    }
  g === void 0 ? g = n.slice(0, m).trim() : f !== 0 && V();
  function V() {
    h.push(n.slice(f, m).trim()), f = m + 1;
  }
  if (h.length) {
    for (X.NODE_ENV !== "production" && kr(
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
      ...X.NODE_ENV !== "production" ? [lv] : [],
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
    const n = e, s = t, o = q(!1), r = J(() => n.href ? "a" : "button"), i = (f, u = "") => {
      var g, h, V;
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
      const m = (V = (h = (g = window.Shopline) == null ? void 0 : g.theme) == null ? void 0 : h.settings) == null ? void 0 : V[f];
      if (m != null && m !== "")
        return m;
      try {
        const C = "--" + f.replace(/_/g, "-"), E = getComputedStyle(document.documentElement).getPropertyValue(C).trim();
        if (E) return E;
      } catch {
      }
      return u;
    }, l = J(() => {
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
    }), a = J(() => {
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
    return (f, u) => (x(), ct(Nl(r.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: _e(a.value),
      style: Ge(l.value),
      onClick: c,
      onMouseenter: u[0] || (u[0] = (p) => o.value = !0),
      onMouseleave: u[1] || (u[1] = (p) => o.value = !1)
    }, {
      default: Pe(() => [
        e.loading ? (x(), k("svg", oy, u[2] || (u[2] = [
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
    const n = e, s = t, o = ut(), r = J({
      get: () => n.modelValue,
      set: (f) => {
        var p, m, g;
        const u = Math.max(n.min, Math.min(n.max, f));
        if (s("update:modelValue", u), s("update", u), ((g = (m = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : m.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const h = o.vnode.el.parentElement, V = h.getAttribute("data-line-key");
          if (V) {
            const C = new CustomEvent("quantity-update", {
              detail: { key: V, value: u },
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
    }, a = (f) => {
      const u = parseInt(f.target.value) || n.min;
      r.value = u;
    }, c = (f) => {
      const u = parseInt(f.target.value) || n.min;
      r.value = u, f.target.value = r.value;
    };
    return (f, u) => (x(), k("div", {
      class: _e(["quantity-selector", { "quantity-selector--small": e.size === "small" }])
    }, [
      d("button", {
        type: "button",
        class: _e(["quantity-button quantity-button--minus", { "quantity-button--small": e.size === "small" }]),
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
        class: _e(["quantity-input", { "quantity-input--small": e.size === "small" }]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: c,
        "aria-label": "Quantity"
      }, null, 42, ly),
      d("button", {
        type: "button",
        class: _e(["quantity-button quantity-button--plus", { "quantity-button--small": e.size === "small" }]),
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
    const n = e, s = t, o = q(n.item.quantity), r = q(!1), i = q(""), l = J(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = J(() => {
      var p;
      return ((p = n.item.variant) == null ? void 0 : p.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), c = (p) => {
      var C, E, y;
      if (!p && p !== 0) return "$0.00";
      const m = ((C = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : C.money_format) || "${{amount}}";
      (E = Shopline == null ? void 0 : Shopline.shop) != null && E.currency;
      const g = ((y = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : y.current) || "en", V = new Intl.NumberFormat(g, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(p));
      return m.replace("{{amount}}", V);
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
    }), (p, m) => (x(), k("div", {
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
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (x(), k("p", _y, j(e.item.variant_title), 1)) : L("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (x(), k("div", Ey, [
                (x(!0), k(re, null, ye(e.item.properties, (g, h) => (x(), k("p", {
                  key: h,
                  class: "cart-item__property"
                }, [
                  d("span", wy, j(h) + ":", 1),
                  je(" " + j(g), 1)
                ]))), 128))
              ])) : L("", !0)
            ]),
            d("div", xy, [
              d("p", Ny, j(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), k("p", Sy, j(c(e.item.original_price * e.item.quantity)), 1)) : L("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (x(), k("div", ky, [
            (x(!0), k(re, null, ye(e.item.discounts, (g) => (x(), k("div", {
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
              je(" " + j(g.title) + " (-" + j(c(g.amount || g.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : L("", !0),
          d("div", Cy, [
            d("div", Oy, [
              ue(Af, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  m[0] || (m[0] = (g) => o.value = g),
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
                r.value ? (x(), k("svg", Dy, m[3] || (m[3] = [
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
                ]))) : (x(), k("svg", Ty, m[2] || (m[2] = [
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
              e.item.original_price && e.item.price < e.item.original_price ? (x(), k("p", Iy, j(c(e.item.original_price * e.item.quantity)), 1)) : L("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (x(), k("p", My, " Save " + j(Math.round((e.item.original_price - e.item.price) / e.item.original_price * 100)) + "% ", 1)) : L("", !0)
            ])
          ]),
          a.value ? (x(), k("p", Py, " Only " + j(e.item.variant.inventory_quantity) + " left in stock ", 1)) : L("", !0),
          i.value ? (x(), k("p", Ry, j(i.value), 1)) : L("", !0)
        ])
      ])
    ], 8, uy));
  }
}, If = /* @__PURE__ */ Ye(Ly, [["__scopeId", "data-v-6f2d5a63"]]), Fy = {
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
    const t = q(!1), n = q([]), s = q(0), o = J(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/cart";
    }), r = J(() => {
      var h, V;
      return ((V = (h = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : h.settings) == null ? void 0 : V.free_shipping_threshold) || 50;
    }), i = J(() => {
      var g, h;
      return ((h = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : h.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var y, $, _, A;
      if (!g && g !== 0) return "$0.00";
      const h = ((y = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : y.money_format) || "${{amount}}";
      ($ = Shopline == null ? void 0 : Shopline.shop) != null && $.money_with_currency_format, (_ = Shopline == null ? void 0 : Shopline.shop) != null && _.currency;
      const V = ((A = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : A.current) || "en", E = new Intl.NumberFormat(V, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(g));
      return h.replace("{{amount}}", E);
    }, a = () => {
      t.value = !0, document.body.style.overflow = "hidden", f();
    }, c = () => {
      t.value = !1, document.body.style.overflow = "";
    }, f = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, u = async ({ key: g, quantity: h }) => {
      await window.OrionCart.updateItem(g, h), f();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), f();
    }, m = (g) => {
      g.key === "Escape" && t.value && c();
    };
    return He(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", c), document.addEventListener("keydown", m);
    }), Ct(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", c), document.removeEventListener("keydown", m);
    }), (g, h) => (x(), ct(bn, { to: "body" }, [
      ue(ot, { name: "drawer" }, {
        default: Pe(() => [
          t.value ? (x(), k("div", Fy, [
            d("div", By, [
              ue(ot, { name: "fade" }, {
                default: Pe(() => [
                  t.value ? (x(), k("div", {
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
                    t.value ? (x(), k("div", Hy, [
                      d("div", Uy, [
                        d("div", qy, [
                          d("div", null, [
                            h[0] || (h[0] = d("h2", { class: "text-lg font-medium text-gray-900" }, " Shopping Cart ", -1)),
                            n.value.length > 0 ? (x(), k("p", zy, j(n.value.length) + " " + j(n.value.length === 1 ? "item" : "items"), 1)) : L("", !0)
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
                          n.value.length === 0 ? (x(), k("div", Wy, [
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
                          ])) : (x(), k("div", Gy, [
                            (x(!0), k(re, null, ye(n.value, (V) => (x(), ct(If, {
                              key: V.key,
                              item: V,
                              onUpdate: u,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (x(), k("div", Yy, [
                          i.value ? (x(), k("div", {
                            key: 0,
                            class: _e([s.value >= r.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200", "p-3"]),
                            style: { borderRadius: "var(--button-radius)" }
                          }, [
                            s.value >= r.value ? (x(), k("div", Jy, h[6] || (h[6] = [
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
                            ]))) : (x(), k("div", Xy, [
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
                            s.value < r.value ? (x(), k("div", Zy, [
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
    const n = e, s = J(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = J(() => n.customerUrl || window.mobileMenuCustomerUrl || "/account"), r = J(() => n.showLocalization || window.mobileMenuShowLocalization || !1), i = q(!1), l = q([]), a = () => {
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
    }), (u, p) => (x(), k("div", null, [
      (x(), ct(bn, { to: "body" }, [
        ue(ot, { name: "menu" }, {
          default: Pe(() => [
            i.value ? (x(), k("div", s1, [
              d("div", o1, [
                ue(ot, { name: "fade" }, {
                  default: Pe(() => [
                    i.value ? (x(), k("div", {
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
                      i.value ? (x(), k("div", i1, [
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
                                s.value.length === 0 ? (x(), k("li", d1, p[4] || (p[4] = [
                                  d("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : L("", !0),
                                (x(!0), k(re, null, ye(s.value, (m) => (x(), k("li", {
                                  key: m.id || m.title
                                }, [
                                  m.links && m.links.length ? (x(), k("div", f1, [
                                    d("button", {
                                      onClick: (g) => f(
                                        m.title
                                      ),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      d("span", null, j(m.title), 1),
                                      (x(), k("svg", {
                                        class: _e(["h-5 w-5 transition-transform duration-200", {
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
                                        ) ? (x(), k("ul", h1, [
                                          (x(!0), k(re, null, ye(m.links, (g) => (x(), k("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (x(), k("div", m1, [
                                              d("button", {
                                                onClick: (h) => f(
                                                  `${m.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                d("span", null, j(g.title), 1),
                                                (x(), k("svg", {
                                                  class: _e(["h-4 w-4 transition-transform duration-200", {
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
                                              ], 8, g1),
                                              ue(ot, { name: "submenu" }, {
                                                default: Pe(() => [
                                                  l.value.includes(
                                                    `${m.title}-${g.title}`
                                                  ) ? (x(), k("ul", v1, [
                                                    (x(!0), k(re, null, ye(g.links, (h) => (x(), k("li", {
                                                      key: h.id || h.title
                                                    }, [
                                                      d("a", {
                                                        href: h.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: p[0] || (p[0] = (...V) => c && c(...V))
                                                      }, j(h.title), 9, y1)
                                                    ]))), 128))
                                                  ])) : L("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (x(), k("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: p[1] || (p[1] = (...h) => c && c(...h))
                                            }, j(g.title), 9, b1))
                                          ]))), 128))
                                        ])) : L("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (x(), k("a", {
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
                            r.value ? (x(), k("div", N1, [
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
  class: "flex flex-wrap gap-3"
}, D1 = ["title", "aria-label", "disabled", "onClick"], V1 = ["src", "alt"], A1 = {
  key: 1,
  class: "text-xs"
}, I1 = {
  key: 1,
  class: "flex flex-wrap gap-2"
}, M1 = ["title", "aria-label", "disabled", "onClick"], P1 = { class: "sr-only" }, R1 = {
  key: 0,
  class: "color-swatch__checkmark"
}, L1 = {
  key: 2,
  class: "flex flex-wrap gap-2"
}, F1 = ["aria-label", "disabled", "onClick"], B1 = {
  key: 0,
  class: "variant-info mt-6"
}, j1 = { class: "flex items-center justify-between mb-3" }, H1 = { class: "flex items-center gap-4" }, U1 = { class: "text-2xl font-bold text-gray-900" }, q1 = {
  key: 0,
  class: "text-lg text-gray-500 line-through"
}, z1 = {
  key: 0,
  class: "text-sm text-gray-600"
}, K1 = { class: "flex items-center justify-between" }, W1 = {
  key: 0,
  class: "text-sm text-gray-600"
}, G1 = {
  key: 1,
  class: "text-sm text-green-600 font-medium"
}, Y1 = {
  key: 2,
  class: "text-sm text-red-600 font-medium"
}, J1 = {
  __name: "ProductVariantPicker",
  props: {
    product: {
      type: Object,
      required: !0
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
  emits: ["variant-change", "media-change", "product-info-update"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = q({}), r = q(null), i = J(() => n.product.options || []), l = J(() => n.product.variants || []), a = J(() => n.product.options_with_values || []);
    He(() => {
      if (n.selectedVariantId) {
        const b = l.value.find((N) => N.id == n.selectedVariantId);
        b && c(b);
      } else if (l.value.length > 0) {
        const b = l.value.find((N) => N.available) || l.value[0];
        c(b);
      }
    });
    const c = (b) => {
      r.value = b, i.value.forEach((N, v) => {
        o.value[N.name] = b[`option${v + 1}`];
      }), n.updateUrl && b && f(b), b && b.featured_media && s("media-change", b.featured_media), s("variant-change", b);
    }, f = (b) => {
      const N = new URL(window.location);
      b && b.id ? N.searchParams.set("sku", b.id) : N.searchParams.delete("sku"), window.history.replaceState({}, document.title, N.toString());
    }, u = (b, N) => {
      o.value[b] = N;
      const v = l.value.find((S) => i.value.every((I, T) => {
        const M = o.value[I.name];
        return S[`option${T + 1}`] === M;
      }));
      v && (c(v), n.sectionId && p(v));
    }, p = async (b) => {
      if (!(!b || !b.id))
        try {
          const N = await fetch(
            `${window.location.pathname}?sku=${b.id}&section_id=${n.sectionId}`,
            {
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }
          );
          if (!N.ok) throw new Error("Failed to fetch product info");
          const v = await N.text(), I = new DOMParser().parseFromString(v, "text/html");
          s("product-info-update", {
            variant: b,
            html: I
          });
        } catch (N) {
          console.error("Error fetching product info:", N);
        }
    }, m = (b) => o.value[b] || "", g = (b, N) => o.value[b] === N, h = (b, N) => {
      const v = i.value.findIndex((S) => S.name === b);
      return l.value.some((S) => {
        const I = S[`option${v + 1}`] === N, T = i.value.every((M, z) => {
          if (M.name === b) return !0;
          const K = o.value[M.name];
          return K ? S[`option${z + 1}`] === K : !0;
        });
        return I && T && S.available;
      });
    }, V = (b) => b.toLowerCase().includes("color") || b.toLowerCase().includes("colour"), C = (b) => ({
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
    })[b.toLowerCase()] || "#E5E7EB", E = (b) => {
      var S, I, T, M;
      const N = ((I = (S = window.Shopline) == null ? void 0 : S.shop) == null ? void 0 : I.currency) || "USD", v = ((M = (T = window.Shopline) == null ? void 0 : T.locale) == null ? void 0 : M.current) || "en";
      return new Intl.NumberFormat(v, {
        style: "currency",
        currency: N
      }).format(b / 100);
    }, y = (b) => a.value.some(
      (N) => N.name === b.name && N.values_images && N.values_images.length > 0
    ), $ = (b) => {
      const N = a.value.find((v) => v.name === b.name);
      return !N || !N.values_images ? b.values.map((v) => ({ value: v, image: null })) : N.values_images;
    }, _ = (b, N = 100) => b ? typeof b == "string" ? b : b.src ? b.src : "" : "", A = () => {
      if (!r.value) return "";
      const b = r.value.inventory_quantity;
      return b == null ? "" : b <= 0 ? "Out of stock" : b <= 5 ? `Only ${b} left in stock` : b <= 20 ? `${b} in stock` : "In stock";
    };
    return (b, N) => (x(), k("div", C1, [
      (x(!0), k(re, null, ye(i.value, (v) => (x(), k("div", {
        key: v.name,
        class: "variant-option mb-6"
      }, [
        d("h3", O1, [
          je(j(v.name) + ": ", 1),
          d("span", $1, j(m(v.name)), 1)
        ]),
        y(v) ? (x(), k("div", T1, [
          (x(!0), k(re, null, ye($(v), (S, I) => (x(), k("button", {
            key: S.value,
            type: "button",
            class: _e([
              "variant-image-button",
              g(v.name, S.value) ? "variant-image-button--selected" : "",
              h(v.name, S.value) ? "" : "variant-image-button--unavailable"
            ]),
            title: S.value,
            "aria-label": `Select ${v.name} ${S.value}`,
            disabled: !h(v.name, S.value),
            onClick: (T) => u(v.name, S.value)
          }, [
            S.image ? (x(), k("img", {
              key: 0,
              src: _(S.image, 100),
              alt: S.value,
              class: "w-full h-full object-cover"
            }, null, 8, V1)) : (x(), k("span", A1, j(S.value), 1))
          ], 10, D1))), 128))
        ])) : V(v.name) ? (x(), k("div", I1, [
          (x(!0), k(re, null, ye(v.values, (S) => (x(), k("button", {
            key: S,
            type: "button",
            class: _e([
              "color-swatch",
              g(v.name, S) ? "color-swatch--selected" : "",
              h(v.name, S) ? "" : "color-swatch--unavailable"
            ]),
            style: Ge({ backgroundColor: C(S) }),
            title: S,
            "aria-label": `Select ${v.name} ${S}`,
            disabled: !h(v.name, S),
            onClick: (I) => u(v.name, S)
          }, [
            d("span", P1, j(S), 1),
            g(v.name, S) ? (x(), k("span", R1, N[0] || (N[0] = [
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
          ], 14, M1))), 128))
        ])) : (x(), k("div", L1, [
          (x(!0), k(re, null, ye(v.values, (S) => (x(), k("button", {
            key: S,
            type: "button",
            class: _e([
              "variant-button",
              g(v.name, S) ? "variant-button--selected" : "",
              h(v.name, S) ? "" : "variant-button--unavailable"
            ]),
            "aria-label": `Select ${v.name} ${S}`,
            disabled: !h(v.name, S),
            onClick: (I) => u(v.name, S)
          }, j(S), 11, F1))), 128))
        ]))
      ]))), 128)),
      r.value ? (x(), k("div", B1, [
        d("div", j1, [
          d("div", H1, [
            d("span", U1, j(E(r.value.price)), 1),
            r.value.compare_at_price > r.value.price ? (x(), k("span", q1, j(E(r.value.compare_at_price)), 1)) : L("", !0)
          ]),
          r.value.sku ? (x(), k("div", z1, " SKU: " + j(r.value.sku), 1)) : L("", !0)
        ]),
        d("div", K1, [
          r.value.inventory_quantity !== void 0 ? (x(), k("div", W1, j(A()), 1)) : L("", !0),
          r.value.available ? (x(), k("div", G1, " In Stock ")) : (x(), k("div", Y1, " Out of Stock "))
        ])
      ])) : L("", !0)
    ]));
  }
}, X1 = /* @__PURE__ */ Ye(J1, [["__scopeId", "data-v-1e9279c8"]]);
function Q1(e) {
  return cl() ? (jc(e), !0) : !1;
}
function na(e) {
  return typeof e == "function" ? e() : Co(e);
}
const Z1 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const eb = Object.prototype.toString, tb = (e) => eb.call(e) === "[object Object]", So = () => {
};
function nb(e, t) {
  function n(...s) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, s), { fn: t, thisArg: this, args: s })).then(o).catch(r);
    });
  }
  return n;
}
function sb(...e) {
  let t = 0, n, s = !0, o = So, r, i, l, a, c;
  !Ie(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: l = !0, leading: a = !0, rejectOnCancel: c = !1 } = e[0] : [i, l = !0, a = !0, c = !1] = e;
  const f = () => {
    n && (clearTimeout(n), n = void 0, o(), o = So);
  };
  return (p) => {
    const m = na(i), g = Date.now() - t, h = () => r = p();
    return f(), m <= 0 ? (t = Date.now(), h()) : (g > m && (a || !s) ? (t = Date.now(), h()) : l && (r = new Promise((V, C) => {
      o = c ? C : V, n = setTimeout(() => {
        t = Date.now(), s = !0, V(h()), f();
      }, Math.max(0, m - g));
    })), !a && !n && (n = setTimeout(() => s = !0, m)), s = !1, r);
  };
}
function ob(e, t = 200, n = !1, s = !0, o = !1) {
  return nb(
    sb(t, n, s, o),
    e
  );
}
function rb(e) {
  var t;
  const n = na(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Pf = Z1 ? window : void 0;
function Ei(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Pf) : [t, n, s, o] = e, !t)
    return So;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const r = [], i = () => {
    r.forEach((f) => f()), r.length = 0;
  }, l = (f, u, p, m) => (f.addEventListener(u, p, m), () => f.removeEventListener(u, p, m)), a = sn(
    () => [rb(t), na(o)],
    ([f, u]) => {
      if (i(), !f)
        return;
      const p = tb(u) ? { ...u } : u;
      r.push(
        ...n.flatMap((m) => s.map((g) => l(f, m, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), i();
  };
  return Q1(c), c;
}
function ib(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: r,
    passive: i = !0,
    window: l = Pf
  } = t, a = Ns({ x: 0, y: 0 }), c = Ns({ x: 0, y: 0 }), f = J(() => a.x - c.x), u = J(() => a.y - c.y), { max: p, abs: m } = Math, g = J(() => p(m(f.value), m(u.value)) >= n), h = q(!1), V = J(() => g.value ? m(f.value) > m(u.value) ? f.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), C = (v) => [v.touches[0].clientX, v.touches[0].clientY], E = (v, S) => {
    a.x = v, a.y = S;
  }, y = (v, S) => {
    c.x = v, c.y = S;
  };
  let $;
  const _ = lb(l == null ? void 0 : l.document);
  i ? $ = _ ? { passive: !0 } : { capture: !1 } : $ = _ ? { passive: !1, capture: !0 } : { capture: !0 };
  const A = (v) => {
    h.value && (o == null || o(v, V.value)), h.value = !1;
  }, b = [
    Ei(e, "touchstart", (v) => {
      if (v.touches.length !== 1)
        return;
      $.capture && !$.passive && v.preventDefault();
      const [S, I] = C(v);
      E(S, I), y(S, I), r == null || r(v);
    }, $),
    Ei(e, "touchmove", (v) => {
      if (v.touches.length !== 1)
        return;
      const [S, I] = C(v);
      y(S, I), !h.value && g.value && (h.value = !0), h.value && (s == null || s(v));
    }, $),
    Ei(e, ["touchend", "touchcancel"], A, $)
  ];
  return {
    isPassiveEventSupported: _,
    isSwiping: h,
    direction: V,
    coordsStart: a,
    coordsEnd: c,
    lengthX: f,
    lengthY: u,
    stop: () => b.forEach((v) => v())
  };
}
function lb(e) {
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
const ab = { class: "sticky-header-container" }, cb = {
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
    const t = e, n = q(null), s = q(!1), o = q(!1), r = q(!1), i = q(!1), l = q("#ffffff"), a = q(0), c = q(0), f = J(() => V.value ? `${c.value}px` : "0");
    let u = 0;
    const p = J(() => {
      const E = {};
      return V.value && s.value && (E.position = "fixed", E.top = "0", E.left = "0", E.right = "0", E.zIndex = "40", o.value ? E.transform = "translateY(-100%)" : E.transform = "translateY(0)"), i.value && (a.value === 0 ? E.backgroundColor = "transparent" : V.value && s.value && (E.backgroundColor = l.value)), E.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)", E;
    }), m = () => {
      var $, _, A;
      const E = (_ = ($ = n.value) == null ? void 0 : $.getRootNode()) == null ? void 0 : _.host;
      if (!E) return;
      E.classList.add("sticky-header-wrapper");
      const y = (A = n.value) == null ? void 0 : A.querySelector(".main-header");
      y && i.value && (a.value === 0 ? (y.style.backgroundColor = "transparent", y.style.borderBottomColor = "transparent") : V.value && s.value && (y.style.backgroundColor = l.value, y.style.borderBottomColor = "#e5e7eb"));
    }, g = ob(() => {
      if (!V.value)
        return;
      const E = window.pageYOffset || document.documentElement.scrollTop;
      if (a.value = E, s.value = E > 0, r.value = E > 10, h.value && s.value) {
        const y = E - u;
        Math.abs(y) > 5 && (y > 0 && E > c.value ? o.value = !0 : y < 0 && (o.value = !1));
      } else
        o.value = !1;
      Math.abs(E - u) > 1 && (u = E), m();
    }, 50), h = q(t.hideOnScrollDown), V = q(t.sticky), C = () => {
      n.value && (c.value = n.value.offsetHeight || 80);
    };
    return He(() => {
      if (n.value) {
        const E = n.value.getRootNode().host;
        if (E) {
          E.classList.add("sticky-header-wrapper"), i.value = E.classList.contains("header-transparent");
          const y = E.getAttribute("data-hide-on-scroll-down"), $ = E.getAttribute("data-sticky"), _ = E.getAttribute("data-sticky-bg");
          y !== null && (h.value = y === "true"), $ !== null && (V.value = $ === "true"), _ !== null && (l.value = _ || "#ffffff"), setTimeout(C, 100), window.addEventListener("resize", C);
        }
      }
      window.addEventListener("scroll", g, { passive: !0 }), a.value = window.pageYOffset || document.documentElement.scrollTop || 0, m(), g();
    }), Ct(() => {
      window.removeEventListener("scroll", g), window.removeEventListener("resize", C);
    }), (E, y) => (x(), k("div", ab, [
      V.value && s.value ? (x(), k("div", {
        key: 0,
        class: "header-placeholder",
        style: Ge({ height: f.value })
      }, null, 4)) : L("", !0),
      d("div", {
        ref_key: "headerWrapper",
        ref: n,
        class: _e(["sticky-header-inner", {
          "is-fixed": V.value && s.value,
          "is-hidden": o.value,
          "has-shadow": r.value,
          "is-transparent": i.value && a.value === 0
        }]),
        style: Ge(p.value)
      }, [
        jn(E.$slots, "default")
      ], 6)
    ]));
  }
}, ub = {
  class: "main-header-content",
  style: { position: "absolute", inset: "0", background: "white" }
}, db = { class: "main-header__wrapper" }, fb = {
  href: "/",
  class: "main-header__logo"
}, pb = ["src", "alt"], hb = {
  key: 1,
  class: "text-xl font-bold"
}, mb = { class: "main-header__nav hidden lg:flex" }, gb = ["href"], vb = { class: "main-header__actions" }, yb = ["href"], bb = {
  key: 0,
  class: "cart-count"
}, _b = { class: "search-overlay__container" }, Eb = {
  action: "/search",
  method: "get",
  class: "search-form"
}, wb = {
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
    const t = e, n = q(null), s = q(!1), o = q(0), r = J(() => {
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
    }), (f, u) => (x(), k("div", ub, [
      d("div", db, [
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
        d("a", fb, [
          e.logoUrl ? (x(), k("img", {
            key: 0,
            src: e.logoUrl,
            alt: e.shopName,
            class: "h-8 md:h-10"
          }, null, 8, pb)) : (x(), k("span", hb, j(e.shopName), 1))
        ]),
        d("nav", mb, [
          (x(!0), k(re, null, ye(e.navigationLinks, (p) => (x(), k("a", {
            key: p.url,
            href: p.url,
            class: "nav-link"
          }, j(p.title), 9, gb))), 128))
        ]),
        d("div", vb, [
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
          ]), 8, yb),
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
            o.value > 0 ? (x(), k("span", bb, j(o.value), 1)) : L("", !0)
          ])
        ])
      ]),
      (x(), ct(bn, { to: "body" }, [
        ue(ot, { name: "fade" }, {
          default: Pe(() => [
            s.value ? (x(), k("div", {
              key: 0,
              class: "search-overlay",
              onClick: zt(a, ["self"])
            }, [
              d("div", _b, [
                d("form", Eb, [
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
}, Rf = /* @__PURE__ */ Ye(wb, [["__scopeId", "data-v-2dc4d29f"]]), xb = { class: "site-footer" }, Nb = {
  key: 0,
  class: "newsletter-section"
}, Sb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, kb = { class: "newsletter-content" }, Cb = { class: "newsletter-text" }, Ob = { class: "text-xl font-semibold mb-2" }, $b = { class: "text-gray-600" }, Tb = ["disabled"], Db = ["disabled"], Vb = { key: 0 }, Ab = { key: 1 }, Ib = { class: "footer-main" }, Mb = { class: "container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, Pb = { class: "footer-grid" }, Rb = { class: "footer-column" }, Lb = { class: "footer-heading" }, Fb = { class: "text-gray-600 mb-4" }, Bb = {
  key: 0,
  class: "social-links"
}, jb = ["href", "aria-label"], Hb = { class: "footer-heading" }, Ub = { class: "footer-links" }, qb = ["href"], zb = {
  key: 0,
  class: "footer-column"
}, Kb = { class: "contact-info" }, Wb = {
  key: 0,
  class: "contact-item"
}, Gb = {
  key: 1,
  class: "contact-item"
}, Yb = {
  key: 2,
  class: "contact-item"
}, Jb = {
  key: 0,
  class: "payment-methods"
}, Xb = { class: "payment-icons" }, Qb = ["src", "alt"], Zb = { class: "footer-bottom" }, e_ = { class: "copyright" }, t_ = {
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
    const t = q(""), n = q(!1), s = J(() => (/* @__PURE__ */ new Date()).getFullYear()), o = async () => {
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
    return (i, l) => (x(), k("footer", xb, [
      e.showNewsletter ? (x(), k("div", Nb, [
        d("div", Sb, [
          d("div", kb, [
            d("div", Cb, [
              d("h3", Ob, j(e.newsletterTitle), 1),
              d("p", $b, j(e.newsletterDescription), 1)
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
              }, null, 8, Tb), [
                [Fn, t.value]
              ]),
              d("button", {
                type: "submit",
                class: "newsletter-button",
                disabled: n.value
              }, [
                n.value ? (x(), k("span", Ab, "Subscribing...")) : (x(), k("span", Vb, "Subscribe"))
              ], 8, Db)
            ], 32)
          ])
        ])
      ])) : L("", !0),
      d("div", Ib, [
        d("div", Mb, [
          d("div", Pb, [
            d("div", Rb, [
              d("h4", Lb, j(e.companyName), 1),
              d("p", Fb, j(e.companyDescription), 1),
              e.socialLinks.length > 0 ? (x(), k("div", Bb, [
                (x(!0), k(re, null, ye(e.socialLinks, (a) => (x(), k("a", {
                  key: a.name,
                  href: a.url,
                  "aria-label": a.name,
                  class: "social-link",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (x(), ct(Nl(r(a.name))))
                ], 8, jb))), 128))
              ])) : L("", !0)
            ]),
            (x(!0), k(re, null, ye(e.footerColumns, (a) => (x(), k("div", {
              key: a.title,
              class: "footer-column"
            }, [
              d("h4", Hb, j(a.title), 1),
              d("ul", Ub, [
                (x(!0), k(re, null, ye(a.links, (c) => (x(), k("li", {
                  key: c.title
                }, [
                  d("a", {
                    href: c.url,
                    class: "footer-link"
                  }, j(c.title), 9, qb)
                ]))), 128))
              ])
            ]))), 128)),
            e.showContact ? (x(), k("div", zb, [
              l[4] || (l[4] = d("h4", { class: "footer-heading" }, "Contact", -1)),
              d("div", Kb, [
                e.contactEmail ? (x(), k("p", Wb, [
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
                e.contactPhone ? (x(), k("p", Gb, [
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
                e.contactAddress ? (x(), k("p", Yb, [
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
          e.paymentMethods.length > 0 ? (x(), k("div", Jb, [
            l[5] || (l[5] = d("h4", { class: "text-sm font-medium text-gray-700 mb-3" }, "Accepted Payment Methods", -1)),
            d("div", Xb, [
              (x(!0), k(re, null, ye(e.paymentMethods, (a) => (x(), k("img", {
                key: a,
                src: `/assets/payment/${a}.svg`,
                alt: a,
                class: "payment-icon"
              }, null, 8, Qb))), 128))
            ])
          ])) : L("", !0),
          d("div", Zb, [
            d("p", e_, " © " + j(s.value) + " " + j(e.companyName) + ". All rights reserved. ", 1),
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
}, n_ = /* @__PURE__ */ Ye(t_, [["__scopeId", "data-v-1c1567f0"]]), s_ = ["href"], o_ = ["src", "alt"], r_ = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, i_ = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, l_ = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, a_ = { class: "p-4" }, c_ = {
  key: 0,
  class: "mb-3"
}, u_ = { class: "flex gap-1.5 flex-wrap" }, d_ = ["onClick", "title"], f_ = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, p_ = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, h_ = { class: "text-base font-medium text-gray-900 line-clamp-2 mb-2" }, m_ = ["href"], g_ = { class: "flex items-center gap-1 mb-2" }, v_ = { class: "flex" }, y_ = { class: "flex items-baseline gap-2 mb-4" }, b_ = { class: "text-xl font-bold text-gray-900" }, __ = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, E_ = ["disabled"], w_ = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, x_ = { key: 1 }, N_ = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, S_ = {
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
    const n = e, s = t, o = q(""), r = q(!1), i = q(!1), l = q(!1), a = q(!1), c = J(() => n.product ? n.product : {
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
    }), f = J(() => {
      const I = c.value.handle;
      return c.value.url || (I ? `/products/${I}` : "#");
    }), u = J(() => {
      var I, T, M;
      return r.value && ((I = c.value.images) != null && I[1]) ? c.value.images[1].src : ((M = (T = c.value.images) == null ? void 0 : T[0]) == null ? void 0 : M.src) || c.value.featured_image || c.value.image || "/placeholder.jpg";
    }), p = J(() => {
      var I;
      return (I = c.value.options) == null ? void 0 : I.some(
        (T) => {
          var M, z;
          return ((M = T.name) == null ? void 0 : M.toLowerCase().includes("color")) || ((z = T.name) == null ? void 0 : z.toLowerCase().includes("colour"));
        }
      );
    }), m = J(() => {
      var T;
      const I = (T = c.value.options) == null ? void 0 : T.find(
        (M) => {
          var z, K;
          return ((z = M.name) == null ? void 0 : z.toLowerCase().includes("color")) || ((K = M.name) == null ? void 0 : K.toLowerCase().includes("colour"));
        }
      );
      return (I == null ? void 0 : I.values) || [];
    }), g = J(() => c.value.price || 0), h = J(() => c.value.compare_at_price || 0), V = J(() => c.value.available && h.value > g.value), C = J(() => V.value ? Math.round((h.value - g.value) / h.value * 100) : 0), E = J(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: a.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), y = J(() => {
      var I, T, M;
      return ((M = (T = (I = window.Shopline) == null ? void 0 : I.theme) == null ? void 0 : T.settings) == null ? void 0 : M.show_product_card_wishlist) !== !1;
    }), $ = (I) => `$${(I / 100).toFixed(2)}`, _ = (I) => {
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
      }, M = I.toLowerCase();
      return T[M] || `#${M.replace("#", "")}`;
    }, A = () => {
      var I;
      ((I = c.value.images) == null ? void 0 : I.length) > 1 && (r.value = !0);
    }, b = () => {
      r.value = !1;
    }, N = (I) => {
      o.value = I.value;
    }, v = () => {
      l.value = !l.value;
    }, S = async () => {
      var I, T, M, z;
      i.value = !0;
      try {
        const K = (T = (I = c.value.variants) == null ? void 0 : I[0]) == null ? void 0 : T.id;
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
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((z = (M = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : M.settings) == null ? void 0 : z.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", s("add-to-cart", { variantId: K, quantity: 1 });
      } catch (K) {
        console.error("Error adding to cart:", K);
      } finally {
        i.value = !1;
      }
    };
    return (I, T) => (x(), k("div", {
      class: "product-card group relative bg-white transition-all duration-300 overflow-hidden",
      style: Ge(E.value),
      onMouseenter: T[2] || (T[2] = (M) => a.value = !0),
      onMouseleave: T[3] || (T[3] = (M) => a.value = !1)
    }, [
      d("a", {
        href: f.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        u.value ? (x(), k("img", {
          key: 0,
          src: u.value,
          alt: c.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: A,
          onMouseleave: b
        }, null, 40, o_)) : (x(), k("div", r_, T[4] || (T[4] = [
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
        V.value ? (x(), k("div", i_, " -" + j(C.value) + "% ", 1)) : L("", !0),
        c.value.available && y.value ? (x(), k("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: zt(v, ["prevent"])
        }, [
          (x(), k("svg", {
            class: _e(["w-5 h-5", l.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, T[5] || (T[5] = [
            d("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : L("", !0),
        c.value.available ? L("", !0) : (x(), k("div", l_, T[6] || (T[6] = [
          d("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, s_),
      d("div", a_, [
        p.value ? (x(), k("div", c_, [
          d("div", u_, [
            (x(!0), k(re, null, ye(m.value, (M) => (x(), k("button", {
              key: M.value,
              onClick: (z) => N(M),
              title: M.value,
              class: _e([
                "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                o.value === M.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
              ]),
              style: Ge({ backgroundColor: _(M.value) })
            }, [
              o.value === M.value ? (x(), k("span", f_, T[7] || (T[7] = [
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
            ], 14, d_))), 128))
          ])
        ])) : L("", !0),
        c.value.vendor ? (x(), k("p", p_, j(c.value.vendor), 1)) : L("", !0),
        d("h3", h_, [
          d("a", {
            href: f.value,
            class: "hover:text-gray-700 transition-colors"
          }, j(c.value.title || "Untitled"), 9, m_)
        ]),
        d("div", g_, [
          d("div", v_, [
            (x(), k(re, null, ye(5, (M) => d("svg", {
              key: M,
              class: _e(["w-4 h-4", M <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"]),
              viewBox: "0 0 20 20"
            }, T[8] || (T[8] = [
              d("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
            ]), 2)), 64))
          ]),
          T[9] || (T[9] = d("span", { class: "text-xs text-gray-500" }, "(24)", -1))
        ]),
        d("div", y_, [
          d("span", b_, j($(g.value)), 1),
          h.value > g.value ? (x(), k("span", __, j($(h.value)), 1)) : L("", !0)
        ]),
        c.value.available ? (x(), k("button", {
          key: 2,
          onClick: S,
          disabled: i.value,
          class: "w-full px-4 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
          style: {
            backgroundColor: "var(--button-primary-bg)",
            color: "var(--button-primary-text)",
            borderRadius: "var(--button-radius)"
          },
          onMouseenter: T[0] || (T[0] = (M) => M.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
          onMouseleave: T[1] || (T[1] = (M) => M.target.style.backgroundColor = "var(--button-primary-bg)")
        }, [
          i.value ? L("", !0) : (x(), k("svg", w_, T[10] || (T[10] = [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }, null, -1)
          ]))),
          i.value ? (x(), k("svg", N_, T[11] || (T[11] = [
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
          ]))) : (x(), k("span", x_, "Add to Cart"))
        ], 40, E_)) : L("", !0)
      ])
    ], 36));
  }
}, k_ = { class: "collection-filters" }, C_ = { class: "lg:hidden mb-4" }, O_ = { class: "space-y-6" }, $_ = {
  key: 0,
  class: "filter-group"
}, T_ = { class: "filter-group" }, D_ = { class: "flex items-center" }, V_ = { class: "filter-group" }, A_ = { class: "space-y-2" }, I_ = { class: "flex items-center" }, M_ = { class: "flex items-center" }, P_ = { class: "flex items-center" }, R_ = { class: "flex items-center" }, L_ = {
  key: 1,
  class: "filter-group"
}, F_ = { class: "space-y-2" }, B_ = ["value"], j_ = { class: "ml-2 text-sm" }, H_ = {
  key: 2,
  class: "filter-group"
}, U_ = { class: "space-y-2" }, q_ = ["value"], z_ = { class: "ml-2 text-sm" }, K_ = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, W_ = { class: "h-full flex flex-col" }, G_ = { class: "flex items-center justify-between p-4 border-b" }, Y_ = { class: "flex-1 overflow-y-auto p-4" }, J_ = { class: "space-y-6" }, X_ = {
  key: 0,
  class: "filter-group"
}, Q_ = { class: "filter-group" }, Z_ = { class: "flex items-center" }, e2 = { class: "filter-group" }, t2 = { class: "space-y-2" }, n2 = { class: "flex items-center" }, s2 = { class: "flex items-center" }, o2 = { class: "flex items-center" }, r2 = { class: "flex items-center" }, i2 = {
  key: 1,
  class: "filter-group"
}, l2 = { class: "space-y-2" }, a2 = ["value"], c2 = { class: "ml-2 text-sm" }, u2 = {
  key: 2,
  class: "filter-group"
}, d2 = { class: "space-y-2" }, f2 = ["value"], p2 = { class: "ml-2 text-sm" }, h2 = {
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
      const b = A.getAll("filter.p.product_type");
      b.length > 0 && (i.value = b);
      const N = A.getAll("filter.p.vendor");
      N.length > 0 && (l.value = N);
      const v = A.getAll("filter.price.range");
      v.length > 0 && (r.value = v);
    }, u = () => {
      f();
    }, p = J(() => {
      var b, N;
      const A = ((N = (b = window.Shopline) == null ? void 0 : b.theme) == null ? void 0 : N.settings) || {};
      return {
        "--card-radius": A.card_border_radius ? `${A.card_border_radius}px` : "8px"
      };
    }), m = J(() => {
      const A = /* @__PURE__ */ new Set();
      return n.products.forEach((b) => {
        b.product_type && A.add(b.product_type);
      }), Array.from(A).sort();
    }), g = J(() => {
      const A = /* @__PURE__ */ new Set();
      return n.products.forEach((b) => {
        b.vendor && A.add(b.vendor);
      }), Array.from(A).sort();
    }), h = J(() => r.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), V = () => {
      const A = new URL(window.location.href);
      o.value === "manual" ? A.searchParams.delete("sort_by") : A.searchParams.set("sort_by", o.value), window.location.href = A.toString();
    }, C = () => {
      c.value || E(), _();
    }, E = () => {
      const A = new URLSearchParams(window.location.search), b = [];
      for (const [v] of A)
        v.startsWith("filter.") && b.push(v);
      b.forEach((v) => {
        for (; A.has(v); )
          A.delete(v);
      }), a.value && A.set("filter.v.availability", "1"), r.value.length > 0 && r.value.forEach((v) => {
        A.append("filter.price.range", v);
      }), i.value.length > 0 && i.value.forEach((v) => {
        A.append("filter.p.product_type", v);
      }), l.value.length > 0 && l.value.forEach((v) => {
        A.append("filter.p.vendor", v);
      });
      const N = `${window.location.pathname}${A.toString() ? "?" + A.toString() : ""}`;
      window.location.href = N;
    }, y = () => {
      r.value = [], i.value = [], l.value = [], a.value = !1;
      const A = new URLSearchParams(window.location.search), b = [];
      for (const [S] of A)
        S.startsWith("filter.") && b.push(S);
      b.forEach((S) => A.delete(S));
      const N = A.get("sort_by"), v = `${window.location.pathname}${N ? "?sort_by=" + N : ""}`;
      window.location.href = v;
    }, $ = () => {
      c.value = !1, E();
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
    }), (A, b) => (x(), k("div", k_, [
      d("div", C_, [
        d("button", {
          onClick: b[0] || (b[0] = (N) => c.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 hover:bg-secondary-50 transition-colors",
          style: { borderRadius: "var(--card-radius, 8px)" }
        }, b[20] || (b[20] = [
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
        d("div", O_, [
          e.showSort ? (x(), k("div", $_, [
            b[22] || (b[22] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
            $e(d("select", {
              "onUpdate:modelValue": b[1] || (b[1] = (N) => o.value = N),
              onChange: V,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, b[21] || (b[21] = [
              ls('<option value="manual" data-v-308e1139>Featured</option><option value="best-selling" data-v-308e1139>Best Selling</option><option value="title-ascending" data-v-308e1139>Alphabetically, A-Z</option><option value="title-descending" data-v-308e1139>Alphabetically, Z-A</option><option value="price-ascending" data-v-308e1139>Price, low to high</option><option value="price-descending" data-v-308e1139>Price, high to low</option><option value="created-ascending" data-v-308e1139>Date, old to new</option><option value="created-descending" data-v-308e1139>Date, new to old</option>', 8)
            ]), 544), [
              [Ds, o.value]
            ])
          ])) : L("", !0),
          d("div", T_, [
            b[24] || (b[24] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
            d("label", D_, [
              $e(d("input", {
                type: "checkbox",
                "onUpdate:modelValue": b[2] || (b[2] = (N) => a.value = N),
                onChange: C,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Le, a.value]
              ]),
              b[23] || (b[23] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          d("div", V_, [
            b[29] || (b[29] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
            d("div", A_, [
              d("label", I_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": b[3] || (b[3] = (N) => r.value = N),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                b[25] || (b[25] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              d("label", M_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": b[4] || (b[4] = (N) => r.value = N),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                b[26] || (b[26] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              d("label", P_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": b[5] || (b[5] = (N) => r.value = N),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                b[27] || (b[27] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              d("label", R_, [
                $e(d("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": b[6] || (b[6] = (N) => r.value = N),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Le, r.value]
                ]),
                b[28] || (b[28] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          m.value.length > 0 ? (x(), k("div", L_, [
            b[30] || (b[30] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
            d("div", F_, [
              (x(!0), k(re, null, ye(m.value, (N) => (x(), k("label", {
                key: N,
                class: "flex items-center"
              }, [
                $e(d("input", {
                  type: "checkbox",
                  value: N,
                  "onUpdate:modelValue": b[7] || (b[7] = (v) => i.value = v),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, B_), [
                  [Le, i.value]
                ]),
                d("span", j_, j(N), 1)
              ]))), 128))
            ])
          ])) : L("", !0),
          g.value.length > 0 ? (x(), k("div", H_, [
            b[31] || (b[31] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
            d("div", U_, [
              (x(!0), k(re, null, ye(g.value, (N) => (x(), k("label", {
                key: N,
                class: "flex items-center"
              }, [
                $e(d("input", {
                  type: "checkbox",
                  value: N,
                  "onUpdate:modelValue": b[8] || (b[8] = (v) => l.value = v),
                  onChange: C,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, q_), [
                  [Le, l.value]
                ]),
                d("span", z_, j(N), 1)
              ]))), 128))
            ])
          ])) : L("", !0),
          h.value ? (x(), k("button", {
            key: 3,
            onClick: y,
            class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
          }, " Clear all filters ")) : L("", !0)
        ])
      ], 4),
      (x(), ct(bn, { to: "body" }, [
        c.value ? (x(), k("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: b[19] || (b[19] = zt((N) => c.value = !1, ["self"]))
        }, [
          d("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: b[9] || (b[9] = (N) => c.value = !1)
          }),
          d("div", K_, [
            d("div", W_, [
              d("div", G_, [
                b[33] || (b[33] = d("h2", { class: "text-lg font-semibold" }, "Filters", -1)),
                d("button", {
                  onClick: b[10] || (b[10] = (N) => c.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, b[32] || (b[32] = [
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
              d("div", Y_, [
                d("div", J_, [
                  e.showSort ? (x(), k("div", X_, [
                    b[35] || (b[35] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Sort By", -1)),
                    $e(d("select", {
                      "onUpdate:modelValue": b[11] || (b[11] = (N) => o.value = N),
                      onChange: V,
                      class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    }, b[34] || (b[34] = [
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
                  d("div", Q_, [
                    b[37] || (b[37] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Availability", -1)),
                    d("label", Z_, [
                      $e(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": b[12] || (b[12] = (N) => a.value = N),
                        onChange: C,
                        class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      }, null, 544), [
                        [Le, a.value]
                      ]),
                      b[36] || (b[36] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  d("div", e2, [
                    b[42] || (b[42] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Price", -1)),
                    d("div", t2, [
                      d("label", n2, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": b[13] || (b[13] = (N) => r.value = N),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        b[38] || (b[38] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      d("label", s2, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": b[14] || (b[14] = (N) => r.value = N),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        b[39] || (b[39] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      d("label", o2, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": b[15] || (b[15] = (N) => r.value = N),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        b[40] || (b[40] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      d("label", r2, [
                        $e(d("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": b[16] || (b[16] = (N) => r.value = N),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Le, r.value]
                        ]),
                        b[41] || (b[41] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  m.value.length > 0 ? (x(), k("div", i2, [
                    b[43] || (b[43] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Product Type", -1)),
                    d("div", l2, [
                      (x(!0), k(re, null, ye(m.value, (N) => (x(), k("label", {
                        key: N,
                        class: "flex items-center"
                      }, [
                        $e(d("input", {
                          type: "checkbox",
                          value: N,
                          "onUpdate:modelValue": b[17] || (b[17] = (v) => i.value = v),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, a2), [
                          [Le, i.value]
                        ]),
                        d("span", c2, j(N), 1)
                      ]))), 128))
                    ])
                  ])) : L("", !0),
                  g.value.length > 0 ? (x(), k("div", u2, [
                    b[44] || (b[44] = d("h3", { class: "font-medium text-secondary-900 mb-3" }, "Brand", -1)),
                    d("div", d2, [
                      (x(!0), k(re, null, ye(g.value, (N) => (x(), k("label", {
                        key: N,
                        class: "flex items-center"
                      }, [
                        $e(d("input", {
                          type: "checkbox",
                          value: N,
                          "onUpdate:modelValue": b[18] || (b[18] = (v) => l.value = v),
                          onChange: C,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, f2), [
                          [Le, l.value]
                        ]),
                        d("span", p2, j(N), 1)
                      ]))), 128))
                    ])
                  ])) : L("", !0),
                  h.value ? (x(), k("button", {
                    key: 3,
                    onClick: y,
                    class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
                  }, " Clear all filters ")) : L("", !0)
                ])
              ]),
              d("div", { class: "p-4 border-t" }, [
                d("button", {
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
}, Lf = /* @__PURE__ */ Ye(h2, [["__scopeId", "data-v-308e1139"]]), m2 = { class: "collection-grid" }, g2 = {
  key: 0,
  class: "mb-8"
}, v2 = { class: "text-3xl font-bold text-secondary-900 mb-4" }, y2 = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, b2 = { class: "mt-4 flex items-center justify-between" }, _2 = { class: "text-sm text-secondary-600" }, E2 = {
  key: 0,
  class: "lg:hidden"
}, w2 = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, x2 = {
  key: 0,
  class: "lg:col-span-1"
}, N2 = ["products"], S2 = {
  key: 1,
  class: "text-center py-12"
}, k2 = ["product"], C2 = {
  key: 3,
  class: "mt-8"
}, O2 = {
  key: 0,
  class: "inline-flex items-center"
}, $2 = {
  key: 1,
  class: "text-center"
}, T2 = ["disabled"], D2 = { key: 0 }, V2 = { key: 1 }, A2 = {
  key: 2,
  class: "flex items-center justify-between"
}, I2 = { class: "flex-1 flex justify-between sm:hidden" }, M2 = ["disabled"], P2 = ["disabled"], R2 = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, L2 = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, F2 = ["disabled"], B2 = ["onClick"], j2 = ["disabled"], H2 = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, U2 = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, q2 = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, z2 = { class: "text-lg font-medium text-secondary-900" }, K2 = {
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
    const t = e, n = q(!1), s = q(!1), o = q(t.currentPage), r = q(t.products.length), i = q("manual"), l = q({}), a = q(null), c = q(null), f = J(() => {
      const v = Number(t.columnsMobile), S = t.columnsDesktop, I = v === 1 ? "grid-cols-1" : "grid-cols-2", T = S <= 3 ? `md:grid-cols-${S}` : "md:grid-cols-3", M = `lg:grid-cols-${S}`;
      return `grid ${I} ${T} ${M} gap-4 lg:gap-6`;
    }), u = J(() => {
      var I, T, M;
      let v = [...t.products];
      switch (l.value.inStockOnly && (v = v.filter((z) => z.available)), ((I = l.value.priceRanges) == null ? void 0 : I.length) > 0 && (v = v.filter((z) => {
        const K = z.price / 100;
        return l.value.priceRanges.some((ee) => ee === "0-50" ? K < 50 : ee === "50-100" ? K >= 50 && K < 100 : ee === "100-200" ? K >= 100 && K < 200 : ee === "200+" ? K >= 200 : !1);
      })), ((T = l.value.types) == null ? void 0 : T.length) > 0 && (v = v.filter((z) => l.value.types.includes(z.product_type))), ((M = l.value.vendors) == null ? void 0 : M.length) > 0 && (v = v.filter((z) => l.value.vendors.includes(z.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          v.sort((z, K) => z.price - K.price);
          break;
        case "price-descending":
          v.sort((z, K) => K.price - z.price);
          break;
        case "title-ascending":
          v.sort((z, K) => z.title.localeCompare(K.title));
          break;
        case "title-descending":
          v.sort((z, K) => K.title.localeCompare(z.title));
          break;
        case "created-ascending":
          v.sort((z, K) => new Date(z.created_at) - new Date(K.created_at));
          break;
        case "created-descending":
          v.sort((z, K) => new Date(K.created_at) - new Date(z.created_at));
          break;
      }
      return v;
    }), p = J(() => {
      if (t.enableInfiniteScroll)
        return u.value.slice(0, r.value);
      const v = (o.value - 1) * t.productsPerPage, S = v + t.productsPerPage;
      return u.value.slice(v, S);
    }), m = J(() => t.totalPages || Math.ceil(u.value.length / t.productsPerPage)), g = J(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : r.value < u.value.length), h = J(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, u.value.length - r.value)), V = J(() => {
      const v = [], S = m.value, I = o.value;
      if (S <= 7)
        for (let T = 1; T <= S; T++)
          v.push(T);
      else if (I <= 3) {
        for (let T = 1; T <= 5; T++)
          v.push(T);
        v.push("..."), v.push(S);
      } else if (I >= S - 2) {
        v.push(1), v.push("...");
        for (let T = S - 4; T <= S; T++)
          v.push(T);
      } else {
        v.push(1), v.push("...");
        for (let T = I - 1; T <= I + 1; T++)
          v.push(T);
        v.push("..."), v.push(S);
      }
      return v.filter((T) => T === "..." || T >= 1 && T <= S);
    }), C = (v) => {
      l.value = v, o.value = 1, r.value = t.productsPerPage;
    }, E = () => {
      o.value = 1, r.value = t.productsPerPage;
    }, y = () => {
      s.value = !0, setTimeout(() => {
        r.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, $ = async (v) => {
      var I;
      const S = new FormData();
      S.append("id", v.variants[0].id), S.append("quantity", "1"), await ((I = window.OrionCart) == null ? void 0 : I.addItem(S)), console.log("Added to cart:", v.title);
    }, _ = (v) => {
      a.value = v;
    }, A = () => {
      a.value = null;
    };
    let b = null;
    const N = () => {
      !t.enableInfiniteScroll || !c.value || (b = new IntersectionObserver(
        (v) => {
          v[0].isIntersecting && g.value && !s.value && y();
        },
        { threshold: 0.1 }
      ), b.observe(c.value));
    };
    return He(() => {
      N();
    }), Ct(() => {
      b && b.disconnect();
    }), sn(() => t.enableInfiniteScroll, () => {
      N();
    }), (v, S) => (x(), k("div", m2, [
      e.showHeader ? (x(), k("div", g2, [
        d("h1", v2, j(e.collectionTitle), 1),
        e.collectionDescription ? (x(), k("div", y2, j(e.collectionDescription), 1)) : L("", !0),
        d("div", b2, [
          d("p", _2, j(e.totalProducts || u.value.length) + " products ", 1),
          e.enableSorting ? (x(), k("div", E2, [
            $e(d("select", {
              "onUpdate:modelValue": S[0] || (S[0] = (I) => i.value = I),
              onChange: E,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, S[5] || (S[5] = [
              ls('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Ds, i.value]
            ])
          ])) : L("", !0)
        ])
      ])) : L("", !0),
      d("div", w2, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (x(), k("aside", x2, [
          d("collection-filters", {
            products: e.products,
            onUpdateFilters: C
          }, null, 40, N2)
        ])) : L("", !0),
        d("div", {
          class: _e(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (x(), k("div", {
            key: 0,
            class: _e(f.value)
          }, [
            (x(), k(re, null, ye(6, (I) => d("div", {
              key: I,
              class: "animate-pulse"
            }, S[6] || (S[6] = [
              d("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              d("div", { class: "mt-4 space-y-2" }, [
                d("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                d("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : u.value.length === 0 ? (x(), k("div", S2, S[7] || (S[7] = [
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
          ]))) : (x(), k("div", {
            key: 2,
            class: _e(f.value)
          }, [
            (x(!0), k(re, null, ye(p.value, (I) => (x(), k("product-card", {
              key: I.id,
              product: I,
              onQuickAdd: $,
              onQuickView: _
            }, null, 40, k2))), 128))
          ], 2)),
          !n.value && u.value.length > 0 ? (x(), k("div", C2, [
            e.enableInfiniteScroll ? (x(), k("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: c,
              class: "text-center py-4"
            }, [
              s.value ? (x(), k("div", O2, S[8] || (S[8] = [
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
            ], 512)) : g.value ? (x(), k("div", $2, [
              d("button", {
                onClick: y,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (x(), k("span", D2, "Loading...")) : (x(), k("span", V2, "Load More (" + j(h.value) + " remaining)", 1))
              ], 8, T2)
            ])) : L("", !0),
            !e.enableInfiniteScroll && m.value > 1 ? (x(), k("nav", A2, [
              d("div", I2, [
                d("button", {
                  onClick: S[1] || (S[1] = (I) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, M2),
                d("button", {
                  onClick: S[2] || (S[2] = (I) => o.value++),
                  disabled: o.value === m.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, P2)
              ]),
              d("div", R2, [
                d("div", null, [
                  d("nav", L2, [
                    d("button", {
                      onClick: S[3] || (S[3] = (I) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, S[9] || (S[9] = [
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
                    ]), 8, F2),
                    (x(!0), k(re, null, ye(V.value, (I) => (x(), k("button", {
                      key: I,
                      onClick: (T) => o.value = I,
                      class: _e([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === I ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, j(I), 11, B2))), 128)),
                    d("button", {
                      onClick: S[4] || (S[4] = (I) => o.value++),
                      disabled: o.value === m.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, S[10] || (S[10] = [
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
                    ]), 8, j2)
                  ])
                ])
              ])
            ])) : L("", !0)
          ])) : L("", !0)
        ], 2)
      ]),
      (x(), ct(bn, { to: "body" }, [
        a.value ? (x(), k("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: zt(A, ["self"])
        }, [
          d("div", H2, [
            d("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: A
            }),
            d("div", U2, [
              d("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                d("button", {
                  onClick: A,
                  class: "bg-white text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  style: { borderRadius: "var(--card-radius, 8px)" }
                }, S[11] || (S[11] = [
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
              d("div", q2, [
                d("h3", z2, j(a.value.title), 1),
                S[12] || (S[12] = d("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : L("", !0)
      ]))
    ]));
  }
}, W2 = { class: "collection-sort-wrapper" }, G2 = {
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
    }), (i, l) => (x(), k("div", W2, [
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
}, Y2 = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, J2 = { class: "absolute inset-0 overflow-hidden" }, X2 = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, Q2 = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, Z2 = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, eE = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, tE = { class: "h-12 flex flex-col justify-between" }, nE = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, sE = { class: "mb-6" }, oE = { class: "flex items-center cursor-pointer" }, rE = { class: "mb-6" }, iE = { class: "space-y-2" }, lE = ["value"], aE = { class: "ml-2 text-sm" }, cE = {
  key: 0,
  class: "mb-6"
}, uE = { class: "space-y-2" }, dE = ["value"], fE = { class: "ml-2 text-sm" }, pE = {
  key: 1,
  class: "mb-6"
}, hE = { class: "space-y-2" }, mE = ["value"], gE = { class: "ml-2 text-sm" }, vE = {
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
    ], r = J(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.product_type && g.add(h.product_type);
      }), Array.from(g).sort();
    }), i = J(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((h) => {
        h.vendor && g.add(h.vendor);
      }), Array.from(g).sort();
    }), l = J(() => {
      let g = 0;
      return s.value.inStock && g++, g += s.value.priceRanges.length, g += s.value.types.length, g += s.value.vendors.length, g;
    }), a = () => {
      n.value = !n.value, n.value ? (p(), document.body.style.overflow = "hidden") : document.body.style.overflow = "";
    }, c = () => {
      n.value = !1, document.body.style.overflow = "";
    }, f = () => {
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
      const V = `${window.location.pathname}${g.toString() ? "?" + g.toString() : ""}`;
      window.location.href = V;
    }, u = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const g = new URLSearchParams(window.location.search), h = [];
      for (const [E] of g)
        E.startsWith("filter.") && h.push(E);
      h.forEach((E) => g.delete(E));
      const V = g.get("sort_by"), C = `${window.location.pathname}${V ? "?sort_by=" + V : ""}`;
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
      const V = g.getAll("filter.p.vendor");
      V.length > 0 && (s.value.vendors = V);
      const C = g.getAll("filter.price.range");
      C.length > 0 && (s.value.priceRanges = C);
    }, m = () => {
      p();
    };
    return He(() => {
      p(), window.addEventListener("popstate", m);
    }), js(() => {
      window.removeEventListener("popstate", m), document.body.style.overflow = "";
    }), (g, h) => (x(), k("div", null, [
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
          class: _e(["ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }]),
          style: { borderRadius: "9999px" }
        }, j(l.value || "0"), 3)
      ]),
      (x(), ct(bn, { to: "body" }, [
        ue(ot, { name: "drawer" }, {
          default: Pe(() => [
            n.value ? (x(), k("div", Y2, [
              d("div", J2, [
                ue(ot, { name: "fade" }, {
                  default: Pe(() => [
                    n.value ? (x(), k("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: c
                    })) : L("", !0)
                  ]),
                  _: 1
                }),
                d("div", X2, [
                  ue(ot, {
                    name: "slide",
                    appear: ""
                  }, {
                    default: Pe(() => [
                      n.value ? (x(), k("div", Q2, [
                        d("div", Z2, [
                          d("div", eE, [
                            d("div", tE, [
                              h[6] || (h[6] = d("h2", { class: "text-lg font-medium text-gray-900" }, "Filters", -1)),
                              d("p", {
                                class: _e(["text-sm text-gray-500 h-5 transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }])
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
                          d("div", nE, [
                            d("div", sE, [
                              h[9] || (h[9] = d("h3", { class: "font-medium mb-3" }, "Availability", -1)),
                              d("label", oE, [
                                $e(d("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": h[0] || (h[0] = (V) => s.value.inStock = V),
                                  class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                }, null, 512), [
                                  [Le, s.value.inStock]
                                ]),
                                h[8] || (h[8] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            d("div", rE, [
                              h[10] || (h[10] = d("h3", { class: "font-medium mb-3" }, "Price", -1)),
                              d("div", iE, [
                                (x(), k(re, null, ye(o, (V) => d("label", {
                                  key: V.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: V.value,
                                    "onUpdate:modelValue": h[1] || (h[1] = (C) => s.value.priceRanges = C),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, lE), [
                                    [Le, s.value.priceRanges]
                                  ]),
                                  d("span", aE, j(V.label), 1)
                                ])), 64))
                              ])
                            ]),
                            r.value.length > 0 ? (x(), k("div", cE, [
                              h[11] || (h[11] = d("h3", { class: "font-medium mb-3" }, "Product Type", -1)),
                              d("div", uE, [
                                (x(!0), k(re, null, ye(r.value, (V) => (x(), k("label", {
                                  key: V,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: V,
                                    "onUpdate:modelValue": h[2] || (h[2] = (C) => s.value.types = C),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, dE), [
                                    [Le, s.value.types]
                                  ]),
                                  d("span", fE, j(V), 1)
                                ]))), 128))
                              ])
                            ])) : L("", !0),
                            i.value.length > 0 ? (x(), k("div", pE, [
                              h[12] || (h[12] = d("h3", { class: "font-medium mb-3" }, "Brand", -1)),
                              d("div", hE, [
                                (x(!0), k(re, null, ye(i.value, (V) => (x(), k("label", {
                                  key: V,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  $e(d("input", {
                                    type: "checkbox",
                                    value: V,
                                    "onUpdate:modelValue": h[3] || (h[3] = (C) => s.value.vendors = C),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, mE), [
                                    [Le, s.value.vendors]
                                  ]),
                                  d("span", gE, j(V), 1)
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
}, yE = /* @__PURE__ */ Ye(vE, [["__scopeId", "data-v-7b26bf02"]]), bE = { class: "product-gallery" }, _E = { class: "main-image-wrapper" }, EE = ["src", "alt"], wE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, xE = {
  key: 0,
  class: "thumbnails-wrapper"
}, NE = ["disabled"], SE = ["onClick", "aria-label"], kE = ["src", "alt"], CE = ["disabled"], OE = {
  key: 1,
  class: "swiper-dots"
}, $E = ["onClick", "aria-label"], TE = ["src", "alt"], DE = { class: "lightbox-counter" }, VE = 80, Ko = 4, $c = 2, AE = {
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
    const t = e, n = q(0), s = q(!1), o = q(!1), r = q(!1), i = q(!1), l = q(0), a = q(null), c = q(0), f = q(0), u = q({}), p = J(() => t.images.map((b) => {
      if (b.src)
        return b;
      const N = b.url || b;
      return {
        src: `${N}?width=${t.imageTransformWidth}`,
        thumbnail: `${N}?width=${t.thumbnailWidth}`,
        alt: b.alt || t.productTitle
      };
    })), m = J(() => p.value[n.value] || { src: "", alt: "" }), g = J(() => ({
      width: "150px",
      height: "150px",
      left: `${c.value - 150 / 2}px`,
      top: `${f.value - 150 / 2}px`
    })), h = J(() => {
      const N = c.value / u.value.width * 100, v = f.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${m.value.src})`,
        backgroundSize: `${u.value.width * $c}px ${u.value.height * $c}px`,
        backgroundPosition: `${N}% ${v}%`
      };
    }), V = (b) => {
      s.value = !0, n.value = b;
    }, C = (b) => {
      b === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - Ko,
        l.value + 1
      );
    }, E = (b) => {
      n.value = b, o.value = !0, document.body.style.overflow = "hidden";
    }, y = () => {
      o.value = !1, document.body.style.overflow = "";
    }, $ = (b) => {
      b === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, _ = (b) => {
      const N = b.currentTarget.getBoundingClientRect();
      u.value = N, c.value = b.clientX - N.left, f.value = b.clientY - N.top;
    }, { lengthX: A } = ib(
      a,
      {
        onSwipeEnd() {
          A.value > 50 ? C("prev") : A.value < -50 && C("next");
        }
      }
    );
    return He(() => {
      i.value = window.innerWidth < 768;
      const b = () => {
        i.value = window.innerWidth < 768;
      }, N = (v) => {
        o.value && (v.key === "Escape" && y(), v.key === "ArrowLeft" && $("prev"), v.key === "ArrowRight" && $("next"));
      };
      window.addEventListener("resize", b), window.addEventListener("keydown", N), Ct(() => {
        window.removeEventListener("resize", b), window.removeEventListener("keydown", N);
      });
    }), (b, N) => (x(), k("div", bE, [
      d("div", _E, [
        d("div", {
          class: "main-image aspect-square bg-gray-100 rounded-lg overflow-hidden relative group cursor-zoom-in",
          onClick: N[1] || (N[1] = (v) => E(n.value)),
          onMouseenter: N[2] || (N[2] = (v) => r.value = !0),
          onMouseleave: N[3] || (N[3] = (v) => r.value = !1),
          onMousemove: _
        }, [
          d("img", {
            src: m.value.src,
            alt: m.value.alt,
            class: _e(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: N[0] || (N[0] = (v) => s.value = !1)
          }, null, 42, EE),
          s.value ? (x(), k("div", wE, N[9] || (N[9] = [
            d("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : L("", !0),
          N[10] || (N[10] = d("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
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
          r.value && !i.value ? (x(), k("div", {
            key: 1,
            class: "zoom-lens",
            style: Ge(g.value)
          }, null, 4)) : L("", !0)
        ], 32),
        r.value && !i.value ? (x(), k("div", {
          key: 0,
          class: "zoom-preview",
          style: Ge(h.value)
        }, null, 4)) : L("", !0)
      ]),
      p.value.length > 1 ? (x(), k("div", xE, [
        p.value.length > Ko ? (x(), k("button", {
          key: 0,
          onClick: N[4] || (N[4] = (v) => C("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, N[11] || (N[11] = [
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
        ]), 8, NE)) : L("", !0),
        d("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          d("div", {
            class: "thumbnails-track",
            style: Ge({ transform: `translateX(-${l.value * (VE + 8)}px)` })
          }, [
            (x(!0), k(re, null, ye(p.value, (v, S) => (x(), k("button", {
              key: S,
              onClick: (I) => V(S),
              class: _e(["thumbnail", { active: S === n.value }]),
              "aria-label": `View image ${S + 1}`
            }, [
              d("img", {
                src: v.thumbnail || v.src,
                alt: v.alt,
                class: "w-full h-full object-contain"
              }, null, 8, kE)
            ], 10, SE))), 128))
          ], 4)
        ], 512),
        p.value.length > Ko ? (x(), k("button", {
          key: 1,
          onClick: N[5] || (N[5] = (v) => C("next")),
          disabled: l.value >= p.value.length - Ko,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, N[12] || (N[12] = [
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
        ]), 8, CE)) : L("", !0)
      ])) : L("", !0),
      p.value.length > 1 && i.value ? (x(), k("div", OE, [
        (x(!0), k(re, null, ye(p.value, (v, S) => (x(), k("button", {
          key: S,
          onClick: (I) => V(S),
          class: _e(["swiper-dot", { active: S === n.value }]),
          "aria-label": `Go to image ${S + 1}`
        }, null, 10, $E))), 128))
      ])) : L("", !0),
      (x(), ct(bn, { to: "body" }, [
        o.value ? (x(), k("div", {
          key: 0,
          class: "lightbox",
          onClick: y
        }, [
          d("button", {
            onClick: y,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, N[13] || (N[13] = [
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
          p.value.length > 1 ? (x(), k("button", {
            key: 0,
            onClick: N[6] || (N[6] = zt((v) => $("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, N[14] || (N[14] = [
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
            onClick: N[7] || (N[7] = zt(() => {
            }, ["stop"]))
          }, [
            d("img", {
              src: m.value.src,
              alt: m.value.alt,
              class: "lightbox-image"
            }, null, 8, TE)
          ]),
          p.value.length > 1 ? (x(), k("button", {
            key: 1,
            onClick: N[8] || (N[8] = zt((v) => $("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, N[15] || (N[15] = [
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
          d("div", DE, j(n.value + 1) + " / " + j(p.value.length), 1)
        ])) : L("", !0)
      ]))
    ]));
  }
}, IE = /* @__PURE__ */ Ye(AE, [["__scopeId", "data-v-a7c1d2a3"]]), ME = { class: "product-info" }, PE = { class: "text-2xl lg:text-3xl font-bold text-gray-900 mb-2" }, RE = {
  key: 0,
  class: "text-sm text-gray-600 mb-4"
}, LE = { class: "price-wrapper mb-6" }, FE = { class: "flex items-baseline gap-3" }, BE = { class: "text-3xl font-semibold text-gray-900" }, jE = {
  key: 0,
  class: "text-xl text-gray-500 line-through"
}, HE = {
  key: 0,
  class: "text-sm text-red-600 font-medium mt-1"
}, UE = {
  key: 1,
  class: "mb-6"
}, qE = ["product", "current-variant"], zE = ["value"], KE = { class: "mb-4" }, WE = ["max"], GE = { class: "mb-4" }, YE = {
  key: 0,
  class: "text-red-600 font-medium"
}, JE = {
  key: 1,
  class: "text-amber-600"
}, XE = {
  key: 2,
  class: "text-green-600"
}, QE = { class: "flex flex-col sm:flex-row gap-3" }, ZE = ["disabled"], ew = {
  key: 0,
  class: "flex items-center justify-center gap-2"
}, tw = { key: 1 }, nw = { key: 2 }, sw = {
  key: 2,
  class: "prose prose-sm max-w-none mb-8"
}, ow = ["innerHTML"], rw = { class: "space-y-4" }, iw = {
  key: 0,
  class: "group"
}, lw = ["innerHTML"], aw = {
  key: 1,
  class: "group"
}, cw = { class: "mt-8 pt-8 border-t" }, uw = { class: "flex gap-3" }, dw = {
  key: 0,
  class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
}, fw = {
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
    var V;
    const n = e, s = t, o = q(n.product.selected_or_first_available_variant || ((V = n.product.variants) == null ? void 0 : V[0]) || {}), r = q(1), i = q(!1), l = q(!1), a = J(() => o.value.inventory_policy === "continue" ? 999 : Math.min(o.value.inventory_quantity || 10, 10)), c = J(() => {
      var C;
      return (C = n.product.options) == null ? void 0 : C.some(
        (E) => E.name.toLowerCase() === "size" || E.name.toLowerCase() === "taille"
      );
    }), f = (C) => `$${(C / 100).toFixed(2)}`, u = (C) => {
      o.value = C, s("variant-change", C);
      const E = new URL(window.location);
      E.searchParams.set("variant", C.id), window.history.replaceState({}, "", E);
    }, p = async () => {
      var E;
      i.value = !0;
      const C = new FormData();
      C.append("id", o.value.id), C.append("quantity", r.value);
      try {
        await ((E = window.OrionCart) == null ? void 0 : E.addItem(C));
        const y = event.target, $ = y.textContent;
        y.textContent = "✓ Added to Cart", setTimeout(() => {
          y.textContent = $;
        }, 2e3);
      } catch (y) {
        console.error("Failed to add to cart:", y), alert("Failed to add item to cart. Please try again.");
      } finally {
        i.value = !1;
      }
    }, m = async () => {
      await p(), window.location.href = "/checkout";
    }, g = (C) => {
      const E = window.location.href, y = n.product.title, $ = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(E)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(E)}&text=${encodeURIComponent(y)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(E)}&description=${encodeURIComponent(y)}`
      };
      $[C] && window.open($[C], "_blank", "width=600,height=400");
    }, h = async () => {
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
    }), (C, E) => (x(), k("div", ME, [
      d("h1", PE, j(e.product.title), 1),
      e.product.vendor ? (x(), k("p", RE, " by " + j(e.product.vendor), 1)) : L("", !0),
      d("div", LE, [
        d("div", FE, [
          d("span", BE, j(f(o.value.price)), 1),
          o.value.compare_at_price > o.value.price ? (x(), k("span", jE, j(f(o.value.compare_at_price)), 1)) : L("", !0)
        ]),
        o.value.compare_at_price > o.value.price ? (x(), k("p", HE, " Save " + j(f(o.value.compare_at_price - o.value.price)) + " (" + j(Math.round((1 - o.value.price / o.value.compare_at_price) * 100)) + "% off) ", 1)) : L("", !0)
      ]),
      e.product.has_only_default_variant ? L("", !0) : (x(), k("div", UE, [
        d("product-variant-picker", {
          product: e.product,
          "current-variant": o.value,
          onVariantChange: u
        }, null, 40, qE)
      ])),
      d("form", {
        onSubmit: zt(p, ["prevent"]),
        class: "mb-8"
      }, [
        d("input", {
          type: "hidden",
          name: "id",
          value: o.value.id
        }, null, 8, zE),
        d("div", KE, [
          E[4] || (E[4] = d("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Quantity ", -1)),
          $e(d("quantity-selector", {
            "onUpdate:modelValue": E[0] || (E[0] = (y) => r.value = y),
            min: 1,
            max: a.value
          }, null, 8, WE), [
            [Fn, r.value]
          ])
        ]),
        d("div", GE, [
          o.value.available ? o.value.inventory_quantity && o.value.inventory_quantity <= 10 ? (x(), k("p", JE, " Only " + j(o.value.inventory_quantity) + " left in stock ", 1)) : (x(), k("p", XE, " ✓ In Stock ")) : (x(), k("p", YE, " Out of Stock "))
        ]),
        d("div", QE, [
          d("button", {
            type: "submit",
            class: "btn btn-primary flex-1",
            disabled: !o.value.available || i.value
          }, [
            i.value ? (x(), k("span", ew, E[5] || (E[5] = [
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
            ]))) : o.value.available ? (x(), k("span", nw, " Add to Cart ")) : (x(), k("span", tw, " Sold Out "))
          ], 8, ZE),
          e.showBuyNow ? (x(), ct(ss, {
            key: 0,
            type: "button",
            variant: "secondary",
            onClick: m,
            class: "flex-1",
            disabled: !o.value.available
          }, {
            default: Pe(() => E[6] || (E[6] = [
              je(" Buy Now ", -1)
            ])),
            _: 1,
            __: [6]
          }, 8, ["disabled"])) : L("", !0)
        ])
      ], 32),
      e.product.description ? (x(), k("div", sw, [
        E[7] || (E[7] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-3" }, "Description", -1)),
        d("div", {
          innerHTML: e.product.description
        }, null, 8, ow)
      ])) : L("", !0),
      d("div", rw, [
        E[10] || (E[10] = ls('<details class="group" data-v-9e2c3b5c><summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Shipping &amp; Returns</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4 text-sm text-gray-600" data-v-9e2c3b5c><p class="mb-2" data-v-9e2c3b5c>Free shipping on orders over $50.</p><p class="mb-2" data-v-9e2c3b5c>Standard shipping typically takes 3-5 business days.</p><p data-v-9e2c3b5c>30-day return policy. Items must be in original condition.</p></div></details>', 1)),
        e.product.care_instructions ? (x(), k("details", iw, [
          E[8] || (E[8] = d("summary", { class: "flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" }, [
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
          }, null, 8, lw)
        ])) : L("", !0),
        c.value ? (x(), k("details", aw, E[9] || (E[9] = [
          ls('<summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors" data-v-9e2c3b5c><span class="font-medium" data-v-9e2c3b5c>Size Guide</span><svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-9e2c3b5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-9e2c3b5c></path></svg></summary><div class="py-4" data-v-9e2c3b5c><table class="w-full text-sm" data-v-9e2c3b5c><thead data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><th class="text-left py-2" data-v-9e2c3b5c>Size</th><th class="text-left py-2" data-v-9e2c3b5c>Chest</th><th class="text-left py-2" data-v-9e2c3b5c>Length</th></tr></thead><tbody data-v-9e2c3b5c><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>S</td><td class="py-2" data-v-9e2c3b5c>36&quot;</td><td class="py-2" data-v-9e2c3b5c>28&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>M</td><td class="py-2" data-v-9e2c3b5c>40&quot;</td><td class="py-2" data-v-9e2c3b5c>29&quot;</td></tr><tr class="border-b" data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>L</td><td class="py-2" data-v-9e2c3b5c>44&quot;</td><td class="py-2" data-v-9e2c3b5c>30&quot;</td></tr><tr data-v-9e2c3b5c><td class="py-2" data-v-9e2c3b5c>XL</td><td class="py-2" data-v-9e2c3b5c>48&quot;</td><td class="py-2" data-v-9e2c3b5c>31&quot;</td></tr></tbody></table></div>', 2)
        ]))) : L("", !0)
      ]),
      d("div", cw, [
        E[15] || (E[15] = d("p", { class: "text-sm font-medium text-gray-700 mb-3" }, "Share this product", -1)),
        d("div", uw, [
          d("button", {
            onClick: E[1] || (E[1] = (y) => g("facebook")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Facebook"
          }, E[11] || (E[11] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
            ], -1)
          ])),
          d("button", {
            onClick: E[2] || (E[2] = (y) => g("twitter")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Twitter"
          }, E[12] || (E[12] = [
            d("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" })
            ], -1)
          ])),
          d("button", {
            onClick: E[3] || (E[3] = (y) => g("pinterest")),
            class: "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors",
            "aria-label": "Share on Pinterest"
          }, E[13] || (E[13] = [
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
            E[14] || (E[14] = d("svg", {
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
            l.value ? (x(), k("span", dw, " Link copied! ")) : L("", !0)
          ])
        ])
      ])
    ]));
  }
}, pw = /* @__PURE__ */ Ye(fw, [["__scopeId", "data-v-9e2c3b5c"]]), hw = {
  class: "cart-summary bg-gray-50 p-6 lg:sticky lg:top-24",
  style: { borderRadius: "var(--card-radius, 8px)" }
}, mw = { class: "space-y-3 mb-4" }, gw = { class: "flex justify-between text-sm" }, vw = { class: "text-gray-600" }, yw = { class: "font-medium text-gray-900" }, bw = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, _w = {
  key: 1,
  class: "flex justify-between text-sm"
}, Ew = { class: "text-gray-900" }, ww = {
  key: 2,
  class: "flex justify-between text-sm"
}, xw = { class: "text-gray-900" }, Nw = { class: "border-t pt-4 mb-6" }, Sw = { class: "flex justify-between items-baseline" }, kw = { class: "text-right" }, Cw = { class: "text-xl font-bold text-gray-900" }, Ow = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, $w = { class: "mb-6" }, Tw = { class: "group" }, Dw = { class: "mt-3" }, Vw = ["disabled"], Aw = ["disabled"], Iw = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, Mw = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, Pw = ["disabled"], Rw = {
  key: 0,
  class: "flex items-center gap-2"
}, Lw = { key: 1 }, Fw = {
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
    const n = e, s = t, o = q(""), r = q(""), i = q(""), l = q(!1), a = q(!1), c = q(!1), f = J(() => n.cart.item_count || 0), u = J(() => n.cart.total_price || 0), p = J(() => n.cart.original_total_price || n.cart.total_price || 0), m = J(() => n.cart.total_discount || 0), g = J(() => u.value >= 5e3 ? 0 : 500), h = J(() => Math.round(u.value * 0.1)), V = (y) => `$${(y / 100).toFixed(2)}`, C = async () => {
      var y;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, r.value = "", i.value = "";
        try {
          const $ = new FormData();
          $.append("discount_code", o.value);
          const _ = await fetch("/discount/apply", {
            method: "POST",
            body: $
          });
          if (_.ok)
            i.value = "Promo code applied successfully!", o.value = "", await ((y = window.OrionCart) == null ? void 0 : y.fetchCart());
          else {
            const A = await _.json();
            r.value = A.message || "Invalid promo code";
          }
        } catch ($) {
          console.error("Failed to apply promo code:", $), r.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, E = async () => {
      if (!(f.value === 0 || a.value)) {
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
    return (y, $) => (x(), k("div", hw, [
      $[10] || ($[10] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      d("div", mw, [
        d("div", gw, [
          d("span", vw, "Subtotal (" + j(f.value) + " " + j(f.value === 1 ? "item" : "items") + ")", 1),
          d("span", yw, j(V(p.value)), 1)
        ]),
        m.value > 0 ? (x(), k("div", bw, [
          $[3] || ($[3] = d("span", { class: "flex items-center gap-1" }, [
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
          d("span", null, "-" + j(V(m.value)), 1)
        ])) : L("", !0),
        e.showShipping ? (x(), k("div", _w, [
          $[4] || ($[4] = d("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          d("span", Ew, j(g.value === 0 ? "Free" : V(g.value)), 1)
        ])) : L("", !0),
        e.showTax ? (x(), k("div", ww, [
          $[5] || ($[5] = d("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          d("span", xw, j(V(h.value)), 1)
        ])) : L("", !0)
      ]),
      d("div", Nw, [
        d("div", Sw, [
          $[6] || ($[6] = d("span", { class: "text-lg font-semibold" }, "Total", -1)),
          d("div", kw, [
            d("span", Cw, j(V(u.value)), 1),
            m.value > 0 ? (x(), k("p", Ow, " You saved " + j(V(m.value)) + "! ", 1)) : L("", !0)
          ])
        ])
      ]),
      d("div", $w, [
        d("details", Tw, [
          $[7] || ($[7] = d("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          d("div", Dw, [
            d("form", {
              onSubmit: zt(C, ["prevent"]),
              class: "flex gap-2"
            }, [
              $e(d("input", {
                "onUpdate:modelValue": $[0] || ($[0] = (_) => o.value = _),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                style: { borderRadius: "var(--card-radius, 8px)" },
                disabled: l.value
              }, null, 8, Vw), [
                [Fn, o.value]
              ]),
              d("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !o.value.trim() || l.value
              }, j(l.value ? "Applying..." : "Apply"), 9, Aw)
            ], 32),
            r.value ? (x(), k("p", Iw, j(r.value), 1)) : L("", !0),
            i.value ? (x(), k("p", Mw, j(i.value), 1)) : L("", !0)
          ])
        ])
      ]),
      d("button", {
        onClick: E,
        class: "w-full py-3 px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: Ge({
          backgroundColor: c.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: $[1] || ($[1] = (_) => c.value = !0),
        onMouseleave: $[2] || ($[2] = (_) => c.value = !1),
        disabled: f.value === 0 || a.value
      }, [
        a.value ? (x(), k("span", Rw, $[8] || ($[8] = [
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
        ]))) : (x(), k("span", Lw, $[9] || ($[9] = [
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
      ], 44, Pw),
      $[11] || ($[11] = ls('<div class="mt-6 space-y-2" data-v-daaa8299><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-v-daaa8299></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-v-daaa8299></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" data-v-daaa8299></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600" data-v-daaa8299><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-v-daaa8299><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-v-daaa8299></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t" data-v-daaa8299><p class="text-xs text-gray-600 mb-2" data-v-daaa8299>We accept</p><div class="flex gap-2" data-v-daaa8299><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><path d="M0 0h48v32H0z" fill="#1A1F71" data-v-daaa8299></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#EB001B" data-v-daaa8299></rect><circle cx="19" cy="16" r="8" fill="#FF5F00" data-v-daaa8299></circle><circle cx="29" cy="16" r="8" fill="#F79E1B" data-v-daaa8299></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#2E7BC4" data-v-daaa8299></rect><path d="M20 10h8l-1 12h-6z" fill="#fff" data-v-daaa8299></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor" data-v-daaa8299><rect width="48" height="32" rx="4" fill="#253B80" data-v-daaa8299></rect><path d="M19 11h10v10H19z" fill="#179BD7" data-v-daaa8299></path></svg></div></div>', 2))
    ]));
  }
}, Bw = /* @__PURE__ */ Ye(Fw, [["__scopeId", "data-v-daaa8299"]]), jw = { class: "slideshow-banner" }, Hw = {
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
    const t = e, n = q(0), s = q([]), o = q(null), r = J(() => t.autoRotate === !0 || t.autoRotate === "true"), i = J(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), l = () => {
      if (s.value = Array.from(document.querySelectorAll(".slide")), s.value.length <= 1) return;
      const h = document.querySelector(".slideshow-prev"), V = document.querySelector(".slideshow-next"), C = document.querySelectorAll(".slide-indicator");
      h && h.addEventListener("click", f), V && V.addEventListener("click", c), C.forEach((E, y) => {
        E.addEventListener("click", () => a(y));
      }), r.value && u();
    }, a = (h) => {
      var E, y, $, _;
      if (h === n.value || !s.value.length) return;
      (E = s.value[n.value]) == null || E.classList.remove("opacity-100"), (y = s.value[n.value]) == null || y.classList.add("opacity-0");
      const V = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      V == null || V.classList.remove("opacity-100"), V == null || V.classList.add("opacity-50"), n.value = h, ($ = s.value[n.value]) == null || $.classList.remove("opacity-0"), (_ = s.value[n.value]) == null || _.classList.add("opacity-100");
      const C = document.querySelector(`.slide-indicator[data-slide-index="${n.value}"]`);
      C == null || C.classList.remove("opacity-50"), C == null || C.classList.add("opacity-100");
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
    }, g = () => {
      r.value && u();
    };
    return He(() => {
      setTimeout(l, 100);
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.addEventListener("mouseenter", m), h.addEventListener("mouseleave", g));
    }), Ct(() => {
      p();
      const h = document.querySelector(".slideshow-wrapper");
      h && (h.removeEventListener("mouseenter", m), h.removeEventListener("mouseleave", g));
    }), (h, V) => (x(), k("div", jw, [
      jn(h.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Uw = /* @__PURE__ */ Ye(Hw, [["__scopeId", "data-v-8690c751"]]), qw = { class: "testimonials-carousel relative" }, zw = {
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
    const t = e, n = q(0), s = q([]), o = q(null), r = q(null), i = J(() => t.autoRotate === !0 || t.autoRotate === "true"), l = J(() => parseInt(t.changeSlidesSpeed) * 1e3 || 5e3), a = () => {
      if (s.value = Array.from(document.querySelectorAll(".testimonial-slide")), r.value = document.querySelector(".testimonials-track"), s.value.length <= 1) return;
      const _ = document.querySelector(".testimonials-prev"), A = document.querySelector(".testimonials-next"), b = document.querySelectorAll(".testimonial-indicator");
      _ && _.addEventListener("click", u), A && A.addEventListener("click", f), b.forEach((N, v) => {
        N.addEventListener("click", () => c(v));
      }), i.value && p();
    }, c = (_) => {
      if (_ === n.value || !s.value.length || !r.value) return;
      n.value = _;
      const b = -s.value[0].offsetWidth * n.value;
      r.value.style.transform = `translateX(${b}px)`, document.querySelectorAll(".testimonial-indicator").forEach((v, S) => {
        S === n.value ? (v.classList.remove("bg-gray-300"), v.classList.add("bg-red-600")) : (v.classList.remove("bg-red-600"), v.classList.add("bg-gray-300"));
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
    }, g = () => {
      i.value && m();
    }, h = () => {
      i.value && p();
    };
    let V = 0, C = 0;
    const E = (_) => {
      V = _.changedTouches[0].screenX;
    }, y = (_) => {
      C = _.changedTouches[0].screenX, $();
    }, $ = () => {
      const A = V - C;
      Math.abs(A) > 50 && (A > 0 ? f() : u());
    };
    return He(() => {
      setTimeout(a, 100);
      const _ = document.querySelector(".testimonials-wrapper");
      _ && (_.addEventListener("mouseenter", g), _.addEventListener("mouseleave", h), _.addEventListener("touchstart", E), _.addEventListener("touchend", y));
    }), Ct(() => {
      m();
      const _ = document.querySelector(".testimonials-wrapper");
      _ && (_.removeEventListener("mouseenter", g), _.removeEventListener("mouseleave", h), _.removeEventListener("touchstart", E), _.removeEventListener("touchend", y));
    }), (_, A) => (x(), k("div", qw, [
      jn(_.$slots, "default", {}, void 0, !0)
    ]));
  }
}, Kw = /* @__PURE__ */ Ye(zw, [["__scopeId", "data-v-276cc4e8"]]), Ww = { class: "video-player relative w-full h-full" }, Gw = {
  key: 1,
  class: "video-iframe-container w-full h-full"
}, Yw = ["src", "title"], Jw = {
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
    const t = e, n = q(!1), s = q(""), o = q(""), r = J(() => t.autoplay === !0 || t.autoplay === "true"), i = J(() => t.muted === !0 || t.muted === "true"), l = J(() => t.controls === !0 || t.controls === "true"), a = J(() => `${s.value} video player`), c = J(() => {
      if (!o.value || !s.value) return "";
      let m = "";
      const g = r.value ? "1" : "0", h = i.value ? "1" : "0", V = l.value ? "1" : "0";
      return s.value === "youtube" ? (m = `https://www.youtube.com/embed/${o.value}?`, m += `autoplay=${g}&mute=${h}&controls=${V}`, m += "&rel=0&modestbranding=1&playsinline=1") : s.value === "vimeo" && (m = `https://player.vimeo.com/video/${o.value}?`, m += `autoplay=${g}&muted=${h}&controls=${V}`, m += "&title=0&byline=0&portrait=0&playsinline=1"), m;
    }), f = (m) => {
      if (!m) return { type: "", id: "" };
      const g = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/watch\?.*v=([^&\n?#]+)/
      ];
      for (const V of g) {
        const C = m.match(V);
        if (C)
          return { type: "youtube", id: C[1] };
      }
      const h = [
        /vimeo\.com\/(\d+)/,
        /player\.vimeo\.com\/video\/(\d+)/
      ];
      for (const V of h) {
        const C = m.match(V);
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
      const m = f(t.videoUrl);
      s.value = m.type, o.value = m.id;
      const g = document.querySelector(".play-button");
      g && g.addEventListener("click", u), p();
    }), (m, g) => (x(), k("div", Ww, [
      n.value ? (x(), k("div", Gw, [
        d("iframe", {
          src: c.value,
          title: a.value,
          class: "w-full h-full",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }, null, 8, Yw)
      ])) : (x(), k("div", {
        key: 0,
        class: "video-placeholder w-full h-full",
        onClick: u
      }, [
        jn(m.$slots, "default", {}, void 0, !0)
      ]))
    ]));
  }
}, Xw = /* @__PURE__ */ Ye(Jw, [["__scopeId", "data-v-540fecb2"]]), Qw = { class: "password-modal" }, Zw = {
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
    }), (c, f) => (x(), k("div", Qw, [
      jn(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}, ex = /* @__PURE__ */ Ye(Zw, [["__scopeId", "data-v-075988c6"]]), tx = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, nx = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, sx = { class: "bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20" }, ox = { class: "max-w-6xl mx-auto" }, rx = { class: "relative" }, ix = { class: "px-4 py-8 sm:px-6 lg:px-8" }, lx = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, ax = { class: "flex-1 relative group" }, cx = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, ux = {
  key: 0,
  class: "relative"
}, dx = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, fx = { class: "flex flex-wrap gap-2" }, px = ["onClick"], hx = {
  key: 0,
  class: "border-t border-gray-100"
}, mx = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, gx = {
  key: 0,
  class: "p-6"
}, vx = { class: "animate-pulse" }, yx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, bx = {
  key: 1,
  class: "p-6"
}, _x = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Ex = ["href"], wx = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, xx = ["src", "alt"], Nx = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, Sx = { class: "flex-1 min-w-0" }, kx = { class: "text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2" }, Cx = { class: "mt-1 flex items-center gap-2" }, Ox = { class: "text-sm font-semibold text-gray-900" }, $x = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, Tx = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, Dx = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, Vx = ["href"], Ax = { class: "text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors" }, Ix = {
  key: 3,
  class: "p-12 text-center"
}, Mx = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, Px = ["href"], Rx = {
  __name: "SearchOverlay",
  setup(e) {
    const t = q(!1), n = q(""), s = q(null), o = q(!1), r = q({
      products: [],
      collections: []
    }), i = q(null), l = J(() => {
      var C;
      return ((C = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : C.search) || "/search";
    }), a = J(() => n.value.length > 0), c = J(() => {
      var y, $;
      const C = [], E = (($ = (y = window.Shopline) == null ? void 0 : y.theme) == null ? void 0 : $.settings) || {};
      for (let _ = 1; _ <= 6; _++) {
        const A = E[`popular_search_${_}`];
        A && A.trim() && C.push(A.trim());
      }
      return C.length === 0 ? ["New Arrivals", "Best Sellers", "Sale", "Summer Collection"] : C;
    }), f = (C) => {
      var A, b;
      if (!C && C !== 0) return "$0.00";
      const E = ((A = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : A.money_format) || "${{amount}}", y = ((b = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : b.current) || "en", _ = new Intl.NumberFormat(y, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(C));
      return E.replace("{{amount}}", _);
    }, u = async () => {
      var C;
      t.value = !0, document.body.style.overflow = "hidden", await Fs(), (C = s.value) == null || C.focus();
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
        const E = ((C = window.routes) == null ? void 0 : C.predictive_search_url) || "/search/suggest", y = await fetch(
          `${E}?q=${encodeURIComponent(n.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
        );
        if (y.ok) {
          const $ = await y.text(), b = new DOMParser().parseFromString($, "text/html").querySelectorAll(".predictive-search__list-item"), N = Array.from(b).map((v) => {
            var z, K;
            const S = v.querySelector("a"), I = v.querySelector("img"), T = v.querySelector(".predictive-search__item-head"), M = v.querySelector(".price__item");
            return {
              url: (S == null ? void 0 : S.href) || "#",
              image: (I == null ? void 0 : I.src) || "",
              title: ((z = T == null ? void 0 : T.textContent) == null ? void 0 : z.trim()) || "",
              price: ((K = M == null ? void 0 : M.textContent) == null ? void 0 : K.trim().replace(/[^0-9.]/g, "")) || "0"
            };
          });
          r.value = {
            products: N,
            collections: []
            // Collections can be added if needed
          };
        }
      } catch (E) {
        console.error("Search error:", E), r.value = { products: [], collections: [] };
      } finally {
        o.value = !1;
      }
    }, h = () => {
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(n.value)}`);
    }, V = (C) => {
      C.key === "Escape" && t.value && p();
    };
    return He(() => {
      document.addEventListener("search-overlay:open", u), document.addEventListener("search-overlay:close", p), document.addEventListener("keydown", V);
    }), Ct(() => {
      document.removeEventListener("search-overlay:open", u), document.removeEventListener("search-overlay:close", p), document.removeEventListener("keydown", V);
    }), (C, E) => (x(), ct(bn, { to: "body" }, [
      ue(ot, { name: "search-overlay" }, {
        default: Pe(() => [
          t.value ? (x(), k("div", tx, [
            ue(ot, { name: "fade" }, {
              default: Pe(() => [
                t.value ? (x(), k("div", {
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
                var y, $;
                return [
                  t.value ? (x(), k("div", nx, [
                    d("div", sx, [
                      d("div", ox, [
                        d("div", rx, [
                          d("div", ix, [
                            d("div", lx, [
                              d("div", ax, [
                                E[4] || (E[4] = d("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
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
                                  "onUpdate:modelValue": E[0] || (E[0] = (_) => n.value = _),
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
                                d("div", cx, [
                                  o.value ? (x(), k("div", ux, E[2] || (E[2] = [
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (x(), k("button", {
                                    key: 1,
                                    onClick: E[1] || (E[1] = (_) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, E[3] || (E[3] = [
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
                              }, E[5] || (E[5] = [
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
                            !n.value && !o.value ? (x(), k("div", dx, [
                              E[6] || (E[6] = d("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              d("div", fx, [
                                (x(!0), k(re, null, ye(c.value, (_) => (x(), k("button", {
                                  key: _,
                                  onClick: (A) => {
                                    n.value = _, h();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, j(_), 9, px))), 128))
                              ])
                            ])) : L("", !0)
                          ]),
                          a.value ? (x(), k("div", hx, [
                            d("div", mx, [
                              o.value ? (x(), k("div", gx, [
                                d("div", vx, [
                                  E[8] || (E[8] = d("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  d("div", yx, [
                                    (x(), k(re, null, ye(4, (_) => d("div", {
                                      key: _,
                                      class: "flex items-start space-x-3"
                                    }, E[7] || (E[7] = [
                                      d("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      d("div", { class: "flex-1" }, [
                                        d("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        d("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : r.value.products && r.value.products.length > 0 ? (x(), k("div", bx, [
                                E[10] || (E[10] = d("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Products", -1)),
                                d("div", _x, [
                                  (x(!0), k(re, null, ye(r.value.products, (_) => (x(), k("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: p
                                  }, [
                                    d("div", wx, [
                                      _.image ? (x(), k("img", {
                                        key: 0,
                                        src: _.image,
                                        alt: _.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, xx)) : (x(), k("div", Nx, E[9] || (E[9] = [
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
                                    d("div", Sx, [
                                      d("p", kx, j(_.title), 1),
                                      d("div", Cx, [
                                        d("p", Ox, j(f(_.price)), 1),
                                        _.compareAtPrice && _.compareAtPrice > _.price ? (x(), k("p", $x, j(f(_.compareAtPrice)), 1)) : L("", !0)
                                      ])
                                    ])
                                  ], 8, Ex))), 128))
                                ])
                              ])) : L("", !0),
                              r.value.collections && r.value.collections.length > 0 ? (x(), k("div", Tx, [
                                E[12] || (E[12] = d("h3", { class: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" }, "Collections", -1)),
                                d("div", Dx, [
                                  (x(!0), k(re, null, ye(r.value.collections, (_) => (x(), k("a", {
                                    key: _.id,
                                    href: _.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: p
                                  }, [
                                    d("span", Ax, j(_.title), 1),
                                    E[11] || (E[11] = d("svg", {
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
                                  ], 8, Vx))), 128))
                                ])
                              ])) : L("", !0),
                              n.value && !o.value && (!r.value.products || r.value.products.length === 0) && (!r.value.collections || r.value.collections.length === 0) ? (x(), k("div", Ix, E[13] || (E[13] = [
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
                            n.value && (((y = r.value.products) == null ? void 0 : y.length) > 0 || (($ = r.value.collections) == null ? void 0 : $.length) > 0) ? (x(), k("div", Mx, [
                              d("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(n.value)}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: p
                              }, [
                                je(' View all results for "' + j(n.value) + '" ', 1),
                                E[14] || (E[14] = d("svg", {
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
                              ], 8, Px)
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
}, Lx = /* @__PURE__ */ Ye(Rx, [["__scopeId", "data-v-985e236a"]]), Fx = {
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
    const t = q(!1), n = J(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), s = J(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: t.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), o = J(() => {
      if (!e.tags) return [];
      if (typeof e.tags == "string")
        try {
          const a = JSON.parse(e.tags);
          return Array.isArray(a) ? a : [];
        } catch {
          return [];
        }
      return Array.isArray(e.tags) ? e.tags : [];
    }), r = J(() => {
      if (!e.image) return "";
      if (typeof e.image == "string" && e.image.startsWith("{"))
        try {
          const a = JSON.parse(e.image);
          return a.mediaUrl || a.url || "";
        } catch {
          return e.image;
        }
      return e.image;
    }), i = J(() => {
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
          const g = parseInt(p);
          u = new Date(g > 1e12 ? g : g * 1e3);
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
    }), l = J(() => {
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
}, Bx = ["href"], jx = ["src", "alt"], Hx = { class: "relative p-6 flex-1 flex flex-col z-10" }, Ux = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, qx = { class: "text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight" }, zx = ["href"], Kx = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, Wx = { key: 0 }, Gx = {
  key: 1,
  class: "text-gray-300"
}, Yx = ["datetime"], Jx = { class: "flex-1 mb-6" }, Xx = {
  key: 0,
  class: "text-gray-600 leading-relaxed line-clamp-3"
}, Qx = ["innerHTML"], Zx = { class: "mt-auto" }, eN = ["href"];
function tN(e, t, n, s, o, r) {
  return x(), k("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: Ge(s.cardStyles),
    onMouseenter: t[0] || (t[0] = (i) => s.isHovered = !0),
    onMouseleave: t[1] || (t[1] = (i) => s.isHovered = !1)
  }, [
    t[4] || (t[4] = d("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (x(), k("div", {
      key: 0,
      class: _e([s.imageAspectClass, "relative overflow-hidden"])
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
        }, null, 8, jx),
        t[2] || (t[2] = d("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, Bx)
    ], 2)) : L("", !0),
    d("div", Hx, [
      n.showTags && s.processedTags.length > 0 ? (x(), k("div", Ux, [
        (x(!0), k(re, null, ye(s.processedTags.slice(0, 3), (i) => (x(), k("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, j(i), 1))), 128))
      ])) : L("", !0),
      d("h3", qx, [
        d("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2"
        }, j(n.title), 9, zx)
      ]),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (x(), k("div", Kx, [
        n.showAuthor && n.author ? (x(), k("span", Wx, j(n.author), 1)) : L("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (x(), k("span", Gx, "•")) : L("", !0),
        n.showDate && s.formattedDate ? (x(), k("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, j(s.formattedDate), 9, Yx)) : L("", !0)
      ])) : L("", !0),
      d("div", Jx, [
        n.excerpt ? (x(), k("p", Xx, j(n.excerpt), 1)) : n.content ? (x(), k("div", {
          key: 1,
          class: "text-gray-600 leading-relaxed line-clamp-3",
          innerHTML: s.truncatedContent
        }, null, 8, Qx)) : L("", !0)
      ]),
      d("div", Zx, [
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
        ]), 8, eN)
      ])
    ])
  ], 36);
}
const nN = /* @__PURE__ */ Ye(Fx, [["render", tN], ["__scopeId", "data-v-4d9d9306"]]);
({
  ...ss,
  props: {
    ...ss.props
  }
});
const sN = /* @__PURE__ */ Ue(Mf), oN = /* @__PURE__ */ Ue(k1), rN = /* @__PURE__ */ Ue(X1), iN = /* @__PURE__ */ Ue(Af), lN = /* @__PURE__ */ Ue(cb), aN = /* @__PURE__ */ Ue(Rf), cN = /* @__PURE__ */ Ue(n_), uN = /* @__PURE__ */ Ue(Lf), dN = /* @__PURE__ */ Ue(K2), fN = /* @__PURE__ */ Ue(IE), pN = /* @__PURE__ */ Ue(pw), hN = /* @__PURE__ */ Ue(If), mN = /* @__PURE__ */ Ue(Bw), gN = /* @__PURE__ */ Ue(Uw), vN = /* @__PURE__ */ Ue(Kw), yN = /* @__PURE__ */ Ue(Xw), bN = /* @__PURE__ */ Ue(ex), _N = /* @__PURE__ */ Ue(Lx);
customElements.define("cart-drawer", sN);
customElements.define("mobile-menu", oN);
customElements.define("product-variant-picker", rN);
customElements.define("quantity-selector", iN);
customElements.define("sticky-header", lN);
customElements.define("main-header", aN);
customElements.define("site-footer", cN);
customElements.define("collection-filters", uN);
customElements.define("collection-grid", dN);
customElements.define("product-gallery", fN);
customElements.define("product-info", pN);
customElements.define("cart-item", hN);
customElements.define("cart-summary", mN);
customElements.define("slideshow-banner", gN);
customElements.define("testimonials-carousel", vN);
customElements.define("video-player", yN);
customElements.define("password-modal", bN);
customElements.define("search-overlay", _N);
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
    }, u = Lt(S_, f);
    c._vueApp = u, u.mount(c);
  }), e.querySelectorAll("collection-sort").forEach((c) => {
    if (c._vueApp) return;
    const f = {
      collectionHandle: c.getAttribute("collection-handle"),
      currentSort: c.getAttribute("current-sort") || "manual"
    }, u = Lt(G2, f);
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
    }, u = Lt(yE, f);
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
    }, u = Lt(nN, f);
    c._vueApp = u, u.mount(c);
  }), e === document && document.querySelectorAll(".sticky-header").forEach((f) => {
    if (f.dataset.sticky === "true" && !f._stickyInitialized) {
      f._stickyInitialized = !0;
      let u = window.scrollY;
      window.addEventListener("scroll", () => {
        const p = window.scrollY, m = f.dataset.transparent === "true", g = f.dataset.hideOnScroll === "true";
        p > 100 && !m ? (f.classList.add("sticky", "top-0", "shadow-md"), f.style.backgroundColor = f.dataset.stickyBackground || "#ffffff") : (f.classList.remove("sticky", "shadow-md"), f.style.backgroundColor = ""), g && (p > u && p > 100 ? f.style.transform = "translateY(-100%)" : f.style.transform = "translateY(0)"), u = p;
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
