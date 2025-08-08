var tl = {};
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
const pe = tl.NODE_ENV !== "production" ? Object.freeze({}) : {}, ps = tl.NODE_ENV !== "production" ? Object.freeze([]) : [], Ae = () => {
}, Ws = () => !1, hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xr = (e) => e.startsWith("onUpdate:"), fe = Object.assign, nl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jf = Object.prototype.hasOwnProperty, ve = (e, t) => jf.call(e, t), J = Array.isArray, Wn = (e) => Ps(e) === "[object Map]", os = (e) => Ps(e) === "[object Set]", ra = (e) => Ps(e) === "[object Date]", Hf = (e) => Ps(e) === "[object RegExp]", re = (e) => typeof e == "function", le = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", ko = (e) => (ge(e) || re(e)) && re(e.then) && re(e.catch), Oc = Object.prototype.toString, Ps = (e) => Oc.call(e), sl = (e) => Ps(e).slice(8, -1), Co = (e) => Ps(e) === "[object Object]", rl = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tn = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Dc = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Oo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Uf = /-(\w)/g, Ce = Oo(
  (e) => e.replace(Uf, (t, n) => n ? n.toUpperCase() : "")
), qf = /\B([A-Z])/g, et = Oo(
  (e) => e.replace(qf, "-$1").toLowerCase()
), nn = Oo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xt = Oo(
  (e) => e ? `on${nn(e)}` : ""
), ct = (e, t) => !Object.is(e, t), Cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Zn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Qr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zr = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let oa;
const Er = () => oa || (oa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zf(e, t) {
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
}, Wf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Kf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Gf = /* @__PURE__ */ Ke(Kf), ia = 2;
function Jf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const r = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let o = 0;
  const i = [];
  for (let l = 0; l < s.length; l++)
    if (o += s[l].length + (r[l] && r[l].length || 0), o >= t) {
      for (let a = l - ia; a <= l + ia || n > o; a++) {
        if (a < 0 || a >= s.length) continue;
        const d = a + 1;
        i.push(
          `${d}${" ".repeat(Math.max(3 - String(d).length, 0))}|  ${s[a]}`
        );
        const c = s[a].length, u = r[a] && r[a].length || 0;
        if (a === l) {
          const p = t - (o - (c + u)), h = Math.max(
            1,
            n > o ? c - p : n - t
          );
          i.push("   |  " + " ".repeat(p) + "^".repeat(h));
        } else if (a > l) {
          if (n > o) {
            const p = Math.max(Math.min(n - o, c), 1);
            i.push("   |  " + "^".repeat(p));
          }
          o += c + u;
        }
      }
      break;
    }
  return i.join(`
`);
}
function je(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = le(s) ? Tc(s) : je(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (le(e) || ge(e))
    return e;
}
const Yf = /;(?![^(]*\))/g, Xf = /:([^]+)/, Qf = /\/\*[^]*?\*\//g;
function Tc(e) {
  const t = {};
  return e.replace(Qf, "").split(Yf).forEach((n) => {
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
      const r = n.startsWith("--") ? n : et(n);
      t += `${r}:${s};`;
    }
  }
  return t;
}
function _e(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const s = _e(e[n]);
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
  return t && !le(t) && (e.class = _e(t)), n && (e.style = je(n)), e;
}
const tp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", np = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", sp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", rp = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Ac = /* @__PURE__ */ Ke(tp), $c = /* @__PURE__ */ Ke(np), Vc = /* @__PURE__ */ Ke(sp), op = /* @__PURE__ */ Ke(rp), Ic = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ip = /* @__PURE__ */ Ke(Ic), la = /* @__PURE__ */ Ke(
  Ic + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function ol(e) {
  return !!e || e === "";
}
const lp = /* @__PURE__ */ Ke(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), ap = /* @__PURE__ */ Ke(
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
    n = In(e[s], t[s]);
  return n;
}
function In(e, t) {
  if (e === t) return !0;
  let n = ra(e), s = ra(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = _t(e), s = _t(t), n || s)
    return e === t;
  if (n = J(e), s = J(t), n || s)
    return n && s ? fp(e, t) : !1;
  if (n = ge(e), s = ge(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(t).length;
    if (r !== o)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !In(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Do(e, t) {
  return e.findIndex((n) => In(n, t));
}
const Mc = (e) => !!(e && e.__v_isRef === !0), ee = (e) => le(e) ? e : e == null ? "" : J(e) || ge(e) && (e.toString === Oc || !re(e.toString)) ? Mc(e) ? ee(e.value) : JSON.stringify(e, Pc, 2) : String(e), Pc = (e, t) => Mc(t) ? Pc(e, t.value) : Wn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[ei(s, o) + " =>"] = r, n),
    {}
  )
} : os(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ei(n))
} : _t(t) ? ei(t) : ge(t) && !J(t) && !Co(t) ? String(t) : t, ei = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Rc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && tl.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var we = {};
function Vt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Qe;
class il {
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
    } else we.NODE_ENV !== "production" && Vt("cannot run an inactive effect scope.");
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function pp(e) {
  return new il(e);
}
function ll() {
  return Qe;
}
function Lc(e, t = !1) {
  Qe ? Qe.cleanups.push(e) : we.NODE_ENV !== "production" && !t && Vt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let xe;
const ti = /* @__PURE__ */ new WeakSet();
class ar {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qe && Qe.active && Qe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ti.has(this) && (ti.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, aa(this), jc(this);
    const t = xe, n = Ht;
    xe = this, Ht = !0;
    try {
      return this.fn();
    } finally {
      we.NODE_ENV !== "production" && xe !== this && Vt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Hc(this), xe = t, Ht = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ul(t);
      this.deps = this.depsTail = void 0, aa(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ti.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    yi(this) && this.run();
  }
  get dirty() {
    return yi(this);
  }
}
let Fc = 0, Zs, er;
function Bc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = er, er = e;
    return;
  }
  e.next = Zs, Zs = e;
}
function al() {
  Fc++;
}
function cl() {
  if (--Fc > 0)
    return;
  if (er) {
    let t = er;
    for (er = void 0; t; ) {
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
function jc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), ul(s), hp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function yi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Uc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Uc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cr) || (e.globalVersion = cr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !yi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xe, s = Ht;
  xe = e, Ht = !0;
  try {
    jc(e);
    const r = e.fn(e._value);
    (t.version === 0 || ct(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    xe = n, Ht = s, Hc(e), e.flags &= -3;
  }
}
function ul(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), we.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ul(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function hp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function mp(e, t) {
  e.effect instanceof ar && (e = e.effect.fn);
  const n = new ar(e);
  t && fe(n, t);
  try {
    n.run();
  } catch (r) {
    throw n.stop(), r;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function gp(e) {
  e.effect.stop();
}
let Ht = !0;
const qc = [];
function qt() {
  qc.push(Ht), Ht = !1;
}
function zt() {
  const e = qc.pop();
  Ht = e === void 0 ? !0 : e;
}
function aa(e) {
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
let cr = 0;
class vp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class To {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, we.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!xe || !Ht || xe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xe)
      n = this.activeLink = new vp(xe, this), xe.deps ? (n.prevDep = xe.depsTail, xe.depsTail.nextDep = n, xe.depsTail = n) : xe.deps = xe.depsTail = n, zc(n);
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
    this.version++, cr++, this.notify(t);
  }
  notify(t) {
    al();
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
      cl();
    }
  }
}
function zc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        zc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), we.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const eo = /* @__PURE__ */ new WeakMap(), Kn = Symbol(
  we.NODE_ENV !== "production" ? "Object iterate" : ""
), bi = Symbol(
  we.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ur = Symbol(
  we.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ue(e, t, n) {
  if (Ht && xe) {
    let s = eo.get(e);
    s || eo.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new To()), r.map = s, r.key = n), we.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function Qt(e, t, n, s, r, o) {
  const i = eo.get(e);
  if (!i) {
    cr++;
    return;
  }
  const l = (a) => {
    a && (we.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: o
    }) : a.trigger());
  };
  if (al(), t === "clear")
    i.forEach(l);
  else {
    const a = J(e), d = a && rl(n);
    if (a && n === "length") {
      const c = Number(s);
      i.forEach((u, p) => {
        (p === "length" || p === ur || !_t(p) && p >= c) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(ur)), t) {
        case "add":
          a ? d && l(i.get("length")) : (l(i.get(Kn)), Wn(e) && l(i.get(bi)));
          break;
        case "delete":
          a || (l(i.get(Kn)), Wn(e) && l(i.get(bi)));
          break;
        case "set":
          Wn(e) && l(i.get(Kn));
          break;
      }
  }
  cl();
}
function yp(e, t) {
  const n = eo.get(e);
  return n && n.get(t);
}
function cs(e) {
  const t = ce(e);
  return t === e ? t : (Ue(t, "iterate", ur), nt(e) ? t : t.map(Ye));
}
function Ao(e) {
  return Ue(e = ce(e), "iterate", ur), e;
}
const bp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ni(this, Symbol.iterator, Ye);
  },
  concat(...e) {
    return cs(this).concat(
      ...e.map((t) => J(t) ? cs(t) : t)
    );
  },
  entries() {
    return ni(this, "entries", (e) => (e[1] = Ye(e[1]), e));
  },
  every(e, t) {
    return rn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return rn(this, "filter", e, t, (n) => n.map(Ye), arguments);
  },
  find(e, t) {
    return rn(this, "find", e, t, Ye, arguments);
  },
  findIndex(e, t) {
    return rn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return rn(this, "findLast", e, t, Ye, arguments);
  },
  findLastIndex(e, t) {
    return rn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return rn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return si(this, "includes", e);
  },
  indexOf(...e) {
    return si(this, "indexOf", e);
  },
  join(e) {
    return cs(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return si(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Hs(this, "pop");
  },
  push(...e) {
    return Hs(this, "push", e);
  },
  reduce(e, ...t) {
    return ca(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ca(this, "reduceRight", e, t);
  },
  shift() {
    return Hs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return rn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Hs(this, "splice", e);
  },
  toReversed() {
    return cs(this).toReversed();
  },
  toSorted(e) {
    return cs(this).toSorted(e);
  },
  toSpliced(...e) {
    return cs(this).toSpliced(...e);
  },
  unshift(...e) {
    return Hs(this, "unshift", e);
  },
  values() {
    return ni(this, "values", Ye);
  }
};
function ni(e, t, n) {
  const s = Ao(e), r = s[t]();
  return s !== e && !nt(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const _p = Array.prototype;
function rn(e, t, n, s, r, o) {
  const i = Ao(e), l = i !== e && !nt(e), a = i[t];
  if (a !== _p[t]) {
    const u = a.apply(e, o);
    return l ? Ye(u) : u;
  }
  let d = n;
  i !== e && (l ? d = function(u, p) {
    return n.call(this, Ye(u), p, e);
  } : n.length > 2 && (d = function(u, p) {
    return n.call(this, u, p, e);
  }));
  const c = a.call(i, d, s);
  return l && r ? r(c) : c;
}
function ca(e, t, n, s) {
  const r = Ao(e);
  let o = n;
  return r !== e && (nt(e) ? n.length > 3 && (o = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : o = function(i, l, a) {
    return n.call(this, i, Ye(l), a, e);
  }), r[t](o, ...s);
}
function si(e, t, n) {
  const s = ce(e);
  Ue(s, "iterate", ur);
  const r = s[t](...n);
  return (r === -1 || r === !1) && ws(n[0]) ? (n[0] = ce(n[0]), s[t](...n)) : r;
}
function Hs(e, t, n = []) {
  qt(), al();
  const s = ce(e)[t].apply(e, n);
  return cl(), zt(), s;
}
const Ep = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), Wc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
);
function wp(e) {
  _t(e) || (e = String(e));
  const t = ce(this);
  return Ue(t, "has", e), t.hasOwnProperty(e);
}
class Kc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Zc : Qc : o ? Xc : Yc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = J(t);
    if (!r) {
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
      Me(t) ? t : s
    );
    return (_t(n) ? Wc.has(n) : Ep(n)) || (r || Ue(t, "get", n), o) ? l : Me(l) ? i && rl(n) ? l : l.value : ge(l) ? r ? Vo(l) : Es(l) : l;
  }
}
class Gc extends Kc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const a = Wt(o);
      if (!nt(s) && !Wt(s) && (o = ce(o), s = ce(s)), !J(t) && Me(o) && !Me(s))
        return a ? !1 : (o.value = s, !0);
    }
    const i = J(t) && rl(n) ? Number(n) < t.length : ve(t, n), l = Reflect.set(
      t,
      n,
      s,
      Me(t) ? t : r
    );
    return t === ce(r) && (i ? ct(s, o) && Qt(t, "set", n, s, o) : Qt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ve(t, n), r = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && Qt(t, "delete", n, void 0, r), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!_t(n) || !Wc.has(n)) && Ue(t, "has", n), s;
  }
  ownKeys(t) {
    return Ue(
      t,
      "iterate",
      J(t) ? "length" : Kn
    ), Reflect.ownKeys(t);
  }
}
class Jc extends Kc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return we.NODE_ENV !== "production" && Vt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return we.NODE_ENV !== "production" && Vt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const xp = /* @__PURE__ */ new Gc(), Np = /* @__PURE__ */ new Jc(), Sp = /* @__PURE__ */ new Gc(!0), kp = /* @__PURE__ */ new Jc(!0), _i = (e) => e, Tr = (e) => Reflect.getPrototypeOf(e);
function Cp(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = ce(r), i = Wn(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, d = r[e](...s), c = n ? _i : t ? to : Ye;
    return !t && Ue(
      o,
      "iterate",
      a ? bi : Kn
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = d.next();
        return p ? { value: u, done: p } : {
          value: l ? [c(u[0]), c(u[1])] : c(u),
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
function Ar(e) {
  return function(...t) {
    if (we.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Vt(
        `${nn(e)} operation ${n}failed: target is readonly.`,
        ce(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Op(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = ce(o), l = ce(r);
      e || (ct(r, l) && Ue(i, "get", r), Ue(i, "get", l));
      const { has: a } = Tr(i), d = t ? _i : e ? to : Ye;
      if (a.call(i, r))
        return d(o.get(r));
      if (a.call(i, l))
        return d(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Ue(ce(r), "iterate", Kn), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = ce(o), l = ce(r);
      return e || (ct(r, l) && Ue(i, "has", r), Ue(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, a = ce(l), d = t ? _i : e ? to : Ye;
      return !e && Ue(a, "iterate", Kn), l.forEach((c, u) => r.call(o, d(c), d(u), i));
    }
  };
  return fe(
    n,
    e ? {
      add: Ar("add"),
      set: Ar("set"),
      delete: Ar("delete"),
      clear: Ar("clear")
    } : {
      add(r) {
        !t && !nt(r) && !Wt(r) && (r = ce(r));
        const o = ce(this);
        return Tr(o).has.call(o, r) || (o.add(r), Qt(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !nt(o) && !Wt(o) && (o = ce(o));
        const i = ce(this), { has: l, get: a } = Tr(i);
        let d = l.call(i, r);
        d ? we.NODE_ENV !== "production" && ua(i, l, r) : (r = ce(r), d = l.call(i, r));
        const c = a.call(i, r);
        return i.set(r, o), d ? ct(o, c) && Qt(i, "set", r, o, c) : Qt(i, "add", r, o), this;
      },
      delete(r) {
        const o = ce(this), { has: i, get: l } = Tr(o);
        let a = i.call(o, r);
        a ? we.NODE_ENV !== "production" && ua(o, i, r) : (r = ce(r), a = i.call(o, r));
        const d = l ? l.call(o, r) : void 0, c = o.delete(r);
        return a && Qt(o, "delete", r, void 0, d), c;
      },
      clear() {
        const r = ce(this), o = r.size !== 0, i = we.NODE_ENV !== "production" ? Wn(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return o && Qt(
          r,
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
  ].forEach((r) => {
    n[r] = Cp(r, e, t);
  }), n;
}
function $o(e, t) {
  const n = Op(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    ve(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Dp = {
  get: /* @__PURE__ */ $o(!1, !1)
}, Tp = {
  get: /* @__PURE__ */ $o(!1, !0)
}, Ap = {
  get: /* @__PURE__ */ $o(!0, !1)
}, $p = {
  get: /* @__PURE__ */ $o(!0, !0)
};
function ua(e, t, n) {
  const s = ce(n);
  if (s !== n && t.call(e, s)) {
    const r = sl(e);
    Vt(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Yc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap();
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
function Ip(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vp(sl(e));
}
function Es(e) {
  return Wt(e) ? e : Io(
    e,
    !1,
    xp,
    Dp,
    Yc
  );
}
function eu(e) {
  return Io(
    e,
    !1,
    Sp,
    Tp,
    Xc
  );
}
function Vo(e) {
  return Io(
    e,
    !0,
    Np,
    Ap,
    Qc
  );
}
function Ft(e) {
  return Io(
    e,
    !0,
    kp,
    $p,
    Zc
  );
}
function Io(e, t, n, s, r) {
  if (!ge(e))
    return we.NODE_ENV !== "production" && Vt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Ip(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
function fn(e) {
  return Wt(e) ? fn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wt(e) {
  return !!(e && e.__v_isReadonly);
}
function nt(e) {
  return !!(e && e.__v_isShallow);
}
function ws(e) {
  return e ? !!e.__v_raw : !1;
}
function ce(e) {
  const t = e && e.__v_raw;
  return t ? ce(t) : e;
}
function tu(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && Zn(e, "__v_skip", !0), e;
}
const Ye = (e) => ge(e) ? Es(e) : e, to = (e) => ge(e) ? Vo(e) : e;
function Me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ne(e) {
  return su(e, !1);
}
function nu(e) {
  return su(e, !0);
}
function su(e, t) {
  return Me(e) ? e : new Mp(e, t);
}
class Mp {
  constructor(t, n) {
    this.dep = new To(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ce(t), this._value = n ? t : Ye(t), this.__v_isShallow = n;
  }
  get value() {
    return we.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || nt(t) || Wt(t);
    t = s ? t : ce(t), ct(t, n) && (this._rawValue = t, this._value = s ? t : Ye(t), we.NODE_ENV !== "production" ? this.dep.trigger({
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
function wr(e) {
  return Me(e) ? e.value : e;
}
function Rp(e) {
  return re(e) ? e() : wr(e);
}
const Lp = {
  get: (e, t, n) => t === "__v_raw" ? e : wr(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return Me(r) && !Me(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function dl(e) {
  return fn(e) ? e : new Proxy(e, Lp);
}
class Fp {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new To(), { get: s, set: r } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = r;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ru(e) {
  return new Fp(e);
}
function Bp(e) {
  we.NODE_ENV !== "production" && !ws(e) && Vt("toRefs() expects a reactive object but received a plain one.");
  const t = J(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ou(e, n);
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
  return Me(e) ? e : re(e) ? new Hp(e) : ge(e) && arguments.length > 1 ? ou(e, t, n) : ne(e);
}
function ou(e, t, n) {
  const s = e[t];
  return Me(s) ? s : new jp(e, t, n);
}
class qp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new To(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
      return Bc(this, !0), !0;
  }
  get value() {
    const t = we.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Uc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : we.NODE_ENV !== "production" && Vt("Write operation failed: computed value is readonly");
  }
}
function zp(e, t, n = !1) {
  let s, r;
  re(e) ? s = e : (s = e.get, r = e.set);
  const o = new qp(s, r, n);
  return we.NODE_ENV !== "production" && t && !n && (o.onTrack = t.onTrack, o.onTrigger = t.onTrigger), o;
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
}, $r = {}, no = /* @__PURE__ */ new WeakMap();
let wn;
function Gp() {
  return wn;
}
function iu(e, t = !1, n = wn) {
  if (n) {
    let s = no.get(n);
    s || no.set(n, s = []), s.push(e);
  } else we.NODE_ENV !== "production" && !t && Vt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jp(e, t, n = pe) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: a } = n, d = (v) => {
    (n.onWarn || Vt)(
      "Invalid watch source: ",
      v,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = (v) => r ? v : nt(v) || r === !1 || r === 0 ? un(v, 1) : un(v);
  let u, p, h, g, m = !1, I = !1;
  if (Me(e) ? (p = () => e.value, m = nt(e)) : fn(e) ? (p = () => c(e), m = !0) : J(e) ? (I = !0, m = e.some((v) => fn(v) || nt(v)), p = () => e.map((v) => {
    if (Me(v))
      return v.value;
    if (fn(v))
      return c(v);
    if (re(v))
      return a ? a(v, 2) : v();
    we.NODE_ENV !== "production" && d(v);
  })) : re(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (h) {
      qt();
      try {
        h();
      } finally {
        zt();
      }
    }
    const v = wn;
    wn = u;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      wn = v;
    }
  } : (p = Ae, we.NODE_ENV !== "production" && d(e)), t && r) {
    const v = p, E = r === !0 ? 1 / 0 : r;
    p = () => un(v(), E);
  }
  const M = ll(), P = () => {
    u.stop(), M && M.active && nl(M.effects, u);
  };
  if (o && t) {
    const v = t;
    t = (...E) => {
      v(...E), P();
    };
  }
  let y = I ? new Array(e.length).fill($r) : $r;
  const S = (v) => {
    if (!(!(u.flags & 1) || !u.dirty && !v))
      if (t) {
        const E = u.run();
        if (r || m || (I ? E.some((V, k) => ct(V, y[k])) : ct(E, y))) {
          h && h();
          const V = wn;
          wn = u;
          try {
            const k = [
              E,
              // pass undefined as the old value when it's changed for the first time
              y === $r ? void 0 : I && y[0] === $r ? [] : y,
              g
            ];
            y = E, a ? a(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            wn = V;
          }
        }
      } else
        u.run();
  };
  return l && l(S), u = new ar(p), u.scheduler = i ? () => i(S, !1) : S, g = (v) => iu(v, !1, u), h = u.onStop = () => {
    const v = no.get(u);
    if (v) {
      if (a)
        a(v, 4);
      else
        for (const E of v) E();
      no.delete(u);
    }
  }, we.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? s ? S(!0) : y = u.run() : i ? i(S.bind(null, !0), !0) : u.run(), P.pause = u.pause.bind(u), P.resume = u.resume.bind(u), P.stop = P, P;
}
function un(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Me(e))
    un(e.value, t, n);
  else if (J(e))
    for (let s = 0; s < e.length; s++)
      un(e[s], t, n);
  else if (os(e) || Wn(e))
    e.forEach((s) => {
      un(s, t, n);
    });
  else if (Co(e)) {
    for (const s in e)
      un(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && un(e[s], t, n);
  }
  return e;
}
var x = {};
const Gn = [];
function hs(e) {
  Gn.push(e);
}
function ms() {
  Gn.pop();
}
let ri = !1;
function B(e, ...t) {
  if (ri) return;
  ri = !0, qt();
  const n = Gn.length ? Gn[Gn.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Yp();
  if (s)
    is(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, l;
          return (l = (i = o.toString) == null ? void 0 : i.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${qo(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Xp(r)), console.warn(...o);
  }
  zt(), ri = !1;
}
function Yp() {
  let e = Gn[Gn.length - 1];
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${qo(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...Zp(e.props), o] : [r + o];
}
function Zp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...lu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function lu(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Me(t) ? (t = lu(e, ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : re(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ce(t), n ? t : [`${e}=`, t]);
}
function fl(e, t) {
  x.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? B(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && B(`${t} is NaN - the duration expression might be incorrect.`));
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
}, Mo = {
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
function is(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Pn(r, t, n);
  }
}
function It(e, t, n, s) {
  if (re(e)) {
    const r = is(e, t, n, s);
    return r && ko(r) && r.catch((o) => {
      Pn(o, t, n);
    }), r;
  }
  if (J(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(It(e[o], t, n, s));
    return r;
  } else x.NODE_ENV !== "production" && B(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Pn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = x.NODE_ENV !== "production" ? Mo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      qt(), is(o, null, 10, [
        e,
        a,
        d
      ]), zt();
      return;
    }
  }
  th(e, n, r, s, i);
}
function th(e, t, n, s = !0, r = !1) {
  if (x.NODE_ENV !== "production") {
    const o = Mo[t];
    if (n && hs(n), B(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && ms(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const ut = [];
let Jt = -1;
const gs = [];
let xn = null, fs = 0;
const au = /* @__PURE__ */ Promise.resolve();
let so = null;
const nh = 100;
function es(e) {
  const t = so || au;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sh(e) {
  let t = Jt + 1, n = ut.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ut[s], o = dr(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Po(e) {
  if (!(e.flags & 1)) {
    const t = dr(e), n = ut[ut.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= dr(n) ? ut.push(e) : ut.splice(sh(t), 0, e), e.flags |= 1, cu();
  }
}
function cu() {
  so || (so = au.then(uu));
}
function xs(e) {
  J(e) ? gs.push(...e) : xn && e.id === -1 ? xn.splice(fs + 1, 0, e) : e.flags & 1 || (gs.push(e), e.flags |= 1), cu();
}
function da(e, t, n = Jt + 1) {
  for (x.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ut.length; n++) {
    const s = ut[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || x.NODE_ENV !== "production" && pl(t, s))
        continue;
      ut.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ro(e) {
  if (gs.length) {
    const t = [...new Set(gs)].sort(
      (n, s) => dr(n) - dr(s)
    );
    if (gs.length = 0, xn) {
      xn.push(...t);
      return;
    }
    for (xn = t, x.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), fs = 0; fs < xn.length; fs++) {
      const n = xn[fs];
      x.NODE_ENV !== "production" && pl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    xn = null, fs = 0;
  }
}
const dr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function uu(e) {
  x.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = x.NODE_ENV !== "production" ? (n) => pl(e, n) : Ae;
  try {
    for (Jt = 0; Jt < ut.length; Jt++) {
      const n = ut[Jt];
      if (n && !(n.flags & 8)) {
        if (x.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), is(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Jt < ut.length; Jt++) {
      const n = ut[Jt];
      n && (n.flags &= -2);
    }
    Jt = -1, ut.length = 0, ro(e), so = null, (ut.length || gs.length) && uu(e);
  }
}
function pl(e, t) {
  const n = e.get(t) || 0;
  if (n > nh) {
    const s = t.i, r = s && ks(s.type);
    return Pn(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Bt = !1;
const Hr = /* @__PURE__ */ new Map();
x.NODE_ENV !== "production" && (Er().__VUE_HMR_RUNTIME__ = {
  createRecord: oi(du),
  rerender: oi(ih),
  reload: oi(lh)
});
const ts = /* @__PURE__ */ new Map();
function rh(e) {
  const t = e.type.__hmrId;
  let n = ts.get(t);
  n || (du(t, e.type), n = ts.get(t)), n.instances.add(e);
}
function oh(e) {
  ts.get(e.type.__hmrId).instances.delete(e);
}
function du(e, t) {
  return ts.has(e) ? !1 : (ts.set(e, {
    initialDef: oo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function oo(e) {
  return _d(e) ? e.__vccOpts : e;
}
function ih(e, t) {
  const n = ts.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, oo(s.type).render = t), s.renderCache = [], Bt = !0, s.update(), Bt = !1;
  }));
}
function lh(e, t) {
  const n = ts.get(e);
  if (!n) return;
  t = oo(t), fa(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const o = s[r], i = oo(o.type);
    let l = Hr.get(i);
    l || (i !== n.initialDef && fa(i, t), Hr.set(i, l = /* @__PURE__ */ new Set())), l.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (l.add(o), o.ceReload(t.styles), l.delete(o)) : o.parent ? Po(() => {
      Bt = !0, o.parent.update(), Bt = !1, l.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  xs(() => {
    Hr.clear();
  });
}
function fa(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function oi(e) {
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
let Rt, Ks = [], Ei = !1;
function xr(e, ...t) {
  Rt ? Rt.emit(e, ...t) : Ei || Ks.push({ event: e, args: t });
}
function hl(e, t) {
  var n, s;
  Rt = e, Rt ? (Rt.enabled = !0, Ks.forEach(({ event: r, args: o }) => Rt.emit(r, ...o)), Ks = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    hl(o, t);
  }), setTimeout(() => {
    Rt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ei = !0, Ks = []);
  }, 3e3)) : (Ei = !0, Ks = []);
}
function ah(e, t) {
  xr("app:init", e, t, {
    Fragment: ie,
    Text: en,
    Comment: $e,
    Static: $n
  });
}
function ch(e) {
  xr("app:unmount", e);
}
const wi = /* @__PURE__ */ ml(
  "component:added"
  /* COMPONENT_ADDED */
), fu = /* @__PURE__ */ ml(
  "component:updated"
  /* COMPONENT_UPDATED */
), uh = /* @__PURE__ */ ml(
  "component:removed"
  /* COMPONENT_REMOVED */
), dh = (e) => {
  Rt && typeof Rt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Rt.cleanupBuffer(e) && uh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ml(e) {
  return (t) => {
    xr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const fh = /* @__PURE__ */ pu(
  "perf:start"
  /* PERFORMANCE_START */
), ph = /* @__PURE__ */ pu(
  "perf:end"
  /* PERFORMANCE_END */
);
function pu(e) {
  return (t, n, s) => {
    xr(e, t.appContext.app, t.uid, t, n, s);
  };
}
function hh(e, t, n) {
  xr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Be = null, Ro = null;
function fr(e) {
  const t = Be;
  return Be = e, Ro = e && e.type.__scopeId || null, t;
}
function mh(e) {
  Ro = e;
}
function gh() {
  Ro = null;
}
const vh = (e) => Fe;
function Fe(e, t = Be, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ai(-1);
    const o = fr(t);
    let i;
    try {
      i = e(...r);
    } finally {
      fr(o), s._d && Ai(1);
    }
    return x.NODE_ENV !== "production" && fu(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function hu(e) {
  Dc(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function Te(e, t) {
  if (Be === null)
    return x.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
  const n = Sr(Be), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, a = pe] = t[r];
    o && (re(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && un(i), s.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Yt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[s];
    a && (qt(), It(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), zt());
  }
}
const mu = Symbol("_vte"), gu = (e) => e.__isTeleport, Jn = (e) => e && (e.disabled || e.disabled === ""), pa = (e) => e && (e.defer || e.defer === ""), ha = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ma = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xi = (e, t) => {
  const n = e && e.to;
  if (le(n))
    if (t) {
      const s = t(n);
      return x.NODE_ENV !== "production" && !s && !Jn(e) && B(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return x.NODE_ENV !== "production" && B(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return x.NODE_ENV !== "production" && !n && !Jn(e) && B(`Invalid Teleport target: ${n}`), n;
}, vu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, o, i, l, a, d) {
    const {
      mc: c,
      pc: u,
      pbc: p,
      o: { insert: h, querySelector: g, createText: m, createComment: I }
    } = d, M = Jn(t.props);
    let { shapeFlag: P, children: y, dynamicChildren: S } = t;
    if (x.NODE_ENV !== "production" && Bt && (a = !1, S = null), e == null) {
      const v = t.el = x.NODE_ENV !== "production" ? I("teleport start") : m(""), E = t.anchor = x.NODE_ENV !== "production" ? I("teleport end") : m("");
      h(v, n, s), h(E, n, s);
      const V = (_, O) => {
        P & 16 && (r && r.isCE && (r.ce._teleportTarget = _), c(
          y,
          _,
          O,
          r,
          o,
          i,
          l,
          a
        ));
      }, k = () => {
        const _ = t.target = xi(t.props, g), O = yu(_, t, m, h);
        _ ? (i !== "svg" && ha(_) ? i = "svg" : i !== "mathml" && ma(_) && (i = "mathml"), M || (V(_, O), Ur(t, !1))) : x.NODE_ENV !== "production" && !M && B(
          "Invalid Teleport target on mount:",
          _,
          `(${typeof _})`
        );
      };
      M && (V(n, E), Ur(t, !0)), pa(t.props) ? (t.el.__isMounted = !1, He(() => {
        k(), delete t.el.__isMounted;
      }, o)) : k();
    } else {
      if (pa(t.props) && e.el.__isMounted === !1) {
        He(() => {
          vu.process(
            e,
            t,
            n,
            s,
            r,
            o,
            i,
            l,
            a,
            d
          );
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const v = t.anchor = e.anchor, E = t.target = e.target, V = t.targetAnchor = e.targetAnchor, k = Jn(e.props), _ = k ? n : E, O = k ? v : V;
      if (i === "svg" || ha(E) ? i = "svg" : (i === "mathml" || ma(E)) && (i = "mathml"), S ? (p(
        e.dynamicChildren,
        S,
        _,
        r,
        o,
        i,
        l
      ), sr(e, t, x.NODE_ENV === "production")) : a || u(
        e,
        t,
        _,
        O,
        r,
        o,
        i,
        l,
        !1
      ), M)
        k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Vr(
          t,
          n,
          v,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = t.target = xi(
          t.props,
          g
        );
        R ? Vr(
          t,
          R,
          null,
          d,
          0
        ) : x.NODE_ENV !== "production" && B(
          "Invalid Teleport target on update:",
          E,
          `(${typeof E})`
        );
      } else k && Vr(
        t,
        E,
        V,
        d,
        1
      );
      Ur(t, M);
    }
  },
  remove(e, t, n, { um: s, o: { remove: r } }, o) {
    const {
      shapeFlag: i,
      children: l,
      anchor: a,
      targetStart: d,
      targetAnchor: c,
      target: u,
      props: p
    } = e;
    if (u && (r(d), r(c)), o && r(a), i & 16) {
      const h = o || !Jn(p);
      for (let g = 0; g < l.length; g++) {
        const m = l[g];
        s(
          m,
          t,
          n,
          h,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: Vr,
  hydrate: yh
};
function Vr(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: l, shapeFlag: a, children: d, props: c } = e, u = o === 2;
  if (u && s(i, t, n), (!u || Jn(c)) && a & 16)
    for (let p = 0; p < d.length; p++)
      r(
        d[p],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function yh(e, t, n, s, r, o, {
  o: { nextSibling: i, parentNode: l, querySelector: a, insert: d, createText: c }
}, u) {
  const p = t.target = xi(
    t.props,
    a
  );
  if (p) {
    const h = Jn(t.props), g = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (h)
        t.anchor = u(
          i(e),
          t,
          l(e),
          n,
          s,
          r,
          o
        ), t.targetStart = g, t.targetAnchor = g && i(g);
      else {
        t.anchor = i(e);
        let m = g;
        for (; m; ) {
          if (m && m.nodeType === 8) {
            if (m.data === "teleport start anchor")
              t.targetStart = m;
            else if (m.data === "teleport anchor") {
              t.targetAnchor = m, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          m = i(m);
        }
        t.targetAnchor || yu(p, t, c, d), u(
          g && i(g),
          t,
          p,
          n,
          s,
          r,
          o
        );
      }
    Ur(t, h);
  }
  return t.anchor && i(t.anchor);
}
const Rn = vu;
function Ur(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, r;
    for (t ? (s = e.el, r = e.anchor) : (s = e.targetStart, r = e.targetAnchor); s && s !== r; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function yu(e, t, n, s) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[mu] = o, e && (s(r, e), s(o, e)), o;
}
const Nn = Symbol("_leaveCb"), Ir = Symbol("_enterCb");
function gl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ot(() => {
    e.isMounted = !0;
  }), Ls(() => {
    e.isUnmounting = !0;
  }), e;
}
const Dt = [Function, Array], vl = {
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
}, bu = (e) => {
  const t = e.subTree;
  return t.component ? bu(t.component) : t;
}, bh = {
  name: "BaseTransition",
  props: vl,
  setup(e, { slots: t }) {
    const n = it(), s = gl();
    return () => {
      const r = t.default && Lo(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = _u(r), i = ce(e), { mode: l } = i;
      if (x.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && B(`invalid <transition> mode: ${l}`), s.isLeaving)
        return ii(o);
      const a = ga(o);
      if (!a)
        return ii(o);
      let d = Ns(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => d = u
      );
      a.type !== $e && mn(a, d);
      let c = n.subTree && ga(n.subTree);
      if (c && c.type !== $e && !Lt(a, c) && bu(n).type !== $e) {
        let u = Ns(
          c,
          i,
          s,
          n
        );
        if (mn(c, u), l === "out-in" && a.type !== $e)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, c = void 0;
          }, ii(o);
        l === "in-out" && a.type !== $e ? u.delayLeave = (p, h, g) => {
          const m = wu(
            s,
            c
          );
          m[String(c.key)] = c, p[Nn] = () => {
            h(), p[Nn] = void 0, delete d.delayedLeave, c = void 0;
          }, d.delayedLeave = () => {
            g(), delete d.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return o;
    };
  }
};
function _u(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== $e) {
        if (x.NODE_ENV !== "production" && n) {
          B(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, x.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Eu = bh;
function wu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ns(e, t, n, s, r) {
  const {
    appear: o,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: d,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: g,
    onLeaveCancelled: m,
    onBeforeAppear: I,
    onAppear: M,
    onAfterAppear: P,
    onAppearCancelled: y
  } = t, S = String(e.key), v = wu(n, e), E = (_, O) => {
    _ && It(
      _,
      s,
      9,
      O
    );
  }, V = (_, O) => {
    const R = O[1];
    E(_, O), J(_) ? _.every((w) => w.length <= 1) && R() : _.length <= 1 && R();
  }, k = {
    mode: i,
    persisted: l,
    beforeEnter(_) {
      let O = a;
      if (!n.isMounted)
        if (o)
          O = I || a;
        else
          return;
      _[Nn] && _[Nn](
        !0
        /* cancelled */
      );
      const R = v[S];
      R && Lt(e, R) && R.el[Nn] && R.el[Nn](), E(O, [_]);
    },
    enter(_) {
      let O = d, R = c, w = u;
      if (!n.isMounted)
        if (o)
          O = M || d, R = P || c, w = y || u;
        else
          return;
      let $ = !1;
      const T = _[Ir] = (A) => {
        $ || ($ = !0, A ? E(w, [_]) : E(R, [_]), k.delayedLeave && k.delayedLeave(), _[Ir] = void 0);
      };
      O ? V(O, [_, T]) : T();
    },
    leave(_, O) {
      const R = String(e.key);
      if (_[Ir] && _[Ir](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      E(p, [_]);
      let w = !1;
      const $ = _[Nn] = (T) => {
        w || (w = !0, O(), T ? E(m, [_]) : E(g, [_]), _[Nn] = void 0, v[R] === e && delete v[R]);
      };
      v[R] = e, h ? V(h, [_, $]) : $();
    },
    clone(_) {
      const O = Ns(
        _,
        t,
        n,
        s,
        r
      );
      return r && r(O), O;
    }
  };
  return k;
}
function ii(e) {
  if (Rs(e))
    return e = Mt(e), e.children = null, e;
}
function ga(e) {
  if (!Rs(e))
    return gu(e.type) && e.children ? _u(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && re(n.default))
      return n.default();
  }
}
function mn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, mn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lo(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === ie ? (i.patchFlag & 128 && r++, s = s.concat(
      Lo(i.children, t, l)
    )) : (t || i.type !== $e) && s.push(l != null ? Mt(i, { key: l }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function yl(e, t) {
  return re(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    fe({ name: e.name }, t, { setup: e })
  ) : e;
}
function _h() {
  const e = it();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (x.NODE_ENV !== "production" && B(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function bl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xu = /* @__PURE__ */ new WeakSet();
function Eh(e) {
  const t = it(), n = nu(null);
  if (t) {
    const r = t.refs === pe ? t.refs = {} : t.refs;
    let o;
    x.NODE_ENV !== "production" && (o = Object.getOwnPropertyDescriptor(r, e)) && !o.configurable ? B(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(r, e, {
      enumerable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    });
  } else x.NODE_ENV !== "production" && B(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = x.NODE_ENV !== "production" ? Vo(n) : n;
  return x.NODE_ENV !== "production" && xu.add(s), s;
}
function vs(e, t, n, s, r = !1) {
  if (J(e)) {
    e.forEach(
      (g, m) => vs(
        g,
        t && (J(t) ? t[m] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (An(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && vs(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Sr(s.component) : s.el, i = r ? null : o, { i: l, r: a } = e;
  if (x.NODE_ENV !== "production" && !l) {
    B(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, c = l.refs === pe ? l.refs = {} : l.refs, u = l.setupState, p = ce(u), h = u === pe ? () => !1 : (g) => x.NODE_ENV !== "production" && (ve(p, g) && !Me(p[g]) && B(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), xu.has(p[g])) ? !1 : ve(p, g);
  if (d != null && d !== a && (le(d) ? (c[d] = null, h(d) && (u[d] = null)) : Me(d) && (d.value = null)), re(a))
    is(a, l, 12, [i, c]);
  else {
    const g = le(a), m = Me(a);
    if (g || m) {
      const I = () => {
        if (e.f) {
          const M = g ? h(a) ? u[a] : c[a] : a.value;
          r ? J(M) && nl(M, o) : J(M) ? M.includes(o) || M.push(o) : g ? (c[a] = [o], h(a) && (u[a] = c[a])) : (a.value = [o], e.k && (c[e.k] = a.value));
        } else g ? (c[a] = i, h(a) && (u[a] = i)) : m ? (a.value = i, e.k && (c[e.k] = i)) : x.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (I.id = -1, He(I, n)) : I();
    } else x.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let va = !1;
const Ln = () => {
  va || (console.error("Hydration completed but contains mismatches."), va = !0);
}, wh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", xh = (e) => e.namespaceURI.includes("MathML"), Mr = (e) => {
  if (e.nodeType === 1) {
    if (wh(e)) return "svg";
    if (xh(e)) return "mathml";
  }
}, Un = (e) => e.nodeType === 8;
function Nh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: r,
      nextSibling: o,
      parentNode: i,
      remove: l,
      insert: a,
      createComment: d
    }
  } = e, c = (y, S) => {
    if (!S.hasChildNodes()) {
      x.NODE_ENV !== "production" && B(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, y, S), ro(), S._vnode = y;
      return;
    }
    u(S.firstChild, y, null, null, null), ro(), S._vnode = y;
  }, u = (y, S, v, E, V, k = !1) => {
    k = k || !!S.dynamicChildren;
    const _ = Un(y) && y.data === "[", O = () => m(
      y,
      S,
      v,
      E,
      V,
      _
    ), { type: R, ref: w, shapeFlag: $, patchFlag: T } = S;
    let A = y.nodeType;
    S.el = y, x.NODE_ENV !== "production" && (Zn(y, "__vnode", S, !0), Zn(y, "__vueParentComponent", v, !0)), T === -2 && (k = !1, S.dynamicChildren = null);
    let L = null;
    switch (R) {
      case en:
        A !== 3 ? S.children === "" ? (a(S.el = r(""), i(y), y), L = y) : L = O() : (y.data !== S.children && (x.NODE_ENV !== "production" && B(
          "Hydration text mismatch in",
          y.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            y.data
          )}
  - expected on client: ${JSON.stringify(S.children)}`
        ), Ln(), y.data = S.children), L = o(y));
        break;
      case $e:
        P(y) ? (L = o(y), M(
          S.el = y.content.firstChild,
          y,
          v
        )) : A !== 8 || _ ? L = O() : L = o(y);
        break;
      case $n:
        if (_ && (y = o(y), A = y.nodeType), A === 1 || A === 3) {
          L = y;
          const X = !S.children.length;
          for (let W = 0; W < S.staticCount; W++)
            X && (S.children += L.nodeType === 1 ? L.outerHTML : L.data), W === S.staticCount - 1 && (S.anchor = L), L = o(L);
          return _ ? o(L) : L;
        } else
          O();
        break;
      case ie:
        _ ? L = g(
          y,
          S,
          v,
          E,
          V,
          k
        ) : L = O();
        break;
      default:
        if ($ & 1)
          (A !== 1 || S.type.toLowerCase() !== y.tagName.toLowerCase()) && !P(y) ? L = O() : L = p(
            y,
            S,
            v,
            E,
            V,
            k
          );
        else if ($ & 6) {
          S.slotScopeIds = V;
          const X = i(y);
          if (_ ? L = I(y) : Un(y) && y.data === "teleport start" ? L = I(y, y.data, "teleport end") : L = o(y), t(
            S,
            X,
            null,
            v,
            E,
            Mr(X),
            k
          ), An(S) && !S.type.__asyncResolved) {
            let W;
            _ ? (W = ue(ie), W.anchor = L ? L.previousSibling : X.lastChild) : W = y.nodeType === 3 ? pt("") : ue("div"), W.el = y, S.component.subTree = W;
          }
        } else $ & 64 ? A !== 8 ? L = O() : L = S.type.hydrate(
          y,
          S,
          v,
          E,
          V,
          k,
          e,
          h
        ) : $ & 128 ? L = S.type.hydrate(
          y,
          S,
          v,
          E,
          Mr(i(y)),
          V,
          k,
          e,
          u
        ) : x.NODE_ENV !== "production" && B("Invalid HostVNode type:", R, `(${typeof R})`);
    }
    return w != null && vs(w, null, E, S), L;
  }, p = (y, S, v, E, V, k) => {
    k = k || !!S.dynamicChildren;
    const { type: _, props: O, patchFlag: R, shapeFlag: w, dirs: $, transition: T } = S, A = _ === "input" || _ === "option";
    if (x.NODE_ENV !== "production" || A || R !== -1) {
      $ && Yt(S, null, v, "created");
      let L = !1;
      if (P(y)) {
        L = Yu(
          null,
          // no need check parentSuspense in hydration
          T
        ) && v && v.vnode.props && v.vnode.props.appear;
        const W = y.content.firstChild;
        if (L) {
          const he = W.getAttribute("class");
          he && (W.$cls = he), T.beforeEnter(W);
        }
        M(W, y, v), S.el = y = W;
      }
      if (w & 16 && // skip if element has innerHTML / textContent
      !(O && (O.innerHTML || O.textContent))) {
        let W = h(
          y.firstChild,
          S,
          y,
          v,
          E,
          V,
          k
        ), he = !1;
        for (; W; ) {
          Gs(
            y,
            1
            /* CHILDREN */
          ) || (x.NODE_ENV !== "production" && !he && (B(
            "Hydration children mismatch on",
            y,
            `
Server rendered element contains more child nodes than client vdom.`
          ), he = !0), Ln());
          const We = W;
          W = W.nextSibling, l(We);
        }
      } else if (w & 8) {
        let W = S.children;
        W[0] === `
` && (y.tagName === "PRE" || y.tagName === "TEXTAREA") && (W = W.slice(1)), y.textContent !== W && (Gs(
          y,
          0
          /* TEXT */
        ) || (x.NODE_ENV !== "production" && B(
          "Hydration text content mismatch on",
          y,
          `
  - rendered on server: ${y.textContent}
  - expected on client: ${S.children}`
        ), Ln()), y.textContent = S.children);
      }
      if (O) {
        if (x.NODE_ENV !== "production" || A || !k || R & 48) {
          const W = y.tagName.includes("-");
          for (const he in O)
            x.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !($ && $.some((We) => We.dir.created)) && Sh(y, he, O[he], S, v) && Ln(), (A && (he.endsWith("value") || he === "indeterminate") || hn(he) && !Tn(he) || // force hydrate v-bind with .prop modifiers
            he[0] === "." || W) && s(y, he, null, O[he], void 0, v);
        } else if (O.onClick)
          s(
            y,
            "onClick",
            null,
            O.onClick,
            void 0,
            v
          );
        else if (R & 4 && fn(O.style))
          for (const W in O.style) O.style[W];
      }
      let X;
      (X = O && O.onVnodeBeforeMount) && vt(X, v, S), $ && Yt(S, null, v, "beforeMount"), ((X = O && O.onVnodeMounted) || $ || L) && id(() => {
        X && vt(X, v, S), L && T.enter(y), $ && Yt(S, null, v, "mounted");
      }, E);
    }
    return y.nextSibling;
  }, h = (y, S, v, E, V, k, _) => {
    _ = _ || !!S.dynamicChildren;
    const O = S.children, R = O.length;
    let w = !1;
    for (let $ = 0; $ < R; $++) {
      const T = _ ? O[$] : O[$] = dt(O[$]), A = T.type === en;
      y ? (A && !_ && $ + 1 < R && dt(O[$ + 1]).type === en && (a(
        r(
          y.data.slice(T.children.length)
        ),
        v,
        o(y)
      ), y.data = T.children), y = u(
        y,
        T,
        E,
        V,
        k,
        _
      )) : A && !T.children ? a(T.el = r(""), v) : (Gs(
        v,
        1
        /* CHILDREN */
      ) || (x.NODE_ENV !== "production" && !w && (B(
        "Hydration children mismatch on",
        v,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), w = !0), Ln()), n(
        null,
        T,
        v,
        null,
        E,
        V,
        Mr(v),
        k
      ));
    }
    return y;
  }, g = (y, S, v, E, V, k) => {
    const { slotScopeIds: _ } = S;
    _ && (V = V ? V.concat(_) : _);
    const O = i(y), R = h(
      o(y),
      S,
      O,
      v,
      E,
      V,
      k
    );
    return R && Un(R) && R.data === "]" ? o(S.anchor = R) : (Ln(), a(S.anchor = d("]"), O, R), R);
  }, m = (y, S, v, E, V, k) => {
    if (Gs(
      y.parentElement,
      1
      /* CHILDREN */
    ) || (x.NODE_ENV !== "production" && B(
      `Hydration node mismatch:
- rendered on server:`,
      y,
      y.nodeType === 3 ? "(text)" : Un(y) && y.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      S.type
    ), Ln()), S.el = null, k) {
      const R = I(y);
      for (; ; ) {
        const w = o(y);
        if (w && w !== R)
          l(w);
        else
          break;
      }
    }
    const _ = o(y), O = i(y);
    return l(y), n(
      null,
      S,
      O,
      _,
      v,
      E,
      Mr(O),
      V
    ), v && (v.vnode.el = S.el, Uo(v, S.el)), _;
  }, I = (y, S = "[", v = "]") => {
    let E = 0;
    for (; y; )
      if (y = o(y), y && Un(y) && (y.data === S && E++, y.data === v)) {
        if (E === 0)
          return o(y);
        E--;
      }
    return y;
  }, M = (y, S, v) => {
    const E = S.parentNode;
    E && E.replaceChild(y, S);
    let V = v;
    for (; V; )
      V.vnode.el === S && (V.vnode.el = V.subTree.el = y), V = V.parent;
  }, P = (y) => y.nodeType === 1 && y.tagName === "TEMPLATE";
  return [c, u];
}
function Sh(e, t, n, s, r) {
  let o, i, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = _e(n), kh(ya(l || ""), ya(a)) || (o = 2, i = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = le(n) ? n : Zf(je(n));
    const d = ba(l), c = ba(a);
    if (s.dirs)
      for (const { dir: u, value: p } of s.dirs)
        u.name === "show" && !p && c.set("display", "none");
    r && Nu(r, s, c), Ch(d, c) || (o = 3, i = "style");
  } else (e instanceof SVGElement && ap(t) || e instanceof HTMLElement && (la(t) || lp(t))) && (la(t) ? (l = e.hasAttribute(t), a = ol(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = cp(n) ? String(n) : !1), l !== a && (o = 4, i = t));
  if (o != null && !Gs(e, o)) {
    const d = (p) => p === !1 ? "(not rendered)" : `${i}="${p}"`, c = `Hydration ${Su[o]} mismatch on`, u = `
  - rendered on server: ${d(l)}
  - expected on client: ${d(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return B(c, e, u), !0;
  }
  return !1;
}
function ya(e) {
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
function ba(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [s, r] = n.split(":");
    s = s.trim(), r = r && r.trim(), s && r && t.set(s, r);
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
function Nu(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ie && s.children.includes(t))) {
    const r = e.getCssVars();
    for (const o in r) {
      const i = Rc(r[o]);
      n.set(`--${dp(o)}`, i);
    }
  }
  t === s && e.parent && Nu(e.parent, e.vnode, n);
}
const _a = "data-allow-mismatch", Su = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Gs(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(_a); )
      e = e.parentElement;
  const n = e && e.getAttribute(_a);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(Su[t]);
  }
}
const Oh = Er().requestIdleCallback || ((e) => setTimeout(e, 1)), Dh = Er().cancelIdleCallback || ((e) => clearTimeout(e)), Th = (e = 1e4) => (t) => {
  const n = Oh(t, { timeout: e });
  return () => Dh(n);
};
function Ah(e) {
  const { top: t, left: n, bottom: s, right: r } = e.getBoundingClientRect(), { innerHeight: o, innerWidth: i } = window;
  return (t > 0 && t < o || s > 0 && s < o) && (n > 0 && n < i || r > 0 && r < i);
}
const $h = (e) => (t, n) => {
  const s = new IntersectionObserver((r) => {
    for (const o of r)
      if (o.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((r) => {
    if (r instanceof Element) {
      if (Ah(r))
        return t(), s.disconnect(), !1;
      s.observe(r);
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
}, Ih = (e = []) => (t, n) => {
  le(e) && (e = [e]);
  let s = !1;
  const r = (i) => {
    s || (s = !0, o(), t(), i.target.dispatchEvent(new i.constructor(i.type, i)));
  }, o = () => {
    n((i) => {
      for (const l of e)
        i.removeEventListener(l, r);
    });
  };
  return n((i) => {
    for (const l of e)
      i.addEventListener(l, r, { once: !0 });
  }), o;
};
function Mh(e, t) {
  if (Un(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (Un(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const An = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ph(e) {
  re(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: r = 200,
    hydrate: o,
    timeout: i,
    // undefined = never times out
    suspensible: l = !0,
    onError: a
  } = e;
  let d = null, c, u = 0;
  const p = () => (u++, d = null, h()), h = () => {
    let g;
    return d || (g = d = t().catch((m) => {
      if (m = m instanceof Error ? m : new Error(String(m)), a)
        return new Promise((I, M) => {
          a(m, () => I(p()), () => M(m), u + 1);
        });
      throw m;
    }).then((m) => {
      if (g !== d && d)
        return d;
      if (x.NODE_ENV !== "production" && !m && B(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), x.NODE_ENV !== "production" && m && !ge(m) && !re(m))
        throw new Error(`Invalid async component load result: ${m}`);
      return c = m, m;
    }));
  };
  return /* @__PURE__ */ yl({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(g, m, I) {
      let M = !1;
      (m.bu || (m.bu = [])).push(() => M = !0);
      const P = () => {
        if (M) {
          x.NODE_ENV !== "production" && B(
            `Skipping lazy hydration for component '${ks(c) || c.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        I();
      }, y = o ? () => {
        const S = o(
          P,
          (v) => Mh(g, v)
        );
        S && (m.bum || (m.bum = [])).push(S);
      } : P;
      c ? y() : h().then(() => !m.isUnmounted && y());
    },
    get __asyncResolved() {
      return c;
    },
    setup() {
      const g = ze;
      if (bl(g), c)
        return () => li(c, g);
      const m = (y) => {
        d = null, Pn(
          y,
          g,
          13,
          !s
        );
      };
      if (l && g.suspense || Ss)
        return h().then((y) => () => li(y, g)).catch((y) => (m(y), () => s ? ue(s, {
          error: y
        }) : null));
      const I = ne(!1), M = ne(), P = ne(!!r);
      return r && setTimeout(() => {
        P.value = !1;
      }, r), i != null && setTimeout(() => {
        if (!I.value && !M.value) {
          const y = new Error(
            `Async component timed out after ${i}ms.`
          );
          m(y), M.value = y;
        }
      }, i), h().then(() => {
        I.value = !0, g.parent && Rs(g.parent.vnode) && g.parent.update();
      }).catch((y) => {
        m(y), M.value = y;
      }), () => {
        if (I.value && c)
          return li(c, g);
        if (M.value && s)
          return ue(s, {
            error: M.value
          });
        if (n && !P.value)
          return ue(n);
      };
    }
  });
}
function li(e, t) {
  const { ref: n, props: s, children: r, ce: o } = t.vnode, i = ue(e, s, r);
  return i.ref = n, i.ce = o, delete t.vnode.ce, i;
}
const Rs = (e) => e.type.__isKeepAlive, Rh = {
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
        const P = t.default && t.default();
        return P && P.length === 1 ? P[0] : P;
      };
    const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
    let i = null;
    x.NODE_ENV !== "production" && (n.__v_cache = r);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: d,
        um: c,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (P, y, S, v, E) => {
      const V = P.component;
      d(P, y, S, 0, l), a(
        V.vnode,
        P,
        y,
        S,
        V,
        l,
        v,
        P.slotScopeIds,
        E
      ), He(() => {
        V.isDeactivated = !1, V.a && Cn(V.a);
        const k = P.props && P.props.onVnodeMounted;
        k && vt(k, V.parent, P);
      }, l), x.NODE_ENV !== "production" && wi(V);
    }, s.deactivate = (P) => {
      const y = P.component;
      co(y.m), co(y.a), d(P, p, null, 1, l), He(() => {
        y.da && Cn(y.da);
        const S = P.props && P.props.onVnodeUnmounted;
        S && vt(S, y.parent, P), y.isDeactivated = !0;
      }, l), x.NODE_ENV !== "production" && wi(y), x.NODE_ENV !== "production" && (y.__keepAliveStorageContainer = p);
    };
    function h(P) {
      ai(P), c(P, n, l, !0);
    }
    function g(P) {
      r.forEach((y, S) => {
        const v = ks(y.type);
        v && !P(v) && m(S);
      });
    }
    function m(P) {
      const y = r.get(P);
      y && (!i || !Lt(y, i)) ? h(y) : i && ai(i), r.delete(P), o.delete(P);
    }
    Zt(
      () => [e.include, e.exclude],
      ([P, y]) => {
        P && g((S) => Js(P, S)), y && g((S) => !Js(y, S));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let I = null;
    const M = () => {
      I != null && (fo(n.subTree.type) ? He(() => {
        r.set(I, Pr(n.subTree));
      }, n.subTree.suspense) : r.set(I, Pr(n.subTree)));
    };
    return ot(M), Bo(M), Ls(() => {
      r.forEach((P) => {
        const { subTree: y, suspense: S } = n, v = Pr(y);
        if (P.type === v.type && P.key === v.key) {
          ai(v);
          const E = v.component.da;
          E && He(E, S);
          return;
        }
        h(P);
      });
    }), () => {
      if (I = null, !t.default)
        return i = null;
      const P = t.default(), y = P[0];
      if (P.length > 1)
        return x.NODE_ENV !== "production" && B("KeepAlive should contain exactly one component child."), i = null, P;
      if (!sn(y) || !(y.shapeFlag & 4) && !(y.shapeFlag & 128))
        return i = null, y;
      let S = Pr(y);
      if (S.type === $e)
        return i = null, S;
      const v = S.type, E = ks(
        An(S) ? S.type.__asyncResolved || {} : v
      ), { include: V, exclude: k, max: _ } = e;
      if (V && (!E || !Js(V, E)) || k && E && Js(k, E))
        return S.shapeFlag &= -257, i = S, y;
      const O = S.key == null ? v : S.key, R = r.get(O);
      return S.el && (S = Mt(S), y.shapeFlag & 128 && (y.ssContent = S)), I = O, R ? (S.el = R.el, S.component = R.component, S.transition && mn(S, S.transition), S.shapeFlag |= 512, o.delete(O), o.add(O)) : (o.add(O), _ && o.size > parseInt(_, 10) && m(o.values().next().value)), S.shapeFlag |= 256, i = S, fo(y.type) ? y : S;
    };
  }
}, Lh = Rh;
function Js(e, t) {
  return J(e) ? e.some((n) => Js(n, t)) : le(e) ? e.split(",").includes(t) : Hf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function ku(e, t) {
  Ou(e, "a", t);
}
function Cu(e, t) {
  Ou(e, "da", t);
}
function Ou(e, t, n = ze) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Fo(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Rs(r.parent.vnode) && Fh(s, t, n, r), r = r.parent;
  }
}
function Fh(e, t, n, s) {
  const r = Fo(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  vn(() => {
    nl(s[t], r);
  }, n);
}
function ai(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Pr(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Fo(e, t, n = ze, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      qt();
      const l = ss(n), a = It(t, n, e, i);
      return l(), zt(), a;
    });
    return s ? r.unshift(o) : r.push(o), o;
  } else if (x.NODE_ENV !== "production") {
    const r = Xt(Mo[e].replace(/ hook$/, ""));
    B(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const gn = (e) => (t, n = ze) => {
  (!Ss || e === "sp") && Fo(e, (...s) => t(...s), n);
}, Du = gn("bm"), ot = gn("m"), _l = gn(
  "bu"
), Bo = gn("u"), Ls = gn(
  "bum"
), vn = gn("um"), Tu = gn(
  "sp"
), Au = gn("rtg"), $u = gn("rtc");
function Vu(e, t = ze) {
  Fo("ec", e, t);
}
const io = "components", Bh = "directives";
function jh(e, t) {
  return wl(io, e, !0, t) || e;
}
const El = Symbol.for("v-ndc");
function Iu(e) {
  return le(e) ? wl(io, e, !1) || e : e || El;
}
function Hh(e) {
  return wl(Bh, e);
}
function wl(e, t, n = !0, s = !1) {
  const r = Be || ze;
  if (r) {
    const o = r.type;
    if (e === io) {
      const l = ks(
        o,
        !1
      );
      if (l && (l === t || l === Ce(t) || l === nn(Ce(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ea(r[e] || o[e], t) || // global registration
      Ea(r.appContext[e], t)
    );
    if (!i && s)
      return o;
    if (x.NODE_ENV !== "production" && n && !i) {
      const l = e === io ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      B(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else x.NODE_ENV !== "production" && B(
    `resolve${nn(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Ea(e, t) {
  return e && (e[t] || e[Ce(t)] || e[nn(Ce(t))]);
}
function Ee(e, t, n, s) {
  let r;
  const o = n && n[s], i = J(e);
  if (i || le(e)) {
    const l = i && fn(e);
    let a = !1, d = !1;
    l && (a = !nt(e), d = Wt(e), e = Ao(e)), r = new Array(e.length);
    for (let c = 0, u = e.length; c < u; c++)
      r[c] = t(
        a ? d ? to(Ye(e[c])) : Ye(e[c]) : e[c],
        c,
        void 0,
        o && o[c]
      );
  } else if (typeof e == "number") {
    x.NODE_ENV !== "production" && !Number.isInteger(e) && B(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, o && o[l]);
  } else if (ge(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, o && o[a])
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const c = l[a];
        r[a] = t(e[c], c, a, o && o[a]);
      }
    }
  else
    r = [];
  return n && (n[s] = r), r;
}
function Uh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (J(s))
      for (let r = 0; r < s.length; r++)
        e[s[r].name] = s[r].fn;
    else s && (e[s.name] = s.key ? (...r) => {
      const o = s.fn(...r);
      return o && (o.key = s.key), o;
    } : s.fn);
  }
  return e;
}
function xl(e, t, n = {}, s, r) {
  if (Be.ce || Be.parent && An(Be.parent) && Be.parent.ce)
    return t !== "default" && (n.name = t), N(), St(
      ie,
      null,
      [ue("slot", n, s && s())],
      64
    );
  let o = e[t];
  x.NODE_ENV !== "production" && o && o.length > 1 && (B(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), N();
  const i = o && Nl(o(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, a = St(
    ie,
    {
      key: (l && !_t(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && s ? "_fb" : "")
    },
    i || (s ? s() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), o && o._c && (o._d = !0), a;
}
function Nl(e) {
  return e.some((t) => sn(t) ? !(t.type === $e || t.type === ie && !Nl(t.children)) : !0) ? e : null;
}
function qh(e, t) {
  const n = {};
  if (x.NODE_ENV !== "production" && !ge(e))
    return B("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Xt(s)] = e[s];
  return n;
}
const Ni = (e) => e ? md(e) ? Sr(e) : Ni(e.parent) : null, Yn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => x.NODE_ENV !== "production" ? Ft(e.props) : e.props,
    $attrs: (e) => x.NODE_ENV !== "production" ? Ft(e.attrs) : e.attrs,
    $slots: (e) => x.NODE_ENV !== "production" ? Ft(e.slots) : e.slots,
    $refs: (e) => x.NODE_ENV !== "production" ? Ft(e.refs) : e.refs,
    $parent: (e) => Ni(e.parent),
    $root: (e) => Ni(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => kl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Po(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = es.bind(e.proxy)),
    $watch: (e) => Im.bind(e)
  })
), Sl = (e) => e === "_" || e === "$", ci = (e, t) => e !== pe && !e.__isScriptSetup && ve(e, t), tr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: a } = e;
    if (x.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const h = i[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (ci(s, t))
          return i[t] = 1, s[t];
        if (r !== pe && ve(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && ve(d, t)
        )
          return i[t] = 3, o[t];
        if (n !== pe && ve(n, t))
          return i[t] = 4, n[t];
        Si && (i[t] = 0);
      }
    }
    const c = Yn[t];
    let u, p;
    if (c)
      return t === "$attrs" ? (Ue(e.attrs, "get", ""), x.NODE_ENV !== "production" && uo()) : x.NODE_ENV !== "production" && t === "$slots" && Ue(e, "get", t), c(e);
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
    x.NODE_ENV !== "production" && Be && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== pe && Sl(t[0]) && ve(r, t) ? B(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Be && B(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return ci(r, t) ? (r[t] = n, !0) : x.NODE_ENV !== "production" && r.__isScriptSetup && ve(r, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== pe && ve(s, t) ? (s[t] = n, !0) : ve(e.props, t) ? (x.NODE_ENV !== "production" && B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x.NODE_ENV !== "production" && B(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (x.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== pe && ve(e, i) || ci(t, i) || (l = o[0]) && ve(l, i) || ve(s, i) || ve(Yn, i) || ve(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
x.NODE_ENV !== "production" && (tr.ownKeys = (e) => (B(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zh = /* @__PURE__ */ fe({}, tr, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return tr.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Gf(t);
    return x.NODE_ENV !== "production" && !n && tr.has(e, t) && B(
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
  }), Object.keys(Yn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Yn[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Ae
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
      set: Ae
    });
  });
}
function Gh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ce(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Sl(s[0])) {
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
        set: Ae
      });
    }
  });
}
const ls = (e) => B(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Jh() {
  return x.NODE_ENV !== "production" && ls("defineProps"), null;
}
function Yh() {
  return x.NODE_ENV !== "production" && ls("defineEmits"), null;
}
function Xh(e) {
  x.NODE_ENV !== "production" && ls("defineExpose");
}
function Qh(e) {
  x.NODE_ENV !== "production" && ls("defineOptions");
}
function Zh() {
  return x.NODE_ENV !== "production" && ls("defineSlots"), null;
}
function em() {
  x.NODE_ENV !== "production" && ls("defineModel");
}
function tm(e, t) {
  return x.NODE_ENV !== "production" && ls("withDefaults"), null;
}
function nm() {
  return Mu("useSlots").slots;
}
function sm() {
  return Mu("useAttrs").attrs;
}
function Mu(e) {
  const t = it();
  return x.NODE_ENV !== "production" && !t && B(`${e}() called without active instance.`), t.setupContext || (t.setupContext = bd(t));
}
function pr(e) {
  return J(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function rm(e, t) {
  const n = pr(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let r = n[s];
    r ? J(r) || re(r) ? r = n[s] = { type: r, default: t[s] } : r.default = t[s] : r === null ? r = n[s] = { default: t[s] } : x.NODE_ENV !== "production" && B(`props default key "${s}" has no corresponding declaration.`), r && t[`__skip_${s}`] && (r.skipFactory = !0);
  }
  return n;
}
function om(e, t) {
  return !e || !t ? e || t : J(e) && J(t) ? e.concat(t) : fe({}, pr(e), pr(t));
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
  const t = it();
  x.NODE_ENV !== "production" && !t && B(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Ii(), ko(n) && (n = n.catch((s) => {
    throw ss(t), s;
  })), [n, () => ss(t)];
}
function am() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? B(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Si = !0;
function cm(e) {
  const t = kl(e), n = e.proxy, s = e.ctx;
  Si = !1, t.beforeCreate && wa(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: u,
    mounted: p,
    beforeUpdate: h,
    updated: g,
    activated: m,
    deactivated: I,
    beforeDestroy: M,
    beforeUnmount: P,
    destroyed: y,
    unmounted: S,
    render: v,
    renderTracked: E,
    renderTriggered: V,
    errorCaptured: k,
    serverPrefetch: _,
    // public API
    expose: O,
    inheritAttrs: R,
    // assets
    components: w,
    directives: $,
    filters: T
  } = t, A = x.NODE_ENV !== "production" ? am() : null;
  if (x.NODE_ENV !== "production") {
    const [X] = e.propsOptions;
    if (X)
      for (const W in X)
        A("Props", W);
  }
  if (d && um(d, s, A), i)
    for (const X in i) {
      const W = i[X];
      re(W) ? (x.NODE_ENV !== "production" ? Object.defineProperty(s, X, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[X] = W.bind(n), x.NODE_ENV !== "production" && A("Methods", X)) : x.NODE_ENV !== "production" && B(
        `Method "${X}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    x.NODE_ENV !== "production" && !re(r) && B(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const X = r.call(n, n);
    if (x.NODE_ENV !== "production" && ko(X) && B(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ge(X))
      x.NODE_ENV !== "production" && B("data() should return an object.");
    else if (e.data = Es(X), x.NODE_ENV !== "production")
      for (const W in X)
        A("Data", W), Sl(W[0]) || Object.defineProperty(s, W, {
          configurable: !0,
          enumerable: !0,
          get: () => X[W],
          set: Ae
        });
  }
  if (Si = !0, o)
    for (const X in o) {
      const W = o[X], he = re(W) ? W.bind(n, n) : re(W.get) ? W.get.bind(n, n) : Ae;
      x.NODE_ENV !== "production" && he === Ae && B(`Computed property "${X}" has no getter.`);
      const We = !re(W) && re(W.set) ? W.set.bind(n) : x.NODE_ENV !== "production" ? () => {
        B(
          `Write operation failed: computed property "${X}" is readonly.`
        );
      } : Ae, Et = te({
        get: he,
        set: We
      });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Et.value,
        set: (Ot) => Et.value = Ot
      }), x.NODE_ENV !== "production" && A("Computed", X);
    }
  if (l)
    for (const X in l)
      Pu(l[X], s, n, X);
  if (a) {
    const X = re(a) ? a.call(n) : a;
    Reflect.ownKeys(X).forEach((W) => {
      Lu(W, X[W]);
    });
  }
  c && wa(c, e, "c");
  function L(X, W) {
    J(W) ? W.forEach((he) => X(he.bind(n))) : W && X(W.bind(n));
  }
  if (L(Du, u), L(ot, p), L(_l, h), L(Bo, g), L(ku, m), L(Cu, I), L(Vu, k), L($u, E), L(Au, V), L(Ls, P), L(vn, S), L(Tu, _), J(O))
    if (O.length) {
      const X = e.exposed || (e.exposed = {});
      O.forEach((W) => {
        Object.defineProperty(X, W, {
          get: () => n[W],
          set: (he) => n[W] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === Ae && (e.render = v), R != null && (e.inheritAttrs = R), w && (e.components = w), $ && (e.directives = $), _ && bl(e);
}
function um(e, t, n = Ae) {
  J(e) && (e = ki(e));
  for (const s in e) {
    const r = e[s];
    let o;
    ge(r) ? "default" in r ? o = nr(
      r.from || s,
      r.default,
      !0
    ) : o = nr(r.from || s) : o = nr(r), Me(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o, x.NODE_ENV !== "production" && n("Inject", s);
  }
}
function wa(e, t, n) {
  It(
    J(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Pu(e, t, n, s) {
  let r = s.includes(".") ? td(n, s) : () => n[s];
  if (le(e)) {
    const o = t[e];
    re(o) ? Zt(r, o) : x.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, o);
  } else if (re(e))
    Zt(r, e.bind(n));
  else if (ge(e))
    if (J(e))
      e.forEach((o) => Pu(o, t, n, s));
    else {
      const o = re(e.handler) ? e.handler.bind(n) : t[e.handler];
      re(o) ? Zt(r, o, e) : x.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else x.NODE_ENV !== "production" && B(`Invalid watch option: "${s}"`, e);
}
function kl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (d) => lo(a, d, i, !0)
  ), lo(a, t, i)), ge(t) && o.set(t, a), a;
}
function lo(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && lo(e, o, n, !0), r && r.forEach(
    (i) => lo(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      x.NODE_ENV !== "production" && B(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = dm[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const dm = {
  data: xa,
  props: Na,
  emits: Na,
  // objects
  methods: Ys,
  computed: Ys,
  // lifecycle
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  // assets
  components: Ys,
  directives: Ys,
  // watch
  watch: pm,
  // provide / inject
  provide: xa,
  inject: fm
};
function xa(e, t) {
  return t ? e ? function() {
    return fe(
      re(e) ? e.call(this, this) : e,
      re(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fm(e, t) {
  return Ys(ki(e), ki(t));
}
function ki(e) {
  if (J(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function at(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ys(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Na(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    pr(e),
    pr(t ?? {})
  ) : t;
}
function pm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = at(e[s], t[s]);
  return n;
}
function Ru() {
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
  return function(s, r = null) {
    re(s) || (s = fe({}, s)), r != null && !ge(r) && (x.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), r = null);
    const o = Ru(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = o.app = {
      _uid: hm++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Li,
      get config() {
        return o.config;
      },
      set config(c) {
        x.NODE_ENV !== "production" && B(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...u) {
        return i.has(c) ? x.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : c && re(c.install) ? (i.add(c), c.install(d, ...u)) : re(c) ? (i.add(c), c(d, ...u)) : x.NODE_ENV !== "production" && B(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(c) {
        return o.mixins.includes(c) ? x.NODE_ENV !== "production" && B(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : o.mixins.push(c), d;
      },
      component(c, u) {
        return x.NODE_ENV !== "production" && Mi(c, o.config), u ? (x.NODE_ENV !== "production" && o.components[c] && B(`Component "${c}" has already been registered in target app.`), o.components[c] = u, d) : o.components[c];
      },
      directive(c, u) {
        return x.NODE_ENV !== "production" && hu(c), u ? (x.NODE_ENV !== "production" && o.directives[c] && B(`Directive "${c}" has already been registered in target app.`), o.directives[c] = u, d) : o.directives[c];
      },
      mount(c, u, p) {
        if (a)
          x.NODE_ENV !== "production" && B(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          x.NODE_ENV !== "production" && c.__vue_app__ && B(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = d._ceVNode || ue(s, r);
          return h.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), x.NODE_ENV !== "production" && (o.reload = () => {
            const g = Mt(h);
            g.el = null, e(g, c, p);
          }), u && t ? t(h, c) : e(h, c, p), a = !0, d._container = c, c.__vue_app__ = d, x.NODE_ENV !== "production" && (d._instance = h.component, ah(d, Li)), Sr(h.component);
        }
      },
      onUnmount(c) {
        x.NODE_ENV !== "production" && typeof c != "function" && B(
          `Expected function as first argument to app.onUnmount(), but got ${typeof c}`
        ), l.push(c);
      },
      unmount() {
        a ? (It(
          l,
          d._instance,
          16
        ), e(null, d._container), x.NODE_ENV !== "production" && (d._instance = null, ch(d)), delete d._container.__vue_app__) : x.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(c, u) {
        return x.NODE_ENV !== "production" && c in o.provides && (ve(o.provides, c) ? B(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ) : B(
          `App already provides property with key "${String(c)}" inherited from its parent element. It will be overwritten with the new value.`
        )), o.provides[c] = u, d;
      },
      runWithContext(c) {
        const u = Xn;
        Xn = d;
        try {
          return c();
        } finally {
          Xn = u;
        }
      }
    };
    return d;
  };
}
let Xn = null;
function Lu(e, t) {
  if (!ze)
    x.NODE_ENV !== "production" && B("provide() can only be used inside setup().");
  else {
    let n = ze.provides;
    const s = ze.parent && ze.parent.provides;
    s === n && (n = ze.provides = Object.create(s)), n[e] = t;
  }
}
function nr(e, t, n = !1) {
  const s = it();
  if (s || Xn) {
    let r = Xn ? Xn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && re(t) ? t.call(s && s.proxy) : t;
    x.NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
  } else x.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
function gm() {
  return !!(it() || Xn);
}
const Fu = {}, Bu = () => Object.create(Fu), ju = (e) => Object.getPrototypeOf(e) === Fu;
function vm(e, t, n, s = !1) {
  const r = {}, o = Bu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hu(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  x.NODE_ENV !== "production" && qu(t || {}, r, e), n ? e.props = s ? r : eu(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ym(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function bm(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = ce(r), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(x.NODE_ENV !== "production" && ym(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        let p = c[u];
        if (jo(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (a)
          if (ve(o, p))
            h !== o[p] && (o[p] = h, d = !0);
          else {
            const g = Ce(p);
            r[g] = Ci(
              a,
              l,
              g,
              h,
              e,
              !1
            );
          }
        else
          h !== o[p] && (o[p] = h, d = !0);
      }
    }
  } else {
    Hu(e, t, r, o) && (d = !0);
    let c;
    for (const u in l)
      (!t || // for camelCase
      !ve(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = et(u)) === u || !ve(t, c))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[u] = Ci(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (o !== l)
      for (const u in o)
        (!t || !ve(t, u)) && (delete o[u], d = !0);
  }
  d && Qt(e.attrs, "set", ""), x.NODE_ENV !== "production" && qu(t || {}, r, e);
}
function Hu(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (Tn(a))
        continue;
      const d = t[a];
      let c;
      r && ve(r, c = Ce(a)) ? !o || !o.includes(c) ? n[c] = d : (l || (l = {}))[c] = d : jo(e.emitsOptions, a) || (!(a in s) || d !== s[a]) && (s[a] = d, i = !0);
    }
  if (o) {
    const a = ce(n), d = l || pe;
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      n[u] = Ci(
        r,
        a,
        u,
        d[u],
        e,
        !ve(d, u)
      );
    }
  }
  return i;
}
function Ci(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = ve(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && re(a)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const c = ss(r);
          s = d[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === et(n)) && (s = !0));
  }
  return s;
}
const _m = /* @__PURE__ */ new WeakMap();
function Uu(e, t, n = !1) {
  const s = n ? _m : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let a = !1;
  if (!re(e)) {
    const c = (u) => {
      a = !0;
      const [p, h] = Uu(u, t, !0);
      fe(i, p), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !a)
    return ge(e) && s.set(e, ps), ps;
  if (J(o))
    for (let c = 0; c < o.length; c++) {
      x.NODE_ENV !== "production" && !le(o[c]) && B("props must be strings when using array syntax.", o[c]);
      const u = Ce(o[c]);
      Sa(u) && (i[u] = pe);
    }
  else if (o) {
    x.NODE_ENV !== "production" && !ge(o) && B("invalid props options", o);
    for (const c in o) {
      const u = Ce(c);
      if (Sa(u)) {
        const p = o[c], h = i[u] = J(p) || re(p) ? { type: p } : fe({}, p), g = h.type;
        let m = !1, I = !0;
        if (J(g))
          for (let M = 0; M < g.length; ++M) {
            const P = g[M], y = re(P) && P.name;
            if (y === "Boolean") {
              m = !0;
              break;
            } else y === "String" && (I = !1);
          }
        else
          m = re(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = I, (m || ve(h, "default")) && l.push(u);
      }
    }
  }
  const d = [i, l];
  return ge(e) && s.set(e, d), d;
}
function Sa(e) {
  return e[0] !== "$" && !Tn(e) ? !0 : (x.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Em(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qu(e, t, n) {
  const s = ce(t), r = n.propsOptions[0], o = Object.keys(e).map((i) => Ce(i));
  for (const i in r) {
    let l = r[i];
    l != null && wm(
      i,
      s[i],
      l,
      x.NODE_ENV !== "production" ? Ft(s) : s,
      !o.includes(i)
    );
  }
}
function wm(e, t, n, s, r) {
  const { type: o, required: i, validator: l, skipCheck: a } = n;
  if (i && r) {
    B('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (o != null && o !== !0 && !a) {
      let d = !1;
      const c = J(o) ? o : [o], u = [];
      for (let p = 0; p < c.length && !d; p++) {
        const { valid: h, expectedType: g } = Nm(t, c[p]);
        u.push(g || ""), d = h;
      }
      if (!d) {
        B(Sm(e, t, u));
        return;
      }
    }
    l && !l(t, s) && B('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xm = /* @__PURE__ */ Ke(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Nm(e, t) {
  let n;
  const s = Em(t);
  if (s === "null")
    n = e === null;
  else if (xm(s)) {
    const r = typeof e;
    n = r === s.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else s === "Object" ? n = ge(e) : s === "Array" ? n = J(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Sm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(nn).join(" | ")}`;
  const r = n[0], o = sl(t), i = ka(t, r), l = ka(t, o);
  return n.length === 1 && Ca(r) && !km(r, o) && (s += ` with value ${i}`), s += `, got ${o} `, Ca(o) && (s += `with value ${l}.`), s;
}
function ka(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ca(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function km(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Cl = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Ol = (e) => J(e) ? e.map(dt) : [dt(e)], Cm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Fe((...r) => (x.NODE_ENV !== "production" && ze && !(n === null && Be) && !(n && n.root !== ze.root) && B(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ol(t(...r))), n);
  return s._c = !1, s;
}, zu = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Cl(r)) continue;
    const o = e[r];
    if (re(o))
      t[r] = Cm(r, o, s);
    else if (o != null) {
      x.NODE_ENV !== "production" && B(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = Ol(o);
      t[r] = () => i;
    }
  }
}, Wu = (e, t) => {
  x.NODE_ENV !== "production" && !Rs(e.vnode) && B(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ol(t);
  e.slots.default = () => n;
}, Oi = (e, t, n) => {
  for (const s in t)
    (n || !Cl(s)) && (e[s] = t[s]);
}, Om = (e, t, n) => {
  const s = e.slots = Bu();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && Zn(s, "__", r, !0);
    const o = t._;
    o ? (Oi(s, t, n), n && Zn(s, "_", o, !0)) : zu(t, s);
  } else t && Wu(e, t);
}, Dm = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = pe;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? x.NODE_ENV !== "production" && Bt ? (Oi(r, t, n), Qt(e, "set", "$slots")) : n && l === 1 ? o = !1 : Oi(r, t, n) : (o = !t.$stable, zu(t, r)), i = t;
  } else t && (Wu(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Cl(l) && i[l] == null && delete r[l];
};
let Us, On;
function on(e, t) {
  e.appContext.config.performance && ao() && On.mark(`vue-${t}-${e.uid}`), x.NODE_ENV !== "production" && fh(e, t, ao() ? On.now() : Date.now());
}
function ln(e, t) {
  if (e.appContext.config.performance && ao()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    On.mark(s), On.measure(
      `<${qo(e, e.type)}> ${t}`,
      n,
      s
    ), On.clearMarks(n), On.clearMarks(s);
  }
  x.NODE_ENV !== "production" && ph(e, t, ao() ? On.now() : Date.now());
}
function ao() {
  return Us !== void 0 || (typeof window < "u" && window.performance ? (Us = !0, On = window.performance) : Us = !1), Us;
}
function Tm() {
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
function Ku(e) {
  return Ju(e);
}
function Gu(e) {
  return Ju(e, Nh);
}
function Ju(e, t) {
  Tm();
  const n = Er();
  n.__VUE__ = !0, x.NODE_ENV !== "production" && hl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: c,
    parentNode: u,
    nextSibling: p,
    setScopeId: h = Ae,
    insertStaticContent: g
  } = e, m = (b, D, F, q = null, j = null, H = null, Q = void 0, G = null, K = x.NODE_ENV !== "production" && Bt ? !1 : !!D.dynamicChildren) => {
    if (b === D)
      return;
    b && !Lt(b, D) && (q = Dr(b), yn(b, j, H, !0), b = null), D.patchFlag === -2 && (K = !1, D.dynamicChildren = null);
    const { type: z, ref: oe, shapeFlag: Z } = D;
    switch (z) {
      case en:
        I(b, D, F, q);
        break;
      case $e:
        M(b, D, F, q);
        break;
      case $n:
        b == null ? P(D, F, q, Q) : x.NODE_ENV !== "production" && y(b, D, F, Q);
        break;
      case ie:
        $(
          b,
          D,
          F,
          q,
          j,
          H,
          Q,
          G,
          K
        );
        break;
      default:
        Z & 1 ? E(
          b,
          D,
          F,
          q,
          j,
          H,
          Q,
          G,
          K
        ) : Z & 6 ? T(
          b,
          D,
          F,
          q,
          j,
          H,
          Q,
          G,
          K
        ) : Z & 64 || Z & 128 ? z.process(
          b,
          D,
          F,
          q,
          j,
          H,
          Q,
          G,
          K,
          as
        ) : x.NODE_ENV !== "production" && B("Invalid VNode type:", z, `(${typeof z})`);
    }
    oe != null && j ? vs(oe, b && b.ref, H, D || b, !D) : oe == null && b && b.ref != null && vs(b.ref, null, H, b, !0);
  }, I = (b, D, F, q) => {
    if (b == null)
      s(
        D.el = l(D.children),
        F,
        q
      );
    else {
      const j = D.el = b.el;
      D.children !== b.children && d(j, D.children);
    }
  }, M = (b, D, F, q) => {
    b == null ? s(
      D.el = a(D.children || ""),
      F,
      q
    ) : D.el = b.el;
  }, P = (b, D, F, q) => {
    [b.el, b.anchor] = g(
      b.children,
      D,
      F,
      q,
      b.el,
      b.anchor
    );
  }, y = (b, D, F, q) => {
    if (D.children !== b.children) {
      const j = p(b.anchor);
      v(b), [D.el, D.anchor] = g(
        D.children,
        F,
        j,
        q
      );
    } else
      D.el = b.el, D.anchor = b.anchor;
  }, S = ({ el: b, anchor: D }, F, q) => {
    let j;
    for (; b && b !== D; )
      j = p(b), s(b, F, q), b = j;
    s(D, F, q);
  }, v = ({ el: b, anchor: D }) => {
    let F;
    for (; b && b !== D; )
      F = p(b), r(b), b = F;
    r(D);
  }, E = (b, D, F, q, j, H, Q, G, K) => {
    D.type === "svg" ? Q = "svg" : D.type === "math" && (Q = "mathml"), b == null ? V(
      D,
      F,
      q,
      j,
      H,
      Q,
      G,
      K
    ) : O(
      b,
      D,
      j,
      H,
      Q,
      G,
      K
    );
  }, V = (b, D, F, q, j, H, Q, G) => {
    let K, z;
    const { props: oe, shapeFlag: Z, transition: se, dirs: ae } = b;
    if (K = b.el = i(
      b.type,
      H,
      oe && oe.is,
      oe
    ), Z & 8 ? c(K, b.children) : Z & 16 && _(
      b.children,
      K,
      null,
      q,
      j,
      ui(b, H),
      Q,
      G
    ), ae && Yt(b, null, q, "created"), k(K, b, b.scopeId, Q, q), oe) {
      for (const Oe in oe)
        Oe !== "value" && !Tn(Oe) && o(K, Oe, null, oe[Oe], H, q);
      "value" in oe && o(K, "value", null, oe.value, H), (z = oe.onVnodeBeforeMount) && vt(z, q, b);
    }
    x.NODE_ENV !== "production" && (Zn(K, "__vnode", b, !0), Zn(K, "__vueParentComponent", q, !0)), ae && Yt(b, null, q, "beforeMount");
    const be = Yu(j, se);
    be && se.beforeEnter(K), s(K, D, F), ((z = oe && oe.onVnodeMounted) || be || ae) && He(() => {
      z && vt(z, q, b), be && se.enter(K), ae && Yt(b, null, q, "mounted");
    }, j);
  }, k = (b, D, F, q, j) => {
    if (F && h(b, F), q)
      for (let H = 0; H < q.length; H++)
        h(b, q[H]);
    if (j) {
      let H = j.subTree;
      if (x.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && (H = Ho(H.children) || H), D === H || fo(H.type) && (H.ssContent === D || H.ssFallback === D)) {
        const Q = j.vnode;
        k(
          b,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          j.parent
        );
      }
    }
  }, _ = (b, D, F, q, j, H, Q, G, K = 0) => {
    for (let z = K; z < b.length; z++) {
      const oe = b[z] = G ? Sn(b[z]) : dt(b[z]);
      m(
        null,
        oe,
        D,
        F,
        q,
        j,
        H,
        Q,
        G
      );
    }
  }, O = (b, D, F, q, j, H, Q) => {
    const G = D.el = b.el;
    x.NODE_ENV !== "production" && (G.__vnode = D);
    let { patchFlag: K, dynamicChildren: z, dirs: oe } = D;
    K |= b.patchFlag & 16;
    const Z = b.props || pe, se = D.props || pe;
    let ae;
    if (F && Fn(F, !1), (ae = se.onVnodeBeforeUpdate) && vt(ae, F, D, b), oe && Yt(D, b, F, "beforeUpdate"), F && Fn(F, !0), x.NODE_ENV !== "production" && Bt && (K = 0, Q = !1, z = null), (Z.innerHTML && se.innerHTML == null || Z.textContent && se.textContent == null) && c(G, ""), z ? (R(
      b.dynamicChildren,
      z,
      G,
      F,
      q,
      ui(D, j),
      H
    ), x.NODE_ENV !== "production" && sr(b, D)) : Q || he(
      b,
      D,
      G,
      null,
      F,
      q,
      ui(D, j),
      H,
      !1
    ), K > 0) {
      if (K & 16)
        w(G, Z, se, F, j);
      else if (K & 2 && Z.class !== se.class && o(G, "class", null, se.class, j), K & 4 && o(G, "style", Z.style, se.style, j), K & 8) {
        const be = D.dynamicProps;
        for (let Oe = 0; Oe < be.length; Oe++) {
          const Ne = be[Oe], ht = Z[Ne], Xe = se[Ne];
          (Xe !== ht || Ne === "value") && o(G, Ne, ht, Xe, j, F);
        }
      }
      K & 1 && b.children !== D.children && c(G, D.children);
    } else !Q && z == null && w(G, Z, se, F, j);
    ((ae = se.onVnodeUpdated) || oe) && He(() => {
      ae && vt(ae, F, D, b), oe && Yt(D, b, F, "updated");
    }, q);
  }, R = (b, D, F, q, j, H, Q) => {
    for (let G = 0; G < D.length; G++) {
      const K = b[G], z = D[G], oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(K, z) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? u(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      m(
        K,
        z,
        oe,
        null,
        q,
        j,
        H,
        Q,
        !0
      );
    }
  }, w = (b, D, F, q, j) => {
    if (D !== F) {
      if (D !== pe)
        for (const H in D)
          !Tn(H) && !(H in F) && o(
            b,
            H,
            D[H],
            null,
            j,
            q
          );
      for (const H in F) {
        if (Tn(H)) continue;
        const Q = F[H], G = D[H];
        Q !== G && H !== "value" && o(b, H, G, Q, j, q);
      }
      "value" in F && o(b, "value", D.value, F.value, j);
    }
  }, $ = (b, D, F, q, j, H, Q, G, K) => {
    const z = D.el = b ? b.el : l(""), oe = D.anchor = b ? b.anchor : l("");
    let { patchFlag: Z, dynamicChildren: se, slotScopeIds: ae } = D;
    x.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Bt || Z & 2048) && (Z = 0, K = !1, se = null), ae && (G = G ? G.concat(ae) : ae), b == null ? (s(z, F, q), s(oe, F, q), _(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      F,
      oe,
      j,
      H,
      Q,
      G,
      K
    )) : Z > 0 && Z & 64 && se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (R(
      b.dynamicChildren,
      se,
      F,
      j,
      H,
      Q,
      G
    ), x.NODE_ENV !== "production" ? sr(b, D) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (D.key != null || j && D === j.subTree) && sr(
        b,
        D,
        !0
        /* shallow */
      )
    )) : he(
      b,
      D,
      F,
      oe,
      j,
      H,
      Q,
      G,
      K
    );
  }, T = (b, D, F, q, j, H, Q, G, K) => {
    D.slotScopeIds = G, b == null ? D.shapeFlag & 512 ? j.ctx.activate(
      D,
      F,
      q,
      Q,
      K
    ) : A(
      D,
      F,
      q,
      j,
      H,
      Q,
      K
    ) : L(b, D, K);
  }, A = (b, D, F, q, j, H, Q) => {
    const G = b.component = hd(
      b,
      q,
      j
    );
    if (x.NODE_ENV !== "production" && G.type.__hmrId && rh(G), x.NODE_ENV !== "production" && (hs(b), on(G, "mount")), Rs(b) && (G.ctx.renderer = as), x.NODE_ENV !== "production" && on(G, "init"), gd(G, !1, Q), x.NODE_ENV !== "production" && ln(G, "init"), x.NODE_ENV !== "production" && Bt && (b.el = null), G.asyncDep) {
      if (j && j.registerDep(G, X, Q), !b.el) {
        const K = G.subTree = ue($e);
        M(null, K, D, F), b.placeholder = K.el;
      }
    } else
      X(
        G,
        b,
        D,
        F,
        j,
        H,
        Q
      );
    x.NODE_ENV !== "production" && (ms(), ln(G, "mount"));
  }, L = (b, D, F) => {
    const q = D.component = b.component;
    if (Fm(b, D, F))
      if (q.asyncDep && !q.asyncResolved) {
        x.NODE_ENV !== "production" && hs(D), W(q, D, F), x.NODE_ENV !== "production" && ms();
        return;
      } else
        q.next = D, q.update();
    else
      D.el = b.el, q.vnode = D;
  }, X = (b, D, F, q, j, H, Q) => {
    const G = () => {
      if (b.isMounted) {
        let { next: Z, bu: se, u: ae, parent: be, vnode: Oe } = b;
        {
          const wt = Xu(b);
          if (wt) {
            Z && (Z.el = Oe.el, W(b, Z, Q)), wt.asyncDep.then(() => {
              b.isUnmounted || G();
            });
            return;
          }
        }
        let Ne = Z, ht;
        x.NODE_ENV !== "production" && hs(Z || b.vnode), Fn(b, !1), Z ? (Z.el = Oe.el, W(b, Z, Q)) : Z = Oe, se && Cn(se), (ht = Z.props && Z.props.onVnodeBeforeUpdate) && vt(ht, be, Z, Oe), Fn(b, !0), x.NODE_ENV !== "production" && on(b, "render");
        const Xe = qr(b);
        x.NODE_ENV !== "production" && ln(b, "render");
        const Pt = b.subTree;
        b.subTree = Xe, x.NODE_ENV !== "production" && on(b, "patch"), m(
          Pt,
          Xe,
          // parent may have changed if it's in a teleport
          u(Pt.el),
          // anchor may have changed if it's in a fragment
          Dr(Pt),
          b,
          j,
          H
        ), x.NODE_ENV !== "production" && ln(b, "patch"), Z.el = Xe.el, Ne === null && Uo(b, Xe.el), ae && He(ae, j), (ht = Z.props && Z.props.onVnodeUpdated) && He(
          () => vt(ht, be, Z, Oe),
          j
        ), x.NODE_ENV !== "production" && fu(b), x.NODE_ENV !== "production" && ms();
      } else {
        let Z;
        const { el: se, props: ae } = D, { bm: be, m: Oe, parent: Ne, root: ht, type: Xe } = b, Pt = An(D);
        if (Fn(b, !1), be && Cn(be), !Pt && (Z = ae && ae.onVnodeBeforeMount) && vt(Z, Ne, D), Fn(b, !0), se && Zo) {
          const wt = () => {
            x.NODE_ENV !== "production" && on(b, "render"), b.subTree = qr(b), x.NODE_ENV !== "production" && ln(b, "render"), x.NODE_ENV !== "production" && on(b, "hydrate"), Zo(
              se,
              b.subTree,
              b,
              j,
              null
            ), x.NODE_ENV !== "production" && ln(b, "hydrate");
          };
          Pt && Xe.__asyncHydrate ? Xe.__asyncHydrate(
            se,
            b,
            wt
          ) : wt();
        } else {
          ht.ce && // @ts-expect-error _def is private
          ht.ce._def.shadowRoot !== !1 && ht.ce._injectChildStyle(Xe), x.NODE_ENV !== "production" && on(b, "render");
          const wt = b.subTree = qr(b);
          x.NODE_ENV !== "production" && ln(b, "render"), x.NODE_ENV !== "production" && on(b, "patch"), m(
            null,
            wt,
            F,
            q,
            b,
            j,
            H
          ), x.NODE_ENV !== "production" && ln(b, "patch"), D.el = wt.el;
        }
        if (Oe && He(Oe, j), !Pt && (Z = ae && ae.onVnodeMounted)) {
          const wt = D;
          He(
            () => vt(Z, Ne, wt),
            j
          );
        }
        (D.shapeFlag & 256 || Ne && An(Ne.vnode) && Ne.vnode.shapeFlag & 256) && b.a && He(b.a, j), b.isMounted = !0, x.NODE_ENV !== "production" && wi(b), D = F = q = null;
      }
    };
    b.scope.on();
    const K = b.effect = new ar(G);
    b.scope.off();
    const z = b.update = K.run.bind(K), oe = b.job = K.runIfDirty.bind(K);
    oe.i = b, oe.id = b.uid, K.scheduler = () => Po(oe), Fn(b, !0), x.NODE_ENV !== "production" && (K.onTrack = b.rtc ? (Z) => Cn(b.rtc, Z) : void 0, K.onTrigger = b.rtg ? (Z) => Cn(b.rtg, Z) : void 0), z();
  }, W = (b, D, F) => {
    D.component = b;
    const q = b.vnode.props;
    b.vnode = D, b.next = null, bm(b, D.props, q, F), Dm(b, D.children, F), qt(), da(b), zt();
  }, he = (b, D, F, q, j, H, Q, G, K = !1) => {
    const z = b && b.children, oe = b ? b.shapeFlag : 0, Z = D.children, { patchFlag: se, shapeFlag: ae } = D;
    if (se > 0) {
      if (se & 128) {
        Et(
          z,
          Z,
          F,
          q,
          j,
          H,
          Q,
          G,
          K
        );
        return;
      } else if (se & 256) {
        We(
          z,
          Z,
          F,
          q,
          j,
          H,
          Q,
          G,
          K
        );
        return;
      }
    }
    ae & 8 ? (oe & 16 && Bs(z, j, H), Z !== z && c(F, Z)) : oe & 16 ? ae & 16 ? Et(
      z,
      Z,
      F,
      q,
      j,
      H,
      Q,
      G,
      K
    ) : Bs(z, j, H, !0) : (oe & 8 && c(F, ""), ae & 16 && _(
      Z,
      F,
      q,
      j,
      H,
      Q,
      G,
      K
    ));
  }, We = (b, D, F, q, j, H, Q, G, K) => {
    b = b || ps, D = D || ps;
    const z = b.length, oe = D.length, Z = Math.min(z, oe);
    let se;
    for (se = 0; se < Z; se++) {
      const ae = D[se] = K ? Sn(D[se]) : dt(D[se]);
      m(
        b[se],
        ae,
        F,
        null,
        j,
        H,
        Q,
        G,
        K
      );
    }
    z > oe ? Bs(
      b,
      j,
      H,
      !0,
      !1,
      Z
    ) : _(
      D,
      F,
      q,
      j,
      H,
      Q,
      G,
      K,
      Z
    );
  }, Et = (b, D, F, q, j, H, Q, G, K) => {
    let z = 0;
    const oe = D.length;
    let Z = b.length - 1, se = oe - 1;
    for (; z <= Z && z <= se; ) {
      const ae = b[z], be = D[z] = K ? Sn(D[z]) : dt(D[z]);
      if (Lt(ae, be))
        m(
          ae,
          be,
          F,
          null,
          j,
          H,
          Q,
          G,
          K
        );
      else
        break;
      z++;
    }
    for (; z <= Z && z <= se; ) {
      const ae = b[Z], be = D[se] = K ? Sn(D[se]) : dt(D[se]);
      if (Lt(ae, be))
        m(
          ae,
          be,
          F,
          null,
          j,
          H,
          Q,
          G,
          K
        );
      else
        break;
      Z--, se--;
    }
    if (z > Z) {
      if (z <= se) {
        const ae = se + 1, be = ae < oe ? D[ae].el : q;
        for (; z <= se; )
          m(
            null,
            D[z] = K ? Sn(D[z]) : dt(D[z]),
            F,
            be,
            j,
            H,
            Q,
            G,
            K
          ), z++;
      }
    } else if (z > se)
      for (; z <= Z; )
        yn(b[z], j, H, !0), z++;
    else {
      const ae = z, be = z, Oe = /* @__PURE__ */ new Map();
      for (z = be; z <= se; z++) {
        const lt = D[z] = K ? Sn(D[z]) : dt(D[z]);
        lt.key != null && (x.NODE_ENV !== "production" && Oe.has(lt.key) && B(
          "Duplicate keys found during update:",
          JSON.stringify(lt.key),
          "Make sure keys are unique."
        ), Oe.set(lt.key, z));
      }
      let Ne, ht = 0;
      const Xe = se - be + 1;
      let Pt = !1, wt = 0;
      const js = new Array(Xe);
      for (z = 0; z < Xe; z++) js[z] = 0;
      for (z = ae; z <= Z; z++) {
        const lt = b[z];
        if (ht >= Xe) {
          yn(lt, j, H, !0);
          continue;
        }
        let Kt;
        if (lt.key != null)
          Kt = Oe.get(lt.key);
        else
          for (Ne = be; Ne <= se; Ne++)
            if (js[Ne - be] === 0 && Lt(lt, D[Ne])) {
              Kt = Ne;
              break;
            }
        Kt === void 0 ? yn(lt, j, H, !0) : (js[Kt - be] = z + 1, Kt >= wt ? wt = Kt : Pt = !0, m(
          lt,
          D[Kt],
          F,
          null,
          j,
          H,
          Q,
          G,
          K
        ), ht++);
      }
      const ta = Pt ? Am(js) : ps;
      for (Ne = ta.length - 1, z = Xe - 1; z >= 0; z--) {
        const lt = be + z, Kt = D[lt], na = D[lt + 1], sa = lt + 1 < oe ? (
          // #13559, fallback to el placeholder for unresolved async component
          na.el || na.placeholder
        ) : q;
        js[z] === 0 ? m(
          null,
          Kt,
          F,
          sa,
          j,
          H,
          Q,
          G,
          K
        ) : Pt && (Ne < 0 || z !== ta[Ne] ? Ot(Kt, F, sa, 2) : Ne--);
      }
    }
  }, Ot = (b, D, F, q, j = null) => {
    const { el: H, type: Q, transition: G, children: K, shapeFlag: z } = b;
    if (z & 6) {
      Ot(b.component.subTree, D, F, q);
      return;
    }
    if (z & 128) {
      b.suspense.move(D, F, q);
      return;
    }
    if (z & 64) {
      Q.move(b, D, F, as);
      return;
    }
    if (Q === ie) {
      s(H, D, F);
      for (let Z = 0; Z < K.length; Z++)
        Ot(K[Z], D, F, q);
      s(b.anchor, D, F);
      return;
    }
    if (Q === $n) {
      S(b, D, F);
      return;
    }
    if (q !== 2 && z & 1 && G)
      if (q === 0)
        G.beforeEnter(H), s(H, D, F), He(() => G.enter(H), j);
      else {
        const { leave: Z, delayLeave: se, afterLeave: ae } = G, be = () => {
          b.ctx.isUnmounted ? r(H) : s(H, D, F);
        }, Oe = () => {
          Z(H, () => {
            be(), ae && ae();
          });
        };
        se ? se(H, be, Oe) : Oe();
      }
    else
      s(H, D, F);
  }, yn = (b, D, F, q = !1, j = !1) => {
    const {
      type: H,
      props: Q,
      ref: G,
      children: K,
      dynamicChildren: z,
      shapeFlag: oe,
      patchFlag: Z,
      dirs: se,
      cacheIndex: ae
    } = b;
    if (Z === -2 && (j = !1), G != null && (qt(), vs(G, null, F, b, !0), zt()), ae != null && (D.renderCache[ae] = void 0), oe & 256) {
      D.ctx.deactivate(b);
      return;
    }
    const be = oe & 1 && se, Oe = !An(b);
    let Ne;
    if (Oe && (Ne = Q && Q.onVnodeBeforeUnmount) && vt(Ne, D, b), oe & 6)
      Bf(b.component, F, q);
    else {
      if (oe & 128) {
        b.suspense.unmount(F, q);
        return;
      }
      be && Yt(b, null, D, "beforeUnmount"), oe & 64 ? b.type.remove(
        b,
        D,
        F,
        as,
        q
      ) : z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== ie || Z > 0 && Z & 64) ? Bs(
        z,
        D,
        F,
        !1,
        !0
      ) : (H === ie && Z & 384 || !j && oe & 16) && Bs(K, D, F), q && Yo(b);
    }
    (Oe && (Ne = Q && Q.onVnodeUnmounted) || be) && He(() => {
      Ne && vt(Ne, D, b), be && Yt(b, null, D, "unmounted");
    }, F);
  }, Yo = (b) => {
    const { type: D, el: F, anchor: q, transition: j } = b;
    if (D === ie) {
      x.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && j && !j.persisted ? b.children.forEach((Q) => {
        Q.type === $e ? r(Q.el) : Yo(Q);
      }) : Ff(F, q);
      return;
    }
    if (D === $n) {
      v(b);
      return;
    }
    const H = () => {
      r(F), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (b.shapeFlag & 1 && j && !j.persisted) {
      const { leave: Q, delayLeave: G } = j, K = () => Q(F, H);
      G ? G(b.el, H, K) : K();
    } else
      H();
  }, Ff = (b, D) => {
    let F;
    for (; b !== D; )
      F = p(b), r(b), b = F;
    r(D);
  }, Bf = (b, D, F) => {
    x.NODE_ENV !== "production" && b.type.__hmrId && oh(b);
    const {
      bum: q,
      scope: j,
      job: H,
      subTree: Q,
      um: G,
      m: K,
      a: z,
      parent: oe,
      slots: { __: Z }
    } = b;
    co(K), co(z), q && Cn(q), oe && J(Z) && Z.forEach((se) => {
      oe.renderCache[se] = void 0;
    }), j.stop(), H && (H.flags |= 8, yn(Q, b, D, F)), G && He(G, D), He(() => {
      b.isUnmounted = !0;
    }, D), D && D.pendingBranch && !D.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === D.pendingId && (D.deps--, D.deps === 0 && D.resolve()), x.NODE_ENV !== "production" && dh(b);
  }, Bs = (b, D, F, q = !1, j = !1, H = 0) => {
    for (let Q = H; Q < b.length; Q++)
      yn(b[Q], D, F, q, j);
  }, Dr = (b) => {
    if (b.shapeFlag & 6)
      return Dr(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const D = p(b.anchor || b.el), F = D && D[mu];
    return F ? p(F) : D;
  };
  let Xo = !1;
  const ea = (b, D, F) => {
    b == null ? D._vnode && yn(D._vnode, null, null, !0) : m(
      D._vnode || null,
      b,
      D,
      null,
      null,
      null,
      F
    ), D._vnode = b, Xo || (Xo = !0, da(), ro(), Xo = !1);
  }, as = {
    p: m,
    um: yn,
    m: Ot,
    r: Yo,
    mt: A,
    mc: _,
    pc: he,
    pbc: R,
    n: Dr,
    o: e
  };
  let Qo, Zo;
  return t && ([Qo, Zo] = t(
    as
  )), {
    render: ea,
    hydrate: Qo,
    createApp: mm(ea, Qo)
  };
}
function ui({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Fn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (J(s) && J(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = Sn(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && sr(i, l)), l.type === en && (l.el = i.el), l.type === $e && !l.el && (l.el = i.el), x.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Am(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < d ? o = l + 1 : i = l;
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Xu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xu(t);
}
function co(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Qu = Symbol.for("v-scx"), Zu = () => {
  {
    const e = nr(Qu);
    return e || x.NODE_ENV !== "production" && B(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function $m(e, t) {
  return Nr(e, null, t);
}
function Vm(e, t) {
  return Nr(
    e,
    null,
    x.NODE_ENV !== "production" ? fe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function ed(e, t) {
  return Nr(
    e,
    null,
    x.NODE_ENV !== "production" ? fe({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Zt(e, t, n) {
  return x.NODE_ENV !== "production" && !re(t) && B(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Nr(e, t, n);
}
function Nr(e, t, n = pe) {
  const { immediate: s, deep: r, flush: o, once: i } = n;
  x.NODE_ENV !== "production" && !t && (s !== void 0 && B(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && B(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && B(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = fe({}, n);
  x.NODE_ENV !== "production" && (l.onWarn = B);
  const a = t && s || !t && o !== "post";
  let d;
  if (Ss) {
    if (o === "sync") {
      const h = Zu();
      d = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = Ae, h.resume = Ae, h.pause = Ae, h;
    }
  }
  const c = ze;
  l.call = (h, g, m) => It(h, c, g, m);
  let u = !1;
  o === "post" ? l.scheduler = (h) => {
    He(h, c && c.suspense);
  } : o !== "sync" && (u = !0, l.scheduler = (h, g) => {
    g ? h() : Po(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, c && (h.id = c.uid, h.i = c));
  };
  const p = Jp(e, t, l);
  return Ss && (d ? d.push(p) : a && p()), p;
}
function Im(e, t, n) {
  const s = this.proxy, r = le(e) ? e.includes(".") ? td(s, e) : () => s[e] : e.bind(s, s);
  let o;
  re(t) ? o = t : (o = t.handler, n = t);
  const i = ss(this), l = Nr(r, o.bind(s), n);
  return i(), l;
}
function td(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function Mm(e, t, n = pe) {
  const s = it();
  if (x.NODE_ENV !== "production" && !s)
    return B("useModel() called without active instance."), ne();
  const r = Ce(t);
  if (x.NODE_ENV !== "production" && !s.propsOptions[0][r])
    return B(`useModel() called with prop "${t}" which is not declared.`), ne();
  const o = et(t), i = nd(e, r), l = ru((a, d) => {
    let c, u = pe, p;
    return ed(() => {
      const h = e[r];
      ct(c, h) && (c = h, d());
    }), {
      get() {
        return a(), n.get ? n.get(c) : c;
      },
      set(h) {
        const g = n.set ? n.set(h) : h;
        if (!ct(g, c) && !(u !== pe && ct(h, u)))
          return;
        const m = s.vnode.props;
        m && // check if parent has passed v-model
        (t in m || r in m || o in m) && (`onUpdate:${t}` in m || `onUpdate:${r}` in m || `onUpdate:${o}` in m) || (c = h, d()), s.emit(`update:${t}`, g), ct(h, g) && ct(h, u) && !ct(g, p) && d(), u = h, p = g;
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
const nd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ce(t)}Modifiers`] || e[`${et(t)}Modifiers`];
function Pm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  if (x.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [u]
    } = e;
    if (c)
      if (!(t in c))
        (!u || !(Xt(Ce(t)) in u)) && B(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xt(Ce(t))}" prop.`
        );
      else {
        const p = c[t];
        re(p) && (p(...n) || B(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const o = t.startsWith("update:"), i = o && nd(s, t.slice(7));
  if (i && (i.trim && (r = n.map((c) => le(c) ? c.trim() : c)), i.number && (r = n.map(Qr))), x.NODE_ENV !== "production" && hh(e, t, r), x.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && s[Xt(c)] && B(
      `Event "${c}" is emitted in component ${qo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${et(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Xt(t)] || // also try camelCase event handler (#2249)
  s[l = Xt(Ce(t))];
  !a && o && (a = s[l = Xt(et(t))]), a && It(
    a,
    e,
    6,
    r
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, It(
      d,
      e,
      6,
      r
    );
  }
}
function sd(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!re(e)) {
    const a = (d) => {
      const c = sd(d, t, !0);
      c && (l = !0, fe(i, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (ge(e) && s.set(e, null), null) : (J(o) ? o.forEach((a) => i[a] = null) : fe(i, o), ge(e) && s.set(e, i), i);
}
function jo(e, t) {
  return !e || !hn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, et(t)) || ve(e, t));
}
let Di = !1;
function uo() {
  Di = !0;
}
function qr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: a,
    render: d,
    renderCache: c,
    props: u,
    data: p,
    setupState: h,
    ctx: g,
    inheritAttrs: m
  } = e, I = fr(e);
  let M, P;
  x.NODE_ENV !== "production" && (Di = !1);
  try {
    if (n.shapeFlag & 4) {
      const v = r || s, E = x.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(v, {
        get(V, k, _) {
          return B(
            `Property '${String(
              k
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(V, k, _);
        }
      }) : v;
      M = dt(
        d.call(
          E,
          v,
          c,
          x.NODE_ENV !== "production" ? Ft(u) : u,
          h,
          p,
          g
        )
      ), P = l;
    } else {
      const v = t;
      x.NODE_ENV !== "production" && l === u && uo(), M = dt(
        v.length > 1 ? v(
          x.NODE_ENV !== "production" ? Ft(u) : u,
          x.NODE_ENV !== "production" ? {
            get attrs() {
              return uo(), Ft(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : v(
          x.NODE_ENV !== "production" ? Ft(u) : u,
          null
        )
      ), P = t.props ? l : Rm(l);
    }
  } catch (v) {
    rr.length = 0, Pn(v, e, 1), M = ue($e);
  }
  let y = M, S;
  if (x.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && ([y, S] = rd(M)), P && m !== !1) {
    const v = Object.keys(P), { shapeFlag: E } = y;
    if (v.length) {
      if (E & 7)
        o && v.some(Xr) && (P = Lm(
          P,
          o
        )), y = Mt(y, P, !1, !0);
      else if (x.NODE_ENV !== "production" && !Di && y.type !== $e) {
        const V = Object.keys(l), k = [], _ = [];
        for (let O = 0, R = V.length; O < R; O++) {
          const w = V[O];
          hn(w) ? Xr(w) || k.push(w[2].toLowerCase() + w.slice(3)) : _.push(w);
        }
        _.length && B(
          `Extraneous non-props attributes (${_.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), k.length && B(
          `Extraneous non-emits event listeners (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (x.NODE_ENV !== "production" && !Oa(y) && B(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), y = Mt(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (x.NODE_ENV !== "production" && !Oa(y) && B(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), mn(y, n.transition)), x.NODE_ENV !== "production" && S ? S(y) : M = y, fr(I), M;
}
const rd = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ho(t, !1);
  if (s) {
    if (x.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return rd(s);
  } else return [e, void 0];
  const r = t.indexOf(s), o = n ? n.indexOf(s) : -1, i = (l) => {
    t[r] = l, n && (o > -1 ? n[o] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [dt(s), i];
};
function Ho(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (sn(r)) {
      if (r.type !== $e || r.children === "v-if") {
        if (n)
          return;
        if (n = r, x.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ho(n.children);
      }
    } else
      return;
  }
  return n;
}
const Rm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lm = (e, t) => {
  const n = {};
  for (const s in e)
    (!Xr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Oa = (e) => e.shapeFlag & 7 || e.type === $e;
function Fm(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: a } = t, d = o.emitsOptions;
  if (x.NODE_ENV !== "production" && (r || l) && Bt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Da(s, i, d) : !!i;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let u = 0; u < c.length; u++) {
        const p = c[u];
        if (i[p] !== s[p] && !jo(d, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Da(s, i, d) : !0 : !!i;
  return !1;
}
function Da(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !jo(n, o))
      return !0;
  }
  return !1;
}
function Uo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const fo = (e) => e.__isSuspense;
let Ti = 0;
const Bm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, r, o, i, l, a, d) {
    if (e == null)
      Hm(
        t,
        n,
        s,
        r,
        o,
        i,
        l,
        a,
        d
      );
    else {
      if (o && o.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Um(
        e,
        t,
        n,
        s,
        r,
        i,
        l,
        a,
        d
      );
    }
  },
  hydrate: qm,
  normalize: zm
}, jm = Bm;
function hr(e, t) {
  const n = e.props && e.props[t];
  re(n) && n();
}
function Hm(e, t, n, s, r, o, i, l, a) {
  const {
    p: d,
    o: { createElement: c }
  } = a, u = c("div"), p = e.suspense = od(
    e,
    r,
    s,
    t,
    u,
    n,
    o,
    i,
    l,
    a
  );
  d(
    null,
    p.pendingBranch = e.ssContent,
    u,
    null,
    s,
    p,
    o,
    i
  ), p.deps > 0 ? (hr(e, "onPending"), hr(e, "onFallback"), d(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    o,
    i
  ), ys(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Um(e, t, n, s, r, o, i, l, { p: a, um: d, o: { createElement: c } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, h = t.ssFallback, { activeBranch: g, pendingBranch: m, isInFallback: I, isHydrating: M } = u;
  if (m)
    u.pendingBranch = p, Lt(p, m) ? (a(
      m,
      p,
      u.hiddenContainer,
      null,
      r,
      u,
      o,
      i,
      l
    ), u.deps <= 0 ? u.resolve() : I && (M || (a(
      g,
      h,
      n,
      s,
      r,
      null,
      // fallback tree will not have suspense context
      o,
      i,
      l
    ), ys(u, h)))) : (u.pendingId = Ti++, M ? (u.isHydrating = !1, u.activeBranch = m) : d(m, r, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = c("div"), I ? (a(
      null,
      p,
      u.hiddenContainer,
      null,
      r,
      u,
      o,
      i,
      l
    ), u.deps <= 0 ? u.resolve() : (a(
      g,
      h,
      n,
      s,
      r,
      null,
      // fallback tree will not have suspense context
      o,
      i,
      l
    ), ys(u, h))) : g && Lt(p, g) ? (a(
      g,
      p,
      n,
      s,
      r,
      u,
      o,
      i,
      l
    ), u.resolve(!0)) : (a(
      null,
      p,
      u.hiddenContainer,
      null,
      r,
      u,
      o,
      i,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (g && Lt(p, g))
    a(
      g,
      p,
      n,
      s,
      r,
      u,
      o,
      i,
      l
    ), ys(u, p);
  else if (hr(t, "onPending"), u.pendingBranch = p, p.shapeFlag & 512 ? u.pendingId = p.component.suspenseId : u.pendingId = Ti++, a(
    null,
    p,
    u.hiddenContainer,
    null,
    r,
    u,
    o,
    i,
    l
  ), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: P, pendingId: y } = u;
    P > 0 ? setTimeout(() => {
      u.pendingId === y && u.fallback(h);
    }, P) : P === 0 && u.fallback(h);
  }
}
let Ta = !1;
function od(e, t, n, s, r, o, i, l, a, d, c = !1) {
  x.NODE_ENV !== "production" && !Ta && (Ta = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: u,
    m: p,
    um: h,
    n: g,
    o: { parentNode: m, remove: I }
  } = d;
  let M;
  const P = Wm(e);
  P && t && t.pendingBranch && (M = t.pendingId, t.deps++);
  const y = e.props ? Zr(e.props.timeout) : void 0;
  x.NODE_ENV !== "production" && fl(y, "Suspense timeout");
  const S = o, v = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: i,
    container: s,
    hiddenContainer: r,
    deps: 0,
    pendingId: Ti++,
    timeout: typeof y == "number" ? y : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !c,
    isHydrating: c,
    isUnmounted: !1,
    effects: [],
    resolve(E = !1, V = !1) {
      if (x.NODE_ENV !== "production") {
        if (!E && !v.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (v.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: k,
        activeBranch: _,
        pendingBranch: O,
        pendingId: R,
        effects: w,
        parentComponent: $,
        container: T
      } = v;
      let A = !1;
      v.isHydrating ? v.isHydrating = !1 : E || (A = _ && O.transition && O.transition.mode === "out-in", A && (_.transition.afterLeave = () => {
        R === v.pendingId && (p(
          O,
          T,
          o === S ? g(_) : o,
          0
        ), xs(w));
      }), _ && (m(_.el) === T && (o = g(_)), h(_, $, v, !0)), A || p(O, T, o, 0)), ys(v, O), v.pendingBranch = null, v.isInFallback = !1;
      let L = v.parent, X = !1;
      for (; L; ) {
        if (L.pendingBranch) {
          L.effects.push(...w), X = !0;
          break;
        }
        L = L.parent;
      }
      !X && !A && xs(w), v.effects = [], P && t && t.pendingBranch && M === t.pendingId && (t.deps--, t.deps === 0 && !V && t.resolve()), hr(k, "onResolve");
    },
    fallback(E) {
      if (!v.pendingBranch)
        return;
      const { vnode: V, activeBranch: k, parentComponent: _, container: O, namespace: R } = v;
      hr(V, "onFallback");
      const w = g(k), $ = () => {
        v.isInFallback && (u(
          null,
          E,
          O,
          w,
          _,
          null,
          // fallback tree will not have suspense context
          R,
          l,
          a
        ), ys(v, E));
      }, T = E.transition && E.transition.mode === "out-in";
      T && (k.transition.afterLeave = $), v.isInFallback = !0, h(
        k,
        _,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), T || $();
    },
    move(E, V, k) {
      v.activeBranch && p(v.activeBranch, E, V, k), v.container = E;
    },
    next() {
      return v.activeBranch && g(v.activeBranch);
    },
    registerDep(E, V, k) {
      const _ = !!v.pendingBranch;
      _ && v.deps++;
      const O = E.vnode.el;
      E.asyncDep.catch((R) => {
        Pn(R, E, 0);
      }).then((R) => {
        if (E.isUnmounted || v.isUnmounted || v.pendingId !== E.suspenseId)
          return;
        E.asyncResolved = !0;
        const { vnode: w } = E;
        x.NODE_ENV !== "production" && hs(w), Pi(E, R, !1), O && (w.el = O);
        const $ = !O && E.subTree.el;
        V(
          E,
          w,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          m(O || E.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          O ? null : g(E.subTree),
          v,
          i,
          k
        ), $ && I($), Uo(E, w.el), x.NODE_ENV !== "production" && ms(), _ && --v.deps === 0 && v.resolve();
      });
    },
    unmount(E, V) {
      v.isUnmounted = !0, v.activeBranch && h(
        v.activeBranch,
        n,
        E,
        V
      ), v.pendingBranch && h(
        v.pendingBranch,
        n,
        E,
        V
      );
    }
  };
  return v;
}
function qm(e, t, n, s, r, o, i, l, a) {
  const d = t.suspense = od(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    r,
    o,
    i,
    l,
    !0
  ), c = a(
    e,
    d.pendingBranch = t.ssContent,
    n,
    d,
    o,
    i
  );
  return d.deps === 0 && d.resolve(!1, !0), c;
}
function zm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Aa(
    s ? n.default : n
  ), e.ssFallback = s ? Aa(n.fallback) : ue($e);
}
function Aa(e) {
  let t;
  if (re(e)) {
    const n = ns && e._c;
    n && (e._d = !1, N()), e = e(), n && (e._d = !0, t = tt, ld());
  }
  if (J(e)) {
    const n = Ho(e);
    x.NODE_ENV !== "production" && !n && e.filter((s) => s !== El).length > 0 && B("<Suspense> slots expect a single root node."), e = n;
  }
  return e = dt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function id(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : xs(e);
}
function ys(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let r = t.el;
  for (; !r && t.component; )
    t = t.component.subTree, r = t.el;
  n.el = r, s && s.subTree === n && (s.vnode.el = r, Uo(s, r));
}
function Wm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ie = Symbol.for("v-fgt"), en = Symbol.for("v-txt"), $e = Symbol.for("v-cmt"), $n = Symbol.for("v-stc"), rr = [];
let tt = null;
function N(e = !1) {
  rr.push(tt = e ? null : []);
}
function ld() {
  rr.pop(), tt = rr[rr.length - 1] || null;
}
let ns = 1;
function Ai(e, t = !1) {
  ns += e, e < 0 && tt && t && (tt.hasOnce = !0);
}
function ad(e) {
  return e.dynamicChildren = ns > 0 ? tt || ps : null, ld(), ns > 0 && tt && tt.push(e), e;
}
function C(e, t, n, s, r, o) {
  return ad(
    f(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function St(e, t, n, s, r) {
  return ad(
    ue(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  if (x.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Hr.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let $i;
function Km(e) {
  $i = e;
}
const Gm = (...e) => ud(
  ...$i ? $i(e, Be) : e
), cd = ({ key: e }) => e ?? null, zr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || Me(e) || re(e) ? { i: Be, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, r = null, o = e === ie ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cd(t),
    ref: t && zr(t),
    scopeId: Ro,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Be
  };
  return l ? (Dl(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), x.NODE_ENV !== "production" && a.key !== a.key && B("VNode created with invalid key (NaN). VNode type:", a.type), ns > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && tt.push(a), a;
}
const ue = x.NODE_ENV !== "production" ? Gm : ud;
function ud(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === El) && (x.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = $e), sn(e)) {
    const l = Mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Dl(l, n), ns > 0 && !o && tt && (l.shapeFlag & 6 ? tt[tt.indexOf(e)] = l : tt.push(l)), l.patchFlag = -2, l;
  }
  if (_d(e) && (e = e.__vccOpts), t) {
    t = dd(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = _e(l)), ge(a) && (ws(a) && !J(a) && (a = fe({}, a)), t.style = je(a));
  }
  const i = le(e) ? 1 : fo(e) ? 128 : gu(e) ? 64 : ge(e) ? 4 : re(e) ? 2 : 0;
  return x.NODE_ENV !== "production" && i & 4 && ws(e) && (e = ce(e), B(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), f(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function dd(e) {
  return e ? ws(e) || ju(e) ? fe({}, e) : e : null;
}
function Mt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: a } = e, d = t ? pd(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && cd(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? J(o) ? o.concat(zr(t)) : [o, zr(t)] : zr(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: x.NODE_ENV !== "production" && i === -1 && J(l) ? l.map(fd) : l,
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
    ssContent: e.ssContent && Mt(e.ssContent),
    ssFallback: e.ssFallback && Mt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && mn(
    c,
    a.clone(c)
  ), c;
}
function fd(e) {
  const t = Mt(e);
  return J(e.children) && (t.children = e.children.map(fd)), t;
}
function pt(e = " ", t = 0) {
  return ue(en, null, e, t);
}
function Fs(e, t) {
  const n = ue($n, null, e);
  return n.staticCount = t, n;
}
function U(e = "", t = !1) {
  return t ? (N(), St($e, null, e)) : ue($e, null, e);
}
function dt(e) {
  return e == null || typeof e == "boolean" ? ue($e) : J(e) ? ue(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : sn(e) ? Sn(e) : ue(en, null, String(e));
}
function Sn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mt(e);
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
      const r = t.default;
      r && (r._c && (r._d = !1), Dl(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ju(t) ? t._ctx = Be : r === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else re(t) ? (t = { default: t, _ctx: Be }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [pt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pd(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = _e([t.class, s.class]));
      else if (r === "style")
        t.style = je([t.style, s.style]);
      else if (hn(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(J(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function vt(e, t, n, s = null) {
  It(e, t, 7, [
    n,
    s
  ]);
}
const Jm = Ru();
let Ym = 0;
function hd(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Jm, o = {
    uid: Ym++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new il(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Uu(s, r),
    emitsOptions: sd(s, r),
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
  return x.NODE_ENV !== "production" ? o.ctx = Wh(o) : o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Pm.bind(null, o), e.ce && e.ce(o), o;
}
let ze = null;
const it = () => ze || Be;
let po, Vi;
{
  const e = Er(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  po = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ze = n
  ), Vi = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ss = n
  );
}
const ss = (e) => {
  const t = ze;
  return po(e), e.scope.on(), () => {
    e.scope.off(), po(t);
  };
}, Ii = () => {
  ze && ze.scope.off(), po(null);
}, Xm = /* @__PURE__ */ Ke("slot,component");
function Mi(e, { isNativeTag: t }) {
  (Xm(e) || t(e)) && B(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function md(e) {
  return e.vnode.shapeFlag & 4;
}
let Ss = !1;
function gd(e, t = !1, n = !1) {
  t && Vi(t);
  const { props: s, children: r } = e.vnode, o = md(e);
  vm(e, s, o, t), Om(e, r, n || t);
  const i = o ? Qm(e, t) : void 0;
  return t && Vi(!1), i;
}
function Qm(e, t) {
  var n;
  const s = e.type;
  if (x.NODE_ENV !== "production") {
    if (s.name && Mi(s.name, e.appContext.config), s.components) {
      const o = Object.keys(s.components);
      for (let i = 0; i < o.length; i++)
        Mi(o[i], e.appContext.config);
    }
    if (s.directives) {
      const o = Object.keys(s.directives);
      for (let i = 0; i < o.length; i++)
        hu(o[i]);
    }
    s.compilerOptions && Tl() && B(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, tr), x.NODE_ENV !== "production" && Kh(e);
  const { setup: r } = s;
  if (r) {
    qt();
    const o = e.setupContext = r.length > 1 ? bd(e) : null, i = ss(e), l = is(
      r,
      e,
      0,
      [
        x.NODE_ENV !== "production" ? Ft(e.props) : e.props,
        o
      ]
    ), a = ko(l);
    if (zt(), i(), (a || e.sp) && !An(e) && bl(e), a) {
      if (l.then(Ii, Ii), t)
        return l.then((d) => {
          Pi(e, d, t);
        }).catch((d) => {
          Pn(d, e, 0);
        });
      if (e.asyncDep = l, x.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = s.name) != null ? n : "Anonymous";
        B(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Pi(e, l, t);
  } else
    yd(e, t);
}
function Pi(e, t, n) {
  re(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? (x.NODE_ENV !== "production" && sn(t) && B(
    "setup() should not return VNodes directly - return a render function instead."
  ), x.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = dl(t), x.NODE_ENV !== "production" && Gh(e)) : x.NODE_ENV !== "production" && t !== void 0 && B(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), yd(e, n);
}
let or, Ri;
function vd(e) {
  or = e, Ri = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, zh));
  };
}
const Tl = () => !or;
function yd(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && or && !s.render) {
      const r = s.template || kl(e).template;
      if (r) {
        x.NODE_ENV !== "production" && on(e, "compile");
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, d = fe(
          fe(
            {
              isCustomElement: o,
              delimiters: l
            },
            i
          ),
          a
        );
        s.render = or(r, d), x.NODE_ENV !== "production" && ln(e, "compile");
      }
    }
    e.render = s.render || Ae, Ri && Ri(e);
  }
  {
    const r = ss(e);
    qt();
    try {
      cm(e);
    } finally {
      zt(), r();
    }
  }
  x.NODE_ENV !== "production" && !s.render && e.render === Ae && !t && (!or && s.template ? B(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : B("Component is missing template or render function: ", s));
}
const $a = x.NODE_ENV !== "production" ? {
  get(e, t) {
    return uo(), Ue(e, "get", ""), e[t];
  },
  set() {
    return B("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return B("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ue(e, "get", ""), e[t];
  }
};
function Zm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Ue(e, "get", "$slots"), t[n];
    }
  });
}
function bd(e) {
  const t = (n) => {
    if (x.NODE_ENV !== "production" && (e.exposed && B("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (J(n) ? s = "array" : Me(n) && (s = "ref")), s !== "object" && B(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (x.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, $a));
      },
      get slots() {
        return s || (s = Zm(e));
      },
      get emit() {
        return (r, ...o) => e.emit(r, ...o);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, $a),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Sr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dl(tu(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Yn)
        return Yn[n](e);
    },
    has(t, n) {
      return n in t || n in Yn;
    }
  })) : e.proxy;
}
const eg = /(?:^|[-_])(\w)/g, tg = (e) => e.replace(eg, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ks(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qo(e, t, n = !1) {
  let s = ks(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? tg(s) : n ? "App" : "Anonymous";
}
function _d(e) {
  return re(e) && "__vccOpts" in e;
}
const te = (e, t) => {
  const n = zp(e, t, Ss);
  if (x.NODE_ENV !== "production") {
    const s = it();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Ed(e, t, n) {
  const s = arguments.length;
  return s === 2 ? ge(t) && !J(t) ? sn(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && sn(n) && (n = [n]), ue(e, t, n));
}
function wd() {
  if (x.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!ge(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Me(u)) {
        qt();
        const p = u.value;
        return zt(), [
          "div",
          {},
          ["span", e, c(u)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (fn(u))
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
          ...o(u.$)
        ];
    }
  };
  function o(u) {
    const p = [];
    u.type.props && u.props && p.push(i("props", ce(u.props))), u.setupState !== pe && p.push(i("setup", u.setupState)), u.data !== pe && p.push(i("data", ce(u.data)));
    const h = a(u, "computed");
    h && p.push(i("computed", h));
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", s, u] : ge(u) ? ["object", { object: p ? ce(u) : u }] : ["span", n, String(u)];
  }
  function a(u, p) {
    const h = u.type;
    if (re(h))
      return;
    const g = {};
    for (const m in u.ctx)
      d(h, m, p) && (g[m] = u.ctx[m]);
    return g;
  }
  function d(u, p, h) {
    const g = u[h];
    if (J(g) && g.includes(p) || ge(g) && p in g || u.extends && d(u.extends, p, h) || u.mixins && u.mixins.some((m) => d(m, p, h)))
      return !0;
  }
  function c(u) {
    return nt(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function ng(e, t, n, s) {
  const r = n[s];
  if (r && xd(r, e))
    return r;
  const o = t();
  return o.memo = e.slice(), o.cacheIndex = s, n[s] = o;
}
function xd(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (ct(n[s], t[s]))
      return !1;
  return ns > 0 && tt && tt.push(e), !0;
}
const Li = "3.5.18", Ie = x.NODE_ENV !== "production" ? B : Ae, sg = Mo, rg = Rt, og = hl, ig = {
  createComponentInstance: hd,
  setupComponent: gd,
  renderComponentRoot: qr,
  setCurrentRenderingInstance: fr,
  isVNode: sn,
  normalizeVNode: dt,
  getComponentPublicInstance: Sr,
  ensureValidVNode: Nl,
  pushWarningContext: hs,
  popWarningContext: ms
}, lg = ig, ag = null, cg = null, ug = null;
var ke = {};
let Fi;
const Va = typeof window < "u" && window.trustedTypes;
if (Va)
  try {
    Fi = /* @__PURE__ */ Va.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ke.NODE_ENV !== "production" && Ie(`Error creating trusted types policy: ${e}`);
  }
const Nd = Fi ? (e) => Fi.createHTML(e) : (e) => e, dg = "http://www.w3.org/2000/svg", fg = "http://www.w3.org/1998/Math/MathML", cn = typeof document < "u" ? document : null, Ia = cn && /* @__PURE__ */ cn.createElement("template"), pg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? cn.createElementNS(dg, e) : t === "mathml" ? cn.createElementNS(fg, e) : n ? cn.createElement(e, { is: n }) : cn.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => cn.createTextNode(e),
  createComment: (e) => cn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => cn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Ia.innerHTML = Nd(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ia.content;
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
}, bn = "transition", qs = "animation", Cs = Symbol("_vtc"), Sd = {
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
  vl,
  Sd
), hg = (e) => (e.displayName = "Transition", e.props = kd, e), ft = /* @__PURE__ */ hg(
  (e, { slots: t }) => Ed(Eu, Cd(e), t)
), Bn = (e, t = []) => {
  J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ma = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Cd(e) {
  const t = {};
  for (const w in e)
    w in Sd || (t[w] = e[w]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = o,
    appearActiveClass: d = i,
    appearToClass: c = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, g = mg(r), m = g && g[0], I = g && g[1], {
    onBeforeEnter: M,
    onEnter: P,
    onEnterCancelled: y,
    onLeave: S,
    onLeaveCancelled: v,
    onBeforeAppear: E = M,
    onAppear: V = P,
    onAppearCancelled: k = y
  } = t, _ = (w, $, T, A) => {
    w._enterCancelled = A, En(w, $ ? c : l), En(w, $ ? d : i), T && T();
  }, O = (w, $) => {
    w._isLeaving = !1, En(w, u), En(w, h), En(w, p), $ && $();
  }, R = (w) => ($, T) => {
    const A = w ? V : P, L = () => _($, w, T);
    Bn(A, [$, L]), Pa(() => {
      En($, w ? a : o), Gt($, w ? c : l), Ma(A) || Ra($, s, m, L);
    });
  };
  return fe(t, {
    onBeforeEnter(w) {
      Bn(M, [w]), Gt(w, o), Gt(w, i);
    },
    onBeforeAppear(w) {
      Bn(E, [w]), Gt(w, a), Gt(w, d);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(w, $) {
      w._isLeaving = !0;
      const T = () => O(w, $);
      Gt(w, u), w._enterCancelled ? (Gt(w, p), Bi()) : (Bi(), Gt(w, p)), Pa(() => {
        w._isLeaving && (En(w, u), Gt(w, h), Ma(S) || Ra(w, s, I, T));
      }), Bn(S, [w, T]);
    },
    onEnterCancelled(w) {
      _(w, !1, void 0, !0), Bn(y, [w]);
    },
    onAppearCancelled(w) {
      _(w, !0, void 0, !0), Bn(k, [w]);
    },
    onLeaveCancelled(w) {
      O(w), Bn(v, [w]);
    }
  });
}
function mg(e) {
  if (e == null)
    return null;
  if (ge(e))
    return [di(e.enter), di(e.leave)];
  {
    const t = di(e);
    return [t, t];
  }
}
function di(e) {
  const t = Zr(e);
  return ke.NODE_ENV !== "production" && fl(t, "<transition> explicit duration"), t;
}
function Gt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Cs] || (e[Cs] = /* @__PURE__ */ new Set())).add(t);
}
function En(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Cs];
  n && (n.delete(t), n.size || (e[Cs] = void 0));
}
function Pa(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gg = 0;
function Ra(e, t, n, s) {
  const r = e._endId = ++gg, o = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: l, propCount: a } = Od(e, t);
  if (!i)
    return s();
  const d = i + "end";
  let c = 0;
  const u = () => {
    e.removeEventListener(d, p), o();
  }, p = (h) => {
    h.target === e && ++c >= a && u();
  };
  setTimeout(() => {
    c < a && u();
  }, l + 1), e.addEventListener(d, p);
}
function Od(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), r = s(`${bn}Delay`), o = s(`${bn}Duration`), i = La(r, o), l = s(`${qs}Delay`), a = s(`${qs}Duration`), d = La(l, a);
  let c = null, u = 0, p = 0;
  t === bn ? i > 0 && (c = bn, u = i, p = o.length) : t === qs ? d > 0 && (c = qs, u = d, p = a.length) : (u = Math.max(i, d), c = u > 0 ? i > d ? bn : qs : null, p = c ? c === bn ? o.length : a.length : 0);
  const h = c === bn && /\b(transform|all)(,|$)/.test(
    s(`${bn}Property`).toString()
  );
  return {
    type: c,
    timeout: u,
    propCount: p,
    hasTransform: h
  };
}
function La(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Fa(n) + Fa(e[s])));
}
function Fa(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bi() {
  return document.body.offsetHeight;
}
function vg(e, t, n) {
  const s = e[Cs];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ho = Symbol("_vod"), Dd = Symbol("_vsh"), Al = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[ho] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zs(e, t);
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
ke.NODE_ENV !== "production" && (Al.name = "show");
function zs(e, t) {
  e.style.display = t ? e[ho] : "none", e[Dd] = !t;
}
function yg() {
  Al.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Td = Symbol(ke.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function bg(e) {
  const t = it();
  if (!t) {
    ke.NODE_ENV !== "production" && Ie("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (r = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((o) => mo(o, r));
  };
  ke.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const r = e(t.proxy);
    t.ce ? mo(t.ce, r) : ji(t.subTree, r), n(r);
  };
  _l(() => {
    xs(s);
  }), ot(() => {
    Zt(s, Ae, { flush: "post" });
    const r = new MutationObserver(s);
    r.observe(t.subTree.el.parentNode, { childList: !0 }), vn(() => r.disconnect());
  });
}
function ji(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      ji(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    mo(e.el, t);
  else if (e.type === ie)
    e.children.forEach((n) => ji(n, t));
  else if (e.type === $n) {
    let { el: n, anchor: s } = e;
    for (; n && (mo(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function mo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const r in t) {
      const o = Rc(t[r]);
      n.setProperty(`--${r}`, o), s += `--${r}: ${o};`;
    }
    n[Td] = s;
  }
}
const _g = /(^|;)\s*display\s*:/;
function Eg(e, t, n) {
  const s = e.style, r = le(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Wr(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Wr(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), Wr(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Td];
      i && (n += ";" + i), s.cssText = n, o = _g.test(n);
    }
  } else t && e.removeAttribute("style");
  ho in e && (e[ho] = o ? s.display : "", e[Dd] && (s.display = "none"));
}
const wg = /[^\\];\s*$/, Ba = /\s*!important$/;
function Wr(e, t, n) {
  if (J(n))
    n.forEach((s) => Wr(e, t, s));
  else if (n == null && (n = ""), ke.NODE_ENV !== "production" && wg.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = xg(e, t);
    Ba.test(n) ? e.setProperty(
      et(s),
      n.replace(Ba, ""),
      "important"
    ) : e[s] = n;
  }
}
const ja = ["Webkit", "Moz", "ms"], fi = {};
function xg(e, t) {
  const n = fi[t];
  if (n)
    return n;
  let s = Ce(t);
  if (s !== "filter" && s in e)
    return fi[t] = s;
  s = nn(s);
  for (let r = 0; r < ja.length; r++) {
    const o = ja[r] + s;
    if (o in e)
      return fi[t] = o;
  }
  return t;
}
const Ha = "http://www.w3.org/1999/xlink";
function Ua(e, t, n, s, r, o = ip(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ha, t.slice(6, t.length)) : e.setAttributeNS(Ha, t, n) : n == null || o && !ol(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : _t(n) ? String(n) : n
  );
}
function qa(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Nd(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
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
    l === "boolean" ? n = ol(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ke.NODE_ENV !== "production" && !i && Ie(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(r || t);
}
function dn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ng(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const za = Symbol("_vei");
function Sg(e, t, n, s, r = null) {
  const o = e[za] || (e[za] = {}), i = o[t];
  if (s && i)
    i.value = ke.NODE_ENV !== "production" ? Ka(s, t) : s;
  else {
    const [l, a] = kg(t);
    if (s) {
      const d = o[t] = Dg(
        ke.NODE_ENV !== "production" ? Ka(s, t) : s,
        r
      );
      dn(e, l, d, a);
    } else i && (Ng(e, l, i, a), o[t] = void 0);
  }
}
const Wa = /(?:Once|Passive|Capture)$/;
function kg(e) {
  let t;
  if (Wa.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Wa); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let pi = 0;
const Cg = /* @__PURE__ */ Promise.resolve(), Og = () => pi || (Cg.then(() => pi = 0), pi = Date.now());
function Dg(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    It(
      Tg(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Og(), n;
}
function Ka(e, t) {
  return re(e) || J(e) ? e : (Ie(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Ae);
}
function Tg(e, t) {
  if (J(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const Ga = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ag = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? vg(e, s, i) : t === "style" ? Eg(e, n, s) : hn(t) ? Xr(t) || Sg(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $g(e, t, s, i)) ? (qa(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ua(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? qa(e, Ce(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ua(e, t, s, i));
};
function $g(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ga(t) && re(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ga(t) && le(n) ? !1 : t in e;
}
const Ja = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kt(e, t, n) {
  const s = /* @__PURE__ */ yl(e, t);
  Co(s) && fe(s, t);
  class r extends zo {
    constructor(i) {
      super(s, i, n);
    }
  }
  return r.def = s, r;
}
/*! #__NO_SIDE_EFFECTS__ */
const Vg = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ kt(e, t, Bd), Ig = typeof HTMLElement < "u" ? HTMLElement : class {
};
class zo extends Ig {
  constructor(t, n = {}, s = Tt) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Tt ? this._root = this.shadowRoot : (ke.NODE_ENV !== "production" && this.shadowRoot && Ie(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof zo) {
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
    this._connected = !1, es(() => {
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
      for (const r of s)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: o, styles: i } = s;
      let l;
      if (o && !J(o))
        for (const a in o) {
          const d = o[a];
          (d === Number || d && d.type === Number) && (a in this._props && (this._props[a] = Zr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ce(a)] = !0);
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
          get: () => wr(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = J(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r]);
    for (const r of s.map(Ce))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Ja;
    const r = Ce(t);
    n && this._numberProps && this._numberProps[r] && (s = Zr(s)), this._setProp(r, s, !1, !0);
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
  _setProp(t, n, s = !0, r = !1) {
    if (n !== this._props[t] && (n === Ja ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), s)) {
      const o = this._ob;
      o && o.disconnect(), n === !0 ? this.setAttribute(et(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(et(t), n + "") : n || this.removeAttribute(et(t)), o && o.observe(this, { attributes: !0 });
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
      this._instance = s, s.ce = this, s.isCE = !0, ke.NODE_ENV !== "production" && (s.ceReload = (o) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(o), this._instance = null, this._update();
      });
      const r = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            Co(i[0]) ? fe({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (o, ...i) => {
        r(o, i), et(o) !== o && r(et(o), i);
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
    for (let r = t.length - 1; r >= 0; r--) {
      const o = document.createElement("style");
      if (s && o.setAttribute("nonce", s), o.textContent = t[r], this.shadowRoot.prepend(o), ke.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(n.__hmrId);
            i || this._childStyles.set(n.__hmrId, i = []), i.push(o);
          }
        } else
          (this._styles || (this._styles = [])).push(o);
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
      const r = t[s], o = r.getAttribute("name") || "default", i = this._slots[o], l = r.parentNode;
      if (i)
        for (const a of i) {
          if (n && a.nodeType === 1) {
            const d = n + "-s", c = document.createTreeWalker(a, 1);
            a.setAttribute(d, "");
            let u;
            for (; u = c.nextNode(); )
              u.setAttribute(d, "");
          }
          l.insertBefore(a, r);
        }
      else
        for (; r.firstChild; ) l.insertBefore(r.firstChild, r);
      l.removeChild(r);
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
function Hi(e) {
  const t = it(), n = t && t.ce;
  return n || (ke.NODE_ENV !== "production" && Ie(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function Mg() {
  const e = ke.NODE_ENV !== "production" ? Hi("useShadowRoot") : Hi();
  return e && e.shadowRoot;
}
function Pg(e = "$style") {
  {
    const t = it();
    if (!t)
      return ke.NODE_ENV !== "production" && Ie("useCssModule must be called inside setup()"), pe;
    const n = t.type.__cssModules;
    if (!n)
      return ke.NODE_ENV !== "production" && Ie("Current instance does not have CSS modules injected."), pe;
    const s = n[e];
    return s || (ke.NODE_ENV !== "production" && Ie(`Current instance does not have CSS module named "${e}".`), pe);
  }
}
const Ad = /* @__PURE__ */ new WeakMap(), $d = /* @__PURE__ */ new WeakMap(), go = Symbol("_moveCb"), Ya = Symbol("_enterCb"), Rg = (e) => (delete e.props.mode, e), Lg = /* @__PURE__ */ Rg({
  name: "TransitionGroup",
  props: /* @__PURE__ */ fe({}, kd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = it(), s = gl();
    let r, o;
    return Bo(() => {
      if (!r.length)
        return;
      const i = e.moveClass || `${e.name || "v"}-move`;
      if (!Ug(
        r[0].el,
        n.vnode.el,
        i
      )) {
        r = [];
        return;
      }
      r.forEach(Bg), r.forEach(jg);
      const l = r.filter(Hg);
      Bi(), l.forEach((a) => {
        const d = a.el, c = d.style;
        Gt(d, i), c.transform = c.webkitTransform = c.transitionDuration = "";
        const u = d[go] = (p) => {
          p && p.target !== d || (!p || /transform$/.test(p.propertyName)) && (d.removeEventListener("transitionend", u), d[go] = null, En(d, i));
        };
        d.addEventListener("transitionend", u);
      }), r = [];
    }), () => {
      const i = ce(e), l = Cd(i);
      let a = i.tag || ie;
      if (r = [], o)
        for (let d = 0; d < o.length; d++) {
          const c = o[d];
          c.el && c.el instanceof Element && (r.push(c), mn(
            c,
            Ns(
              c,
              l,
              s,
              n
            )
          ), Ad.set(
            c,
            c.el.getBoundingClientRect()
          ));
        }
      o = t.default ? Lo(t.default()) : [];
      for (let d = 0; d < o.length; d++) {
        const c = o[d];
        c.key != null ? mn(
          c,
          Ns(c, l, s, n)
        ) : ke.NODE_ENV !== "production" && c.type !== en && Ie("<TransitionGroup> children must be keyed.");
      }
      return ue(a, null, o);
    };
  }
}), Fg = Lg;
function Bg(e) {
  const t = e.el;
  t[go] && t[go](), t[Ya] && t[Ya]();
}
function jg(e) {
  $d.set(e, e.el.getBoundingClientRect());
}
function Hg(e) {
  const t = Ad.get(e), n = $d.get(e), s = t.left - n.left, r = t.top - n.top;
  if (s || r) {
    const o = e.el.style;
    return o.transform = o.webkitTransform = `translate(${s}px,${r}px)`, o.transitionDuration = "0s", e;
  }
}
function Ug(e, t, n) {
  const s = e.cloneNode(), r = e[Cs];
  r && r.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(s);
  const { hasTransform: i } = Od(s);
  return o.removeChild(s), i;
}
const Mn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return J(t) ? (n) => Cn(t, n) : t;
};
function qg(e) {
  e.target.composing = !0;
}
function Xa(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const $t = Symbol("_assign"), Os = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[$t] = Mn(r);
    const o = s || r.props && r.props.type === "number";
    dn(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), o && (l = Qr(l)), e[$t](l);
    }), n && dn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (dn(e, "compositionstart", qg), dn(e, "compositionend", Xa), dn(e, "change", Xa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[$t] = Mn(i), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Qr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, Re = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[$t] = Mn(n), dn(e, "change", () => {
      const s = e._modelValue, r = Ts(e), o = e.checked, i = e[$t];
      if (J(s)) {
        const l = Do(s, r), a = l !== -1;
        if (o && !a)
          i(s.concat(r));
        else if (!o && a) {
          const d = [...s];
          d.splice(l, 1), i(d);
        }
      } else if (os(s)) {
        const l = new Set(s);
        o ? l.add(r) : l.delete(r), i(l);
      } else
        i(Vd(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Qa,
  beforeUpdate(e, t, n) {
    e[$t] = Mn(n), Qa(e, t, n);
  }
};
function Qa(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let r;
  if (J(t))
    r = Do(t, s.props.value) > -1;
  else if (os(t))
    r = t.has(s.props.value);
  else {
    if (t === n) return;
    r = In(t, Vd(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const $l = {
  created(e, { value: t }, n) {
    e.checked = In(t, n.props.value), e[$t] = Mn(n), dn(e, "change", () => {
      e[$t](Ts(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[$t] = Mn(s), t !== n && (e.checked = In(t, s.props.value));
  }
}, Ds = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const r = os(t);
    dn(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Qr(Ts(i)) : Ts(i)
      );
      e[$t](
        e.multiple ? r ? new Set(o) : o : o[0]
      ), e._assigning = !0, es(() => {
        e._assigning = !1;
      });
    }), e[$t] = Mn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Za(e, t);
  },
  beforeUpdate(e, t, n) {
    e[$t] = Mn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Za(e, t);
  }
};
function Za(e, t) {
  const n = e.multiple, s = J(t);
  if (n && !s && !os(t)) {
    ke.NODE_ENV !== "production" && Ie(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let r = 0, o = e.options.length; r < o; r++) {
    const i = e.options[r], l = Ts(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((d) => String(d) === String(l)) : i.selected = Do(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (In(Ts(i), t)) {
      e.selectedIndex !== r && (e.selectedIndex = r);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Ts(e) {
  return "_value" in e ? e._value : e.value;
}
function Vd(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Id = {
  created(e, t, n) {
    Rr(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Rr(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Rr(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Rr(e, t, n, s, "updated");
  }
};
function Md(e, t) {
  switch (e) {
    case "SELECT":
      return Ds;
    case "TEXTAREA":
      return Os;
    default:
      switch (t) {
        case "checkbox":
          return Re;
        case "radio":
          return $l;
        default:
          return Os;
      }
  }
}
function Rr(e, t, n, s, r) {
  const i = Md(
    e.tagName,
    n.props && n.props.type
  )[r];
  i && i(e, t, n, s);
}
function zg() {
  Os.getSSRProps = ({ value: e }) => ({ value: e }), $l.getSSRProps = ({ value: e }, t) => {
    if (t.props && In(t.props.value, e))
      return { checked: !0 };
  }, Re.getSSRProps = ({ value: e }, t) => {
    if (J(e)) {
      if (t.props && Do(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (os(e)) {
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
const Wg = ["ctrl", "shift", "alt", "meta"], Kg = {
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
  exact: (e, t) => Wg.some((n) => e[`${n}Key`] && !t.includes(n))
}, tn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const l = Kg[t[i]];
      if (l && l(r, t)) return;
    }
    return e(r, ...o);
  });
}, Gg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ui = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (r) => {
    if (!("key" in r))
      return;
    const o = et(r.key);
    if (t.some(
      (i) => i === o || Gg[i] === o
    ))
      return e(r);
  });
}, Pd = /* @__PURE__ */ fe({ patchProp: Ag }, pg);
let ir, ec = !1;
function Rd() {
  return ir || (ir = Ku(Pd));
}
function Ld() {
  return ir = ec ? ir : Gu(Pd), ec = !0, ir;
}
const Fd = (...e) => {
  Rd().render(...e);
}, Jg = (...e) => {
  Ld().hydrate(...e);
}, Tt = (...e) => {
  const t = Rd().createApp(...e);
  ke.NODE_ENV !== "production" && (Hd(t), Ud(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = qd(s);
    if (!r) return;
    const o = t._component;
    !re(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, jd(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
}, Bd = (...e) => {
  const t = Ld().createApp(...e);
  ke.NODE_ENV !== "production" && (Hd(t), Ud(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const r = qd(s);
    if (r)
      return n(r, !0, jd(r));
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
    value: (t) => Ac(t) || $c(t) || Vc(t),
    writable: !1
  });
}
function Ud(e) {
  if (Tl()) {
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
let tc = !1;
const Yg = () => {
  tc || (tc = !0, zg(), yg());
}, Xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Eu,
  BaseTransitionPropsValidators: vl,
  Comment: $e,
  DeprecationTypes: ug,
  EffectScope: il,
  ErrorCodes: eh,
  ErrorTypeStrings: sg,
  Fragment: ie,
  KeepAlive: Lh,
  ReactiveEffect: ar,
  Static: $n,
  Suspense: jm,
  Teleport: Rn,
  Text: en,
  TrackOpTypes: Wp,
  Transition: ft,
  TransitionGroup: Fg,
  TriggerOpTypes: Kp,
  VueElement: zo,
  assertNumber: fl,
  callWithAsyncErrorHandling: It,
  callWithErrorHandling: is,
  camelize: Ce,
  capitalize: nn,
  cloneVNode: Mt,
  compatUtils: cg,
  computed: te,
  createApp: Tt,
  createBlock: St,
  createCommentVNode: U,
  createElementBlock: C,
  createElementVNode: f,
  createHydrationRenderer: Gu,
  createPropsRestProxy: im,
  createRenderer: Ku,
  createSSRApp: Bd,
  createSlots: Uh,
  createStaticVNode: Fs,
  createTextVNode: pt,
  createVNode: ue,
  customRef: ru,
  defineAsyncComponent: Ph,
  defineComponent: yl,
  defineCustomElement: kt,
  defineEmits: Yh,
  defineExpose: Xh,
  defineModel: em,
  defineOptions: Qh,
  defineProps: Jh,
  defineSSRCustomElement: Vg,
  defineSlots: Zh,
  devtools: rg,
  effect: mp,
  effectScope: pp,
  getCurrentInstance: it,
  getCurrentScope: ll,
  getCurrentWatcher: Gp,
  getTransitionRawChildren: Lo,
  guardReactiveProps: dd,
  h: Ed,
  handleError: Pn,
  hasInjectionContext: gm,
  hydrate: Jg,
  hydrateOnIdle: Th,
  hydrateOnInteraction: Ih,
  hydrateOnMediaQuery: Vh,
  hydrateOnVisible: $h,
  initCustomFormatter: wd,
  initDirectivesForSSR: Yg,
  inject: nr,
  isMemoSame: xd,
  isProxy: ws,
  isReactive: fn,
  isReadonly: Wt,
  isRef: Me,
  isRuntimeOnly: Tl,
  isShallow: nt,
  isVNode: sn,
  markRaw: tu,
  mergeDefaults: rm,
  mergeModels: om,
  mergeProps: pd,
  nextTick: es,
  normalizeClass: _e,
  normalizeProps: ep,
  normalizeStyle: je,
  onActivated: ku,
  onBeforeMount: Du,
  onBeforeUnmount: Ls,
  onBeforeUpdate: _l,
  onDeactivated: Cu,
  onErrorCaptured: Vu,
  onMounted: ot,
  onRenderTracked: $u,
  onRenderTriggered: Au,
  onScopeDispose: Lc,
  onServerPrefetch: Tu,
  onUnmounted: vn,
  onUpdated: Bo,
  onWatcherCleanup: iu,
  openBlock: N,
  popScopeId: gh,
  provide: Lu,
  proxyRefs: dl,
  pushScopeId: mh,
  queuePostFlushCb: xs,
  reactive: Es,
  readonly: Vo,
  ref: ne,
  registerRuntimeCompiler: vd,
  render: Fd,
  renderList: Ee,
  renderSlot: xl,
  resolveComponent: jh,
  resolveDirective: Hh,
  resolveDynamicComponent: Iu,
  resolveFilter: ag,
  resolveTransitionHooks: Ns,
  setBlockTracking: Ai,
  setDevtoolsHook: og,
  setTransitionHooks: mn,
  shallowReactive: eu,
  shallowReadonly: Ft,
  shallowRef: nu,
  ssrContextKey: Qu,
  ssrUtils: lg,
  stop: gp,
  toDisplayString: ee,
  toHandlerKey: Xt,
  toHandlers: qh,
  toRaw: ce,
  toRef: Up,
  toRefs: Bp,
  toValue: Rp,
  transformVNodeArgs: Km,
  triggerRef: Pp,
  unref: wr,
  useAttrs: sm,
  useCssModule: Pg,
  useCssVars: bg,
  useHost: Hi,
  useId: _h,
  useModel: Mm,
  useSSRContext: Zu,
  useShadowRoot: Mg,
  useSlots: nm,
  useTemplateRef: Eh,
  useTransitionState: gl,
  vModelCheckbox: Re,
  vModelDynamic: Id,
  vModelRadio: $l,
  vModelSelect: Ds,
  vModelText: Os,
  vShow: Al,
  version: Li,
  warn: Ie,
  watch: Zt,
  watchEffect: $m,
  watchPostEffect: Vm,
  watchSyncEffect: ed,
  withAsyncContext: lm,
  withCtx: Fe,
  withDefaults: tm,
  withDirectives: Te,
  withKeys: Ui,
  withMemo: ng,
  withModifiers: tn,
  withScopeId: vh
}, Symbol.toStringTag, { value: "Module" }));
var Y = {};
const mr = Symbol(Y.NODE_ENV !== "production" ? "Fragment" : ""), lr = Symbol(Y.NODE_ENV !== "production" ? "Teleport" : ""), Vl = Symbol(Y.NODE_ENV !== "production" ? "Suspense" : ""), vo = Symbol(Y.NODE_ENV !== "production" ? "KeepAlive" : ""), zd = Symbol(
  Y.NODE_ENV !== "production" ? "BaseTransition" : ""
), rs = Symbol(Y.NODE_ENV !== "production" ? "openBlock" : ""), Wd = Symbol(Y.NODE_ENV !== "production" ? "createBlock" : ""), Kd = Symbol(
  Y.NODE_ENV !== "production" ? "createElementBlock" : ""
), Il = Symbol(Y.NODE_ENV !== "production" ? "createVNode" : ""), Ml = Symbol(
  Y.NODE_ENV !== "production" ? "createElementVNode" : ""
), kr = Symbol(
  Y.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Pl = Symbol(
  Y.NODE_ENV !== "production" ? "createTextVNode" : ""
), Gd = Symbol(
  Y.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Rl = Symbol(
  Y.NODE_ENV !== "production" ? "resolveComponent" : ""
), Ll = Symbol(
  Y.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Fl = Symbol(
  Y.NODE_ENV !== "production" ? "resolveDirective" : ""
), Bl = Symbol(
  Y.NODE_ENV !== "production" ? "resolveFilter" : ""
), jl = Symbol(
  Y.NODE_ENV !== "production" ? "withDirectives" : ""
), Hl = Symbol(Y.NODE_ENV !== "production" ? "renderList" : ""), Jd = Symbol(Y.NODE_ENV !== "production" ? "renderSlot" : ""), Yd = Symbol(Y.NODE_ENV !== "production" ? "createSlots" : ""), Wo = Symbol(
  Y.NODE_ENV !== "production" ? "toDisplayString" : ""
), yo = Symbol(Y.NODE_ENV !== "production" ? "mergeProps" : ""), Ul = Symbol(
  Y.NODE_ENV !== "production" ? "normalizeClass" : ""
), ql = Symbol(
  Y.NODE_ENV !== "production" ? "normalizeStyle" : ""
), gr = Symbol(
  Y.NODE_ENV !== "production" ? "normalizeProps" : ""
), Cr = Symbol(
  Y.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), zl = Symbol(Y.NODE_ENV !== "production" ? "toHandlers" : ""), qi = Symbol(Y.NODE_ENV !== "production" ? "camelize" : ""), Qg = Symbol(Y.NODE_ENV !== "production" ? "capitalize" : ""), zi = Symbol(
  Y.NODE_ENV !== "production" ? "toHandlerKey" : ""
), bo = Symbol(
  Y.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Zg = Symbol(Y.NODE_ENV !== "production" ? "pushScopeId" : ""), e0 = Symbol(Y.NODE_ENV !== "production" ? "popScopeId" : ""), Wl = Symbol(Y.NODE_ENV !== "production" ? "withCtx" : ""), t0 = Symbol(Y.NODE_ENV !== "production" ? "unref" : ""), n0 = Symbol(Y.NODE_ENV !== "production" ? "isRef" : ""), Kl = Symbol(Y.NODE_ENV !== "production" ? "withMemo" : ""), Xd = Symbol(Y.NODE_ENV !== "production" ? "isMemoSame" : ""), As = {
  [mr]: "Fragment",
  [lr]: "Teleport",
  [Vl]: "Suspense",
  [vo]: "KeepAlive",
  [zd]: "BaseTransition",
  [rs]: "openBlock",
  [Wd]: "createBlock",
  [Kd]: "createElementBlock",
  [Il]: "createVNode",
  [Ml]: "createElementVNode",
  [kr]: "createCommentVNode",
  [Pl]: "createTextVNode",
  [Gd]: "createStaticVNode",
  [Rl]: "resolveComponent",
  [Ll]: "resolveDynamicComponent",
  [Fl]: "resolveDirective",
  [Bl]: "resolveFilter",
  [jl]: "withDirectives",
  [Hl]: "renderList",
  [Jd]: "renderSlot",
  [Yd]: "createSlots",
  [Wo]: "toDisplayString",
  [yo]: "mergeProps",
  [Ul]: "normalizeClass",
  [ql]: "normalizeStyle",
  [gr]: "normalizeProps",
  [Cr]: "guardReactiveProps",
  [zl]: "toHandlers",
  [qi]: "camelize",
  [Qg]: "capitalize",
  [zi]: "toHandlerKey",
  [bo]: "setBlockTracking",
  [Zg]: "pushScopeId",
  [e0]: "popScopeId",
  [Wl]: "withCtx",
  [t0]: "unref",
  [n0]: "isRef",
  [Kl]: "withMemo",
  [Xd]: "isMemoSame"
};
function s0(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    As[t] = e[t];
  });
}
const Ct = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function r0(e, t = "") {
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
function vr(e, t, n, s, r, o, i, l = !1, a = !1, d = !1, c = Ct) {
  return e && (l ? (e.helper(rs), e.helper(Is(e.inSSR, d))) : e.helper(Vs(e.inSSR, d)), i && e.helper(jl)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: r,
    dynamicProps: o,
    directives: i,
    isBlock: l,
    disableTracking: a,
    isComponent: d,
    loc: c
  };
}
function Qn(e, t = Ct) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function At(e, t = Ct) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Pe(e, t) {
  return {
    type: 16,
    loc: Ct,
    key: le(e) ? de(e, !0) : e,
    value: t
  };
}
function de(e, t = !1, n = Ct, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function Ut(e, t = Ct) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function qe(e, t = [], n = Ct) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function $s(e, t = void 0, n = !1, s = !1, r = Ct) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: r
  };
}
function Wi(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: Ct
  };
}
function o0(e, t, n = !1, s = !1) {
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
function i0(e) {
  return {
    type: 21,
    body: e,
    loc: Ct
  };
}
function Vs(e, t) {
  return e || t ? Il : Ml;
}
function Is(e, t) {
  return e || t ? Wd : Kd;
}
function Gl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Vs(s, e.isComponent)), t(rs), t(Is(s, e.isComponent)));
}
const nc = new Uint8Array([123, 123]), sc = new Uint8Array([125, 125]);
function rc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function xt(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function _n(e) {
  return e === 47 || e === 62 || xt(e);
}
function _o(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ge = {
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
class l0 {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = nc, this.delimiterClose = sc, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = nc, this.delimiterClose = sc;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, s = t + 1;
    for (let r = this.newlines.length - 1; r >= 0; r--) {
      const o = this.newlines[r];
      if (t > o) {
        n = r + 2, s = t - o;
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
      _n(t)
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
      if (t === 62 || xt(t)) {
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
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ge.TitleEnd || this.currentSequence === Ge.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ge.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ge.Cdata.length && (this.state = 28, this.currentSequence = Ge.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
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
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ge.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
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
    _n(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (_n(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(_o("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    xt(t) || (t === 62 ? (Y.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = rc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || xt(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, Y.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : xt(t) || (Y.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : xt(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || _n(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : Y.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || _n(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || _n(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || _n(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), Y.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || _n(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : xt(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : xt(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
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
    xt(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (Y.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
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
    t === 45 ? (this.state = 28, this.currentSequence = Ge.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Ge.ScriptEnd[3] ? this.startSpecial(Ge.ScriptEnd, 4) : t === Ge.StyleEnd[3] ? this.startSpecial(Ge.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Ge.TitleEnd[3] ? this.startSpecial(Ge.TitleEnd, 4) : t === Ge.TextareaEnd[3] ? this.startSpecial(Ge.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
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
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ge.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const a0 = {
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
function Ki(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function Vn(e, t) {
  const n = Ki("MODE", t), s = Ki(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function Ms(e, t, n, ...s) {
  const r = Vn(e, t);
  return Y.NODE_ENV !== "production" && r && Eo(e, t, n, ...s), r;
}
function Eo(e, t, n, ...s) {
  if (Ki(e, t) === "suppress-warning")
    return;
  const { message: o, link: i } = a0[e], l = `(deprecation ${e}) ${typeof o == "function" ? o(...s) : o}${i ? `
  Details: ${i}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Jl(e) {
  throw e;
}
function Qd(e) {
  Y.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Se(e, t, n, s) {
  const r = Y.NODE_ENV !== "production" ? (n || c0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, o = new SyntaxError(String(r));
  return o.code = e, o.loc = t, o;
}
const c0 = {
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
}, bt = (e) => e.type === 4 && e.isStatic;
function Zd(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return lr;
    case "Suspense":
    case "suspense":
      return Vl;
    case "KeepAlive":
    case "keep-alive":
      return vo;
    case "BaseTransition":
    case "base-transition":
      return zd;
  }
}
const u0 = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Yl = (e) => !u0.test(e), d0 = /[A-Za-z_$\xA0-\uFFFF]/, f0 = /[\.\?\w$\xA0-\uFFFF]/, p0 = /\s+[.[]\s*|\s*[.[]\s+/g, ef = (e) => e.type === 4 ? e.content : e.loc.source, h0 = (e) => {
  const t = ef(e).trim().replace(p0, (l) => l.trim());
  let n = 0, s = [], r = 0, o = 0, i = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, r++;
        else if (a === "(")
          s.push(n), n = 2, o++;
        else if (!(l === 0 ? d0 : f0).test(a))
          return !1;
        break;
      case 1:
        a === "'" || a === '"' || a === "`" ? (s.push(n), n = 3, i = a) : a === "[" ? r++ : a === "]" && (--r || (n = s.pop()));
        break;
      case 2:
        if (a === "'" || a === '"' || a === "`")
          s.push(n), n = 3, i = a;
        else if (a === "(")
          o++;
        else if (a === ")") {
          if (l === t.length - 1)
            return !1;
          --o || (n = s.pop());
        }
        break;
      case 3:
        a === i && (n = s.pop(), i = null);
        break;
    }
  }
  return !r && !o;
}, tf = h0, m0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, g0 = (e) => m0.test(ef(e)), v0 = g0;
function oc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function yt(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const r = e.props[s];
    if (r.type === 7 && (n || r.exp) && (le(t) ? r.name === t : t.test(r.name)))
      return r;
  }
}
function yr(e, t, n = !1, s = !1) {
  for (let r = 0; r < e.props.length; r++) {
    const o = e.props[r];
    if (o.type === 6) {
      if (n) continue;
      if (o.name === t && (o.value || s))
        return o;
    } else if (o.name === "bind" && (o.exp || s) && Dn(o.arg, t))
      return o;
  }
}
function Dn(e, t) {
  return !!(e && bt(e) && e.content === t);
}
function y0(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function hi(e) {
  return e.type === 5 || e.type === 2;
}
function ic(e) {
  return e.type === 7 && e.name === "pre";
}
function b0(e) {
  return e.type === 7 && e.name === "slot";
}
function wo(e) {
  return e.type === 1 && e.tagType === 3;
}
function xo(e) {
  return e.type === 1 && e.tagType === 2;
}
const _0 = /* @__PURE__ */ new Set([gr, Cr]);
function nf(e, t = []) {
  if (e && !le(e) && e.type === 14) {
    const n = e.callee;
    if (!le(n) && _0.has(n))
      return nf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function No(e, t, n) {
  let s, r = e.type === 13 ? e.props : e.arguments[2], o = [], i;
  if (r && !le(r) && r.type === 14) {
    const l = nf(r);
    r = l[0], o = l[1], i = o[o.length - 1];
  }
  if (r == null || le(r))
    s = At([t]);
  else if (r.type === 14) {
    const l = r.arguments[0];
    !le(l) && l.type === 15 ? lc(t, l) || l.properties.unshift(t) : r.callee === zl ? s = qe(n.helper(yo), [
      At([t]),
      r
    ]) : r.arguments.unshift(At([t])), !s && (s = r);
  } else r.type === 15 ? (lc(t, r) || r.properties.unshift(t), s = r) : (s = qe(n.helper(yo), [
    At([t]),
    r
  ]), i && i.callee === Cr && (i = o[o.length - 2]));
  e.type === 13 ? i ? i.arguments[0] = s : e.props = s : i ? i.arguments[0] = s : e.arguments[2] = s;
}
function lc(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (r) => r.key.type === 4 && r.key.content === s
    );
  }
  return n;
}
function br(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function E0(e) {
  return e.type === 14 && e.callee === Kl ? e.arguments[1].returns : e;
}
const w0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, sf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Ws,
  isPreTag: Ws,
  isIgnoreNewlineTag: Ws,
  isCustomElement: Ws,
  onError: Jl,
  onWarn: Qd,
  comments: Y.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ye = sf, _r = null, pn = "", Ze = null, me = null, gt = "", an = -1, jn = -1, Xl = 0, kn = !1, Gi = null;
const Ve = [], De = new l0(Ve, {
  onerr: mt,
  ontext(e, t) {
    Lr(Je(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Lr(e, t, n);
  },
  oninterpolation(e, t) {
    if (kn)
      return Lr(Je(e, t), e, t);
    let n = e + De.delimiterOpen.length, s = t - De.delimiterClose.length;
    for (; xt(pn.charCodeAt(n)); )
      n++;
    for (; xt(pn.charCodeAt(s - 1)); )
      s--;
    let r = Je(n, s);
    r.includes("&") && (r = ye.decodeEntities(r, !1)), Ji({
      type: 5,
      content: Gr(r, !1, Le(n, s)),
      loc: Le(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Je(e, t);
    Ze = {
      type: 1,
      tag: n,
      ns: ye.getNamespace(n, Ve[0], ye.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Le(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    cc(e);
  },
  onclosetag(e, t) {
    const n = Je(e, t);
    if (!ye.isVoidTag(n)) {
      let s = !1;
      for (let r = 0; r < Ve.length; r++)
        if (Ve[r].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, r > 0 && mt(24, Ve[0].loc.start.offset);
          for (let i = 0; i <= r; i++) {
            const l = Ve.shift();
            Kr(l, t, i < r);
          }
          break;
        }
      s || mt(23, rf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Ze.tag;
    Ze.isSelfClosing = !0, cc(e), Ve[0] && Ve[0].tag === t && Kr(Ve.shift(), e);
  },
  onattribname(e, t) {
    me = {
      type: 6,
      name: Je(e, t),
      nameLoc: Le(e, t),
      value: void 0,
      loc: Le(e)
    };
  },
  ondirname(e, t) {
    const n = Je(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!kn && s === "" && mt(26, e), kn || s === "")
      me = {
        type: 6,
        name: n,
        nameLoc: Le(e, t),
        value: void 0,
        loc: Le(e)
      };
    else if (me = {
      type: 7,
      name: s,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [de("prop")] : [],
      loc: Le(e)
    }, s === "pre") {
      kn = De.inVPre = !0, Gi = Ze;
      const r = Ze.props;
      for (let o = 0; o < r.length; o++)
        r[o].type === 7 && (r[o] = V0(r[o]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Je(e, t);
    if (kn && !ic(me))
      me.name += n, qn(me.nameLoc, t);
    else {
      const s = n[0] !== "[";
      me.arg = Gr(
        s ? n : n.slice(1, -1),
        s,
        Le(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Je(e, t);
    if (kn && !ic(me))
      me.name += "." + n, qn(me.nameLoc, t);
    else if (me.name === "slot") {
      const s = me.arg;
      s && (s.content += "." + n, qn(s.loc, t));
    } else {
      const s = de(n, !0, Le(e, t));
      me.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    gt += Je(e, t), an < 0 && (an = e), jn = t;
  },
  onattribentity(e, t, n) {
    gt += e, an < 0 && (an = t), jn = n;
  },
  onattribnameend(e) {
    const t = me.loc.start.offset, n = Je(t, e);
    me.type === 7 && (me.rawName = n), Ze.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && mt(2, t);
  },
  onattribend(e, t) {
    if (Ze && me) {
      if (qn(me.loc, t), e !== 0)
        if (gt.includes("&") && (gt = ye.decodeEntities(
          gt,
          !0
        )), me.type === 6)
          me.name === "class" && (gt = lf(gt).trim()), e === 1 && !gt && mt(13, t), me.value = {
            type: 2,
            content: gt,
            loc: e === 1 ? Le(an, jn) : Le(an - 1, jn + 1)
          }, De.inSFCRoot && Ze.tag === "template" && me.name === "lang" && gt && gt !== "html" && De.enterRCDATA(_o("</template"), 0);
        else {
          let n = 0;
          me.exp = Gr(
            gt,
            !1,
            Le(an, jn),
            0,
            n
          ), me.name === "for" && (me.forParseResult = N0(me.exp));
          let s = -1;
          me.name === "bind" && (s = me.modifiers.findIndex(
            (r) => r.content === "sync"
          )) > -1 && Ms(
            "COMPILER_V_BIND_SYNC",
            ye,
            me.loc,
            me.arg.loc.source
          ) && (me.name = "model", me.modifiers.splice(s, 1));
        }
      (me.type !== 7 || me.name !== "pre") && Ze.props.push(me);
    }
    gt = "", an = jn = -1;
  },
  oncomment(e, t) {
    ye.comments && Ji({
      type: 3,
      content: Je(e, t),
      loc: Le(e - 4, t + 3)
    });
  },
  onend() {
    const e = pn.length;
    if (Y.NODE_ENV !== "production" && De.state !== 1)
      switch (De.state) {
        case 5:
        case 8:
          mt(5, e);
          break;
        case 3:
        case 4:
          mt(
            25,
            De.sectionStart
          );
          break;
        case 28:
          De.currentSequence === Ge.CdataEnd ? mt(6, e) : mt(7, e);
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
      Kr(Ve[t], e - 1), mt(24, Ve[t].loc.start.offset);
  },
  oncdata(e, t) {
    Ve[0].ns !== 0 ? Lr(Je(e, t), e, t) : mt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (Ve[0] ? Ve[0].ns : ye.ns) === 0 && mt(
      21,
      e - 1
    );
  }
}), ac = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, x0 = /^\(|\)$/g;
function N0(e) {
  const t = e.loc, n = e.content, s = n.match(w0);
  if (!s) return;
  const [, r, o] = s, i = (u, p, h = !1) => {
    const g = t.start.offset + p, m = g + u.length;
    return Gr(
      u,
      !1,
      Le(g, m),
      0,
      h ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: i(o.trim(), n.indexOf(o, r.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let a = r.trim().replace(x0, "").trim();
  const d = r.indexOf(a), c = a.match(ac);
  if (c) {
    a = a.replace(ac, "").trim();
    const u = c[1].trim();
    let p;
    if (u && (p = n.indexOf(u, d + a.length), l.key = i(u, p, !0)), c[2]) {
      const h = c[2].trim();
      h && (l.index = i(
        h,
        n.indexOf(
          h,
          l.key ? p + u.length : d + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = i(a, d, !0)), l;
}
function Je(e, t) {
  return pn.slice(e, t);
}
function cc(e) {
  De.inSFCRoot && (Ze.innerLoc = Le(e + 1, e + 1)), Ji(Ze);
  const { tag: t, ns: n } = Ze;
  n === 0 && ye.isPreTag(t) && Xl++, ye.isVoidTag(t) ? Kr(Ze, e) : (Ve.unshift(Ze), (n === 1 || n === 2) && (De.inXML = !0)), Ze = null;
}
function Lr(e, t, n) {
  {
    const o = Ve[0] && Ve[0].tag;
    o !== "script" && o !== "style" && e.includes("&") && (e = ye.decodeEntities(e, !1));
  }
  const s = Ve[0] || _r, r = s.children[s.children.length - 1];
  r && r.type === 2 ? (r.content += e, qn(r.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Le(t, n)
  });
}
function Kr(e, t, n = !1) {
  n ? qn(e.loc, rf(t, 60)) : qn(e.loc, S0(t, 62) + 1), De.inSFCRoot && (e.children.length ? e.innerLoc.end = fe({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = fe({}, e.innerLoc.start), e.innerLoc.source = Je(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: r, children: o } = e;
  if (kn || (s === "slot" ? e.tagType = 2 : uc(e) ? e.tagType = 3 : C0(e) && (e.tagType = 1)), De.inRCDATA || (e.children = of(o)), r === 0 && ye.isIgnoreNewlineTag(s)) {
    const i = o[0];
    i && i.type === 2 && (i.content = i.content.replace(/^\r?\n/, ""));
  }
  r === 0 && ye.isPreTag(s) && Xl--, Gi === e && (kn = De.inVPre = !1, Gi = null), De.inXML && (Ve[0] ? Ve[0].ns : ye.ns) === 0 && (De.inXML = !1);
  {
    const i = e.props;
    if (Y.NODE_ENV !== "production" && Vn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ye
    )) {
      let a = !1, d = !1;
      for (let c = 0; c < i.length; c++) {
        const u = i[c];
        if (u.type === 7 && (u.name === "if" ? a = !0 : u.name === "for" && (d = !0)), a && d) {
          Eo(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ye,
            e.loc
          );
          break;
        }
      }
    }
    if (!De.inSFCRoot && Vn(
      "COMPILER_NATIVE_TEMPLATE",
      ye
    ) && e.tag === "template" && !uc(e)) {
      Y.NODE_ENV !== "production" && Eo(
        "COMPILER_NATIVE_TEMPLATE",
        ye,
        e.loc
      );
      const a = Ve[0] || _r, d = a.children.indexOf(e);
      a.children.splice(d, 1, ...e.children);
    }
    const l = i.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && Ms(
      "COMPILER_INLINE_TEMPLATE",
      ye,
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
function S0(e, t) {
  let n = e;
  for (; pn.charCodeAt(n) !== t && n < pn.length - 1; ) n++;
  return n;
}
function rf(e, t) {
  let n = e;
  for (; pn.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const k0 = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function uc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && k0.has(t[n].name))
        return !0;
  }
  return !1;
}
function C0({ tag: e, props: t }) {
  if (ye.isCustomElement(e))
    return !1;
  if (e === "component" || O0(e.charCodeAt(0)) || Zd(e) || ye.isBuiltInComponent && ye.isBuiltInComponent(e) || ye.isNativeTag && !ye.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (Ms(
          "COMPILER_IS_ON_ELEMENT",
          ye,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Dn(s.arg, "is") && Ms(
        "COMPILER_IS_ON_ELEMENT",
        ye,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function O0(e) {
  return e > 64 && e < 91;
}
const D0 = /\r\n/g;
function of(e) {
  const t = ye.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (r.type === 2)
      if (Xl)
        r.content = r.content.replace(D0, `
`);
      else if (T0(r.content)) {
        const o = e[s - 1] && e[s - 1].type, i = e[s + 1] && e[s + 1].type;
        !o || !i || t && (o === 3 && (i === 3 || i === 1) || o === 1 && (i === 3 || i === 1 && A0(r.content))) ? (n = !0, e[s] = null) : r.content = " ";
      } else t && (r.content = lf(r.content));
  }
  return n ? e.filter(Boolean) : e;
}
function T0(e) {
  for (let t = 0; t < e.length; t++)
    if (!xt(e.charCodeAt(t)))
      return !1;
  return !0;
}
function A0(e) {
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
    xt(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Ji(e) {
  (Ve[0] || _r).children.push(e);
}
function Le(e, t) {
  return {
    start: De.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : De.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Je(e, t)
  };
}
function $0(e) {
  return Le(e.start.offset, e.end.offset);
}
function qn(e, t) {
  e.end = De.getPos(t), e.source = Je(e.start.offset, t);
}
function V0(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Le(
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
function Gr(e, t = !1, n, s = 0, r = 0) {
  return de(e, t, n, s);
}
function mt(e, t, n) {
  ye.onError(
    Se(e, Le(t, t), void 0, n)
  );
}
function I0() {
  De.reset(), Ze = null, me = null, gt = "", an = -1, jn = -1, Ve.length = 0;
}
function M0(e, t) {
  if (I0(), pn = e, ye = fe({}, sf), t) {
    let r;
    for (r in t)
      t[r] != null && (ye[r] = t[r]);
  }
  if (Y.NODE_ENV !== "production" && !ye.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  De.mode = ye.parseMode === "html" ? 1 : ye.parseMode === "sfc" ? 2 : 0, De.inXML = ye.ns === 1 || ye.ns === 2;
  const n = t && t.delimiters;
  n && (De.delimiterOpen = _o(n[0]), De.delimiterClose = _o(n[1]));
  const s = _r = r0([], e);
  return De.parse(pn), s.loc = Le(0, e.length), s.children = of(s.children), _r = null, s;
}
function P0(e, t) {
  Jr(
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
  return t.length === 1 && t[0].type === 1 && !xo(t[0]) ? t[0] : null;
}
function Jr(e, t, n, s = !1, r = !1) {
  const { children: o } = e, i = [];
  for (let u = 0; u < o.length; u++) {
    const p = o[u];
    if (p.type === 1 && p.tagType === 0) {
      const h = s ? 0 : Nt(p, n);
      if (h > 0) {
        if (h >= 2) {
          p.codegenNode.patchFlag = -1, i.push(p);
          continue;
        }
      } else {
        const g = p.codegenNode;
        if (g.type === 13) {
          const m = g.patchFlag;
          if ((m === void 0 || m === 512 || m === 1) && uf(p, n) >= 2) {
            const I = df(p);
            I && (g.props = n.hoist(I));
          }
          g.dynamicProps && (g.dynamicProps = n.hoist(g.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : Nt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (Y.NODE_ENV !== "production" ? ` /* ${Qs[-1]} */` : "")
      ), i.push(p);
      continue;
    }
    if (p.type === 1) {
      const h = p.tagType === 1;
      h && n.scopes.vSlot++, Jr(p, e, n, !1, r), h && n.scopes.vSlot--;
    } else if (p.type === 11)
      Jr(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let h = 0; h < p.branches.length; h++)
        Jr(
          p.branches[h],
          e,
          n,
          p.branches[h].children.length === 1,
          r
        );
  }
  let l = !1;
  const a = [];
  if (i.length === o.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && J(e.codegenNode.children))
      e.codegenNode.children = d(
        Qn(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !J(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = c(e.codegenNode, "default");
      u && (a.push(n.cached.length), u.returns = d(
        Qn(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !J(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = yt(e, "slot", !0), p = u && u.arg && c(t.codegenNode, u.arg);
      p && (a.push(n.cached.length), p.returns = d(
        Qn(p.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const u of i)
      a.push(n.cached.length), u.codegenNode = n.cache(u.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !J(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    Pe(
      "__",
      de(JSON.stringify(a), !1)
    )
  );
  function d(u) {
    const p = n.cache(u);
    return r && n.hmr && (p.needArraySpread = !0), p;
  }
  function c(u, p) {
    if (u.children && !J(u.children) && u.children.type === 15) {
      const h = u.children.properties.find(
        (g) => g.key === p || g.key.content === p
      );
      return h && h.value;
    }
  }
  i.length && n.transformHoist && n.transformHoist(o, n, e);
}
function Nt(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const s = n.get(e);
      if (s !== void 0)
        return s;
      const r = e.codegenNode;
      if (r.type !== 13 || r.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (r.patchFlag === void 0) {
        let i = 3;
        const l = uf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < i && (i = l);
        for (let a = 0; a < e.children.length; a++) {
          const d = Nt(e.children[a], t);
          if (d === 0)
            return n.set(e, 0), 0;
          d < i && (i = d);
        }
        if (i > 1)
          for (let a = 0; a < e.props.length; a++) {
            const d = e.props[a];
            if (d.type === 7 && d.name === "bind" && d.exp) {
              const c = Nt(d.exp, t);
              if (c === 0)
                return n.set(e, 0), 0;
              c < i && (i = c);
            }
          }
        if (r.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(rs), t.removeHelper(
            Is(t.inSSR, r.isComponent)
          ), r.isBlock = !1, t.helper(Vs(t.inSSR, r.isComponent));
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
      return Nt(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let o = 3;
      for (let i = 0; i < e.children.length; i++) {
        const l = e.children[i];
        if (le(l) || _t(l))
          continue;
        const a = Nt(l, t);
        if (a === 0)
          return 0;
        a < o && (o = a);
      }
      return o;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const R0 = /* @__PURE__ */ new Set([
  Ul,
  ql,
  gr,
  Cr
]);
function cf(e, t) {
  if (e.type === 14 && !le(e.callee) && R0.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return Nt(n, t);
    if (n.type === 14)
      return cf(n, t);
  }
  return 0;
}
function uf(e, t) {
  let n = 3;
  const s = df(e);
  if (s && s.type === 15) {
    const { properties: r } = s;
    for (let o = 0; o < r.length; o++) {
      const { key: i, value: l } = r[o], a = Nt(i, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let d;
      if (l.type === 4 ? d = Nt(l, t) : l.type === 14 ? d = cf(l, t) : d = 0, d === 0)
        return d;
      d < n && (n = d);
    }
  }
  return n;
}
function df(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function L0(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: r = !1,
  cacheHandlers: o = !1,
  nodeTransforms: i = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: d = Ae,
  isCustomElement: c = Ae,
  expressionPlugins: u = [],
  scopeId: p = null,
  slotted: h = !0,
  ssr: g = !1,
  inSSR: m = !1,
  ssrCssVars: I = "",
  bindingMetadata: M = pe,
  inline: P = !1,
  isTS: y = !1,
  onError: S = Jl,
  onWarn: v = Qd,
  compatConfig: E
}) {
  const V = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), k = {
    // options
    filename: t,
    selfName: V && nn(Ce(V[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: r,
    cacheHandlers: o,
    nodeTransforms: i,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: d,
    isCustomElement: c,
    expressionPlugins: u,
    scopeId: p,
    slotted: h,
    ssr: g,
    inSSR: m,
    ssrCssVars: I,
    bindingMetadata: M,
    inline: P,
    isTS: y,
    onError: S,
    onWarn: v,
    compatConfig: E,
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
    helper(_) {
      const O = k.helpers.get(_) || 0;
      return k.helpers.set(_, O + 1), _;
    },
    removeHelper(_) {
      const O = k.helpers.get(_);
      if (O) {
        const R = O - 1;
        R ? k.helpers.set(_, R) : k.helpers.delete(_);
      }
    },
    helperString(_) {
      return `_${As[k.helper(_)]}`;
    },
    replaceNode(_) {
      if (Y.NODE_ENV !== "production") {
        if (!k.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!k.parent)
          throw new Error("Cannot replace root node.");
      }
      k.parent.children[k.childIndex] = k.currentNode = _;
    },
    removeNode(_) {
      if (Y.NODE_ENV !== "production" && !k.parent)
        throw new Error("Cannot remove root node.");
      const O = k.parent.children, R = _ ? O.indexOf(_) : k.currentNode ? k.childIndex : -1;
      if (Y.NODE_ENV !== "production" && R < 0)
        throw new Error("node being removed is not a child of current parent");
      !_ || _ === k.currentNode ? (k.currentNode = null, k.onNodeRemoved()) : k.childIndex > R && (k.childIndex--, k.onNodeRemoved()), k.parent.children.splice(R, 1);
    },
    onNodeRemoved: Ae,
    addIdentifiers(_) {
    },
    removeIdentifiers(_) {
    },
    hoist(_) {
      le(_) && (_ = de(_)), k.hoists.push(_);
      const O = de(
        `_hoisted_${k.hoists.length}`,
        !1,
        _.loc,
        2
      );
      return O.hoisted = _, O;
    },
    cache(_, O = !1, R = !1) {
      const w = o0(
        k.cached.length,
        _,
        O,
        R
      );
      return k.cached.push(w), w;
    }
  };
  return k.filters = /* @__PURE__ */ new Set(), k;
}
function F0(e, t) {
  const n = L0(e, t);
  Ko(e, n), t.hoistStatic && P0(e, n), t.ssr || B0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function B0(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const r = af(e);
    if (r && r.codegenNode) {
      const o = r.codegenNode;
      o.type === 13 && Gl(o, t), e.codegenNode = o;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let r = 64;
    Y.NODE_ENV !== "production" && s.filter((o) => o.type !== 3).length === 1 && (r |= 2048), e.codegenNode = vr(
      t,
      n(mr),
      void 0,
      e.children,
      r,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function j0(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const r = e.children[n];
    le(r) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Ko(r, t));
  }
}
function Ko(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let o = 0; o < n.length; o++) {
    const i = n[o](e, t);
    if (i && (J(i) ? s.push(...i) : s.push(i)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(kr);
      break;
    case 5:
      t.ssr || t.helper(Wo);
      break;
    case 9:
      for (let o = 0; o < e.branches.length; o++)
        Ko(e.branches[o], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      j0(e, t);
      break;
  }
  t.currentNode = e;
  let r = s.length;
  for (; r--; )
    s[r]();
}
function ff(e, t) {
  const n = le(e) ? (s) => s === e : (s) => e.test(s);
  return (s, r) => {
    if (s.type === 1) {
      const { props: o } = s;
      if (s.tagType === 3 && o.some(b0))
        return;
      const i = [];
      for (let l = 0; l < o.length; l++) {
        const a = o[l];
        if (a.type === 7 && n(a.name)) {
          o.splice(l, 1), l--;
          const d = t(s, a, r);
          d && i.push(d);
        }
      }
      return i;
    }
  };
}
const Go = "/*@__PURE__*/", pf = (e) => `${As[e]}: _${As[e]}`;
function H0(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: r = "template.vue.html",
  scopeId: o = null,
  optimizeImports: i = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: d = "vue/server-renderer",
  ssr: c = !1,
  isTS: u = !1,
  inSSR: p = !1
}) {
  const h = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: s,
    filename: r,
    scopeId: o,
    optimizeImports: i,
    runtimeGlobalName: l,
    runtimeModuleName: a,
    ssrRuntimeModuleName: d,
    ssr: c,
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
    helper(m) {
      return `_${As[m]}`;
    },
    push(m, I = -2, M) {
      h.code += m;
    },
    indent() {
      g(++h.indentLevel);
    },
    deindent(m = !1) {
      m ? --h.indentLevel : g(--h.indentLevel);
    },
    newline() {
      g(h.indentLevel);
    }
  };
  function g(m) {
    h.push(
      `
` + "  ".repeat(m),
      0
      /* Start */
    );
  }
  return h;
}
function U0(e, t = {}) {
  const n = H0(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: r,
    prefixIdentifiers: o,
    indent: i,
    deindent: l,
    newline: a,
    scopeId: d,
    ssr: c
  } = n, u = Array.from(e.helpers), p = u.length > 0, h = !o && s !== "module";
  q0(e, n);
  const m = c ? "ssrRender" : "render", M = (c ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (r(`function ${m}(${M}) {`), i(), h && (r("with (_ctx) {"), i(), p && (r(
    `const { ${u.map(pf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (mi(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (mi(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), mi(e.filters, "filter", n), a()), e.temps > 0) {
    r("let ");
    for (let P = 0; P < e.temps; P++)
      r(`${P > 0 ? ", " : ""}_temp${P}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (r(
    `
`,
    0
    /* Start */
  ), a()), c || r("return "), e.codegenNode ? st(e.codegenNode, n) : r("null"), h && (l(), r("}")), l(), r("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function q0(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: r,
    newline: o,
    runtimeModuleName: i,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, d = l, c = Array.from(e.helpers);
  if (c.length > 0 && (r(
    `const _Vue = ${d}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const u = [
      Il,
      Ml,
      kr,
      Pl,
      Gd
    ].filter((p) => c.includes(p)).map(pf).join(", ");
    r(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  z0(e.hoists, t), o(), r("return ");
}
function mi(e, t, { helper: n, push: s, newline: r, isTS: o }) {
  const i = n(
    t === "filter" ? Bl : t === "component" ? Rl : Fl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const d = a.endsWith("__self");
    d && (a = a.slice(0, -6)), s(
      `const ${br(a, t)} = ${i}(${JSON.stringify(a)}${d ? ", true" : ""})${o ? "!" : ""}`
    ), l < e.length - 1 && r();
  }
}
function z0(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: s } = t;
  s();
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    o && (n(`const _hoisted_${r + 1} = `), st(o, t), s());
  }
  t.pure = !1;
}
function W0(e) {
  return le(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function Ql(e, t) {
  const n = e.length > 3 || Y.NODE_ENV !== "production" && e.some((s) => J(s) || !W0(s));
  t.push("["), n && t.indent(), Or(e, t, n), n && t.deindent(), t.push("]");
}
function Or(e, t, n = !1, s = !0) {
  const { push: r, newline: o } = t;
  for (let i = 0; i < e.length; i++) {
    const l = e[i];
    le(l) ? r(
      l,
      -3
      /* Unknown */
    ) : J(l) ? Ql(l, t) : st(l, t), i < e.length - 1 && (n ? (s && r(","), o()) : s && r(", "));
  }
}
function st(e, t) {
  if (le(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (_t(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      Y.NODE_ENV !== "production" && oc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), st(e.codegenNode, t);
      break;
    case 2:
      K0(e, t);
      break;
    case 4:
      hf(e, t);
      break;
    case 5:
      G0(e, t);
      break;
    case 12:
      st(e.codegenNode, t);
      break;
    case 8:
      mf(e, t);
      break;
    case 3:
      Y0(e, t);
      break;
    case 13:
      X0(e, t);
      break;
    case 14:
      Z0(e, t);
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
      rv(e, t);
      break;
    case 21:
      Or(e.body, t, !0, !1);
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
        return oc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function K0(e, t) {
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
function G0(e, t) {
  const { push: n, helper: s, pure: r } = t;
  r && n(Go), n(`${s(Wo)}(`), st(e.content, t), n(")");
}
function mf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    le(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : st(s, t);
  }
}
function J0(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), mf(e, t), n("]");
  else if (e.isStatic) {
    const s = Yl(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Y0(e, t) {
  const { push: n, helper: s, pure: r } = t;
  r && n(Go), n(
    `${s(kr)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function X0(e, t) {
  const { push: n, helper: s, pure: r } = t, {
    tag: o,
    props: i,
    children: l,
    patchFlag: a,
    dynamicProps: d,
    directives: c,
    isBlock: u,
    disableTracking: p,
    isComponent: h
  } = e;
  let g;
  if (a)
    if (Y.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${Qs[a]} */`;
      else {
        const I = Object.keys(Qs).map(Number).filter((M) => M > 0 && a & M).map((M) => Qs[M]).join(", ");
        g = a + ` /* ${I} */`;
      }
    else
      g = String(a);
  c && n(s(jl) + "("), u && n(`(${s(rs)}(${p ? "true" : ""}), `), r && n(Go);
  const m = u ? Is(t.inSSR, h) : Vs(t.inSSR, h);
  n(s(m) + "(", -2, e), Or(
    Q0([o, i, l, g, d]),
    t
  ), n(")"), u && n(")"), c && (n(", "), st(c, t), n(")"));
}
function Q0(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Z0(e, t) {
  const { push: n, helper: s, pure: r } = t, o = le(e.callee) ? e.callee : s(e.callee);
  r && n(Go), n(o + "(", -2, e), Or(e.arguments, t), n(")");
}
function ev(e, t) {
  const { push: n, indent: s, deindent: r, newline: o } = t, { properties: i } = e;
  if (!i.length) {
    n("{}", -2, e);
    return;
  }
  const l = i.length > 1 || Y.NODE_ENV !== "production" && i.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < i.length; a++) {
    const { key: d, value: c } = i[a];
    J0(d, t), n(": "), st(c, t), a < i.length - 1 && (n(","), o());
  }
  l && r(), n(l ? "}" : " }");
}
function tv(e, t) {
  Ql(e.elements, t);
}
function nv(e, t) {
  const { push: n, indent: s, deindent: r } = t, { params: o, returns: i, body: l, newline: a, isSlot: d } = e;
  d && n(`_${As[Wl]}(`), n("(", -2, e), J(o) ? Or(o, t) : o && st(o, t), n(") => "), (a || l) && (n("{"), s()), i ? (a && n("return "), J(i) ? Ql(i, t) : st(i, t)) : l && st(l, t), (a || l) && (r(), n("}")), d && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function sv(e, t) {
  const { test: n, consequent: s, alternate: r, newline: o } = e, { push: i, indent: l, deindent: a, newline: d } = t;
  if (n.type === 4) {
    const u = !Yl(n.content);
    u && i("("), hf(n, t), u && i(")");
  } else
    i("("), st(n, t), i(")");
  o && l(), t.indentLevel++, o || i(" "), i("? "), st(s, t), t.indentLevel--, o && d(), o || i(" "), i(": ");
  const c = r.type === 19;
  c || t.indentLevel++, st(r, t), c || t.indentLevel--, o && a(
    !0
    /* without newline */
  );
}
function rv(e, t) {
  const { push: n, helper: s, indent: r, deindent: o, newline: i } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (r(), n(`${s(bo)}(-1`), e.inVOnce && n(", true"), n("),"), i(), n("(")), n(`_cache[${e.index}] = `), st(e.value, t), l && (n(`).cacheIndex = ${e.index},`), i(), n(`${s(bo)}(1),`), i(), n(`_cache[${e.index}]`), o()), n(")"), a && n(")]");
}
const ov = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), iv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function zn(e, t, n = !1, s = !1) {
  const r = e.content;
  if (r.trim())
    try {
      new Function(
        s ? ` ${r} ` : `return ${n ? `(${r}) => {}` : `(${r})`}`
      );
    } catch (o) {
      let i = o.message;
      const l = r.replace(iv, "").match(ov);
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
    e.content = gi(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = yt(e, "memo");
    for (let s = 0; s < e.props.length; s++) {
      const r = e.props[s];
      if (r.type === 7 && r.name !== "for") {
        const o = r.exp, i = r.arg;
        o && o.type === 4 && !(r.name === "on" && i) && // key has been processed in transformFor(vMemo + vFor)
        !(n && i && i.type === 4 && i.content === "key") && (r.exp = gi(
          o,
          t,
          // slot args must be processed as function params
          r.name === "slot"
        )), i && i.type === 4 && !i.isStatic && (r.arg = gi(i, t));
      }
    }
  }
};
function gi(e, t, n = !1, s = !1, r = Object.create(t.identifiers)) {
  return Y.NODE_ENV !== "production" && zn(e, t, n, s), e;
}
const av = ff(
  /^(if|else|else-if)$/,
  (e, t, n) => cv(e, t, n, (s, r, o) => {
    const i = n.parent.children;
    let l = i.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const d = i[l];
      d && d.type === 9 && (a += d.branches.length);
    }
    return () => {
      if (o)
        s.codegenNode = fc(
          r,
          a,
          n
        );
      else {
        const d = dv(s.codegenNode);
        d.alternate = fc(
          r,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function cv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const r = t.exp ? t.exp.loc : e.loc;
    n.onError(
      Se(28, t.loc)
    ), t.exp = de("true", !1, r);
  }
  if (Y.NODE_ENV !== "production" && t.exp && zn(t.exp, n), t.name === "if") {
    const r = dc(e, t), o = {
      type: 9,
      loc: $0(e.loc),
      branches: [r]
    };
    if (n.replaceNode(o), s)
      return s(o, r, !0);
  } else {
    const r = n.parent.children, o = [];
    let i = r.indexOf(e);
    for (; i-- >= -1; ) {
      const l = r[i];
      if (l && l.type === 3) {
        n.removeNode(l), Y.NODE_ENV !== "production" && o.unshift(l);
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
        const a = dc(e, t);
        if (Y.NODE_ENV !== "production" && o.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...o, ...a.children]), Y.NODE_ENV !== "production") {
          const c = a.userKey;
          c && l.branches.forEach(({ userKey: u }) => {
            uv(u, c) && n.onError(
              Se(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const d = s && s(l, a, !1);
        Ko(a, n), d && d(), n.currentNode = null;
      } else
        n.onError(
          Se(30, e.loc)
        );
      break;
    }
  }
}
function dc(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !yt(e, "for") ? e.children : [e],
    userKey: yr(e, "key"),
    isTemplateIf: n
  };
}
function fc(e, t, n) {
  return e.condition ? Wi(
    e.condition,
    pc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    qe(n.helper(kr), [
      Y.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : pc(e, t, n);
}
function pc(e, t, n) {
  const { helper: s } = n, r = Pe(
    "key",
    de(
      `${t}`,
      !1,
      Ct,
      2
    )
  ), { children: o } = e, i = o[0];
  if (o.length !== 1 || i.type !== 1)
    if (o.length === 1 && i.type === 11) {
      const a = i.codegenNode;
      return No(a, r, n), a;
    } else {
      let a = 64;
      return Y.NODE_ENV !== "production" && !e.isTemplateIf && o.filter((d) => d.type !== 3).length === 1 && (a |= 2048), vr(
        n,
        s(mr),
        At([r]),
        o,
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
    const a = i.codegenNode, d = E0(a);
    return d.type === 13 && Gl(d, n), No(d, r, n), a;
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
  const { modifiers: s, loc: r } = e, o = e.arg;
  let { exp: i } = e;
  if (i && i.type === 4 && !i.content.trim() && (i = void 0), !i) {
    if (o.type !== 4 || !o.isStatic)
      return n.onError(
        Se(
          52,
          o.loc
        )
      ), {
        props: [
          Pe(o, de("", !0, r))
        ]
      };
    gf(e), i = e.exp;
  }
  return o.type !== 4 ? (o.children.unshift("("), o.children.push(') || ""')) : o.isStatic || (o.content = o.content ? `${o.content} || ""` : '""'), s.some((l) => l.content === "camel") && (o.type === 4 ? o.isStatic ? o.content = Ce(o.content) : o.content = `${n.helperString(qi)}(${o.content})` : (o.children.unshift(`${n.helperString(qi)}(`), o.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && hc(o, "."), s.some((l) => l.content === "attr") && hc(o, "^")), {
    props: [Pe(o, i)]
  };
}, gf = (e, t) => {
  const n = e.arg, s = Ce(n.content);
  e.exp = de(s, !1, n.loc);
}, hc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, pv = ff(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: r } = n;
    return hv(e, t, n, (o) => {
      const i = qe(s(Hl), [
        o.source
      ]), l = wo(e), a = yt(e, "memo"), d = yr(e, "key", !1, !0);
      d && d.type === 7 && !d.exp && gf(d);
      let u = d && (d.type === 6 ? d.value ? de(d.value.content, !0) : void 0 : d.exp);
      const p = d && u ? Pe("key", u) : null, h = o.source.type === 4 && o.source.constType > 0, g = h ? 64 : d ? 128 : 256;
      return o.codegenNode = vr(
        n,
        s(mr),
        void 0,
        i,
        g,
        void 0,
        void 0,
        !0,
        !h,
        !1,
        e.loc
      ), () => {
        let m;
        const { children: I } = o;
        Y.NODE_ENV !== "production" && l && e.children.some((y) => {
          if (y.type === 1) {
            const S = yr(y, "key");
            if (S)
              return n.onError(
                Se(
                  33,
                  S.loc
                )
              ), !0;
          }
        });
        const M = I.length !== 1 || I[0].type !== 1, P = xo(e) ? e : l && e.children.length === 1 && xo(e.children[0]) ? e.children[0] : null;
        if (P ? (m = P.codegenNode, l && p && No(m, p, n)) : M ? m = vr(
          n,
          s(mr),
          p ? At([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (m = I[0].codegenNode, l && p && No(m, p, n), m.isBlock !== !h && (m.isBlock ? (r(rs), r(
          Is(n.inSSR, m.isComponent)
        )) : r(
          Vs(n.inSSR, m.isComponent)
        )), m.isBlock = !h, m.isBlock ? (s(rs), s(Is(n.inSSR, m.isComponent))) : s(Vs(n.inSSR, m.isComponent))), a) {
          const y = $s(
            Yi(o.parseResult, [
              de("_cached")
            ])
          );
          y.body = i0([
            Ut(["const _memo = (", a.exp, ")"]),
            Ut([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Xd
              )}(_cached, _memo)) return _cached`
            ]),
            Ut(["const _item = ", m]),
            de("_item.memo = _memo"),
            de("return _item")
          ]), i.arguments.push(
            y,
            de("_cache"),
            de(String(n.cached.length))
          ), n.cached.push(null);
        } else
          i.arguments.push(
            $s(
              Yi(o.parseResult),
              m,
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
  const r = t.forParseResult;
  if (!r) {
    n.onError(
      Se(32, t.loc)
    );
    return;
  }
  vf(r, n);
  const { addIdentifiers: o, removeIdentifiers: i, scopes: l } = n, { source: a, value: d, key: c, index: u } = r, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: d,
    keyAlias: c,
    objectIndexAlias: u,
    parseResult: r,
    children: wo(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const h = s && s(p);
  return () => {
    l.vFor--, h && h();
  };
}
function vf(e, t) {
  e.finalized || (Y.NODE_ENV !== "production" && (zn(e.source, t), e.key && zn(
    e.key,
    t,
    !0
  ), e.index && zn(
    e.index,
    t,
    !0
  ), e.value && zn(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function Yi({ value: e, key: t, index: n }, s = []) {
  return mv([e, t, n, ...s]);
}
function mv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || de("_".repeat(s + 1), !1));
}
const mc = de("undefined", !1), gv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = yt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, vv = (e, t, n, s) => $s(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function yv(e, t, n = vv) {
  t.helper(Wl);
  const { children: s, loc: r } = e, o = [], i = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = yt(e, "slot", !0);
  if (a) {
    const { arg: I, exp: M } = a;
    I && !bt(I) && (l = !0), o.push(
      Pe(
        I || de("default", !0),
        n(M, void 0, s, r)
      )
    );
  }
  let d = !1, c = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let h = 0;
  for (let I = 0; I < s.length; I++) {
    const M = s[I];
    let P;
    if (!wo(M) || !(P = yt(M, "slot", !0))) {
      M.type !== 3 && u.push(M);
      continue;
    }
    if (a) {
      t.onError(
        Se(37, P.loc)
      );
      break;
    }
    d = !0;
    const { children: y, loc: S } = M, {
      arg: v = de("default", !0),
      exp: E,
      loc: V
    } = P;
    let k;
    bt(v) ? k = v ? v.content : "default" : l = !0;
    const _ = yt(M, "for"), O = n(E, _, y, S);
    let R, w;
    if (R = yt(M, "if"))
      l = !0, i.push(
        Wi(
          R.exp,
          Fr(v, O, h++),
          mc
        )
      );
    else if (w = yt(
      M,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let $ = I, T;
      for (; $-- && (T = s[$], !(T.type !== 3 && Xi(T))); )
        ;
      if (T && wo(T) && yt(T, /^(else-)?if$/)) {
        let A = i[i.length - 1];
        for (; A.alternate.type === 19; )
          A = A.alternate;
        A.alternate = w.exp ? Wi(
          w.exp,
          Fr(
            v,
            O,
            h++
          ),
          mc
        ) : Fr(v, O, h++);
      } else
        t.onError(
          Se(30, w.loc)
        );
    } else if (_) {
      l = !0;
      const $ = _.forParseResult;
      $ ? (vf($, t), i.push(
        qe(t.helper(Hl), [
          $.source,
          $s(
            Yi($),
            Fr(v, O),
            !0
          )
        ])
      )) : t.onError(
        Se(
          32,
          _.loc
        )
      );
    } else {
      if (k) {
        if (p.has(k)) {
          t.onError(
            Se(
              38,
              V
            )
          );
          continue;
        }
        p.add(k), k === "default" && (c = !0);
      }
      o.push(Pe(v, O));
    }
  }
  if (!a) {
    const I = (M, P) => {
      const y = n(M, void 0, P, r);
      return t.compatConfig && (y.isNonScopedSlot = !0), Pe("default", y);
    };
    d ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((M) => Xi(M)) && (c ? t.onError(
      Se(
        39,
        u[0].loc
      )
    ) : o.push(
      I(void 0, u)
    )) : o.push(I(void 0, s));
  }
  const g = l ? 2 : Yr(e.children) ? 3 : 1;
  let m = At(
    o.concat(
      Pe(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        de(
          g + (Y.NODE_ENV !== "production" ? ` /* ${Wf[g]} */` : ""),
          !1
        )
      )
    ),
    r
  );
  return i.length && (m = qe(t.helper(Yd), [
    m,
    Qn(i)
  ])), {
    slots: m,
    hasDynamicSlots: l
  };
}
function Fr(e, t, n) {
  const s = [
    Pe("name", e),
    Pe("fn", t)
  ];
  return n != null && s.push(
    Pe("key", de(String(n), !0))
  ), At(s);
}
function Yr(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Yr(n.children))
          return !0;
        break;
      case 9:
        if (Yr(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Yr(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Xi(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Xi(e.content);
}
const yf = /* @__PURE__ */ new WeakMap(), bv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: r } = e, o = e.tagType === 1;
  let i = o ? _v(e, t) : `"${s}"`;
  const l = ge(i) && i.callee === Ll;
  let a, d, c = 0, u, p, h, g = (
    // dynamic component may resolve to plain elements
    l || i === lr || i === Vl || !o && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (r.length > 0) {
    const m = bf(
      e,
      t,
      void 0,
      o,
      l
    );
    a = m.props, c = m.patchFlag, p = m.dynamicPropNames;
    const I = m.directives;
    h = I && I.length ? Qn(
      I.map((M) => wv(M, t))
    ) : void 0, m.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (i === vo && (g = !0, c |= 1024, Y.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      Se(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), o && // Teleport is not a real component and has dedicated runtime handling
    i !== lr && // explained above.
    i !== vo) {
      const { slots: I, hasDynamicSlots: M } = yv(e, t);
      d = I, M && (c |= 1024);
    } else if (e.children.length === 1 && i !== lr) {
      const I = e.children[0], M = I.type, P = M === 5 || M === 8;
      P && Nt(I, t) === 0 && (c |= 1), P || M === 2 ? d = I : d = e.children;
    } else
      d = e.children;
  p && p.length && (u = xv(p)), e.codegenNode = vr(
    t,
    i,
    a,
    d,
    c === 0 ? void 0 : c,
    u,
    h,
    !!g,
    !1,
    o,
    e.loc
  );
};
function _v(e, t, n = !1) {
  let { tag: s } = e;
  const r = Qi(s), o = yr(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (o)
    if (r || Vn(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (o.type === 6 ? l = o.value && de(o.value.content, !0) : (l = o.exp, l || (l = de("is", !1, o.arg.loc))), l)
        return qe(t.helper(Ll), [
          l
        ]);
    } else o.type === 6 && o.value.content.startsWith("vue:") && (s = o.value.content.slice(4));
  const i = Zd(s) || t.isBuiltInComponent(s);
  return i ? (n || t.helper(i), i) : (t.helper(Rl), t.components.add(s), br(s, "component"));
}
function bf(e, t, n = e.props, s, r, o = !1) {
  const { tag: i, loc: l, children: a } = e;
  let d = [];
  const c = [], u = [], p = a.length > 0;
  let h = !1, g = 0, m = !1, I = !1, M = !1, P = !1, y = !1, S = !1;
  const v = [], E = (O) => {
    d.length && (c.push(
      At(gc(d), l)
    ), d = []), O && c.push(O);
  }, V = () => {
    t.scopes.vFor > 0 && d.push(
      Pe(
        de("ref_for", !0),
        de("true")
      )
    );
  }, k = ({ key: O, value: R }) => {
    if (bt(O)) {
      const w = O.content, $ = hn(w);
      if ($ && (!s || r) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      w.toLowerCase() !== "onclick" && // omit v-model handlers
      w !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Tn(w) && (P = !0), $ && Tn(w) && (S = !0), $ && R.type === 14 && (R = R.arguments[0]), R.type === 20 || (R.type === 4 || R.type === 8) && Nt(R, t) > 0)
        return;
      w === "ref" ? m = !0 : w === "class" ? I = !0 : w === "style" ? M = !0 : w !== "key" && !v.includes(w) && v.push(w), s && (w === "class" || w === "style") && !v.includes(w) && v.push(w);
    } else
      y = !0;
  };
  for (let O = 0; O < n.length; O++) {
    const R = n[O];
    if (R.type === 6) {
      const { loc: w, name: $, nameLoc: T, value: A } = R;
      let L = !0;
      if ($ === "ref" && (m = !0, V()), $ === "is" && (Qi(i) || A && A.content.startsWith("vue:") || Vn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      d.push(
        Pe(
          de($, !0, T),
          de(
            A ? A.content : "",
            L,
            A ? A.loc : w
          )
        )
      );
    } else {
      const { name: w, arg: $, exp: T, loc: A, modifiers: L } = R, X = w === "bind", W = w === "on";
      if (w === "slot") {
        s || t.onError(
          Se(40, A)
        );
        continue;
      }
      if (w === "once" || w === "memo" || w === "is" || X && Dn($, "is") && (Qi(i) || Vn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || W && o)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (X && Dn($, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        W && p && Dn($, "vue:before-update")) && (h = !0), X && Dn($, "ref") && V(), !$ && (X || W)
      ) {
        if (y = !0, T)
          if (X) {
            if (E(), Y.NODE_ENV !== "production" && c.some((Et) => Et.type === 15 ? Et.properties.some(({ key: Ot }) => Ot.type !== 4 || !Ot.isStatic ? !0 : Ot.content !== "class" && Ot.content !== "style" && !hn(Ot.content)) : !0) && Ms(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              A
            ), Vn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              c.unshift(T);
              continue;
            }
            V(), E(), c.push(T);
          } else
            E({
              type: 14,
              loc: A,
              callee: t.helper(zl),
              arguments: s ? [T] : [T, "true"]
            });
        else
          t.onError(
            Se(
              X ? 34 : 35,
              A
            )
          );
        continue;
      }
      X && L.some((We) => We.content === "prop") && (g |= 32);
      const he = t.directiveTransforms[w];
      if (he) {
        const { props: We, needRuntime: Et } = he(R, e, t);
        !o && We.forEach(k), W && $ && !bt($) ? E(At(We, l)) : d.push(...We), Et && (u.push(R), _t(Et) && yf.set(R, Et));
      } else Dc(w) || (u.push(R), p && (h = !0));
    }
  }
  let _;
  if (c.length ? (E(), c.length > 1 ? _ = qe(
    t.helper(yo),
    c,
    l
  ) : _ = c[0]) : d.length && (_ = At(
    gc(d),
    l
  )), y ? g |= 16 : (I && !s && (g |= 2), M && !s && (g |= 4), v.length && (g |= 8), P && (g |= 32)), !h && (g === 0 || g === 32) && (m || S || u.length > 0) && (g |= 512), !t.inSSR && _)
    switch (_.type) {
      case 15:
        let O = -1, R = -1, w = !1;
        for (let A = 0; A < _.properties.length; A++) {
          const L = _.properties[A].key;
          bt(L) ? L.content === "class" ? O = A : L.content === "style" && (R = A) : L.isHandlerKey || (w = !0);
        }
        const $ = _.properties[O], T = _.properties[R];
        w ? _ = qe(
          t.helper(gr),
          [_]
        ) : ($ && !bt($.value) && ($.value = qe(
          t.helper(Ul),
          [$.value]
        )), T && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (M || T.value.type === 4 && T.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        T.value.type === 17) && (T.value = qe(
          t.helper(ql),
          [T.value]
        )));
        break;
      case 14:
        break;
      default:
        _ = qe(
          t.helper(gr),
          [
            qe(t.helper(Cr), [
              _
            ])
          ]
        );
        break;
    }
  return {
    props: _,
    directives: u,
    patchFlag: g,
    dynamicPropNames: v,
    shouldUseBlock: h
  };
}
function gc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (r.key.type === 8 || !r.key.isStatic) {
      n.push(r);
      continue;
    }
    const o = r.key.content, i = t.get(o);
    i ? (o === "style" || o === "class" || hn(o)) && Ev(i, r) : (t.set(o, r), n.push(r));
  }
  return n;
}
function Ev(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = Qn(
    [e.value, t.value],
    e.loc
  );
}
function wv(e, t) {
  const n = [], s = yf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Fl), t.directives.add(e.name), n.push(br(e.name, "directive")));
  const { loc: r } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const o = de("true", !1, r);
    n.push(
      At(
        e.modifiers.map(
          (i) => Pe(i, o)
        ),
        r
      )
    );
  }
  return Qn(n, e.loc);
}
function xv(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function Qi(e) {
  return e === "component" || e === "Component";
}
const Nv = (e, t) => {
  if (xo(e)) {
    const { children: n, loc: s } = e, { slotName: r, slotProps: o } = Sv(e, t), i = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      r,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    o && (i[2] = o, l = 3), n.length && (i[3] = $s([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), i.splice(l), e.codegenNode = qe(
      t.helper(Jd),
      i,
      s
    );
  }
};
function Sv(e, t) {
  let n = '"default"', s;
  const r = [];
  for (let o = 0; o < e.props.length; o++) {
    const i = e.props[o];
    if (i.type === 6)
      i.value && (i.name === "name" ? n = JSON.stringify(i.value.content) : (i.name = Ce(i.name), r.push(i)));
    else if (i.name === "bind" && Dn(i.arg, "name")) {
      if (i.exp)
        n = i.exp;
      else if (i.arg && i.arg.type === 4) {
        const l = Ce(i.arg.content);
        n = i.exp = de(l, !1, i.arg.loc);
      }
    } else
      i.name === "bind" && i.arg && bt(i.arg) && (i.arg.content = Ce(i.arg.content)), r.push(i);
  }
  if (r.length > 0) {
    const { props: o, directives: i } = bf(
      e,
      t,
      r,
      !1,
      !1
    );
    s = o, i.length && t.onError(
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
  const { loc: r, modifiers: o, arg: i } = e;
  !e.exp && !o.length && n.onError(Se(35, r));
  let l;
  if (i.type === 4)
    if (i.isStatic) {
      let u = i.content;
      Y.NODE_ENV !== "production" && u.startsWith("vnode") && n.onError(Se(51, i.loc)), u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const p = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Xt(Ce(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = de(p, !0, i.loc);
    } else
      l = Ut([
        `${n.helperString(zi)}(`,
        i,
        ")"
      ]);
  else
    l = i, l.children.unshift(`${n.helperString(zi)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let d = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const u = tf(a), p = !(u || v0(a)), h = a.content.includes(";");
    Y.NODE_ENV !== "production" && zn(
      a,
      n,
      !1,
      h
    ), (p || d && u) && (a = Ut([
      `${p ? "$event" : "(...args)"} => ${h ? "{" : "("}`,
      a,
      h ? "}" : ")"
    ]));
  }
  let c = {
    props: [
      Pe(
        l,
        a || de("() => {}", !1, r)
      )
    ]
  };
  return s && (c = s(c)), d && (c.props[0].value = n.cache(c.props[0].value)), c.props.forEach((u) => u.key.isHandlerKey = !0), c;
}, kv = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, r = !1;
      for (let o = 0; o < n.length; o++) {
        const i = n[o];
        if (hi(i)) {
          r = !0;
          for (let l = o + 1; l < n.length; l++) {
            const a = n[l];
            if (hi(a))
              s || (s = n[o] = Ut(
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
      if (!(!r || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (o) => o.type === 7 && !t.directiveTransforms[o.name]
      ) && e.tag !== "template")))
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          if (hi(i) || i.type === 8) {
            const l = [];
            (i.type !== 2 || i.content !== " ") && l.push(i), !t.ssr && Nt(i, t) === 0 && l.push(
              1 + (Y.NODE_ENV !== "production" ? ` /* ${Qs[1]} */` : "")
            ), n[o] = {
              type: 12,
              content: i,
              loc: i.loc,
              codegenNode: qe(
                t.helper(Pl),
                l
              )
            };
          }
        }
    };
}, vc = /* @__PURE__ */ new WeakSet(), Cv = (e, t) => {
  if (e.type === 1 && yt(e, "once", !0))
    return vc.has(e) || t.inVOnce || t.inSSR ? void 0 : (vc.add(e), t.inVOnce = !0, t.helper(bo), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, Ef = (e, t, n) => {
  const { exp: s, arg: r } = e;
  if (!s)
    return n.onError(
      Se(41, e.loc)
    ), Br();
  const o = s.loc.source.trim(), i = s.type === 4 ? s.content : o, l = n.bindingMetadata[o];
  if (l === "props" || l === "props-aliased")
    return n.onError(Se(44, s.loc)), Br();
  if (!i.trim() || !tf(s))
    return n.onError(
      Se(42, s.loc)
    ), Br();
  const a = r || de("modelValue", !0), d = r ? bt(r) ? `onUpdate:${Ce(r.content)}` : Ut(['"onUpdate:" + ', r]) : "onUpdate:modelValue";
  let c;
  const u = n.isTS ? "($event: any)" : "$event";
  c = Ut([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    Pe(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    Pe(d, c)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const h = e.modifiers.map((m) => m.content).map((m) => (Yl(m) ? m : JSON.stringify(m)) + ": true").join(", "), g = r ? bt(r) ? `${r.content}Modifiers` : Ut([r, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      Pe(
        g,
        de(
          `{ ${h} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return Br(p);
};
function Br(e = []) {
  return { props: e };
}
const Ov = /[\w).+\-_$\]]/, Dv = (e, t) => {
  Vn("COMPILER_FILTERS", t) && (e.type === 5 ? So(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && So(n.exp, t);
  }));
};
function So(e, t) {
  if (e.type === 4)
    yc(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? yc(s, t) : s.type === 8 ? So(e, t) : s.type === 5 && So(s.content, t));
    }
}
function yc(e, t) {
  const n = e.content;
  let s = !1, r = !1, o = !1, i = !1, l = 0, a = 0, d = 0, c = 0, u, p, h, g, m = [];
  for (h = 0; h < n.length; h++)
    if (p = u, u = n.charCodeAt(h), s)
      u === 39 && p !== 92 && (s = !1);
    else if (r)
      u === 34 && p !== 92 && (r = !1);
    else if (o)
      u === 96 && p !== 92 && (o = !1);
    else if (i)
      u === 47 && p !== 92 && (i = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(h + 1) !== 124 && n.charCodeAt(h - 1) !== 124 && !l && !a && !d)
      g === void 0 ? (c = h + 1, g = n.slice(0, h).trim()) : I();
    else {
      switch (u) {
        case 34:
          r = !0;
          break;
        case 39:
          s = !0;
          break;
        case 96:
          o = !0;
          break;
        case 40:
          d++;
          break;
        case 41:
          d--;
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
        let M = h - 1, P;
        for (; M >= 0 && (P = n.charAt(M), P === " "); M--)
          ;
        (!P || !Ov.test(P)) && (i = !0);
      }
    }
  g === void 0 ? g = n.slice(0, h).trim() : c !== 0 && I();
  function I() {
    m.push(n.slice(c, h).trim()), c = h + 1;
  }
  if (m.length) {
    for (Y.NODE_ENV !== "production" && Eo(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), h = 0; h < m.length; h++)
      g = Tv(g, m[h], t);
    e.content = g, e.ast = void 0;
  }
}
function Tv(e, t, n) {
  n.helper(Bl);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${br(t, "filter")}(${e})`;
  {
    const r = t.slice(0, s), o = t.slice(s + 1);
    return n.filters.add(r), `${br(r, "filter")}(${e}${o !== ")" ? "," + o : o}`;
  }
}
const bc = /* @__PURE__ */ new WeakSet(), Av = (e, t) => {
  if (e.type === 1) {
    const n = yt(e, "memo");
    return !n || bc.has(e) ? void 0 : (bc.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Gl(s, t), e.codegenNode = qe(t.helper(Kl), [
        n.exp,
        $s(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function $v(e) {
  return [
    [
      Cv,
      av,
      Av,
      pv,
      Dv,
      ...Y.NODE_ENV !== "production" ? [lv] : [],
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
function Vv(e, t = {}) {
  const n = t.onError || Jl, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(Se(47)) : s && n(Se(48));
  const r = !1;
  t.cacheHandlers && n(Se(49)), t.scopeId && !s && n(Se(50));
  const o = fe({}, t, {
    prefixIdentifiers: r
  }), i = le(e) ? M0(e, o) : e, [l, a] = $v();
  return F0(
    i,
    fe({}, o, {
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
  ), U0(i, o);
}
const Iv = () => ({ props: [] });
var rt = {};
const wf = Symbol(rt.NODE_ENV !== "production" ? "vModelRadio" : ""), xf = Symbol(
  rt.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), Nf = Symbol(rt.NODE_ENV !== "production" ? "vModelText" : ""), Sf = Symbol(
  rt.NODE_ENV !== "production" ? "vModelSelect" : ""
), Zi = Symbol(
  rt.NODE_ENV !== "production" ? "vModelDynamic" : ""
), kf = Symbol(
  rt.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Cf = Symbol(
  rt.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), Of = Symbol(rt.NODE_ENV !== "production" ? "vShow" : ""), Zl = Symbol(rt.NODE_ENV !== "production" ? "Transition" : ""), Df = Symbol(
  rt.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
s0({
  [wf]: "vModelRadio",
  [xf]: "vModelCheckbox",
  [Nf]: "vModelText",
  [Sf]: "vModelSelect",
  [Zi]: "vModelDynamic",
  [kf]: "withModifiers",
  [Cf]: "withKeys",
  [Of]: "vShow",
  [Zl]: "Transition",
  [Df]: "TransitionGroup"
});
let us;
function Mv(e, t = !1) {
  return us || (us = document.createElement("div")), t ? (us.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, us.children[0].getAttribute("foo")) : (us.innerHTML = e, us.textContent);
}
const Pv = {
  parseMode: "html",
  isVoidTag: op,
  isNativeTag: (e) => Ac(e) || $c(e) || Vc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Mv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return Zl;
    if (e === "TransitionGroup" || e === "transition-group")
      return Df;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let s = t ? t.ns : n;
    if (t && s === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (r) => r.type === 6 && r.name === "encoding" && r.value != null && (r.value.content === "text/html" || r.value.content === "application/xhtml+xml")
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
  const n = Tc(e);
  return de(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function jt(e, t) {
  return Se(
    e,
    t,
    rt.NODE_ENV !== "production" ? Fv : void 0
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
  const { exp: s, loc: r } = e;
  return s || n.onError(
    jt(53, r)
  ), t.children.length && (n.onError(
    jt(54, r)
  ), t.children.length = 0), {
    props: [
      Pe(
        de("innerHTML", !0, r),
        s || de("", !0)
      )
    ]
  };
}, jv = (e, t, n) => {
  const { exp: s, loc: r } = e;
  return s || n.onError(
    jt(55, r)
  ), t.children.length && (n.onError(
    jt(56, r)
  ), t.children.length = 0), {
    props: [
      Pe(
        de("textContent", !0),
        s ? Nt(s, n) > 0 ? s : qe(
          n.helperString(Wo),
          [s],
          r
        ) : de("", !0)
      )
    ]
  };
}, Hv = (e, t, n) => {
  const s = Ef(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    jt(
      58,
      e.arg.loc
    )
  );
  function r() {
    const l = yt(t, "bind");
    l && Dn(l.arg, "value") && n.onError(
      jt(
        60,
        l.loc
      )
    );
  }
  const { tag: o } = t, i = n.isCustomElement(o);
  if (o === "input" || o === "textarea" || o === "select" || i) {
    let l = Nf, a = !1;
    if (o === "input" || i) {
      const d = yr(t, "type");
      if (d) {
        if (d.type === 7)
          l = Zi;
        else if (d.value)
          switch (d.value.content) {
            case "radio":
              l = wf;
              break;
            case "checkbox":
              l = xf;
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
              rt.NODE_ENV !== "production" && r();
              break;
          }
      } else y0(t) ? l = Zi : rt.NODE_ENV !== "production" && r();
    } else o === "select" ? l = Sf : rt.NODE_ENV !== "production" && r();
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
}, Uv = /* @__PURE__ */ Ke("passive,once,capture"), qv = /* @__PURE__ */ Ke(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), zv = /* @__PURE__ */ Ke("left,right"), Tf = /* @__PURE__ */ Ke("onkeyup,onkeydown,onkeypress"), Wv = (e, t, n, s) => {
  const r = [], o = [], i = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && Ms(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Uv(a) ? i.push(a) : zv(a) ? bt(e) ? Tf(e.content.toLowerCase()) ? r.push(a) : o.push(a) : (r.push(a), o.push(a)) : qv(a) ? o.push(a) : r.push(a);
  }
  return {
    keyModifiers: r,
    nonKeyModifiers: o,
    eventOptionModifiers: i
  };
}, _c = (e, t) => bt(e) && e.content.toLowerCase() === "onclick" ? de(t, !0) : e.type !== 4 ? Ut([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Kv = (e, t, n) => _f(e, t, n, (s) => {
  const { modifiers: r } = e;
  if (!r.length) return s;
  let { key: o, value: i } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: d } = Wv(o, r, n, e.loc);
  if (a.includes("right") && (o = _c(o, "onContextmenu")), a.includes("middle") && (o = _c(o, "onMouseup")), a.length && (i = qe(n.helper(kf), [
    i,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!bt(o) || Tf(o.content.toLowerCase())) && (i = qe(n.helper(Cf), [
    i,
    JSON.stringify(l)
  ])), d.length) {
    const c = d.map(nn).join("");
    o = bt(o) ? de(`${o.content}${c}`, !0) : Ut(["(", o, `) + "${c}"`]);
  }
  return {
    props: [Pe(o, i)]
  };
}), Gv = (e, t, n) => {
  const { exp: s, loc: r } = e;
  return s || n.onError(
    jt(61, r)
  ), {
    props: [],
    needRuntime: n.helper(Of)
  };
}, Jv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === Zl)
    return () => {
      if (!e.children.length)
        return;
      Af(e) && t.onError(
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
        for (const r of s.props)
          r.type === 7 && r.name === "show" && e.props.push({
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
const Yv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (rt.NODE_ENV !== "production" && t.onError(
    jt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Xv(e, t) {
  return e === "template" ? !0 : e in Ec ? Ec[e].has(t) : t in wc ? wc[t].has(e) : !(e in xc && xc[e].has(t) || t in Nc && Nc[t].has(e));
}
const ds = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Hn = /* @__PURE__ */ new Set([]), Ec = {
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
  script: Hn,
  iframe: Hn,
  option: Hn,
  textarea: Hn,
  style: Hn,
  title: Hn
}, wc = {
  // sections
  html: Hn,
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
}, xc = {
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
}, Nc = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: ds,
  h2: ds,
  h3: ds,
  h4: ds,
  h5: ds,
  h6: ds
}, Qv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Xv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Zv = [
  Rv,
  ...rt.NODE_ENV !== "production" ? [Jv, Qv] : []
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
  return Vv(
    e,
    fe({}, Pv, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Yv,
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
var Xs = {};
function ny() {
  wd();
}
Xs.NODE_ENV !== "production" && ny();
const Sc = /* @__PURE__ */ Object.create(null);
function sy(e, t) {
  if (!le(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return Xs.NODE_ENV !== "production" && Ie("invalid template option: ", e), Ae;
  const n = zf(e, t), s = Sc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    Xs.NODE_ENV !== "production" && !a && Ie(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const r = fe(
    {
      hoistStatic: !0,
      onError: Xs.NODE_ENV !== "production" ? i : void 0,
      onWarn: Xs.NODE_ENV !== "production" ? (a) => i(a, !0) : Ae
    },
    t
  );
  !r.isCustomElement && typeof customElements < "u" && (r.isCustomElement = (a) => !!customElements.get(a));
  const { code: o } = ty(e, r);
  function i(a, d = !1) {
    const c = d ? a.message : `Template compilation error: ${a.message}`, u = a.loc && Jf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    Ie(u ? `${c}
${u}` : c);
  }
  const l = new Function("Vue", o)(Xg);
  return l._rc = !0, Sc[n] = l;
}
vd(sy);
const Jo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, ry = {
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
    const n = e, s = t, r = ne(!1), o = te(() => n.href ? "a" : "button"), i = (c, u = "") => {
      var g, m, I;
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
      if (p[c])
        return p[c];
      const h = (I = (m = (g = window.Shopline) == null ? void 0 : g.theme) == null ? void 0 : m.settings) == null ? void 0 : I[c];
      if (h != null && h !== "")
        return h;
      try {
        const M = "--" + c.replace(/_/g, "-"), P = getComputedStyle(document.documentElement).getPropertyValue(M).trim();
        if (P) return P;
      } catch {
      }
      return u;
    }, l = te(() => {
      const c = {};
      if (n.rounded === "full")
        c.borderRadius = "9999px";
      else if (n.rounded === "none")
        c.borderRadius = "0";
      else if (n.buttonRadius !== null)
        c.borderRadius = typeof n.buttonRadius == "number" ? `${n.buttonRadius}px` : n.buttonRadius;
      else {
        const u = i("button_border_radius", "6");
        c.borderRadius = typeof u == "number" || !isNaN(u) ? `${u}px` : u;
      }
      return n.variant === "primary" ? (r.value ? c.backgroundColor = i("button_primary_bg_hover", "#b91c1c") : c.backgroundColor = i("button_primary_bg", "#dc2626"), c.color = i("button_primary_text", "white")) : n.variant === "secondary" ? (r.value ? c.backgroundColor = i("button_secondary_bg_hover", "#f9fafb") : c.backgroundColor = i("button_secondary_bg", "white"), c.color = i("button_secondary_text", "#374151"), c.borderColor = i("button_secondary_border", "#d1d5db")) : n.variant === "link" && (r.value ? c.color = i("button_primary_bg_hover", "#b91c1c") : c.color = i("button_primary_bg", "#dc2626")), c;
    }), a = te(() => {
      const c = [
        "inline-flex items-center justify-center font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      ];
      n.fullWidth && c.push("w-full");
      const u = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg"
      };
      return c.push(u[n.size]), n.variant === "primary" ? c.push(
        "border border-transparent",
        "shadow-sm"
      ) : n.variant === "secondary" ? c.push(
        "border",
        "shadow-sm"
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
        "underline",
        "hover:no-underline",
        "p-0",
        "focus:ring-0"
      ), c.join(" ");
    }), d = (c) => {
      !n.disabled && !n.loading && s("click", c);
    };
    return (c, u) => (N(), St(Iu(o.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: _e(a.value),
      style: je(l.value),
      onClick: d,
      onMouseenter: u[0] || (u[0] = (p) => r.value = !0),
      onMouseleave: u[1] || (u[1] = (p) => r.value = !1)
    }, {
      default: Fe(() => [
        e.loading ? (N(), C("svg", ry, u[2] || (u[2] = [
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
        ]))) : U("", !0),
        xl(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, bs = /* @__PURE__ */ Jo(oy, [["__scopeId", "data-v-ee93db6c"]]), iy = ["disabled"], ly = ["value", "min", "max"], ay = ["disabled"], $f = {
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
    const n = e, s = t, r = it(), o = te({
      get: () => n.modelValue,
      set: (c) => {
        var p, h, g;
        const u = Math.max(n.min, Math.min(n.max, c));
        if (s("update:modelValue", u), s("update", u), ((g = (h = (p = r == null ? void 0 : r.vnode) == null ? void 0 : p.el) == null ? void 0 : h.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const m = r.vnode.el.parentElement, I = m.getAttribute("data-line-key");
          if (I) {
            const M = new CustomEvent("quantity-update", {
              detail: { key: I, value: u },
              bubbles: !0
            });
            m.dispatchEvent(M);
          }
        }
      }
    }), i = () => {
      o.value > n.min && (o.value = o.value - n.step);
    }, l = () => {
      o.value < n.max && (o.value = o.value + n.step);
    }, a = (c) => {
      const u = parseInt(c.target.value) || n.min;
      o.value = u;
    }, d = (c) => {
      const u = parseInt(c.target.value) || n.min;
      o.value = u, c.target.value = o.value;
    };
    return (c, u) => (N(), C("div", {
      class: _e(["inline-flex items-center overflow-hidden bg-white", e.size === "small" ? "quantity-selector-small" : "quantity-selector"]),
      style: {
        border: "var(--input-border-thickness, 1px) solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))",
        borderRadius: "var(--input-border-radius, 30px)"
      }
    }, [
      f("button", {
        type: "button",
        class: _e(["flex items-center justify-center bg-gray-50 transition-all duration-200 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:hover:text-gray-600", e.size === "small" ? "w-8 h-8 p-1" : "w-10 h-10"]),
        style: {
          borderRight: "1px solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))"
        },
        disabled: e.modelValue <= e.min,
        onClick: i,
        "aria-label": "Decrease quantity"
      }, [
        (N(), C("svg", {
          class: _e((e.size === "small", "w-3 h-3")),
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, u[0] || (u[0] = [
          f("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20 12H4"
          }, null, -1)
        ]), 2))
      ], 10, iy),
      f("input", {
        type: "number",
        class: _e(["quantity-input text-center bg-white text-gray-900 font-medium", e.size === "small" ? "w-10 h-8 text-xs p-1" : "w-16 h-10 text-sm"]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: d,
        "aria-label": "Quantity"
      }, null, 42, ly),
      f("button", {
        type: "button",
        class: _e(["flex items-center justify-center bg-gray-50 transition-all duration-200 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:hover:text-gray-600", e.size === "small" ? "w-8 h-8 p-1" : "w-10 h-10"]),
        style: {
          borderLeft: "1px solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))"
        },
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, [
        (N(), C("svg", {
          class: _e((e.size === "small", "w-3 h-3")),
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, u[1] || (u[1] = [
          f("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4v16m8-8H4"
          }, null, -1)
        ]), 2))
      ], 10, ay)
    ], 2));
  }
}, cy = ["data-updating"], uy = { class: "flex gap-3 lg:gap-4" }, dy = { class: "flex-shrink-0" }, fy = ["href"], py = ["src", "alt"], hy = { class: "flex-1 min-w-0" }, my = { class: "flex justify-between gap-4 mb-3" }, gy = { class: "flex-1" }, vy = { class: "text-base lg:text-lg font-medium mb-1" }, yy = ["href"], by = {
  key: 0,
  class: "text-sm text-gray-600 mb-2"
}, _y = {
  key: 1,
  class: "space-y-1 mt-2"
}, Ey = { class: "font-medium" }, wy = { class: "lg:hidden text-right flex-shrink-0" }, xy = { class: "text-base font-semibold text-gray-900 whitespace-nowrap" }, Ny = {
  key: 0,
  class: "text-sm text-gray-500 line-through"
}, Sy = {
  key: 0,
  class: "space-y-2 mb-3"
}, ky = { class: "flex items-center justify-between gap-4" }, Cy = { class: "flex items-center gap-3" }, Oy = ["disabled"], Dy = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, Ty = {
  key: 1,
  class: "w-5 h-5 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Ay = { class: "hidden lg:block text-right flex-shrink-0" }, $y = { class: "text-lg font-semibold text-gray-900 whitespace-nowrap" }, Vy = {
  key: 0,
  class: "text-sm text-gray-500 line-through"
}, Iy = {
  key: 1,
  class: "text-xs text-green-600 font-medium mt-1"
}, My = {
  key: 1,
  class: "text-xs text-amber-600 mt-2"
}, Py = {
  key: 2,
  class: "text-xs text-red-600 mt-2"
}, Vf = {
  __name: "CartItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(e, { emit: t }) {
    const n = e, s = t, r = ne(n.item.quantity), o = ne(!1), i = ne(""), l = te(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = te(() => {
      var h;
      return ((h = n.item.variant) == null ? void 0 : h.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), d = te(() => {
      const h = n.item.image || "/assets/placeholder-product.svg";
      return window.getImageUrl && h !== "/assets/placeholder-product.svg" ? window.getImageUrl(h, { preset: "cart-item" }) : h;
    }), c = (h) => {
      var P, y;
      if (!h && h !== 0) return "$0.00";
      const g = ((P = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : P.money_format) || "${{amount}}", m = ((y = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : y.current) || "en", M = new Intl.NumberFormat(m, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(h));
      return g.replace("{{amount}}", M);
    }, u = async (h) => {
      if (!o.value) {
        o.value = !0, i.value = "";
        try {
          s("update", {
            key: n.item.key,
            quantity: h
          }), h === 0 && s("remove", n.item.key);
        } catch (g) {
          console.error("Failed to update quantity:", g), i.value = "Failed to update quantity. Please try again.", r.value = n.item.quantity;
        } finally {
          o.value = !1;
        }
      }
    }, p = async () => {
      if (!o.value) {
        o.value = !0, i.value = "";
        try {
          s("remove", n.item.key);
        } catch (h) {
          console.error("Failed to remove item:", h), i.value = "Failed to remove item. Please try again.";
        } finally {
          o.value = !1;
        }
      }
    };
    return Zt(
      () => n.item.quantity,
      (h) => {
        r.value = h;
      }
    ), (h, g) => (N(), C("div", {
      class: "p-3 lg:p-4 border-b border-gray-200 last:border-b-0 bg-white hover:bg-gray-50 transition-colors",
      "data-updating": o.value
    }, [
      f("div", uy, [
        f("div", dy, [
          f("a", {
            href: e.item.url,
            class: "block relative overflow-hidden rounded-lg bg-gray-100"
          }, [
            f("img", {
              src: d.value,
              alt: e.item.product_title,
              class: "w-20 h-20 lg:w-24 lg:h-24 object-cover",
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
                  class: "text-gray-900 hover:text-gray-700 transition-colors"
                }, ee(e.item.product_title), 9, yy)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (N(), C("p", by, ee(e.item.variant_title), 1)) : U("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (N(), C("div", _y, [
                (N(!0), C(ie, null, Ee(e.item.properties, (m, I) => (N(), C("p", {
                  key: I,
                  class: "text-xs text-gray-600"
                }, [
                  f("span", Ey, ee(I) + ":", 1),
                  pt(" " + ee(m), 1)
                ]))), 128))
              ])) : U("", !0)
            ]),
            f("div", wy, [
              f("p", xy, ee(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (N(), C("p", Ny, ee(c(e.item.original_price * e.item.quantity)), 1)) : U("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (N(), C("div", Sy, [
            (N(!0), C(ie, null, Ee(e.item.discounts, (m) => (N(), C("div", {
              key: m.id,
              class: "flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-lg"
            }, [
              g[1] || (g[1] = f("svg", {
                class: "w-4 h-4 flex-shrink-0",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                f("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              pt(" " + ee(m.title) + " (-" + ee(c(m.amount || m.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : U("", !0),
          f("div", ky, [
            f("div", Cy, [
              ue($f, {
                modelValue: r.value,
                "onUpdate:modelValue": [
                  g[0] || (g[0] = (m) => r.value = m),
                  u
                ],
                min: 0,
                max: l.value,
                disabled: o.value,
                size: "small"
              }, null, 8, ["modelValue", "max", "disabled"]),
              f("button", {
                type: "button",
                onClick: p,
                class: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all",
                disabled: o.value,
                "aria-label": "Remove item from cart"
              }, [
                o.value ? (N(), C("svg", Ty, g[3] || (g[3] = [
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
                ]))) : (N(), C("svg", Dy, g[2] || (g[2] = [
                  f("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, Oy)
            ]),
            f("div", Ay, [
              f("p", $y, ee(c(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (N(), C("p", Vy, ee(c(e.item.original_price * e.item.quantity)), 1)) : U("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (N(), C("p", Iy, " Save " + ee(Math.round(
                (e.item.original_price - e.item.price) / e.item.original_price * 100
              )) + "% ", 1)) : U("", !0)
            ])
          ]),
          a.value ? (N(), C("p", My, " Only " + ee(e.item.variant.inventory_quantity) + " left in stock ", 1)) : U("", !0),
          i.value ? (N(), C("p", Py, ee(i.value), 1)) : U("", !0)
        ])
      ])
    ], 8, cy));
  }
}, Ry = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden"
}, Ly = { class: "absolute inset-0 overflow-hidden" }, Fy = { class: "fixed inset-y-0 right-0 max-w-full flex pointer-events-none" }, By = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, jy = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, Hy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, Uy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, qy = { class: "flex-1 overflow-y-auto" }, zy = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, Wy = { key: 1 }, Ky = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, Gy = {
  key: 0,
  class: "flex items-center gap-2"
}, Jy = {
  key: 1,
  class: "flex items-center gap-2"
}, Yy = { class: "text-sm text-blue-800" }, Xy = {
  key: 2,
  class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden"
}, Qy = { class: "flex justify-between text-base font-medium text-gray-900" }, Zy = { class: "space-y-3" }, If = {
  __name: "CartDrawer",
  setup(e) {
    const t = ne(!1), n = ne([]), s = ne(0), r = te(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/checkout";
    }), o = te(() => {
      var m, I;
      return ((I = (m = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : m.settings) == null ? void 0 : I.free_shipping_threshold) || 50;
    }), i = te(() => {
      var g, m;
      return ((m = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : m.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var y, S, v, E;
      if (!g && g !== 0) return "$0.00";
      const m = ((y = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : y.money_format) || "${{amount}}";
      (S = Shopline == null ? void 0 : Shopline.shop) != null && S.money_with_currency_format, (v = Shopline == null ? void 0 : Shopline.shop) != null && v.currency;
      const I = ((E = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : E.current) || "en", P = new Intl.NumberFormat(I, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(parseFloat(g));
      return m.replace("{{amount}}", P);
    }, a = () => {
      t.value = !0, document.body.classList.add("overflow-hidden"), c();
    }, d = () => {
      t.value = !1, document.body.classList.remove("overflow-hidden");
    }, c = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, u = async ({ key: g, quantity: m }) => {
      await window.OrionCart.updateItem(g, m), c();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), c();
    }, h = (g) => {
      g.key === "Escape" && t.value && d();
    };
    return ot(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", d), document.addEventListener("keydown", h);
    }), vn(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", d), document.removeEventListener("keydown", h);
    }), (g, m) => (N(), St(Rn, { to: "body" }, [
      ue(ft, { name: "drawer" }, {
        default: Fe(() => [
          t.value ? (N(), C("div", Ry, [
            f("div", Ly, [
              ue(ft, { name: "fade" }, {
                default: Fe(() => [
                  t.value ? (N(), C("div", {
                    key: 0,
                    class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: d
                  })) : U("", !0)
                ]),
                _: 1
              }),
              f("div", Fy, [
                ue(ft, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Fe(() => [
                    t.value ? (N(), C("div", By, [
                      f("div", jy, [
                        f("div", Hy, [
                          f("div", null, [
                            m[0] || (m[0] = f("h2", { class: "text-xl" }, "Shopping Cart", -1)),
                            n.value.length > 0 ? (N(), C("p", Uy, ee(n.value.length) + " " + ee(n.value.length === 1 ? "item" : "items"), 1)) : U("", !0)
                          ]),
                          f("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: d
                          }, m[1] || (m[1] = [
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
                        f("div", qy, [
                          n.value.length === 0 ? (N(), C("div", zy, [
                            m[3] || (m[3] = f("div", { class: "relative w-24 h-24 mb-6" }, [
                              f("div", { class: "absolute inset-0 bg-gray-100 rounded-full" }),
                              f("svg", {
                                class: "absolute inset-0 w-full h-full p-6 text-gray-400",
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
                            m[4] || (m[4] = f("h3", { class: "text-2xl mb-2" }, "Your cart is empty", -1)),
                            m[5] || (m[5] = f("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            ue(bs, {
                              class: "button",
                              href: "/collections",
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Fe(() => m[2] || (m[2] = [
                                pt(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (N(), C("div", Wy, [
                            (N(!0), C(ie, null, Ee(n.value, (I) => (N(), St(Vf, {
                              key: I.key,
                              item: I,
                              onUpdate: u,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (N(), C("div", Ky, [
                          i.value ? (N(), C("div", {
                            key: 0,
                            class: _e([
                              s.value >= o.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200",
                              "p-3"
                            ]),
                            style: { "border-radius": "var(--button-radius, 8px)" }
                          }, [
                            s.value >= o.value ? (N(), C("div", Gy, m[6] || (m[6] = [
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
                              f("p", { class: "text-xs text-green-800" }, " Congratulations! You've unlocked free shipping! ", -1)
                            ]))) : (N(), C("div", Jy, [
                              m[7] || (m[7] = f("svg", {
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
                              f("p", Yy, " Add " + ee(l(o.value - s.value)) + " more for free shipping! ", 1)
                            ])),
                            s.value < o.value ? (N(), C("div", Xy, [
                              f("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: je({ width: Math.min(s.value / o.value * 100, 100) + "%" })
                              }, null, 4)
                            ])) : U("", !0)
                          ], 2)) : U("", !0),
                          f("div", null, [
                            f("div", Qy, [
                              m[8] || (m[8] = f("p", { class: "uppercase font-semibold" }, "Subtotal", -1)),
                              f("p", null, ee(l(s.value)), 1)
                            ]),
                            m[9] || (m[9] = f("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          f("div", Zy, [
                            ue(bs, {
                              class: "button",
                              href: r.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Fe(() => m[10] || (m[10] = [
                                pt(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            }, 8, ["href"]),
                            ue(bs, {
                              class: "uppercase",
                              onClick: d,
                              variant: "ghost",
                              "full-width": !0
                            }, {
                              default: Fe(() => m[11] || (m[11] = [
                                pt(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [11]
                            })
                          ])
                        ])) : U("", !0)
                      ])
                    ])) : U("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : U("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, eb = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden"
}, tb = { class: "absolute inset-0 overflow-hidden" }, nb = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, sb = {
  key: 0,
  class: "w-screen max-w-sm pointer-events-auto"
}, rb = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, ob = { class: "flex-1 overflow-y-auto" }, ib = { class: "px-4 py-4" }, lb = { class: "space-y-1" }, ab = { key: 0 }, cb = { key: 0 }, ub = ["onClick"], db = {
  key: 0,
  class: "mt-1 space-y-1"
}, fb = { key: 0 }, pb = ["onClick"], hb = {
  key: 0,
  class: "mt-1 space-y-1"
}, mb = ["href"], gb = ["href"], vb = ["href"], yb = { class: "px-4 py-4 border-t" }, bb = { class: "space-y-1 uppercase" }, _b = ["href"], Eb = {
  key: 0,
  class: "px-4 py-4 border-t"
}, wb = {
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
    const n = e, s = te(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), r = te(() => n.customerUrl || window.mobileMenuCustomerUrl || "/user/signIn"), o = te(() => n.showLocalization || window.mobileMenuShowLocalization || !1), i = ne(!1), l = ne([]), a = () => {
      console.log("openMenu called"), i.value = !0, document.body.classList.add("overflow-hidden");
    }, d = () => {
      i.value = !1, document.body.classList.remove("overflow-hidden");
    }, c = (u) => {
      const p = l.value.indexOf(u);
      p > -1 ? l.value.splice(p, 1) : l.value.push(u);
    };
    return t({
      openMenu: a,
      closeMenu: d
    }), ot(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", d);
      const u = (p) => {
        p.key === "Escape" && i.value && d();
      };
      document.addEventListener("keydown", u), vn(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", d), document.removeEventListener("keydown", u);
      });
    }), (u, p) => (N(), C("div", null, [
      (N(), St(Rn, { to: "body" }, [
        ue(ft, { name: "menu" }, {
          default: Fe(() => [
            i.value ? (N(), C("div", eb, [
              f("div", tb, [
                ue(ft, { name: "fade" }, {
                  default: Fe(() => [
                    i.value ? (N(), C("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: d
                    })) : U("", !0)
                  ]),
                  _: 1
                }),
                f("div", nb, [
                  ue(ft, {
                    name: "slide-left",
                    appear: ""
                  }, {
                    default: Fe(() => [
                      i.value ? (N(), C("div", sb, [
                        f("div", rb, [
                          f("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            p[1] || (p[1] = f("h2", { class: "text-xl" }, "Menu", -1)),
                            f("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: d
                            }, p[0] || (p[0] = [
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
                          f("div", ob, [
                            f("nav", ib, [
                              f("ul", lb, [
                                s.value.length === 0 ? (N(), C("li", ab, p[2] || (p[2] = [
                                  f("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 uppercase"
                                  }, " Shop ", -1)
                                ]))) : U("", !0),
                                (N(!0), C(ie, null, Ee(s.value, (h) => (N(), C("li", {
                                  key: h.id || h.title
                                }, [
                                  h.links && h.links.length ? (N(), C("div", cb, [
                                    f("button", {
                                      onClick: (g) => c(h.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50 uppercase"
                                    }, [
                                      f("span", null, ee(h.title), 1),
                                      (N(), C("svg", {
                                        class: _e(["h-5 w-5 transition-transform duration-200", {
                                          "rotate-180": l.value.includes(
                                            h.title
                                          )
                                        }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, p[3] || (p[3] = [
                                        f("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, ub),
                                    ue(ft, { name: "submenu" }, {
                                      default: Fe(() => [
                                        l.value.includes(h.title) ? (N(), C("ul", db, [
                                          (N(!0), C(ie, null, Ee(h.links, (g) => (N(), C("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (N(), C("div", fb, [
                                              f("button", {
                                                onClick: (m) => c(
                                                  `${h.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 uppercase"
                                              }, [
                                                f("span", null, ee(g.title), 1),
                                                (N(), C("svg", {
                                                  class: _e(["h-4 w-4 transition-transform duration-200", {
                                                    "rotate-180": l.value.includes(
                                                      `${h.title}-${g.title}`
                                                    )
                                                  }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, p[4] || (p[4] = [
                                                  f("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, pb),
                                              ue(ft, { name: "submenu" }, {
                                                default: Fe(() => [
                                                  l.value.includes(
                                                    `${h.title}-${g.title}`
                                                  ) ? (N(), C("ul", hb, [
                                                    (N(!0), C(ie, null, Ee(g.links, (m) => (N(), C("li", {
                                                      key: m.id || m.title
                                                    }, [
                                                      f("a", {
                                                        href: m.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50 !uppercase",
                                                        onClick: d
                                                      }, ee(m.title), 9, mb)
                                                    ]))), 128))
                                                  ])) : U("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (N(), C("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 !uppercase",
                                              onClick: d
                                            }, ee(g.title), 9, gb))
                                          ]))), 128))
                                        ])) : U("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (N(), C("a", {
                                    key: 1,
                                    href: h.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 !uppercase",
                                    onClick: d
                                  }, ee(h.title), 9, vb))
                                ]))), 128))
                              ])
                            ]),
                            f("div", yb, [
                              f("div", bb, [
                                f("a", {
                                  href: r.value,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, p[5] || (p[5] = [
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
                                    pt(" Account ")
                                  ], -1)
                                ]), 8, _b),
                                p[6] || (p[6] = f("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 uppercase"
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
                                    pt(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            o.value ? (N(), C("div", Eb, [
                              xl(u.$slots, "localization")
                            ])) : U("", !0)
                          ])
                        ])
                      ])) : U("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : U("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, xb = { class: "variant-picker" }, Nb = {
  key: 0,
  class: "w-12 h-12 single-variant-info mb-6 p-4 bg-gray-50 rounded-full overflow-hidden"
}, Sb = { class: "font-medium text-gray-900" }, kb = {
  key: 1,
  class: "mt-5 space-y-3.5"
}, Cb = { class: "font-medium text-sm" }, Ob = {
  key: 0,
  class: "flex flex-wrap gap-3"
}, Db = ["title", "aria-label", "disabled", "onClick"], Tb = ["src", "alt"], Ab = {
  key: 1,
  class: "text-xs"
}, $b = {
  key: 1,
  class: "color-swatches-wrapper mt-2 space-x-3"
}, Vb = ["title", "aria-label", "disabled", "onClick", "onMouseenter", "onMouseleave"], Ib = { style: { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", "white-space": "nowrap", "border-width": "0" } }, Mb = {
  key: 0,
  class: "color-swatch__checkmark",
  style: { position: "absolute", inset: "0", display: "flex", "align-items": "center", "justify-content": "center" }
}, Pb = {
  style: { width: "1.25rem", height: "1.25rem", filter: `drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))
                    drop-shadow(-1px -1px 1px rgba(255, 255, 255, 0.5))` },
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Rb = {
  key: 2,
  class: "variant-buttons-wrapper mt-1.5 space-x-2"
}, Lb = ["aria-label", "disabled", "onClick", "onMouseenter", "onMouseleave"], Fb = {
  key: 2,
  class: "single-variant-options"
}, Bb = { class: "text-sm font-medium text-gray-900" }, jb = { class: "w-12 h-12 px-4 py-2 bg-gray-50 rounded-full overflow-hidden inline-block" }, Hb = { class: "text-sm font-medium text-gray-700" }, Ub = {
  key: 3,
  class: "variant-picker-empty"
}, qb = {
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
    const n = e, s = t, r = (w, $) => {
      const T = document.getElementById("variantPicker");
      T && T.dispatchEvent(new CustomEvent(w, { detail: $, bubbles: !0 }));
    }, o = ne({}), i = ne(null), l = ne(!1), a = () => n.product && n.product.id ? n.product : window.productPageData && window.productPageData.product ? window.productPageData.product : {}, d = ne({}), c = te(() => d.value.variants || []), u = te(() => {
      if (d.value.options && d.value.options.length > 0)
        return d.value.options.map(($, T) => ({
          ...$,
          position: $.position || T + 1
        }));
      const w = [];
      if (c.value.length > 0) {
        if (c.value[0].option1) {
          const $ = [
            ...new Set(c.value.map((T) => T.option1).filter(Boolean))
          ];
          w.push({
            name: "Size",
            position: 1,
            values: $
          });
        }
        if (c.value[0].option2) {
          const $ = [
            ...new Set(c.value.map((T) => T.option2).filter(Boolean))
          ];
          w.push({
            name: "Color",
            position: 2,
            values: $
          });
        }
        if (c.value[0].option3) {
          const $ = [
            ...new Set(c.value.map((T) => T.option3).filter(Boolean))
          ];
          w.push({
            name: "Option",
            position: 3,
            values: $
          });
        }
      }
      return w;
    }), p = te(
      () => d.value.options_with_values || u.value
    ), h = async (w = 5) => {
      for (let $ = 0; $ < w; $++) {
        const T = a();
        if (T && T.id)
          return d.value = T, !0;
        $ < w - 1 && await new Promise((A) => setTimeout(A, 100));
      }
      return !1;
    };
    ot(async () => {
      if (await h(), c.value.length > 0) {
        let w = null;
        if (n.selectedVariantId && (w = c.value.find(
          ($) => $.id == n.selectedVariantId
        )), w || (w = c.value.find(($) => $.available) || c.value[0]), w)
          if (c.value.length === 1 && u.value.length === 0)
            es(() => {
              g(w);
            });
          else {
            if (w.option1) {
              const $ = u.value.find(
                (T) => T.position === 1
              );
              $ && (o.value[$.name] = w.option1);
            }
            if (w.option2) {
              const $ = u.value.find(
                (T) => T.position === 2
              );
              $ && (o.value[$.name] = w.option2);
            }
            if (w.option3) {
              const $ = u.value.find(
                (T) => T.position === 3
              );
              $ && (o.value[$.name] = w.option3);
            }
            es(() => {
              g(w);
            });
          }
      }
    });
    const g = (w) => {
      w && (i.value = w, l.value = !0, u.value.forEach(($, T) => {
        o.value[$.name] = w[`option${T + 1}`];
      }), n.updateUrl && w && m(w), w && w.featured_media && (s("media-change", w.featured_media), r("media-change", w.featured_media)), s("variant-change", w), r("variant-change", w));
    }, m = (w) => {
      const $ = new URL(window.location);
      w && w.id ? $.searchParams.set("sku", w.id) : $.searchParams.delete("sku"), window.history.replaceState({}, document.title, $.toString());
    }, I = (w, $) => {
      o.value[w] = $;
      const T = c.value.find((A) => u.value.every((L, X) => {
        const W = o.value[L.name];
        return A[`option${X + 1}`] === W;
      }));
      T && (g(T), n.sectionId && M(T));
    }, M = async (w) => {
      if (!(!w || !w.id))
        try {
          const $ = await fetch(
            `${window.location.pathname}?sku=${w.id}&section_id=${n.sectionId}`,
            {
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }
          );
          if (!$.ok) throw new Error("Failed to fetch product info");
          const T = await $.text(), L = new DOMParser().parseFromString(T, "text/html");
          s("product-info-update", {
            variant: w,
            html: L
          });
        } catch {
        }
    };
    Zt(
      () => n.selectedVariantId,
      (w) => {
        if (w) {
          const $ = c.value.find((T) => T.id == w);
          $ && g($);
        }
      }
    );
    const P = (w, $) => o.value[w] === $, y = (w, $) => {
      const T = u.value.findIndex(
        (A) => A.name === w
      );
      return c.value.some((A) => {
        const L = A[`option${T + 1}`] === $, X = u.value.every((W, he) => {
          if (W.name === w) return !0;
          const We = o.value[W.name];
          return We ? A[`option${he + 1}`] === We : !0;
        });
        return L && X && A.available;
      });
    }, S = (w) => {
      if (!w) return !1;
      const $ = w.toLowerCase();
      return $ === "color" || $ === "colour" || $.includes("color") || $.includes("colour");
    }, v = (w) => {
      const T = {
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
      }[w.toLowerCase()];
      return T || (w.startsWith("#") ? w : "#E5E7EB");
    }, E = (w) => p.value.some(
      ($) => $.name === w.name && $.values_images && $.values_images.length > 0
    ), V = (w) => {
      const $ = p.value.find(
        (T) => T.name === w.name
      );
      return !$ || !$.values_images ? w.values.map((T) => ({ value: T, image: null })) : $.values_images;
    }, k = (w, $ = 100) => w ? typeof w == "string" ? w : w.src ? w.src : "" : "", _ = (w, $) => {
      const T = P(w, $), A = y(w, $);
      return {
        padding: "0.5rem 1rem",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: T ? "rgb(17 24 39)" : "rgb(209 213 219)",
        borderRadius: "var(--button-radius, 0.375rem)",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: "500",
        color: T ? "rgb(255 255 255)" : "rgb(55 65 81)",
        backgroundColor: T ? "rgb(17 24 39)" : "rgb(255 255 255)",
        transition: "all 200ms",
        cursor: A ? "pointer" : "not-allowed",
        opacity: A ? "1" : "0.3",
        textDecoration: A ? "none" : "line-through",
        display: "inline-block",
        textAlign: "center",
        userSelect: "none"
      };
    }, O = (w) => {
      const $ = P("Color", w), T = y("Color", w), A = v(w), L = A.toLowerCase() === "#ffffff" || w.toLowerCase() === "white";
      return {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        borderWidth: $ ? "3px" : "2px",
        borderStyle: "solid",
        borderColor: $ ? "rgb(17 24 39)" : "rgb(229 231 235)",
        backgroundColor: A,
        position: "relative",
        flexShrink: "0",
        overflow: "hidden",
        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: T ? "pointer" : "not-allowed",
        opacity: T ? "1" : "0.4",
        boxShadow: $ ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        transform: $ ? "scale(1.1)" : "scale(1)"
      };
    }, R = (w, $, T) => {
      const A = P("Color", $);
      y("Color", $) && (T ? (w.target.style.transform = A ? "scale(1.1)" : "scale(1.05)", w.target.style.boxShadow = A ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)") : (w.target.style.transform = A ? "scale(1.1)" : "scale(1)", w.target.style.boxShadow = A ? "0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"));
    };
    return (w, $) => (N(), C("div", xb, [
      c.value.length === 1 && u.value.length === 0 && c.value[0].title && c.value[0].title !== "Default" && c.value[0].title !== "Default Title" && c.value[0].title.toLowerCase() !== "default" ? (N(), C("div", Nb, [
        $[0] || ($[0] = f("div", { class: "text-sm text-gray-600 mb-2" }, "Selected Option:", -1)),
        f("div", Sb, ee(c.value[0].title), 1)
      ])) : u.value.length > 0 ? (N(), C("div", kb, [
        (N(!0), C(ie, null, Ee(u.value, (T) => (N(), C("div", {
          key: T.name,
          class: "variant-option"
        }, [
          f("div", Cb, ee(T.name || "Option"), 1),
          E(T) ? (N(), C("div", Ob, [
            (N(!0), C(ie, null, Ee(V(T), (A, L) => (N(), C("button", {
              key: A.value,
              type: "button",
              class: _e([
                "variant-image-button",
                P(T.name, A.value) ? "variant-image-button--selected" : "",
                y(T.name, A.value) ? "" : "variant-image-button--unavailable"
              ]),
              title: A.value,
              "aria-label": `Select ${T.name} ${A.value}`,
              disabled: !y(T.name, A.value),
              onClick: (X) => I(T.name, A.value)
            }, [
              A.image ? (N(), C("img", {
                key: 0,
                src: k(A.image, 100),
                alt: A.value,
                class: "w-full h-full object-cover"
              }, null, 8, Tb)) : (N(), C("span", Ab, ee(A.value), 1))
            ], 10, Db))), 128))
          ])) : S(T.name) ? (N(), C("div", $b, [
            (N(!0), C(ie, null, Ee(T.values, (A) => (N(), C("button", {
              key: A,
              type: "button",
              class: _e([
                "color-swatch",
                P(T.name, A) ? "color-swatch--selected" : "",
                y(T.name, A) ? "" : "color-swatch--unavailable"
              ]),
              style: je(O(A)),
              title: A,
              "aria-label": `Select ${T.name} ${A}`,
              disabled: !y(T.name, A),
              onClick: tn((L) => I(T.name, A), ["stop"]),
              onMouseenter: (L) => R(L, A, !0),
              onMouseleave: (L) => R(L, A, !1)
            }, [
              f("span", Ib, ee(A), 1),
              P(T.name, A) ? (N(), C("span", Mb, [
                (N(), C("svg", Pb, $[1] || ($[1] = [
                  f("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd",
                    style: { fill: "white", stroke: "black", "stroke-width": "0.5px", "paint-order": "stroke" }
                  }, null, -1)
                ])))
              ])) : U("", !0)
            ], 46, Vb))), 128))
          ])) : (N(), C("div", Rb, [
            (N(!0), C(ie, null, Ee(T.values, (A) => (N(), C("button", {
              key: A,
              type: "button",
              class: _e(["flex w-12 h-12 text-center justify-center items-center rounded-full overflow-hidden", [
                "variant-button",
                P(T.name, A) ? "variant-button--selected" : "",
                y(T.name, A) ? "" : "variant-button--unavailable"
              ]]),
              style: je(_(T.name, A)),
              "aria-label": `Select ${T.name} ${A}`,
              disabled: !y(T.name, A),
              onClick: tn((L) => I(T.name, A), ["stop"]),
              onMouseenter: (L) => L.target.style.backgroundColor = P(
                T.name,
                A
              ) ? "rgb(31 41 55)" : "rgb(249 250 251)",
              onMouseleave: (L) => L.target.style.backgroundColor = P(
                T.name,
                A
              ) ? "rgb(17 24 39)" : "rgb(255 255 255)"
            }, ee(A), 47, Lb))), 128))
          ]))
        ]))), 128))
      ])) : c.value.length === 1 && u.value.length > 0 ? (N(), C("div", Fb, [
        (N(!0), C(ie, null, Ee(u.value, (T) => (N(), C("div", {
          key: T.name
        }, [
          f("h3", Bb, ee(T.name) + ":", 1),
          f("div", jb, [
            f("span", Hb, ee(c.value[0][`option${u.value.indexOf(T) + 1}`] || T.values[0]), 1)
          ])
        ]))), 128))
      ])) : U("", !0),
      c.value.length === 0 && u.value.length === 0 && !l.value ? (N(), C("div", Ub, $[2] || ($[2] = [
        f("div", { class: "p-4 bg-gray-50 border border-gray-200 rounded-md" }, [
          f("p", { class: "text-sm text-gray-600" }, "Loading variant options...")
        ], -1)
      ]))) : U("", !0)
    ]));
  }
}, zb = ["href"], Wb = ["src", "alt"], Kb = {
  key: 1,
  class: "h-full w-full flex items-center justify-center"
}, Gb = {
  key: 2,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, Jb = {
  key: 4,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, Yb = { class: "p-4 flex-1 flex flex-col" }, Xb = { class: "flex-1" }, Qb = {
  key: 0,
  class: "mb-3"
}, Zb = { class: "flex gap-1.5 flex-wrap" }, e1 = ["onClick", "title"], t1 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, n1 = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, s1 = { class: "text-lg font-semibold line-clamp-2 mb-2" }, r1 = ["href"], o1 = {
  key: 2,
  class: "flex items-center gap-1 mb-2"
}, i1 = { class: "flex" }, l1 = { class: "flex items-baseline gap-2 mb-4" }, a1 = { class: "text-lg font-bold text-gray-900" }, c1 = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, u1 = { class: "mt-auto" }, d1 = ["disabled"], f1 = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, p1 = { key: 1 }, h1 = {
  key: 2,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, m1 = {
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
    const n = te(() => {
      var T, A, L;
      return ((L = (A = (T = window.Shopline) == null ? void 0 : T.theme) == null ? void 0 : A.settings) == null ? void 0 : L.card_show_vendor) !== !1;
    }), s = te(() => {
      var T, A, L;
      return ((L = (A = (T = window.Shopline) == null ? void 0 : T.theme) == null ? void 0 : A.settings) == null ? void 0 : L.card_show_reviews) !== !1;
    }), r = e, o = t, i = ne(""), l = ne(!1), a = ne(!1), d = ne(!1), c = ne(!1), u = te(() => r.product ? r.product : {
      id: r.productId,
      title: r.title,
      handle: r.handle,
      url: r.url,
      vendor: r.vendor,
      price: typeof r.price == "string" ? parseFloat(r.price) : r.price,
      compare_at_price: typeof r.compareAtPrice == "string" ? parseFloat(r.compareAtPrice) : r.compareAtPrice,
      available: r.available,
      images: r.images || (r.image ? [{ src: r.image }] : []),
      featured_image: r.image,
      options: [],
      variants: r.variantId ? [{ id: r.variantId }] : []
    }), p = te(() => {
      const T = u.value.handle;
      return u.value.url || (T ? `/products/${T}` : "#");
    }), h = te(() => {
      var A, L, X;
      let T = null;
      return l.value && ((A = u.value.images) != null && A[1]) ? T = u.value.images[1].src : T = ((X = (L = u.value.images) == null ? void 0 : L[0]) == null ? void 0 : X.src) || u.value.featured_image || u.value.image || "/placeholder.jpg", window.getImageUrl && T !== "/placeholder.jpg" ? window.getImageUrl(T, { preset: "product-card" }) : T;
    }), g = te(() => {
      var T;
      return (T = u.value.options) == null ? void 0 : T.some(
        (A) => {
          var L, X;
          return ((L = A.name) == null ? void 0 : L.toLowerCase().includes("color")) || ((X = A.name) == null ? void 0 : X.toLowerCase().includes("colour"));
        }
      );
    }), m = te(() => {
      var A;
      const T = (A = u.value.options) == null ? void 0 : A.find(
        (L) => {
          var X, W;
          return ((X = L.name) == null ? void 0 : X.toLowerCase().includes("color")) || ((W = L.name) == null ? void 0 : W.toLowerCase().includes("colour"));
        }
      );
      return (T == null ? void 0 : T.values) || [];
    }), I = te(() => u.value.price || 0), M = te(() => u.value.compare_at_price || 0), P = te(() => u.value.available && M.value > I.value), y = te(() => P.value ? Math.round(
      (M.value - I.value) / M.value * 100
    ) : 0), S = te(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: c.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), v = te(() => ({
      ...S.value,
      backgroundColor: "rgb(var(--color-card-background, 255, 255, 255))"
    })), E = te(() => {
      var T, A, L;
      return ((L = (A = (T = window.Shopline) == null ? void 0 : T.theme) == null ? void 0 : A.settings) == null ? void 0 : L.show_product_card_wishlist) !== !1;
    }), V = (T) => `$${(T / 100).toFixed(2)}`, k = (T) => {
      const A = {
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
      }, L = T.toLowerCase();
      return A[L] || `#${L.replace("#", "")}`;
    }, _ = () => {
      var T;
      ((T = u.value.images) == null ? void 0 : T.length) > 1 && (l.value = !0);
    }, O = () => {
      l.value = !1;
    }, R = (T) => {
      i.value = T.value;
    }, w = () => {
      d.value = !d.value;
    }, $ = async () => {
      var T, A, L, X;
      a.value = !0;
      try {
        const W = (A = (T = u.value.variants) == null ? void 0 : T[0]) == null ? void 0 : A.id;
        if (!W)
          throw console.error("No variant ID found for product:", u.value), new Error("No variant ID found");
        const he = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [
              {
                id: W,
                quantity: 1
              }
            ]
          })
        });
        if (!he.ok)
          throw new Error("Failed to add to cart");
        const We = await he.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((X = (L = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : L.settings) == null ? void 0 : X.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", o("add-to-cart", { variantId: W, quantity: 1 });
      } catch (W) {
        console.error("Error adding to cart:", W);
      } finally {
        a.value = !1;
      }
    };
    return (T, A) => (N(), C("div", {
      class: "product-card group relative transition-all duration-300 overflow-hidden h-full flex flex-col",
      style: je(v.value),
      onMouseenter: A[2] || (A[2] = (L) => c.value = !0),
      onMouseleave: A[3] || (A[3] = (L) => c.value = !1)
    }, [
      f("a", {
        href: p.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        h.value ? (N(), C("img", {
          key: 0,
          src: h.value,
          alt: u.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110",
          onMouseenter: _,
          onMouseleave: O
        }, null, 40, Wb)) : (N(), C("div", Kb, A[4] || (A[4] = [
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
        P.value ? (N(), C("div", Gb, " -" + ee(y.value) + "% ", 1)) : U("", !0),
        u.value.available && E.value ? (N(), C("button", {
          key: 3,
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: tn(w, ["prevent"])
        }, [
          (N(), C("svg", {
            class: _e(["w-5 h-5", d.value ? "text-red-500 fill-current" : "text-gray-600"]),
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, A[5] || (A[5] = [
            f("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
          ]), 2))
        ])) : U("", !0),
        u.value.available ? U("", !0) : (N(), C("div", Jb, A[6] || (A[6] = [
          f("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, zb),
      f("div", Yb, [
        f("div", Xb, [
          g.value ? (N(), C("div", Qb, [
            f("div", Zb, [
              (N(!0), C(ie, null, Ee(m.value, (L) => (N(), C("button", {
                key: L.value,
                onClick: (X) => R(L),
                title: L.value,
                class: _e([
                  "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                  i.value === L.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
                ]),
                style: je({ backgroundColor: k(L.value) })
              }, [
                i.value === L.value ? (N(), C("span", t1, A[7] || (A[7] = [
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
                ]))) : U("", !0)
              ], 14, e1))), 128))
            ])
          ])) : U("", !0),
          n.value && u.value.vendor ? (N(), C("p", n1, ee(u.value.vendor), 1)) : U("", !0),
          f("h3", s1, [
            f("a", { href: p.value }, ee(u.value.title || "Untitled"), 9, r1)
          ]),
          s.value ? (N(), C("div", o1, [
            f("div", i1, [
              (N(), C(ie, null, Ee(5, (L) => f("svg", {
                key: L,
                class: _e([
                  "w-4 h-4",
                  L <= 4 ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"
                ]),
                viewBox: "0 0 20 20"
              }, A[8] || (A[8] = [
                f("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
              ]), 2)), 64))
            ]),
            A[9] || (A[9] = f("span", { class: "text-xs text-gray-500" }, "(24)", -1))
          ])) : U("", !0),
          f("div", l1, [
            f("span", a1, ee(V(I.value)), 1),
            M.value > I.value ? (N(), C("span", c1, ee(V(M.value)), 1)) : U("", !0)
          ])
        ]),
        f("div", u1, [
          u.value.available ? (N(), C("button", {
            key: 0,
            onClick: $,
            disabled: a.value,
            class: "button w-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
            style: {
              backgroundColor: "var(--button-primary-bg)",
              color: "var(--button-primary-text)",
              borderRadius: "var(--button-radius)"
            },
            onMouseenter: A[0] || (A[0] = (L) => L.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
            onMouseleave: A[1] || (A[1] = (L) => L.target.style.backgroundColor = "var(--button-primary-bg)")
          }, [
            a.value ? U("", !0) : (N(), C("svg", f1, A[10] || (A[10] = [
              f("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              }, null, -1)
            ]))),
            a.value ? (N(), C("svg", h1, A[11] || (A[11] = [
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
            ]))) : (N(), C("span", p1, "Add to Cart"))
          ], 40, d1)) : U("", !0)
        ])
      ])
    ], 36));
  }
}, g1 = { class: "collection-filters" }, v1 = { class: "lg:hidden mb-4" }, y1 = {
  class: "hidden lg:block bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden",
  style: { borderRadius: "var(--card-radius, 8px)" }
}, b1 = { class: "space-y-6" }, _1 = {
  key: 0,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, E1 = { class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0" }, w1 = { class: "flex items-center" }, x1 = { class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0" }, N1 = { class: "space-y-2" }, S1 = { class: "flex items-center" }, k1 = { class: "flex items-center" }, C1 = { class: "flex items-center" }, O1 = { class: "flex items-center" }, D1 = {
  key: 1,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, T1 = { class: "space-y-2" }, A1 = ["value"], $1 = { class: "ml-2 text-sm" }, V1 = {
  key: 2,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, I1 = { class: "space-y-2" }, M1 = ["value"], P1 = { class: "ml-2 text-sm" }, R1 = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, L1 = { class: "h-full flex flex-col" }, F1 = { class: "flex items-center justify-between p-4 border-b" }, B1 = { class: "flex-1 overflow-y-auto p-4" }, j1 = { class: "space-y-6" }, H1 = {
  key: 0,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, U1 = { class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0" }, q1 = { class: "flex items-center" }, z1 = { class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0" }, W1 = { class: "space-y-2" }, K1 = { class: "flex items-center" }, G1 = { class: "flex items-center" }, J1 = { class: "flex items-center" }, Y1 = { class: "flex items-center" }, X1 = {
  key: 1,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, Q1 = { class: "space-y-2" }, Z1 = ["value"], e_ = { class: "ml-2 text-sm" }, t_ = {
  key: 2,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, n_ = { class: "space-y-2" }, s_ = ["value"], r_ = { class: "ml-2 text-sm" }, Mf = {
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
    const n = e, s = t, r = ne("manual"), o = ne([]), i = ne([]), l = ne([]), a = ne(!1), d = ne(!1), c = () => {
      const v = new URLSearchParams(window.location.search);
      o.value = [], i.value = [], l.value = [], a.value = !1, r.value = v.get("sort_by") || "manual", v.get("filter.v.availability") === "1" && (a.value = !0);
      const E = v.getAll("filter.p.product_type");
      E.length > 0 && (i.value = E);
      const V = v.getAll("filter.p.vendor");
      V.length > 0 && (l.value = V);
      const k = v.getAll("filter.price.range");
      k.length > 0 && (o.value = k);
    }, u = () => {
      c();
    }, p = te(() => {
      const v = /* @__PURE__ */ new Set();
      return n.products.forEach((E) => {
        E.product_type && v.add(E.product_type);
      }), Array.from(v).sort();
    }), h = te(() => {
      const v = /* @__PURE__ */ new Set();
      return n.products.forEach((E) => {
        E.vendor && v.add(E.vendor);
      }), Array.from(v).sort();
    }), g = te(() => o.value.length > 0 || i.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      const v = new URL(window.location.href);
      r.value === "manual" ? v.searchParams.delete("sort_by") : v.searchParams.set("sort_by", r.value), window.location.href = v.toString();
    }, I = () => {
      d.value || M(), S();
    }, M = () => {
      const v = new URLSearchParams(window.location.search), E = [];
      for (const [k] of v)
        k.startsWith("filter.") && E.push(k);
      E.forEach((k) => {
        for (; v.has(k); )
          v.delete(k);
      }), a.value && v.set("filter.v.availability", "1"), o.value.length > 0 && o.value.forEach((k) => {
        v.append("filter.price.range", k);
      }), i.value.length > 0 && i.value.forEach((k) => {
        v.append("filter.p.product_type", k);
      }), l.value.length > 0 && l.value.forEach((k) => {
        v.append("filter.p.vendor", k);
      });
      const V = `${window.location.pathname}${v.toString() ? "?" + v.toString() : ""}`;
      window.location.href = V;
    }, P = () => {
      o.value = [], i.value = [], l.value = [], a.value = !1;
      const v = new URLSearchParams(window.location.search), E = [];
      for (const [_] of v)
        _.startsWith("filter.") && E.push(_);
      E.forEach((_) => v.delete(_));
      const V = v.get("sort_by"), k = `${window.location.pathname}${V ? "?sort_by=" + V : ""}`;
      window.location.href = k;
    }, y = () => {
      d.value = !1, M();
    }, S = () => {
      s("update-filters", {
        sort: r.value,
        priceRanges: o.value,
        types: i.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return ot(() => {
      c(), window.addEventListener("popstate", u);
    }), Ls(() => {
      window.removeEventListener("popstate", u);
    }), (v, E) => (N(), C("div", g1, [
      f("div", v1, [
        f("button", {
          onClick: E[0] || (E[0] = (V) => d.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 hover:bg-secondary-50 transition-colors",
          style: { borderRadius: "var(--card-radius, 8px)" }
        }, E[20] || (E[20] = [
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
      f("div", y1, [
        f("div", b1, [
          e.showSort ? (N(), C("div", _1, [
            E[22] || (E[22] = f("h3", { class: "text-base font-semibold mb-3" }, "Sort By", -1)),
            Te(f("select", {
              "onUpdate:modelValue": E[1] || (E[1] = (V) => r.value = V),
              onChange: m,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            }, E[21] || (E[21] = [
              Fs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">Alphabetically, A-Z</option><option value="title-descending">Alphabetically, Z-A</option><option value="price-ascending">Price, low to high</option><option value="price-descending">Price, high to low</option><option value="created-ascending">Date, old to new</option><option value="created-descending">Date, new to old</option>', 8)
            ]), 544), [
              [Ds, r.value]
            ])
          ])) : U("", !0),
          f("div", E1, [
            E[24] || (E[24] = f("h3", { class: "text-base font-semibold mb-3" }, "Availability", -1)),
            f("label", w1, [
              Te(f("input", {
                type: "checkbox",
                "onUpdate:modelValue": E[2] || (E[2] = (V) => a.value = V),
                onChange: I,
                class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
              }, null, 544), [
                [Re, a.value]
              ]),
              E[23] || (E[23] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          f("div", x1, [
            E[29] || (E[29] = f("h3", { class: "text-base font-semibold mb-3" }, "Price", -1)),
            f("div", N1, [
              f("label", S1, [
                Te(f("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": E[3] || (E[3] = (V) => o.value = V),
                  onChange: I,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Re, o.value]
                ]),
                E[25] || (E[25] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              f("label", k1, [
                Te(f("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": E[4] || (E[4] = (V) => o.value = V),
                  onChange: I,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Re, o.value]
                ]),
                E[26] || (E[26] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              f("label", C1, [
                Te(f("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": E[5] || (E[5] = (V) => o.value = V),
                  onChange: I,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Re, o.value]
                ]),
                E[27] || (E[27] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              f("label", O1, [
                Te(f("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": E[6] || (E[6] = (V) => o.value = V),
                  onChange: I,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 544), [
                  [Re, o.value]
                ]),
                E[28] || (E[28] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          p.value.length > 0 ? (N(), C("div", D1, [
            E[30] || (E[30] = f("h3", { class: "text-base font-semibold mb-3" }, "Product Type", -1)),
            f("div", T1, [
              (N(!0), C(ie, null, Ee(p.value, (V) => (N(), C("label", {
                key: V,
                class: "flex items-center"
              }, [
                Te(f("input", {
                  type: "checkbox",
                  value: V,
                  "onUpdate:modelValue": E[7] || (E[7] = (k) => i.value = k),
                  onChange: I,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, A1), [
                  [Re, i.value]
                ]),
                f("span", $1, ee(V), 1)
              ]))), 128))
            ])
          ])) : U("", !0),
          h.value.length > 0 ? (N(), C("div", V1, [
            E[31] || (E[31] = f("h3", { class: "text-base font-semibold mb-3" }, "Brand", -1)),
            f("div", I1, [
              (N(!0), C(ie, null, Ee(h.value, (V) => (N(), C("label", {
                key: V,
                class: "flex items-center"
              }, [
                Te(f("input", {
                  type: "checkbox",
                  value: V,
                  "onUpdate:modelValue": E[8] || (E[8] = (k) => l.value = k),
                  onChange: I,
                  class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                }, null, 40, M1), [
                  [Re, l.value]
                ]),
                f("span", P1, ee(V), 1)
              ]))), 128))
            ])
          ])) : U("", !0),
          g.value ? (N(), C("button", {
            key: 3,
            onClick: P,
            class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
          }, " Clear all filters ")) : U("", !0)
        ])
      ]),
      (N(), St(Rn, { to: "body" }, [
        d.value ? (N(), C("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: E[19] || (E[19] = tn((V) => d.value = !1, ["self"]))
        }, [
          f("div", {
            class: "absolute inset-0 bg-black bg-opacity-50",
            onClick: E[9] || (E[9] = (V) => d.value = !1)
          }),
          f("div", R1, [
            f("div", L1, [
              f("div", F1, [
                E[33] || (E[33] = f("h2", { class: "text-lg" }, "Filters", -1)),
                f("button", {
                  onClick: E[10] || (E[10] = (V) => d.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, E[32] || (E[32] = [
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
              f("div", B1, [
                f("div", j1, [
                  e.showSort ? (N(), C("div", H1, [
                    E[35] || (E[35] = f("h3", { class: "text-base font-semibold mb-3" }, "Sort By", -1)),
                    Te(f("select", {
                      "onUpdate:modelValue": E[11] || (E[11] = (V) => r.value = V),
                      onChange: m,
                      class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    }, E[34] || (E[34] = [
                      f("option", { value: "manual" }, "Featured", -1),
                      f("option", { value: "best-selling" }, "Best Selling", -1),
                      f("option", { value: "title-ascending" }, "Alphabetically, A-Z", -1),
                      f("option", { value: "title-descending" }, "Alphabetically, Z-A", -1),
                      f("option", { value: "price-ascending" }, "Price, low to high", -1),
                      f("option", { value: "price-descending" }, "Price, high to low", -1),
                      f("option", { value: "created-ascending" }, "Date, old to new", -1),
                      f("option", { value: "created-descending" }, "Date, new to old", -1)
                    ]), 544), [
                      [Ds, r.value]
                    ])
                  ])) : U("", !0),
                  f("div", U1, [
                    E[37] || (E[37] = f("h3", { class: "text-base font-semibold mb-3" }, "Availability", -1)),
                    f("label", q1, [
                      Te(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": E[12] || (E[12] = (V) => a.value = V),
                        onChange: I,
                        class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      }, null, 544), [
                        [Re, a.value]
                      ]),
                      E[36] || (E[36] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  f("div", z1, [
                    E[42] || (E[42] = f("h3", { class: "text-base font-semibold mb-3" }, "Price", -1)),
                    f("div", W1, [
                      f("label", K1, [
                        Te(f("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": E[13] || (E[13] = (V) => o.value = V),
                          onChange: I,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Re, o.value]
                        ]),
                        E[38] || (E[38] = f("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      f("label", G1, [
                        Te(f("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": E[14] || (E[14] = (V) => o.value = V),
                          onChange: I,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Re, o.value]
                        ]),
                        E[39] || (E[39] = f("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      f("label", J1, [
                        Te(f("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": E[15] || (E[15] = (V) => o.value = V),
                          onChange: I,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Re, o.value]
                        ]),
                        E[40] || (E[40] = f("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      f("label", Y1, [
                        Te(f("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": E[16] || (E[16] = (V) => o.value = V),
                          onChange: I,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 544), [
                          [Re, o.value]
                        ]),
                        E[41] || (E[41] = f("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  p.value.length > 0 ? (N(), C("div", X1, [
                    E[43] || (E[43] = f("h3", { class: "text-base font-semibold mb-3" }, "Product Type", -1)),
                    f("div", Q1, [
                      (N(!0), C(ie, null, Ee(p.value, (V) => (N(), C("label", {
                        key: V,
                        class: "flex items-center"
                      }, [
                        Te(f("input", {
                          type: "checkbox",
                          value: V,
                          "onUpdate:modelValue": E[17] || (E[17] = (k) => i.value = k),
                          onChange: I,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, Z1), [
                          [Re, i.value]
                        ]),
                        f("span", e_, ee(V), 1)
                      ]))), 128))
                    ])
                  ])) : U("", !0),
                  h.value.length > 0 ? (N(), C("div", t_, [
                    E[44] || (E[44] = f("h3", { class: "text-base font-semibold mb-3" }, "Brand", -1)),
                    f("div", n_, [
                      (N(!0), C(ie, null, Ee(h.value, (V) => (N(), C("label", {
                        key: V,
                        class: "flex items-center"
                      }, [
                        Te(f("input", {
                          type: "checkbox",
                          value: V,
                          "onUpdate:modelValue": E[18] || (E[18] = (k) => l.value = k),
                          onChange: I,
                          class: "w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                        }, null, 40, s_), [
                          [Re, l.value]
                        ]),
                        f("span", r_, ee(V), 1)
                      ]))), 128))
                    ])
                  ])) : U("", !0),
                  g.value ? (N(), C("button", {
                    key: 3,
                    onClick: P,
                    class: "text-sm text-primary-600 hover:text-primary-700 font-medium"
                  }, " Clear all filters ")) : U("", !0)
                ])
              ]),
              f("div", { class: "p-4 border-t" }, [
                f("button", {
                  onClick: y,
                  class: "w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : U("", !0)
      ]))
    ]));
  }
}, o_ = { class: "collection-grid" }, i_ = {
  key: 0,
  class: "mb-8"
}, l_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, a_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, c_ = { class: "mt-4 flex items-center justify-between" }, u_ = { class: "text-sm text-secondary-600" }, d_ = {
  key: 0,
  class: "lg:hidden"
}, f_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, p_ = {
  key: 0,
  class: "lg:col-span-1"
}, h_ = ["products"], m_ = {
  key: 1,
  class: "text-center py-12"
}, g_ = ["product"], v_ = {
  key: 3,
  class: "mt-8"
}, y_ = {
  key: 0,
  class: "inline-flex items-center"
}, b_ = {
  key: 1,
  class: "text-center"
}, __ = ["disabled"], E_ = { key: 0 }, w_ = { key: 1 }, x_ = {
  key: 2,
  class: "flex items-center justify-between"
}, N_ = { class: "flex-1 flex justify-between sm:hidden" }, S_ = ["disabled"], k_ = ["disabled"], C_ = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, O_ = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, D_ = ["disabled"], T_ = ["onClick"], A_ = ["disabled"], $_ = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, V_ = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, I_ = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, M_ = { class: "text-lg font-medium text-secondary-900" }, P_ = {
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
    const t = e, n = ne(!1), s = ne(!1), r = ne(t.currentPage), o = ne(t.products.length), i = ne("manual"), l = ne({}), a = ne(null), d = ne(null), c = te(() => {
      const _ = Number(t.columnsMobile), O = t.columnsDesktop, R = _ === 1 ? "grid-cols-1" : "grid-cols-2", w = O <= 3 ? `md:grid-cols-${O}` : "md:grid-cols-3", $ = `lg:grid-cols-${O}`;
      return `grid ${R} ${w} ${$} gap-4 lg:gap-6`;
    }), u = te(() => {
      var R, w, $;
      let _ = [...t.products];
      switch (l.value.inStockOnly && (_ = _.filter((T) => T.available)), ((R = l.value.priceRanges) == null ? void 0 : R.length) > 0 && (_ = _.filter((T) => {
        const A = T.price / 100;
        return l.value.priceRanges.some((L) => L === "0-50" ? A < 50 : L === "50-100" ? A >= 50 && A < 100 : L === "100-200" ? A >= 100 && A < 200 : L === "200+" ? A >= 200 : !1);
      })), ((w = l.value.types) == null ? void 0 : w.length) > 0 && (_ = _.filter((T) => l.value.types.includes(T.product_type))), (($ = l.value.vendors) == null ? void 0 : $.length) > 0 && (_ = _.filter((T) => l.value.vendors.includes(T.vendor))), l.value.sort || i.value) {
        case "price-ascending":
          _.sort((T, A) => T.price - A.price);
          break;
        case "price-descending":
          _.sort((T, A) => A.price - T.price);
          break;
        case "title-ascending":
          _.sort((T, A) => T.title.localeCompare(A.title));
          break;
        case "title-descending":
          _.sort((T, A) => A.title.localeCompare(T.title));
          break;
        case "created-ascending":
          _.sort((T, A) => new Date(T.created_at) - new Date(A.created_at));
          break;
        case "created-descending":
          _.sort((T, A) => new Date(A.created_at) - new Date(T.created_at));
          break;
      }
      return _;
    }), p = te(() => {
      if (t.enableInfiniteScroll)
        return u.value.slice(0, o.value);
      const _ = (r.value - 1) * t.productsPerPage, O = _ + t.productsPerPage;
      return u.value.slice(_, O);
    }), h = te(() => t.totalPages || Math.ceil(u.value.length / t.productsPerPage)), g = te(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : o.value < u.value.length), m = te(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, u.value.length - o.value)), I = te(() => {
      const _ = [], O = h.value, R = r.value;
      if (O <= 7)
        for (let w = 1; w <= O; w++)
          _.push(w);
      else if (R <= 3) {
        for (let w = 1; w <= 5; w++)
          _.push(w);
        _.push("..."), _.push(O);
      } else if (R >= O - 2) {
        _.push(1), _.push("...");
        for (let w = O - 4; w <= O; w++)
          _.push(w);
      } else {
        _.push(1), _.push("...");
        for (let w = R - 1; w <= R + 1; w++)
          _.push(w);
        _.push("..."), _.push(O);
      }
      return _.filter((w) => w === "..." || w >= 1 && w <= O);
    }), M = (_) => {
      l.value = _, r.value = 1, o.value = t.productsPerPage;
    }, P = () => {
      r.value = 1, o.value = t.productsPerPage;
    }, y = () => {
      s.value = !0, setTimeout(() => {
        o.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, S = async (_) => {
      var R;
      const O = new FormData();
      O.append("id", _.variants[0].id), O.append("quantity", "1"), await ((R = window.OrionCart) == null ? void 0 : R.addItem(O)), console.log("Added to cart:", _.title);
    }, v = (_) => {
      a.value = _;
    }, E = () => {
      a.value = null;
    };
    let V = null;
    const k = () => {
      !t.enableInfiniteScroll || !d.value || (V = new IntersectionObserver(
        (_) => {
          _[0].isIntersecting && g.value && !s.value && y();
        },
        { threshold: 0.1 }
      ), V.observe(d.value));
    };
    return ot(() => {
      k();
    }), vn(() => {
      V && V.disconnect();
    }), Zt(() => t.enableInfiniteScroll, () => {
      k();
    }), (_, O) => (N(), C("div", o_, [
      e.showHeader ? (N(), C("div", i_, [
        f("h1", l_, ee(e.collectionTitle), 1),
        e.collectionDescription ? (N(), C("div", a_, ee(e.collectionDescription), 1)) : U("", !0),
        f("div", c_, [
          f("p", u_, ee(e.totalProducts || u.value.length) + " products ", 1),
          e.enableSorting ? (N(), C("div", d_, [
            Te(f("select", {
              "onUpdate:modelValue": O[0] || (O[0] = (R) => i.value = R),
              onChange: P,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500",
              style: { borderRadius: "var(--button-radius)" }
            }, O[5] || (O[5] = [
              Fs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Ds, i.value]
            ])
          ])) : U("", !0)
        ])
      ])) : U("", !0),
      f("div", f_, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (N(), C("aside", p_, [
          f("collection-filters", {
            products: e.products,
            onUpdateFilters: M
          }, null, 40, h_)
        ])) : U("", !0),
        f("div", {
          class: _e(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (N(), C("div", {
            key: 0,
            class: _e(c.value)
          }, [
            (N(), C(ie, null, Ee(6, (R) => f("div", {
              key: R,
              class: "animate-pulse"
            }, O[6] || (O[6] = [
              f("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              f("div", { class: "mt-4 space-y-2" }, [
                f("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                f("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : u.value.length === 0 ? (N(), C("div", m_, O[7] || (O[7] = [
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
          ]))) : (N(), C("div", {
            key: 2,
            class: _e(c.value)
          }, [
            (N(!0), C(ie, null, Ee(p.value, (R) => (N(), C("product-card", {
              key: R.id,
              product: R,
              onQuickAdd: S,
              onQuickView: v
            }, null, 40, g_))), 128))
          ], 2)),
          !n.value && u.value.length > 0 ? (N(), C("div", v_, [
            e.enableInfiniteScroll ? (N(), C("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: d,
              class: "text-center py-4"
            }, [
              s.value ? (N(), C("div", y_, O[8] || (O[8] = [
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
                pt(" Loading more products... ", -1)
              ]))) : U("", !0)
            ], 512)) : g.value ? (N(), C("div", b_, [
              f("button", {
                onClick: y,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (N(), C("span", E_, "Loading...")) : (N(), C("span", w_, "Load More (" + ee(m.value) + " remaining)", 1))
              ], 8, __)
            ])) : U("", !0),
            !e.enableInfiniteScroll && h.value > 1 ? (N(), C("nav", x_, [
              f("div", N_, [
                f("button", {
                  onClick: O[1] || (O[1] = (R) => r.value--),
                  disabled: r.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, S_),
                f("button", {
                  onClick: O[2] || (O[2] = (R) => r.value++),
                  disabled: r.value === h.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, k_)
              ]),
              f("div", C_, [
                f("div", null, [
                  f("nav", O_, [
                    f("button", {
                      onClick: O[3] || (O[3] = (R) => r.value--),
                      disabled: r.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, O[9] || (O[9] = [
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
                    ]), 8, D_),
                    (N(!0), C(ie, null, Ee(I.value, (R) => (N(), C("button", {
                      key: R,
                      onClick: (w) => r.value = R,
                      class: _e([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        r.value === R ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, ee(R), 11, T_))), 128)),
                    f("button", {
                      onClick: O[4] || (O[4] = (R) => r.value++),
                      disabled: r.value === h.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, O[10] || (O[10] = [
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
                    ]), 8, A_)
                  ])
                ])
              ])
            ])) : U("", !0)
          ])) : U("", !0)
        ], 2)
      ]),
      (N(), St(Rn, { to: "body" }, [
        a.value ? (N(), C("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: tn(E, ["self"])
        }, [
          f("div", $_, [
            f("div", {
              class: "fixed inset-0 bg-black bg-opacity-50 transition-opacity",
              onClick: E
            }),
            f("div", V_, [
              f("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                f("button", {
                  onClick: E,
                  class: "bg-white text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                  style: { borderRadius: "var(--card-radius, 8px)" }
                }, O[11] || (O[11] = [
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
              f("div", I_, [
                f("h3", M_, ee(a.value.title), 1),
                O[12] || (O[12] = f("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : U("", !0)
      ]))
    ]));
  }
}, R_ = { class: "collection-sort-wrapper" }, L_ = {
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
    const n = ne(e.currentSort), s = () => new URLSearchParams(window.location.search), r = (i) => {
      const l = s();
      i === "manual" ? l.delete("sort_by") : l.set("sort_by", i);
      const a = `${window.location.pathname}${l.toString() ? "?" + l.toString() : ""}`;
      window.history.pushState({}, "", a), window.location.reload();
    }, o = () => {
      r(n.value);
    };
    return ot(() => {
      const l = s().get("sort_by");
      l && (n.value = l);
    }), (i, l) => (N(), C("div", R_, [
      Te(f("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
        onChange: o,
        class: "px-4 py-2 min-w-[200px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        style: { borderRadius: "var(--button-radius)" }
      }, l[1] || (l[1] = [
        Fs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option><option value="created-ascending">Date: Old to New</option><option value="created-descending">Date: New to Old</option>', 8)
      ]), 544), [
        [Ds, n.value]
      ])
    ]));
  }
}, F_ = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, B_ = { class: "absolute inset-0 overflow-hidden" }, j_ = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, H_ = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, U_ = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, q_ = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, z_ = { class: "h-12 flex flex-col justify-between" }, W_ = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, K_ = { class: "mb-6" }, G_ = { class: "flex items-center cursor-pointer" }, J_ = { class: "mb-6" }, Y_ = { class: "space-y-2" }, X_ = ["value"], Q_ = { class: "ml-2 text-sm" }, Z_ = {
  key: 0,
  class: "mb-6"
}, eE = { class: "space-y-2" }, tE = ["value"], nE = { class: "ml-2 text-sm" }, sE = {
  key: 1,
  class: "mb-6"
}, rE = { class: "space-y-2" }, oE = ["value"], iE = { class: "ml-2 text-sm" }, lE = {
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
    const t = e, n = ne(!1), s = ne({
      inStock: !1,
      priceRanges: [],
      types: [],
      vendors: []
    }), r = [
      { value: "0-50", label: "Under $50" },
      { value: "50-100", label: "$50 - $100" },
      { value: "100-200", label: "$100 - $200" },
      { value: "200+", label: "$200 & above" }
    ], o = te(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((m) => {
        m.product_type && g.add(m.product_type);
      }), Array.from(g).sort();
    }), i = te(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((m) => {
        m.vendor && g.add(m.vendor);
      }), Array.from(g).sort();
    }), l = te(() => {
      let g = 0;
      return s.value.inStock && g++, g += s.value.priceRanges.length, g += s.value.types.length, g += s.value.vendors.length, g;
    }), a = () => {
      n.value = !n.value, n.value ? (p(), document.body.classList.add("overflow-hidden")) : document.body.classList.remove("overflow-hidden");
    }, d = () => {
      n.value = !1, document.body.classList.remove("overflow-hidden");
    }, c = () => {
      const g = new URLSearchParams(window.location.search), m = [];
      for (const [M] of g)
        M.startsWith("filter.") && m.push(M);
      m.forEach((M) => {
        for (; g.has(M); )
          g.delete(M);
      }), s.value.inStock && g.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((M) => {
        g.append("filter.price.range", M);
      }), s.value.types.length > 0 && s.value.types.forEach((M) => {
        g.append("filter.p.product_type", M);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((M) => {
        g.append("filter.p.vendor", M);
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
      const g = new URLSearchParams(window.location.search), m = [];
      for (const [P] of g)
        P.startsWith("filter.") && m.push(P);
      m.forEach((P) => g.delete(P));
      const I = g.get("sort_by"), M = `${window.location.pathname}${I ? "?sort_by=" + I : ""}`;
      window.location.href = M;
    }, p = () => {
      const g = new URLSearchParams(window.location.search);
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      }, g.get("filter.v.availability") === "1" && (s.value.inStock = !0);
      const m = g.getAll("filter.p.product_type");
      m.length > 0 && (s.value.types = m);
      const I = g.getAll("filter.p.vendor");
      I.length > 0 && (s.value.vendors = I);
      const M = g.getAll("filter.price.range");
      M.length > 0 && (s.value.priceRanges = M);
    }, h = () => {
      p();
    };
    return ot(() => {
      p(), window.addEventListener("popstate", h);
    }), Ls(() => {
      window.removeEventListener("popstate", h), document.body.classList.remove("overflow-hidden");
    }), (g, m) => (N(), C("div", null, [
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
        f("span", {
          class: _e(["ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }]),
          style: { borderRadius: "9999px" }
        }, ee(l.value || "0"), 3)
      ]),
      (N(), St(Rn, { to: "body" }, [
        ue(ft, { name: "drawer" }, {
          default: Fe(() => [
            n.value ? (N(), C("div", F_, [
              f("div", B_, [
                ue(ft, { name: "fade" }, {
                  default: Fe(() => [
                    n.value ? (N(), C("div", {
                      key: 0,
                      class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: d
                    })) : U("", !0)
                  ]),
                  _: 1
                }),
                f("div", j_, [
                  ue(ft, {
                    name: "slide-left",
                    appear: ""
                  }, {
                    default: Fe(() => [
                      n.value ? (N(), C("div", H_, [
                        f("div", U_, [
                          f("div", q_, [
                            f("div", z_, [
                              m[6] || (m[6] = f("h2", { class: "text-xl" }, "Filters", -1)),
                              f("p", {
                                class: _e(["text-sm text-gray-500 h-5 transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }])
                              }, ee(l.value || "0") + " " + ee((l.value || 0) === 1 ? "filter" : "filters") + " active ", 3)
                            ]),
                            f("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: d
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
                          f("div", W_, [
                            f("div", K_, [
                              m[9] || (m[9] = f("h3", { class: "text-lg mb-3" }, "Availability", -1)),
                              f("label", G_, [
                                Te(f("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": m[0] || (m[0] = (I) => s.value.inStock = I),
                                  class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                }, null, 512), [
                                  [Re, s.value.inStock]
                                ]),
                                m[8] || (m[8] = f("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            f("div", J_, [
                              m[10] || (m[10] = f("h3", { class: "text-lg mb-3" }, "Price", -1)),
                              f("div", Y_, [
                                (N(), C(ie, null, Ee(r, (I) => f("label", {
                                  key: I.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Te(f("input", {
                                    type: "checkbox",
                                    value: I.value,
                                    "onUpdate:modelValue": m[1] || (m[1] = (M) => s.value.priceRanges = M),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, X_), [
                                    [Re, s.value.priceRanges]
                                  ]),
                                  f("span", Q_, ee(I.label), 1)
                                ])), 64))
                              ])
                            ]),
                            o.value.length > 0 ? (N(), C("div", Z_, [
                              m[11] || (m[11] = f("h3", { class: "text-lg mb-3" }, "Product Type", -1)),
                              f("div", eE, [
                                (N(!0), C(ie, null, Ee(o.value, (I) => (N(), C("label", {
                                  key: I,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Te(f("input", {
                                    type: "checkbox",
                                    value: I,
                                    "onUpdate:modelValue": m[2] || (m[2] = (M) => s.value.types = M),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, tE), [
                                    [Re, s.value.types]
                                  ]),
                                  f("span", nE, ee(I), 1)
                                ]))), 128))
                              ])
                            ])) : U("", !0),
                            i.value.length > 0 ? (N(), C("div", sE, [
                              m[12] || (m[12] = f("h3", { class: "text-lg mb-3" }, "Brand", -1)),
                              f("div", rE, [
                                (N(!0), C(ie, null, Ee(i.value, (I) => (N(), C("label", {
                                  key: I,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Te(f("input", {
                                    type: "checkbox",
                                    value: I,
                                    "onUpdate:modelValue": m[3] || (m[3] = (M) => s.value.vendors = M),
                                    class: "w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                  }, null, 8, oE), [
                                    [Re, s.value.vendors]
                                  ]),
                                  f("span", iE, ee(I), 1)
                                ]))), 128))
                              ])
                            ])) : U("", !0)
                          ]),
                          f("div", { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, [
                            f("button", {
                              onClick: c,
                              class: "button w-full flex justify-center items-center text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Apply Filters "),
                            f("button", {
                              onClick: u,
                              class: "button w-full flex justify-center items-center text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200",
                              style: { borderRadius: "var(--button-radius)" }
                            }, " Clear All ")
                          ])
                        ])
                      ])) : U("", !0)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])) : U("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
};
function aE(e) {
  return ll() ? (Lc(e), !0) : !1;
}
function Pf(e) {
  return typeof e == "function" ? e() : wr(e);
}
const cE = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const uE = Object.prototype.toString, dE = (e) => uE.call(e) === "[object Object]", el = () => {
};
function fE(e) {
  var t;
  const n = Pf(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Rf = cE ? window : void 0;
function vi(...e) {
  let t, n, s, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, r] = e, t = Rf) : [t, n, s, r] = e, !t)
    return el;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const o = [], i = () => {
    o.forEach((c) => c()), o.length = 0;
  }, l = (c, u, p, h) => (c.addEventListener(u, p, h), () => c.removeEventListener(u, p, h)), a = Zt(
    () => [fE(t), Pf(r)],
    ([c, u]) => {
      if (i(), !c)
        return;
      const p = dE(u) ? { ...u } : u;
      o.push(
        ...n.flatMap((h) => s.map((g) => l(c, h, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    a(), i();
  };
  return aE(d), d;
}
function pE(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: r,
    onSwipeStart: o,
    passive: i = !0,
    window: l = Rf
  } = t, a = Es({ x: 0, y: 0 }), d = Es({ x: 0, y: 0 }), c = te(() => a.x - d.x), u = te(() => a.y - d.y), { max: p, abs: h } = Math, g = te(() => p(h(c.value), h(u.value)) >= n), m = ne(!1), I = te(() => g.value ? h(c.value) > h(u.value) ? c.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), M = (_) => [_.touches[0].clientX, _.touches[0].clientY], P = (_, O) => {
    a.x = _, a.y = O;
  }, y = (_, O) => {
    d.x = _, d.y = O;
  };
  let S;
  const v = hE(l == null ? void 0 : l.document);
  i ? S = v ? { passive: !0 } : { capture: !1 } : S = v ? { passive: !1, capture: !0 } : { capture: !0 };
  const E = (_) => {
    m.value && (r == null || r(_, I.value)), m.value = !1;
  }, V = [
    vi(e, "touchstart", (_) => {
      if (_.touches.length !== 1)
        return;
      S.capture && !S.passive && _.preventDefault();
      const [O, R] = M(_);
      P(O, R), y(O, R), o == null || o(_);
    }, S),
    vi(e, "touchmove", (_) => {
      if (_.touches.length !== 1)
        return;
      const [O, R] = M(_);
      y(O, R), !m.value && g.value && (m.value = !0), m.value && (s == null || s(_));
    }, S),
    vi(e, ["touchend", "touchcancel"], E, S)
  ];
  return {
    isPassiveEventSupported: v,
    isSwiping: m,
    direction: I,
    coordsStart: a,
    coordsEnd: d,
    lengthX: c,
    lengthY: u,
    stop: () => V.forEach((_) => _())
  };
}
function hE(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", el, n), e.removeEventListener("x", el), t;
}
const mE = { class: "product-gallery" }, gE = { class: "main-image-wrapper" }, vE = ["src", "alt"], yE = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, bE = {
  key: 0,
  class: "thumbnails-wrapper"
}, _E = ["disabled"], EE = ["onClick", "aria-label"], wE = ["src", "alt"], xE = ["disabled"], NE = {
  key: 1,
  class: "swiper-dots"
}, SE = ["onClick", "aria-label"], kE = ["src", "alt"], CE = { class: "lightbox-counter" }, OE = 80, jr = 4, kc = 2, DE = {
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
    const t = e, n = ne(0), s = ne(!1), r = ne(!1), o = ne(!1), i = ne(!1), l = ne(0), a = ne(null), d = ne(0), c = ne(0), u = ne({}), p = te(() => t.images.map((V) => {
      if (V.src)
        return V;
      const k = V.url || V;
      return {
        src: `${k}?width=${t.imageTransformWidth}`,
        thumbnail: `${k}?width=${t.thumbnailWidth}`,
        alt: V.alt || t.productTitle
      };
    })), h = te(() => p.value[n.value] || { src: "", alt: "" }), g = te(() => ({
      width: "150px",
      height: "150px",
      left: `${d.value - 150 / 2}px`,
      top: `${c.value - 150 / 2}px`
    })), m = te(() => {
      const k = d.value / u.value.width * 100, _ = c.value / u.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${h.value.src})`,
        backgroundSize: `${u.value.width * kc}px ${u.value.height * kc}px`,
        backgroundPosition: `${k}% ${_}%`
      };
    }), I = (V) => {
      s.value = !0, n.value = V;
    }, M = (V) => {
      V === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - jr,
        l.value + 1
      );
    }, P = (V) => {
      n.value = V, r.value = !0, document.body.classList.add("overflow-hidden");
    }, y = () => {
      r.value = !1, document.body.classList.remove("overflow-hidden");
    }, S = (V) => {
      V === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, v = (V) => {
      const k = V.currentTarget.getBoundingClientRect();
      u.value = k, d.value = V.clientX - k.left, c.value = V.clientY - k.top;
    }, { lengthX: E } = pE(
      a,
      {
        onSwipeEnd() {
          E.value > 50 ? M("prev") : E.value < -50 && M("next");
        }
      }
    );
    return ot(() => {
      i.value = window.innerWidth < 768;
      const V = () => {
        i.value = window.innerWidth < 768;
      }, k = (_) => {
        r.value && (_.key === "Escape" && y(), _.key === "ArrowLeft" && S("prev"), _.key === "ArrowRight" && S("next"));
      };
      window.addEventListener("resize", V), window.addEventListener("keydown", k), vn(() => {
        window.removeEventListener("resize", V), window.removeEventListener("keydown", k);
      });
    }), (V, k) => (N(), C("div", mE, [
      f("div", gE, [
        f("div", {
          class: "main-image aspect-square bg-gray-100 overflow-hidden relative group cursor-zoom-in",
          style: { borderRadius: "var(--card-radius, 8px)" },
          onClick: k[1] || (k[1] = (_) => P(n.value)),
          onMouseenter: k[2] || (k[2] = (_) => o.value = !0),
          onMouseleave: k[3] || (k[3] = (_) => o.value = !1),
          onMousemove: v
        }, [
          f("img", {
            src: h.value.src,
            alt: h.value.alt,
            class: _e(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: k[0] || (k[0] = (_) => s.value = !1)
          }, null, 42, vE),
          s.value ? (N(), C("div", yE, k[9] || (k[9] = [
            f("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : U("", !0),
          k[10] || (k[10] = f("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
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
          o.value && !i.value ? (N(), C("div", {
            key: 1,
            class: "zoom-lens",
            style: je(g.value)
          }, null, 4)) : U("", !0)
        ], 32),
        o.value && !i.value ? (N(), C("div", {
          key: 0,
          class: "zoom-preview",
          style: je(m.value)
        }, null, 4)) : U("", !0)
      ]),
      p.value.length > 1 ? (N(), C("div", bE, [
        p.value.length > jr ? (N(), C("button", {
          key: 0,
          onClick: k[4] || (k[4] = (_) => M("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, k[11] || (k[11] = [
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
        ]), 8, _E)) : U("", !0),
        f("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          f("div", {
            class: "thumbnails-track",
            style: je({ transform: `translateX(-${l.value * (OE + 8)}px)` })
          }, [
            (N(!0), C(ie, null, Ee(p.value, (_, O) => (N(), C("button", {
              key: O,
              onClick: (R) => I(O),
              class: _e(["thumbnail", { active: O === n.value }]),
              "aria-label": `View image ${O + 1}`
            }, [
              f("img", {
                src: _.thumbnail || _.src,
                alt: _.alt,
                class: "w-full h-full object-contain"
              }, null, 8, wE)
            ], 10, EE))), 128))
          ], 4)
        ], 512),
        p.value.length > jr ? (N(), C("button", {
          key: 1,
          onClick: k[5] || (k[5] = (_) => M("next")),
          disabled: l.value >= p.value.length - jr,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, k[12] || (k[12] = [
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
        ]), 8, xE)) : U("", !0)
      ])) : U("", !0),
      p.value.length > 1 && i.value ? (N(), C("div", NE, [
        (N(!0), C(ie, null, Ee(p.value, (_, O) => (N(), C("button", {
          key: O,
          onClick: (R) => I(O),
          class: _e(["swiper-dot", { active: O === n.value }]),
          "aria-label": `Go to image ${O + 1}`
        }, null, 10, SE))), 128))
      ])) : U("", !0),
      (N(), St(Rn, { to: "body" }, [
        r.value ? (N(), C("div", {
          key: 0,
          class: "lightbox",
          onClick: y
        }, [
          f("button", {
            onClick: y,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, k[13] || (k[13] = [
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
          p.value.length > 1 ? (N(), C("button", {
            key: 0,
            onClick: k[6] || (k[6] = tn((_) => S("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, k[14] || (k[14] = [
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
          ]))) : U("", !0),
          f("div", {
            class: "lightbox-image-wrapper",
            onClick: k[7] || (k[7] = tn(() => {
            }, ["stop"]))
          }, [
            f("img", {
              src: h.value.src,
              alt: h.value.alt,
              class: "lightbox-image"
            }, null, 8, kE)
          ]),
          p.value.length > 1 ? (N(), C("button", {
            key: 1,
            onClick: k[8] || (k[8] = tn((_) => S("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, k[15] || (k[15] = [
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
          ]))) : U("", !0),
          f("div", CE, ee(n.value + 1) + " / " + ee(p.value.length), 1)
        ])) : U("", !0)
      ]))
    ]));
  }
}, TE = /* @__PURE__ */ Jo(DE, [["__scopeId", "data-v-c20f6e1d"]]), AE = { class: "flex items-center gap-2 flex-nowrap" }, $E = { class: "flex gap-0.5" }, VE = { class: "font-bold" }, IE = {
  __name: "ProductReviewSummary",
  props: {
    productId: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = ne(null), s = ne(null), r = ne(!0), o = async () => {
      try {
        const a = await (await fetch(
          "/api/isv-plugin/comment/front/query/summary",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json, text/plain, */*"
            },
            body: JSON.stringify({ productId: t.productId })
          }
        )).json();
        if (a.success && a.code === "200")
          n.value = a.data;
        else
          throw new Error(a.msg || "Failed to fetch reviews");
      } catch (l) {
        s.value = `Error loading reviews: ${l.message}`;
      } finally {
        r.value = !1;
      }
    }, i = () => {
      const l = document.getElementById("plugin-product-comment");
      if (l) {
        const d = l.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: d - 150,
          behavior: "smooth"
        });
      }
    };
    return ot(o), (l, a) => !r.value && !s.value && n.value ? (N(), C("div", {
      key: 0,
      class: "cursor-pointer",
      onClick: i
    }, [
      f("div", AE, [
        f("span", $E, [
          (N(), C(ie, null, Ee(5, (d) => f("span", {
            key: d,
            class: _e([
              "text-xl",
              d <= Math.round(n.value.score) ? "text-yellow-400" : "text-gray-300"
            ])
          }, "★", 2)), 64))
        ]),
        f("span", VE, ee(n.value.score.toFixed(1)), 1)
      ])
    ])) : U("", !0);
  }
}, ME = {
  class: "bg-gray-50 p-6 lg:sticky lg:top-24 border border-gray-200",
  style: { borderRadius: "var(--card-radius, 8px)", boxShadow: "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))" }
}, PE = { class: "space-y-3 mb-4" }, RE = { class: "flex justify-between text-sm" }, LE = { class: "text-gray-600" }, FE = { class: "font-medium text-gray-900" }, BE = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, jE = {
  key: 1,
  class: "flex justify-between text-sm"
}, HE = { class: "text-gray-900" }, UE = {
  key: 2,
  class: "flex justify-between text-sm"
}, qE = { class: "text-gray-900" }, zE = { class: "border-t pt-4 mb-6" }, WE = { class: "flex justify-between items-baseline" }, KE = { class: "text-right" }, GE = { class: "text-xl font-bold text-gray-900" }, JE = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, YE = { class: "mb-6" }, XE = { class: "group" }, QE = { class: "mt-3" }, ZE = ["disabled"], ew = ["disabled"], tw = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, nw = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, sw = ["disabled"], rw = {
  key: 0,
  class: "flex items-center gap-2"
}, ow = { key: 1 }, iw = {
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
    const n = e, s = t, r = ne(""), o = ne(""), i = ne(""), l = ne(!1), a = ne(!1), d = ne(!1), c = te(() => n.cart.item_count || 0), u = te(() => n.cart.total_price || 0), p = te(() => n.cart.original_total_price || n.cart.total_price || 0), h = te(() => n.cart.total_discount || 0), g = te(() => u.value >= 5e3 ? 0 : 500), m = te(() => Math.round(u.value * 0.1)), I = (y) => `$${(y / 100).toFixed(2)}`, M = async () => {
      var y;
      if (!(!r.value.trim() || l.value)) {
        l.value = !0, o.value = "", i.value = "";
        try {
          const S = new FormData();
          S.append("discount_code", r.value);
          const v = await fetch("/discount/apply", {
            method: "POST",
            body: S
          });
          if (v.ok)
            i.value = "Promo code applied successfully!", r.value = "", await ((y = window.OrionCart) == null ? void 0 : y.fetchCart());
          else {
            const E = await v.json();
            o.value = E.message || "Invalid promo code";
          }
        } catch (S) {
          console.error("Failed to apply promo code:", S), o.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, P = async () => {
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
    return (y, S) => (N(), C("div", ME, [
      S[10] || (S[10] = f("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      f("div", PE, [
        f("div", RE, [
          f("span", LE, "Subtotal (" + ee(c.value) + " " + ee(c.value === 1 ? "item" : "items") + ")", 1),
          f("span", FE, ee(I(p.value)), 1)
        ]),
        h.value > 0 ? (N(), C("div", BE, [
          S[3] || (S[3] = f("span", { class: "flex items-center gap-1" }, [
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
            pt(" Discounts ")
          ], -1)),
          f("span", null, "-" + ee(I(h.value)), 1)
        ])) : U("", !0),
        e.showShipping ? (N(), C("div", jE, [
          S[4] || (S[4] = f("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          f("span", HE, ee(g.value === 0 ? "Free" : I(g.value)), 1)
        ])) : U("", !0),
        e.showTax ? (N(), C("div", UE, [
          S[5] || (S[5] = f("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          f("span", qE, ee(I(m.value)), 1)
        ])) : U("", !0)
      ]),
      f("div", zE, [
        f("div", WE, [
          S[6] || (S[6] = f("span", { class: "text-lg font-semibold" }, "Total", -1)),
          f("div", KE, [
            f("span", GE, ee(I(u.value)), 1),
            h.value > 0 ? (N(), C("p", JE, " You saved " + ee(I(h.value)) + "! ", 1)) : U("", !0)
          ])
        ])
      ]),
      f("div", YE, [
        f("details", XE, [
          S[7] || (S[7] = f("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
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
          f("div", QE, [
            f("form", {
              onSubmit: tn(M, ["prevent"]),
              class: "flex gap-2"
            }, [
              Te(f("input", {
                "onUpdate:modelValue": S[0] || (S[0] = (v) => r.value = v),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                style: { borderRadius: "var(--card-radius, 8px)" },
                disabled: l.value
              }, null, 8, ZE), [
                [Os, r.value]
              ]),
              f("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !r.value.trim() || l.value
              }, ee(l.value ? "Applying..." : "Apply"), 9, ew)
            ], 32),
            o.value ? (N(), C("p", tw, ee(o.value), 1)) : U("", !0),
            i.value ? (N(), C("p", nw, ee(i.value), 1)) : U("", !0)
          ])
        ])
      ]),
      f("button", {
        onClick: P,
        class: "w-full py-3 px-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: je({
          backgroundColor: d.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: S[1] || (S[1] = (v) => d.value = !0),
        onMouseleave: S[2] || (S[2] = (v) => d.value = !1),
        disabled: c.value === 0 || a.value
      }, [
        a.value ? (N(), C("span", rw, S[8] || (S[8] = [
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
          pt(" Processing... ", -1)
        ]))) : (N(), C("span", ow, S[9] || (S[9] = [
          pt(" Proceed to Checkout ", -1),
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
      ], 44, sw),
      S[11] || (S[11] = Fs('<div class="mt-6 space-y-2"><div class="flex items-center gap-2 text-xs text-gray-600"><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600"><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600"><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t"><p class="text-xs text-gray-600 mb-2">We accept</p><div class="flex gap-2"><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><path d="M0 0h48v32H0z" fill="#1A1F71"></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff"></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="#EB001B"></rect><circle cx="19" cy="16" r="8" fill="#FF5F00"></circle><circle cx="29" cy="16" r="8" fill="#F79E1B"></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="#2E7BC4"></rect><path d="M20 10h8l-1 12h-6z" fill="#fff"></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="#253B80"></rect><path d="M19 11h10v10H19z" fill="#179BD7"></path></svg></div></div>', 2))
    ]));
  }
}, lw = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden"
}, aw = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, cw = { class: "bg-white transition-all duration-300 border-b border-gray-200" }, uw = { class: "max-w-6xl mx-auto" }, dw = { class: "relative" }, fw = { class: "px-4 py-8 sm:px-6 lg:px-8" }, pw = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, hw = { class: "flex-1 relative group" }, mw = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, gw = {
  key: 0,
  class: "relative"
}, vw = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, yw = { class: "flex flex-wrap gap-2" }, bw = ["onClick"], _w = {
  key: 0,
  class: "border-t border-gray-100"
}, Ew = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, ww = {
  key: 0,
  class: "p-6"
}, xw = { class: "animate-pulse" }, Nw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Sw = {
  key: 1,
  class: "p-6"
}, kw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, Cw = ["href"], Ow = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, Dw = ["src", "alt"], Tw = {
  key: 1,
  class: "w-20 h-20 bg-gray-100 flex items-center justify-center"
}, Aw = { class: "flex-1 min-w-0" }, $w = { class: "text-lg font-heading text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 pt-2" }, Vw = { class: "mt-2 flex items-center gap-2" }, Iw = { class: "text-sm font-semibold text-gray-900" }, Mw = {
  key: 0,
  class: "text-xs text-gray-400 line-through"
}, Pw = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, Rw = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, Lw = ["href"], Fw = { class: "text-sm text-gray-700 group-hover:text-red-600 transition-colors" }, Bw = {
  key: 3,
  class: "p-12 text-center"
}, jw = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, Hw = ["href"], Uw = {
  __name: "SearchOverlay",
  setup(e) {
    const t = ne(!1), n = ne(""), s = ne(null), r = ne(!1), o = ne({
      products: [],
      collections: []
    }), i = ne(null), l = te(() => {
      var S;
      return ((S = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : S.search) || "/search";
    }), a = te(() => n.value.length > 0), d = te(() => {
      var E, V;
      const S = [], v = ((V = (E = window.Shopline) == null ? void 0 : E.theme) == null ? void 0 : V.settings) || {};
      for (let k = 1; k <= 6; k++) {
        const _ = v[`popular_search_${k}`];
        _ && _.trim() && S.push(_.trim());
      }
      return S;
    }), c = te(() => d.value.length > 0), u = te(() => {
      var v, E, V;
      const S = ((V = (E = (v = window.Shopline) == null ? void 0 : v.theme) == null ? void 0 : E.settings) == null ? void 0 : V.button_primary_bg) || "#dc2626";
      if (S.startsWith("#")) {
        const k = S.replace("#", ""), _ = parseInt(k.substr(0, 2), 16), O = parseInt(k.substr(2, 2), 16), R = parseInt(k.substr(4, 2), 16);
        return `${_}, ${O}, ${R}`;
      }
      return S.replace("rgb(", "").replace(")", "");
    }), p = ne(!1), h = (S) => {
      var O, R;
      if (!S && S !== 0) return "$0.00";
      const v = S > 100 ? S / 100 : S, E = ((O = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : O.money_format) || "${{amount}}", V = ((R = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : R.current) || "en", _ = new Intl.NumberFormat(V, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(v);
      return E.replace("{{amount}}", _);
    }, g = async () => {
      var S;
      t.value = !0, document.body.classList.add("overflow-hidden"), await es(), (S = s.value) == null || S.focus();
    }, m = () => {
      t.value = !1, document.body.classList.remove("overflow-hidden"), n.value = "", o.value = { products: [], collections: [] };
    }, I = () => {
      if (clearTimeout(i.value), n.value.length < 2) {
        o.value = { products: [], collections: [] }, r.value = !1;
        return;
      }
      r.value = !0, i.value = setTimeout(() => {
        M();
      }, 300);
    }, M = async () => {
      var S;
      try {
        const v = n.value, V = `${((S = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : S.search) || "/search"}?keyword=${encodeURIComponent(v)}`, k = await fetch(V, {
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest"
          }
        });
        if (!k.ok)
          throw new Error("Search request failed");
        const _ = k.headers.get("content-type");
        let O;
        if (_ && _.includes("application/json"))
          O = await k.json();
        else {
          const $ = await k.text(), L = new DOMParser().parseFromString($, "text/html").querySelectorAll("product-card"), X = [];
          L.forEach((W) => {
            const he = {
              id: W.getAttribute("product-id"),
              title: W.getAttribute("title"),
              url: W.getAttribute("url"),
              handle: W.getAttribute("handle"),
              price: parseFloat(W.getAttribute("price") || "0"),
              compareAtPrice: parseFloat(W.getAttribute("compare-at-price") || "0"),
              image: W.getAttribute("image"),
              vendor: W.getAttribute("vendor"),
              available: W.getAttribute(":available") === "true"
            };
            he.title && he.id && X.push(he);
          }), O = { products: X };
        }
        const w = (O.products || O.results || []).map(($) => ({
          id: $.id,
          url: $.url || `/products/${$.handle}`,
          title: $.title,
          image: $.featured_image || $.image || $.images && $.images[0],
          price: $.price,
          compareAtPrice: $.compare_at_price || $.compareAtPrice,
          vendor: $.vendor,
          available: $.available !== !1
        })).slice(0, 8);
        o.value = {
          products: w,
          collections: []
        }, r.value = !1;
      } catch (v) {
        console.error("Search error:", v), o.value = { products: [], collections: [] }, r.value = !1;
      }
    }, P = () => {
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(
        n.value
      )}`);
    }, y = (S) => {
      S.key === "Escape" && t.value && m();
    };
    return ot(() => {
      document.addEventListener("search-overlay:open", g), document.addEventListener("search-overlay:close", m), document.addEventListener("keydown", y);
    }), vn(() => {
      document.removeEventListener("search-overlay:open", g), document.removeEventListener("search-overlay:close", m), document.removeEventListener("keydown", y);
    }), (S, v) => (N(), St(Rn, { to: "body" }, [
      ue(ft, { name: "search-overlay" }, {
        default: Fe(() => [
          t.value ? (N(), C("div", lw, [
            ue(ft, { name: "fade" }, {
              default: Fe(() => [
                t.value ? (N(), C("div", {
                  key: 0,
                  class: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                  onClick: m
                })) : U("", !0)
              ]),
              _: 1
            }),
            ue(ft, {
              name: "slide-down",
              appear: ""
            }, {
              default: Fe(() => {
                var E, V;
                return [
                  t.value ? (N(), C("div", aw, [
                    f("div", cw, [
                      f("div", uw, [
                        f("div", dw, [
                          f("div", fw, [
                            f("div", pw, [
                              f("div", hw, [
                                v[6] || (v[6] = f("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
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
                                Te(f("input", {
                                  ref_key: "searchInput",
                                  ref: s,
                                  "onUpdate:modelValue": v[0] || (v[0] = (k) => n.value = k),
                                  type: "search",
                                  placeholder: "Search for products...",
                                  class: "w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200",
                                  style: je({
                                    borderRadius: "var(--button-radius, 16px)",
                                    "--tw-ring-color": `rgb(${u.value})`,
                                    borderColor: p.value ? `rgb(${u.value})` : ""
                                  }),
                                  onInput: I,
                                  onKeydown: [
                                    Ui(m, ["escape"]),
                                    Ui(P, ["enter"])
                                  ],
                                  onFocus: v[1] || (v[1] = (k) => p.value = !0),
                                  onBlur: v[2] || (v[2] = (k) => p.value = !1)
                                }, null, 36), [
                                  [Os, n.value]
                                ]),
                                f("div", mw, [
                                  r.value ? (N(), C("div", gw, v[4] || (v[4] = [
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    f("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (N(), C("button", {
                                    key: 1,
                                    onClick: v[3] || (v[3] = (k) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, v[5] || (v[5] = [
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
                                  ]))) : U("", !0)
                                ])
                              ]),
                              f("button", {
                                type: "button",
                                class: "p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200",
                                onClick: m
                              }, v[7] || (v[7] = [
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
                            !n.value && !r.value && c.value ? (N(), C("div", vw, [
                              v[8] || (v[8] = f("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              f("div", yw, [
                                (N(!0), C(ie, null, Ee(d.value, (k) => (N(), C("button", {
                                  key: k,
                                  onClick: (_) => {
                                    n.value = k, P();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, ee(k), 9, bw))), 128))
                              ])
                            ])) : U("", !0)
                          ]),
                          a.value ? (N(), C("div", _w, [
                            f("div", Ew, [
                              r.value ? (N(), C("div", ww, [
                                f("div", xw, [
                                  v[10] || (v[10] = f("div", { class: "h-4 bg-gray-200 rounded w-20 mb-4" }, null, -1)),
                                  f("div", Nw, [
                                    (N(), C(ie, null, Ee(4, (k) => f("div", {
                                      key: k,
                                      class: "flex items-start space-x-3"
                                    }, v[9] || (v[9] = [
                                      f("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      f("div", { class: "flex-1" }, [
                                        f("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        f("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : o.value.products && o.value.products.length > 0 ? (N(), C("div", Sw, [
                                v[12] || (v[12] = f("h3", { class: "text-xl mb-4" }, "Products", -1)),
                                f("div", kw, [
                                  (N(!0), C(ie, null, Ee(o.value.products, (k) => (N(), C("a", {
                                    key: k.id,
                                    href: k.url,
                                    class: "group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: m
                                  }, [
                                    f("div", Ow, [
                                      k.image ? (N(), C("img", {
                                        key: 0,
                                        src: k.image,
                                        alt: k.title,
                                        class: "w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, Dw)) : (N(), C("div", Tw, v[11] || (v[11] = [
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
                                    f("div", Aw, [
                                      f("p", $w, ee(k.title), 1),
                                      f("div", Vw, [
                                        f("p", Iw, ee(h(k.price)), 1),
                                        k.compareAtPrice && k.compareAtPrice > k.price ? (N(), C("p", Mw, ee(h(k.compareAtPrice)), 1)) : U("", !0)
                                      ])
                                    ])
                                  ], 8, Cw))), 128))
                                ])
                              ])) : U("", !0),
                              o.value.collections && o.value.collections.length > 0 ? (N(), C("div", Pw, [
                                v[14] || (v[14] = f("h3", { class: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-4" }, " Collections ", -1)),
                                f("div", Rw, [
                                  (N(!0), C(ie, null, Ee(o.value.collections, (k) => (N(), C("a", {
                                    key: k.id,
                                    href: k.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: m
                                  }, [
                                    f("span", Fw, ee(k.title), 1),
                                    v[13] || (v[13] = f("svg", {
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
                                  ], 8, Lw))), 128))
                                ])
                              ])) : U("", !0),
                              n.value && !r.value && (!o.value.products || o.value.products.length === 0) && (!o.value.collections || o.value.collections.length === 0) ? (N(), C("div", Bw, v[15] || (v[15] = [
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
                                f("p", { class: "text-gray-900 font-medium mb-2" }, " No results found ", -1),
                                f("p", { class: "text-sm text-gray-500" }, " Try searching for something else or check your spelling ", -1)
                              ]))) : U("", !0)
                            ]),
                            n.value && (((E = o.value.products) == null ? void 0 : E.length) > 0 || ((V = o.value.collections) == null ? void 0 : V.length) > 0) ? (N(), C("div", jw, [
                              f("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(
                                  n.value
                                )}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors",
                                onClick: m
                              }, [
                                pt(' View all results for "' + ee(n.value) + '" ', 1),
                                v[16] || (v[16] = f("svg", {
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
                              ], 8, Hw)
                            ])) : U("", !0)
                          ])) : U("", !0)
                        ])
                      ])
                    ])
                  ])) : U("", !0)
                ];
              }),
              _: 1
            })
          ])) : U("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, qw = {
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
    const t = ne(!1), n = ne(!1), s = te(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), r = te(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: t.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), o = te(() => {
      if (!e.tags) return [];
      if (typeof e.tags == "string")
        try {
          const d = JSON.parse(e.tags);
          return Array.isArray(d) ? d : [];
        } catch {
          return [];
        }
      return Array.isArray(e.tags) ? e.tags : [];
    }), i = te(() => {
      if (!e.image) return "";
      if (typeof e.image == "string" && e.image.startsWith("{"))
        try {
          const d = JSON.parse(e.image);
          return d.mediaUrl || d.url || "";
        } catch {
          return e.image;
        }
      return e.image;
    }), l = te(() => {
      var c, u;
      if (e.publishedAt && e.publishedAt.trim() && !e.publishedAt.match(/^\d+$/) && // Not just a timestamp
      !e.publishedAt.includes("T") && // Not ISO date format
      !e.publishedAt.match(/^\d{4}-\d{2}-\d{2}/) && // Not YYYY-MM-DD format
      e.publishedAt.length < 20)
        return e.publishedAt;
      const d = e.rawPublishedAt || e.publishedAt;
      if (!d) return "";
      try {
        let p;
        const h = String(d).trim();
        if (/^\d+$/.test(h)) {
          const m = parseInt(h);
          p = new Date(
            m > 1e12 ? m : m * 1e3
          );
        } else if (typeof d == "string")
          p = new Date(d);
        else
          return "";
        if (isNaN(p.getTime()) || p.getFullYear() < 1900 || p.getFullYear() > 2100)
          return console.warn(
            "Invalid or unreasonable date:",
            d,
            "parsed as:",
            p
          ), "";
        const g = typeof window < "u" && typeof window.Shopline < "u" && ((u = (c = window.Shopline) == null ? void 0 : c.locale) == null ? void 0 : u.current) || "en";
        return new Intl.DateTimeFormat(g, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(p);
      } catch (p) {
        return console.warn("Error formatting date:", p, d), "";
      }
    }), a = te(() => {
      if (!e.content) return "";
      const d = e.content.replace(/<[^>]*>/g, "");
      return d.length <= 150 ? d : d.substring(0, 150).trim() + "...";
    });
    return {
      imageAspectClass: s,
      processedTags: o,
      processedImage: i,
      formattedDate: l,
      truncatedContent: a,
      cardStyles: r,
      isHovered: t,
      titleHovered: n
    };
  }
}, zw = ["href"], Ww = ["src", "alt"], Kw = { class: "relative p-6 flex-1 flex flex-col z-10" }, Gw = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, Jw = ["href"], Yw = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, Xw = { key: 0 }, Qw = {
  key: 1,
  class: "text-gray-300"
}, Zw = ["datetime"], ex = { class: "flex-1 mb-6" }, tx = {
  key: 0,
  class: "text-gray-600 line-clamp-2"
}, nx = ["innerHTML"], sx = { class: "mt-auto" }, rx = ["href"];
function ox(e, t, n, s, r, o) {
  return N(), C("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: je(s.cardStyles),
    onMouseenter: t[4] || (t[4] = (i) => s.isHovered = !0),
    onMouseleave: t[5] || (t[5] = (i) => s.isHovered = !1)
  }, [
    t[8] || (t[8] = f("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (N(), C("div", {
      key: 0,
      class: _e([s.imageAspectClass, "relative overflow-hidden"])
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
        }, null, 8, Ww),
        t[6] || (t[6] = f("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, zw)
    ], 2)) : U("", !0),
    f("div", Kw, [
      n.showTags && s.processedTags.length > 0 ? (N(), C("div", Gw, [
        (N(!0), C(ie, null, Ee(s.processedTags.slice(0, 3), (i) => (N(), C("span", {
          key: i,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, ee(i), 1))), 128))
      ])) : U("", !0),
      f("h3", {
        class: "text-xl mb-2 transition-colors duration-300 line-clamp-2",
        onMouseenter: t[0] || (t[0] = (i) => s.titleHovered = !0),
        onMouseleave: t[1] || (t[1] = (i) => s.titleHovered = !1)
      }, [
        f("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2",
          style: je(s.titleHovered ? { color: "var(--color-primary, #dc2626)" } : {})
        }, ee(n.title), 13, Jw)
      ], 32),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (N(), C("div", Yw, [
        n.showAuthor && n.author ? (N(), C("span", Xw, ee(n.author), 1)) : U("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (N(), C("span", Qw, "•")) : U("", !0),
        n.showDate && s.formattedDate ? (N(), C("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, ee(s.formattedDate), 9, Zw)) : U("", !0)
      ])) : U("", !0),
      f("div", ex, [
        n.excerpt ? (N(), C("p", tx, ee(n.excerpt), 1)) : n.content ? (N(), C("div", {
          key: 1,
          class: "text-gray-600 line-clamp-2",
          innerHTML: s.truncatedContent
        }, null, 8, nx)) : U("", !0)
      ]),
      f("div", sx, [
        f("a", {
          href: n.url,
          class: "inline-flex items-center gap-2 font-semibold text-sm group transition-all duration-300",
          style: {
            color: "var(--color-primary, #dc2626)"
          },
          onMouseenter: t[2] || (t[2] = (i) => i.currentTarget.style.opacity = "0.8"),
          onMouseleave: t[3] || (t[3] = (i) => i.currentTarget.style.opacity = "1")
        }, t[7] || (t[7] = [
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
        ]), 40, rx)
      ])
    ])
  ], 36);
}
const Lf = /* @__PURE__ */ Jo(qw, [["render", ox]]), ix = {
  name: "BlogArticles",
  components: {
    ArticleCard: Lf
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
    const t = ne([]), n = ne(!0), s = ne(null), r = te(() => Math.min(e.limit, 6)), o = te(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), i = te(() => ({
      maxWidth: e.columnsDesktop === 4 ? "300px" : e.columnsDesktop === 3 ? "350px" : e.columnsDesktop === 2 ? "500px" : "100%",
      borderRadius: "var(--card-radius, 8px)",
      backgroundColor: "var(--color-loading-bg, #f5f5f5)",
      overflow: "hidden"
    })), l = te(() => ({ maxWidth: e.columnsDesktop === 4 ? "300px" : e.columnsDesktop === 3 ? "350px" : e.columnsDesktop === 2 ? "500px" : "100%" })), a = (c) => {
      var u, p;
      if (!c) return "";
      try {
        const h = new Date(c), g = ((p = (u = window.Shopline) == null ? void 0 : u.locale) == null ? void 0 : p.current) || "en";
        return new Intl.DateTimeFormat(g, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(h);
      } catch {
        return c;
      }
    }, d = async () => {
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
            (c) => String(c.id) !== String(e.currentArticleId)
          )), t.value = t.value.slice(0, e.limit);
          return;
        }
        throw new Error("Unable to fetch blog articles. Blog API endpoint not available.");
      } catch (c) {
        console.error("Error fetching blog articles:", c), s.value = "Unable to load articles. Please ensure a valid blog is selected.";
      } finally {
        n.value = !1;
      }
    };
    return ot(() => {
      d();
    }), {
      articles: t,
      loading: n,
      error: s,
      displayLimit: r,
      imageAspectClass: o,
      skeletonStyles: i,
      cardWrapperStyles: l,
      formatDate: a
    };
  }
}, lx = { class: "blog-articles-component" }, ax = {
  key: 0,
  class: "flex flex-wrap justify-center gap-6"
}, cx = { class: "p-6" }, ux = {
  key: 0,
  class: "flex gap-2 mb-4"
}, dx = {
  key: 1,
  class: "h-4 bg-gray-200 rounded w-1/2 mb-4"
}, fx = {
  key: 1,
  class: "text-center py-12"
}, px = { class: "text-gray-600" }, hx = {
  key: 2,
  class: "flex flex-wrap justify-center gap-6"
}, mx = ["title", "url", "excerpt", "content", "author", "published-at", "raw-published-at", "image", "image-alt", "tags", "image-ratio", "show-image", "show-author", "show-date"], gx = {
  key: 3,
  class: "text-center py-12"
};
function vx(e, t, n, s, r, o) {
  return N(), C("div", lx, [
    s.loading ? (N(), C("div", ax, [
      (N(!0), C(ie, null, Ee(s.displayLimit, (i) => (N(), C("div", {
        key: `skeleton-${i}`,
        class: "article-skeleton flex-shrink-0 w-full sm:w-auto animate-pulse",
        style: je(s.skeletonStyles)
      }, [
        n.showImage ? (N(), C("div", {
          key: 0,
          class: _e([s.imageAspectClass, "bg-gray-200"])
        }, null, 2)) : U("", !0),
        f("div", cx, [
          n.showTags ? (N(), C("div", ux, t[0] || (t[0] = [
            f("div", { class: "h-6 w-16 bg-gray-200 rounded-full" }, null, -1),
            f("div", { class: "h-6 w-20 bg-gray-200 rounded-full" }, null, -1)
          ]))) : U("", !0),
          t[1] || (t[1] = f("div", { class: "h-6 bg-gray-200 rounded mb-2" }, null, -1)),
          t[2] || (t[2] = f("div", { class: "h-6 bg-gray-200 rounded w-3/4 mb-4" }, null, -1)),
          n.showAuthor || n.showDate ? (N(), C("div", dx)) : U("", !0),
          t[3] || (t[3] = Fs('<div class="space-y-2 mb-6" data-v-d0155edf><div class="h-4 bg-gray-200 rounded" data-v-d0155edf></div><div class="h-4 bg-gray-200 rounded" data-v-d0155edf></div><div class="h-4 bg-gray-200 rounded w-2/3" data-v-d0155edf></div></div><div class="h-6 bg-gray-200 rounded w-24" data-v-d0155edf></div>', 2))
        ])
      ], 4))), 128))
    ])) : s.error ? (N(), C("div", fx, [
      t[4] || (t[4] = f("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, "Unable to load articles", -1)),
      f("p", px, ee(s.error), 1)
    ])) : s.articles.length > 0 ? (N(), C("div", hx, [
      (N(!0), C(ie, null, Ee(s.articles, (i) => {
        var l, a;
        return N(), C("div", {
          key: i.id,
          class: "article-card-wrapper flex-shrink-0 w-full sm:w-auto",
          style: je(s.cardWrapperStyles)
        }, [
          f("article-card", {
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
          }, null, 8, mx)
        ], 4);
      }), 128))
    ])) : (N(), C("div", gx, t[5] || (t[5] = [
      f("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, "No articles found", -1),
      f("p", { class: "text-gray-600" }, "This blog has no articles yet.", -1)
    ])))
  ]);
}
const yx = /* @__PURE__ */ Jo(ix, [["render", vx], ["__scopeId", "data-v-d0155edf"]]);
({
  ...bs,
  props: {
    ...bs.props
  }
});
const bx = /* @__PURE__ */ kt(If), _x = /* @__PURE__ */ kt(wb), Ex = /* @__PURE__ */ kt(qb, {
  shadowRoot: !1
}), wx = /* @__PURE__ */ kt($f), xx = /* @__PURE__ */ kt(Mf), Nx = /* @__PURE__ */ kt(P_), Sx = /* @__PURE__ */ kt(TE), kx = /* @__PURE__ */ kt(IE, {
  shadowRoot: !1
}), Cx = /* @__PURE__ */ kt(Vf), Ox = /* @__PURE__ */ kt(iw);
customElements.define("cart-drawer", bx);
customElements.define("mobile-menu", _x);
customElements.define("product-variant-picker", Ex);
customElements.define("quantity-selector", wx);
customElements.define("collection-filters", xx);
customElements.define("collection-grid", Nx);
customElements.define("product-gallery", Sx);
customElements.define("reviews-summary", kx);
customElements.define("cart-item", Cx);
customElements.define("cart-summary", Ox);
function _s(e = document) {
  e.querySelectorAll(".cart-drawer-mount").forEach((c) => {
    if (c._vueApp) return;
    const u = Tt(If);
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
    }, p = Tt(m1, u);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll("collection-sort").forEach((c) => {
    if (c._vueApp) return;
    const u = {
      collectionHandle: c.getAttribute("collection-handle"),
      currentSort: c.getAttribute("current-sort") || "manual"
    }, p = Tt(L_, u);
    c._vueApp = p, p.mount(c);
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
    }, p = Tt(
      {
        components: { Button: bs },
        template: `<Button v-bind="$attrs">${c.innerHTML}</Button>`
      },
      u
    );
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll(
    "collection-filter-drawer"
  ).forEach((c) => {
    if (c._vueApp) return;
    const u = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]")
    }, p = Tt(lE, u);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll(
    "collection-filter-sidebar"
  ).forEach((c) => {
    if (c._vueApp) return;
    const u = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]"),
      showSort: c.getAttribute(":show-sort") === "true"
    }, p = Tt(Mf, u);
    c._vueApp = p, p.mount(c);
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
    }, p = Tt(Lf, u);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll("blog-articles").forEach((c) => {
    if (c._vueApp) return;
    const u = {
      blogId: c.getAttribute("blog-id"),
      blogHandle: c.getAttribute("blog-handle") || "",
      limit: parseInt(c.getAttribute("limit")) || 3,
      currentArticleId: c.getAttribute("current-article-id"),
      columnsDesktop: parseInt(c.getAttribute("columns-desktop")) || 3,
      imageRatio: c.getAttribute("image-ratio") || "landscape",
      showImage: c.getAttribute("show-image") !== "false",
      showAuthor: c.getAttribute("show-author") === "true",
      showDate: c.getAttribute("show-date") !== "false",
      showTags: c.getAttribute("show-tags") === "true"
    }, p = Tt(yx, u);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll("search-overlay").forEach((c) => {
    if (c._vueApp) return;
    const u = Tt(Uw);
    c._vueApp = u, u.mount(c);
  }), e === document && document.querySelectorAll(".header-group").forEach((u) => {
    const p = u.querySelector(".site-header");
    if (!p) return;
    const h = u.dataset.transparent === "true", g = document.body.classList.contains("template-index");
    if (h && g && window.scrollY === 0 && (p.style.backgroundColor = "transparent", p.style.borderBottomColor = "transparent", p.classList.add("transparent-not-scrolled")), u.dataset.sticky === "true" && !p._stickyInitialized) {
      let P = function() {
        const y = window.scrollY, S = u.dataset.hideOnScroll === "true", v = u.dataset.transparent === "true", E = document.body.classList.contains("template-index");
        y > 0 ? u.classList.add("announcement-hidden") : u.classList.remove("announcement-hidden"), y > 0 ? (p.classList.add("scrolled"), p.classList.remove("transparent-not-scrolled")) : (p.classList.remove("scrolled"), v && E && p.classList.add("transparent-not-scrolled")), v && E && (y <= 50 ? (p.style.backgroundColor = "transparent", p.style.borderBottomColor = "transparent") : (p.style.backgroundColor = "", p.style.borderBottomColor = "")), S && (y > 300 && y > I ? (p.classList.add("hide-on-scroll"), p.classList.remove("show-on-scroll")) : (p.classList.remove("hide-on-scroll"), p.classList.add("show-on-scroll"))), I = y, M = !1;
      };
      var m = P;
      p._stickyInitialized = !0;
      let I = 0, M = !1;
      window.addEventListener("scroll", function() {
        M || (window.requestAnimationFrame(P), M = !0);
      }), P();
    }
  });
}
window.getImageUrl = function(e, t = {}) {
  if (!e || e === "null" || e === "undefined")
    return "";
  const n = {
    // Product images
    "product-card": { width: 800 },
    // 2x for 400px display on retina
    "product-card-small": { width: 600 },
    // 2x for 300px display
    "product-thumbnail": { width: 400 },
    // For thumbnails and small images
    "product-gallery": { width: 1200 },
    // For main product gallery
    "product-gallery-thumbnail": { width: 300 },
    // Gallery thumbnails
    // Cart images
    "cart-item": { width: 300 },
    // Cart drawer/page items
    "cart-item-small": { width: 150 },
    // Mini cart items
    // Hero/banner images
    "hero-mobile": { width: 768 },
    // Mobile hero images
    "hero-desktop": { width: 1920 },
    // Desktop hero images
    banner: { width: 1200 },
    // General banner images
    // Blog/article images
    "article-card": { width: 600 },
    // Blog article cards
    "article-hero": { width: 1200 },
    // Article hero images
    // Collection images
    "collection-card": { width: 800 },
    // Collection listing cards
    // General sizes
    small: { width: 300 },
    medium: { width: 600 },
    large: { width: 1200 },
    xlarge: { width: 1920 }
  };
  t.preset && n[t.preset] && (t = { ...n[t.preset], ...t });
  const { width: s, height: r, quality: o = 80, crop: i = null } = t;
  if (e.includes("myshopline.com") || e.includes("shopline")) {
    const l = new URL(e), a = l.pathname, d = a.lastIndexOf("/"), c = a.substring(0, d + 1), p = a.substring(d + 1).replace(/_\d+x\d*(?=\.[^.]*$)/, "").replace(/_\d+x(?=\.[^.]*$)/, ""), h = p.lastIndexOf("."), g = p.substring(0, h), m = p.substring(h);
    let I;
    s && r ? I = `${g}_${s}x${r}${m}` : s ? I = `${g}_${s}x${m}` : I = p;
    const M = `${l.protocol}//${l.host}${c}${I}`, P = new URLSearchParams(l.search);
    o !== 80 && P.set("q", o), i && P.set("crop", i);
    const y = P.toString();
    return y ? `${M}?${y}` : M;
  }
  return e;
};
window.getImageSrcSet = function(e, t = [400, 600, 800, 1e3, 1200]) {
  return !e || e === "null" || e === "undefined" ? "" : t.map((n) => `${window.getImageUrl(e, { width: n })} ${n}w`).join(", ");
};
window.createResponsiveImageTag = function(e, t = {}) {
  const {
    alt: n = "",
    className: s = "",
    sizes: r = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    widths: o = [400, 600, 800, 1e3, 1200],
    loading: i = "lazy"
  } = t;
  if (!e || e === "null" || e === "undefined")
    return "";
  const l = window.getImageSrcSet(e, o);
  return `<img 
    src="${window.getImageUrl(e, {
    width: o[Math.floor(o.length / 2)]
  })}"
    srcset="${l}"
    sizes="${r}"
    alt="${n}"
    class="${s}"
    loading="${i}"
  >`;
};
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
      const o = await (await fetch("/api/carts/ajax-cart/change.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(s)
      })).json();
      return await this.fetchCart(), o;
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
window.mountVueComponents = _s;
document.addEventListener("DOMContentLoaded", () => {
  _s();
});
document.readyState !== "loading" && _s();
var Cc;
((Cc = window.Shopline) != null && Cc.designMode || window.location.href.includes("theme_preview_mode")) && (document.addEventListener("shopline:section:load", (e) => {
  const t = document.querySelector(`[data-section-id="${e.detail.sectionId}"]`) || document;
  _s(t);
}), document.addEventListener("shopline:section:reorder", () => {
  _s();
}), document.addEventListener("shopline:block:select", (e) => {
  const t = document.querySelector(
    `[data-block-id="${e.detail.blockId}"]`
  );
  t && _s(t);
}));
